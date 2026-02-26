const path = require("node:path");
const { FileStore } = require("metro-cache");
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const { getDefaultConfig } = require("expo/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

const projectDir = __dirname;
const workspaceRoot = path.resolve(projectDir, "../..");

const symlinksResolver = MetroSymlinksResolver();

const expoConfig = getDefaultConfig(projectDir);

module.exports = makeMetroConfig({
  ...expoConfig,
  resolver: {
    ...expoConfig.resolver,
    resolveRequest: (context, moduleName, platform) => {
      try {
        const res = symlinksResolver(context, moduleName, platform);
        if (res) {
          return res;
        }
      } catch {
        return context.resolveRequest(context, moduleName, platform);
      }
    },
  },
  watchFolders: [workspaceRoot],
  cacheStores: [
    new FileStore({
      root: path.join(projectDir, "node_modules", ".cache", "metro"),
    }),
  ],
});
