System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ProgressBar, error, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ProgressBarTickCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21a29AJCNRG973dO30JJmoT", "ProgressBarTickCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ProgressBarTickCtrl", ProgressBarTickCtrl = (_dec = ccclass('ProgressBarTickCtrl'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class ProgressBarTickCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          this.curNumber = null;
          this.intervalPerUpdate = null;
          this.finalNumber = null;
        }

        tickProgress(curNumber, finalNumber, duration = 1) {
          if (typeof finalNumber != 'number') {
            return error('finalNumber 必须是数字哦');
          }

          curNumber = curNumber === null ? this.curNumber : curNumber;

          if (curNumber === null || curNumber == finalNumber) {
            this.curNumber = finalNumber;
            this.finalNumber = finalNumber;
            this.progressBar.progress = finalNumber;
          } else {
            this.curNumber = curNumber;
            this.finalNumber = finalNumber;
            this.intervalPerUpdate = (finalNumber - curNumber) / (duration * 33);
            this.unschedule(this.updateForNumber);
            this.schedule(this.updateForNumber, 0.03);
            this.progressBar.progress = this.curNumber;
          }
        }

        updateForNumber(dt) {
          this.curNumber += this.intervalPerUpdate;

          if (this.intervalPerUpdate > 0 && this.curNumber > this.finalNumber || this.intervalPerUpdate < 0 && this.curNumber < this.finalNumber) {
            this.curNumber = this.finalNumber;
            this.unschedule(this.updateForNumber);
          }

          this.progressBar.progress = this.curNumber;
        }

        stop() {
          this.unschedule(this.updateForNumber);
          this.curNumber = null;
          this.finalNumber = null;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
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
//# sourceMappingURL=ProgressBarTickCtrl.js.map