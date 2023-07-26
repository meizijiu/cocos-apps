System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./LabelTickCtrl", "./LanguageConfig"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CCString, LabelTickCtrl, LanguageConfig, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _dec5, _dec6, _class4, _class5, _descriptor4, _temp2, _crd, ccclass, property, LanguageTickParam, LanguageLabelTicksCtrl;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLabelTickCtrl(extras) {
    _reporterNs.report("LabelTickCtrl", "./LabelTickCtrl", _context.meta, extras);
  }

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
      CCString = _cc.CCString;
    }, function (_LabelTickCtrl) {
      LabelTickCtrl = _LabelTickCtrl.LabelTickCtrl;
    }, function (_LanguageConfig) {
      LanguageConfig = _LanguageConfig.LanguageConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4bc2baUwTNCsK9ZjAz6rvJB", "LanguageLabelTicksCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      LanguageTickParam = (_dec = ccclass('LanguageTickParam'), _dec2 = property(_crd && LabelTickCtrl === void 0 ? (_reportPossibleCrUseOfLabelTickCtrl({
        error: Error()
      }), LabelTickCtrl) : LabelTickCtrl), _dec3 = property({
        type: CCString
      }), _dec4 = property({
        type: CCString
      }), _dec(_class = (_class2 = (_temp = function LanguageTickParam() {
        _initializerDefineProperty(this, "labelTick", _descriptor, this);

        _initializerDefineProperty(this, "prefixKey", _descriptor2, this);

        _initializerDefineProperty(this, "suffixKey", _descriptor3, this);
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefixKey", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "suffixKey", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class);

      _export("LanguageLabelTicksCtrl", LanguageLabelTicksCtrl = (_dec5 = ccclass('LanguageLabelTicksCtrl'), _dec6 = property([LanguageTickParam]), _dec5(_class4 = (_class5 = (_temp2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LanguageLabelTicksCtrl, _Component);

        function LanguageLabelTicksCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "params", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LanguageLabelTicksCtrl.prototype;

        _proto.onLoad = function onLoad() {
          for (var i = 0; i < this.params.length; i++) {
            var param = this.params[i];

            if (param.prefixKey) {
              param.labelTick.prefix = (_crd && LanguageConfig === void 0 ? (_reportPossibleCrUseOfLanguageConfig({
                error: Error()
              }), LanguageConfig) : LanguageConfig).get(param.prefixKey);
            }

            if (param.suffixKey) {
              param.labelTick.suffix = (_crd && LanguageConfig === void 0 ? (_reportPossibleCrUseOfLanguageConfig({
                error: Error()
              }), LanguageConfig) : LanguageConfig).get(param.suffixKey);
            }
          }
        };

        return LanguageLabelTicksCtrl;
      }(Component), _temp2), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "params", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LanguageLabelTicksCtrl.js.map