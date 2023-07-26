System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _crd, ccclass, property, LANGUAGE, Config;

  _export("LANGUAGE", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2bde1tjQJByaYZfZU0PVDJ", "Config", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (LANGUAGE) {
        LANGUAGE[LANGUAGE["CN"] = 0] = "CN";
        LANGUAGE[LANGUAGE["EN"] = 1] = "EN";
      })(LANGUAGE || _export("LANGUAGE", LANGUAGE = {}));

      ;

      _export("Config", Config = {
        version: '1.8.0',
        language: LANGUAGE.CN
      });

      globalThis.Config = Config;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Config.js.map