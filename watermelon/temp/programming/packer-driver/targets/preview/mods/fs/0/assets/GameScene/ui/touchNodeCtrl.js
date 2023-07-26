System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../GameSceneCtrl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, GameSceneCtrl, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TouchNodeCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameSceneCtrl(extras) {
    _reporterNs.report("GameSceneCtrl", "../GameSceneCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_GameSceneCtrl) {
      GameSceneCtrl = _GameSceneCtrl.GameSceneCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6874c9UIVdO4aSmbRMAykKB", "touchNodeCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TouchNodeCtrl", TouchNodeCtrl = (_dec = ccclass('TouchNodeCtrl'), _dec2 = property(_crd && GameSceneCtrl === void 0 ? (_reportPossibleCrUseOfGameSceneCtrl({
        error: Error()
      }), GameSceneCtrl) : GameSceneCtrl), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TouchNodeCtrl, _Component);

        function TouchNodeCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "gameSceneCtrl", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TouchNodeCtrl.prototype;

        _proto.onEnable = function onEnable() {
          // this.node.on(Node.EventType.TOUCH_START, this.onTouchBegin, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };

        _proto.onDisable = function onDisable() {
          // this.node.off(Node.EventType.TOUCH_START, this.onTouchBegin, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        } // onTouchBegin(event: EventTouch) {
        // }
        ;

        _proto.onTouchMove = function onTouchMove(event) {
          if (!this.gameSceneCtrl.curFruit) return;
          var befforeOffset = event.getDelta(); //todo 转换offset

          var a = 18 / 180 * Math.PI;
          var b = 23 / 180 * Math.PI;
          var x0 = befforeOffset.x;
          var y0 = befforeOffset.y;
          var x1 = x0 * Math.cos(a) - y0 * Math.sin(a);
          var z1 = -x0 * Math.cos(b) * 0.74 - y0 * Math.sin(b) * 0.74;
          var afferOffset = new Vec3(x1 * 0.07, 0, z1 * 0.07);
          this.gameSceneCtrl.offsetCurFruit(afferOffset);
          var position = new Vec3(this.gameSceneCtrl.curFruit.position);
          position.add(afferOffset);
          this.gameSceneCtrl.curFruit.position = position;
        };

        _proto.onTouchEnd = function onTouchEnd() {
          if (!this.gameSceneCtrl.curFruit) return;
          this.gameSceneCtrl.dropFruit();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return TouchNodeCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameSceneCtrl", [_dec2], {
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
//# sourceMappingURL=touchNodeCtrl.js.map