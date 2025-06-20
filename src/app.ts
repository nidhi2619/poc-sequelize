import express from "express";
import { Request, Response } from "express";
import UserRoute from "./user.api"
class App {
    public app: express.Application | any;
    public server: any = null;
  
    constructor() {
      (async () => {
        this.app = express();
        this.app.use(express.json());
        this.initializeControllers(UserRoute);
      })();
    }
  
    private initializeControllers(controller: any) {
      this.app.get("/status", (req: Request, res: Response) => {
        res.status(200).json({ status: "API Service is UP" });
      });
      this.app.use('/api', controller.router)
    }
  
    public listen = (PORT: string) => {
      this.server = this.app.listen(PORT || 7200, () => {
        console.log(
            `App listening on the port ${
               process.env.PORT ? process.env.PORT : 7200
            }`
         );
      });
    };
  }
  
  export default App;
  