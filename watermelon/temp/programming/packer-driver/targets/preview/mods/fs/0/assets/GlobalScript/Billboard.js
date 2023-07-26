System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, find, _dec, _class, _temp, _crd, ccclass, property, executeInEditMode, executionOrder, Billboard;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      executeInEditMode = _decorator.executeInEditMode;
      executionOrder = _decorator.executionOrder;

      _export("Billboard", Billboard = (_dec = ccclass('Billboard'), _dec(_class = executeInEditMode(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Billboard, _Component);

        function Billboard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.cameraNode = null;
          return _this;
        }

        var _proto = Billboard.prototype;

        _proto.start = function start() {
          this.cameraNode = find('Main Camera');
        };

        _proto.update = function update() {
          this.node.forward = this.cameraNode.forward;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return Billboard;
      }(Component), _temp)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Billboard.js.map