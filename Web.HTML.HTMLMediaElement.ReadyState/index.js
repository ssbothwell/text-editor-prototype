// Generated by purs version 0.14.1
"use strict";
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var HaveNothing = (function () {
    function HaveNothing() {

    };
    HaveNothing.value = new HaveNothing();
    return HaveNothing;
})();
var HaveMetadata = (function () {
    function HaveMetadata() {

    };
    HaveMetadata.value = new HaveMetadata();
    return HaveMetadata;
})();
var HaveCurrentData = (function () {
    function HaveCurrentData() {

    };
    HaveCurrentData.value = new HaveCurrentData();
    return HaveCurrentData;
})();
var HaveFutureData = (function () {
    function HaveFutureData() {

    };
    HaveFutureData.value = new HaveFutureData();
    return HaveFutureData;
})();
var HaveEnoughData = (function () {
    function HaveEnoughData() {

    };
    HaveEnoughData.value = new HaveEnoughData();
    return HaveEnoughData;
})();
var toEnumReadyState = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(HaveNothing.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(HaveMetadata.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(HaveCurrentData.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(HaveFutureData.value);
    };
    if (v === 4) {
        return new Data_Maybe.Just(HaveEnoughData.value);
    };
    return Data_Maybe.Nothing.value;
};
var showReadyState = new Data_Show.Show(function (v) {
    if (v instanceof HaveNothing) {
        return "HaveNothing";
    };
    if (v instanceof HaveMetadata) {
        return "HaveMetadata";
    };
    if (v instanceof HaveCurrentData) {
        return "HaveCurrentData";
    };
    if (v instanceof HaveFutureData) {
        return "HaveFutureData";
    };
    if (v instanceof HaveEnoughData) {
        return "HaveEnoughData";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.ReadyState (line 30, column 1 - line 35, column 41): " + [ v.constructor.name ]);
});
var fromEnumReadyState = function (v) {
    if (v instanceof HaveNothing) {
        return 0;
    };
    if (v instanceof HaveMetadata) {
        return 1;
    };
    if (v instanceof HaveCurrentData) {
        return 2;
    };
    if (v instanceof HaveFutureData) {
        return 3;
    };
    if (v instanceof HaveEnoughData) {
        return 4;
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.ReadyState (line 49, column 3 - line 54, column 24): " + [ v.constructor.name ]);
};
var eqReadyState = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof HaveNothing && y instanceof HaveNothing) {
            return true;
        };
        if (x instanceof HaveMetadata && y instanceof HaveMetadata) {
            return true;
        };
        if (x instanceof HaveCurrentData && y instanceof HaveCurrentData) {
            return true;
        };
        if (x instanceof HaveFutureData && y instanceof HaveFutureData) {
            return true;
        };
        if (x instanceof HaveEnoughData && y instanceof HaveEnoughData) {
            return true;
        };
        return false;
    };
});
var ordReadyState = new Data_Ord.Ord(function () {
    return eqReadyState;
}, function (x) {
    return function (y) {
        if (x instanceof HaveNothing && y instanceof HaveNothing) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof HaveNothing) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof HaveNothing) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof HaveMetadata && y instanceof HaveMetadata) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof HaveMetadata) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof HaveMetadata) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof HaveCurrentData && y instanceof HaveCurrentData) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof HaveCurrentData) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof HaveCurrentData) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof HaveFutureData && y instanceof HaveFutureData) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof HaveFutureData) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof HaveFutureData) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof HaveEnoughData && y instanceof HaveEnoughData) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.ReadyState (line 15, column 1 - line 15, column 48): " + [ x.constructor.name, y.constructor.name ]);
    };
});
var enumReadyState = new Data_Enum.Enum(function () {
    return ordReadyState;
}, Data_Enum.defaultPred(toEnumReadyState)(fromEnumReadyState), Data_Enum.defaultSucc(toEnumReadyState)(fromEnumReadyState));
var boundedReadyState = new Data_Bounded.Bounded(function () {
    return ordReadyState;
}, HaveNothing.value, HaveEnoughData.value);
var boundedEnumReadyState = new Data_Enum.BoundedEnum(function () {
    return boundedReadyState;
}, function () {
    return enumReadyState;
}, 5, fromEnumReadyState, toEnumReadyState);
module.exports = {
    HaveNothing: HaveNothing,
    HaveMetadata: HaveMetadata,
    HaveCurrentData: HaveCurrentData,
    HaveFutureData: HaveFutureData,
    HaveEnoughData: HaveEnoughData,
    eqReadyState: eqReadyState,
    ordReadyState: ordReadyState,
    boundedReadyState: boundedReadyState,
    enumReadyState: enumReadyState,
    boundedEnumReadyState: boundedEnumReadyState,
    showReadyState: showReadyState
};
