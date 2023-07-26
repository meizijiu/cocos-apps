System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, CCString, CCInteger, error, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, LabelTickCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      CCString = _cc.CCString;
      CCInteger = _cc.CCInteger;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4559cl6X5pIRbfNlvKa4aoI", "LabelTickCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LabelTickCtrl", LabelTickCtrl = (_dec = ccclass("LabelTickCtrl"), _dec2 = property(Label), _dec3 = property({
        type: CCString
      }), _dec4 = property({
        type: CCString,
        multiline: true
      }), _dec5 = property(CCInteger), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelTickCtrl, _Component);

        function LabelTickCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "prefix", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "suffix", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "decimalPlaces", _descriptor4, _assertThisInitialized(_this));

          _this.curNumber = null;
          _this.intervalPerUpdate = null;
          _this.finalNumber = null;
          return _this;
        }

        var _proto = LabelTickCtrl.prototype;

        _proto.tickLabel = function tickLabel(curNumber, finalNumber, duration) {
          if (duration === void 0) {
            duration = 1;
          }

          if (typeof finalNumber != 'number') {
            return error('finalNumber 必须是数字哦');
          }

          curNumber = curNumber === null ? this.curNumber : curNumber;

          if (curNumber === null || curNumber == finalNumber) {
            this.curNumber = finalNumber;
            this.finalNumber = finalNumber;
            this.label.string = "" + this.prefix + this.finalNumber.toFixed(this.decimalPlaces) + this.suffix;
          } else {
            this.curNumber = curNumber;
            this.finalNumber = finalNumber;
            this.intervalPerUpdate = (finalNumber - curNumber) / (duration * 33);
            this.unschedule(this.updateForNumber);
            this.schedule(this.updateForNumber, 0.03);
            this.label.string = "" + this.prefix + this.curNumber.toFixed(this.decimalPlaces) + this.suffix;
          }
        };

        _proto.updateForNumber = function updateForNumber(dt) {
          this.curNumber += this.intervalPerUpdate;

          if (this.intervalPerUpdate > 0 && this.curNumber > this.finalNumber || this.intervalPerUpdate < 0 && this.curNumber < this.finalNumber) {
            this.curNumber = this.finalNumber;
            this.unschedule(this.updateForNumber);
          }

          this.label.string = "" + this.prefix + this.curNumber.toFixed(this.decimalPlaces) + this.suffix;
        };

        _proto.stop = function stop() {
          this.unschedule(this.updateForNumber);
          this.curNumber = null;
          this.finalNumber = null;
        };

        return LabelTickCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefix", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "suffix", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "decimalPlaces", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LabelTickCtrl.js.map