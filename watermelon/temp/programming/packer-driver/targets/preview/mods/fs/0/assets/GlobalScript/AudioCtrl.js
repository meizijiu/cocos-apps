System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, CCString, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, CLIP, AudioCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("CLIP", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      CCString = _cc.CCString;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91d23sg2LJLr7aNHXvlgw7T", "AudioCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (CLIP) {
        CLIP[CLIP["BGM"] = 0] = "BGM";
        CLIP[CLIP["DROP"] = 1] = "DROP";
        CLIP[CLIP["MERGRE"] = 2] = "MERGRE";
        CLIP[CLIP["BUTTON"] = 3] = "BUTTON";
        CLIP[CLIP["GREAT"] = 4] = "GREAT";
      })(CLIP || _export("CLIP", CLIP = {}));

      ; //注意 给上边的枚举添加任意新的东西之后都要记得取AudioHelper里添加新的路径和资源文件到魅族的包里

      _export("AudioCtrl", AudioCtrl = (_dec = ccclass("AudioCtrl"), _dec2 = property(CCString), _dec3 = property([AudioClip]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioCtrl, _Component);

        function AudioCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "sceneName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clips", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AudioCtrl.prototype;

        _proto.start = function start() {};

        _proto.onDestroy = function onDestroy() {
          for (var i = 0; i < this.clips.length; i++) {
            if (this.clips[i]) {
              this.clips[i].stop();
            }
          }
        };

        _proto.playOneShot = function playOneShot(clipIndex, vol) {
          if (vol === void 0) {
            vol = 1.0;
          }

          if (this.clips[clipIndex]) {
            this.clips[clipIndex].playOneShot(vol);
          }
        };

        _proto.play = function play(clipIndex, loop, vol) {
          if (loop === void 0) {
            loop = false;
          }

          if (vol === void 0) {
            vol = 1.0;
          }

          if (this.clips[clipIndex]) {
            if (loop == true) {
              this.clips[clipIndex].setVolume(vol);
              this.clips[clipIndex].setLoop(loop);
              this.clips[clipIndex].play();
            } else {
              this.clips[clipIndex].playOneShot(vol);
            }
          }
        };

        _proto.getPlayState = function getPlayState(clipIndex) {
          if (this.clips[clipIndex]) {
            return this.clips[clipIndex].state;
          }

          return null;
        };

        _proto.stop = function stop(clipIndex) {
          if (this.clips[clipIndex] && this.clips[clipIndex].state == AudioClip.PlayingState.PLAYING) {
            this.clips[clipIndex].stop();
          }
        };

        return AudioCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec3], {
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
//# sourceMappingURL=AudioCtrl.js.map