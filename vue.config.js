const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(async () => {
  return {
    transpileDependencies: true,
  };
});
