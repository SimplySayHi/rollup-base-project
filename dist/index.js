/* Rollup Base Project v1.0.0 | Valerio Di Punzio (@SimplySayHi) | https://github.com/SimplySayHi/rollup-base-project | https://github.com/SimplySayHi/rollup-base-project | MIT license */
!function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : (global = global || self).RollupTest = factory();
}(this, (function() {
    "use strict";
    return function RollupTest(num, str) {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, RollupTest), console.log("RollupTest..."), this.number = function(num) {
            return 2 * num;
        }(num), this.string = function(str) {
            return "Hello ".concat(str, ". This is a test.");
        }(str);
    };
}));
