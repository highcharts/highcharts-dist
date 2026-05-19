/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Dawid Draguła
 *
 * */
'use strict';
/* *
 *
 *  Class
 *
 * */
/**
 * Delaunay triangulation of a 2D point set.
 *
 * @internal
 */
var Delaunay = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Create a new Delaunay triangulation.
     *
     * @param {Float32Array|Float64Array} points
     * A 1D array of points in the format [x0, y0, x1, y1, ...].
     */
    function Delaunay(points) {
        var _this = this;
        this.points = points;
        var n = points.length >>> 1;
        // Floating-point error multiplier used by geometric predicates.
        this.epsilon = 4 * Number.EPSILON;
        var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        for (var i = 0; i < n; i++) {
            var px = points[i << 1], py = points[(i << 1) + 1];
            if (px < minX) {
                minX = px;
            }
            if (px > maxX) {
                maxX = px;
            }
            if (py < minY) {
                minY = py;
            }
            if (py > maxY) {
                maxY = py;
            }
        }
        var rangeX = maxX - minX || 1, rangeY = maxY - minY || 1;
        this.minX = minX;
        this.minY = minY;
        this.invScaleX = 1 / rangeX;
        this.invScaleY = 1 / rangeY;
        var ids = new Uint32Array(n), x = function (i) {
            return (points[i << 1] - minX) * _this.invScaleX;
        }, y = function (i) {
            return (points[(i << 1) + 1] - minY) * _this.invScaleY;
        };
        for (var i = 0; i < n; i++) {
            ids[i] = i;
        }
        ids.sort(function (a, b) { return (x(a) - x(b)) || (y(a) - y(b)); });
        var m = n ? 1 : 0, pa, pb;
        for (var i = 1; i < n; ++i) {
            pa = ids[m - 1],
                pb = ids[i];
            if (x(pa) !== x(pb) || y(pa) !== y(pb)) {
                ids[m++] = pb;
            }
        }
        this.ids = ids.subarray(0, m);
        this.triangles = this.triangulate();
    }
    /* *
     *
     *  Methods
     *
     * */
    /**
     * Triangulate the points.
     *
     * @return {Uint32Array}
     * A 1D array of triangle vertex indices.
     */
    Delaunay.prototype.triangulate = function () {
        var _this = this;
        var count = this.ids.length;
        if (count < 3) {
            return new Uint32Array(0);
        }
        var points = this.points, _a = this, minX = _a.minX, minY = _a.minY, invScaleX = _a.invScaleX, invScaleY = _a.invScaleY, x = function (i) {
            return (points[i << 1] - minX) * invScaleX;
        }, y = function (i) {
            return (points[(i << 1) + 1] - minY) * invScaleY;
        };
        // Determine if three points are in counter-clockwise order.
        var orient = function (a, b, c) {
            var ax = x(a), ay = y(a), bx = x(b) - ax, by = y(b) - ay, cx = x(c) - ax, cy = y(c) - ay, det = bx * cy - by * cx, err = (Math.abs(bx * cy) + Math.abs(by * cx)) * _this.epsilon;
            return det > err;
        };
        // Determine if a point (d) is inside the circumcircle of a triangle
        // (a, b, c).
        var inCircle = function (a, b, c, d) {
            if (a === d || b === d || c === d) {
                // Skip if d is one of the triangle vertices.
                return false;
            }
            var ax = x(a) - x(d), ay = y(a) - y(d), bx = x(b) - x(d), by = y(b) - y(d), cx = x(c) - x(d), cy = y(c) - y(d), aa = ax * ax + ay * ay, bb = bx * bx + by * by, cc = cx * cx + cy * cy, term1 = by * cc - bb * cy, term2 = bx * cc - bb * cx, term3 = bx * cy - by * cx, det = ax * term1 - ay * term2 + aa * term3, err = (Math.abs(ax * term1) +
                Math.abs(ay * term2) +
                Math.abs(aa * term3)) * _this.epsilon;
            return det > err;
        };
        // Data structures for the quad-edge data structure.
        var cap = Math.max(32, ((8 * count + 7) & ~3)), // Capacity (% 4 = 0)
        on = new Int32Array(cap), // Next edge in same face
        rt = new Int32Array(cap), // Rotation of edge (90 degrees)
        vtx = new Uint32Array(cap), // Origin vertex of edge
        seen = new Uint8Array(cap), // Visited flag for edge traversal
        top = 0; // Next free edge id (% 4 = 0)
        // Ensure the data structures have enough capacity for the required
        // number of edges.
        var ensure = function (need) {
            // If the capacity is sufficient, return.
            if (need <= cap) {
                return;
            }
            // Double capacity until sufficient.
            var ncap = cap << 1;
            while (ncap < need) {
                ncap <<= 1;
            }
            var on2 = new Int32Array(ncap), rt2 = new Int32Array(ncap), v2 = new Uint32Array(ncap), s2 = new Uint8Array(ncap);
            on2.set(on);
            rt2.set(rt);
            v2.set(vtx);
            s2.set(seen);
            on = on2;
            rt = rt2;
            vtx = v2;
            seen = s2;
            cap = ncap;
        };
        var sym = function (e) { return rt[rt[e]]; }, rotSym = function (e) { return sym(rt[e]); }, dest = function (e) { return vtx[sym(e)]; }, lnext = function (e) { return rt[on[rotSym(e)]]; }, oprev = function (e) { return rt[on[rt[e]]]; }, rprev = function (e) { return on[sym(e)]; }, leftOf = function (p, e) {
            return orient(p, vtx[e], dest(e));
        }, rightOf = function (p, e) {
            return orient(p, dest(e), vtx[e]);
        }, admissible = function (e, base) {
            return rightOf(dest(e), base);
        };
        // Create a new edge between two vertices.
        var makeEdge = function (a, b) {
            ensure(top + 4);
            var e0 = top, e1 = top + 1, e2 = top + 2, e3 = top + 3;
            top += 4;
            // Rot cycle
            rt[e0] = e1;
            rt[e1] = e2;
            rt[e2] = e3;
            rt[e3] = e0;
            // Onext initial
            on[e0] = e0;
            on[e2] = e2;
            on[e1] = e3;
            on[e3] = e1;
            // Origins
            vtx[e0] = a;
            vtx[e2] = b;
            vtx[e1] = 0xffffffff;
            vtx[e3] = 0xffffffff;
            return e0;
        };
        // Splice two edges.
        var splice = function (a, b) {
            var alpha = rt[on[a]];
            var beta = rt[on[b]];
            var t2 = on[a];
            var t3 = on[beta];
            var t4 = on[alpha];
            on[a] = on[b];
            on[b] = t2;
            on[alpha] = t3;
            on[beta] = t4;
        };
        // Connect two edges.
        var connect = function (a, b) {
            var q = makeEdge(dest(a), vtx[b]);
            splice(q, lnext(a));
            splice(sym(q), b);
            return q;
        };
        // Removes an edge from both sides.
        var drop = function (e) {
            splice(e, oprev(e));
            var es = sym(e);
            splice(es, oprev(es));
        };
        var A = this.ids;
        // Recursively triangulate a range [lo, hi) of points. Returns the
        // two endpoints [left, right] of the lower common tangent.
        var solve = function (lo, hi) {
            var len = hi - lo;
            // If there are only two points, create a single edge.
            if (len === 2) {
                var a = makeEdge(A[lo], A[lo + 1]);
                return [a, sym(a)];
            }
            // If there are three points, create two edges and connect them.
            if (len === 3) {
                var a = makeEdge(A[lo], A[lo + 1]), b = makeEdge(A[lo + 1], A[lo + 2]);
                splice(sym(a), b);
                var p0 = A[lo], p1 = A[lo + 1], p2 = A[lo + 2];
                if (orient(p0, p1, p2)) {
                    connect(b, a);
                    return [a, sym(b)];
                }
                if (orient(p0, p2, p1)) {
                    var c = connect(b, a);
                    return [sym(c), c];
                }
                return [a, sym(b)];
            }
            // Find the midpoint of the range.
            var mid = lo + ((len + 1) >>> 1);
            var L = solve(lo, mid);
            var R = solve(mid, hi);
            var ldo = L[0], ldi = L[1], rdi = R[0], rdo = R[1];
            // Lower common tangent
            for (;;) {
                if (leftOf(vtx[rdi], ldi)) {
                    ldi = lnext(ldi);
                }
                else if (rightOf(vtx[ldi], rdi)) {
                    rdi = rprev(rdi);
                }
                else {
                    break;
                }
            }
            var base = connect(sym(rdi), ldi);
            if (vtx[ldi] === vtx[ldo]) {
                ldo = sym(base);
            }
            if (vtx[rdi] === vtx[rdo]) {
                rdo = base;
            }
            // Merge loop - removing bad edges (inCircle) and adding new edges.
            for (;;) {
                // Left candidate
                var lc = on[sym(base)];
                if (admissible(lc, base)) {
                    while (inCircle(dest(base), vtx[base], dest(lc), dest(on[lc]))) {
                        var t_1 = on[lc];
                        drop(lc);
                        lc = t_1;
                    }
                }
                // Right candidate
                var rc = oprev(base);
                if (admissible(rc, base)) {
                    while (inCircle(dest(base), vtx[base], dest(rc), dest(oprev(rc)))) {
                        var t_2 = oprev(rc);
                        drop(rc);
                        rc = t_2;
                    }
                }
                if (!admissible(lc, base) && !admissible(rc, base)) {
                    break;
                }
                if (!admissible(lc, base) || (admissible(rc, base) &&
                    inCircle(dest(lc), vtx[lc], vtx[rc], dest(rc)))) {
                    base = connect(rc, sym(base));
                }
                else {
                    base = connect(sym(base), sym(lc));
                }
            }
            return [ldo, rdo];
        };
        var e0 = solve(0, count)[0];
        while (leftOf(dest(on[e0]), e0)) {
            e0 = on[e0];
        }
        var Q = [e0];
        var qi = 0;
        {
            var c = e0;
            do {
                Q.push(sym(c));
                seen[c] = 1;
                c = lnext(c);
            } while (c !== e0);
        }
        var faces = [];
        var cur, t;
        while (qi < Q.length) {
            var e = Q[qi++];
            if (seen[e]) {
                continue;
            }
            cur = e;
            do {
                faces.push(vtx[cur]);
                t = sym(cur);
                if (!seen[t]) {
                    Q.push(t);
                }
                seen[cur] = 1;
                cur = lnext(cur);
            } while (cur !== e);
        }
        return new Uint32Array(faces);
    };
    return Delaunay;
}());
/* *
 *
 *  Default Export
 *
 * */
export default Delaunay;
