// Generated by purs version 0.14.1
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Cont_Class = require("../Control.Monad.Cont.Class/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_Monad_Writer_Class = require("../Control.Monad.Writer.Class/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var ExceptT = function (x) {
    return x;
};
var withExceptT = function (dictFunctor) {
    return function (f) {
        return function (v) {
            var mapLeft = function (v1) {
                return function (v2) {
                    if (v2 instanceof Data_Either.Right) {
                        return new Data_Either.Right(v2.value0);
                    };
                    if (v2 instanceof Data_Either.Left) {
                        return new Data_Either.Left(v1(v2.value0));
                    };
                    throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 43, column 3 - line 43, column 32): " + [ v1.constructor.name, v2.constructor.name ]);
                };
            };
            return ExceptT(Data_Functor.map(dictFunctor)(mapLeft(f))(v));
        };
    };
};
var runExceptT = function (v) {
    return v;
};
var newtypeExceptT = new Data_Newtype.Newtype(function () {
    return undefined;
});
var monadTransExceptT = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return function (m) {
        return Control_Bind.bind(dictMonad.Bind1())(m)(function (a) {
            return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Either.Right(a));
        });
    };
});
var mapExceptT = function (f) {
    return function (v) {
        return f(v);
    };
};
var functorExceptT = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return mapExceptT(Data_Functor.map(dictFunctor)(Data_Functor.map(Data_Either.functorEither)(f)));
    });
};
var except = function (dictApplicative) {
    var $89 = Control_Applicative.pure(dictApplicative);
    return function ($90) {
        return ExceptT($89($90));
    };
};
var monadExceptT = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeExceptT(dictMonad);
    }, function () {
        return bindExceptT(dictMonad);
    });
};
var bindExceptT = function (dictMonad) {
    return new Control_Bind.Bind(function () {
        return applyExceptT(dictMonad);
    }, function (v) {
        return function (k) {
            return Control_Bind.bind(dictMonad.Bind1())(v)(Data_Either.either((function () {
                var $91 = Control_Applicative.pure(dictMonad.Applicative0());
                return function ($92) {
                    return $91(Data_Either.Left.create($92));
                };
            })())(function (a) {
                var v1 = k(a);
                return v1;
            }));
        };
    });
};
var applyExceptT = function (dictMonad) {
    return new Control_Apply.Apply(function () {
        return functorExceptT(((dictMonad.Bind1()).Apply0()).Functor0());
    }, Control_Monad.ap(monadExceptT(dictMonad)));
};
var applicativeExceptT = function (dictMonad) {
    return new Control_Applicative.Applicative(function () {
        return applyExceptT(dictMonad);
    }, (function () {
        var $93 = Control_Applicative.pure(dictMonad.Applicative0());
        return function ($94) {
            return ExceptT($93(Data_Either.Right.create($94)));
        };
    })());
};
var semigroupExceptT = function (dictMonad) {
    return function (dictSemigroup) {
        return new Data_Semigroup.Semigroup(Control_Apply.lift2(applyExceptT(dictMonad))(Data_Semigroup.append(dictSemigroup)));
    };
};
var monadAskExceptT = function (dictMonadAsk) {
    return new Control_Monad_Reader_Class.MonadAsk(function () {
        return monadExceptT(dictMonadAsk.Monad0());
    }, Control_Monad_Trans_Class.lift(monadTransExceptT)(dictMonadAsk.Monad0())(Control_Monad_Reader_Class.ask(dictMonadAsk)));
};
var monadReaderExceptT = function (dictMonadReader) {
    return new Control_Monad_Reader_Class.MonadReader(function () {
        return monadAskExceptT(dictMonadReader.MonadAsk0());
    }, function (f) {
        return mapExceptT(Control_Monad_Reader_Class.local(dictMonadReader)(f));
    });
};
var monadContExceptT = function (dictMonadCont) {
    return new Control_Monad_Cont_Class.MonadCont(function () {
        return monadExceptT(dictMonadCont.Monad0());
    }, function (f) {
        return ExceptT(Control_Monad_Cont_Class.callCC(dictMonadCont)(function (c) {
            var v = f(function (a) {
                return ExceptT(c(new Data_Either.Right(a)));
            });
            return v;
        }));
    });
};
var monadEffectExceptT = function (dictMonadEffect) {
    return new Effect_Class.MonadEffect(function () {
        return monadExceptT(dictMonadEffect.Monad0());
    }, (function () {
        var $95 = Control_Monad_Trans_Class.lift(monadTransExceptT)(dictMonadEffect.Monad0());
        var $96 = Effect_Class.liftEffect(dictMonadEffect);
        return function ($97) {
            return $95($96($97));
        };
    })());
};
var monadRecExceptT = function (dictMonadRec) {
    return new Control_Monad_Rec_Class.MonadRec(function () {
        return monadExceptT(dictMonadRec.Monad0());
    }, function (f) {
        var $98 = Control_Monad_Rec_Class.tailRecM(dictMonadRec)(function (a) {
            var v = f(a);
            return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(v)(function (m$prime) {
                return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())((function () {
                    if (m$prime instanceof Data_Either.Left) {
                        return new Control_Monad_Rec_Class.Done(new Data_Either.Left(m$prime.value0));
                    };
                    if (m$prime instanceof Data_Either.Right && m$prime.value0 instanceof Control_Monad_Rec_Class.Loop) {
                        return new Control_Monad_Rec_Class.Loop(m$prime.value0.value0);
                    };
                    if (m$prime instanceof Data_Either.Right && m$prime.value0 instanceof Control_Monad_Rec_Class.Done) {
                        return new Control_Monad_Rec_Class.Done(new Data_Either.Right(m$prime.value0.value0));
                    };
                    throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 75, column 14 - line 78, column 43): " + [ m$prime.constructor.name ]);
                })());
            });
        });
        return function ($99) {
            return ExceptT($98($99));
        };
    });
};
var monadStateExceptT = function (dictMonadState) {
    return new Control_Monad_State_Class.MonadState(function () {
        return monadExceptT(dictMonadState.Monad0());
    }, function (f) {
        return Control_Monad_Trans_Class.lift(monadTransExceptT)(dictMonadState.Monad0())(Control_Monad_State_Class.state(dictMonadState)(f));
    });
};
var monadTellExceptT = function (dictMonadTell) {
    return new Control_Monad_Writer_Class.MonadTell(function () {
        return monadExceptT(dictMonadTell.Monad1());
    }, dictMonadTell.Semigroup0, (function () {
        var $100 = Control_Monad_Trans_Class.lift(monadTransExceptT)(dictMonadTell.Monad1());
        var $101 = Control_Monad_Writer_Class.tell(dictMonadTell);
        return function ($102) {
            return $100($101($102));
        };
    })());
};
var monadWriterExceptT = function (dictMonadWriter) {
    return new Control_Monad_Writer_Class.MonadWriter(function () {
        return monadTellExceptT(dictMonadWriter.MonadTell1());
    }, dictMonadWriter.Monoid0, mapExceptT(function (m) {
        return Control_Bind.bind(((dictMonadWriter.MonadTell1()).Monad1()).Bind1())(Control_Monad_Writer_Class.listen(dictMonadWriter)(m))(function (v) {
            return Control_Applicative.pure(((dictMonadWriter.MonadTell1()).Monad1()).Applicative0())(Data_Functor.map(Data_Either.functorEither)(function (r) {
                return new Data_Tuple.Tuple(r, v.value1);
            })(v.value0));
        });
    }), mapExceptT(function (m) {
        return Control_Monad_Writer_Class.pass(dictMonadWriter)(Control_Bind.bind(((dictMonadWriter.MonadTell1()).Monad1()).Bind1())(m)(function (a) {
            return Control_Applicative.pure(((dictMonadWriter.MonadTell1()).Monad1()).Applicative0())((function () {
                if (a instanceof Data_Either.Left) {
                    return new Data_Tuple.Tuple(new Data_Either.Left(a.value0), Control_Category.identity(Control_Category.categoryFn));
                };
                if (a instanceof Data_Either.Right) {
                    return new Data_Tuple.Tuple(new Data_Either.Right(a.value0.value0), a.value0.value1);
                };
                throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 137, column 10 - line 139, column 45): " + [ a.constructor.name ]);
            })());
        }));
    }));
};
var monadThrowExceptT = function (dictMonad) {
    return new Control_Monad_Error_Class.MonadThrow(function () {
        return monadExceptT(dictMonad);
    }, (function () {
        var $103 = Control_Applicative.pure(dictMonad.Applicative0());
        return function ($104) {
            return ExceptT($103(Data_Either.Left.create($104)));
        };
    })());
};
var monadErrorExceptT = function (dictMonad) {
    return new Control_Monad_Error_Class.MonadError(function () {
        return monadThrowExceptT(dictMonad);
    }, function (v) {
        return function (k) {
            return Control_Bind.bind(dictMonad.Bind1())(v)(Data_Either.either(function (a) {
                var v1 = k(a);
                return v1;
            })((function () {
                var $105 = Control_Applicative.pure(dictMonad.Applicative0());
                return function ($106) {
                    return $105(Data_Either.Right.create($106));
                };
            })()));
        };
    });
};
var monoidExceptT = function (dictMonad) {
    return function (dictMonoid) {
        return new Data_Monoid.Monoid(function () {
            return semigroupExceptT(dictMonad)(dictMonoid.Semigroup0());
        }, Control_Applicative.pure(applicativeExceptT(dictMonad))(Data_Monoid.mempty(dictMonoid)));
    };
};
var altExceptT = function (dictSemigroup) {
    return function (dictMonad) {
        return new Control_Alt.Alt(function () {
            return functorExceptT(((dictMonad.Bind1()).Apply0()).Functor0());
        }, function (v) {
            return function (v1) {
                return Control_Bind.bind(dictMonad.Bind1())(v)(function (rm) {
                    if (rm instanceof Data_Either.Right) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Either.Right(rm.value0));
                    };
                    if (rm instanceof Data_Either.Left) {
                        return Control_Bind.bind(dictMonad.Bind1())(v1)(function (rn) {
                            if (rn instanceof Data_Either.Right) {
                                return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Either.Right(rn.value0));
                            };
                            if (rn instanceof Data_Either.Left) {
                                return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Either.Left(Data_Semigroup.append(dictSemigroup)(rm.value0)(rn.value0)));
                            };
                            throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): " + [ rn.constructor.name ]);
                        });
                    };
                    throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): " + [ rm.constructor.name ]);
                });
            };
        });
    };
};
var plusExceptT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_Plus.Plus(function () {
            return altExceptT(dictMonoid.Semigroup0())(dictMonad);
        }, Control_Monad_Error_Class.throwError(monadThrowExceptT(dictMonad))(Data_Monoid.mempty(dictMonoid)));
    };
};
var alternativeExceptT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_Alternative.Alternative(function () {
            return applicativeExceptT(dictMonad);
        }, function () {
            return plusExceptT(dictMonoid)(dictMonad);
        });
    };
};
var monadPlusExceptT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_MonadPlus.MonadPlus(function () {
            return alternativeExceptT(dictMonoid)(dictMonad);
        }, function () {
            return monadExceptT(dictMonad);
        });
    };
};
var monadZeroExceptT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_MonadZero.MonadZero(function () {
            return alternativeExceptT(dictMonoid)(dictMonad);
        }, function () {
            return monadExceptT(dictMonad);
        }, function () {
            return undefined;
        });
    };
};
module.exports = {
    ExceptT: ExceptT,
    runExceptT: runExceptT,
    withExceptT: withExceptT,
    mapExceptT: mapExceptT,
    except: except,
    newtypeExceptT: newtypeExceptT,
    functorExceptT: functorExceptT,
    applyExceptT: applyExceptT,
    applicativeExceptT: applicativeExceptT,
    bindExceptT: bindExceptT,
    monadExceptT: monadExceptT,
    monadRecExceptT: monadRecExceptT,
    altExceptT: altExceptT,
    plusExceptT: plusExceptT,
    alternativeExceptT: alternativeExceptT,
    monadPlusExceptT: monadPlusExceptT,
    monadZeroExceptT: monadZeroExceptT,
    monadTransExceptT: monadTransExceptT,
    monadEffectExceptT: monadEffectExceptT,
    monadContExceptT: monadContExceptT,
    monadThrowExceptT: monadThrowExceptT,
    monadErrorExceptT: monadErrorExceptT,
    monadAskExceptT: monadAskExceptT,
    monadReaderExceptT: monadReaderExceptT,
    monadStateExceptT: monadStateExceptT,
    monadTellExceptT: monadTellExceptT,
    monadWriterExceptT: monadWriterExceptT,
    semigroupExceptT: semigroupExceptT,
    monoidExceptT: monoidExceptT,
    MonadError: Control_Monad_Error_Class.MonadError,
    MonadThrow: Control_Monad_Error_Class.MonadThrow,
    catchError: Control_Monad_Error_Class.catchError,
    throwError: Control_Monad_Error_Class.throwError,
    MonadTrans: Control_Monad_Trans_Class.MonadTrans,
    lift: Control_Monad_Trans_Class.lift
};
