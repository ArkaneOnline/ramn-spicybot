import * as client from "nekos.life";
const neko = new client();

export const config = {
    name: "baka",
    aliases: [],
    description: "Baka!",
    usage: "",
    category: "weeb"
};
export async function run(client, message, args) {
    let baka = await neko.sfw.baka();
    message.channel.send(`Baka! ${baka.url}`);
    return;
}