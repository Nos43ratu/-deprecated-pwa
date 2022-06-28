const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@ui-kit": path.resolve(__dirname, "./src/shared/ui"),
      "@icons": path.resolve(__dirname, "./src/shared/icons"),
      "@layouts": path.resolve(__dirname, "./src/shared/layouts"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@api": path.resolve(__dirname, "./src/shared/api"),
      "@context": path.resolve(__dirname, "./src/shared/context"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
};
