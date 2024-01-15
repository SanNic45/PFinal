import db from "../database/db.js";
import { DataTypes } from "sequelize";

const LoginModel = db.define('usuarios', {
    username: { type: DataTypes.STRING }, 
    password: { type: DataTypes.STRING }
}, {
  timestamps: false 
});

export default LoginModel;
