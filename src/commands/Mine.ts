import { ApplicationCommandRegistry, Command } from "@sapphire/framework";

export class MineCommand extends Command {
    public constructor(context: Command.Context, options: Command.Options) {
        super(context, {
            ...options,
            cooldownDelay: 250000
        })
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        await interaction.reply("test");
    }

    public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
        registry.registerChatInputCommand({
            name: "mine",
            description: "Mine some ores"
        }, {registerCommandIfMissing: true})
	}
}