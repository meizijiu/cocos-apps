System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, view, UITransform, Vec3, _dec, _class, _crd, ccclass, property, BgNodeCtrl;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bcf6TxxvNErbZAgox09F/v", "BgNodeCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BgNodeCtrl", BgNodeCtrl = (_dec = ccclass('BgNodeCtrl'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BgNodeCtrl, _Component);

        function BgNodeCtrl() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BgNodeCtrl.prototype;

        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          var visibleSize = view.getVisibleSize();
          var scale = visibleSize.height / this.node.getComponent(UITransform).height;

          if (scale > 1) {
            this.node.scale = new Vec3(scale, scale, scale);
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return BgNodeCtrl;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BgNodeCtrl.js.map