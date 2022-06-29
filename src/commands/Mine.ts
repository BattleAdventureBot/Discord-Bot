import { ApplicationCommandRegistry, Command } from "@sapphire/framework";

export class MineCommand extends Command {
    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        await interaction.reply("test");
    }

    public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
        console.log("lol")
        registry.registerChatInputCommand({
            name: "mine",
            description: "Mine some ores"
        }, {registerCommandIfMissing: true, idHints: ["BAD_MINE_CMD"]})
	}
}