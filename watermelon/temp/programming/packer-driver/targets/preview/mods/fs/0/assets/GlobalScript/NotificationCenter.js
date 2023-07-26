System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assert, _crd, NCKeys, NotificationCenter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assert = _cc.assert;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "baaebUWpgBMg4v3EjitER5R", "NotificationCenter", undefined);

      //一个全局的通知中心
      _export("NCKeys", NCKeys = {
        IS_MUSIC_ON_CHANGED: 'IS_MUSIC_ON_CHANGED',
        //
        EVENT_HIDE: 'EVENT_HIDE',
        EVENT_SHOW: 'EVENT_SHOW',
        MERGE_NEW_FRUIT: 'MERGE_NEW_FRUIT',
        RESET_GAME: 'RESET_GAME',
        REBORN_GAME: 'REBORN_GAME',
        REFRESH_CUR_FRUIT: 'REFRESH_CUR_FRUIT'
      });

      _export("NotificationCenter", NotificationCenter = {
        _observers: {},
        addObserver: function addObserver(key, fun, target) {
          assert(key != null, 'key  cant be null');
          assert(fun != null, 'fun  cant be null');
          assert(target != null, 'target  cant be null');
          if (this._observers[key] == null) this._observers[key] = [];

          this._observers[key].push({
            fun: fun,
            target: target
          });
        },
        removeObserver: function removeObserver(key, target) {
          if (target == null) assert(false, 'target must not be null');
          if (this._observers[key] == null) return;
          this._observers[key] = this._observers[key].filter(function (item) {
            return item.target != target;
          });
        },
        postNotice: function postNotice(key, data) {
          if (this._observers[key] == null) return;

          this._observers[key].forEach(function (item) {
            item.fun.call(item.target, data);
          });
        }
      }); // window.NotificationCenter = NotificationCenter;
      // window.NCKeys = NCKeys;
      // export {NotificationCenter, NCKeys};


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NotificationCenter.js.map