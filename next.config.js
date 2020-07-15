const withLess = require("@zeit/next-less");

module.exports = withLess({
    lessLoaderOptions: {
            modifyVars: {
                "body-background": "#141414",
                "font-family":
                    "'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "primary-color": "#722ed1",
            },
            javascriptEnabled: true,
    },
});
