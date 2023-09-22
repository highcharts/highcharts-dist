/**
 * Contains information to connect the component to a connector in the data pool
 * of the dashboard.
 */
export interface ComponentConnectorOptions {
    /**
     * Whether to allow the transfer of data changes back to the connector
     * source.
     */
    allowSave?: boolean;
    /**
     * The id of the connector configuration in the data pool of the
     * dashboard.
     */
    id: string;
}
