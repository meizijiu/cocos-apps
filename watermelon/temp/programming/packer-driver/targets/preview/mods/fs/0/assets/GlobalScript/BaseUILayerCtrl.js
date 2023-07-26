System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./NotificationCenter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Animation, CCString, log, NCKeys, NotificationCenter, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BaseUILayerCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNCKeys(extras) {
    _reporterNs.report("NCKeys", "./NotificationCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationCenter(extras) {
    _reporterNs.report("NotificationCenter", "./NotificationCenter", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      CCString = _cc.CCString;
      log = _cc.log;
    }, function (_NotificationCenter) {
      NCKeys = _NotificationCenter.NCKeys;
      NotificationCenter = _NotificationCenter.NotificationCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ee91VY6sRAUZCHfbU69vGW", "BaseUILayerCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseUILayerCtrl", BaseUILayerCtrl = (_dec = ccclass("BaseUILayerCtrl"), _dec2 = property({
        type: CCString
      }), _dec3 = property({
        type: CCString
      }), _dec4 = property({
        type: Animation
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUILayerCtrl, _Component);

        function BaseUILayerCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "inActionName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "outActionName", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BaseUILayerCtrl.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.onEnable = function onEnable() {
          this.playInAction();
        };

        _proto.playInAction = function playInAction() {
          this.animation.play(this.inActionName);
        };

        _proto.onInActionFinish = function onInActionFinish() {
          log('InActionFinish');
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).postNotice((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).PAGE_SHOW, {
            name: this.node.name,
            ctrl: this
          });
        };

        _proto.playOutAction = function playOutAction() {
          this.animation.play(this.outActionName);
        };

        _proto.onOutActionFinish = function onOutActionFinish() {
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).postNotice((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).PAGE_HIDE, {
            name: this.node.name,
            ctrl: this
          });
          this.node.destroy();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return BaseUILayerCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inActionName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "outActionName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BaseUILayerCtrl.js.map