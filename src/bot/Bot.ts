import { SapphireClient } from '@sapphire/framework';
import { Config } from '../config/Config';

export class Bot {
    private config: Config;
    public client : SapphireClient;

    constructor(config: Config){
        this.config = config;
        this.client = new SapphireClient({ intents: ['DIRECT_MESSAGES', 'GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS'] });
    }

    async init(){
        await this.client.login(this.config.DISCORD_TOKEN);
    }
}
