// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    '/addresses': {
        /** Retrieve all managed addresses for this client. */
        get: operations['get_addresses'];
    };
    '/call': {
        /**
         * Execute a Move call transaction by calling the specified function in the
         * module of the given package. Arguments are passed in and type will be
         * inferred from function signature. Gas usage is capped by the gas_budget.
         *
         * Example CallRequest
         * {
         *     "sender": "b378b8d26c4daa95c5f6a2e2295e6e5f34371c1659e95f572788ffa55c265363",
         *     "package_object_id": "0x2",
         *     "module": "ObjectBasics",
         *     "function": "create",
         *     "args": [
         *         200,
         *         "b378b8d26c4daa95c5f6a2e2295e6e5f34371c1659e95f572788ffa55c265363"
         *     ],
         *     "gas_object_id": "1AC945CA31E77991654C0A0FCA8B0FD9C469B5C6",
         *     "gas_budget": 2000
         * }
         */
        post: operations['call'];
    };
    '/docs': {
        /** Generate OpenAPI documentation. */
        get: operations['docs'];
    };
    '/object_info': {
        /** Returns the object information for a specified object. */
        get: operations['object_info'];
    };
    '/object_schema': {
        /** Returns the schema for a specified object. */
        get: operations['object_schema'];
    };
    '/objects': {
        /** Returns list of objects owned by an address. */
        get: operations['get_objects'];
    };
    '/sui/genesis': {
        /**
         * Specify the genesis state of the network.
         *
         * You can specify the number of authorities, an initial number of addresses
         * and the number of gas objects to be assigned to those addresses.
         *
         * Note: This is a temporary endpoint that will no longer be needed once the
         * network has been started on testnet or mainnet.
         */
        post: operations['genesis'];
    };
    '/sui/start': {
        /**
         * Start servers with the specified configurations from the genesis endpoint.
         *
         * Note: This is a temporary endpoint that will no longer be needed once the
         * network has been started on testnet or mainnet.
         */
        post: operations['sui_start'];
    };
    '/sui/stop': {
        /**
         * Stop sui network and delete generated configs & storage.
         *
         * Note: This is a temporary endpoint that will no longer be needed once the
         * network has been started on testnet or mainnet.
         */
        post: operations['sui_stop'];
    };
    '/sync': {
        /**
         * Synchronize client state with authorities. This will fetch the latest information
         * on all objects owned by each address that is managed by this client state.
         */
        post: operations['sync'];
    };
    '/transfer': {
        /**
         * Transfer object from one address to another. Gas will be paid using the gas
         * provided in the request. This will be done through a native transfer
         * transaction that does not require Move VM executions, hence is much cheaper.
         *
         * Notes:
         * - Non-coin objects cannot be transferred natively and will require a Move call
         *
         * Example TransferTransactionRequest
         * {
         *     "from_address": "1DA89C9279E5199DDC9BC183EB523CF478AB7168",
         *     "object_id": "4EED236612B000B9BEBB99BA7A317EFF27556A0C",
         *     "to_address": "5C20B3F832F2A36ED19F792106EC73811CB5F62C",
         *     "gas_object_id": "96ABE602707B343B571AAAA23E3A4594934159A5"
         * }
         */
        post: operations['transfer_object'];
    };
}

export interface components {
    schemas: {
        /** @description Request containing the information required to execute a move module. */
        CallRequest: {
            /** @description Required; JSON representation of the arguments */
            args: components['schemas']['SuiJsonValue'][];
            /** @description Required; Name of the function to be called in the move module */
            function: string;
            /**
             * Format: uint64
             * @description Required; Gas budget required as a cap for gas usage
             */
            gasBudget: number;
            /** @description Required; Hex code as string representing the gas object id */
            gasObjectId: string;
            /** @description Required; Name of the move module */
            module: string;
            /** @description Required; Hex code as string representing Move module location */
            packageObjectId: string;
            /** @description Required; Hex code as string representing the sender's address */
            sender: string;
            /** @description Optional; The argument types to be parsed */
            typeArgs?: string[] | null;
        };
        /** @description Response containing the API documentation. */
        DocumentationResponse: {
            /** @description A JSON object containing the OpenAPI definition for this API. */
            documentation: unknown;
        };
        /** @description Response containing the resulting wallet & network config of the provided genesis configuration. */
        GenesisResponse: {
            /** @description Information about authorities and the list of loaded move packages. */
            networkConfig: unknown;
            /** @description List of managed addresses and the list of authorities */
            walletConfig: unknown;
        };
        /** @description Response containing the managed addresses for this client. */
        GetAddressResponse: {
            /** @description Vector of hex codes as strings representing the managed addresses */
            addresses: string[];
        };
        /** @description Returns the list of objects owned by an address. */
        GetObjectsResponse: {
            objects: components['schemas']['Object'][];
        };
        /** @description JSON representation of an object in the Sui network. */
        Object: {
            /** @description Hash of the object's contents used for local validation */
            objectDigest: string;
            /** @description Hex code as string representing the object id */
            objectId: string;
            /** @description Object version */
            version: string;
        };
        /** @description Response containing the information of an object if found, otherwise an error is returned. */
        ObjectInfoResponse: {
            /** @description JSON representation of the object data */
            data: unknown;
            /** @description Hex code as string representing the objet id */
            id: string;
            /** @description Type of object, i.e. Coin */
            objType: string;
            /** @description Hex code as string representing the owner's address */
            owner: string;
            /** @description Boolean representing if the object is mutable */
            readonly: string;
            /** @description Sequence number of the object */
            version: string;
        };
        /** @description Response containing the information of an object schema if found, otherwise an error is returned. */
        ObjectSchemaResponse: {
            /** @description JSON representation of the object schema */
            schema: unknown;
        };
        SuiJsonValue: unknown;
        /** @description Request containing the address that requires a sync. */
        SyncRequest: {
            /** @description Required; Hex code as string representing the address */
            address: string;
        };
        /** @description Response containing the summary of effects made on an object and the certificate associated with the transaction that verifies the transaction. */
        TransactionResponse: {
            /** @description JSON representation of the certificate verifying the transaction */
            certificate: unknown;
            /**
             * Format: uint64
             * @description Integer representing the acutal cost of the transaction
             */
            gasUsed: number;
            /** @description JSON representation of the list of resulting effects on the object */
            objectEffectsSummary: unknown;
        };
        /** @description Request containing the information needed to execute a transfer transaction. */
        TransferTransactionRequest: {
            /** @description Required; Hex code as string representing the address to be sent from */
            fromAddress: string;
            /** @description Required; Hex code as string representing the gas object id to be used as payment */
            gasObjectId: string;
            /** @description Required; Hex code as string representing the object id */
            objectId: string;
            /** @description Required; Hex code as string representing the address to be sent to */
            toAddress: string;
        };
    };
}

