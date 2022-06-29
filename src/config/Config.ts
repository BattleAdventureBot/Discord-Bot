export interface Config {
    DISCORD_TOKEN: string;
    OWNER: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_DATABASE: string;
    DBL_TOKEN: string;
}

export const loadConfig = function(): Config {
    return require("../../config.json") as Config;
};
