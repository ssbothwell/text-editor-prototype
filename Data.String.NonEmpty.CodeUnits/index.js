// Generated by purs version 0.14.1
"use strict";
var Data_Array_NonEmpty = require("../Data.Array.NonEmpty/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_String_NonEmpty_Internal = require("../Data.String.NonEmpty.Internal/index.js");
var Data_String_Unsafe = require("../Data.String.Unsafe/index.js");
var toNonEmptyString = Data_String_NonEmpty_Internal.NonEmptyString;
var snoc = function (c) {
    return function (s) {
        return toNonEmptyString(s + Data_String_CodeUnits.singleton(c));
    };
};
var singleton = function ($18) {
    return toNonEmptyString(Data_String_CodeUnits.singleton($18));
};
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};
var takeWhile = function (f) {
    var $19 = liftS(Data_String_CodeUnits.takeWhile(f));
    return function ($20) {
        return Data_String_NonEmpty_Internal.fromString($19($20));
    };
};
var lastIndexOf$prime = function (pat) {
    var $21 = Data_String_CodeUnits["lastIndexOf'"](pat);
    return function ($22) {
        return liftS($21($22));
    };
};
var lastIndexOf = function ($23) {
    return liftS(Data_String_CodeUnits.lastIndexOf($23));
};
var indexOf$prime = function (pat) {
    var $24 = Data_String_CodeUnits["indexOf'"](pat);
    return function ($25) {
        return liftS($24($25));
    };
};
var indexOf = function ($26) {
    return liftS(Data_String_CodeUnits.indexOf($26));
};
var fromNonEmptyString = function (v) {
    return v;
};
var length = function ($27) {
    return Data_String_CodeUnits.length(fromNonEmptyString($27));
};
var splitAt = function (i) {
    return function (nes) {
        var v = Data_String_CodeUnits.splitAt(i)(fromNonEmptyString(nes));
        return {
            before: Data_String_NonEmpty_Internal.fromString(v.before),
            after: Data_String_NonEmpty_Internal.fromString(v.after)
        };
    };
};
var take = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $13 = i < 1;
        if ($13) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.take(i)(s)));
    };
};
var takeRight = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $14 = i < 1;
        if ($14) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.takeRight(i)(s)));
    };
};
var toChar = function ($28) {
    return Data_String_CodeUnits.toChar(fromNonEmptyString($28));
};
var toCharArray = function ($29) {
    return Data_String_CodeUnits.toCharArray(fromNonEmptyString($29));
};
var toNonEmptyCharArray = (function () {
    var $30 = Data_Maybe.fromJust();
    return function ($31) {
        return $30(Data_Array_NonEmpty.fromArray(toCharArray($31)));
    };
})();
var uncons = function (nes) {
    var s = fromNonEmptyString(nes);
    return {
        head: Data_String_Unsafe.charAt(0)(s),
        tail: Data_String_NonEmpty_Internal.fromString(Data_String_CodeUnits.drop(1)(s))
    };
};
var fromFoldable1 = function (dictFoldable1) {
    var $32 = Data_Semigroup_Foldable.fold1(dictFoldable1)(Data_String_NonEmpty_Internal.semigroupNonEmptyString);
    return function ($33) {
        return $32($33);
    };
};
var fromCharArray = function (v) {
    if (v.length === 0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.fromCharArray(v)));
};
var fromNonEmptyCharArray = (function () {
    var $34 = Data_Maybe.fromJust();
    return function ($35) {
        return $34(fromCharArray(Data_Array_NonEmpty.toArray($35)));
    };
})();
var dropWhile = function (f) {
    var $36 = liftS(Data_String_CodeUnits.dropWhile(f));
    return function ($37) {
        return Data_String_NonEmpty_Internal.fromString($36($37));
    };
};
var dropRight = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $16 = i >= Data_String_CodeUnits.length(s);
        if ($16) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.dropRight(i)(s)));
    };
};
var drop = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $17 = i >= Data_String_CodeUnits.length(s);
        if ($17) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.drop(i)(s)));
    };
};
var countPrefix = function ($38) {
    return liftS(Data_String_CodeUnits.countPrefix($38));
};
var cons = function (c) {
    return function (s) {
        return toNonEmptyString(Data_String_CodeUnits.singleton(c) + s);
    };
};
var charAt = function ($39) {
    return liftS(Data_String_CodeUnits.charAt($39));
};
module.exports = {
    fromCharArray: fromCharArray,
    fromNonEmptyCharArray: fromNonEmptyCharArray,
    singleton: singleton,
    cons: cons,
    snoc: snoc,
    fromFoldable1: fromFoldable1,
    toCharArray: toCharArray,
    toNonEmptyCharArray: toNonEmptyCharArray,
    charAt: charAt,
    toChar: toChar,
    indexOf: indexOf,
    "indexOf'": indexOf$prime,
    lastIndexOf: lastIndexOf,
    "lastIndexOf'": lastIndexOf$prime,
    uncons: uncons,
    length: length,
    take: take,
    takeRight: takeRight,
    takeWhile: takeWhile,
    drop: drop,
    dropRight: dropRight,
    dropWhile: dropWhile,
    countPrefix: countPrefix,
    splitAt: splitAt
};
