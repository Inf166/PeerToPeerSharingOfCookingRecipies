module.exports = {
    pwa: {
        name: "meinkochbuch",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Mein Kochbuch";
                return args;
            })
    }
};