System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, find, _dec, _class, _temp, _crd, ccclass, property, executeInEditMode, executionOrder, Billboard;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9834etlRRAAZOwfE8N2MAb", "Billboard", undefined);

      ({
        ccclass,
        property,
        executeInEditMode,
        executionOrder
      } = _decorator);

      _export("Billboard", Billboard = (_dec = ccclass('Billboard'), _dec(_class = executeInEditMode(_class = (_temp = class Billboard extends Component {
        constructor(...args) {
          super(...args);
          this.cameraNode = null;
        }

        start() {
          this.cameraNode = find('Main Camera');
        }

        update() {
          this.node.forward = this.cameraNode.forward;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Billboard.js.map