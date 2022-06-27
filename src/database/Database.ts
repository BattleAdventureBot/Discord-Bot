import { Sequelize } from "sequelize";
import { Config } from "../config/Config";

export class Database {
    private sequelize : Sequelize;
    public static instance : Database;

    constructor(config: Config){
        this.sequelize = new Sequelize(config.DATABASE_DATABASE, config.DATABASE_USER, config.DATABASE_PASSWORD, {
            host: config.DATABASE_HOST,
            dialect: "mariadb",
        });
        Database.instance = this;
    }
}
