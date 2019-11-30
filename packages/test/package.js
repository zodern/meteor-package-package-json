Package.describe({
  summary: "Client Side Storage for Kadira Debug",
  name: "local:test"
});

Npm.depends({
  "lru-cache": "2.6.4"
});

Package.onUse(api => {
  configure(api);
  api.export("DebugStore", ["client"]);
});

function configure(api) {
  api.versionsFrom("1.6.1.4");
  api.use("ecmascript");
  api.addFiles("experiment.js", ["server", "client"]);
}
