var vu = Object.defineProperty;
var ku = (c, r, l) => r in c ? vu(c, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : c[r] = l;
var Rs = (c, r, l) => ku(c, typeof r != "symbol" ? r + "" : r, l);
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pi(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
function ec(c) {
  if (c.__esModule) return c;
  var r = c.default;
  if (typeof r == "function") {
    var l = function p() {
      return this instanceof p ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    l.prototype = r.prototype;
  } else l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(c).forEach(function(p) {
    var m = Object.getOwnPropertyDescriptor(c, p);
    Object.defineProperty(l, p, m.get ? m : {
      enumerable: !0,
      get: function() {
        return c[p];
      }
    });
  }), l;
}
var tc = { exports: {} }, nc = { exports: {} };
(function(c, r) {
  ((l, p) => {
    c.exports = p();
  })(lr, function() {
    var l = function(t, a) {
      return (l = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(i, d) {
        i.__proto__ = d;
      } : function(i, d) {
        for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (i[f] = d[f]);
      }))(t, a);
    }, p = function() {
      return (p = Object.assign || function(t) {
        for (var a, i = 1, d = arguments.length; i < d; i++) for (var f in a = arguments[i]) Object.prototype.hasOwnProperty.call(a, f) && (t[f] = a[f]);
        return t;
      }).apply(this, arguments);
    };
    function m(t, a, i) {
      for (var d, f = 0, g = a.length; f < g; f++) !d && f in a || ((d = d || Array.prototype.slice.call(a, 0, f))[f] = a[f]);
      return t.concat(d || Array.prototype.slice.call(a));
    }
    var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : lr, k = Object.keys, P = Array.isArray;
    function M(t, a) {
      return typeof a == "object" && k(a).forEach(function(i) {
        t[i] = a[i];
      }), t;
    }
    typeof Promise > "u" || h.Promise || (h.Promise = Promise);
    var L = Object.getPrototypeOf, z = {}.hasOwnProperty;
    function Y(t, a) {
      return z.call(t, a);
    }
    function V(t, a) {
      typeof a == "function" && (a = a(L(t))), (typeof Reflect > "u" ? k : Reflect.ownKeys)(a).forEach(function(i) {
        he(t, i, a[i]);
      });
    }
    var O = Object.defineProperty;
    function he(t, a, i, d) {
      O(t, a, M(i && Y(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, d));
    }
    function de(t) {
      return { from: function(a) {
        return t.prototype = Object.create(a.prototype), he(t.prototype, "constructor", t), { extend: V.bind(null, t.prototype) };
      } };
    }
    var H = Object.getOwnPropertyDescriptor, Pe = [].slice;
    function Z(t, a, i) {
      return Pe.call(t, a, i);
    }
    function ke(t, a) {
      return a(t);
    }
    function ee(t) {
      if (!t) throw new Error("Assertion Failed");
    }
    function Se(t) {
      h.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }
    function re(t, a) {
      if (typeof a == "string" && Y(t, a)) return t[a];
      if (!a) return t;
      if (typeof a != "string") {
        for (var i = [], d = 0, f = a.length; d < f; ++d) {
          var g = re(t, a[d]);
          i.push(g);
        }
        return i;
      }
      var b, y = a.indexOf(".");
      return y === -1 || (b = t[a.substr(0, y)]) == null ? void 0 : re(b, a.substr(y + 1));
    }
    function pe(t, a, i) {
      if (t && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof a != "string" && "length" in a) {
        ee(typeof i != "string" && "length" in i);
        for (var d = 0, f = a.length; d < f; ++d) pe(t, a[d], i[d]);
      } else {
        var g, b, y = a.indexOf(".");
        y !== -1 ? (g = a.substr(0, y), (y = a.substr(y + 1)) === "" ? i === void 0 ? P(t) && !isNaN(parseInt(g)) ? t.splice(g, 1) : delete t[g] : t[g] = i : pe(b = (b = t[g]) && Y(t, g) ? b : t[g] = {}, y, i)) : i === void 0 ? P(t) && !isNaN(parseInt(a)) ? t.splice(a, 1) : delete t[a] : t[a] = i;
      }
    }
    function rt(t) {
      var a, i = {};
      for (a in t) Y(t, a) && (i[a] = t[a]);
      return i;
    }
    var He = [].concat;
    function $e(t) {
      return He.apply([], t);
    }
    var ft = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat($e([8, 16, 32, 64].map(function(t) {
      return ["Int", "Uint", "Float"].map(function(a) {
        return a + t + "Array";
      });
    }))).filter(function(t) {
      return h[t];
    }), pt = new Set(ft.map(function(t) {
      return h[t];
    })), It = null;
    function Qe(t) {
      return It = /* @__PURE__ */ new WeakMap(), t = function a(i) {
        if (!i || typeof i != "object") return i;
        var d = It.get(i);
        if (d) return d;
        if (P(i)) {
          d = [], It.set(i, d);
          for (var f = 0, g = i.length; f < g; ++f) d.push(a(i[f]));
        } else if (pt.has(i.constructor)) d = i;
        else {
          var b, y = L(i);
          for (b in d = y === Object.prototype ? {} : Object.create(y), It.set(i, d), i) Y(i, b) && (d[b] = a(i[b]));
        }
        return d;
      }(t), It = null, t;
    }
    var Mt = {}.toString;
    function Ie(t) {
      return Mt.call(t).slice(8, -1);
    }
    var Xe = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Gt = typeof Xe == "symbol" ? function(t) {
      var a;
      return t != null && (a = t[Xe]) && a.apply(t);
    } : function() {
      return null;
    };
    function Ze(t, a) {
      a = t.indexOf(a), 0 <= a && t.splice(a, 1);
    }
    var Tt = {};
    function Re(t) {
      var a, i, d, f;
      if (arguments.length === 1) {
        if (P(t)) return t.slice();
        if (this === Tt && typeof t == "string") return [t];
        if (f = Gt(t)) for (i = []; !(d = f.next()).done; ) i.push(d.value);
        else {
          if (t == null) return [t];
          if (typeof (a = t.length) != "number") return [t];
          for (i = new Array(a); a--; ) i[a] = t[a];
        }
      } else for (a = arguments.length, i = new Array(a); a--; ) i[a] = arguments[a];
      return i;
    }
    var zt = typeof Symbol < "u" ? function(t) {
      return t[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, ft = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], _e = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ft), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function qt(t, a) {
      this.name = t, this.message = a;
    }
    function kn(t, a) {
      return t + ". Errors: " + Object.keys(a).map(function(i) {
        return a[i].toString();
      }).filter(function(i, d, f) {
        return f.indexOf(i) === d;
      }).join(`
`);
    }
    function Rn(t, a, i, d) {
      this.failures = a, this.failedKeys = d, this.successCount = i, this.message = kn(t, a);
    }
    function Wt(t, a) {
      this.name = "BulkError", this.failures = Object.keys(a).map(function(i) {
        return a[i];
      }), this.failuresByPos = a, this.message = kn(t, this.failures);
    }
    de(qt).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), de(Rn).from(qt), de(Wt).from(qt);
    var ln = _e.reduce(function(t, a) {
      return t[a] = a + "Error", t;
    }, {}), Vt = qt, ye = _e.reduce(function(t, a) {
      var i = a + "Error";
      function d(f, g) {
        this.name = i, f ? typeof f == "string" ? (this.message = "".concat(f).concat(g ? `
 ` + g : ""), this.inner = g || null) : typeof f == "object" && (this.message = "".concat(f.name, " ").concat(f.message), this.inner = f) : (this.message = Kt[a] || i, this.inner = null);
      }
      return de(d).from(Vt), t[a] = d, t;
    }, {}), Ut = (ye.Syntax = SyntaxError, ye.Type = TypeError, ye.Range = RangeError, ft.reduce(function(t, a) {
      return t[a + "Error"] = ye[a], t;
    }, {}));
    ft = _e.reduce(function(t, a) {
      return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (t[a + "Error"] = ye[a]), t;
    }, {});
    function C() {
    }
    function K(t) {
      return t;
    }
    function $(t, a) {
      return t == null || t === K ? a : function(i) {
        return a(t(i));
      };
    }
    function Q(t, a) {
      return function() {
        t.apply(this, arguments), a.apply(this, arguments);
      };
    }
    function Ae(t, a) {
      return t === C ? a : function() {
        var i = t.apply(this, arguments), d = (i !== void 0 && (arguments[0] = i), this.onsuccess), f = this.onerror, g = (this.onsuccess = null, this.onerror = null, a.apply(this, arguments));
        return d && (this.onsuccess = this.onsuccess ? Q(d, this.onsuccess) : d), f && (this.onerror = this.onerror ? Q(f, this.onerror) : f), g !== void 0 ? g : i;
      };
    }
    function De(t, a) {
      return t === C ? a : function() {
        t.apply(this, arguments);
        var i = this.onsuccess, d = this.onerror;
        this.onsuccess = this.onerror = null, a.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Q(i, this.onsuccess) : i), d && (this.onerror = this.onerror ? Q(d, this.onerror) : d);
      };
    }
    function Ne(t, a) {
      return t === C ? a : function(f) {
        var d = t.apply(this, arguments), f = (M(f, d), this.onsuccess), g = this.onerror, b = (this.onsuccess = null, this.onerror = null, a.apply(this, arguments));
        return f && (this.onsuccess = this.onsuccess ? Q(f, this.onsuccess) : f), g && (this.onerror = this.onerror ? Q(g, this.onerror) : g), d === void 0 ? b === void 0 ? void 0 : b : M(d, b);
      };
    }
    function ot(t, a) {
      return t === C ? a : function() {
        return a.apply(this, arguments) !== !1 && t.apply(this, arguments);
      };
    }
    function qe(t, a) {
      return t === C ? a : function() {
        var i = t.apply(this, arguments);
        if (i && typeof i.then == "function") {
          for (var d = this, f = arguments.length, g = new Array(f); f--; ) g[f] = arguments[f];
          return i.then(function() {
            return a.apply(d, g);
          });
        }
        return a.apply(this, arguments);
      };
    }
    ft.ModifyError = Rn, ft.DexieError = qt, ft.BulkError = Wt;
    var vt = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function Dn(t) {
      vt = t;
    }
    var un = {}, dn = 100, Dt = typeof Promise > "u" ? [] : (_e = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [Dt = crypto.subtle.digest("SHA-512", new Uint8Array([0])), L(Dt), _e] : [_e, L(_e), _e]), _e = Dt[0], Tn = Dt[1], Tn = Tn && Tn.then, fe = _e && _e.constructor, Je = !!Dt[2], jt = function(t, a) {
      Nt.push([t, a]), At && (queueMicrotask($n), At = !1);
    }, tn = !0, At = !0, Bt = [], $t = [], xt = K, kt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: C, pgp: !1, env: {}, finalize: C }, xe = kt, Nt = [], Sn = 0, Fe = [];
    function ge(t) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var a = this._PSD = xe;
      if (typeof t != "function") {
        if (t !== un) throw new TypeError("Not a function");
        this._state = arguments[1], this._value = arguments[2], this._state === !1 && et(this, this._value);
      } else this._state = null, this._value = null, ++a.ref, function i(d, f) {
        try {
          f(function(g) {
            if (d._state === null) {
              if (g === d) throw new TypeError("A promise cannot be resolved with itself.");
              var b = d._lib && Kn();
              g && typeof g.then == "function" ? i(d, function(y, T) {
                g instanceof ge ? g._then(y, T) : g.then(y, T);
              }) : (d._state = !0, d._value = g, Ba(d)), b && pn();
            }
          }, et.bind(null, d));
        } catch (g) {
          et(d, g);
        }
      }(this, t);
    }
    var la = { get: function() {
      var t = xe, a = fa;
      function i(d, f) {
        var g = this, b = !t.global && (t !== xe || a !== fa), y = b && !fn(), T = new ge(function(B, I) {
          Na(g, new Ft($r(d, t, b, y), $r(f, t, b, y), B, I, t));
        });
        return this._consoleTask && (T._consoleTask = this._consoleTask), T;
      }
      return i.prototype = un, i;
    }, set: function(t) {
      he(this, "then", t && t.prototype === un ? la : { get: function() {
        return t;
      }, set: la.set });
    } };
    function Ft(t, a, i, d, f) {
      this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = i, this.reject = d, this.psd = f;
    }
    function et(t, a) {
      var i, d;
      $t.push(a), t._state === null && (i = t._lib && Kn(), a = xt(a), t._state = !1, t._value = a, d = t, Bt.some(function(f) {
        return f._value === d._value;
      }) || Bt.push(d), Ba(t), i) && pn();
    }
    function Ba(t) {
      var a = t._listeners;
      t._listeners = [];
      for (var i = 0, d = a.length; i < d; ++i) Na(t, a[i]);
      var f = t._PSD;
      --f.ref || f.finalize(), Sn === 0 && (++Sn, jt(function() {
        --Sn == 0 && Fa();
      }, []));
    }
    function Na(t, a) {
      if (t._state === null) t._listeners.push(a);
      else {
        var i = t._state ? a.onFulfilled : a.onRejected;
        if (i === null) return (t._state ? a.resolve : a.reject)(t._value);
        ++a.psd.ref, ++Sn, jt(Un, [i, t, a]);
      }
    }
    function Un(t, a, i) {
      try {
        var d, f = a._value;
        !a._state && $t.length && ($t = []), d = vt && a._consoleTask ? a._consoleTask.run(function() {
          return t(f);
        }) : t(f), a._state || $t.indexOf(f) !== -1 || ((g) => {
          for (var b = Bt.length; b; ) if (Bt[--b]._value === g._value) return Bt.splice(b, 1);
        })(a), i.resolve(d);
      } catch (g) {
        i.reject(g);
      } finally {
        --Sn == 0 && Fa(), --i.psd.ref || i.psd.finalize();
      }
    }
    function $n() {
      xn(kt, function() {
        Kn() && pn();
      });
    }
    function Kn() {
      var t = tn;
      return At = tn = !1, t;
    }
    function pn() {
      var t, a, i;
      do
        for (; 0 < Nt.length; ) for (t = Nt, Nt = [], i = t.length, a = 0; a < i; ++a) {
          var d = t[a];
          d[0].apply(null, d[1]);
        }
      while (0 < Nt.length);
      At = tn = !0;
    }
    function Fa() {
      for (var t = Bt, a = (Bt = [], t.forEach(function(d) {
        d._PSD.onunhandled.call(null, d._value, d);
      }), Fe.slice(0)), i = a.length; i; ) a[--i]();
    }
    function ua(t) {
      return new ge(un, !1, t);
    }
    function it(t, a) {
      var i = xe;
      return function() {
        var d = Kn(), f = xe;
        try {
          return hn(i, !0), t.apply(this, arguments);
        } catch (g) {
          a && a(g);
        } finally {
          hn(f, !1), d && pn();
        }
      };
    }
    V(ge.prototype, { then: la, _then: function(t, a) {
      Na(this, new Ft(null, null, t, a, xe));
    }, catch: function(t) {
      var a, i;
      return arguments.length === 1 ? this.then(null, t) : (a = t, i = arguments[1], typeof a == "function" ? this.then(null, function(d) {
        return (d instanceof a ? i : ua)(d);
      }) : this.then(null, function(d) {
        return (d && d.name === a ? i : ua)(d);
      }));
    }, finally: function(t) {
      return this.then(function(a) {
        return ge.resolve(t()).then(function() {
          return a;
        });
      }, function(a) {
        return ge.resolve(t()).then(function() {
          return ua(a);
        });
      });
    }, timeout: function(t, a) {
      var i = this;
      return t < 1 / 0 ? new ge(function(d, f) {
        var g = setTimeout(function() {
          return f(new ye.Timeout(a));
        }, t);
        i.then(d, f).finally(clearTimeout.bind(null, g));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && he(ge.prototype, Symbol.toStringTag, "Dexie.Promise"), kt.env = gr(), V(ge, { all: function() {
      var t = Re.apply(null, arguments).map(ha);
      return new ge(function(a, i) {
        t.length === 0 && a([]);
        var d = t.length;
        t.forEach(function(f, g) {
          return ge.resolve(f).then(function(b) {
            t[g] = b, --d || a(t);
          }, i);
        });
      });
    }, resolve: function(t) {
      return t instanceof ge ? t : t && typeof t.then == "function" ? new ge(function(a, i) {
        t.then(a, i);
      }) : new ge(un, !0, t);
    }, reject: ua, race: function() {
      var t = Re.apply(null, arguments).map(ha);
      return new ge(function(a, i) {
        t.map(function(d) {
          return ge.resolve(d).then(a, i);
        });
      });
    }, PSD: { get: function() {
      return xe;
    }, set: function(t) {
      return xe = t;
    } }, totalEchoes: { get: function() {
      return fa;
    } }, newPSD: Pn, usePSD: xn, scheduler: { get: function() {
      return jt;
    }, set: function(t) {
      jt = t;
    } }, rejectionMapper: { get: function() {
      return xt;
    }, set: function(t) {
      xt = t;
    } }, follow: function(t, a) {
      return new ge(function(i, d) {
        return Pn(function(f, g) {
          var b = xe;
          b.unhandleds = [], b.onunhandled = g, b.finalize = Q(function() {
            var y, T = this;
            y = function() {
              T.unhandleds.length === 0 ? f() : g(T.unhandleds[0]);
            }, Fe.push(function B() {
              y(), Fe.splice(Fe.indexOf(B), 1);
            }), ++Sn, jt(function() {
              --Sn == 0 && Fa();
            }, []);
          }, b.finalize), t();
        }, a, i, d);
      });
    } }), fe && (fe.allSettled && he(ge, "allSettled", function() {
      var t = Re.apply(null, arguments).map(ha);
      return new ge(function(a) {
        t.length === 0 && a([]);
        var i = t.length, d = new Array(i);
        t.forEach(function(f, g) {
          return ge.resolve(f).then(function(b) {
            return d[g] = { status: "fulfilled", value: b };
          }, function(b) {
            return d[g] = { status: "rejected", reason: b };
          }).then(function() {
            return --i || a(d);
          });
        });
      });
    }), fe.any && typeof AggregateError < "u" && he(ge, "any", function() {
      var t = Re.apply(null, arguments).map(ha);
      return new ge(function(a, i) {
        t.length === 0 && i(new AggregateError([]));
        var d = t.length, f = new Array(d);
        t.forEach(function(g, b) {
          return ge.resolve(g).then(function(y) {
            return a(y);
          }, function(y) {
            f[b] = y, --d || i(new AggregateError(f));
          });
        });
      });
    }), fe.withResolvers) && (ge.withResolvers = fe.withResolvers);
    var St = { awaits: 0, echoes: 0, id: 0 }, da = 0, pa = [], jn = 0, fa = 0, Hn = 0;
    function Pn(t, b, i, d) {
      var f = xe, g = Object.create(f), b = (g.parent = f, g.ref = 0, g.global = !1, g.id = ++Hn, kt.env, g.env = Je ? { Promise: ge, PromiseProp: { value: ge, configurable: !0, writable: !0 }, all: ge.all, race: ge.race, allSettled: ge.allSettled, any: ge.any, resolve: ge.resolve, reject: ge.reject } : {}, b && M(g, b), ++f.ref, g.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, xn(g, t, i, d));
      return g.ref === 0 && g.finalize(), b;
    }
    function te() {
      return St.id || (St.id = ++da), ++St.awaits, St.echoes += dn, St.id;
    }
    function fn() {
      return !!St.awaits && (--St.awaits == 0 && (St.id = 0), St.echoes = St.awaits * dn, !0);
    }
    function ha(t) {
      return St.echoes && t && t.constructor === fe ? (te(), t.then(function(a) {
        return fn(), a;
      }, function(a) {
        return fn(), Pt(a);
      })) : t;
    }
    function hr() {
      var t = pa[pa.length - 1];
      pa.pop(), hn(t, !1);
    }
    function hn(t, a) {
      var i, d, f = xe;
      (a ? !St.echoes || jn++ && t === xe : !jn || --jn && t === xe) || queueMicrotask(a ? (function(g) {
        ++fa, St.echoes && --St.echoes != 0 || (St.echoes = St.awaits = St.id = 0), pa.push(xe), hn(g, !0);
      }).bind(null, t) : hr), t !== xe && (xe = t, f === kt && (kt.env = gr()), Je) && (i = kt.env.Promise, d = t.env, f.global || t.global) && (Object.defineProperty(h, "Promise", d.PromiseProp), i.all = d.all, i.race = d.race, i.resolve = d.resolve, i.reject = d.reject, d.allSettled && (i.allSettled = d.allSettled), d.any) && (i.any = d.any);
    }
    function gr() {
      var t = h.Promise;
      return Je ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
    }
    function xn(t, a, i, d, f) {
      var g = xe;
      try {
        return hn(t, !0), a(i, d, f);
      } finally {
        hn(g, !1);
      }
    }
    function $r(t, a, i, d) {
      return typeof t != "function" ? t : function() {
        var f = xe;
        i && te(), hn(a, !0);
        try {
          return t.apply(this, arguments);
        } finally {
          hn(f, !1), d && queueMicrotask(fn);
        }
      };
    }
    function mr(t) {
      Promise === fe && St.echoes === 0 ? jn === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
    }
    ("" + Tn).indexOf("[native code]") === -1 && (te = fn = C);
    var Pt = ge.reject, _n = "￿", gn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Kr = "String expected.", Jt = [], ga = "__dbnames", La = "readonly", wr = "readwrite";
    function On(t, a) {
      return t ? a ? function() {
        return t.apply(this, arguments) && a.apply(this, arguments);
      } : t : a;
    }
    var ie = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Gn(t) {
      return typeof t != "string" || /\./.test(t) ? function(a) {
        return a;
      } : function(a) {
        return a[t] === void 0 && t in a && delete (a = Qe(a))[t], a;
      };
    }
    function Va() {
      throw ye.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
    }
    function le(t, a) {
      try {
        var i = Be(t), d = Be(a);
        if (i !== d) return i === "Array" ? 1 : d === "Array" ? -1 : i === "binary" ? 1 : d === "binary" ? -1 : i === "string" ? 1 : d === "string" ? -1 : i === "Date" ? 1 : d !== "Date" ? NaN : -1;
        switch (i) {
          case "number":
          case "Date":
          case "string":
            return a < t ? 1 : t < a ? -1 : 0;
          case "binary":
            for (var f = jr(t), g = jr(a), b = f.length, y = g.length, T = b < y ? b : y, B = 0; B < T; ++B) if (f[B] !== g[B]) return f[B] < g[B] ? -1 : 1;
            return b === y ? 0 : b < y ? -1 : 1;
          case "Array":
            for (var I = t, x = a, D = I.length, R = x.length, E = D < R ? D : R, A = 0; A < E; ++A) {
              var F = le(I[A], x[A]);
              if (F !== 0) return F;
            }
            return D === R ? 0 : D < R ? -1 : 1;
        }
      } catch {
      }
      return NaN;
    }
    function Be(t) {
      var a = typeof t;
      return a == "object" && (ArrayBuffer.isView(t) || (a = Ie(t)) === "ArrayBuffer") ? "binary" : a;
    }
    function jr(t) {
      return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
    }
    function ma(t, a, i) {
      var d = t.schema.yProps;
      return d ? (a && 0 < i.numFailures && (a = a.filter(function(f, g) {
        return !i.failures[g];
      })), Promise.all(d.map(function(f) {
        return f = f.updatesTable, a ? t.db.table(f).where("k").anyOf(a).delete() : t.db.table(f).clear();
      })).then(function() {
        return i;
      })) : i;
    }
    wa.prototype.execute = function(t) {
      var a = this["@@propmod"];
      if (a.add !== void 0) {
        var i = a.add;
        if (P(i)) return m(m([], P(t) ? t : [], !0), i).sort();
        if (typeof i == "number") return (Number(t) || 0) + i;
        if (typeof i == "bigint") try {
          return BigInt(t) + i;
        } catch {
          return BigInt(0) + i;
        }
        throw new TypeError("Invalid term ".concat(i));
      }
      if (a.remove !== void 0) {
        var d = a.remove;
        if (P(d)) return P(t) ? t.filter(function(f) {
          return !d.includes(f);
        }).sort() : [];
        if (typeof d == "number") return Number(t) - d;
        if (typeof d == "bigint") try {
          return BigInt(t) - d;
        } catch {
          return BigInt(0) - d;
        }
        throw new TypeError("Invalid subtrahend ".concat(d));
      }
      return i = (i = a.replacePrefix) == null ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? a.replacePrefix[1] + t.substring(i.length) : t;
    };
    var Wn = wa;
    function wa(t) {
      this["@@propmod"] = t;
    }
    function Ua(t, a) {
      for (var i = k(a), d = i.length, f = !1, g = 0; g < d; ++g) {
        var b = i[g], y = a[b], T = re(t, b);
        y instanceof Wn ? (pe(t, b, y.execute(T)), f = !0) : T !== y && (pe(t, b, y), f = !0);
      }
      return f;
    }
    tt.prototype._trans = function(t, a, i) {
      var d = this._tx || xe.trans, f = this.name, g = vt && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
      function b(B, I, x) {
        if (x.schema[f]) return a(x.idbtrans, x);
        throw new ye.NotFound("Table " + f + " not part of transaction");
      }
      var y = Kn();
      try {
        var T = d && d.db._novip === this.db._novip ? d === xe.trans ? d._promise(t, b, i) : Pn(function() {
          return d._promise(t, b, i);
        }, { trans: d, transless: xe.transless || xe }) : function B(I, x, D, R) {
          if (I.idbdb && (I._state.openComplete || xe.letThrough || I._vip)) {
            var E = I._createTransaction(x, D, I._dbSchema);
            try {
              E.create(), I._state.PR1398_maxLoop = 3;
            } catch (A) {
              return A.name === ln.InvalidState && I.isOpen() && 0 < --I._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), I.close({ disableAutoOpen: !1 }), I.open().then(function() {
                return B(I, x, D, R);
              })) : Pt(A);
            }
            return E._promise(x, function(A, F) {
              return Pn(function() {
                return xe.trans = E, R(A, F, E);
              });
            }).then(function(A) {
              if (x === "readwrite") try {
                E.idbtrans.commit();
              } catch {
              }
              return x === "readonly" ? A : E._completion.then(function() {
                return A;
              });
            });
          }
          if (I._state.openComplete) return Pt(new ye.DatabaseClosed(I._state.dbOpenError));
          if (!I._state.isBeingOpened) {
            if (!I._state.autoOpen) return Pt(new ye.DatabaseClosed());
            I.open().catch(C);
          }
          return I._state.dbReadyPromise.then(function() {
            return B(I, x, D, R);
          });
        }(this.db, t, [this.name], b);
        return g && (T._consoleTask = g, T = T.catch(function(B) {
          return console.trace(B), Pt(B);
        })), T;
      } finally {
        y && pn();
      }
    }, tt.prototype.get = function(t, a) {
      var i = this;
      return t && t.constructor === Object ? this.where(t).first(a) : t == null ? Pt(new ye.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(d) {
        return i.core.get({ trans: d, key: t }).then(function(f) {
          return i.hook.reading.fire(f);
        });
      }).then(a);
    }, tt.prototype.where = function(t) {
      if (typeof t == "string") return new this.db.WhereClause(this, t);
      if (P(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
      var a = k(t);
      if (a.length === 1) return this.where(a[0]).equals(t[a[0]]);
      var i = this.schema.indexes.concat(this.schema.primKey).filter(function(y) {
        if (y.compound && a.every(function(B) {
          return 0 <= y.keyPath.indexOf(B);
        })) {
          for (var T = 0; T < a.length; ++T) if (a.indexOf(y.keyPath[T]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(y, T) {
        return y.keyPath.length - T.keyPath.length;
      })[0];
      if (i && this.db._maxKey !== _n) return b = i.keyPath.slice(0, a.length), this.where(b).equals(b.map(function(y) {
        return t[y];
      }));
      !i && vt && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
      var d = this.schema.idxByName;
      function f(y, T) {
        return le(y, T) === 0;
      }
      var b = a.reduce(function(I, T) {
        var B = I[0], I = I[1], x = d[T], D = t[T];
        return [B || x, B || !x ? On(I, x && x.multi ? function(R) {
          return R = re(R, T), P(R) && R.some(function(E) {
            return f(D, E);
          });
        } : function(R) {
          return f(D, re(R, T));
        }) : I];
      }, [null, null]), g = b[0], b = b[1];
      return g ? this.where(g.name).equals(t[g.keyPath]).filter(b) : i ? this.filter(b) : this.where(a).equals("");
    }, tt.prototype.filter = function(t) {
      return this.toCollection().and(t);
    }, tt.prototype.count = function(t) {
      return this.toCollection().count(t);
    }, tt.prototype.offset = function(t) {
      return this.toCollection().offset(t);
    }, tt.prototype.limit = function(t) {
      return this.toCollection().limit(t);
    }, tt.prototype.each = function(t) {
      return this.toCollection().each(t);
    }, tt.prototype.toArray = function(t) {
      return this.toCollection().toArray(t);
    }, tt.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, tt.prototype.orderBy = function(t) {
      return new this.db.Collection(new this.db.WhereClause(this, P(t) ? "[".concat(t.join("+"), "]") : t));
    }, tt.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, tt.prototype.mapToClass = function(t) {
      for (var a = this.db, i = this.name, d = ((this.schema.mappedClass = t).prototype instanceof Va && (t = ((b) => {
        var y = I, T = b;
        if (typeof T != "function" && T !== null) throw new TypeError("Class extends value " + String(T) + " is not a constructor or null");
        function B() {
          this.constructor = y;
        }
        function I() {
          return b !== null && b.apply(this, arguments) || this;
        }
        return l(y, T), y.prototype = T === null ? Object.create(T) : (B.prototype = T.prototype, new B()), Object.defineProperty(I.prototype, "db", { get: function() {
          return a;
        }, enumerable: !1, configurable: !0 }), I.prototype.table = function() {
          return i;
        }, I;
      })(t)), /* @__PURE__ */ new Set()), f = t.prototype; f; f = L(f)) Object.getOwnPropertyNames(f).forEach(function(b) {
        return d.add(b);
      });
      function g(b) {
        if (!b) return b;
        var y, T = Object.create(t.prototype);
        for (y in b) if (!d.has(y)) try {
          T[y] = b[y];
        } catch {
        }
        return T;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = g, this.hook("reading", g), t;
    }, tt.prototype.defineClass = function() {
      return this.mapToClass(function(t) {
        M(this, t);
      });
    }, tt.prototype.add = function(t, a) {
      var i = this, d = this.schema.primKey, f = d.auto, g = d.keyPath, b = t;
      return g && f && (b = Gn(g)(t)), this._trans("readwrite", function(y) {
        return i.core.mutate({ trans: y, type: "add", keys: a != null ? [a] : null, values: [b] });
      }).then(function(y) {
        return y.numFailures ? ge.reject(y.failures[0]) : y.lastResult;
      }).then(function(y) {
        if (g) try {
          pe(t, g, y);
        } catch {
        }
        return y;
      });
    }, tt.prototype.upsert = function(t, a) {
      var i = this, d = this.schema.primKey.keyPath;
      return this._trans("readwrite", function(f) {
        return i.core.get({ trans: f, key: t }).then(function(g) {
          var b = g ?? {};
          return Ua(b, a), d && pe(b, d, t), i.core.mutate({ trans: f, type: "put", values: [b], keys: [t], upsert: !0, updates: { keys: [t], changeSpecs: [a] } }).then(function(y) {
            return y.numFailures ? ge.reject(y.failures[0]) : !!g;
          });
        });
      });
    }, tt.prototype.update = function(t, a) {
      return typeof t != "object" || P(t) ? this.where(":id").equals(t).modify(a) : (t = re(t, this.schema.primKey.keyPath)) === void 0 ? Pt(new ye.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(a);
    }, tt.prototype.put = function(t, a) {
      var i = this, d = this.schema.primKey, f = d.auto, g = d.keyPath, b = t;
      return g && f && (b = Gn(g)(t)), this._trans("readwrite", function(y) {
        return i.core.mutate({ trans: y, type: "put", values: [b], keys: a != null ? [a] : null });
      }).then(function(y) {
        return y.numFailures ? ge.reject(y.failures[0]) : y.lastResult;
      }).then(function(y) {
        if (g) try {
          pe(t, g, y);
        } catch {
        }
        return y;
      });
    }, tt.prototype.delete = function(t) {
      var a = this;
      return this._trans("readwrite", function(i) {
        return a.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(d) {
          return ma(a, [t], d);
        }).then(function(d) {
          return d.numFailures ? ge.reject(d.failures[0]) : void 0;
        });
      });
    }, tt.prototype.clear = function() {
      var t = this;
      return this._trans("readwrite", function(a) {
        return t.core.mutate({ trans: a, type: "deleteRange", range: ie }).then(function(i) {
          return ma(t, null, i);
        });
      }).then(function(a) {
        return a.numFailures ? ge.reject(a.failures[0]) : void 0;
      });
    }, tt.prototype.bulkGet = function(t) {
      var a = this;
      return this._trans("readonly", function(i) {
        return a.core.getMany({ keys: t, trans: i }).then(function(d) {
          return d.map(function(f) {
            return a.hook.reading.fire(f);
          });
        });
      });
    }, tt.prototype.bulkAdd = function(t, a, i) {
      var d = this, f = Array.isArray(a) ? a : void 0, g = (i = i || (f ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(b) {
        var y = d.schema.primKey, B = y.auto, y = y.keyPath;
        if (y && f) throw new ye.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (f && f.length !== t.length) throw new ye.InvalidArgument("Arguments objects and keys must have the same length");
        var T = t.length, B = y && B ? t.map(Gn(y)) : t;
        return d.core.mutate({ trans: b, type: "add", keys: f, values: B, wantResults: g }).then(function(I) {
          var x = I.numFailures, D = I.failures;
          if (x === 0) return g ? I.results : I.lastResult;
          throw new Wt("".concat(d.name, ".bulkAdd(): ").concat(x, " of ").concat(T, " operations failed"), D);
        });
      });
    }, tt.prototype.bulkPut = function(t, a, i) {
      var d = this, f = Array.isArray(a) ? a : void 0, g = (i = i || (f ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(b) {
        var y = d.schema.primKey, B = y.auto, y = y.keyPath;
        if (y && f) throw new ye.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (f && f.length !== t.length) throw new ye.InvalidArgument("Arguments objects and keys must have the same length");
        var T = t.length, B = y && B ? t.map(Gn(y)) : t;
        return d.core.mutate({ trans: b, type: "put", keys: f, values: B, wantResults: g }).then(function(I) {
          var x = I.numFailures, D = I.failures;
          if (x === 0) return g ? I.results : I.lastResult;
          throw new Wt("".concat(d.name, ".bulkPut(): ").concat(x, " of ").concat(T, " operations failed"), D);
        });
      });
    }, tt.prototype.bulkUpdate = function(t) {
      var a = this, i = this.core, d = t.map(function(b) {
        return b.key;
      }), f = t.map(function(b) {
        return b.changes;
      }), g = [];
      return this._trans("readwrite", function(b) {
        return i.getMany({ trans: b, keys: d, cache: "clone" }).then(function(y) {
          var T = [], B = [], I = (t.forEach(function(x, D) {
            var R = x.key, E = x.changes, A = y[D];
            if (A) {
              for (var F = 0, U = Object.keys(E); F < U.length; F++) {
                var W = U[F], J = E[W];
                if (W === a.schema.primKey.keyPath) {
                  if (le(J, R) !== 0) throw new ye.Constraint("Cannot update primary key in bulkUpdate()");
                } else pe(A, W, J);
              }
              g.push(D), T.push(R), B.push(A);
            }
          }), T.length);
          return i.mutate({ trans: b, type: "put", keys: T, values: B, updates: { keys: d, changeSpecs: f } }).then(function(x) {
            var D = x.numFailures, R = x.failures;
            if (D === 0) return I;
            for (var E = 0, A = Object.keys(R); E < A.length; E++) {
              var F, U = A[E], W = g[Number(U)];
              W != null && (F = R[U], delete R[U], R[W] = F);
            }
            throw new Wt("".concat(a.name, ".bulkUpdate(): ").concat(D, " of ").concat(I, " operations failed"), R);
          });
        });
      });
    }, tt.prototype.bulkDelete = function(t) {
      var a = this, i = t.length;
      return this._trans("readwrite", function(d) {
        return a.core.mutate({ trans: d, type: "delete", keys: t }).then(function(f) {
          return ma(a, t, f);
        });
      }).then(function(d) {
        var f = d.numFailures, g = d.failures;
        if (f === 0) return d.lastResult;
        throw new Wt("".concat(a.name, ".bulkDelete(): ").concat(f, " of ").concat(i, " operations failed"), g);
      });
    };
    var ya = tt;
    function tt() {
    }
    function ba(t) {
      function a(b, y) {
        if (y) {
          for (var T = arguments.length, B = new Array(T - 1); --T; ) B[T - 1] = arguments[T];
          return i[b].subscribe.apply(null, B), t;
        }
        if (typeof b == "string") return i[b];
      }
      var i = {};
      a.addEventType = g;
      for (var d = 1, f = arguments.length; d < f; ++d) g(arguments[d]);
      return a;
      function g(b, y, T) {
        var B, I;
        if (typeof b != "object") return y = y || ot, I = { subscribers: [], fire: T = T || C, subscribe: function(x) {
          I.subscribers.indexOf(x) === -1 && (I.subscribers.push(x), I.fire = y(I.fire, x));
        }, unsubscribe: function(x) {
          I.subscribers = I.subscribers.filter(function(D) {
            return D !== x;
          }), I.fire = I.subscribers.reduce(y, T);
        } }, i[b] = a[b] = I;
        k(B = b).forEach(function(x) {
          var D = B[x];
          if (P(D)) g(x, B[x][0], B[x][1]);
          else {
            if (D !== "asap") throw new ye.InvalidArgument("Invalid event config");
            var R = g(x, K, function() {
              for (var E = arguments.length, A = new Array(E); E--; ) A[E] = arguments[E];
              R.subscribers.forEach(function(F) {
                Se(function() {
                  F.apply(null, A);
                });
              });
            });
          }
        });
      }
    }
    function zn(t, a) {
      return de(a).from({ prototype: t }), a;
    }
    function Bn(t, a) {
      return !(t.filter || t.algorithm || t.or) && (a ? t.justLimit : !t.replayFilter);
    }
    function yr(t, a) {
      t.filter = On(t.filter, a);
    }
    function br(t, a, i) {
      var d = t.replayFilter;
      t.replayFilter = d ? function() {
        return On(d(), a());
      } : a, t.justLimit = i && !d;
    }
    function va(t, a) {
      if (t.isPrimKey) return a.primaryKey;
      var i = a.getIndexByKeyPath(t.index);
      if (i) return i;
      throw new ye.Schema("KeyPath " + t.index + " on object store " + a.name + " is not indexed");
    }
    function qn(t, a, i) {
      var d = va(t, a.schema);
      return a.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: d, range: t.range } });
    }
    function Jn(t, a, i, d) {
      var f, g, b = t.replayFilter ? On(t.filter, t.replayFilter()) : t.filter;
      return t.or ? (f = {}, g = function(y, T, B) {
        var I, x;
        b && !b(T, B, function(D) {
          return T.stop(D);
        }, function(D) {
          return T.fail(D);
        }) || ((x = "" + (I = T.primaryKey)) == "[object ArrayBuffer]" && (x = "" + new Uint8Array(I)), Y(f, x)) || (f[x] = !0, a(y, T, B));
      }, Promise.all([t.or._iterate(g, i), $a(qn(t, d, i), t.algorithm, g, !t.keysOnly && t.valueMapper)])) : $a(qn(t, d, i), On(t.algorithm, b), a, !t.keysOnly && t.valueMapper);
    }
    function $a(t, a, i, d) {
      var f = it(d ? function(g, b, y) {
        return i(d(g), b, y);
      } : i);
      return t.then(function(g) {
        if (g) return g.start(function() {
          var b = function() {
            return g.continue();
          };
          a && !a(g, function(y) {
            return b = y;
          }, function(y) {
            g.stop(y), b = C;
          }, function(y) {
            g.fail(y), b = C;
          }) || f(g.value, g, function(y) {
            return b = y;
          }), b();
        });
      });
    }
    Ue.prototype._read = function(t, a) {
      var i = this._ctx;
      return i.error ? i.table._trans(null, Pt.bind(null, i.error)) : i.table._trans("readonly", t).then(a);
    }, Ue.prototype._write = function(t) {
      var a = this._ctx;
      return a.error ? a.table._trans(null, Pt.bind(null, a.error)) : a.table._trans("readwrite", t, "locked");
    }, Ue.prototype._addAlgorithm = function(t) {
      var a = this._ctx;
      a.algorithm = On(a.algorithm, t);
    }, Ue.prototype._iterate = function(t, a) {
      return Jn(this._ctx, t, a, this._ctx.table.core);
    }, Ue.prototype.clone = function(t) {
      var a = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
      return t && M(i, t), a._ctx = i, a;
    }, Ue.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, Ue.prototype.each = function(t) {
      var a = this._ctx;
      return this._read(function(i) {
        return Jn(a, t, i, a.table.core);
      });
    }, Ue.prototype.count = function(t) {
      var a = this;
      return this._read(function(i) {
        var d, f = a._ctx, g = f.table.core;
        return Bn(f, !0) ? g.count({ trans: i, query: { index: va(f, g.schema), range: f.range } }).then(function(b) {
          return Math.min(b, f.limit);
        }) : (d = 0, Jn(f, function() {
          return ++d, !1;
        }, i, g).then(function() {
          return d;
        }));
      }).then(t);
    }, Ue.prototype.sortBy = function(t, a) {
      var i = t.split(".").reverse(), d = i[0], f = i.length - 1;
      function g(T, B) {
        return B ? g(T[i[B]], B - 1) : T[d];
      }
      var b = this._ctx.dir === "next" ? 1 : -1;
      function y(T, B) {
        return le(g(T, f), g(B, f)) * b;
      }
      return this.toArray(function(T) {
        return T.sort(y);
      }).then(a);
    }, Ue.prototype.toArray = function(t) {
      var a = this;
      return this._read(function(i) {
        var d, f, g, b = a._ctx;
        return b.dir === "next" && Bn(b, !0) && 0 < b.limit ? (d = b.valueMapper, f = va(b, b.table.core.schema), b.table.core.query({ trans: i, limit: b.limit, values: !0, query: { index: f, range: b.range } }).then(function(y) {
          return y = y.result, d ? y.map(d) : y;
        })) : (g = [], Jn(b, function(y) {
          return g.push(y);
        }, i, b.table.core).then(function() {
          return g;
        }));
      }, t);
    }, Ue.prototype.offset = function(t) {
      var a = this._ctx;
      return t <= 0 || (a.offset += t, Bn(a) ? br(a, function() {
        var i = t;
        return function(d, f) {
          return i === 0 || (i === 1 ? --i : f(function() {
            d.advance(i), i = 0;
          }), !1);
        };
      }) : br(a, function() {
        var i = t;
        return function() {
          return --i < 0;
        };
      })), this;
    }, Ue.prototype.limit = function(t) {
      return this._ctx.limit = Math.min(this._ctx.limit, t), br(this._ctx, function() {
        var a = t;
        return function(i, d, f) {
          return --a <= 0 && d(f), 0 <= a;
        };
      }, !0), this;
    }, Ue.prototype.until = function(t, a) {
      return yr(this._ctx, function(i, d, f) {
        return !t(i.value) || (d(f), a);
      }), this;
    }, Ue.prototype.first = function(t) {
      return this.limit(1).toArray(function(a) {
        return a[0];
      }).then(t);
    }, Ue.prototype.last = function(t) {
      return this.reverse().first(t);
    }, Ue.prototype.filter = function(t) {
      var a;
      return yr(this._ctx, function(i) {
        return t(i.value);
      }), (a = this._ctx).isMatch = On(a.isMatch, t), this;
    }, Ue.prototype.and = function(t) {
      return this.filter(t);
    }, Ue.prototype.or = function(t) {
      return new this.db.WhereClause(this._ctx.table, t, this);
    }, Ue.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, Ue.prototype.desc = function() {
      return this.reverse();
    }, Ue.prototype.eachKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, d) {
        t(d.key, d);
      });
    }, Ue.prototype.eachUniqueKey = function(t) {
      return this._ctx.unique = "unique", this.eachKey(t);
    }, Ue.prototype.eachPrimaryKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, d) {
        t(d.primaryKey, d);
      });
    }, Ue.prototype.keys = function(t) {
      var a = this._ctx, i = (a.keysOnly = !a.isMatch, []);
      return this.each(function(d, f) {
        i.push(f.key);
      }).then(function() {
        return i;
      }).then(t);
    }, Ue.prototype.primaryKeys = function(t) {
      var a = this._ctx;
      if (a.dir === "next" && Bn(a, !0) && 0 < a.limit) return this._read(function(d) {
        var f = va(a, a.table.core.schema);
        return a.table.core.query({ trans: d, values: !1, limit: a.limit, query: { index: f, range: a.range } });
      }).then(function(d) {
        return d.result;
      }).then(t);
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(d, f) {
        i.push(f.primaryKey);
      }).then(function() {
        return i;
      }).then(t);
    }, Ue.prototype.uniqueKeys = function(t) {
      return this._ctx.unique = "unique", this.keys(t);
    }, Ue.prototype.firstKey = function(t) {
      return this.limit(1).keys(function(a) {
        return a[0];
      }).then(t);
    }, Ue.prototype.lastKey = function(t) {
      return this.reverse().firstKey(t);
    }, Ue.prototype.distinct = function() {
      var t, a = this._ctx, a = a.index && a.table.schema.idxByName[a.index];
      return a && a.multi && (t = {}, yr(this._ctx, function(d) {
        var d = d.primaryKey.toString(), f = Y(t, d);
        return t[d] = !0, !f;
      })), this;
    }, Ue.prototype.modify = function(t) {
      var a = this, i = this._ctx;
      return this._write(function(d) {
        function f(A, F) {
          var U = F.failures;
          D += A - F.numFailures;
          for (var W = 0, J = k(U); W < J.length; W++) {
            var ae = J[W];
            x.push(U[ae]);
          }
        }
        var g = typeof t == "function" ? t : function(A) {
          return Ua(A, t);
        }, b = i.table.core, I = b.schema.primaryKey, y = I.outbound, T = I.extractKey, B = 200, I = a.db._options.modifyChunkSize, x = (I && (B = typeof I == "object" ? I[b.name] || I["*"] || 200 : I), []), D = 0, R = [], E = t === ka;
        return a.clone().primaryKeys().then(function(A) {
          function F(W) {
            var J = Math.min(B, A.length - W), ae = A.slice(W, W + J);
            return (E ? Promise.resolve([]) : b.getMany({ trans: d, keys: ae, cache: "immutable" })).then(function(ue) {
              var se = [], oe = [], be = y ? [] : null, we = E ? ae : [];
              if (!E) for (var ce = 0; ce < J; ++ce) {
                var ve = ue[ce], Ke = { value: Qe(ve), primKey: A[W + ce] };
                g.call(Ke, Ke.value, Ke) !== !1 && (Ke.value == null ? we.push(A[W + ce]) : y || le(T(ve), T(Ke.value)) === 0 ? (oe.push(Ke.value), y && be.push(A[W + ce])) : (we.push(A[W + ce]), se.push(Ke.value)));
              }
              return Promise.resolve(0 < se.length && b.mutate({ trans: d, type: "add", values: se }).then(function(ze) {
                for (var G in ze.failures) we.splice(parseInt(G), 1);
                f(se.length, ze);
              })).then(function() {
                return (0 < oe.length || U && typeof t == "object") && b.mutate({ trans: d, type: "put", keys: be, values: oe, criteria: U, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < W }).then(function(ze) {
                  return f(oe.length, ze);
                });
              }).then(function() {
                return (0 < we.length || U && E) && b.mutate({ trans: d, type: "delete", keys: we, criteria: U, isAdditionalChunk: 0 < W }).then(function(ze) {
                  return ma(i.table, we, ze);
                }).then(function(ze) {
                  return f(we.length, ze);
                });
              }).then(function() {
                return A.length > W + J && F(W + B);
              });
            });
          }
          var U = Bn(i) && i.limit === 1 / 0 && (typeof t != "function" || E) && { index: i.index, range: i.range };
          return F(0).then(function() {
            if (0 < x.length) throw new Rn("Error modifying one or more objects", x, D, R);
            return A.length;
          });
        });
      });
    }, Ue.prototype.delete = function() {
      var t = this._ctx, a = t.range;
      return !Bn(t) || t.table.schema.yProps || !t.isPrimKey && a.type !== 3 ? this.modify(ka) : this._write(function(i) {
        var d = t.table.core.schema.primaryKey, f = a;
        return t.table.core.count({ trans: i, query: { index: d, range: f } }).then(function(g) {
          return t.table.core.mutate({ trans: i, type: "deleteRange", range: f }).then(function(T) {
            var y = T.failures, T = T.numFailures;
            if (T) throw new Rn("Could not delete some values", Object.keys(y).map(function(B) {
              return y[B];
            }), g - T);
            return g - T;
          });
        });
      });
    };
    var vr = Ue;
    function Ue() {
    }
    var ka = function(t, a) {
      return a.value = null;
    };
    function vo(t, a) {
      return t < a ? -1 : t === a ? 0 : 1;
    }
    function kr(t, a) {
      return a < t ? -1 : t === a ? 0 : 1;
    }
    function nt(t, a, i) {
      return t = t instanceof Nn ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(a), t;
    }
    function nn(t) {
      return new t.Collection(t, function() {
        return Ka("");
      }).limit(0);
    }
    function Sa(R, a, i, d) {
      var f, g, b, y, T, B, I, x = i.length;
      if (!i.every(function(A) {
        return typeof A == "string";
      })) return nt(R, Kr);
      function D(A) {
        f = A === "next" ? function(U) {
          return U.toUpperCase();
        } : function(U) {
          return U.toLowerCase();
        }, g = A === "next" ? function(U) {
          return U.toLowerCase();
        } : function(U) {
          return U.toUpperCase();
        }, b = A === "next" ? vo : kr;
        var F = i.map(function(U) {
          return { lower: g(U), upper: f(U) };
        }).sort(function(U, W) {
          return b(U.lower, W.lower);
        });
        y = F.map(function(U) {
          return U.upper;
        }), T = F.map(function(U) {
          return U.lower;
        }), I = (B = A) === "next" ? "" : d;
      }
      D("next");
      var R = new R.Collection(R, function() {
        return mn(y[0], T[x - 1] + d);
      }), E = (R._ondirectionchange = function(A) {
        D(A);
      }, 0);
      return R._addAlgorithm(function(A, F, U) {
        var W = A.key;
        if (typeof W == "string") {
          var J = g(W);
          if (a(J, T, E)) return !0;
          for (var ae = null, ue = E; ue < x; ++ue) {
            var se = ((oe, be, we, ce, ve, Ke) => {
              for (var ze = Math.min(oe.length, ce.length), G = -1, Ve = 0; Ve < ze; ++Ve) {
                var ht = be[Ve];
                if (ht !== ce[Ve]) return ve(oe[Ve], we[Ve]) < 0 ? oe.substr(0, Ve) + we[Ve] + we.substr(Ve + 1) : ve(oe[Ve], ce[Ve]) < 0 ? oe.substr(0, Ve) + ce[Ve] + we.substr(Ve + 1) : 0 <= G ? oe.substr(0, G) + be[G] + we.substr(G + 1) : null;
                ve(oe[Ve], ht) < 0 && (G = Ve);
              }
              return ze < ce.length && Ke === "next" ? oe + we.substr(oe.length) : ze < oe.length && Ke === "prev" ? oe.substr(0, we.length) : G < 0 ? null : oe.substr(0, G) + ce[G] + we.substr(G + 1);
            })(W, J, y[ue], T[ue], b, B);
            se === null && ae === null ? E = ue + 1 : (ae === null || 0 < b(ae, se)) && (ae = se);
          }
          F(ae !== null ? function() {
            A.continue(ae + I);
          } : U);
        }
        return !1;
      }), R;
    }
    function mn(t, a, i, d) {
      return { type: 2, lower: t, upper: a, lowerOpen: i, upperOpen: d };
    }
    function Ka(t) {
      return { type: 1, lower: t, upper: t };
    }
    Object.defineProperty(st.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), st.prototype.between = function(t, a, i, d) {
      i = i !== !1, d = d === !0;
      try {
        return 0 < this._cmp(t, a) || this._cmp(t, a) === 0 && (i || d) && (!i || !d) ? nn(this) : new this.Collection(this, function() {
          return mn(t, a, !i, !d);
        });
      } catch {
        return nt(this, gn);
      }
    }, st.prototype.equals = function(t) {
      return t == null ? nt(this, gn) : new this.Collection(this, function() {
        return Ka(t);
      });
    }, st.prototype.above = function(t) {
      return t == null ? nt(this, gn) : new this.Collection(this, function() {
        return mn(t, void 0, !0);
      });
    }, st.prototype.aboveOrEqual = function(t) {
      return t == null ? nt(this, gn) : new this.Collection(this, function() {
        return mn(t, void 0, !1);
      });
    }, st.prototype.below = function(t) {
      return t == null ? nt(this, gn) : new this.Collection(this, function() {
        return mn(void 0, t, !1, !0);
      });
    }, st.prototype.belowOrEqual = function(t) {
      return t == null ? nt(this, gn) : new this.Collection(this, function() {
        return mn(void 0, t);
      });
    }, st.prototype.startsWith = function(t) {
      return typeof t != "string" ? nt(this, Kr) : this.between(t, t + _n, !0, !0);
    }, st.prototype.startsWithIgnoreCase = function(t) {
      return t === "" ? this.startsWith(t) : Sa(this, function(a, i) {
        return a.indexOf(i[0]) === 0;
      }, [t], _n);
    }, st.prototype.equalsIgnoreCase = function(t) {
      return Sa(this, function(a, i) {
        return a === i[0];
      }, [t], "");
    }, st.prototype.anyOfIgnoreCase = function() {
      var t = Re.apply(Tt, arguments);
      return t.length === 0 ? nn(this) : Sa(this, function(a, i) {
        return i.indexOf(a) !== -1;
      }, t, "");
    }, st.prototype.startsWithAnyOfIgnoreCase = function() {
      var t = Re.apply(Tt, arguments);
      return t.length === 0 ? nn(this) : Sa(this, function(a, i) {
        return i.some(function(d) {
          return a.indexOf(d) === 0;
        });
      }, t, _n);
    }, st.prototype.anyOf = function() {
      var t, a, i = this, d = Re.apply(Tt, arguments), f = this._cmp;
      try {
        d.sort(f);
      } catch {
        return nt(this, gn);
      }
      return d.length === 0 ? nn(this) : ((t = new this.Collection(this, function() {
        return mn(d[0], d[d.length - 1]);
      }))._ondirectionchange = function(g) {
        f = g === "next" ? i._ascending : i._descending, d.sort(f);
      }, a = 0, t._addAlgorithm(function(g, b, y) {
        for (var T = g.key; 0 < f(T, d[a]); ) if (++a === d.length) return b(y), !1;
        return f(T, d[a]) === 0 || (b(function() {
          g.continue(d[a]);
        }), !1);
      }), t);
    }, st.prototype.notEqual = function(t) {
      return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, st.prototype.noneOf = function() {
      var t = Re.apply(Tt, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return nt(this, gn);
      }
      var a = t.reduce(function(i, d) {
        return i ? i.concat([[i[i.length - 1][1], d]]) : [[-1 / 0, d]];
      }, null);
      return a.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
    }, st.prototype.inAnyRange = function(t, U) {
      var i = this, d = this._cmp, f = this._ascending, g = this._descending, b = this._min, y = this._max;
      if (t.length === 0) return nn(this);
      if (!t.every(function(W) {
        return W[0] !== void 0 && W[1] !== void 0 && f(W[0], W[1]) <= 0;
      })) return nt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ye.InvalidArgument);
      var T = !U || U.includeLowers !== !1, B = U && U.includeUppers === !0, I, x = f;
      function D(W, J) {
        return x(W[0], J[0]);
      }
      try {
        (I = t.reduce(function(W, J) {
          for (var ae = 0, ue = W.length; ae < ue; ++ae) {
            var se = W[ae];
            if (d(J[0], se[1]) < 0 && 0 < d(J[1], se[0])) {
              se[0] = b(se[0], J[0]), se[1] = y(se[1], J[1]);
              break;
            }
          }
          return ae === ue && W.push(J), W;
        }, [])).sort(D);
      } catch {
        return nt(this, gn);
      }
      var R = 0, E = B ? function(W) {
        return 0 < f(W, I[R][1]);
      } : function(W) {
        return 0 <= f(W, I[R][1]);
      }, A = T ? function(W) {
        return 0 < g(W, I[R][0]);
      } : function(W) {
        return 0 <= g(W, I[R][0]);
      }, F = E, U = new this.Collection(this, function() {
        return mn(I[0][0], I[I.length - 1][1], !T, !B);
      });
      return U._ondirectionchange = function(W) {
        x = W === "next" ? (F = E, f) : (F = A, g), I.sort(D);
      }, U._addAlgorithm(function(W, J, ae) {
        for (var ue, se = W.key; F(se); ) if (++R === I.length) return J(ae), !1;
        return !E(ue = se) && !A(ue) || (i._cmp(se, I[R][1]) === 0 || i._cmp(se, I[R][0]) === 0 || J(function() {
          x === f ? W.continue(I[R][0]) : W.continue(I[R][1]);
        }), !1);
      }), U;
    }, st.prototype.startsWithAnyOf = function() {
      var t = Re.apply(Tt, arguments);
      return t.every(function(a) {
        return typeof a == "string";
      }) ? t.length === 0 ? nn(this) : this.inAnyRange(t.map(function(a) {
        return [a, a + _n];
      })) : nt(this, "startsWithAnyOf() only works with strings");
    };
    var Nn = st;
    function st() {
    }
    function Ct(t) {
      return it(function(a) {
        return Zt(a), t(a.target.error), !1;
      });
    }
    function Zt(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
    }
    var wn = "storagemutated", an = "x-storagemutated-1", gt = ba(null, wn), Cn = (rn.prototype._lock = function() {
      return ee(!xe.global), ++this._reculock, this._reculock !== 1 || xe.global || (xe.lockOwnerFor = this), this;
    }, rn.prototype._unlock = function() {
      if (ee(!xe.global), --this._reculock == 0) for (xe.global || (xe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var t = this._blockedFuncs.shift();
        try {
          xn(t[1], t[0]);
        } catch {
        }
      }
      return this;
    }, rn.prototype._locked = function() {
      return this._reculock && xe.lockOwnerFor !== this;
    }, rn.prototype.create = function(t) {
      var a = this;
      if (this.mode) {
        var i = this.db.idbdb, d = this.db._state.dbOpenError;
        if (ee(!this.idbtrans), !t && !i) switch (d && d.name) {
          case "DatabaseClosedError":
            throw new ye.DatabaseClosed(d);
          case "MissingAPIError":
            throw new ye.MissingAPI(d.message, d);
          default:
            throw new ye.OpenFailed(d);
        }
        if (!this.active) throw new ye.TransactionInactive();
        ee(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = it(function(f) {
          Zt(f), a._reject(t.error);
        }), t.onabort = it(function(f) {
          Zt(f), a.active && a._reject(new ye.Abort(t.error)), a.active = !1, a.on("abort").fire(f);
        }), t.oncomplete = it(function() {
          a.active = !1, a._resolve(), "mutatedParts" in t && gt.storagemutated.fire(t.mutatedParts);
        });
      }
      return this;
    }, rn.prototype._promise = function(t, a, i) {
      var d, f = this;
      return t === "readwrite" && this.mode !== "readwrite" ? Pt(new ye.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new ge(function(g, b) {
        f._blockedFuncs.push([function() {
          f._promise(t, a, i).then(g, b);
        }, xe]);
      }) : i ? Pn(function() {
        var g = new ge(function(b, y) {
          f._lock();
          var T = a(b, y, f);
          T && T.then && T.then(b, y);
        });
        return g.finally(function() {
          return f._unlock();
        }), g._lib = !0, g;
      }) : ((d = new ge(function(g, b) {
        var y = a(g, b, f);
        y && y.then && y.then(g, b);
      }))._lib = !0, d) : Pt(new ye.TransactionInactive());
    }, rn.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, rn.prototype.waitFor = function(t) {
      var a, i = this._root(), d = ge.resolve(t), f = (i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
        return d;
      }) : (i._waitingFor = d, i._waitingQueue = [], a = i.idbtrans.objectStore(i.storeNames[0]), function g() {
        for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
        i._waitingFor && (a.get(-1 / 0).onsuccess = g);
      }()), i._waitingFor);
      return new ge(function(g, b) {
        d.then(function(y) {
          return i._waitingQueue.push(it(g.bind(null, y)));
        }, function(y) {
          return i._waitingQueue.push(it(b.bind(null, y)));
        }).finally(function() {
          i._waitingFor === f && (i._waitingFor = null);
        });
      });
    }, rn.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ye.Abort()));
    }, rn.prototype.table = function(t) {
      var a = this._memoizedTables || (this._memoizedTables = {});
      if (Y(a, t)) return a[t];
      var i = this.schema[t];
      if (i) return (i = new this.db.Table(t, i, this)).core = this.db.core.table(t), a[t] = i;
      throw new ye.NotFound("Table " + t + " not part of transaction");
    }, rn);
    function rn() {
    }
    function ct(t, a, i, d, f, g, b, y) {
      return { name: t, keyPath: a, unique: i, multi: d, auto: f, compound: g, src: (i && !b ? "&" : "") + (d ? "*" : "") + (f ? "++" : "") + Sr(a), type: y };
    }
    function Sr(t) {
      return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
    }
    function Pa(t, a, i) {
      return { name: t, primKey: a, indexes: i, mappedClass: null, idxByName: (d = function(f) {
        return [f.name, f];
      }, i.reduce(function(f, g, b) {
        return g = d(g, b), g && (f[g[0]] = g[1]), f;
      }, {})) };
      var d;
    }
    var xa = function(t) {
      try {
        return t.only([[]]), xa = function() {
          return [[]];
        }, [[]];
      } catch {
        return xa = function() {
          return _n;
        }, _n;
      }
    };
    function Mn(t) {
      return t == null ? function() {
      } : typeof t == "string" ? (a = t).split(".").length === 1 ? function(i) {
        return i[a];
      } : function(i) {
        return re(i, a);
      } : function(i) {
        return re(i, t);
      };
      var a;
    }
    function Ca(t) {
      return [].slice.call(t);
    }
    var Hr = 0;
    function Fn(t) {
      return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
    }
    function Gr(t, a, T) {
      function d(E) {
        if (E.type === 3) return null;
        if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var x = E.lower, D = E.upper, R = E.lowerOpen, E = E.upperOpen;
        return x === void 0 ? D === void 0 ? null : a.upperBound(D, !!E) : D === void 0 ? a.lowerBound(x, !!R) : a.bound(x, D, !!R, !!E);
      }
      function f(I) {
        var x, D = I.name;
        return { name: D, schema: I, mutate: function(R) {
          var E = R.trans, A = R.type, F = R.keys, U = R.values, W = R.range;
          return new Promise(function(J, ae) {
            J = it(J);
            var ue = E.objectStore(D), se = ue.keyPath == null, oe = A === "put" || A === "add";
            if (!oe && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
            var be, we = (F || U || { length: 1 }).length;
            if (F && U && F.length !== U.length) throw new Error("Given keys array must have same length as given values array.");
            if (we === 0) return J({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function ce(mt) {
              ++ze, Zt(mt);
            }
            var ve = [], Ke = [], ze = 0;
            if (A === "deleteRange") {
              if (W.type === 4) return J({ numFailures: ze, failures: Ke, results: [], lastResult: void 0 });
              W.type === 3 ? ve.push(be = ue.clear()) : ve.push(be = ue.delete(d(W)));
            } else {
              var se = oe ? se ? [U, F] : [U, null] : [F, null], G = se[0], Ve = se[1];
              if (oe) for (var ht = 0; ht < we; ++ht) ve.push(be = Ve && Ve[ht] !== void 0 ? ue[A](G[ht], Ve[ht]) : ue[A](G[ht])), be.onerror = ce;
              else for (ht = 0; ht < we; ++ht) ve.push(be = ue[A](G[ht])), be.onerror = ce;
            }
            function Ht(mt) {
              mt = mt.target.result, ve.forEach(function(vn, Ra) {
                return vn.error != null && (Ke[Ra] = vn.error);
              }), J({ numFailures: ze, failures: Ke, results: A === "delete" ? F : ve.map(function(vn) {
                return vn.result;
              }), lastResult: mt });
            }
            be.onerror = function(mt) {
              ce(mt), Ht(mt);
            }, be.onsuccess = Ht;
          });
        }, getMany: function(R) {
          var E = R.trans, A = R.keys;
          return new Promise(function(F, U) {
            F = it(F);
            for (var W, J = E.objectStore(D), ae = A.length, ue = new Array(ae), se = 0, oe = 0, be = function(ve) {
              ve = ve.target, ue[ve._pos] = ve.result, ++oe === se && F(ue);
            }, we = Ct(U), ce = 0; ce < ae; ++ce) A[ce] != null && ((W = J.get(A[ce]))._pos = ce, W.onsuccess = be, W.onerror = we, ++se);
            se === 0 && F(ue);
          });
        }, get: function(R) {
          var E = R.trans, A = R.key;
          return new Promise(function(F, U) {
            F = it(F);
            var W = E.objectStore(D).get(A);
            W.onsuccess = function(J) {
              return F(J.target.result);
            }, W.onerror = Ct(U);
          });
        }, query: (x = y, function(R) {
          return new Promise(function(E, A) {
            E = it(E);
            var F, U, W, oe = R.trans, J = R.values, ae = R.limit, se = R.query, ue = ae === 1 / 0 ? void 0 : ae, be = se.index, se = se.range, oe = oe.objectStore(D), oe = be.isPrimaryKey ? oe : oe.index(be.name), be = d(se);
            if (ae === 0) return E({ result: [] });
            x ? ((se = J ? oe.getAll(be, ue) : oe.getAllKeys(be, ue)).onsuccess = function(we) {
              return E({ result: we.target.result });
            }, se.onerror = Ct(A)) : (F = 0, U = !J && "openKeyCursor" in oe ? oe.openKeyCursor(be) : oe.openCursor(be), W = [], U.onsuccess = function(we) {
              var ce = U.result;
              return !ce || (W.push(J ? ce.value : ce.primaryKey), ++F === ae) ? E({ result: W }) : void ce.continue();
            }, U.onerror = Ct(A));
          });
        }), openCursor: function(R) {
          var E = R.trans, A = R.values, F = R.query, U = R.reverse, W = R.unique;
          return new Promise(function(J, ae) {
            J = it(J);
            var oe = F.index, ue = F.range, se = E.objectStore(D), se = oe.isPrimaryKey ? se : se.index(oe.name), oe = U ? W ? "prevunique" : "prev" : W ? "nextunique" : "next", be = !A && "openKeyCursor" in se ? se.openKeyCursor(d(ue), oe) : se.openCursor(d(ue), oe);
            be.onerror = Ct(ae), be.onsuccess = it(function(we) {
              var ce, ve, Ke, ze, G = be.result;
              G ? (G.___id = ++Hr, G.done = !1, ce = G.continue.bind(G), ve = (ve = G.continuePrimaryKey) && ve.bind(G), Ke = G.advance.bind(G), ze = function() {
                throw new Error("Cursor not stopped");
              }, G.trans = E, G.stop = G.continue = G.continuePrimaryKey = G.advance = function() {
                throw new Error("Cursor not started");
              }, G.fail = it(ae), G.next = function() {
                var Ve = this, ht = 1;
                return this.start(function() {
                  return ht-- ? Ve.continue() : Ve.stop();
                }).then(function() {
                  return Ve;
                });
              }, G.start = function(Ve) {
                function ht() {
                  if (be.result) try {
                    Ve();
                  } catch (mt) {
                    G.fail(mt);
                  }
                  else G.done = !0, G.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, G.stop();
                }
                var Ht = new Promise(function(mt, vn) {
                  mt = it(mt), be.onerror = Ct(vn), G.fail = vn, G.stop = function(Ra) {
                    G.stop = G.continue = G.continuePrimaryKey = G.advance = ze, mt(Ra);
                  };
                });
                return be.onsuccess = it(function(mt) {
                  be.onsuccess = ht, ht();
                }), G.continue = ce, G.continuePrimaryKey = ve, G.advance = Ke, ht(), Ht;
              }, J(G)) : J(null);
            }, ae);
          });
        }, count: function(R) {
          var E = R.query, A = R.trans, F = E.index, U = E.range;
          return new Promise(function(W, J) {
            var ae = A.objectStore(D), ae = F.isPrimaryKey ? ae : ae.index(F.name), ue = d(U), ue = ue ? ae.count(ue) : ae.count();
            ue.onsuccess = it(function(se) {
              return W(se.target.result);
            }), ue.onerror = Ct(J);
          });
        } };
      }
      g = T, b = Ca((T = t).objectStoreNames);
      var g, T = { schema: { name: T.name, tables: b.map(function(I) {
        return g.objectStore(I);
      }).map(function(I) {
        var x = I.keyPath, D = I.autoIncrement, E = P(x), R = {}, E = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: x == null, compound: E, keyPath: x, autoIncrement: D, unique: !0, extractKey: Mn(x) }, indexes: Ca(I.indexNames).map(function(A) {
          return I.index(A);
        }).map(function(W) {
          var J = W.name, F = W.unique, U = W.multiEntry, W = W.keyPath, J = { name: J, compound: P(W), keyPath: W, unique: F, multiEntry: U, extractKey: Mn(W) };
          return R[Fn(W)] = J;
        }), getIndexByKeyPath: function(A) {
          return R[Fn(A)];
        } };
        return R[":id"] = E.primaryKey, x != null && (R[Fn(x)] = E.primaryKey), E;
      }) }, hasGetAll: 0 < b.length && "getAll" in g.objectStore(b[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }, b = T.schema, y = T.hasGetAll, T = b.tables.map(f), B = {};
      return T.forEach(function(I) {
        return B[I.name] = I;
      }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(I) {
        if (B[I]) return B[I];
        throw new Error("Table '".concat(I, "' not found"));
      }, MIN_KEY: -1 / 0, MAX_KEY: xa(a), schema: b };
    }
    function zr(t, a, i, d) {
      return i = i.IDBKeyRange, a = Gr(a, i, d), { dbcore: t.dbcore.reduce(function(f, g) {
        return g = g.create, p(p({}, f), g(f));
      }, a) };
    }
    function _t(t, a) {
      var i = a.db, i = zr(t._middlewares, i, t._deps, a);
      t.core = i.dbcore, t.tables.forEach(function(d) {
        var f = d.name;
        t.core.schema.tables.some(function(g) {
          return g.name === f;
        }) && (d.core = t.core.table(f), t[f] instanceof t.Table) && (t[f].core = d.core);
      });
    }
    function Zn(t, a, i, d) {
      i.forEach(function(f) {
        var g = d[f];
        a.forEach(function(b) {
          var y = function T(B, I) {
            return H(B, I) || (B = L(B)) && T(B, I);
          }(b, f);
          (!y || "value" in y && y.value === void 0) && (b === t.Transaction.prototype || b instanceof t.Transaction ? he(b, f, { get: function() {
            return this.table(f);
          }, set: function(T) {
            O(this, f, { value: T, writable: !0, configurable: !0, enumerable: !0 });
          } }) : b[f] = new t.Table(f, g));
        });
      });
    }
    function Ma(t, a) {
      a.forEach(function(i) {
        for (var d in i) i[d] instanceof t.Table && delete i[d];
      });
    }
    function Pr(t, a) {
      return t._cfg.version - a._cfg.version;
    }
    function Yn(t, a, i, d) {
      var f = t._dbSchema, g = (i.objectStoreNames.contains("$meta") && !f.$meta && (f.$meta = Pa("$meta", Ga("")[0], []), t._storeNames.push("$meta")), t._createTransaction("readwrite", t._storeNames, f)), b = (g.create(i), g._completion.catch(d), g._reject.bind(g)), y = xe.transless || xe;
      Pn(function() {
        if (xe.trans = g, xe.transless = y, a !== 0) return _t(t, i), B = a, ((T = g).storeNames.includes("$meta") ? T.table("$meta").get("version").then(function(I) {
          return I ?? B;
        }) : ge.resolve(B)).then(function(F) {
          var x = t, D = F, R = g, E = i, A = [], F = x._versions, U = x._dbSchema = Ia(0, x.idbdb, E);
          return (F = F.filter(function(W) {
            return W._cfg.version >= D;
          })).length === 0 ? ge.resolve() : (F.forEach(function(W) {
            A.push(function() {
              var J, ae, ue, se = U, oe = W._cfg.dbschema, be = (Ha(x, se, E), Ha(x, oe, E), U = x._dbSchema = oe, ja(se, oe)), we = (be.add.forEach(function(ce) {
                Et(E, ce[0], ce[1].primKey, ce[1].indexes);
              }), be.change.forEach(function(ce) {
                if (ce.recreate) throw new ye.Upgrade("Not yet support for changing primary key");
                var ve = E.objectStore(ce.name);
                ce.add.forEach(function(Ke) {
                  return Qn(ve, Ke);
                }), ce.change.forEach(function(Ke) {
                  ve.deleteIndex(Ke.name), Qn(ve, Ke);
                }), ce.del.forEach(function(Ke) {
                  return ve.deleteIndex(Ke);
                });
              }), W._cfg.contentUpgrade);
              if (we && W._cfg.version > D) return _t(x, E), R._memoizedTables = {}, J = rt(oe), be.del.forEach(function(ce) {
                J[ce] = se[ce];
              }), Ma(x, [x.Transaction.prototype]), Zn(x, [x.Transaction.prototype], k(J), J), R.schema = J, (ae = zt(we)) && te(), oe = ge.follow(function() {
                var ce;
                (ue = we(R)) && ae && (ce = fn.bind(null, null), ue.then(ce, ce));
              }), ue && typeof ue.then == "function" ? ge.resolve(ue) : oe.then(function() {
                return ue;
              });
            }), A.push(function(J) {
              var ae, ue, se = W._cfg.dbschema;
              ae = se, ue = J, [].slice.call(ue.db.objectStoreNames).forEach(function(oe) {
                return ae[oe] == null && ue.db.deleteObjectStore(oe);
              }), Ma(x, [x.Transaction.prototype]), Zn(x, [x.Transaction.prototype], x._storeNames, x._dbSchema), R.schema = x._dbSchema;
            }), A.push(function(J) {
              x.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(x.idbdb.version / 10) === W._cfg.version ? (x.idbdb.deleteObjectStore("$meta"), delete x._dbSchema.$meta, x._storeNames = x._storeNames.filter(function(ae) {
                return ae !== "$meta";
              })) : J.objectStore("$meta").put(W._cfg.version, "version"));
            });
          }), function W() {
            return A.length ? ge.resolve(A.shift()(R.idbtrans)).then(W) : ge.resolve();
          }().then(function() {
            xr(U, E);
          }));
        }).catch(b);
        var T, B;
        k(f).forEach(function(I) {
          Et(i, I, f[I].primKey, f[I].indexes);
        }), _t(t, i), ge.follow(function() {
          return t.on.populate.fire(g);
        }).catch(b);
      });
    }
    function ko(t, a) {
      xr(t._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
      var i = Ia(0, t.idbdb, a);
      Ha(t, t._dbSchema, a);
      for (var d = 0, f = ja(i, t._dbSchema).change; d < f.length; d++) {
        var g = ((b) => {
          if (b.change.length || b.recreate) return console.warn("Unable to patch indexes of table ".concat(b.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var y = a.objectStore(b.name);
          b.add.forEach(function(T) {
            vt && console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name, ".").concat(T.src)), Qn(y, T);
          });
        })(f[d]);
        if (typeof g == "object") return g.value;
      }
    }
    function ja(t, a) {
      var i, d = { del: [], add: [], change: [] };
      for (i in t) a[i] || d.del.push(i);
      for (i in a) {
        var f = t[i], g = a[i];
        if (f) {
          var b = { name: i, def: g, recreate: !1, del: [], add: [], change: [] };
          if ("" + (f.primKey.keyPath || "") != "" + (g.primKey.keyPath || "") || f.primKey.auto !== g.primKey.auto) b.recreate = !0, d.change.push(b);
          else {
            var y = f.idxByName, T = g.idxByName, B = void 0;
            for (B in y) T[B] || b.del.push(B);
            for (B in T) {
              var I = y[B], x = T[B];
              I ? I.src !== x.src && b.change.push(x) : b.add.push(x);
            }
            (0 < b.del.length || 0 < b.add.length || 0 < b.change.length) && d.change.push(b);
          }
        } else d.add.push([i, g]);
      }
      return d;
    }
    function Et(t, a, i, d) {
      var f = t.db.createObjectStore(a, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
      d.forEach(function(g) {
        return Qn(f, g);
      });
    }
    function xr(t, a) {
      k(t).forEach(function(i) {
        a.db.objectStoreNames.contains(i) || (vt && console.debug("Dexie: Creating missing table", i), Et(a, i, t[i].primKey, t[i].indexes));
      });
    }
    function Qn(t, a) {
      t.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
    }
    function Ia(t, a, i) {
      var d = {};
      return Z(a.objectStoreNames, 0).forEach(function(f) {
        for (var g = i.objectStore(f), b = ct(Sr(B = g.keyPath), B || "", !0, !1, !!g.autoIncrement, B && typeof B != "string", !0), y = [], T = 0; T < g.indexNames.length; ++T) {
          var I = g.index(g.indexNames[T]), B = I.keyPath, I = ct(I.name, B, !!I.unique, !!I.multiEntry, !1, B && typeof B != "string", !1);
          y.push(I);
        }
        d[f] = Pa(f, b, y);
      }), d;
    }
    function Ha(t, a, i) {
      for (var d = i.db.objectStoreNames, f = 0; f < d.length; ++f) {
        var g = d[f], b = i.objectStore(g);
        t._hasGetAll = "getAll" in b;
        for (var y = 0; y < b.indexNames.length; ++y) {
          var T, B = b.indexNames[y], I = b.index(B).keyPath, I = typeof I == "string" ? I : "[" + Z(I).join("+") + "]";
          a[g] && (T = a[g].idxByName[I]) && (T.name = B, delete a[g].idxByName[I], a[g].idxByName[B] = T);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
    }
    function Ga(t) {
      return t.split(",").map(function(a, i) {
        var f = a.split(":"), d = (d = f[1]) == null ? void 0 : d.trim(), f = (a = f[0].trim()).replace(/([&*]|\+\+)/g, ""), g = /^\[/.test(f) ? f.match(/^\[(.*)\]$/)[1].split("+") : f;
        return ct(f, g || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), P(g), i === 0, d);
      });
    }
    on.prototype._createTableSchema = Pa, on.prototype._parseIndexSyntax = Ga, on.prototype._parseStoresSpec = function(t, a) {
      var i = this;
      k(t).forEach(function(d) {
        if (t[d] !== null) {
          var f = i._parseIndexSyntax(t[d]), g = f.shift();
          if (!g) throw new ye.Schema("Invalid schema for table " + d + ": " + t[d]);
          if (g.unique = !0, g.multi) throw new ye.Schema("Primary key cannot be multiEntry*");
          f.forEach(function(b) {
            if (b.auto) throw new ye.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!b.keyPath) throw new ye.Schema("Index must have a name and cannot be an empty string");
          }), g = i._createTableSchema(d, g, f), a[d] = g;
        }
      });
    }, on.prototype.stores = function(i) {
      var a = this.db, i = (this._cfg.storesSource = this._cfg.storesSource ? M(this._cfg.storesSource, i) : i, a._versions), d = {}, f = {};
      return i.forEach(function(g) {
        M(d, g._cfg.storesSource), f = g._cfg.dbschema = {}, g._parseStoresSpec(d, f);
      }), a._dbSchema = f, Ma(a, [a._allTables, a, a.Transaction.prototype]), Zn(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], k(f), f), a._storeNames = k(f), this;
    }, on.prototype.upgrade = function(t) {
      return this._cfg.contentUpgrade = qe(this._cfg.contentUpgrade || C, t), this;
    };
    var So = on;
    function on() {
    }
    function za(t, a) {
      var i = t._dbNamesDB;
      return i || (i = t._dbNamesDB = new bn(ga, { addons: [], indexedDB: t, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
    }
    function qa(t) {
      return t && typeof t.databases == "function";
    }
    function Lt(t) {
      return Pn(function() {
        return xe.letThrough = !0, t();
      });
    }
    function In(t) {
      return !("from" in t);
    }
    var Rt = function(t, a) {
      var i;
      if (!this) return i = new Rt(), t && "d" in t && M(i, t), i;
      M(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? a : t } : { d: 0 });
    };
    function Xn(t, a, i) {
      var d = le(a, i);
      if (!isNaN(d)) {
        if (0 < d) throw RangeError();
        if (In(t)) return M(t, { from: a, to: i, d: 1 });
        var d = t.l, f = t.r;
        if (le(i, t.from) < 0) return d ? Xn(d, a, i) : t.l = { from: a, to: i, d: 1, l: null, r: null }, Cr(t);
        if (0 < le(a, t.to)) return f ? Xn(f, a, i) : t.r = { from: a, to: i, d: 1, l: null, r: null }, Cr(t);
        le(a, t.from) < 0 && (t.from = a, t.l = null, t.d = f ? f.d + 1 : 1), 0 < le(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), a = !t.r, d && !t.l && ea(t, d), f && a && ea(t, f);
      }
    }
    function ea(t, a) {
      In(a) || function i(d, f) {
        var g = f.from, b = f.l, y = f.r;
        Xn(d, g, f.to), b && i(d, b), y && i(d, y);
      }(t, a);
    }
    function qr(t, a) {
      var i = ta(a), d = i.next();
      if (!d.done) for (var f = d.value, g = ta(t), b = g.next(f.from), y = b.value; !d.done && !b.done; ) {
        if (le(y.from, f.to) <= 0 && 0 <= le(y.to, f.from)) return !0;
        le(f.from, y.from) < 0 ? f = (d = i.next(y.from)).value : y = (b = g.next(f.from)).value;
      }
      return !1;
    }
    function ta(t) {
      var a = In(t) ? null : { s: 0, n: t };
      return { next: function(i) {
        for (var d = 0 < arguments.length; a; ) switch (a.s) {
          case 0:
            if (a.s = 1, d) for (; a.n.l && le(i, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
            else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
          case 1:
            if (a.s = 2, !d || le(i, a.n.to) <= 0) return { value: a.n, done: !1 };
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
    function Cr(t) {
      var a, i, d, f = (((f = t.r) == null ? void 0 : f.d) || 0) - (((f = t.l) == null ? void 0 : f.d) || 0), f = 1 < f ? "r" : f < -1 ? "l" : "";
      f && (a = f == "r" ? "l" : "r", i = p({}, t), d = t[f], t.from = d.from, t.to = d.to, t[f] = d[f], i[f] = d[a], (t[a] = i).d = lt(i)), t.d = lt(t);
    }
    function lt(i) {
      var a = i.r, i = i.l;
      return (a ? i ? Math.max(a.d, i.d) : a.d : i ? i.d : 0) + 1;
    }
    function na(t, a) {
      return k(a).forEach(function(i) {
        t[i] ? ea(t[i], a[i]) : t[i] = function d(f) {
          var g, b, y = {};
          for (g in f) Y(f, g) && (b = f[g], y[g] = !b || typeof b != "object" || pt.has(b.constructor) ? b : d(b));
          return y;
        }(a[i]);
      }), t;
    }
    function Aa(t, a) {
      return t.all || a.all || Object.keys(t).some(function(i) {
        return a[i] && qr(a[i], t[i]);
      });
    }
    V(Rt.prototype, ((_e = { add: function(t) {
      return ea(this, t), this;
    }, addKey: function(t) {
      return Xn(this, t, t), this;
    }, addKeys: function(t) {
      var a = this;
      return t.forEach(function(i) {
        return Xn(a, i, i);
      }), this;
    }, hasKey: function(t) {
      var a = ta(this).next(t).value;
      return a && le(a.from, t) <= 0 && 0 <= le(a.to, t);
    } })[Xe] = function() {
      return ta(this);
    }, _e));
    var Yt = {}, yn = {}, An = !1;
    function aa(t) {
      na(yn, t), An || (An = !0, setTimeout(function() {
        An = !1, ut(yn, !(yn = {}));
      }, 0));
    }
    function ut(t, a) {
      a === void 0 && (a = !1);
      var i = /* @__PURE__ */ new Set();
      if (t.all) for (var d = 0, f = Object.values(Yt); d < f.length; d++) ra(y = f[d], t, i, a);
      else for (var g in t) {
        var b, y, g = /^idb\:\/\/(.*)\/(.*)\//.exec(g);
        g && (b = g[1], g = g[2], y = Yt["idb://".concat(b, "/").concat(g)]) && ra(y, t, i, a);
      }
      i.forEach(function(T) {
        return T();
      });
    }
    function ra(t, a, i, d) {
      for (var f = [], g = 0, b = Object.entries(t.queries.query); g < b.length; g++) {
        for (var y = b[g], T = y[0], B = [], I = 0, x = y[1]; I < x.length; I++) {
          var D = x[I];
          Aa(a, D.obsSet) ? D.subscribers.forEach(function(F) {
            return i.add(F);
          }) : d && B.push(D);
        }
        d && f.push([T, B]);
      }
      if (d) for (var R = 0, E = f; R < E.length; R++) {
        var A = E[R], T = A[0], B = A[1];
        t.queries.query[T] = B;
      }
    }
    function Mr(t) {
      var a = t._state, i = t._deps.indexedDB;
      if (a.isBeingOpened || t.idbdb) return a.dbReadyPromise.then(function() {
        return a.dbOpenError ? Pt(a.dbOpenError) : t;
      });
      a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
      var d = a.openCanceller, f = Math.round(10 * t.verno), g = !1;
      function b() {
        if (a.openCanceller !== d) throw new ye.DatabaseClosed("db.open() was cancelled");
      }
      function y() {
        return new ge(function(D, R) {
          if (b(), !i) throw new ye.MissingAPI();
          var E = t.name, A = a.autoSchema || !f ? i.open(E) : i.open(E, f);
          if (!A) throw new ye.MissingAPI();
          A.onerror = Ct(R), A.onblocked = it(t._fireOnBlocked), A.onupgradeneeded = it(function(F) {
            var U;
            I = A.transaction, a.autoSchema && !t._options.allowEmptyDB ? (A.onerror = Zt, I.abort(), A.result.close(), (U = i.deleteDatabase(E)).onsuccess = U.onerror = it(function() {
              R(new ye.NoSuchDatabase("Database ".concat(E, " doesnt exist")));
            })) : (I.onerror = Ct(R), U = F.oldVersion > Math.pow(2, 62) ? 0 : F.oldVersion, x = U < 1, t.idbdb = A.result, g && ko(t, I), Yn(t, U / 10, I, R));
          }, R), A.onsuccess = it(function() {
            I = null;
            var F, U, W, J, ae, ue, se = t.idbdb = A.result, oe = Z(se.objectStoreNames);
            if (0 < oe.length) try {
              var be = se.transaction((ae = oe).length === 1 ? ae[0] : ae, "readonly");
              if (a.autoSchema) ue = se, J = be, (W = t).verno = ue.version / 10, J = W._dbSchema = Ia(0, ue, J), W._storeNames = Z(ue.objectStoreNames, 0), Zn(W, [W._allTables], k(J), J);
              else if (Ha(t, t._dbSchema, be), U = be, ((U = ja(Ia(0, (F = t).idbdb, U), F._dbSchema)).add.length || U.change.some(function(we) {
                return we.add.length || we.change.length;
              })) && !g) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), se.close(), f = se.version + 1, g = !0, D(y());
              _t(t, be);
            } catch {
            }
            Jt.push(t), se.onversionchange = it(function(we) {
              a.vcFired = !0, t.on("versionchange").fire(we);
            }), se.onclose = it(function() {
              t.close({ disableAutoOpen: !1 });
            }), x && (oe = t._deps, ae = E, qa(ue = oe.indexedDB) || ae === ga || za(ue, oe.IDBKeyRange).put({ name: ae }).catch(C)), D();
          }, R);
        }).catch(function(D) {
          switch (D == null ? void 0 : D.name) {
            case "UnknownError":
              if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
              break;
            case "VersionError":
              if (0 < f) return f = 0, y();
          }
          return ge.reject(D);
        });
      }
      var T, B = a.dbReadyResolve, I = null, x = !1;
      return ge.race([d, (typeof navigator > "u" ? ge.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(D) {
        function R() {
          return indexedDB.databases().finally(D);
        }
        T = setInterval(R, 100), R();
      }).finally(function() {
        return clearInterval(T);
      }) : Promise.resolve()).then(y)]).then(function() {
        return b(), a.onReadyBeingFired = [], ge.resolve(Lt(function() {
          return t.on.ready.fire(t.vip);
        })).then(function D() {
          var R;
          if (0 < a.onReadyBeingFired.length) return R = a.onReadyBeingFired.reduce(qe, C), a.onReadyBeingFired = [], ge.resolve(Lt(function() {
            return R(t.vip);
          })).then(D);
        });
      }).finally(function() {
        a.openCanceller === d && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
      }).catch(function(D) {
        a.dbOpenError = D;
        try {
          I && I.abort();
        } catch {
        }
        return d === a.openCanceller && t._close(), Pt(D);
      }).finally(function() {
        a.openComplete = !0, B();
      }).then(function() {
        var D;
        return x && (D = {}, t.tables.forEach(function(R) {
          R.schema.indexes.forEach(function(E) {
            E.name && (D["idb://".concat(t.name, "/").concat(R.name, "/").concat(E.name)] = new Rt(-1 / 0, [[[]]]));
          }), D["idb://".concat(t.name, "/").concat(R.name, "/")] = D["idb://".concat(t.name, "/").concat(R.name, "/:dels")] = new Rt(-1 / 0, [[[]]]);
        }), gt(wn).fire(D), ut(D, !0)), t;
      });
    }
    function Ir(t) {
      function a(g) {
        return t.next(g);
      }
      var i = f(a), d = f(function(g) {
        return t.throw(g);
      });
      function f(g) {
        return function(y) {
          var y = g(y), T = y.value;
          return y.done ? T : T && typeof T.then == "function" ? T.then(i, d) : P(T) ? Promise.all(T).then(i, d) : i(T);
        };
      }
      return f(a)();
    }
    function Ja(t, a, i) {
      for (var d = P(t) ? t.slice() : [t], f = 0; f < i; ++f) d.push(a);
      return d;
    }
    var Jr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
      return p(p({}, t), { table: function(d) {
        var i = t.table(d), d = i.schema, f = {}, g = [];
        function b(D, R, E) {
          var W = Fn(D), A = f[W] = f[W] || [], F = D == null ? 0 : typeof D == "string" ? 1 : D.length, U = 0 < R, W = p(p({}, E), { name: U ? "".concat(W, "(virtual-from:").concat(E.name, ")") : E.name, lowLevelIndex: E, isVirtual: U, keyTail: R, keyLength: F, extractKey: Mn(D), unique: !U && E.unique });
          return A.push(W), W.isPrimaryKey || g.push(W), 1 < F && b(F === 2 ? D[0] : D.slice(0, F - 1), R + 1, E), A.sort(function(J, ae) {
            return J.keyTail - ae.keyTail;
          }), W;
        }
        var y = b(d.primaryKey.keyPath, 0, d.primaryKey);
        f[":id"] = [y];
        for (var T = 0, B = d.indexes; T < B.length; T++) {
          var I = B[T];
          b(I.keyPath, 0, I);
        }
        function x(D) {
          var R, E = D.query.index;
          return E.isVirtual ? p(p({}, D), { query: { index: E.lowLevelIndex, range: (R = D.query.range, E = E.keyTail, { type: R.type === 1 ? 2 : R.type, lower: Ja(R.lower, R.lowerOpen ? t.MAX_KEY : t.MIN_KEY, E), lowerOpen: !0, upper: Ja(R.upper, R.upperOpen ? t.MIN_KEY : t.MAX_KEY, E), upperOpen: !0 }) } }) : D;
        }
        return p(p({}, i), { schema: p(p({}, d), { primaryKey: y, indexes: g, getIndexByKeyPath: function(D) {
          return (D = f[Fn(D)]) && D[0];
        } }), count: function(D) {
          return i.count(x(D));
        }, query: function(D) {
          return i.query(x(D));
        }, openCursor: function(D) {
          var R = D.query.index, E = R.keyTail, A = R.keyLength;
          return R.isVirtual ? i.openCursor(x(D)).then(function(U) {
            return U && F(U);
          }) : i.openCursor(D);
          function F(U) {
            return Object.create(U, { continue: { value: function(W) {
              W != null ? U.continue(Ja(W, D.reverse ? t.MAX_KEY : t.MIN_KEY, E)) : D.unique ? U.continue(U.key.slice(0, A).concat(D.reverse ? t.MIN_KEY : t.MAX_KEY, E)) : U.continue();
            } }, continuePrimaryKey: { value: function(W, J) {
              U.continuePrimaryKey(Ja(W, t.MAX_KEY, E), J);
            } }, primaryKey: { get: function() {
              return U.primaryKey;
            } }, key: { get: function() {
              var W = U.key;
              return A === 1 ? W[0] : W.slice(0, A);
            } }, value: { get: function() {
              return U.value;
            } } });
          }
        } });
      } });
    } };
    function Ar(t, a, i, d) {
      return i = i || {}, d = d || "", k(t).forEach(function(f) {
        var g, b, y;
        Y(a, f) ? (g = t[f], b = a[f], typeof g == "object" && typeof b == "object" && g && b ? (y = Ie(g)) !== Ie(b) ? i[d + f] = a[f] : y === "Object" ? Ar(g, b, i, d + f + ".") : g !== b && (i[d + f] = a[f]) : g !== b && (i[d + f] = a[f])) : i[d + f] = void 0;
      }), k(a).forEach(function(f) {
        Y(t, f) || (i[d + f] = a[f]);
      }), i;
    }
    function Za(t, a) {
      return a.type === "delete" ? a.keys : a.keys || a.values.map(t.extractKey);
    }
    var Po = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
      return p(p({}, t), { table: function(a) {
        var i = t.table(a), d = i.schema.primaryKey;
        return p(p({}, i), { mutate: function(f) {
          var g = xe.trans, b = g.table(a).hook, y = b.deleting, T = b.creating, B = b.updating;
          switch (f.type) {
            case "add":
              if (T.fire === C) break;
              return g._promise("readwrite", function() {
                return I(f);
              }, !0);
            case "put":
              if (T.fire === C && B.fire === C) break;
              return g._promise("readwrite", function() {
                return I(f);
              }, !0);
            case "delete":
              if (y.fire === C) break;
              return g._promise("readwrite", function() {
                return I(f);
              }, !0);
            case "deleteRange":
              if (y.fire === C) break;
              return g._promise("readwrite", function() {
                return function x(D, R, E) {
                  return i.query({ trans: D, values: !1, query: { index: d, range: R }, limit: E }).then(function(A) {
                    var F = A.result;
                    return I({ type: "delete", keys: F, trans: D }).then(function(U) {
                      return 0 < U.numFailures ? Promise.reject(U.failures[0]) : F.length < E ? { failures: [], numFailures: 0, lastResult: void 0 } : x(D, p(p({}, R), { lower: F[F.length - 1], lowerOpen: !0 }), E);
                    });
                  });
                }(f.trans, f.range, 1e4);
              }, !0);
          }
          return i.mutate(f);
          function I(x) {
            var D, R, E, A = xe.trans, F = x.keys || Za(d, x);
            if (F) return (x = x.type === "add" || x.type === "put" ? p(p({}, x), { keys: F }) : p({}, x)).type !== "delete" && (x.values = m([], x.values)), x.keys && (x.keys = m([], x.keys)), D = i, E = F, ((R = x).type === "add" ? Promise.resolve([]) : D.getMany({ trans: R.trans, keys: E, cache: "immutable" })).then(function(U) {
              var W = F.map(function(J, ae) {
                var ue, se, oe, be = U[ae], we = { onerror: null, onsuccess: null };
                return x.type === "delete" ? y.fire.call(we, J, be, A) : x.type === "add" || be === void 0 ? (ue = T.fire.call(we, J, x.values[ae], A), J == null && ue != null && (x.keys[ae] = J = ue, d.outbound || pe(x.values[ae], d.keyPath, J))) : (ue = Ar(be, x.values[ae]), (se = B.fire.call(we, ue, J, be, A)) && (oe = x.values[ae], Object.keys(se).forEach(function(ce) {
                  Y(oe, ce) ? oe[ce] = se[ce] : pe(oe, ce, se[ce]);
                }))), we;
              });
              return i.mutate(x).then(function(J) {
                for (var ae = J.failures, ue = J.results, se = J.numFailures, J = J.lastResult, oe = 0; oe < F.length; ++oe) {
                  var be = (ue || F)[oe], we = W[oe];
                  be == null ? we.onerror && we.onerror(ae[oe]) : we.onsuccess && we.onsuccess(x.type === "put" && U[oe] ? x.values[oe] : be);
                }
                return { failures: ae, results: ue, numFailures: se, lastResult: J };
              }).catch(function(J) {
                return W.forEach(function(ae) {
                  return ae.onerror && ae.onerror(J);
                }), Promise.reject(J);
              });
            });
            throw new Error("Keys missing");
          }
        } });
      } });
    } };
    function Zr(t, a, i) {
      try {
        if (!a || a.keys.length < t.length) return null;
        for (var d = [], f = 0, g = 0; f < a.keys.length && g < t.length; ++f) le(a.keys[f], t[g]) === 0 && (d.push(i ? Qe(a.values[f]) : a.values[f]), ++g);
        return d.length === t.length ? d : null;
      } catch {
        return null;
      }
    }
    var xo = { stack: "dbcore", level: -1, create: function(t) {
      return { table: function(a) {
        var i = t.table(a);
        return p(p({}, i), { getMany: function(d) {
          var f;
          return d.cache ? (f = Zr(d.keys, d.trans._cache, d.cache === "clone")) ? ge.resolve(f) : i.getMany(d).then(function(g) {
            return d.trans._cache = { keys: d.keys, values: d.cache === "clone" ? Qe(g) : g }, g;
          }) : i.getMany(d);
        }, mutate: function(d) {
          return d.type !== "add" && (d.trans._cache = null), i.mutate(d);
        } });
      } };
    } };
    function Ya(t, a) {
      return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
    }
    function Ta(t, a) {
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
    var Ea = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
      var a = t.schema.name, i = new Rt(t.MIN_KEY, t.MAX_KEY);
      return p(p({}, t), { transaction: function(d, f, g) {
        if (xe.subscr && f !== "readonly") throw new ye.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(xe.querier));
        return t.transaction(d, f, g);
      }, table: function(d) {
        function f(F) {
          var A, F = F.query;
          return [A = F.index, new Rt((A = (F = F.range).lower) != null ? A : t.MIN_KEY, (A = F.upper) != null ? A : t.MAX_KEY)];
        }
        var g = t.table(d), b = g.schema, y = b.primaryKey, T = b.indexes, B = y.extractKey, I = y.outbound, x = y.autoIncrement && T.filter(function(E) {
          return E.compound && E.keyPath.includes(y.keyPath);
        }), D = p(p({}, g), { mutate: function(E) {
          function A(ve) {
            return ve = "idb://".concat(a, "/").concat(d, "/").concat(ve), ae[ve] || (ae[ve] = new Rt());
          }
          var F, U, W, J = E.trans, ae = E.mutatedParts || (E.mutatedParts = {}), ue = A(""), se = A(":dels"), oe = E.type, we = E.type === "deleteRange" ? [E.range] : E.type === "delete" ? [E.keys] : E.values.length < 50 ? [Za(y, E).filter(function(ve) {
            return ve;
          }), E.values] : [], be = we[0], we = we[1], ce = E.trans._cache;
          return P(be) ? (ue.addKeys(be), (oe = oe === "delete" || be.length === we.length ? Zr(be, ce) : null) || se.addKeys(be), (oe || we) && (F = A, U = oe, W = we, b.indexes.forEach(function(ve) {
            var Ke = F(ve.name || "");
            function ze(Ve) {
              return Ve != null ? ve.extractKey(Ve) : null;
            }
            function G(Ve) {
              ve.multiEntry && P(Ve) ? Ve.forEach(function(ht) {
                return Ke.addKey(ht);
              }) : Ke.addKey(Ve);
            }
            (U || W).forEach(function(Ve, mt) {
              var Ht = U && ze(U[mt]), mt = W && ze(W[mt]);
              le(Ht, mt) !== 0 && (Ht != null && G(Ht), mt != null) && G(mt);
            });
          }))) : be ? (we = { from: (ce = be.lower) != null ? ce : t.MIN_KEY, to: (oe = be.upper) != null ? oe : t.MAX_KEY }, se.add(we), ue.add(we)) : (ue.add(i), se.add(i), b.indexes.forEach(function(ve) {
            return A(ve.name).add(i);
          })), g.mutate(E).then(function(ve) {
            return !be || E.type !== "add" && E.type !== "put" || (ue.addKeys(ve.results), x && x.forEach(function(Ke) {
              for (var ze = E.values.map(function(Ht) {
                return Ke.extractKey(Ht);
              }), G = Ke.keyPath.findIndex(function(Ht) {
                return Ht === y.keyPath;
              }), Ve = 0, ht = ve.results.length; Ve < ht; ++Ve) ze[Ve][G] = ve.results[Ve];
              A(Ke.name).addKeys(ze);
            })), J.mutatedParts = na(J.mutatedParts || {}, ae), ve;
          });
        } }), R = { get: function(E) {
          return [y, new Rt(E.key)];
        }, getMany: function(E) {
          return [y, new Rt().addKeys(E.keys)];
        }, count: f, query: f, openCursor: f };
        return k(R).forEach(function(E) {
          D[E] = function(A) {
            var F = xe.subscr, U = !!F, W = Ya(xe, g) && Ta(E, A) ? A.obsSet = {} : F;
            if (U) {
              var J, F = function(we) {
                return we = "idb://".concat(a, "/").concat(d, "/").concat(we), W[we] || (W[we] = new Rt());
              }, ae = F(""), ue = F(":dels"), U = R[E](A), se = U[0], U = U[1];
              if ((E === "query" && se.isPrimaryKey && !A.values ? ue : F(se.name || "")).add(U), !se.isPrimaryKey) {
                if (E !== "count") return J = E === "query" && I && A.values && g.query(p(p({}, A), { values: !1 })), g[E].apply(this, arguments).then(function(we) {
                  if (E === "query") {
                    if (I && A.values) return J.then(function(ze) {
                      return ze = ze.result, ae.addKeys(ze), we;
                    });
                    var ce = A.values ? we.result.map(B) : we.result;
                    (A.values ? ae : ue).addKeys(ce);
                  } else {
                    var ve, Ke;
                    if (E === "openCursor") return Ke = A.values, (ve = we) && Object.create(ve, { key: { get: function() {
                      return ue.addKey(ve.primaryKey), ve.key;
                    } }, primaryKey: { get: function() {
                      var ze = ve.primaryKey;
                      return ue.addKey(ze), ze;
                    } }, value: { get: function() {
                      return Ke && ae.addKey(ve.primaryKey), ve.value;
                    } } });
                  }
                  return we;
                });
                ue.add(i);
              }
            }
            return g[E].apply(this, arguments);
          };
        }), D;
      } });
    } };
    function Qa(t, a, i) {
      var d;
      return i.numFailures === 0 ? a : a.type === "deleteRange" || (d = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1, i.numFailures === d) ? null : (d = p({}, a), P(d.keys) && (d.keys = d.keys.filter(function(f, g) {
        return !(g in i.failures);
      })), "values" in d && P(d.values) && (d.values = d.values.filter(function(f, g) {
        return !(g in i.failures);
      })), d);
    }
    function Tr(t, a) {
      return i = t, ((d = a).lower === void 0 || (d.lowerOpen ? 0 < le(i, d.lower) : 0 <= le(i, d.lower))) && (i = t, (d = a).upper === void 0 || (d.upperOpen ? le(i, d.upper) < 0 : le(i, d.upper) <= 0));
      var i, d;
    }
    function oa(t, a, i, d, f, g) {
      var b, y, T, B, I, x;
      return !i || i.length === 0 || (b = a.query.index, y = b.multiEntry, T = a.query.range, B = d.schema.primaryKey.extractKey, I = b.extractKey, x = (b.lowLevelIndex || b).extractKey, (d = i.reduce(function(D, R) {
        var E = D, A = [];
        if (R.type === "add" || R.type === "put") for (var F = new Rt(), U = R.values.length - 1; 0 <= U; --U) {
          var W, J = R.values[U], ae = B(J);
          !F.hasKey(ae) && (W = I(J), y && P(W) ? W.some(function(we) {
            return Tr(we, T);
          }) : Tr(W, T)) && (F.addKey(ae), A.push(J));
        }
        switch (R.type) {
          case "add":
            var ue = new Rt().addKeys(a.values ? D.map(function(ce) {
              return B(ce);
            }) : D), E = D.concat(a.values ? A.filter(function(ce) {
              return ce = B(ce), !ue.hasKey(ce) && (ue.addKey(ce), !0);
            }) : A.map(function(ce) {
              return B(ce);
            }).filter(function(ce) {
              return !ue.hasKey(ce) && (ue.addKey(ce), !0);
            }));
            break;
          case "put":
            var se = new Rt().addKeys(R.values.map(function(ce) {
              return B(ce);
            }));
            E = D.filter(function(ce) {
              return !se.hasKey(a.values ? B(ce) : ce);
            }).concat(a.values ? A : A.map(function(ce) {
              return B(ce);
            }));
            break;
          case "delete":
            var oe = new Rt().addKeys(R.keys);
            E = D.filter(function(ce) {
              return !oe.hasKey(a.values ? B(ce) : ce);
            });
            break;
          case "deleteRange":
            var be = R.range;
            E = D.filter(function(ce) {
              return !Tr(B(ce), be);
            });
        }
        return E;
      }, t)) === t) ? t : (d.sort(function(D, R) {
        return le(x(D), x(R)) || le(B(D), B(R));
      }), a.limit && a.limit < 1 / 0 && (d.length > a.limit ? d.length = a.limit : t.length === a.limit && d.length < a.limit && (f.dirty = !0)), g ? Object.freeze(d) : d);
    }
    function Yr(t, a) {
      return le(t.lower, a.lower) === 0 && le(t.upper, a.upper) === 0 && !!t.lowerOpen == !!a.lowerOpen && !!t.upperOpen == !!a.upperOpen;
    }
    function Qr(t, a) {
      return ((i, d, f, g) => {
        if (i === void 0) return d !== void 0 ? -1 : 0;
        if (d === void 0) return 1;
        if ((i = le(i, d)) === 0) {
          if (f && g) return 0;
          if (f) return 1;
          if (g) return -1;
        }
        return i;
      })(t.lower, a.lower, t.lowerOpen, a.lowerOpen) <= 0 && 0 <= ((i, d, f, g) => {
        if (i === void 0) return d !== void 0 ? 1 : 0;
        if (d === void 0) return -1;
        if ((i = le(i, d)) === 0) {
          if (f && g) return 0;
          if (f) return -1;
          if (g) return 1;
        }
        return i;
      })(t.upper, a.upper, t.upperOpen, a.upperOpen);
    }
    function Er(t, a, i, d) {
      t.subscribers.add(i), d.addEventListener("abort", function() {
        var f, g;
        t.subscribers.delete(i), t.subscribers.size === 0 && (f = t, g = a, setTimeout(function() {
          f.subscribers.size === 0 && Ze(g, f);
        }, 3e3));
      });
    }
    var ia = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
      var a = t.schema.name;
      return p(p({}, t), { transaction: function(i, d, f) {
        var g, b, y = t.transaction(i, d, f);
        return d === "readwrite" && (f = (g = new AbortController()).signal, y.addEventListener("abort", (b = function(T) {
          return function() {
            if (g.abort(), d === "readwrite") {
              for (var B = /* @__PURE__ */ new Set(), I = 0, x = i; I < x.length; I++) {
                var D = x[I], R = Yt["idb://".concat(a, "/").concat(D)];
                if (R) {
                  var E = t.table(D), A = R.optimisticOps.filter(function(ve) {
                    return ve.trans === y;
                  });
                  if (y._explicit && T && y.mutatedParts) for (var F = 0, U = Object.values(R.queries.query); F < U.length; F++) for (var W = 0, J = (se = U[F]).slice(); W < J.length; W++) Aa((oe = J[W]).obsSet, y.mutatedParts) && (Ze(se, oe), oe.subscribers.forEach(function(ve) {
                    return B.add(ve);
                  }));
                  else if (0 < A.length) {
                    R.optimisticOps = R.optimisticOps.filter(function(ve) {
                      return ve.trans !== y;
                    });
                    for (var ae = 0, ue = Object.values(R.queries.query); ae < ue.length; ae++) for (var se, oe, be, we = 0, ce = (se = ue[ae]).slice(); we < ce.length; we++) (oe = ce[we]).res != null && y.mutatedParts && (T && !oe.dirty ? (be = Object.isFrozen(oe.res), be = oa(oe.res, oe.req, A, E, oe, be), oe.dirty ? (Ze(se, oe), oe.subscribers.forEach(function(ve) {
                      return B.add(ve);
                    })) : be !== oe.res && (oe.res = be, oe.promise = ge.resolve({ result: be }))) : (oe.dirty && Ze(se, oe), oe.subscribers.forEach(function(ve) {
                      return B.add(ve);
                    })));
                  }
                }
              }
              B.forEach(function(ve) {
                return ve();
              });
            }
          };
        })(!1), { signal: f }), y.addEventListener("error", b(!1), { signal: f }), y.addEventListener("complete", b(!0), { signal: f })), y;
      }, table: function(i) {
        var d = t.table(i), f = d.schema.primaryKey;
        return p(p({}, d), { mutate: function(g) {
          var b, y = xe.trans;
          return !f.outbound && y.db._options.cache !== "disabled" && !y.explicit && y.idbtrans.mode === "readwrite" && (b = Yt["idb://".concat(a, "/").concat(i)]) ? (y = d.mutate(g), g.type !== "add" && g.type !== "put" || !(50 <= g.values.length || Za(f, g).some(function(T) {
            return T == null;
          })) ? (b.optimisticOps.push(g), g.mutatedParts && aa(g.mutatedParts), y.then(function(T) {
            0 < T.numFailures && (Ze(b.optimisticOps, g), (T = Qa(0, g, T)) && b.optimisticOps.push(T), g.mutatedParts) && aa(g.mutatedParts);
          }), y.catch(function() {
            Ze(b.optimisticOps, g), g.mutatedParts && aa(g.mutatedParts);
          })) : y.then(function(T) {
            var B = Qa(0, p(p({}, g), { values: g.values.map(function(I, x) {
              var D;
              return T.failures[x] ? I : (pe(D = (D = f.keyPath) != null && D.includes(".") ? Qe(I) : p({}, I), f.keyPath, T.results[x]), D);
            }) }), T);
            b.optimisticOps.push(B), queueMicrotask(function() {
              return g.mutatedParts && aa(g.mutatedParts);
            });
          }), y) : d.mutate(g);
        }, query: function(g) {
          var b, y, T, B, I, x, D;
          return Ya(xe, d) && Ta("query", g) ? (b = ((T = xe.trans) == null ? void 0 : T.db._options.cache) === "immutable", y = (T = xe).requery, T = T.signal, x = ((R, E, A, F) => {
            var U = Yt["idb://".concat(R, "/").concat(E)];
            if (!U) return [];
            if (!(R = U.queries[A])) return [null, !1, U, null];
            var W = R[(F.query ? F.query.index.name : null) || ""];
            if (!W) return [null, !1, U, null];
            switch (A) {
              case "query":
                var J = W.find(function(ae) {
                  return ae.req.limit === F.limit && ae.req.values === F.values && Yr(ae.req.query.range, F.query.range);
                });
                return J ? [J, !0, U, W] : [W.find(function(ae) {
                  return ("limit" in ae.req ? ae.req.limit : 1 / 0) >= F.limit && (!F.values || ae.req.values) && Qr(ae.req.query.range, F.query.range);
                }), !1, U, W];
              case "count":
                return J = W.find(function(ae) {
                  return Yr(ae.req.query.range, F.query.range);
                }), [J, !!J, U, W];
            }
          })(a, i, "query", g), D = x[0], B = x[2], I = x[3], D && x[1] ? D.obsSet = g.obsSet : (x = d.query(g).then(function(R) {
            var E = R.result;
            if (D && (D.res = E), b) {
              for (var A = 0, F = E.length; A < F; ++A) Object.freeze(E[A]);
              Object.freeze(E);
            } else R.result = Qe(E);
            return R;
          }).catch(function(R) {
            return I && D && Ze(I, D), Promise.reject(R);
          }), D = { obsSet: g.obsSet, promise: x, subscribers: /* @__PURE__ */ new Set(), type: "query", req: g, dirty: !1 }, I ? I.push(D) : (I = [D], (B = B || (Yt["idb://".concat(a, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[g.query.index.name || ""] = I)), Er(D, I, y, T), D.promise.then(function(R) {
            return { result: oa(R.result, g, B == null ? void 0 : B.optimisticOps, d, D, b) };
          })) : d.query(g);
        } });
      } });
    } };
    function sa(t, a) {
      return new Proxy(t, { get: function(i, d, f) {
        return d === "db" ? a : Reflect.get(i, d, f);
      } });
    }
    yt.prototype.version = function(t) {
      if (isNaN(t) || t < 0.1) throw new ye.Type("Given version is not a positive number");
      if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new ye.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, t);
      var a = this._versions, i = a.filter(function(d) {
        return d._cfg.version === t;
      })[0];
      return i || (i = new this.Version(t), a.push(i), a.sort(Pr), i.stores({}), this._state.autoSchema = !1), i;
    }, yt.prototype._whenReady = function(t) {
      var a = this;
      return this.idbdb && (this._state.openComplete || xe.letThrough || this._vip) ? t() : new ge(function(i, d) {
        if (a._state.openComplete) return d(new ye.DatabaseClosed(a._state.dbOpenError));
        if (!a._state.isBeingOpened) {
          if (!a._state.autoOpen) return void d(new ye.DatabaseClosed());
          a.open().catch(C);
        }
        a._state.dbReadyPromise.then(i, d);
      }).then(t);
    }, yt.prototype.use = function(f) {
      var a = f.stack, i = f.create, d = f.level, f = f.name, g = (f && this.unuse({ stack: a, name: f }), this._middlewares[a] || (this._middlewares[a] = []));
      return g.push({ stack: a, create: i, level: d ?? 10, name: f }), g.sort(function(b, y) {
        return b.level - y.level;
      }), this;
    }, yt.prototype.unuse = function(t) {
      var a = t.stack, i = t.name, d = t.create;
      return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(f) {
        return d ? f.create !== d : !!i && f.name !== i;
      })), this;
    }, yt.prototype.open = function() {
      var t = this;
      return xn(kt, function() {
        return Mr(t);
      });
    }, yt.prototype._close = function() {
      this.on.close.fire(new CustomEvent("close"));
      var t = this._state, a = Jt.indexOf(this);
      if (0 <= a && Jt.splice(a, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      t.isBeingOpened || (t.dbReadyPromise = new ge(function(i) {
        t.dbReadyResolve = i;
      }), t.openCanceller = new ge(function(i, d) {
        t.cancelOpen = d;
      }));
    }, yt.prototype.close = function(a) {
      var a = (a === void 0 ? { disableAutoOpen: !0 } : a).disableAutoOpen, i = this._state;
      a ? (i.isBeingOpened && i.cancelOpen(new ye.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new ye.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
    }, yt.prototype.delete = function(t) {
      var a = this, i = (t === void 0 && (t = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), d = this._state;
      return new ge(function(f, g) {
        function b() {
          a.close(t);
          var y = a._deps.indexedDB.deleteDatabase(a.name);
          y.onsuccess = it(function() {
            var T, B, I;
            T = a._deps, B = a.name, qa(I = T.indexedDB) || B === ga || za(I, T.IDBKeyRange).delete(B).catch(C), f();
          }), y.onerror = Ct(g), y.onblocked = a._fireOnBlocked;
        }
        if (i) throw new ye.InvalidArgument("Invalid closeOptions argument to db.delete()");
        d.isBeingOpened ? d.dbReadyPromise.then(b) : b();
      });
    }, yt.prototype.backendDB = function() {
      return this.idbdb;
    }, yt.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, yt.prototype.hasBeenClosed = function() {
      var t = this._state.dbOpenError;
      return t && t.name === "DatabaseClosed";
    }, yt.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, yt.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(yt.prototype, "tables", { get: function() {
      var t = this;
      return k(this._allTables).map(function(a) {
        return t._allTables[a];
      });
    }, enumerable: !1, configurable: !0 }), yt.prototype.transaction = function() {
      var t = (function(a, i, d) {
        var f = arguments.length;
        if (f < 2) throw new ye.InvalidArgument("Too few arguments");
        for (var g = new Array(f - 1); --f; ) g[f - 1] = arguments[f];
        return d = g.pop(), [a, $e(g), d];
      }).apply(this, arguments);
      return this._transaction.apply(this, t);
    }, yt.prototype._transaction = function(t, a, i) {
      var d, f, g = this, b = xe.trans, y = (b && b.db === this && t.indexOf("!") === -1 || (b = null), t.indexOf("?") !== -1);
      t = t.replace("!", "").replace("?", "");
      try {
        if (f = a.map(function(B) {
          if (B = B instanceof g.Table ? B.name : B, typeof B != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return B;
        }), t == "r" || t === La) d = La;
        else {
          if (t != "rw" && t != wr) throw new ye.InvalidArgument("Invalid transaction mode: " + t);
          d = wr;
        }
        if (b) {
          if (b.mode === La && d === wr) {
            if (!y) throw new ye.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            b = null;
          }
          b && f.forEach(function(B) {
            if (b && b.storeNames.indexOf(B) === -1) {
              if (!y) throw new ye.SubTransaction("Table " + B + " not included in parent transaction.");
              b = null;
            }
          }), y && b && !b.active && (b = null);
        }
      } catch (B) {
        return b ? b._promise(null, function(I, x) {
          x(B);
        }) : Pt(B);
      }
      var T = (function B(I, x, D, R, E) {
        return ge.resolve().then(function() {
          var W = xe.transless || xe, A = I._createTransaction(x, D, I._dbSchema, R), W = (A.explicit = !0, { trans: A, transless: W });
          if (R) A.idbtrans = R.idbtrans;
          else try {
            A.create(), A.idbtrans._explicit = !0, I._state.PR1398_maxLoop = 3;
          } catch (J) {
            return J.name === ln.InvalidState && I.isOpen() && 0 < --I._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), I.close({ disableAutoOpen: !1 }), I.open().then(function() {
              return B(I, x, D, null, E);
            })) : Pt(J);
          }
          var F, U = zt(E), W = (U && te(), ge.follow(function() {
            var J;
            (F = E.call(A, A)) && (U ? (J = fn.bind(null, null), F.then(J, J)) : typeof F.next == "function" && typeof F.throw == "function" && (F = Ir(F)));
          }, W));
          return (F && typeof F.then == "function" ? ge.resolve(F).then(function(J) {
            return A.active ? J : Pt(new ye.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : W.then(function() {
            return F;
          })).then(function(J) {
            return R && A._resolve(), A._completion.then(function() {
              return J;
            });
          }).catch(function(J) {
            return A._reject(J), Pt(J);
          });
        });
      }).bind(null, this, d, f, b, i);
      return b ? b._promise(d, T, "lock") : xe.trans ? xn(xe.transless, function() {
        return g._whenReady(T);
      }) : this._whenReady(T);
    }, yt.prototype.table = function(t) {
      if (Y(this._allTables, t)) return this._allTables[t];
      throw new ye.InvalidTable("Table ".concat(t, " does not exist"));
    };
    var bn = yt;
    function yt(t, a) {
      var i, d, f, g, b, y = this, T = (this._middlewares = {}, this.verno = 0, yt.dependencies), T = (this._options = a = p({ addons: yt.addons, autoOpen: !0, indexedDB: T.indexedDB, IDBKeyRange: T.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, a.addons), B = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: C, dbReadyPromise: null, cancelOpen: C, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen }), I = (B.dbReadyPromise = new ge(function(x) {
        B.dbReadyResolve = x;
      }), B.openCanceller = new ge(function(x, D) {
        B.cancelOpen = D;
      }), this._state = B, this.name = t, this.on = ba(this, "populate", "blocked", "versionchange", "close", { ready: [qe, C] }), this.once = function(x, D) {
        var R = function() {
          for (var E = [], A = 0; A < arguments.length; A++) E[A] = arguments[A];
          y.on(x).unsubscribe(R), D.apply(y, E);
        };
        return y.on(x, R);
      }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(x) {
        return function(D, R) {
          yt.vip(function() {
            var E, A = y._state;
            A.openComplete ? (A.dbOpenError || ge.resolve().then(D), R && x(D)) : A.onReadyBeingFired ? (A.onReadyBeingFired.push(D), R && x(D)) : (x(D), E = y, R || x(function F() {
              E.on.ready.unsubscribe(D), E.on.ready.unsubscribe(F);
            }));
          });
        };
      }), this.Collection = (i = this, zn(vr.prototype, function(F, A) {
        this.db = i;
        var R = ie, E = null;
        if (A) try {
          R = A();
        } catch (W) {
          E = W;
        }
        var A = F._ctx, F = A.table, U = F.hook.reading.fire;
        this._ctx = { table: F, index: A.index, isPrimKey: !A.index || F.schema.primKey.keyPath && A.index === F.schema.primKey.name, range: R, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: E, or: A.or, valueMapper: U !== K ? U : null };
      })), this.Table = (d = this, zn(ya.prototype, function(x, D, R) {
        this.db = d, this._tx = R, this.name = x, this.schema = D, this.hook = d._allTables[x] ? d._allTables[x].hook : ba(null, { creating: [Ae, C], reading: [$, K], updating: [Ne, C], deleting: [De, C] });
      })), this.Transaction = (f = this, zn(Cn.prototype, function(x, D, R, E, A) {
        var F = this;
        x !== "readonly" && D.forEach(function(U) {
          U = (U = R[U]) == null ? void 0 : U.yProps, U && (D = D.concat(U.map(function(W) {
            return W.updatesTable;
          })));
        }), this.db = f, this.mode = x, this.storeNames = D, this.schema = R, this.chromeTransactionDurability = E, this.idbtrans = null, this.on = ba(this, "complete", "error", "abort"), this.parent = A || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ge(function(U, W) {
          F._resolve = U, F._reject = W;
        }), this._completion.then(function() {
          F.active = !1, F.on.complete.fire();
        }, function(U) {
          var W = F.active;
          return F.active = !1, F.on.error.fire(U), F.parent ? F.parent._reject(U) : W && F.idbtrans && F.idbtrans.abort(), Pt(U);
        });
      })), this.Version = (g = this, zn(So.prototype, function(x) {
        this.db = g, this._cfg = { version: x, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (b = this, zn(Nn.prototype, function(x, D, R) {
        if (this.db = b, this._ctx = { table: x, index: D === ":id" ? null : D, or: R }, this._cmp = this._ascending = le, this._descending = function(E, A) {
          return le(A, E);
        }, this._max = function(E, A) {
          return 0 < le(E, A) ? E : A;
        }, this._min = function(E, A) {
          return le(E, A) < 0 ? E : A;
        }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new ye.MissingAPI();
      })), this.on("versionchange", function(x) {
        0 < x.newVersion ? console.warn("Another connection wants to upgrade database '".concat(y.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(y.name, "'. Closing db now to resume the delete request.")), y.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(x) {
        !x.newVersion || x.newVersion < x.oldVersion ? console.warn("Dexie.delete('".concat(y.name, "') was blocked")) : console.warn("Upgrade '".concat(y.name, "' blocked by other connection holding version ").concat(x.oldVersion / 10));
      }), this._maxKey = xa(a.IDBKeyRange), this._createTransaction = function(x, D, R, E) {
        return new y.Transaction(x, D, R, y._options.chromeTransactionDurability, E);
      }, this._fireOnBlocked = function(x) {
        y.on("blocked").fire(x), Jt.filter(function(D) {
          return D.name === y.name && D !== y && !D._state.vcFired;
        }).map(function(D) {
          return D.on("versionchange").fire(x);
        });
      }, this.use(xo), this.use(ia), this.use(Ea), this.use(Jr), this.use(Po), new Proxy(this, { get: function(x, D, R) {
        var E;
        return D === "_vip" || (D === "table" ? function(A) {
          return sa(y.table(A), I);
        } : (E = Reflect.get(x, D, R)) instanceof ya ? sa(E, I) : D === "tables" ? E.map(function(A) {
          return sa(A, I);
        }) : D === "_createTransaction" ? function() {
          return sa(E.apply(this, arguments), I);
        } : E);
      } }));
      this.vip = I, T.forEach(function(x) {
        return x(y);
      });
    }
    var Xa, Tn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Co = (Rr.prototype.subscribe = function(t, a, i) {
      return this._subscribe(t && typeof t != "function" ? t : { next: t, error: a, complete: i });
    }, Rr.prototype[Tn] = function() {
      return this;
    }, Rr);
    function Rr(t) {
      this._subscribe = t;
    }
    try {
      Xa = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
    } catch {
      Xa = { indexedDB: null, IDBKeyRange: null };
    }
    function Dr(t) {
      var a, i = !1, d = new Co(function(f) {
        var g = zt(t), b, y = !1, T = {}, B = {}, I = { get closed() {
          return y;
        }, unsubscribe: function() {
          y || (y = !0, b && b.abort(), x && gt.storagemutated.unsubscribe(R));
        } }, x = (f.start && f.start(I), !1), D = function() {
          return mr(E);
        }, R = function(A) {
          na(T, A), Aa(B, T) && D();
        }, E = function() {
          var A, F, U;
          !y && Xa.indexedDB && (T = {}, A = {}, b && b.abort(), b = new AbortController(), U = ((W) => {
            var J = Kn();
            try {
              g && te();
              var ae = Pn(t, W);
              return ae = g ? ae.finally(fn) : ae;
            } finally {
              J && pn();
            }
          })(F = { subscr: A, signal: b.signal, requery: D, querier: t, trans: null }), Promise.resolve(U).then(function(W) {
            i = !0, a = W, y || F.signal.aborted || (T = {}, ((J) => {
              for (var ae in J) if (Y(J, ae)) return;
              return 1;
            })(B = A) || x || (gt(wn, R), x = !0), mr(function() {
              return !y && f.next && f.next(W);
            }));
          }, function(W) {
            i = !1, ["DatabaseClosedError", "AbortError"].includes(W == null ? void 0 : W.name) || y || mr(function() {
              y || f.error && f.error(W);
            });
          }));
        };
        return setTimeout(D, 0), I;
      });
      return d.hasValue = function() {
        return i;
      }, d.getValue = function() {
        return a;
      }, d;
    }
    var Ln = bn;
    function er(t) {
      var a = cn;
      try {
        cn = !0, gt.storagemutated.fire(t), ut(t, !0);
      } finally {
        cn = a;
      }
    }
    V(Ln, p(p({}, ft), { delete: function(t) {
      return new Ln(t, { addons: [] }).delete();
    }, exists: function(t) {
      return new Ln(t, { addons: [] }).open().then(function(a) {
        return a.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(t) {
      try {
        return a = Ln.dependencies, i = a.indexedDB, a = a.IDBKeyRange, (qa(i) ? Promise.resolve(i.databases()).then(function(d) {
          return d.map(function(f) {
            return f.name;
          }).filter(function(f) {
            return f !== ga;
          });
        }) : za(i, a).toCollection().primaryKeys()).then(t);
      } catch {
        return Pt(new ye.MissingAPI());
      }
      var a, i;
    }, defineClass: function() {
      return function(t) {
        M(this, t);
      };
    }, ignoreTransaction: function(t) {
      return xe.trans ? xn(xe.transless, t) : t();
    }, vip: Lt, async: function(t) {
      return function() {
        try {
          var a = Ir(t.apply(this, arguments));
          return a && typeof a.then == "function" ? a : ge.resolve(a);
        } catch (i) {
          return Pt(i);
        }
      };
    }, spawn: function(t, a, i) {
      try {
        var d = Ir(t.apply(i, a || []));
        return d && typeof d.then == "function" ? d : ge.resolve(d);
      } catch (f) {
        return Pt(f);
      }
    }, currentTransaction: { get: function() {
      return xe.trans || null;
    } }, waitFor: function(t, a) {
      return t = ge.resolve(typeof t == "function" ? Ln.ignoreTransaction(t) : t).timeout(a || 6e4), xe.trans ? xe.trans.waitFor(t) : t;
    }, Promise: ge, debug: { get: function() {
      return vt;
    }, set: function(t) {
      Dn(t);
    } }, derive: de, extend: M, props: V, override: ke, Events: ba, on: gt, liveQuery: Dr, extendObservabilitySet: na, getByKeyPath: re, setByKeyPath: pe, delByKeyPath: function(t, a) {
      typeof a == "string" ? pe(t, a, void 0) : "length" in a && [].map.call(a, function(i) {
        pe(t, i, void 0);
      });
    }, shallowClone: rt, deepClone: Qe, getObjectDiff: Ar, cmp: le, asap: Se, minKey: -1 / 0, addons: [], connections: Jt, errnames: ln, dependencies: Xa, cache: Yt, semVer: "4.3.0", version: "4.3.0".split(".").map(function(t) {
      return parseInt(t);
    }).reduce(function(t, a, i) {
      return t + a / Math.pow(10, 2 * i);
    }) })), Ln.maxKey = xa(Ln.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (gt(wn, function(t) {
      cn || (t = new CustomEvent(an, { detail: t }), cn = !0, dispatchEvent(t), cn = !1);
    }), addEventListener(an, function(t) {
      t = t.detail, cn || er(t);
    }));
    var sn, cn = !1, Xr = function() {
    };
    return typeof BroadcastChannel < "u" && ((Xr = function() {
      (sn = new BroadcastChannel(an)).onmessage = function(t) {
        return t.data && er(t.data);
      };
    })(), typeof sn.unref == "function" && sn.unref(), gt(wn, function(t) {
      cn || sn.postMessage(t);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
      if (!bn.disableBfCache && t.persisted) {
        vt && console.debug("Dexie: handling persisted pagehide"), sn != null && sn.close();
        for (var a = 0, i = Jt; a < i.length; a++) i[a].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(t) {
      !bn.disableBfCache && t.persisted && (vt && console.debug("Dexie: handling persisted pageshow"), Xr(), er({ all: new Rt(-1 / 0, [[]]) }));
    })), ge.rejectionMapper = function(t, a) {
      return !t || t instanceof qt || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Ut[t.name] ? t : (a = new Ut[t.name](a || t.message, t), "stack" in t && he(a, "stack", { get: function() {
        return this.inner.stack;
      } }), a);
    }, Dn(vt), p(bn, Object.freeze({ __proto__: null, Dexie: bn, Entity: Va, PropModification: Wn, RangeSet: Rt, add: function(t) {
      return new Wn({ add: t });
    }, cmp: le, default: bn, liveQuery: Dr, mergeRanges: ea, rangesOverlap: qr, remove: function(t) {
      return new Wn({ remove: t });
    }, replacePrefix: function(t, a) {
      return new Wn({ replacePrefix: [t, a] });
    } }), { default: bn }), bn;
  });
})(nc);
var Su = nc.exports;
const si = /* @__PURE__ */ pi(Su), Ds = Symbol.for("Dexie"), Lr = globalThis[Ds] || (globalThis[Ds] = si);
if (si.semVer !== Lr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${si.semVer} and ${Lr.semVer}`);
const {
  liveQuery: Pu,
  mergeRanges: xu,
  rangesOverlap: Cu,
  RangeSet: Mu,
  cmp: Iu,
  Entity: Au,
  PropModification: Tu,
  replacePrefix: Eu,
  add: Ru,
  remove: Du,
  DexieYProvider: _u
} = Lr, Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dexie: Lr,
  DexieYProvider: _u,
  Entity: Au,
  PropModification: Tu,
  RangeSet: Mu,
  add: Ru,
  cmp: Iu,
  default: Lr,
  liveQuery: Pu,
  mergeRanges: xu,
  rangesOverlap: Cu,
  remove: Du,
  replacePrefix: Eu
}, Symbol.toStringTag, { value: "Module" })), Wu = /* @__PURE__ */ ec(Ou);
var Bu = "Expected a function", _s = NaN, Nu = "[object Symbol]", Fu = /^\s+|\s+$/g, Lu = /^[-+]0x[0-9a-f]+$/i, Vu = /^0b[01]+$/i, Uu = /^0o[0-7]+$/i, $u = parseInt, Ku = typeof lr == "object" && lr && lr.Object === Object && lr, ju = typeof self == "object" && self && self.Object === Object && self, Hu = Ku || ju || Function("return this")(), Gu = Object.prototype, zu = Gu.toString, qu = Math.max, Ju = Math.min, ti = function() {
  return Hu.Date.now();
};
function Zu(c, r, l) {
  var p, m, h, k, P, M, L = 0, z = !1, Y = !1, V = !0;
  if (typeof c != "function")
    throw new TypeError(Bu);
  r = Os(r) || 0, ci(l) && (z = !!l.leading, Y = "maxWait" in l, h = Y ? qu(Os(l.maxWait) || 0, r) : h, V = "trailing" in l ? !!l.trailing : V);
  function O(re) {
    var pe = p, rt = m;
    return p = m = void 0, L = re, k = c.apply(rt, pe), k;
  }
  function he(re) {
    return L = re, P = setTimeout(Pe, r), z ? O(re) : k;
  }
  function de(re) {
    var pe = re - M, rt = re - L, He = r - pe;
    return Y ? Ju(He, h - rt) : He;
  }
  function H(re) {
    var pe = re - M, rt = re - L;
    return M === void 0 || pe >= r || pe < 0 || Y && rt >= h;
  }
  function Pe() {
    var re = ti();
    if (H(re))
      return Z(re);
    P = setTimeout(Pe, de(re));
  }
  function Z(re) {
    return P = void 0, V && p ? O(re) : (p = m = void 0, k);
  }
  function ke() {
    P !== void 0 && clearTimeout(P), L = 0, p = M = m = P = void 0;
  }
  function ee() {
    return P === void 0 ? k : Z(ti());
  }
  function Se() {
    var re = ti(), pe = H(re);
    if (p = arguments, m = this, M = re, pe) {
      if (P === void 0)
        return he(M);
      if (Y)
        return P = setTimeout(Pe, r), O(M);
    }
    return P === void 0 && (P = setTimeout(Pe, r)), k;
  }
  return Se.cancel = ke, Se.flush = ee, Se;
}
function ci(c) {
  var r = typeof c;
  return !!c && (r == "object" || r == "function");
}
function Yu(c) {
  return !!c && typeof c == "object";
}
function Qu(c) {
  return typeof c == "symbol" || Yu(c) && zu.call(c) == Nu;
}
function Os(c) {
  if (typeof c == "number")
    return c;
  if (Qu(c))
    return _s;
  if (ci(c)) {
    var r = typeof c.valueOf == "function" ? c.valueOf() : c;
    c = ci(r) ? r + "" : r;
  }
  if (typeof c != "string")
    return c === 0 ? c : +c;
  c = c.replace(Fu, "");
  var l = Vu.test(c);
  return l || Uu.test(c) ? $u(c.slice(2), l ? 2 : 8) : Lu.test(c) ? _s : +c;
}
var Xu = Zu, ac = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fi = Symbol.for("react.transitional.element"), ed = Symbol.for("react.portal"), td = Symbol.for("react.fragment"), nd = Symbol.for("react.strict_mode"), ad = Symbol.for("react.profiler"), rd = Symbol.for("react.consumer"), od = Symbol.for("react.context"), id = Symbol.for("react.forward_ref"), sd = Symbol.for("react.suspense"), cd = Symbol.for("react.memo"), rc = Symbol.for("react.lazy"), ld = Symbol.for("react.activity"), Ws = Symbol.iterator;
function ud(c) {
  return c === null || typeof c != "object" ? null : (c = Ws && c[Ws] || c["@@iterator"], typeof c == "function" ? c : null);
}
var oc = {
  isMounted: function() {
    return !1;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
}, ic = Object.assign, sc = {};
function pr(c, r, l) {
  this.props = c, this.context = r, this.refs = sc, this.updater = l || oc;
}
pr.prototype.isReactComponent = {};
pr.prototype.setState = function(c, r) {
  if (typeof c != "object" && typeof c != "function" && c != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, c, r, "setState");
};
pr.prototype.forceUpdate = function(c) {
  this.updater.enqueueForceUpdate(this, c, "forceUpdate");
};
function cc() {
}
cc.prototype = pr.prototype;
function hi(c, r, l) {
  this.props = c, this.context = r, this.refs = sc, this.updater = l || oc;
}
var gi = hi.prototype = new cc();
gi.constructor = hi;
ic(gi, pr.prototype);
gi.isPureReactComponent = !0;
var Bs = Array.isArray;
function li() {
}
var wt = { H: null, A: null, T: null, S: null }, lc = Object.prototype.hasOwnProperty;
function mi(c, r, l) {
  var p = l.ref;
  return {
    $$typeof: fi,
    type: c,
    key: r,
    ref: p !== void 0 ? p : null,
    props: l
  };
}
function dd(c, r) {
  return mi(c.type, r, c.props);
}
function wi(c) {
  return typeof c == "object" && c !== null && c.$$typeof === fi;
}
function pd(c) {
  var r = { "=": "=0", ":": "=2" };
  return "$" + c.replace(/[=:]/g, function(l) {
    return r[l];
  });
}
var Ns = /\/+/g;
function ni(c, r) {
  return typeof c == "object" && c !== null && c.key != null ? pd("" + c.key) : r.toString(36);
}
function fd(c) {
  switch (c.status) {
    case "fulfilled":
      return c.value;
    case "rejected":
      throw c.reason;
    default:
      switch (typeof c.status == "string" ? c.then(li, li) : (c.status = "pending", c.then(
        function(r) {
          c.status === "pending" && (c.status = "fulfilled", c.value = r);
        },
        function(r) {
          c.status === "pending" && (c.status = "rejected", c.reason = r);
        }
      )), c.status) {
        case "fulfilled":
          return c.value;
        case "rejected":
          throw c.reason;
      }
  }
  throw c;
}
function cr(c, r, l, p, m) {
  var h = typeof c;
  (h === "undefined" || h === "boolean") && (c = null);
  var k = !1;
  if (c === null) k = !0;
  else
    switch (h) {
      case "bigint":
      case "string":
      case "number":
        k = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case fi:
          case ed:
            k = !0;
            break;
          case rc:
            return k = c._init, cr(
              k(c._payload),
              r,
              l,
              p,
              m
            );
        }
    }
  if (k)
    return m = m(c), k = p === "" ? "." + ni(c, 0) : p, Bs(m) ? (l = "", k != null && (l = k.replace(Ns, "$&/") + "/"), cr(m, r, l, "", function(L) {
      return L;
    })) : m != null && (wi(m) && (m = dd(
      m,
      l + (m.key == null || c && c.key === m.key ? "" : ("" + m.key).replace(
        Ns,
        "$&/"
      ) + "/") + k
    )), r.push(m)), 1;
  k = 0;
  var P = p === "" ? "." : p + ":";
  if (Bs(c))
    for (var M = 0; M < c.length; M++)
      p = c[M], h = P + ni(p, M), k += cr(
        p,
        r,
        l,
        h,
        m
      );
  else if (M = ud(c), typeof M == "function")
    for (c = M.call(c), M = 0; !(p = c.next()).done; )
      p = p.value, h = P + ni(p, M++), k += cr(
        p,
        r,
        l,
        h,
        m
      );
  else if (h === "object") {
    if (typeof c.then == "function")
      return cr(
        fd(c),
        r,
        l,
        p,
        m
      );
    throw r = String(c), Error(
      "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
    );
  }
  return k;
}
function uo(c, r, l) {
  if (c == null) return c;
  var p = [], m = 0;
  return cr(c, p, "", "", function(h) {
    return r.call(l, h, m++);
  }), p;
}
function hd(c) {
  if (c._status === -1) {
    var r = c._result;
    r = r(), r.then(
      function(l) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = l);
      },
      function(l) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = l);
      }
    ), c._status === -1 && (c._status = 0, c._result = r);
  }
  if (c._status === 1) return c._result.default;
  throw c._result;
}
var Fs = typeof reportError == "function" ? reportError : function(c) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var r = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof c == "object" && c !== null && typeof c.message == "string" ? String(c.message) : String(c),
      error: c
    });
    if (!window.dispatchEvent(r)) return;
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", c);
    return;
  }
  console.error(c);
}, gd = {
  map: uo,
  forEach: function(c, r, l) {
    uo(
      c,
      function() {
        r.apply(this, arguments);
      },
      l
    );
  },
  count: function(c) {
    var r = 0;
    return uo(c, function() {
      r++;
    }), r;
  },
  toArray: function(c) {
    return uo(c, function(r) {
      return r;
    }) || [];
  },
  only: function(c) {
    if (!wi(c))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return c;
  }
};
Le.Activity = ld;
Le.Children = gd;
Le.Component = pr;
Le.Fragment = td;
Le.Profiler = ad;
Le.PureComponent = hi;
Le.StrictMode = nd;
Le.Suspense = sd;
Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = wt;
Le.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(c) {
    return wt.H.useMemoCache(c);
  }
};
Le.cache = function(c) {
  return function() {
    return c.apply(null, arguments);
  };
};
Le.cacheSignal = function() {
  return null;
};
Le.cloneElement = function(c, r, l) {
  if (c == null)
    throw Error(
      "The argument must be a React element, but you passed " + c + "."
    );
  var p = ic({}, c.props), m = c.key;
  if (r != null)
    for (h in r.key !== void 0 && (m = "" + r.key), r)
      !lc.call(r, h) || h === "key" || h === "__self" || h === "__source" || h === "ref" && r.ref === void 0 || (p[h] = r[h]);
  var h = arguments.length - 2;
  if (h === 1) p.children = l;
  else if (1 < h) {
    for (var k = Array(h), P = 0; P < h; P++)
      k[P] = arguments[P + 2];
    p.children = k;
  }
  return mi(c.type, m, p);
};
Le.createContext = function(c) {
  return c = {
    $$typeof: od,
    _currentValue: c,
    _currentValue2: c,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, c.Provider = c, c.Consumer = {
    $$typeof: rd,
    _context: c
  }, c;
};
Le.createElement = function(c, r, l) {
  var p, m = {}, h = null;
  if (r != null)
    for (p in r.key !== void 0 && (h = "" + r.key), r)
      lc.call(r, p) && p !== "key" && p !== "__self" && p !== "__source" && (m[p] = r[p]);
  var k = arguments.length - 2;
  if (k === 1) m.children = l;
  else if (1 < k) {
    for (var P = Array(k), M = 0; M < k; M++)
      P[M] = arguments[M + 2];
    m.children = P;
  }
  if (c && c.defaultProps)
    for (p in k = c.defaultProps, k)
      m[p] === void 0 && (m[p] = k[p]);
  return mi(c, h, m);
};
Le.createRef = function() {
  return { current: null };
};
Le.forwardRef = function(c) {
  return { $$typeof: id, render: c };
};
Le.isValidElement = wi;
Le.lazy = function(c) {
  return {
    $$typeof: rc,
    _payload: { _status: -1, _result: c },
    _init: hd
  };
};
Le.memo = function(c, r) {
  return {
    $$typeof: cd,
    type: c,
    compare: r === void 0 ? null : r
  };
};
Le.startTransition = function(c) {
  var r = wt.T, l = {};
  wt.T = l;
  try {
    var p = c(), m = wt.S;
    m !== null && m(l, p), typeof p == "object" && p !== null && typeof p.then == "function" && p.then(li, Fs);
  } catch (h) {
    Fs(h);
  } finally {
    r !== null && l.types !== null && (r.types = l.types), wt.T = r;
  }
};
Le.unstable_useCacheRefresh = function() {
  return wt.H.useCacheRefresh();
};
Le.use = function(c) {
  return wt.H.use(c);
};
Le.useActionState = function(c, r, l) {
  return wt.H.useActionState(c, r, l);
};
Le.useCallback = function(c, r) {
  return wt.H.useCallback(c, r);
};
Le.useContext = function(c) {
  return wt.H.useContext(c);
};
Le.useDebugValue = function() {
};
Le.useDeferredValue = function(c, r) {
  return wt.H.useDeferredValue(c, r);
};
Le.useEffect = function(c, r) {
  return wt.H.useEffect(c, r);
};
Le.useEffectEvent = function(c) {
  return wt.H.useEffectEvent(c);
};
Le.useId = function() {
  return wt.H.useId();
};
Le.useImperativeHandle = function(c, r, l) {
  return wt.H.useImperativeHandle(c, r, l);
};
Le.useInsertionEffect = function(c, r) {
  return wt.H.useInsertionEffect(c, r);
};
Le.useLayoutEffect = function(c, r) {
  return wt.H.useLayoutEffect(c, r);
};
Le.useMemo = function(c, r) {
  return wt.H.useMemo(c, r);
};
Le.useOptimistic = function(c, r) {
  return wt.H.useOptimistic(c, r);
};
Le.useReducer = function(c, r, l) {
  return wt.H.useReducer(c, r, l);
};
Le.useRef = function(c) {
  return wt.H.useRef(c);
};
Le.useState = function(c) {
  return wt.H.useState(c);
};
Le.useSyncExternalStore = function(c, r, l) {
  return wt.H.useSyncExternalStore(
    c,
    r,
    l
  );
};
Le.useTransition = function() {
  return wt.H.useTransition();
};
Le.version = "19.2.4";
ac.exports = Le;
var Ye = ac.exports, md = {
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
const wd = /* @__PURE__ */ pi(md);
var yd = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ls(c) {
  var r = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, l = c.match(/<\/?([^\s]+?)[/\s>]/);
  if (l && (r.name = l[1], (wd[l[1]] || c.charAt(c.length - 2) === "/") && (r.voidElement = !0), r.name.startsWith("!--"))) {
    var p = c.indexOf("-->");
    return { type: "comment", comment: p !== -1 ? c.slice(4, p) : "" };
  }
  for (var m = new RegExp(yd), h = null; (h = m.exec(c)) !== null; ) if (h[0].trim()) if (h[1]) {
    var k = h[1].trim(), P = [k, ""];
    k.indexOf("=") > -1 && (P = k.split("=")), r.attrs[P[0]] = P[1], m.lastIndex--;
  } else h[2] && (r.attrs[h[2]] = h[3].trim().substring(1, h[3].length - 1));
  return r;
}
var bd = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, vd = /^\s*$/, kd = /* @__PURE__ */ Object.create(null);
function uc(c, r) {
  switch (r.type) {
    case "text":
      return c + r.content;
    case "tag":
      return c += "<" + r.name + (r.attrs ? function(l) {
        var p = [];
        for (var m in l) p.push(m + '="' + l[m] + '"');
        return p.length ? " " + p.join(" ") : "";
      }(r.attrs) : "") + (r.voidElement ? "/>" : ">"), r.voidElement ? c : c + r.children.reduce(uc, "") + "</" + r.name + ">";
    case "comment":
      return c + "<!--" + r.comment + "-->";
  }
}
var Sd = { parse: function(c, r) {
  r || (r = {}), r.components || (r.components = kd);
  var l, p = [], m = [], h = -1, k = !1;
  if (c.indexOf("<") !== 0) {
    var P = c.indexOf("<");
    p.push({ type: "text", content: P === -1 ? c : c.substring(0, P) });
  }
  return c.replace(bd, function(M, L) {
    if (k) {
      if (M !== "</" + l.name + ">") return;
      k = !1;
    }
    var z, Y = M.charAt(1) !== "/", V = M.startsWith("<!--"), O = L + M.length, he = c.charAt(O);
    if (V) {
      var de = Ls(M);
      return h < 0 ? (p.push(de), p) : ((z = m[h]).children.push(de), p);
    }
    if (Y && (h++, (l = Ls(M)).type === "tag" && r.components[l.name] && (l.type = "component", k = !0), l.voidElement || k || !he || he === "<" || l.children.push({ type: "text", content: c.slice(O, c.indexOf("<", O)) }), h === 0 && p.push(l), (z = m[h - 1]) && z.children.push(l), m[h] = l), (!Y || l.voidElement) && (h > -1 && (l.voidElement || l.name === M.slice(2, -1)) && (h--, l = h === -1 ? p : m[h]), !k && he !== "<" && he)) {
      z = h === -1 ? p : m[h].children;
      var H = c.indexOf("<", O), Pe = c.slice(O, H === -1 ? void 0 : H);
      vd.test(Pe) && (Pe = " "), (H > -1 && h + z.length >= 0 || Pe !== " ") && z.push({ type: "text", content: Pe });
    }
  }), p;
}, stringify: function(c) {
  return c.reduce(function(r, l) {
    return r + uc("", l);
  }, "");
} };
function fo() {
  if (console && console.warn) {
    for (var c = arguments.length, r = new Array(c), l = 0; l < c; l++)
      r[l] = arguments[l];
    en(r[0]) && (r[0] = `react-i18next:: ${r[0]}`), console.warn(...r);
  }
}
const Vs = {};
function ho() {
  for (var c = arguments.length, r = new Array(c), l = 0; l < c; l++)
    r[l] = arguments[l];
  en(r[0]) && Vs[r[0]] || (en(r[0]) && (Vs[r[0]] = /* @__PURE__ */ new Date()), fo(...r));
}
const dc = (c, r) => () => {
  if (c.isInitialized)
    r();
  else {
    const l = () => {
      setTimeout(() => {
        c.off("initialized", l);
      }, 0), r();
    };
    c.on("initialized", l);
  }
}, Us = (c, r, l) => {
  c.loadNamespaces(r, dc(c, l));
}, $s = (c, r, l, p) => {
  en(l) && (l = [l]), l.forEach((m) => {
    c.options.ns.indexOf(m) < 0 && c.options.ns.push(m);
  }), c.loadLanguages(r, dc(c, p));
}, Pd = function(c, r) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const p = r.languages[0], m = r.options ? r.options.fallbackLng : !1, h = r.languages[r.languages.length - 1];
  if (p.toLowerCase() === "cimode") return !0;
  const k = (P, M) => {
    const L = r.services.backendConnector.state[`${P}|${M}`];
    return L === -1 || L === 2;
  };
  return l.bindI18n && l.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !k(r.isLanguageChangingTo, c) ? !1 : !!(r.hasResourceBundle(p, c) || !r.services.backendConnector.backend || r.options.resources && !r.options.partialBundledLanguages || k(p, c) && (!m || k(h, c)));
}, xd = function(c, r) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !r.languages || !r.languages.length ? (ho("i18n.languages were undefined or empty", r.languages), !0) : r.options.ignoreJSONStructure !== void 0 ? r.hasLoadedNamespace(c, {
    lng: l.lng,
    precheck: (m, h) => {
      if (l.bindI18n && l.bindI18n.indexOf("languageChanging") > -1 && m.services.backendConnector.backend && m.isLanguageChangingTo && !h(m.isLanguageChangingTo, c)) return !1;
    }
  }) : Pd(c, r, l);
}, pc = (c) => c.displayName || c.name || (en(c) && c.length > 0 ? c : "Unknown"), en = (c) => typeof c == "string", ur = (c) => typeof c == "object" && c !== null, Cd = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Md = {
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
}, Id = (c) => Md[c], Ad = (c) => c.replace(Cd, Id);
let ui = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ad
};
const fc = function() {
  let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ui = {
    ...ui,
    ...c
  };
}, yi = () => ui;
let hc;
const gc = (c) => {
  hc = c;
}, fr = () => hc, ai = (c, r) => {
  if (!c) return !1;
  const l = c.props ? c.props.children : c.children;
  return r ? l.length > 0 : !!l;
}, ri = (c) => {
  if (!c) return [];
  const r = c.props ? c.props.children : c.children;
  return c.props && c.props.i18nIsDynamicList ? dr(r) : r;
}, Td = (c) => Array.isArray(c) && c.every(Ye.isValidElement), dr = (c) => Array.isArray(c) ? c : [c], Ed = (c, r) => {
  const l = {
    ...r
  };
  return l.props = Object.assign(c.props, r.props), l;
}, mc = (c, r) => {
  if (!c) return "";
  let l = "";
  const p = dr(c), m = r.transSupportBasicHtmlNodes && r.transKeepBasicHtmlNodesFor ? r.transKeepBasicHtmlNodesFor : [];
  return p.forEach((h, k) => {
    if (en(h))
      l += `${h}`;
    else if (Ye.isValidElement(h)) {
      const {
        props: P,
        type: M
      } = h, L = Object.keys(P).length, z = m.indexOf(M) > -1, Y = P.children;
      if (!Y && z && !L)
        l += `<${M}/>`;
      else if (!Y && (!z || L) || P.i18nIsDynamicList)
        l += `<${k}></${k}>`;
      else if (z && L === 1 && en(Y))
        l += `<${M}>${Y}</${M}>`;
      else {
        const V = mc(Y, r);
        l += `<${k}>${V}</${k}>`;
      }
    } else if (h === null)
      fo("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (ur(h)) {
      const {
        format: P,
        ...M
      } = h, L = Object.keys(M);
      if (L.length === 1) {
        const z = P ? `${L[0]}, ${P}` : L[0];
        l += `{{${z}}}`;
      } else
        fo("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", h);
    } else
      fo("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", h);
  }), l;
}, Rd = (c, r, l, p, m, h) => {
  if (r === "") return [];
  const k = p.transKeepBasicHtmlNodesFor || [], P = r && new RegExp(k.map((H) => `<${H}`).join("|")).test(r);
  if (!c && !P && !h) return [r];
  const M = {}, L = (H) => {
    dr(H).forEach((Z) => {
      en(Z) || (ai(Z) ? L(ri(Z)) : ur(Z) && !Ye.isValidElement(Z) && Object.assign(M, Z));
    });
  };
  L(c);
  const z = Sd.parse(`<0>${r}</0>`), Y = {
    ...M,
    ...m
  }, V = (H, Pe, Z) => {
    const ke = ri(H), ee = he(ke, Pe.children, Z);
    return Td(ke) && ee.length === 0 || H.props && H.props.i18nIsDynamicList ? ke : ee;
  }, O = (H, Pe, Z, ke, ee) => {
    H.dummy ? (H.children = Pe, Z.push(Ye.cloneElement(H, {
      key: ke
    }, ee ? void 0 : Pe))) : Z.push(...Ye.Children.map([H], (Se) => {
      const re = {
        ...Se.props
      };
      return delete re.i18nIsDynamicList, Ye.createElement(Se.type, {
        ...re,
        key: ke,
        ref: Se.ref
      }, ee ? null : Pe);
    }));
  }, he = (H, Pe, Z) => {
    const ke = dr(H);
    return dr(Pe).reduce((Se, re, pe) => {
      const rt = re.children && re.children[0] && re.children[0].content && l.services.interpolator.interpolate(re.children[0].content, Y, l.language);
      if (re.type === "tag") {
        let He = ke[parseInt(re.name, 10)];
        Z.length === 1 && !He && (He = Z[0][re.name]), He || (He = {});
        const $e = Object.keys(re.attrs).length !== 0 ? Ed({
          props: re.attrs
        }, He) : He, pt = Ye.isValidElement($e), It = pt && ai(re, !0) && !re.voidElement, Qe = P && ur($e) && $e.dummy && !pt, Mt = ur(c) && Object.hasOwnProperty.call(c, re.name);
        if (en($e)) {
          const Ie = l.services.interpolator.interpolate($e, Y, l.language);
          Se.push(Ie);
        } else if (ai($e) || It) {
          const Ie = V($e, re, Z);
          O($e, Ie, Se, pe);
        } else if (Qe) {
          const Ie = he(ke, re.children, Z);
          O($e, Ie, Se, pe);
        } else if (Number.isNaN(parseFloat(re.name)))
          if (Mt) {
            const Ie = V($e, re, Z);
            O($e, Ie, Se, pe, re.voidElement);
          } else if (p.transSupportBasicHtmlNodes && k.indexOf(re.name) > -1)
            if (re.voidElement)
              Se.push(Ye.createElement(re.name, {
                key: `${re.name}-${pe}`
              }));
            else {
              const Ie = he(ke, re.children, Z);
              Se.push(Ye.createElement(re.name, {
                key: `${re.name}-${pe}`
              }, Ie));
            }
          else if (re.voidElement)
            Se.push(`<${re.name} />`);
          else {
            const Ie = he(ke, re.children, Z);
            Se.push(`<${re.name}>${Ie}</${re.name}>`);
          }
        else if (ur($e) && !pt) {
          const Ie = re.children[0] ? rt : null;
          Ie && Se.push(Ie);
        } else
          O($e, rt, Se, pe, re.children.length !== 1 || !rt);
      } else if (re.type === "text") {
        const He = p.transWrapTextNodes, $e = h ? p.unescape(l.services.interpolator.interpolate(re.content, Y, l.language)) : l.services.interpolator.interpolate(re.content, Y, l.language);
        He ? Se.push(Ye.createElement(He, {
          key: `${re.name}-${pe}`
        }, $e)) : Se.push($e);
      }
      return Se;
    }, []);
  }, de = he([{
    dummy: !0,
    children: c || []
  }], z, dr(c || []));
  return ri(de[0]);
};
function wc(c) {
  let {
    children: r,
    count: l,
    parent: p,
    i18nKey: m,
    context: h,
    tOptions: k = {},
    values: P,
    defaults: M,
    components: L,
    ns: z,
    i18n: Y,
    t: V,
    shouldUnescape: O,
    ...he
  } = c;
  const de = Y || fr();
  if (!de)
    return ho("You will need to pass in an i18next instance by using i18nextReactModule"), r;
  const H = V || de.t.bind(de) || ((It) => It), Pe = {
    ...yi(),
    ...de.options && de.options.react
  };
  let Z = z || H.ns || de.options && de.options.defaultNS;
  Z = en(Z) ? [Z] : Z || ["translation"];
  const ke = mc(r, Pe), ee = M || ke || Pe.transEmptyNodeValue || m, {
    hashTransKey: Se
  } = Pe, re = m || (Se ? Se(ke || ee) : ke || ee);
  de.options && de.options.interpolation && de.options.interpolation.defaultVariables && (P = P && Object.keys(P).length > 0 ? {
    ...P,
    ...de.options.interpolation.defaultVariables
  } : {
    ...de.options.interpolation.defaultVariables
  });
  const pe = P || l !== void 0 || !r ? k.interpolation : {
    interpolation: {
      ...k.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, rt = {
    ...k,
    context: h || k.context,
    count: l,
    ...P,
    ...pe,
    defaultValue: ee,
    ns: Z
  }, He = re ? H(re, rt) : ee;
  L && Object.keys(L).forEach((It) => {
    const Qe = L[It];
    if (typeof Qe.type == "function" || !Qe.props || !Qe.props.children || He.indexOf(`${It}/>`) < 0 && He.indexOf(`${It} />`) < 0) return;
    function Mt() {
      return Ye.createElement(Ye.Fragment, null, Qe);
    }
    L[It] = Ye.createElement(Mt);
  });
  const $e = Rd(L || r, He, de, Pe, rt, O), pt = p !== void 0 ? p : Pe.defaultTransParent;
  return pt ? Ye.createElement(pt, he, $e) : $e;
}
const Dd = {
  type: "3rdParty",
  init(c) {
    fc(c.options.react), gc(c);
  }
}, Ur = Ye.createContext();
class _d {
  constructor() {
    Rs(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(r) {
    r.forEach((l) => {
      this.usedNamespaces[l] || (this.usedNamespaces[l] = !0);
    });
  }
}
const yc = (c) => async (r) => {
  const l = c.getInitialProps ? await c.getInitialProps(r) : {}, p = bc();
  return {
    ...l,
    ...p
  };
}, bc = () => {
  const c = fr(), r = c.reportNamespaces ? c.reportNamespaces.getUsedNamespaces() : [], l = {}, p = {};
  return c.languages.forEach((m) => {
    p[m] = {}, r.forEach((h) => {
      p[m][h] = c.getResourceBundle(m, h) || {};
    });
  }), l.initialI18nStore = p, l.initialLanguage = c.language, l;
};
function Od(c) {
  let {
    children: r,
    count: l,
    parent: p,
    i18nKey: m,
    context: h,
    tOptions: k = {},
    values: P,
    defaults: M,
    components: L,
    ns: z,
    i18n: Y,
    t: V,
    shouldUnescape: O,
    ...he
  } = c;
  const {
    i18n: de,
    defaultNS: H
  } = Ye.useContext(Ur) || {}, Pe = Y || de || fr(), Z = V || Pe && Pe.t.bind(Pe);
  return wc({
    children: r,
    count: l,
    parent: p,
    i18nKey: m,
    context: h,
    tOptions: k,
    values: P,
    defaults: M,
    components: L,
    ns: z || Z && Z.ns || H || Pe && Pe.options && Pe.options.defaultNS,
    i18n: Pe,
    t: V,
    shouldUnescape: O,
    ...he
  });
}
const Wd = (c, r) => {
  const l = Ye.useRef();
  return Ye.useEffect(() => {
    l.current = c;
  }, [c, r]), l.current;
}, vc = (c, r, l, p) => c.getFixedT(r, l, p), Bd = (c, r, l, p) => Ye.useCallback(vc(c, r, l, p), [c, r, l, p]), bi = function(c) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: l
  } = r, {
    i18n: p,
    defaultNS: m
  } = Ye.useContext(Ur) || {}, h = l || p || fr();
  if (h && !h.reportNamespaces && (h.reportNamespaces = new _d()), !h) {
    ho("You will need to pass in an i18next instance by using initReactI18next");
    const ee = (re, pe) => en(pe) ? pe : ur(pe) && en(pe.defaultValue) ? pe.defaultValue : Array.isArray(re) ? re[re.length - 1] : re, Se = [ee, {}, !1];
    return Se.t = ee, Se.i18n = {}, Se.ready = !1, Se;
  }
  h.options.react && h.options.react.wait !== void 0 && ho("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const k = {
    ...yi(),
    ...h.options.react,
    ...r
  }, {
    useSuspense: P,
    keyPrefix: M
  } = k;
  let L = c || m || h.options && h.options.defaultNS;
  L = en(L) ? [L] : L || ["translation"], h.reportNamespaces.addUsedNamespaces && h.reportNamespaces.addUsedNamespaces(L);
  const z = (h.isInitialized || h.initializedStoreOnce) && L.every((ee) => xd(ee, h, k)), Y = Bd(h, r.lng || null, k.nsMode === "fallback" ? L : L[0], M), V = () => Y, O = () => vc(h, r.lng || null, k.nsMode === "fallback" ? L : L[0], M), [he, de] = Ye.useState(V);
  let H = L.join();
  r.lng && (H = `${r.lng}${H}`);
  const Pe = Wd(H), Z = Ye.useRef(!0);
  Ye.useEffect(() => {
    const {
      bindI18n: ee,
      bindI18nStore: Se
    } = k;
    Z.current = !0, !z && !P && (r.lng ? $s(h, r.lng, L, () => {
      Z.current && de(O);
    }) : Us(h, L, () => {
      Z.current && de(O);
    })), z && Pe && Pe !== H && Z.current && de(O);
    const re = () => {
      Z.current && de(O);
    };
    return ee && h && h.on(ee, re), Se && h && h.store.on(Se, re), () => {
      Z.current = !1, ee && h && ee.split(" ").forEach((pe) => h.off(pe, re)), Se && h && Se.split(" ").forEach((pe) => h.store.off(pe, re));
    };
  }, [h, H]), Ye.useEffect(() => {
    Z.current && z && de(V);
  }, [h, M, z]);
  const ke = [he, h, z];
  if (ke.t = he, ke.i18n = h, ke.ready = z, z || !z && !P) return ke;
  throw new Promise((ee) => {
    r.lng ? $s(h, r.lng, L, () => ee()) : Us(h, L, () => ee());
  });
}, Nd = function(c) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(p) {
    function m(k) {
      let {
        forwardedRef: P,
        ...M
      } = k;
      const [L, z, Y] = bi(c, {
        ...M,
        keyPrefix: r.keyPrefix
      }), V = {
        ...M,
        t: L,
        i18n: z,
        tReady: Y
      };
      return r.withRef && P ? V.ref = P : !r.withRef && P && (V.forwardedRef = P), Ye.createElement(p, V);
    }
    m.displayName = `withI18nextTranslation(${pc(p)})`, m.WrappedComponent = p;
    const h = (k, P) => Ye.createElement(m, Object.assign({}, k, {
      forwardedRef: P
    }));
    return r.withRef ? Ye.forwardRef(h) : m;
  };
};
function Fd(c) {
  const {
    ns: r,
    children: l,
    ...p
  } = c, [m, h, k] = bi(r, p);
  return l(m, {
    i18n: h,
    lng: h.language
  }, k);
}
function Ld(c) {
  let {
    i18n: r,
    defaultNS: l,
    children: p
  } = c;
  const m = Ye.useMemo(() => ({
    i18n: r,
    defaultNS: l
  }), [r, l]);
  return Ye.createElement(Ur.Provider, {
    value: m
  }, p);
}
const kc = function(c, r) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    i18n: p
  } = l, {
    i18n: m
  } = Ye.useContext(Ur) || {}, h = p || m || fr();
  h.options && h.options.isClone || (c && !h.initializedStoreOnce && (h.services.resourceStore.data = c, h.options.ns = Object.values(c).reduce((k, P) => (Object.keys(P).forEach((M) => {
    k.indexOf(M) < 0 && k.push(M);
  }), k), h.options.ns), h.initializedStoreOnce = !0, h.isInitialized = !0), r && !h.initializedLanguageOnce && (h.changeLanguage(r), h.initializedLanguageOnce = !0));
}, Vd = () => function(r) {
  function l(p) {
    let {
      initialI18nStore: m,
      initialLanguage: h,
      ...k
    } = p;
    return kc(m, h), Ye.createElement(r, {
      ...k
    });
  }
  return l.getInitialProps = yc(r), l.displayName = `withI18nextSSR(${pc(r)})`, l.WrappedComponent = r, l;
}, Ud = () => "", $d = () => "", Kd = () => "", jd = () => "", Hd = () => "", Gd = () => "", zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nContext: Ur,
  I18nextProvider: Ld,
  Trans: Od,
  TransWithoutContext: wc,
  Translation: Fd,
  composeInitialProps: yc,
  date: Ud,
  getDefaults: yi,
  getI18n: fr,
  getInitialProps: bc,
  initReactI18next: Dd,
  number: Kd,
  plural: Hd,
  select: jd,
  selectOrdinal: Gd,
  setDefaults: fc,
  setI18n: gc,
  time: $d,
  useSSR: kc,
  useTranslation: bi,
  withSSR: Vd,
  withTranslation: Nd
}, Symbol.toStringTag, { value: "Module" })), qd = /* @__PURE__ */ ec(zd), We = (c) => typeof c == "string", Nr = () => {
  let c, r;
  const l = new Promise((p, m) => {
    c = p, r = m;
  });
  return l.resolve = c, l.reject = r, l;
}, Ks = (c) => c == null ? "" : "" + c, Jd = (c, r, l) => {
  c.forEach((p) => {
    r[p] && (l[p] = r[p]);
  });
}, Zd = /###/g, js = (c) => c && c.indexOf("###") > -1 ? c.replace(Zd, ".") : c, Hs = (c) => !c || We(c), Fr = (c, r, l) => {
  const p = We(r) ? r.split(".") : r;
  let m = 0;
  for (; m < p.length - 1; ) {
    if (Hs(c)) return {};
    const h = js(p[m]);
    !c[h] && l && (c[h] = new l()), Object.prototype.hasOwnProperty.call(c, h) ? c = c[h] : c = {}, ++m;
  }
  return Hs(c) ? {} : {
    obj: c,
    k: js(p[m])
  };
}, Gs = (c, r, l) => {
  const {
    obj: p,
    k: m
  } = Fr(c, r, Object);
  if (p !== void 0 || r.length === 1) {
    p[m] = l;
    return;
  }
  let h = r[r.length - 1], k = r.slice(0, r.length - 1), P = Fr(c, k, Object);
  for (; P.obj === void 0 && k.length; )
    h = `${k[k.length - 1]}.${h}`, k = k.slice(0, k.length - 1), P = Fr(c, k, Object), P && P.obj && typeof P.obj[`${P.k}.${h}`] < "u" && (P.obj = void 0);
  P.obj[`${P.k}.${h}`] = l;
}, Yd = (c, r, l, p) => {
  const {
    obj: m,
    k: h
  } = Fr(c, r, Object);
  m[h] = m[h] || [], m[h].push(l);
}, go = (c, r) => {
  const {
    obj: l,
    k: p
  } = Fr(c, r);
  if (l)
    return l[p];
}, Qd = (c, r, l) => {
  const p = go(c, l);
  return p !== void 0 ? p : go(r, l);
}, Sc = (c, r, l) => {
  for (const p in r)
    p !== "__proto__" && p !== "constructor" && (p in c ? We(c[p]) || c[p] instanceof String || We(r[p]) || r[p] instanceof String ? l && (c[p] = r[p]) : Sc(c[p], r[p], l) : c[p] = r[p]);
  return c;
}, ir = (c) => c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Xd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const ep = (c) => We(c) ? c.replace(/[&<>"'\/]/g, (r) => Xd[r]) : c;
class tp {
  constructor(r) {
    this.capacity = r, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(r) {
    const l = this.regExpMap.get(r);
    if (l !== void 0)
      return l;
    const p = new RegExp(r);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(r, p), this.regExpQueue.push(r), p;
  }
}
const np = [" ", ",", "?", "!", ";"], ap = new tp(20), rp = (c, r, l) => {
  r = r || "", l = l || "";
  const p = np.filter((k) => r.indexOf(k) < 0 && l.indexOf(k) < 0);
  if (p.length === 0) return !0;
  const m = ap.getRegExp(`(${p.map((k) => k === "?" ? "\\?" : k).join("|")})`);
  let h = !m.test(c);
  if (!h) {
    const k = c.indexOf(l);
    k > 0 && !m.test(c.substring(0, k)) && (h = !0);
  }
  return h;
}, di = function(c, r) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!c) return;
  if (c[r]) return c[r];
  const p = r.split(l);
  let m = c;
  for (let h = 0; h < p.length; ) {
    if (!m || typeof m != "object")
      return;
    let k, P = "";
    for (let M = h; M < p.length; ++M)
      if (M !== h && (P += l), P += p[M], k = m[P], k !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof k) > -1 && M < p.length - 1)
          continue;
        h += M - h + 1;
        break;
      }
    m = k;
  }
  return m;
}, mo = (c) => c && c.replace("_", "-"), op = {
  type: "logger",
  log(c) {
    this.output("log", c);
  },
  warn(c) {
    this.output("warn", c);
  },
  error(c) {
    this.output("error", c);
  },
  output(c, r) {
    console && console[c] && console[c].apply(console, r);
  }
};
class wo {
  constructor(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, l);
  }
  init(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = l.prefix || "i18next:", this.logger = r || op, this.options = l, this.debug = l.debug;
  }
  log() {
    for (var r = arguments.length, l = new Array(r), p = 0; p < r; p++)
      l[p] = arguments[p];
    return this.forward(l, "log", "", !0);
  }
  warn() {
    for (var r = arguments.length, l = new Array(r), p = 0; p < r; p++)
      l[p] = arguments[p];
    return this.forward(l, "warn", "", !0);
  }
  error() {
    for (var r = arguments.length, l = new Array(r), p = 0; p < r; p++)
      l[p] = arguments[p];
    return this.forward(l, "error", "");
  }
  deprecate() {
    for (var r = arguments.length, l = new Array(r), p = 0; p < r; p++)
      l[p] = arguments[p];
    return this.forward(l, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(r, l, p, m) {
    return m && !this.debug ? null : (We(r[0]) && (r[0] = `${p}${this.prefix} ${r[0]}`), this.logger[l](r));
  }
  create(r) {
    return new wo(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options
    });
  }
  clone(r) {
    return r = r || this.options, r.prefix = r.prefix || this.prefix, new wo(this.logger, r);
  }
}
var En = new wo();
class bo {
  constructor() {
    this.observers = {};
  }
  on(r, l) {
    return r.split(" ").forEach((p) => {
      this.observers[p] || (this.observers[p] = /* @__PURE__ */ new Map());
      const m = this.observers[p].get(l) || 0;
      this.observers[p].set(l, m + 1);
    }), this;
  }
  off(r, l) {
    if (this.observers[r]) {
      if (!l) {
        delete this.observers[r];
        return;
      }
      this.observers[r].delete(l);
    }
  }
  emit(r) {
    for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), m = 1; m < l; m++)
      p[m - 1] = arguments[m];
    this.observers[r] && Array.from(this.observers[r].entries()).forEach((k) => {
      let [P, M] = k;
      for (let L = 0; L < M; L++)
        P(...p);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((k) => {
      let [P, M] = k;
      for (let L = 0; L < M; L++)
        P.apply(P, [r, ...p]);
    });
  }
}
class zs extends bo {
  constructor(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = r || {}, this.options = l, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
  }
  removeNamespaces(r) {
    const l = this.options.ns.indexOf(r);
    l > -1 && this.options.ns.splice(l, 1);
  }
  getResource(r, l, p) {
    let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const h = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator, k = m.ignoreJSONStructure !== void 0 ? m.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let P;
    r.indexOf(".") > -1 ? P = r.split(".") : (P = [r, l], p && (Array.isArray(p) ? P.push(...p) : We(p) && h ? P.push(...p.split(h)) : P.push(p)));
    const M = go(this.data, P);
    return !M && !l && !p && r.indexOf(".") > -1 && (r = P[0], l = P[1], p = P.slice(2).join(".")), M || !k || !We(p) ? M : di(this.data && this.data[r] && this.data[r][l], p, h);
  }
  addResource(r, l, p, m) {
    let h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const k = h.keySeparator !== void 0 ? h.keySeparator : this.options.keySeparator;
    let P = [r, l];
    p && (P = P.concat(k ? p.split(k) : p)), r.indexOf(".") > -1 && (P = r.split("."), m = l, l = P[1]), this.addNamespaces(l), Gs(this.data, P, m), h.silent || this.emit("added", r, l, p, m);
  }
  addResources(r, l, p) {
    let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const h in p)
      (We(p[h]) || Array.isArray(p[h])) && this.addResource(r, l, h, p[h], {
        silent: !0
      });
    m.silent || this.emit("added", r, l, p);
  }
  addResourceBundle(r, l, p, m, h) {
    let k = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, P = [r, l];
    r.indexOf(".") > -1 && (P = r.split("."), m = p, p = l, l = P[1]), this.addNamespaces(l);
    let M = go(this.data, P) || {};
    k.skipCopy || (p = JSON.parse(JSON.stringify(p))), m ? Sc(M, p, h) : M = {
      ...M,
      ...p
    }, Gs(this.data, P, M), k.silent || this.emit("added", r, l, p);
  }
  removeResourceBundle(r, l) {
    this.hasResourceBundle(r, l) && delete this.data[r][l], this.removeNamespaces(l), this.emit("removed", r, l);
  }
  hasResourceBundle(r, l) {
    return this.getResource(r, l) !== void 0;
  }
  getResourceBundle(r, l) {
    return l || (l = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(r, l)
    } : this.getResource(r, l);
  }
  getDataByLanguage(r) {
    return this.data[r];
  }
  hasLanguageSomeTranslations(r) {
    const l = this.getDataByLanguage(r);
    return !!(l && Object.keys(l) || []).find((m) => l[m] && Object.keys(l[m]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Pc = {
  processors: {},
  addPostProcessor(c) {
    this.processors[c.name] = c;
  },
  handle(c, r, l, p, m) {
    return c.forEach((h) => {
      this.processors[h] && (r = this.processors[h].process(r, l, p, m));
    }), r;
  }
};
const qs = {};
class yo extends bo {
  constructor(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Jd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this), this.options = l, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = En.create("translator");
  }
  changeLanguage(r) {
    r && (this.language = r);
  }
  exists(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (r == null)
      return !1;
    const p = this.resolve(r, l);
    return p && p.res !== void 0;
  }
  extractFromKey(r, l) {
    let p = l.nsSeparator !== void 0 ? l.nsSeparator : this.options.nsSeparator;
    p === void 0 && (p = ":");
    const m = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let h = l.ns || this.options.defaultNS || [];
    const k = p && r.indexOf(p) > -1, P = !this.options.userDefinedKeySeparator && !l.keySeparator && !this.options.userDefinedNsSeparator && !l.nsSeparator && !rp(r, p, m);
    if (k && !P) {
      const M = r.match(this.interpolator.nestingRegexp);
      if (M && M.length > 0)
        return {
          key: r,
          namespaces: We(h) ? [h] : h
        };
      const L = r.split(p);
      (p !== m || p === m && this.options.ns.indexOf(L[0]) > -1) && (h = L.shift()), r = L.join(m);
    }
    return {
      key: r,
      namespaces: We(h) ? [h] : h
    };
  }
  translate(r, l, p) {
    if (typeof l != "object" && this.options.overloadTranslationOptionHandler && (l = this.options.overloadTranslationOptionHandler(arguments)), typeof l == "object" && (l = {
      ...l
    }), l || (l = {}), r == null) return "";
    Array.isArray(r) || (r = [String(r)]);
    const m = l.returnDetails !== void 0 ? l.returnDetails : this.options.returnDetails, h = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, {
      key: k,
      namespaces: P
    } = this.extractFromKey(r[r.length - 1], l), M = P[P.length - 1], L = l.lng || this.language, z = l.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (L && L.toLowerCase() === "cimode") {
      if (z) {
        const ee = l.nsSeparator || this.options.nsSeparator;
        return m ? {
          res: `${M}${ee}${k}`,
          usedKey: k,
          exactUsedKey: k,
          usedLng: L,
          usedNS: M,
          usedParams: this.getUsedParamsDetails(l)
        } : `${M}${ee}${k}`;
      }
      return m ? {
        res: k,
        usedKey: k,
        exactUsedKey: k,
        usedLng: L,
        usedNS: M,
        usedParams: this.getUsedParamsDetails(l)
      } : k;
    }
    const Y = this.resolve(r, l);
    let V = Y && Y.res;
    const O = Y && Y.usedKey || k, he = Y && Y.exactUsedKey || k, de = Object.prototype.toString.apply(V), H = ["[object Number]", "[object Function]", "[object RegExp]"], Pe = l.joinArrays !== void 0 ? l.joinArrays : this.options.joinArrays, Z = !this.i18nFormat || this.i18nFormat.handleAsObject, ke = !We(V) && typeof V != "boolean" && typeof V != "number";
    if (Z && V && ke && H.indexOf(de) < 0 && !(We(Pe) && Array.isArray(V))) {
      if (!l.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const ee = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(O, V, {
          ...l,
          ns: P
        }) : `key '${k} (${this.language})' returned an object instead of string.`;
        return m ? (Y.res = ee, Y.usedParams = this.getUsedParamsDetails(l), Y) : ee;
      }
      if (h) {
        const ee = Array.isArray(V), Se = ee ? [] : {}, re = ee ? he : O;
        for (const pe in V)
          if (Object.prototype.hasOwnProperty.call(V, pe)) {
            const rt = `${re}${h}${pe}`;
            Se[pe] = this.translate(rt, {
              ...l,
              joinArrays: !1,
              ns: P
            }), Se[pe] === rt && (Se[pe] = V[pe]);
          }
        V = Se;
      }
    } else if (Z && We(Pe) && Array.isArray(V))
      V = V.join(Pe), V && (V = this.extendTranslation(V, r, l, p));
    else {
      let ee = !1, Se = !1;
      const re = l.count !== void 0 && !We(l.count), pe = yo.hasDefaultValue(l), rt = re ? this.pluralResolver.getSuffix(L, l.count, l) : "", He = l.ordinal && re ? this.pluralResolver.getSuffix(L, l.count, {
        ordinal: !1
      }) : "", $e = re && !l.ordinal && l.count === 0 && this.pluralResolver.shouldUseIntlApi(), pt = $e && l[`defaultValue${this.options.pluralSeparator}zero`] || l[`defaultValue${rt}`] || l[`defaultValue${He}`] || l.defaultValue;
      !this.isValidLookup(V) && pe && (ee = !0, V = pt), this.isValidLookup(V) || (Se = !0, V = k);
      const Qe = (l.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Se ? void 0 : V, Mt = pe && pt !== V && this.options.updateMissing;
      if (Se || ee || Mt) {
        if (this.logger.log(Mt ? "updateKey" : "missingKey", L, M, k, Mt ? pt : V), h) {
          const Ze = this.resolve(k, {
            ...l,
            keySeparator: !1
          });
          Ze && Ze.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Ie = [];
        const Xe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, l.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Xe && Xe[0])
          for (let Ze = 0; Ze < Xe.length; Ze++)
            Ie.push(Xe[Ze]);
        else this.options.saveMissingTo === "all" ? Ie = this.languageUtils.toResolveHierarchy(l.lng || this.language) : Ie.push(l.lng || this.language);
        const Gt = (Ze, Tt, Re) => {
          const zt = pe && Re !== V ? Re : Qe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(Ze, M, Tt, zt, Mt, l) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(Ze, M, Tt, zt, Mt, l), this.emit("missingKey", Ze, M, Tt, V);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && re ? Ie.forEach((Ze) => {
          const Tt = this.pluralResolver.getSuffixes(Ze, l);
          $e && l[`defaultValue${this.options.pluralSeparator}zero`] && Tt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Tt.push(`${this.options.pluralSeparator}zero`), Tt.forEach((Re) => {
            Gt([Ze], k + Re, l[`defaultValue${Re}`] || pt);
          });
        }) : Gt(Ie, k, pt));
      }
      V = this.extendTranslation(V, r, l, Y, p), Se && V === k && this.options.appendNamespaceToMissingKey && (V = `${M}:${k}`), (Se || ee) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? V = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${M}:${k}` : k, ee ? V : void 0) : V = this.options.parseMissingKeyHandler(V));
    }
    return m ? (Y.res = V, Y.usedParams = this.getUsedParamsDetails(l), Y) : V;
  }
  extendTranslation(r, l, p, m, h) {
    var k = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      r = this.i18nFormat.parse(r, {
        ...this.options.interpolation.defaultVariables,
        ...p
      }, p.lng || this.language || m.usedLng, m.usedNS, m.usedKey, {
        resolved: m
      });
    else if (!p.skipInterpolation) {
      p.interpolation && this.interpolator.init({
        ...p,
        interpolation: {
          ...this.options.interpolation,
          ...p.interpolation
        }
      });
      const L = We(r) && (p && p.interpolation && p.interpolation.skipOnVariables !== void 0 ? p.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let z;
      if (L) {
        const V = r.match(this.interpolator.nestingRegexp);
        z = V && V.length;
      }
      let Y = p.replace && !We(p.replace) ? p.replace : p;
      if (this.options.interpolation.defaultVariables && (Y = {
        ...this.options.interpolation.defaultVariables,
        ...Y
      }), r = this.interpolator.interpolate(r, Y, p.lng || this.language || m.usedLng, p), L) {
        const V = r.match(this.interpolator.nestingRegexp), O = V && V.length;
        z < O && (p.nest = !1);
      }
      !p.lng && this.options.compatibilityAPI !== "v1" && m && m.res && (p.lng = this.language || m.usedLng), p.nest !== !1 && (r = this.interpolator.nest(r, function() {
        for (var V = arguments.length, O = new Array(V), he = 0; he < V; he++)
          O[he] = arguments[he];
        return h && h[0] === O[0] && !p.context ? (k.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${l[0]}`), null) : k.translate(...O, l);
      }, p)), p.interpolation && this.interpolator.reset();
    }
    const P = p.postProcess || this.options.postProcess, M = We(P) ? [P] : P;
    return r != null && M && M.length && p.applyPostProcessor !== !1 && (r = Pc.handle(M, r, l, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...m,
        usedParams: this.getUsedParamsDetails(p)
      },
      ...p
    } : p, this)), r;
  }
  resolve(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p, m, h, k, P;
    return We(r) && (r = [r]), r.forEach((M) => {
      if (this.isValidLookup(p)) return;
      const L = this.extractFromKey(M, l), z = L.key;
      m = z;
      let Y = L.namespaces;
      this.options.fallbackNS && (Y = Y.concat(this.options.fallbackNS));
      const V = l.count !== void 0 && !We(l.count), O = V && !l.ordinal && l.count === 0 && this.pluralResolver.shouldUseIntlApi(), he = l.context !== void 0 && (We(l.context) || typeof l.context == "number") && l.context !== "", de = l.lngs ? l.lngs : this.languageUtils.toResolveHierarchy(l.lng || this.language, l.fallbackLng);
      Y.forEach((H) => {
        this.isValidLookup(p) || (P = H, !qs[`${de[0]}-${H}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(P) && (qs[`${de[0]}-${H}`] = !0, this.logger.warn(`key "${m}" for languages "${de.join(", ")}" won't get resolved as namespace "${P}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), de.forEach((Pe) => {
          if (this.isValidLookup(p)) return;
          k = Pe;
          const Z = [z];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(Z, z, Pe, H, l);
          else {
            let ee;
            V && (ee = this.pluralResolver.getSuffix(Pe, l.count, l));
            const Se = `${this.options.pluralSeparator}zero`, re = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (V && (Z.push(z + ee), l.ordinal && ee.indexOf(re) === 0 && Z.push(z + ee.replace(re, this.options.pluralSeparator)), O && Z.push(z + Se)), he) {
              const pe = `${z}${this.options.contextSeparator}${l.context}`;
              Z.push(pe), V && (Z.push(pe + ee), l.ordinal && ee.indexOf(re) === 0 && Z.push(pe + ee.replace(re, this.options.pluralSeparator)), O && Z.push(pe + Se));
            }
          }
          let ke;
          for (; ke = Z.pop(); )
            this.isValidLookup(p) || (h = ke, p = this.getResource(Pe, H, ke, l));
        }));
      });
    }), {
      res: p,
      usedKey: m,
      exactUsedKey: h,
      usedLng: k,
      usedNS: P
    };
  }
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "");
  }
  getResource(r, l, p) {
    let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(r, l, p, m) : this.resourceStore.getResource(r, l, p, m);
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const l = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], p = r.replace && !We(r.replace);
    let m = p ? r.replace : r;
    if (p && typeof r.count < "u" && (m.count = r.count), this.options.interpolation.defaultVariables && (m = {
      ...this.options.interpolation.defaultVariables,
      ...m
    }), !p) {
      m = {
        ...m
      };
      for (const h of l)
        delete m[h];
    }
    return m;
  }
  static hasDefaultValue(r) {
    const l = "defaultValue";
    for (const p in r)
      if (Object.prototype.hasOwnProperty.call(r, p) && l === p.substring(0, l.length) && r[p] !== void 0)
        return !0;
    return !1;
  }
}
const oi = (c) => c.charAt(0).toUpperCase() + c.slice(1);
class Js {
  constructor(r) {
    this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = En.create("languageUtils");
  }
  getScriptPartFromCode(r) {
    if (r = mo(r), !r || r.indexOf("-") < 0) return null;
    const l = r.split("-");
    return l.length === 2 || (l.pop(), l[l.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(l.join("-"));
  }
  getLanguagePartFromCode(r) {
    if (r = mo(r), !r || r.indexOf("-") < 0) return r;
    const l = r.split("-");
    return this.formatLanguageCode(l[0]);
  }
  formatLanguageCode(r) {
    if (We(r) && r.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let m = Intl.getCanonicalLocales(r)[0];
          if (m && this.options.lowerCaseLng && (m = m.toLowerCase()), m) return m;
        } catch {
        }
      const l = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p = r.split("-");
      return this.options.lowerCaseLng ? p = p.map((m) => m.toLowerCase()) : p.length === 2 ? (p[0] = p[0].toLowerCase(), p[1] = p[1].toUpperCase(), l.indexOf(p[1].toLowerCase()) > -1 && (p[1] = oi(p[1].toLowerCase()))) : p.length === 3 && (p[0] = p[0].toLowerCase(), p[1].length === 2 && (p[1] = p[1].toUpperCase()), p[0] !== "sgn" && p[2].length === 2 && (p[2] = p[2].toUpperCase()), l.indexOf(p[1].toLowerCase()) > -1 && (p[1] = oi(p[1].toLowerCase())), l.indexOf(p[2].toLowerCase()) > -1 && (p[2] = oi(p[2].toLowerCase()))), p.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
  }
  isSupportedCode(r) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
  }
  getBestMatchFromCodes(r) {
    if (!r) return null;
    let l;
    return r.forEach((p) => {
      if (l) return;
      const m = this.formatLanguageCode(p);
      (!this.options.supportedLngs || this.isSupportedCode(m)) && (l = m);
    }), !l && this.options.supportedLngs && r.forEach((p) => {
      if (l) return;
      const m = this.getLanguagePartFromCode(p);
      if (this.isSupportedCode(m)) return l = m;
      l = this.options.supportedLngs.find((h) => {
        if (h === m) return h;
        if (!(h.indexOf("-") < 0 && m.indexOf("-") < 0) && (h.indexOf("-") > 0 && m.indexOf("-") < 0 && h.substring(0, h.indexOf("-")) === m || h.indexOf(m) === 0 && m.length > 1))
          return h;
      });
    }), l || (l = this.getFallbackCodes(this.options.fallbackLng)[0]), l;
  }
  getFallbackCodes(r, l) {
    if (!r) return [];
    if (typeof r == "function" && (r = r(l)), We(r) && (r = [r]), Array.isArray(r)) return r;
    if (!l) return r.default || [];
    let p = r[l];
    return p || (p = r[this.getScriptPartFromCode(l)]), p || (p = r[this.formatLanguageCode(l)]), p || (p = r[this.getLanguagePartFromCode(l)]), p || (p = r.default), p || [];
  }
  toResolveHierarchy(r, l) {
    const p = this.getFallbackCodes(l || this.options.fallbackLng || [], r), m = [], h = (k) => {
      k && (this.isSupportedCode(k) ? m.push(k) : this.logger.warn(`rejecting language code not found in supportedLngs: ${k}`));
    };
    return We(r) && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && h(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && h(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && h(this.getLanguagePartFromCode(r))) : We(r) && h(this.formatLanguageCode(r)), p.forEach((k) => {
      m.indexOf(k) < 0 && h(this.formatLanguageCode(k));
    }), m;
  }
}
let ip = [{
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
}], sp = {
  1: (c) => +(c > 1),
  2: (c) => +(c != 1),
  3: (c) => 0,
  4: (c) => c % 10 == 1 && c % 100 != 11 ? 0 : c % 10 >= 2 && c % 10 <= 4 && (c % 100 < 10 || c % 100 >= 20) ? 1 : 2,
  5: (c) => c == 0 ? 0 : c == 1 ? 1 : c == 2 ? 2 : c % 100 >= 3 && c % 100 <= 10 ? 3 : c % 100 >= 11 ? 4 : 5,
  6: (c) => c == 1 ? 0 : c >= 2 && c <= 4 ? 1 : 2,
  7: (c) => c == 1 ? 0 : c % 10 >= 2 && c % 10 <= 4 && (c % 100 < 10 || c % 100 >= 20) ? 1 : 2,
  8: (c) => c == 1 ? 0 : c == 2 ? 1 : c != 8 && c != 11 ? 2 : 3,
  9: (c) => +(c >= 2),
  10: (c) => c == 1 ? 0 : c == 2 ? 1 : c < 7 ? 2 : c < 11 ? 3 : 4,
  11: (c) => c == 1 || c == 11 ? 0 : c == 2 || c == 12 ? 1 : c > 2 && c < 20 ? 2 : 3,
  12: (c) => +(c % 10 != 1 || c % 100 == 11),
  13: (c) => +(c !== 0),
  14: (c) => c == 1 ? 0 : c == 2 ? 1 : c == 3 ? 2 : 3,
  15: (c) => c % 10 == 1 && c % 100 != 11 ? 0 : c % 10 >= 2 && (c % 100 < 10 || c % 100 >= 20) ? 1 : 2,
  16: (c) => c % 10 == 1 && c % 100 != 11 ? 0 : c !== 0 ? 1 : 2,
  17: (c) => c == 1 || c % 10 == 1 && c % 100 != 11 ? 0 : 1,
  18: (c) => c == 0 ? 0 : c == 1 ? 1 : 2,
  19: (c) => c == 1 ? 0 : c == 0 || c % 100 > 1 && c % 100 < 11 ? 1 : c % 100 > 10 && c % 100 < 20 ? 2 : 3,
  20: (c) => c == 1 ? 0 : c == 0 || c % 100 > 0 && c % 100 < 20 ? 1 : 2,
  21: (c) => c % 100 == 1 ? 1 : c % 100 == 2 ? 2 : c % 100 == 3 || c % 100 == 4 ? 3 : 0,
  22: (c) => c == 1 ? 0 : c == 2 ? 1 : (c < 0 || c > 10) && c % 10 == 0 ? 2 : 3
};
const cp = ["v1", "v2", "v3"], lp = ["v4"], Zs = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, up = () => {
  const c = {};
  return ip.forEach((r) => {
    r.lngs.forEach((l) => {
      c[l] = {
        numbers: r.nr,
        plurals: sp[r.fc]
      };
    });
  }), c;
};
class dp {
  constructor(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = r, this.options = l, this.logger = En.create("pluralResolver"), (!this.options.compatibilityJSON || lp.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = up(), this.pluralRulesCache = {};
  }
  addRule(r, l) {
    this.rules[r] = l;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const p = mo(r === "dev" ? "en" : r), m = l.ordinal ? "ordinal" : "cardinal", h = JSON.stringify({
        cleanedCode: p,
        type: m
      });
      if (h in this.pluralRulesCache)
        return this.pluralRulesCache[h];
      let k;
      try {
        k = new Intl.PluralRules(p, {
          type: m
        });
      } catch {
        if (!r.match(/-|_/)) return;
        const M = this.languageUtils.getLanguagePartFromCode(r);
        k = this.getRule(M, l);
      }
      return this.pluralRulesCache[h] = k, k;
    }
    return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
  }
  needsPlural(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const p = this.getRule(r, l);
    return this.shouldUseIntlApi() ? p && p.resolvedOptions().pluralCategories.length > 1 : p && p.numbers.length > 1;
  }
  getPluralFormsOfKey(r, l) {
    let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, p).map((m) => `${l}${m}`);
  }
  getSuffixes(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const p = this.getRule(r, l);
    return p ? this.shouldUseIntlApi() ? p.resolvedOptions().pluralCategories.sort((m, h) => Zs[m] - Zs[h]).map((m) => `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${m}`) : p.numbers.map((m) => this.getSuffix(r, m, l)) : [];
  }
  getSuffix(r, l) {
    let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const m = this.getRule(r, p);
    return m ? this.shouldUseIntlApi() ? `${this.options.prepend}${p.ordinal ? `ordinal${this.options.prepend}` : ""}${m.select(l)}` : this.getSuffixRetroCompatible(m, l) : (this.logger.warn(`no plural rule found for: ${r}`), "");
  }
  getSuffixRetroCompatible(r, l) {
    const p = r.noAbs ? r.plurals(l) : r.plurals(Math.abs(l));
    let m = r.numbers[p];
    this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (m === 2 ? m = "plural" : m === 1 && (m = ""));
    const h = () => this.options.prepend && m.toString() ? this.options.prepend + m.toString() : m.toString();
    return this.options.compatibilityJSON === "v1" ? m === 1 ? "" : typeof m == "number" ? `_plural_${m.toString()}` : h() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? h() : this.options.prepend && p.toString() ? this.options.prepend + p.toString() : p.toString();
  }
  shouldUseIntlApi() {
    return !cp.includes(this.options.compatibilityJSON);
  }
}
const Ys = function(c, r, l) {
  let p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, h = Qd(c, r, l);
  return !h && m && We(l) && (h = di(c, l, p), h === void 0 && (h = di(r, l, p))), h;
}, ii = (c) => c.replace(/\$/g, "$$$$");
class pp {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = En.create("interpolator"), this.options = r, this.format = r.interpolation && r.interpolation.format || ((l) => l), this.init(r);
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    r.interpolation || (r.interpolation = {
      escapeValue: !0
    });
    const {
      escape: l,
      escapeValue: p,
      useRawValueToEscape: m,
      prefix: h,
      prefixEscaped: k,
      suffix: P,
      suffixEscaped: M,
      formatSeparator: L,
      unescapeSuffix: z,
      unescapePrefix: Y,
      nestingPrefix: V,
      nestingPrefixEscaped: O,
      nestingSuffix: he,
      nestingSuffixEscaped: de,
      nestingOptionsSeparator: H,
      maxReplaces: Pe,
      alwaysFormat: Z
    } = r.interpolation;
    this.escape = l !== void 0 ? l : ep, this.escapeValue = p !== void 0 ? p : !0, this.useRawValueToEscape = m !== void 0 ? m : !1, this.prefix = h ? ir(h) : k || "{{", this.suffix = P ? ir(P) : M || "}}", this.formatSeparator = L || ",", this.unescapePrefix = z ? "" : Y || "-", this.unescapeSuffix = this.unescapePrefix ? "" : z || "", this.nestingPrefix = V ? ir(V) : O || ir("$t("), this.nestingSuffix = he ? ir(he) : de || ir(")"), this.nestingOptionsSeparator = H || ",", this.maxReplaces = Pe || 1e3, this.alwaysFormat = Z !== void 0 ? Z : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const r = (l, p) => l && l.source === p ? (l.lastIndex = 0, l) : new RegExp(p, "g");
    this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(r, l, p, m) {
    let h, k, P;
    const M = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, L = (O) => {
      if (O.indexOf(this.formatSeparator) < 0) {
        const Pe = Ys(l, M, O, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(Pe, void 0, p, {
          ...m,
          ...l,
          interpolationkey: O
        }) : Pe;
      }
      const he = O.split(this.formatSeparator), de = he.shift().trim(), H = he.join(this.formatSeparator).trim();
      return this.format(Ys(l, M, de, this.options.keySeparator, this.options.ignoreJSONStructure), H, p, {
        ...m,
        ...l,
        interpolationkey: de
      });
    };
    this.resetRegExp();
    const z = m && m.missingInterpolationHandler || this.options.missingInterpolationHandler, Y = m && m.interpolation && m.interpolation.skipOnVariables !== void 0 ? m.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (O) => ii(O)
    }, {
      regex: this.regexp,
      safeValue: (O) => this.escapeValue ? ii(this.escape(O)) : ii(O)
    }].forEach((O) => {
      for (P = 0; h = O.regex.exec(r); ) {
        const he = h[1].trim();
        if (k = L(he), k === void 0)
          if (typeof z == "function") {
            const H = z(r, h, m);
            k = We(H) ? H : "";
          } else if (m && Object.prototype.hasOwnProperty.call(m, he))
            k = "";
          else if (Y) {
            k = h[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${he} for interpolating ${r}`), k = "";
        else !We(k) && !this.useRawValueToEscape && (k = Ks(k));
        const de = O.safeValue(k);
        if (r = r.replace(h[0], de), Y ? (O.regex.lastIndex += k.length, O.regex.lastIndex -= h[0].length) : O.regex.lastIndex = 0, P++, P >= this.maxReplaces)
          break;
      }
    }), r;
  }
  nest(r, l) {
    let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, m, h, k;
    const P = (M, L) => {
      const z = this.nestingOptionsSeparator;
      if (M.indexOf(z) < 0) return M;
      const Y = M.split(new RegExp(`${z}[ ]*{`));
      let V = `{${Y[1]}`;
      M = Y[0], V = this.interpolate(V, k);
      const O = V.match(/'/g), he = V.match(/"/g);
      (O && O.length % 2 === 0 && !he || he.length % 2 !== 0) && (V = V.replace(/'/g, '"'));
      try {
        k = JSON.parse(V), L && (k = {
          ...L,
          ...k
        });
      } catch (de) {
        return this.logger.warn(`failed parsing options string in nesting for key ${M}`, de), `${M}${z}${V}`;
      }
      return k.defaultValue && k.defaultValue.indexOf(this.prefix) > -1 && delete k.defaultValue, M;
    };
    for (; m = this.nestingRegexp.exec(r); ) {
      let M = [];
      k = {
        ...p
      }, k = k.replace && !We(k.replace) ? k.replace : k, k.applyPostProcessor = !1, delete k.defaultValue;
      let L = !1;
      if (m[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(m[1])) {
        const z = m[1].split(this.formatSeparator).map((Y) => Y.trim());
        m[1] = z.shift(), M = z, L = !0;
      }
      if (h = l(P.call(this, m[1].trim(), k), k), h && m[0] === r && !We(h)) return h;
      We(h) || (h = Ks(h)), h || (this.logger.warn(`missed to resolve ${m[1]} for nesting ${r}`), h = ""), L && (h = M.reduce((z, Y) => this.format(z, Y, p.lng, {
        ...p,
        interpolationkey: m[1].trim()
      }), h.trim())), r = r.replace(m[0], h), this.regexp.lastIndex = 0;
    }
    return r;
  }
}
const fp = (c) => {
  let r = c.toLowerCase().trim();
  const l = {};
  if (c.indexOf("(") > -1) {
    const p = c.split("(");
    r = p[0].toLowerCase().trim();
    const m = p[1].substring(0, p[1].length - 1);
    r === "currency" && m.indexOf(":") < 0 ? l.currency || (l.currency = m.trim()) : r === "relativetime" && m.indexOf(":") < 0 ? l.range || (l.range = m.trim()) : m.split(";").forEach((k) => {
      if (k) {
        const [P, ...M] = k.split(":"), L = M.join(":").trim().replace(/^'+|'+$/g, ""), z = P.trim();
        l[z] || (l[z] = L), L === "false" && (l[z] = !1), L === "true" && (l[z] = !0), isNaN(L) || (l[z] = parseInt(L, 10));
      }
    });
  }
  return {
    formatName: r,
    formatOptions: l
  };
}, sr = (c) => {
  const r = {};
  return (l, p, m) => {
    let h = m;
    m && m.interpolationkey && m.formatParams && m.formatParams[m.interpolationkey] && m[m.interpolationkey] && (h = {
      ...h,
      [m.interpolationkey]: void 0
    });
    const k = p + JSON.stringify(h);
    let P = r[k];
    return P || (P = c(mo(p), m), r[k] = P), P(l);
  };
};
class hp {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = En.create("formatter"), this.options = r, this.formats = {
      number: sr((l, p) => {
        const m = new Intl.NumberFormat(l, {
          ...p
        });
        return (h) => m.format(h);
      }),
      currency: sr((l, p) => {
        const m = new Intl.NumberFormat(l, {
          ...p,
          style: "currency"
        });
        return (h) => m.format(h);
      }),
      datetime: sr((l, p) => {
        const m = new Intl.DateTimeFormat(l, {
          ...p
        });
        return (h) => m.format(h);
      }),
      relativetime: sr((l, p) => {
        const m = new Intl.RelativeTimeFormat(l, {
          ...p
        });
        return (h) => m.format(h, p.range || "day");
      }),
      list: sr((l, p) => {
        const m = new Intl.ListFormat(l, {
          ...p
        });
        return (h) => m.format(h);
      })
    }, this.init(r);
  }
  init(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = l.interpolation.formatSeparator || ",";
  }
  add(r, l) {
    this.formats[r.toLowerCase().trim()] = l;
  }
  addCached(r, l) {
    this.formats[r.toLowerCase().trim()] = sr(l);
  }
  format(r, l, p) {
    let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const h = l.split(this.formatSeparator);
    if (h.length > 1 && h[0].indexOf("(") > 1 && h[0].indexOf(")") < 0 && h.find((P) => P.indexOf(")") > -1)) {
      const P = h.findIndex((M) => M.indexOf(")") > -1);
      h[0] = [h[0], ...h.splice(1, P)].join(this.formatSeparator);
    }
    return h.reduce((P, M) => {
      const {
        formatName: L,
        formatOptions: z
      } = fp(M);
      if (this.formats[L]) {
        let Y = P;
        try {
          const V = m && m.formatParams && m.formatParams[m.interpolationkey] || {}, O = V.locale || V.lng || m.locale || m.lng || p;
          Y = this.formats[L](P, O, {
            ...z,
            ...m,
            ...V
          });
        } catch (V) {
          this.logger.warn(V);
        }
        return Y;
      } else
        this.logger.warn(`there was no format function for ${L}`);
      return P;
    }, r);
  }
}
const gp = (c, r) => {
  c.pending[r] !== void 0 && (delete c.pending[r], c.pendingCount--);
};
class mp extends bo {
  constructor(r, l, p) {
    let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = r, this.store = l, this.services = p, this.languageUtils = p.languageUtils, this.options = m, this.logger = En.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = m.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = m.maxRetries >= 0 ? m.maxRetries : 5, this.retryTimeout = m.retryTimeout >= 1 ? m.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(p, m.backend, m);
  }
  queueLoad(r, l, p, m) {
    const h = {}, k = {}, P = {}, M = {};
    return r.forEach((L) => {
      let z = !0;
      l.forEach((Y) => {
        const V = `${L}|${Y}`;
        !p.reload && this.store.hasResourceBundle(L, Y) ? this.state[V] = 2 : this.state[V] < 0 || (this.state[V] === 1 ? k[V] === void 0 && (k[V] = !0) : (this.state[V] = 1, z = !1, k[V] === void 0 && (k[V] = !0), h[V] === void 0 && (h[V] = !0), M[Y] === void 0 && (M[Y] = !0)));
      }), z || (P[L] = !0);
    }), (Object.keys(h).length || Object.keys(k).length) && this.queue.push({
      pending: k,
      pendingCount: Object.keys(k).length,
      loaded: {},
      errors: [],
      callback: m
    }), {
      toLoad: Object.keys(h),
      pending: Object.keys(k),
      toLoadLanguages: Object.keys(P),
      toLoadNamespaces: Object.keys(M)
    };
  }
  loaded(r, l, p) {
    const m = r.split("|"), h = m[0], k = m[1];
    l && this.emit("failedLoading", h, k, l), !l && p && this.store.addResourceBundle(h, k, p, void 0, void 0, {
      skipCopy: !0
    }), this.state[r] = l ? -1 : 2, l && p && (this.state[r] = 0);
    const P = {};
    this.queue.forEach((M) => {
      Yd(M.loaded, [h], k), gp(M, r), l && M.errors.push(l), M.pendingCount === 0 && !M.done && (Object.keys(M.loaded).forEach((L) => {
        P[L] || (P[L] = {});
        const z = M.loaded[L];
        z.length && z.forEach((Y) => {
          P[L][Y] === void 0 && (P[L][Y] = !0);
        });
      }), M.done = !0, M.errors.length ? M.callback(M.errors) : M.callback());
    }), this.emit("loaded", P), this.queue = this.queue.filter((M) => !M.done);
  }
  read(r, l, p) {
    let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, k = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return k(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: r,
        ns: l,
        fcName: p,
        tried: m,
        wait: h,
        callback: k
      });
      return;
    }
    this.readingCalls++;
    const P = (L, z) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const Y = this.waitingReads.shift();
        this.read(Y.lng, Y.ns, Y.fcName, Y.tried, Y.wait, Y.callback);
      }
      if (L && z && m < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, r, l, p, m + 1, h * 2, k);
        }, h);
        return;
      }
      k(L, z);
    }, M = this.backend[p].bind(this.backend);
    if (M.length === 2) {
      try {
        const L = M(r, l);
        L && typeof L.then == "function" ? L.then((z) => P(null, z)).catch(P) : P(null, L);
      } catch (L) {
        P(L);
      }
      return;
    }
    return M(r, l, P);
  }
  prepareLoading(r, l) {
    let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, m = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), m && m();
    We(r) && (r = this.languageUtils.toResolveHierarchy(r)), We(l) && (l = [l]);
    const h = this.queueLoad(r, l, p, m);
    if (!h.toLoad.length)
      return h.pending.length || m(), null;
    h.toLoad.forEach((k) => {
      this.loadOne(k);
    });
  }
  load(r, l, p) {
    this.prepareLoading(r, l, {}, p);
  }
  reload(r, l, p) {
    this.prepareLoading(r, l, {
      reload: !0
    }, p);
  }
  loadOne(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const p = r.split("|"), m = p[0], h = p[1];
    this.read(m, h, "read", void 0, void 0, (k, P) => {
      k && this.logger.warn(`${l}loading namespace ${h} for language ${m} failed`, k), !k && P && this.logger.log(`${l}loaded namespace ${h} for language ${m}`, P), this.loaded(r, k, P);
    });
  }
  saveMissing(r, l, p, m, h) {
    let k = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, P = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(l)) {
      this.logger.warn(`did not save key "${p}" as the namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(p == null || p === "")) {
      if (this.backend && this.backend.create) {
        const M = {
          ...k,
          isUpdate: h
        }, L = this.backend.create.bind(this.backend);
        if (L.length < 6)
          try {
            let z;
            L.length === 5 ? z = L(r, l, p, m, M) : z = L(r, l, p, m), z && typeof z.then == "function" ? z.then((Y) => P(null, Y)).catch(P) : P(null, z);
          } catch (z) {
            P(z);
          }
        else
          L(r, l, p, m, P, M);
      }
      !r || !r[0] || this.store.addResource(r[0], l, p, m);
    }
  }
}
const Qs = () => ({
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
  overloadTranslationOptionHandler: (c) => {
    let r = {};
    if (typeof c[1] == "object" && (r = c[1]), We(c[1]) && (r.defaultValue = c[1]), We(c[2]) && (r.tDescription = c[2]), typeof c[2] == "object" || typeof c[3] == "object") {
      const l = c[3] || c[2];
      Object.keys(l).forEach((p) => {
        r[p] = l[p];
      });
    }
    return r;
  },
  interpolation: {
    escapeValue: !0,
    format: (c) => c,
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
}), Xs = (c) => (We(c.ns) && (c.ns = [c.ns]), We(c.fallbackLng) && (c.fallbackLng = [c.fallbackLng]), We(c.fallbackNS) && (c.fallbackNS = [c.fallbackNS]), c.supportedLngs && c.supportedLngs.indexOf("cimode") < 0 && (c.supportedLngs = c.supportedLngs.concat(["cimode"])), c), po = () => {
}, wp = (c) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(c)).forEach((l) => {
    typeof c[l] == "function" && (c[l] = c[l].bind(c));
  });
};
class Vr extends bo {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Xs(r), this.services = {}, this.logger = En, this.modules = {
      external: []
    }, wp(this), l && !this.isInitialized && !r.isClone) {
      if (!this.options.initImmediate)
        return this.init(r, l), this;
      setTimeout(() => {
        this.init(r, l);
      }, 0);
    }
  }
  init() {
    var r = this;
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof l == "function" && (p = l, l = {}), !l.defaultNS && l.defaultNS !== !1 && l.ns && (We(l.ns) ? l.defaultNS = l.ns : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
    const m = Qs();
    this.options = {
      ...m,
      ...this.options,
      ...Xs(l)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...m.interpolation,
      ...this.options.interpolation
    }), l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator), l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator);
    const h = (z) => z ? typeof z == "function" ? new z() : z : null;
    if (!this.options.isClone) {
      this.modules.logger ? En.init(h(this.modules.logger), this.options) : En.init(null, this.options);
      let z;
      this.modules.formatter ? z = this.modules.formatter : typeof Intl < "u" && (z = hp);
      const Y = new Js(this.options);
      this.store = new zs(this.options.resources, this.options);
      const V = this.services;
      V.logger = En, V.resourceStore = this.store, V.languageUtils = Y, V.pluralResolver = new dp(Y, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), z && (!this.options.interpolation.format || this.options.interpolation.format === m.interpolation.format) && (V.formatter = h(z), V.formatter.init(V, this.options), this.options.interpolation.format = V.formatter.format.bind(V.formatter)), V.interpolator = new pp(this.options), V.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, V.backendConnector = new mp(h(this.modules.backend), V.resourceStore, V, this.options), V.backendConnector.on("*", function(O) {
        for (var he = arguments.length, de = new Array(he > 1 ? he - 1 : 0), H = 1; H < he; H++)
          de[H - 1] = arguments[H];
        r.emit(O, ...de);
      }), this.modules.languageDetector && (V.languageDetector = h(this.modules.languageDetector), V.languageDetector.init && V.languageDetector.init(V, this.options.detection, this.options)), this.modules.i18nFormat && (V.i18nFormat = h(this.modules.i18nFormat), V.i18nFormat.init && V.i18nFormat.init(this)), this.translator = new yo(this.services, this.options), this.translator.on("*", function(O) {
        for (var he = arguments.length, de = new Array(he > 1 ? he - 1 : 0), H = 1; H < he; H++)
          de[H - 1] = arguments[H];
        r.emit(O, ...de);
      }), this.modules.external.forEach((O) => {
        O.init && O.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, p || (p = po), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const z = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      z.length > 0 && z[0] !== "dev" && (this.options.lng = z[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((z) => {
      this[z] = function() {
        return r.store[z](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((z) => {
      this[z] = function() {
        return r.store[z](...arguments), r;
      };
    });
    const M = Nr(), L = () => {
      const z = (Y, V) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), M.resolve(V), p(Y, V);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return z(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, z);
    };
    return this.options.resources || !this.options.initImmediate ? L() : setTimeout(L, 0), M;
  }
  loadResources(r) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : po;
    const m = We(r) ? r : this.language;
    if (typeof r == "function" && (p = r), !this.options.resources || this.options.partialBundledLanguages) {
      if (m && m.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return p();
      const h = [], k = (P) => {
        if (!P || P === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(P).forEach((L) => {
          L !== "cimode" && h.indexOf(L) < 0 && h.push(L);
        });
      };
      m ? k(m) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((M) => k(M)), this.options.preload && this.options.preload.forEach((P) => k(P)), this.services.backendConnector.load(h, this.options.ns, (P) => {
        !P && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), p(P);
      });
    } else
      p(null);
  }
  reloadResources(r, l, p) {
    const m = Nr();
    return typeof r == "function" && (p = r, r = void 0), typeof l == "function" && (p = l, l = void 0), r || (r = this.languages), l || (l = this.options.ns), p || (p = po), this.services.backendConnector.reload(r, l, (h) => {
      m.resolve(), p(h);
    }), m;
  }
  use(r) {
    if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && Pc.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(["cimode", "dev"].indexOf(r) > -1))
      for (let l = 0; l < this.languages.length; l++) {
        const p = this.languages[l];
        if (!(["cimode", "dev"].indexOf(p) > -1) && this.store.hasLanguageSomeTranslations(p)) {
          this.resolvedLanguage = p;
          break;
        }
      }
  }
  changeLanguage(r, l) {
    var p = this;
    this.isLanguageChangingTo = r;
    const m = Nr();
    this.emit("languageChanging", r);
    const h = (M) => {
      this.language = M, this.languages = this.services.languageUtils.toResolveHierarchy(M), this.resolvedLanguage = void 0, this.setResolvedLanguage(M);
    }, k = (M, L) => {
      L ? (h(L), this.translator.changeLanguage(L), this.isLanguageChangingTo = void 0, this.emit("languageChanged", L), this.logger.log("languageChanged", L)) : this.isLanguageChangingTo = void 0, m.resolve(function() {
        return p.t(...arguments);
      }), l && l(M, function() {
        return p.t(...arguments);
      });
    }, P = (M) => {
      !r && !M && this.services.languageDetector && (M = []);
      const L = We(M) ? M : this.services.languageUtils.getBestMatchFromCodes(M);
      L && (this.language || h(L), this.translator.language || this.translator.changeLanguage(L), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(L)), this.loadResources(L, (z) => {
        k(z, L);
      });
    };
    return !r && this.services.languageDetector && !this.services.languageDetector.async ? P(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(P) : this.services.languageDetector.detect(P) : P(r), m;
  }
  getFixedT(r, l, p) {
    var m = this;
    const h = function(k, P) {
      let M;
      if (typeof P != "object") {
        for (var L = arguments.length, z = new Array(L > 2 ? L - 2 : 0), Y = 2; Y < L; Y++)
          z[Y - 2] = arguments[Y];
        M = m.options.overloadTranslationOptionHandler([k, P].concat(z));
      } else
        M = {
          ...P
        };
      M.lng = M.lng || h.lng, M.lngs = M.lngs || h.lngs, M.ns = M.ns || h.ns, M.keyPrefix !== "" && (M.keyPrefix = M.keyPrefix || p || h.keyPrefix);
      const V = m.options.keySeparator || ".";
      let O;
      return M.keyPrefix && Array.isArray(k) ? O = k.map((he) => `${M.keyPrefix}${V}${he}`) : O = M.keyPrefix ? `${M.keyPrefix}${V}${k}` : k, m.t(O, M);
    };
    return We(r) ? h.lng = r : h.lngs = r, h.ns = l, h.keyPrefix = p, h;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(r) {
    this.options.defaultNS = r;
  }
  hasLoadedNamespace(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const p = l.lng || this.resolvedLanguage || this.languages[0], m = this.options ? this.options.fallbackLng : !1, h = this.languages[this.languages.length - 1];
    if (p.toLowerCase() === "cimode") return !0;
    const k = (P, M) => {
      const L = this.services.backendConnector.state[`${P}|${M}`];
      return L === -1 || L === 0 || L === 2;
    };
    if (l.precheck) {
      const P = l.precheck(this, k);
      if (P !== void 0) return P;
    }
    return !!(this.hasResourceBundle(p, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || k(p, r) && (!m || k(h, r)));
  }
  loadNamespaces(r, l) {
    const p = Nr();
    return this.options.ns ? (We(r) && (r = [r]), r.forEach((m) => {
      this.options.ns.indexOf(m) < 0 && this.options.ns.push(m);
    }), this.loadResources((m) => {
      p.resolve(), l && l(m);
    }), p) : (l && l(), Promise.resolve());
  }
  loadLanguages(r, l) {
    const p = Nr();
    We(r) && (r = [r]);
    const m = this.options.preload || [], h = r.filter((k) => m.indexOf(k) < 0 && this.services.languageUtils.isSupportedCode(k));
    return h.length ? (this.options.preload = m.concat(h), this.loadResources((k) => {
      p.resolve(), l && l(k);
    }), p) : (l && l(), Promise.resolve());
  }
  dir(r) {
    if (r || (r = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !r) return "rtl";
    const l = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], p = this.services && this.services.languageUtils || new Js(Qs());
    return l.indexOf(p.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    return new Vr(r, l);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : po;
    const p = r.forkResourceStore;
    p && delete r.forkResourceStore;
    const m = {
      ...this.options,
      ...r,
      isClone: !0
    }, h = new Vr(m);
    return (r.debug !== void 0 || r.prefix !== void 0) && (h.logger = h.logger.clone(r)), ["store", "services", "language"].forEach((P) => {
      h[P] = this[P];
    }), h.services = {
      ...this.services
    }, h.services.utils = {
      hasLoadedNamespace: h.hasLoadedNamespace.bind(h)
    }, p && (h.store = new zs(this.store.data, m), h.services.resourceStore = h.store), h.translator = new yo(h.services, m), h.translator.on("*", function(P) {
      for (var M = arguments.length, L = new Array(M > 1 ? M - 1 : 0), z = 1; z < M; z++)
        L[z - 1] = arguments[z];
      h.emit(P, ...L);
    }), h.init(m, l), h.translator.options = m, h.translator.backendConnector.services.utils = {
      hasLoadedNamespace: h.hasLoadedNamespace.bind(h)
    }, h;
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
const xc = Vr.createInstance();
xc.createInstance = Vr.createInstance;
var yp = xc;
(() => {
  var c = { 847: (m, h) => {
    var k = { 2346: function(V, O, he) {
      var de = this && this.__importDefault || function(Z) {
        return Z && Z.__esModule ? Z : { default: Z };
      };
      Object.defineProperty(O, "__esModule", { value: !0 }), O.getMostReadable = O.darkenColor = O.lightenColor = void 0;
      const H = de(he(6535));
      O.lightenColor = (Z, ke) => Pe(Z, "lighten", ke), O.darkenColor = (Z, ke) => Pe(Z, "darken", ke);
      const Pe = (Z, ke, ee) => {
        if (ee && (ee < 0 || ee > 100)) throw new Error(`${ee} must be a number between 0 and 100`);
        return (0, H.default)(Z)[ke](ee).toString();
      };
      O.getMostReadable = (Z, ke) => H.default.mostReadable(Z, ke).toHexString();
    }, 2317: (V, O) => {
      Object.defineProperty(O, "__esModule", { value: !0 }), O.IconSize = O.Transition = O.LineHeight = O.FontWeight = O.FontSize = O.FontFamily = O.Shadow = O.Radius = O.UnitPx = O.Unit = O.SizeName = O.Size = O.Color = void 0, O.Color = { white: "#FFFFFF", lightGray1: "#FAFBFE", lightGray2: "#F3F5F8", lightGray3: "#ECEEF1", lightGray4: "#DDDFE4", lightGray5: "#C9CBD2", neutralGray: "#7D808A", neutralGray80: "rgba(125,128,138,0.8)", silverGray: "#C0C1C2", darkGray1: "#53565F", darkGray2: "#383A40", darkGray3: "#2F3136", darkGray4: "#24262B", darkGray5: "#1E1F23", darkGray6: "#111214", openFinDarkest: "#3D39CD", openFinDarker: "#4642E0", openFin: "#504CFF", openFinLight: "#5254FB", openFinLighter: "#5C5EFE", openFinLightest: "#6864FF", functional1: "#207735", functional2: "#46C8F1", functional3: "#0A76D3", functional4: "#6CADE5", functional5: "#0A76D3", functional6: "#882BFE", functional7: "#F31818", functional8: "#C93400", functional9: "#FF5E60", functional10: "#F48F00", purple: "#8C61FF", lightblue: "#36C3FE", aqua: "#00CC88", yellow: "#FFEB00", salmon: "#FF8C4C", pink: "#FF5E60", lightpink: "#FF8FB8", white00: "rgba(255,255,255,0.0)", white10: "rgba(255,255,255,0.1)", white20: "rgba(255,255,255,0.2)", white30: "rgba(255,255,255,0.3)", white40: "rgba(255,255,255,0.4)", white50: "rgba(255,255,255,0.5)", white60: "rgba(255,255,255,0.6)", white70: "rgba(255,255,255,0.7)", white80: "rgba(255,255,255,0.8)", white90: "rgba(255,255,255,0.9)", black00: "rgba(0,0,0,0.0)", black10: "rgba(0,0,0,0.1)", black20: "rgba(0,0,0,0.2)", black30: "rgba(0,0,0,0.3)", black40: "rgba(0,0,0,0.4)", black50: "rgba(0,0,0,0.5)", black60: "rgba(0,0,0,0.6)", black70: "rgba(0,0,0,0.7)", black80: "rgba(0,0,0,0.8)", black90: "rgba(0,0,0,0.9)", transparent: "transparent", openFinActive: "#4642FF", openFinHover: "#6965FF", lightGray4Active: "#D7DADF", lightGray4Hover: "#EBECEF", darkGray2Active: "#33353B", darkGray2Hover: "#44464E" }, O.Size = { xsmall: "xsmall", small: "small", base: "base", large: "large", xlarge: "xlarge", xxlarge: "xxlarge", xxxlarge: "xxxlarge", xxxxlarge: "xxxxlarge" }, O.SizeName = { [O.Size.xsmall]: "Extra Small", [O.Size.small]: "Small", [O.Size.base]: "Base", [O.Size.large]: "Large", [O.Size.xlarge]: "Extra Large", [O.Size.xxlarge]: "2X Large", [O.Size.xxxlarge]: "3X Large", [O.Size.xxxxlarge]: "4X Large" }, O.Unit = { [O.Size.xsmall]: 4, [O.Size.small]: 8, [O.Size.base]: 12, [O.Size.large]: 16, [O.Size.xlarge]: 20, [O.Size.xxlarge]: 24, [O.Size.xxxlarge]: 32, [O.Size.xxxxlarge]: 48 }, O.UnitPx = { [O.Size.xsmall]: "4px", [O.Size.small]: "8px", [O.Size.base]: "12px", [O.Size.large]: "16px", [O.Size.xlarge]: "20px", [O.Size.xxlarge]: "24px", [O.Size.xxxlarge]: "32px", [O.Size.xxxxlarge]: "48px" }, O.Radius = { [O.Size.xsmall]: "2px", [O.Size.small]: "4px", [O.Size.base]: "8px", [O.Size.large]: "24px", pill: "100vh", round: "50%", none: "0" }, O.Shadow = { [O.Size.base]: "0 4px 4px rgba(0, 0, 0, 0.25)" }, O.FontFamily = ["Inter", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"].join(","), O.FontSize = { [O.Size.xsmall]: "8px", [O.Size.small]: "10px", [O.Size.base]: "12px", [O.Size.large]: "14px", [O.Size.xlarge]: "16px", [O.Size.xxlarge]: "18px", [O.Size.xxxlarge]: "20px", [O.Size.xxxxlarge]: "40px" }, O.FontWeight = { normal: 400, bold: 600 }, O.LineHeight = { ui: 1, heading: 1.2, text: 1.5 }, O.Transition = { base: "200ms cubic-bezier(0.16, 1, 0.3, 1)", none: "0ms" }, O.IconSize = { [O.Size.xsmall]: O.UnitPx.small, [O.Size.small]: O.UnitPx.base, [O.Size.base]: "15px", [O.Size.large]: O.UnitPx.xlarge, [O.Size.xlarge]: O.UnitPx.xxlarge, [O.Size.xxlarge]: O.UnitPx.xxxlarge, [O.Size.xxxlarge]: O.UnitPx.xxxxlarge };
    }, 6893: (V, O, he) => {
      Object.defineProperty(O, "__esModule", { value: !0 }), O.createTheme = void 0;
      const de = he(2317), H = he(2346), Pe = he(5939), Z = { fontFamily: de.FontFamily, fontSize: de.FontSize, fontWeight: de.FontWeight, lineHeight: de.LineHeight, iconSize: de.IconSize, radius: de.Radius, shadow: de.Shadow, transition: de.Transition, unit: de.Unit, px: de.UnitPx }, ke = (ee, Se) => ({ [`${ee}Active`]: (0, H.darkenColor)(Se, 2), [`${ee}Hover`]: (0, H.lightenColor)(Se, 5), [`${ee}Focused`]: (0, H.getMostReadable)(Se, [de.Color.white, de.Color.darkGray5]), [`${ee}Text`]: (0, H.getMostReadable)(Se, [de.Color.white, de.Color.darkGray5]) });
      O.createTheme = (ee) => Object.assign(Object.assign({}, Z), { palette: Object.assign(Object.assign(Object.assign({}, ke(Pe.Palette.brandPrimary, ee.brandPrimary)), ke(Pe.Palette.brandSecondary, ee.brandSecondary)), ee) });
    }, 5939: (V, O) => {
      Object.defineProperty(O, "__esModule", { value: !0 }), O.Palette = void 0, O.Palette = { background1: "background1", background2: "background2", background3: "background3", background4: "background4", background5: "background5", background6: "background6", brandPrimary: "brandPrimary", brandSecondary: "brandSecondary", brandPrimaryActive: "brandPrimaryActive", brandPrimaryHover: "brandPrimaryHover", brandPrimaryFocused: "brandPrimaryFocused", brandPrimaryText: "brandPrimaryText", brandSecondaryActive: "brandSecondaryActive", brandSecondaryHover: "brandSecondaryHover", brandSecondaryFocused: "brandSecondaryFocused", brandSecondaryText: "brandSecondaryText", inputBackground: "inputBackground", inputColor: "inputColor", inputPlaceholder: "inputPlaceholder", inputDisabled: "inputDisabled", inputFocused: "inputFocused", inputBorder: "inputBorder", statusSuccess: "statusSuccess", statusWarning: "statusWarning", statusCritical: "statusCritical", statusActive: "statusActive", textDefault: "textDefault", textHelp: "textHelp", textInactive: "textInactive", borderNeutral: "borderNeutral", contentBackground1: "contentBackground1", contentBackground2: "contentBackground2", contentBackground3: "contentBackground3", contentBackground4: "contentBackground4", contentBackground5: "contentBackground5", linkDefault: "linkDefault", linkHover: "linkHover" };
    }, 6535: function(V) {
      V.exports = function() {
        function O(C) {
          return (O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(K) {
            return typeof K;
          } : function(K) {
            return K && typeof Symbol == "function" && K.constructor === Symbol && K !== Symbol.prototype ? "symbol" : typeof K;
          })(C);
        }
        var he = /^\s+/, de = /\s+$/;
        function H(C, K) {
          if (K = K || {}, (C = C || "") instanceof H) return C;
          if (!(this instanceof H)) return new H(C, K);
          var $ = function(Q) {
            var Ae, De, Ne, ot = { r: 0, g: 0, b: 0 }, qe = 1, vt = null, Dn = null, un = null, dn = !1, Dt = !1;
            return typeof Q == "string" && (Q = function(_e) {
              _e = _e.replace(he, "").replace(de, "").toLowerCase();
              var fe, Je = !1;
              if (Gt[_e]) _e = Gt[_e], Je = !0;
              else if (_e == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              return (fe = ye.rgb.exec(_e)) ? { r: fe[1], g: fe[2], b: fe[3] } : (fe = ye.rgba.exec(_e)) ? { r: fe[1], g: fe[2], b: fe[3], a: fe[4] } : (fe = ye.hsl.exec(_e)) ? { h: fe[1], s: fe[2], l: fe[3] } : (fe = ye.hsla.exec(_e)) ? { h: fe[1], s: fe[2], l: fe[3], a: fe[4] } : (fe = ye.hsv.exec(_e)) ? { h: fe[1], s: fe[2], v: fe[3] } : (fe = ye.hsva.exec(_e)) ? { h: fe[1], s: fe[2], v: fe[3], a: fe[4] } : (fe = ye.hex8.exec(_e)) ? { r: ft(fe[1]), g: ft(fe[2]), b: ft(fe[3]), a: Rn(fe[4]), format: Je ? "name" : "hex8" } : (fe = ye.hex6.exec(_e)) ? { r: ft(fe[1]), g: ft(fe[2]), b: ft(fe[3]), format: Je ? "name" : "hex" } : (fe = ye.hex4.exec(_e)) ? { r: ft(fe[1] + "" + fe[1]), g: ft(fe[2] + "" + fe[2]), b: ft(fe[3] + "" + fe[3]), a: Rn(fe[4] + "" + fe[4]), format: Je ? "name" : "hex8" } : !!(fe = ye.hex3.exec(_e)) && { r: ft(fe[1] + "" + fe[1]), g: ft(fe[2] + "" + fe[2]), b: ft(fe[3] + "" + fe[3]), format: Je ? "name" : "hex" };
            }(Q)), O(Q) == "object" && (Ut(Q.r) && Ut(Q.g) && Ut(Q.b) ? (Ae = Q.r, De = Q.g, Ne = Q.b, ot = { r: 255 * Re(Ae, 255), g: 255 * Re(De, 255), b: 255 * Re(Ne, 255) }, dn = !0, Dt = String(Q.r).substr(-1) === "%" ? "prgb" : "rgb") : Ut(Q.h) && Ut(Q.s) && Ut(Q.v) ? (vt = qt(Q.s), Dn = qt(Q.v), ot = function(_e, fe, Je) {
              _e = 6 * Re(_e, 360), fe = Re(fe, 100), Je = Re(Je, 100);
              var jt = Math.floor(_e), tn = _e - jt, At = Je * (1 - fe), Bt = Je * (1 - tn * fe), $t = Je * (1 - (1 - tn) * fe), xt = jt % 6;
              return { r: 255 * [Je, Bt, At, At, $t, Je][xt], g: 255 * [$t, Je, Je, Bt, At, At][xt], b: 255 * [At, At, $t, Je, Je, Bt][xt] };
            }(Q.h, vt, Dn), dn = !0, Dt = "hsv") : Ut(Q.h) && Ut(Q.s) && Ut(Q.l) && (vt = qt(Q.s), un = qt(Q.l), ot = function(_e, fe, Je) {
              var jt, tn, At;
              function Bt(kt, xe, Nt) {
                return Nt < 0 && (Nt += 1), Nt > 1 && (Nt -= 1), Nt < 1 / 6 ? kt + 6 * (xe - kt) * Nt : Nt < 0.5 ? xe : Nt < 2 / 3 ? kt + (xe - kt) * (2 / 3 - Nt) * 6 : kt;
              }
              if (_e = Re(_e, 360), fe = Re(fe, 100), Je = Re(Je, 100), fe === 0) jt = tn = At = Je;
              else {
                var $t = Je < 0.5 ? Je * (1 + fe) : Je + fe - Je * fe, xt = 2 * Je - $t;
                jt = Bt(xt, $t, _e + 1 / 3), tn = Bt(xt, $t, _e), At = Bt(xt, $t, _e - 1 / 3);
              }
              return { r: 255 * jt, g: 255 * tn, b: 255 * At };
            }(Q.h, vt, un), dn = !0, Dt = "hsl"), Q.hasOwnProperty("a") && (qe = Q.a)), qe = Tt(qe), { ok: dn, format: Q.format || Dt, r: Math.min(255, Math.max(ot.r, 0)), g: Math.min(255, Math.max(ot.g, 0)), b: Math.min(255, Math.max(ot.b, 0)), a: qe };
          }(C);
          this._originalInput = C, this._r = $.r, this._g = $.g, this._b = $.b, this._a = $.a, this._roundA = Math.round(100 * this._a) / 100, this._format = K.format || $.format, this._gradientType = K.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = $.ok;
        }
        function Pe(C, K, $) {
          C = Re(C, 255), K = Re(K, 255), $ = Re($, 255);
          var Q, Ae, De = Math.max(C, K, $), Ne = Math.min(C, K, $), ot = (De + Ne) / 2;
          if (De == Ne) Q = Ae = 0;
          else {
            var qe = De - Ne;
            switch (Ae = ot > 0.5 ? qe / (2 - De - Ne) : qe / (De + Ne), De) {
              case C:
                Q = (K - $) / qe + (K < $ ? 6 : 0);
                break;
              case K:
                Q = ($ - C) / qe + 2;
                break;
              case $:
                Q = (C - K) / qe + 4;
            }
            Q /= 6;
          }
          return { h: Q, s: Ae, l: ot };
        }
        function Z(C, K, $) {
          C = Re(C, 255), K = Re(K, 255), $ = Re($, 255);
          var Q, Ae, De = Math.max(C, K, $), Ne = Math.min(C, K, $), ot = De, qe = De - Ne;
          if (Ae = De === 0 ? 0 : qe / De, De == Ne) Q = 0;
          else {
            switch (De) {
              case C:
                Q = (K - $) / qe + (K < $ ? 6 : 0);
                break;
              case K:
                Q = ($ - C) / qe + 2;
                break;
              case $:
                Q = (C - K) / qe + 4;
            }
            Q /= 6;
          }
          return { h: Q, s: Ae, v: ot };
        }
        function ke(C, K, $, Q) {
          var Ae = [Kt(Math.round(C).toString(16)), Kt(Math.round(K).toString(16)), Kt(Math.round($).toString(16))];
          return Q && Ae[0].charAt(0) == Ae[0].charAt(1) && Ae[1].charAt(0) == Ae[1].charAt(1) && Ae[2].charAt(0) == Ae[2].charAt(1) ? Ae[0].charAt(0) + Ae[1].charAt(0) + Ae[2].charAt(0) : Ae.join("");
        }
        function ee(C, K, $, Q) {
          return [Kt(kn(Q)), Kt(Math.round(C).toString(16)), Kt(Math.round(K).toString(16)), Kt(Math.round($).toString(16))].join("");
        }
        function Se(C, K) {
          K = K === 0 ? 0 : K || 10;
          var $ = H(C).toHsl();
          return $.s -= K / 100, $.s = zt($.s), H($);
        }
        function re(C, K) {
          K = K === 0 ? 0 : K || 10;
          var $ = H(C).toHsl();
          return $.s += K / 100, $.s = zt($.s), H($);
        }
        function pe(C) {
          return H(C).desaturate(100);
        }
        function rt(C, K) {
          K = K === 0 ? 0 : K || 10;
          var $ = H(C).toHsl();
          return $.l += K / 100, $.l = zt($.l), H($);
        }
        function He(C, K) {
          K = K === 0 ? 0 : K || 10;
          var $ = H(C).toRgb();
          return $.r = Math.max(0, Math.min(255, $.r - Math.round(-K / 100 * 255))), $.g = Math.max(0, Math.min(255, $.g - Math.round(-K / 100 * 255))), $.b = Math.max(0, Math.min(255, $.b - Math.round(-K / 100 * 255))), H($);
        }
        function $e(C, K) {
          K = K === 0 ? 0 : K || 10;
          var $ = H(C).toHsl();
          return $.l -= K / 100, $.l = zt($.l), H($);
        }
        function pt(C, K) {
          var $ = H(C).toHsl(), Q = ($.h + K) % 360;
          return $.h = Q < 0 ? 360 + Q : Q, H($);
        }
        function It(C) {
          var K = H(C).toHsl();
          return K.h = (K.h + 180) % 360, H(K);
        }
        function Qe(C, K) {
          if (isNaN(K) || K <= 0) throw new Error("Argument to polyad must be a positive number");
          for (var $ = H(C).toHsl(), Q = [H(C)], Ae = 360 / K, De = 1; De < K; De++) Q.push(H({ h: ($.h + De * Ae) % 360, s: $.s, l: $.l }));
          return Q;
        }
        function Mt(C) {
          var K = H(C).toHsl(), $ = K.h;
          return [H(C), H({ h: ($ + 72) % 360, s: K.s, l: K.l }), H({ h: ($ + 216) % 360, s: K.s, l: K.l })];
        }
        function Ie(C, K, $) {
          K = K || 6, $ = $ || 30;
          var Q = H(C).toHsl(), Ae = 360 / $, De = [H(C)];
          for (Q.h = (Q.h - (Ae * K >> 1) + 720) % 360; --K; ) Q.h = (Q.h + Ae) % 360, De.push(H(Q));
          return De;
        }
        function Xe(C, K) {
          K = K || 6;
          for (var $ = H(C).toHsv(), Q = $.h, Ae = $.s, De = $.v, Ne = [], ot = 1 / K; K--; ) Ne.push(H({ h: Q, s: Ae, v: De })), De = (De + ot) % 1;
          return Ne;
        }
        H.prototype = { isDark: function() {
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
          var C = this.toRgb();
          return (299 * C.r + 587 * C.g + 114 * C.b) / 1e3;
        }, getLuminance: function() {
          var C, K, $, Q = this.toRgb();
          return C = Q.r / 255, K = Q.g / 255, $ = Q.b / 255, 0.2126 * (C <= 0.03928 ? C / 12.92 : Math.pow((C + 0.055) / 1.055, 2.4)) + 0.7152 * (K <= 0.03928 ? K / 12.92 : Math.pow((K + 0.055) / 1.055, 2.4)) + 0.0722 * ($ <= 0.03928 ? $ / 12.92 : Math.pow(($ + 0.055) / 1.055, 2.4));
        }, setAlpha: function(C) {
          return this._a = Tt(C), this._roundA = Math.round(100 * this._a) / 100, this;
        }, toHsv: function() {
          var C = Z(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, v: C.v, a: this._a };
        }, toHsvString: function() {
          var C = Z(this._r, this._g, this._b), K = Math.round(360 * C.h), $ = Math.round(100 * C.s), Q = Math.round(100 * C.v);
          return this._a == 1 ? "hsv(" + K + ", " + $ + "%, " + Q + "%)" : "hsva(" + K + ", " + $ + "%, " + Q + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var C = Pe(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, l: C.l, a: this._a };
        }, toHslString: function() {
          var C = Pe(this._r, this._g, this._b), K = Math.round(360 * C.h), $ = Math.round(100 * C.s), Q = Math.round(100 * C.l);
          return this._a == 1 ? "hsl(" + K + ", " + $ + "%, " + Q + "%)" : "hsla(" + K + ", " + $ + "%, " + Q + "%, " + this._roundA + ")";
        }, toHex: function(C) {
          return ke(this._r, this._g, this._b, C);
        }, toHexString: function(C) {
          return "#" + this.toHex(C);
        }, toHex8: function(C) {
          return function(K, $, Q, Ae, De) {
            var Ne = [Kt(Math.round(K).toString(16)), Kt(Math.round($).toString(16)), Kt(Math.round(Q).toString(16)), Kt(kn(Ae))];
            return De && Ne[0].charAt(0) == Ne[0].charAt(1) && Ne[1].charAt(0) == Ne[1].charAt(1) && Ne[2].charAt(0) == Ne[2].charAt(1) && Ne[3].charAt(0) == Ne[3].charAt(1) ? Ne[0].charAt(0) + Ne[1].charAt(0) + Ne[2].charAt(0) + Ne[3].charAt(0) : Ne.join("");
          }(this._r, this._g, this._b, this._a, C);
        }, toHex8String: function(C) {
          return "#" + this.toHex8(C);
        }, toRgb: function() {
          return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
        }, toRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: Math.round(100 * Re(this._r, 255)) + "%", g: Math.round(100 * Re(this._g, 255)) + "%", b: Math.round(100 * Re(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(100 * Re(this._r, 255)) + "%, " + Math.round(100 * Re(this._g, 255)) + "%, " + Math.round(100 * Re(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * Re(this._r, 255)) + "%, " + Math.round(100 * Re(this._g, 255)) + "%, " + Math.round(100 * Re(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return this._a === 0 ? "transparent" : !(this._a < 1) && (Ze[ke(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function(C) {
          var K = "#" + ee(this._r, this._g, this._b, this._a), $ = K, Q = this._gradientType ? "GradientType = 1, " : "";
          if (C) {
            var Ae = H(C);
            $ = "#" + ee(Ae._r, Ae._g, Ae._b, Ae._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + Q + "startColorstr=" + K + ",endColorstr=" + $ + ")";
        }, toString: function(C) {
          var K = !!C;
          C = C || this._format;
          var $ = !1, Q = this._a < 1 && this._a >= 0;
          return K || !Q || C !== "hex" && C !== "hex6" && C !== "hex3" && C !== "hex4" && C !== "hex8" && C !== "name" ? (C === "rgb" && ($ = this.toRgbString()), C === "prgb" && ($ = this.toPercentageRgbString()), C !== "hex" && C !== "hex6" || ($ = this.toHexString()), C === "hex3" && ($ = this.toHexString(!0)), C === "hex4" && ($ = this.toHex8String(!0)), C === "hex8" && ($ = this.toHex8String()), C === "name" && ($ = this.toName()), C === "hsl" && ($ = this.toHslString()), C === "hsv" && ($ = this.toHsvString()), $ || this.toHexString()) : C === "name" && this._a === 0 ? this.toName() : this.toRgbString();
        }, clone: function() {
          return H(this.toString());
        }, _applyModification: function(C, K) {
          var $ = C.apply(null, [this].concat([].slice.call(K)));
          return this._r = $._r, this._g = $._g, this._b = $._b, this.setAlpha($._a), this;
        }, lighten: function() {
          return this._applyModification(rt, arguments);
        }, brighten: function() {
          return this._applyModification(He, arguments);
        }, darken: function() {
          return this._applyModification($e, arguments);
        }, desaturate: function() {
          return this._applyModification(Se, arguments);
        }, saturate: function() {
          return this._applyModification(re, arguments);
        }, greyscale: function() {
          return this._applyModification(pe, arguments);
        }, spin: function() {
          return this._applyModification(pt, arguments);
        }, _applyCombination: function(C, K) {
          return C.apply(null, [this].concat([].slice.call(K)));
        }, analogous: function() {
          return this._applyCombination(Ie, arguments);
        }, complement: function() {
          return this._applyCombination(It, arguments);
        }, monochromatic: function() {
          return this._applyCombination(Xe, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(Mt, arguments);
        }, triad: function() {
          return this._applyCombination(Qe, [3]);
        }, tetrad: function() {
          return this._applyCombination(Qe, [4]);
        } }, H.fromRatio = function(C, K) {
          if (O(C) == "object") {
            var $ = {};
            for (var Q in C) C.hasOwnProperty(Q) && ($[Q] = Q === "a" ? C[Q] : qt(C[Q]));
            C = $;
          }
          return H(C, K);
        }, H.equals = function(C, K) {
          return !(!C || !K) && H(C).toRgbString() == H(K).toRgbString();
        }, H.random = function() {
          return H.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
        }, H.mix = function(C, K, $) {
          $ = $ === 0 ? 0 : $ || 50;
          var Q = H(C).toRgb(), Ae = H(K).toRgb(), De = $ / 100;
          return H({ r: (Ae.r - Q.r) * De + Q.r, g: (Ae.g - Q.g) * De + Q.g, b: (Ae.b - Q.b) * De + Q.b, a: (Ae.a - Q.a) * De + Q.a });
        }, H.readability = function(C, K) {
          var $ = H(C), Q = H(K);
          return (Math.max($.getLuminance(), Q.getLuminance()) + 0.05) / (Math.min($.getLuminance(), Q.getLuminance()) + 0.05);
        }, H.isReadable = function(C, K, $) {
          var Q, Ae, De, Ne, ot, qe = H.readability(C, K);
          switch (Ae = !1, (De = $, (Ne = ((De = De || { level: "AA", size: "small" }).level || "AA").toUpperCase()) !== "AA" && Ne !== "AAA" && (Ne = "AA"), (ot = (De.size || "small").toLowerCase()) !== "small" && ot !== "large" && (ot = "small"), Q = { level: Ne, size: ot }).level + Q.size) {
            case "AAsmall":
            case "AAAlarge":
              Ae = qe >= 4.5;
              break;
            case "AAlarge":
              Ae = qe >= 3;
              break;
            case "AAAsmall":
              Ae = qe >= 7;
          }
          return Ae;
        }, H.mostReadable = function(C, K, $) {
          var Q, Ae, De, Ne, ot = null, qe = 0;
          Ae = ($ = $ || {}).includeFallbackColors, De = $.level, Ne = $.size;
          for (var vt = 0; vt < K.length; vt++) (Q = H.readability(C, K[vt])) > qe && (qe = Q, ot = H(K[vt]));
          return H.isReadable(C, ot, { level: De, size: Ne }) || !Ae ? ot : ($.includeFallbackColors = !1, H.mostReadable(C, ["#fff", "#000"], $));
        };
        var Gt = H.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, Ze = H.hexNames = function(C) {
          var K = {};
          for (var $ in C) C.hasOwnProperty($) && (K[C[$]] = $);
          return K;
        }(Gt);
        function Tt(C) {
          return C = parseFloat(C), (isNaN(C) || C < 0 || C > 1) && (C = 1), C;
        }
        function Re(C, K) {
          (function(Q) {
            return typeof Q == "string" && Q.indexOf(".") != -1 && parseFloat(Q) === 1;
          })(C) && (C = "100%");
          var $ = function(Q) {
            return typeof Q == "string" && Q.indexOf("%") != -1;
          }(C);
          return C = Math.min(K, Math.max(0, parseFloat(C))), $ && (C = parseInt(C * K, 10) / 100), Math.abs(C - K) < 1e-6 ? 1 : C % K / parseFloat(K);
        }
        function zt(C) {
          return Math.min(1, Math.max(0, C));
        }
        function ft(C) {
          return parseInt(C, 16);
        }
        function Kt(C) {
          return C.length == 1 ? "0" + C : "" + C;
        }
        function qt(C) {
          return C <= 1 && (C = 100 * C + "%"), C;
        }
        function kn(C) {
          return Math.round(255 * parseFloat(C)).toString(16);
        }
        function Rn(C) {
          return ft(C) / 255;
        }
        var Wt, ln, Vt, ye = (ln = "[\\s|\\(]+(" + (Wt = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + Wt + ")[,|\\s]+(" + Wt + ")\\s*\\)?", Vt = "[\\s|\\(]+(" + Wt + ")[,|\\s]+(" + Wt + ")[,|\\s]+(" + Wt + ")[,|\\s]+(" + Wt + ")\\s*\\)?", { CSS_UNIT: new RegExp(Wt), rgb: new RegExp("rgb" + ln), rgba: new RegExp("rgba" + Vt), hsl: new RegExp("hsl" + ln), hsla: new RegExp("hsla" + Vt), hsv: new RegExp("hsv" + ln), hsva: new RegExp("hsva" + Vt), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
        function Ut(C) {
          return !!ye.CSS_UNIT.exec(C);
        }
        return H;
      }();
    } }, P = {};
    function M(V) {
      var O = P[V];
      if (O !== void 0) return O.exports;
      var he = P[V] = { exports: {} };
      return k[V].call(he.exports, he, he.exports, M), he.exports;
    }
    var L = {};
    (() => {
      var V = L;
      Object.defineProperty(V, "__esModule", { value: !0 }), V.createTheme = V.Palette = V.Color = void 0;
      var O = M(2317);
      Object.defineProperty(V, "Color", { enumerable: !0, get: function() {
        return O.Color;
      } });
      var he = M(5939);
      Object.defineProperty(V, "Palette", { enumerable: !0, get: function() {
        return he.Palette;
      } });
      var de = M(6893);
      Object.defineProperty(V, "createTheme", { enumerable: !0, get: function() {
        return de.createTheme;
      } });
    })();
    var z = h;
    for (var Y in L) z[Y] = L[Y];
    L.__esModule && Object.defineProperty(z, "__esModule", { value: !0 });
  }, 877: () => {
  }, 67: () => {
  } }, r = {};
  function l(m) {
    var h = r[m];
    if (h !== void 0) return h.exports;
    var k = r[m] = { exports: {} };
    return c[m](k, k.exports, l), k.exports;
  }
  l.n = (m) => {
    var h = m && m.__esModule ? () => m.default : () => m;
    return l.d(h, { a: h }), h;
  }, l.d = (m, h) => {
    for (var k in h) l.o(h, k) && !l.o(m, k) && Object.defineProperty(m, k, { enumerable: !0, get: h[k] });
  }, l.o = (m, h) => Object.prototype.hasOwnProperty.call(m, h), l.r = (m) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(m, "__esModule", { value: !0 });
  };
  var p = {};
  (() => {
    var Ts, Es;
    l.r(p), l.d(p, { AppManifestType: () => Y, BookmarkItemContextMenuOptionType: () => re, BrowserButtonType: () => rt, ColorSchemeOptionType: () => ke, CustomActionCallerType: () => pt, Dock: () => O, EnterpriseMainContextMenuOptionType: () => Se, GlobalContextMenuOptionType: () => Z, PageChangeEventType: () => Pe, PageTabContextMenuOptionType: () => ee, PanelPosition: () => H, SUPPORTED_LANGUAGES: () => It, SaveButtonContextMenuOptionType: () => He, SaveModalType: () => Qe, ViewTabMenuOptionType: () => pe, WindowType: () => $e, getCurrentSync: () => y, init: () => hu, wrapSync: () => b });
    var m = {};
    l.r(m), l.d(m, { createNamespacedLocalStorage: () => Jn, getItem: () => ka, removeItem: () => vo, setItem: () => Ue });
    var h, k, P, M, L, z, Y, V, O = {};
    l.r(O), l.d(O, { init: () => rn }), function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    }(h || (h = {})), function(e) {
      e.UserAction = "user-action", e.FocusChange = "focus-change", e.Reload = "reload";
    }(k || (k = {})), function(e) {
      e.Active = "active", e.Default = "default";
    }(P || (P = {})), function(e) {
      e.Suggestion = "suggestion";
    }(M || (M = {})), function(e) {
      e.Contact = "Contact", e.Custom = "Custom", e.List = "List", e.Plain = "Plain", e.SimpleText = "SimpleText", e.Loading = "Loading", e.Error = "Error";
    }(L || (L = {})), function(e) {
      e.MultiSelect = "MultiSelect";
    }(z || (z = {})), function(e) {
      e.Snapshot = "snapshot", e.Manifest = "manifest", e.View = "view", e.External = "external";
    }(Y || (Y = {})), function(e) {
      e.LandingPage = "landingPage", e.AppGrid = "appGrid";
    }(V || (V = {}));
    var he, de, H, Pe, Z, ke, ee, Se, re, pe, rt, He, $e, pt;
    (function(e) {
      e.Primary = "primary", e.Secondary = "secondary", e.TextOnly = "textOnly";
    })(he || (he = {})), function(e) {
      e.ActionButton = "ActionButton", e.DropdownButton = "DropdownButton";
    }(de || (de = {})), function(e) {
      e.Left = "Left", e.Right = "Right", e.Top = "Top", e.Bottom = "Bottom";
    }(H || (H = {})), function(e) {
      e.UrlChange = "URL_CHANGE", e.ViewAdded = "VIEW_ADDED", e.ViewRemoved = "VIEW_REMOVED", e.PageContextAdded = "PAGE_CONTEXT_ADDED", e.PageContextRemoved = "PAGE_CONTEXT_REMOVED";
    }(Pe || (Pe = {})), function(e) {
      e.NewWindow = "NewWindow", e.NewPage = "NewPage", e.SavePage = "SavePage", e.SavePageAs = "SavePageAs", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.CloseWindow = "CloseWindow", e.RestoreChanges = "RestoreChanges", e.SaveWorkspace = "SaveWorkspace", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.RenameWorkspace = "RenameWorkspace", e.SwitchWorkspace = "SwitchWorkspace", e.DeleteWorkspace = "DeleteWorkspace", e.Downloads = "Downloads", e.OpenStorefront = "OpenStorefront", e.ManageDesktopSignals = "ManageDesktopSignals", e.Appearance = "Appearance", e.Quit = "Quit", e.Custom = "Custom";
    }(Z || (Z = {})), function(e) {
      e.Light = "light", e.Dark = "dark", e.System = "system";
    }(ke || (ke = {})), function(e) {
      e.Close = "Close", e.Duplicate = "Duplicate", e.Rename = "Rename", e.Save = "Save", e.SaveAs = "Save As", e.NewPage = "New Page", e.DeletePage = "Delete Page", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Refresh = "Refresh", e.CloseOthers = "Close others", e.Delete = "Delete", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.ManageDesktopSignals = "ManageDesktopSignals", e.AddToChannel = "AddToChannel", e.Custom = "Custom";
    }(ee || (ee = {})), function(e) {
      e.Lock = "Lock", e.ShowHideTabs = "ShowHideTabs", e.AddToChanel = "AddToChannel", e.ManageDesktopSignals = "ManageDesktopSignals", e.Print = "Print", e.Pin = "Pin";
    }(Se || (Se = {})), function(e) {
      e.EditName = "Edit Name", e.Move = "Move", e.Delete = "Delete";
    }(re || (re = {})), function(e) {
      e.NewView = "NewView", e.DuplicateViews = "DuplicateView", e.OpenWithDefaultBrowser = "OpenWithDefaultBrowser", e.ReloadViews = "ReloadTab", e.CloseViews = "CloseTab", e.AddToChannel = "AddToChannel", e.RemoveFromChannel = "RemoveFromChannel", e.Back = "Back", e.Forward = "Forward", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.Custom = "Custom";
    }(pe || (pe = {})), function(e) {
      e.ShowHideTabs = "ShowHideTabs", e.ColorLinking = "ColorLinking", e.PresetLayouts = "PresetLayouts", e.LockUnlockPage = "LockUnlockPage", e.SaveMenu = "SaveMenu", e.SavePage = "SavePage", e.Minimise = "Minimise", e.Maximise = "Maximise", e.Close = "Close", e.Custom = "Custom";
    }(rt || (rt = {})), function(e) {
      e.SavePage = "SavePage", e.SaveWorkspace = "SaveWorkspace", e.SavePageAs = "SavePageAs", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Custom = "Custom";
    }(He || (He = {})), function(e) {
      e.Browser = "browser", e.Platform = "platform";
    }($e || ($e = {})), function(e) {
      e.CustomButton = "CustomButton", e.StoreCustomButton = "StoreCustomButton", e.CustomDropdownItem = "CustomDropdownItem", e.GlobalContextMenu = "GlobalContextMenu", e.ViewTabContextMenu = "ViewTabContextMenu", e.PageTabContextMenu = "PageTabContextMenu", e.SaveButtonContextMenu = "SaveButtonContextMenu", e.API = "API";
    }(pt || (pt = {}));
    const It = ["en-US", "ja-JP", "zh-CN", "ko-KR", "ru-RU", "de-DE", "zh-Hant"];
    var Qe, Mt;
    (function(e) {
      e.SAVE_PAGE = "SAVE_PAGE", e.SAVE_WORKSPACE = "SAVE_WORKSPACE", e.SAVE_PAGE_AS = "SAVE_PAGE_AS", e.SAVE_WORKSPACE_AS = "SAVE_WORKSPACE_AS", e.RENAME_PAGE = "RENAME_PAGE", e.RENAME_WORKSPACE = "RENAME_WORKSPACE";
    })(Qe || (Qe = {})), function(e) {
      e.Local = "local", e.Dev = "dev", e.Staging = "staging", e.Prod = "prod";
    }(Mt || (Mt = {}));
    const Ie = { isFin: !1, uuid: "", name: "", entityType: "" };
    typeof window < "u" && "fin" in window && window.fin !== null && typeof window.fin == "object" && (Ie.isFin = !0, Ie.uuid = Ie.isFin && fin.me.uuid, Ie.name = Ie.isFin && fin.me.name, Ie.entityType = Ie.isFin && fin.me.entityType);
    let Xe = typeof window < "u" && typeof fin < "u";
    typeof process > "u" || process.env;
    const Gt = typeof window < "u", Ze = Gt && typeof indexedDB < "u", Tt = Gt ? window.origin : Mt.Local;
    let Re = Xe && fin.me.uuid, zt = Xe && fin.me.name, ft = Xe && fin.me.entityType;
    typeof window < "u" && window.addEventListener("finReady", () => {
      Xe = !0, Re = Xe && fin.me.uuid, zt = Xe && fin.me.name, ft = Xe && fin.me.entityType, Ie.isFin = !0, Ie.uuid = Ie.isFin && fin.me.uuid, Ie.name = Ie.isFin && fin.me.name, Ie.entityType = Ie.isFin && fin.me.entityType;
    });
    const Kt = new Promise((e) => {
      if (Ie.isFin) return e();
      typeof window < "u" ? window.addEventListener("finReady", () => e(), { once: !0 }) : e();
    }), qt = (Mt.Local, Mt.Dev, Mt.Staging, Mt.Prod === "prod"), kn = (e) => e.startsWith("http://") || e.startsWith("https://") ? e : Tt + e, Rn = kn("https://workspace.openfin.co/workspace/22.3.31"), Wt = kn("https://workspace.openfin.co/workspace/22.3.31"), ln = (typeof WORKSPACE_DOCS_PLATFORM_URL < "u" && kn(WORKSPACE_DOCS_PLATFORM_URL), typeof WORKSPACE_DOCS_CLIENT_URL < "u" && kn(WORKSPACE_DOCS_CLIENT_URL), "42.138.103.903"), Vt = "22.3.31";
    typeof WORKSPACE_BUILD_SHA < "u" && WORKSPACE_BUILD_SHA;
    var ye, Ut;
    (function(e) {
      e.Home = "/home/", e.HomeSearch = "/home/?deeplink=search", e.HomePagesRename = "/home/pages/rename/", e.Dock = "/dock/", e.Docs = "/provider/docs/", e.Storefront = "/storefront/", e.DeprecatedAlert = "/provider/deprecated-alert/", e.Analytics = "/provider/analytics/", e.Provider = "/provider/";
    })(ye || (ye = {})), function(e) {
      e.Browser = "/browser/", e.BrowserPopupMenu = "/popup-menu/", e.BrowserPopupMenuSaveModal = "/popup-menu/save-modal/", e.BrowserPopupMenuLayouts = "/popup-menu/layouts/layouts/", e.BrowserPopupMenuColorLinking = "/popup-menu/color-linking/color-linking/", e.BrowserIndicator = "/indicator/", e.BrowserPopupMenuAddressSearchResultsView = "/popup-menu/address-search-results-view/", e.ResponseModal = "/popup-menu/response-modal/", e.CloseConfirmationModal = "/popup-menu/close-confirmation-modal/", e.EnterpriseBrowser = "/enterprise/", e.EnterpriseLandingPage = "/enterprise/landing/", e.EnterpriseContextMenu = "/context-menu/", e.EnterpriseBookmarkDialog = "/bookmark-dialog/", e.EnterpriseAboutPage = "/popup-menu/about/", e.DropdownMenu = "/dropdown-menu/", e.EnterpriseDock = "/dock/", e.ZoomControlsDialog = "/zoom-controls-dialog/", e.DesktopSignalsModal = "/popup-menu/desktop-signals-modal/";
    }(Ut || (Ut = {}));
    const C = { ...ye, ...Ut };
    var K;
    (function(e) {
      e.Search = "search";
    })(K || (K = {}));
    const $ = C;
    async function Q() {
      const e = "getManifestOverrides", { manifest: n, initialOptions: o } = await fin.Application.getCurrentSync().getInfo();
      return n != null && n.platform.workspace || n != null && n.platform.home || o != null && o.workspace || o != null && o.home || console.warn(`${e}: Missing Home development manifest overrides, using Desktop Owner Settings.`), n != null && n.platform.workspace ? (JSON.stringify(n == null ? void 0 : n.platform.workspace), n == null ? void 0 : n.platform.workspace) : n != null && n.platform.home ? (JSON.stringify(n == null ? void 0 : n.platform.home), n == null ? void 0 : n.platform.home) : o != null && o.workspace ? (JSON.stringify(o == null ? void 0 : o.workspace), o == null ? void 0 : o.workspace) : o != null && o.home ? (JSON.stringify(o == null ? void 0 : o.home), o == null ? void 0 : o.home) : {};
    }
    const Ae = (e) => fin.System.getSystemAppConfig(e);
    async function De() {
      const e = "getDOSOverrides";
      if (!Ie.isFin) return console.warn(`${e}: the fin API was not available, returning no result`), {};
      try {
        let n = await Ae("workspace").catch((o) => {
          console.warn(`${e}: customConfig entry for SystemApp workspace not available in Desktop Owner Settings. ${o == null ? void 0 : o.message}`);
        });
        return n || (n = await Ae("home")), JSON.stringify(n), n;
      } catch (n) {
        if (!qt) return {};
        if (!(n instanceof Error)) throw n;
        console.warn(`${e}: Missing Workspace Desktop Owner Settings configuration, using defaults. ${n == null ? void 0 : n.message}`);
      }
      return {};
    }
    let Ne, ot;
    async function qe() {
      if (Ne) return Ne;
      const e = "getOverrides";
      if (!Ie.isFin) return Gt && console.warn(`${e}: The Fin API was not available. Returning an empty result.`), {};
      const [n, o] = await Promise.all([De(), Q()]);
      return Ne = { ...o, ...n, disableRuntimeValidation: o.disableRuntimeValidation || n.disableRuntimeValidation }, Ne;
    }
    function vt(e) {
      ot = e;
    }
    const Dn = (e) => e.replace(/\/$/, "");
    async function un() {
      const e = (await qe()).browserBaseUrl;
      if (e) try {
        const n = new URL(e);
        if (n.pathname.endsWith("/")) n.pathname = Dn(n.pathname);
        else {
          if (n.pathname === "/workspace") return n.pathname += `/${Vt}`, n.toString();
          console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url, with path: /workspace. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
        }
      } catch {
        console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
      }
      return ot ?? Wt;
    }
    async function dn(e = !1) {
      const n = await un() + $.Browser;
      return e ? n : Dn(n);
    }
    async function Dt(e = !1) {
      const n = await un() + $.EnterpriseBrowser;
      return e ? n : Dn(n);
    }
    async function _e() {
      return await Dt() + "/landing/";
    }
    const fe = async (e, n = !1) => e ? Dt(n) : dn(n), Je = 56, jt = 728, tn = 150, At = "dock3", Bt = (e) => {
      const n = typeof fin < "u" && fin.me.identity.uuid;
      if (!n) throw new Error("UUID is required to get the Dock3 channel name.");
      return `${n}-dock3`;
    }, $t = (e, n = "") => e.toLowerCase().includes(n.toLowerCase()), xt = (...e) => ((n, ...o) => {
      const s = console[n];
      try {
        s(...o.map((u) => typeof u == "object" ? JSON.stringify(u, null, 2) : u));
      } catch (u) {
        console.error("Error printing stringified log, logging directly", u), s(...o);
      }
    })("debug", ...e);
    var kt, xe;
    (function(e) {
      e.Workspace = "openfin-workspace", e.OldWorkspace = "openfin-browser";
    })(kt || (kt = {})), function(e) {
      e.FinProtocol = "fin-protocol";
    }(xe || (xe = {})), kt.Workspace;
    const Nt = (e) => {
      if (!Ie.isFin) throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");
      return fin.Application.wrapSync(e);
    }, Sn = async () => (await Kt, Nt({ uuid: Ie.uuid }));
    var Fe;
    (function(e) {
      e.Home = "openfin-home", e.Dock = "openfin-dock", e.Storefront = "openfin-storefront", e.HomeInternal = "openfin-home-internal", e.BrowserMenu = "openfin-browser-menu", e.BrowserSaveMenu = "openfin-browser-save-menu", e.DockSaveWorkspaceMenu = "openfin-dock3-save-workspace-menu", e.BrowserIndicator = "openfin-browser-indicator", e.BrowserWindow = "internal-generated-window", e.ClassicWindow = "internal-generated-classic-window", e.EnterpriseContextMenu = "openfin-enterprise-context-menu", e.BrowserAddressSearchPrefix = "openfin-browser-menu-address-search-", e.EnterpriseBookmarkDialogWindow = "openfin-enterprise-bookmark-dialog", e.DropdownMenu = "openfin-enterprise-dropdown-menu", e.DockCompanion = "openfin-dock-companion", e.AICompanionPrefix = "openfin-ai-companion-", e.UpdateVersionModal = "here-update-version-modal", e.ZoomControlsDialog = "here-zoom-controls-dialog", e.AboutPageWindow = "here-about-page", e.DesktopSignalsModal = "here-desktop-signals-modal";
    })(Fe || (Fe = {}));
    const ge = (e) => ({ left: (e.left + (e.right ?? e.left + e.width)) / 2, top: (e.top + (e.bottom ?? e.top + e.height)) / 2 }), la = (e, n) => {
      const o = n.width / 2, s = n.height / 2;
      return { left: Math.round(e.left - o), top: Math.round(e.top - s), width: n.width, height: n.height };
    };
    function Ft(e) {
      if (!Ie.isFin) throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
      return fin.Window.wrapSync(e);
    }
    const et = { get name() {
      return Ie.name;
    }, get uuid() {
      return Ie.uuid;
    } };
    Fe.Home, kt.Workspace, Fe.Dock, kt.Workspace;
    const Ba = { name: Fe.Storefront, uuid: kt.Workspace };
    kt.Workspace, kt.Workspace;
    async function Na(e) {
      const n = Ft(e);
      await n.getState() === "minimized" && await n.restore(), await n.show(), await n.setAsForeground();
    }
    const Un = async (e) => {
      var n, o, s;
      try {
        const u = await fin.Window.wrapSync({ name: e.name, uuid: e.uuid ?? fin.me.uuid }).getOptions();
        return (((n = u.workspacePlatform) == null ? void 0 : n.windowType) === "browser" || ((o = u.workspacePlatform) == null ? void 0 : o.windowType) === "enterprise") && ((s = u.workspacePlatform) == null ? void 0 : s.pages);
      } catch (u) {
        return console.warn("isBrowserWindow error: ", u), !1;
      }
    };
    async function $n() {
      const e = await fin.Application.getCurrentSync().getChildWindows(), n = await Promise.all(e.map(async (o) => Un(o.identity)));
      return e.filter((o, s) => n[s]);
    }
    async function Kn() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((e) => e.identity.name.startsWith(Fe.BrowserMenu));
    }
    const pn = (e) => Ft(e).getInfo().then(() => !0).catch(() => !1), Fa = () => pn(Ba);
    function ua(e, n) {
      const o = e.top, s = e.left, u = e.top + e.height, w = e.left + e.width, S = n.monitorRect.top, v = n.monitorRect.left, _ = n.monitorRect.bottom, N = n.monitorRect.right;
      if (o > _ || u < S || s > N || w < v) return 0;
      const q = Math.max(o, S), j = Math.max(s, v);
      return (Math.min(u, _) - q) * (Math.min(w, N) - j) / (e.height * e.width);
    }
    async function it(e) {
      const n = await fin.System.getMonitorInfo();
      return [n.primaryMonitor, ...n.nonPrimaryMonitors].reduce((o, s) => {
        const u = ua(e, s);
        return u > o.percentage ? { percentage: u, monitor: s } : o;
      }, { percentage: 0, monitor: n.primaryMonitor }).monitor;
    }
    const St = (e, n) => {
      var s, u, w;
      const o = e;
      return o.workspacePlatform || (o.workspacePlatform = {}), o.workspacePlatform._internalDeferShowOptions = { setAsForeground: !!n, deferShowEnabled: !0, autoShow: ((s = o.workspacePlatform) == null ? void 0 : s._internalAutoShow) || ((w = (u = o.workspacePlatform) == null ? void 0 : u._internalDeferShowOptions) == null ? void 0 : w.autoShow) || o.autoShow === void 0 || o.autoShow }, o.autoShow = !1, o;
    };
    var da, pa;
    (function(e) {
      e.RelativeToParentWindow = "relative-to-parent-window", e.RelativeToMonitor = "relative-to-monitor";
    })(da || (da = {})), function(e) {
      e.Top = "top", e.Below = "below";
    }(pa || (pa = {}));
    const jn = async (e) => {
      const n = e && await Ft(e).getBounds();
      return { left: ((s = (e ? await it(n) : (await fin.System.getMonitorInfo()).primaryMonitor).availableRect).left + s.right) / 2, top: (s.top + s.bottom) / 2 };
      var s;
    }, fa = async (e, n, o = !1) => {
      let s;
      if (o) s = await jn(n);
      else {
        const S = Ft(n), v = await S.getBounds();
        s = ge(v);
      }
      const { defaultHeight: u, defaultWidth: w } = e;
      return la(s, { height: u, width: w });
    };
    async function Hn(e, n, o = !1) {
      const s = n && await Ft(n).getState() === "maximized", u = o || s || !n, w = await fa(e, n, u);
      return await (async (S) => {
        const v = await fin.System.getMonitorInfo(), _ = [v.primaryMonitor, ...v.nonPrimaryMonitors];
        for (const N of _) if (ua(S, N) === 1) return !1;
        return !0;
      })(w) ? (await Ft(n).center(), fa(e, n, u)) : (console.warn("Response modal isn't off screen, not centering parent window"), w);
    }
    const Pn = () => (e) => e;
    var te = l(847);
    const fn = (e) => e.replace(/[^\d,]/g, "").split(","), ha = (e) => {
      if (e.length < 2) throw new Error("Invalid color object, cannot convert to HSL.");
      const n = e[0] / 255, o = e[1] / 255, s = e[2] / 255, u = Math.min(n, o, s), w = Math.max(n, o, s), S = w - u;
      let v = 0, _ = 0, N = 0;
      return v = S === 0 ? 0 : w === n ? (o - s) / S % 6 : w === o ? (s - n) / S + 2 : (n - o) / S + 4, v = Math.round(60 * v), v < 0 && (v += 360), N = (w + u) / 2, _ = S == 0 ? 0 : S / (1 - Math.abs(2 * N - 1)), _ = +(100 * _).toFixed(1), N = +(100 * N).toFixed(1), { hsl: `hsl(${v}, ${_}%, ${N}%)`, hsla: `hsl(${v}, ${_}%, ${N}%, 1)`, hue: v, lightness: N, saturation: _ };
    }, hr = (e) => {
      if (!e.includes("#")) throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");
      let n = 0, o = 0, s = 0;
      if (e.length === 4) n = `0x${e[1]}${e[1]}`, o = `0x${e[2]}${e[2]}`, s = `0x${e[3]}${e[3]}`;
      else {
        if (e.length !== 7) throw new Error("Invalid hex string length, cannot convert to RGB.");
        n = `0x${e[1]}${e[2]}`, o = `0x${e[3]}${e[4]}`, s = `0x${e[5]}${e[6]}`;
      }
      return [+n, +o, +s];
    }, hn = (e) => {
      const n = e;
      if (n.startsWith("#"))
        return { rgb: hr(n).join(", "), alpha: 1 };
      const o = n.match(/\d{1,3}(\.\d+)?/g);
      if (o) {
        const [s, u, w, S] = o;
        return { rgb: `${s}, ${u}, ${w}`, alpha: S !== void 0 ? parseFloat(S) : 1 };
      }
      return { rgb: hr(e).join(", "), alpha: 1 };
    }, gr = (e, n = !1) => {
      const o = ((s) => {
        if (!s) throw new Error("Color is not defined");
        const u = s.toLowerCase();
        let w;
        if (u.includes("rgb")) {
          const v = fn(u);
          v.length > 3 && v.pop(), w = ha(v).hue;
        }
        if (u.includes("#")) {
          const v = hr(u);
          w = ha(v).hue;
        }
        u.includes("hsl") && (w = fn(u)[0]);
        const S = w == null ? void 0 : w.toString();
        if (!S) throw new Error(`Hue was unable to be extracted from "${u}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);
        return S;
      })(e);
      return n ? { background1: `hsla(${o}, 0%, 100%, 1)`, background2: `hsla(${o}, 67%, 99%, 1)`, background3: `hsla(${o}, 26%, 96%, 1)`, background4: `hsla(${o}, 15%, 94%, 1)`, background5: `hsla(${o}, 10%, 88%, 1)`, background6: `hsla(${o}, 80%, 80%, 1)` } : { background1: `hsla(${o}, 8%, 7%, 1)`, background2: `hsla(${o}, 8%, 13%, 1)`, background3: `hsla(${o}, 9%, 15%, 1)`, background4: `hsla(${o}, 6%, 23%, 1)`, background5: `hsla(${o}, 21%, 28%, 1)`, background6: `hsla(${o}, 5%, 51%, 1)` };
    }, xn = (e, n) => {
      const o = {};
      return Object.keys(e).forEach((s) => {
        o[s] = n[s] ? n[s] : e[s];
      }), o;
    };
    var $r = l(877), mr = l.n($r), Pt = l(67), _n = l.n(Pt);
    const gn = { light: { symbol: ((Ts = _n()) == null ? void 0 : Ts.src) || "" }, dark: { symbol: ((Es = mr()) == null ? void 0 : Es.src) || "" } }, Kr = Gt && document.readyState !== "complete" && new Promise((e) => document.addEventListener("readystatechange", () => {
      document.readyState === "complete" && e();
    }));
    function Jt(e) {
      let n;
      const o = /* @__PURE__ */ new Set();
      return () => {
        if (!Xe) throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");
        return n || (n = (async () => {
          await Kr;
          const s = { clientAPIVersion: Vt }, u = await fin.InterApplicationBus.Channel.connect(e, { payload: s });
          return u.onDisconnection(async () => {
            o.forEach((w) => w()), o.clear(), console.warn(`disconnected from channel provider ${e}`), n = void 0;
          }), u;
        })().then((s) => (s.addDisconnectionListener = (u) => {
          o.add(u);
        }, s)).catch((s) => {
          throw n = void 0, new Error(`failed to connect to channel provider ${e}: ${s}`);
        })), n;
      };
    }
    var ga, La;
    (function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    })(ga || (ga = {})), function(e) {
      e[e.Initial = 0] = "Initial", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close";
    }(La || (La = {}));
    const wr = Jt("__of_workspace_protocol__"), On = wr;
    var ie;
    (function(e) {
      e.LaunchApp = "launchApp", e.SavePage = "savePage", e.GetSavedPage = "getSavedPage", e.CreateSavedPage = "createSavedPage", e.UpdateSavedPage = "updateSavedPage", e.DeleteSavedPage = "deleteSavedPage", e.GetSavedPages = "getSavedPages", e.CreateSavedPageInternal = "createSavedPageInternal", e.UpdateSavedPageInternal = "updateSavedPageInternal", e.DeleteSavedPageInternal = "deleteSavedPageInternal", e.UpdatePageForWindow = "updatePageForWindow", e.AttachPagesToWindow = "attachPagesToWindow", e.DetachPagesFromWindow = "detachPagesFromWindow", e.ReorderPagesForWindow = "reorderPagesForWindow", e.SetActivePage = "setActivePage", e.AddPage = "addPage", e.AddDefaultPage = "addDefaultPage", e.GetAllAttachedPages = "getAllAttachedPages", e.GetActivePageIdForWindow = "getActivePageIdForWindow", e.GetPagesForWindow = "getPagesForWindow", e.GetPageForWindow = "getPageForWindow", e.GetSavedPageMetadata = "getSavedPageMetadata", e.GetUniquePageTitle = "getUniquePageTitle", e.GetLastFocusedBrowserWindow = "getLastFocusedBrowserWindow", e.GetPageByViewIdentity = "getPageByViewIdentity", e.GetThemes = "getThemes", e.GetSelectedScheme = "getSelectedScheme", e.SetSelectedScheme = "setSelectedScheme", e.OpenGlobalContextMenuInternal = "openGlobalContextMenuInternal", e.OpenViewTabContextMenuInternal = "openViewTabContextMenuInternal", e.OpenPageTabContextMenuInternal = "openPageTabContextMenuInternal", e.OpenSaveButtonContextMenuInternal = "openSaveButtonContextMenuInternal", e.InvokeCustomActionInternal = "invokeCustomActionInternal", e.RequestQuitPlatformDialogInternal = "requestQuitPlatformDialogInternal", e.GetSavedWorkspace = "getSavedWorkspace", e.CreateSavedWorkspace = "createSavedWorkspace", e.UpdateSavedWorkspace = "updateSavedWorkspace", e.DeleteSavedWorkspace = "deleteSavedWorkspace", e.GetSavedWorkspaces = "getSavedWorkspaces", e.GetSavedWorkspacesMetadata = "getSavedWorkspacesMetadata", e.SaveWorkspace = "saveWorkspace", e.GetCurrentWorkspace = "getCurrentWorkspace", e.ApplyWorkspace = "applyWorkspace", e.RestoreLastSavedWorkspaceInternal = "restoreLastSavedWorkspaceInternal", e.SetActiveWorkspace = "setActiveWorkspace", e.IsBrowserInitialized = "isBrowserInitialized", e.Analytics = "analyticsInternal", e.GetLanguage = "getLanguage", e.GetLanguageResourcesInternal = "getLanguageResourcesInternal", e.SetLanguage = "setLanguage", e.GetDockProviderConfig = "getDockProviderConfig", e.SaveDockProviderConfig = "saveDockProviderConfig", e.HandleSaveModalOnPageClose = "handleSaveModalOnPageClose", e.ShouldPageClose = "shouldPageClose", e.ShouldWindowClose = "shouldWindowClose", e.CopyPage = "copyPage", e.HandlePageChanges = "handlePageChanges", e.MarkUnsavedPagesAsSavedInternal = "markUnsavedPagesAsSavedInternal", e.TrackRemovedTabInternal = "trackRemovedTabInternal", e.RestoreRemovedTabInternal = "restoreRemovedTabInternal", e.TrackVisitedSiteInternal = "trackVisitedSiteInternal", e.GetRecentlyVisitedSitesInternal = "getRecentlyVisitedSitesInternal", e.GetFrequentlyVisitedSitesInternal = "getFrequentlyVisitedSitesInternal", e.SearchSitesInternal = "searchSitesInternal", e.GetSearchProvidersInternal = "getSearchProvidersInternal", e.GetCuratedContentInternal = "getCuratedContentInternal", e.HandleRequestNavigationInternal = "handleRequestNavigationInternal", e.RefreshBookmarksInternal = "refreshBookmarksInternal", e.LaunchBookmarkInternal = "launchBookmarkInternal", e.GetNotificationsConfig = "getNotificationsConfig", e.UpdateDockFavoritesInternal = "updateDockFavoritesInternal", e.UpdateContentMenuInternal = "updateContentMenuInternal", e.LaunchDockEntryInternal = "launchDockEntryInternal", e.SetDockFavoritesOrderInternal = "setDockFavoritesOrderInternal", e.NavigateContentMenuInternal = "navigateContentMenuInternal", e.SetDefaultDockButtonsOrderInternal = "setDefaultDockButtonsOrderInternal", e.GetDockWorkspacesContextMenuInternal = "getDockWorkspacesContextMenuInternal", e.HandleDockWorkspacesMenuResponseInternal = "handleDockWorkspacesMenuResponseInternal", e.RemoveDockFavoriteInternal = "removeDockFavoriteInternal", e.AddDockFavoriteInternal = "addDockFavoriteInternal", e.FocusAndExpandSearchInternal = "focusAndExpandSearchInternal", e.SendUpdateVersionModalResponseInternal = "sendUpdateVersionModalResponseInternal", e.ShowUpdateVersionModalInternal = "showUpdateVersionModalInternal";
    })(ie || (ie = {}));
    const Gn = async (e) => fin.Platform.wrapSync(e).getClient(), Va = async (e) => {
      const n = await Gn(e), o = "Target is not a Workspace Platform. Target must call WorkspacePlatform.init";
      let s;
      try {
        s = await n.dispatch("isWorkspacePlatform");
      } catch {
        throw new Error(o);
      }
      if (typeof s == "boolean" && s) return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."), s;
      if (typeof s == "object" && s.isWorkspacePlatform) return s;
      throw new Error(o);
    }, le = async (e) => (await Va(e), Gn(e)), Be = async (e) => {
      const n = await Va(e);
      if (typeof n == "object" && (n == null ? void 0 : n.isBrowserInitialized) !== !0) throw new Error("Target is not a Browser-enabled Workspace Platform.");
      return Gn(e);
    }, jr = "dark", ma = { [te.Palette.brandPrimary]: "#0A76D3", [te.Palette.brandPrimaryActive]: "#0A71C9", [te.Palette.brandPrimaryHover]: "#0B84EB", [te.Palette.brandPrimaryFocused]: te.Color.white, [te.Palette.brandPrimaryText]: te.Color.white, [te.Palette.statusSuccess]: te.Color.functional1, [te.Palette.statusWarning]: te.Color.functional10, [te.Palette.statusCritical]: te.Color.functional7, [te.Palette.statusActive]: te.Color.functional3, [te.Palette.contentBackground1]: "#0A76D3", [te.Palette.contentBackground2]: "#000000", [te.Palette.contentBackground3]: "#000000", [te.Palette.contentBackground4]: "#000000", [te.Palette.contentBackground5]: "#000000", [te.Palette.borderNeutral]: te.Color.silverGray }, Wn = { ...ma, [te.Palette.background1]: te.Color.white, [te.Palette.background2]: te.Color.lightGray1, [te.Palette.background3]: te.Color.lightGray2, [te.Palette.background4]: te.Color.lightGray3, [te.Palette.background5]: te.Color.lightGray4, [te.Palette.background6]: te.Color.lightGray5, [te.Palette.brandSecondary]: te.Color.lightGray4, [te.Palette.brandSecondaryActive]: te.Color.lightGray4Active, [te.Palette.brandSecondaryHover]: te.Color.lightGray4Hover, [te.Palette.brandSecondaryFocused]: te.Color.darkGray5, [te.Palette.brandSecondaryText]: te.Color.darkGray5, [te.Palette.inputBackground]: te.Color.lightGray3, [te.Palette.inputColor]: te.Color.darkGray5, [te.Palette.inputPlaceholder]: te.Color.darkGray2, [te.Palette.inputDisabled]: te.Color.neutralGray, [te.Palette.inputFocused]: te.Color.lightGray5, [te.Palette.inputBorder]: te.Color.neutralGray, [te.Palette.textDefault]: te.Color.darkGray5, [te.Palette.textHelp]: te.Color.darkGray3, [te.Palette.textInactive]: te.Color.neutralGray }, wa = { ...ma, [te.Palette.background1]: te.Color.darkGray6, [te.Palette.background2]: te.Color.darkGray5, [te.Palette.background3]: te.Color.darkGray4, [te.Palette.background4]: te.Color.darkGray3, [te.Palette.background5]: te.Color.darkGray2, [te.Palette.background6]: te.Color.darkGray1, [te.Palette.brandSecondary]: te.Color.darkGray2, [te.Palette.brandSecondaryActive]: te.Color.darkGray2Active, [te.Palette.brandSecondaryHover]: te.Color.darkGray2Hover, [te.Palette.brandSecondaryFocused]: te.Color.white, [te.Palette.brandSecondaryText]: te.Color.white, [te.Palette.inputBackground]: te.Color.darkGray1, [te.Palette.inputColor]: te.Color.white, [te.Palette.inputPlaceholder]: te.Color.lightGray5, [te.Palette.inputDisabled]: te.Color.neutralGray, [te.Palette.inputFocused]: te.Color.lightGray5, [te.Palette.inputBorder]: te.Color.neutralGray, [te.Palette.textDefault]: te.Color.white, [te.Palette.textHelp]: te.Color.lightGray5, [te.Palette.textInactive]: te.Color.neutralGray }, Ua = [{ label: "OpenFin Default Light and Dark Theme", palettes: { light: { ...Wn, backgroundPrimary: te.Color.darkGray5 }, dark: { ...wa, backgroundPrimary: te.Color.darkGray5 } } }], ya = (e) => {
      const { background: n, foreground: o } = e;
      return { background: n, foreground: o ?? "#FFFFFF" };
    }, tt = (e, n) => {
      var o, s, u;
      return { icons: { symbol: ((u = (s = (o = e.brand) == null ? void 0 : o.icons) == null ? void 0 : s[n]) == null ? void 0 : u.symbol) || gn[n].symbol } };
    }, ba = (e) => {
      const { light: n, dark: o } = "palettes" in e ? e.palettes : { light: e.palette, dark: e.palette }, s = xn(wa, o), u = xn(Wn, n), w = ((q, j) => {
        const X = { ...q }, ne = { ...j };
        let me = j.backgroundPrimary ? gr(j.backgroundPrimary, !0) : {}, Ce = q.backgroundPrimary ? gr(q.backgroundPrimary) : {};
        return me = { ...me, ...ne }, Ce = { ...Ce, ...X }, { light: { ...j, ...me }, dark: { ...q, ...Ce } };
      })(o, n), S = { ...(0, te.createTheme)({ ...s, ...w == null ? void 0 : w.dark }), brand: tt(e, "dark") }, v = { ...(0, te.createTheme)({ ...u, ...w == null ? void 0 : w.light }), brand: tt(e, "light") }, { light: _, dark: N } = ((q) => {
        const j = Object.keys(q.notificationIndicatorColors ?? {});
        if (j != null && j.length) {
          const X = {}, ne = {};
          return j.forEach((me) => {
            const Ce = q.notificationIndicatorColors[me];
            "background" in Ce ? (X[me] = ya(Ce), ne[me] = ya(Ce)) : (X[me] = ya(Ce.dark ?? Ce.light), ne[me] = ya(Ce.light ?? Ce.dark));
          }), { light: ne, dark: X };
        }
        return { light: null, dark: null };
      })(e);
      return S.notificationIndicatorColors = N, v.notificationIndicatorColors = _, { dark: S, light: v };
    }, zn = async (e) => {
      const { themes: n, selectedScheme: o } = await (async (w) => {
        var v, _, N;
        const S = (N = (_ = (v = fin == null ? void 0 : fin.__internal_) == null ? void 0 : v.initialOptions) == null ? void 0 : _.workspacePlatform) == null ? void 0 : N._themeData;
        return !S || w.uuid !== et.uuid ? { themes: await b(w).Theme.getThemes(), selectedScheme: await b(w).Theme.getSelectedScheme() } : S;
      })(e);
      var s, u;
      return (s = n != null && n.length ? n : Ua, u = o, s.map((w) => {
        const S = "palettes" in w ? w.default : jr, { light: v, dark: _ } = ba(w);
        return { label: w.label, logoUrl: w.logoUrl, theme: { dark: _, light: v }, defaultScheme: u ?? S };
      }))[0];
    }, Bn = async (e) => {
      const n = await le(e || fin.me.identity), o = await n.dispatch(ie.GetSelectedScheme, void 0);
      return o === ke.System ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : o;
    }, yr = async (e, n) => {
      var w, S;
      const o = await zn(fin.me.identity), s = await Bn(fin.me.identity) === ke.Dark, u = o == null ? void 0 : o.theme;
      return ((S = (w = u == null ? void 0 : u[s ? ke.Dark : ke.Light]) == null ? void 0 : w.palette) == null ? void 0 : S[e]) || n;
    };
    function br(e) {
      return function(n, o) {
        const s = {};
        for (const u of o) u in n && (s[u] = n[u]);
        return s;
      }(e, Pn()(["defaultLeft", "defaultTop", "defaultCentered", "saveWindowState", "taskbarIconGroup"]));
    }
    function va() {
      let e, n;
      return { promise: new Promise((o, s) => {
        e = o, n = s;
      }), resolve: e, reject: n };
    }
    const qn = Wu, Jn = (e) => ({ setItem: (n, o) => {
      localStorage.setItem(`${e}-${n}`, o);
    }, getItem: (n) => localStorage.getItem(`${e}-${n}`), removeItem: (n) => localStorage.removeItem(`${e}-${n}`) });
    let $a;
    function vr() {
      return $a || ($a = Jn(Ie.uuid)), $a;
    }
    const Ue = (e, n) => vr().setItem(e, n), ka = (e) => vr().getItem(e), vo = (e) => vr().removeItem(e);
    var kr;
    (function(e) {
      e.CurrentWorkspaceId = "currentWorkspaceId", e.LastFocusedBrowserWindow = "lastFocusedBrowserWindow", e.MachineName = "machineName", e.NewTabPageLayout = "NewTabPageLayout", e.NewTabPageSort = "NewTabPageSort", e.DockPosition = "DockPosition", e.SelectedColorScheme = "SelectedColorScheme", e.ThemePaletteSheet = "ThemePaletteSheet", e.HasMovedStore = "HasMovedStore", e.PageDragState = "BrowserPageDragState", e.ThemePaletteDefaultScheme = "ThemePaletteDefaultScheme";
    })(kr || (kr = {}));
    const nt = kr, nn = (e) => e + "-" + fin.me.uuid, Sa = (e, n) => {
      const o = Ze && Xe && new qn.Dexie(e);
      return o && o.version(0.1).stores({ [n]: "" }), o;
    }, mn = (e, n) => {
      const o = Sa(nn(e), n), s = Sa(e, n);
      if (!o || !s) throw new Error("Unable to migrate store - IndexDB not supported");
      return (async (u, w, S) => {
        if (!u[S]) return void console.warn(`Legacy store ${S} not found, skipping migration`);
        const v = ka(nt.HasMovedStore), _ = v ? JSON.parse(v) : {};
        if (_ && _[S]) return;
        _[S] = !0, Ue(nt.HasMovedStore, JSON.stringify(_));
        const N = await u[S].toArray();
        await w[S].bulkPut(N);
      })(s, o, e), o;
    }, Ka = "dock3-provider-config", Nn = Ze && Xe && new qn.Dexie(nn("dock3-provider-config"));
    Nn && Nn.version(0.1).stores({ [Ka]: "" });
    var st, Ct, Zt, wn, an = function(e, n, o, s, u) {
      if (typeof n == "function" ? e !== n || !0 : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return n.set(e, o), o;
    }, gt = function(e, n, o, s) {
      if (typeof n == "function" ? e !== n || !s : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return o === "m" ? s : o === "a" ? s.call(e) : s ? s.value : n.get(e);
    };
    class Cn {
      static getOverrideConstructor(...n) {
        return class extends Cn {
          constructor() {
            super(...n);
          }
        };
      }
      constructor(n, o) {
        if (st.set(this, void 0), Ct.set(this, void 0), Zt.set(this, null), wn.set(this, va()), Cn.instance) throw new Error("Dock3Provider has already been initialized.");
        Cn.instance = this, an(this, st, n), an(this, Ct, o), this.registerChannelActions();
      }
      async launchEntry(n) {
      }
      get ready() {
        return gt(this, wn, "f").promise;
      }
      async bookmarkContentMenuEntry(n) {
      }
      get config() {
        return gt(this, st, "f");
      }
      set config(n) {
        an(this, st, n);
      }
      async updateConfig(n) {
        await this.handleConfigChange(n);
      }
      async shutdown() {
        await Promise.all([gt(this, Ct, "f").destroy(), this.getWindowSync().close(!0)]), Cn.instance = null;
      }
      async saveConfig({ config: n }) {
        an(this, st, n), await async function(o) {
          if (!Nn) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
          await Nn[Ka].put(o, "latest");
        }(n);
      }
      async handleConfigChange(n) {
        gt(this, Zt, "f") && await gt(this, Ct, "f").dispatch(gt(this, Zt, "f"), "handle-dock-config-updated", n);
      }
      async loadConfig() {
        const n = await async function() {
          if (!Nn) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
          try {
            return await Nn[Ka].get("latest");
          } catch (o) {
            return void console.warn("Failed to retrieve Dock provider config from IndexedDB", o);
          }
        }();
        return n && an(this, st, n), gt(this, st, "f");
      }
      getWindowSync() {
        return fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: At });
      }
      registerChannelActions() {
        gt(this, Ct, "f").register("launch-entry", this.launchEntry.bind(this)), gt(this, Ct, "f").register("save-config", this.saveConfig.bind(this)), gt(this, Ct, "f").register("bookmark-content-menu-entry", this.bookmarkContentMenuEntry.bind(this)), gt(this, Ct, "f").onConnection((n) => {
          n.name === At && an(this, Zt, n);
        }), gt(this, Ct, "f").register("ready", async (n, o) => {
          var s;
          if (((s = gt(this, Zt, "f")) == null ? void 0 : s.endpointId) !== o.endpointId) throw new Error(`Dock3Provider: 'ready' action received from unexpected client ${o.name} (${o.uuid})`);
          gt(this, wn, "f").resolve();
        }), gt(this, Ct, "f").onDisconnection((n) => {
          var o;
          ((o = gt(this, Zt, "f")) == null ? void 0 : o.endpointId) === n.endpointId && (an(this, Zt, null), an(this, wn, va()));
        });
      }
    }
    async function rn(e) {
      const { config: n, override: o } = e;
      if (Cn.instance) throw new Error("Dock3Provider has already been initialized.");
      const s = await fin.InterApplicationBus.Channel.create(Bt()), u = new (o(Cn.getOverrideConstructor(n, s)))();
      return await u.loadConfig(), await async function(w, S, v, _) {
        var N, q, j;
        if (!await pn({ uuid: et.uuid, name: w })) {
          let X;
          X = typeof ((N = v.dockPosition) == null ? void 0 : N.left) == "number" || typeof (_ == null ? void 0 : _.defaultLeft) == "number" ? (q = v.dockPosition) == null ? void 0 : q.left : (await jn(et)).left - jt / 2;
          const ne = { name: w, url: S + $.EnterpriseDock, autoShow: !0, frame: !1, smallWindow: !0, saveWindowState: !1, defaultHeight: Je, defaultWidth: jt, includeInSnapshots: !1, defaultTop: ((j = v.dockPosition) == null ? void 0 : j.top) ?? tn, defaultLeft: X, workspacePlatform: { windowType: v.windowType, ...v }, throttling: "disabled", resizable: !1, maximizable: !1, backgroundColor: await yr("background1"), ...br(_ ?? {}) };
          await fin.Window.create(St(ne));
        }
      }(At, await dn(), u.config, e.windowOptions), await u.ready, u;
    }
    st = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Cn.instance = null;
    const ct = async (e) => {
      var s;
      const n = e ? fin.Window.wrapSync(e) : fin.Window.getCurrentSync(), o = await n.getOptions();
      return ((s = o.workspacePlatform) == null ? void 0 : s.windowType) && o.workspacePlatform.windowType === "enterprise";
    }, Sr = (e) => {
      var o, s;
      return ((s = (o = e == null ? void 0 : e.defaultWindowOptions) == null ? void 0 : o.workspacePlatform) == null ? void 0 : s.windowType) === "enterprise";
    };
    let Pa;
    const xa = (e) => {
      if (e) try {
        return new URL(e).pathname.includes($.EnterpriseLandingPage.replace(/\/$/, ""));
      } catch {
        console.error("error parsing url: %O", e);
      }
      return !1;
    };
    var Mn;
    (function(e) {
      e.Browser = "Browser", e.Dock = "Dock", e.EnterpriseDock = "EnterpriseDock", e.Home = "Home", e.Notification = "Notification", e.Storefront = "Storefront", e.Platform = "Platform", e.Theming = "Theming", e.Microflow = "Microflow";
    })(Mn || (Mn = {}));
    const Ca = async (e, n, o = "workspace-licensing") => {
      const s = { apiVersion: n.apiVersion || Vt, componentName: e, componentVersion: n.componentVersion || Vt, allowed: n.allowed, rejectionCode: n.rejectionCode };
      fin.System.registerUsage({ type: o, data: s });
    };
    let Hr = !1;
    const Fn = /* @__PURE__ */ new Map(), Gr = (e) => {
      let n = Fn.get(e.uuid);
      return n || (n = b(e), n.once("closed", () => {
        Fn.delete(e.uuid);
      }), Fn.set(e.uuid, n)), n;
    }, zr = async (e, n) => {
      try {
        await e._raiseAnalytics([n]);
      } catch (o) {
        console.error("failed to raise analytics event", o);
      }
    }, _t = async (e) => {
      await zr(Gr(fin.me.identity), { source: "Browser", ...e });
    };
    let Zn;
    const Ma = async (e) => {
      Zn || (Zn = new TextEncoder());
      const n = Zn.encode(e), o = await window.crypto.subtle.digest("SHA-256", n);
      return Array.from(new Uint8Array(o)).map((s) => s.toString(16).padStart(2, "0")).join("");
    };
    function Pr(e) {
      return e && typeof e == "object" && !Array.isArray(e);
    }
    function Yn(e, ...n) {
      if (!n.length) return e;
      const o = n.shift();
      return Pr(e) && Pr(o) && Object.entries(o).forEach(([s, u]) => {
        if (Pr(u)) return e[s] || (e[s] = {}), Yn(e[s], u);
        e[s] = u;
      }), Yn(e, ...n);
    }
    const ko = Xu;
    var ja = l.n(ko);
    function Et() {
      return typeof crypto !== void 0 && "randomUUID" in crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    function xr() {
      return localStorage.getItem(nt.MachineName) ?? "unknown";
    }
    let Qn;
    async function Ia() {
      return Qn || (Qn = await fin.System.getMachineId()), Qn;
    }
    const Ha = (e) => {
      var n;
      if (Array.isArray((n = e.workspacePlatform) == null ? void 0 : n.pages) && (e.layoutSnapshot || e.layout)) {
        const o = e.workspacePlatform.pages.find((s) => s.isActive);
        if (o) {
          const s = e.layoutSnapshot ? e.layoutSnapshot.layouts[o.layoutContainerKey] : e.layout;
          if (s) if (o.isLocked) {
            const u = W(s, o.layout);
            o.layout = u, e.layout = u;
          } else o.layout = s, e.layout = s;
        }
      }
      return e;
    };
    async function Ga(e) {
      var s;
      const n = e || await fin.Platform.getCurrentSync().getSnapshot();
      if ((s = n.snapshotDetails) != null && s.machineId) return n;
      const o = xr();
      return { ...n, snapshotDetails: { ...n.snapshotDetails, machineId: await Ia(), machineName: o } };
    }
    const So = async (e) => ({ ...e, layoutDetails: { machineId: await Ia(), machineName: xr() } }), on = async (e, n) => ({ pageId: Et(), title: e, layout: await So(n), isReadOnly: !1 }), za = async (e) => {
      const n = await on(e.title, E(e.layout));
      return e.panels && (n.panels = e.panels.map((o) => ({ ...o, viewOptions: R(o.viewOptions) }))), { ...e, ...n };
    }, qa = (e) => {
      const n = fin.Platform.Layout.wrapSync(e);
      return { show: async () => {
        const o = await n.getConfig(), { settings: s, dimensions: u } = o, w = await ct(e);
        await n.replace({ ...o, settings: { ...s, hasHeaders: !0, reorderEnabled: !0 }, dimensions: { ...u, headerHeight: w ? 28 : 30 } });
      }, hide: async (o) => {
        var S;
        const s = await n.getConfig(), { settings: u, dimensions: w } = await s;
        await n.replace({ ...s, settings: { ...u, hasHeaders: !1, reorderEnabled: ((S = o == null ? void 0 : o.settings) == null ? void 0 : S.reorderEnabled) ?? !1 }, dimensions: { ...w, headerHeight: 0 } });
      }, isShowingTabs: async () => {
        try {
          const o = await n.getConfig(), { settings: s } = await o;
          return s.hasHeaders;
        } catch (o) {
          return console.error("failed to get layout config: ", o), !0;
        }
      } };
    }, Lt = "of-workspace-", In = new class {
      mark(e) {
        performance.mark(`${Lt}${e}`);
      }
      markStart(e) {
        performance.mark(`${Lt}${e}-start`);
      }
      markEnd(e) {
        performance.mark(`${Lt}${e}-end`);
      }
      markEndAndMeasure(e) {
        performance.mark(`${Lt}${e}-end`);
        try {
          return performance.measure(`${Lt}${e}`, `${Lt}${e}-start`, `${Lt}${e}-end`);
        } catch {
        }
      }
      markAndMeasure(e, n) {
        performance.mark(`${Lt}${e}`);
        try {
          return performance.measure(`${Lt}${e}-measure`, `${Lt}${n}-start`, `${Lt}${e}`);
        } catch {
        }
      }
      reportWorkspacePerformanceEntries() {
        return performance.getEntriesByType("measure").filter((e) => e.name.startsWith(Lt));
      }
      reportWorkspacePerformance() {
        return this.reportWorkspacePerformanceEntries().map((e) => ({ name: e.name.replace(`${Lt}`, "").replace("-measure", ""), duration: e.duration }));
      }
    }(), Rt = () => {
      const e = `browser-context-menu-startup-${Et()}`;
      return In.markStart(e), e;
    }, Xn = (e) => {
      In.markAndMeasure("browser-context-menu-called", e);
    }, ea = (e) => {
      fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
        ((n) => {
          In.markAndMeasure("browser-context-menu-shown", n);
        })(e);
      });
    }, qr = (e, n) => n ? `${n}-${e.uuid}-${e.name}` : `__browser_window__-${e.uuid}-${e.name}`, ta = /* @__PURE__ */ new Map(), Cr = (e) => (ta.has(e) || ta.set(e, Jt(e)), ta.get(e)()), lt = (e, n) => {
      const o = qr(e, n);
      return Cr(o);
    };
    var na, Aa, Yt, yn, An, aa;
    (function(e) {
      e.CloseBrowserWindow = "close-browser-window", e.QuitPlatform = "quit-platform", e.ClosePage = "close-page", e.AddToChannel = "add-to-channel", e.RemoveFromChannel = "remove-from-channel", e.OpenSaveModalInternal = "open-save-modal-internal", e.DuplicatePage = "duplicate-page", e.SetSelectedScheme = "set-selected-scheme", e.ShowBrowserIndicator = "show-browser-indicator", e.SetSelectedLanguage = "set-selected-language", e.RefreshBookmarksInternal = "refresh-bookmarks", e.GetLayoutsWithSelectedViewsInternal = "get-layouts-with-selected-views", e.FocusAndExpandSearchInternal = "focus-and-expand-search";
    })(na || (na = {})), function(e) {
      e.GetPages = "get-pages", e.GetActivePageForWindow = "get-active-page-for-window", e.AttachPagesToWindow = "attach-pages-to-window", e.DetachPagesFromWindow = "detach-pages-from-window", e.SetActivePageForWindow = "set-active-page-for-window", e.RenamePage = "rename-page", e.ReorderPagesForWindow = "reorder-pages-for-window", e.UpdatePageForWindow = "update-page-for-window", e.UpdatePagesWindowOptions = "update-pages-window-options", e.IsDetachingPages = "is-detaching-pages", e.IsActivePageChanging = "is-active-page-changing";
    }(Aa || (Aa = {})), function(e) {
      e.GetApps = "get-apps", e.GetCuratedContent = "get-curated-content", e.GetRecentlyVisited = "get-recently-visited", e.GetSearchProviders = "get-search-providers";
    }(Yt || (Yt = {})), function(e) {
      e.CreateBookmarkNode = "create-bookmark-node", e.GetBookmarkNode = "get-bookmark-node", e.SearchBookmarkNodes = "search-bookmark-nodes", e.UpdateBookmarkNode = "update-bookmark-node", e.DeleteBookmarkNode = "delete-bookmark-node";
    }(yn || (yn = {})), function(e) {
      e.UpdateFavoriteEntries = "update-favorite-entries", e.UpdateContentMenu = "update-content-menu", e.NavigateContentMenu = "navigate-content-menu";
    }(An || (An = {})), function(e) {
      e.SendUpdateVersionModalResponse = "send-update-version-modal-response";
    }(aa || (aa = {}));
    const ut = { ...na, ...Aa, ...An }, ra = Jt(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-bookmarks`), Mr = (e) => ({ identity: e, openfinWindow: fin.Window.wrapSync(e), _bookmarks: { _createBookmarkNode: async (n) => (async (o) => (await ra()).dispatch(yn.CreateBookmarkNode, o))(n), _getBookmarkNode: async (n) => (async (o) => (await ra()).dispatch(yn.GetBookmarkNode, o))(n), _searchBookmarkNodes: async (n) => (async (o) => (await ra()).dispatch(yn.SearchBookmarkNodes, o))(n), _updateBookmarkNode: async (n) => (async (o) => (await ra()).dispatch(yn.UpdateBookmarkNode, o))(n), _deleteBookmarkNode: async (n) => (async (o) => (await ra()).dispatch(yn.DeleteBookmarkNode, o))(n) }, getPages: async () => (await Be(e)).dispatch(ie.GetPagesForWindow, e), getPage: async (n) => (await Be(e)).dispatch(ie.GetPageForWindow, { identity: e, pageId: n }), addPage: async (n) => y().Browser.wrapSync(e)._addPage(n), _addPage: async (n, o) => {
      const s = await Be(e), u = { identity: e, page: n, insertionIndex: o == null ? void 0 : o.index, multiInstanceViewBehavior: o == null ? void 0 : o.multiInstanceViewBehavior };
      return s.dispatch(ie.AddPage, u);
    }, _addPages: async (n, o) => {
      const s = await Be(e), u = n.map(({ page: S, opts: v }) => ({ ...S, multiInstanceViewBehavior: (v == null ? void 0 : v.multiInstanceViewBehavior) || "duplicate" })), w = { identity: e, pages: u, ...o };
      return s.dispatch(ie.AttachPagesToWindow, w);
    }, removePage: async (n) => (await Be(e)).dispatch(ie.DetachPagesFromWindow, { identity: e, pageIds: [n] }), reparentPage: async (n) => y().Browser.wrapSync(e)._reparentPage(n), _reparentPage: async (n) => {
      const { pageId: o } = n, s = await Be(e), u = (await s.dispatch(ie.GetAllAttachedPages, void 0)).find(({ pageId: S }) => S === o);
      if (!u) throw new Error(`Reparent Page Error: Target page with pageId ${o} not found`);
      u.multiInstanceViewBehavior = "reparent";
      const w = { identity: e, pages: [u], insertionIndex: n.index };
      return s.dispatch(ie.AttachPagesToWindow, w);
    }, setActivePage: async (n) => (await Be(e)).dispatch(ie.SetActivePage, { identity: e, pageId: n }), updatePage: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.UpdatePageForWindow, n);
    }, reorderPages: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.ReorderPagesForWindow, n);
    }, _openGlobalContextMenu: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.OpenGlobalContextMenuInternal, n);
    }, replaceToolbarOptions: async (n) => {
      await Be(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { toolbarOptions: n } });
    }, replaceWindowStateButtonOptions: async (n) => {
      await Be(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { windowStateButtonOptions: n } });
    }, updateBrowserWindowTitle: async (n) => {
      const o = fin.Window.wrapSync(e);
      typeof n != "string" ? await o.updateOptions({ workspacePlatform: { title: n } }) : console.warn("Type string for window title is deprecated, please use WindowTitle type instead", n);
    }, _openViewTabContextMenu: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.OpenViewTabContextMenuInternal, n);
    }, _openPageTabContextMenu: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.OpenPageTabContextMenuInternal, n);
    }, _openSaveModal: async (n) => (await Be(e), (await lt(e)).dispatch(ut.OpenSaveModalInternal, n)), _getLayoutsWithSelectedViews: async () => (await lt(e)).dispatch(ut.GetLayoutsWithSelectedViewsInternal, e), _openSaveButtonContextMenu: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.OpenSaveButtonContextMenuInternal, n);
    }, _addDefaultPage: async (n) => {
      const o = await Be(e);
      return n.identity = e, o.dispatch(ie.AddDefaultPage, n);
    }, _trackRemovedTab: async (n) => (await Be(e)).dispatch(ie.TrackRemovedTabInternal, n), _restoreRemovedTab: async (n) => (await Be(e)).dispatch(ie.RestoreRemovedTabInternal, n), _trackVisitedSite: async (n) => (await Be(e)).dispatch(ie.TrackVisitedSiteInternal, n), _getRecentlyVisitedSites: async (n) => (await Be(e)).dispatch(ie.GetRecentlyVisitedSitesInternal, n), _getFrequentlyVisitedSites: async (n) => (await Be(e)).dispatch(ie.GetFrequentlyVisitedSitesInternal, n), _searchSites: async (n) => (await Be(e)).dispatch(ie.SearchSitesInternal, { identity: e, req: n }), _getSearchProviders: async () => (await Be(e)).dispatch(ie.GetSearchProvidersInternal, { identity: e }), _getCuratedContent: async (n) => (await Be(e)).dispatch(ie.GetCuratedContentInternal, { identity: e, req: n }), _handleRequestNavigation: async (n) => (await Be(e)).dispatch(ie.HandleRequestNavigationInternal, n), _sendUpdateVersionModalResponse: async (n) => (await Be(e)).dispatch(ie.SendUpdateVersionModalResponseInternal, n) }), Ir = (e) => {
      const n = fin.Platform.wrapSync(e);
      return { wrapSync: (o) => Mr(o), createWindow: async (o) => {
        const s = (() => {
          const w = `browser-window-startup-${Et()}`;
          return In.markStart(w), w;
        })();
        ((w) => {
          fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
            In.markAndMeasure("browser-window-shown", w);
          });
        })(s), await Be(e);
        const u = await n.createWindow(o);
        return ((w) => {
          In.markAndMeasure("browser-window-started", w);
        })(s), Mr(u.identity);
      }, getAllAttachedPages: async () => (await Be(e)).dispatch(ie.GetAllAttachedPages, void 0), getAllWindows: async () => (await Be(e), (await $n()).map((o) => Mr(o.identity))), getUniquePageTitle: async (o) => (await Be(e)).dispatch(ie.GetUniquePageTitle, o), getLastFocusedWindow: async () => (await Be(e)).dispatch(ie.GetLastFocusedBrowserWindow, void 0), getPageByViewIdentity: async (o) => (await Be(e)).dispatch(ie.GetPageByViewIdentity, o) };
    }, Ja = (e, n = 0) => {
      let o, s, u = !1;
      const w = async (S) => {
        const v = await e(...S);
        if (u) {
          await new Promise((N) => setTimeout(N, n));
          const _ = o;
          return o = void 0, u = !1, w(_);
        }
        return v;
      };
      return (...S) => (s ? (u = !0, o = S) : s = w(S).catch((v) => {
        throw console.error("makeDebouncedFunc", v), v;
      }).finally(() => {
        s = void 0;
      }), s);
    };
    var Jr;
    (function(e) {
      e.Home = "/home", e.Browser = "/browser", e.Enterprise = "/enterprise", e.Provider = "/provider", e.Storefront = "/storefront", e.Dock = "/dock";
    })(Jr || (Jr = {}));
    function Ar(e, n) {
      return async (o, ...s) => {
        e.has(o) && e.get(o).forEach((u) => u(...s)), n && await n({ event: o, payload: s });
      };
    }
    function Za(e, n) {
      return n && n((o) => {
        const { event: s, payload: u } = o;
        e.has(s) && e.get(s).forEach((w) => w(...u));
      }), (o, s) => {
        e.has(o) || e.set(o, /* @__PURE__ */ new Set()), e.get(o).add(s);
      };
    }
    function Po(e) {
      return (n, o) => {
        e.has(n) || e.set(n, /* @__PURE__ */ new Set());
        const s = e.get(n), u = (...w) => {
          o(...w), s.delete(u);
        };
        s.add(u);
      };
    }
    function Zr(e) {
      return (n, o) => {
        e.has(n) && e.get(n).delete(o);
      };
    }
    const xo = { name: Fe.BrowserMenu, alwaysOnTop: !0, autoShow: !0, frame: !1, resizable: !1, backgroundColor: "#2f3136", smallWindow: !0, showTaskbarIcon: !1, backgroundThrottling: !1, saveWindowState: !1 };
    function Ya(e) {
      const n = { ...xo, ...e };
      return n.url = function(o, s) {
        if (!Gt) throw new Error("resolveAbsolutePath can only be used in a window");
        const u = window.location;
        if (/^(?:[a-z]+:)?\/\//i.test(o)) return o;
        const w = `${u.protocol}//${u.hostname}`;
        return new URL(o, w).href;
      }(n.url ?? ""), n;
    }
    const Ta = function(e) {
      const n = /* @__PURE__ */ new Map();
      return { emit: Ar(n, (o) => Xe && fin.InterApplicationBus.publish(e, o)), addListener: Za(n, (o) => Xe && fin.InterApplicationBus.subscribe({ uuid: fin.me.uuid }, e, o)), addListenerWithUUID: (o) => Za(n, (s) => Xe && fin.InterApplicationBus.subscribe({ uuid: o }, e, s)), removeListener: Zr(n), once: Po(n) };
    }("window.menu"), Ea = (e, n) => fin.Window.wrapSync(e).updateOptions({ opacity: n }), Qa = (e) => Ta.emit("response", e), Tr = Ja(async () => (await Sn()).getChildWindows(), 500), oa = /* @__PURE__ */ new Map();
    async function Yr(e, n, o) {
      var v, _;
      const s = Ya(e), u = await zn(fin.me.identity), w = await Bn(fin.me.identity) === ke.Dark, S = u == null ? void 0 : u.theme;
      return s.backgroundColor = ((_ = (v = S == null ? void 0 : S[w ? ke.Dark : ke.Light]) == null ? void 0 : v.palette) == null ? void 0 : _.inputBackground) || s.backgroundColor, oa.has(s.name) ? oa.get(s.name) : new Promise((N) => {
        Ta.once("ready", async (j) => {
          if (j.name === s.name) {
            const X = await oa.get(s.name);
            s.preventBlur || X.once("blurred", async () => {
              if (Ea(j, 0), X.hide(), Qa({ name: s.name, data: { actionName: "Cancel" } }), ne = X.identity.name, [Fe.BrowserSaveMenu, Fe.DockSaveWorkspaceMenu, Fe.DesktopSignalsModal].includes(ne)) {
                const me = await X.getOptions();
                me.customContext !== "submitting" && me.customContext !== "error" && X.close();
              } else X.identity.name.startsWith(Fe.BrowserMenu) && X.close();
              var ne;
            }), setTimeout(async () => {
              await Ea(j, 1), (await fin.Window.wrapSync(j).getOptions()).opacity !== 1 && Ea(j, 1);
            }), N(X);
          }
        });
        const q = (async () => {
          const j = await fin.Platform.getCurrentSync().createWindow(St({ ...s, opacity: 0, url: n || s.url, defaultLeft: o == null ? void 0 : o.left, defaultTop: o == null ? void 0 : o.top, defaultWidth: o == null ? void 0 : o.width, defaultHeight: o == null ? void 0 : o.height, workspacePlatform: { preventBlur: e.preventBlur } }, !0));
          return j.once("closed", () => {
            oa.delete(s.name);
          }), j;
        })();
        oa.set(s.name, q);
      });
    }
    async function Qr(e, n) {
      const o = Ya(e), s = { top: o.top, left: o.left, width: o.defaultWidth || o.width, height: o.defaultHeight || o.height };
      return n.set("parentName", fin.Window.getCurrentSync().identity.name), { name: o.name, bounds: s, route: `${o.url}#${n.toString()}` };
    }
    async function Er({ options: e, parameters: n }) {
      const o = n ?? new URLSearchParams(), s = Ya(e), { name: u, modalParentIdentity: w } = s;
      if (!o.has("isEnterprise")) {
        const v = `${await (async (_) => (Pa || (Pa = await ct(_)), Pa))(w)}`;
        o.set("isEnterprise", v);
      }
      let S = await async function(v) {
        return (await Tr()).find((_) => _.identity.name === v);
      }(u);
      if (S) await async function(v, _) {
        const { name: N, bounds: q, route: j } = await Qr(v, _), X = { uuid: fin.me.identity.uuid, name: N }, ne = fin.Window.wrapSync(X);
        await Promise.all([ne.hide(), Ea(X, 0), ne.setBounds(q)]), v.preventBlur || ne.once("blurred", () => {
          Ea(X, 0), ne.hide(), Qa({ name: X.name, data: { actionName: "Cancel" } });
        }), Ta.emit("update", N, q, j), await Qa({ name: N, data: { actionName: "Cancel" } });
      }(s, o);
      else {
        const { route: v, bounds: _ } = await Qr(e, o);
        S = await Yr({ ...s }, v, _);
      }
      return S;
    }
    const ia = async ({ options: e, content: n, parameters: o }) => {
      var S;
      const s = o ?? new URLSearchParams();
      s.set("content", JSON.stringify({ ...n, invocationId: Et() }));
      const u = { ...e, name: `${e.name}--${((S = e.modalParentIdentity) == null ? void 0 : S.name) ?? ""}` }, w = await Er({ options: u, parameters: s });
      return new Promise((v) => {
        Ta.once("response", async (_) => {
          _.name === u.name && (v({ data: _.data }), u != null && u.closeOnResponse && w.close());
        });
      });
    };
    let sa;
    async function bn(e) {
      return (await (sa || (sa = Jt(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-modal`)()), sa)).dispatch(aa.SendUpdateVersionModalResponse, e);
    }
    const yt = async (e) => {
      const n = Ft(e), o = await n.getBounds(), s = ge(o), u = la(s, { height: 240, width: 432 });
      return Er({ options: { smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: Fe.DesktopSignalsModal, url: await Dt() + $.DesktopSignalsModal, defaultWidth: 432, defaultHeight: 240, preventBlur: !1, ...u }, parameters: new URLSearchParams({ title: "Desktop Signals Modal" }) });
    }, Xa = (e) => ({ createPage: async (n) => (await Be(e)).dispatch(ie.CreateSavedPageInternal, n), deletePage: async (n) => (await Be(e)).dispatch(ie.DeleteSavedPageInternal, n), updatePage: async (n) => (await Be(e)).dispatch(ie.UpdateSavedPageInternal, n), getPage: async (n) => (await Be(e)).dispatch(ie.GetSavedPage, n), getPages: async (n) => (await Be(e)).dispatch(ie.GetSavedPages, n), savePage: async (n) => (await Be(e)).dispatch(ie.SavePage, n), createWorkspace: async (n) => (await le(e)).dispatch(ie.CreateSavedWorkspace, n), deleteWorkspace: async (n) => {
      const o = y(), s = await o.getCurrentWorkspace();
      if (s.workspaceId === n) throw new Error(`Cannot delete current active workspace ${s.title}`);
      return (await le(e)).dispatch(ie.DeleteSavedWorkspace, n);
    }, updateWorkspace: async (n) => (await le(e)).dispatch(ie.UpdateSavedWorkspace, n), getWorkspace: async (n) => (await le(e)).dispatch(ie.GetSavedWorkspace, n), getWorkspaces: async (n) => (await le(e)).dispatch(ie.GetSavedWorkspaces, n), getWorkspacesMetadata: async (n) => (await le(e)).dispatch(ie.GetSavedWorkspacesMetadata, n), saveWorkspace: async (n) => (await le(e)).dispatch(ie.SaveWorkspace, n), getDockProviderConfig: async (n) => (await le(e)).dispatch(ie.GetDockProviderConfig, n), saveDockProviderConfig: async (n) => (await le(e)).dispatch(ie.SaveDockProviderConfig, n) });
    var Tn;
    (function(e) {
      e.UpdatePlatformThemeScheme = "update-platform-theme-scheme";
    })(Tn || (Tn = {}));
    const Co = Jt("of-workspace-notifications-sync"), Rr = ke.Dark, Dr = (e) => Object.entries(e).reduce((n, [o, s]) => `${n}--workspace-palette-${o}: ${s};`, ""), Ln = (e, n) => {
      const o = !!e.contentBackground5 && e.contentBackground5 !== "#000000", s = !!e.contentBackground4 && e.contentBackground4 !== "#000000", u = hn(e.textDefault), w = hn(e.textInactive), S = u.rgb, v = w.rgb, _ = u.alpha ? parseFloat(u.alpha.toString()) : 1, N = w.alpha ? parseFloat(w.alpha.toString()) : 1;
      return { dockExpandedContainerBorderColor: o ? e.contentBackground5 : e.background4, dockExpandedContainerBorderRadius: o && n ? "0" : "10px", dockExpandedContainerBackground: s ? e.contentBackground4 : e.background1, fillerBackgroundColor: s ? e.contentBackground4 : "inherit", dockCompanionContainerBackground: s ? e.contentBackground4 : "inherit", dockComponentContainerBackground: o ? e.contentBackground5 : e.background5, styledDropdownActiveBackground: `${o ? e.contentBackground5 : e.background4}`, contentMenuWrapperInternalDivBorderColor: o ? e.contentBackground5 : e.background5, contentMenuItemContainerActiveBackground: o ? e.contentBackground5 : e.background3, contentMenuItemContainerHoverBackground: o ? e.contentBackground5 : e.background2, contentMenuHeaderBorderColor: o ? e.contentBackground5 : e.background5, dockCompanionSeparatorBorderColor: o ? e.contentBackground5 : e.background3, dockComponentContainerBorderColor: o ? e.contentBackground5 : e.background5, companionDockButtonActiveBackground: o ? e.contentBackground5 : e.background4, companionDockButtonHoverBackground: o ? e.contentBackground5 : e.background4, "computed-scrollbar-thumb-alpha": _, "computed-scrollbar-track-alpha": N, "scrollbar-thumb-rgb": S, "scrollbar-track-rgb": v };
    }, er = (e, n, o) => ({ selectedTab: n === "dark" ? e.background3 : e.background1, ...Ln(e, o) }), sn = new class {
      constructor(e) {
        this.providerStorage = e, this.getVarsByScheme = (n) => n === "dark" ? this.darkPaletteVars : this.lightPaletteVars, this.setWorkspaceStorage = (n) => {
          this.workspaceStorage = n;
        }, this.trySynchronizeWorkspaceStorage = () => {
          if (this.workspaceStorage && this.hasUserPreference()) {
            const n = this.getScheme();
            if (this.workspaceStorage.setItem(nt.SelectedColorScheme, n), this.darkPaletteVars && this.lightPaletteVars) if (n === "dark" || n === "light") this.workspaceStorage.setItem(nt.ThemePaletteSheet, `:root{${this.getVarsByScheme(n)}}`);
            else {
              const o = `@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`, s = `@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;
              this.workspaceStorage.setItem(nt.ThemePaletteSheet, `${s}${o}`);
            }
          }
        }, this.setPalettes = async ({ light: n, dark: o }, s) => {
          this.lightPaletteVars = Dr({ ...n, ...er(n, "light", s) }), this.darkPaletteVars = Dr({ ...o, ...er(o, "dark", s) });
        };
      }
      hasUserPreference() {
        return this.providerStorage.getItem(nt.SelectedColorScheme) !== null;
      }
      setScheme(e) {
        this.providerStorage.setItem(nt.SelectedColorScheme, e);
      }
      setThemeDefaultScheme(e) {
        const n = Object.values(ke);
        n.includes(e) ? this.providerStorage.setItem(nt.ThemePaletteDefaultScheme, e) : console.warn(`Invalid theme default scheme '${e}'. Must be one of: ${n.join(", ")}. Ignoring default.`);
      }
      getScheme() {
        const e = this.providerStorage.getItem(nt.SelectedColorScheme), n = this.providerStorage.getItem(nt.ThemePaletteDefaultScheme);
        return e !== null ? e : n ?? Rr;
      }
    }(m), cn = () => (xt("ThemeStorage: getThemeStorageController called"), sn), Xr = (e) => ({ getThemes: async () => (await le(e)).dispatch(ie.GetThemes, void 0), setSelectedScheme: async (n) => (await le(e)).dispatch(ie.SetSelectedScheme, n), getSelectedScheme: async () => (await le(e)).dispatch(ie.GetSelectedScheme, void 0) }), t = async (e) => {
      await (await On()).dispatch("set-selected-scheme", e);
    }, a = async (e) => {
      await (await Co()).dispatch(Tn.UpdatePlatformThemeScheme, { scheme: e });
    }, i = async (e) => {
      const n = await $n();
      return Promise.all(n.map(async (o) => {
        await (await lt(o.identity)).dispatch(ut.SetSelectedScheme, e);
      }));
    }, d = async (e) => {
      const n = await Kn();
      return Promise.all(n.map(async (o) => {
        await (await lt(o.identity)).dispatch(ut.SetSelectedScheme, e);
      }));
    }, f = async (e) => {
      try {
        const n = cn();
        n.setScheme(e), await Promise.all([await n.trySynchronizeWorkspaceStorage(), a(e), i(e), d(e), t(e)]);
      } catch (n) {
        console.error("failed to set the selected scheme: ", n);
      }
    }, g = () => {
      try {
        return cn().getScheme();
      } catch (e) {
        console.error("failed to get the selected scheme: ", e);
      }
    }, b = (e) => {
      const n = fin.Platform.wrapSync(e);
      let o;
      return Object.assign(n, { applySnapshot: async (s, u) => {
        if (typeof s != "string" && !(s != null && s.windows)) throw new Error("Not a valid browser snapshot");
        return fin.Platform.wrapSync(e).applySnapshot(s, u);
      }, getSnapshot: () => fin.Platform.wrapSync(e).getSnapshot().then((s) => s), getViewSnapshot: (s) => fin.Platform.wrapSync(e).getViewSnapshot(s), createView: (s, u, w) => fin.Platform.wrapSync(e).createView(s, u, w), launchApp: async (s) => (console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."), s.target || (s.target = { uuid: Re, name: zt, entityType: ft || "unknown" }), (await le(e)).dispatch(ie.LaunchApp, s)), _invokeCustomAction: async (s, u) => {
        const w = await le(e), S = { actionId: s, payload: { ...u, callerType: u.callerType || pt.API } };
        return w.dispatch(ie.InvokeCustomActionInternal, S);
      }, _requestQuitPlatformDialog: async (s) => (await le(e)).dispatch(ie.RequestQuitPlatformDialogInternal, s), _showUpdateVersionModal: async (s) => (await le(e)).dispatch(ie.ShowUpdateVersionModalInternal, s), getCurrentWorkspace: async (s) => (await le(e)).dispatch(ie.GetCurrentWorkspace, s), applyWorkspace: async (s, u) => (await le(e)).dispatch(ie.ApplyWorkspace, { ...s, options: u }), restoreLastSavedWorkspace: async (s) => (await le(e)).dispatch(ie.RestoreLastSavedWorkspaceInternal, s), setActiveWorkspace: async (s) => (await le(e)).dispatch(ie.SetActiveWorkspace, s), getLanguage: async () => (await le(e)).dispatch(ie.GetLanguage), _getLanguageResources: async () => (await le(e)).dispatch(ie.GetLanguageResourcesInternal), setLanguage: async (s) => (await le(e)).dispatch(ie.SetLanguage, s), _raiseAnalytics: async (s) => {
        var u;
        if (o || (o = await Va(e)), typeof o == "object" && ((u = o == null ? void 0 : o.analytics) == null ? void 0 : u.isSupported))
          return (await le(e)).dispatch(ie.Analytics, s);
        e.uuid;
      }, getNotificationsConfig: async () => (await le(e)).dispatch(ie.GetNotificationsConfig), _refreshBookmarksInternal: async () => (await le(e)).dispatch(ie.RefreshBookmarksInternal), _launchBookmarkInternal: async (s) => (await le(e)).dispatch(ie.LaunchBookmarkInternal, s), _updateDockFavoritesInternal: async (s) => (await le(e)).dispatch(ie.UpdateDockFavoritesInternal, s), _updateContentMenuInternal: async (s) => (await le(e)).dispatch(ie.UpdateContentMenuInternal, s), _launchDockEntryInternal: async (s) => (await le(e)).dispatch(ie.LaunchDockEntryInternal, s), _setDockFavoritesInternal: async (s) => (await le(e)).dispatch(ie.SetDockFavoritesOrderInternal, s), _setDefaultDockButtonsOrderInternal: async (s) => (await le(e)).dispatch(ie.SetDefaultDockButtonsOrderInternal, s), _removeDockFavoriteInternal: async (s) => (await le(e)).dispatch(ie.RemoveDockFavoriteInternal, s), _addDockFavoriteInternal: async (s) => (await le(e)).dispatch(ie.AddDockFavoriteInternal, s), _navigateContentMenuInternal: async (s) => (await le(e)).dispatch(ie.NavigateContentMenuInternal, s), _openDockWorkspacesContextMenuInternal: async () => (await le(e)).dispatch(ie.GetDockWorkspacesContextMenuInternal), _handleDockWorkspacesMenuResponseInternal: async (s) => (await le(e)).dispatch(ie.HandleDockWorkspacesMenuResponseInternal, s), _focusAndExpandSearchInternal: async () => (await le(e)).dispatch(ie.FocusAndExpandSearchInternal), _showAboutPagePopup: async (s) => (async (u) => {
        const w = new URLSearchParams({ ...u, title: "About" }), S = await jn(fin.me.identity), v = u.copyrightMessage ? 320 : 286, _ = la(S, { height: v, width: 360 });
        return Er({ options: { frame: !0, smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: Fe.AboutPageWindow, url: await Dt() + $.EnterpriseAboutPage, defaultWidth: 360, defaultHeight: v, preventBlur: !0, ..._ }, parameters: w });
      })(s), Theme: Xr(e), Browser: Ir(e), Storage: Xa(e) });
    }, y = () => b(fin.me.identity), T = { contextMenuOptions: { enabled: !0, template: ["spellCheck", "separator", "print", "separator", "cut", "copy", "paste", "undo", "redo", "selectAll", "inspect", "reload"] }, downloadShelf: { enabled: !0 } };
    function B(e, n) {
      return Yn({}, T, n, e);
    }
    const I = "internal-generated-view-", x = (e, n) => e.content ? { ...e, content: e.content.map((o) => x(o, n)) } : { ...e, componentState: n(e.componentState) }, D = (e, n) => {
      var s;
      return o = B(e, n), { ...o, name: o.name ? o.name : `internal-generated-view-${Et()}`, _internalWorkspaceData: { ...o._internalWorkspaceData, viewIdentifier: ((s = o._internalWorkspaceData) == null ? void 0 : s.viewIdentifier) || Et() } };
      var o;
    }, R = (e) => ({ ...e, name: void 0 }), E = (e) => {
      const n = { ...e };
      return x(n, R);
    }, A = (e) => {
      const n = { ...e };
      return x(n, (o) => o.name && o.name.startsWith(I) ? R(o) : o);
    }, F = (e) => {
      const n = [];
      return (e && Array.isArray(e) ? e : []).forEach((o) => {
        if (o.type === "component") return n.push(o.componentState);
        const s = F(o.content);
        n.push(...s);
      }), n;
    }, U = async (e, n, o = et) => {
      let s;
      return await Un(o) && (s = (await Ft(o).getOptions()).layout || { settings: {} }), { ...s, content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { title: e, url: n } }] }] };
    }, W = (e, n) => {
      const o = F(n.content);
      return { ...x(e, (s) => {
        const u = o.find((S) => {
          var v, _;
          return ((v = S._internalWorkspaceData) == null ? void 0 : v.viewIdentifier) === ((_ = s._internalWorkspaceData) == null ? void 0 : _.viewIdentifier);
        }), w = u ? u.isClosable : s.isClosable;
        return { ...s, isClosable: w };
      }), settings: n.settings };
    }, J = (e) => e ? F(e).length : 0, ae = (ja()(async (e) => {
      try {
        if (!e || !e.layoutContainerKey) return;
        const n = await (async (u) => fin.Platform.Layout.wrapSync({ ...fin.me.identity, layoutName: u }).getConfig())(e.layoutContainerKey), o = n.content ? F(n.content) : [], s = o.length;
        s > 1 ? (async (u) => {
          if (u.attachedPageType !== "multiView") {
            const w = await y().Browser.getUniquePageTitle();
            y().Browser.wrapSync(et).updatePage({ pageId: u.pageId, page: { title: u.title ?? w, singleViewName: null, attachedPageType: "multiView" } });
          }
        })(e) : s === 1 && (async (u, w) => {
          const S = y().Browser.wrapSync(et);
          if (u.attachedPageType !== "singleView") {
            const v = await za(u);
            delete v.layout, delete v.pageId;
            const _ = fin.View.wrapSync({ uuid: et.uuid, name: w }), N = await _.getInfo(), q = { ...v, title: null, singleViewName: w, hasUnsavedChanges: !1, attachedPageType: "singleView", pageIcon: N.favicons[0] };
            await S.updatePage({ pageId: u.pageId, page: q });
          }
        })(e, o[0].name), await (async (u, w) => {
          const S = qa({ ...et, layoutName: u.layoutContainerKey }), v = await S.isShowingTabs();
          w > 1 ? v || await S.show() : w === 1 && v && await S.hide({ settings: { reorderEnabled: !0 } });
        })(e, s);
      } catch {
      }
    }, 50, { leading: !1, trailing: !0 }), qd), ue = yp;
    var se = l.n(ue);
    const oe = JSON.parse('{"contextMenu.newWindow":"新建窗口","contextMenu.newPage":"新建页面","contextMenu.restore":"还原到上次保存的更改","contextMenu.switchWorkspace":"切换工作区","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外观","contextMenu.saveWorkspace":"保存工作区","contextMenu.saveWorkspaceAs":"将工作区另存为...","contextMenu.renameWorkspace":"重命名工作区","contextMenu.deleteWorkspace":"删除工作区","contextMenu.downloads":"下载","contextMenu.savePage":"保存页面","contextMenu.savePageAs":"将页面另存为...","contextMenu.print":"打印...","contextMenu.printScreen":"打印屏幕","contextMenu.closeWindow":"关闭窗口","contextMenu.openStorefront":"开放式店面","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新建视图","contextMenu.openView":"使用默认 Web 浏览器打开视图","contextMenu.openViews":"使用默认 Web 浏览器打开视图","contextMenu.reload":"Reload CN","contextMenu.reloadView":"重新加载视图","contextMenu.reloadViews":"重新加载视图","contextMenu.duplicate":"Duplicate CN","contextMenu.duplicateView":"复制视图","contextMenu.duplicateViews":"复制视图","contextMenu.addView":"将视图添加到频道","contextMenu.addViews":"将视图添加到频道","contextMenu.removeView":"从频道中移除视图","contextMenu.removeViews":"从频道中移除视图","contextMenu.closeView":"关闭视图","contextMenu.closeViews":"关闭视图","contextMenu.closeTab":"Close Tab CN","contextMenu.duplicatePage":"复制页面","contextMenu.submenu.print":"打印","contextMenu.submenu.printAll":"全部打印","saveMenu.saveWorkspaceAs":"将工作区另存为","saveMenu.savePageAs":"将页面另存为","saveModal.enterValue":"Please enter a value CN","saveModal.alreadyExists":"{{title}} 已存在。","saveModal.pleaseEnterValidName":"请输入有效名称","saveModal.renamePage":"重新命名页面","saveModal.closePage":"关闭页面","saveModal.discardChanges":"放弃更改","saveModal.discardAll":"全部放弃","saveModal.saveAll":"全部保存","saveModal.savePagesCount":"关闭前保存 ({{count}}) 个页面？","defaultPageTitle":"Untitled Page CN","enterpriseDefaultPageTitle":"Untitled Supertab CN","addNewPage":"添加新页面","addNewTab":"添加新选项卡","addNewView":"新建视图","restoreModal":"您确定要还原到上次保存的更改吗？","modal.discardWarning":"任何未保存的更改都将丢失","modal.discardPageWarning":"对此页的任何未保存的更改都将丢失。","modal.saveChangesPrompt":"关闭前保存更改？","modal.pageClose":"关闭页面","switchWorkspaceModal":"您确定要切换到 {{workspace}} 吗？","switchWorkspaceModal.warning":"任何未保存的更改都将丢失","deleteWorkspaceModal":"您确定要永久删除此工作区吗？","replaceWorkspaceModal.warning":"名称为 {{workspace}} 的工作区已存在。您是否要替换它？","replaceWorkspaceModal.warning.body":"已存在同名的工作区。替换它将覆盖其当前内容。","replaceWorkspaceModal.replace":"替换","closePlatform":"关闭平台","closePlatform.workspace":"关闭 {{workspace}} 平台","closePlatform.warning":"关闭平台将关闭所有工作区、应用或任何正在运行的进程。","back":"后退","forward":"前进","reload":"重新加载","green":"绿色","purple":"紫色","orange":"橙色","red":"红色","pink":"粉红色","yellow":"黄色","theme.light":"浅色","theme.dark":"深色","theme.system":"与操作系统设置同步","toolbar.hideTabs":"隐藏选项卡","toolbar.showTabs":"显示选项卡","toolbar.lock":"锁定","toolbar.unlock":"解锁","toolbar.colorLinking":"颜色链接","toolbar.changeLayout":"更改布局","toolbar.saveMenu":"保存菜单","toolbar.maximizeWindow":"最大化窗口","toolbar.restoreWindow":"还原窗口","toolbar.minimizeWindow":"最小化窗口","changeLayout.fullWidth":"全宽","changeLayout.columns":"列数","changeLayout.Rows":"行数","changeLayout.Grid":"网格","successIndicator.workspaceSwitched":"已切换工作区","successIndicator.hidden":"选项卡已隐藏","successIndicator.shown":"选项卡已显示","successIndicator.locked":"页面已锁定","successIndicator.unlocked":"页面已解锁","successIndicator.workspaceSaved":"工作区已保存","successIndicator.workspaceSavedAs":"工作区已另存为 {{workspace}}","successIndicator.workspaceRenamed":"工作区已重命名","successIndicator.pageSaved":"页面已保存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. CN","successIndicator.pageCopySaved":"页面已另存为 {{title}}","successIndicator.pageRenamed":"页面已重命名","successIndicator.contextGroupApplied":"已应用上下文组","successIndicator.namedContextGroupApplied":"已应用 {{colorName}} 上下文组","successIndicator.viewRemoved":"从上下文组中移除视图","successIndicator.viewsRemoved":"从上下文组中移除视图","successIndicator.layoutApplied":"已应用 {{layoutName}} 布局","successIndicator.workspaceDeleted":"工作区已删除","errorIndicator.pageSaveFailed":"页面保存失败","errorIndicator.workspaceSaveFailed":"工作区保存失败","errorIndicator.failedToDuplicatePage":"复制页面失败","infoIndicator.colorLinkAttempt":"我们尝试对此选项卡进行颜色链接，但网站/内容所有者尚未启用该功能","global.cancel":"取消","global.confirm":"确认","global.save":"保存","global.delete":"Delete CN","appResults.header":"Featured Content CN","recentlyClosed.header":"Recently Closed CN","landingPage.subheader":"Apps and websites selected by an admin will show here CN","aria.openBrowser":"打开浏览器菜单","aria.browserTabs":"浏览器选项卡","aria.viewTab":"查看 {{title}} 的选项卡","aria.closePage":"关闭 {{title}} 的页面选项卡按钮","aria.closeTab":"关闭选项卡 {{title}}","aria.title":"标题","aria.closeContextGroup":"使用转义关闭上下文组选择对话框","aria.colorLinking":"显示或隐藏颜色链接","aria.applyColorLinking":"请选择一个视图以应用颜色链接","aria.assignColorLinkingCurrentView":"分配给 {{name}} 上下文组的当前视图","aria.assignColorLinkingCurrentViews":"分配给 {{name}} 上下文组的当前视图","aria.setColorLinkingActiveView":"将活动视图设置为 {{name}} 上下文组","aria.setColorLinkingActiveViews":"将活动视图设置为 {{name}} 上下文组","aria.escapeLayoutDialog":"使用转义关闭更改布局对话框","global.supertab":"Supertab CN","global.tab":"Tab CN","bookmarks.editBookmark":"Edit Bookmark CN","bookmarks.bookmarkAdded":"Bookmark added CN","bookmarks.done":"Done CN","bookmarks.remove":"Remove CN","bookmarks.bookmarksPanel":"Bookmarks Panel CN","bookmarks.bookmarks":"Bookmarks CN","bookmarks.allBookmarks":"All Bookmarks CN","bookmarks.favorites":"Favorites CN","bookmarks.searchBookmarks":"Search Bookmarks CN","bookmarks.clearSearchInput":"Clear Search Input CN","bookmarks.createFolder":"Create New Folder CN","bookmarks.exitFolder":"Exit Folder CN","bookmarks.newFolder":"New Folder CN","bookmarks.namedFolder":"{{name}} Folder CN","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings CN","bookmarks.folderSettings":"{{name}} Folder Settings CN","bookmarks.noResultsFound":"No results found CN","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search CN","bookmarks.nothingToShow":"Nothing to show yet CN","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder CN","bookmarks.resultsFoundIn":"Results found in {{name}} CN","bookmarks.resultsInOtherFolders":"Results found in other folders CN","bookmarks.allResultsFoundIn":"All results found in CN","bookmarks.editName":"Edit Name CN","bookmarks.move":"Move CN","bookmarks.bookmarkAddedTitle":"Bookmark Added CN","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" CN","bookmarks.bookmarkEditedTitle":"Bookmark Edited CN","enterpriseContextMenu.saveSupertab":"Save Supertab CN","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... CN","enterpriseContextMenu.duplicate":"Duplicate CN","enterpriseContextMenu.deleteSupertab":"Delete Supertab CN","enterpriseContextMenu.newTab":"New Tab CN","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As CN","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? CN","saveSupertabCount_other":"Save {{count}} Supertabs before closing? CN"},"enterpriseSaveModal.renameSupertab":"Rename CN","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. CN","enterpriseSaveModal.closeTab":"Close Tab CN","enterpriseSaveModal.closeSupertab":"Close Supertab CN","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. CN","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? CN","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. CN","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved CN","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. CN","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted CN","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. CN","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab CN","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab CN","enterpriseCommandBar.switchToSupertab":"Switch to Supertab CN","enterpriseCommandBar.goTo":"Go to {{type}} CN","enterpriseCommandBar.viewMore":"View More CN","sidePanel.aiCenter":"AI Center CN","sidePanel.newChat":"New Chat CN","sidePanel.toggleSidePanel":"Toggle Side Panel CN","sidePanel.closeSidePanel":"Close Side Panel CN","sidePanel.openAiCenter":"Open AI Center CN","contextMenu.quitEnterpriseBrowser":"Quit CN","dock.removeFavorite":"Remove CN"}'), be = JSON.parse('{"contextMenu.newWindow":"新視窗","contextMenu.newPage":"新頁面","contextMenu.restore":"還原到上次儲存的變更","contextMenu.switchWorkspace":"切換工作空間","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外觀","contextMenu.saveWorkspace":"儲存工作空間","contextMenu.saveWorkspaceAs":"將工作空間另存為...","contextMenu.renameWorkspace":"重新命名工作空間","contextMenu.deleteWorkspace":"刪除工作空間","contextMenu.downloads":"下載","contextMenu.savePage":"儲存頁面","contextMenu.savePageAs":"將頁面另存為...","contextMenu.print":"列印...","contextMenu.printScreen":"擷取畫面","contextMenu.closeWindow":"關閉視窗","contextMenu.openStorefront":"打開 Storefront","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新視圖","contextMenu.openView":"使用預設網頁瀏覽器打開視圖","contextMenu.openViews":"使用預設網頁瀏覽器打開視圖","contextMenu.reload":"Reload ZH","contextMenu.reloadView":"重新載入視圖","contextMenu.reloadViews":"重新載入視圖","contextMenu.duplicate":"Duplicate ZH","contextMenu.duplicateView":"複寫視圖","contextMenu.duplicateViews":"複寫視圖","contextMenu.addView":"將視圖新增至頻道","contextMenu.addViews":"將視圖新增至頻道","contextMenu.removeView":"從頻道中移除視圖","contextMenu.removeViews":"從頻道中移除視圖","contextMenu.closeView":"關閉視圖","contextMenu.closeViews":"關閉視圖","contextMenu.closeTab":"Close Tab ZH","contextMenu.duplicatePage":"複寫頁面","contextMenu.submenu.print":"列印","contextMenu.submenu.printAll":"列印全部","saveMenu.saveWorkspaceAs":"將工作空間另存為","saveMenu.savePageAs":"頁面另存為","saveModal.enterValue":"Please enter a value ZH","saveModal.alreadyExists":"{{title}} 已經存在。","saveModal.pleaseEnterValidName":"請輸入一個有效的名稱","saveModal.renamePage":"重新命名頁面","saveModal.closePage":"關閉頁面","saveModal.discardChanges":"捨棄變更","saveModal.discardAll":"全部捨棄","saveModal.saveAll":"儲存全部","saveModal.savePagesCount":"要先儲存 ({{count}}) 個頁面再關閉嗎？","defaultPageTitle":"Untitled Page ZH","enterpriseDefaultPageTitle":"Untitled Supertab ZH","addNewPage":"新增新頁面","addNewTab":"新增新索引標籤","addNewView":"新視圖","restoreModal":"您確定要還原到上次儲存的變更嗎？","modal.discardWarning":"任何未儲存的變更都將被捨棄","modal.discardPageWarning":"在此頁面任何未儲存的變更都將遺失。","modal.saveChangesPrompt":"要先儲存變更再關閉嗎？","modal.pageClose":"頁面關閉","switchWorkspaceModal":"您確定要切換到 {{workspace}}？","switchWorkspaceModal.warning":"任何未儲存的變更都將被捨棄","deleteWorkspaceModal":"您確定要永久刪除此工作空間嗎？","replaceWorkspaceModal.warning":"具有名稱 {{workspace}} 的工作空間已經存在。你要更換它嗎？","replaceWorkspaceModal.warning.body":"相同名稱的工作空間已經存在。更換它後，將會覆蓋目前內容。","replaceWorkspaceModal.replace":"更換","closePlatform":"關閉平台","closePlatform.workspace":"關閉 {{workspace}} 平台","closePlatform.warning":"關閉平台後，將關閉正在執行的任何工作空間、APP 或流程。","back":"上一頁","forward":"下一頁","reload":"重新載入","green":"綠","purple":"紫","orange":"橘","red":"紅色","pink":"粉紅","yellow":"黃","theme.light":"淺","theme.dark":"深","theme.system":"與 OS 設定同步","toolbar.hideTabs":"隱藏索引標籤","toolbar.showTabs":"顯示索引標籤","toolbar.lock":"上鎖","toolbar.unlock":"解鎖","toolbar.colorLinking":"顏色連結","toolbar.changeLayout":"變更版面","toolbar.saveMenu":"儲存選單","toolbar.maximizeWindow":"最大化視窗","toolbar.restoreWindow":"還原視窗","toolbar.minimizeWindow":"最小化視窗","changeLayout.fullWidth":"全螢幕寬度","changeLayout.columns":"行","changeLayout.Rows":"列","changeLayout.Grid":"網格","successIndicator.workspaceSwitched":"工作空間已切換","successIndicator.hidden":"索引標籤已隱藏","successIndicator.shown":"索引標籤已顯示","successIndicator.locked":"頁面已上鎖","successIndicator.unlocked":"頁面已解鎖","successIndicator.workspaceSaved":"工作空間已儲存","successIndicator.workspaceSavedAs":"工作空間已另存為 {{workspace}}","successIndicator.workspaceRenamed":"工作空間已重新命名","successIndicator.pageSaved":"頁面已儲存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. ZH","successIndicator.pageCopySaved":"頁面已另存為 {{title}}","successIndicator.pageRenamed":"頁面已重新命名","successIndicator.contextGroupApplied":"脈絡群組已套用","successIndicator.namedContextGroupApplied":"{{colorName}} 脈絡群組已套用","successIndicator.viewRemoved":"從脈絡群組中移除的視圖","successIndicator.viewsRemoved":"從脈絡群組中移除的視圖","successIndicator.layoutApplied":"{{layoutName}} 版面已套用","successIndicator.workspaceDeleted":"工作空間已刪除","errorIndicator.pageSaveFailed":"頁面無法儲存","errorIndicator.workspaceSaveFailed":"工作空間無法儲存","errorIndicator.failedToDuplicatePage":"無法複寫頁面","infoIndicator.colorLinkAttempt":"我們嘗試對此索引標籤進行顏色連結，但網站/內容所有者尚未啟用該功能","global.cancel":"取消","global.confirm":"確認","global.save":"儲存","global.delete":"Delete ZH","appResults.header":"Featured Content ZH","recentlyClosed.header":"Recently Closed ZH","landingPage.subheader":"Apps and websites selected by an admin will show here ZH","aria.openBrowser":"開啟瀏覽器選單","aria.browserTabs":"瀏覽器索引標籤","aria.viewTab":"{{title}} 的視圖索引標籤","aria.closePage":"關閉 {{title}} 的頁面索引標籤按鈕","aria.closeTab":"關閉索引標籤 {{title}}","aria.title":"標題","aria.closeContextGroup":"使用 Esc 鍵關閉脈絡群組選取對話框","aria.colorLinking":"顯示或隱藏顏色連結","aria.applyColorLinking":"請選取要套用顏色連結的視圖","aria.assignColorLinkingCurrentView":"目前視圖分配給 {{name}} 脈絡群組","aria.assignColorLinkingCurrentViews":"目前視圖分配給 {{name}} 脈絡群組","aria.setColorLinkingActiveView":"將啟用視圖設定為 {{name}} 脈絡群組","aria.setColorLinkingActiveViews":"將啟用視圖設定為 {{name}} 脈絡群組","aria.escapeLayoutDialog":"使用 Esc 鍵關閉變更版面對話框","global.supertab":"Supertab ZH","global.tab":"Tab ZH","bookmarks.editBookmark":"Edit Bookmark ZH","bookmarks.bookmarkAdded":"Bookmark added ZH","bookmarks.done":"Done ZH","bookmarks.remove":"Remove ZH","bookmarks.bookmarksPanel":"Bookmarks Panel ZH","bookmarks.bookmarks":"Bookmarks ZH","bookmarks.allBookmarks":"All Bookmarks ZH","bookmarks.favorites":"Favorites ZH","bookmarks.searchBookmarks":"Search Bookmarks ZH","bookmarks.clearSearchInput":"Clear Search Input ZH","bookmarks.createFolder":"Create New Folder ZH","bookmarks.exitFolder":"Exit Folder ZH","bookmarks.newFolder":"New Folder ZH","bookmarks.namedFolder":"{{name}} Folder ZH","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings ZH","bookmarks.folderSettings":"{{name}} Folder Settings ZH","bookmarks.noResultsFound":"No results found ZH","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search ZH","bookmarks.nothingToShow":"Nothing to show yet ZH","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder ZH","bookmarks.resultsFoundIn":"Results found in {{name}} ZH","bookmarks.resultsInOtherFolders":"Results found in other folders ZH","bookmarks.allResultsFoundIn":"All results found in ZH","bookmarks.editName":"Edit Name ZH","bookmarks.move":"Move ZH","bookmarks.bookmarkAddedTitle":"Bookmark Added ZH","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" ZH","bookmarks.bookmarkEditedTitle":"Bookmark Edited ZH","enterpriseContextMenu.saveSupertab":"Save Supertab ZH","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... ZH","enterpriseContextMenu.duplicate":"Duplicate ZH","enterpriseContextMenu.deleteSupertab":"Delete Supertab ZH","enterpriseContextMenu.newTab":"New Tab ZH","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As ZH","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? ZH","saveSupertabCount_other":"Save {{count}} Supertabs before closing? ZH"},"enterpriseSaveModal.renameSupertab":"Rename ZH","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. ZH","enterpriseSaveModal.closeTab":"Close Tab ZH","enterpriseSaveModal.closeSupertab":"Close Supertab ZH","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. ZH","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? ZH","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. ZH","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved ZH","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. ZH","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted ZH","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. ZH","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab ZH","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab ZH","enterpriseCommandBar.switchToSupertab":"Switch to Supertab ZH","enterpriseCommandBar.goTo":"Go to {{type}} ZH","enterpriseCommandBar.viewMore":"View More ZH","sidePanel.aiCenter":"AI Center ZH","sidePanel.newChat":"New Chat ZH","sidePanel.toggleSidePanel":"Toggle Side Panel ZH","sidePanel.closeSidePanel":"Close Side Panel ZH","sidePanel.openAiCenter":"Open AI Center ZH","contextMenu.quitEnterpriseBrowser":"Quit ZH","dock.removeFavorite":"Remove ZH"}'), we = JSON.parse('{"contextMenu.newWindow":"New Window","contextMenu.newPage":"New Page","contextMenu.restore":"Restore to Last Saved Changes","contextMenu.switchWorkspace":"Switch Workspace","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Appearance","contextMenu.saveWorkspace":"Save Workspace","contextMenu.saveWorkspaceAs":"Save Workspace As...","contextMenu.renameWorkspace":"Rename Workspace","contextMenu.deleteWorkspace":"Delete Workspace","contextMenu.downloads":"Downloads","contextMenu.savePage":"Save Page","contextMenu.savePageAs":"Save Page As...","contextMenu.print":"Print...","contextMenu.printScreen":"Print Screen","contextMenu.closeWindow":"Close Window","contextMenu.openStorefront":"Open Storefront","contextMenu.quitPlatform":"Quit {{platformLabel}}","contextMenu.newView":"New View","contextMenu.openView":"Open View with Default Web Browser","contextMenu.openViews":"Open Views with Default Web Browser","contextMenu.reload":"Reload","contextMenu.reloadView":"Reload View","contextMenu.reloadViews":"Reload Views","contextMenu.duplicate":"Duplicate","contextMenu.duplicateView":"Duplicate View","contextMenu.duplicateViews":"Duplicate Views","contextMenu.addView":"Add View to Channel","contextMenu.addViews":"Add Views to Channel","contextMenu.removeView":"Remove View from Channel","contextMenu.removeViews":"Remove Views from Channel","contextMenu.closeView":"Close View","contextMenu.closeViews":"Close Views","contextMenu.closeTab":"Close Tab","contextMenu.duplicatePage":"Duplicate Page","contextMenu.submenu.print":"Print","contextMenu.submenu.printAll":"Print All","saveMenu.saveWorkspaceAs":"Save Workspace As","saveMenu.savePageAs":"Save Page As","saveModal.enterValue":"Please enter a value","saveModal.alreadyExists":"{{title}} already exists.","saveModal.pleaseEnterValidName":"Please enter a valid name","saveModal.renamePage":"Rename Page","saveModal.closePage":"Close Page","saveModal.discardChanges":"Discard Changes","saveModal.discardAll":"Discard All","saveModal.saveAll":"Save All","saveModal.savePagesCount":"Save ({{count}}) pages before closing?","defaultPageTitle":"Untitled Page","enterpriseDefaultPageTitle":"Untitled Supertab","addNewPage":"New Page","addNewTab":"Add New Tab","addNewView":"New View","restoreModal":"Are you sure you want to restore to last saved changes?","modal.discardWarning":"Any unsaved changes will be discarded","modal.discardPageWarning":"Any unsaved changes to this page will be lost.","modal.saveChangesPrompt":"Save changes before closing?","modal.pageClose":"Page Close","switchWorkspaceModal":"Are you sure you want to switch to {{workspace}}?","switchWorkspaceModal.warning":"Any unsaved changes will be discarded","deleteWorkspaceModal":"Are you sure you want to permanently delete this workspace?","replaceWorkspaceModal.warning":"A Workspace with the name {{workspace}} already exists. Do you want to replace it?","replaceWorkspaceModal.warning.body":"A workspace with the same name already exists. Replacing it will overwrite its current contents.","replaceWorkspaceModal.replace":"Replace","closePlatform":"Close the platform","closePlatform.workspace":"Close the {{workspace}} Platform","closePlatform.warning":"Closing a platform will close any workspaces, apps or any processes that are running.","back":"Back","forward":"Forward","reload":"Reload","green":"Green","purple":"Purple","orange":"Orange","red":"Red","pink":"Pink","yellow":"Yellow","theme.light":"Light","theme.dark":"Dark","theme.system":"Sync with OS setting","toolbar.hideTabs":"Hide Tabs","toolbar.showTabs":"Show Tabs","toolbar.lock":"Lock","toolbar.unlock":"Unlock","toolbar.colorLinking":"Color Linking","toolbar.changeLayout":"Change Layout","toolbar.saveMenu":"Save Menu","toolbar.maximizeWindow":"Maximize Window","toolbar.restoreWindow":"Restore Window","toolbar.minimizeWindow":"Minimize Window","changeLayout.fullWidth":"Full Width","changeLayout.columns":"Columns","changeLayout.Rows":"Rows","changeLayout.Grid":"Grid","successIndicator.workspaceSwitched":"Workspace Switched","successIndicator.hidden":"Tabs are Hidden","successIndicator.shown":"Tabs are Shown","successIndicator.locked":"Page is Locked","successIndicator.unlocked":"Page is Unlocked","successIndicator.workspaceSaved":"Workspace saved","successIndicator.workspaceSavedAs":"Workspace saved as {{workspace}}","successIndicator.workspaceRenamed":"Workspace renamed","successIndicator.pageSaved":"Page Saved","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved.","successIndicator.pageCopySaved":"Page saved as {{title}}","successIndicator.pageRenamed":"Page renamed","successIndicator.contextGroupApplied":"Context group applied","successIndicator.namedContextGroupApplied":"{{colorName}} context group applied","successIndicator.viewRemoved":"View removed from context group","successIndicator.viewsRemoved":"Views removed from context group","successIndicator.layoutApplied":"{{layoutName}} layout applied","successIndicator.workspaceDeleted":"Workspace deleted","errorIndicator.pageSaveFailed":"Page failed to save","errorIndicator.workspaceSaveFailed":"Workspace failed to save","errorIndicator.failedToDuplicatePage":"Failed to duplicate Page","infoIndicator.colorLinkAttempt":"We attempted to color link this tab, but the site/content owner has not enabled it yet","global.cancel":"Cancel","global.confirm":"Confirm","global.save":"Save","global.delete":"Delete","appResults.header":"Featured Content","recentlyClosed.header":"Recently Closed","landingPage.subheader":"Apps and websites selected by an admin will show here","aria.openBrowser":"Open Browser Menu","aria.browserTabs":"Browser Tabs","aria.viewTab":"View Tab for {{title}}","aria.closePage":"Close Page Tab Button for {{title}}","aria.closeTab":"Close Tab {{title}}","aria.title":"Title","aria.closeContextGroup":"Use escape to close context group selection dialog","aria.colorLinking":"Show or hide color linking","aria.applyColorLinking":"Please select a view to apply color linking","aria.assignColorLinkingCurrentView":"Current view assigned to {{name}} context group","aria.assignColorLinkingCurrentViews":"Current views assigned to {{name}} context group","aria.setColorLinkingActiveView":"Set active view to {{name}} context group","aria.setColorLinkingActiveViews":"Set active views to {{name}} context group","aria.escapeLayoutDialog":"Use escape to close change layout dialog","global.supertab":"Supertab","global.tab":"Tab","bookmarks.editBookmark":"Edit Bookmark","bookmarks.bookmarkAdded":"Bookmark added","bookmarks.done":"Done","bookmarks.remove":"Remove","bookmarks.bookmarksPanel":"Bookmarks Panel","bookmarks.bookmarks":"Bookmarks","bookmarks.allBookmarks":"All Bookmarks","bookmarks.favorites":"Favorites","bookmarks.searchBookmarks":"Search Bookmarks","bookmarks.clearSearchInput":"Clear Search Input","bookmarks.createFolder":"Create New Folder","bookmarks.exitFolder":"Exit Folder","bookmarks.newFolder":"New Folder","bookmarks.namedFolder":"{{name}} Folder","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings","bookmarks.folderSettings":"{{name}} Folder Settings","bookmarks.noResultsFound":"No results found","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search","bookmarks.nothingToShow":"Nothing to show yet","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder","bookmarks.resultsFoundIn":"Results found in {{name}}","bookmarks.resultsInOtherFolders":"Results found in other folders","bookmarks.allResultsFoundIn":"All results found in","bookmarks.editName":"Edit Name","bookmarks.move":"Move","bookmarks.bookmarkAddedTitle":"Bookmark Added","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\"","bookmarks.bookmarkEditedTitle":"Bookmark Edited","enterpriseContextMenu.saveSupertab":"Save Supertab","enterpriseContextMenu.saveSupertabAs":"Save Supertab As...","enterpriseContextMenu.duplicate":"Duplicate","enterpriseContextMenu.deleteSupertab":"Delete Supertab","enterpriseContextMenu.newTab":"New Tab","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing?","saveSupertabCount_other":"Save {{count}} Supertabs before closing?"},"enterpriseSaveModal.renameSupertab":"Rename","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab.","enterpriseSaveModal.closeTab":"Close Tab","enterpriseSaveModal.closeSupertab":"Close Supertab","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost.","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab?","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent.","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted.","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab","enterpriseCommandBar.switchToSupertab":"Switch to Supertab","enterpriseCommandBar.goTo":"Go to {{type}}","enterpriseCommandBar.viewMore":"View More","sidePanel.aiCenter":"AI Center","sidePanel.newChat":"New Chat","sidePanel.toggleSidePanel":"Toggle Side Panel","sidePanel.closeSidePanel":"Close Side Panel","sidePanel.openAiCenter":"Open AI Center","contextMenu.quitEnterpriseBrowser":"Quit","dock.removeFavorite":"Remove","dock.workspaceManagement":{"restoreSuccess":"Last Saved Changes Restored"}}'), ce = JSON.parse('{"contextMenu.newWindow":"Neues Fenster","contextMenu.newPage":"Neue Seite","contextMenu.restore":"Wiederherstellen der zuletzt gespeicherten Änderungen","contextMenu.switchWorkspace":"Workspace wechseln","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Erscheinungsbild","contextMenu.saveWorkspace":"Workspace speichern","contextMenu.saveWorkspaceAs":"Workspace speichern unter...","contextMenu.renameWorkspace":"Workspace umbenennen","contextMenu.deleteWorkspace":"Workspace löschen","contextMenu.downloads":"Downloads","contextMenu.savePage":"Seite speichern","contextMenu.savePageAs":"Seite speichern unter...","contextMenu.print":"Drucken...","contextMenu.printScreen":"Bildschirmansicht drucken","contextMenu.closeWindow":"Fenster schließen","contextMenu.openStorefront":"Schaufenster öffnen","contextMenu.quitPlatform":"Plattform verlassen","contextMenu.newView":"Neue Ansicht","contextMenu.openView":"Ansicht mit Standard-Webbrowser öffnen","contextMenu.openViews":"Ansichten mit Standard-Webbrowser öffnen","contextMenu.reload":"Reload DE","contextMenu.reloadView":"Ansicht neu laden","contextMenu.reloadViews":"Ansichten neu laden","contextMenu.duplicate":"Duplicate DE","contextMenu.duplicateView":"Ansicht duplizieren","contextMenu.duplicateViews":"Ansichten duplizieren","contextMenu.addView":"Ansicht zum Channel hinzufügen","contextMenu.addViews":"Ansichten zum Channel hinzufügen","contextMenu.removeView":"Ansicht aus dem Channel entfernen","contextMenu.removeViews":"Ansichten aus dem Channel entfernen","contextMenu.closeView":"Ansicht schließen","contextMenu.closeViews":"Ansichten schließen","contextMenu.closeTab":"Close Tab DE","contextMenu.duplicatePage":"Seite duplizieren","contextMenu.submenu.print":"Drucken","contextMenu.submenu.printAll":"Alle drucken","saveMenu.saveWorkspaceAs":"Workspace speichern unter","saveMenu.savePageAs":"Seite speichern unter","saveModal.enterValue":"Please enter a value DE","saveModal.alreadyExists":"{{title}} existiert bereits.","saveModal.pleaseEnterValidName":"Bitte geben Sie einen gültigen Namen ein","saveModal.renamePage":"Seite umbenennen","saveModal.closePage":"Seite schließen","saveModal.discardChanges":"Änderungen verwerfen","saveModal.discardAll":"Alle verwerfen","saveModal.saveAll":"Alle speichern","saveModal.savePagesCount":"({{count}}) Seiten vor dem Schließen speichern?","defaultPageTitle":"Untitled Page DE","enterpriseDefaultPageTitle":"Untitled Supertab DE","addNewPage":"Neue Seite hinzufügen","addNewTab":"Neuen Tab hinzufügen","addNewView":"Neue Ansicht","restoreModal":"Sind Sie sicher, dass Sie die zuletzt gespeicherten Änderungen wiederherstellen wollen?","modal.discardWarning":"Alle nicht gespeicherten Änderungen werden verworfen","modal.discardPageWarning":"Alle nicht gespeicherten Änderungen auf dieser Seite gehen verloren.","modal.saveChangesPrompt":"Änderungen vor dem Schließen speichern?","modal.pageClose":"Seite schließen","switchWorkspaceModal":"Sind Sie sicher, dass Sie zu {{workspace}}wechseln wollen?","switchWorkspaceModal.warning":"Alle nicht gespeicherten Änderungen werden verworfen","deleteWorkspaceModal":"Sind Sie sicher, dass Sie diesen Workspace dauerhaft löschen wollen?","replaceWorkspaceModal.warning":"Ein Workspace mit dem Namen {{workspace}} existiert bereits. Möchten Sie ihn ersetzen?","replaceWorkspaceModal.warning.body":"Ein Workspace mit demselben Namen existiert bereits. Wenn Sie ihn ersetzen, wird der aktuelle Inhalt überschrieben.","replaceWorkspaceModal.replace":"Ersetzen","closePlatform":"Plattform schließen","closePlatform.workspace":"Die {{workspace}} Plattform schließen","closePlatform.warning":"Wenn Sie eine Plattform schließen, werden alle Workspaces, Apps und laufenden Prozesse beendet.","back":"Zurück","forward":"Weiter","reload":"Neu laden","green":"Grün","purple":"Lila","orange":"Orange","red":"Rot","pink":"Pink","yellow":"Gelb","theme.light":"Hell","theme.dark":"Dunkel","theme.system":"Synchronisierung mit OS-Einstellung","toolbar.hideTabs":"Tabs ausblenden","toolbar.showTabs":"Tabs anzeigen","toolbar.lock":"Sperren","toolbar.unlock":"Freischalten","toolbar.colorLinking":"Farbverknüpfung","toolbar.changeLayout":"Layout ändern","toolbar.saveMenu":"Menü speichern","toolbar.maximizeWindow":"Fenster maximieren","toolbar.restoreWindow":"Fenster wiederherstellen","toolbar.minimizeWindow":"Fenster minimieren","changeLayout.fullWidth":"Volle Breite","changeLayout.columns":"Spalten","changeLayout.Rows":"Zeilen","changeLayout.Grid":"Raster","successIndicator.workspaceSwitched":"Workspace gewechselt","successIndicator.hidden":"Tabs sind ausgeblendet","successIndicator.shown":"Tabs werden angezeigt","successIndicator.locked":"Seite ist gesperrt","successIndicator.unlocked":"Seite ist freigeschaltet","successIndicator.workspaceSaved":"Workspace gespeichert","successIndicator.workspaceSavedAs":"Workspace gespeichert als {{workspace}}","successIndicator.workspaceRenamed":"Workspace umbenannt","successIndicator.pageSaved":"Seite gespeichert","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. DE","successIndicator.pageCopySaved":"Seite gespeichert als {{title}}","successIndicator.pageRenamed":"Seite umbenannt","successIndicator.contextGroupApplied":"Angewandte Kontextgruppe","successIndicator.namedContextGroupApplied":"{{colorName}} angewandte Kontextgruppe","successIndicator.viewRemoved":"Ansicht aus der Kontextgruppe entfernt","successIndicator.viewsRemoved":"Ansichten aus der Kontextgruppe entfernt","successIndicator.layoutApplied":"{{layoutName}} angewandtes Layout","successIndicator.workspaceDeleted":"Workspace gelöscht","errorIndicator.pageSaveFailed":"Seite konnte nicht gespeichert werden","errorIndicator.workspaceSaveFailed":"Workspace konnte nicht gespeichert werden","errorIndicator.failedToDuplicatePage":"Seite kann nicht dupliziert werden","infoIndicator.colorLinkAttempt":"Wir haben versucht, diesem Tab eine Farbe zuordnen, aber der Eigentümer der Website/des Inhalts hat sie noch nicht aktiviert","global.cancel":"Abbrechen","global.confirm":"Bestätigen","global.save":"Speichern","global.delete":"Delete DE","appResults.header":"Featured Content DC","recentlyClosed.header":"Recently Closed DC","landingPage.subheader":"Apps and websites selected by an admin will show here DE","aria.openBrowser":"Browser-Menü öffnen","aria.browserTabs":"Browser-Tab","aria.viewTab":"Tab „Ansicht“ für {{title}}","aria.closePage":"Button „Seite schließen“ für {{title}}","aria.closeTab":"Tab schließen {{title}}","aria.title":"Bezeichnung","aria.closeContextGroup":"Verwenden Sie die Escape-Taste, um den Dialog zur Auswahl von Kontextgruppen zu schließen","aria.colorLinking":"Farbverknüpfung ein- oder ausblenden","aria.applyColorLinking":"Bitte wählen Sie eine Ansicht, um die Farbverknüpfung anzuwenden","aria.assignColorLinkingCurrentView":"Aktuelle Ansicht, die der Kontextgruppe {{name}} zugeordnet ist","aria.assignColorLinkingCurrentViews":"Aktuelle Ansichten, die der Kontextgruppe {{name}} zugeordnet sind","aria.setColorLinkingActiveView":"Aktive Ansicht auf die Kontextgruppe {{name}} setzen","aria.setColorLinkingActiveViews":"Aktive Ansichten auf die Kontextgruppe {{name}} setzen","aria.escapeLayoutDialog":"Verwenden Sie die Escape-Taste, um den Dialog zur Layoutänderung zu schließen","global.supertab":"Supertab DE","global.tab":"Tab DE","bookmarks.editBookmark":"Edit Bookmark DE","bookmarks.bookmarkAdded":"Bookmark added DE","bookmarks.done":"Done DE","bookmarks.remove":"Remove DE","bookmarks.bookmarksPanel":"Bookmarks Panel DE","bookmarks.bookmarks":"Bookmarks DE","bookmarks.allBookmarks":"All Bookmarks DE","bookmarks.favorites":"Favorites DE","bookmarks.searchBookmarks":"Search Bookmarks DE","bookmarks.clearSearchInput":"Clear Search Input DE","bookmarks.createFolder":"Create New Folder DE","bookmarks.exitFolder":"Exit Folder DE","bookmarks.newFolder":"New Folder DE","bookmarks.namedFolder":"{{name}} Folder DE","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings DE","bookmarks.folderSettings":"{{name}} Folder Settings DE","bookmarks.noResultsFound":"No results found DE","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search DE","bookmarks.nothingToShow":"Nothing to show yet DE","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder DE","bookmarks.resultsFoundIn":"Results found in {{name}} DE","bookmarks.resultsInOtherFolders":"Results found in other folders DE","bookmarks.allResultsFoundIn":"All results found in DE","bookmarks.editName":"Edit Name DE","bookmarks.move":"Move DE","bookmarks.bookmarkAddedTitle":"Bookmark Added DE","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" DE","bookmarks.bookmarkEditedTitle":"Bookmark Edited DE","enterpriseContextMenu.saveSupertab":"Save Supertab DE","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... DE","enterpriseContextMenu.duplicate":"Duplicate DE","enterpriseContextMenu.deleteSupertab":"Delete Supertab DE","enterpriseContextMenu.newTab":"New Tab DE","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As DE","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? DE","saveSupertabCount_other":"Save {{count}} Supertabs before closing? DE"},"enterpriseSaveModal.renameSupertab":"Rename DE","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. DE","enterpriseSaveModal.closeTab":"Close Tab DE","enterpriseSaveModal.closeSupertab":"Close Supertab DE","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. DE","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? DE","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. DE","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved DE","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. DE","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted DE","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. DE","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab DE","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab DE","enterpriseCommandBar.switchToSupertab":"Switch to Supertab DE","enterpriseCommandBar.goTo":"Go to {{type}} DE","enterpriseCommandBar.viewMore":"View More DE","sidePanel.aiCenter":"AI Center DE","sidePanel.newChat":"New Chat DE","sidePanel.toggleSidePanel":"Toggle Side Panel DE","sidePanel.closeSidePanel":"Close Side Panel DE","sidePanel.openAiCenter":"Open AI Center DE","contextMenu.quitEnterpriseBrowser":"Quit DE","dock.removeFavorite":"Remove DE"}'), ve = JSON.parse('{"contextMenu.newWindow":"新しいウィンドウ","contextMenu.newPage":"新しいページ","contextMenu.restore":"最後に保存された変更に戻す","contextMenu.switchWorkspace":"ワークスペースに切り替える","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外観","contextMenu.saveWorkspace":"ワークスペースを保存","contextMenu.saveWorkspaceAs":"ワークスペースを別名で保存...","contextMenu.renameWorkspace":"ワークスペース名を変更","contextMenu.deleteWorkspace":"ワークスペースを削除","contextMenu.downloads":"ダウンロード","contextMenu.savePage":"ページを保存","contextMenu.savePageAs":"ページを別名で保存...","contextMenu.print":"印刷...","contextMenu.printScreen":"プリントスクリーン","contextMenu.closeWindow":"ウィンドウを閉じる","contextMenu.openStorefront":"ストアフロントを開く","contextMenu.quitPlatform":"プラットフォームを終了する","contextMenu.newView":"新しいビュー","contextMenu.openView":"デフォルトのウェブブラウザーでビューを開く","contextMenu.openViews":"デフォルトのウェブブラウザーでビューを開く","contextMenu.reload":"Reload JP","contextMenu.reloadView":"ビューをリロード","contextMenu.reloadViews":"ビューをリロード","contextMenu.duplicate":"Duplicate JP","contextMenu.duplicateView":"ビューを複製","contextMenu.duplicateViews":"ビューを複製","contextMenu.addView":"ビューをチャネルに追加","contextMenu.addViews":"ビューをチャネルに追加","contextMenu.removeView":"チャネルからビューを削除","contextMenu.removeViews":"チャネルからビューを削除","contextMenu.closeView":"ビューを閉じる","contextMenu.closeViews":"ビューを閉じる","contextMenu.closeTab":"Close Tab JP","contextMenu.duplicatePage":"ページを複製","contextMenu.submenu.print":"印刷","contextMenu.submenu.printAll":"すべてを印刷","saveMenu.saveWorkspaceAs":"ワークスペースを別名で保存","saveMenu.savePageAs":"ページを別名で保存","saveModal.enterValue":"Please enter a value JP","saveModal.alreadyExists":"{{title}}はすでに存在しています。","saveModal.pleaseEnterValidName":"有効な名前を入力してください","saveModal.renamePage":"ページ名を変更","saveModal.closePage":"ページを閉じる","saveModal.discardChanges":"変更を破棄","saveModal.discardAll":"すべて破棄","saveModal.saveAll":"すべて保存","saveModal.savePagesCount":"閉じる前に（{{count}}）つのページを保存しますか？","defaultPageTitle":"Untitled Page JP","enterpriseDefaultPageTitle":"Untitled Supertab JP","addNewPage":"新しいページを追加","addNewTab":"新しいタブを追加","addNewView":"新しいビュー","restoreModal":"本当に最後に保存された変更に戻しますか？","modal.discardWarning":"保存されていない変更は破棄されます","modal.discardPageWarning":"保存されていないこのページへの変更は失われます。","modal.saveChangesPrompt":"閉じる前に変更を保存しますか？","modal.pageClose":"ページを閉じる","switchWorkspaceModal":"本当に{{workspace}}に切り替えますか？","switchWorkspaceModal.warning":"保存されていない変更は破棄されます","deleteWorkspaceModal":"このワークスペースを永久に削除してもよろしいですか？","replaceWorkspaceModal.warning":"{{workspace}}という名前のワークスペースがすでに存在します。置き換えますか？","replaceWorkspaceModal.warning.body":"同じ名前のワークスペースがすでに存在します。置き換えると、現在の内容は上書きされます。","replaceWorkspaceModal.replace":"置き換える","closePlatform":"プラットフォームを閉じる","closePlatform.workspace":"{{workspace}}プラットフォームを閉じる","closePlatform.warning":"プラットフォームを閉じると、実行中のワークスペース、アプリ、プロセスがすべて閉じます。","back":"戻る","forward":"進む","reload":"リロード","green":"グリーン","purple":"パープル","orange":"オレンジ","red":"レッド","pink":"ピンク","yellow":"イエロー","theme.light":"ライト","theme.dark":"ダーク","theme.system":"OSの設定と同期","toolbar.hideTabs":"タブを非表示","toolbar.showTabs":"タブを表示","toolbar.lock":"ロック","toolbar.unlock":"ロック解除","toolbar.colorLinking":"カラーリンク","toolbar.changeLayout":"レイアウトを変更","toolbar.saveMenu":"メニューを保存","toolbar.maximizeWindow":"ウィンドウを最大化する","toolbar.restoreWindow":"ウィンドウを復元","toolbar.minimizeWindow":"ウィンドウを最小化する","changeLayout.fullWidth":"全幅","changeLayout.columns":"列","changeLayout.Rows":"行","changeLayout.Grid":"グリッド","successIndicator.workspaceSwitched":"ワークスペースが切り替わりました","successIndicator.hidden":"タブが非表示になっています","successIndicator.shown":"タブが表示されています","successIndicator.locked":"ページがロックされています","successIndicator.unlocked":"ページのロックが解除されています","successIndicator.workspaceSaved":"ワークスペースが保存されました","successIndicator.workspaceSavedAs":"ワークスペースが{{workspace}}として保存されました","successIndicator.workspaceRenamed":"ワークスペース名が変更されました","successIndicator.pageSaved":"ページが保存されました","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. JP","successIndicator.pageCopySaved":"ページが{{title}}として保存されました","successIndicator.pageRenamed":"ページ名が変更されました","successIndicator.contextGroupApplied":"コンテキストグループが適用されました","successIndicator.namedContextGroupApplied":"{{colorName}}コンテキストグループが適用されました","successIndicator.viewRemoved":"コンテキストグループからビューが削除されました","successIndicator.viewsRemoved":"コンテキストグループからビューが削除されました","successIndicator.layoutApplied":"{{layoutName}}レイアウトが適用されました","successIndicator.workspaceDeleted":"ワークスペースが削除されました","errorIndicator.pageSaveFailed":"ページを保存できませんでした","errorIndicator.workspaceSaveFailed":"ワークスペースを保存できませんでした","errorIndicator.failedToDuplicatePage":"ページを複製できませんでした","infoIndicator.colorLinkAttempt":"このタブをカラーリンクしようとしましたが、サイト/コンテンツのオーナーがまだこれを有効にしていません","global.cancel":"キャンセル","global.confirm":"確認","global.save":"保存","global.delete":"Delete JP","appResults.header":"Featured content JP","recentlyClosed.header":"Recently Closed JP","landingPage.subheader":"Apps and websites selected by an admin will show here JP","aria.openBrowser":"ブラウザーメニューを開く","aria.browserTabs":"ブラウザータブ","aria.viewTab":"{{title}}のタブを表示","aria.closePage":"{{title}}のページタブボタンを閉じる","aria.closeTab":"{{title}}タブを閉じる","aria.title":"タイトル","aria.closeContextGroup":"エスケープを使用して、コンテキストグループ選択ダイアログを閉じる","aria.colorLinking":"カラーリンクの表示/非表示","aria.applyColorLinking":"カラーリンクを適用するビューを選択してください","aria.assignColorLinkingCurrentView":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.assignColorLinkingCurrentViews":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.setColorLinkingActiveView":"アクティブビューを{{name}}コンテキストグループに設定","aria.setColorLinkingActiveViews":"アクティブビューを{{name}}コンテキストグループに設定","aria.escapeLayoutDialog":"エスケープを使用して、レイアウト変更選択ダイアログを閉じる","global.supertab":"Supertab JP","global.tab":"Tab JP","bookmarks.editBookmark":"Edit Bookmark JP","bookmarks.bookmarkAdded":"Bookmark added JP","bookmarks.done":"Done JP","bookmarks.remove":"Remove JP","bookmarks.bookmarksPanel":"Bookmarks Panel JP","bookmarks.bookmarks":"Bookmarks JP","bookmarks.allBookmarks":"All Bookmarks JP","bookmarks.favorites":"Favorites JP","bookmarks.searchBookmarks":"Search Bookmarks JP","bookmarks.clearSearchInput":"Clear Search Input JP","bookmarks.createFolder":"Create New Folder JP","bookmarks.exitFolder":"Exit Folder JP","bookmarks.newFolder":"New Folder JP","bookmarks.namedFolder":"{{name}} Folder JP","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings JP","bookmarks.folderSettings":"{{name}} Folder Settings JP","bookmarks.noResultsFound":"No results found JP","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search JP","bookmarks.nothingToShow":"Nothing to show yet JP","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder JP","bookmarks.resultsFoundIn":"Results found in {{name}} JP","bookmarks.resultsInOtherFolders":"Results found in other folders JP","bookmarks.allResultsFoundIn":"All results found in JP","bookmarks.editName":"Edit Name JP","bookmarks.move":"Move JP","bookmarks.bookmarkAddedTitle":"Bookmark Added JP","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" JP","bookmarks.bookmarkEditedTitle":"Bookmark Edited JP","enterpriseContextMenu.saveSupertab":"Save Supertab JP","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... JP","enterpriseContextMenu.duplicate":"Duplicate JP","enterpriseContextMenu.deleteSupertab":"Delete Supertab JP","enterpriseContextMenu.newTab":"New Tab JP","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As JP","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? JP","saveSupertabCount_other":"Save {{count}} Supertabs before closing? JP"},"enterpriseSaveModal.renameSupertab":"Rename JP","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. JP","enterpriseSaveModal.closeTab":"Close Tab JP","enterpriseSaveModal.closeSupertab":"Close Supertab JP","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. JP","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? JP","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. JP","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved JP","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. JP","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted JP","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. JP","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab JP","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab JP","enterpriseCommandBar.switchToSupertab":"Switch to Supertab JP","enterpriseCommandBar.goTo":"Go to {{type}} JP","enterpriseCommandBar.viewMore":"View More JP","sidePanel.aiCenter":"AI Center JP","sidePanel.newChat":"New Chat JP","sidePanel.toggleSidePanel":"Toggle Side Panel JP","sidePanel.closeSidePanel":"Close Side Panel JP","sidePanel.openAiCenter":"Open AI Center JP","contextMenu.quitEnterpriseBrowser":"Quit JP","dock.removeFavorite":"Remove JP"}'), Ke = JSON.parse('{"contextMenu.newWindow":"새 창","contextMenu.newPage":"새 페이지","contextMenu.restore":"마지막으로 저장한 변경 사항으로 복원","contextMenu.switchWorkspace":"작업 공간 전환","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"모양","contextMenu.saveWorkspace":"작업 공간 저장","contextMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장...","contextMenu.renameWorkspace":"작업 공간 이름 바꾸기","contextMenu.deleteWorkspace":"작업 공간 삭제","contextMenu.downloads":"다운로드","contextMenu.savePage":"페이지 저장","contextMenu.savePageAs":"다른 이름으로 페이지 저장...","contextMenu.print":"인쇄...","contextMenu.printScreen":"화면 인쇄","contextMenu.closeWindow":"창 닫기","contextMenu.openStorefront":"매장 열기","contextMenu.quitPlatform":"플랫폼 종료","contextMenu.newView":"새 뷰","contextMenu.openView":"기본 웹 브라우저로 뷰 열기","contextMenu.openViews":"기본 웹 브라우저로 뷰 열기","contextMenu.reload":"Reload KR","contextMenu.reloadView":"뷰 다시 로드","contextMenu.reloadViews":"뷰 다시 로드","contextMenu.duplicate":"Duplicate KR","contextMenu.duplicateView":"뷰 복제","contextMenu.duplicateViews":"뷰 복제","contextMenu.addView":"채널에 뷰 추가","contextMenu.addViews":"채널에 뷰 추가","contextMenu.removeView":"채널에서 뷰 제거","contextMenu.removeViews":"채널에서 뷰 제거","contextMenu.closeView":"뷰 닫기","contextMenu.closeViews":"뷰 닫기","contextMenu.closeTab":"Close Tab KR","contextMenu.duplicatePage":"페이지 복제","contextMenu.submenu.print":"인쇄","contextMenu.submenu.printAll":"모두 인쇄","saveMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장","saveMenu.savePageAs":"다른 이름으로 페이지 저장","saveModal.enterValue":"Please enter a value KR","saveModal.alreadyExists":"{{title}}이(가) 이미 존재합니다.","saveModal.pleaseEnterValidName":"유효한 이름을 입력하십시오.","saveModal.renamePage":"페이지 이름 바꾸기","saveModal.closePage":"페이지 닫기","saveModal.discardChanges":"변경 사항 폐기","saveModal.discardAll":"모두 폐기","saveModal.saveAll":"모두 저장","saveModal.savePagesCount":"닫기 전에 페이지({{count}}개)를 저장하시겠습니까?","defaultPageTitle":"Untitled Page KR","enterpriseDefaultPageTitle":"Untitled Supertab KR","addNewPage":"새 페이지 추가","addNewTab":"새 탭 추가","addNewView":"새 뷰","restoreModal":"마지막으로 저장한 변경 사항으로 복원하시겠습니까?","modal.discardWarning":"저장하지 않은 변경 사항은 모두 폐기됩니다","modal.discardPageWarning":"이 페이지의 저장하지 않은 변경 사항은 모두 손실됩니다.","modal.saveChangesPrompt":"닫기 전에 변경 사항을 저장하시겠습니까?","modal.pageClose":"페이지 닫기","switchWorkspaceModal":"{{workspace}}(으)로 전환하시겠습니까?","switchWorkspaceModal.warning":"저장하지 않은 변경 사항은 모두 폐기됩니다","deleteWorkspaceModal":"이 작업 공간을 영구적으로 삭제하시겠습니까?","replaceWorkspaceModal.warning":"{{workspace}}(이)라는 이름의 작업 공간이 이미 존재합니다. 교체하시겠습니까?","replaceWorkspaceModal.warning.body":"같은 이름의 작업 공간이 이미 존재합니다. 교체하면 현재 내용을 덮어쓰게 됩니다.","replaceWorkspaceModal.replace":"교체","closePlatform":"플랫폼 닫기","closePlatform.workspace":"{{workspace}} 플랫폼 닫기","closePlatform.warning":"플랫폼을 닫으면 실행 중인 모든 작업 공간, 앱 또는 프로세스가 닫힙니다.","back":"뒤로 가기","forward":"앞으로 가기","reload":"새로고침","green":"녹색","purple":"보라색","orange":"오렌지색","red":"빨간색","pink":"핑크색","yellow":"노란색","theme.light":"밝은","theme.dark":"어두운","theme.system":"OS 설정과 동기화","toolbar.hideTabs":"탭 숨기기","toolbar.showTabs":"탭 표시","toolbar.lock":"잠금","toolbar.unlock":"잠금 해제","toolbar.colorLinking":"색상 연결","toolbar.changeLayout":"레이아웃 변경","toolbar.saveMenu":"저장 메뉴","toolbar.maximizeWindow":"창 최대화","toolbar.restoreWindow":"창 복원","toolbar.minimizeWindow":"창 최소화","changeLayout.fullWidth":"전체 너비","changeLayout.columns":"열","changeLayout.Rows":"행","changeLayout.Grid":"그리드","successIndicator.workspaceSwitched":"작업 공간 전환","successIndicator.hidden":"탭 숨김","successIndicator.shown":"탭 표시","successIndicator.locked":"페이지 잠금","successIndicator.unlocked":"페이지 잠금 해제됨","successIndicator.workspaceSaved":"작업 공간 저장됨","successIndicator.workspaceSavedAs":"작업 공간이 {{workspace}}(으)로 저장됨","successIndicator.workspaceRenamed":"작업 공간 이름 변경됨","successIndicator.pageSaved":"페이지 저장됨","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. KR","successIndicator.pageCopySaved":"페이지가 {{title}}(으)로 저장됨","successIndicator.pageRenamed":"페이지 이름 변경됨","successIndicator.contextGroupApplied":"컨텍스트 그룹 적용됨","successIndicator.namedContextGroupApplied":"{{colorName}} 컨텍스트 그룹 적용됨","successIndicator.viewRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.viewsRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.layoutApplied":"{{layoutName}} 레이아웃 적용됨","successIndicator.workspaceDeleted":"작업 공간 삭제됨","errorIndicator.pageSaveFailed":"페이지 저장 실패","errorIndicator.workspaceSaveFailed":"작업 공간 저장 실패","errorIndicator.failedToDuplicatePage":"페이지 복제 실패","infoIndicator.colorLinkAttempt":"이 탭의 색상 링크를 시도했지만 사이트/콘텐츠 소유자가 아직 활성화하지 않았습니다.","global.cancel":"취소","global.confirm":"확인","global.save":"저장","global.delete":"Delete KR","appResults.header":"Featured Content KR","recentlyClosed.header":"Recently Closed KR","landingPage.subheader":"Apps and websites selected by an admin will show here KR","aria.openBrowser":"브라우저 메뉴 열기","aria.browserTabs":"브라우저 탭","aria.viewTab":"{{title}}의 뷰 탭","aria.closePage":"{{title}}의 페이지 닫기 탭","aria.closeTab":"탭 {{title}} 닫기","aria.title":"제목","aria.closeContextGroup":"이스케이프를 사용하여 컨텍스트 그룹 선택 대화상자 닫기","aria.colorLinking":"색상 연결 표시 또는 숨기기","aria.applyColorLinking":"색상 연결을 적용하려면 뷰를 선택하십시오.","aria.assignColorLinkingCurrentView":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.assignColorLinkingCurrentViews":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.setColorLinkingActiveView":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.setColorLinkingActiveViews":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.escapeLayoutDialog":"이스케이프를 사용하여 레이아웃 변경 대화상자 닫기","global.supertab":"Supertab KR","global.tab":"Tab KR","bookmarks.editBookmark":"Edit Bookmark KR","bookmarks.bookmarkAdded":"Bookmark added KR","bookmarks.done":"Done KR","bookmarks.remove":"Remove KR","bookmarks.bookmarksPanel":"Bookmarks Panel KR","bookmarks.bookmarks":"Bookmarks KR","bookmarks.allBookmarks":"All Bookmarks KR","bookmarks.favorites":"Favorites KR","bookmarks.searchBookmarks":"Search Bookmarks KR","bookmarks.clearSearchInput":"Clear Search Input KR","bookmarks.createFolder":"Create New Folder KR","bookmarks.exitFolder":"Exit Folder KR","bookmarks.newFolder":"New Folder KR","bookmarks.namedFolder":"{{name}} Folder KR","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings KR","bookmarks.folderSettings":"{{name}} Folder Settings KR","bookmarks.noResultsFound":"No results found KR","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search KR","bookmarks.nothingToShow":"Nothing to show yet KR","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder KR","bookmarks.resultsFoundIn":"Results found in {{name}} KR","bookmarks.resultsInOtherFolders":"Results found in other folders KR","bookmarks.allResultsFoundIn":"All results found in KR","bookmarks.editName":"Edit Name KR","bookmarks.move":"Move KR","bookmarks.bookmarkAddedTitle":"Bookmark Added KR","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" KR","bookmarks.bookmarkEditedTitle":"Bookmark Edited KR","enterpriseContextMenu.saveSupertab":"Save Supertab KR","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... KR","enterpriseContextMenu.duplicate":"Duplicate KR","enterpriseContextMenu.deleteSupertab":"Delete Supertab KR","enterpriseContextMenu.newTab":"New Tab KR","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As KR","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? KR","saveSupertabCount_other":"Save {{count}} Supertabs before closing? KR"},"enterpriseSaveModal.renameSupertab":"Rename KR","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. KR","enterpriseSaveModal.closeTab":"Close Tab KR","enterpriseSaveModal.closeSupertab":"Close Supertab KR","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. KR","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? KR","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. KR","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved KR","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. KR","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted KR","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. KR","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab KR","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab KR","enterpriseCommandBar.switchToSupertab":"Switch to Supertab KR","enterpriseCommandBar.goTo":"Go to {{type}} KR","enterpriseCommandBar.viewMore":"View More KR","sidePanel.aiCenter":"AI Center KR","sidePanel.newChat":"New Chat KR","sidePanel.toggleSidePanel":"Toggle Side Panel KR","sidePanel.closeSidePanel":"Close Side Panel KR","sidePanel.openAiCenter":"Open AI Center KR","contextMenu.quitEnterpriseBrowser":"Quit KR","dock.removeFavorite":"Remove KR"}'), ze = JSON.parse('{"contextMenu.newWindow":"Новое окно","contextMenu.newPage":"Новая страница","contextMenu.restore":"Восстановить последние сохраненные изменения","contextMenu.switchWorkspace":"Переключить рабочую область","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Внешний вид","contextMenu.saveWorkspace":"Сохранить рабочую область","contextMenu.saveWorkspaceAs":"Сохранить рабочую область как...","contextMenu.renameWorkspace":"Переименовать рабочую область","contextMenu.deleteWorkspace":"Удалить рабочую область","contextMenu.downloads":"Загрузки","contextMenu.savePage":"Сохранить страницу","contextMenu.savePageAs":"Сохранить страницу как...","contextMenu.print":"Печать...","contextMenu.printScreen":"Распечатать экран","contextMenu.closeWindow":"Закрыть окно","contextMenu.openStorefront":"Открыть Storefront","contextMenu.quitPlatform":"Выйти из платформы","contextMenu.newView":"Новое представление","contextMenu.openView":"Открыть представление с помощью веб-браузера по умолчанию","contextMenu.openViews":"Открыть представления с помощью веб-браузера по умолчанию","contextMenu.reload":"Reload RU","contextMenu.reloadView":"Перезагрузить представление","contextMenu.reloadViews":"Перезагрузить представления","contextMenu.duplicate":"Duplicate RU","contextMenu.duplicateView":"Дублировать представление","contextMenu.duplicateViews":"Дублировать представления","contextMenu.addView":"Добавить представление на канал","contextMenu.addViews":"Добавить представления на канал","contextMenu.removeView":"Удалить представление из канала","contextMenu.removeViews":"Удалить представления из канала","contextMenu.closeView":"Закрыть представление","contextMenu.closeViews":"Закрыть представления","contextMenu.closeTab":"Close Tab RU","contextMenu.duplicatePage":"Дублировать страницу","contextMenu.submenu.print":"Печатать","contextMenu.submenu.printAll":"Печатать все","saveMenu.saveWorkspaceAs":"Сохранить рабочую область как","saveMenu.savePageAs":"Сохранить страницу как","saveModal.enterValue":"Please enter a value RU","saveModal.alreadyExists":"{{title}} уже существует.","saveModal.pleaseEnterValidName":"Введите подходящее имя","saveModal.renamePage":"Переименовать страницу","saveModal.closePage":"Закрыть страницу","saveModal.discardChanges":"Отменить изменения","saveModal.discardAll":"Отменить все","saveModal.saveAll":"Сохранить все","saveModal.savePagesCount":"Сохранить ({{count}}) страниц перед закрытием?","defaultPageTitle":"Untitled Page RU","enterpriseDefaultPageTitle":"Untitled Supertab RU","addNewPage":"Добавить новую страницу","addNewTab":"Добавить новую вкладку","addNewView":"Новое представление","restoreModal":"Вы уверены, что хотите восстановить последние сохраненные изменения?","modal.discardWarning":"Все несохраненные изменения будут отменены","modal.discardPageWarning":"Все несохраненные изменения на этой странице будут потеряны.","modal.saveChangesPrompt":"Сохранить изменения перед закрытием?","modal.pageClose":"Закрыть страницу","switchWorkspaceModal":"Вы уверены, что хотите перейти в {{workspace}}?","switchWorkspaceModal.warning":"Все несохраненные изменения будут отменены","deleteWorkspaceModal":"Вы уверены, что хотите навсегда удалить эту рабочую область?","replaceWorkspaceModal.warning":"Рабочая область с именем {{workspace}} уже существует. Вы хотите заменить ее?","replaceWorkspaceModal.warning.body":"Рабочая область с таким же именем уже существует. При ее замене текущее содержимое будет перезаписано.","replaceWorkspaceModal.replace":"Заменить","closePlatform":"Закрыть платформу","closePlatform.workspace":"Закрыть платформу {{workspace}}","closePlatform.warning":"Закрытие платформы приведет к закрытию всех рабочих областей, приложений и запущенных процессов.","back":"Назад","forward":"Вперед","reload":"Перезагрузить ","green":"Зеленый","purple":"Фиолетовый","orange":"Оранжевый","red":"Красный","pink":"Розовый","yellow":"Желтый","theme.light":"Светлый","theme.dark":"Темный","theme.system":"Синхронизировать с настройками ОС","toolbar.hideTabs":"Скрыть вкладки","toolbar.showTabs":"Показать вкладки","toolbar.lock":"Заблокировать","toolbar.unlock":"Разблокировать","toolbar.colorLinking":"Привязка к цвету","toolbar.changeLayout":"Изменить макет","toolbar.saveMenu":"Меню сохранения","toolbar.maximizeWindow":"Увеличить окно","toolbar.restoreWindow":"Восстановить окно","toolbar.minimizeWindow":"Свернуть окно","changeLayout.fullWidth":"Полная ширина","changeLayout.columns":"Столбцы","changeLayout.Rows":"Строки","changeLayout.Grid":"Сетка","successIndicator.workspaceSwitched":"Рабочая область переключена","successIndicator.hidden":"Вкладки скрыты","successIndicator.shown":"Вкладки показаны","successIndicator.locked":"Страница заблокирована","successIndicator.unlocked":"Страница разблокирована","successIndicator.workspaceSaved":"Рабочая область сохранена","successIndicator.workspaceSavedAs":"Рабочая область сохранена как {{workspace}}","successIndicator.workspaceRenamed":"Рабочая область переименована","successIndicator.pageSaved":"Страница сохранена","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. RU","successIndicator.pageCopySaved":"Страница сохранена как {{title}}","successIndicator.pageRenamed":"Страница переименована","successIndicator.contextGroupApplied":"Контекстная группа применена","successIndicator.namedContextGroupApplied":"Контекстная группа {{colorName}} применена","successIndicator.viewRemoved":"Представление удалено из контекстной группы","successIndicator.viewsRemoved":"Представления удалены из контекстной группы","successIndicator.layoutApplied":"Макет {{layoutName}} применен","successIndicator.workspaceDeleted":"Рабочая область удалена","errorIndicator.pageSaveFailed":"Не удалось сохранить страницу","errorIndicator.workspaceSaveFailed":"Не удалось сохранить рабочую область","errorIndicator.failedToDuplicatePage":"Не удалось продублировать страницу","infoIndicator.colorLinkAttempt":"Мы попытались привязать цвет к этой вкладке, но владелец сайта/контента еще не включил эту возможность","global.cancel":"Отменить","global.confirm":"Подтвердить","global.save":"Сохранить","global.delete":"Delete RU","appResults.header":"Featured Content RU","recentlyClosed.header":"Recently Closed RU","landingPage.subheader":"Apps and websites selected by an admin will show here RU","aria.openBrowser":"Открыть меню браузера","aria.browserTabs":"Вкладки браузера","aria.viewTab":"Вкладка представления {{title}}","aria.closePage":"Кнопка «Закрыть» на вкладке для страницы {{title}}","aria.closeTab":"Закрыть вкладку {{title}}","aria.title":"Название","aria.closeContextGroup":"Чтобы закрыть диалог выбора контекстной группы, используйте escape","aria.colorLinking":"Показать или скрыть привязку к цвету","aria.applyColorLinking":"Выберите представление, чтобы применить привязку к цвету","aria.assignColorLinkingCurrentView":"Текущее представление, назначенное контекстной группе {{name}}","aria.assignColorLinkingCurrentViews":"Текущие представления, назначенные контекстной группе {{name}}","aria.setColorLinkingActiveView":"Установить активное представление в контекстную группу {{name}}","aria.setColorLinkingActiveViews":"Установить активные представления в контекстную группу {{name}}","aria.escapeLayoutDialog":"Чтобы закрыть диалог изменения макета, используйте escape","global.supertab":"Supertab RU","global.tab":"Tab RU","bookmarks.editBookmark":"Edit Bookmark RU","bookmarks.bookmarkAdded":"Bookmark added RU","bookmarks.done":"Done RU","bookmarks.remove":"Remove RU","bookmarks.bookmarksPanel":"Bookmarks Panel RU","bookmarks.bookmarks":"Bookmarks RU","bookmarks.allBookmarks":"All Bookmarks RU","bookmarks.favorites":"Favorites RU","bookmarks.searchBookmarks":"Search Bookmarks RU","bookmarks.clearSearchInput":"Clear Search Input RU","bookmarks.createFolder":"Create New Folder RU","bookmarks.exitFolder":"Exit Folder RU","bookmarks.newFolder":"New Folder RU","bookmarks.namedFolder":"{{name}} Folder RU","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings RU","bookmarks.folderSettings":"{{name}} Folder Settings RU","bookmarks.noResultsFound":"No results found RU","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search RU","bookmarks.nothingToShow":"Nothing to show yet RU","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder RU","bookmarks.resultsFoundIn":"Results found in {{name}} RU","bookmarks.resultsInOtherFolders":"Results found in other folders RU","bookmarks.allResultsFoundIn":"All results found in RU","bookmarks.editName":"Edit Name RU","bookmarks.move":"Move RU","bookmarks.bookmarkAddedTitle":"Bookmark Added RU","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" RU","bookmarks.bookmarkEditedTitle":"Bookmark Edited RU","enterpriseContextMenu.saveSupertab":"Save Supertab RU","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... RU","enterpriseContextMenu.duplicate":"Duplicate RU","enterpriseContextMenu.deleteSupertab":"Delete Supertab RU","enterpriseContextMenu.newTab":"New Tab RU","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As RU","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? RU","saveSupertabCount_other":"Save {{count}} Supertabs before closing? RU"},"enterpriseSaveModal.renameSupertab":"Rename RU","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. RU","enterpriseSaveModal.closeTab":"Close Tab RU","enterpriseSaveModal.closeSupertab":"Close Supertab RU","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. RU","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? RU","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. RU","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved RU","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.RU","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted RU","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. RU","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab RU","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab RU","enterpriseCommandBar.switchToSupertab":"Switch to Supertab RU","enterpriseCommandBar.goTo":"Go to {{type}} RU","enterpriseCommandBar.viewMore":"View More RU","sidePanel.aiCenter":"AI Center RU","sidePanel.newChat":"New Chat RU","sidePanel.toggleSidePanel":"Toggle Side Panel RU","sidePanel.closeSidePanel":"Close Side Panel RU","sidePanel.openAiCenter":"Open AI Center RU","contextMenu.quitEnterpriseBrowser":"Quit RU","dock.removeFavorite":"Remove RU"}'), G = se().t, Ve = async (e) => await (await lt(e)).dispatch(ut.GetPages), ht = async (e) => (await lt(e.identity)).dispatch(ut.UpdatePageForWindow, e);
    let Ht, mt = !1;
    const vn = () => mt, Ra = () => Ht || { enabled: !1 };
    async function vi(e, n) {
      const o = !!n;
      let s = /* @__PURE__ */ new Set();
      if (o) {
        const { identity: u, pageId: w } = n, S = y().Browser.wrapSync(u), v = await S.getPage(w);
        v != null && v.panels && (s = new Set(v.panels.map(({ viewOptions: _ }) => _.name)));
      }
      return e.map((u) => {
        const w = u.viewOptions.name;
        (w == null ? void 0 : w.startsWith(I)) && (!o || o && !s.has(w)) && delete u.viewOptions.name;
        const v = (_ = u.viewOptions, _.name || (_.name = `${I}${Et()}`), _);
        var _;
        return { ...u, viewOptions: { ...v, uuid: et.uuid } };
      });
    }
    async function ki(e) {
      for (const n of e) n.panels && await Si(n.panels);
    }
    const Cc = (e) => e !== null && typeof e == "object" && "message" in e && typeof e.message == "string" && /ERR_([A-Z]+_*)+/.test(e.message);
    async function Si(e) {
      const n = e.map((o) => fin.Platform.getCurrentSync().createView(o.viewOptions, fin.me.identity).catch((s) => {
        if (!Cc(s)) throw s;
        console.error(s);
      }));
      return await Promise.all(n);
    }
    const Pi = (e, n) => !n.find((o) => o === e), xi = (e, n) => `${e} (${n})`, Mo = (e, n) => {
      if (Pi(e, n)) return e;
      let o = 1;
      const s = e.replace(/ *\(\d+\)$/, "");
      for (; !Pi(xi(s, o), n); ) o += 1;
      return xi(s, o);
    }, _r = async () => {
      const e = await $n();
      return (await Promise.all(e.map(async (n) => {
        var o;
        try {
          return Ve(n.identity);
        } catch {
          return JSON.stringify(n.identity), ((o = (await n.getOptions()).workspacePlatform) == null ? void 0 : o.pages) || [];
        }
      }))).reduce((n, o) => n.concat(o), []);
    }, Mc = async () => (await le(et)).dispatch(ie.GetSavedPages, void 0), Ci = async (e) => (await le(et)).dispatch(ie.GetSavedPage, e), Mi = async (e, n) => {
      const o = await (async (s) => (await _r()).find((u) => u.pageId === s))(e);
      return !o || o.title === n.title && e === n.pageId || await ht({ identity: o.parentIdentity, pageId: e, page: { pageId: n.pageId, title: n.title } }), o;
    }, Ii = async ({ page: e }) => {
      await Mi(e.pageId, e), await (async (n) => (await le(et)).dispatch(ie.CreateSavedPage, n))({ page: e });
    }, Ic = async (e) => {
      await Ci(e) && await (async (n) => (await le(et)).dispatch(ie.DeleteSavedPage, n))(e);
    }, Ai = async ({ pageId: e, page: n }) => (await Mi(e, n), await (async (o) => (await le(et)).dispatch(ie.UpdateSavedPage, o))({ pageId: e, page: n })), Ti = async (e) => await Ci(e.pageId) ? Ai({ pageId: e.pageId, page: e }) : Ii({ page: e }), Ac = async (e) => {
      await (async (n) => (await lt(n.identity)).dispatch(ut.AttachPagesToWindow, n))(e);
    }, Tc = async (e) => {
      const n = { ...e.page, panels: e.page.panels && await vi(e.page.panels, e) };
      n.panels && await Si(n.panels), await ht({ ...e, page: n });
    }, Ec = async (e) => {
      await (async (n) => (await lt(n.identity)).dispatch(ut.DetachPagesFromWindow, n))(e);
    }, Rc = async (e) => {
      await (async (n) => (await lt(n.identity)).dispatch(ut.SetActivePageForWindow, n))(e);
    }, Ei = (e) => Ve(e), Dc = async ({ identity: e, pageId: n }) => (await Ei(e)).find((o) => o.pageId === n), _c = async (e) => {
      await (async (n) => (await lt(n.identity)).dispatch(ut.ReorderPagesForWindow, n))(e);
    }, Ri = new class {
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
    async function Di(e) {
      await Ri.lock();
      try {
        const n = vn() ? G("enterpriseDefaultPageTitle") : G("defaultPageTitle"), o = e ?? n, [s, u] = await Promise.all([Mc(), _r()]), w = [...s, ...u].map(({ title: S }) => S);
        return Mo(o, w);
      } finally {
        Ri.unlock();
      }
    }
    async function Oc({ page: e }) {
      return { shouldShowModal: !(!e || !e.hasUnsavedChanges) };
    }
    async function Wc({ page: e, identity: n }) {
      if ((await fin.Application.getCurrentSync().getInfo()).initialOptions.enableBeforeUnload) {
        const s = await fin.Application.getCurrentSync().getViews(), u = F(e.layout.content).filter((S) => S.name && s.some((v) => v.identity.name === S.name)).map((S) => fin.View.wrapSync({ name: S.name, uuid: n.uuid })), w = await this.checkViewsForPreventUnload(u);
        if (w.viewsPreventingUnload.length > 0 && (await this.getUserDecisionForBeforeUnload({ ...w, windowId: n, windowShouldClose: !1, closeType: "page" })).viewsToClose.length !== u.length)
          return e.pageId, { shouldPageClose: !1 };
      }
      return { shouldPageClose: !0 };
    }
    async function Bc({ pages: e, identity: n }) {
      const o = await Promise.all(e.map((w) => this.shouldPageClose({ page: w, closeType: "window", identity: n }))), { pagesPreventingClose: s, pagesNotPreventingClose: u } = e.reduce((w, S, v) => o[v].shouldPageClose ? { pagesPreventingClose: w.pagesPreventingClose, pagesNotPreventingClose: [...w.pagesNotPreventingClose, S] } : { pagesNotPreventingClose: w.pagesNotPreventingClose, pagesPreventingClose: [...w.pagesPreventingClose, S] }, { pagesPreventingClose: [], pagesNotPreventingClose: [] });
      return this.handlePagesAndWindowClose({ pagesNotPreventingClose: u, pagesPreventingClose: s, identity: n });
    }
    async function Nc({ pagesPreventingClose: e, pagesNotPreventingClose: n, identity: o }) {
      return { shouldWindowClose: e.length === 0 };
    }
    async function Fc({ page: e }) {
      return za(e);
    }
    async function Lc(e) {
      return { hasUnsavedChanges: !0 };
    }
    const Vc = async () => {
      const e = y(), n = (await $n()).map((o) => e.Browser.wrapSync(o.identity));
      await Promise.all(n.map(async (o) => {
        const s = await o.getPages();
        await Promise.all(s.map(async (u) => {
          u.title, await o.updatePage({ pageId: u.pageId, page: { hasUnsavedChanges: !1 } }), u.pageId, u.title, await Ti({ ...u, hasUnsavedChanges: !1 });
        }));
      }));
    }, Io = /* @__PURE__ */ new Map(), Uc = () => Io, _i = (e) => Io.delete(e);
    let Ao = !1;
    const $c = () => {
      Ao || (Ao = !0, fin.Window.wrapSync(Ba).once("closed", () => {
        Ao = !1, (async (e, n) => {
          await zr(Gr(e), { source: "Store", ...n });
        })(fin.me.identity, { type: "Navigation", action: "Close Store", skipValueHashing: !0 });
      }));
    };
    let Da, Oi, To;
    const Wi = async () => (To === void 0 && (To = !!(await qe()).disableOpenFinAnalytics), To);
    async function Kc(e) {
      e.forEach((o) => {
        var s, u;
        o.type === "Page" ? o.action === "Open Page" ? (s = o.data.uuid, u = o, Io.set(s, u)) : o.action === "Close Page" && _i(o.data.uuid) : o.source === "Store" && o.action !== "Close" && $c();
      }), await (async (o) => {
        Da != null && Da.sendToOpenFin && (await Wi() || o.forEach(async (s) => {
          const u = Yn({}, s);
          u.entityId && (u.entityId.uuid = await Ma(u.entityId.uuid), u.entityId.name = await Ma(u.entityId.name)), !s.skipValueHashing && "value" in u && (u.value = await Ma(u.value)), Oi(u);
        }));
      })(e);
      const n = e.map(({ skipValueHashing: o, ...s }) => s);
      this.handleAnalytics(n);
    }
    const jc = async (e) => {
      Da = e, Da != null && Da.sendToOpenFin && !await Wi() && (() => {
        const o = Rn, s = o + $.Analytics, u = document.createElement("IFRAME");
        u.setAttribute("src", s), u.setAttribute("style", "width: 0px !important"), u.setAttribute("style", "height: 0px !important"), u.setAttribute("style", "display: none !important"), document.body.appendChild(u), Oi = async (w) => {
          u.contentWindow.postMessage(w, o);
        };
      })();
      const n = fin.Application.getCurrentSync();
      n.addListener("view-created", async (o) => {
        var s;
        _t({ type: "View", action: "Open View", value: o.viewIdentity.name, data: { uuid: o.viewIdentity.uuid, url: await (s = o.viewIdentity, fin.View.wrapSync(s).getInfo().then((u) => u.url)) } });
      }), n.addListener("view-destroyed", async (o) => {
        _t({ type: "View", action: "Close View", value: o.viewIdentity.name, data: { uuid: o.viewIdentity.uuid } });
      }), n.addListener("window-closed", (o) => {
        o.name.startsWith(Fe.BrowserMenu) || (_t({ type: "Window", action: "Close Window", value: o.name, data: { uuid: o.uuid } }), (async () => {
          const s = Uc(), u = await _r();
          if (u.length === s.size) return;
          const w = u.reduce((S, v) => S.set(v.pageId, 1), /* @__PURE__ */ new Map());
          for (const [S, v] of s) w.has(S) || (v.action = "Close Page", _t(v), _i(S));
        })());
      });
    }, Hc = St({ alwaysOnTop: !0, autoShow: !1, frame: !1, resizable: !1, showTaskbarIcon: !1 }), Gc = /* @__PURE__ */ function(e = Hc) {
      const n = /* @__PURE__ */ new Map();
      return async (o, s, u, w, S) => {
        if (n.has(o)) {
          const { currentUrl: q, currentName: j } = n.get(o);
          if (q === s) return;
          await fin.Window.wrapSync({ uuid: fin.me.uuid, name: j }).close();
        }
        const v = `${Fe.BrowserIndicator}-${Date.now()}${Math.random()}`;
        n.set(o, { currentUrl: s, currentName: v });
        const _ = `New ${w} indicator: ${u} ${S}`, N = await fin.Platform.getCurrentSync().createWindow({ ...e, name: v, url: s });
        ((q, j) => {
          const X = document.createElement("div");
          X.setAttribute("role", "alert"), X.setAttribute("aria-live", "polite"), ((ne) => {
            ne.style.position = "absolute", ne.style.width = "1px", ne.style.height = "1px", ne.style.padding = "0", ne.style.margin = "-1px", ne.style.overflow = "hidden", ne.style.whiteSpace = "nowrap", ne.style.border = "0";
          })(X), document.body.appendChild(X), setTimeout(() => {
            X.innerHTML = q;
          }, 300), setTimeout(() => {
            document.body.removeChild(X);
          }, 1e3);
        })(_), N.once("closed", () => {
          n.delete(o);
        });
      };
    }();
    async function Eo(e) {
      const { parentBrowserName: n } = e;
      return n && n.includes(Fe.BrowserWindow) && fin.me.name !== n ? (await lt({ uuid: fin.me.uuid, name: n })).dispatch(ut.ShowBrowserIndicator, e) : async function(o) {
        const { type: s, message: u, parentBrowserName: w, secondaryMessage: S, icon: v, isEnterprise: _, positioning: N } = o, q = new URLSearchParams();
        if (q.append("type", s), q.append("message", u), q.append("parentName", w || ""), q.append("secondaryMessage", S || ""), q.append("icon", v || ""), q.append("isEnterprise", `${_}` || ""), N === da.RelativeToMonitor && q.append("positioning", da.RelativeToMonitor), w) {
          const ne = Ft(w ? { uuid: Re, name: w } : void 0), me = `${(j = await ne.getBounds()).top},${j.left},${j.height},${j.width},${j.bottom},${j.right},${j.content.top},${j.content.left},${j.content.height},${j.content.width}`;
          q.append("parentBounds", me);
        }
        var j;
        const X = `${(_ ? await Dt() : await dn()) + $.BrowserIndicator}#${q.toString()}`;
        return Gc("browser" + w, X, u, s, S);
      }(e);
    }
    async function eo(e) {
      const n = e.isEnterprise ?? await ct(e.parentBrowserName ? { uuid: Re, name: e.parentBrowserName } : void 0);
      return Eo({ type: "success", message: e.message, parentBrowserName: e.parentBrowserName, secondaryMessage: e.secondaryMessage, icon: e.icon, isEnterprise: n, positioning: e.positioning });
    }
    const _a = async (e = et) => {
      const { workspacePlatform: n } = await Ft(e).getOptions(), o = n == null ? void 0 : n.newPageUrl, s = n == null ? void 0 : n.newTabUrl;
      return { newPageUrl: o, newTabUrl: s };
    }, to = async (e = et) => {
      const n = await ct(e) || vn(), o = n ? null : await y().Browser.getUniquePageTitle();
      let s;
      if (e && await Un(e)) s = await (async (w, S = et) => {
        const { newPageUrl: v } = await _a(S);
        if (!v) throw new Error("Trying to create a new page without a newPageUrl set");
        return U(w, v, S);
      })(o, e);
      else if (n) {
        const w = await _e();
        s = await U(o, w);
      }
      n && (s.settings = s.settings ?? {}, s.dimensions = s.dimensions ?? {}, s.settings.hasHeaders = !1, s.settings.reorderEnabled = !0, s.dimensions.headerHeight = 0);
      const u = await on(o, s);
      return n && (u.hasUnsavedChanges = !1), u;
    }, zc = async (e, n, o) => {
      const { windowOptions: s, content: u } = await (async (v, _) => {
        const N = await ct(_);
        return { title: "Switch Workspace", windowOptions: { url: await fe(N, !1) + $.ResponseModal, name: Fe.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: _ }, content: { title: G("switchWorkspaceModal", { workspace: v }), body: G("switchWorkspaceModal.warning"), buttons: { right: [{ label: G("global.cancel"), type: "secondary", id: "Cancel" }, { label: G("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(n, o ? void 0 : e), w = await Hn(s, e, o), S = { ...s, top: w.top, left: w.left };
      return (await ia({ options: S, content: u })).data.actionName === "Confirm";
    }, qc = async ({ workspaceTitle: e, windowIdentity: n }) => {
      const { windowOptions: o, content: s } = await (async ({ workspaceTitle: S, windowIdentity: v }) => {
        const _ = await ct(v);
        return { title: "Delete Workspace", windowOptions: { url: await fe(_, !1) + $.ResponseModal, name: Fe.BrowserMenu, defaultHeight: 144, defaultWidth: 410, modalParentIdentity: v }, content: { title: G("deleteWorkspaceModal"), body: `${S}`, buttons: { right: [{ label: G("global.cancel"), type: "secondary", id: "Cancel" }, { label: G("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })({ workspaceTitle: e, windowIdentity: n }), u = await Hn(o, o.modalParentIdentity), w = { ...o, top: u.top, left: u.left };
      return (await ia({ options: w, content: s })).data.actionName === "Confirm";
    }, Bi = async (e, n, o) => {
      const { windowOptions: s, content: u } = await (async (v, _, N) => {
        const q = await ct(v);
        return { title: "Platform Quit", windowOptions: { url: await fe(q, !1) + $.ResponseModal, name: Fe.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: N ? void 0 : v }, content: { title: G(_ === "Platform" ? "closePlatform" : "closePlatform.workspace", { workspace: _ }), body: G("closePlatform.warning"), buttons: { right: [{ label: G("global.cancel"), type: "secondary", id: "Cancel" }, { label: G("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e, n, o), w = await Hn(s, e, o), S = { ...s, top: w.top, left: w.left };
      return (await ia({ options: S, content: u })).data.actionName === "Confirm";
    }, Jc = async (e) => {
      const { windowOptions: n, content: o } = await (async (w) => {
        const S = await ct(w);
        return { title: "Restore Changes", windowOptions: { url: await fe(S, !1) + $.ResponseModal, name: Fe.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: w }, content: { title: G("restoreModal"), body: G("modal.discardWarning"), buttons: { right: [{ label: G("global.cancel"), type: "secondary", id: "Cancel" }, { label: G("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e), s = await Hn(n, n.modalParentIdentity), u = { ...n, top: s.top, left: s.left };
      return (await ia({ options: u, content: o })).data.actionName === "Confirm";
    }, Zc = async (e, n) => {
      const { windowOptions: o, content: s } = await (async (S, v) => {
        const _ = await ct(S);
        return { title: "Delete Page", windowOptions: { url: new URL(await fe(_, !1) + $.ResponseModal).toString(), name: Fe.BrowserMenu, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: S }, content: { title: G("enterpriseDeleteModal.deleteSupertab", { title: v }), body: G("enterpriseDeleteModal.deleteSupertabWarning"), buttons: { right: [{ label: G("global.cancel"), type: "secondary", id: "Cancel", variant: _ ? "outline" : void 0 }, { label: G("global.delete"), type: "primary", id: "Delete", variant: _ ? "submit" : void 0 }] } } };
      })(e, n), u = await Hn(o, o.modalParentIdentity), w = { ...o, top: u.top, left: u.left };
      return (await ia({ options: w, content: s })).data.actionName === "Delete";
    }, Yc = async ({ identity: e, title: n, description: o }) => {
      var _;
      const { windowOptions: s, content: u } = await (async (N, q, j) => ({ title: "Update Version", windowOptions: { url: await Dt() + $.ResponseModal, name: Fe.UpdateVersionModal, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: N, preventBlur: !0, closeOnResponse: !0, includeInSnapshots: !1 }, content: { title: q, body: j, buttons: { right: [{ label: "Snooze", type: "secondary", id: "snooze" }, { label: "Restart", type: "primary", id: "restart" }] } } }))(e, n, o), w = fin.Window.wrapSync({ uuid: e.uuid, name: `${s.name}--${(_ = s.modalParentIdentity) == null ? void 0 : _.name}` });
      try {
        if (await (w == null ? void 0 : w.isShowing())) return;
      } catch {
      }
      const S = await Hn(s, s.modalParentIdentity), v = { ...s, top: S.top, left: S.left };
      return (await ia({ options: v, content: u })).data;
    };
    async function Ni({ options: e, ...n }) {
      var w;
      if (!(e != null && e.skipPrompt || await zc(e == null ? void 0 : e.promptContainerWindowIdentity, n.title, e == null ? void 0 : e.shouldCenterModalOnMonitor))) return !1;
      const s = !!(await fin.Application.getCurrentSync().getChildWindows()).find(({ identity: S }) => S.name === Fe.DockCompanion || S.name === At) || vn() ? { closeExistingWindows: !1, closeSnapshotWindows: !0 } : { closeExistingWindows: ((w = e == null ? void 0 : e.applySnapshotOptions) == null ? void 0 : w.closeExistingWindows) ?? !0 };
      return await y().applySnapshot(n.snapshot, { ...(e == null ? void 0 : e.applySnapshotOptions) ?? {}, ...s }), Ro(n), Eo({ type: "success", message: G("successIndicator.workspaceSwitched"), positioning: da.RelativeToMonitor }).catch(console.warn), !0;
    }
    async function Qc(e) {
      try {
        return await Ni(e);
      } catch (n) {
        return console.error("failed to apply the current workspace: ", n), !1;
      }
    }
    async function Fi(e) {
      try {
        const n = await async function() {
          const o = y(), s = await o.getCurrentWorkspace({ skipSnapshotUpdate: !0 });
          return (await o.Storage.getWorkspaces()).find((u) => u.workspaceId === s.workspaceId);
        }();
        return n ? e != null && e.skipPrompt || await Jc(e == null ? void 0 : e.promptContainerWindowIdentity) ? (await Ni({ options: { skipPrompt: !0, applySnapshotOptions: e == null ? void 0 : e.applySnapshotOptions }, ...n }), "success") : "user-declined" : "not-saved-workspace";
      } catch (n) {
        throw console.error("failed to restore last saved workspace: ", n), n;
      }
    }
    function Ro(e) {
      if (typeof localStorage < "u") try {
        const n = JSON.stringify(e);
        Ue(nt.CurrentWorkspaceId, n);
      } catch (n) {
        console.error("failed to set the active workspace: ", n);
      }
    }
    async function Do() {
      const e = y(), n = await e.getSnapshot();
      return { workspaceId: Et(), title: await nl(), metadata: { APIVersion: Vt }, snapshot: n };
    }
    async function Xc(e) {
      if (typeof localStorage > "u") return Do();
      const n = ka(nt.CurrentWorkspaceId);
      if (!n) return Do();
      const o = JSON.parse(n);
      if (e != null && e.skipSnapshotUpdate) return o;
      const s = y(), u = await s.getSnapshot();
      return { ...o, metadata: { APIVersion: Vt }, snapshot: u };
    }
    const el = async () => (await le(et)).dispatch(ie.GetSavedWorkspaces, void 0), tl = async (e) => await (async (n) => (await le(et)).dispatch(ie.GetSavedWorkspace, n))(e.workspaceId) ? (async (n) => (await le(et)).dispatch(ie.UpdateSavedWorkspace, n))({ workspaceId: e.workspaceId, workspace: e }) : (async (n) => (await le(et)).dispatch(ie.CreateSavedWorkspace, n))({ workspace: e });
    async function nl(e = "Untitled Workspace") {
      const n = (await el()).map(({ title: o }) => o);
      return Mo(e, n);
    }
    const al = (e) => ({ ...e, snapshot: { ...e.snapshot, windows: e.snapshot.windows.map((n) => {
      var o, s;
      return { ...n, workspacePlatform: { ...n.workspacePlatform, pages: (s = (o = n.workspacePlatform) == null ? void 0 : o.pages) == null ? void 0 : s.map((u) => ({ ...u, hasUnsavedChanges: !1 })) } };
    }) } }), rl = async (e, n) => {
      await (n ?? y()).Storage.saveWorkspace(al(e)), await (async () => (await le(et)).dispatch(ie.MarkUnsavedPagesAsSavedInternal, void 0))();
    }, Li = async (e) => {
      const n = y();
      await (async ({ showModal: o, afterSuccessSave: s }) => {
        const u = y(), w = await u.getCurrentWorkspace(), S = await u.Storage.getWorkspacesMetadata(), v = w.workspaceId;
        S.some((_) => _.workspaceId === v) ? (await rl(w, u), await u.setActiveWorkspace(w), await s()) : await o();
      })({ showModal: async () => {
        await n.Browser.wrapSync(e)._openSaveModal({ menuType: Qe.SAVE_WORKSPACE_AS });
      }, afterSuccessSave: async () => {
        await eo({ message: G("successIndicator.workspaceSaved"), parentBrowserName: e.name });
      } });
    }, _o = (e) => {
      y().Browser.wrapSync(e)._openSaveModal({ menuType: Qe.SAVE_WORKSPACE_AS });
    }, Vi = async (e) => {
      const n = y().Browser.wrapSync(e), { newPageUrl: o } = await _a(), s = await to(e), u = o || void 0;
      await n._addDefaultPage({ identity: e, page: s, newPageUrl: u });
    }, Oo = async (e, n) => {
      const o = y().Browser.wrapSync(e), s = await y().Storage.getPages(), u = (await o.getPages()).find((N) => n ? N.pageId === n : N.isActive), w = s.some((N) => u.pageId === N.pageId), S = await ct(e);
      if (w) try {
        await y().Storage.savePage((_ = u, { ..._, hasUnsavedChanges: void 0, parentIdentity: void 0, isActive: void 0, layout: A(_.layout) })), await o.updatePage({ pageId: u.pageId, page: { hasUnsavedChanges: !1 } }), eo({ message: G(S ? "enterpriseSuccessIndicator.supertabSaved" : "successIndicator.pageSaved"), parentBrowserName: e.name, secondaryMessage: G(S ? "enterpriseSuccessIndicator.supertabHasBeenSaved" : "successIndicator.pageHasBeenSaved", { title: u.title }), isEnterprise: S });
      } catch {
        Eo({ type: "error", message: (v = { message: G("errorIndicator.pageSaveFailed"), parentBrowserName: u.parentIdentity.name }).message, parentBrowserName: v.parentBrowserName, icon: v.icon, isEnterprise: v.isEnterprise || !1, positioning: v.positioning });
      }
      else o._openSaveModal({ id: u.pageId, menuType: Qe.SAVE_PAGE });
      var v, _;
    }, Wo = async (e, n) => {
      const o = y().Browser.wrapSync(e), s = (await o.getPages()).find((u) => n ? u.pageId === n : u.isActive);
      o._openSaveModal({ id: s.pageId, menuType: Qe.SAVE_PAGE_AS }), _t({ type: "Page Modal", action: "Select Save As", value: s.title, skipValueHashing: !0 });
    }, ol = async (e, n) => {
      await (async ({ workspaceItemData: o, winIdentity: s, positioning: u }) => {
        const w = y(), S = (await w.Storage.getWorkspacesMetadata()).find((v) => v.workspaceId === o.workspaceId);
        S && await qc({ workspaceTitle: S.title, windowIdentity: s }) && (await w.Storage.deleteWorkspace(o.workspaceId), await eo({ message: G("successIndicator.workspaceDeleted"), parentBrowserName: s == null ? void 0 : s.name, positioning: u }));
      })({ workspaceItemData: n, winIdentity: e });
    }, il = { title: "Downloads", pageId: "downloads-page-id", layout: { content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { name: "show-download-view", url: "chrome://downloads/" } }] }] } }, Ui = async (e) => {
      const n = Ft(e), o = await n.getCurrentViews(), s = (await y().Browser.wrapSync(n.identity).getPages()).find((u) => u.isActive);
      try {
        const u = (await Promise.all(o.map(async (w) => ({ identity: w.identity, info: await fin.View.wrapSync(w.identity).getInfo() })))).find((w) => w.info.url === "chrome://downloads/");
        if (u) await fin.View.wrapSync(u.identity).focus();
        else {
          const w = y();
          if (s != null && s.isLocked) {
            const S = (await fin.Application.getCurrentSync().getChildWindows()).find((v) => v.identity.name === "show-download-window");
            return void (S ? await S.focus() : w.Browser.createWindow({ name: "show-download-window", workspacePlatform: { pages: [il] } }));
          }
          (await y().createView({ name: "show-download-view", url: "chrome://downloads/", target: e }, e)).focus();
        }
      } catch (u) {
        console.error("Couldn't open downloads view", u);
      }
    }, Bo = async (e) => {
      const n = e.map((o) => fin.View.wrapSync(o).print());
      await Promise.all(n);
    }, $i = (e) => {
      const [n, o, s] = e.split(".").map((u) => u === "x" ? 0 : 1);
      return 100 * n + 10 * o + 1 * s;
    };
    class Ki extends Error {
    }
    const sl = async (e) => {
      try {
        const o = await async function() {
          const s = await qe(), u = (s == null ? void 0 : s.translationOverridesUrl) ?? "https://workspace.openfin.co/workspace/assets/translation-override.json";
          if (u === "") throw new Ki("Empty string provided as url to translationOverridesUrl, overrides will not be fetched.");
          return await fetch(u).then((w) => w.json());
        }();
        (n = ((s) => {
          const u = Vt.split(".");
          return Object.keys(s).filter((w) => {
            const S = w.split(".");
            if (S.length !== 3) return console.warn(`Encountered a translation override version string in an unsupported format: ${w}. Versions must be in A.B.C format where A, B, C are either integers or the wildcard symbol 'x'.`), !1;
            const [v, _, N] = S;
            return !(v !== u[0] && v !== "x" || _ !== u[1] && _ !== "x" || N !== u[2] && N !== "x");
          });
        })(o), [...n].sort((s, u) => $i(s) - $i(u))).forEach((s) => {
          const u = o[s];
          Object.keys(u).forEach((w) => {
            e.addResourceBundle(w, "translation", u[w], !0, !0);
          });
        });
      } catch (o) {
        o instanceof Ki ? console.warn(o.message) : console.error("Error applying a translation override: ", o);
      }
      var n;
    };
    function ji() {
      return se().language;
    }
    const cl = async (e) => {
      Hi(e), ((n) => {
        se().changeLanguage(n);
      })(e), await (async (n) => {
        const o = await $n();
        return Promise.all(o.map(async (s) => {
          await (await lt(s.identity)).dispatch(ut.SetSelectedLanguage, n);
        }));
      })(e);
    };
    function ll() {
      if (!se().options.resources) throw new Error("No language resources found");
      return { currentLanguage: ji(), resources: se().options.resources };
    }
    async function ul(e = "en-US") {
      Hi(e), function(n = "en-US") {
        se().use(ae.initReactI18next).init({ lng: n, fallbackLng: "en-US", resources: { "en-US": { translation: we }, "ja-JP": { translation: ve }, "zh-CN": { translation: oe }, "ko-KR": { translation: Ke }, "ru-RU": { translation: ze }, "de-DE": { translation: ce }, "zh-Hant": { translation: be } }, interpolation: { escapeValue: !1 } });
      }(e), await sl(se());
    }
    function Hi(e) {
      if (!It.includes(e)) throw new Error(`The ISO language provided ${e} is not supported`);
    }
    const tr = /* @__PURE__ */ new Map();
    let No = Date.now();
    function Gi() {
      const e = Date.now();
      return No = Math.max(e, No + 1), No;
    }
    async function dl() {
      const e = Array.from(tr.values()).sort((n, o) => o.lastFocusedTime - n.lastFocusedTime);
      if (e.length > 0) return e[0].identity;
      try {
        const n = ka(nt.LastFocusedBrowserWindow);
        if (!n) return;
        const o = JSON.parse(n);
        if (await pn(o)) return await Oa(o), o;
      } catch (n) {
        console.error("failed to get last focused browser window from localStorage:", n);
      }
    }
    async function zi() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((n) => n.identity.name.startsWith(Fe.BrowserWindow));
    }
    async function pl() {
      const e = y(), n = fin.Window.wrapSync({ uuid: fin.me.uuid, name: Fe.DockCompanion }), o = await it(await n.getBounds()), s = await async function(w, S, v) {
        const _ = await fin.System.getMonitorInfo(), N = (v == null ? void 0 : v.availableRect) ?? _.primaryMonitor.availableRect, q = { width: N.right - N.left, height: N.bottom - N.top }, j = Math.min(w, q.height), X = Math.min(S, q.width), ne = N.top + Math.floor((q.height - j) / 2);
        return { height: j, width: X, left: N.left + Math.floor((q.width - X) / 2), top: ne };
      }(600, 900, o), u = await to();
      return (await e.Browser.createWindow({ defaultHeight: 600, defaultWidth: 900, defaultLeft: s.left, defaultTop: s.top, workspacePlatform: { pages: [u] } })).identity;
    }
    async function Oa(e, n, o = !1) {
      if (!await Un(e)) return;
      const s = fin.Window.wrapSync(e), u = n ?? await s.isShowing(), w = tr.get(e.name), S = { identity: e, lastFocusedTime: o ? Gi() : (w == null ? void 0 : w.lastFocusedTime) ?? Gi(), isVisible: u };
      tr.set(e.name, S), o && function(v) {
        if (typeof localStorage < "u") try {
          const _ = JSON.stringify(v);
          Ue(nt.LastFocusedBrowserWindow, _);
        } catch (_) {
          console.error("failed to save last focused browser window: ", _);
        }
      }(e);
    }
    async function fl(e = fin.me.identity) {
      tr.delete(e.name);
    }
    const hl = ja()(async () => {
      const e = await fin.Platform.getCurrentSync().Application.getChildWindows();
      let n, o = !1;
      for (const s of e) if (s.identity.name === Fe.BrowserMenu || s.identity.name === Fe.BrowserSaveMenu ? n = s : await Un(s.identity) && (o = !0), o) break;
      !o && n && n.close();
    }, 100, { leading: !1, trailing: !0 });
    let Fo = {};
    const gl = async ({ actionId: e, payload: n }) => {
      if (typeof Fo[e] != "function") throw new Error(`Cannot find a configured function for the action '${e}'`);
      return Fo[e](n);
    };
    let Lo;
    const ml = () => `custom-context-menu-${y().identity.uuid}-${Vt}`, wl = () => `custom-bookmark-context-menu-${y().identity.uuid}-${Vt}`, qi = async () => (Lo || (Lo = await fin.InterApplicationBus.Channel.connect(ml())), Lo);
    var Ji, nr;
    (function(e) {
      e.Save = "Save", e.SaveAs = "SaveAs";
    })(Ji || (Ji = {})), function(e) {
      e.GlobalMenu = "global-menu", e.ContextMenu = "context-menu", e.RenameSupertab = "rename-supertab", e.AddEditBookmark = "add-edit-bookmark", e.DropdownMenu = "dropdown-menu", e.ZoomControls = "zoom-controls";
    }(nr || (nr = {}));
    const no = "visited-sites", Vo = "removed-tab-stack";
    let Uo = null;
    function Or() {
      return !Uo && Ze && Ie.isFin && (Uo = mn("openfin-home-pages", "pages")), Uo;
    }
    let ao = null;
    function Zi() {
      return !ao && Ze && Ie.isFin && (ao = new qn.Dexie(nn("openfin-enterprise-site-history")), ao.version(0.1).stores({ [no]: "id, url" })), ao;
    }
    let ro = null;
    function Yi() {
      return !ro && Ze && Ie.isFin && (ro = new qn.Dexie(nn("openfin-enterprise-tab-history")), ro.version(0.1).stores({ [Vo]: "" })), ro;
    }
    async function $o(e) {
      const n = Or();
      if (!n) throw new Error("Unable to get page - IndexDB not supported");
      const o = await n.pages.get(e);
      if (o) return o.pageId = e.toString(), o.title = o.title || o.pageId, o;
    }
    async function yl(e) {
      const n = Or();
      if (!n) throw new Error("Unable to get page list - IndexDB not supported");
      const o = await n.pages.toCollection().keys(), s = (await Promise.all(o.map((u) => $o(u.toString())))).filter((u) => !!u);
      return e ? s.filter((u) => $t(u.title, e)) : s;
    }
    async function Qi({ page: e }) {
      const n = Or();
      if (!n) throw new Error("Unable to create page - IndexDB not supported");
      await n.pages.put(e, e.pageId);
    }
    async function Xi(e) {
      const n = Or();
      if (!n) throw new Error("Unable to delete page - IndexDB not supported");
      await n.pages.delete(e);
    }
    async function bl({ pageId: e, page: n }) {
      if (!Or()) throw new Error("Unable to update page - IndexDB not supported");
      if (await $o(e) === void 0) throw new Error("page not found");
      await Qi({ page: n }), e !== n.pageId && await Xi(e);
    }
    const vl = async (e) => {
      const n = Yi();
      if (!n) throw new Error("Unable to add removed tab - IndexDB not supported");
      const o = Date.now().toString(), s = { ...e, id: o };
      await n[Vo].put(s, o);
    };
    function kl(e) {
      return e.type === "app" || e.type === "website";
    }
    const Sl = async (e) => {
      const n = Zi();
      if (e.type === "website") {
        const o = e, s = o.url || "";
        let u = await n[no].get(s);
        u && kl(u) ? (u.icon = o.icon, u.title = o.title, u.type = o.type, u.visitCount = (u.visitCount || 0) + 1, u.url = o.url) : u = { ...o, id: s, visitCount: 1, accessTime: void 0 }, u.accessTime = Date.now(), await n[no].put(u, s);
      }
    }, Pl = async () => {
      const e = Zi();
      if (!e) throw new Error("Unable to get frequently visited sites - IndexDB not supported");
      const n = e[no], o = await n.toCollection().toArray();
      return o.sort((s, u) => (u.visitCount || 0) - (s.visitCount || 0)), (o.length > 5 ? o.slice(0, 5) : o).map(({ id: s, ...u }) => u);
    }, Wr = async () => (await fin.System.getHostSpecs()).name.toLowerCase().includes("windows"), es = async ({ browserIdentity: e, url: n, shiftKey: o, activePage: s, pages: u }) => {
      const w = y().Browser.wrapSync(e), S = await U(n, n, e), v = { ...await on(n, S), attachedPageType: "singleView", singleViewName: n }, _ = u.findIndex((N) => N.pageId === s.pageId);
      await w._addPage(v, { index: _ + 1 }), o && await w.setActivePage(v.pageId);
    }, xl = async (e) => {
      const { url: n } = e.bookmark, { sourceIdentity: o, sourceEvent: s } = e, u = await Wr(), w = y();
      let S = !1, v = o;
      if (!await Un(o)) {
        const me = await async function() {
          const Ce = Array.from(tr.values());
          for (let Ge = Ce.length - 1; Ge >= 0; Ge--) if (Ce[Ge].isVisible) return Ce[Ge].identity;
        }();
        if (!me) return await (async (Ce) => {
          const Ge = y(), Te = await U(Ce.url, Ce.url), je = await on(Ce.url, Te);
          Na((await Ge.Browser.createWindow({ workspacePlatform: { pages: [je] } })).identity);
        })(e.bookmark);
        S = !0, v = me;
      }
      const _ = w.Browser.wrapSync(v), N = await _.getPages(), q = (await _._getLayoutsWithSelectedViews()).find((me) => me.isActive);
      if (!q) throw Error(`Browser ${v} does not have any active layouts`);
      const j = N.find((me) => me.isActive), X = J(j.layout.content) === 1, ne = q.selectedViews[0];
      S ? await es({ browserIdentity: v, url: n, shiftKey: !0, activePage: j, pages: N }) : X ? await (async ({ isWindows: me, currentViewId: Ce, browserIdentity: Ge, url: Te, activePage: je, pages: Oe, sourceEvent: at }) => {
        const { ctrlKey: Qt, metaKey: Ee, shiftKey: dt } = at;
        (me ? Qt : Ee) ? await es({ browserIdentity: Ge, url: Te, shiftKey: dt, activePage: je, pages: Oe }) : await fin.View.wrapSync(Ce).navigate(Te);
      })({ isWindows: u, currentViewId: ne, browserIdentity: v, url: n, activePage: j, pages: N, sourceEvent: s }) : await (async ({ isWindows: me, currentViewId: Ce, browserIdentity: Ge, url: Te, activeLayout: je, sourceEvent: Oe }) => {
        const { ctrlKey: at, metaKey: Qt, shiftKey: Ee } = Oe;
        if (me ? at : Qt) {
          const dt = fin.View.wrapSync(Ce), bt = await dt.getCurrentStack(), Xt = (await bt.getViews()).findIndex((or) => or.name === Ce.name), rr = { url: Te, browserIdentity: Ge, title: Te };
          await bt.addView(rr, { index: Xt + 1 });
        } else await fin.View.wrapSync(je.selectedViews[0]).navigate(Te);
      })({ isWindows: u, currentViewId: ne, browserIdentity: v, url: n, activeLayout: q, sourceEvent: s });
    };
    var Me;
    (function(e) {
      e.Label = "normal", e.Separator = "separator", e.Submenu = "submenu", e.Checkbox = "checkbox";
    })(Me || (Me = {}));
    let Ko = { locked: !1, x: -1, y: -1 };
    const Cl = async (e, n, o, s) => {
      if (!Xe) throw new Error("showEnterpriseContextMenu can only be used in a Here env. Avoid calling this method during pre-rendering.");
      if (!s && !fin.me.isWindow) throw new Error("showEnterpriseContextMenu can only be used in a Here window.");
      const { x: u, y: w, template: S } = e;
      if (((q, j) => {
        const { x: X, y: ne, locked: me } = Ko;
        return me && q === X && j === ne;
      })(u, w)) return new Promise((q, j) => q({ data: void 0 }));
      Ko = { locked: !0, x: u, y: w };
      const v = await qi(), _ = Et(), N = new Promise((q, j) => {
        v.register(`response-${_}`, (X) => {
          Ko.locked = !1, v.remove(`response-${_}`), q(X);
        });
      });
      return await v.dispatch("open", { parentIdentity: s.identity, responseIdentity: et, requestId: _, type: n, anchorBehavior: o, x: u, y: w, payload: { template: S } }), N;
    }, Ot = { type: Me.Separator, data: void 0 }, Ml = async () => ({ type: Me.Submenu, label: G("contextMenu.print"), submenu: [{ type: Me.Label, label: G("contextMenu.submenu.print"), data: { type: pe.Print } }, { type: Me.Label, label: G("contextMenu.submenu.printAll"), data: { type: pe.PrintAll } }, Ot, { type: Me.Label, label: G("contextMenu.printScreen"), data: { type: pe.PrintScreen } }] }), jo = () => ({ type: Me.Label, label: G("contextMenu.closeWindow"), data: { type: Z.CloseWindow } }), Ho = (e) => ({ type: Me.Label, label: G(e ? "contextMenu.quitEnterpriseBrowser" : "contextMenu.quitPlatform"), data: { type: Z.Quit } }), ts = () => ({ type: Me.Label, label: G("contextMenu.newWindow"), data: { type: Z.NewWindow } }), ns = (e) => ({ type: Me.Label, label: G(e ? "enterpriseContextMenu.saveSupertab" : "contextMenu.savePage"), data: { type: Z.SavePage } }), as = (e) => ({ type: Me.Label, label: G(e ? "enterpriseContextMenu.saveSupertabAs" : "contextMenu.savePageAs"), data: { type: Z.SavePageAs } }), rs = (e, n) => ({ type: Me.Label, label: G(n ? "enterpriseContextMenu.newTab" : "contextMenu.newPage"), data: { type: Z.NewPage }, enabled: e }), os = () => ({ label: G("contextMenu.switchWorkspace") }), is = () => ({ label: G("contextMenu.deleteWorkspace") }), ss = () => ({ label: G("contextMenu.appearance") }), cs = (e, n, o) => n.map((s) => {
      const u = s.workspaceId === e.workspaceId;
      return { label: s.title, type: Me.Checkbox, enabled: !u, checked: u, data: { type: o, workspaceId: s.workspaceId } };
    }), ls = async () => {
      const e = await y().Theme.getSelectedScheme();
      return [{ label: G("theme.light"), type: Me.Checkbox, checked: e === ke.Light, data: { type: Z.Appearance, scheme: ke.Light } }, { label: G("theme.dark"), type: Me.Checkbox, checked: e === ke.Dark, data: { type: Z.Appearance, scheme: ke.Dark } }, { label: G("theme.system"), type: Me.Checkbox, checked: e === ke.System, data: { type: Z.Appearance, scheme: ke.System } }];
    }, Il = async (e, n = []) => {
      const o = await Fa(), { newPageUrl: s } = await _a(e), u = await (async (Te) => {
        const je = Ft(Te), { workspacePlatform: Oe } = await je.getOptions();
        return Oe == null ? void 0 : Oe.disableMultiplePages;
      })(e), w = await (async (Te) => {
        const je = Ft(Te), { workspacePlatform: Oe } = await je.getOptions();
        return Oe == null ? void 0 : Oe.isLocked;
      })(e), S = await ct(e), v = [], _ = n.length > 0;
      s && (v.push(ts()), u || v.push(rs(!w, S))), v.push(Ot);
      const N = y(), q = await N.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), j = await N.Storage.getWorkspacesMetadata(), X = j.find((Te) => Te.workspaceId === q.workspaceId), ne = N.Browser.wrapSync(e), me = (await ne.getPages()).find((Te) => Te.isActive), Ce = !!me && await N.Storage.getPage(me.pageId);
      v.push({ type: Me.Label, label: G("contextMenu.restore"), data: { type: Z.RestoreChanges }, enabled: !!X }), v.push({ type: Me.Label, label: G("contextMenu.saveWorkspace"), data: { type: Z.SaveWorkspace }, enabled: !!X }), v.push({ type: Me.Label, label: G("contextMenu.saveWorkspaceAs"), data: { type: Z.SaveWorkspaceAs } }), v.push({ type: Me.Label, label: G("contextMenu.renameWorkspace"), data: { type: Z.RenameWorkspace }, enabled: !!X }), j.some((Te) => Te.workspaceId !== q.workspaceId) ? v.push({ label: os().label, submenu: cs(q, j, Z.SwitchWorkspace), data: void 0 }, { label: is().label, submenu: cs(q, j, Z.DeleteWorkspace), data: void 0 }) : v.push({ label: os().label, enabled: !1, data: void 0 }, { label: is().label, enabled: !1, data: void 0 }), v.push({ label: G("contextMenu.downloads"), data: { type: Z.Downloads } }), v.push({ label: ss().label, submenu: await ls(), data: void 0 });
      const Ge = { ...ns(S), enabled: !!Ce };
      return v.push(Ot, Ge, as(S), await (async (Te) => {
        const je = await Wr();
        return { label: G("contextMenu.print"), submenu: [{ type: Me.Label, label: G("contextMenu.submenu.print"), data: { type: Z.Print }, enabled: Te }, { type: Me.Label, label: G("contextMenu.submenu.printAll"), data: { type: Z.PrintAll } }, ...je ? [Ot, { type: Me.Label, label: G("contextMenu.printScreen"), data: { type: Z.PrintScreen } }] : []], data: void 0 };
      })(_)), o ? [...v, jo(), Ot, { type: Me.Label, label: G("contextMenu.openStorefront"), data: { type: Z.OpenStorefront } }, Ot, Ho()] : [...v, Ot, jo(), Ot, Ho()];
    }, Al = async (e, n) => {
      const o = n.selectedViews[0], s = fin.View.wrapSync(o), u = await (async (w) => {
        const { newTabUrl: S } = await _a(w);
        if (!S) throw new Error("Trying to create a new page without a newTabUrl set");
        return { url: S, target: w, title: "New Tab" };
      })(e);
      await y().createView(u, e, s.identity);
    }, Tl = async (e, n) => {
      const o = y().Browser.wrapSync(e), s = (await o.getPages()).find((S) => S.isActive), u = await fin.Window.wrapSync(e).getCurrentViews();
      if (n.length === u.length - (s.panels ?? []).length)
        return void (await lt(e)).dispatch(ut.ClosePage, { pageId: s == null ? void 0 : s.pageId });
      const w = fin.Platform.getCurrentSync();
      n.forEach(async (S) => {
        const v = await fin.View.wrapSync(S).getParentLayout();
        await w.closeView(S);
        const { hasUnsavedChanges: _ } = await (async (N) => (await Be(et)).dispatch(ie.HandlePageChanges, N))({ page: { ...s, layout: await v.getConfig() }, identity: e, eventDetails: { type: Pe.ViewRemoved, viewIdentity: S } });
        _ && await o.updatePage({ pageId: s.pageId, page: { hasUnsavedChanges: !0 } });
      });
    }, El = async (e, n) => {
      const o = await ((w) => Promise.all(w.map(async (S) => fin.View.wrapSync(S).getInfo())))(n), { newPageUrl: s, newTabUrl: u } = await _a(e);
      o.forEach(async (w) => {
        w.url !== s && w.url !== u && await fin.System.openUrlWithBrowser(w.url);
      });
    }, Rl = (e, n) => {
      n.forEach(async (o) => {
        const s = fin.View.wrapSync(o);
        await (async (u, w) => {
          const { url: S } = await w.getInfo(), v = { ...await w.getOptions(), url: S, target: u, name: void 0 };
          await y().createView(v, u, w.identity);
        })(e, s);
      });
    }, us = async (e, n, o) => {
      const s = { newChannelId: n, selectedViews: o };
      (await lt(e)).dispatch(ut.AddToChannel, s);
    }, ds = async (e, n) => {
      (await lt(e)).dispatch(ut.RemoveFromChannel, n);
    }, Dl = async (e, n) => {
      if (!e) return;
      const o = n.identity, s = fin.Window.wrapSync(o);
      switch (_t({ type: "View Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e.type) {
        case pe.Back:
          await (async (u) => {
            const w = u.map((S) => fin.View.wrapSync(S).navigateBack());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case pe.Forward:
          await (async (u) => {
            const w = u.map((S) => fin.View.wrapSync(S).navigateForward());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case pe.Print:
          await Bo(n.selectedViews);
          break;
        case pe.PrintAll:
          await s.print({ content: "views", includeSelf: !1 });
          break;
        case pe.PrintScreen:
          await s.print({ content: "screenshot" });
          break;
        case pe.CloseViews:
          await Tl(o, n.selectedViews);
          break;
        case pe.OpenWithDefaultBrowser:
          await El(o, n.selectedViews);
          break;
        case pe.ReloadViews:
          n.selectedViews.forEach(async (u) => {
            await fin.View.wrapSync(u).reload();
          });
          break;
        case pe.NewView:
          await Al(o, n);
          break;
        case pe.DuplicateViews:
          Rl(o, n.selectedViews);
          break;
        case pe.AddToChannel:
          us(o, e.option, n.selectedViews);
          break;
        case pe.RemoveFromChannel:
          ds(o, n.selectedViews);
          break;
        case pe.Custom:
          if (e.action) {
            const u = { callerType: pt.ViewTabContextMenu, windowIdentity: o, selectedViews: n.selectedViews, customData: e.action.customData };
            y()._invokeCustomAction(e.action.id, u);
          }
      }
    }, Go = /* @__PURE__ */ new Map([["blue", { name: "Blue", color: "#0091EB" }], ["indigo", { name: "Indigo", color: "#6450FF" }], ["pink", { name: "Pink", color: "#E878CF" }], ["teal", { name: "Teal", color: "#24D1D1" }], ["green", { name: "Green", color: "#00AF78" }], ["orange", { name: "Orange", color: "#FF7D37" }], ["red", { name: "Red", color: "#F94144" }], ["yellow", { name: "Yellow", color: "#F9C74F" }], ["gray", { name: "Gray", color: "#828788" }]]);
    function ps() {
      return { type: Me.Label, label: G("contextMenu.manageDesktopSignals"), data: { type: ee.ManageDesktopSignals } };
    }
    function fs(e) {
      const n = Array.from(Go.entries()), o = e.contextGroup;
      return { type: "widget", config: { type: "add-to-channel", channels: [...n.map(([s, u]) => ({ label: u.name, data: { type: ee.AddToChannel, option: s }, color: u.color, checked: o === s })), { label: "unlink", data: { type: ee.AddToChannel, option: "unlink" }, isNone: !0 }] }, label: "Link to Channel" };
    }
    let hs = "Platform";
    const zo = async () => hs, _l = async (e, n) => {
      var S;
      if (!e) return;
      const o = n.identity, s = await lt(o), u = y().Browser.wrapSync(o), w = fin.Window.wrapSync(o);
      if (_t({ type: "Global Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0, data: { action: (S = e.action) == null ? void 0 : S.id } }), !(await ct(o) && await (async (_, N) => {
        const q = N.identity, j = y().Browser.wrapSync(q), X = (await j.getPages()).find((Ce) => Ce.isActive), ne = qa({ ...q, layoutName: X.layoutContainerKey }), me = N.selectedViews;
        switch (_ == null ? void 0 : _.type) {
          case Se.Lock:
            await j.updatePage({ pageId: X.pageId, page: { isLocked: !X.isLocked } });
            break;
          case Se.AddToChanel:
            _.option ? await us(q, _.option, me) : _.option === null && await ds(q, me);
            break;
          case Se.ManageDesktopSignals:
            await yt(q);
            break;
          case Z.NewWindow: {
            const Ce = await to(q);
            await y().Browser.createWindow({ workspacePlatform: { pages: [Ce], windowType: "enterprise" } });
            break;
          }
          case Se.Pin: {
            const { alwaysOnTop: Ce } = await j.openfinWindow.getOptions();
            await j.openfinWindow.updateOptions({ alwaysOnTop: !Ce });
            break;
          }
          case Se.ShowHideTabs:
            await ne.isShowingTabs() ? await ne.hide() : await ne.show();
            break;
          default:
            return !1;
        }
        return !0;
      })(e, n)))
        switch (e.type) {
          case Z.NewWindow: {
            const { newPageUrl: v } = await _a(o);
            if (!v) throw new Error("Trying to create a new empty window without a newPageUrl set");
            y().createView({ target: void 0, url: v });
            break;
          }
          case Z.NewPage:
            await Vi(o);
            break;
          case Z.CloseWindow:
            s.dispatch(ut.CloseBrowserWindow);
            break;
          case Z.SaveWorkspace:
            await Li(o);
            break;
          case Z.SavePage:
            await Oo(o);
            break;
          case Z.SavePageAs:
            await Wo(o);
            break;
          case Z.SaveWorkspaceAs:
            await _o(o);
            break;
          case Z.RenameWorkspace:
            u._openSaveModal({ menuType: Qe.RENAME_WORKSPACE });
            break;
          case Z.SwitchWorkspace:
            await (async (v, _) => {
              const N = y(), q = (await N.Storage.getWorkspaces()).find((j) => j.workspaceId === _.workspaceId);
              N.applyWorkspace(q, { skipPrompt: !1, promptContainerWindowIdentity: v });
            })(o, e);
            break;
          case Z.DeleteWorkspace:
            await ol(o, e);
            break;
          case Z.Downloads:
            await Ui(o);
            break;
          case Z.Appearance:
            await y().Theme.setSelectedScheme(e.scheme);
            break;
          case Z.Quit:
            {
              const v = zo();
              await Bi(o, await v) && fin.Platform.getCurrentSync().quit();
            }
            break;
          case Z.OpenStorefront:
            (async () => await Fa() && Na(Ba))();
            break;
          case Z.RestoreChanges:
            await Fi();
            break;
          case Z.Print:
            await Bo(n.selectedViews);
            break;
          case Z.PrintAll:
            await w.print({ content: "views", includeSelf: !1 });
            break;
          case Z.PrintScreen:
            await w.print({ content: "screenshot" });
            break;
          case Z.Custom:
            if (e.action) {
              const v = { callerType: pt.GlobalContextMenu, windowIdentity: o, customData: e.action.customData };
              y()._invokeCustomAction(e.action.id, v);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
    }, Ol = async (e, n, o) => {
      const s = y().Browser.wrapSync(n.identity), u = fin.Window.wrapSync(n.identity), w = await lt(n.identity), S = await ct();
      switch (e && _t({ type: "Page Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e == null ? void 0 : e.type) {
        case ee.Save:
          await Oo(n.identity, n.pageId);
          break;
        case ee.SaveAs:
          await Wo(n.identity, n.pageId);
          break;
        case ee.NewPage:
          await Vi(n.identity);
          break;
        case ee.DeletePage:
          await (async (v, _) => {
            const N = y(), q = N.Browser.wrapSync(v), j = (await N.Storage.getPages()).find((X) => X.pageId === _);
            j && await Zc(v, j.title) && (await N.Storage.deletePage(j.pageId), await q.removePage(_), eo({ message: G("enterpriseSuccessIndicator.supertabDeleted"), parentBrowserName: v.name, secondaryMessage: G("enterpriseSuccessIndicator.supertabHasBeenDeleted", { title: j.title }) }));
          })(n.identity, n.pageId);
          break;
        case ee.Rename:
          await ct(n.identity) ? (await s.setActivePage(n.pageId), await (await qi()).dispatch("open", { parentIdentity: n.identity, responseIdentity: et, type: nr.RenameSupertab, anchorBehavior: oo.Center, x: o.left + o.width / 2 - 164, y: o.bottom - 8, payload: { pageId: n.pageId } })) : await s._openSaveModal({ menuType: Qe.RENAME_PAGE, id: n.pageId });
          break;
        case ee.Duplicate:
          w.dispatch(ut.DuplicatePage, n.pageId);
          break;
        case ee.Close:
          S ? await (async (v, _) => {
            const N = y().Browser.wrapSync(v), q = await N.getPages();
            for (const j of q) if (j.pageId === _) {
              await N.removePage(j.pageId), await N._trackRemovedTab({ identity: v, page: j });
              break;
            }
          })(n.identity, n.pageId) : w.dispatch(ut.ClosePage, { pageId: n.pageId });
          break;
        case ee.Custom:
          if (e.action) {
            const v = { callerType: pt.PageTabContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
            y()._invokeCustomAction(e.action.id, v);
          } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
          break;
        case ee.Refresh:
          await (async (v, _) => {
            var X;
            const N = y(), q = N.Browser.wrapSync(v), j = (await q.getPages()).find((ne) => _ ? ne.pageId === _ : ne.isActive);
            (X = j == null ? void 0 : j.layout) != null && X.content && F(j.layout.content).forEach(async (ne) => {
              (await fin.View.wrap({ uuid: N.identity.uuid, name: ne.name })).reload();
            });
          })(n.identity, n.pageId);
          break;
        case ee.CloseOthers:
          await (async (v, _) => {
            const N = y().Browser.wrapSync(v), q = await N.getPages();
            for (const j of q) j.pageId !== _ && (await N.removePage(j.pageId), await N._trackRemovedTab({ identity: v, page: j }));
          })(n.identity, n.pageId);
          break;
        case ee.SaveWorkspaceAs:
          await _o(n.identity);
          break;
        case ee.Print: {
          const v = await s._getLayoutsWithSelectedViews(), { selectedViews: _ } = v.find((N) => N.pageId === n.pageId);
          await Bo(_);
          break;
        }
        case ee.PrintAll:
          await s.setActivePage(n.pageId), await u.print({ content: "views", includeSelf: !1 });
          break;
        case ee.PrintScreen:
          await s.setActivePage(n.pageId), await u.print({ content: "screenshot" });
          break;
        case ee.AddToChannel:
          await s.updatePage({ pageId: n.pageId, page: { contextGroup: e.option === "unlink" ? null : e.option } });
          break;
        case ee.ManageDesktopSignals:
          await yt(n.identity);
      }
    }, Wl = async (e, n) => {
      if (e != null && e.type) {
        const o = n.identity;
        switch (e.type) {
          case He.SavePage:
            await Oo(o);
            break;
          case He.SaveWorkspace:
            await Li(o);
            break;
          case He.SavePageAs:
            await Wo(o);
            break;
          case He.SaveWorkspaceAs:
            await _o(o);
            break;
          case He.Custom:
            if (e.action) {
              const s = { callerType: pt.SaveButtonContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
              y()._invokeCustomAction(e.action.id, s);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
      }
    };
    var oo;
    (function(e) {
      e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomLeft = 2] = "BottomLeft", e[e.BottomRight = 3] = "BottomRight", e[e.Center = 4] = "Center";
    })(oo || (oo = {}));
    const io = async (e, n, o, s) => {
      const { x: u, y: w, identity: S, template: v, callback: _ } = e, N = await ct(S), { data: q } = N ? await Cl({ x: u, y: w, template: v }, o, s, fin.Window.wrapSync(S)) : await function(j, X) {
        if (!Xe) throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
        if (!X && !fin.me.isWindow) throw new Error("showContextMenu can only be used in an OpenFin window.");
        return (X || fin.Window.getCurrentSync()).showPopupMenu(j);
      }({ x: u, y: w, template: v }, fin.Window.wrapSync(S));
      _(q, e);
    };
    async function Bl(e, n) {
      const o = Rt(), s = await ct(e.identity);
      s && ea(o);
      const u = s ? await (async ({ identity: j, selectedViews: X }) => {
        const ne = y(), me = ne.Browser.wrapSync(j), Ce = (await me.getPages()).find((dt) => dt.isActive), Ge = await ne.Storage.getPage(Ce.pageId), Te = J(Ce.layout.content) > 1, je = await ct(j), Oe = await ne.Theme.getThemes(), at = Oe[0] && "palettes" in Oe[0] || !Oe[0] || Oe.length === 0, Qt = { ...ns(je), enabled: !!Ge }, Ee = { ...as(je), enabled: Te };
        return [ts(), rs(!0, je), { type: Me.Separator }, Qt, Ee, { type: Me.Separator }, { type: Me.Label, label: G("contextMenu.manageDesktopSignals"), data: { type: Z.ManageDesktopSignals } }, { type: Me.Separator }, ...at ? [{ type: Me.Submenu, label: ss().label, submenu: await ls() }] : [], { type: Me.Separator }, jo(), { type: Me.Separator }, Ho(!0)];
      })({ identity: e.identity, selectedViews: e.selectedViews }) : await Il(e.identity, e.selectedViews), w = await zo();
      s || (u.find((j) => {
        var X;
        return ((X = j.data) == null ? void 0 : X.type) === Z.Quit;
      }).label = `Quit ${w}`);
      const { rect: S, ...v } = e, { x: _, y: N } = s ? { x: S.left + S.width, y: S.bottom } : e, q = { ...v, x: _, y: N, template: u, callback: _l };
      Xn(o), await this.openGlobalContextMenu(q, n);
    }
    async function Nl(e, n) {
      const o = { ...e, callback: Dl };
      await this.openViewTabContextMenu(o, n);
    }
    async function Fl(e, n) {
      const o = Rt(), s = await ct(e.identity);
      s && ea(o);
      const u = await (async (S, v, _) => {
        var Te, je;
        const N = await y().Storage.getPage(S), q = (await _r()).find((Oe) => Oe.pageId === S), j = J(q.layout.content) > 1, { workspacePlatform: X } = await Ft(v).getOptions(), ne = !(X.isLocked || X.preventPageClose || (Te = q.closeButton) != null && Te.disabled || (je = q.closeButton) != null && je.hidden), me = [{ type: Me.Label, label: G("enterpriseContextMenu.newTab"), data: { type: ee.NewPage } }, Ot, fs(q), ps(), Ot, { type: Me.Label, label: G("reload"), data: { type: ee.Refresh } }, { type: Me.Label, label: G("enterpriseContextMenu.duplicate"), data: { type: ee.Duplicate }, enabled: !X.isLocked }, await Ml(), Ot, { type: Me.Label, label: G(j ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ee.Close }, enabled: ne }], Ce = [{ type: Me.Label, label: G("enterpriseContextMenu.newTab"), data: { type: ee.NewPage } }, Ot, fs(q), ps(), Ot, { type: Me.Label, label: G("enterpriseSaveModal.renameSupertab"), data: { type: ee.Rename }, enabled: !X.isLocked && !!N && j }, { type: Me.Label, label: G("enterpriseContextMenu.duplicate"), data: { type: ee.Duplicate }, enabled: !X.isLocked }, Ot, { type: Me.Label, label: G("enterpriseContextMenu.saveSupertab"), data: { type: ee.Save }, enabled: j && !!N }, { type: Me.Label, label: G("enterpriseContextMenu.saveSupertabAs"), data: { type: ee.SaveAs }, enabled: j }, Ot, { type: Me.Label, label: G("enterpriseContextMenu.deleteSupertab"), data: { type: ee.DeletePage }, enabled: !!N }, Ot, { type: Me.Label, label: G(j ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ee.Close }, enabled: ne }], Ge = [{ type: Me.Label, label: G("contextMenu.savePage"), data: { type: ee.Save }, enabled: !!N }, { type: Me.Label, label: G("saveMenu.savePageAs"), data: { type: ee.SaveAs }, enabled: !0 }, { type: Me.Label, label: "Save Workspace As", data: { type: ee.SaveWorkspaceAs } }, { type: Me.Label, label: "Refresh", data: { type: ee.Refresh } }, Ot, { type: Me.Label, label: G("saveModal.renamePage"), data: { type: ee.Rename }, enabled: !!N }, { type: Me.Label, label: G("contextMenu.duplicatePage"), data: { type: ee.Duplicate }, enabled: !X.isLocked }, Ot, { type: Me.Label, label: G("saveModal.closePage"), data: { type: ee.Close }, enabled: ne }];
        return _ ? j ? Ce : me : Ge;
      })(e.pageId, e.identity, s), w = { ...e, template: u, callback: (S, v) => {
        Ol(S, v, e.rect);
      } };
      Xn(o), await this.openPageTabContextMenu(w, n);
    }
    async function Ll(e, n) {
      const o = await (async (u) => {
        const w = y(), S = await w.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), v = (await w.Storage.getWorkspacesMetadata()).find((N) => N.workspaceId === S.workspaceId), _ = await w.Storage.getPage(u);
        return [{ type: Me.Label, label: G("contextMenu.saveWorkspace"), enabled: !!v, data: { type: He.SaveWorkspace } }, { type: Me.Label, label: G("saveMenu.saveWorkspaceAs"), data: { type: He.SaveWorkspaceAs } }, { type: Me.Separator, data: void 0 }, { type: Me.Label, enabled: !!_, label: G("contextMenu.savePage"), data: { type: He.SavePage } }, { type: Me.Label, label: G("saveMenu.savePageAs"), data: { type: He.SavePageAs } }];
      })(e.pageId), s = { ...e, template: o, callback: Wl };
      await this.openSaveButtonContextMenu(s, n);
    }
    const so = "dock-companion-updates", co = async () => (await fin.Application.getCurrentSync().getChildWindows()).find((e) => e.identity.name === Fe.DockCompanion), Wa = Jt(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-dock`), Vl = async () => {
      const e = y(), n = await async function() {
        const w = await zi();
        await Promise.all(w.map(async (N) => {
          await Oa(N.identity);
        }));
        const S = Array.from(tr.values()).sort((N, q) => q.lastFocusedTime - N.lastFocusedTime), v = S.find((N) => N.isVisible);
        if (v)
          return await fin.Window.wrapSync(v.identity).focus(), v.identity;
        const _ = S[0];
        if (_) {
          const N = fin.Window.wrapSync(_.identity);
          return await N.restore(), await N.focus(), _.identity;
        }
        return pl();
      }(), o = e.Browser.wrapSync(n), s = (await o.getPages()).at(-1), u = F(s.layout.content);
      if (u.length === 1 && xa(u[0].url)) await o.setActivePage(s.pageId);
      else {
        const w = await to(n), { newPageUrl: S } = await _a();
        await o._addDefaultPage({ identity: o.identity, page: w, newPageUrl: S || void 0 });
      }
      (await lt(n)).dispatch(ut.FocusAndExpandSearchInternal);
    }, qo = "dock-provider-configs", ar = Ze && Xe && new qn.Dexie(nn("dock-provider-configs"));
    async function Ul(e) {
      if (!ar) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
      try {
        return await ar[qo].get(e);
      } catch (n) {
        return void console.warn("Failed to retrieve Dock provider config from IndexedDb", n);
      }
    }
    async function $l(e) {
      if (!ar) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
      await ar[qo].put(e, e.id);
    }
    ar && ar.version(0.1).stores({ [qo]: "" });
    const Br = "workspaces", Vn = Ze && Xe && mn("openfin-workspace-platform-workspaces", Br);
    async function Jo(e) {
      if (!Vn) throw new Error("Unable to get workspace - IndexDB not supported");
      const n = await Vn[Br].get(e);
      return n && (n.workspaceId = e.toString(), n.title = n.title || n.workspaceId), n;
    }
    async function gs(e) {
      if (!Vn) throw new Error("Unable to get workspaces - IndexDB not supported");
      const n = await Vn[Br].toCollection().keys(), o = (await Promise.all(n.map((s) => Jo(s.toString())))).filter((s) => !!s);
      return e ? o.filter((s) => $t(s.title, e)) : o;
    }
    async function ms({ workspace: e }) {
      if (!Vn) throw new Error("Unable to create workspace - IndexDB not supported");
      const n = (await gs()).find((o) => o.title === e.title);
      if (n && n.workspaceId !== e.workspaceId) throw new Error(`Workspace with title '${e.title}' already exists.`);
      await Vn[Br].put(e, e.workspaceId);
    }
    async function ws(e) {
      if (!Vn) throw new Error("Unable to delete workspace - IndexDB not supported");
      await Vn[Br].delete(e);
    }
    async function Kl({ workspaceId: e, workspace: n }) {
      if (!Vn) throw new Error("Unable to update workspace - IndexDB not supported");
      if (!await Jo(e)) throw new Error("workspace not found");
      await ms({ workspace: n }), e !== n.workspaceId && await ws(e);
    }
    const jl = (e) => {
      const n = e.layout, o = n.content ? F(n.content) : [], s = o.length;
      return s > 1 ? { ...e, singleViewName: null } : s === 1 ? { ...e, singleViewName: o[0].name } : void 0;
    }, Zo = async (e, n, o) => {
      var N, q, j;
      const s = await y().Browser.getAllAttachedPages(), u = new Set(s.map((X) => X.title).filter((X) => !!X)), w = new Set(s.map((X) => X.pageId).filter((X) => !!X)), S = n == null ? void 0 : n.defaultPageOptions, v = ((N = o == null ? void 0 : o.workspacePlatform) == null ? void 0 : N.windowType) === "enterprise" || ((j = (q = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : q.workspacePlatform) == null ? void 0 : j.windowType) === "enterprise", _ = await (async (X, ne, me) => {
        var Te, je, Oe;
        if (me) return _e();
        const Ce = (Te = ne == null ? void 0 : ne.workspacePlatform) == null ? void 0 : Te.newTabUrl;
        return Ce || ((Oe = (je = X == null ? void 0 : X.defaultWindowOptions) == null ? void 0 : je.workspacePlatform) == null ? void 0 : Oe.newTabUrl) || void 0;
      })(n, o, v);
      return Promise.all(e.map(async (X) => {
        var Te, je;
        if (X.multiInstanceViewBehavior === "reparent") return { ...X, layoutContainerKey: Et() };
        ((Oe, at) => {
          Oe.pageId || (Oe.pageId = Et()), at.has(Oe.pageId) && (console.warn("PageID collision detected. All Page IDs should be unique. A random new pageId will be generated"), Oe.pageId = Et()), at.add(Oe.pageId);
        })(X, w), v || (X.title = Mo(X.title, Array.from(u.keys()))), u.add(X.title), (Te = X.panels) == null || Te.reduce((Oe, at) => {
          const Qt = Object.values(H);
          if (!Qt.includes(at.position)) throw new Error(`Encountered a panel with unsupported position "${at.position}". Supported positions are: ${Qt.toString()}`);
          if (Oe[at.position] == 1) throw new Error(`Found more than 1 panel at position: ${at.position}. Only 1 panel at a given position is currently supported.`);
          return { ...Oe, [at.position]: Oe[at.position] + 1 };
        }, { [H.Left]: 0, [H.Right]: 0, [H.Top]: 0, [H.Bottom]: 0 });
        const ne = "panels" in X ? X.panels : S == null ? void 0 : S.panels;
        let me = (Ce = X.layout, Ge = n == null ? void 0 : n.defaultViewOptions, x({ ...Ce }, (Oe) => D(Oe, Ge)));
        var Ce, Ge;
        return _ && !((je = me == null ? void 0 : me.settings) != null && je.newTabButton) && (me = { ...me, settings: { ...me == null ? void 0 : me.settings, newTabButton: { url: _ } } }), { ...S, ...X, panels: ne && await vi(ne), layoutContainerKey: Et(), layout: me, isLayoutCreated: !1 };
      }));
    }, ys = async (e, n) => {
      try {
        await fin.Platform.getCurrentSync().createView({ name: e, url: n, target: fin.me.identity, bounds: { top: 0, left: 0, width: 0, height: 0 } }, fin.me.identity);
      } catch {
      }
    }, Hl = (e) => {
      var u, w, S, v;
      const n = e.name === Fe.Home, o = (u = e.name) == null ? void 0 : u.startsWith(Fe.HomeInternal), s = ((w = e.name) == null ? void 0 : w.startsWith(Fe.BrowserMenu)) || ((S = e.name) == null ? void 0 : S.startsWith(Fe.BrowserSaveMenu)) || ((v = e.name) == null ? void 0 : v.startsWith(Fe.DockSaveWorkspaceMenu));
      return !n && !o && !s;
    }, ca = (e) => JSON.parse(JSON.stringify(e));
    async function Gl(e) {
      return e ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : (await qe()).displayViewTabDefaultIcon ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : "data:image/svg+xml,%3Csvg%20style%3D%22background-color%3A%237D808A%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.64648%200.874962C4.84174%200.6797%205.15833%200.6797%205.35359%200.874962L9.12482%204.6462C9.32009%204.84146%209.32009%205.15804%209.12482%205.3533L5.35359%209.12454C5.15833%209.3198%204.84174%209.3198%204.64648%209.12454L0.875245%205.3533C0.679982%205.15804%200.679982%204.84146%200.875245%204.6462L4.64648%200.874962ZM5.00003%201.93562L1.9359%204.99975L5.00003%208.06388L8.06416%204.99975L5.00003%201.93562Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";
    }
    const zl = { dimensions: { borderWidth: 3, headerHeight: 30 } };
    async function ql(e, n, o) {
      var S, v, _, N, q, j, X, ne, me, Ce, Ge, Te;
      let s = e;
      const u = ((S = s.workspacePlatform) == null ? void 0 : S.windowType) === "enterprise" || ((_ = (v = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : v.workspacePlatform) == null ? void 0 : _.windowType) === "enterprise";
      if (s.layout && !((q = (N = s.workspacePlatform) == null ? void 0 : N.pages) != null && q.length)) {
        const je = await Di(), Oe = { ...await on(je, s.layout), isActive: !0 };
        s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.pages = await Zo([Oe], n, s);
      }
      n != null && n.browserIconSize && (s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.browserIconSize = n.browserIconSize);
      const w = (j = o == null ? void 0 : o.themes) == null ? void 0 : j[0];
      if ((ne = (X = s.workspacePlatform) == null ? void 0 : X.pages) != null && ne.length) {
        const je = await Zo(s.workspacePlatform.pages, n, s), Oe = je, at = ((Ee) => {
          if (!Ee) return;
          let dt = Ee.find((bt) => bt.isActive);
          return !dt && Ee.length > 0 && (Ee[0].isActive = !0, dt = Ee[0]), dt;
        })(Oe);
        if (Oe.forEach((Ee) => {
          Ee.pageId !== (at == null ? void 0 : at.pageId) && (Ee.isActive = !1);
        }), await ki(Oe), s.workspacePlatform.pages = je, s = Yn({}, await (async (Ee) => ({ contextMenuOptions: { enabled: !1 }, experimental: { showFavicons: !0, defaultFaviconUrl: await Gl(Ee) }, viewVisibility: { showViewsOnSplitterDrag: { enabled: !0 }, showViewsOnWindowResize: { enabled: !0 } } }))(u), n == null ? void 0 : n.defaultWindowOptions, s, await (async (Ee) => ({ backgroundThrottling: !0, url: await fe(Ee, !0), contextMenu: !0, closeOnLastViewRemoved: !1, permissions: { System: { openUrlWithBrowser: { enabled: !0, protocols: ["mailto"] } } } }))(u)), at.layout = Yn(at.layout, zl), async function(Ee) {
          if (Ee.icon || Ee.taskbarIcon) {
            const dt = fin.Application.getCurrentSync(), bt = await (await dt.getWindow()).getOptions();
            Ee.taskbarIconGroup || (Ee.taskbarIconGroup = bt.taskbarIconGroup || fin.me.identity.uuid);
          }
          if (Ee.workspacePlatform.icon) if (typeof Ee.workspacePlatform.icon == "object") {
            const dt = window.matchMedia("(prefers-color-scheme: dark)");
            Ee.icon = dt.matches ? Ee.workspacePlatform.icon.dark : Ee.workspacePlatform.icon.light;
          } else Ee.icon = Ee.workspacePlatform.icon;
        }(s), !s.backgroundColor && w) if ("palette" in w) s.backgroundColor = ((me = w == null ? void 0 : w.palette) == null ? void 0 : me.background2) || ((Ce = w == null ? void 0 : w.palette) == null ? void 0 : Ce.backgroundPrimary);
        else {
          const Ee = o.selectedScheme === ke.Dark || o.selectedScheme === ke.System && window.matchMedia("(prefers-color-scheme: dark)") ? w == null ? void 0 : w.palettes.dark : w == null ? void 0 : w.palettes.light;
          s.backgroundColor = (Ee == null ? void 0 : Ee.background2) || (Ee == null ? void 0 : Ee.backgroundPrimary);
        }
        s = St(s, !0);
        const Qt = await fe(u, !0);
        if (Qt && (s.url = Qt), s.layout = at.layout, s.layoutSnapshot = ((Ee, dt) => ({ layouts: Ee.reduce((bt, Xt) => (!Xt.isActive && (!dt || !jl(Xt).singleViewName) || (bt[Xt.layoutContainerKey] = Xt.layout), bt), {}), pages: Ee }))(s.workspacePlatform.pages, u), s.workspacePlatform.windowType = s.workspacePlatform.windowType ?? $e.Browser, u) {
          const Ee = await _e();
          s.workspacePlatform.newPageUrl = Ee, s.workspacePlatform.newTabUrl = Ee, s.layout && (s.layout.dimensions.borderWidth = 4, s.layout.dimensions.headerHeight = 28), s.name = s.name || `${Fe.BrowserWindow}-${Et()}`, (async (bt) => {
            const Xt = await Dt(), rr = Fe.BrowserAddressSearchPrefix + bt.name, or = Xt + $.BrowserPopupMenuAddressSearchResultsView, ei = [], gu = ys(rr, or);
            ei.push(gu);
            const mu = Fe.AICompanionPrefix + bt.name, { url: wu, enabled: yu } = Ra();
            if (yu) {
              const bu = ys(mu, wu);
              ei.push(bu);
            }
            await Promise.all(ei);
          })(s);
          const { enabled: dt } = Ra();
          s.workspacePlatform.isAiEnabled = dt, s.minWidth = Math.max(654, s.minWidth ?? 0), s.minHeight = Math.max(488, s.minHeight ?? 0);
        } else s.minWidth = Math.max(232, s.minWidth ?? 0), function(Ee) {
          var rr, or;
          const dt = (rr = Ee.workspacePlatform) == null ? void 0 : rr.viewTabDimensions, bt = (or = Ee.workspacePlatform) == null ? void 0 : or.pageTabDimensions, Xt = /^[0-9]+(px|%)$/;
          if (dt) {
            if (dt.minWidth && !Xt.test(dt.minWidth)) throw new Error(`Provided viewTabDimensions.min value "${dt.minWidth}" is not in a supported format.`);
            if (dt.maxWidth && !Xt.test(dt.maxWidth)) throw new Error(`Provided viewTabDimensions.max value "${dt.maxWidth}" is not in a supported format.`);
          }
          if (bt) {
            if (bt.minWidth && !Xt.test(bt.minWidth)) throw new Error(`Provided pageTabDimensions.min value "${bt.minWidth}" is not in a supported format.`);
            if (bt.maxWidth && !Xt.test(bt.maxWidth)) throw new Error(`Provided pageTabDimensions.max value "${bt.maxWidth}" is not in a supported format.`);
          }
        }(s);
      }
      return s.cornerRounding && delete s.cornerRounding, s.name || s.layoutSnapshot ? ((Te = (Ge = s.contextMenuOptions) == null ? void 0 : Ge.template) == null ? void 0 : Te.length) > 0 ? s.contextMenuOptions.template = s.contextMenuOptions.template.filter((je) => je !== "print") : s.contextMenuOptions = { template: [], enabled: !1 } : s.name = `${Fe.ClassicWindow}-${Et()}`, s.workspacePlatform && o && (s.workspacePlatform._themeData = o), s;
    }
    const bs = async (e, n) => {
      const o = { uuid: n.uuid, name: n.name };
      await Bi(o, e.title ?? await zo(), e.shouldCenterOnMonitor) && fin.Platform.getCurrentSync().quit();
    }, vs = async (e, n) => {
      const o = y(), s = await o.Browser.getLastFocusedWindow();
      if (!s) return;
      const u = o.Browser.wrapSync(s), { title: w, description: S } = e, v = await Yc({ title: w, description: S, identity: u.identity });
      v && u._sendUpdateVersionModalResponse({ identity: n, response: v });
    };
    async function ks(e, n, o) {
      const s = e.manifestUrl ? await n({ manifestUrl: e.manifestUrl }, o) : void 0;
      if (s != null && s.interop && e.interop) {
        const u = { ...e, ...s, interop: e.interop };
        return delete u.manifestUrl, u;
      }
      return e;
    }
    const Ss = (e) => {
      var o;
      const n = ca(e);
      return (o = n._internalWorkspaceData) != null && o.browserNavigationButtons && (n.workspacePlatform = { ...n.workspacePlatform, browserNavigationButtons: n._internalWorkspaceData.browserNavigationButtons }, delete n._internalWorkspaceData.browserNavigationButtons), n;
    }, Ps = (e) => {
      const n = ca(e);
      return n.workspacePlatform && (n._internalWorkspaceData = { ...n._internalWorkspaceData, ...n.workspacePlatform }, delete n.workspacePlatform), n;
    }, Jl = { reload: [{ keys: "Ctrl+R", preventDefault: !0 }], back: [{ keys: "Alt+Left", preventDefault: !0 }], forward: [{ keys: "Alt+Right", preventDefault: !0 }] }, Zl = { reload: [{ keys: "Cmd+R", preventDefault: !0 }], back: [{ keys: "Cmd+[", preventDefault: !0 }, { keys: "Cmd+Left", preventDefault: !0 }], forward: [{ keys: "Cmd+]", preventDefault: !0 }, { keys: "Cmd+Right", preventDefault: !0 }] }, Yl = async () => await Wr() ? Jl : Zl, Ql = (e, n) => {
      const o = fin.View.wrapSync(e);
      if (!n) return;
      const s = (u) => {
        (async (w, S, v) => {
          if (v.inputType !== "keyDown") return;
          const _ = await (async (q) => {
            var me;
            const j = await q.getCurrentWindow(), X = await j.getOptions(), ne = (me = X.workspacePlatform) == null ? void 0 : me.navigationButtons;
            return ne.enabled && !ne.hotkeysDisabled;
          })(w), N = await Wr();
          if (_) {
            if (S.reload) {
              const q = v.ctrlKey && !v.altKey && !v.metaKey && !v.shiftKey && v.key === "r", j = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "r";
              (N ? q : j) && (S != null && S.reload) && (w.reload(), _t({ type: "View", action: "Reload", value: w.identity.name }));
            }
            if (S.back) {
              const q = !v.ctrlKey && v.altKey && !v.metaKey && !v.shiftKey && v.key === "ArrowLeft", j = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "ArrowLeft", X = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "[";
              (N ? q : j || X) && (S != null && S.back) && (w.navigateBack(), _t({ type: "View", action: "Back", value: w.identity.name }));
            }
            if (S.forward) {
              const q = !v.ctrlKey && v.altKey && !v.metaKey && !v.shiftKey && v.key === "ArrowRight", j = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "ArrowRight", X = !v.ctrlKey && !v.altKey && v.metaKey && !v.shiftKey && v.key === "]";
              (N ? q : j || X) && (S != null && S.forward) && (w.navigateForward(), _t({ type: "View", action: "Forward", value: w.identity.name }));
            }
          }
        })(o, n, u);
      };
      o.addListener("hotkey", s), o.once("destroyed", () => {
        o.removeListener("hotkey", s);
      });
    }, Yo = (e, n) => ca(e).map((o) => ("componentState" in o ? o.componentState = n(o.componentState) : "content" in o && (o.content = Yo(o.content, n)), o)), xs = (e) => {
      if (e) {
        const n = ca(e);
        return n.content && (n.content = Yo(n.content, Ss)), n;
      }
      return e;
    }, Cs = (e) => {
      if (e) {
        const n = ca(e);
        return n.content && (n.content = Yo(n.content, Ps)), n;
      }
      return e;
    };
    async function Xl({ app: e, target: n }) {
      const o = fin.Platform.getCurrentSync();
      switch (e.manifestType) {
        case Y.Snapshot:
          return o.applySnapshot(e.manifest);
        case Y.View:
          return async function(s, u) {
            const w = fin.Platform.getCurrentSync();
            if (u.entityType === "view") {
              const S = fin.View.wrapSync(u);
              return await (await S.getParentLayout()).replaceView(u, { manifestUrl: s.manifest, url: void 0, target: void 0 }), S.destroy();
            }
            return w.createView({ name: void 0, url: void 0, manifestUrl: s.manifest, target: void 0 });
          }(e, n);
        case Y.External:
          return fin.System.launchExternalProcess({ path: e.manifest, uuid: e.appId });
        default:
          return fin.Application.startFromManifest(e.manifest);
      }
    }
    let Qo;
    const lo = () => (Qo || (Qo = Jt(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-app-directory`)()), Qo);
    async function eu(e) {
      return await ct(e.identity) ? (await lo()).dispatch(Yt.GetApps, e.req) : [];
    }
    async function tu(e) {
      return await ct(e.identity) ? (await lo()).dispatch(Yt.GetSearchProviders, e) : [];
    }
    async function nu(e) {
      return (await lo()).dispatch(Yt.GetCuratedContent, e);
    }
    async function au(e) {
      return (await lo()).dispatch(Yt.GetRecentlyVisited, e);
    }
    async function ru(e) {
      const n = (await $n()).map(async (o) => {
        var u;
        const s = await o.getOptions();
        (u = s.workspacePlatform) != null && u.pages && s.layout && await (async (w) => (await lt(w)).dispatch(ut.UpdatePagesWindowOptions))(o.identity);
      });
      return await Promise.all(n), e ? e() : Ga();
    }
    let Ms = [];
    const Is = () => Ms;
    async function ou(e) {
      const n = (s) => {
        if (!s.includes("#") && !s.includes("rgb") && !s.includes("hsl")) throw new Error("Background primary color is not the right format.");
      };
      e == null || e.forEach((s) => {
        "palette" in s && n(s.palette.backgroundPrimary), "palettes" in s && (n(s.palettes.dark.backgroundPrimary), n(s.palettes.light.backgroundPrimary));
      }), Ms = ((s, u) => {
        if (xt("ThemeStorage: initialiseStoragePalettes called", { customThemes: s, isWindows: u }), !s || !s[0]) {
          xt("ThemeStorage: Using default OpenFin theme");
          const { dark: w, light: S } = Ua[0].palettes;
          return sn.setPalettes({ dark: w, light: S }, u), xt("ThemeStorage: Default theme set successfully"), Ua;
        }
        {
          const w = s[0];
          if (xt("ThemeStorage: Using custom theme", w), "default" in w && w.default && (xt(`ThemeStorage: Setting theme default scheme to: ${w.default}`), sn.setThemeDefaultScheme(w.default)), "palette" in w) {
            xt("ThemeStorage: Processing single palette theme");
            const { palette: S } = w, v = { ...wa, ...S };
            return sn.setPalettes({ dark: v, light: v }, u), w.palette = v, xt("ThemeStorage: Single palette theme set successfully"), s;
          }
          if ("palettes" in w) {
            xt("ThemeStorage: Processing dual palettes theme");
            const { dark: S, light: v } = w.palettes, _ = { ...wa, ...S }, N = { ...Wn, ...v };
            return sn.setPalettes({ dark: _, light: N }, u), w.palettes = { dark: _, light: N }, xt("ThemeStorage: Dual palettes theme set successfully"), s;
          }
        }
      })(e, await Wr());
    }
    const iu = (e, n) => (o) => {
      const s = e !== null;
      return class extends o {
        constructor() {
          super(), this.isWorkspacePlatform = () => ({ isWorkspacePlatform: !0, isBrowserInitialized: !!e, analytics: { isSupported: !0 } }), this.detachPagesFromWindow = Ec, this.getAllAttachedPages = _r, this.getPagesForWindow = Ei, this.getPageForWindow = Dc, this.markUnsavedPagesAsSavedInternal = Vc, this.launchApp = Xl, this.savePage = Ti, this.saveWorkspace = tl, this.createSavedPageInternal = Ii, this.updateSavedPageInternal = Ai, this.deleteSavedPageInternal = Ic, this.reorderPagesForWindow = _c, this.getUniquePageTitle = Di, this.updatePageForWindow = Tc, this.getLastFocusedBrowserWindow = dl, this.getThemes = Is, this.invokeCustomActionInternal = gl, this.requestQuitPlatformDialogInternal = bs, this.getCurrentWorkspace = Xc, this.setActiveWorkspace = Ro, this.getLanguageResourcesInternal = ll, this.getPageByViewIdentity = async (u) => {
            const w = await fin.Platform.Layout.getLayoutByViewIdentity(u), S = w.identity;
            if (!("layoutName" in S)) throw new Error("Failed to get layout's identity");
            const v = await y().Browser.wrapSync(w.identity).getPages(), _ = v.findIndex((N) => N.layoutName === S.layoutName);
            if (_ === -1) throw new Error("Failed to get page's index");
            return { windowIdentity: { name: w.identity.name, uuid: w.identity.uuid }, page: v[_], pageIndex: _ };
          }, this.openGlobalContextMenuInternal = this.openGlobalContextMenuInternal.bind(this), this.openGlobalContextMenu = this.openGlobalContextMenu.bind(this), this.getSavedPages = this.getSavedPages.bind(this), this.getSavedPage = this.getSavedPage.bind(this), this.createSavedPage = this.createSavedPage.bind(this), this.updateSavedPage = this.updateSavedPage.bind(this), this.deleteSavedPage = this.deleteSavedPage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.attachPagesToWindow = this.attachPagesToWindow.bind(this), this.openViewTabContextMenuInternal = this.openViewTabContextMenuInternal.bind(this), this.openViewTabContextMenu = this.openViewTabContextMenu.bind(this), this.openPageTabContextMenuInternal = this.openPageTabContextMenuInternal.bind(this), this.openPageTabContextMenu = this.openPageTabContextMenu.bind(this), this.getSavedWorkspaces = this.getSavedWorkspaces.bind(this), this.getSavedWorkspacesMetadata = this.getSavedWorkspacesMetadata.bind(this), this.getSavedWorkspace = this.getSavedWorkspace.bind(this), this.createSavedWorkspace = this.createSavedWorkspace.bind(this), this.updateSavedWorkspace = this.updateSavedWorkspace.bind(this), this.deleteSavedWorkspace = this.deleteSavedWorkspace.bind(this), this.getCurrentWorkspace = this.getCurrentWorkspace.bind(this), this.getDockProviderConfig = this.getDockProviderConfig.bind(this), this.saveDockProviderConfig = this.saveDockProviderConfig.bind(this), this.applyWorkspace = this.applyWorkspace.bind(this), this.restoreLastSavedWorkspaceInternal = this.restoreLastSavedWorkspaceInternal.bind(this), this.setActiveWorkspace = this.setActiveWorkspace.bind(this), this.openSaveButtonContextMenu = this.openSaveButtonContextMenu.bind(this), this.openSaveButtonContextMenuInternal = this.openSaveButtonContextMenuInternal.bind(this), this.getSelectedScheme = this.getSelectedScheme.bind(this), this.setSelectedScheme = this.setSelectedScheme.bind(this), this.analyticsInternal = this.analyticsInternal.bind(this), this.handleAnalytics = this.handleAnalytics.bind(this), this.getLanguage = this.getLanguage.bind(this), this.setLanguage = this.setLanguage.bind(this), this.handleSaveModalOnPageClose = this.handleSaveModalOnPageClose.bind(this), this.shouldPageClose = this.shouldPageClose.bind(this), this.shouldWindowClose = this.shouldWindowClose.bind(this), this.handlePagesAndWindowClose = this.handlePagesAndWindowClose.bind(this), this.setActivePage = this.setActivePage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.copyPage = this.copyPage.bind(this), this.addPage = this.addPage.bind(this), this.addDefaultPage = this.addDefaultPage.bind(this), this.markUnsavedPagesAsSavedInternal = this.markUnsavedPagesAsSavedInternal.bind(this), this.trackRemovedTabInternal = this.trackRemovedTabInternal.bind(this), this.restoreRemovedTabInternal = this.restoreRemovedTabInternal.bind(this), this.trackVisitedSiteInternal = this.trackVisitedSiteInternal.bind(this), this.getRecentlyVisitedSitesInternal = this.getRecentlyVisitedSitesInternal.bind(this), this.getFrequentlyVisitedSitesInternal = this.getFrequentlyVisitedSitesInternal.bind(this), this.searchSitesInternal = this.searchSitesInternal.bind(this), this.getSearchProvidersInternal = this.getSearchProvidersInternal.bind(this), this.getCuratedContentInternal = this.getCuratedContentInternal.bind(this), this.handleRequestNavigationInternal = this.handleRequestNavigationInternal.bind(this), this.refreshBookmarksInternal = this.refreshBookmarksInternal.bind(this), this.launchBookmarkInternal = this.launchBookmarkInternal.bind(this), this.getNotificationsConfig = this.getNotificationsConfig.bind(this), this.updateDockFavoritesInternal = this.updateDockFavoritesInternal.bind(this), this.updateContentMenuInternal = this.updateContentMenuInternal.bind(this), this.launchDockEntryInternal = this.launchDockEntryInternal.bind(this), this.setDockFavoritesOrderInternal = this.setDockFavoritesOrderInternal.bind(this), this.navigateContentMenuInternal = this.navigateContentMenuInternal.bind(this), this.setDefaultDockButtonsOrderInternal = this.setDefaultDockButtonsOrderInternal.bind(this), this.getDockWorkspacesContextMenuInternal = this.getDockWorkspacesContextMenuInternal.bind(this), this.handleDockWorkspacesMenuResponseInternal = this.handleDockWorkspacesMenuResponseInternal.bind(this), this.removeDockFavoriteInternal = this.removeDockFavoriteInternal.bind(this), this.addDockFavoriteInternal = this.addDockFavoriteInternal.bind(this), this.focusAndExpandSearchInternal = this.focusAndExpandSearchInternal.bind(this), this.sendUpdateVersionModalResponseInternal = this.sendUpdateVersionModalResponseInternal.bind(this), this.requestQuitPlatformDialogInternal = bs.bind(this), this.showUpdateVersionModalInternal = vs.bind(this);
        }
        async applyWorkspace(...u) {
          return Qc.apply(this, u);
        }
        async restoreLastSavedWorkspaceInternal(...u) {
          return Fi.apply(this, u);
        }
        async getSnapshot() {
          const u = s ? await ru(async () => Ga(await super.getSnapshot(void 0, fin.me.identity))) : await Ga(await super.getSnapshot(void 0, fin.me.identity));
          let w = { ...u, windows: u.windows.filter(Hl).map(Ha) };
          return w = ((S) => {
            const v = ca(S);
            return v.windows.forEach((_) => {
              var N, q;
              _.layout && (_.layout = xs(_.layout)), (q = (N = _.workspacePlatform) == null ? void 0 : N.pages) == null || q.forEach((j) => {
                j != null && j.layout && (j.layout = xs(j.layout));
              });
            }), v;
          })(w), w;
        }
        async getViewSnapshot(u) {
          let w = await super.getViewSnapshot(u);
          return w = Ss(w), w;
        }
        async applySnapshot({ snapshot: u, options: w }) {
          let S = u;
          typeof S == "string" && (S = await super.fetchManifest({ manifestUrl: S }, fin.me.identity));
          const v = function(_) {
            var N, q;
            for (const j of _.windows) if ((q = (N = j.workspacePlatform) == null ? void 0 : N.pages) != null && q.length) return !0;
            return !1;
          }(S);
          if (!s && v) throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");
          return S = ((_) => {
            const N = ca(_);
            return N.windows.forEach((q) => {
              var j, X;
              q.layout = Cs(q.layout), (X = (j = q.workspacePlatform) == null ? void 0 : j.pages) == null || X.forEach((ne) => {
                ne.layout = Cs(ne.layout);
              });
            }), N;
          })(S), super.applySnapshot({ snapshot: S, options: w });
        }
        async createWindow(u, w) {
          var N, q, j, X;
          if (s && u.reason === "tearout") {
            const ne = await fin.Window.wrapSync(w).getOptions(), me = (N = ne.workspacePlatform) == null ? void 0 : N.windowType;
            u.taskbarIconGroup = ne.taskbarIconGroup, me && (u.workspacePlatform || (u.workspacePlatform = {}), u.workspacePlatform.windowType = ne.workspacePlatform.windowType, me === $e.Platform && (u.url = ne.url));
          }
          if (!s || ((q = u.workspacePlatform) == null ? void 0 : q.windowType) === $e.Platform) {
            const ne = await super.createWindow(u, w);
            return _t({ type: "Window", action: "Open Window", value: ne.identity.name, data: { uuid: ne.identity.uuid } }), ne;
          }
          var S;
          S = { allowed: !0 }, Hr || (Hr = !0, Ca(Mn.Browser, S)), ((ne = []) => {
            const me = ne.filter((Te) => Te.type !== rt.Custom), Ce = /* @__PURE__ */ new Set(), Ge = [];
            for (const Te of me) Ce.has(Te.type) && Ge.push(Te.type), Ce.add(Te.type);
            if (Ge.length > 0) {
              const Te = Ge.join(", ");
              throw new Error(`Encountered a duplicate "${Te}" toolbar button. No more than one instance of a button type may be provided.`);
            }
          })((X = (j = u.workspacePlatform) == null ? void 0 : j.toolbarOptions) == null ? void 0 : X.buttons);
          let v = ((ne) => "workspacePlatform" in ne ? ne : (({ workstacks: me, pages: Ce, ...Ge }) => ({ ...Ge, workspacePlatform: { pages: Ce || me || null } }))(ne))(u);
          v = await ql(v, e, { themes: Is(), selectedScheme: this.getSelectedScheme() }), v = await (async (ne) => {
            const me = await fin.System.getMonitorInfo();
            let Ce = me.primaryMonitor;
            const Ge = ne.defaultLeft, Te = ne.defaultTop;
            me.nonPrimaryMonitors.forEach((at) => {
              const { top: Qt, bottom: Ee, left: dt, right: bt } = at.availableRect;
              Ge >= dt && Ge <= bt && Te >= Qt && Te <= Ee && (Ce = at);
            });
            const je = Ce.availableRect.bottom - Ce.availableRect.top, Oe = Ce.availableRect.right - Ce.availableRect.left;
            return ne.defaultHeight = Math.min(ne.defaultHeight || 800, je), ne.defaultWidth = Math.min(ne.defaultWidth || 800, Oe), ne;
          })(v);
          const _ = await (/* @__PURE__ */ ((ne) => async (me, Ce) => {
            var je, Oe;
            let Ge = !1;
            const Te = await ne(me, Ce);
            return (Oe = (je = me == null ? void 0 : me.workspacePlatform) == null ? void 0 : je._internalDeferShowOptions) != null && Oe.deferShowEnabled && await Te.addListener("show-requested", async () => {
              if (Ge) return;
              const at = await Te.getOptions();
              await Te.updateOptions({ workspacePlatform: { ...at.workspacePlatform, _internalDeferShowOptions: { ...at.workspacePlatform._internalDeferShowOptions, autoShow: !0 } } }), Ge = !0;
            }), Te;
          })((ne, me) => super.createWindow(ne, me)))(v, w);
          return _t({ type: "Window", action: "Open Window", value: _.identity.name, data: { uuid: _.identity.uuid } }), _;
        }
        async createView(u, w) {
          var v;
          u.opts = B(u.opts, e == null ? void 0 : e.defaultViewOptions), u.opts = await ks(u.opts, this.fetchManifest, w), u.opts = await (async (_) => {
            var j;
            const N = ca(_), q = (j = N.workspacePlatform) == null ? void 0 : j.browserNavigationButtons;
            if (q) {
              const X = Object.keys(q);
              for (const ne of X) if (q[ne]) {
                const me = (await Yl())[ne];
                N.hotkeys ? N.hotkeys.push(...me) : N.hotkeys = [...me];
              }
            }
            return N;
          })(u.opts), u.opts = Ps(u.opts);
          const S = await super.createView(u, w);
          return Ql(S.identity, (v = u.opts._internalWorkspaceData) == null ? void 0 : v.browserNavigationButtons), S;
        }
        async replaceView(u, w) {
          return u.opts.newView = await B(u.opts.newView, e == null ? void 0 : e.defaultViewOptions), u.opts.newView = await ks(u.opts.newView, this.fetchManifest, w), super.replaceView(u, w);
        }
        async replaceLayout(u, w) {
          var S;
          return await ct(w) || ((S = u.opts.layout) == null || delete S.dimensions), super.replaceLayout(u, w);
        }
        async getSavedPage(...u) {
          return $o.apply(this, u);
        }
        async getSavedPages(...u) {
          return yl.apply(this, u);
        }
        async createSavedPage(...u) {
          return Qi.apply(this, u);
        }
        async deleteSavedPage(...u) {
          return Xi.apply(this, u);
        }
        async updateSavedPage(...u) {
          return bl.apply(this, u);
        }
        async getSavedWorkspace(...u) {
          return Jo.apply(this, u);
        }
        async getSavedWorkspaces(...u) {
          return gs.apply(this, u);
        }
        async getSavedWorkspacesMetadata(...u) {
          return (await this.getSavedWorkspaces(...u)).map((w) => ({ workspaceId: w.workspaceId, title: w.title }));
        }
        async createSavedWorkspace(...u) {
          return ms.apply(this, u);
        }
        async deleteSavedWorkspace(...u) {
          return ws.apply(this, u);
        }
        async updateSavedWorkspace(...u) {
          return Kl.apply(this, u);
        }
        async getDockProviderConfig(...u) {
          return Ul.apply(this, u);
        }
        async saveDockProviderConfig(...u) {
          return $l.apply(this, u);
        }
        async attachPagesToWindow(u) {
          const w = await Zo(u.pages, e);
          await ki(w), await Ac({ ...u, pages: w });
        }
        async addPage(u) {
          const w = await ct(u.identity), S = await Be(u.identity), { page: v, insertionIndex: _ } = u;
          v != null && v.title || w || (v.title = await S.dispatch(ie.GetUniquePageTitle, void 0));
          const N = (await this.getAllAttachedPages()).find((j) => j.pageId === v.pageId || j.title === v.title);
          if (N) {
            if (N.pageId === v.pageId) throw new Error(`page with id ${v.pageId} is already attached to a browser window ${N.parentIdentity.name}`);
            if (!w) throw new Error(`addPage title collision, page with title ${v.title} already exists, conflicting page id: ${N.pageId} with title ${N.title}`);
          }
          const q = { identity: u.identity, pages: [{ ...v, multiInstanceViewBehavior: u.multiInstanceViewBehavior || "duplicate" }], insertionIndex: _ };
          await this.attachPagesToWindow(q);
        }
        async addDefaultPage(u) {
          await this.addPage(u), await this.setActivePage({ identity: u.identity, pageId: u.page.pageId });
        }
        async setActivePage(...u) {
          return Rc.apply(this, u);
        }
        async openGlobalContextMenuInternal(...u) {
          return Bl.apply(this, u);
        }
        async openGlobalContextMenu(...u) {
          return io.apply(this, [...u, nr.GlobalMenu, oo.BottomRight]);
        }
        async openViewTabContextMenuInternal(...u) {
          return Nl.apply(this, u);
        }
        async openViewTabContextMenu(...u) {
          return io.apply(this, [...u, nr.ContextMenu]);
        }
        async openPageTabContextMenuInternal(...u) {
          return Fl.apply(this, u);
        }
        async openPageTabContextMenu(...u) {
          return io.apply(this, [...u, nr.ContextMenu]);
        }
        async openSaveButtonContextMenu(...u) {
          return io.apply(this, u);
        }
        async openSaveButtonContextMenuInternal(...u) {
          return Ll.apply(this, u);
        }
        getSelectedScheme(...u) {
          return g.apply(this, u);
        }
        async setSelectedScheme(...u) {
          return f.apply(this, u);
        }
        async handlePageChanges(...u) {
          return Lc.apply(this, u);
        }
        async analyticsInternal(...u) {
          return Kc.apply(this, u);
        }
        async handleAnalytics(...u) {
        }
        async handleSaveModalOnPageClose(...u) {
          return Oc.apply(this, u);
        }
        async shouldPageClose(...u) {
          return Wc.apply(this, u);
        }
        async shouldWindowClose(...u) {
          return Bc.apply(this, u);
        }
        handlePagesAndWindowClose(...u) {
          return Nc.apply(this, u);
        }
        async copyPage(...u) {
          return Fc.apply(this, u);
        }
        async getNotificationsConfig() {
          return n;
        }
        async setLanguage(...u) {
          return cl.apply(this, u);
        }
        async getLanguage() {
          return ji.apply(this);
        }
        async trackRemovedTabInternal(...u) {
          return vl.apply(this, u);
        }
        async restoreRemovedTabInternal() {
          const u = await (async () => {
            const w = Yi();
            if (!w) throw new Error("Unable to pop last removed tab - IndexDB not supported");
            const S = w[Vo], v = await S.toCollection().keys();
            if (v.length > 0) {
              const _ = Math.max(...v.map((q) => Number(q))).toString(), N = await S.get(_);
              if (N) {
                await S.delete(_);
                const { id: q, ...j } = N;
                return j;
              }
            }
          })();
          if ("page" in u) if (await pn(u.identity)) {
            const w = y().Browser.wrapSync(u.identity);
            await w.addPage(u.page), await w.setActivePage(u.page.pageId);
          } else y().createWindow({ name: u.identity.name, workspacePlatform: { pages: [u.page], windowType: $e.Browser } });
          else (function(w) {
            return "window" in w;
          })(u) && y().createWindow({ workspacePlatform: { pages: u.window.pages, windowType: $e.Browser } });
        }
        async trackVisitedSiteInternal(...u) {
          return Sl.apply(this, u);
        }
        async getRecentlyVisitedSitesInternal(...u) {
          return await au.apply(this, u);
        }
        async getFrequentlyVisitedSitesInternal(...u) {
          return Pl.apply(this, u);
        }
        async searchSitesInternal(...u) {
          return await eu.apply(this, u);
        }
        async getSearchProvidersInternal(...u) {
          return await tu.apply(this, u);
        }
        async getCuratedContentInternal(...u) {
          return await nu.apply(this, u);
        }
        async handleRequestNavigationInternal(...u) {
        }
        async launchBookmarkInternal(u) {
          return xl(u);
        }
        async refreshBookmarksInternal() {
          (await y().Browser.getAllWindows()).forEach(async ({ identity: u }) => {
            (await lt(u)).dispatch(ut.RefreshBookmarksInternal);
          }), (await Cr(wl())).dispatch(ut.RefreshBookmarksInternal), await (async () => {
            const u = await co();
            u && await (await lt(u.identity, so)).dispatch(ut.RefreshBookmarksInternal);
          })();
        }
        async updateDockFavoritesInternal(u) {
          return (async (w) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await lt(S.identity, so)).dispatch(An.UpdateFavoriteEntries, w);
          })(u);
        }
        async updateContentMenuInternal(u) {
          return (async (w) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await lt(S.identity, so)).dispatch(An.UpdateContentMenu, w);
          })(u);
        }
        async launchDockEntryInternal(u) {
          return (async (w) => (await Wa()).dispatch("launch-entry", w))(u);
        }
        async setDefaultDockButtonsOrderInternal(u) {
          return (async (w) => (await Wa()).dispatch("set-default-dock-buttons-order", w))(u);
        }
        async setDockFavoritesOrderInternal(u) {
          return (async (w) => (await Wa()).dispatch("set-dock-favorites-order", w))(u);
        }
        async addDockFavoriteInternal(u) {
          return (async (w) => (await Wa()).dispatch("add-favorite-entry", w))(u);
        }
        async removeDockFavoriteInternal(u) {
          return (async (w) => (await Wa()).dispatch("remove-favorite-entry", w))(u);
        }
        async navigateContentMenuInternal(u) {
          return (async (w) => {
            const S = await co();
            if (!S) throw new Error("Companion Dock window not found");
            await (await lt(S.identity, so)).dispatch(An.NavigateContentMenu, w);
          })(u);
        }
        async getDockWorkspacesContextMenuInternal() {
          return (async () => (await Wa()).dispatch("get-dock-workspaces-context-menu", void 0))();
        }
        async handleDockWorkspacesMenuResponseInternal(u) {
          return (async (w) => (await Wa()).dispatch("handle-dock-workspaces-menu-response", w))(u);
        }
        async focusAndExpandSearchInternal() {
          return Vl();
        }
        async sendUpdateVersionModalResponseInternal(u) {
          return bn(u);
        }
        async showUpdateVersionModalInternal(u, w) {
          return vs(u, w);
        }
      };
    };
    function su(e, n, o) {
      const s = iu(e, o);
      try {
        return typeof n == "function" ? (u) => n(s(u)) : Array.isArray(n) ? [...n, s] : (u) => new (s(u))();
      } catch (u) {
        throw new Error("WorkspacePlatform.init Error:", u);
      }
    }
    const cu = ["green", "purple", "orange", "red", "pink", "yellow"], As = "CONTEXT_GROUP_PAGE", lu = () => (e) => class extends e {
      getContextGroups() {
        return super.getContextGroups().map((n) => {
          var o, s;
          return cu.includes((o = n.displayMetadata) == null ? void 0 : o.name) ? { ...n, displayMetadata: { ...n.displayMetadata, name: G((s = n.displayMetadata) == null ? void 0 : s.name) } } : n;
        });
      }
    }, uu = () => {
      const e = new Set(Go.keys());
      return (n) => class extends n {
        constructor() {
          super(), this.onClientConnected = async (s) => {
            if (s.name.startsWith("internal-generated-view")) {
              const { page: u } = await y().Browser.getPageByViewIdentity(s), w = u.contextGroup;
              this.joinContextGroup({ contextGroupId: w ?? As, target: s }, { uuid: this.fin.me.uuid, name: this.fin.me.name });
            }
          };
          const o = this.interopClients.set;
          this.interopClients.set = (s, u) => {
            o.call(this.interopClients, s, u), this.onClientConnected(u.clientIdentity);
          };
        }
        async joinContextGroup({ contextGroupId: o, target: s }, u) {
          if (o !== As) return super.joinContextGroup({ contextGroupId: o, target: s }, u);
          try {
            const w = (await y().Browser.getPageByViewIdentity(s)).page.layoutName;
            if (!w) throw new Error("View does not belong to a page");
            if (!e.has(w) && (e.add(w), !this.contextGroupsById.has(w))) {
              const S = /* @__PURE__ */ new Map();
              this.contextGroupsById.set(w, S);
            }
            await super.joinContextGroup({ contextGroupId: w, target: s }, u), s.name;
          } catch (w) {
            JSON.stringify(s), w.stack;
          }
        }
        getContextGroups() {
          return Array.from(e).map((o) => ({ id: o, displayMetadata: Go.get(o) ?? {} }));
        }
        setContextForGroup(o, s) {
          if (!this.contextGroupsById.has(s)) {
            const u = /* @__PURE__ */ new Map();
            this.contextGroupsById.set(s, u);
          }
          return super.setContextForGroup(o, s);
        }
      };
    }, du = (e, n) => {
      const o = ((s) => Sr(s) ? uu() : lu())(n);
      try {
        return typeof e == "function" ? (s) => e(o(s)) : Array.isArray(e) ? [...e, o] : (s) => new (o(s))();
      } catch (s) {
        throw new Error("WorkspacePlatform.init Error:", s);
      }
    };
    async function pu() {
      (async () => (await Sn()).on("window-closed", hl))(), async function() {
        const e = fin.Application.getCurrentSync(), n = await zi();
        await Promise.all(n.map(async (s) => {
          await Oa(s.identity, void 0, !0);
        }));
        const o = await fin.System.getFocusedWindow();
        o && o.name.startsWith(Fe.BrowserWindow) && await Oa(o, void 0, !0), await e.addListener("window-focused", async (s) => {
          await Oa(s, void 0, !0);
        }), await e.addListener("window-minimized", async (s) => {
          await Oa(s, !1);
        }), await e.addListener("window-restored", async (s) => {
          await Oa(s, !0);
        }), await e.addListener("window-closed", fl);
      }(), Ro(await Do());
    }
    let Xo;
    function fu({ overrideCallback: e, interopOverride: n, browser: o, notifications: s, analytics: u, integrations: w = [], workspaceAsar: S }) {
      if (!Xe) throw new Error("Cannot be used outside an OpenFin env.");
      return Xo || (Xo = (async () => {
        const v = fin.Platform.getCurrentSync();
        var _, N;
        if (v.once("platform-api-ready", () => pu()), v.on("window-show-all-downloads", ({ name: X, uuid: ne }) => {
          Ui({ name: X, uuid: ne });
        }), o != null && o.title && (_ = o.title, hs = _), jc(u), S) {
          const X = `workspace-${encodeURIComponent(fin.me.uuid)}`, { baseUrl: ne } = await fin.System.serveAsset({ ...S, hostName: X });
          vt(ne);
        }
        o != null && o.browserBaseUrl && vt(o.browserBaseUrl), Sr(o) && (mt = !0, N = o, Ht = N == null ? void 0 : N.aiPanelOptions, Ra());
        const q = cn();
        var j;
        return q.setWorkspaceStorage(Jn(`${Re}-workspace`)), q.trySynchronizeWorkspaceStorage(), await fin.Platform.init({ overrideCallback: su(o, e || (o == null ? void 0 : o.overrideCallback), s), interopOverride: du(n || (o == null ? void 0 : o.interopOverride), o) }), j = { allowed: !0 }, Ca(Mn.Platform, j), await Promise.all(w.map(async (X) => {
          ((ne, me) => {
            Ca(`${Mn.Microflow}:${ne}`, me, "integration-feature");
          })(X.workflowIntegrationName, { allowed: !0, apiVersion: ln }), await X._initializeWorkflows();
        })), v;
      })()), Xo;
    }
    const hu = async ({ theme: e, customActions: n, language: o, ...s }) => {
      const u = ln.split(".").map((v) => parseInt(v));
      if (!await (async (v) => {
        if ((await qe()).disableRuntimeValidation || await ct()) return !0;
        const _ = (await fin.System.getVersion()).split(".").map((N) => parseInt(N));
        return v.every((N, q) => !(q < 3) || _[q] === v[q]);
      })(u)) throw new Error(`Runtime version is not supported.  ${u[0]}.${u[1]}.${u[2]}.* is required`);
      var S;
      return ou(e), e && (S = { allowed: !0 }, Ca(Mn.Theming, S)), n && (Fo = n), await ul(o == null ? void 0 : o.initialLanguage), await fu(s);
    };
  })(), tc.exports = p;
})();
var bp = tc.exports;
const kp = /* @__PURE__ */ pi(bp);
export {
  kp as default
};
