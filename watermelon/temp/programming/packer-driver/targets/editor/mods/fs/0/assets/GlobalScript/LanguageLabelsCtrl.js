System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./LanguageConfig"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, CCString, LanguageConfig, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _dec4, _dec5, _class4, _class5, _descriptor3, _temp2, _crd, ccclass, property, LanguageParam, LanguageLabelsCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLanguageConfig(extras) {
    _reporterNs.report("LanguageConfig", "./LanguageConfig", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      CCString = _cc.CCString;
    }, function (_LanguageConfig) {
      LanguageConfig = _LanguageConfig.LanguageConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "759ecDR+ehFaIED+gkbVHFS", "LanguageLabelsCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      LanguageParam = (_dec = ccclass("LanguageParam"), _dec2 = property(Label), _dec3 = property(CCString), _dec(_class = (_class2 = (_temp = class LanguageParam {
        constructor() {
          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "languageKey", _descriptor2, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "languageKey", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class);

      _export("LanguageLabelsCtrl", LanguageLabelsCtrl = (_dec4 = ccclass('LanguageLabelsCtrl'), _dec5 = property([LanguageParam]), _dec4(_class4 = (_class5 = (_temp2 = class LanguageLabelsCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelParams", _descriptor3, this);
        }

        onLoad() {
          for (let i = 0; i < this.labelParams.length; i++) {
            let labelParam = this.labelParams[i];

            if (labelParam.languageKey) {
              labelParam.label.string = (_crd && LanguageConfig === void 0 ? (_reportPossibleCrUseOfLanguageConfig({
                error: Error()
              }), LanguageConfig) : LanguageConfig).get(labelParam.languageKey);
            }
          }
        }

      }, _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "labelParams", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LanguageLabelsCtrl.js.map