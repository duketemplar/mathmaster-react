export default function createPromiseHelper() {
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers(0, 'setTimeout', 'clearTimeout',
      'setInterval', 'clearInterval', 'Date', 'setImmediate');
  });

  afterEach(function() {
    clock.restore();
  });

  return {
    settle: function(promise) {
      var result = {
        success: false,
        failed: false,
        value: undefined,
      };

      promise.then(function success(value) {
        result.success = true;
        result.successValue = value;
      }, function fail(failValue) {
        result.failed = true;
        result.failedValue = failValue;
      }

      );

      clock.tick(1000);
      return result;
    }
  }
}