export interface operations {
    /** Retrieve all managed addresses for this client. */
    get_addresses: {
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['GetAddressResponse'];
                };
            };
        };
    };
    /**
     * Execute a Move call transaction by calling the specified function in the
     * module of the given package. Arguments are passed in and type will be
     * inferred from function signature. Gas usage is capped by the gas_budget.
     *
     * Example CallRequest
     * {
     *     "sender": "b378b8d26c4daa95c5f6a2e2295e6e5f34371c1659e95f572788ffa55c265363",
     *     "package_object_id": "0x2",
     *     "module": "ObjectBasics",
     *     "function": "create",
     *     "args": [
     *         200,
     *         "b378b8d26c4daa95c5f6a2e2295e6e5f34371c1659e95f572788ffa55c265363"
     *     ],
     *     "gas_object_id": "1AC945CA31E77991654C0A0FCA8B0FD9C469B5C6",
     *     "gas_budget": 2000
     * }
     */
    call: {
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['TransactionResponse'];
                };
            };
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CallRequest'];
            };
        };
    };
    /** Generate OpenAPI documentation. */
    docs: {
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['DocumentationResponse'];
                };
            };
        };
    };
    /** Returns the object information for a specified object. */
    object_info: {
        parameters: {
            query: {
                objectId: string;
            };
        };
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['ObjectInfoResponse'];
                };
            };
        };
    };
    /** Returns the schema for a specified object. */
    object_schema: {
        parameters: {
            query: {
                objectId: string;
            };
        };
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['ObjectSchemaResponse'];
                };
            };
        };
    };
    /** Returns list of objects owned by an address. */
    get_objects: {
        parameters: {
            query: {
                address: string;
            };
        };
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['GetObjectsResponse'];
                };
            };
        };
    };
    /**
     * Specify the genesis state of the network.
     *
     * You can specify the number of authorities, an initial number of addresses
     * and the number of gas objects to be assigned to those addresses.
     *
     * Note: This is a temporary endpoint that will no longer be needed once the
     * network has been started on testnet or mainnet.
     */
    genesis: {
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['GenesisResponse'];
                };
            };
        };
    };
    /**
     * Start servers with the specified configurations from the genesis endpoint.
     *
     * Note: This is a temporary endpoint that will no longer be needed once the
     * network has been started on testnet or mainnet.
     */
    sui_start: {
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': string;
                };
            };
        };
    };
    /**
     * Stop sui network and delete generated configs & storage.
     *
     * Note: This is a temporary endpoint that will no longer be needed once the
     * network has been started on testnet or mainnet.
     */
    sui_stop: {
        responses: {
            /** resource updated */
            204: never;
        };
    };
    /**
     * Synchronize client state with authorities. This will fetch the latest information
     * on all objects owned by each address that is managed by this client state.
     */
    sync: {
        responses: {
            /** resource updated */
            204: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['SyncRequest'];
            };
        };
    };
    /**
     * Transfer object from one address to another. Gas will be paid using the gas
     * provided in the request. This will be done through a native transfer
     * transaction that does not require Move VM executions, hence is much cheaper.
     *
     * Notes:
     * - Non-coin objects cannot be transferred natively and will require a Move call
     *
     * Example TransferTransactionRequest
     * {
     *     "from_address": "1DA89C9279E5199DDC9BC183EB523CF478AB7168",
     *     "object_id": "4EED236612B000B9BEBB99BA7A317EFF27556A0C",
     *     "to_address": "5C20B3F832F2A36ED19F792106EC73811CB5F62C",
     *     "gas_object_id": "96ABE602707B343B571AAAA23E3A4594934159A5"
     * }
     */
    transfer_object: {
        responses: {
            /** successful operation */
            200: {
                content: {
                    'application/json': components['schemas']['TransactionResponse'];
                };
            };
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['TransferTransactionRequest'];
            };
        };
    };
}

export interface external {}
