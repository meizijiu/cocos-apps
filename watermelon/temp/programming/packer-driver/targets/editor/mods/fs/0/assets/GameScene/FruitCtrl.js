System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../Config/fruit_config", "../GlobalScript/AudioCtrl", "../GlobalScript/AudioHelper", "../GlobalScript/NotificationCenter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CCInteger, Collider, Vec3, Tween, RigidBody, fruit_config, CLIP, AudioHelper, NCKeys, NotificationCenter, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, FruitCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffruit_config(extras) {
    _reporterNs.report("fruit_config", "../Config/fruit_config", _context.meta, extras);
  }

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
      CCInteger = _cc.CCInteger;
      Collider = _cc.Collider;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      RigidBody = _cc.RigidBody;
    }, function (_ConfigFruit_config) {
      fruit_config = _ConfigFruit_config.fruit_config;
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

      _cclegacy._RF.push({}, "7ed5dptyktFKYvopbPN9Y8D", "FruitCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FruitCtrl", FruitCtrl = (_dec = ccclass('FruitCtrl'), _dec2 = property(CCInteger), _dec(_class = (_class2 = (_temp = class FruitCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "id", _descriptor, this);

          this.state = 'FREE';
          this.isPlayColliderAudio = false;
        }

        onLoad() {
          let scale = (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[this.id].scale;
          this.node.scale = new Vec3(scale, scale, scale);
        }

        playBornAnimation(startScale) {
          if (!startScale) startScale = (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[this.id - 1].scale;
          this.node.scale = new Vec3(startScale, startScale, startScale);
          this.state = 'WAIT';
          let tween = new Tween(this.node);
          let scale = (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[this.id].scale;
          tween.to(0.2, {
            scale: new Vec3(scale, scale, scale)
          }).call(() => {
            this.state = 'FREE';
          }).start();
        }

        onEnable() {
          let collider = this.getComponent(Collider);
          collider.on('onCollisionEnter', this.onCollisionEnter, this);
          collider.on('onCollisionStay', this.onCollisionStay, this);
        }

        onDisable() {
          let collider = this.getComponent(Collider);
          collider.on('onCollisionEnter', this.onCollisionEnter, this);
          collider.on('onCollisionStay', this.onCollisionStay, this);
        }

        onCollisionEnter(event) {
          if (this.isPlayColliderAudio == false) {
            (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
              error: Error()
            }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
              error: Error()
            }), CLIP) : CLIP).DROP);
            this.isPlayColliderAudio = true;
          }

          this.solveCollision(event);
        }

        onCollisionStay(event) {
          this.solveCollision(event);
        }

        onCollisionExit() {}

        solveCollision(event) {
          if (this.id >= (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config).length - 1) return;
          if (this.state != 'FREE') return;
          if (!event.otherCollider) return;
          let otherCtrl = event.otherCollider.getComponent(FruitCtrl);
          if (!otherCtrl) return;
          if (otherCtrl.state != 'FREE') return;
          if (otherCtrl.id != this.id) return;
          this.state = 'MERGE';
          otherCtrl.state = 'MERGE'; // this.getComponent(RigidBody).enabled = false;

          otherCtrl.getComponent(RigidBody).enabled = false;
          let tween = new Tween(otherCtrl.node);
          tween.to(0.1, {
            position: new Vec3(this.node.position)
          }).call(() => {
            this.node.destroy();
            otherCtrl.node.destroy();
            (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
              error: Error()
            }), NotificationCenter) : NotificationCenter).postNotice((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
              error: Error()
            }), NCKeys) : NCKeys).MERGE_NEW_FRUIT, {
              id: this.id + 1,
              position: new Vec3(this.node.position)
            });
          }).start();
          (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
            error: Error()
          }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
            error: Error()
          }), CLIP) : CLIP).MERGRE, false, 0.3);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FruitCtrl.js.map