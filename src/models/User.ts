import { Model, Sequelize, DataTypes } from "sequelize";

export class UserInfo extends Model {
    public readonly id!: number;
    public readonly userID!: number;
    public cash!: number;
    public level! : number;
    public exp! : number;
    public health! : number;
    public strength! : number;
    public inventoryJson! : string;

    public getMaxExp(){
        return 300*(Math.pow(3,this.level)-1);
    }

    public async levelUP(){
        if(this.exp >= this.getMaxExp()){
            this.level++;
            this.exp =- this.getMaxExp();
        }
    }
}

export function init(sequelize : Sequelize){
    UserInfo.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
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
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 25
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        inventoryJson: {
            type: DataTypes.STRING,
            defaultValue: "{}"
        }
    }, { sequelize, tableName: "users", freezeTableName: true});
}

export default UserInfo;
