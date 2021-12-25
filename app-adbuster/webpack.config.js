
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Potta One", cursive, vaeiants: ["400"] },
           /*ここにフォントを追加していく．もちろん上のRobotoとSourse sans proは消してよい*/
            ]
            /* ...options */
        })
    ]
}