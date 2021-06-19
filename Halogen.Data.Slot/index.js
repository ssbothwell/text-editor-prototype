// Generated by purs version 0.14.1
"use strict";
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid_Alternate = require("../Data.Monoid.Alternate/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Halogen_Data_OrdBox = require("../Halogen.Data.OrdBox/index.js");
var SlotStorage = function (x) {
    return x;
};
var slots = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (sym) {
                return function (v) {
                    var key = Data_Symbol.reflectSymbol(dictIsSymbol)(sym);
                    var go = function (v1) {
                        return function (val) {
                            if (key === v1.value0) {
                                return Data_Monoid_Alternate.Alternate(Data_Map_Internal.singleton(Halogen_Data_OrdBox.unOrdBox(v1.value1))(val));
                            };
                            if (Data_Boolean.otherwise) {
                                return Data_Map_Internal.empty;
                            };
                            throw new Error("Failed pattern match at Halogen.Data.Slot (line 121, column 3 - line 123, column 38): " + [ v1.constructor.name, val.constructor.name ]);
                        };
                    };
                    return Data_Newtype.un()(Data_Monoid_Alternate.Alternate)(Data_Map_Internal.foldSubmap(Data_Tuple.ordTuple(Data_Ord.ordString)(Halogen_Data_OrdBox.ordOrdBox))(Data_Monoid_Alternate.monoidAlternate(Data_Map_Internal.plusMap(dictOrd)))(Data_Maybe.Nothing.value)(Data_Maybe.Nothing.value)(go)(v));
                };
            };
        };
    };
};
var pop = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (sym) {
                return function (key) {
                    return function (v) {
                        return Data_Map_Internal.pop(Data_Tuple.ordTuple(Data_Ord.ordString)(Halogen_Data_OrdBox.ordOrdBox))(new Data_Tuple.Tuple(Data_Symbol.reflectSymbol(dictIsSymbol)(sym), Halogen_Data_OrdBox.mkOrdBox(dictOrd)(key)))(v);
                    };
                };
            };
        };
    };
};
var lookup = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (sym) {
                return function (key) {
                    return function (v) {
                        return Data_Map_Internal.lookup(Data_Tuple.ordTuple(Data_Ord.ordString)(Halogen_Data_OrdBox.ordOrdBox))(new Data_Tuple.Tuple(Data_Symbol.reflectSymbol(dictIsSymbol)(sym), Halogen_Data_OrdBox.mkOrdBox(dictOrd)(key)))(v);
                    };
                };
            };
        };
    };
};
var insert = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (sym) {
                return function (key) {
                    return function (val) {
                        return function (v) {
                            return Data_Map_Internal.insert(Data_Tuple.ordTuple(Data_Ord.ordString)(Halogen_Data_OrdBox.ordOrdBox))(new Data_Tuple.Tuple(Data_Symbol.reflectSymbol(dictIsSymbol)(sym), Halogen_Data_OrdBox.mkOrdBox(dictOrd)(key)))(val)(v);
                        };
                    };
                };
            };
        };
    };
};
var foreachSlot = function (dictApplicative) {
    return function (v) {
        return function (k) {
            return Data_Foldable.traverse_(dictApplicative)(Data_Map_Internal.foldableMap)(function ($37) {
                return k($37);
            })(v);
        };
    };
};
var empty = Data_Map_Internal.empty;
module.exports = {
    empty: empty,
    lookup: lookup,
    insert: insert,
    pop: pop,
    slots: slots,
    foreachSlot: foreachSlot
};
