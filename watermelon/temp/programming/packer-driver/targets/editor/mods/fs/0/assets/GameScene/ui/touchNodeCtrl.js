System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../GameSceneCtrl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, GameSceneCtrl, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TouchNodeCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchNodeCtrl", TouchNodeCtrl = (_dec = ccclass('TouchNodeCtrl'), _dec2 = property(_crd && GameSceneCtrl === void 0 ? (_reportPossibleCrUseOfGameSceneCtrl({
        error: Error()
      }), GameSceneCtrl) : GameSceneCtrl), _dec(_class = (_class2 = (_temp = class TouchNodeCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameSceneCtrl", _descriptor, this);
        }

        onEnable() {
          // this.node.on(Node.EventType.TOUCH_START, this.onTouchBegin, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onDisable() {
          // this.node.off(Node.EventType.TOUCH_START, this.onTouchBegin, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        } // onTouchBegin(event: EventTouch) {
        // }


        onTouchMove(event) {
          if (!this.gameSceneCtrl.curFruit) return;
          let befforeOffset = event.getDelta(); //todo 转换offset

          let a = 18 / 180 * Math.PI;
          let b = 23 / 180 * Math.PI;
          let x0 = befforeOffset.x;
          let y0 = befforeOffset.y;
          let x1 = x0 * Math.cos(a) - y0 * Math.sin(a);
          let z1 = -x0 * Math.cos(b) * 0.74 - y0 * Math.sin(b) * 0.74;
          let afferOffset = new Vec3(x1 * 0.07, 0, z1 * 0.07);
          this.gameSceneCtrl.offsetCurFruit(afferOffset);
          let position = new Vec3(this.gameSceneCtrl.curFruit.position);
          position.add(afferOffset);
          this.gameSceneCtrl.curFruit.position = position;
        }

        onTouchEnd() {
          if (!this.gameSceneCtrl.curFruit) return;
          this.gameSceneCtrl.dropFruit();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameSceneCtrl", [_dec2], {
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
//# sourceMappingURL=touchNodeCtrl.js.map