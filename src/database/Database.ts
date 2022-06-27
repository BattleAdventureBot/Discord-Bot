import { Sequelize } from "sequelize";
import { Config } from "../config/Config";

export class Database {
    public DatabaseClient : Sequelize;
    public static instance : Database;

    constructor(config: Config){
        this.DatabaseClient = new Sequelize(config.DATABASE_DATABASE, config.DATABASE_USER, config.DATABASE_PASSWORD, {
            host: config.DATABASE_HOST,
            dialect: "mariadb",
        });
        Database.instance = this;
    }
}
