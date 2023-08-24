const path = require("path");
const { addBeforeLoader, loaderByName } = require("@craco/craco");

module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@types": path.resolve(__dirname, "src/types"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@unityBuild": path.resolve(__dirname, "src/unityBuild"),
    }
  },
};
