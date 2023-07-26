System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, view, UITransform, Vec3, _dec, _class, _crd, ccclass, property, BgNodeCtrl;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("BgNodeCtrl", BgNodeCtrl = (_dec = ccclass('BgNodeCtrl'), _dec(_class = class BgNodeCtrl extends Component {
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        start() {
          let visibleSize = view.getVisibleSize();
          let scale = visibleSize.height / this.node.getComponent(UITransform).height;

          if (scale > 1) {
            this.node.scale = new Vec3(scale, scale, scale);
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BgNodeCtrl.js.map