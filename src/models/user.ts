import DBConnectionHandler from "../connection";
import { DataTypes, Model } from "sequelize";

const sequelize = DBConnectionHandler.sequelize;

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
}

interface UserInstance extends Model<IUser>, IUser {}
const User = sequelize.define<UserInstance>(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    }
  },
  {
    timestamps: true,
  },
);

// Sync the models
User.sync({ alter: true }).catch((error: any) => {
  console.error("Error syncing table:", error);
});

export default User;
