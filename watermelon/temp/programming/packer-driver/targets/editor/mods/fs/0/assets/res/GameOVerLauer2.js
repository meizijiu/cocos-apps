System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../GlobalScript/AudioCtrl", "../GlobalScript/AudioHelper", "../GlobalScript/NotificationCenter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, CLIP, AudioHelper, NCKeys, NotificationCenter, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, GameOVerLauer2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCLIP(extras) {
    _reporterNs.report("CLIP", "../GlobalScript/AudioCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioHelper(extras) {
    _reporterNs.report("AudioHelper", "../GlobalScript/AudioHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNCKeys(extras) {
    _reporterNs.report("NCKeys", "../GlobalScript/NotificationCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationCenter(extras) {
    _reporterNs.report("NotificationCenter", "../GlobalScript/NotificationCenter", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
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

      _cclegacy._RF.push({}, "9a416ekHKJIU7fGcKzkdM7i", "GameOVerLauer2", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameOVerLauer2", GameOVerLauer2 = (_dec = ccclass('GameOVerLauer2'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class GameOVerLauer2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scoreLabel", _descriptor, this);
        }

        init(score) {
          this.scoreLabel.string = `${score}`;
        }

        onReplayButtonClick() {
          (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
            error: Error()
          }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
            error: Error()
          }), CLIP) : CLIP).BUTTON);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).postNotice((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).RESET_GAME, null);
          this.node.destroy();
        }

        onRebornButtonClick() {
          (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
            error: Error()
          }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
            error: Error()
          }), CLIP) : CLIP).BUTTON);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).postNotice((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).REBORN_GAME, null);
          this.node.destroy();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameOVerLauer2.js.map