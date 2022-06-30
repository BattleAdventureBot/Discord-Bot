import { LogLevel, SapphireClient } from '@sapphire/framework';
import { Config } from '../config/Config';
import '@sapphire/plugin-logger/register';

export class Bot {
    private config: Config;
    public client : SapphireClient;

    constructor(config: Config){
        this.config = config;
        this.client = new SapphireClient({ intents: ['DIRECT_MESSAGES', 'GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS'],
        loadMessageCommandListeners: true, logger: {"level" : LogLevel.Debug},  });
    }

    async init(){
        await this.client.login(this.config.DISCORD_TOKEN);
        this.client.user.setPresence({
            "status" : 'dnd',
            "activities" : [
                {
                    "name" : "Mining and Fighting !",
                    "type" : "PLAYING"
                }
            ]
        })
    }
}
