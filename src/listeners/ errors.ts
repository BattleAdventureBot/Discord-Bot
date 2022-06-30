import { ChatInputCommandDeniedPayload, Events, Listener, ListenerOptions, UserError } from "@sapphire/framework";
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<ListenerOptions>({enabled: true, event: Events.ChatInputCommandDenied})
export class ErrorsListener extends Listener{

    public run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
        if(error.identifier != "preconditionCooldown"){
            
        }
    }
}