/**
 * @license Highcharts JS v11.3.0 (2024-01-10)
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/themes/dark-blue', ['highcharts'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    'use strict';
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);

            if (typeof CustomEvent === 'function') {
                window.dispatchEvent(new CustomEvent(
                    'HighchartsModuleLoaded',
                    { detail: { path: path, module: obj[path] } }
                ));
            }
        }
    }
    _registerModule(_modules, 'Extensions/Themes/DarkBlue.js', [_modules['Core/Defaults.js']], function (D) {
        /* *
         *
         *  (c) 2010-2024 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  Dark blue theme for Highcharts JS
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { setOptions } = D;
        /* *
         *
         *  Theme
         *
         * */
        var DarkBlueTheme;
        (function (DarkBlueTheme) {
            /* *
             *
             *  Constants
             *
             * */
            DarkBlueTheme.options = {
                colors: ['#DDDF0D', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee',
                    '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, 'rgb(48, 48, 96)'],
                            [1, 'rgb(0, 0, 0)']
                        ]
                    },
                    borderColor: '#000000',
                    borderWidth: 2,
                    className: 'dark-container',
                    plotBackgroundColor: 'rgba(255, 255, 255, .1)',
                    plotBorderColor: '#CCCCCC',
                    plotBorderWidth: 1
                },
                title: {
                    style: {
                        color: '#C0C0C0',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                subtitle: {
                    style: {
                        color: '#666666',
                        font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                xAxis: {
                    gridLineColor: '#333333',
                    gridLineWidth: 1,
                    labels: {
                        style: {
                            color: '#A0A0A0'
                        }
                    },
                    lineColor: '#A0A0A0',
                    tickColor: '#A0A0A0',
                    title: {
                        style: {
                            color: '#CCC',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    gridLineColor: '#333333',
                    labels: {
                        style: {
                            color: '#A0A0A0'
                        }
                    },
                    lineColor: '#A0A0A0',
                    tickColor: '#A0A0A0',
                    tickWidth: 1,
                    title: {
                        style: {
                            color: '#CCC',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            color: '#CCC'
                        },
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    spline: {
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    scatter: {
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    candlestick: {
                        lineColor: 'white'
                    }
                },
                legend: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    itemStyle: {
                        font: '9pt Trebuchet MS, Verdana, sans-serif',
                        color: '#A0A0A0'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#444'
                    },
                    title: {
                        style: {
                            color: '#C0C0C0'
                        }
                    }
                },
                credits: {
                    style: {
                        color: '#666'
                    }
                },
                navigation: {
                    buttonOptions: {
                        symbolStroke: '#DDDDDD',
                        theme: {
                            fill: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0.4, '#606060'],
                                    [0.6, '#333333']
                                ]
                            },
                            stroke: '#000000'
                        }
                    }
                },
                // scroll charts
                rangeSelector: {
                    buttonTheme: {
                        fill: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0.4, '#888'],
                                [0.6, '#555']
                            ]
                        },
                        stroke: '#000000',
                        style: {
                            color: '#CCC',
                            fontWeight: 'bold'
                        },
                        states: {
                            hover: {
                                fill: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                    stops: [
                                        [0.4, '#BBB'],
                                        [0.6, '#888']
                                    ]
                                },
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            },
                            select: {
                                fill: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                    stops: [
                                        [0.1, '#000'],
                                        [0.3, '#333']
                                    ]
                                },
                                stroke: '#000000',
                                style: {
                                    color: 'yellow'
                                }
                            }
                        }
                    },
                    inputStyle: {
                        backgroundColor: '#333',
                        color: 'silver'
                    },
                    labelStyle: {
                        color: 'silver'
                    }
                },
                navigator: {
                    handles: {
                        backgroundColor: '#666',
                        borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(16, 16, 16, 0.5)',
                    series: {
                        color: '#7798BF',
                        lineColor: '#A6C7ED'
                    }
                },
                scrollbar: {
                    barBackgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0.4, '#888'],
                            [0.6, '#555']
                        ]
                    },
                    barBorderColor: '#CCC',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0.4, '#888'],
                            [0.6, '#555']
                        ]
                    },
                    buttonBorderColor: '#CCC',
                    rifleColor: '#FFF',
                    trackBackgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#000'],
                            [1, '#333']
                        ]
                    },
                    trackBorderColor: '#666'
                }
            };
            /* *
             *
             *  Functions
             *
             * */
            /**
             * Apply the theme.
             */
            function apply() {
                setOptions(DarkBlueTheme.options);
            }
            DarkBlueTheme.apply = apply;
        })(DarkBlueTheme || (DarkBlueTheme = {}));
        /* *
         *
         *  Default Export
         *
         * */

        return DarkBlueTheme;
    });
    _registerModule(_modules, 'masters/themes/dark-blue.src.js', [_modules['Core/Globals.js'], _modules['Extensions/Themes/DarkBlue.js']], function (H, DarkBlueTheme) {

        H.theme = DarkBlueTheme.options;
        DarkBlueTheme.apply();

    });
}));