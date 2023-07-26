System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./AudioCtrl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioCtrl, find, log, _crd, AudioHelper;

  function _reportPossibleCrUseOfAudioCtrl(extras) {
    _reporterNs.report("AudioCtrl", "./AudioCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      log = _cc.log;
    }, function (_AudioCtrl) {
      AudioCtrl = _AudioCtrl.AudioCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7d38sz2xJM05GuvEBNTzg7", "AudioHelper", undefined);

      // import { PlatformNotify } from "../resources/Platform/PlatformNotify";
      // import { PlatformJudge } from "../resources/Platform/PlatformJudge";
      //特殊针对了，魅族，微信，和QQ,字节
      _export("AudioHelper", AudioHelper = {
        _inited: false,

        init() {
          if (this._inited) return;
          this._inited = true; // PlatformNotify.addObserver(PlatformNotify.BGM_SWITCH, (val) => {
          //   if (val) {
          //     this.play('audio', CLIP.BGM, true);
          //   }
          //   else {
          //     this.stop('audio', CLIP.BGM);
          //   }
          // }, this);
        },

        innerAudios: {},

        // registered: false,
        // registerEvent() {
        //   if (this.registered)
        //     return;
        //   this.registered = true;
        //   NotificationCenter.addObserver(NCKeys.IS_MUSIC_ON_CHANGED, function (val) {
        //     if (val == false) {
        //       for (let key in this.innerAudios) {
        //         this.innerAudios[key].stop();
        //       }
        //     }
        //   }, this);
        // },
        play(nodeName, clipIndex, loop = false, vol = 1.0, newInstance = false) {
          // if (LocalData.isMusicOn == false)
          //   return;
          let node = find(nodeName);

          if (node == null) {
            return log('audioHelper node not found:' + nodeName);
          }

          let audioCtrl = node.getComponent(_crd && AudioCtrl === void 0 ? (_reportPossibleCrUseOfAudioCtrl({
            error: Error()
          }), AudioCtrl) : AudioCtrl);
          audioCtrl.play(clipIndex, loop, vol);
        },

        stop(nodeName, clipIndex) {
          let node = find(nodeName);

          if (node == null) {
            return log('audioHelper node not found:' + nodeName);
          }

          let audioCtrl = node.getComponent(_crd && AudioCtrl === void 0 ? (_reportPossibleCrUseOfAudioCtrl({
            error: Error()
          }), AudioCtrl) : AudioCtrl);
          audioCtrl.stop(clipIndex);
        },

        getPlayState(nodeName, clipIndex) {
          let node = find(nodeName);

          if (node == null) {
            return log('audioHelper node not found:' + nodeName);
          }

          let audioCtrl = node.getComponent(_crd && AudioCtrl === void 0 ? (_reportPossibleCrUseOfAudioCtrl({
            error: Error()
          }), AudioCtrl) : AudioCtrl);
          return audioCtrl.getPlayState(clipIndex);
        },

        getInnerAudioUrl(nodeName, clipIndex) {
          // if (nodeName == 'audio') {
          //   if (clipEnum == START_SCENE_CLIP) {
          //     return this.startSceneAudioNodeClipNames[clipIndex];
          //   }
          //   else {
          //     return this.gameSceneAudioNodeClipNames[clipIndex];
          //   }
          // }
          // else if (nodeName == 'gunAudio') {
          //   return this.gameSceneGunAudioNodeClipNames[clipIndex]
          // }
          return this.physicsSceneAudioNodeClipNames[clipIndex];
        },

        //开始场景audio Node上挂载的的音频的名字
        physicsSceneAudioNodeClipNames: ['res/audio/normal_button.mp3', 'res/audio/back_button.mp3', 'res/audio/bgm.mp3', 'res/audio/planet_complete.mp3'],

        needLoadAudioNode() {
          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioHelper.js.map