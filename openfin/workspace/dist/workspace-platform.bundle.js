var al = Object.defineProperty;
var rl = (f, o, u) => o in f ? al(f, o, { enumerable: !0, configurable: !0, writable: !0, value: u }) : f[o] = u;
var Ss = (f, o, u) => rl(f, typeof o != "symbol" ? o + "" : o, u);
function ol(f, o) {
  for (var u = 0; u < o.length; u++) {
    const d = o[u];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const y in d)
        if (y !== "default" && !(y in f)) {
          const m = Object.getOwnPropertyDescriptor(d, y);
          m && Object.defineProperty(f, y, m.get ? m : {
            enumerable: !0,
            get: () => d[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function li(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
function Ks(f) {
  if (f.__esModule) return f;
  var o = f.default;
  if (typeof o == "function") {
    var u = function d() {
      return this instanceof d ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    u.prototype = o.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(f).forEach(function(d) {
    var y = Object.getOwnPropertyDescriptor(f, d);
    Object.defineProperty(u, d, y.get ? y : {
      enumerable: !0,
      get: function() {
        return f[d];
      }
    });
  }), u;
}
var $s = { exports: {} }, Hs = { exports: {} };
(function(f, o) {
  (function(u, d) {
    f.exports = d();
  })(ur, function() {
    var u = function(t, a) {
      return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, l) {
        i.__proto__ = l;
      } || function(i, l) {
        for (var p in l) Object.prototype.hasOwnProperty.call(l, p) && (i[p] = l[p]);
      })(t, a);
    }, d = function() {
      return (d = Object.assign || function(t) {
        for (var a, i = 1, l = arguments.length; i < l; i++) for (var p in a = arguments[i]) Object.prototype.hasOwnProperty.call(a, p) && (t[p] = a[p]);
        return t;
      }).apply(this, arguments);
    };
    function y(t, a, i) {
      for (var l, p = 0, g = a.length; p < g; p++) !l && p in a || ((l = l || Array.prototype.slice.call(a, 0, p))[p] = a[p]);
      return t.concat(l || Array.prototype.slice.call(a));
    }
    var m = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ur, P = Object.keys, M = Array.isArray;
    function _(t, a) {
      return typeof a != "object" || P(a).forEach(function(i) {
        t[i] = a[i];
      }), t;
    }
    typeof Promise > "u" || m.Promise || (m.Promise = Promise);
    var U = Object.getPrototypeOf, q = {}.hasOwnProperty;
    function X(t, a) {
      return q.call(t, a);
    }
    function j(t, a) {
      typeof a == "function" && (a = a(U(t))), (typeof Reflect > "u" ? P : Reflect.ownKeys)(a).forEach(function(i) {
        ke(t, i, a[i]);
      });
    }
    var W = Object.defineProperty;
    function ke(t, a, i, l) {
      W(t, a, _(i && X(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, l));
    }
    function ge(t) {
      return { from: function(a) {
        return t.prototype = Object.create(a.prototype), ke(t.prototype, "constructor", t), { extend: j.bind(null, t.prototype) };
      } };
    }
    var z = Object.getOwnPropertyDescriptor, Ie = [].slice;
    function Z(t, a, i) {
      return Ie.call(t, a, i);
    }
    function Me(t, a) {
      return a(t);
    }
    function ee(t) {
      if (!t) throw new Error("Assertion Failed");
    }
    function Ae(t) {
      m.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }
    function ie(t, a) {
      if (typeof a == "string" && X(t, a)) return t[a];
      if (!a) return t;
      if (typeof a != "string") {
        for (var i = [], l = 0, p = a.length; l < p; ++l) {
          var g = ie(t, a[l]);
          i.push(g);
        }
        return i;
      }
      var k = a.indexOf(".");
      if (k !== -1) {
        var v = t[a.substr(0, k)];
        return v == null ? void 0 : ie(v, a.substr(k + 1));
      }
    }
    function ce(t, a, i) {
      if (t && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof a != "string" && "length" in a) {
        ee(typeof i != "string" && "length" in i);
        for (var l = 0, p = a.length; l < p; ++l) ce(t, a[l], i[l]);
      } else {
        var g, k, v = a.indexOf(".");
        v !== -1 ? (g = a.substr(0, v), (k = a.substr(v + 1)) === "" ? i === void 0 ? M(t) && !isNaN(parseInt(g)) ? t.splice(g, 1) : delete t[g] : t[g] = i : ce(v = !(v = t[g]) || !X(t, g) ? t[g] = {} : v, k, i)) : i === void 0 ? M(t) && !isNaN(parseInt(a)) ? t.splice(a, 1) : delete t[a] : t[a] = i;
      }
    }
    function ft(t) {
      var a, i = {};
      for (a in t) X(t, a) && (i[a] = t[a]);
      return i;
    }
    var it = [].concat;
    function qe(t) {
      return it.apply([], t);
    }
    var rt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(qe([8, 16, 32, 64].map(function(t) {
      return ["Int", "Uint", "Float"].map(function(a) {
        return a + t + "Array";
      });
    }))).filter(function(t) {
      return m[t];
    }), dt = new Set(rt.map(function(t) {
      return m[t];
    })), Rt = null;
    function Le(t) {
      return Rt = /* @__PURE__ */ new WeakMap(), t = function a(i) {
        if (!i || typeof i != "object") return i;
        var l = Rt.get(i);
        if (l) return l;
        if (M(i)) {
          l = [], Rt.set(i, l);
          for (var p = 0, g = i.length; p < g; ++p) l.push(a(i[p]));
        } else if (dt.has(i.constructor)) l = i;
        else {
          var k, v = U(i);
          for (k in l = v === Object.prototype ? {} : Object.create(v), Rt.set(i, l), i) X(i, k) && (l[k] = a(i[k]));
        }
        return l;
      }(t), Rt = null, t;
    }
    var vt = {}.toString;
    function De(t) {
      return vt.call(t).slice(8, -1);
    }
    var at = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Dt = typeof at == "symbol" ? function(t) {
      var a;
      return t != null && (a = t[at]) && a.apply(t);
    } : function() {
      return null;
    };
    function st(t, a) {
      return a = t.indexOf(a), 0 <= a && t.splice(a, 1), 0 <= a;
    }
    var Tt = {};
    function Ve(t) {
      var a, i, l, p;
      if (arguments.length === 1) {
        if (M(t)) return t.slice();
        if (this === Tt && typeof t == "string") return [t];
        if (p = Dt(t)) {
          for (i = []; !(l = p.next()).done; ) i.push(l.value);
          return i;
        }
        if (t == null) return [t];
        if (typeof (a = t.length) != "number") return [t];
        for (i = new Array(a); a--; ) i[a] = t[a];
        return i;
      }
      for (a = arguments.length, i = new Array(a); a--; ) i[a] = arguments[a];
      return i;
    }
    var R = typeof Symbol < "u" ? function(t) {
      return t[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, Kt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], on = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Kt), se = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function _e(t, a) {
      this.name = t, this.message = a;
    }
    function We(t, a) {
      return t + ". Errors: " + Object.keys(a).map(function(i) {
        return a[i].toString();
      }).filter(function(i, l, p) {
        return p.indexOf(i) === l;
      }).join(`
`);
    }
    function Ke(t, a, i, l) {
      this.failures = a, this.failedKeys = l, this.successCount = i, this.message = We(t, a);
    }
    function tt(t, a) {
      this.name = "BulkError", this.failures = Object.keys(a).map(function(i) {
        return a[i];
      }), this.failuresByPos = a, this.message = We(t, this.failures);
    }
    ge(_e).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), ge(Ke).from(_e), ge(tt).from(_e);
    var nt = on.reduce(function(t, a) {
      return t[a] = a + "Error", t;
    }, {}), Ft = _e, we = on.reduce(function(t, a) {
      var i = a + "Error";
      function l(p, g) {
        this.name = i, p ? typeof p == "string" ? (this.message = "".concat(p).concat(g ? `
 ` + g : ""), this.inner = g || null) : typeof p == "object" && (this.message = "".concat(p.name, " ").concat(p.message), this.inner = p) : (this.message = se[a] || i, this.inner = null);
      }
      return ge(l).from(Ft), t[a] = l, t;
    }, {});
    we.Syntax = SyntaxError, we.Type = TypeError, we.Range = RangeError;
    var Ot = Kt.reduce(function(t, a) {
      return t[a + "Error"] = we[a], t;
    }, {}), Wt = on.reduce(function(t, a) {
      return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (t[a + "Error"] = we[a]), t;
    }, {});
    function I() {
    }
    function G(t) {
      return t;
    }
    function $(t, a) {
      return t == null || t === G ? a : function(i) {
        return a(t(i));
      };
    }
    function te(t, a) {
      return function() {
        t.apply(this, arguments), a.apply(this, arguments);
      };
    }
    function Be(t, a) {
      return t === I ? a : function() {
        var i = t.apply(this, arguments);
        i !== void 0 && (arguments[0] = i);
        var l = this.onsuccess, p = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var g = a.apply(this, arguments);
        return l && (this.onsuccess = this.onsuccess ? te(l, this.onsuccess) : l), p && (this.onerror = this.onerror ? te(p, this.onerror) : p), g !== void 0 ? g : i;
      };
    }
    function je(t, a) {
      return t === I ? a : function() {
        t.apply(this, arguments);
        var i = this.onsuccess, l = this.onerror;
        this.onsuccess = this.onerror = null, a.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? te(i, this.onsuccess) : i), l && (this.onerror = this.onerror ? te(l, this.onerror) : l);
      };
    }
    function Ne(t, a) {
      return t === I ? a : function(i) {
        var l = t.apply(this, arguments);
        _(i, l);
        var p = this.onsuccess, g = this.onerror;
        return this.onsuccess = null, this.onerror = null, i = a.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? te(p, this.onsuccess) : p), g && (this.onerror = this.onerror ? te(g, this.onerror) : g), l === void 0 ? i === void 0 ? void 0 : i : _(l, i);
      };
    }
    function wt(t, a) {
      return t === I ? a : function() {
        return a.apply(this, arguments) !== !1 && t.apply(this, arguments);
      };
    }
    function ht(t, a) {
      return t === I ? a : function() {
        var i = t.apply(this, arguments);
        if (i && typeof i.then == "function") {
          for (var l = this, p = arguments.length, g = new Array(p); p--; ) g[p] = arguments[p];
          return i.then(function() {
            return a.apply(l, g);
          });
        }
        return a.apply(this, arguments);
      };
    }
    Wt.ModifyError = Ke, Wt.DexieError = _e, Wt.BulkError = tt;
    var Re = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function un(t) {
      Re = t;
    }
    var ln = {}, dn = 100, rt = typeof Promise > "u" ? [] : function() {
      var t = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [t, U(t), t];
      var a = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [a, U(a), t];
    }(), Kt = rt[0], on = rt[1], rt = rt[2], on = on && on.then, Pe = Kt && Kt.constructor, gt = !!rt, Qt = function(t, a) {
      Gt.push([t, a]), Lt && (queueMicrotask(Ge), Lt = !1);
    }, cn = !0, Lt = !0, Ht = [], $t = [], Pt = G, kt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: I, pgp: !1, env: {}, finalize: I }, Ee = kt, Gt = [], rn = 0, h = [];
    function x(t) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var a = this._PSD = Ee;
      if (typeof t != "function") {
        if (t !== ln) throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && ye(this, this._value));
      }
      this._state = null, this._value = null, ++a.ref, function i(l, p) {
        try {
          p(function(g) {
            if (l._state === null) {
              if (g === l) throw new TypeError("A promise cannot be resolved with itself.");
              var k = l._lib && nn();
              g && typeof g.then == "function" ? i(l, function(v, A) {
                g instanceof x ? g._then(v, A) : g.then(v, A);
              }) : (l._state = !0, l._value = g, Ze(l)), k && Xt();
            }
          }, ye.bind(null, l));
        } catch (g) {
          ye(l, g);
        }
      }(this, t);
    }
    var le = { get: function() {
      var t = Ee, a = wa;
      function i(l, p) {
        var g = this, k = !t.global && (t !== Ee || a !== wa), v = k && !xn(), A = new x(function(E, N) {
          He(g, new de(jr(l, t, k, v), jr(p, t, k, v), E, N, t));
        });
        return this._consoleTask && (A._consoleTask = this._consoleTask), A;
      }
      return i.prototype = ln, i;
    }, set: function(t) {
      ke(this, "then", t && t.prototype === ln ? le : { get: function() {
        return t;
      }, set: le.set });
    } };
    function de(t, a, i, l, p) {
      this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = i, this.reject = l, this.psd = p;
    }
    function ye(t, a) {
      var i, l;
      $t.push(a), t._state === null && (i = t._lib && nn(), a = Pt(a), t._state = !1, t._value = a, l = t, Ht.some(function(p) {
        return p._value === l._value;
      }) || Ht.push(l), Ze(t), i && Xt());
    }
    function Ze(t) {
      var a = t._listeners;
      t._listeners = [];
      for (var i = 0, l = a.length; i < l; ++i) He(t, a[i]);
      var p = t._PSD;
      --p.ref || p.finalize(), rn === 0 && (++rn, Qt(function() {
        --rn == 0 && qn();
      }, []));
    }
    function He(t, a) {
      if (t._state !== null) {
        var i = t._state ? a.onFulfilled : a.onRejected;
        if (i === null) return (t._state ? a.resolve : a.reject)(t._value);
        ++a.psd.ref, ++rn, Qt(ut, [i, t, a]);
      } else t._listeners.push(a);
    }
    function ut(t, a, i) {
      try {
        var l, p = a._value;
        !a._state && $t.length && ($t = []), l = Re && a._consoleTask ? a._consoleTask.run(function() {
          return t(p);
        }) : t(p), a._state || $t.indexOf(p) !== -1 || function(g) {
          for (var k = Ht.length; k; ) if (Ht[--k]._value === g._value) return Ht.splice(k, 1);
        }(a), i.resolve(l);
      } catch (g) {
        i.reject(g);
      } finally {
        --rn == 0 && qn(), --i.psd.ref || i.psd.finalize();
      }
    }
    function Ge() {
      Rn(kt, function() {
        nn() && Xt();
      });
    }
    function nn() {
      var t = cn;
      return Lt = cn = !1, t;
    }
    function Xt() {
      var t, a, i;
      do
        for (; 0 < Gt.length; ) for (t = Gt, Gt = [], i = t.length, a = 0; a < i; ++a) {
          var l = t[a];
          l[0].apply(null, l[1]);
        }
      while (0 < Gt.length);
      Lt = cn = !0;
    }
    function qn() {
      var t = Ht;
      Ht = [], t.forEach(function(l) {
        l._PSD.onunhandled.call(null, l._value, l);
      });
      for (var a = h.slice(0), i = a.length; i; ) a[--i]();
    }
    function Ln(t) {
      return new x(ln, !1, t);
    }
    function xt(t, a) {
      var i = Ee;
      return function() {
        var l = nn(), p = Ee;
        try {
          return Cn(i, !0), t.apply(this, arguments);
        } catch (g) {
          a && a(g);
        } finally {
          Cn(p, !1), l && Xt();
        }
      };
    }
    j(x.prototype, { then: le, _then: function(t, a) {
      He(this, new de(null, null, t, a, Ee));
    }, catch: function(t) {
      if (arguments.length === 1) return this.then(null, t);
      var a = t, i = arguments[1];
      return typeof a == "function" ? this.then(null, function(l) {
        return (l instanceof a ? i : Ln)(l);
      }) : this.then(null, function(l) {
        return (l && l.name === a ? i : Ln)(l);
      });
    }, finally: function(t) {
      return this.then(function(a) {
        return x.resolve(t()).then(function() {
          return a;
        });
      }, function(a) {
        return x.resolve(t()).then(function() {
          return Ln(a);
        });
      });
    }, timeout: function(t, a) {
      var i = this;
      return t < 1 / 0 ? new x(function(l, p) {
        var g = setTimeout(function() {
          return p(new we.Timeout(a));
        }, t);
        i.then(l, p).finally(clearTimeout.bind(null, g));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && ke(x.prototype, Symbol.toStringTag, "Dexie.Promise"), kt.env = hr(), j(x, { all: function() {
      var t = Ve.apply(null, arguments).map(ya);
      return new x(function(a, i) {
        t.length === 0 && a([]);
        var l = t.length;
        t.forEach(function(p, g) {
          return x.resolve(p).then(function(k) {
            t[g] = k, --l || a(t);
          }, i);
        });
      });
    }, resolve: function(t) {
      return t instanceof x ? t : t && typeof t.then == "function" ? new x(function(a, i) {
        t.then(a, i);
      }) : new x(ln, !0, t);
    }, reject: Ln, race: function() {
      var t = Ve.apply(null, arguments).map(ya);
      return new x(function(a, i) {
        t.map(function(l) {
          return x.resolve(l).then(a, i);
        });
      });
    }, PSD: { get: function() {
      return Ee;
    }, set: function(t) {
      return Ee = t;
    } }, totalEchoes: { get: function() {
      return wa;
    } }, newPSD: _n, usePSD: Rn, scheduler: { get: function() {
      return Qt;
    }, set: function(t) {
      Qt = t;
    } }, rejectionMapper: { get: function() {
      return Pt;
    }, set: function(t) {
      Pt = t;
    } }, follow: function(t, a) {
      return new x(function(i, l) {
        return _n(function(p, g) {
          var k = Ee;
          k.unhandleds = [], k.onunhandled = g, k.finalize = te(function() {
            var v, A = this;
            v = function() {
              A.unhandleds.length === 0 ? p() : g(A.unhandleds[0]);
            }, h.push(function E() {
              v(), h.splice(h.indexOf(E), 1);
            }), ++rn, Qt(function() {
              --rn == 0 && qn();
            }, []);
          }, k.finalize), t();
        }, a, i, l);
      });
    } }), Pe && (Pe.allSettled && ke(x, "allSettled", function() {
      var t = Ve.apply(null, arguments).map(ya);
      return new x(function(a) {
        t.length === 0 && a([]);
        var i = t.length, l = new Array(i);
        t.forEach(function(p, g) {
          return x.resolve(p).then(function(k) {
            return l[g] = { status: "fulfilled", value: k };
          }, function(k) {
            return l[g] = { status: "rejected", reason: k };
          }).then(function() {
            return --i || a(l);
          });
        });
      });
    }), Pe.any && typeof AggregateError < "u" && ke(x, "any", function() {
      var t = Ve.apply(null, arguments).map(ya);
      return new x(function(a, i) {
        t.length === 0 && i(new AggregateError([]));
        var l = t.length, p = new Array(l);
        t.forEach(function(g, k) {
          return x.resolve(g).then(function(v) {
            return a(v);
          }, function(v) {
            p[k] = v, --l || i(new AggregateError(p));
          });
        });
      });
    }), Pe.withResolvers && (x.withResolvers = Pe.withResolvers));
    var Vt = { awaits: 0, echoes: 0, id: 0 }, ga = 0, ma = [], Jn = 0, wa = 0, Yn = 0;
    function _n(t, a, i, l) {
      var p = Ee, g = Object.create(p);
      return g.parent = p, g.ref = 0, g.global = !1, g.id = ++Yn, kt.env, g.env = gt ? { Promise: x, PromiseProp: { value: x, configurable: !0, writable: !0 }, all: x.all, race: x.race, allSettled: x.allSettled, any: x.any, resolve: x.resolve, reject: x.reject } : {}, a && _(g, a), ++p.ref, g.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, l = Rn(g, t, i, l), g.ref === 0 && g.finalize(), l;
    }
    function oe() {
      return Vt.id || (Vt.id = ++ga), ++Vt.awaits, Vt.echoes += dn, Vt.id;
    }
    function xn() {
      return !!Vt.awaits && (--Vt.awaits == 0 && (Vt.id = 0), Vt.echoes = Vt.awaits * dn, !0);
    }
    function ya(t) {
      return Vt.echoes && t && t.constructor === Pe ? (oe(), t.then(function(a) {
        return xn(), a;
      }, function(a) {
        return xn(), Ut(a);
      })) : t;
    }
    function fr() {
      var t = ma[ma.length - 1];
      ma.pop(), Cn(t, !1);
    }
    function Cn(t, a) {
      var i, l = Ee;
      (a ? !Vt.echoes || Jn++ && t === Ee : !Jn || --Jn && t === Ee) || queueMicrotask(a ? (function(p) {
        ++wa, Vt.echoes && --Vt.echoes != 0 || (Vt.echoes = Vt.awaits = Vt.id = 0), ma.push(Ee), Cn(p, !0);
      }).bind(null, t) : fr), t !== Ee && (Ee = t, l === kt && (kt.env = hr()), gt && (i = kt.env.Promise, a = t.env, (l.global || t.global) && (Object.defineProperty(m, "Promise", a.PromiseProp), i.all = a.all, i.race = a.race, i.resolve = a.resolve, i.reject = a.reject, a.allSettled && (i.allSettled = a.allSettled), a.any && (i.any = a.any))));
    }
    function hr() {
      var t = m.Promise;
      return gt ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(m, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
    }
    function Rn(t, a, i, l, p) {
      var g = Ee;
      try {
        return Cn(t, !0), a(i, l, p);
      } finally {
        Cn(g, !1);
      }
    }
    function jr(t, a, i, l) {
      return typeof t != "function" ? t : function() {
        var p = Ee;
        i && oe(), Cn(a, !0);
        try {
          return t.apply(this, arguments);
        } finally {
          Cn(p, !1), l && queueMicrotask(xn);
        }
      };
    }
    function gr(t) {
      Promise === Pe && Vt.echoes === 0 ? Jn === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
    }
    ("" + on).indexOf("[native code]") === -1 && (oe = xn = I);
    var Ut = x.reject, Vn = "￿", Mn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Kr = "String expected.", pn = [], ba = "__dbnames", La = "readonly", mr = "readwrite";
    function Un(t, a) {
      return t ? a ? function() {
        return t.apply(this, arguments) && a.apply(this, arguments);
      } : t : a;
    }
    var fe = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Zn(t) {
      return typeof t != "string" || /\./.test(t) ? function(a) {
        return a;
      } : function(a) {
        return a[t] === void 0 && t in a && delete (a = Le(a))[t], a;
      };
    }
    function Va() {
      throw we.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
    }
    function ve(t, a) {
      try {
        var i = Qe(t), l = Qe(a);
        if (i !== l) return i === "Array" ? 1 : l === "Array" ? -1 : i === "binary" ? 1 : l === "binary" ? -1 : i === "string" ? 1 : l === "string" ? -1 : i === "Date" ? 1 : l !== "Date" ? NaN : -1;
        switch (i) {
          case "number":
          case "Date":
          case "string":
            return a < t ? 1 : t < a ? -1 : 0;
          case "binary":
            return function(p, g) {
              for (var k = p.length, v = g.length, A = k < v ? k : v, E = 0; E < A; ++E) if (p[E] !== g[E]) return p[E] < g[E] ? -1 : 1;
              return k === v ? 0 : k < v ? -1 : 1;
            }($r(t), $r(a));
          case "Array":
            return function(p, g) {
              for (var k = p.length, v = g.length, A = k < v ? k : v, E = 0; E < A; ++E) {
                var N = ve(p[E], g[E]);
                if (N !== 0) return N;
              }
              return k === v ? 0 : k < v ? -1 : 1;
            }(t, a);
        }
      } catch {
      }
      return NaN;
    }
    function Qe(t) {
      var a = typeof t;
      return a != "object" ? a : ArrayBuffer.isView(t) ? "binary" : (t = De(t), t === "ArrayBuffer" ? "binary" : t);
    }
    function $r(t) {
      return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
    }
    function va(t, a, i) {
      var l = t.schema.yProps;
      return l ? (a && 0 < i.numFailures && (a = a.filter(function(p, g) {
        return !i.failures[g];
      })), Promise.all(l.map(function(p) {
        return p = p.updatesTable, a ? t.db.table(p).where("k").anyOf(a).delete() : t.db.table(p).clear();
      })).then(function() {
        return i;
      })) : i;
    }
    var jn = (ka.prototype.execute = function(t) {
      var a = this["@@propmod"];
      if (a.add !== void 0) {
        var i = a.add;
        if (M(i)) return y(y([], M(t) ? t : [], !0), i).sort();
        if (typeof i == "number") return (Number(t) || 0) + i;
        if (typeof i == "bigint") try {
          return BigInt(t) + i;
        } catch {
          return BigInt(0) + i;
        }
        throw new TypeError("Invalid term ".concat(i));
      }
      if (a.remove !== void 0) {
        var l = a.remove;
        if (M(l)) return M(t) ? t.filter(function(p) {
          return !l.includes(p);
        }).sort() : [];
        if (typeof l == "number") return Number(t) - l;
        if (typeof l == "bigint") try {
          return BigInt(t) - l;
        } catch {
          return BigInt(0) - l;
        }
        throw new TypeError("Invalid subtrahend ".concat(l));
      }
      return i = (i = a.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? a.replacePrefix[1] + t.substring(i.length) : t;
    }, ka);
    function ka(t) {
      this["@@propmod"] = t;
    }
    function Ua(t, a) {
      for (var i = P(a), l = i.length, p = !1, g = 0; g < l; ++g) {
        var k = i[g], v = a[k], A = ie(t, k);
        v instanceof jn ? (ce(t, k, v.execute(A)), p = !0) : A !== v && (ce(t, k, v), p = !0);
      }
      return p;
    }
    var Sa = (yt.prototype._trans = function(t, a, i) {
      var l = this._tx || Ee.trans, p = this.name, g = Re && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
      function k(E, N, C) {
        if (!C.schema[p]) throw new we.NotFound("Table " + p + " not part of transaction");
        return a(C.idbtrans, C);
      }
      var v = nn();
      try {
        var A = l && l.db._novip === this.db._novip ? l === Ee.trans ? l._promise(t, k, i) : _n(function() {
          return l._promise(t, k, i);
        }, { trans: l, transless: Ee.transless || Ee }) : function E(N, C, L, T) {
          if (N.idbdb && (N._state.openComplete || Ee.letThrough || N._vip)) {
            var D = N._createTransaction(C, L, N._dbSchema);
            try {
              D.create(), N._state.PR1398_maxLoop = 3;
            } catch (O) {
              return O.name === nt.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
                return E(N, C, L, T);
              })) : Ut(O);
            }
            return D._promise(C, function(O, B) {
              return _n(function() {
                return Ee.trans = D, T(O, B, D);
              });
            }).then(function(O) {
              if (C === "readwrite") try {
                D.idbtrans.commit();
              } catch {
              }
              return C === "readonly" ? O : D._completion.then(function() {
                return O;
              });
            });
          }
          if (N._state.openComplete) return Ut(new we.DatabaseClosed(N._state.dbOpenError));
          if (!N._state.isBeingOpened) {
            if (!N._state.autoOpen) return Ut(new we.DatabaseClosed());
            N.open().catch(I);
          }
          return N._state.dbReadyPromise.then(function() {
            return E(N, C, L, T);
          });
        }(this.db, t, [this.name], k);
        return g && (A._consoleTask = g, A = A.catch(function(E) {
          return console.trace(E), Ut(E);
        })), A;
      } finally {
        v && Xt();
      }
    }, yt.prototype.get = function(t, a) {
      var i = this;
      return t && t.constructor === Object ? this.where(t).first(a) : t == null ? Ut(new we.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(l) {
        return i.core.get({ trans: l, key: t }).then(function(p) {
          return i.hook.reading.fire(p);
        });
      }).then(a);
    }, yt.prototype.where = function(t) {
      if (typeof t == "string") return new this.db.WhereClause(this, t);
      if (M(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
      var a = P(t);
      if (a.length === 1) return this.where(a[0]).equals(t[a[0]]);
      var i = this.schema.indexes.concat(this.schema.primKey).filter(function(v) {
        if (v.compound && a.every(function(E) {
          return 0 <= v.keyPath.indexOf(E);
        })) {
          for (var A = 0; A < a.length; ++A) if (a.indexOf(v.keyPath[A]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(v, A) {
        return v.keyPath.length - A.keyPath.length;
      })[0];
      if (i && this.db._maxKey !== Vn) {
        var g = i.keyPath.slice(0, a.length);
        return this.where(g).equals(g.map(function(A) {
          return t[A];
        }));
      }
      !i && Re && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
      var l = this.schema.idxByName;
      function p(v, A) {
        return ve(v, A) === 0;
      }
      var k = a.reduce(function(C, A) {
        var E = C[0], N = C[1], C = l[A], L = t[A];
        return [E || C, E || !C ? Un(N, C && C.multi ? function(T) {
          return T = ie(T, A), M(T) && T.some(function(D) {
            return p(L, D);
          });
        } : function(T) {
          return p(L, ie(T, A));
        }) : N];
      }, [null, null]), g = k[0], k = k[1];
      return g ? this.where(g.name).equals(t[g.keyPath]).filter(k) : i ? this.filter(k) : this.where(a).equals("");
    }, yt.prototype.filter = function(t) {
      return this.toCollection().and(t);
    }, yt.prototype.count = function(t) {
      return this.toCollection().count(t);
    }, yt.prototype.offset = function(t) {
      return this.toCollection().offset(t);
    }, yt.prototype.limit = function(t) {
      return this.toCollection().limit(t);
    }, yt.prototype.each = function(t) {
      return this.toCollection().each(t);
    }, yt.prototype.toArray = function(t) {
      return this.toCollection().toArray(t);
    }, yt.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, yt.prototype.orderBy = function(t) {
      return new this.db.Collection(new this.db.WhereClause(this, M(t) ? "[".concat(t.join("+"), "]") : t));
    }, yt.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, yt.prototype.mapToClass = function(t) {
      var a, i = this.db, l = this.name;
      function p() {
        return a !== null && a.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = t).prototype instanceof Va && (function(A, E) {
        if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
        function N() {
          this.constructor = A;
        }
        u(A, E), A.prototype = E === null ? Object.create(E) : (N.prototype = E.prototype, new N());
      }(p, a = t), Object.defineProperty(p.prototype, "db", { get: function() {
        return i;
      }, enumerable: !1, configurable: !0 }), p.prototype.table = function() {
        return l;
      }, t = p);
      for (var g = /* @__PURE__ */ new Set(), k = t.prototype; k; k = U(k)) Object.getOwnPropertyNames(k).forEach(function(A) {
        return g.add(A);
      });
      function v(A) {
        if (!A) return A;
        var E, N = Object.create(t.prototype);
        for (E in A) if (!g.has(E)) try {
          N[E] = A[E];
        } catch {
        }
        return N;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = v, this.hook("reading", v), t;
    }, yt.prototype.defineClass = function() {
      return this.mapToClass(function(t) {
        _(this, t);
      });
    }, yt.prototype.add = function(t, a) {
      var i = this, l = this.schema.primKey, p = l.auto, g = l.keyPath, k = t;
      return g && p && (k = Zn(g)(t)), this._trans("readwrite", function(v) {
        return i.core.mutate({ trans: v, type: "add", keys: a != null ? [a] : null, values: [k] });
      }).then(function(v) {
        return v.numFailures ? x.reject(v.failures[0]) : v.lastResult;
      }).then(function(v) {
        if (g) try {
          ce(t, g, v);
        } catch {
        }
        return v;
      });
    }, yt.prototype.upsert = function(t, a) {
      var i = this, l = this.schema.primKey.keyPath;
      return this._trans("readwrite", function(p) {
        return i.core.get({ trans: p, key: t }).then(function(g) {
          var k = g ?? {};
          return Ua(k, a), l && ce(k, l, t), i.core.mutate({ trans: p, type: "put", values: [k], keys: [t], upsert: !0, updates: { keys: [t], changeSpecs: [a] } }).then(function(v) {
            return v.numFailures ? x.reject(v.failures[0]) : !!g;
          });
        });
      });
    }, yt.prototype.update = function(t, a) {
      return typeof t != "object" || M(t) ? this.where(":id").equals(t).modify(a) : (t = ie(t, this.schema.primKey.keyPath), t === void 0 ? Ut(new we.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(a));
    }, yt.prototype.put = function(t, a) {
      var i = this, l = this.schema.primKey, p = l.auto, g = l.keyPath, k = t;
      return g && p && (k = Zn(g)(t)), this._trans("readwrite", function(v) {
        return i.core.mutate({ trans: v, type: "put", values: [k], keys: a != null ? [a] : null });
      }).then(function(v) {
        return v.numFailures ? x.reject(v.failures[0]) : v.lastResult;
      }).then(function(v) {
        if (g) try {
          ce(t, g, v);
        } catch {
        }
        return v;
      });
    }, yt.prototype.delete = function(t) {
      var a = this;
      return this._trans("readwrite", function(i) {
        return a.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(l) {
          return va(a, [t], l);
        }).then(function(l) {
          return l.numFailures ? x.reject(l.failures[0]) : void 0;
        });
      });
    }, yt.prototype.clear = function() {
      var t = this;
      return this._trans("readwrite", function(a) {
        return t.core.mutate({ trans: a, type: "deleteRange", range: fe }).then(function(i) {
          return va(t, null, i);
        });
      }).then(function(a) {
        return a.numFailures ? x.reject(a.failures[0]) : void 0;
      });
    }, yt.prototype.bulkGet = function(t) {
      var a = this;
      return this._trans("readonly", function(i) {
        return a.core.getMany({ keys: t, trans: i }).then(function(l) {
          return l.map(function(p) {
            return a.hook.reading.fire(p);
          });
        });
      });
    }, yt.prototype.bulkAdd = function(t, a, i) {
      var l = this, p = Array.isArray(a) ? a : void 0, g = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(k) {
        var E = l.schema.primKey, v = E.auto, E = E.keyPath;
        if (E && p) throw new we.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new we.InvalidArgument("Arguments objects and keys must have the same length");
        var A = t.length, E = E && v ? t.map(Zn(E)) : t;
        return l.core.mutate({ trans: k, type: "add", keys: p, values: E, wantResults: g }).then(function(D) {
          var C = D.numFailures, L = D.results, T = D.lastResult, D = D.failures;
          if (C === 0) return g ? L : T;
          throw new tt("".concat(l.name, ".bulkAdd(): ").concat(C, " of ").concat(A, " operations failed"), D);
        });
      });
    }, yt.prototype.bulkPut = function(t, a, i) {
      var l = this, p = Array.isArray(a) ? a : void 0, g = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(k) {
        var E = l.schema.primKey, v = E.auto, E = E.keyPath;
        if (E && p) throw new we.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new we.InvalidArgument("Arguments objects and keys must have the same length");
        var A = t.length, E = E && v ? t.map(Zn(E)) : t;
        return l.core.mutate({ trans: k, type: "put", keys: p, values: E, wantResults: g }).then(function(D) {
          var C = D.numFailures, L = D.results, T = D.lastResult, D = D.failures;
          if (C === 0) return g ? L : T;
          throw new tt("".concat(l.name, ".bulkPut(): ").concat(C, " of ").concat(A, " operations failed"), D);
        });
      });
    }, yt.prototype.bulkUpdate = function(t) {
      var a = this, i = this.core, l = t.map(function(k) {
        return k.key;
      }), p = t.map(function(k) {
        return k.changes;
      }), g = [];
      return this._trans("readwrite", function(k) {
        return i.getMany({ trans: k, keys: l, cache: "clone" }).then(function(v) {
          var A = [], E = [];
          t.forEach(function(C, L) {
            var T = C.key, D = C.changes, O = v[L];
            if (O) {
              for (var B = 0, K = Object.keys(D); B < K.length; B++) {
                var H = K[B], Y = D[H];
                if (H === a.schema.primKey.keyPath) {
                  if (ve(Y, T) !== 0) throw new we.Constraint("Cannot update primary key in bulkUpdate()");
                } else ce(O, H, Y);
              }
              g.push(L), A.push(T), E.push(O);
            }
          });
          var N = A.length;
          return i.mutate({ trans: k, type: "put", keys: A, values: E, updates: { keys: l, changeSpecs: p } }).then(function(C) {
            var L = C.numFailures, T = C.failures;
            if (L === 0) return N;
            for (var D = 0, O = Object.keys(T); D < O.length; D++) {
              var B, K = O[D], H = g[Number(K)];
              H != null && (B = T[K], delete T[K], T[H] = B);
            }
            throw new tt("".concat(a.name, ".bulkUpdate(): ").concat(L, " of ").concat(N, " operations failed"), T);
          });
        });
      });
    }, yt.prototype.bulkDelete = function(t) {
      var a = this, i = t.length;
      return this._trans("readwrite", function(l) {
        return a.core.mutate({ trans: l, type: "delete", keys: t }).then(function(p) {
          return va(a, t, p);
        });
      }).then(function(k) {
        var p = k.numFailures, g = k.lastResult, k = k.failures;
        if (p === 0) return g;
        throw new tt("".concat(a.name, ".bulkDelete(): ").concat(p, " of ").concat(i, " operations failed"), k);
      });
    }, yt);
    function yt() {
    }
    function Pa(t) {
      function a(k, v) {
        if (v) {
          for (var A = arguments.length, E = new Array(A - 1); --A; ) E[A - 1] = arguments[A];
          return i[k].subscribe.apply(null, E), t;
        }
        if (typeof k == "string") return i[k];
      }
      var i = {};
      a.addEventType = g;
      for (var l = 1, p = arguments.length; l < p; ++l) g(arguments[l]);
      return a;
      function g(k, v, A) {
        if (typeof k != "object") {
          var E;
          v = v || wt;
          var N = { subscribers: [], fire: A = A || I, subscribe: function(C) {
            N.subscribers.indexOf(C) === -1 && (N.subscribers.push(C), N.fire = v(N.fire, C));
          }, unsubscribe: function(C) {
            N.subscribers = N.subscribers.filter(function(L) {
              return L !== C;
            }), N.fire = N.subscribers.reduce(v, A);
          } };
          return i[k] = a[k] = N;
        }
        P(E = k).forEach(function(C) {
          var L = E[C];
          if (M(L)) g(C, E[C][0], E[C][1]);
          else {
            if (L !== "asap") throw new we.InvalidArgument("Invalid event config");
            var T = g(C, G, function() {
              for (var D = arguments.length, O = new Array(D); D--; ) O[D] = arguments[D];
              T.subscribers.forEach(function(B) {
                Ae(function() {
                  B.apply(null, O);
                });
              });
            });
          }
        });
      }
    }
    function Qn(t, a) {
      return ge(a).from({ prototype: t }), a;
    }
    function Kn(t, a) {
      return !(t.filter || t.algorithm || t.or) && (a ? t.justLimit : !t.replayFilter);
    }
    function wr(t, a) {
      t.filter = Un(t.filter, a);
    }
    function yr(t, a, i) {
      var l = t.replayFilter;
      t.replayFilter = l ? function() {
        return Un(l(), a());
      } : a, t.justLimit = i && !l;
    }
    function xa(t, a) {
      if (t.isPrimKey) return a.primaryKey;
      var i = a.getIndexByKeyPath(t.index);
      if (!i) throw new we.Schema("KeyPath " + t.index + " on object store " + a.name + " is not indexed");
      return i;
    }
    function Xn(t, a, i) {
      var l = xa(t, a.schema);
      return a.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: l, range: t.range } });
    }
    function ea(t, a, i, l) {
      var p = t.replayFilter ? Un(t.filter, t.replayFilter()) : t.filter;
      if (t.or) {
        var g = {}, k = function(v, A, E) {
          var N, C;
          p && !p(A, E, function(L) {
            return A.stop(L);
          }, function(L) {
            return A.fail(L);
          }) || ((C = "" + (N = A.primaryKey)) == "[object ArrayBuffer]" && (C = "" + new Uint8Array(N)), X(g, C) || (g[C] = !0, a(v, A, E)));
        };
        return Promise.all([t.or._iterate(k, i), ja(Xn(t, l, i), t.algorithm, k, !t.keysOnly && t.valueMapper)]);
      }
      return ja(Xn(t, l, i), Un(t.algorithm, p), a, !t.keysOnly && t.valueMapper);
    }
    function ja(t, a, i, l) {
      var p = xt(l ? function(g, k, v) {
        return i(l(g), k, v);
      } : i);
      return t.then(function(g) {
        if (g) return g.start(function() {
          var k = function() {
            return g.continue();
          };
          a && !a(g, function(v) {
            return k = v;
          }, function(v) {
            g.stop(v), k = I;
          }, function(v) {
            g.fail(v), k = I;
          }) || p(g.value, g, function(v) {
            return k = v;
          }), k();
        });
      });
    }
    var br = (ct.prototype._read = function(t, a) {
      var i = this._ctx;
      return i.error ? i.table._trans(null, Ut.bind(null, i.error)) : i.table._trans("readonly", t).then(a);
    }, ct.prototype._write = function(t) {
      var a = this._ctx;
      return a.error ? a.table._trans(null, Ut.bind(null, a.error)) : a.table._trans("readwrite", t, "locked");
    }, ct.prototype._addAlgorithm = function(t) {
      var a = this._ctx;
      a.algorithm = Un(a.algorithm, t);
    }, ct.prototype._iterate = function(t, a) {
      return ea(this._ctx, t, a, this._ctx.table.core);
    }, ct.prototype.clone = function(t) {
      var a = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
      return t && _(i, t), a._ctx = i, a;
    }, ct.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, ct.prototype.each = function(t) {
      var a = this._ctx;
      return this._read(function(i) {
        return ea(a, t, i, a.table.core);
      });
    }, ct.prototype.count = function(t) {
      var a = this;
      return this._read(function(i) {
        var l = a._ctx, p = l.table.core;
        if (Kn(l, !0)) return p.count({ trans: i, query: { index: xa(l, p.schema), range: l.range } }).then(function(k) {
          return Math.min(k, l.limit);
        });
        var g = 0;
        return ea(l, function() {
          return ++g, !1;
        }, i, p).then(function() {
          return g;
        });
      }).then(t);
    }, ct.prototype.sortBy = function(t, a) {
      var i = t.split(".").reverse(), l = i[0], p = i.length - 1;
      function g(A, E) {
        return E ? g(A[i[E]], E - 1) : A[l];
      }
      var k = this._ctx.dir === "next" ? 1 : -1;
      function v(A, E) {
        return ve(g(A, p), g(E, p)) * k;
      }
      return this.toArray(function(A) {
        return A.sort(v);
      }).then(a);
    }, ct.prototype.toArray = function(t) {
      var a = this;
      return this._read(function(i) {
        var l = a._ctx;
        if (l.dir === "next" && Kn(l, !0) && 0 < l.limit) {
          var p = l.valueMapper, g = xa(l, l.table.core.schema);
          return l.table.core.query({ trans: i, limit: l.limit, values: !0, query: { index: g, range: l.range } }).then(function(v) {
            return v = v.result, p ? v.map(p) : v;
          });
        }
        var k = [];
        return ea(l, function(v) {
          return k.push(v);
        }, i, l.table.core).then(function() {
          return k;
        });
      }, t);
    }, ct.prototype.offset = function(t) {
      var a = this._ctx;
      return t <= 0 || (a.offset += t, Kn(a) ? yr(a, function() {
        var i = t;
        return function(l, p) {
          return i === 0 || (i === 1 ? --i : p(function() {
            l.advance(i), i = 0;
          }), !1);
        };
      }) : yr(a, function() {
        var i = t;
        return function() {
          return --i < 0;
        };
      })), this;
    }, ct.prototype.limit = function(t) {
      return this._ctx.limit = Math.min(this._ctx.limit, t), yr(this._ctx, function() {
        var a = t;
        return function(i, l, p) {
          return --a <= 0 && l(p), 0 <= a;
        };
      }, !0), this;
    }, ct.prototype.until = function(t, a) {
      return wr(this._ctx, function(i, l, p) {
        return !t(i.value) || (l(p), a);
      }), this;
    }, ct.prototype.first = function(t) {
      return this.limit(1).toArray(function(a) {
        return a[0];
      }).then(t);
    }, ct.prototype.last = function(t) {
      return this.reverse().first(t);
    }, ct.prototype.filter = function(t) {
      var a;
      return wr(this._ctx, function(i) {
        return t(i.value);
      }), (a = this._ctx).isMatch = Un(a.isMatch, t), this;
    }, ct.prototype.and = function(t) {
      return this.filter(t);
    }, ct.prototype.or = function(t) {
      return new this.db.WhereClause(this._ctx.table, t, this);
    }, ct.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, ct.prototype.desc = function() {
      return this.reverse();
    }, ct.prototype.eachKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, l) {
        t(l.key, l);
      });
    }, ct.prototype.eachUniqueKey = function(t) {
      return this._ctx.unique = "unique", this.eachKey(t);
    }, ct.prototype.eachPrimaryKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, l) {
        t(l.primaryKey, l);
      });
    }, ct.prototype.keys = function(t) {
      var a = this._ctx;
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(l, p) {
        i.push(p.key);
      }).then(function() {
        return i;
      }).then(t);
    }, ct.prototype.primaryKeys = function(t) {
      var a = this._ctx;
      if (a.dir === "next" && Kn(a, !0) && 0 < a.limit) return this._read(function(l) {
        var p = xa(a, a.table.core.schema);
        return a.table.core.query({ trans: l, values: !1, limit: a.limit, query: { index: p, range: a.range } });
      }).then(function(l) {
        return l.result;
      }).then(t);
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(l, p) {
        i.push(p.primaryKey);
      }).then(function() {
        return i;
      }).then(t);
    }, ct.prototype.uniqueKeys = function(t) {
      return this._ctx.unique = "unique", this.keys(t);
    }, ct.prototype.firstKey = function(t) {
      return this.limit(1).keys(function(a) {
        return a[0];
      }).then(t);
    }, ct.prototype.lastKey = function(t) {
      return this.reverse().firstKey(t);
    }, ct.prototype.distinct = function() {
      var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
      if (!t || !t.multi) return this;
      var a = {};
      return wr(this._ctx, function(p) {
        var l = p.primaryKey.toString(), p = X(a, l);
        return a[l] = !0, !p;
      }), this;
    }, ct.prototype.modify = function(t) {
      var a = this, i = this._ctx;
      return this._write(function(l) {
        var p = typeof t == "function" ? t : function(O) {
          return Ua(O, t);
        }, g = i.table.core, E = g.schema.primaryKey, k = E.outbound, v = E.extractKey, A = 200, E = a.db._options.modifyChunkSize;
        E && (A = typeof E == "object" ? E[g.name] || E["*"] || 200 : E);
        function N(O, H) {
          var K = H.failures, H = H.numFailures;
          L += O - H;
          for (var Y = 0, re = P(K); Y < re.length; Y++) {
            var he = re[Y];
            C.push(K[he]);
          }
        }
        var C = [], L = 0, T = [], D = t === Ca;
        return a.clone().primaryKeys().then(function(O) {
          function B(H) {
            var Y = Math.min(A, O.length - H), re = O.slice(H, H + Y);
            return (D ? Promise.resolve([]) : g.getMany({ trans: l, keys: re, cache: "immutable" })).then(function(he) {
              var me = [], pe = [], be = k ? [] : null, xe = D ? re : [];
              if (!D) for (var Se = 0; Se < Y; ++Se) {
                var Te = he[Se], Xe = { value: Le(Te), primKey: O[H + Se] };
                p.call(Xe, Xe.value, Xe) !== !1 && (Xe.value == null ? xe.push(O[H + Se]) : k || ve(v(Te), v(Xe.value)) === 0 ? (pe.push(Xe.value), k && be.push(O[H + Se])) : (xe.push(O[H + Se]), me.push(Xe.value)));
              }
              return Promise.resolve(0 < me.length && g.mutate({ trans: l, type: "add", values: me }).then(function(ot) {
                for (var ne in ot.failures) xe.splice(parseInt(ne), 1);
                N(me.length, ot);
              })).then(function() {
                return (0 < pe.length || K && typeof t == "object") && g.mutate({ trans: l, type: "put", keys: be, values: pe, criteria: K, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < H }).then(function(ot) {
                  return N(pe.length, ot);
                });
              }).then(function() {
                return (0 < xe.length || K && D) && g.mutate({ trans: l, type: "delete", keys: xe, criteria: K, isAdditionalChunk: 0 < H }).then(function(ot) {
                  return va(i.table, xe, ot);
                }).then(function(ot) {
                  return N(xe.length, ot);
                });
              }).then(function() {
                return O.length > H + Y && B(H + A);
              });
            });
          }
          var K = Kn(i) && i.limit === 1 / 0 && (typeof t != "function" || D) && { index: i.index, range: i.range };
          return B(0).then(function() {
            if (0 < C.length) throw new Ke("Error modifying one or more objects", C, L, T);
            return O.length;
          });
        });
      });
    }, ct.prototype.delete = function() {
      var t = this._ctx, a = t.range;
      return !Kn(t) || t.table.schema.yProps || !t.isPrimKey && a.type !== 3 ? this.modify(Ca) : this._write(function(i) {
        var l = t.table.core.schema.primaryKey, p = a;
        return t.table.core.count({ trans: i, query: { index: l, range: p } }).then(function(g) {
          return t.table.core.mutate({ trans: i, type: "deleteRange", range: p }).then(function(A) {
            var v = A.failures, A = A.numFailures;
            if (A) throw new Ke("Could not delete some values", Object.keys(v).map(function(E) {
              return v[E];
            }), g - A);
            return g - A;
          });
        });
      });
    }, ct);
    function ct() {
    }
    var Ca = function(t, a) {
      return a.value = null;
    };
    function bo(t, a) {
      return t < a ? -1 : t === a ? 0 : 1;
    }
    function vr(t, a) {
      return a < t ? -1 : t === a ? 0 : 1;
    }
    function bt(t, a, i) {
      return t = t instanceof $n ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(a), t;
    }
    function yn(t) {
      return new t.Collection(t, function() {
        return Ka("");
      }).limit(0);
    }
    function Ma(t, a, i, l) {
      var p, g, k, v, A, E, N, C = i.length;
      if (!i.every(function(D) {
        return typeof D == "string";
      })) return bt(t, Kr);
      function L(D) {
        p = D === "next" ? function(B) {
          return B.toUpperCase();
        } : function(B) {
          return B.toLowerCase();
        }, g = D === "next" ? function(B) {
          return B.toLowerCase();
        } : function(B) {
          return B.toUpperCase();
        }, k = D === "next" ? bo : vr;
        var O = i.map(function(B) {
          return { lower: g(B), upper: p(B) };
        }).sort(function(B, K) {
          return k(B.lower, K.lower);
        });
        v = O.map(function(B) {
          return B.upper;
        }), A = O.map(function(B) {
          return B.lower;
        }), N = (E = D) === "next" ? "" : l;
      }
      L("next"), t = new t.Collection(t, function() {
        return In(v[0], A[C - 1] + l);
      }), t._ondirectionchange = function(D) {
        L(D);
      };
      var T = 0;
      return t._addAlgorithm(function(D, O, B) {
        var K = D.key;
        if (typeof K != "string") return !1;
        var H = g(K);
        if (a(H, A, T)) return !0;
        for (var Y = null, re = T; re < C; ++re) {
          var he = function(me, pe, be, xe, Se, Te) {
            for (var Xe = Math.min(me.length, xe.length), ot = -1, ne = 0; ne < Xe; ++ne) {
              var sn = pe[ne];
              if (sn !== xe[ne]) return Se(me[ne], be[ne]) < 0 ? me.substr(0, ne) + be[ne] + be.substr(ne + 1) : Se(me[ne], xe[ne]) < 0 ? me.substr(0, ne) + xe[ne] + be.substr(ne + 1) : 0 <= ot ? me.substr(0, ot) + pe[ot] + be.substr(ot + 1) : null;
              Se(me[ne], sn) < 0 && (ot = ne);
            }
            return Xe < xe.length && Te === "next" ? me + be.substr(me.length) : Xe < me.length && Te === "prev" ? me.substr(0, be.length) : ot < 0 ? null : me.substr(0, ot) + xe[ot] + be.substr(ot + 1);
          }(K, H, v[re], A[re], k, E);
          he === null && Y === null ? T = re + 1 : (Y === null || 0 < k(Y, he)) && (Y = he);
        }
        return O(Y !== null ? function() {
          D.continue(Y + N);
        } : B), !1;
      }), t;
    }
    function In(t, a, i, l) {
      return { type: 2, lower: t, upper: a, lowerOpen: i, upperOpen: l };
    }
    function Ka(t) {
      return { type: 1, lower: t, upper: t };
    }
    var $n = (Object.defineProperty(Ct.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), Ct.prototype.between = function(t, a, i, l) {
      i = i !== !1, l = l === !0;
      try {
        return 0 < this._cmp(t, a) || this._cmp(t, a) === 0 && (i || l) && (!i || !l) ? yn(this) : new this.Collection(this, function() {
          return In(t, a, !i, !l);
        });
      } catch {
        return bt(this, Mn);
      }
    }, Ct.prototype.equals = function(t) {
      return t == null ? bt(this, Mn) : new this.Collection(this, function() {
        return Ka(t);
      });
    }, Ct.prototype.above = function(t) {
      return t == null ? bt(this, Mn) : new this.Collection(this, function() {
        return In(t, void 0, !0);
      });
    }, Ct.prototype.aboveOrEqual = function(t) {
      return t == null ? bt(this, Mn) : new this.Collection(this, function() {
        return In(t, void 0, !1);
      });
    }, Ct.prototype.below = function(t) {
      return t == null ? bt(this, Mn) : new this.Collection(this, function() {
        return In(void 0, t, !1, !0);
      });
    }, Ct.prototype.belowOrEqual = function(t) {
      return t == null ? bt(this, Mn) : new this.Collection(this, function() {
        return In(void 0, t);
      });
    }, Ct.prototype.startsWith = function(t) {
      return typeof t != "string" ? bt(this, Kr) : this.between(t, t + Vn, !0, !0);
    }, Ct.prototype.startsWithIgnoreCase = function(t) {
      return t === "" ? this.startsWith(t) : Ma(this, function(a, i) {
        return a.indexOf(i[0]) === 0;
      }, [t], Vn);
    }, Ct.prototype.equalsIgnoreCase = function(t) {
      return Ma(this, function(a, i) {
        return a === i[0];
      }, [t], "");
    }, Ct.prototype.anyOfIgnoreCase = function() {
      var t = Ve.apply(Tt, arguments);
      return t.length === 0 ? yn(this) : Ma(this, function(a, i) {
        return i.indexOf(a) !== -1;
      }, t, "");
    }, Ct.prototype.startsWithAnyOfIgnoreCase = function() {
      var t = Ve.apply(Tt, arguments);
      return t.length === 0 ? yn(this) : Ma(this, function(a, i) {
        return i.some(function(l) {
          return a.indexOf(l) === 0;
        });
      }, t, Vn);
    }, Ct.prototype.anyOf = function() {
      var t = this, a = Ve.apply(Tt, arguments), i = this._cmp;
      try {
        a.sort(i);
      } catch {
        return bt(this, Mn);
      }
      if (a.length === 0) return yn(this);
      var l = new this.Collection(this, function() {
        return In(a[0], a[a.length - 1]);
      });
      l._ondirectionchange = function(g) {
        i = g === "next" ? t._ascending : t._descending, a.sort(i);
      };
      var p = 0;
      return l._addAlgorithm(function(g, k, v) {
        for (var A = g.key; 0 < i(A, a[p]); ) if (++p === a.length) return k(v), !1;
        return i(A, a[p]) === 0 || (k(function() {
          g.continue(a[p]);
        }), !1);
      }), l;
    }, Ct.prototype.notEqual = function(t) {
      return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, Ct.prototype.noneOf = function() {
      var t = Ve.apply(Tt, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return bt(this, Mn);
      }
      var a = t.reduce(function(i, l) {
        return i ? i.concat([[i[i.length - 1][1], l]]) : [[-1 / 0, l]];
      }, null);
      return a.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
    }, Ct.prototype.inAnyRange = function(K, a) {
      var i = this, l = this._cmp, p = this._ascending, g = this._descending, k = this._min, v = this._max;
      if (K.length === 0) return yn(this);
      if (!K.every(function(H) {
        return H[0] !== void 0 && H[1] !== void 0 && p(H[0], H[1]) <= 0;
      })) return bt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", we.InvalidArgument);
      var A = !a || a.includeLowers !== !1, E = a && a.includeUppers === !0, N, C = p;
      function L(H, Y) {
        return C(H[0], Y[0]);
      }
      try {
        (N = K.reduce(function(H, Y) {
          for (var re = 0, he = H.length; re < he; ++re) {
            var me = H[re];
            if (l(Y[0], me[1]) < 0 && 0 < l(Y[1], me[0])) {
              me[0] = k(me[0], Y[0]), me[1] = v(me[1], Y[1]);
              break;
            }
          }
          return re === he && H.push(Y), H;
        }, [])).sort(L);
      } catch {
        return bt(this, Mn);
      }
      var T = 0, D = E ? function(H) {
        return 0 < p(H, N[T][1]);
      } : function(H) {
        return 0 <= p(H, N[T][1]);
      }, O = A ? function(H) {
        return 0 < g(H, N[T][0]);
      } : function(H) {
        return 0 <= g(H, N[T][0]);
      }, B = D, K = new this.Collection(this, function() {
        return In(N[0][0], N[N.length - 1][1], !A, !E);
      });
      return K._ondirectionchange = function(H) {
        C = H === "next" ? (B = D, p) : (B = O, g), N.sort(L);
      }, K._addAlgorithm(function(H, Y, re) {
        for (var he, me = H.key; B(me); ) if (++T === N.length) return Y(re), !1;
        return !D(he = me) && !O(he) || (i._cmp(me, N[T][1]) === 0 || i._cmp(me, N[T][0]) === 0 || Y(function() {
          C === p ? H.continue(N[T][0]) : H.continue(N[T][1]);
        }), !1);
      }), K;
    }, Ct.prototype.startsWithAnyOf = function() {
      var t = Ve.apply(Tt, arguments);
      return t.every(function(a) {
        return typeof a == "string";
      }) ? t.length === 0 ? yn(this) : this.inAnyRange(t.map(function(a) {
        return [a, a + Vn];
      })) : bt(this, "startsWithAnyOf() only works with strings");
    }, Ct);
    function Ct() {
    }
    function jt(t) {
      return xt(function(a) {
        return fn(a), t(a.target.error), !1;
      });
    }
    function fn(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
    }
    var An = "storagemutated", bn = "x-storagemutated-1", _t = Pa(null, An), Dn = (vn.prototype._lock = function() {
      return ee(!Ee.global), ++this._reculock, this._reculock !== 1 || Ee.global || (Ee.lockOwnerFor = this), this;
    }, vn.prototype._unlock = function() {
      if (ee(!Ee.global), --this._reculock == 0) for (Ee.global || (Ee.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var t = this._blockedFuncs.shift();
        try {
          Rn(t[1], t[0]);
        } catch {
        }
      }
      return this;
    }, vn.prototype._locked = function() {
      return this._reculock && Ee.lockOwnerFor !== this;
    }, vn.prototype.create = function(t) {
      var a = this;
      if (!this.mode) return this;
      var i = this.db.idbdb, l = this.db._state.dbOpenError;
      if (ee(!this.idbtrans), !t && !i) switch (l && l.name) {
        case "DatabaseClosedError":
          throw new we.DatabaseClosed(l);
        case "MissingAPIError":
          throw new we.MissingAPI(l.message, l);
        default:
          throw new we.OpenFailed(l);
      }
      if (!this.active) throw new we.TransactionInactive();
      return ee(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = xt(function(p) {
        fn(p), a._reject(t.error);
      }), t.onabort = xt(function(p) {
        fn(p), a.active && a._reject(new we.Abort(t.error)), a.active = !1, a.on("abort").fire(p);
      }), t.oncomplete = xt(function() {
        a.active = !1, a._resolve(), "mutatedParts" in t && _t.storagemutated.fire(t.mutatedParts);
      }), this;
    }, vn.prototype._promise = function(t, a, i) {
      var l = this;
      if (t === "readwrite" && this.mode !== "readwrite") return Ut(new we.ReadOnly("Transaction is readonly"));
      if (!this.active) return Ut(new we.TransactionInactive());
      if (this._locked()) return new x(function(g, k) {
        l._blockedFuncs.push([function() {
          l._promise(t, a, i).then(g, k);
        }, Ee]);
      });
      if (i) return _n(function() {
        var g = new x(function(k, v) {
          l._lock();
          var A = a(k, v, l);
          A && A.then && A.then(k, v);
        });
        return g.finally(function() {
          return l._unlock();
        }), g._lib = !0, g;
      });
      var p = new x(function(g, k) {
        var v = a(g, k, l);
        v && v.then && v.then(g, k);
      });
      return p._lib = !0, p;
    }, vn.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, vn.prototype.waitFor = function(t) {
      var a, i = this._root(), l = x.resolve(t);
      i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
        return l;
      }) : (i._waitingFor = l, i._waitingQueue = [], a = i.idbtrans.objectStore(i.storeNames[0]), function g() {
        for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
        i._waitingFor && (a.get(-1 / 0).onsuccess = g);
      }());
      var p = i._waitingFor;
      return new x(function(g, k) {
        l.then(function(v) {
          return i._waitingQueue.push(xt(g.bind(null, v)));
        }, function(v) {
          return i._waitingQueue.push(xt(k.bind(null, v)));
        }).finally(function() {
          i._waitingFor === p && (i._waitingFor = null);
        });
      });
    }, vn.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new we.Abort()));
    }, vn.prototype.table = function(t) {
      var a = this._memoizedTables || (this._memoizedTables = {});
      if (X(a, t)) return a[t];
      var i = this.schema[t];
      if (!i) throw new we.NotFound("Table " + t + " not part of transaction");
      return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), a[t] = i;
    }, vn);
    function vn() {
    }
    function Mt(t, a, i, l, p, g, k, v) {
      return { name: t, keyPath: a, unique: i, multi: l, auto: p, compound: g, src: (i && !k ? "&" : "") + (l ? "*" : "") + (p ? "++" : "") + kr(a), type: v };
    }
    function kr(t) {
      return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
    }
    function Ia(t, a, i) {
      return { name: t, primKey: a, indexes: i, mappedClass: null, idxByName: (l = function(p) {
        return [p.name, p];
      }, i.reduce(function(p, g, k) {
        return k = l(g, k), k && (p[k[0]] = k[1]), p;
      }, {})) };
      var l;
    }
    var Aa = function(t) {
      try {
        return t.only([[]]), Aa = function() {
          return [[]];
        }, [[]];
      } catch {
        return Aa = function() {
          return Vn;
        }, Vn;
      }
    };
    function On(t) {
      return t == null ? function() {
      } : typeof t == "string" ? (a = t).split(".").length === 1 ? function(i) {
        return i[a];
      } : function(i) {
        return ie(i, a);
      } : function(i) {
        return ie(i, t);
      };
      var a;
    }
    function Ea(t) {
      return [].slice.call(t);
    }
    var Hr = 0;
    function Hn(t) {
      return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
    }
    function Gr(t, a, A) {
      function l(B) {
        if (B.type === 3) return null;
        if (B.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var T = B.lower, D = B.upper, O = B.lowerOpen, B = B.upperOpen;
        return T === void 0 ? D === void 0 ? null : a.upperBound(D, !!B) : D === void 0 ? a.lowerBound(T, !!O) : a.bound(T, D, !!O, !!B);
      }
      function p(L) {
        var T, D = L.name;
        return { name: D, schema: L, mutate: function(O) {
          var B = O.trans, K = O.type, H = O.keys, Y = O.values, re = O.range;
          return new Promise(function(he, me) {
            he = xt(he);
            var pe = B.objectStore(D), be = pe.keyPath == null, xe = K === "put" || K === "add";
            if (!xe && K !== "delete" && K !== "deleteRange") throw new Error("Invalid operation type: " + K);
            var Se, Te = (H || Y || { length: 1 }).length;
            if (H && Y && H.length !== Y.length) throw new Error("Given keys array must have same length as given values array.");
            if (Te === 0) return he({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function Xe(Zt) {
              ++sn, fn(Zt);
            }
            var ot = [], ne = [], sn = 0;
            if (K === "deleteRange") {
              if (re.type === 4) return he({ numFailures: sn, failures: ne, results: [], lastResult: void 0 });
              re.type === 3 ? ot.push(Se = pe.clear()) : ot.push(Se = pe.delete(l(re)));
            } else {
              var be = xe ? be ? [Y, H] : [Y, null] : [H, null], ze = be[0], Jt = be[1];
              if (xe) for (var Yt = 0; Yt < Te; ++Yt) ot.push(Se = Jt && Jt[Yt] !== void 0 ? pe[K](ze[Yt], Jt[Yt]) : pe[K](ze[Yt])), Se.onerror = Xe;
              else for (Yt = 0; Yt < Te; ++Yt) ot.push(Se = pe[K](ze[Yt])), Se.onerror = Xe;
            }
            function fa(Zt) {
              Zt = Zt.target.result, ot.forEach(function(Nn, tr) {
                return Nn.error != null && (ne[tr] = Nn.error);
              }), he({ numFailures: sn, failures: ne, results: K === "delete" ? H : ot.map(function(Nn) {
                return Nn.result;
              }), lastResult: Zt });
            }
            Se.onerror = function(Zt) {
              Xe(Zt), fa(Zt);
            }, Se.onsuccess = fa;
          });
        }, getMany: function(O) {
          var B = O.trans, K = O.keys;
          return new Promise(function(H, Y) {
            H = xt(H);
            for (var re, he = B.objectStore(D), me = K.length, pe = new Array(me), be = 0, xe = 0, Se = function(ot) {
              ot = ot.target, pe[ot._pos] = ot.result, ++xe === be && H(pe);
            }, Te = jt(Y), Xe = 0; Xe < me; ++Xe) K[Xe] != null && ((re = he.get(K[Xe]))._pos = Xe, re.onsuccess = Se, re.onerror = Te, ++be);
            be === 0 && H(pe);
          });
        }, get: function(O) {
          var B = O.trans, K = O.key;
          return new Promise(function(H, Y) {
            H = xt(H);
            var re = B.objectStore(D).get(K);
            re.onsuccess = function(he) {
              return H(he.target.result);
            }, re.onerror = jt(Y);
          });
        }, query: (T = E, function(O) {
          return new Promise(function(B, K) {
            B = xt(B);
            var H, Y, re, be = O.trans, he = O.values, me = O.limit, Se = O.query, pe = me === 1 / 0 ? void 0 : me, xe = Se.index, Se = Se.range, be = be.objectStore(D), xe = xe.isPrimaryKey ? be : be.index(xe.name), Se = l(Se);
            if (me === 0) return B({ result: [] });
            T ? ((pe = he ? xe.getAll(Se, pe) : xe.getAllKeys(Se, pe)).onsuccess = function(Te) {
              return B({ result: Te.target.result });
            }, pe.onerror = jt(K)) : (H = 0, Y = !he && "openKeyCursor" in xe ? xe.openKeyCursor(Se) : xe.openCursor(Se), re = [], Y.onsuccess = function(Te) {
              var Xe = Y.result;
              return Xe ? (re.push(he ? Xe.value : Xe.primaryKey), ++H === me ? B({ result: re }) : void Xe.continue()) : B({ result: re });
            }, Y.onerror = jt(K));
          });
        }), openCursor: function(O) {
          var B = O.trans, K = O.values, H = O.query, Y = O.reverse, re = O.unique;
          return new Promise(function(he, me) {
            he = xt(he);
            var xe = H.index, pe = H.range, be = B.objectStore(D), be = xe.isPrimaryKey ? be : be.index(xe.name), xe = Y ? re ? "prevunique" : "prev" : re ? "nextunique" : "next", Se = !K && "openKeyCursor" in be ? be.openKeyCursor(l(pe), xe) : be.openCursor(l(pe), xe);
            Se.onerror = jt(me), Se.onsuccess = xt(function(Te) {
              var Xe, ot, ne, sn, ze = Se.result;
              ze ? (ze.___id = ++Hr, ze.done = !1, Xe = ze.continue.bind(ze), ot = (ot = ze.continuePrimaryKey) && ot.bind(ze), ne = ze.advance.bind(ze), sn = function() {
                throw new Error("Cursor not stopped");
              }, ze.trans = B, ze.stop = ze.continue = ze.continuePrimaryKey = ze.advance = function() {
                throw new Error("Cursor not started");
              }, ze.fail = xt(me), ze.next = function() {
                var Jt = this, Yt = 1;
                return this.start(function() {
                  return Yt-- ? Jt.continue() : Jt.stop();
                }).then(function() {
                  return Jt;
                });
              }, ze.start = function(Jt) {
                function Yt() {
                  if (Se.result) try {
                    Jt();
                  } catch (Zt) {
                    ze.fail(Zt);
                  }
                  else ze.done = !0, ze.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, ze.stop();
                }
                var fa = new Promise(function(Zt, Nn) {
                  Zt = xt(Zt), Se.onerror = jt(Nn), ze.fail = Nn, ze.stop = function(tr) {
                    ze.stop = ze.continue = ze.continuePrimaryKey = ze.advance = sn, Zt(tr);
                  };
                });
                return Se.onsuccess = xt(function(Zt) {
                  Se.onsuccess = Yt, Yt();
                }), ze.continue = Xe, ze.continuePrimaryKey = ot, ze.advance = ne, Yt(), fa;
              }, he(ze)) : he(null);
            }, me);
          });
        }, count: function(O) {
          var B = O.query, K = O.trans, H = B.index, Y = B.range;
          return new Promise(function(re, he) {
            var me = K.objectStore(D), pe = H.isPrimaryKey ? me : me.index(H.name), me = l(Y), pe = me ? pe.count(me) : pe.count();
            pe.onsuccess = xt(function(be) {
              return re(be.target.result);
            }), pe.onerror = jt(he);
          });
        } };
      }
      var g, k, v, N = (k = A, v = Ea((g = t).objectStoreNames), { schema: { name: g.name, tables: v.map(function(L) {
        return k.objectStore(L);
      }).map(function(L) {
        var T = L.keyPath, B = L.autoIncrement, D = M(T), O = {}, B = { name: L.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: T == null, compound: D, keyPath: T, autoIncrement: B, unique: !0, extractKey: On(T) }, indexes: Ea(L.indexNames).map(function(K) {
          return L.index(K);
        }).map(function(re) {
          var H = re.name, Y = re.unique, he = re.multiEntry, re = re.keyPath, he = { name: H, compound: M(re), keyPath: re, unique: Y, multiEntry: he, extractKey: On(re) };
          return O[Hn(re)] = he;
        }), getIndexByKeyPath: function(K) {
          return O[Hn(K)];
        } };
        return O[":id"] = B.primaryKey, T != null && (O[Hn(T)] = B.primaryKey), B;
      }) }, hasGetAll: 0 < v.length && "getAll" in k.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), A = N.schema, E = N.hasGetAll, N = A.tables.map(p), C = {};
      return N.forEach(function(L) {
        return C[L.name] = L;
      }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(L) {
        if (!C[L]) throw new Error("Table '".concat(L, "' not found"));
        return C[L];
      }, MIN_KEY: -1 / 0, MAX_KEY: Aa(a), schema: A };
    }
    function zr(t, a, i, l) {
      var p = i.IDBKeyRange;
      return i.indexedDB, { dbcore: (l = Gr(a, p, l), t.dbcore.reduce(function(g, k) {
        return k = k.create, d(d({}, g), k(g));
      }, l)) };
    }
    function en(t, l) {
      var i = l.db, l = zr(t._middlewares, i, t._deps, l);
      t.core = l.dbcore, t.tables.forEach(function(p) {
        var g = p.name;
        t.core.schema.tables.some(function(k) {
          return k.name === g;
        }) && (p.core = t.core.table(g), t[g] instanceof t.Table && (t[g].core = p.core));
      });
    }
    function ta(t, a, i, l) {
      i.forEach(function(p) {
        var g = l[p];
        a.forEach(function(k) {
          var v = function A(E, N) {
            return z(E, N) || (E = U(E)) && A(E, N);
          }(k, p);
          (!v || "value" in v && v.value === void 0) && (k === t.Transaction.prototype || k instanceof t.Transaction ? ke(k, p, { get: function() {
            return this.table(p);
          }, set: function(A) {
            W(this, p, { value: A, writable: !0, configurable: !0, enumerable: !0 });
          } }) : k[p] = new t.Table(p, g));
        });
      });
    }
    function Ta(t, a) {
      a.forEach(function(i) {
        for (var l in i) i[l] instanceof t.Table && delete i[l];
      });
    }
    function Sr(t, a) {
      return t._cfg.version - a._cfg.version;
    }
    function na(t, a, i, l) {
      var p = t._dbSchema;
      i.objectStoreNames.contains("$meta") && !p.$meta && (p.$meta = Ia("$meta", Ga("")[0], []), t._storeNames.push("$meta"));
      var g = t._createTransaction("readwrite", t._storeNames, p);
      g.create(i), g._completion.catch(l);
      var k = g._reject.bind(g), v = Ee.transless || Ee;
      _n(function() {
        return Ee.trans = g, Ee.transless = v, a !== 0 ? (en(t, i), E = a, ((A = g).storeNames.includes("$meta") ? A.table("$meta").get("version").then(function(N) {
          return N ?? E;
        }) : x.resolve(E)).then(function(N) {
          return L = N, T = g, D = i, O = [], N = (C = t)._versions, B = C._dbSchema = _a(0, C.idbdb, D), (N = N.filter(function(K) {
            return K._cfg.version >= L;
          })).length !== 0 ? (N.forEach(function(K) {
            O.push(function() {
              var H = B, Y = K._cfg.dbschema;
              Ha(C, H, D), Ha(C, Y, D), B = C._dbSchema = Y;
              var re = $a(H, Y);
              re.add.forEach(function(xe) {
                zt(D, xe[0], xe[1].primKey, xe[1].indexes);
              }), re.change.forEach(function(xe) {
                if (xe.recreate) throw new we.Upgrade("Not yet support for changing primary key");
                var Se = D.objectStore(xe.name);
                xe.add.forEach(function(Te) {
                  return aa(Se, Te);
                }), xe.change.forEach(function(Te) {
                  Se.deleteIndex(Te.name), aa(Se, Te);
                }), xe.del.forEach(function(Te) {
                  return Se.deleteIndex(Te);
                });
              });
              var he = K._cfg.contentUpgrade;
              if (he && K._cfg.version > L) {
                en(C, D), T._memoizedTables = {};
                var me = ft(Y);
                re.del.forEach(function(xe) {
                  me[xe] = H[xe];
                }), Ta(C, [C.Transaction.prototype]), ta(C, [C.Transaction.prototype], P(me), me), T.schema = me;
                var pe, be = R(he);
                return be && oe(), re = x.follow(function() {
                  var xe;
                  (pe = he(T)) && be && (xe = xn.bind(null, null), pe.then(xe, xe));
                }), pe && typeof pe.then == "function" ? x.resolve(pe) : re.then(function() {
                  return pe;
                });
              }
            }), O.push(function(H) {
              var Y, re, he = K._cfg.dbschema;
              Y = he, re = H, [].slice.call(re.db.objectStoreNames).forEach(function(me) {
                return Y[me] == null && re.db.deleteObjectStore(me);
              }), Ta(C, [C.Transaction.prototype]), ta(C, [C.Transaction.prototype], C._storeNames, C._dbSchema), T.schema = C._dbSchema;
            }), O.push(function(H) {
              C.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(C.idbdb.version / 10) === K._cfg.version ? (C.idbdb.deleteObjectStore("$meta"), delete C._dbSchema.$meta, C._storeNames = C._storeNames.filter(function(Y) {
                return Y !== "$meta";
              })) : H.objectStore("$meta").put(K._cfg.version, "version"));
            });
          }), function K() {
            return O.length ? x.resolve(O.shift()(T.idbtrans)).then(K) : x.resolve();
          }().then(function() {
            Pr(B, D);
          })) : x.resolve();
          var C, L, T, D, O, B;
        }).catch(k)) : (P(p).forEach(function(N) {
          zt(i, N, p[N].primKey, p[N].indexes);
        }), en(t, i), void x.follow(function() {
          return t.on.populate.fire(g);
        }).catch(k));
        var A, E;
      });
    }
    function vo(t, a) {
      Pr(t._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
      var i = _a(0, t.idbdb, a);
      Ha(t, t._dbSchema, a);
      for (var l = 0, p = $a(i, t._dbSchema).change; l < p.length; l++) {
        var g = function(k) {
          if (k.change.length || k.recreate) return console.warn("Unable to patch indexes of table ".concat(k.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var v = a.objectStore(k.name);
          k.add.forEach(function(A) {
            Re && console.debug("Dexie upgrade patch: Creating missing index ".concat(k.name, ".").concat(A.src)), aa(v, A);
          });
        }(p[l]);
        if (typeof g == "object") return g.value;
      }
    }
    function $a(t, a) {
      var i, l = { del: [], add: [], change: [] };
      for (i in t) a[i] || l.del.push(i);
      for (i in a) {
        var p = t[i], g = a[i];
        if (p) {
          var k = { name: i, def: g, recreate: !1, del: [], add: [], change: [] };
          if ("" + (p.primKey.keyPath || "") != "" + (g.primKey.keyPath || "") || p.primKey.auto !== g.primKey.auto) k.recreate = !0, l.change.push(k);
          else {
            var v = p.idxByName, A = g.idxByName, E = void 0;
            for (E in v) A[E] || k.del.push(E);
            for (E in A) {
              var N = v[E], C = A[E];
              N ? N.src !== C.src && k.change.push(C) : k.add.push(C);
            }
            (0 < k.del.length || 0 < k.add.length || 0 < k.change.length) && l.change.push(k);
          }
        } else l.add.push([i, g]);
      }
      return l;
    }
    function zt(t, a, i, l) {
      var p = t.db.createObjectStore(a, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
      return l.forEach(function(g) {
        return aa(p, g);
      }), p;
    }
    function Pr(t, a) {
      P(t).forEach(function(i) {
        a.db.objectStoreNames.contains(i) || (Re && console.debug("Dexie: Creating missing table", i), zt(a, i, t[i].primKey, t[i].indexes));
      });
    }
    function aa(t, a) {
      t.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
    }
    function _a(t, a, i) {
      var l = {};
      return Z(a.objectStoreNames, 0).forEach(function(p) {
        for (var g = i.objectStore(p), k = Mt(kr(E = g.keyPath), E || "", !0, !1, !!g.autoIncrement, E && typeof E != "string", !0), v = [], A = 0; A < g.indexNames.length; ++A) {
          var N = g.index(g.indexNames[A]), E = N.keyPath, N = Mt(N.name, E, !!N.unique, !!N.multiEntry, !1, E && typeof E != "string", !1);
          v.push(N);
        }
        l[p] = Ia(p, k, v);
      }), l;
    }
    function Ha(t, a, i) {
      for (var l = i.db.objectStoreNames, p = 0; p < l.length; ++p) {
        var g = l[p], k = i.objectStore(g);
        t._hasGetAll = "getAll" in k;
        for (var v = 0; v < k.indexNames.length; ++v) {
          var A = k.indexNames[v], E = k.index(A).keyPath, N = typeof E == "string" ? E : "[" + Z(E).join("+") + "]";
          !a[g] || (E = a[g].idxByName[N]) && (E.name = A, delete a[g].idxByName[N], a[g].idxByName[A] = E);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && m.WorkerGlobalScope && m instanceof m.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
    }
    function Ga(t) {
      return t.split(",").map(function(a, i) {
        var g = a.split(":"), l = (p = g[1]) === null || p === void 0 ? void 0 : p.trim(), p = (a = g[0].trim()).replace(/([&*]|\+\+)/g, ""), g = /^\[/.test(p) ? p.match(/^\[(.*)\]$/)[1].split("+") : p;
        return Mt(p, g || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), M(g), i === 0, l);
      });
    }
    var ko = (kn.prototype._createTableSchema = Ia, kn.prototype._parseIndexSyntax = Ga, kn.prototype._parseStoresSpec = function(t, a) {
      var i = this;
      P(t).forEach(function(l) {
        if (t[l] !== null) {
          var p = i._parseIndexSyntax(t[l]), g = p.shift();
          if (!g) throw new we.Schema("Invalid schema for table " + l + ": " + t[l]);
          if (g.unique = !0, g.multi) throw new we.Schema("Primary key cannot be multiEntry*");
          p.forEach(function(k) {
            if (k.auto) throw new we.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!k.keyPath) throw new we.Schema("Index must have a name and cannot be an empty string");
          }), p = i._createTableSchema(l, g, p), a[l] = p;
        }
      });
    }, kn.prototype.stores = function(i) {
      var a = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? _(this._cfg.storesSource, i) : i;
      var i = a._versions, l = {}, p = {};
      return i.forEach(function(g) {
        _(l, g._cfg.storesSource), p = g._cfg.dbschema = {}, g._parseStoresSpec(l, p);
      }), a._dbSchema = p, Ta(a, [a._allTables, a, a.Transaction.prototype]), ta(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], P(p), p), a._storeNames = P(p), this;
    }, kn.prototype.upgrade = function(t) {
      return this._cfg.contentUpgrade = ht(this._cfg.contentUpgrade || I, t), this;
    }, kn);
    function kn() {
    }
    function za(t, a) {
      var i = t._dbNamesDB;
      return i || (i = t._dbNamesDB = new Tn(ba, { addons: [], indexedDB: t, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
    }
    function qa(t) {
      return t && typeof t.databases == "function";
    }
    function an(t) {
      return _n(function() {
        return Ee.letThrough = !0, t();
      });
    }
    function Wn(t) {
      return !("from" in t);
    }
    var qt = function(t, a) {
      if (!this) {
        var i = new qt();
        return t && "d" in t && _(i, t), i;
      }
      _(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? a : t } : { d: 0 });
    };
    function ra(t, a, i) {
      var l = ve(a, i);
      if (!isNaN(l)) {
        if (0 < l) throw RangeError();
        if (Wn(t)) return _(t, { from: a, to: i, d: 1 });
        var p = t.l, l = t.r;
        if (ve(i, t.from) < 0) return p ? ra(p, a, i) : t.l = { from: a, to: i, d: 1, l: null, r: null }, xr(t);
        if (0 < ve(a, t.to)) return l ? ra(l, a, i) : t.r = { from: a, to: i, d: 1, l: null, r: null }, xr(t);
        ve(a, t.from) < 0 && (t.from = a, t.l = null, t.d = l ? l.d + 1 : 1), 0 < ve(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, p && !t.l && oa(t, p), l && i && oa(t, l);
      }
    }
    function oa(t, a) {
      Wn(a) || function i(l, A) {
        var g = A.from, k = A.to, v = A.l, A = A.r;
        ra(l, g, k), v && i(l, v), A && i(l, A);
      }(t, a);
    }
    function qr(t, a) {
      var i = ia(a), l = i.next();
      if (l.done) return !1;
      for (var p = l.value, g = ia(t), k = g.next(p.from), v = k.value; !l.done && !k.done; ) {
        if (ve(v.from, p.to) <= 0 && 0 <= ve(v.to, p.from)) return !0;
        ve(p.from, v.from) < 0 ? p = (l = i.next(v.from)).value : v = (k = g.next(p.from)).value;
      }
      return !1;
    }
    function ia(t) {
      var a = Wn(t) ? null : { s: 0, n: t };
      return { next: function(i) {
        for (var l = 0 < arguments.length; a; ) switch (a.s) {
          case 0:
            if (a.s = 1, l) for (; a.n.l && ve(i, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
            else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
          case 1:
            if (a.s = 2, !l || ve(i, a.n.to) <= 0) return { value: a.n, done: !1 };
          case 2:
            if (a.n.r) {
              a.s = 3, a = { up: a, n: a.n.r, s: 0 };
              continue;
            }
          case 3:
            a = a.up;
        }
        return { done: !0 };
      } };
    }
    function xr(t) {
      var a, i, l = (((a = t.r) === null || a === void 0 ? void 0 : a.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), p = 1 < l ? "r" : l < -1 ? "l" : "";
      p && (a = p == "r" ? "l" : "r", i = d({}, t), l = t[p], t.from = l.from, t.to = l.to, t[p] = l[p], i[p] = l[a], (t[a] = i).d = It(i)), t.d = It(t);
    }
    function It(i) {
      var a = i.r, i = i.l;
      return (a ? i ? Math.max(a.d, i.d) : a.d : i ? i.d : 0) + 1;
    }
    function sa(t, a) {
      return P(a).forEach(function(i) {
        t[i] ? oa(t[i], a[i]) : t[i] = function l(p) {
          var g, k, v = {};
          for (g in p) X(p, g) && (k = p[g], v[g] = !k || typeof k != "object" || dt.has(k.constructor) ? k : l(k));
          return v;
        }(a[i]);
      }), t;
    }
    function Ra(t, a) {
      return t.all || a.all || Object.keys(t).some(function(i) {
        return a[i] && qr(a[i], t[i]);
      });
    }
    j(qt.prototype, ((on = { add: function(t) {
      return oa(this, t), this;
    }, addKey: function(t) {
      return ra(this, t, t), this;
    }, addKeys: function(t) {
      var a = this;
      return t.forEach(function(i) {
        return ra(a, i, i);
      }), this;
    }, hasKey: function(t) {
      var a = ia(this).next(t).value;
      return a && ve(a.from, t) <= 0 && 0 <= ve(a.to, t);
    } })[at] = function() {
      return ia(this);
    }, on));
    var hn = {}, En = {}, Bn = !1;
    function ca(t) {
      sa(En, t), Bn || (Bn = !0, setTimeout(function() {
        Bn = !1, At(En, !(En = {}));
      }, 0));
    }
    function At(t, a) {
      a === void 0 && (a = !1);
      var i = /* @__PURE__ */ new Set();
      if (t.all) for (var l = 0, p = Object.values(hn); l < p.length; l++) ua(k = p[l], t, i, a);
      else for (var g in t) {
        var k, v = /^idb\:\/\/(.*)\/(.*)\//.exec(g);
        v && (g = v[1], v = v[2], (k = hn["idb://".concat(g, "/").concat(v)]) && ua(k, t, i, a));
      }
      i.forEach(function(A) {
        return A();
      });
    }
    function ua(t, a, i, l) {
      for (var p = [], g = 0, k = Object.entries(t.queries.query); g < k.length; g++) {
        for (var v = k[g], A = v[0], E = [], N = 0, C = v[1]; N < C.length; N++) {
          var L = C[N];
          Ra(a, L.obsSet) ? L.subscribers.forEach(function(B) {
            return i.add(B);
          }) : l && E.push(L);
        }
        l && p.push([A, E]);
      }
      if (l) for (var T = 0, D = p; T < D.length; T++) {
        var O = D[T], A = O[0], E = O[1];
        t.queries.query[A] = E;
      }
    }
    function Cr(t) {
      var a = t._state, i = t._deps.indexedDB;
      if (a.isBeingOpened || t.idbdb) return a.dbReadyPromise.then(function() {
        return a.dbOpenError ? Ut(a.dbOpenError) : t;
      });
      a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
      var l = a.openCanceller, p = Math.round(10 * t.verno), g = !1;
      function k() {
        if (a.openCanceller !== l) throw new we.DatabaseClosed("db.open() was cancelled");
      }
      function v() {
        return new x(function(L, T) {
          if (k(), !i) throw new we.MissingAPI();
          var D = t.name, O = a.autoSchema || !p ? i.open(D) : i.open(D, p);
          if (!O) throw new we.MissingAPI();
          O.onerror = jt(T), O.onblocked = xt(t._fireOnBlocked), O.onupgradeneeded = xt(function(B) {
            var K;
            N = O.transaction, a.autoSchema && !t._options.allowEmptyDB ? (O.onerror = fn, N.abort(), O.result.close(), (K = i.deleteDatabase(D)).onsuccess = K.onerror = xt(function() {
              T(new we.NoSuchDatabase("Database ".concat(D, " doesnt exist")));
            })) : (N.onerror = jt(T), B = B.oldVersion > Math.pow(2, 62) ? 0 : B.oldVersion, C = B < 1, t.idbdb = O.result, g && vo(t, N), na(t, B / 10, N, T));
          }, T), O.onsuccess = xt(function() {
            N = null;
            var B, K, H, Y, re, he = t.idbdb = O.result, me = Z(he.objectStoreNames);
            if (0 < me.length) try {
              var pe = he.transaction((Y = me).length === 1 ? Y[0] : Y, "readonly");
              if (a.autoSchema) K = he, H = pe, (B = t).verno = K.version / 10, H = B._dbSchema = _a(0, K, H), B._storeNames = Z(K.objectStoreNames, 0), ta(B, [B._allTables], P(H), H);
              else if (Ha(t, t._dbSchema, pe), ((re = $a(_a(0, (re = t).idbdb, pe), re._dbSchema)).add.length || re.change.some(function(be) {
                return be.add.length || be.change.length;
              })) && !g) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), he.close(), p = he.version + 1, g = !0, L(v());
              en(t, pe);
            } catch {
            }
            pn.push(t), he.onversionchange = xt(function(be) {
              a.vcFired = !0, t.on("versionchange").fire(be);
            }), he.onclose = xt(function() {
              t.close({ disableAutoOpen: !1 });
            }), C && (re = t._deps, pe = D, he = re.indexedDB, re = re.IDBKeyRange, qa(he) || pe === ba || za(he, re).put({ name: pe }).catch(I)), L();
          }, T);
        }).catch(function(L) {
          switch (L == null ? void 0 : L.name) {
            case "UnknownError":
              if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
              break;
            case "VersionError":
              if (0 < p) return p = 0, v();
          }
          return x.reject(L);
        });
      }
      var A, E = a.dbReadyResolve, N = null, C = !1;
      return x.race([l, (typeof navigator > "u" ? x.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(L) {
        function T() {
          return indexedDB.databases().finally(L);
        }
        A = setInterval(T, 100), T();
      }).finally(function() {
        return clearInterval(A);
      }) : Promise.resolve()).then(v)]).then(function() {
        return k(), a.onReadyBeingFired = [], x.resolve(an(function() {
          return t.on.ready.fire(t.vip);
        })).then(function L() {
          if (0 < a.onReadyBeingFired.length) {
            var T = a.onReadyBeingFired.reduce(ht, I);
            return a.onReadyBeingFired = [], x.resolve(an(function() {
              return T(t.vip);
            })).then(L);
          }
        });
      }).finally(function() {
        a.openCanceller === l && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
      }).catch(function(L) {
        a.dbOpenError = L;
        try {
          N && N.abort();
        } catch {
        }
        return l === a.openCanceller && t._close(), Ut(L);
      }).finally(function() {
        a.openComplete = !0, E();
      }).then(function() {
        var L;
        return C && (L = {}, t.tables.forEach(function(T) {
          T.schema.indexes.forEach(function(D) {
            D.name && (L["idb://".concat(t.name, "/").concat(T.name, "/").concat(D.name)] = new qt(-1 / 0, [[[]]]));
          }), L["idb://".concat(t.name, "/").concat(T.name, "/")] = L["idb://".concat(t.name, "/").concat(T.name, "/:dels")] = new qt(-1 / 0, [[[]]]);
        }), _t(An).fire(L), At(L, !0)), t;
      });
    }
    function Mr(t) {
      function a(g) {
        return t.next(g);
      }
      var i = p(a), l = p(function(g) {
        return t.throw(g);
      });
      function p(g) {
        return function(A) {
          var v = g(A), A = v.value;
          return v.done ? A : A && typeof A.then == "function" ? A.then(i, l) : M(A) ? Promise.all(A).then(i, l) : i(A);
        };
      }
      return p(a)();
    }
    function Ja(t, a, i) {
      for (var l = M(t) ? t.slice() : [t], p = 0; p < i; ++p) l.push(a);
      return l;
    }
    var Jr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), l = i.schema, p = {}, g = [];
        function k(C, L, T) {
          var D = Hn(C), O = p[D] = p[D] || [], B = C == null ? 0 : typeof C == "string" ? 1 : C.length, K = 0 < L, K = d(d({}, T), { name: K ? "".concat(D, "(virtual-from:").concat(T.name, ")") : T.name, lowLevelIndex: T, isVirtual: K, keyTail: L, keyLength: B, extractKey: On(C), unique: !K && T.unique });
          return O.push(K), K.isPrimaryKey || g.push(K), 1 < B && k(B === 2 ? C[0] : C.slice(0, B - 1), L + 1, T), O.sort(function(H, Y) {
            return H.keyTail - Y.keyTail;
          }), K;
        }
        a = k(l.primaryKey.keyPath, 0, l.primaryKey), p[":id"] = [a];
        for (var v = 0, A = l.indexes; v < A.length; v++) {
          var E = A[v];
          k(E.keyPath, 0, E);
        }
        function N(C) {
          var L, T = C.query.index;
          return T.isVirtual ? d(d({}, C), { query: { index: T.lowLevelIndex, range: (L = C.query.range, T = T.keyTail, { type: L.type === 1 ? 2 : L.type, lower: Ja(L.lower, L.lowerOpen ? t.MAX_KEY : t.MIN_KEY, T), lowerOpen: !0, upper: Ja(L.upper, L.upperOpen ? t.MIN_KEY : t.MAX_KEY, T), upperOpen: !0 }) } }) : C;
        }
        return d(d({}, i), { schema: d(d({}, l), { primaryKey: a, indexes: g, getIndexByKeyPath: function(C) {
          return (C = p[Hn(C)]) && C[0];
        } }), count: function(C) {
          return i.count(N(C));
        }, query: function(C) {
          return i.query(N(C));
        }, openCursor: function(C) {
          var L = C.query.index, T = L.keyTail, D = L.isVirtual, O = L.keyLength;
          return D ? i.openCursor(N(C)).then(function(K) {
            return K && B(K);
          }) : i.openCursor(C);
          function B(K) {
            return Object.create(K, { continue: { value: function(H) {
              H != null ? K.continue(Ja(H, C.reverse ? t.MAX_KEY : t.MIN_KEY, T)) : C.unique ? K.continue(K.key.slice(0, O).concat(C.reverse ? t.MIN_KEY : t.MAX_KEY, T)) : K.continue();
            } }, continuePrimaryKey: { value: function(H, Y) {
              K.continuePrimaryKey(Ja(H, t.MAX_KEY, T), Y);
            } }, primaryKey: { get: function() {
              return K.primaryKey;
            } }, key: { get: function() {
              var H = K.key;
              return O === 1 ? H[0] : H.slice(0, O);
            } }, value: { get: function() {
              return K.value;
            } } });
          }
        } });
      } });
    } };
    function Ir(t, a, i, l) {
      return i = i || {}, l = l || "", P(t).forEach(function(p) {
        var g, k, v;
        X(a, p) ? (g = t[p], k = a[p], typeof g == "object" && typeof k == "object" && g && k ? (v = De(g)) !== De(k) ? i[l + p] = a[p] : v === "Object" ? Ir(g, k, i, l + p + ".") : g !== k && (i[l + p] = a[p]) : g !== k && (i[l + p] = a[p])) : i[l + p] = void 0;
      }), P(a).forEach(function(p) {
        X(t, p) || (i[l + p] = a[p]);
      }), i;
    }
    function Ya(t, a) {
      return a.type === "delete" ? a.keys : a.keys || a.values.map(t.extractKey);
    }
    var So = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), l = i.schema.primaryKey;
        return d(d({}, i), { mutate: function(p) {
          var g = Ee.trans, k = g.table(a).hook, v = k.deleting, A = k.creating, E = k.updating;
          switch (p.type) {
            case "add":
              if (A.fire === I) break;
              return g._promise("readwrite", function() {
                return N(p);
              }, !0);
            case "put":
              if (A.fire === I && E.fire === I) break;
              return g._promise("readwrite", function() {
                return N(p);
              }, !0);
            case "delete":
              if (v.fire === I) break;
              return g._promise("readwrite", function() {
                return N(p);
              }, !0);
            case "deleteRange":
              if (v.fire === I) break;
              return g._promise("readwrite", function() {
                return function C(L, T, D) {
                  return i.query({ trans: L, values: !1, query: { index: l, range: T }, limit: D }).then(function(O) {
                    var B = O.result;
                    return N({ type: "delete", keys: B, trans: L }).then(function(K) {
                      return 0 < K.numFailures ? Promise.reject(K.failures[0]) : B.length < D ? { failures: [], numFailures: 0, lastResult: void 0 } : C(L, d(d({}, T), { lower: B[B.length - 1], lowerOpen: !0 }), D);
                    });
                  });
                }(p.trans, p.range, 1e4);
              }, !0);
          }
          return i.mutate(p);
          function N(C) {
            var L, T, D, O = Ee.trans, B = C.keys || Ya(l, C);
            if (!B) throw new Error("Keys missing");
            return (C = C.type === "add" || C.type === "put" ? d(d({}, C), { keys: B }) : d({}, C)).type !== "delete" && (C.values = y([], C.values)), C.keys && (C.keys = y([], C.keys)), L = i, D = B, ((T = C).type === "add" ? Promise.resolve([]) : L.getMany({ trans: T.trans, keys: D, cache: "immutable" })).then(function(K) {
              var H = B.map(function(Y, re) {
                var he, me, pe, be = K[re], xe = { onerror: null, onsuccess: null };
                return C.type === "delete" ? v.fire.call(xe, Y, be, O) : C.type === "add" || be === void 0 ? (he = A.fire.call(xe, Y, C.values[re], O), Y == null && he != null && (C.keys[re] = Y = he, l.outbound || ce(C.values[re], l.keyPath, Y))) : (he = Ir(be, C.values[re]), (me = E.fire.call(xe, he, Y, be, O)) && (pe = C.values[re], Object.keys(me).forEach(function(Se) {
                  X(pe, Se) ? pe[Se] = me[Se] : ce(pe, Se, me[Se]);
                }))), xe;
              });
              return i.mutate(C).then(function(Y) {
                for (var re = Y.failures, he = Y.results, me = Y.numFailures, Y = Y.lastResult, pe = 0; pe < B.length; ++pe) {
                  var be = (he || B)[pe], xe = H[pe];
                  be == null ? xe.onerror && xe.onerror(re[pe]) : xe.onsuccess && xe.onsuccess(C.type === "put" && K[pe] ? C.values[pe] : be);
                }
                return { failures: re, results: he, numFailures: me, lastResult: Y };
              }).catch(function(Y) {
                return H.forEach(function(re) {
                  return re.onerror && re.onerror(Y);
                }), Promise.reject(Y);
              });
            });
          }
        } });
      } });
    } };
    function Yr(t, a, i) {
      try {
        if (!a || a.keys.length < t.length) return null;
        for (var l = [], p = 0, g = 0; p < a.keys.length && g < t.length; ++p) ve(a.keys[p], t[g]) === 0 && (l.push(i ? Le(a.values[p]) : a.values[p]), ++g);
        return l.length === t.length ? l : null;
      } catch {
        return null;
      }
    }
    var Po = { stack: "dbcore", level: -1, create: function(t) {
      return { table: function(a) {
        var i = t.table(a);
        return d(d({}, i), { getMany: function(l) {
          if (!l.cache) return i.getMany(l);
          var p = Yr(l.keys, l.trans._cache, l.cache === "clone");
          return p ? x.resolve(p) : i.getMany(l).then(function(g) {
            return l.trans._cache = { keys: l.keys, values: l.cache === "clone" ? Le(g) : g }, g;
          });
        }, mutate: function(l) {
          return l.type !== "add" && (l.trans._cache = null), i.mutate(l);
        } });
      } };
    } };
    function Za(t, a) {
      return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
    }
    function Da(t, a) {
      switch (t) {
        case "query":
          return a.values && !a.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor":
          return !1;
      }
    }
    var Oa = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
      var a = t.schema.name, i = new qt(t.MIN_KEY, t.MAX_KEY);
      return d(d({}, t), { transaction: function(l, p, g) {
        if (Ee.subscr && p !== "readonly") throw new we.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ee.querier));
        return t.transaction(l, p, g);
      }, table: function(l) {
        var p = t.table(l), g = p.schema, k = g.primaryKey, C = g.indexes, v = k.extractKey, A = k.outbound, E = k.autoIncrement && C.filter(function(T) {
          return T.compound && T.keyPath.includes(k.keyPath);
        }), N = d(d({}, p), { mutate: function(T) {
          function D(Se) {
            return Se = "idb://".concat(a, "/").concat(l, "/").concat(Se), Y[Se] || (Y[Se] = new qt());
          }
          var O, B, K, H = T.trans, Y = T.mutatedParts || (T.mutatedParts = {}), re = D(""), he = D(":dels"), me = T.type, xe = T.type === "deleteRange" ? [T.range] : T.type === "delete" ? [T.keys] : T.values.length < 50 ? [Ya(k, T).filter(function(Se) {
            return Se;
          }), T.values] : [], pe = xe[0], be = xe[1], xe = T.trans._cache;
          return M(pe) ? (re.addKeys(pe), (xe = me === "delete" || pe.length === be.length ? Yr(pe, xe) : null) || he.addKeys(pe), (xe || be) && (O = D, B = xe, K = be, g.indexes.forEach(function(Se) {
            var Te = O(Se.name || "");
            function Xe(ne) {
              return ne != null ? Se.extractKey(ne) : null;
            }
            function ot(ne) {
              return Se.multiEntry && M(ne) ? ne.forEach(function(sn) {
                return Te.addKey(sn);
              }) : Te.addKey(ne);
            }
            (B || K).forEach(function(ne, Jt) {
              var ze = B && Xe(B[Jt]), Jt = K && Xe(K[Jt]);
              ve(ze, Jt) !== 0 && (ze != null && ot(ze), Jt != null && ot(Jt));
            });
          }))) : pe ? (be = { from: (be = pe.lower) !== null && be !== void 0 ? be : t.MIN_KEY, to: (be = pe.upper) !== null && be !== void 0 ? be : t.MAX_KEY }, he.add(be), re.add(be)) : (re.add(i), he.add(i), g.indexes.forEach(function(Se) {
            return D(Se.name).add(i);
          })), p.mutate(T).then(function(Se) {
            return !pe || T.type !== "add" && T.type !== "put" || (re.addKeys(Se.results), E && E.forEach(function(Te) {
              for (var Xe = T.values.map(function(ze) {
                return Te.extractKey(ze);
              }), ot = Te.keyPath.findIndex(function(ze) {
                return ze === k.keyPath;
              }), ne = 0, sn = Se.results.length; ne < sn; ++ne) Xe[ne][ot] = Se.results[ne];
              D(Te.name).addKeys(Xe);
            })), H.mutatedParts = sa(H.mutatedParts || {}, Y), Se;
          });
        } }), C = function(D) {
          var O = D.query, D = O.index, O = O.range;
          return [D, new qt((D = O.lower) !== null && D !== void 0 ? D : t.MIN_KEY, (O = O.upper) !== null && O !== void 0 ? O : t.MAX_KEY)];
        }, L = { get: function(T) {
          return [k, new qt(T.key)];
        }, getMany: function(T) {
          return [k, new qt().addKeys(T.keys)];
        }, count: C, query: C, openCursor: C };
        return P(L).forEach(function(T) {
          N[T] = function(D) {
            var O = Ee.subscr, B = !!O, K = Za(Ee, p) && Da(T, D) ? D.obsSet = {} : O;
            if (B) {
              var H = function(be) {
                return be = "idb://".concat(a, "/").concat(l, "/").concat(be), K[be] || (K[be] = new qt());
              }, Y = H(""), re = H(":dels"), O = L[T](D), B = O[0], O = O[1];
              if ((T === "query" && B.isPrimaryKey && !D.values ? re : H(B.name || "")).add(O), !B.isPrimaryKey) {
                if (T !== "count") {
                  var he = T === "query" && A && D.values && p.query(d(d({}, D), { values: !1 }));
                  return p[T].apply(this, arguments).then(function(be) {
                    if (T === "query") {
                      if (A && D.values) return he.then(function(Xe) {
                        return Xe = Xe.result, Y.addKeys(Xe), be;
                      });
                      var xe = D.values ? be.result.map(v) : be.result;
                      (D.values ? Y : re).addKeys(xe);
                    } else if (T === "openCursor") {
                      var Se = be, Te = D.values;
                      return Se && Object.create(Se, { key: { get: function() {
                        return re.addKey(Se.primaryKey), Se.key;
                      } }, primaryKey: { get: function() {
                        var Xe = Se.primaryKey;
                        return re.addKey(Xe), Xe;
                      } }, value: { get: function() {
                        return Te && Y.addKey(Se.primaryKey), Se.value;
                      } } });
                    }
                    return be;
                  });
                }
                re.add(i);
              }
            }
            return p[T].apply(this, arguments);
          };
        }), N;
      } });
    } };
    function Qa(t, a, i) {
      if (i.numFailures === 0) return a;
      if (a.type === "deleteRange") return null;
      var l = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1;
      return i.numFailures === l ? null : (a = d({}, a), M(a.keys) && (a.keys = a.keys.filter(function(p, g) {
        return !(g in i.failures);
      })), "values" in a && M(a.values) && (a.values = a.values.filter(function(p, g) {
        return !(g in i.failures);
      })), a);
    }
    function Ar(t, a) {
      return i = t, ((l = a).lower === void 0 || (l.lowerOpen ? 0 < ve(i, l.lower) : 0 <= ve(i, l.lower))) && (t = t, (a = a).upper === void 0 || (a.upperOpen ? ve(t, a.upper) < 0 : ve(t, a.upper) <= 0));
      var i, l;
    }
    function la(t, a, L, l, p, g) {
      if (!L || L.length === 0) return t;
      var k = a.query.index, v = k.multiEntry, A = a.query.range, E = l.schema.primaryKey.extractKey, N = k.extractKey, C = (k.lowLevelIndex || k).extractKey, L = L.reduce(function(T, D) {
        var O = T, B = [];
        if (D.type === "add" || D.type === "put") for (var K = new qt(), H = D.values.length - 1; 0 <= H; --H) {
          var Y, re = D.values[H], he = E(re);
          K.hasKey(he) || (Y = N(re), (v && M(Y) ? Y.some(function(Se) {
            return Ar(Se, A);
          }) : Ar(Y, A)) && (K.addKey(he), B.push(re)));
        }
        switch (D.type) {
          case "add":
            var me = new qt().addKeys(a.values ? T.map(function(Te) {
              return E(Te);
            }) : T), O = T.concat(a.values ? B.filter(function(Te) {
              return Te = E(Te), !me.hasKey(Te) && (me.addKey(Te), !0);
            }) : B.map(function(Te) {
              return E(Te);
            }).filter(function(Te) {
              return !me.hasKey(Te) && (me.addKey(Te), !0);
            }));
            break;
          case "put":
            var pe = new qt().addKeys(D.values.map(function(Te) {
              return E(Te);
            }));
            O = T.filter(function(Te) {
              return !pe.hasKey(a.values ? E(Te) : Te);
            }).concat(a.values ? B : B.map(function(Te) {
              return E(Te);
            }));
            break;
          case "delete":
            var be = new qt().addKeys(D.keys);
            O = T.filter(function(Te) {
              return !be.hasKey(a.values ? E(Te) : Te);
            });
            break;
          case "deleteRange":
            var xe = D.range;
            O = T.filter(function(Te) {
              return !Ar(E(Te), xe);
            });
        }
        return O;
      }, t);
      return L === t ? t : (L.sort(function(T, D) {
        return ve(C(T), C(D)) || ve(E(T), E(D));
      }), a.limit && a.limit < 1 / 0 && (L.length > a.limit ? L.length = a.limit : t.length === a.limit && L.length < a.limit && (p.dirty = !0)), g ? Object.freeze(L) : L);
    }
    function Zr(t, a) {
      return ve(t.lower, a.lower) === 0 && ve(t.upper, a.upper) === 0 && !!t.lowerOpen == !!a.lowerOpen && !!t.upperOpen == !!a.upperOpen;
    }
    function Qr(t, a) {
      return function(i, l, p, g) {
        if (i === void 0) return l !== void 0 ? -1 : 0;
        if (l === void 0) return 1;
        if ((l = ve(i, l)) === 0) {
          if (p && g) return 0;
          if (p) return 1;
          if (g) return -1;
        }
        return l;
      }(t.lower, a.lower, t.lowerOpen, a.lowerOpen) <= 0 && 0 <= function(i, l, p, g) {
        if (i === void 0) return l !== void 0 ? 1 : 0;
        if (l === void 0) return -1;
        if ((l = ve(i, l)) === 0) {
          if (p && g) return 0;
          if (p) return -1;
          if (g) return 1;
        }
        return l;
      }(t.upper, a.upper, t.upperOpen, a.upperOpen);
    }
    function Er(t, a, i, l) {
      t.subscribers.add(i), l.addEventListener("abort", function() {
        var p, g;
        t.subscribers.delete(i), t.subscribers.size === 0 && (p = t, g = a, setTimeout(function() {
          p.subscribers.size === 0 && st(g, p);
        }, 3e3));
      });
    }
    var da = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
      var a = t.schema.name;
      return d(d({}, t), { transaction: function(i, l, p) {
        var g, k, v = t.transaction(i, l, p);
        return l === "readwrite" && (k = (g = new AbortController()).signal, p = function(A) {
          return function() {
            if (g.abort(), l === "readwrite") {
              for (var E = /* @__PURE__ */ new Set(), N = 0, C = i; N < C.length; N++) {
                var L = C[N], T = hn["idb://".concat(a, "/").concat(L)];
                if (T) {
                  var D = t.table(L), O = T.optimisticOps.filter(function(Te) {
                    return Te.trans === v;
                  });
                  if (v._explicit && A && v.mutatedParts) for (var B = 0, K = Object.values(T.queries.query); B < K.length; B++) for (var H = 0, Y = (me = K[B]).slice(); H < Y.length; H++) Ra((pe = Y[H]).obsSet, v.mutatedParts) && (st(me, pe), pe.subscribers.forEach(function(Te) {
                    return E.add(Te);
                  }));
                  else if (0 < O.length) {
                    T.optimisticOps = T.optimisticOps.filter(function(Te) {
                      return Te.trans !== v;
                    });
                    for (var re = 0, he = Object.values(T.queries.query); re < he.length; re++) for (var me, pe, be, xe = 0, Se = (me = he[re]).slice(); xe < Se.length; xe++) (pe = Se[xe]).res != null && v.mutatedParts && (A && !pe.dirty ? (be = Object.isFrozen(pe.res), be = la(pe.res, pe.req, O, D, pe, be), pe.dirty ? (st(me, pe), pe.subscribers.forEach(function(Te) {
                      return E.add(Te);
                    })) : be !== pe.res && (pe.res = be, pe.promise = x.resolve({ result: be }))) : (pe.dirty && st(me, pe), pe.subscribers.forEach(function(Te) {
                      return E.add(Te);
                    })));
                  }
                }
              }
              E.forEach(function(Te) {
                return Te();
              });
            }
          };
        }, v.addEventListener("abort", p(!1), { signal: k }), v.addEventListener("error", p(!1), { signal: k }), v.addEventListener("complete", p(!0), { signal: k })), v;
      }, table: function(i) {
        var l = t.table(i), p = l.schema.primaryKey;
        return d(d({}, l), { mutate: function(g) {
          var k = Ee.trans;
          if (p.outbound || k.db._options.cache === "disabled" || k.explicit || k.idbtrans.mode !== "readwrite") return l.mutate(g);
          var v = hn["idb://".concat(a, "/").concat(i)];
          return v ? (k = l.mutate(g), g.type !== "add" && g.type !== "put" || !(50 <= g.values.length || Ya(p, g).some(function(A) {
            return A == null;
          })) ? (v.optimisticOps.push(g), g.mutatedParts && ca(g.mutatedParts), k.then(function(A) {
            0 < A.numFailures && (st(v.optimisticOps, g), (A = Qa(0, g, A)) && v.optimisticOps.push(A), g.mutatedParts && ca(g.mutatedParts));
          }), k.catch(function() {
            st(v.optimisticOps, g), g.mutatedParts && ca(g.mutatedParts);
          })) : k.then(function(A) {
            var E = Qa(0, d(d({}, g), { values: g.values.map(function(N, C) {
              var L;
              return A.failures[C] ? N : (N = (L = p.keyPath) !== null && L !== void 0 && L.includes(".") ? Le(N) : d({}, N), ce(N, p.keyPath, A.results[C]), N);
            }) }), A);
            v.optimisticOps.push(E), queueMicrotask(function() {
              return g.mutatedParts && ca(g.mutatedParts);
            });
          }), k) : l.mutate(g);
        }, query: function(g) {
          if (!Za(Ee, l) || !Da("query", g)) return l.query(g);
          var k = ((E = Ee.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", C = Ee, v = C.requery, A = C.signal, E = function(D, O, B, K) {
            var H = hn["idb://".concat(D, "/").concat(O)];
            if (!H) return [];
            if (!(O = H.queries[B])) return [null, !1, H, null];
            var Y = O[(K.query ? K.query.index.name : null) || ""];
            if (!Y) return [null, !1, H, null];
            switch (B) {
              case "query":
                var re = Y.find(function(he) {
                  return he.req.limit === K.limit && he.req.values === K.values && Zr(he.req.query.range, K.query.range);
                });
                return re ? [re, !0, H, Y] : [Y.find(function(he) {
                  return ("limit" in he.req ? he.req.limit : 1 / 0) >= K.limit && (!K.values || he.req.values) && Qr(he.req.query.range, K.query.range);
                }), !1, H, Y];
              case "count":
                return re = Y.find(function(he) {
                  return Zr(he.req.query.range, K.query.range);
                }), [re, !!re, H, Y];
            }
          }(a, i, "query", g), N = E[0], C = E[1], L = E[2], T = E[3];
          return N && C ? N.obsSet = g.obsSet : (C = l.query(g).then(function(D) {
            var O = D.result;
            if (N && (N.res = O), k) {
              for (var B = 0, K = O.length; B < K; ++B) Object.freeze(O[B]);
              Object.freeze(O);
            } else D.result = Le(O);
            return D;
          }).catch(function(D) {
            return T && N && st(T, N), Promise.reject(D);
          }), N = { obsSet: g.obsSet, promise: C, subscribers: /* @__PURE__ */ new Set(), type: "query", req: g, dirty: !1 }, T ? T.push(N) : (T = [N], (L = L || (hn["idb://".concat(a, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[g.query.index.name || ""] = T)), Er(N, T, v, A), N.promise.then(function(D) {
            return { result: la(D.result, g, L == null ? void 0 : L.optimisticOps, l, N, k) };
          });
        } });
      } });
    } };
    function pa(t, a) {
      return new Proxy(t, { get: function(i, l, p) {
        return l === "db" ? a : Reflect.get(i, l, p);
      } });
    }
    var Tn = (Bt.prototype.version = function(t) {
      if (isNaN(t) || t < 0.1) throw new we.Type("Given version is not a positive number");
      if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new we.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, t);
      var a = this._versions, i = a.filter(function(l) {
        return l._cfg.version === t;
      })[0];
      return i || (i = new this.Version(t), a.push(i), a.sort(Sr), i.stores({}), this._state.autoSchema = !1, i);
    }, Bt.prototype._whenReady = function(t) {
      var a = this;
      return this.idbdb && (this._state.openComplete || Ee.letThrough || this._vip) ? t() : new x(function(i, l) {
        if (a._state.openComplete) return l(new we.DatabaseClosed(a._state.dbOpenError));
        if (!a._state.isBeingOpened) {
          if (!a._state.autoOpen) return void l(new we.DatabaseClosed());
          a.open().catch(I);
        }
        a._state.dbReadyPromise.then(i, l);
      }).then(t);
    }, Bt.prototype.use = function(t) {
      var a = t.stack, i = t.create, l = t.level, p = t.name;
      return p && this.unuse({ stack: a, name: p }), t = this._middlewares[a] || (this._middlewares[a] = []), t.push({ stack: a, create: i, level: l ?? 10, name: p }), t.sort(function(g, k) {
        return g.level - k.level;
      }), this;
    }, Bt.prototype.unuse = function(t) {
      var a = t.stack, i = t.name, l = t.create;
      return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(p) {
        return l ? p.create !== l : !!i && p.name !== i;
      })), this;
    }, Bt.prototype.open = function() {
      var t = this;
      return Rn(kt, function() {
        return Cr(t);
      });
    }, Bt.prototype._close = function() {
      this.on.close.fire(new CustomEvent("close"));
      var t = this._state, a = pn.indexOf(this);
      if (0 <= a && pn.splice(a, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      t.isBeingOpened || (t.dbReadyPromise = new x(function(i) {
        t.dbReadyResolve = i;
      }), t.openCanceller = new x(function(i, l) {
        t.cancelOpen = l;
      }));
    }, Bt.prototype.close = function(i) {
      var a = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
      a ? (i.isBeingOpened && i.cancelOpen(new we.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new we.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
    }, Bt.prototype.delete = function(t) {
      var a = this;
      t === void 0 && (t = { disableAutoOpen: !0 });
      var i = 0 < arguments.length && typeof arguments[0] != "object", l = this._state;
      return new x(function(p, g) {
        function k() {
          a.close(t);
          var v = a._deps.indexedDB.deleteDatabase(a.name);
          v.onsuccess = xt(function() {
            var A, E, N;
            A = a._deps, E = a.name, N = A.indexedDB, A = A.IDBKeyRange, qa(N) || E === ba || za(N, A).delete(E).catch(I), p();
          }), v.onerror = jt(g), v.onblocked = a._fireOnBlocked;
        }
        if (i) throw new we.InvalidArgument("Invalid closeOptions argument to db.delete()");
        l.isBeingOpened ? l.dbReadyPromise.then(k) : k();
      });
    }, Bt.prototype.backendDB = function() {
      return this.idbdb;
    }, Bt.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, Bt.prototype.hasBeenClosed = function() {
      var t = this._state.dbOpenError;
      return t && t.name === "DatabaseClosed";
    }, Bt.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, Bt.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(Bt.prototype, "tables", { get: function() {
      var t = this;
      return P(this._allTables).map(function(a) {
        return t._allTables[a];
      });
    }, enumerable: !1, configurable: !0 }), Bt.prototype.transaction = function() {
      var t = (function(a, i, l) {
        var p = arguments.length;
        if (p < 2) throw new we.InvalidArgument("Too few arguments");
        for (var g = new Array(p - 1); --p; ) g[p - 1] = arguments[p];
        return l = g.pop(), [a, qe(g), l];
      }).apply(this, arguments);
      return this._transaction.apply(this, t);
    }, Bt.prototype._transaction = function(t, a, i) {
      var l = this, p = Ee.trans;
      p && p.db === this && t.indexOf("!") === -1 || (p = null);
      var g, k, v = t.indexOf("?") !== -1;
      t = t.replace("!", "").replace("?", "");
      try {
        if (k = a.map(function(E) {
          if (E = E instanceof l.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return E;
        }), t == "r" || t === La) g = La;
        else {
          if (t != "rw" && t != mr) throw new we.InvalidArgument("Invalid transaction mode: " + t);
          g = mr;
        }
        if (p) {
          if (p.mode === La && g === mr) {
            if (!v) throw new we.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            p = null;
          }
          p && k.forEach(function(E) {
            if (p && p.storeNames.indexOf(E) === -1) {
              if (!v) throw new we.SubTransaction("Table " + E + " not included in parent transaction.");
              p = null;
            }
          }), v && p && !p.active && (p = null);
        }
      } catch (E) {
        return p ? p._promise(null, function(N, C) {
          C(E);
        }) : Ut(E);
      }
      var A = (function E(N, C, L, T, D) {
        return x.resolve().then(function() {
          var O = Ee.transless || Ee, B = N._createTransaction(C, L, N._dbSchema, T);
          if (B.explicit = !0, O = { trans: B, transless: O }, T) B.idbtrans = T.idbtrans;
          else try {
            B.create(), B.idbtrans._explicit = !0, N._state.PR1398_maxLoop = 3;
          } catch (Y) {
            return Y.name === nt.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
              return E(N, C, L, null, D);
            })) : Ut(Y);
          }
          var K, H = R(D);
          return H && oe(), O = x.follow(function() {
            var Y;
            (K = D.call(B, B)) && (H ? (Y = xn.bind(null, null), K.then(Y, Y)) : typeof K.next == "function" && typeof K.throw == "function" && (K = Mr(K)));
          }, O), (K && typeof K.then == "function" ? x.resolve(K).then(function(Y) {
            return B.active ? Y : Ut(new we.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : O.then(function() {
            return K;
          })).then(function(Y) {
            return T && B._resolve(), B._completion.then(function() {
              return Y;
            });
          }).catch(function(Y) {
            return B._reject(Y), Ut(Y);
          });
        });
      }).bind(null, this, g, k, p, i);
      return p ? p._promise(g, A, "lock") : Ee.trans ? Rn(Ee.transless, function() {
        return l._whenReady(A);
      }) : this._whenReady(A);
    }, Bt.prototype.table = function(t) {
      if (!X(this._allTables, t)) throw new we.InvalidTable("Table ".concat(t, " does not exist"));
      return this._allTables[t];
    }, Bt);
    function Bt(t, a) {
      var i = this;
      this._middlewares = {}, this.verno = 0;
      var l = Bt.dependencies;
      this._options = a = d({ addons: Bt.addons, autoOpen: !0, indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, l = a.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var p, g, k, v, A, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: I, dbReadyPromise: null, cancelOpen: I, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen };
      E.dbReadyPromise = new x(function(C) {
        E.dbReadyResolve = C;
      }), E.openCanceller = new x(function(C, L) {
        E.cancelOpen = L;
      }), this._state = E, this.name = t, this.on = Pa(this, "populate", "blocked", "versionchange", "close", { ready: [ht, I] }), this.once = function(C, L) {
        var T = function() {
          for (var D = [], O = 0; O < arguments.length; O++) D[O] = arguments[O];
          i.on(C).unsubscribe(T), L.apply(i, D);
        };
        return i.on(C, T);
      }, this.on.ready.subscribe = Me(this.on.ready.subscribe, function(C) {
        return function(L, T) {
          Bt.vip(function() {
            var D, O = i._state;
            O.openComplete ? (O.dbOpenError || x.resolve().then(L), T && C(L)) : O.onReadyBeingFired ? (O.onReadyBeingFired.push(L), T && C(L)) : (C(L), D = i, T || C(function B() {
              D.on.ready.unsubscribe(L), D.on.ready.unsubscribe(B);
            }));
          });
        };
      }), this.Collection = (p = this, Qn(br.prototype, function(K, B) {
        this.db = p;
        var T = fe, D = null;
        if (B) try {
          T = B();
        } catch (H) {
          D = H;
        }
        var O = K._ctx, B = O.table, K = B.hook.reading.fire;
        this._ctx = { table: B, index: O.index, isPrimKey: !O.index || B.schema.primKey.keyPath && O.index === B.schema.primKey.name, range: T, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: D, or: O.or, valueMapper: K !== G ? K : null };
      })), this.Table = (g = this, Qn(Sa.prototype, function(C, L, T) {
        this.db = g, this._tx = T, this.name = C, this.schema = L, this.hook = g._allTables[C] ? g._allTables[C].hook : Pa(null, { creating: [Be, I], reading: [$, G], updating: [Ne, I], deleting: [je, I] });
      })), this.Transaction = (k = this, Qn(Dn.prototype, function(C, L, T, D, O) {
        var B = this;
        C !== "readonly" && L.forEach(function(K) {
          K = (K = T[K]) === null || K === void 0 ? void 0 : K.yProps, K && (L = L.concat(K.map(function(H) {
            return H.updatesTable;
          })));
        }), this.db = k, this.mode = C, this.storeNames = L, this.schema = T, this.chromeTransactionDurability = D, this.idbtrans = null, this.on = Pa(this, "complete", "error", "abort"), this.parent = O || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new x(function(K, H) {
          B._resolve = K, B._reject = H;
        }), this._completion.then(function() {
          B.active = !1, B.on.complete.fire();
        }, function(K) {
          var H = B.active;
          return B.active = !1, B.on.error.fire(K), B.parent ? B.parent._reject(K) : H && B.idbtrans && B.idbtrans.abort(), Ut(K);
        });
      })), this.Version = (v = this, Qn(ko.prototype, function(C) {
        this.db = v, this._cfg = { version: C, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (A = this, Qn($n.prototype, function(C, L, T) {
        if (this.db = A, this._ctx = { table: C, index: L === ":id" ? null : L, or: T }, this._cmp = this._ascending = ve, this._descending = function(D, O) {
          return ve(O, D);
        }, this._max = function(D, O) {
          return 0 < ve(D, O) ? D : O;
        }, this._min = function(D, O) {
          return ve(D, O) < 0 ? D : O;
        }, this._IDBKeyRange = A._deps.IDBKeyRange, !this._IDBKeyRange) throw new we.MissingAPI();
      })), this.on("versionchange", function(C) {
        0 < C.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(C) {
        !C.newVersion || C.newVersion < C.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(C.oldVersion / 10));
      }), this._maxKey = Aa(a.IDBKeyRange), this._createTransaction = function(C, L, T, D) {
        return new i.Transaction(C, L, T, i._options.chromeTransactionDurability, D);
      }, this._fireOnBlocked = function(C) {
        i.on("blocked").fire(C), pn.filter(function(L) {
          return L.name === i.name && L !== i && !L._state.vcFired;
        }).map(function(L) {
          return L.on("versionchange").fire(C);
        });
      }, this.use(Po), this.use(da), this.use(Oa), this.use(Jr), this.use(So);
      var N = new Proxy(this, { get: function(C, L, T) {
        if (L === "_vip") return !0;
        if (L === "table") return function(O) {
          return pa(i.table(O), N);
        };
        var D = Reflect.get(C, L, T);
        return D instanceof Sa ? pa(D, N) : L === "tables" ? D.map(function(O) {
          return pa(O, N);
        }) : L === "_createTransaction" ? function() {
          return pa(D.apply(this, arguments), N);
        } : D;
      } });
      this.vip = N, l.forEach(function(C) {
        return C(i);
      });
    }
    var Xa, on = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", xo = (Tr.prototype.subscribe = function(t, a, i) {
      return this._subscribe(t && typeof t != "function" ? t : { next: t, error: a, complete: i });
    }, Tr.prototype[on] = function() {
      return this;
    }, Tr);
    function Tr(t) {
      this._subscribe = t;
    }
    try {
      Xa = { indexedDB: m.indexedDB || m.mozIndexedDB || m.webkitIndexedDB || m.msIndexedDB, IDBKeyRange: m.IDBKeyRange || m.webkitIDBKeyRange };
    } catch {
      Xa = { indexedDB: null, IDBKeyRange: null };
    }
    function _r(t) {
      var a, i = !1, l = new xo(function(p) {
        var g = R(t), k, v = !1, A = {}, E = {}, N = { get closed() {
          return v;
        }, unsubscribe: function() {
          v || (v = !0, k && k.abort(), C && _t.storagemutated.unsubscribe(T));
        } };
        p.start && p.start(N);
        var C = !1, L = function() {
          return gr(D);
        }, T = function(O) {
          sa(A, O), Ra(E, A) && L();
        }, D = function() {
          var O, B, K;
          !v && Xa.indexedDB && (A = {}, O = {}, k && k.abort(), k = new AbortController(), K = function(H) {
            var Y = nn();
            try {
              g && oe();
              var re = _n(t, H);
              return re = g ? re.finally(xn) : re;
            } finally {
              Y && Xt();
            }
          }(B = { subscr: O, signal: k.signal, requery: L, querier: t, trans: null }), Promise.resolve(K).then(function(H) {
            i = !0, a = H, v || B.signal.aborted || (A = {}, function(Y) {
              for (var re in Y) if (X(Y, re)) return;
              return 1;
            }(E = O) || C || (_t(An, T), C = !0), gr(function() {
              return !v && p.next && p.next(H);
            }));
          }, function(H) {
            i = !1, ["DatabaseClosedError", "AbortError"].includes(H == null ? void 0 : H.name) || v || gr(function() {
              v || p.error && p.error(H);
            });
          }));
        };
        return setTimeout(L, 0), N;
      });
      return l.hasValue = function() {
        return i;
      }, l.getValue = function() {
        return a;
      }, l;
    }
    var Gn = Tn;
    function er(t) {
      var a = Pn;
      try {
        Pn = !0, _t.storagemutated.fire(t), At(t, !0);
      } finally {
        Pn = a;
      }
    }
    j(Gn, d(d({}, Wt), { delete: function(t) {
      return new Gn(t, { addons: [] }).delete();
    }, exists: function(t) {
      return new Gn(t, { addons: [] }).open().then(function(a) {
        return a.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(t) {
      try {
        return a = Gn.dependencies, i = a.indexedDB, a = a.IDBKeyRange, (qa(i) ? Promise.resolve(i.databases()).then(function(l) {
          return l.map(function(p) {
            return p.name;
          }).filter(function(p) {
            return p !== ba;
          });
        }) : za(i, a).toCollection().primaryKeys()).then(t);
      } catch {
        return Ut(new we.MissingAPI());
      }
      var a, i;
    }, defineClass: function() {
      return function(t) {
        _(this, t);
      };
    }, ignoreTransaction: function(t) {
      return Ee.trans ? Rn(Ee.transless, t) : t();
    }, vip: an, async: function(t) {
      return function() {
        try {
          var a = Mr(t.apply(this, arguments));
          return a && typeof a.then == "function" ? a : x.resolve(a);
        } catch (i) {
          return Ut(i);
        }
      };
    }, spawn: function(t, a, i) {
      try {
        var l = Mr(t.apply(i, a || []));
        return l && typeof l.then == "function" ? l : x.resolve(l);
      } catch (p) {
        return Ut(p);
      }
    }, currentTransaction: { get: function() {
      return Ee.trans || null;
    } }, waitFor: function(t, a) {
      return a = x.resolve(typeof t == "function" ? Gn.ignoreTransaction(t) : t).timeout(a || 6e4), Ee.trans ? Ee.trans.waitFor(a) : a;
    }, Promise: x, debug: { get: function() {
      return Re;
    }, set: function(t) {
      un(t);
    } }, derive: ge, extend: _, props: j, override: Me, Events: Pa, on: _t, liveQuery: _r, extendObservabilitySet: sa, getByKeyPath: ie, setByKeyPath: ce, delByKeyPath: function(t, a) {
      typeof a == "string" ? ce(t, a, void 0) : "length" in a && [].map.call(a, function(i) {
        ce(t, i, void 0);
      });
    }, shallowClone: ft, deepClone: Le, getObjectDiff: Ir, cmp: ve, asap: Ae, minKey: -1 / 0, addons: [], connections: pn, errnames: nt, dependencies: Xa, cache: hn, semVer: "4.2.1", version: "4.2.1".split(".").map(function(t) {
      return parseInt(t);
    }).reduce(function(t, a, i) {
      return t + a / Math.pow(10, 2 * i);
    }) })), Gn.maxKey = Aa(Gn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (_t(An, function(t) {
      Pn || (t = new CustomEvent(bn, { detail: t }), Pn = !0, dispatchEvent(t), Pn = !1);
    }), addEventListener(bn, function(t) {
      t = t.detail, Pn || er(t);
    }));
    var Sn, Pn = !1, Xr = function() {
    };
    return typeof BroadcastChannel < "u" && ((Xr = function() {
      (Sn = new BroadcastChannel(bn)).onmessage = function(t) {
        return t.data && er(t.data);
      };
    })(), typeof Sn.unref == "function" && Sn.unref(), _t(An, function(t) {
      Pn || Sn.postMessage(t);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
      if (!Tn.disableBfCache && t.persisted) {
        Re && console.debug("Dexie: handling persisted pagehide"), Sn != null && Sn.close();
        for (var a = 0, i = pn; a < i.length; a++) i[a].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(t) {
      !Tn.disableBfCache && t.persisted && (Re && console.debug("Dexie: handling persisted pageshow"), Xr(), er({ all: new qt(-1 / 0, [[]]) }));
    })), x.rejectionMapper = function(t, a) {
      return !t || t instanceof _e || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Ot[t.name] ? t : (a = new Ot[t.name](a || t.message, t), "stack" in t && ke(a, "stack", { get: function() {
        return this.inner.stack;
      } }), a);
    }, un(Re), d(Tn, Object.freeze({ __proto__: null, Dexie: Tn, liveQuery: _r, Entity: Va, cmp: ve, PropModification: jn, replacePrefix: function(t, a) {
      return new jn({ replacePrefix: [t, a] });
    }, add: function(t) {
      return new jn({ add: t });
    }, remove: function(t) {
      return new jn({ remove: t });
    }, default: Tn, RangeSet: qt, mergeRanges: oa, rangesOverlap: qr }), { default: Tn }), Tn;
  });
})(Hs);
var il = Hs.exports;
const oi = /* @__PURE__ */ li(il), Ps = Symbol.for("Dexie"), Lr = globalThis[Ps] || (globalThis[Ps] = oi);
if (oi.semVer !== Lr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${oi.semVer} and ${Lr.semVer}`);
const {
  liveQuery: sl,
  mergeRanges: cl,
  rangesOverlap: ul,
  RangeSet: ll,
  cmp: dl,
  Entity: pl,
  PropModification: fl,
  replacePrefix: hl,
  add: gl,
  remove: ml,
  DexieYProvider: wl
} = Lr, yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dexie: Lr,
  DexieYProvider: wl,
  Entity: pl,
  PropModification: fl,
  RangeSet: ll,
  add: gl,
  cmp: dl,
  default: Lr,
  liveQuery: sl,
  mergeRanges: cl,
  rangesOverlap: ul,
  remove: ml,
  replacePrefix: hl
}, Symbol.toStringTag, { value: "Module" })), bl = /* @__PURE__ */ Ks(yl);
var vl = "Expected a function", xs = NaN, kl = "[object Symbol]", Sl = /^\s+|\s+$/g, Pl = /^[-+]0x[0-9a-f]+$/i, xl = /^0b[01]+$/i, Cl = /^0o[0-7]+$/i, Ml = parseInt, Il = typeof ur == "object" && ur && ur.Object === Object && ur, Al = typeof self == "object" && self && self.Object === Object && self, El = Il || Al || Function("return this")(), Tl = Object.prototype, _l = Tl.toString, Rl = Math.max, Dl = Math.min, ei = function() {
  return El.Date.now();
};
function Ol(f, o, u) {
  var d, y, m, P, M, _, U = 0, q = !1, X = !1, j = !0;
  if (typeof f != "function")
    throw new TypeError(vl);
  o = Cs(o) || 0, ii(u) && (q = !!u.leading, X = "maxWait" in u, m = X ? Rl(Cs(u.maxWait) || 0, o) : m, j = "trailing" in u ? !!u.trailing : j);
  function W(ie) {
    var ce = d, ft = y;
    return d = y = void 0, U = ie, P = f.apply(ft, ce), P;
  }
  function ke(ie) {
    return U = ie, M = setTimeout(Ie, o), q ? W(ie) : P;
  }
  function ge(ie) {
    var ce = ie - _, ft = ie - U, it = o - ce;
    return X ? Dl(it, m - ft) : it;
  }
  function z(ie) {
    var ce = ie - _, ft = ie - U;
    return _ === void 0 || ce >= o || ce < 0 || X && ft >= m;
  }
  function Ie() {
    var ie = ei();
    if (z(ie))
      return Z(ie);
    M = setTimeout(Ie, ge(ie));
  }
  function Z(ie) {
    return M = void 0, j && d ? W(ie) : (d = y = void 0, P);
  }
  function Me() {
    M !== void 0 && clearTimeout(M), U = 0, d = _ = y = M = void 0;
  }
  function ee() {
    return M === void 0 ? P : Z(ei());
  }
  function Ae() {
    var ie = ei(), ce = z(ie);
    if (d = arguments, y = this, _ = ie, ce) {
      if (M === void 0)
        return ke(_);
      if (X)
        return M = setTimeout(Ie, o), W(_);
    }
    return M === void 0 && (M = setTimeout(Ie, o)), P;
  }
  return Ae.cancel = Me, Ae.flush = ee, Ae;
}
function ii(f) {
  var o = typeof f;
  return !!f && (o == "object" || o == "function");
}
function Wl(f) {
  return !!f && typeof f == "object";
}
function Bl(f) {
  return typeof f == "symbol" || Wl(f) && _l.call(f) == kl;
}
function Cs(f) {
  if (typeof f == "number")
    return f;
  if (Bl(f))
    return xs;
  if (ii(f)) {
    var o = typeof f.valueOf == "function" ? f.valueOf() : f;
    f = ii(o) ? o + "" : o;
  }
  if (typeof f != "string")
    return f === 0 ? f : +f;
  f = f.replace(Sl, "");
  var u = xl.test(f);
  return u || Cl.test(f) ? Ml(f.slice(2), u ? 2 : 8) : Pl.test(f) ? xs : +f;
}
var Nl = Ol, si = { exports: {} }, et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function Fl() {
  if (Ms) return et;
  Ms = 1;
  var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), P = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), j = Symbol.iterator;
  function W(R) {
    return R === null || typeof R != "object" ? null : (R = j && R[j] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var ke = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ge = Object.assign, z = {};
  function Ie(R, se, _e) {
    this.props = R, this.context = se, this.refs = z, this.updater = _e || ke;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(R, se) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, se, "setState");
  }, Ie.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = Ie.prototype;
  function Me(R, se, _e) {
    this.props = R, this.context = se, this.refs = z, this.updater = _e || ke;
  }
  var ee = Me.prototype = new Z();
  ee.constructor = Me, ge(ee, Ie.prototype), ee.isPureReactComponent = !0;
  var Ae = Array.isArray;
  function ie() {
  }
  var ce = { H: null, A: null, T: null, S: null }, ft = Object.prototype.hasOwnProperty;
  function it(R, se, _e) {
    var We = _e.ref;
    return {
      $$typeof: f,
      type: R,
      key: se,
      ref: We !== void 0 ? We : null,
      props: _e
    };
  }
  function qe(R, se) {
    return it(R.type, se, R.props);
  }
  function dt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === f;
  }
  function Rt(R) {
    var se = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(_e) {
      return se[_e];
    });
  }
  var Le = /\/+/g;
  function vt(R, se) {
    return typeof R == "object" && R !== null && R.key != null ? Rt("" + R.key) : se.toString(36);
  }
  function De(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(ie, ie) : (R.status = "pending", R.then(
          function(se) {
            R.status === "pending" && (R.status = "fulfilled", R.value = se);
          },
          function(se) {
            R.status === "pending" && (R.status = "rejected", R.reason = se);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function at(R, se, _e, We, Ke) {
    var tt = typeof R;
    (tt === "undefined" || tt === "boolean") && (R = null);
    var nt = !1;
    if (R === null) nt = !0;
    else
      switch (tt) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case f:
            case o:
              nt = !0;
              break;
            case q:
              return nt = R._init, at(
                nt(R._payload),
                se,
                _e,
                We,
                Ke
              );
          }
      }
    if (nt)
      return Ke = Ke(R), nt = We === "" ? "." + vt(R, 0) : We, Ae(Ke) ? (_e = "", nt != null && (_e = nt.replace(Le, "$&/") + "/"), at(Ke, se, _e, "", function(Ot) {
        return Ot;
      })) : Ke != null && (dt(Ke) && (Ke = qe(
        Ke,
        _e + (Ke.key == null || R && R.key === Ke.key ? "" : ("" + Ke.key).replace(
          Le,
          "$&/"
        ) + "/") + nt
      )), se.push(Ke)), 1;
    nt = 0;
    var Ft = We === "" ? "." : We + ":";
    if (Ae(R))
      for (var we = 0; we < R.length; we++)
        We = R[we], tt = Ft + vt(We, we), nt += at(
          We,
          se,
          _e,
          tt,
          Ke
        );
    else if (we = W(R), typeof we == "function")
      for (R = we.call(R), we = 0; !(We = R.next()).done; )
        We = We.value, tt = Ft + vt(We, we++), nt += at(
          We,
          se,
          _e,
          tt,
          Ke
        );
    else if (tt === "object") {
      if (typeof R.then == "function")
        return at(
          De(R),
          se,
          _e,
          We,
          Ke
        );
      throw se = String(R), Error(
        "Objects are not valid as a React child (found: " + (se === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : se) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return nt;
  }
  function Dt(R, se, _e) {
    if (R == null) return R;
    var We = [], Ke = 0;
    return at(R, We, "", "", function(tt) {
      return se.call(_e, tt, Ke++);
    }), We;
  }
  function st(R) {
    if (R._status === -1) {
      var se = R._result;
      se = se(), se.then(
        function(_e) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = _e);
        },
        function(_e) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = _e);
        }
      ), R._status === -1 && (R._status = 0, R._result = se);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var Tt = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var se = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(se)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  }, Ve = {
    map: Dt,
    forEach: function(R, se, _e) {
      Dt(
        R,
        function() {
          se.apply(this, arguments);
        },
        _e
      );
    },
    count: function(R) {
      var se = 0;
      return Dt(R, function() {
        se++;
      }), se;
    },
    toArray: function(R) {
      return Dt(R, function(se) {
        return se;
      }) || [];
    },
    only: function(R) {
      if (!dt(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  };
  return et.Activity = X, et.Children = Ve, et.Component = Ie, et.Fragment = u, et.Profiler = y, et.PureComponent = Me, et.StrictMode = d, et.Suspense = _, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return ce.H.useMemoCache(R);
    }
  }, et.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, et.cacheSignal = function() {
    return null;
  }, et.cloneElement = function(R, se, _e) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var We = ge({}, R.props), Ke = R.key;
    if (se != null)
      for (tt in se.key !== void 0 && (Ke = "" + se.key), se)
        !ft.call(se, tt) || tt === "key" || tt === "__self" || tt === "__source" || tt === "ref" && se.ref === void 0 || (We[tt] = se[tt]);
    var tt = arguments.length - 2;
    if (tt === 1) We.children = _e;
    else if (1 < tt) {
      for (var nt = Array(tt), Ft = 0; Ft < tt; Ft++)
        nt[Ft] = arguments[Ft + 2];
      We.children = nt;
    }
    return it(R.type, Ke, We);
  }, et.createContext = function(R) {
    return R = {
      $$typeof: P,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: m,
      _context: R
    }, R;
  }, et.createElement = function(R, se, _e) {
    var We, Ke = {}, tt = null;
    if (se != null)
      for (We in se.key !== void 0 && (tt = "" + se.key), se)
        ft.call(se, We) && We !== "key" && We !== "__self" && We !== "__source" && (Ke[We] = se[We]);
    var nt = arguments.length - 2;
    if (nt === 1) Ke.children = _e;
    else if (1 < nt) {
      for (var Ft = Array(nt), we = 0; we < nt; we++)
        Ft[we] = arguments[we + 2];
      Ke.children = Ft;
    }
    if (R && R.defaultProps)
      for (We in nt = R.defaultProps, nt)
        Ke[We] === void 0 && (Ke[We] = nt[We]);
    return it(R, tt, Ke);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(R) {
    return { $$typeof: M, render: R };
  }, et.isValidElement = dt, et.lazy = function(R) {
    return {
      $$typeof: q,
      _payload: { _status: -1, _result: R },
      _init: st
    };
  }, et.memo = function(R, se) {
    return {
      $$typeof: U,
      type: R,
      compare: se === void 0 ? null : se
    };
  }, et.startTransition = function(R) {
    var se = ce.T, _e = {};
    ce.T = _e;
    try {
      var We = R(), Ke = ce.S;
      Ke !== null && Ke(_e, We), typeof We == "object" && We !== null && typeof We.then == "function" && We.then(ie, Tt);
    } catch (tt) {
      Tt(tt);
    } finally {
      se !== null && _e.types !== null && (se.types = _e.types), ce.T = se;
    }
  }, et.unstable_useCacheRefresh = function() {
    return ce.H.useCacheRefresh();
  }, et.use = function(R) {
    return ce.H.use(R);
  }, et.useActionState = function(R, se, _e) {
    return ce.H.useActionState(R, se, _e);
  }, et.useCallback = function(R, se) {
    return ce.H.useCallback(R, se);
  }, et.useContext = function(R) {
    return ce.H.useContext(R);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(R, se) {
    return ce.H.useDeferredValue(R, se);
  }, et.useEffect = function(R, se) {
    return ce.H.useEffect(R, se);
  }, et.useEffectEvent = function(R) {
    return ce.H.useEffectEvent(R);
  }, et.useId = function() {
    return ce.H.useId();
  }, et.useImperativeHandle = function(R, se, _e) {
    return ce.H.useImperativeHandle(R, se, _e);
  }, et.useInsertionEffect = function(R, se) {
    return ce.H.useInsertionEffect(R, se);
  }, et.useLayoutEffect = function(R, se) {
    return ce.H.useLayoutEffect(R, se);
  }, et.useMemo = function(R, se) {
    return ce.H.useMemo(R, se);
  }, et.useOptimistic = function(R, se) {
    return ce.H.useOptimistic(R, se);
  }, et.useReducer = function(R, se, _e) {
    return ce.H.useReducer(R, se, _e);
  }, et.useRef = function(R) {
    return ce.H.useRef(R);
  }, et.useState = function(R) {
    return ce.H.useState(R);
  }, et.useSyncExternalStore = function(R, se, _e) {
    return ce.H.useSyncExternalStore(
      R,
      se,
      _e
    );
  }, et.useTransition = function() {
    return ce.H.useTransition();
  }, et.version = "19.2.4", et;
}
var Nr = { exports: {} };
Nr.exports;
var Is;
function Ll() {
  return Is || (Is = 1, function(f, o) {
    var u = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    u.NODE_ENV !== "production" && function() {
      function d(h, x) {
        Object.defineProperty(P.prototype, h, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              x[0],
              x[1]
            );
          }
        });
      }
      function y(h) {
        return h === null || typeof h != "object" ? null : (h = G && h[G] || h["@@iterator"], typeof h == "function" ? h : null);
      }
      function m(h, x) {
        h = (h = h.constructor) && (h.displayName || h.name) || "ReactClass";
        var le = h + "." + x;
        $[le] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          x,
          h
        ), $[le] = !0);
      }
      function P(h, x, le) {
        this.props = h, this.context = x, this.refs = je, this.updater = le || te;
      }
      function M() {
      }
      function _(h, x, le) {
        this.props = h, this.context = x, this.refs = je, this.updater = le || te;
      }
      function U() {
      }
      function q(h) {
        return "" + h;
      }
      function X(h) {
        try {
          q(h);
          var x = !1;
        } catch {
          x = !0;
        }
        if (x) {
          x = console;
          var le = x.error, de = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return le.call(
            x,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            de
          ), q(h);
        }
      }
      function j(h) {
        if (h == null) return null;
        if (typeof h == "function")
          return h.$$typeof === ht ? null : h.displayName || h.name || null;
        if (typeof h == "string") return h;
        switch (h) {
          case se:
            return "Fragment";
          case We:
            return "Profiler";
          case _e:
            return "StrictMode";
          case Ft:
            return "Suspense";
          case we:
            return "SuspenseList";
          case I:
            return "Activity";
        }
        if (typeof h == "object")
          switch (typeof h.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), h.$$typeof) {
            case R:
              return "Portal";
            case tt:
              return h.displayName || "Context";
            case Ke:
              return (h._context.displayName || "Context") + ".Consumer";
            case nt:
              var x = h.render;
              return h = h.displayName, h || (h = x.displayName || x.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
            case Ot:
              return x = h.displayName || null, x !== null ? x : j(h.type) || "Memo";
            case Wt:
              x = h._payload, h = h._init;
              try {
                return j(h(x));
              } catch {
              }
          }
        return null;
      }
      function W(h) {
        if (h === se) return "<>";
        if (typeof h == "object" && h !== null && h.$$typeof === Wt)
          return "<...>";
        try {
          var x = j(h);
          return x ? "<" + x + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ke() {
        var h = Re.A;
        return h === null ? null : h.getOwner();
      }
      function ge() {
        return Error("react-stack-top-frame");
      }
      function z(h) {
        if (un.call(h, "key")) {
          var x = Object.getOwnPropertyDescriptor(h, "key").get;
          if (x && x.isReactWarning) return !1;
        }
        return h.key !== void 0;
      }
      function Ie(h, x) {
        function le() {
          dn || (dn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            x
          ));
        }
        le.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: le,
          configurable: !0
        });
      }
      function Z() {
        var h = j(this.type);
        return rt[h] || (rt[h] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), h = this.props.ref, h !== void 0 ? h : null;
      }
      function Me(h, x, le, de, ye, Ze) {
        var He = le.ref;
        return h = {
          $$typeof: Ve,
          type: h,
          key: x,
          props: le,
          _owner: de
        }, (He !== void 0 ? He : null) !== null ? Object.defineProperty(h, "ref", {
          enumerable: !1,
          get: Z
        }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(h, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(h, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ye
        }), Object.defineProperty(h, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ze
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      }
      function ee(h, x) {
        return x = Me(
          h.type,
          x,
          h.props,
          h._owner,
          h._debugStack,
          h._debugTask
        ), h._store && (x._store.validated = h._store.validated), x;
      }
      function Ae(h) {
        ie(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === Wt && (h._payload.status === "fulfilled" ? ie(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
      }
      function ie(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ve;
      }
      function ce(h) {
        var x = { "=": "=0", ":": "=2" };
        return "$" + h.replace(/[=:]/g, function(le) {
          return x[le];
        });
      }
      function ft(h, x) {
        return typeof h == "object" && h !== null && h.key != null ? (X(h.key), ce("" + h.key)) : x.toString(36);
      }
      function it(h) {
        switch (h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
          default:
            switch (typeof h.status == "string" ? h.then(U, U) : (h.status = "pending", h.then(
              function(x) {
                h.status === "pending" && (h.status = "fulfilled", h.value = x);
              },
              function(x) {
                h.status === "pending" && (h.status = "rejected", h.reason = x);
              }
            )), h.status) {
              case "fulfilled":
                return h.value;
              case "rejected":
                throw h.reason;
            }
        }
        throw h;
      }
      function qe(h, x, le, de, ye) {
        var Ze = typeof h;
        (Ze === "undefined" || Ze === "boolean") && (h = null);
        var He = !1;
        if (h === null) He = !0;
        else
          switch (Ze) {
            case "bigint":
            case "string":
            case "number":
              He = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ve:
                case R:
                  He = !0;
                  break;
                case Wt:
                  return He = h._init, qe(
                    He(h._payload),
                    x,
                    le,
                    de,
                    ye
                  );
              }
          }
        if (He) {
          He = h, ye = ye(He);
          var ut = de === "" ? "." + ft(He, 0) : de;
          return wt(ye) ? (le = "", ut != null && (le = ut.replace(cn, "$&/") + "/"), qe(ye, x, le, "", function(nn) {
            return nn;
          })) : ye != null && (ie(ye) && (ye.key != null && (He && He.key === ye.key || X(ye.key)), le = ee(
            ye,
            le + (ye.key == null || He && He.key === ye.key ? "" : ("" + ye.key).replace(
              cn,
              "$&/"
            ) + "/") + ut
          ), de !== "" && He != null && ie(He) && He.key == null && He._store && !He._store.validated && (le._store.validated = 2), ye = le), x.push(ye)), 1;
        }
        if (He = 0, ut = de === "" ? "." : de + ":", wt(h))
          for (var Ge = 0; Ge < h.length; Ge++)
            de = h[Ge], Ze = ut + ft(de, Ge), He += qe(
              de,
              x,
              le,
              Ze,
              ye
            );
        else if (Ge = y(h), typeof Ge == "function")
          for (Ge === h.entries && (Qt || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Qt = !0), h = Ge.call(h), Ge = 0; !(de = h.next()).done; )
            de = de.value, Ze = ut + ft(de, Ge++), He += qe(
              de,
              x,
              le,
              Ze,
              ye
            );
        else if (Ze === "object") {
          if (typeof h.then == "function")
            return qe(
              it(h),
              x,
              le,
              de,
              ye
            );
          throw x = String(h), Error(
            "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return He;
      }
      function dt(h, x, le) {
        if (h == null) return h;
        var de = [], ye = 0;
        return qe(h, de, "", "", function(Ze) {
          return x.call(le, Ze, ye++);
        }), de;
      }
      function Rt(h) {
        if (h._status === -1) {
          var x = h._ioInfo;
          x != null && (x.start = x.end = performance.now()), x = h._result;
          var le = x();
          if (le.then(
            function(ye) {
              if (h._status === 0 || h._status === -1) {
                h._status = 1, h._result = ye;
                var Ze = h._ioInfo;
                Ze != null && (Ze.end = performance.now()), le.status === void 0 && (le.status = "fulfilled", le.value = ye);
              }
            },
            function(ye) {
              if (h._status === 0 || h._status === -1) {
                h._status = 2, h._result = ye;
                var Ze = h._ioInfo;
                Ze != null && (Ze.end = performance.now()), le.status === void 0 && (le.status = "rejected", le.reason = ye);
              }
            }
          ), x = h._ioInfo, x != null) {
            x.value = le;
            var de = le.displayName;
            typeof de == "string" && (x.name = de);
          }
          h._status === -1 && (h._status = 0, h._result = le);
        }
        if (h._status === 1)
          return x = h._result, x === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            x
          ), "default" in x || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            x
          ), x.default;
        throw h._result;
      }
      function Le() {
        var h = Re.H;
        return h === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), h;
      }
      function vt() {
        Re.asyncTransitions--;
      }
      function De(h) {
        if ($t === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7);
            $t = (f && f[x]).call(
              f,
              "timers"
            ).setImmediate;
          } catch {
            $t = function(de) {
              Ht === !1 && (Ht = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = de, ye.port2.postMessage(void 0);
            };
          }
        return $t(h);
      }
      function at(h) {
        return 1 < h.length && typeof AggregateError == "function" ? new AggregateError(h) : h[0];
      }
      function Dt(h, x) {
        x !== Pt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Pt = x;
      }
      function st(h, x, le) {
        var de = Re.actQueue;
        if (de !== null)
          if (de.length !== 0)
            try {
              Tt(de), De(function() {
                return st(h, x, le);
              });
              return;
            } catch (ye) {
              Re.thrownErrors.push(ye);
            }
          else Re.actQueue = null;
        0 < Re.thrownErrors.length ? (de = at(Re.thrownErrors), Re.thrownErrors.length = 0, le(de)) : x(h);
      }
      function Tt(h) {
        if (!Ee) {
          Ee = !0;
          var x = 0;
          try {
            for (; x < h.length; x++) {
              var le = h[x];
              do {
                Re.didUsePromise = !1;
                var de = le(!1);
                if (de !== null) {
                  if (Re.didUsePromise) {
                    h[x] = le, h.splice(0, x);
                    return;
                  }
                  le = de;
                } else break;
              } while (!0);
            }
            h.length = 0;
          } catch (ye) {
            h.splice(0, x + 1), Re.thrownErrors.push(ye);
          } finally {
            Ee = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Ve = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), se = Symbol.for("react.fragment"), _e = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), Ke = Symbol.for("react.consumer"), tt = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), Ft = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), G = Symbol.iterator, $ = {}, te = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(h) {
          m(h, "forceUpdate");
        },
        enqueueReplaceState: function(h) {
          m(h, "replaceState");
        },
        enqueueSetState: function(h) {
          m(h, "setState");
        }
      }, Be = Object.assign, je = {};
      Object.freeze(je), P.prototype.isReactComponent = {}, P.prototype.setState = function(h, x) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, h, x, "setState");
      }, P.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      var Ne = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (rn in Ne)
        Ne.hasOwnProperty(rn) && d(rn, Ne[rn]);
      M.prototype = P.prototype, Ne = _.prototype = new M(), Ne.constructor = _, Be(Ne, P.prototype), Ne.isPureReactComponent = !0;
      var wt = Array.isArray, ht = Symbol.for("react.client.reference"), Re = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, un = Object.prototype.hasOwnProperty, ln = console.createTask ? console.createTask : function() {
        return null;
      };
      Ne = {
        react_stack_bottom_frame: function(h) {
          return h();
        }
      };
      var dn, Kt, rt = {}, Pe = Ne.react_stack_bottom_frame.bind(
        Ne,
        ge
      )(), gt = ln(W(ge)), Qt = !1, cn = /\/+/g, Lt = typeof reportError == "function" ? reportError : function(h) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var x = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
            error: h
          });
          if (!window.dispatchEvent(x)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", h);
          return;
        }
        console.error(h);
      }, Ht = !1, $t = null, Pt = 0, kt = !1, Ee = !1, Gt = typeof queueMicrotask == "function" ? function(h) {
        queueMicrotask(function() {
          return queueMicrotask(h);
        });
      } : De;
      Ne = Object.freeze({
        __proto__: null,
        c: function(h) {
          return Le().useMemoCache(h);
        }
      });
      var rn = {
        map: dt,
        forEach: function(h, x, le) {
          dt(
            h,
            function() {
              x.apply(this, arguments);
            },
            le
          );
        },
        count: function(h) {
          var x = 0;
          return dt(h, function() {
            x++;
          }), x;
        },
        toArray: function(h) {
          return dt(h, function(x) {
            return x;
          }) || [];
        },
        only: function(h) {
          if (!ie(h))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return h;
        }
      };
      o.Activity = I, o.Children = rn, o.Component = P, o.Fragment = se, o.Profiler = We, o.PureComponent = _, o.StrictMode = _e, o.Suspense = Ft, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Re, o.__COMPILER_RUNTIME = Ne, o.act = function(h) {
        var x = Re.actQueue, le = Pt;
        Pt++;
        var de = Re.actQueue = x !== null ? x : [], ye = !1;
        try {
          var Ze = h();
        } catch (Ge) {
          Re.thrownErrors.push(Ge);
        }
        if (0 < Re.thrownErrors.length)
          throw Dt(x, le), h = at(Re.thrownErrors), Re.thrownErrors.length = 0, h;
        if (Ze !== null && typeof Ze == "object" && typeof Ze.then == "function") {
          var He = Ze;
          return Gt(function() {
            ye || kt || (kt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ge, nn) {
              ye = !0, He.then(
                function(Xt) {
                  if (Dt(x, le), le === 0) {
                    try {
                      Tt(de), De(function() {
                        return st(
                          Xt,
                          Ge,
                          nn
                        );
                      });
                    } catch (Ln) {
                      Re.thrownErrors.push(Ln);
                    }
                    if (0 < Re.thrownErrors.length) {
                      var qn = at(
                        Re.thrownErrors
                      );
                      Re.thrownErrors.length = 0, nn(qn);
                    }
                  } else Ge(Xt);
                },
                function(Xt) {
                  Dt(x, le), 0 < Re.thrownErrors.length && (Xt = at(
                    Re.thrownErrors
                  ), Re.thrownErrors.length = 0), nn(Xt);
                }
              );
            }
          };
        }
        var ut = Ze;
        if (Dt(x, le), le === 0 && (Tt(de), de.length !== 0 && Gt(function() {
          ye || kt || (kt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Re.actQueue = null), 0 < Re.thrownErrors.length)
          throw h = at(Re.thrownErrors), Re.thrownErrors.length = 0, h;
        return {
          then: function(Ge, nn) {
            ye = !0, le === 0 ? (Re.actQueue = de, De(function() {
              return st(
                ut,
                Ge,
                nn
              );
            })) : Ge(ut);
          }
        };
      }, o.cache = function(h) {
        return function() {
          return h.apply(null, arguments);
        };
      }, o.cacheSignal = function() {
        return null;
      }, o.captureOwnerStack = function() {
        var h = Re.getCurrentStack;
        return h === null ? null : h();
      }, o.cloneElement = function(h, x, le) {
        if (h == null)
          throw Error(
            "The argument must be a React element, but you passed " + h + "."
          );
        var de = Be({}, h.props), ye = h.key, Ze = h._owner;
        if (x != null) {
          var He;
          e: {
            if (un.call(x, "ref") && (He = Object.getOwnPropertyDescriptor(
              x,
              "ref"
            ).get) && He.isReactWarning) {
              He = !1;
              break e;
            }
            He = x.ref !== void 0;
          }
          He && (Ze = ke()), z(x) && (X(x.key), ye = "" + x.key);
          for (ut in x)
            !un.call(x, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && x.ref === void 0 || (de[ut] = x[ut]);
        }
        var ut = arguments.length - 2;
        if (ut === 1) de.children = le;
        else if (1 < ut) {
          He = Array(ut);
          for (var Ge = 0; Ge < ut; Ge++)
            He[Ge] = arguments[Ge + 2];
          de.children = He;
        }
        for (de = Me(
          h.type,
          ye,
          de,
          Ze,
          h._debugStack,
          h._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          Ae(arguments[ye]);
        return de;
      }, o.createContext = function(h) {
        return h = {
          $$typeof: tt,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, h.Provider = h, h.Consumer = {
          $$typeof: Ke,
          _context: h
        }, h._currentRenderer = null, h._currentRenderer2 = null, h;
      }, o.createElement = function(h, x, le) {
        for (var de = 2; de < arguments.length; de++)
          Ae(arguments[de]);
        de = {};
        var ye = null;
        if (x != null)
          for (Ge in Kt || !("__self" in x) || "key" in x || (Kt = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), z(x) && (X(x.key), ye = "" + x.key), x)
            un.call(x, Ge) && Ge !== "key" && Ge !== "__self" && Ge !== "__source" && (de[Ge] = x[Ge]);
        var Ze = arguments.length - 2;
        if (Ze === 1) de.children = le;
        else if (1 < Ze) {
          for (var He = Array(Ze), ut = 0; ut < Ze; ut++)
            He[ut] = arguments[ut + 2];
          Object.freeze && Object.freeze(He), de.children = He;
        }
        if (h && h.defaultProps)
          for (Ge in Ze = h.defaultProps, Ze)
            de[Ge] === void 0 && (de[Ge] = Ze[Ge]);
        ye && Ie(
          de,
          typeof h == "function" ? h.displayName || h.name || "Unknown" : h
        );
        var Ge = 1e4 > Re.recentlyCreatedOwnerStacks++;
        return Me(
          h,
          ye,
          de,
          ke(),
          Ge ? Error("react-stack-top-frame") : Pe,
          Ge ? ln(W(h)) : gt
        );
      }, o.createRef = function() {
        var h = { current: null };
        return Object.seal(h), h;
      }, o.forwardRef = function(h) {
        h != null && h.$$typeof === Ot ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof h != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          h === null ? "null" : typeof h
        ) : h.length !== 0 && h.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), h != null && h.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var x = { $$typeof: nt, render: h }, le;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return le;
          },
          set: function(de) {
            le = de, h.name || h.displayName || (Object.defineProperty(h, "name", { value: de }), h.displayName = de);
          }
        }), x;
      }, o.isValidElement = ie, o.lazy = function(h) {
        h = { _status: -1, _result: h };
        var x = {
          $$typeof: Wt,
          _payload: h,
          _init: Rt
        }, le = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return h._ioInfo = le, x._debugInfo = [{ awaited: le }], x;
      }, o.memo = function(h, x) {
        h == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          h === null ? "null" : typeof h
        ), x = {
          $$typeof: Ot,
          type: h,
          compare: x === void 0 ? null : x
        };
        var le;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return le;
          },
          set: function(de) {
            le = de, h.name || h.displayName || (Object.defineProperty(h, "name", { value: de }), h.displayName = de);
          }
        }), x;
      }, o.startTransition = function(h) {
        var x = Re.T, le = {};
        le._updatedFibers = /* @__PURE__ */ new Set(), Re.T = le;
        try {
          var de = h(), ye = Re.S;
          ye !== null && ye(le, de), typeof de == "object" && de !== null && typeof de.then == "function" && (Re.asyncTransitions++, de.then(vt, vt), de.then(U, Lt));
        } catch (Ze) {
          Lt(Ze);
        } finally {
          x === null && le._updatedFibers && (h = le._updatedFibers.size, le._updatedFibers.clear(), 10 < h && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), x !== null && le.types !== null && (x.types !== null && x.types !== le.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), x.types = le.types), Re.T = x;
        }
      }, o.unstable_useCacheRefresh = function() {
        return Le().useCacheRefresh();
      }, o.use = function(h) {
        return Le().use(h);
      }, o.useActionState = function(h, x, le) {
        return Le().useActionState(
          h,
          x,
          le
        );
      }, o.useCallback = function(h, x) {
        return Le().useCallback(h, x);
      }, o.useContext = function(h) {
        var x = Le();
        return h.$$typeof === Ke && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), x.useContext(h);
      }, o.useDebugValue = function(h, x) {
        return Le().useDebugValue(h, x);
      }, o.useDeferredValue = function(h, x) {
        return Le().useDeferredValue(h, x);
      }, o.useEffect = function(h, x) {
        return h == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Le().useEffect(h, x);
      }, o.useEffectEvent = function(h) {
        return Le().useEffectEvent(h);
      }, o.useId = function() {
        return Le().useId();
      }, o.useImperativeHandle = function(h, x, le) {
        return Le().useImperativeHandle(h, x, le);
      }, o.useInsertionEffect = function(h, x) {
        return h == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Le().useInsertionEffect(h, x);
      }, o.useLayoutEffect = function(h, x) {
        return h == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Le().useLayoutEffect(h, x);
      }, o.useMemo = function(h, x) {
        return Le().useMemo(h, x);
      }, o.useOptimistic = function(h, x) {
        return Le().useOptimistic(h, x);
      }, o.useReducer = function(h, x, le) {
        return Le().useReducer(h, x, le);
      }, o.useRef = function(h) {
        return Le().useRef(h);
      }, o.useState = function(h) {
        return Le().useState(h);
      }, o.useSyncExternalStore = function(h, x, le) {
        return Le().useSyncExternalStore(
          h,
          x,
          le
        );
      }, o.useTransition = function() {
        return Le().useTransition();
      }, o.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Nr, Nr.exports)), Nr.exports;
}
var Vl = {};
Vl.NODE_ENV === "production" ? si.exports = Fl() : si.exports = Ll();
var mt = si.exports, Ul = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const jl = /* @__PURE__ */ li(Ul);
var Kl = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function As(f) {
  var o = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, u = f.match(/<\/?([^\s]+?)[/\s>]/);
  if (u && (o.name = u[1], (jl[u[1]] || f.charAt(f.length - 2) === "/") && (o.voidElement = !0), o.name.startsWith("!--"))) {
    var d = f.indexOf("-->");
    return { type: "comment", comment: d !== -1 ? f.slice(4, d) : "" };
  }
  for (var y = new RegExp(Kl), m = null; (m = y.exec(f)) !== null; ) if (m[0].trim()) if (m[1]) {
    var P = m[1].trim(), M = [P, ""];
    P.indexOf("=") > -1 && (M = P.split("=")), o.attrs[M[0]] = M[1], y.lastIndex--;
  } else m[2] && (o.attrs[m[2]] = m[3].trim().substring(1, m[3].length - 1));
  return o;
}
var $l = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Hl = /^\s*$/, Gl = /* @__PURE__ */ Object.create(null);
function Gs(f, o) {
  switch (o.type) {
    case "text":
      return f + o.content;
    case "tag":
      return f += "<" + o.name + (o.attrs ? function(u) {
        var d = [];
        for (var y in u) d.push(y + '="' + u[y] + '"');
        return d.length ? " " + d.join(" ") : "";
      }(o.attrs) : "") + (o.voidElement ? "/>" : ">"), o.voidElement ? f : f + o.children.reduce(Gs, "") + "</" + o.name + ">";
    case "comment":
      return f + "<!--" + o.comment + "-->";
  }
}
var zl = { parse: function(f, o) {
  o || (o = {}), o.components || (o.components = Gl);
  var u, d = [], y = [], m = -1, P = !1;
  if (f.indexOf("<") !== 0) {
    var M = f.indexOf("<");
    d.push({ type: "text", content: M === -1 ? f : f.substring(0, M) });
  }
  return f.replace($l, function(_, U) {
    if (P) {
      if (_ !== "</" + u.name + ">") return;
      P = !1;
    }
    var q, X = _.charAt(1) !== "/", j = _.startsWith("<!--"), W = U + _.length, ke = f.charAt(W);
    if (j) {
      var ge = As(_);
      return m < 0 ? (d.push(ge), d) : ((q = y[m]).children.push(ge), d);
    }
    if (X && (m++, (u = As(_)).type === "tag" && o.components[u.name] && (u.type = "component", P = !0), u.voidElement || P || !ke || ke === "<" || u.children.push({ type: "text", content: f.slice(W, f.indexOf("<", W)) }), m === 0 && d.push(u), (q = y[m - 1]) && q.children.push(u), y[m] = u), (!X || u.voidElement) && (m > -1 && (u.voidElement || u.name === _.slice(2, -1)) && (m--, u = m === -1 ? d : y[m]), !P && ke !== "<" && ke)) {
      q = m === -1 ? d : y[m].children;
      var z = f.indexOf("<", W), Ie = f.slice(W, z === -1 ? void 0 : z);
      Hl.test(Ie) && (Ie = " "), (z > -1 && m + q.length >= 0 || Ie !== " ") && q.push({ type: "text", content: Ie });
    }
  }), d;
}, stringify: function(f) {
  return f.reduce(function(o, u) {
    return o + Gs("", u);
  }, "");
} };
function po() {
  if (console && console.warn) {
    for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
      o[u] = arguments[u];
    wn(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), console.warn(...o);
  }
}
const Es = {};
function fo() {
  for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
    o[u] = arguments[u];
  wn(o[0]) && Es[o[0]] || (wn(o[0]) && (Es[o[0]] = /* @__PURE__ */ new Date()), po(...o));
}
const zs = (f, o) => () => {
  if (f.isInitialized)
    o();
  else {
    const u = () => {
      setTimeout(() => {
        f.off("initialized", u);
      }, 0), o();
    };
    f.on("initialized", u);
  }
}, Ts = (f, o, u) => {
  f.loadNamespaces(o, zs(f, u));
}, _s = (f, o, u, d) => {
  wn(u) && (u = [u]), u.forEach((y) => {
    f.options.ns.indexOf(y) < 0 && f.options.ns.push(y);
  }), f.loadLanguages(o, zs(f, d));
}, ql = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const d = o.languages[0], y = o.options ? o.options.fallbackLng : !1, m = o.languages[o.languages.length - 1];
  if (d.toLowerCase() === "cimode") return !0;
  const P = (M, _) => {
    const U = o.services.backendConnector.state[`${M}|${_}`];
    return U === -1 || U === 2;
  };
  return u.bindI18n && u.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !P(o.isLanguageChangingTo, f) ? !1 : !!(o.hasResourceBundle(d, f) || !o.services.backendConnector.backend || o.options.resources && !o.options.partialBundledLanguages || P(d, f) && (!y || P(m, f)));
}, Jl = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !o.languages || !o.languages.length ? (fo("i18n.languages were undefined or empty", o.languages), !0) : o.options.ignoreJSONStructure !== void 0 ? o.hasLoadedNamespace(f, {
    lng: u.lng,
    precheck: (y, m) => {
      if (u.bindI18n && u.bindI18n.indexOf("languageChanging") > -1 && y.services.backendConnector.backend && y.isLanguageChangingTo && !m(y.isLanguageChangingTo, f)) return !1;
    }
  }) : ql(f, o, u);
}, qs = (f) => f.displayName || f.name || (wn(f) && f.length > 0 ? f : "Unknown"), wn = (f) => typeof f == "string", lr = (f) => typeof f == "object" && f !== null, Yl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Zl = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Ql = (f) => Zl[f], Xl = (f) => f.replace(Yl, Ql);
let ci = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Xl
};
const Js = function() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ci = {
    ...ci,
    ...f
  };
}, di = () => ci;
let Ys;
const Zs = (f) => {
  Ys = f;
}, pr = () => Ys, ti = (f, o) => {
  if (!f) return !1;
  const u = f.props ? f.props.children : f.children;
  return o ? u.length > 0 : !!u;
}, ni = (f) => {
  if (!f) return [];
  const o = f.props ? f.props.children : f.children;
  return f.props && f.props.i18nIsDynamicList ? dr(o) : o;
}, ed = (f) => Array.isArray(f) && f.every(mt.isValidElement), dr = (f) => Array.isArray(f) ? f : [f], td = (f, o) => {
  const u = {
    ...o
  };
  return u.props = Object.assign(f.props, o.props), u;
}, Qs = (f, o) => {
  if (!f) return "";
  let u = "";
  const d = dr(f), y = o.transSupportBasicHtmlNodes && o.transKeepBasicHtmlNodesFor ? o.transKeepBasicHtmlNodesFor : [];
  return d.forEach((m, P) => {
    if (wn(m))
      u += `${m}`;
    else if (mt.isValidElement(m)) {
      const {
        props: M,
        type: _
      } = m, U = Object.keys(M).length, q = y.indexOf(_) > -1, X = M.children;
      if (!X && q && !U)
        u += `<${_}/>`;
      else if (!X && (!q || U) || M.i18nIsDynamicList)
        u += `<${P}></${P}>`;
      else if (q && U === 1 && wn(X))
        u += `<${_}>${X}</${_}>`;
      else {
        const j = Qs(X, o);
        u += `<${P}>${j}</${P}>`;
      }
    } else if (m === null)
      po("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (lr(m)) {
      const {
        format: M,
        ..._
      } = m, U = Object.keys(_);
      if (U.length === 1) {
        const q = M ? `${U[0]}, ${M}` : U[0];
        u += `{{${q}}}`;
      } else
        po("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", m);
    } else
      po("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", m);
  }), u;
}, nd = (f, o, u, d, y, m) => {
  if (o === "") return [];
  const P = d.transKeepBasicHtmlNodesFor || [], M = o && new RegExp(P.map((z) => `<${z}`).join("|")).test(o);
  if (!f && !M && !m) return [o];
  const _ = {}, U = (z) => {
    dr(z).forEach((Z) => {
      wn(Z) || (ti(Z) ? U(ni(Z)) : lr(Z) && !mt.isValidElement(Z) && Object.assign(_, Z));
    });
  };
  U(f);
  const q = zl.parse(`<0>${o}</0>`), X = {
    ..._,
    ...y
  }, j = (z, Ie, Z) => {
    const Me = ni(z), ee = ke(Me, Ie.children, Z);
    return ed(Me) && ee.length === 0 || z.props && z.props.i18nIsDynamicList ? Me : ee;
  }, W = (z, Ie, Z, Me, ee) => {
    z.dummy ? (z.children = Ie, Z.push(mt.cloneElement(z, {
      key: Me
    }, ee ? void 0 : Ie))) : Z.push(...mt.Children.map([z], (Ae) => {
      const ie = {
        ...Ae.props
      };
      return delete ie.i18nIsDynamicList, mt.createElement(Ae.type, {
        ...ie,
        key: Me,
        ref: Ae.ref
      }, ee ? null : Ie);
    }));
  }, ke = (z, Ie, Z) => {
    const Me = dr(z);
    return dr(Ie).reduce((Ae, ie, ce) => {
      const ft = ie.children && ie.children[0] && ie.children[0].content && u.services.interpolator.interpolate(ie.children[0].content, X, u.language);
      if (ie.type === "tag") {
        let it = Me[parseInt(ie.name, 10)];
        Z.length === 1 && !it && (it = Z[0][ie.name]), it || (it = {});
        const qe = Object.keys(ie.attrs).length !== 0 ? td({
          props: ie.attrs
        }, it) : it, dt = mt.isValidElement(qe), Rt = dt && ti(ie, !0) && !ie.voidElement, Le = M && lr(qe) && qe.dummy && !dt, vt = lr(f) && Object.hasOwnProperty.call(f, ie.name);
        if (wn(qe)) {
          const De = u.services.interpolator.interpolate(qe, X, u.language);
          Ae.push(De);
        } else if (ti(qe) || Rt) {
          const De = j(qe, ie, Z);
          W(qe, De, Ae, ce);
        } else if (Le) {
          const De = ke(Me, ie.children, Z);
          W(qe, De, Ae, ce);
        } else if (Number.isNaN(parseFloat(ie.name)))
          if (vt) {
            const De = j(qe, ie, Z);
            W(qe, De, Ae, ce, ie.voidElement);
          } else if (d.transSupportBasicHtmlNodes && P.indexOf(ie.name) > -1)
            if (ie.voidElement)
              Ae.push(mt.createElement(ie.name, {
                key: `${ie.name}-${ce}`
              }));
            else {
              const De = ke(Me, ie.children, Z);
              Ae.push(mt.createElement(ie.name, {
                key: `${ie.name}-${ce}`
              }, De));
            }
          else if (ie.voidElement)
            Ae.push(`<${ie.name} />`);
          else {
            const De = ke(Me, ie.children, Z);
            Ae.push(`<${ie.name}>${De}</${ie.name}>`);
          }
        else if (lr(qe) && !dt) {
          const De = ie.children[0] ? ft : null;
          De && Ae.push(De);
        } else
          W(qe, ft, Ae, ce, ie.children.length !== 1 || !ft);
      } else if (ie.type === "text") {
        const it = d.transWrapTextNodes, qe = m ? d.unescape(u.services.interpolator.interpolate(ie.content, X, u.language)) : u.services.interpolator.interpolate(ie.content, X, u.language);
        it ? Ae.push(mt.createElement(it, {
          key: `${ie.name}-${ce}`
        }, qe)) : Ae.push(qe);
      }
      return Ae;
    }, []);
  }, ge = ke([{
    dummy: !0,
    children: f || []
  }], q, dr(f || []));
  return ni(ge[0]);
};
function Xs(f) {
  let {
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P = {},
    values: M,
    defaults: _,
    components: U,
    ns: q,
    i18n: X,
    t: j,
    shouldUnescape: W,
    ...ke
  } = f;
  const ge = X || pr();
  if (!ge)
    return fo("You will need to pass in an i18next instance by using i18nextReactModule"), o;
  const z = j || ge.t.bind(ge) || ((Rt) => Rt), Ie = {
    ...di(),
    ...ge.options && ge.options.react
  };
  let Z = q || z.ns || ge.options && ge.options.defaultNS;
  Z = wn(Z) ? [Z] : Z || ["translation"];
  const Me = Qs(o, Ie), ee = _ || Me || Ie.transEmptyNodeValue || y, {
    hashTransKey: Ae
  } = Ie, ie = y || (Ae ? Ae(Me || ee) : Me || ee);
  ge.options && ge.options.interpolation && ge.options.interpolation.defaultVariables && (M = M && Object.keys(M).length > 0 ? {
    ...M,
    ...ge.options.interpolation.defaultVariables
  } : {
    ...ge.options.interpolation.defaultVariables
  });
  const ce = M || u !== void 0 || !o ? P.interpolation : {
    interpolation: {
      ...P.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, ft = {
    ...P,
    context: m || P.context,
    count: u,
    ...M,
    ...ce,
    defaultValue: ee,
    ns: Z
  }, it = ie ? z(ie, ft) : ee;
  U && Object.keys(U).forEach((Rt) => {
    const Le = U[Rt];
    if (typeof Le.type == "function" || !Le.props || !Le.props.children || it.indexOf(`${Rt}/>`) < 0 && it.indexOf(`${Rt} />`) < 0) return;
    function vt() {
      return mt.createElement(mt.Fragment, null, Le);
    }
    U[Rt] = mt.createElement(vt);
  });
  const qe = nd(U || o, it, ge, Ie, ft, W), dt = d !== void 0 ? d : Ie.defaultTransParent;
  return dt ? mt.createElement(dt, ke, qe) : qe;
}
const ad = {
  type: "3rdParty",
  init(f) {
    Js(f.options.react), Zs(f);
  }
}, Ur = mt.createContext();
class rd {
  constructor() {
    Ss(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(o) {
    o.forEach((u) => {
      this.usedNamespaces[u] || (this.usedNamespaces[u] = !0);
    });
  }
}
const ec = (f) => async (o) => {
  const u = f.getInitialProps ? await f.getInitialProps(o) : {}, d = tc();
  return {
    ...u,
    ...d
  };
}, tc = () => {
  const f = pr(), o = f.reportNamespaces ? f.reportNamespaces.getUsedNamespaces() : [], u = {}, d = {};
  return f.languages.forEach((y) => {
    d[y] = {}, o.forEach((m) => {
      d[y][m] = f.getResourceBundle(y, m) || {};
    });
  }), u.initialI18nStore = d, u.initialLanguage = f.language, u;
};
function od(f) {
  let {
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P = {},
    values: M,
    defaults: _,
    components: U,
    ns: q,
    i18n: X,
    t: j,
    shouldUnescape: W,
    ...ke
  } = f;
  const {
    i18n: ge,
    defaultNS: z
  } = mt.useContext(Ur) || {}, Ie = X || ge || pr(), Z = j || Ie && Ie.t.bind(Ie);
  return Xs({
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P,
    values: M,
    defaults: _,
    components: U,
    ns: q || Z && Z.ns || z || Ie && Ie.options && Ie.options.defaultNS,
    i18n: Ie,
    t: j,
    shouldUnescape: W,
    ...ke
  });
}
const id = (f, o) => {
  const u = mt.useRef();
  return mt.useEffect(() => {
    u.current = f;
  }, [f, o]), u.current;
}, nc = (f, o, u, d) => f.getFixedT(o, u, d), sd = (f, o, u, d) => mt.useCallback(nc(f, o, u, d), [f, o, u, d]), pi = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: u
  } = o, {
    i18n: d,
    defaultNS: y
  } = mt.useContext(Ur) || {}, m = u || d || pr();
  if (m && !m.reportNamespaces && (m.reportNamespaces = new rd()), !m) {
    fo("You will need to pass in an i18next instance by using initReactI18next");
    const ee = (ie, ce) => wn(ce) ? ce : lr(ce) && wn(ce.defaultValue) ? ce.defaultValue : Array.isArray(ie) ? ie[ie.length - 1] : ie, Ae = [ee, {}, !1];
    return Ae.t = ee, Ae.i18n = {}, Ae.ready = !1, Ae;
  }
  m.options.react && m.options.react.wait !== void 0 && fo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const P = {
    ...di(),
    ...m.options.react,
    ...o
  }, {
    useSuspense: M,
    keyPrefix: _
  } = P;
  let U = f || y || m.options && m.options.defaultNS;
  U = wn(U) ? [U] : U || ["translation"], m.reportNamespaces.addUsedNamespaces && m.reportNamespaces.addUsedNamespaces(U);
  const q = (m.isInitialized || m.initializedStoreOnce) && U.every((ee) => Jl(ee, m, P)), X = sd(m, o.lng || null, P.nsMode === "fallback" ? U : U[0], _), j = () => X, W = () => nc(m, o.lng || null, P.nsMode === "fallback" ? U : U[0], _), [ke, ge] = mt.useState(j);
  let z = U.join();
  o.lng && (z = `${o.lng}${z}`);
  const Ie = id(z), Z = mt.useRef(!0);
  mt.useEffect(() => {
    const {
      bindI18n: ee,
      bindI18nStore: Ae
    } = P;
    Z.current = !0, !q && !M && (o.lng ? _s(m, o.lng, U, () => {
      Z.current && ge(W);
    }) : Ts(m, U, () => {
      Z.current && ge(W);
    })), q && Ie && Ie !== z && Z.current && ge(W);
    const ie = () => {
      Z.current && ge(W);
    };
    return ee && m && m.on(ee, ie), Ae && m && m.store.on(Ae, ie), () => {
      Z.current = !1, ee && m && ee.split(" ").forEach((ce) => m.off(ce, ie)), Ae && m && Ae.split(" ").forEach((ce) => m.store.off(ce, ie));
    };
  }, [m, z]), mt.useEffect(() => {
    Z.current && q && ge(j);
  }, [m, _, q]);
  const Me = [ke, m, q];
  if (Me.t = ke, Me.i18n = m, Me.ready = q, q || !q && !M) return Me;
  throw new Promise((ee) => {
    o.lng ? _s(m, o.lng, U, () => ee()) : Ts(m, U, () => ee());
  });
}, cd = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(d) {
    function y(P) {
      let {
        forwardedRef: M,
        ..._
      } = P;
      const [U, q, X] = pi(f, {
        ..._,
        keyPrefix: o.keyPrefix
      }), j = {
        ..._,
        t: U,
        i18n: q,
        tReady: X
      };
      return o.withRef && M ? j.ref = M : !o.withRef && M && (j.forwardedRef = M), mt.createElement(d, j);
    }
    y.displayName = `withI18nextTranslation(${qs(d)})`, y.WrappedComponent = d;
    const m = (P, M) => mt.createElement(y, Object.assign({}, P, {
      forwardedRef: M
    }));
    return o.withRef ? mt.forwardRef(m) : y;
  };
};
function ud(f) {
  const {
    ns: o,
    children: u,
    ...d
  } = f, [y, m, P] = pi(o, d);
  return u(y, {
    i18n: m,
    lng: m.language
  }, P);
}
function ld(f) {
  let {
    i18n: o,
    defaultNS: u,
    children: d
  } = f;
  const y = mt.useMemo(() => ({
    i18n: o,
    defaultNS: u
  }), [o, u]);
  return mt.createElement(Ur.Provider, {
    value: y
  }, d);
}
const ac = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    i18n: d
  } = u, {
    i18n: y
  } = mt.useContext(Ur) || {}, m = d || y || pr();
  m.options && m.options.isClone || (f && !m.initializedStoreOnce && (m.services.resourceStore.data = f, m.options.ns = Object.values(f).reduce((P, M) => (Object.keys(M).forEach((_) => {
    P.indexOf(_) < 0 && P.push(_);
  }), P), m.options.ns), m.initializedStoreOnce = !0, m.isInitialized = !0), o && !m.initializedLanguageOnce && (m.changeLanguage(o), m.initializedLanguageOnce = !0));
}, dd = () => function(o) {
  function u(d) {
    let {
      initialI18nStore: y,
      initialLanguage: m,
      ...P
    } = d;
    return ac(y, m), mt.createElement(o, {
      ...P
    });
  }
  return u.getInitialProps = ec(o), u.displayName = `withI18nextSSR(${qs(o)})`, u.WrappedComponent = o, u;
}, pd = () => "", fd = () => "", hd = () => "", gd = () => "", md = () => "", wd = () => "", yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nContext: Ur,
  I18nextProvider: ld,
  Trans: od,
  TransWithoutContext: Xs,
  Translation: ud,
  composeInitialProps: ec,
  date: pd,
  getDefaults: di,
  getI18n: pr,
  getInitialProps: tc,
  initReactI18next: ad,
  number: hd,
  plural: md,
  select: gd,
  selectOrdinal: wd,
  setDefaults: Js,
  setI18n: Zs,
  time: fd,
  useSSR: ac,
  useTranslation: pi,
  withSSR: dd,
  withTranslation: cd
}, Symbol.toStringTag, { value: "Module" })), bd = /* @__PURE__ */ Ks(yd), Ye = (f) => typeof f == "string", Br = () => {
  let f, o;
  const u = new Promise((d, y) => {
    f = d, o = y;
  });
  return u.resolve = f, u.reject = o, u;
}, Rs = (f) => f == null ? "" : "" + f, vd = (f, o, u) => {
  f.forEach((d) => {
    o[d] && (u[d] = o[d]);
  });
}, kd = /###/g, Ds = (f) => f && f.indexOf("###") > -1 ? f.replace(kd, ".") : f, Os = (f) => !f || Ye(f), Fr = (f, o, u) => {
  const d = Ye(o) ? o.split(".") : o;
  let y = 0;
  for (; y < d.length - 1; ) {
    if (Os(f)) return {};
    const m = Ds(d[y]);
    !f[m] && u && (f[m] = new u()), Object.prototype.hasOwnProperty.call(f, m) ? f = f[m] : f = {}, ++y;
  }
  return Os(f) ? {} : {
    obj: f,
    k: Ds(d[y])
  };
}, Ws = (f, o, u) => {
  const {
    obj: d,
    k: y
  } = Fr(f, o, Object);
  if (d !== void 0 || o.length === 1) {
    d[y] = u;
    return;
  }
  let m = o[o.length - 1], P = o.slice(0, o.length - 1), M = Fr(f, P, Object);
  for (; M.obj === void 0 && P.length; )
    m = `${P[P.length - 1]}.${m}`, P = P.slice(0, P.length - 1), M = Fr(f, P, Object), M && M.obj && typeof M.obj[`${M.k}.${m}`] < "u" && (M.obj = void 0);
  M.obj[`${M.k}.${m}`] = u;
}, Sd = (f, o, u, d) => {
  const {
    obj: y,
    k: m
  } = Fr(f, o, Object);
  y[m] = y[m] || [], y[m].push(u);
}, ho = (f, o) => {
  const {
    obj: u,
    k: d
  } = Fr(f, o);
  if (u)
    return u[d];
}, Pd = (f, o, u) => {
  const d = ho(f, u);
  return d !== void 0 ? d : ho(o, u);
}, rc = (f, o, u) => {
  for (const d in o)
    d !== "__proto__" && d !== "constructor" && (d in f ? Ye(f[d]) || f[d] instanceof String || Ye(o[d]) || o[d] instanceof String ? u && (f[d] = o[d]) : rc(f[d], o[d], u) : f[d] = o[d]);
  return f;
}, sr = (f) => f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var xd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Cd = (f) => Ye(f) ? f.replace(/[&<>"'\/]/g, (o) => xd[o]) : f;
class Md {
  constructor(o) {
    this.capacity = o, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(o) {
    const u = this.regExpMap.get(o);
    if (u !== void 0)
      return u;
    const d = new RegExp(o);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(o, d), this.regExpQueue.push(o), d;
  }
}
const Id = [" ", ",", "?", "!", ";"], Ad = new Md(20), Ed = (f, o, u) => {
  o = o || "", u = u || "";
  const d = Id.filter((P) => o.indexOf(P) < 0 && u.indexOf(P) < 0);
  if (d.length === 0) return !0;
  const y = Ad.getRegExp(`(${d.map((P) => P === "?" ? "\\?" : P).join("|")})`);
  let m = !y.test(f);
  if (!m) {
    const P = f.indexOf(u);
    P > 0 && !y.test(f.substring(0, P)) && (m = !0);
  }
  return m;
}, ui = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!f) return;
  if (f[o]) return f[o];
  const d = o.split(u);
  let y = f;
  for (let m = 0; m < d.length; ) {
    if (!y || typeof y != "object")
      return;
    let P, M = "";
    for (let _ = m; _ < d.length; ++_)
      if (_ !== m && (M += u), M += d[_], P = y[M], P !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof P) > -1 && _ < d.length - 1)
          continue;
        m += _ - m + 1;
        break;
      }
    y = P;
  }
  return y;
}, go = (f) => f && f.replace("_", "-"), Td = {
  type: "logger",
  log(f) {
    this.output("log", f);
  },
  warn(f) {
    this.output("warn", f);
  },
  error(f) {
    this.output("error", f);
  },
  output(f, o) {
    console && console[f] && console[f].apply(console, o);
  }
};
class mo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, u);
  }
  init(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = u.prefix || "i18next:", this.logger = o || Td, this.options = u, this.debug = u.debug;
  }
  log() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "log", "", !0);
  }
  warn() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "warn", "", !0);
  }
  error() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "error", "");
  }
  deprecate() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(o, u, d, y) {
    return y && !this.debug ? null : (Ye(o[0]) && (o[0] = `${d}${this.prefix} ${o[0]}`), this.logger[u](o));
  }
  create(o) {
    return new mo(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new mo(this.logger, o);
  }
}
var Fn = new mo();
class yo {
  constructor() {
    this.observers = {};
  }
  on(o, u) {
    return o.split(" ").forEach((d) => {
      this.observers[d] || (this.observers[d] = /* @__PURE__ */ new Map());
      const y = this.observers[d].get(u) || 0;
      this.observers[d].set(u, y + 1);
    }), this;
  }
  off(o, u) {
    if (this.observers[o]) {
      if (!u) {
        delete this.observers[o];
        return;
      }
      this.observers[o].delete(u);
    }
  }
  emit(o) {
    for (var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), y = 1; y < u; y++)
      d[y - 1] = arguments[y];
    this.observers[o] && Array.from(this.observers[o].entries()).forEach((P) => {
      let [M, _] = P;
      for (let U = 0; U < _; U++)
        M(...d);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((P) => {
      let [M, _] = P;
      for (let U = 0; U < _; U++)
        M.apply(M, [o, ...d]);
    });
  }
}
class Bs extends yo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = o || {}, this.options = u, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(o) {
    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
  }
  removeNamespaces(o) {
    const u = this.options.ns.indexOf(o);
    u > -1 && this.options.ns.splice(u, 1);
  }
  getResource(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = y.keySeparator !== void 0 ? y.keySeparator : this.options.keySeparator, P = y.ignoreJSONStructure !== void 0 ? y.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let M;
    o.indexOf(".") > -1 ? M = o.split(".") : (M = [o, u], d && (Array.isArray(d) ? M.push(...d) : Ye(d) && m ? M.push(...d.split(m)) : M.push(d)));
    const _ = ho(this.data, M);
    return !_ && !u && !d && o.indexOf(".") > -1 && (o = M[0], u = M[1], d = M.slice(2).join(".")), _ || !P || !Ye(d) ? _ : ui(this.data && this.data[o] && this.data[o][u], d, m);
  }
  addResource(o, u, d, y) {
    let m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const P = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator;
    let M = [o, u];
    d && (M = M.concat(P ? d.split(P) : d)), o.indexOf(".") > -1 && (M = o.split("."), y = u, u = M[1]), this.addNamespaces(u), Ws(this.data, M, y), m.silent || this.emit("added", o, u, d, y);
  }
  addResources(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const m in d)
      (Ye(d[m]) || Array.isArray(d[m])) && this.addResource(o, u, m, d[m], {
        silent: !0
      });
    y.silent || this.emit("added", o, u, d);
  }
  addResourceBundle(o, u, d, y, m) {
    let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, M = [o, u];
    o.indexOf(".") > -1 && (M = o.split("."), y = d, d = u, u = M[1]), this.addNamespaces(u);
    let _ = ho(this.data, M) || {};
    P.skipCopy || (d = JSON.parse(JSON.stringify(d))), y ? rc(_, d, m) : _ = {
      ..._,
      ...d
    }, Ws(this.data, M, _), P.silent || this.emit("added", o, u, d);
  }
  removeResourceBundle(o, u) {
    this.hasResourceBundle(o, u) && delete this.data[o][u], this.removeNamespaces(u), this.emit("removed", o, u);
  }
  hasResourceBundle(o, u) {
    return this.getResource(o, u) !== void 0;
  }
  getResourceBundle(o, u) {
    return u || (u = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(o, u)
    } : this.getResource(o, u);
  }
  getDataByLanguage(o) {
    return this.data[o];
  }
  hasLanguageSomeTranslations(o) {
    const u = this.getDataByLanguage(o);
    return !!(u && Object.keys(u) || []).find((y) => u[y] && Object.keys(u[y]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var oc = {
  processors: {},
  addPostProcessor(f) {
    this.processors[f.name] = f;
  },
  handle(f, o, u, d, y) {
    return f.forEach((m) => {
      this.processors[m] && (o = this.processors[m].process(o, u, d, y));
    }), o;
  }
};
const Ns = {};
class wo extends yo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), vd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = u, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Fn.create("translator");
  }
  changeLanguage(o) {
    o && (this.language = o);
  }
  exists(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (o == null)
      return !1;
    const d = this.resolve(o, u);
    return d && d.res !== void 0;
  }
  extractFromKey(o, u) {
    let d = u.nsSeparator !== void 0 ? u.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const y = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let m = u.ns || this.options.defaultNS || [];
    const P = d && o.indexOf(d) > -1, M = !this.options.userDefinedKeySeparator && !u.keySeparator && !this.options.userDefinedNsSeparator && !u.nsSeparator && !Ed(o, d, y);
    if (P && !M) {
      const _ = o.match(this.interpolator.nestingRegexp);
      if (_ && _.length > 0)
        return {
          key: o,
          namespaces: Ye(m) ? [m] : m
        };
      const U = o.split(d);
      (d !== y || d === y && this.options.ns.indexOf(U[0]) > -1) && (m = U.shift()), o = U.join(y);
    }
    return {
      key: o,
      namespaces: Ye(m) ? [m] : m
    };
  }
  translate(o, u, d) {
    if (typeof u != "object" && this.options.overloadTranslationOptionHandler && (u = this.options.overloadTranslationOptionHandler(arguments)), typeof u == "object" && (u = {
      ...u
    }), u || (u = {}), o == null) return "";
    Array.isArray(o) || (o = [String(o)]);
    const y = u.returnDetails !== void 0 ? u.returnDetails : this.options.returnDetails, m = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator, {
      key: P,
      namespaces: M
    } = this.extractFromKey(o[o.length - 1], u), _ = M[M.length - 1], U = u.lng || this.language, q = u.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (U && U.toLowerCase() === "cimode") {
      if (q) {
        const ee = u.nsSeparator || this.options.nsSeparator;
        return y ? {
          res: `${_}${ee}${P}`,
          usedKey: P,
          exactUsedKey: P,
          usedLng: U,
          usedNS: _,
          usedParams: this.getUsedParamsDetails(u)
        } : `${_}${ee}${P}`;
      }
      return y ? {
        res: P,
        usedKey: P,
        exactUsedKey: P,
        usedLng: U,
        usedNS: _,
        usedParams: this.getUsedParamsDetails(u)
      } : P;
    }
    const X = this.resolve(o, u);
    let j = X && X.res;
    const W = X && X.usedKey || P, ke = X && X.exactUsedKey || P, ge = Object.prototype.toString.apply(j), z = ["[object Number]", "[object Function]", "[object RegExp]"], Ie = u.joinArrays !== void 0 ? u.joinArrays : this.options.joinArrays, Z = !this.i18nFormat || this.i18nFormat.handleAsObject, Me = !Ye(j) && typeof j != "boolean" && typeof j != "number";
    if (Z && j && Me && z.indexOf(ge) < 0 && !(Ye(Ie) && Array.isArray(j))) {
      if (!u.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const ee = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(W, j, {
          ...u,
          ns: M
        }) : `key '${P} (${this.language})' returned an object instead of string.`;
        return y ? (X.res = ee, X.usedParams = this.getUsedParamsDetails(u), X) : ee;
      }
      if (m) {
        const ee = Array.isArray(j), Ae = ee ? [] : {}, ie = ee ? ke : W;
        for (const ce in j)
          if (Object.prototype.hasOwnProperty.call(j, ce)) {
            const ft = `${ie}${m}${ce}`;
            Ae[ce] = this.translate(ft, {
              ...u,
              joinArrays: !1,
              ns: M
            }), Ae[ce] === ft && (Ae[ce] = j[ce]);
          }
        j = Ae;
      }
    } else if (Z && Ye(Ie) && Array.isArray(j))
      j = j.join(Ie), j && (j = this.extendTranslation(j, o, u, d));
    else {
      let ee = !1, Ae = !1;
      const ie = u.count !== void 0 && !Ye(u.count), ce = wo.hasDefaultValue(u), ft = ie ? this.pluralResolver.getSuffix(U, u.count, u) : "", it = u.ordinal && ie ? this.pluralResolver.getSuffix(U, u.count, {
        ordinal: !1
      }) : "", qe = ie && !u.ordinal && u.count === 0 && this.pluralResolver.shouldUseIntlApi(), dt = qe && u[`defaultValue${this.options.pluralSeparator}zero`] || u[`defaultValue${ft}`] || u[`defaultValue${it}`] || u.defaultValue;
      !this.isValidLookup(j) && ce && (ee = !0, j = dt), this.isValidLookup(j) || (Ae = !0, j = P);
      const Le = (u.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Ae ? void 0 : j, vt = ce && dt !== j && this.options.updateMissing;
      if (Ae || ee || vt) {
        if (this.logger.log(vt ? "updateKey" : "missingKey", U, _, P, vt ? dt : j), m) {
          const st = this.resolve(P, {
            ...u,
            keySeparator: !1
          });
          st && st.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let De = [];
        const at = this.languageUtils.getFallbackCodes(this.options.fallbackLng, u.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && at && at[0])
          for (let st = 0; st < at.length; st++)
            De.push(at[st]);
        else this.options.saveMissingTo === "all" ? De = this.languageUtils.toResolveHierarchy(u.lng || this.language) : De.push(u.lng || this.language);
        const Dt = (st, Tt, Ve) => {
          const R = ce && Ve !== j ? Ve : Le;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(st, _, Tt, R, vt, u) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(st, _, Tt, R, vt, u), this.emit("missingKey", st, _, Tt, j);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && ie ? De.forEach((st) => {
          const Tt = this.pluralResolver.getSuffixes(st, u);
          qe && u[`defaultValue${this.options.pluralSeparator}zero`] && Tt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Tt.push(`${this.options.pluralSeparator}zero`), Tt.forEach((Ve) => {
            Dt([st], P + Ve, u[`defaultValue${Ve}`] || dt);
          });
        }) : Dt(De, P, dt));
      }
      j = this.extendTranslation(j, o, u, X, d), Ae && j === P && this.options.appendNamespaceToMissingKey && (j = `${_}:${P}`), (Ae || ee) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? j = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${_}:${P}` : P, ee ? j : void 0) : j = this.options.parseMissingKeyHandler(j));
    }
    return y ? (X.res = j, X.usedParams = this.getUsedParamsDetails(u), X) : j;
  }
  extendTranslation(o, u, d, y, m) {
    var P = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      o = this.i18nFormat.parse(o, {
        ...this.options.interpolation.defaultVariables,
        ...d
      }, d.lng || this.language || y.usedLng, y.usedNS, y.usedKey, {
        resolved: y
      });
    else if (!d.skipInterpolation) {
      d.interpolation && this.interpolator.init({
        ...d,
        interpolation: {
          ...this.options.interpolation,
          ...d.interpolation
        }
      });
      const U = Ye(o) && (d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let q;
      if (U) {
        const j = o.match(this.interpolator.nestingRegexp);
        q = j && j.length;
      }
      let X = d.replace && !Ye(d.replace) ? d.replace : d;
      if (this.options.interpolation.defaultVariables && (X = {
        ...this.options.interpolation.defaultVariables,
        ...X
      }), o = this.interpolator.interpolate(o, X, d.lng || this.language || y.usedLng, d), U) {
        const j = o.match(this.interpolator.nestingRegexp), W = j && j.length;
        q < W && (d.nest = !1);
      }
      !d.lng && this.options.compatibilityAPI !== "v1" && y && y.res && (d.lng = this.language || y.usedLng), d.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var j = arguments.length, W = new Array(j), ke = 0; ke < j; ke++)
          W[ke] = arguments[ke];
        return m && m[0] === W[0] && !d.context ? (P.logger.warn(`It seems you are nesting recursively key: ${W[0]} in key: ${u[0]}`), null) : P.translate(...W, u);
      }, d)), d.interpolation && this.interpolator.reset();
    }
    const M = d.postProcess || this.options.postProcess, _ = Ye(M) ? [M] : M;
    return o != null && _ && _.length && d.applyPostProcessor !== !1 && (o = oc.handle(_, o, u, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...y,
        usedParams: this.getUsedParamsDetails(d)
      },
      ...d
    } : d, this)), o;
  }
  resolve(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, y, m, P, M;
    return Ye(o) && (o = [o]), o.forEach((_) => {
      if (this.isValidLookup(d)) return;
      const U = this.extractFromKey(_, u), q = U.key;
      y = q;
      let X = U.namespaces;
      this.options.fallbackNS && (X = X.concat(this.options.fallbackNS));
      const j = u.count !== void 0 && !Ye(u.count), W = j && !u.ordinal && u.count === 0 && this.pluralResolver.shouldUseIntlApi(), ke = u.context !== void 0 && (Ye(u.context) || typeof u.context == "number") && u.context !== "", ge = u.lngs ? u.lngs : this.languageUtils.toResolveHierarchy(u.lng || this.language, u.fallbackLng);
      X.forEach((z) => {
        this.isValidLookup(d) || (M = z, !Ns[`${ge[0]}-${z}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(M) && (Ns[`${ge[0]}-${z}`] = !0, this.logger.warn(`key "${y}" for languages "${ge.join(", ")}" won't get resolved as namespace "${M}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), ge.forEach((Ie) => {
          if (this.isValidLookup(d)) return;
          P = Ie;
          const Z = [q];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(Z, q, Ie, z, u);
          else {
            let ee;
            j && (ee = this.pluralResolver.getSuffix(Ie, u.count, u));
            const Ae = `${this.options.pluralSeparator}zero`, ie = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (j && (Z.push(q + ee), u.ordinal && ee.indexOf(ie) === 0 && Z.push(q + ee.replace(ie, this.options.pluralSeparator)), W && Z.push(q + Ae)), ke) {
              const ce = `${q}${this.options.contextSeparator}${u.context}`;
              Z.push(ce), j && (Z.push(ce + ee), u.ordinal && ee.indexOf(ie) === 0 && Z.push(ce + ee.replace(ie, this.options.pluralSeparator)), W && Z.push(ce + Ae));
            }
          }
          let Me;
          for (; Me = Z.pop(); )
            this.isValidLookup(d) || (m = Me, d = this.getResource(Ie, z, Me, u));
        }));
      });
    }), {
      res: d,
      usedKey: y,
      exactUsedKey: m,
      usedLng: P,
      usedNS: M
    };
  }
  isValidLookup(o) {
    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "");
  }
  getResource(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, u, d, y) : this.resourceStore.getResource(o, u, d, y);
  }
  getUsedParamsDetails() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const u = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], d = o.replace && !Ye(o.replace);
    let y = d ? o.replace : o;
    if (d && typeof o.count < "u" && (y.count = o.count), this.options.interpolation.defaultVariables && (y = {
      ...this.options.interpolation.defaultVariables,
      ...y
    }), !d) {
      y = {
        ...y
      };
      for (const m of u)
        delete y[m];
    }
    return y;
  }
  static hasDefaultValue(o) {
    const u = "defaultValue";
    for (const d in o)
      if (Object.prototype.hasOwnProperty.call(o, d) && u === d.substring(0, u.length) && o[d] !== void 0)
        return !0;
    return !1;
  }
}
const ai = (f) => f.charAt(0).toUpperCase() + f.slice(1);
class Fs {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Fn.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = go(o), !o || o.indexOf("-") < 0) return null;
    const u = o.split("-");
    return u.length === 2 || (u.pop(), u[u.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(u.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = go(o), !o || o.indexOf("-") < 0) return o;
    const u = o.split("-");
    return this.formatLanguageCode(u[0]);
  }
  formatLanguageCode(o) {
    if (Ye(o) && o.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let y = Intl.getCanonicalLocales(o)[0];
          if (y && this.options.lowerCaseLng && (y = y.toLowerCase()), y) return y;
        } catch {
        }
      const u = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let d = o.split("-");
      return this.options.lowerCaseLng ? d = d.map((y) => y.toLowerCase()) : d.length === 2 ? (d[0] = d[0].toLowerCase(), d[1] = d[1].toUpperCase(), u.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ai(d[1].toLowerCase()))) : d.length === 3 && (d[0] = d[0].toLowerCase(), d[1].length === 2 && (d[1] = d[1].toUpperCase()), d[0] !== "sgn" && d[2].length === 2 && (d[2] = d[2].toUpperCase()), u.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ai(d[1].toLowerCase())), u.indexOf(d[2].toLowerCase()) > -1 && (d[2] = ai(d[2].toLowerCase()))), d.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
  }
  isSupportedCode(o) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (o = this.getLanguagePartFromCode(o)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(o) > -1;
  }
  getBestMatchFromCodes(o) {
    if (!o) return null;
    let u;
    return o.forEach((d) => {
      if (u) return;
      const y = this.formatLanguageCode(d);
      (!this.options.supportedLngs || this.isSupportedCode(y)) && (u = y);
    }), !u && this.options.supportedLngs && o.forEach((d) => {
      if (u) return;
      const y = this.getLanguagePartFromCode(d);
      if (this.isSupportedCode(y)) return u = y;
      u = this.options.supportedLngs.find((m) => {
        if (m === y) return m;
        if (!(m.indexOf("-") < 0 && y.indexOf("-") < 0) && (m.indexOf("-") > 0 && y.indexOf("-") < 0 && m.substring(0, m.indexOf("-")) === y || m.indexOf(y) === 0 && y.length > 1))
          return m;
      });
    }), u || (u = this.getFallbackCodes(this.options.fallbackLng)[0]), u;
  }
  getFallbackCodes(o, u) {
    if (!o) return [];
    if (typeof o == "function" && (o = o(u)), Ye(o) && (o = [o]), Array.isArray(o)) return o;
    if (!u) return o.default || [];
    let d = o[u];
    return d || (d = o[this.getScriptPartFromCode(u)]), d || (d = o[this.formatLanguageCode(u)]), d || (d = o[this.getLanguagePartFromCode(u)]), d || (d = o.default), d || [];
  }
  toResolveHierarchy(o, u) {
    const d = this.getFallbackCodes(u || this.options.fallbackLng || [], o), y = [], m = (P) => {
      P && (this.isSupportedCode(P) ? y.push(P) : this.logger.warn(`rejecting language code not found in supportedLngs: ${P}`));
    };
    return Ye(o) && (o.indexOf("-") > -1 || o.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && m(this.formatLanguageCode(o)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && m(this.getScriptPartFromCode(o)), this.options.load !== "currentOnly" && m(this.getLanguagePartFromCode(o))) : Ye(o) && m(this.formatLanguageCode(o)), d.forEach((P) => {
      y.indexOf(P) < 0 && m(this.formatLanguageCode(P));
    }), y;
  }
}
let _d = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Rd = {
  1: (f) => +(f > 1),
  2: (f) => +(f != 1),
  3: (f) => 0,
  4: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f % 10 >= 2 && f % 10 <= 4 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  5: (f) => f == 0 ? 0 : f == 1 ? 1 : f == 2 ? 2 : f % 100 >= 3 && f % 100 <= 10 ? 3 : f % 100 >= 11 ? 4 : 5,
  6: (f) => f == 1 ? 0 : f >= 2 && f <= 4 ? 1 : 2,
  7: (f) => f == 1 ? 0 : f % 10 >= 2 && f % 10 <= 4 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  8: (f) => f == 1 ? 0 : f == 2 ? 1 : f != 8 && f != 11 ? 2 : 3,
  9: (f) => +(f >= 2),
  10: (f) => f == 1 ? 0 : f == 2 ? 1 : f < 7 ? 2 : f < 11 ? 3 : 4,
  11: (f) => f == 1 || f == 11 ? 0 : f == 2 || f == 12 ? 1 : f > 2 && f < 20 ? 2 : 3,
  12: (f) => +(f % 10 != 1 || f % 100 == 11),
  13: (f) => +(f !== 0),
  14: (f) => f == 1 ? 0 : f == 2 ? 1 : f == 3 ? 2 : 3,
  15: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f % 10 >= 2 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  16: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f !== 0 ? 1 : 2,
  17: (f) => f == 1 || f % 10 == 1 && f % 100 != 11 ? 0 : 1,
  18: (f) => f == 0 ? 0 : f == 1 ? 1 : 2,
  19: (f) => f == 1 ? 0 : f == 0 || f % 100 > 1 && f % 100 < 11 ? 1 : f % 100 > 10 && f % 100 < 20 ? 2 : 3,
  20: (f) => f == 1 ? 0 : f == 0 || f % 100 > 0 && f % 100 < 20 ? 1 : 2,
  21: (f) => f % 100 == 1 ? 1 : f % 100 == 2 ? 2 : f % 100 == 3 || f % 100 == 4 ? 3 : 0,
  22: (f) => f == 1 ? 0 : f == 2 ? 1 : (f < 0 || f > 10) && f % 10 == 0 ? 2 : 3
};
const Dd = ["v1", "v2", "v3"], Od = ["v4"], Ls = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Wd = () => {
  const f = {};
  return _d.forEach((o) => {
    o.lngs.forEach((u) => {
      f[u] = {
        numbers: o.nr,
        plurals: Rd[o.fc]
      };
    });
  }), f;
};
class Bd {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = u, this.logger = Fn.create("pluralResolver"), (!this.options.compatibilityJSON || Od.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Wd(), this.pluralRulesCache = {};
  }
  addRule(o, u) {
    this.rules[o] = u;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const d = go(o === "dev" ? "en" : o), y = u.ordinal ? "ordinal" : "cardinal", m = JSON.stringify({
        cleanedCode: d,
        type: y
      });
      if (m in this.pluralRulesCache)
        return this.pluralRulesCache[m];
      let P;
      try {
        P = new Intl.PluralRules(d, {
          type: y
        });
      } catch {
        if (!o.match(/-|_/)) return;
        const _ = this.languageUtils.getLanguagePartFromCode(o);
        P = this.getRule(_, u);
      }
      return this.pluralRulesCache[m] = P, P;
    }
    return this.rules[o] || this.rules[this.languageUtils.getLanguagePartFromCode(o)];
  }
  needsPlural(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, u);
    return this.shouldUseIntlApi() ? d && d.resolvedOptions().pluralCategories.length > 1 : d && d.numbers.length > 1;
  }
  getPluralFormsOfKey(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(o, d).map((y) => `${u}${y}`);
  }
  getSuffixes(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, u);
    return d ? this.shouldUseIntlApi() ? d.resolvedOptions().pluralCategories.sort((y, m) => Ls[y] - Ls[m]).map((y) => `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${y}`) : d.numbers.map((y) => this.getSuffix(o, y, u)) : [];
  }
  getSuffix(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const y = this.getRule(o, d);
    return y ? this.shouldUseIntlApi() ? `${this.options.prepend}${d.ordinal ? `ordinal${this.options.prepend}` : ""}${y.select(u)}` : this.getSuffixRetroCompatible(y, u) : (this.logger.warn(`no plural rule found for: ${o}`), "");
  }
  getSuffixRetroCompatible(o, u) {
    const d = o.noAbs ? o.plurals(u) : o.plurals(Math.abs(u));
    let y = o.numbers[d];
    this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 && (y === 2 ? y = "plural" : y === 1 && (y = ""));
    const m = () => this.options.prepend && y.toString() ? this.options.prepend + y.toString() : y.toString();
    return this.options.compatibilityJSON === "v1" ? y === 1 ? "" : typeof y == "number" ? `_plural_${y.toString()}` : m() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 ? m() : this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
  }
  shouldUseIntlApi() {
    return !Dd.includes(this.options.compatibilityJSON);
  }
}
const Vs = function(f, o, u) {
  let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = Pd(f, o, u);
  return !m && y && Ye(u) && (m = ui(f, u, d), m === void 0 && (m = ui(o, u, d))), m;
}, ri = (f) => f.replace(/\$/g, "$$$$");
class Nd {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Fn.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((u) => u), this.init(o);
  }
  init() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    o.interpolation || (o.interpolation = {
      escapeValue: !0
    });
    const {
      escape: u,
      escapeValue: d,
      useRawValueToEscape: y,
      prefix: m,
      prefixEscaped: P,
      suffix: M,
      suffixEscaped: _,
      formatSeparator: U,
      unescapeSuffix: q,
      unescapePrefix: X,
      nestingPrefix: j,
      nestingPrefixEscaped: W,
      nestingSuffix: ke,
      nestingSuffixEscaped: ge,
      nestingOptionsSeparator: z,
      maxReplaces: Ie,
      alwaysFormat: Z
    } = o.interpolation;
    this.escape = u !== void 0 ? u : Cd, this.escapeValue = d !== void 0 ? d : !0, this.useRawValueToEscape = y !== void 0 ? y : !1, this.prefix = m ? sr(m) : P || "{{", this.suffix = M ? sr(M) : _ || "}}", this.formatSeparator = U || ",", this.unescapePrefix = q ? "" : X || "-", this.unescapeSuffix = this.unescapePrefix ? "" : q || "", this.nestingPrefix = j ? sr(j) : W || sr("$t("), this.nestingSuffix = ke ? sr(ke) : ge || sr(")"), this.nestingOptionsSeparator = z || ",", this.maxReplaces = Ie || 1e3, this.alwaysFormat = Z !== void 0 ? Z : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (u, d) => u && u.source === d ? (u.lastIndex = 0, u) : new RegExp(d, "g");
    this.regexp = o(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = o(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = o(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(o, u, d, y) {
    let m, P, M;
    const _ = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, U = (W) => {
      if (W.indexOf(this.formatSeparator) < 0) {
        const Ie = Vs(u, _, W, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(Ie, void 0, d, {
          ...y,
          ...u,
          interpolationkey: W
        }) : Ie;
      }
      const ke = W.split(this.formatSeparator), ge = ke.shift().trim(), z = ke.join(this.formatSeparator).trim();
      return this.format(Vs(u, _, ge, this.options.keySeparator, this.options.ignoreJSONStructure), z, d, {
        ...y,
        ...u,
        interpolationkey: ge
      });
    };
    this.resetRegExp();
    const q = y && y.missingInterpolationHandler || this.options.missingInterpolationHandler, X = y && y.interpolation && y.interpolation.skipOnVariables !== void 0 ? y.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (W) => ri(W)
    }, {
      regex: this.regexp,
      safeValue: (W) => this.escapeValue ? ri(this.escape(W)) : ri(W)
    }].forEach((W) => {
      for (M = 0; m = W.regex.exec(o); ) {
        const ke = m[1].trim();
        if (P = U(ke), P === void 0)
          if (typeof q == "function") {
            const z = q(o, m, y);
            P = Ye(z) ? z : "";
          } else if (y && Object.prototype.hasOwnProperty.call(y, ke))
            P = "";
          else if (X) {
            P = m[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${ke} for interpolating ${o}`), P = "";
        else !Ye(P) && !this.useRawValueToEscape && (P = Rs(P));
        const ge = W.safeValue(P);
        if (o = o.replace(m[0], ge), X ? (W.regex.lastIndex += P.length, W.regex.lastIndex -= m[0].length) : W.regex.lastIndex = 0, M++, M >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y, m, P;
    const M = (_, U) => {
      const q = this.nestingOptionsSeparator;
      if (_.indexOf(q) < 0) return _;
      const X = _.split(new RegExp(`${q}[ ]*{`));
      let j = `{${X[1]}`;
      _ = X[0], j = this.interpolate(j, P);
      const W = j.match(/'/g), ke = j.match(/"/g);
      (W && W.length % 2 === 0 && !ke || ke.length % 2 !== 0) && (j = j.replace(/'/g, '"'));
      try {
        P = JSON.parse(j), U && (P = {
          ...U,
          ...P
        });
      } catch (ge) {
        return this.logger.warn(`failed parsing options string in nesting for key ${_}`, ge), `${_}${q}${j}`;
      }
      return P.defaultValue && P.defaultValue.indexOf(this.prefix) > -1 && delete P.defaultValue, _;
    };
    for (; y = this.nestingRegexp.exec(o); ) {
      let _ = [];
      P = {
        ...d
      }, P = P.replace && !Ye(P.replace) ? P.replace : P, P.applyPostProcessor = !1, delete P.defaultValue;
      let U = !1;
      if (y[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(y[1])) {
        const q = y[1].split(this.formatSeparator).map((X) => X.trim());
        y[1] = q.shift(), _ = q, U = !0;
      }
      if (m = u(M.call(this, y[1].trim(), P), P), m && y[0] === o && !Ye(m)) return m;
      Ye(m) || (m = Rs(m)), m || (this.logger.warn(`missed to resolve ${y[1]} for nesting ${o}`), m = ""), U && (m = _.reduce((q, X) => this.format(q, X, d.lng, {
        ...d,
        interpolationkey: y[1].trim()
      }), m.trim())), o = o.replace(y[0], m), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
const Fd = (f) => {
  let o = f.toLowerCase().trim();
  const u = {};
  if (f.indexOf("(") > -1) {
    const d = f.split("(");
    o = d[0].toLowerCase().trim();
    const y = d[1].substring(0, d[1].length - 1);
    o === "currency" && y.indexOf(":") < 0 ? u.currency || (u.currency = y.trim()) : o === "relativetime" && y.indexOf(":") < 0 ? u.range || (u.range = y.trim()) : y.split(";").forEach((P) => {
      if (P) {
        const [M, ..._] = P.split(":"), U = _.join(":").trim().replace(/^'+|'+$/g, ""), q = M.trim();
        u[q] || (u[q] = U), U === "false" && (u[q] = !1), U === "true" && (u[q] = !0), isNaN(U) || (u[q] = parseInt(U, 10));
      }
    });
  }
  return {
    formatName: o,
    formatOptions: u
  };
}, cr = (f) => {
  const o = {};
  return (u, d, y) => {
    let m = y;
    y && y.interpolationkey && y.formatParams && y.formatParams[y.interpolationkey] && y[y.interpolationkey] && (m = {
      ...m,
      [y.interpolationkey]: void 0
    });
    const P = d + JSON.stringify(m);
    let M = o[P];
    return M || (M = f(go(d), y), o[P] = M), M(u);
  };
};
class Ld {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Fn.create("formatter"), this.options = o, this.formats = {
      number: cr((u, d) => {
        const y = new Intl.NumberFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      }),
      currency: cr((u, d) => {
        const y = new Intl.NumberFormat(u, {
          ...d,
          style: "currency"
        });
        return (m) => y.format(m);
      }),
      datetime: cr((u, d) => {
        const y = new Intl.DateTimeFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      }),
      relativetime: cr((u, d) => {
        const y = new Intl.RelativeTimeFormat(u, {
          ...d
        });
        return (m) => y.format(m, d.range || "day");
      }),
      list: cr((u, d) => {
        const y = new Intl.ListFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      })
    }, this.init(o);
  }
  init(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = u.interpolation.formatSeparator || ",";
  }
  add(o, u) {
    this.formats[o.toLowerCase().trim()] = u;
  }
  addCached(o, u) {
    this.formats[o.toLowerCase().trim()] = cr(u);
  }
  format(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = u.split(this.formatSeparator);
    if (m.length > 1 && m[0].indexOf("(") > 1 && m[0].indexOf(")") < 0 && m.find((M) => M.indexOf(")") > -1)) {
      const M = m.findIndex((_) => _.indexOf(")") > -1);
      m[0] = [m[0], ...m.splice(1, M)].join(this.formatSeparator);
    }
    return m.reduce((M, _) => {
      const {
        formatName: U,
        formatOptions: q
      } = Fd(_);
      if (this.formats[U]) {
        let X = M;
        try {
          const j = y && y.formatParams && y.formatParams[y.interpolationkey] || {}, W = j.locale || j.lng || y.locale || y.lng || d;
          X = this.formats[U](M, W, {
            ...q,
            ...y,
            ...j
          });
        } catch (j) {
          this.logger.warn(j);
        }
        return X;
      } else
        this.logger.warn(`there was no format function for ${U}`);
      return M;
    }, o);
  }
}
const Vd = (f, o) => {
  f.pending[o] !== void 0 && (delete f.pending[o], f.pendingCount--);
};
class Ud extends yo {
  constructor(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = u, this.services = d, this.languageUtils = d.languageUtils, this.options = y, this.logger = Fn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = y.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = y.maxRetries >= 0 ? y.maxRetries : 5, this.retryTimeout = y.retryTimeout >= 1 ? y.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(d, y.backend, y);
  }
  queueLoad(o, u, d, y) {
    const m = {}, P = {}, M = {}, _ = {};
    return o.forEach((U) => {
      let q = !0;
      u.forEach((X) => {
        const j = `${U}|${X}`;
        !d.reload && this.store.hasResourceBundle(U, X) ? this.state[j] = 2 : this.state[j] < 0 || (this.state[j] === 1 ? P[j] === void 0 && (P[j] = !0) : (this.state[j] = 1, q = !1, P[j] === void 0 && (P[j] = !0), m[j] === void 0 && (m[j] = !0), _[X] === void 0 && (_[X] = !0)));
      }), q || (M[U] = !0);
    }), (Object.keys(m).length || Object.keys(P).length) && this.queue.push({
      pending: P,
      pendingCount: Object.keys(P).length,
      loaded: {},
      errors: [],
      callback: y
    }), {
      toLoad: Object.keys(m),
      pending: Object.keys(P),
      toLoadLanguages: Object.keys(M),
      toLoadNamespaces: Object.keys(_)
    };
  }
  loaded(o, u, d) {
    const y = o.split("|"), m = y[0], P = y[1];
    u && this.emit("failedLoading", m, P, u), !u && d && this.store.addResourceBundle(m, P, d, void 0, void 0, {
      skipCopy: !0
    }), this.state[o] = u ? -1 : 2, u && d && (this.state[o] = 0);
    const M = {};
    this.queue.forEach((_) => {
      Sd(_.loaded, [m], P), Vd(_, o), u && _.errors.push(u), _.pendingCount === 0 && !_.done && (Object.keys(_.loaded).forEach((U) => {
        M[U] || (M[U] = {});
        const q = _.loaded[U];
        q.length && q.forEach((X) => {
          M[U][X] === void 0 && (M[U][X] = !0);
        });
      }), _.done = !0, _.errors.length ? _.callback(_.errors) : _.callback());
    }), this.emit("loaded", M), this.queue = this.queue.filter((_) => !_.done);
  }
  read(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, P = arguments.length > 5 ? arguments[5] : void 0;
    if (!o.length) return P(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: o,
        ns: u,
        fcName: d,
        tried: y,
        wait: m,
        callback: P
      });
      return;
    }
    this.readingCalls++;
    const M = (U, q) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const X = this.waitingReads.shift();
        this.read(X.lng, X.ns, X.fcName, X.tried, X.wait, X.callback);
      }
      if (U && q && y < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, u, d, y + 1, m * 2, P);
        }, m);
        return;
      }
      P(U, q);
    }, _ = this.backend[d].bind(this.backend);
    if (_.length === 2) {
      try {
        const U = _(o, u);
        U && typeof U.then == "function" ? U.then((q) => M(null, q)).catch(M) : M(null, U);
      } catch (U) {
        M(U);
      }
      return;
    }
    return _(o, u, M);
  }
  prepareLoading(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), y && y();
    Ye(o) && (o = this.languageUtils.toResolveHierarchy(o)), Ye(u) && (u = [u]);
    const m = this.queueLoad(o, u, d, y);
    if (!m.toLoad.length)
      return m.pending.length || y(), null;
    m.toLoad.forEach((P) => {
      this.loadOne(P);
    });
  }
  load(o, u, d) {
    this.prepareLoading(o, u, {}, d);
  }
  reload(o, u, d) {
    this.prepareLoading(o, u, {
      reload: !0
    }, d);
  }
  loadOne(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const d = o.split("|"), y = d[0], m = d[1];
    this.read(y, m, "read", void 0, void 0, (P, M) => {
      P && this.logger.warn(`${u}loading namespace ${m} for language ${y} failed`, P), !P && M && this.logger.log(`${u}loaded namespace ${m} for language ${y}`, M), this.loaded(o, P, M);
    });
  }
  saveMissing(o, u, d, y, m) {
    let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, M = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(u)) {
      this.logger.warn(`did not save key "${d}" as the namespace "${u}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(d == null || d === "")) {
      if (this.backend && this.backend.create) {
        const _ = {
          ...P,
          isUpdate: m
        }, U = this.backend.create.bind(this.backend);
        if (U.length < 6)
          try {
            let q;
            U.length === 5 ? q = U(o, u, d, y, _) : q = U(o, u, d, y), q && typeof q.then == "function" ? q.then((X) => M(null, X)).catch(M) : M(null, q);
          } catch (q) {
            M(q);
          }
        else
          U(o, u, d, y, M, _);
      }
      !o || !o[0] || this.store.addResource(o[0], u, d, y);
    }
  }
}
const Us = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (f) => {
    let o = {};
    if (typeof f[1] == "object" && (o = f[1]), Ye(f[1]) && (o.defaultValue = f[1]), Ye(f[2]) && (o.tDescription = f[2]), typeof f[2] == "object" || typeof f[3] == "object") {
      const u = f[3] || f[2];
      Object.keys(u).forEach((d) => {
        o[d] = u[d];
      });
    }
    return o;
  },
  interpolation: {
    escapeValue: !0,
    format: (f) => f,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), js = (f) => (Ye(f.ns) && (f.ns = [f.ns]), Ye(f.fallbackLng) && (f.fallbackLng = [f.fallbackLng]), Ye(f.fallbackNS) && (f.fallbackNS = [f.fallbackNS]), f.supportedLngs && f.supportedLngs.indexOf("cimode") < 0 && (f.supportedLngs = f.supportedLngs.concat(["cimode"])), f), lo = () => {
}, jd = (f) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(f)).forEach((u) => {
    typeof f[u] == "function" && (f[u] = f[u].bind(f));
  });
};
class Vr extends yo {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = js(o), this.services = {}, this.logger = Fn, this.modules = {
      external: []
    }, jd(this), u && !this.isInitialized && !o.isClone) {
      if (!this.options.initImmediate)
        return this.init(o, u), this;
      setTimeout(() => {
        this.init(o, u);
      }, 0);
    }
  }
  init() {
    var o = this;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof u == "function" && (d = u, u = {}), !u.defaultNS && u.defaultNS !== !1 && u.ns && (Ye(u.ns) ? u.defaultNS = u.ns : u.ns.indexOf("translation") < 0 && (u.defaultNS = u.ns[0]));
    const y = Us();
    this.options = {
      ...y,
      ...this.options,
      ...js(u)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...y.interpolation,
      ...this.options.interpolation
    }), u.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = u.keySeparator), u.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = u.nsSeparator);
    const m = (q) => q ? typeof q == "function" ? new q() : q : null;
    if (!this.options.isClone) {
      this.modules.logger ? Fn.init(m(this.modules.logger), this.options) : Fn.init(null, this.options);
      let q;
      this.modules.formatter ? q = this.modules.formatter : typeof Intl < "u" && (q = Ld);
      const X = new Fs(this.options);
      this.store = new Bs(this.options.resources, this.options);
      const j = this.services;
      j.logger = Fn, j.resourceStore = this.store, j.languageUtils = X, j.pluralResolver = new Bd(X, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), q && (!this.options.interpolation.format || this.options.interpolation.format === y.interpolation.format) && (j.formatter = m(q), j.formatter.init(j, this.options), this.options.interpolation.format = j.formatter.format.bind(j.formatter)), j.interpolator = new Nd(this.options), j.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, j.backendConnector = new Ud(m(this.modules.backend), j.resourceStore, j, this.options), j.backendConnector.on("*", function(W) {
        for (var ke = arguments.length, ge = new Array(ke > 1 ? ke - 1 : 0), z = 1; z < ke; z++)
          ge[z - 1] = arguments[z];
        o.emit(W, ...ge);
      }), this.modules.languageDetector && (j.languageDetector = m(this.modules.languageDetector), j.languageDetector.init && j.languageDetector.init(j, this.options.detection, this.options)), this.modules.i18nFormat && (j.i18nFormat = m(this.modules.i18nFormat), j.i18nFormat.init && j.i18nFormat.init(this)), this.translator = new wo(this.services, this.options), this.translator.on("*", function(W) {
        for (var ke = arguments.length, ge = new Array(ke > 1 ? ke - 1 : 0), z = 1; z < ke; z++)
          ge[z - 1] = arguments[z];
        o.emit(W, ...ge);
      }), this.modules.external.forEach((W) => {
        W.init && W.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, d || (d = lo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const q = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      q.length > 0 && q[0] !== "dev" && (this.options.lng = q[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((q) => {
      this[q] = function() {
        return o.store[q](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((q) => {
      this[q] = function() {
        return o.store[q](...arguments), o;
      };
    });
    const _ = Br(), U = () => {
      const q = (X, j) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), _.resolve(j), d(X, j);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return q(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, q);
    };
    return this.options.resources || !this.options.initImmediate ? U() : setTimeout(U, 0), _;
  }
  loadResources(o) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const y = Ye(o) ? o : this.language;
    if (typeof o == "function" && (d = o), !this.options.resources || this.options.partialBundledLanguages) {
      if (y && y.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return d();
      const m = [], P = (M) => {
        if (!M || M === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(M).forEach((U) => {
          U !== "cimode" && m.indexOf(U) < 0 && m.push(U);
        });
      };
      y ? P(y) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((_) => P(_)), this.options.preload && this.options.preload.forEach((M) => P(M)), this.services.backendConnector.load(m, this.options.ns, (M) => {
        !M && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), d(M);
      });
    } else
      d(null);
  }
  reloadResources(o, u, d) {
    const y = Br();
    return typeof o == "function" && (d = o, o = void 0), typeof u == "function" && (d = u, u = void 0), o || (o = this.languages), u || (u = this.options.ns), d || (d = lo), this.services.backendConnector.reload(o, u, (m) => {
      y.resolve(), d(m);
    }), y;
  }
  use(o) {
    if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && oc.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this;
  }
  setResolvedLanguage(o) {
    if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
      for (let u = 0; u < this.languages.length; u++) {
        const d = this.languages[u];
        if (!(["cimode", "dev"].indexOf(d) > -1) && this.store.hasLanguageSomeTranslations(d)) {
          this.resolvedLanguage = d;
          break;
        }
      }
  }
  changeLanguage(o, u) {
    var d = this;
    this.isLanguageChangingTo = o;
    const y = Br();
    this.emit("languageChanging", o);
    const m = (_) => {
      this.language = _, this.languages = this.services.languageUtils.toResolveHierarchy(_), this.resolvedLanguage = void 0, this.setResolvedLanguage(_);
    }, P = (_, U) => {
      U ? (m(U), this.translator.changeLanguage(U), this.isLanguageChangingTo = void 0, this.emit("languageChanged", U), this.logger.log("languageChanged", U)) : this.isLanguageChangingTo = void 0, y.resolve(function() {
        return d.t(...arguments);
      }), u && u(_, function() {
        return d.t(...arguments);
      });
    }, M = (_) => {
      !o && !_ && this.services.languageDetector && (_ = []);
      const U = Ye(_) ? _ : this.services.languageUtils.getBestMatchFromCodes(_);
      U && (this.language || m(U), this.translator.language || this.translator.changeLanguage(U), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(U)), this.loadResources(U, (q) => {
        P(q, U);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? M(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(M) : this.services.languageDetector.detect(M) : M(o), y;
  }
  getFixedT(o, u, d) {
    var y = this;
    const m = function(P, M) {
      let _;
      if (typeof M != "object") {
        for (var U = arguments.length, q = new Array(U > 2 ? U - 2 : 0), X = 2; X < U; X++)
          q[X - 2] = arguments[X];
        _ = y.options.overloadTranslationOptionHandler([P, M].concat(q));
      } else
        _ = {
          ...M
        };
      _.lng = _.lng || m.lng, _.lngs = _.lngs || m.lngs, _.ns = _.ns || m.ns, _.keyPrefix !== "" && (_.keyPrefix = _.keyPrefix || d || m.keyPrefix);
      const j = y.options.keySeparator || ".";
      let W;
      return _.keyPrefix && Array.isArray(P) ? W = P.map((ke) => `${_.keyPrefix}${j}${ke}`) : W = _.keyPrefix ? `${_.keyPrefix}${j}${P}` : P, y.t(W, _);
    };
    return Ye(o) ? m.lng = o : m.lngs = o, m.ns = u, m.keyPrefix = d, m;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(o) {
    this.options.defaultNS = o;
  }
  hasLoadedNamespace(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const d = u.lng || this.resolvedLanguage || this.languages[0], y = this.options ? this.options.fallbackLng : !1, m = this.languages[this.languages.length - 1];
    if (d.toLowerCase() === "cimode") return !0;
    const P = (M, _) => {
      const U = this.services.backendConnector.state[`${M}|${_}`];
      return U === -1 || U === 0 || U === 2;
    };
    if (u.precheck) {
      const M = u.precheck(this, P);
      if (M !== void 0) return M;
    }
    return !!(this.hasResourceBundle(d, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || P(d, o) && (!y || P(m, o)));
  }
  loadNamespaces(o, u) {
    const d = Br();
    return this.options.ns ? (Ye(o) && (o = [o]), o.forEach((y) => {
      this.options.ns.indexOf(y) < 0 && this.options.ns.push(y);
    }), this.loadResources((y) => {
      d.resolve(), u && u(y);
    }), d) : (u && u(), Promise.resolve());
  }
  loadLanguages(o, u) {
    const d = Br();
    Ye(o) && (o = [o]);
    const y = this.options.preload || [], m = o.filter((P) => y.indexOf(P) < 0 && this.services.languageUtils.isSupportedCode(P));
    return m.length ? (this.options.preload = y.concat(m), this.loadResources((P) => {
      d.resolve(), u && u(P);
    }), d) : (u && u(), Promise.resolve());
  }
  dir(o) {
    if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o) return "rtl";
    const u = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], d = this.services && this.services.languageUtils || new Fs(Us());
    return u.indexOf(d.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    return new Vr(o, u);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const d = o.forkResourceStore;
    d && delete o.forkResourceStore;
    const y = {
      ...this.options,
      ...o,
      isClone: !0
    }, m = new Vr(y);
    return (o.debug !== void 0 || o.prefix !== void 0) && (m.logger = m.logger.clone(o)), ["store", "services", "language"].forEach((M) => {
      m[M] = this[M];
    }), m.services = {
      ...this.services
    }, m.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, d && (m.store = new Bs(this.store.data, y), m.services.resourceStore = m.store), m.translator = new wo(m.services, y), m.translator.on("*", function(M) {
      for (var _ = arguments.length, U = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
        U[q - 1] = arguments[q];
      m.emit(M, ...U);
    }), m.init(y, u), m.translator.options = y, m.translator.backendConnector.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, m;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ic = Vr.createInstance();
ic.createInstance = Vr.createInstance;
var Kd = ic;
(() => {
  var f = { 847: (y, m) => {
    var P = { 2346: function(j, W, ke) {
      var ge = this && this.__importDefault || function(Z) {
        return Z && Z.__esModule ? Z : { default: Z };
      };
      Object.defineProperty(W, "__esModule", { value: !0 }), W.getMostReadable = W.darkenColor = W.lightenColor = void 0;
      const z = ge(ke(6535));
      W.lightenColor = (Z, Me) => Ie(Z, "lighten", Me), W.darkenColor = (Z, Me) => Ie(Z, "darken", Me);
      const Ie = (Z, Me, ee) => {
        if (ee && (ee < 0 || ee > 100)) throw new Error(`${ee} must be a number between 0 and 100`);
        return (0, z.default)(Z)[Me](ee).toString();
      };
      W.getMostReadable = (Z, Me) => z.default.mostReadable(Z, Me).toHexString();
    }, 2317: (j, W) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.IconSize = W.Transition = W.LineHeight = W.FontWeight = W.FontSize = W.FontFamily = W.Shadow = W.Radius = W.UnitPx = W.Unit = W.SizeName = W.Size = W.Color = void 0, W.Color = { white: "#FFFFFF", lightGray1: "#FAFBFE", lightGray2: "#F3F5F8", lightGray3: "#ECEEF1", lightGray4: "#DDDFE4", lightGray5: "#C9CBD2", neutralGray: "#7D808A", neutralGray80: "rgba(125,128,138,0.8)", silverGray: "#C0C1C2", darkGray1: "#53565F", darkGray2: "#383A40", darkGray3: "#2F3136", darkGray4: "#24262B", darkGray5: "#1E1F23", darkGray6: "#111214", openFinDarkest: "#3D39CD", openFinDarker: "#4642E0", openFin: "#504CFF", openFinLight: "#5254FB", openFinLighter: "#5C5EFE", openFinLightest: "#6864FF", functional1: "#207735", functional2: "#46C8F1", functional3: "#0A76D3", functional4: "#6CADE5", functional5: "#0A76D3", functional6: "#882BFE", functional7: "#F31818", functional8: "#C93400", functional9: "#FF5E60", functional10: "#F48F00", purple: "#8C61FF", lightblue: "#36C3FE", aqua: "#00CC88", yellow: "#FFEB00", salmon: "#FF8C4C", pink: "#FF5E60", lightpink: "#FF8FB8", white00: "rgba(255,255,255,0.0)", white10: "rgba(255,255,255,0.1)", white20: "rgba(255,255,255,0.2)", white30: "rgba(255,255,255,0.3)", white40: "rgba(255,255,255,0.4)", white50: "rgba(255,255,255,0.5)", white60: "rgba(255,255,255,0.6)", white70: "rgba(255,255,255,0.7)", white80: "rgba(255,255,255,0.8)", white90: "rgba(255,255,255,0.9)", black00: "rgba(0,0,0,0.0)", black10: "rgba(0,0,0,0.1)", black20: "rgba(0,0,0,0.2)", black30: "rgba(0,0,0,0.3)", black40: "rgba(0,0,0,0.4)", black50: "rgba(0,0,0,0.5)", black60: "rgba(0,0,0,0.6)", black70: "rgba(0,0,0,0.7)", black80: "rgba(0,0,0,0.8)", black90: "rgba(0,0,0,0.9)", transparent: "transparent", openFinActive: "#4642FF", openFinHover: "#6965FF", lightGray4Active: "#D7DADF", lightGray4Hover: "#EBECEF", darkGray2Active: "#33353B", darkGray2Hover: "#44464E" }, W.Size = { xsmall: "xsmall", small: "small", base: "base", large: "large", xlarge: "xlarge", xxlarge: "xxlarge", xxxlarge: "xxxlarge", xxxxlarge: "xxxxlarge" }, W.SizeName = { [W.Size.xsmall]: "Extra Small", [W.Size.small]: "Small", [W.Size.base]: "Base", [W.Size.large]: "Large", [W.Size.xlarge]: "Extra Large", [W.Size.xxlarge]: "2X Large", [W.Size.xxxlarge]: "3X Large", [W.Size.xxxxlarge]: "4X Large" }, W.Unit = { [W.Size.xsmall]: 4, [W.Size.small]: 8, [W.Size.base]: 12, [W.Size.large]: 16, [W.Size.xlarge]: 20, [W.Size.xxlarge]: 24, [W.Size.xxxlarge]: 32, [W.Size.xxxxlarge]: 48 }, W.UnitPx = { [W.Size.xsmall]: "4px", [W.Size.small]: "8px", [W.Size.base]: "12px", [W.Size.large]: "16px", [W.Size.xlarge]: "20px", [W.Size.xxlarge]: "24px", [W.Size.xxxlarge]: "32px", [W.Size.xxxxlarge]: "48px" }, W.Radius = { [W.Size.xsmall]: "2px", [W.Size.small]: "4px", [W.Size.base]: "8px", [W.Size.large]: "24px", pill: "100vh", round: "50%", none: "0" }, W.Shadow = { [W.Size.base]: "0 4px 4px rgba(0, 0, 0, 0.25)" }, W.FontFamily = ["Inter", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"].join(","), W.FontSize = { [W.Size.xsmall]: "8px", [W.Size.small]: "10px", [W.Size.base]: "12px", [W.Size.large]: "14px", [W.Size.xlarge]: "16px", [W.Size.xxlarge]: "18px", [W.Size.xxxlarge]: "20px", [W.Size.xxxxlarge]: "40px" }, W.FontWeight = { normal: 400, bold: 600 }, W.LineHeight = { ui: 1, heading: 1.2, text: 1.5 }, W.Transition = { base: "200ms cubic-bezier(0.16, 1, 0.3, 1)", none: "0ms" }, W.IconSize = { [W.Size.xsmall]: W.UnitPx.small, [W.Size.small]: W.UnitPx.base, [W.Size.base]: "15px", [W.Size.large]: W.UnitPx.xlarge, [W.Size.xlarge]: W.UnitPx.xxlarge, [W.Size.xxlarge]: W.UnitPx.xxxlarge, [W.Size.xxxlarge]: W.UnitPx.xxxxlarge };
    }, 6893: (j, W, ke) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.createTheme = void 0;
      const ge = ke(2317), z = ke(2346), Ie = ke(5939), Z = { fontFamily: ge.FontFamily, fontSize: ge.FontSize, fontWeight: ge.FontWeight, lineHeight: ge.LineHeight, iconSize: ge.IconSize, radius: ge.Radius, shadow: ge.Shadow, transition: ge.Transition, unit: ge.Unit, px: ge.UnitPx }, Me = (ee, Ae) => ({ [`${ee}Active`]: (0, z.darkenColor)(Ae, 2), [`${ee}Hover`]: (0, z.lightenColor)(Ae, 5), [`${ee}Focused`]: (0, z.getMostReadable)(Ae, [ge.Color.white, ge.Color.darkGray5]), [`${ee}Text`]: (0, z.getMostReadable)(Ae, [ge.Color.white, ge.Color.darkGray5]) });
      W.createTheme = (ee) => Object.assign(Object.assign({}, Z), { palette: Object.assign(Object.assign(Object.assign({}, Me(Ie.Palette.brandPrimary, ee.brandPrimary)), Me(Ie.Palette.brandSecondary, ee.brandSecondary)), ee) });
    }, 5939: (j, W) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.Palette = void 0, W.Palette = { background1: "background1", background2: "background2", background3: "background3", background4: "background4", background5: "background5", background6: "background6", brandPrimary: "brandPrimary", brandSecondary: "brandSecondary", brandPrimaryActive: "brandPrimaryActive", brandPrimaryHover: "brandPrimaryHover", brandPrimaryFocused: "brandPrimaryFocused", brandPrimaryText: "brandPrimaryText", brandSecondaryActive: "brandSecondaryActive", brandSecondaryHover: "brandSecondaryHover", brandSecondaryFocused: "brandSecondaryFocused", brandSecondaryText: "brandSecondaryText", inputBackground: "inputBackground", inputColor: "inputColor", inputPlaceholder: "inputPlaceholder", inputDisabled: "inputDisabled", inputFocused: "inputFocused", inputBorder: "inputBorder", statusSuccess: "statusSuccess", statusWarning: "statusWarning", statusCritical: "statusCritical", statusActive: "statusActive", textDefault: "textDefault", textHelp: "textHelp", textInactive: "textInactive", borderNeutral: "borderNeutral", contentBackground1: "contentBackground1", contentBackground2: "contentBackground2", contentBackground3: "contentBackground3", contentBackground4: "contentBackground4", contentBackground5: "contentBackground5", linkDefault: "linkDefault", linkHover: "linkHover" };
    }, 6535: function(j) {
      j.exports = function() {
        function W(I) {
          return (W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(G) {
            return typeof G;
          } : function(G) {
            return G && typeof Symbol == "function" && G.constructor === Symbol && G !== Symbol.prototype ? "symbol" : typeof G;
          })(I);
        }
        var ke = /^\s+/, ge = /\s+$/;
        function z(I, G) {
          if (G = G || {}, (I = I || "") instanceof z) return I;
          if (!(this instanceof z)) return new z(I, G);
          var $ = function(te) {
            var Be, je, Ne, wt = { r: 0, g: 0, b: 0 }, ht = 1, Re = null, un = null, ln = null, dn = !1, Kt = !1;
            return typeof te == "string" && (te = function(rt) {
              rt = rt.replace(ke, "").replace(ge, "").toLowerCase();
              var Pe, gt = !1;
              if (Dt[rt]) rt = Dt[rt], gt = !0;
              else if (rt == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              return (Pe = Ot.rgb.exec(rt)) ? { r: Pe[1], g: Pe[2], b: Pe[3] } : (Pe = Ot.rgba.exec(rt)) ? { r: Pe[1], g: Pe[2], b: Pe[3], a: Pe[4] } : (Pe = Ot.hsl.exec(rt)) ? { h: Pe[1], s: Pe[2], l: Pe[3] } : (Pe = Ot.hsla.exec(rt)) ? { h: Pe[1], s: Pe[2], l: Pe[3], a: Pe[4] } : (Pe = Ot.hsv.exec(rt)) ? { h: Pe[1], s: Pe[2], v: Pe[3] } : (Pe = Ot.hsva.exec(rt)) ? { h: Pe[1], s: Pe[2], v: Pe[3], a: Pe[4] } : (Pe = Ot.hex8.exec(rt)) ? { r: se(Pe[1]), g: se(Pe[2]), b: se(Pe[3]), a: tt(Pe[4]), format: gt ? "name" : "hex8" } : (Pe = Ot.hex6.exec(rt)) ? { r: se(Pe[1]), g: se(Pe[2]), b: se(Pe[3]), format: gt ? "name" : "hex" } : (Pe = Ot.hex4.exec(rt)) ? { r: se(Pe[1] + "" + Pe[1]), g: se(Pe[2] + "" + Pe[2]), b: se(Pe[3] + "" + Pe[3]), a: tt(Pe[4] + "" + Pe[4]), format: gt ? "name" : "hex8" } : !!(Pe = Ot.hex3.exec(rt)) && { r: se(Pe[1] + "" + Pe[1]), g: se(Pe[2] + "" + Pe[2]), b: se(Pe[3] + "" + Pe[3]), format: gt ? "name" : "hex" };
            }(te)), W(te) == "object" && (Wt(te.r) && Wt(te.g) && Wt(te.b) ? (Be = te.r, je = te.g, Ne = te.b, wt = { r: 255 * Ve(Be, 255), g: 255 * Ve(je, 255), b: 255 * Ve(Ne, 255) }, dn = !0, Kt = String(te.r).substr(-1) === "%" ? "prgb" : "rgb") : Wt(te.h) && Wt(te.s) && Wt(te.v) ? (Re = We(te.s), un = We(te.v), wt = function(rt, Pe, gt) {
              rt = 6 * Ve(rt, 360), Pe = Ve(Pe, 100), gt = Ve(gt, 100);
              var Qt = Math.floor(rt), cn = rt - Qt, Lt = gt * (1 - Pe), Ht = gt * (1 - cn * Pe), $t = gt * (1 - (1 - cn) * Pe), Pt = Qt % 6;
              return { r: 255 * [gt, Ht, Lt, Lt, $t, gt][Pt], g: 255 * [$t, gt, gt, Ht, Lt, Lt][Pt], b: 255 * [Lt, Lt, $t, gt, gt, Ht][Pt] };
            }(te.h, Re, un), dn = !0, Kt = "hsv") : Wt(te.h) && Wt(te.s) && Wt(te.l) && (Re = We(te.s), ln = We(te.l), wt = function(rt, Pe, gt) {
              var Qt, cn, Lt;
              function Ht(kt, Ee, Gt) {
                return Gt < 0 && (Gt += 1), Gt > 1 && (Gt -= 1), Gt < 1 / 6 ? kt + 6 * (Ee - kt) * Gt : Gt < 0.5 ? Ee : Gt < 2 / 3 ? kt + (Ee - kt) * (2 / 3 - Gt) * 6 : kt;
              }
              if (rt = Ve(rt, 360), Pe = Ve(Pe, 100), gt = Ve(gt, 100), Pe === 0) Qt = cn = Lt = gt;
              else {
                var $t = gt < 0.5 ? gt * (1 + Pe) : gt + Pe - gt * Pe, Pt = 2 * gt - $t;
                Qt = Ht(Pt, $t, rt + 1 / 3), cn = Ht(Pt, $t, rt), Lt = Ht(Pt, $t, rt - 1 / 3);
              }
              return { r: 255 * Qt, g: 255 * cn, b: 255 * Lt };
            }(te.h, Re, ln), dn = !0, Kt = "hsl"), te.hasOwnProperty("a") && (ht = te.a)), ht = Tt(ht), { ok: dn, format: te.format || Kt, r: Math.min(255, Math.max(wt.r, 0)), g: Math.min(255, Math.max(wt.g, 0)), b: Math.min(255, Math.max(wt.b, 0)), a: ht };
          }(I);
          this._originalInput = I, this._r = $.r, this._g = $.g, this._b = $.b, this._a = $.a, this._roundA = Math.round(100 * this._a) / 100, this._format = G.format || $.format, this._gradientType = G.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = $.ok;
        }
        function Ie(I, G, $) {
          I = Ve(I, 255), G = Ve(G, 255), $ = Ve($, 255);
          var te, Be, je = Math.max(I, G, $), Ne = Math.min(I, G, $), wt = (je + Ne) / 2;
          if (je == Ne) te = Be = 0;
          else {
            var ht = je - Ne;
            switch (Be = wt > 0.5 ? ht / (2 - je - Ne) : ht / (je + Ne), je) {
              case I:
                te = (G - $) / ht + (G < $ ? 6 : 0);
                break;
              case G:
                te = ($ - I) / ht + 2;
                break;
              case $:
                te = (I - G) / ht + 4;
            }
            te /= 6;
          }
          return { h: te, s: Be, l: wt };
        }
        function Z(I, G, $) {
          I = Ve(I, 255), G = Ve(G, 255), $ = Ve($, 255);
          var te, Be, je = Math.max(I, G, $), Ne = Math.min(I, G, $), wt = je, ht = je - Ne;
          if (Be = je === 0 ? 0 : ht / je, je == Ne) te = 0;
          else {
            switch (je) {
              case I:
                te = (G - $) / ht + (G < $ ? 6 : 0);
                break;
              case G:
                te = ($ - I) / ht + 2;
                break;
              case $:
                te = (I - G) / ht + 4;
            }
            te /= 6;
          }
          return { h: te, s: Be, v: wt };
        }
        function Me(I, G, $, te) {
          var Be = [_e(Math.round(I).toString(16)), _e(Math.round(G).toString(16)), _e(Math.round($).toString(16))];
          return te && Be[0].charAt(0) == Be[0].charAt(1) && Be[1].charAt(0) == Be[1].charAt(1) && Be[2].charAt(0) == Be[2].charAt(1) ? Be[0].charAt(0) + Be[1].charAt(0) + Be[2].charAt(0) : Be.join("");
        }
        function ee(I, G, $, te) {
          return [_e(Ke(te)), _e(Math.round(I).toString(16)), _e(Math.round(G).toString(16)), _e(Math.round($).toString(16))].join("");
        }
        function Ae(I, G) {
          G = G === 0 ? 0 : G || 10;
          var $ = z(I).toHsl();
          return $.s -= G / 100, $.s = R($.s), z($);
        }
        function ie(I, G) {
          G = G === 0 ? 0 : G || 10;
          var $ = z(I).toHsl();
          return $.s += G / 100, $.s = R($.s), z($);
        }
        function ce(I) {
          return z(I).desaturate(100);
        }
        function ft(I, G) {
          G = G === 0 ? 0 : G || 10;
          var $ = z(I).toHsl();
          return $.l += G / 100, $.l = R($.l), z($);
        }
        function it(I, G) {
          G = G === 0 ? 0 : G || 10;
          var $ = z(I).toRgb();
          return $.r = Math.max(0, Math.min(255, $.r - Math.round(-G / 100 * 255))), $.g = Math.max(0, Math.min(255, $.g - Math.round(-G / 100 * 255))), $.b = Math.max(0, Math.min(255, $.b - Math.round(-G / 100 * 255))), z($);
        }
        function qe(I, G) {
          G = G === 0 ? 0 : G || 10;
          var $ = z(I).toHsl();
          return $.l -= G / 100, $.l = R($.l), z($);
        }
        function dt(I, G) {
          var $ = z(I).toHsl(), te = ($.h + G) % 360;
          return $.h = te < 0 ? 360 + te : te, z($);
        }
        function Rt(I) {
          var G = z(I).toHsl();
          return G.h = (G.h + 180) % 360, z(G);
        }
        function Le(I, G) {
          if (isNaN(G) || G <= 0) throw new Error("Argument to polyad must be a positive number");
          for (var $ = z(I).toHsl(), te = [z(I)], Be = 360 / G, je = 1; je < G; je++) te.push(z({ h: ($.h + je * Be) % 360, s: $.s, l: $.l }));
          return te;
        }
        function vt(I) {
          var G = z(I).toHsl(), $ = G.h;
          return [z(I), z({ h: ($ + 72) % 360, s: G.s, l: G.l }), z({ h: ($ + 216) % 360, s: G.s, l: G.l })];
        }
        function De(I, G, $) {
          G = G || 6, $ = $ || 30;
          var te = z(I).toHsl(), Be = 360 / $, je = [z(I)];
          for (te.h = (te.h - (Be * G >> 1) + 720) % 360; --G; ) te.h = (te.h + Be) % 360, je.push(z(te));
          return je;
        }
        function at(I, G) {
          G = G || 6;
          for (var $ = z(I).toHsv(), te = $.h, Be = $.s, je = $.v, Ne = [], wt = 1 / G; G--; ) Ne.push(z({ h: te, s: Be, v: je })), je = (je + wt) % 1;
          return Ne;
        }
        z.prototype = { isDark: function() {
          return this.getBrightness() < 128;
        }, isLight: function() {
          return !this.isDark();
        }, isValid: function() {
          return this._ok;
        }, getOriginalInput: function() {
          return this._originalInput;
        }, getFormat: function() {
          return this._format;
        }, getAlpha: function() {
          return this._a;
        }, getBrightness: function() {
          var I = this.toRgb();
          return (299 * I.r + 587 * I.g + 114 * I.b) / 1e3;
        }, getLuminance: function() {
          var I, G, $, te = this.toRgb();
          return I = te.r / 255, G = te.g / 255, $ = te.b / 255, 0.2126 * (I <= 0.03928 ? I / 12.92 : Math.pow((I + 0.055) / 1.055, 2.4)) + 0.7152 * (G <= 0.03928 ? G / 12.92 : Math.pow((G + 0.055) / 1.055, 2.4)) + 0.0722 * ($ <= 0.03928 ? $ / 12.92 : Math.pow(($ + 0.055) / 1.055, 2.4));
        }, setAlpha: function(I) {
          return this._a = Tt(I), this._roundA = Math.round(100 * this._a) / 100, this;
        }, toHsv: function() {
          var I = Z(this._r, this._g, this._b);
          return { h: 360 * I.h, s: I.s, v: I.v, a: this._a };
        }, toHsvString: function() {
          var I = Z(this._r, this._g, this._b), G = Math.round(360 * I.h), $ = Math.round(100 * I.s), te = Math.round(100 * I.v);
          return this._a == 1 ? "hsv(" + G + ", " + $ + "%, " + te + "%)" : "hsva(" + G + ", " + $ + "%, " + te + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var I = Ie(this._r, this._g, this._b);
          return { h: 360 * I.h, s: I.s, l: I.l, a: this._a };
        }, toHslString: function() {
          var I = Ie(this._r, this._g, this._b), G = Math.round(360 * I.h), $ = Math.round(100 * I.s), te = Math.round(100 * I.l);
          return this._a == 1 ? "hsl(" + G + ", " + $ + "%, " + te + "%)" : "hsla(" + G + ", " + $ + "%, " + te + "%, " + this._roundA + ")";
        }, toHex: function(I) {
          return Me(this._r, this._g, this._b, I);
        }, toHexString: function(I) {
          return "#" + this.toHex(I);
        }, toHex8: function(I) {
          return function(G, $, te, Be, je) {
            var Ne = [_e(Math.round(G).toString(16)), _e(Math.round($).toString(16)), _e(Math.round(te).toString(16)), _e(Ke(Be))];
            return je && Ne[0].charAt(0) == Ne[0].charAt(1) && Ne[1].charAt(0) == Ne[1].charAt(1) && Ne[2].charAt(0) == Ne[2].charAt(1) && Ne[3].charAt(0) == Ne[3].charAt(1) ? Ne[0].charAt(0) + Ne[1].charAt(0) + Ne[2].charAt(0) + Ne[3].charAt(0) : Ne.join("");
          }(this._r, this._g, this._b, this._a, I);
        }, toHex8String: function(I) {
          return "#" + this.toHex8(I);
        }, toRgb: function() {
          return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
        }, toRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: Math.round(100 * Ve(this._r, 255)) + "%", g: Math.round(100 * Ve(this._g, 255)) + "%", b: Math.round(100 * Ve(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(100 * Ve(this._r, 255)) + "%, " + Math.round(100 * Ve(this._g, 255)) + "%, " + Math.round(100 * Ve(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * Ve(this._r, 255)) + "%, " + Math.round(100 * Ve(this._g, 255)) + "%, " + Math.round(100 * Ve(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return this._a === 0 ? "transparent" : !(this._a < 1) && (st[Me(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function(I) {
          var G = "#" + ee(this._r, this._g, this._b, this._a), $ = G, te = this._gradientType ? "GradientType = 1, " : "";
          if (I) {
            var Be = z(I);
            $ = "#" + ee(Be._r, Be._g, Be._b, Be._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + te + "startColorstr=" + G + ",endColorstr=" + $ + ")";
        }, toString: function(I) {
          var G = !!I;
          I = I || this._format;
          var $ = !1, te = this._a < 1 && this._a >= 0;
          return G || !te || I !== "hex" && I !== "hex6" && I !== "hex3" && I !== "hex4" && I !== "hex8" && I !== "name" ? (I === "rgb" && ($ = this.toRgbString()), I === "prgb" && ($ = this.toPercentageRgbString()), I !== "hex" && I !== "hex6" || ($ = this.toHexString()), I === "hex3" && ($ = this.toHexString(!0)), I === "hex4" && ($ = this.toHex8String(!0)), I === "hex8" && ($ = this.toHex8String()), I === "name" && ($ = this.toName()), I === "hsl" && ($ = this.toHslString()), I === "hsv" && ($ = this.toHsvString()), $ || this.toHexString()) : I === "name" && this._a === 0 ? this.toName() : this.toRgbString();
        }, clone: function() {
          return z(this.toString());
        }, _applyModification: function(I, G) {
          var $ = I.apply(null, [this].concat([].slice.call(G)));
          return this._r = $._r, this._g = $._g, this._b = $._b, this.setAlpha($._a), this;
        }, lighten: function() {
          return this._applyModification(ft, arguments);
        }, brighten: function() {
          return this._applyModification(it, arguments);
        }, darken: function() {
          return this._applyModification(qe, arguments);
        }, desaturate: function() {
          return this._applyModification(Ae, arguments);
        }, saturate: function() {
          return this._applyModification(ie, arguments);
        }, greyscale: function() {
          return this._applyModification(ce, arguments);
        }, spin: function() {
          return this._applyModification(dt, arguments);
        }, _applyCombination: function(I, G) {
          return I.apply(null, [this].concat([].slice.call(G)));
        }, analogous: function() {
          return this._applyCombination(De, arguments);
        }, complement: function() {
          return this._applyCombination(Rt, arguments);
        }, monochromatic: function() {
          return this._applyCombination(at, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(vt, arguments);
        }, triad: function() {
          return this._applyCombination(Le, [3]);
        }, tetrad: function() {
          return this._applyCombination(Le, [4]);
        } }, z.fromRatio = function(I, G) {
          if (W(I) == "object") {
            var $ = {};
            for (var te in I) I.hasOwnProperty(te) && ($[te] = te === "a" ? I[te] : We(I[te]));
            I = $;
          }
          return z(I, G);
        }, z.equals = function(I, G) {
          return !(!I || !G) && z(I).toRgbString() == z(G).toRgbString();
        }, z.random = function() {
          return z.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
        }, z.mix = function(I, G, $) {
          $ = $ === 0 ? 0 : $ || 50;
          var te = z(I).toRgb(), Be = z(G).toRgb(), je = $ / 100;
          return z({ r: (Be.r - te.r) * je + te.r, g: (Be.g - te.g) * je + te.g, b: (Be.b - te.b) * je + te.b, a: (Be.a - te.a) * je + te.a });
        }, z.readability = function(I, G) {
          var $ = z(I), te = z(G);
          return (Math.max($.getLuminance(), te.getLuminance()) + 0.05) / (Math.min($.getLuminance(), te.getLuminance()) + 0.05);
        }, z.isReadable = function(I, G, $) {
          var te, Be, je, Ne, wt, ht = z.readability(I, G);
          switch (Be = !1, (je = $, (Ne = ((je = je || { level: "AA", size: "small" }).level || "AA").toUpperCase()) !== "AA" && Ne !== "AAA" && (Ne = "AA"), (wt = (je.size || "small").toLowerCase()) !== "small" && wt !== "large" && (wt = "small"), te = { level: Ne, size: wt }).level + te.size) {
            case "AAsmall":
            case "AAAlarge":
              Be = ht >= 4.5;
              break;
            case "AAlarge":
              Be = ht >= 3;
              break;
            case "AAAsmall":
              Be = ht >= 7;
          }
          return Be;
        }, z.mostReadable = function(I, G, $) {
          var te, Be, je, Ne, wt = null, ht = 0;
          Be = ($ = $ || {}).includeFallbackColors, je = $.level, Ne = $.size;
          for (var Re = 0; Re < G.length; Re++) (te = z.readability(I, G[Re])) > ht && (ht = te, wt = z(G[Re]));
          return z.isReadable(I, wt, { level: je, size: Ne }) || !Be ? wt : ($.includeFallbackColors = !1, z.mostReadable(I, ["#fff", "#000"], $));
        };
        var Dt = z.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, st = z.hexNames = function(I) {
          var G = {};
          for (var $ in I) I.hasOwnProperty($) && (G[I[$]] = $);
          return G;
        }(Dt);
        function Tt(I) {
          return I = parseFloat(I), (isNaN(I) || I < 0 || I > 1) && (I = 1), I;
        }
        function Ve(I, G) {
          (function(te) {
            return typeof te == "string" && te.indexOf(".") != -1 && parseFloat(te) === 1;
          })(I) && (I = "100%");
          var $ = function(te) {
            return typeof te == "string" && te.indexOf("%") != -1;
          }(I);
          return I = Math.min(G, Math.max(0, parseFloat(I))), $ && (I = parseInt(I * G, 10) / 100), Math.abs(I - G) < 1e-6 ? 1 : I % G / parseFloat(G);
        }
        function R(I) {
          return Math.min(1, Math.max(0, I));
        }
        function se(I) {
          return parseInt(I, 16);
        }
        function _e(I) {
          return I.length == 1 ? "0" + I : "" + I;
        }
        function We(I) {
          return I <= 1 && (I = 100 * I + "%"), I;
        }
        function Ke(I) {
          return Math.round(255 * parseFloat(I)).toString(16);
        }
        function tt(I) {
          return se(I) / 255;
        }
        var nt, Ft, we, Ot = (Ft = "[\\s|\\(]+(" + (nt = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + nt + ")[,|\\s]+(" + nt + ")\\s*\\)?", we = "[\\s|\\(]+(" + nt + ")[,|\\s]+(" + nt + ")[,|\\s]+(" + nt + ")[,|\\s]+(" + nt + ")\\s*\\)?", { CSS_UNIT: new RegExp(nt), rgb: new RegExp("rgb" + Ft), rgba: new RegExp("rgba" + we), hsl: new RegExp("hsl" + Ft), hsla: new RegExp("hsla" + we), hsv: new RegExp("hsv" + Ft), hsva: new RegExp("hsva" + we), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
        function Wt(I) {
          return !!Ot.CSS_UNIT.exec(I);
        }
        return z;
      }();
    } }, M = {};
    function _(j) {
      var W = M[j];
      if (W !== void 0) return W.exports;
      var ke = M[j] = { exports: {} };
      return P[j].call(ke.exports, ke, ke.exports, _), ke.exports;
    }
    var U = {};
    (() => {
      var j = U;
      Object.defineProperty(j, "__esModule", { value: !0 }), j.createTheme = j.Palette = j.Color = void 0;
      var W = _(2317);
      Object.defineProperty(j, "Color", { enumerable: !0, get: function() {
        return W.Color;
      } });
      var ke = _(5939);
      Object.defineProperty(j, "Palette", { enumerable: !0, get: function() {
        return ke.Palette;
      } });
      var ge = _(6893);
      Object.defineProperty(j, "createTheme", { enumerable: !0, get: function() {
        return ge.createTheme;
      } });
    })();
    var q = m;
    for (var X in U) q[X] = U[X];
    U.__esModule && Object.defineProperty(q, "__esModule", { value: !0 });
  }, 877: () => {
  }, 67: () => {
  } }, o = {};
  function u(y) {
    var m = o[y];
    if (m !== void 0) return m.exports;
    var P = o[y] = { exports: {} };
    return f[y](P, P.exports, u), P.exports;
  }
  u.n = (y) => {
    var m = y && y.__esModule ? () => y.default : () => y;
    return u.d(m, { a: m }), m;
  }, u.d = (y, m) => {
    for (var P in m) u.o(m, P) && !u.o(y, P) && Object.defineProperty(y, P, { enumerable: !0, get: m[P] });
  }, u.o = (y, m) => Object.prototype.hasOwnProperty.call(y, m), u.r = (y) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(y, "__esModule", { value: !0 });
  };
  var d = {};
  (() => {
    var vs, ks;
    u.r(d), u.d(d, { AppManifestType: () => X, BookmarkItemContextMenuOptionType: () => ie, BrowserButtonType: () => ft, ColorSchemeOptionType: () => Me, CustomActionCallerType: () => dt, Dock: () => W, EnterpriseMainContextMenuOptionType: () => Ae, GlobalContextMenuOptionType: () => Z, PageChangeEventType: () => Ie, PageTabContextMenuOptionType: () => ee, PanelPosition: () => z, SUPPORTED_LANGUAGES: () => Rt, SaveButtonContextMenuOptionType: () => it, SaveModalType: () => Le, ViewTabMenuOptionType: () => ce, WindowType: () => qe, getCurrentSync: () => v, init: () => Zu, wrapSync: () => k });
    var y = {};
    u.r(y), u.d(y, { createNamespacedLocalStorage: () => ea, getItem: () => Ca, removeItem: () => bo, setItem: () => ct });
    var m, P, M, _, U, q, X, j, W = {};
    u.r(W), u.d(W, { init: () => vn }), function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    }(m || (m = {})), function(e) {
      e.UserAction = "user-action", e.FocusChange = "focus-change", e.Reload = "reload";
    }(P || (P = {})), function(e) {
      e.Active = "active", e.Default = "default";
    }(M || (M = {})), function(e) {
      e.Suggestion = "suggestion";
    }(_ || (_ = {})), function(e) {
      e.Contact = "Contact", e.Custom = "Custom", e.List = "List", e.Plain = "Plain", e.SimpleText = "SimpleText", e.Loading = "Loading", e.Error = "Error";
    }(U || (U = {})), function(e) {
      e.MultiSelect = "MultiSelect";
    }(q || (q = {})), function(e) {
      e.Snapshot = "snapshot", e.Manifest = "manifest", e.View = "view", e.External = "external";
    }(X || (X = {})), function(e) {
      e.LandingPage = "landingPage", e.AppGrid = "appGrid";
    }(j || (j = {}));
    var ke, ge, z, Ie, Z, Me, ee, Ae, ie, ce, ft, it, qe, dt;
    (function(e) {
      e.Primary = "primary", e.Secondary = "secondary", e.TextOnly = "textOnly";
    })(ke || (ke = {})), function(e) {
      e.ActionButton = "ActionButton", e.DropdownButton = "DropdownButton";
    }(ge || (ge = {})), function(e) {
      e.Left = "Left", e.Right = "Right", e.Top = "Top", e.Bottom = "Bottom";
    }(z || (z = {})), function(e) {
      e.UrlChange = "URL_CHANGE", e.ViewAdded = "VIEW_ADDED", e.ViewRemoved = "VIEW_REMOVED", e.PageContextAdded = "PAGE_CONTEXT_ADDED", e.PageContextRemoved = "PAGE_CONTEXT_REMOVED";
    }(Ie || (Ie = {})), function(e) {
      e.NewWindow = "NewWindow", e.NewPage = "NewPage", e.SavePage = "SavePage", e.SavePageAs = "SavePageAs", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.CloseWindow = "CloseWindow", e.RestoreChanges = "RestoreChanges", e.SaveWorkspace = "SaveWorkspace", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.RenameWorkspace = "RenameWorkspace", e.SwitchWorkspace = "SwitchWorkspace", e.DeleteWorkspace = "DeleteWorkspace", e.Downloads = "Downloads", e.OpenStorefront = "OpenStorefront", e.ManageDesktopSignals = "ManageDesktopSignals", e.Appearance = "Appearance", e.Quit = "Quit", e.Custom = "Custom";
    }(Z || (Z = {})), function(e) {
      e.Light = "light", e.Dark = "dark", e.System = "system";
    }(Me || (Me = {})), function(e) {
      e.Close = "Close", e.Duplicate = "Duplicate", e.Rename = "Rename", e.Save = "Save", e.SaveAs = "Save As", e.NewPage = "New Page", e.DeletePage = "Delete Page", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Refresh = "Refresh", e.CloseOthers = "Close others", e.Delete = "Delete", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.ManageDesktopSignals = "ManageDesktopSignals", e.AddToChannel = "AddToChannel", e.Custom = "Custom";
    }(ee || (ee = {})), function(e) {
      e.Lock = "Lock", e.ShowHideTabs = "ShowHideTabs", e.AddToChanel = "AddToChannel", e.ManageDesktopSignals = "ManageDesktopSignals", e.Print = "Print", e.Pin = "Pin";
    }(Ae || (Ae = {})), function(e) {
      e.EditName = "Edit Name", e.Move = "Move", e.Delete = "Delete";
    }(ie || (ie = {})), function(e) {
      e.NewView = "NewView", e.DuplicateViews = "DuplicateView", e.OpenWithDefaultBrowser = "OpenWithDefaultBrowser", e.ReloadViews = "ReloadTab", e.CloseViews = "CloseTab", e.AddToChannel = "AddToChannel", e.RemoveFromChannel = "RemoveFromChannel", e.Back = "Back", e.Forward = "Forward", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.Custom = "Custom";
    }(ce || (ce = {})), function(e) {
      e.ShowHideTabs = "ShowHideTabs", e.ColorLinking = "ColorLinking", e.PresetLayouts = "PresetLayouts", e.LockUnlockPage = "LockUnlockPage", e.SaveMenu = "SaveMenu", e.SavePage = "SavePage", e.Minimise = "Minimise", e.Maximise = "Maximise", e.Close = "Close", e.Custom = "Custom";
    }(ft || (ft = {})), function(e) {
      e.SavePage = "SavePage", e.SaveWorkspace = "SaveWorkspace", e.SavePageAs = "SavePageAs", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Custom = "Custom";
    }(it || (it = {})), function(e) {
      e.Browser = "browser", e.Platform = "platform";
    }(qe || (qe = {})), function(e) {
      e.CustomButton = "CustomButton", e.StoreCustomButton = "StoreCustomButton", e.CustomDropdownItem = "CustomDropdownItem", e.GlobalContextMenu = "GlobalContextMenu", e.ViewTabContextMenu = "ViewTabContextMenu", e.PageTabContextMenu = "PageTabContextMenu", e.SaveButtonContextMenu = "SaveButtonContextMenu", e.API = "API";
    }(dt || (dt = {}));
    const Rt = ["en-US", "ja-JP", "zh-CN", "ko-KR", "ru-RU", "de-DE", "zh-Hant"];
    var Le, vt;
    (function(e) {
      e.SAVE_PAGE = "SAVE_PAGE", e.SAVE_WORKSPACE = "SAVE_WORKSPACE", e.SAVE_PAGE_AS = "SAVE_PAGE_AS", e.SAVE_WORKSPACE_AS = "SAVE_WORKSPACE_AS", e.RENAME_PAGE = "RENAME_PAGE", e.RENAME_WORKSPACE = "RENAME_WORKSPACE";
    })(Le || (Le = {})), function(e) {
      e.Local = "local", e.Dev = "dev", e.Staging = "staging", e.Prod = "prod";
    }(vt || (vt = {}));
    const De = { isFin: !1, uuid: "", name: "", entityType: "" };
    typeof window < "u" && "fin" in window && window.fin !== null && typeof window.fin == "object" && (De.isFin = !0, De.uuid = De.isFin && fin.me.uuid, De.name = De.isFin && fin.me.name, De.entityType = De.isFin && fin.me.entityType);
    let at = typeof window < "u" && typeof fin < "u";
    const Dt = typeof window < "u", st = Dt && typeof indexedDB < "u", Tt = Dt ? window.origin : vt.Local;
    let Ve = at && fin.me.uuid, R = at && fin.me.name, se = at && fin.me.entityType;
    typeof window < "u" && window.addEventListener("finReady", () => {
      at = !0, Ve = at && fin.me.uuid, R = at && fin.me.name, se = at && fin.me.entityType, De.isFin = !0, De.uuid = De.isFin && fin.me.uuid, De.name = De.isFin && fin.me.name, De.entityType = De.isFin && fin.me.entityType;
    });
    const _e = new Promise((e) => {
      if (De.isFin) return e();
      typeof window < "u" ? window.addEventListener("finReady", () => e(), { once: !0 }) : e();
    }), We = (vt.Local, vt.Dev, vt.Staging, vt.Prod === "prod"), Ke = (e) => e.startsWith("http://") || e.startsWith("https://") ? e : Tt + e, tt = Ke("https://workspace.openfin.co/workspace/22.3.31"), nt = Ke("https://workspace.openfin.co/workspace/22.3.31"), Ft = (typeof WORKSPACE_DOCS_PLATFORM_URL < "u" && Ke(WORKSPACE_DOCS_PLATFORM_URL), typeof WORKSPACE_DOCS_CLIENT_URL < "u" && Ke(WORKSPACE_DOCS_CLIENT_URL), "42.138.103.903"), we = "22.3.31";
    typeof WORKSPACE_BUILD_SHA < "u" && WORKSPACE_BUILD_SHA;
    var Ot, Wt;
    (function(e) {
      e.Home = "/home/", e.HomeSearch = "/home/?deeplink=search", e.HomePagesRename = "/home/pages/rename/", e.Dock = "/dock/", e.Docs = "/provider/docs/", e.Storefront = "/storefront/", e.DeprecatedAlert = "/provider/deprecated-alert/", e.Analytics = "/provider/analytics/", e.Provider = "/provider/";
    })(Ot || (Ot = {})), function(e) {
      e.Browser = "/browser/", e.BrowserPopupMenu = "/popup-menu/", e.BrowserPopupMenuSaveModal = "/popup-menu/save-modal/", e.BrowserPopupMenuLayouts = "/popup-menu/layouts/layouts/", e.BrowserPopupMenuColorLinking = "/popup-menu/color-linking/color-linking/", e.BrowserIndicator = "/indicator/", e.BrowserPopupMenuAddressSearchResultsView = "/popup-menu/address-search-results-view/", e.ResponseModal = "/popup-menu/response-modal/", e.CloseConfirmationModal = "/popup-menu/close-confirmation-modal/", e.EnterpriseBrowser = "/enterprise/", e.EnterpriseLandingPage = "/enterprise/landing/", e.EnterpriseContextMenu = "/context-menu/", e.EnterpriseBookmarkDialog = "/bookmark-dialog/", e.EnterpriseAboutPage = "/popup-menu/about/", e.DropdownMenu = "/dropdown-menu/", e.EnterpriseDock = "/dock/", e.ZoomControlsDialog = "/zoom-controls-dialog/", e.DesktopSignalsModal = "/popup-menu/desktop-signals-modal/";
    }(Wt || (Wt = {}));
    const I = { ...Ot, ...Wt };
    var G;
    (function(e) {
      e.Search = "search";
    })(G || (G = {}));
    const $ = I;
    async function te() {
      const e = "getManifestOverrides", { manifest: n, initialOptions: r } = await fin.Application.getCurrentSync().getInfo();
      return n != null && n.platform.workspace || n != null && n.platform.home || r != null && r.workspace || r != null && r.home || console.warn(`${e}: Missing Home development manifest overrides, using Desktop Owner Settings.`), n != null && n.platform.workspace ? (JSON.stringify(n == null ? void 0 : n.platform.workspace), n == null ? void 0 : n.platform.workspace) : n != null && n.platform.home ? (JSON.stringify(n == null ? void 0 : n.platform.home), n == null ? void 0 : n.platform.home) : r != null && r.workspace ? (JSON.stringify(r == null ? void 0 : r.workspace), r == null ? void 0 : r.workspace) : r != null && r.home ? (JSON.stringify(r == null ? void 0 : r.home), r == null ? void 0 : r.home) : {};
    }
    const Be = (e) => fin.System.getSystemAppConfig(e);
    async function je() {
      const e = "getDOSOverrides";
      if (!De.isFin) return console.warn(`${e}: the fin API was not available, returning no result`), {};
      try {
        let n = await Be("workspace").catch((r) => {
          console.warn(`${e}: customConfig entry for SystemApp workspace not available in Desktop Owner Settings. ${r == null ? void 0 : r.message}`);
        });
        return n || (n = await Be("home")), JSON.stringify(n), n;
      } catch (n) {
        if (!We) return {};
        if (!(n instanceof Error)) throw n;
        console.warn(`${e}: Missing Workspace Desktop Owner Settings configuration, using defaults. ${n == null ? void 0 : n.message}`);
      }
      return {};
    }
    let Ne, wt;
    async function ht() {
      if (Ne) return Ne;
      const e = "getOverrides";
      if (!De.isFin) return Dt && console.warn(`${e}: The Fin API was not available. Returning an empty result.`), {};
      const [n, r] = await Promise.all([je(), te()]);
      return Ne = { ...r, ...n, disableRuntimeValidation: r.disableRuntimeValidation || n.disableRuntimeValidation }, Ne;
    }
    function Re(e) {
      wt = e;
    }
    const un = (e) => e.replace(/\/$/, "");
    async function ln() {
      const e = (await ht()).browserBaseUrl;
      if (e) try {
        const n = new URL(e);
        if (n.pathname.endsWith("/")) n.pathname = un(n.pathname);
        else {
          if (n.pathname === "/workspace") return n.pathname += `/${we}`, n.toString();
          console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url, with path: /workspace. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
        }
      } catch {
        console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
      }
      return wt ?? nt;
    }
    async function dn(e = !1) {
      const n = await ln() + $.Browser;
      return e ? n : un(n);
    }
    async function Kt(e = !1) {
      const n = await ln() + $.EnterpriseBrowser;
      return e ? n : un(n);
    }
    async function rt() {
      return await Kt() + "/landing/";
    }
    const Pe = async (e, n = !1) => e ? Kt(n) : dn(n), gt = 56, Qt = 728, cn = 150, Lt = "dock3", Ht = (e) => {
      const n = typeof fin < "u" && fin.me.identity.uuid;
      if (!n) throw new Error("UUID is required to get the Dock3 channel name.");
      return `${n}-dock3`;
    }, $t = (e, n = "") => e.toLowerCase().includes(n.toLowerCase()), Pt = (...e) => ((n, ...r) => {
      const s = console[n];
      try {
        s(...r.map((c) => typeof c == "object" ? JSON.stringify(c, null, 2) : c));
      } catch (c) {
        console.error("Error printing stringified log, logging directly", c), s(...r);
      }
    })("debug", ...e);
    var kt, Ee;
    (function(e) {
      e.Workspace = "openfin-workspace", e.OldWorkspace = "openfin-browser";
    })(kt || (kt = {})), function(e) {
      e.FinProtocol = "fin-protocol";
    }(Ee || (Ee = {})), kt.Workspace;
    const Gt = (e) => {
      if (!De.isFin) throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");
      return fin.Application.wrapSync(e);
    }, rn = async () => (await _e, Gt({ uuid: De.uuid }));
    var h;
    (function(e) {
      e.Home = "openfin-home", e.Dock = "openfin-dock", e.Storefront = "openfin-storefront", e.HomeInternal = "openfin-home-internal", e.BrowserMenu = "openfin-browser-menu", e.BrowserSaveMenu = "openfin-browser-save-menu", e.DockSaveWorkspaceMenu = "openfin-dock3-save-workspace-menu", e.BrowserIndicator = "openfin-browser-indicator", e.BrowserWindow = "internal-generated-window", e.ClassicWindow = "internal-generated-classic-window", e.EnterpriseContextMenu = "openfin-enterprise-context-menu", e.BrowserAddressSearchPrefix = "openfin-browser-menu-address-search-", e.EnterpriseBookmarkDialogWindow = "openfin-enterprise-bookmark-dialog", e.DropdownMenu = "openfin-enterprise-dropdown-menu", e.DockCompanion = "openfin-dock-companion", e.AICompanionPrefix = "openfin-ai-companion-", e.UpdateVersionModal = "here-update-version-modal", e.ZoomControlsDialog = "here-zoom-controls-dialog", e.AboutPageWindow = "here-about-page", e.DesktopSignalsModal = "here-desktop-signals-modal";
    })(h || (h = {}));
    const x = (e) => ({ left: (e.left + (e.right ?? e.left + e.width)) / 2, top: (e.top + (e.bottom ?? e.top + e.height)) / 2 }), le = (e, n) => {
      const r = n.width / 2, s = n.height / 2;
      return { left: Math.round(e.left - r), top: Math.round(e.top - s), width: n.width, height: n.height };
    };
    function de(e) {
      if (!De.isFin) throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
      return fin.Window.wrapSync(e);
    }
    const ye = { get name() {
      return De.name;
    }, get uuid() {
      return De.uuid;
    } };
    h.Home, kt.Workspace, h.Dock, kt.Workspace;
    const Ze = { name: h.Storefront, uuid: kt.Workspace };
    kt.Workspace, kt.Workspace;
    async function He(e) {
      const n = de(e);
      await n.getState() === "minimized" && await n.restore(), await n.show(), await n.setAsForeground();
    }
    const ut = async (e) => {
      var n, r, s;
      try {
        const c = await fin.Window.wrapSync({ name: e.name, uuid: e.uuid ?? fin.me.uuid }).getOptions();
        return (((n = c.workspacePlatform) == null ? void 0 : n.windowType) === "browser" || ((r = c.workspacePlatform) == null ? void 0 : r.windowType) === "enterprise") && ((s = c.workspacePlatform) == null ? void 0 : s.pages);
      } catch (c) {
        return console.warn("isBrowserWindow error: ", c), !1;
      }
    };
    async function Ge() {
      const e = await fin.Application.getCurrentSync().getChildWindows(), n = await Promise.all(e.map(async (r) => ut(r.identity)));
      return e.filter((r, s) => n[s]);
    }
    async function nn() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((e) => e.identity.name.startsWith(h.BrowserMenu));
    }
    const Xt = (e) => de(e).getInfo().then(() => !0).catch(() => !1), qn = () => Xt(Ze);
    function Ln(e, n) {
      const r = e.top, s = e.left, c = e.top + e.height, w = e.left + e.width, S = n.monitorRect.top, b = n.monitorRect.left, F = n.monitorRect.bottom, V = n.monitorRect.right;
      if (r > F || c < S || s > V || w < b) return 0;
      const Q = Math.max(r, S), J = Math.max(s, b);
      return (Math.min(c, F) - Q) * (Math.min(w, V) - J) / (e.height * e.width);
    }
    async function xt(e) {
      const n = await fin.System.getMonitorInfo();
      return [n.primaryMonitor, ...n.nonPrimaryMonitors].reduce((r, s) => {
        const c = Ln(e, s);
        return c > r.percentage ? { percentage: c, monitor: s } : r;
      }, { percentage: 0, monitor: n.primaryMonitor }).monitor;
    }
    const Vt = (e, n) => {
      var s, c, w;
      const r = e;
      return r.workspacePlatform || (r.workspacePlatform = {}), r.workspacePlatform._internalDeferShowOptions = { setAsForeground: !!n, deferShowEnabled: !0, autoShow: ((s = r.workspacePlatform) == null ? void 0 : s._internalAutoShow) || ((w = (c = r.workspacePlatform) == null ? void 0 : c._internalDeferShowOptions) == null ? void 0 : w.autoShow) || r.autoShow === void 0 || r.autoShow }, r.autoShow = !1, r;
    };
    var ga, ma;
    (function(e) {
      e.RelativeToParentWindow = "relative-to-parent-window", e.RelativeToMonitor = "relative-to-monitor";
    })(ga || (ga = {})), function(e) {
      e.Top = "top", e.Below = "below";
    }(ma || (ma = {}));
    const Jn = async (e) => {
      const n = e && await de(e).getBounds();
      return { left: ((s = (e ? await xt(n) : (await fin.System.getMonitorInfo()).primaryMonitor).availableRect).left + s.right) / 2, top: (s.top + s.bottom) / 2 };
      var s;
    }, wa = async (e, n, r = !1) => {
      let s;
      if (r) s = await Jn(n);
      else {
        const S = de(n), b = await S.getBounds();
        s = x(b);
      }
      const { defaultHeight: c, defaultWidth: w } = e;
      return le(s, { height: c, width: w });
    };
    async function Yn(e, n, r = !1) {
      const s = n && await de(n).getState() === "maximized", c = r || s || !n, w = await wa(e, n, c);
      return await (async (S) => {
        const b = await fin.System.getMonitorInfo(), F = [b.primaryMonitor, ...b.nonPrimaryMonitors];
        for (const V of F) if (Ln(S, V) === 1) return !1;
        return !0;
      })(w) ? (await de(n).center(), wa(e, n, c)) : (console.warn("Response modal isn't off screen, not centering parent window"), w);
    }
    const _n = () => (e) => e;
    var oe = u(847);
    const xn = (e) => e.replace(/[^\d,]/g, "").split(","), ya = (e) => {
      if (e.length < 2) throw new Error("Invalid color object, cannot convert to HSL.");
      const n = e[0] / 255, r = e[1] / 255, s = e[2] / 255, c = Math.min(n, r, s), w = Math.max(n, r, s), S = w - c;
      let b = 0, F = 0, V = 0;
      return b = S === 0 ? 0 : w === n ? (r - s) / S % 6 : w === r ? (s - n) / S + 2 : (n - r) / S + 4, b = Math.round(60 * b), b < 0 && (b += 360), V = (w + c) / 2, F = S == 0 ? 0 : S / (1 - Math.abs(2 * V - 1)), F = +(100 * F).toFixed(1), V = +(100 * V).toFixed(1), { hsl: `hsl(${b}, ${F}%, ${V}%)`, hsla: `hsl(${b}, ${F}%, ${V}%, 1)`, hue: b, lightness: V, saturation: F };
    }, fr = (e) => {
      if (!e.includes("#")) throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");
      let n = 0, r = 0, s = 0;
      if (e.length === 4) n = `0x${e[1]}${e[1]}`, r = `0x${e[2]}${e[2]}`, s = `0x${e[3]}${e[3]}`;
      else {
        if (e.length !== 7) throw new Error("Invalid hex string length, cannot convert to RGB.");
        n = `0x${e[1]}${e[2]}`, r = `0x${e[3]}${e[4]}`, s = `0x${e[5]}${e[6]}`;
      }
      return [+n, +r, +s];
    }, Cn = (e) => {
      const n = e;
      if (n.startsWith("#"))
        return { rgb: fr(n).join(", "), alpha: 1 };
      const r = n.match(/\d{1,3}(\.\d+)?/g);
      if (r) {
        const [s, c, w, S] = r;
        return { rgb: `${s}, ${c}, ${w}`, alpha: S !== void 0 ? parseFloat(S) : 1 };
      }
      return { rgb: fr(e).join(", "), alpha: 1 };
    }, hr = (e, n = !1) => {
      const r = ((s) => {
        if (!s) throw new Error("Color is not defined");
        const c = s.toLowerCase();
        let w;
        if (c.includes("rgb")) {
          const b = xn(c);
          b.length > 3 && b.pop(), w = ya(b).hue;
        }
        if (c.includes("#")) {
          const b = fr(c);
          w = ya(b).hue;
        }
        c.includes("hsl") && (w = xn(c)[0]);
        const S = w == null ? void 0 : w.toString();
        if (!S) throw new Error(`Hue was unable to be extracted from "${c}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);
        return S;
      })(e);
      return n ? { background1: `hsla(${r}, 0%, 100%, 1)`, background2: `hsla(${r}, 67%, 99%, 1)`, background3: `hsla(${r}, 26%, 96%, 1)`, background4: `hsla(${r}, 15%, 94%, 1)`, background5: `hsla(${r}, 10%, 88%, 1)`, background6: `hsla(${r}, 80%, 80%, 1)` } : { background1: `hsla(${r}, 8%, 7%, 1)`, background2: `hsla(${r}, 8%, 13%, 1)`, background3: `hsla(${r}, 9%, 15%, 1)`, background4: `hsla(${r}, 6%, 23%, 1)`, background5: `hsla(${r}, 21%, 28%, 1)`, background6: `hsla(${r}, 5%, 51%, 1)` };
    }, Rn = (e, n) => {
      const r = {};
      return Object.keys(e).forEach((s) => {
        r[s] = n[s] ? n[s] : e[s];
      }), r;
    };
    var jr = u(877), gr = u.n(jr), Ut = u(67), Vn = u.n(Ut);
    const Mn = { light: { symbol: ((vs = Vn()) == null ? void 0 : vs.src) || "" }, dark: { symbol: ((ks = gr()) == null ? void 0 : ks.src) || "" } }, Kr = Dt && document.readyState !== "complete" && new Promise((e) => document.addEventListener("readystatechange", () => {
      document.readyState === "complete" && e();
    }));
    function pn(e) {
      let n;
      const r = /* @__PURE__ */ new Set();
      return () => {
        if (!at) throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");
        return n || (n = (async () => {
          await Kr;
          const s = { clientAPIVersion: we }, c = await fin.InterApplicationBus.Channel.connect(e, { payload: s });
          return c.onDisconnection(async () => {
            r.forEach((w) => w()), r.clear(), console.warn(`disconnected from channel provider ${e}`), n = void 0;
          }), c;
        })().then((s) => (s.addDisconnectionListener = (c) => {
          r.add(c);
        }, s)).catch((s) => {
          throw n = void 0, new Error(`failed to connect to channel provider ${e}: ${s}`);
        })), n;
      };
    }
    var ba, La;
    (function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    })(ba || (ba = {})), function(e) {
      e[e.Initial = 0] = "Initial", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close";
    }(La || (La = {}));
    const mr = pn("__of_workspace_protocol__"), Un = mr;
    var fe;
    (function(e) {
      e.LaunchApp = "launchApp", e.SavePage = "savePage", e.GetSavedPage = "getSavedPage", e.CreateSavedPage = "createSavedPage", e.UpdateSavedPage = "updateSavedPage", e.DeleteSavedPage = "deleteSavedPage", e.GetSavedPages = "getSavedPages", e.CreateSavedPageInternal = "createSavedPageInternal", e.UpdateSavedPageInternal = "updateSavedPageInternal", e.DeleteSavedPageInternal = "deleteSavedPageInternal", e.UpdatePageForWindow = "updatePageForWindow", e.AttachPagesToWindow = "attachPagesToWindow", e.DetachPagesFromWindow = "detachPagesFromWindow", e.ReorderPagesForWindow = "reorderPagesForWindow", e.SetActivePage = "setActivePage", e.AddPage = "addPage", e.AddDefaultPage = "addDefaultPage", e.GetAllAttachedPages = "getAllAttachedPages", e.GetActivePageIdForWindow = "getActivePageIdForWindow", e.GetPagesForWindow = "getPagesForWindow", e.GetPageForWindow = "getPageForWindow", e.GetSavedPageMetadata = "getSavedPageMetadata", e.GetUniquePageTitle = "getUniquePageTitle", e.GetLastFocusedBrowserWindow = "getLastFocusedBrowserWindow", e.GetPageByViewIdentity = "getPageByViewIdentity", e.GetThemes = "getThemes", e.GetSelectedScheme = "getSelectedScheme", e.SetSelectedScheme = "setSelectedScheme", e.OpenGlobalContextMenuInternal = "openGlobalContextMenuInternal", e.OpenViewTabContextMenuInternal = "openViewTabContextMenuInternal", e.OpenPageTabContextMenuInternal = "openPageTabContextMenuInternal", e.OpenSaveButtonContextMenuInternal = "openSaveButtonContextMenuInternal", e.InvokeCustomActionInternal = "invokeCustomActionInternal", e.RequestQuitPlatformDialogInternal = "requestQuitPlatformDialogInternal", e.GetSavedWorkspace = "getSavedWorkspace", e.CreateSavedWorkspace = "createSavedWorkspace", e.UpdateSavedWorkspace = "updateSavedWorkspace", e.DeleteSavedWorkspace = "deleteSavedWorkspace", e.GetSavedWorkspaces = "getSavedWorkspaces", e.GetSavedWorkspacesMetadata = "getSavedWorkspacesMetadata", e.SaveWorkspace = "saveWorkspace", e.GetCurrentWorkspace = "getCurrentWorkspace", e.ApplyWorkspace = "applyWorkspace", e.RestoreLastSavedWorkspaceInternal = "restoreLastSavedWorkspaceInternal", e.SetActiveWorkspace = "setActiveWorkspace", e.IsBrowserInitialized = "isBrowserInitialized", e.Analytics = "analyticsInternal", e.GetLanguage = "getLanguage", e.GetLanguageResourcesInternal = "getLanguageResourcesInternal", e.SetLanguage = "setLanguage", e.GetDockProviderConfig = "getDockProviderConfig", e.SaveDockProviderConfig = "saveDockProviderConfig", e.HandleSaveModalOnPageClose = "handleSaveModalOnPageClose", e.ShouldPageClose = "shouldPageClose", e.ShouldWindowClose = "shouldWindowClose", e.CopyPage = "copyPage", e.HandlePageChanges = "handlePageChanges", e.MarkUnsavedPagesAsSavedInternal = "markUnsavedPagesAsSavedInternal", e.TrackRemovedTabInternal = "trackRemovedTabInternal", e.RestoreRemovedTabInternal = "restoreRemovedTabInternal", e.TrackVisitedSiteInternal = "trackVisitedSiteInternal", e.GetRecentlyVisitedSitesInternal = "getRecentlyVisitedSitesInternal", e.GetFrequentlyVisitedSitesInternal = "getFrequentlyVisitedSitesInternal", e.SearchSitesInternal = "searchSitesInternal", e.GetSearchProvidersInternal = "getSearchProvidersInternal", e.GetCuratedContentInternal = "getCuratedContentInternal", e.HandleRequestNavigationInternal = "handleRequestNavigationInternal", e.RefreshBookmarksInternal = "refreshBookmarksInternal", e.LaunchBookmarkInternal = "launchBookmarkInternal", e.GetNotificationsConfig = "getNotificationsConfig", e.UpdateDockFavoritesInternal = "updateDockFavoritesInternal", e.UpdateContentMenuInternal = "updateContentMenuInternal", e.LaunchDockEntryInternal = "launchDockEntryInternal", e.SetDockFavoritesOrderInternal = "setDockFavoritesOrderInternal", e.NavigateContentMenuInternal = "navigateContentMenuInternal", e.SetDefaultDockButtonsOrderInternal = "setDefaultDockButtonsOrderInternal", e.GetDockWorkspacesContextMenuInternal = "getDockWorkspacesContextMenuInternal", e.HandleDockWorkspacesMenuResponseInternal = "handleDockWorkspacesMenuResponseInternal", e.RemoveDockFavoriteInternal = "removeDockFavoriteInternal", e.AddDockFavoriteInternal = "addDockFavoriteInternal", e.FocusAndExpandSearchInternal = "focusAndExpandSearchInternal", e.SendUpdateVersionModalResponseInternal = "sendUpdateVersionModalResponseInternal", e.ShowUpdateVersionModalInternal = "showUpdateVersionModalInternal";
    })(fe || (fe = {}));
    const Zn = async (e) => fin.Platform.wrapSync(e).getClient(), Va = async (e) => {
      const n = await Zn(e), r = "Target is not a Workspace Platform. Target must call WorkspacePlatform.init";
      let s;
      try {
        s = await n.dispatch("isWorkspacePlatform");
      } catch {
        throw new Error(r);
      }
      if (typeof s == "boolean" && s) return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."), s;
      if (typeof s == "object" && s.isWorkspacePlatform) return s;
      throw new Error(r);
    }, ve = async (e) => (await Va(e), Zn(e)), Qe = async (e) => {
      const n = await Va(e);
      if (typeof n == "object" && (n == null ? void 0 : n.isBrowserInitialized) !== !0) throw new Error("Target is not a Browser-enabled Workspace Platform.");
      return Zn(e);
    }, $r = "dark", va = { [oe.Palette.brandPrimary]: "#0A76D3", [oe.Palette.brandPrimaryActive]: "#0A71C9", [oe.Palette.brandPrimaryHover]: "#0B84EB", [oe.Palette.brandPrimaryFocused]: oe.Color.white, [oe.Palette.brandPrimaryText]: oe.Color.white, [oe.Palette.statusSuccess]: oe.Color.functional1, [oe.Palette.statusWarning]: oe.Color.functional10, [oe.Palette.statusCritical]: oe.Color.functional7, [oe.Palette.statusActive]: oe.Color.functional3, [oe.Palette.contentBackground1]: "#0A76D3", [oe.Palette.contentBackground2]: "#000000", [oe.Palette.contentBackground3]: "#000000", [oe.Palette.contentBackground4]: "#000000", [oe.Palette.contentBackground5]: "#000000", [oe.Palette.borderNeutral]: oe.Color.silverGray }, jn = { ...va, [oe.Palette.background1]: oe.Color.white, [oe.Palette.background2]: oe.Color.lightGray1, [oe.Palette.background3]: oe.Color.lightGray2, [oe.Palette.background4]: oe.Color.lightGray3, [oe.Palette.background5]: oe.Color.lightGray4, [oe.Palette.background6]: oe.Color.lightGray5, [oe.Palette.brandSecondary]: oe.Color.lightGray4, [oe.Palette.brandSecondaryActive]: oe.Color.lightGray4Active, [oe.Palette.brandSecondaryHover]: oe.Color.lightGray4Hover, [oe.Palette.brandSecondaryFocused]: oe.Color.darkGray5, [oe.Palette.brandSecondaryText]: oe.Color.darkGray5, [oe.Palette.inputBackground]: oe.Color.lightGray3, [oe.Palette.inputColor]: oe.Color.darkGray5, [oe.Palette.inputPlaceholder]: oe.Color.darkGray2, [oe.Palette.inputDisabled]: oe.Color.neutralGray, [oe.Palette.inputFocused]: oe.Color.lightGray5, [oe.Palette.inputBorder]: oe.Color.neutralGray, [oe.Palette.textDefault]: oe.Color.darkGray5, [oe.Palette.textHelp]: oe.Color.darkGray3, [oe.Palette.textInactive]: oe.Color.neutralGray }, ka = { ...va, [oe.Palette.background1]: oe.Color.darkGray6, [oe.Palette.background2]: oe.Color.darkGray5, [oe.Palette.background3]: oe.Color.darkGray4, [oe.Palette.background4]: oe.Color.darkGray3, [oe.Palette.background5]: oe.Color.darkGray2, [oe.Palette.background6]: oe.Color.darkGray1, [oe.Palette.brandSecondary]: oe.Color.darkGray2, [oe.Palette.brandSecondaryActive]: oe.Color.darkGray2Active, [oe.Palette.brandSecondaryHover]: oe.Color.darkGray2Hover, [oe.Palette.brandSecondaryFocused]: oe.Color.white, [oe.Palette.brandSecondaryText]: oe.Color.white, [oe.Palette.inputBackground]: oe.Color.darkGray1, [oe.Palette.inputColor]: oe.Color.white, [oe.Palette.inputPlaceholder]: oe.Color.lightGray5, [oe.Palette.inputDisabled]: oe.Color.neutralGray, [oe.Palette.inputFocused]: oe.Color.lightGray5, [oe.Palette.inputBorder]: oe.Color.neutralGray, [oe.Palette.textDefault]: oe.Color.white, [oe.Palette.textHelp]: oe.Color.lightGray5, [oe.Palette.textInactive]: oe.Color.neutralGray }, Ua = [{ label: "OpenFin Default Light and Dark Theme", palettes: { light: { ...jn, backgroundPrimary: oe.Color.darkGray5 }, dark: { ...ka, backgroundPrimary: oe.Color.darkGray5 } } }], Sa = (e) => {
      const { background: n, foreground: r } = e;
      return { background: n, foreground: r ?? "#FFFFFF" };
    }, yt = (e, n) => {
      var r, s, c;
      return { icons: { symbol: ((c = (s = (r = e.brand) == null ? void 0 : r.icons) == null ? void 0 : s[n]) == null ? void 0 : c.symbol) || Mn[n].symbol } };
    }, Pa = (e) => {
      const { light: n, dark: r } = "palettes" in e ? e.palettes : { light: e.palette, dark: e.palette }, s = Rn(ka, r), c = Rn(jn, n), w = ((Q, J) => {
        const ae = { ...Q }, ue = { ...J };
        let Ce = J.backgroundPrimary ? hr(J.backgroundPrimary, !0) : {}, Oe = Q.backgroundPrimary ? hr(Q.backgroundPrimary) : {};
        return Ce = { ...Ce, ...ue }, Oe = { ...Oe, ...ae }, { light: { ...J, ...Ce }, dark: { ...Q, ...Oe } };
      })(r, n), S = { ...(0, oe.createTheme)({ ...s, ...w == null ? void 0 : w.dark }), brand: yt(e, "dark") }, b = { ...(0, oe.createTheme)({ ...c, ...w == null ? void 0 : w.light }), brand: yt(e, "light") }, { light: F, dark: V } = ((Q) => {
        const J = Object.keys(Q.notificationIndicatorColors ?? {});
        if (J != null && J.length) {
          const ae = {}, ue = {};
          return J.forEach((Ce) => {
            const Oe = Q.notificationIndicatorColors[Ce];
            "background" in Oe ? (ae[Ce] = Sa(Oe), ue[Ce] = Sa(Oe)) : (ae[Ce] = Sa(Oe.dark ?? Oe.light), ue[Ce] = Sa(Oe.light ?? Oe.dark));
          }), { light: ue, dark: ae };
        }
        return { light: null, dark: null };
      })(e);
      return S.notificationIndicatorColors = V, b.notificationIndicatorColors = F, { dark: S, light: b };
    }, Qn = async (e) => {
      const { themes: n, selectedScheme: r } = await (async (w) => {
        var b, F, V;
        const S = (V = (F = (b = fin == null ? void 0 : fin.__internal_) == null ? void 0 : b.initialOptions) == null ? void 0 : F.workspacePlatform) == null ? void 0 : V._themeData;
        return !S || w.uuid !== ye.uuid ? { themes: await k(w).Theme.getThemes(), selectedScheme: await k(w).Theme.getSelectedScheme() } : S;
      })(e);
      var s, c;
      return (s = n != null && n.length ? n : Ua, c = r, s.map((w) => {
        const S = "palettes" in w ? w.default : $r, { light: b, dark: F } = Pa(w);
        return { label: w.label, logoUrl: w.logoUrl, theme: { dark: F, light: b }, defaultScheme: c ?? S };
      }))[0];
    }, Kn = async (e) => {
      const n = await ve(e || fin.me.identity), r = await n.dispatch(fe.GetSelectedScheme, void 0);
      return r === Me.System ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r;
    }, wr = async (e, n) => {
      var w, S;
      const r = await Qn(fin.me.identity), s = await Kn(fin.me.identity) === Me.Dark, c = r == null ? void 0 : r.theme;
      return ((S = (w = c == null ? void 0 : c[s ? Me.Dark : Me.Light]) == null ? void 0 : w.palette) == null ? void 0 : S[e]) || n;
    };
    function yr(e) {
      return function(n, r) {
        const s = {};
        for (const c of r) c in n && (s[c] = n[c]);
        return s;
      }(e, _n()(["defaultLeft", "defaultTop", "defaultCentered", "saveWindowState", "taskbarIconGroup"]));
    }
    function xa() {
      let e, n;
      return { promise: new Promise((r, s) => {
        e = r, n = s;
      }), resolve: e, reject: n };
    }
    const Xn = bl, ea = (e) => ({ setItem: (n, r) => {
      localStorage.setItem(`${e}-${n}`, r);
    }, getItem: (n) => localStorage.getItem(`${e}-${n}`), removeItem: (n) => localStorage.removeItem(`${e}-${n}`) });
    let ja;
    function br() {
      return ja || (ja = ea(De.uuid)), ja;
    }
    const ct = (e, n) => br().setItem(e, n), Ca = (e) => br().getItem(e), bo = (e) => br().removeItem(e);
    var vr;
    (function(e) {
      e.CurrentWorkspaceId = "currentWorkspaceId", e.LastFocusedBrowserWindow = "lastFocusedBrowserWindow", e.MachineName = "machineName", e.NewTabPageLayout = "NewTabPageLayout", e.NewTabPageSort = "NewTabPageSort", e.DockPosition = "DockPosition", e.SelectedColorScheme = "SelectedColorScheme", e.ThemePaletteSheet = "ThemePaletteSheet", e.HasMovedStore = "HasMovedStore", e.PageDragState = "BrowserPageDragState", e.ThemePaletteDefaultScheme = "ThemePaletteDefaultScheme";
    })(vr || (vr = {}));
    const bt = vr, yn = (e) => e + "-" + fin.me.uuid, Ma = (e, n) => {
      const r = st && at && new Xn.Dexie(e);
      return r && r.version(0.1).stores({ [n]: "" }), r;
    }, In = (e, n) => {
      const r = Ma(yn(e), n), s = Ma(e, n);
      if (!r || !s) throw new Error("Unable to migrate store - IndexDB not supported");
      return (async (c, w, S) => {
        if (!c[S]) return void console.warn(`Legacy store ${S} not found, skipping migration`);
        const b = Ca(bt.HasMovedStore), F = b ? JSON.parse(b) : {};
        if (F && F[S]) return;
        F[S] = !0, ct(bt.HasMovedStore, JSON.stringify(F));
        const V = await c[S].toArray();
        await w[S].bulkPut(V);
      })(s, r, e), r;
    }, Ka = "dock3-provider-config", $n = st && at && new Xn.Dexie(yn("dock3-provider-config"));
    $n && $n.version(0.1).stores({ [Ka]: "" });
    var Ct, jt, fn, An, bn = function(e, n, r, s, c) {
      if (typeof n == "function" ? e !== n || !0 : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return n.set(e, r), r;
    }, _t = function(e, n, r, s) {
      if (typeof n == "function" ? e !== n || !s : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : n.get(e);
    };
    class Dn {
      static getOverrideConstructor(...n) {
        return class extends Dn {
          constructor() {
            super(...n);
          }
        };
      }
      constructor(n, r) {
        if (Ct.set(this, void 0), jt.set(this, void 0), fn.set(this, null), An.set(this, xa()), Dn.instance) throw new Error("Dock3Provider has already been initialized.");
        Dn.instance = this, bn(this, Ct, n), bn(this, jt, r), this.registerChannelActions();
      }
      async launchEntry(n) {
      }
      get ready() {
        return _t(this, An, "f").promise;
      }
      async bookmarkContentMenuEntry(n) {
      }
      get config() {
        return _t(this, Ct, "f");
      }
      set config(n) {
        bn(this, Ct, n);
      }
      async updateConfig(n) {
        await this.handleConfigChange(n);
      }
      async shutdown() {
        await Promise.all([_t(this, jt, "f").destroy(), this.getWindowSync().close(!0)]), Dn.instance = null;
      }
      async saveConfig({ config: n }) {
        bn(this, Ct, n), await async function(r) {
          if (!$n) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
          await $n[Ka].put(r, "latest");
        }(n);
      }
      async handleConfigChange(n) {
        _t(this, fn, "f") && await _t(this, jt, "f").dispatch(_t(this, fn, "f"), "handle-dock-config-updated", n);
      }
      async loadConfig() {
        const n = await async function() {
          if (!$n) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
          try {
            return await $n[Ka].get("latest");
          } catch (r) {
            return void console.warn("Failed to retrieve Dock provider config from IndexedDB", r);
          }
        }();
        return n && bn(this, Ct, n), _t(this, Ct, "f");
      }
      getWindowSync() {
        return fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: Lt });
      }
      registerChannelActions() {
        _t(this, jt, "f").register("launch-entry", this.launchEntry.bind(this)), _t(this, jt, "f").register("save-config", this.saveConfig.bind(this)), _t(this, jt, "f").register("bookmark-content-menu-entry", this.bookmarkContentMenuEntry.bind(this)), _t(this, jt, "f").onConnection((n) => {
          n.name === Lt && bn(this, fn, n);
        }), _t(this, jt, "f").register("ready", async (n, r) => {
          var s;
          if (((s = _t(this, fn, "f")) == null ? void 0 : s.endpointId) !== r.endpointId) throw new Error(`Dock3Provider: 'ready' action received from unexpected client ${r.name} (${r.uuid})`);
          _t(this, An, "f").resolve();
        }), _t(this, jt, "f").onDisconnection((n) => {
          var r;
          ((r = _t(this, fn, "f")) == null ? void 0 : r.endpointId) === n.endpointId && (bn(this, fn, null), bn(this, An, xa()));
        });
      }
    }
    async function vn(e) {
      const { config: n, override: r } = e;
      if (Dn.instance) throw new Error("Dock3Provider has already been initialized.");
      const s = await fin.InterApplicationBus.Channel.create(Ht()), c = new (r(Dn.getOverrideConstructor(n, s)))();
      return await c.loadConfig(), await async function(w, S, b, F) {
        var V, Q, J;
        if (!await Xt({ uuid: ye.uuid, name: w })) {
          let ae;
          ae = typeof ((V = b.dockPosition) == null ? void 0 : V.left) == "number" || typeof (F == null ? void 0 : F.defaultLeft) == "number" ? (Q = b.dockPosition) == null ? void 0 : Q.left : (await Jn(ye)).left - Qt / 2;
          const ue = { name: w, url: S + $.EnterpriseDock, autoShow: !0, frame: !1, smallWindow: !0, saveWindowState: !1, defaultHeight: gt, defaultWidth: Qt, includeInSnapshots: !1, defaultTop: ((J = b.dockPosition) == null ? void 0 : J.top) ?? cn, defaultLeft: ae, workspacePlatform: { windowType: b.windowType, ...b }, throttling: "disabled", resizable: !1, maximizable: !1, backgroundColor: await wr("background1"), ...yr(F ?? {}) };
          await fin.Window.create(Vt(ue));
        }
      }(Lt, await dn(), c.config, e.windowOptions), await c.ready, c;
    }
    Ct = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Dn.instance = null;
    const Mt = async (e) => {
      var s;
      const n = e ? fin.Window.wrapSync(e) : fin.Window.getCurrentSync(), r = await n.getOptions();
      return ((s = r.workspacePlatform) == null ? void 0 : s.windowType) && r.workspacePlatform.windowType === "enterprise";
    }, kr = (e) => {
      var r, s;
      return ((s = (r = e == null ? void 0 : e.defaultWindowOptions) == null ? void 0 : r.workspacePlatform) == null ? void 0 : s.windowType) === "enterprise";
    };
    let Ia;
    const Aa = (e) => {
      if (e) try {
        return new URL(e).pathname.includes($.EnterpriseLandingPage.replace(/\/$/, ""));
      } catch {
        console.error("error parsing url: %O", e);
      }
      return !1;
    };
    var On;
    (function(e) {
      e.Browser = "Browser", e.Dock = "Dock", e.EnterpriseDock = "EnterpriseDock", e.Home = "Home", e.Notification = "Notification", e.Storefront = "Storefront", e.Platform = "Platform", e.Theming = "Theming", e.Microflow = "Microflow";
    })(On || (On = {}));
    const Ea = async (e, n, r = "workspace-licensing") => {
      const s = { apiVersion: n.apiVersion || we, componentName: e, componentVersion: n.componentVersion || we, allowed: n.allowed, rejectionCode: n.rejectionCode };
      fin.System.registerUsage({ type: r, data: s });
    };
    let Hr = !1;
    const Hn = /* @__PURE__ */ new Map(), Gr = (e) => {
      let n = Hn.get(e.uuid);
      return n || (n = k(e), n.once("closed", () => {
        Hn.delete(e.uuid);
      }), Hn.set(e.uuid, n)), n;
    }, zr = async (e, n) => {
      try {
        await e._raiseAnalytics([n]);
      } catch (r) {
        console.error("failed to raise analytics event", r);
      }
    }, en = async (e) => {
      await zr(Gr(fin.me.identity), { source: "Browser", ...e });
    };
    let ta;
    const Ta = async (e) => {
      ta || (ta = new TextEncoder());
      const n = ta.encode(e), r = await window.crypto.subtle.digest("SHA-256", n);
      return Array.from(new Uint8Array(r)).map((s) => s.toString(16).padStart(2, "0")).join("");
    };
    function Sr(e) {
      return e && typeof e == "object" && !Array.isArray(e);
    }
    function na(e, ...n) {
      if (!n.length) return e;
      const r = n.shift();
      return Sr(e) && Sr(r) && Object.entries(r).forEach(([s, c]) => {
        if (Sr(c)) return e[s] || (e[s] = {}), na(e[s], c);
        e[s] = c;
      }), na(e, ...n);
    }
    const vo = Nl;
    var $a = u.n(vo);
    function zt() {
      return typeof crypto !== void 0 && "randomUUID" in crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    function Pr() {
      return localStorage.getItem(bt.MachineName) ?? "unknown";
    }
    let aa;
    async function _a() {
      return aa || (aa = await fin.System.getMachineId()), aa;
    }
    const Ha = (e) => {
      var n;
      if (Array.isArray((n = e.workspacePlatform) == null ? void 0 : n.pages) && (e.layoutSnapshot || e.layout)) {
        const r = e.workspacePlatform.pages.find((s) => s.isActive);
        if (r) {
          const s = e.layoutSnapshot ? e.layoutSnapshot.layouts[r.layoutContainerKey] : e.layout;
          if (s) if (r.isLocked) {
            const c = H(s, r.layout);
            r.layout = c, e.layout = c;
          } else r.layout = s, e.layout = s;
        }
      }
      return e;
    };
    async function Ga(e) {
      var s;
      const n = e || await fin.Platform.getCurrentSync().getSnapshot();
      if ((s = n.snapshotDetails) != null && s.machineId) return n;
      const r = Pr();
      return { ...n, snapshotDetails: { ...n.snapshotDetails, machineId: await _a(), machineName: r } };
    }
    const ko = async (e) => ({ ...e, layoutDetails: { machineId: await _a(), machineName: Pr() } }), kn = async (e, n) => ({ pageId: zt(), title: e, layout: await ko(n), isReadOnly: !1 }), za = async (e) => {
      const n = await kn(e.title, D(e.layout));
      return e.panels && (n.panels = e.panels.map((r) => ({ ...r, viewOptions: T(r.viewOptions) }))), { ...e, ...n };
    }, qa = (e) => {
      const n = fin.Platform.Layout.wrapSync(e);
      return { show: async () => {
        const r = await n.getConfig(), { settings: s, dimensions: c } = r, w = await Mt(e);
        await n.replace({ ...r, settings: { ...s, hasHeaders: !0, reorderEnabled: !0 }, dimensions: { ...c, headerHeight: w ? 28 : 30 } });
      }, hide: async (r) => {
        var S;
        const s = await n.getConfig(), { settings: c, dimensions: w } = await s;
        await n.replace({ ...s, settings: { ...c, hasHeaders: !1, reorderEnabled: ((S = r == null ? void 0 : r.settings) == null ? void 0 : S.reorderEnabled) ?? !1 }, dimensions: { ...w, headerHeight: 0 } });
      }, isShowingTabs: async () => {
        try {
          const r = await n.getConfig(), { settings: s } = await r;
          return s.hasHeaders;
        } catch (r) {
          return console.error("failed to get layout config: ", r), !0;
        }
      } };
    }, an = "of-workspace-", Wn = new class {
      mark(e) {
        performance.mark(`${an}${e}`);
      }
      markStart(e) {
        performance.mark(`${an}${e}-start`);
      }
      markEnd(e) {
        performance.mark(`${an}${e}-end`);
      }
      markEndAndMeasure(e) {
        performance.mark(`${an}${e}-end`);
        try {
          return performance.measure(`${an}${e}`, `${an}${e}-start`, `${an}${e}-end`);
        } catch {
        }
      }
      markAndMeasure(e, n) {
        performance.mark(`${an}${e}`);
        try {
          return performance.measure(`${an}${e}-measure`, `${an}${n}-start`, `${an}${e}`);
        } catch {
        }
      }
      reportWorkspacePerformanceEntries() {
        return performance.getEntriesByType("measure").filter((e) => e.name.startsWith(an));
      }
      reportWorkspacePerformance() {
        return this.reportWorkspacePerformanceEntries().map((e) => ({ name: e.name.replace(`${an}`, "").replace("-measure", ""), duration: e.duration }));
      }
    }(), qt = () => {
      const e = `browser-context-menu-startup-${zt()}`;
      return Wn.markStart(e), e;
    }, ra = (e) => {
      Wn.markAndMeasure("browser-context-menu-called", e);
    }, oa = (e) => {
      fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
        ((n) => {
          Wn.markAndMeasure("browser-context-menu-shown", n);
        })(e);
      });
    }, qr = (e, n) => n ? `${n}-${e.uuid}-${e.name}` : `__browser_window__-${e.uuid}-${e.name}`, ia = /* @__PURE__ */ new Map(), xr = (e) => (ia.has(e) || ia.set(e, pn(e)), ia.get(e)()), It = (e, n) => {
      const r = qr(e, n);
      return xr(r);
    };
    var sa, Ra, hn, En, Bn, ca;
    (function(e) {
      e.CloseBrowserWindow = "close-browser-window", e.QuitPlatform = "quit-platform", e.ClosePage = "close-page", e.AddToChannel = "add-to-channel", e.RemoveFromChannel = "remove-from-channel", e.OpenSaveModalInternal = "open-save-modal-internal", e.DuplicatePage = "duplicate-page", e.SetSelectedScheme = "set-selected-scheme", e.ShowBrowserIndicator = "show-browser-indicator", e.SetSelectedLanguage = "set-selected-language", e.RefreshBookmarksInternal = "refresh-bookmarks", e.GetLayoutsWithSelectedViewsInternal = "get-layouts-with-selected-views", e.FocusAndExpandSearchInternal = "focus-and-expand-search";
    })(sa || (sa = {})), function(e) {
      e.GetPages = "get-pages", e.GetActivePageForWindow = "get-active-page-for-window", e.AttachPagesToWindow = "attach-pages-to-window", e.DetachPagesFromWindow = "detach-pages-from-window", e.SetActivePageForWindow = "set-active-page-for-window", e.RenamePage = "rename-page", e.ReorderPagesForWindow = "reorder-pages-for-window", e.UpdatePageForWindow = "update-page-for-window", e.UpdatePagesWindowOptions = "update-pages-window-options", e.IsDetachingPages = "is-detaching-pages", e.IsActivePageChanging = "is-active-page-changing";
    }(Ra || (Ra = {})), function(e) {
      e.GetApps = "get-apps", e.GetCuratedContent = "get-curated-content", e.GetRecentlyVisited = "get-recently-visited", e.GetSearchProviders = "get-search-providers";
    }(hn || (hn = {})), function(e) {
      e.CreateBookmarkNode = "create-bookmark-node", e.GetBookmarkNode = "get-bookmark-node", e.SearchBookmarkNodes = "search-bookmark-nodes", e.UpdateBookmarkNode = "update-bookmark-node", e.DeleteBookmarkNode = "delete-bookmark-node";
    }(En || (En = {})), function(e) {
      e.UpdateFavoriteEntries = "update-favorite-entries", e.UpdateContentMenu = "update-content-menu", e.NavigateContentMenu = "navigate-content-menu";
    }(Bn || (Bn = {})), function(e) {
      e.SendUpdateVersionModalResponse = "send-update-version-modal-response";
    }(ca || (ca = {}));
    const At = { ...sa, ...Ra, ...Bn }, ua = pn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-bookmarks`), Cr = (e) => ({ identity: e, openfinWindow: fin.Window.wrapSync(e), _bookmarks: { _createBookmarkNode: async (n) => (async (r) => (await ua()).dispatch(En.CreateBookmarkNode, r))(n), _getBookmarkNode: async (n) => (async (r) => (await ua()).dispatch(En.GetBookmarkNode, r))(n), _searchBookmarkNodes: async (n) => (async (r) => (await ua()).dispatch(En.SearchBookmarkNodes, r))(n), _updateBookmarkNode: async (n) => (async (r) => (await ua()).dispatch(En.UpdateBookmarkNode, r))(n), _deleteBookmarkNode: async (n) => (async (r) => (await ua()).dispatch(En.DeleteBookmarkNode, r))(n) }, getPages: async () => (await Qe(e)).dispatch(fe.GetPagesForWindow, e), getPage: async (n) => (await Qe(e)).dispatch(fe.GetPageForWindow, { identity: e, pageId: n }), addPage: async (n) => v().Browser.wrapSync(e)._addPage(n), _addPage: async (n, r) => {
      const s = await Qe(e), c = { identity: e, page: n, insertionIndex: r == null ? void 0 : r.index, multiInstanceViewBehavior: r == null ? void 0 : r.multiInstanceViewBehavior };
      return s.dispatch(fe.AddPage, c);
    }, _addPages: async (n, r) => {
      const s = await Qe(e), c = n.map(({ page: S, opts: b }) => ({ ...S, multiInstanceViewBehavior: (b == null ? void 0 : b.multiInstanceViewBehavior) || "duplicate" })), w = { identity: e, pages: c, ...r };
      return s.dispatch(fe.AttachPagesToWindow, w);
    }, removePage: async (n) => (await Qe(e)).dispatch(fe.DetachPagesFromWindow, { identity: e, pageIds: [n] }), reparentPage: async (n) => v().Browser.wrapSync(e)._reparentPage(n), _reparentPage: async (n) => {
      const { pageId: r } = n, s = await Qe(e), c = (await s.dispatch(fe.GetAllAttachedPages, void 0)).find(({ pageId: S }) => S === r);
      if (!c) throw new Error(`Reparent Page Error: Target page with pageId ${r} not found`);
      c.multiInstanceViewBehavior = "reparent";
      const w = { identity: e, pages: [c], insertionIndex: n.index };
      return s.dispatch(fe.AttachPagesToWindow, w);
    }, setActivePage: async (n) => (await Qe(e)).dispatch(fe.SetActivePage, { identity: e, pageId: n }), updatePage: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.UpdatePageForWindow, n);
    }, reorderPages: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.ReorderPagesForWindow, n);
    }, _openGlobalContextMenu: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.OpenGlobalContextMenuInternal, n);
    }, replaceToolbarOptions: async (n) => {
      await Qe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { toolbarOptions: n } });
    }, replaceWindowStateButtonOptions: async (n) => {
      await Qe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { windowStateButtonOptions: n } });
    }, updateBrowserWindowTitle: async (n) => {
      const r = fin.Window.wrapSync(e);
      typeof n != "string" ? await r.updateOptions({ workspacePlatform: { title: n } }) : console.warn("Type string for window title is deprecated, please use WindowTitle type instead", n);
    }, _openViewTabContextMenu: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.OpenViewTabContextMenuInternal, n);
    }, _openPageTabContextMenu: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.OpenPageTabContextMenuInternal, n);
    }, _openSaveModal: async (n) => (await Qe(e), (await It(e)).dispatch(At.OpenSaveModalInternal, n)), _getLayoutsWithSelectedViews: async () => (await It(e)).dispatch(At.GetLayoutsWithSelectedViewsInternal, e), _openSaveButtonContextMenu: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.OpenSaveButtonContextMenuInternal, n);
    }, _addDefaultPage: async (n) => {
      const r = await Qe(e);
      return n.identity = e, r.dispatch(fe.AddDefaultPage, n);
    }, _trackRemovedTab: async (n) => (await Qe(e)).dispatch(fe.TrackRemovedTabInternal, n), _restoreRemovedTab: async (n) => (await Qe(e)).dispatch(fe.RestoreRemovedTabInternal, n), _trackVisitedSite: async (n) => (await Qe(e)).dispatch(fe.TrackVisitedSiteInternal, n), _getRecentlyVisitedSites: async (n) => (await Qe(e)).dispatch(fe.GetRecentlyVisitedSitesInternal, n), _getFrequentlyVisitedSites: async (n) => (await Qe(e)).dispatch(fe.GetFrequentlyVisitedSitesInternal, n), _searchSites: async (n) => (await Qe(e)).dispatch(fe.SearchSitesInternal, { identity: e, req: n }), _getSearchProviders: async () => (await Qe(e)).dispatch(fe.GetSearchProvidersInternal, { identity: e }), _getCuratedContent: async (n) => (await Qe(e)).dispatch(fe.GetCuratedContentInternal, { identity: e, req: n }), _handleRequestNavigation: async (n) => (await Qe(e)).dispatch(fe.HandleRequestNavigationInternal, n), _sendUpdateVersionModalResponse: async (n) => (await Qe(e)).dispatch(fe.SendUpdateVersionModalResponseInternal, n) }), Mr = (e) => {
      const n = fin.Platform.wrapSync(e);
      return { wrapSync: (r) => Cr(r), createWindow: async (r) => {
        const s = (() => {
          const w = `browser-window-startup-${zt()}`;
          return Wn.markStart(w), w;
        })();
        ((w) => {
          fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
            Wn.markAndMeasure("browser-window-shown", w);
          });
        })(s), await Qe(e);
        const c = await n.createWindow(r);
        return ((w) => {
          Wn.markAndMeasure("browser-window-started", w);
        })(s), Cr(c.identity);
      }, getAllAttachedPages: async () => (await Qe(e)).dispatch(fe.GetAllAttachedPages, void 0), getAllWindows: async () => (await Qe(e), (await Ge()).map((r) => Cr(r.identity))), getUniquePageTitle: async (r) => (await Qe(e)).dispatch(fe.GetUniquePageTitle, r), getLastFocusedWindow: async () => (await Qe(e)).dispatch(fe.GetLastFocusedBrowserWindow, void 0), getPageByViewIdentity: async (r) => (await Qe(e)).dispatch(fe.GetPageByViewIdentity, r) };
    }, Ja = (e, n = 0) => {
      let r, s, c = !1;
      const w = async (S) => {
        const b = await e(...S);
        if (c) {
          await new Promise((V) => setTimeout(V, n));
          const F = r;
          return r = void 0, c = !1, w(F);
        }
        return b;
      };
      return (...S) => (s ? (c = !0, r = S) : s = w(S).catch((b) => {
        throw console.error("makeDebouncedFunc", b), b;
      }).finally(() => {
        s = void 0;
      }), s);
    };
    var Jr;
    (function(e) {
      e.Home = "/home", e.Browser = "/browser", e.Enterprise = "/enterprise", e.Provider = "/provider", e.Storefront = "/storefront", e.Dock = "/dock";
    })(Jr || (Jr = {}));
    function Ir(e, n) {
      return async (r, ...s) => {
        e.has(r) && e.get(r).forEach((c) => c(...s)), n && await n({ event: r, payload: s });
      };
    }
    function Ya(e, n) {
      return n && n((r) => {
        const { event: s, payload: c } = r;
        e.has(s) && e.get(s).forEach((w) => w(...c));
      }), (r, s) => {
        e.has(r) || e.set(r, /* @__PURE__ */ new Set()), e.get(r).add(s);
      };
    }
    function So(e) {
      return (n, r) => {
        e.has(n) || e.set(n, /* @__PURE__ */ new Set());
        const s = e.get(n), c = (...w) => {
          r(...w), s.delete(c);
        };
        s.add(c);
      };
    }
    function Yr(e) {
      return (n, r) => {
        e.has(n) && e.get(n).delete(r);
      };
    }
    const Po = { name: h.BrowserMenu, alwaysOnTop: !0, autoShow: !0, frame: !1, resizable: !1, backgroundColor: "#2f3136", smallWindow: !0, showTaskbarIcon: !1, backgroundThrottling: !1, saveWindowState: !1 };
    function Za(e) {
      const n = { ...Po, ...e };
      return n.url = function(r, s) {
        if (!Dt) throw new Error("resolveAbsolutePath can only be used in a window");
        const c = window.location;
        if (/^(?:[a-z]+:)?\/\//i.test(r)) return r;
        const w = `${c.protocol}//${c.hostname}`;
        return new URL(r, w).href;
      }(n.url ?? ""), n;
    }
    const Da = function(e) {
      const n = /* @__PURE__ */ new Map();
      return { emit: Ir(n, (r) => at && fin.InterApplicationBus.publish(e, r)), addListener: Ya(n, (r) => at && fin.InterApplicationBus.subscribe({ uuid: fin.me.uuid }, e, r)), addListenerWithUUID: (r) => Ya(n, (s) => at && fin.InterApplicationBus.subscribe({ uuid: r }, e, s)), removeListener: Yr(n), once: So(n) };
    }("window.menu"), Oa = (e, n) => fin.Window.wrapSync(e).updateOptions({ opacity: n }), Qa = (e) => Da.emit("response", e), Ar = Ja(async () => (await rn()).getChildWindows(), 500), la = /* @__PURE__ */ new Map();
    async function Zr(e, n, r) {
      var b, F;
      const s = Za(e), c = await Qn(fin.me.identity), w = await Kn(fin.me.identity) === Me.Dark, S = c == null ? void 0 : c.theme;
      return s.backgroundColor = ((F = (b = S == null ? void 0 : S[w ? Me.Dark : Me.Light]) == null ? void 0 : b.palette) == null ? void 0 : F.inputBackground) || s.backgroundColor, la.has(s.name) ? la.get(s.name) : new Promise((V) => {
        Da.once("ready", async (J) => {
          if (J.name === s.name) {
            const ae = await la.get(s.name);
            s.preventBlur || ae.once("blurred", async () => {
              if (Oa(J, 0), ae.hide(), Qa({ name: s.name, data: { actionName: "Cancel" } }), ue = ae.identity.name, [h.BrowserSaveMenu, h.DockSaveWorkspaceMenu, h.DesktopSignalsModal].includes(ue)) {
                const Ce = await ae.getOptions();
                Ce.customContext !== "submitting" && Ce.customContext !== "error" && ae.close();
              } else ae.identity.name.startsWith(h.BrowserMenu) && ae.close();
              var ue;
            }), setTimeout(async () => {
              await Oa(J, 1), (await fin.Window.wrapSync(J).getOptions()).opacity !== 1 && Oa(J, 1);
            }), V(ae);
          }
        });
        const Q = (async () => {
          const J = await fin.Platform.getCurrentSync().createWindow(Vt({ ...s, opacity: 0, url: n || s.url, defaultLeft: r == null ? void 0 : r.left, defaultTop: r == null ? void 0 : r.top, defaultWidth: r == null ? void 0 : r.width, defaultHeight: r == null ? void 0 : r.height, workspacePlatform: { preventBlur: e.preventBlur } }, !0));
          return J.once("closed", () => {
            la.delete(s.name);
          }), J;
        })();
        la.set(s.name, Q);
      });
    }
    async function Qr(e, n) {
      const r = Za(e), s = { top: r.top, left: r.left, width: r.defaultWidth || r.width, height: r.defaultHeight || r.height };
      return n.set("parentName", fin.Window.getCurrentSync().identity.name), { name: r.name, bounds: s, route: `${r.url}#${n.toString()}` };
    }
    async function Er({ options: e, parameters: n }) {
      const r = n ?? new URLSearchParams(), s = Za(e), { name: c, modalParentIdentity: w } = s;
      if (!r.has("isEnterprise")) {
        const b = `${await (async (F) => (Ia || (Ia = await Mt(F)), Ia))(w)}`;
        r.set("isEnterprise", b);
      }
      let S = await async function(b) {
        return (await Ar()).find((F) => F.identity.name === b);
      }(c);
      if (S) await async function(b, F) {
        const { name: V, bounds: Q, route: J } = await Qr(b, F), ae = { uuid: fin.me.identity.uuid, name: V }, ue = fin.Window.wrapSync(ae);
        await Promise.all([ue.hide(), Oa(ae, 0), ue.setBounds(Q)]), b.preventBlur || ue.once("blurred", () => {
          Oa(ae, 0), ue.hide(), Qa({ name: ae.name, data: { actionName: "Cancel" } });
        }), Da.emit("update", V, Q, J), await Qa({ name: V, data: { actionName: "Cancel" } });
      }(s, r);
      else {
        const { route: b, bounds: F } = await Qr(e, r);
        S = await Zr({ ...s }, b, F);
      }
      return S;
    }
    const da = async ({ options: e, content: n, parameters: r }) => {
      var S;
      const s = r ?? new URLSearchParams();
      s.set("content", JSON.stringify({ ...n, invocationId: zt() }));
      const c = { ...e, name: `${e.name}--${((S = e.modalParentIdentity) == null ? void 0 : S.name) ?? ""}` }, w = await Er({ options: c, parameters: s });
      return new Promise((b) => {
        Da.once("response", async (F) => {
          F.name === c.name && (b({ data: F.data }), c != null && c.closeOnResponse && w.close());
        });
      });
    };
    let pa;
    async function Tn(e) {
      return (await (pa || (pa = pn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-modal`)()), pa)).dispatch(ca.SendUpdateVersionModalResponse, e);
    }
    const Bt = async (e) => {
      const n = de(e), r = await n.getBounds(), s = x(r), c = le(s, { height: 240, width: 432 });
      return Er({ options: { smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: h.DesktopSignalsModal, url: await Kt() + $.DesktopSignalsModal, defaultWidth: 432, defaultHeight: 240, preventBlur: !1, ...c }, parameters: new URLSearchParams({ title: "Desktop Signals Modal" }) });
    }, Xa = (e) => ({ createPage: async (n) => (await Qe(e)).dispatch(fe.CreateSavedPageInternal, n), deletePage: async (n) => (await Qe(e)).dispatch(fe.DeleteSavedPageInternal, n), updatePage: async (n) => (await Qe(e)).dispatch(fe.UpdateSavedPageInternal, n), getPage: async (n) => (await Qe(e)).dispatch(fe.GetSavedPage, n), getPages: async (n) => (await Qe(e)).dispatch(fe.GetSavedPages, n), savePage: async (n) => (await Qe(e)).dispatch(fe.SavePage, n), createWorkspace: async (n) => (await ve(e)).dispatch(fe.CreateSavedWorkspace, n), deleteWorkspace: async (n) => {
      const r = v(), s = await r.getCurrentWorkspace();
      if (s.workspaceId === n) throw new Error(`Cannot delete current active workspace ${s.title}`);
      return (await ve(e)).dispatch(fe.DeleteSavedWorkspace, n);
    }, updateWorkspace: async (n) => (await ve(e)).dispatch(fe.UpdateSavedWorkspace, n), getWorkspace: async (n) => (await ve(e)).dispatch(fe.GetSavedWorkspace, n), getWorkspaces: async (n) => (await ve(e)).dispatch(fe.GetSavedWorkspaces, n), getWorkspacesMetadata: async (n) => (await ve(e)).dispatch(fe.GetSavedWorkspacesMetadata, n), saveWorkspace: async (n) => (await ve(e)).dispatch(fe.SaveWorkspace, n), getDockProviderConfig: async (n) => (await ve(e)).dispatch(fe.GetDockProviderConfig, n), saveDockProviderConfig: async (n) => (await ve(e)).dispatch(fe.SaveDockProviderConfig, n) });
    var on;
    (function(e) {
      e.UpdatePlatformThemeScheme = "update-platform-theme-scheme";
    })(on || (on = {}));
    const xo = pn("of-workspace-notifications-sync"), Tr = Me.Dark, _r = (e) => Object.entries(e).reduce((n, [r, s]) => `${n}--workspace-palette-${r}: ${s};`, ""), Gn = (e, n) => {
      const r = !!e.contentBackground5 && e.contentBackground5 !== "#000000", s = !!e.contentBackground4 && e.contentBackground4 !== "#000000", c = Cn(e.textDefault), w = Cn(e.textInactive), S = c.rgb, b = w.rgb, F = c.alpha ? parseFloat(c.alpha.toString()) : 1, V = w.alpha ? parseFloat(w.alpha.toString()) : 1;
      return { dockExpandedContainerBorderColor: r ? e.contentBackground5 : e.background4, dockExpandedContainerBorderRadius: r && n ? "0" : "10px", dockExpandedContainerBackground: s ? e.contentBackground4 : e.background1, fillerBackgroundColor: s ? e.contentBackground4 : "inherit", dockCompanionContainerBackground: s ? e.contentBackground4 : "inherit", dockComponentContainerBackground: r ? e.contentBackground5 : e.background5, styledDropdownActiveBackground: `${r ? e.contentBackground5 : e.background4}`, contentMenuWrapperInternalDivBorderColor: r ? e.contentBackground5 : e.background5, contentMenuItemContainerActiveBackground: r ? e.contentBackground5 : e.background3, contentMenuItemContainerHoverBackground: r ? e.contentBackground5 : e.background2, contentMenuHeaderBorderColor: r ? e.contentBackground5 : e.background5, dockCompanionSeparatorBorderColor: r ? e.contentBackground5 : e.background3, dockComponentContainerBorderColor: r ? e.contentBackground5 : e.background5, companionDockButtonActiveBackground: r ? e.contentBackground5 : e.background4, companionDockButtonHoverBackground: r ? e.contentBackground5 : e.background4, "computed-scrollbar-thumb-alpha": F, "computed-scrollbar-track-alpha": V, "scrollbar-thumb-rgb": S, "scrollbar-track-rgb": b };
    }, er = (e, n, r) => ({ selectedTab: n === "dark" ? e.background3 : e.background1, ...Gn(e, r) }), Sn = new class {
      constructor(e) {
        this.providerStorage = e, this.getVarsByScheme = (n) => n === "dark" ? this.darkPaletteVars : this.lightPaletteVars, this.setWorkspaceStorage = (n) => {
          this.workspaceStorage = n;
        }, this.trySynchronizeWorkspaceStorage = () => {
          if (this.workspaceStorage && this.hasUserPreference()) {
            const n = this.getScheme();
            if (this.workspaceStorage.setItem(bt.SelectedColorScheme, n), this.darkPaletteVars && this.lightPaletteVars) if (n === "dark" || n === "light") this.workspaceStorage.setItem(bt.ThemePaletteSheet, `:root{${this.getVarsByScheme(n)}}`);
            else {
              const r = `@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`, s = `@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;
              this.workspaceStorage.setItem(bt.ThemePaletteSheet, `${s}${r}`);
            }
          }
        }, this.setPalettes = async ({ light: n, dark: r }, s) => {
          this.lightPaletteVars = _r({ ...n, ...er(n, "light", s) }), this.darkPaletteVars = _r({ ...r, ...er(r, "dark", s) });
        };
      }
      hasUserPreference() {
        return this.providerStorage.getItem(bt.SelectedColorScheme) !== null;
      }
      setScheme(e) {
        this.providerStorage.setItem(bt.SelectedColorScheme, e);
      }
      setThemeDefaultScheme(e) {
        const n = Object.values(Me);
        n.includes(e) ? this.providerStorage.setItem(bt.ThemePaletteDefaultScheme, e) : console.warn(`Invalid theme default scheme '${e}'. Must be one of: ${n.join(", ")}. Ignoring default.`);
      }
      getScheme() {
        const e = this.providerStorage.getItem(bt.SelectedColorScheme), n = this.providerStorage.getItem(bt.ThemePaletteDefaultScheme);
        return e !== null ? e : n ?? Tr;
      }
    }(y), Pn = () => (Pt("ThemeStorage: getThemeStorageController called"), Sn), Xr = (e) => ({ getThemes: async () => (await ve(e)).dispatch(fe.GetThemes, void 0), setSelectedScheme: async (n) => (await ve(e)).dispatch(fe.SetSelectedScheme, n), getSelectedScheme: async () => (await ve(e)).dispatch(fe.GetSelectedScheme, void 0) }), t = async (e) => {
      await (await Un()).dispatch("set-selected-scheme", e);
    }, a = async (e) => {
      await (await xo()).dispatch(on.UpdatePlatformThemeScheme, { scheme: e });
    }, i = async (e) => {
      const n = await Ge();
      return Promise.all(n.map(async (r) => {
        await (await It(r.identity)).dispatch(At.SetSelectedScheme, e);
      }));
    }, l = async (e) => {
      const n = await nn();
      return Promise.all(n.map(async (r) => {
        await (await It(r.identity)).dispatch(At.SetSelectedScheme, e);
      }));
    }, p = async (e) => {
      try {
        const n = Pn();
        n.setScheme(e), await Promise.all([await n.trySynchronizeWorkspaceStorage(), a(e), i(e), l(e), t(e)]);
      } catch (n) {
        console.error("failed to set the selected scheme: ", n);
      }
    }, g = () => {
      try {
        return Pn().getScheme();
      } catch (e) {
        console.error("failed to get the selected scheme: ", e);
      }
    }, k = (e) => {
      const n = fin.Platform.wrapSync(e);
      let r;
      return Object.assign(n, { applySnapshot: async (s, c) => {
        if (typeof s != "string" && !(s != null && s.windows)) throw new Error("Not a valid browser snapshot");
        return fin.Platform.wrapSync(e).applySnapshot(s, c);
      }, getSnapshot: () => fin.Platform.wrapSync(e).getSnapshot().then((s) => s), getViewSnapshot: (s) => fin.Platform.wrapSync(e).getViewSnapshot(s), createView: (s, c, w) => fin.Platform.wrapSync(e).createView(s, c, w), launchApp: async (s) => (console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."), s.target || (s.target = { uuid: Ve, name: R, entityType: se || "unknown" }), (await ve(e)).dispatch(fe.LaunchApp, s)), _invokeCustomAction: async (s, c) => {
        const w = await ve(e), S = { actionId: s, payload: { ...c, callerType: c.callerType || dt.API } };
        return w.dispatch(fe.InvokeCustomActionInternal, S);
      }, _requestQuitPlatformDialog: async (s) => (await ve(e)).dispatch(fe.RequestQuitPlatformDialogInternal, s), _showUpdateVersionModal: async (s) => (await ve(e)).dispatch(fe.ShowUpdateVersionModalInternal, s), getCurrentWorkspace: async (s) => (await ve(e)).dispatch(fe.GetCurrentWorkspace, s), applyWorkspace: async (s, c) => (await ve(e)).dispatch(fe.ApplyWorkspace, { ...s, options: c }), restoreLastSavedWorkspace: async (s) => (await ve(e)).dispatch(fe.RestoreLastSavedWorkspaceInternal, s), setActiveWorkspace: async (s) => (await ve(e)).dispatch(fe.SetActiveWorkspace, s), getLanguage: async () => (await ve(e)).dispatch(fe.GetLanguage), _getLanguageResources: async () => (await ve(e)).dispatch(fe.GetLanguageResourcesInternal), setLanguage: async (s) => (await ve(e)).dispatch(fe.SetLanguage, s), _raiseAnalytics: async (s) => {
        var c;
        if (r || (r = await Va(e)), typeof r == "object" && ((c = r == null ? void 0 : r.analytics) == null ? void 0 : c.isSupported))
          return (await ve(e)).dispatch(fe.Analytics, s);
        e.uuid;
      }, getNotificationsConfig: async () => (await ve(e)).dispatch(fe.GetNotificationsConfig), _refreshBookmarksInternal: async () => (await ve(e)).dispatch(fe.RefreshBookmarksInternal), _launchBookmarkInternal: async (s) => (await ve(e)).dispatch(fe.LaunchBookmarkInternal, s), _updateDockFavoritesInternal: async (s) => (await ve(e)).dispatch(fe.UpdateDockFavoritesInternal, s), _updateContentMenuInternal: async (s) => (await ve(e)).dispatch(fe.UpdateContentMenuInternal, s), _launchDockEntryInternal: async (s) => (await ve(e)).dispatch(fe.LaunchDockEntryInternal, s), _setDockFavoritesInternal: async (s) => (await ve(e)).dispatch(fe.SetDockFavoritesOrderInternal, s), _setDefaultDockButtonsOrderInternal: async (s) => (await ve(e)).dispatch(fe.SetDefaultDockButtonsOrderInternal, s), _removeDockFavoriteInternal: async (s) => (await ve(e)).dispatch(fe.RemoveDockFavoriteInternal, s), _addDockFavoriteInternal: async (s) => (await ve(e)).dispatch(fe.AddDockFavoriteInternal, s), _navigateContentMenuInternal: async (s) => (await ve(e)).dispatch(fe.NavigateContentMenuInternal, s), _openDockWorkspacesContextMenuInternal: async () => (await ve(e)).dispatch(fe.GetDockWorkspacesContextMenuInternal), _handleDockWorkspacesMenuResponseInternal: async (s) => (await ve(e)).dispatch(fe.HandleDockWorkspacesMenuResponseInternal, s), _focusAndExpandSearchInternal: async () => (await ve(e)).dispatch(fe.FocusAndExpandSearchInternal), _showAboutPagePopup: async (s) => (async (c) => {
        const w = new URLSearchParams({ ...c, title: "About" }), S = await Jn(fin.me.identity), b = c.copyrightMessage ? 320 : 286, F = le(S, { height: b, width: 360 });
        return Er({ options: { frame: !0, smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: h.AboutPageWindow, url: await Kt() + $.EnterpriseAboutPage, defaultWidth: 360, defaultHeight: b, preventBlur: !0, ...F }, parameters: w });
      })(s), Theme: Xr(e), Browser: Mr(e), Storage: Xa(e) });
    }, v = () => k(fin.me.identity), A = { contextMenuOptions: { enabled: !0, template: ["spellCheck", "separator", "print", "separator", "cut", "copy", "paste", "undo", "redo", "selectAll", "inspect", "reload"] }, downloadShelf: { enabled: !0 } };
    function E(e, n) {
      return na({}, A, n, e);
    }
    const N = "internal-generated-view-", C = (e, n) => e.content ? { ...e, content: e.content.map((r) => C(r, n)) } : { ...e, componentState: n(e.componentState) }, L = (e, n) => {
      var s;
      return r = E(e, n), { ...r, name: r.name ? r.name : `internal-generated-view-${zt()}`, _internalWorkspaceData: { ...r._internalWorkspaceData, viewIdentifier: ((s = r._internalWorkspaceData) == null ? void 0 : s.viewIdentifier) || zt() } };
      var r;
    }, T = (e) => ({ ...e, name: void 0 }), D = (e) => {
      const n = { ...e };
      return C(n, T);
    }, O = (e) => {
      const n = { ...e };
      return C(n, (r) => r.name && r.name.startsWith(N) ? T(r) : r);
    }, B = (e) => {
      const n = [];
      return (e && Array.isArray(e) ? e : []).forEach((r) => {
        if (r.type === "component") return n.push(r.componentState);
        const s = B(r.content);
        n.push(...s);
      }), n;
    }, K = async (e, n, r = ye) => {
      let s;
      return await ut(r) && (s = (await de(r).getOptions()).layout || { settings: {} }), { ...s, content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { title: e, url: n } }] }] };
    }, H = (e, n) => {
      const r = B(n.content);
      return { ...C(e, (s) => {
        const c = r.find((S) => {
          var b, F;
          return ((b = S._internalWorkspaceData) == null ? void 0 : b.viewIdentifier) === ((F = s._internalWorkspaceData) == null ? void 0 : F.viewIdentifier);
        }), w = c ? c.isClosable : s.isClosable;
        return { ...s, isClosable: w };
      }), settings: n.settings };
    }, Y = (e) => e ? B(e).length : 0, re = ($a()(async (e) => {
      try {
        if (!e || !e.layoutContainerKey) return;
        const n = await (async (c) => fin.Platform.Layout.wrapSync({ ...fin.me.identity, layoutName: c }).getConfig())(e.layoutContainerKey), r = n.content ? B(n.content) : [], s = r.length;
        s > 1 ? (async (c) => {
          if (c.attachedPageType !== "multiView") {
            const w = await v().Browser.getUniquePageTitle();
            v().Browser.wrapSync(ye).updatePage({ pageId: c.pageId, page: { title: c.title ?? w, singleViewName: null, attachedPageType: "multiView" } });
          }
        })(e) : s === 1 && (async (c, w) => {
          const S = v().Browser.wrapSync(ye);
          if (c.attachedPageType !== "singleView") {
            const b = await za(c);
            delete b.layout, delete b.pageId;
            const F = fin.View.wrapSync({ uuid: ye.uuid, name: w }), V = await F.getInfo(), Q = { ...b, title: null, singleViewName: w, hasUnsavedChanges: !1, attachedPageType: "singleView", pageIcon: V.favicons[0] };
            await S.updatePage({ pageId: c.pageId, page: Q });
          }
        })(e, r[0].name), await (async (c, w) => {
          const S = qa({ ...ye, layoutName: c.layoutContainerKey }), b = await S.isShowingTabs();
          w > 1 ? b || await S.show() : w === 1 && b && await S.hide({ settings: { reorderEnabled: !0 } });
        })(e, s);
      } catch {
      }
    }, 50, { leading: !1, trailing: !0 }), bd), he = Kd;
    var me = u.n(he);
    const pe = JSON.parse('{"contextMenu.newWindow":"新建窗口","contextMenu.newPage":"新建页面","contextMenu.restore":"还原到上次保存的更改","contextMenu.switchWorkspace":"切换工作区","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外观","contextMenu.saveWorkspace":"保存工作区","contextMenu.saveWorkspaceAs":"将工作区另存为...","contextMenu.renameWorkspace":"重命名工作区","contextMenu.deleteWorkspace":"删除工作区","contextMenu.downloads":"下载","contextMenu.savePage":"保存页面","contextMenu.savePageAs":"将页面另存为...","contextMenu.print":"打印...","contextMenu.printScreen":"打印屏幕","contextMenu.closeWindow":"关闭窗口","contextMenu.openStorefront":"开放式店面","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新建视图","contextMenu.openView":"使用默认 Web 浏览器打开视图","contextMenu.openViews":"使用默认 Web 浏览器打开视图","contextMenu.reload":"Reload CN","contextMenu.reloadView":"重新加载视图","contextMenu.reloadViews":"重新加载视图","contextMenu.duplicate":"Duplicate CN","contextMenu.duplicateView":"复制视图","contextMenu.duplicateViews":"复制视图","contextMenu.addView":"将视图添加到频道","contextMenu.addViews":"将视图添加到频道","contextMenu.removeView":"从频道中移除视图","contextMenu.removeViews":"从频道中移除视图","contextMenu.closeView":"关闭视图","contextMenu.closeViews":"关闭视图","contextMenu.closeTab":"Close Tab CN","contextMenu.duplicatePage":"复制页面","contextMenu.submenu.print":"打印","contextMenu.submenu.printAll":"全部打印","saveMenu.saveWorkspaceAs":"将工作区另存为","saveMenu.savePageAs":"将页面另存为","saveModal.enterValue":"Please enter a value CN","saveModal.alreadyExists":"{{title}} 已存在。","saveModal.pleaseEnterValidName":"请输入有效名称","saveModal.renamePage":"重新命名页面","saveModal.closePage":"关闭页面","saveModal.discardChanges":"放弃更改","saveModal.discardAll":"全部放弃","saveModal.saveAll":"全部保存","saveModal.savePagesCount":"关闭前保存 ({{count}}) 个页面？","defaultPageTitle":"Untitled Page CN","enterpriseDefaultPageTitle":"Untitled Supertab CN","addNewPage":"添加新页面","addNewTab":"添加新选项卡","addNewView":"新建视图","restoreModal":"您确定要还原到上次保存的更改吗？","modal.discardWarning":"任何未保存的更改都将丢失","modal.discardPageWarning":"对此页的任何未保存的更改都将丢失。","modal.saveChangesPrompt":"关闭前保存更改？","modal.pageClose":"关闭页面","switchWorkspaceModal":"您确定要切换到 {{workspace}} 吗？","switchWorkspaceModal.warning":"任何未保存的更改都将丢失","deleteWorkspaceModal":"您确定要永久删除此工作区吗？","replaceWorkspaceModal.warning":"名称为 {{workspace}} 的工作区已存在。您是否要替换它？","replaceWorkspaceModal.warning.body":"已存在同名的工作区。替换它将覆盖其当前内容。","replaceWorkspaceModal.replace":"替换","closePlatform":"关闭平台","closePlatform.workspace":"关闭 {{workspace}} 平台","closePlatform.warning":"关闭平台将关闭所有工作区、应用或任何正在运行的进程。","back":"后退","forward":"前进","reload":"重新加载","green":"绿色","purple":"紫色","orange":"橙色","red":"红色","pink":"粉红色","yellow":"黄色","theme.light":"浅色","theme.dark":"深色","theme.system":"与操作系统设置同步","toolbar.hideTabs":"隐藏选项卡","toolbar.showTabs":"显示选项卡","toolbar.lock":"锁定","toolbar.unlock":"解锁","toolbar.colorLinking":"颜色链接","toolbar.changeLayout":"更改布局","toolbar.saveMenu":"保存菜单","toolbar.maximizeWindow":"最大化窗口","toolbar.restoreWindow":"还原窗口","toolbar.minimizeWindow":"最小化窗口","changeLayout.fullWidth":"全宽","changeLayout.columns":"列数","changeLayout.Rows":"行数","changeLayout.Grid":"网格","successIndicator.workspaceSwitched":"已切换工作区","successIndicator.hidden":"选项卡已隐藏","successIndicator.shown":"选项卡已显示","successIndicator.locked":"页面已锁定","successIndicator.unlocked":"页面已解锁","successIndicator.workspaceSaved":"工作区已保存","successIndicator.workspaceSavedAs":"工作区已另存为 {{workspace}}","successIndicator.workspaceRenamed":"工作区已重命名","successIndicator.pageSaved":"页面已保存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. CN","successIndicator.pageCopySaved":"页面已另存为 {{title}}","successIndicator.pageRenamed":"页面已重命名","successIndicator.contextGroupApplied":"已应用上下文组","successIndicator.namedContextGroupApplied":"已应用 {{colorName}} 上下文组","successIndicator.viewRemoved":"从上下文组中移除视图","successIndicator.viewsRemoved":"从上下文组中移除视图","successIndicator.layoutApplied":"已应用 {{layoutName}} 布局","successIndicator.workspaceDeleted":"工作区已删除","errorIndicator.pageSaveFailed":"页面保存失败","errorIndicator.workspaceSaveFailed":"工作区保存失败","errorIndicator.failedToDuplicatePage":"复制页面失败","infoIndicator.colorLinkAttempt":"我们尝试对此选项卡进行颜色链接，但网站/内容所有者尚未启用该功能","global.cancel":"取消","global.confirm":"确认","global.save":"保存","global.delete":"Delete CN","appResults.header":"Featured Content CN","recentlyClosed.header":"Recently Closed CN","landingPage.subheader":"Apps and websites selected by an admin will show here CN","aria.openBrowser":"打开浏览器菜单","aria.browserTabs":"浏览器选项卡","aria.viewTab":"查看 {{title}} 的选项卡","aria.closePage":"关闭 {{title}} 的页面选项卡按钮","aria.closeTab":"关闭选项卡 {{title}}","aria.title":"标题","aria.closeContextGroup":"使用转义关闭上下文组选择对话框","aria.colorLinking":"显示或隐藏颜色链接","aria.applyColorLinking":"请选择一个视图以应用颜色链接","aria.assignColorLinkingCurrentView":"分配给 {{name}} 上下文组的当前视图","aria.assignColorLinkingCurrentViews":"分配给 {{name}} 上下文组的当前视图","aria.setColorLinkingActiveView":"将活动视图设置为 {{name}} 上下文组","aria.setColorLinkingActiveViews":"将活动视图设置为 {{name}} 上下文组","aria.escapeLayoutDialog":"使用转义关闭更改布局对话框","global.supertab":"Supertab CN","global.tab":"Tab CN","bookmarks.editBookmark":"Edit Bookmark CN","bookmarks.bookmarkAdded":"Bookmark added CN","bookmarks.done":"Done CN","bookmarks.remove":"Remove CN","bookmarks.bookmarksPanel":"Bookmarks Panel CN","bookmarks.bookmarks":"Bookmarks CN","bookmarks.allBookmarks":"All Bookmarks CN","bookmarks.favorites":"Favorites CN","bookmarks.searchBookmarks":"Search Bookmarks CN","bookmarks.clearSearchInput":"Clear Search Input CN","bookmarks.createFolder":"Create New Folder CN","bookmarks.exitFolder":"Exit Folder CN","bookmarks.newFolder":"New Folder CN","bookmarks.namedFolder":"{{name}} Folder CN","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings CN","bookmarks.folderSettings":"{{name}} Folder Settings CN","bookmarks.noResultsFound":"No results found CN","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search CN","bookmarks.nothingToShow":"Nothing to show yet CN","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder CN","bookmarks.resultsFoundIn":"Results found in {{name}} CN","bookmarks.resultsInOtherFolders":"Results found in other folders CN","bookmarks.allResultsFoundIn":"All results found in CN","bookmarks.editName":"Edit Name CN","bookmarks.move":"Move CN","bookmarks.bookmarkAddedTitle":"Bookmark Added CN","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" CN","bookmarks.bookmarkEditedTitle":"Bookmark Edited CN","enterpriseContextMenu.saveSupertab":"Save Supertab CN","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... CN","enterpriseContextMenu.duplicate":"Duplicate CN","enterpriseContextMenu.deleteSupertab":"Delete Supertab CN","enterpriseContextMenu.newTab":"New Tab CN","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As CN","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? CN","saveSupertabCount_other":"Save {{count}} Supertabs before closing? CN"},"enterpriseSaveModal.renameSupertab":"Rename CN","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. CN","enterpriseSaveModal.closeTab":"Close Tab CN","enterpriseSaveModal.closeSupertab":"Close Supertab CN","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. CN","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? CN","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. CN","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved CN","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. CN","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted CN","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. CN","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab CN","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab CN","enterpriseCommandBar.switchToSupertab":"Switch to Supertab CN","enterpriseCommandBar.goTo":"Go to {{type}} CN","enterpriseCommandBar.viewMore":"View More CN","sidePanel.aiCenter":"AI Center CN","sidePanel.newChat":"New Chat CN","sidePanel.toggleSidePanel":"Toggle Side Panel CN","sidePanel.closeSidePanel":"Close Side Panel CN","sidePanel.openAiCenter":"Open AI Center CN","contextMenu.quitEnterpriseBrowser":"Quit CN","dock.removeFavorite":"Remove CN"}'), be = JSON.parse('{"contextMenu.newWindow":"新視窗","contextMenu.newPage":"新頁面","contextMenu.restore":"還原到上次儲存的變更","contextMenu.switchWorkspace":"切換工作空間","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外觀","contextMenu.saveWorkspace":"儲存工作空間","contextMenu.saveWorkspaceAs":"將工作空間另存為...","contextMenu.renameWorkspace":"重新命名工作空間","contextMenu.deleteWorkspace":"刪除工作空間","contextMenu.downloads":"下載","contextMenu.savePage":"儲存頁面","contextMenu.savePageAs":"將頁面另存為...","contextMenu.print":"列印...","contextMenu.printScreen":"擷取畫面","contextMenu.closeWindow":"關閉視窗","contextMenu.openStorefront":"打開 Storefront","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新視圖","contextMenu.openView":"使用預設網頁瀏覽器打開視圖","contextMenu.openViews":"使用預設網頁瀏覽器打開視圖","contextMenu.reload":"Reload ZH","contextMenu.reloadView":"重新載入視圖","contextMenu.reloadViews":"重新載入視圖","contextMenu.duplicate":"Duplicate ZH","contextMenu.duplicateView":"複寫視圖","contextMenu.duplicateViews":"複寫視圖","contextMenu.addView":"將視圖新增至頻道","contextMenu.addViews":"將視圖新增至頻道","contextMenu.removeView":"從頻道中移除視圖","contextMenu.removeViews":"從頻道中移除視圖","contextMenu.closeView":"關閉視圖","contextMenu.closeViews":"關閉視圖","contextMenu.closeTab":"Close Tab ZH","contextMenu.duplicatePage":"複寫頁面","contextMenu.submenu.print":"列印","contextMenu.submenu.printAll":"列印全部","saveMenu.saveWorkspaceAs":"將工作空間另存為","saveMenu.savePageAs":"頁面另存為","saveModal.enterValue":"Please enter a value ZH","saveModal.alreadyExists":"{{title}} 已經存在。","saveModal.pleaseEnterValidName":"請輸入一個有效的名稱","saveModal.renamePage":"重新命名頁面","saveModal.closePage":"關閉頁面","saveModal.discardChanges":"捨棄變更","saveModal.discardAll":"全部捨棄","saveModal.saveAll":"儲存全部","saveModal.savePagesCount":"要先儲存 ({{count}}) 個頁面再關閉嗎？","defaultPageTitle":"Untitled Page ZH","enterpriseDefaultPageTitle":"Untitled Supertab ZH","addNewPage":"新增新頁面","addNewTab":"新增新索引標籤","addNewView":"新視圖","restoreModal":"您確定要還原到上次儲存的變更嗎？","modal.discardWarning":"任何未儲存的變更都將被捨棄","modal.discardPageWarning":"在此頁面任何未儲存的變更都將遺失。","modal.saveChangesPrompt":"要先儲存變更再關閉嗎？","modal.pageClose":"頁面關閉","switchWorkspaceModal":"您確定要切換到 {{workspace}}？","switchWorkspaceModal.warning":"任何未儲存的變更都將被捨棄","deleteWorkspaceModal":"您確定要永久刪除此工作空間嗎？","replaceWorkspaceModal.warning":"具有名稱 {{workspace}} 的工作空間已經存在。你要更換它嗎？","replaceWorkspaceModal.warning.body":"相同名稱的工作空間已經存在。更換它後，將會覆蓋目前內容。","replaceWorkspaceModal.replace":"更換","closePlatform":"關閉平台","closePlatform.workspace":"關閉 {{workspace}} 平台","closePlatform.warning":"關閉平台後，將關閉正在執行的任何工作空間、APP 或流程。","back":"上一頁","forward":"下一頁","reload":"重新載入","green":"綠","purple":"紫","orange":"橘","red":"紅色","pink":"粉紅","yellow":"黃","theme.light":"淺","theme.dark":"深","theme.system":"與 OS 設定同步","toolbar.hideTabs":"隱藏索引標籤","toolbar.showTabs":"顯示索引標籤","toolbar.lock":"上鎖","toolbar.unlock":"解鎖","toolbar.colorLinking":"顏色連結","toolbar.changeLayout":"變更版面","toolbar.saveMenu":"儲存選單","toolbar.maximizeWindow":"最大化視窗","toolbar.restoreWindow":"還原視窗","toolbar.minimizeWindow":"最小化視窗","changeLayout.fullWidth":"全螢幕寬度","changeLayout.columns":"行","changeLayout.Rows":"列","changeLayout.Grid":"網格","successIndicator.workspaceSwitched":"工作空間已切換","successIndicator.hidden":"索引標籤已隱藏","successIndicator.shown":"索引標籤已顯示","successIndicator.locked":"頁面已上鎖","successIndicator.unlocked":"頁面已解鎖","successIndicator.workspaceSaved":"工作空間已儲存","successIndicator.workspaceSavedAs":"工作空間已另存為 {{workspace}}","successIndicator.workspaceRenamed":"工作空間已重新命名","successIndicator.pageSaved":"頁面已儲存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. ZH","successIndicator.pageCopySaved":"頁面已另存為 {{title}}","successIndicator.pageRenamed":"頁面已重新命名","successIndicator.contextGroupApplied":"脈絡群組已套用","successIndicator.namedContextGroupApplied":"{{colorName}} 脈絡群組已套用","successIndicator.viewRemoved":"從脈絡群組中移除的視圖","successIndicator.viewsRemoved":"從脈絡群組中移除的視圖","successIndicator.layoutApplied":"{{layoutName}} 版面已套用","successIndicator.workspaceDeleted":"工作空間已刪除","errorIndicator.pageSaveFailed":"頁面無法儲存","errorIndicator.workspaceSaveFailed":"工作空間無法儲存","errorIndicator.failedToDuplicatePage":"無法複寫頁面","infoIndicator.colorLinkAttempt":"我們嘗試對此索引標籤進行顏色連結，但網站/內容所有者尚未啟用該功能","global.cancel":"取消","global.confirm":"確認","global.save":"儲存","global.delete":"Delete ZH","appResults.header":"Featured Content ZH","recentlyClosed.header":"Recently Closed ZH","landingPage.subheader":"Apps and websites selected by an admin will show here ZH","aria.openBrowser":"開啟瀏覽器選單","aria.browserTabs":"瀏覽器索引標籤","aria.viewTab":"{{title}} 的視圖索引標籤","aria.closePage":"關閉 {{title}} 的頁面索引標籤按鈕","aria.closeTab":"關閉索引標籤 {{title}}","aria.title":"標題","aria.closeContextGroup":"使用 Esc 鍵關閉脈絡群組選取對話框","aria.colorLinking":"顯示或隱藏顏色連結","aria.applyColorLinking":"請選取要套用顏色連結的視圖","aria.assignColorLinkingCurrentView":"目前視圖分配給 {{name}} 脈絡群組","aria.assignColorLinkingCurrentViews":"目前視圖分配給 {{name}} 脈絡群組","aria.setColorLinkingActiveView":"將啟用視圖設定為 {{name}} 脈絡群組","aria.setColorLinkingActiveViews":"將啟用視圖設定為 {{name}} 脈絡群組","aria.escapeLayoutDialog":"使用 Esc 鍵關閉變更版面對話框","global.supertab":"Supertab ZH","global.tab":"Tab ZH","bookmarks.editBookmark":"Edit Bookmark ZH","bookmarks.bookmarkAdded":"Bookmark added ZH","bookmarks.done":"Done ZH","bookmarks.remove":"Remove ZH","bookmarks.bookmarksPanel":"Bookmarks Panel ZH","bookmarks.bookmarks":"Bookmarks ZH","bookmarks.allBookmarks":"All Bookmarks ZH","bookmarks.favorites":"Favorites ZH","bookmarks.searchBookmarks":"Search Bookmarks ZH","bookmarks.clearSearchInput":"Clear Search Input ZH","bookmarks.createFolder":"Create New Folder ZH","bookmarks.exitFolder":"Exit Folder ZH","bookmarks.newFolder":"New Folder ZH","bookmarks.namedFolder":"{{name}} Folder ZH","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings ZH","bookmarks.folderSettings":"{{name}} Folder Settings ZH","bookmarks.noResultsFound":"No results found ZH","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search ZH","bookmarks.nothingToShow":"Nothing to show yet ZH","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder ZH","bookmarks.resultsFoundIn":"Results found in {{name}} ZH","bookmarks.resultsInOtherFolders":"Results found in other folders ZH","bookmarks.allResultsFoundIn":"All results found in ZH","bookmarks.editName":"Edit Name ZH","bookmarks.move":"Move ZH","bookmarks.bookmarkAddedTitle":"Bookmark Added ZH","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" ZH","bookmarks.bookmarkEditedTitle":"Bookmark Edited ZH","enterpriseContextMenu.saveSupertab":"Save Supertab ZH","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... ZH","enterpriseContextMenu.duplicate":"Duplicate ZH","enterpriseContextMenu.deleteSupertab":"Delete Supertab ZH","enterpriseContextMenu.newTab":"New Tab ZH","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As ZH","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? ZH","saveSupertabCount_other":"Save {{count}} Supertabs before closing? ZH"},"enterpriseSaveModal.renameSupertab":"Rename ZH","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. ZH","enterpriseSaveModal.closeTab":"Close Tab ZH","enterpriseSaveModal.closeSupertab":"Close Supertab ZH","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. ZH","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? ZH","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. ZH","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved ZH","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. ZH","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted ZH","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. ZH","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab ZH","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab ZH","enterpriseCommandBar.switchToSupertab":"Switch to Supertab ZH","enterpriseCommandBar.goTo":"Go to {{type}} ZH","enterpriseCommandBar.viewMore":"View More ZH","sidePanel.aiCenter":"AI Center ZH","sidePanel.newChat":"New Chat ZH","sidePanel.toggleSidePanel":"Toggle Side Panel ZH","sidePanel.closeSidePanel":"Close Side Panel ZH","sidePanel.openAiCenter":"Open AI Center ZH","contextMenu.quitEnterpriseBrowser":"Quit ZH","dock.removeFavorite":"Remove ZH"}'), xe = JSON.parse('{"contextMenu.newWindow":"New Window","contextMenu.newPage":"New Page","contextMenu.restore":"Restore to Last Saved Changes","contextMenu.switchWorkspace":"Switch Workspace","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Appearance","contextMenu.saveWorkspace":"Save Workspace","contextMenu.saveWorkspaceAs":"Save Workspace As...","contextMenu.renameWorkspace":"Rename Workspace","contextMenu.deleteWorkspace":"Delete Workspace","contextMenu.downloads":"Downloads","contextMenu.savePage":"Save Page","contextMenu.savePageAs":"Save Page As...","contextMenu.print":"Print...","contextMenu.printScreen":"Print Screen","contextMenu.closeWindow":"Close Window","contextMenu.openStorefront":"Open Storefront","contextMenu.quitPlatform":"Quit {{platformLabel}}","contextMenu.newView":"New View","contextMenu.openView":"Open View with Default Web Browser","contextMenu.openViews":"Open Views with Default Web Browser","contextMenu.reload":"Reload","contextMenu.reloadView":"Reload View","contextMenu.reloadViews":"Reload Views","contextMenu.duplicate":"Duplicate","contextMenu.duplicateView":"Duplicate View","contextMenu.duplicateViews":"Duplicate Views","contextMenu.addView":"Add View to Channel","contextMenu.addViews":"Add Views to Channel","contextMenu.removeView":"Remove View from Channel","contextMenu.removeViews":"Remove Views from Channel","contextMenu.closeView":"Close View","contextMenu.closeViews":"Close Views","contextMenu.closeTab":"Close Tab","contextMenu.duplicatePage":"Duplicate Page","contextMenu.submenu.print":"Print","contextMenu.submenu.printAll":"Print All","saveMenu.saveWorkspaceAs":"Save Workspace As","saveMenu.savePageAs":"Save Page As","saveModal.enterValue":"Please enter a value","saveModal.alreadyExists":"{{title}} already exists.","saveModal.pleaseEnterValidName":"Please enter a valid name","saveModal.renamePage":"Rename Page","saveModal.closePage":"Close Page","saveModal.discardChanges":"Discard Changes","saveModal.discardAll":"Discard All","saveModal.saveAll":"Save All","saveModal.savePagesCount":"Save ({{count}}) pages before closing?","defaultPageTitle":"Untitled Page","enterpriseDefaultPageTitle":"Untitled Supertab","addNewPage":"New Page","addNewTab":"Add New Tab","addNewView":"New View","restoreModal":"Are you sure you want to restore to last saved changes?","modal.discardWarning":"Any unsaved changes will be discarded","modal.discardPageWarning":"Any unsaved changes to this page will be lost.","modal.saveChangesPrompt":"Save changes before closing?","modal.pageClose":"Page Close","switchWorkspaceModal":"Are you sure you want to switch to {{workspace}}?","switchWorkspaceModal.warning":"Any unsaved changes will be discarded","deleteWorkspaceModal":"Are you sure you want to permanently delete this workspace?","replaceWorkspaceModal.warning":"A Workspace with the name {{workspace}} already exists. Do you want to replace it?","replaceWorkspaceModal.warning.body":"A workspace with the same name already exists. Replacing it will overwrite its current contents.","replaceWorkspaceModal.replace":"Replace","closePlatform":"Close the platform","closePlatform.workspace":"Close the {{workspace}} Platform","closePlatform.warning":"Closing a platform will close any workspaces, apps or any processes that are running.","back":"Back","forward":"Forward","reload":"Reload","green":"Green","purple":"Purple","orange":"Orange","red":"Red","pink":"Pink","yellow":"Yellow","theme.light":"Light","theme.dark":"Dark","theme.system":"Sync with OS setting","toolbar.hideTabs":"Hide Tabs","toolbar.showTabs":"Show Tabs","toolbar.lock":"Lock","toolbar.unlock":"Unlock","toolbar.colorLinking":"Color Linking","toolbar.changeLayout":"Change Layout","toolbar.saveMenu":"Save Menu","toolbar.maximizeWindow":"Maximize Window","toolbar.restoreWindow":"Restore Window","toolbar.minimizeWindow":"Minimize Window","changeLayout.fullWidth":"Full Width","changeLayout.columns":"Columns","changeLayout.Rows":"Rows","changeLayout.Grid":"Grid","successIndicator.workspaceSwitched":"Workspace Switched","successIndicator.hidden":"Tabs are Hidden","successIndicator.shown":"Tabs are Shown","successIndicator.locked":"Page is Locked","successIndicator.unlocked":"Page is Unlocked","successIndicator.workspaceSaved":"Workspace saved","successIndicator.workspaceSavedAs":"Workspace saved as {{workspace}}","successIndicator.workspaceRenamed":"Workspace renamed","successIndicator.pageSaved":"Page Saved","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved.","successIndicator.pageCopySaved":"Page saved as {{title}}","successIndicator.pageRenamed":"Page renamed","successIndicator.contextGroupApplied":"Context group applied","successIndicator.namedContextGroupApplied":"{{colorName}} context group applied","successIndicator.viewRemoved":"View removed from context group","successIndicator.viewsRemoved":"Views removed from context group","successIndicator.layoutApplied":"{{layoutName}} layout applied","successIndicator.workspaceDeleted":"Workspace deleted","errorIndicator.pageSaveFailed":"Page failed to save","errorIndicator.workspaceSaveFailed":"Workspace failed to save","errorIndicator.failedToDuplicatePage":"Failed to duplicate Page","infoIndicator.colorLinkAttempt":"We attempted to color link this tab, but the site/content owner has not enabled it yet","global.cancel":"Cancel","global.confirm":"Confirm","global.save":"Save","global.delete":"Delete","appResults.header":"Featured Content","recentlyClosed.header":"Recently Closed","landingPage.subheader":"Apps and websites selected by an admin will show here","aria.openBrowser":"Open Browser Menu","aria.browserTabs":"Browser Tabs","aria.viewTab":"View Tab for {{title}}","aria.closePage":"Close Page Tab Button for {{title}}","aria.closeTab":"Close Tab {{title}}","aria.title":"Title","aria.closeContextGroup":"Use escape to close context group selection dialog","aria.colorLinking":"Show or hide color linking","aria.applyColorLinking":"Please select a view to apply color linking","aria.assignColorLinkingCurrentView":"Current view assigned to {{name}} context group","aria.assignColorLinkingCurrentViews":"Current views assigned to {{name}} context group","aria.setColorLinkingActiveView":"Set active view to {{name}} context group","aria.setColorLinkingActiveViews":"Set active views to {{name}} context group","aria.escapeLayoutDialog":"Use escape to close change layout dialog","global.supertab":"Supertab","global.tab":"Tab","bookmarks.editBookmark":"Edit Bookmark","bookmarks.bookmarkAdded":"Bookmark added","bookmarks.done":"Done","bookmarks.remove":"Remove","bookmarks.bookmarksPanel":"Bookmarks Panel","bookmarks.bookmarks":"Bookmarks","bookmarks.allBookmarks":"All Bookmarks","bookmarks.favorites":"Favorites","bookmarks.searchBookmarks":"Search Bookmarks","bookmarks.clearSearchInput":"Clear Search Input","bookmarks.createFolder":"Create New Folder","bookmarks.exitFolder":"Exit Folder","bookmarks.newFolder":"New Folder","bookmarks.namedFolder":"{{name}} Folder","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings","bookmarks.folderSettings":"{{name}} Folder Settings","bookmarks.noResultsFound":"No results found","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search","bookmarks.nothingToShow":"Nothing to show yet","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder","bookmarks.resultsFoundIn":"Results found in {{name}}","bookmarks.resultsInOtherFolders":"Results found in other folders","bookmarks.allResultsFoundIn":"All results found in","bookmarks.editName":"Edit Name","bookmarks.move":"Move","bookmarks.bookmarkAddedTitle":"Bookmark Added","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\"","bookmarks.bookmarkEditedTitle":"Bookmark Edited","enterpriseContextMenu.saveSupertab":"Save Supertab","enterpriseContextMenu.saveSupertabAs":"Save Supertab As...","enterpriseContextMenu.duplicate":"Duplicate","enterpriseContextMenu.deleteSupertab":"Delete Supertab","enterpriseContextMenu.newTab":"New Tab","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing?","saveSupertabCount_other":"Save {{count}} Supertabs before closing?"},"enterpriseSaveModal.renameSupertab":"Rename","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab.","enterpriseSaveModal.closeTab":"Close Tab","enterpriseSaveModal.closeSupertab":"Close Supertab","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost.","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab?","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent.","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted.","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab","enterpriseCommandBar.switchToSupertab":"Switch to Supertab","enterpriseCommandBar.goTo":"Go to {{type}}","enterpriseCommandBar.viewMore":"View More","sidePanel.aiCenter":"AI Center","sidePanel.newChat":"New Chat","sidePanel.toggleSidePanel":"Toggle Side Panel","sidePanel.closeSidePanel":"Close Side Panel","sidePanel.openAiCenter":"Open AI Center","contextMenu.quitEnterpriseBrowser":"Quit","dock.removeFavorite":"Remove","dock.workspaceManagement":{"restoreSuccess":"Last Saved Changes Restored"}}'), Se = JSON.parse('{"contextMenu.newWindow":"Neues Fenster","contextMenu.newPage":"Neue Seite","contextMenu.restore":"Wiederherstellen der zuletzt gespeicherten Änderungen","contextMenu.switchWorkspace":"Workspace wechseln","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Erscheinungsbild","contextMenu.saveWorkspace":"Workspace speichern","contextMenu.saveWorkspaceAs":"Workspace speichern unter...","contextMenu.renameWorkspace":"Workspace umbenennen","contextMenu.deleteWorkspace":"Workspace löschen","contextMenu.downloads":"Downloads","contextMenu.savePage":"Seite speichern","contextMenu.savePageAs":"Seite speichern unter...","contextMenu.print":"Drucken...","contextMenu.printScreen":"Bildschirmansicht drucken","contextMenu.closeWindow":"Fenster schließen","contextMenu.openStorefront":"Schaufenster öffnen","contextMenu.quitPlatform":"Plattform verlassen","contextMenu.newView":"Neue Ansicht","contextMenu.openView":"Ansicht mit Standard-Webbrowser öffnen","contextMenu.openViews":"Ansichten mit Standard-Webbrowser öffnen","contextMenu.reload":"Reload DE","contextMenu.reloadView":"Ansicht neu laden","contextMenu.reloadViews":"Ansichten neu laden","contextMenu.duplicate":"Duplicate DE","contextMenu.duplicateView":"Ansicht duplizieren","contextMenu.duplicateViews":"Ansichten duplizieren","contextMenu.addView":"Ansicht zum Channel hinzufügen","contextMenu.addViews":"Ansichten zum Channel hinzufügen","contextMenu.removeView":"Ansicht aus dem Channel entfernen","contextMenu.removeViews":"Ansichten aus dem Channel entfernen","contextMenu.closeView":"Ansicht schließen","contextMenu.closeViews":"Ansichten schließen","contextMenu.closeTab":"Close Tab DE","contextMenu.duplicatePage":"Seite duplizieren","contextMenu.submenu.print":"Drucken","contextMenu.submenu.printAll":"Alle drucken","saveMenu.saveWorkspaceAs":"Workspace speichern unter","saveMenu.savePageAs":"Seite speichern unter","saveModal.enterValue":"Please enter a value DE","saveModal.alreadyExists":"{{title}} existiert bereits.","saveModal.pleaseEnterValidName":"Bitte geben Sie einen gültigen Namen ein","saveModal.renamePage":"Seite umbenennen","saveModal.closePage":"Seite schließen","saveModal.discardChanges":"Änderungen verwerfen","saveModal.discardAll":"Alle verwerfen","saveModal.saveAll":"Alle speichern","saveModal.savePagesCount":"({{count}}) Seiten vor dem Schließen speichern?","defaultPageTitle":"Untitled Page DE","enterpriseDefaultPageTitle":"Untitled Supertab DE","addNewPage":"Neue Seite hinzufügen","addNewTab":"Neuen Tab hinzufügen","addNewView":"Neue Ansicht","restoreModal":"Sind Sie sicher, dass Sie die zuletzt gespeicherten Änderungen wiederherstellen wollen?","modal.discardWarning":"Alle nicht gespeicherten Änderungen werden verworfen","modal.discardPageWarning":"Alle nicht gespeicherten Änderungen auf dieser Seite gehen verloren.","modal.saveChangesPrompt":"Änderungen vor dem Schließen speichern?","modal.pageClose":"Seite schließen","switchWorkspaceModal":"Sind Sie sicher, dass Sie zu {{workspace}}wechseln wollen?","switchWorkspaceModal.warning":"Alle nicht gespeicherten Änderungen werden verworfen","deleteWorkspaceModal":"Sind Sie sicher, dass Sie diesen Workspace dauerhaft löschen wollen?","replaceWorkspaceModal.warning":"Ein Workspace mit dem Namen {{workspace}} existiert bereits. Möchten Sie ihn ersetzen?","replaceWorkspaceModal.warning.body":"Ein Workspace mit demselben Namen existiert bereits. Wenn Sie ihn ersetzen, wird der aktuelle Inhalt überschrieben.","replaceWorkspaceModal.replace":"Ersetzen","closePlatform":"Plattform schließen","closePlatform.workspace":"Die {{workspace}} Plattform schließen","closePlatform.warning":"Wenn Sie eine Plattform schließen, werden alle Workspaces, Apps und laufenden Prozesse beendet.","back":"Zurück","forward":"Weiter","reload":"Neu laden","green":"Grün","purple":"Lila","orange":"Orange","red":"Rot","pink":"Pink","yellow":"Gelb","theme.light":"Hell","theme.dark":"Dunkel","theme.system":"Synchronisierung mit OS-Einstellung","toolbar.hideTabs":"Tabs ausblenden","toolbar.showTabs":"Tabs anzeigen","toolbar.lock":"Sperren","toolbar.unlock":"Freischalten","toolbar.colorLinking":"Farbverknüpfung","toolbar.changeLayout":"Layout ändern","toolbar.saveMenu":"Menü speichern","toolbar.maximizeWindow":"Fenster maximieren","toolbar.restoreWindow":"Fenster wiederherstellen","toolbar.minimizeWindow":"Fenster minimieren","changeLayout.fullWidth":"Volle Breite","changeLayout.columns":"Spalten","changeLayout.Rows":"Zeilen","changeLayout.Grid":"Raster","successIndicator.workspaceSwitched":"Workspace gewechselt","successIndicator.hidden":"Tabs sind ausgeblendet","successIndicator.shown":"Tabs werden angezeigt","successIndicator.locked":"Seite ist gesperrt","successIndicator.unlocked":"Seite ist freigeschaltet","successIndicator.workspaceSaved":"Workspace gespeichert","successIndicator.workspaceSavedAs":"Workspace gespeichert als {{workspace}}","successIndicator.workspaceRenamed":"Workspace umbenannt","successIndicator.pageSaved":"Seite gespeichert","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. DE","successIndicator.pageCopySaved":"Seite gespeichert als {{title}}","successIndicator.pageRenamed":"Seite umbenannt","successIndicator.contextGroupApplied":"Angewandte Kontextgruppe","successIndicator.namedContextGroupApplied":"{{colorName}} angewandte Kontextgruppe","successIndicator.viewRemoved":"Ansicht aus der Kontextgruppe entfernt","successIndicator.viewsRemoved":"Ansichten aus der Kontextgruppe entfernt","successIndicator.layoutApplied":"{{layoutName}} angewandtes Layout","successIndicator.workspaceDeleted":"Workspace gelöscht","errorIndicator.pageSaveFailed":"Seite konnte nicht gespeichert werden","errorIndicator.workspaceSaveFailed":"Workspace konnte nicht gespeichert werden","errorIndicator.failedToDuplicatePage":"Seite kann nicht dupliziert werden","infoIndicator.colorLinkAttempt":"Wir haben versucht, diesem Tab eine Farbe zuordnen, aber der Eigentümer der Website/des Inhalts hat sie noch nicht aktiviert","global.cancel":"Abbrechen","global.confirm":"Bestätigen","global.save":"Speichern","global.delete":"Delete DE","appResults.header":"Featured Content DC","recentlyClosed.header":"Recently Closed DC","landingPage.subheader":"Apps and websites selected by an admin will show here DE","aria.openBrowser":"Browser-Menü öffnen","aria.browserTabs":"Browser-Tab","aria.viewTab":"Tab „Ansicht“ für {{title}}","aria.closePage":"Button „Seite schließen“ für {{title}}","aria.closeTab":"Tab schließen {{title}}","aria.title":"Bezeichnung","aria.closeContextGroup":"Verwenden Sie die Escape-Taste, um den Dialog zur Auswahl von Kontextgruppen zu schließen","aria.colorLinking":"Farbverknüpfung ein- oder ausblenden","aria.applyColorLinking":"Bitte wählen Sie eine Ansicht, um die Farbverknüpfung anzuwenden","aria.assignColorLinkingCurrentView":"Aktuelle Ansicht, die der Kontextgruppe {{name}} zugeordnet ist","aria.assignColorLinkingCurrentViews":"Aktuelle Ansichten, die der Kontextgruppe {{name}} zugeordnet sind","aria.setColorLinkingActiveView":"Aktive Ansicht auf die Kontextgruppe {{name}} setzen","aria.setColorLinkingActiveViews":"Aktive Ansichten auf die Kontextgruppe {{name}} setzen","aria.escapeLayoutDialog":"Verwenden Sie die Escape-Taste, um den Dialog zur Layoutänderung zu schließen","global.supertab":"Supertab DE","global.tab":"Tab DE","bookmarks.editBookmark":"Edit Bookmark DE","bookmarks.bookmarkAdded":"Bookmark added DE","bookmarks.done":"Done DE","bookmarks.remove":"Remove DE","bookmarks.bookmarksPanel":"Bookmarks Panel DE","bookmarks.bookmarks":"Bookmarks DE","bookmarks.allBookmarks":"All Bookmarks DE","bookmarks.favorites":"Favorites DE","bookmarks.searchBookmarks":"Search Bookmarks DE","bookmarks.clearSearchInput":"Clear Search Input DE","bookmarks.createFolder":"Create New Folder DE","bookmarks.exitFolder":"Exit Folder DE","bookmarks.newFolder":"New Folder DE","bookmarks.namedFolder":"{{name}} Folder DE","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings DE","bookmarks.folderSettings":"{{name}} Folder Settings DE","bookmarks.noResultsFound":"No results found DE","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search DE","bookmarks.nothingToShow":"Nothing to show yet DE","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder DE","bookmarks.resultsFoundIn":"Results found in {{name}} DE","bookmarks.resultsInOtherFolders":"Results found in other folders DE","bookmarks.allResultsFoundIn":"All results found in DE","bookmarks.editName":"Edit Name DE","bookmarks.move":"Move DE","bookmarks.bookmarkAddedTitle":"Bookmark Added DE","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" DE","bookmarks.bookmarkEditedTitle":"Bookmark Edited DE","enterpriseContextMenu.saveSupertab":"Save Supertab DE","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... DE","enterpriseContextMenu.duplicate":"Duplicate DE","enterpriseContextMenu.deleteSupertab":"Delete Supertab DE","enterpriseContextMenu.newTab":"New Tab DE","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As DE","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? DE","saveSupertabCount_other":"Save {{count}} Supertabs before closing? DE"},"enterpriseSaveModal.renameSupertab":"Rename DE","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. DE","enterpriseSaveModal.closeTab":"Close Tab DE","enterpriseSaveModal.closeSupertab":"Close Supertab DE","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. DE","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? DE","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. DE","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved DE","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. DE","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted DE","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. DE","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab DE","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab DE","enterpriseCommandBar.switchToSupertab":"Switch to Supertab DE","enterpriseCommandBar.goTo":"Go to {{type}} DE","enterpriseCommandBar.viewMore":"View More DE","sidePanel.aiCenter":"AI Center DE","sidePanel.newChat":"New Chat DE","sidePanel.toggleSidePanel":"Toggle Side Panel DE","sidePanel.closeSidePanel":"Close Side Panel DE","sidePanel.openAiCenter":"Open AI Center DE","contextMenu.quitEnterpriseBrowser":"Quit DE","dock.removeFavorite":"Remove DE"}'), Te = JSON.parse('{"contextMenu.newWindow":"新しいウィンドウ","contextMenu.newPage":"新しいページ","contextMenu.restore":"最後に保存された変更に戻す","contextMenu.switchWorkspace":"ワークスペースに切り替える","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外観","contextMenu.saveWorkspace":"ワークスペースを保存","contextMenu.saveWorkspaceAs":"ワークスペースを別名で保存...","contextMenu.renameWorkspace":"ワークスペース名を変更","contextMenu.deleteWorkspace":"ワークスペースを削除","contextMenu.downloads":"ダウンロード","contextMenu.savePage":"ページを保存","contextMenu.savePageAs":"ページを別名で保存...","contextMenu.print":"印刷...","contextMenu.printScreen":"プリントスクリーン","contextMenu.closeWindow":"ウィンドウを閉じる","contextMenu.openStorefront":"ストアフロントを開く","contextMenu.quitPlatform":"プラットフォームを終了する","contextMenu.newView":"新しいビュー","contextMenu.openView":"デフォルトのウェブブラウザーでビューを開く","contextMenu.openViews":"デフォルトのウェブブラウザーでビューを開く","contextMenu.reload":"Reload JP","contextMenu.reloadView":"ビューをリロード","contextMenu.reloadViews":"ビューをリロード","contextMenu.duplicate":"Duplicate JP","contextMenu.duplicateView":"ビューを複製","contextMenu.duplicateViews":"ビューを複製","contextMenu.addView":"ビューをチャネルに追加","contextMenu.addViews":"ビューをチャネルに追加","contextMenu.removeView":"チャネルからビューを削除","contextMenu.removeViews":"チャネルからビューを削除","contextMenu.closeView":"ビューを閉じる","contextMenu.closeViews":"ビューを閉じる","contextMenu.closeTab":"Close Tab JP","contextMenu.duplicatePage":"ページを複製","contextMenu.submenu.print":"印刷","contextMenu.submenu.printAll":"すべてを印刷","saveMenu.saveWorkspaceAs":"ワークスペースを別名で保存","saveMenu.savePageAs":"ページを別名で保存","saveModal.enterValue":"Please enter a value JP","saveModal.alreadyExists":"{{title}}はすでに存在しています。","saveModal.pleaseEnterValidName":"有効な名前を入力してください","saveModal.renamePage":"ページ名を変更","saveModal.closePage":"ページを閉じる","saveModal.discardChanges":"変更を破棄","saveModal.discardAll":"すべて破棄","saveModal.saveAll":"すべて保存","saveModal.savePagesCount":"閉じる前に（{{count}}）つのページを保存しますか？","defaultPageTitle":"Untitled Page JP","enterpriseDefaultPageTitle":"Untitled Supertab JP","addNewPage":"新しいページを追加","addNewTab":"新しいタブを追加","addNewView":"新しいビュー","restoreModal":"本当に最後に保存された変更に戻しますか？","modal.discardWarning":"保存されていない変更は破棄されます","modal.discardPageWarning":"保存されていないこのページへの変更は失われます。","modal.saveChangesPrompt":"閉じる前に変更を保存しますか？","modal.pageClose":"ページを閉じる","switchWorkspaceModal":"本当に{{workspace}}に切り替えますか？","switchWorkspaceModal.warning":"保存されていない変更は破棄されます","deleteWorkspaceModal":"このワークスペースを永久に削除してもよろしいですか？","replaceWorkspaceModal.warning":"{{workspace}}という名前のワークスペースがすでに存在します。置き換えますか？","replaceWorkspaceModal.warning.body":"同じ名前のワークスペースがすでに存在します。置き換えると、現在の内容は上書きされます。","replaceWorkspaceModal.replace":"置き換える","closePlatform":"プラットフォームを閉じる","closePlatform.workspace":"{{workspace}}プラットフォームを閉じる","closePlatform.warning":"プラットフォームを閉じると、実行中のワークスペース、アプリ、プロセスがすべて閉じます。","back":"戻る","forward":"進む","reload":"リロード","green":"グリーン","purple":"パープル","orange":"オレンジ","red":"レッド","pink":"ピンク","yellow":"イエロー","theme.light":"ライト","theme.dark":"ダーク","theme.system":"OSの設定と同期","toolbar.hideTabs":"タブを非表示","toolbar.showTabs":"タブを表示","toolbar.lock":"ロック","toolbar.unlock":"ロック解除","toolbar.colorLinking":"カラーリンク","toolbar.changeLayout":"レイアウトを変更","toolbar.saveMenu":"メニューを保存","toolbar.maximizeWindow":"ウィンドウを最大化する","toolbar.restoreWindow":"ウィンドウを復元","toolbar.minimizeWindow":"ウィンドウを最小化する","changeLayout.fullWidth":"全幅","changeLayout.columns":"列","changeLayout.Rows":"行","changeLayout.Grid":"グリッド","successIndicator.workspaceSwitched":"ワークスペースが切り替わりました","successIndicator.hidden":"タブが非表示になっています","successIndicator.shown":"タブが表示されています","successIndicator.locked":"ページがロックされています","successIndicator.unlocked":"ページのロックが解除されています","successIndicator.workspaceSaved":"ワークスペースが保存されました","successIndicator.workspaceSavedAs":"ワークスペースが{{workspace}}として保存されました","successIndicator.workspaceRenamed":"ワークスペース名が変更されました","successIndicator.pageSaved":"ページが保存されました","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. JP","successIndicator.pageCopySaved":"ページが{{title}}として保存されました","successIndicator.pageRenamed":"ページ名が変更されました","successIndicator.contextGroupApplied":"コンテキストグループが適用されました","successIndicator.namedContextGroupApplied":"{{colorName}}コンテキストグループが適用されました","successIndicator.viewRemoved":"コンテキストグループからビューが削除されました","successIndicator.viewsRemoved":"コンテキストグループからビューが削除されました","successIndicator.layoutApplied":"{{layoutName}}レイアウトが適用されました","successIndicator.workspaceDeleted":"ワークスペースが削除されました","errorIndicator.pageSaveFailed":"ページを保存できませんでした","errorIndicator.workspaceSaveFailed":"ワークスペースを保存できませんでした","errorIndicator.failedToDuplicatePage":"ページを複製できませんでした","infoIndicator.colorLinkAttempt":"このタブをカラーリンクしようとしましたが、サイト/コンテンツのオーナーがまだこれを有効にしていません","global.cancel":"キャンセル","global.confirm":"確認","global.save":"保存","global.delete":"Delete JP","appResults.header":"Featured content JP","recentlyClosed.header":"Recently Closed JP","landingPage.subheader":"Apps and websites selected by an admin will show here JP","aria.openBrowser":"ブラウザーメニューを開く","aria.browserTabs":"ブラウザータブ","aria.viewTab":"{{title}}のタブを表示","aria.closePage":"{{title}}のページタブボタンを閉じる","aria.closeTab":"{{title}}タブを閉じる","aria.title":"タイトル","aria.closeContextGroup":"エスケープを使用して、コンテキストグループ選択ダイアログを閉じる","aria.colorLinking":"カラーリンクの表示/非表示","aria.applyColorLinking":"カラーリンクを適用するビューを選択してください","aria.assignColorLinkingCurrentView":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.assignColorLinkingCurrentViews":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.setColorLinkingActiveView":"アクティブビューを{{name}}コンテキストグループに設定","aria.setColorLinkingActiveViews":"アクティブビューを{{name}}コンテキストグループに設定","aria.escapeLayoutDialog":"エスケープを使用して、レイアウト変更選択ダイアログを閉じる","global.supertab":"Supertab JP","global.tab":"Tab JP","bookmarks.editBookmark":"Edit Bookmark JP","bookmarks.bookmarkAdded":"Bookmark added JP","bookmarks.done":"Done JP","bookmarks.remove":"Remove JP","bookmarks.bookmarksPanel":"Bookmarks Panel JP","bookmarks.bookmarks":"Bookmarks JP","bookmarks.allBookmarks":"All Bookmarks JP","bookmarks.favorites":"Favorites JP","bookmarks.searchBookmarks":"Search Bookmarks JP","bookmarks.clearSearchInput":"Clear Search Input JP","bookmarks.createFolder":"Create New Folder JP","bookmarks.exitFolder":"Exit Folder JP","bookmarks.newFolder":"New Folder JP","bookmarks.namedFolder":"{{name}} Folder JP","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings JP","bookmarks.folderSettings":"{{name}} Folder Settings JP","bookmarks.noResultsFound":"No results found JP","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search JP","bookmarks.nothingToShow":"Nothing to show yet JP","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder JP","bookmarks.resultsFoundIn":"Results found in {{name}} JP","bookmarks.resultsInOtherFolders":"Results found in other folders JP","bookmarks.allResultsFoundIn":"All results found in JP","bookmarks.editName":"Edit Name JP","bookmarks.move":"Move JP","bookmarks.bookmarkAddedTitle":"Bookmark Added JP","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" JP","bookmarks.bookmarkEditedTitle":"Bookmark Edited JP","enterpriseContextMenu.saveSupertab":"Save Supertab JP","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... JP","enterpriseContextMenu.duplicate":"Duplicate JP","enterpriseContextMenu.deleteSupertab":"Delete Supertab JP","enterpriseContextMenu.newTab":"New Tab JP","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As JP","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? JP","saveSupertabCount_other":"Save {{count}} Supertabs before closing? JP"},"enterpriseSaveModal.renameSupertab":"Rename JP","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. JP","enterpriseSaveModal.closeTab":"Close Tab JP","enterpriseSaveModal.closeSupertab":"Close Supertab JP","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. JP","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? JP","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. JP","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved JP","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. JP","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted JP","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. JP","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab JP","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab JP","enterpriseCommandBar.switchToSupertab":"Switch to Supertab JP","enterpriseCommandBar.goTo":"Go to {{type}} JP","enterpriseCommandBar.viewMore":"View More JP","sidePanel.aiCenter":"AI Center JP","sidePanel.newChat":"New Chat JP","sidePanel.toggleSidePanel":"Toggle Side Panel JP","sidePanel.closeSidePanel":"Close Side Panel JP","sidePanel.openAiCenter":"Open AI Center JP","contextMenu.quitEnterpriseBrowser":"Quit JP","dock.removeFavorite":"Remove JP"}'), Xe = JSON.parse('{"contextMenu.newWindow":"새 창","contextMenu.newPage":"새 페이지","contextMenu.restore":"마지막으로 저장한 변경 사항으로 복원","contextMenu.switchWorkspace":"작업 공간 전환","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"모양","contextMenu.saveWorkspace":"작업 공간 저장","contextMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장...","contextMenu.renameWorkspace":"작업 공간 이름 바꾸기","contextMenu.deleteWorkspace":"작업 공간 삭제","contextMenu.downloads":"다운로드","contextMenu.savePage":"페이지 저장","contextMenu.savePageAs":"다른 이름으로 페이지 저장...","contextMenu.print":"인쇄...","contextMenu.printScreen":"화면 인쇄","contextMenu.closeWindow":"창 닫기","contextMenu.openStorefront":"매장 열기","contextMenu.quitPlatform":"플랫폼 종료","contextMenu.newView":"새 뷰","contextMenu.openView":"기본 웹 브라우저로 뷰 열기","contextMenu.openViews":"기본 웹 브라우저로 뷰 열기","contextMenu.reload":"Reload KR","contextMenu.reloadView":"뷰 다시 로드","contextMenu.reloadViews":"뷰 다시 로드","contextMenu.duplicate":"Duplicate KR","contextMenu.duplicateView":"뷰 복제","contextMenu.duplicateViews":"뷰 복제","contextMenu.addView":"채널에 뷰 추가","contextMenu.addViews":"채널에 뷰 추가","contextMenu.removeView":"채널에서 뷰 제거","contextMenu.removeViews":"채널에서 뷰 제거","contextMenu.closeView":"뷰 닫기","contextMenu.closeViews":"뷰 닫기","contextMenu.closeTab":"Close Tab KR","contextMenu.duplicatePage":"페이지 복제","contextMenu.submenu.print":"인쇄","contextMenu.submenu.printAll":"모두 인쇄","saveMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장","saveMenu.savePageAs":"다른 이름으로 페이지 저장","saveModal.enterValue":"Please enter a value KR","saveModal.alreadyExists":"{{title}}이(가) 이미 존재합니다.","saveModal.pleaseEnterValidName":"유효한 이름을 입력하십시오.","saveModal.renamePage":"페이지 이름 바꾸기","saveModal.closePage":"페이지 닫기","saveModal.discardChanges":"변경 사항 폐기","saveModal.discardAll":"모두 폐기","saveModal.saveAll":"모두 저장","saveModal.savePagesCount":"닫기 전에 페이지({{count}}개)를 저장하시겠습니까?","defaultPageTitle":"Untitled Page KR","enterpriseDefaultPageTitle":"Untitled Supertab KR","addNewPage":"새 페이지 추가","addNewTab":"새 탭 추가","addNewView":"새 뷰","restoreModal":"마지막으로 저장한 변경 사항으로 복원하시겠습니까?","modal.discardWarning":"저장하지 않은 변경 사항은 모두 폐기됩니다","modal.discardPageWarning":"이 페이지의 저장하지 않은 변경 사항은 모두 손실됩니다.","modal.saveChangesPrompt":"닫기 전에 변경 사항을 저장하시겠습니까?","modal.pageClose":"페이지 닫기","switchWorkspaceModal":"{{workspace}}(으)로 전환하시겠습니까?","switchWorkspaceModal.warning":"저장하지 않은 변경 사항은 모두 폐기됩니다","deleteWorkspaceModal":"이 작업 공간을 영구적으로 삭제하시겠습니까?","replaceWorkspaceModal.warning":"{{workspace}}(이)라는 이름의 작업 공간이 이미 존재합니다. 교체하시겠습니까?","replaceWorkspaceModal.warning.body":"같은 이름의 작업 공간이 이미 존재합니다. 교체하면 현재 내용을 덮어쓰게 됩니다.","replaceWorkspaceModal.replace":"교체","closePlatform":"플랫폼 닫기","closePlatform.workspace":"{{workspace}} 플랫폼 닫기","closePlatform.warning":"플랫폼을 닫으면 실행 중인 모든 작업 공간, 앱 또는 프로세스가 닫힙니다.","back":"뒤로 가기","forward":"앞으로 가기","reload":"새로고침","green":"녹색","purple":"보라색","orange":"오렌지색","red":"빨간색","pink":"핑크색","yellow":"노란색","theme.light":"밝은","theme.dark":"어두운","theme.system":"OS 설정과 동기화","toolbar.hideTabs":"탭 숨기기","toolbar.showTabs":"탭 표시","toolbar.lock":"잠금","toolbar.unlock":"잠금 해제","toolbar.colorLinking":"색상 연결","toolbar.changeLayout":"레이아웃 변경","toolbar.saveMenu":"저장 메뉴","toolbar.maximizeWindow":"창 최대화","toolbar.restoreWindow":"창 복원","toolbar.minimizeWindow":"창 최소화","changeLayout.fullWidth":"전체 너비","changeLayout.columns":"열","changeLayout.Rows":"행","changeLayout.Grid":"그리드","successIndicator.workspaceSwitched":"작업 공간 전환","successIndicator.hidden":"탭 숨김","successIndicator.shown":"탭 표시","successIndicator.locked":"페이지 잠금","successIndicator.unlocked":"페이지 잠금 해제됨","successIndicator.workspaceSaved":"작업 공간 저장됨","successIndicator.workspaceSavedAs":"작업 공간이 {{workspace}}(으)로 저장됨","successIndicator.workspaceRenamed":"작업 공간 이름 변경됨","successIndicator.pageSaved":"페이지 저장됨","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. KR","successIndicator.pageCopySaved":"페이지가 {{title}}(으)로 저장됨","successIndicator.pageRenamed":"페이지 이름 변경됨","successIndicator.contextGroupApplied":"컨텍스트 그룹 적용됨","successIndicator.namedContextGroupApplied":"{{colorName}} 컨텍스트 그룹 적용됨","successIndicator.viewRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.viewsRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.layoutApplied":"{{layoutName}} 레이아웃 적용됨","successIndicator.workspaceDeleted":"작업 공간 삭제됨","errorIndicator.pageSaveFailed":"페이지 저장 실패","errorIndicator.workspaceSaveFailed":"작업 공간 저장 실패","errorIndicator.failedToDuplicatePage":"페이지 복제 실패","infoIndicator.colorLinkAttempt":"이 탭의 색상 링크를 시도했지만 사이트/콘텐츠 소유자가 아직 활성화하지 않았습니다.","global.cancel":"취소","global.confirm":"확인","global.save":"저장","global.delete":"Delete KR","appResults.header":"Featured Content KR","recentlyClosed.header":"Recently Closed KR","landingPage.subheader":"Apps and websites selected by an admin will show here KR","aria.openBrowser":"브라우저 메뉴 열기","aria.browserTabs":"브라우저 탭","aria.viewTab":"{{title}}의 뷰 탭","aria.closePage":"{{title}}의 페이지 닫기 탭","aria.closeTab":"탭 {{title}} 닫기","aria.title":"제목","aria.closeContextGroup":"이스케이프를 사용하여 컨텍스트 그룹 선택 대화상자 닫기","aria.colorLinking":"색상 연결 표시 또는 숨기기","aria.applyColorLinking":"색상 연결을 적용하려면 뷰를 선택하십시오.","aria.assignColorLinkingCurrentView":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.assignColorLinkingCurrentViews":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.setColorLinkingActiveView":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.setColorLinkingActiveViews":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.escapeLayoutDialog":"이스케이프를 사용하여 레이아웃 변경 대화상자 닫기","global.supertab":"Supertab KR","global.tab":"Tab KR","bookmarks.editBookmark":"Edit Bookmark KR","bookmarks.bookmarkAdded":"Bookmark added KR","bookmarks.done":"Done KR","bookmarks.remove":"Remove KR","bookmarks.bookmarksPanel":"Bookmarks Panel KR","bookmarks.bookmarks":"Bookmarks KR","bookmarks.allBookmarks":"All Bookmarks KR","bookmarks.favorites":"Favorites KR","bookmarks.searchBookmarks":"Search Bookmarks KR","bookmarks.clearSearchInput":"Clear Search Input KR","bookmarks.createFolder":"Create New Folder KR","bookmarks.exitFolder":"Exit Folder KR","bookmarks.newFolder":"New Folder KR","bookmarks.namedFolder":"{{name}} Folder KR","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings KR","bookmarks.folderSettings":"{{name}} Folder Settings KR","bookmarks.noResultsFound":"No results found KR","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search KR","bookmarks.nothingToShow":"Nothing to show yet KR","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder KR","bookmarks.resultsFoundIn":"Results found in {{name}} KR","bookmarks.resultsInOtherFolders":"Results found in other folders KR","bookmarks.allResultsFoundIn":"All results found in KR","bookmarks.editName":"Edit Name KR","bookmarks.move":"Move KR","bookmarks.bookmarkAddedTitle":"Bookmark Added KR","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" KR","bookmarks.bookmarkEditedTitle":"Bookmark Edited KR","enterpriseContextMenu.saveSupertab":"Save Supertab KR","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... KR","enterpriseContextMenu.duplicate":"Duplicate KR","enterpriseContextMenu.deleteSupertab":"Delete Supertab KR","enterpriseContextMenu.newTab":"New Tab KR","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As KR","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? KR","saveSupertabCount_other":"Save {{count}} Supertabs before closing? KR"},"enterpriseSaveModal.renameSupertab":"Rename KR","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. KR","enterpriseSaveModal.closeTab":"Close Tab KR","enterpriseSaveModal.closeSupertab":"Close Supertab KR","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. KR","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? KR","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. KR","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved KR","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. KR","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted KR","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. KR","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab KR","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab KR","enterpriseCommandBar.switchToSupertab":"Switch to Supertab KR","enterpriseCommandBar.goTo":"Go to {{type}} KR","enterpriseCommandBar.viewMore":"View More KR","sidePanel.aiCenter":"AI Center KR","sidePanel.newChat":"New Chat KR","sidePanel.toggleSidePanel":"Toggle Side Panel KR","sidePanel.closeSidePanel":"Close Side Panel KR","sidePanel.openAiCenter":"Open AI Center KR","contextMenu.quitEnterpriseBrowser":"Quit KR","dock.removeFavorite":"Remove KR"}'), ot = JSON.parse('{"contextMenu.newWindow":"Новое окно","contextMenu.newPage":"Новая страница","contextMenu.restore":"Восстановить последние сохраненные изменения","contextMenu.switchWorkspace":"Переключить рабочую область","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Внешний вид","contextMenu.saveWorkspace":"Сохранить рабочую область","contextMenu.saveWorkspaceAs":"Сохранить рабочую область как...","contextMenu.renameWorkspace":"Переименовать рабочую область","contextMenu.deleteWorkspace":"Удалить рабочую область","contextMenu.downloads":"Загрузки","contextMenu.savePage":"Сохранить страницу","contextMenu.savePageAs":"Сохранить страницу как...","contextMenu.print":"Печать...","contextMenu.printScreen":"Распечатать экран","contextMenu.closeWindow":"Закрыть окно","contextMenu.openStorefront":"Открыть Storefront","contextMenu.quitPlatform":"Выйти из платформы","contextMenu.newView":"Новое представление","contextMenu.openView":"Открыть представление с помощью веб-браузера по умолчанию","contextMenu.openViews":"Открыть представления с помощью веб-браузера по умолчанию","contextMenu.reload":"Reload RU","contextMenu.reloadView":"Перезагрузить представление","contextMenu.reloadViews":"Перезагрузить представления","contextMenu.duplicate":"Duplicate RU","contextMenu.duplicateView":"Дублировать представление","contextMenu.duplicateViews":"Дублировать представления","contextMenu.addView":"Добавить представление на канал","contextMenu.addViews":"Добавить представления на канал","contextMenu.removeView":"Удалить представление из канала","contextMenu.removeViews":"Удалить представления из канала","contextMenu.closeView":"Закрыть представление","contextMenu.closeViews":"Закрыть представления","contextMenu.closeTab":"Close Tab RU","contextMenu.duplicatePage":"Дублировать страницу","contextMenu.submenu.print":"Печатать","contextMenu.submenu.printAll":"Печатать все","saveMenu.saveWorkspaceAs":"Сохранить рабочую область как","saveMenu.savePageAs":"Сохранить страницу как","saveModal.enterValue":"Please enter a value RU","saveModal.alreadyExists":"{{title}} уже существует.","saveModal.pleaseEnterValidName":"Введите подходящее имя","saveModal.renamePage":"Переименовать страницу","saveModal.closePage":"Закрыть страницу","saveModal.discardChanges":"Отменить изменения","saveModal.discardAll":"Отменить все","saveModal.saveAll":"Сохранить все","saveModal.savePagesCount":"Сохранить ({{count}}) страниц перед закрытием?","defaultPageTitle":"Untitled Page RU","enterpriseDefaultPageTitle":"Untitled Supertab RU","addNewPage":"Добавить новую страницу","addNewTab":"Добавить новую вкладку","addNewView":"Новое представление","restoreModal":"Вы уверены, что хотите восстановить последние сохраненные изменения?","modal.discardWarning":"Все несохраненные изменения будут отменены","modal.discardPageWarning":"Все несохраненные изменения на этой странице будут потеряны.","modal.saveChangesPrompt":"Сохранить изменения перед закрытием?","modal.pageClose":"Закрыть страницу","switchWorkspaceModal":"Вы уверены, что хотите перейти в {{workspace}}?","switchWorkspaceModal.warning":"Все несохраненные изменения будут отменены","deleteWorkspaceModal":"Вы уверены, что хотите навсегда удалить эту рабочую область?","replaceWorkspaceModal.warning":"Рабочая область с именем {{workspace}} уже существует. Вы хотите заменить ее?","replaceWorkspaceModal.warning.body":"Рабочая область с таким же именем уже существует. При ее замене текущее содержимое будет перезаписано.","replaceWorkspaceModal.replace":"Заменить","closePlatform":"Закрыть платформу","closePlatform.workspace":"Закрыть платформу {{workspace}}","closePlatform.warning":"Закрытие платформы приведет к закрытию всех рабочих областей, приложений и запущенных процессов.","back":"Назад","forward":"Вперед","reload":"Перезагрузить ","green":"Зеленый","purple":"Фиолетовый","orange":"Оранжевый","red":"Красный","pink":"Розовый","yellow":"Желтый","theme.light":"Светлый","theme.dark":"Темный","theme.system":"Синхронизировать с настройками ОС","toolbar.hideTabs":"Скрыть вкладки","toolbar.showTabs":"Показать вкладки","toolbar.lock":"Заблокировать","toolbar.unlock":"Разблокировать","toolbar.colorLinking":"Привязка к цвету","toolbar.changeLayout":"Изменить макет","toolbar.saveMenu":"Меню сохранения","toolbar.maximizeWindow":"Увеличить окно","toolbar.restoreWindow":"Восстановить окно","toolbar.minimizeWindow":"Свернуть окно","changeLayout.fullWidth":"Полная ширина","changeLayout.columns":"Столбцы","changeLayout.Rows":"Строки","changeLayout.Grid":"Сетка","successIndicator.workspaceSwitched":"Рабочая область переключена","successIndicator.hidden":"Вкладки скрыты","successIndicator.shown":"Вкладки показаны","successIndicator.locked":"Страница заблокирована","successIndicator.unlocked":"Страница разблокирована","successIndicator.workspaceSaved":"Рабочая область сохранена","successIndicator.workspaceSavedAs":"Рабочая область сохранена как {{workspace}}","successIndicator.workspaceRenamed":"Рабочая область переименована","successIndicator.pageSaved":"Страница сохранена","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. RU","successIndicator.pageCopySaved":"Страница сохранена как {{title}}","successIndicator.pageRenamed":"Страница переименована","successIndicator.contextGroupApplied":"Контекстная группа применена","successIndicator.namedContextGroupApplied":"Контекстная группа {{colorName}} применена","successIndicator.viewRemoved":"Представление удалено из контекстной группы","successIndicator.viewsRemoved":"Представления удалены из контекстной группы","successIndicator.layoutApplied":"Макет {{layoutName}} применен","successIndicator.workspaceDeleted":"Рабочая область удалена","errorIndicator.pageSaveFailed":"Не удалось сохранить страницу","errorIndicator.workspaceSaveFailed":"Не удалось сохранить рабочую область","errorIndicator.failedToDuplicatePage":"Не удалось продублировать страницу","infoIndicator.colorLinkAttempt":"Мы попытались привязать цвет к этой вкладке, но владелец сайта/контента еще не включил эту возможность","global.cancel":"Отменить","global.confirm":"Подтвердить","global.save":"Сохранить","global.delete":"Delete RU","appResults.header":"Featured Content RU","recentlyClosed.header":"Recently Closed RU","landingPage.subheader":"Apps and websites selected by an admin will show here RU","aria.openBrowser":"Открыть меню браузера","aria.browserTabs":"Вкладки браузера","aria.viewTab":"Вкладка представления {{title}}","aria.closePage":"Кнопка «Закрыть» на вкладке для страницы {{title}}","aria.closeTab":"Закрыть вкладку {{title}}","aria.title":"Название","aria.closeContextGroup":"Чтобы закрыть диалог выбора контекстной группы, используйте escape","aria.colorLinking":"Показать или скрыть привязку к цвету","aria.applyColorLinking":"Выберите представление, чтобы применить привязку к цвету","aria.assignColorLinkingCurrentView":"Текущее представление, назначенное контекстной группе {{name}}","aria.assignColorLinkingCurrentViews":"Текущие представления, назначенные контекстной группе {{name}}","aria.setColorLinkingActiveView":"Установить активное представление в контекстную группу {{name}}","aria.setColorLinkingActiveViews":"Установить активные представления в контекстную группу {{name}}","aria.escapeLayoutDialog":"Чтобы закрыть диалог изменения макета, используйте escape","global.supertab":"Supertab RU","global.tab":"Tab RU","bookmarks.editBookmark":"Edit Bookmark RU","bookmarks.bookmarkAdded":"Bookmark added RU","bookmarks.done":"Done RU","bookmarks.remove":"Remove RU","bookmarks.bookmarksPanel":"Bookmarks Panel RU","bookmarks.bookmarks":"Bookmarks RU","bookmarks.allBookmarks":"All Bookmarks RU","bookmarks.favorites":"Favorites RU","bookmarks.searchBookmarks":"Search Bookmarks RU","bookmarks.clearSearchInput":"Clear Search Input RU","bookmarks.createFolder":"Create New Folder RU","bookmarks.exitFolder":"Exit Folder RU","bookmarks.newFolder":"New Folder RU","bookmarks.namedFolder":"{{name}} Folder RU","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings RU","bookmarks.folderSettings":"{{name}} Folder Settings RU","bookmarks.noResultsFound":"No results found RU","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search RU","bookmarks.nothingToShow":"Nothing to show yet RU","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder RU","bookmarks.resultsFoundIn":"Results found in {{name}} RU","bookmarks.resultsInOtherFolders":"Results found in other folders RU","bookmarks.allResultsFoundIn":"All results found in RU","bookmarks.editName":"Edit Name RU","bookmarks.move":"Move RU","bookmarks.bookmarkAddedTitle":"Bookmark Added RU","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" RU","bookmarks.bookmarkEditedTitle":"Bookmark Edited RU","enterpriseContextMenu.saveSupertab":"Save Supertab RU","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... RU","enterpriseContextMenu.duplicate":"Duplicate RU","enterpriseContextMenu.deleteSupertab":"Delete Supertab RU","enterpriseContextMenu.newTab":"New Tab RU","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As RU","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? RU","saveSupertabCount_other":"Save {{count}} Supertabs before closing? RU"},"enterpriseSaveModal.renameSupertab":"Rename RU","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. RU","enterpriseSaveModal.closeTab":"Close Tab RU","enterpriseSaveModal.closeSupertab":"Close Supertab RU","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. RU","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? RU","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. RU","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved RU","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.RU","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted RU","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. RU","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab RU","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab RU","enterpriseCommandBar.switchToSupertab":"Switch to Supertab RU","enterpriseCommandBar.goTo":"Go to {{type}} RU","enterpriseCommandBar.viewMore":"View More RU","sidePanel.aiCenter":"AI Center RU","sidePanel.newChat":"New Chat RU","sidePanel.toggleSidePanel":"Toggle Side Panel RU","sidePanel.closeSidePanel":"Close Side Panel RU","sidePanel.openAiCenter":"Open AI Center RU","contextMenu.quitEnterpriseBrowser":"Quit RU","dock.removeFavorite":"Remove RU"}'), ne = me().t, sn = async (e) => await (await It(e)).dispatch(At.GetPages), ze = async (e) => (await It(e.identity)).dispatch(At.UpdatePageForWindow, e);
    let Jt, Yt = !1;
    const fa = () => Yt, Zt = () => Jt || { enabled: !1 };
    async function Nn(e, n) {
      const r = !!n;
      let s = /* @__PURE__ */ new Set();
      if (r) {
        const { identity: c, pageId: w } = n, S = v().Browser.wrapSync(c), b = await S.getPage(w);
        b != null && b.panels && (s = new Set(b.panels.map(({ viewOptions: F }) => F.name)));
      }
      return e.map((c) => {
        const w = c.viewOptions.name;
        (w == null ? void 0 : w.startsWith(N)) && (!r || r && !s.has(w)) && delete c.viewOptions.name;
        const b = (F = c.viewOptions, F.name || (F.name = `${N}${zt()}`), F);
        var F;
        return { ...c, viewOptions: { ...b, uuid: ye.uuid } };
      });
    }
    async function tr(e) {
      for (const n of e) n.panels && await fi(n.panels);
    }
    const cc = (e) => e !== null && typeof e == "object" && "message" in e && typeof e.message == "string" && /ERR_([A-Z]+_*)+/.test(e.message);
    async function fi(e) {
      const n = e.map((r) => fin.Platform.getCurrentSync().createView(r.viewOptions, fin.me.identity).catch((s) => {
        if (!cc(s)) throw s;
        console.error(s);
      }));
      return await Promise.all(n);
    }
    const hi = (e, n) => !n.find((r) => r === e), gi = (e, n) => `${e} (${n})`, Co = (e, n) => {
      if (hi(e, n)) return e;
      let r = 1;
      const s = e.replace(/ *\(\d+\)$/, "");
      for (; !hi(gi(s, r), n); ) r += 1;
      return gi(s, r);
    }, Rr = async () => {
      const e = await Ge();
      return (await Promise.all(e.map(async (n) => {
        var r;
        try {
          return sn(n.identity);
        } catch {
          return JSON.stringify(n.identity), ((r = (await n.getOptions()).workspacePlatform) == null ? void 0 : r.pages) || [];
        }
      }))).reduce((n, r) => n.concat(r), []);
    }, uc = async () => (await ve(ye)).dispatch(fe.GetSavedPages, void 0), mi = async (e) => (await ve(ye)).dispatch(fe.GetSavedPage, e), wi = async (e, n) => {
      const r = await (async (s) => (await Rr()).find((c) => c.pageId === s))(e);
      return !r || r.title === n.title && e === n.pageId || await ze({ identity: r.parentIdentity, pageId: e, page: { pageId: n.pageId, title: n.title } }), r;
    }, yi = async ({ page: e }) => {
      await wi(e.pageId, e), await (async (n) => (await ve(ye)).dispatch(fe.CreateSavedPage, n))({ page: e });
    }, lc = async (e) => {
      await mi(e) && await (async (n) => (await ve(ye)).dispatch(fe.DeleteSavedPage, n))(e);
    }, bi = async ({ pageId: e, page: n }) => (await wi(e, n), await (async (r) => (await ve(ye)).dispatch(fe.UpdateSavedPage, r))({ pageId: e, page: n })), vi = async (e) => await mi(e.pageId) ? bi({ pageId: e.pageId, page: e }) : yi({ page: e }), dc = async (e) => {
      await (async (n) => (await It(n.identity)).dispatch(At.AttachPagesToWindow, n))(e);
    }, pc = async (e) => {
      const n = { ...e.page, panels: e.page.panels && await Nn(e.page.panels, e) };
      n.panels && await fi(n.panels), await ze({ ...e, page: n });
    }, fc = async (e) => {
      await (async (n) => (await It(n.identity)).dispatch(At.DetachPagesFromWindow, n))(e);
    }, hc = async (e) => {
      await (async (n) => (await It(n.identity)).dispatch(At.SetActivePageForWindow, n))(e);
    }, ki = (e) => sn(e), gc = async ({ identity: e, pageId: n }) => (await ki(e)).find((r) => r.pageId === n), mc = async (e) => {
      await (async (n) => (await It(n.identity)).dispatch(At.ReorderPagesForWindow, n))(e);
    }, Si = new class {
      constructor() {
        this.queue = [], this.locked = !1;
      }
      lock() {
        return new Promise((e) => {
          this.locked ? this.queue.push(e) : (this.locked = !0, e());
        });
      }
      unlock() {
        if (this.queue.length > 0) {
          const e = this.queue.shift();
          e && e();
        } else this.locked = !1;
      }
    }();
    async function Pi(e) {
      await Si.lock();
      try {
        const n = fa() ? ne("enterpriseDefaultPageTitle") : ne("defaultPageTitle"), r = e ?? n, [s, c] = await Promise.all([uc(), Rr()]), w = [...s, ...c].map(({ title: S }) => S);
        return Co(r, w);
      } finally {
        Si.unlock();
      }
    }
    async function wc({ page: e }) {
      return { shouldShowModal: !(!e || !e.hasUnsavedChanges) };
    }
    async function yc({ page: e, identity: n }) {
      if ((await fin.Application.getCurrentSync().getInfo()).initialOptions.enableBeforeUnload) {
        const s = await fin.Application.getCurrentSync().getViews(), c = B(e.layout.content).filter((S) => S.name && s.some((b) => b.identity.name === S.name)).map((S) => fin.View.wrapSync({ name: S.name, uuid: n.uuid })), w = await this.checkViewsForPreventUnload(c);
        if (w.viewsPreventingUnload.length > 0 && (await this.getUserDecisionForBeforeUnload({ ...w, windowId: n, windowShouldClose: !1, closeType: "page" })).viewsToClose.length !== c.length)
          return e.pageId, { shouldPageClose: !1 };
      }
      return { shouldPageClose: !0 };
    }
    async function bc({ pages: e, identity: n }) {
      const r = await Promise.all(e.map((w) => this.shouldPageClose({ page: w, closeType: "window", identity: n }))), { pagesPreventingClose: s, pagesNotPreventingClose: c } = e.reduce((w, S, b) => r[b].shouldPageClose ? { pagesPreventingClose: w.pagesPreventingClose, pagesNotPreventingClose: [...w.pagesNotPreventingClose, S] } : { pagesNotPreventingClose: w.pagesNotPreventingClose, pagesPreventingClose: [...w.pagesPreventingClose, S] }, { pagesPreventingClose: [], pagesNotPreventingClose: [] });
      return this.handlePagesAndWindowClose({ pagesNotPreventingClose: c, pagesPreventingClose: s, identity: n });
    }
    async function vc({ pagesPreventingClose: e, pagesNotPreventingClose: n, identity: r }) {
      return { shouldWindowClose: e.length === 0 };
    }
    async function kc({ page: e }) {
      return za(e);
    }
    async function Sc(e) {
      return { hasUnsavedChanges: !0 };
    }
    const Pc = async () => {
      const e = v(), n = (await Ge()).map((r) => e.Browser.wrapSync(r.identity));
      await Promise.all(n.map(async (r) => {
        const s = await r.getPages();
        await Promise.all(s.map(async (c) => {
          c.title, await r.updatePage({ pageId: c.pageId, page: { hasUnsavedChanges: !1 } }), c.pageId, c.title, await vi({ ...c, hasUnsavedChanges: !1 });
        }));
      }));
    }, Mo = /* @__PURE__ */ new Map(), xc = () => Mo, xi = (e) => Mo.delete(e);
    let Io = !1;
    const Cc = () => {
      Io || (Io = !0, fin.Window.wrapSync(Ze).once("closed", () => {
        Io = !1, (async (e, n) => {
          await zr(Gr(e), { source: "Store", ...n });
        })(fin.me.identity, { type: "Navigation", action: "Close Store", skipValueHashing: !0 });
      }));
    };
    let Wa, Ci, Ao;
    const Mi = async () => (Ao === void 0 && (Ao = !!(await ht()).disableOpenFinAnalytics), Ao);
    async function Mc(e) {
      e.forEach((r) => {
        var s, c;
        r.type === "Page" ? r.action === "Open Page" ? (s = r.data.uuid, c = r, Mo.set(s, c)) : r.action === "Close Page" && xi(r.data.uuid) : r.source === "Store" && r.action !== "Close" && Cc();
      }), await (async (r) => {
        Wa != null && Wa.sendToOpenFin && (await Mi() || r.forEach(async (s) => {
          const c = na({}, s);
          c.entityId && (c.entityId.uuid = await Ta(c.entityId.uuid), c.entityId.name = await Ta(c.entityId.name)), !s.skipValueHashing && "value" in c && (c.value = await Ta(c.value)), Ci(c);
        }));
      })(e);
      const n = e.map(({ skipValueHashing: r, ...s }) => s);
      this.handleAnalytics(n);
    }
    const Ic = async (e) => {
      Wa = e, Wa != null && Wa.sendToOpenFin && !await Mi() && (() => {
        const r = tt, s = r + $.Analytics, c = document.createElement("IFRAME");
        c.setAttribute("src", s), c.setAttribute("style", "width: 0px !important"), c.setAttribute("style", "height: 0px !important"), c.setAttribute("style", "display: none !important"), document.body.appendChild(c), Ci = async (w) => {
          c.contentWindow.postMessage(w, r);
        };
      })();
      const n = fin.Application.getCurrentSync();
      n.addListener("view-created", async (r) => {
        var s;
        en({ type: "View", action: "Open View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid, url: await (s = r.viewIdentity, fin.View.wrapSync(s).getInfo().then((c) => c.url)) } });
      }), n.addListener("view-destroyed", async (r) => {
        en({ type: "View", action: "Close View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid } });
      }), n.addListener("window-closed", (r) => {
        r.name.startsWith(h.BrowserMenu) || (en({ type: "Window", action: "Close Window", value: r.name, data: { uuid: r.uuid } }), (async () => {
          const s = xc(), c = await Rr();
          if (c.length === s.size) return;
          const w = c.reduce((S, b) => S.set(b.pageId, 1), /* @__PURE__ */ new Map());
          for (const [S, b] of s) w.has(S) || (b.action = "Close Page", en(b), xi(S));
        })());
      });
    }, Ac = Vt({ alwaysOnTop: !0, autoShow: !1, frame: !1, resizable: !1, showTaskbarIcon: !1 }), Ec = /* @__PURE__ */ function(e = Ac) {
      const n = /* @__PURE__ */ new Map();
      return async (r, s, c, w, S) => {
        if (n.has(r)) {
          const { currentUrl: Q, currentName: J } = n.get(r);
          if (Q === s) return;
          await fin.Window.wrapSync({ uuid: fin.me.uuid, name: J }).close();
        }
        const b = `${h.BrowserIndicator}-${Date.now()}${Math.random()}`;
        n.set(r, { currentUrl: s, currentName: b });
        const F = `New ${w} indicator: ${c} ${S}`, V = await fin.Platform.getCurrentSync().createWindow({ ...e, name: b, url: s });
        ((Q, J) => {
          const ae = document.createElement("div");
          ae.setAttribute("role", "alert"), ae.setAttribute("aria-live", "polite"), ((ue) => {
            ue.style.position = "absolute", ue.style.width = "1px", ue.style.height = "1px", ue.style.padding = "0", ue.style.margin = "-1px", ue.style.overflow = "hidden", ue.style.whiteSpace = "nowrap", ue.style.border = "0";
          })(ae), document.body.appendChild(ae), setTimeout(() => {
            ae.innerHTML = Q;
          }, 300), setTimeout(() => {
            document.body.removeChild(ae);
          }, 1e3);
        })(F), V.once("closed", () => {
          n.delete(r);
        });
      };
    }();
    async function Eo(e) {
      const { parentBrowserName: n } = e;
      return n && n.includes(h.BrowserWindow) && fin.me.name !== n ? (await It({ uuid: fin.me.uuid, name: n })).dispatch(At.ShowBrowserIndicator, e) : async function(r) {
        const { type: s, message: c, parentBrowserName: w, secondaryMessage: S, icon: b, isEnterprise: F, positioning: V } = r, Q = new URLSearchParams();
        if (Q.append("type", s), Q.append("message", c), Q.append("parentName", w || ""), Q.append("secondaryMessage", S || ""), Q.append("icon", b || ""), Q.append("isEnterprise", `${F}` || ""), V === ga.RelativeToMonitor && Q.append("positioning", ga.RelativeToMonitor), w) {
          const ue = de(w ? { uuid: Ve, name: w } : void 0), Ce = `${(J = await ue.getBounds()).top},${J.left},${J.height},${J.width},${J.bottom},${J.right},${J.content.top},${J.content.left},${J.content.height},${J.content.width}`;
          Q.append("parentBounds", Ce);
        }
        var J;
        const ae = `${(F ? await Kt() : await dn()) + $.BrowserIndicator}#${Q.toString()}`;
        return Ec("browser" + w, ae, c, s, S);
      }(e);
    }
    async function eo(e) {
      const n = e.isEnterprise ?? await Mt(e.parentBrowserName ? { uuid: Ve, name: e.parentBrowserName } : void 0);
      return Eo({ type: "success", message: e.message, parentBrowserName: e.parentBrowserName, secondaryMessage: e.secondaryMessage, icon: e.icon, isEnterprise: n, positioning: e.positioning });
    }
    const Ba = async (e = ye) => {
      const { workspacePlatform: n } = await de(e).getOptions(), r = n == null ? void 0 : n.newPageUrl, s = n == null ? void 0 : n.newTabUrl;
      return { newPageUrl: r, newTabUrl: s };
    }, to = async (e = ye) => {
      const n = await Mt(e) || fa(), r = n ? null : await v().Browser.getUniquePageTitle();
      let s;
      if (e && await ut(e)) s = await (async (w, S = ye) => {
        const { newPageUrl: b } = await Ba(S);
        if (!b) throw new Error("Trying to create a new page without a newPageUrl set");
        return K(w, b, S);
      })(r, e);
      else if (n) {
        const w = await rt();
        s = await K(r, w);
      }
      n && (s.settings = s.settings ?? {}, s.dimensions = s.dimensions ?? {}, s.settings.hasHeaders = !1, s.settings.reorderEnabled = !0, s.dimensions.headerHeight = 0);
      const c = await kn(r, s);
      return n && (c.hasUnsavedChanges = !1), c;
    }, Tc = async (e, n, r) => {
      const { windowOptions: s, content: c } = await (async (b, F) => {
        const V = await Mt(F);
        return { title: "Switch Workspace", windowOptions: { url: await Pe(V, !1) + $.ResponseModal, name: h.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: F }, content: { title: ne("switchWorkspaceModal", { workspace: b }), body: ne("switchWorkspaceModal.warning"), buttons: { right: [{ label: ne("global.cancel"), type: "secondary", id: "Cancel" }, { label: ne("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(n, r ? void 0 : e), w = await Yn(s, e, r), S = { ...s, top: w.top, left: w.left };
      return (await da({ options: S, content: c })).data.actionName === "Confirm";
    }, _c = async ({ workspaceTitle: e, windowIdentity: n }) => {
      const { windowOptions: r, content: s } = await (async ({ workspaceTitle: S, windowIdentity: b }) => {
        const F = await Mt(b);
        return { title: "Delete Workspace", windowOptions: { url: await Pe(F, !1) + $.ResponseModal, name: h.BrowserMenu, defaultHeight: 144, defaultWidth: 410, modalParentIdentity: b }, content: { title: ne("deleteWorkspaceModal"), body: `${S}`, buttons: { right: [{ label: ne("global.cancel"), type: "secondary", id: "Cancel" }, { label: ne("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })({ workspaceTitle: e, windowIdentity: n }), c = await Yn(r, r.modalParentIdentity), w = { ...r, top: c.top, left: c.left };
      return (await da({ options: w, content: s })).data.actionName === "Confirm";
    }, Ii = async (e, n, r) => {
      const { windowOptions: s, content: c } = await (async (b, F, V) => {
        const Q = await Mt(b);
        return { title: "Platform Quit", windowOptions: { url: await Pe(Q, !1) + $.ResponseModal, name: h.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: V ? void 0 : b }, content: { title: ne(F === "Platform" ? "closePlatform" : "closePlatform.workspace", { workspace: F }), body: ne("closePlatform.warning"), buttons: { right: [{ label: ne("global.cancel"), type: "secondary", id: "Cancel" }, { label: ne("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e, n, r), w = await Yn(s, e, r), S = { ...s, top: w.top, left: w.left };
      return (await da({ options: S, content: c })).data.actionName === "Confirm";
    }, Rc = async (e) => {
      const { windowOptions: n, content: r } = await (async (w) => {
        const S = await Mt(w);
        return { title: "Restore Changes", windowOptions: { url: await Pe(S, !1) + $.ResponseModal, name: h.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: w }, content: { title: ne("restoreModal"), body: ne("modal.discardWarning"), buttons: { right: [{ label: ne("global.cancel"), type: "secondary", id: "Cancel" }, { label: ne("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e), s = await Yn(n, n.modalParentIdentity), c = { ...n, top: s.top, left: s.left };
      return (await da({ options: c, content: r })).data.actionName === "Confirm";
    }, Dc = async (e, n) => {
      const { windowOptions: r, content: s } = await (async (S, b) => {
        const F = await Mt(S);
        return { title: "Delete Page", windowOptions: { url: new URL(await Pe(F, !1) + $.ResponseModal).toString(), name: h.BrowserMenu, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: S }, content: { title: ne("enterpriseDeleteModal.deleteSupertab", { title: b }), body: ne("enterpriseDeleteModal.deleteSupertabWarning"), buttons: { right: [{ label: ne("global.cancel"), type: "secondary", id: "Cancel", variant: F ? "outline" : void 0 }, { label: ne("global.delete"), type: "primary", id: "Delete", variant: F ? "submit" : void 0 }] } } };
      })(e, n), c = await Yn(r, r.modalParentIdentity), w = { ...r, top: c.top, left: c.left };
      return (await da({ options: w, content: s })).data.actionName === "Delete";
    }, Oc = async ({ identity: e, title: n, description: r }) => {
      var F;
      const { windowOptions: s, content: c } = await (async (V, Q, J) => ({ title: "Update Version", windowOptions: { url: await Kt() + $.ResponseModal, name: h.UpdateVersionModal, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: V, preventBlur: !0, closeOnResponse: !0, includeInSnapshots: !1 }, content: { title: Q, body: J, buttons: { right: [{ label: "Snooze", type: "secondary", id: "snooze" }, { label: "Restart", type: "primary", id: "restart" }] } } }))(e, n, r), w = fin.Window.wrapSync({ uuid: e.uuid, name: `${s.name}--${(F = s.modalParentIdentity) == null ? void 0 : F.name}` });
      try {
        if (await (w == null ? void 0 : w.isShowing())) return;
      } catch {
      }
      const S = await Yn(s, s.modalParentIdentity), b = { ...s, top: S.top, left: S.left };
      return (await da({ options: b, content: c })).data;
    };
    async function Ai({ options: e, ...n }) {
      var w;
      if (!(e != null && e.skipPrompt || await Tc(e == null ? void 0 : e.promptContainerWindowIdentity, n.title, e == null ? void 0 : e.shouldCenterModalOnMonitor))) return !1;
      const s = !!(await fin.Application.getCurrentSync().getChildWindows()).find(({ identity: S }) => S.name === h.DockCompanion || S.name === Lt) || fa() ? { closeExistingWindows: !1, closeSnapshotWindows: !0 } : { closeExistingWindows: ((w = e == null ? void 0 : e.applySnapshotOptions) == null ? void 0 : w.closeExistingWindows) ?? !0 };
      return await v().applySnapshot(n.snapshot, { ...(e == null ? void 0 : e.applySnapshotOptions) ?? {}, ...s }), To(n), Eo({ type: "success", message: ne("successIndicator.workspaceSwitched"), positioning: ga.RelativeToMonitor }).catch(console.warn), !0;
    }
    async function Wc(e) {
      try {
        return await Ai(e);
      } catch (n) {
        return console.error("failed to apply the current workspace: ", n), !1;
      }
    }
    async function Ei(e) {
      try {
        const n = await async function() {
          const r = v(), s = await r.getCurrentWorkspace({ skipSnapshotUpdate: !0 });
          return (await r.Storage.getWorkspaces()).find((c) => c.workspaceId === s.workspaceId);
        }();
        return n ? e != null && e.skipPrompt || await Rc(e == null ? void 0 : e.promptContainerWindowIdentity) ? (await Ai({ options: { skipPrompt: !0, applySnapshotOptions: e == null ? void 0 : e.applySnapshotOptions }, ...n }), "success") : "user-declined" : "not-saved-workspace";
      } catch (n) {
        throw console.error("failed to restore last saved workspace: ", n), n;
      }
    }
    function To(e) {
      if (typeof localStorage < "u") try {
        const n = JSON.stringify(e);
        ct(bt.CurrentWorkspaceId, n);
      } catch (n) {
        console.error("failed to set the active workspace: ", n);
      }
    }
    async function _o() {
      const e = v(), n = await e.getSnapshot();
      return { workspaceId: zt(), title: await Lc(), metadata: { APIVersion: we }, snapshot: n };
    }
    async function Bc(e) {
      if (typeof localStorage > "u") return _o();
      const n = Ca(bt.CurrentWorkspaceId);
      if (!n) return _o();
      const r = JSON.parse(n);
      if (e != null && e.skipSnapshotUpdate) return r;
      const s = v(), c = await s.getSnapshot();
      return { ...r, metadata: { APIVersion: we }, snapshot: c };
    }
    const Nc = async () => (await ve(ye)).dispatch(fe.GetSavedWorkspaces, void 0), Fc = async (e) => await (async (n) => (await ve(ye)).dispatch(fe.GetSavedWorkspace, n))(e.workspaceId) ? (async (n) => (await ve(ye)).dispatch(fe.UpdateSavedWorkspace, n))({ workspaceId: e.workspaceId, workspace: e }) : (async (n) => (await ve(ye)).dispatch(fe.CreateSavedWorkspace, n))({ workspace: e });
    async function Lc(e = "Untitled Workspace") {
      const n = (await Nc()).map(({ title: r }) => r);
      return Co(e, n);
    }
    const Vc = (e) => ({ ...e, snapshot: { ...e.snapshot, windows: e.snapshot.windows.map((n) => {
      var r, s;
      return { ...n, workspacePlatform: { ...n.workspacePlatform, pages: (s = (r = n.workspacePlatform) == null ? void 0 : r.pages) == null ? void 0 : s.map((c) => ({ ...c, hasUnsavedChanges: !1 })) } };
    }) } }), Uc = async (e, n) => {
      await (n ?? v()).Storage.saveWorkspace(Vc(e)), await (async () => (await ve(ye)).dispatch(fe.MarkUnsavedPagesAsSavedInternal, void 0))();
    }, Ti = async (e) => {
      const n = v();
      await (async ({ showModal: r, afterSuccessSave: s }) => {
        const c = v(), w = await c.getCurrentWorkspace(), S = await c.Storage.getWorkspacesMetadata(), b = w.workspaceId;
        S.some((F) => F.workspaceId === b) ? (await Uc(w, c), await c.setActiveWorkspace(w), await s()) : await r();
      })({ showModal: async () => {
        await n.Browser.wrapSync(e)._openSaveModal({ menuType: Le.SAVE_WORKSPACE_AS });
      }, afterSuccessSave: async () => {
        await eo({ message: ne("successIndicator.workspaceSaved"), parentBrowserName: e.name });
      } });
    }, Ro = (e) => {
      v().Browser.wrapSync(e)._openSaveModal({ menuType: Le.SAVE_WORKSPACE_AS });
    }, _i = async (e) => {
      const n = v().Browser.wrapSync(e), { newPageUrl: r } = await Ba(), s = await to(e), c = r || void 0;
      await n._addDefaultPage({ identity: e, page: s, newPageUrl: c });
    }, Do = async (e, n) => {
      const r = v().Browser.wrapSync(e), s = await v().Storage.getPages(), c = (await r.getPages()).find((V) => n ? V.pageId === n : V.isActive), w = s.some((V) => c.pageId === V.pageId), S = await Mt(e);
      if (w) try {
        await v().Storage.savePage((F = c, { ...F, hasUnsavedChanges: void 0, parentIdentity: void 0, isActive: void 0, layout: O(F.layout) })), await r.updatePage({ pageId: c.pageId, page: { hasUnsavedChanges: !1 } }), eo({ message: ne(S ? "enterpriseSuccessIndicator.supertabSaved" : "successIndicator.pageSaved"), parentBrowserName: e.name, secondaryMessage: ne(S ? "enterpriseSuccessIndicator.supertabHasBeenSaved" : "successIndicator.pageHasBeenSaved", { title: c.title }), isEnterprise: S });
      } catch {
        Eo({ type: "error", message: (b = { message: ne("errorIndicator.pageSaveFailed"), parentBrowserName: c.parentIdentity.name }).message, parentBrowserName: b.parentBrowserName, icon: b.icon, isEnterprise: b.isEnterprise || !1, positioning: b.positioning });
      }
      else r._openSaveModal({ id: c.pageId, menuType: Le.SAVE_PAGE });
      var b, F;
    }, Oo = async (e, n) => {
      const r = v().Browser.wrapSync(e), s = (await r.getPages()).find((c) => n ? c.pageId === n : c.isActive);
      r._openSaveModal({ id: s.pageId, menuType: Le.SAVE_PAGE_AS }), en({ type: "Page Modal", action: "Select Save As", value: s.title, skipValueHashing: !0 });
    }, jc = async (e, n) => {
      await (async ({ workspaceItemData: r, winIdentity: s, positioning: c }) => {
        const w = v(), S = (await w.Storage.getWorkspacesMetadata()).find((b) => b.workspaceId === r.workspaceId);
        S && await _c({ workspaceTitle: S.title, windowIdentity: s }) && (await w.Storage.deleteWorkspace(r.workspaceId), await eo({ message: ne("successIndicator.workspaceDeleted"), parentBrowserName: s == null ? void 0 : s.name, positioning: c }));
      })({ workspaceItemData: n, winIdentity: e });
    }, Kc = { title: "Downloads", pageId: "downloads-page-id", layout: { content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { name: "show-download-view", url: "chrome://downloads/" } }] }] } }, Ri = async (e) => {
      const n = de(e), r = await n.getCurrentViews(), s = (await v().Browser.wrapSync(n.identity).getPages()).find((c) => c.isActive);
      try {
        const c = (await Promise.all(r.map(async (w) => ({ identity: w.identity, info: await fin.View.wrapSync(w.identity).getInfo() })))).find((w) => w.info.url === "chrome://downloads/");
        if (c) await fin.View.wrapSync(c.identity).focus();
        else {
          const w = v();
          if (s != null && s.isLocked) {
            const S = (await fin.Application.getCurrentSync().getChildWindows()).find((b) => b.identity.name === "show-download-window");
            return void (S ? await S.focus() : w.Browser.createWindow({ name: "show-download-window", workspacePlatform: { pages: [Kc] } }));
          }
          (await v().createView({ name: "show-download-view", url: "chrome://downloads/", target: e }, e)).focus();
        }
      } catch (c) {
        console.error("Couldn't open downloads view", c);
      }
    }, Wo = async (e) => {
      const n = e.map((r) => fin.View.wrapSync(r).print());
      await Promise.all(n);
    }, Di = (e) => {
      const [n, r, s] = e.split(".").map((c) => c === "x" ? 0 : 1);
      return 100 * n + 10 * r + 1 * s;
    };
    class Oi extends Error {
    }
    const $c = async (e) => {
      try {
        const r = await async function() {
          const s = await ht(), c = (s == null ? void 0 : s.translationOverridesUrl) ?? "https://workspace.openfin.co/workspace/assets/translation-override.json";
          if (c === "") throw new Oi("Empty string provided as url to translationOverridesUrl, overrides will not be fetched.");
          return await fetch(c).then((w) => w.json());
        }();
        (n = ((s) => {
          const c = we.split(".");
          return Object.keys(s).filter((w) => {
            const S = w.split(".");
            if (S.length !== 3) return console.warn(`Encountered a translation override version string in an unsupported format: ${w}. Versions must be in A.B.C format where A, B, C are either integers or the wildcard symbol 'x'.`), !1;
            const [b, F, V] = S;
            return !(b !== c[0] && b !== "x" || F !== c[1] && F !== "x" || V !== c[2] && V !== "x");
          });
        })(r), [...n].sort((s, c) => Di(s) - Di(c))).forEach((s) => {
          const c = r[s];
          Object.keys(c).forEach((w) => {
            e.addResourceBundle(w, "translation", c[w], !0, !0);
          });
        });
      } catch (r) {
        r instanceof Oi ? console.warn(r.message) : console.error("Error applying a translation override: ", r);
      }
      var n;
    };
    function Wi() {
      return me().language;
    }
    const Hc = async (e) => {
      Bi(e), ((n) => {
        me().changeLanguage(n);
      })(e), await (async (n) => {
        const r = await Ge();
        return Promise.all(r.map(async (s) => {
          await (await It(s.identity)).dispatch(At.SetSelectedLanguage, n);
        }));
      })(e);
    };
    function Gc() {
      if (!me().options.resources) throw new Error("No language resources found");
      return { currentLanguage: Wi(), resources: me().options.resources };
    }
    async function zc(e = "en-US") {
      Bi(e), function(n = "en-US") {
        me().use(re.initReactI18next).init({ lng: n, fallbackLng: "en-US", resources: { "en-US": { translation: xe }, "ja-JP": { translation: Te }, "zh-CN": { translation: pe }, "ko-KR": { translation: Xe }, "ru-RU": { translation: ot }, "de-DE": { translation: Se }, "zh-Hant": { translation: be } }, interpolation: { escapeValue: !1 } });
      }(e), await $c(me());
    }
    function Bi(e) {
      if (!Rt.includes(e)) throw new Error(`The ISO language provided ${e} is not supported`);
    }
    const nr = /* @__PURE__ */ new Map();
    let Bo = Date.now();
    function Ni() {
      const e = Date.now();
      return Bo = Math.max(e, Bo + 1), Bo;
    }
    async function qc() {
      const e = Array.from(nr.values()).sort((n, r) => r.lastFocusedTime - n.lastFocusedTime);
      if (e.length > 0) return e[0].identity;
      try {
        const n = Ca(bt.LastFocusedBrowserWindow);
        if (!n) return;
        const r = JSON.parse(n);
        if (await Xt(r)) return await Na(r), r;
      } catch (n) {
        console.error("failed to get last focused browser window from localStorage:", n);
      }
    }
    async function Fi() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((n) => n.identity.name.startsWith(h.BrowserWindow));
    }
    async function Jc() {
      const e = v(), n = fin.Window.wrapSync({ uuid: fin.me.uuid, name: h.DockCompanion }), r = await xt(await n.getBounds()), s = await async function(w, S, b) {
        const F = await fin.System.getMonitorInfo(), V = (b == null ? void 0 : b.availableRect) ?? F.primaryMonitor.availableRect, Q = { width: V.right - V.left, height: V.bottom - V.top }, J = Math.min(w, Q.height), ae = Math.min(S, Q.width), ue = V.top + Math.floor((Q.height - J) / 2);
        return { height: J, width: ae, left: V.left + Math.floor((Q.width - ae) / 2), top: ue };
      }(600, 900, r), c = await to();
      return (await e.Browser.createWindow({ defaultHeight: 600, defaultWidth: 900, defaultLeft: s.left, defaultTop: s.top, workspacePlatform: { pages: [c] } })).identity;
    }
    async function Na(e, n, r = !1) {
      if (!await ut(e)) return;
      const s = fin.Window.wrapSync(e), c = n ?? await s.isShowing(), w = nr.get(e.name), S = { identity: e, lastFocusedTime: r ? Ni() : (w == null ? void 0 : w.lastFocusedTime) ?? Ni(), isVisible: c };
      nr.set(e.name, S), r && function(b) {
        if (typeof localStorage < "u") try {
          const F = JSON.stringify(b);
          ct(bt.LastFocusedBrowserWindow, F);
        } catch (F) {
          console.error("failed to save last focused browser window: ", F);
        }
      }(e);
    }
    async function Yc(e = fin.me.identity) {
      nr.delete(e.name);
    }
    const Zc = $a()(async () => {
      const e = await fin.Platform.getCurrentSync().Application.getChildWindows();
      let n, r = !1;
      for (const s of e) if (s.identity.name === h.BrowserMenu || s.identity.name === h.BrowserSaveMenu ? n = s : await ut(s.identity) && (r = !0), r) break;
      !r && n && n.close();
    }, 100, { leading: !1, trailing: !0 });
    let No = {};
    const Qc = async ({ actionId: e, payload: n }) => {
      if (typeof No[e] != "function") throw new Error(`Cannot find a configured function for the action '${e}'`);
      return No[e](n);
    };
    let Fo;
    const Xc = () => `custom-context-menu-${v().identity.uuid}-${we}`, eu = () => `custom-bookmark-context-menu-${v().identity.uuid}-${we}`, Li = async () => (Fo || (Fo = await fin.InterApplicationBus.Channel.connect(Xc())), Fo);
    var Vi, ar;
    (function(e) {
      e.Save = "Save", e.SaveAs = "SaveAs";
    })(Vi || (Vi = {})), function(e) {
      e.GlobalMenu = "global-menu", e.ContextMenu = "context-menu", e.RenameSupertab = "rename-supertab", e.AddEditBookmark = "add-edit-bookmark", e.DropdownMenu = "dropdown-menu", e.ZoomControls = "zoom-controls";
    }(ar || (ar = {}));
    const no = "visited-sites", Lo = "removed-tab-stack";
    let Vo = null;
    function Dr() {
      return !Vo && st && De.isFin && (Vo = In("openfin-home-pages", "pages")), Vo;
    }
    let ao = null;
    function Ui() {
      return !ao && st && De.isFin && (ao = new Xn.Dexie(yn("openfin-enterprise-site-history")), ao.version(0.1).stores({ [no]: "id, url" })), ao;
    }
    let ro = null;
    function ji() {
      return !ro && st && De.isFin && (ro = new Xn.Dexie(yn("openfin-enterprise-tab-history")), ro.version(0.1).stores({ [Lo]: "" })), ro;
    }
    async function Uo(e) {
      const n = Dr();
      if (!n) throw new Error("Unable to get page - IndexDB not supported");
      const r = await n.pages.get(e);
      if (r) return r.pageId = e.toString(), r.title = r.title || r.pageId, r;
    }
    async function tu(e) {
      const n = Dr();
      if (!n) throw new Error("Unable to get page list - IndexDB not supported");
      const r = await n.pages.toCollection().keys(), s = (await Promise.all(r.map((c) => Uo(c.toString())))).filter((c) => !!c);
      return e ? s.filter((c) => $t(c.title, e)) : s;
    }
    async function Ki({ page: e }) {
      const n = Dr();
      if (!n) throw new Error("Unable to create page - IndexDB not supported");
      await n.pages.put(e, e.pageId);
    }
    async function $i(e) {
      const n = Dr();
      if (!n) throw new Error("Unable to delete page - IndexDB not supported");
      await n.pages.delete(e);
    }
    async function nu({ pageId: e, page: n }) {
      if (!Dr()) throw new Error("Unable to update page - IndexDB not supported");
      if (await Uo(e) === void 0) throw new Error("page not found");
      await Ki({ page: n }), e !== n.pageId && await $i(e);
    }
    const au = async (e) => {
      const n = ji();
      if (!n) throw new Error("Unable to add removed tab - IndexDB not supported");
      const r = Date.now().toString(), s = { ...e, id: r };
      await n[Lo].put(s, r);
    };
    function ru(e) {
      return e.type === "app" || e.type === "website";
    }
    const ou = async (e) => {
      const n = Ui();
      if (e.type === "website") {
        const r = e, s = r.url || "";
        let c = await n[no].get(s);
        c && ru(c) ? (c.icon = r.icon, c.title = r.title, c.type = r.type, c.visitCount = (c.visitCount || 0) + 1, c.url = r.url) : c = { ...r, id: s, visitCount: 1, accessTime: void 0 }, c.accessTime = Date.now(), await n[no].put(c, s);
      }
    }, iu = async () => {
      const e = Ui();
      if (!e) throw new Error("Unable to get frequently visited sites - IndexDB not supported");
      const n = e[no], r = await n.toCollection().toArray();
      return r.sort((s, c) => (c.visitCount || 0) - (s.visitCount || 0)), (r.length > 5 ? r.slice(0, 5) : r).map(({ id: s, ...c }) => c);
    }, Or = async () => (await fin.System.getHostSpecs()).name.toLowerCase().includes("windows"), Hi = async ({ browserIdentity: e, url: n, shiftKey: r, activePage: s, pages: c }) => {
      const w = v().Browser.wrapSync(e), S = await K(n, n, e), b = { ...await kn(n, S), attachedPageType: "singleView", singleViewName: n }, F = c.findIndex((V) => V.pageId === s.pageId);
      await w._addPage(b, { index: F + 1 }), r && await w.setActivePage(b.pageId);
    }, su = async (e) => {
      const { url: n } = e.bookmark, { sourceIdentity: r, sourceEvent: s } = e, c = await Or(), w = v();
      let S = !1, b = r;
      if (!await ut(r)) {
        const Ce = await async function() {
          const Oe = Array.from(nr.values());
          for (let pt = Oe.length - 1; pt >= 0; pt--) if (Oe[pt].isVisible) return Oe[pt].identity;
        }();
        if (!Ce) return await (async (Oe) => {
          const pt = v(), Ue = await K(Oe.url, Oe.url), lt = await kn(Oe.url, Ue);
          He((await pt.Browser.createWindow({ workspacePlatform: { pages: [lt] } })).identity);
        })(e.bookmark);
        S = !0, b = Ce;
      }
      const F = w.Browser.wrapSync(b), V = await F.getPages(), Q = (await F._getLayoutsWithSelectedViews()).find((Ce) => Ce.isActive);
      if (!Q) throw Error(`Browser ${b} does not have any active layouts`);
      const J = V.find((Ce) => Ce.isActive), ae = Y(J.layout.content) === 1, ue = Q.selectedViews[0];
      S ? await Hi({ browserIdentity: b, url: n, shiftKey: !0, activePage: J, pages: V }) : ae ? await (async ({ isWindows: Ce, currentViewId: Oe, browserIdentity: pt, url: Ue, activePage: lt, pages: Je, sourceEvent: St }) => {
        const { ctrlKey: gn, metaKey: $e, shiftKey: Et } = St;
        (Ce ? gn : $e) ? await Hi({ browserIdentity: pt, url: Ue, shiftKey: Et, activePage: lt, pages: Je }) : await fin.View.wrapSync(Oe).navigate(Ue);
      })({ isWindows: c, currentViewId: ue, browserIdentity: b, url: n, activePage: J, pages: V, sourceEvent: s }) : await (async ({ isWindows: Ce, currentViewId: Oe, browserIdentity: pt, url: Ue, activeLayout: lt, sourceEvent: Je }) => {
        const { ctrlKey: St, metaKey: gn, shiftKey: $e } = Je;
        if (Ce ? St : gn) {
          const Et = fin.View.wrapSync(Oe), Nt = await Et.getCurrentStack(), mn = (await Nt.getViews()).findIndex((ir) => ir.name === Oe.name), or = { url: Ue, browserIdentity: pt, title: Ue };
          await Nt.addView(or, { index: mn + 1 });
        } else await fin.View.wrapSync(lt.selectedViews[0]).navigate(Ue);
      })({ isWindows: c, currentViewId: ue, browserIdentity: b, url: n, activeLayout: Q, sourceEvent: s });
    };
    var Fe;
    (function(e) {
      e.Label = "normal", e.Separator = "separator", e.Submenu = "submenu", e.Checkbox = "checkbox";
    })(Fe || (Fe = {}));
    let jo = { locked: !1, x: -1, y: -1 };
    const cu = async (e, n, r, s) => {
      if (!at) throw new Error("showEnterpriseContextMenu can only be used in a Here env. Avoid calling this method during pre-rendering.");
      if (!s && !fin.me.isWindow) throw new Error("showEnterpriseContextMenu can only be used in a Here window.");
      const { x: c, y: w, template: S } = e;
      if (((Q, J) => {
        const { x: ae, y: ue, locked: Ce } = jo;
        return Ce && Q === ae && J === ue;
      })(c, w)) return new Promise((Q, J) => Q({ data: void 0 }));
      jo = { locked: !0, x: c, y: w };
      const b = await Li(), F = zt(), V = new Promise((Q, J) => {
        b.register(`response-${F}`, (ae) => {
          jo.locked = !1, b.remove(`response-${F}`), Q(ae);
        });
      });
      return await b.dispatch("open", { parentIdentity: s.identity, responseIdentity: ye, requestId: F, type: n, anchorBehavior: r, x: c, y: w, payload: { template: S } }), V;
    }, tn = { type: Fe.Separator, data: void 0 }, uu = async () => ({ type: Fe.Submenu, label: ne("contextMenu.print"), submenu: [{ type: Fe.Label, label: ne("contextMenu.submenu.print"), data: { type: ce.Print } }, { type: Fe.Label, label: ne("contextMenu.submenu.printAll"), data: { type: ce.PrintAll } }, tn, { type: Fe.Label, label: ne("contextMenu.printScreen"), data: { type: ce.PrintScreen } }] }), Ko = () => ({ type: Fe.Label, label: ne("contextMenu.closeWindow"), data: { type: Z.CloseWindow } }), $o = (e) => ({ type: Fe.Label, label: ne(e ? "contextMenu.quitEnterpriseBrowser" : "contextMenu.quitPlatform"), data: { type: Z.Quit } }), Gi = () => ({ type: Fe.Label, label: ne("contextMenu.newWindow"), data: { type: Z.NewWindow } }), zi = (e) => ({ type: Fe.Label, label: ne(e ? "enterpriseContextMenu.saveSupertab" : "contextMenu.savePage"), data: { type: Z.SavePage } }), qi = (e) => ({ type: Fe.Label, label: ne(e ? "enterpriseContextMenu.saveSupertabAs" : "contextMenu.savePageAs"), data: { type: Z.SavePageAs } }), Ji = (e, n) => ({ type: Fe.Label, label: ne(n ? "enterpriseContextMenu.newTab" : "contextMenu.newPage"), data: { type: Z.NewPage }, enabled: e }), Yi = () => ({ label: ne("contextMenu.switchWorkspace") }), Zi = () => ({ label: ne("contextMenu.deleteWorkspace") }), Qi = () => ({ label: ne("contextMenu.appearance") }), Xi = (e, n, r) => n.map((s) => {
      const c = s.workspaceId === e.workspaceId;
      return { label: s.title, type: Fe.Checkbox, enabled: !c, checked: c, data: { type: r, workspaceId: s.workspaceId } };
    }), es = async () => {
      const e = await v().Theme.getSelectedScheme();
      return [{ label: ne("theme.light"), type: Fe.Checkbox, checked: e === Me.Light, data: { type: Z.Appearance, scheme: Me.Light } }, { label: ne("theme.dark"), type: Fe.Checkbox, checked: e === Me.Dark, data: { type: Z.Appearance, scheme: Me.Dark } }, { label: ne("theme.system"), type: Fe.Checkbox, checked: e === Me.System, data: { type: Z.Appearance, scheme: Me.System } }];
    }, lu = async (e, n = []) => {
      const r = await qn(), { newPageUrl: s } = await Ba(e), c = await (async (Ue) => {
        const lt = de(Ue), { workspacePlatform: Je } = await lt.getOptions();
        return Je == null ? void 0 : Je.disableMultiplePages;
      })(e), w = await (async (Ue) => {
        const lt = de(Ue), { workspacePlatform: Je } = await lt.getOptions();
        return Je == null ? void 0 : Je.isLocked;
      })(e), S = await Mt(e), b = [], F = n.length > 0;
      s && (b.push(Gi()), c || b.push(Ji(!w, S))), b.push(tn);
      const V = v(), Q = await V.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), J = await V.Storage.getWorkspacesMetadata(), ae = J.find((Ue) => Ue.workspaceId === Q.workspaceId), ue = V.Browser.wrapSync(e), Ce = (await ue.getPages()).find((Ue) => Ue.isActive), Oe = !!Ce && await V.Storage.getPage(Ce.pageId);
      b.push({ type: Fe.Label, label: ne("contextMenu.restore"), data: { type: Z.RestoreChanges }, enabled: !!ae }), b.push({ type: Fe.Label, label: ne("contextMenu.saveWorkspace"), data: { type: Z.SaveWorkspace }, enabled: !!ae }), b.push({ type: Fe.Label, label: ne("contextMenu.saveWorkspaceAs"), data: { type: Z.SaveWorkspaceAs } }), b.push({ type: Fe.Label, label: ne("contextMenu.renameWorkspace"), data: { type: Z.RenameWorkspace }, enabled: !!ae }), J.some((Ue) => Ue.workspaceId !== Q.workspaceId) ? b.push({ label: Yi().label, submenu: Xi(Q, J, Z.SwitchWorkspace), data: void 0 }, { label: Zi().label, submenu: Xi(Q, J, Z.DeleteWorkspace), data: void 0 }) : b.push({ label: Yi().label, enabled: !1, data: void 0 }, { label: Zi().label, enabled: !1, data: void 0 }), b.push({ label: ne("contextMenu.downloads"), data: { type: Z.Downloads } }), b.push({ label: Qi().label, submenu: await es(), data: void 0 });
      const pt = { ...zi(S), enabled: !!Oe };
      return b.push(tn, pt, qi(S), await (async (Ue) => {
        const lt = await Or();
        return { label: ne("contextMenu.print"), submenu: [{ type: Fe.Label, label: ne("contextMenu.submenu.print"), data: { type: Z.Print }, enabled: Ue }, { type: Fe.Label, label: ne("contextMenu.submenu.printAll"), data: { type: Z.PrintAll } }, ...lt ? [tn, { type: Fe.Label, label: ne("contextMenu.printScreen"), data: { type: Z.PrintScreen } }] : []], data: void 0 };
      })(F)), r ? [...b, Ko(), tn, { type: Fe.Label, label: ne("contextMenu.openStorefront"), data: { type: Z.OpenStorefront } }, tn, $o()] : [...b, tn, Ko(), tn, $o()];
    }, du = async (e, n) => {
      const r = n.selectedViews[0], s = fin.View.wrapSync(r), c = await (async (w) => {
        const { newTabUrl: S } = await Ba(w);
        if (!S) throw new Error("Trying to create a new page without a newTabUrl set");
        return { url: S, target: w, title: "New Tab" };
      })(e);
      await v().createView(c, e, s.identity);
    }, pu = async (e, n) => {
      const r = v().Browser.wrapSync(e), s = (await r.getPages()).find((S) => S.isActive), c = await fin.Window.wrapSync(e).getCurrentViews();
      if (n.length === c.length - (s.panels ?? []).length)
        return void (await It(e)).dispatch(At.ClosePage, { pageId: s == null ? void 0 : s.pageId });
      const w = fin.Platform.getCurrentSync();
      n.forEach(async (S) => {
        const b = await fin.View.wrapSync(S).getParentLayout();
        await w.closeView(S);
        const { hasUnsavedChanges: F } = await (async (V) => (await Qe(ye)).dispatch(fe.HandlePageChanges, V))({ page: { ...s, layout: await b.getConfig() }, identity: e, eventDetails: { type: Ie.ViewRemoved, viewIdentity: S } });
        F && await r.updatePage({ pageId: s.pageId, page: { hasUnsavedChanges: !0 } });
      });
    }, fu = async (e, n) => {
      const r = await ((w) => Promise.all(w.map(async (S) => fin.View.wrapSync(S).getInfo())))(n), { newPageUrl: s, newTabUrl: c } = await Ba(e);
      r.forEach(async (w) => {
        w.url !== s && w.url !== c && await fin.System.openUrlWithBrowser(w.url);
      });
    }, hu = (e, n) => {
      n.forEach(async (r) => {
        const s = fin.View.wrapSync(r);
        await (async (c, w) => {
          const { url: S } = await w.getInfo(), b = { ...await w.getOptions(), url: S, target: c, name: void 0 };
          await v().createView(b, c, w.identity);
        })(e, s);
      });
    }, ts = async (e, n, r) => {
      const s = { newChannelId: n, selectedViews: r };
      (await It(e)).dispatch(At.AddToChannel, s);
    }, ns = async (e, n) => {
      (await It(e)).dispatch(At.RemoveFromChannel, n);
    }, gu = async (e, n) => {
      if (!e) return;
      const r = n.identity, s = fin.Window.wrapSync(r);
      switch (en({ type: "View Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e.type) {
        case ce.Back:
          await (async (c) => {
            const w = c.map((S) => fin.View.wrapSync(S).navigateBack());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case ce.Forward:
          await (async (c) => {
            const w = c.map((S) => fin.View.wrapSync(S).navigateForward());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case ce.Print:
          await Wo(n.selectedViews);
          break;
        case ce.PrintAll:
          await s.print({ content: "views", includeSelf: !1 });
          break;
        case ce.PrintScreen:
          await s.print({ content: "screenshot" });
          break;
        case ce.CloseViews:
          await pu(r, n.selectedViews);
          break;
        case ce.OpenWithDefaultBrowser:
          await fu(r, n.selectedViews);
          break;
        case ce.ReloadViews:
          n.selectedViews.forEach(async (c) => {
            await fin.View.wrapSync(c).reload();
          });
          break;
        case ce.NewView:
          await du(r, n);
          break;
        case ce.DuplicateViews:
          hu(r, n.selectedViews);
          break;
        case ce.AddToChannel:
          ts(r, e.option, n.selectedViews);
          break;
        case ce.RemoveFromChannel:
          ns(r, n.selectedViews);
          break;
        case ce.Custom:
          if (e.action) {
            const c = { callerType: dt.ViewTabContextMenu, windowIdentity: r, selectedViews: n.selectedViews, customData: e.action.customData };
            v()._invokeCustomAction(e.action.id, c);
          }
      }
    }, Ho = /* @__PURE__ */ new Map([["blue", { name: "Blue", color: "#0091EB" }], ["indigo", { name: "Indigo", color: "#6450FF" }], ["pink", { name: "Pink", color: "#E878CF" }], ["teal", { name: "Teal", color: "#24D1D1" }], ["green", { name: "Green", color: "#00AF78" }], ["orange", { name: "Orange", color: "#FF7D37" }], ["red", { name: "Red", color: "#F94144" }], ["yellow", { name: "Yellow", color: "#F9C74F" }], ["gray", { name: "Gray", color: "#828788" }]]);
    function as() {
      return { type: Fe.Label, label: ne("contextMenu.manageDesktopSignals"), data: { type: ee.ManageDesktopSignals } };
    }
    function rs(e) {
      const n = Array.from(Ho.entries()), r = e.contextGroup;
      return { type: "widget", config: { type: "add-to-channel", channels: [...n.map(([s, c]) => ({ label: c.name, data: { type: ee.AddToChannel, option: s }, color: c.color, checked: r === s })), { label: "unlink", data: { type: ee.AddToChannel, option: "unlink" }, isNone: !0 }] }, label: "Link to Channel" };
    }
    let os = "Platform";
    const Go = async () => os, mu = async (e, n) => {
      var S;
      if (!e) return;
      const r = n.identity, s = await It(r), c = v().Browser.wrapSync(r), w = fin.Window.wrapSync(r);
      if (en({ type: "Global Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0, data: { action: (S = e.action) == null ? void 0 : S.id } }), !(await Mt(r) && await (async (F, V) => {
        const Q = V.identity, J = v().Browser.wrapSync(Q), ae = (await J.getPages()).find((Oe) => Oe.isActive), ue = qa({ ...Q, layoutName: ae.layoutContainerKey }), Ce = V.selectedViews;
        switch (F == null ? void 0 : F.type) {
          case Ae.Lock:
            await J.updatePage({ pageId: ae.pageId, page: { isLocked: !ae.isLocked } });
            break;
          case Ae.AddToChanel:
            F.option ? await ts(Q, F.option, Ce) : F.option === null && await ns(Q, Ce);
            break;
          case Ae.ManageDesktopSignals:
            await Bt(Q);
            break;
          case Z.NewWindow: {
            const Oe = await to(Q);
            await v().Browser.createWindow({ workspacePlatform: { pages: [Oe], windowType: "enterprise" } });
            break;
          }
          case Ae.Pin: {
            const { alwaysOnTop: Oe } = await J.openfinWindow.getOptions();
            await J.openfinWindow.updateOptions({ alwaysOnTop: !Oe });
            break;
          }
          case Ae.ShowHideTabs:
            await ue.isShowingTabs() ? await ue.hide() : await ue.show();
            break;
          default:
            return !1;
        }
        return !0;
      })(e, n)))
        switch (e.type) {
          case Z.NewWindow: {
            const { newPageUrl: b } = await Ba(r);
            if (!b) throw new Error("Trying to create a new empty window without a newPageUrl set");
            v().createView({ target: void 0, url: b });
            break;
          }
          case Z.NewPage:
            await _i(r);
            break;
          case Z.CloseWindow:
            s.dispatch(At.CloseBrowserWindow);
            break;
          case Z.SaveWorkspace:
            await Ti(r);
            break;
          case Z.SavePage:
            await Do(r);
            break;
          case Z.SavePageAs:
            await Oo(r);
            break;
          case Z.SaveWorkspaceAs:
            await Ro(r);
            break;
          case Z.RenameWorkspace:
            c._openSaveModal({ menuType: Le.RENAME_WORKSPACE });
            break;
          case Z.SwitchWorkspace:
            await (async (b, F) => {
              const V = v(), Q = (await V.Storage.getWorkspaces()).find((J) => J.workspaceId === F.workspaceId);
              V.applyWorkspace(Q, { skipPrompt: !1, promptContainerWindowIdentity: b });
            })(r, e);
            break;
          case Z.DeleteWorkspace:
            await jc(r, e);
            break;
          case Z.Downloads:
            await Ri(r);
            break;
          case Z.Appearance:
            await v().Theme.setSelectedScheme(e.scheme);
            break;
          case Z.Quit:
            {
              const b = Go();
              await Ii(r, await b) && fin.Platform.getCurrentSync().quit();
            }
            break;
          case Z.OpenStorefront:
            (async () => await qn() && He(Ze))();
            break;
          case Z.RestoreChanges:
            await Ei();
            break;
          case Z.Print:
            await Wo(n.selectedViews);
            break;
          case Z.PrintAll:
            await w.print({ content: "views", includeSelf: !1 });
            break;
          case Z.PrintScreen:
            await w.print({ content: "screenshot" });
            break;
          case Z.Custom:
            if (e.action) {
              const b = { callerType: dt.GlobalContextMenu, windowIdentity: r, customData: e.action.customData };
              v()._invokeCustomAction(e.action.id, b);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
    }, wu = async (e, n, r) => {
      const s = v().Browser.wrapSync(n.identity), c = fin.Window.wrapSync(n.identity), w = await It(n.identity), S = await Mt();
      switch (e && en({ type: "Page Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e == null ? void 0 : e.type) {
        case ee.Save:
          await Do(n.identity, n.pageId);
          break;
        case ee.SaveAs:
          await Oo(n.identity, n.pageId);
          break;
        case ee.NewPage:
          await _i(n.identity);
          break;
        case ee.DeletePage:
          await (async (b, F) => {
            const V = v(), Q = V.Browser.wrapSync(b), J = (await V.Storage.getPages()).find((ae) => ae.pageId === F);
            J && await Dc(b, J.title) && (await V.Storage.deletePage(J.pageId), await Q.removePage(F), eo({ message: ne("enterpriseSuccessIndicator.supertabDeleted"), parentBrowserName: b.name, secondaryMessage: ne("enterpriseSuccessIndicator.supertabHasBeenDeleted", { title: J.title }) }));
          })(n.identity, n.pageId);
          break;
        case ee.Rename:
          await Mt(n.identity) ? (await s.setActivePage(n.pageId), await (await Li()).dispatch("open", { parentIdentity: n.identity, responseIdentity: ye, type: ar.RenameSupertab, anchorBehavior: oo.Center, x: r.left + r.width / 2 - 164, y: r.bottom - 8, payload: { pageId: n.pageId } })) : await s._openSaveModal({ menuType: Le.RENAME_PAGE, id: n.pageId });
          break;
        case ee.Duplicate:
          w.dispatch(At.DuplicatePage, n.pageId);
          break;
        case ee.Close:
          S ? await (async (b, F) => {
            const V = v().Browser.wrapSync(b), Q = await V.getPages();
            for (const J of Q) if (J.pageId === F) {
              await V.removePage(J.pageId), await V._trackRemovedTab({ identity: b, page: J });
              break;
            }
          })(n.identity, n.pageId) : w.dispatch(At.ClosePage, { pageId: n.pageId });
          break;
        case ee.Custom:
          if (e.action) {
            const b = { callerType: dt.PageTabContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
            v()._invokeCustomAction(e.action.id, b);
          } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
          break;
        case ee.Refresh:
          await (async (b, F) => {
            var ae;
            const V = v(), Q = V.Browser.wrapSync(b), J = (await Q.getPages()).find((ue) => F ? ue.pageId === F : ue.isActive);
            (ae = J == null ? void 0 : J.layout) != null && ae.content && B(J.layout.content).forEach(async (ue) => {
              (await fin.View.wrap({ uuid: V.identity.uuid, name: ue.name })).reload();
            });
          })(n.identity, n.pageId);
          break;
        case ee.CloseOthers:
          await (async (b, F) => {
            const V = v().Browser.wrapSync(b), Q = await V.getPages();
            for (const J of Q) J.pageId !== F && (await V.removePage(J.pageId), await V._trackRemovedTab({ identity: b, page: J }));
          })(n.identity, n.pageId);
          break;
        case ee.SaveWorkspaceAs:
          await Ro(n.identity);
          break;
        case ee.Print: {
          const b = await s._getLayoutsWithSelectedViews(), { selectedViews: F } = b.find((V) => V.pageId === n.pageId);
          await Wo(F);
          break;
        }
        case ee.PrintAll:
          await s.setActivePage(n.pageId), await c.print({ content: "views", includeSelf: !1 });
          break;
        case ee.PrintScreen:
          await s.setActivePage(n.pageId), await c.print({ content: "screenshot" });
          break;
        case ee.AddToChannel:
          await s.updatePage({ pageId: n.pageId, page: { contextGroup: e.option === "unlink" ? null : e.option } });
          break;
        case ee.ManageDesktopSignals:
          await Bt(n.identity);
      }
    }, yu = async (e, n) => {
      if (e != null && e.type) {
        const r = n.identity;
        switch (e.type) {
          case it.SavePage:
            await Do(r);
            break;
          case it.SaveWorkspace:
            await Ti(r);
            break;
          case it.SavePageAs:
            await Oo(r);
            break;
          case it.SaveWorkspaceAs:
            await Ro(r);
            break;
          case it.Custom:
            if (e.action) {
              const s = { callerType: dt.SaveButtonContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
              v()._invokeCustomAction(e.action.id, s);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
      }
    };
    var oo;
    (function(e) {
      e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomLeft = 2] = "BottomLeft", e[e.BottomRight = 3] = "BottomRight", e[e.Center = 4] = "Center";
    })(oo || (oo = {}));
    const io = async (e, n, r, s) => {
      const { x: c, y: w, identity: S, template: b, callback: F } = e, V = await Mt(S), { data: Q } = V ? await cu({ x: c, y: w, template: b }, r, s, fin.Window.wrapSync(S)) : await function(J, ae) {
        if (!at) throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
        if (!ae && !fin.me.isWindow) throw new Error("showContextMenu can only be used in an OpenFin window.");
        return (ae || fin.Window.getCurrentSync()).showPopupMenu(J);
      }({ x: c, y: w, template: b }, fin.Window.wrapSync(S));
      F(Q, e);
    };
    async function bu(e, n) {
      const r = qt(), s = await Mt(e.identity);
      s && oa(r);
      const c = s ? await (async ({ identity: J, selectedViews: ae }) => {
        const ue = v(), Ce = ue.Browser.wrapSync(J), Oe = (await Ce.getPages()).find((Et) => Et.isActive), pt = await ue.Storage.getPage(Oe.pageId), Ue = Y(Oe.layout.content) > 1, lt = await Mt(J), Je = await ue.Theme.getThemes(), St = Je[0] && "palettes" in Je[0] || !Je[0] || Je.length === 0, gn = { ...zi(lt), enabled: !!pt }, $e = { ...qi(lt), enabled: Ue };
        return [Gi(), Ji(!0, lt), { type: Fe.Separator }, gn, $e, { type: Fe.Separator }, { type: Fe.Label, label: ne("contextMenu.manageDesktopSignals"), data: { type: Z.ManageDesktopSignals } }, { type: Fe.Separator }, ...St ? [{ type: Fe.Submenu, label: Qi().label, submenu: await es() }] : [], { type: Fe.Separator }, Ko(), { type: Fe.Separator }, $o(!0)];
      })({ identity: e.identity, selectedViews: e.selectedViews }) : await lu(e.identity, e.selectedViews), w = await Go();
      s || (c.find((J) => {
        var ae;
        return ((ae = J.data) == null ? void 0 : ae.type) === Z.Quit;
      }).label = `Quit ${w}`);
      const { rect: S, ...b } = e, { x: F, y: V } = s ? { x: S.left + S.width, y: S.bottom } : e, Q = { ...b, x: F, y: V, template: c, callback: mu };
      ra(r), await this.openGlobalContextMenu(Q, n);
    }
    async function vu(e, n) {
      const r = { ...e, callback: gu };
      await this.openViewTabContextMenu(r, n);
    }
    async function ku(e, n) {
      const r = qt(), s = await Mt(e.identity);
      s && oa(r);
      const c = await (async (S, b, F) => {
        var Ue, lt;
        const V = await v().Storage.getPage(S), Q = (await Rr()).find((Je) => Je.pageId === S), J = Y(Q.layout.content) > 1, { workspacePlatform: ae } = await de(b).getOptions(), ue = !(ae.isLocked || ae.preventPageClose || (Ue = Q.closeButton) != null && Ue.disabled || (lt = Q.closeButton) != null && lt.hidden), Ce = [{ type: Fe.Label, label: ne("enterpriseContextMenu.newTab"), data: { type: ee.NewPage } }, tn, rs(Q), as(), tn, { type: Fe.Label, label: ne("reload"), data: { type: ee.Refresh } }, { type: Fe.Label, label: ne("enterpriseContextMenu.duplicate"), data: { type: ee.Duplicate }, enabled: !ae.isLocked }, await uu(), tn, { type: Fe.Label, label: ne(J ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ee.Close }, enabled: ue }], Oe = [{ type: Fe.Label, label: ne("enterpriseContextMenu.newTab"), data: { type: ee.NewPage } }, tn, rs(Q), as(), tn, { type: Fe.Label, label: ne("enterpriseSaveModal.renameSupertab"), data: { type: ee.Rename }, enabled: !ae.isLocked && !!V && J }, { type: Fe.Label, label: ne("enterpriseContextMenu.duplicate"), data: { type: ee.Duplicate }, enabled: !ae.isLocked }, tn, { type: Fe.Label, label: ne("enterpriseContextMenu.saveSupertab"), data: { type: ee.Save }, enabled: J && !!V }, { type: Fe.Label, label: ne("enterpriseContextMenu.saveSupertabAs"), data: { type: ee.SaveAs }, enabled: J }, tn, { type: Fe.Label, label: ne("enterpriseContextMenu.deleteSupertab"), data: { type: ee.DeletePage }, enabled: !!V }, tn, { type: Fe.Label, label: ne(J ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ee.Close }, enabled: ue }], pt = [{ type: Fe.Label, label: ne("contextMenu.savePage"), data: { type: ee.Save }, enabled: !!V }, { type: Fe.Label, label: ne("saveMenu.savePageAs"), data: { type: ee.SaveAs }, enabled: !0 }, { type: Fe.Label, label: "Save Workspace As", data: { type: ee.SaveWorkspaceAs } }, { type: Fe.Label, label: "Refresh", data: { type: ee.Refresh } }, tn, { type: Fe.Label, label: ne("saveModal.renamePage"), data: { type: ee.Rename }, enabled: !!V }, { type: Fe.Label, label: ne("contextMenu.duplicatePage"), data: { type: ee.Duplicate }, enabled: !ae.isLocked }, tn, { type: Fe.Label, label: ne("saveModal.closePage"), data: { type: ee.Close }, enabled: ue }];
        return F ? J ? Oe : Ce : pt;
      })(e.pageId, e.identity, s), w = { ...e, template: c, callback: (S, b) => {
        wu(S, b, e.rect);
      } };
      ra(r), await this.openPageTabContextMenu(w, n);
    }
    async function Su(e, n) {
      const r = await (async (c) => {
        const w = v(), S = await w.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), b = (await w.Storage.getWorkspacesMetadata()).find((V) => V.workspaceId === S.workspaceId), F = await w.Storage.getPage(c);
        return [{ type: Fe.Label, label: ne("contextMenu.saveWorkspace"), enabled: !!b, data: { type: it.SaveWorkspace } }, { type: Fe.Label, label: ne("saveMenu.saveWorkspaceAs"), data: { type: it.SaveWorkspaceAs } }, { type: Fe.Separator, data: void 0 }, { type: Fe.Label, enabled: !!F, label: ne("contextMenu.savePage"), data: { type: it.SavePage } }, { type: Fe.Label, label: ne("saveMenu.savePageAs"), data: { type: it.SavePageAs } }];
      })(e.pageId), s = { ...e, template: r, callback: yu };
      await this.openSaveButtonContextMenu(s, n);
    }
    const so = "dock-companion-updates", co = async () => (await fin.Application.getCurrentSync().getChildWindows()).find((e) => e.identity.name === h.DockCompanion), Fa = pn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-dock`), Pu = async () => {
      const e = v(), n = await async function() {
        const w = await Fi();
        await Promise.all(w.map(async (V) => {
          await Na(V.identity);
        }));
        const S = Array.from(nr.values()).sort((V, Q) => Q.lastFocusedTime - V.lastFocusedTime), b = S.find((V) => V.isVisible);
        if (b)
          return await fin.Window.wrapSync(b.identity).focus(), b.identity;
        const F = S[0];
        if (F) {
          const V = fin.Window.wrapSync(F.identity);
          return await V.restore(), await V.focus(), F.identity;
        }
        return Jc();
      }(), r = e.Browser.wrapSync(n), s = (await r.getPages()).at(-1), c = B(s.layout.content);
      if (c.length === 1 && Aa(c[0].url)) await r.setActivePage(s.pageId);
      else {
        const w = await to(n), { newPageUrl: S } = await Ba();
        await r._addDefaultPage({ identity: r.identity, page: w, newPageUrl: S || void 0 });
      }
      (await It(n)).dispatch(At.FocusAndExpandSearchInternal);
    }, zo = "dock-provider-configs", rr = st && at && new Xn.Dexie(yn("dock-provider-configs"));
    async function xu(e) {
      if (!rr) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
      try {
        return await rr[zo].get(e);
      } catch (n) {
        return void console.warn("Failed to retrieve Dock provider config from IndexedDb", n);
      }
    }
    async function Cu(e) {
      if (!rr) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
      await rr[zo].put(e, e.id);
    }
    rr && rr.version(0.1).stores({ [zo]: "" });
    const Wr = "workspaces", zn = st && at && In("openfin-workspace-platform-workspaces", Wr);
    async function qo(e) {
      if (!zn) throw new Error("Unable to get workspace - IndexDB not supported");
      const n = await zn[Wr].get(e);
      return n && (n.workspaceId = e.toString(), n.title = n.title || n.workspaceId), n;
    }
    async function is(e) {
      if (!zn) throw new Error("Unable to get workspaces - IndexDB not supported");
      const n = await zn[Wr].toCollection().keys(), r = (await Promise.all(n.map((s) => qo(s.toString())))).filter((s) => !!s);
      return e ? r.filter((s) => $t(s.title, e)) : r;
    }
    async function ss({ workspace: e }) {
      if (!zn) throw new Error("Unable to create workspace - IndexDB not supported");
      const n = (await is()).find((r) => r.title === e.title);
      if (n && n.workspaceId !== e.workspaceId) throw new Error(`Workspace with title '${e.title}' already exists.`);
      await zn[Wr].put(e, e.workspaceId);
    }
    async function cs(e) {
      if (!zn) throw new Error("Unable to delete workspace - IndexDB not supported");
      await zn[Wr].delete(e);
    }
    async function Mu({ workspaceId: e, workspace: n }) {
      if (!zn) throw new Error("Unable to update workspace - IndexDB not supported");
      if (!await qo(e)) throw new Error("workspace not found");
      await ss({ workspace: n }), e !== n.workspaceId && await cs(e);
    }
    const Iu = (e) => {
      const n = e.layout, r = n.content ? B(n.content) : [], s = r.length;
      return s > 1 ? { ...e, singleViewName: null } : s === 1 ? { ...e, singleViewName: r[0].name } : void 0;
    }, Jo = async (e, n, r) => {
      var V, Q, J;
      const s = await v().Browser.getAllAttachedPages(), c = new Set(s.map((ae) => ae.title).filter((ae) => !!ae)), w = new Set(s.map((ae) => ae.pageId).filter((ae) => !!ae)), S = n == null ? void 0 : n.defaultPageOptions, b = ((V = r == null ? void 0 : r.workspacePlatform) == null ? void 0 : V.windowType) === "enterprise" || ((J = (Q = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : Q.workspacePlatform) == null ? void 0 : J.windowType) === "enterprise", F = await (async (ae, ue, Ce) => {
        var Ue, lt, Je;
        if (Ce) return rt();
        const Oe = (Ue = ue == null ? void 0 : ue.workspacePlatform) == null ? void 0 : Ue.newTabUrl;
        return Oe || ((Je = (lt = ae == null ? void 0 : ae.defaultWindowOptions) == null ? void 0 : lt.workspacePlatform) == null ? void 0 : Je.newTabUrl) || void 0;
      })(n, r, b);
      return Promise.all(e.map(async (ae) => {
        var Ue, lt;
        if (ae.multiInstanceViewBehavior === "reparent") return { ...ae, layoutContainerKey: zt() };
        ((Je, St) => {
          Je.pageId || (Je.pageId = zt()), St.has(Je.pageId) && (console.warn("PageID collision detected. All Page IDs should be unique. A random new pageId will be generated"), Je.pageId = zt()), St.add(Je.pageId);
        })(ae, w), b || (ae.title = Co(ae.title, Array.from(c.keys()))), c.add(ae.title), (Ue = ae.panels) == null || Ue.reduce((Je, St) => {
          const gn = Object.values(z);
          if (!gn.includes(St.position)) throw new Error(`Encountered a panel with unsupported position "${St.position}". Supported positions are: ${gn.toString()}`);
          if (Je[St.position] == 1) throw new Error(`Found more than 1 panel at position: ${St.position}. Only 1 panel at a given position is currently supported.`);
          return { ...Je, [St.position]: Je[St.position] + 1 };
        }, { [z.Left]: 0, [z.Right]: 0, [z.Top]: 0, [z.Bottom]: 0 });
        const ue = "panels" in ae ? ae.panels : S == null ? void 0 : S.panels;
        let Ce = (Oe = ae.layout, pt = n == null ? void 0 : n.defaultViewOptions, C({ ...Oe }, (Je) => L(Je, pt)));
        var Oe, pt;
        return F && !((lt = Ce == null ? void 0 : Ce.settings) != null && lt.newTabButton) && (Ce = { ...Ce, settings: { ...Ce == null ? void 0 : Ce.settings, newTabButton: { url: F } } }), { ...S, ...ae, panels: ue && await Nn(ue), layoutContainerKey: zt(), layout: Ce, isLayoutCreated: !1 };
      }));
    }, us = async (e, n) => {
      try {
        await fin.Platform.getCurrentSync().createView({ name: e, url: n, target: fin.me.identity, bounds: { top: 0, left: 0, width: 0, height: 0 } }, fin.me.identity);
      } catch {
      }
    }, Au = (e) => {
      var c, w, S, b;
      const n = e.name === h.Home, r = (c = e.name) == null ? void 0 : c.startsWith(h.HomeInternal), s = ((w = e.name) == null ? void 0 : w.startsWith(h.BrowserMenu)) || ((S = e.name) == null ? void 0 : S.startsWith(h.BrowserSaveMenu)) || ((b = e.name) == null ? void 0 : b.startsWith(h.DockSaveWorkspaceMenu));
      return !n && !r && !s;
    }, ha = (e) => JSON.parse(JSON.stringify(e));
    async function Eu(e) {
      return e ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : (await ht()).displayViewTabDefaultIcon ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : "data:image/svg+xml,%3Csvg%20style%3D%22background-color%3A%237D808A%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.64648%200.874962C4.84174%200.6797%205.15833%200.6797%205.35359%200.874962L9.12482%204.6462C9.32009%204.84146%209.32009%205.15804%209.12482%205.3533L5.35359%209.12454C5.15833%209.3198%204.84174%209.3198%204.64648%209.12454L0.875245%205.3533C0.679982%205.15804%200.679982%204.84146%200.875245%204.6462L4.64648%200.874962ZM5.00003%201.93562L1.9359%204.99975L5.00003%208.06388L8.06416%204.99975L5.00003%201.93562Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";
    }
    const Tu = { dimensions: { borderWidth: 3, headerHeight: 30 } };
    async function _u(e, n, r) {
      var S, b, F, V, Q, J, ae, ue, Ce, Oe, pt, Ue;
      let s = e;
      const c = ((S = s.workspacePlatform) == null ? void 0 : S.windowType) === "enterprise" || ((F = (b = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : b.workspacePlatform) == null ? void 0 : F.windowType) === "enterprise";
      if (s.layout && !((Q = (V = s.workspacePlatform) == null ? void 0 : V.pages) != null && Q.length)) {
        const lt = await Pi(), Je = { ...await kn(lt, s.layout), isActive: !0 };
        s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.pages = await Jo([Je], n, s);
      }
      n != null && n.browserIconSize && (s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.browserIconSize = n.browserIconSize);
      const w = (J = r == null ? void 0 : r.themes) == null ? void 0 : J[0];
      if ((ue = (ae = s.workspacePlatform) == null ? void 0 : ae.pages) != null && ue.length) {
        const lt = await Jo(s.workspacePlatform.pages, n, s), Je = lt, St = (($e) => {
          if (!$e) return;
          let Et = $e.find((Nt) => Nt.isActive);
          return !Et && $e.length > 0 && ($e[0].isActive = !0, Et = $e[0]), Et;
        })(Je);
        if (Je.forEach(($e) => {
          $e.pageId !== (St == null ? void 0 : St.pageId) && ($e.isActive = !1);
        }), await tr(Je), s.workspacePlatform.pages = lt, s = na({}, await (async ($e) => ({ contextMenuOptions: { enabled: !1 }, experimental: { showFavicons: !0, defaultFaviconUrl: await Eu($e) }, viewVisibility: { showViewsOnSplitterDrag: { enabled: !0 }, showViewsOnWindowResize: { enabled: !0 } } }))(c), n == null ? void 0 : n.defaultWindowOptions, s, await (async ($e) => ({ backgroundThrottling: !0, url: await Pe($e, !0), contextMenu: !0, closeOnLastViewRemoved: !1, permissions: { System: { openUrlWithBrowser: { enabled: !0, protocols: ["mailto"] } } } }))(c)), St.layout = na(St.layout, Tu), async function($e) {
          if ($e.icon || $e.taskbarIcon) {
            const Et = fin.Application.getCurrentSync(), Nt = await (await Et.getWindow()).getOptions();
            $e.taskbarIconGroup || ($e.taskbarIconGroup = Nt.taskbarIconGroup || fin.me.identity.uuid);
          }
          if ($e.workspacePlatform.icon) if (typeof $e.workspacePlatform.icon == "object") {
            const Et = window.matchMedia("(prefers-color-scheme: dark)");
            $e.icon = Et.matches ? $e.workspacePlatform.icon.dark : $e.workspacePlatform.icon.light;
          } else $e.icon = $e.workspacePlatform.icon;
        }(s), !s.backgroundColor && w) if ("palette" in w) s.backgroundColor = ((Ce = w == null ? void 0 : w.palette) == null ? void 0 : Ce.background2) || ((Oe = w == null ? void 0 : w.palette) == null ? void 0 : Oe.backgroundPrimary);
        else {
          const $e = r.selectedScheme === Me.Dark || r.selectedScheme === Me.System && window.matchMedia("(prefers-color-scheme: dark)") ? w == null ? void 0 : w.palettes.dark : w == null ? void 0 : w.palettes.light;
          s.backgroundColor = ($e == null ? void 0 : $e.background2) || ($e == null ? void 0 : $e.backgroundPrimary);
        }
        s = Vt(s, !0);
        const gn = await Pe(c, !0);
        if (gn && (s.url = gn), s.layout = St.layout, s.layoutSnapshot = (($e, Et) => ({ layouts: $e.reduce((Nt, mn) => (!mn.isActive && (!Et || !Iu(mn).singleViewName) || (Nt[mn.layoutContainerKey] = mn.layout), Nt), {}), pages: $e }))(s.workspacePlatform.pages, c), s.workspacePlatform.windowType = s.workspacePlatform.windowType ?? qe.Browser, c) {
          const $e = await rt();
          s.workspacePlatform.newPageUrl = $e, s.workspacePlatform.newTabUrl = $e, s.layout && (s.layout.dimensions.borderWidth = 4, s.layout.dimensions.headerHeight = 28), s.name = s.name || `${h.BrowserWindow}-${zt()}`, (async (Nt) => {
            const mn = await Kt(), or = h.BrowserAddressSearchPrefix + Nt.name, ir = mn + $.BrowserPopupMenuAddressSearchResultsView, Xo = [], Qu = us(or, ir);
            Xo.push(Qu);
            const Xu = h.AICompanionPrefix + Nt.name, { url: el, enabled: tl } = Zt();
            if (tl) {
              const nl = us(Xu, el);
              Xo.push(nl);
            }
            await Promise.all(Xo);
          })(s);
          const { enabled: Et } = Zt();
          s.workspacePlatform.isAiEnabled = Et, s.minWidth = Math.max(654, s.minWidth ?? 0), s.minHeight = Math.max(488, s.minHeight ?? 0);
        } else s.minWidth = Math.max(232, s.minWidth ?? 0), function($e) {
          var or, ir;
          const Et = (or = $e.workspacePlatform) == null ? void 0 : or.viewTabDimensions, Nt = (ir = $e.workspacePlatform) == null ? void 0 : ir.pageTabDimensions, mn = /^[0-9]+(px|%)$/;
          if (Et) {
            if (Et.minWidth && !mn.test(Et.minWidth)) throw new Error(`Provided viewTabDimensions.min value "${Et.minWidth}" is not in a supported format.`);
            if (Et.maxWidth && !mn.test(Et.maxWidth)) throw new Error(`Provided viewTabDimensions.max value "${Et.maxWidth}" is not in a supported format.`);
          }
          if (Nt) {
            if (Nt.minWidth && !mn.test(Nt.minWidth)) throw new Error(`Provided pageTabDimensions.min value "${Nt.minWidth}" is not in a supported format.`);
            if (Nt.maxWidth && !mn.test(Nt.maxWidth)) throw new Error(`Provided pageTabDimensions.max value "${Nt.maxWidth}" is not in a supported format.`);
          }
        }(s);
      }
      return s.cornerRounding && delete s.cornerRounding, s.name || s.layoutSnapshot ? ((Ue = (pt = s.contextMenuOptions) == null ? void 0 : pt.template) == null ? void 0 : Ue.length) > 0 ? s.contextMenuOptions.template = s.contextMenuOptions.template.filter((lt) => lt !== "print") : s.contextMenuOptions = { template: [], enabled: !1 } : s.name = `${h.ClassicWindow}-${zt()}`, s.workspacePlatform && r && (s.workspacePlatform._themeData = r), s;
    }
    const ls = async (e, n) => {
      const r = { uuid: n.uuid, name: n.name };
      await Ii(r, e.title ?? await Go(), e.shouldCenterOnMonitor) && fin.Platform.getCurrentSync().quit();
    }, ds = async (e, n) => {
      const r = v(), s = await r.Browser.getLastFocusedWindow();
      if (!s) return;
      const c = r.Browser.wrapSync(s), { title: w, description: S } = e, b = await Oc({ title: w, description: S, identity: c.identity });
      b && c._sendUpdateVersionModalResponse({ identity: n, response: b });
    };
    async function ps(e, n, r) {
      const s = e.manifestUrl ? await n({ manifestUrl: e.manifestUrl }, r) : void 0;
      if (s != null && s.interop && e.interop) {
        const c = { ...e, ...s, interop: e.interop };
        return delete c.manifestUrl, c;
      }
      return e;
    }
    const fs = (e) => {
      var r;
      const n = ha(e);
      return (r = n._internalWorkspaceData) != null && r.browserNavigationButtons && (n.workspacePlatform = { ...n.workspacePlatform, browserNavigationButtons: n._internalWorkspaceData.browserNavigationButtons }, delete n._internalWorkspaceData.browserNavigationButtons), n;
    }, hs = (e) => {
      const n = ha(e);
      return n.workspacePlatform && (n._internalWorkspaceData = { ...n._internalWorkspaceData, ...n.workspacePlatform }, delete n.workspacePlatform), n;
    }, Ru = { reload: [{ keys: "Ctrl+R", preventDefault: !0 }], back: [{ keys: "Alt+Left", preventDefault: !0 }], forward: [{ keys: "Alt+Right", preventDefault: !0 }] }, Du = { reload: [{ keys: "Cmd+R", preventDefault: !0 }], back: [{ keys: "Cmd+[", preventDefault: !0 }, { keys: "Cmd+Left", preventDefault: !0 }], forward: [{ keys: "Cmd+]", preventDefault: !0 }, { keys: "Cmd+Right", preventDefault: !0 }] }, Ou = async () => await Or() ? Ru : Du, Wu = (e, n) => {
      const r = fin.View.wrapSync(e);
      if (!n) return;
      const s = (c) => {
        (async (w, S, b) => {
          if (b.inputType !== "keyDown") return;
          const F = await (async (Q) => {
            var Ce;
            const J = await Q.getCurrentWindow(), ae = await J.getOptions(), ue = (Ce = ae.workspacePlatform) == null ? void 0 : Ce.navigationButtons;
            return ue.enabled && !ue.hotkeysDisabled;
          })(w), V = await Or();
          if (F) {
            if (S.reload) {
              const Q = b.ctrlKey && !b.altKey && !b.metaKey && !b.shiftKey && b.key === "r", J = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "r";
              (V ? Q : J) && (S != null && S.reload) && (w.reload(), en({ type: "View", action: "Reload", value: w.identity.name }));
            }
            if (S.back) {
              const Q = !b.ctrlKey && b.altKey && !b.metaKey && !b.shiftKey && b.key === "ArrowLeft", J = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "ArrowLeft", ae = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "[";
              (V ? Q : J || ae) && (S != null && S.back) && (w.navigateBack(), en({ type: "View", action: "Back", value: w.identity.name }));
            }
            if (S.forward) {
              const Q = !b.ctrlKey && b.altKey && !b.metaKey && !b.shiftKey && b.key === "ArrowRight", J = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "ArrowRight", ae = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "]";
              (V ? Q : J || ae) && (S != null && S.forward) && (w.navigateForward(), en({ type: "View", action: "Forward", value: w.identity.name }));
            }
          }
        })(r, n, c);
      };
      r.addListener("hotkey", s), r.once("destroyed", () => {
        r.removeListener("hotkey", s);
      });
    }, Yo = (e, n) => ha(e).map((r) => ("componentState" in r ? r.componentState = n(r.componentState) : "content" in r && (r.content = Yo(r.content, n)), r)), gs = (e) => {
      if (e) {
        const n = ha(e);
        return n.content && (n.content = Yo(n.content, fs)), n;
      }
      return e;
    }, ms = (e) => {
      if (e) {
        const n = ha(e);
        return n.content && (n.content = Yo(n.content, hs)), n;
      }
      return e;
    };
    async function Bu({ app: e, target: n }) {
      const r = fin.Platform.getCurrentSync();
      switch (e.manifestType) {
        case X.Snapshot:
          return r.applySnapshot(e.manifest);
        case X.View:
          return async function(s, c) {
            const w = fin.Platform.getCurrentSync();
            if (c.entityType === "view") {
              const S = fin.View.wrapSync(c);
              return await (await S.getParentLayout()).replaceView(c, { manifestUrl: s.manifest, url: void 0, target: void 0 }), S.destroy();
            }
            return w.createView({ name: void 0, url: void 0, manifestUrl: s.manifest, target: void 0 });
          }(e, n);
        case X.External:
          return fin.System.launchExternalProcess({ path: e.manifest, uuid: e.appId });
        default:
          return fin.Application.startFromManifest(e.manifest);
      }
    }
    let Zo;
    const uo = () => (Zo || (Zo = pn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-app-directory`)()), Zo);
    async function Nu(e) {
      return await Mt(e.identity) ? (await uo()).dispatch(hn.GetApps, e.req) : [];
    }
    async function Fu(e) {
      return await Mt(e.identity) ? (await uo()).dispatch(hn.GetSearchProviders, e) : [];
    }
    async function Lu(e) {
      return (await uo()).dispatch(hn.GetCuratedContent, e);
    }
    async function Vu(e) {
      return (await uo()).dispatch(hn.GetRecentlyVisited, e);
    }
    async function Uu(e) {
      const n = (await Ge()).map(async (r) => {
        var c;
        const s = await r.getOptions();
        (c = s.workspacePlatform) != null && c.pages && s.layout && await (async (w) => (await It(w)).dispatch(At.UpdatePagesWindowOptions))(r.identity);
      });
      return await Promise.all(n), e ? e() : Ga();
    }
    let ws = [];
    const ys = () => ws;
    async function ju(e) {
      const n = (s) => {
        if (!s.includes("#") && !s.includes("rgb") && !s.includes("hsl")) throw new Error("Background primary color is not the right format.");
      };
      e == null || e.forEach((s) => {
        "palette" in s && n(s.palette.backgroundPrimary), "palettes" in s && (n(s.palettes.dark.backgroundPrimary), n(s.palettes.light.backgroundPrimary));
      }), ws = ((s, c) => {
        if (Pt("ThemeStorage: initialiseStoragePalettes called", { customThemes: s, isWindows: c }), !s || !s[0]) {
          Pt("ThemeStorage: Using default OpenFin theme");
          const { dark: w, light: S } = Ua[0].palettes;
          return Sn.setPalettes({ dark: w, light: S }, c), Pt("ThemeStorage: Default theme set successfully"), Ua;
        }
        {
          const w = s[0];
          if (Pt("ThemeStorage: Using custom theme", w), "default" in w && w.default && (Pt(`ThemeStorage: Setting theme default scheme to: ${w.default}`), Sn.setThemeDefaultScheme(w.default)), "palette" in w) {
            Pt("ThemeStorage: Processing single palette theme");
            const { palette: S } = w, b = { ...ka, ...S };
            return Sn.setPalettes({ dark: b, light: b }, c), w.palette = b, Pt("ThemeStorage: Single palette theme set successfully"), s;
          }
          if ("palettes" in w) {
            Pt("ThemeStorage: Processing dual palettes theme");
            const { dark: S, light: b } = w.palettes, F = { ...ka, ...S }, V = { ...jn, ...b };
            return Sn.setPalettes({ dark: F, light: V }, c), w.palettes = { dark: F, light: V }, Pt("ThemeStorage: Dual palettes theme set successfully"), s;
          }
        }
      })(e, await Or());
    }
    const Ku = (e, n) => (r) => {
      const s = e !== null;
      return class extends r {
        constructor() {
          super(), this.isWorkspacePlatform = () => ({ isWorkspacePlatform: !0, isBrowserInitialized: !!e, analytics: { isSupported: !0 } }), this.detachPagesFromWindow = fc, this.getAllAttachedPages = Rr, this.getPagesForWindow = ki, this.getPageForWindow = gc, this.markUnsavedPagesAsSavedInternal = Pc, this.launchApp = Bu, this.savePage = vi, this.saveWorkspace = Fc, this.createSavedPageInternal = yi, this.updateSavedPageInternal = bi, this.deleteSavedPageInternal = lc, this.reorderPagesForWindow = mc, this.getUniquePageTitle = Pi, this.updatePageForWindow = pc, this.getLastFocusedBrowserWindow = qc, this.getThemes = ys, this.invokeCustomActionInternal = Qc, this.requestQuitPlatformDialogInternal = ls, this.getCurrentWorkspace = Bc, this.setActiveWorkspace = To, this.getLanguageResourcesInternal = Gc, this.getPageByViewIdentity = async (c) => {
            const w = await fin.Platform.Layout.getLayoutByViewIdentity(c), S = w.identity;
            if (!("layoutName" in S)) throw new Error("Failed to get layout's identity");
            const b = await v().Browser.wrapSync(w.identity).getPages(), F = b.findIndex((V) => V.layoutName === S.layoutName);
            if (F === -1) throw new Error("Failed to get page's index");
            return { windowIdentity: { name: w.identity.name, uuid: w.identity.uuid }, page: b[F], pageIndex: F };
          }, this.openGlobalContextMenuInternal = this.openGlobalContextMenuInternal.bind(this), this.openGlobalContextMenu = this.openGlobalContextMenu.bind(this), this.getSavedPages = this.getSavedPages.bind(this), this.getSavedPage = this.getSavedPage.bind(this), this.createSavedPage = this.createSavedPage.bind(this), this.updateSavedPage = this.updateSavedPage.bind(this), this.deleteSavedPage = this.deleteSavedPage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.attachPagesToWindow = this.attachPagesToWindow.bind(this), this.openViewTabContextMenuInternal = this.openViewTabContextMenuInternal.bind(this), this.openViewTabContextMenu = this.openViewTabContextMenu.bind(this), this.openPageTabContextMenuInternal = this.openPageTabContextMenuInternal.bind(this), this.openPageTabContextMenu = this.openPageTabContextMenu.bind(this), this.getSavedWorkspaces = this.getSavedWorkspaces.bind(this), this.getSavedWorkspacesMetadata = this.getSavedWorkspacesMetadata.bind(this), this.getSavedWorkspace = this.getSavedWorkspace.bind(this), this.createSavedWorkspace = this.createSavedWorkspace.bind(this), this.updateSavedWorkspace = this.updateSavedWorkspace.bind(this), this.deleteSavedWorkspace = this.deleteSavedWorkspace.bind(this), this.getCurrentWorkspace = this.getCurrentWorkspace.bind(this), this.getDockProviderConfig = this.getDockProviderConfig.bind(this), this.saveDockProviderConfig = this.saveDockProviderConfig.bind(this), this.applyWorkspace = this.applyWorkspace.bind(this), this.restoreLastSavedWorkspaceInternal = this.restoreLastSavedWorkspaceInternal.bind(this), this.setActiveWorkspace = this.setActiveWorkspace.bind(this), this.openSaveButtonContextMenu = this.openSaveButtonContextMenu.bind(this), this.openSaveButtonContextMenuInternal = this.openSaveButtonContextMenuInternal.bind(this), this.getSelectedScheme = this.getSelectedScheme.bind(this), this.setSelectedScheme = this.setSelectedScheme.bind(this), this.analyticsInternal = this.analyticsInternal.bind(this), this.handleAnalytics = this.handleAnalytics.bind(this), this.getLanguage = this.getLanguage.bind(this), this.setLanguage = this.setLanguage.bind(this), this.handleSaveModalOnPageClose = this.handleSaveModalOnPageClose.bind(this), this.shouldPageClose = this.shouldPageClose.bind(this), this.shouldWindowClose = this.shouldWindowClose.bind(this), this.handlePagesAndWindowClose = this.handlePagesAndWindowClose.bind(this), this.setActivePage = this.setActivePage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.copyPage = this.copyPage.bind(this), this.addPage = this.addPage.bind(this), this.addDefaultPage = this.addDefaultPage.bind(this), this.markUnsavedPagesAsSavedInternal = this.markUnsavedPagesAsSavedInternal.bind(this), this.trackRemovedTabInternal = this.trackRemovedTabInternal.bind(this), this.restoreRemovedTabInternal = this.restoreRemovedTabInternal.bind(this), this.trackVisitedSiteInternal = this.trackVisitedSiteInternal.bind(this), this.getRecentlyVisitedSitesInternal = this.getRecentlyVisitedSitesInternal.bind(this), this.getFrequentlyVisitedSitesInternal = this.getFrequentlyVisitedSitesInternal.bind(this), this.searchSitesInternal = this.searchSitesInternal.bind(this), this.getSearchProvidersInternal = this.getSearchProvidersInternal.bind(this), this.getCuratedContentInternal = this.getCuratedContentInternal.bind(this), this.handleRequestNavigationInternal = this.handleRequestNavigationInternal.bind(this), this.refreshBookmarksInternal = this.refreshBookmarksInternal.bind(this), this.launchBookmarkInternal = this.launchBookmarkInternal.bind(this), this.getNotificationsConfig = this.getNotificationsConfig.bind(this), this.updateDockFavoritesInternal = this.updateDockFavoritesInternal.bind(this), this.updateContentMenuInternal = this.updateContentMenuInternal.bind(this), this.launchDockEntryInternal = this.launchDockEntryInternal.bind(this), this.setDockFavoritesOrderInternal = this.setDockFavoritesOrderInternal.bind(this), this.navigateContentMenuInternal = this.navigateContentMenuInternal.bind(this), this.setDefaultDockButtonsOrderInternal = this.setDefaultDockButtonsOrderInternal.bind(this), this.getDockWorkspacesContextMenuInternal = this.getDockWorkspacesContextMenuInternal.bind(this), this.handleDockWorkspacesMenuResponseInternal = this.handleDockWorkspacesMenuResponseInternal.bind(this), this.removeDockFavoriteInternal = this.removeDockFavoriteInternal.bind(this), this.addDockFavoriteInternal = this.addDockFavoriteInternal.bind(this), this.focusAndExpandSearchInternal = this.focusAndExpandSearchInternal.bind(this), this.sendUpdateVersionModalResponseInternal = this.sendUpdateVersionModalResponseInternal.bind(this), this.requestQuitPlatformDialogInternal = ls.bind(this), this.showUpdateVersionModalInternal = ds.bind(this);
        }
        async applyWorkspace(...c) {
          return Wc.apply(this, c);
        }
        async restoreLastSavedWorkspaceInternal(...c) {
          return Ei.apply(this, c);
        }
        async getSnapshot() {
          const c = s ? await Uu(async () => Ga(await super.getSnapshot(void 0, fin.me.identity))) : await Ga(await super.getSnapshot(void 0, fin.me.identity));
          let w = { ...c, windows: c.windows.filter(Au).map(Ha) };
          return w = ((S) => {
            const b = ha(S);
            return b.windows.forEach((F) => {
              var V, Q;
              F.layout && (F.layout = gs(F.layout)), (Q = (V = F.workspacePlatform) == null ? void 0 : V.pages) == null || Q.forEach((J) => {
                J != null && J.layout && (J.layout = gs(J.layout));
              });
            }), b;
          })(w), w;
        }
        async getViewSnapshot(c) {
          let w = await super.getViewSnapshot(c);
          return w = fs(w), w;
        }
        async applySnapshot({ snapshot: c, options: w }) {
          let S = c;
          typeof S == "string" && (S = await super.fetchManifest({ manifestUrl: S }, fin.me.identity));
          const b = function(F) {
            var V, Q;
            for (const J of F.windows) if ((Q = (V = J.workspacePlatform) == null ? void 0 : V.pages) != null && Q.length) return !0;
            return !1;
          }(S);
          if (!s && b) throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");
          return S = ((F) => {
            const V = ha(F);
            return V.windows.forEach((Q) => {
              var J, ae;
              Q.layout = ms(Q.layout), (ae = (J = Q.workspacePlatform) == null ? void 0 : J.pages) == null || ae.forEach((ue) => {
                ue.layout = ms(ue.layout);
              });
            }), V;
          })(S), super.applySnapshot({ snapshot: S, options: w });
        }
        async createWindow(c, w) {
          var V, Q, J, ae;
          if (s && c.reason === "tearout") {
            const ue = await fin.Window.wrapSync(w).getOptions(), Ce = (V = ue.workspacePlatform) == null ? void 0 : V.windowType;
            c.taskbarIconGroup = ue.taskbarIconGroup, Ce && (c.workspacePlatform || (c.workspacePlatform = {}), c.workspacePlatform.windowType = ue.workspacePlatform.windowType, Ce === qe.Platform && (c.url = ue.url));
          }
          if (!s || ((Q = c.workspacePlatform) == null ? void 0 : Q.windowType) === qe.Platform) {
            const ue = await super.createWindow(c, w);
            return en({ type: "Window", action: "Open Window", value: ue.identity.name, data: { uuid: ue.identity.uuid } }), ue;
          }
          var S;
          S = { allowed: !0 }, Hr || (Hr = !0, Ea(On.Browser, S)), ((ue = []) => {
            const Ce = ue.filter((Ue) => Ue.type !== ft.Custom), Oe = /* @__PURE__ */ new Set(), pt = [];
            for (const Ue of Ce) Oe.has(Ue.type) && pt.push(Ue.type), Oe.add(Ue.type);
            if (pt.length > 0) {
              const Ue = pt.join(", ");
              throw new Error(`Encountered a duplicate "${Ue}" toolbar button. No more than one instance of a button type may be provided.`);
            }
          })((ae = (J = c.workspacePlatform) == null ? void 0 : J.toolbarOptions) == null ? void 0 : ae.buttons);
          let b = ((ue) => "workspacePlatform" in ue ? ue : (({ workstacks: Ce, pages: Oe, ...pt }) => ({ ...pt, workspacePlatform: { pages: Oe || Ce || null } }))(ue))(c);
          b = await _u(b, e, { themes: ys(), selectedScheme: this.getSelectedScheme() }), b = await (async (ue) => {
            const Ce = await fin.System.getMonitorInfo();
            let Oe = Ce.primaryMonitor;
            const pt = ue.defaultLeft, Ue = ue.defaultTop;
            Ce.nonPrimaryMonitors.forEach((St) => {
              const { top: gn, bottom: $e, left: Et, right: Nt } = St.availableRect;
              pt >= Et && pt <= Nt && Ue >= gn && Ue <= $e && (Oe = St);
            });
            const lt = Oe.availableRect.bottom - Oe.availableRect.top, Je = Oe.availableRect.right - Oe.availableRect.left;
            return ue.defaultHeight = Math.min(ue.defaultHeight || 800, lt), ue.defaultWidth = Math.min(ue.defaultWidth || 800, Je), ue;
          })(b);
          const F = await (/* @__PURE__ */ ((ue) => async (Ce, Oe) => {
            var lt, Je;
            let pt = !1;
            const Ue = await ue(Ce, Oe);
            return (Je = (lt = Ce == null ? void 0 : Ce.workspacePlatform) == null ? void 0 : lt._internalDeferShowOptions) != null && Je.deferShowEnabled && await Ue.addListener("show-requested", async () => {
              if (pt) return;
              const St = await Ue.getOptions();
              await Ue.updateOptions({ workspacePlatform: { ...St.workspacePlatform, _internalDeferShowOptions: { ...St.workspacePlatform._internalDeferShowOptions, autoShow: !0 } } }), pt = !0;
            }), Ue;
          })((ue, Ce) => super.createWindow(ue, Ce)))(b, w);
          return en({ type: "Window", action: "Open Window", value: F.identity.name, data: { uuid: F.identity.uuid } }), F;
        }
        async createView(c, w) {
          var b;
          c.opts = E(c.opts, e == null ? void 0 : e.defaultViewOptions), c.opts = await ps(c.opts, this.fetchManifest, w), c.opts = await (async (F) => {
            var J;
            const V = ha(F), Q = (J = V.workspacePlatform) == null ? void 0 : J.browserNavigationButtons;
            if (Q) {
              const ae = Object.keys(Q);
              for (const ue of ae) if (Q[ue]) {
                const Ce = (await Ou())[ue];
                V.hotkeys ? V.hotkeys.push(...Ce) : V.hotkeys = [...Ce];
              }
            }
            return V;
          })(c.opts), c.opts = hs(c.opts);
          const S = await super.createView(c, w);
          return Wu(S.identity, (b = c.opts._internalWorkspaceData) == null ? void 0 : b.browserNavigationButtons), S;
        }
        async replaceView(c, w) {
          return c.opts.newView = await E(c.opts.newView, e == null ? void 0 : e.defaultViewOptions), c.opts.newView = await ps(c.opts.newView, this.fetchManifest, w), super.replaceView(c, w);
        }
        async replaceLayout(c, w) {
          var S;
          return await Mt(w) || ((S = c.opts.layout) == null || delete S.dimensions), super.replaceLayout(c, w);
        }
        async getSavedPage(...c) {
          return Uo.apply(this, c);
        }
        async getSavedPages(...c) {
          return tu.apply(this, c);
        }
        async createSavedPage(...c) {
          return Ki.apply(this, c);
        }
        async deleteSavedPage(...c) {
          return $i.apply(this, c);
        }
        async updateSavedPage(...c) {
          return nu.apply(this, c);
        }
        async getSavedWorkspace(...c) {
          return qo.apply(this, c);
        }
        async getSavedWorkspaces(...c) {
          return is.apply(this, c);
        }
        async getSavedWorkspacesMetadata(...c) {
          return (await this.getSavedWorkspaces(...c)).map((w) => ({ workspaceId: w.workspaceId, title: w.title }));
        }
        async createSavedWorkspace(...c) {
          return ss.apply(this, c);
        }
        async deleteSavedWorkspace(...c) {
          return cs.apply(this, c);
        }
        async updateSavedWorkspace(...c) {
          return Mu.apply(this, c);
        }
        async getDockProviderConfig(...c) {
          return xu.apply(this, c);
        }
        async saveDockProviderConfig(...c) {
          return Cu.apply(this, c);
        }
        async attachPagesToWindow(c) {
          const w = await Jo(c.pages, e);
          await tr(w), await dc({ ...c, pages: w });
        }
        async addPage(c) {
          const w = await Mt(c.identity), S = await Qe(c.identity), { page: b, insertionIndex: F } = c;
          b != null && b.title || w || (b.title = await S.dispatch(fe.GetUniquePageTitle, void 0));
          const V = (await this.getAllAttachedPages()).find((J) => J.pageId === b.pageId || J.title === b.title);
          if (V) {
            if (V.pageId === b.pageId) throw new Error(`page with id ${b.pageId} is already attached to a browser window ${V.parentIdentity.name}`);
            if (!w) throw new Error(`addPage title collision, page with title ${b.title} already exists, conflicting page id: ${V.pageId} with title ${V.title}`);
          }
          const Q = { identity: c.identity, pages: [{ ...b, multiInstanceViewBehavior: c.multiInstanceViewBehavior || "duplicate" }], insertionIndex: F };
          await this.attachPagesToWindow(Q);
        }
        async addDefaultPage(c) {
          await this.addPage(c), await this.setActivePage({ identity: c.identity, pageId: c.page.pageId });
        }
        async setActivePage(...c) {
          return hc.apply(this, c);
        }
        async openGlobalContextMenuInternal(...c) {
          return bu.apply(this, c);
        }
        async openGlobalContextMenu(...c) {
          return io.apply(this, [...c, ar.GlobalMenu, oo.BottomRight]);
        }
        async openViewTabContextMenuInternal(...c) {
          return vu.apply(this, c);
        }
        async openViewTabContextMenu(...c) {
          return io.apply(this, [...c, ar.ContextMenu]);
        }
        async openPageTabContextMenuInternal(...c) {
          return ku.apply(this, c);
        }
        async openPageTabContextMenu(...c) {
          return io.apply(this, [...c, ar.ContextMenu]);
        }
        async openSaveButtonContextMenu(...c) {
          return io.apply(this, c);
        }
        async openSaveButtonContextMenuInternal(...c) {
          return Su.apply(this, c);
        }
        getSelectedScheme(...c) {
          return g.apply(this, c);
        }
        async setSelectedScheme(...c) {
          return p.apply(this, c);
        }
        async handlePageChanges(...c) {
          return Sc.apply(this, c);
        }
        async analyticsInternal(...c) {
          return Mc.apply(this, c);
        }
        async handleAnalytics(...c) {
        }
        async handleSaveModalOnPageClose(...c) {
          return wc.apply(this, c);
        }
        async shouldPageClose(...c) {
          return yc.apply(this, c);
        }
        async shouldWindowClose(...c) {
          return bc.apply(this, c);
        }
        handlePagesAndWindowClose(...c) {
          return vc.apply(this, c);
        }
        async copyPage(...c) {
          return kc.apply(this, c);
        }
        async getNotificationsConfig() {
          return n;
        }
        async setLanguage(...c) {
          return Hc.apply(this, c);
        }
        async getLanguage() {
          return Wi.apply(this);
        }
        async trackRemovedTabInternal(...c) {
          return au.apply(this, c);
        }
        async restoreRemovedTabInternal() {
          const c = await (async () => {
            const w = ji();
            if (!w) throw new Error("Unable to pop last removed tab - IndexDB not supported");
            const S = w[Lo], b = await S.toCollection().keys();
            if (b.length > 0) {
              const F = Math.max(...b.map((Q) => Number(Q))).toString(), V = await S.get(F);
              if (V) {
                await S.delete(F);
                const { id: Q, ...J } = V;
                return J;
              }
            }
          })();
          if ("page" in c) if (await Xt(c.identity)) {
            const w = v().Browser.wrapSync(c.identity);
            await w.addPage(c.page), await w.setActivePage(c.page.pageId);
          } else v().createWindow({ name: c.identity.name, workspacePlatform: { pages: [c.page], windowType: qe.Browser } });
          else (function(w) {
            return "window" in w;
          })(c) && v().createWindow({ workspacePlatform: { pages: c.window.pages, windowType: qe.Browser } });
        }
        async trackVisitedSiteInternal(...c) {
          return ou.apply(this, c);
        }
        async getRecentlyVisitedSitesInternal(...c) {
          return await Vu.apply(this, c);
        }
        async getFrequentlyVisitedSitesInternal(...c) {
          return iu.apply(this, c);
        }
        async searchSitesInternal(...c) {
          return await Nu.apply(this, c);
        }
        async getSearchProvidersInternal(...c) {
          return await Fu.apply(this, c);
        }
        async getCuratedContentInternal(...c) {
          return await Lu.apply(this, c);
        }
        async handleRequestNavigationInternal(...c) {
        }
        async launchBookmarkInternal(c) {
          return su(c);
        }
        async refreshBookmarksInternal() {
          (await v().Browser.getAllWindows()).forEach(async ({ identity: c }) => {
            (await It(c)).dispatch(At.RefreshBookmarksInternal);
          }), (await xr(eu())).dispatch(At.RefreshBookmarksInternal), await (async () => {
            const c = await co();
            c && await (await It(c.identity, so)).dispatch(At.RefreshBookmarksInternal);
          })();
        }
        async updateDockFavoritesInternal(c) {
          return (async (w) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await It(S.identity, so)).dispatch(Bn.UpdateFavoriteEntries, w);
          })(c);
        }
        async updateContentMenuInternal(c) {
          return (async (w) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await It(S.identity, so)).dispatch(Bn.UpdateContentMenu, w);
          })(c);
        }
        async launchDockEntryInternal(c) {
          return (async (w) => (await Fa()).dispatch("launch-entry", w))(c);
        }
        async setDefaultDockButtonsOrderInternal(c) {
          return (async (w) => (await Fa()).dispatch("set-default-dock-buttons-order", w))(c);
        }
        async setDockFavoritesOrderInternal(c) {
          return (async (w) => (await Fa()).dispatch("set-dock-favorites-order", w))(c);
        }
        async addDockFavoriteInternal(c) {
          return (async (w) => (await Fa()).dispatch("add-favorite-entry", w))(c);
        }
        async removeDockFavoriteInternal(c) {
          return (async (w) => (await Fa()).dispatch("remove-favorite-entry", w))(c);
        }
        async navigateContentMenuInternal(c) {
          return (async (w) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await It(S.identity, so)).dispatch(Bn.NavigateContentMenu, w);
          })(c);
        }
        async getDockWorkspacesContextMenuInternal() {
          return (async () => (await Fa()).dispatch("get-dock-workspaces-context-menu", void 0))();
        }
        async handleDockWorkspacesMenuResponseInternal(c) {
          return (async (w) => (await Fa()).dispatch("handle-dock-workspaces-menu-response", w))(c);
        }
        async focusAndExpandSearchInternal() {
          return Pu();
        }
        async sendUpdateVersionModalResponseInternal(c) {
          return Tn(c);
        }
        async showUpdateVersionModalInternal(c, w) {
          return ds(c, w);
        }
      };
    };
    function $u(e, n, r) {
      const s = Ku(e, r);
      try {
        return typeof n == "function" ? (c) => n(s(c)) : Array.isArray(n) ? [...n, s] : (c) => new (s(c))();
      } catch (c) {
        throw new Error("WorkspacePlatform.init Error:", c);
      }
    }
    const Hu = ["green", "purple", "orange", "red", "pink", "yellow"], bs = "CONTEXT_GROUP_PAGE", Gu = () => (e) => class extends e {
      getContextGroups() {
        return super.getContextGroups().map((n) => {
          var r, s;
          return Hu.includes((r = n.displayMetadata) == null ? void 0 : r.name) ? { ...n, displayMetadata: { ...n.displayMetadata, name: ne((s = n.displayMetadata) == null ? void 0 : s.name) } } : n;
        });
      }
    }, zu = () => {
      const e = new Set(Ho.keys());
      return (n) => class extends n {
        constructor() {
          super(), this.onClientConnected = async (s) => {
            if (s.name.startsWith("internal-generated-view")) {
              const { page: c } = await v().Browser.getPageByViewIdentity(s), w = c.contextGroup;
              this.joinContextGroup({ contextGroupId: w ?? bs, target: s }, { uuid: this.fin.me.uuid, name: this.fin.me.name });
            }
          };
          const r = this.interopClients.set;
          this.interopClients.set = (s, c) => {
            r.call(this.interopClients, s, c), this.onClientConnected(c.clientIdentity);
          };
        }
        async joinContextGroup({ contextGroupId: r, target: s }, c) {
          if (r !== bs) return super.joinContextGroup({ contextGroupId: r, target: s }, c);
          try {
            const w = (await v().Browser.getPageByViewIdentity(s)).page.layoutName;
            if (!w) throw new Error("View does not belong to a page");
            if (!e.has(w) && (e.add(w), !this.contextGroupsById.has(w))) {
              const S = /* @__PURE__ */ new Map();
              this.contextGroupsById.set(w, S);
            }
            await super.joinContextGroup({ contextGroupId: w, target: s }, c), s.name;
          } catch (w) {
            JSON.stringify(s), w.stack;
          }
        }
        getContextGroups() {
          return Array.from(e).map((r) => ({ id: r, displayMetadata: Ho.get(r) ?? {} }));
        }
        setContextForGroup(r, s) {
          if (!this.contextGroupsById.has(s)) {
            const c = /* @__PURE__ */ new Map();
            this.contextGroupsById.set(s, c);
          }
          return super.setContextForGroup(r, s);
        }
      };
    }, qu = (e, n) => {
      const r = ((s) => kr(s) ? zu() : Gu())(n);
      try {
        return typeof e == "function" ? (s) => e(r(s)) : Array.isArray(e) ? [...e, r] : (s) => new (r(s))();
      } catch (s) {
        throw new Error("WorkspacePlatform.init Error:", s);
      }
    };
    async function Ju() {
      (async () => (await rn()).on("window-closed", Zc))(), async function() {
        const e = fin.Application.getCurrentSync(), n = await Fi();
        await Promise.all(n.map(async (s) => {
          await Na(s.identity, void 0, !0);
        }));
        const r = await fin.System.getFocusedWindow();
        r && r.name.startsWith(h.BrowserWindow) && await Na(r, void 0, !0), await e.addListener("window-focused", async (s) => {
          await Na(s, void 0, !0);
        }), await e.addListener("window-minimized", async (s) => {
          await Na(s, !1);
        }), await e.addListener("window-restored", async (s) => {
          await Na(s, !0);
        }), await e.addListener("window-closed", Yc);
      }(), To(await _o());
    }
    let Qo;
    function Yu({ overrideCallback: e, interopOverride: n, browser: r, notifications: s, analytics: c, integrations: w = [], workspaceAsar: S }) {
      if (!at) throw new Error("Cannot be used outside an OpenFin env.");
      return Qo || (Qo = (async () => {
        const b = fin.Platform.getCurrentSync();
        var F, V;
        if (b.once("platform-api-ready", () => Ju()), b.on("window-show-all-downloads", ({ name: ae, uuid: ue }) => {
          Ri({ name: ae, uuid: ue });
        }), r != null && r.title && (F = r.title, os = F), Ic(c), S) {
          const ae = `workspace-${encodeURIComponent(fin.me.uuid)}`, { baseUrl: ue } = await fin.System.serveAsset({ ...S, hostName: ae });
          Re(ue);
        }
        r != null && r.browserBaseUrl && Re(r.browserBaseUrl), kr(r) && (Yt = !0, V = r, Jt = V == null ? void 0 : V.aiPanelOptions, Zt());
        const Q = Pn();
        var J;
        return Q.setWorkspaceStorage(ea(`${Ve}-workspace`)), Q.trySynchronizeWorkspaceStorage(), await fin.Platform.init({ overrideCallback: $u(r, e || (r == null ? void 0 : r.overrideCallback), s), interopOverride: qu(n || (r == null ? void 0 : r.interopOverride), r) }), J = { allowed: !0 }, Ea(On.Platform, J), await Promise.all(w.map(async (ae) => {
          ((ue, Ce) => {
            Ea(`${On.Microflow}:${ue}`, Ce, "integration-feature");
          })(ae.workflowIntegrationName, { allowed: !0, apiVersion: Ft }), await ae._initializeWorkflows();
        })), b;
      })()), Qo;
    }
    const Zu = async ({ theme: e, customActions: n, language: r, ...s }) => {
      const c = Ft.split(".").map((b) => parseInt(b));
      if (!await (async (b) => {
        if ((await ht()).disableRuntimeValidation || await Mt()) return !0;
        const F = (await fin.System.getVersion()).split(".").map((V) => parseInt(V));
        return b.every((V, Q) => !(Q < 3) || F[Q] === b[Q]);
      })(c)) throw new Error(`Runtime version is not supported.  ${c[0]}.${c[1]}.${c[2]}.* is required`);
      var S;
      return ju(e), e && (S = { allowed: !0 }, Ea(On.Theming, S)), n && (No = n), await zc(r == null ? void 0 : r.initialLanguage), await Yu(s);
    };
  })(), $s.exports = d;
})();
var sc = $s.exports;
const $d = /* @__PURE__ */ li(sc), Hd = /* @__PURE__ */ ol({
  __proto__: null,
  default: $d
}, [sc]);
typeof window < "u" && (window.WorkspacePlatform = Hd);
export {
  Hd as default
};
