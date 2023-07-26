System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, UITransform, CCFloat, view, v3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LayoutForTopToolAndBanner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      CCFloat = _cc.CCFloat;
      view = _cc.view;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a2c8tBygxJIqOTon2JJl23", "LayoutForTopToolAndBanner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LayoutForTopToolAndBanner", LayoutForTopToolAndBanner = (_dec = ccclass('LayoutForTopToolAndBanner'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec(_class = (_class2 = (_temp = class LayoutForTopToolAndBanner extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "topOffset", _descriptor, this);

          _initializerDefineProperty(this, "bottomOffset", _descriptor2, this);
        }

        start() {
          let visibleSize = view.getVisibleSize();
          let scale = 1;

          if (visibleSize.height - this.topOffset - this.bottomOffset < this.node.getComponent(UITransform).height) {
            scale = (visibleSize.height - this.topOffset - this.bottomOffset) / this.node.getComponent(UITransform).height;
          }

          this.node.scale = v3(scale, scale, scale);
          let oldPos = v3(this.node.position);
          oldPos.y = visibleSize.height / 2 - this.topOffset - this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY) * scale;
          this.node.position = oldPos;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topOffset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 88;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomOffset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 160;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LayoutForTopToolAndBanner.js.map