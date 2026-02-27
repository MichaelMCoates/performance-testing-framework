var nl = Object.defineProperty;
var al = (f, o, u) => o in f ? nl(f, o, { enumerable: !0, configurable: !0, writable: !0, value: u }) : f[o] = u;
var Ss = (f, o, u) => al(f, typeof o != "symbol" ? o + "" : o, u);
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ci(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
function js(f) {
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
  ((u, d) => {
    f.exports = d();
  })(sr, function() {
    var u = function(t, a) {
      return (u = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(i, l) {
        i.__proto__ = l;
      } : function(i, l) {
        for (var p in l) Object.prototype.hasOwnProperty.call(l, p) && (i[p] = l[p]);
      }))(t, a);
    }, d = function() {
      return (d = Object.assign || function(t) {
        for (var a, i = 1, l = arguments.length; i < l; i++) for (var p in a = arguments[i]) Object.prototype.hasOwnProperty.call(a, p) && (t[p] = a[p]);
        return t;
      }).apply(this, arguments);
    };
    function y(t, a, i) {
      for (var l, p = 0, h = a.length; p < h; p++) !l && p in a || ((l = l || Array.prototype.slice.call(a, 0, p))[p] = a[p]);
      return t.concat(l || Array.prototype.slice.call(a));
    }
    var m = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : sr, P = Object.keys, x = Array.isArray;
    function R(t, a) {
      return typeof a == "object" && P(a).forEach(function(i) {
        t[i] = a[i];
      }), t;
    }
    typeof Promise > "u" || m.Promise || (m.Promise = Promise);
    var j = Object.getPrototypeOf, J = {}.hasOwnProperty;
    function te(t, a) {
      return J.call(t, a);
    }
    function $(t, a) {
      typeof a == "function" && (a = a(j(t))), (typeof Reflect > "u" ? P : Reflect.ownKeys)(a).forEach(function(i) {
        we(t, i, a[i]);
      });
    }
    var B = Object.defineProperty;
    function we(t, a, i, l) {
      B(t, a, R(i && te(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, l));
    }
    function ge(t) {
      return { from: function(a) {
        return t.prototype = Object.create(a.prototype), we(t.prototype, "constructor", t), { extend: $.bind(null, t.prototype) };
      } };
    }
    var q = Object.getOwnPropertyDescriptor, Ce = [].slice;
    function Z(t, a, i) {
      return Ce.call(t, a, i);
    }
    function Ie(t, a) {
      return a(t);
    }
    function ne(t) {
      if (!t) throw new Error("Assertion Failed");
    }
    function Se(t) {
      m.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }
    function ce(t, a) {
      if (typeof a == "string" && te(t, a)) return t[a];
      if (!a) return t;
      if (typeof a != "string") {
        for (var i = [], l = 0, p = a.length; l < p; ++l) {
          var h = ce(t, a[l]);
          i.push(h);
        }
        return i;
      }
      var v, b = a.indexOf(".");
      return b === -1 || (v = t[a.substr(0, b)]) == null ? void 0 : ce(v, a.substr(b + 1));
    }
    function se(t, a, i) {
      if (t && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof a != "string" && "length" in a) {
        ne(typeof i != "string" && "length" in i);
        for (var l = 0, p = a.length; l < p; ++l) se(t, a[l], i[l]);
      } else {
        var h, v, b = a.indexOf(".");
        b !== -1 ? (h = a.substr(0, b), (b = a.substr(b + 1)) === "" ? i === void 0 ? x(t) && !isNaN(parseInt(h)) ? t.splice(h, 1) : delete t[h] : t[h] = i : se(v = (v = t[h]) && te(t, h) ? v : t[h] = {}, b, i)) : i === void 0 ? x(t) && !isNaN(parseInt(a)) ? t.splice(a, 1) : delete t[a] : t[a] = i;
      }
    }
    function gt(t) {
      var a, i = {};
      for (a in t) te(t, a) && (i[a] = t[a]);
      return i;
    }
    var He = [].concat;
    function tt(t) {
      return He.apply([], t);
    }
    var re = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(tt([8, 16, 32, 64].map(function(t) {
      return ["Int", "Uint", "Float"].map(function(a) {
        return a + t + "Array";
      });
    }))).filter(function(t) {
      return m[t];
    }), mt = new Set(re.map(function(t) {
      return m[t];
    })), Qe = null;
    function ut(t) {
      return Qe = /* @__PURE__ */ new WeakMap(), t = function a(i) {
        if (!i || typeof i != "object") return i;
        var l = Qe.get(i);
        if (l) return l;
        if (x(i)) {
          l = [], Qe.set(i, l);
          for (var p = 0, h = i.length; p < h; ++p) l.push(a(i[p]));
        } else if (mt.has(i.constructor)) l = i;
        else {
          var v, b = j(i);
          for (v in l = b === Object.prototype ? {} : Object.create(b), Qe.set(i, l), i) te(i, v) && (l[v] = a(i[v]));
        }
        return l;
      }(t), Qe = null, t;
    }
    var yt = {}.toString;
    function Oe(t) {
      return yt.call(t).slice(8, -1);
    }
    var at = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Lt = typeof at == "symbol" ? function(t) {
      var a;
      return t != null && (a = t[at]) && a.apply(t);
    } : function() {
      return null;
    };
    function ot(t, a) {
      a = t.indexOf(a), 0 <= a && t.splice(a, 1);
    }
    var Rt = {};
    function Ve(t) {
      var a, i, l, p;
      if (arguments.length === 1) {
        if (x(t)) return t.slice();
        if (this === Rt && typeof t == "string") return [t];
        if (p = Lt(t)) for (i = []; !(l = p.next()).done; ) i.push(l.value);
        else {
          if (t == null) return [t];
          if (typeof (a = t.length) != "number") return [t];
          for (i = new Array(a); a--; ) i[a] = t[a];
        }
      } else for (a = arguments.length, i = new Array(a); a--; ) i[a] = arguments[a];
      return i;
    }
    var O = typeof Symbol < "u" ? function(t) {
      return t[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, re = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], je = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(re), We = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function De(t, a) {
      this.name = t, this.message = a;
    }
    function Je(t, a) {
      return t + ". Errors: " + Object.keys(a).map(function(i) {
        return a[i].toString();
      }).filter(function(i, l, p) {
        return p.indexOf(i) === l;
      }).join(`
`);
    }
    function rt(t, a, i, l) {
      this.failures = a, this.failedKeys = l, this.successCount = i, this.message = Je(t, a);
    }
    function Ge(t, a) {
      this.name = "BulkError", this.failures = Object.keys(a).map(function(i) {
        return a[i];
      }), this.failuresByPos = a, this.message = Je(t, this.failures);
    }
    ge(De).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), ge(rt).from(De), ge(Ge).from(De);
    var Bt = je.reduce(function(t, a) {
      return t[a] = a + "Error", t;
    }, {}), lt = De, ke = je.reduce(function(t, a) {
      var i = a + "Error";
      function l(p, h) {
        this.name = i, p ? typeof p == "string" ? (this.message = "".concat(p).concat(h ? `
 ` + h : ""), this.inner = h || null) : typeof p == "object" && (this.message = "".concat(p.name, " ").concat(p.message), this.inner = p) : (this.message = We[a] || i, this.inner = null);
      }
      return ge(l).from(lt), t[a] = l, t;
    }, {}), qt = (ke.Syntax = SyntaxError, ke.Type = TypeError, ke.Range = RangeError, re.reduce(function(t, a) {
      return t[a + "Error"] = ke[a], t;
    }, {}));
    re = je.reduce(function(t, a) {
      return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (t[a + "Error"] = ke[a]), t;
    }, {});
    function M() {
    }
    function z(t) {
      return t;
    }
    function G(t, a) {
      return t == null || t === z ? a : function(i) {
        return a(t(i));
      };
    }
    function ae(t, a) {
      return function() {
        t.apply(this, arguments), a.apply(this, arguments);
      };
    }
    function Fe(t, a) {
      return t === M ? a : function() {
        var i = t.apply(this, arguments), l = (i !== void 0 && (arguments[0] = i), this.onsuccess), p = this.onerror, h = (this.onsuccess = null, this.onerror = null, a.apply(this, arguments));
        return l && (this.onsuccess = this.onsuccess ? ae(l, this.onsuccess) : l), p && (this.onerror = this.onerror ? ae(p, this.onerror) : p), h !== void 0 ? h : i;
      };
    }
    function Be(t, a) {
      return t === M ? a : function() {
        t.apply(this, arguments);
        var i = this.onsuccess, l = this.onerror;
        this.onsuccess = this.onerror = null, a.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? ae(i, this.onsuccess) : i), l && (this.onerror = this.onerror ? ae(l, this.onerror) : l);
      };
    }
    function ze(t, a) {
      return t === M ? a : function(p) {
        var l = t.apply(this, arguments), p = (R(p, l), this.onsuccess), h = this.onerror, v = (this.onsuccess = null, this.onerror = null, a.apply(this, arguments));
        return p && (this.onsuccess = this.onsuccess ? ae(p, this.onsuccess) : p), h && (this.onerror = this.onerror ? ae(h, this.onerror) : h), l === void 0 ? v === void 0 ? void 0 : v : R(l, v);
      };
    }
    function bt(t, a) {
      return t === M ? a : function() {
        return a.apply(this, arguments) !== !1 && t.apply(this, arguments);
      };
    }
    function Ae(t, a) {
      return t === M ? a : function() {
        var i = t.apply(this, arguments);
        if (i && typeof i.then == "function") {
          for (var l = this, p = arguments.length, h = new Array(p); p--; ) h[p] = arguments[p];
          return i.then(function() {
            return a.apply(l, h);
          });
        }
        return a.apply(this, arguments);
      };
    }
    re.ModifyError = rt, re.DexieError = De, re.BulkError = Ge;
    var St = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function gn(t) {
      St = t;
    }
    var on = {}, sn = 100, Gt = typeof Promise > "u" ? [] : (je = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [Gt = crypto.subtle.digest("SHA-512", new Uint8Array([0])), j(Gt), je] : [je, j(je), je]), je = Gt[0], Bn = Gt[1], Bn = Bn && Bn.then, be = je && je.constructor, dt = !!Gt[2], Zt = function(t, a) {
      Ut.push([t, a]), Vt && (queueMicrotask(en), Vt = !1);
    }, nn = !0, Vt = !0, $t = [], zt = [], xt = z, Ct = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: M, pgp: !1, env: {}, finalize: M }, Te = Ct, Ut = [], g = 0, C = [];
    function V(t) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var a = this._PSD = Te;
      if (typeof t != "function") {
        if (t !== on) throw new TypeError("Not a function");
        this._state = arguments[1], this._value = arguments[2], this._state === !1 && Re(this, this._value);
      } else this._state = null, this._value = null, ++a.ref, function i(l, p) {
        try {
          p(function(h) {
            if (l._state === null) {
              if (h === l) throw new TypeError("A promise cannot be resolved with itself.");
              var v = l._lib && an();
              h && typeof h.then == "function" ? i(l, function(b, T) {
                h instanceof V ? h._then(b, T) : h.then(b, T);
              }) : (l._state = !0, l._value = h, $e(l)), v && dn();
            }
          }, Re.bind(null, l));
        } catch (h) {
          Re(l, h);
        }
      }(this, t);
    }
    var ve = { get: function() {
      var t = Te, a = ga;
      function i(l, p) {
        var h = this, v = !t.global && (t !== Te || a !== ga), b = v && !Sn(), T = new V(function(L, A) {
          ft(h, new Me(Vr(l, t, v, b), Vr(p, t, v, b), L, A, t));
        });
        return this._consoleTask && (T._consoleTask = this._consoleTask), T;
      }
      return i.prototype = on, i;
    }, set: function(t) {
      we(this, "then", t && t.prototype === on ? ve : { get: function() {
        return t;
      }, set: ve.set });
    } };
    function Me(t, a, i, l, p) {
      this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = i, this.reject = l, this.psd = p;
    }
    function Re(t, a) {
      var i, l;
      zt.push(a), t._state === null && (i = t._lib && an(), a = xt(a), t._state = !1, t._value = a, l = t, $t.some(function(p) {
        return p._value === l._value;
      }) || $t.push(l), $e(t), i) && dn();
    }
    function $e(t) {
      var a = t._listeners;
      t._listeners = [];
      for (var i = 0, l = a.length; i < l; ++i) ft(t, a[i]);
      var p = t._PSD;
      --p.ref || p.finalize(), g === 0 && (++g, Zt(function() {
        --g == 0 && Gn();
      }, []));
    }
    function ft(t, a) {
      if (t._state === null) t._listeners.push(a);
      else {
        var i = t._state ? a.onFulfilled : a.onRejected;
        if (i === null) return (t._state ? a.resolve : a.reject)(t._value);
        ++a.psd.ref, ++g, Zt(qe, [i, t, a]);
      }
    }
    function qe(t, a, i) {
      try {
        var l, p = a._value;
        !a._state && zt.length && (zt = []), l = St && a._consoleTask ? a._consoleTask.run(function() {
          return t(p);
        }) : t(p), a._state || zt.indexOf(p) !== -1 || ((h) => {
          for (var v = $t.length; v; ) if ($t[--v]._value === h._value) return $t.splice(v, 1);
        })(a), i.resolve(l);
      } catch (h) {
        i.reject(h);
      } finally {
        --g == 0 && Gn(), --i.psd.ref || i.psd.finalize();
      }
    }
    function en() {
      _n(Ct, function() {
        an() && dn();
      });
    }
    function an() {
      var t = nn;
      return Vt = nn = !1, t;
    }
    function dn() {
      var t, a, i;
      do
        for (; 0 < Ut.length; ) for (t = Ut, Ut = [], i = t.length, a = 0; a < i; ++a) {
          var l = t[a];
          l[0].apply(null, l[1]);
        }
      while (0 < Ut.length);
      Vt = nn = !0;
    }
    function Gn() {
      for (var t = $t, a = ($t = [], t.forEach(function(l) {
        l._PSD.onunhandled.call(null, l._value, l);
      }), C.slice(0)), i = a.length; i; ) a[--i]();
    }
    function pa(t) {
      return new V(on, !1, t);
    }
    function Mt(t, a) {
      var i = Te;
      return function() {
        var l = an(), p = Te;
        try {
          return Pn(i, !0), t.apply(this, arguments);
        } catch (h) {
          a && a(h);
        } finally {
          Pn(p, !1), l && dn();
        }
      };
    }
    $(V.prototype, { then: ve, _then: function(t, a) {
      ft(this, new Me(null, null, t, a, Te));
    }, catch: function(t) {
      var a, i;
      return arguments.length === 1 ? this.then(null, t) : (a = t, i = arguments[1], typeof a == "function" ? this.then(null, function(l) {
        return (l instanceof a ? i : pa)(l);
      }) : this.then(null, function(l) {
        return (l && l.name === a ? i : pa)(l);
      }));
    }, finally: function(t) {
      return this.then(function(a) {
        return V.resolve(t()).then(function() {
          return a;
        });
      }, function(a) {
        return V.resolve(t()).then(function() {
          return pa(a);
        });
      });
    }, timeout: function(t, a) {
      var i = this;
      return t < 1 / 0 ? new V(function(l, p) {
        var h = setTimeout(function() {
          return p(new ke.Timeout(a));
        }, t);
        i.then(l, p).finally(clearTimeout.bind(null, h));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && we(V.prototype, Symbol.toStringTag, "Dexie.Promise"), Ct.env = pr(), $(V, { all: function() {
      var t = Ve.apply(null, arguments).map(ma);
      return new V(function(a, i) {
        t.length === 0 && a([]);
        var l = t.length;
        t.forEach(function(p, h) {
          return V.resolve(p).then(function(v) {
            t[h] = v, --l || a(t);
          }, i);
        });
      });
    }, resolve: function(t) {
      return t instanceof V ? t : t && typeof t.then == "function" ? new V(function(a, i) {
        t.then(a, i);
      }) : new V(on, !0, t);
    }, reject: pa, race: function() {
      var t = Ve.apply(null, arguments).map(ma);
      return new V(function(a, i) {
        t.map(function(l) {
          return V.resolve(l).then(a, i);
        });
      });
    }, PSD: { get: function() {
      return Te;
    }, set: function(t) {
      return Te = t;
    } }, totalEchoes: { get: function() {
      return ga;
    } }, newPSD: Tn, usePSD: _n, scheduler: { get: function() {
      return Zt;
    }, set: function(t) {
      Zt = t;
    } }, rejectionMapper: { get: function() {
      return xt;
    }, set: function(t) {
      xt = t;
    } }, follow: function(t, a) {
      return new V(function(i, l) {
        return Tn(function(p, h) {
          var v = Te;
          v.unhandleds = [], v.onunhandled = h, v.finalize = ae(function() {
            var b, T = this;
            b = function() {
              T.unhandleds.length === 0 ? p() : h(T.unhandleds[0]);
            }, C.push(function L() {
              b(), C.splice(C.indexOf(L), 1);
            }), ++g, Zt(function() {
              --g == 0 && Gn();
            }, []);
          }, v.finalize), t();
        }, a, i, l);
      });
    } }), be && (be.allSettled && we(V, "allSettled", function() {
      var t = Ve.apply(null, arguments).map(ma);
      return new V(function(a) {
        t.length === 0 && a([]);
        var i = t.length, l = new Array(i);
        t.forEach(function(p, h) {
          return V.resolve(p).then(function(v) {
            return l[h] = { status: "fulfilled", value: v };
          }, function(v) {
            return l[h] = { status: "rejected", reason: v };
          }).then(function() {
            return --i || a(l);
          });
        });
      });
    }), be.any && typeof AggregateError < "u" && we(V, "any", function() {
      var t = Ve.apply(null, arguments).map(ma);
      return new V(function(a, i) {
        t.length === 0 && i(new AggregateError([]));
        var l = t.length, p = new Array(l);
        t.forEach(function(h, v) {
          return V.resolve(h).then(function(b) {
            return a(b);
          }, function(b) {
            p[v] = b, --l || i(new AggregateError(p));
          });
        });
      });
    }), be.withResolvers) && (V.withResolvers = be.withResolvers);
    var Kt = { awaits: 0, echoes: 0, id: 0 }, fa = 0, ha = [], zn = 0, ga = 0, qn = 0;
    function Tn(t, v, i, l) {
      var p = Te, h = Object.create(p), v = (h.parent = p, h.ref = 0, h.global = !1, h.id = ++qn, Ct.env, h.env = dt ? { Promise: V, PromiseProp: { value: V, configurable: !0, writable: !0 }, all: V.all, race: V.race, allSettled: V.allSettled, any: V.any, resolve: V.resolve, reject: V.reject } : {}, v && R(h, v), ++p.ref, h.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, _n(h, t, i, l));
      return h.ref === 0 && h.finalize(), v;
    }
    function ie() {
      return Kt.id || (Kt.id = ++fa), ++Kt.awaits, Kt.echoes += sn, Kt.id;
    }
    function Sn() {
      return !!Kt.awaits && (--Kt.awaits == 0 && (Kt.id = 0), Kt.echoes = Kt.awaits * sn, !0);
    }
    function ma(t) {
      return Kt.echoes && t && t.constructor === be ? (ie(), t.then(function(a) {
        return Sn(), a;
      }, function(a) {
        return Sn(), jt(a);
      })) : t;
    }
    function dr() {
      var t = ha[ha.length - 1];
      ha.pop(), Pn(t, !1);
    }
    function Pn(t, a) {
      var i, l, p = Te;
      (a ? !Kt.echoes || zn++ && t === Te : !zn || --zn && t === Te) || queueMicrotask(a ? (function(h) {
        ++ga, Kt.echoes && --Kt.echoes != 0 || (Kt.echoes = Kt.awaits = Kt.id = 0), ha.push(Te), Pn(h, !0);
      }).bind(null, t) : dr), t !== Te && (Te = t, p === Ct && (Ct.env = pr()), dt) && (i = Ct.env.Promise, l = t.env, p.global || t.global) && (Object.defineProperty(m, "Promise", l.PromiseProp), i.all = l.all, i.race = l.race, i.resolve = l.resolve, i.reject = l.reject, l.allSettled && (i.allSettled = l.allSettled), l.any) && (i.any = l.any);
    }
    function pr() {
      var t = m.Promise;
      return dt ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(m, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
    }
    function _n(t, a, i, l, p) {
      var h = Te;
      try {
        return Pn(t, !0), a(i, l, p);
      } finally {
        Pn(h, !1);
      }
    }
    function Vr(t, a, i, l) {
      return typeof t != "function" ? t : function() {
        var p = Te;
        i && ie(), Pn(a, !0);
        try {
          return t.apply(this, arguments);
        } finally {
          Pn(p, !1), l && queueMicrotask(Sn);
        }
      };
    }
    function fr(t) {
      Promise === be && Kt.echoes === 0 ? zn === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
    }
    ("" + Bn).indexOf("[native code]") === -1 && (ie = Sn = M);
    var jt = V.reject, Fn = "￿", xn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ur = "String expected.", cn = [], wa = "__dbnames", Fa = "readonly", hr = "readwrite";
    function Ln(t, a) {
      return t ? a ? function() {
        return t.apply(this, arguments) && a.apply(this, arguments);
      } : t : a;
    }
    var pe = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Jn(t) {
      return typeof t != "string" || /\./.test(t) ? function(a) {
        return a;
      } : function(a) {
        return a[t] === void 0 && t in a && delete (a = ut(a))[t], a;
      };
    }
    function La() {
      throw ke.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
    }
    function me(t, a) {
      try {
        var i = Xe(t), l = Xe(a);
        if (i !== l) return i === "Array" ? 1 : l === "Array" ? -1 : i === "binary" ? 1 : l === "binary" ? -1 : i === "string" ? 1 : l === "string" ? -1 : i === "Date" ? 1 : l !== "Date" ? NaN : -1;
        switch (i) {
          case "number":
          case "Date":
          case "string":
            return a < t ? 1 : t < a ? -1 : 0;
          case "binary":
            for (var p = Kr(t), h = Kr(a), v = p.length, b = h.length, T = v < b ? v : b, L = 0; L < T; ++L) if (p[L] !== h[L]) return p[L] < h[L] ? -1 : 1;
            return v === b ? 0 : v < b ? -1 : 1;
          case "Array":
            for (var A = t, I = a, W = A.length, D = I.length, _ = W < D ? W : D, E = 0; E < _; ++E) {
              var K = me(A[E], I[E]);
              if (K !== 0) return K;
            }
            return W === D ? 0 : W < D ? -1 : 1;
        }
      } catch {
      }
      return NaN;
    }
    function Xe(t) {
      var a = typeof t;
      return a == "object" && (ArrayBuffer.isView(t) || (a = Oe(t)) === "ArrayBuffer") ? "binary" : a;
    }
    function Kr(t) {
      return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
    }
    function ya(t, a, i) {
      var l = t.schema.yProps;
      return l ? (a && 0 < i.numFailures && (a = a.filter(function(p, h) {
        return !i.failures[h];
      })), Promise.all(l.map(function(p) {
        return p = p.updatesTable, a ? t.db.table(p).where("k").anyOf(a).delete() : t.db.table(p).clear();
      })).then(function() {
        return i;
      })) : i;
    }
    ba.prototype.execute = function(t) {
      var a = this["@@propmod"];
      if (a.add !== void 0) {
        var i = a.add;
        if (x(i)) return y(y([], x(t) ? t : [], !0), i).sort();
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
        if (x(l)) return x(t) ? t.filter(function(p) {
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
      return i = (i = a.replacePrefix) == null ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? a.replacePrefix[1] + t.substring(i.length) : t;
    };
    var Vn = ba;
    function ba(t) {
      this["@@propmod"] = t;
    }
    function Va(t, a) {
      for (var i = P(a), l = i.length, p = !1, h = 0; h < l; ++h) {
        var v = i[h], b = a[v], T = ce(t, v);
        b instanceof Vn ? (se(t, v, b.execute(T)), p = !0) : T !== b && (se(t, v, b), p = !0);
      }
      return p;
    }
    vt.prototype._trans = function(t, a, i) {
      var l = this._tx || Te.trans, p = this.name, h = St && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
      function v(L, A, I) {
        if (I.schema[p]) return a(I.idbtrans, I);
        throw new ke.NotFound("Table " + p + " not part of transaction");
      }
      var b = an();
      try {
        var T = l && l.db._novip === this.db._novip ? l === Te.trans ? l._promise(t, v, i) : Tn(function() {
          return l._promise(t, v, i);
        }, { trans: l, transless: Te.transless || Te }) : function L(A, I, W, D) {
          if (A.idbdb && (A._state.openComplete || Te.letThrough || A._vip)) {
            var _ = A._createTransaction(I, W, A._dbSchema);
            try {
              _.create(), A._state.PR1398_maxLoop = 3;
            } catch (E) {
              return E.name === Bt.InvalidState && A.isOpen() && 0 < --A._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), A.close({ disableAutoOpen: !1 }), A.open().then(function() {
                return L(A, I, W, D);
              })) : jt(E);
            }
            return _._promise(I, function(E, K) {
              return Tn(function() {
                return Te.trans = _, D(E, K, _);
              });
            }).then(function(E) {
              if (I === "readwrite") try {
                _.idbtrans.commit();
              } catch {
              }
              return I === "readonly" ? E : _._completion.then(function() {
                return E;
              });
            });
          }
          if (A._state.openComplete) return jt(new ke.DatabaseClosed(A._state.dbOpenError));
          if (!A._state.isBeingOpened) {
            if (!A._state.autoOpen) return jt(new ke.DatabaseClosed());
            A.open().catch(M);
          }
          return A._state.dbReadyPromise.then(function() {
            return L(A, I, W, D);
          });
        }(this.db, t, [this.name], v);
        return h && (T._consoleTask = h, T = T.catch(function(L) {
          return console.trace(L), jt(L);
        })), T;
      } finally {
        b && dn();
      }
    }, vt.prototype.get = function(t, a) {
      var i = this;
      return t && t.constructor === Object ? this.where(t).first(a) : t == null ? jt(new ke.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(l) {
        return i.core.get({ trans: l, key: t }).then(function(p) {
          return i.hook.reading.fire(p);
        });
      }).then(a);
    }, vt.prototype.where = function(t) {
      if (typeof t == "string") return new this.db.WhereClause(this, t);
      if (x(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
      var a = P(t);
      if (a.length === 1) return this.where(a[0]).equals(t[a[0]]);
      var i = this.schema.indexes.concat(this.schema.primKey).filter(function(b) {
        if (b.compound && a.every(function(L) {
          return 0 <= b.keyPath.indexOf(L);
        })) {
          for (var T = 0; T < a.length; ++T) if (a.indexOf(b.keyPath[T]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(b, T) {
        return b.keyPath.length - T.keyPath.length;
      })[0];
      if (i && this.db._maxKey !== Fn) return v = i.keyPath.slice(0, a.length), this.where(v).equals(v.map(function(b) {
        return t[b];
      }));
      !i && St && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
      var l = this.schema.idxByName;
      function p(b, T) {
        return me(b, T) === 0;
      }
      var v = a.reduce(function(A, T) {
        var L = A[0], A = A[1], I = l[T], W = t[T];
        return [L || I, L || !I ? Ln(A, I && I.multi ? function(D) {
          return D = ce(D, T), x(D) && D.some(function(_) {
            return p(W, _);
          });
        } : function(D) {
          return p(W, ce(D, T));
        }) : A];
      }, [null, null]), h = v[0], v = v[1];
      return h ? this.where(h.name).equals(t[h.keyPath]).filter(v) : i ? this.filter(v) : this.where(a).equals("");
    }, vt.prototype.filter = function(t) {
      return this.toCollection().and(t);
    }, vt.prototype.count = function(t) {
      return this.toCollection().count(t);
    }, vt.prototype.offset = function(t) {
      return this.toCollection().offset(t);
    }, vt.prototype.limit = function(t) {
      return this.toCollection().limit(t);
    }, vt.prototype.each = function(t) {
      return this.toCollection().each(t);
    }, vt.prototype.toArray = function(t) {
      return this.toCollection().toArray(t);
    }, vt.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, vt.prototype.orderBy = function(t) {
      return new this.db.Collection(new this.db.WhereClause(this, x(t) ? "[".concat(t.join("+"), "]") : t));
    }, vt.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, vt.prototype.mapToClass = function(t) {
      for (var a = this.db, i = this.name, l = ((this.schema.mappedClass = t).prototype instanceof La && (t = ((v) => {
        var b = A, T = v;
        if (typeof T != "function" && T !== null) throw new TypeError("Class extends value " + String(T) + " is not a constructor or null");
        function L() {
          this.constructor = b;
        }
        function A() {
          return v !== null && v.apply(this, arguments) || this;
        }
        return u(b, T), b.prototype = T === null ? Object.create(T) : (L.prototype = T.prototype, new L()), Object.defineProperty(A.prototype, "db", { get: function() {
          return a;
        }, enumerable: !1, configurable: !0 }), A.prototype.table = function() {
          return i;
        }, A;
      })(t)), /* @__PURE__ */ new Set()), p = t.prototype; p; p = j(p)) Object.getOwnPropertyNames(p).forEach(function(v) {
        return l.add(v);
      });
      function h(v) {
        if (!v) return v;
        var b, T = Object.create(t.prototype);
        for (b in v) if (!l.has(b)) try {
          T[b] = v[b];
        } catch {
        }
        return T;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = h, this.hook("reading", h), t;
    }, vt.prototype.defineClass = function() {
      return this.mapToClass(function(t) {
        R(this, t);
      });
    }, vt.prototype.add = function(t, a) {
      var i = this, l = this.schema.primKey, p = l.auto, h = l.keyPath, v = t;
      return h && p && (v = Jn(h)(t)), this._trans("readwrite", function(b) {
        return i.core.mutate({ trans: b, type: "add", keys: a != null ? [a] : null, values: [v] });
      }).then(function(b) {
        return b.numFailures ? V.reject(b.failures[0]) : b.lastResult;
      }).then(function(b) {
        if (h) try {
          se(t, h, b);
        } catch {
        }
        return b;
      });
    }, vt.prototype.upsert = function(t, a) {
      var i = this, l = this.schema.primKey.keyPath;
      return this._trans("readwrite", function(p) {
        return i.core.get({ trans: p, key: t }).then(function(h) {
          var v = h ?? {};
          return Va(v, a), l && se(v, l, t), i.core.mutate({ trans: p, type: "put", values: [v], keys: [t], upsert: !0, updates: { keys: [t], changeSpecs: [a] } }).then(function(b) {
            return b.numFailures ? V.reject(b.failures[0]) : !!h;
          });
        });
      });
    }, vt.prototype.update = function(t, a) {
      return typeof t != "object" || x(t) ? this.where(":id").equals(t).modify(a) : (t = ce(t, this.schema.primKey.keyPath)) === void 0 ? jt(new ke.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(a);
    }, vt.prototype.put = function(t, a) {
      var i = this, l = this.schema.primKey, p = l.auto, h = l.keyPath, v = t;
      return h && p && (v = Jn(h)(t)), this._trans("readwrite", function(b) {
        return i.core.mutate({ trans: b, type: "put", values: [v], keys: a != null ? [a] : null });
      }).then(function(b) {
        return b.numFailures ? V.reject(b.failures[0]) : b.lastResult;
      }).then(function(b) {
        if (h) try {
          se(t, h, b);
        } catch {
        }
        return b;
      });
    }, vt.prototype.delete = function(t) {
      var a = this;
      return this._trans("readwrite", function(i) {
        return a.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(l) {
          return ya(a, [t], l);
        }).then(function(l) {
          return l.numFailures ? V.reject(l.failures[0]) : void 0;
        });
      });
    }, vt.prototype.clear = function() {
      var t = this;
      return this._trans("readwrite", function(a) {
        return t.core.mutate({ trans: a, type: "deleteRange", range: pe }).then(function(i) {
          return ya(t, null, i);
        });
      }).then(function(a) {
        return a.numFailures ? V.reject(a.failures[0]) : void 0;
      });
    }, vt.prototype.bulkGet = function(t) {
      var a = this;
      return this._trans("readonly", function(i) {
        return a.core.getMany({ keys: t, trans: i }).then(function(l) {
          return l.map(function(p) {
            return a.hook.reading.fire(p);
          });
        });
      });
    }, vt.prototype.bulkAdd = function(t, a, i) {
      var l = this, p = Array.isArray(a) ? a : void 0, h = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(v) {
        var b = l.schema.primKey, L = b.auto, b = b.keyPath;
        if (b && p) throw new ke.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new ke.InvalidArgument("Arguments objects and keys must have the same length");
        var T = t.length, L = b && L ? t.map(Jn(b)) : t;
        return l.core.mutate({ trans: v, type: "add", keys: p, values: L, wantResults: h }).then(function(A) {
          var I = A.numFailures, W = A.failures;
          if (I === 0) return h ? A.results : A.lastResult;
          throw new Ge("".concat(l.name, ".bulkAdd(): ").concat(I, " of ").concat(T, " operations failed"), W);
        });
      });
    }, vt.prototype.bulkPut = function(t, a, i) {
      var l = this, p = Array.isArray(a) ? a : void 0, h = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(v) {
        var b = l.schema.primKey, L = b.auto, b = b.keyPath;
        if (b && p) throw new ke.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new ke.InvalidArgument("Arguments objects and keys must have the same length");
        var T = t.length, L = b && L ? t.map(Jn(b)) : t;
        return l.core.mutate({ trans: v, type: "put", keys: p, values: L, wantResults: h }).then(function(A) {
          var I = A.numFailures, W = A.failures;
          if (I === 0) return h ? A.results : A.lastResult;
          throw new Ge("".concat(l.name, ".bulkPut(): ").concat(I, " of ").concat(T, " operations failed"), W);
        });
      });
    }, vt.prototype.bulkUpdate = function(t) {
      var a = this, i = this.core, l = t.map(function(v) {
        return v.key;
      }), p = t.map(function(v) {
        return v.changes;
      }), h = [];
      return this._trans("readwrite", function(v) {
        return i.getMany({ trans: v, keys: l, cache: "clone" }).then(function(b) {
          var T = [], L = [], A = (t.forEach(function(I, W) {
            var D = I.key, _ = I.changes, E = b[W];
            if (E) {
              for (var K = 0, H = Object.keys(_); K < H.length; K++) {
                var F = H[K], ee = _[F];
                if (F === a.schema.primKey.keyPath) {
                  if (me(ee, D) !== 0) throw new ke.Constraint("Cannot update primary key in bulkUpdate()");
                } else se(E, F, ee);
              }
              h.push(W), T.push(D), L.push(E);
            }
          }), T.length);
          return i.mutate({ trans: v, type: "put", keys: T, values: L, updates: { keys: l, changeSpecs: p } }).then(function(I) {
            var W = I.numFailures, D = I.failures;
            if (W === 0) return A;
            for (var _ = 0, E = Object.keys(D); _ < E.length; _++) {
              var K, H = E[_], F = h[Number(H)];
              F != null && (K = D[H], delete D[H], D[F] = K);
            }
            throw new Ge("".concat(a.name, ".bulkUpdate(): ").concat(W, " of ").concat(A, " operations failed"), D);
          });
        });
      });
    }, vt.prototype.bulkDelete = function(t) {
      var a = this, i = t.length;
      return this._trans("readwrite", function(l) {
        return a.core.mutate({ trans: l, type: "delete", keys: t }).then(function(p) {
          return ya(a, t, p);
        });
      }).then(function(l) {
        var p = l.numFailures, h = l.failures;
        if (p === 0) return l.lastResult;
        throw new Ge("".concat(a.name, ".bulkDelete(): ").concat(p, " of ").concat(i, " operations failed"), h);
      });
    };
    var va = vt;
    function vt() {
    }
    function ka(t) {
      function a(v, b) {
        if (b) {
          for (var T = arguments.length, L = new Array(T - 1); --T; ) L[T - 1] = arguments[T];
          return i[v].subscribe.apply(null, L), t;
        }
        if (typeof v == "string") return i[v];
      }
      var i = {};
      a.addEventType = h;
      for (var l = 1, p = arguments.length; l < p; ++l) h(arguments[l]);
      return a;
      function h(v, b, T) {
        var L, A;
        if (typeof v != "object") return b = b || bt, A = { subscribers: [], fire: T = T || M, subscribe: function(I) {
          A.subscribers.indexOf(I) === -1 && (A.subscribers.push(I), A.fire = b(A.fire, I));
        }, unsubscribe: function(I) {
          A.subscribers = A.subscribers.filter(function(W) {
            return W !== I;
          }), A.fire = A.subscribers.reduce(b, T);
        } }, i[v] = a[v] = A;
        P(L = v).forEach(function(I) {
          var W = L[I];
          if (x(W)) h(I, L[I][0], L[I][1]);
          else {
            if (W !== "asap") throw new ke.InvalidArgument("Invalid event config");
            var D = h(I, z, function() {
              for (var _ = arguments.length, E = new Array(_); _--; ) E[_] = arguments[_];
              D.subscribers.forEach(function(K) {
                Se(function() {
                  K.apply(null, E);
                });
              });
            });
          }
        });
      }
    }
    function Yn(t, a) {
      return ge(a).from({ prototype: t }), a;
    }
    function Un(t, a) {
      return !(t.filter || t.algorithm || t.or) && (a ? t.justLimit : !t.replayFilter);
    }
    function gr(t, a) {
      t.filter = Ln(t.filter, a);
    }
    function mr(t, a, i) {
      var l = t.replayFilter;
      t.replayFilter = l ? function() {
        return Ln(l(), a());
      } : a, t.justLimit = i && !l;
    }
    function Sa(t, a) {
      if (t.isPrimKey) return a.primaryKey;
      var i = a.getIndexByKeyPath(t.index);
      if (i) return i;
      throw new ke.Schema("KeyPath " + t.index + " on object store " + a.name + " is not indexed");
    }
    function Zn(t, a, i) {
      var l = Sa(t, a.schema);
      return a.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: l, range: t.range } });
    }
    function Qn(t, a, i, l) {
      var p, h, v = t.replayFilter ? Ln(t.filter, t.replayFilter()) : t.filter;
      return t.or ? (p = {}, h = function(b, T, L) {
        var A, I;
        v && !v(T, L, function(W) {
          return T.stop(W);
        }, function(W) {
          return T.fail(W);
        }) || ((I = "" + (A = T.primaryKey)) == "[object ArrayBuffer]" && (I = "" + new Uint8Array(A)), te(p, I)) || (p[I] = !0, a(b, T, L));
      }, Promise.all([t.or._iterate(h, i), Ua(Zn(t, l, i), t.algorithm, h, !t.keysOnly && t.valueMapper)])) : Ua(Zn(t, l, i), Ln(t.algorithm, v), a, !t.keysOnly && t.valueMapper);
    }
    function Ua(t, a, i, l) {
      var p = Mt(l ? function(h, v, b) {
        return i(l(h), v, b);
      } : i);
      return t.then(function(h) {
        if (h) return h.start(function() {
          var v = function() {
            return h.continue();
          };
          a && !a(h, function(b) {
            return v = b;
          }, function(b) {
            h.stop(b), v = M;
          }, function(b) {
            h.fail(b), v = M;
          }) || p(h.value, h, function(b) {
            return v = b;
          }), v();
        });
      });
    }
    it.prototype._read = function(t, a) {
      var i = this._ctx;
      return i.error ? i.table._trans(null, jt.bind(null, i.error)) : i.table._trans("readonly", t).then(a);
    }, it.prototype._write = function(t) {
      var a = this._ctx;
      return a.error ? a.table._trans(null, jt.bind(null, a.error)) : a.table._trans("readwrite", t, "locked");
    }, it.prototype._addAlgorithm = function(t) {
      var a = this._ctx;
      a.algorithm = Ln(a.algorithm, t);
    }, it.prototype._iterate = function(t, a) {
      return Qn(this._ctx, t, a, this._ctx.table.core);
    }, it.prototype.clone = function(t) {
      var a = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
      return t && R(i, t), a._ctx = i, a;
    }, it.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, it.prototype.each = function(t) {
      var a = this._ctx;
      return this._read(function(i) {
        return Qn(a, t, i, a.table.core);
      });
    }, it.prototype.count = function(t) {
      var a = this;
      return this._read(function(i) {
        var l, p = a._ctx, h = p.table.core;
        return Un(p, !0) ? h.count({ trans: i, query: { index: Sa(p, h.schema), range: p.range } }).then(function(v) {
          return Math.min(v, p.limit);
        }) : (l = 0, Qn(p, function() {
          return ++l, !1;
        }, i, h).then(function() {
          return l;
        }));
      }).then(t);
    }, it.prototype.sortBy = function(t, a) {
      var i = t.split(".").reverse(), l = i[0], p = i.length - 1;
      function h(T, L) {
        return L ? h(T[i[L]], L - 1) : T[l];
      }
      var v = this._ctx.dir === "next" ? 1 : -1;
      function b(T, L) {
        return me(h(T, p), h(L, p)) * v;
      }
      return this.toArray(function(T) {
        return T.sort(b);
      }).then(a);
    }, it.prototype.toArray = function(t) {
      var a = this;
      return this._read(function(i) {
        var l, p, h, v = a._ctx;
        return v.dir === "next" && Un(v, !0) && 0 < v.limit ? (l = v.valueMapper, p = Sa(v, v.table.core.schema), v.table.core.query({ trans: i, limit: v.limit, values: !0, query: { index: p, range: v.range } }).then(function(b) {
          return b = b.result, l ? b.map(l) : b;
        })) : (h = [], Qn(v, function(b) {
          return h.push(b);
        }, i, v.table.core).then(function() {
          return h;
        }));
      }, t);
    }, it.prototype.offset = function(t) {
      var a = this._ctx;
      return t <= 0 || (a.offset += t, Un(a) ? mr(a, function() {
        var i = t;
        return function(l, p) {
          return i === 0 || (i === 1 ? --i : p(function() {
            l.advance(i), i = 0;
          }), !1);
        };
      }) : mr(a, function() {
        var i = t;
        return function() {
          return --i < 0;
        };
      })), this;
    }, it.prototype.limit = function(t) {
      return this._ctx.limit = Math.min(this._ctx.limit, t), mr(this._ctx, function() {
        var a = t;
        return function(i, l, p) {
          return --a <= 0 && l(p), 0 <= a;
        };
      }, !0), this;
    }, it.prototype.until = function(t, a) {
      return gr(this._ctx, function(i, l, p) {
        return !t(i.value) || (l(p), a);
      }), this;
    }, it.prototype.first = function(t) {
      return this.limit(1).toArray(function(a) {
        return a[0];
      }).then(t);
    }, it.prototype.last = function(t) {
      return this.reverse().first(t);
    }, it.prototype.filter = function(t) {
      var a;
      return gr(this._ctx, function(i) {
        return t(i.value);
      }), (a = this._ctx).isMatch = Ln(a.isMatch, t), this;
    }, it.prototype.and = function(t) {
      return this.filter(t);
    }, it.prototype.or = function(t) {
      return new this.db.WhereClause(this._ctx.table, t, this);
    }, it.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, it.prototype.desc = function() {
      return this.reverse();
    }, it.prototype.eachKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, l) {
        t(l.key, l);
      });
    }, it.prototype.eachUniqueKey = function(t) {
      return this._ctx.unique = "unique", this.eachKey(t);
    }, it.prototype.eachPrimaryKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, l) {
        t(l.primaryKey, l);
      });
    }, it.prototype.keys = function(t) {
      var a = this._ctx, i = (a.keysOnly = !a.isMatch, []);
      return this.each(function(l, p) {
        i.push(p.key);
      }).then(function() {
        return i;
      }).then(t);
    }, it.prototype.primaryKeys = function(t) {
      var a = this._ctx;
      if (a.dir === "next" && Un(a, !0) && 0 < a.limit) return this._read(function(l) {
        var p = Sa(a, a.table.core.schema);
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
    }, it.prototype.uniqueKeys = function(t) {
      return this._ctx.unique = "unique", this.keys(t);
    }, it.prototype.firstKey = function(t) {
      return this.limit(1).keys(function(a) {
        return a[0];
      }).then(t);
    }, it.prototype.lastKey = function(t) {
      return this.reverse().firstKey(t);
    }, it.prototype.distinct = function() {
      var t, a = this._ctx, a = a.index && a.table.schema.idxByName[a.index];
      return a && a.multi && (t = {}, gr(this._ctx, function(l) {
        var l = l.primaryKey.toString(), p = te(t, l);
        return t[l] = !0, !p;
      })), this;
    }, it.prototype.modify = function(t) {
      var a = this, i = this._ctx;
      return this._write(function(l) {
        function p(E, K) {
          var H = K.failures;
          W += E - K.numFailures;
          for (var F = 0, ee = P(H); F < ee.length; F++) {
            var le = ee[F];
            I.push(H[le]);
          }
        }
        var h = typeof t == "function" ? t : function(E) {
          return Va(E, t);
        }, v = i.table.core, A = v.schema.primaryKey, b = A.outbound, T = A.extractKey, L = 200, A = a.db._options.modifyChunkSize, I = (A && (L = typeof A == "object" ? A[v.name] || A["*"] || 200 : A), []), W = 0, D = [], _ = t === Pa;
        return a.clone().primaryKeys().then(function(E) {
          function K(F) {
            var ee = Math.min(L, E.length - F), le = E.slice(F, F + ee);
            return (_ ? Promise.resolve([]) : v.getMany({ trans: l, keys: le, cache: "immutable" })).then(function(ye) {
              var fe = [], de = [], Ee = b ? [] : null, xe = _ ? le : [];
              if (!_) for (var he = 0; he < ee; ++he) {
                var _e = ye[he], st = { value: ut(_e), primKey: E[F + he] };
                h.call(st, st.value, st) !== !1 && (st.value == null ? xe.push(E[F + he]) : b || me(T(_e), T(st.value)) === 0 ? (de.push(st.value), b && Ee.push(E[F + he])) : (xe.push(E[F + he]), fe.push(st.value)));
              }
              return Promise.resolve(0 < fe.length && v.mutate({ trans: l, type: "add", values: fe }).then(function(ht) {
                for (var Q in ht.failures) xe.splice(parseInt(Q), 1);
                p(fe.length, ht);
              })).then(function() {
                return (0 < de.length || H && typeof t == "object") && v.mutate({ trans: l, type: "put", keys: Ee, values: de, criteria: H, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < F }).then(function(ht) {
                  return p(de.length, ht);
                });
              }).then(function() {
                return (0 < xe.length || H && _) && v.mutate({ trans: l, type: "delete", keys: xe, criteria: H, isAdditionalChunk: 0 < F }).then(function(ht) {
                  return ya(i.table, xe, ht);
                }).then(function(ht) {
                  return p(xe.length, ht);
                });
              }).then(function() {
                return E.length > F + ee && K(F + L);
              });
            });
          }
          var H = Un(i) && i.limit === 1 / 0 && (typeof t != "function" || _) && { index: i.index, range: i.range };
          return K(0).then(function() {
            if (0 < I.length) throw new rt("Error modifying one or more objects", I, W, D);
            return E.length;
          });
        });
      });
    }, it.prototype.delete = function() {
      var t = this._ctx, a = t.range;
      return !Un(t) || t.table.schema.yProps || !t.isPrimKey && a.type !== 3 ? this.modify(Pa) : this._write(function(i) {
        var l = t.table.core.schema.primaryKey, p = a;
        return t.table.core.count({ trans: i, query: { index: l, range: p } }).then(function(h) {
          return t.table.core.mutate({ trans: i, type: "deleteRange", range: p }).then(function(T) {
            var b = T.failures, T = T.numFailures;
            if (T) throw new rt("Could not delete some values", Object.keys(b).map(function(L) {
              return b[L];
            }), h - T);
            return h - T;
          });
        });
      });
    };
    var wr = it;
    function it() {
    }
    var Pa = function(t, a) {
      return a.value = null;
    };
    function wo(t, a) {
      return t < a ? -1 : t === a ? 0 : 1;
    }
    function yr(t, a) {
      return a < t ? -1 : t === a ? 0 : 1;
    }
    function kt(t, a, i) {
      return t = t instanceof Kn ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(a), t;
    }
    function mn(t) {
      return new t.Collection(t, function() {
        return Ka("");
      }).limit(0);
    }
    function xa(D, a, i, l) {
      var p, h, v, b, T, L, A, I = i.length;
      if (!i.every(function(E) {
        return typeof E == "string";
      })) return kt(D, Ur);
      function W(E) {
        p = E === "next" ? function(H) {
          return H.toUpperCase();
        } : function(H) {
          return H.toLowerCase();
        }, h = E === "next" ? function(H) {
          return H.toLowerCase();
        } : function(H) {
          return H.toUpperCase();
        }, v = E === "next" ? wo : yr;
        var K = i.map(function(H) {
          return { lower: h(H), upper: p(H) };
        }).sort(function(H, F) {
          return v(H.lower, F.lower);
        });
        b = K.map(function(H) {
          return H.upper;
        }), T = K.map(function(H) {
          return H.lower;
        }), A = (L = E) === "next" ? "" : l;
      }
      W("next");
      var D = new D.Collection(D, function() {
        return Cn(b[0], T[I - 1] + l);
      }), _ = (D._ondirectionchange = function(E) {
        W(E);
      }, 0);
      return D._addAlgorithm(function(E, K, H) {
        var F = E.key;
        if (typeof F == "string") {
          var ee = h(F);
          if (a(ee, T, _)) return !0;
          for (var le = null, ye = _; ye < I; ++ye) {
            var fe = ((de, Ee, xe, he, _e, st) => {
              for (var ht = Math.min(de.length, he.length), Q = -1, nt = 0; nt < ht; ++nt) {
                var Dt = Ee[nt];
                if (Dt !== he[nt]) return _e(de[nt], xe[nt]) < 0 ? de.substr(0, nt) + xe[nt] + xe.substr(nt + 1) : _e(de[nt], he[nt]) < 0 ? de.substr(0, nt) + he[nt] + xe.substr(nt + 1) : 0 <= Q ? de.substr(0, Q) + Ee[Q] + xe.substr(Q + 1) : null;
                _e(de[nt], Dt) < 0 && (Q = nt);
              }
              return ht < he.length && st === "next" ? de + xe.substr(de.length) : ht < de.length && st === "prev" ? de.substr(0, xe.length) : Q < 0 ? null : de.substr(0, Q) + he[Q] + xe.substr(Q + 1);
            })(F, ee, b[ye], T[ye], v, L);
            fe === null && le === null ? _ = ye + 1 : (le === null || 0 < v(le, fe)) && (le = fe);
          }
          K(le !== null ? function() {
            E.continue(le + A);
          } : H);
        }
        return !1;
      }), D;
    }
    function Cn(t, a, i, l) {
      return { type: 2, lower: t, upper: a, lowerOpen: i, upperOpen: l };
    }
    function Ka(t) {
      return { type: 1, lower: t, upper: t };
    }
    Object.defineProperty(It.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), It.prototype.between = function(t, a, i, l) {
      i = i !== !1, l = l === !0;
      try {
        return 0 < this._cmp(t, a) || this._cmp(t, a) === 0 && (i || l) && (!i || !l) ? mn(this) : new this.Collection(this, function() {
          return Cn(t, a, !i, !l);
        });
      } catch {
        return kt(this, xn);
      }
    }, It.prototype.equals = function(t) {
      return t == null ? kt(this, xn) : new this.Collection(this, function() {
        return Ka(t);
      });
    }, It.prototype.above = function(t) {
      return t == null ? kt(this, xn) : new this.Collection(this, function() {
        return Cn(t, void 0, !0);
      });
    }, It.prototype.aboveOrEqual = function(t) {
      return t == null ? kt(this, xn) : new this.Collection(this, function() {
        return Cn(t, void 0, !1);
      });
    }, It.prototype.below = function(t) {
      return t == null ? kt(this, xn) : new this.Collection(this, function() {
        return Cn(void 0, t, !1, !0);
      });
    }, It.prototype.belowOrEqual = function(t) {
      return t == null ? kt(this, xn) : new this.Collection(this, function() {
        return Cn(void 0, t);
      });
    }, It.prototype.startsWith = function(t) {
      return typeof t != "string" ? kt(this, Ur) : this.between(t, t + Fn, !0, !0);
    }, It.prototype.startsWithIgnoreCase = function(t) {
      return t === "" ? this.startsWith(t) : xa(this, function(a, i) {
        return a.indexOf(i[0]) === 0;
      }, [t], Fn);
    }, It.prototype.equalsIgnoreCase = function(t) {
      return xa(this, function(a, i) {
        return a === i[0];
      }, [t], "");
    }, It.prototype.anyOfIgnoreCase = function() {
      var t = Ve.apply(Rt, arguments);
      return t.length === 0 ? mn(this) : xa(this, function(a, i) {
        return i.indexOf(a) !== -1;
      }, t, "");
    }, It.prototype.startsWithAnyOfIgnoreCase = function() {
      var t = Ve.apply(Rt, arguments);
      return t.length === 0 ? mn(this) : xa(this, function(a, i) {
        return i.some(function(l) {
          return a.indexOf(l) === 0;
        });
      }, t, Fn);
    }, It.prototype.anyOf = function() {
      var t, a, i = this, l = Ve.apply(Rt, arguments), p = this._cmp;
      try {
        l.sort(p);
      } catch {
        return kt(this, xn);
      }
      return l.length === 0 ? mn(this) : ((t = new this.Collection(this, function() {
        return Cn(l[0], l[l.length - 1]);
      }))._ondirectionchange = function(h) {
        p = h === "next" ? i._ascending : i._descending, l.sort(p);
      }, a = 0, t._addAlgorithm(function(h, v, b) {
        for (var T = h.key; 0 < p(T, l[a]); ) if (++a === l.length) return v(b), !1;
        return p(T, l[a]) === 0 || (v(function() {
          h.continue(l[a]);
        }), !1);
      }), t);
    }, It.prototype.notEqual = function(t) {
      return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, It.prototype.noneOf = function() {
      var t = Ve.apply(Rt, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return kt(this, xn);
      }
      var a = t.reduce(function(i, l) {
        return i ? i.concat([[i[i.length - 1][1], l]]) : [[-1 / 0, l]];
      }, null);
      return a.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
    }, It.prototype.inAnyRange = function(t, H) {
      var i = this, l = this._cmp, p = this._ascending, h = this._descending, v = this._min, b = this._max;
      if (t.length === 0) return mn(this);
      if (!t.every(function(F) {
        return F[0] !== void 0 && F[1] !== void 0 && p(F[0], F[1]) <= 0;
      })) return kt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ke.InvalidArgument);
      var T = !H || H.includeLowers !== !1, L = H && H.includeUppers === !0, A, I = p;
      function W(F, ee) {
        return I(F[0], ee[0]);
      }
      try {
        (A = t.reduce(function(F, ee) {
          for (var le = 0, ye = F.length; le < ye; ++le) {
            var fe = F[le];
            if (l(ee[0], fe[1]) < 0 && 0 < l(ee[1], fe[0])) {
              fe[0] = v(fe[0], ee[0]), fe[1] = b(fe[1], ee[1]);
              break;
            }
          }
          return le === ye && F.push(ee), F;
        }, [])).sort(W);
      } catch {
        return kt(this, xn);
      }
      var D = 0, _ = L ? function(F) {
        return 0 < p(F, A[D][1]);
      } : function(F) {
        return 0 <= p(F, A[D][1]);
      }, E = T ? function(F) {
        return 0 < h(F, A[D][0]);
      } : function(F) {
        return 0 <= h(F, A[D][0]);
      }, K = _, H = new this.Collection(this, function() {
        return Cn(A[0][0], A[A.length - 1][1], !T, !L);
      });
      return H._ondirectionchange = function(F) {
        I = F === "next" ? (K = _, p) : (K = E, h), A.sort(W);
      }, H._addAlgorithm(function(F, ee, le) {
        for (var ye, fe = F.key; K(fe); ) if (++D === A.length) return ee(le), !1;
        return !_(ye = fe) && !E(ye) || (i._cmp(fe, A[D][1]) === 0 || i._cmp(fe, A[D][0]) === 0 || ee(function() {
          I === p ? F.continue(A[D][0]) : F.continue(A[D][1]);
        }), !1);
      }), H;
    }, It.prototype.startsWithAnyOf = function() {
      var t = Ve.apply(Rt, arguments);
      return t.every(function(a) {
        return typeof a == "string";
      }) ? t.length === 0 ? mn(this) : this.inAnyRange(t.map(function(a) {
        return [a, a + Fn];
      })) : kt(this, "startsWithAnyOf() only works with strings");
    };
    var Kn = It;
    function It() {
    }
    function Ht(t) {
      return Mt(function(a) {
        return un(a), t(a.target.error), !1;
      });
    }
    function un(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
    }
    var Mn = "storagemutated", wn = "x-storagemutated-1", Ot = ka(null, Mn), Rn = (yn.prototype._lock = function() {
      return ne(!Te.global), ++this._reculock, this._reculock !== 1 || Te.global || (Te.lockOwnerFor = this), this;
    }, yn.prototype._unlock = function() {
      if (ne(!Te.global), --this._reculock == 0) for (Te.global || (Te.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var t = this._blockedFuncs.shift();
        try {
          _n(t[1], t[0]);
        } catch {
        }
      }
      return this;
    }, yn.prototype._locked = function() {
      return this._reculock && Te.lockOwnerFor !== this;
    }, yn.prototype.create = function(t) {
      var a = this;
      if (this.mode) {
        var i = this.db.idbdb, l = this.db._state.dbOpenError;
        if (ne(!this.idbtrans), !t && !i) switch (l && l.name) {
          case "DatabaseClosedError":
            throw new ke.DatabaseClosed(l);
          case "MissingAPIError":
            throw new ke.MissingAPI(l.message, l);
          default:
            throw new ke.OpenFailed(l);
        }
        if (!this.active) throw new ke.TransactionInactive();
        ne(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Mt(function(p) {
          un(p), a._reject(t.error);
        }), t.onabort = Mt(function(p) {
          un(p), a.active && a._reject(new ke.Abort(t.error)), a.active = !1, a.on("abort").fire(p);
        }), t.oncomplete = Mt(function() {
          a.active = !1, a._resolve(), "mutatedParts" in t && Ot.storagemutated.fire(t.mutatedParts);
        });
      }
      return this;
    }, yn.prototype._promise = function(t, a, i) {
      var l, p = this;
      return t === "readwrite" && this.mode !== "readwrite" ? jt(new ke.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new V(function(h, v) {
        p._blockedFuncs.push([function() {
          p._promise(t, a, i).then(h, v);
        }, Te]);
      }) : i ? Tn(function() {
        var h = new V(function(v, b) {
          p._lock();
          var T = a(v, b, p);
          T && T.then && T.then(v, b);
        });
        return h.finally(function() {
          return p._unlock();
        }), h._lib = !0, h;
      }) : ((l = new V(function(h, v) {
        var b = a(h, v, p);
        b && b.then && b.then(h, v);
      }))._lib = !0, l) : jt(new ke.TransactionInactive());
    }, yn.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, yn.prototype.waitFor = function(t) {
      var a, i = this._root(), l = V.resolve(t), p = (i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
        return l;
      }) : (i._waitingFor = l, i._waitingQueue = [], a = i.idbtrans.objectStore(i.storeNames[0]), function h() {
        for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
        i._waitingFor && (a.get(-1 / 0).onsuccess = h);
      }()), i._waitingFor);
      return new V(function(h, v) {
        l.then(function(b) {
          return i._waitingQueue.push(Mt(h.bind(null, b)));
        }, function(b) {
          return i._waitingQueue.push(Mt(v.bind(null, b)));
        }).finally(function() {
          i._waitingFor === p && (i._waitingFor = null);
        });
      });
    }, yn.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ke.Abort()));
    }, yn.prototype.table = function(t) {
      var a = this._memoizedTables || (this._memoizedTables = {});
      if (te(a, t)) return a[t];
      var i = this.schema[t];
      if (i) return (i = new this.db.Table(t, i, this)).core = this.db.core.table(t), a[t] = i;
      throw new ke.NotFound("Table " + t + " not part of transaction");
    }, yn);
    function yn() {
    }
    function At(t, a, i, l, p, h, v, b) {
      return { name: t, keyPath: a, unique: i, multi: l, auto: p, compound: h, src: (i && !v ? "&" : "") + (l ? "*" : "") + (p ? "++" : "") + br(a), type: b };
    }
    function br(t) {
      return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
    }
    function Ca(t, a, i) {
      return { name: t, primKey: a, indexes: i, mappedClass: null, idxByName: (l = function(p) {
        return [p.name, p];
      }, i.reduce(function(p, h, v) {
        return h = l(h, v), h && (p[h[0]] = h[1]), p;
      }, {})) };
      var l;
    }
    var Ma = function(t) {
      try {
        return t.only([[]]), Ma = function() {
          return [[]];
        }, [[]];
      } catch {
        return Ma = function() {
          return Fn;
        }, Fn;
      }
    };
    function Dn(t) {
      return t == null ? function() {
      } : typeof t == "string" ? (a = t).split(".").length === 1 ? function(i) {
        return i[a];
      } : function(i) {
        return ce(i, a);
      } : function(i) {
        return ce(i, t);
      };
      var a;
    }
    function Ia(t) {
      return [].slice.call(t);
    }
    var jr = 0;
    function jn(t) {
      return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
    }
    function $r(t, a, T) {
      function l(_) {
        if (_.type === 3) return null;
        if (_.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var I = _.lower, W = _.upper, D = _.lowerOpen, _ = _.upperOpen;
        return I === void 0 ? W === void 0 ? null : a.upperBound(W, !!_) : W === void 0 ? a.lowerBound(I, !!D) : a.bound(I, W, !!D, !!_);
      }
      function p(A) {
        var I, W = A.name;
        return { name: W, schema: A, mutate: function(D) {
          var _ = D.trans, E = D.type, K = D.keys, H = D.values, F = D.range;
          return new Promise(function(ee, le) {
            ee = Mt(ee);
            var ye = _.objectStore(W), fe = ye.keyPath == null, de = E === "put" || E === "add";
            if (!de && E !== "delete" && E !== "deleteRange") throw new Error("Invalid operation type: " + E);
            var Ee, xe = (K || H || { length: 1 }).length;
            if (K && H && K.length !== H.length) throw new Error("Given keys array must have same length as given values array.");
            if (xe === 0) return ee({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function he(Wt) {
              ++ht, un(Wt);
            }
            var _e = [], st = [], ht = 0;
            if (E === "deleteRange") {
              if (F.type === 4) return ee({ numFailures: ht, failures: st, results: [], lastResult: void 0 });
              F.type === 3 ? _e.push(Ee = ye.clear()) : _e.push(Ee = ye.delete(l(F)));
            } else {
              var fe = de ? fe ? [H, K] : [H, null] : [K, null], Q = fe[0], nt = fe[1];
              if (de) for (var Dt = 0; Dt < xe; ++Dt) _e.push(Ee = nt && nt[Dt] !== void 0 ? ye[E](Q[Dt], nt[Dt]) : ye[E](Q[Dt])), Ee.onerror = he;
              else for (Dt = 0; Dt < xe; ++Dt) _e.push(Ee = ye[E](Q[Dt])), Ee.onerror = he;
            }
            function rn(Wt) {
              Wt = Wt.target.result, _e.forEach(function(En, Da) {
                return En.error != null && (st[Da] = En.error);
              }), ee({ numFailures: ht, failures: st, results: E === "delete" ? K : _e.map(function(En) {
                return En.result;
              }), lastResult: Wt });
            }
            Ee.onerror = function(Wt) {
              he(Wt), rn(Wt);
            }, Ee.onsuccess = rn;
          });
        }, getMany: function(D) {
          var _ = D.trans, E = D.keys;
          return new Promise(function(K, H) {
            K = Mt(K);
            for (var F, ee = _.objectStore(W), le = E.length, ye = new Array(le), fe = 0, de = 0, Ee = function(_e) {
              _e = _e.target, ye[_e._pos] = _e.result, ++de === fe && K(ye);
            }, xe = Ht(H), he = 0; he < le; ++he) E[he] != null && ((F = ee.get(E[he]))._pos = he, F.onsuccess = Ee, F.onerror = xe, ++fe);
            fe === 0 && K(ye);
          });
        }, get: function(D) {
          var _ = D.trans, E = D.key;
          return new Promise(function(K, H) {
            K = Mt(K);
            var F = _.objectStore(W).get(E);
            F.onsuccess = function(ee) {
              return K(ee.target.result);
            }, F.onerror = Ht(H);
          });
        }, query: (I = b, function(D) {
          return new Promise(function(_, E) {
            _ = Mt(_);
            var K, H, F, de = D.trans, ee = D.values, le = D.limit, fe = D.query, ye = le === 1 / 0 ? void 0 : le, Ee = fe.index, fe = fe.range, de = de.objectStore(W), de = Ee.isPrimaryKey ? de : de.index(Ee.name), Ee = l(fe);
            if (le === 0) return _({ result: [] });
            I ? ((fe = ee ? de.getAll(Ee, ye) : de.getAllKeys(Ee, ye)).onsuccess = function(xe) {
              return _({ result: xe.target.result });
            }, fe.onerror = Ht(E)) : (K = 0, H = !ee && "openKeyCursor" in de ? de.openKeyCursor(Ee) : de.openCursor(Ee), F = [], H.onsuccess = function(xe) {
              var he = H.result;
              return !he || (F.push(ee ? he.value : he.primaryKey), ++K === le) ? _({ result: F }) : void he.continue();
            }, H.onerror = Ht(E));
          });
        }), openCursor: function(D) {
          var _ = D.trans, E = D.values, K = D.query, H = D.reverse, F = D.unique;
          return new Promise(function(ee, le) {
            ee = Mt(ee);
            var de = K.index, ye = K.range, fe = _.objectStore(W), fe = de.isPrimaryKey ? fe : fe.index(de.name), de = H ? F ? "prevunique" : "prev" : F ? "nextunique" : "next", Ee = !E && "openKeyCursor" in fe ? fe.openKeyCursor(l(ye), de) : fe.openCursor(l(ye), de);
            Ee.onerror = Ht(le), Ee.onsuccess = Mt(function(xe) {
              var he, _e, st, ht, Q = Ee.result;
              Q ? (Q.___id = ++jr, Q.done = !1, he = Q.continue.bind(Q), _e = (_e = Q.continuePrimaryKey) && _e.bind(Q), st = Q.advance.bind(Q), ht = function() {
                throw new Error("Cursor not stopped");
              }, Q.trans = _, Q.stop = Q.continue = Q.continuePrimaryKey = Q.advance = function() {
                throw new Error("Cursor not started");
              }, Q.fail = Mt(le), Q.next = function() {
                var nt = this, Dt = 1;
                return this.start(function() {
                  return Dt-- ? nt.continue() : nt.stop();
                }).then(function() {
                  return nt;
                });
              }, Q.start = function(nt) {
                function Dt() {
                  if (Ee.result) try {
                    nt();
                  } catch (Wt) {
                    Q.fail(Wt);
                  }
                  else Q.done = !0, Q.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, Q.stop();
                }
                var rn = new Promise(function(Wt, En) {
                  Wt = Mt(Wt), Ee.onerror = Ht(En), Q.fail = En, Q.stop = function(Da) {
                    Q.stop = Q.continue = Q.continuePrimaryKey = Q.advance = ht, Wt(Da);
                  };
                });
                return Ee.onsuccess = Mt(function(Wt) {
                  Ee.onsuccess = Dt, Dt();
                }), Q.continue = he, Q.continuePrimaryKey = _e, Q.advance = st, Dt(), rn;
              }, ee(Q)) : ee(null);
            }, le);
          });
        }, count: function(D) {
          var _ = D.query, E = D.trans, K = _.index, H = _.range;
          return new Promise(function(F, ee) {
            var le = E.objectStore(W), le = K.isPrimaryKey ? le : le.index(K.name), ye = l(H), ye = ye ? le.count(ye) : le.count();
            ye.onsuccess = Mt(function(fe) {
              return F(fe.target.result);
            }), ye.onerror = Ht(ee);
          });
        } };
      }
      h = T, v = Ia((T = t).objectStoreNames);
      var h, T = { schema: { name: T.name, tables: v.map(function(A) {
        return h.objectStore(A);
      }).map(function(A) {
        var I = A.keyPath, W = A.autoIncrement, _ = x(I), D = {}, _ = { name: A.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: I == null, compound: _, keyPath: I, autoIncrement: W, unique: !0, extractKey: Dn(I) }, indexes: Ia(A.indexNames).map(function(E) {
          return A.index(E);
        }).map(function(F) {
          var ee = F.name, K = F.unique, H = F.multiEntry, F = F.keyPath, ee = { name: ee, compound: x(F), keyPath: F, unique: K, multiEntry: H, extractKey: Dn(F) };
          return D[jn(F)] = ee;
        }), getIndexByKeyPath: function(E) {
          return D[jn(E)];
        } };
        return D[":id"] = _.primaryKey, I != null && (D[jn(I)] = _.primaryKey), _;
      }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }, v = T.schema, b = T.hasGetAll, T = v.tables.map(p), L = {};
      return T.forEach(function(A) {
        return L[A.name] = A;
      }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(A) {
        if (L[A]) return L[A];
        throw new Error("Table '".concat(A, "' not found"));
      }, MIN_KEY: -1 / 0, MAX_KEY: Ma(a), schema: v };
    }
    function Hr(t, a, i, l) {
      return i = i.IDBKeyRange, a = $r(a, i, l), { dbcore: t.dbcore.reduce(function(p, h) {
        return h = h.create, d(d({}, p), h(p));
      }, a) };
    }
    function Qt(t, a) {
      var i = a.db, i = Hr(t._middlewares, i, t._deps, a);
      t.core = i.dbcore, t.tables.forEach(function(l) {
        var p = l.name;
        t.core.schema.tables.some(function(h) {
          return h.name === p;
        }) && (l.core = t.core.table(p), t[p] instanceof t.Table) && (t[p].core = l.core);
      });
    }
    function Xn(t, a, i, l) {
      i.forEach(function(p) {
        var h = l[p];
        a.forEach(function(v) {
          var b = function T(L, A) {
            return q(L, A) || (L = j(L)) && T(L, A);
          }(v, p);
          (!b || "value" in b && b.value === void 0) && (v === t.Transaction.prototype || v instanceof t.Transaction ? we(v, p, { get: function() {
            return this.table(p);
          }, set: function(T) {
            B(this, p, { value: T, writable: !0, configurable: !0, enumerable: !0 });
          } }) : v[p] = new t.Table(p, h));
        });
      });
    }
    function Aa(t, a) {
      a.forEach(function(i) {
        for (var l in i) i[l] instanceof t.Table && delete i[l];
      });
    }
    function vr(t, a) {
      return t._cfg.version - a._cfg.version;
    }
    function ea(t, a, i, l) {
      var p = t._dbSchema, h = (i.objectStoreNames.contains("$meta") && !p.$meta && (p.$meta = Ca("$meta", Ha("")[0], []), t._storeNames.push("$meta")), t._createTransaction("readwrite", t._storeNames, p)), v = (h.create(i), h._completion.catch(l), h._reject.bind(h)), b = Te.transless || Te;
      Tn(function() {
        if (Te.trans = h, Te.transless = b, a !== 0) return Qt(t, i), L = a, ((T = h).storeNames.includes("$meta") ? T.table("$meta").get("version").then(function(A) {
          return A ?? L;
        }) : V.resolve(L)).then(function(K) {
          var I = t, W = K, D = h, _ = i, E = [], K = I._versions, H = I._dbSchema = Ea(0, I.idbdb, _);
          return (K = K.filter(function(F) {
            return F._cfg.version >= W;
          })).length === 0 ? V.resolve() : (K.forEach(function(F) {
            E.push(function() {
              var ee, le, ye, fe = H, de = F._cfg.dbschema, Ee = ($a(I, fe, _), $a(I, de, _), H = I._dbSchema = de, ja(fe, de)), xe = (Ee.add.forEach(function(he) {
                Jt(_, he[0], he[1].primKey, he[1].indexes);
              }), Ee.change.forEach(function(he) {
                if (he.recreate) throw new ke.Upgrade("Not yet support for changing primary key");
                var _e = _.objectStore(he.name);
                he.add.forEach(function(st) {
                  return ta(_e, st);
                }), he.change.forEach(function(st) {
                  _e.deleteIndex(st.name), ta(_e, st);
                }), he.del.forEach(function(st) {
                  return _e.deleteIndex(st);
                });
              }), F._cfg.contentUpgrade);
              if (xe && F._cfg.version > W) return Qt(I, _), D._memoizedTables = {}, ee = gt(de), Ee.del.forEach(function(he) {
                ee[he] = fe[he];
              }), Aa(I, [I.Transaction.prototype]), Xn(I, [I.Transaction.prototype], P(ee), ee), D.schema = ee, (le = O(xe)) && ie(), de = V.follow(function() {
                var he;
                (ye = xe(D)) && le && (he = Sn.bind(null, null), ye.then(he, he));
              }), ye && typeof ye.then == "function" ? V.resolve(ye) : de.then(function() {
                return ye;
              });
            }), E.push(function(ee) {
              var le, ye, fe = F._cfg.dbschema;
              le = fe, ye = ee, [].slice.call(ye.db.objectStoreNames).forEach(function(de) {
                return le[de] == null && ye.db.deleteObjectStore(de);
              }), Aa(I, [I.Transaction.prototype]), Xn(I, [I.Transaction.prototype], I._storeNames, I._dbSchema), D.schema = I._dbSchema;
            }), E.push(function(ee) {
              I.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(I.idbdb.version / 10) === F._cfg.version ? (I.idbdb.deleteObjectStore("$meta"), delete I._dbSchema.$meta, I._storeNames = I._storeNames.filter(function(le) {
                return le !== "$meta";
              })) : ee.objectStore("$meta").put(F._cfg.version, "version"));
            });
          }), function F() {
            return E.length ? V.resolve(E.shift()(D.idbtrans)).then(F) : V.resolve();
          }().then(function() {
            kr(H, _);
          }));
        }).catch(v);
        var T, L;
        P(p).forEach(function(A) {
          Jt(i, A, p[A].primKey, p[A].indexes);
        }), Qt(t, i), V.follow(function() {
          return t.on.populate.fire(h);
        }).catch(v);
      });
    }
    function yo(t, a) {
      kr(t._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
      var i = Ea(0, t.idbdb, a);
      $a(t, t._dbSchema, a);
      for (var l = 0, p = ja(i, t._dbSchema).change; l < p.length; l++) {
        var h = ((v) => {
          if (v.change.length || v.recreate) return console.warn("Unable to patch indexes of table ".concat(v.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var b = a.objectStore(v.name);
          v.add.forEach(function(T) {
            St && console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name, ".").concat(T.src)), ta(b, T);
          });
        })(p[l]);
        if (typeof h == "object") return h.value;
      }
    }
    function ja(t, a) {
      var i, l = { del: [], add: [], change: [] };
      for (i in t) a[i] || l.del.push(i);
      for (i in a) {
        var p = t[i], h = a[i];
        if (p) {
          var v = { name: i, def: h, recreate: !1, del: [], add: [], change: [] };
          if ("" + (p.primKey.keyPath || "") != "" + (h.primKey.keyPath || "") || p.primKey.auto !== h.primKey.auto) v.recreate = !0, l.change.push(v);
          else {
            var b = p.idxByName, T = h.idxByName, L = void 0;
            for (L in b) T[L] || v.del.push(L);
            for (L in T) {
              var A = b[L], I = T[L];
              A ? A.src !== I.src && v.change.push(I) : v.add.push(I);
            }
            (0 < v.del.length || 0 < v.add.length || 0 < v.change.length) && l.change.push(v);
          }
        } else l.add.push([i, h]);
      }
      return l;
    }
    function Jt(t, a, i, l) {
      var p = t.db.createObjectStore(a, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
      l.forEach(function(h) {
        return ta(p, h);
      });
    }
    function kr(t, a) {
      P(t).forEach(function(i) {
        a.db.objectStoreNames.contains(i) || (St && console.debug("Dexie: Creating missing table", i), Jt(a, i, t[i].primKey, t[i].indexes));
      });
    }
    function ta(t, a) {
      t.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
    }
    function Ea(t, a, i) {
      var l = {};
      return Z(a.objectStoreNames, 0).forEach(function(p) {
        for (var h = i.objectStore(p), v = At(br(L = h.keyPath), L || "", !0, !1, !!h.autoIncrement, L && typeof L != "string", !0), b = [], T = 0; T < h.indexNames.length; ++T) {
          var A = h.index(h.indexNames[T]), L = A.keyPath, A = At(A.name, L, !!A.unique, !!A.multiEntry, !1, L && typeof L != "string", !1);
          b.push(A);
        }
        l[p] = Ca(p, v, b);
      }), l;
    }
    function $a(t, a, i) {
      for (var l = i.db.objectStoreNames, p = 0; p < l.length; ++p) {
        var h = l[p], v = i.objectStore(h);
        t._hasGetAll = "getAll" in v;
        for (var b = 0; b < v.indexNames.length; ++b) {
          var T, L = v.indexNames[b], A = v.index(L).keyPath, A = typeof A == "string" ? A : "[" + Z(A).join("+") + "]";
          a[h] && (T = a[h].idxByName[A]) && (T.name = L, delete a[h].idxByName[A], a[h].idxByName[L] = T);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && m.WorkerGlobalScope && m instanceof m.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
    }
    function Ha(t) {
      return t.split(",").map(function(a, i) {
        var p = a.split(":"), l = (l = p[1]) == null ? void 0 : l.trim(), p = (a = p[0].trim()).replace(/([&*]|\+\+)/g, ""), h = /^\[/.test(p) ? p.match(/^\[(.*)\]$/)[1].split("+") : p;
        return At(p, h || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), x(h), i === 0, l);
      });
    }
    bn.prototype._createTableSchema = Ca, bn.prototype._parseIndexSyntax = Ha, bn.prototype._parseStoresSpec = function(t, a) {
      var i = this;
      P(t).forEach(function(l) {
        if (t[l] !== null) {
          var p = i._parseIndexSyntax(t[l]), h = p.shift();
          if (!h) throw new ke.Schema("Invalid schema for table " + l + ": " + t[l]);
          if (h.unique = !0, h.multi) throw new ke.Schema("Primary key cannot be multiEntry*");
          p.forEach(function(v) {
            if (v.auto) throw new ke.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!v.keyPath) throw new ke.Schema("Index must have a name and cannot be an empty string");
          }), h = i._createTableSchema(l, h, p), a[l] = h;
        }
      });
    }, bn.prototype.stores = function(i) {
      var a = this.db, i = (this._cfg.storesSource = this._cfg.storesSource ? R(this._cfg.storesSource, i) : i, a._versions), l = {}, p = {};
      return i.forEach(function(h) {
        R(l, h._cfg.storesSource), p = h._cfg.dbschema = {}, h._parseStoresSpec(l, p);
      }), a._dbSchema = p, Aa(a, [a._allTables, a, a.Transaction.prototype]), Xn(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], P(p), p), a._storeNames = P(p), this;
    }, bn.prototype.upgrade = function(t) {
      return this._cfg.contentUpgrade = Ae(this._cfg.contentUpgrade || M, t), this;
    };
    var bo = bn;
    function bn() {
    }
    function Ga(t, a) {
      var i = t._dbNamesDB;
      return i || (i = t._dbNamesDB = new An(wa, { addons: [], indexedDB: t, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
    }
    function za(t) {
      return t && typeof t.databases == "function";
    }
    function tn(t) {
      return Tn(function() {
        return Te.letThrough = !0, t();
      });
    }
    function On(t) {
      return !("from" in t);
    }
    var Yt = function(t, a) {
      var i;
      if (!this) return i = new Yt(), t && "d" in t && R(i, t), i;
      R(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? a : t } : { d: 0 });
    };
    function na(t, a, i) {
      var l = me(a, i);
      if (!isNaN(l)) {
        if (0 < l) throw RangeError();
        if (On(t)) return R(t, { from: a, to: i, d: 1 });
        var l = t.l, p = t.r;
        if (me(i, t.from) < 0) return l ? na(l, a, i) : t.l = { from: a, to: i, d: 1, l: null, r: null }, Sr(t);
        if (0 < me(a, t.to)) return p ? na(p, a, i) : t.r = { from: a, to: i, d: 1, l: null, r: null }, Sr(t);
        me(a, t.from) < 0 && (t.from = a, t.l = null, t.d = p ? p.d + 1 : 1), 0 < me(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), a = !t.r, l && !t.l && aa(t, l), p && a && aa(t, p);
      }
    }
    function aa(t, a) {
      On(a) || function i(l, p) {
        var h = p.from, v = p.l, b = p.r;
        na(l, h, p.to), v && i(l, v), b && i(l, b);
      }(t, a);
    }
    function Gr(t, a) {
      var i = ra(a), l = i.next();
      if (!l.done) for (var p = l.value, h = ra(t), v = h.next(p.from), b = v.value; !l.done && !v.done; ) {
        if (me(b.from, p.to) <= 0 && 0 <= me(b.to, p.from)) return !0;
        me(p.from, b.from) < 0 ? p = (l = i.next(b.from)).value : b = (v = h.next(p.from)).value;
      }
      return !1;
    }
    function ra(t) {
      var a = On(t) ? null : { s: 0, n: t };
      return { next: function(i) {
        for (var l = 0 < arguments.length; a; ) switch (a.s) {
          case 0:
            if (a.s = 1, l) for (; a.n.l && me(i, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
            else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
          case 1:
            if (a.s = 2, !l || me(i, a.n.to) <= 0) return { value: a.n, done: !1 };
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
    function Sr(t) {
      var a, i, l, p = (((p = t.r) == null ? void 0 : p.d) || 0) - (((p = t.l) == null ? void 0 : p.d) || 0), p = 1 < p ? "r" : p < -1 ? "l" : "";
      p && (a = p == "r" ? "l" : "r", i = d({}, t), l = t[p], t.from = l.from, t.to = l.to, t[p] = l[p], i[p] = l[a], (t[a] = i).d = Et(i)), t.d = Et(t);
    }
    function Et(i) {
      var a = i.r, i = i.l;
      return (a ? i ? Math.max(a.d, i.d) : a.d : i ? i.d : 0) + 1;
    }
    function oa(t, a) {
      return P(a).forEach(function(i) {
        t[i] ? aa(t[i], a[i]) : t[i] = function l(p) {
          var h, v, b = {};
          for (h in p) te(p, h) && (v = p[h], b[h] = !v || typeof v != "object" || mt.has(v.constructor) ? v : l(v));
          return b;
        }(a[i]);
      }), t;
    }
    function Ta(t, a) {
      return t.all || a.all || Object.keys(t).some(function(i) {
        return a[i] && Gr(a[i], t[i]);
      });
    }
    $(Yt.prototype, ((je = { add: function(t) {
      return aa(this, t), this;
    }, addKey: function(t) {
      return na(this, t, t), this;
    }, addKeys: function(t) {
      var a = this;
      return t.forEach(function(i) {
        return na(a, i, i);
      }), this;
    }, hasKey: function(t) {
      var a = ra(this).next(t).value;
      return a && me(a.from, t) <= 0 && 0 <= me(a.to, t);
    } })[at] = function() {
      return ra(this);
    }, je));
    var ln = {}, In = {}, Wn = !1;
    function ia(t) {
      oa(In, t), Wn || (Wn = !0, setTimeout(function() {
        Wn = !1, Tt(In, !(In = {}));
      }, 0));
    }
    function Tt(t, a) {
      a === void 0 && (a = !1);
      var i = /* @__PURE__ */ new Set();
      if (t.all) for (var l = 0, p = Object.values(ln); l < p.length; l++) sa(b = p[l], t, i, a);
      else for (var h in t) {
        var v, b, h = /^idb\:\/\/(.*)\/(.*)\//.exec(h);
        h && (v = h[1], h = h[2], b = ln["idb://".concat(v, "/").concat(h)]) && sa(b, t, i, a);
      }
      i.forEach(function(T) {
        return T();
      });
    }
    function sa(t, a, i, l) {
      for (var p = [], h = 0, v = Object.entries(t.queries.query); h < v.length; h++) {
        for (var b = v[h], T = b[0], L = [], A = 0, I = b[1]; A < I.length; A++) {
          var W = I[A];
          Ta(a, W.obsSet) ? W.subscribers.forEach(function(K) {
            return i.add(K);
          }) : l && L.push(W);
        }
        l && p.push([T, L]);
      }
      if (l) for (var D = 0, _ = p; D < _.length; D++) {
        var E = _[D], T = E[0], L = E[1];
        t.queries.query[T] = L;
      }
    }
    function Pr(t) {
      var a = t._state, i = t._deps.indexedDB;
      if (a.isBeingOpened || t.idbdb) return a.dbReadyPromise.then(function() {
        return a.dbOpenError ? jt(a.dbOpenError) : t;
      });
      a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
      var l = a.openCanceller, p = Math.round(10 * t.verno), h = !1;
      function v() {
        if (a.openCanceller !== l) throw new ke.DatabaseClosed("db.open() was cancelled");
      }
      function b() {
        return new V(function(W, D) {
          if (v(), !i) throw new ke.MissingAPI();
          var _ = t.name, E = a.autoSchema || !p ? i.open(_) : i.open(_, p);
          if (!E) throw new ke.MissingAPI();
          E.onerror = Ht(D), E.onblocked = Mt(t._fireOnBlocked), E.onupgradeneeded = Mt(function(K) {
            var H;
            A = E.transaction, a.autoSchema && !t._options.allowEmptyDB ? (E.onerror = un, A.abort(), E.result.close(), (H = i.deleteDatabase(_)).onsuccess = H.onerror = Mt(function() {
              D(new ke.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
            })) : (A.onerror = Ht(D), H = K.oldVersion > Math.pow(2, 62) ? 0 : K.oldVersion, I = H < 1, t.idbdb = E.result, h && yo(t, A), ea(t, H / 10, A, D));
          }, D), E.onsuccess = Mt(function() {
            A = null;
            var K, H, F, ee, le, ye, fe = t.idbdb = E.result, de = Z(fe.objectStoreNames);
            if (0 < de.length) try {
              var Ee = fe.transaction((le = de).length === 1 ? le[0] : le, "readonly");
              if (a.autoSchema) ye = fe, ee = Ee, (F = t).verno = ye.version / 10, ee = F._dbSchema = Ea(0, ye, ee), F._storeNames = Z(ye.objectStoreNames, 0), Xn(F, [F._allTables], P(ee), ee);
              else if ($a(t, t._dbSchema, Ee), H = Ee, ((H = ja(Ea(0, (K = t).idbdb, H), K._dbSchema)).add.length || H.change.some(function(xe) {
                return xe.add.length || xe.change.length;
              })) && !h) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), fe.close(), p = fe.version + 1, h = !0, W(b());
              Qt(t, Ee);
            } catch {
            }
            cn.push(t), fe.onversionchange = Mt(function(xe) {
              a.vcFired = !0, t.on("versionchange").fire(xe);
            }), fe.onclose = Mt(function() {
              t.close({ disableAutoOpen: !1 });
            }), I && (de = t._deps, le = _, za(ye = de.indexedDB) || le === wa || Ga(ye, de.IDBKeyRange).put({ name: le }).catch(M)), W();
          }, D);
        }).catch(function(W) {
          switch (W == null ? void 0 : W.name) {
            case "UnknownError":
              if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), b();
              break;
            case "VersionError":
              if (0 < p) return p = 0, b();
          }
          return V.reject(W);
        });
      }
      var T, L = a.dbReadyResolve, A = null, I = !1;
      return V.race([l, (typeof navigator > "u" ? V.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(W) {
        function D() {
          return indexedDB.databases().finally(W);
        }
        T = setInterval(D, 100), D();
      }).finally(function() {
        return clearInterval(T);
      }) : Promise.resolve()).then(b)]).then(function() {
        return v(), a.onReadyBeingFired = [], V.resolve(tn(function() {
          return t.on.ready.fire(t.vip);
        })).then(function W() {
          var D;
          if (0 < a.onReadyBeingFired.length) return D = a.onReadyBeingFired.reduce(Ae, M), a.onReadyBeingFired = [], V.resolve(tn(function() {
            return D(t.vip);
          })).then(W);
        });
      }).finally(function() {
        a.openCanceller === l && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
      }).catch(function(W) {
        a.dbOpenError = W;
        try {
          A && A.abort();
        } catch {
        }
        return l === a.openCanceller && t._close(), jt(W);
      }).finally(function() {
        a.openComplete = !0, L();
      }).then(function() {
        var W;
        return I && (W = {}, t.tables.forEach(function(D) {
          D.schema.indexes.forEach(function(_) {
            _.name && (W["idb://".concat(t.name, "/").concat(D.name, "/").concat(_.name)] = new Yt(-1 / 0, [[[]]]));
          }), W["idb://".concat(t.name, "/").concat(D.name, "/")] = W["idb://".concat(t.name, "/").concat(D.name, "/:dels")] = new Yt(-1 / 0, [[[]]]);
        }), Ot(Mn).fire(W), Tt(W, !0)), t;
      });
    }
    function xr(t) {
      function a(h) {
        return t.next(h);
      }
      var i = p(a), l = p(function(h) {
        return t.throw(h);
      });
      function p(h) {
        return function(b) {
          var b = h(b), T = b.value;
          return b.done ? T : T && typeof T.then == "function" ? T.then(i, l) : x(T) ? Promise.all(T).then(i, l) : i(T);
        };
      }
      return p(a)();
    }
    function qa(t, a, i) {
      for (var l = x(t) ? t.slice() : [t], p = 0; p < i; ++p) l.push(a);
      return l;
    }
    var zr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
      return d(d({}, t), { table: function(l) {
        var i = t.table(l), l = i.schema, p = {}, h = [];
        function v(W, D, _) {
          var F = jn(W), E = p[F] = p[F] || [], K = W == null ? 0 : typeof W == "string" ? 1 : W.length, H = 0 < D, F = d(d({}, _), { name: H ? "".concat(F, "(virtual-from:").concat(_.name, ")") : _.name, lowLevelIndex: _, isVirtual: H, keyTail: D, keyLength: K, extractKey: Dn(W), unique: !H && _.unique });
          return E.push(F), F.isPrimaryKey || h.push(F), 1 < K && v(K === 2 ? W[0] : W.slice(0, K - 1), D + 1, _), E.sort(function(ee, le) {
            return ee.keyTail - le.keyTail;
          }), F;
        }
        var b = v(l.primaryKey.keyPath, 0, l.primaryKey);
        p[":id"] = [b];
        for (var T = 0, L = l.indexes; T < L.length; T++) {
          var A = L[T];
          v(A.keyPath, 0, A);
        }
        function I(W) {
          var D, _ = W.query.index;
          return _.isVirtual ? d(d({}, W), { query: { index: _.lowLevelIndex, range: (D = W.query.range, _ = _.keyTail, { type: D.type === 1 ? 2 : D.type, lower: qa(D.lower, D.lowerOpen ? t.MAX_KEY : t.MIN_KEY, _), lowerOpen: !0, upper: qa(D.upper, D.upperOpen ? t.MIN_KEY : t.MAX_KEY, _), upperOpen: !0 }) } }) : W;
        }
        return d(d({}, i), { schema: d(d({}, l), { primaryKey: b, indexes: h, getIndexByKeyPath: function(W) {
          return (W = p[jn(W)]) && W[0];
        } }), count: function(W) {
          return i.count(I(W));
        }, query: function(W) {
          return i.query(I(W));
        }, openCursor: function(W) {
          var D = W.query.index, _ = D.keyTail, E = D.keyLength;
          return D.isVirtual ? i.openCursor(I(W)).then(function(H) {
            return H && K(H);
          }) : i.openCursor(W);
          function K(H) {
            return Object.create(H, { continue: { value: function(F) {
              F != null ? H.continue(qa(F, W.reverse ? t.MAX_KEY : t.MIN_KEY, _)) : W.unique ? H.continue(H.key.slice(0, E).concat(W.reverse ? t.MIN_KEY : t.MAX_KEY, _)) : H.continue();
            } }, continuePrimaryKey: { value: function(F, ee) {
              H.continuePrimaryKey(qa(F, t.MAX_KEY, _), ee);
            } }, primaryKey: { get: function() {
              return H.primaryKey;
            } }, key: { get: function() {
              var F = H.key;
              return E === 1 ? F[0] : F.slice(0, E);
            } }, value: { get: function() {
              return H.value;
            } } });
          }
        } });
      } });
    } };
    function Cr(t, a, i, l) {
      return i = i || {}, l = l || "", P(t).forEach(function(p) {
        var h, v, b;
        te(a, p) ? (h = t[p], v = a[p], typeof h == "object" && typeof v == "object" && h && v ? (b = Oe(h)) !== Oe(v) ? i[l + p] = a[p] : b === "Object" ? Cr(h, v, i, l + p + ".") : h !== v && (i[l + p] = a[p]) : h !== v && (i[l + p] = a[p])) : i[l + p] = void 0;
      }), P(a).forEach(function(p) {
        te(t, p) || (i[l + p] = a[p]);
      }), i;
    }
    function Ja(t, a) {
      return a.type === "delete" ? a.keys : a.keys || a.values.map(t.extractKey);
    }
    var vo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), l = i.schema.primaryKey;
        return d(d({}, i), { mutate: function(p) {
          var h = Te.trans, v = h.table(a).hook, b = v.deleting, T = v.creating, L = v.updating;
          switch (p.type) {
            case "add":
              if (T.fire === M) break;
              return h._promise("readwrite", function() {
                return A(p);
              }, !0);
            case "put":
              if (T.fire === M && L.fire === M) break;
              return h._promise("readwrite", function() {
                return A(p);
              }, !0);
            case "delete":
              if (b.fire === M) break;
              return h._promise("readwrite", function() {
                return A(p);
              }, !0);
            case "deleteRange":
              if (b.fire === M) break;
              return h._promise("readwrite", function() {
                return function I(W, D, _) {
                  return i.query({ trans: W, values: !1, query: { index: l, range: D }, limit: _ }).then(function(E) {
                    var K = E.result;
                    return A({ type: "delete", keys: K, trans: W }).then(function(H) {
                      return 0 < H.numFailures ? Promise.reject(H.failures[0]) : K.length < _ ? { failures: [], numFailures: 0, lastResult: void 0 } : I(W, d(d({}, D), { lower: K[K.length - 1], lowerOpen: !0 }), _);
                    });
                  });
                }(p.trans, p.range, 1e4);
              }, !0);
          }
          return i.mutate(p);
          function A(I) {
            var W, D, _, E = Te.trans, K = I.keys || Ja(l, I);
            if (K) return (I = I.type === "add" || I.type === "put" ? d(d({}, I), { keys: K }) : d({}, I)).type !== "delete" && (I.values = y([], I.values)), I.keys && (I.keys = y([], I.keys)), W = i, _ = K, ((D = I).type === "add" ? Promise.resolve([]) : W.getMany({ trans: D.trans, keys: _, cache: "immutable" })).then(function(H) {
              var F = K.map(function(ee, le) {
                var ye, fe, de, Ee = H[le], xe = { onerror: null, onsuccess: null };
                return I.type === "delete" ? b.fire.call(xe, ee, Ee, E) : I.type === "add" || Ee === void 0 ? (ye = T.fire.call(xe, ee, I.values[le], E), ee == null && ye != null && (I.keys[le] = ee = ye, l.outbound || se(I.values[le], l.keyPath, ee))) : (ye = Cr(Ee, I.values[le]), (fe = L.fire.call(xe, ye, ee, Ee, E)) && (de = I.values[le], Object.keys(fe).forEach(function(he) {
                  te(de, he) ? de[he] = fe[he] : se(de, he, fe[he]);
                }))), xe;
              });
              return i.mutate(I).then(function(ee) {
                for (var le = ee.failures, ye = ee.results, fe = ee.numFailures, ee = ee.lastResult, de = 0; de < K.length; ++de) {
                  var Ee = (ye || K)[de], xe = F[de];
                  Ee == null ? xe.onerror && xe.onerror(le[de]) : xe.onsuccess && xe.onsuccess(I.type === "put" && H[de] ? I.values[de] : Ee);
                }
                return { failures: le, results: ye, numFailures: fe, lastResult: ee };
              }).catch(function(ee) {
                return F.forEach(function(le) {
                  return le.onerror && le.onerror(ee);
                }), Promise.reject(ee);
              });
            });
            throw new Error("Keys missing");
          }
        } });
      } });
    } };
    function qr(t, a, i) {
      try {
        if (!a || a.keys.length < t.length) return null;
        for (var l = [], p = 0, h = 0; p < a.keys.length && h < t.length; ++p) me(a.keys[p], t[h]) === 0 && (l.push(i ? ut(a.values[p]) : a.values[p]), ++h);
        return l.length === t.length ? l : null;
      } catch {
        return null;
      }
    }
    var ko = { stack: "dbcore", level: -1, create: function(t) {
      return { table: function(a) {
        var i = t.table(a);
        return d(d({}, i), { getMany: function(l) {
          var p;
          return l.cache ? (p = qr(l.keys, l.trans._cache, l.cache === "clone")) ? V.resolve(p) : i.getMany(l).then(function(h) {
            return l.trans._cache = { keys: l.keys, values: l.cache === "clone" ? ut(h) : h }, h;
          }) : i.getMany(l);
        }, mutate: function(l) {
          return l.type !== "add" && (l.trans._cache = null), i.mutate(l);
        } });
      } };
    } };
    function Ya(t, a) {
      return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
    }
    function _a(t, a) {
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
    var Ra = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
      var a = t.schema.name, i = new Yt(t.MIN_KEY, t.MAX_KEY);
      return d(d({}, t), { transaction: function(l, p, h) {
        if (Te.subscr && p !== "readonly") throw new ke.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Te.querier));
        return t.transaction(l, p, h);
      }, table: function(l) {
        function p(K) {
          var E, K = K.query;
          return [E = K.index, new Yt((E = (K = K.range).lower) != null ? E : t.MIN_KEY, (E = K.upper) != null ? E : t.MAX_KEY)];
        }
        var h = t.table(l), v = h.schema, b = v.primaryKey, T = v.indexes, L = b.extractKey, A = b.outbound, I = b.autoIncrement && T.filter(function(_) {
          return _.compound && _.keyPath.includes(b.keyPath);
        }), W = d(d({}, h), { mutate: function(_) {
          function E(_e) {
            return _e = "idb://".concat(a, "/").concat(l, "/").concat(_e), le[_e] || (le[_e] = new Yt());
          }
          var K, H, F, ee = _.trans, le = _.mutatedParts || (_.mutatedParts = {}), ye = E(""), fe = E(":dels"), de = _.type, xe = _.type === "deleteRange" ? [_.range] : _.type === "delete" ? [_.keys] : _.values.length < 50 ? [Ja(b, _).filter(function(_e) {
            return _e;
          }), _.values] : [], Ee = xe[0], xe = xe[1], he = _.trans._cache;
          return x(Ee) ? (ye.addKeys(Ee), (de = de === "delete" || Ee.length === xe.length ? qr(Ee, he) : null) || fe.addKeys(Ee), (de || xe) && (K = E, H = de, F = xe, v.indexes.forEach(function(_e) {
            var st = K(_e.name || "");
            function ht(nt) {
              return nt != null ? _e.extractKey(nt) : null;
            }
            function Q(nt) {
              _e.multiEntry && x(nt) ? nt.forEach(function(Dt) {
                return st.addKey(Dt);
              }) : st.addKey(nt);
            }
            (H || F).forEach(function(nt, Wt) {
              var rn = H && ht(H[Wt]), Wt = F && ht(F[Wt]);
              me(rn, Wt) !== 0 && (rn != null && Q(rn), Wt != null) && Q(Wt);
            });
          }))) : Ee ? (xe = { from: (he = Ee.lower) != null ? he : t.MIN_KEY, to: (de = Ee.upper) != null ? de : t.MAX_KEY }, fe.add(xe), ye.add(xe)) : (ye.add(i), fe.add(i), v.indexes.forEach(function(_e) {
            return E(_e.name).add(i);
          })), h.mutate(_).then(function(_e) {
            return !Ee || _.type !== "add" && _.type !== "put" || (ye.addKeys(_e.results), I && I.forEach(function(st) {
              for (var ht = _.values.map(function(rn) {
                return st.extractKey(rn);
              }), Q = st.keyPath.findIndex(function(rn) {
                return rn === b.keyPath;
              }), nt = 0, Dt = _e.results.length; nt < Dt; ++nt) ht[nt][Q] = _e.results[nt];
              E(st.name).addKeys(ht);
            })), ee.mutatedParts = oa(ee.mutatedParts || {}, le), _e;
          });
        } }), D = { get: function(_) {
          return [b, new Yt(_.key)];
        }, getMany: function(_) {
          return [b, new Yt().addKeys(_.keys)];
        }, count: p, query: p, openCursor: p };
        return P(D).forEach(function(_) {
          W[_] = function(E) {
            var K = Te.subscr, H = !!K, F = Ya(Te, h) && _a(_, E) ? E.obsSet = {} : K;
            if (H) {
              var ee, K = function(xe) {
                return xe = "idb://".concat(a, "/").concat(l, "/").concat(xe), F[xe] || (F[xe] = new Yt());
              }, le = K(""), ye = K(":dels"), H = D[_](E), fe = H[0], H = H[1];
              if ((_ === "query" && fe.isPrimaryKey && !E.values ? ye : K(fe.name || "")).add(H), !fe.isPrimaryKey) {
                if (_ !== "count") return ee = _ === "query" && A && E.values && h.query(d(d({}, E), { values: !1 })), h[_].apply(this, arguments).then(function(xe) {
                  if (_ === "query") {
                    if (A && E.values) return ee.then(function(ht) {
                      return ht = ht.result, le.addKeys(ht), xe;
                    });
                    var he = E.values ? xe.result.map(L) : xe.result;
                    (E.values ? le : ye).addKeys(he);
                  } else {
                    var _e, st;
                    if (_ === "openCursor") return st = E.values, (_e = xe) && Object.create(_e, { key: { get: function() {
                      return ye.addKey(_e.primaryKey), _e.key;
                    } }, primaryKey: { get: function() {
                      var ht = _e.primaryKey;
                      return ye.addKey(ht), ht;
                    } }, value: { get: function() {
                      return st && le.addKey(_e.primaryKey), _e.value;
                    } } });
                  }
                  return xe;
                });
                ye.add(i);
              }
            }
            return h[_].apply(this, arguments);
          };
        }), W;
      } });
    } };
    function Za(t, a, i) {
      var l;
      return i.numFailures === 0 ? a : a.type === "deleteRange" || (l = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1, i.numFailures === l) ? null : (l = d({}, a), x(l.keys) && (l.keys = l.keys.filter(function(p, h) {
        return !(h in i.failures);
      })), "values" in l && x(l.values) && (l.values = l.values.filter(function(p, h) {
        return !(h in i.failures);
      })), l);
    }
    function Mr(t, a) {
      return i = t, ((l = a).lower === void 0 || (l.lowerOpen ? 0 < me(i, l.lower) : 0 <= me(i, l.lower))) && (i = t, (l = a).upper === void 0 || (l.upperOpen ? me(i, l.upper) < 0 : me(i, l.upper) <= 0));
      var i, l;
    }
    function ca(t, a, i, l, p, h) {
      var v, b, T, L, A, I;
      return !i || i.length === 0 || (v = a.query.index, b = v.multiEntry, T = a.query.range, L = l.schema.primaryKey.extractKey, A = v.extractKey, I = (v.lowLevelIndex || v).extractKey, (l = i.reduce(function(W, D) {
        var _ = W, E = [];
        if (D.type === "add" || D.type === "put") for (var K = new Yt(), H = D.values.length - 1; 0 <= H; --H) {
          var F, ee = D.values[H], le = L(ee);
          !K.hasKey(le) && (F = A(ee), b && x(F) ? F.some(function(xe) {
            return Mr(xe, T);
          }) : Mr(F, T)) && (K.addKey(le), E.push(ee));
        }
        switch (D.type) {
          case "add":
            var ye = new Yt().addKeys(a.values ? W.map(function(he) {
              return L(he);
            }) : W), _ = W.concat(a.values ? E.filter(function(he) {
              return he = L(he), !ye.hasKey(he) && (ye.addKey(he), !0);
            }) : E.map(function(he) {
              return L(he);
            }).filter(function(he) {
              return !ye.hasKey(he) && (ye.addKey(he), !0);
            }));
            break;
          case "put":
            var fe = new Yt().addKeys(D.values.map(function(he) {
              return L(he);
            }));
            _ = W.filter(function(he) {
              return !fe.hasKey(a.values ? L(he) : he);
            }).concat(a.values ? E : E.map(function(he) {
              return L(he);
            }));
            break;
          case "delete":
            var de = new Yt().addKeys(D.keys);
            _ = W.filter(function(he) {
              return !de.hasKey(a.values ? L(he) : he);
            });
            break;
          case "deleteRange":
            var Ee = D.range;
            _ = W.filter(function(he) {
              return !Mr(L(he), Ee);
            });
        }
        return _;
      }, t)) === t) ? t : (l.sort(function(W, D) {
        return me(I(W), I(D)) || me(L(W), L(D));
      }), a.limit && a.limit < 1 / 0 && (l.length > a.limit ? l.length = a.limit : t.length === a.limit && l.length < a.limit && (p.dirty = !0)), h ? Object.freeze(l) : l);
    }
    function Jr(t, a) {
      return me(t.lower, a.lower) === 0 && me(t.upper, a.upper) === 0 && !!t.lowerOpen == !!a.lowerOpen && !!t.upperOpen == !!a.upperOpen;
    }
    function Yr(t, a) {
      return ((i, l, p, h) => {
        if (i === void 0) return l !== void 0 ? -1 : 0;
        if (l === void 0) return 1;
        if ((i = me(i, l)) === 0) {
          if (p && h) return 0;
          if (p) return 1;
          if (h) return -1;
        }
        return i;
      })(t.lower, a.lower, t.lowerOpen, a.lowerOpen) <= 0 && 0 <= ((i, l, p, h) => {
        if (i === void 0) return l !== void 0 ? 1 : 0;
        if (l === void 0) return -1;
        if ((i = me(i, l)) === 0) {
          if (p && h) return 0;
          if (p) return -1;
          if (h) return 1;
        }
        return i;
      })(t.upper, a.upper, t.upperOpen, a.upperOpen);
    }
    function Ir(t, a, i, l) {
      t.subscribers.add(i), l.addEventListener("abort", function() {
        var p, h;
        t.subscribers.delete(i), t.subscribers.size === 0 && (p = t, h = a, setTimeout(function() {
          p.subscribers.size === 0 && ot(h, p);
        }, 3e3));
      });
    }
    var ua = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
      var a = t.schema.name;
      return d(d({}, t), { transaction: function(i, l, p) {
        var h, v, b = t.transaction(i, l, p);
        return l === "readwrite" && (p = (h = new AbortController()).signal, b.addEventListener("abort", (v = function(T) {
          return function() {
            if (h.abort(), l === "readwrite") {
              for (var L = /* @__PURE__ */ new Set(), A = 0, I = i; A < I.length; A++) {
                var W = I[A], D = ln["idb://".concat(a, "/").concat(W)];
                if (D) {
                  var _ = t.table(W), E = D.optimisticOps.filter(function(_e) {
                    return _e.trans === b;
                  });
                  if (b._explicit && T && b.mutatedParts) for (var K = 0, H = Object.values(D.queries.query); K < H.length; K++) for (var F = 0, ee = (fe = H[K]).slice(); F < ee.length; F++) Ta((de = ee[F]).obsSet, b.mutatedParts) && (ot(fe, de), de.subscribers.forEach(function(_e) {
                    return L.add(_e);
                  }));
                  else if (0 < E.length) {
                    D.optimisticOps = D.optimisticOps.filter(function(_e) {
                      return _e.trans !== b;
                    });
                    for (var le = 0, ye = Object.values(D.queries.query); le < ye.length; le++) for (var fe, de, Ee, xe = 0, he = (fe = ye[le]).slice(); xe < he.length; xe++) (de = he[xe]).res != null && b.mutatedParts && (T && !de.dirty ? (Ee = Object.isFrozen(de.res), Ee = ca(de.res, de.req, E, _, de, Ee), de.dirty ? (ot(fe, de), de.subscribers.forEach(function(_e) {
                      return L.add(_e);
                    })) : Ee !== de.res && (de.res = Ee, de.promise = V.resolve({ result: Ee }))) : (de.dirty && ot(fe, de), de.subscribers.forEach(function(_e) {
                      return L.add(_e);
                    })));
                  }
                }
              }
              L.forEach(function(_e) {
                return _e();
              });
            }
          };
        })(!1), { signal: p }), b.addEventListener("error", v(!1), { signal: p }), b.addEventListener("complete", v(!0), { signal: p })), b;
      }, table: function(i) {
        var l = t.table(i), p = l.schema.primaryKey;
        return d(d({}, l), { mutate: function(h) {
          var v, b = Te.trans;
          return !p.outbound && b.db._options.cache !== "disabled" && !b.explicit && b.idbtrans.mode === "readwrite" && (v = ln["idb://".concat(a, "/").concat(i)]) ? (b = l.mutate(h), h.type !== "add" && h.type !== "put" || !(50 <= h.values.length || Ja(p, h).some(function(T) {
            return T == null;
          })) ? (v.optimisticOps.push(h), h.mutatedParts && ia(h.mutatedParts), b.then(function(T) {
            0 < T.numFailures && (ot(v.optimisticOps, h), (T = Za(0, h, T)) && v.optimisticOps.push(T), h.mutatedParts) && ia(h.mutatedParts);
          }), b.catch(function() {
            ot(v.optimisticOps, h), h.mutatedParts && ia(h.mutatedParts);
          })) : b.then(function(T) {
            var L = Za(0, d(d({}, h), { values: h.values.map(function(A, I) {
              var W;
              return T.failures[I] ? A : (se(W = (W = p.keyPath) != null && W.includes(".") ? ut(A) : d({}, A), p.keyPath, T.results[I]), W);
            }) }), T);
            v.optimisticOps.push(L), queueMicrotask(function() {
              return h.mutatedParts && ia(h.mutatedParts);
            });
          }), b) : l.mutate(h);
        }, query: function(h) {
          var v, b, T, L, A, I, W;
          return Ya(Te, l) && _a("query", h) ? (v = ((T = Te.trans) == null ? void 0 : T.db._options.cache) === "immutable", b = (T = Te).requery, T = T.signal, I = ((D, _, E, K) => {
            var H = ln["idb://".concat(D, "/").concat(_)];
            if (!H) return [];
            if (!(D = H.queries[E])) return [null, !1, H, null];
            var F = D[(K.query ? K.query.index.name : null) || ""];
            if (!F) return [null, !1, H, null];
            switch (E) {
              case "query":
                var ee = F.find(function(le) {
                  return le.req.limit === K.limit && le.req.values === K.values && Jr(le.req.query.range, K.query.range);
                });
                return ee ? [ee, !0, H, F] : [F.find(function(le) {
                  return ("limit" in le.req ? le.req.limit : 1 / 0) >= K.limit && (!K.values || le.req.values) && Yr(le.req.query.range, K.query.range);
                }), !1, H, F];
              case "count":
                return ee = F.find(function(le) {
                  return Jr(le.req.query.range, K.query.range);
                }), [ee, !!ee, H, F];
            }
          })(a, i, "query", h), W = I[0], L = I[2], A = I[3], W && I[1] ? W.obsSet = h.obsSet : (I = l.query(h).then(function(D) {
            var _ = D.result;
            if (W && (W.res = _), v) {
              for (var E = 0, K = _.length; E < K; ++E) Object.freeze(_[E]);
              Object.freeze(_);
            } else D.result = ut(_);
            return D;
          }).catch(function(D) {
            return A && W && ot(A, W), Promise.reject(D);
          }), W = { obsSet: h.obsSet, promise: I, subscribers: /* @__PURE__ */ new Set(), type: "query", req: h, dirty: !1 }, A ? A.push(W) : (A = [W], (L = L || (ln["idb://".concat(a, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[h.query.index.name || ""] = A)), Ir(W, A, b, T), W.promise.then(function(D) {
            return { result: ca(D.result, h, L == null ? void 0 : L.optimisticOps, l, W, v) };
          })) : l.query(h);
        } });
      } });
    } };
    function la(t, a) {
      return new Proxy(t, { get: function(i, l, p) {
        return l === "db" ? a : Reflect.get(i, l, p);
      } });
    }
    Nt.prototype.version = function(t) {
      if (isNaN(t) || t < 0.1) throw new ke.Type("Given version is not a positive number");
      if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new ke.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, t);
      var a = this._versions, i = a.filter(function(l) {
        return l._cfg.version === t;
      })[0];
      return i || (i = new this.Version(t), a.push(i), a.sort(vr), i.stores({}), this._state.autoSchema = !1), i;
    }, Nt.prototype._whenReady = function(t) {
      var a = this;
      return this.idbdb && (this._state.openComplete || Te.letThrough || this._vip) ? t() : new V(function(i, l) {
        if (a._state.openComplete) return l(new ke.DatabaseClosed(a._state.dbOpenError));
        if (!a._state.isBeingOpened) {
          if (!a._state.autoOpen) return void l(new ke.DatabaseClosed());
          a.open().catch(M);
        }
        a._state.dbReadyPromise.then(i, l);
      }).then(t);
    }, Nt.prototype.use = function(p) {
      var a = p.stack, i = p.create, l = p.level, p = p.name, h = (p && this.unuse({ stack: a, name: p }), this._middlewares[a] || (this._middlewares[a] = []));
      return h.push({ stack: a, create: i, level: l ?? 10, name: p }), h.sort(function(v, b) {
        return v.level - b.level;
      }), this;
    }, Nt.prototype.unuse = function(t) {
      var a = t.stack, i = t.name, l = t.create;
      return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(p) {
        return l ? p.create !== l : !!i && p.name !== i;
      })), this;
    }, Nt.prototype.open = function() {
      var t = this;
      return _n(Ct, function() {
        return Pr(t);
      });
    }, Nt.prototype._close = function() {
      this.on.close.fire(new CustomEvent("close"));
      var t = this._state, a = cn.indexOf(this);
      if (0 <= a && cn.splice(a, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      t.isBeingOpened || (t.dbReadyPromise = new V(function(i) {
        t.dbReadyResolve = i;
      }), t.openCanceller = new V(function(i, l) {
        t.cancelOpen = l;
      }));
    }, Nt.prototype.close = function(a) {
      var a = (a === void 0 ? { disableAutoOpen: !0 } : a).disableAutoOpen, i = this._state;
      a ? (i.isBeingOpened && i.cancelOpen(new ke.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new ke.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
    }, Nt.prototype.delete = function(t) {
      var a = this, i = (t === void 0 && (t = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), l = this._state;
      return new V(function(p, h) {
        function v() {
          a.close(t);
          var b = a._deps.indexedDB.deleteDatabase(a.name);
          b.onsuccess = Mt(function() {
            var T, L, A;
            T = a._deps, L = a.name, za(A = T.indexedDB) || L === wa || Ga(A, T.IDBKeyRange).delete(L).catch(M), p();
          }), b.onerror = Ht(h), b.onblocked = a._fireOnBlocked;
        }
        if (i) throw new ke.InvalidArgument("Invalid closeOptions argument to db.delete()");
        l.isBeingOpened ? l.dbReadyPromise.then(v) : v();
      });
    }, Nt.prototype.backendDB = function() {
      return this.idbdb;
    }, Nt.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, Nt.prototype.hasBeenClosed = function() {
      var t = this._state.dbOpenError;
      return t && t.name === "DatabaseClosed";
    }, Nt.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, Nt.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(Nt.prototype, "tables", { get: function() {
      var t = this;
      return P(this._allTables).map(function(a) {
        return t._allTables[a];
      });
    }, enumerable: !1, configurable: !0 }), Nt.prototype.transaction = function() {
      var t = (function(a, i, l) {
        var p = arguments.length;
        if (p < 2) throw new ke.InvalidArgument("Too few arguments");
        for (var h = new Array(p - 1); --p; ) h[p - 1] = arguments[p];
        return l = h.pop(), [a, tt(h), l];
      }).apply(this, arguments);
      return this._transaction.apply(this, t);
    }, Nt.prototype._transaction = function(t, a, i) {
      var l, p, h = this, v = Te.trans, b = (v && v.db === this && t.indexOf("!") === -1 || (v = null), t.indexOf("?") !== -1);
      t = t.replace("!", "").replace("?", "");
      try {
        if (p = a.map(function(L) {
          if (L = L instanceof h.Table ? L.name : L, typeof L != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return L;
        }), t == "r" || t === Fa) l = Fa;
        else {
          if (t != "rw" && t != hr) throw new ke.InvalidArgument("Invalid transaction mode: " + t);
          l = hr;
        }
        if (v) {
          if (v.mode === Fa && l === hr) {
            if (!b) throw new ke.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            v = null;
          }
          v && p.forEach(function(L) {
            if (v && v.storeNames.indexOf(L) === -1) {
              if (!b) throw new ke.SubTransaction("Table " + L + " not included in parent transaction.");
              v = null;
            }
          }), b && v && !v.active && (v = null);
        }
      } catch (L) {
        return v ? v._promise(null, function(A, I) {
          I(L);
        }) : jt(L);
      }
      var T = (function L(A, I, W, D, _) {
        return V.resolve().then(function() {
          var F = Te.transless || Te, E = A._createTransaction(I, W, A._dbSchema, D), F = (E.explicit = !0, { trans: E, transless: F });
          if (D) E.idbtrans = D.idbtrans;
          else try {
            E.create(), E.idbtrans._explicit = !0, A._state.PR1398_maxLoop = 3;
          } catch (ee) {
            return ee.name === Bt.InvalidState && A.isOpen() && 0 < --A._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), A.close({ disableAutoOpen: !1 }), A.open().then(function() {
              return L(A, I, W, null, _);
            })) : jt(ee);
          }
          var K, H = O(_), F = (H && ie(), V.follow(function() {
            var ee;
            (K = _.call(E, E)) && (H ? (ee = Sn.bind(null, null), K.then(ee, ee)) : typeof K.next == "function" && typeof K.throw == "function" && (K = xr(K)));
          }, F));
          return (K && typeof K.then == "function" ? V.resolve(K).then(function(ee) {
            return E.active ? ee : jt(new ke.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : F.then(function() {
            return K;
          })).then(function(ee) {
            return D && E._resolve(), E._completion.then(function() {
              return ee;
            });
          }).catch(function(ee) {
            return E._reject(ee), jt(ee);
          });
        });
      }).bind(null, this, l, p, v, i);
      return v ? v._promise(l, T, "lock") : Te.trans ? _n(Te.transless, function() {
        return h._whenReady(T);
      }) : this._whenReady(T);
    }, Nt.prototype.table = function(t) {
      if (te(this._allTables, t)) return this._allTables[t];
      throw new ke.InvalidTable("Table ".concat(t, " does not exist"));
    };
    var An = Nt;
    function Nt(t, a) {
      var i, l, p, h, v, b = this, T = (this._middlewares = {}, this.verno = 0, Nt.dependencies), T = (this._options = a = d({ addons: Nt.addons, autoOpen: !0, indexedDB: T.indexedDB, IDBKeyRange: T.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, a.addons), L = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: M, dbReadyPromise: null, cancelOpen: M, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen }), A = (L.dbReadyPromise = new V(function(I) {
        L.dbReadyResolve = I;
      }), L.openCanceller = new V(function(I, W) {
        L.cancelOpen = W;
      }), this._state = L, this.name = t, this.on = ka(this, "populate", "blocked", "versionchange", "close", { ready: [Ae, M] }), this.once = function(I, W) {
        var D = function() {
          for (var _ = [], E = 0; E < arguments.length; E++) _[E] = arguments[E];
          b.on(I).unsubscribe(D), W.apply(b, _);
        };
        return b.on(I, D);
      }, this.on.ready.subscribe = Ie(this.on.ready.subscribe, function(I) {
        return function(W, D) {
          Nt.vip(function() {
            var _, E = b._state;
            E.openComplete ? (E.dbOpenError || V.resolve().then(W), D && I(W)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(W), D && I(W)) : (I(W), _ = b, D || I(function K() {
              _.on.ready.unsubscribe(W), _.on.ready.unsubscribe(K);
            }));
          });
        };
      }), this.Collection = (i = this, Yn(wr.prototype, function(K, E) {
        this.db = i;
        var D = pe, _ = null;
        if (E) try {
          D = E();
        } catch (F) {
          _ = F;
        }
        var E = K._ctx, K = E.table, H = K.hook.reading.fire;
        this._ctx = { table: K, index: E.index, isPrimKey: !E.index || K.schema.primKey.keyPath && E.index === K.schema.primKey.name, range: D, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: _, or: E.or, valueMapper: H !== z ? H : null };
      })), this.Table = (l = this, Yn(va.prototype, function(I, W, D) {
        this.db = l, this._tx = D, this.name = I, this.schema = W, this.hook = l._allTables[I] ? l._allTables[I].hook : ka(null, { creating: [Fe, M], reading: [G, z], updating: [ze, M], deleting: [Be, M] });
      })), this.Transaction = (p = this, Yn(Rn.prototype, function(I, W, D, _, E) {
        var K = this;
        I !== "readonly" && W.forEach(function(H) {
          H = (H = D[H]) == null ? void 0 : H.yProps, H && (W = W.concat(H.map(function(F) {
            return F.updatesTable;
          })));
        }), this.db = p, this.mode = I, this.storeNames = W, this.schema = D, this.chromeTransactionDurability = _, this.idbtrans = null, this.on = ka(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new V(function(H, F) {
          K._resolve = H, K._reject = F;
        }), this._completion.then(function() {
          K.active = !1, K.on.complete.fire();
        }, function(H) {
          var F = K.active;
          return K.active = !1, K.on.error.fire(H), K.parent ? K.parent._reject(H) : F && K.idbtrans && K.idbtrans.abort(), jt(H);
        });
      })), this.Version = (h = this, Yn(bo.prototype, function(I) {
        this.db = h, this._cfg = { version: I, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (v = this, Yn(Kn.prototype, function(I, W, D) {
        if (this.db = v, this._ctx = { table: I, index: W === ":id" ? null : W, or: D }, this._cmp = this._ascending = me, this._descending = function(_, E) {
          return me(E, _);
        }, this._max = function(_, E) {
          return 0 < me(_, E) ? _ : E;
        }, this._min = function(_, E) {
          return me(_, E) < 0 ? _ : E;
        }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new ke.MissingAPI();
      })), this.on("versionchange", function(I) {
        0 < I.newVersion ? console.warn("Another connection wants to upgrade database '".concat(b.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(b.name, "'. Closing db now to resume the delete request.")), b.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(I) {
        !I.newVersion || I.newVersion < I.oldVersion ? console.warn("Dexie.delete('".concat(b.name, "') was blocked")) : console.warn("Upgrade '".concat(b.name, "' blocked by other connection holding version ").concat(I.oldVersion / 10));
      }), this._maxKey = Ma(a.IDBKeyRange), this._createTransaction = function(I, W, D, _) {
        return new b.Transaction(I, W, D, b._options.chromeTransactionDurability, _);
      }, this._fireOnBlocked = function(I) {
        b.on("blocked").fire(I), cn.filter(function(W) {
          return W.name === b.name && W !== b && !W._state.vcFired;
        }).map(function(W) {
          return W.on("versionchange").fire(I);
        });
      }, this.use(ko), this.use(ua), this.use(Ra), this.use(zr), this.use(vo), new Proxy(this, { get: function(I, W, D) {
        var _;
        return W === "_vip" || (W === "table" ? function(E) {
          return la(b.table(E), A);
        } : (_ = Reflect.get(I, W, D)) instanceof va ? la(_, A) : W === "tables" ? _.map(function(E) {
          return la(E, A);
        }) : W === "_createTransaction" ? function() {
          return la(_.apply(this, arguments), A);
        } : _);
      } }));
      this.vip = A, T.forEach(function(I) {
        return I(b);
      });
    }
    var Qa, Bn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", So = (Ar.prototype.subscribe = function(t, a, i) {
      return this._subscribe(t && typeof t != "function" ? t : { next: t, error: a, complete: i });
    }, Ar.prototype[Bn] = function() {
      return this;
    }, Ar);
    function Ar(t) {
      this._subscribe = t;
    }
    try {
      Qa = { indexedDB: m.indexedDB || m.mozIndexedDB || m.webkitIndexedDB || m.msIndexedDB, IDBKeyRange: m.IDBKeyRange || m.webkitIDBKeyRange };
    } catch {
      Qa = { indexedDB: null, IDBKeyRange: null };
    }
    function Er(t) {
      var a, i = !1, l = new So(function(p) {
        var h = O(t), v, b = !1, T = {}, L = {}, A = { get closed() {
          return b;
        }, unsubscribe: function() {
          b || (b = !0, v && v.abort(), I && Ot.storagemutated.unsubscribe(D));
        } }, I = (p.start && p.start(A), !1), W = function() {
          return fr(_);
        }, D = function(E) {
          oa(T, E), Ta(L, T) && W();
        }, _ = function() {
          var E, K, H;
          !b && Qa.indexedDB && (T = {}, E = {}, v && v.abort(), v = new AbortController(), H = ((F) => {
            var ee = an();
            try {
              h && ie();
              var le = Tn(t, F);
              return le = h ? le.finally(Sn) : le;
            } finally {
              ee && dn();
            }
          })(K = { subscr: E, signal: v.signal, requery: W, querier: t, trans: null }), Promise.resolve(H).then(function(F) {
            i = !0, a = F, b || K.signal.aborted || (T = {}, ((ee) => {
              for (var le in ee) if (te(ee, le)) return;
              return 1;
            })(L = E) || I || (Ot(Mn, D), I = !0), fr(function() {
              return !b && p.next && p.next(F);
            }));
          }, function(F) {
            i = !1, ["DatabaseClosedError", "AbortError"].includes(F == null ? void 0 : F.name) || b || fr(function() {
              b || p.error && p.error(F);
            });
          }));
        };
        return setTimeout(W, 0), A;
      });
      return l.hasValue = function() {
        return i;
      }, l.getValue = function() {
        return a;
      }, l;
    }
    var $n = An;
    function Xa(t) {
      var a = kn;
      try {
        kn = !0, Ot.storagemutated.fire(t), Tt(t, !0);
      } finally {
        kn = a;
      }
    }
    $($n, d(d({}, re), { delete: function(t) {
      return new $n(t, { addons: [] }).delete();
    }, exists: function(t) {
      return new $n(t, { addons: [] }).open().then(function(a) {
        return a.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(t) {
      try {
        return a = $n.dependencies, i = a.indexedDB, a = a.IDBKeyRange, (za(i) ? Promise.resolve(i.databases()).then(function(l) {
          return l.map(function(p) {
            return p.name;
          }).filter(function(p) {
            return p !== wa;
          });
        }) : Ga(i, a).toCollection().primaryKeys()).then(t);
      } catch {
        return jt(new ke.MissingAPI());
      }
      var a, i;
    }, defineClass: function() {
      return function(t) {
        R(this, t);
      };
    }, ignoreTransaction: function(t) {
      return Te.trans ? _n(Te.transless, t) : t();
    }, vip: tn, async: function(t) {
      return function() {
        try {
          var a = xr(t.apply(this, arguments));
          return a && typeof a.then == "function" ? a : V.resolve(a);
        } catch (i) {
          return jt(i);
        }
      };
    }, spawn: function(t, a, i) {
      try {
        var l = xr(t.apply(i, a || []));
        return l && typeof l.then == "function" ? l : V.resolve(l);
      } catch (p) {
        return jt(p);
      }
    }, currentTransaction: { get: function() {
      return Te.trans || null;
    } }, waitFor: function(t, a) {
      return t = V.resolve(typeof t == "function" ? $n.ignoreTransaction(t) : t).timeout(a || 6e4), Te.trans ? Te.trans.waitFor(t) : t;
    }, Promise: V, debug: { get: function() {
      return St;
    }, set: function(t) {
      gn(t);
    } }, derive: ge, extend: R, props: $, override: Ie, Events: ka, on: Ot, liveQuery: Er, extendObservabilitySet: oa, getByKeyPath: ce, setByKeyPath: se, delByKeyPath: function(t, a) {
      typeof a == "string" ? se(t, a, void 0) : "length" in a && [].map.call(a, function(i) {
        se(t, i, void 0);
      });
    }, shallowClone: gt, deepClone: ut, getObjectDiff: Cr, cmp: me, asap: Se, minKey: -1 / 0, addons: [], connections: cn, errnames: Bt, dependencies: Qa, cache: ln, semVer: "4.3.0", version: "4.3.0".split(".").map(function(t) {
      return parseInt(t);
    }).reduce(function(t, a, i) {
      return t + a / Math.pow(10, 2 * i);
    }) })), $n.maxKey = Ma($n.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ot(Mn, function(t) {
      kn || (t = new CustomEvent(wn, { detail: t }), kn = !0, dispatchEvent(t), kn = !1);
    }), addEventListener(wn, function(t) {
      t = t.detail, kn || Xa(t);
    }));
    var vn, kn = !1, Zr = function() {
    };
    return typeof BroadcastChannel < "u" && ((Zr = function() {
      (vn = new BroadcastChannel(wn)).onmessage = function(t) {
        return t.data && Xa(t.data);
      };
    })(), typeof vn.unref == "function" && vn.unref(), Ot(Mn, function(t) {
      kn || vn.postMessage(t);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
      if (!An.disableBfCache && t.persisted) {
        St && console.debug("Dexie: handling persisted pagehide"), vn != null && vn.close();
        for (var a = 0, i = cn; a < i.length; a++) i[a].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(t) {
      !An.disableBfCache && t.persisted && (St && console.debug("Dexie: handling persisted pageshow"), Zr(), Xa({ all: new Yt(-1 / 0, [[]]) }));
    })), V.rejectionMapper = function(t, a) {
      return !t || t instanceof De || t instanceof TypeError || t instanceof SyntaxError || !t.name || !qt[t.name] ? t : (a = new qt[t.name](a || t.message, t), "stack" in t && we(a, "stack", { get: function() {
        return this.inner.stack;
      } }), a);
    }, gn(St), d(An, Object.freeze({ __proto__: null, Dexie: An, Entity: La, PropModification: Vn, RangeSet: Yt, add: function(t) {
      return new Vn({ add: t });
    }, cmp: me, default: An, liveQuery: Er, mergeRanges: aa, rangesOverlap: Gr, remove: function(t) {
      return new Vn({ remove: t });
    }, replacePrefix: function(t, a) {
      return new Vn({ replacePrefix: [t, a] });
    } }), { default: An }), An;
  });
})(Hs);
var rl = Hs.exports;
const ai = /* @__PURE__ */ ci(rl), Ps = Symbol.for("Dexie"), Nr = globalThis[Ps] || (globalThis[Ps] = ai);
if (ai.semVer !== Nr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ai.semVer} and ${Nr.semVer}`);
const {
  liveQuery: ol,
  mergeRanges: il,
  rangesOverlap: sl,
  RangeSet: cl,
  cmp: ul,
  Entity: ll,
  PropModification: dl,
  replacePrefix: pl,
  add: fl,
  remove: hl,
  DexieYProvider: gl
} = Nr, ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dexie: Nr,
  DexieYProvider: gl,
  Entity: ll,
  PropModification: dl,
  RangeSet: cl,
  add: fl,
  cmp: ul,
  default: Nr,
  liveQuery: ol,
  mergeRanges: il,
  rangesOverlap: sl,
  remove: hl,
  replacePrefix: pl
}, Symbol.toStringTag, { value: "Module" })), wl = /* @__PURE__ */ js(ml);
var yl = "Expected a function", xs = NaN, bl = "[object Symbol]", vl = /^\s+|\s+$/g, kl = /^[-+]0x[0-9a-f]+$/i, Sl = /^0b[01]+$/i, Pl = /^0o[0-7]+$/i, xl = parseInt, Cl = typeof sr == "object" && sr && sr.Object === Object && sr, Ml = typeof self == "object" && self && self.Object === Object && self, Il = Cl || Ml || Function("return this")(), Al = Object.prototype, El = Al.toString, Tl = Math.max, _l = Math.min, Qo = function() {
  return Il.Date.now();
};
function Rl(f, o, u) {
  var d, y, m, P, x, R, j = 0, J = !1, te = !1, $ = !0;
  if (typeof f != "function")
    throw new TypeError(yl);
  o = Cs(o) || 0, ri(u) && (J = !!u.leading, te = "maxWait" in u, m = te ? Tl(Cs(u.maxWait) || 0, o) : m, $ = "trailing" in u ? !!u.trailing : $);
  function B(ce) {
    var se = d, gt = y;
    return d = y = void 0, j = ce, P = f.apply(gt, se), P;
  }
  function we(ce) {
    return j = ce, x = setTimeout(Ce, o), J ? B(ce) : P;
  }
  function ge(ce) {
    var se = ce - R, gt = ce - j, He = o - se;
    return te ? _l(He, m - gt) : He;
  }
  function q(ce) {
    var se = ce - R, gt = ce - j;
    return R === void 0 || se >= o || se < 0 || te && gt >= m;
  }
  function Ce() {
    var ce = Qo();
    if (q(ce))
      return Z(ce);
    x = setTimeout(Ce, ge(ce));
  }
  function Z(ce) {
    return x = void 0, $ && d ? B(ce) : (d = y = void 0, P);
  }
  function Ie() {
    x !== void 0 && clearTimeout(x), j = 0, d = R = y = x = void 0;
  }
  function ne() {
    return x === void 0 ? P : Z(Qo());
  }
  function Se() {
    var ce = Qo(), se = q(ce);
    if (d = arguments, y = this, R = ce, se) {
      if (x === void 0)
        return we(R);
      if (te)
        return x = setTimeout(Ce, o), B(R);
    }
    return x === void 0 && (x = setTimeout(Ce, o)), P;
  }
  return Se.cancel = Ie, Se.flush = ne, Se;
}
function ri(f) {
  var o = typeof f;
  return !!f && (o == "object" || o == "function");
}
function Dl(f) {
  return !!f && typeof f == "object";
}
function Ol(f) {
  return typeof f == "symbol" || Dl(f) && El.call(f) == bl;
}
function Cs(f) {
  if (typeof f == "number")
    return f;
  if (Ol(f))
    return xs;
  if (ri(f)) {
    var o = typeof f.valueOf == "function" ? f.valueOf() : f;
    f = ri(o) ? o + "" : o;
  }
  if (typeof f != "string")
    return f === 0 ? f : +f;
  f = f.replace(vl, "");
  var u = Sl.test(f);
  return u || Pl.test(f) ? xl(f.slice(2), u ? 2 : 8) : kl.test(f) ? xs : +f;
}
var Wl = Rl, oi = { exports: {} }, et = {};
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
function Bl() {
  if (Ms) return et;
  Ms = 1;
  var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), P = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), $ = Symbol.iterator;
  function B(O) {
    return O === null || typeof O != "object" ? null : (O = $ && O[$] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var we = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ge = Object.assign, q = {};
  function Ce(O, re, We) {
    this.props = O, this.context = re, this.refs = q, this.updater = We || we;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(O, re) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, re, "setState");
  }, Ce.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = Ce.prototype;
  function Ie(O, re, We) {
    this.props = O, this.context = re, this.refs = q, this.updater = We || we;
  }
  var ne = Ie.prototype = new Z();
  ne.constructor = Ie, ge(ne, Ce.prototype), ne.isPureReactComponent = !0;
  var Se = Array.isArray;
  function ce() {
  }
  var se = { H: null, A: null, T: null, S: null }, gt = Object.prototype.hasOwnProperty;
  function He(O, re, We) {
    var De = We.ref;
    return {
      $$typeof: f,
      type: O,
      key: re,
      ref: De !== void 0 ? De : null,
      props: We
    };
  }
  function tt(O, re) {
    return He(O.type, re, O.props);
  }
  function mt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === f;
  }
  function Qe(O) {
    var re = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(We) {
      return re[We];
    });
  }
  var ut = /\/+/g;
  function yt(O, re) {
    return typeof O == "object" && O !== null && O.key != null ? Qe("" + O.key) : re.toString(36);
  }
  function Oe(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(ce, ce) : (O.status = "pending", O.then(
          function(re) {
            O.status === "pending" && (O.status = "fulfilled", O.value = re);
          },
          function(re) {
            O.status === "pending" && (O.status = "rejected", O.reason = re);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function at(O, re, We, De, Je) {
    var rt = typeof O;
    (rt === "undefined" || rt === "boolean") && (O = null);
    var Ge = !1;
    if (O === null) Ge = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          Ge = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case f:
            case o:
              Ge = !0;
              break;
            case J:
              return Ge = O._init, at(
                Ge(O._payload),
                re,
                We,
                De,
                Je
              );
          }
      }
    if (Ge)
      return Je = Je(O), Ge = De === "" ? "." + yt(O, 0) : De, Se(Je) ? (We = "", Ge != null && (We = Ge.replace(ut, "$&/") + "/"), at(Je, re, We, "", function(ke) {
        return ke;
      })) : Je != null && (mt(Je) && (Je = tt(
        Je,
        We + (Je.key == null || O && O.key === Je.key ? "" : ("" + Je.key).replace(
          ut,
          "$&/"
        ) + "/") + Ge
      )), re.push(Je)), 1;
    Ge = 0;
    var Bt = De === "" ? "." : De + ":";
    if (Se(O))
      for (var lt = 0; lt < O.length; lt++)
        De = O[lt], rt = Bt + yt(De, lt), Ge += at(
          De,
          re,
          We,
          rt,
          Je
        );
    else if (lt = B(O), typeof lt == "function")
      for (O = lt.call(O), lt = 0; !(De = O.next()).done; )
        De = De.value, rt = Bt + yt(De, lt++), Ge += at(
          De,
          re,
          We,
          rt,
          Je
        );
    else if (rt === "object") {
      if (typeof O.then == "function")
        return at(
          Oe(O),
          re,
          We,
          De,
          Je
        );
      throw re = String(O), Error(
        "Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ge;
  }
  function Lt(O, re, We) {
    if (O == null) return O;
    var De = [], Je = 0;
    return at(O, De, "", "", function(rt) {
      return re.call(We, rt, Je++);
    }), De;
  }
  function ot(O) {
    if (O._status === -1) {
      var re = O._result;
      re = re(), re.then(
        function(We) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = We);
        },
        function(We) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = We);
        }
      ), O._status === -1 && (O._status = 0, O._result = re);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var Rt = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var re = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(re)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, Ve = {
    map: Lt,
    forEach: function(O, re, We) {
      Lt(
        O,
        function() {
          re.apply(this, arguments);
        },
        We
      );
    },
    count: function(O) {
      var re = 0;
      return Lt(O, function() {
        re++;
      }), re;
    },
    toArray: function(O) {
      return Lt(O, function(re) {
        return re;
      }) || [];
    },
    only: function(O) {
      if (!mt(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return et.Activity = te, et.Children = Ve, et.Component = Ce, et.Fragment = u, et.Profiler = y, et.PureComponent = Ie, et.StrictMode = d, et.Suspense = R, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = se, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return se.H.useMemoCache(O);
    }
  }, et.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, et.cacheSignal = function() {
    return null;
  }, et.cloneElement = function(O, re, We) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var De = ge({}, O.props), Je = O.key;
    if (re != null)
      for (rt in re.key !== void 0 && (Je = "" + re.key), re)
        !gt.call(re, rt) || rt === "key" || rt === "__self" || rt === "__source" || rt === "ref" && re.ref === void 0 || (De[rt] = re[rt]);
    var rt = arguments.length - 2;
    if (rt === 1) De.children = We;
    else if (1 < rt) {
      for (var Ge = Array(rt), Bt = 0; Bt < rt; Bt++)
        Ge[Bt] = arguments[Bt + 2];
      De.children = Ge;
    }
    return He(O.type, Je, De);
  }, et.createContext = function(O) {
    return O = {
      $$typeof: P,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: m,
      _context: O
    }, O;
  }, et.createElement = function(O, re, We) {
    var De, Je = {}, rt = null;
    if (re != null)
      for (De in re.key !== void 0 && (rt = "" + re.key), re)
        gt.call(re, De) && De !== "key" && De !== "__self" && De !== "__source" && (Je[De] = re[De]);
    var Ge = arguments.length - 2;
    if (Ge === 1) Je.children = We;
    else if (1 < Ge) {
      for (var Bt = Array(Ge), lt = 0; lt < Ge; lt++)
        Bt[lt] = arguments[lt + 2];
      Je.children = Bt;
    }
    if (O && O.defaultProps)
      for (De in Ge = O.defaultProps, Ge)
        Je[De] === void 0 && (Je[De] = Ge[De]);
    return He(O, rt, Je);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(O) {
    return { $$typeof: x, render: O };
  }, et.isValidElement = mt, et.lazy = function(O) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: O },
      _init: ot
    };
  }, et.memo = function(O, re) {
    return {
      $$typeof: j,
      type: O,
      compare: re === void 0 ? null : re
    };
  }, et.startTransition = function(O) {
    var re = se.T, We = {};
    se.T = We;
    try {
      var De = O(), Je = se.S;
      Je !== null && Je(We, De), typeof De == "object" && De !== null && typeof De.then == "function" && De.then(ce, Rt);
    } catch (rt) {
      Rt(rt);
    } finally {
      re !== null && We.types !== null && (re.types = We.types), se.T = re;
    }
  }, et.unstable_useCacheRefresh = function() {
    return se.H.useCacheRefresh();
  }, et.use = function(O) {
    return se.H.use(O);
  }, et.useActionState = function(O, re, We) {
    return se.H.useActionState(O, re, We);
  }, et.useCallback = function(O, re) {
    return se.H.useCallback(O, re);
  }, et.useContext = function(O) {
    return se.H.useContext(O);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(O, re) {
    return se.H.useDeferredValue(O, re);
  }, et.useEffect = function(O, re) {
    return se.H.useEffect(O, re);
  }, et.useEffectEvent = function(O) {
    return se.H.useEffectEvent(O);
  }, et.useId = function() {
    return se.H.useId();
  }, et.useImperativeHandle = function(O, re, We) {
    return se.H.useImperativeHandle(O, re, We);
  }, et.useInsertionEffect = function(O, re) {
    return se.H.useInsertionEffect(O, re);
  }, et.useLayoutEffect = function(O, re) {
    return se.H.useLayoutEffect(O, re);
  }, et.useMemo = function(O, re) {
    return se.H.useMemo(O, re);
  }, et.useOptimistic = function(O, re) {
    return se.H.useOptimistic(O, re);
  }, et.useReducer = function(O, re, We) {
    return se.H.useReducer(O, re, We);
  }, et.useRef = function(O) {
    return se.H.useRef(O);
  }, et.useState = function(O) {
    return se.H.useState(O);
  }, et.useSyncExternalStore = function(O, re, We) {
    return se.H.useSyncExternalStore(
      O,
      re,
      We
    );
  }, et.useTransition = function() {
    return se.H.useTransition();
  }, et.version = "19.2.4", et;
}
var Wr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Wr.exports;
var Is;
function Nl() {
  return Is || (Is = 1, function(f, o) {
    process.env.NODE_ENV !== "production" && function() {
      function u(g, C) {
        Object.defineProperty(m.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              C[0],
              C[1]
            );
          }
        });
      }
      function d(g) {
        return g === null || typeof g != "object" ? null : (g = M && g[M] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function y(g, C) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var V = g + "." + C;
        z[V] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          C,
          g
        ), z[V] = !0);
      }
      function m(g, C, V) {
        this.props = g, this.context = C, this.refs = Fe, this.updater = V || G;
      }
      function P() {
      }
      function x(g, C, V) {
        this.props = g, this.context = C, this.refs = Fe, this.updater = V || G;
      }
      function R() {
      }
      function j(g) {
        return "" + g;
      }
      function J(g) {
        try {
          j(g);
          var C = !1;
        } catch {
          C = !0;
        }
        if (C) {
          C = console;
          var V = C.error, ve = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return V.call(
            C,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ve
          ), j(g);
        }
      }
      function te(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === bt ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case O:
            return "Fragment";
          case We:
            return "Profiler";
          case re:
            return "StrictMode";
          case Ge:
            return "Suspense";
          case Bt:
            return "SuspenseList";
          case qt:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case Ve:
              return "Portal";
            case Je:
              return g.displayName || "Context";
            case De:
              return (g._context.displayName || "Context") + ".Consumer";
            case rt:
              var C = g.render;
              return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case lt:
              return C = g.displayName || null, C !== null ? C : te(g.type) || "Memo";
            case ke:
              C = g._payload, g = g._init;
              try {
                return te(g(C));
              } catch {
              }
          }
        return null;
      }
      function $(g) {
        if (g === O) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === ke)
          return "<...>";
        try {
          var C = te(g);
          return C ? "<" + C + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function B() {
        var g = Ae.A;
        return g === null ? null : g.getOwner();
      }
      function we() {
        return Error("react-stack-top-frame");
      }
      function ge(g) {
        if (St.call(g, "key")) {
          var C = Object.getOwnPropertyDescriptor(g, "key").get;
          if (C && C.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function q(g, C) {
        function V() {
          on || (on = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            C
          ));
        }
        V.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: V,
          configurable: !0
        });
      }
      function Ce() {
        var g = te(this.type);
        return Gt[g] || (Gt[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Z(g, C, V, ve, Me, Re) {
        var $e = V.ref;
        return g = {
          $$typeof: Rt,
          type: g,
          key: C,
          props: V,
          _owner: ve
        }, ($e !== void 0 ? $e : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: Ce
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Me
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Re
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function Ie(g, C) {
        return C = Z(
          g.type,
          C,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (C._store.validated = g._store.validated), C;
      }
      function ne(g) {
        Se(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === ke && (g._payload.status === "fulfilled" ? Se(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function Se(g) {
        return typeof g == "object" && g !== null && g.$$typeof === Rt;
      }
      function ce(g) {
        var C = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(V) {
          return C[V];
        });
      }
      function se(g, C) {
        return typeof g == "object" && g !== null && g.key != null ? (J(g.key), ce("" + g.key)) : C.toString(36);
      }
      function gt(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(R, R) : (g.status = "pending", g.then(
              function(C) {
                g.status === "pending" && (g.status = "fulfilled", g.value = C);
              },
              function(C) {
                g.status === "pending" && (g.status = "rejected", g.reason = C);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function He(g, C, V, ve, Me) {
        var Re = typeof g;
        (Re === "undefined" || Re === "boolean") && (g = null);
        var $e = !1;
        if (g === null) $e = !0;
        else
          switch (Re) {
            case "bigint":
            case "string":
            case "number":
              $e = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Rt:
                case Ve:
                  $e = !0;
                  break;
                case ke:
                  return $e = g._init, He(
                    $e(g._payload),
                    C,
                    V,
                    ve,
                    Me
                  );
              }
          }
        if ($e) {
          $e = g, Me = Me($e);
          var ft = ve === "" ? "." + se($e, 0) : ve;
          return ze(Me) ? (V = "", ft != null && (V = ft.replace(Zt, "$&/") + "/"), He(Me, C, V, "", function(en) {
            return en;
          })) : Me != null && (Se(Me) && (Me.key != null && ($e && $e.key === Me.key || J(Me.key)), V = Ie(
            Me,
            V + (Me.key == null || $e && $e.key === Me.key ? "" : ("" + Me.key).replace(
              Zt,
              "$&/"
            ) + "/") + ft
          ), ve !== "" && $e != null && Se($e) && $e.key == null && $e._store && !$e._store.validated && (V._store.validated = 2), Me = V), C.push(Me)), 1;
        }
        if ($e = 0, ft = ve === "" ? "." : ve + ":", ze(g))
          for (var qe = 0; qe < g.length; qe++)
            ve = g[qe], Re = ft + se(ve, qe), $e += He(
              ve,
              C,
              V,
              Re,
              Me
            );
        else if (qe = d(g), typeof qe == "function")
          for (qe === g.entries && (dt || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), dt = !0), g = qe.call(g), qe = 0; !(ve = g.next()).done; )
            ve = ve.value, Re = ft + se(ve, qe++), $e += He(
              ve,
              C,
              V,
              Re,
              Me
            );
        else if (Re === "object") {
          if (typeof g.then == "function")
            return He(
              gt(g),
              C,
              V,
              ve,
              Me
            );
          throw C = String(g), Error(
            "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return $e;
      }
      function tt(g, C, V) {
        if (g == null) return g;
        var ve = [], Me = 0;
        return He(g, ve, "", "", function(Re) {
          return C.call(V, Re, Me++);
        }), ve;
      }
      function mt(g) {
        if (g._status === -1) {
          var C = g._ioInfo;
          C != null && (C.start = C.end = performance.now()), C = g._result;
          var V = C();
          if (V.then(
            function(Me) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = Me;
                var Re = g._ioInfo;
                Re != null && (Re.end = performance.now()), V.status === void 0 && (V.status = "fulfilled", V.value = Me);
              }
            },
            function(Me) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = Me;
                var Re = g._ioInfo;
                Re != null && (Re.end = performance.now()), V.status === void 0 && (V.status = "rejected", V.reason = Me);
              }
            }
          ), C = g._ioInfo, C != null) {
            C.value = V;
            var ve = V.displayName;
            typeof ve == "string" && (C.name = ve);
          }
          g._status === -1 && (g._status = 0, g._result = V);
        }
        if (g._status === 1)
          return C = g._result, C === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            C
          ), "default" in C || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            C
          ), C.default;
        throw g._result;
      }
      function Qe() {
        var g = Ae.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function ut() {
        Ae.asyncTransitions--;
      }
      function yt(g) {
        if ($t === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7);
            $t = (f && f[C]).call(
              f,
              "timers"
            ).setImmediate;
          } catch {
            $t = function(ve) {
              Vt === !1 && (Vt = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Me = new MessageChannel();
              Me.port1.onmessage = ve, Me.port2.postMessage(void 0);
            };
          }
        return $t(g);
      }
      function Oe(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function at(g, C) {
        C !== zt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), zt = C;
      }
      function Lt(g, C, V) {
        var ve = Ae.actQueue;
        if (ve !== null)
          if (ve.length !== 0)
            try {
              ot(ve), yt(function() {
                return Lt(g, C, V);
              });
              return;
            } catch (Me) {
              Ae.thrownErrors.push(Me);
            }
          else Ae.actQueue = null;
        0 < Ae.thrownErrors.length ? (ve = Oe(Ae.thrownErrors), Ae.thrownErrors.length = 0, V(ve)) : C(g);
      }
      function ot(g) {
        if (!Ct) {
          Ct = !0;
          var C = 0;
          try {
            for (; C < g.length; C++) {
              var V = g[C];
              do {
                Ae.didUsePromise = !1;
                var ve = V(!1);
                if (ve !== null) {
                  if (Ae.didUsePromise) {
                    g[C] = V, g.splice(0, C);
                    return;
                  }
                  V = ve;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (Me) {
            g.splice(0, C + 1), Ae.thrownErrors.push(Me);
          } finally {
            Ct = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Rt = Symbol.for("react.transitional.element"), Ve = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), De = Symbol.for("react.consumer"), Je = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), Bt = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), qt = Symbol.for("react.activity"), M = Symbol.iterator, z = {}, G = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          y(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          y(g, "replaceState");
        },
        enqueueSetState: function(g) {
          y(g, "setState");
        }
      }, ae = Object.assign, Fe = {};
      Object.freeze(Fe), m.prototype.isReactComponent = {}, m.prototype.setState = function(g, C) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, C, "setState");
      }, m.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Be = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ut in Be)
        Be.hasOwnProperty(Ut) && u(Ut, Be[Ut]);
      P.prototype = m.prototype, Be = x.prototype = new P(), Be.constructor = x, ae(Be, m.prototype), Be.isPureReactComponent = !0;
      var ze = Array.isArray, bt = Symbol.for("react.client.reference"), Ae = {
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
      }, St = Object.prototype.hasOwnProperty, gn = console.createTask ? console.createTask : function() {
        return null;
      };
      Be = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var on, sn, Gt = {}, je = Be.react_stack_bottom_frame.bind(
        Be,
        we
      )(), be = gn($(we)), dt = !1, Zt = /\/+/g, nn = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var C = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(C)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, Vt = !1, $t = null, zt = 0, xt = !1, Ct = !1, Te = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : yt;
      Be = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Qe().useMemoCache(g);
        }
      });
      var Ut = {
        map: tt,
        forEach: function(g, C, V) {
          tt(
            g,
            function() {
              C.apply(this, arguments);
            },
            V
          );
        },
        count: function(g) {
          var C = 0;
          return tt(g, function() {
            C++;
          }), C;
        },
        toArray: function(g) {
          return tt(g, function(C) {
            return C;
          }) || [];
        },
        only: function(g) {
          if (!Se(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      o.Activity = qt, o.Children = Ut, o.Component = m, o.Fragment = O, o.Profiler = We, o.PureComponent = x, o.StrictMode = re, o.Suspense = Ge, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ae, o.__COMPILER_RUNTIME = Be, o.act = function(g) {
        var C = Ae.actQueue, V = zt;
        zt++;
        var ve = Ae.actQueue = C !== null ? C : [], Me = !1;
        try {
          var Re = g();
        } catch (qe) {
          Ae.thrownErrors.push(qe);
        }
        if (0 < Ae.thrownErrors.length)
          throw at(C, V), g = Oe(Ae.thrownErrors), Ae.thrownErrors.length = 0, g;
        if (Re !== null && typeof Re == "object" && typeof Re.then == "function") {
          var $e = Re;
          return Te(function() {
            Me || xt || (xt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(qe, en) {
              Me = !0, $e.then(
                function(an) {
                  if (at(C, V), V === 0) {
                    try {
                      ot(ve), yt(function() {
                        return Lt(
                          an,
                          qe,
                          en
                        );
                      });
                    } catch (Gn) {
                      Ae.thrownErrors.push(Gn);
                    }
                    if (0 < Ae.thrownErrors.length) {
                      var dn = Oe(
                        Ae.thrownErrors
                      );
                      Ae.thrownErrors.length = 0, en(dn);
                    }
                  } else qe(an);
                },
                function(an) {
                  at(C, V), 0 < Ae.thrownErrors.length && (an = Oe(
                    Ae.thrownErrors
                  ), Ae.thrownErrors.length = 0), en(an);
                }
              );
            }
          };
        }
        var ft = Re;
        if (at(C, V), V === 0 && (ot(ve), ve.length !== 0 && Te(function() {
          Me || xt || (xt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Ae.actQueue = null), 0 < Ae.thrownErrors.length)
          throw g = Oe(Ae.thrownErrors), Ae.thrownErrors.length = 0, g;
        return {
          then: function(qe, en) {
            Me = !0, V === 0 ? (Ae.actQueue = ve, yt(function() {
              return Lt(
                ft,
                qe,
                en
              );
            })) : qe(ft);
          }
        };
      }, o.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, o.cacheSignal = function() {
        return null;
      }, o.captureOwnerStack = function() {
        var g = Ae.getCurrentStack;
        return g === null ? null : g();
      }, o.cloneElement = function(g, C, V) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ve = ae({}, g.props), Me = g.key, Re = g._owner;
        if (C != null) {
          var $e;
          e: {
            if (St.call(C, "ref") && ($e = Object.getOwnPropertyDescriptor(
              C,
              "ref"
            ).get) && $e.isReactWarning) {
              $e = !1;
              break e;
            }
            $e = C.ref !== void 0;
          }
          $e && (Re = B()), ge(C) && (J(C.key), Me = "" + C.key);
          for (ft in C)
            !St.call(C, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && C.ref === void 0 || (ve[ft] = C[ft]);
        }
        var ft = arguments.length - 2;
        if (ft === 1) ve.children = V;
        else if (1 < ft) {
          $e = Array(ft);
          for (var qe = 0; qe < ft; qe++)
            $e[qe] = arguments[qe + 2];
          ve.children = $e;
        }
        for (ve = Z(
          g.type,
          Me,
          ve,
          Re,
          g._debugStack,
          g._debugTask
        ), Me = 2; Me < arguments.length; Me++)
          ne(arguments[Me]);
        return ve;
      }, o.createContext = function(g) {
        return g = {
          $$typeof: Je,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: De,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, o.createElement = function(g, C, V) {
        for (var ve = 2; ve < arguments.length; ve++)
          ne(arguments[ve]);
        ve = {};
        var Me = null;
        if (C != null)
          for (qe in sn || !("__self" in C) || "key" in C || (sn = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), ge(C) && (J(C.key), Me = "" + C.key), C)
            St.call(C, qe) && qe !== "key" && qe !== "__self" && qe !== "__source" && (ve[qe] = C[qe]);
        var Re = arguments.length - 2;
        if (Re === 1) ve.children = V;
        else if (1 < Re) {
          for (var $e = Array(Re), ft = 0; ft < Re; ft++)
            $e[ft] = arguments[ft + 2];
          Object.freeze && Object.freeze($e), ve.children = $e;
        }
        if (g && g.defaultProps)
          for (qe in Re = g.defaultProps, Re)
            ve[qe] === void 0 && (ve[qe] = Re[qe]);
        Me && q(
          ve,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var qe = 1e4 > Ae.recentlyCreatedOwnerStacks++;
        return Z(
          g,
          Me,
          ve,
          B(),
          qe ? Error("react-stack-top-frame") : je,
          qe ? gn($(g)) : be
        );
      }, o.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, o.forwardRef = function(g) {
        g != null && g.$$typeof === lt ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var C = { $$typeof: rt, render: g }, V;
        return Object.defineProperty(C, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return V;
          },
          set: function(ve) {
            V = ve, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ve }), g.displayName = ve);
          }
        }), C;
      }, o.isValidElement = Se, o.lazy = function(g) {
        g = { _status: -1, _result: g };
        var C = {
          $$typeof: ke,
          _payload: g,
          _init: mt
        }, V = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = V, C._debugInfo = [{ awaited: V }], C;
      }, o.memo = function(g, C) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), C = {
          $$typeof: lt,
          type: g,
          compare: C === void 0 ? null : C
        };
        var V;
        return Object.defineProperty(C, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return V;
          },
          set: function(ve) {
            V = ve, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ve }), g.displayName = ve);
          }
        }), C;
      }, o.startTransition = function(g) {
        var C = Ae.T, V = {};
        V._updatedFibers = /* @__PURE__ */ new Set(), Ae.T = V;
        try {
          var ve = g(), Me = Ae.S;
          Me !== null && Me(V, ve), typeof ve == "object" && ve !== null && typeof ve.then == "function" && (Ae.asyncTransitions++, ve.then(ut, ut), ve.then(R, nn));
        } catch (Re) {
          nn(Re);
        } finally {
          C === null && V._updatedFibers && (g = V._updatedFibers.size, V._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), C !== null && V.types !== null && (C.types !== null && C.types !== V.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), C.types = V.types), Ae.T = C;
        }
      }, o.unstable_useCacheRefresh = function() {
        return Qe().useCacheRefresh();
      }, o.use = function(g) {
        return Qe().use(g);
      }, o.useActionState = function(g, C, V) {
        return Qe().useActionState(
          g,
          C,
          V
        );
      }, o.useCallback = function(g, C) {
        return Qe().useCallback(g, C);
      }, o.useContext = function(g) {
        var C = Qe();
        return g.$$typeof === De && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), C.useContext(g);
      }, o.useDebugValue = function(g, C) {
        return Qe().useDebugValue(g, C);
      }, o.useDeferredValue = function(g, C) {
        return Qe().useDeferredValue(g, C);
      }, o.useEffect = function(g, C) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Qe().useEffect(g, C);
      }, o.useEffectEvent = function(g) {
        return Qe().useEffectEvent(g);
      }, o.useId = function() {
        return Qe().useId();
      }, o.useImperativeHandle = function(g, C, V) {
        return Qe().useImperativeHandle(g, C, V);
      }, o.useInsertionEffect = function(g, C) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Qe().useInsertionEffect(g, C);
      }, o.useLayoutEffect = function(g, C) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Qe().useLayoutEffect(g, C);
      }, o.useMemo = function(g, C) {
        return Qe().useMemo(g, C);
      }, o.useOptimistic = function(g, C) {
        return Qe().useOptimistic(g, C);
      }, o.useReducer = function(g, C, V) {
        return Qe().useReducer(g, C, V);
      }, o.useRef = function(g) {
        return Qe().useRef(g);
      }, o.useState = function(g) {
        return Qe().useState(g);
      }, o.useSyncExternalStore = function(g, C, V) {
        return Qe().useSyncExternalStore(
          g,
          C,
          V
        );
      }, o.useTransition = function() {
        return Qe().useTransition();
      }, o.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Wr, Wr.exports)), Wr.exports;
}
oi.exports = Bl();
var wt = oi.exports, Fl = {
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
const Ll = /* @__PURE__ */ ci(Fl);
var Vl = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function As(f) {
  var o = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, u = f.match(/<\/?([^\s]+?)[/\s>]/);
  if (u && (o.name = u[1], (Ll[u[1]] || f.charAt(f.length - 2) === "/") && (o.voidElement = !0), o.name.startsWith("!--"))) {
    var d = f.indexOf("-->");
    return { type: "comment", comment: d !== -1 ? f.slice(4, d) : "" };
  }
  for (var y = new RegExp(Vl), m = null; (m = y.exec(f)) !== null; ) if (m[0].trim()) if (m[1]) {
    var P = m[1].trim(), x = [P, ""];
    P.indexOf("=") > -1 && (x = P.split("=")), o.attrs[x[0]] = x[1], y.lastIndex--;
  } else m[2] && (o.attrs[m[2]] = m[3].trim().substring(1, m[3].length - 1));
  return o;
}
var Ul = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Kl = /^\s*$/, jl = /* @__PURE__ */ Object.create(null);
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
var $l = { parse: function(f, o) {
  o || (o = {}), o.components || (o.components = jl);
  var u, d = [], y = [], m = -1, P = !1;
  if (f.indexOf("<") !== 0) {
    var x = f.indexOf("<");
    d.push({ type: "text", content: x === -1 ? f : f.substring(0, x) });
  }
  return f.replace(Ul, function(R, j) {
    if (P) {
      if (R !== "</" + u.name + ">") return;
      P = !1;
    }
    var J, te = R.charAt(1) !== "/", $ = R.startsWith("<!--"), B = j + R.length, we = f.charAt(B);
    if ($) {
      var ge = As(R);
      return m < 0 ? (d.push(ge), d) : ((J = y[m]).children.push(ge), d);
    }
    if (te && (m++, (u = As(R)).type === "tag" && o.components[u.name] && (u.type = "component", P = !0), u.voidElement || P || !we || we === "<" || u.children.push({ type: "text", content: f.slice(B, f.indexOf("<", B)) }), m === 0 && d.push(u), (J = y[m - 1]) && J.children.push(u), y[m] = u), (!te || u.voidElement) && (m > -1 && (u.voidElement || u.name === R.slice(2, -1)) && (m--, u = m === -1 ? d : y[m]), !P && we !== "<" && we)) {
      J = m === -1 ? d : y[m].children;
      var q = f.indexOf("<", B), Ce = f.slice(B, q === -1 ? void 0 : q);
      Kl.test(Ce) && (Ce = " "), (q > -1 && m + J.length >= 0 || Ce !== " ") && J.push({ type: "text", content: Ce });
    }
  }), d;
}, stringify: function(f) {
  return f.reduce(function(o, u) {
    return o + Gs("", u);
  }, "");
} };
function uo() {
  if (console && console.warn) {
    for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
      o[u] = arguments[u];
    hn(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), console.warn(...o);
  }
}
const Es = {};
function lo() {
  for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
    o[u] = arguments[u];
  hn(o[0]) && Es[o[0]] || (hn(o[0]) && (Es[o[0]] = /* @__PURE__ */ new Date()), uo(...o));
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
  hn(u) && (u = [u]), u.forEach((y) => {
    f.options.ns.indexOf(y) < 0 && f.options.ns.push(y);
  }), f.loadLanguages(o, zs(f, d));
}, Hl = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const d = o.languages[0], y = o.options ? o.options.fallbackLng : !1, m = o.languages[o.languages.length - 1];
  if (d.toLowerCase() === "cimode") return !0;
  const P = (x, R) => {
    const j = o.services.backendConnector.state[`${x}|${R}`];
    return j === -1 || j === 2;
  };
  return u.bindI18n && u.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !P(o.isLanguageChangingTo, f) ? !1 : !!(o.hasResourceBundle(d, f) || !o.services.backendConnector.backend || o.options.resources && !o.options.partialBundledLanguages || P(d, f) && (!y || P(m, f)));
}, Gl = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !o.languages || !o.languages.length ? (lo("i18n.languages were undefined or empty", o.languages), !0) : o.options.ignoreJSONStructure !== void 0 ? o.hasLoadedNamespace(f, {
    lng: u.lng,
    precheck: (y, m) => {
      if (u.bindI18n && u.bindI18n.indexOf("languageChanging") > -1 && y.services.backendConnector.backend && y.isLanguageChangingTo && !m(y.isLanguageChangingTo, f)) return !1;
    }
  }) : Hl(f, o, u);
}, qs = (f) => f.displayName || f.name || (hn(f) && f.length > 0 ? f : "Unknown"), hn = (f) => typeof f == "string", cr = (f) => typeof f == "object" && f !== null, zl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ql = {
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
}, Jl = (f) => ql[f], Yl = (f) => f.replace(zl, Jl);
let ii = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Yl
};
const Js = function() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ii = {
    ...ii,
    ...f
  };
}, ui = () => ii;
let Ys;
const Zs = (f) => {
  Ys = f;
}, lr = () => Ys, Xo = (f, o) => {
  if (!f) return !1;
  const u = f.props ? f.props.children : f.children;
  return o ? u.length > 0 : !!u;
}, ei = (f) => {
  if (!f) return [];
  const o = f.props ? f.props.children : f.children;
  return f.props && f.props.i18nIsDynamicList ? ur(o) : o;
}, Zl = (f) => Array.isArray(f) && f.every(wt.isValidElement), ur = (f) => Array.isArray(f) ? f : [f], Ql = (f, o) => {
  const u = {
    ...o
  };
  return u.props = Object.assign(f.props, o.props), u;
}, Qs = (f, o) => {
  if (!f) return "";
  let u = "";
  const d = ur(f), y = o.transSupportBasicHtmlNodes && o.transKeepBasicHtmlNodesFor ? o.transKeepBasicHtmlNodesFor : [];
  return d.forEach((m, P) => {
    if (hn(m))
      u += `${m}`;
    else if (wt.isValidElement(m)) {
      const {
        props: x,
        type: R
      } = m, j = Object.keys(x).length, J = y.indexOf(R) > -1, te = x.children;
      if (!te && J && !j)
        u += `<${R}/>`;
      else if (!te && (!J || j) || x.i18nIsDynamicList)
        u += `<${P}></${P}>`;
      else if (J && j === 1 && hn(te))
        u += `<${R}>${te}</${R}>`;
      else {
        const $ = Qs(te, o);
        u += `<${P}>${$}</${P}>`;
      }
    } else if (m === null)
      uo("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (cr(m)) {
      const {
        format: x,
        ...R
      } = m, j = Object.keys(R);
      if (j.length === 1) {
        const J = x ? `${j[0]}, ${x}` : j[0];
        u += `{{${J}}}`;
      } else
        uo("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", m);
    } else
      uo("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", m);
  }), u;
}, Xl = (f, o, u, d, y, m) => {
  if (o === "") return [];
  const P = d.transKeepBasicHtmlNodesFor || [], x = o && new RegExp(P.map((q) => `<${q}`).join("|")).test(o);
  if (!f && !x && !m) return [o];
  const R = {}, j = (q) => {
    ur(q).forEach((Z) => {
      hn(Z) || (Xo(Z) ? j(ei(Z)) : cr(Z) && !wt.isValidElement(Z) && Object.assign(R, Z));
    });
  };
  j(f);
  const J = $l.parse(`<0>${o}</0>`), te = {
    ...R,
    ...y
  }, $ = (q, Ce, Z) => {
    const Ie = ei(q), ne = we(Ie, Ce.children, Z);
    return Zl(Ie) && ne.length === 0 || q.props && q.props.i18nIsDynamicList ? Ie : ne;
  }, B = (q, Ce, Z, Ie, ne) => {
    q.dummy ? (q.children = Ce, Z.push(wt.cloneElement(q, {
      key: Ie
    }, ne ? void 0 : Ce))) : Z.push(...wt.Children.map([q], (Se) => {
      const ce = {
        ...Se.props
      };
      return delete ce.i18nIsDynamicList, wt.createElement(Se.type, {
        ...ce,
        key: Ie,
        ref: Se.ref
      }, ne ? null : Ce);
    }));
  }, we = (q, Ce, Z) => {
    const Ie = ur(q);
    return ur(Ce).reduce((Se, ce, se) => {
      const gt = ce.children && ce.children[0] && ce.children[0].content && u.services.interpolator.interpolate(ce.children[0].content, te, u.language);
      if (ce.type === "tag") {
        let He = Ie[parseInt(ce.name, 10)];
        Z.length === 1 && !He && (He = Z[0][ce.name]), He || (He = {});
        const tt = Object.keys(ce.attrs).length !== 0 ? Ql({
          props: ce.attrs
        }, He) : He, mt = wt.isValidElement(tt), Qe = mt && Xo(ce, !0) && !ce.voidElement, ut = x && cr(tt) && tt.dummy && !mt, yt = cr(f) && Object.hasOwnProperty.call(f, ce.name);
        if (hn(tt)) {
          const Oe = u.services.interpolator.interpolate(tt, te, u.language);
          Se.push(Oe);
        } else if (Xo(tt) || Qe) {
          const Oe = $(tt, ce, Z);
          B(tt, Oe, Se, se);
        } else if (ut) {
          const Oe = we(Ie, ce.children, Z);
          B(tt, Oe, Se, se);
        } else if (Number.isNaN(parseFloat(ce.name)))
          if (yt) {
            const Oe = $(tt, ce, Z);
            B(tt, Oe, Se, se, ce.voidElement);
          } else if (d.transSupportBasicHtmlNodes && P.indexOf(ce.name) > -1)
            if (ce.voidElement)
              Se.push(wt.createElement(ce.name, {
                key: `${ce.name}-${se}`
              }));
            else {
              const Oe = we(Ie, ce.children, Z);
              Se.push(wt.createElement(ce.name, {
                key: `${ce.name}-${se}`
              }, Oe));
            }
          else if (ce.voidElement)
            Se.push(`<${ce.name} />`);
          else {
            const Oe = we(Ie, ce.children, Z);
            Se.push(`<${ce.name}>${Oe}</${ce.name}>`);
          }
        else if (cr(tt) && !mt) {
          const Oe = ce.children[0] ? gt : null;
          Oe && Se.push(Oe);
        } else
          B(tt, gt, Se, se, ce.children.length !== 1 || !gt);
      } else if (ce.type === "text") {
        const He = d.transWrapTextNodes, tt = m ? d.unescape(u.services.interpolator.interpolate(ce.content, te, u.language)) : u.services.interpolator.interpolate(ce.content, te, u.language);
        He ? Se.push(wt.createElement(He, {
          key: `${ce.name}-${se}`
        }, tt)) : Se.push(tt);
      }
      return Se;
    }, []);
  }, ge = we([{
    dummy: !0,
    children: f || []
  }], J, ur(f || []));
  return ei(ge[0]);
};
function Xs(f) {
  let {
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P = {},
    values: x,
    defaults: R,
    components: j,
    ns: J,
    i18n: te,
    t: $,
    shouldUnescape: B,
    ...we
  } = f;
  const ge = te || lr();
  if (!ge)
    return lo("You will need to pass in an i18next instance by using i18nextReactModule"), o;
  const q = $ || ge.t.bind(ge) || ((Qe) => Qe), Ce = {
    ...ui(),
    ...ge.options && ge.options.react
  };
  let Z = J || q.ns || ge.options && ge.options.defaultNS;
  Z = hn(Z) ? [Z] : Z || ["translation"];
  const Ie = Qs(o, Ce), ne = R || Ie || Ce.transEmptyNodeValue || y, {
    hashTransKey: Se
  } = Ce, ce = y || (Se ? Se(Ie || ne) : Ie || ne);
  ge.options && ge.options.interpolation && ge.options.interpolation.defaultVariables && (x = x && Object.keys(x).length > 0 ? {
    ...x,
    ...ge.options.interpolation.defaultVariables
  } : {
    ...ge.options.interpolation.defaultVariables
  });
  const se = x || u !== void 0 || !o ? P.interpolation : {
    interpolation: {
      ...P.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, gt = {
    ...P,
    context: m || P.context,
    count: u,
    ...x,
    ...se,
    defaultValue: ne,
    ns: Z
  }, He = ce ? q(ce, gt) : ne;
  j && Object.keys(j).forEach((Qe) => {
    const ut = j[Qe];
    if (typeof ut.type == "function" || !ut.props || !ut.props.children || He.indexOf(`${Qe}/>`) < 0 && He.indexOf(`${Qe} />`) < 0) return;
    function yt() {
      return wt.createElement(wt.Fragment, null, ut);
    }
    j[Qe] = wt.createElement(yt);
  });
  const tt = Xl(j || o, He, ge, Ce, gt, B), mt = d !== void 0 ? d : Ce.defaultTransParent;
  return mt ? wt.createElement(mt, we, tt) : tt;
}
const ed = {
  type: "3rdParty",
  init(f) {
    Js(f.options.react), Zs(f);
  }
}, Lr = wt.createContext();
class td {
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
  const f = lr(), o = f.reportNamespaces ? f.reportNamespaces.getUsedNamespaces() : [], u = {}, d = {};
  return f.languages.forEach((y) => {
    d[y] = {}, o.forEach((m) => {
      d[y][m] = f.getResourceBundle(y, m) || {};
    });
  }), u.initialI18nStore = d, u.initialLanguage = f.language, u;
};
function nd(f) {
  let {
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P = {},
    values: x,
    defaults: R,
    components: j,
    ns: J,
    i18n: te,
    t: $,
    shouldUnescape: B,
    ...we
  } = f;
  const {
    i18n: ge,
    defaultNS: q
  } = wt.useContext(Lr) || {}, Ce = te || ge || lr(), Z = $ || Ce && Ce.t.bind(Ce);
  return Xs({
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P,
    values: x,
    defaults: R,
    components: j,
    ns: J || Z && Z.ns || q || Ce && Ce.options && Ce.options.defaultNS,
    i18n: Ce,
    t: $,
    shouldUnescape: B,
    ...we
  });
}
const ad = (f, o) => {
  const u = wt.useRef();
  return wt.useEffect(() => {
    u.current = f;
  }, [f, o]), u.current;
}, nc = (f, o, u, d) => f.getFixedT(o, u, d), rd = (f, o, u, d) => wt.useCallback(nc(f, o, u, d), [f, o, u, d]), li = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: u
  } = o, {
    i18n: d,
    defaultNS: y
  } = wt.useContext(Lr) || {}, m = u || d || lr();
  if (m && !m.reportNamespaces && (m.reportNamespaces = new td()), !m) {
    lo("You will need to pass in an i18next instance by using initReactI18next");
    const ne = (ce, se) => hn(se) ? se : cr(se) && hn(se.defaultValue) ? se.defaultValue : Array.isArray(ce) ? ce[ce.length - 1] : ce, Se = [ne, {}, !1];
    return Se.t = ne, Se.i18n = {}, Se.ready = !1, Se;
  }
  m.options.react && m.options.react.wait !== void 0 && lo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const P = {
    ...ui(),
    ...m.options.react,
    ...o
  }, {
    useSuspense: x,
    keyPrefix: R
  } = P;
  let j = f || y || m.options && m.options.defaultNS;
  j = hn(j) ? [j] : j || ["translation"], m.reportNamespaces.addUsedNamespaces && m.reportNamespaces.addUsedNamespaces(j);
  const J = (m.isInitialized || m.initializedStoreOnce) && j.every((ne) => Gl(ne, m, P)), te = rd(m, o.lng || null, P.nsMode === "fallback" ? j : j[0], R), $ = () => te, B = () => nc(m, o.lng || null, P.nsMode === "fallback" ? j : j[0], R), [we, ge] = wt.useState($);
  let q = j.join();
  o.lng && (q = `${o.lng}${q}`);
  const Ce = ad(q), Z = wt.useRef(!0);
  wt.useEffect(() => {
    const {
      bindI18n: ne,
      bindI18nStore: Se
    } = P;
    Z.current = !0, !J && !x && (o.lng ? _s(m, o.lng, j, () => {
      Z.current && ge(B);
    }) : Ts(m, j, () => {
      Z.current && ge(B);
    })), J && Ce && Ce !== q && Z.current && ge(B);
    const ce = () => {
      Z.current && ge(B);
    };
    return ne && m && m.on(ne, ce), Se && m && m.store.on(Se, ce), () => {
      Z.current = !1, ne && m && ne.split(" ").forEach((se) => m.off(se, ce)), Se && m && Se.split(" ").forEach((se) => m.store.off(se, ce));
    };
  }, [m, q]), wt.useEffect(() => {
    Z.current && J && ge($);
  }, [m, R, J]);
  const Ie = [we, m, J];
  if (Ie.t = we, Ie.i18n = m, Ie.ready = J, J || !J && !x) return Ie;
  throw new Promise((ne) => {
    o.lng ? _s(m, o.lng, j, () => ne()) : Ts(m, j, () => ne());
  });
}, od = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(d) {
    function y(P) {
      let {
        forwardedRef: x,
        ...R
      } = P;
      const [j, J, te] = li(f, {
        ...R,
        keyPrefix: o.keyPrefix
      }), $ = {
        ...R,
        t: j,
        i18n: J,
        tReady: te
      };
      return o.withRef && x ? $.ref = x : !o.withRef && x && ($.forwardedRef = x), wt.createElement(d, $);
    }
    y.displayName = `withI18nextTranslation(${qs(d)})`, y.WrappedComponent = d;
    const m = (P, x) => wt.createElement(y, Object.assign({}, P, {
      forwardedRef: x
    }));
    return o.withRef ? wt.forwardRef(m) : y;
  };
};
function id(f) {
  const {
    ns: o,
    children: u,
    ...d
  } = f, [y, m, P] = li(o, d);
  return u(y, {
    i18n: m,
    lng: m.language
  }, P);
}
function sd(f) {
  let {
    i18n: o,
    defaultNS: u,
    children: d
  } = f;
  const y = wt.useMemo(() => ({
    i18n: o,
    defaultNS: u
  }), [o, u]);
  return wt.createElement(Lr.Provider, {
    value: y
  }, d);
}
const ac = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    i18n: d
  } = u, {
    i18n: y
  } = wt.useContext(Lr) || {}, m = d || y || lr();
  m.options && m.options.isClone || (f && !m.initializedStoreOnce && (m.services.resourceStore.data = f, m.options.ns = Object.values(f).reduce((P, x) => (Object.keys(x).forEach((R) => {
    P.indexOf(R) < 0 && P.push(R);
  }), P), m.options.ns), m.initializedStoreOnce = !0, m.isInitialized = !0), o && !m.initializedLanguageOnce && (m.changeLanguage(o), m.initializedLanguageOnce = !0));
}, cd = () => function(o) {
  function u(d) {
    let {
      initialI18nStore: y,
      initialLanguage: m,
      ...P
    } = d;
    return ac(y, m), wt.createElement(o, {
      ...P
    });
  }
  return u.getInitialProps = ec(o), u.displayName = `withI18nextSSR(${qs(o)})`, u.WrappedComponent = o, u;
}, ud = () => "", ld = () => "", dd = () => "", pd = () => "", fd = () => "", hd = () => "", gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nContext: Lr,
  I18nextProvider: sd,
  Trans: nd,
  TransWithoutContext: Xs,
  Translation: id,
  composeInitialProps: ec,
  date: ud,
  getDefaults: ui,
  getI18n: lr,
  getInitialProps: tc,
  initReactI18next: ed,
  number: dd,
  plural: fd,
  select: pd,
  selectOrdinal: hd,
  setDefaults: Js,
  setI18n: Zs,
  time: ld,
  useSSR: ac,
  useTranslation: li,
  withSSR: cd,
  withTranslation: od
}, Symbol.toStringTag, { value: "Module" })), md = /* @__PURE__ */ js(gd), Ze = (f) => typeof f == "string", Or = () => {
  let f, o;
  const u = new Promise((d, y) => {
    f = d, o = y;
  });
  return u.resolve = f, u.reject = o, u;
}, Rs = (f) => f == null ? "" : "" + f, wd = (f, o, u) => {
  f.forEach((d) => {
    o[d] && (u[d] = o[d]);
  });
}, yd = /###/g, Ds = (f) => f && f.indexOf("###") > -1 ? f.replace(yd, ".") : f, Os = (f) => !f || Ze(f), Br = (f, o, u) => {
  const d = Ze(o) ? o.split(".") : o;
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
  } = Br(f, o, Object);
  if (d !== void 0 || o.length === 1) {
    d[y] = u;
    return;
  }
  let m = o[o.length - 1], P = o.slice(0, o.length - 1), x = Br(f, P, Object);
  for (; x.obj === void 0 && P.length; )
    m = `${P[P.length - 1]}.${m}`, P = P.slice(0, P.length - 1), x = Br(f, P, Object), x && x.obj && typeof x.obj[`${x.k}.${m}`] < "u" && (x.obj = void 0);
  x.obj[`${x.k}.${m}`] = u;
}, bd = (f, o, u, d) => {
  const {
    obj: y,
    k: m
  } = Br(f, o, Object);
  y[m] = y[m] || [], y[m].push(u);
}, po = (f, o) => {
  const {
    obj: u,
    k: d
  } = Br(f, o);
  if (u)
    return u[d];
}, vd = (f, o, u) => {
  const d = po(f, u);
  return d !== void 0 ? d : po(o, u);
}, rc = (f, o, u) => {
  for (const d in o)
    d !== "__proto__" && d !== "constructor" && (d in f ? Ze(f[d]) || f[d] instanceof String || Ze(o[d]) || o[d] instanceof String ? u && (f[d] = o[d]) : rc(f[d], o[d], u) : f[d] = o[d]);
  return f;
}, or = (f) => f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var kd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Sd = (f) => Ze(f) ? f.replace(/[&<>"'\/]/g, (o) => kd[o]) : f;
class Pd {
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
const xd = [" ", ",", "?", "!", ";"], Cd = new Pd(20), Md = (f, o, u) => {
  o = o || "", u = u || "";
  const d = xd.filter((P) => o.indexOf(P) < 0 && u.indexOf(P) < 0);
  if (d.length === 0) return !0;
  const y = Cd.getRegExp(`(${d.map((P) => P === "?" ? "\\?" : P).join("|")})`);
  let m = !y.test(f);
  if (!m) {
    const P = f.indexOf(u);
    P > 0 && !y.test(f.substring(0, P)) && (m = !0);
  }
  return m;
}, si = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!f) return;
  if (f[o]) return f[o];
  const d = o.split(u);
  let y = f;
  for (let m = 0; m < d.length; ) {
    if (!y || typeof y != "object")
      return;
    let P, x = "";
    for (let R = m; R < d.length; ++R)
      if (R !== m && (x += u), x += d[R], P = y[x], P !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof P) > -1 && R < d.length - 1)
          continue;
        m += R - m + 1;
        break;
      }
    y = P;
  }
  return y;
}, fo = (f) => f && f.replace("_", "-"), Id = {
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
class ho {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, u);
  }
  init(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = u.prefix || "i18next:", this.logger = o || Id, this.options = u, this.debug = u.debug;
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
    return y && !this.debug ? null : (Ze(o[0]) && (o[0] = `${d}${this.prefix} ${o[0]}`), this.logger[u](o));
  }
  create(o) {
    return new ho(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new ho(this.logger, o);
  }
}
var Nn = new ho();
class mo {
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
      let [x, R] = P;
      for (let j = 0; j < R; j++)
        x(...d);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((P) => {
      let [x, R] = P;
      for (let j = 0; j < R; j++)
        x.apply(x, [o, ...d]);
    });
  }
}
class Bs extends mo {
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
    let x;
    o.indexOf(".") > -1 ? x = o.split(".") : (x = [o, u], d && (Array.isArray(d) ? x.push(...d) : Ze(d) && m ? x.push(...d.split(m)) : x.push(d)));
    const R = po(this.data, x);
    return !R && !u && !d && o.indexOf(".") > -1 && (o = x[0], u = x[1], d = x.slice(2).join(".")), R || !P || !Ze(d) ? R : si(this.data && this.data[o] && this.data[o][u], d, m);
  }
  addResource(o, u, d, y) {
    let m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const P = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator;
    let x = [o, u];
    d && (x = x.concat(P ? d.split(P) : d)), o.indexOf(".") > -1 && (x = o.split("."), y = u, u = x[1]), this.addNamespaces(u), Ws(this.data, x, y), m.silent || this.emit("added", o, u, d, y);
  }
  addResources(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const m in d)
      (Ze(d[m]) || Array.isArray(d[m])) && this.addResource(o, u, m, d[m], {
        silent: !0
      });
    y.silent || this.emit("added", o, u, d);
  }
  addResourceBundle(o, u, d, y, m) {
    let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, x = [o, u];
    o.indexOf(".") > -1 && (x = o.split("."), y = d, d = u, u = x[1]), this.addNamespaces(u);
    let R = po(this.data, x) || {};
    P.skipCopy || (d = JSON.parse(JSON.stringify(d))), y ? rc(R, d, m) : R = {
      ...R,
      ...d
    }, Ws(this.data, x, R), P.silent || this.emit("added", o, u, d);
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
class go extends mo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), wd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = u, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Nn.create("translator");
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
    const P = d && o.indexOf(d) > -1, x = !this.options.userDefinedKeySeparator && !u.keySeparator && !this.options.userDefinedNsSeparator && !u.nsSeparator && !Md(o, d, y);
    if (P && !x) {
      const R = o.match(this.interpolator.nestingRegexp);
      if (R && R.length > 0)
        return {
          key: o,
          namespaces: Ze(m) ? [m] : m
        };
      const j = o.split(d);
      (d !== y || d === y && this.options.ns.indexOf(j[0]) > -1) && (m = j.shift()), o = j.join(y);
    }
    return {
      key: o,
      namespaces: Ze(m) ? [m] : m
    };
  }
  translate(o, u, d) {
    if (typeof u != "object" && this.options.overloadTranslationOptionHandler && (u = this.options.overloadTranslationOptionHandler(arguments)), typeof u == "object" && (u = {
      ...u
    }), u || (u = {}), o == null) return "";
    Array.isArray(o) || (o = [String(o)]);
    const y = u.returnDetails !== void 0 ? u.returnDetails : this.options.returnDetails, m = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator, {
      key: P,
      namespaces: x
    } = this.extractFromKey(o[o.length - 1], u), R = x[x.length - 1], j = u.lng || this.language, J = u.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (j && j.toLowerCase() === "cimode") {
      if (J) {
        const ne = u.nsSeparator || this.options.nsSeparator;
        return y ? {
          res: `${R}${ne}${P}`,
          usedKey: P,
          exactUsedKey: P,
          usedLng: j,
          usedNS: R,
          usedParams: this.getUsedParamsDetails(u)
        } : `${R}${ne}${P}`;
      }
      return y ? {
        res: P,
        usedKey: P,
        exactUsedKey: P,
        usedLng: j,
        usedNS: R,
        usedParams: this.getUsedParamsDetails(u)
      } : P;
    }
    const te = this.resolve(o, u);
    let $ = te && te.res;
    const B = te && te.usedKey || P, we = te && te.exactUsedKey || P, ge = Object.prototype.toString.apply($), q = ["[object Number]", "[object Function]", "[object RegExp]"], Ce = u.joinArrays !== void 0 ? u.joinArrays : this.options.joinArrays, Z = !this.i18nFormat || this.i18nFormat.handleAsObject, Ie = !Ze($) && typeof $ != "boolean" && typeof $ != "number";
    if (Z && $ && Ie && q.indexOf(ge) < 0 && !(Ze(Ce) && Array.isArray($))) {
      if (!u.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const ne = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(B, $, {
          ...u,
          ns: x
        }) : `key '${P} (${this.language})' returned an object instead of string.`;
        return y ? (te.res = ne, te.usedParams = this.getUsedParamsDetails(u), te) : ne;
      }
      if (m) {
        const ne = Array.isArray($), Se = ne ? [] : {}, ce = ne ? we : B;
        for (const se in $)
          if (Object.prototype.hasOwnProperty.call($, se)) {
            const gt = `${ce}${m}${se}`;
            Se[se] = this.translate(gt, {
              ...u,
              joinArrays: !1,
              ns: x
            }), Se[se] === gt && (Se[se] = $[se]);
          }
        $ = Se;
      }
    } else if (Z && Ze(Ce) && Array.isArray($))
      $ = $.join(Ce), $ && ($ = this.extendTranslation($, o, u, d));
    else {
      let ne = !1, Se = !1;
      const ce = u.count !== void 0 && !Ze(u.count), se = go.hasDefaultValue(u), gt = ce ? this.pluralResolver.getSuffix(j, u.count, u) : "", He = u.ordinal && ce ? this.pluralResolver.getSuffix(j, u.count, {
        ordinal: !1
      }) : "", tt = ce && !u.ordinal && u.count === 0 && this.pluralResolver.shouldUseIntlApi(), mt = tt && u[`defaultValue${this.options.pluralSeparator}zero`] || u[`defaultValue${gt}`] || u[`defaultValue${He}`] || u.defaultValue;
      !this.isValidLookup($) && se && (ne = !0, $ = mt), this.isValidLookup($) || (Se = !0, $ = P);
      const ut = (u.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Se ? void 0 : $, yt = se && mt !== $ && this.options.updateMissing;
      if (Se || ne || yt) {
        if (this.logger.log(yt ? "updateKey" : "missingKey", j, R, P, yt ? mt : $), m) {
          const ot = this.resolve(P, {
            ...u,
            keySeparator: !1
          });
          ot && ot.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Oe = [];
        const at = this.languageUtils.getFallbackCodes(this.options.fallbackLng, u.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && at && at[0])
          for (let ot = 0; ot < at.length; ot++)
            Oe.push(at[ot]);
        else this.options.saveMissingTo === "all" ? Oe = this.languageUtils.toResolveHierarchy(u.lng || this.language) : Oe.push(u.lng || this.language);
        const Lt = (ot, Rt, Ve) => {
          const O = se && Ve !== $ ? Ve : ut;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ot, R, Rt, O, yt, u) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(ot, R, Rt, O, yt, u), this.emit("missingKey", ot, R, Rt, $);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && ce ? Oe.forEach((ot) => {
          const Rt = this.pluralResolver.getSuffixes(ot, u);
          tt && u[`defaultValue${this.options.pluralSeparator}zero`] && Rt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Rt.push(`${this.options.pluralSeparator}zero`), Rt.forEach((Ve) => {
            Lt([ot], P + Ve, u[`defaultValue${Ve}`] || mt);
          });
        }) : Lt(Oe, P, mt));
      }
      $ = this.extendTranslation($, o, u, te, d), Se && $ === P && this.options.appendNamespaceToMissingKey && ($ = `${R}:${P}`), (Se || ne) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? $ = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${R}:${P}` : P, ne ? $ : void 0) : $ = this.options.parseMissingKeyHandler($));
    }
    return y ? (te.res = $, te.usedParams = this.getUsedParamsDetails(u), te) : $;
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
      const j = Ze(o) && (d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let J;
      if (j) {
        const $ = o.match(this.interpolator.nestingRegexp);
        J = $ && $.length;
      }
      let te = d.replace && !Ze(d.replace) ? d.replace : d;
      if (this.options.interpolation.defaultVariables && (te = {
        ...this.options.interpolation.defaultVariables,
        ...te
      }), o = this.interpolator.interpolate(o, te, d.lng || this.language || y.usedLng, d), j) {
        const $ = o.match(this.interpolator.nestingRegexp), B = $ && $.length;
        J < B && (d.nest = !1);
      }
      !d.lng && this.options.compatibilityAPI !== "v1" && y && y.res && (d.lng = this.language || y.usedLng), d.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var $ = arguments.length, B = new Array($), we = 0; we < $; we++)
          B[we] = arguments[we];
        return m && m[0] === B[0] && !d.context ? (P.logger.warn(`It seems you are nesting recursively key: ${B[0]} in key: ${u[0]}`), null) : P.translate(...B, u);
      }, d)), d.interpolation && this.interpolator.reset();
    }
    const x = d.postProcess || this.options.postProcess, R = Ze(x) ? [x] : x;
    return o != null && R && R.length && d.applyPostProcessor !== !1 && (o = oc.handle(R, o, u, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...y,
        usedParams: this.getUsedParamsDetails(d)
      },
      ...d
    } : d, this)), o;
  }
  resolve(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, y, m, P, x;
    return Ze(o) && (o = [o]), o.forEach((R) => {
      if (this.isValidLookup(d)) return;
      const j = this.extractFromKey(R, u), J = j.key;
      y = J;
      let te = j.namespaces;
      this.options.fallbackNS && (te = te.concat(this.options.fallbackNS));
      const $ = u.count !== void 0 && !Ze(u.count), B = $ && !u.ordinal && u.count === 0 && this.pluralResolver.shouldUseIntlApi(), we = u.context !== void 0 && (Ze(u.context) || typeof u.context == "number") && u.context !== "", ge = u.lngs ? u.lngs : this.languageUtils.toResolveHierarchy(u.lng || this.language, u.fallbackLng);
      te.forEach((q) => {
        this.isValidLookup(d) || (x = q, !Ns[`${ge[0]}-${q}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(x) && (Ns[`${ge[0]}-${q}`] = !0, this.logger.warn(`key "${y}" for languages "${ge.join(", ")}" won't get resolved as namespace "${x}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), ge.forEach((Ce) => {
          if (this.isValidLookup(d)) return;
          P = Ce;
          const Z = [J];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(Z, J, Ce, q, u);
          else {
            let ne;
            $ && (ne = this.pluralResolver.getSuffix(Ce, u.count, u));
            const Se = `${this.options.pluralSeparator}zero`, ce = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if ($ && (Z.push(J + ne), u.ordinal && ne.indexOf(ce) === 0 && Z.push(J + ne.replace(ce, this.options.pluralSeparator)), B && Z.push(J + Se)), we) {
              const se = `${J}${this.options.contextSeparator}${u.context}`;
              Z.push(se), $ && (Z.push(se + ne), u.ordinal && ne.indexOf(ce) === 0 && Z.push(se + ne.replace(ce, this.options.pluralSeparator)), B && Z.push(se + Se));
            }
          }
          let Ie;
          for (; Ie = Z.pop(); )
            this.isValidLookup(d) || (m = Ie, d = this.getResource(Ce, q, Ie, u));
        }));
      });
    }), {
      res: d,
      usedKey: y,
      exactUsedKey: m,
      usedLng: P,
      usedNS: x
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
    const u = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], d = o.replace && !Ze(o.replace);
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
const ti = (f) => f.charAt(0).toUpperCase() + f.slice(1);
class Fs {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Nn.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = fo(o), !o || o.indexOf("-") < 0) return null;
    const u = o.split("-");
    return u.length === 2 || (u.pop(), u[u.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(u.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = fo(o), !o || o.indexOf("-") < 0) return o;
    const u = o.split("-");
    return this.formatLanguageCode(u[0]);
  }
  formatLanguageCode(o) {
    if (Ze(o) && o.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let y = Intl.getCanonicalLocales(o)[0];
          if (y && this.options.lowerCaseLng && (y = y.toLowerCase()), y) return y;
        } catch {
        }
      const u = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let d = o.split("-");
      return this.options.lowerCaseLng ? d = d.map((y) => y.toLowerCase()) : d.length === 2 ? (d[0] = d[0].toLowerCase(), d[1] = d[1].toUpperCase(), u.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ti(d[1].toLowerCase()))) : d.length === 3 && (d[0] = d[0].toLowerCase(), d[1].length === 2 && (d[1] = d[1].toUpperCase()), d[0] !== "sgn" && d[2].length === 2 && (d[2] = d[2].toUpperCase()), u.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ti(d[1].toLowerCase())), u.indexOf(d[2].toLowerCase()) > -1 && (d[2] = ti(d[2].toLowerCase()))), d.join("-");
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
    if (typeof o == "function" && (o = o(u)), Ze(o) && (o = [o]), Array.isArray(o)) return o;
    if (!u) return o.default || [];
    let d = o[u];
    return d || (d = o[this.getScriptPartFromCode(u)]), d || (d = o[this.formatLanguageCode(u)]), d || (d = o[this.getLanguagePartFromCode(u)]), d || (d = o.default), d || [];
  }
  toResolveHierarchy(o, u) {
    const d = this.getFallbackCodes(u || this.options.fallbackLng || [], o), y = [], m = (P) => {
      P && (this.isSupportedCode(P) ? y.push(P) : this.logger.warn(`rejecting language code not found in supportedLngs: ${P}`));
    };
    return Ze(o) && (o.indexOf("-") > -1 || o.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && m(this.formatLanguageCode(o)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && m(this.getScriptPartFromCode(o)), this.options.load !== "currentOnly" && m(this.getLanguagePartFromCode(o))) : Ze(o) && m(this.formatLanguageCode(o)), d.forEach((P) => {
      y.indexOf(P) < 0 && m(this.formatLanguageCode(P));
    }), y;
  }
}
let Ad = [{
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
}], Ed = {
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
const Td = ["v1", "v2", "v3"], _d = ["v4"], Ls = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Rd = () => {
  const f = {};
  return Ad.forEach((o) => {
    o.lngs.forEach((u) => {
      f[u] = {
        numbers: o.nr,
        plurals: Ed[o.fc]
      };
    });
  }), f;
};
class Dd {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = u, this.logger = Nn.create("pluralResolver"), (!this.options.compatibilityJSON || _d.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Rd(), this.pluralRulesCache = {};
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
      const d = fo(o === "dev" ? "en" : o), y = u.ordinal ? "ordinal" : "cardinal", m = JSON.stringify({
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
        const R = this.languageUtils.getLanguagePartFromCode(o);
        P = this.getRule(R, u);
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
    return !Td.includes(this.options.compatibilityJSON);
  }
}
const Vs = function(f, o, u) {
  let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = vd(f, o, u);
  return !m && y && Ze(u) && (m = si(f, u, d), m === void 0 && (m = si(o, u, d))), m;
}, ni = (f) => f.replace(/\$/g, "$$$$");
class Od {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Nn.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((u) => u), this.init(o);
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
      suffix: x,
      suffixEscaped: R,
      formatSeparator: j,
      unescapeSuffix: J,
      unescapePrefix: te,
      nestingPrefix: $,
      nestingPrefixEscaped: B,
      nestingSuffix: we,
      nestingSuffixEscaped: ge,
      nestingOptionsSeparator: q,
      maxReplaces: Ce,
      alwaysFormat: Z
    } = o.interpolation;
    this.escape = u !== void 0 ? u : Sd, this.escapeValue = d !== void 0 ? d : !0, this.useRawValueToEscape = y !== void 0 ? y : !1, this.prefix = m ? or(m) : P || "{{", this.suffix = x ? or(x) : R || "}}", this.formatSeparator = j || ",", this.unescapePrefix = J ? "" : te || "-", this.unescapeSuffix = this.unescapePrefix ? "" : J || "", this.nestingPrefix = $ ? or($) : B || or("$t("), this.nestingSuffix = we ? or(we) : ge || or(")"), this.nestingOptionsSeparator = q || ",", this.maxReplaces = Ce || 1e3, this.alwaysFormat = Z !== void 0 ? Z : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (u, d) => u && u.source === d ? (u.lastIndex = 0, u) : new RegExp(d, "g");
    this.regexp = o(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = o(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = o(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(o, u, d, y) {
    let m, P, x;
    const R = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, j = (B) => {
      if (B.indexOf(this.formatSeparator) < 0) {
        const Ce = Vs(u, R, B, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(Ce, void 0, d, {
          ...y,
          ...u,
          interpolationkey: B
        }) : Ce;
      }
      const we = B.split(this.formatSeparator), ge = we.shift().trim(), q = we.join(this.formatSeparator).trim();
      return this.format(Vs(u, R, ge, this.options.keySeparator, this.options.ignoreJSONStructure), q, d, {
        ...y,
        ...u,
        interpolationkey: ge
      });
    };
    this.resetRegExp();
    const J = y && y.missingInterpolationHandler || this.options.missingInterpolationHandler, te = y && y.interpolation && y.interpolation.skipOnVariables !== void 0 ? y.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (B) => ni(B)
    }, {
      regex: this.regexp,
      safeValue: (B) => this.escapeValue ? ni(this.escape(B)) : ni(B)
    }].forEach((B) => {
      for (x = 0; m = B.regex.exec(o); ) {
        const we = m[1].trim();
        if (P = j(we), P === void 0)
          if (typeof J == "function") {
            const q = J(o, m, y);
            P = Ze(q) ? q : "";
          } else if (y && Object.prototype.hasOwnProperty.call(y, we))
            P = "";
          else if (te) {
            P = m[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${we} for interpolating ${o}`), P = "";
        else !Ze(P) && !this.useRawValueToEscape && (P = Rs(P));
        const ge = B.safeValue(P);
        if (o = o.replace(m[0], ge), te ? (B.regex.lastIndex += P.length, B.regex.lastIndex -= m[0].length) : B.regex.lastIndex = 0, x++, x >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y, m, P;
    const x = (R, j) => {
      const J = this.nestingOptionsSeparator;
      if (R.indexOf(J) < 0) return R;
      const te = R.split(new RegExp(`${J}[ ]*{`));
      let $ = `{${te[1]}`;
      R = te[0], $ = this.interpolate($, P);
      const B = $.match(/'/g), we = $.match(/"/g);
      (B && B.length % 2 === 0 && !we || we.length % 2 !== 0) && ($ = $.replace(/'/g, '"'));
      try {
        P = JSON.parse($), j && (P = {
          ...j,
          ...P
        });
      } catch (ge) {
        return this.logger.warn(`failed parsing options string in nesting for key ${R}`, ge), `${R}${J}${$}`;
      }
      return P.defaultValue && P.defaultValue.indexOf(this.prefix) > -1 && delete P.defaultValue, R;
    };
    for (; y = this.nestingRegexp.exec(o); ) {
      let R = [];
      P = {
        ...d
      }, P = P.replace && !Ze(P.replace) ? P.replace : P, P.applyPostProcessor = !1, delete P.defaultValue;
      let j = !1;
      if (y[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(y[1])) {
        const J = y[1].split(this.formatSeparator).map((te) => te.trim());
        y[1] = J.shift(), R = J, j = !0;
      }
      if (m = u(x.call(this, y[1].trim(), P), P), m && y[0] === o && !Ze(m)) return m;
      Ze(m) || (m = Rs(m)), m || (this.logger.warn(`missed to resolve ${y[1]} for nesting ${o}`), m = ""), j && (m = R.reduce((J, te) => this.format(J, te, d.lng, {
        ...d,
        interpolationkey: y[1].trim()
      }), m.trim())), o = o.replace(y[0], m), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
const Wd = (f) => {
  let o = f.toLowerCase().trim();
  const u = {};
  if (f.indexOf("(") > -1) {
    const d = f.split("(");
    o = d[0].toLowerCase().trim();
    const y = d[1].substring(0, d[1].length - 1);
    o === "currency" && y.indexOf(":") < 0 ? u.currency || (u.currency = y.trim()) : o === "relativetime" && y.indexOf(":") < 0 ? u.range || (u.range = y.trim()) : y.split(";").forEach((P) => {
      if (P) {
        const [x, ...R] = P.split(":"), j = R.join(":").trim().replace(/^'+|'+$/g, ""), J = x.trim();
        u[J] || (u[J] = j), j === "false" && (u[J] = !1), j === "true" && (u[J] = !0), isNaN(j) || (u[J] = parseInt(j, 10));
      }
    });
  }
  return {
    formatName: o,
    formatOptions: u
  };
}, ir = (f) => {
  const o = {};
  return (u, d, y) => {
    let m = y;
    y && y.interpolationkey && y.formatParams && y.formatParams[y.interpolationkey] && y[y.interpolationkey] && (m = {
      ...m,
      [y.interpolationkey]: void 0
    });
    const P = d + JSON.stringify(m);
    let x = o[P];
    return x || (x = f(fo(d), y), o[P] = x), x(u);
  };
};
class Bd {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Nn.create("formatter"), this.options = o, this.formats = {
      number: ir((u, d) => {
        const y = new Intl.NumberFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      }),
      currency: ir((u, d) => {
        const y = new Intl.NumberFormat(u, {
          ...d,
          style: "currency"
        });
        return (m) => y.format(m);
      }),
      datetime: ir((u, d) => {
        const y = new Intl.DateTimeFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      }),
      relativetime: ir((u, d) => {
        const y = new Intl.RelativeTimeFormat(u, {
          ...d
        });
        return (m) => y.format(m, d.range || "day");
      }),
      list: ir((u, d) => {
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
    this.formats[o.toLowerCase().trim()] = ir(u);
  }
  format(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = u.split(this.formatSeparator);
    if (m.length > 1 && m[0].indexOf("(") > 1 && m[0].indexOf(")") < 0 && m.find((x) => x.indexOf(")") > -1)) {
      const x = m.findIndex((R) => R.indexOf(")") > -1);
      m[0] = [m[0], ...m.splice(1, x)].join(this.formatSeparator);
    }
    return m.reduce((x, R) => {
      const {
        formatName: j,
        formatOptions: J
      } = Wd(R);
      if (this.formats[j]) {
        let te = x;
        try {
          const $ = y && y.formatParams && y.formatParams[y.interpolationkey] || {}, B = $.locale || $.lng || y.locale || y.lng || d;
          te = this.formats[j](x, B, {
            ...J,
            ...y,
            ...$
          });
        } catch ($) {
          this.logger.warn($);
        }
        return te;
      } else
        this.logger.warn(`there was no format function for ${j}`);
      return x;
    }, o);
  }
}
const Nd = (f, o) => {
  f.pending[o] !== void 0 && (delete f.pending[o], f.pendingCount--);
};
class Fd extends mo {
  constructor(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = u, this.services = d, this.languageUtils = d.languageUtils, this.options = y, this.logger = Nn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = y.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = y.maxRetries >= 0 ? y.maxRetries : 5, this.retryTimeout = y.retryTimeout >= 1 ? y.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(d, y.backend, y);
  }
  queueLoad(o, u, d, y) {
    const m = {}, P = {}, x = {}, R = {};
    return o.forEach((j) => {
      let J = !0;
      u.forEach((te) => {
        const $ = `${j}|${te}`;
        !d.reload && this.store.hasResourceBundle(j, te) ? this.state[$] = 2 : this.state[$] < 0 || (this.state[$] === 1 ? P[$] === void 0 && (P[$] = !0) : (this.state[$] = 1, J = !1, P[$] === void 0 && (P[$] = !0), m[$] === void 0 && (m[$] = !0), R[te] === void 0 && (R[te] = !0)));
      }), J || (x[j] = !0);
    }), (Object.keys(m).length || Object.keys(P).length) && this.queue.push({
      pending: P,
      pendingCount: Object.keys(P).length,
      loaded: {},
      errors: [],
      callback: y
    }), {
      toLoad: Object.keys(m),
      pending: Object.keys(P),
      toLoadLanguages: Object.keys(x),
      toLoadNamespaces: Object.keys(R)
    };
  }
  loaded(o, u, d) {
    const y = o.split("|"), m = y[0], P = y[1];
    u && this.emit("failedLoading", m, P, u), !u && d && this.store.addResourceBundle(m, P, d, void 0, void 0, {
      skipCopy: !0
    }), this.state[o] = u ? -1 : 2, u && d && (this.state[o] = 0);
    const x = {};
    this.queue.forEach((R) => {
      bd(R.loaded, [m], P), Nd(R, o), u && R.errors.push(u), R.pendingCount === 0 && !R.done && (Object.keys(R.loaded).forEach((j) => {
        x[j] || (x[j] = {});
        const J = R.loaded[j];
        J.length && J.forEach((te) => {
          x[j][te] === void 0 && (x[j][te] = !0);
        });
      }), R.done = !0, R.errors.length ? R.callback(R.errors) : R.callback());
    }), this.emit("loaded", x), this.queue = this.queue.filter((R) => !R.done);
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
    const x = (j, J) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const te = this.waitingReads.shift();
        this.read(te.lng, te.ns, te.fcName, te.tried, te.wait, te.callback);
      }
      if (j && J && y < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, u, d, y + 1, m * 2, P);
        }, m);
        return;
      }
      P(j, J);
    }, R = this.backend[d].bind(this.backend);
    if (R.length === 2) {
      try {
        const j = R(o, u);
        j && typeof j.then == "function" ? j.then((J) => x(null, J)).catch(x) : x(null, j);
      } catch (j) {
        x(j);
      }
      return;
    }
    return R(o, u, x);
  }
  prepareLoading(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), y && y();
    Ze(o) && (o = this.languageUtils.toResolveHierarchy(o)), Ze(u) && (u = [u]);
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
    this.read(y, m, "read", void 0, void 0, (P, x) => {
      P && this.logger.warn(`${u}loading namespace ${m} for language ${y} failed`, P), !P && x && this.logger.log(`${u}loaded namespace ${m} for language ${y}`, x), this.loaded(o, P, x);
    });
  }
  saveMissing(o, u, d, y, m) {
    let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, x = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(u)) {
      this.logger.warn(`did not save key "${d}" as the namespace "${u}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(d == null || d === "")) {
      if (this.backend && this.backend.create) {
        const R = {
          ...P,
          isUpdate: m
        }, j = this.backend.create.bind(this.backend);
        if (j.length < 6)
          try {
            let J;
            j.length === 5 ? J = j(o, u, d, y, R) : J = j(o, u, d, y), J && typeof J.then == "function" ? J.then((te) => x(null, te)).catch(x) : x(null, J);
          } catch (J) {
            x(J);
          }
        else
          j(o, u, d, y, x, R);
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
    if (typeof f[1] == "object" && (o = f[1]), Ze(f[1]) && (o.defaultValue = f[1]), Ze(f[2]) && (o.tDescription = f[2]), typeof f[2] == "object" || typeof f[3] == "object") {
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
}), Ks = (f) => (Ze(f.ns) && (f.ns = [f.ns]), Ze(f.fallbackLng) && (f.fallbackLng = [f.fallbackLng]), Ze(f.fallbackNS) && (f.fallbackNS = [f.fallbackNS]), f.supportedLngs && f.supportedLngs.indexOf("cimode") < 0 && (f.supportedLngs = f.supportedLngs.concat(["cimode"])), f), co = () => {
}, Ld = (f) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(f)).forEach((u) => {
    typeof f[u] == "function" && (f[u] = f[u].bind(f));
  });
};
class Fr extends mo {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ks(o), this.services = {}, this.logger = Nn, this.modules = {
      external: []
    }, Ld(this), u && !this.isInitialized && !o.isClone) {
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
    this.isInitializing = !0, typeof u == "function" && (d = u, u = {}), !u.defaultNS && u.defaultNS !== !1 && u.ns && (Ze(u.ns) ? u.defaultNS = u.ns : u.ns.indexOf("translation") < 0 && (u.defaultNS = u.ns[0]));
    const y = Us();
    this.options = {
      ...y,
      ...this.options,
      ...Ks(u)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...y.interpolation,
      ...this.options.interpolation
    }), u.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = u.keySeparator), u.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = u.nsSeparator);
    const m = (J) => J ? typeof J == "function" ? new J() : J : null;
    if (!this.options.isClone) {
      this.modules.logger ? Nn.init(m(this.modules.logger), this.options) : Nn.init(null, this.options);
      let J;
      this.modules.formatter ? J = this.modules.formatter : typeof Intl < "u" && (J = Bd);
      const te = new Fs(this.options);
      this.store = new Bs(this.options.resources, this.options);
      const $ = this.services;
      $.logger = Nn, $.resourceStore = this.store, $.languageUtils = te, $.pluralResolver = new Dd(te, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), J && (!this.options.interpolation.format || this.options.interpolation.format === y.interpolation.format) && ($.formatter = m(J), $.formatter.init($, this.options), this.options.interpolation.format = $.formatter.format.bind($.formatter)), $.interpolator = new Od(this.options), $.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, $.backendConnector = new Fd(m(this.modules.backend), $.resourceStore, $, this.options), $.backendConnector.on("*", function(B) {
        for (var we = arguments.length, ge = new Array(we > 1 ? we - 1 : 0), q = 1; q < we; q++)
          ge[q - 1] = arguments[q];
        o.emit(B, ...ge);
      }), this.modules.languageDetector && ($.languageDetector = m(this.modules.languageDetector), $.languageDetector.init && $.languageDetector.init($, this.options.detection, this.options)), this.modules.i18nFormat && ($.i18nFormat = m(this.modules.i18nFormat), $.i18nFormat.init && $.i18nFormat.init(this)), this.translator = new go(this.services, this.options), this.translator.on("*", function(B) {
        for (var we = arguments.length, ge = new Array(we > 1 ? we - 1 : 0), q = 1; q < we; q++)
          ge[q - 1] = arguments[q];
        o.emit(B, ...ge);
      }), this.modules.external.forEach((B) => {
        B.init && B.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, d || (d = co), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const J = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      J.length > 0 && J[0] !== "dev" && (this.options.lng = J[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((J) => {
      this[J] = function() {
        return o.store[J](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((J) => {
      this[J] = function() {
        return o.store[J](...arguments), o;
      };
    });
    const R = Or(), j = () => {
      const J = (te, $) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), R.resolve($), d(te, $);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return J(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, J);
    };
    return this.options.resources || !this.options.initImmediate ? j() : setTimeout(j, 0), R;
  }
  loadResources(o) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : co;
    const y = Ze(o) ? o : this.language;
    if (typeof o == "function" && (d = o), !this.options.resources || this.options.partialBundledLanguages) {
      if (y && y.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return d();
      const m = [], P = (x) => {
        if (!x || x === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(x).forEach((j) => {
          j !== "cimode" && m.indexOf(j) < 0 && m.push(j);
        });
      };
      y ? P(y) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((R) => P(R)), this.options.preload && this.options.preload.forEach((x) => P(x)), this.services.backendConnector.load(m, this.options.ns, (x) => {
        !x && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), d(x);
      });
    } else
      d(null);
  }
  reloadResources(o, u, d) {
    const y = Or();
    return typeof o == "function" && (d = o, o = void 0), typeof u == "function" && (d = u, u = void 0), o || (o = this.languages), u || (u = this.options.ns), d || (d = co), this.services.backendConnector.reload(o, u, (m) => {
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
    const y = Or();
    this.emit("languageChanging", o);
    const m = (R) => {
      this.language = R, this.languages = this.services.languageUtils.toResolveHierarchy(R), this.resolvedLanguage = void 0, this.setResolvedLanguage(R);
    }, P = (R, j) => {
      j ? (m(j), this.translator.changeLanguage(j), this.isLanguageChangingTo = void 0, this.emit("languageChanged", j), this.logger.log("languageChanged", j)) : this.isLanguageChangingTo = void 0, y.resolve(function() {
        return d.t(...arguments);
      }), u && u(R, function() {
        return d.t(...arguments);
      });
    }, x = (R) => {
      !o && !R && this.services.languageDetector && (R = []);
      const j = Ze(R) ? R : this.services.languageUtils.getBestMatchFromCodes(R);
      j && (this.language || m(j), this.translator.language || this.translator.changeLanguage(j), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(j)), this.loadResources(j, (J) => {
        P(J, j);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? x(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(x) : this.services.languageDetector.detect(x) : x(o), y;
  }
  getFixedT(o, u, d) {
    var y = this;
    const m = function(P, x) {
      let R;
      if (typeof x != "object") {
        for (var j = arguments.length, J = new Array(j > 2 ? j - 2 : 0), te = 2; te < j; te++)
          J[te - 2] = arguments[te];
        R = y.options.overloadTranslationOptionHandler([P, x].concat(J));
      } else
        R = {
          ...x
        };
      R.lng = R.lng || m.lng, R.lngs = R.lngs || m.lngs, R.ns = R.ns || m.ns, R.keyPrefix !== "" && (R.keyPrefix = R.keyPrefix || d || m.keyPrefix);
      const $ = y.options.keySeparator || ".";
      let B;
      return R.keyPrefix && Array.isArray(P) ? B = P.map((we) => `${R.keyPrefix}${$}${we}`) : B = R.keyPrefix ? `${R.keyPrefix}${$}${P}` : P, y.t(B, R);
    };
    return Ze(o) ? m.lng = o : m.lngs = o, m.ns = u, m.keyPrefix = d, m;
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
    const P = (x, R) => {
      const j = this.services.backendConnector.state[`${x}|${R}`];
      return j === -1 || j === 0 || j === 2;
    };
    if (u.precheck) {
      const x = u.precheck(this, P);
      if (x !== void 0) return x;
    }
    return !!(this.hasResourceBundle(d, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || P(d, o) && (!y || P(m, o)));
  }
  loadNamespaces(o, u) {
    const d = Or();
    return this.options.ns ? (Ze(o) && (o = [o]), o.forEach((y) => {
      this.options.ns.indexOf(y) < 0 && this.options.ns.push(y);
    }), this.loadResources((y) => {
      d.resolve(), u && u(y);
    }), d) : (u && u(), Promise.resolve());
  }
  loadLanguages(o, u) {
    const d = Or();
    Ze(o) && (o = [o]);
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
    return new Fr(o, u);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : co;
    const d = o.forkResourceStore;
    d && delete o.forkResourceStore;
    const y = {
      ...this.options,
      ...o,
      isClone: !0
    }, m = new Fr(y);
    return (o.debug !== void 0 || o.prefix !== void 0) && (m.logger = m.logger.clone(o)), ["store", "services", "language"].forEach((x) => {
      m[x] = this[x];
    }), m.services = {
      ...this.services
    }, m.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, d && (m.store = new Bs(this.store.data, y), m.services.resourceStore = m.store), m.translator = new go(m.services, y), m.translator.on("*", function(x) {
      for (var R = arguments.length, j = new Array(R > 1 ? R - 1 : 0), J = 1; J < R; J++)
        j[J - 1] = arguments[J];
      m.emit(x, ...j);
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
const ic = Fr.createInstance();
ic.createInstance = Fr.createInstance;
var Vd = ic;
(() => {
  var f = { 847: (y, m) => {
    var P = { 2346: function($, B, we) {
      var ge = this && this.__importDefault || function(Z) {
        return Z && Z.__esModule ? Z : { default: Z };
      };
      Object.defineProperty(B, "__esModule", { value: !0 }), B.getMostReadable = B.darkenColor = B.lightenColor = void 0;
      const q = ge(we(6535));
      B.lightenColor = (Z, Ie) => Ce(Z, "lighten", Ie), B.darkenColor = (Z, Ie) => Ce(Z, "darken", Ie);
      const Ce = (Z, Ie, ne) => {
        if (ne && (ne < 0 || ne > 100)) throw new Error(`${ne} must be a number between 0 and 100`);
        return (0, q.default)(Z)[Ie](ne).toString();
      };
      B.getMostReadable = (Z, Ie) => q.default.mostReadable(Z, Ie).toHexString();
    }, 2317: ($, B) => {
      Object.defineProperty(B, "__esModule", { value: !0 }), B.IconSize = B.Transition = B.LineHeight = B.FontWeight = B.FontSize = B.FontFamily = B.Shadow = B.Radius = B.UnitPx = B.Unit = B.SizeName = B.Size = B.Color = void 0, B.Color = { white: "#FFFFFF", lightGray1: "#FAFBFE", lightGray2: "#F3F5F8", lightGray3: "#ECEEF1", lightGray4: "#DDDFE4", lightGray5: "#C9CBD2", neutralGray: "#7D808A", neutralGray80: "rgba(125,128,138,0.8)", silverGray: "#C0C1C2", darkGray1: "#53565F", darkGray2: "#383A40", darkGray3: "#2F3136", darkGray4: "#24262B", darkGray5: "#1E1F23", darkGray6: "#111214", openFinDarkest: "#3D39CD", openFinDarker: "#4642E0", openFin: "#504CFF", openFinLight: "#5254FB", openFinLighter: "#5C5EFE", openFinLightest: "#6864FF", functional1: "#207735", functional2: "#46C8F1", functional3: "#0A76D3", functional4: "#6CADE5", functional5: "#0A76D3", functional6: "#882BFE", functional7: "#F31818", functional8: "#C93400", functional9: "#FF5E60", functional10: "#F48F00", purple: "#8C61FF", lightblue: "#36C3FE", aqua: "#00CC88", yellow: "#FFEB00", salmon: "#FF8C4C", pink: "#FF5E60", lightpink: "#FF8FB8", white00: "rgba(255,255,255,0.0)", white10: "rgba(255,255,255,0.1)", white20: "rgba(255,255,255,0.2)", white30: "rgba(255,255,255,0.3)", white40: "rgba(255,255,255,0.4)", white50: "rgba(255,255,255,0.5)", white60: "rgba(255,255,255,0.6)", white70: "rgba(255,255,255,0.7)", white80: "rgba(255,255,255,0.8)", white90: "rgba(255,255,255,0.9)", black00: "rgba(0,0,0,0.0)", black10: "rgba(0,0,0,0.1)", black20: "rgba(0,0,0,0.2)", black30: "rgba(0,0,0,0.3)", black40: "rgba(0,0,0,0.4)", black50: "rgba(0,0,0,0.5)", black60: "rgba(0,0,0,0.6)", black70: "rgba(0,0,0,0.7)", black80: "rgba(0,0,0,0.8)", black90: "rgba(0,0,0,0.9)", transparent: "transparent", openFinActive: "#4642FF", openFinHover: "#6965FF", lightGray4Active: "#D7DADF", lightGray4Hover: "#EBECEF", darkGray2Active: "#33353B", darkGray2Hover: "#44464E" }, B.Size = { xsmall: "xsmall", small: "small", base: "base", large: "large", xlarge: "xlarge", xxlarge: "xxlarge", xxxlarge: "xxxlarge", xxxxlarge: "xxxxlarge" }, B.SizeName = { [B.Size.xsmall]: "Extra Small", [B.Size.small]: "Small", [B.Size.base]: "Base", [B.Size.large]: "Large", [B.Size.xlarge]: "Extra Large", [B.Size.xxlarge]: "2X Large", [B.Size.xxxlarge]: "3X Large", [B.Size.xxxxlarge]: "4X Large" }, B.Unit = { [B.Size.xsmall]: 4, [B.Size.small]: 8, [B.Size.base]: 12, [B.Size.large]: 16, [B.Size.xlarge]: 20, [B.Size.xxlarge]: 24, [B.Size.xxxlarge]: 32, [B.Size.xxxxlarge]: 48 }, B.UnitPx = { [B.Size.xsmall]: "4px", [B.Size.small]: "8px", [B.Size.base]: "12px", [B.Size.large]: "16px", [B.Size.xlarge]: "20px", [B.Size.xxlarge]: "24px", [B.Size.xxxlarge]: "32px", [B.Size.xxxxlarge]: "48px" }, B.Radius = { [B.Size.xsmall]: "2px", [B.Size.small]: "4px", [B.Size.base]: "8px", [B.Size.large]: "24px", pill: "100vh", round: "50%", none: "0" }, B.Shadow = { [B.Size.base]: "0 4px 4px rgba(0, 0, 0, 0.25)" }, B.FontFamily = ["Inter", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"].join(","), B.FontSize = { [B.Size.xsmall]: "8px", [B.Size.small]: "10px", [B.Size.base]: "12px", [B.Size.large]: "14px", [B.Size.xlarge]: "16px", [B.Size.xxlarge]: "18px", [B.Size.xxxlarge]: "20px", [B.Size.xxxxlarge]: "40px" }, B.FontWeight = { normal: 400, bold: 600 }, B.LineHeight = { ui: 1, heading: 1.2, text: 1.5 }, B.Transition = { base: "200ms cubic-bezier(0.16, 1, 0.3, 1)", none: "0ms" }, B.IconSize = { [B.Size.xsmall]: B.UnitPx.small, [B.Size.small]: B.UnitPx.base, [B.Size.base]: "15px", [B.Size.large]: B.UnitPx.xlarge, [B.Size.xlarge]: B.UnitPx.xxlarge, [B.Size.xxlarge]: B.UnitPx.xxxlarge, [B.Size.xxxlarge]: B.UnitPx.xxxxlarge };
    }, 6893: ($, B, we) => {
      Object.defineProperty(B, "__esModule", { value: !0 }), B.createTheme = void 0;
      const ge = we(2317), q = we(2346), Ce = we(5939), Z = { fontFamily: ge.FontFamily, fontSize: ge.FontSize, fontWeight: ge.FontWeight, lineHeight: ge.LineHeight, iconSize: ge.IconSize, radius: ge.Radius, shadow: ge.Shadow, transition: ge.Transition, unit: ge.Unit, px: ge.UnitPx }, Ie = (ne, Se) => ({ [`${ne}Active`]: (0, q.darkenColor)(Se, 2), [`${ne}Hover`]: (0, q.lightenColor)(Se, 5), [`${ne}Focused`]: (0, q.getMostReadable)(Se, [ge.Color.white, ge.Color.darkGray5]), [`${ne}Text`]: (0, q.getMostReadable)(Se, [ge.Color.white, ge.Color.darkGray5]) });
      B.createTheme = (ne) => Object.assign(Object.assign({}, Z), { palette: Object.assign(Object.assign(Object.assign({}, Ie(Ce.Palette.brandPrimary, ne.brandPrimary)), Ie(Ce.Palette.brandSecondary, ne.brandSecondary)), ne) });
    }, 5939: ($, B) => {
      Object.defineProperty(B, "__esModule", { value: !0 }), B.Palette = void 0, B.Palette = { background1: "background1", background2: "background2", background3: "background3", background4: "background4", background5: "background5", background6: "background6", brandPrimary: "brandPrimary", brandSecondary: "brandSecondary", brandPrimaryActive: "brandPrimaryActive", brandPrimaryHover: "brandPrimaryHover", brandPrimaryFocused: "brandPrimaryFocused", brandPrimaryText: "brandPrimaryText", brandSecondaryActive: "brandSecondaryActive", brandSecondaryHover: "brandSecondaryHover", brandSecondaryFocused: "brandSecondaryFocused", brandSecondaryText: "brandSecondaryText", inputBackground: "inputBackground", inputColor: "inputColor", inputPlaceholder: "inputPlaceholder", inputDisabled: "inputDisabled", inputFocused: "inputFocused", inputBorder: "inputBorder", statusSuccess: "statusSuccess", statusWarning: "statusWarning", statusCritical: "statusCritical", statusActive: "statusActive", textDefault: "textDefault", textHelp: "textHelp", textInactive: "textInactive", borderNeutral: "borderNeutral", contentBackground1: "contentBackground1", contentBackground2: "contentBackground2", contentBackground3: "contentBackground3", contentBackground4: "contentBackground4", contentBackground5: "contentBackground5", linkDefault: "linkDefault", linkHover: "linkHover" };
    }, 6535: function($) {
      $.exports = function() {
        function B(M) {
          return (B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(z) {
            return typeof z;
          } : function(z) {
            return z && typeof Symbol == "function" && z.constructor === Symbol && z !== Symbol.prototype ? "symbol" : typeof z;
          })(M);
        }
        var we = /^\s+/, ge = /\s+$/;
        function q(M, z) {
          if (z = z || {}, (M = M || "") instanceof q) return M;
          if (!(this instanceof q)) return new q(M, z);
          var G = function(ae) {
            var Fe, Be, ze, bt = { r: 0, g: 0, b: 0 }, Ae = 1, St = null, gn = null, on = null, sn = !1, Gt = !1;
            return typeof ae == "string" && (ae = function(je) {
              je = je.replace(we, "").replace(ge, "").toLowerCase();
              var be, dt = !1;
              if (Lt[je]) je = Lt[je], dt = !0;
              else if (je == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              return (be = ke.rgb.exec(je)) ? { r: be[1], g: be[2], b: be[3] } : (be = ke.rgba.exec(je)) ? { r: be[1], g: be[2], b: be[3], a: be[4] } : (be = ke.hsl.exec(je)) ? { h: be[1], s: be[2], l: be[3] } : (be = ke.hsla.exec(je)) ? { h: be[1], s: be[2], l: be[3], a: be[4] } : (be = ke.hsv.exec(je)) ? { h: be[1], s: be[2], v: be[3] } : (be = ke.hsva.exec(je)) ? { h: be[1], s: be[2], v: be[3], a: be[4] } : (be = ke.hex8.exec(je)) ? { r: re(be[1]), g: re(be[2]), b: re(be[3]), a: rt(be[4]), format: dt ? "name" : "hex8" } : (be = ke.hex6.exec(je)) ? { r: re(be[1]), g: re(be[2]), b: re(be[3]), format: dt ? "name" : "hex" } : (be = ke.hex4.exec(je)) ? { r: re(be[1] + "" + be[1]), g: re(be[2] + "" + be[2]), b: re(be[3] + "" + be[3]), a: rt(be[4] + "" + be[4]), format: dt ? "name" : "hex8" } : !!(be = ke.hex3.exec(je)) && { r: re(be[1] + "" + be[1]), g: re(be[2] + "" + be[2]), b: re(be[3] + "" + be[3]), format: dt ? "name" : "hex" };
            }(ae)), B(ae) == "object" && (qt(ae.r) && qt(ae.g) && qt(ae.b) ? (Fe = ae.r, Be = ae.g, ze = ae.b, bt = { r: 255 * Ve(Fe, 255), g: 255 * Ve(Be, 255), b: 255 * Ve(ze, 255) }, sn = !0, Gt = String(ae.r).substr(-1) === "%" ? "prgb" : "rgb") : qt(ae.h) && qt(ae.s) && qt(ae.v) ? (St = De(ae.s), gn = De(ae.v), bt = function(je, be, dt) {
              je = 6 * Ve(je, 360), be = Ve(be, 100), dt = Ve(dt, 100);
              var Zt = Math.floor(je), nn = je - Zt, Vt = dt * (1 - be), $t = dt * (1 - nn * be), zt = dt * (1 - (1 - nn) * be), xt = Zt % 6;
              return { r: 255 * [dt, $t, Vt, Vt, zt, dt][xt], g: 255 * [zt, dt, dt, $t, Vt, Vt][xt], b: 255 * [Vt, Vt, zt, dt, dt, $t][xt] };
            }(ae.h, St, gn), sn = !0, Gt = "hsv") : qt(ae.h) && qt(ae.s) && qt(ae.l) && (St = De(ae.s), on = De(ae.l), bt = function(je, be, dt) {
              var Zt, nn, Vt;
              function $t(Ct, Te, Ut) {
                return Ut < 0 && (Ut += 1), Ut > 1 && (Ut -= 1), Ut < 1 / 6 ? Ct + 6 * (Te - Ct) * Ut : Ut < 0.5 ? Te : Ut < 2 / 3 ? Ct + (Te - Ct) * (2 / 3 - Ut) * 6 : Ct;
              }
              if (je = Ve(je, 360), be = Ve(be, 100), dt = Ve(dt, 100), be === 0) Zt = nn = Vt = dt;
              else {
                var zt = dt < 0.5 ? dt * (1 + be) : dt + be - dt * be, xt = 2 * dt - zt;
                Zt = $t(xt, zt, je + 1 / 3), nn = $t(xt, zt, je), Vt = $t(xt, zt, je - 1 / 3);
              }
              return { r: 255 * Zt, g: 255 * nn, b: 255 * Vt };
            }(ae.h, St, on), sn = !0, Gt = "hsl"), ae.hasOwnProperty("a") && (Ae = ae.a)), Ae = Rt(Ae), { ok: sn, format: ae.format || Gt, r: Math.min(255, Math.max(bt.r, 0)), g: Math.min(255, Math.max(bt.g, 0)), b: Math.min(255, Math.max(bt.b, 0)), a: Ae };
          }(M);
          this._originalInput = M, this._r = G.r, this._g = G.g, this._b = G.b, this._a = G.a, this._roundA = Math.round(100 * this._a) / 100, this._format = z.format || G.format, this._gradientType = z.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = G.ok;
        }
        function Ce(M, z, G) {
          M = Ve(M, 255), z = Ve(z, 255), G = Ve(G, 255);
          var ae, Fe, Be = Math.max(M, z, G), ze = Math.min(M, z, G), bt = (Be + ze) / 2;
          if (Be == ze) ae = Fe = 0;
          else {
            var Ae = Be - ze;
            switch (Fe = bt > 0.5 ? Ae / (2 - Be - ze) : Ae / (Be + ze), Be) {
              case M:
                ae = (z - G) / Ae + (z < G ? 6 : 0);
                break;
              case z:
                ae = (G - M) / Ae + 2;
                break;
              case G:
                ae = (M - z) / Ae + 4;
            }
            ae /= 6;
          }
          return { h: ae, s: Fe, l: bt };
        }
        function Z(M, z, G) {
          M = Ve(M, 255), z = Ve(z, 255), G = Ve(G, 255);
          var ae, Fe, Be = Math.max(M, z, G), ze = Math.min(M, z, G), bt = Be, Ae = Be - ze;
          if (Fe = Be === 0 ? 0 : Ae / Be, Be == ze) ae = 0;
          else {
            switch (Be) {
              case M:
                ae = (z - G) / Ae + (z < G ? 6 : 0);
                break;
              case z:
                ae = (G - M) / Ae + 2;
                break;
              case G:
                ae = (M - z) / Ae + 4;
            }
            ae /= 6;
          }
          return { h: ae, s: Fe, v: bt };
        }
        function Ie(M, z, G, ae) {
          var Fe = [We(Math.round(M).toString(16)), We(Math.round(z).toString(16)), We(Math.round(G).toString(16))];
          return ae && Fe[0].charAt(0) == Fe[0].charAt(1) && Fe[1].charAt(0) == Fe[1].charAt(1) && Fe[2].charAt(0) == Fe[2].charAt(1) ? Fe[0].charAt(0) + Fe[1].charAt(0) + Fe[2].charAt(0) : Fe.join("");
        }
        function ne(M, z, G, ae) {
          return [We(Je(ae)), We(Math.round(M).toString(16)), We(Math.round(z).toString(16)), We(Math.round(G).toString(16))].join("");
        }
        function Se(M, z) {
          z = z === 0 ? 0 : z || 10;
          var G = q(M).toHsl();
          return G.s -= z / 100, G.s = O(G.s), q(G);
        }
        function ce(M, z) {
          z = z === 0 ? 0 : z || 10;
          var G = q(M).toHsl();
          return G.s += z / 100, G.s = O(G.s), q(G);
        }
        function se(M) {
          return q(M).desaturate(100);
        }
        function gt(M, z) {
          z = z === 0 ? 0 : z || 10;
          var G = q(M).toHsl();
          return G.l += z / 100, G.l = O(G.l), q(G);
        }
        function He(M, z) {
          z = z === 0 ? 0 : z || 10;
          var G = q(M).toRgb();
          return G.r = Math.max(0, Math.min(255, G.r - Math.round(-z / 100 * 255))), G.g = Math.max(0, Math.min(255, G.g - Math.round(-z / 100 * 255))), G.b = Math.max(0, Math.min(255, G.b - Math.round(-z / 100 * 255))), q(G);
        }
        function tt(M, z) {
          z = z === 0 ? 0 : z || 10;
          var G = q(M).toHsl();
          return G.l -= z / 100, G.l = O(G.l), q(G);
        }
        function mt(M, z) {
          var G = q(M).toHsl(), ae = (G.h + z) % 360;
          return G.h = ae < 0 ? 360 + ae : ae, q(G);
        }
        function Qe(M) {
          var z = q(M).toHsl();
          return z.h = (z.h + 180) % 360, q(z);
        }
        function ut(M, z) {
          if (isNaN(z) || z <= 0) throw new Error("Argument to polyad must be a positive number");
          for (var G = q(M).toHsl(), ae = [q(M)], Fe = 360 / z, Be = 1; Be < z; Be++) ae.push(q({ h: (G.h + Be * Fe) % 360, s: G.s, l: G.l }));
          return ae;
        }
        function yt(M) {
          var z = q(M).toHsl(), G = z.h;
          return [q(M), q({ h: (G + 72) % 360, s: z.s, l: z.l }), q({ h: (G + 216) % 360, s: z.s, l: z.l })];
        }
        function Oe(M, z, G) {
          z = z || 6, G = G || 30;
          var ae = q(M).toHsl(), Fe = 360 / G, Be = [q(M)];
          for (ae.h = (ae.h - (Fe * z >> 1) + 720) % 360; --z; ) ae.h = (ae.h + Fe) % 360, Be.push(q(ae));
          return Be;
        }
        function at(M, z) {
          z = z || 6;
          for (var G = q(M).toHsv(), ae = G.h, Fe = G.s, Be = G.v, ze = [], bt = 1 / z; z--; ) ze.push(q({ h: ae, s: Fe, v: Be })), Be = (Be + bt) % 1;
          return ze;
        }
        q.prototype = { isDark: function() {
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
          var M = this.toRgb();
          return (299 * M.r + 587 * M.g + 114 * M.b) / 1e3;
        }, getLuminance: function() {
          var M, z, G, ae = this.toRgb();
          return M = ae.r / 255, z = ae.g / 255, G = ae.b / 255, 0.2126 * (M <= 0.03928 ? M / 12.92 : Math.pow((M + 0.055) / 1.055, 2.4)) + 0.7152 * (z <= 0.03928 ? z / 12.92 : Math.pow((z + 0.055) / 1.055, 2.4)) + 0.0722 * (G <= 0.03928 ? G / 12.92 : Math.pow((G + 0.055) / 1.055, 2.4));
        }, setAlpha: function(M) {
          return this._a = Rt(M), this._roundA = Math.round(100 * this._a) / 100, this;
        }, toHsv: function() {
          var M = Z(this._r, this._g, this._b);
          return { h: 360 * M.h, s: M.s, v: M.v, a: this._a };
        }, toHsvString: function() {
          var M = Z(this._r, this._g, this._b), z = Math.round(360 * M.h), G = Math.round(100 * M.s), ae = Math.round(100 * M.v);
          return this._a == 1 ? "hsv(" + z + ", " + G + "%, " + ae + "%)" : "hsva(" + z + ", " + G + "%, " + ae + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var M = Ce(this._r, this._g, this._b);
          return { h: 360 * M.h, s: M.s, l: M.l, a: this._a };
        }, toHslString: function() {
          var M = Ce(this._r, this._g, this._b), z = Math.round(360 * M.h), G = Math.round(100 * M.s), ae = Math.round(100 * M.l);
          return this._a == 1 ? "hsl(" + z + ", " + G + "%, " + ae + "%)" : "hsla(" + z + ", " + G + "%, " + ae + "%, " + this._roundA + ")";
        }, toHex: function(M) {
          return Ie(this._r, this._g, this._b, M);
        }, toHexString: function(M) {
          return "#" + this.toHex(M);
        }, toHex8: function(M) {
          return function(z, G, ae, Fe, Be) {
            var ze = [We(Math.round(z).toString(16)), We(Math.round(G).toString(16)), We(Math.round(ae).toString(16)), We(Je(Fe))];
            return Be && ze[0].charAt(0) == ze[0].charAt(1) && ze[1].charAt(0) == ze[1].charAt(1) && ze[2].charAt(0) == ze[2].charAt(1) && ze[3].charAt(0) == ze[3].charAt(1) ? ze[0].charAt(0) + ze[1].charAt(0) + ze[2].charAt(0) + ze[3].charAt(0) : ze.join("");
          }(this._r, this._g, this._b, this._a, M);
        }, toHex8String: function(M) {
          return "#" + this.toHex8(M);
        }, toRgb: function() {
          return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
        }, toRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: Math.round(100 * Ve(this._r, 255)) + "%", g: Math.round(100 * Ve(this._g, 255)) + "%", b: Math.round(100 * Ve(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(100 * Ve(this._r, 255)) + "%, " + Math.round(100 * Ve(this._g, 255)) + "%, " + Math.round(100 * Ve(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * Ve(this._r, 255)) + "%, " + Math.round(100 * Ve(this._g, 255)) + "%, " + Math.round(100 * Ve(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return this._a === 0 ? "transparent" : !(this._a < 1) && (ot[Ie(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function(M) {
          var z = "#" + ne(this._r, this._g, this._b, this._a), G = z, ae = this._gradientType ? "GradientType = 1, " : "";
          if (M) {
            var Fe = q(M);
            G = "#" + ne(Fe._r, Fe._g, Fe._b, Fe._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + ae + "startColorstr=" + z + ",endColorstr=" + G + ")";
        }, toString: function(M) {
          var z = !!M;
          M = M || this._format;
          var G = !1, ae = this._a < 1 && this._a >= 0;
          return z || !ae || M !== "hex" && M !== "hex6" && M !== "hex3" && M !== "hex4" && M !== "hex8" && M !== "name" ? (M === "rgb" && (G = this.toRgbString()), M === "prgb" && (G = this.toPercentageRgbString()), M !== "hex" && M !== "hex6" || (G = this.toHexString()), M === "hex3" && (G = this.toHexString(!0)), M === "hex4" && (G = this.toHex8String(!0)), M === "hex8" && (G = this.toHex8String()), M === "name" && (G = this.toName()), M === "hsl" && (G = this.toHslString()), M === "hsv" && (G = this.toHsvString()), G || this.toHexString()) : M === "name" && this._a === 0 ? this.toName() : this.toRgbString();
        }, clone: function() {
          return q(this.toString());
        }, _applyModification: function(M, z) {
          var G = M.apply(null, [this].concat([].slice.call(z)));
          return this._r = G._r, this._g = G._g, this._b = G._b, this.setAlpha(G._a), this;
        }, lighten: function() {
          return this._applyModification(gt, arguments);
        }, brighten: function() {
          return this._applyModification(He, arguments);
        }, darken: function() {
          return this._applyModification(tt, arguments);
        }, desaturate: function() {
          return this._applyModification(Se, arguments);
        }, saturate: function() {
          return this._applyModification(ce, arguments);
        }, greyscale: function() {
          return this._applyModification(se, arguments);
        }, spin: function() {
          return this._applyModification(mt, arguments);
        }, _applyCombination: function(M, z) {
          return M.apply(null, [this].concat([].slice.call(z)));
        }, analogous: function() {
          return this._applyCombination(Oe, arguments);
        }, complement: function() {
          return this._applyCombination(Qe, arguments);
        }, monochromatic: function() {
          return this._applyCombination(at, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(yt, arguments);
        }, triad: function() {
          return this._applyCombination(ut, [3]);
        }, tetrad: function() {
          return this._applyCombination(ut, [4]);
        } }, q.fromRatio = function(M, z) {
          if (B(M) == "object") {
            var G = {};
            for (var ae in M) M.hasOwnProperty(ae) && (G[ae] = ae === "a" ? M[ae] : De(M[ae]));
            M = G;
          }
          return q(M, z);
        }, q.equals = function(M, z) {
          return !(!M || !z) && q(M).toRgbString() == q(z).toRgbString();
        }, q.random = function() {
          return q.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
        }, q.mix = function(M, z, G) {
          G = G === 0 ? 0 : G || 50;
          var ae = q(M).toRgb(), Fe = q(z).toRgb(), Be = G / 100;
          return q({ r: (Fe.r - ae.r) * Be + ae.r, g: (Fe.g - ae.g) * Be + ae.g, b: (Fe.b - ae.b) * Be + ae.b, a: (Fe.a - ae.a) * Be + ae.a });
        }, q.readability = function(M, z) {
          var G = q(M), ae = q(z);
          return (Math.max(G.getLuminance(), ae.getLuminance()) + 0.05) / (Math.min(G.getLuminance(), ae.getLuminance()) + 0.05);
        }, q.isReadable = function(M, z, G) {
          var ae, Fe, Be, ze, bt, Ae = q.readability(M, z);
          switch (Fe = !1, (Be = G, (ze = ((Be = Be || { level: "AA", size: "small" }).level || "AA").toUpperCase()) !== "AA" && ze !== "AAA" && (ze = "AA"), (bt = (Be.size || "small").toLowerCase()) !== "small" && bt !== "large" && (bt = "small"), ae = { level: ze, size: bt }).level + ae.size) {
            case "AAsmall":
            case "AAAlarge":
              Fe = Ae >= 4.5;
              break;
            case "AAlarge":
              Fe = Ae >= 3;
              break;
            case "AAAsmall":
              Fe = Ae >= 7;
          }
          return Fe;
        }, q.mostReadable = function(M, z, G) {
          var ae, Fe, Be, ze, bt = null, Ae = 0;
          Fe = (G = G || {}).includeFallbackColors, Be = G.level, ze = G.size;
          for (var St = 0; St < z.length; St++) (ae = q.readability(M, z[St])) > Ae && (Ae = ae, bt = q(z[St]));
          return q.isReadable(M, bt, { level: Be, size: ze }) || !Fe ? bt : (G.includeFallbackColors = !1, q.mostReadable(M, ["#fff", "#000"], G));
        };
        var Lt = q.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, ot = q.hexNames = function(M) {
          var z = {};
          for (var G in M) M.hasOwnProperty(G) && (z[M[G]] = G);
          return z;
        }(Lt);
        function Rt(M) {
          return M = parseFloat(M), (isNaN(M) || M < 0 || M > 1) && (M = 1), M;
        }
        function Ve(M, z) {
          (function(ae) {
            return typeof ae == "string" && ae.indexOf(".") != -1 && parseFloat(ae) === 1;
          })(M) && (M = "100%");
          var G = function(ae) {
            return typeof ae == "string" && ae.indexOf("%") != -1;
          }(M);
          return M = Math.min(z, Math.max(0, parseFloat(M))), G && (M = parseInt(M * z, 10) / 100), Math.abs(M - z) < 1e-6 ? 1 : M % z / parseFloat(z);
        }
        function O(M) {
          return Math.min(1, Math.max(0, M));
        }
        function re(M) {
          return parseInt(M, 16);
        }
        function We(M) {
          return M.length == 1 ? "0" + M : "" + M;
        }
        function De(M) {
          return M <= 1 && (M = 100 * M + "%"), M;
        }
        function Je(M) {
          return Math.round(255 * parseFloat(M)).toString(16);
        }
        function rt(M) {
          return re(M) / 255;
        }
        var Ge, Bt, lt, ke = (Bt = "[\\s|\\(]+(" + (Ge = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + Ge + ")[,|\\s]+(" + Ge + ")\\s*\\)?", lt = "[\\s|\\(]+(" + Ge + ")[,|\\s]+(" + Ge + ")[,|\\s]+(" + Ge + ")[,|\\s]+(" + Ge + ")\\s*\\)?", { CSS_UNIT: new RegExp(Ge), rgb: new RegExp("rgb" + Bt), rgba: new RegExp("rgba" + lt), hsl: new RegExp("hsl" + Bt), hsla: new RegExp("hsla" + lt), hsv: new RegExp("hsv" + Bt), hsva: new RegExp("hsva" + lt), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
        function qt(M) {
          return !!ke.CSS_UNIT.exec(M);
        }
        return q;
      }();
    } }, x = {};
    function R($) {
      var B = x[$];
      if (B !== void 0) return B.exports;
      var we = x[$] = { exports: {} };
      return P[$].call(we.exports, we, we.exports, R), we.exports;
    }
    var j = {};
    (() => {
      var $ = j;
      Object.defineProperty($, "__esModule", { value: !0 }), $.createTheme = $.Palette = $.Color = void 0;
      var B = R(2317);
      Object.defineProperty($, "Color", { enumerable: !0, get: function() {
        return B.Color;
      } });
      var we = R(5939);
      Object.defineProperty($, "Palette", { enumerable: !0, get: function() {
        return we.Palette;
      } });
      var ge = R(6893);
      Object.defineProperty($, "createTheme", { enumerable: !0, get: function() {
        return ge.createTheme;
      } });
    })();
    var J = m;
    for (var te in j) J[te] = j[te];
    j.__esModule && Object.defineProperty(J, "__esModule", { value: !0 });
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
    u.r(d), u.d(d, { AppManifestType: () => te, BookmarkItemContextMenuOptionType: () => ce, BrowserButtonType: () => gt, ColorSchemeOptionType: () => Ie, CustomActionCallerType: () => mt, Dock: () => B, EnterpriseMainContextMenuOptionType: () => Se, GlobalContextMenuOptionType: () => Z, PageChangeEventType: () => Ce, PageTabContextMenuOptionType: () => ne, PanelPosition: () => q, SUPPORTED_LANGUAGES: () => Qe, SaveButtonContextMenuOptionType: () => He, SaveModalType: () => ut, ViewTabMenuOptionType: () => se, WindowType: () => tt, getCurrentSync: () => b, init: () => Yu, wrapSync: () => v });
    var y = {};
    u.r(y), u.d(y, { createNamespacedLocalStorage: () => Qn, getItem: () => Pa, removeItem: () => wo, setItem: () => it });
    var m, P, x, R, j, J, te, $, B = {};
    u.r(B), u.d(B, { init: () => yn }), function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    }(m || (m = {})), function(e) {
      e.UserAction = "user-action", e.FocusChange = "focus-change", e.Reload = "reload";
    }(P || (P = {})), function(e) {
      e.Active = "active", e.Default = "default";
    }(x || (x = {})), function(e) {
      e.Suggestion = "suggestion";
    }(R || (R = {})), function(e) {
      e.Contact = "Contact", e.Custom = "Custom", e.List = "List", e.Plain = "Plain", e.SimpleText = "SimpleText", e.Loading = "Loading", e.Error = "Error";
    }(j || (j = {})), function(e) {
      e.MultiSelect = "MultiSelect";
    }(J || (J = {})), function(e) {
      e.Snapshot = "snapshot", e.Manifest = "manifest", e.View = "view", e.External = "external";
    }(te || (te = {})), function(e) {
      e.LandingPage = "landingPage", e.AppGrid = "appGrid";
    }($ || ($ = {}));
    var we, ge, q, Ce, Z, Ie, ne, Se, ce, se, gt, He, tt, mt;
    (function(e) {
      e.Primary = "primary", e.Secondary = "secondary", e.TextOnly = "textOnly";
    })(we || (we = {})), function(e) {
      e.ActionButton = "ActionButton", e.DropdownButton = "DropdownButton";
    }(ge || (ge = {})), function(e) {
      e.Left = "Left", e.Right = "Right", e.Top = "Top", e.Bottom = "Bottom";
    }(q || (q = {})), function(e) {
      e.UrlChange = "URL_CHANGE", e.ViewAdded = "VIEW_ADDED", e.ViewRemoved = "VIEW_REMOVED", e.PageContextAdded = "PAGE_CONTEXT_ADDED", e.PageContextRemoved = "PAGE_CONTEXT_REMOVED";
    }(Ce || (Ce = {})), function(e) {
      e.NewWindow = "NewWindow", e.NewPage = "NewPage", e.SavePage = "SavePage", e.SavePageAs = "SavePageAs", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.CloseWindow = "CloseWindow", e.RestoreChanges = "RestoreChanges", e.SaveWorkspace = "SaveWorkspace", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.RenameWorkspace = "RenameWorkspace", e.SwitchWorkspace = "SwitchWorkspace", e.DeleteWorkspace = "DeleteWorkspace", e.Downloads = "Downloads", e.OpenStorefront = "OpenStorefront", e.ManageDesktopSignals = "ManageDesktopSignals", e.Appearance = "Appearance", e.Quit = "Quit", e.Custom = "Custom";
    }(Z || (Z = {})), function(e) {
      e.Light = "light", e.Dark = "dark", e.System = "system";
    }(Ie || (Ie = {})), function(e) {
      e.Close = "Close", e.Duplicate = "Duplicate", e.Rename = "Rename", e.Save = "Save", e.SaveAs = "Save As", e.NewPage = "New Page", e.DeletePage = "Delete Page", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Refresh = "Refresh", e.CloseOthers = "Close others", e.Delete = "Delete", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.ManageDesktopSignals = "ManageDesktopSignals", e.AddToChannel = "AddToChannel", e.Custom = "Custom";
    }(ne || (ne = {})), function(e) {
      e.Lock = "Lock", e.ShowHideTabs = "ShowHideTabs", e.AddToChanel = "AddToChannel", e.ManageDesktopSignals = "ManageDesktopSignals", e.Print = "Print", e.Pin = "Pin";
    }(Se || (Se = {})), function(e) {
      e.EditName = "Edit Name", e.Move = "Move", e.Delete = "Delete";
    }(ce || (ce = {})), function(e) {
      e.NewView = "NewView", e.DuplicateViews = "DuplicateView", e.OpenWithDefaultBrowser = "OpenWithDefaultBrowser", e.ReloadViews = "ReloadTab", e.CloseViews = "CloseTab", e.AddToChannel = "AddToChannel", e.RemoveFromChannel = "RemoveFromChannel", e.Back = "Back", e.Forward = "Forward", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.Custom = "Custom";
    }(se || (se = {})), function(e) {
      e.ShowHideTabs = "ShowHideTabs", e.ColorLinking = "ColorLinking", e.PresetLayouts = "PresetLayouts", e.LockUnlockPage = "LockUnlockPage", e.SaveMenu = "SaveMenu", e.SavePage = "SavePage", e.Minimise = "Minimise", e.Maximise = "Maximise", e.Close = "Close", e.Custom = "Custom";
    }(gt || (gt = {})), function(e) {
      e.SavePage = "SavePage", e.SaveWorkspace = "SaveWorkspace", e.SavePageAs = "SavePageAs", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Custom = "Custom";
    }(He || (He = {})), function(e) {
      e.Browser = "browser", e.Platform = "platform";
    }(tt || (tt = {})), function(e) {
      e.CustomButton = "CustomButton", e.StoreCustomButton = "StoreCustomButton", e.CustomDropdownItem = "CustomDropdownItem", e.GlobalContextMenu = "GlobalContextMenu", e.ViewTabContextMenu = "ViewTabContextMenu", e.PageTabContextMenu = "PageTabContextMenu", e.SaveButtonContextMenu = "SaveButtonContextMenu", e.API = "API";
    }(mt || (mt = {}));
    const Qe = ["en-US", "ja-JP", "zh-CN", "ko-KR", "ru-RU", "de-DE", "zh-Hant"];
    var ut, yt;
    (function(e) {
      e.SAVE_PAGE = "SAVE_PAGE", e.SAVE_WORKSPACE = "SAVE_WORKSPACE", e.SAVE_PAGE_AS = "SAVE_PAGE_AS", e.SAVE_WORKSPACE_AS = "SAVE_WORKSPACE_AS", e.RENAME_PAGE = "RENAME_PAGE", e.RENAME_WORKSPACE = "RENAME_WORKSPACE";
    })(ut || (ut = {})), function(e) {
      e.Local = "local", e.Dev = "dev", e.Staging = "staging", e.Prod = "prod";
    }(yt || (yt = {}));
    const Oe = { isFin: !1, uuid: "", name: "", entityType: "" };
    typeof window < "u" && "fin" in window && window.fin !== null && typeof window.fin == "object" && (Oe.isFin = !0, Oe.uuid = Oe.isFin && fin.me.uuid, Oe.name = Oe.isFin && fin.me.name, Oe.entityType = Oe.isFin && fin.me.entityType);
    let at = typeof window < "u" && typeof fin < "u";
    typeof process > "u" || (typeof process !== "undefined" && process.env);
    const Lt = typeof window < "u", ot = Lt && typeof indexedDB < "u", Rt = Lt ? window.origin : yt.Local;
    let Ve = at && fin.me.uuid, O = at && fin.me.name, re = at && fin.me.entityType;
    typeof window < "u" && window.addEventListener("finReady", () => {
      at = !0, Ve = at && fin.me.uuid, O = at && fin.me.name, re = at && fin.me.entityType, Oe.isFin = !0, Oe.uuid = Oe.isFin && fin.me.uuid, Oe.name = Oe.isFin && fin.me.name, Oe.entityType = Oe.isFin && fin.me.entityType;
    });
    const We = new Promise((e) => {
      if (Oe.isFin) return e();
      typeof window < "u" ? window.addEventListener("finReady", () => e(), { once: !0 }) : e();
    }), De = (yt.Local, yt.Dev, yt.Staging, yt.Prod === "prod"), Je = (e) => e.startsWith("http://") || e.startsWith("https://") ? e : Rt + e, rt = Je("https://workspace.openfin.co/workspace/22.3.31"), Ge = Je("https://workspace.openfin.co/workspace/22.3.31"), Bt = (typeof WORKSPACE_DOCS_PLATFORM_URL < "u" && Je(WORKSPACE_DOCS_PLATFORM_URL), typeof WORKSPACE_DOCS_CLIENT_URL < "u" && Je(WORKSPACE_DOCS_CLIENT_URL), "42.138.103.903"), lt = "22.3.31";
    typeof WORKSPACE_BUILD_SHA < "u" && WORKSPACE_BUILD_SHA;
    var ke, qt;
    (function(e) {
      e.Home = "/home/", e.HomeSearch = "/home/?deeplink=search", e.HomePagesRename = "/home/pages/rename/", e.Dock = "/dock/", e.Docs = "/provider/docs/", e.Storefront = "/storefront/", e.DeprecatedAlert = "/provider/deprecated-alert/", e.Analytics = "/provider/analytics/", e.Provider = "/provider/";
    })(ke || (ke = {})), function(e) {
      e.Browser = "/browser/", e.BrowserPopupMenu = "/popup-menu/", e.BrowserPopupMenuSaveModal = "/popup-menu/save-modal/", e.BrowserPopupMenuLayouts = "/popup-menu/layouts/layouts/", e.BrowserPopupMenuColorLinking = "/popup-menu/color-linking/color-linking/", e.BrowserIndicator = "/indicator/", e.BrowserPopupMenuAddressSearchResultsView = "/popup-menu/address-search-results-view/", e.ResponseModal = "/popup-menu/response-modal/", e.CloseConfirmationModal = "/popup-menu/close-confirmation-modal/", e.EnterpriseBrowser = "/enterprise/", e.EnterpriseLandingPage = "/enterprise/landing/", e.EnterpriseContextMenu = "/context-menu/", e.EnterpriseBookmarkDialog = "/bookmark-dialog/", e.EnterpriseAboutPage = "/popup-menu/about/", e.DropdownMenu = "/dropdown-menu/", e.EnterpriseDock = "/dock/", e.ZoomControlsDialog = "/zoom-controls-dialog/", e.DesktopSignalsModal = "/popup-menu/desktop-signals-modal/";
    }(qt || (qt = {}));
    const M = { ...ke, ...qt };
    var z;
    (function(e) {
      e.Search = "search";
    })(z || (z = {}));
    const G = M;
    async function ae() {
      const e = "getManifestOverrides", { manifest: n, initialOptions: r } = await fin.Application.getCurrentSync().getInfo();
      return n != null && n.platform.workspace || n != null && n.platform.home || r != null && r.workspace || r != null && r.home || console.warn(`${e}: Missing Home development manifest overrides, using Desktop Owner Settings.`), n != null && n.platform.workspace ? (JSON.stringify(n == null ? void 0 : n.platform.workspace), n == null ? void 0 : n.platform.workspace) : n != null && n.platform.home ? (JSON.stringify(n == null ? void 0 : n.platform.home), n == null ? void 0 : n.platform.home) : r != null && r.workspace ? (JSON.stringify(r == null ? void 0 : r.workspace), r == null ? void 0 : r.workspace) : r != null && r.home ? (JSON.stringify(r == null ? void 0 : r.home), r == null ? void 0 : r.home) : {};
    }
    const Fe = (e) => fin.System.getSystemAppConfig(e);
    async function Be() {
      const e = "getDOSOverrides";
      if (!Oe.isFin) return console.warn(`${e}: the fin API was not available, returning no result`), {};
      try {
        let n = await Fe("workspace").catch((r) => {
          console.warn(`${e}: customConfig entry for SystemApp workspace not available in Desktop Owner Settings. ${r == null ? void 0 : r.message}`);
        });
        return n || (n = await Fe("home")), JSON.stringify(n), n;
      } catch (n) {
        if (!De) return {};
        if (!(n instanceof Error)) throw n;
        console.warn(`${e}: Missing Workspace Desktop Owner Settings configuration, using defaults. ${n == null ? void 0 : n.message}`);
      }
      return {};
    }
    let ze, bt;
    async function Ae() {
      if (ze) return ze;
      const e = "getOverrides";
      if (!Oe.isFin) return Lt && console.warn(`${e}: The Fin API was not available. Returning an empty result.`), {};
      const [n, r] = await Promise.all([Be(), ae()]);
      return ze = { ...r, ...n, disableRuntimeValidation: r.disableRuntimeValidation || n.disableRuntimeValidation }, ze;
    }
    function St(e) {
      bt = e;
    }
    const gn = (e) => e.replace(/\/$/, "");
    async function on() {
      const e = (await Ae()).browserBaseUrl;
      if (e) try {
        const n = new URL(e);
        if (n.pathname.endsWith("/")) n.pathname = gn(n.pathname);
        else {
          if (n.pathname === "/workspace") return n.pathname += `/${lt}`, n.toString();
          console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url, with path: /workspace. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
        }
      } catch {
        console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
      }
      return bt ?? Ge;
    }
    async function sn(e = !1) {
      const n = await on() + G.Browser;
      return e ? n : gn(n);
    }
    async function Gt(e = !1) {
      const n = await on() + G.EnterpriseBrowser;
      return e ? n : gn(n);
    }
    async function je() {
      return await Gt() + "/landing/";
    }
    const be = async (e, n = !1) => e ? Gt(n) : sn(n), dt = 56, Zt = 728, nn = 150, Vt = "dock3", $t = (e) => {
      const n = typeof fin < "u" && fin.me.identity.uuid;
      if (!n) throw new Error("UUID is required to get the Dock3 channel name.");
      return `${n}-dock3`;
    }, zt = (e, n = "") => e.toLowerCase().includes(n.toLowerCase()), xt = (...e) => ((n, ...r) => {
      const s = console[n];
      try {
        s(...r.map((c) => typeof c == "object" ? JSON.stringify(c, null, 2) : c));
      } catch (c) {
        console.error("Error printing stringified log, logging directly", c), s(...r);
      }
    })("debug", ...e);
    var Ct, Te;
    (function(e) {
      e.Workspace = "openfin-workspace", e.OldWorkspace = "openfin-browser";
    })(Ct || (Ct = {})), function(e) {
      e.FinProtocol = "fin-protocol";
    }(Te || (Te = {})), Ct.Workspace;
    const Ut = (e) => {
      if (!Oe.isFin) throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");
      return fin.Application.wrapSync(e);
    }, g = async () => (await We, Ut({ uuid: Oe.uuid }));
    var C;
    (function(e) {
      e.Home = "openfin-home", e.Dock = "openfin-dock", e.Storefront = "openfin-storefront", e.HomeInternal = "openfin-home-internal", e.BrowserMenu = "openfin-browser-menu", e.BrowserSaveMenu = "openfin-browser-save-menu", e.DockSaveWorkspaceMenu = "openfin-dock3-save-workspace-menu", e.BrowserIndicator = "openfin-browser-indicator", e.BrowserWindow = "internal-generated-window", e.ClassicWindow = "internal-generated-classic-window", e.EnterpriseContextMenu = "openfin-enterprise-context-menu", e.BrowserAddressSearchPrefix = "openfin-browser-menu-address-search-", e.EnterpriseBookmarkDialogWindow = "openfin-enterprise-bookmark-dialog", e.DropdownMenu = "openfin-enterprise-dropdown-menu", e.DockCompanion = "openfin-dock-companion", e.AICompanionPrefix = "openfin-ai-companion-", e.UpdateVersionModal = "here-update-version-modal", e.ZoomControlsDialog = "here-zoom-controls-dialog", e.AboutPageWindow = "here-about-page", e.DesktopSignalsModal = "here-desktop-signals-modal";
    })(C || (C = {}));
    const V = (e) => ({ left: (e.left + (e.right ?? e.left + e.width)) / 2, top: (e.top + (e.bottom ?? e.top + e.height)) / 2 }), ve = (e, n) => {
      const r = n.width / 2, s = n.height / 2;
      return { left: Math.round(e.left - r), top: Math.round(e.top - s), width: n.width, height: n.height };
    };
    function Me(e) {
      if (!Oe.isFin) throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
      return fin.Window.wrapSync(e);
    }
    const Re = { get name() {
      return Oe.name;
    }, get uuid() {
      return Oe.uuid;
    } };
    C.Home, Ct.Workspace, C.Dock, Ct.Workspace;
    const $e = { name: C.Storefront, uuid: Ct.Workspace };
    Ct.Workspace, Ct.Workspace;
    async function ft(e) {
      const n = Me(e);
      await n.getState() === "minimized" && await n.restore(), await n.show(), await n.setAsForeground();
    }
    const qe = async (e) => {
      var n, r, s;
      try {
        const c = await fin.Window.wrapSync({ name: e.name, uuid: e.uuid ?? fin.me.uuid }).getOptions();
        return (((n = c.workspacePlatform) == null ? void 0 : n.windowType) === "browser" || ((r = c.workspacePlatform) == null ? void 0 : r.windowType) === "enterprise") && ((s = c.workspacePlatform) == null ? void 0 : s.pages);
      } catch (c) {
        return console.warn("isBrowserWindow error: ", c), !1;
      }
    };
    async function en() {
      const e = await fin.Application.getCurrentSync().getChildWindows(), n = await Promise.all(e.map(async (r) => qe(r.identity)));
      return e.filter((r, s) => n[s]);
    }
    async function an() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((e) => e.identity.name.startsWith(C.BrowserMenu));
    }
    const dn = (e) => Me(e).getInfo().then(() => !0).catch(() => !1), Gn = () => dn($e);
    function pa(e, n) {
      const r = e.top, s = e.left, c = e.top + e.height, w = e.left + e.width, S = n.monitorRect.top, k = n.monitorRect.left, N = n.monitorRect.bottom, U = n.monitorRect.right;
      if (r > N || c < S || s > U || w < k) return 0;
      const X = Math.max(r, S), Y = Math.max(s, k);
      return (Math.min(c, N) - X) * (Math.min(w, U) - Y) / (e.height * e.width);
    }
    async function Mt(e) {
      const n = await fin.System.getMonitorInfo();
      return [n.primaryMonitor, ...n.nonPrimaryMonitors].reduce((r, s) => {
        const c = pa(e, s);
        return c > r.percentage ? { percentage: c, monitor: s } : r;
      }, { percentage: 0, monitor: n.primaryMonitor }).monitor;
    }
    const Kt = (e, n) => {
      var s, c, w;
      const r = e;
      return r.workspacePlatform || (r.workspacePlatform = {}), r.workspacePlatform._internalDeferShowOptions = { setAsForeground: !!n, deferShowEnabled: !0, autoShow: ((s = r.workspacePlatform) == null ? void 0 : s._internalAutoShow) || ((w = (c = r.workspacePlatform) == null ? void 0 : c._internalDeferShowOptions) == null ? void 0 : w.autoShow) || r.autoShow === void 0 || r.autoShow }, r.autoShow = !1, r;
    };
    var fa, ha;
    (function(e) {
      e.RelativeToParentWindow = "relative-to-parent-window", e.RelativeToMonitor = "relative-to-monitor";
    })(fa || (fa = {})), function(e) {
      e.Top = "top", e.Below = "below";
    }(ha || (ha = {}));
    const zn = async (e) => {
      const n = e && await Me(e).getBounds();
      return { left: ((s = (e ? await Mt(n) : (await fin.System.getMonitorInfo()).primaryMonitor).availableRect).left + s.right) / 2, top: (s.top + s.bottom) / 2 };
      var s;
    }, ga = async (e, n, r = !1) => {
      let s;
      if (r) s = await zn(n);
      else {
        const S = Me(n), k = await S.getBounds();
        s = V(k);
      }
      const { defaultHeight: c, defaultWidth: w } = e;
      return ve(s, { height: c, width: w });
    };
    async function qn(e, n, r = !1) {
      const s = n && await Me(n).getState() === "maximized", c = r || s || !n, w = await ga(e, n, c);
      return await (async (S) => {
        const k = await fin.System.getMonitorInfo(), N = [k.primaryMonitor, ...k.nonPrimaryMonitors];
        for (const U of N) if (pa(S, U) === 1) return !1;
        return !0;
      })(w) ? (await Me(n).center(), ga(e, n, c)) : (console.warn("Response modal isn't off screen, not centering parent window"), w);
    }
    const Tn = () => (e) => e;
    var ie = u(847);
    const Sn = (e) => e.replace(/[^\d,]/g, "").split(","), ma = (e) => {
      if (e.length < 2) throw new Error("Invalid color object, cannot convert to HSL.");
      const n = e[0] / 255, r = e[1] / 255, s = e[2] / 255, c = Math.min(n, r, s), w = Math.max(n, r, s), S = w - c;
      let k = 0, N = 0, U = 0;
      return k = S === 0 ? 0 : w === n ? (r - s) / S % 6 : w === r ? (s - n) / S + 2 : (n - r) / S + 4, k = Math.round(60 * k), k < 0 && (k += 360), U = (w + c) / 2, N = S == 0 ? 0 : S / (1 - Math.abs(2 * U - 1)), N = +(100 * N).toFixed(1), U = +(100 * U).toFixed(1), { hsl: `hsl(${k}, ${N}%, ${U}%)`, hsla: `hsl(${k}, ${N}%, ${U}%, 1)`, hue: k, lightness: U, saturation: N };
    }, dr = (e) => {
      if (!e.includes("#")) throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");
      let n = 0, r = 0, s = 0;
      if (e.length === 4) n = `0x${e[1]}${e[1]}`, r = `0x${e[2]}${e[2]}`, s = `0x${e[3]}${e[3]}`;
      else {
        if (e.length !== 7) throw new Error("Invalid hex string length, cannot convert to RGB.");
        n = `0x${e[1]}${e[2]}`, r = `0x${e[3]}${e[4]}`, s = `0x${e[5]}${e[6]}`;
      }
      return [+n, +r, +s];
    }, Pn = (e) => {
      const n = e;
      if (n.startsWith("#"))
        return { rgb: dr(n).join(", "), alpha: 1 };
      const r = n.match(/\d{1,3}(\.\d+)?/g);
      if (r) {
        const [s, c, w, S] = r;
        return { rgb: `${s}, ${c}, ${w}`, alpha: S !== void 0 ? parseFloat(S) : 1 };
      }
      return { rgb: dr(e).join(", "), alpha: 1 };
    }, pr = (e, n = !1) => {
      const r = ((s) => {
        if (!s) throw new Error("Color is not defined");
        const c = s.toLowerCase();
        let w;
        if (c.includes("rgb")) {
          const k = Sn(c);
          k.length > 3 && k.pop(), w = ma(k).hue;
        }
        if (c.includes("#")) {
          const k = dr(c);
          w = ma(k).hue;
        }
        c.includes("hsl") && (w = Sn(c)[0]);
        const S = w == null ? void 0 : w.toString();
        if (!S) throw new Error(`Hue was unable to be extracted from "${c}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);
        return S;
      })(e);
      return n ? { background1: `hsla(${r}, 0%, 100%, 1)`, background2: `hsla(${r}, 67%, 99%, 1)`, background3: `hsla(${r}, 26%, 96%, 1)`, background4: `hsla(${r}, 15%, 94%, 1)`, background5: `hsla(${r}, 10%, 88%, 1)`, background6: `hsla(${r}, 80%, 80%, 1)` } : { background1: `hsla(${r}, 8%, 7%, 1)`, background2: `hsla(${r}, 8%, 13%, 1)`, background3: `hsla(${r}, 9%, 15%, 1)`, background4: `hsla(${r}, 6%, 23%, 1)`, background5: `hsla(${r}, 21%, 28%, 1)`, background6: `hsla(${r}, 5%, 51%, 1)` };
    }, _n = (e, n) => {
      const r = {};
      return Object.keys(e).forEach((s) => {
        r[s] = n[s] ? n[s] : e[s];
      }), r;
    };
    var Vr = u(877), fr = u.n(Vr), jt = u(67), Fn = u.n(jt);
    const xn = { light: { symbol: ((vs = Fn()) == null ? void 0 : vs.src) || "" }, dark: { symbol: ((ks = fr()) == null ? void 0 : ks.src) || "" } }, Ur = Lt && document.readyState !== "complete" && new Promise((e) => document.addEventListener("readystatechange", () => {
      document.readyState === "complete" && e();
    }));
    function cn(e) {
      let n;
      const r = /* @__PURE__ */ new Set();
      return () => {
        if (!at) throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");
        return n || (n = (async () => {
          await Ur;
          const s = { clientAPIVersion: lt }, c = await fin.InterApplicationBus.Channel.connect(e, { payload: s });
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
    var wa, Fa;
    (function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    })(wa || (wa = {})), function(e) {
      e[e.Initial = 0] = "Initial", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close";
    }(Fa || (Fa = {}));
    const hr = cn("__of_workspace_protocol__"), Ln = hr;
    var pe;
    (function(e) {
      e.LaunchApp = "launchApp", e.SavePage = "savePage", e.GetSavedPage = "getSavedPage", e.CreateSavedPage = "createSavedPage", e.UpdateSavedPage = "updateSavedPage", e.DeleteSavedPage = "deleteSavedPage", e.GetSavedPages = "getSavedPages", e.CreateSavedPageInternal = "createSavedPageInternal", e.UpdateSavedPageInternal = "updateSavedPageInternal", e.DeleteSavedPageInternal = "deleteSavedPageInternal", e.UpdatePageForWindow = "updatePageForWindow", e.AttachPagesToWindow = "attachPagesToWindow", e.DetachPagesFromWindow = "detachPagesFromWindow", e.ReorderPagesForWindow = "reorderPagesForWindow", e.SetActivePage = "setActivePage", e.AddPage = "addPage", e.AddDefaultPage = "addDefaultPage", e.GetAllAttachedPages = "getAllAttachedPages", e.GetActivePageIdForWindow = "getActivePageIdForWindow", e.GetPagesForWindow = "getPagesForWindow", e.GetPageForWindow = "getPageForWindow", e.GetSavedPageMetadata = "getSavedPageMetadata", e.GetUniquePageTitle = "getUniquePageTitle", e.GetLastFocusedBrowserWindow = "getLastFocusedBrowserWindow", e.GetPageByViewIdentity = "getPageByViewIdentity", e.GetThemes = "getThemes", e.GetSelectedScheme = "getSelectedScheme", e.SetSelectedScheme = "setSelectedScheme", e.OpenGlobalContextMenuInternal = "openGlobalContextMenuInternal", e.OpenViewTabContextMenuInternal = "openViewTabContextMenuInternal", e.OpenPageTabContextMenuInternal = "openPageTabContextMenuInternal", e.OpenSaveButtonContextMenuInternal = "openSaveButtonContextMenuInternal", e.InvokeCustomActionInternal = "invokeCustomActionInternal", e.RequestQuitPlatformDialogInternal = "requestQuitPlatformDialogInternal", e.GetSavedWorkspace = "getSavedWorkspace", e.CreateSavedWorkspace = "createSavedWorkspace", e.UpdateSavedWorkspace = "updateSavedWorkspace", e.DeleteSavedWorkspace = "deleteSavedWorkspace", e.GetSavedWorkspaces = "getSavedWorkspaces", e.GetSavedWorkspacesMetadata = "getSavedWorkspacesMetadata", e.SaveWorkspace = "saveWorkspace", e.GetCurrentWorkspace = "getCurrentWorkspace", e.ApplyWorkspace = "applyWorkspace", e.RestoreLastSavedWorkspaceInternal = "restoreLastSavedWorkspaceInternal", e.SetActiveWorkspace = "setActiveWorkspace", e.IsBrowserInitialized = "isBrowserInitialized", e.Analytics = "analyticsInternal", e.GetLanguage = "getLanguage", e.GetLanguageResourcesInternal = "getLanguageResourcesInternal", e.SetLanguage = "setLanguage", e.GetDockProviderConfig = "getDockProviderConfig", e.SaveDockProviderConfig = "saveDockProviderConfig", e.HandleSaveModalOnPageClose = "handleSaveModalOnPageClose", e.ShouldPageClose = "shouldPageClose", e.ShouldWindowClose = "shouldWindowClose", e.CopyPage = "copyPage", e.HandlePageChanges = "handlePageChanges", e.MarkUnsavedPagesAsSavedInternal = "markUnsavedPagesAsSavedInternal", e.TrackRemovedTabInternal = "trackRemovedTabInternal", e.RestoreRemovedTabInternal = "restoreRemovedTabInternal", e.TrackVisitedSiteInternal = "trackVisitedSiteInternal", e.GetRecentlyVisitedSitesInternal = "getRecentlyVisitedSitesInternal", e.GetFrequentlyVisitedSitesInternal = "getFrequentlyVisitedSitesInternal", e.SearchSitesInternal = "searchSitesInternal", e.GetSearchProvidersInternal = "getSearchProvidersInternal", e.GetCuratedContentInternal = "getCuratedContentInternal", e.HandleRequestNavigationInternal = "handleRequestNavigationInternal", e.RefreshBookmarksInternal = "refreshBookmarksInternal", e.LaunchBookmarkInternal = "launchBookmarkInternal", e.GetNotificationsConfig = "getNotificationsConfig", e.UpdateDockFavoritesInternal = "updateDockFavoritesInternal", e.UpdateContentMenuInternal = "updateContentMenuInternal", e.LaunchDockEntryInternal = "launchDockEntryInternal", e.SetDockFavoritesOrderInternal = "setDockFavoritesOrderInternal", e.NavigateContentMenuInternal = "navigateContentMenuInternal", e.SetDefaultDockButtonsOrderInternal = "setDefaultDockButtonsOrderInternal", e.GetDockWorkspacesContextMenuInternal = "getDockWorkspacesContextMenuInternal", e.HandleDockWorkspacesMenuResponseInternal = "handleDockWorkspacesMenuResponseInternal", e.RemoveDockFavoriteInternal = "removeDockFavoriteInternal", e.AddDockFavoriteInternal = "addDockFavoriteInternal", e.FocusAndExpandSearchInternal = "focusAndExpandSearchInternal", e.SendUpdateVersionModalResponseInternal = "sendUpdateVersionModalResponseInternal", e.ShowUpdateVersionModalInternal = "showUpdateVersionModalInternal";
    })(pe || (pe = {}));
    const Jn = async (e) => fin.Platform.wrapSync(e).getClient(), La = async (e) => {
      const n = await Jn(e), r = "Target is not a Workspace Platform. Target must call WorkspacePlatform.init";
      let s;
      try {
        s = await n.dispatch("isWorkspacePlatform");
      } catch {
        throw new Error(r);
      }
      if (typeof s == "boolean" && s) return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."), s;
      if (typeof s == "object" && s.isWorkspacePlatform) return s;
      throw new Error(r);
    }, me = async (e) => (await La(e), Jn(e)), Xe = async (e) => {
      const n = await La(e);
      if (typeof n == "object" && (n == null ? void 0 : n.isBrowserInitialized) !== !0) throw new Error("Target is not a Browser-enabled Workspace Platform.");
      return Jn(e);
    }, Kr = "dark", ya = { [ie.Palette.brandPrimary]: "#0A76D3", [ie.Palette.brandPrimaryActive]: "#0A71C9", [ie.Palette.brandPrimaryHover]: "#0B84EB", [ie.Palette.brandPrimaryFocused]: ie.Color.white, [ie.Palette.brandPrimaryText]: ie.Color.white, [ie.Palette.statusSuccess]: ie.Color.functional1, [ie.Palette.statusWarning]: ie.Color.functional10, [ie.Palette.statusCritical]: ie.Color.functional7, [ie.Palette.statusActive]: ie.Color.functional3, [ie.Palette.contentBackground1]: "#0A76D3", [ie.Palette.contentBackground2]: "#000000", [ie.Palette.contentBackground3]: "#000000", [ie.Palette.contentBackground4]: "#000000", [ie.Palette.contentBackground5]: "#000000", [ie.Palette.borderNeutral]: ie.Color.silverGray }, Vn = { ...ya, [ie.Palette.background1]: ie.Color.white, [ie.Palette.background2]: ie.Color.lightGray1, [ie.Palette.background3]: ie.Color.lightGray2, [ie.Palette.background4]: ie.Color.lightGray3, [ie.Palette.background5]: ie.Color.lightGray4, [ie.Palette.background6]: ie.Color.lightGray5, [ie.Palette.brandSecondary]: ie.Color.lightGray4, [ie.Palette.brandSecondaryActive]: ie.Color.lightGray4Active, [ie.Palette.brandSecondaryHover]: ie.Color.lightGray4Hover, [ie.Palette.brandSecondaryFocused]: ie.Color.darkGray5, [ie.Palette.brandSecondaryText]: ie.Color.darkGray5, [ie.Palette.inputBackground]: ie.Color.lightGray3, [ie.Palette.inputColor]: ie.Color.darkGray5, [ie.Palette.inputPlaceholder]: ie.Color.darkGray2, [ie.Palette.inputDisabled]: ie.Color.neutralGray, [ie.Palette.inputFocused]: ie.Color.lightGray5, [ie.Palette.inputBorder]: ie.Color.neutralGray, [ie.Palette.textDefault]: ie.Color.darkGray5, [ie.Palette.textHelp]: ie.Color.darkGray3, [ie.Palette.textInactive]: ie.Color.neutralGray }, ba = { ...ya, [ie.Palette.background1]: ie.Color.darkGray6, [ie.Palette.background2]: ie.Color.darkGray5, [ie.Palette.background3]: ie.Color.darkGray4, [ie.Palette.background4]: ie.Color.darkGray3, [ie.Palette.background5]: ie.Color.darkGray2, [ie.Palette.background6]: ie.Color.darkGray1, [ie.Palette.brandSecondary]: ie.Color.darkGray2, [ie.Palette.brandSecondaryActive]: ie.Color.darkGray2Active, [ie.Palette.brandSecondaryHover]: ie.Color.darkGray2Hover, [ie.Palette.brandSecondaryFocused]: ie.Color.white, [ie.Palette.brandSecondaryText]: ie.Color.white, [ie.Palette.inputBackground]: ie.Color.darkGray1, [ie.Palette.inputColor]: ie.Color.white, [ie.Palette.inputPlaceholder]: ie.Color.lightGray5, [ie.Palette.inputDisabled]: ie.Color.neutralGray, [ie.Palette.inputFocused]: ie.Color.lightGray5, [ie.Palette.inputBorder]: ie.Color.neutralGray, [ie.Palette.textDefault]: ie.Color.white, [ie.Palette.textHelp]: ie.Color.lightGray5, [ie.Palette.textInactive]: ie.Color.neutralGray }, Va = [{ label: "OpenFin Default Light and Dark Theme", palettes: { light: { ...Vn, backgroundPrimary: ie.Color.darkGray5 }, dark: { ...ba, backgroundPrimary: ie.Color.darkGray5 } } }], va = (e) => {
      const { background: n, foreground: r } = e;
      return { background: n, foreground: r ?? "#FFFFFF" };
    }, vt = (e, n) => {
      var r, s, c;
      return { icons: { symbol: ((c = (s = (r = e.brand) == null ? void 0 : r.icons) == null ? void 0 : s[n]) == null ? void 0 : c.symbol) || xn[n].symbol } };
    }, ka = (e) => {
      const { light: n, dark: r } = "palettes" in e ? e.palettes : { light: e.palette, dark: e.palette }, s = _n(ba, r), c = _n(Vn, n), w = ((X, Y) => {
        const oe = { ...X }, ue = { ...Y };
        let Pe = Y.backgroundPrimary ? pr(Y.backgroundPrimary, !0) : {}, Ne = X.backgroundPrimary ? pr(X.backgroundPrimary) : {};
        return Pe = { ...Pe, ...ue }, Ne = { ...Ne, ...oe }, { light: { ...Y, ...Pe }, dark: { ...X, ...Ne } };
      })(r, n), S = { ...(0, ie.createTheme)({ ...s, ...w == null ? void 0 : w.dark }), brand: vt(e, "dark") }, k = { ...(0, ie.createTheme)({ ...c, ...w == null ? void 0 : w.light }), brand: vt(e, "light") }, { light: N, dark: U } = ((X) => {
        const Y = Object.keys(X.notificationIndicatorColors ?? {});
        if (Y != null && Y.length) {
          const oe = {}, ue = {};
          return Y.forEach((Pe) => {
            const Ne = X.notificationIndicatorColors[Pe];
            "background" in Ne ? (oe[Pe] = va(Ne), ue[Pe] = va(Ne)) : (oe[Pe] = va(Ne.dark ?? Ne.light), ue[Pe] = va(Ne.light ?? Ne.dark));
          }), { light: ue, dark: oe };
        }
        return { light: null, dark: null };
      })(e);
      return S.notificationIndicatorColors = U, k.notificationIndicatorColors = N, { dark: S, light: k };
    }, Yn = async (e) => {
      const { themes: n, selectedScheme: r } = await (async (w) => {
        var k, N, U;
        const S = (U = (N = (k = fin == null ? void 0 : fin.__internal_) == null ? void 0 : k.initialOptions) == null ? void 0 : N.workspacePlatform) == null ? void 0 : U._themeData;
        return !S || w.uuid !== Re.uuid ? { themes: await v(w).Theme.getThemes(), selectedScheme: await v(w).Theme.getSelectedScheme() } : S;
      })(e);
      var s, c;
      return (s = n != null && n.length ? n : Va, c = r, s.map((w) => {
        const S = "palettes" in w ? w.default : Kr, { light: k, dark: N } = ka(w);
        return { label: w.label, logoUrl: w.logoUrl, theme: { dark: N, light: k }, defaultScheme: c ?? S };
      }))[0];
    }, Un = async (e) => {
      const n = await me(e || fin.me.identity), r = await n.dispatch(pe.GetSelectedScheme, void 0);
      return r === Ie.System ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r;
    }, gr = async (e, n) => {
      var w, S;
      const r = await Yn(fin.me.identity), s = await Un(fin.me.identity) === Ie.Dark, c = r == null ? void 0 : r.theme;
      return ((S = (w = c == null ? void 0 : c[s ? Ie.Dark : Ie.Light]) == null ? void 0 : w.palette) == null ? void 0 : S[e]) || n;
    };
    function mr(e) {
      return function(n, r) {
        const s = {};
        for (const c of r) c in n && (s[c] = n[c]);
        return s;
      }(e, Tn()(["defaultLeft", "defaultTop", "defaultCentered", "saveWindowState", "taskbarIconGroup"]));
    }
    function Sa() {
      let e, n;
      return { promise: new Promise((r, s) => {
        e = r, n = s;
      }), resolve: e, reject: n };
    }
    const Zn = wl, Qn = (e) => ({ setItem: (n, r) => {
      localStorage.setItem(`${e}-${n}`, r);
    }, getItem: (n) => localStorage.getItem(`${e}-${n}`), removeItem: (n) => localStorage.removeItem(`${e}-${n}`) });
    let Ua;
    function wr() {
      return Ua || (Ua = Qn(Oe.uuid)), Ua;
    }
    const it = (e, n) => wr().setItem(e, n), Pa = (e) => wr().getItem(e), wo = (e) => wr().removeItem(e);
    var yr;
    (function(e) {
      e.CurrentWorkspaceId = "currentWorkspaceId", e.LastFocusedBrowserWindow = "lastFocusedBrowserWindow", e.MachineName = "machineName", e.NewTabPageLayout = "NewTabPageLayout", e.NewTabPageSort = "NewTabPageSort", e.DockPosition = "DockPosition", e.SelectedColorScheme = "SelectedColorScheme", e.ThemePaletteSheet = "ThemePaletteSheet", e.HasMovedStore = "HasMovedStore", e.PageDragState = "BrowserPageDragState", e.ThemePaletteDefaultScheme = "ThemePaletteDefaultScheme";
    })(yr || (yr = {}));
    const kt = yr, mn = (e) => e + "-" + fin.me.uuid, xa = (e, n) => {
      const r = ot && at && new Zn.Dexie(e);
      return r && r.version(0.1).stores({ [n]: "" }), r;
    }, Cn = (e, n) => {
      const r = xa(mn(e), n), s = xa(e, n);
      if (!r || !s) throw new Error("Unable to migrate store - IndexDB not supported");
      return (async (c, w, S) => {
        if (!c[S]) return void console.warn(`Legacy store ${S} not found, skipping migration`);
        const k = Pa(kt.HasMovedStore), N = k ? JSON.parse(k) : {};
        if (N && N[S]) return;
        N[S] = !0, it(kt.HasMovedStore, JSON.stringify(N));
        const U = await c[S].toArray();
        await w[S].bulkPut(U);
      })(s, r, e), r;
    }, Ka = "dock3-provider-config", Kn = ot && at && new Zn.Dexie(mn("dock3-provider-config"));
    Kn && Kn.version(0.1).stores({ [Ka]: "" });
    var It, Ht, un, Mn, wn = function(e, n, r, s, c) {
      if (typeof n == "function" ? e !== n || !0 : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return n.set(e, r), r;
    }, Ot = function(e, n, r, s) {
      if (typeof n == "function" ? e !== n || !s : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : n.get(e);
    };
    class Rn {
      static getOverrideConstructor(...n) {
        return class extends Rn {
          constructor() {
            super(...n);
          }
        };
      }
      constructor(n, r) {
        if (It.set(this, void 0), Ht.set(this, void 0), un.set(this, null), Mn.set(this, Sa()), Rn.instance) throw new Error("Dock3Provider has already been initialized.");
        Rn.instance = this, wn(this, It, n), wn(this, Ht, r), this.registerChannelActions();
      }
      async launchEntry(n) {
      }
      get ready() {
        return Ot(this, Mn, "f").promise;
      }
      async bookmarkContentMenuEntry(n) {
      }
      get config() {
        return Ot(this, It, "f");
      }
      set config(n) {
        wn(this, It, n);
      }
      async updateConfig(n) {
        await this.handleConfigChange(n);
      }
      async shutdown() {
        await Promise.all([Ot(this, Ht, "f").destroy(), this.getWindowSync().close(!0)]), Rn.instance = null;
      }
      async saveConfig({ config: n }) {
        wn(this, It, n), await async function(r) {
          if (!Kn) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
          await Kn[Ka].put(r, "latest");
        }(n);
      }
      async handleConfigChange(n) {
        Ot(this, un, "f") && await Ot(this, Ht, "f").dispatch(Ot(this, un, "f"), "handle-dock-config-updated", n);
      }
      async loadConfig() {
        const n = await async function() {
          if (!Kn) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
          try {
            return await Kn[Ka].get("latest");
          } catch (r) {
            return void console.warn("Failed to retrieve Dock provider config from IndexedDB", r);
          }
        }();
        return n && wn(this, It, n), Ot(this, It, "f");
      }
      getWindowSync() {
        return fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: Vt });
      }
      registerChannelActions() {
        Ot(this, Ht, "f").register("launch-entry", this.launchEntry.bind(this)), Ot(this, Ht, "f").register("save-config", this.saveConfig.bind(this)), Ot(this, Ht, "f").register("bookmark-content-menu-entry", this.bookmarkContentMenuEntry.bind(this)), Ot(this, Ht, "f").onConnection((n) => {
          n.name === Vt && wn(this, un, n);
        }), Ot(this, Ht, "f").register("ready", async (n, r) => {
          var s;
          if (((s = Ot(this, un, "f")) == null ? void 0 : s.endpointId) !== r.endpointId) throw new Error(`Dock3Provider: 'ready' action received from unexpected client ${r.name} (${r.uuid})`);
          Ot(this, Mn, "f").resolve();
        }), Ot(this, Ht, "f").onDisconnection((n) => {
          var r;
          ((r = Ot(this, un, "f")) == null ? void 0 : r.endpointId) === n.endpointId && (wn(this, un, null), wn(this, Mn, Sa()));
        });
      }
    }
    async function yn(e) {
      const { config: n, override: r } = e;
      if (Rn.instance) throw new Error("Dock3Provider has already been initialized.");
      const s = await fin.InterApplicationBus.Channel.create($t()), c = new (r(Rn.getOverrideConstructor(n, s)))();
      return await c.loadConfig(), await async function(w, S, k, N) {
        var U, X, Y;
        if (!await dn({ uuid: Re.uuid, name: w })) {
          let oe;
          oe = typeof ((U = k.dockPosition) == null ? void 0 : U.left) == "number" || typeof (N == null ? void 0 : N.defaultLeft) == "number" ? (X = k.dockPosition) == null ? void 0 : X.left : (await zn(Re)).left - Zt / 2;
          const ue = { name: w, url: S + G.EnterpriseDock, autoShow: !0, frame: !1, smallWindow: !0, saveWindowState: !1, defaultHeight: dt, defaultWidth: Zt, includeInSnapshots: !1, defaultTop: ((Y = k.dockPosition) == null ? void 0 : Y.top) ?? nn, defaultLeft: oe, workspacePlatform: { windowType: k.windowType, ...k }, throttling: "disabled", resizable: !1, maximizable: !1, backgroundColor: await gr("background1"), ...mr(N ?? {}) };
          await fin.Window.create(Kt(ue));
        }
      }(Vt, await sn(), c.config, e.windowOptions), await c.ready, c;
    }
    It = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Rn.instance = null;
    const At = async (e) => {
      var s;
      const n = e ? fin.Window.wrapSync(e) : fin.Window.getCurrentSync(), r = await n.getOptions();
      return ((s = r.workspacePlatform) == null ? void 0 : s.windowType) && r.workspacePlatform.windowType === "enterprise";
    }, br = (e) => {
      var r, s;
      return ((s = (r = e == null ? void 0 : e.defaultWindowOptions) == null ? void 0 : r.workspacePlatform) == null ? void 0 : s.windowType) === "enterprise";
    };
    let Ca;
    const Ma = (e) => {
      if (e) try {
        return new URL(e).pathname.includes(G.EnterpriseLandingPage.replace(/\/$/, ""));
      } catch {
        console.error("error parsing url: %O", e);
      }
      return !1;
    };
    var Dn;
    (function(e) {
      e.Browser = "Browser", e.Dock = "Dock", e.EnterpriseDock = "EnterpriseDock", e.Home = "Home", e.Notification = "Notification", e.Storefront = "Storefront", e.Platform = "Platform", e.Theming = "Theming", e.Microflow = "Microflow";
    })(Dn || (Dn = {}));
    const Ia = async (e, n, r = "workspace-licensing") => {
      const s = { apiVersion: n.apiVersion || lt, componentName: e, componentVersion: n.componentVersion || lt, allowed: n.allowed, rejectionCode: n.rejectionCode };
      fin.System.registerUsage({ type: r, data: s });
    };
    let jr = !1;
    const jn = /* @__PURE__ */ new Map(), $r = (e) => {
      let n = jn.get(e.uuid);
      return n || (n = v(e), n.once("closed", () => {
        jn.delete(e.uuid);
      }), jn.set(e.uuid, n)), n;
    }, Hr = async (e, n) => {
      try {
        await e._raiseAnalytics([n]);
      } catch (r) {
        console.error("failed to raise analytics event", r);
      }
    }, Qt = async (e) => {
      await Hr($r(fin.me.identity), { source: "Browser", ...e });
    };
    let Xn;
    const Aa = async (e) => {
      Xn || (Xn = new TextEncoder());
      const n = Xn.encode(e), r = await window.crypto.subtle.digest("SHA-256", n);
      return Array.from(new Uint8Array(r)).map((s) => s.toString(16).padStart(2, "0")).join("");
    };
    function vr(e) {
      return e && typeof e == "object" && !Array.isArray(e);
    }
    function ea(e, ...n) {
      if (!n.length) return e;
      const r = n.shift();
      return vr(e) && vr(r) && Object.entries(r).forEach(([s, c]) => {
        if (vr(c)) return e[s] || (e[s] = {}), ea(e[s], c);
        e[s] = c;
      }), ea(e, ...n);
    }
    const yo = Wl;
    var ja = u.n(yo);
    function Jt() {
      return typeof crypto !== void 0 && "randomUUID" in crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    function kr() {
      return localStorage.getItem(kt.MachineName) ?? "unknown";
    }
    let ta;
    async function Ea() {
      return ta || (ta = await fin.System.getMachineId()), ta;
    }
    const $a = (e) => {
      var n;
      if (Array.isArray((n = e.workspacePlatform) == null ? void 0 : n.pages) && (e.layoutSnapshot || e.layout)) {
        const r = e.workspacePlatform.pages.find((s) => s.isActive);
        if (r) {
          const s = e.layoutSnapshot ? e.layoutSnapshot.layouts[r.layoutContainerKey] : e.layout;
          if (s) if (r.isLocked) {
            const c = F(s, r.layout);
            r.layout = c, e.layout = c;
          } else r.layout = s, e.layout = s;
        }
      }
      return e;
    };
    async function Ha(e) {
      var s;
      const n = e || await fin.Platform.getCurrentSync().getSnapshot();
      if ((s = n.snapshotDetails) != null && s.machineId) return n;
      const r = kr();
      return { ...n, snapshotDetails: { ...n.snapshotDetails, machineId: await Ea(), machineName: r } };
    }
    const bo = async (e) => ({ ...e, layoutDetails: { machineId: await Ea(), machineName: kr() } }), bn = async (e, n) => ({ pageId: Jt(), title: e, layout: await bo(n), isReadOnly: !1 }), Ga = async (e) => {
      const n = await bn(e.title, _(e.layout));
      return e.panels && (n.panels = e.panels.map((r) => ({ ...r, viewOptions: D(r.viewOptions) }))), { ...e, ...n };
    }, za = (e) => {
      const n = fin.Platform.Layout.wrapSync(e);
      return { show: async () => {
        const r = await n.getConfig(), { settings: s, dimensions: c } = r, w = await At(e);
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
    }, tn = "of-workspace-", On = new class {
      mark(e) {
        performance.mark(`${tn}${e}`);
      }
      markStart(e) {
        performance.mark(`${tn}${e}-start`);
      }
      markEnd(e) {
        performance.mark(`${tn}${e}-end`);
      }
      markEndAndMeasure(e) {
        performance.mark(`${tn}${e}-end`);
        try {
          return performance.measure(`${tn}${e}`, `${tn}${e}-start`, `${tn}${e}-end`);
        } catch {
        }
      }
      markAndMeasure(e, n) {
        performance.mark(`${tn}${e}`);
        try {
          return performance.measure(`${tn}${e}-measure`, `${tn}${n}-start`, `${tn}${e}`);
        } catch {
        }
      }
      reportWorkspacePerformanceEntries() {
        return performance.getEntriesByType("measure").filter((e) => e.name.startsWith(tn));
      }
      reportWorkspacePerformance() {
        return this.reportWorkspacePerformanceEntries().map((e) => ({ name: e.name.replace(`${tn}`, "").replace("-measure", ""), duration: e.duration }));
      }
    }(), Yt = () => {
      const e = `browser-context-menu-startup-${Jt()}`;
      return On.markStart(e), e;
    }, na = (e) => {
      On.markAndMeasure("browser-context-menu-called", e);
    }, aa = (e) => {
      fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
        ((n) => {
          On.markAndMeasure("browser-context-menu-shown", n);
        })(e);
      });
    }, Gr = (e, n) => n ? `${n}-${e.uuid}-${e.name}` : `__browser_window__-${e.uuid}-${e.name}`, ra = /* @__PURE__ */ new Map(), Sr = (e) => (ra.has(e) || ra.set(e, cn(e)), ra.get(e)()), Et = (e, n) => {
      const r = Gr(e, n);
      return Sr(r);
    };
    var oa, Ta, ln, In, Wn, ia;
    (function(e) {
      e.CloseBrowserWindow = "close-browser-window", e.QuitPlatform = "quit-platform", e.ClosePage = "close-page", e.AddToChannel = "add-to-channel", e.RemoveFromChannel = "remove-from-channel", e.OpenSaveModalInternal = "open-save-modal-internal", e.DuplicatePage = "duplicate-page", e.SetSelectedScheme = "set-selected-scheme", e.ShowBrowserIndicator = "show-browser-indicator", e.SetSelectedLanguage = "set-selected-language", e.RefreshBookmarksInternal = "refresh-bookmarks", e.GetLayoutsWithSelectedViewsInternal = "get-layouts-with-selected-views", e.FocusAndExpandSearchInternal = "focus-and-expand-search";
    })(oa || (oa = {})), function(e) {
      e.GetPages = "get-pages", e.GetActivePageForWindow = "get-active-page-for-window", e.AttachPagesToWindow = "attach-pages-to-window", e.DetachPagesFromWindow = "detach-pages-from-window", e.SetActivePageForWindow = "set-active-page-for-window", e.RenamePage = "rename-page", e.ReorderPagesForWindow = "reorder-pages-for-window", e.UpdatePageForWindow = "update-page-for-window", e.UpdatePagesWindowOptions = "update-pages-window-options", e.IsDetachingPages = "is-detaching-pages", e.IsActivePageChanging = "is-active-page-changing";
    }(Ta || (Ta = {})), function(e) {
      e.GetApps = "get-apps", e.GetCuratedContent = "get-curated-content", e.GetRecentlyVisited = "get-recently-visited", e.GetSearchProviders = "get-search-providers";
    }(ln || (ln = {})), function(e) {
      e.CreateBookmarkNode = "create-bookmark-node", e.GetBookmarkNode = "get-bookmark-node", e.SearchBookmarkNodes = "search-bookmark-nodes", e.UpdateBookmarkNode = "update-bookmark-node", e.DeleteBookmarkNode = "delete-bookmark-node";
    }(In || (In = {})), function(e) {
      e.UpdateFavoriteEntries = "update-favorite-entries", e.UpdateContentMenu = "update-content-menu", e.NavigateContentMenu = "navigate-content-menu";
    }(Wn || (Wn = {})), function(e) {
      e.SendUpdateVersionModalResponse = "send-update-version-modal-response";
    }(ia || (ia = {}));
    const Tt = { ...oa, ...Ta, ...Wn }, sa = cn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-bookmarks`), Pr = (e) => ({ identity: e, openfinWindow: fin.Window.wrapSync(e), _bookmarks: { _createBookmarkNode: async (n) => (async (r) => (await sa()).dispatch(In.CreateBookmarkNode, r))(n), _getBookmarkNode: async (n) => (async (r) => (await sa()).dispatch(In.GetBookmarkNode, r))(n), _searchBookmarkNodes: async (n) => (async (r) => (await sa()).dispatch(In.SearchBookmarkNodes, r))(n), _updateBookmarkNode: async (n) => (async (r) => (await sa()).dispatch(In.UpdateBookmarkNode, r))(n), _deleteBookmarkNode: async (n) => (async (r) => (await sa()).dispatch(In.DeleteBookmarkNode, r))(n) }, getPages: async () => (await Xe(e)).dispatch(pe.GetPagesForWindow, e), getPage: async (n) => (await Xe(e)).dispatch(pe.GetPageForWindow, { identity: e, pageId: n }), addPage: async (n) => b().Browser.wrapSync(e)._addPage(n), _addPage: async (n, r) => {
      const s = await Xe(e), c = { identity: e, page: n, insertionIndex: r == null ? void 0 : r.index, multiInstanceViewBehavior: r == null ? void 0 : r.multiInstanceViewBehavior };
      return s.dispatch(pe.AddPage, c);
    }, _addPages: async (n, r) => {
      const s = await Xe(e), c = n.map(({ page: S, opts: k }) => ({ ...S, multiInstanceViewBehavior: (k == null ? void 0 : k.multiInstanceViewBehavior) || "duplicate" })), w = { identity: e, pages: c, ...r };
      return s.dispatch(pe.AttachPagesToWindow, w);
    }, removePage: async (n) => (await Xe(e)).dispatch(pe.DetachPagesFromWindow, { identity: e, pageIds: [n] }), reparentPage: async (n) => b().Browser.wrapSync(e)._reparentPage(n), _reparentPage: async (n) => {
      const { pageId: r } = n, s = await Xe(e), c = (await s.dispatch(pe.GetAllAttachedPages, void 0)).find(({ pageId: S }) => S === r);
      if (!c) throw new Error(`Reparent Page Error: Target page with pageId ${r} not found`);
      c.multiInstanceViewBehavior = "reparent";
      const w = { identity: e, pages: [c], insertionIndex: n.index };
      return s.dispatch(pe.AttachPagesToWindow, w);
    }, setActivePage: async (n) => (await Xe(e)).dispatch(pe.SetActivePage, { identity: e, pageId: n }), updatePage: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.UpdatePageForWindow, n);
    }, reorderPages: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.ReorderPagesForWindow, n);
    }, _openGlobalContextMenu: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.OpenGlobalContextMenuInternal, n);
    }, replaceToolbarOptions: async (n) => {
      await Xe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { toolbarOptions: n } });
    }, replaceWindowStateButtonOptions: async (n) => {
      await Xe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { windowStateButtonOptions: n } });
    }, updateBrowserWindowTitle: async (n) => {
      const r = fin.Window.wrapSync(e);
      typeof n != "string" ? await r.updateOptions({ workspacePlatform: { title: n } }) : console.warn("Type string for window title is deprecated, please use WindowTitle type instead", n);
    }, _openViewTabContextMenu: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.OpenViewTabContextMenuInternal, n);
    }, _openPageTabContextMenu: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.OpenPageTabContextMenuInternal, n);
    }, _openSaveModal: async (n) => (await Xe(e), (await Et(e)).dispatch(Tt.OpenSaveModalInternal, n)), _getLayoutsWithSelectedViews: async () => (await Et(e)).dispatch(Tt.GetLayoutsWithSelectedViewsInternal, e), _openSaveButtonContextMenu: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.OpenSaveButtonContextMenuInternal, n);
    }, _addDefaultPage: async (n) => {
      const r = await Xe(e);
      return n.identity = e, r.dispatch(pe.AddDefaultPage, n);
    }, _trackRemovedTab: async (n) => (await Xe(e)).dispatch(pe.TrackRemovedTabInternal, n), _restoreRemovedTab: async (n) => (await Xe(e)).dispatch(pe.RestoreRemovedTabInternal, n), _trackVisitedSite: async (n) => (await Xe(e)).dispatch(pe.TrackVisitedSiteInternal, n), _getRecentlyVisitedSites: async (n) => (await Xe(e)).dispatch(pe.GetRecentlyVisitedSitesInternal, n), _getFrequentlyVisitedSites: async (n) => (await Xe(e)).dispatch(pe.GetFrequentlyVisitedSitesInternal, n), _searchSites: async (n) => (await Xe(e)).dispatch(pe.SearchSitesInternal, { identity: e, req: n }), _getSearchProviders: async () => (await Xe(e)).dispatch(pe.GetSearchProvidersInternal, { identity: e }), _getCuratedContent: async (n) => (await Xe(e)).dispatch(pe.GetCuratedContentInternal, { identity: e, req: n }), _handleRequestNavigation: async (n) => (await Xe(e)).dispatch(pe.HandleRequestNavigationInternal, n), _sendUpdateVersionModalResponse: async (n) => (await Xe(e)).dispatch(pe.SendUpdateVersionModalResponseInternal, n) }), xr = (e) => {
      const n = fin.Platform.wrapSync(e);
      return { wrapSync: (r) => Pr(r), createWindow: async (r) => {
        const s = (() => {
          const w = `browser-window-startup-${Jt()}`;
          return On.markStart(w), w;
        })();
        ((w) => {
          fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
            On.markAndMeasure("browser-window-shown", w);
          });
        })(s), await Xe(e);
        const c = await n.createWindow(r);
        return ((w) => {
          On.markAndMeasure("browser-window-started", w);
        })(s), Pr(c.identity);
      }, getAllAttachedPages: async () => (await Xe(e)).dispatch(pe.GetAllAttachedPages, void 0), getAllWindows: async () => (await Xe(e), (await en()).map((r) => Pr(r.identity))), getUniquePageTitle: async (r) => (await Xe(e)).dispatch(pe.GetUniquePageTitle, r), getLastFocusedWindow: async () => (await Xe(e)).dispatch(pe.GetLastFocusedBrowserWindow, void 0), getPageByViewIdentity: async (r) => (await Xe(e)).dispatch(pe.GetPageByViewIdentity, r) };
    }, qa = (e, n = 0) => {
      let r, s, c = !1;
      const w = async (S) => {
        const k = await e(...S);
        if (c) {
          await new Promise((U) => setTimeout(U, n));
          const N = r;
          return r = void 0, c = !1, w(N);
        }
        return k;
      };
      return (...S) => (s ? (c = !0, r = S) : s = w(S).catch((k) => {
        throw console.error("makeDebouncedFunc", k), k;
      }).finally(() => {
        s = void 0;
      }), s);
    };
    var zr;
    (function(e) {
      e.Home = "/home", e.Browser = "/browser", e.Enterprise = "/enterprise", e.Provider = "/provider", e.Storefront = "/storefront", e.Dock = "/dock";
    })(zr || (zr = {}));
    function Cr(e, n) {
      return async (r, ...s) => {
        e.has(r) && e.get(r).forEach((c) => c(...s)), n && await n({ event: r, payload: s });
      };
    }
    function Ja(e, n) {
      return n && n((r) => {
        const { event: s, payload: c } = r;
        e.has(s) && e.get(s).forEach((w) => w(...c));
      }), (r, s) => {
        e.has(r) || e.set(r, /* @__PURE__ */ new Set()), e.get(r).add(s);
      };
    }
    function vo(e) {
      return (n, r) => {
        e.has(n) || e.set(n, /* @__PURE__ */ new Set());
        const s = e.get(n), c = (...w) => {
          r(...w), s.delete(c);
        };
        s.add(c);
      };
    }
    function qr(e) {
      return (n, r) => {
        e.has(n) && e.get(n).delete(r);
      };
    }
    const ko = { name: C.BrowserMenu, alwaysOnTop: !0, autoShow: !0, frame: !1, resizable: !1, backgroundColor: "#2f3136", smallWindow: !0, showTaskbarIcon: !1, backgroundThrottling: !1, saveWindowState: !1 };
    function Ya(e) {
      const n = { ...ko, ...e };
      return n.url = function(r, s) {
        if (!Lt) throw new Error("resolveAbsolutePath can only be used in a window");
        const c = window.location;
        if (/^(?:[a-z]+:)?\/\//i.test(r)) return r;
        const w = `${c.protocol}//${c.hostname}`;
        return new URL(r, w).href;
      }(n.url ?? ""), n;
    }
    const _a = function(e) {
      const n = /* @__PURE__ */ new Map();
      return { emit: Cr(n, (r) => at && fin.InterApplicationBus.publish(e, r)), addListener: Ja(n, (r) => at && fin.InterApplicationBus.subscribe({ uuid: fin.me.uuid }, e, r)), addListenerWithUUID: (r) => Ja(n, (s) => at && fin.InterApplicationBus.subscribe({ uuid: r }, e, s)), removeListener: qr(n), once: vo(n) };
    }("window.menu"), Ra = (e, n) => fin.Window.wrapSync(e).updateOptions({ opacity: n }), Za = (e) => _a.emit("response", e), Mr = qa(async () => (await g()).getChildWindows(), 500), ca = /* @__PURE__ */ new Map();
    async function Jr(e, n, r) {
      var k, N;
      const s = Ya(e), c = await Yn(fin.me.identity), w = await Un(fin.me.identity) === Ie.Dark, S = c == null ? void 0 : c.theme;
      return s.backgroundColor = ((N = (k = S == null ? void 0 : S[w ? Ie.Dark : Ie.Light]) == null ? void 0 : k.palette) == null ? void 0 : N.inputBackground) || s.backgroundColor, ca.has(s.name) ? ca.get(s.name) : new Promise((U) => {
        _a.once("ready", async (Y) => {
          if (Y.name === s.name) {
            const oe = await ca.get(s.name);
            s.preventBlur || oe.once("blurred", async () => {
              if (Ra(Y, 0), oe.hide(), Za({ name: s.name, data: { actionName: "Cancel" } }), ue = oe.identity.name, [C.BrowserSaveMenu, C.DockSaveWorkspaceMenu, C.DesktopSignalsModal].includes(ue)) {
                const Pe = await oe.getOptions();
                Pe.customContext !== "submitting" && Pe.customContext !== "error" && oe.close();
              } else oe.identity.name.startsWith(C.BrowserMenu) && oe.close();
              var ue;
            }), setTimeout(async () => {
              await Ra(Y, 1), (await fin.Window.wrapSync(Y).getOptions()).opacity !== 1 && Ra(Y, 1);
            }), U(oe);
          }
        });
        const X = (async () => {
          const Y = await fin.Platform.getCurrentSync().createWindow(Kt({ ...s, opacity: 0, url: n || s.url, defaultLeft: r == null ? void 0 : r.left, defaultTop: r == null ? void 0 : r.top, defaultWidth: r == null ? void 0 : r.width, defaultHeight: r == null ? void 0 : r.height, workspacePlatform: { preventBlur: e.preventBlur } }, !0));
          return Y.once("closed", () => {
            ca.delete(s.name);
          }), Y;
        })();
        ca.set(s.name, X);
      });
    }
    async function Yr(e, n) {
      const r = Ya(e), s = { top: r.top, left: r.left, width: r.defaultWidth || r.width, height: r.defaultHeight || r.height };
      return n.set("parentName", fin.Window.getCurrentSync().identity.name), { name: r.name, bounds: s, route: `${r.url}#${n.toString()}` };
    }
    async function Ir({ options: e, parameters: n }) {
      const r = n ?? new URLSearchParams(), s = Ya(e), { name: c, modalParentIdentity: w } = s;
      if (!r.has("isEnterprise")) {
        const k = `${await (async (N) => (Ca || (Ca = await At(N)), Ca))(w)}`;
        r.set("isEnterprise", k);
      }
      let S = await async function(k) {
        return (await Mr()).find((N) => N.identity.name === k);
      }(c);
      if (S) await async function(k, N) {
        const { name: U, bounds: X, route: Y } = await Yr(k, N), oe = { uuid: fin.me.identity.uuid, name: U }, ue = fin.Window.wrapSync(oe);
        await Promise.all([ue.hide(), Ra(oe, 0), ue.setBounds(X)]), k.preventBlur || ue.once("blurred", () => {
          Ra(oe, 0), ue.hide(), Za({ name: oe.name, data: { actionName: "Cancel" } });
        }), _a.emit("update", U, X, Y), await Za({ name: U, data: { actionName: "Cancel" } });
      }(s, r);
      else {
        const { route: k, bounds: N } = await Yr(e, r);
        S = await Jr({ ...s }, k, N);
      }
      return S;
    }
    const ua = async ({ options: e, content: n, parameters: r }) => {
      var S;
      const s = r ?? new URLSearchParams();
      s.set("content", JSON.stringify({ ...n, invocationId: Jt() }));
      const c = { ...e, name: `${e.name}--${((S = e.modalParentIdentity) == null ? void 0 : S.name) ?? ""}` }, w = await Ir({ options: c, parameters: s });
      return new Promise((k) => {
        _a.once("response", async (N) => {
          N.name === c.name && (k({ data: N.data }), c != null && c.closeOnResponse && w.close());
        });
      });
    };
    let la;
    async function An(e) {
      return (await (la || (la = cn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-modal`)()), la)).dispatch(ia.SendUpdateVersionModalResponse, e);
    }
    const Nt = async (e) => {
      const n = Me(e), r = await n.getBounds(), s = V(r), c = ve(s, { height: 240, width: 432 });
      return Ir({ options: { smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: C.DesktopSignalsModal, url: await Gt() + G.DesktopSignalsModal, defaultWidth: 432, defaultHeight: 240, preventBlur: !1, ...c }, parameters: new URLSearchParams({ title: "Desktop Signals Modal" }) });
    }, Qa = (e) => ({ createPage: async (n) => (await Xe(e)).dispatch(pe.CreateSavedPageInternal, n), deletePage: async (n) => (await Xe(e)).dispatch(pe.DeleteSavedPageInternal, n), updatePage: async (n) => (await Xe(e)).dispatch(pe.UpdateSavedPageInternal, n), getPage: async (n) => (await Xe(e)).dispatch(pe.GetSavedPage, n), getPages: async (n) => (await Xe(e)).dispatch(pe.GetSavedPages, n), savePage: async (n) => (await Xe(e)).dispatch(pe.SavePage, n), createWorkspace: async (n) => (await me(e)).dispatch(pe.CreateSavedWorkspace, n), deleteWorkspace: async (n) => {
      const r = b(), s = await r.getCurrentWorkspace();
      if (s.workspaceId === n) throw new Error(`Cannot delete current active workspace ${s.title}`);
      return (await me(e)).dispatch(pe.DeleteSavedWorkspace, n);
    }, updateWorkspace: async (n) => (await me(e)).dispatch(pe.UpdateSavedWorkspace, n), getWorkspace: async (n) => (await me(e)).dispatch(pe.GetSavedWorkspace, n), getWorkspaces: async (n) => (await me(e)).dispatch(pe.GetSavedWorkspaces, n), getWorkspacesMetadata: async (n) => (await me(e)).dispatch(pe.GetSavedWorkspacesMetadata, n), saveWorkspace: async (n) => (await me(e)).dispatch(pe.SaveWorkspace, n), getDockProviderConfig: async (n) => (await me(e)).dispatch(pe.GetDockProviderConfig, n), saveDockProviderConfig: async (n) => (await me(e)).dispatch(pe.SaveDockProviderConfig, n) });
    var Bn;
    (function(e) {
      e.UpdatePlatformThemeScheme = "update-platform-theme-scheme";
    })(Bn || (Bn = {}));
    const So = cn("of-workspace-notifications-sync"), Ar = Ie.Dark, Er = (e) => Object.entries(e).reduce((n, [r, s]) => `${n}--workspace-palette-${r}: ${s};`, ""), $n = (e, n) => {
      const r = !!e.contentBackground5 && e.contentBackground5 !== "#000000", s = !!e.contentBackground4 && e.contentBackground4 !== "#000000", c = Pn(e.textDefault), w = Pn(e.textInactive), S = c.rgb, k = w.rgb, N = c.alpha ? parseFloat(c.alpha.toString()) : 1, U = w.alpha ? parseFloat(w.alpha.toString()) : 1;
      return { dockExpandedContainerBorderColor: r ? e.contentBackground5 : e.background4, dockExpandedContainerBorderRadius: r && n ? "0" : "10px", dockExpandedContainerBackground: s ? e.contentBackground4 : e.background1, fillerBackgroundColor: s ? e.contentBackground4 : "inherit", dockCompanionContainerBackground: s ? e.contentBackground4 : "inherit", dockComponentContainerBackground: r ? e.contentBackground5 : e.background5, styledDropdownActiveBackground: `${r ? e.contentBackground5 : e.background4}`, contentMenuWrapperInternalDivBorderColor: r ? e.contentBackground5 : e.background5, contentMenuItemContainerActiveBackground: r ? e.contentBackground5 : e.background3, contentMenuItemContainerHoverBackground: r ? e.contentBackground5 : e.background2, contentMenuHeaderBorderColor: r ? e.contentBackground5 : e.background5, dockCompanionSeparatorBorderColor: r ? e.contentBackground5 : e.background3, dockComponentContainerBorderColor: r ? e.contentBackground5 : e.background5, companionDockButtonActiveBackground: r ? e.contentBackground5 : e.background4, companionDockButtonHoverBackground: r ? e.contentBackground5 : e.background4, "computed-scrollbar-thumb-alpha": N, "computed-scrollbar-track-alpha": U, "scrollbar-thumb-rgb": S, "scrollbar-track-rgb": k };
    }, Xa = (e, n, r) => ({ selectedTab: n === "dark" ? e.background3 : e.background1, ...$n(e, r) }), vn = new class {
      constructor(e) {
        this.providerStorage = e, this.getVarsByScheme = (n) => n === "dark" ? this.darkPaletteVars : this.lightPaletteVars, this.setWorkspaceStorage = (n) => {
          this.workspaceStorage = n;
        }, this.trySynchronizeWorkspaceStorage = () => {
          if (this.workspaceStorage && this.hasUserPreference()) {
            const n = this.getScheme();
            if (this.workspaceStorage.setItem(kt.SelectedColorScheme, n), this.darkPaletteVars && this.lightPaletteVars) if (n === "dark" || n === "light") this.workspaceStorage.setItem(kt.ThemePaletteSheet, `:root{${this.getVarsByScheme(n)}}`);
            else {
              const r = `@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`, s = `@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;
              this.workspaceStorage.setItem(kt.ThemePaletteSheet, `${s}${r}`);
            }
          }
        }, this.setPalettes = async ({ light: n, dark: r }, s) => {
          this.lightPaletteVars = Er({ ...n, ...Xa(n, "light", s) }), this.darkPaletteVars = Er({ ...r, ...Xa(r, "dark", s) });
        };
      }
      hasUserPreference() {
        return this.providerStorage.getItem(kt.SelectedColorScheme) !== null;
      }
      setScheme(e) {
        this.providerStorage.setItem(kt.SelectedColorScheme, e);
      }
      setThemeDefaultScheme(e) {
        const n = Object.values(Ie);
        n.includes(e) ? this.providerStorage.setItem(kt.ThemePaletteDefaultScheme, e) : console.warn(`Invalid theme default scheme '${e}'. Must be one of: ${n.join(", ")}. Ignoring default.`);
      }
      getScheme() {
        const e = this.providerStorage.getItem(kt.SelectedColorScheme), n = this.providerStorage.getItem(kt.ThemePaletteDefaultScheme);
        return e !== null ? e : n ?? Ar;
      }
    }(y), kn = () => (xt("ThemeStorage: getThemeStorageController called"), vn), Zr = (e) => ({ getThemes: async () => (await me(e)).dispatch(pe.GetThemes, void 0), setSelectedScheme: async (n) => (await me(e)).dispatch(pe.SetSelectedScheme, n), getSelectedScheme: async () => (await me(e)).dispatch(pe.GetSelectedScheme, void 0) }), t = async (e) => {
      await (await Ln()).dispatch("set-selected-scheme", e);
    }, a = async (e) => {
      await (await So()).dispatch(Bn.UpdatePlatformThemeScheme, { scheme: e });
    }, i = async (e) => {
      const n = await en();
      return Promise.all(n.map(async (r) => {
        await (await Et(r.identity)).dispatch(Tt.SetSelectedScheme, e);
      }));
    }, l = async (e) => {
      const n = await an();
      return Promise.all(n.map(async (r) => {
        await (await Et(r.identity)).dispatch(Tt.SetSelectedScheme, e);
      }));
    }, p = async (e) => {
      try {
        const n = kn();
        n.setScheme(e), await Promise.all([await n.trySynchronizeWorkspaceStorage(), a(e), i(e), l(e), t(e)]);
      } catch (n) {
        console.error("failed to set the selected scheme: ", n);
      }
    }, h = () => {
      try {
        return kn().getScheme();
      } catch (e) {
        console.error("failed to get the selected scheme: ", e);
      }
    }, v = (e) => {
      const n = fin.Platform.wrapSync(e);
      let r;
      return Object.assign(n, { applySnapshot: async (s, c) => {
        if (typeof s != "string" && !(s != null && s.windows)) throw new Error("Not a valid browser snapshot");
        return fin.Platform.wrapSync(e).applySnapshot(s, c);
      }, getSnapshot: () => fin.Platform.wrapSync(e).getSnapshot().then((s) => s), getViewSnapshot: (s) => fin.Platform.wrapSync(e).getViewSnapshot(s), createView: (s, c, w) => fin.Platform.wrapSync(e).createView(s, c, w), launchApp: async (s) => (console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."), s.target || (s.target = { uuid: Ve, name: O, entityType: re || "unknown" }), (await me(e)).dispatch(pe.LaunchApp, s)), _invokeCustomAction: async (s, c) => {
        const w = await me(e), S = { actionId: s, payload: { ...c, callerType: c.callerType || mt.API } };
        return w.dispatch(pe.InvokeCustomActionInternal, S);
      }, _requestQuitPlatformDialog: async (s) => (await me(e)).dispatch(pe.RequestQuitPlatformDialogInternal, s), _showUpdateVersionModal: async (s) => (await me(e)).dispatch(pe.ShowUpdateVersionModalInternal, s), getCurrentWorkspace: async (s) => (await me(e)).dispatch(pe.GetCurrentWorkspace, s), applyWorkspace: async (s, c) => (await me(e)).dispatch(pe.ApplyWorkspace, { ...s, options: c }), restoreLastSavedWorkspace: async (s) => (await me(e)).dispatch(pe.RestoreLastSavedWorkspaceInternal, s), setActiveWorkspace: async (s) => (await me(e)).dispatch(pe.SetActiveWorkspace, s), getLanguage: async () => (await me(e)).dispatch(pe.GetLanguage), _getLanguageResources: async () => (await me(e)).dispatch(pe.GetLanguageResourcesInternal), setLanguage: async (s) => (await me(e)).dispatch(pe.SetLanguage, s), _raiseAnalytics: async (s) => {
        var c;
        if (r || (r = await La(e)), typeof r == "object" && ((c = r == null ? void 0 : r.analytics) == null ? void 0 : c.isSupported))
          return (await me(e)).dispatch(pe.Analytics, s);
        e.uuid;
      }, getNotificationsConfig: async () => (await me(e)).dispatch(pe.GetNotificationsConfig), _refreshBookmarksInternal: async () => (await me(e)).dispatch(pe.RefreshBookmarksInternal), _launchBookmarkInternal: async (s) => (await me(e)).dispatch(pe.LaunchBookmarkInternal, s), _updateDockFavoritesInternal: async (s) => (await me(e)).dispatch(pe.UpdateDockFavoritesInternal, s), _updateContentMenuInternal: async (s) => (await me(e)).dispatch(pe.UpdateContentMenuInternal, s), _launchDockEntryInternal: async (s) => (await me(e)).dispatch(pe.LaunchDockEntryInternal, s), _setDockFavoritesInternal: async (s) => (await me(e)).dispatch(pe.SetDockFavoritesOrderInternal, s), _setDefaultDockButtonsOrderInternal: async (s) => (await me(e)).dispatch(pe.SetDefaultDockButtonsOrderInternal, s), _removeDockFavoriteInternal: async (s) => (await me(e)).dispatch(pe.RemoveDockFavoriteInternal, s), _addDockFavoriteInternal: async (s) => (await me(e)).dispatch(pe.AddDockFavoriteInternal, s), _navigateContentMenuInternal: async (s) => (await me(e)).dispatch(pe.NavigateContentMenuInternal, s), _openDockWorkspacesContextMenuInternal: async () => (await me(e)).dispatch(pe.GetDockWorkspacesContextMenuInternal), _handleDockWorkspacesMenuResponseInternal: async (s) => (await me(e)).dispatch(pe.HandleDockWorkspacesMenuResponseInternal, s), _focusAndExpandSearchInternal: async () => (await me(e)).dispatch(pe.FocusAndExpandSearchInternal), _showAboutPagePopup: async (s) => (async (c) => {
        const w = new URLSearchParams({ ...c, title: "About" }), S = await zn(fin.me.identity), k = c.copyrightMessage ? 320 : 286, N = ve(S, { height: k, width: 360 });
        return Ir({ options: { frame: !0, smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: C.AboutPageWindow, url: await Gt() + G.EnterpriseAboutPage, defaultWidth: 360, defaultHeight: k, preventBlur: !0, ...N }, parameters: w });
      })(s), Theme: Zr(e), Browser: xr(e), Storage: Qa(e) });
    }, b = () => v(fin.me.identity), T = { contextMenuOptions: { enabled: !0, template: ["spellCheck", "separator", "print", "separator", "cut", "copy", "paste", "undo", "redo", "selectAll", "inspect", "reload"] }, downloadShelf: { enabled: !0 } };
    function L(e, n) {
      return ea({}, T, n, e);
    }
    const A = "internal-generated-view-", I = (e, n) => e.content ? { ...e, content: e.content.map((r) => I(r, n)) } : { ...e, componentState: n(e.componentState) }, W = (e, n) => {
      var s;
      return r = L(e, n), { ...r, name: r.name ? r.name : `internal-generated-view-${Jt()}`, _internalWorkspaceData: { ...r._internalWorkspaceData, viewIdentifier: ((s = r._internalWorkspaceData) == null ? void 0 : s.viewIdentifier) || Jt() } };
      var r;
    }, D = (e) => ({ ...e, name: void 0 }), _ = (e) => {
      const n = { ...e };
      return I(n, D);
    }, E = (e) => {
      const n = { ...e };
      return I(n, (r) => r.name && r.name.startsWith(A) ? D(r) : r);
    }, K = (e) => {
      const n = [];
      return (e && Array.isArray(e) ? e : []).forEach((r) => {
        if (r.type === "component") return n.push(r.componentState);
        const s = K(r.content);
        n.push(...s);
      }), n;
    }, H = async (e, n, r = Re) => {
      let s;
      return await qe(r) && (s = (await Me(r).getOptions()).layout || { settings: {} }), { ...s, content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { title: e, url: n } }] }] };
    }, F = (e, n) => {
      const r = K(n.content);
      return { ...I(e, (s) => {
        const c = r.find((S) => {
          var k, N;
          return ((k = S._internalWorkspaceData) == null ? void 0 : k.viewIdentifier) === ((N = s._internalWorkspaceData) == null ? void 0 : N.viewIdentifier);
        }), w = c ? c.isClosable : s.isClosable;
        return { ...s, isClosable: w };
      }), settings: n.settings };
    }, ee = (e) => e ? K(e).length : 0, le = (ja()(async (e) => {
      try {
        if (!e || !e.layoutContainerKey) return;
        const n = await (async (c) => fin.Platform.Layout.wrapSync({ ...fin.me.identity, layoutName: c }).getConfig())(e.layoutContainerKey), r = n.content ? K(n.content) : [], s = r.length;
        s > 1 ? (async (c) => {
          if (c.attachedPageType !== "multiView") {
            const w = await b().Browser.getUniquePageTitle();
            b().Browser.wrapSync(Re).updatePage({ pageId: c.pageId, page: { title: c.title ?? w, singleViewName: null, attachedPageType: "multiView" } });
          }
        })(e) : s === 1 && (async (c, w) => {
          const S = b().Browser.wrapSync(Re);
          if (c.attachedPageType !== "singleView") {
            const k = await Ga(c);
            delete k.layout, delete k.pageId;
            const N = fin.View.wrapSync({ uuid: Re.uuid, name: w }), U = await N.getInfo(), X = { ...k, title: null, singleViewName: w, hasUnsavedChanges: !1, attachedPageType: "singleView", pageIcon: U.favicons[0] };
            await S.updatePage({ pageId: c.pageId, page: X });
          }
        })(e, r[0].name), await (async (c, w) => {
          const S = za({ ...Re, layoutName: c.layoutContainerKey }), k = await S.isShowingTabs();
          w > 1 ? k || await S.show() : w === 1 && k && await S.hide({ settings: { reorderEnabled: !0 } });
        })(e, s);
      } catch {
      }
    }, 50, { leading: !1, trailing: !0 }), md), ye = Vd;
    var fe = u.n(ye);
    const de = JSON.parse('{"contextMenu.newWindow":"新建窗口","contextMenu.newPage":"新建页面","contextMenu.restore":"还原到上次保存的更改","contextMenu.switchWorkspace":"切换工作区","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外观","contextMenu.saveWorkspace":"保存工作区","contextMenu.saveWorkspaceAs":"将工作区另存为...","contextMenu.renameWorkspace":"重命名工作区","contextMenu.deleteWorkspace":"删除工作区","contextMenu.downloads":"下载","contextMenu.savePage":"保存页面","contextMenu.savePageAs":"将页面另存为...","contextMenu.print":"打印...","contextMenu.printScreen":"打印屏幕","contextMenu.closeWindow":"关闭窗口","contextMenu.openStorefront":"开放式店面","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新建视图","contextMenu.openView":"使用默认 Web 浏览器打开视图","contextMenu.openViews":"使用默认 Web 浏览器打开视图","contextMenu.reload":"Reload CN","contextMenu.reloadView":"重新加载视图","contextMenu.reloadViews":"重新加载视图","contextMenu.duplicate":"Duplicate CN","contextMenu.duplicateView":"复制视图","contextMenu.duplicateViews":"复制视图","contextMenu.addView":"将视图添加到频道","contextMenu.addViews":"将视图添加到频道","contextMenu.removeView":"从频道中移除视图","contextMenu.removeViews":"从频道中移除视图","contextMenu.closeView":"关闭视图","contextMenu.closeViews":"关闭视图","contextMenu.closeTab":"Close Tab CN","contextMenu.duplicatePage":"复制页面","contextMenu.submenu.print":"打印","contextMenu.submenu.printAll":"全部打印","saveMenu.saveWorkspaceAs":"将工作区另存为","saveMenu.savePageAs":"将页面另存为","saveModal.enterValue":"Please enter a value CN","saveModal.alreadyExists":"{{title}} 已存在。","saveModal.pleaseEnterValidName":"请输入有效名称","saveModal.renamePage":"重新命名页面","saveModal.closePage":"关闭页面","saveModal.discardChanges":"放弃更改","saveModal.discardAll":"全部放弃","saveModal.saveAll":"全部保存","saveModal.savePagesCount":"关闭前保存 ({{count}}) 个页面？","defaultPageTitle":"Untitled Page CN","enterpriseDefaultPageTitle":"Untitled Supertab CN","addNewPage":"添加新页面","addNewTab":"添加新选项卡","addNewView":"新建视图","restoreModal":"您确定要还原到上次保存的更改吗？","modal.discardWarning":"任何未保存的更改都将丢失","modal.discardPageWarning":"对此页的任何未保存的更改都将丢失。","modal.saveChangesPrompt":"关闭前保存更改？","modal.pageClose":"关闭页面","switchWorkspaceModal":"您确定要切换到 {{workspace}} 吗？","switchWorkspaceModal.warning":"任何未保存的更改都将丢失","deleteWorkspaceModal":"您确定要永久删除此工作区吗？","replaceWorkspaceModal.warning":"名称为 {{workspace}} 的工作区已存在。您是否要替换它？","replaceWorkspaceModal.warning.body":"已存在同名的工作区。替换它将覆盖其当前内容。","replaceWorkspaceModal.replace":"替换","closePlatform":"关闭平台","closePlatform.workspace":"关闭 {{workspace}} 平台","closePlatform.warning":"关闭平台将关闭所有工作区、应用或任何正在运行的进程。","back":"后退","forward":"前进","reload":"重新加载","green":"绿色","purple":"紫色","orange":"橙色","red":"红色","pink":"粉红色","yellow":"黄色","theme.light":"浅色","theme.dark":"深色","theme.system":"与操作系统设置同步","toolbar.hideTabs":"隐藏选项卡","toolbar.showTabs":"显示选项卡","toolbar.lock":"锁定","toolbar.unlock":"解锁","toolbar.colorLinking":"颜色链接","toolbar.changeLayout":"更改布局","toolbar.saveMenu":"保存菜单","toolbar.maximizeWindow":"最大化窗口","toolbar.restoreWindow":"还原窗口","toolbar.minimizeWindow":"最小化窗口","changeLayout.fullWidth":"全宽","changeLayout.columns":"列数","changeLayout.Rows":"行数","changeLayout.Grid":"网格","successIndicator.workspaceSwitched":"已切换工作区","successIndicator.hidden":"选项卡已隐藏","successIndicator.shown":"选项卡已显示","successIndicator.locked":"页面已锁定","successIndicator.unlocked":"页面已解锁","successIndicator.workspaceSaved":"工作区已保存","successIndicator.workspaceSavedAs":"工作区已另存为 {{workspace}}","successIndicator.workspaceRenamed":"工作区已重命名","successIndicator.pageSaved":"页面已保存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. CN","successIndicator.pageCopySaved":"页面已另存为 {{title}}","successIndicator.pageRenamed":"页面已重命名","successIndicator.contextGroupApplied":"已应用上下文组","successIndicator.namedContextGroupApplied":"已应用 {{colorName}} 上下文组","successIndicator.viewRemoved":"从上下文组中移除视图","successIndicator.viewsRemoved":"从上下文组中移除视图","successIndicator.layoutApplied":"已应用 {{layoutName}} 布局","successIndicator.workspaceDeleted":"工作区已删除","errorIndicator.pageSaveFailed":"页面保存失败","errorIndicator.workspaceSaveFailed":"工作区保存失败","errorIndicator.failedToDuplicatePage":"复制页面失败","infoIndicator.colorLinkAttempt":"我们尝试对此选项卡进行颜色链接，但网站/内容所有者尚未启用该功能","global.cancel":"取消","global.confirm":"确认","global.save":"保存","global.delete":"Delete CN","appResults.header":"Featured Content CN","recentlyClosed.header":"Recently Closed CN","landingPage.subheader":"Apps and websites selected by an admin will show here CN","aria.openBrowser":"打开浏览器菜单","aria.browserTabs":"浏览器选项卡","aria.viewTab":"查看 {{title}} 的选项卡","aria.closePage":"关闭 {{title}} 的页面选项卡按钮","aria.closeTab":"关闭选项卡 {{title}}","aria.title":"标题","aria.closeContextGroup":"使用转义关闭上下文组选择对话框","aria.colorLinking":"显示或隐藏颜色链接","aria.applyColorLinking":"请选择一个视图以应用颜色链接","aria.assignColorLinkingCurrentView":"分配给 {{name}} 上下文组的当前视图","aria.assignColorLinkingCurrentViews":"分配给 {{name}} 上下文组的当前视图","aria.setColorLinkingActiveView":"将活动视图设置为 {{name}} 上下文组","aria.setColorLinkingActiveViews":"将活动视图设置为 {{name}} 上下文组","aria.escapeLayoutDialog":"使用转义关闭更改布局对话框","global.supertab":"Supertab CN","global.tab":"Tab CN","bookmarks.editBookmark":"Edit Bookmark CN","bookmarks.bookmarkAdded":"Bookmark added CN","bookmarks.done":"Done CN","bookmarks.remove":"Remove CN","bookmarks.bookmarksPanel":"Bookmarks Panel CN","bookmarks.bookmarks":"Bookmarks CN","bookmarks.allBookmarks":"All Bookmarks CN","bookmarks.favorites":"Favorites CN","bookmarks.searchBookmarks":"Search Bookmarks CN","bookmarks.clearSearchInput":"Clear Search Input CN","bookmarks.createFolder":"Create New Folder CN","bookmarks.exitFolder":"Exit Folder CN","bookmarks.newFolder":"New Folder CN","bookmarks.namedFolder":"{{name}} Folder CN","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings CN","bookmarks.folderSettings":"{{name}} Folder Settings CN","bookmarks.noResultsFound":"No results found CN","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search CN","bookmarks.nothingToShow":"Nothing to show yet CN","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder CN","bookmarks.resultsFoundIn":"Results found in {{name}} CN","bookmarks.resultsInOtherFolders":"Results found in other folders CN","bookmarks.allResultsFoundIn":"All results found in CN","bookmarks.editName":"Edit Name CN","bookmarks.move":"Move CN","bookmarks.bookmarkAddedTitle":"Bookmark Added CN","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" CN","bookmarks.bookmarkEditedTitle":"Bookmark Edited CN","enterpriseContextMenu.saveSupertab":"Save Supertab CN","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... CN","enterpriseContextMenu.duplicate":"Duplicate CN","enterpriseContextMenu.deleteSupertab":"Delete Supertab CN","enterpriseContextMenu.newTab":"New Tab CN","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As CN","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? CN","saveSupertabCount_other":"Save {{count}} Supertabs before closing? CN"},"enterpriseSaveModal.renameSupertab":"Rename CN","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. CN","enterpriseSaveModal.closeTab":"Close Tab CN","enterpriseSaveModal.closeSupertab":"Close Supertab CN","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. CN","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? CN","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. CN","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved CN","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. CN","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted CN","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. CN","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab CN","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab CN","enterpriseCommandBar.switchToSupertab":"Switch to Supertab CN","enterpriseCommandBar.goTo":"Go to {{type}} CN","enterpriseCommandBar.viewMore":"View More CN","sidePanel.aiCenter":"AI Center CN","sidePanel.newChat":"New Chat CN","sidePanel.toggleSidePanel":"Toggle Side Panel CN","sidePanel.closeSidePanel":"Close Side Panel CN","sidePanel.openAiCenter":"Open AI Center CN","contextMenu.quitEnterpriseBrowser":"Quit CN","dock.removeFavorite":"Remove CN"}'), Ee = JSON.parse('{"contextMenu.newWindow":"新視窗","contextMenu.newPage":"新頁面","contextMenu.restore":"還原到上次儲存的變更","contextMenu.switchWorkspace":"切換工作空間","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外觀","contextMenu.saveWorkspace":"儲存工作空間","contextMenu.saveWorkspaceAs":"將工作空間另存為...","contextMenu.renameWorkspace":"重新命名工作空間","contextMenu.deleteWorkspace":"刪除工作空間","contextMenu.downloads":"下載","contextMenu.savePage":"儲存頁面","contextMenu.savePageAs":"將頁面另存為...","contextMenu.print":"列印...","contextMenu.printScreen":"擷取畫面","contextMenu.closeWindow":"關閉視窗","contextMenu.openStorefront":"打開 Storefront","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新視圖","contextMenu.openView":"使用預設網頁瀏覽器打開視圖","contextMenu.openViews":"使用預設網頁瀏覽器打開視圖","contextMenu.reload":"Reload ZH","contextMenu.reloadView":"重新載入視圖","contextMenu.reloadViews":"重新載入視圖","contextMenu.duplicate":"Duplicate ZH","contextMenu.duplicateView":"複寫視圖","contextMenu.duplicateViews":"複寫視圖","contextMenu.addView":"將視圖新增至頻道","contextMenu.addViews":"將視圖新增至頻道","contextMenu.removeView":"從頻道中移除視圖","contextMenu.removeViews":"從頻道中移除視圖","contextMenu.closeView":"關閉視圖","contextMenu.closeViews":"關閉視圖","contextMenu.closeTab":"Close Tab ZH","contextMenu.duplicatePage":"複寫頁面","contextMenu.submenu.print":"列印","contextMenu.submenu.printAll":"列印全部","saveMenu.saveWorkspaceAs":"將工作空間另存為","saveMenu.savePageAs":"頁面另存為","saveModal.enterValue":"Please enter a value ZH","saveModal.alreadyExists":"{{title}} 已經存在。","saveModal.pleaseEnterValidName":"請輸入一個有效的名稱","saveModal.renamePage":"重新命名頁面","saveModal.closePage":"關閉頁面","saveModal.discardChanges":"捨棄變更","saveModal.discardAll":"全部捨棄","saveModal.saveAll":"儲存全部","saveModal.savePagesCount":"要先儲存 ({{count}}) 個頁面再關閉嗎？","defaultPageTitle":"Untitled Page ZH","enterpriseDefaultPageTitle":"Untitled Supertab ZH","addNewPage":"新增新頁面","addNewTab":"新增新索引標籤","addNewView":"新視圖","restoreModal":"您確定要還原到上次儲存的變更嗎？","modal.discardWarning":"任何未儲存的變更都將被捨棄","modal.discardPageWarning":"在此頁面任何未儲存的變更都將遺失。","modal.saveChangesPrompt":"要先儲存變更再關閉嗎？","modal.pageClose":"頁面關閉","switchWorkspaceModal":"您確定要切換到 {{workspace}}？","switchWorkspaceModal.warning":"任何未儲存的變更都將被捨棄","deleteWorkspaceModal":"您確定要永久刪除此工作空間嗎？","replaceWorkspaceModal.warning":"具有名稱 {{workspace}} 的工作空間已經存在。你要更換它嗎？","replaceWorkspaceModal.warning.body":"相同名稱的工作空間已經存在。更換它後，將會覆蓋目前內容。","replaceWorkspaceModal.replace":"更換","closePlatform":"關閉平台","closePlatform.workspace":"關閉 {{workspace}} 平台","closePlatform.warning":"關閉平台後，將關閉正在執行的任何工作空間、APP 或流程。","back":"上一頁","forward":"下一頁","reload":"重新載入","green":"綠","purple":"紫","orange":"橘","red":"紅色","pink":"粉紅","yellow":"黃","theme.light":"淺","theme.dark":"深","theme.system":"與 OS 設定同步","toolbar.hideTabs":"隱藏索引標籤","toolbar.showTabs":"顯示索引標籤","toolbar.lock":"上鎖","toolbar.unlock":"解鎖","toolbar.colorLinking":"顏色連結","toolbar.changeLayout":"變更版面","toolbar.saveMenu":"儲存選單","toolbar.maximizeWindow":"最大化視窗","toolbar.restoreWindow":"還原視窗","toolbar.minimizeWindow":"最小化視窗","changeLayout.fullWidth":"全螢幕寬度","changeLayout.columns":"行","changeLayout.Rows":"列","changeLayout.Grid":"網格","successIndicator.workspaceSwitched":"工作空間已切換","successIndicator.hidden":"索引標籤已隱藏","successIndicator.shown":"索引標籤已顯示","successIndicator.locked":"頁面已上鎖","successIndicator.unlocked":"頁面已解鎖","successIndicator.workspaceSaved":"工作空間已儲存","successIndicator.workspaceSavedAs":"工作空間已另存為 {{workspace}}","successIndicator.workspaceRenamed":"工作空間已重新命名","successIndicator.pageSaved":"頁面已儲存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. ZH","successIndicator.pageCopySaved":"頁面已另存為 {{title}}","successIndicator.pageRenamed":"頁面已重新命名","successIndicator.contextGroupApplied":"脈絡群組已套用","successIndicator.namedContextGroupApplied":"{{colorName}} 脈絡群組已套用","successIndicator.viewRemoved":"從脈絡群組中移除的視圖","successIndicator.viewsRemoved":"從脈絡群組中移除的視圖","successIndicator.layoutApplied":"{{layoutName}} 版面已套用","successIndicator.workspaceDeleted":"工作空間已刪除","errorIndicator.pageSaveFailed":"頁面無法儲存","errorIndicator.workspaceSaveFailed":"工作空間無法儲存","errorIndicator.failedToDuplicatePage":"無法複寫頁面","infoIndicator.colorLinkAttempt":"我們嘗試對此索引標籤進行顏色連結，但網站/內容所有者尚未啟用該功能","global.cancel":"取消","global.confirm":"確認","global.save":"儲存","global.delete":"Delete ZH","appResults.header":"Featured Content ZH","recentlyClosed.header":"Recently Closed ZH","landingPage.subheader":"Apps and websites selected by an admin will show here ZH","aria.openBrowser":"開啟瀏覽器選單","aria.browserTabs":"瀏覽器索引標籤","aria.viewTab":"{{title}} 的視圖索引標籤","aria.closePage":"關閉 {{title}} 的頁面索引標籤按鈕","aria.closeTab":"關閉索引標籤 {{title}}","aria.title":"標題","aria.closeContextGroup":"使用 Esc 鍵關閉脈絡群組選取對話框","aria.colorLinking":"顯示或隱藏顏色連結","aria.applyColorLinking":"請選取要套用顏色連結的視圖","aria.assignColorLinkingCurrentView":"目前視圖分配給 {{name}} 脈絡群組","aria.assignColorLinkingCurrentViews":"目前視圖分配給 {{name}} 脈絡群組","aria.setColorLinkingActiveView":"將啟用視圖設定為 {{name}} 脈絡群組","aria.setColorLinkingActiveViews":"將啟用視圖設定為 {{name}} 脈絡群組","aria.escapeLayoutDialog":"使用 Esc 鍵關閉變更版面對話框","global.supertab":"Supertab ZH","global.tab":"Tab ZH","bookmarks.editBookmark":"Edit Bookmark ZH","bookmarks.bookmarkAdded":"Bookmark added ZH","bookmarks.done":"Done ZH","bookmarks.remove":"Remove ZH","bookmarks.bookmarksPanel":"Bookmarks Panel ZH","bookmarks.bookmarks":"Bookmarks ZH","bookmarks.allBookmarks":"All Bookmarks ZH","bookmarks.favorites":"Favorites ZH","bookmarks.searchBookmarks":"Search Bookmarks ZH","bookmarks.clearSearchInput":"Clear Search Input ZH","bookmarks.createFolder":"Create New Folder ZH","bookmarks.exitFolder":"Exit Folder ZH","bookmarks.newFolder":"New Folder ZH","bookmarks.namedFolder":"{{name}} Folder ZH","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings ZH","bookmarks.folderSettings":"{{name}} Folder Settings ZH","bookmarks.noResultsFound":"No results found ZH","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search ZH","bookmarks.nothingToShow":"Nothing to show yet ZH","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder ZH","bookmarks.resultsFoundIn":"Results found in {{name}} ZH","bookmarks.resultsInOtherFolders":"Results found in other folders ZH","bookmarks.allResultsFoundIn":"All results found in ZH","bookmarks.editName":"Edit Name ZH","bookmarks.move":"Move ZH","bookmarks.bookmarkAddedTitle":"Bookmark Added ZH","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" ZH","bookmarks.bookmarkEditedTitle":"Bookmark Edited ZH","enterpriseContextMenu.saveSupertab":"Save Supertab ZH","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... ZH","enterpriseContextMenu.duplicate":"Duplicate ZH","enterpriseContextMenu.deleteSupertab":"Delete Supertab ZH","enterpriseContextMenu.newTab":"New Tab ZH","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As ZH","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? ZH","saveSupertabCount_other":"Save {{count}} Supertabs before closing? ZH"},"enterpriseSaveModal.renameSupertab":"Rename ZH","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. ZH","enterpriseSaveModal.closeTab":"Close Tab ZH","enterpriseSaveModal.closeSupertab":"Close Supertab ZH","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. ZH","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? ZH","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. ZH","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved ZH","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. ZH","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted ZH","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. ZH","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab ZH","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab ZH","enterpriseCommandBar.switchToSupertab":"Switch to Supertab ZH","enterpriseCommandBar.goTo":"Go to {{type}} ZH","enterpriseCommandBar.viewMore":"View More ZH","sidePanel.aiCenter":"AI Center ZH","sidePanel.newChat":"New Chat ZH","sidePanel.toggleSidePanel":"Toggle Side Panel ZH","sidePanel.closeSidePanel":"Close Side Panel ZH","sidePanel.openAiCenter":"Open AI Center ZH","contextMenu.quitEnterpriseBrowser":"Quit ZH","dock.removeFavorite":"Remove ZH"}'), xe = JSON.parse('{"contextMenu.newWindow":"New Window","contextMenu.newPage":"New Page","contextMenu.restore":"Restore to Last Saved Changes","contextMenu.switchWorkspace":"Switch Workspace","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Appearance","contextMenu.saveWorkspace":"Save Workspace","contextMenu.saveWorkspaceAs":"Save Workspace As...","contextMenu.renameWorkspace":"Rename Workspace","contextMenu.deleteWorkspace":"Delete Workspace","contextMenu.downloads":"Downloads","contextMenu.savePage":"Save Page","contextMenu.savePageAs":"Save Page As...","contextMenu.print":"Print...","contextMenu.printScreen":"Print Screen","contextMenu.closeWindow":"Close Window","contextMenu.openStorefront":"Open Storefront","contextMenu.quitPlatform":"Quit {{platformLabel}}","contextMenu.newView":"New View","contextMenu.openView":"Open View with Default Web Browser","contextMenu.openViews":"Open Views with Default Web Browser","contextMenu.reload":"Reload","contextMenu.reloadView":"Reload View","contextMenu.reloadViews":"Reload Views","contextMenu.duplicate":"Duplicate","contextMenu.duplicateView":"Duplicate View","contextMenu.duplicateViews":"Duplicate Views","contextMenu.addView":"Add View to Channel","contextMenu.addViews":"Add Views to Channel","contextMenu.removeView":"Remove View from Channel","contextMenu.removeViews":"Remove Views from Channel","contextMenu.closeView":"Close View","contextMenu.closeViews":"Close Views","contextMenu.closeTab":"Close Tab","contextMenu.duplicatePage":"Duplicate Page","contextMenu.submenu.print":"Print","contextMenu.submenu.printAll":"Print All","saveMenu.saveWorkspaceAs":"Save Workspace As","saveMenu.savePageAs":"Save Page As","saveModal.enterValue":"Please enter a value","saveModal.alreadyExists":"{{title}} already exists.","saveModal.pleaseEnterValidName":"Please enter a valid name","saveModal.renamePage":"Rename Page","saveModal.closePage":"Close Page","saveModal.discardChanges":"Discard Changes","saveModal.discardAll":"Discard All","saveModal.saveAll":"Save All","saveModal.savePagesCount":"Save ({{count}}) pages before closing?","defaultPageTitle":"Untitled Page","enterpriseDefaultPageTitle":"Untitled Supertab","addNewPage":"New Page","addNewTab":"Add New Tab","addNewView":"New View","restoreModal":"Are you sure you want to restore to last saved changes?","modal.discardWarning":"Any unsaved changes will be discarded","modal.discardPageWarning":"Any unsaved changes to this page will be lost.","modal.saveChangesPrompt":"Save changes before closing?","modal.pageClose":"Page Close","switchWorkspaceModal":"Are you sure you want to switch to {{workspace}}?","switchWorkspaceModal.warning":"Any unsaved changes will be discarded","deleteWorkspaceModal":"Are you sure you want to permanently delete this workspace?","replaceWorkspaceModal.warning":"A Workspace with the name {{workspace}} already exists. Do you want to replace it?","replaceWorkspaceModal.warning.body":"A workspace with the same name already exists. Replacing it will overwrite its current contents.","replaceWorkspaceModal.replace":"Replace","closePlatform":"Close the platform","closePlatform.workspace":"Close the {{workspace}} Platform","closePlatform.warning":"Closing a platform will close any workspaces, apps or any processes that are running.","back":"Back","forward":"Forward","reload":"Reload","green":"Green","purple":"Purple","orange":"Orange","red":"Red","pink":"Pink","yellow":"Yellow","theme.light":"Light","theme.dark":"Dark","theme.system":"Sync with OS setting","toolbar.hideTabs":"Hide Tabs","toolbar.showTabs":"Show Tabs","toolbar.lock":"Lock","toolbar.unlock":"Unlock","toolbar.colorLinking":"Color Linking","toolbar.changeLayout":"Change Layout","toolbar.saveMenu":"Save Menu","toolbar.maximizeWindow":"Maximize Window","toolbar.restoreWindow":"Restore Window","toolbar.minimizeWindow":"Minimize Window","changeLayout.fullWidth":"Full Width","changeLayout.columns":"Columns","changeLayout.Rows":"Rows","changeLayout.Grid":"Grid","successIndicator.workspaceSwitched":"Workspace Switched","successIndicator.hidden":"Tabs are Hidden","successIndicator.shown":"Tabs are Shown","successIndicator.locked":"Page is Locked","successIndicator.unlocked":"Page is Unlocked","successIndicator.workspaceSaved":"Workspace saved","successIndicator.workspaceSavedAs":"Workspace saved as {{workspace}}","successIndicator.workspaceRenamed":"Workspace renamed","successIndicator.pageSaved":"Page Saved","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved.","successIndicator.pageCopySaved":"Page saved as {{title}}","successIndicator.pageRenamed":"Page renamed","successIndicator.contextGroupApplied":"Context group applied","successIndicator.namedContextGroupApplied":"{{colorName}} context group applied","successIndicator.viewRemoved":"View removed from context group","successIndicator.viewsRemoved":"Views removed from context group","successIndicator.layoutApplied":"{{layoutName}} layout applied","successIndicator.workspaceDeleted":"Workspace deleted","errorIndicator.pageSaveFailed":"Page failed to save","errorIndicator.workspaceSaveFailed":"Workspace failed to save","errorIndicator.failedToDuplicatePage":"Failed to duplicate Page","infoIndicator.colorLinkAttempt":"We attempted to color link this tab, but the site/content owner has not enabled it yet","global.cancel":"Cancel","global.confirm":"Confirm","global.save":"Save","global.delete":"Delete","appResults.header":"Featured Content","recentlyClosed.header":"Recently Closed","landingPage.subheader":"Apps and websites selected by an admin will show here","aria.openBrowser":"Open Browser Menu","aria.browserTabs":"Browser Tabs","aria.viewTab":"View Tab for {{title}}","aria.closePage":"Close Page Tab Button for {{title}}","aria.closeTab":"Close Tab {{title}}","aria.title":"Title","aria.closeContextGroup":"Use escape to close context group selection dialog","aria.colorLinking":"Show or hide color linking","aria.applyColorLinking":"Please select a view to apply color linking","aria.assignColorLinkingCurrentView":"Current view assigned to {{name}} context group","aria.assignColorLinkingCurrentViews":"Current views assigned to {{name}} context group","aria.setColorLinkingActiveView":"Set active view to {{name}} context group","aria.setColorLinkingActiveViews":"Set active views to {{name}} context group","aria.escapeLayoutDialog":"Use escape to close change layout dialog","global.supertab":"Supertab","global.tab":"Tab","bookmarks.editBookmark":"Edit Bookmark","bookmarks.bookmarkAdded":"Bookmark added","bookmarks.done":"Done","bookmarks.remove":"Remove","bookmarks.bookmarksPanel":"Bookmarks Panel","bookmarks.bookmarks":"Bookmarks","bookmarks.allBookmarks":"All Bookmarks","bookmarks.favorites":"Favorites","bookmarks.searchBookmarks":"Search Bookmarks","bookmarks.clearSearchInput":"Clear Search Input","bookmarks.createFolder":"Create New Folder","bookmarks.exitFolder":"Exit Folder","bookmarks.newFolder":"New Folder","bookmarks.namedFolder":"{{name}} Folder","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings","bookmarks.folderSettings":"{{name}} Folder Settings","bookmarks.noResultsFound":"No results found","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search","bookmarks.nothingToShow":"Nothing to show yet","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder","bookmarks.resultsFoundIn":"Results found in {{name}}","bookmarks.resultsInOtherFolders":"Results found in other folders","bookmarks.allResultsFoundIn":"All results found in","bookmarks.editName":"Edit Name","bookmarks.move":"Move","bookmarks.bookmarkAddedTitle":"Bookmark Added","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\"","bookmarks.bookmarkEditedTitle":"Bookmark Edited","enterpriseContextMenu.saveSupertab":"Save Supertab","enterpriseContextMenu.saveSupertabAs":"Save Supertab As...","enterpriseContextMenu.duplicate":"Duplicate","enterpriseContextMenu.deleteSupertab":"Delete Supertab","enterpriseContextMenu.newTab":"New Tab","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing?","saveSupertabCount_other":"Save {{count}} Supertabs before closing?"},"enterpriseSaveModal.renameSupertab":"Rename","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab.","enterpriseSaveModal.closeTab":"Close Tab","enterpriseSaveModal.closeSupertab":"Close Supertab","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost.","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab?","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent.","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted.","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab","enterpriseCommandBar.switchToSupertab":"Switch to Supertab","enterpriseCommandBar.goTo":"Go to {{type}}","enterpriseCommandBar.viewMore":"View More","sidePanel.aiCenter":"AI Center","sidePanel.newChat":"New Chat","sidePanel.toggleSidePanel":"Toggle Side Panel","sidePanel.closeSidePanel":"Close Side Panel","sidePanel.openAiCenter":"Open AI Center","contextMenu.quitEnterpriseBrowser":"Quit","dock.removeFavorite":"Remove","dock.workspaceManagement":{"restoreSuccess":"Last Saved Changes Restored"}}'), he = JSON.parse('{"contextMenu.newWindow":"Neues Fenster","contextMenu.newPage":"Neue Seite","contextMenu.restore":"Wiederherstellen der zuletzt gespeicherten Änderungen","contextMenu.switchWorkspace":"Workspace wechseln","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Erscheinungsbild","contextMenu.saveWorkspace":"Workspace speichern","contextMenu.saveWorkspaceAs":"Workspace speichern unter...","contextMenu.renameWorkspace":"Workspace umbenennen","contextMenu.deleteWorkspace":"Workspace löschen","contextMenu.downloads":"Downloads","contextMenu.savePage":"Seite speichern","contextMenu.savePageAs":"Seite speichern unter...","contextMenu.print":"Drucken...","contextMenu.printScreen":"Bildschirmansicht drucken","contextMenu.closeWindow":"Fenster schließen","contextMenu.openStorefront":"Schaufenster öffnen","contextMenu.quitPlatform":"Plattform verlassen","contextMenu.newView":"Neue Ansicht","contextMenu.openView":"Ansicht mit Standard-Webbrowser öffnen","contextMenu.openViews":"Ansichten mit Standard-Webbrowser öffnen","contextMenu.reload":"Reload DE","contextMenu.reloadView":"Ansicht neu laden","contextMenu.reloadViews":"Ansichten neu laden","contextMenu.duplicate":"Duplicate DE","contextMenu.duplicateView":"Ansicht duplizieren","contextMenu.duplicateViews":"Ansichten duplizieren","contextMenu.addView":"Ansicht zum Channel hinzufügen","contextMenu.addViews":"Ansichten zum Channel hinzufügen","contextMenu.removeView":"Ansicht aus dem Channel entfernen","contextMenu.removeViews":"Ansichten aus dem Channel entfernen","contextMenu.closeView":"Ansicht schließen","contextMenu.closeViews":"Ansichten schließen","contextMenu.closeTab":"Close Tab DE","contextMenu.duplicatePage":"Seite duplizieren","contextMenu.submenu.print":"Drucken","contextMenu.submenu.printAll":"Alle drucken","saveMenu.saveWorkspaceAs":"Workspace speichern unter","saveMenu.savePageAs":"Seite speichern unter","saveModal.enterValue":"Please enter a value DE","saveModal.alreadyExists":"{{title}} existiert bereits.","saveModal.pleaseEnterValidName":"Bitte geben Sie einen gültigen Namen ein","saveModal.renamePage":"Seite umbenennen","saveModal.closePage":"Seite schließen","saveModal.discardChanges":"Änderungen verwerfen","saveModal.discardAll":"Alle verwerfen","saveModal.saveAll":"Alle speichern","saveModal.savePagesCount":"({{count}}) Seiten vor dem Schließen speichern?","defaultPageTitle":"Untitled Page DE","enterpriseDefaultPageTitle":"Untitled Supertab DE","addNewPage":"Neue Seite hinzufügen","addNewTab":"Neuen Tab hinzufügen","addNewView":"Neue Ansicht","restoreModal":"Sind Sie sicher, dass Sie die zuletzt gespeicherten Änderungen wiederherstellen wollen?","modal.discardWarning":"Alle nicht gespeicherten Änderungen werden verworfen","modal.discardPageWarning":"Alle nicht gespeicherten Änderungen auf dieser Seite gehen verloren.","modal.saveChangesPrompt":"Änderungen vor dem Schließen speichern?","modal.pageClose":"Seite schließen","switchWorkspaceModal":"Sind Sie sicher, dass Sie zu {{workspace}}wechseln wollen?","switchWorkspaceModal.warning":"Alle nicht gespeicherten Änderungen werden verworfen","deleteWorkspaceModal":"Sind Sie sicher, dass Sie diesen Workspace dauerhaft löschen wollen?","replaceWorkspaceModal.warning":"Ein Workspace mit dem Namen {{workspace}} existiert bereits. Möchten Sie ihn ersetzen?","replaceWorkspaceModal.warning.body":"Ein Workspace mit demselben Namen existiert bereits. Wenn Sie ihn ersetzen, wird der aktuelle Inhalt überschrieben.","replaceWorkspaceModal.replace":"Ersetzen","closePlatform":"Plattform schließen","closePlatform.workspace":"Die {{workspace}} Plattform schließen","closePlatform.warning":"Wenn Sie eine Plattform schließen, werden alle Workspaces, Apps und laufenden Prozesse beendet.","back":"Zurück","forward":"Weiter","reload":"Neu laden","green":"Grün","purple":"Lila","orange":"Orange","red":"Rot","pink":"Pink","yellow":"Gelb","theme.light":"Hell","theme.dark":"Dunkel","theme.system":"Synchronisierung mit OS-Einstellung","toolbar.hideTabs":"Tabs ausblenden","toolbar.showTabs":"Tabs anzeigen","toolbar.lock":"Sperren","toolbar.unlock":"Freischalten","toolbar.colorLinking":"Farbverknüpfung","toolbar.changeLayout":"Layout ändern","toolbar.saveMenu":"Menü speichern","toolbar.maximizeWindow":"Fenster maximieren","toolbar.restoreWindow":"Fenster wiederherstellen","toolbar.minimizeWindow":"Fenster minimieren","changeLayout.fullWidth":"Volle Breite","changeLayout.columns":"Spalten","changeLayout.Rows":"Zeilen","changeLayout.Grid":"Raster","successIndicator.workspaceSwitched":"Workspace gewechselt","successIndicator.hidden":"Tabs sind ausgeblendet","successIndicator.shown":"Tabs werden angezeigt","successIndicator.locked":"Seite ist gesperrt","successIndicator.unlocked":"Seite ist freigeschaltet","successIndicator.workspaceSaved":"Workspace gespeichert","successIndicator.workspaceSavedAs":"Workspace gespeichert als {{workspace}}","successIndicator.workspaceRenamed":"Workspace umbenannt","successIndicator.pageSaved":"Seite gespeichert","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. DE","successIndicator.pageCopySaved":"Seite gespeichert als {{title}}","successIndicator.pageRenamed":"Seite umbenannt","successIndicator.contextGroupApplied":"Angewandte Kontextgruppe","successIndicator.namedContextGroupApplied":"{{colorName}} angewandte Kontextgruppe","successIndicator.viewRemoved":"Ansicht aus der Kontextgruppe entfernt","successIndicator.viewsRemoved":"Ansichten aus der Kontextgruppe entfernt","successIndicator.layoutApplied":"{{layoutName}} angewandtes Layout","successIndicator.workspaceDeleted":"Workspace gelöscht","errorIndicator.pageSaveFailed":"Seite konnte nicht gespeichert werden","errorIndicator.workspaceSaveFailed":"Workspace konnte nicht gespeichert werden","errorIndicator.failedToDuplicatePage":"Seite kann nicht dupliziert werden","infoIndicator.colorLinkAttempt":"Wir haben versucht, diesem Tab eine Farbe zuordnen, aber der Eigentümer der Website/des Inhalts hat sie noch nicht aktiviert","global.cancel":"Abbrechen","global.confirm":"Bestätigen","global.save":"Speichern","global.delete":"Delete DE","appResults.header":"Featured Content DC","recentlyClosed.header":"Recently Closed DC","landingPage.subheader":"Apps and websites selected by an admin will show here DE","aria.openBrowser":"Browser-Menü öffnen","aria.browserTabs":"Browser-Tab","aria.viewTab":"Tab „Ansicht“ für {{title}}","aria.closePage":"Button „Seite schließen“ für {{title}}","aria.closeTab":"Tab schließen {{title}}","aria.title":"Bezeichnung","aria.closeContextGroup":"Verwenden Sie die Escape-Taste, um den Dialog zur Auswahl von Kontextgruppen zu schließen","aria.colorLinking":"Farbverknüpfung ein- oder ausblenden","aria.applyColorLinking":"Bitte wählen Sie eine Ansicht, um die Farbverknüpfung anzuwenden","aria.assignColorLinkingCurrentView":"Aktuelle Ansicht, die der Kontextgruppe {{name}} zugeordnet ist","aria.assignColorLinkingCurrentViews":"Aktuelle Ansichten, die der Kontextgruppe {{name}} zugeordnet sind","aria.setColorLinkingActiveView":"Aktive Ansicht auf die Kontextgruppe {{name}} setzen","aria.setColorLinkingActiveViews":"Aktive Ansichten auf die Kontextgruppe {{name}} setzen","aria.escapeLayoutDialog":"Verwenden Sie die Escape-Taste, um den Dialog zur Layoutänderung zu schließen","global.supertab":"Supertab DE","global.tab":"Tab DE","bookmarks.editBookmark":"Edit Bookmark DE","bookmarks.bookmarkAdded":"Bookmark added DE","bookmarks.done":"Done DE","bookmarks.remove":"Remove DE","bookmarks.bookmarksPanel":"Bookmarks Panel DE","bookmarks.bookmarks":"Bookmarks DE","bookmarks.allBookmarks":"All Bookmarks DE","bookmarks.favorites":"Favorites DE","bookmarks.searchBookmarks":"Search Bookmarks DE","bookmarks.clearSearchInput":"Clear Search Input DE","bookmarks.createFolder":"Create New Folder DE","bookmarks.exitFolder":"Exit Folder DE","bookmarks.newFolder":"New Folder DE","bookmarks.namedFolder":"{{name}} Folder DE","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings DE","bookmarks.folderSettings":"{{name}} Folder Settings DE","bookmarks.noResultsFound":"No results found DE","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search DE","bookmarks.nothingToShow":"Nothing to show yet DE","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder DE","bookmarks.resultsFoundIn":"Results found in {{name}} DE","bookmarks.resultsInOtherFolders":"Results found in other folders DE","bookmarks.allResultsFoundIn":"All results found in DE","bookmarks.editName":"Edit Name DE","bookmarks.move":"Move DE","bookmarks.bookmarkAddedTitle":"Bookmark Added DE","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" DE","bookmarks.bookmarkEditedTitle":"Bookmark Edited DE","enterpriseContextMenu.saveSupertab":"Save Supertab DE","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... DE","enterpriseContextMenu.duplicate":"Duplicate DE","enterpriseContextMenu.deleteSupertab":"Delete Supertab DE","enterpriseContextMenu.newTab":"New Tab DE","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As DE","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? DE","saveSupertabCount_other":"Save {{count}} Supertabs before closing? DE"},"enterpriseSaveModal.renameSupertab":"Rename DE","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. DE","enterpriseSaveModal.closeTab":"Close Tab DE","enterpriseSaveModal.closeSupertab":"Close Supertab DE","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. DE","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? DE","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. DE","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved DE","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. DE","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted DE","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. DE","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab DE","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab DE","enterpriseCommandBar.switchToSupertab":"Switch to Supertab DE","enterpriseCommandBar.goTo":"Go to {{type}} DE","enterpriseCommandBar.viewMore":"View More DE","sidePanel.aiCenter":"AI Center DE","sidePanel.newChat":"New Chat DE","sidePanel.toggleSidePanel":"Toggle Side Panel DE","sidePanel.closeSidePanel":"Close Side Panel DE","sidePanel.openAiCenter":"Open AI Center DE","contextMenu.quitEnterpriseBrowser":"Quit DE","dock.removeFavorite":"Remove DE"}'), _e = JSON.parse('{"contextMenu.newWindow":"新しいウィンドウ","contextMenu.newPage":"新しいページ","contextMenu.restore":"最後に保存された変更に戻す","contextMenu.switchWorkspace":"ワークスペースに切り替える","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外観","contextMenu.saveWorkspace":"ワークスペースを保存","contextMenu.saveWorkspaceAs":"ワークスペースを別名で保存...","contextMenu.renameWorkspace":"ワークスペース名を変更","contextMenu.deleteWorkspace":"ワークスペースを削除","contextMenu.downloads":"ダウンロード","contextMenu.savePage":"ページを保存","contextMenu.savePageAs":"ページを別名で保存...","contextMenu.print":"印刷...","contextMenu.printScreen":"プリントスクリーン","contextMenu.closeWindow":"ウィンドウを閉じる","contextMenu.openStorefront":"ストアフロントを開く","contextMenu.quitPlatform":"プラットフォームを終了する","contextMenu.newView":"新しいビュー","contextMenu.openView":"デフォルトのウェブブラウザーでビューを開く","contextMenu.openViews":"デフォルトのウェブブラウザーでビューを開く","contextMenu.reload":"Reload JP","contextMenu.reloadView":"ビューをリロード","contextMenu.reloadViews":"ビューをリロード","contextMenu.duplicate":"Duplicate JP","contextMenu.duplicateView":"ビューを複製","contextMenu.duplicateViews":"ビューを複製","contextMenu.addView":"ビューをチャネルに追加","contextMenu.addViews":"ビューをチャネルに追加","contextMenu.removeView":"チャネルからビューを削除","contextMenu.removeViews":"チャネルからビューを削除","contextMenu.closeView":"ビューを閉じる","contextMenu.closeViews":"ビューを閉じる","contextMenu.closeTab":"Close Tab JP","contextMenu.duplicatePage":"ページを複製","contextMenu.submenu.print":"印刷","contextMenu.submenu.printAll":"すべてを印刷","saveMenu.saveWorkspaceAs":"ワークスペースを別名で保存","saveMenu.savePageAs":"ページを別名で保存","saveModal.enterValue":"Please enter a value JP","saveModal.alreadyExists":"{{title}}はすでに存在しています。","saveModal.pleaseEnterValidName":"有効な名前を入力してください","saveModal.renamePage":"ページ名を変更","saveModal.closePage":"ページを閉じる","saveModal.discardChanges":"変更を破棄","saveModal.discardAll":"すべて破棄","saveModal.saveAll":"すべて保存","saveModal.savePagesCount":"閉じる前に（{{count}}）つのページを保存しますか？","defaultPageTitle":"Untitled Page JP","enterpriseDefaultPageTitle":"Untitled Supertab JP","addNewPage":"新しいページを追加","addNewTab":"新しいタブを追加","addNewView":"新しいビュー","restoreModal":"本当に最後に保存された変更に戻しますか？","modal.discardWarning":"保存されていない変更は破棄されます","modal.discardPageWarning":"保存されていないこのページへの変更は失われます。","modal.saveChangesPrompt":"閉じる前に変更を保存しますか？","modal.pageClose":"ページを閉じる","switchWorkspaceModal":"本当に{{workspace}}に切り替えますか？","switchWorkspaceModal.warning":"保存されていない変更は破棄されます","deleteWorkspaceModal":"このワークスペースを永久に削除してもよろしいですか？","replaceWorkspaceModal.warning":"{{workspace}}という名前のワークスペースがすでに存在します。置き換えますか？","replaceWorkspaceModal.warning.body":"同じ名前のワークスペースがすでに存在します。置き換えると、現在の内容は上書きされます。","replaceWorkspaceModal.replace":"置き換える","closePlatform":"プラットフォームを閉じる","closePlatform.workspace":"{{workspace}}プラットフォームを閉じる","closePlatform.warning":"プラットフォームを閉じると、実行中のワークスペース、アプリ、プロセスがすべて閉じます。","back":"戻る","forward":"進む","reload":"リロード","green":"グリーン","purple":"パープル","orange":"オレンジ","red":"レッド","pink":"ピンク","yellow":"イエロー","theme.light":"ライト","theme.dark":"ダーク","theme.system":"OSの設定と同期","toolbar.hideTabs":"タブを非表示","toolbar.showTabs":"タブを表示","toolbar.lock":"ロック","toolbar.unlock":"ロック解除","toolbar.colorLinking":"カラーリンク","toolbar.changeLayout":"レイアウトを変更","toolbar.saveMenu":"メニューを保存","toolbar.maximizeWindow":"ウィンドウを最大化する","toolbar.restoreWindow":"ウィンドウを復元","toolbar.minimizeWindow":"ウィンドウを最小化する","changeLayout.fullWidth":"全幅","changeLayout.columns":"列","changeLayout.Rows":"行","changeLayout.Grid":"グリッド","successIndicator.workspaceSwitched":"ワークスペースが切り替わりました","successIndicator.hidden":"タブが非表示になっています","successIndicator.shown":"タブが表示されています","successIndicator.locked":"ページがロックされています","successIndicator.unlocked":"ページのロックが解除されています","successIndicator.workspaceSaved":"ワークスペースが保存されました","successIndicator.workspaceSavedAs":"ワークスペースが{{workspace}}として保存されました","successIndicator.workspaceRenamed":"ワークスペース名が変更されました","successIndicator.pageSaved":"ページが保存されました","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. JP","successIndicator.pageCopySaved":"ページが{{title}}として保存されました","successIndicator.pageRenamed":"ページ名が変更されました","successIndicator.contextGroupApplied":"コンテキストグループが適用されました","successIndicator.namedContextGroupApplied":"{{colorName}}コンテキストグループが適用されました","successIndicator.viewRemoved":"コンテキストグループからビューが削除されました","successIndicator.viewsRemoved":"コンテキストグループからビューが削除されました","successIndicator.layoutApplied":"{{layoutName}}レイアウトが適用されました","successIndicator.workspaceDeleted":"ワークスペースが削除されました","errorIndicator.pageSaveFailed":"ページを保存できませんでした","errorIndicator.workspaceSaveFailed":"ワークスペースを保存できませんでした","errorIndicator.failedToDuplicatePage":"ページを複製できませんでした","infoIndicator.colorLinkAttempt":"このタブをカラーリンクしようとしましたが、サイト/コンテンツのオーナーがまだこれを有効にしていません","global.cancel":"キャンセル","global.confirm":"確認","global.save":"保存","global.delete":"Delete JP","appResults.header":"Featured content JP","recentlyClosed.header":"Recently Closed JP","landingPage.subheader":"Apps and websites selected by an admin will show here JP","aria.openBrowser":"ブラウザーメニューを開く","aria.browserTabs":"ブラウザータブ","aria.viewTab":"{{title}}のタブを表示","aria.closePage":"{{title}}のページタブボタンを閉じる","aria.closeTab":"{{title}}タブを閉じる","aria.title":"タイトル","aria.closeContextGroup":"エスケープを使用して、コンテキストグループ選択ダイアログを閉じる","aria.colorLinking":"カラーリンクの表示/非表示","aria.applyColorLinking":"カラーリンクを適用するビューを選択してください","aria.assignColorLinkingCurrentView":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.assignColorLinkingCurrentViews":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.setColorLinkingActiveView":"アクティブビューを{{name}}コンテキストグループに設定","aria.setColorLinkingActiveViews":"アクティブビューを{{name}}コンテキストグループに設定","aria.escapeLayoutDialog":"エスケープを使用して、レイアウト変更選択ダイアログを閉じる","global.supertab":"Supertab JP","global.tab":"Tab JP","bookmarks.editBookmark":"Edit Bookmark JP","bookmarks.bookmarkAdded":"Bookmark added JP","bookmarks.done":"Done JP","bookmarks.remove":"Remove JP","bookmarks.bookmarksPanel":"Bookmarks Panel JP","bookmarks.bookmarks":"Bookmarks JP","bookmarks.allBookmarks":"All Bookmarks JP","bookmarks.favorites":"Favorites JP","bookmarks.searchBookmarks":"Search Bookmarks JP","bookmarks.clearSearchInput":"Clear Search Input JP","bookmarks.createFolder":"Create New Folder JP","bookmarks.exitFolder":"Exit Folder JP","bookmarks.newFolder":"New Folder JP","bookmarks.namedFolder":"{{name}} Folder JP","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings JP","bookmarks.folderSettings":"{{name}} Folder Settings JP","bookmarks.noResultsFound":"No results found JP","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search JP","bookmarks.nothingToShow":"Nothing to show yet JP","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder JP","bookmarks.resultsFoundIn":"Results found in {{name}} JP","bookmarks.resultsInOtherFolders":"Results found in other folders JP","bookmarks.allResultsFoundIn":"All results found in JP","bookmarks.editName":"Edit Name JP","bookmarks.move":"Move JP","bookmarks.bookmarkAddedTitle":"Bookmark Added JP","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" JP","bookmarks.bookmarkEditedTitle":"Bookmark Edited JP","enterpriseContextMenu.saveSupertab":"Save Supertab JP","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... JP","enterpriseContextMenu.duplicate":"Duplicate JP","enterpriseContextMenu.deleteSupertab":"Delete Supertab JP","enterpriseContextMenu.newTab":"New Tab JP","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As JP","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? JP","saveSupertabCount_other":"Save {{count}} Supertabs before closing? JP"},"enterpriseSaveModal.renameSupertab":"Rename JP","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. JP","enterpriseSaveModal.closeTab":"Close Tab JP","enterpriseSaveModal.closeSupertab":"Close Supertab JP","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. JP","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? JP","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. JP","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved JP","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. JP","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted JP","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. JP","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab JP","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab JP","enterpriseCommandBar.switchToSupertab":"Switch to Supertab JP","enterpriseCommandBar.goTo":"Go to {{type}} JP","enterpriseCommandBar.viewMore":"View More JP","sidePanel.aiCenter":"AI Center JP","sidePanel.newChat":"New Chat JP","sidePanel.toggleSidePanel":"Toggle Side Panel JP","sidePanel.closeSidePanel":"Close Side Panel JP","sidePanel.openAiCenter":"Open AI Center JP","contextMenu.quitEnterpriseBrowser":"Quit JP","dock.removeFavorite":"Remove JP"}'), st = JSON.parse('{"contextMenu.newWindow":"새 창","contextMenu.newPage":"새 페이지","contextMenu.restore":"마지막으로 저장한 변경 사항으로 복원","contextMenu.switchWorkspace":"작업 공간 전환","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"모양","contextMenu.saveWorkspace":"작업 공간 저장","contextMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장...","contextMenu.renameWorkspace":"작업 공간 이름 바꾸기","contextMenu.deleteWorkspace":"작업 공간 삭제","contextMenu.downloads":"다운로드","contextMenu.savePage":"페이지 저장","contextMenu.savePageAs":"다른 이름으로 페이지 저장...","contextMenu.print":"인쇄...","contextMenu.printScreen":"화면 인쇄","contextMenu.closeWindow":"창 닫기","contextMenu.openStorefront":"매장 열기","contextMenu.quitPlatform":"플랫폼 종료","contextMenu.newView":"새 뷰","contextMenu.openView":"기본 웹 브라우저로 뷰 열기","contextMenu.openViews":"기본 웹 브라우저로 뷰 열기","contextMenu.reload":"Reload KR","contextMenu.reloadView":"뷰 다시 로드","contextMenu.reloadViews":"뷰 다시 로드","contextMenu.duplicate":"Duplicate KR","contextMenu.duplicateView":"뷰 복제","contextMenu.duplicateViews":"뷰 복제","contextMenu.addView":"채널에 뷰 추가","contextMenu.addViews":"채널에 뷰 추가","contextMenu.removeView":"채널에서 뷰 제거","contextMenu.removeViews":"채널에서 뷰 제거","contextMenu.closeView":"뷰 닫기","contextMenu.closeViews":"뷰 닫기","contextMenu.closeTab":"Close Tab KR","contextMenu.duplicatePage":"페이지 복제","contextMenu.submenu.print":"인쇄","contextMenu.submenu.printAll":"모두 인쇄","saveMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장","saveMenu.savePageAs":"다른 이름으로 페이지 저장","saveModal.enterValue":"Please enter a value KR","saveModal.alreadyExists":"{{title}}이(가) 이미 존재합니다.","saveModal.pleaseEnterValidName":"유효한 이름을 입력하십시오.","saveModal.renamePage":"페이지 이름 바꾸기","saveModal.closePage":"페이지 닫기","saveModal.discardChanges":"변경 사항 폐기","saveModal.discardAll":"모두 폐기","saveModal.saveAll":"모두 저장","saveModal.savePagesCount":"닫기 전에 페이지({{count}}개)를 저장하시겠습니까?","defaultPageTitle":"Untitled Page KR","enterpriseDefaultPageTitle":"Untitled Supertab KR","addNewPage":"새 페이지 추가","addNewTab":"새 탭 추가","addNewView":"새 뷰","restoreModal":"마지막으로 저장한 변경 사항으로 복원하시겠습니까?","modal.discardWarning":"저장하지 않은 변경 사항은 모두 폐기됩니다","modal.discardPageWarning":"이 페이지의 저장하지 않은 변경 사항은 모두 손실됩니다.","modal.saveChangesPrompt":"닫기 전에 변경 사항을 저장하시겠습니까?","modal.pageClose":"페이지 닫기","switchWorkspaceModal":"{{workspace}}(으)로 전환하시겠습니까?","switchWorkspaceModal.warning":"저장하지 않은 변경 사항은 모두 폐기됩니다","deleteWorkspaceModal":"이 작업 공간을 영구적으로 삭제하시겠습니까?","replaceWorkspaceModal.warning":"{{workspace}}(이)라는 이름의 작업 공간이 이미 존재합니다. 교체하시겠습니까?","replaceWorkspaceModal.warning.body":"같은 이름의 작업 공간이 이미 존재합니다. 교체하면 현재 내용을 덮어쓰게 됩니다.","replaceWorkspaceModal.replace":"교체","closePlatform":"플랫폼 닫기","closePlatform.workspace":"{{workspace}} 플랫폼 닫기","closePlatform.warning":"플랫폼을 닫으면 실행 중인 모든 작업 공간, 앱 또는 프로세스가 닫힙니다.","back":"뒤로 가기","forward":"앞으로 가기","reload":"새로고침","green":"녹색","purple":"보라색","orange":"오렌지색","red":"빨간색","pink":"핑크색","yellow":"노란색","theme.light":"밝은","theme.dark":"어두운","theme.system":"OS 설정과 동기화","toolbar.hideTabs":"탭 숨기기","toolbar.showTabs":"탭 표시","toolbar.lock":"잠금","toolbar.unlock":"잠금 해제","toolbar.colorLinking":"색상 연결","toolbar.changeLayout":"레이아웃 변경","toolbar.saveMenu":"저장 메뉴","toolbar.maximizeWindow":"창 최대화","toolbar.restoreWindow":"창 복원","toolbar.minimizeWindow":"창 최소화","changeLayout.fullWidth":"전체 너비","changeLayout.columns":"열","changeLayout.Rows":"행","changeLayout.Grid":"그리드","successIndicator.workspaceSwitched":"작업 공간 전환","successIndicator.hidden":"탭 숨김","successIndicator.shown":"탭 표시","successIndicator.locked":"페이지 잠금","successIndicator.unlocked":"페이지 잠금 해제됨","successIndicator.workspaceSaved":"작업 공간 저장됨","successIndicator.workspaceSavedAs":"작업 공간이 {{workspace}}(으)로 저장됨","successIndicator.workspaceRenamed":"작업 공간 이름 변경됨","successIndicator.pageSaved":"페이지 저장됨","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. KR","successIndicator.pageCopySaved":"페이지가 {{title}}(으)로 저장됨","successIndicator.pageRenamed":"페이지 이름 변경됨","successIndicator.contextGroupApplied":"컨텍스트 그룹 적용됨","successIndicator.namedContextGroupApplied":"{{colorName}} 컨텍스트 그룹 적용됨","successIndicator.viewRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.viewsRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.layoutApplied":"{{layoutName}} 레이아웃 적용됨","successIndicator.workspaceDeleted":"작업 공간 삭제됨","errorIndicator.pageSaveFailed":"페이지 저장 실패","errorIndicator.workspaceSaveFailed":"작업 공간 저장 실패","errorIndicator.failedToDuplicatePage":"페이지 복제 실패","infoIndicator.colorLinkAttempt":"이 탭의 색상 링크를 시도했지만 사이트/콘텐츠 소유자가 아직 활성화하지 않았습니다.","global.cancel":"취소","global.confirm":"확인","global.save":"저장","global.delete":"Delete KR","appResults.header":"Featured Content KR","recentlyClosed.header":"Recently Closed KR","landingPage.subheader":"Apps and websites selected by an admin will show here KR","aria.openBrowser":"브라우저 메뉴 열기","aria.browserTabs":"브라우저 탭","aria.viewTab":"{{title}}의 뷰 탭","aria.closePage":"{{title}}의 페이지 닫기 탭","aria.closeTab":"탭 {{title}} 닫기","aria.title":"제목","aria.closeContextGroup":"이스케이프를 사용하여 컨텍스트 그룹 선택 대화상자 닫기","aria.colorLinking":"색상 연결 표시 또는 숨기기","aria.applyColorLinking":"색상 연결을 적용하려면 뷰를 선택하십시오.","aria.assignColorLinkingCurrentView":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.assignColorLinkingCurrentViews":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.setColorLinkingActiveView":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.setColorLinkingActiveViews":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.escapeLayoutDialog":"이스케이프를 사용하여 레이아웃 변경 대화상자 닫기","global.supertab":"Supertab KR","global.tab":"Tab KR","bookmarks.editBookmark":"Edit Bookmark KR","bookmarks.bookmarkAdded":"Bookmark added KR","bookmarks.done":"Done KR","bookmarks.remove":"Remove KR","bookmarks.bookmarksPanel":"Bookmarks Panel KR","bookmarks.bookmarks":"Bookmarks KR","bookmarks.allBookmarks":"All Bookmarks KR","bookmarks.favorites":"Favorites KR","bookmarks.searchBookmarks":"Search Bookmarks KR","bookmarks.clearSearchInput":"Clear Search Input KR","bookmarks.createFolder":"Create New Folder KR","bookmarks.exitFolder":"Exit Folder KR","bookmarks.newFolder":"New Folder KR","bookmarks.namedFolder":"{{name}} Folder KR","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings KR","bookmarks.folderSettings":"{{name}} Folder Settings KR","bookmarks.noResultsFound":"No results found KR","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search KR","bookmarks.nothingToShow":"Nothing to show yet KR","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder KR","bookmarks.resultsFoundIn":"Results found in {{name}} KR","bookmarks.resultsInOtherFolders":"Results found in other folders KR","bookmarks.allResultsFoundIn":"All results found in KR","bookmarks.editName":"Edit Name KR","bookmarks.move":"Move KR","bookmarks.bookmarkAddedTitle":"Bookmark Added KR","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" KR","bookmarks.bookmarkEditedTitle":"Bookmark Edited KR","enterpriseContextMenu.saveSupertab":"Save Supertab KR","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... KR","enterpriseContextMenu.duplicate":"Duplicate KR","enterpriseContextMenu.deleteSupertab":"Delete Supertab KR","enterpriseContextMenu.newTab":"New Tab KR","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As KR","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? KR","saveSupertabCount_other":"Save {{count}} Supertabs before closing? KR"},"enterpriseSaveModal.renameSupertab":"Rename KR","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. KR","enterpriseSaveModal.closeTab":"Close Tab KR","enterpriseSaveModal.closeSupertab":"Close Supertab KR","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. KR","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? KR","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. KR","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved KR","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. KR","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted KR","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. KR","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab KR","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab KR","enterpriseCommandBar.switchToSupertab":"Switch to Supertab KR","enterpriseCommandBar.goTo":"Go to {{type}} KR","enterpriseCommandBar.viewMore":"View More KR","sidePanel.aiCenter":"AI Center KR","sidePanel.newChat":"New Chat KR","sidePanel.toggleSidePanel":"Toggle Side Panel KR","sidePanel.closeSidePanel":"Close Side Panel KR","sidePanel.openAiCenter":"Open AI Center KR","contextMenu.quitEnterpriseBrowser":"Quit KR","dock.removeFavorite":"Remove KR"}'), ht = JSON.parse('{"contextMenu.newWindow":"Новое окно","contextMenu.newPage":"Новая страница","contextMenu.restore":"Восстановить последние сохраненные изменения","contextMenu.switchWorkspace":"Переключить рабочую область","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Внешний вид","contextMenu.saveWorkspace":"Сохранить рабочую область","contextMenu.saveWorkspaceAs":"Сохранить рабочую область как...","contextMenu.renameWorkspace":"Переименовать рабочую область","contextMenu.deleteWorkspace":"Удалить рабочую область","contextMenu.downloads":"Загрузки","contextMenu.savePage":"Сохранить страницу","contextMenu.savePageAs":"Сохранить страницу как...","contextMenu.print":"Печать...","contextMenu.printScreen":"Распечатать экран","contextMenu.closeWindow":"Закрыть окно","contextMenu.openStorefront":"Открыть Storefront","contextMenu.quitPlatform":"Выйти из платформы","contextMenu.newView":"Новое представление","contextMenu.openView":"Открыть представление с помощью веб-браузера по умолчанию","contextMenu.openViews":"Открыть представления с помощью веб-браузера по умолчанию","contextMenu.reload":"Reload RU","contextMenu.reloadView":"Перезагрузить представление","contextMenu.reloadViews":"Перезагрузить представления","contextMenu.duplicate":"Duplicate RU","contextMenu.duplicateView":"Дублировать представление","contextMenu.duplicateViews":"Дублировать представления","contextMenu.addView":"Добавить представление на канал","contextMenu.addViews":"Добавить представления на канал","contextMenu.removeView":"Удалить представление из канала","contextMenu.removeViews":"Удалить представления из канала","contextMenu.closeView":"Закрыть представление","contextMenu.closeViews":"Закрыть представления","contextMenu.closeTab":"Close Tab RU","contextMenu.duplicatePage":"Дублировать страницу","contextMenu.submenu.print":"Печатать","contextMenu.submenu.printAll":"Печатать все","saveMenu.saveWorkspaceAs":"Сохранить рабочую область как","saveMenu.savePageAs":"Сохранить страницу как","saveModal.enterValue":"Please enter a value RU","saveModal.alreadyExists":"{{title}} уже существует.","saveModal.pleaseEnterValidName":"Введите подходящее имя","saveModal.renamePage":"Переименовать страницу","saveModal.closePage":"Закрыть страницу","saveModal.discardChanges":"Отменить изменения","saveModal.discardAll":"Отменить все","saveModal.saveAll":"Сохранить все","saveModal.savePagesCount":"Сохранить ({{count}}) страниц перед закрытием?","defaultPageTitle":"Untitled Page RU","enterpriseDefaultPageTitle":"Untitled Supertab RU","addNewPage":"Добавить новую страницу","addNewTab":"Добавить новую вкладку","addNewView":"Новое представление","restoreModal":"Вы уверены, что хотите восстановить последние сохраненные изменения?","modal.discardWarning":"Все несохраненные изменения будут отменены","modal.discardPageWarning":"Все несохраненные изменения на этой странице будут потеряны.","modal.saveChangesPrompt":"Сохранить изменения перед закрытием?","modal.pageClose":"Закрыть страницу","switchWorkspaceModal":"Вы уверены, что хотите перейти в {{workspace}}?","switchWorkspaceModal.warning":"Все несохраненные изменения будут отменены","deleteWorkspaceModal":"Вы уверены, что хотите навсегда удалить эту рабочую область?","replaceWorkspaceModal.warning":"Рабочая область с именем {{workspace}} уже существует. Вы хотите заменить ее?","replaceWorkspaceModal.warning.body":"Рабочая область с таким же именем уже существует. При ее замене текущее содержимое будет перезаписано.","replaceWorkspaceModal.replace":"Заменить","closePlatform":"Закрыть платформу","closePlatform.workspace":"Закрыть платформу {{workspace}}","closePlatform.warning":"Закрытие платформы приведет к закрытию всех рабочих областей, приложений и запущенных процессов.","back":"Назад","forward":"Вперед","reload":"Перезагрузить ","green":"Зеленый","purple":"Фиолетовый","orange":"Оранжевый","red":"Красный","pink":"Розовый","yellow":"Желтый","theme.light":"Светлый","theme.dark":"Темный","theme.system":"Синхронизировать с настройками ОС","toolbar.hideTabs":"Скрыть вкладки","toolbar.showTabs":"Показать вкладки","toolbar.lock":"Заблокировать","toolbar.unlock":"Разблокировать","toolbar.colorLinking":"Привязка к цвету","toolbar.changeLayout":"Изменить макет","toolbar.saveMenu":"Меню сохранения","toolbar.maximizeWindow":"Увеличить окно","toolbar.restoreWindow":"Восстановить окно","toolbar.minimizeWindow":"Свернуть окно","changeLayout.fullWidth":"Полная ширина","changeLayout.columns":"Столбцы","changeLayout.Rows":"Строки","changeLayout.Grid":"Сетка","successIndicator.workspaceSwitched":"Рабочая область переключена","successIndicator.hidden":"Вкладки скрыты","successIndicator.shown":"Вкладки показаны","successIndicator.locked":"Страница заблокирована","successIndicator.unlocked":"Страница разблокирована","successIndicator.workspaceSaved":"Рабочая область сохранена","successIndicator.workspaceSavedAs":"Рабочая область сохранена как {{workspace}}","successIndicator.workspaceRenamed":"Рабочая область переименована","successIndicator.pageSaved":"Страница сохранена","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. RU","successIndicator.pageCopySaved":"Страница сохранена как {{title}}","successIndicator.pageRenamed":"Страница переименована","successIndicator.contextGroupApplied":"Контекстная группа применена","successIndicator.namedContextGroupApplied":"Контекстная группа {{colorName}} применена","successIndicator.viewRemoved":"Представление удалено из контекстной группы","successIndicator.viewsRemoved":"Представления удалены из контекстной группы","successIndicator.layoutApplied":"Макет {{layoutName}} применен","successIndicator.workspaceDeleted":"Рабочая область удалена","errorIndicator.pageSaveFailed":"Не удалось сохранить страницу","errorIndicator.workspaceSaveFailed":"Не удалось сохранить рабочую область","errorIndicator.failedToDuplicatePage":"Не удалось продублировать страницу","infoIndicator.colorLinkAttempt":"Мы попытались привязать цвет к этой вкладке, но владелец сайта/контента еще не включил эту возможность","global.cancel":"Отменить","global.confirm":"Подтвердить","global.save":"Сохранить","global.delete":"Delete RU","appResults.header":"Featured Content RU","recentlyClosed.header":"Recently Closed RU","landingPage.subheader":"Apps and websites selected by an admin will show here RU","aria.openBrowser":"Открыть меню браузера","aria.browserTabs":"Вкладки браузера","aria.viewTab":"Вкладка представления {{title}}","aria.closePage":"Кнопка «Закрыть» на вкладке для страницы {{title}}","aria.closeTab":"Закрыть вкладку {{title}}","aria.title":"Название","aria.closeContextGroup":"Чтобы закрыть диалог выбора контекстной группы, используйте escape","aria.colorLinking":"Показать или скрыть привязку к цвету","aria.applyColorLinking":"Выберите представление, чтобы применить привязку к цвету","aria.assignColorLinkingCurrentView":"Текущее представление, назначенное контекстной группе {{name}}","aria.assignColorLinkingCurrentViews":"Текущие представления, назначенные контекстной группе {{name}}","aria.setColorLinkingActiveView":"Установить активное представление в контекстную группу {{name}}","aria.setColorLinkingActiveViews":"Установить активные представления в контекстную группу {{name}}","aria.escapeLayoutDialog":"Чтобы закрыть диалог изменения макета, используйте escape","global.supertab":"Supertab RU","global.tab":"Tab RU","bookmarks.editBookmark":"Edit Bookmark RU","bookmarks.bookmarkAdded":"Bookmark added RU","bookmarks.done":"Done RU","bookmarks.remove":"Remove RU","bookmarks.bookmarksPanel":"Bookmarks Panel RU","bookmarks.bookmarks":"Bookmarks RU","bookmarks.allBookmarks":"All Bookmarks RU","bookmarks.favorites":"Favorites RU","bookmarks.searchBookmarks":"Search Bookmarks RU","bookmarks.clearSearchInput":"Clear Search Input RU","bookmarks.createFolder":"Create New Folder RU","bookmarks.exitFolder":"Exit Folder RU","bookmarks.newFolder":"New Folder RU","bookmarks.namedFolder":"{{name}} Folder RU","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings RU","bookmarks.folderSettings":"{{name}} Folder Settings RU","bookmarks.noResultsFound":"No results found RU","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search RU","bookmarks.nothingToShow":"Nothing to show yet RU","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder RU","bookmarks.resultsFoundIn":"Results found in {{name}} RU","bookmarks.resultsInOtherFolders":"Results found in other folders RU","bookmarks.allResultsFoundIn":"All results found in RU","bookmarks.editName":"Edit Name RU","bookmarks.move":"Move RU","bookmarks.bookmarkAddedTitle":"Bookmark Added RU","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" RU","bookmarks.bookmarkEditedTitle":"Bookmark Edited RU","enterpriseContextMenu.saveSupertab":"Save Supertab RU","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... RU","enterpriseContextMenu.duplicate":"Duplicate RU","enterpriseContextMenu.deleteSupertab":"Delete Supertab RU","enterpriseContextMenu.newTab":"New Tab RU","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As RU","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? RU","saveSupertabCount_other":"Save {{count}} Supertabs before closing? RU"},"enterpriseSaveModal.renameSupertab":"Rename RU","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. RU","enterpriseSaveModal.closeTab":"Close Tab RU","enterpriseSaveModal.closeSupertab":"Close Supertab RU","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. RU","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? RU","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. RU","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved RU","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.RU","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted RU","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. RU","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab RU","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab RU","enterpriseCommandBar.switchToSupertab":"Switch to Supertab RU","enterpriseCommandBar.goTo":"Go to {{type}} RU","enterpriseCommandBar.viewMore":"View More RU","sidePanel.aiCenter":"AI Center RU","sidePanel.newChat":"New Chat RU","sidePanel.toggleSidePanel":"Toggle Side Panel RU","sidePanel.closeSidePanel":"Close Side Panel RU","sidePanel.openAiCenter":"Open AI Center RU","contextMenu.quitEnterpriseBrowser":"Quit RU","dock.removeFavorite":"Remove RU"}'), Q = fe().t, nt = async (e) => await (await Et(e)).dispatch(Tt.GetPages), Dt = async (e) => (await Et(e.identity)).dispatch(Tt.UpdatePageForWindow, e);
    let rn, Wt = !1;
    const En = () => Wt, Da = () => rn || { enabled: !1 };
    async function di(e, n) {
      const r = !!n;
      let s = /* @__PURE__ */ new Set();
      if (r) {
        const { identity: c, pageId: w } = n, S = b().Browser.wrapSync(c), k = await S.getPage(w);
        k != null && k.panels && (s = new Set(k.panels.map(({ viewOptions: N }) => N.name)));
      }
      return e.map((c) => {
        const w = c.viewOptions.name;
        (w == null ? void 0 : w.startsWith(A)) && (!r || r && !s.has(w)) && delete c.viewOptions.name;
        const k = (N = c.viewOptions, N.name || (N.name = `${A}${Jt()}`), N);
        var N;
        return { ...c, viewOptions: { ...k, uuid: Re.uuid } };
      });
    }
    async function pi(e) {
      for (const n of e) n.panels && await fi(n.panels);
    }
    const sc = (e) => e !== null && typeof e == "object" && "message" in e && typeof e.message == "string" && /ERR_([A-Z]+_*)+/.test(e.message);
    async function fi(e) {
      const n = e.map((r) => fin.Platform.getCurrentSync().createView(r.viewOptions, fin.me.identity).catch((s) => {
        if (!sc(s)) throw s;
        console.error(s);
      }));
      return await Promise.all(n);
    }
    const hi = (e, n) => !n.find((r) => r === e), gi = (e, n) => `${e} (${n})`, Po = (e, n) => {
      if (hi(e, n)) return e;
      let r = 1;
      const s = e.replace(/ *\(\d+\)$/, "");
      for (; !hi(gi(s, r), n); ) r += 1;
      return gi(s, r);
    }, Tr = async () => {
      const e = await en();
      return (await Promise.all(e.map(async (n) => {
        var r;
        try {
          return nt(n.identity);
        } catch {
          return JSON.stringify(n.identity), ((r = (await n.getOptions()).workspacePlatform) == null ? void 0 : r.pages) || [];
        }
      }))).reduce((n, r) => n.concat(r), []);
    }, cc = async () => (await me(Re)).dispatch(pe.GetSavedPages, void 0), mi = async (e) => (await me(Re)).dispatch(pe.GetSavedPage, e), wi = async (e, n) => {
      const r = await (async (s) => (await Tr()).find((c) => c.pageId === s))(e);
      return !r || r.title === n.title && e === n.pageId || await Dt({ identity: r.parentIdentity, pageId: e, page: { pageId: n.pageId, title: n.title } }), r;
    }, yi = async ({ page: e }) => {
      await wi(e.pageId, e), await (async (n) => (await me(Re)).dispatch(pe.CreateSavedPage, n))({ page: e });
    }, uc = async (e) => {
      await mi(e) && await (async (n) => (await me(Re)).dispatch(pe.DeleteSavedPage, n))(e);
    }, bi = async ({ pageId: e, page: n }) => (await wi(e, n), await (async (r) => (await me(Re)).dispatch(pe.UpdateSavedPage, r))({ pageId: e, page: n })), vi = async (e) => await mi(e.pageId) ? bi({ pageId: e.pageId, page: e }) : yi({ page: e }), lc = async (e) => {
      await (async (n) => (await Et(n.identity)).dispatch(Tt.AttachPagesToWindow, n))(e);
    }, dc = async (e) => {
      const n = { ...e.page, panels: e.page.panels && await di(e.page.panels, e) };
      n.panels && await fi(n.panels), await Dt({ ...e, page: n });
    }, pc = async (e) => {
      await (async (n) => (await Et(n.identity)).dispatch(Tt.DetachPagesFromWindow, n))(e);
    }, fc = async (e) => {
      await (async (n) => (await Et(n.identity)).dispatch(Tt.SetActivePageForWindow, n))(e);
    }, ki = (e) => nt(e), hc = async ({ identity: e, pageId: n }) => (await ki(e)).find((r) => r.pageId === n), gc = async (e) => {
      await (async (n) => (await Et(n.identity)).dispatch(Tt.ReorderPagesForWindow, n))(e);
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
        const n = En() ? Q("enterpriseDefaultPageTitle") : Q("defaultPageTitle"), r = e ?? n, [s, c] = await Promise.all([cc(), Tr()]), w = [...s, ...c].map(({ title: S }) => S);
        return Po(r, w);
      } finally {
        Si.unlock();
      }
    }
    async function mc({ page: e }) {
      return { shouldShowModal: !(!e || !e.hasUnsavedChanges) };
    }
    async function wc({ page: e, identity: n }) {
      if ((await fin.Application.getCurrentSync().getInfo()).initialOptions.enableBeforeUnload) {
        const s = await fin.Application.getCurrentSync().getViews(), c = K(e.layout.content).filter((S) => S.name && s.some((k) => k.identity.name === S.name)).map((S) => fin.View.wrapSync({ name: S.name, uuid: n.uuid })), w = await this.checkViewsForPreventUnload(c);
        if (w.viewsPreventingUnload.length > 0 && (await this.getUserDecisionForBeforeUnload({ ...w, windowId: n, windowShouldClose: !1, closeType: "page" })).viewsToClose.length !== c.length)
          return e.pageId, { shouldPageClose: !1 };
      }
      return { shouldPageClose: !0 };
    }
    async function yc({ pages: e, identity: n }) {
      const r = await Promise.all(e.map((w) => this.shouldPageClose({ page: w, closeType: "window", identity: n }))), { pagesPreventingClose: s, pagesNotPreventingClose: c } = e.reduce((w, S, k) => r[k].shouldPageClose ? { pagesPreventingClose: w.pagesPreventingClose, pagesNotPreventingClose: [...w.pagesNotPreventingClose, S] } : { pagesNotPreventingClose: w.pagesNotPreventingClose, pagesPreventingClose: [...w.pagesPreventingClose, S] }, { pagesPreventingClose: [], pagesNotPreventingClose: [] });
      return this.handlePagesAndWindowClose({ pagesNotPreventingClose: c, pagesPreventingClose: s, identity: n });
    }
    async function bc({ pagesPreventingClose: e, pagesNotPreventingClose: n, identity: r }) {
      return { shouldWindowClose: e.length === 0 };
    }
    async function vc({ page: e }) {
      return Ga(e);
    }
    async function kc(e) {
      return { hasUnsavedChanges: !0 };
    }
    const Sc = async () => {
      const e = b(), n = (await en()).map((r) => e.Browser.wrapSync(r.identity));
      await Promise.all(n.map(async (r) => {
        const s = await r.getPages();
        await Promise.all(s.map(async (c) => {
          c.title, await r.updatePage({ pageId: c.pageId, page: { hasUnsavedChanges: !1 } }), c.pageId, c.title, await vi({ ...c, hasUnsavedChanges: !1 });
        }));
      }));
    }, xo = /* @__PURE__ */ new Map(), Pc = () => xo, xi = (e) => xo.delete(e);
    let Co = !1;
    const xc = () => {
      Co || (Co = !0, fin.Window.wrapSync($e).once("closed", () => {
        Co = !1, (async (e, n) => {
          await Hr($r(e), { source: "Store", ...n });
        })(fin.me.identity, { type: "Navigation", action: "Close Store", skipValueHashing: !0 });
      }));
    };
    let Oa, Ci, Mo;
    const Mi = async () => (Mo === void 0 && (Mo = !!(await Ae()).disableOpenFinAnalytics), Mo);
    async function Cc(e) {
      e.forEach((r) => {
        var s, c;
        r.type === "Page" ? r.action === "Open Page" ? (s = r.data.uuid, c = r, xo.set(s, c)) : r.action === "Close Page" && xi(r.data.uuid) : r.source === "Store" && r.action !== "Close" && xc();
      }), await (async (r) => {
        Oa != null && Oa.sendToOpenFin && (await Mi() || r.forEach(async (s) => {
          const c = ea({}, s);
          c.entityId && (c.entityId.uuid = await Aa(c.entityId.uuid), c.entityId.name = await Aa(c.entityId.name)), !s.skipValueHashing && "value" in c && (c.value = await Aa(c.value)), Ci(c);
        }));
      })(e);
      const n = e.map(({ skipValueHashing: r, ...s }) => s);
      this.handleAnalytics(n);
    }
    const Mc = async (e) => {
      Oa = e, Oa != null && Oa.sendToOpenFin && !await Mi() && (() => {
        const r = rt, s = r + G.Analytics, c = document.createElement("IFRAME");
        c.setAttribute("src", s), c.setAttribute("style", "width: 0px !important"), c.setAttribute("style", "height: 0px !important"), c.setAttribute("style", "display: none !important"), document.body.appendChild(c), Ci = async (w) => {
          c.contentWindow.postMessage(w, r);
        };
      })();
      const n = fin.Application.getCurrentSync();
      n.addListener("view-created", async (r) => {
        var s;
        Qt({ type: "View", action: "Open View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid, url: await (s = r.viewIdentity, fin.View.wrapSync(s).getInfo().then((c) => c.url)) } });
      }), n.addListener("view-destroyed", async (r) => {
        Qt({ type: "View", action: "Close View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid } });
      }), n.addListener("window-closed", (r) => {
        r.name.startsWith(C.BrowserMenu) || (Qt({ type: "Window", action: "Close Window", value: r.name, data: { uuid: r.uuid } }), (async () => {
          const s = Pc(), c = await Tr();
          if (c.length === s.size) return;
          const w = c.reduce((S, k) => S.set(k.pageId, 1), /* @__PURE__ */ new Map());
          for (const [S, k] of s) w.has(S) || (k.action = "Close Page", Qt(k), xi(S));
        })());
      });
    }, Ic = Kt({ alwaysOnTop: !0, autoShow: !1, frame: !1, resizable: !1, showTaskbarIcon: !1 }), Ac = /* @__PURE__ */ function(e = Ic) {
      const n = /* @__PURE__ */ new Map();
      return async (r, s, c, w, S) => {
        if (n.has(r)) {
          const { currentUrl: X, currentName: Y } = n.get(r);
          if (X === s) return;
          await fin.Window.wrapSync({ uuid: fin.me.uuid, name: Y }).close();
        }
        const k = `${C.BrowserIndicator}-${Date.now()}${Math.random()}`;
        n.set(r, { currentUrl: s, currentName: k });
        const N = `New ${w} indicator: ${c} ${S}`, U = await fin.Platform.getCurrentSync().createWindow({ ...e, name: k, url: s });
        ((X, Y) => {
          const oe = document.createElement("div");
          oe.setAttribute("role", "alert"), oe.setAttribute("aria-live", "polite"), ((ue) => {
            ue.style.position = "absolute", ue.style.width = "1px", ue.style.height = "1px", ue.style.padding = "0", ue.style.margin = "-1px", ue.style.overflow = "hidden", ue.style.whiteSpace = "nowrap", ue.style.border = "0";
          })(oe), document.body.appendChild(oe), setTimeout(() => {
            oe.innerHTML = X;
          }, 300), setTimeout(() => {
            document.body.removeChild(oe);
          }, 1e3);
        })(N), U.once("closed", () => {
          n.delete(r);
        });
      };
    }();
    async function Io(e) {
      const { parentBrowserName: n } = e;
      return n && n.includes(C.BrowserWindow) && fin.me.name !== n ? (await Et({ uuid: fin.me.uuid, name: n })).dispatch(Tt.ShowBrowserIndicator, e) : async function(r) {
        const { type: s, message: c, parentBrowserName: w, secondaryMessage: S, icon: k, isEnterprise: N, positioning: U } = r, X = new URLSearchParams();
        if (X.append("type", s), X.append("message", c), X.append("parentName", w || ""), X.append("secondaryMessage", S || ""), X.append("icon", k || ""), X.append("isEnterprise", `${N}` || ""), U === fa.RelativeToMonitor && X.append("positioning", fa.RelativeToMonitor), w) {
          const ue = Me(w ? { uuid: Ve, name: w } : void 0), Pe = `${(Y = await ue.getBounds()).top},${Y.left},${Y.height},${Y.width},${Y.bottom},${Y.right},${Y.content.top},${Y.content.left},${Y.content.height},${Y.content.width}`;
          X.append("parentBounds", Pe);
        }
        var Y;
        const oe = `${(N ? await Gt() : await sn()) + G.BrowserIndicator}#${X.toString()}`;
        return Ac("browser" + w, oe, c, s, S);
      }(e);
    }
    async function Qr(e) {
      const n = e.isEnterprise ?? await At(e.parentBrowserName ? { uuid: Ve, name: e.parentBrowserName } : void 0);
      return Io({ type: "success", message: e.message, parentBrowserName: e.parentBrowserName, secondaryMessage: e.secondaryMessage, icon: e.icon, isEnterprise: n, positioning: e.positioning });
    }
    const Wa = async (e = Re) => {
      const { workspacePlatform: n } = await Me(e).getOptions(), r = n == null ? void 0 : n.newPageUrl, s = n == null ? void 0 : n.newTabUrl;
      return { newPageUrl: r, newTabUrl: s };
    }, Xr = async (e = Re) => {
      const n = await At(e) || En(), r = n ? null : await b().Browser.getUniquePageTitle();
      let s;
      if (e && await qe(e)) s = await (async (w, S = Re) => {
        const { newPageUrl: k } = await Wa(S);
        if (!k) throw new Error("Trying to create a new page without a newPageUrl set");
        return H(w, k, S);
      })(r, e);
      else if (n) {
        const w = await je();
        s = await H(r, w);
      }
      n && (s.settings = s.settings ?? {}, s.dimensions = s.dimensions ?? {}, s.settings.hasHeaders = !1, s.settings.reorderEnabled = !0, s.dimensions.headerHeight = 0);
      const c = await bn(r, s);
      return n && (c.hasUnsavedChanges = !1), c;
    }, Ec = async (e, n, r) => {
      const { windowOptions: s, content: c } = await (async (k, N) => {
        const U = await At(N);
        return { title: "Switch Workspace", windowOptions: { url: await be(U, !1) + G.ResponseModal, name: C.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: N }, content: { title: Q("switchWorkspaceModal", { workspace: k }), body: Q("switchWorkspaceModal.warning"), buttons: { right: [{ label: Q("global.cancel"), type: "secondary", id: "Cancel" }, { label: Q("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(n, r ? void 0 : e), w = await qn(s, e, r), S = { ...s, top: w.top, left: w.left };
      return (await ua({ options: S, content: c })).data.actionName === "Confirm";
    }, Tc = async ({ workspaceTitle: e, windowIdentity: n }) => {
      const { windowOptions: r, content: s } = await (async ({ workspaceTitle: S, windowIdentity: k }) => {
        const N = await At(k);
        return { title: "Delete Workspace", windowOptions: { url: await be(N, !1) + G.ResponseModal, name: C.BrowserMenu, defaultHeight: 144, defaultWidth: 410, modalParentIdentity: k }, content: { title: Q("deleteWorkspaceModal"), body: `${S}`, buttons: { right: [{ label: Q("global.cancel"), type: "secondary", id: "Cancel" }, { label: Q("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })({ workspaceTitle: e, windowIdentity: n }), c = await qn(r, r.modalParentIdentity), w = { ...r, top: c.top, left: c.left };
      return (await ua({ options: w, content: s })).data.actionName === "Confirm";
    }, Ii = async (e, n, r) => {
      const { windowOptions: s, content: c } = await (async (k, N, U) => {
        const X = await At(k);
        return { title: "Platform Quit", windowOptions: { url: await be(X, !1) + G.ResponseModal, name: C.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: U ? void 0 : k }, content: { title: Q(N === "Platform" ? "closePlatform" : "closePlatform.workspace", { workspace: N }), body: Q("closePlatform.warning"), buttons: { right: [{ label: Q("global.cancel"), type: "secondary", id: "Cancel" }, { label: Q("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e, n, r), w = await qn(s, e, r), S = { ...s, top: w.top, left: w.left };
      return (await ua({ options: S, content: c })).data.actionName === "Confirm";
    }, _c = async (e) => {
      const { windowOptions: n, content: r } = await (async (w) => {
        const S = await At(w);
        return { title: "Restore Changes", windowOptions: { url: await be(S, !1) + G.ResponseModal, name: C.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: w }, content: { title: Q("restoreModal"), body: Q("modal.discardWarning"), buttons: { right: [{ label: Q("global.cancel"), type: "secondary", id: "Cancel" }, { label: Q("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e), s = await qn(n, n.modalParentIdentity), c = { ...n, top: s.top, left: s.left };
      return (await ua({ options: c, content: r })).data.actionName === "Confirm";
    }, Rc = async (e, n) => {
      const { windowOptions: r, content: s } = await (async (S, k) => {
        const N = await At(S);
        return { title: "Delete Page", windowOptions: { url: new URL(await be(N, !1) + G.ResponseModal).toString(), name: C.BrowserMenu, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: S }, content: { title: Q("enterpriseDeleteModal.deleteSupertab", { title: k }), body: Q("enterpriseDeleteModal.deleteSupertabWarning"), buttons: { right: [{ label: Q("global.cancel"), type: "secondary", id: "Cancel", variant: N ? "outline" : void 0 }, { label: Q("global.delete"), type: "primary", id: "Delete", variant: N ? "submit" : void 0 }] } } };
      })(e, n), c = await qn(r, r.modalParentIdentity), w = { ...r, top: c.top, left: c.left };
      return (await ua({ options: w, content: s })).data.actionName === "Delete";
    }, Dc = async ({ identity: e, title: n, description: r }) => {
      var N;
      const { windowOptions: s, content: c } = await (async (U, X, Y) => ({ title: "Update Version", windowOptions: { url: await Gt() + G.ResponseModal, name: C.UpdateVersionModal, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: U, preventBlur: !0, closeOnResponse: !0, includeInSnapshots: !1 }, content: { title: X, body: Y, buttons: { right: [{ label: "Snooze", type: "secondary", id: "snooze" }, { label: "Restart", type: "primary", id: "restart" }] } } }))(e, n, r), w = fin.Window.wrapSync({ uuid: e.uuid, name: `${s.name}--${(N = s.modalParentIdentity) == null ? void 0 : N.name}` });
      try {
        if (await (w == null ? void 0 : w.isShowing())) return;
      } catch {
      }
      const S = await qn(s, s.modalParentIdentity), k = { ...s, top: S.top, left: S.left };
      return (await ua({ options: k, content: c })).data;
    };
    async function Ai({ options: e, ...n }) {
      var w;
      if (!(e != null && e.skipPrompt || await Ec(e == null ? void 0 : e.promptContainerWindowIdentity, n.title, e == null ? void 0 : e.shouldCenterModalOnMonitor))) return !1;
      const s = !!(await fin.Application.getCurrentSync().getChildWindows()).find(({ identity: S }) => S.name === C.DockCompanion || S.name === Vt) || En() ? { closeExistingWindows: !1, closeSnapshotWindows: !0 } : { closeExistingWindows: ((w = e == null ? void 0 : e.applySnapshotOptions) == null ? void 0 : w.closeExistingWindows) ?? !0 };
      return await b().applySnapshot(n.snapshot, { ...(e == null ? void 0 : e.applySnapshotOptions) ?? {}, ...s }), Ao(n), Io({ type: "success", message: Q("successIndicator.workspaceSwitched"), positioning: fa.RelativeToMonitor }).catch(console.warn), !0;
    }
    async function Oc(e) {
      try {
        return await Ai(e);
      } catch (n) {
        return console.error("failed to apply the current workspace: ", n), !1;
      }
    }
    async function Ei(e) {
      try {
        const n = await async function() {
          const r = b(), s = await r.getCurrentWorkspace({ skipSnapshotUpdate: !0 });
          return (await r.Storage.getWorkspaces()).find((c) => c.workspaceId === s.workspaceId);
        }();
        return n ? e != null && e.skipPrompt || await _c(e == null ? void 0 : e.promptContainerWindowIdentity) ? (await Ai({ options: { skipPrompt: !0, applySnapshotOptions: e == null ? void 0 : e.applySnapshotOptions }, ...n }), "success") : "user-declined" : "not-saved-workspace";
      } catch (n) {
        throw console.error("failed to restore last saved workspace: ", n), n;
      }
    }
    function Ao(e) {
      if (typeof localStorage < "u") try {
        const n = JSON.stringify(e);
        it(kt.CurrentWorkspaceId, n);
      } catch (n) {
        console.error("failed to set the active workspace: ", n);
      }
    }
    async function Eo() {
      const e = b(), n = await e.getSnapshot();
      return { workspaceId: Jt(), title: await Fc(), metadata: { APIVersion: lt }, snapshot: n };
    }
    async function Wc(e) {
      if (typeof localStorage > "u") return Eo();
      const n = Pa(kt.CurrentWorkspaceId);
      if (!n) return Eo();
      const r = JSON.parse(n);
      if (e != null && e.skipSnapshotUpdate) return r;
      const s = b(), c = await s.getSnapshot();
      return { ...r, metadata: { APIVersion: lt }, snapshot: c };
    }
    const Bc = async () => (await me(Re)).dispatch(pe.GetSavedWorkspaces, void 0), Nc = async (e) => await (async (n) => (await me(Re)).dispatch(pe.GetSavedWorkspace, n))(e.workspaceId) ? (async (n) => (await me(Re)).dispatch(pe.UpdateSavedWorkspace, n))({ workspaceId: e.workspaceId, workspace: e }) : (async (n) => (await me(Re)).dispatch(pe.CreateSavedWorkspace, n))({ workspace: e });
    async function Fc(e = "Untitled Workspace") {
      const n = (await Bc()).map(({ title: r }) => r);
      return Po(e, n);
    }
    const Lc = (e) => ({ ...e, snapshot: { ...e.snapshot, windows: e.snapshot.windows.map((n) => {
      var r, s;
      return { ...n, workspacePlatform: { ...n.workspacePlatform, pages: (s = (r = n.workspacePlatform) == null ? void 0 : r.pages) == null ? void 0 : s.map((c) => ({ ...c, hasUnsavedChanges: !1 })) } };
    }) } }), Vc = async (e, n) => {
      await (n ?? b()).Storage.saveWorkspace(Lc(e)), await (async () => (await me(Re)).dispatch(pe.MarkUnsavedPagesAsSavedInternal, void 0))();
    }, Ti = async (e) => {
      const n = b();
      await (async ({ showModal: r, afterSuccessSave: s }) => {
        const c = b(), w = await c.getCurrentWorkspace(), S = await c.Storage.getWorkspacesMetadata(), k = w.workspaceId;
        S.some((N) => N.workspaceId === k) ? (await Vc(w, c), await c.setActiveWorkspace(w), await s()) : await r();
      })({ showModal: async () => {
        await n.Browser.wrapSync(e)._openSaveModal({ menuType: ut.SAVE_WORKSPACE_AS });
      }, afterSuccessSave: async () => {
        await Qr({ message: Q("successIndicator.workspaceSaved"), parentBrowserName: e.name });
      } });
    }, To = (e) => {
      b().Browser.wrapSync(e)._openSaveModal({ menuType: ut.SAVE_WORKSPACE_AS });
    }, _i = async (e) => {
      const n = b().Browser.wrapSync(e), { newPageUrl: r } = await Wa(), s = await Xr(e), c = r || void 0;
      await n._addDefaultPage({ identity: e, page: s, newPageUrl: c });
    }, _o = async (e, n) => {
      const r = b().Browser.wrapSync(e), s = await b().Storage.getPages(), c = (await r.getPages()).find((U) => n ? U.pageId === n : U.isActive), w = s.some((U) => c.pageId === U.pageId), S = await At(e);
      if (w) try {
        await b().Storage.savePage((N = c, { ...N, hasUnsavedChanges: void 0, parentIdentity: void 0, isActive: void 0, layout: E(N.layout) })), await r.updatePage({ pageId: c.pageId, page: { hasUnsavedChanges: !1 } }), Qr({ message: Q(S ? "enterpriseSuccessIndicator.supertabSaved" : "successIndicator.pageSaved"), parentBrowserName: e.name, secondaryMessage: Q(S ? "enterpriseSuccessIndicator.supertabHasBeenSaved" : "successIndicator.pageHasBeenSaved", { title: c.title }), isEnterprise: S });
      } catch {
        Io({ type: "error", message: (k = { message: Q("errorIndicator.pageSaveFailed"), parentBrowserName: c.parentIdentity.name }).message, parentBrowserName: k.parentBrowserName, icon: k.icon, isEnterprise: k.isEnterprise || !1, positioning: k.positioning });
      }
      else r._openSaveModal({ id: c.pageId, menuType: ut.SAVE_PAGE });
      var k, N;
    }, Ro = async (e, n) => {
      const r = b().Browser.wrapSync(e), s = (await r.getPages()).find((c) => n ? c.pageId === n : c.isActive);
      r._openSaveModal({ id: s.pageId, menuType: ut.SAVE_PAGE_AS }), Qt({ type: "Page Modal", action: "Select Save As", value: s.title, skipValueHashing: !0 });
    }, Uc = async (e, n) => {
      await (async ({ workspaceItemData: r, winIdentity: s, positioning: c }) => {
        const w = b(), S = (await w.Storage.getWorkspacesMetadata()).find((k) => k.workspaceId === r.workspaceId);
        S && await Tc({ workspaceTitle: S.title, windowIdentity: s }) && (await w.Storage.deleteWorkspace(r.workspaceId), await Qr({ message: Q("successIndicator.workspaceDeleted"), parentBrowserName: s == null ? void 0 : s.name, positioning: c }));
      })({ workspaceItemData: n, winIdentity: e });
    }, Kc = { title: "Downloads", pageId: "downloads-page-id", layout: { content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { name: "show-download-view", url: "chrome://downloads/" } }] }] } }, Ri = async (e) => {
      const n = Me(e), r = await n.getCurrentViews(), s = (await b().Browser.wrapSync(n.identity).getPages()).find((c) => c.isActive);
      try {
        const c = (await Promise.all(r.map(async (w) => ({ identity: w.identity, info: await fin.View.wrapSync(w.identity).getInfo() })))).find((w) => w.info.url === "chrome://downloads/");
        if (c) await fin.View.wrapSync(c.identity).focus();
        else {
          const w = b();
          if (s != null && s.isLocked) {
            const S = (await fin.Application.getCurrentSync().getChildWindows()).find((k) => k.identity.name === "show-download-window");
            return void (S ? await S.focus() : w.Browser.createWindow({ name: "show-download-window", workspacePlatform: { pages: [Kc] } }));
          }
          (await b().createView({ name: "show-download-view", url: "chrome://downloads/", target: e }, e)).focus();
        }
      } catch (c) {
        console.error("Couldn't open downloads view", c);
      }
    }, Do = async (e) => {
      const n = e.map((r) => fin.View.wrapSync(r).print());
      await Promise.all(n);
    }, Di = (e) => {
      const [n, r, s] = e.split(".").map((c) => c === "x" ? 0 : 1);
      return 100 * n + 10 * r + 1 * s;
    };
    class Oi extends Error {
    }
    const jc = async (e) => {
      try {
        const r = await async function() {
          const s = await Ae(), c = (s == null ? void 0 : s.translationOverridesUrl) ?? "https://workspace.openfin.co/workspace/assets/translation-override.json";
          if (c === "") throw new Oi("Empty string provided as url to translationOverridesUrl, overrides will not be fetched.");
          return await fetch(c).then((w) => w.json());
        }();
        (n = ((s) => {
          const c = lt.split(".");
          return Object.keys(s).filter((w) => {
            const S = w.split(".");
            if (S.length !== 3) return console.warn(`Encountered a translation override version string in an unsupported format: ${w}. Versions must be in A.B.C format where A, B, C are either integers or the wildcard symbol 'x'.`), !1;
            const [k, N, U] = S;
            return !(k !== c[0] && k !== "x" || N !== c[1] && N !== "x" || U !== c[2] && U !== "x");
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
      return fe().language;
    }
    const $c = async (e) => {
      Bi(e), ((n) => {
        fe().changeLanguage(n);
      })(e), await (async (n) => {
        const r = await en();
        return Promise.all(r.map(async (s) => {
          await (await Et(s.identity)).dispatch(Tt.SetSelectedLanguage, n);
        }));
      })(e);
    };
    function Hc() {
      if (!fe().options.resources) throw new Error("No language resources found");
      return { currentLanguage: Wi(), resources: fe().options.resources };
    }
    async function Gc(e = "en-US") {
      Bi(e), function(n = "en-US") {
        fe().use(le.initReactI18next).init({ lng: n, fallbackLng: "en-US", resources: { "en-US": { translation: xe }, "ja-JP": { translation: _e }, "zh-CN": { translation: de }, "ko-KR": { translation: st }, "ru-RU": { translation: ht }, "de-DE": { translation: he }, "zh-Hant": { translation: Ee } }, interpolation: { escapeValue: !1 } });
      }(e), await jc(fe());
    }
    function Bi(e) {
      if (!Qe.includes(e)) throw new Error(`The ISO language provided ${e} is not supported`);
    }
    const er = /* @__PURE__ */ new Map();
    let Oo = Date.now();
    function Ni() {
      const e = Date.now();
      return Oo = Math.max(e, Oo + 1), Oo;
    }
    async function zc() {
      const e = Array.from(er.values()).sort((n, r) => r.lastFocusedTime - n.lastFocusedTime);
      if (e.length > 0) return e[0].identity;
      try {
        const n = Pa(kt.LastFocusedBrowserWindow);
        if (!n) return;
        const r = JSON.parse(n);
        if (await dn(r)) return await Ba(r), r;
      } catch (n) {
        console.error("failed to get last focused browser window from localStorage:", n);
      }
    }
    async function Fi() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((n) => n.identity.name.startsWith(C.BrowserWindow));
    }
    async function qc() {
      const e = b(), n = fin.Window.wrapSync({ uuid: fin.me.uuid, name: C.DockCompanion }), r = await Mt(await n.getBounds()), s = await async function(w, S, k) {
        const N = await fin.System.getMonitorInfo(), U = (k == null ? void 0 : k.availableRect) ?? N.primaryMonitor.availableRect, X = { width: U.right - U.left, height: U.bottom - U.top }, Y = Math.min(w, X.height), oe = Math.min(S, X.width), ue = U.top + Math.floor((X.height - Y) / 2);
        return { height: Y, width: oe, left: U.left + Math.floor((X.width - oe) / 2), top: ue };
      }(600, 900, r), c = await Xr();
      return (await e.Browser.createWindow({ defaultHeight: 600, defaultWidth: 900, defaultLeft: s.left, defaultTop: s.top, workspacePlatform: { pages: [c] } })).identity;
    }
    async function Ba(e, n, r = !1) {
      if (!await qe(e)) return;
      const s = fin.Window.wrapSync(e), c = n ?? await s.isShowing(), w = er.get(e.name), S = { identity: e, lastFocusedTime: r ? Ni() : (w == null ? void 0 : w.lastFocusedTime) ?? Ni(), isVisible: c };
      er.set(e.name, S), r && function(k) {
        if (typeof localStorage < "u") try {
          const N = JSON.stringify(k);
          it(kt.LastFocusedBrowserWindow, N);
        } catch (N) {
          console.error("failed to save last focused browser window: ", N);
        }
      }(e);
    }
    async function Jc(e = fin.me.identity) {
      er.delete(e.name);
    }
    const Yc = ja()(async () => {
      const e = await fin.Platform.getCurrentSync().Application.getChildWindows();
      let n, r = !1;
      for (const s of e) if (s.identity.name === C.BrowserMenu || s.identity.name === C.BrowserSaveMenu ? n = s : await qe(s.identity) && (r = !0), r) break;
      !r && n && n.close();
    }, 100, { leading: !1, trailing: !0 });
    let Wo = {};
    const Zc = async ({ actionId: e, payload: n }) => {
      if (typeof Wo[e] != "function") throw new Error(`Cannot find a configured function for the action '${e}'`);
      return Wo[e](n);
    };
    let Bo;
    const Qc = () => `custom-context-menu-${b().identity.uuid}-${lt}`, Xc = () => `custom-bookmark-context-menu-${b().identity.uuid}-${lt}`, Li = async () => (Bo || (Bo = await fin.InterApplicationBus.Channel.connect(Qc())), Bo);
    var Vi, tr;
    (function(e) {
      e.Save = "Save", e.SaveAs = "SaveAs";
    })(Vi || (Vi = {})), function(e) {
      e.GlobalMenu = "global-menu", e.ContextMenu = "context-menu", e.RenameSupertab = "rename-supertab", e.AddEditBookmark = "add-edit-bookmark", e.DropdownMenu = "dropdown-menu", e.ZoomControls = "zoom-controls";
    }(tr || (tr = {}));
    const eo = "visited-sites", No = "removed-tab-stack";
    let Fo = null;
    function _r() {
      return !Fo && ot && Oe.isFin && (Fo = Cn("openfin-home-pages", "pages")), Fo;
    }
    let to = null;
    function Ui() {
      return !to && ot && Oe.isFin && (to = new Zn.Dexie(mn("openfin-enterprise-site-history")), to.version(0.1).stores({ [eo]: "id, url" })), to;
    }
    let no = null;
    function Ki() {
      return !no && ot && Oe.isFin && (no = new Zn.Dexie(mn("openfin-enterprise-tab-history")), no.version(0.1).stores({ [No]: "" })), no;
    }
    async function Lo(e) {
      const n = _r();
      if (!n) throw new Error("Unable to get page - IndexDB not supported");
      const r = await n.pages.get(e);
      if (r) return r.pageId = e.toString(), r.title = r.title || r.pageId, r;
    }
    async function eu(e) {
      const n = _r();
      if (!n) throw new Error("Unable to get page list - IndexDB not supported");
      const r = await n.pages.toCollection().keys(), s = (await Promise.all(r.map((c) => Lo(c.toString())))).filter((c) => !!c);
      return e ? s.filter((c) => zt(c.title, e)) : s;
    }
    async function ji({ page: e }) {
      const n = _r();
      if (!n) throw new Error("Unable to create page - IndexDB not supported");
      await n.pages.put(e, e.pageId);
    }
    async function $i(e) {
      const n = _r();
      if (!n) throw new Error("Unable to delete page - IndexDB not supported");
      await n.pages.delete(e);
    }
    async function tu({ pageId: e, page: n }) {
      if (!_r()) throw new Error("Unable to update page - IndexDB not supported");
      if (await Lo(e) === void 0) throw new Error("page not found");
      await ji({ page: n }), e !== n.pageId && await $i(e);
    }
    const nu = async (e) => {
      const n = Ki();
      if (!n) throw new Error("Unable to add removed tab - IndexDB not supported");
      const r = Date.now().toString(), s = { ...e, id: r };
      await n[No].put(s, r);
    };
    function au(e) {
      return e.type === "app" || e.type === "website";
    }
    const ru = async (e) => {
      const n = Ui();
      if (e.type === "website") {
        const r = e, s = r.url || "";
        let c = await n[eo].get(s);
        c && au(c) ? (c.icon = r.icon, c.title = r.title, c.type = r.type, c.visitCount = (c.visitCount || 0) + 1, c.url = r.url) : c = { ...r, id: s, visitCount: 1, accessTime: void 0 }, c.accessTime = Date.now(), await n[eo].put(c, s);
      }
    }, ou = async () => {
      const e = Ui();
      if (!e) throw new Error("Unable to get frequently visited sites - IndexDB not supported");
      const n = e[eo], r = await n.toCollection().toArray();
      return r.sort((s, c) => (c.visitCount || 0) - (s.visitCount || 0)), (r.length > 5 ? r.slice(0, 5) : r).map(({ id: s, ...c }) => c);
    }, Rr = async () => (await fin.System.getHostSpecs()).name.toLowerCase().includes("windows"), Hi = async ({ browserIdentity: e, url: n, shiftKey: r, activePage: s, pages: c }) => {
      const w = b().Browser.wrapSync(e), S = await H(n, n, e), k = { ...await bn(n, S), attachedPageType: "singleView", singleViewName: n }, N = c.findIndex((U) => U.pageId === s.pageId);
      await w._addPage(k, { index: N + 1 }), r && await w.setActivePage(k.pageId);
    }, iu = async (e) => {
      const { url: n } = e.bookmark, { sourceIdentity: r, sourceEvent: s } = e, c = await Rr(), w = b();
      let S = !1, k = r;
      if (!await qe(r)) {
        const Pe = await async function() {
          const Ne = Array.from(er.values());
          for (let pt = Ne.length - 1; pt >= 0; pt--) if (Ne[pt].isVisible) return Ne[pt].identity;
        }();
        if (!Pe) return await (async (Ne) => {
          const pt = b(), Ue = await H(Ne.url, Ne.url), ct = await bn(Ne.url, Ue);
          ft((await pt.Browser.createWindow({ workspacePlatform: { pages: [ct] } })).identity);
        })(e.bookmark);
        S = !0, k = Pe;
      }
      const N = w.Browser.wrapSync(k), U = await N.getPages(), X = (await N._getLayoutsWithSelectedViews()).find((Pe) => Pe.isActive);
      if (!X) throw Error(`Browser ${k} does not have any active layouts`);
      const Y = U.find((Pe) => Pe.isActive), oe = ee(Y.layout.content) === 1, ue = X.selectedViews[0];
      S ? await Hi({ browserIdentity: k, url: n, shiftKey: !0, activePage: Y, pages: U }) : oe ? await (async ({ isWindows: Pe, currentViewId: Ne, browserIdentity: pt, url: Ue, activePage: ct, pages: Ye, sourceEvent: Pt }) => {
        const { ctrlKey: pn, metaKey: Ke, shiftKey: _t } = Pt;
        (Pe ? pn : Ke) ? await Hi({ browserIdentity: pt, url: Ue, shiftKey: _t, activePage: ct, pages: Ye }) : await fin.View.wrapSync(Ne).navigate(Ue);
      })({ isWindows: c, currentViewId: ue, browserIdentity: k, url: n, activePage: Y, pages: U, sourceEvent: s }) : await (async ({ isWindows: Pe, currentViewId: Ne, browserIdentity: pt, url: Ue, activeLayout: ct, sourceEvent: Ye }) => {
        const { ctrlKey: Pt, metaKey: pn, shiftKey: Ke } = Ye;
        if (Pe ? Pt : pn) {
          const _t = fin.View.wrapSync(Ne), Ft = await _t.getCurrentStack(), fn = (await Ft.getViews()).findIndex((rr) => rr.name === Ne.name), ar = { url: Ue, browserIdentity: pt, title: Ue };
          await Ft.addView(ar, { index: fn + 1 });
        } else await fin.View.wrapSync(ct.selectedViews[0]).navigate(Ue);
      })({ isWindows: c, currentViewId: ue, browserIdentity: k, url: n, activeLayout: X, sourceEvent: s });
    };
    var Le;
    (function(e) {
      e.Label = "normal", e.Separator = "separator", e.Submenu = "submenu", e.Checkbox = "checkbox";
    })(Le || (Le = {}));
    let Vo = { locked: !1, x: -1, y: -1 };
    const su = async (e, n, r, s) => {
      if (!at) throw new Error("showEnterpriseContextMenu can only be used in a Here env. Avoid calling this method during pre-rendering.");
      if (!s && !fin.me.isWindow) throw new Error("showEnterpriseContextMenu can only be used in a Here window.");
      const { x: c, y: w, template: S } = e;
      if (((X, Y) => {
        const { x: oe, y: ue, locked: Pe } = Vo;
        return Pe && X === oe && Y === ue;
      })(c, w)) return new Promise((X, Y) => X({ data: void 0 }));
      Vo = { locked: !0, x: c, y: w };
      const k = await Li(), N = Jt(), U = new Promise((X, Y) => {
        k.register(`response-${N}`, (oe) => {
          Vo.locked = !1, k.remove(`response-${N}`), X(oe);
        });
      });
      return await k.dispatch("open", { parentIdentity: s.identity, responseIdentity: Re, requestId: N, type: n, anchorBehavior: r, x: c, y: w, payload: { template: S } }), U;
    }, Xt = { type: Le.Separator, data: void 0 }, cu = async () => ({ type: Le.Submenu, label: Q("contextMenu.print"), submenu: [{ type: Le.Label, label: Q("contextMenu.submenu.print"), data: { type: se.Print } }, { type: Le.Label, label: Q("contextMenu.submenu.printAll"), data: { type: se.PrintAll } }, Xt, { type: Le.Label, label: Q("contextMenu.printScreen"), data: { type: se.PrintScreen } }] }), Uo = () => ({ type: Le.Label, label: Q("contextMenu.closeWindow"), data: { type: Z.CloseWindow } }), Ko = (e) => ({ type: Le.Label, label: Q(e ? "contextMenu.quitEnterpriseBrowser" : "contextMenu.quitPlatform"), data: { type: Z.Quit } }), Gi = () => ({ type: Le.Label, label: Q("contextMenu.newWindow"), data: { type: Z.NewWindow } }), zi = (e) => ({ type: Le.Label, label: Q(e ? "enterpriseContextMenu.saveSupertab" : "contextMenu.savePage"), data: { type: Z.SavePage } }), qi = (e) => ({ type: Le.Label, label: Q(e ? "enterpriseContextMenu.saveSupertabAs" : "contextMenu.savePageAs"), data: { type: Z.SavePageAs } }), Ji = (e, n) => ({ type: Le.Label, label: Q(n ? "enterpriseContextMenu.newTab" : "contextMenu.newPage"), data: { type: Z.NewPage }, enabled: e }), Yi = () => ({ label: Q("contextMenu.switchWorkspace") }), Zi = () => ({ label: Q("contextMenu.deleteWorkspace") }), Qi = () => ({ label: Q("contextMenu.appearance") }), Xi = (e, n, r) => n.map((s) => {
      const c = s.workspaceId === e.workspaceId;
      return { label: s.title, type: Le.Checkbox, enabled: !c, checked: c, data: { type: r, workspaceId: s.workspaceId } };
    }), es = async () => {
      const e = await b().Theme.getSelectedScheme();
      return [{ label: Q("theme.light"), type: Le.Checkbox, checked: e === Ie.Light, data: { type: Z.Appearance, scheme: Ie.Light } }, { label: Q("theme.dark"), type: Le.Checkbox, checked: e === Ie.Dark, data: { type: Z.Appearance, scheme: Ie.Dark } }, { label: Q("theme.system"), type: Le.Checkbox, checked: e === Ie.System, data: { type: Z.Appearance, scheme: Ie.System } }];
    }, uu = async (e, n = []) => {
      const r = await Gn(), { newPageUrl: s } = await Wa(e), c = await (async (Ue) => {
        const ct = Me(Ue), { workspacePlatform: Ye } = await ct.getOptions();
        return Ye == null ? void 0 : Ye.disableMultiplePages;
      })(e), w = await (async (Ue) => {
        const ct = Me(Ue), { workspacePlatform: Ye } = await ct.getOptions();
        return Ye == null ? void 0 : Ye.isLocked;
      })(e), S = await At(e), k = [], N = n.length > 0;
      s && (k.push(Gi()), c || k.push(Ji(!w, S))), k.push(Xt);
      const U = b(), X = await U.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), Y = await U.Storage.getWorkspacesMetadata(), oe = Y.find((Ue) => Ue.workspaceId === X.workspaceId), ue = U.Browser.wrapSync(e), Pe = (await ue.getPages()).find((Ue) => Ue.isActive), Ne = !!Pe && await U.Storage.getPage(Pe.pageId);
      k.push({ type: Le.Label, label: Q("contextMenu.restore"), data: { type: Z.RestoreChanges }, enabled: !!oe }), k.push({ type: Le.Label, label: Q("contextMenu.saveWorkspace"), data: { type: Z.SaveWorkspace }, enabled: !!oe }), k.push({ type: Le.Label, label: Q("contextMenu.saveWorkspaceAs"), data: { type: Z.SaveWorkspaceAs } }), k.push({ type: Le.Label, label: Q("contextMenu.renameWorkspace"), data: { type: Z.RenameWorkspace }, enabled: !!oe }), Y.some((Ue) => Ue.workspaceId !== X.workspaceId) ? k.push({ label: Yi().label, submenu: Xi(X, Y, Z.SwitchWorkspace), data: void 0 }, { label: Zi().label, submenu: Xi(X, Y, Z.DeleteWorkspace), data: void 0 }) : k.push({ label: Yi().label, enabled: !1, data: void 0 }, { label: Zi().label, enabled: !1, data: void 0 }), k.push({ label: Q("contextMenu.downloads"), data: { type: Z.Downloads } }), k.push({ label: Qi().label, submenu: await es(), data: void 0 });
      const pt = { ...zi(S), enabled: !!Ne };
      return k.push(Xt, pt, qi(S), await (async (Ue) => {
        const ct = await Rr();
        return { label: Q("contextMenu.print"), submenu: [{ type: Le.Label, label: Q("contextMenu.submenu.print"), data: { type: Z.Print }, enabled: Ue }, { type: Le.Label, label: Q("contextMenu.submenu.printAll"), data: { type: Z.PrintAll } }, ...ct ? [Xt, { type: Le.Label, label: Q("contextMenu.printScreen"), data: { type: Z.PrintScreen } }] : []], data: void 0 };
      })(N)), r ? [...k, Uo(), Xt, { type: Le.Label, label: Q("contextMenu.openStorefront"), data: { type: Z.OpenStorefront } }, Xt, Ko()] : [...k, Xt, Uo(), Xt, Ko()];
    }, lu = async (e, n) => {
      const r = n.selectedViews[0], s = fin.View.wrapSync(r), c = await (async (w) => {
        const { newTabUrl: S } = await Wa(w);
        if (!S) throw new Error("Trying to create a new page without a newTabUrl set");
        return { url: S, target: w, title: "New Tab" };
      })(e);
      await b().createView(c, e, s.identity);
    }, du = async (e, n) => {
      const r = b().Browser.wrapSync(e), s = (await r.getPages()).find((S) => S.isActive), c = await fin.Window.wrapSync(e).getCurrentViews();
      if (n.length === c.length - (s.panels ?? []).length)
        return void (await Et(e)).dispatch(Tt.ClosePage, { pageId: s == null ? void 0 : s.pageId });
      const w = fin.Platform.getCurrentSync();
      n.forEach(async (S) => {
        const k = await fin.View.wrapSync(S).getParentLayout();
        await w.closeView(S);
        const { hasUnsavedChanges: N } = await (async (U) => (await Xe(Re)).dispatch(pe.HandlePageChanges, U))({ page: { ...s, layout: await k.getConfig() }, identity: e, eventDetails: { type: Ce.ViewRemoved, viewIdentity: S } });
        N && await r.updatePage({ pageId: s.pageId, page: { hasUnsavedChanges: !0 } });
      });
    }, pu = async (e, n) => {
      const r = await ((w) => Promise.all(w.map(async (S) => fin.View.wrapSync(S).getInfo())))(n), { newPageUrl: s, newTabUrl: c } = await Wa(e);
      r.forEach(async (w) => {
        w.url !== s && w.url !== c && await fin.System.openUrlWithBrowser(w.url);
      });
    }, fu = (e, n) => {
      n.forEach(async (r) => {
        const s = fin.View.wrapSync(r);
        await (async (c, w) => {
          const { url: S } = await w.getInfo(), k = { ...await w.getOptions(), url: S, target: c, name: void 0 };
          await b().createView(k, c, w.identity);
        })(e, s);
      });
    }, ts = async (e, n, r) => {
      const s = { newChannelId: n, selectedViews: r };
      (await Et(e)).dispatch(Tt.AddToChannel, s);
    }, ns = async (e, n) => {
      (await Et(e)).dispatch(Tt.RemoveFromChannel, n);
    }, hu = async (e, n) => {
      if (!e) return;
      const r = n.identity, s = fin.Window.wrapSync(r);
      switch (Qt({ type: "View Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e.type) {
        case se.Back:
          await (async (c) => {
            const w = c.map((S) => fin.View.wrapSync(S).navigateBack());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case se.Forward:
          await (async (c) => {
            const w = c.map((S) => fin.View.wrapSync(S).navigateForward());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case se.Print:
          await Do(n.selectedViews);
          break;
        case se.PrintAll:
          await s.print({ content: "views", includeSelf: !1 });
          break;
        case se.PrintScreen:
          await s.print({ content: "screenshot" });
          break;
        case se.CloseViews:
          await du(r, n.selectedViews);
          break;
        case se.OpenWithDefaultBrowser:
          await pu(r, n.selectedViews);
          break;
        case se.ReloadViews:
          n.selectedViews.forEach(async (c) => {
            await fin.View.wrapSync(c).reload();
          });
          break;
        case se.NewView:
          await lu(r, n);
          break;
        case se.DuplicateViews:
          fu(r, n.selectedViews);
          break;
        case se.AddToChannel:
          ts(r, e.option, n.selectedViews);
          break;
        case se.RemoveFromChannel:
          ns(r, n.selectedViews);
          break;
        case se.Custom:
          if (e.action) {
            const c = { callerType: mt.ViewTabContextMenu, windowIdentity: r, selectedViews: n.selectedViews, customData: e.action.customData };
            b()._invokeCustomAction(e.action.id, c);
          }
      }
    }, jo = /* @__PURE__ */ new Map([["blue", { name: "Blue", color: "#0091EB" }], ["indigo", { name: "Indigo", color: "#6450FF" }], ["pink", { name: "Pink", color: "#E878CF" }], ["teal", { name: "Teal", color: "#24D1D1" }], ["green", { name: "Green", color: "#00AF78" }], ["orange", { name: "Orange", color: "#FF7D37" }], ["red", { name: "Red", color: "#F94144" }], ["yellow", { name: "Yellow", color: "#F9C74F" }], ["gray", { name: "Gray", color: "#828788" }]]);
    function as() {
      return { type: Le.Label, label: Q("contextMenu.manageDesktopSignals"), data: { type: ne.ManageDesktopSignals } };
    }
    function rs(e) {
      const n = Array.from(jo.entries()), r = e.contextGroup;
      return { type: "widget", config: { type: "add-to-channel", channels: [...n.map(([s, c]) => ({ label: c.name, data: { type: ne.AddToChannel, option: s }, color: c.color, checked: r === s })), { label: "unlink", data: { type: ne.AddToChannel, option: "unlink" }, isNone: !0 }] }, label: "Link to Channel" };
    }
    let os = "Platform";
    const $o = async () => os, gu = async (e, n) => {
      var S;
      if (!e) return;
      const r = n.identity, s = await Et(r), c = b().Browser.wrapSync(r), w = fin.Window.wrapSync(r);
      if (Qt({ type: "Global Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0, data: { action: (S = e.action) == null ? void 0 : S.id } }), !(await At(r) && await (async (N, U) => {
        const X = U.identity, Y = b().Browser.wrapSync(X), oe = (await Y.getPages()).find((Ne) => Ne.isActive), ue = za({ ...X, layoutName: oe.layoutContainerKey }), Pe = U.selectedViews;
        switch (N == null ? void 0 : N.type) {
          case Se.Lock:
            await Y.updatePage({ pageId: oe.pageId, page: { isLocked: !oe.isLocked } });
            break;
          case Se.AddToChanel:
            N.option ? await ts(X, N.option, Pe) : N.option === null && await ns(X, Pe);
            break;
          case Se.ManageDesktopSignals:
            await Nt(X);
            break;
          case Z.NewWindow: {
            const Ne = await Xr(X);
            await b().Browser.createWindow({ workspacePlatform: { pages: [Ne], windowType: "enterprise" } });
            break;
          }
          case Se.Pin: {
            const { alwaysOnTop: Ne } = await Y.openfinWindow.getOptions();
            await Y.openfinWindow.updateOptions({ alwaysOnTop: !Ne });
            break;
          }
          case Se.ShowHideTabs:
            await ue.isShowingTabs() ? await ue.hide() : await ue.show();
            break;
          default:
            return !1;
        }
        return !0;
      })(e, n)))
        switch (e.type) {
          case Z.NewWindow: {
            const { newPageUrl: k } = await Wa(r);
            if (!k) throw new Error("Trying to create a new empty window without a newPageUrl set");
            b().createView({ target: void 0, url: k });
            break;
          }
          case Z.NewPage:
            await _i(r);
            break;
          case Z.CloseWindow:
            s.dispatch(Tt.CloseBrowserWindow);
            break;
          case Z.SaveWorkspace:
            await Ti(r);
            break;
          case Z.SavePage:
            await _o(r);
            break;
          case Z.SavePageAs:
            await Ro(r);
            break;
          case Z.SaveWorkspaceAs:
            await To(r);
            break;
          case Z.RenameWorkspace:
            c._openSaveModal({ menuType: ut.RENAME_WORKSPACE });
            break;
          case Z.SwitchWorkspace:
            await (async (k, N) => {
              const U = b(), X = (await U.Storage.getWorkspaces()).find((Y) => Y.workspaceId === N.workspaceId);
              U.applyWorkspace(X, { skipPrompt: !1, promptContainerWindowIdentity: k });
            })(r, e);
            break;
          case Z.DeleteWorkspace:
            await Uc(r, e);
            break;
          case Z.Downloads:
            await Ri(r);
            break;
          case Z.Appearance:
            await b().Theme.setSelectedScheme(e.scheme);
            break;
          case Z.Quit:
            {
              const k = $o();
              await Ii(r, await k) && fin.Platform.getCurrentSync().quit();
            }
            break;
          case Z.OpenStorefront:
            (async () => await Gn() && ft($e))();
            break;
          case Z.RestoreChanges:
            await Ei();
            break;
          case Z.Print:
            await Do(n.selectedViews);
            break;
          case Z.PrintAll:
            await w.print({ content: "views", includeSelf: !1 });
            break;
          case Z.PrintScreen:
            await w.print({ content: "screenshot" });
            break;
          case Z.Custom:
            if (e.action) {
              const k = { callerType: mt.GlobalContextMenu, windowIdentity: r, customData: e.action.customData };
              b()._invokeCustomAction(e.action.id, k);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
    }, mu = async (e, n, r) => {
      const s = b().Browser.wrapSync(n.identity), c = fin.Window.wrapSync(n.identity), w = await Et(n.identity), S = await At();
      switch (e && Qt({ type: "Page Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e == null ? void 0 : e.type) {
        case ne.Save:
          await _o(n.identity, n.pageId);
          break;
        case ne.SaveAs:
          await Ro(n.identity, n.pageId);
          break;
        case ne.NewPage:
          await _i(n.identity);
          break;
        case ne.DeletePage:
          await (async (k, N) => {
            const U = b(), X = U.Browser.wrapSync(k), Y = (await U.Storage.getPages()).find((oe) => oe.pageId === N);
            Y && await Rc(k, Y.title) && (await U.Storage.deletePage(Y.pageId), await X.removePage(N), Qr({ message: Q("enterpriseSuccessIndicator.supertabDeleted"), parentBrowserName: k.name, secondaryMessage: Q("enterpriseSuccessIndicator.supertabHasBeenDeleted", { title: Y.title }) }));
          })(n.identity, n.pageId);
          break;
        case ne.Rename:
          await At(n.identity) ? (await s.setActivePage(n.pageId), await (await Li()).dispatch("open", { parentIdentity: n.identity, responseIdentity: Re, type: tr.RenameSupertab, anchorBehavior: ao.Center, x: r.left + r.width / 2 - 164, y: r.bottom - 8, payload: { pageId: n.pageId } })) : await s._openSaveModal({ menuType: ut.RENAME_PAGE, id: n.pageId });
          break;
        case ne.Duplicate:
          w.dispatch(Tt.DuplicatePage, n.pageId);
          break;
        case ne.Close:
          S ? await (async (k, N) => {
            const U = b().Browser.wrapSync(k), X = await U.getPages();
            for (const Y of X) if (Y.pageId === N) {
              await U.removePage(Y.pageId), await U._trackRemovedTab({ identity: k, page: Y });
              break;
            }
          })(n.identity, n.pageId) : w.dispatch(Tt.ClosePage, { pageId: n.pageId });
          break;
        case ne.Custom:
          if (e.action) {
            const k = { callerType: mt.PageTabContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
            b()._invokeCustomAction(e.action.id, k);
          } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
          break;
        case ne.Refresh:
          await (async (k, N) => {
            var oe;
            const U = b(), X = U.Browser.wrapSync(k), Y = (await X.getPages()).find((ue) => N ? ue.pageId === N : ue.isActive);
            (oe = Y == null ? void 0 : Y.layout) != null && oe.content && K(Y.layout.content).forEach(async (ue) => {
              (await fin.View.wrap({ uuid: U.identity.uuid, name: ue.name })).reload();
            });
          })(n.identity, n.pageId);
          break;
        case ne.CloseOthers:
          await (async (k, N) => {
            const U = b().Browser.wrapSync(k), X = await U.getPages();
            for (const Y of X) Y.pageId !== N && (await U.removePage(Y.pageId), await U._trackRemovedTab({ identity: k, page: Y }));
          })(n.identity, n.pageId);
          break;
        case ne.SaveWorkspaceAs:
          await To(n.identity);
          break;
        case ne.Print: {
          const k = await s._getLayoutsWithSelectedViews(), { selectedViews: N } = k.find((U) => U.pageId === n.pageId);
          await Do(N);
          break;
        }
        case ne.PrintAll:
          await s.setActivePage(n.pageId), await c.print({ content: "views", includeSelf: !1 });
          break;
        case ne.PrintScreen:
          await s.setActivePage(n.pageId), await c.print({ content: "screenshot" });
          break;
        case ne.AddToChannel:
          await s.updatePage({ pageId: n.pageId, page: { contextGroup: e.option === "unlink" ? null : e.option } });
          break;
        case ne.ManageDesktopSignals:
          await Nt(n.identity);
      }
    }, wu = async (e, n) => {
      if (e != null && e.type) {
        const r = n.identity;
        switch (e.type) {
          case He.SavePage:
            await _o(r);
            break;
          case He.SaveWorkspace:
            await Ti(r);
            break;
          case He.SavePageAs:
            await Ro(r);
            break;
          case He.SaveWorkspaceAs:
            await To(r);
            break;
          case He.Custom:
            if (e.action) {
              const s = { callerType: mt.SaveButtonContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
              b()._invokeCustomAction(e.action.id, s);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
      }
    };
    var ao;
    (function(e) {
      e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomLeft = 2] = "BottomLeft", e[e.BottomRight = 3] = "BottomRight", e[e.Center = 4] = "Center";
    })(ao || (ao = {}));
    const ro = async (e, n, r, s) => {
      const { x: c, y: w, identity: S, template: k, callback: N } = e, U = await At(S), { data: X } = U ? await su({ x: c, y: w, template: k }, r, s, fin.Window.wrapSync(S)) : await function(Y, oe) {
        if (!at) throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
        if (!oe && !fin.me.isWindow) throw new Error("showContextMenu can only be used in an OpenFin window.");
        return (oe || fin.Window.getCurrentSync()).showPopupMenu(Y);
      }({ x: c, y: w, template: k }, fin.Window.wrapSync(S));
      N(X, e);
    };
    async function yu(e, n) {
      const r = Yt(), s = await At(e.identity);
      s && aa(r);
      const c = s ? await (async ({ identity: Y, selectedViews: oe }) => {
        const ue = b(), Pe = ue.Browser.wrapSync(Y), Ne = (await Pe.getPages()).find((_t) => _t.isActive), pt = await ue.Storage.getPage(Ne.pageId), Ue = ee(Ne.layout.content) > 1, ct = await At(Y), Ye = await ue.Theme.getThemes(), Pt = Ye[0] && "palettes" in Ye[0] || !Ye[0] || Ye.length === 0, pn = { ...zi(ct), enabled: !!pt }, Ke = { ...qi(ct), enabled: Ue };
        return [Gi(), Ji(!0, ct), { type: Le.Separator }, pn, Ke, { type: Le.Separator }, { type: Le.Label, label: Q("contextMenu.manageDesktopSignals"), data: { type: Z.ManageDesktopSignals } }, { type: Le.Separator }, ...Pt ? [{ type: Le.Submenu, label: Qi().label, submenu: await es() }] : [], { type: Le.Separator }, Uo(), { type: Le.Separator }, Ko(!0)];
      })({ identity: e.identity, selectedViews: e.selectedViews }) : await uu(e.identity, e.selectedViews), w = await $o();
      s || (c.find((Y) => {
        var oe;
        return ((oe = Y.data) == null ? void 0 : oe.type) === Z.Quit;
      }).label = `Quit ${w}`);
      const { rect: S, ...k } = e, { x: N, y: U } = s ? { x: S.left + S.width, y: S.bottom } : e, X = { ...k, x: N, y: U, template: c, callback: gu };
      na(r), await this.openGlobalContextMenu(X, n);
    }
    async function bu(e, n) {
      const r = { ...e, callback: hu };
      await this.openViewTabContextMenu(r, n);
    }
    async function vu(e, n) {
      const r = Yt(), s = await At(e.identity);
      s && aa(r);
      const c = await (async (S, k, N) => {
        var Ue, ct;
        const U = await b().Storage.getPage(S), X = (await Tr()).find((Ye) => Ye.pageId === S), Y = ee(X.layout.content) > 1, { workspacePlatform: oe } = await Me(k).getOptions(), ue = !(oe.isLocked || oe.preventPageClose || (Ue = X.closeButton) != null && Ue.disabled || (ct = X.closeButton) != null && ct.hidden), Pe = [{ type: Le.Label, label: Q("enterpriseContextMenu.newTab"), data: { type: ne.NewPage } }, Xt, rs(X), as(), Xt, { type: Le.Label, label: Q("reload"), data: { type: ne.Refresh } }, { type: Le.Label, label: Q("enterpriseContextMenu.duplicate"), data: { type: ne.Duplicate }, enabled: !oe.isLocked }, await cu(), Xt, { type: Le.Label, label: Q(Y ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ne.Close }, enabled: ue }], Ne = [{ type: Le.Label, label: Q("enterpriseContextMenu.newTab"), data: { type: ne.NewPage } }, Xt, rs(X), as(), Xt, { type: Le.Label, label: Q("enterpriseSaveModal.renameSupertab"), data: { type: ne.Rename }, enabled: !oe.isLocked && !!U && Y }, { type: Le.Label, label: Q("enterpriseContextMenu.duplicate"), data: { type: ne.Duplicate }, enabled: !oe.isLocked }, Xt, { type: Le.Label, label: Q("enterpriseContextMenu.saveSupertab"), data: { type: ne.Save }, enabled: Y && !!U }, { type: Le.Label, label: Q("enterpriseContextMenu.saveSupertabAs"), data: { type: ne.SaveAs }, enabled: Y }, Xt, { type: Le.Label, label: Q("enterpriseContextMenu.deleteSupertab"), data: { type: ne.DeletePage }, enabled: !!U }, Xt, { type: Le.Label, label: Q(Y ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ne.Close }, enabled: ue }], pt = [{ type: Le.Label, label: Q("contextMenu.savePage"), data: { type: ne.Save }, enabled: !!U }, { type: Le.Label, label: Q("saveMenu.savePageAs"), data: { type: ne.SaveAs }, enabled: !0 }, { type: Le.Label, label: "Save Workspace As", data: { type: ne.SaveWorkspaceAs } }, { type: Le.Label, label: "Refresh", data: { type: ne.Refresh } }, Xt, { type: Le.Label, label: Q("saveModal.renamePage"), data: { type: ne.Rename }, enabled: !!U }, { type: Le.Label, label: Q("contextMenu.duplicatePage"), data: { type: ne.Duplicate }, enabled: !oe.isLocked }, Xt, { type: Le.Label, label: Q("saveModal.closePage"), data: { type: ne.Close }, enabled: ue }];
        return N ? Y ? Ne : Pe : pt;
      })(e.pageId, e.identity, s), w = { ...e, template: c, callback: (S, k) => {
        mu(S, k, e.rect);
      } };
      na(r), await this.openPageTabContextMenu(w, n);
    }
    async function ku(e, n) {
      const r = await (async (c) => {
        const w = b(), S = await w.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), k = (await w.Storage.getWorkspacesMetadata()).find((U) => U.workspaceId === S.workspaceId), N = await w.Storage.getPage(c);
        return [{ type: Le.Label, label: Q("contextMenu.saveWorkspace"), enabled: !!k, data: { type: He.SaveWorkspace } }, { type: Le.Label, label: Q("saveMenu.saveWorkspaceAs"), data: { type: He.SaveWorkspaceAs } }, { type: Le.Separator, data: void 0 }, { type: Le.Label, enabled: !!N, label: Q("contextMenu.savePage"), data: { type: He.SavePage } }, { type: Le.Label, label: Q("saveMenu.savePageAs"), data: { type: He.SavePageAs } }];
      })(e.pageId), s = { ...e, template: r, callback: wu };
      await this.openSaveButtonContextMenu(s, n);
    }
    const oo = "dock-companion-updates", io = async () => (await fin.Application.getCurrentSync().getChildWindows()).find((e) => e.identity.name === C.DockCompanion), Na = cn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-dock`), Su = async () => {
      const e = b(), n = await async function() {
        const w = await Fi();
        await Promise.all(w.map(async (U) => {
          await Ba(U.identity);
        }));
        const S = Array.from(er.values()).sort((U, X) => X.lastFocusedTime - U.lastFocusedTime), k = S.find((U) => U.isVisible);
        if (k)
          return await fin.Window.wrapSync(k.identity).focus(), k.identity;
        const N = S[0];
        if (N) {
          const U = fin.Window.wrapSync(N.identity);
          return await U.restore(), await U.focus(), N.identity;
        }
        return qc();
      }(), r = e.Browser.wrapSync(n), s = (await r.getPages()).at(-1), c = K(s.layout.content);
      if (c.length === 1 && Ma(c[0].url)) await r.setActivePage(s.pageId);
      else {
        const w = await Xr(n), { newPageUrl: S } = await Wa();
        await r._addDefaultPage({ identity: r.identity, page: w, newPageUrl: S || void 0 });
      }
      (await Et(n)).dispatch(Tt.FocusAndExpandSearchInternal);
    }, Ho = "dock-provider-configs", nr = ot && at && new Zn.Dexie(mn("dock-provider-configs"));
    async function Pu(e) {
      if (!nr) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
      try {
        return await nr[Ho].get(e);
      } catch (n) {
        return void console.warn("Failed to retrieve Dock provider config from IndexedDb", n);
      }
    }
    async function xu(e) {
      if (!nr) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
      await nr[Ho].put(e, e.id);
    }
    nr && nr.version(0.1).stores({ [Ho]: "" });
    const Dr = "workspaces", Hn = ot && at && Cn("openfin-workspace-platform-workspaces", Dr);
    async function Go(e) {
      if (!Hn) throw new Error("Unable to get workspace - IndexDB not supported");
      const n = await Hn[Dr].get(e);
      return n && (n.workspaceId = e.toString(), n.title = n.title || n.workspaceId), n;
    }
    async function is(e) {
      if (!Hn) throw new Error("Unable to get workspaces - IndexDB not supported");
      const n = await Hn[Dr].toCollection().keys(), r = (await Promise.all(n.map((s) => Go(s.toString())))).filter((s) => !!s);
      return e ? r.filter((s) => zt(s.title, e)) : r;
    }
    async function ss({ workspace: e }) {
      if (!Hn) throw new Error("Unable to create workspace - IndexDB not supported");
      const n = (await is()).find((r) => r.title === e.title);
      if (n && n.workspaceId !== e.workspaceId) throw new Error(`Workspace with title '${e.title}' already exists.`);
      await Hn[Dr].put(e, e.workspaceId);
    }
    async function cs(e) {
      if (!Hn) throw new Error("Unable to delete workspace - IndexDB not supported");
      await Hn[Dr].delete(e);
    }
    async function Cu({ workspaceId: e, workspace: n }) {
      if (!Hn) throw new Error("Unable to update workspace - IndexDB not supported");
      if (!await Go(e)) throw new Error("workspace not found");
      await ss({ workspace: n }), e !== n.workspaceId && await cs(e);
    }
    const Mu = (e) => {
      const n = e.layout, r = n.content ? K(n.content) : [], s = r.length;
      return s > 1 ? { ...e, singleViewName: null } : s === 1 ? { ...e, singleViewName: r[0].name } : void 0;
    }, zo = async (e, n, r) => {
      var U, X, Y;
      const s = await b().Browser.getAllAttachedPages(), c = new Set(s.map((oe) => oe.title).filter((oe) => !!oe)), w = new Set(s.map((oe) => oe.pageId).filter((oe) => !!oe)), S = n == null ? void 0 : n.defaultPageOptions, k = ((U = r == null ? void 0 : r.workspacePlatform) == null ? void 0 : U.windowType) === "enterprise" || ((Y = (X = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : X.workspacePlatform) == null ? void 0 : Y.windowType) === "enterprise", N = await (async (oe, ue, Pe) => {
        var Ue, ct, Ye;
        if (Pe) return je();
        const Ne = (Ue = ue == null ? void 0 : ue.workspacePlatform) == null ? void 0 : Ue.newTabUrl;
        return Ne || ((Ye = (ct = oe == null ? void 0 : oe.defaultWindowOptions) == null ? void 0 : ct.workspacePlatform) == null ? void 0 : Ye.newTabUrl) || void 0;
      })(n, r, k);
      return Promise.all(e.map(async (oe) => {
        var Ue, ct;
        if (oe.multiInstanceViewBehavior === "reparent") return { ...oe, layoutContainerKey: Jt() };
        ((Ye, Pt) => {
          Ye.pageId || (Ye.pageId = Jt()), Pt.has(Ye.pageId) && (console.warn("PageID collision detected. All Page IDs should be unique. A random new pageId will be generated"), Ye.pageId = Jt()), Pt.add(Ye.pageId);
        })(oe, w), k || (oe.title = Po(oe.title, Array.from(c.keys()))), c.add(oe.title), (Ue = oe.panels) == null || Ue.reduce((Ye, Pt) => {
          const pn = Object.values(q);
          if (!pn.includes(Pt.position)) throw new Error(`Encountered a panel with unsupported position "${Pt.position}". Supported positions are: ${pn.toString()}`);
          if (Ye[Pt.position] == 1) throw new Error(`Found more than 1 panel at position: ${Pt.position}. Only 1 panel at a given position is currently supported.`);
          return { ...Ye, [Pt.position]: Ye[Pt.position] + 1 };
        }, { [q.Left]: 0, [q.Right]: 0, [q.Top]: 0, [q.Bottom]: 0 });
        const ue = "panels" in oe ? oe.panels : S == null ? void 0 : S.panels;
        let Pe = (Ne = oe.layout, pt = n == null ? void 0 : n.defaultViewOptions, I({ ...Ne }, (Ye) => W(Ye, pt)));
        var Ne, pt;
        return N && !((ct = Pe == null ? void 0 : Pe.settings) != null && ct.newTabButton) && (Pe = { ...Pe, settings: { ...Pe == null ? void 0 : Pe.settings, newTabButton: { url: N } } }), { ...S, ...oe, panels: ue && await di(ue), layoutContainerKey: Jt(), layout: Pe, isLayoutCreated: !1 };
      }));
    }, us = async (e, n) => {
      try {
        await fin.Platform.getCurrentSync().createView({ name: e, url: n, target: fin.me.identity, bounds: { top: 0, left: 0, width: 0, height: 0 } }, fin.me.identity);
      } catch {
      }
    }, Iu = (e) => {
      var c, w, S, k;
      const n = e.name === C.Home, r = (c = e.name) == null ? void 0 : c.startsWith(C.HomeInternal), s = ((w = e.name) == null ? void 0 : w.startsWith(C.BrowserMenu)) || ((S = e.name) == null ? void 0 : S.startsWith(C.BrowserSaveMenu)) || ((k = e.name) == null ? void 0 : k.startsWith(C.DockSaveWorkspaceMenu));
      return !n && !r && !s;
    }, da = (e) => JSON.parse(JSON.stringify(e));
    async function Au(e) {
      return e ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : (await Ae()).displayViewTabDefaultIcon ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : "data:image/svg+xml,%3Csvg%20style%3D%22background-color%3A%237D808A%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.64648%200.874962C4.84174%200.6797%205.15833%200.6797%205.35359%200.874962L9.12482%204.6462C9.32009%204.84146%209.32009%205.15804%209.12482%205.3533L5.35359%209.12454C5.15833%209.3198%204.84174%209.3198%204.64648%209.12454L0.875245%205.3533C0.679982%205.15804%200.679982%204.84146%200.875245%204.6462L4.64648%200.874962ZM5.00003%201.93562L1.9359%204.99975L5.00003%208.06388L8.06416%204.99975L5.00003%201.93562Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";
    }
    const Eu = { dimensions: { borderWidth: 3, headerHeight: 30 } };
    async function Tu(e, n, r) {
      var S, k, N, U, X, Y, oe, ue, Pe, Ne, pt, Ue;
      let s = e;
      const c = ((S = s.workspacePlatform) == null ? void 0 : S.windowType) === "enterprise" || ((N = (k = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : k.workspacePlatform) == null ? void 0 : N.windowType) === "enterprise";
      if (s.layout && !((X = (U = s.workspacePlatform) == null ? void 0 : U.pages) != null && X.length)) {
        const ct = await Pi(), Ye = { ...await bn(ct, s.layout), isActive: !0 };
        s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.pages = await zo([Ye], n, s);
      }
      n != null && n.browserIconSize && (s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.browserIconSize = n.browserIconSize);
      const w = (Y = r == null ? void 0 : r.themes) == null ? void 0 : Y[0];
      if ((ue = (oe = s.workspacePlatform) == null ? void 0 : oe.pages) != null && ue.length) {
        const ct = await zo(s.workspacePlatform.pages, n, s), Ye = ct, Pt = ((Ke) => {
          if (!Ke) return;
          let _t = Ke.find((Ft) => Ft.isActive);
          return !_t && Ke.length > 0 && (Ke[0].isActive = !0, _t = Ke[0]), _t;
        })(Ye);
        if (Ye.forEach((Ke) => {
          Ke.pageId !== (Pt == null ? void 0 : Pt.pageId) && (Ke.isActive = !1);
        }), await pi(Ye), s.workspacePlatform.pages = ct, s = ea({}, await (async (Ke) => ({ contextMenuOptions: { enabled: !1 }, experimental: { showFavicons: !0, defaultFaviconUrl: await Au(Ke) }, viewVisibility: { showViewsOnSplitterDrag: { enabled: !0 }, showViewsOnWindowResize: { enabled: !0 } } }))(c), n == null ? void 0 : n.defaultWindowOptions, s, await (async (Ke) => ({ backgroundThrottling: !0, url: await be(Ke, !0), contextMenu: !0, closeOnLastViewRemoved: !1, permissions: { System: { openUrlWithBrowser: { enabled: !0, protocols: ["mailto"] } } } }))(c)), Pt.layout = ea(Pt.layout, Eu), async function(Ke) {
          if (Ke.icon || Ke.taskbarIcon) {
            const _t = fin.Application.getCurrentSync(), Ft = await (await _t.getWindow()).getOptions();
            Ke.taskbarIconGroup || (Ke.taskbarIconGroup = Ft.taskbarIconGroup || fin.me.identity.uuid);
          }
          if (Ke.workspacePlatform.icon) if (typeof Ke.workspacePlatform.icon == "object") {
            const _t = window.matchMedia("(prefers-color-scheme: dark)");
            Ke.icon = _t.matches ? Ke.workspacePlatform.icon.dark : Ke.workspacePlatform.icon.light;
          } else Ke.icon = Ke.workspacePlatform.icon;
        }(s), !s.backgroundColor && w) if ("palette" in w) s.backgroundColor = ((Pe = w == null ? void 0 : w.palette) == null ? void 0 : Pe.background2) || ((Ne = w == null ? void 0 : w.palette) == null ? void 0 : Ne.backgroundPrimary);
        else {
          const Ke = r.selectedScheme === Ie.Dark || r.selectedScheme === Ie.System && window.matchMedia("(prefers-color-scheme: dark)") ? w == null ? void 0 : w.palettes.dark : w == null ? void 0 : w.palettes.light;
          s.backgroundColor = (Ke == null ? void 0 : Ke.background2) || (Ke == null ? void 0 : Ke.backgroundPrimary);
        }
        s = Kt(s, !0);
        const pn = await be(c, !0);
        if (pn && (s.url = pn), s.layout = Pt.layout, s.layoutSnapshot = ((Ke, _t) => ({ layouts: Ke.reduce((Ft, fn) => (!fn.isActive && (!_t || !Mu(fn).singleViewName) || (Ft[fn.layoutContainerKey] = fn.layout), Ft), {}), pages: Ke }))(s.workspacePlatform.pages, c), s.workspacePlatform.windowType = s.workspacePlatform.windowType ?? tt.Browser, c) {
          const Ke = await je();
          s.workspacePlatform.newPageUrl = Ke, s.workspacePlatform.newTabUrl = Ke, s.layout && (s.layout.dimensions.borderWidth = 4, s.layout.dimensions.headerHeight = 28), s.name = s.name || `${C.BrowserWindow}-${Jt()}`, (async (Ft) => {
            const fn = await Gt(), ar = C.BrowserAddressSearchPrefix + Ft.name, rr = fn + G.BrowserPopupMenuAddressSearchResultsView, Zo = [], Zu = us(ar, rr);
            Zo.push(Zu);
            const Qu = C.AICompanionPrefix + Ft.name, { url: Xu, enabled: el } = Da();
            if (el) {
              const tl = us(Qu, Xu);
              Zo.push(tl);
            }
            await Promise.all(Zo);
          })(s);
          const { enabled: _t } = Da();
          s.workspacePlatform.isAiEnabled = _t, s.minWidth = Math.max(654, s.minWidth ?? 0), s.minHeight = Math.max(488, s.minHeight ?? 0);
        } else s.minWidth = Math.max(232, s.minWidth ?? 0), function(Ke) {
          var ar, rr;
          const _t = (ar = Ke.workspacePlatform) == null ? void 0 : ar.viewTabDimensions, Ft = (rr = Ke.workspacePlatform) == null ? void 0 : rr.pageTabDimensions, fn = /^[0-9]+(px|%)$/;
          if (_t) {
            if (_t.minWidth && !fn.test(_t.minWidth)) throw new Error(`Provided viewTabDimensions.min value "${_t.minWidth}" is not in a supported format.`);
            if (_t.maxWidth && !fn.test(_t.maxWidth)) throw new Error(`Provided viewTabDimensions.max value "${_t.maxWidth}" is not in a supported format.`);
          }
          if (Ft) {
            if (Ft.minWidth && !fn.test(Ft.minWidth)) throw new Error(`Provided pageTabDimensions.min value "${Ft.minWidth}" is not in a supported format.`);
            if (Ft.maxWidth && !fn.test(Ft.maxWidth)) throw new Error(`Provided pageTabDimensions.max value "${Ft.maxWidth}" is not in a supported format.`);
          }
        }(s);
      }
      return s.cornerRounding && delete s.cornerRounding, s.name || s.layoutSnapshot ? ((Ue = (pt = s.contextMenuOptions) == null ? void 0 : pt.template) == null ? void 0 : Ue.length) > 0 ? s.contextMenuOptions.template = s.contextMenuOptions.template.filter((ct) => ct !== "print") : s.contextMenuOptions = { template: [], enabled: !1 } : s.name = `${C.ClassicWindow}-${Jt()}`, s.workspacePlatform && r && (s.workspacePlatform._themeData = r), s;
    }
    const ls = async (e, n) => {
      const r = { uuid: n.uuid, name: n.name };
      await Ii(r, e.title ?? await $o(), e.shouldCenterOnMonitor) && fin.Platform.getCurrentSync().quit();
    }, ds = async (e, n) => {
      const r = b(), s = await r.Browser.getLastFocusedWindow();
      if (!s) return;
      const c = r.Browser.wrapSync(s), { title: w, description: S } = e, k = await Dc({ title: w, description: S, identity: c.identity });
      k && c._sendUpdateVersionModalResponse({ identity: n, response: k });
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
      const n = da(e);
      return (r = n._internalWorkspaceData) != null && r.browserNavigationButtons && (n.workspacePlatform = { ...n.workspacePlatform, browserNavigationButtons: n._internalWorkspaceData.browserNavigationButtons }, delete n._internalWorkspaceData.browserNavigationButtons), n;
    }, hs = (e) => {
      const n = da(e);
      return n.workspacePlatform && (n._internalWorkspaceData = { ...n._internalWorkspaceData, ...n.workspacePlatform }, delete n.workspacePlatform), n;
    }, _u = { reload: [{ keys: "Ctrl+R", preventDefault: !0 }], back: [{ keys: "Alt+Left", preventDefault: !0 }], forward: [{ keys: "Alt+Right", preventDefault: !0 }] }, Ru = { reload: [{ keys: "Cmd+R", preventDefault: !0 }], back: [{ keys: "Cmd+[", preventDefault: !0 }, { keys: "Cmd+Left", preventDefault: !0 }], forward: [{ keys: "Cmd+]", preventDefault: !0 }, { keys: "Cmd+Right", preventDefault: !0 }] }, Du = async () => await Rr() ? _u : Ru, Ou = (e, n) => {
      const r = fin.View.wrapSync(e);
      if (!n) return;
      const s = (c) => {
        (async (w, S, k) => {
          if (k.inputType !== "keyDown") return;
          const N = await (async (X) => {
            var Pe;
            const Y = await X.getCurrentWindow(), oe = await Y.getOptions(), ue = (Pe = oe.workspacePlatform) == null ? void 0 : Pe.navigationButtons;
            return ue.enabled && !ue.hotkeysDisabled;
          })(w), U = await Rr();
          if (N) {
            if (S.reload) {
              const X = k.ctrlKey && !k.altKey && !k.metaKey && !k.shiftKey && k.key === "r", Y = !k.ctrlKey && !k.altKey && k.metaKey && !k.shiftKey && k.key === "r";
              (U ? X : Y) && (S != null && S.reload) && (w.reload(), Qt({ type: "View", action: "Reload", value: w.identity.name }));
            }
            if (S.back) {
              const X = !k.ctrlKey && k.altKey && !k.metaKey && !k.shiftKey && k.key === "ArrowLeft", Y = !k.ctrlKey && !k.altKey && k.metaKey && !k.shiftKey && k.key === "ArrowLeft", oe = !k.ctrlKey && !k.altKey && k.metaKey && !k.shiftKey && k.key === "[";
              (U ? X : Y || oe) && (S != null && S.back) && (w.navigateBack(), Qt({ type: "View", action: "Back", value: w.identity.name }));
            }
            if (S.forward) {
              const X = !k.ctrlKey && k.altKey && !k.metaKey && !k.shiftKey && k.key === "ArrowRight", Y = !k.ctrlKey && !k.altKey && k.metaKey && !k.shiftKey && k.key === "ArrowRight", oe = !k.ctrlKey && !k.altKey && k.metaKey && !k.shiftKey && k.key === "]";
              (U ? X : Y || oe) && (S != null && S.forward) && (w.navigateForward(), Qt({ type: "View", action: "Forward", value: w.identity.name }));
            }
          }
        })(r, n, c);
      };
      r.addListener("hotkey", s), r.once("destroyed", () => {
        r.removeListener("hotkey", s);
      });
    }, qo = (e, n) => da(e).map((r) => ("componentState" in r ? r.componentState = n(r.componentState) : "content" in r && (r.content = qo(r.content, n)), r)), gs = (e) => {
      if (e) {
        const n = da(e);
        return n.content && (n.content = qo(n.content, fs)), n;
      }
      return e;
    }, ms = (e) => {
      if (e) {
        const n = da(e);
        return n.content && (n.content = qo(n.content, hs)), n;
      }
      return e;
    };
    async function Wu({ app: e, target: n }) {
      const r = fin.Platform.getCurrentSync();
      switch (e.manifestType) {
        case te.Snapshot:
          return r.applySnapshot(e.manifest);
        case te.View:
          return async function(s, c) {
            const w = fin.Platform.getCurrentSync();
            if (c.entityType === "view") {
              const S = fin.View.wrapSync(c);
              return await (await S.getParentLayout()).replaceView(c, { manifestUrl: s.manifest, url: void 0, target: void 0 }), S.destroy();
            }
            return w.createView({ name: void 0, url: void 0, manifestUrl: s.manifest, target: void 0 });
          }(e, n);
        case te.External:
          return fin.System.launchExternalProcess({ path: e.manifest, uuid: e.appId });
        default:
          return fin.Application.startFromManifest(e.manifest);
      }
    }
    let Jo;
    const so = () => (Jo || (Jo = cn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-app-directory`)()), Jo);
    async function Bu(e) {
      return await At(e.identity) ? (await so()).dispatch(ln.GetApps, e.req) : [];
    }
    async function Nu(e) {
      return await At(e.identity) ? (await so()).dispatch(ln.GetSearchProviders, e) : [];
    }
    async function Fu(e) {
      return (await so()).dispatch(ln.GetCuratedContent, e);
    }
    async function Lu(e) {
      return (await so()).dispatch(ln.GetRecentlyVisited, e);
    }
    async function Vu(e) {
      const n = (await en()).map(async (r) => {
        var c;
        const s = await r.getOptions();
        (c = s.workspacePlatform) != null && c.pages && s.layout && await (async (w) => (await Et(w)).dispatch(Tt.UpdatePagesWindowOptions))(r.identity);
      });
      return await Promise.all(n), e ? e() : Ha();
    }
    let ws = [];
    const ys = () => ws;
    async function Uu(e) {
      const n = (s) => {
        if (!s.includes("#") && !s.includes("rgb") && !s.includes("hsl")) throw new Error("Background primary color is not the right format.");
      };
      e == null || e.forEach((s) => {
        "palette" in s && n(s.palette.backgroundPrimary), "palettes" in s && (n(s.palettes.dark.backgroundPrimary), n(s.palettes.light.backgroundPrimary));
      }), ws = ((s, c) => {
        if (xt("ThemeStorage: initialiseStoragePalettes called", { customThemes: s, isWindows: c }), !s || !s[0]) {
          xt("ThemeStorage: Using default OpenFin theme");
          const { dark: w, light: S } = Va[0].palettes;
          return vn.setPalettes({ dark: w, light: S }, c), xt("ThemeStorage: Default theme set successfully"), Va;
        }
        {
          const w = s[0];
          if (xt("ThemeStorage: Using custom theme", w), "default" in w && w.default && (xt(`ThemeStorage: Setting theme default scheme to: ${w.default}`), vn.setThemeDefaultScheme(w.default)), "palette" in w) {
            xt("ThemeStorage: Processing single palette theme");
            const { palette: S } = w, k = { ...ba, ...S };
            return vn.setPalettes({ dark: k, light: k }, c), w.palette = k, xt("ThemeStorage: Single palette theme set successfully"), s;
          }
          if ("palettes" in w) {
            xt("ThemeStorage: Processing dual palettes theme");
            const { dark: S, light: k } = w.palettes, N = { ...ba, ...S }, U = { ...Vn, ...k };
            return vn.setPalettes({ dark: N, light: U }, c), w.palettes = { dark: N, light: U }, xt("ThemeStorage: Dual palettes theme set successfully"), s;
          }
        }
      })(e, await Rr());
    }
    const Ku = (e, n) => (r) => {
      const s = e !== null;
      return class extends r {
        constructor() {
          super(), this.isWorkspacePlatform = () => ({ isWorkspacePlatform: !0, isBrowserInitialized: !!e, analytics: { isSupported: !0 } }), this.detachPagesFromWindow = pc, this.getAllAttachedPages = Tr, this.getPagesForWindow = ki, this.getPageForWindow = hc, this.markUnsavedPagesAsSavedInternal = Sc, this.launchApp = Wu, this.savePage = vi, this.saveWorkspace = Nc, this.createSavedPageInternal = yi, this.updateSavedPageInternal = bi, this.deleteSavedPageInternal = uc, this.reorderPagesForWindow = gc, this.getUniquePageTitle = Pi, this.updatePageForWindow = dc, this.getLastFocusedBrowserWindow = zc, this.getThemes = ys, this.invokeCustomActionInternal = Zc, this.requestQuitPlatformDialogInternal = ls, this.getCurrentWorkspace = Wc, this.setActiveWorkspace = Ao, this.getLanguageResourcesInternal = Hc, this.getPageByViewIdentity = async (c) => {
            const w = await fin.Platform.Layout.getLayoutByViewIdentity(c), S = w.identity;
            if (!("layoutName" in S)) throw new Error("Failed to get layout's identity");
            const k = await b().Browser.wrapSync(w.identity).getPages(), N = k.findIndex((U) => U.layoutName === S.layoutName);
            if (N === -1) throw new Error("Failed to get page's index");
            return { windowIdentity: { name: w.identity.name, uuid: w.identity.uuid }, page: k[N], pageIndex: N };
          }, this.openGlobalContextMenuInternal = this.openGlobalContextMenuInternal.bind(this), this.openGlobalContextMenu = this.openGlobalContextMenu.bind(this), this.getSavedPages = this.getSavedPages.bind(this), this.getSavedPage = this.getSavedPage.bind(this), this.createSavedPage = this.createSavedPage.bind(this), this.updateSavedPage = this.updateSavedPage.bind(this), this.deleteSavedPage = this.deleteSavedPage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.attachPagesToWindow = this.attachPagesToWindow.bind(this), this.openViewTabContextMenuInternal = this.openViewTabContextMenuInternal.bind(this), this.openViewTabContextMenu = this.openViewTabContextMenu.bind(this), this.openPageTabContextMenuInternal = this.openPageTabContextMenuInternal.bind(this), this.openPageTabContextMenu = this.openPageTabContextMenu.bind(this), this.getSavedWorkspaces = this.getSavedWorkspaces.bind(this), this.getSavedWorkspacesMetadata = this.getSavedWorkspacesMetadata.bind(this), this.getSavedWorkspace = this.getSavedWorkspace.bind(this), this.createSavedWorkspace = this.createSavedWorkspace.bind(this), this.updateSavedWorkspace = this.updateSavedWorkspace.bind(this), this.deleteSavedWorkspace = this.deleteSavedWorkspace.bind(this), this.getCurrentWorkspace = this.getCurrentWorkspace.bind(this), this.getDockProviderConfig = this.getDockProviderConfig.bind(this), this.saveDockProviderConfig = this.saveDockProviderConfig.bind(this), this.applyWorkspace = this.applyWorkspace.bind(this), this.restoreLastSavedWorkspaceInternal = this.restoreLastSavedWorkspaceInternal.bind(this), this.setActiveWorkspace = this.setActiveWorkspace.bind(this), this.openSaveButtonContextMenu = this.openSaveButtonContextMenu.bind(this), this.openSaveButtonContextMenuInternal = this.openSaveButtonContextMenuInternal.bind(this), this.getSelectedScheme = this.getSelectedScheme.bind(this), this.setSelectedScheme = this.setSelectedScheme.bind(this), this.analyticsInternal = this.analyticsInternal.bind(this), this.handleAnalytics = this.handleAnalytics.bind(this), this.getLanguage = this.getLanguage.bind(this), this.setLanguage = this.setLanguage.bind(this), this.handleSaveModalOnPageClose = this.handleSaveModalOnPageClose.bind(this), this.shouldPageClose = this.shouldPageClose.bind(this), this.shouldWindowClose = this.shouldWindowClose.bind(this), this.handlePagesAndWindowClose = this.handlePagesAndWindowClose.bind(this), this.setActivePage = this.setActivePage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.copyPage = this.copyPage.bind(this), this.addPage = this.addPage.bind(this), this.addDefaultPage = this.addDefaultPage.bind(this), this.markUnsavedPagesAsSavedInternal = this.markUnsavedPagesAsSavedInternal.bind(this), this.trackRemovedTabInternal = this.trackRemovedTabInternal.bind(this), this.restoreRemovedTabInternal = this.restoreRemovedTabInternal.bind(this), this.trackVisitedSiteInternal = this.trackVisitedSiteInternal.bind(this), this.getRecentlyVisitedSitesInternal = this.getRecentlyVisitedSitesInternal.bind(this), this.getFrequentlyVisitedSitesInternal = this.getFrequentlyVisitedSitesInternal.bind(this), this.searchSitesInternal = this.searchSitesInternal.bind(this), this.getSearchProvidersInternal = this.getSearchProvidersInternal.bind(this), this.getCuratedContentInternal = this.getCuratedContentInternal.bind(this), this.handleRequestNavigationInternal = this.handleRequestNavigationInternal.bind(this), this.refreshBookmarksInternal = this.refreshBookmarksInternal.bind(this), this.launchBookmarkInternal = this.launchBookmarkInternal.bind(this), this.getNotificationsConfig = this.getNotificationsConfig.bind(this), this.updateDockFavoritesInternal = this.updateDockFavoritesInternal.bind(this), this.updateContentMenuInternal = this.updateContentMenuInternal.bind(this), this.launchDockEntryInternal = this.launchDockEntryInternal.bind(this), this.setDockFavoritesOrderInternal = this.setDockFavoritesOrderInternal.bind(this), this.navigateContentMenuInternal = this.navigateContentMenuInternal.bind(this), this.setDefaultDockButtonsOrderInternal = this.setDefaultDockButtonsOrderInternal.bind(this), this.getDockWorkspacesContextMenuInternal = this.getDockWorkspacesContextMenuInternal.bind(this), this.handleDockWorkspacesMenuResponseInternal = this.handleDockWorkspacesMenuResponseInternal.bind(this), this.removeDockFavoriteInternal = this.removeDockFavoriteInternal.bind(this), this.addDockFavoriteInternal = this.addDockFavoriteInternal.bind(this), this.focusAndExpandSearchInternal = this.focusAndExpandSearchInternal.bind(this), this.sendUpdateVersionModalResponseInternal = this.sendUpdateVersionModalResponseInternal.bind(this), this.requestQuitPlatformDialogInternal = ls.bind(this), this.showUpdateVersionModalInternal = ds.bind(this);
        }
        async applyWorkspace(...c) {
          return Oc.apply(this, c);
        }
        async restoreLastSavedWorkspaceInternal(...c) {
          return Ei.apply(this, c);
        }
        async getSnapshot() {
          const c = s ? await Vu(async () => Ha(await super.getSnapshot(void 0, fin.me.identity))) : await Ha(await super.getSnapshot(void 0, fin.me.identity));
          let w = { ...c, windows: c.windows.filter(Iu).map($a) };
          return w = ((S) => {
            const k = da(S);
            return k.windows.forEach((N) => {
              var U, X;
              N.layout && (N.layout = gs(N.layout)), (X = (U = N.workspacePlatform) == null ? void 0 : U.pages) == null || X.forEach((Y) => {
                Y != null && Y.layout && (Y.layout = gs(Y.layout));
              });
            }), k;
          })(w), w;
        }
        async getViewSnapshot(c) {
          let w = await super.getViewSnapshot(c);
          return w = fs(w), w;
        }
        async applySnapshot({ snapshot: c, options: w }) {
          let S = c;
          typeof S == "string" && (S = await super.fetchManifest({ manifestUrl: S }, fin.me.identity));
          const k = function(N) {
            var U, X;
            for (const Y of N.windows) if ((X = (U = Y.workspacePlatform) == null ? void 0 : U.pages) != null && X.length) return !0;
            return !1;
          }(S);
          if (!s && k) throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");
          return S = ((N) => {
            const U = da(N);
            return U.windows.forEach((X) => {
              var Y, oe;
              X.layout = ms(X.layout), (oe = (Y = X.workspacePlatform) == null ? void 0 : Y.pages) == null || oe.forEach((ue) => {
                ue.layout = ms(ue.layout);
              });
            }), U;
          })(S), super.applySnapshot({ snapshot: S, options: w });
        }
        async createWindow(c, w) {
          var U, X, Y, oe;
          if (s && c.reason === "tearout") {
            const ue = await fin.Window.wrapSync(w).getOptions(), Pe = (U = ue.workspacePlatform) == null ? void 0 : U.windowType;
            c.taskbarIconGroup = ue.taskbarIconGroup, Pe && (c.workspacePlatform || (c.workspacePlatform = {}), c.workspacePlatform.windowType = ue.workspacePlatform.windowType, Pe === tt.Platform && (c.url = ue.url));
          }
          if (!s || ((X = c.workspacePlatform) == null ? void 0 : X.windowType) === tt.Platform) {
            const ue = await super.createWindow(c, w);
            return Qt({ type: "Window", action: "Open Window", value: ue.identity.name, data: { uuid: ue.identity.uuid } }), ue;
          }
          var S;
          S = { allowed: !0 }, jr || (jr = !0, Ia(Dn.Browser, S)), ((ue = []) => {
            const Pe = ue.filter((Ue) => Ue.type !== gt.Custom), Ne = /* @__PURE__ */ new Set(), pt = [];
            for (const Ue of Pe) Ne.has(Ue.type) && pt.push(Ue.type), Ne.add(Ue.type);
            if (pt.length > 0) {
              const Ue = pt.join(", ");
              throw new Error(`Encountered a duplicate "${Ue}" toolbar button. No more than one instance of a button type may be provided.`);
            }
          })((oe = (Y = c.workspacePlatform) == null ? void 0 : Y.toolbarOptions) == null ? void 0 : oe.buttons);
          let k = ((ue) => "workspacePlatform" in ue ? ue : (({ workstacks: Pe, pages: Ne, ...pt }) => ({ ...pt, workspacePlatform: { pages: Ne || Pe || null } }))(ue))(c);
          k = await Tu(k, e, { themes: ys(), selectedScheme: this.getSelectedScheme() }), k = await (async (ue) => {
            const Pe = await fin.System.getMonitorInfo();
            let Ne = Pe.primaryMonitor;
            const pt = ue.defaultLeft, Ue = ue.defaultTop;
            Pe.nonPrimaryMonitors.forEach((Pt) => {
              const { top: pn, bottom: Ke, left: _t, right: Ft } = Pt.availableRect;
              pt >= _t && pt <= Ft && Ue >= pn && Ue <= Ke && (Ne = Pt);
            });
            const ct = Ne.availableRect.bottom - Ne.availableRect.top, Ye = Ne.availableRect.right - Ne.availableRect.left;
            return ue.defaultHeight = Math.min(ue.defaultHeight || 800, ct), ue.defaultWidth = Math.min(ue.defaultWidth || 800, Ye), ue;
          })(k);
          const N = await (/* @__PURE__ */ ((ue) => async (Pe, Ne) => {
            var ct, Ye;
            let pt = !1;
            const Ue = await ue(Pe, Ne);
            return (Ye = (ct = Pe == null ? void 0 : Pe.workspacePlatform) == null ? void 0 : ct._internalDeferShowOptions) != null && Ye.deferShowEnabled && await Ue.addListener("show-requested", async () => {
              if (pt) return;
              const Pt = await Ue.getOptions();
              await Ue.updateOptions({ workspacePlatform: { ...Pt.workspacePlatform, _internalDeferShowOptions: { ...Pt.workspacePlatform._internalDeferShowOptions, autoShow: !0 } } }), pt = !0;
            }), Ue;
          })((ue, Pe) => super.createWindow(ue, Pe)))(k, w);
          return Qt({ type: "Window", action: "Open Window", value: N.identity.name, data: { uuid: N.identity.uuid } }), N;
        }
        async createView(c, w) {
          var k;
          c.opts = L(c.opts, e == null ? void 0 : e.defaultViewOptions), c.opts = await ps(c.opts, this.fetchManifest, w), c.opts = await (async (N) => {
            var Y;
            const U = da(N), X = (Y = U.workspacePlatform) == null ? void 0 : Y.browserNavigationButtons;
            if (X) {
              const oe = Object.keys(X);
              for (const ue of oe) if (X[ue]) {
                const Pe = (await Du())[ue];
                U.hotkeys ? U.hotkeys.push(...Pe) : U.hotkeys = [...Pe];
              }
            }
            return U;
          })(c.opts), c.opts = hs(c.opts);
          const S = await super.createView(c, w);
          return Ou(S.identity, (k = c.opts._internalWorkspaceData) == null ? void 0 : k.browserNavigationButtons), S;
        }
        async replaceView(c, w) {
          return c.opts.newView = await L(c.opts.newView, e == null ? void 0 : e.defaultViewOptions), c.opts.newView = await ps(c.opts.newView, this.fetchManifest, w), super.replaceView(c, w);
        }
        async replaceLayout(c, w) {
          var S;
          return await At(w) || ((S = c.opts.layout) == null || delete S.dimensions), super.replaceLayout(c, w);
        }
        async getSavedPage(...c) {
          return Lo.apply(this, c);
        }
        async getSavedPages(...c) {
          return eu.apply(this, c);
        }
        async createSavedPage(...c) {
          return ji.apply(this, c);
        }
        async deleteSavedPage(...c) {
          return $i.apply(this, c);
        }
        async updateSavedPage(...c) {
          return tu.apply(this, c);
        }
        async getSavedWorkspace(...c) {
          return Go.apply(this, c);
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
          return Cu.apply(this, c);
        }
        async getDockProviderConfig(...c) {
          return Pu.apply(this, c);
        }
        async saveDockProviderConfig(...c) {
          return xu.apply(this, c);
        }
        async attachPagesToWindow(c) {
          const w = await zo(c.pages, e);
          await pi(w), await lc({ ...c, pages: w });
        }
        async addPage(c) {
          const w = await At(c.identity), S = await Xe(c.identity), { page: k, insertionIndex: N } = c;
          k != null && k.title || w || (k.title = await S.dispatch(pe.GetUniquePageTitle, void 0));
          const U = (await this.getAllAttachedPages()).find((Y) => Y.pageId === k.pageId || Y.title === k.title);
          if (U) {
            if (U.pageId === k.pageId) throw new Error(`page with id ${k.pageId} is already attached to a browser window ${U.parentIdentity.name}`);
            if (!w) throw new Error(`addPage title collision, page with title ${k.title} already exists, conflicting page id: ${U.pageId} with title ${U.title}`);
          }
          const X = { identity: c.identity, pages: [{ ...k, multiInstanceViewBehavior: c.multiInstanceViewBehavior || "duplicate" }], insertionIndex: N };
          await this.attachPagesToWindow(X);
        }
        async addDefaultPage(c) {
          await this.addPage(c), await this.setActivePage({ identity: c.identity, pageId: c.page.pageId });
        }
        async setActivePage(...c) {
          return fc.apply(this, c);
        }
        async openGlobalContextMenuInternal(...c) {
          return yu.apply(this, c);
        }
        async openGlobalContextMenu(...c) {
          return ro.apply(this, [...c, tr.GlobalMenu, ao.BottomRight]);
        }
        async openViewTabContextMenuInternal(...c) {
          return bu.apply(this, c);
        }
        async openViewTabContextMenu(...c) {
          return ro.apply(this, [...c, tr.ContextMenu]);
        }
        async openPageTabContextMenuInternal(...c) {
          return vu.apply(this, c);
        }
        async openPageTabContextMenu(...c) {
          return ro.apply(this, [...c, tr.ContextMenu]);
        }
        async openSaveButtonContextMenu(...c) {
          return ro.apply(this, c);
        }
        async openSaveButtonContextMenuInternal(...c) {
          return ku.apply(this, c);
        }
        getSelectedScheme(...c) {
          return h.apply(this, c);
        }
        async setSelectedScheme(...c) {
          return p.apply(this, c);
        }
        async handlePageChanges(...c) {
          return kc.apply(this, c);
        }
        async analyticsInternal(...c) {
          return Cc.apply(this, c);
        }
        async handleAnalytics(...c) {
        }
        async handleSaveModalOnPageClose(...c) {
          return mc.apply(this, c);
        }
        async shouldPageClose(...c) {
          return wc.apply(this, c);
        }
        async shouldWindowClose(...c) {
          return yc.apply(this, c);
        }
        handlePagesAndWindowClose(...c) {
          return bc.apply(this, c);
        }
        async copyPage(...c) {
          return vc.apply(this, c);
        }
        async getNotificationsConfig() {
          return n;
        }
        async setLanguage(...c) {
          return $c.apply(this, c);
        }
        async getLanguage() {
          return Wi.apply(this);
        }
        async trackRemovedTabInternal(...c) {
          return nu.apply(this, c);
        }
        async restoreRemovedTabInternal() {
          const c = await (async () => {
            const w = Ki();
            if (!w) throw new Error("Unable to pop last removed tab - IndexDB not supported");
            const S = w[No], k = await S.toCollection().keys();
            if (k.length > 0) {
              const N = Math.max(...k.map((X) => Number(X))).toString(), U = await S.get(N);
              if (U) {
                await S.delete(N);
                const { id: X, ...Y } = U;
                return Y;
              }
            }
          })();
          if ("page" in c) if (await dn(c.identity)) {
            const w = b().Browser.wrapSync(c.identity);
            await w.addPage(c.page), await w.setActivePage(c.page.pageId);
          } else b().createWindow({ name: c.identity.name, workspacePlatform: { pages: [c.page], windowType: tt.Browser } });
          else (function(w) {
            return "window" in w;
          })(c) && b().createWindow({ workspacePlatform: { pages: c.window.pages, windowType: tt.Browser } });
        }
        async trackVisitedSiteInternal(...c) {
          return ru.apply(this, c);
        }
        async getRecentlyVisitedSitesInternal(...c) {
          return await Lu.apply(this, c);
        }
        async getFrequentlyVisitedSitesInternal(...c) {
          return ou.apply(this, c);
        }
        async searchSitesInternal(...c) {
          return await Bu.apply(this, c);
        }
        async getSearchProvidersInternal(...c) {
          return await Nu.apply(this, c);
        }
        async getCuratedContentInternal(...c) {
          return await Fu.apply(this, c);
        }
        async handleRequestNavigationInternal(...c) {
        }
        async launchBookmarkInternal(c) {
          return iu(c);
        }
        async refreshBookmarksInternal() {
          (await b().Browser.getAllWindows()).forEach(async ({ identity: c }) => {
            (await Et(c)).dispatch(Tt.RefreshBookmarksInternal);
          }), (await Sr(Xc())).dispatch(Tt.RefreshBookmarksInternal), await (async () => {
            const c = await io();
            c && await (await Et(c.identity, oo)).dispatch(Tt.RefreshBookmarksInternal);
          })();
        }
        async updateDockFavoritesInternal(c) {
          return (async (w) => {
            const S = await io();
            if (!S) throw new Error("Companion Dock window not found");
            await (await Et(S.identity, oo)).dispatch(Wn.UpdateFavoriteEntries, w);
          })(c);
        }
        async updateContentMenuInternal(c) {
          return (async (w) => {
            const S = await io();
            if (!S) throw new Error("Companion Dock window not found");
            await (await Et(S.identity, oo)).dispatch(Wn.UpdateContentMenu, w);
          })(c);
        }
        async launchDockEntryInternal(c) {
          return (async (w) => (await Na()).dispatch("launch-entry", w))(c);
        }
        async setDefaultDockButtonsOrderInternal(c) {
          return (async (w) => (await Na()).dispatch("set-default-dock-buttons-order", w))(c);
        }
        async setDockFavoritesOrderInternal(c) {
          return (async (w) => (await Na()).dispatch("set-dock-favorites-order", w))(c);
        }
        async addDockFavoriteInternal(c) {
          return (async (w) => (await Na()).dispatch("add-favorite-entry", w))(c);
        }
        async removeDockFavoriteInternal(c) {
          return (async (w) => (await Na()).dispatch("remove-favorite-entry", w))(c);
        }
        async navigateContentMenuInternal(c) {
          return (async (w) => {
            const S = await io();
            if (!S) throw new Error("Companion Dock window not found");
            await (await Et(S.identity, oo)).dispatch(Wn.NavigateContentMenu, w);
          })(c);
        }
        async getDockWorkspacesContextMenuInternal() {
          return (async () => (await Na()).dispatch("get-dock-workspaces-context-menu", void 0))();
        }
        async handleDockWorkspacesMenuResponseInternal(c) {
          return (async (w) => (await Na()).dispatch("handle-dock-workspaces-menu-response", w))(c);
        }
        async focusAndExpandSearchInternal() {
          return Su();
        }
        async sendUpdateVersionModalResponseInternal(c) {
          return An(c);
        }
        async showUpdateVersionModalInternal(c, w) {
          return ds(c, w);
        }
      };
    };
    function ju(e, n, r) {
      const s = Ku(e, r);
      try {
        return typeof n == "function" ? (c) => n(s(c)) : Array.isArray(n) ? [...n, s] : (c) => new (s(c))();
      } catch (c) {
        throw new Error("WorkspacePlatform.init Error:", c);
      }
    }
    const $u = ["green", "purple", "orange", "red", "pink", "yellow"], bs = "CONTEXT_GROUP_PAGE", Hu = () => (e) => class extends e {
      getContextGroups() {
        return super.getContextGroups().map((n) => {
          var r, s;
          return $u.includes((r = n.displayMetadata) == null ? void 0 : r.name) ? { ...n, displayMetadata: { ...n.displayMetadata, name: Q((s = n.displayMetadata) == null ? void 0 : s.name) } } : n;
        });
      }
    }, Gu = () => {
      const e = new Set(jo.keys());
      return (n) => class extends n {
        constructor() {
          super(), this.onClientConnected = async (s) => {
            if (s.name.startsWith("internal-generated-view")) {
              const { page: c } = await b().Browser.getPageByViewIdentity(s), w = c.contextGroup;
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
            const w = (await b().Browser.getPageByViewIdentity(s)).page.layoutName;
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
          return Array.from(e).map((r) => ({ id: r, displayMetadata: jo.get(r) ?? {} }));
        }
        setContextForGroup(r, s) {
          if (!this.contextGroupsById.has(s)) {
            const c = /* @__PURE__ */ new Map();
            this.contextGroupsById.set(s, c);
          }
          return super.setContextForGroup(r, s);
        }
      };
    }, zu = (e, n) => {
      const r = ((s) => br(s) ? Gu() : Hu())(n);
      try {
        return typeof e == "function" ? (s) => e(r(s)) : Array.isArray(e) ? [...e, r] : (s) => new (r(s))();
      } catch (s) {
        throw new Error("WorkspacePlatform.init Error:", s);
      }
    };
    async function qu() {
      (async () => (await g()).on("window-closed", Yc))(), async function() {
        const e = fin.Application.getCurrentSync(), n = await Fi();
        await Promise.all(n.map(async (s) => {
          await Ba(s.identity, void 0, !0);
        }));
        const r = await fin.System.getFocusedWindow();
        r && r.name.startsWith(C.BrowserWindow) && await Ba(r, void 0, !0), await e.addListener("window-focused", async (s) => {
          await Ba(s, void 0, !0);
        }), await e.addListener("window-minimized", async (s) => {
          await Ba(s, !1);
        }), await e.addListener("window-restored", async (s) => {
          await Ba(s, !0);
        }), await e.addListener("window-closed", Jc);
      }(), Ao(await Eo());
    }
    let Yo;
    function Ju({ overrideCallback: e, interopOverride: n, browser: r, notifications: s, analytics: c, integrations: w = [], workspaceAsar: S }) {
      if (!at) throw new Error("Cannot be used outside an OpenFin env.");
      return Yo || (Yo = (async () => {
        const k = fin.Platform.getCurrentSync();
        var N, U;
        if (k.once("platform-api-ready", () => qu()), k.on("window-show-all-downloads", ({ name: oe, uuid: ue }) => {
          Ri({ name: oe, uuid: ue });
        }), r != null && r.title && (N = r.title, os = N), Mc(c), S) {
          const oe = `workspace-${encodeURIComponent(fin.me.uuid)}`, { baseUrl: ue } = await fin.System.serveAsset({ ...S, hostName: oe });
          St(ue);
        }
        r != null && r.browserBaseUrl && St(r.browserBaseUrl), br(r) && (Wt = !0, U = r, rn = U == null ? void 0 : U.aiPanelOptions, Da());
        const X = kn();
        var Y;
        return X.setWorkspaceStorage(Qn(`${Ve}-workspace`)), X.trySynchronizeWorkspaceStorage(), await fin.Platform.init({ overrideCallback: ju(r, e || (r == null ? void 0 : r.overrideCallback), s), interopOverride: zu(n || (r == null ? void 0 : r.interopOverride), r) }), Y = { allowed: !0 }, Ia(Dn.Platform, Y), await Promise.all(w.map(async (oe) => {
          ((ue, Pe) => {
            Ia(`${Dn.Microflow}:${ue}`, Pe, "integration-feature");
          })(oe.workflowIntegrationName, { allowed: !0, apiVersion: Bt }), await oe._initializeWorkflows();
        })), k;
      })()), Yo;
    }
    const Yu = async ({ theme: e, customActions: n, language: r, ...s }) => {
      const c = Bt.split(".").map((k) => parseInt(k));
      if (!await (async (k) => {
        if ((await Ae()).disableRuntimeValidation || await At()) return !0;
        const N = (await fin.System.getVersion()).split(".").map((U) => parseInt(U));
        return k.every((U, X) => !(X < 3) || N[X] === k[X]);
      })(c)) throw new Error(`Runtime version is not supported.  ${c[0]}.${c[1]}.${c[2]}.* is required`);
      var S;
      return Uu(e), e && (S = { allowed: !0 }, Ia(Dn.Theming, S)), n && (Wo = n), await Gc(r == null ? void 0 : r.initialLanguage), await Ju(s);
    };
  })(), $s.exports = d;
})();
var Ud = $s.exports;
const jd = /* @__PURE__ */ ci(Ud);
export {
  jd as default
};
