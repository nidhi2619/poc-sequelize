
import * as config from "./config";
import App from "./app";
import { log } from "./utils/helpers.utils";
import dbConnectionHandler from "./connection";
const isLoaded = config.loadEnvs();
import { Constant } from "./constants";
(async () => {
    try {
      if (isLoaded) {
        const app = new App();
        // connect to the postgresdb server
        const isDBconnected = await dbConnectionHandler.createDBConnection();
        if (!isDBconnected) throw new Error(Constant.UNABLE_POSTGRES);
        const port = process.env.PORT || "7009"; 
        app.listen(port);
      } else {
        throw new Error(Constant.ENV_NOT_LOADED);
      }
    } catch (error) {
     console.log(error, "SERVER ERROR")
    }
  })();