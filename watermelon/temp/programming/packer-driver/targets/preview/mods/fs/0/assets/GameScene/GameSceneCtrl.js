System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../Config/fruit_config", "../GlobalScript/AudioCtrl", "../GlobalScript/AudioHelper", "../GlobalScript/NotificationCenter", "../GlobalScript/Utils", "./FruitCtrl", "./ui/CanvasCtrl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, PhysicsSystem, Prefab, instantiate, Vec3, RigidBody, director, v3, Quat, fruit_config, CLIP, AudioHelper, NCKeys, NotificationCenter, Utils, FruitCtrl, CanvasCtrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GameSceneCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameSceneCtrl", GameSceneCtrl = (_dec = ccclass('GameSceneCtrl'), _dec2 = property([Prefab]), _dec3 = property(Node), _dec4 = property(_crd && CanvasCtrl === void 0 ? (_reportPossibleCrUseOfCanvasCtrl({
        error: Error()
      }), CanvasCtrl) : CanvasCtrl), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameSceneCtrl, _Component);

        function GameSceneCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "fruitPrefabs", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "fruitContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "canvasCtrl", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelingNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "smokePrefab", _descriptor5, _assertThisInitialized(_this));

          _this.curFruit = null;
          return _this;
        }

        var _proto = GameSceneCtrl.prototype;

        _proto.onLoad = function onLoad() {
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).loadResWithCorrection('audio', Prefab, function (err, prefab) {
            if (err) return;
            var node = instantiate(prefab);
            node.parent = director.getScene();
            (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
              error: Error()
            }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
              error: Error()
            }), CLIP) : CLIP).BGM, true, 0.3);
          });
          PhysicsSystem.instance.enable = true;
          this.schedule(this.updateForGameOver, 1);
        };

        _proto.onEnable = function onEnable() {
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
        };

        _proto.onDisable = function onDisable() {
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
        };

        _proto.createCurFruit = function createCurFruit() {
          if (this.curFruit) return;
          var id = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).randomNextFruit();
          var position = new Vec3(0, 50, 0);
          var node = instantiate(this.fruitPrefabs[id]);
          node.position = position;
          node.getComponent(RigidBody).enabled = false;
          node.parent = this.fruitContainer;
          var ctrl = node.getComponent(_crd && FruitCtrl === void 0 ? (_reportPossibleCrUseOfFruitCtrl({
            error: Error()
          }), FruitCtrl) : FruitCtrl);
          ctrl.playBornAnimation(0.1);
          this.curFruit = node;
          this.labelingNode.active = true;
          this.labelingNode.position = new Vec3(0, 25, 0);
        };

        _proto.dropFruit = function dropFruit() {
          if (!this.curFruit) return;
          var rigidBody = this.curFruit.getComponent(RigidBody);
          rigidBody.enabled = true;
          rigidBody.setLinearVelocity(new Vec3(0, -60, 0));
          rigidBody.setAngularVelocity(new Vec3(1, 1, 1));
          this.curFruit = null;
          this.scheduleOnce(this.createCurFruit, 1);
          this.labelingNode.active = false;
        };

        _proto.offsetCurFruit = function offsetCurFruit(offset) {
          var pos = v3(this.curFruit.position);
          pos.add(offset);
          if (pos.x <= -12) pos.x = -12;else if (pos.x > 12) pos.x = 12;
          if (pos.z < -12) pos.z = -12;else if (pos.z > 12) pos.z = 12;
          this.curFruit.position = pos;
          this.labelingNode.position = new Vec3(pos.x, 25, pos.z);
        };

        _proto.onRestGame = function onRestGame() {
          this.fruitContainer.removeAllChildren();
          this.curFruit = null;
          this.createCurFruit();
          PhysicsSystem.instance.enable = true;
          this.canvasCtrl.reset();
          this.schedule(this.updateForGameOver, 1);
        };

        _proto.onRebornGame = function onRebornGame() {
          PhysicsSystem.instance.enable = true;
          this.canvasCtrl.reborn();
          this.schedule(this.updateForGameOver, 1);
        };

        _proto.onRefreshCurFruit = function onRefreshCurFruit(fruitId) {
          if (this.curFruit) this.curFruit.destroy();
          var id = fruitId;
          var position = new Vec3(0, 50, 0);
          var node = instantiate(this.fruitPrefabs[id]);
          node.position = position;
          node.getComponent(RigidBody).enabled = false;
          node.parent = this.fruitContainer;
          var ctrl = node.getComponent(_crd && FruitCtrl === void 0 ? (_reportPossibleCrUseOfFruitCtrl({
            error: Error()
          }), FruitCtrl) : FruitCtrl);
          ctrl.playBornAnimation(0.1);
          this.curFruit = node;
          this.labelingNode.active = true;
          this.labelingNode.position = new Vec3(0, 25, 0);
          var particle = instantiate(this.smokePrefab);
          particle.scale = new Vec3((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[id].scale);
          particle.position = node.position;
          particle.parent = director.getScene();
          setTimeout(function () {
            particle.destroy();
          }, 1000);
        }
        /*
          id, position
        */
        ;

        _proto.onMergeNewFruit = function onMergeNewFruit(data) {
          var _this2 = this;

          var node = instantiate(this.fruitPrefabs[data.id]);
          node.position = data.position;
          var eulerX = Math.random() * 360;
          var eulerY = Math.random() * 360;
          var eulerZ = Math.random() * 360;
          node.rotation = Quat.fromEuler(new Quat(), eulerX, eulerY, eulerZ);
          node.parent = this.fruitContainer;
          node.getComponent(_crd && FruitCtrl === void 0 ? (_reportPossibleCrUseOfFruitCtrl({
            error: Error()
          }), FruitCtrl) : FruitCtrl).playBornAnimation();
          var particle = instantiate(this.smokePrefab);
          particle.scale = new Vec3((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].scale);
          particle.position = data.position;
          particle.parent = director.getScene();
          setTimeout(function () {
            particle.destroy();
          }, 1000);
          this.canvasCtrl.addScore((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config)[data.id].score); //合成了大西瓜

          if (data.id == (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
            error: Error()
          }), fruit_config) : fruit_config).length - 1) {
            setTimeout(function () {
              (_crd && AudioHelper === void 0 ? (_reportPossibleCrUseOfAudioHelper({
                error: Error()
              }), AudioHelper) : AudioHelper).play('audio', (_crd && CLIP === void 0 ? (_reportPossibleCrUseOfCLIP({
                error: Error()
              }), CLIP) : CLIP).GREAT);
              var particle = instantiate(_this2.smokePrefab);
              particle.scale = new Vec3((_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
                error: Error()
              }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
                error: Error()
              }), fruit_config) : fruit_config)[data.id].scale, (_crd && fruit_config === void 0 ? (_reportPossibleCrUseOffruit_config({
                error: Error()
              }), fruit_config) : fruit_config)[data.id].scale);
              particle.position = node.position;
              particle.parent = director.getScene();
              setTimeout(function () {
                particle.destroy();
              }, 1000);
              node.destroy();

              _this2.canvasCtrl.addWatermelon();

              _this2.canvasCtrl.reborn(); // let tween = new Tween(node);
              // tween
              //   .to(0.2, { position: new Vec3(12, 30, 15) })
              //   .delay(15)
              //   .call(() => {
              //    
              //   })
              //   .start();

            }, 1000);
          }
        };

        _proto.updateForGameOver = function updateForGameOver(deltaTime) {
          var children = this.fruitContainer.children;

          for (var i = 0; i < children.length; i++) {
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
        };

        return GameSceneCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fruitPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fruitContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvasCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelingNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "smokePrefab", [_dec6], {
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
//# sourceMappingURL=GameSceneCtrl.js.map