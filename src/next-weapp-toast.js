(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');
  var DEFAULT_OPTIONS = {
    icon: 'none'
  };

  var NxWeappToast = nx.declare('nx.WeappToast', {
    statics: {
      present: function(inOptions) {
        return new Promise(function(resolve, reject) {
          var options = nx.mix(nxWxPromisify(resolve, reject), DEFAULT_OPTIONS, inOptions);
          wx.showToast(options);
        });
      },
      dismiss: function() {
        return new Promise(function(resolve, reject) {
          var options = nx.mix(nxWxPromisify(resolve, reject), inOptions);
          wx.hideToast(options);
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappToast;
  }
})();
