System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Config"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Config, _crd, LanguageConfig;

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "./Config", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_Config) {
      Config = _Config.Config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3d00MUaqlJCYNZaPiDG6jS", "LanguageConfig", undefined);

      _export("LanguageConfig", LanguageConfig = {
        get(key) {
          return this[key][(_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).language];
        }

      });

      globalThis.LanguageConfig = LanguageConfig;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LanguageConfig.js.map