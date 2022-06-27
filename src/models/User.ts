import { Model, Sequelize, DataTypes } from "sequelize";

export class UserInfo extends Model {
    public readonly id!: number;
    public readonly user_id!: number;
    public cash!: number;
    public level! : number;
    public exp! : number;
}

export function init(sequelize : Sequelize){
    UserInfo.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cash: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        exp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, { sequelize, tableName: "users", freezeTableName: true});
}

export default UserInfo;
