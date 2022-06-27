import { Bot } from "./bot/Bot";
import { loadConfig } from "./config/Config";

const config = loadConfig();

const bot = new Bot(config);
bot.init()
