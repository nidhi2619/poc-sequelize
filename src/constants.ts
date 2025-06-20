export class Constant {
    static readonly STATUS_OK = 200;
    static readonly INTERNAL_SERVER_ERROR = 500;
    static readonly UNABLE_POSTGRES = "Unable to connect postgres";
    static readonly UNABLE_EVM_CHAIN = "Unable to connect EVM chain";
    static readonly ENV_NOT_LOADED = "Env's not loaded correctly";
    static readonly ERROR_STARTING_SERVICE = "Error while starting the service: ";
    static readonly DATABASE_CONNECTED = "Connected to database";
    static readonly DATABASE_CONNECTING = "Connecting to database";
    static readonly DATABASE_DISCONNECTED = "Disconnected from the database";
    static readonly CONNECT = "connect";
    static readonly SUCCESS = "success";
    static readonly FAILED = "failed";
    static readonly POSTGRESS_CONNECTED_ERROR =
      "Error while connecting to Postgres: ";
    static readonly SEQUELIZE_BINDING_ERROR =
      "Error while binding the sequelize connection events: ";
    static readonly DISCONNECT = "disconnect";
    static readonly PORT = "API is running on port";
    static readonly ERROR = "Eror Occur";
    static readonly ERROR_SYNCING_TABLE = "Error syncing table: ";
    static readonly ERROR_CHAIN_DISCONNECT = "Error connecting to the chain";
    static readonly CONNECTING_EVM_CHAIN = "Connecting to evm chain";
    static readonly CONNECTED_EVM_CHAIN = "Connected to the evm chain";
    static readonly DISCONNECTED_EVN_CHAIN = "Disconnected from the evm chain";
    static readonly EVM_HOST_NOT_SET =
      "EVM_HOST environment variable is not set.";
    static readonly EVM_CHAIN_BINDING_ERROR =
      "Error while binding the evm connection events: ";
    static readonly ERR_REDIS_CONN = "Unable to connect redis";
    static readonly ERR_REDPANDA_CONN = "Unable to connect redpanda";
    static readonly TRANSACTION_STATUS = "completed";
    static readonly ERR_TXN_RECEIPT = "Timeout while waiting for receipt";
    static readonly ERR_GETTING_BLOCK_OR_RECORD =
      "Error in getting block or record";
    static readonly ERR_DECODING_EVENT = "Error while decoding the event";
    static readonly ERR_RPC =
      "Detected RPC connection error. Attempting to reconnect...";
    static readonly ATTEMPT_TO_RECONNECT =
      "Failed to reconnect. Waiting before retrying.";
    static readonly ERR_NO_LOGS_RECEIPT = "No logs found in receipt.";
    static readonly NO_ABI_FOUND = "No ABI found for the provided address.";
    static readonly NO_DECODED_LOGS =
      "No logs could be decoded from the provided data";
  }
  
  export const TRANSACTION_TYPE = {
    REGISTRATION: "registration",
    OWNERSHIP_TRANSFER: "ownership-transfer",
    PROFILE_UPDATE: "profile-update",
    DOMAIN_RENEWAL: "domain-renewal",
    SUBDOMAIN_REGISTER: "subdomain-register",
  };
  
  export const KAFKA = {
    topic: "sync-service",
    unregisterDomain: "unregister-domain",
    sigint: "SIGINT",
    saslMechanism: "scram-sha-512",
  };
  
  export const EVENT = {
    domainRegistered: "DomainRegistered",
    nftMinted: "NftMinted",
    contentTextInfo: "ContentTextInfo",
    domainOwnerInfo: "DomainOwnerInfo",
    subDomainRegistered: "SubDomainRegistered",
    renewDomainInfo: "RenewDomainInfo",
  };
  
  export const STATUS = {
    active: "active",
    inactive: "inactive",
    expired: "expired",
    completed: "completed",
    fulfilled: "fulfilled",
  };
  
  export const ENV_DATA = {
    PORT: process.env.PORT,
    SOCKET_HOST: process.env.SOCKET_HOST,
    PROVIDER: process.env.PROVIDER,
    ENV_TYPE: process.env.ENV_TYPE,
    REGISTRAR_CONTRACT_ADDRESS: process.env.REGISTRAR_CONTRACT_ADDRESS,
    RESOLVER_CONTRACT_ADDRESS: process.env.RESOLVER_CONTRACT_ADDRESS,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    KAFKA_URL: process.env.KAFKA_URL,
    KAFKA_USERNAME:process.env.KAFKA_USERNAME,
    KAFKA_PASSWORD:process.env.KAFKA_PASSWORD,
    DB_READ_HOST: process.env.DB_READ_HOST,
    DB_READ_NAME: process.env.DB_READ_NAME,
    DB_READ_PORT: process.env.DB_READ_PORT,
    DB_READ_USER: process.env.DB_READ_USER,
    DB_READ_PASS: process.env.DB_READ_PASS,
    DB_WRITE_HOST: process.env.DB_WRITE_HOST,
    DB_WRITE_NAME: process.env.DB_WRITE_NAME,
    DB_WRITE_PORT: process.env.DB_WRITE_PORT,
    DB_WRITE_USER: process.env.DB_WRITE_USER,
    DB_WRITE_PASS: process.env.DB_WRITE_PASS,
    DB_SCHEMA: process.env.DB_SCHEMA,
    DB_SSL: process.env.DB_SSL,
  };
  
  export const ENV = {
    dev: "dev",
    stage: "stage"
  }