let config =require("./docusaurus.config_preprod")

let newConfig = config;
newConfig.presets[0][1].docs.path="docsPostProcessed/docs"
newConfig.presets[0][1].docs.onlyIncludeVersions=["current"]

module.exports = newConfig