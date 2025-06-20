import {Router, Request, Response} from "express";
import UserController from "./user.controller";
import User from "./models/user";

class UserRoute {
    public path = "/user";
    public router = Router();
    constructor(){
        this.router.post(`${this.path}/login`,this.login);
        this.router.get(`${this.path}/all-users`, this.allUsers);
    };
    private readonly login = async (req: Request, res:Response) => {
        const solverList: any = await UserController.userLogin(req, res);
        return solverList;
    };
    private readonly allUsers =  async ( req: Request, res: Response) => {
        const solverIntents: any = await UserController.allUsers(req, res);
        return solverIntents;
    }
};

export default new UserRoute();