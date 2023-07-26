System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../../GlobalScript/LabelTickCtrl", "./gameOverLayer/GameOverLayerCtrl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Tween, Vec3, LabelTickCtrl, GameOverLayerCtrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, CanvasCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLabelTickCtrl(extras) {
    _reporterNs.report("LabelTickCtrl", "../../GlobalScript/LabelTickCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameOverLayerCtrl(extras) {
    _reporterNs.report("GameOverLayerCtrl", "./gameOverLayer/GameOverLayerCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }, function (_GlobalScriptLabelTickCtrl) {
      LabelTickCtrl = _GlobalScriptLabelTickCtrl.LabelTickCtrl;
    }, function (_gameOverLayerGameOverLayerCtrl) {
      GameOverLayerCtrl = _gameOverLayerGameOverLayerCtrl.GameOverLayerCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aad39LO/cpHMb3tbiDd++L9", "CanvasCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CanvasCtrl", CanvasCtrl = (_dec = ccclass('CanvasCtrl'), _dec2 = property(_crd && LabelTickCtrl === void 0 ? (_reportPossibleCrUseOfLabelTickCtrl({
        error: Error()
      }), LabelTickCtrl) : LabelTickCtrl), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property([Node]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CanvasCtrl, _Component);

        function CanvasCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "scoreLabelTick", _descriptor, _assertThisInitialized(_this));

          _this.score = 0;

          _initializerDefineProperty(_this, "watermelonContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "watermelonTitle", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "watermelonPrefab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameOverPrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hearts", _descriptor6, _assertThisInitialized(_this));

          _this.life = 0;
          return _this;
        }

        var _proto = CanvasCtrl.prototype;

        _proto.start = function start() {
          this.life = this.hearts.length;
        };

        _proto.reset = function reset() {
          this.score = 0;
          this.scoreLabelTick.tickLabel(null, 0, 0.1);
          this.watermelonContainer.destroyAllChildren();
          this.watermelonTitle.active = false;
          this.reborn();
        };

        _proto.reborn = function reborn() {
          this.life = this.hearts.length;

          for (var i = 0; i < this.hearts.length; i++) {
            var node = this.hearts[i];
            node.active = true;
            var tween = new Tween(node);
            tween.to(0.1, {
              scale: new Vec3(1.1, 1.1, 1.1)
            }).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
        };

        _proto.subLife = function subLife() {
          this.life--;
          var node = this.hearts[this.life];
          var tween = new Tween(node);
          tween.to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(0, 0, 0)
          }).call(function () {
            node.active = false;
          }).start();
          return this.life > 0;
        };

        _proto.addScore = function addScore(val) {
          this.score += val;
          this.scoreLabelTick.tickLabel(null, this.score, 1);
        };

        _proto.addWatermelon = function addWatermelon() {
          var node = instantiate(this.watermelonPrefab);
          node.parent = this.watermelonContainer;
          node.scale = Vec3.ZERO;
          var tween = new Tween(node);
          tween.to(0.4, {
            scale: Vec3.ONE
          }, {
            easing: 'elasticOut'
          }).start();
          this.watermelonTitle.active = true;
        };

        _proto.popGameOverLayer = function popGameOverLayer() {
          var node = instantiate(this.gameOverPrefab);
          node.getComponent(_crd && GameOverLayerCtrl === void 0 ? (_reportPossibleCrUseOfGameOverLayerCtrl({
            error: Error()
          }), GameOverLayerCtrl) : GameOverLayerCtrl).init(this.score);
          node.parent = this.node;
        };

        return CanvasCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabelTick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watermelonContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "watermelonTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "watermelonPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameOverPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hearts", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CanvasCtrl.js.map