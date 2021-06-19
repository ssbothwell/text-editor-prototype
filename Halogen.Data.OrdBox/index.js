// Generated by purs version 0.14.1
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var OrdBox = (function () {
    function OrdBox(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    OrdBox.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new OrdBox(value0, value1, value2);
            };
        };
    };
    return OrdBox;
})();
var unOrdBox = function (v) {
    return v.value2;
};
var mkOrdBox = function (dictOrd) {
    return OrdBox.create(Data_Eq.eq(dictOrd.Eq0()))(Data_Ord.compare(dictOrd));
};
var eqOrdBox = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return v.value0(v.value2)(v1.value2);
    };
});
var ordOrdBox = new Data_Ord.Ord(function () {
    return eqOrdBox;
}, function (v) {
    return function (v1) {
        return v.value1(v.value2)(v1.value2);
    };
});
module.exports = {
    mkOrdBox: mkOrdBox,
    unOrdBox: unOrdBox,
    eqOrdBox: eqOrdBox,
    ordOrdBox: ordOrdBox
};
