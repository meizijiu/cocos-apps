System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../../GlobalScript/AudioCtrl", "../../GlobalScript/AudioHelper", "../../GlobalScript/NotificationCenter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Tween, Vec3, CLIP, AudioHelper, NCKeys, NotificationCenter, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, RefreshFruitNodeCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCLIP(extras) {
    _reporterNs.report("CLIP", "../../GlobalScript/AudioCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioHelper(extras) {
    _reporterNs.report("AudioHelper", "../../GlobalScript/AudioHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNCKeys(extras) {
    _reporterNs.report("NCKeys", "../../GlobalScript/NotificationCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationCenter(extras) {
    _reporterNs.report("NotificationCenter", "../../GlobalScript/NotificationCenter", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }, function (_GlobalScriptAudioCtrl) {
      CLIP = _GlobalScriptAudioCtrl.CLIP;
    }, function (_GlobalScriptAudioHelper) {
      AudioHelper = _GlobalScriptAudioHelper.AudioHelper;
    }, function (_GlobalScriptNotificationCenter) {
      NCKeys = _GlobalScriptNotificationCenter.NCKeys;
      NotificationCenter = _GlobalScriptNotificationCenter.NotificationCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23abap2ZhtCx4LLsnNZEkLa", "RefreshFruitNodeCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RefreshFruitNodeCtrl", RefreshFruitNodeCtrl = (_dec = ccclass('RefreshFruitNodeCtrl'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class RefreshFruitNodeCtrl extends Component {
        constructor(...args) {
          super(...args);
          this.state = 'hide';

          _initializerDefineProperty(this, "toolNode", _descriptor, this);
        }

        start() {// Your initialization goes here.
        }

        onShowButtonClick() {
          (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
            error: Error()
          }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
            error: Error()
          }), CLIP) : CLIP).BUTTON);
          Tween.stopAllByTarget(this.toolNode);

          if (this.state == 'hide') {
            this.state = 'show';
            let endPos = new Vec3(-52, -122, 0);
            let tween = new Tween(this.toolNode);
            tween.to(0.1, {
              position: endPos
            }).start();
          } else {
            this.state = 'hide';
            let endPos = new Vec3(260, -122, 0);
            let tween = new Tween(this.toolNode);
            tween.to(0.1, {
              position: endPos
            }).start();
          }
        }

        onFruitButtonClick(event, custom) {
          (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
            error: Error()
          }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
            error: Error()
          }), CLIP) : CLIP).BUTTON);
          let fruitId = parseInt(custom);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).postNotice((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).REFRESH_CUR_FRUIT, fruitId);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toolNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RefreshFruitNodeCtrl.js.map