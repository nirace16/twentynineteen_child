! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 110)
}([function(t, e, n) {
    "use strict";
    e.a = {
        SERVER_ENV: "production",
        endpoints: {
            ERROR_LOGGER: "/v2/js-error",
            ANALYTICS: "/payments/analytics/standalone.js",
            LOGO: "/v2/logo.html",
            V: "/v2/v",
            CARD_NONCE: "/v2/card-nonce",
            IFRAME: "/v2/iframe",
            APPLE_PAY_VALIDATE_MERCHANT: "/v2/apple-pay/validate-merchant",
            GOOGLE_PAY_GENERATE_TOKEN: "/digital-wallets/google-pay/token",
            MASTERPASS_CALLBACK: "/v2/masterpass/callback"
        },
        events: {
            LOAD_FORM_CONTROLLER: "loadFormController",
            REQUEST_CARD_NONCE_IF_VALID_FORM: "requestCardNonceIfValidForm",
            BUILD_STYLES_FOR_SCREEN_WIDTH: "buildStylesForScreenWidth",
            SET_POSTAL_CODE: "setPostalCode",
            BLUR_ALL_INPUTS: "blurAllInputs",
            LOAD_WALLET: "loadWallet",
            CARD_NONCE_RESPONSE_RECEIVED: "cardNonceResponseReceived",
            INPUT_EVENT_RECEIVED: "inputEventReceived",
            SET_INPUT_HEIGHT: "setInputHeight",
            PAYMENT_FORM_LOADED: "paymentFormLoaded",
            INSTALL_ERROR_LOGGER: "installErrorLogger",
            REQUEST_APPLE_PAY_CARD_NONCE: "requestApplePayCardNonce",
            RECEIVE_APPLE_PAY_CARD_NONCE: "receiveApplePayCardNonce",
            REQUEST_APPLE_PAY_MERCHANT_VALIDITY: "requestApplePayMerchantValidity",
            RECEIVE_APPLE_PAY_VALID_MERCHANT: "receiveApplePayValidMerchant",
            REQUEST_GOOGLE_PAY_CARD_NONCE: "requestGooglePayCardNonce",
            RECEIVE_GOOGLE_PAY_CARD_NONCE: "receiveGooglePayCardNonce",
            REQUEST_GOOGLE_PAY_TOKEN: "requestGooglePayToken",
            RECEIVE_GOOGLE_PAY_TOKEN: "receiveGooglePayToken",
            RECEIVE_MASTERPASS_TRANSACTION: "receiveMasterpassTransaction",
            SET_MASTERPASS_CHECKOUT_ID: "setMasterpassCheckoutId",
            REQUEST_MASTERPASS_CARD_NONCE: "requestMasterpassCardNonce"
        },
        inputEvents: {
            SUBMIT: "submit",
            EMPTY_STATE_CHANGED: "emptyStateChanged",
            FOCUS_CLASS_ADDED: "focusClassAdded",
            FOCUS_CLASS_REMOVED: "focusClassRemoved",
            ERROR_CLASS_ADDED: "errorClassAdded",
            ERROR_CLASS_REMOVED: "errorClassRemoved",
            CARD_BRAND_CHANGED: "cardBrandChanged",
            POSTAL_CODE_CHANGED: "postalCodeChanged"
        },
        inputTypes: {
            CARD_NUMBER: "cardNumber",
            GIFT_CARD: "giftCard",
            CVV: "cvv",
            EXPIRATION_DATE: "expirationDate",
            POSTAL_CODE: "postalCode"
        },
        wallets: {
            APPLE_PAY: "applePay",
            GOOGLE_PAY: "googlePay",
            MASTERPASS: "masterpass"
        },
        GOOGLE_PAY_JS: "https://pay.google.com/gp/p/js/pay.js"
    }
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(14), n(15), n(31), n(92), n(10);
    var r = {
        href: "",
        protocol: "",
        host: "",
        hostname: "",
        port: "",
        pathname: "",
        search: "",
        hash: "",
        username: "",
        password: "",
        origin: "",
        toString: function() {
            return ""
        },
        valueOf: function() {
            return ""
        }
    };
    e.a = {
        getWindow: function() {
            return window
        },
        getDocument: function() {
            return this.getWindow().document
        },
        getReadyState: function() {
            return this.getDocument().readyState
        },
        getSiblingIframe: function(t) {
            if ("string" == typeof t) {
                var e;
                try {
                    e = window.parent.frames[t]
                } catch (e) {
                    throw new Error("Error obtaining reference to iframe: ".concat(t))
                }
                if ("object" === o(e) && "function" == typeof e.setInterval) return e;
                var n = o(e);
                if (e && e.constructor) {
                    var r = e.constructor.toString().match(/[function|object] (\w*)/);
                    r && (n = r[1])
                }
                throw new Error("Iframe reference '".concat(t, "' is unexpected type: ").concat(n))
            }
        },
        getOrigin: function(t) {
            return t || (t = this.getWindow().location), t.origin ? t.origin : t.protocol && t.host ? t.protocol + "//" + t.host : ""
        },
        getParentLocation: function() {
            var t = this.getWindow();
            return t.location === t.parent.location ? t.location : this.parseUrl(this.getDocument().referrer)
        },
        getParentOrigin: function() {
            var t = this.getParentLocation();
            return this.getOrigin(t)
        },
        parseUrl: function(t) {
            if (!t) return r;
            var e = this.getDocument().createElement("a");
            return e.href = "".concat(t), e
        }
    }
}, function(t, e, n) {
    "use strict";
    n(14), n(15), n(31), n(10);
    var o = n(1);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var i = {},
        a = Object.prototype.hasOwnProperty;
    i.embeddingAllowed = function(t, e) {
        return /localhost$/.test(e.hostname) || "development" === t.name || "file:" === e.protocol || "https:" === e.protocol
    }, i.isSupportedBrowser = function() {
        var t = o.a.getWindow(),
            e = o.a.getDocument();
        return void 0 !== t.postMessage && void 0 !== t.XMLHttpRequest && void 0 !== e.createElement("a").classList
    }, i.cloneObject = function(t) {
        var e = {};
        for (var n in t) a.call(t, n) && (e[n] = t[n]);
        return e
    }, i.hasOwn = function(t, e) {
        return a.call(t, e)
    }, i.isIE10 = function() {
        return !!o.a.getDocument().documentElement.doScroll
    }, i.iosChrome = function() {
        var t = o.a.getWindow().navigator.userAgent;
        return /iphone|ipod|ipad/i.test(t) && /CriOS/i.test(t)
    }, i.guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }, i.truncate = function(t, e) {
        return t.length <= e ? t : t.substring(0, e - 1) + "…"
    }, i.isValidDataType = function(t, e, n, i) {
        return n instanceof i || r(n) === i.name.toLowerCase() || (o.a.getWindow().console.error("".concat(t, " in ").concat(e, " must be of type ").concat(i.name, ".")), !1)
    }, i.logInvalidFieldsError = function(t, e) {
        var n = e.join(", ");
        o.a.getWindow().console.error("Invalid ".concat(t, " field(s): ").concat(n))
    }, e.a = i
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(e) {
            if (void 0 !== t) return t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }() : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && c(t, e)
    }

    function s(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (s = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, o)
            }

            function o() {
                return function(t, e, n) {
                    return (function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }() ? Reflect.construct : function(t, e, n) {
                        var o = [null];
                        o.push.apply(o, e);
                        var r = new(Function.bind.apply(t, o));
                        return n && c(r, n.prototype), r
                    }).apply(null, arguments)
                }(t, arguments, l(this).constructor)
            }
            return o.prototype = Object.create(t.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), c(o, t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t) {
        return "https://docs.connect.squareup.com/payments/sqpaymentform/sqpaymentform-overview" + (t || "")
    }

    function p(t) {
        return "https://docs.connect.squareup.com/api/paymentform" + (t || "")
    }
    n.d(e, "j", function() {
        return d
    }), n.d(e, "a", function() {
        return h
    }), n.d(e, "b", function() {
        return f
    }), n.d(e, "c", function() {
        return b
    }), n.d(e, "k", function() {
        return S
    }), n.d(e, "g", function() {
        return P
    }), n.d(e, "h", function() {
        return O
    }), n.d(e, "e", function() {
        return F
    }), n.d(e, "f", function() {
        return j
    }), n.d(e, "d", function() {
        return q
    }), n.d(e, "i", function() {
        return G
    }), n(14), n(15), n(17), n(18), n(93), n(95), n(103), n(31), n(64);
    var d = function(t) {
        function e(t) {
            return r(this, e), i(this, l(e).call(this, t || "Unknown SqError"))
        }
        return a(e, s(Error)), e
    }();
    d.prototype.name = "SqError";
    var h = function(t) {
        function e(t) {
            return r(this, e), i(this, l(e).call(this, "SqPaymentForm element with id '".concat(t, "' not found. Has the DOM finished loading?\nSee: ").concat("https://docs.connect.squareup.com/payments/sqpaymentform/sqpaymentform-setup#step-3-add-the-html-form-to-your-payment-page")))
        }
        return a(e, d), e
    }();
    h.prototype.name = "ElementNotFoundError";
    var f = function(t) {
        function e(t) {
            return r(this, e), i(this, l(e).call(this, "SqPaymentForm element with id '".concat(t, "' is not visible. Does it or a parent element have 'display:none'?")))
        }
        return a(e, d), e
    }();
    f.prototype.name = "ElementNotVisibleError";
    var y = function(t) {
        function e(t) {
            return r(this, e), i(this, l(e).call(this, "SqPaymentForm field '".concat(t, "' is invalid.")))
        }
        return a(e, d), e
    }();
    y.prototype.name = "InvalidFieldError";
    var m = function(t) {
        function e() {
            r(this, e);
            var t = u("#requirements-and-limitations");
            return i(this, l(e).call(this, "SqPaymentForm can only be embedded on sites that use HTTPS.\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    m.prototype.name = "HttpsRequiredError";
    var g = function(t) {
        function e(t) {
            return r(this, e), i(this, l(e).call(this, "Cannot call SqPaymentForm#".concat(t, " after SqPaymentForm#destroy. Create a new SqPaymentForm instance instead.")))
        }
        return a(e, d), e
    }();
    g.prototype.name = "FormAlreadyDestroyedError";
    var v = function(t) {
        function e(t) {
            r(this, e);
            var n = u("#how-it-works-sqpaymentform-process-flow");
            return i(this, l(e).call(this, "Cannot call SqPaymentForm#".concat(t, " before SqPaymentForm is ready. See: ").concat(n)))
        }
        return a(e, d), e
    }();
    v.prototype.name = "FormNotReadyError";
    var E = function(t) {
        function e() {
            r(this, e);
            var t = p("#build");
            return i(this, l(e).call(this, "SqPaymentForm#build called more than once. Did you mean to call SqPaymentForm#destroy first?\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    E.prototype.name = "FormAlreadyBuiltError";
    var b = function(t) {
        function e() {
            r(this, e);
            var t = p("#destroy");
            return i(this, l(e).call(this, "Iframe no longer exists on site. Check if you called SqPaymentForm destroy() correctly.\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    b.prototype.name = "IframeDoesNotExistError";
    var S = function(t) {
        function e() {
            r(this, e);
            var t = p("#shippingcontactchanged");
            return i(this, l(e).call(this, "validateShippingContact() has been deprecated. Please use shippingContactChanged().\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    S.prototype.name = "ValidateShippingContactDeprecatedError";
    var I = function(t) {
        function e() {
            return r(this, e), i(this, l(e).call(this, "Only one of 'locationId' or 'accountId' can be specified."))
        }
        return a(e, d), e
    }();
    I.prototype.name = "TooManyIdsError";
    var _ = function(t) {
        function e(t, n) {
            r(this, e);
            var o = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' argument must be of type '").concat(n, "'.\nSee: ").concat(o)))
        }
        return a(e, d), e
    }();
    _.prototype.name = "InvalidArgumentError";
    var A = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' argument is required.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    A.prototype.name = "MissingArgumentError";
    var C = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#_paymentform_functions");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' function was called with missing or invalid parameters.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    C.prototype.name = "InvalidFunctionArgumentError";
    var P = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' option value is invalid.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    P.prototype.name = "InvalidOptionError";
    var T = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' option type is invalid.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    T.prototype.name = "InvalidOptionType";
    var O = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' option is required.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    O.prototype.name = "MissingOptionError";
    var N = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm 'elementId' option is required for '".concat(t, "'.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    N.prototype.name = "MissingElementIdError";
    var L = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' option is required.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    L.prototype.name = "MissingInputTypeError";
    var w = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' option is not expected in this configuration.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    w.prototype.name = "UnexpectedInputTypeError";
    var R = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#_callbackfunctions_detail");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' callback is required.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    R.prototype.name = "MissingCallbackError";
    var M = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#_callbackfunctions_detail");
            return i(this, l(e).call(this, "The SqPaymentForm '".concat(t, "' callback must be a function.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    M.prototype.name = "InvalidCallbackError";
    var D = function(t) {
        function e() {
            r(this, e);
            var t = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm requires at least one payment method.\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    D.prototype.name = "MissingPaymentMethodError";
    var k = function(t) {
        function e() {
            r(this, e);
            var t = p("#configurationfields");
            return i(this, l(e).call(this, "The SqPaymentForm 'inputStyles' option must be an array.\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    k.prototype.name = "InvalidInputStylesError";
    var F = function(t) {
        function e(t) {
            r(this, e);
            var n = p("#datatype-inputstyleobjects");
            return i(this, l(e).call(this, "Invalid InputStyle property: '".concat(t, "'.\nSee: ").concat(n)))
        }
        return a(e, d), e
    }();
    F.prototype.name = "InvalidInputStylePropertyError";
    var j = function(t) {
        function e(t, n) {
            r(this, e);
            var o = p("#datatype-inputstyleobjects");
            return i(this, l(e).call(this, "Invalid InputStyle value '".concat(t, "' for property '").concat(n, "'.\nSee: ").concat(o)))
        }
        return a(e, d), e
    }();
    j.prototype.name = "InvalidInputStyleValueError";
    var q = function(t) {
        function e() {
            return r(this, e), i(this, l(e).call(this, "Input height zero detected; using fallback value."))
        }
        return a(e, d), e
    }();
    q.prototype.name = "InputHeightZeroError";
    var x = function(t) {
        function e() {
            r(this, e);
            var t = u("#prerequisites");
            return i(this, l(e).call(this, "Browser not supported.\nSee: ".concat(t)))
        }
        return a(e, d), e
    }();
    x.prototype.name = "UnsupportedBrowserError";
    var G = function(t) {
        function e() {
            return r(this, e), i(this, l(e).call(this, "The label field in the 'PaymentRequest.total' object must be set " + "with the merchant name to use Apple Pay with an Account ID.\nSee: ".concat("https://docs.connect.squareup.com/payments/sqpaymentform/digitalwallet/applepay-setup#payment-request-object-example")))
        }
        return a(e, d), e
    }();
    G.prototype.name = "MissingTotalLabelError", e.l = {
        SqError: d,
        ElementNotFoundError: h,
        ElementNotVisibleError: f,
        InvalidFieldError: y,
        HttpsRequiredError: m,
        FormAlreadyDestroyedError: g,
        FormNotReadyError: v,
        FormAlreadyBuiltError: E,
        IframeDoesNotExistError: b,
        TooManyIdsError: I,
        ValidateShippingContactDeprecatedError: S,
        InvalidArgumentError: _,
        MissingArgumentError: A,
        InvalidFunctionArgumentError: C,
        InvalidOptionError: P,
        InvalidOptionType: T,
        MissingOptionError: O,
        MissingElementIdError: N,
        MissingInputTypeError: L,
        UnexpectedInputTypeError: w,
        MissingCallbackError: R,
        InvalidCallbackError: M,
        MissingPaymentMethodError: D,
        InvalidInputStylesError: k,
        InvalidInputStylePropertyError: F,
        InvalidInputStyleValueError: j,
        InputHeightZeroError: q,
        UnsupportedBrowserError: x,
        MissingTotalLabelError: G
    }
}, function(t, e, n) {
    var o = n(40)("wks"),
        r = n(26),
        i = n(5).Symbol,
        a = "function" == typeof i;
    (t.exports = function(t) {
        return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t))
    }).store = o
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    t.exports = !n(9)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var o = n(11),
        r = n(54),
        i = n(33),
        a = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function(t, e, n) {
        if (o(t), e = i(e, !0), o(n), r) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var o = n(7).f,
        r = Function.prototype,
        i = /^\s*function ([^ (]*)/;
    "name" in r || n(6) && o(r, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(i)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    var o = n(8);
    t.exports = function(t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    var o = n(5),
        r = n(20),
        i = n(19),
        a = n(26)("src"),
        s = "toString",
        c = Function[s],
        l = ("" + c).split(s);
    n(23).inspectSource = function(t) {
        return c.call(t)
    }, (t.exports = function(t, e, n, s) {
        var c = "function" == typeof n;
        c && (i(n, "name") || r(n, "name", e)), t[e] !== n && (c && (i(n, a) || r(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
    })(Function.prototype, s, function() {
        return "function" == typeof this && this[a] || c.call(this)
    })
}, function(t, e, n) {
    "use strict";
    n(51), n(17), n(10), n(14), n(15), n(64);
    var o = n(2),
        r = n(3);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? function(e) {
            if (void 0 !== t) return t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }() : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function l(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && function(t, e) {
            (Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }(t, e)
    }
    var u = {
            REQUEST_DURATION_MAX_MS: 3e4,
            REQUEST_TIMEOUT_MS: [3e3, 9e3, 18e3],
            RETRY_DELAY_MS: 200,
            BACKOFF_FACTOR: 1.66
        },
        p = function(t) {
            function e(t, n, o) {
                return a(this, e), s(this, c(e).call(this, "Request timeout exceeded (attempts=".concat(t, "; ").concat(n, "ms; ").concat(o, ")")))
            }
            return l(e, r.j), e
        }();
    p.prototype.name = "TimeoutError", u.TimeoutError = p;
    var d = function(t) {
        function e(t, n, o) {
            return a(this, e), s(this, c(e).call(this, "Network error during request (attempts=".concat(t, "; ").concat(n, "ms; ").concat(o, ")")))
        }
        return l(e, r.j), e
    }();
    d.prototype.name = "NetworkError", u.NetworkError = d;
    var h = function(t) {
        function e(t, n, o) {
            return a(this, e), s(this, c(e).call(this, "Invalid JSON received from ".concat(t, "; status=").concat(n, " response=").concat(o)))
        }
        return l(e, r.j), e
    }();
    h.prototype.name = "InvalidJsonError", u.InvalidJsonError = h, u.post = function(t, e, n) {
        n || "function" != typeof e || (n = e, e = {}), e || (e = {}), "function" != typeof n && (n = function() {}), e._attempts ? e._attempts += 1 : e._attempts = 1, e._startTime || (e._startTime = Date.now()), e.timeout || (e.timeout = u.REQUEST_TIMEOUT_MS[0]);
        var r = new XMLHttpRequest;
        if (r.open("POST", t, !0), r.timeout = e.timeout, r.withCredentials = !0, e.headers)
            for (var i in e.headers) o.a.hasOwn(e.headers, i) && r.setRequestHeader(i, e.headers[i]);
        e.json && (e.body && (e.body = null), r.setRequestHeader("Accept", "application/json"), r.setRequestHeader("Content-Type", "application/json; charset=utf-8"));
        var a = e.body || JSON.stringify(e.json);
        r.onreadystatechange = function() {
            if (4 === r.readyState && 0 !== r.status) {
                var i = r.responseText;
                if (i && e.json) try {
                    i = JSON.parse(i)
                } catch (s) {
                    var a = o.a.truncate(i, 64);
                    return n(new h(t, r.status, a))
                }
                var s = {
                    headers: u.parseHeaders(r.getAllResponseHeaders()),
                    status: r.status,
                    statusText: r.statusText
                };
                n(null, s, i)
            }
        }, r.onerror = function() {
            r.abort();
            var o = e._attempts - 1,
                i = u.backoff(u.RETRY_DELAY_MS, o),
                a = Date.now() - e._startTime,
                s = u.REQUEST_DURATION_MAX_MS - a;
            if (s <= i) {
                if (s > e.timeout) {
                    var c = s - e.timeout;
                    return void setTimeout(function() {
                        u.post(t, e, n)
                    }, c)
                }
                n(new d(e._attempts, a, t))
            } else setTimeout(function() {
                u.post(t, e, n)
            }, i)
        }, r.ontimeout = function() {
            r.abort();
            var o = Date.now() - e._startTime,
                i = u.REQUEST_DURATION_MAX_MS - o;
            if (i <= 0) n(new p(e._attempts, o, t));
            else {
                var a = u.REQUEST_TIMEOUT_MS[Math.min(e._attempts, 2)];
                i < a && (a = i), e.timeout = a, setTimeout(function() {
                    u.post(t, e, n)
                }, 0)
            }
        }, r.send(a)
    }, u.parseHeaders = function(t) {
        var e = {};
        return t && t.split("\r\n").forEach(function(t) {
            var n = t.indexOf(": ");
            if (0 < n) {
                var o = t.substring(0, n),
                    r = t.substring(n + 2);
                e[o] = r
            }
        }), e
    }, u.backoff = function(t, e) {
        var n = u.BACKOFF_FACTOR;
        return Math.floor(t * Math.pow(n, e))
    }, e.a = u
}, function(t, e, n) {
    n(52)("asyncIterator")
}, function(t, e, n) {
    "use strict";
    var o = n(5),
        r = n(19),
        i = n(6),
        a = n(16),
        s = n(12),
        c = n(42).KEY,
        l = n(9),
        u = n(40),
        p = n(36),
        d = n(26),
        h = n(4),
        f = n(53),
        y = n(52),
        m = n(78),
        g = n(82),
        v = n(11),
        E = n(8),
        b = n(21),
        S = n(33),
        I = n(34),
        _ = n(29),
        A = n(85),
        C = n(46),
        P = n(7),
        T = n(24),
        O = C.f,
        N = P.f,
        L = A.f,
        w = o.Symbol,
        R = o.JSON,
        M = R && R.stringify,
        D = "prototype",
        k = h("_hidden"),
        F = h("toPrimitive"),
        j = {}.propertyIsEnumerable,
        q = u("symbol-registry"),
        x = u("symbols"),
        G = u("op-symbols"),
        U = Object[D],
        V = "function" == typeof w,
        W = o.QObject,
        B = !W || !W[D] || !W[D].findChild,
        H = i && l(function() {
            return 7 != _(N({}, "a", {
                get: function() {
                    return N(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var o = O(U, e);
            o && delete U[e], N(t, e, n), o && t !== U && N(U, e, o)
        } : N,
        Y = function(t) {
            var e = x[t] = _(w[D]);
            return e._k = t, e
        },
        K = V && "symbol" == typeof w.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof w
        },
        z = function(t, e, n) {
            return t === U && z(G, e, n), v(t), e = S(e, !0), v(n), r(x, e) ? (n.enumerable ? (r(t, k) && t[k][e] && (t[k][e] = !1), n = _(n, {
                enumerable: I(0, !1)
            })) : (r(t, k) || N(t, k, I(1, {})), t[k][e] = !0), H(t, e, n)) : N(t, e, n)
        },
        J = function(t, e) {
            v(t);
            for (var n, o = m(e = b(e)), r = 0, i = o.length; r < i;) z(t, n = o[r++], e[n]);
            return t
        },
        Q = function(t) {
            var e = j.call(this, t = S(t, !0));
            return !(this === U && r(x, t) && !r(G, t)) && (!(e || !r(this, t) || !r(x, t) || r(this, k) && this[k][t]) || e)
        },
        X = function(t, e) {
            if (t = b(t), e = S(e, !0), t !== U || !r(x, e) || r(G, e)) {
                var n = O(t, e);
                return !n || !r(x, e) || r(t, k) && t[k][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = L(b(t)), o = [], i = 0; n.length > i;) r(x, e = n[i++]) || e == k || e == c || o.push(e);
            return o
        },
        $ = function(t) {
            for (var e, n = t === U, o = L(n ? G : b(t)), i = [], a = 0; o.length > a;) !r(x, e = o[a++]) || n && !r(U, e) || i.push(x[e]);
            return i
        };
    V || (s((w = function() {
        if (this instanceof w) throw TypeError("Symbol is not a constructor!");
        var t = d(0 < arguments.length ? arguments[0] : void 0),
            e = function(n) {
                this === U && e.call(G, n), r(this, k) && r(this[k], t) && (this[k][t] = !1), H(this, t, I(1, n))
            };
        return i && B && H(U, t, {
            configurable: !0,
            set: e
        }), Y(t)
    })[D], "toString", function() {
        return this._k
    }), C.f = X, P.f = z, n(38).f = A.f = Z, n(37).f = Q, n(58).f = $, i && !n(32) && s(U, "propertyIsEnumerable", Q, !0), f.f = function(t) {
        return Y(h(t))
    }), a(a.G + a.W + a.F * !V, {
        Symbol: w
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) h(tt[et++]);
    for (var nt = T(h.store), ot = 0; nt.length > ot;) y(nt[ot++]);
    a(a.S + a.F * !V, "Symbol", {
        for: function(t) {
            return r(q, t += "") ? q[t] : q[t] = w(t)
        },
        keyFor: function(t) {
            if (!K(t)) throw TypeError(t + " is not a symbol!");
            for (var e in q)
                if (q[e] === t) return e
        },
        useSetter: function() {
            B = !0
        },
        useSimple: function() {
            B = !1
        }
    }), a(a.S + a.F * !V, "Object", {
        create: function(t, e) {
            return void 0 === e ? _(t) : J(_(t), e)
        },
        defineProperty: z,
        defineProperties: J,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: $
    }), R && a(a.S + a.F * (!V || l(function() {
        var t = w();
        return "[null]" != M([t]) || "{}" != M({
            a: t
        }) || "{}" != M(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]);
            if (n = e = o[1], (E(e) || void 0 !== t) && !K(t)) return g(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e
            }), o[1] = e, M.apply(R, o)
        }
    }), w[D][F] || n(20)(w[D], F, w[D].valueOf), p(w, "Symbol"), p(Math, "Math", !0), p(o.JSON, "JSON", !0)
}, function(t, e, n) {
    var o = n(5),
        r = n(23),
        i = n(20),
        a = n(12),
        s = n(35),
        c = "prototype",
        l = function(t, e, n) {
            var u, p, d, h, f = t & l.F,
                y = t & l.G,
                m = t & l.S,
                g = t & l.P,
                v = t & l.B,
                E = y ? o : m ? o[e] || (o[e] = {}) : (o[e] || {})[c],
                b = y ? r : r[e] || (r[e] = {}),
                S = b[c] || (b[c] = {});
            for (u in y && (n = e), n) d = ((p = !f && E && void 0 !== E[u]) ? E : n)[u], h = v && p ? s(d, o) : g && "function" == typeof d ? s(Function.call, d) : d, E && a(E, u, d, t & l.U), b[u] != d && i(b, u, h), g && S[u] != d && (S[u] = d)
        };
    o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
}, function(t, e, n) {
    for (var o = n(18), r = n(24), i = n(12), a = n(5), s = n(20), c = n(30), l = n(4), u = l("iterator"), p = l("toStringTag"), d = c.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, f = r(h), y = 0; y < f.length; y++) {
        var m, g = f[y],
            v = h[g],
            E = a[g],
            b = E && E.prototype;
        if (b && (b[u] || s(b, u, d), b[p] || s(b, p, g), c[g] = d, v))
            for (m in o) b[m] || i(b, m, o[m], !0)
    }
}, function(t, e, n) {
    "use strict";
    var o = n(87),
        r = n(59),
        i = n(30),
        a = n(21);
    t.exports = n(47)(Array, "Array", function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var o = n(7),
        r = n(34);
    t.exports = n(6) ? function(t, e, n) {
        return o.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var o = n(79),
        r = n(28);
    t.exports = function(t) {
        return o(r(t))
    }
}, function(t, e, n) {
    "use strict";
    n(14), n(15), n(10), n(31);
    var o = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua And Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius, And Saba",
        BA: "Bosnia And Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria (rep.)",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        JE: "Channel Islands",
        GG: "Channel Islands",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CD: "Congo (dem. Rep.)",
        CG: "Congo (rep.)",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Cote D'ivoire",
        HR: "Croatia",
        CW: "Curacao",
        CY: "Cyprus",
        CZ: "Czech Rep.",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Rep.",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        AX: "Finland",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada (west Indies)",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GN: "Guinea",
        GW: "Guinea-bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard And Mcdonald Islands",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary (rep.)",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle Of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao (people's Dem. Rep.)",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia (federated State Of)",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru Central Pacific",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory",
        PA: "Panama (rep.)",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        MD: "Rep. Moldova",
        SG: "Rep. Of Singapore",
        RS: "Republic Of Serbia",
        RE: "Reunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthelemy",
        SH: "Saint Helena",
        KN: "Saint Kitts And Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        VC: "Saint Vincent And The Grenadines (antilles)",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome And Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia",
        KR: "South Korea",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        PM: "St. Pierre And Miquelon",
        SR: "Suriname",
        SJ: "Svalbard And Jan Mayen Islands",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania (united Rep.)",
        TH: "Thailand",
        TL: "Timor-leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad And Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks And Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VA: "Vatican",
        VE: "Venezuela",
        VN: "Viet Nam",
        VG: "Virgin Islands (british)",
        VI: "Virgin Islands (u.s.)",
        WF: "Wallis And Futuna Islands",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t) {
        t && "object" === r(t) || (t = {}), this.data = {}, this.familyName = t.familyName, this.givenName = t.givenName, this.email = t.email, this.country = t.country, this.region = t.region, this.city = t.city, this.addressLines = t.addressLines, this.postalCode = t.postalCode, this.phone = t.phone
    }
    Object.defineProperty(i.prototype, "familyName", {
        get: function() {
            return this.data.familyName
        },
        set: function(t) {
            this.data.familyName = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "givenName", {
        get: function() {
            return this.data.givenName
        },
        set: function(t) {
            this.data.givenName = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "email", {
        get: function() {
            return this.data.email
        },
        set: function(t) {
            this.data.email = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "phone", {
        get: function() {
            return this.data.phone
        },
        set: function(t) {
            this.data.phone = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "country", {
        get: function() {
            return this.data.country
        },
        set: function(t) {
            this.data.country !== t && (this.data.country = t, this.data.countryName = o[t])
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "countryName", {
        get: function() {
            return this.data.countryName
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "region", {
        get: function() {
            return this.data.region
        },
        set: function(t) {
            this.data.region = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "city", {
        get: function() {
            return this.data.city
        },
        set: function(t) {
            this.data.city = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "addressLines", {
        get: function() {
            return this.data.addressLines
        },
        set: function(t) {
            !t || t instanceof Array || (t = [t.toString()]), this.data.addressLines = t
        },
        enumerable: !0
    }), Object.defineProperty(i.prototype, "postalCode", {
        get: function() {
            return this.data.postalCode
        },
        set: function(t) {
            this.data.postalCode = t
        },
        enumerable: !0
    }), i.prototype.toApplePay = function() {
        return {
            addressLines: this.data.addressLines,
            locality: this.data.city,
            administrativeArea: this.data.region,
            postalCode: this.data.postalCode,
            countryCode: this.data.country,
            country: this.data.countryName,
            givenName: this.data.givenName,
            familyName: this.data.familyName,
            emailAddress: this.data.email,
            phoneNumber: this.data.phone
        }
    }, i.fromApplePay = function(t) {
        if (!t) return t;
        var e = t.countryCode;
        return e && (e = e.toUpperCase()), new i({
            addressLines: t.addressLines,
            city: t.locality,
            region: t.administrativeArea,
            postalCode: t.postalCode,
            country: e,
            givenName: t.givenName,
            familyName: t.familyName,
            email: t.emailAddress,
            phone: t.phoneNumber
        })
    }, i.legacyFromApplePay = function(t) {
        return t ? new i({
            addressLines: t.addressLines,
            city: t.locality,
            region: t.administrativeArea,
            postalCode: t.postalCode,
            country: t.countryCode,
            givenName: t.givenName,
            familyName: t.familyName,
            email: t.emailAddress,
            phone: t.phoneNumber
        }) : t
    }, i.fromGooglePay = function(t) {
        return t ? new i({
            addressLines: [t.address1, t.address2, t.address3, t.address4, t.address5].filter(Boolean),
            city: t.locality,
            region: t.administrativeArea,
            postalCode: t.postalCode,
            country: t.countryCode,
            givenName: t.name,
            email: t.email,
            phone: t.phoneNumber
        }) : t
    }, e.a = i
}, function(t, e) {
    var n = t.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var o = n(56),
        r = n(45);
    t.exports = Object.keys || function(t) {
        return o(t, r)
    }
}, function(t, e, n) {
    var o = n(60),
        r = n(24);
    n(90)("keys", function() {
        return function(t) {
            return r(o(t))
        }
    })
}, function(t, e) {
    var n = 0,
        o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36))
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var o = n(11),
        r = n(83),
        i = n(45),
        a = n(44)("IE_PROTO"),
        s = function() {},
        c = "prototype",
        l = function() {
            var t, e = n(55)("iframe"),
                o = i.length;
            for (e.style.display = "none", n(84).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; o--;) delete l[c][i[o]];
            return l()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s[c] = o(t), n = new s, s[c] = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    "use strict";
    n(91);
    var o = n(11),
        r = n(48),
        i = n(6),
        a = "toString",
        s = /./ [a],
        c = function(t) {
            n(12)(RegExp.prototype, a, t, !0)
        };
    n(9)(function() {
        return "/a/b" != s.call({
            source: "a",
            flags: "b"
        })
    }) ? c(function() {
        var t = o(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0)
    }) : s.name != a && c(function() {
        return s.call(this)
    })
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var o = n(8);
    t.exports = function(t, e) {
        if (!o(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !o(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var o = n(41);
    t.exports = function(t, e, n) {
        if (o(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, o) {
                    return t.call(e, n, o)
                };
            case 3:
                return function(n, o, r) {
                    return t.call(e, n, o, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var o = n(7).f,
        r = n(19),
        i = n(4)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, i) && o(t, i, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var o = n(56),
        r = n(45).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return o(t, r)
    }
}, function(t, e, n) {
    "use strict";
    var o = n(20),
        r = n(12),
        i = n(9),
        a = n(28),
        s = n(4);
    t.exports = function(t, e, n) {
        var c = s(t),
            l = n(a, c, "" [t]),
            u = l[0],
            p = l[1];
        i(function() {
            var e = {};
            return e[c] = function() {
                return 7
            }, 7 != "" [t](e)
        }) && (r(String.prototype, t, u), o(RegExp.prototype, c, 2 == e ? function(t, e) {
            return p.call(t, this, e)
        } : function(t) {
            return p.call(t, this)
        }))
    }
}, function(t, e, n) {
    var o = n(23),
        r = n(5),
        i = "__core-js_shared__",
        a = r[i] || (r[i] = {});
    (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: o.version,
        mode: n(32) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var o = n(26)("meta"),
        r = n(8),
        i = n(19),
        a = n(7).f,
        s = 0,
        c = Object.isExtensible || function() {
            return !0
        },
        l = !n(9)(function() {
            return c(Object.preventExtensions({}))
        }),
        u = function(t) {
            a(t, o, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        p = t.exports = {
            KEY: o,
            NEED: !1,
            fastKey: function(t, e) {
                if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, o)) {
                    if (!c(t)) return "F";
                    if (!e) return "E";
                    u(t)
                }
                return t[o].i
            },
            getWeak: function(t, e) {
                if (!i(t, o)) {
                    if (!c(t)) return !0;
                    if (!e) return !1;
                    u(t)
                }
                return t[o].w
            },
            onFreeze: function(t) {
                return l && p.NEED && c(t) && !i(t, o) && u(t), t
            }
        }
}, function(t, e) {
    var n = Math.ceil,
        o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? o : n)(t)
    }
}, function(t, e, n) {
    var o = n(40)("keys"),
        r = n(26);
    t.exports = function(t) {
        return o[t] || (o[t] = r(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var o = n(37),
        r = n(34),
        i = n(21),
        a = n(33),
        s = n(19),
        c = n(54),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? l : function(t, e) {
        if (t = i(t), e = a(e, !0), c) try {
            return l(t, e)
        } catch (t) {}
        if (s(t, e)) return r(!o.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    "use strict";
    var o = n(32),
        r = n(16),
        i = n(12),
        a = n(20),
        s = n(30),
        c = n(88),
        l = n(36),
        u = n(89),
        p = n(4)("iterator"),
        d = !([].keys && "next" in [].keys()),
        h = "values",
        f = function() {
            return this
        };
    t.exports = function(t, e, n, y, m, g, v) {
        c(n, e, y);
        var E, b, S, I = function(t) {
                if (!d && t in P) return P[t];
                switch (t) {
                    case "keys":
                    case h:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            _ = e + " Iterator",
            A = m == h,
            C = !1,
            P = t.prototype,
            T = P[p] || P["@@iterator"] || m && P[m],
            O = T || I(m),
            N = m ? A ? I("entries") : O : void 0,
            L = "Array" == e && P.entries || T;
        if (L && (S = u(L.call(new t))) !== Object.prototype && S.next && (l(S, _, !0), o || "function" == typeof S[p] || a(S, p, f)), A && T && T.name !== h && (C = !0, O = function() {
                return T.call(this)
            }), o && !v || !d && !C && P[p] || a(P, p, O), s[e] = O, s[_] = f, m)
            if (E = {
                    values: A ? O : I(h),
                    keys: g ? O : I("keys"),
                    entries: N
                }, v)
                for (b in E) b in P || i(P, b, E[b]);
            else r(r.P + r.F * (d || C), e, E);
        return E
    }
}, function(t, e, n) {
    "use strict";
    var o = n(11);
    t.exports = function() {
        var t = o(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    var o = n(5),
        r = n(50),
        i = n(7).f,
        a = n(38).f,
        s = n(62),
        c = n(48),
        l = o.RegExp,
        u = l,
        p = l.prototype,
        d = /a/g,
        h = /a/g,
        f = new l(d) !== d;
    if (n(6) && (!f || n(9)(function() {
            return h[n(4)("match")] = !1, l(d) != d || l(h) == h || "/a/i" != l(d, "i")
        }))) {
        l = function(t, e) {
            var n = this instanceof l,
                o = s(t),
                i = void 0 === e;
            return !n && o && t.constructor === l && i ? t : r(f ? new u(o && !i ? t.source : t, e) : u((o = t instanceof l) ? t.source : t, o && i ? c.call(t) : e), n ? this : p, l)
        };
        for (var y = function(t) {
                t in l || i(l, t, {
                    configurable: !0,
                    get: function() {
                        return u[t]
                    },
                    set: function(e) {
                        u[t] = e
                    }
                })
            }, m = a(u), g = 0; m.length > g;) y(m[g++]);
        (p.constructor = l).prototype = p, n(12)(o, "RegExp", l)
    }
    n(63)("RegExp")
}, function(t, e, n) {
    var o = n(8),
        r = n(61).set;
    t.exports = function(t, e, n) {
        var i, a = e.constructor;
        return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t
    }
}, function(t, e, n) {
    n(39)("split", 2, function(t, e, o) {
        "use strict";
        var r = n(62),
            i = o,
            a = [].push,
            s = "split",
            c = "length",
            l = "lastIndex";
        if ("c" == "abbc" [s](/(b)*/)[1] || 4 != "test" [s](/(?:)/, -1)[c] || 2 != "ab" [s](/(?:ab)*/)[c] || 4 != "." [s](/(.?)(.?)/)[c] || 1 < "." [s](/()()/)[c] || "" [s](/.?/)[c]) {
            var u = void 0 === /()??/.exec("")[1];
            o = function(t, e) {
                var n = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!r(t)) return i.call(n, t, e);
                var o, s, p, d, h, f = [],
                    y = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    m = 0,
                    g = void 0 === e ? 4294967295 : e >>> 0,
                    v = new RegExp(t.source, y + "g");
                for (u || (o = new RegExp("^" + v.source + "$(?!\\s)", y));
                    (s = v.exec(n)) && !(m < (p = s.index + s[0][c]) && (f.push(n.slice(m, s.index)), !u && 1 < s[c] && s[0].replace(o, function() {
                        for (h = 1; h < arguments[c] - 2; h++) void 0 === arguments[h] && (s[h] = void 0)
                    }), 1 < s[c] && s.index < n[c] && a.apply(f, s.slice(1)), d = s[0][c], m = p, f[c] >= g));) v[l] === s.index && v[l]++;
                return m === n[c] ? !d && v.test("") || f.push("") : f.push(n.slice(m)), f[c] > g ? f.slice(0, g) : f
            }
        } else "0" [s](void 0, 0)[c] && (o = function(t, e) {
            return void 0 === t && 0 === e ? [] : i.call(this, t, e)
        });
        return [function(n, r) {
            var i = t(this),
                a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, i, r) : o.call(String(i), n, r)
        }, o]
    })
}, function(t, e, n) {
    var o = n(5),
        r = n(23),
        i = n(32),
        a = n(53),
        s = n(7).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    e.f = n(4)
}, function(t, e, n) {
    t.exports = !n(6) && !n(9)(function() {
        return 7 != Object.defineProperty(n(55)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var o = n(8),
        r = n(5).document,
        i = o(r) && o(r.createElement);
    t.exports = function(t) {
        return i ? r.createElement(t) : {}
    }
}, function(t, e, n) {
    var o = n(19),
        r = n(21),
        i = n(80)(!1),
        a = n(44)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = r(t),
            c = 0,
            l = [];
        for (n in s) n != a && o(s, n) && l.push(n);
        for (; e.length > c;) o(s, n = e[c++]) && (~i(l, n) || l.push(n));
        return l
    }
}, function(t, e, n) {
    var o = n(43),
        r = Math.min;
    t.exports = function(t) {
        return 0 < t ? r(o(t), 9007199254740991) : 0
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var o = n(28);
    t.exports = function(t) {
        return Object(o(t))
    }
}, function(t, e, n) {
    var o = n(8),
        r = n(11),
        i = function(t, e) {
            if (r(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, o) {
            try {
                (o = n(35)(Function.call, n(46).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n), e ? t.__proto__ = n : o(t, n), t
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(t, e, n) {
    var o = n(8),
        r = n(27),
        i = n(4)("match");
    t.exports = function(t) {
        var e;
        return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t))
    }
}, function(t, e, n) {
    "use strict";
    var o = n(5),
        r = n(7),
        i = n(6),
        a = n(4)("species");
    t.exports = function(t) {
        var e = o[t];
        i && e && !e[a] && r.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var o = n(16);
    o(o.S, "Object", {
        setPrototypeOf: n(61).set
    })
}, function(t, e, n) {
    var o = n(12);
    t.exports = function(t, e, n) {
        for (var r in e) o(t, r, e[r], n);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e, n, o) {
        if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var o = n(35),
        r = n(97),
        i = n(98),
        a = n(11),
        s = n(57),
        c = n(99),
        l = {},
        u = {};
    (e = t.exports = function(t, e, n, p, d) {
        var h, f, y, m, g = d ? function() {
                return t
            } : c(t),
            v = o(n, p, e ? 2 : 1),
            E = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (i(g)) {
            for (h = s(t.length); E < h; E++)
                if ((m = e ? v(a(f = t[E])[0], f[1]) : v(t[E])) === l || m === u) return m
        } else
            for (y = g.call(t); !(f = y.next()).done;)
                if ((m = r(y, v, f.value, e)) === l || m === u) return m
    }).BREAK = l, e.RETURN = u
}, function(t, e, n) {
    var o = n(8);
    t.exports = function(t, e) {
        if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    "use strict";
    n(10), n(49);
    var o = n(0),
        r = n(1),
        i = n(13);

    function a(t) {
        this.options = t || {}, this.env = this.options.env, this.source = this.options.source, this.applicationId = this.options.applicationId, this.apiWrapper = this.options.apiWrapper, this.ignoreError = 0, this.url = this.env.serviceUrl(o.a.endpoints.ERROR_LOGGER), this.urlMatcher = /.+/, this.options.captureUncaughtExceptions && (this.options.captureUncaughtExceptions instanceof RegExp && (this.urlMatcher = this.options.captureUncaughtExceptions), this.install(r.a.getWindow()))
    }(e.a = a).prototype.destroy = function() {
        this.originalOnerror && (r.a.getWindow().onerror = this.originalOnerror, this.originalOnerror = null)
    }, a.prototype.ignoreNextError = function() {
        this.ignoreError += 1, r.a.getWindow().setTimeout(function() {
            this.ignoreError -= 1
        }.bind(this), 0)
    }, a.prototype.wrap = function(t) {
        var e = this;
        if (t.__inner__) return t;

        function n() {
            var n = [].slice.call(arguments);
            try {
                return t.apply(this, n)
            } catch (n) {
                throw e.capture(n), n
            }
        }
        return n.__inner__ = t, n
    }, a.prototype.capture = function(t) {
        if (t.name || t.message) {
            "development" === this.env.name && r.a.getWindow().console.error("[captured error]", t.message), this.ignoreNextError();
            var e = this._createPayload(t.name, t.message || "[unknown]", t.fileName || "[unknown]", t.stack);
            this._send(e)
        }
    }, a.prototype.install = function(t) {
        t.__error_logger__ || (t.__error_logger__ = !0, this.originalOnerror = t.onerror, t.onerror = function(e, n, o, r, i) {
            return this.ignoreError || /Script error/.test(e) || !this.urlMatcher.test(n) || this.capture(i), "function" == typeof this.originalOnerror && this.originalOnerror.apply(t, [].slice.call(arguments))
        }.bind(this))
    }, a.prototype._createPayload = function(t, e, n, o) {
        var i = r.a.getWindow();
        return {
            app_id: this.applicationId,
            type: t,
            message: e,
            stack: o,
            ua: i.navigator.userAgent,
            url: i.location.href,
            app_url: r.a.getParentLocation().href,
            script_url: n,
            source: this.source,
            wrapper: this.apiWrapper
        }
    }, a.prototype._send = function(t) {
        i.a.post(this.url, {
            json: t
        }, this._handleResponse.bind(this))
    }, a.prototype._handleResponse = function() {}
}, function(t, e, n) {
    "use strict";
    n(10);
    var o = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "__proto__"];

    function r() {
        this.handlers = {}
    }
    r.prototype.add = function(t, e) {
        if ("string" != typeof t || -1 < o.indexOf(t)) throw Error("Invalid event: " + t);
        this.handlers[t] ? this.handlers[t].push(e) : this.handlers[t] = [e]
    }, r.prototype.handle = function(t, e) {
        var n = this.handlers[t],
            o = 0;
        if (n)
            for (var r = 0; r < n.length; r++) n[r](e), o += 1;
        return o
    }, e.a = r
}, function(t, e, n) {
    "use strict";
    n(18), n(25), n(17);
    var o = n(2),
        r = n(1),
        i = {
            production: {
                js: "https://js.squareup.com",
                service: "https://pci-connect.squareup.com"
            },
            sandbox: {
                js: "https://js.squareupsandbox.com",
                service: "https://pci-connect.squareupsandbox.com"
            },
            staging: {
                js: "https://js.squareupstaging.com",
                service: "https://pci-connect.squareupstaging.com"
            },
            development: {
                js: "http://localhost:3000",
                service: "http://localhost:3000"
            },
            test: {
                js: "http://localhost:9090",
                service: "http://localhost:9090"
            },
            mock: {
                js: "https://js.squareupstaging.com",
                service: "https://pci-connect.squareupstaging.com"
            }
        },
        a = {
            production: {
                env: "PRODUCTION"
            },
            sandbox: {
                env: "TEST"
            },
            staging: {
                env: "TEST"
            },
            development: {
                env: "TEST"
            },
            test: {
                env: "TEST"
            },
            mock: {
                env: "TEST"
            }
        };

    function s(t, e, n) {
        var r = "";
        return e ? (r = "?version=b321e83831", n = n || {}, Object.keys(n).forEach(function(t) {
            o.a.hasOwn(n, t) && (r += "&" + encodeURIComponent(t) + "=" + encodeURIComponent(n[t]))
        })) : r = e = "", encodeURI(t + e) + r
    }
    e.a = function(t) {
        i[t] || (t = "production");
        var e = i[t];
        return {
            name: t,
            googlePayEnv: a[t].env,
            masterpassJsUrl: function(e) {
                switch (t) {
                    case "development":
                    case "sandbox":
                    case "staging":
                    case "test":
                        return "https://sandbox.static.masterpass.com/integration/merchant.js";
                    case "mock":
                        return s(r.a.getParentOrigin(), "/mocks/masterpass/merchant.js");
                    case "production":
                    default:
                        return "https://static.masterpass.com/integration/merchant.js"
                }
            }(),
            jsUrl: function(t, n) {
                return s(e.js, t, n)
            },
            serviceUrl: function(t, n) {
                return s(e.service, t, n)
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    n(49), n(106), n(18), n(25), n(10), n(17);
    var o = n(0);

    function r(t, e) {
        return !!t.querySelector(e)
    }

    function i(t, e) {
        return void 0 !== t[e]
    }
    var a, s = n(2),
        c = n(1),
        l = n(13);

    function u(t) {
        this.options = t, this.env = this.options.env;
        var e = c.a.getWindow().performance;
        e && "function" == typeof e.getEntriesByType ? this.performance = e : this.performance = void 0
    }

    function p(t) {
        switch (t.initiatorType) {
            case "script":
                return /v2\/paymentform/.test(t.name);
            case "iframe":
                return /v2\/iframe/.test(t.name);
            default:
                return !1
        }
    }
    u.prototype.set = function(t, e) {
        this.options[t] = e
    }, u.prototype.collectLoadTiming = function(t) {
        var e = this._resources().filter(p),
            n = {
                t: t.tti
            };
        e.forEach(function(t) {
            var e = function(t) {
                    switch (a || (a = c.a.getDocument().createElement("a")), a.href = t, a.pathname) {
                        case "/v2/paymentform":
                            return "m";
                        case "/v2/iframe":
                            switch (!0) {
                                case /type=main/.test(a.search):
                                    return "f";
                                case /type=cardNumber/.test(a.search):
                                    return "n";
                                case /type=giftCard/.test(a.search):
                                    return "g";
                                case /type=cvv/.test(a.search):
                                    return "v";
                                case /type=expirationDate/.test(a.search):
                                    return "x";
                                case /type=postalCode/.test(a.search):
                                    return "p";
                                default:
                                    return "?"
                            }
                    }
                }(t.name),
                o = Math.round(t.duration);
            n[e] = o
        }), this._sendTimingEvent(0, n)
    }, u.prototype.collectNonceTiming = function(t, e) {
        var n = o.a.endpoints.CARD_NONCE + "\\?_=" + t,
            r = this._resources().filter(function(t, e) {
                switch (e.initiatorType) {
                    case "xmlhttprequest":
                        return new RegExp(t).test(e.name);
                    default:
                        return !1
                }
            }.bind(null, n)).pop();
        r || (r = {
            duration: Date.now() - e.startTime
        });
        var i = {
            d: Math.round(r.duration),
            e: "".concat(e.error || !1)
        };
        "boolean" == typeof e.validLuhn && (i.l = "".concat(e.validLuhn)), this._sendTimingEvent(1, i)
    }, u.prototype.collectConfiguration = function(t) {
        delete t.sessionId, delete t.errorLogger, t._env || delete t.env, delete t._env;
        var e = Object.keys(t).filter(function(e) {
                return !1 !== t[e]
            }),
            n = Object.keys(t).filter(function(e) {
                return !1 === t[e]
            }),
            o = Object.keys(t.callbacks).filter(function(e) {
                return "function" == typeof t.callbacks[e]
            });
        t.inputStyles && t.inputStyles.some(function(t) {
            if (t.mediaMinWidth || t.mediaMaxWidth) return e.push("mediaBreakpoints")
        });
        var a = function(t) {
                for (var e = i(t, "angular"), n = i(t, "getAllAngularRootElements"), o = e || n, a = i(t, "bootstrap"), s = i(t, "Ember"), c = i(t, "jQuery"), l = r(t.document, 'form[action*="paypal.com"]'), u = r(t.document, "[data-reactroot]"), p = i(t, "__NUXT__") || i(t, "$nuxt"), d = {
                        angular: o,
                        bootstrap: a,
                        ember: s,
                        jquery: c,
                        paypalBuyNow: l,
                        react: u,
                        vue: i(t, "Vue") || p
                    }, h = Object.keys(d), f = 0; f < h.length; f++) {
                    var y = h[f];
                    !0 !== d[y] && delete d[y]
                }
                return d
            }(c.a.getWindow()),
            s = Object.keys(a),
            l = {
                e: e.join(" "),
                d: n.join(" "),
                c: o.join(" "),
                l: s.join(" ")
            };
        this._sendConfigurationEvent(l)
    }, u.prototype.collectInstallmentsConfiguration = function(t) {
        var e = {
            m: t.modalType,
            c: t.isCustom,
            p: t.paymentRequest
        };
        this._sendInstallmentsConfigurationEvent(e)
    }, u.prototype._sendInstallmentsConfigurationEvent = function(t) {
        var e = this._createEvent(3, {
            i: t
        });
        l.a.post(this.env.serviceUrl(o.a.endpoints.V), {
            json: e
        })
    }, u.prototype._sendConfigurationEvent = function(t) {
        var e = this._createEvent(2, {
            c: t
        });
        l.a.post(this.env.serviceUrl(o.a.endpoints.V), {
            json: e
        })
    }, u.prototype._sendTimingEvent = function(t, e) {
        var n = this._createEvent(t, {
            l: e
        });
        l.a.post(this.env.serviceUrl(o.a.endpoints.V), {
            json: n
        })
    }, u.prototype._createEvent = function(t, e) {
        var n = {
            e: t,
            a: this.options.applicationId,
            o: this.options.locationId,
            q: this.options.accountId,
            n: this.options.sessionId,
            s: "SqPaymentForm",
            u: c.a.getWindow().location.href,
            v: c.a.getParentLocation().href,
            w: this.options.apiWrapper || ""
        };
        for (var o in e)
            if (s.a.hasOwn(e, o)) {
                if (n[o]) throw new Error("Field already used: " + o);
                n[o] = e[o]
            }
        return n
    }, u.prototype._resources = function() {
        return this.performance ? this.performance.getEntriesByType("resource") : []
    }, e.a = u
}, function(t, e, n) {
    var o = n(16),
        r = n(86)(!1);
    o(o.S, "Object", {
        values: function(t) {
            return r(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var o = n(5),
        r = n(19),
        i = n(27),
        a = n(50),
        s = n(33),
        c = n(9),
        l = n(38).f,
        u = n(46).f,
        p = n(7).f,
        d = n(75).trim,
        h = "Number",
        f = o[h],
        y = f,
        m = f.prototype,
        g = i(n(29)(m)) == h,
        v = "trim" in String.prototype,
        E = function(t) {
            var e = s(t, !1);
            if ("string" == typeof e && 2 < e.length) {
                var n, o, r, i = (e = v ? e.trim() : d(e, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === i) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            o = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            o = 8, r = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var a, c = e.slice(2), l = 0, u = c.length; l < u; l++)
                        if ((a = c.charCodeAt(l)) < 48 || r < a) return NaN;
                    return parseInt(c, o)
                }
            }
            return +e
        };
    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
        f = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof f && (g ? c(function() {
                m.valueOf.call(n)
            }) : i(n) != h) ? a(new y(E(e)), n, f) : E(e)
        };
        for (var b, S = n(6) ? l(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), I = 0; S.length > I; I++) r(y, b = S[I]) && !r(f, b) && p(f, b, u(y, b));
        (f.prototype = m).constructor = f, n(12)(o, h, f)
    }
}, function(t, e, n) {
    var o = n(16),
        r = n(28),
        i = n(9),
        a = n(76),
        s = "[" + a + "]",
        c = RegExp("^" + s + s + "*"),
        l = RegExp(s + s + "*$"),
        u = function(t, e, n) {
            var r = {},
                s = i(function() {
                    return !!a[t]() || "​" != "​" [t]()
                }),
                c = r[t] = s ? e(p) : a[t];
            n && (r[n] = c), o(o.P + o.F * s, "String", r)
        },
        p = u.trim = function(t, e) {
            return t = String(r(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(l, "")), t
        };
    t.exports = u
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, , function(t, e, n) {
    var o = n(24),
        r = n(58),
        i = n(37);
    t.exports = function(t) {
        var e = o(t),
            n = r.f;
        if (n)
            for (var a, s = n(t), c = i.f, l = 0; s.length > l;) c.call(t, a = s[l++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var o = n(27);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == o(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var o = n(21),
        r = n(57),
        i = n(81);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = o(e),
                l = r(c.length),
                u = i(a, l);
            if (t && n != n) {
                for (; u < l;)
                    if ((s = c[u++]) != s) return !0
            } else
                for (; u < l; u++)
                    if ((t || u in c) && c[u] === n) return t || u || 0; return !t && -1
        }
    }
}, function(t, e, n) {
    var o = n(43),
        r = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    var o = n(27);
    t.exports = Array.isArray || function(t) {
        return "Array" == o(t)
    }
}, function(t, e, n) {
    var o = n(7),
        r = n(11),
        i = n(24);
    t.exports = n(6) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, a = i(e), s = a.length, c = 0; c < s;) o.f(t, n = a[c++], e[n]);
        return t
    }
}, function(t, e, n) {
    var o = n(5).document;
    t.exports = o && o.documentElement
}, function(t, e, n) {
    var o = n(21),
        r = n(38).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == i.call(t) ? function(t) {
            try {
                return r(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : r(o(t))
    }
}, function(t, e, n) {
    var o = n(24),
        r = n(21),
        i = n(37).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, a = r(e), s = o(a), c = s.length, l = 0, u = []; l < c;) i.call(a, n = s[l++]) && u.push(t ? [n, a[n]] : a[n]);
            return u
        }
    }
}, function(t, e, n) {
    var o = n(4)("unscopables"),
        r = Array.prototype;
    null == r[o] && n(20)(r, o, {}), t.exports = function(t) {
        r[o][t] = !0
    }
}, function(t, e, n) {
    "use strict";
    var o = n(29),
        r = n(34),
        i = n(36),
        a = {};
    n(20)(a, n(4)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = o(a, {
            next: r(1, n)
        }), i(t, e + " Iterator")
    }
}, function(t, e, n) {
    var o = n(19),
        r = n(60),
        i = n(44)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var o = n(16),
        r = n(23),
        i = n(9);
    t.exports = function(t, e) {
        var n = (r.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), o(o.S + o.F * i(function() {
            n(1)
        }), "Object", a)
    }
}, function(t, e, n) {
    n(6) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(48)
    })
}, function(t, e, n) {
    n(39)("match", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var o = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o))
        }, n]
    })
}, function(t, e, n) {
    "use strict";
    var o = n(94)(!0);
    n(47)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = o(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    var o = n(43),
        r = n(28);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, s = String(r(e)),
                c = o(n),
                l = s.length;
            return c < 0 || l <= c ? t ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || 56319 < i || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || 57343 < a ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var o = n(96),
        r = n(68);
    t.exports = n(101)("Map", function(t) {
        return function() {
            return t(this, 0 < arguments.length ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = o.getEntry(r(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return o.def(r(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, o, !0)
}, function(t, e, n) {
    "use strict";
    var o = n(7).f,
        r = n(29),
        i = n(65),
        a = n(35),
        s = n(66),
        c = n(67),
        l = n(47),
        u = n(59),
        p = n(63),
        d = n(6),
        h = n(42).fastKey,
        f = n(68),
        y = d ? "_s" : "size",
        m = function(t, e) {
            var n, o = h(e);
            if ("F" !== o) return t._i[o];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, l) {
            var u = t(function(t, o) {
                s(t, u, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[y] = 0, null != o && c(o, n, t[l], t)
            });
            return i(u.prototype, {
                clear: function() {
                    for (var t = f(this, e), n = t._i, o = t._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                    t._f = t._l = void 0, t[y] = 0
                },
                delete: function(t) {
                    var n = f(this, e),
                        o = m(n, t);
                    if (o) {
                        var r = o.n,
                            i = o.p;
                        delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[y]--
                    }
                    return !!o
                },
                forEach: function(t) {
                    f(this, e);
                    for (var n, o = a(t, 1 < arguments.length ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (o(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!m(f(this, e), t)
                }
            }), d && o(u.prototype, "size", {
                get: function() {
                    return f(this, e)[y]
                }
            }), u
        },
        def: function(t, e, n) {
            var o, r, i = m(t, e);
            return i ? i.v = n : (t._l = i = {
                i: r = h(e, !0),
                k: e,
                v: n,
                p: o = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = i), o && (o.n = i), t[y]++, "F" !== r && (t._i[r] = i)), t
        },
        getEntry: m,
        setStrong: function(t, e, n) {
            l(t, e, function(t, n) {
                this._t = f(t, e), this._k = n, this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? u(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0, u(1))
            }, n ? "entries" : "values", !n, !0), p(e)
        }
    }
}, function(t, e, n) {
    var o = n(11);
    t.exports = function(t, e, n, r) {
        try {
            return r ? e(o(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && o(i.call(t)), e
        }
    }
}, function(t, e, n) {
    var o = n(30),
        r = n(4)("iterator"),
        i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (o.Array === t || i[r] === t)
    }
}, function(t, e, n) {
    var o = n(100),
        r = n(4)("iterator"),
        i = n(30);
    t.exports = n(23).getIteratorMethod = function(t) {
        if (null != t) return t[r] || t["@@iterator"] || i[o(t)]
    }
}, function(t, e, n) {
    var o = n(27),
        r = n(4)("toStringTag"),
        i = "Arguments" == o(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), r)) ? n : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    "use strict";
    var o = n(5),
        r = n(16),
        i = n(12),
        a = n(65),
        s = n(42),
        c = n(67),
        l = n(66),
        u = n(8),
        p = n(9),
        d = n(102),
        h = n(36),
        f = n(50);
    t.exports = function(t, e, n, y, m, g) {
        var v = o[t],
            E = v,
            b = m ? "set" : "add",
            S = E && E.prototype,
            I = {},
            _ = function(t) {
                var e = S[t];
                i(S, t, "delete" == t ? function(t) {
                    return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return g && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof E && (g || S.forEach && !p(function() {
                (new E).entries().next()
            }))) {
            var A = new E,
                C = A[b](g ? {} : -0, 1) != A,
                P = p(function() {
                    A.has(1)
                }),
                T = d(function(t) {
                    new E(t)
                }),
                O = !g && p(function() {
                    for (var t = new E, e = 5; e--;) t[b](e, e);
                    return !t.has(-0)
                });
            T || (((E = e(function(e, n) {
                l(e, E, t);
                var o = f(new v, e, E);
                return null != n && c(n, m, o[b], o), o
            })).prototype = S).constructor = E), (P || O) && (_("delete"), _("has"), m && _("get")), (O || C) && _(b), g && S.clear && delete S.clear
        } else E = y.getConstructor(e, t, m, b), a(E.prototype, n), s.NEED = !0;
        return h(E, t), I[t] = E, r(r.G + r.W + r.F * (E != v), I), g || y.setStrong(E, t, m), E
    }
}, function(t, e, n) {
    var o = n(4)("iterator"),
        r = !1;
    try {
        var i = [7][o]();
        i.return = function() {
            r = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[o]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, i[o] = function() {
                return a
            }, t(i)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var o = n(16),
        r = n(29),
        i = n(41),
        a = n(11),
        s = n(8),
        c = n(9),
        l = n(104),
        u = (n(5).Reflect || {}).construct,
        p = c(function() {
            function t() {}
            return !(u(function() {}, [], t) instanceof t)
        }),
        d = !c(function() {
            u(function() {})
        });
    o(o.S + o.F * (p || d), "Reflect", {
        construct: function(t, e) {
            i(t), a(e);
            var n = arguments.length < 3 ? t : i(arguments[2]);
            if (d && !p) return u(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var o = [null];
                return o.push.apply(o, e), new(l.apply(t, o))
            }
            var c = n.prototype,
                h = r(s(c) ? c : Object.prototype),
                f = Function.apply.call(t, h, e);
            return s(f) ? f : h
        }
    })
}, function(t, e, n) {
    "use strict";
    var o = n(41),
        r = n(8),
        i = n(105),
        a = [].slice,
        s = {};
    t.exports = Function.bind || function(t) {
        var e = o(this),
            n = a.call(arguments, 1),
            c = function() {
                var o = n.concat(a.call(arguments));
                return this instanceof c ? function(t, e, n) {
                    if (!(e in s)) {
                        for (var o = [], r = 0; r < e; r++) o[r] = "a[" + r + "]";
                        s[e] = Function("F,a", "return new F(" + o.join(",") + ")")
                    }
                    return s[e](t, n)
                }(e, o.length, o) : i(e, o, t)
            };
        return r(e.prototype) && (c.prototype = e.prototype), c
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var o = void 0 === n;
        switch (e.length) {
            case 0:
                return o ? t() : t.call(n);
            case 1:
                return o ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    n(39)("search", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var o = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o))
        }, n]
    })
}, function(t, e, n) {
    var o = n(16),
        r = n(108);
    o(o.S + o.F * (Number.parseFloat != r), "Number", {
        parseFloat: r
    })
}, function(t, e, n) {
    var o = n(5).parseFloat,
        r = n(75).trim;
    t.exports = 1 / o(n(76) + "-0") != -1 / 0 ? function(t) {
        var e = r(String(t), 3),
            n = o(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : o
}, , function(t, e, n) {
    "use strict";
    n.r(e), n(14), n(15), n(73), n(10), n(17), n(18), n(25), n(31), n(49);
    var o = n(69),
        r = n(3),
        i = n(70),
        a = n(0),
        s = n(1);

    function c(t, e, n) {
        this.type = t, this.options = e, this.callbacks = n, this.env = this.options.env, this.element = s.a.getDocument().createElement("iframe"), this.element.onload = this.onload.bind(this), this.setDefaultAttributes()
    }
    c.MIN_HEIGHT = 17, c.prototype.onload = function() {
        "function" == typeof this.callbacks.onload && this.callbacks.onload(this.type)
    }, c.prototype.destroy = function() {
        this.element.parentNode && ("main" === this.type ? this.element.parentNode.removeChild(this.element) : this.element.parentNode.replaceChild(this.originalElement, this.element)), this.originalElement = null, this.element = null
    }, c.prototype.setDefaultAttributes = function() {
        var t = this.element;
        t.setAttribute("id", this.options.elementId), t.setAttribute("name", this.name()), t.setAttribute("class", this.combinedClassName()), t.setAttribute("frameBorder", "0"), t.setAttribute("width", "100%"), t.setAttribute("scrolling", "no"), t.setAttribute("height", 17), t.setAttribute("src", this.iframeSRC()), "cardNumber" !== this.type && "main" !== this.type || t.setAttribute("allowPaymentRequest", !0), "main" === this.type && (t.setAttribute("width", "0"), t.setAttribute("height", "0"), t.setAttribute("style", "border: none !important; display: block !important; visibility: hidden !important"))
    }, c.prototype.combinedClassName = function() {
        var t = [];
        return this.options.inputClass && t.push(this.options.inputClass), this.options.inheritedClassName && t.push(this.options.inheritedClassName), t.join(" ")
    }, c.prototype.iframeSRC = function() {
        return this.env.serviceUrl(a.a.endpoints.IFRAME, this.queryParameters())
    }, c.prototype.queryParameters = function() {
        var t = {
            type: this.type
        };
        return "main" === this.type && (t.app_id = this.options.applicationId, this.options.locationId && (t.location_id = this.options.locationId), this.options.accountId && (t.account_id = this.options.accountId)), t
    }, c.prototype.addClass = function(t) {
        this.element.classList.add(t)
    }, c.prototype.removeClass = function(t) {
        this.element.classList.remove(t)
    }, c.prototype.focus = function() {
        this.element.focus()
    }, c.prototype.name = function() {
        return this.options.elementId
    };
    var l = c,
        u = n(72),
        p = n(2);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(74), n(107);
    var h = "SqLineItem";

    function f(t) {
        t && "object" === d(t) || (t = {}), this.data = {}, this.label = t.label, this.pending = t.pending, this.amount = t.amount
    }
    Object.defineProperty(f.prototype, "label", {
        get: function() {
            return this.data.label
        },
        set: function(t) {
            p.a.isValidDataType("label", h, t, String), this.data.label = t
        },
        enumerable: !0
    }), Object.defineProperty(f.prototype, "pending", {
        get: function() {
            return this.data.pending
        },
        set: function(t) {
            null != t && p.a.isValidDataType("pending", h, t, Boolean) && (this.data.pending = t)
        },
        enumerable: !0
    }), Object.defineProperty(f.prototype, "amount", {
        get: function() {
            return this.data.amount
        },
        set: function(t) {
            p.a.isValidDataType("amount", h, t, String), this.data.amount = t
        },
        enumerable: !0
    }), f.prototype.toApplePayLineItem = function() {
        return {
            label: this.data.label,
            type: this.data.pending ? "pending" : "final",
            amount: this.data.amount
        }
    }, f.prototype.toInstallmentsLineItem = function() {
        return {
            label: this.data.label,
            amount: this.data.amount,
            pending: this.data.pending
        }
    }, f.prototype.isValid = function() {
        if ("object" !== d(this.data) || "string" != typeof this.data.label || "string" != typeof this.data.amount) return !1;
        var t = Number.parseFloat(this.data.amount);
        return !isNaN(t) && (void 0 === this.data.pending || "boolean" == typeof this.data.pending)
    }, f.prototype.toBeacon = function() {
        return {
            l: this.data.label,
            a: this.data.amount,
            p: this.data.pending
        }
    };
    var y = f;

    function m(t) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function g(t) {
        t && "object" === m(t) || (t = {}), this.data = {}, this.id = t.id, this.label = t.label, this.amount = t.amount
    }
    Object.defineProperty(g.prototype, "id", {
        get: function() {
            return this.data.id
        },
        set: function(t) {
            this.data.id = t
        },
        enumerable: !0
    }), Object.defineProperty(g.prototype, "label", {
        get: function() {
            return this.data.label
        },
        set: function(t) {
            this.data.label = t
        },
        enumerable: !0
    }), Object.defineProperty(g.prototype, "amount", {
        get: function() {
            return this.data.amount
        },
        set: function(t) {
            this.data.amount = t
        },
        enumerable: !0
    }), g.prototype.toApplePay = function() {
        return {
            label: this.data.label,
            detail: "",
            amount: this.data.amount,
            identifier: this.data.id
        }
    }, g.fromApplePay = function(t) {
        return t ? new g({
            id: t.identifier,
            label: t.label,
            amount: t.amount
        }) : t
    };
    var v = g;

    function E(t) {
        return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var b = "PaymentDetailsUpdate",
        S = {
            addressLines: "addressLines",
            city: "locality",
            region: "administrativeArea",
            country: "countryCode",
            postalCode: "postalCode"
        };

    function I(t) {
        t && "object" === E(t) || (t = {}), this.data = {}, this.error = t.error, this.shippingContactErrors = t.shippingContactErrors, this.total = t.total, this.lineItems = t.lineItems, this.shippingOptions = t.shippingOptions
    }
    Object.defineProperty(I.prototype, "error", {
        get: function() {
            return this.data.error
        },
        set: function(t) {
            t && p.a.isValidDataType("error", b, t, String) && (this.data.error = t)
        },
        enumerable: !0
    }), Object.defineProperty(I.prototype, "shippingContactErrors", {
        get: function() {
            return this.data.shippingContactErrors
        },
        set: function(t) {
            t && p.a.isValidDataType("shippingContactErrors", b, t, Object) && (this.data.shippingContactErrors = t)
        },
        enumerable: !0
    }), Object.defineProperty(I.prototype, "total", {
        get: function() {
            return this.data.total
        },
        set: function(t) {
            t && p.a.isValidDataType("total", b, t, Object) && (this.data.total = new y(t))
        },
        enumerable: !0
    }), Object.defineProperty(I.prototype, "lineItems", {
        get: function() {
            return this.data.lineItems
        },
        set: function(t) {
            t && p.a.isValidDataType("lineItems", b, t, Array) && (this.data.lineItems = t.map(function(t) {
                return new y(t)
            }))
        },
        enumerable: !0
    }), Object.defineProperty(I.prototype, "shippingOptions", {
        get: function() {
            return this.data.shippingOptions
        },
        set: function(t) {
            t && p.a.isValidDataType("shippingOptions", b, t, Array) && (this.data.shippingOptions = t.map(function(t) {
                return new v(t)
            }))
        },
        enumerable: !0
    }), I.prototype.toApplePayShippingContactUpdate = function(t) {
        return {
            errors: this._toApplePayErrors(),
            newShippingMethods: this._toApplePayShippingMethods(t.shippingMethods),
            newTotal: this._toApplePayTotal(t.total),
            newLineItems: this._toApplePayLineItems(t.lineItems)
        }
    }, I.prototype.toCompleteShippingContactSelectionInputs = function(t) {
        return {
            status: this._toApplePayStatusCode(),
            newShippingMethods: this._toApplePayShippingMethods(t.shippingMethods),
            newTotal: this._toApplePayTotal(t.total),
            newLineItems: this._toApplePayLineItems(t.lineItems)
        }
    }, I.prototype.toApplePayShippingMethodUpdate = function(t) {
        return {
            newTotal: this._toApplePayTotal(t.total),
            newLineItems: this._toApplePayLineItems(t.lineItems)
        }
    }, I.prototype.toCompleteShippingMethodSelectionInputs = function(t) {
        return {
            status: ApplePaySession.STATUS_SUCCESS,
            newTotal: this._toApplePayTotal(t.total),
            newLineItems: this._toApplePayLineItems(t.lineItems)
        }
    }, I.prototype._toApplePayErrors = function() {
        var t = [];
        for (var e in this.data.error && t.push(new ApplePayError("addressUnserviceable", "postalAddress", this.data.error)), this.data.shippingContactErrors)
            if (p.a.hasOwn(this.data.shippingContactErrors, e)) {
                var n = S[e] || "postalAddress";
                t.push(new ApplePayError("shippingContactInvalid", n, this.data.shippingContactErrors[e]))
            }
        return t
    }, I.prototype._toApplePayStatusCode = function() {
        return this.data.error || this.data.shippingContactErrors ? ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS : ApplePaySession.STATUS_SUCCESS
    }, I.prototype._toApplePayShippingMethods = function(t) {
        return this.data.shippingOptions ? this.data.shippingOptions.map(function(t) {
            return t.toApplePay()
        }) : t
    }, I.prototype._toApplePayTotal = function(t) {
        return this.data.total ? this.data.total.toApplePayLineItem() : t || (s.a.getWindow().console.error("Field `total` in PaymentDetailsUpdate is required."), null)
    }, I.prototype._toApplePayLineItems = function(t) {
        return this.data.lineItems ? this.data.lineItems.map(function(t) {
            return t.toApplePayLineItem()
        }) : t
    }, I.prototype.toInstallments = function() {
        var t = {};
        return this.data.total && (t.total = this.data.total.toInstallmentsLineItem()), this.data.lineItems && (t.lineItems = this.data.lineItems.map(function(t) {
            return t.toInstallmentsLineItem()
        })), t
    }, I.prototype.isValid = function() {
        var t = [];
        return this.data.total && this.data.total.isValid() || t.push("total"), this.data.lineItems && this.data.lineItems.some(function(e) {
            if (!e.isValid()) return t.push("lineItems")
        }), !(0 < t.length && (p.a.logInvalidFieldsError("PaymentDetailsUpdate", t), 1))
    };
    var _ = I,
        A = n(22);

    function C(t) {
        return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var P = "SqPaymentRequest";

    function T(t) {
        t && "object" === C(t) || (t = {}), this.data = {}, this.currencyCode = t.currencyCode, this.countryCode = t.countryCode, this.total = t.total, this.shippingContact = t.shippingContact, this.shippingOptions = t.shippingOptions, this.lineItems = t.lineItems, this.requestShippingAddress = t.requestShippingAddress, this.requestBillingInfo = t.requestBillingInfo
    }
    Object.defineProperty(T.prototype, "currencyCode", {
        get: function() {
            return this.data.currencyCode
        },
        set: function(t) {
            t && p.a.isValidDataType("currencyCode", P, t, String) && (this.data.currencyCode = t)
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "countryCode", {
        get: function() {
            return this.data.countryCode
        },
        set: function(t) {
            t && p.a.isValidDataType("countryCode", P, t, String) && (this.data.countryCode = t)
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "total", {
        get: function() {
            return this.data.total
        },
        set: function(t) {
            t && p.a.isValidDataType("total", P, t, Object) && (this.data.total = new y(t))
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "shippingContact", {
        get: function() {
            return this.data.shippingContact
        },
        set: function(t) {
            t && p.a.isValidDataType("shippingContact", P, t, Object) && (this.data.shippingContact = new A.a(t))
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "shippingOptions", {
        get: function() {
            return this.data.shippingOptions
        },
        set: function(t) {
            t && p.a.isValidDataType("shippingOptions", P, t, Array) && (this.data.shippingOptions = t.map(function(t) {
                return new v(t)
            }))
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "lineItems", {
        get: function() {
            return this.data.lineItems
        },
        set: function(t) {
            t && p.a.isValidDataType("lineItems", P, t, Array) && (this.data.lineItems = t.map(function(t) {
                return new y(t)
            }))
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "requestShippingAddress", {
        get: function() {
            return this.data.requestShippingAddress
        },
        set: function(t) {
            null != t && p.a.isValidDataType("requestShippingAddress", P, t, Boolean) && (this.data.requestShippingAddress = t)
        },
        enumerable: !0
    }), Object.defineProperty(T.prototype, "requestBillingInfo", {
        get: function() {
            return this.data.requestBillingInfo
        },
        set: function(t) {
            null != t && p.a.isValidDataType("requestBillingInfo", P, t, Boolean) && (this.data.requestBillingInfo = t)
        },
        enumerable: !0
    }), T.prototype.toApplePay = function() {
        var t = {
            currencyCode: this.data.currencyCode,
            countryCode: this.data.countryCode,
            supportedNetworks: ["visa", "masterCard", "discover", "amex"],
            merchantCapabilities: ["supports3DS"],
            requiredBillingContactFields: ["postalAddress"]
        };
        return this.data.total && (t.total = this.data.total.toApplePayLineItem()), this.data.shippingContact instanceof A.a && (t.shippingContact = this.data.shippingContact.toApplePay()), this.data.shippingOptions ? t.shippingMethods = this.data.shippingOptions.map(function(t) {
            return t.toApplePay()
        }) : t.shippingMethods = [], this.data.lineItems ? t.lineItems = this.data.lineItems.map(function(t) {
            return t.toApplePayLineItem()
        }) : t.lineItems = [], this.data.requestBillingInfo && (t.requiredShippingContactFields = ["email", "name", "phone"]), this.data.requestShippingAddress && (t.requiredShippingContactFields = ["postalAddress", "name", "email", "phone"]), t
    }, T.prototype.toGooglePay = function(t) {
        var e = t.buildBaseConfiguration();
        return e.transactionInfo = {
            totalPriceStatus: this.data.total.pending ? "ESTIMATED" : "FINAL",
            totalPrice: this.data.total.amount,
            currencyCode: this.data.currencyCode || "USD"
        }, e.emailRequired = !!this.data.requestShippingAddress, e.shippingAddressRequired = !!this.data.requestShippingAddress, e.shippingAddressParameters = {
            phoneNumberRequired: !!this.data.requestShippingAddress
        }, e.allowedPaymentMethods[0].parameters.billingAddressParameters = {
            format: "MIN",
            phoneNumberRequired: !!this.data.requestBillingInfo
        }, e
    }, T.prototype.toInstallments = function() {
        var t = {
            currencyCode: this.data.currencyCode,
            countryCode: this.data.countryCode,
            total: this.data.total.toInstallmentsLineItem()
        };
        return this.data.lineItems ? t.lineItems = this.data.lineItems.map(function(t) {
            return t.toInstallmentsLineItem()
        }) : t.lineItems = [], t
    }, T.prototype.isValid = function() {
        var t = [];
        return "US" !== this.data.countryCode && t.push("countryCode"), "USD" !== this.data.currencyCode && t.push("currencyCode"), "object" === C(this.data.total) && this.data.total.isValid() || t.push("total"), this.data.lineItems && this.data.lineItems.some(function(e) {
            if (!e.isValid()) return t.push("lineItems")
        }), !(0 < t.length && (p.a.logInvalidFieldsError("PaymentRequest", t), 1))
    }, T.prototype.toBeacon = function() {
        var t = {
            o: this.data.countryCode,
            u: this.data.currencyCode,
            t: this.data.total.toBeacon()
        };
        return this.data.lineItems && (t.l = this.data.lineItems.map(function(t) {
            return t.toBeacon()
        })), t
    };
    var O = T;

    function N(t) {
        if (this.controller = t, this.options = t.options, this.callbacks = t.callbacks, this.controller.enabledDigitalWallets.indexOf(a.a.wallets.APPLE_PAY) < 0) this.controller.enableMethod(a.a.wallets.APPLE_PAY, !1);
        else if ("undefined" != typeof ApplePaySession)
            if (this.isConfigValid()) {
                var e = this;
                this.applePayVersion = this.getSupportedApplePayVersion(), this.selectedShippingOption = null, this.validityPromise = ApplePaySession.canMakePaymentsWithActiveCard(this.getApplePayMerchantId()).then(function(t) {
                    if (t) {
                        var n = e.options.applePay.elementId;
                        s.a.getDocument().getElementById(n).addEventListener("click", e.requestPayment.bind(e)), e.controller.messageHandlers.add(a.a.events.RECEIVE_APPLE_PAY_VALID_MERCHANT, e.receiveApplePayValidMerchant.bind(e)), e.controller.messageHandlers.add(a.a.events.RECEIVE_APPLE_PAY_CARD_NONCE, e.receiveApplePayCardNonce.bind(e)), e.controller.sendEvent(a.a.events.LOAD_WALLET, a.a.wallets.APPLE_PAY), e.controller.enableMethod(a.a.wallets.APPLE_PAY, !0)
                    } else e.controller.enableMethod(a.a.wallets.APPLE_PAY, !1)
                }).catch(function() {
                    e.controller.enableMethod(a.a.wallets.APPLE_PAY, !1)
                })
            } else this.controller.enableMethod(a.a.wallets.APPLE_PAY, !1);
        else this.controller.enableMethod(a.a.wallets.APPLE_PAY, !1)
    }
    N.prototype.isConfigValid = function() {
        if (!this.options.applePay || "function" != typeof this.callbacks.createPaymentRequest || "function" != typeof this.callbacks.cardNonceResponseReceived) return !1;
        var t = this.options.applePay.elementId;
        if (!s.a.getDocument().getElementById(t)) throw new r.a(t);
        if (!this.options.locationId && !this.options.accountId) throw new r.h("locationId");
        if ("function" == typeof this.callbacks.validateShippingContact && "function" == typeof this.callbacks.shippingContactChanged) throw new r.k;
        return !0
    }, N.prototype.requestPayment = function() {
        if (!this.session) {
            var t = new O(this.callbacks.createPaymentRequest());
            this.applePayPaymentRequest = t.toApplePay(), t.shippingOptions && (this.selectedShippingOption = t.shippingOptions[0]), this.session = new ApplePaySession(this.applePayVersion, this.applePayPaymentRequest);
            var e = this;
            this.session.onvalidatemerchant = function(t) {
                e.requestApplePayMerchantValidity(t.validationURL, e.applePayPaymentRequest)
            }, "function" == typeof this.callbacks.shippingContactChanged ? this.session.onshippingcontactselected = function(t) {
                e._shippingContactChanged(t.shippingContact, e.applePayPaymentRequest)
            } : "function" == typeof this.callbacks.validateShippingContact && (this.session.onshippingcontactselected = function(t) {
                e._validateShippingContact(t.shippingContact, e.applePayPaymentRequest)
            }), this.session.onshippingmethodselected = function(t) {
                e.selectedShippingOption = v.fromApplePay(t.shippingMethod), e._shippingOptionChanged(e.selectedShippingOption, e.applePayPaymentRequest)
            }, this.session.onpaymentauthorized = function(t) {
                e.requestApplePayCardNonce(t.payment)
            }, this.session.oncancel = function() {
                delete e.session
            }, this.session.begin()
        }
    }, N.prototype._shippingContactChanged = function(t, e) {
        var n = this,
            o = n.applePayVersion < 3 ? function(t) {
                var o = new _(t);
                n.selectedShippingOption = n.getDefaultShippingOption(o);
                var r = o.toCompleteShippingContactSelectionInputs(e);
                n.updateApplePayPaymentRequest(r), n.session.completeShippingContactSelection(r.status, r.newShippingMethods, r.newTotal, r.newLineItems)
            } : function(t) {
                var o = new _(t);
                n.selectedShippingOption = n.getDefaultShippingOption(o);
                var r = o.toApplePayShippingContactUpdate(e);
                n.updateApplePayPaymentRequest(r), n.session.completeShippingContactSelection(r)
            };
        this.callbacks.shippingContactChanged(A.a.fromApplePay(t), o)
    }, N.prototype._validateShippingContact = function(t, e) {
        var n = "function" == typeof this.callbacks.validateShippingContact && this.callbacks.validateShippingContact(A.a.legacyFromApplePay(t));
        if (this.applePayVersion < 3) {
            var o = n ? ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS : ApplePaySession.STATUS_SUCCESS;
            this.session.completeShippingContactSelection(o, [], e.total, [])
        } else {
            var r = n ? [new ApplePayError("shippingContactInvalid", "postalAddress", "Incorrect address")] : [];
            this.session.completeShippingContactSelection({
                errors: r,
                newTotal: e.total
            })
        }
    }, N.prototype._shippingOptionChanged = function(t, e) {
        var n = this,
            o = n.applePayVersion < 3 ? function(t) {
                var o = new _(t).toCompleteShippingMethodSelectionInputs(e);
                n.updateApplePayPaymentRequest(o), n.session.completeShippingMethodSelection(o.status, o.newTotal, o.newLineItems)
            } : function(t) {
                var o = new _(t).toApplePayShippingMethodUpdate(e);
                n.updateApplePayPaymentRequest(o), n.session.completeShippingMethodSelection(o)
            };
        "function" == typeof this.callbacks.shippingOptionChanged ? this.callbacks.shippingOptionChanged(t, o) : o()
    }, N.prototype.requestApplePayMerchantValidity = function(t, e) {
        var n = e && e.total ? e.total.label : null;
        if (this.options.accountId && !n) throw new r.i;
        this.controller.sendEvent(a.a.events.REQUEST_APPLE_PAY_MERCHANT_VALIDITY, {
            client_id: this.options.applicationId,
            location_id: this.options.locationId,
            account_id: this.options.accountId,
            merchant_name: n,
            validation_url: t,
            source_url: s.a.getWindow().location.href
        })
    }, N.prototype.receiveApplePayValidMerchant = function(t) {
        var e = {
            detail: "Unable to start Apple Pay session."
        };
        if (void 0 !== this.session) {
            if (t.payload.error) return this.callbacks.cardNonceResponseReceived([e]), void this.session.abort();
            var n;
            try {
                t.payload.session && (n = JSON.parse(t.payload.session))
            } catch (t) {
                this.options.errorLogger.capture(t)
            }
            n ? this.session.completeMerchantValidation(n) : (this.callbacks.cardNonceResponseReceived([e]), this.session.abort())
        }
    }, N.prototype.requestApplePayCardNonce = function(t) {
        this.controller.sendEvent(a.a.events.REQUEST_APPLE_PAY_CARD_NONCE, {
            client_id: this.options.applicationId,
            applepay_data: t
        })
    }, N.prototype.receiveApplePayCardNonce = function(t) {
        var e = t.payload.nonceResponse;
        if (e.errors) return this.session.completePayment(this.session.STATUS_FAILURE), this.controller.callbacks.cardNonceResponseReceived(e.errors), delete this.session, !1;
        this.session.completePayment(this.session.STATUS_SUCCESS);
        var n = A.a.legacyFromApplePay(e.card.contact),
            o = A.a.legacyFromApplePay(e.shipping_contact);
        delete e.card.contact, this.controller.callbacks.cardNonceResponseReceived(null, e.card_nonce, e.card, n, o, this.selectedShippingOption), delete this.session
    }, N.prototype.getApplePayMerchantId = function() {
        var t = this.options.applicationId,
            e = s.a.getParentLocation().hostname;
        return /(squareupstaging|squareupsandbox)\.com$/.test(e) ? t = "merchant.com.squareup.sdktest" : /squareup\.com$/.test(e) && (t = "merchant.com.squareup.sdk"), t
    }, N.prototype.getSupportedApplePayVersion = function() {
        for (var t = 3; 0 < t && !ApplePaySession.supportsVersion(t);) t--;
        return t
    }, N.prototype.getDefaultShippingOption = function(t) {
        return t.error || t.shippingContactErrors || !t.shippingOptions ? null : t.shippingOptions[0]
    }, N.prototype.updateApplePayPaymentRequest = function(t) {
        t.newTotal && (this.applePayPaymentRequest.total = t.newTotal), t.newLineItems && (this.applePayPaymentRequest.lineItems = t.newLineItems), t.newShippingMethods && (this.applePayPaymentRequest.shippingMethods = t.newShippingMethods)
    };
    var L = N;

    function w(t) {
        this.controller = t, this.options = t.options, this.callbacks = t.callbacks, this.token = null, this.jsLoaded = null, this.enableMethodCalled = !1, this.controller.enabledDigitalWallets.indexOf(a.a.wallets.GOOGLE_PAY) < 0 ? this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !1) : (this._validateConfig(), this.fetchGooglePayJs(), this.controller.messageHandlers.add(a.a.events.RECEIVE_GOOGLE_PAY_CARD_NONCE, this.receiveGooglePayCardNonce.bind(this)), this.controller.messageHandlers.add(a.a.events.RECEIVE_GOOGLE_PAY_TOKEN, this.receiveGooglePayToken.bind(this)), this.controller.sendEvent(a.a.events.LOAD_WALLET, a.a.wallets.GOOGLE_PAY))
    }
    w.prototype._validateConfig = function() {
        if (this.options.googlePay && "function" == typeof this.callbacks.createPaymentRequest && "function" == typeof this.callbacks.cardNonceResponseReceived) {
            var t = this.options.googlePay.elementId;
            if (this.element = s.a.getDocument().getElementById(t), !this.element) throw new r.a(t);
            if (this.gatewayMerchantId = this.options.locationId || this.options.accountId, !this.gatewayMerchantId) throw new r.h("locationId")
        } else this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !1)
    }, w.prototype.fetchGooglePayJs = function() {
        var t = s.a.getDocument().createElement("script");
        t.onload = this.googlePayJsFetched.bind(this), t.src = a.a.GOOGLE_PAY_JS, s.a.getDocument().body.appendChild(t)
    }, w.prototype.googlePayJsFetched = function() {
        if ("undefined" != typeof google) {
            this.paymentsClient = new google.payments.api.PaymentsClient({
                environment: this.options.env.googlePayEnv
            });
            var t = this.googlePayLoaded.bind(this);
            this.paymentsClient.isReadyToPay(this.buildBaseConfiguration()).then(function(e) {
                e.result ? t(!0) : t(!1)
            }).catch(function() {
                t(!1)
            })
        } else this.googlePayLoaded(!1)
    }, w.prototype.googlePayLoaded = function(t) {
        this.jsLoaded = t, this.tryEnablingGooglePay()
    }, w.prototype.tryEnablingGooglePay = function() {
        !0 !== this.enableMethodCalled && (!1 === this.jsLoaded ? (this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !1), this.enableMethodCalled = !0) : !0 === this.jsLoaded && null !== this.token && (this.element.addEventListener("click", this.requestPayment.bind(this)), this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !0), this.enableMethodCalled = !0))
    }, w.prototype.requestPayment = function() {
        var t = new O(this.callbacks.createPaymentRequest()).toGooglePay(this);
        t.merchantInfo = {
            merchantId: "05498866192997955200",
            authJwt: this.token
        };
        var e = this.requestGooglePayCardNonce.bind(this);
        this.paymentsClient.loadPaymentData(t).then(function(n) {
            n.apiVersion === t.apiVersion && n.apiVersionMinor === t.apiVersionMinor && e(n)
        }).catch(function() {})
    }, w.prototype.receiveGooglePayToken = function(t) {
        var e = t.payload;
        e.errors || (this.token = e.token, this.tryEnablingGooglePay())
    }, w.prototype.requestGooglePayCardNonce = function(t) {
        this.controller.sendEvent(a.a.events.REQUEST_GOOGLE_PAY_CARD_NONCE, {
            googlepay_data: t
        })
    }, w.prototype.receiveGooglePayCardNonce = function(t) {
        var e = t.payload;
        if (e.errors) this.callbacks.cardNonceResponseReceived(e.errors);
        else {
            var n = A.a.fromGooglePay(e.billing_contact),
                o = A.a.fromGooglePay(e.shipping_contact);
            this.callbacks.cardNonceResponseReceived(null, e.card_nonce, e.card, n, o)
        }
    }, w.prototype.buildBaseConfiguration = function() {
        return {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [{
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"],
                    billingAddressRequired: !0
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "square",
                        gatewayMerchantId: this.gatewayMerchantId
                    }
                }
            }]
        }
    };
    var R = w;

    function M(t) {
        if (this.controller = t, this.options = t.options, this.controller.enabledDigitalWallets.indexOf(a.a.wallets.MASTERPASS) < 0) this.controller.enableMethod(a.a.wallets.MASTERPASS, !1);
        else if (this.options.masterpass && "function" == typeof this.controller.callbacks.createPaymentRequest && "function" == typeof this.controller.callbacks.cardNonceResponseReceived) {
            var e = this.options.masterpass.elementId;
            if (this.element = s.a.getDocument().getElementById(e), !this.element) throw new r.a(e);
            this.checkoutId = "", this.cartId = "", this.masterpassWindow = null, this.controller.messageHandlers.add(a.a.events.RECEIVE_MASTERPASS_TRANSACTION, this.receiveTransaction.bind(this)), this.controller.messageHandlers.add(a.a.events.SET_MASTERPASS_CHECKOUT_ID, this.setCheckoutId.bind(this)), this.controller.sendEvent(a.a.events.LOAD_WALLET, a.a.wallets.MASTERPASS)
        } else this.controller.enableMethod(a.a.wallets.MASTERPASS, !1)
    }
    M.prototype.setCheckoutId = function(t) {
        this.checkoutId = t.checkoutId, this.element.addEventListener("click", this._requestPayment.bind(this)), this.controller.enableMethod(a.a.wallets.MASTERPASS, !0)
    }, M.prototype._requestPayment = function() {
        if (!this.masterpassWindow || this.masterpassWindow.closed) {
            var t = this.controller.callbacks.createPaymentRequest();
            this.cartId = p.a.guid();
            var e = s.a.getWindow().screen.width / 2 - 510,
                n = s.a.getWindow().screen.height / 2 - 450;
            this.masterpassWindow = s.a.getWindow().open("", "Masterpass", "width=1000,height=800,left=" + e + ",top=" + n + ",screenX=" + e + ",screenY=" + n + ",toolbar=no,menubar=no,scrollbars=no,location=yes,directories=no");
            var o = this.masterpassWindow.document;
            this._buildWindowContent(this.options.env, t, o)
        } else this.masterpassWindow.focus()
    }, M.prototype._buildWindowContent = function(t, e, n) {
        var o = e.total.amount,
            r = e.currencyCode,
            i = t.serviceUrl(a.a.endpoints.MASTERPASS_CALLBACK, {
                "formId": this.controller.formId
            }),
            s = {
                checkoutId: this.checkoutId,
                allowedCardTypes: ["visa", "masterCard", "discover", "amex"],
                amount: o,
                currency: r,
                suppress3Ds: !1,
                suppressShippingAddress: !e.requestShippingAddress,
                cartId: this.cartId,
                callbackUrl: i
            },
            c = n.createElement("script");
        c.setAttribute("type", "text/javascript"), c.innerText = "function start() { masterpass.checkout(".concat(JSON.stringify(s), "); }");
        var l = n.createElement("script");
        l.setAttribute("type", "text/javascript"), l.setAttribute("src", t.masterpassJsUrl), l.setAttribute("onload", "start()");
        var u = n.createElement("body");
        u.appendChild(c), u.appendChild(l), n.body = u
    }, M.prototype.receiveTransaction = function(t) {
        this.masterpassWindow && (this.masterpassWindow.close(), this.masterpassWindow = null);
        var e = t.payload;
        if ("success" !== e.status) return !1;
        this.controller.sendEvent(a.a.events.REQUEST_MASTERPASS_CARD_NONCE, {
            client_id: this.options.applicationId,
            masterpass_data: {
                transaction_id: e.transactionId,
                cart_id: this.cartId
            }
        })
    };
    var D = M,
        k = (n(51), "installments"),
        F = {
            CHECKOUT: "checkout",
            CART: "cart",
            PRODUCT_DETAIL: "productDetail"
        },
        j = "VALIDATION_ERROR",
        q = {
            INSTALLMENTS_APPLICATION_INELIGIBLE: {
                type: "INSTALLMENTS_APPLICATION_INELIGIBLE",
                message: "The merchant or this transaction is not eligible for Installments"
            },
            INSTALLMENTS_APPLICATION_DECLINED: {
                type: "INSTALLMENTS_APPLICATION_DECLINED",
                message: "The buyer Installments application was declined"
            },
            INSTALLMENTS_APPLICATION_CANCELLED: {
                type: "INSTALLMENTS_APPLICATION_CANCELLED",
                message: "The buyer cancelled the Installments application"
            },
            PAYMENT_DETAILS_UPDATE_INVALID: {
                type: "PAYMENT_DETAILS_UPDATE_INVALID",
                message: "The payment details update object provided is invalid"
            },
            INSTALLMENTS_NOT_READY: {
                type: "INSTALLMENTS_NOT_READY",
                message: "Installments has not finished loading"
            },
            UNKNOWN: {
                type: "UNKNOWN",
                message: "An unknown error has occurred"
            }
        },
        x = {
            VERSION: "0.1.3",
            SRI: "sha256-XZOaA97xF5EHva5baT2B6LXnkfix1TV0z9PLHUx7MmY= sha384-Y4N9cDFaj6tusFLeOOdrqjk/co7KT/3acK5nD7ExFrt//Tq/y7GjRCM8/XtgeKd1 sha512-VG8Wk68zafFEfDSXOMaxQKvWNHzod5XSTkfsCQiSvPHJbsPJ5Ahx1TTyR++JUzcchiMhHLPFXwzh29qryQ4snw=="
        },
        G = {
            VERSION: "0.1.3",
            SRI: "sha256-sq0X7vnWVrzVF/WQrPtV75ps6IL+NX0mQUNs0JTQJGg= sha384-TO9TkCS3K1cdtcbId7Wt1rkCYxmQdrjmQGIYfNb7dTgIs7/4Lb4B/LPc7dEjuLQx sha512-oa6v9wAU9xH0DtMB/FN4fm71Wb2SfdwghKtabMnENBopBT02n4y+ZE8pH/agvC1m2XChppe2KpEV19KFjAxJEA=="
        };

    function U(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function V(t) {
        var e;
        this.controller = t, this.options = t.options, this.callbacks = t.callbacks, this.instEnv = (e = this.options.env, {
            URL: function(t) {
                switch (e.name) {
                    case "development":
                    case "sandbox":
                    case "staging":
                    case "test":
                    case "mock":
                        return "https://installments-ad-production-f.squarecdn.com/staging/capital-installments-staging-".concat(G.VERSION, ".js");
                    case "production":
                    default:
                        return "https://installments-ad-production-f.squarecdn.com/production/capital-installments-production-".concat(x.VERSION, ".js")
                }
            }(),
            SRI: function(t) {
                switch (e.name) {
                    case "development":
                    case "sandbox":
                    case "staging":
                    case "test":
                    case "mock":
                        return G.SRI;
                    case "production":
                    default:
                        return x.SRI
                }
            }()
        }), this.telemetry = t.telemetry, this._validateOptions() && this._fetchInstallmentsPayJs()
    }
    V.prototype._validateOptions = function() {
        if (!this.options.installments || "function" != typeof this.callbacks.createPaymentRequest || "function" != typeof this.callbacks.cardNonceResponseReceived) return this._enableInstallmentsMethod(!1), !1;
        if (!this.options.locationId) throw new r.h("locationId");
        if (this.modalType = this.options.installments.modalType || F.CHECKOUT, -1 === Object.values(F).indexOf(this.modalType)) throw new r.g("installments.modalType");
        return !0
    }, V.prototype._fetchInstallmentsPayJs = function() {
        var t = s.a.getDocument().createElement("script");
        t.onload = this._installmentsPayJsFetched.bind(this), t.onerror = function() {
            this._enableInstallmentsMethod(!1)
        }.bind(this), t.src = this.instEnv.URL, t.integrity = this.instEnv.SRI, t.crossOrigin = "anonymous", s.a.getDocument().body.appendChild(t)
    }, V.prototype._installmentsPayJsFetched = function() {
        "undefined" != typeof CapitalInstallments ? this._enableInstallments() : this._enableInstallmentsMethod(!1)
    }, V.prototype._enableInstallments = function() {
        var t = this,
            e = new O(this.callbacks.createPaymentRequest());
        if (e.isValid()) {
            var n = e.toInstallments();
            this.telemetry.collectInstallmentsConfiguration({
                modalType: this.modalType,
                isCustom: !0,
                paymentRequest: e.toBeacon()
            });
            try {
                this.capitalClient = new CapitalInstallments({
                    applicationId: this.options.applicationId,
                    locationId: this.options.locationId,
                    config: {
                        modalType: this.modalType
                    },
                    paymentRequest: n,
                    onNonceResponse: this._nonceResponseReceived.bind(this)
                })
            } catch (e) {
                if (this._enableInstallmentsMethod(!1), e.type === j) {
                    var o = [];
                    e.validationErrors.forEach(function(t) {
                        var e = t.attribute.split(".");
                        "paymentRequest" === e[0] && 2 === e.length && o.push(e[1])
                    }), 0 < o.length && p.a.logInvalidFieldsError("PaymentRequest", o)
                }
                return
            }
            this.capitalClient.load(), this.capitalClient.checkMerchantEligibility().then(function(e) {
                e.success ? t._enableInstallmentsMethod(!0) : t._enableInstallmentsMethod(!1)
            }).catch(function() {
                t._enableInstallmentsMethod(!1)
            })
        } else this._enableInstallmentsMethod(!1)
    }, V.prototype.updatePaymentDetails = function(t, e) {
        if (this.capitalClient) {
            var n = new _(t);
            if (n.isValid()) {
                var o = n.toInstallments();
                this.capitalClient.updatePaymentRequest(o).then(function(t) {
                    t.eligible ? e(null, !0) : e([q.INSTALLMENTS_APPLICATION_INELIGIBLE], !1)
                }).catch(function(t) {
                    switch (t.type) {
                        case j:
                            return void e([q.PAYMENT_DETAILS_UPDATE_INVALID], !1);
                        default:
                            return void e([q.UNKNOWN], !1)
                    }
                })
            } else e([q.PAYMENT_DETAILS_UPDATE_INVALID], !1)
        } else e([q.INSTALLMENTS_NOT_READY], !1)
    }, V.prototype.getInstallmentsPricing = function(t) {
        this.capitalClient ? this.capitalClient.getPricing().then(function(e) {
            t(null, e)
        }).catch(function(e) {
            "FINANCING_NOT_AVAILABLE" !== e.type ? t([q.UNKNOWN]) : t([q.INSTALLMENTS_APPLICATION_INELIGIBLE])
        }) : t([q.INSTALLMENTS_NOT_READY])
    }, V.prototype.showInstallmentsModal = function() {
        var t = this;
        this.capitalClient ? this.capitalClient.showModal().catch(function(e) {
            "MERCHANT_NOT_ELIGIBLE" !== e.type ? t.callbacks.cardNonceResponseReceived([q.UNKNOWN]) : t.callbacks.cardNonceResponseReceived([q.INSTALLMENTS_APPLICATION_INELIGIBLE])
        }) : this.callbacks.cardNonceResponseReceived([q.INSTALLMENTS_NOT_READY])
    }, V.prototype._nonceResponseReceived = function(t, e) {
        var n;
        if (t) this.callbacks.cardNonceResponseReceived([q.UNKNOWN]);
        else if ("COMPLETED" !== e.status) {
            var o = (U(n = {}, "DENIED", q.INSTALLMENTS_APPLICATION_DECLINED), U(n, "CANCELLED", q.INSTALLMENTS_APPLICATION_CANCELLED), n)[e.status] || q.UNKNOWN;
            this.callbacks.cardNonceResponseReceived([o])
        } else this.callbacks.cardNonceResponseReceived(null, e.nonce, {
            paymentOption: e.paymentOption
        })
    }, V.prototype._enableInstallmentsMethod = function(t) {
        this.controller.enableMethod(k, t)
    };
    var W = V;

    function B(t) {
        return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function H(t) {
        this.options = t, this.env = t.env, this.errorLogger = t.errorLogger, this.callbacks = t.callbacks, this.inputTypes = p.a.cloneObject(t.expectedInputTypes), this.inputTypes.MAIN_FRAME = "main", this._initialize()
    }
    H.RESIZE_TIMEOUT_MS = 250, H.DIGITAL_WALLETS = {
        applePay: L,
        googlePay: R,
        masterpass: D,
        installments: W
    }, H.prototype._initialize = function() {
        this.formId = p.a.guid(), this.iframeNames = {}, this.iframeControllers = {}, this.loadedIframes = [], this.loadedWallets = {}, this.messageBuffer = [], this.messageHandlers = new i.a, this.digitalWallets = {}, this.inputTypes.GIFT_CARD || (this.digitalWallets = p.a.cloneObject(H.DIGITAL_WALLETS)), this.telemetry = new u.a({
            env: this.options.env,
            applicationId: this.options.applicationId,
            locationId: this.options.locationId,
            accountId: this.options.accountId,
            apiWrapper: this.options.apiWrapper
        })
    }, H.prototype.build = function() {
        0 < Object.keys(this.iframeControllers).length || (this.injectMainFrame(), this._buildAt = Date.now(), this.buildIframeControllers(), this.addPostMessageEventListeners(), this.addResizeEventListener())
    }, H.prototype.pluginShim = function() {
        var t = this;
        return {
            options: this.options,
            formId: this.formId,
            enabledDigitalWallets: this.enabledDigitalWallets || "",
            callbacks: this.callbacks,
            messageHandlers: this.messageHandlers,
            enableMethod: this.enableMethod.bind(this),
            sendEvent: function(e, n) {
                t.sendIframeMessage({
                    eventName: e,
                    payload: n
                })
            },
            telemetry: this.telemetry
        }
    }, H.prototype.injectMainFrame = function() {
        var t = s.a.getDocument().createElement("div"),
            e = this.formId;
        t.id = e, s.a.getDocument().body.appendChild(t), this.options.main = {
            elementId: e
        }
    }, H.prototype.enableMethod = function(t, e) {
        var n = {};
        (n[t] = e) || delete this.loadedWallets[t], this.callbacks && "function" == typeof this.callbacks.methodsSupported && this.callbacks.methodsSupported(n)
    }, H.prototype.buildIframeControllers = function() {
        for (var t in this.inputTypes)
            if (p.a.hasOwn(this.inputTypes, t)) {
                var e = this.inputTypes[t];
                this.buildIframeController(e)
            }
    }, H.prototype.getContainerElement = function(t) {
        var e = s.a.getDocument().getElementById(t);
        if (!e) throw new r.a(t);
        if (t !== this.options.main.elementId) {
            var n = e.innerHTML;
            e.innerHTML = "!";
            var o = e.offsetHeight;
            e.innerHTML = n, o <= 0 && s.a.getWindow().console.warn(new r.b(t))
        }
        return e
    }, H.prototype.buildIframeController = function(t) {
        var e = this.options[t].elementId,
            n = this.getContainerElement(e),
            o = p.a.cloneObject(this.options[t]);
        o.inputClass = this.options.inputClass, o.inheritedClassName = n.className, o.env = this.env, o.applicationId = this.options.applicationId, o.locationId = this.options.locationId, o.accountId = this.options.accountId, this.iframeControllers[t] = new l(t, o, this.iframeCallbacks()), this.iframeNames[t] = this.iframeControllers[t].name(), (this.iframeControllers[t].originalElement = n).parentElement.replaceChild(this.iframeControllers[t].element, n)
    }, H.prototype.destroy = function() {
        for (var t in this.removePostMessageEventListeners(), this.removeTouchStartEventListener(), this.removeResizeEventListener(), this.iframeControllers) p.a.hasOwn(this.iframeControllers, t) && (this.iframeControllers[t].destroy(), delete this.iframeControllers[t])
    }, H.prototype.iframeCallbacks = function() {
        return {
            onload: function(t) {
                this.addLoadedFrame(t)
            }.bind(this)
        }
    }, H.prototype.addLoadedFrame = function(t) {
        -1 === this.loadedIframes.indexOf(t) && this.loadedIframes.push(t), this.loadedIframes.length === Object.keys(this.inputTypes).length && this.loadFormController()
    }, H.prototype.receiveMessageCallback = function(t) {
        if (t.origin === this.env.serviceUrl() && t.data.formId === this.formId) {
            switch (t.data.eventName) {
                case a.a.events.CARD_NONCE_RESPONSE_RECEIVED:
                    this.options.callbacks && "function" == typeof this.options.callbacks.cardNonceResponseReceived && this.options.callbacks.cardNonceResponseReceived(t.data.value.errors, t.data.value.card_nonce, t.data.value.card, t.data.value.billing_contact, t.data.value.shipping_contact);
                    break;
                case a.a.events.INPUT_EVENT_RECEIVED:
                    var e = this.iframeControllers[t.data.inputEvent.field];
                    switch (t.data.inputEvent.eventType) {
                        case a.a.inputEvents.ERROR_CLASS_ADDED:
                            var n = this.classNameForClassType("error");
                            e.addClass(n);
                            break;
                        case a.a.inputEvents.ERROR_CLASS_REMOVED:
                            var o = this.classNameForClassType("error");
                            e.removeClass(o);
                            break;
                        case a.a.inputEvents.FOCUS_CLASS_ADDED:
                            var i = this.classNameForClassType("focus");
                            e.addClass(i);
                            break;
                        case a.a.inputEvents.FOCUS_CLASS_REMOVED:
                            var s = this.classNameForClassType("focus");
                            e.removeClass(s)
                    }
                    this.options.callbacks && "function" == typeof this.options.callbacks.inputEventReceived && this.options.callbacks.inputEventReceived(t.data.inputEvent);
                    break;
                case a.a.events.SET_INPUT_HEIGHT:
                    var c = this.iframeControllers[t.data.inputType].element,
                        u = Math.max(t.data.inputHeight, l.MIN_HEIGHT);
                    c.setAttribute("height", u), 0 !== t.data.inputHeight || this._inputHeightError || (this._inputHeightError = !0, this.errorLogger.capture(new r.d));
                    break;
                case a.a.events.PAYMENT_FORM_LOADED:
                    this._loadedAt = Date.now(), this.sessionId = t.data.sessionId, this.telemetry.set("sessionId", this.sessionId), this.addTouchStartEventListener(), this.enabledDigitalWallets = t.data.enabledDigitalWallets;
                    var d = this.pluginShim();
                    for (var h in this.digitalWallets) p.a.hasOwn(this.digitalWallets, h) && (this.loadedWallets[h] = new this.digitalWallets[h](d));
                    var f = this._loadedAt - this._buildAt;
                    for (this.telemetry.collectLoadTiming({
                            tti: f
                        }), this.telemetry.collectConfiguration(p.a.cloneObject(this.options)), this.options.callbacks && "function" == typeof this.options.callbacks.paymentFormLoaded && this.options.callbacks.paymentFormLoaded(); 0 < this.messageBuffer.length;) this.sendIframeMessage(this.messageBuffer.pop())
            }
            this.messageHandlers.handle(t.data.eventName, t.data)
        }
    }, H.prototype.updateStylesOnResize = function() {
        clearTimeout(this.fireOnResizeEnd), this.fireOnResizeEnd = setTimeout(this.buildStylesForScreenWidth.bind(this), H.RESIZE_TIMEOUT_MS)
    }, H.prototype.addPostMessageEventListeners = function() {
        this._messageCallback = this.receiveMessageCallback.bind(this), s.a.getWindow().addEventListener("message", this._messageCallback)
    }, H.prototype.removePostMessageEventListeners = function() {
        s.a.getWindow().removeEventListener("message", this._messageCallback)
    }, H.prototype.addTouchStartEventListener = function() {
        this._touchstartCallback = function() {
            this._touchStarted = !0
        }.bind(this), this._touchendCallback = function() {
            this._touchStarted && this.blurAllInputs(), this._touchStarted = !1
        }.bind(this), this._touchmoveCallback = function() {
            this._touchStarted = !1
        }.bind(this), this._touchcancelCallback = this._touchmoveCallback, s.a.getWindow().addEventListener("touchstart", this._touchstartCallback), s.a.getWindow().addEventListener("touchend", this._touchendCallback), s.a.getWindow().addEventListener("touchmove", this._touchmoveCallback), s.a.getWindow().addEventListener("touchcancel", this._touchcancelCallback)
    }, H.prototype.removeTouchStartEventListener = function() {
        s.a.getWindow().removeEventListener("touchstart", this._touchstartCallback), s.a.getWindow().removeEventListener("touchend", this._touchendCallback), s.a.getWindow().removeEventListener("touchmove", this._touchmoveCallback), s.a.getWindow().removeEventListener("touchcancel", this._touchcancelCallback)
    }, H.prototype.addResizeEventListener = function() {
        this._resizeCallback = this.updateStylesOnResize.bind(this), s.a.getWindow().addEventListener("resize", this._resizeCallback)
    }, H.prototype.removeResizeEventListener = function() {
        s.a.getWindow().removeEventListener("resize", this._resizeCallback), clearTimeout(this.fireOnResizeEnd)
    }, H.prototype.classNameForClassType = function(t) {
        return this.options.inputClass + "--" + t
    }, H.prototype.sendIframeMessage = function(t) {
        var e = this.iframeControllers[this.inputTypes.MAIN_FRAME].element.contentWindow;
        if (e)
            if (t.formId = this.formId, -1 !== this.loadedIframes.indexOf(this.inputTypes.MAIN_FRAME)) {
                var n = this.env.serviceUrl();
                e.postMessage(t, n)
            } else this.messageBuffer.push(t);
        else s.a.getWindow().console.warn(new r.c)
    }, H.prototype.loadFormController = function() {
        var t = {
                envName: this.env.name,
                applicationId: this.options.applicationId,
                locationId: this.options.locationId,
                accountId: this.options.accountId,
                websiteUrl: this.options.websiteUrl,
                hostOrigin: s.a.getOrigin(),
                inputStyles: this.options.inputStyles,
                inputTypes: this.options.expectedInputTypes,
                autoFill: this.options.autoFill,
                googlePayTokenUrl: s.a.getDocument().location.href,
                version: "b321e83831",
                apiWrapper: this.options.apiWrapper
            },
            e = this;
        Object.keys(this.inputTypes).forEach(function(n) {
            var o = e.inputTypes[n];
            t[o] = e.options[o]
        });
        var n = {
            eventName: a.a.events.LOAD_FORM_CONTROLLER,
            iframes: this.iframeNames,
            options: t,
            initialScreenWidth: s.a.getWindow().innerWidth
        };
        this.sendIframeMessage(n)
    }, H.prototype.requestCardNonceIfValidForm = function() {
        this.sendIframeMessage({
            eventName: a.a.events.REQUEST_CARD_NONCE_IF_VALID_FORM
        })
    }, H.prototype.buildStylesForScreenWidth = function() {
        this.sendIframeMessage({
            eventName: a.a.events.BUILD_STYLES_FOR_SCREEN_WIDTH,
            screenWidth: s.a.getWindow().innerWidth
        })
    }, H.prototype.blurAllInputs = function() {
        this.sendIframeMessage({
            eventName: a.a.events.BLUR_ALL_INPUTS
        })
    }, H.prototype.setPostalCode = function(t) {
        var e = B(t);
        "string" !== e && "number" !== e || this.sendIframeMessage({
            eventName: a.a.events.SET_POSTAL_CODE,
            postalCode: "" + t
        })
    }, H.prototype.hasLoaded = function() {
        return !!this._loadedAt
    }, H.prototype.getInstallmentsPricing = function(t) {
        var e = this.loadedWallets.installments;
        e ? e.getInstallmentsPricing(t) : t([q.INSTALLMENTS_APPLICATION_INELIGIBLE])
    }, H.prototype.showInstallmentsModal = function() {
        var t = this.loadedWallets.installments;
        t ? t.showInstallmentsModal() : this.callbacks.cardNonceResponseReceived([q.INSTALLMENTS_APPLICATION_INELIGIBLE])
    }, H.prototype.updatePaymentDetails = function(t, e) {
        var n = this.loadedWallets.installments;
        n ? n.updatePaymentDetails(t, e) : e([q.INSTALLMENTS_APPLICATION_INELIGIBLE], !1)
    };
    var Y = H,
        K = n(71);

    function z(t) {
        return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function J(t) {
        this.options = t, this.env = Object(K.a)(t ? t.env : "production"), this.errorLogger = new o.a({
            applicationId: this.options && this.options.applicationId,
            apiWrapper: this.options && this.options.apiWrapper,
            captureUncaughtExceptions: new RegExp(this.env.jsUrl()),
            source: "SqPaymentForm",
            env: this.env
        });
        var e = this.validateOptions(this.options);
        if (e) throw this.errorLogger.capture(e), e;
        if (!p.a.embeddingAllowed(this.env, s.a.getWindow().location)) {
            var n = new r.l.HttpsRequiredError;
            throw this.errorLogger.capture(n), n
        }
        var i = p.a.cloneObject(this.options);
        i._env = this.options.env, i.env = this.env, i.errorLogger = this.errorLogger, this.clientController = new Y(i), !1 !== this.options.autoBuild && this._attachLoadListener()
    }
    J.isSupportedBrowser = p.a.isSupportedBrowser.bind(null), J.prototype._attachLoadListener = function() {
        this._handleDomContentLoaded = this.build.bind(this), p.a.isIE10() ? s.a.getWindow().addEventListener("load", this._handleDomContentLoaded) : "loading" === s.a.getReadyState() && s.a.getDocument().addEventListener("DOMContentLoaded", this._handleDomContentLoaded)
    }, J.prototype.build = function() {
        if (this.detachLoadEvent(), this.build = function() {
                var t = new r.l.FormAlreadyBuiltError;
                throw this.errorLogger.capture(t), t
            }, !p.a.isSupportedBrowser()) return this.errorLogger.capture(new r.l.UnsupportedBrowserError), void(this.options.callbacks && "function" == typeof this.options.callbacks.unsupportedBrowserDetected && this.options.callbacks.unsupportedBrowserDetected());
        try {
            this.clientController.build()
        } catch (t) {
            throw this.errorLogger.capture(t), t
        }
    }, J.prototype.destroy = function() {
        this.detachLoadEvent(), this.clientController && (this.clientController.destroy(), this.clientController = null), this.errorLogger.destroy(), this.errorLogger = null, this.build = function() {
            throw new r.l.FormAlreadyDestroyedError("build")
        }, this.requestCardNonce = function() {
            throw new r.l.FormAlreadyDestroyedError("requestCardNonce")
        }
    }, J.prototype.requestCardNonce = function() {
        if (!this.clientController.hasLoaded()) {
            var t = new r.l.FormNotReadyError("requestCardNonce");
            throw this.errorLogger.capture(t), t
        }
        this.clientController.requestCardNonceIfValidForm()
    }, J.prototype.recalculateSize = function() {
        this.clientController.buildStylesForScreenWidth()
    }, J.prototype.setPostalCode = function(t) {
        this.clientController.setPostalCode(t)
    }, J.prototype.focus = function(t) {
        var e, n = !1;
        for (var o in this.clientController.inputTypes)
            if (p.a.hasOwn(this.clientController.inputTypes, o) && t === this.clientController.inputTypes[o]) {
                n = !0;
                break
            }
        if (n ? this.clientController.hasLoaded() || (e = new r.l.FormNotReadyError("focus")) : e = new r.l.InvalidFieldError(t), e) throw this.errorLogger.capture(e), e;
        this.clientController.iframeControllers[t].focus()
    }, J.prototype.getInstallmentsPricing = function(t) {
        var e;
        if (void 0 === t || "function" != typeof t ? e = new r.l.InvalidFunctionArgumentError("getInstallmentsPricing") : this.clientController.hasLoaded() || (e = new r.l.FormNotReadyError("getInstallmentsPricing")), e) throw this.errorLogger.capture(e), e;
        this.clientController.getInstallmentsPricing(t)
    }, J.prototype.updatePaymentRequest = function(t, e) {
        var n;
        if (void 0 === t || "object" !== z(t) || void 0 === e || "function" != typeof e ? n = new r.l.InvalidFunctionArgumentError("updatePaymentRequest") : this.clientController.hasLoaded() || (n = new r.l.FormNotReadyError("updatePaymentRequest")), n) throw this.errorLogger.capture(n), n;
        this.clientController.updatePaymentDetails(t, e)
    }, J.prototype.showInstallmentsModal = function() {
        if (!this.clientController.hasLoaded()) {
            var t = new r.l.FormNotReadyError("showInstallmentsModal");
            throw this.errorLogger.capture(t), t
        }
        this.clientController.showInstallmentsModal()
    }, J.prototype.detachLoadEvent = function() {
        this._handleDomContentLoaded && (s.a.getDocument().removeEventListener("DOMContentLoaded", this._handleDomContentLoaded), s.a.getWindow().removeEventListener("load", this._handleDomContentLoaded), this._handleDomContentLoaded = null)
    }, J.prototype.validateOptions = function(t) {
        if (!t) return new r.l.MissingArgumentError("options");
        if ("[object Object]" !== Object.prototype.toString.call(t)) return new r.l.InvalidArgumentError("options", "object");
        if (!t.applicationId) return new r.l.MissingOptionError("applicationId");
        0 === t.applicationId.indexOf("sandbox-") && s.a.getWindow().console.info("SqPaymentForm initialized in Sandbox Mode. See https://docs.connect.squareup.com/articles/using-sandbox/");
        var e = !!t[a.a.inputTypes.GIFT_CARD],
            n = this.fieldsRequested(t, this.getCardFormFields()),
            o = this.fieldsRequested(t, Object.keys(Y.DIGITAL_WALLETS)),
            i = this.paymentMethodsRequested(e, n, o);
        if (e || 0 < n.length) {
            if (!t.inputClass) return new r.l.MissingOptionError("inputClass");
            if (-1 !== t.inputClass.indexOf(" ")) return new r.l.InvalidOptionError("inputClass")
        }
        if (!t.callbacks) return new r.l.MissingOptionError("callbacks");
        if (!t.callbacks.cardNonceResponseReceived) return new r.l.MissingCallbackError("cardNonceResponseReceived");
        if ("function" != typeof t.callbacks.cardNonceResponseReceived) return new r.l.InvalidCallbackError("cardNonceResponseReceived");
        if (t.locationId && t.accountId) throw new r.l.TooManyIdsError;
        if (0 === i.length) return new r.l.MissingPaymentMethodError;
        if (1 < i.length && e) {
            var c = n.concat(o);
            return new r.l.UnexpectedInputTypeError(c[0])
        }
        var l = {};
        for (var u in e ? l = {
                GIFT_CARD: a.a.inputTypes.GIFT_CARD
            } : 0 < n.length && delete(l = p.a.cloneObject(a.a.inputTypes)).GIFT_CARD, this.options.expectedInputTypes = l)
            if (p.a.hasOwn(l, u)) {
                var d = l[u],
                    h = this.validateInputType(d, t);
                if (h) return h
            }
        if (0 < o.length) {
            if (!t.callbacks.createPaymentRequest) return new r.l.MissingCallbackError("createPaymentRequest");
            if ("function" != typeof t.callbacks.createPaymentRequest) return new r.l.InvalidCallbackError("createPaymentRequest");
            if (!t.callbacks.methodsSupported) return new r.l.MissingCallbackError("methodsSupported");
            if ("function" != typeof t.callbacks.methodsSupported) return new r.l.InvalidCallbackError("methodsSupported")
        }
        return t.inputStyles && !Array.isArray(t.inputStyles) ? new r.l.InvalidInputStylesError : void 0 !== t.autoBuild && "boolean" != typeof t.autoBuild ? new r.l.InvalidOptionType("autoBuild") : void 0 !== t.autoFill && "boolean" != typeof t.autoFill ? new r.l.InvalidOptionType("autoFill") : void(this.env.name !== a.a.SERVER_ENV && s.a.getWindow().console.warn("Requested environment '".concat(this.env.name, "' does not match server environment '").concat(a.a.SERVER_ENV, "'.\n      Unexpected behaviour may occur due to mismatched environments.")))
    }, J.prototype.getCardFormFields = function() {
        var t = p.a.cloneObject(a.a.inputTypes);
        return delete t.GIFT_CARD, Object.values(t)
    }, J.prototype.fieldsRequested = function(t, e) {
        var n = [];
        return e.forEach(function(e) {
            t[e] && n.push(e)
        }), n
    }, J.prototype.paymentMethodsRequested = function(t, e, n) {
        var o = [];
        return t && o.push(a.a.inputTypes.GIFT_CARD), 0 < e.length && o.push(a.a.inputTypes.CARD_NUMBER), o.push.apply(o, n), o
    }, J.prototype.validateInputType = function(t, e) {
        if (t !== a.a.inputTypes.POSTAL_CODE || !1 !== e[t]) return e[t] ? e[t].elementId ? void 0 : new r.l.MissingElementIdError(t) : new r.l.MissingInputTypeError(t);
        delete this.options.expectedInputTypes.POSTAL_CODE
    };
    var Q = J;
    s.a.getWindow().SqPaymentForm = Q
}]);
