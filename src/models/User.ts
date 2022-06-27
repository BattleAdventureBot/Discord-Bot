import { Model } from "sequelize";

export class User extends Model {
    public readonly id!: number;
    public readonly user_id!: number;
    public cash!: number;
    public level! : number;
    public exp! : number;
}
