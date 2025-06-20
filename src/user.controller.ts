import User from "./models/user"
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

class UserController {
    public async userLogin(req: Request & { body: { username: string; password: string } }, res: Response) {
        const { username} = req.body;
        const user = await User.findOne({
            where: {
                username: username
            }
        });
        console.log(user, "USERR")
        if (!user){
            console.log("YYEYEY")
            const yes = await User.create({
                id: uuidv4(),
                username: username,
                first_name: "abc",
                last_name: "def",
                password: "yyyyyyy"
            });
            console.log("res", yes)
            
        }
        res.status(200).json({
            message: "User logged in successfully",
        })
    }

    public allUsers (req: Request, res: Response) {
        const allUSer = User.findAll({})
        res.status(200).json({
            allUSer
        })
    }
}

export default new UserController();