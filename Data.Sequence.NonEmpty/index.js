// Generated by purs version 0.14.1
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Sequence = require("../Data.Sequence/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Seq = (function () {
    function Seq(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Seq.create = function (value0) {
        return function (value1) {
            return new Seq(value0, value1);
        };
    };
    return Seq;
})();
var unsnoc = function (v) {
    var v1 = Data_Sequence.unsnoc(v.value1);
    if (v1 instanceof Data_Maybe.Nothing) {
        return new Data_Tuple.Tuple(Data_Sequence.empty, v.value0);
    };
    if (v1 instanceof Data_Maybe.Just) {
        return new Data_Tuple.Tuple(Data_Sequence.cons(v.value0)(v1.value0.value0), v1.value0.value1);
    };
    throw new Error("Failed pattern match at Data.Sequence.NonEmpty (line 99, column 3 - line 101, column 47): " + [ v1.constructor.name ]);
};
var uncons = function (v) {
    return new Data_Tuple.Tuple(v.value0, v.value1);
};
var toUnfoldable1 = function (dictFunctor) {
    return function (dictUnfoldable1) {
        var unconsMaybe = function (v) {
            var v1 = Data_Sequence.uncons(v.value1);
            if (v1 instanceof Data_Maybe.Just) {
                return new Data_Tuple.Tuple(v.value0, new Data_Maybe.Just(new Seq(v1.value0.value0, v1.value0.value1)));
            };
            if (v1 instanceof Data_Maybe.Nothing) {
                return new Data_Tuple.Tuple(v.value0, Data_Maybe.Nothing.value);
            };
            throw new Error("Failed pattern match at Data.Sequence.NonEmpty (line 179, column 5 - line 183, column 24): " + [ v1.constructor.name ]);
        };
        return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(unconsMaybe);
    };
};
var toPlain = function (v) {
    return Data_Sequence.cons(v.value0)(v.value1);
};
var toUnfoldable = function (dictFunctor) {
    return function (dictUnfoldable) {
        var $152 = Data_Sequence.toUnfoldable(dictFunctor)(dictUnfoldable);
        return function ($153) {
            return $152(toPlain($153));
        };
    };
};
var take = function (i) {
    var $154 = Data_Sequence.take(i);
    return function ($155) {
        return $154(toPlain($155));
    };
};
var tail = function (v) {
    return v.value1;
};
var splitAt = function (i) {
    var $156 = Data_Sequence.splitAt(i);
    return function ($157) {
        return $156(toPlain($157));
    };
};
var snoc = function (v) {
    return function (y) {
        return new Seq(v.value0, Data_Sequence.snoc(v.value1)(y));
    };
};
var singleton = function (x) {
    return new Seq(x, Data_Sequence.empty);
};
var showSeq = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Seq " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(Data_Sequence.showSeq(dictShow))(v.value1) + ")")));
    });
};
var semigroupSeq = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        return new Seq(v.value0, Data_Semigroup.append(Data_Sequence.semigroupSeq)(Data_Sequence.snoc(v.value1)(v1.value0))(v1.value1));
    };
});
var length = function (v) {
    return Data_Sequence.length(v.value1) + 1 | 0;
};
var last = function (v) {
    return Data_Maybe.maybe(v.value0)(Control_Category.identity(Control_Category.categoryFn))(Data_Sequence.last(v.value1));
};
var init = function ($158) {
    return Data_Tuple.fst(unsnoc($158));
};
var index = function (v) {
    return function (v1) {
        if (v === 0) {
            return new Data_Maybe.Just(v1.value0);
        };
        return Data_Sequence.index(v - 1 | 0)(v1.value1);
    };
};
var inBounds = function (v) {
    return function (v1) {
        if (v === 0) {
            return true;
        };
        return Data_Sequence.inBounds(v - 1 | 0)(v1.value1);
    };
};
var head = function (v) {
    return v.value0;
};
var functorSeq = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new Seq(f(v.value0), Data_Functor.map(Data_Sequence.functorSeq)(f)(v.value1));
    };
});
var fromPlain = function (dictPartial) {
    var $159 = Data_Tuple.uncurry(Seq.create);
    var $160 = Data_Maybe.fromJust();
    return function ($161) {
        return $159($160(Data_Sequence.uncons($161)));
    };
};
var unfoldable1Seq = new Data_Unfoldable1.Unfoldable1(function (f) {
    return function (source) {
        return fromPlain()(Data_Unfoldable1.unfoldr1(Data_Sequence.unfoldable1Seq)(f)(source));
    };
});
var fromFoldable1 = function (dictFoldable1) {
    return Data_Semigroup_Foldable.foldMap1(dictFoldable1)(semigroupSeq)(singleton);
};
var foldableSeq = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        var $162 = Data_Foldable.foldMap(Data_Sequence.foldableSeq)(dictMonoid)(f);
        return function ($163) {
            return $162(toPlain($163));
        };
    };
}, function (f) {
    return function (z) {
        var $164 = Data_Foldable.foldl(Data_Sequence.foldableSeq)(f)(z);
        return function ($165) {
            return $164(toPlain($165));
        };
    };
}, function (f) {
    return function (z) {
        var $166 = Data_Foldable.foldr(Data_Sequence.foldableSeq)(f)(z);
        return function ($167) {
            return $166(toPlain($167));
        };
    };
});
var traversableSeq = new Data_Traversable.Traversable(function () {
    return foldableSeq;
}, function () {
    return functorSeq;
}, function (dictApplicative) {
    var $168 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(fromPlain());
    var $169 = Data_Traversable.sequence(Data_Sequence.traversableSeq)(dictApplicative);
    return function ($170) {
        return $168($169(toPlain($170)));
    };
}, function (dictApplicative) {
    return function (f) {
        var $171 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(fromPlain());
        var $172 = Data_Traversable.traverse(Data_Sequence.traversableSeq)(dictApplicative)(f);
        return function ($173) {
            return $171($172(toPlain($173)));
        };
    };
});
var foldable1Seq = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableSeq;
}, function (dictSemigroup) {
    return function (f) {
        return function (v) {
            return Data_Foldable.foldl(Data_Sequence.foldableSeq)(function (acc) {
                return function (y) {
                    return Data_Semigroup.append(dictSemigroup)(acc)(f(y));
                };
            })(f(v.value0))(v.value1);
        };
    };
}, function (f) {
    return function (v) {
        return Data_Foldable.foldl(Data_Sequence.foldableSeq)(f)(v.value0)(v.value1);
    };
}, function (f) {
    return function (v) {
        return Data_Foldable.foldr(Data_Sequence.foldableSeq)(f)(v.value0)(v.value1);
    };
});
var filter = function (p) {
    var $174 = Data_Sequence.filter(p);
    return function ($175) {
        return $174(toPlain($175));
    };
};
var eqSeq = function (dictEq) {
    return new Data_Eq.Eq(function (v) {
        return function (v1) {
            return Data_Eq.eq(dictEq)(v.value0)(v1.value0) && Data_Eq.eq(Data_Sequence.eqSeq(dictEq))(v.value1)(v1.value1);
        };
    });
};
var ordSeq = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqSeq(dictOrd.Eq0());
    }, function (v) {
        return function (v1) {
            var v2 = Data_Ord.compare(dictOrd)(v.value0)(v1.value0);
            if (v2 instanceof Data_Ordering.EQ) {
                return Data_Ord.compare(Data_Sequence.ordSeq(dictOrd))(v.value1)(v1.value1);
            };
            return v2;
        };
    });
};
var drop = function (i) {
    var $176 = Data_Sequence.drop(i);
    return function ($177) {
        return $176(toPlain($177));
    };
};
var cons = function (x) {
    return function (v) {
        return new Seq(x, Data_Sequence.cons(v.value0)(v.value1));
    };
};
var applySeq = new Control_Apply.Apply(function () {
    return functorSeq;
}, function (fs) {
    return function (xs) {
        return fromPlain()(Control_Apply.apply(Data_Sequence.applySeq)(toPlain(fs))(toPlain(xs)));
    };
});
var bindSeq = new Control_Bind.Bind(function () {
    return applySeq;
}, function (xs) {
    return function (f) {
        return fromPlain()(Control_Bind.bind(Data_Sequence.bindSeq)(toPlain(xs))(function ($178) {
            return toPlain(f($178));
        }));
    };
});
var applicativeSeq = new Control_Applicative.Applicative(function () {
    return applySeq;
}, function (x) {
    return new Seq(x, Data_Sequence.empty);
});
var monadSeq = new Control_Monad.Monad(function () {
    return applicativeSeq;
}, function () {
    return bindSeq;
});
var append = function (v) {
    return function (v1) {
        return new Seq(v.value0, Data_Semigroup.append(Data_Sequence.semigroupSeq)(Data_Sequence.snoc(v.value1)(v1.value0))(v1.value1));
    };
};
var altSeq = new Control_Alt.Alt(function () {
    return functorSeq;
}, Data_Semigroup.append(semigroupSeq));
var adjust = function (f) {
    return function (v) {
        return function (v1) {
            if (v === 0) {
                return new Seq(f(v1.value0), v1.value1);
            };
            return new Seq(v1.value0, Data_Sequence.adjust(f)(v - 1 | 0)(v1.value1));
        };
    };
};
var replace = function (x) {
    return adjust(Data_Function["const"](x));
};
module.exports = {
    Seq: Seq,
    singleton: singleton,
    cons: cons,
    snoc: snoc,
    append: append,
    fromFoldable1: fromFoldable1,
    length: length,
    inBounds: inBounds,
    uncons: uncons,
    unsnoc: unsnoc,
    head: head,
    tail: tail,
    init: init,
    last: last,
    toUnfoldable: toUnfoldable,
    toUnfoldable1: toUnfoldable1,
    toPlain: toPlain,
    splitAt: splitAt,
    take: take,
    drop: drop,
    filter: filter,
    index: index,
    adjust: adjust,
    replace: replace,
    showSeq: showSeq,
    eqSeq: eqSeq,
    ordSeq: ordSeq,
    functorSeq: functorSeq,
    applySeq: applySeq,
    applicativeSeq: applicativeSeq,
    bindSeq: bindSeq,
    monadSeq: monadSeq,
    semigroupSeq: semigroupSeq,
    altSeq: altSeq,
    foldableSeq: foldableSeq,
    foldable1Seq: foldable1Seq,
    traversableSeq: traversableSeq,
    unfoldable1Seq: unfoldable1Seq
};
