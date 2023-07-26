System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, CCString, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, CLIP, AudioCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      (function (CLIP) {
        CLIP[CLIP["BGM"] = 0] = "BGM";
        CLIP[CLIP["DROP"] = 1] = "DROP";
        CLIP[CLIP["MERGRE"] = 2] = "MERGRE";
        CLIP[CLIP["BUTTON"] = 3] = "BUTTON";
        CLIP[CLIP["GREAT"] = 4] = "GREAT";
      })(CLIP || _export("CLIP", CLIP = {}));

      ; //注意 给上边的枚举添加任意新的东西之后都要记得取AudioHelper里添加新的路径和资源文件到魅族的包里

      _export("AudioCtrl", AudioCtrl = (_dec = ccclass("AudioCtrl"), _dec2 = property(CCString), _dec3 = property([AudioClip]), _dec(_class = (_class2 = (_temp = class AudioCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sceneName", _descriptor, this);

          _initializerDefineProperty(this, "clips", _descriptor2, this);
        }

        start() {}

        onDestroy() {
          for (let i = 0; i < this.clips.length; i++) {
            if (this.clips[i]) {
              this.clips[i].stop();
            }
          }
        }

        playOneShot(clipIndex, vol = 1.0) {
          if (this.clips[clipIndex]) {
            this.clips[clipIndex].playOneShot(vol);
          }
        }

        play(clipIndex, loop = false, vol = 1.0) {
          if (this.clips[clipIndex]) {
            if (loop == true) {
              this.clips[clipIndex].setVolume(vol);
              this.clips[clipIndex].setLoop(loop);
              this.clips[clipIndex].play();
            } else {
              this.clips[clipIndex].playOneShot(vol);
            }
          }
        }

        getPlayState(clipIndex) {
          if (this.clips[clipIndex]) {
            return this.clips[clipIndex].state;
          }

          return null;
        }

        stop(clipIndex) {
          if (this.clips[clipIndex] && this.clips[clipIndex].state == AudioClip.PlayingState.PLAYING) {
            this.clips[clipIndex].stop();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioCtrl.js.map