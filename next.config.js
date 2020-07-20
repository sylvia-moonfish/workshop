const withLess = require("@zeit/next-less");

module.exports = withLess({
  lessLoaderOptions: {
    modifyVars: {
      "body-background": "#141414",
      "font-family": "'Noto Sans KR'",
      "primary-color": "#722ed1",
    },
    javascriptEnabled: true,
  },
});
