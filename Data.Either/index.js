// Generated by purs version 0.14.1
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_Generic_Rep = require("../Data.Generic.Rep/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Left = (function () {
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    return Left;
})();
var Right = (function () {
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    return Right;
})();
var showEither = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            if (v instanceof Left) {
                return "(Left " + (Data_Show.show(dictShow)(v.value0) + ")");
            };
            if (v instanceof Right) {
                return "(Right " + (Data_Show.show(dictShow1)(v.value0) + ")");
            };
            throw new Error("Failed pattern match at Data.Either (line 173, column 1 - line 175, column 46): " + [ v.constructor.name ]);
        });
    };
};
var note$prime = function (f) {
    return Data_Maybe["maybe'"](function ($105) {
        return Left.create(f($105));
    })(Right.create);
};
var note = function (a) {
    return Data_Maybe.maybe(new Left(a))(Right.create);
};
var genericEither = new Data_Generic_Rep.Generic(function (x) {
    if (x instanceof Left) {
        return new Data_Generic_Rep.Inl(x.value0);
    };
    if (x instanceof Right) {
        return new Data_Generic_Rep.Inr(x.value0);
    };
    throw new Error("Failed pattern match at Data.Either (line 33, column 1 - line 33, column 56): " + [ x.constructor.name ]);
}, function (x) {
    if (x instanceof Data_Generic_Rep.Inl) {
        return new Left(x.value0);
    };
    if (x instanceof Data_Generic_Rep.Inr) {
        return new Right(x.value0);
    };
    throw new Error("Failed pattern match at Data.Either (line 33, column 1 - line 33, column 56): " + [ x.constructor.name ]);
});
var functorEither = new Data_Functor.Functor(function (f) {
    return function (m) {
        if (m instanceof Left) {
            return new Left(m.value0);
        };
        if (m instanceof Right) {
            return new Right(f(m.value0));
        };
        throw new Error("Failed pattern match at Data.Either (line 31, column 1 - line 31, column 52): " + [ m.constructor.name ]);
    };
});
var invariantEither = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorEither));
var fromRight$prime = function (v) {
    return function (v1) {
        if (v1 instanceof Right) {
            return v1.value0;
        };
        return v(Data_Unit.unit);
    };
};
var fromRight = function (v) {
    return function (v1) {
        if (v1 instanceof Right) {
            return v1.value0;
        };
        return v;
    };
};
var fromLeft$prime = function (v) {
    return function (v1) {
        if (v1 instanceof Left) {
            return v1.value0;
        };
        return v(Data_Unit.unit);
    };
};
var fromLeft = function (v) {
    return function (v1) {
        if (v1 instanceof Left) {
            return v1.value0;
        };
        return v;
    };
};
var extendEither = new Control_Extend.Extend(function () {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Left) {
            return new Left(v1.value0);
        };
        return new Right(v(v1));
    };
});
var eqEither = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                if (x instanceof Left && y instanceof Left) {
                    return Data_Eq.eq(dictEq)(x.value0)(y.value0);
                };
                if (x instanceof Right && y instanceof Right) {
                    return Data_Eq.eq(dictEq1)(x.value0)(y.value0);
                };
                return false;
            };
        });
    };
};
var ordEither = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqEither(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                if (x instanceof Left && y instanceof Left) {
                    return Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                };
                if (x instanceof Left) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof Left) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof Right && y instanceof Right) {
                    return Data_Ord.compare(dictOrd1)(x.value0)(y.value0);
                };
                throw new Error("Failed pattern match at Data.Either (line 189, column 1 - line 189, column 64): " + [ x.constructor.name, y.constructor.name ]);
            };
        });
    };
};
var eq1Either = function (dictEq) {
    return new Data_Eq.Eq1(function (dictEq1) {
        return Data_Eq.eq(eqEither(dictEq)(dictEq1));
    });
};
var ord1Either = function (dictOrd) {
    return new Data_Ord.Ord1(function () {
        return eq1Either(dictOrd.Eq0());
    }, function (dictOrd1) {
        return Data_Ord.compare(ordEither(dictOrd)(dictOrd1));
    });
};
var either = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Left) {
                return v(v2.value0);
            };
            if (v2 instanceof Right) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var hush = either(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create);
var isLeft = either(Data_Function["const"](true))(Data_Function["const"](false));
var isRight = either(Data_Function["const"](false))(Data_Function["const"](true));
var choose = function (dictAlt) {
    return function (a) {
        return function (b) {
            return Control_Alt.alt(dictAlt)(Data_Functor.map(dictAlt.Functor0())(Left.create)(a))(Data_Functor.map(dictAlt.Functor0())(Right.create)(b));
        };
    };
};
var boundedEither = function (dictBounded) {
    return function (dictBounded1) {
        return new Data_Bounded.Bounded(function () {
            return ordEither(dictBounded.Ord0())(dictBounded1.Ord0());
        }, new Left(Data_Bounded.bottom(dictBounded)), new Right(Data_Bounded.top(dictBounded1)));
    };
};
var applyEither = new Control_Apply.Apply(function () {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v instanceof Left) {
            return new Left(v.value0);
        };
        if (v instanceof Right) {
            return Data_Functor.map(functorEither)(v.value0)(v1);
        };
        throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var bindEither = new Control_Bind.Bind(function () {
    return applyEither;
}, either(function (e) {
    return function (v) {
        return new Left(e);
    };
})(function (a) {
    return function (f) {
        return f(a);
    };
}));
var semigroupEither = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (x) {
        return function (y) {
            return Control_Apply.apply(applyEither)(Data_Functor.map(functorEither)(Data_Semigroup.append(dictSemigroup))(x))(y);
        };
    });
};
var applicativeEither = new Control_Applicative.Applicative(function () {
    return applyEither;
}, Right.create);
var monadEither = new Control_Monad.Monad(function () {
    return applicativeEither;
}, function () {
    return bindEither;
});
var altEither = new Control_Alt.Alt(function () {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v instanceof Left) {
            return v1;
        };
        return v;
    };
});
module.exports = {
    Left: Left,
    Right: Right,
    either: either,
    choose: choose,
    isLeft: isLeft,
    isRight: isRight,
    fromLeft: fromLeft,
    "fromLeft'": fromLeft$prime,
    fromRight: fromRight,
    "fromRight'": fromRight$prime,
    note: note,
    "note'": note$prime,
    hush: hush,
    functorEither: functorEither,
    genericEither: genericEither,
    invariantEither: invariantEither,
    applyEither: applyEither,
    applicativeEither: applicativeEither,
    altEither: altEither,
    bindEither: bindEither,
    monadEither: monadEither,
    extendEither: extendEither,
    showEither: showEither,
    eqEither: eqEither,
    eq1Either: eq1Either,
    ordEither: ordEither,
    ord1Either: ord1Either,
    boundedEither: boundedEither,
    semigroupEither: semigroupEither
};
