import { Bot } from "./bot/Bot";
import { loadConfig } from "./config/Config";
import { Database } from "./database/Database";

const config = loadConfig();

const bot = new Bot(config);
bot.init()

new Database(config);
