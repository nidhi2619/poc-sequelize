import { Sequelize } from "sequelize";
import * as config from "./config/index";
import { log } from "./utils/helpers.utils";
import { EventEmitter } from "events";
import { Constant } from "./constants";
(async () => {
  config.loadEnvs();
})();
const sequelizeEvent = new EventEmitter();
class DBConnectionHandler {
  static instance: DBConnectionHandler | null = null;

  static getInstance = () => {
    if (!DBConnectionHandler.instance) {
      DBConnectionHandler.instance = new DBConnectionHandler();
      // Removed invalid delete statement
    }
    return DBConnectionHandler.instance;
  };

  public sequelize = new Sequelize({
    replication: {
      read: [
        {
          host: process.env.DB_READ_HOST,
          username: process.env.DB_READ_USER,
          password: process.env.DB_READ_PASS,
          database: process.env.DB_READ_NAME,
          port: process.env.DB_READ_PORT,
        },
      ],
      write: {
        host: process.env.DB_WRITE_HOST,
        username: process.env.DB_WRITE_USER,
        password: process.env.DB_WRITE_PASS,
        database: process.env.DB_WRITE_NAME,
        port: process.env.DB_WRITE_PORT,
      },
    },
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL
        ? null
        : {
            require: true,
            rejectUnauthorized: false,
          },
    },
    logging: false,
    pool: {
      max: 100,
      min: 0,
      acquire: 10000,
      idle: 9000,
    },
    define: {
      schema: process.env.DB_SCHEMA,
    },
  });
  /**
   * connect to the postgresDB server
   * @returns boolean
   */
  createDBConnection = async () => {
    try {
      log.blue(Constant.DATABASE_CONNECTING);
      this._bindPostgresConnectionEvents();
      await this.sequelize.authenticate().then(() => {
        sequelizeEvent.emit(Constant.CONNECT);
      });
      // Create schema if not exists
      const schemaName = process.env.DB_SCHEMA || "public";
      await this.sequelize
        .createSchema(schemaName, { logging: false })
        .catch((error) => {
          if (
            error.name === "SequelizeDatabaseError" &&
            error.message.includes("already exists")
          ) {
            log.blue(`Schema ${schemaName} already exists.`);
          } else {
            log.red(`Error creating schema: ${error.message}`);
          }
        });
      return true;
    } catch (err) {
      log.red(Constant.POSTGRESS_CONNECTED_ERROR, err);
      sequelizeEvent.emit(Constant.DISCONNECT);
      return false;
    }
  };

  /**
   * release the database connection
   */
  releaseDBConnection = async () => {
    await this.sequelize.close();
  };

  //***************** internal used methods *************************/

  /**
   * for binding the postgresdb connection events
   */
  _bindPostgresConnectionEvents = () => {
    try {
      // Listen for the 'connect' event
      sequelizeEvent.on(Constant.CONNECT, () => {
        log.green(Constant.DATABASE_CONNECTED);
      });

      // Listen for the 'disconnect' event
      sequelizeEvent.on(Constant.DISCONNECT, () => {
        log.red(Constant.DATABASE_DISCONNECTED);
      });
    } catch (err) {
      log.red(Constant.SEQUELIZE_BINDING_ERROR, err);
    }
  };
}

const dbConnectionHandler = DBConnectionHandler.getInstance();
export default dbConnectionHandler;
