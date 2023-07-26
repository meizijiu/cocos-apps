System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../Config/fruit_config", "../GlobalScript/AudioCtrl", "../GlobalScript/AudioHelper", "../GlobalScript/NotificationCenter", "../GlobalScript/Utils", "./FruitCtrl", "./ui/CanvasCtrl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, PhysicsSystem, Prefab, instantiate, Vec3, RigidBody, director, v3, Quat, fruit_config, CLIP, AudioHelper, NCKeys, NotificationCenter, Utils, FruitCtrl, CanvasCtrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GameSceneCtrl;

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

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../GlobalScript/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruitCtrl(extras) {
    _reporterNs.report("FruitCtrl", "./FruitCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCanvasCtrl(extras) {
    _reporterNs.report("CanvasCtrl", "./ui/CanvasCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
      director = _cc.director;
      v3 = _cc.v3;
      Quat = _cc.Quat;
    }, function (_ConfigFruit_config) {
      fruit_config = _ConfigFruit_config.fruit_config;
    }, function (_GlobalScriptAudioCtrl) {
      CLIP = _GlobalScriptAudioCtrl.CLIP;
    }, function (_GlobalScriptAudioHelper) {
      AudioHelper = _GlobalScriptAudioHelper.AudioHelper;
    }, function (_GlobalScriptNotificationCenter) {
      NCKeys = _GlobalScriptNotificationCenter.NCKeys;
      NotificationCenter = _GlobalScriptNotificationCenter.NotificationCenter;
    }, function (_GlobalScriptUtils) {
      Utils = _GlobalScriptUtils.Utils;
    }, function (_FruitCtrl) {
      FruitCtrl = _FruitCtrl.FruitCtrl;
    }, function (_uiCanvasCtrl) {
      CanvasCtrl = _uiCanvasCtrl.CanvasCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6559fPLfLpMPprDaZ0WRgDT", "GameSceneCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneCtrl", GameSceneCtrl = (_dec = ccclass('GameSceneCtrl'), _dec2 = property([Prefab]), _dec3 = property(Node), _dec4 = property(_crd && CanvasCtrl === void 0 ? (_reportPossibleCrUseOfCanvasCtrl({
        error: Error()
      }), CanvasCtrl) : CanvasCtrl), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = (_class2 = (_temp = class GameSceneCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fruitPrefabs", _descriptor, this);

          _initializerDefineProperty(this, "fruitContainer", _descriptor2, this);

          _initializerDefineProperty(this, "canvasCtrl", _descriptor3, this);

          _initializerDefineProperty(this, "labelingNode", _descriptor4, this);

          _initializerDefineProperty(this, "smokePrefab", _descriptor5, this);

          this.curFruit = null;
        }

        onLoad() {
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).loadResWithCorrection('audio', Prefab, (err, prefab) => {
            if (err) return;
            let node = instantiate(prefab);
            node.parent = director.getScene();
            (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
              error: Error()
            }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
              error: Error()
            }), CLIP) : CLIP).BGM, true, 0.3);
          });
          PhysicsSystem.instance.enable = true;
          this.schedule(this.updateForGameOver, 1);
        }

        onEnable() {
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).addObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).MERGE_NEW_FRUIT, this.onMergeNewFruit, this);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).addObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).RESET_GAME, this.onRestGame, this);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).addObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).REBORN_GAME, this.onRebornGame, this);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).addObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).REFRESH_CUR_FRUIT, this.onRefreshCurFruit, this);
          this.createCurFruit();
        }

        onDisable() {
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).removeObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).MERGE_NEW_FRUIT, this);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).removeObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).RESET_GAME, this);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).removeObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).REBORN_GAME, this);
          (_crd && NotificationCenter === void 0 ? (_reportPossibleCrUseOfNotificationCenter({
            error: Error()
          }), NotificationCenter) : NotificationCenter).removeObserver((_crd && NCKeys === void 0 ? (_reportPossibleCrUseOfNCKeys({
            error: Error()
          }), NCKeys) : NCKeys).REFRESH_CUR_FRUIT, this);
        }

        createCurFruit() {
          if (this.curFruit) return;
          let id = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).randomNextFruit();
          let position = new Vec3(0, 50, 0);
          let node = instantiate(this.fruitPrefabs[id]);
          node.position = position;
          node.getComponent(RigidBody).enabled = false;
          node.parent = this.fruitContainer;
          let ctrl = node.getComponent(_crd && FruitCtrl === void 0 ? (_reportPossibleCrUseOfFruitCtrl({
            error: Error()
          }), FruitCtrl) : FruitCtrl);
          ctrl.playBornAnimation(0.1);
          this.curFruit = node;
          this.labelingNode.active = true;
          this.labelingNode.position = new Vec3(0, 25, 0);
        }

        dropFruit() {
          if (!this.curFruit) return;
          let rigidBody = this.curFruit.getComponent(RigidBody);
          rigidBody.enabled = true;
          rigidBody.setLinearVelocity(new Vec3(0, -60, 0));
          rigidBody.setAngularVelocity(new Vec3(1, 1, 1));
          this.curFruit = null;
          this.scheduleOnce(this.createCurFruit, 1);
          this.labelingNode.active = false;
        }

        offsetCurFruit(offset) {
          let pos = v3(this.curFruit.position);
          pos.add(offset);
          if (pos.x <= -12) pos.x = -12;else if (pos.x > 12) pos.x = 12;
          if (pos.z < -12) pos.z = -12;else if (pos.z > 12) pos.z = 12;
          this.curFruit.position = pos;
          this.labelingNode.position = new Vec3(pos.x, 25, pos.z);
        }

        onRestGame() {
          this.fruitContainer.removeAllChildren();
          this.curFruit = null;
          this.createCurFruit();
          PhysicsSystem.instance.enable = true;
          this.canvasCtrl.reset();
          this.schedule(this.updateForGameOver, 1);
        }

        onRebornGame() {
          PhysicsSystem.instance.enable = true;
          this.canvasCtrl.reborn();
          this.schedule(this.updateForGameOver, 1);
        }

        onRefreshCurFruit(fruitId) {
          if (this.curFruit) this.curFruit.destroy();
          let id = fruitId;
          let position = new Vec3(0, 50, 0);
          let node = instantiate(this.fruitPrefabs[id]);
          node.position = position;
          node.getComponent(RigidBody).enabled = false;
          node.parent = this.fruitContainer;
          let ctrl = node.getComponent(_crd && FruitCtrl === void 0 ? (_reportPossibleCrUseOfFruitCtrl({
            error: Error()
          }), FruitCtrl) : FruitCtrl);
          ctrl.playBornAnimation(0.1);
          this.curFruit = node;
          this.labelingNode.active = true;
          this.labelingNode.position = new Vec3(0, 25, 0);
          let particle = instantiate(this.smokePrefab);
          particle.scale = new Vec3((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[id].scale);
          particle.position = node.position;
          particle.parent = director.getScene();
          setTimeout(() => {
            particle.destroy();
          }, 1000);
        }
        /*
          id, position
        */


        onMergeNewFruit(data) {
          let node = instantiate(this.fruitPrefabs[data.id]);
          node.position = data.position;
          let eulerX = Math.random() * 360;
          let eulerY = Math.random() * 360;
          let eulerZ = Math.random() * 360;
          node.rotation = Quat.fromEuler(new Quat(), eulerX, eulerY, eulerZ);
          node.parent = this.fruitContainer;
          node.getComponent(_crd && FruitCtrl === void 0 ? (_reportPossibleCrUseOfFruitCtrl({
            error: Error()
          }), FruitCtrl) : FruitCtrl).playBornAnimation();
          let particle = instantiate(this.smokePrefab);
          particle.scale = new Vec3((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].scale);
          particle.position = data.position;
          particle.parent = director.getScene();
          setTimeout(() => {
            particle.destroy();
          }, 1000);
          this.canvasCtrl.addScore((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].score); //合成了大西瓜

          if (data.id == (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config).length - 1) {
            setTimeout(() => {
              (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
                error: Error()
              }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
                error: Error()
              }), CLIP) : CLIP).GREAT);
              let particle = instantiate(this.smokePrefab);
              particle.scale = new Vec3((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
                error: Error()
              }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
                error: Error()
              }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
                error: Error()
              }), fruit_config) : fruit_config)[data.id].scale);
              particle.position = node.position;
              particle.parent = director.getScene();
              setTimeout(() => {
                particle.destroy();
              }, 1000);
              node.destroy();
              this.canvasCtrl.addWatermelon();
              this.canvasCtrl.reborn(); // let tween = new Tween(node);
              // tween
              //   .to(0.2, { position: new Vec3(12, 30, 15) })
              //   .delay(15)
              //   .call(() => {
              //    
              //   })
              //   .start();
            }, 1000);
          }
        }

        updateForGameOver(deltaTime) {
          let children = this.fruitContainer.children;

          for (let i = 0; i < children.length; i++) {
            if (children[i].position.y <= -10) {
              children[i].destroy();

              if (this.canvasCtrl.subLife() == false) {
                this.canvasCtrl.popGameOverLayer();
                PhysicsSystem.instance.enable = false;
                this.unschedule(this.updateForGameOver);
              }

              return;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fruitPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fruitContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvasCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelingNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "smokePrefab", [_dec6], {
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
//# sourceMappingURL=GameSceneCtrl.js.map