export default async function handler(request, res) {

    const directories = [
        {
            "title": "API Prof. Giacobe",
            "subtitle": "Chad of Cyber JSONs",
            "infoLabel": "Details",
            "top": "API",
            "bottom": "Overlaid",
            "profilePic": "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png"
        },
        {
            "title": "API Prof. Giacobe 2",
            "subtitle": "Second Chad of Cyber JSONs",
            "infoLabel": "Details",
            "top": "Giacobe",
            "bottom": "Two",
            "profilePic": "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png"
        },
        {
            "title": "API Prof. Giacobe 3",
            "subtitle": "Third Chad of Cyber JSONs",
            "infoLabel": "Details",
            "top": "Giacobe",
            "bottom": "Three",
            "profilePic": "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png"
        },
        {
            "title": "API Prof. Giacobe 4",
            "subtitle": "Fourth Chad of Cyber JSONs",
            "infoLabel": "Details",
            "top": "Giacobe",
            "bottom": "Four",
            "profilePic": "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png"
        },
        {
            "title": "API Prof. Giacobe 5",
            "subtitle": "Fifth Chad of Cyber JSONs",
            "infoLabel": "Details",
            "top": "Giacobe",
            "bottom": "Five",
            "profilePic": "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(directories);
}