/*3.50.0*/ !(function () {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  function t(e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  }
  var n =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : {},
    i = {};
  t(i);
  var r,
    o,
    a,
    s,
    l,
    c,
    u,
    d,
    h,
    p,
    f = {},
    m = !1;
  function v(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function g(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function y(e, t, n) {
    var i,
      r,
      o,
      a = arguments,
      s = {};
    for (o in t) 'key' == o ? (i = t[o]) : 'ref' == o ? (r = t[o]) : (s[o] = t[o]);
    if (arguments.length > 3) for (n = [n], o = 3; o < arguments.length; o++) n.push(a[o]);
    if ((null != n && (s.children = n), 'function' == typeof e && null != e.defaultProps))
      for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
    return b(e, s, i, r, null);
  }
  function b(e, t, n, i, r) {
    var a = {
      type: e,
      props: t,
      key: n,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == r ? ++o.__v : r,
    };
    return null != o.vnode && o.vnode(a), a;
  }
  function w() {
    return { current: null };
  }
  function _(e) {
    return e.children;
  }
  function x(e, t) {
    (this.props = e), (this.context = t);
  }
  function S(e, t) {
    if (null == t) return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return 'function' == typeof e.type ? S(e) : null;
  }
  function C(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return C(e);
    }
  }
  function E(e) {
    ((!e.__d && (e.__d = !0) && s.push(e) && !T.__r++) || c !== o.debounceRendering) &&
      ((c = o.debounceRendering) || l)(T);
  }
  function T() {
    for (var e; (T.__r = s.length); )
      (e = s.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      })),
        (s = []),
        e.some(function (e) {
          var t, n, i, r, o, a;
          e.__d &&
            ((o = (r = (t = e).__v).__e),
            (a = t.__P) &&
              ((n = []),
              ((i = v({}, r)).__v = r.__v + 1),
              z(
                a,
                r,
                i,
                t.__n,
                void 0 !== a.ownerSVGElement,
                null != r.__h ? [o] : null,
                n,
                null == o ? S(r) : o,
                r.__h
              ),
              D(n, r),
              r.__e != o && C(r)));
        });
  }
  function k(e, t, n, i, r, o, a, s, l, c) {
    var u,
      p,
      f,
      m,
      v,
      g,
      y,
      w = (i && i.__k) || h,
      x = w.length;
    for (n.__k = [], u = 0; u < t.length; u++)
      if (
        null !=
        (m = n.__k[u] =
          null == (m = t[u]) || 'boolean' == typeof m
            ? null
            : 'string' == typeof m || 'number' == typeof m
            ? b(null, m, null, null, m)
            : Array.isArray(m)
            ? b(_, { children: m }, null, null, null)
            : m.__b > 0
            ? b(m.type, m.props, m.key, null, m.__v)
            : m)
      ) {
        if (
          ((m.__ = n),
          (m.__b = n.__b + 1),
          null === (f = w[u]) || (f && m.key == f.key && m.type === f.type))
        )
          w[u] = void 0;
        else
          for (p = 0; p < x; p++) {
            if ((f = w[p]) && m.key == f.key && m.type === f.type) {
              w[p] = void 0;
              break;
            }
            f = null;
          }
        z(e, m, (f = f || d), r, o, a, s, l, c),
          (v = m.__e),
          (p = m.ref) &&
            f.ref != p &&
            (y || (y = []), f.ref && y.push(f.ref, null, m), y.push(p, m.__c || v, m)),
          null != v
            ? (null == g && (g = v),
              'function' == typeof m.type && null != m.__k && m.__k === f.__k
                ? (m.__d = l = O(m, l, e))
                : (l = P(e, m, f, w, v, l)),
              c || 'option' !== n.type
                ? 'function' == typeof n.type && (n.__d = l)
                : (e.value = ''))
            : l && f.__e == l && l.parentNode != e && (l = S(f));
      }
    for (n.__e = g, u = x; u--; )
      null != w[u] &&
        ('function' == typeof n.type &&
          null != w[u].__e &&
          w[u].__e == n.__d &&
          (n.__d = S(i, u + 1)),
        N(w[u], w[u]));
    if (y) for (u = 0; u < y.length; u++) j(y[u], y[++u], y[++u]);
  }
  function O(e, t, n) {
    var i, r;
    for (i = 0; i < e.__k.length; i++)
      (r = e.__k[i]) &&
        ((r.__ = e), (t = 'function' == typeof r.type ? O(r, t, n) : P(n, r, r, e.__k, r.__e, t)));
    return t;
  }
  function M(e, t) {
    return (
      (t = t || []),
      null == e ||
        'boolean' == typeof e ||
        (Array.isArray(e)
          ? e.some(function (e) {
              M(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function P(e, t, n, i, r, o) {
    var a, s, l;
    if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
    else if (null == n || r != o || null == r.parentNode)
      e: if (null == o || o.parentNode !== e) e.appendChild(r), (a = null);
      else {
        for (s = o, l = 0; (s = s.nextSibling) && l < i.length; l += 2) if (s == r) break e;
        e.insertBefore(r, o), (a = o);
      }
    return void 0 !== a ? a : r.nextSibling;
  }
  function R(e, t, n) {
    '-' === t[0]
      ? e.setProperty(t, n)
      : (e[t] = null == n ? '' : 'number' != typeof n || p.test(t) ? n : n + 'px');
  }
  function A(e, t, n, i, r) {
    var o;
    e: if ('style' === t)
      if ('string' == typeof n) e.style.cssText = n;
      else {
        if (('string' == typeof i && (e.style.cssText = i = ''), i))
          for (t in i) (n && t in n) || R(e.style, t, '');
        if (n) for (t in n) (i && n[t] === i[t]) || R(e.style, t, n[t]);
      }
    else if ('o' === t[0] && 'n' === t[1])
      (o = t !== (t = t.replace(/Capture$/, ''))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + o] = n),
        n ? i || e.addEventListener(t, o ? L : I, o) : e.removeEventListener(t, o ? L : I, o);
    else if ('dangerouslySetInnerHTML' !== t) {
      if (r) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
      else if ('href' !== t && 'list' !== t && 'form' !== t && 'download' !== t && t in e)
        try {
          e[t] = null == n ? '' : n;
          break e;
        } catch (e) {}
      'function' == typeof n ||
        (null != n && (!1 !== n || ('a' === t[0] && 'r' === t[1]))
          ? e.setAttribute(t, n)
          : e.removeAttribute(t));
    }
  }
  function I(e) {
    this.l[e.type + !1](o.event ? o.event(e) : e);
  }
  function L(e) {
    this.l[e.type + !0](o.event ? o.event(e) : e);
  }
  function z(e, t, n, i, r, a, s, l, c) {
    var u,
      p,
      f,
      m,
      y,
      b,
      w,
      S,
      C,
      E,
      T,
      O = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && ((c = n.__h), (l = t.__e = n.__e), (t.__h = null), (a = [l])),
      (u = o.__b) && u(t);
    try {
      e: if ('function' == typeof O) {
        if (
          ((S = t.props),
          (C = (u = O.contextType) && i[u.__c]),
          (E = u ? (C ? C.props.value : u.__) : i),
          n.__c
            ? (w = (p = t.__c = n.__c).__ = p.__E)
            : ('prototype' in O && O.prototype.render
                ? (t.__c = p = new O(S, E))
                : ((t.__c = p = new x(S, E)), (p.constructor = O), (p.render = F)),
              C && C.sub(p),
              (p.props = S),
              p.state || (p.state = {}),
              (p.context = E),
              (p.__n = i),
              (f = p.__d = !0),
              (p.__h = [])),
          null == p.__s && (p.__s = p.state),
          null != O.getDerivedStateFromProps &&
            (p.__s == p.state && (p.__s = v({}, p.__s)),
            v(p.__s, O.getDerivedStateFromProps(S, p.__s))),
          (m = p.props),
          (y = p.state),
          f)
        )
          null == O.getDerivedStateFromProps &&
            null != p.componentWillMount &&
            p.componentWillMount(),
            null != p.componentDidMount && p.__h.push(p.componentDidMount);
        else {
          if (
            (null == O.getDerivedStateFromProps &&
              S !== m &&
              null != p.componentWillReceiveProps &&
              p.componentWillReceiveProps(S, E),
            (!p.__e &&
              null != p.shouldComponentUpdate &&
              !1 === p.shouldComponentUpdate(S, p.__s, E)) ||
              t.__v === n.__v)
          ) {
            (p.props = S),
              (p.state = p.__s),
              t.__v !== n.__v && (p.__d = !1),
              (p.__v = t),
              (t.__e = n.__e),
              (t.__k = n.__k),
              p.__h.length && s.push(p);
            break e;
          }
          null != p.componentWillUpdate && p.componentWillUpdate(S, p.__s, E),
            null != p.componentDidUpdate &&
              p.__h.push(function () {
                p.componentDidUpdate(m, y, b);
              });
        }
        (p.context = E),
          (p.props = S),
          (p.state = p.__s),
          (u = o.__r) && u(t),
          (p.__d = !1),
          (p.__v = t),
          (p.__P = e),
          (u = p.render(p.props, p.state, p.context)),
          (p.state = p.__s),
          null != p.getChildContext && (i = v(v({}, i), p.getChildContext())),
          f || null == p.getSnapshotBeforeUpdate || (b = p.getSnapshotBeforeUpdate(m, y)),
          (T = null != u && u.type === _ && null == u.key ? u.props.children : u),
          k(e, Array.isArray(T) ? T : [T], t, n, i, r, a, s, l, c),
          (p.base = t.__e),
          (t.__h = null),
          p.__h.length && s.push(p),
          w && (p.__E = p.__ = null),
          (p.__e = !1);
      } else
        null == a && t.__v === n.__v
          ? ((t.__k = n.__k), (t.__e = n.__e))
          : (t.__e = (function (e, t, n, i, r, o, a, s) {
              var l,
                c,
                u,
                p,
                f = n.props,
                m = t.props,
                v = t.type,
                y = 0;
              if (('svg' === v && (r = !0), null != o))
                for (; y < o.length; y++)
                  if ((l = o[y]) && (l === e || (v ? l.localName == v : 3 == l.nodeType))) {
                    (e = l), (o[y] = null);
                    break;
                  }
              if (null == e) {
                if (null === v) return document.createTextNode(m);
                (e = r
                  ? document.createElementNS('http://www.w3.org/2000/svg', v)
                  : document.createElement(v, m.is && m)),
                  (o = null),
                  (s = !1);
              }
              if (null === v) f === m || (s && e.data === m) || (e.data = m);
              else {
                if (
                  ((o = o && h.slice.call(e.childNodes)),
                  (c = (f = n.props || d).dangerouslySetInnerHTML),
                  (u = m.dangerouslySetInnerHTML),
                  !s)
                ) {
                  if (null != o)
                    for (f = {}, p = 0; p < e.attributes.length; p++)
                      f[e.attributes[p].name] = e.attributes[p].value;
                  (u || c) &&
                    ((u && ((c && u.__html == c.__html) || u.__html === e.innerHTML)) ||
                      (e.innerHTML = (u && u.__html) || ''));
                }
                if (
                  ((function (e, t, n, i, r) {
                    var o;
                    for (o in n)
                      'children' === o || 'key' === o || o in t || A(e, o, null, n[o], i);
                    for (o in t)
                      (r && 'function' != typeof t[o]) ||
                        'children' === o ||
                        'key' === o ||
                        'value' === o ||
                        'checked' === o ||
                        n[o] === t[o] ||
                        A(e, o, t[o], n[o], i);
                  })(e, m, f, r, s),
                  u)
                )
                  t.__k = [];
                else if (
                  ((y = t.props.children),
                  k(
                    e,
                    Array.isArray(y) ? y : [y],
                    t,
                    n,
                    i,
                    r && 'foreignObject' !== v,
                    o,
                    a,
                    e.firstChild,
                    s
                  ),
                  null != o)
                )
                  for (y = o.length; y--; ) null != o[y] && g(o[y]);
                s ||
                  ('value' in m &&
                    void 0 !== (y = m.value) &&
                    (y !== e.value || ('progress' === v && !y)) &&
                    A(e, 'value', y, f.value, !1),
                  'checked' in m &&
                    void 0 !== (y = m.checked) &&
                    y !== e.checked &&
                    A(e, 'checked', y, f.checked, !1));
              }
              return e;
            })(n.__e, t, n, i, r, a, s, c));
      (u = o.diffed) && u(t);
    } catch (e) {
      (t.__v = null),
        (c || null != a) && ((t.__e = l), (t.__h = !!c), (a[a.indexOf(l)] = null)),
        o.__e(e, t, n);
    }
  }
  function D(e, t) {
    o.__c && o.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          o.__e(e, t.__v);
        }
      });
  }
  function j(e, t, n) {
    try {
      'function' == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      o.__e(e, n);
    }
  }
  function N(e, t, n) {
    var i, r, a;
    if (
      (o.unmount && o.unmount(e),
      (i = e.ref) && ((i.current && i.current !== e.__e) || j(i, null, t)),
      n || 'function' == typeof e.type || (n = null != (r = e.__e)),
      (e.__e = e.__d = void 0),
      null != (i = e.__c))
    ) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (e) {
          o.__e(e, t);
        }
      i.base = i.__P = null;
    }
    if ((i = e.__k)) for (a = 0; a < i.length; a++) i[a] && N(i[a], t, n);
    null != r && g(r);
  }
  function F(e, t, n) {
    return this.constructor(e, n);
  }
  function W(e, t, n) {
    var i, r, a;
    o.__ && o.__(e, t),
      (r = (i = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
      (a = []),
      z(
        t,
        (e = ((!i && n) || t).__k = y(_, null, [e])),
        r || d,
        d,
        void 0 !== t.ownerSVGElement,
        !i && n ? [n] : r ? null : t.firstChild ? h.slice.call(t.childNodes) : null,
        a,
        !i && n ? n : r ? r.__e : t.firstChild,
        i
      ),
      D(a, e);
  }
  function B(e, t) {
    W(e, t, B);
  }
  function H(e, t, n) {
    var i,
      r,
      o,
      a = arguments,
      s = v({}, e.props);
    for (o in t) 'key' == o ? (i = t[o]) : 'ref' == o ? (r = t[o]) : (s[o] = t[o]);
    if (arguments.length > 3) for (n = [n], o = 3; o < arguments.length; o++) n.push(a[o]);
    return null != n && (s.children = n), b(e.type, s, i || e.key, r || e.ref, null);
  }
  function q(e, t) {
    var n = {
      __c: (t = '__cC' + u++),
      __: e,
      Consumer: function (e, t) {
        return e.children(t);
      },
      Provider: function (e) {
        var n, i;
        return (
          this.getChildContext ||
            ((n = []),
            ((i = {})[t] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (e) {
              this.props.value !== e.value && n.some(E);
            }),
            (this.sub = function (e) {
              n.push(e);
              var t = e.componentWillUnmount;
              e.componentWillUnmount = function () {
                n.splice(n.indexOf(e), 1), t && t.call(e);
              };
            })),
          e.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  function V() {
    return (
      m ||
        ((m = !0),
        (d = {}),
        (h = []),
        (p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i),
        ((r = {}).options = o),
        (r.isValidElement = a),
        (r.h = y),
        (r.createElement = y),
        (r.createRef = w),
        (r.Fragment = _),
        (r.Component = x),
        (r.toChildArray = M),
        (r.render = W),
        (r.hydrate = B),
        (r.cloneElement = H),
        (r.createContext = q),
        (o = {
          __e: function (e, t) {
            for (var n, i, r; (t = t.__); )
              if ((n = t.__c) && !n.__)
                try {
                  if (
                    ((i = n.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (n.setState(i.getDerivedStateFromError(e)), (r = n.__d)),
                    null != n.componentDidCatch && (n.componentDidCatch(e), (r = n.__d)),
                    r)
                  )
                    return (n.__E = n);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
          __v: 0,
        }),
        (r.options = o),
        (a = function (e) {
          return null != e && void 0 === e.constructor;
        }),
        (r.isValidElement = a),
        (x.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = v({}, this.state))),
            'function' == typeof e && (e = e(v({}, n), this.props)),
            e && v(n, e),
            null != e && this.__v && (t && this.__h.push(t), E(this));
        }),
        (x.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), E(this));
        }),
        (x.prototype.render = _),
        (s = []),
        (l =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (T.__r = 0),
        (u = 0)),
      r
    );
  }
  V();
  var U,
    $,
    G,
    Z = 0,
    Y = [],
    X = o.__b,
    K = o.__r,
    J = o.diffed,
    Q = o.__c,
    ee = o.unmount;
  function te(e, t) {
    o.__h && o.__h($, e, Z || t), (Z = 0);
    var n = $.__H || ($.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function ne(e) {
    return (Z = 1), ie(be, e);
  }
  function ie(e, t, n) {
    var i = te(U++, 2);
    return (
      (i.t = e),
      i.__c ||
        ((i.__ = [
          n ? n(t) : be(void 0, t),
          function (e) {
            var t = i.t(i.__[0], e);
            i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
          },
        ]),
        (i.__c = $)),
      i.__
    );
  }
  function re(e, t) {
    var n = te(U++, 3);
    !o.__s && ye(n.__H, t) && ((n.__ = e), (n.__H = t), $.__H.__h.push(n));
  }
  function oe(e, t) {
    var n = te(U++, 4);
    !o.__s && ye(n.__H, t) && ((n.__ = e), (n.__H = t), $.__h.push(n));
  }
  function ae(e) {
    return (
      (Z = 5),
      le(function () {
        return { current: e };
      }, [])
    );
  }
  function se(e, t, n) {
    (Z = 6),
      oe(
        function () {
          'function' == typeof e ? e(t()) : e && (e.current = t());
        },
        null == n ? n : n.concat(e)
      );
  }
  function le(e, t) {
    var n = te(U++, 7);
    return ye(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function ce(e, t) {
    return (
      (Z = 8),
      le(function () {
        return e;
      }, t)
    );
  }
  function ue(e) {
    var t = $.context[e.__c],
      n = te(U++, 9);
    return (n.__c = e), t ? (null == n.__ && ((n.__ = !0), t.sub($)), t.props.value) : e.__;
  }
  function de(e, t) {
    o.useDebugValue && o.useDebugValue(t ? t(e) : e);
  }
  function he() {
    Y.forEach(function (e) {
      if (e.__P)
        try {
          e.__H.__h.forEach(ve), e.__H.__h.forEach(ge), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), o.__e(t, e.__v);
        }
    }),
      (Y = []);
  }
  (f.useState = ne),
    (f.useReducer = ie),
    (f.useEffect = re),
    (f.useLayoutEffect = oe),
    (f.useRef = ae),
    (f.useImperativeHandle = se),
    (f.useMemo = le),
    (f.useCallback = ce),
    (f.useContext = ue),
    (f.useDebugValue = de),
    (f.useErrorBoundary = function (e) {
      var t = te(U++, 10),
        n = ne();
      return (
        (t.__ = e),
        $.componentDidCatch ||
          ($.componentDidCatch = function (e) {
            t.__ && t.__(e), n[1](e);
          }),
        [
          n[0],
          function () {
            n[1](void 0);
          },
        ]
      );
    }),
    (o.__b = function (e) {
      ($ = null), X && X(e);
    }),
    (o.__r = function (e) {
      K && K(e), (U = 0);
      var t = ($ = e.__c).__H;
      t && (t.__h.forEach(ve), t.__h.forEach(ge), (t.__h = []));
    }),
    (o.diffed = function (e) {
      J && J(e);
      var t = e.__c;
      t &&
        t.__H &&
        t.__H.__h.length &&
        ((1 !== Y.push(t) && G === o.requestAnimationFrame) ||
          (
            (G = o.requestAnimationFrame) ||
            function (e) {
              var t,
                n = function () {
                  clearTimeout(i), me && cancelAnimationFrame(t), setTimeout(e);
                },
                i = setTimeout(n, 100);
              me && (t = requestAnimationFrame(n));
            }
          )(he)),
        ($ = void 0);
    }),
    (o.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(ve),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || ge(e);
            }));
        } catch (n) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            o.__e(n, e.__v);
        }
      }),
        Q && Q(e, t);
    }),
    (o.unmount = function (e) {
      ee && ee(e);
      var t = e.__c;
      if (t && t.__H)
        try {
          t.__H.__.forEach(ve);
        } catch (e) {
          o.__e(e, t.__v);
        }
    });
  var pe,
    fe,
    me = 'function' == typeof requestAnimationFrame;
  function ve(e) {
    var t = $;
    'function' == typeof e.__c && e.__c(), ($ = t);
  }
  function ge(e) {
    var t = $;
    (e.__c = e.__()), ($ = t);
  }
  function ye(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, n) {
        return t !== e[n];
      })
    );
  }
  function be(e, t) {
    return 'function' == typeof t ? t(e) : t;
  }
  function we(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function _e(e, t) {
    for (var n in e) if ('__source' !== n && !(n in t)) return !0;
    for (var i in t) if ('__source' !== i && e[i] !== t[i]) return !0;
    return !1;
  }
  function xe(e) {
    this.props = e;
  }
  function Se(e, t) {
    function n(e) {
      var n = this.props.ref,
        i = n == e.ref;
      return (
        !i && n && (n.call ? n(null) : (n.current = null)),
        t ? !t(this.props, e) || !i : _e(this.props, e)
      );
    }
    function i(t) {
      return (this.shouldComponentUpdate = n), y(e, t);
    }
    return (
      (i.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
      (i.prototype.isReactComponent = !0),
      (i.__f = !0),
      i
    );
  }
  V(),
    V(),
    (pe = i),
    (fe = f),
    Object.keys(fe).forEach(function (e) {
      'default' !== e &&
        '__esModule' !== e &&
        Object.defineProperty(pe, e, {
          enumerable: !0,
          get: function () {
            return fe[e];
          },
        });
    }),
    (i.Component = x),
    (i.Fragment = _),
    (i.createRef = w),
    (i.createContext = q),
    (i.createElement = y),
    (i.PureComponent = xe),
    (i.memo = Se),
    ((xe.prototype = new x()).isPureReactComponent = !0),
    (xe.prototype.shouldComponentUpdate = function (e, t) {
      return _e(this.props, e) || _e(this.state, t);
    });
  var Ce = o.__b;
  o.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), Ce && Ce(e);
  };
  var Ee = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')) || 3911;
  function Te(e) {
    function t(t, n) {
      var i = we({}, t);
      return (
        delete i.ref, e(i, (n = t.ref || n) && ('object' != typeof n || 'current' in n) ? n : null)
      );
    }
    return (
      (t.$$typeof = Ee),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  }
  i.forwardRef = Te;
  var ke = function (e, t) {
      return null == e ? null : M(M(e).map(t));
    },
    Oe = {
      map: ke,
      forEach: ke,
      count: function (e) {
        return e ? M(e).length : 0;
      },
      only: function (e) {
        var t = M(e);
        if (1 !== t.length) throw 'Children.only';
        return t[0];
      },
      toArray: M,
    },
    Me = o.__e;
  function Pe() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Re(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e);
  }
  function Ae(e) {
    var t, n, i;
    function r(r) {
      if (
        (t ||
          (t = e()).then(
            function (e) {
              n = e.default || e;
            },
            function (e) {
              i = e;
            }
          ),
        i)
      )
        throw i;
      if (!n) throw t;
      return y(n, r);
    }
    return (r.displayName = 'Lazy'), (r.__f = !0), r;
  }
  function Ie() {
    (this.u = null), (this.o = null);
  }
  (i.Children = Oe),
    (i.Suspense = Pe),
    (i.lazy = Ae),
    (i.SuspenseList = Ie),
    (o.__e = function (e, t, n) {
      if (e.then)
        for (var i, r = t; (r = r.__); )
          if ((i = r.__c) && i.__c)
            return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
      Me(e, t, n);
    }),
    ((Pe.prototype = new x()).__c = function (e, t) {
      var n = t.__c,
        i = this;
      null == i.t && (i.t = []), i.t.push(n);
      var r = Re(i.__v),
        o = !1,
        a = function () {
          o || ((o = !0), (n.componentWillUnmount = n.__c), r ? r(s) : s());
        };
      (n.__c = n.componentWillUnmount),
        (n.componentWillUnmount = function () {
          a(), n.__c && n.__c();
        });
      var s = function () {
          if (!--i.__u) {
            if (i.state.__e) {
              var e = i.state.__e;
              i.__v.__k[0] = (function e(t, n, i) {
                return (
                  t &&
                    ((t.__v = null),
                    (t.__k =
                      t.__k &&
                      t.__k.map(function (t) {
                        return e(t, n, i);
                      })),
                    t.__c &&
                      t.__c.__P === n &&
                      (t.__e && i.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = i))),
                  t
                );
              })(e, e.__c.__P, e.__c.__O);
            }
            var t;
            for (i.setState({ __e: (i.__b = null) }); (t = i.t.pop()); ) t.forceUpdate();
          }
        },
        l = !0 === t.__h;
      i.__u++ || l || i.setState({ __e: (i.__b = i.__v.__k[0]) }), e.then(a, a);
    }),
    (Pe.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (Pe.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement('div'),
            i = this.__v.__k[0].__c;
          this.__v.__k[0] = (function e(t, n, i) {
            return (
              t &&
                (t.__c &&
                  t.__c.__H &&
                  (t.__c.__H.__.forEach(function (e) {
                    'function' == typeof e.__c && e.__c();
                  }),
                  (t.__c.__H = null)),
                null != (t = we({}, t)).__c && (t.__c.__P === i && (t.__c.__P = n), (t.__c = null)),
                (t.__k =
                  t.__k &&
                  t.__k.map(function (t) {
                    return e(t, n, i);
                  }))),
              t
            );
          })(this.__b, n, (i.__O = i.__P));
        }
        this.__b = null;
      }
      var r = t.__e && y(_, null, e.fallback);
      return r && (r.__h = null), [y(_, null, t.__e ? null : e.children), r];
    });
  var Le = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function ze(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function De(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      W(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
              },
            })),
          W(y(ze, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  function je(e, t) {
    return y(De, { __v: e, i: t });
  }
  (i.createPortal = je),
    ((Ie.prototype = new x()).__e = function (e) {
      var t = this,
        n = Re(t.__v),
        i = t.o.get(e);
      return (
        i[0]++,
        function (r) {
          var o = function () {
            t.props.revealOrder ? (i.push(r), Le(t, e, i)) : r();
          };
          n ? n(o) : o();
        }
      );
    }),
    (Ie.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = M(e.children);
      e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (Ie.prototype.componentDidUpdate = Ie.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Le(e, n, t);
        });
      });
  var Ne = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
    Fe =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    We = function (e) {
      return (
        'undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i
      ).test(e);
    };
  function Be(e, t, n) {
    return (
      null == t.__k && (t.textContent = ''),
      W(e, t),
      'function' == typeof n && n(),
      e ? e.__c : null
    );
  }
  function He(e, t, n) {
    return B(e, t), 'function' == typeof n && n(), e ? e.__c : null;
  }
  (i.render = Be),
    (i.hydrate = He),
    (x.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (
      e
    ) {
      Object.defineProperty(x.prototype, e, {
        configurable: !0,
        get: function () {
          return this['UNSAFE_' + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
        },
      });
    });
  var qe = o.event;
  function Ve() {}
  function Ue() {
    return this.cancelBubble;
  }
  function $e() {
    return this.defaultPrevented;
  }
  o.event = function (e) {
    return (
      qe && (e = qe(e)),
      (e.persist = Ve),
      (e.isPropagationStopped = Ue),
      (e.isDefaultPrevented = $e),
      (e.nativeEvent = e)
    );
  };
  var Ge,
    Ze = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Ye = o.vnode;
  o.vnode = function (e) {
    var t = e.type,
      n = e.props,
      i = n;
    if ('string' == typeof t) {
      for (var r in ((i = {}), n)) {
        var o = n[r];
        ('value' === r && 'defaultValue' in n && null == o) ||
          ('defaultValue' === r && 'value' in n && null == n.value
            ? (r = 'value')
            : 'download' === r && !0 === o
            ? (o = '')
            : /ondoubleclick/i.test(r)
            ? (r = 'ondblclick')
            : /^onchange(textarea|input)/i.test(r + t) && !We(n.type)
            ? (r = 'oninput')
            : /^on(Ani|Tra|Tou|BeforeInp)/.test(r)
            ? (r = r.toLowerCase())
            : Fe.test(r)
            ? (r = r.replace(/[A-Z0-9]/, '-$&').toLowerCase())
            : null === o && (o = void 0),
          (i[r] = o));
      }
      'select' == t &&
        i.multiple &&
        Array.isArray(i.value) &&
        (i.value = M(n.children).forEach(function (e) {
          e.props.selected = -1 != i.value.indexOf(e.props.value);
        })),
        'select' == t &&
          null != i.defaultValue &&
          (i.value = M(n.children).forEach(function (e) {
            e.props.selected = i.multiple
              ? -1 != i.defaultValue.indexOf(e.props.value)
              : i.defaultValue == e.props.value;
          })),
        (e.props = i);
    }
    t &&
      n.class != n.className &&
      ((Ze.enumerable = 'className' in n),
      null != n.className && (i.class = n.className),
      Object.defineProperty(i, 'className', Ze)),
      (e.$$typeof = Ne),
      Ye && Ye(e);
  };
  var Xe = o.__r;
  o.__r = function (e) {
    Xe && Xe(e), (Ge = e.__c);
  };
  var Ke = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return Ge.__n[e.__c].props.value;
        },
      },
    },
  };
  (i.unstable_IdlePriority = 5),
    (i.unstable_LowPriority = 4),
    (i.unstable_NormalPriority = 3),
    (i.unstable_UserBlockingPriority = 2),
    (i.unstable_ImmediatePriority = 1),
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ke),
    (i.unstable_runWithPriority = function (e, t) {
      return t();
    });
  var Je =
    'object' == typeof performance && 'function' == typeof performance.now
      ? performance.now.bind(performance)
      : function () {
          return Date.now();
        };
  function Qe(e) {
    return y.bind(null, e);
  }
  function et(e) {
    return !!e && e.$$typeof === Ne;
  }
  function tt(e) {
    return et(e) ? H.apply(null, arguments) : e;
  }
  function nt(e) {
    return !!e.__k && (W(null, e), !0);
  }
  function it(e) {
    return (e && (e.base || (1 === e.nodeType && e))) || null;
  }
  (i.unstable_now = Je),
    (i.version = '16.8.0'),
    (i.createFactory = Qe),
    (i.isValidElement = et),
    (i.cloneElement = tt),
    (i.unmountComponentAtNode = nt),
    (i.findDOMNode = it);
  var rt = function (e, t) {
      return e(t);
    },
    ot = _;
  (i.StrictMode = ot), (i.unstable_batchedUpdates = rt);
  var at = {
    useState: ne,
    useReducer: ie,
    useEffect: re,
    useLayoutEffect: oe,
    useRef: ae,
    useImperativeHandle: se,
    useMemo: le,
    useCallback: ce,
    useContext: ue,
    useDebugValue: de,
    version: '16.8.0',
    Children: Oe,
    render: Be,
    hydrate: He,
    unmountComponentAtNode: nt,
    createPortal: je,
    createElement: y,
    createContext: q,
    createFactory: Qe,
    cloneElement: tt,
    createRef: w,
    Fragment: _,
    isValidElement: et,
    findDOMNode: it,
    Component: x,
    PureComponent: xe,
    memo: Se,
    forwardRef: Te,
    unstable_batchedUpdates: rt,
    StrictMode: _,
    Suspense: Pe,
    SuspenseList: Ie,
    lazy: Ae,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ke,
  };
  function st(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return Math.min(Math.max(t, e), n);
  }
  function lt(e) {
    if (e.type) return e;
    if ('#' === e.charAt(0))
      return lt(
        (function (e) {
          e = e.substr(1);
          var t = new RegExp('.{1,'.concat(e.length / 3, '}'), 'g'),
            n = e.match(t);
          return (
            n &&
              1 === n[0].length &&
              (n = n.map(function (e) {
                return e + e;
              })),
            n
              ? 'rgb('.concat(
                  n
                    .map(function (e) {
                      return parseInt(e, 16);
                    })
                    .join(', '),
                  ')'
                )
              : ''
          );
        })(e)
      );
    var t = e.indexOf('('),
      n = e.substring(0, t);
    if (-1 === ['rgb', 'rgba', 'hsl', 'hsla'].indexOf(n))
      throw new Error(
        [
          'Material-UI: unsupported `'.concat(e, '` color.'),
          'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
        ].join('\n')
      );
    var i = e.substring(t + 1, e.length - 1).split(',');
    return {
      type: n,
      values: (i = i.map(function (e) {
        return parseFloat(e);
      })),
    };
  }
  function ct(e) {
    var t = e.type,
      n = e.values;
    return (
      -1 !== t.indexOf('rgb')
        ? (n = n.map(function (e, t) {
            return t < 3 ? parseInt(e, 10) : e;
          }))
        : -1 !== t.indexOf('hsl') && ((n[1] = ''.concat(n[1], '%')), (n[2] = ''.concat(n[2], '%'))),
      ''.concat(t, '(').concat(n.join(', '), ')')
    );
  }
  function ut(e, t) {
    var n = dt(e),
      i = dt(t);
    return (Math.max(n, i) + 0.05) / (Math.min(n, i) + 0.05);
  }
  function dt(e) {
    var t =
      'hsl' === (e = lt(e)).type
        ? lt(
            (function (e) {
              var t = (e = lt(e)).values,
                n = t[0],
                i = t[1] / 100,
                r = t[2] / 100,
                o = i * Math.min(r, 1 - r),
                a = function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : (e + n / 30) % 12;
                  return r - o * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                },
                s = 'rgb',
                l = [Math.round(255 * a(0)), Math.round(255 * a(8)), Math.round(255 * a(4))];
              return 'hsla' === e.type && ((s += 'a'), l.push(t[3])), ct({ type: s, values: l });
            })(e)
          ).values
        : e.values;
    return (
      (t = t.map(function (e) {
        return (e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      })),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function ht(e, t) {
    return (
      (e = lt(e)),
      (t = st(t)),
      ('rgb' !== e.type && 'hsl' !== e.type) || (e.type += 'a'),
      (e.values[3] = t),
      ct(e)
    );
  }
  function pt(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function ft(e, t) {
    if (null == e) return {};
    var n,
      i,
      r = {},
      o = Object.keys(e);
    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
  }
  function mt(e, t) {
    if (null == e) return {};
    var n,
      i,
      r = ft(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        (n = o[i]),
          t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
  }
  function vt() {
    return (vt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  i.default = at;
  var gt = vt;
  function yt(e) {
    return (yt =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  var bt = yt;
  function wt(e) {
    return e && 'object' === bt(e) && !Array.isArray(e);
  }
  function _t(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { clone: !0 },
      i = n.clone ? gt({}, e) : e;
    return (
      wt(e) &&
        wt(t) &&
        Object.keys(t).forEach(function (r) {
          '__proto__' !== r && (wt(t[r]) && r in e ? (i[r] = _t(e[r], t[r], n)) : (i[r] = t[r]));
        }),
      i
    );
  }
  var xt,
    St = !1;
  function Ct() {
    return (
      St ||
        ((St = !0),
        (xt = {}),
        'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
        (xt = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')),
      xt
    );
  }
  var Et,
    Tt,
    kt = !1;
  function Ot() {}
  function Mt() {}
  var Pt = {};
  var Rt = e(
    (Pt = (kt ||
      ((kt = !0),
      (Et = {}),
      (Tt = Ct()),
      (Mt.resetWarningCache = Ot),
      (Et = function () {
        function e(e, t, n, i, r, o) {
          if (o !== Tt) {
            var a = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((a.name = 'Invariant Violation'), a);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: Mt,
          resetWarningCache: Ot,
        };
        return (n.PropTypes = n), n;
      })),
    Et)())
  );
  (Rt.element,
  function () {
    return null;
  }).isRequired =
    (Rt.element.isRequired,
    function () {
      return null;
    });
  Pt.elementType;
  var At,
    It,
    Lt,
    zt,
    Dt,
    jt,
    Nt,
    Ft,
    Wt,
    Bt,
    Ht,
    qt,
    Vt,
    Ut,
    $t,
    Gt,
    Zt,
    Yt,
    Xt,
    Kt,
    Jt,
    Qt,
    en,
    tn,
    nn,
    rn,
    on,
    an,
    sn,
    ln,
    cn,
    un,
    dn,
    hn,
    pn,
    fn,
    mn,
    vn,
    gn,
    yn,
    bn,
    wn,
    _n,
    xn,
    Sn,
    Cn,
    En,
    Tn = !1;
  function kn(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case Lt:
          switch ((e = e.type)) {
            case Bt:
            case Ht:
            case Dt:
            case Nt:
            case jt:
            case Vt:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case Wt:
                case qt:
                case Gt:
                case $t:
                case Ft:
                  return e;
                default:
                  return t;
              }
          }
        case zt:
          return t;
      }
    }
  }
  function On(e) {
    return kn(e) === Ht;
  }
  var Mn = {};
  Tn ||
    ((Tn = !0),
    (At = {}),
    Object.defineProperty(At, '__esModule', { value: !0 }),
    (It = 'function' == typeof Symbol && Symbol.for),
    (Lt = It ? Symbol.for('react.element') : 60103),
    (zt = It ? Symbol.for('react.portal') : 60106),
    (Dt = It ? Symbol.for('react.fragment') : 60107),
    (jt = It ? Symbol.for('react.strict_mode') : 60108),
    (Nt = It ? Symbol.for('react.profiler') : 60114),
    (Ft = It ? Symbol.for('react.provider') : 60109),
    (Wt = It ? Symbol.for('react.context') : 60110),
    (Bt = It ? Symbol.for('react.async_mode') : 60111),
    (Ht = It ? Symbol.for('react.concurrent_mode') : 60111),
    (qt = It ? Symbol.for('react.forward_ref') : 60112),
    (Vt = It ? Symbol.for('react.suspense') : 60113),
    (Ut = It ? Symbol.for('react.suspense_list') : 60120),
    ($t = It ? Symbol.for('react.memo') : 60115),
    (Gt = It ? Symbol.for('react.lazy') : 60116),
    (Zt = It ? Symbol.for('react.fundamental') : 60117),
    (Yt = It ? Symbol.for('react.responder') : 60118),
    (Xt = It ? Symbol.for('react.scope') : 60119),
    (Kt = kn),
    (At.typeOf = Kt),
    (Jt = Bt),
    (At.AsyncMode = Jt),
    (Qt = Ht),
    (At.ConcurrentMode = Qt),
    (en = Wt),
    (At.ContextConsumer = en),
    (tn = Ft),
    (At.ContextProvider = tn),
    (nn = Lt),
    (At.Element = nn),
    (rn = qt),
    (At.ForwardRef = rn),
    (on = Dt),
    (At.Fragment = on),
    (an = Gt),
    (At.Lazy = an),
    (sn = $t),
    (At.Memo = sn),
    (ln = zt),
    (At.Portal = ln),
    (cn = Nt),
    (At.Profiler = cn),
    (un = jt),
    (At.StrictMode = un),
    (dn = Vt),
    (At.Suspense = dn),
    (hn = function (e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === Dt ||
        e === Ht ||
        e === Nt ||
        e === jt ||
        e === Vt ||
        e === Ut ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === Gt ||
            e.$$typeof === $t ||
            e.$$typeof === Ft ||
            e.$$typeof === Wt ||
            e.$$typeof === qt ||
            e.$$typeof === Zt ||
            e.$$typeof === Yt ||
            e.$$typeof === Xt))
      );
    }),
    (At.isValidElementType = hn),
    (pn = function (e) {
      return On(e) || kn(e) === Bt;
    }),
    (At.isAsyncMode = pn),
    (fn = On),
    (At.isConcurrentMode = fn),
    (mn = function (e) {
      return kn(e) === Wt;
    }),
    (At.isContextConsumer = mn),
    (vn = function (e) {
      return kn(e) === Ft;
    }),
    (At.isContextProvider = vn),
    (gn = function (e) {
      return 'object' == typeof e && null !== e && e.$$typeof === Lt;
    }),
    (At.isElement = gn),
    (yn = function (e) {
      return kn(e) === qt;
    }),
    (At.isForwardRef = yn),
    (bn = function (e) {
      return kn(e) === Dt;
    }),
    (At.isFragment = bn),
    (wn = function (e) {
      return kn(e) === Gt;
    }),
    (At.isLazy = wn),
    (_n = function (e) {
      return kn(e) === $t;
    }),
    (At.isMemo = _n),
    (xn = function (e) {
      return kn(e) === zt;
    }),
    (At.isPortal = xn),
    (Sn = function (e) {
      return kn(e) === Nt;
    }),
    (At.isProfiler = Sn),
    (Cn = function (e) {
      return kn(e) === jt;
    }),
    (At.isStrictMode = Cn),
    (En = function (e) {
      return kn(e) === Vt;
    }),
    (At.isSuspense = En)),
    (Mn = At);
  'undefined' != typeof window && window.Math == Math
    ? window
    : 'undefined' != typeof self && self.Math == Math
    ? self
    : Function('return this')(),
    Rt.oneOfType([Rt.func, Rt.object]);
  var Pn = ['xs', 'sm', 'md', 'lg', 'xl'];
  function Rn(e) {
    var t = e.values,
      n = void 0 === t ? { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } : t,
      i = e.unit,
      r = void 0 === i ? 'px' : i,
      o = e.step,
      a = void 0 === o ? 5 : o,
      s = mt(e, ['values', 'unit', 'step']);
    function l(e) {
      var t = 'number' == typeof n[e] ? n[e] : e;
      return '@media (min-width:'.concat(t).concat(r, ')');
    }
    function c(e, t) {
      var i = Pn.indexOf(t);
      return i === Pn.length - 1
        ? l(e)
        : '@media (min-width:'.concat('number' == typeof n[e] ? n[e] : e).concat(r, ') and ') +
            '(max-width:'
              .concat((-1 !== i && 'number' == typeof n[Pn[i + 1]] ? n[Pn[i + 1]] : t) - a / 100)
              .concat(r, ')');
    }
    return gt(
      {
        keys: Pn,
        values: n,
        up: l,
        down: function (e) {
          var t = Pn.indexOf(e) + 1,
            i = n[Pn[t]];
          return t === Pn.length
            ? l('xs')
            : '@media (max-width:'
                .concat(('number' == typeof i && t > 0 ? i : e) - a / 100)
                .concat(r, ')');
        },
        between: c,
        only: function (e) {
          return c(e, e);
        },
        width: function (e) {
          return n[e];
        },
      },
      s
    );
  }
  function An(e, t, n) {
    var i;
    return gt(
      {
        gutters: function () {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return gt(
            { paddingLeft: t(2), paddingRight: t(2) },
            n,
            pt({}, e.up('sm'), gt({ paddingLeft: t(3), paddingRight: t(3) }, n[e.up('sm')]))
          );
        },
        toolbar:
          ((i = { minHeight: 56 }),
          pt(i, ''.concat(e.up('xs'), ' and (orientation: landscape)'), { minHeight: 48 }),
          pt(i, e.up('sm'), { minHeight: 64 }),
          i),
      },
      n
    );
  }
  var In = { black: '#000', white: '#fff' },
    Ln = {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    zn = '#7986cb',
    Dn = '#3f51b5',
    jn = '#303f9f',
    Nn = '#ff4081',
    Fn = '#f50057',
    Wn = '#c51162',
    Bn = '#e57373',
    Hn = '#f44336',
    qn = '#d32f2f',
    Vn = '#ffb74d',
    Un = '#ff9800',
    $n = '#f57c00',
    Gn = '#64b5f6',
    Zn = '#2196f3',
    Yn = '#1976d2',
    Xn = '#81c784',
    Kn = '#4caf50',
    Jn = '#388e3c',
    Qn = {
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: { paper: In.white, default: Ln[50] },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpaciy: 0.12,
      },
    },
    ei = {
      text: {
        primary: In.white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)',
      },
      divider: 'rgba(255, 255, 255, 0.12)',
      background: { paper: Ln[800], default: '#303030' },
      action: {
        active: In.white,
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpaciy: 0.24,
      },
    };
  function ti(e, t, n, i) {
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : 'light' === t
        ? (e.light = (function (e, t) {
            if (((e = lt(e)), (t = st(t)), -1 !== e.type.indexOf('hsl')))
              e.values[2] += (100 - e.values[2]) * t;
            else if (-1 !== e.type.indexOf('rgb'))
              for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
            return ct(e);
          })(e.main, i))
        : 'dark' === t &&
          (e.dark = (function (e, t) {
            if (((e = lt(e)), (t = st(t)), -1 !== e.type.indexOf('hsl'))) e.values[2] *= 1 - t;
            else if (-1 !== e.type.indexOf('rgb'))
              for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
            return ct(e);
          })(e.main, 1.5 * i)));
  }
  function ni(e) {
    var t = e.primary,
      n = void 0 === t ? { light: zn, main: Dn, dark: jn } : t,
      i = e.secondary,
      r = void 0 === i ? { light: Nn, main: Fn, dark: Wn } : i,
      o = e.error,
      a = void 0 === o ? { light: Bn, main: Hn, dark: qn } : o,
      s = e.warning,
      l = void 0 === s ? { light: Vn, main: Un, dark: $n } : s,
      c = e.info,
      u = void 0 === c ? { light: Gn, main: Zn, dark: Yn } : c,
      d = e.success,
      h = void 0 === d ? { light: Xn, main: Kn, dark: Jn } : d,
      p = e.type,
      f = void 0 === p ? 'light' : p,
      m = e.contrastThreshold,
      v = void 0 === m ? 3 : m,
      g = e.tonalOffset,
      y = void 0 === g ? 0.2 : g,
      b = mt(e, [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'type',
        'contrastThreshold',
        'tonalOffset',
      ]);
    function w(e) {
      if (!e)
        throw new TypeError(
          'Material-UI: missing background argument in getContrastText('.concat(e, ').')
        );
      var t = ut(e, ei.text.primary) >= v ? ei.text.primary : Qn.text.primary;
      return t;
    }
    function _(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 700;
      return (
        !(e = gt({}, e)).main && e[t] && (e.main = e[t]),
        ti(e, 'light', n, y),
        ti(e, 'dark', i, y),
        e.contrastText || (e.contrastText = w(e.main)),
        e
      );
    }
    var x = { dark: ei, light: Qn };
    return _t(
      gt(
        {
          common: In,
          type: f,
          primary: _(n),
          secondary: _(r, 'A400', 'A200', 'A700'),
          error: _(a),
          warning: _(l),
          info: _(u),
          success: _(h),
          grey: Ln,
          contrastThreshold: v,
          getContrastText: w,
          augmentColor: _,
          tonalOffset: y,
        },
        x[f]
      ),
      b
    );
  }
  function ii(e) {
    return Math.round(1e5 * e) / 1e5;
  }
  var ri = { textTransform: 'uppercase' };
  function oi(e, t) {
    var n = 'function' == typeof t ? t(e) : t,
      i = n.fontFamily,
      r = void 0 === i ? '"Roboto", "Helvetica", "Arial", sans-serif' : i,
      o = n.fontSize,
      a = void 0 === o ? 14 : o,
      s = n.fontWeightLight,
      l = void 0 === s ? 300 : s,
      c = n.fontWeightRegular,
      u = void 0 === c ? 400 : c,
      d = n.fontWeightMedium,
      h = void 0 === d ? 500 : d,
      p = n.fontWeightBold,
      f = void 0 === p ? 700 : p,
      m = n.htmlFontSize,
      v = void 0 === m ? 16 : m,
      g = n.allVariants,
      y = n.pxToRem,
      b = mt(n, [
        'fontFamily',
        'fontSize',
        'fontWeightLight',
        'fontWeightRegular',
        'fontWeightMedium',
        'fontWeightBold',
        'htmlFontSize',
        'allVariants',
        'pxToRem',
      ]);
    var w = a / 14,
      _ =
        y ||
        function (e) {
          return ''.concat((e / v) * w, 'rem');
        },
      x = function (e, t, n, i, o) {
        return gt(
          { fontFamily: r, fontWeight: e, fontSize: _(t), lineHeight: n },
          '"Roboto", "Helvetica", "Arial", sans-serif' === r
            ? { letterSpacing: ''.concat(ii(i / t), 'em') }
            : {},
          {},
          o,
          {},
          g
        );
      },
      S = {
        h1: x(l, 96, 1.167, -1.5),
        h2: x(l, 60, 1.2, -0.5),
        h3: x(u, 48, 1.167, 0),
        h4: x(u, 34, 1.235, 0.25),
        h5: x(u, 24, 1.334, 0),
        h6: x(h, 20, 1.6, 0.15),
        subtitle1: x(u, 16, 1.75, 0.15),
        subtitle2: x(h, 14, 1.57, 0.1),
        body1: x(u, 16, 1.5, 0.15),
        body2: x(u, 14, 1.43, 0.15),
        button: x(h, 14, 1.75, 0.4, ri),
        caption: x(u, 12, 1.66, 0.4),
        overline: x(u, 12, 2.66, 1, ri),
      };
    return _t(
      gt(
        {
          htmlFontSize: v,
          pxToRem: _,
          round: ii,
          fontFamily: r,
          fontSize: a,
          fontWeightLight: l,
          fontWeightRegular: u,
          fontWeightMedium: h,
          fontWeightBold: f,
        },
        S
      ),
      b,
      { clone: !1 }
    );
  }
  function ai() {
    return [
      ''
        .concat(arguments.length <= 0 ? void 0 : arguments[0], 'px ')
        .concat(arguments.length <= 1 ? void 0 : arguments[1], 'px ')
        .concat(arguments.length <= 2 ? void 0 : arguments[2], 'px ')
        .concat(arguments.length <= 3 ? void 0 : arguments[3], 'px rgba(0,0,0,')
        .concat(0.2, ')'),
      ''
        .concat(arguments.length <= 4 ? void 0 : arguments[4], 'px ')
        .concat(arguments.length <= 5 ? void 0 : arguments[5], 'px ')
        .concat(arguments.length <= 6 ? void 0 : arguments[6], 'px ')
        .concat(arguments.length <= 7 ? void 0 : arguments[7], 'px rgba(0,0,0,')
        .concat(0.14, ')'),
      ''
        .concat(arguments.length <= 8 ? void 0 : arguments[8], 'px ')
        .concat(arguments.length <= 9 ? void 0 : arguments[9], 'px ')
        .concat(arguments.length <= 10 ? void 0 : arguments[10], 'px ')
        .concat(arguments.length <= 11 ? void 0 : arguments[11], 'px rgba(0,0,0,')
        .concat(0.12, ')'),
    ].join(',');
  }
  var si = [
      'none',
      ai(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      ai(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      ai(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      ai(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      ai(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      ai(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      ai(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      ai(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      ai(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      ai(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      ai(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      ai(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      ai(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      ai(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      ai(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      ai(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      ai(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      ai(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      ai(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      ai(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      ai(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      ai(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      ai(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      ai(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    li = { borderRadius: 4 };
  function ci() {
    var e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
    if (t.mui) return t;
    e =
      'function' == typeof t
        ? t
        : function (e) {
            return t * e;
          };
    var n = function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return 0 === n.length
        ? e(1)
        : 1 === n.length
        ? e(n[0])
        : n
            .map(function (t) {
              var n = e(t);
              return 'number' == typeof n ? ''.concat(n, 'px') : n;
            })
            .join(' ');
    };
    return (
      Object.defineProperty(n, 'unit', {
        get: function () {
          return t;
        },
      }),
      (n.mui = !0),
      n
    );
  }
  var ui = {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    di = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function hi(e) {
    return ''.concat(Math.round(e), 'ms');
  }
  var pi = {
      easing: ui,
      duration: di,
      create: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ['all'],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.duration,
          i = void 0 === n ? di.standard : n,
          r = t.easing,
          o = void 0 === r ? ui.easeInOut : r,
          a = t.delay,
          s = void 0 === a ? 0 : a;
        mt(t, ['duration', 'easing', 'delay']);
        return (Array.isArray(e) ? e : [e])
          .map(function (e) {
            return ''
              .concat(e, ' ')
              .concat('string' == typeof i ? i : hi(i), ' ')
              .concat(o, ' ')
              .concat('string' == typeof s ? s : hi(s));
          })
          .join(',');
      },
      getAutoHeightDuration: function (e) {
        if (!e) return 0;
        var t = e / 36;
        return Math.round(10 * (4 + 15 * Math.pow(t, 0.25) + t / 5));
      },
    },
    fi = {
      mobileStepper: 1e3,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    };
  var mi =
      'function' == typeof Symbol && Symbol.for ? Symbol.for('mui.nested') : '__THEME_NESTED__',
    vi = [
      'checked',
      'disabled',
      'error',
      'focused',
      'focusVisible',
      'required',
      'expanded',
      'selected',
    ];
  function gi() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.disableGlobal,
      n = void 0 !== t && t,
      i = e.productionPrefix,
      r = void 0 === i ? 'pwzrjss' : i,
      o = e.seed,
      a = void 0 === o ? '' : o,
      s = '' === a ? '' : ''.concat(a, '-'),
      l = 0;
    return function (e, t) {
      l += 1;
      var i = t.options.name;
      if (i && 0 === i.indexOf('Pwzr') && !t.options.link && !n) {
        if (-1 !== vi.indexOf(e.key)) return 'Pwzr-'.concat(e.key);
        var o = ''.concat(s).concat(i, '-').concat(e.key);
        return t.options.theme[mi] && '' === a ? ''.concat(o, '-').concat(l) : o;
      }
      return ''.concat(s).concat(r).concat(l);
    };
  }
  function yi(e) {
    var t = e.theme,
      n = e.name,
      i = e.props;
    if (!t || !t.props || !t.props[n]) return i;
    var r,
      o = t.props[n];
    for (r in o) void 0 === i[r] && (i[r] = o[r]);
    return i;
  }
  var bi =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          },
    wi =
      'object' === ('undefined' == typeof window ? 'undefined' : bi(window)) &&
      'object' === ('undefined' == typeof document ? 'undefined' : bi(document)) &&
      9 === document.nodeType;
  function _i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function xi(e, t, n) {
    return t && _i(e.prototype, t), n && _i(e, n), e;
  }
  function Si(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
  }
  function Ci(e) {
    if (void 0 === e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var Ei = {}.constructor;
  function Ti(e) {
    if (null == e || 'object' != typeof e) return e;
    if (Array.isArray(e)) return e.map(Ti);
    if (e.constructor !== Ei) return e;
    var t = {};
    for (var n in e) t[n] = Ti(e[n]);
    return t;
  }
  function ki(e, t, n) {
    void 0 === e && (e = 'unnamed');
    var i = n.jss,
      r = Ti(t),
      o = i.plugins.onCreateRule(e, r, n);
    return o || (e[0], null);
  }
  var Oi = function (e, t) {
    for (var n = '', i = 0; i < e.length && '!important' !== e[i]; i++) n && (n += t), (n += e[i]);
    return n;
  };
  function Mi(e, t) {
    if ((void 0 === t && (t = !1), !Array.isArray(e))) return e;
    var n = '';
    if (Array.isArray(e[0]))
      for (var i = 0; i < e.length && '!important' !== e[i]; i++)
        n && (n += ', '), (n += Oi(e[i], ' '));
    else n = Oi(e, ', ');
    return t || '!important' !== e[e.length - 1] || (n += ' !important'), n;
  }
  function Pi(e, t) {
    for (var n = '', i = 0; i < t; i++) n += '  ';
    return n + e;
  }
  function Ri(e, t, n) {
    void 0 === n && (n = {});
    var i = '';
    if (!t) return i;
    var r = n.indent,
      o = void 0 === r ? 0 : r,
      a = t.fallbacks;
    if ((e && o++, a))
      if (Array.isArray(a))
        for (var s = 0; s < a.length; s++) {
          var l = a[s];
          for (var c in l) {
            var u = l[c];
            null != u && (i && (i += '\n'), (i += '' + Pi(c + ': ' + Mi(u) + ';', o)));
          }
        }
      else
        for (var d in a) {
          var h = a[d];
          null != h && (i && (i += '\n'), (i += '' + Pi(d + ': ' + Mi(h) + ';', o)));
        }
    for (var p in t) {
      var f = t[p];
      null != f &&
        'fallbacks' !== p &&
        (i && (i += '\n'), (i += '' + Pi(p + ': ' + Mi(f) + ';', o)));
    }
    return (i || n.allowEmpty) && e
      ? (i && (i = '\n' + i + '\n'), Pi(e + ' {' + i, --o) + Pi('}', o))
      : i;
  }
  var Ai = /([[\].#*$><+~=|^:(),"'`\s])/g,
    Ii = 'undefined' != typeof CSS && CSS.escape,
    Li = function (e) {
      return Ii ? Ii(e) : e.replace(Ai, '\\$1');
    },
    zi = (function () {
      function e(e, t, n) {
        (this.type = 'style'),
          (this.key = void 0),
          (this.isProcessed = !1),
          (this.style = void 0),
          (this.renderer = void 0),
          (this.renderable = void 0),
          (this.options = void 0);
        var i = n.sheet,
          r = n.Renderer;
        (this.key = e),
          (this.options = n),
          (this.style = t),
          i ? (this.renderer = i.renderer) : r && (this.renderer = new r());
      }
      return (
        (e.prototype.prop = function (e, t, n) {
          if (void 0 === t) return this.style[e];
          var i = !!n && n.force;
          if (!i && this.style[e] === t) return this;
          var r = t;
          (n && !1 === n.process) || (r = this.options.jss.plugins.onChangeValue(t, e, this));
          var o = null == r || !1 === r,
            a = e in this.style;
          if (o && !a && !i) return this;
          var s = o && a;
          if ((s ? delete this.style[e] : (this.style[e] = r), this.renderable && this.renderer))
            return (
              s
                ? this.renderer.removeProperty(this.renderable, e)
                : this.renderer.setProperty(this.renderable, e, r),
              this
            );
          var l = this.options.sheet;
          return l && l.attached, this;
        }),
        e
      );
    })(),
    Di = (function (e) {
      function t(t, n, i) {
        var r;
        ((r = e.call(this, t, n, i) || this).selectorText = void 0),
          (r.id = void 0),
          (r.renderable = void 0);
        var o = i.selector,
          a = i.scoped,
          s = i.sheet,
          l = i.generateId;
        return (
          o
            ? (r.selectorText = o)
            : !1 !== a && ((r.id = l(Ci(Ci(r)), s)), (r.selectorText = '.' + Li(r.id))),
          r
        );
      }
      Si(t, e);
      var n = t.prototype;
      return (
        (n.applyTo = function (e) {
          var t = this.renderer;
          if (t) {
            var n = this.toJSON();
            for (var i in n) t.setProperty(e, i, n[i]);
          }
          return this;
        }),
        (n.toJSON = function () {
          var e = {};
          for (var t in this.style) {
            var n = this.style[t];
            'object' != typeof n ? (e[t] = n) : Array.isArray(n) && (e[t] = Mi(n));
          }
          return e;
        }),
        (n.toString = function (e) {
          var t = this.options.sheet,
            n = !!t && t.options.link ? gt({}, e, { allowEmpty: !0 }) : e;
          return Ri(this.selectorText, this.style, n);
        }),
        xi(t, [
          {
            key: 'selector',
            set: function (e) {
              if (e !== this.selectorText) {
                this.selectorText = e;
                var t = this.renderer,
                  n = this.renderable;
                if (n && t) t.setSelector(n, e) || t.replaceRule(n, this);
              }
            },
            get: function () {
              return this.selectorText;
            },
          },
        ]),
        t
      );
    })(zi),
    ji = {
      onCreateRule: function (e, t, n) {
        return '@' === e[0] || (n.parent && 'keyframes' === n.parent.type) ? null : new Di(e, t, n);
      },
    },
    Ni = { indent: 1, children: !0 },
    Fi = /@([\w-]+)/,
    Wi = (function () {
      function e(e, t, n) {
        (this.type = 'conditional'),
          (this.at = void 0),
          (this.key = void 0),
          (this.query = void 0),
          (this.rules = void 0),
          (this.options = void 0),
          (this.isProcessed = !1),
          (this.renderable = void 0),
          (this.key = e),
          (this.query = n.name);
        var i = e.match(Fi);
        for (var r in ((this.at = i ? i[1] : 'unknown'),
        (this.options = n),
        (this.rules = new lr(gt({}, n, { parent: this }))),
        t))
          this.rules.add(r, t[r]);
        this.rules.process();
      }
      var t = e.prototype;
      return (
        (t.getRule = function (e) {
          return this.rules.get(e);
        }),
        (t.indexOf = function (e) {
          return this.rules.indexOf(e);
        }),
        (t.addRule = function (e, t, n) {
          var i = this.rules.add(e, t, n);
          return i ? (this.options.jss.plugins.onProcessRule(i), i) : null;
        }),
        (t.toString = function (e) {
          if (
            (void 0 === e && (e = Ni),
            null == e.indent && (e.indent = Ni.indent),
            null == e.children && (e.children = Ni.children),
            !1 === e.children)
          )
            return this.query + ' {}';
          var t = this.rules.toString(e);
          return t ? this.query + ' {\n' + t + '\n}' : '';
        }),
        e
      );
    })(),
    Bi = /@media|@supports\s+/,
    Hi = {
      onCreateRule: function (e, t, n) {
        return Bi.test(e) ? new Wi(e, t, n) : null;
      },
    },
    qi = { indent: 1, children: !0 },
    Vi = /@keyframes\s+([\w-]+)/,
    Ui = (function () {
      function e(e, t, n) {
        (this.type = 'keyframes'),
          (this.at = '@keyframes'),
          (this.key = void 0),
          (this.name = void 0),
          (this.id = void 0),
          (this.rules = void 0),
          (this.options = void 0),
          (this.isProcessed = !1),
          (this.renderable = void 0);
        var i = e.match(Vi);
        i && i[1] ? (this.name = i[1]) : (this.name = 'noname'),
          (this.key = this.type + '-' + this.name),
          (this.options = n);
        var r = n.scoped,
          o = n.sheet,
          a = n.generateId;
        for (var s in ((this.id = !1 === r ? this.name : Li(a(this, o))),
        (this.rules = new lr(gt({}, n, { parent: this }))),
        t))
          this.rules.add(s, t[s], gt({}, n, { parent: this }));
        this.rules.process();
      }
      return (
        (e.prototype.toString = function (e) {
          if (
            (void 0 === e && (e = qi),
            null == e.indent && (e.indent = qi.indent),
            null == e.children && (e.children = qi.children),
            !1 === e.children)
          )
            return this.at + ' ' + this.id + ' {}';
          var t = this.rules.toString(e);
          return t && (t = '\n' + t + '\n'), this.at + ' ' + this.id + ' {' + t + '}';
        }),
        e
      );
    })(),
    $i = /@keyframes\s+/,
    Gi = /\$([\w-]+)/g,
    Zi = function (e, t) {
      return 'string' == typeof e
        ? e.replace(Gi, function (e, n) {
            return n in t ? t[n] : e;
          })
        : e;
    },
    Yi = function (e, t, n) {
      var i = e[t],
        r = Zi(i, n);
      r !== i && (e[t] = r);
    },
    Xi = {
      onCreateRule: function (e, t, n) {
        return 'string' == typeof e && $i.test(e) ? new Ui(e, t, n) : null;
      },
      onProcessStyle: function (e, t, n) {
        return 'style' === t.type && n
          ? ('animation-name' in e && Yi(e, 'animation-name', n.keyframes),
            'animation' in e && Yi(e, 'animation', n.keyframes),
            e)
          : e;
      },
      onChangeValue: function (e, t, n) {
        var i = n.options.sheet;
        if (!i) return e;
        switch (t) {
          case 'animation':
          case 'animation-name':
            return Zi(e, i.keyframes);
          default:
            return e;
        }
      },
    },
    Ki = (function (e) {
      function t() {
        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        return ((t = e.call.apply(e, [this].concat(i)) || this).renderable = void 0), t;
      }
      return (
        Si(t, e),
        (t.prototype.toString = function (e) {
          var t = this.options.sheet,
            n = !!t && t.options.link ? gt({}, e, { allowEmpty: !0 }) : e;
          return Ri(this.key, this.style, n);
        }),
        t
      );
    })(zi),
    Ji = {
      onCreateRule: function (e, t, n) {
        return n.parent && 'keyframes' === n.parent.type ? new Ki(e, t, n) : null;
      },
    },
    Qi = (function () {
      function e(e, t, n) {
        (this.type = 'font-face'),
          (this.at = '@font-face'),
          (this.key = void 0),
          (this.style = void 0),
          (this.options = void 0),
          (this.isProcessed = !1),
          (this.renderable = void 0),
          (this.key = e),
          (this.style = t),
          (this.options = n);
      }
      return (
        (e.prototype.toString = function (e) {
          if (Array.isArray(this.style)) {
            for (var t = '', n = 0; n < this.style.length; n++)
              (t += Ri(this.key, this.style[n])), this.style[n + 1] && (t += '\n');
            return t;
          }
          return Ri(this.key, this.style, e);
        }),
        e
      );
    })(),
    er = {
      onCreateRule: function (e, t, n) {
        return '@font-face' === e ? new Qi(e, t, n) : null;
      },
    },
    tr = (function () {
      function e(e, t, n) {
        (this.type = 'viewport'),
          (this.at = '@viewport'),
          (this.key = void 0),
          (this.style = void 0),
          (this.options = void 0),
          (this.isProcessed = !1),
          (this.renderable = void 0),
          (this.key = e),
          (this.style = t),
          (this.options = n);
      }
      return (
        (e.prototype.toString = function (e) {
          return Ri(this.key, this.style, e);
        }),
        e
      );
    })(),
    nr = {
      onCreateRule: function (e, t, n) {
        return '@viewport' === e || '@-ms-viewport' === e ? new tr(e, t, n) : null;
      },
    },
    ir = (function () {
      function e(e, t, n) {
        (this.type = 'simple'),
          (this.key = void 0),
          (this.value = void 0),
          (this.options = void 0),
          (this.isProcessed = !1),
          (this.renderable = void 0),
          (this.key = e),
          (this.value = t),
          (this.options = n);
      }
      return (
        (e.prototype.toString = function (e) {
          if (Array.isArray(this.value)) {
            for (var t = '', n = 0; n < this.value.length; n++)
              (t += this.key + ' ' + this.value[n] + ';'), this.value[n + 1] && (t += '\n');
            return t;
          }
          return this.key + ' ' + this.value + ';';
        }),
        e
      );
    })(),
    rr = { '@charset': !0, '@import': !0, '@namespace': !0 },
    or = [
      ji,
      Hi,
      Xi,
      Ji,
      er,
      nr,
      {
        onCreateRule: function (e, t, n) {
          return e in rr ? new ir(e, t, n) : null;
        },
      },
    ],
    ar = { process: !0 },
    sr = { force: !0, process: !0 },
    lr = (function () {
      function e(e) {
        (this.map = {}),
          (this.raw = {}),
          (this.index = []),
          (this.counter = 0),
          (this.options = void 0),
          (this.classes = void 0),
          (this.keyframes = void 0),
          (this.options = e),
          (this.classes = e.classes),
          (this.keyframes = e.keyframes);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, n) {
          var i = this.options,
            r = i.parent,
            o = i.sheet,
            a = i.jss,
            s = i.Renderer,
            l = i.generateId,
            c = i.scoped,
            u = gt(
              {
                classes: this.classes,
                parent: r,
                sheet: o,
                jss: a,
                Renderer: s,
                generateId: l,
                scoped: c,
                name: e,
              },
              n
            ),
            d = e;
          e in this.raw && (d = e + '-d' + this.counter++),
            (this.raw[d] = t),
            d in this.classes && (u.selector = '.' + Li(this.classes[d]));
          var h = ki(d, t, u);
          if (!h) return null;
          this.register(h);
          var p = void 0 === u.index ? this.index.length : u.index;
          return this.index.splice(p, 0, h), h;
        }),
        (t.get = function (e) {
          return this.map[e];
        }),
        (t.remove = function (e) {
          this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
        }),
        (t.indexOf = function (e) {
          return this.index.indexOf(e);
        }),
        (t.process = function () {
          var e = this.options.jss.plugins;
          this.index.slice(0).forEach(e.onProcessRule, e);
        }),
        (t.register = function (e) {
          (this.map[e.key] = e),
            e instanceof Di
              ? ((this.map[e.selector] = e), e.id && (this.classes[e.key] = e.id))
              : e instanceof Ui && this.keyframes && (this.keyframes[e.name] = e.id);
        }),
        (t.unregister = function (e) {
          delete this.map[e.key],
            e instanceof Di
              ? (delete this.map[e.selector], delete this.classes[e.key])
              : e instanceof Ui && delete this.keyframes[e.name];
        }),
        (t.update = function () {
          var e, t, n;
          if (
            ('string' == typeof (arguments.length <= 0 ? void 0 : arguments[0])
              ? ((e = arguments.length <= 0 ? void 0 : arguments[0]),
                (t = arguments.length <= 1 ? void 0 : arguments[1]),
                (n = arguments.length <= 2 ? void 0 : arguments[2]))
              : ((t = arguments.length <= 0 ? void 0 : arguments[0]),
                (n = arguments.length <= 1 ? void 0 : arguments[1]),
                (e = null)),
            e)
          )
            this.updateOne(this.map[e], t, n);
          else for (var i = 0; i < this.index.length; i++) this.updateOne(this.index[i], t, n);
        }),
        (t.updateOne = function (t, n, i) {
          void 0 === i && (i = ar);
          var r = this.options,
            o = r.jss.plugins,
            a = r.sheet;
          if (t.rules instanceof e) t.rules.update(n, i);
          else {
            var s = t,
              l = s.style;
            if ((o.onUpdate(n, t, a, i), i.process && l && l !== s.style)) {
              for (var c in (o.onProcessStyle(s.style, s, a), s.style)) {
                var u = s.style[c];
                u !== l[c] && s.prop(c, u, sr);
              }
              for (var d in l) {
                var h = s.style[d],
                  p = l[d];
                null == h && h !== p && s.prop(d, null, sr);
              }
            }
          }
        }),
        (t.toString = function (e) {
          for (
            var t = '', n = this.options.sheet, i = !!n && n.options.link, r = 0;
            r < this.index.length;
            r++
          ) {
            var o = this.index[r].toString(e);
            (o || i) && (t && (t += '\n'), (t += o));
          }
          return t;
        }),
        e
      );
    })(),
    cr = (function () {
      function e(e, t) {
        for (var n in ((this.options = void 0),
        (this.deployed = void 0),
        (this.attached = void 0),
        (this.rules = void 0),
        (this.renderer = void 0),
        (this.classes = void 0),
        (this.keyframes = void 0),
        (this.queue = void 0),
        (this.attached = !1),
        (this.deployed = !1),
        (this.classes = {}),
        (this.keyframes = {}),
        (this.options = gt({}, t, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes,
        })),
        t.Renderer && (this.renderer = new t.Renderer(this)),
        (this.rules = new lr(this.options)),
        e))
          this.rules.add(n, e[n]);
        this.rules.process();
      }
      var t = e.prototype;
      return (
        (t.attach = function () {
          return (
            this.attached ||
              (this.renderer && this.renderer.attach(),
              (this.attached = !0),
              this.deployed || this.deploy()),
            this
          );
        }),
        (t.detach = function () {
          return this.attached
            ? (this.renderer && this.renderer.detach(), (this.attached = !1), this)
            : this;
        }),
        (t.addRule = function (e, t, n) {
          var i = this.queue;
          this.attached && !i && (this.queue = []);
          var r = this.rules.add(e, t, n);
          return r
            ? (this.options.jss.plugins.onProcessRule(r),
              this.attached
                ? this.deployed
                  ? (i
                      ? i.push(r)
                      : (this.insertRule(r),
                        this.queue &&
                          (this.queue.forEach(this.insertRule, this), (this.queue = void 0))),
                    r)
                  : r
                : ((this.deployed = !1), r))
            : null;
        }),
        (t.insertRule = function (e) {
          this.renderer && this.renderer.insertRule(e);
        }),
        (t.addRules = function (e, t) {
          var n = [];
          for (var i in e) {
            var r = this.addRule(i, e[i], t);
            r && n.push(r);
          }
          return n;
        }),
        (t.getRule = function (e) {
          return this.rules.get(e);
        }),
        (t.deleteRule = function (e) {
          var t = 'object' == typeof e ? e : this.rules.get(e);
          return (
            !!t &&
            (this.rules.remove(t),
            !(this.attached && t.renderable && this.renderer) ||
              this.renderer.deleteRule(t.renderable))
          );
        }),
        (t.indexOf = function (e) {
          return this.rules.indexOf(e);
        }),
        (t.deploy = function () {
          return this.renderer && this.renderer.deploy(), (this.deployed = !0), this;
        }),
        (t.update = function () {
          var e;
          return (e = this.rules).update.apply(e, arguments), this;
        }),
        (t.updateOne = function (e, t, n) {
          return this.rules.updateOne(e, t, n), this;
        }),
        (t.toString = function (e) {
          return this.rules.toString(e);
        }),
        e
      );
    })(),
    ur = (function () {
      function e() {
        (this.plugins = { internal: [], external: [] }), (this.registry = void 0);
      }
      var t = e.prototype;
      return (
        (t.onCreateRule = function (e, t, n) {
          for (var i = 0; i < this.registry.onCreateRule.length; i++) {
            var r = this.registry.onCreateRule[i](e, t, n);
            if (r) return r;
          }
          return null;
        }),
        (t.onProcessRule = function (e) {
          if (!e.isProcessed) {
            for (var t = e.options.sheet, n = 0; n < this.registry.onProcessRule.length; n++)
              this.registry.onProcessRule[n](e, t);
            e.style && this.onProcessStyle(e.style, e, t), (e.isProcessed = !0);
          }
        }),
        (t.onProcessStyle = function (e, t, n) {
          for (var i = 0; i < this.registry.onProcessStyle.length; i++)
            t.style = this.registry.onProcessStyle[i](t.style, t, n);
        }),
        (t.onProcessSheet = function (e) {
          for (var t = 0; t < this.registry.onProcessSheet.length; t++)
            this.registry.onProcessSheet[t](e);
        }),
        (t.onUpdate = function (e, t, n, i) {
          for (var r = 0; r < this.registry.onUpdate.length; r++)
            this.registry.onUpdate[r](e, t, n, i);
        }),
        (t.onChangeValue = function (e, t, n) {
          for (var i = e, r = 0; r < this.registry.onChangeValue.length; r++)
            i = this.registry.onChangeValue[r](i, t, n);
          return i;
        }),
        (t.use = function (e, t) {
          void 0 === t && (t = { queue: 'external' });
          var n = this.plugins[t.queue];
          -1 === n.indexOf(e) &&
            (n.push(e),
            (this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(
              function (e, t) {
                for (var n in t) n in e && e[n].push(t[n]);
                return e;
              },
              {
                onCreateRule: [],
                onProcessRule: [],
                onProcessStyle: [],
                onProcessSheet: [],
                onChangeValue: [],
                onUpdate: [],
              }
            )));
        }),
        e
      );
    })(),
    dr = (function () {
      function e() {
        this.registry = [];
      }
      var t = e.prototype;
      return (
        (t.add = function (e) {
          var t = this.registry,
            n = e.options.index;
          if (-1 === t.indexOf(e))
            if (0 === t.length || n >= this.index) t.push(e);
            else
              for (var i = 0; i < t.length; i++)
                if (t[i].options.index > n) return void t.splice(i, 0, e);
        }),
        (t.reset = function () {
          this.registry = [];
        }),
        (t.remove = function (e) {
          var t = this.registry.indexOf(e);
          this.registry.splice(t, 1);
        }),
        (t.toString = function (e) {
          for (
            var t = void 0 === e ? {} : e, n = t.attached, i = ft(t, ['attached']), r = '', o = 0;
            o < this.registry.length;
            o++
          ) {
            var a = this.registry[o];
            (null != n && a.attached !== n) || (r && (r += '\n'), (r += a.toString(i)));
          }
          return r;
        }),
        xi(e, [
          {
            key: 'index',
            get: function () {
              return 0 === this.registry.length
                ? 0
                : this.registry[this.registry.length - 1].options.index;
            },
          },
        ]),
        e
      );
    })(),
    hr = new dr(),
    pr =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')();
  null == pr['2f1acc6c3a606b082e5eef5e54414ffb'] && (pr['2f1acc6c3a606b082e5eef5e54414ffb'] = 0);
  var fr = pr['2f1acc6c3a606b082e5eef5e54414ffb']++,
    mr = function (e) {
      void 0 === e && (e = {});
      var t = 0;
      return function (n, i) {
        t += 1;
        var r = '',
          o = '';
        return (
          i &&
            (i.options.classNamePrefix && (o = i.options.classNamePrefix),
            null != i.options.jss.id && (r = String(i.options.jss.id))),
          e.minify
            ? '' + (o || 'c') + fr + r + t
            : o + n.key + '-' + fr + (r ? '-' + r : '') + '-' + t
        );
      };
    },
    vr = function (e) {
      var t;
      return function () {
        return t || (t = e()), t;
      };
    };
  function gr(e, t) {
    try {
      return e.attributeStyleMap ? e.attributeStyleMap.get(t) : e.style.getPropertyValue(t);
    } catch (e) {
      return '';
    }
  }
  function yr(e, t, n) {
    try {
      var i = n;
      if (Array.isArray(n) && ((i = Mi(n, !0)), '!important' === n[n.length - 1]))
        return e.style.setProperty(t, i, 'important'), !0;
      e.attributeStyleMap ? e.attributeStyleMap.set(t, i) : e.style.setProperty(t, i);
    } catch (e) {
      return !1;
    }
    return !0;
  }
  function br(e, t) {
    try {
      e.attributeStyleMap ? e.attributeStyleMap.delete(t) : e.style.removeProperty(t);
    } catch (e) {}
  }
  function wr(e, t) {
    return (e.selectorText = t), e.selectorText === t;
  }
  var _r = vr(function () {
    return document.querySelector('head');
  });
  function xr(e) {
    var t = hr.registry;
    if (t.length > 0) {
      var n = (function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (
            i.attached &&
            i.options.index > t.index &&
            i.options.insertionPoint === t.insertionPoint
          )
            return i;
        }
        return null;
      })(t, e);
      if (n && n.renderer)
        return { parent: n.renderer.element.parentNode, node: n.renderer.element };
      if (
        (n = (function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var i = e[n];
            if (i.attached && i.options.insertionPoint === t.insertionPoint) return i;
          }
          return null;
        })(t, e)) &&
        n.renderer
      )
        return { parent: n.renderer.element.parentNode, node: n.renderer.element.nextSibling };
    }
    var i = e.insertionPoint;
    if (i && 'string' == typeof i) {
      var r = (function (e) {
        for (var t = _r(), n = 0; n < t.childNodes.length; n++) {
          var i = t.childNodes[n];
          if (8 === i.nodeType && i.nodeValue.trim() === e) return i;
        }
        return null;
      })(i);
      if (r) return { parent: r.parentNode, node: r.nextSibling };
    }
    return !1;
  }
  var Sr = vr(function () {
      var e = document.querySelector('meta[property="csp-nonce"]');
      return e ? e.getAttribute('content') : null;
    }),
    Cr = function (e, t, n) {
      var i = e.cssRules.length;
      (void 0 === n || n > i) && (n = i);
      try {
        if ('insertRule' in e) e.insertRule(t, n);
        else if ('appendRule' in e) {
          e.appendRule(t);
        }
      } catch (e) {
        return !1;
      }
      return e.cssRules[n];
    },
    Er = (function () {
      function e(e) {
        (this.getPropertyValue = gr),
          (this.setProperty = yr),
          (this.removeProperty = br),
          (this.setSelector = wr),
          (this.element = void 0),
          (this.sheet = void 0),
          (this.hasInsertedRules = !1),
          e && hr.add(e),
          (this.sheet = e);
        var t,
          n = this.sheet ? this.sheet.options : {},
          i = n.media,
          r = n.meta,
          o = n.element;
        (this.element = o || (((t = document.createElement('style')).textContent = '\n'), t)),
          this.element.setAttribute('data-jss', ''),
          i && this.element.setAttribute('media', i),
          r && this.element.setAttribute('data-meta', r);
        var a = Sr();
        a && this.element.setAttribute('nonce', a);
      }
      var t = e.prototype;
      return (
        (t.attach = function () {
          if (!this.element.parentNode && this.sheet) {
            !(function (e, t) {
              var n = t.insertionPoint,
                i = xr(t);
              if (!1 !== i && i.parent) i.parent.insertBefore(e, i.node);
              else if (n && 'number' == typeof n.nodeType) {
                var r = n,
                  o = r.parentNode;
                o && o.insertBefore(e, r.nextSibling);
              } else _r().appendChild(e);
            })(this.element, this.sheet.options);
            var e = Boolean(this.sheet && this.sheet.deployed);
            this.hasInsertedRules && e && ((this.hasInsertedRules = !1), this.deploy());
          }
        }),
        (t.detach = function () {
          var e = this.element.parentNode;
          e && e.removeChild(this.element);
        }),
        (t.deploy = function () {
          var e = this.sheet;
          e &&
            (e.options.link
              ? this.insertRules(e.rules)
              : (this.element.textContent = '\n' + e.toString() + '\n'));
        }),
        (t.insertRules = function (e, t) {
          for (var n = 0; n < e.index.length; n++) this.insertRule(e.index[n], n, t);
        }),
        (t.insertRule = function (e, t, n) {
          if ((void 0 === n && (n = this.element.sheet), e.rules)) {
            var i = e,
              r = n;
            return (
              (('conditional' !== e.type && 'keyframes' !== e.type) ||
                !1 !== (r = Cr(n, i.toString({ children: !1 }), t))) &&
              (this.insertRules(i.rules, r), r)
            );
          }
          if (e.renderable && e.renderable.parentStyleSheet === this.element.sheet)
            return e.renderable;
          var o = e.toString();
          if (!o) return !1;
          var a = Cr(n, o, t);
          return !1 !== a && ((this.hasInsertedRules = !0), (e.renderable = a), a);
        }),
        (t.deleteRule = function (e) {
          var t = this.element.sheet,
            n = this.indexOf(e);
          return -1 !== n && (t.deleteRule(n), !0);
        }),
        (t.indexOf = function (e) {
          for (var t = this.element.sheet.cssRules, n = 0; n < t.length; n++)
            if (e === t[n]) return n;
          return -1;
        }),
        (t.replaceRule = function (e, t) {
          var n = this.indexOf(e);
          return -1 !== n && (this.element.sheet.deleteRule(n), this.insertRule(t, n));
        }),
        (t.getRules = function () {
          return this.element.sheet.cssRules;
        }),
        e
      );
    })(),
    Tr = 0,
    kr = (function () {
      function e(e) {
        (this.id = Tr++),
          (this.version = '10.0.4'),
          (this.plugins = new ur()),
          (this.options = {
            id: { minify: !1 },
            createGenerateId: mr,
            Renderer: wi ? Er : null,
            plugins: [],
          }),
          (this.generateId = mr({ minify: !1 }));
        for (var t = 0; t < or.length; t++) this.plugins.use(or[t], { queue: 'internal' });
        this.setup(e);
      }
      var t = e.prototype;
      return (
        (t.setup = function (e) {
          return (
            void 0 === e && (e = {}),
            e.createGenerateId && (this.options.createGenerateId = e.createGenerateId),
            e.id && (this.options.id = gt({}, this.options.id, e.id)),
            (e.createGenerateId || e.id) &&
              (this.generateId = this.options.createGenerateId(this.options.id)),
            null != e.insertionPoint && (this.options.insertionPoint = e.insertionPoint),
            'Renderer' in e && (this.options.Renderer = e.Renderer),
            e.plugins && this.use.apply(this, e.plugins),
            this
          );
        }),
        (t.createStyleSheet = function (e, t) {
          void 0 === t && (t = {});
          var n = t.index;
          'number' != typeof n && (n = 0 === hr.index ? 0 : hr.index + 1);
          var i = new cr(
            e,
            gt({}, t, {
              jss: this,
              generateId: t.generateId || this.generateId,
              insertionPoint: this.options.insertionPoint,
              Renderer: this.options.Renderer,
              index: n,
            })
          );
          return this.plugins.onProcessSheet(i), i;
        }),
        (t.removeStyleSheet = function (e) {
          return e.detach(), hr.remove(e), this;
        }),
        (t.createRule = function (e, t, n) {
          if ((void 0 === t && (t = {}), void 0 === n && (n = {}), 'object' == typeof e))
            return this.createRule(void 0, e, t);
          var i = gt({}, n, { name: e, jss: this, Renderer: this.options.Renderer });
          i.generateId || (i.generateId = this.generateId),
            i.classes || (i.classes = {}),
            i.keyframes || (i.keyframes = {});
          var r = ki(e, t, i);
          return r && this.plugins.onProcessRule(r), r;
        }),
        (t.use = function () {
          for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
          return (
            n.forEach(function (t) {
              e.plugins.use(t);
            }),
            this
          );
        }),
        e
      );
    })();
  var Or = 'undefined' != typeof CSS && CSS && 'number' in CSS,
    Mr = function (e) {
      return new kr(e);
    },
    Pr = (Mr(), Date.now()),
    Rr = 'fnValues' + Pr,
    Ar = 'fnStyle' + ++Pr;
  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */ var Ir = (function () {
      function e(e, t, n) {
        for (var i in ((this.type = 'global'),
        (this.at = '@global'),
        (this.rules = void 0),
        (this.options = void 0),
        (this.key = void 0),
        (this.isProcessed = !1),
        (this.key = e),
        (this.options = n),
        (this.rules = new lr(gt({}, n, { parent: this }))),
        t))
          this.rules.add(i, t[i]);
        this.rules.process();
      }
      var t = e.prototype;
      return (
        (t.getRule = function (e) {
          return this.rules.get(e);
        }),
        (t.addRule = function (e, t, n) {
          var i = this.rules.add(e, t, n);
          return this.options.jss.plugins.onProcessRule(i), i;
        }),
        (t.indexOf = function (e) {
          return this.rules.indexOf(e);
        }),
        (t.toString = function () {
          return this.rules.toString();
        }),
        e
      );
    })(),
    Lr = (function () {
      function e(e, t, n) {
        (this.type = 'global'),
          (this.at = '@global'),
          (this.options = void 0),
          (this.rule = void 0),
          (this.isProcessed = !1),
          (this.key = void 0),
          (this.key = e),
          (this.options = n);
        var i = e.substr('@global '.length);
        this.rule = n.jss.createRule(i, t, gt({}, n, { parent: this }));
      }
      return (
        (e.prototype.toString = function (e) {
          return this.rule ? this.rule.toString(e) : '';
        }),
        e
      );
    })(),
    zr = /\s*,\s*/g;
  function Dr(e, t) {
    for (var n = e.split(zr), i = '', r = 0; r < n.length; r++)
      (i += t + ' ' + n[r].trim()), n[r + 1] && (i += ', ');
    return i;
  }
  function jr() {
    return {
      onCreateRule: function (e, t, n) {
        if (!e) return null;
        if ('@global' === e) return new Ir(e, t, n);
        if ('@' === e[0] && '@global ' === e.substr(0, '@global '.length)) return new Lr(e, t, n);
        var i = n.parent;
        return (
          i &&
            ('global' === i.type || (i.options.parent && 'global' === i.options.parent.type)) &&
            (n.scoped = !1),
          !1 === n.scoped && (n.selector = e),
          null
        );
      },
      onProcessRule: function (e) {
        'style' === e.type &&
          ((function (e) {
            var t = e.options,
              n = e.style,
              i = n ? n['@global'] : null;
            if (i) {
              for (var r in i) t.sheet.addRule(r, i[r], gt({}, t, { selector: Dr(r, e.selector) }));
              delete n['@global'];
            }
          })(e),
          (function (e) {
            var t = e.options,
              n = e.style;
            for (var i in n)
              if ('@' === i[0] && '@global' === i.substr(0, '@global'.length)) {
                var r = Dr(i.substr('@global'.length), e.selector);
                t.sheet.addRule(r, n[i], gt({}, t, { selector: r })), delete n[i];
              }
          })(e));
      },
    };
  }
  var Nr = /\s*,\s*/g,
    Fr = /&/g,
    Wr = /\$([\w-]+)/g;
  function Br() {
    function e(e, t) {
      return function (n, i) {
        var r = e.getRule(i) || (t && t.getRule(i));
        return r ? (r = r).selector : i;
      };
    }
    function t(e, t) {
      for (var n = t.split(Nr), i = e.split(Nr), r = '', o = 0; o < n.length; o++)
        for (var a = n[o], s = 0; s < i.length; s++) {
          var l = i[s];
          r && (r += ', '), (r += -1 !== l.indexOf('&') ? l.replace(Fr, a) : a + ' ' + l);
        }
      return r;
    }
    function n(e, t, n) {
      if (n) return gt({}, n, { index: n.index + 1 });
      var i = e.options.nestingLevel;
      i = void 0 === i ? 1 : i + 1;
      var r = gt({}, e.options, { nestingLevel: i, index: t.indexOf(e) + 1 });
      return delete r.name, r;
    }
    return {
      onProcessStyle: function (i, r, o) {
        if ('style' !== r.type) return i;
        var a,
          s,
          l = r,
          c = l.options.parent;
        for (var u in i) {
          var d = -1 !== u.indexOf('&'),
            h = '@' === u[0];
          if (d || h) {
            if (((a = n(l, c, a)), d)) {
              var p = t(u, l.selector);
              s || (s = e(c, o)),
                (p = p.replace(Wr, s)),
                c.addRule(p, i[u], gt({}, a, { selector: p }));
            } else h && c.addRule(u, {}, a).addRule(l.key, i[u], { selector: l.selector });
            delete i[u];
          }
        }
        return i;
      },
    };
  }
  var Hr = /[A-Z]/g,
    qr = /^ms-/,
    Vr = {};
  function Ur(e) {
    return '-' + e.toLowerCase();
  }
  function $r(e) {
    if (Vr.hasOwnProperty(e)) return Vr[e];
    var t = e.replace(Hr, Ur);
    return (Vr[e] = qr.test(t) ? '-' + t : t);
  }
  function Gr(e) {
    var t = {};
    for (var n in e) {
      t[0 === n.indexOf('--') ? n : $r(n)] = e[n];
    }
    return (
      e.fallbacks &&
        (Array.isArray(e.fallbacks)
          ? (t.fallbacks = e.fallbacks.map(Gr))
          : (t.fallbacks = Gr(e.fallbacks))),
      t
    );
  }
  var Zr = Or && CSS ? CSS.px : 'px',
    Yr = Or && CSS ? CSS.ms : 'ms',
    Xr = Or && CSS ? CSS.percent : '%';
  function Kr(e) {
    var t = /(-[a-z])/g,
      n = function (e) {
        return e[1].toUpperCase();
      },
      i = {};
    for (var r in e) (i[r] = e[r]), (i[r.replace(t, n)] = e[r]);
    return i;
  }
  var Jr = Kr({
    'animation-delay': Yr,
    'animation-duration': Yr,
    'background-position': Zr,
    'background-position-x': Zr,
    'background-position-y': Zr,
    'background-size': Zr,
    border: Zr,
    'border-bottom': Zr,
    'border-bottom-left-radius': Zr,
    'border-bottom-right-radius': Zr,
    'border-bottom-width': Zr,
    'border-left': Zr,
    'border-left-width': Zr,
    'border-radius': Zr,
    'border-right': Zr,
    'border-right-width': Zr,
    'border-top': Zr,
    'border-top-left-radius': Zr,
    'border-top-right-radius': Zr,
    'border-top-width': Zr,
    'border-width': Zr,
    margin: Zr,
    'margin-bottom': Zr,
    'margin-left': Zr,
    'margin-right': Zr,
    'margin-top': Zr,
    padding: Zr,
    'padding-bottom': Zr,
    'padding-left': Zr,
    'padding-right': Zr,
    'padding-top': Zr,
    'mask-position-x': Zr,
    'mask-position-y': Zr,
    'mask-size': Zr,
    height: Zr,
    width: Zr,
    'min-height': Zr,
    'max-height': Zr,
    'min-width': Zr,
    'max-width': Zr,
    bottom: Zr,
    left: Zr,
    top: Zr,
    right: Zr,
    'box-shadow': Zr,
    'text-shadow': Zr,
    'column-gap': Zr,
    'column-rule': Zr,
    'column-rule-width': Zr,
    'column-width': Zr,
    'font-size': Zr,
    'font-size-delta': Zr,
    'letter-spacing': Zr,
    'text-indent': Zr,
    'text-stroke': Zr,
    'text-stroke-width': Zr,
    'word-spacing': Zr,
    motion: Zr,
    'motion-offset': Zr,
    outline: Zr,
    'outline-offset': Zr,
    'outline-width': Zr,
    perspective: Zr,
    'perspective-origin-x': Xr,
    'perspective-origin-y': Xr,
    'transform-origin': Xr,
    'transform-origin-x': Xr,
    'transform-origin-y': Xr,
    'transform-origin-z': Xr,
    'transition-delay': Yr,
    'transition-duration': Yr,
    'vertical-align': Zr,
    'flex-basis': Zr,
    'shape-margin': Zr,
    size: Zr,
    grid: Zr,
    'grid-gap': Zr,
    'grid-row-gap': Zr,
    'grid-column-gap': Zr,
    'grid-template-rows': Zr,
    'grid-template-columns': Zr,
    'grid-auto-rows': Zr,
    'grid-auto-columns': Zr,
    'box-shadow-x': Zr,
    'box-shadow-y': Zr,
    'box-shadow-blur': Zr,
    'box-shadow-spread': Zr,
    'font-line-height': Zr,
    'text-shadow-x': Zr,
    'text-shadow-y': Zr,
    'text-shadow-blur': Zr,
  });
  function Qr(e, t, n) {
    if (!t) return t;
    if (Array.isArray(t)) for (var i = 0; i < t.length; i++) t[i] = Qr(e, t[i], n);
    else if ('object' == typeof t)
      if ('fallbacks' === e) for (var r in t) t[r] = Qr(r, t[r], n);
      else for (var o in t) t[o] = Qr(e + '-' + o, t[o], n);
    else if ('number' == typeof t)
      return n[e]
        ? '' + t + n[e]
        : Jr[e]
        ? 'function' == typeof Jr[e]
          ? Jr[e](t).toString()
          : '' + t + Jr[e]
        : t.toString();
    return t;
  }
  function eo(e) {
    void 0 === e && (e = {});
    var t = Kr(e);
    return {
      onProcessStyle: function (e, n) {
        if ('style' !== n.type) return e;
        for (var i in e) e[i] = Qr(i, e[i], t);
        return e;
      },
      onChangeValue: function (e, n) {
        return Qr(n, e, t);
      },
    };
  }
  function to(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
      })(e) ||
      (function (e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(e) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      })()
    );
  }
  var no = '',
    io = '',
    ro = '',
    oo = wi && 'ontouchstart' in document.documentElement;
  if (wi) {
    var ao = { Moz: '-moz-', ms: '-ms-', O: '-o-', Webkit: '-webkit-' },
      so = document.createElement('p').style;
    for (var lo in ao)
      if (lo + 'Transform' in so) {
        (no = lo), (io = ao[lo]);
        break;
      }
    'Webkit' === no && 'msHyphens' in so && ((no = 'ms'), (io = ao.ms), 'edge'),
      'Webkit' === no && '-apple-trailing-word' in so && (ro = 'apple');
  }
  var co = no,
    uo = io,
    ho = ro,
    po = oo;
  var fo = {
      noPrefill: ['appearance'],
      supportedProperty: function (e) {
        return 'appearance' === e && ('ms' === co ? '-webkit-' + e : uo + e);
      },
    },
    mo = {
      noPrefill: ['color-adjust'],
      supportedProperty: function (e) {
        return 'color-adjust' === e && ('Webkit' === co ? uo + 'print-' + e : e);
      },
    },
    vo = /[-\s]+(.)?/g;
  function go(e, t) {
    return t ? t.toUpperCase() : '';
  }
  function yo(e) {
    return e.replace(vo, go);
  }
  function bo(e) {
    return yo('-' + e);
  }
  var wo,
    _o = {
      noPrefill: ['mask'],
      supportedProperty: function (e, t) {
        if (!/^mask/.test(e)) return !1;
        if ('Webkit' === co) {
          if (yo('mask-image') in t) return e;
          if (co + bo('mask-image') in t) return uo + e;
        }
        return e;
      },
    },
    xo = {
      noPrefill: ['text-orientation'],
      supportedProperty: function (e) {
        return 'text-orientation' === e && ('apple' !== ho || po ? e : uo + e);
      },
    },
    So = {
      noPrefill: ['transform'],
      supportedProperty: function (e, t, n) {
        return 'transform' === e && (n.transform ? e : uo + e);
      },
    },
    Co = {
      noPrefill: ['transition'],
      supportedProperty: function (e, t, n) {
        return 'transition' === e && (n.transition ? e : uo + e);
      },
    },
    Eo = {
      noPrefill: ['writing-mode'],
      supportedProperty: function (e) {
        return 'writing-mode' === e && ('Webkit' === co || 'ms' === co ? uo + e : e);
      },
    },
    To = {
      noPrefill: ['user-select'],
      supportedProperty: function (e) {
        return 'user-select' === e && ('Moz' === co || 'ms' === co || 'apple' === ho ? uo + e : e);
      },
    },
    ko = {
      supportedProperty: function (e, t) {
        return (
          !!/^break-/.test(e) &&
          ('Webkit' === co
            ? 'WebkitColumn' + bo(e) in t && uo + 'column-' + e
            : 'Moz' === co && 'page' + bo(e) in t && 'page-' + e)
        );
      },
    },
    Oo = {
      supportedProperty: function (e, t) {
        if (!/^(border|margin|padding)-inline/.test(e)) return !1;
        if ('Moz' === co) return e;
        var n = e.replace('-inline', '');
        return co + bo(n) in t && uo + n;
      },
    },
    Mo = {
      supportedProperty: function (e, t) {
        return yo(e) in t && e;
      },
    },
    Po = {
      supportedProperty: function (e, t) {
        var n = bo(e);
        return '-' === e[0] || ('-' === e[0] && '-' === e[1])
          ? e
          : co + n in t
          ? uo + e
          : 'Webkit' !== co && 'Webkit' + n in t && '-webkit-' + e;
      },
    },
    Ro = {
      supportedProperty: function (e) {
        return 'scroll-snap' === e.substring(0, 11) && ('ms' === co ? '' + uo + e : e);
      },
    },
    Ao = {
      supportedProperty: function (e) {
        return 'overscroll-behavior' === e && ('ms' === co ? uo + 'scroll-chaining' : e);
      },
    },
    Io = {
      'flex-grow': 'flex-positive',
      'flex-shrink': 'flex-negative',
      'flex-basis': 'flex-preferred-size',
      'justify-content': 'flex-pack',
      order: 'flex-order',
      'align-items': 'flex-align',
      'align-content': 'flex-line-pack',
    },
    Lo = {
      supportedProperty: function (e, t) {
        var n = Io[e];
        return !!n && co + bo(n) in t && uo + n;
      },
    },
    zo = {
      flex: 'box-flex',
      'flex-grow': 'box-flex',
      'flex-direction': ['box-orient', 'box-direction'],
      order: 'box-ordinal-group',
      'align-items': 'box-align',
      'flex-flow': ['box-orient', 'box-direction'],
      'justify-content': 'box-pack',
    },
    Do = Object.keys(zo),
    jo = function (e) {
      return uo + e;
    },
    No = [
      fo,
      mo,
      _o,
      xo,
      So,
      Co,
      Eo,
      To,
      ko,
      Oo,
      Mo,
      Po,
      Ro,
      Ao,
      Lo,
      {
        supportedProperty: function (e, t, n) {
          var i = n.multiple;
          if (Do.indexOf(e) > -1) {
            var r = zo[e];
            if (!Array.isArray(r)) return co + bo(r) in t && uo + r;
            if (!i) return !1;
            for (var o = 0; o < r.length; o++) if (!(co + bo(r[0]) in t)) return !1;
            return r.map(jo);
          }
          return !1;
        },
      },
    ],
    Fo = No.filter(function (e) {
      return e.supportedProperty;
    }).map(function (e) {
      return e.supportedProperty;
    }),
    Wo = No.filter(function (e) {
      return e.noPrefill;
    }).reduce(function (e, t) {
      return e.push.apply(e, to(t.noPrefill)), e;
    }, []),
    Bo = {};
  if (wi) {
    wo = document.createElement('p');
    var Ho = window.getComputedStyle(document.documentElement, '');
    for (var qo in Ho) isNaN(qo) || (Bo[Ho[qo]] = Ho[qo]);
    Wo.forEach(function (e) {
      return delete Bo[e];
    });
  }
  function Vo(e, t) {
    if ((void 0 === t && (t = {}), !wo)) return e;
    if (null != Bo[e]) return Bo[e];
    ('transition' !== e && 'transform' !== e) || (t[e] = e in wo.style);
    for (var n = 0; n < Fo.length && ((Bo[e] = Fo[n](e, wo.style, t)), !Bo[e]); n++);
    try {
      wo.style[e] = '';
    } catch (e) {
      return !1;
    }
    return Bo[e];
  }
  var Uo,
    $o = {},
    Go = {
      transition: 1,
      'transition-property': 1,
      '-webkit-transition': 1,
      '-webkit-transition-property': 1,
    },
    Zo = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  function Yo(e, t, n) {
    if ('var' === t) return 'var';
    if ('all' === t) return 'all';
    if ('all' === n) return ', all';
    var i = t ? Vo(t) : ', ' + Vo(n);
    return i || t || n;
  }
  function Xo(e, t) {
    var n = t;
    if (!Uo || 'content' === e) return t;
    if ('string' != typeof n || !isNaN(parseInt(n, 10))) return n;
    var i = e + n;
    if (null != $o[i]) return $o[i];
    try {
      Uo.style[e] = n;
    } catch (e) {
      return ($o[i] = !1), !1;
    }
    if (Go[e]) n = n.replace(Zo, Yo);
    else if (
      '' === Uo.style[e] &&
      ('-ms-flex' === (n = uo + n) && (Uo.style[e] = '-ms-flexbox'),
      (Uo.style[e] = n),
      '' === Uo.style[e])
    )
      return ($o[i] = !1), !1;
    return (Uo.style[e] = ''), ($o[i] = n), $o[i];
  }
  function Ko() {
    function e(t) {
      for (var n in t) {
        var i = t[n];
        if ('fallbacks' === n && Array.isArray(i)) t[n] = i.map(e);
        else {
          var r = !1,
            o = Vo(n);
          o && o !== n && (r = !0);
          var a = !1,
            s = Xo(o, Mi(i));
          s && s !== i && (a = !0), (r || a) && (r && delete t[n], (t[o || n] = s || i));
        }
      }
      return t;
    }
    return {
      onProcessRule: function (e) {
        if ('keyframes' === e.type) {
          var t = e;
          t.at = '-' === (n = t.at)[1] || 'ms' === co ? n : '@' + uo + 'keyframes' + n.substr(10);
        }
        var n;
      },
      onProcessStyle: function (t, n) {
        return 'style' !== n.type ? t : e(t);
      },
      onChangeValue: function (e, t) {
        return Xo(t, Mi(e)) || e;
      },
    };
  }
  function Jo() {
    return {
      plugins: [
        {
          onCreateRule: function (e, t, n) {
            if ('function' != typeof t) return null;
            var i = ki(e, {}, n);
            return (i[Ar] = t), i;
          },
          onProcessStyle: function (e, t) {
            if (Rr in t || Ar in t) return e;
            var n = {};
            for (var i in e) {
              var r = e[i];
              'function' == typeof r && (delete e[i], (n[i] = r));
            }
            return (t[Rr] = n), e;
          },
          onUpdate: function (e, t, n, i) {
            var r = t,
              o = r[Ar];
            o && (r.style = o(e) || {});
            var a = r[Rr];
            if (a) for (var s in a) r.prop(s, a[s](e), i);
          },
        },
        jr(),
        Br(),
        {
          onProcessStyle: function (e) {
            if (Array.isArray(e)) {
              for (var t = 0; t < e.length; t++) e[t] = Gr(e[t]);
              return e;
            }
            return Gr(e);
          },
          onChangeValue: function (e, t, n) {
            if (0 === t.indexOf('--')) return e;
            var i = $r(t);
            return t === i ? e : (n.prop(i, e), null);
          },
        },
        eo(),
        'undefined' == typeof window ? null : Ko(),
        ((e = function (e, t) {
          return e.length === t.length ? (e > t ? 1 : -1) : e.length - t.length;
        }),
        {
          onProcessStyle: function (t, n) {
            if ('style' !== n.type) return t;
            for (var i = {}, r = Object.keys(t).sort(e), o = 0; o < r.length; o++)
              i[r[o]] = t[r[o]];
            return i;
          },
        }),
      ],
    };
    var e;
  }
  function Qo() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.baseClasses,
      n = e.newClasses;
    e.Component;
    if (!n) return t;
    var i = gt({}, t);
    return (
      Object.keys(n).forEach(function (e) {
        n[e] && (i[e] = ''.concat(t[e], ' ').concat(n[e]));
      }),
      i
    );
  }
  wi && (Uo = document.createElement('p'));
  var ea = {},
    ta = function (e, t, n, i) {
      var r = e.get(t);
      r || ((r = new Map()), e.set(t, r)), r.set(n, i);
    },
    na = function (e, t, n) {
      var i = e.get(t);
      return i ? i.get(n) : void 0;
    },
    ia = function (e, t, n) {
      e.get(t).delete(n);
    },
    ra = at.createContext(null);
  function oa() {
    return at.useContext(ra);
  }
  var aa = Mr(Jo()),
    sa = {
      disableGeneration: !1,
      generateClassName: gi(),
      jss: aa,
      sheetsCache: null,
      sheetsManager: new Map(),
      sheetsRegistry: null,
    },
    la = at.createContext(sa);
  function ca(e) {
    var t = 'function' == typeof e;
    return {
      create: function (n, i) {
        var r;
        try {
          r = t ? e(n) : e;
        } catch (e) {
          throw e;
        }
        if (!i || !n.overrides || !n.overrides[i]) return r;
        var o = n.overrides[i],
          a = gt({}, r);
        return (
          Object.keys(o).forEach(function (e) {
            a[e] = _t(a[e], o[e]);
          }),
          a
        );
      },
      options: {},
    };
  }
  var ua = -1e9;
  function da() {
    return (ua += 1);
  }
  function ha(e, t, n) {
    var i = e.state;
    if (e.stylesOptions.disableGeneration) return t || {};
    i.cacheClasses || (i.cacheClasses = { value: null, lastProp: null, lastJSS: {} });
    var r = !1;
    return (
      i.classes !== i.cacheClasses.lastJSS && ((i.cacheClasses.lastJSS = i.classes), (r = !0)),
      t !== i.cacheClasses.lastProp && ((i.cacheClasses.lastProp = t), (r = !0)),
      r &&
        (i.cacheClasses.value = Qo({
          baseClasses: i.cacheClasses.lastJSS,
          newClasses: t,
          Component: n,
        })),
      i.cacheClasses.value
    );
  }
  function pa(e, t) {
    var n = e.state,
      i = e.theme,
      r = e.stylesOptions,
      o = e.stylesCreator,
      a = e.name;
    if (!r.disableGeneration) {
      var s = na(r.sheetsManager, o, i);
      s ||
        ((s = { refs: 0, staticSheet: null, dynamicStyles: null }), ta(r.sheetsManager, o, i, s));
      var l = gt({}, o.options, {}, r, {
        theme: i,
        flip: 'boolean' == typeof r.flip ? r.flip : 'rtl' === i.direction,
      });
      l.generateId = l.serverGenerateClassName || l.generateClassName;
      var c = r.sheetsRegistry;
      if (0 === s.refs) {
        var u;
        r.sheetsCache && (u = na(r.sheetsCache, o, i));
        var d = o.create(i, a);
        u ||
          ((u = r.jss.createStyleSheet(d, gt({ link: !1 }, l))).attach(),
          r.sheetsCache && ta(r.sheetsCache, o, i, u)),
          c && c.add(u),
          (s.staticSheet = u),
          (s.dynamicStyles = (function e(t) {
            var n = null;
            for (var i in t) {
              var r = t[i],
                o = typeof r;
              if ('function' === o) n || (n = {}), (n[i] = r);
              else if ('object' === o && null !== r && !Array.isArray(r)) {
                var a = e(r);
                a && (n || (n = {}), (n[i] = a));
              }
            }
            return n;
          })(d));
      }
      if (s.dynamicStyles) {
        var h = r.jss.createStyleSheet(s.dynamicStyles, gt({ link: !0 }, l));
        h.update(t),
          h.attach(),
          (n.dynamicSheet = h),
          (n.classes = Qo({ baseClasses: s.staticSheet.classes, newClasses: h.classes })),
          c && c.add(h);
      } else n.classes = s.staticSheet.classes;
      s.refs += 1;
    }
  }
  function fa(e, t) {
    var n = e.state;
    n.dynamicSheet && n.dynamicSheet.update(t);
  }
  function ma(e) {
    var t = e.state,
      n = e.theme,
      i = e.stylesOptions,
      r = e.stylesCreator;
    if (!i.disableGeneration) {
      var o = na(i.sheetsManager, r, n);
      o.refs -= 1;
      var a = i.sheetsRegistry;
      0 === o.refs &&
        (ia(i.sheetsManager, r, n),
        i.jss.removeStyleSheet(o.staticSheet),
        a && a.remove(o.staticSheet)),
        t.dynamicSheet && (i.jss.removeStyleSheet(t.dynamicSheet), a && a.remove(t.dynamicSheet));
    }
  }
  function va(e, t) {
    var n,
      i = at.useRef([]),
      r = at.useMemo(function () {
        return {};
      }, t);
    i.current !== r && ((i.current = r), (n = e())),
      at.useEffect(
        function () {
          return function () {
            n && n();
          };
        },
        [r]
      );
  }
  function ga(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.name,
      i = t.classNamePrefix,
      r = t.Component,
      o = t.defaultTheme,
      a = void 0 === o ? ea : o,
      s = mt(t, ['name', 'classNamePrefix', 'Component', 'defaultTheme']),
      l = ca(e),
      c = n || i || 'makeStyles';
    return (
      (l.options = { index: da(), name: n, meta: c, classNamePrefix: c }),
      function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = oa() || a,
          i = gt({}, at.useContext(la), {}, s),
          o = at.useRef(),
          c = at.useRef();
        return (
          va(
            function () {
              var r = { name: n, state: {}, stylesCreator: l, stylesOptions: i, theme: t };
              return (
                pa(r, e),
                (c.current = !1),
                (o.current = r),
                function () {
                  ma(r);
                }
              );
            },
            [t, l]
          ),
          at.useEffect(function () {
            c.current && fa(o.current, e), (c.current = !0);
          }),
          ha(o.current, e.classes, r)
        );
      }
    );
  }
  function ya(e) {
    var t,
      n,
      i = '';
    if (e)
      if ('object' == typeof e)
        if (e.push)
          for (t = 0; t < e.length; t++) e[t] && (n = ya(e[t])) && (i && (i += ' '), (i += n));
        else for (t in e) e[t] && (n = ya(t)) && (i && (i += ' '), (i += n));
      else 'boolean' == typeof e || e.call || (i && (i += ' '), (i += e));
    return i;
  }
  var ba = function () {
      for (var e, t = 0, n = ''; t < arguments.length; )
        (e = ya(arguments[t++])) && (n && (n += ' '), (n += e));
      return n;
    },
    wa = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    _a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    xa = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    Sa = {};
  function Ca(e) {
    return Mn.isMemo(e) ? xa : Sa[e.$$typeof] || wa;
  }
  (Sa[Mn.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (Sa[Mn.Memo] = xa);
  var Ea = Object.defineProperty,
    Ta = Object.getOwnPropertyNames,
    ka = Object.getOwnPropertySymbols,
    Oa = Object.getOwnPropertyDescriptor,
    Ma = Object.getPrototypeOf,
    Pa = Object.prototype;
  var Ra = e(function e(t, n, i) {
    if ('string' != typeof n) {
      if (Pa) {
        var r = Ma(n);
        r && r !== Pa && e(t, r, i);
      }
      var o = Ta(n);
      ka && (o = o.concat(ka(n)));
      for (var a = Ca(t), s = Ca(n), l = 0; l < o.length; ++l) {
        var c = o[l];
        if (!(_a[c] || (i && i[c]) || (s && s[c]) || (a && a[c]))) {
          var u = Oa(n, c);
          try {
            Ea(t, c, u);
          } catch (e) {}
        }
      }
    }
    return t;
  });
  function Aa(e) {
    var t = e.children,
      n = e.theme,
      i = oa();
    var r = at.useMemo(
      function () {
        var e =
          null === i
            ? n
            : (function (e, t) {
                if ('function' == typeof t) {
                  var n = t(e);
                  return n;
                }
                return gt({}, e, {}, t);
              })(i, n);
        return null != e && (e[mi] = null !== i), e;
      },
      [n, i]
    );
    return at.createElement(ra.Provider, { value: r }, t);
  }
  var Ia = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
      var i = t.defaultTheme,
        r = t.withTheme,
        o = void 0 !== r && r,
        a = t.name,
        s = mt(t, ['defaultTheme', 'withTheme', 'name']);
      var l = a,
        c = ga(
          e,
          gt({ defaultTheme: i, Component: n, name: a || n.displayName, classNamePrefix: l }, s)
        ),
        u = at.forwardRef(function (e, t) {
          e.classes;
          var r,
            s = e.innerRef,
            l = mt(e, ['classes', 'innerRef']),
            u = c(e),
            d = l;
          return (
            ('string' == typeof a || o) &&
              ((r = oa() || i),
              a && (d = yi({ theme: r, name: a, props: l })),
              o && !d.theme && (d.theme = r)),
            at.createElement(n, gt({ ref: s || t, classes: u }, d))
          );
        });
      return (u.defaultProps = n.defaultProps), Ra(u, n), u;
    };
  };
  !(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.defaultTheme,
      n = function (e) {
        var n = at.forwardRef(function (n, i) {
          var r = n.innerRef,
            o = mt(n, ['innerRef']),
            a = oa() || t;
          return at.createElement(e, gt({ theme: a, ref: r || i }, o));
        });
        return Ra(n, e), n;
      };
  })();
  var La = (function () {
    for (
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.breakpoints,
        n = void 0 === t ? {} : t,
        i = e.mixins,
        r = void 0 === i ? {} : i,
        o = e.palette,
        a = void 0 === o ? {} : o,
        s = e.spacing,
        l = e.typography,
        c = void 0 === l ? {} : l,
        u = mt(e, ['breakpoints', 'mixins', 'palette', 'spacing', 'typography']),
        d = ni(a),
        h = Rn(n),
        p = ci(s),
        f = _t(
          {
            breakpoints: h,
            direction: 'ltr',
            mixins: An(h, p, r),
            overrides: {},
            palette: d,
            props: {},
            shadows: si,
            typography: oi(d, c),
            spacing: p,
            shape: li,
            transitions: pi,
            zIndex: fi,
          },
          u
        ),
        m = arguments.length,
        v = new Array(m > 1 ? m - 1 : 0),
        g = 1;
      g < m;
      g++
    )
      v[g - 1] = arguments[g];
    return (f = v.reduce(function (e, t) {
      return _t(e, t);
    }, f));
  })();
  function za() {
    return oa() || La;
  }
  function Da(e, t) {
    return Ia(e, gt({ defaultTheme: La }, t));
  }
  var ja = {},
    Na = {};
  (Na = function (e) {
    return e && e.__esModule ? e : { default: e };
  }),
    Object.defineProperty(ja, '__esModule', { value: !0 });
  var Fa = void 0;
  ja.default = Fa;
  var Wa;
  Na(
    (Wa = function (e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    })
  );
  var Ba,
    Ha = {};
  Ha = function (e, t) {
    if (null == e) return {};
    var n,
      i,
      r = {},
      o = Object.keys(e);
    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
  };
  var qa = Na(
      (Ba = function (e, t) {
        if (null == e) return {};
        var n,
          i,
          r = Ha(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      })
    ),
    Va = {};
  Object.defineProperty(Va, '__esModule', { value: !0 });
  var Ua = function (e) {
    var t = e.values,
      n = void 0 === t ? { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } : t,
      i = e.unit,
      r = void 0 === i ? 'px' : i,
      o = e.step,
      a = void 0 === o ? 5 : o,
      s = (0, Xa.default)(e, ['values', 'unit', 'step']);
    function l(e) {
      var t = 'number' == typeof n[e] ? n[e] : e;
      return '@media (min-width:'.concat(t).concat(r, ')');
    }
    function c(e, t) {
      var i = Ka.indexOf(t);
      return i === Ka.length - 1
        ? l(e)
        : '@media (min-width:'.concat('number' == typeof n[e] ? n[e] : e).concat(r, ') and ') +
            '(max-width:'
              .concat((-1 !== i && 'number' == typeof n[Ka[i + 1]] ? n[Ka[i + 1]] : t) - a / 100)
              .concat(r, ')');
    }
    return (0, Ya.default)(
      {
        keys: Ka,
        values: n,
        up: l,
        down: function (e) {
          var t = Ka.indexOf(e) + 1,
            i = n[Ka[t]];
          return t === Ka.length
            ? l('xs')
            : '@media (max-width:'
                .concat(('number' == typeof i && t > 0 ? i : e) - a / 100)
                .concat(r, ')');
        },
        between: c,
        only: function (e) {
          return c(e, e);
        },
        width: function (e) {
          return n[e];
        },
      },
      s
    );
  };
  Va.default = Ua;
  var $a = void 0;
  Va.keys = $a;
  var Ga = {};
  function Za() {
    return (
      (Ga = Za =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
      Za.apply(this, arguments)
    );
  }
  var Ya = Na((Ga = Za)),
    Xa = Na(Ba),
    Ka = ['xs', 'sm', 'md', 'lg', 'xl'];
  ($a = Ka), (Va.keys = $a);
  var Ja = Na(Va),
    Qa = {};
  Object.defineProperty(Qa, '__esModule', { value: !0 });
  var es = function (e, t, n) {
    var i;
    return (0, ns.default)(
      {
        gutters: function () {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, ns.default)(
            { paddingLeft: t(2), paddingRight: t(2) },
            n,
            (0, ts.default)(
              {},
              e.up('sm'),
              (0, ns.default)({ paddingLeft: t(3), paddingRight: t(3) }, n[e.up('sm')])
            )
          );
        },
        toolbar:
          ((i = { minHeight: 56 }),
          (0, ts.default)(i, ''.concat(e.up('xs'), ' and (orientation: landscape)'), {
            minHeight: 48,
          }),
          (0, ts.default)(i, e.up('sm'), { minHeight: 64 }),
          i),
      },
      n
    );
  };
  Qa.default = es;
  var ts = Na(Wa),
    ns = Na(Ga);
  var is = Na(Qa),
    rs = {};
  Object.defineProperty(rs, '__esModule', { value: !0 });
  var os = function (e) {
    var t = e.primary,
      n =
        void 0 === t ? { light: gs.default[300], main: gs.default[500], dark: gs.default[700] } : t,
      i = e.secondary,
      r =
        void 0 === i ? { light: ws.default.A200, main: ws.default.A400, dark: ws.default.A700 } : i,
      o = e.error,
      a =
        void 0 === o ? { light: Ss.default[300], main: Ss.default[500], dark: Ss.default[700] } : o,
      s = e.warning,
      l =
        void 0 === s ? { light: Ts.default[300], main: Ts.default[500], dark: Ts.default[700] } : s,
      c = e.info,
      u =
        void 0 === c ? { light: Ms.default[300], main: Ms.default[500], dark: Ms.default[700] } : c,
      d = e.success,
      h =
        void 0 === d ? { light: As.default[300], main: As.default[500], dark: As.default[700] } : d,
      p = e.type,
      f = void 0 === p ? 'light' : p,
      m = e.contrastThreshold,
      v = void 0 === m ? 3 : m,
      g = e.tonalOffset,
      y = void 0 === g ? 0.2 : g,
      b = (0, ls.default)(e, [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'type',
        'contrastThreshold',
        'tonalOffset',
      ]);
    function w(e) {
      if (!e)
        throw new TypeError(
          'Material-UI: missing background argument in getContrastText('.concat(e, ').')
        );
      var t = (0, Is.getContrastRatio)(e, tl.text.primary) >= v ? tl.text.primary : Qs.text.primary;
      return t;
    }
    function _(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 700;
      return (
        !(e = (0, ss.default)({}, e)).main && e[t] && (e.main = e[t]),
        nl(e, 'light', n, y),
        nl(e, 'dark', i, y),
        e.contrastText || (e.contrastText = w(e.main)),
        e
      );
    }
    var x = { dark: tl, light: Qs };
    0;
    return _t(
      (0, ss.default)(
        {
          common: ds.default,
          type: f,
          primary: _(n),
          secondary: _(r, 'A400', 'A200', 'A700'),
          error: _(a),
          warning: _(l),
          info: _(u),
          success: _(h),
          grey: fs.default,
          contrastThreshold: v,
          getContrastText: w,
          augmentColor: _,
          tonalOffset: y,
        },
        x[f]
      ),
      b
    );
  };
  rs.default = os;
  var as = ((el = void 0), (rs.light = el));
  rs.dark = as;
  var ss = Na(Ga),
    ls = Na(Ba),
    cs = {};
  Object.defineProperty(cs, '__esModule', { value: !0 });
  var us = void 0;
  cs.default = us;
  (us = { black: '#000', white: '#fff' }), (cs.default = us);
  var ds = Na(cs),
    hs = {};
  Object.defineProperty(hs, '__esModule', { value: !0 });
  var ps = void 0;
  hs.default = ps;
  (ps = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  }),
    (hs.default = ps);
  var fs = Na(hs),
    ms = {};
  Object.defineProperty(ms, '__esModule', { value: !0 });
  var vs = void 0;
  ms.default = vs;
  (vs = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
  }),
    (ms.default = vs);
  var gs = Na(ms),
    ys = {};
  Object.defineProperty(ys, '__esModule', { value: !0 });
  var bs = void 0;
  ys.default = bs;
  (bs = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
  }),
    (ys.default = bs);
  var ws = Na(ys),
    _s = {};
  Object.defineProperty(_s, '__esModule', { value: !0 });
  var xs = void 0;
  _s.default = xs;
  (xs = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  }),
    (_s.default = xs);
  var Ss = Na(_s),
    Cs = {};
  Object.defineProperty(Cs, '__esModule', { value: !0 });
  var Es = void 0;
  Cs.default = Es;
  (Es = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  }),
    (Cs.default = Es);
  var Ts = Na(Cs),
    ks = {};
  Object.defineProperty(ks, '__esModule', { value: !0 });
  var Os = void 0;
  ks.default = Os;
  (Os = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  }),
    (ks.default = Os);
  var Ms = Na(ks),
    Ps = {};
  Object.defineProperty(Ps, '__esModule', { value: !0 });
  var Rs = void 0;
  Ps.default = Rs;
  (Rs = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  }),
    (Ps.default = Rs);
  var As = Na(Ps),
    Is = {};
  Object.defineProperty(Is, '__esModule', { value: !0 });
  var Ls = $s;
  Is.hexToRgb = Ls;
  var zs = function (e) {
    if (0 === e.indexOf('#')) return e;
    var t = Zs(e).values;
    return '#'.concat(
      t
        .map(function (e) {
          return 1 === (t = e.toString(16)).length ? '0'.concat(t) : t;
          var t;
        })
        .join('')
    );
  };
  Is.rgbToHex = zs;
  var Ds = Gs;
  Is.hslToRgb = Ds;
  var js = Zs;
  Is.decomposeColor = js;
  var Ns = Ys;
  Is.recomposeColor = Ns;
  var Fs = function (e, t) {
    var n = Xs(e),
      i = Xs(t);
    return (Math.max(n, i) + 0.05) / (Math.min(n, i) + 0.05);
  };
  Is.getContrastRatio = Fs;
  var Ws = Xs;
  Is.getLuminance = Ws;
  var Bs = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15;
    return Xs(e) > 0.5 ? Ks(e, t) : Js(e, t);
  };
  Is.emphasize = Bs;
  var Hs = function (e, t) {
    (e = Zs(e)), (t = Us(t)), ('rgb' === e.type || 'hsl' === e.type) && (e.type += 'a');
    return (e.values[3] = t), Ys(e);
  };
  Is.fade = Hs;
  var qs = Ks;
  Is.darken = qs;
  var Vs = Js;
  function Us(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return Math.min(Math.max(t, e), n);
  }
  function $s(e) {
    e = e.substr(1);
    var t = new RegExp('.{1,'.concat(e.length / 3, '}'), 'g'),
      n = e.match(t);
    return (
      n &&
        1 === n[0].length &&
        (n = n.map(function (e) {
          return e + e;
        })),
      n
        ? 'rgb('.concat(
            n
              .map(function (e) {
                return parseInt(e, 16);
              })
              .join(', '),
            ')'
          )
        : ''
    );
  }
  function Gs(e) {
    var t = (e = Zs(e)).values,
      n = t[0],
      i = t[1] / 100,
      r = t[2] / 100,
      o = i * Math.min(r, 1 - r),
      a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12;
        return r - o * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      },
      s = 'rgb',
      l = [Math.round(255 * a(0)), Math.round(255 * a(8)), Math.round(255 * a(4))];
    return 'hsla' === e.type && ((s += 'a'), l.push(t[3])), Ys({ type: s, values: l });
  }
  function Zs(e) {
    if (e.type) return e;
    if ('#' === e.charAt(0)) return Zs($s(e));
    var t = e.indexOf('('),
      n = e.substring(0, t);
    if (-1 === ['rgb', 'rgba', 'hsl', 'hsla'].indexOf(n))
      throw new Error(
        [
          'Material-UI: unsupported `'.concat(e, '` color.'),
          'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
        ].join('\n')
      );
    var i = e.substring(t + 1, e.length - 1).split(',');
    return {
      type: n,
      values: (i = i.map(function (e) {
        return parseFloat(e);
      })),
    };
  }
  function Ys(e) {
    var t = e.type,
      n = e.values;
    return (
      -1 !== t.indexOf('rgb')
        ? (n = n.map(function (e, t) {
            return t < 3 ? parseInt(e, 10) : e;
          }))
        : -1 !== t.indexOf('hsl') && ((n[1] = ''.concat(n[1], '%')), (n[2] = ''.concat(n[2], '%'))),
      ''.concat(t, '(').concat(n.join(', '), ')')
    );
  }
  function Xs(e) {
    var t = 'hsl' === (e = Zs(e)).type ? Zs(Gs(e)).values : e.values;
    return (
      (t = t.map(function (e) {
        return (e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      })),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function Ks(e, t) {
    if (((e = Zs(e)), (t = Us(t)), -1 !== e.type.indexOf('hsl'))) e.values[2] *= 1 - t;
    else if (-1 !== e.type.indexOf('rgb')) for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return Ys(e);
  }
  function Js(e, t) {
    if (((e = Zs(e)), (t = Us(t)), -1 !== e.type.indexOf('hsl')))
      e.values[2] += (100 - e.values[2]) * t;
    else if (-1 !== e.type.indexOf('rgb'))
      for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    return Ys(e);
  }
  Is.lighten = Vs;
  var Qs = {
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: { paper: ds.default.white, default: fs.default[50] },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpaciy: 0.12,
      },
    },
    el = Qs;
  rs.light = el;
  var tl = {
    text: {
      primary: ds.default.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: fs.default[800], default: '#303030' },
    action: {
      active: ds.default.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpaciy: 0.24,
    },
  };
  function nl(e, t, n, i) {
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : 'light' === t
        ? (e.light = (0, Is.lighten)(e.main, i))
        : 'dark' === t && (e.dark = (0, Is.darken)(e.main, 1.5 * i)));
  }
  (as = tl), (rs.dark = as);
  var il = Na(rs),
    rl = {};
  Object.defineProperty(rl, '__esModule', { value: !0 });
  var ol = function (e, t) {
    var n = 'function' == typeof t ? t(e) : t,
      i = n.fontFamily,
      r = void 0 === i ? '"Roboto", "Helvetica", "Arial", sans-serif' : i,
      o = n.fontSize,
      a = void 0 === o ? 14 : o,
      s = n.fontWeightLight,
      l = void 0 === s ? 300 : s,
      c = n.fontWeightRegular,
      u = void 0 === c ? 400 : c,
      d = n.fontWeightMedium,
      h = void 0 === d ? 500 : d,
      p = n.fontWeightBold,
      f = void 0 === p ? 700 : p,
      m = n.htmlFontSize,
      v = void 0 === m ? 16 : m,
      g = n.allVariants,
      y = n.pxToRem,
      b = (0, sl.default)(n, [
        'fontFamily',
        'fontSize',
        'fontWeightLight',
        'fontWeightRegular',
        'fontWeightMedium',
        'fontWeightBold',
        'htmlFontSize',
        'allVariants',
        'pxToRem',
      ]);
    0;
    var w = a / 14,
      _ =
        y ||
        function (e) {
          return ''.concat((e / v) * w, 'rem');
        },
      x = function (e, t, n, i, o) {
        return (0, al.default)(
          { fontFamily: r, fontWeight: e, fontSize: _(t), lineHeight: n },
          '"Roboto", "Helvetica", "Arial", sans-serif' === r
            ? { letterSpacing: ''.concat(ll(i / t), 'em') }
            : {},
          {},
          o,
          {},
          g
        );
      },
      S = {
        h1: x(l, 96, 1.167, -1.5),
        h2: x(l, 60, 1.2, -0.5),
        h3: x(u, 48, 1.167, 0),
        h4: x(u, 34, 1.235, 0.25),
        h5: x(u, 24, 1.334, 0),
        h6: x(h, 20, 1.6, 0.15),
        subtitle1: x(u, 16, 1.75, 0.15),
        subtitle2: x(h, 14, 1.57, 0.1),
        body1: x(u, 16, 1.5, 0.15),
        body2: x(u, 14, 1.43, 0.15),
        button: x(h, 14, 1.75, 0.4, cl),
        caption: x(u, 12, 1.66, 0.4),
        overline: x(u, 12, 2.66, 1, cl),
      };
    return _t(
      (0, al.default)(
        {
          htmlFontSize: v,
          pxToRem: _,
          round: ll,
          fontFamily: r,
          fontSize: a,
          fontWeightLight: l,
          fontWeightRegular: u,
          fontWeightMedium: h,
          fontWeightBold: f,
        },
        S
      ),
      b,
      { clone: !1 }
    );
  };
  rl.default = ol;
  var al = Na(Ga),
    sl = Na(Ba);
  function ll(e) {
    return Math.round(1e5 * e) / 1e5;
  }
  var cl = { textTransform: 'uppercase' };
  var ul = Na(rl),
    dl = {};
  Object.defineProperty(dl, '__esModule', { value: !0 });
  var hl = void 0;
  dl.default = hl;
  function pl() {
    return [
      ''
        .concat(arguments.length <= 0 ? void 0 : arguments[0], 'px ')
        .concat(arguments.length <= 1 ? void 0 : arguments[1], 'px ')
        .concat(arguments.length <= 2 ? void 0 : arguments[2], 'px ')
        .concat(arguments.length <= 3 ? void 0 : arguments[3], 'px rgba(0,0,0,')
        .concat(0.2, ')'),
      ''
        .concat(arguments.length <= 4 ? void 0 : arguments[4], 'px ')
        .concat(arguments.length <= 5 ? void 0 : arguments[5], 'px ')
        .concat(arguments.length <= 6 ? void 0 : arguments[6], 'px ')
        .concat(arguments.length <= 7 ? void 0 : arguments[7], 'px rgba(0,0,0,')
        .concat(0.14, ')'),
      ''
        .concat(arguments.length <= 8 ? void 0 : arguments[8], 'px ')
        .concat(arguments.length <= 9 ? void 0 : arguments[9], 'px ')
        .concat(arguments.length <= 10 ? void 0 : arguments[10], 'px ')
        .concat(arguments.length <= 11 ? void 0 : arguments[11], 'px rgba(0,0,0,')
        .concat(0.12, ')'),
    ].join(',');
  }
  (hl = [
    'none',
    pl(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    pl(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    pl(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    pl(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    pl(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    pl(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    pl(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    pl(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    pl(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    pl(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    pl(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    pl(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    pl(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    pl(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    pl(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    pl(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    pl(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    pl(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    pl(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    pl(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    pl(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    pl(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    pl(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    pl(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ]),
    (dl.default = hl);
  var fl = Na(dl),
    ml = {};
  Object.defineProperty(ml, '__esModule', { value: !0 });
  var vl = void 0;
  ml.default = vl;
  (vl = { borderRadius: 4 }), (ml.default = vl);
  var gl = Na(ml),
    yl = {};
  Object.defineProperty(yl, '__esModule', { value: !0 });
  var bl = function () {
    var e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
    if (t.mui) return t;
    e =
      'function' == typeof t
        ? t
        : function (e) {
            return t * e;
          };
    var n = function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return 0 === n.length
        ? e(1)
        : 1 === n.length
        ? e(n[0])
        : n
            .map(function (t) {
              var n = e(t);
              return 'number' == typeof n ? ''.concat(n, 'px') : n;
            })
            .join(' ');
    };
    return (
      Object.defineProperty(n, 'unit', {
        get: function () {
          return t;
        },
      }),
      (n.mui = !0),
      n
    );
  };
  yl.default = bl;
  var wl = Na(yl),
    _l = {};
  Object.defineProperty(_l, '__esModule', { value: !0 });
  var xl = ((El = void 0), (kl = _l.easing = El), (_l.duration = kl));
  _l.default = xl;
  var Sl = Na(Ba),
    Cl = {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    El = Cl;
  _l.easing = El;
  var Tl = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    kl = Tl;
  function Ol(e) {
    return ''.concat(Math.round(e), 'ms');
  }
  (_l.duration = kl),
    (xl = {
      easing: Cl,
      duration: Tl,
      create: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ['all'],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.duration,
          i = void 0 === n ? Tl.standard : n,
          r = t.easing,
          o = void 0 === r ? Cl.easeInOut : r,
          a = t.delay,
          s = void 0 === a ? 0 : a;
        (0, Sl.default)(t, ['duration', 'easing', 'delay']);
        return (Array.isArray(e) ? e : [e])
          .map(function (e) {
            return ''
              .concat(e, ' ')
              .concat('string' == typeof i ? i : Ol(i), ' ')
              .concat(o, ' ')
              .concat('string' == typeof s ? s : Ol(s));
          })
          .join(',');
      },
      getAutoHeightDuration: function (e) {
        if (!e) return 0;
        var t = e / 36;
        return Math.round(10 * (4 + 15 * Math.pow(t, 0.25) + t / 5));
      },
    }),
    (_l.default = xl);
  var Ml = Na(_l),
    Pl = {};
  Object.defineProperty(Pl, '__esModule', { value: !0 });
  var Rl = void 0;
  Pl.default = Rl;
  (Rl = {
    mobileStepper: 1e3,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  }),
    (Pl.default = Rl);
  var Al = Na(Pl);
  function Il(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = oa(),
      i = yi({ theme: n, name: 'PwzrUseMediaQuery', props: {} });
    var r = 'function' == typeof e ? e(n) : e;
    r = r.replace(/^@media( ?)/m, '');
    var o = 'undefined' != typeof window && void 0 !== window.matchMedia,
      a = gt({}, i, {}, t),
      s = a.defaultMatches,
      l = void 0 !== s && s,
      c = a.matchMedia,
      u = void 0 === c ? (o ? window.matchMedia : null) : c,
      d = a.noSsr,
      h = void 0 !== d && d,
      p = a.ssrMatchMedia,
      f = void 0 === p ? null : p,
      m = at.useState(function () {
        return h && o ? u(r).matches : f ? f(r).matches : l;
      }),
      v = m[0],
      g = m[1];
    return (
      at.useEffect(
        function () {
          var e = !0;
          if (o) {
            var t = u(r),
              n = function () {
                e && g(t.matches);
              };
            return (
              n(),
              t.addListener(n),
              function () {
                (e = !1), t.removeListener(n);
              }
            );
          }
        },
        [r, u, o]
      ),
      v
    );
  }
  (Fa = function () {
    for (
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.breakpoints,
        n = void 0 === t ? {} : t,
        i = e.mixins,
        r = void 0 === i ? {} : i,
        o = e.palette,
        a = void 0 === o ? {} : o,
        s = e.spacing,
        l = e.typography,
        c = void 0 === l ? {} : l,
        u = (0, qa.default)(e, ['breakpoints', 'mixins', 'palette', 'spacing', 'typography']),
        d = (0, il.default)(a),
        h = (0, Ja.default)(n),
        p = (0, wl.default)(s),
        f = _t(
          {
            breakpoints: h,
            direction: 'ltr',
            mixins: (0, is.default)(h, p, r),
            overrides: {},
            palette: d,
            props: {},
            shadows: fl.default,
            typography: (0, ul.default)(d, c),
            spacing: p,
            shape: gl.default,
            transitions: Ml.default,
            zIndex: Al.default,
          },
          u
        ),
        m = arguments.length,
        v = new Array(m > 1 ? m - 1 : 0),
        g = 1;
      g < m;
      g++
    )
      v[g - 1] = arguments[g];
    return (f = v.reduce(function (e, t) {
      return _t(e, t);
    }, f));
  }),
    (ja.default = Fa);
  var Ll = {};
  Object.defineProperty(Ll, '__esModule', { value: !0 });
  var zl = void 0;
  Ll.default = zl;
  var Dl = Na(Ga),
    jl = {};
  Object.defineProperty(jl, '__esModule', { value: !0 });
  var Nl = void 0;
  (jl.default = Nl), (Nl = (0, Na(ja).default)()), (jl.default = Nl);
  var Fl = Na(jl);
  (zl = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return ga(e, (0, Dl.default)({ defaultTheme: Fl.default }, t));
  }),
    (Ll.default = zl);
  var Wl = {};
  Object.defineProperty(Wl, '__esModule', { value: !0 });
  var Bl = function () {
    return oa() || Hl.default;
  };
  Wl.default = Bl;
  var Hl = Na(jl);
  var ql = 'undefined' != typeof window ? at.useLayoutEffect : at.useEffect;
  function Vl(e) {
    var t = e.children,
      n = e.defer,
      i = void 0 !== n && n,
      r = e.fallback,
      o = void 0 === r ? null : r,
      a = at.useState(!1),
      s = a[0],
      l = a[1];
    return (
      ql(
        function () {
          i || l(!0);
        },
        [i]
      ),
      at.useEffect(
        function () {
          i && l(!0);
        },
        [i]
      ),
      at.createElement(at.Fragment, null, s ? t : o)
    );
  }
  function Ul(e, t) {
    'function' == typeof e ? e(t) : e && (e.current = t);
  }
  function $l(e, t) {
    return at.useMemo(
      function () {
        return null == e && null == t
          ? null
          : function (n) {
              Ul(e, n), Ul(t, n);
            };
      },
      [e, t]
    );
  }
  var Gl = 'undefined' != typeof window ? at.useLayoutEffect : at.useEffect;
  function Zl(e) {
    var t = at.useRef(e);
    return (
      Gl(function () {
        t.current = e;
      }),
      at.useCallback(function () {
        return t.current.apply(void 0, arguments);
      }, [])
    );
  }
  var Yl = !0,
    Xl = !1,
    Kl = null,
    Jl = {
      text: !0,
      search: !0,
      url: !0,
      tel: !0,
      email: !0,
      password: !0,
      number: !0,
      date: !0,
      month: !0,
      week: !0,
      time: !0,
      datetime: !0,
      'datetime-local': !0,
    };
  function Ql(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Yl = !0);
  }
  function ec() {
    Yl = !1;
  }
  function tc() {
    'hidden' === this.visibilityState && Xl && (Yl = !0);
  }
  function nc(e) {
    var t,
      n,
      i,
      r = e.target;
    try {
      return r.matches(':focus-visible');
    } catch (e) {}
    return (
      Yl ||
      ((n = (t = r).type),
      !('INPUT' !== (i = t.tagName) || !Jl[n] || t.readOnly) ||
        ('TEXTAREA' === i && !t.readOnly) ||
        !!t.isContentEditable)
    );
  }
  function ic() {
    (Xl = !0),
      window.clearTimeout(Kl),
      (Kl = window.setTimeout(function () {
        Xl = !1;
      }, 100));
  }
  function rc() {
    return {
      isFocusVisible: nc,
      onBlurVisible: ic,
      ref: at.useCallback(function (e) {
        var t,
          n = at.findDOMNode(e);
        null != n &&
          ((t = n.ownerDocument).addEventListener('keydown', Ql, !0),
          t.addEventListener('mousedown', ec, !0),
          t.addEventListener('pointerdown', ec, !0),
          t.addEventListener('touchstart', ec, !0),
          t.addEventListener('visibilitychange', tc, !0));
      }, []),
    };
  }
  var oc = at.createContext(null);
  function ac(e, t) {
    var n = Object.create(null);
    return (
      e &&
        Oe.map(e, function (e) {
          return e;
        }).forEach(function (e) {
          n[e.key] = (function (e) {
            return t && et(e) ? t(e) : e;
          })(e);
        }),
      n
    );
  }
  function sc(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
  }
  function lc(e, t, n) {
    var i = ac(e.children),
      r = (function (e, t) {
        function n(n) {
          return n in t ? t[n] : e[n];
        }
        (e = e || {}), (t = t || {});
        var i,
          r = Object.create(null),
          o = [];
        for (var a in e) a in t ? o.length && ((r[a] = o), (o = [])) : o.push(a);
        var s = {};
        for (var l in t) {
          if (r[l])
            for (i = 0; i < r[l].length; i++) {
              var c = r[l][i];
              s[r[l][i]] = n(c);
            }
          s[l] = n(l);
        }
        for (i = 0; i < o.length; i++) s[o[i]] = n(o[i]);
        return s;
      })(t, i);
    return (
      Object.keys(r).forEach(function (o) {
        var a = r[o];
        if (et(a)) {
          var s = o in t,
            l = o in i,
            c = t[o],
            u = et(c) && !c.props.in;
          !l || (s && !u)
            ? l || !s || u
              ? l &&
                s &&
                et(c) &&
                (r[o] = tt(a, {
                  onExited: n.bind(null, a),
                  in: c.props.in,
                  exit: sc(a, 'exit', e),
                  enter: sc(a, 'enter', e),
                }))
              : (r[o] = tt(a, { in: !1 }))
            : (r[o] = tt(a, {
                onExited: n.bind(null, a),
                in: !0,
                exit: sc(a, 'exit', e),
                enter: sc(a, 'enter', e),
              }));
        }
      }),
      r
    );
  }
  var cc =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    uc = (function (e) {
      function t(t, n) {
        var i,
          r = (i = e.call(this, t, n) || this).handleExited.bind(Ci(Ci(i)));
        return (
          (i.state = { contextValue: { isMounting: !0 }, handleExited: r, firstRender: !0 }), i
        );
      }
      Si(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
        }),
        (n.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (t.getDerivedStateFromProps = function (e, t) {
          var n,
            i,
            r = t.children,
            o = t.handleExited;
          return {
            children: t.firstRender
              ? ((n = e),
                (i = o),
                ac(n.children, function (e) {
                  return tt(e, {
                    onExited: i.bind(null, e),
                    in: !0,
                    appear: sc(e, 'appear', n),
                    enter: sc(e, 'enter', n),
                    exit: sc(e, 'exit', n),
                  });
                }))
              : lc(e, r, o),
            firstRender: !1,
          };
        }),
        (n.handleExited = function (e, t) {
          var n = ac(this.props.children);
          e.key in n ||
            (e.props.onExited && e.props.onExited(t),
            this.mounted &&
              this.setState(function (t) {
                var n = gt({}, t.children);
                return delete n[e.key], { children: n };
              }));
        }),
        (n.render = function () {
          var e = this.props,
            t = e.component,
            n = e.childFactory,
            i = ft(e, ['component', 'childFactory']),
            r = this.state.contextValue,
            o = cc(this.state.children).map(n);
          return (
            delete i.appear,
            delete i.enter,
            delete i.exit,
            null === t
              ? at.createElement(oc.Provider, { value: r }, o)
              : at.createElement(oc.Provider, { value: r }, at.createElement(t, i, o))
          );
        }),
        t
      );
    })(at.Component);
  (uc.propTypes = {}),
    (uc.defaultProps = {
      component: 'div',
      childFactory: function (e) {
        return e;
      },
    });
  var dc = 'undefined' == typeof window ? at.useEffect : at.useLayoutEffect;
  function hc(e) {
    var t = e.classes,
      n = e.pulsate,
      i = void 0 !== n && n,
      r = e.rippleX,
      o = e.rippleY,
      a = e.rippleSize,
      s = e.in,
      l = e.onExited,
      c = void 0 === l ? function () {} : l,
      u = e.timeout,
      d = at.useState(!1),
      h = d[0],
      p = d[1],
      f = ba(t.ripple, t.rippleVisible, i && t.ripplePulsate),
      m = { width: a, height: a, top: -a / 2 + o, left: -a / 2 + r },
      v = ba(t.child, h && t.childLeaving, i && t.childPulsate),
      g = Zl(c);
    return (
      dc(
        function () {
          if (!s) {
            p(!0);
            var e = setTimeout(g, u);
            return function () {
              clearTimeout(e);
            };
          }
        },
        [g, s, u]
      ),
      at.createElement(
        'span',
        { className: f, style: m },
        at.createElement('span', { className: v })
      )
    );
  }
  var pc = at.forwardRef(function (e, t) {
      var n = e.center,
        i = void 0 !== n && n,
        r = e.classes,
        o = e.className,
        a = mt(e, ['center', 'classes', 'className']),
        s = at.useState([]),
        l = s[0],
        c = s[1],
        u = at.useRef(0),
        d = at.useRef(null);
      at.useEffect(
        function () {
          d.current && (d.current(), (d.current = null));
        },
        [l]
      );
      var h = at.useRef(!1),
        p = at.useRef(null),
        f = at.useRef(null),
        m = at.useRef(null);
      at.useEffect(function () {
        return function () {
          clearTimeout(p.current);
        };
      }, []);
      var v = at.useCallback(
          function (e) {
            var t = e.pulsate,
              n = e.rippleX,
              i = e.rippleY,
              o = e.rippleSize,
              a = e.cb;
            c(function (e) {
              return [].concat(to(e), [
                at.createElement(hc, {
                  key: u.current,
                  classes: r,
                  timeout: 550,
                  pulsate: t,
                  rippleX: n,
                  rippleY: i,
                  rippleSize: o,
                }),
              ]);
            }),
              (u.current += 1),
              (d.current = a);
          },
          [r]
        ),
        g = at.useCallback(
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = t.pulsate,
              o = void 0 !== r && r,
              a = t.center,
              s = void 0 === a ? i || t.pulsate : a,
              l = t.fakeElement,
              c = void 0 !== l && l;
            if ('mousedown' === e.type && h.current) h.current = !1;
            else {
              'touchstart' === e.type && (h.current = !0);
              var u,
                d,
                g,
                y = c ? null : m.current,
                b = y ? y.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
              if (s || (0 === e.clientX && 0 === e.clientY) || (!e.clientX && !e.touches))
                (u = Math.round(b.width / 2)), (d = Math.round(b.height / 2));
              else {
                var w = e.clientX ? e.clientX : e.touches[0].clientX,
                  _ = e.clientY ? e.clientY : e.touches[0].clientY;
                (u = Math.round(w - b.left)), (d = Math.round(_ - b.top));
              }
              if (s)
                (g = Math.sqrt((2 * Math.pow(b.width, 2) + Math.pow(b.height, 2)) / 3)) % 2 == 0 &&
                  (g += 1);
              else {
                var x = 2 * Math.max(Math.abs((y ? y.clientWidth : 0) - u), u) + 2,
                  S = 2 * Math.max(Math.abs((y ? y.clientHeight : 0) - d), d) + 2;
                g = Math.sqrt(Math.pow(x, 2) + Math.pow(S, 2));
              }
              e.touches
                ? null === f.current &&
                  ((f.current = function () {
                    v({ pulsate: o, rippleX: u, rippleY: d, rippleSize: g, cb: n });
                  }),
                  (p.current = setTimeout(function () {
                    f.current && (f.current(), (f.current = null));
                  }, 80)))
                : v({ pulsate: o, rippleX: u, rippleY: d, rippleSize: g, cb: n });
            }
          },
          [i, v]
        ),
        y = at.useCallback(
          function () {
            g({}, { pulsate: !0 });
          },
          [g]
        ),
        b = at.useCallback(function (e, t) {
          if ((clearTimeout(p.current), 'touchend' === e.type && f.current))
            return (
              e.persist(),
              f.current(),
              (f.current = null),
              void (p.current = setTimeout(function () {
                b(e, t);
              }))
            );
          (f.current = null),
            c(function (e) {
              return e.length > 0 ? e.slice(1) : e;
            }),
            (d.current = t);
        }, []);
      return (
        at.useImperativeHandle(
          t,
          function () {
            return { pulsate: y, start: g, stop: b };
          },
          [y, g, b]
        ),
        at.createElement(
          'span',
          gt({ className: ba(r.root, o), ref: m }, a),
          at.createElement(uc, { component: null, exit: !0 }, l)
        )
      );
    }),
    fc = Da(
      function (e) {
        return {
          root: {
            overflow: 'hidden',
            pointerEvents: 'none',
            position: 'absolute',
            zIndex: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: 'inherit',
          },
          ripple: { opacity: 0, position: 'absolute' },
          rippleVisible: {
            opacity: 0.3,
            transform: 'scale(1)',
            animation: '$enter '.concat(550, 'ms ').concat(e.transitions.easing.easeInOut),
          },
          ripplePulsate: { animationDuration: ''.concat(e.transitions.duration.shorter, 'ms') },
          child: {
            opacity: 1,
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          },
          childLeaving: {
            opacity: 0,
            animation: '$exit '.concat(550, 'ms ').concat(e.transitions.easing.easeInOut),
          },
          childPulsate: {
            position: 'absolute',
            left: 0,
            top: 0,
            animation: '$pulsate 2500ms '.concat(e.transitions.easing.easeInOut, ' 200ms infinite'),
          },
          '@keyframes enter': {
            '0%': { transform: 'scale(0)', opacity: 0.1 },
            '100%': { transform: 'scale(1)', opacity: 0.3 },
          },
          '@keyframes exit': { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
          '@keyframes pulsate': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(0.92)' },
            '100%': { transform: 'scale(1)' },
          },
        };
      },
      { flip: !1, name: 'PwzrTouchRipple' }
    )(at.memo(pc)),
    mc = at.forwardRef(function (e, t) {
      var n = e.action,
        i = e.buttonRef,
        r = e.centerRipple,
        o = void 0 !== r && r,
        a = e.children,
        s = e.classes,
        l = e.className,
        c = e.component,
        u = void 0 === c ? 'button' : c,
        d = e.disabled,
        h = void 0 !== d && d,
        p = e.disableRipple,
        f = void 0 !== p && p,
        m = e.disableTouchRipple,
        v = void 0 !== m && m,
        g = e.focusRipple,
        y = void 0 !== g && g,
        b = e.focusVisibleClassName,
        w = e.onBlur,
        _ = e.onClick,
        x = e.onFocus,
        S = e.onFocusVisible,
        C = e.onKeyDown,
        E = e.onKeyUp,
        T = e.onMouseDown,
        k = e.onMouseLeave,
        O = e.onMouseUp,
        M = e.onTouchEnd,
        P = e.onTouchMove,
        R = e.onTouchStart,
        A = e.onDragLeave,
        I = e.tabIndex,
        L = void 0 === I ? 0 : I,
        z = e.TouchRippleProps,
        D = e.type,
        j = void 0 === D ? 'button' : D,
        N = mt(e, [
          'action',
          'buttonRef',
          'centerRipple',
          'children',
          'classes',
          'className',
          'component',
          'disabled',
          'disableRipple',
          'disableTouchRipple',
          'focusRipple',
          'focusVisibleClassName',
          'onBlur',
          'onClick',
          'onFocus',
          'onFocusVisible',
          'onKeyDown',
          'onKeyUp',
          'onMouseDown',
          'onMouseLeave',
          'onMouseUp',
          'onTouchEnd',
          'onTouchMove',
          'onTouchStart',
          'onDragLeave',
          'tabIndex',
          'TouchRippleProps',
          'type',
        ]),
        F = at.useRef(null);
      var W = at.useRef(null),
        B = at.useState(!1),
        H = B[0],
        q = B[1];
      h && H && q(!1);
      var V = rc(),
        U = V.isFocusVisible,
        $ = V.onBlurVisible,
        G = V.ref;
      function Z(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
        return Zl(function (i) {
          return t && t(i), !n && W.current && W.current[e](i), !0;
        });
      }
      at.useImperativeHandle(
        n,
        function () {
          return {
            focusVisible: function () {
              q(!0), F.current.focus();
            },
          };
        },
        []
      ),
        at.useEffect(
          function () {
            H && y && !f && W.current.pulsate();
          },
          [f, y, H]
        );
      var Y = Z('start', T),
        X = Z('stop', A),
        K = Z('stop', O),
        J = Z('stop', function (e) {
          H && e.preventDefault(), k && k(e);
        }),
        Q = Z('start', R),
        ee = Z('stop', M),
        te = Z('stop', P),
        ne = Z(
          'stop',
          function (e) {
            H && ($(e), q(!1)), w && w(e);
          },
          !1
        ),
        ie = Zl(function (e) {
          h || (F.current || (F.current = e.currentTarget), U(e) && (q(!0), S && S(e)), x && x(e));
        }),
        re = function () {
          var e = at.findDOMNode(F.current);
          return u && 'button' !== u && !('A' === e.tagName && e.href);
        },
        oe = at.useRef(!1),
        ae = Zl(function (e) {
          y &&
            !oe.current &&
            H &&
            W.current &&
            ' ' === e.key &&
            ((oe.current = !0),
            e.persist(),
            W.current.stop(e, function () {
              W.current.start(e);
            })),
            C && C(e),
            e.target === e.currentTarget &&
              re() &&
              'Enter' === e.key &&
              (e.preventDefault(), _ && _(e));
        }),
        se = Zl(function (e) {
          y &&
            ' ' === e.key &&
            W.current &&
            H &&
            !e.defaultPrevented &&
            ((oe.current = !1),
            e.persist(),
            W.current.stop(e, function () {
              W.current.pulsate(e);
            })),
            E && E(e),
            e.target === e.currentTarget &&
              re() &&
              ' ' === e.key &&
              !e.defaultPrevented &&
              (e.preventDefault(), _ && _(e));
        }),
        le = u;
      'button' === le && N.href && (le = 'a');
      var ce = {};
      'button' === le
        ? ((ce.type = j), (ce.disabled = h))
        : (('a' === le && N.href) || (ce.role = 'button'), (ce['aria-disabled'] = h));
      var ue = $l(i, t),
        de = $l(G, F),
        he = $l(ue, de);
      return at.createElement(
        le,
        gt(
          {
            className: ba(s.root, l, H && [s.focusVisible, b], h && s.disabled),
            onBlur: ne,
            onClick: _,
            onFocus: ie,
            onKeyDown: ae,
            onKeyUp: se,
            onMouseDown: Y,
            onMouseLeave: J,
            onMouseUp: K,
            onDragLeave: X,
            onTouchEnd: ee,
            onTouchMove: te,
            onTouchStart: Q,
            ref: he,
            tabIndex: h ? -1 : L,
          },
          ce,
          N
        ),
        a,
        f || h
          ? null
          : at.createElement(Vl, null, at.createElement(fc, gt({ ref: W, center: o }, z)))
      );
    }),
    vc = Da(
      {
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          WebkitTapHighlightColor: 'transparent',
          backgroundColor: 'transparent',
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          cursor: 'pointer',
          userSelect: 'none',
          verticalAlign: 'middle',
          '-moz-appearance': 'none',
          '-webkit-appearance': 'none',
          textDecoration: 'none',
          color: 'inherit',
          '&::-moz-focus-inner': { borderStyle: 'none' },
          '&$disabled': { pointerEvents: 'none', cursor: 'default' },
        },
        disabled: {},
        focusVisible: {},
      },
      { name: 'PwzrButtonBase' }
    )(mc);
  function gc(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var yc = at.forwardRef(function (e, t) {
      var n = e.edge,
        i = void 0 !== n && n,
        r = e.children,
        o = e.classes,
        a = e.className,
        s = e.color,
        l = void 0 === s ? 'default' : s,
        c = e.disabled,
        u = void 0 !== c && c,
        d = e.disableFocusRipple,
        h = void 0 !== d && d,
        p = e.size,
        f = void 0 === p ? 'medium' : p,
        m = mt(e, [
          'edge',
          'children',
          'classes',
          'className',
          'color',
          'disabled',
          'disableFocusRipple',
          'size',
        ]);
      return at.createElement(
        vc,
        gt(
          {
            className: ba(
              o.root,
              a,
              'default' !== l && o['color'.concat(gc(l))],
              u && o.disabled,
              'small' === f && o['size'.concat(gc(f))],
              { start: o.edgeStart, end: o.edgeEnd }[i]
            ),
            centerRipple: !0,
            focusRipple: !h,
            disabled: u,
            ref: t,
          },
          m
        ),
        at.createElement('span', { className: o.label }, r)
      );
    }),
    bc = Da(
      function (e) {
        return {
          root: {
            textAlign: 'center',
            flex: '0 0 auto',
            fontSize: e.typography.pxToRem(24),
            padding: 12,
            borderRadius: '50%',
            overflow: 'visible',
            color: e.palette.action.active,
            transition: e.transitions.create('background-color', {
              duration: e.transitions.duration.shortest,
            }),
            '&:hover': {
              backgroundColor: ht(e.palette.action.active, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            '&$disabled': { backgroundColor: 'transparent', color: e.palette.action.disabled },
          },
          edgeStart: { marginLeft: -12, '$sizeSmall&': { marginLeft: -3 } },
          edgeEnd: { marginRight: -12, '$sizeSmall&': { marginRight: -3 } },
          colorInherit: { color: 'inherit' },
          colorPrimary: {
            color: e.palette.primary.main,
            '&:hover': {
              backgroundColor: ht(e.palette.primary.main, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
          colorSecondary: {
            color: e.palette.secondary.main,
            '&:hover': {
              backgroundColor: ht(e.palette.secondary.main, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
          disabled: {},
          sizeSmall: { padding: 3, fontSize: e.typography.pxToRem(18) },
          label: {
            width: '100%',
            display: 'flex',
            alignItems: 'inherit',
            justifyContent: 'inherit',
          },
        };
      },
      { name: 'PwzrIconButton' }
    )(yc),
    wc = (function () {
      if ('undefined' != typeof Map) return Map;
      function e(e, t) {
        var n = -1;
        return (
          e.some(function (e, i) {
            return e[0] === t && ((n = i), !0);
          }),
          n
        );
      }
      return (function () {
        function t() {
          this.__entries__ = [];
        }
        return (
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.get = function (t) {
            var n = e(this.__entries__, t),
              i = this.__entries__[n];
            return i && i[1];
          }),
          (t.prototype.set = function (t, n) {
            var i = e(this.__entries__, t);
            ~i ? (this.__entries__[i][1] = n) : this.__entries__.push([t, n]);
          }),
          (t.prototype.delete = function (t) {
            var n = this.__entries__,
              i = e(n, t);
            ~i && n.splice(i, 1);
          }),
          (t.prototype.has = function (t) {
            return !!~e(this.__entries__, t);
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (t.prototype.forEach = function (e, t) {
            void 0 === t && (t = null);
            for (var n = 0, i = this.__entries__; n < i.length; n++) {
              var r = i[n];
              e.call(t, r[1], r[0]);
            }
          }),
          t
        );
      })();
    })(),
    _c =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      window.document === document,
    xc =
      void 0 !== n && n.Math === Math
        ? n
        : 'undefined' != typeof self && self.Math === Math
        ? self
        : 'undefined' != typeof window && window.Math === Math
        ? window
        : Function('return this')(),
    Sc =
      'function' == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(xc)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now());
            }, 1e3 / 60);
          };
  var Cc = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    Ec = 'undefined' != typeof MutationObserver,
    Tc = (function () {
      function e() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = (function (e, t) {
            var n = !1,
              i = !1,
              r = 0;
            function o() {
              n && ((n = !1), e()), i && s();
            }
            function a() {
              Sc(o);
            }
            function s() {
              var e = Date.now();
              if (n) {
                if (e - r < 2) return;
                i = !0;
              } else (n = !0), (i = !1), setTimeout(a, t);
              r = e;
            }
            return s;
          })(this.refresh.bind(this), 20));
      }
      return (
        (e.prototype.addObserver = function (e) {
          ~this.observers_.indexOf(e) || this.observers_.push(e),
            this.connected_ || this.connect_();
        }),
        (e.prototype.removeObserver = function (e) {
          var t = this.observers_,
            n = t.indexOf(e);
          ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
        }),
        (e.prototype.refresh = function () {
          this.updateObservers_() && this.refresh();
        }),
        (e.prototype.updateObservers_ = function () {
          var e = this.observers_.filter(function (e) {
            return e.gatherActive(), e.hasActive();
          });
          return (
            e.forEach(function (e) {
              return e.broadcastActive();
            }),
            e.length > 0
          );
        }),
        (e.prototype.connect_ = function () {
          _c &&
            !this.connected_ &&
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            Ec
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener('DOMSubtreeModified', this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (e.prototype.disconnect_ = function () {
          _c &&
            this.connected_ &&
            (document.removeEventListener('transitionend', this.onTransitionEnd_),
            window.removeEventListener('resize', this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
              document.removeEventListener('DOMSubtreeModified', this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (e.prototype.onTransitionEnd_ = function (e) {
          var t = e.propertyName,
            n = void 0 === t ? '' : t;
          Cc.some(function (e) {
            return !!~n.indexOf(e);
          }) && this.refresh();
        }),
        (e.getInstance = function () {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }),
        (e.instance_ = null),
        e
      );
    })(),
    kc = function (e, t) {
      for (var n = 0, i = Object.keys(t); n < i.length; n++) {
        var r = i[n];
        Object.defineProperty(e, r, {
          value: t[r],
          enumerable: !1,
          writable: !1,
          configurable: !0,
        });
      }
      return e;
    },
    Oc = function (e) {
      return (e && e.ownerDocument && e.ownerDocument.defaultView) || xc;
    },
    Mc = zc(0, 0, 0, 0);
  function Pc(e) {
    return parseFloat(e) || 0;
  }
  function Rc(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
      return t + Pc(e['border-' + n + '-width']);
    }, 0);
  }
  function Ac(e) {
    var t = e.clientWidth,
      n = e.clientHeight;
    if (!t && !n) return Mc;
    var i = Oc(e).getComputedStyle(e),
      r = (function (e) {
        for (var t = {}, n = 0, i = ['top', 'right', 'bottom', 'left']; n < i.length; n++) {
          var r = i[n],
            o = e['padding-' + r];
          t[r] = Pc(o);
        }
        return t;
      })(i),
      o = r.left + r.right,
      a = r.top + r.bottom,
      s = Pc(i.width),
      l = Pc(i.height);
    if (
      ('border-box' === i.boxSizing &&
        (Math.round(s + o) !== t && (s -= Rc(i, 'left', 'right') + o),
        Math.round(l + a) !== n && (l -= Rc(i, 'top', 'bottom') + a)),
      !(function (e) {
        return e === Oc(e).document.documentElement;
      })(e))
    ) {
      var c = Math.round(s + o) - t,
        u = Math.round(l + a) - n;
      1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(u) && (l -= u);
    }
    return zc(r.left, r.top, s, l);
  }
  var Ic =
    'undefined' != typeof SVGGraphicsElement
      ? function (e) {
          return e instanceof Oc(e).SVGGraphicsElement;
        }
      : function (e) {
          return e instanceof Oc(e).SVGElement && 'function' == typeof e.getBBox;
        };
  function Lc(e) {
    return _c
      ? Ic(e)
        ? (function (e) {
            var t = e.getBBox();
            return zc(0, 0, t.width, t.height);
          })(e)
        : Ac(e)
      : Mc;
  }
  function zc(e, t, n, i) {
    return { x: e, y: t, width: n, height: i };
  }
  var Dc = (function () {
      function e(e) {
        (this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = zc(0, 0, 0, 0)),
          (this.target = e);
      }
      return (
        (e.prototype.isActive = function () {
          var e = Lc(this.target);
          return (
            (this.contentRect_ = e),
            e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
          );
        }),
        (e.prototype.broadcastRect = function () {
          var e = this.contentRect_;
          return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
        }),
        e
      );
    })(),
    jc = function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        c =
          ((i = (n = t).x),
          (r = n.y),
          (o = n.width),
          (a = n.height),
          (s = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
          (l = Object.create(s.prototype)),
          kc(l, { x: i, y: r, width: o, height: a, top: r, right: i + o, bottom: a + r, left: i }),
          l);
      kc(this, { target: e, contentRect: c });
    },
    Nc = (function () {
      function e(e, t, n) {
        if (
          ((this.activeObservations_ = []), (this.observations_ = new wc()), 'function' != typeof e)
        )
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
      }
      return (
        (e.prototype.observe = function (e) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof Oc(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) ||
              (t.set(e, new Dc(e)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }),
        (e.prototype.unobserve = function (e) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof Oc(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
          }
        }),
        (e.prototype.disconnect = function () {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }),
        (e.prototype.gatherActive = function () {
          var e = this;
          this.clearActive(),
            this.observations_.forEach(function (t) {
              t.isActive() && e.activeObservations_.push(t);
            });
        }),
        (e.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var e = this.callbackCtx_,
              t = this.activeObservations_.map(function (e) {
                return new jc(e.target, e.broadcastRect());
              });
            this.callback_.call(e, t, e), this.clearActive();
          }
        }),
        (e.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }),
        (e.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }),
        e
      );
    })(),
    Fc = 'undefined' != typeof WeakMap ? new WeakMap() : new wc(),
    Wc = function e(t) {
      if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      var n = Tc.getInstance(),
        i = new Nc(t, n, this);
      Fc.set(this, i);
    };
  ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    Wc.prototype[e] = function () {
      var t;
      return (t = Fc.get(this))[e].apply(t, arguments);
    };
  });
  var Bc = void 0 !== xc.ResizeObserver ? xc.ResizeObserver : Wc;
  function Hc(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  }
  var qc = 'object' == typeof n && n && n.Object === Object && n,
    Vc = 'object' == typeof self && self && self.Object === Object && self,
    Uc = qc || Vc || Function('return this')(),
    $c = function () {
      return Uc.Date.now();
    },
    Gc = Uc.Symbol,
    Zc = Object.prototype,
    Yc = Zc.hasOwnProperty,
    Xc = Zc.toString,
    Kc = Gc ? Gc.toStringTag : void 0;
  var Jc = Object.prototype.toString;
  var Qc = Gc ? Gc.toStringTag : void 0;
  function eu(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : Qc && Qc in Object(e)
      ? (function (e) {
          var t = Yc.call(e, Kc),
            n = e[Kc];
          try {
            e[Kc] = void 0;
            var i = !0;
          } catch (e) {}
          var r = Xc.call(e);
          return i && (t ? (e[Kc] = n) : delete e[Kc]), r;
        })(e)
      : (function (e) {
          return Jc.call(e);
        })(e);
  }
  var tu = /^\s+|\s+$/g,
    nu = /^[-+]0x[0-9a-f]+$/i,
    iu = /^0b[01]+$/i,
    ru = /^0o[0-7]+$/i,
    ou = parseInt;
  function au(e) {
    if ('number' == typeof e) return e;
    if (
      (function (e) {
        return (
          'symbol' == typeof e ||
          ((function (e) {
            return null != e && 'object' == typeof e;
          })(e) &&
            '[object Symbol]' == eu(e))
        );
      })(e)
    )
      return NaN;
    if (Hc(e)) {
      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
      e = Hc(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(tu, '');
    var n = iu.test(e);
    return n || ru.test(e) ? ou(e.slice(2), n ? 2 : 8) : nu.test(e) ? NaN : +e;
  }
  var su = Math.max,
    lu = Math.min;
  function cu(e, t, n) {
    var i,
      r,
      o,
      a,
      s,
      l,
      c = 0,
      u = !1,
      d = !1,
      h = !0;
    if ('function' != typeof e) throw new TypeError('Expected a function');
    function p(t) {
      var n = i,
        o = r;
      return (i = r = void 0), (c = t), (a = e.apply(o, n));
    }
    function f(e) {
      return (c = e), (s = setTimeout(v, t)), u ? p(e) : a;
    }
    function m(e) {
      var n = e - l;
      return void 0 === l || n >= t || n < 0 || (d && e - c >= o);
    }
    function v() {
      var e = $c();
      if (m(e)) return g(e);
      s = setTimeout(
        v,
        (function (e) {
          var n = t - (e - l);
          return d ? lu(n, o - (e - c)) : n;
        })(e)
      );
    }
    function g(e) {
      return (s = void 0), h && i ? p(e) : ((i = r = void 0), a);
    }
    function y() {
      var e = $c(),
        n = m(e);
      if (((i = arguments), (r = this), (l = e), n)) {
        if (void 0 === s) return f(l);
        if (d) return clearTimeout(s), (s = setTimeout(v, t)), p(l);
      }
      return void 0 === s && (s = setTimeout(v, t)), a;
    }
    return (
      (t = au(t) || 0),
      Hc(n) &&
        ((u = !!n.leading),
        (o = (d = 'maxWait' in n) ? su(au(n.maxWait) || 0, t) : o),
        (h = 'trailing' in n ? !!n.trailing : h)),
      (y.cancel = function () {
        void 0 !== s && clearTimeout(s), (c = 0), (i = l = r = s = void 0);
      }),
      (y.flush = function () {
        return void 0 === s ? a : g($c());
      }),
      y
    );
  }
  var uu = {
      debounce: cu,
      throttle: function (e, t, n) {
        var i = !0,
          r = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        return (
          Hc(n) &&
            ((i = 'leading' in n ? !!n.leading : i), (r = 'trailing' in n ? !!n.trailing : r)),
          cu(e, t, { leading: i, maxWait: t, trailing: r })
        );
      },
    },
    du = function (e) {
      return 'function' == typeof e;
    },
    hu = function () {
      return 'undefined' == typeof window;
    };
  function pu(e) {
    return (pu =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function fu(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function mu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function vu(e, t) {
    return !t || ('object' !== pu(t) && 'function' != typeof t)
      ? (function (e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e)
      : t;
  }
  function gu(e) {
    return (gu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function yu(e, t) {
    return (yu =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  var bu = (function (e) {
    function t() {
      return fu(this, t), vu(this, gu(t).apply(this, arguments));
    }
    var n, i, r;
    return (
      (function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && yu(e, t);
      })(t, e),
      (n = t),
      (i = [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]) && mu(n.prototype, i),
      r && mu(n, r),
      t
    );
  })(xe);
  function wu(e) {
    return (wu =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function _u(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function xu(e) {
    return (xu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Su(e) {
    if (void 0 === e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function Cu(e, t) {
    return (Cu =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function Eu(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var Tu = (function (e) {
    function t(e) {
      var n;
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      })(this, t),
        (n = (function (e, t) {
          return !t || ('object' !== wu(t) && 'function' != typeof t) ? Su(e) : t;
        })(this, xu(t).call(this, e))),
        Eu(Su(n), 'cancelHandler', function () {
          n.resizeHandler &&
            n.resizeHandler.cancel &&
            (n.resizeHandler.cancel(), (n.resizeHandler = null));
        }),
        Eu(Su(n), 'rafClean', function () {
          n.raf && n.raf.cancel && (n.raf.cancel(), (n.raf = null));
        }),
        Eu(Su(n), 'toggleObserver', function (e) {
          var t = n.getElement();
          t && n.resizeObserver[e] && n.resizeObserver[e](t);
        }),
        Eu(Su(n), 'getElement', function () {
          var e = n.props,
            t = e.querySelector,
            i = e.targetDomEl;
          if (!hu()) {
            if (t) return document.querySelector(t);
            if (i && ((r = i) instanceof Element || r instanceof HTMLDocument)) return i;
            var r,
              o = n.element && it(n.element);
            if (o) return o.parentElement;
          }
        }),
        Eu(Su(n), 'createUpdater', function () {
          var e, t, i, r;
          return (
            n.rafClean(),
            (n.raf =
              ((e = function (e) {
                var t = e.width,
                  i = e.height,
                  r = n.props.onResize;
                du(r) && r(t, i), n.setState({ width: t, height: i });
              }),
              (t = []),
              (i = null),
              ((r = function () {
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                  r[o] = arguments[o];
                (t = r),
                  i ||
                    (i = requestAnimationFrame(function () {
                      (i = null), e.apply(void 0, t);
                    }));
              }).cancel = function () {
                i && (cancelAnimationFrame(i), (i = null));
              }),
              r)),
            n.raf
          );
        }),
        Eu(Su(n), 'createResizeHandler', function (e) {
          var t = n.state,
            i = t.width,
            r = t.height,
            o = n.props,
            a = o.handleWidth,
            s = o.handleHeight;
          if (a || s) {
            var l = n.createUpdater();
            e.forEach(function (e) {
              var t = (e && e.contentRect) || {},
                o = t.width,
                c = t.height,
                u = (a && i !== o) || (s && r !== c);
              !n.skipOnMount && u && !hu() && l({ width: o, height: c }), (n.skipOnMount = !1);
            });
          }
        }),
        Eu(Su(n), 'onRef', function (e) {
          n.element = e;
        }),
        Eu(Su(n), 'getRenderType', function () {
          var e = n.props,
            t = e.render,
            i = e.children;
          return du(t)
            ? 'renderProp'
            : du(i)
            ? 'childFunction'
            : et(i)
            ? 'child'
            : Array.isArray(i)
            ? 'childArray'
            : 'parent';
        }),
        Eu(Su(n), 'getTargetComponent', function () {
          var e = n.props,
            t = e.render,
            i = e.children,
            r = e.nodeType,
            o = n.state,
            a = { width: o.width, height: o.height };
          switch (n.getRenderType()) {
            case 'renderProp':
              return tt(t(a), { key: 'resize-detector' });
            case 'childFunction':
              return tt(i(a));
            case 'child':
              return tt(i, a);
            case 'childArray':
              return i.map(function (e) {
                return !!e && tt(e, a);
              });
            default:
              return y(r);
          }
        });
      var i = e.skipOnMount,
        r = e.refreshMode,
        o = e.refreshRate,
        a = e.refreshOptions;
      (n.state = { width: void 0, height: void 0 }),
        (n.skipOnMount = i),
        (n.raf = null),
        (n.element = null),
        (n.unmounted = !1);
      var s = uu[r];
      return (
        (n.resizeHandler = s ? s(n.createResizeHandler, o, a) : n.createResizeHandler),
        (n.resizeObserver = new Bc(n.resizeHandler)),
        n
      );
    }
    var n, i, r;
    return (
      (function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Cu(e, t);
      })(t, e),
      (n = t),
      (i = [
        {
          key: 'componentDidMount',
          value: function () {
            this.toggleObserver('observe');
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.toggleObserver('unobserve'),
              this.rafClean(),
              this.cancelHandler(),
              (this.unmounted = !0);
          },
        },
        {
          key: 'render',
          value: function () {
            return at.createElement(bu, { ref: this.onRef }, this.getTargetComponent());
          },
        },
      ]) && _u(n.prototype, i),
      r && _u(n, r),
      t
    );
  })(xe);
  (Tu.propTypes = {
    handleWidth: Pt.bool,
    handleHeight: Pt.bool,
    skipOnMount: Pt.bool,
    refreshRate: Pt.number,
    refreshMode: Pt.string,
    refreshOptions: Pt.shape({ leading: Pt.bool, trailing: Pt.bool }),
    querySelector: Pt.string,
    targetDomEl: Pt.any,
    onResize: Pt.func,
    render: Pt.func,
    children: Pt.any,
    nodeType: Pt.node,
  }),
    (Tu.defaultProps = {
      handleWidth: !1,
      handleHeight: !1,
      skipOnMount: !1,
      refreshRate: 1e3,
      refreshMode: void 0,
      refreshOptions: void 0,
      querySelector: null,
      targetDomEl: null,
      onResize: null,
      render: void 0,
      children: null,
      nodeType: 'div',
    });
  var ku,
    Ou,
    Mu,
    Pu,
    Ru,
    Au,
    Iu,
    Lu,
    zu,
    Du = !1;
  function ju() {
    return (
      Du ||
        ((Du = !0),
        (ku = {}),
        (Ou =
          (29945008).toString(36).toLowerCase() +
          (10)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -39);
            })
            .join('') +
          (1147)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (73112640253685).toString(36).toLowerCase() +
          (30)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 10 - n);
              })
              .join('');
          })(50, 178, 175, 187, 182, 156, 181, 174, 182, 114, 171, 177, 161, 110, 171, 172, 159) +
          (40924532533).toString(36).toLowerCase() +
          (15)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -39);
            })
            .join('') +
          (1025).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 37 - n);
              })
              .join('');
          })(44, 144, 194, 192)),
        (Mu =
          (459).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 46 - n);
              })
              .join('');
          })(41, 207, 200, 190, 188, 188) +
          (18).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 3 - n);
              })
              .join('');
          })(60, 172, 160) +
          (28).toString(36).toLowerCase()),
        (Pu =
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 19 - n);
              })
              .join('');
          })(63, 193) +
          (22).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 36 - n);
              })
              .join('');
          })(60, 213, 201)),
        (Ru =
          (34).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 56 - n);
              })
              .join('');
          })(41, 198) +
          (28).toString(36).toLowerCase()),
        (Au =
          (33587).toString(36).toLowerCase() +
          (29)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (1103).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 56 - n);
              })
              .join('');
          })(35, 205) +
          (40790289862453).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 23 - n);
              })
              .join('');
          })(52, 120) +
          (1003952).toString(36).toLowerCase()),
        (Iu =
          (33587).toString(36).toLowerCase() +
          (29)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (2402647788845).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 5 - n);
              })
              .join('');
          })(9, 129, 115) +
          (517).toString(36).toLowerCase() +
          (29)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (1003952).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 61 - n);
              })
              .join('');
          })(53, 219, 172) +
          (1160451).toString(36).toLowerCase()),
        (Lu =
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 9 - n);
              })
              .join('');
          })(39, 156, 102, 101, 111, 167, 163, 166, 165, 152) +
          (31564).toString(36).toLowerCase() +
          (30)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (43281714).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 16 - n);
              })
              .join('');
          })(16, 83, 158, 140, 153, 149, 131) +
          (672).toString(36).toLowerCase() +
          (31)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (51497080).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 31 - n);
              })
              .join('');
          })(16, 165, 163, 152) +
          (688693).toString(36).toLowerCase() +
          (29)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (10).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 28 - n);
              })
              .join('');
          })(9, 149) +
          (25).toString(36).toLowerCase()),
        (zu =
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 29 - n);
              })
              .join('');
          })(49, 189, 189, 201, 187, 201, 199, 188, 185, 182, 194, 189, 163) +
          (16)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (32)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -39);
            })
            .join('') +
          (1673543405).toString(36).toLowerCase() +
          (13)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -13);
            })
            .join('') +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 38 - n);
              })
              .join('');
          })(60, 203) +
          (35).toString(36).toLowerCase() +
          (16)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -71);
            })
            .join('') +
          (17)
            .toString(36)
            .toLowerCase()
            .split('')
            .map(function (e) {
              return String.fromCharCode(e.charCodeAt() + -39);
            })
            .join('') +
          (25).toString(36).toLowerCase() +
          (function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return e
              .reverse()
              .map(function (e, n) {
                return String.fromCharCode(e - t - 60 - n);
              })
              .join('');
          })(34, 206)),
        (ku = { b: Ou, c: Mu, d: Pu, f: Ru, g: Au, h: Iu, i: Lu, j: zu })),
      ku
    );
  }
  var Nu = {};
  Object.defineProperty(Nu, '__esModule', { value: !0 });
  var Fu = void 0;
  Nu.default = Fu;
  var Wu = Na(i),
    Bu = {};
  Object.defineProperty(Bu, '__esModule', { value: !0 });
  var Hu = function (e, t) {
    var n = Vu.default.memo(
      Vu.default.forwardRef(function (t, n) {
        return Vu.default.createElement(Zu.default, (0, qu.default)({ ref: n }, t), e);
      })
    );
    0;
    return (n.muiName = Zu.default.muiName), n;
  };
  Bu.default = Hu;
  var qu = Na(Ga),
    Vu = Na(i),
    Uu = {};
  t(Uu);
  var $u = at.forwardRef(function (e, t) {
    var n = e.children,
      i = e.classes,
      r = e.className,
      o = e.color,
      a = void 0 === o ? 'inherit' : o,
      s = e.component,
      l = void 0 === s ? 'svg' : s,
      c = e.fontSize,
      u = void 0 === c ? 'default' : c,
      d = e.htmlColor,
      h = e.titleAccess,
      p = e.viewBox,
      f = void 0 === p ? '0 0 24 24' : p,
      m = mt(e, [
        'children',
        'classes',
        'className',
        'color',
        'component',
        'fontSize',
        'htmlColor',
        'titleAccess',
        'viewBox',
      ]);
    return at.createElement(
      l,
      gt(
        {
          className: ba(
            i.root,
            r,
            'inherit' !== a && i['color'.concat(gc(a))],
            'default' !== u && i['fontSize'.concat(gc(u))]
          ),
          focusable: 'false',
          viewBox: f,
          color: d,
          'aria-hidden': h ? void 0 : 'true',
          role: h ? 'img' : 'presentation',
          ref: t,
        },
        m
      ),
      n,
      h ? at.createElement('title', null, h) : null
    );
  });
  $u.muiName = 'SvgIcon';
  var Gu = Da(
    function (e) {
      return {
        root: {
          userSelect: 'none',
          width: '1em',
          height: '1em',
          display: 'inline-block',
          fill: 'currentColor',
          flexShrink: 0,
          fontSize: e.typography.pxToRem(24),
          transition: e.transitions.create('fill', { duration: e.transitions.duration.shorter }),
        },
        colorPrimary: { color: e.palette.primary.main },
        colorSecondary: { color: e.palette.secondary.main },
        colorAction: { color: e.palette.action.active },
        colorError: { color: e.palette.error.main },
        colorDisabled: { color: e.palette.action.disabled },
        fontSizeInherit: { fontSize: 'inherit' },
        fontSizeSmall: { fontSize: e.typography.pxToRem(20) },
        fontSizeLarge: { fontSize: e.typography.pxToRem(35) },
      };
    },
    { name: 'PwzrSvgIcon' }
  )($u);
  Uu.default = Gu;
  var Zu = Na(Uu);
  (Fu = (0, Na(Bu).default)(
    Wu.default.createElement('path', {
      d: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
    }),
    'KeyboardArrowLeft'
  )),
    (Nu.default = Fu);
  var Yu = {};
  Object.defineProperty(Yu, '__esModule', { value: !0 });
  var Xu = void 0;
  Yu.default = Xu;
  var Ku = Na(i);
  (Xu = (0, Na(Bu).default)(
    Ku.default.createElement('path', {
      d: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    }),
    'KeyboardArrowRight'
  )),
    (Yu.default = Xu);
  var Ju = {};
  Object.defineProperty(Ju, '__esModule', { value: !0 });
  var Qu = void 0;
  Ju.default = Qu;
  var ed = Na(i);
  (Qu = (0, Na(Bu).default)(
    ed.default.createElement('path', {
      d: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    }),
    'KeyboardArrowDown'
  )),
    (Ju.default = Qu);
  var td = {};
  Object.defineProperty(td, '__esModule', { value: !0 });
  var nd = void 0;
  td.default = nd;
  var id = Na(i);
  (nd = (0, Na(Bu).default)(
    id.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' }),
    'KeyboardArrowUp'
  )),
    (td.default = nd);
  var rd,
    od = new Error('Element already at target scroll position'),
    ad = new Error('Scroll cancelled'),
    sd = Math.min,
    ld = Date.now;
  function cd(e) {
    return function (t, n, i, r) {
      'function' == typeof (i = i || {}) && ((r = i), (i = {})), 'function' != typeof r && (r = dd);
      var o = ld(),
        a = t[e],
        s = i.ease || ud,
        l = isNaN(i.duration) ? 350 : +i.duration,
        c = !1;
      return (
        a === n
          ? r(od, t[e])
          : requestAnimationFrame(function i(u) {
              if (c) return r(ad, t[e]);
              var d = ld(),
                h = sd(1, (d - o) / l),
                p = s(h);
              (t[e] = p * (n - a) + a),
                h < 1
                  ? requestAnimationFrame(i)
                  : requestAnimationFrame(function () {
                      r(null, t[e]);
                    });
            }),
        function () {
          c = !0;
        }
      );
    };
  }
  function ud(e) {
    return 0.5 * (1 - Math.cos(Math.PI * e));
  }
  function dd() {}
  rd = { left: cd('scrollLeft'), top: cd('scrollTop') };
  var hd,
    pd = {},
    fd =
      ('undefined' != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
  if (fd) {
    var md = new Uint8Array(16);
    pd = function () {
      return fd(md), md;
    };
  } else {
    var vd = new Array(16);
    pd = function () {
      for (var e, t = 0; t < 16; t++)
        0 == (3 & t) && (e = 4294967296 * Math.random()), (vd[t] = (e >>> ((3 & t) << 3)) & 255);
      return vd;
    };
  }
  for (var gd = {}, yd = [], bd = 0; bd < 256; ++bd) yd[bd] = (bd + 256).toString(16).substr(1);
  function wd(e) {
    return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
  }
  (gd = function (e, t) {
    var n = t || 0,
      i = yd;
    return [
      i[e[n++]],
      i[e[n++]],
      i[e[n++]],
      i[e[n++]],
      '-',
      i[e[n++]],
      i[e[n++]],
      '-',
      i[e[n++]],
      i[e[n++]],
      '-',
      i[e[n++]],
      i[e[n++]],
      '-',
      i[e[n++]],
      i[e[n++]],
      i[e[n++]],
      i[e[n++]],
      i[e[n++]],
      i[e[n++]],
    ].join('');
  }),
    (hd = function (e, t, n) {
      var i = (t && n) || 0;
      'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
      var r = (e = e || {}).random || (e.rng || pd)();
      if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t))
        for (var o = 0; o < 16; ++o) t[i + o] = r[o];
      return t || gd(r);
    });
  var _d = {};
  Object.defineProperty(_d, '__esModule', { value: !0 });
  var xd = void 0;
  _d.default = xd;
  var Sd = Na(Ga),
    Cd = Na(jl);
  function Ed(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (n) {
        void 0 === e[n]
          ? (e[n] = t[n])
          : wd(t[n]) && wd(e[n]) && Object.keys(t[n]).length > 0 && Ed(e[n], t[n]);
      });
  }
  (xd = function (e, t) {
    return Ia(e, (0, Sd.default)({ defaultTheme: Cd.default }, t));
  }),
    (_d.default = xd);
  var Td = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: '' },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function kd() {
    var e = 'undefined' != typeof document ? document : {};
    return Ed(e, Td), e;
  }
  var Od = {
    document: Td,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return '';
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    },
  };
  function Md() {
    var e = 'undefined' != typeof window ? window : {};
    return Ed(e, Od), e;
  }
  function Pd(e) {
    return (Pd = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Rd(e, t) {
    return (Rd =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function Ad() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function Id(e, t, n) {
    return (Id = Ad()
      ? Reflect.construct
      : function (e, t, n) {
          var i = [null];
          i.push.apply(i, t);
          var r = new (Function.bind.apply(e, i))();
          return n && Rd(r, n.prototype), r;
        }).apply(null, arguments);
  }
  function Ld(e) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (Ld = function (e) {
      if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]')))
        return e;
      var n;
      if ('function' != typeof e)
        throw new TypeError('Super expression must either be null or a function');
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return Id(e, arguments, Pd(this).constructor);
      }
      return (
        (i.prototype = Object.create(e.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Rd(i, e)
      );
    })(e);
  }
  var zd = (function (e) {
    var t, n;
    function i(t) {
      var n, i, r;
      return (
        (n = e.call.apply(e, [this].concat(t)) || this),
        (i = (function (e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(n)),
        (r = i.__proto__),
        Object.defineProperty(i, '__proto__', {
          get: function () {
            return r;
          },
          set: function (e) {
            r.__proto__ = e;
          },
        }),
        n
      );
    }
    return (
      (n = e),
      ((t = i).prototype = Object.create(n.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = n),
      i
    );
  })(Ld(Array));
  function Dd(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, Dd(e)) : t.push(e);
      }),
      t
    );
  }
  function jd(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function Nd(e, t) {
    var n = Md(),
      i = kd(),
      r = [];
    if (!t && e instanceof zd) return e;
    if (!e) return new zd(r);
    if ('string' == typeof e) {
      var o = e.trim();
      if (o.indexOf('<') >= 0 && o.indexOf('>') >= 0) {
        var a = 'div';
        0 === o.indexOf('<li') && (a = 'ul'),
          0 === o.indexOf('<tr') && (a = 'tbody'),
          (0 !== o.indexOf('<td') && 0 !== o.indexOf('<th')) || (a = 'tr'),
          0 === o.indexOf('<tbody') && (a = 'table'),
          0 === o.indexOf('<option') && (a = 'select');
        var s = i.createElement(a);
        s.innerHTML = o;
        for (var l = 0; l < s.childNodes.length; l += 1) r.push(s.childNodes[l]);
      } else
        r = (function (e, t) {
          if ('string' != typeof e) return [e];
          for (var n = [], i = t.querySelectorAll(e), r = 0; r < i.length; r += 1) n.push(i[r]);
          return n;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === n || e === i) r.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof zd) return e;
      r = e;
    }
    return new zd(
      (function (e) {
        for (var t = [], n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      })(r)
    );
  }
  Nd.fn = zd.prototype;
  var Fd = 'resize scroll'.split(' ');
  function Wd(e) {
    return function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      if (void 0 === n[0]) {
        for (var r = 0; r < this.length; r += 1)
          Fd.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : Nd(this[r]).trigger(e));
        return this;
      }
      return this.on.apply(this, [e].concat(n));
    };
  }
  Wd('click'),
    Wd('blur'),
    Wd('focus'),
    Wd('focusin'),
    Wd('focusout'),
    Wd('keyup'),
    Wd('keydown'),
    Wd('keypress'),
    Wd('submit'),
    Wd('change'),
    Wd('mousedown'),
    Wd('mousemove'),
    Wd('mouseup'),
    Wd('mouseenter'),
    Wd('mouseleave'),
    Wd('mouseout'),
    Wd('mouseover'),
    Wd('touchstart'),
    Wd('touchend'),
    Wd('touchmove'),
    Wd('resize'),
    Wd('scroll');
  var Bd,
    Hd,
    qd,
    Vd = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = Dd(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = Dd(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = Dd(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        return (
          jd(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = Dd(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && 'string' == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else for (var i in e) (this[n][i] = e[i]), this[n].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration = 'string' != typeof e ? e + 'ms' : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = t[0],
          r = t[1],
          o = t[2],
          a = t[3];
        function s(e) {
          var t = e.target;
          if (t) {
            var n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), Nd(t).is(r))) o.apply(t, n);
            else
              for (var i = Nd(t).parents(), a = 0; a < i.length; a += 1)
                Nd(i[a]).is(r) && o.apply(i[a], n);
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t);
        }
        'function' == typeof t[1] && ((i = t[0]), (o = t[1]), (a = t[2]), (r = void 0)),
          a || (a = !1);
        for (var c, u = i.split(' '), d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (r)
            for (c = 0; c < u.length; c += 1) {
              var p = u[c];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []),
                h.dom7LiveListeners[p].push({ listener: o, proxyListener: s }),
                h.addEventListener(p, s, a);
            }
          else
            for (c = 0; c < u.length; c += 1) {
              var f = u[c];
              h.dom7Listeners || (h.dom7Listeners = {}),
                h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
                h.dom7Listeners[f].push({ listener: o, proxyListener: l }),
                h.addEventListener(f, l, a);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = t[0],
          r = t[1],
          o = t[2],
          a = t[3];
        'function' == typeof t[1] && ((i = t[0]), (o = t[1]), (a = t[2]), (r = void 0)),
          a || (a = !1);
        for (var s = i.split(' '), l = 0; l < s.length; l += 1)
          for (var c = s[l], u = 0; u < this.length; u += 1) {
            var d = this[u],
              h = void 0;
            if (
              (!r && d.dom7Listeners
                ? (h = d.dom7Listeners[c])
                : r && d.dom7LiveListeners && (h = d.dom7LiveListeners[c]),
              h && h.length)
            )
              for (var p = h.length - 1; p >= 0; p -= 1) {
                var f = h[p];
                (o && f.listener === o) ||
                (o && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === o)
                  ? (d.removeEventListener(c, f.proxyListener, a), h.splice(p, 1))
                  : o || (d.removeEventListener(c, f.proxyListener, a), h.splice(p, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (var e = Md(), t = arguments.length, n = new Array(t), i = 0; i < t; i++)
          n[i] = arguments[i];
        for (var r = n[0].split(' '), o = n[1], a = 0; a < r.length; a += 1)
          for (var s = r[a], l = 0; l < this.length; l += 1) {
            var c = this[l];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(s, { detail: o, bubbles: !0, cancelable: !0 });
              (c.dom7EventData = n.filter(function (e, t) {
                return t > 0;
              })),
                c.dispatchEvent(u),
                (c.dom7EventData = []),
                delete c.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on('transitionend', function n(i) {
              i.target === this && (e.call(this, i), t.off('transitionend', n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue('margin-right')) +
              parseFloat(t.getPropertyValue('margin-left'))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue('margin-top')) +
              parseFloat(t.getPropertyValue('margin-bottom'))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = Md();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = Md(),
            t = kd(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = t.body,
            o = n.clientTop || r.clientTop || 0,
            a = n.clientLeft || r.clientLeft || 0,
            s = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + s - o, left: i.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        var n,
          i = Md();
        if (1 === arguments.length) {
          if ('string' != typeof e) {
            for (n = 0; n < this.length; n += 1) for (var r in e) this[n].style[r] = e[r];
            return this;
          }
          if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && 'string' == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, n) {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          n,
          i = Md(),
          r = kd(),
          o = this[0];
        if (!o || void 0 === e) return !1;
        if ('string' == typeof e) {
          if (o.matches) return o.matches(e);
          if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
          if (o.msMatchesSelector) return o.msMatchesSelector(e);
          for (t = Nd(e), n = 0; n < t.length; n += 1) if (t[n] === o) return !0;
          return !1;
        }
        if (e === r) return o === r;
        if (e === i) return o === i;
        if (e.nodeType || e instanceof zd) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1) if (t[n] === o) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return Nd([]);
        if (e < 0) {
          var n = t + e;
          return Nd(n < 0 ? [] : [this[n]]);
        }
        return Nd([this[e]]);
      },
      append: function () {
        for (var e, t = kd(), n = 0; n < arguments.length; n += 1) {
          e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          for (var i = 0; i < this.length; i += 1)
            if ('string' == typeof e) {
              var r = t.createElement('div');
              for (r.innerHTML = e; r.firstChild; ) this[i].appendChild(r.firstChild);
            } else if (e instanceof zd)
              for (var o = 0; o < e.length; o += 1) this[i].appendChild(e[o]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          n,
          i = kd();
        for (t = 0; t < this.length; t += 1)
          if ('string' == typeof e) {
            var r = i.createElement('div');
            for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1)
              this[t].insertBefore(r.childNodes[n], this[t].childNodes[0]);
          } else if (e instanceof zd)
            for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && Nd(this[0].nextElementSibling).is(e)
              ? Nd([this[0].nextElementSibling])
              : Nd([])
            : this[0].nextElementSibling
            ? Nd([this[0].nextElementSibling])
            : Nd([])
          : Nd([]);
      },
      nextAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return Nd([]);
        for (; n.nextElementSibling; ) {
          var i = n.nextElementSibling;
          e ? Nd(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return Nd(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && Nd(t.previousElementSibling).is(e)
              ? Nd([t.previousElementSibling])
              : Nd([])
            : t.previousElementSibling
            ? Nd([t.previousElementSibling])
            : Nd([]);
        }
        return Nd([]);
      },
      prevAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return Nd([]);
        for (; n.previousElementSibling; ) {
          var i = n.previousElementSibling;
          e ? Nd(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return Nd(t);
      },
      parent: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? Nd(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return Nd(t);
      },
      parents: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].parentNode; i; )
            e ? Nd(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        return Nd(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? Nd([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
        return Nd(t);
      },
      children: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].children, r = 0; r < i.length; r += 1)
            (e && !Nd(i[r]).is(e)) || t.push(i[r]);
        return Nd(t);
      },
      filter: function (e) {
        return Nd(jd(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
  function Ud(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function $d() {
    return Date.now();
  }
  function Gd(e) {
    return 'object' == typeof e && null !== e && e.constructor && e.constructor === Object;
  }
  function Zd() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
      t < arguments.length;
      t += 1
    ) {
      var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != n)
        for (var i = Object.keys(Object(n)), r = 0, o = i.length; r < o; r += 1) {
          var a = i[r],
            s = Object.getOwnPropertyDescriptor(n, a);
          void 0 !== s &&
            s.enumerable &&
            (Gd(e[a]) && Gd(n[a])
              ? Zd(e[a], n[a])
              : !Gd(e[a]) && Gd(n[a])
              ? ((e[a] = {}), Zd(e[a], n[a]))
              : (e[a] = n[a]));
        }
    }
    return e;
  }
  function Yd(e, t) {
    Object.keys(t).forEach(function (n) {
      Gd(t[n]) &&
        Object.keys(t[n]).forEach(function (i) {
          'function' == typeof t[n][i] && (t[n][i] = t[n][i].bind(e));
        }),
        (e[n] = t[n]);
    });
  }
  function Xd() {
    return (
      Bd ||
        (Bd = (function () {
          var e = Md(),
            t = kd();
          return {
            touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
            pointerEvents:
              !!e.PointerEvent &&
              'maxTouchPoints' in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: 'MutationObserver' in e || 'WebkitMutationObserver' in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var n = Object.defineProperty({}, 'passive', {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener('testPassiveListener', null, n);
              } catch (e) {}
              return t;
            })(),
            gestures: 'ongesturestart' in e,
          };
        })()),
      Bd
    );
  }
  function Kd(e) {
    return (
      void 0 === e && (e = {}),
      Hd ||
        (Hd = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
            n = Xd(),
            i = Md(),
            r = i.navigator.platform,
            o = t || i.navigator.userAgent,
            a = { ios: !1, android: !1 },
            s = i.screen.width,
            l = i.screen.height,
            c = o.match(/(Android);?[\s\/]+([\d.]+)?/),
            u = o.match(/(iPad).*OS\s([\d_]+)/),
            d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            p = 'Win32' === r,
            f = 'MacIntel' === r;
          return (
            !u &&
              f &&
              n.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
              ].indexOf(s + 'x' + l) >= 0 &&
              ((u = o.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, '13_0_0']), (f = !1)),
            c && !p && ((a.os = 'android'), (a.android = !0)),
            (u || h || d) && ((a.os = 'ios'), (a.ios = !0)),
            a
          );
        })(e)),
      Hd
    );
  }
  function Jd() {
    return (
      qd ||
        (qd = (function () {
          var e,
            t = Md();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
          };
        })()),
      qd
    );
  }
  Object.keys(Vd).forEach(function (e) {
    Nd.fn[e] = Vd[e];
  });
  var Qd = {
    name: 'resize',
    create: function () {
      var e = this;
      Zd(e, {
        resize: {
          resizeHandler: function () {
            e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'));
          },
          orientationChangeHandler: function () {
            e && !e.destroyed && e.initialized && e.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function (e) {
        var t = Md();
        t.addEventListener('resize', e.resize.resizeHandler),
          t.addEventListener('orientationchange', e.resize.orientationChangeHandler);
      },
      destroy: function (e) {
        var t = Md();
        t.removeEventListener('resize', e.resize.resizeHandler),
          t.removeEventListener('orientationchange', e.resize.orientationChangeHandler);
      },
    },
  };
  function eh() {
    return (eh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  var th = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var n = Md(),
          i = this,
          r = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
            if (1 !== e.length) {
              var t = function () {
                i.emit('observerUpdate', e[0]);
              };
              n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
            } else i.emit('observerUpdate', e[0]);
          });
        r.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(r);
      },
      init: function () {
        if (this.support.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
              this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    nh = {
      name: 'observer',
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        Yd(this, { observer: eh({}, th, { observers: [] }) });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        },
      },
    };
  function ih(e) {
    var t = kd(),
      n = Md(),
      i = this.touchEventsData,
      r = this.params,
      o = this.touches;
    if (!this.animating || !r.preventInteractionOnTransition) {
      var a = e;
      a.originalEvent && (a = a.originalEvent);
      var s = Nd(a.target);
      if ('wrapper' !== r.touchEventsTarget || s.closest(this.wrapperEl).length)
        if (
          ((i.isTouchEvent = 'touchstart' === a.type),
          i.isTouchEvent || !('which' in a) || 3 !== a.which)
        )
          if (!(!i.isTouchEvent && 'button' in a && a.button > 0))
            if (!i.isTouched || !i.isMoved)
              if (
                (!!r.noSwipingClass &&
                  '' !== r.noSwipingClass &&
                  a.target &&
                  a.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (s = Nd(e.path[0])),
                r.noSwiping &&
                  s.closest(r.noSwipingSelector ? r.noSwipingSelector : '.' + r.noSwipingClass)[0])
              )
                this.allowClick = !0;
              else if (!r.swipeHandler || s.closest(r.swipeHandler)[0]) {
                (o.currentX = 'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX),
                  (o.currentY = 'touchstart' === a.type ? a.targetTouches[0].pageY : a.pageY);
                var l = o.currentX,
                  c = o.currentY,
                  u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                  d = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (u && (l <= d || l >= n.innerWidth - d)) {
                  if ('prevent' !== u) return;
                  e.preventDefault();
                }
                if (
                  (Zd(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (o.startX = l),
                  (o.startY = c),
                  (i.touchStartTime = $d()),
                  (this.allowClick = !0),
                  this.updateSize(),
                  (this.swipeDirection = void 0),
                  r.threshold > 0 && (i.allowThresholdMove = !1),
                  'touchstart' !== a.type)
                ) {
                  var h = !0;
                  s.is(i.formElements) && (h = !1),
                    t.activeElement &&
                      Nd(t.activeElement).is(i.formElements) &&
                      t.activeElement !== s[0] &&
                      t.activeElement.blur();
                  var p = h && this.allowTouchMove && r.touchStartPreventDefault;
                  (!r.touchStartForcePreventDefault && !p) ||
                    s[0].isContentEditable ||
                    a.preventDefault();
                }
                this.emit('touchStart', a);
              }
    }
  }
  function rh(e) {
    var t = kd(),
      n = this.touchEventsData,
      i = this.params,
      r = this.touches,
      o = this.rtlTranslate,
      a = e;
    if ((a.originalEvent && (a = a.originalEvent), n.isTouched)) {
      if (!n.isTouchEvent || 'touchmove' === a.type) {
        var s =
            'touchmove' === a.type &&
            a.targetTouches &&
            (a.targetTouches[0] || a.changedTouches[0]),
          l = 'touchmove' === a.type ? s.pageX : a.pageX,
          c = 'touchmove' === a.type ? s.pageY : a.pageY;
        if (a.preventedByNestedSwiper) return (r.startX = l), void (r.startY = c);
        if (!this.allowTouchMove)
          return (
            (this.allowClick = !1),
            void (
              n.isTouched &&
              (Zd(r, { startX: l, startY: c, currentX: l, currentY: c }), (n.touchStartTime = $d()))
            )
          );
        if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (this.isVertical()) {
            if (
              (c < r.startY && this.translate <= this.maxTranslate()) ||
              (c > r.startY && this.translate >= this.minTranslate())
            )
              return (n.isTouched = !1), void (n.isMoved = !1);
          } else if (
            (l < r.startX && this.translate <= this.maxTranslate()) ||
            (l > r.startX && this.translate >= this.minTranslate())
          )
            return;
        if (
          n.isTouchEvent &&
          t.activeElement &&
          a.target === t.activeElement &&
          Nd(a.target).is(n.formElements)
        )
          return (n.isMoved = !0), void (this.allowClick = !1);
        if (
          (n.allowTouchCallbacks && this.emit('touchMove', a),
          !(a.targetTouches && a.targetTouches.length > 1))
        ) {
          (r.currentX = l), (r.currentY = c);
          var u = r.currentX - r.startX,
            d = r.currentY - r.startY;
          if (
            !(
              this.params.threshold &&
              Math.sqrt(Math.pow(u, 2) + Math.pow(d, 2)) < this.params.threshold
            )
          ) {
            var h;
            if (void 0 === n.isScrolling)
              (this.isHorizontal() && r.currentY === r.startY) ||
              (this.isVertical() && r.currentX === r.startX)
                ? (n.isScrolling = !1)
                : u * u + d * d >= 25 &&
                  ((h = (180 * Math.atan2(Math.abs(d), Math.abs(u))) / Math.PI),
                  (n.isScrolling = this.isHorizontal() ? h > i.touchAngle : 90 - h > i.touchAngle));
            if (
              (n.isScrolling && this.emit('touchMoveOpposite', a),
              void 0 === n.startMoving &&
                ((r.currentX === r.startX && r.currentY === r.startY) || (n.startMoving = !0)),
              n.isScrolling)
            )
              n.isTouched = !1;
            else if (n.startMoving) {
              (this.allowClick = !1),
                !i.cssMode && a.cancelable && a.preventDefault(),
                i.touchMoveStopPropagation && !i.nested && a.stopPropagation(),
                n.isMoved ||
                  (i.loop && this.loopFix(),
                  (n.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating && this.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                  (n.allowMomentumBounce = !1),
                  !i.grabCursor ||
                    (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) ||
                    this.setGrabCursor(!0),
                  this.emit('sliderFirstMove', a)),
                this.emit('sliderMove', a),
                (n.isMoved = !0);
              var p = this.isHorizontal() ? u : d;
              (r.diff = p),
                (p *= i.touchRatio),
                o && (p = -p),
                (this.swipeDirection = p > 0 ? 'prev' : 'next'),
                (n.currentTranslate = p + n.startTranslate);
              var f = !0,
                m = i.resistanceRatio;
              if (
                (i.touchReleaseOnEdges && (m = 0),
                p > 0 && n.currentTranslate > this.minTranslate()
                  ? ((f = !1),
                    i.resistance &&
                      (n.currentTranslate =
                        this.minTranslate() -
                        1 +
                        Math.pow(-this.minTranslate() + n.startTranslate + p, m)))
                  : p < 0 &&
                    n.currentTranslate < this.maxTranslate() &&
                    ((f = !1),
                    i.resistance &&
                      (n.currentTranslate =
                        this.maxTranslate() +
                        1 -
                        Math.pow(this.maxTranslate() - n.startTranslate - p, m))),
                f && (a.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  'next' === this.swipeDirection &&
                  n.currentTranslate < n.startTranslate &&
                  (n.currentTranslate = n.startTranslate),
                !this.allowSlidePrev &&
                  'prev' === this.swipeDirection &&
                  n.currentTranslate > n.startTranslate &&
                  (n.currentTranslate = n.startTranslate),
                i.threshold > 0)
              ) {
                if (!(Math.abs(p) > i.threshold || n.allowThresholdMove))
                  return void (n.currentTranslate = n.startTranslate);
                if (!n.allowThresholdMove)
                  return (
                    (n.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (n.currentTranslate = n.startTranslate),
                    void (r.diff = this.isHorizontal()
                      ? r.currentX - r.startX
                      : r.currentY - r.startY)
                  );
              }
              i.followFinger &&
                !i.cssMode &&
                ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                i.freeMode &&
                  (0 === n.velocities.length &&
                    n.velocities.push({
                      position: r[this.isHorizontal() ? 'startX' : 'startY'],
                      time: n.touchStartTime,
                    }),
                  n.velocities.push({
                    position: r[this.isHorizontal() ? 'currentX' : 'currentY'],
                    time: $d(),
                  })),
                this.updateProgress(n.currentTranslate),
                this.setTranslate(n.currentTranslate));
            }
          }
        }
      }
    } else n.startMoving && n.isScrolling && this.emit('touchMoveOpposite', a);
  }
  function oh(e) {
    var t = this,
      n = t.touchEventsData,
      i = t.params,
      r = t.touches,
      o = t.rtlTranslate,
      a = t.$wrapperEl,
      s = t.slidesGrid,
      l = t.snapGrid,
      c = e;
    if (
      (c.originalEvent && (c = c.originalEvent),
      n.allowTouchCallbacks && t.emit('touchEnd', c),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    )
      return (
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        void (n.startMoving = !1)
      );
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var u,
      d = $d(),
      h = d - n.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(c),
        t.emit('tap click', c),
        h < 300 && d - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', c)),
      (n.lastClickTime = $d()),
      Ud(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        n.currentTranslate === n.startTranslate)
    )
      return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
    if (
      ((n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1),
      (u = i.followFinger ? (o ? t.translate : -t.translate) : -n.currentTranslate),
      !i.cssMode)
    )
      if (i.freeMode) {
        if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (u > -t.maxTranslate())
          return void (t.slides.length < l.length
            ? t.slideTo(l.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (i.freeModeMomentum) {
          if (n.velocities.length > 1) {
            var p = n.velocities.pop(),
              f = n.velocities.pop(),
              m = p.position - f.position,
              v = p.time - f.time;
            (t.velocity = m / v),
              (t.velocity /= 2),
              Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
              (v > 150 || $d() - p.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= i.freeModeMomentumVelocityRatio), (n.velocities.length = 0);
          var g = 1e3 * i.freeModeMomentumRatio,
            y = t.velocity * g,
            b = t.translate + y;
          o && (b = -b);
          var w,
            _,
            x = !1,
            S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
          if (b < t.maxTranslate())
            i.freeModeMomentumBounce
              ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S),
                (w = t.maxTranslate()),
                (x = !0),
                (n.allowMomentumBounce = !0))
              : (b = t.maxTranslate()),
              i.loop && i.centeredSlides && (_ = !0);
          else if (b > t.minTranslate())
            i.freeModeMomentumBounce
              ? (b - t.minTranslate() > S && (b = t.minTranslate() + S),
                (w = t.minTranslate()),
                (x = !0),
                (n.allowMomentumBounce = !0))
              : (b = t.minTranslate()),
              i.loop && i.centeredSlides && (_ = !0);
          else if (i.freeModeSticky) {
            for (var C, E = 0; E < l.length; E += 1)
              if (l[E] > -b) {
                C = E;
                break;
              }
            b = -(b =
              Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || 'next' === t.swipeDirection
                ? l[C]
                : l[C - 1]);
          }
          if (
            (_ &&
              t.once('transitionEnd', function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((g = o
                ? Math.abs((-b - t.translate) / t.velocity)
                : Math.abs((b - t.translate) / t.velocity)),
              i.freeModeSticky)
            ) {
              var T = Math.abs((o ? -b : b) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
              g = T < k ? i.speed : T < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
            }
          } else if (i.freeModeSticky) return void t.slideToClosest();
          i.freeModeMomentumBounce && x
            ? (t.updateProgress(w),
              t.setTransition(g),
              t.setTranslate(b),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              a.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  n.allowMomentumBounce &&
                  (t.emit('momentumBounce'),
                  t.setTransition(i.speed),
                  setTimeout(function () {
                    t.setTranslate(w),
                      a.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(b),
              t.setTransition(g),
              t.setTranslate(b),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                a.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(b),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (i.freeModeSticky) return void t.slideToClosest();
        (!i.freeModeMomentum || h >= i.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var O = 0, M = t.slidesSizesGrid[0], P = 0;
          P < s.length;
          P += P < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          var R = P < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== s[P + R]
            ? u >= s[P] && u < s[P + R] && ((O = P), (M = s[P + R] - s[P]))
            : u >= s[P] && ((O = P), (M = s[s.length - 1] - s[s.length - 2]));
        }
        var A = (u - s[O]) / M,
          I = O < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (h > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo(O + I) : t.slideTo(O)),
            'prev' === t.swipeDirection &&
              (A > 1 - i.longSwipesRatio ? t.slideTo(O + I) : t.slideTo(O));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
            ? c.target === t.navigation.nextEl
              ? t.slideTo(O + I)
              : t.slideTo(O)
            : ('next' === t.swipeDirection && t.slideTo(O + I),
              'prev' === t.swipeDirection && t.slideTo(O));
        }
      }
  }
  function ah() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var n = this.allowSlideNext,
        i = this.allowSlidePrev,
        r = this.snapGrid;
      (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
        this.isEnd &&
        !this.isBeginning &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
        (this.allowSlidePrev = i),
        (this.allowSlideNext = n),
        this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
    }
  }
  function sh(e) {
    this.allowClick ||
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function lh() {
    var e = this.wrapperEl,
      t = this.rtlTranslate;
    (this.previousTranslate = this.translate),
      this.isHorizontal()
        ? (this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft)
        : (this.translate = -e.scrollTop),
      -0 === this.translate && (this.translate = 0),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
    var n = this.maxTranslate() - this.minTranslate();
    (0 === n ? 0 : (this.translate - this.minTranslate()) / n) !== this.progress &&
      this.updateProgress(t ? -this.translate : this.translate),
      this.emit('setTranslate', this.translate, !1);
  }
  var ch = !1;
  function uh() {}
  var dh = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    nested: !1,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: 0.02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'pwzrswiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: 'pwzrswiper-container-',
    slideClass: 'pwzrswiper-slide',
    slideBlankClass: 'pwzrswiper-slide-invisible-blank',
    slideActiveClass: 'pwzrswiper-slide-active',
    slideDuplicateActiveClass: 'pwzrswiper-slide-duplicate-active',
    slideVisibleClass: 'pwzrswiper-slide-visible',
    slideDuplicateClass: 'pwzrswiper-slide-duplicate',
    slideNextClass: 'pwzrswiper-slide-next',
    slideDuplicateNextClass: 'pwzrswiper-slide-duplicate-next',
    slidePrevClass: 'pwzrswiper-slide-prev',
    slideDuplicatePrevClass: 'pwzrswiper-slide-duplicate-prev',
    wrapperClass: 'pwzrswiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function hh(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  var ph = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (n) {
              var i = t.modules[n];
              i.params && Zd(e, i.params);
            });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (n) {
              var i = t.modules[n],
                r = e[n] || {};
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(function (e) {
                  t.on(e, i.on[e]);
                }),
                i.create && i.create.bind(t)(r);
            });
        },
      },
      eventsEmitter: {
        on: function (e, t, n) {
          var i = this;
          if ('function' != typeof t) return i;
          var r = n ? 'unshift' : 'push';
          return (
            e.split(' ').forEach(function (e) {
              i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once: function (e, t, n) {
          var i = this;
          if ('function' != typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            t.apply(i, o);
          }
          return (r.__emitterProxy = t), i.on(e, r, n);
        },
        onAny: function (e, t) {
          if ('function' != typeof e) return this;
          var n = t ? 'unshift' : 'push';
          return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[n](e), this;
        },
        offAny: function (e) {
          if (!this.eventsAnyListeners) return this;
          var t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off: function (e, t) {
          var n = this;
          return n.eventsListeners
            ? (e.split(' ').forEach(function (e) {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (i, r) {
                      (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            i = this;
          if (!i.eventsListeners) return i;
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
          'string' == typeof o[0] || Array.isArray(o[0])
            ? ((e = o[0]), (t = o.slice(1, o.length)), (n = i))
            : ((e = o[0].events), (t = o[0].data), (n = o[0].context || i)),
            t.unshift(n);
          var s = Array.isArray(e) ? e : e.split(' ');
          return (
            s.forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(n, [e].concat(t));
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            i
          );
        },
      },
      update: {
        updateSize: function () {
          var e,
            t,
            n = this.$el;
          (e =
            void 0 !== this.params.width && null !== this.params.width
              ? this.params.width
              : n[0].clientWidth),
            (t =
              void 0 !== this.params.height && null !== this.params.height
                ? this.params.height
                : n[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e =
                e -
                parseInt(n.css('padding-left') || 0, 10) -
                parseInt(n.css('padding-right') || 0, 10)),
              (t =
                t -
                parseInt(n.css('padding-top') || 0, 10) -
                parseInt(n.css('padding-bottom') || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Zd(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this,
            t = function (t) {
              return e.isHorizontal()
                ? t
                : {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                  }[t];
            },
            n = function (e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            },
            i = Md(),
            r = e.params,
            o = e.$wrapperEl,
            a = e.size,
            s = e.rtlTranslate,
            l = e.wrongRTL,
            c = e.virtual && r.virtual.enabled,
            u = c ? e.virtual.slides.length : e.slides.length,
            d = o.children('.' + e.params.slideClass),
            h = c ? e.virtual.slides.length : d.length,
            p = [],
            f = [],
            m = [],
            v = r.slidesOffsetBefore;
          'function' == typeof v && (v = r.slidesOffsetBefore.call(e));
          var g = r.slidesOffsetAfter;
          'function' == typeof g && (g = r.slidesOffsetAfter.call(e));
          var y = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = r.spaceBetween,
            _ = -v,
            x = 0,
            S = 0;
          if (void 0 !== a) {
            var C, E;
            'string' == typeof w &&
              w.indexOf('%') >= 0 &&
              (w = (parseFloat(w.replace('%', '')) / 100) * a),
              (e.virtualSize = -w),
              s
                ? d.css({ marginLeft: '', marginTop: '' })
                : d.css({ marginRight: '', marginBottom: '' }),
              r.slidesPerColumn > 1 &&
                ((C =
                  Math.floor(h / r.slidesPerColumn) === h / e.params.slidesPerColumn
                    ? h
                    : Math.ceil(h / r.slidesPerColumn) * r.slidesPerColumn),
                'auto' !== r.slidesPerView &&
                  'row' === r.slidesPerColumnFill &&
                  (C = Math.max(C, r.slidesPerView * r.slidesPerColumn)));
            for (
              var T,
                k,
                O,
                M = r.slidesPerColumn,
                P = C / M,
                R = Math.floor(h / r.slidesPerColumn),
                A = 0;
              A < h;
              A += 1
            ) {
              E = 0;
              var I = d.eq(A);
              if (r.slidesPerColumn > 1) {
                var L = void 0,
                  z = void 0,
                  D = void 0;
                if ('row' === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                  var j = Math.floor(A / (r.slidesPerGroup * r.slidesPerColumn)),
                    N = A - r.slidesPerColumn * r.slidesPerGroup * j,
                    F =
                      0 === j
                        ? r.slidesPerGroup
                        : Math.min(Math.ceil((h - j * M * r.slidesPerGroup) / M), r.slidesPerGroup);
                  (L = (z = N - (D = Math.floor(N / F)) * F + j * r.slidesPerGroup) + (D * C) / M),
                    I.css({
                      '-webkit-box-ordinal-group': L,
                      '-moz-box-ordinal-group': L,
                      '-ms-flex-order': L,
                      '-webkit-order': L,
                      order: L,
                    });
                } else
                  'column' === r.slidesPerColumnFill
                    ? ((D = A - (z = Math.floor(A / M)) * M),
                      (z > R || (z === R && D === M - 1)) && (D += 1) >= M && ((D = 0), (z += 1)))
                    : (z = A - (D = Math.floor(A / P)) * P);
                I.css(t('margin-top'), 0 !== D && r.spaceBetween && r.spaceBetween + 'px');
              }
              if ('none' !== I.css('display')) {
                if ('auto' === r.slidesPerView) {
                  var W = i.getComputedStyle(I[0], null),
                    B = I[0].style.transform,
                    H = I[0].style.webkitTransform;
                  if (
                    (B && (I[0].style.transform = 'none'),
                    H && (I[0].style.webkitTransform = 'none'),
                    r.roundLengths)
                  )
                    E = e.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                  else {
                    var q = n(W, 'width'),
                      V = n(W, 'padding-left'),
                      U = n(W, 'padding-right'),
                      $ = n(W, 'margin-left'),
                      G = n(W, 'margin-right'),
                      Z = W.getPropertyValue(W, 'box-sizing');
                    if (Z && 'border-box' === Z) E = q + $ + G;
                    else {
                      var Y = I[0],
                        X = Y.clientWidth;
                      E = q + V + U + $ + G + (Y.offsetWidth - X);
                    }
                  }
                  B && (I[0].style.transform = B),
                    H && (I[0].style.webkitTransform = H),
                    r.roundLengths && (E = Math.floor(E));
                } else
                  (E = (a - (r.slidesPerView - 1) * w) / r.slidesPerView),
                    r.roundLengths && (E = Math.floor(E)),
                    d[A] && (d[A].style[t('width')] = E + 'px');
                d[A] && (d[A].swiperSlideSize = E),
                  m.push(E),
                  r.centeredSlides
                    ? ((_ = _ + E / 2 + x / 2 + w),
                      0 === x && 0 !== A && (_ = _ - a / 2 - w),
                      0 === A && (_ = _ - a / 2 - w),
                      Math.abs(_) < 0.001 && (_ = 0),
                      r.roundLengths && (_ = Math.floor(_)),
                      S % r.slidesPerGroup == 0 && p.push(_),
                      f.push(_))
                    : (r.roundLengths && (_ = Math.floor(_)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup ==
                        0 && p.push(_),
                      f.push(_),
                      (_ = _ + E + w)),
                  (e.virtualSize += E + w),
                  (x = E),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, a) + g),
              s &&
                l &&
                ('slide' === r.effect || 'coverflow' === r.effect) &&
                o.css({ width: e.virtualSize + r.spaceBetween + 'px' }),
              r.setWrapperSize)
            )
              o.css((((k = {})[t('width')] = e.virtualSize + r.spaceBetween + 'px'), k));
            if (r.slidesPerColumn > 1)
              if (
                ((e.virtualSize = (E + r.spaceBetween) * C),
                (e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween),
                o.css((((O = {})[t('width')] = e.virtualSize + r.spaceBetween + 'px'), O)),
                r.centeredSlides)
              ) {
                T = [];
                for (var K = 0; K < p.length; K += 1) {
                  var J = p[K];
                  r.roundLengths && (J = Math.floor(J)), p[K] < e.virtualSize + p[0] && T.push(J);
                }
                p = T;
              }
            if (!r.centeredSlides) {
              T = [];
              for (var Q = 0; Q < p.length; Q += 1) {
                var ee = p[Q];
                r.roundLengths && (ee = Math.floor(ee)), p[Q] <= e.virtualSize - a && T.push(ee);
              }
              (p = T),
                Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 &&
                  p.push(e.virtualSize - a);
            }
            if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
              var te,
                ne = e.isHorizontal() && s ? 'marginLeft' : t('marginRight');
              d.filter(function (e, t) {
                return !r.cssMode || t !== d.length - 1;
              }).css((((te = {})[ne] = w + 'px'), te));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var ie = 0;
              m.forEach(function (e) {
                ie += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var re = (ie -= r.spaceBetween) - a;
              p = p.map(function (e) {
                return e < 0 ? -v : e > re ? re + g : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var oe = 0;
              if (
                (m.forEach(function (e) {
                  oe += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (oe -= r.spaceBetween) < a)
              ) {
                var ae = (a - oe) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - ae;
                }),
                  f.forEach(function (e, t) {
                    f[t] = e + ae;
                  });
              }
            }
            Zd(e, { slides: d, snapGrid: p, slidesGrid: f, slidesSizesGrid: m }),
              h !== u && e.emit('slidesLengthChange'),
              p.length !== y &&
                (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
              f.length !== b && e.emit('slidesGridLengthChange'),
              (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = [],
            i = 0;
          if (
            ('number' == typeof e
              ? this.setTransition(e)
              : !0 === e && this.setTransition(this.params.speed),
            'auto' !== this.params.slidesPerView && this.params.slidesPerView > 1)
          )
            if (this.params.centeredSlides)
              this.visibleSlides.each(function (e) {
                n.push(e);
              });
            else
              for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var r = this.activeIndex + t;
                if (r > this.slides.length) break;
                n.push(this.slides.eq(r)[0]);
              }
          else n.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < n.length; t += 1)
            if (void 0 !== n[t]) {
              var o = n[t].offsetHeight;
              i = o > i ? o : i;
            }
          i && this.$wrapperEl.css('height', i + 'px');
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this.params,
            n = this.slides,
            i = this.rtlTranslate;
          if (0 !== n.length) {
            void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
            var r = -e;
            i && (r = e),
              n.removeClass(t.slideVisibleClass),
              (this.visibleSlidesIndexes = []),
              (this.visibleSlides = []);
            for (var o = 0; o < n.length; o += 1) {
              var a = n[o],
                s =
                  (r + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) /
                  (a.swiperSlideSize + t.spaceBetween);
              if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
                var l = -(r - a.swiperSlideOffset),
                  c = l + this.slidesSizesGrid[o];
                ((l >= 0 && l < this.size - 1) ||
                  (c > 1 && c <= this.size) ||
                  (l <= 0 && c >= this.size)) &&
                  (this.visibleSlides.push(a),
                  this.visibleSlidesIndexes.push(o),
                  n.eq(o).addClass(t.slideVisibleClass));
              }
              a.progress = i ? -s : s;
            }
            this.visibleSlides = Nd(this.visibleSlides);
          }
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = (this && this.translate && this.translate * t) || 0;
          }
          var n = this.params,
            i = this.maxTranslate() - this.minTranslate(),
            r = this.progress,
            o = this.isBeginning,
            a = this.isEnd,
            s = o,
            l = a;
          0 === i
            ? ((r = 0), (o = !0), (a = !0))
            : ((o = (r = (e - this.minTranslate()) / i) <= 0), (a = r >= 1)),
            Zd(this, { progress: r, isBeginning: o, isEnd: a }),
            (n.watchSlidesProgress ||
              n.watchSlidesVisibility ||
              (n.centeredSlides && n.autoHeight)) &&
              this.updateSlidesProgress(e),
            o && !s && this.emit('reachBeginning toEdge'),
            a && !l && this.emit('reachEnd toEdge'),
            ((s && !o) || (l && !a)) && this.emit('fromEdge'),
            this.emit('progress', r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this.slides,
            n = this.params,
            i = this.$wrapperEl,
            r = this.activeIndex,
            o = this.realIndex,
            a = this.virtual && n.virtual.enabled;
          t.removeClass(
            n.slideActiveClass +
              ' ' +
              n.slideNextClass +
              ' ' +
              n.slidePrevClass +
              ' ' +
              n.slideDuplicateActiveClass +
              ' ' +
              n.slideDuplicateNextClass +
              ' ' +
              n.slideDuplicatePrevClass
          ),
            (e = a
              ? this.$wrapperEl.find(
                  '.' + n.slideClass + '[data-pwzrswiper-slide-index="' + r + '"]'
                )
              : t.eq(r)).addClass(n.slideActiveClass),
            n.loop &&
              (e.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      '.' +
                        n.slideClass +
                        ':not(.' +
                        n.slideDuplicateClass +
                        ')[data-pwzrswiper-slide-index="' +
                        o +
                        '"]'
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : i
                    .children(
                      '.' +
                        n.slideClass +
                        '.' +
                        n.slideDuplicateClass +
                        '[data-pwzrswiper-slide-index="' +
                        o +
                        '"]'
                    )
                    .addClass(n.slideDuplicateActiveClass));
          var s = e
            .nextAll('.' + n.slideClass)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop && 0 === s.length && (s = t.eq(0)).addClass(n.slideNextClass);
          var l = e
            .prevAll('.' + n.slideClass)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop && 0 === l.length && (l = t.eq(-1)).addClass(n.slidePrevClass),
            n.loop &&
              (s.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      '.' +
                        n.slideClass +
                        ':not(.' +
                        n.slideDuplicateClass +
                        ')[data-pwzrswiper-slide-index="' +
                        s.attr('data-pwzrswiper-slide-index') +
                        '"]'
                    )
                    .addClass(n.slideDuplicateNextClass)
                : i
                    .children(
                      '.' +
                        n.slideClass +
                        '.' +
                        n.slideDuplicateClass +
                        '[data-pwzrswiper-slide-index="' +
                        s.attr('data-pwzrswiper-slide-index') +
                        '"]'
                    )
                    .addClass(n.slideDuplicateNextClass),
              l.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      '.' +
                        n.slideClass +
                        ':not(.' +
                        n.slideDuplicateClass +
                        ')[data-pwzrswiper-slide-index="' +
                        l.attr('data-pwzrswiper-slide-index') +
                        '"]'
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : i
                    .children(
                      '.' +
                        n.slideClass +
                        '.' +
                        n.slideDuplicateClass +
                        '[data-pwzrswiper-slide-index="' +
                        l.attr('data-pwzrswiper-slide-index') +
                        '"]'
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this.rtlTranslate ? this.translate : -this.translate,
            i = this.slidesGrid,
            r = this.snapGrid,
            o = this.params,
            a = this.activeIndex,
            s = this.realIndex,
            l = this.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var u = 0; u < i.length; u += 1)
              void 0 !== i[u + 1]
                ? n >= i[u] && n < i[u + 1] - (i[u + 1] - i[u]) / 2
                  ? (c = u)
                  : n >= i[u] && n < i[u + 1] && (c = u + 1)
                : n >= i[u] && (c = u);
            o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (r.indexOf(n) >= 0) t = r.indexOf(n);
          else {
            var d = Math.min(o.slidesPerGroupSkip, c);
            t = d + Math.floor((c - d) / o.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), c !== a)) {
            var h = parseInt(this.slides.eq(c).attr('data-pwzrswiper-slide-index') || c, 10);
            Zd(this, { snapIndex: t, realIndex: h, previousIndex: a, activeIndex: c }),
              this.emit('activeIndexChange'),
              this.emit('snapIndexChange'),
              s !== h && this.emit('realIndexChange'),
              (this.initialized || this.params.runCallbacksOnInit) && this.emit('slideChange');
          } else t !== l && ((this.snapIndex = t), this.emit('snapIndexChange'));
        },
        updateClickedSlide: function (e) {
          var t = this.params,
            n = Nd(e.target).closest('.' + t.slideClass)[0],
            i = !1;
          if (n) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === n && (i = !0);
          if (!n || !i) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
          (this.clickedSlide = n),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(Nd(n).attr('data-pwzrswiper-slide-index'), 10))
              : (this.clickedIndex = Nd(n).index()),
            t.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
          var t = this.params,
            n = this.rtlTranslate,
            i = this.translate,
            r = this.$wrapperEl;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          var o = (function (e, t) {
            void 0 === t && (t = 'x');
            var n,
              i,
              r,
              o = Md(),
              a = o.getComputedStyle(e, null);
            return (
              o.WebKitCSSMatrix
                ? ((i = a.transform || a.webkitTransform).split(',').length > 6 &&
                    (i = i
                      .split(', ')
                      .map(function (e) {
                        return e.replace(',', '.');
                      })
                      .join(', ')),
                  (r = new o.WebKitCSSMatrix('none' === i ? '' : i)))
                : (n = (r =
                    a.MozTransform ||
                    a.OTransform ||
                    a.MsTransform ||
                    a.msTransform ||
                    a.transform ||
                    a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'))
                    .toString()
                    .split(',')),
              'x' === t &&
                (i = o.WebKitCSSMatrix
                  ? r.m41
                  : 16 === n.length
                  ? parseFloat(n[12])
                  : parseFloat(n[4])),
              'y' === t &&
                (i = o.WebKitCSSMatrix
                  ? r.m42
                  : 16 === n.length
                  ? parseFloat(n[13])
                  : parseFloat(n[5])),
              i || 0
            );
          })(r[0], e);
          return n && (o = -o), o || 0;
        },
        setTranslate: function (e, t) {
          var n = this.rtlTranslate,
            i = this.params,
            r = this.$wrapperEl,
            o = this.wrapperEl,
            a = this.progress,
            s = 0,
            l = 0;
          this.isHorizontal() ? (s = n ? -e : e) : (l = e),
            i.roundLengths && ((s = Math.floor(s)), (l = Math.floor(l))),
            i.cssMode
              ? (o[this.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = this.isHorizontal()
                  ? -s
                  : -l)
              : i.virtualTranslate || r.transform('translate3d(' + s + 'px, ' + l + 'px, 0px)'),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? s : l);
          var c = this.maxTranslate() - this.minTranslate();
          (0 === c ? 0 : (e - this.minTranslate()) / c) !== a && this.updateProgress(e),
            this.emit('setTranslate', this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          var o = this,
            a = o.params,
            s = o.wrapperEl;
          if (o.animating && a.preventInteractionOnTransition) return !1;
          var l,
            c = o.minTranslate(),
            u = o.maxTranslate();
          if (((l = i && e > c ? c : i && e < u ? u : e), o.updateProgress(l), a.cssMode)) {
            var d,
              h = o.isHorizontal();
            if (0 === t) s[h ? 'scrollLeft' : 'scrollTop'] = -l;
            else if (s.scrollTo)
              s.scrollTo((((d = {})[h ? 'left' : 'top'] = -l), (d.behavior = 'smooth'), d));
            else s[h ? 'scrollLeft' : 'scrollTop'] = -l;
            return !0;
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(l),
                n && (o.emit('beforeTransitionStart', t, r), o.emit('transitionEnd')))
              : (o.setTransition(t),
                o.setTranslate(l),
                n && (o.emit('beforeTransitionStart', t, r), o.emit('transitionStart')),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        n && o.emit('transitionEnd'));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    'transitionend',
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    o.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e), this.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var n = this.activeIndex,
            i = this.params,
            r = this.previousIndex;
          if (!i.cssMode) {
            i.autoHeight && this.updateAutoHeight();
            var o = t;
            if (
              (o || (o = n > r ? 'next' : n < r ? 'prev' : 'reset'),
              this.emit('transitionStart'),
              e && n !== r)
            ) {
              if ('reset' === o) return void this.emit('slideResetTransitionStart');
              this.emit('slideChangeTransitionStart'),
                'next' === o
                  ? this.emit('slideNextTransitionStart')
                  : this.emit('slidePrevTransitionStart');
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var n = this.activeIndex,
            i = this.previousIndex,
            r = this.params;
          if (((this.animating = !1), !r.cssMode)) {
            this.setTransition(0);
            var o = t;
            if (
              (o || (o = n > i ? 'next' : n < i ? 'prev' : 'reset'),
              this.emit('transitionEnd'),
              e && n !== i)
            ) {
              if ('reset' === o) return void this.emit('slideResetTransitionEnd');
              this.emit('slideChangeTransitionEnd'),
                'next' === o
                  ? this.emit('slideNextTransitionEnd')
                  : this.emit('slidePrevTransitionEnd');
            }
          }
        },
      },
      slide: {
        slideTo: function (e, t, n, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            'number' != typeof e && 'string' != typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                '] given.'
            );
          if ('string' == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  '] given.'
              );
            e = r;
          }
          var o = this,
            a = e;
          a < 0 && (a = 0);
          var s = o.params,
            l = o.snapGrid,
            c = o.slidesGrid,
            u = o.previousIndex,
            d = o.activeIndex,
            h = o.rtlTranslate,
            p = o.wrapperEl;
          if (o.animating && s.preventInteractionOnTransition) return !1;
          var f = Math.min(o.params.slidesPerGroupSkip, a),
            m = f + Math.floor((a - f) / o.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (d || s.initialSlide || 0) === (u || 0) && n && o.emit('beforeSlideChangeStart');
          var v,
            g = -l[m];
          if ((o.updateProgress(g), s.normalizeSlideIndex))
            for (var y = 0; y < c.length; y += 1) {
              var b = -Math.floor(100 * g),
                w = Math.floor(100 * c[y]),
                _ = Math.floor(100 * c[y + 1]);
              void 0 !== c[y + 1]
                ? b >= w && b < _ - (_ - w) / 2
                  ? (a = y)
                  : b >= w && b < _ && (a = y + 1)
                : b >= w && (a = y);
            }
          if (o.initialized && a !== d) {
            if (!o.allowSlideNext && g < o.translate && g < o.minTranslate()) return !1;
            if (!o.allowSlidePrev && g > o.translate && g > o.maxTranslate() && (d || 0) !== a)
              return !1;
          }
          if (
            ((v = a > d ? 'next' : a < d ? 'prev' : 'reset'),
            (h && -g === o.translate) || (!h && g === o.translate))
          )
            return (
              o.updateActiveIndex(a),
              s.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              'slide' !== s.effect && o.setTranslate(g),
              'reset' !== v && (o.transitionStart(n, v), o.transitionEnd(n, v)),
              !1
            );
          if (s.cssMode) {
            var x,
              S = o.isHorizontal(),
              C = -g;
            if ((h && (C = p.scrollWidth - p.offsetWidth - C), 0 === t))
              p[S ? 'scrollLeft' : 'scrollTop'] = C;
            else if (p.scrollTo)
              p.scrollTo((((x = {})[S ? 'left' : 'top'] = C), (x.behavior = 'smooth'), x));
            else p[S ? 'scrollLeft' : 'scrollTop'] = C;
            return !0;
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(g),
                o.updateActiveIndex(a),
                o.updateSlidesClasses(),
                o.emit('beforeTransitionStart', t, i),
                o.transitionStart(n, v),
                o.transitionEnd(n, v))
              : (o.setTransition(t),
                o.setTranslate(g),
                o.updateActiveIndex(a),
                o.updateSlidesClasses(),
                o.emit('beforeTransitionStart', t, i),
                o.transitionStart(n, v),
                o.animating ||
                  ((o.animating = !0),
                  o.onSlideToWrapperTransitionEnd ||
                    (o.onSlideToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          o.onSlideToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          o.onSlideToWrapperTransitionEnd
                        ),
                        (o.onSlideToWrapperTransitionEnd = null),
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(n, v));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    'transitionend',
                    o.onSlideToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    o.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          var r = e;
          return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, n, i);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this.params,
            r = this.animating,
            o = this.activeIndex < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          return this.slideTo(this.activeIndex + o, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this.params,
            r = this.animating,
            o = this.snapGrid,
            a = this.slidesGrid,
            s = this.rtlTranslate;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          function l(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            u = l(s ? this.translate : -this.translate),
            d = o.map(function (e) {
              return l(e);
            }),
            h = (o[d.indexOf(u)], o[d.indexOf(u) - 1]);
          return (
            void 0 === h &&
              i.cssMode &&
              o.forEach(function (e) {
                !h && u >= e && (h = e);
              }),
            void 0 !== h && (c = a.indexOf(h)) < 0 && (c = this.activeIndex - 1),
            this.slideTo(c, e, t, n)
          );
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          var r = this.activeIndex,
            o = Math.min(this.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / this.params.slidesPerGroup),
            s = this.rtlTranslate ? this.translate : -this.translate;
          if (s >= this.snapGrid[a]) {
            var l = this.snapGrid[a];
            s - l > (this.snapGrid[a + 1] - l) * i && (r += this.params.slidesPerGroup);
          } else {
            var c = this.snapGrid[a - 1];
            s - c <= (this.snapGrid[a] - c) * i && (r -= this.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, this.slidesGrid.length - 1)),
            this.slideTo(r, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            i = t.$wrapperEl,
            r = 'auto' === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
            o = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(Nd(t.clickedSlide).attr('data-pwzrswiper-slide-index'), 10)),
              n.centeredSlides
                ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2
                  ? (t.loopFix(),
                    (o = i
                      .children(
                        '.' +
                          n.slideClass +
                          '[data-pwzrswiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          n.slideDuplicateClass +
                          ')'
                      )
                      .eq(0)
                      .index()),
                    Ud(function () {
                      t.slideTo(o);
                    }))
                  : t.slideTo(o)
                : o > t.slides.length - r
                ? (t.loopFix(),
                  (o = i
                    .children(
                      '.' +
                        n.slideClass +
                        '[data-pwzrswiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        n.slideDuplicateClass +
                        ')'
                    )
                    .eq(0)
                    .index()),
                  Ud(function () {
                    t.slideTo(o);
                  }))
                : t.slideTo(o);
          } else t.slideTo(o);
        },
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = kd(),
            n = e.params,
            i = e.$wrapperEl;
          i.children('.' + n.slideClass + '.' + n.slideDuplicateClass).remove();
          var r = i.children('.' + n.slideClass);
          if (n.loopFillGroupWithBlank) {
            var o = n.slidesPerGroup - (r.length % n.slidesPerGroup);
            if (o !== n.slidesPerGroup) {
              for (var a = 0; a < o; a += 1) {
                var s = Nd(t.createElement('div')).addClass(n.slideClass + ' ' + n.slideBlankClass);
                i.append(s);
              }
              r = i.children('.' + n.slideClass);
            }
          }
          'auto' !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10))),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          var l = [],
            c = [];
          r.each(function (t, n) {
            var i = Nd(t);
            n < e.loopedSlides && c.push(t),
              n < r.length && n >= r.length - e.loopedSlides && l.push(t),
              i.attr('data-pwzrswiper-slide-index', n);
          });
          for (var u = 0; u < c.length; u += 1)
            i.append(Nd(c[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var d = l.length - 1; d >= 0; d -= 1)
            i.prepend(Nd(l[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          this.emit('beforeLoopFix');
          var e,
            t = this.activeIndex,
            n = this.slides,
            i = this.loopedSlides,
            r = this.allowSlidePrev,
            o = this.allowSlideNext,
            a = this.snapGrid,
            s = this.rtlTranslate;
          (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
          var l = -a[t] - this.getTranslate();
          if (t < i)
            (e = n.length - 3 * i + t),
              (e += i),
              this.slideTo(e, 0, !1, !0) &&
                0 !== l &&
                this.setTranslate((s ? -this.translate : this.translate) - l);
          else if (t >= n.length - i) {
            (e = -n.length + t + i),
              (e += i),
              this.slideTo(e, 0, !1, !0) &&
                0 !== l &&
                this.setTranslate((s ? -this.translate : this.translate) - l);
          }
          (this.allowSlidePrev = r), (this.allowSlideNext = o), this.emit('loopFix');
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            n = this.slides;
          e
            .children(
              '.' +
                t.slideClass +
                '.' +
                t.slideDuplicateClass +
                ',.' +
                t.slideClass +
                '.' +
                t.slideBlankClass
            )
            .remove(),
            n.removeAttr('data-pwzrswiper-slide-index');
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          if (
            !(
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
          ) {
            var t = this.el;
            (t.style.cursor = 'move'),
              (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (t.style.cursor = e ? 'grabbing' : 'grab');
          }
        },
        unsetGrabCursor: function () {
          this.support.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = '');
        },
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
            n = this.params;
          if ((n.loop && this.loopDestroy(), 'object' == typeof e && 'length' in e))
            for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
          else t.append(e);
          n.loop && this.loopCreate(), (n.observer && this.support.observer) || this.update();
        },
        prependSlide: function (e) {
          var t = this.params,
            n = this.$wrapperEl,
            i = this.activeIndex;
          t.loop && this.loopDestroy();
          var r = i + 1;
          if ('object' == typeof e && 'length' in e) {
            for (var o = 0; o < e.length; o += 1) e[o] && n.prepend(e[o]);
            r = i + e.length;
          } else n.prepend(e);
          t.loop && this.loopCreate(),
            (t.observer && this.support.observer) || this.update(),
            this.slideTo(r, 0, !1);
        },
        addSlide: function (e, t) {
          var n = this.$wrapperEl,
            i = this.params,
            r = this.activeIndex;
          i.loop &&
            ((r -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = n.children('.' + i.slideClass)));
          var o = this.slides.length;
          if (e <= 0) this.prependSlide(t);
          else if (e >= o) this.appendSlide(t);
          else {
            for (var a = r > e ? r + 1 : r, s = [], l = o - 1; l >= e; l -= 1) {
              var c = this.slides.eq(l);
              c.remove(), s.unshift(c);
            }
            if ('object' == typeof t && 'length' in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && n.append(t[u]);
              a = r > e ? r + t.length : r;
            } else n.append(t);
            for (var d = 0; d < s.length; d += 1) n.append(s[d]);
            i.loop && this.loopCreate(),
              (i.observer && this.support.observer) || this.update(),
              i.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this.params,
            n = this.$wrapperEl,
            i = this.activeIndex;
          t.loop &&
            ((i -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = n.children('.' + t.slideClass)));
          var r,
            o = i;
          if ('object' == typeof e && 'length' in e) {
            for (var a = 0; a < e.length; a += 1)
              (r = e[a]), this.slides[r] && this.slides.eq(r).remove(), r < o && (o -= 1);
            o = Math.max(o, 0);
          } else
            (r = e),
              this.slides[r] && this.slides.eq(r).remove(),
              r < o && (o -= 1),
              (o = Math.max(o, 0));
          t.loop && this.loopCreate(),
            (t.observer && this.support.observer) || this.update(),
            t.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      events: {
        attachEvents: function () {
          var e = kd(),
            t = this.params,
            n = this.touchEvents,
            i = this.el,
            r = this.wrapperEl,
            o = this.device,
            a = this.support;
          (this.onTouchStart = ih.bind(this)),
            (this.onTouchMove = rh.bind(this)),
            (this.onTouchEnd = oh.bind(this)),
            t.cssMode && (this.onScroll = lh.bind(this)),
            (this.onClick = sh.bind(this));
          var s = !!t.nested;
          if (!a.touch && a.pointerEvents)
            i.addEventListener(n.start, this.onTouchStart, !1),
              e.addEventListener(n.move, this.onTouchMove, s),
              e.addEventListener(n.end, this.onTouchEnd, !1);
          else {
            if (a.touch) {
              var l = !('touchstart' !== n.start || !a.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
              i.addEventListener(n.start, this.onTouchStart, l),
                i.addEventListener(
                  n.move,
                  this.onTouchMove,
                  a.passiveListener ? { passive: !1, capture: s } : s
                ),
                i.addEventListener(n.end, this.onTouchEnd, l),
                n.cancel && i.addEventListener(n.cancel, this.onTouchEnd, l),
                ch || (e.addEventListener('touchstart', uh), (ch = !0));
            }
            ((t.simulateTouch && !o.ios && !o.android) || (t.simulateTouch && !a.touch && o.ios)) &&
              (i.addEventListener('mousedown', this.onTouchStart, !1),
              e.addEventListener('mousemove', this.onTouchMove, s),
              e.addEventListener('mouseup', this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            i.addEventListener('click', this.onClick, !0),
            t.cssMode && r.addEventListener('scroll', this.onScroll),
            t.updateOnWindowResize
              ? this.on(
                  o.ios || o.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  ah,
                  !0
                )
              : this.on('observerUpdate', ah, !0);
        },
        detachEvents: function () {
          var e = kd(),
            t = this.params,
            n = this.touchEvents,
            i = this.el,
            r = this.wrapperEl,
            o = this.device,
            a = this.support,
            s = !!t.nested;
          if (!a.touch && a.pointerEvents)
            i.removeEventListener(n.start, this.onTouchStart, !1),
              e.removeEventListener(n.move, this.onTouchMove, s),
              e.removeEventListener(n.end, this.onTouchEnd, !1);
          else {
            if (a.touch) {
              var l = !(
                'onTouchStart' !== n.start ||
                !a.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              i.removeEventListener(n.start, this.onTouchStart, l),
                i.removeEventListener(n.move, this.onTouchMove, s),
                i.removeEventListener(n.end, this.onTouchEnd, l),
                n.cancel && i.removeEventListener(n.cancel, this.onTouchEnd, l);
            }
            ((t.simulateTouch && !o.ios && !o.android) || (t.simulateTouch && !a.touch && o.ios)) &&
              (i.removeEventListener('mousedown', this.onTouchStart, !1),
              e.removeEventListener('mousemove', this.onTouchMove, s),
              e.removeEventListener('mouseup', this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            i.removeEventListener('click', this.onClick, !0),
            t.cssMode && r.removeEventListener('scroll', this.onScroll),
            this.off(
              o.ios || o.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
              ah
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            n = this.loopedSlides,
            i = void 0 === n ? 0 : n,
            r = this.params,
            o = this.$el,
            a = r.breakpoints;
          if (a && (!a || 0 !== Object.keys(a).length)) {
            var s = this.getBreakpoint(a);
            if (s && this.currentBreakpoint !== s) {
              var l = s in a ? a[s] : void 0;
              l &&
                [
                  'slidesPerView',
                  'spaceBetween',
                  'slidesPerGroup',
                  'slidesPerGroupSkip',
                  'slidesPerColumn',
                ].forEach(function (e) {
                  var t = l[e];
                  void 0 !== t &&
                    (l[e] =
                      'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                        ? 'slidesPerView' === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : 'auto');
                });
              var c = l || this.originalParams,
                u = r.slidesPerColumn > 1,
                d = c.slidesPerColumn > 1;
              u && !d
                ? (o.removeClass(
                    r.containerModifierClass +
                      'multirow ' +
                      r.containerModifierClass +
                      'multirow-column'
                  ),
                  this.emitContainerClasses())
                : !u &&
                  d &&
                  (o.addClass(r.containerModifierClass + 'multirow'),
                  'column' === c.slidesPerColumnFill &&
                    o.addClass(r.containerModifierClass + 'multirow-column'),
                  this.emitContainerClasses());
              var h = c.direction && c.direction !== r.direction,
                p = r.loop && (c.slidesPerView !== r.slidesPerView || h);
              h && t && this.changeDirection(),
                Zd(this.params, c),
                Zd(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = s),
                this.emit('_beforeBreakpoint', c),
                p &&
                  t &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(e - i + this.loopedSlides, 0, !1)),
                this.emit('breakpoint', c);
            }
          }
        },
        getBreakpoint: function (e) {
          var t = Md();
          if (e) {
            var n = !1,
              i = Object.keys(e).map(function (e) {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  var n = parseFloat(e.substr(1));
                  return { value: t.innerHeight * n, point: e };
                }
                return { value: e, point: e };
              });
            i.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var r = 0; r < i.length; r += 1) {
              var o = i[r],
                a = o.point;
              o.value <= t.innerWidth && (n = a);
            }
            return n || 'max';
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            n =
              this.slides.length > 0 &&
              e.slidesOffsetBefore +
                e.spaceBetween * (this.slides.length - 1) +
                this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && n
            ? (this.isLocked = n <= this.size)
            : (this.isLocked = 1 === this.snapGrid.length),
            (this.allowSlideNext = !this.isLocked),
            (this.allowSlidePrev = !this.isLocked),
            t !== this.isLocked && this.emit(this.isLocked ? 'lock' : 'unlock'),
            t &&
              t !== this.isLocked &&
              ((this.isEnd = !1), this.navigation && this.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e,
            t,
            n,
            i = this.classNames,
            r = this.params,
            o = this.rtl,
            a = this.$el,
            s = this.device,
            l = this.support,
            c =
              ((e = [
                'initialized',
                r.direction,
                { 'pointer-events': l.pointerEvents && !l.touch },
                { 'free-mode': r.freeMode },
                { autoheight: r.autoHeight },
                { rtl: o },
                { multirow: r.slidesPerColumn > 1 },
                { 'multirow-column': r.slidesPerColumn > 1 && 'column' === r.slidesPerColumnFill },
                { android: s.android },
                { ios: s.ios },
                { 'css-mode': r.cssMode },
              ]),
              (t = r.containerModifierClass),
              (n = []),
              e.forEach(function (e) {
                'object' == typeof e
                  ? Object.entries(e).forEach(function (e) {
                      var i = e[0];
                      e[1] && n.push(t + i);
                    })
                  : 'string' == typeof e && n.push(t + e);
              }),
              n);
          i.push.apply(i, c), a.addClass([].concat(i).join(' ')), this.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(' ')), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, n, i, r, o) {
          var a,
            s = Md();
          function l() {
            o && o();
          }
          Nd(e).parent('picture')[0] || (e.complete && r)
            ? l()
            : t
            ? (((a = new s.Image()).onload = l),
              (a.onerror = l),
              i && (a.sizes = i),
              n && (a.srcset = n),
              t && (a.src = t))
            : l();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
          }
          e.imagesToLoad = e.$el.find('img');
          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var i = e.imagesToLoad[n];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute('src'),
              i.srcset || i.getAttribute('srcset'),
              i.sizes || i.getAttribute('sizes'),
              !0,
              t
            );
          }
        },
      },
    },
    fh = {},
    mh = (function () {
      function e() {
        for (var t, n, i = arguments.length, r = new Array(i), o = 0; o < i; o++)
          r[o] = arguments[o];
        if (
          (1 === r.length && r[0].constructor && r[0].constructor === Object
            ? (n = r[0])
            : ((t = r[0]), (n = r[1])),
          n || (n = {}),
          (n = Zd({}, n)),
          t && !n.el && (n.el = t),
          n.el && Nd(n.el).length > 1)
        ) {
          var a = [];
          return (
            Nd(n.el).each(function (t) {
              var i = Zd({}, n, { el: t });
              a.push(new e(i));
            }),
            a
          );
        }
        var s = this;
        (s.support = Xd()),
          (s.device = Kd({ userAgent: n.userAgent })),
          (s.browser = Jd()),
          (s.eventsListeners = {}),
          (s.eventsAnyListeners = []),
          void 0 === s.modules && (s.modules = {}),
          Object.keys(s.modules).forEach(function (e) {
            var t = s.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                r = t.params[i];
              if ('object' != typeof r || null === r) return;
              if (!(i in n) || !('enabled' in r)) return;
              !0 === n[i] && (n[i] = { enabled: !0 }),
                'object' != typeof n[i] || 'enabled' in n[i] || (n[i].enabled = !0),
                n[i] || (n[i] = { enabled: !1 });
            }
          });
        var l,
          c,
          u = Zd({}, dh);
        return (
          s.useParams(u),
          (s.params = Zd({}, u, fh, n)),
          (s.originalParams = Zd({}, s.params)),
          (s.passedParams = Zd({}, n)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach(function (e) {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = Nd),
          Zd(s, {
            el: t,
            classNames: [],
            slides: Nd(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return 'horizontal' === s.params.direction;
            },
            isVertical: function () {
              return 'vertical' === s.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents:
              ((l = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
              (c = ['mousedown', 'mousemove', 'mouseup']),
              s.support.pointerEvents && (c = ['pointerdown', 'pointermove', 'pointerup']),
              (s.touchEventsTouch = { start: l[0], move: l[1], end: l[2], cancel: l[3] }),
              (s.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
              s.support.touch || !s.params.simulateTouch
                ? s.touchEventsTouch
                : s.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: 'input, select, option, textarea, button, video, label',
              lastClickTime: $d(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          s.useModules(),
          s.emit('_swiper'),
          s.params.init && s.init(),
          s
        );
      }
      var t,
        n,
        i,
        r = e.prototype;
      return (
        (r.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(' ').filter(function (t) {
              return (
                0 === t.indexOf('pwzrswiper-container') ||
                0 === t.indexOf(e.params.containerModifierClass)
              );
            });
            e.emit('_containerClasses', t.join(' '));
          }
        }),
        (r.getSlideClasses = function (e) {
          var t = this;
          return e.className
            .split(' ')
            .filter(function (e) {
              return 0 === e.indexOf('pwzrswiper-slide') || 0 === e.indexOf(t.params.slideClass);
            })
            .join(' ');
        }),
        (r.emitSlidesClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = [];
            e.slides.each(function (n) {
              var i = e.getSlideClasses(n);
              t.push({ slideEl: n, classNames: i }), e.emit('_slideClass', n, i);
            }),
              e.emit('_slideClasses', t);
          }
        }),
        (r.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            n = this.slidesGrid,
            i = this.size,
            r = this.activeIndex,
            o = 1;
          if (e.centeredSlides) {
            for (var a, s = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1)
              t[l] && !a && ((o += 1), (s += t[l].swiperSlideSize) > i && (a = !0));
            for (var c = r - 1; c >= 0; c -= 1)
              t[c] && !a && ((o += 1), (s += t[c].swiperSlideSize) > i && (a = !0));
          } else for (var u = r + 1; u < t.length; u += 1) n[u] - n[r] < i && (o += 1);
          return o;
        }),
        (r.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              n = e.params;
            n.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : (('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
              n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit('update');
          }
          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (r.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var n = this.params.direction;
          return (
            e || (e = 'horizontal' === n ? 'vertical' : 'horizontal'),
            e === n ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (this.$el
                .removeClass('' + this.params.containerModifierClass + n)
                .addClass('' + this.params.containerModifierClass + e),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.each(function (t) {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
              }),
              this.emit('changeDirection'),
              t && this.update()),
            this
          );
        }),
        (r.mount = function (e) {
          if (this.mounted) return !0;
          var t,
            n = Nd(e || this.params.el);
          return (
            !!(e = n[0]) &&
            ((e.swiper = this),
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? ((t = Nd(e.shadowRoot.querySelector('.' + this.params.wrapperClass))).children =
                  function (e) {
                    return n.children(e);
                  })
              : (t = n.children('.' + this.params.wrapperClass)),
            Zd(this, {
              $el: n,
              el: e,
              $wrapperEl: t,
              wrapperEl: t[0],
              mounted: !0,
              rtl: 'rtl' === e.dir.toLowerCase() || 'rtl' === n.css('direction'),
              rtlTranslate:
                'horizontal' === this.params.direction &&
                ('rtl' === e.dir.toLowerCase() || 'rtl' === n.css('direction')),
              wrongRTL: '-webkit-box' === t.css('display'),
            }),
            !0)
          );
        }),
        (r.init = function (e) {
          return (
            this.initialized ||
              !1 === this.mount(e) ||
              (this.emit('beforeInit'),
              this.params.breakpoints && this.setBreakpoint(),
              this.addClasses(),
              this.params.loop && this.loopCreate(),
              this.updateSize(),
              this.updateSlides(),
              this.params.watchOverflow && this.checkOverflow(),
              this.params.grabCursor && this.setGrabCursor(),
              this.params.preloadImages && this.preloadImages(),
              this.params.loop
                ? this.slideTo(
                    this.params.initialSlide + this.loopedSlides,
                    0,
                    this.params.runCallbacksOnInit
                  )
                : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
              this.attachEvents(),
              (this.initialized = !0),
              this.emit('init'),
              this.emit('afterInit')),
            this
          );
        }),
        (r.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var n,
            i = this,
            r = i.params,
            o = i.$el,
            a = i.$wrapperEl,
            s = i.slides;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                o.removeAttr('style'),
                a.removeAttr('style'),
                s &&
                  s.length &&
                  s
                    .removeClass(
                      [
                        r.slideVisibleClass,
                        r.slideActiveClass,
                        r.slideNextClass,
                        r.slidePrevClass,
                      ].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-pwzrswiper-slide-index')),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (n = i),
                Object.keys(n).forEach(function (e) {
                  try {
                    n[e] = null;
                  } catch (e) {}
                  try {
                    delete n[e];
                  } catch (e) {}
                })),
              (i.destroyed = !0)),
            null
          );
        }),
        (e.extendDefaults = function (e) {
          Zd(fh, e);
        }),
        (e.installModule = function (t) {
          e.prototype.modules || (e.prototype.modules = {});
          var n = t.name || Object.keys(e.prototype.modules).length + '_' + $d();
          e.prototype.modules[n] = t;
        }),
        (e.use = function (t) {
          return Array.isArray(t)
            ? (t.forEach(function (t) {
                return e.installModule(t);
              }),
              e)
            : (e.installModule(t), e);
        }),
        (t = e),
        (i = [
          {
            key: 'extendedDefaults',
            get: function () {
              return fh;
            },
          },
          {
            key: 'defaults',
            get: function () {
              return dh;
            },
          },
        ]),
        (n = null) && hh(t.prototype, n),
        i && hh(t, i),
        e
      );
    })();
  function vh() {
    return (vh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  Object.keys(ph).forEach(function (e) {
    Object.keys(ph[e]).forEach(function (t) {
      mh.prototype[t] = ph[e][t];
    });
  }),
    mh.use([Qd, nh]);
  var gh = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            n = t.$nextEl,
            i = t.$prevEl;
          i &&
            i.length > 0 &&
            (this.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
            i[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](
              e.lockClass
            )),
            n &&
              n.length > 0 &&
              (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass),
              n[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](
                e.lockClass
              ));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          n = this.params.navigation;
        (n.nextEl || n.prevEl) &&
          (n.nextEl &&
            ((e = Nd(n.nextEl)),
            this.params.uniqueNavElements &&
              'string' == typeof n.nextEl &&
              e.length > 1 &&
              1 === this.$el.find(n.nextEl).length &&
              (e = this.$el.find(n.nextEl))),
          n.prevEl &&
            ((t = Nd(n.prevEl)),
            this.params.uniqueNavElements &&
              'string' == typeof n.prevEl &&
              t.length > 1 &&
              1 === this.$el.find(n.prevEl).length &&
              (t = this.$el.find(n.prevEl))),
          e && e.length > 0 && e.on('click', this.navigation.onNextClick),
          t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
          Zd(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          n = e.$prevEl;
        t &&
          t.length &&
          (t.off('click', this.navigation.onNextClick),
          t.removeClass(this.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off('click', this.navigation.onPrevClick),
            n.removeClass(this.params.navigation.disabledClass));
      },
    },
    yh = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: 'pwzrswiper-button-disabled',
          hiddenClass: 'pwzrswiper-button-hidden',
          lockClass: 'pwzrswiper-button-lock',
        },
      },
      create: function () {
        Yd(this, { navigation: vh({}, gh) });
      },
      on: {
        init: function (e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function (e) {
          e.navigation.update();
        },
        fromEdge: function (e) {
          e.navigation.update();
        },
        destroy: function (e) {
          e.navigation.destroy();
        },
        click: function (e, t) {
          var n,
            i = e.navigation,
            r = i.$nextEl,
            o = i.$prevEl;
          !e.params.navigation.hideOnClick ||
            Nd(t.target).is(o) ||
            Nd(t.target).is(r) ||
            (r
              ? (n = r.hasClass(e.params.navigation.hiddenClass))
              : o && (n = o.hasClass(e.params.navigation.hiddenClass)),
            !0 === n ? e.emit('navigationShow') : e.emit('navigationHide'),
            r && r.toggleClass(e.params.navigation.hiddenClass),
            o && o.toggleClass(e.params.navigation.hiddenClass));
        },
      },
    };
  function bh() {
    return (bh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  var wh = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var n,
            i =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            r = this.pagination.$el,
            o = this.params.loop
              ? Math.ceil((i - 2 * this.loopedSlides) / this.params.slidesPerGroup)
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((n = Math.ceil(
                  (this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup
                )) >
                  i - 1 - 2 * this.loopedSlides && (n -= i - 2 * this.loopedSlides),
                n > o - 1 && (n -= o),
                n < 0 && 'bullets' !== this.params.paginationType && (n = o + n))
              : (n = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
            'bullets' === t.type && this.pagination.bullets && this.pagination.bullets.length > 0)
          ) {
            var a,
              s,
              l,
              c = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = c
                  .eq(0)
                  [this.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                r.css(
                  this.isHorizontal() ? 'width' : 'height',
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) + 'px'
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  ((this.pagination.dynamicBulletIndex += n - this.previousIndex),
                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1)
                    : this.pagination.dynamicBulletIndex < 0 &&
                      (this.pagination.dynamicBulletIndex = 0)),
                (a = n - this.pagination.dynamicBulletIndex),
                (l = ((s = a + (Math.min(c.length, t.dynamicMainBullets) - 1)) + a) / 2)),
              c.removeClass(
                t.bulletActiveClass +
                  ' ' +
                  t.bulletActiveClass +
                  '-next ' +
                  t.bulletActiveClass +
                  '-next-next ' +
                  t.bulletActiveClass +
                  '-prev ' +
                  t.bulletActiveClass +
                  '-prev-prev ' +
                  t.bulletActiveClass +
                  '-main'
              ),
              r.length > 1)
            )
              c.each(function (e) {
                var i = Nd(e),
                  r = i.index();
                r === n && i.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (r >= a && r <= s && i.addClass(t.bulletActiveClass + '-main'),
                    r === a &&
                      i
                        .prev()
                        .addClass(t.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(t.bulletActiveClass + '-prev-prev'),
                    r === s &&
                      i
                        .next()
                        .addClass(t.bulletActiveClass + '-next')
                        .next()
                        .addClass(t.bulletActiveClass + '-next-next'));
              });
            else {
              var u = c.eq(n),
                d = u.index();
              if ((u.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                for (var h = c.eq(a), p = c.eq(s), f = a; f <= s; f += 1)
                  c.eq(f).addClass(t.bulletActiveClass + '-main');
                if (this.params.loop)
                  if (d >= c.length - t.dynamicMainBullets) {
                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                      c.eq(c.length - m).addClass(t.bulletActiveClass + '-main');
                    c.eq(c.length - t.dynamicMainBullets - 1).addClass(
                      t.bulletActiveClass + '-prev'
                    );
                  } else
                    h
                      .prev()
                      .addClass(t.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(t.bulletActiveClass + '-prev-prev'),
                      p
                        .next()
                        .addClass(t.bulletActiveClass + '-next')
                        .next()
                        .addClass(t.bulletActiveClass + '-next-next');
                else
                  h
                    .prev()
                    .addClass(t.bulletActiveClass + '-prev')
                    .prev()
                    .addClass(t.bulletActiveClass + '-prev-prev'),
                    p
                      .next()
                      .addClass(t.bulletActiveClass + '-next')
                      .next()
                      .addClass(t.bulletActiveClass + '-next-next');
              }
            }
            if (t.dynamicBullets) {
              var v = Math.min(c.length, t.dynamicMainBullets + 4),
                g =
                  (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 -
                  l * this.pagination.bulletSize,
                y = e ? 'right' : 'left';
              c.css(this.isHorizontal() ? y : 'top', g + 'px');
            }
          }
          if (
            ('fraction' === t.type &&
              (r.find('.' + t.currentClass).text(t.formatFractionCurrent(n + 1)),
              r.find('.' + t.totalClass).text(t.formatFractionTotal(o))),
            'progressbar' === t.type)
          ) {
            var b;
            b = t.progressbarOpposite
              ? this.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : this.isHorizontal()
              ? 'horizontal'
              : 'vertical';
            var w = (n + 1) / o,
              _ = 1,
              x = 1;
            'horizontal' === b ? (_ = w) : (x = w),
              r
                .find('.' + t.progressbarFillClass)
                .transform('translate3d(0,0,0) scaleX(' + _ + ') scaleY(' + x + ')')
                .transition(this.params.speed);
          }
          'custom' === t.type && t.renderCustom
            ? (r.html(t.renderCustom(this, n + 1, o)), this.emit('paginationRender', r[0]))
            : this.emit('paginationUpdate', r[0]),
            r[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            n = this.pagination.$el,
            i = '';
          if ('bullets' === e.type) {
            var r = this.params.loop
              ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup)
              : this.snapGrid.length;
            this.params.freeMode && !this.params.loop && r > t && (r = t);
            for (var o = 0; o < r; o += 1)
              e.renderBullet
                ? (i += e.renderBullet.call(this, o, e.bulletClass))
                : (i +=
                    '<' +
                    e.bulletElement +
                    ' class="' +
                    e.bulletClass +
                    '"></' +
                    e.bulletElement +
                    '>');
            n.html(i), (this.pagination.bullets = n.find('.' + e.bulletClass.replace(/ /g, '.')));
          }
          'fraction' === e.type &&
            ((i = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' +
                e.currentClass +
                '"></span> / <span class="' +
                e.totalClass +
                '"></span>'),
            n.html(i)),
            'progressbar' === e.type &&
              ((i = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              n.html(i)),
            'custom' !== e.type && this.emit('paginationRender', this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var n = Nd(t.el);
          0 !== n.length &&
            (e.params.uniqueNavElements &&
              'string' == typeof t.el &&
              n.length > 1 &&
              (n = e.$el.find(t.el)),
            'bullets' === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            'bullets' === t.type &&
              t.dynamicBullets &&
              (n.addClass('' + t.modifierClass + t.type + '-dynamic'),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            'progressbar' === t.type &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on('click', '.' + t.bulletClass.replace(/ /g, '.'), function (t) {
                t.preventDefault();
                var n = Nd(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n);
              }),
            Zd(e.pagination, { $el: n, el: n[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off('click', '.' + e.bulletClass.replace(/ /g, '.'));
        }
      },
    },
    _h = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: 'bullets',
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (e) {
            return e;
          },
          formatFractionTotal: function (e) {
            return e;
          },
          bulletClass: 'pwzrswiper-pagination-bullet',
          bulletActiveClass: 'pwzrswiper-pagination-bullet-active',
          modifierClass: 'pwzrswiper-pagination-',
          currentClass: 'pwzrswiper-pagination-current',
          totalClass: 'pwzrswiper-pagination-total',
          hiddenClass: 'pwzrswiper-pagination-hidden',
          progressbarFillClass: 'pwzrswiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'pwzrswiper-pagination-progressbar-opposite',
          clickableClass: 'pwzrswiper-pagination-clickable',
          lockClass: 'pwzrswiper-pagination-lock',
        },
      },
      create: function () {
        Yd(this, { pagination: bh({ dynamicBulletIndex: 0 }, wh) });
      },
      on: {
        init: function (e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function (e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function (e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function (e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function (e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function (e) {
          e.pagination.destroy();
        },
        click: function (e, t) {
          e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            e.pagination.$el.length > 0 &&
            !Nd(t.target).hasClass(e.params.pagination.bulletClass) &&
            (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
              ? e.emit('paginationShow')
              : e.emit('paginationHide'),
            e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
        },
      },
    };
  function xh() {
    return (xh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  var Sh = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var n = this,
          i = n.params.lazy;
        if (void 0 !== e && 0 !== n.slides.length) {
          var r =
              n.virtual && n.params.virtual.enabled
                ? n.$wrapperEl.children(
                    '.' + n.params.slideClass + '[data-pwzrswiper-slide-index="' + e + '"]'
                  )
                : n.slides.eq(e),
            o = r.find(
              '.' + i.elementClass + ':not(.' + i.loadedClass + '):not(.' + i.loadingClass + ')'
            );
          !r.hasClass(i.elementClass) ||
            r.hasClass(i.loadedClass) ||
            r.hasClass(i.loadingClass) ||
            o.push(r[0]),
            0 !== o.length &&
              o.each(function (e) {
                var o = Nd(e);
                o.addClass(i.loadingClass);
                var a = o.attr('data-background'),
                  s = o.attr('data-src'),
                  l = o.attr('data-srcset'),
                  c = o.attr('data-sizes'),
                  u = o.parent('picture');
                n.loadImage(o[0], s || a, l, c, !1, function () {
                  if (null != n && n && (!n || n.params) && !n.destroyed) {
                    if (
                      (a
                        ? (o.css('background-image', 'url("' + a + '")'),
                          o.removeAttr('data-background'))
                        : (l && (o.attr('srcset', l), o.removeAttr('data-srcset')),
                          c && (o.attr('sizes', c), o.removeAttr('data-sizes')),
                          u.length &&
                            u.children('source').each(function (e) {
                              var t = Nd(e);
                              t.attr('data-srcset') &&
                                (t.attr('srcset', t.attr('data-srcset')),
                                t.removeAttr('data-srcset'));
                            }),
                          s && (o.attr('src', s), o.removeAttr('data-src'))),
                      o.addClass(i.loadedClass).removeClass(i.loadingClass),
                      r.find('.' + i.preloaderClass).remove(),
                      n.params.loop && t)
                    ) {
                      var e = r.attr('data-pwzrswiper-slide-index');
                      if (r.hasClass(n.params.slideDuplicateClass)) {
                        var d = n.$wrapperEl.children(
                          '[data-pwzrswiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            n.params.slideDuplicateClass +
                            ')'
                        );
                        n.lazy.loadInSlide(d.index(), !1);
                      } else {
                        var h = n.$wrapperEl.children(
                          '.' +
                            n.params.slideDuplicateClass +
                            '[data-pwzrswiper-slide-index="' +
                            e +
                            '"]'
                        );
                        n.lazy.loadInSlide(h.index(), !1);
                      }
                    }
                    n.emit('lazyImageReady', r[0], o[0]),
                      n.params.autoHeight && n.updateAutoHeight();
                  }
                }),
                  n.emit('lazyImageLoad', r[0], o[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          n = e.params,
          i = e.slides,
          r = e.activeIndex,
          o = e.virtual && n.virtual.enabled,
          a = n.lazy,
          s = n.slidesPerView;
        function l(e) {
          if (o) {
            if (t.children('.' + n.slideClass + '[data-pwzrswiper-slide-index="' + e + '"]').length)
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function c(e) {
          return o ? Nd(e).attr('data-pwzrswiper-slide-index') : Nd(e).index();
        }
        if (
          ('auto' === s && (s = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children('.' + n.slideVisibleClass).each(function (t) {
            var n = o ? Nd(t).attr('data-pwzrswiper-slide-index') : Nd(t).index();
            e.lazy.loadInSlide(n);
          });
        else if (s > 1) for (var u = r; u < r + s; u += 1) l(u) && e.lazy.loadInSlide(u);
        else e.lazy.loadInSlide(r);
        if (a.loadPrevNext)
          if (s > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
            for (
              var d = a.loadPrevNextAmount,
                h = s,
                p = Math.min(r + h + Math.max(d, h), i.length),
                f = Math.max(r - Math.max(h, d), 0),
                m = r + s;
              m < p;
              m += 1
            )
              l(m) && e.lazy.loadInSlide(m);
            for (var v = f; v < r; v += 1) l(v) && e.lazy.loadInSlide(v);
          } else {
            var g = t.children('.' + n.slideNextClass);
            g.length > 0 && e.lazy.loadInSlide(c(g));
            var y = t.children('.' + n.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(c(y));
          }
      },
      checkInViewOnLoad: function () {
        var e = Md();
        if (this && !this.destroyed) {
          var t = this.params.lazy.scrollingElement ? Nd(this.params.lazy.scrollingElement) : Nd(e),
            n = t[0] === e,
            i = n ? e.innerWidth : t[0].offsetWidth,
            r = n ? e.innerHeight : t[0].offsetHeight,
            o = this.$el.offset(),
            a = !1;
          this.rtlTranslate && (o.left -= this.$el[0].scrollLeft);
          for (
            var s = [
                [o.left, o.top],
                [o.left + this.width, o.top],
                [o.left, o.top + this.height],
                [o.left + this.width, o.top + this.height],
              ],
              l = 0;
            l < s.length;
            l += 1
          ) {
            var c = s[l];
            if (c[0] >= 0 && c[0] <= i && c[1] >= 0 && c[1] <= r) {
              if (0 === c[0] && 0 === c[1]) continue;
              a = !0;
            }
          }
          a
            ? (this.lazy.load(), t.off('scroll', this.lazy.checkInViewOnLoad))
            : this.lazy.scrollHandlerAttached ||
              ((this.lazy.scrollHandlerAttached = !0), t.on('scroll', this.lazy.checkInViewOnLoad));
        }
      },
    },
    Ch = {
      name: 'lazy',
      params: {
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: '',
          elementClass: 'pwzrswiper-lazy',
          loadingClass: 'pwzrswiper-lazy-loading',
          loadedClass: 'pwzrswiper-lazy-loaded',
          preloaderClass: 'pwzrswiper-lazy-preloader',
        },
      },
      create: function () {
        Yd(this, { lazy: xh({ initialImageLoaded: !1 }, Sh) });
      },
      on: {
        beforeInit: function (e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function (e) {
          e.params.lazy.enabled &&
            !e.params.loop &&
            0 === e.params.initialSlide &&
            (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
        },
        scroll: function (e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        resize: function (e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        scrollbarDragMove: function (e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function (e) {
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) &&
            e.lazy.load();
        },
        transitionEnd: function (e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function (e) {
          e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
        },
      },
    },
    Eh = function (e, t) {
      var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return n ? Pn.indexOf(e) <= Pn.indexOf(t) : Pn.indexOf(e) < Pn.indexOf(t);
    },
    Th = 'undefined' == typeof window ? at.useEffect : at.useLayoutEffect;
  function kh(e) {
    return (kh =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  var Oh = 'object' === ('undefined' == typeof HTMLElement ? 'undefined' : kh(HTMLElement));
  function Mh(e) {
    return Oh
      ? e instanceof HTMLElement
      : e && 'object' === kh(e) && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName;
  }
  function Ph(e, t) {
    t.forEach(function (t) {
      e.classList.add(t);
    });
  }
  function Rh(e, t) {
    t.forEach(function (t) {
      e.classList.remove(t);
    });
  }
  function Ah() {
    if (!document.querySelector('.pwzrdrift-base-styles')) {
      var e = document.createElement('style');
      (e.type = 'text/css'),
        e.classList.add('pwzrdrift-base-styles'),
        e.appendChild(
          document.createTextNode(
            '.pwzrdrift-bounding-box,.pwzrdrift-zoom-pane{position:absolute;pointer-events:none}@keyframes pwzrnoop{0%{zoom:1}}@-webkit-keyframes pwzrnoop{0%{zoom:1}}.pwzrdrift-zoom-pane.pwzrdrift-open{display:block}.pwzrdrift-zoom-pane.pwzrdrift-closing,.pwzrdrift-zoom-pane.pwzrdrift-opening{animation:pwzrnoop 1ms;-webkit-animation:pwzrnoop 1ms}.pwzrdrift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.pwzrdrift-zoom-pane-loader{display:none}.pwzrdrift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}'
          )
        );
      var t = document.head;
      t.insertBefore(e, t.firstChild);
    }
  }
  function Ih() {
    throw new Error('Missing parameter');
  }
  function Lh(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  var zh = (function () {
    function e(t) {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      })(this, e),
        (this.isShowing = !1);
      var n = t.namespace,
        i = void 0 === n ? null : n,
        r = t.zoomFactor,
        o = void 0 === r ? Ih() : r,
        a = t.containerEl,
        s = void 0 === a ? Ih() : a;
      (this.settings = { namespace: i, zoomFactor: o, containerEl: s }),
        (this.openClasses = this._buildClasses('open')),
        this._buildElement();
    }
    var t, n, i;
    return (
      (t = e),
      (n = [
        {
          key: '_buildClasses',
          value: function (e) {
            var t = ['pwzrdrift-'.concat(e)],
              n = this.settings.namespace;
            return n && t.push(''.concat(n, '-').concat(e)), t;
          },
        },
        {
          key: '_buildElement',
          value: function () {
            (this.el = document.createElement('div')),
              Ph(this.el, this._buildClasses('bounding-box'));
          },
        },
        {
          key: 'show',
          value: function (e, t) {
            (this.isShowing = !0), this.settings.containerEl.appendChild(this.el);
            var n = this.el.style;
            (n.width = ''.concat(Math.round(e / this.settings.zoomFactor), 'px')),
              (n.height = ''.concat(Math.round(t / this.settings.zoomFactor), 'px')),
              Ph(this.el, this.openClasses);
          },
        },
        {
          key: 'hide',
          value: function () {
            this.isShowing && this.settings.containerEl.removeChild(this.el),
              (this.isShowing = !1),
              Rh(this.el, this.openClasses);
          },
        },
        {
          key: 'setPosition',
          value: function (e, t, n) {
            var i = window.pageXOffset,
              r = window.pageYOffset,
              o = n.left + e * n.width - this.el.clientWidth / 2 + i,
              a = n.top + t * n.height - this.el.clientHeight / 2 + r;
            o < n.left + i
              ? (o = n.left + i)
              : o + this.el.clientWidth > n.left + n.width + i &&
                (o = n.left + n.width - this.el.clientWidth + i),
              a < n.top + r
                ? (a = n.top + r)
                : a + this.el.clientHeight > n.top + n.height + r &&
                  (a = n.top + n.height - this.el.clientHeight + r),
              (this.el.style.left = ''.concat(o, 'px')),
              (this.el.style.top = ''.concat(a, 'px'));
          },
        },
      ]) && Lh(t.prototype, n),
      i && Lh(t, i),
      e
    );
  })();
  function Dh(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function jh(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  var Nh = (function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Dh(this, e),
        (this._show = this._show.bind(this)),
        (this._hide = this._hide.bind(this)),
        (this._handleEntry = this._handleEntry.bind(this)),
        (this._handleMovement = this._handleMovement.bind(this));
      var n = t.el,
        i = void 0 === n ? Ih() : n,
        r = t.zoomPane,
        o = void 0 === r ? Ih() : r,
        a = t.sourceAttribute,
        s = void 0 === a ? Ih() : a,
        l = t.handleTouch,
        c = void 0 === l ? Ih() : l,
        u = t.onShow,
        d = void 0 === u ? null : u,
        h = t.onHide,
        p = void 0 === h ? null : h,
        f = t.hoverDelay,
        m = void 0 === f ? 0 : f,
        v = t.touchDelay,
        g = void 0 === v ? 0 : v,
        y = t.hoverBoundingBox,
        b = void 0 === y ? Ih() : y,
        w = t.touchBoundingBox,
        _ = void 0 === w ? Ih() : w,
        x = t.namespace,
        S = void 0 === x ? null : x,
        C = t.zoomFactor,
        E = void 0 === C ? Ih() : C,
        T = t.boundingBoxContainer,
        k = void 0 === T ? Ih() : T,
        O = t.inlineContainer,
        M = void 0 === O ? Ih() : O;
      (this.settings = {
        el: i,
        zoomPane: o,
        sourceAttribute: s,
        handleTouch: c,
        onShow: d,
        onHide: p,
        hoverDelay: m,
        touchDelay: g,
        hoverBoundingBox: b,
        touchBoundingBox: _,
        namespace: S,
        zoomFactor: E,
        boundingBoxContainer: k,
        inlineContainer: M,
      }),
        (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) &&
          (this.boundingBox = new zh({
            namespace: this.settings.namespace,
            zoomFactor: this.settings.zoomFactor,
            containerEl: this.settings.boundingBoxContainer,
          })),
        (this.enabled = !0),
        this._bindEvents();
    }
    var t, n, i;
    return (
      (t = e),
      (n = [
        {
          key: '_preventDefault',
          value: function (e) {
            e.preventDefault();
          },
        },
        {
          key: '_preventDefaultAllowTouchScroll',
          value: function (e) {
            (this.settings.touchDelay && this._isTouchEvent(e) && !this.isShowing) ||
              e.preventDefault();
          },
        },
        {
          key: '_isTouchEvent',
          value: function (e) {
            return !!e.touches;
          },
        },
        {
          key: '_bindEvents',
          value: function () {
            this.settings.el.addEventListener('mouseenter', this._handleEntry, !1),
              this.settings.el.addEventListener('mouseleave', this._hide, !1),
              this.settings.el.addEventListener('mousemove', this._handleMovement, !1),
              this.settings.handleTouch
                ? (this.settings.el.addEventListener('touchstart', this._handleEntry, !1),
                  this.settings.el.addEventListener('touchend', this._hide, !1),
                  this.settings.el.addEventListener('touchmove', this._handleMovement, !1))
                : (this.settings.el.addEventListener('touchstart', this._preventDefault, !1),
                  this.settings.el.addEventListener('touchend', this._preventDefault, !1),
                  this.settings.el.addEventListener('touchmove', this._preventDefault, !1));
          },
        },
        {
          key: '_unbindEvents',
          value: function () {
            this.settings.el.removeEventListener('mouseenter', this._handleEntry, !1),
              this.settings.el.removeEventListener('mouseleave', this._hide, !1),
              this.settings.el.removeEventListener('mousemove', this._handleMovement, !1),
              this.settings.handleTouch
                ? (this.settings.el.removeEventListener('touchstart', this._handleEntry, !1),
                  this.settings.el.removeEventListener('touchend', this._hide, !1),
                  this.settings.el.removeEventListener('touchmove', this._handleMovement, !1))
                : (this.settings.el.removeEventListener('touchstart', this._preventDefault, !1),
                  this.settings.el.removeEventListener('touchend', this._preventDefault, !1),
                  this.settings.el.removeEventListener('touchmove', this._preventDefault, !1));
          },
        },
        {
          key: '_handleEntry',
          value: function (e) {
            this._preventDefaultAllowTouchScroll(e),
              (this._lastMovement = e),
              'mouseenter' == e.type && this.settings.hoverDelay
                ? (this.entryTimeout = setTimeout(this._show, this.settings.hoverDelay))
                : this.settings.touchDelay
                ? (this.entryTimeout = setTimeout(this._show, this.settings.touchDelay))
                : this._show();
          },
        },
        {
          key: '_show',
          value: function () {
            if (this.enabled) {
              var e = this.settings.onShow;
              if (
                (e && 'function' == typeof e && e(),
                this.settings.zoomPane.show(
                  this.settings.el.getAttribute(this.settings.sourceAttribute),
                  this.settings.el.clientWidth,
                  this.settings.el.clientHeight
                ),
                this._lastMovement)
              ) {
                var t = this._lastMovement.touches;
                ((t && this.settings.touchBoundingBox) || (!t && this.settings.hoverBoundingBox)) &&
                  this.boundingBox.show(
                    this.settings.zoomPane.el.clientWidth,
                    this.settings.zoomPane.el.clientHeight
                  );
              }
              this._handleMovement();
            }
          },
        },
        {
          key: '_hide',
          value: function (e) {
            e && this._preventDefaultAllowTouchScroll(e),
              (this._lastMovement = null),
              this.entryTimeout && clearTimeout(this.entryTimeout),
              this.boundingBox && this.boundingBox.hide();
            var t = this.settings.onHide;
            t && 'function' == typeof t && t(), this.settings.zoomPane.hide();
          },
        },
        {
          key: '_handleMovement',
          value: function (e) {
            if (e) this._preventDefaultAllowTouchScroll(e), (this._lastMovement = e);
            else {
              if (!this._lastMovement) return;
              e = this._lastMovement;
            }
            var t, n;
            if (e.touches) {
              var i = e.touches[0];
              (t = i.clientX), (n = i.clientY);
            } else (t = e.clientX), (n = e.clientY);
            var r = this.settings.el.getBoundingClientRect(),
              o = t - r.left,
              a = n - r.top,
              s = o / this.settings.el.clientWidth,
              l = a / this.settings.el.clientHeight,
              c = this.settings.inlineContainer.getBoundingClientRect(),
              u = { left: r.left - c.left, top: r.top - c.top, width: r.width, height: r.height };
            this.boundingBox && this.boundingBox.setPosition(s, l, u),
              this.settings.zoomPane.setPosition(s, l, u);
          },
        },
        {
          key: 'isShowing',
          get: function () {
            return this.settings.zoomPane.isShowing;
          },
        },
      ]) && jh(t.prototype, n),
      i && jh(t, i),
      e
    );
  })();
  function Fh(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function Wh(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  var Bh = document.createElement('div').style,
    Hh = 'undefined' != typeof document && ('animation' in Bh || 'webkitAnimation' in Bh),
    qh = (function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Fh(this, e),
          (this._completeShow = this._completeShow.bind(this)),
          (this._completeHide = this._completeHide.bind(this)),
          (this._handleLoad = this._handleLoad.bind(this)),
          (this.isShowing = !1);
        var n = t.container,
          i = void 0 === n ? null : n,
          r = t.zoomFactor,
          o = void 0 === r ? Ih() : r,
          a = t.inline,
          s = void 0 === a ? Ih() : a,
          l = t.namespace,
          c = void 0 === l ? null : l,
          u = t.showWhitespaceAtEdges,
          d = void 0 === u ? Ih() : u,
          h = t.containInline,
          p = void 0 === h ? Ih() : h,
          f = t.inlineOffsetX,
          m = void 0 === f ? 0 : f,
          v = t.inlineOffsetY,
          g = void 0 === v ? 0 : v,
          y = t.inlineContainer,
          b = void 0 === y ? document.body : y;
        (this.settings = {
          container: i,
          zoomFactor: o,
          inline: s,
          namespace: c,
          showWhitespaceAtEdges: d,
          containInline: p,
          inlineOffsetX: m,
          inlineOffsetY: g,
          inlineContainer: b,
        }),
          (this.openClasses = this._buildClasses('open')),
          (this.openingClasses = this._buildClasses('opening')),
          (this.closingClasses = this._buildClasses('closing')),
          (this.inlineClasses = this._buildClasses('inline')),
          (this.loadingClasses = this._buildClasses('loading')),
          this._buildElement();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: '_buildClasses',
            value: function (e) {
              var t = ['pwzrdrift-'.concat(e)],
                n = this.settings.namespace;
              return n && t.push(''.concat(n, '-').concat(e)), t;
            },
          },
          {
            key: '_buildElement',
            value: function () {
              (this.el = document.createElement('div')),
                Ph(this.el, this._buildClasses('zoom-pane'));
              var e = document.createElement('div');
              Ph(e, this._buildClasses('zoom-pane-loader')),
                this.el.appendChild(e),
                (this.imgEl = document.createElement('img')),
                this.el.appendChild(this.imgEl);
            },
          },
          {
            key: '_setImageURL',
            value: function (e) {
              this.imgEl.setAttribute('src', e);
            },
          },
          {
            key: '_setImageSize',
            value: function (e, t) {
              (this.imgEl.style.width = ''.concat(e * this.settings.zoomFactor, 'px')),
                (this.imgEl.style.height = ''.concat(t * this.settings.zoomFactor, 'px')),
                (this.imgEl.style.maxWidth = 'none');
            },
          },
          {
            key: 'setPosition',
            value: function (e, t, n) {
              var i = this.imgEl.offsetWidth,
                r = this.imgEl.offsetHeight,
                o = this.el.offsetWidth,
                a = this.el.offsetHeight,
                s = o / 2 - i * e,
                l = a / 2 - r * t,
                c = o - i,
                u = a - r,
                d = c > 0,
                h = u > 0,
                p = d ? c / 2 : 0,
                f = h ? u / 2 : 0,
                m = d ? c / 2 : c,
                v = h ? u / 2 : u;
              if (this.el.parentElement === this.settings.inlineContainer) {
                var g = n.left + e * n.width - o / 2 + this.settings.inlineOffsetX + 0,
                  y = n.top + t * n.height - a / 2 + this.settings.inlineOffsetY + 0;
                this.settings.containInline &&
                  (g < n.left + 0
                    ? (g = n.left + 0)
                    : g + o > n.left + n.width + 0 && (g = n.left + n.width - o + 0),
                  y < n.top + 0
                    ? (y = n.top + 0)
                    : y + a > n.top + n.height + 0 && (y = n.top + n.height - a + 0)),
                  'yes' === getComputedStyle(this.el).getPropertyValue('--magnify-width-full') &&
                    (g = 0),
                  'yes' === getComputedStyle(this.el).getPropertyValue('--magnify-height-full') &&
                    (y = 0),
                  (this.el.style.left = ''.concat(g, 'px')),
                  (this.el.style.top = ''.concat(y, 'px'));
              }
              this.settings.showWhitespaceAtEdges ||
                (s > p ? (s = p) : s < m && (s = m), l > f ? (l = f) : l < v && (l = v)),
                (this.imgEl.style.transform = 'translate('.concat(s, 'px, ').concat(l, 'px)')),
                (this.imgEl.style.webkitTransform = 'translate('
                  .concat(s, 'px, ')
                  .concat(l, 'px)'));
            },
          },
          {
            key: '_removeListenersAndResetClasses',
            value: function () {
              this.el.removeEventListener('animationend', this._completeShow, !1),
                this.el.removeEventListener('animationend', this._completeHide, !1),
                this.el.removeEventListener('webkitAnimationEnd', this._completeShow, !1),
                this.el.removeEventListener('webkitAnimationEnd', this._completeHide, !1),
                Rh(this.el, this.openClasses),
                Rh(this.el, this.closingClasses);
            },
          },
          {
            key: 'show',
            value: function (e, t, n) {
              if (
                (this._removeListenersAndResetClasses(),
                (this.isShowing = !0),
                Ph(this.el, this.openClasses),
                this.imgEl.getAttribute('src') != e)
              ) {
                var i = this.el.querySelector('.pwzrdrift-zoom-pane-loader');
                i && (i.style.display = 'block'),
                  Ph(this.el, this.loadingClasses),
                  this.imgEl.addEventListener('load', this._handleLoad, !1),
                  this._setImageURL(e);
              }
              this._setImageSize(t, n),
                this._isInline ? this._showInline() : this._showInContainer(),
                Hh &&
                  (this.el.addEventListener('animationend', this._completeShow, !1),
                  this.el.addEventListener('webkitAnimationEnd', this._completeShow, !1),
                  Ph(this.el, this.openingClasses));
            },
          },
          {
            key: '_showInline',
            value: function () {
              this.settings.inlineContainer.appendChild(this.el), Ph(this.el, this.inlineClasses);
            },
          },
          {
            key: '_showInContainer',
            value: function () {
              this.settings.container.appendChild(this.el);
            },
          },
          {
            key: 'hide',
            value: function () {
              this._removeListenersAndResetClasses(),
                (this.isShowing = !1),
                Hh
                  ? (this.el.addEventListener('animationend', this._completeHide, !1),
                    this.el.addEventListener('webkitAnimationEnd', this._completeHide, !1),
                    Ph(this.el, this.closingClasses))
                  : (Rh(this.el, this.openClasses), Rh(this.el, this.inlineClasses));
            },
          },
          {
            key: '_completeShow',
            value: function () {
              this.el.removeEventListener('animationend', this._completeShow, !1),
                this.el.removeEventListener('webkitAnimationEnd', this._completeShow, !1),
                Rh(this.el, this.openingClasses);
            },
          },
          {
            key: '_completeHide',
            value: function () {
              this.el.removeEventListener('animationend', this._completeHide, !1),
                this.el.removeEventListener('webkitAnimationEnd', this._completeHide, !1),
                Rh(this.el, this.openClasses),
                Rh(this.el, this.closingClasses),
                Rh(this.el, this.inlineClasses),
                this.el.setAttribute('style', ''),
                this.el.parentElement === this.settings.container
                  ? this.settings.container.removeChild(this.el)
                  : this.el.parentElement === this.settings.inlineContainer &&
                    this.settings.inlineContainer.removeChild(this.el);
            },
          },
          {
            key: '_handleLoad',
            value: function () {
              var e = this.el.querySelector('.pwzrdrift-zoom-pane-loader');
              e && (e.style.display = 'none'),
                this.imgEl.removeEventListener('load', this._handleLoad, !1),
                Rh(this.el, this.loadingClasses);
            },
          },
          {
            key: '_isInline',
            get: function () {
              var e = this.settings.inline;
              return !0 === e || ('number' == typeof e && window.innerWidth <= e);
            },
          },
        ]) && Wh(t.prototype, n),
        i && Wh(t, i),
        e
      );
    })();
  function Vh(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function Uh(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  var $h = (function () {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (
        (Vh(this, e),
        (this.VERSION = '1.4.0'),
        (this.triggerEl = t),
        (this.destroy = this.destroy.bind(this)),
        !Mh(this.triggerEl))
      )
        throw new TypeError('`new Drift` requires a DOM element as its first argument.');
      var i = n.namespace || null,
        r = n.showWhitespaceAtEdges || !1,
        o = n.containInline || !1,
        a = n.inlineOffsetX || 0,
        s = n.inlineOffsetY || 0,
        l = n.inlineContainer || document.body,
        c = n.sourceAttribute || 'data-zoom',
        u = n.zoomFactor || 3,
        d = void 0 === n.paneContainer ? document.body : n.paneContainer,
        h = n.inlinePane || 375,
        p = !('handleTouch' in n) || !!n.handleTouch,
        f = n.onShow || null,
        m = n.onHide || null,
        v = !('injectBaseStyles' in n) || !!n.injectBaseStyles,
        g = n.hoverDelay || 0,
        y = n.touchDelay || 0,
        b = n.hoverBoundingBox || !1,
        w = n.touchBoundingBox || !1,
        _ = n.boundingBoxContainer || document.body;
      if (!0 !== h && !Mh(d))
        throw new TypeError('`paneContainer` must be a DOM element when `inlinePane !== true`');
      if (!Mh(l)) throw new TypeError('`inlineContainer` must be a DOM element');
      (this.settings = {
        namespace: i,
        showWhitespaceAtEdges: r,
        containInline: o,
        inlineOffsetX: a,
        inlineOffsetY: s,
        inlineContainer: l,
        sourceAttribute: c,
        zoomFactor: u,
        paneContainer: d,
        inlinePane: h,
        handleTouch: p,
        onShow: f,
        onHide: m,
        injectBaseStyles: v,
        hoverDelay: g,
        touchDelay: y,
        hoverBoundingBox: b,
        touchBoundingBox: w,
        boundingBoxContainer: _,
      }),
        this.settings.injectBaseStyles && Ah(),
        this._buildZoomPane(),
        this._buildTrigger();
    }
    var t, n, i;
    return (
      (t = e),
      (n = [
        {
          key: '_buildZoomPane',
          value: function () {
            this.zoomPane = new qh({
              container: this.settings.paneContainer,
              zoomFactor: this.settings.zoomFactor,
              showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges,
              containInline: this.settings.containInline,
              inline: this.settings.inlinePane,
              namespace: this.settings.namespace,
              inlineOffsetX: this.settings.inlineOffsetX,
              inlineOffsetY: this.settings.inlineOffsetY,
              inlineContainer: this.settings.inlineContainer,
            });
          },
        },
        {
          key: '_buildTrigger',
          value: function () {
            this.trigger = new Nh({
              el: this.triggerEl,
              zoomPane: this.zoomPane,
              handleTouch: this.settings.handleTouch,
              onShow: this.settings.onShow,
              onHide: this.settings.onHide,
              sourceAttribute: this.settings.sourceAttribute,
              hoverDelay: this.settings.hoverDelay,
              touchDelay: this.settings.touchDelay,
              hoverBoundingBox: this.settings.hoverBoundingBox,
              touchBoundingBox: this.settings.touchBoundingBox,
              namespace: this.settings.namespace,
              zoomFactor: this.settings.zoomFactor,
              boundingBoxContainer: this.settings.boundingBoxContainer,
              inlineContainer: this.settings.inlineContainer,
            });
          },
        },
        {
          key: 'setZoomImageURL',
          value: function (e) {
            this.zoomPane._setImageURL(e);
          },
        },
        {
          key: 'disable',
          value: function () {
            this.trigger.enabled = !1;
          },
        },
        {
          key: 'enable',
          value: function () {
            this.trigger.enabled = !0;
          },
        },
        {
          key: 'destroy',
          value: function () {
            this.trigger._hide(), this.trigger._unbindEvents();
          },
        },
        {
          key: 'isShowing',
          get: function () {
            return this.zoomPane.isShowing;
          },
        },
        {
          key: 'zoomFactor',
          get: function () {
            return this.settings.zoomFactor;
          },
          set: function (e) {
            (this.settings.zoomFactor = e),
              (this.zoomPane.settings.zoomFactor = e),
              (this.trigger.settings.zoomFactor = e),
              (this.boundingBox.settings.zoomFactor = e);
          },
        },
      ]) && Uh(t.prototype, n),
      i && Uh(t, i),
      e
    );
  })();
  Object.defineProperty($h.prototype, 'isShowing', {
    get: function () {
      return this.isShowing;
    },
  }),
    Object.defineProperty($h.prototype, 'zoomFactor', {
      get: function () {
        return this.zoomFactor;
      },
      set: function (e) {
        this.zoomFactor = e;
      },
    }),
    ($h.prototype.setZoomImageURL = $h.prototype.setZoomImageURL),
    ($h.prototype.disable = $h.prototype.disable),
    ($h.prototype.enable = $h.prototype.enable),
    ($h.prototype.destroy = $h.prototype.destroy);
  var Gh;
  function Zh(e, t, n, i, r) {
    e.self === e ? e.scrollTo(t, n) : (i || (e.scrollLeft = t), r || (e.scrollTop = n));
  }
  function Yh(e) {
    var t = e._scrollSettings;
    if (t) {
      var n = t.maxSynchronousAlignments,
        i = (function (e, t) {
          var n,
            i,
            r,
            o,
            a,
            s,
            l,
            c = e.align,
            u = e.target.getBoundingClientRect(),
            d = c && null != c.left ? c.left : 0.5,
            h = c && null != c.top ? c.top : 0.5,
            p = c && null != c.leftOffset ? c.leftOffset : 0,
            f = c && null != c.topOffset ? c.topOffset : 0,
            m = d,
            v = h;
          if (e.isWindow(t))
            (s = Math.min(u.width, t.innerWidth)),
              (l = Math.min(u.height, t.innerHeight)),
              (i = u.left + t.pageXOffset - t.innerWidth * m + s * m),
              (r = u.top + t.pageYOffset - t.innerHeight * v + l * v),
              (r -= f),
              (o = (i -= p) - t.pageXOffset),
              (a = r - t.pageYOffset);
          else {
            (s = u.width), (l = u.height), (n = t.getBoundingClientRect());
            var g = u.left - (n.left - t.scrollLeft),
              y = u.top - (n.top - t.scrollTop);
            (i = g + s * m - t.clientWidth * m),
              (r = y + l * v - t.clientHeight * v),
              (i -= p),
              (r -= f),
              (i = Math.max(Math.min(i, t.scrollWidth - t.clientWidth), 0)),
              (r = Math.max(Math.min(r, t.scrollHeight - t.clientHeight), 0)),
              (o = i - t.scrollLeft),
              (a = r - t.scrollTop);
          }
          return { x: i, y: r, differenceX: o, differenceY: a };
        })(t, e),
        r = Date.now() - t.startTime,
        o = Math.min((1 / t.time) * r, 1);
      if (t.endIterations >= n)
        return Zh(e, i.x, i.y, t.lockX, t.lockY), (e._scrollSettings = null), t.end('complete');
      var a = 1 - t.ease(o);
      if ((Zh(e, i.x - i.differenceX * a, i.y - i.differenceY * a, t.lockX, t.lockY), r >= t.time))
        return t.endIterations++, Yh(e);
      !(function (e) {
        if ('requestAnimationFrame' in window) return window.requestAnimationFrame(e);
        setTimeout(e, 16);
      })(Yh.bind(null, e));
    }
  }
  function Xh(e) {
    return e.self === e;
  }
  function Kh(e, t, n, i) {
    var r,
      o = !t._scrollSettings,
      a = t._scrollSettings,
      s = Date.now(),
      l = { passive: !0 };
    function c(e) {
      (t._scrollSettings = null),
        t.parentElement &&
          t.parentElement._scrollSettings &&
          t.parentElement._scrollSettings.end(e),
        n.debug && console.log('Scrolling ended with type', e, 'for', t),
        i(e),
        r && (t.removeEventListener('touchstart', r, l), t.removeEventListener('wheel', r, l));
    }
    a && a.end('canceled');
    var u = n.maxSynchronousAlignments;
    null == u && (u = 3),
      (t._scrollSettings = {
        startTime: a ? a.startTime : Date.now(),
        endIterations: 0,
        target: e,
        time: n.time + (a ? s - a.startTime : 0),
        ease: n.ease,
        align: n.align,
        isWindow: n.isWindow || Xh,
        maxSynchronousAlignments: u,
        end: c,
        lockX: n.lockX,
        lockY: n.lockY,
      }),
      ('cancellable' in n && !n.cancellable) ||
        ((r = c.bind(null, 'canceled')),
        t.addEventListener('touchstart', r, l),
        t.addEventListener('wheel', r, l)),
      o && Yh(t);
  }
  function Jh(e) {
    return (
      'pageXOffset' in e ||
      ((e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth) &&
        'hidden' !== getComputedStyle(e).overflow)
    );
  }
  function Qh() {
    return !0;
  }
  function ep(e) {
    if (e.assignedSlot) return ep(e.assignedSlot);
    if (e.parentElement)
      return 'BODY' === e.parentElement.tagName
        ? e.parentElement.ownerDocument.defaultView || e.parentElement.ownerDocument.ownerWindow
        : e.parentElement;
    if (e.getRootNode) {
      var t = e.getRootNode();
      if (11 === t.nodeType) return t.host;
    }
  }
  Gh = function (e, t, n) {
    if (e) {
      'function' == typeof t && ((n = t), (t = null)),
        t || (t = {}),
        (t.time = isNaN(t.time) ? 1e3 : t.time),
        (t.ease =
          t.ease ||
          function (e) {
            return 1 - Math.pow(1 - e, e / 2);
          }),
        (t.lockX = t.lockX || !1),
        (t.lockY = t.lockY || !1),
        (t.scrollAllParents = 'boolean' != typeof t.scrollAllParents || t.scrollAllParents);
      var i = ep(e),
        r = 1,
        o = t.validTarget || Qh,
        a = t.isScrollable;
      for (
        t.debug &&
        (console.log('About to scroll to', e),
        i || console.error('Target did not have a parent, is it mounted in the DOM?'));
        i;

      )
        if (
          (t.debug && console.log('Scrolling parent node', i),
          o(i, r) && (a ? a(i, Jh) : Jh(i)) && (r++, Kh(e, i, t, s)),
          (i = ep(i)),
          !t.scrollAllParents || !i)
        ) {
          s('complete');
          break;
        }
    }
    function s(e) {
      --r || (n && n(e));
    }
  };
  var tp, np;
  np = function (e, t) {
    if (((t = t.split(':')[0]), !(e = +e))) return !1;
    switch (t) {
      case 'http':
      case 'ws':
        return 80 !== e;
      case 'https':
      case 'wss':
        return 443 !== e;
      case 'ftp':
        return 21 !== e;
      case 'gopher':
        return 70 !== e;
      case 'file':
        return !1;
    }
    return 0 !== e;
  };
  var ip = {},
    rp = Object.prototype.hasOwnProperty;
  function op(e) {
    try {
      return decodeURIComponent(e.replace(/\+/g, ' '));
    } catch (e) {
      return null;
    }
  }
  var ap = function (e, t) {
    t = t || '';
    var n,
      i,
      r = [];
    for (i in ('string' != typeof t && (t = '?'), e))
      if (rp.call(e, i)) {
        if (
          ((n = e[i]) || (null != n && !isNaN(n)) || (n = ''),
          (i = encodeURIComponent(i)),
          (n = encodeURIComponent(n)),
          null === i || null === n)
        )
          continue;
        r.push(i + '=' + n);
      }
    return r.length ? t + r.join('&') : '';
  };
  ip.stringify = ap;
  var sp = function (e) {
    for (var t, n = /([^=?&]+)=?([^&]*)/g, i = {}; (t = n.exec(e)); ) {
      var r = op(t[1]),
        o = op(t[2]);
      null === r || null === o || r in i || (i[r] = o);
    }
    return i;
  };
  ip.parse = sp;
  var lp = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    cp = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    up = new RegExp(
      '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
    );
  function dp(e) {
    return (e || '').toString().replace(up, '');
  }
  var hp = [
      ['#', 'hash'],
      ['?', 'query'],
      function (e) {
        return e.replace('\\', '/');
      },
      ['/', 'pathname'],
      ['@', 'auth', 1],
      [NaN, 'host', void 0, 1, 1],
      [/:(\d+)$/, 'port', void 0, 1],
      [NaN, 'hostname', void 0, 1, 1],
    ],
    pp = { hash: 1, query: 1 };
  function fp(e) {
    var t,
      i =
        ('undefined' != typeof window
          ? window
          : void 0 !== n
          ? n
          : 'undefined' != typeof self
          ? self
          : {}
        ).location || {},
      r = {},
      o = typeof (e = e || i);
    if ('blob:' === e.protocol) r = new vp(unescape(e.pathname), {});
    else if ('string' === o) for (t in ((r = new vp(e, {})), pp)) delete r[t];
    else if ('object' === o) {
      for (t in e) t in pp || (r[t] = e[t]);
      void 0 === r.slashes && (r.slashes = lp.test(e.href));
    }
    return r;
  }
  function mp(e) {
    e = dp(e);
    var t = cp.exec(e);
    return { protocol: t[1] ? t[1].toLowerCase() : '', slashes: !!t[2], rest: t[3] };
  }
  function vp(e, t, n) {
    if (((e = dp(e)), !(this instanceof vp))) return new vp(e, t, n);
    var i,
      r,
      o,
      a,
      s,
      l,
      c = hp.slice(),
      u = typeof t,
      d = this,
      h = 0;
    for (
      'object' !== u && 'string' !== u && ((n = t), (t = null)),
        n && 'function' != typeof n && (n = sp),
        t = fp(t),
        i = !(r = mp(e || '')).protocol && !r.slashes,
        d.slashes = r.slashes || (i && t.slashes),
        d.protocol = r.protocol || t.protocol || '',
        e = r.rest,
        r.slashes || (c[3] = [/(.*)/, 'pathname']);
      h < c.length;
      h++
    )
      'function' != typeof (a = c[h])
        ? ((o = a[0]),
          (l = a[1]),
          o != o
            ? (d[l] = e)
            : 'string' == typeof o
            ? ~(s = e.indexOf(o)) &&
              ('number' == typeof a[2]
                ? ((d[l] = e.slice(0, s)), (e = e.slice(s + a[2])))
                : ((d[l] = e.slice(s)), (e = e.slice(0, s))))
            : (s = o.exec(e)) && ((d[l] = s[1]), (e = e.slice(0, s.index))),
          (d[l] = d[l] || (i && a[3] && t[l]) || ''),
          a[4] && (d[l] = d[l].toLowerCase()))
        : (e = a(e));
    n && (d.query = n(d.query)),
      i &&
        t.slashes &&
        '/' !== d.pathname.charAt(0) &&
        ('' !== d.pathname || '' !== t.pathname) &&
        (d.pathname = (function (e, t) {
          if ('' === e) return t;
          for (
            var n = (t || '/').split('/').slice(0, -1).concat(e.split('/')),
              i = n.length,
              r = n[i - 1],
              o = !1,
              a = 0;
            i--;

          )
            '.' === n[i]
              ? n.splice(i, 1)
              : '..' === n[i]
              ? (n.splice(i, 1), a++)
              : a && (0 === i && (o = !0), n.splice(i, 1), a--);
          return o && n.unshift(''), ('.' !== r && '..' !== r) || n.push(''), n.join('/');
        })(d.pathname, t.pathname)),
      np(d.port, d.protocol) || ((d.host = d.hostname), (d.port = '')),
      (d.username = d.password = ''),
      d.auth && ((a = d.auth.split(':')), (d.username = a[0] || ''), (d.password = a[1] || '')),
      (d.origin =
        d.protocol && d.host && 'file:' !== d.protocol ? d.protocol + '//' + d.host : 'null'),
      (d.href = d.toString());
  }
  (vp.prototype = {
    set: function (e, t, n) {
      var i = this;
      switch (e) {
        case 'query':
          'string' == typeof t && t.length && (t = (n || sp)(t)), (i[e] = t);
          break;
        case 'port':
          (i[e] = t),
            np(t, i.protocol)
              ? t && (i.host = i.hostname + ':' + t)
              : ((i.host = i.hostname), (i[e] = ''));
          break;
        case 'hostname':
          (i[e] = t), i.port && (t += ':' + i.port), (i.host = t);
          break;
        case 'host':
          (i[e] = t),
            /:\d+$/.test(t)
              ? ((t = t.split(':')), (i.port = t.pop()), (i.hostname = t.join(':')))
              : ((i.hostname = t), (i.port = ''));
          break;
        case 'protocol':
          (i.protocol = t.toLowerCase()), (i.slashes = !n);
          break;
        case 'pathname':
        case 'hash':
          if (t) {
            var r = 'pathname' === e ? '/' : '#';
            i[e] = t.charAt(0) !== r ? r + t : t;
          } else i[e] = t;
          break;
        default:
          i[e] = t;
      }
      for (var o = 0; o < hp.length; o++) {
        var a = hp[o];
        a[4] && (i[a[1]] = i[a[1]].toLowerCase());
      }
      return (
        (i.origin =
          i.protocol && i.host && 'file:' !== i.protocol ? i.protocol + '//' + i.host : 'null'),
        (i.href = i.toString()),
        i
      );
    },
    toString: function (e) {
      (e && 'function' == typeof e) || (e = ap);
      var t,
        n = this,
        i = n.protocol;
      i && ':' !== i.charAt(i.length - 1) && (i += ':');
      var r = i + (n.slashes ? '//' : '');
      return (
        n.username && ((r += n.username), n.password && (r += ':' + n.password), (r += '@')),
        (r += n.host + n.pathname),
        (t = 'object' == typeof n.query ? e(n.query) : n.query) &&
          (r += '?' !== t.charAt(0) ? '?' + t : t),
        n.hash && (r += n.hash),
        r
      );
    },
  }),
    (vp.extractProtocol = mp),
    (vp.location = fp),
    (vp.trimLeft = dp),
    (vp.qs = ip),
    (tp = vp);
  var gp = {},
    yp = {};
  var bp = {};
  bp = function (e, t) {
    if (null == e) return {};
    var n,
      i,
      r = {},
      o = Object.keys(e);
    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
  };
  var wp = (yp = function (e) {
    return e && e.__esModule ? e : { default: e };
  })(function (e, t) {
    if (null == e) return {};
    var n,
      i,
      r = bp(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        (n = o[i]),
          t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
  });
  var _p = yp(function (e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  });
  function xp(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Sp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? xp(Object(n), !0).forEach(function (t) {
            (0, _p.default)(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  var Cp = {};
  Object.defineProperty(Cp, '__esModule', { value: !0 });
  var Ep = function (e, t) {
    'string' == typeof e && (e = [e]);
    for (var n = 0; n < e.length; n++) {
      Pp(Rp(e[n], t));
    }
  };
  Cp.preload = Ep;
  var Tp = Pp;
  Cp.loadImage = Tp;
  var kp = function (e) {
    var t = e.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
    );
    return t ? t[1] : null;
  };
  Cp.imageSize = kp;
  var Op = Rp;
  Cp.getSizedImageUrl = Op;
  var Mp = Ap;
  function Pp(e) {
    new Image().src = e;
  }
  function Rp(e, t) {
    if (null === t) return e;
    if ('master' === t) return Ap(e);
    var n = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif|webp|heic|psd)(\?.*)/i);
    if (n) {
      var i = e.split(n[0]),
        r = n[0];
      return Ap(i[0] + '_' + t + r);
    }
    return null;
  }
  function Ap(e) {
    return e.replace(/http(s)?:/, '');
  }
  Cp.removeProtocol = Mp;
  var Ip = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = 5760;
      if (null === e) {
        var i = Math.min(Math.ceil(t), n);
        return 'x'.concat(i);
      }
      if (null === t) {
        var r = Math.min(Math.ceil(e), n);
        return ''.concat(r, 'x');
      }
      var o = Math.min(Math.ceil(e), n),
        a = Math.min(Math.ceil(t), n);
      return ''.concat(o, 'x').concat(a);
    },
    Lp = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return t ? ''.concat(e, '_crop_center') : e;
    },
    zp = function (e) {
      try {
        var t = new URL(e).pathname,
          n = t.lastIndexOf('/');
        return -1 !== n ? t.substring(n + 1) : t;
      } catch (e) {}
      return null;
    },
    Dp = function () {
      throw new Error('Must be server!');
    },
    jp = [
      { id: 'none', name: 'None', static: !0 },
      { id: 'partner', name: 'Partner', static: !0 },
      { id: 'free', name: 'Free', static: !1 },
      { id: 'starter', name: 'Starter', price: 4.99, static: !1 },
      { id: 'starter', name: 'Starter', price: 3.99, static: !1 },
      { id: 'pro', name: 'Pro', price: 7.99, static: !1 },
      { id: 'pro', name: 'Pro', price: 6.99, static: !1 },
    ],
    Np = function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = jp.find(function (n) {
          return !(!t && n.static) && n.id === e;
        });
      if (!n) throw Error('unknown plan id '.concat(e));
      return n;
    };
  function Fp() {
    return { muted: !1, autoPlay: !0, controls: !0, loop: !1, autoRotate: !0 };
  }
  function Wp(e) {
    return 'left' === e || 'right' === e;
  }
  function Bp(e) {
    return Math.min(180 * Math.ceil(e / 180), 5760);
  }
  function Hp() {
    return window.devicePixelRatio || 1;
  }
  gp = {
    getSizedImageUrl: function (e) {
      return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null === t && null === n) return e;
        var r = Lp(Ip(t, n), i);
        return Cp.getSizedImageUrl(e, r);
      };
    },
    getServerPort: Dp,
    getServerEndpoint: function () {
      var e = Dp();
      return 'http://localhost:'.concat(e);
    },
    getSubscriptionPlanByPrice: function (e) {
      var t = jp.find(function (t) {
        return ''.concat(t.price) === e;
      });
      if (!t) throw Error('unknown plan price '.concat(e));
      return t;
    },
    getSubscriptionPlanById: Np,
    delay: function (e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    },
    getRioMediaSettings: function (e, t, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'media',
        r = { muted: !1, autoPlay: !0, controls: !0, loop: !1, autoRotate: !0 };
      if (Array.isArray(n)) {
        var o = n.find(function (t) {
          return t.id === e;
        });
        if (o && Array.isArray(o[i])) {
          var a = o[i].find(function (e) {
            return e.id === t;
          });
          if (a) {
            a.id;
            var s = (0, wp.default)(a, ['id']);
            return Sp(Sp({}, r), s);
          }
        }
      }
      return r;
    },
    scaffoldRioMediaSettings: Fp,
    getSubscriptionPlansById: function (e) {
      return jp.filter(function (t) {
        return t.id === e;
      });
    },
    getSubscriptionPaidPlans: function () {
      return [Np('starter'), Np('pro')];
    },
    getFilenameFromUrl: zp,
    findMedia: function (e, t, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = e.find(function (e) {
          return e.id === n;
        });
      if (r) return r;
      var o = Array.isArray(t) ? t : [],
        a = o.find(function (e) {
          return e.id === n;
        });
      if (a) {
        var s = a.value;
        if ('string' == typeof s) {
          var l = e.find(function (e) {
            return zp(e.originalSrc) === s;
          });
          if (l)
            return (
              console.log('Fixed invalid image reference of '.concat(n, ' ').concat(s, ' to')),
              console.log(l),
              i ? Sp(Sp({}, l), {}, { rescued: !0 }) : l
            );
        }
      }
      return console.log('Could not find a match for media '.concat(n)), null;
    },
  };
  var qp = e(tp);
  function Vp() {
    const { href: e } = window.location,
      t = qp(e, !0),
      { variant: n } = t.query;
    return n || null;
  }
  function Up(e) {
    return 'number' == typeof e && Number.isFinite(e)
      ? ''.concat(((1 / e) * 100).toFixed(3), '%')
      : '100%';
  }
  function $p(e, t = !0) {
    const n = e.media
      .concat()
      .sort(((i = 'position'), (e, t) => (e[i] > t[i] ? 1 : t[i] > e[i] ? -1 : 0)))
      .map((e) => {
        return (t = (function (e) {
          const {
              media_type: t,
              aspect_ratio: n,
              preview_image: i,
              external_id: r,
              src: o,
              host: a,
              sources: s,
              id: l,
              alt: c,
              width: u,
            } = e,
            d = { id: ''.concat(l), type: t, alt: c },
            h = s || [];
          if ('image' === t)
            return {
              ...d,
              transformedSrc: gp.getSizedImageUrl(o),
              originalSrc: o,
              scale: Up(n),
              width: u,
            };
          if ('video' === t) {
            const e = h
              .filter((e) => 'video/mp4' === e.mime_type)
              .sort((e, t) => t.height - e.height)
              .map((e) => ({ mimeType: e.mime_type, url: e.url }));
            if (e.length > 0) {
              const t = [],
                r = h.find((e) => 'application/x-mpegURL' === e.mime_type);
              return (
                r && t.push({ mimeType: r.mime_type, url: r.url }),
                t.push(e[0]),
                {
                  ...d,
                  transformedSrc: gp.getSizedImageUrl(i.src),
                  scale: Up(i.aspect_ratio),
                  sources: t,
                  scaleSources: Up(n),
                }
              );
            }
          }
          if ('external_video' === t && 'youtube' === a && 'string' == typeof r)
            return {
              ...d,
              transformedSrc: gp.getSizedImageUrl(i.src),
              scale: Up(i.aspect_ratio),
              sources: [r],
              scaleSources: Up(n),
            };
          if ('model' === t) {
            const e = h.find((e) => 'glb' === e.format);
            if (e && 'string' == typeof e.url)
              return {
                ...d,
                transformedSrc: gp.getSizedImageUrl(i.src),
                scale: Up(i.aspect_ratio),
                sources: [e.url],
                scaleSources: Up(i.aspect_ratio),
              };
          }
          return null;
        })(e))
          ? { ...t, rioSettings: gp.scaffoldRioMediaSettings() }
          : null;
        var t;
      })
      .filter((e) => null !== e);
    var i;
    t &&
      (function (e, t) {
        const n = Vp();
        if (n) {
          const i = t.find((e) => ''.concat(e.id) === n);
          if (i) {
            const t = e.findIndex((e) => ''.concat(i.featured_media.id) === e.id);
            if (t > -1) {
              const n = e[t];
              e.splice(t, 1), e.unshift(n);
            }
          }
        }
      })(n, e.variants);
    const r = e.variants.map((e) => ({
      id: ''.concat(e.id),
      featuredMediaIndex: e.featured_media
        ? n.findIndex((t) => ''.concat(e.featured_media.id) === t.id)
        : -1,
      available: e.available,
    }));
    return { media: n, variants: r };
  }
  var Gp,
    Zp,
    Yp = !1;
  function Xp() {
    return (
      Yp ||
        ((Yp = !0),
        (Zp = {}),
        'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
        (Zp = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')),
      Zp
    );
  }
  var Kp,
    Jp,
    Qp = !1;
  function ef() {}
  function tf() {}
  var nf = {};
  Gp = {
    RioMediaSettingsProps: (nf = (Qp ||
      ((Qp = !0),
      (Kp = {}),
      (Jp = Xp()),
      (tf.resetWarningCache = ef),
      (Kp = function () {
        function e(e, t, n, i, r, o) {
          if (o !== Jp) {
            var a = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((a.name = 'Invariant Violation'), a);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: tf,
          resetWarningCache: ef,
        };
        return (n.PropTypes = n), n;
      })),
    Kp)()).shape({
      autoPlay: nf.bool.isRequired,
      autoRotate: nf.bool.isRequired,
      controls: nf.bool.isRequired,
      loop: nf.bool.isRequired,
      muted: nf.bool.isRequired,
    }),
  };
  const rf = (e, t, n) =>
      'number' != typeof e.thumbnailWidth && 'number' != typeof e.thumbnailsPerRow
        ? new Error(
            "One of 'thumbnails.thumbnailWidth' or 'thumbnails.thumbnailsPerRow' required by '".concat(
              n,
              "' component are not numbers"
            )
          )
        : e.thumbnailWidth || e.thumbnailsPerRow
        ? Wp(e.orientation) && e.thumbnailsPerRow && !e.thumbnailWidth && !e.container
          ? new Error(
              "Both 'thumbnails.thumbnailWidth' and 'thumbnails.thumbnailsPerRow' is required by '".concat(
                n,
                "' component."
              )
            )
          : void 0
        : new Error(
            "One of 'thumbnails.thumbnailWidth' or 'thumbnails.thumbnailsPerRow' is required by '".concat(
              n,
              "' component."
            )
          ),
    of = Rt.shape({
      navigation: Rt.bool.isRequired,
      pagination: Rt.bool.isRequired,
      clickablePagination: Rt.bool,
      swipe: Rt.bool.isRequired,
      keyboard: Rt.bool,
      vertical: (e, t, n) => {
        if (e.vertical) {
          if (e.magnify)
            return new Error(
              "'magnify' cannot be true when 'vertical' is true in '".concat(n, "' component.")
            );
          if (e.thumbnails)
            return new Error(
              "'thumbnails' cannot be true when 'vertical' is true in '".concat(n, "' component.")
            );
        }
      },
      verticalSpacing: Rt.string,
      maxHeight: Rt.string,
      magnify: Rt.oneOfType([
        Rt.oneOf([!1]),
        Rt.exact({ width: Rt.string, height: Rt.string, zoom: Rt.number }),
      ]),
      thumbnails: Rt.oneOfType([
        Rt.oneOf([!1]),
        Rt.exact({
          orientation: Rt.oneOf(['bottom', 'top', 'right', 'left']).isRequired,
          multiRow: (e, t, n) =>
            'boolean' != typeof e.multiRow
              ? new Error(
                  "'thumbnails.multiRow' is required to be a boolean by '".concat(n, "' component.")
                )
              : !e.multiRow && Wp(e.orientation)
              ? new Error(
                  "'thumbnails.muliRow' cannot be false with left or right 'thumbnails.orientation' in '".concat(
                    n,
                    "' component."
                  )
                )
              : void 0,
          thumbnailWidth: rf,
          thumbnailsPerRow: rf,
          container: (e, t, n) => {
            if (e.container)
              return 'number' != typeof e.container
                ? new Error(
                    "'thumbnails.container' needs to be a number in '".concat(n, "' component.")
                  )
                : e.container < 0 || e.container > 1
                ? new Error(
                    "'thumbnails.container' needs to be between 0.0 and 1.0 (inclusive) in '".concat(
                      n,
                      "' component."
                    )
                  )
                : 'number' != typeof e.thumbnailsPerRow
                ? new Error(
                    "'thumbnails.thumbnailsPerRow' needs to also be set in conjuction with 'thumbnails.container' in '".concat(
                      n,
                      "' component."
                    )
                  )
                : 'number' == typeof e.thumbnailWidth
                ? new Error(
                    "'thumbnails.thumbnailWidth' cannot also be set with 'thumbnails.container' and 'thumbnails.thumbnailsPerRow' in '".concat(
                      n,
                      "' component."
                    )
                  )
                : void 0;
          },
          navigation: Rt.bool.isRequired,
          verticalOverflow: (e, t, n) => {
            if ('boolean' == typeof e.verticalOverflow)
              return e.verticalOverflow && !Wp(e.orientation)
                ? new Error(
                    "'thumbnails.verticalOverflow' cannot be true with top or bottom 'thumbnails.orientation' in '".concat(
                      n,
                      "' component."
                    )
                  )
                : !e.verticalOverflow && e.navigation
                ? new Error(
                    "'thumbnails.verticalOverflow' cannot be false with 'thumbnails.navigation' also being true in '".concat(
                      n,
                      "' component."
                    )
                  )
                : void 0;
          },
          square: Rt.bool,
          centerCrop: Rt.bool,
        }),
      ]),
      lightBox: Rt.bool.isRequired,
      lightBoxZoom: (e, t, n) => {
        if (e.lightBox && !Number.isFinite(e.lightBoxZoom))
          return new Error(
            "'lightBoxZoom' is required when 'lightBox' is true in '".concat(n, "' component.")
          );
      },
    }),
    af = Rt.exact({
      id: Rt.string.isRequired,
      type: Rt.string.isRequired,
      alt: Rt.string,
      width: Rt.number,
      rioSettings: Gp.RioMediaSettingsProps.isRequired,
      transformedSrc: Rt.func.isRequired,
      scale: Rt.string,
      sources: Rt.oneOfType([
        Rt.arrayOf(Rt.string),
        Rt.arrayOf(Rt.shape({ url: Rt.string.isRequired, mimeType: Rt.string.isRequired })),
      ]),
      scaleSources: Rt.string,
    });
  var sf,
    lf,
    cf = {};
  (sf = cf),
    (lf = function () {
      return function (e, t, n, i) {
        var r = {
          features: null,
          bind: function (e, t, n, i) {
            var r = (i ? 'remove' : 'add') + 'EventListener';
            t = t.split(' ');
            for (var o = 0; o < t.length; o++) t[o] && e[r](t[o], n, !1);
          },
          isArray: function (e) {
            return e instanceof Array;
          },
          createEl: function (e, t) {
            var n = document.createElement(t || 'div');
            return e && (n.className = e), n;
          },
          getScrollY: function () {
            var e = window.pageYOffset;
            return void 0 !== e ? e : document.documentElement.scrollTop;
          },
          unbind: function (e, t, n) {
            r.bind(e, t, n, !0);
          },
          removeClass: function (e, t) {
            var n = new RegExp('(\\s|^)' + t + '(\\s|$)');
            e.className = e.className
              .replace(n, ' ')
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '');
          },
          addClass: function (e, t) {
            r.hasClass(e, t) || (e.className += (e.className ? ' ' : '') + t);
          },
          hasClass: function (e, t) {
            return e.className && new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className);
          },
          getChildByClass: function (e, t) {
            for (var n = e.firstChild; n; ) {
              if (r.hasClass(n, t)) return n;
              n = n.nextSibling;
            }
          },
          arraySearch: function (e, t, n) {
            for (var i = e.length; i--; ) if (e[i][n] === t) return i;
            return -1;
          },
          extend: function (e, t, n) {
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                if (n && e.hasOwnProperty(i)) continue;
                e[i] = t[i];
              }
          },
          easing: {
            sine: {
              out: function (e) {
                return Math.sin(e * (Math.PI / 2));
              },
              inOut: function (e) {
                return -(Math.cos(Math.PI * e) - 1) / 2;
              },
            },
            cubic: {
              out: function (e) {
                return --e * e * e + 1;
              },
            },
          },
          detectFeatures: function () {
            if (r.features) return r.features;
            var e = r.createEl().style,
              t = '',
              n = {};
            if (
              ((n.oldIE = document.all && !document.addEventListener),
              (n.touch = 'ontouchstart' in window),
              window.requestAnimationFrame &&
                ((n.raf = window.requestAnimationFrame), (n.caf = window.cancelAnimationFrame)),
              (n.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled),
              !n.pointerEvent)
            ) {
              var i = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                o &&
                  o.length > 0 &&
                  (o = parseInt(o[1], 10)) >= 1 &&
                  o < 8 &&
                  (n.isOldIOSPhone = !0);
              }
              var a = i.match(/Android\s([0-9\.]*)/),
                s = a ? a[1] : 0;
              (s = parseFloat(s)) >= 1 &&
                (s < 4.4 && (n.isOldAndroid = !0), (n.androidVersion = s)),
                (n.isMobileOpera = /opera mini|opera mobi/i.test(i));
            }
            for (
              var l,
                c,
                u = ['transform', 'perspective', 'animationName'],
                d = ['', 'webkit', 'Moz', 'ms', 'O'],
                h = 0;
              h < 4;
              h++
            ) {
              t = d[h];
              for (var p = 0; p < 3; p++)
                (l = u[p]),
                  (c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
                  !n[l] && c in e && (n[l] = c);
              t &&
                !n.raf &&
                ((t = t.toLowerCase()),
                (n.raf = window[t + 'RequestAnimationFrame']),
                n.raf &&
                  (n.caf =
                    window[t + 'CancelAnimationFrame'] ||
                    window[t + 'CancelRequestAnimationFrame']));
            }
            if (!n.raf) {
              var f = 0;
              (n.raf = function (e) {
                var t = new Date().getTime(),
                  n = Math.max(0, 16 - (t - f)),
                  i = window.setTimeout(function () {
                    e(t + n);
                  }, n);
                return (f = t + n), i;
              }),
                (n.caf = function (e) {
                  clearTimeout(e);
                });
            }
            return (
              (n.svg =
                !!document.createElementNS &&
                !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect),
              (r.features = n),
              n
            );
          },
        };
        r.detectFeatures(),
          r.features.oldIE &&
            (r.bind = function (e, t, n, i) {
              t = t.split(' ');
              for (
                var r,
                  o = (i ? 'detach' : 'attach') + 'Event',
                  a = function () {
                    n.handleEvent.call(n);
                  },
                  s = 0;
                s < t.length;
                s++
              )
                if ((r = t[s]))
                  if ('object' == typeof n && n.handleEvent) {
                    if (i) {
                      if (!n['oldIE' + r]) return !1;
                    } else n['oldIE' + r] = a;
                    e[o]('on' + r, n['oldIE' + r]);
                  } else e[o]('on' + r, n);
            });
        var o = this,
          a = {
            allowPanToNext: !0,
            spacing: 0.12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: 0.75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: 0.35,
            panEndFriction: 0.35,
            isClickableElement: function (e) {
              return 'A' === e.tagName;
            },
            getDoubleTapZoom: function (e, t) {
              return e || t.initialZoomLevel < 0.7 ? 1 : 1.33;
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: 'fit',
          };
        r.extend(a, i);
        var s,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          m,
          v,
          g,
          y,
          b,
          w,
          _,
          x,
          S,
          C,
          E,
          T,
          k,
          O,
          M,
          P,
          R,
          A,
          I,
          L,
          z,
          D,
          j,
          N,
          F,
          W,
          B,
          H,
          q,
          V,
          U,
          $,
          G,
          Z,
          Y,
          X,
          K,
          J,
          Q,
          ee,
          te,
          ne,
          ie,
          re,
          oe,
          ae,
          se,
          le,
          ce = { x: 0, y: 0 },
          ue = { x: 0, y: 0 },
          de = { x: 0, y: 0 },
          he = {},
          pe = 0,
          fe = {},
          me = { x: 0, y: 0 },
          ve = 0,
          ge = !0,
          ye = [],
          be = {},
          we = !1,
          _e = function (e, t) {
            r.extend(o, t.publicMethods), ye.push(e);
          },
          xe = function (e) {
            var t = Bt();
            return e > t - 1 ? e - t : e < 0 ? t + e : e;
          },
          Se = {},
          Ce = function (e, t) {
            return Se[e] || (Se[e] = []), Se[e].push(t);
          },
          Ee = function (e) {
            var t = Se[e];
            if (t) {
              var n = Array.prototype.slice.call(arguments);
              n.shift();
              for (var i = 0; i < t.length; i++) t[i].apply(o, n);
            }
          },
          Te = function () {
            return new Date().getTime();
          },
          ke = function (e) {
            (ae = e), (o.bg.style.opacity = e * a.bgOpacity);
          },
          Oe = function (e, t, n, i, r) {
            (!we || (r && r !== o.currItem)) && (i /= r ? r.fitRatio : o.currItem.fitRatio),
              (e[O] = y + t + 'px, ' + n + 'px' + b + ' scale(' + i + ')');
          },
          Me = function (e) {
            te &&
              (e &&
                (v > o.currItem.fitRatio
                  ? we || (Xt(o.currItem, !1, !0), (we = !0))
                  : we && (Xt(o.currItem), (we = !1))),
              Oe(te, de.x, de.y, v));
          },
          Pe = function (e) {
            e.container &&
              Oe(
                e.container.style,
                e.initialPosition.x,
                e.initialPosition.y,
                e.initialZoomLevel,
                e
              );
          },
          Re = function (e, t) {
            t[O] = y + e + 'px, 0px' + b;
          },
          Ae = function (e, t) {
            if (!a.loop && t) {
              var n = u + (me.x * pe - e) / me.x,
                i = Math.round(e - ut.x);
              ((n < 0 && i > 0) || (n >= Bt() - 1 && i < 0)) &&
                (e = ut.x + i * a.mainScrollEndFriction);
            }
            (ut.x = e), Re(e, d);
          },
          Ie = function (e, t) {
            var n = dt[e] - fe[e];
            return ue[e] + ce[e] + n - n * (t / g);
          },
          Le = function (e, t) {
            (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
          },
          ze = function (e) {
            (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
          },
          De = null,
          je = function () {
            De &&
              (r.unbind(document, 'mousemove', je),
              r.addClass(e, 'pwwp--has_mouse'),
              (a.mouseUsed = !0),
              Ee('mouseUsed')),
              (De = setTimeout(function () {
                De = null;
              }, 100));
          },
          Ne = function (e, t) {
            var n = $t(o.currItem, he, e);
            return t && (ee = n), n;
          },
          Fe = function (e) {
            return e || (e = o.currItem), e.initialZoomLevel;
          },
          We = function (e) {
            return e || (e = o.currItem), e.w > 0 ? a.maxSpreadZoom : 1;
          },
          Be = function (e, t, n, i) {
            return i === o.currItem.initialZoomLevel
              ? ((n[e] = o.currItem.initialPosition[e]), !0)
              : ((n[e] = Ie(e, i)),
                n[e] > t.min[e]
                  ? ((n[e] = t.min[e]), !0)
                  : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
          },
          He = function (e) {
            var t = '';
            a.escKey && 27 === e.keyCode
              ? (t = 'close')
              : a.arrowKeys && (37 === e.keyCode ? (t = 'prev') : 39 === e.keyCode && (t = 'next')),
              t &&
                (e.ctrlKey ||
                  e.altKey ||
                  e.shiftKey ||
                  e.metaKey ||
                  (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), o[t]()));
          },
          qe = function (e) {
            e && (Z || G || ne || q) && (e.preventDefault(), e.stopPropagation());
          },
          Ve = function () {
            o.setScrollOffset(0, r.getScrollY());
          },
          Ue = {},
          $e = 0,
          Ge = function (e) {
            Ue[e] && (Ue[e].raf && A(Ue[e].raf), $e--, delete Ue[e]);
          },
          Ze = function (e) {
            Ue[e] && Ge(e), Ue[e] || ($e++, (Ue[e] = {}));
          },
          Ye = function () {
            for (var e in Ue) Ue.hasOwnProperty(e) && Ge(e);
          },
          Xe = function (e, t, n, i, r, o, a) {
            var s,
              l = Te();
            Ze(e);
            var c = function () {
              if (Ue[e]) {
                if ((s = Te() - l) >= i) return Ge(e), o(n), void (a && a());
                o((n - t) * r(s / i) + t), (Ue[e].raf = R(c));
              }
            };
            c();
          },
          Ke = {
            shout: Ee,
            listen: Ce,
            viewportSize: he,
            options: a,
            isMainScrollAnimating: function () {
              return ne;
            },
            getZoomLevel: function () {
              return v;
            },
            getCurrentIndex: function () {
              return u;
            },
            isDragging: function () {
              return U;
            },
            isZooming: function () {
              return J;
            },
            setScrollOffset: function (e, t) {
              (fe.x = e), (D = fe.y = t), Ee('updateScrollOffset', fe);
            },
            applyZoomPan: function (e, t, n, i) {
              (de.x = t), (de.y = n), (v = e), Me(i);
            },
            init: function () {
              if (!s && !l) {
                var n;
                (o.framework = r),
                  (o.template = e),
                  (o.bg = r.getChildByClass(e, 'pwwp__bg')),
                  (I = e.className),
                  (s = !0),
                  (j = r.detectFeatures()),
                  (R = j.raf),
                  (A = j.caf),
                  (O = j.transform),
                  (z = j.oldIE),
                  (o.scrollWrap = r.getChildByClass(e, 'pwwp__scroll-wrap')),
                  (o.container = r.getChildByClass(o.scrollWrap, 'pwwp__container')),
                  (d = o.container.style),
                  (o.itemHolders = x =
                    [
                      { el: o.container.children[0], wrap: 0, index: -1 },
                      { el: o.container.children[1], wrap: 0, index: -1 },
                      { el: o.container.children[2], wrap: 0, index: -1 },
                    ]),
                  (x[0].el.style.display = x[2].el.style.display = 'none'),
                  (function () {
                    if (O) {
                      var t = j.perspective && !P;
                      return (
                        (y = 'translate' + (t ? '3d(' : '(')),
                        void (b = j.perspective ? ', 0px)' : ')')
                      );
                    }
                    (O = 'left'),
                      r.addClass(e, 'pwwp--ie'),
                      (Re = function (e, t) {
                        t.left = e + 'px';
                      }),
                      (Pe = function (e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                          n = e.container.style,
                          i = t * e.w,
                          r = t * e.h;
                        (n.width = i + 'px'),
                          (n.height = r + 'px'),
                          (n.left = e.initialPosition.x + 'px'),
                          (n.top = e.initialPosition.y + 'px');
                      }),
                      (Me = function () {
                        if (te) {
                          var e = te,
                            t = o.currItem,
                            n = t.fitRatio > 1 ? 1 : t.fitRatio,
                            i = n * t.w,
                            r = n * t.h;
                          (e.width = i + 'px'),
                            (e.height = r + 'px'),
                            (e.left = de.x + 'px'),
                            (e.top = de.y + 'px');
                        }
                      });
                  })(),
                  (m = {
                    resize: o.updateSize,
                    orientationchange: function () {
                      clearTimeout(N),
                        (N = setTimeout(function () {
                          he.x !== o.scrollWrap.clientWidth && o.updateSize();
                        }, 500));
                    },
                    scroll: Ve,
                    keydown: He,
                    click: qe,
                  });
                var i = j.isOldIOSPhone || j.isOldAndroid || j.isMobileOpera;
                for (
                  (j.animationName && j.transform && !i) ||
                    (a.showAnimationDuration = a.hideAnimationDuration = 0),
                    n = 0;
                  n < ye.length;
                  n++
                )
                  o['init' + ye[n]]();
                t && (o.ui = new t(o, r)).init(),
                  Ee('firstUpdate'),
                  (u = u || a.index || 0),
                  (isNaN(u) || u < 0 || u >= Bt()) && (u = 0),
                  (o.currItem = Wt(u)),
                  (j.isOldIOSPhone || j.isOldAndroid) && (ge = !1),
                  e.setAttribute('aria-hidden', 'false'),
                  a.modal &&
                    (ge
                      ? (e.style.position = 'fixed')
                      : ((e.style.position = 'absolute'), (e.style.top = r.getScrollY() + 'px'))),
                  void 0 === D && (Ee('initialLayout'), (D = L = r.getScrollY()));
                var c = 'pwwp--open ';
                for (
                  a.mainClass && (c += a.mainClass + ' '),
                    a.showHideOpacity && (c += 'pwwp--animate_opacity '),
                    c += P ? 'pwwp--touch' : 'pwwp--notouch',
                    c += j.animationName ? ' pwwp--css_animation' : '',
                    c += j.svg ? ' pwwp--svg' : '',
                    r.addClass(e, c),
                    o.updateSize(),
                    h = -1,
                    ve = null,
                    n = 0;
                  n < 3;
                  n++
                )
                  Re((n + h) * me.x, x[n].el.style);
                z || r.bind(o.scrollWrap, f, o),
                  Ce('initialZoomInEnd', function () {
                    o.setContent(x[0], u - 1),
                      o.setContent(x[2], u + 1),
                      (x[0].el.style.display = x[2].el.style.display = 'block'),
                      a.focus && e.focus(),
                      r.bind(document, 'keydown', o),
                      j.transform && r.bind(o.scrollWrap, 'click', o),
                      a.mouseUsed || r.bind(document, 'mousemove', je),
                      r.bind(window, 'resize scroll orientationchange', o),
                      Ee('bindEvents');
                  }),
                  o.setContent(x[1], u),
                  o.updateCurrItem(),
                  Ee('afterInit'),
                  ge ||
                    (w = setInterval(function () {
                      $e || U || J || v !== o.currItem.initialZoomLevel || o.updateSize();
                    }, 1e3)),
                  r.addClass(e, 'pwwp--visible');
              }
            },
            close: function () {
              s &&
                ((s = !1),
                (l = !0),
                Ee('close'),
                r.unbind(window, 'resize scroll orientationchange', o),
                r.unbind(window, 'scroll', m.scroll),
                r.unbind(document, 'keydown', o),
                r.unbind(document, 'mousemove', je),
                j.transform && r.unbind(o.scrollWrap, 'click', o),
                U && r.unbind(window, p, o),
                clearTimeout(N),
                Ee('unbindEvents'),
                Ht(o.currItem, null, !0, o.destroy));
            },
            destroy: function () {
              Ee('destroy'),
                Dt && clearTimeout(Dt),
                e.setAttribute('aria-hidden', 'true'),
                (e.className = I),
                w && clearInterval(w),
                r.unbind(o.scrollWrap, f, o),
                r.unbind(window, 'scroll', o),
                ft(),
                Ye(),
                (Se = null);
            },
            panTo: function (e, t, n) {
              n ||
                (e > ee.min.x ? (e = ee.min.x) : e < ee.max.x && (e = ee.max.x),
                t > ee.min.y ? (t = ee.min.y) : t < ee.max.y && (t = ee.max.y)),
                (de.x = e),
                (de.y = t),
                Me();
            },
            handleEvent: function (e) {
              (e = e || window.event), m[e.type] && m[e.type](e);
            },
            goTo: function (e) {
              var t = (e = xe(e)) - u;
              (ve = t),
                (u = e),
                (o.currItem = Wt(u)),
                (pe -= t),
                Ae(me.x * pe),
                Ye(),
                (ne = !1),
                o.updateCurrItem();
            },
            next: function () {
              o.goTo(u + 1);
            },
            prev: function () {
              o.goTo(u - 1);
            },
            updateCurrZoomItem: function (e) {
              if ((e && Ee('beforeChange', 0), x[1].el.children.length)) {
                var t = x[1].el.children[0];
                te = r.hasClass(t, 'pwwp__zoom-wrap') ? t.style : null;
              } else te = null;
              (ee = o.currItem.bounds),
                (g = v = o.currItem.initialZoomLevel),
                (de.x = ee.center.x),
                (de.y = ee.center.y),
                e && Ee('afterChange');
            },
            invalidateCurrItems: function () {
              _ = !0;
              for (var e = 0; e < 3; e++) x[e].item && (x[e].item.needsUpdate = !0);
            },
            updateCurrItem: function (e) {
              if (0 !== ve) {
                var t,
                  n = Math.abs(ve);
                if (!(e && n < 2)) {
                  (o.currItem = Wt(u)),
                    (we = !1),
                    Ee('beforeChange', ve),
                    n >= 3 && ((h += ve + (ve > 0 ? -3 : 3)), (n = 3));
                  for (var i = 0; i < n; i++)
                    ve > 0
                      ? ((t = x.shift()),
                        (x[2] = t),
                        h++,
                        Re((h + 2) * me.x, t.el.style),
                        o.setContent(t, u - n + i + 1 + 1))
                      : ((t = x.pop()),
                        x.unshift(t),
                        h--,
                        Re(h * me.x, t.el.style),
                        o.setContent(t, u + n - i - 1 - 1));
                  if (te && 1 === Math.abs(ve)) {
                    var r = Wt(S);
                    r.initialZoomLevel !== v && ($t(r, he), Xt(r), Pe(r));
                  }
                  (ve = 0), o.updateCurrZoomItem(), (S = u), Ee('afterChange');
                }
              }
            },
            updateSize: function (t) {
              if (!ge && a.modal) {
                var n = r.getScrollY();
                if (
                  (D !== n && ((e.style.top = n + 'px'), (D = n)),
                  !t && be.x === window.innerWidth && be.y === window.innerHeight)
                )
                  return;
                (be.x = window.innerWidth),
                  (be.y = window.innerHeight),
                  (e.style.height = be.y + 'px');
              }
              if (
                ((he.x = o.scrollWrap.clientWidth),
                (he.y = o.scrollWrap.clientHeight),
                Ve(),
                (me.x = he.x + Math.round(he.x * a.spacing)),
                (me.y = he.y),
                Ae(me.x * pe),
                Ee('beforeResize'),
                void 0 !== h)
              ) {
                for (var i, s, l, c = 0; c < 3; c++)
                  (i = x[c]),
                    Re((c + h) * me.x, i.el.style),
                    (l = u + c - 1),
                    a.loop && Bt() > 2 && (l = xe(l)),
                    (s = Wt(l)) && (_ || s.needsUpdate || !s.bounds)
                      ? (o.cleanSlide(s),
                        o.setContent(i, l),
                        1 === c && ((o.currItem = s), o.updateCurrZoomItem(!0)),
                        (s.needsUpdate = !1))
                      : -1 === i.index && l >= 0 && o.setContent(i, l),
                    s && s.container && ($t(s, he), Xt(s), Pe(s));
                _ = !1;
              }
              (g = v = o.currItem.initialZoomLevel),
                (ee = o.currItem.bounds) && ((de.x = ee.center.x), (de.y = ee.center.y), Me(!0)),
                Ee('resize');
            },
            zoomTo: function (e, t, n, i, o) {
              t &&
                ((g = v), (dt.x = Math.abs(t.x) - de.x), (dt.y = Math.abs(t.y) - de.y), Le(ue, de));
              var a = Ne(e, !1),
                s = {};
              Be('x', a, s, e), Be('y', a, s, e);
              var l = v,
                c = de.x,
                u = de.y;
              ze(s);
              var d = function (t) {
                1 === t
                  ? ((v = e), (de.x = s.x), (de.y = s.y))
                  : ((v = (e - l) * t + l), (de.x = (s.x - c) * t + c), (de.y = (s.y - u) * t + u)),
                  o && o(t),
                  Me(1 === t);
              };
              n ? Xe('customZoomTo', 0, 1, n, i || r.easing.sine.inOut, d) : d(1);
            },
          },
          Je = {},
          Qe = {},
          et = {},
          tt = {},
          nt = {},
          it = [],
          rt = {},
          ot = [],
          at = {},
          st = 0,
          lt = { x: 0, y: 0 },
          ct = 0,
          ut = { x: 0, y: 0 },
          dt = { x: 0, y: 0 },
          ht = { x: 0, y: 0 },
          pt = function (e, t) {
            return (
              (at.x = Math.abs(e.x - t.x)),
              (at.y = Math.abs(e.y - t.y)),
              Math.sqrt(at.x * at.x + at.y * at.y)
            );
          },
          ft = function () {
            Y && (A(Y), (Y = null));
          },
          mt = function () {
            U && ((Y = R(mt)), Mt());
          },
          vt = function (e, t) {
            return (
              !(!e || e === document) &&
              !(
                e.getAttribute('class') && e.getAttribute('class').indexOf('pwwp__scroll-wrap') > -1
              ) &&
              (t(e) ? e : vt(e.parentNode, t))
            );
          },
          gt = {},
          yt = function (e, t) {
            return (
              (gt.prevent = !vt(e.target, a.isClickableElement)),
              Ee('preventDragEvent', e, t, gt),
              gt.prevent
            );
          },
          bt = function (e, t) {
            return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
          },
          wt = function (e, t, n) {
            (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
          },
          _t = function () {
            var e = de.y - o.currItem.initialPosition.y;
            return 1 - Math.abs(e / (he.y / 2));
          },
          xt = {},
          St = {},
          Ct = [],
          Et = function (e) {
            for (; Ct.length > 0; ) Ct.pop();
            return (
              M
                ? ((le = 0),
                  it.forEach(function (e) {
                    0 === le ? (Ct[0] = e) : 1 === le && (Ct[1] = e), le++;
                  }))
                : e.type.indexOf('touch') > -1
                ? e.touches &&
                  e.touches.length > 0 &&
                  ((Ct[0] = bt(e.touches[0], xt)),
                  e.touches.length > 1 && (Ct[1] = bt(e.touches[1], St)))
                : ((xt.x = e.pageX), (xt.y = e.pageY), (xt.id = ''), (Ct[0] = xt)),
              Ct
            );
          },
          Tt = function (e, t) {
            var n,
              i,
              r,
              s,
              l = de[e] + t[e],
              c = t[e] > 0,
              u = ut.x + t.x,
              d = ut.x - rt.x;
            if (
              ((n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1),
              (l = de[e] + t[e] * n),
              (a.allowPanToNext || v === o.currItem.initialZoomLevel) &&
                (te
                  ? 'h' !== ie ||
                    'x' !== e ||
                    G ||
                    (c
                      ? (l > ee.min[e] &&
                          ((n = a.panEndFriction), ee.min[e], (i = ee.min[e] - ue[e])),
                        (i <= 0 || d < 0) && Bt() > 1
                          ? ((s = u), d < 0 && u > rt.x && (s = rt.x))
                          : ee.min.x !== ee.max.x && (r = l))
                      : (l < ee.max[e] &&
                          ((n = a.panEndFriction), ee.max[e], (i = ue[e] - ee.max[e])),
                        (i <= 0 || d > 0) && Bt() > 1
                          ? ((s = u), d > 0 && u < rt.x && (s = rt.x))
                          : ee.min.x !== ee.max.x && (r = l)))
                  : (s = u),
                'x' === e))
            )
              return (
                void 0 !== s && (Ae(s, !0), (X = s !== rt.x)),
                ee.min.x !== ee.max.x && (void 0 !== r ? (de.x = r) : X || (de.x += t.x * n)),
                void 0 !== s
              );
            ne || X || (v > o.currItem.fitRatio && (de[e] += t[e] * n));
          },
          kt = function (e) {
            if (!('mousedown' === e.type && e.button > 0))
              if (Ft) e.preventDefault();
              else if (!V || 'mousedown' !== e.type) {
                if ((yt(e, !0) && e.preventDefault(), Ee('pointerDown'), M)) {
                  var t = r.arraySearch(it, e.pointerId, 'id');
                  t < 0 && (t = it.length), (it[t] = { x: e.pageX, y: e.pageY, id: e.pointerId });
                }
                var n = Et(e),
                  i = n.length;
                (K = null),
                  Ye(),
                  (U && 1 !== i) ||
                    ((U = re = !0),
                    r.bind(window, p, o),
                    (H = se = oe = q = X = Z = $ = G = !1),
                    (ie = null),
                    Ee('firstTouchStart', n),
                    Le(ue, de),
                    (ce.x = ce.y = 0),
                    Le(tt, n[0]),
                    Le(nt, tt),
                    (rt.x = me.x * pe),
                    (ot = [{ x: tt.x, y: tt.y }]),
                    (W = F = Te()),
                    Ne(v, !0),
                    ft(),
                    mt()),
                  !J &&
                    i > 1 &&
                    !ne &&
                    !X &&
                    ((g = v),
                    (G = !1),
                    (J = $ = !0),
                    (ce.y = ce.x = 0),
                    Le(ue, de),
                    Le(Je, n[0]),
                    Le(Qe, n[1]),
                    wt(Je, Qe, ht),
                    (dt.x = Math.abs(ht.x) - de.x),
                    (dt.y = Math.abs(ht.y) - de.y),
                    (Q = pt(Je, Qe)));
              }
          },
          Ot = function (e) {
            if ((e.preventDefault(), M)) {
              var t = r.arraySearch(it, e.pointerId, 'id');
              if (t > -1) {
                var n = it[t];
                (n.x = e.pageX), (n.y = e.pageY);
              }
            }
            if (U) {
              var i = Et(e);
              if (ie || Z || J) K = i;
              else if (ut.x !== me.x * pe) ie = 'h';
              else {
                var o = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
                Math.abs(o) >= 10 && ((ie = o > 0 ? 'h' : 'v'), (K = i));
              }
            }
          },
          Mt = function () {
            if (K) {
              var e = K.length;
              if (0 !== e)
                if ((Le(Je, K[0]), (et.x = Je.x - tt.x), (et.y = Je.y - tt.y), J && e > 1)) {
                  if (
                    ((tt.x = Je.x),
                    (tt.y = Je.y),
                    !et.x &&
                      !et.y &&
                      (function (e, t) {
                        return e.x === t.x && e.y === t.y;
                      })(K[1], Qe))
                  )
                    return;
                  Le(Qe, K[1]), G || ((G = !0), Ee('zoomGestureStarted'));
                  var t = pt(Je, Qe),
                    n = Lt(t);
                  n > o.currItem.initialZoomLevel + o.currItem.initialZoomLevel / 15 && (se = !0);
                  var i = 1,
                    r = Fe(),
                    s = We();
                  if (n < r)
                    if (a.pinchToClose && !se && g <= o.currItem.initialZoomLevel) {
                      var l = 1 - (r - n) / (r / 1.2);
                      ke(l), Ee('onPinchClose', l), (oe = !0);
                    } else (i = (r - n) / r) > 1 && (i = 1), (n = r - i * (r / 3));
                  else n > s && ((i = (n - s) / (6 * r)) > 1 && (i = 1), (n = s + i * r));
                  i < 0 && (i = 0),
                    wt(Je, Qe, lt),
                    (ce.x += lt.x - ht.x),
                    (ce.y += lt.y - ht.y),
                    Le(ht, lt),
                    (de.x = Ie('x', n)),
                    (de.y = Ie('y', n)),
                    (H = n > v),
                    (v = n),
                    Me();
                } else {
                  if (!ie) return;
                  if (
                    (re &&
                      ((re = !1),
                      Math.abs(et.x) >= 10 && (et.x -= K[0].x - nt.x),
                      Math.abs(et.y) >= 10 && (et.y -= K[0].y - nt.y)),
                    (tt.x = Je.x),
                    (tt.y = Je.y),
                    0 === et.x && 0 === et.y)
                  )
                    return;
                  if (
                    'v' === ie &&
                    a.closeOnVerticalDrag &&
                    'fit' === a.scaleMode &&
                    v === o.currItem.initialZoomLevel
                  ) {
                    (ce.y += et.y), (de.y += et.y);
                    var c = _t();
                    return (q = !0), Ee('onVerticalDrag', c), ke(c), void Me();
                  }
                  !(function (e, t, n) {
                    if (e - W > 50) {
                      var i = ot.length > 2 ? ot.shift() : {};
                      (i.x = t), (i.y = n), ot.push(i), (W = e);
                    }
                  })(Te(), Je.x, Je.y),
                    (Z = !0),
                    (ee = o.currItem.bounds),
                    Tt('x', et) || (Tt('y', et), ze(de), Me());
                }
            }
          },
          Pt = function (e) {
            if (j.isOldAndroid) {
              if (V && 'mouseup' === e.type) return;
              e.type.indexOf('touch') > -1 &&
                (clearTimeout(V),
                (V = setTimeout(function () {
                  V = 0;
                }, 600)));
            }
            var t;
            if ((Ee('pointerUp'), yt(e, !1) && e.preventDefault(), M)) {
              var n = r.arraySearch(it, e.pointerId, 'id');
              n > -1 &&
                ((t = it.splice(n, 1)[0]),
                navigator.msPointerEnabled
                  ? ((t.type = { 4: 'mouse', 2: 'touch', 3: 'pen' }[e.pointerType]),
                    t.type || (t.type = e.pointerType || 'mouse'))
                  : (t.type = e.pointerType || 'mouse'));
            }
            var i,
              s = Et(e),
              l = s.length;
            if (('mouseup' === e.type && (l = 0), 2 === l)) return (K = null), !0;
            1 === l && Le(nt, s[0]),
              0 !== l ||
                ie ||
                ne ||
                (t ||
                  ('mouseup' === e.type
                    ? (t = { x: e.pageX, y: e.pageY, type: 'mouse' })
                    : e.changedTouches &&
                      e.changedTouches[0] &&
                      (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: 'touch',
                      })),
                Ee('touchRelease', e, t));
            var c = -1;
            if (
              (0 === l &&
                ((U = !1),
                r.unbind(window, p, o),
                ft(),
                J ? (c = 0) : -1 !== ct && (c = Te() - ct)),
              (ct = 1 === l ? Te() : -1),
              (i = -1 !== c && c < 150 ? 'zoom' : 'swipe'),
              J && l < 2 && ((J = !1), 1 === l && (i = 'zoomPointerUp'), Ee('zoomGestureEnded')),
              (K = null),
              Z || G || ne || q)
            )
              if ((Ye(), B || (B = Rt()), B.calculateSwipeSpeed('x'), q))
                if (_t() < a.verticalDragRange) o.close();
                else {
                  var u = de.y,
                    d = ae;
                  Xe('verticalDrag', 0, 1, 300, r.easing.cubic.out, function (e) {
                    (de.y = (o.currItem.initialPosition.y - u) * e + u), ke((1 - d) * e + d), Me();
                  }),
                    Ee('onVerticalDrag', 1);
                }
              else {
                if ((X || ne) && 0 === l) {
                  if (It(i, B)) return;
                  i = 'zoomPointerUp';
                }
                ne || ('swipe' === i ? !X && v > o.currItem.fitRatio && At(B) : zt());
              }
          },
          Rt = function () {
            var e,
              t,
              n = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function (i) {
                  ot.length > 1
                    ? ((e = Te() - W + 50), (t = ot[ot.length - 2][i]))
                    : ((e = Te() - F), (t = nt[i])),
                    (n.lastFlickOffset[i] = tt[i] - t),
                    (n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i])),
                    n.lastFlickDist[i] > 20
                      ? (n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e)
                      : (n.lastFlickSpeed[i] = 0),
                    Math.abs(n.lastFlickSpeed[i]) < 0.1 && (n.lastFlickSpeed[i] = 0),
                    (n.slowDownRatio[i] = 0.95),
                    (n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i]),
                    (n.speedDecelerationRatio[i] = 1);
                },
                calculateOverBoundsAnimOffset: function (e, t) {
                  n.backAnimStarted[e] ||
                    (de[e] > ee.min[e]
                      ? (n.backAnimDestination[e] = ee.min[e])
                      : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]),
                    void 0 !== n.backAnimDestination[e] &&
                      ((n.slowDownRatio[e] = 0.7),
                      (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                      n.speedDecelerationRatioAbs[e] < 0.05 &&
                        ((n.lastFlickSpeed[e] = 0),
                        (n.backAnimStarted[e] = !0),
                        Xe(
                          'bounceZoomPan' + e,
                          de[e],
                          n.backAnimDestination[e],
                          t || 300,
                          r.easing.sine.out,
                          function (t) {
                            (de[e] = t), Me();
                          }
                        ))));
                },
                calculateAnimOffset: function (e) {
                  n.backAnimStarted[e] ||
                    ((n.speedDecelerationRatio[e] =
                      n.speedDecelerationRatio[e] *
                      (n.slowDownRatio[e] +
                        n.slowDownRatioReverse[e] -
                        (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                    (n.speedDecelerationRatioAbs[e] = Math.abs(
                      n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                    )),
                    (n.distanceOffset[e] =
                      n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff),
                    (de[e] += n.distanceOffset[e]));
                },
                panAnimLoop: function () {
                  if (
                    Ue.zoomPan &&
                    ((Ue.zoomPan.raf = R(n.panAnimLoop)),
                    (n.now = Te()),
                    (n.timeDiff = n.now - n.lastNow),
                    (n.lastNow = n.now),
                    n.calculateAnimOffset('x'),
                    n.calculateAnimOffset('y'),
                    Me(),
                    n.calculateOverBoundsAnimOffset('x'),
                    n.calculateOverBoundsAnimOffset('y'),
                    n.speedDecelerationRatioAbs.x < 0.05 && n.speedDecelerationRatioAbs.y < 0.05)
                  )
                    return (
                      (de.x = Math.round(de.x)), (de.y = Math.round(de.y)), Me(), void Ge('zoomPan')
                    );
                },
              };
            return n;
          },
          At = function (e) {
            if (
              (e.calculateSwipeSpeed('y'),
              (ee = o.currItem.bounds),
              (e.backAnimDestination = {}),
              (e.backAnimStarted = {}),
              Math.abs(e.lastFlickSpeed.x) <= 0.05 && Math.abs(e.lastFlickSpeed.y) <= 0.05)
            )
              return (
                (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0),
                e.calculateOverBoundsAnimOffset('x'),
                e.calculateOverBoundsAnimOffset('y'),
                !0
              );
            Ze('zoomPan'), (e.lastNow = Te()), e.panAnimLoop();
          },
          It = function (e, t) {
            var n, i, s;
            if ((ne || (st = u), 'swipe' === e)) {
              var l = tt.x - nt.x,
                c = t.lastFlickDist.x < 10;
              l > 30 && (c || t.lastFlickOffset.x > 20)
                ? (i = -1)
                : l < -30 && (c || t.lastFlickOffset.x < -20) && (i = 1);
            }
            i &&
              ((u += i) < 0
                ? ((u = a.loop ? Bt() - 1 : 0), (s = !0))
                : u >= Bt() && ((u = a.loop ? 0 : Bt() - 1), (s = !0)),
              (s && !a.loop) || ((ve += i), (pe -= i), (n = !0)));
            var d,
              h = me.x * pe,
              p = Math.abs(h - ut.x);
            return (
              n || h > ut.x == t.lastFlickSpeed.x > 0
                ? ((d = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333),
                  (d = Math.min(d, 400)),
                  (d = Math.max(d, 250)))
                : (d = 333),
              st === u && (n = !1),
              (ne = !0),
              Ee('mainScrollAnimStart'),
              Xe('mainScroll', ut.x, h, d, r.easing.cubic.out, Ae, function () {
                Ye(),
                  (ne = !1),
                  (st = -1),
                  (n || st !== u) && o.updateCurrItem(),
                  Ee('mainScrollAnimComplete');
              }),
              n && o.updateCurrItem(!0),
              n
            );
          },
          Lt = function (e) {
            return (1 / Q) * e * g;
          },
          zt = function () {
            var e = v,
              t = Fe(),
              n = We();
            v < t ? (e = t) : v > n && (e = n);
            var i,
              a = ae;
            return oe && !H && !se && v < t
              ? (o.close(), !0)
              : (oe &&
                  (i = function (e) {
                    ke((1 - a) * e + a);
                  }),
                o.zoomTo(e, 0, 200, r.easing.cubic.out, i),
                !0);
          };
        _e('Gestures', {
          publicMethods: {
            initGestures: function () {
              var e = function (e, t, n, i, r) {
                (C = e + t), (E = e + n), (T = e + i), (k = r ? e + r : '');
              };
              (M = j.pointerEvent) && j.touch && (j.touch = !1),
                M
                  ? navigator.msPointerEnabled
                    ? e('MSPointer', 'Down', 'Move', 'Up', 'Cancel')
                    : e('pointer', 'down', 'move', 'up', 'cancel')
                  : j.touch
                  ? (e('touch', 'start', 'move', 'end', 'cancel'), (P = !0))
                  : e('mouse', 'down', 'move', 'up'),
                (p = E + ' ' + T + ' ' + k),
                (f = C),
                M && !P && (P = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                (o.likelyTouchDevice = P),
                (m[C] = kt),
                (m[E] = Ot),
                (m[T] = Pt),
                k && (m[k] = m[T]),
                j.touch &&
                  ((f += ' mousedown'),
                  (p += ' mousemove mouseup'),
                  (m.mousedown = m[C]),
                  (m.mousemove = m[E]),
                  (m.mouseup = m[T])),
                P || (a.allowPanToNext = !1);
            },
          },
        });
        var Dt,
          jt,
          Nt,
          Ft,
          Wt,
          Bt,
          Ht = function (t, n, i, s) {
            var l;
            Dt && clearTimeout(Dt),
              (Ft = !0),
              (Nt = !0),
              t.initialLayout
                ? ((l = t.initialLayout), (t.initialLayout = null))
                : (l = a.getThumbBoundsFn && a.getThumbBoundsFn(u));
            var d,
              h,
              p = i ? a.hideAnimationDuration : a.showAnimationDuration,
              f = function () {
                Ge('initialZoom'),
                  i
                    ? (o.template.removeAttribute('style'), o.bg.removeAttribute('style'))
                    : (ke(1),
                      n && (n.style.display = 'block'),
                      r.addClass(e, 'pwwp--animated-in'),
                      Ee('initialZoom' + (i ? 'OutEnd' : 'InEnd'))),
                  s && s(),
                  (Ft = !1);
              };
            if (!p || !l || void 0 === l.x)
              return (
                Ee('initialZoom' + (i ? 'Out' : 'In')),
                (v = t.initialZoomLevel),
                Le(de, t.initialPosition),
                Me(),
                (e.style.opacity = i ? 0 : 1),
                ke(1),
                void (p
                  ? setTimeout(function () {
                      f();
                    }, p)
                  : f())
              );
            (d = c),
              (h = !o.currItem.src || o.currItem.loadError || a.showHideOpacity),
              t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = 'hidden'),
              i ||
                ((v = l.w / t.w),
                (de.x = l.x),
                (de.y = l.y - L),
                (o[h ? 'template' : 'bg'].style.opacity = 0.001),
                Me()),
              Ze('initialZoom'),
              i && !d && r.removeClass(e, 'pwwp--animated-in'),
              h &&
                (i
                  ? r[(d ? 'remove' : 'add') + 'Class'](e, 'pwwp--animate_opacity')
                  : setTimeout(function () {
                      r.addClass(e, 'pwwp--animate_opacity');
                    }, 30)),
              (Dt = setTimeout(
                function () {
                  if ((Ee('initialZoom' + (i ? 'Out' : 'In')), i)) {
                    var n = l.w / t.w,
                      o = { x: de.x, y: de.y },
                      a = v,
                      s = ae,
                      c = function (t) {
                        1 === t
                          ? ((v = n), (de.x = l.x), (de.y = l.y - D))
                          : ((v = (n - a) * t + a),
                            (de.x = (l.x - o.x) * t + o.x),
                            (de.y = (l.y - D - o.y) * t + o.y)),
                          Me(),
                          h ? (e.style.opacity = 1 - t) : ke(s - t * s);
                      };
                    d
                      ? Xe('initialZoom', 0, 1, p, r.easing.cubic.out, c, f)
                      : (c(1), (Dt = setTimeout(f, p + 20)));
                  } else
                    (v = t.initialZoomLevel),
                      Le(de, t.initialPosition),
                      Me(),
                      ke(1),
                      h ? (e.style.opacity = 1) : ke(1),
                      (Dt = setTimeout(f, p + 20));
                },
                i ? 25 : 90
              ));
          },
          qt = {},
          Vt = [],
          Ut = {
            index: 0,
            errorMsg:
              '<div class="pwwp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
              return jt.length;
            },
          },
          $t = function (e, t, n) {
            if (e.src && !e.loadError) {
              var i = !n;
              if (
                (i && (e.vGap || (e.vGap = { top: 0, bottom: 0 }), Ee('parseVerticalMargin', e)),
                (qt.x = t.x),
                (qt.y = t.y - e.vGap.top - e.vGap.bottom),
                i)
              ) {
                var r = qt.x / e.w,
                  o = qt.y / e.h;
                e.fitRatio = r < o ? r : o;
                var s = a.scaleMode;
                'orig' === s ? (n = 1) : 'fit' === s && (n = e.fitRatio),
                  n > 1 && (n = 1),
                  (e.initialZoomLevel = n),
                  e.bounds ||
                    (e.bounds = {
                      center: { x: 0, y: 0 },
                      max: { x: 0, y: 0 },
                      min: { x: 0, y: 0 },
                    });
              }
              if (!n) return;
              return (
                (function (e, t, n) {
                  var i = e.bounds;
                  (i.center.x = Math.round((qt.x - t) / 2)),
                    (i.center.y = Math.round((qt.y - n) / 2) + e.vGap.top),
                    (i.max.x = t > qt.x ? Math.round(qt.x - t) : i.center.x),
                    (i.max.y = n > qt.y ? Math.round(qt.y - n) + e.vGap.top : i.center.y),
                    (i.min.x = t > qt.x ? 0 : i.center.x),
                    (i.min.y = n > qt.y ? e.vGap.top : i.center.y);
                })(e, e.w * n, e.h * n),
                i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                e.bounds
              );
            }
            return (
              (e.w = e.h = 0),
              (e.initialZoomLevel = e.fitRatio = 1),
              (e.bounds = { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } }),
              (e.initialPosition = e.bounds.center),
              e.bounds
            );
          },
          Gt = function (e, t, n, i, r, a) {
            t.loadError ||
              (i &&
                ((t.imageAppended = !0),
                Xt(t, i, t === o.currItem && we),
                n.appendChild(i),
                a &&
                  setTimeout(function () {
                    t &&
                      t.loaded &&
                      t.placeholder &&
                      ((t.placeholder.style.display = 'none'), (t.placeholder = null));
                  }, 500)));
          },
          Zt = function (e) {
            (e.loading = !0), (e.loaded = !1);
            var t = (e.img = r.createEl('pwwp__img', 'img')),
              n = function () {
                (e.loading = !1),
                  (e.loaded = !0),
                  e.loadComplete ? e.loadComplete(e) : (e.img = null),
                  (t.onload = t.onerror = null),
                  (t = null);
              };
            return (
              (t.onload = n),
              (t.onerror = function () {
                (e.loadError = !0), n();
              }),
              (t.src = e.src),
              t
            );
          },
          Yt = function (e, t) {
            if (e.src && e.loadError && e.container)
              return (
                t && (e.container.innerHTML = ''),
                (e.container.innerHTML = a.errorMsg.replace('%url%', e.src)),
                !0
              );
          },
          Xt = function (e, t, n) {
            if (e.src) {
              t || (t = e.container.lastChild);
              var i = n ? e.w : Math.round(e.w * e.fitRatio),
                r = n ? e.h : Math.round(e.h * e.fitRatio);
              e.placeholder &&
                !e.loaded &&
                ((e.placeholder.style.width = i + 'px'), (e.placeholder.style.height = r + 'px')),
                (t.style.width = i + 'px'),
                (t.style.height = r + 'px');
            }
          },
          Kt = function () {
            if (Vt.length) {
              for (var e, t = 0; t < Vt.length; t++)
                (e = Vt[t]).holder.index === e.index &&
                  Gt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
              Vt = [];
            }
          };
        _e('Controller', {
          publicMethods: {
            lazyLoadItem: function (e) {
              e = xe(e);
              var t = Wt(e);
              t && ((!t.loaded && !t.loading) || _) && (Ee('gettingData', e, t), t.src && Zt(t));
            },
            initController: function () {
              r.extend(a, Ut, !0),
                (o.items = jt = n),
                (Wt = o.getItemAt),
                (Bt = a.getNumItemsFn),
                a.loop,
                Bt() < 3 && (a.loop = !1),
                Ce('beforeChange', function (e) {
                  var t,
                    n = a.preload,
                    i = null === e || e >= 0,
                    r = Math.min(n[0], Bt()),
                    s = Math.min(n[1], Bt());
                  for (t = 1; t <= (i ? s : r); t++) o.lazyLoadItem(u + t);
                  for (t = 1; t <= (i ? r : s); t++) o.lazyLoadItem(u - t);
                }),
                Ce('initialLayout', function () {
                  o.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
                }),
                Ce('mainScrollAnimComplete', Kt),
                Ce('initialZoomInEnd', Kt),
                Ce('destroy', function () {
                  for (var e, t = 0; t < jt.length; t++)
                    (e = jt[t]).container && (e.container = null),
                      e.placeholder && (e.placeholder = null),
                      e.img && (e.img = null),
                      e.preloader && (e.preloader = null),
                      e.loadError && (e.loaded = e.loadError = !1);
                  Vt = null;
                });
            },
            getItemAt: function (e) {
              return e >= 0 && void 0 !== jt[e] && jt[e];
            },
            allowProgressiveImg: function () {
              return a.forceProgressiveLoading || !P || a.mouseUsed || screen.width > 1200;
            },
            setContent: function (e, t) {
              a.loop && (t = xe(t));
              var n = o.getItemAt(e.index);
              n && (n.container = null);
              var i,
                l = o.getItemAt(t);
              if (l) {
                Ee('gettingData', t, l), (e.index = t), (e.item = l);
                var c = (l.container = r.createEl('pwwp__zoom-wrap'));
                if (
                  (!l.src &&
                    l.html &&
                    (l.html.tagName ? c.appendChild(l.html) : (c.innerHTML = l.html)),
                  Yt(l),
                  $t(l, he),
                  !l.src || l.loadError || l.loaded)
                )
                  l.src &&
                    !l.loadError &&
                    (((i = r.createEl('pwwp__img', 'img')).style.opacity = 1),
                    (i.src = l.src),
                    Xt(l, i),
                    Gt(0, l, c, i));
                else {
                  if (
                    ((l.loadComplete = function (n) {
                      if (s) {
                        if (e && e.index === t) {
                          if (Yt(n, !0))
                            return (
                              (n.loadComplete = n.img = null),
                              $t(n, he),
                              Pe(n),
                              void (e.index === u && o.updateCurrZoomItem())
                            );
                          n.imageAppended
                            ? !Ft &&
                              n.placeholder &&
                              ((n.placeholder.style.display = 'none'), (n.placeholder = null))
                            : j.transform && (ne || Ft)
                            ? Vt.push({
                                item: n,
                                baseDiv: c,
                                img: n.img,
                                index: t,
                                holder: e,
                                clearPlaceholder: !0,
                              })
                            : Gt(0, n, c, n.img, 0, !0);
                        }
                        (n.loadComplete = null), (n.img = null), Ee('imageLoadComplete', t, n);
                      }
                    }),
                    r.features.transform)
                  ) {
                    var d = 'pwwp__img pwwp__img--placeholder';
                    d += l.msrc ? '' : ' pwwp__img--placeholder--blank';
                    var h = r.createEl(d, l.msrc ? 'img' : '');
                    l.msrc && (h.src = l.msrc), Xt(l, h), c.appendChild(h), (l.placeholder = h);
                  }
                  l.loading || Zt(l),
                    o.allowProgressiveImg() &&
                      (!Nt && j.transform
                        ? Vt.push({ item: l, baseDiv: c, img: l.img, index: t, holder: e })
                        : Gt(0, l, c, l.img, 0, !0));
                }
                Nt || t !== u ? Pe(l) : ((te = c.style), Ht(l, i || l.img)),
                  (e.el.innerHTML = ''),
                  e.el.appendChild(c);
              } else e.el.innerHTML = '';
            },
            cleanSlide: function (e) {
              e.img && (e.img.onload = e.img.onerror = null),
                (e.loaded = e.loading = e.img = e.imageAppended = !1);
            },
          },
        });
        var Jt,
          Qt,
          en = {},
          tn = function (e, t, n) {
            var i = document.createEvent('CustomEvent'),
              r = { origEvent: e, target: e.target, releasePoint: t, pointerType: n || 'touch' };
            i.initCustomEvent('pwwpTap', !0, !0, r), e.target.dispatchEvent(i);
          };
        _e('Tap', {
          publicMethods: {
            initTap: function () {
              Ce('firstTouchStart', o.onTapStart),
                Ce('touchRelease', o.onTapRelease),
                Ce('destroy', function () {
                  (en = {}), (Jt = null);
                });
            },
            onTapStart: function (e) {
              e.length > 1 && (clearTimeout(Jt), (Jt = null));
            },
            onTapRelease: function (e, t) {
              var n, i;
              if (t && !Z && !$ && !$e) {
                var o = t;
                if (
                  Jt &&
                  (clearTimeout(Jt),
                  (Jt = null),
                  (n = o),
                  (i = en),
                  Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)
                )
                  return void Ee('doubleTap', o);
                if ('mouse' === t.type) return void tn(e, t, 'mouse');
                if (
                  'BUTTON' === e.target.tagName.toUpperCase() ||
                  r.hasClass(e.target, 'pwwp__single-tap')
                )
                  return void tn(e, t);
                Le(en, o),
                  (Jt = setTimeout(function () {
                    tn(e, t), (Jt = null);
                  }, 300));
              }
            },
          },
        }),
          _e('DesktopZoom', {
            publicMethods: {
              initDesktopZoom: function () {
                z ||
                  (P
                    ? Ce('mouseUsed', function () {
                        o.setupDesktopZoom();
                      })
                    : o.setupDesktopZoom(!0));
              },
              setupDesktopZoom: function (t) {
                Qt = {};
                var n = 'wheel mousewheel DOMMouseScroll';
                Ce('bindEvents', function () {
                  r.bind(e, n, o.handleMouseWheel);
                }),
                  Ce('unbindEvents', function () {
                    Qt && r.unbind(e, n, o.handleMouseWheel);
                  }),
                  (o.mouseZoomedIn = !1);
                var i,
                  a = function () {
                    o.mouseZoomedIn &&
                      (r.removeClass(e, 'pwwp--zoomed-in'), (o.mouseZoomedIn = !1)),
                      v < 1
                        ? r.addClass(e, 'pwwp--zoom-allowed')
                        : r.removeClass(e, 'pwwp--zoom-allowed'),
                      s();
                  },
                  s = function () {
                    i && (r.removeClass(e, 'pwwp--dragging'), (i = !1));
                  };
                Ce('resize', a),
                  Ce('afterChange', a),
                  Ce('pointerDown', function () {
                    o.mouseZoomedIn && ((i = !0), r.addClass(e, 'pwwp--dragging'));
                  }),
                  Ce('pointerUp', s),
                  t || a();
              },
              handleMouseWheel: function (e) {
                if (v <= o.currItem.fitRatio)
                  return (
                    a.modal &&
                      (!a.closeOnScroll || $e || U
                        ? e.preventDefault()
                        : O && Math.abs(e.deltaY) > 2 && ((c = !0), o.close())),
                    !0
                  );
                if ((e.stopPropagation(), (Qt.x = 0), 'deltaX' in e))
                  1 === e.deltaMode
                    ? ((Qt.x = 18 * e.deltaX), (Qt.y = 18 * e.deltaY))
                    : ((Qt.x = e.deltaX), (Qt.y = e.deltaY));
                else if ('wheelDelta' in e)
                  e.wheelDeltaX && (Qt.x = -0.16 * e.wheelDeltaX),
                    e.wheelDeltaY ? (Qt.y = -0.16 * e.wheelDeltaY) : (Qt.y = -0.16 * e.wheelDelta);
                else {
                  if (!('detail' in e)) return;
                  Qt.y = e.detail;
                }
                Ne(v, !0);
                var t = de.x - Qt.x,
                  n = de.y - Qt.y;
                (a.modal || (t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y)) &&
                  e.preventDefault(),
                  o.panTo(t, n);
              },
              toggleDesktopZoom: function (t) {
                t = t || { x: he.x / 2 + fe.x, y: he.y / 2 + fe.y };
                var n = a.getDoubleTapZoom(!0, o.currItem),
                  i = v === n;
                (o.mouseZoomedIn = !i),
                  o.zoomTo(i ? o.currItem.initialZoomLevel : n, t, 333),
                  r[(i ? 'remove' : 'add') + 'Class'](e, 'pwwp--zoomed-in');
              },
            },
          });
        var nn,
          rn,
          on,
          an,
          sn,
          ln,
          cn,
          un,
          dn,
          hn,
          pn,
          fn,
          mn = { history: !0, galleryUID: 1 },
          vn = function () {
            return pn.hash.substring(1);
          },
          gn = function () {
            nn && clearTimeout(nn), on && clearTimeout(on);
          },
          yn = function () {
            var e = vn(),
              t = {};
            if (e.length < 5) return t;
            var n,
              i = e.split('&');
            for (n = 0; n < i.length; n++)
              if (i[n]) {
                var r = i[n].split('=');
                r.length < 2 || (t[r[0]] = r[1]);
              }
            if (a.galleryPIDs) {
              var o = t.pid;
              for (t.pid = 0, n = 0; n < jt.length; n++)
                if (jt[n].pid === o) {
                  t.pid = n;
                  break;
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t;
          },
          bn = function () {
            if ((on && clearTimeout(on), $e || U)) on = setTimeout(bn, 500);
            else {
              an ? clearTimeout(rn) : (an = !0);
              var e = u + 1,
                t = Wt(u);
              t.hasOwnProperty('pid') && (e = t.pid);
              var n = cn + '&gid=' + a.galleryUID + '&pid=' + e;
              un || (-1 === pn.hash.indexOf(n) && (hn = !0));
              var i = pn.href.split('#')[0] + '#' + n;
              fn
                ? '#' + n !== window.location.hash &&
                  history[un ? 'replaceState' : 'pushState']('', document.title, i)
                : un
                ? pn.replace(i)
                : (pn.hash = n),
                (un = !0),
                (rn = setTimeout(function () {
                  an = !1;
                }, 60));
            }
          };
        _e('History', {
          publicMethods: {
            initHistory: function () {
              if ((r.extend(a, mn, !0), a.history)) {
                (pn = window.location),
                  (hn = !1),
                  (dn = !1),
                  (un = !1),
                  (cn = vn()),
                  (fn = 'pushState' in history),
                  cn.indexOf('gid=') > -1 && (cn = (cn = cn.split('&gid=')[0]).split('?gid=')[0]),
                  Ce('afterChange', o.updateURL),
                  Ce('unbindEvents', function () {
                    r.unbind(window, 'hashchange', o.onHashChange);
                  });
                var e = function () {
                  (ln = !0),
                    dn ||
                      (hn
                        ? history.back()
                        : cn
                        ? (pn.hash = cn)
                        : fn
                        ? history.pushState('', document.title, pn.pathname + pn.search)
                        : (pn.hash = '')),
                    gn();
                };
                Ce('unbindEvents', function () {
                  c && e();
                }),
                  Ce('destroy', function () {
                    ln || e();
                  }),
                  Ce('firstUpdate', function () {
                    u = yn().pid;
                  });
                var t = cn.indexOf('pid=');
                t > -1 && '&' === (cn = cn.substring(0, t)).slice(-1) && (cn = cn.slice(0, -1)),
                  setTimeout(function () {
                    s && r.bind(window, 'hashchange', o.onHashChange);
                  }, 40);
              }
            },
            onHashChange: function () {
              if (vn() === cn) return (dn = !0), void o.close();
              an || ((sn = !0), o.goTo(yn().pid), (sn = !1));
            },
            updateURL: function () {
              gn(), sn || (un ? (nn = setTimeout(bn, 800)) : bn());
            },
          },
        }),
          r.extend(o, Ke);
      };
    }),
    'object' == typeof cf ? (cf = lf()) : (sf.PhotoSwipe = lf());
  var uf = {};
  !(function (e, t) {
    'object' == typeof uf ? (uf = t()) : (e.PhotoSwipeUI_Default = t());
  })(uf, function () {
    return function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        v,
        g,
        y,
        b,
        w = this,
        _ = !1,
        x = !0,
        S = !0,
        C = {
          barsSize: { top: 44, bottom: 'auto' },
          closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title
              ? ((t.children[0].innerHTML = e.title), !0)
              : ((t.children[0].innerHTML = ''), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: 'facebook',
              label: 'Share on Facebook',
              url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
            },
            {
              id: 'twitter',
              label: 'Tweet',
              url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}',
            },
            {
              id: 'pinterest',
              label: 'Pin it',
              url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}',
            },
            { id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: !0 },
          ],
          getImageURLForShare: function () {
            return e.currItem.src || '';
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return e.currItem.title || '';
          },
          indexIndicatorSep: ' / ',
          fitControlsWidth: 1200,
        },
        E = function (e) {
          if (g) return !0;
          (e = e || window.event), v.timeToIdle && v.mouseUsed && !u && L();
          for (
            var n, i, r = (e.target || e.srcElement).getAttribute('class') || '', o = 0;
            o < N.length;
            o++
          )
            (n = N[o]).onTap && r.indexOf('pwwp__' + n.name) > -1 && (n.onTap(), (i = !0));
          if (i) {
            e.stopPropagation && e.stopPropagation(), (g = !0);
            var a = t.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              g = !1;
            }, a);
          }
        },
        T = function (e, n, i) {
          t[(i ? 'add' : 'remove') + 'Class'](e, 'pwwp__' + n);
        },
        k = function () {
          var e = 1 === v.getNumItemsFn();
          e !== m && (T(i, 'ui--one-slide', e), (m = e));
        },
        O = function () {
          T(l, 'share-modal--hidden', S);
        },
        M = function () {
          return (
            (S = !S)
              ? (t.removeClass(l, 'pwwp__share-modal--fade-in'),
                setTimeout(function () {
                  S && O();
                }, 300))
              : (O(),
                setTimeout(function () {
                  S || t.addClass(l, 'pwwp__share-modal--fade-in');
                }, 30)),
            S || R(),
            !1
          );
        },
        P = function (t) {
          var n = (t = t || window.event).target || t.srcElement;
          return (
            e.shout('shareLinkClick', t, n),
            !!n.href &&
              (!!n.hasAttribute('download') ||
                (window.open(
                  n.href,
                  'pwwp_share',
                  'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                S || M(),
                !1))
          );
        },
        R = function () {
          for (var e, t, n, i, r = '', o = 0; o < v.shareButtons.length; o++)
            (e = v.shareButtons[o]),
              (t = v.getImageURLForShare(e)),
              (n = v.getPageURLForShare(e)),
              (i = v.getTextForShare(e)),
              (r +=
                '<a href="' +
                e.url
                  .replace('{{url}}', encodeURIComponent(n))
                  .replace('{{image_url}}', encodeURIComponent(t))
                  .replace('{{raw_image_url}}', t)
                  .replace('{{text}}', encodeURIComponent(i)) +
                '" target="_blank" class="pwwp__share--' +
                e.id +
                '"' +
                (e.download ? 'download' : '') +
                '>' +
                e.label +
                '</a>'),
              v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
          (l.children[0].innerHTML = r), (l.children[0].onclick = P);
        },
        A = function (e) {
          for (var n = 0; n < v.closeElClasses.length; n++)
            if (t.hasClass(e, 'pwwp__' + v.closeElClasses[n])) return !0;
        },
        I = 0,
        L = function () {
          clearTimeout(b), (I = 0), u && w.setIdle(!1);
        },
        z = function (e) {
          var t = (e = e || window.event).relatedTarget || e.toElement;
          (t && 'HTML' !== t.nodeName) ||
            (clearTimeout(b),
            (b = setTimeout(function () {
              w.setIdle(!0);
            }, v.timeToIdleOutside)));
        },
        D = function (e) {
          p !== e && (T(h, 'preloader--active', !e), (p = e));
        },
        j = function (n) {
          var a = n.vGap;
          if (!e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth) {
            var s = v.barsSize;
            if (v.captionEl && 'auto' === s.bottom)
              if (
                (o ||
                  ((o = t.createEl('pwwp__caption pwwp__caption--fake')).appendChild(
                    t.createEl('pwwp__caption__center')
                  ),
                  i.insertBefore(o, r),
                  t.addClass(i, 'pwwp__ui--fit')),
                v.addCaptionHTMLFn(n, o, !0))
              ) {
                var l = o.clientHeight;
                a.bottom = parseInt(l, 10) || 44;
              } else a.bottom = s.top;
            else a.bottom = 'auto' === s.bottom ? 0 : s.bottom;
            a.top = s.top;
          } else a.top = a.bottom = 0;
        },
        N = [
          {
            name: 'caption',
            option: 'captionEl',
            onInit: function (e) {
              r = e;
            },
          },
          {
            name: 'share-modal',
            option: 'shareEl',
            onInit: function (e) {
              l = e;
            },
            onTap: function () {
              M();
            },
          },
          {
            name: 'button--share',
            option: 'shareEl',
            onInit: function (e) {
              s = e;
            },
            onTap: function () {
              M();
            },
          },
          { name: 'button--zoom', option: 'zoomEl', onTap: e.toggleDesktopZoom },
          {
            name: 'counter',
            option: 'counterEl',
            onInit: function (e) {
              a = e;
            },
          },
          { name: 'button--close', option: 'closeEl', onTap: e.close },
          { name: 'button--arrow--left', option: 'arrowEl', onTap: e.prev },
          { name: 'button--arrow--right', option: 'arrowEl', onTap: e.next },
          {
            name: 'button--fs',
            option: 'fullscreenEl',
            onTap: function () {
              n.isFullscreen() ? n.exit() : n.enter();
            },
          },
          {
            name: 'preloader',
            option: 'preloaderEl',
            onInit: function (e) {
              h = e;
            },
          },
        ];
      (w.init = function () {
        var a;
        t.extend(e.options, C, !0),
          (v = e.options),
          (i = t.getChildByClass(e.scrollWrap, 'pwwp__ui')),
          (d = e.listen)('onVerticalDrag', function (e) {
            x && e < 0.95 ? w.hideControls() : !x && e >= 0.95 && w.showControls();
          }),
          d('onPinchClose', function (e) {
            x && e < 0.9 ? (w.hideControls(), (a = !0)) : a && !x && e > 0.9 && w.showControls();
          }),
          d('zoomGestureEnded', function () {
            (a = !1) && !x && w.showControls();
          }),
          d('beforeChange', w.update),
          d('doubleTap', function (t) {
            var n = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== n
              ? e.zoomTo(n, t, 333)
              : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333);
          }),
          d('preventDragEvent', function (e, t, n) {
            var i = e.target || e.srcElement;
            i &&
              i.getAttribute('class') &&
              e.type.indexOf('mouse') > -1 &&
              (i.getAttribute('class').indexOf('__caption') > 0 ||
                /(SMALL|STRONG|EM)/i.test(i.tagName)) &&
              (n.prevent = !1);
          }),
          d('bindEvents', function () {
            t.bind(i, 'pwwpTap click', E),
              t.bind(e.scrollWrap, 'pwwpTap', w.onGlobalTap),
              e.likelyTouchDevice || t.bind(e.scrollWrap, 'mouseover', w.onMouseOver);
          }),
          d('unbindEvents', function () {
            S || M(),
              y && clearInterval(y),
              t.unbind(document, 'mouseout', z),
              t.unbind(document, 'mousemove', L),
              t.unbind(i, 'pwwpTap click', E),
              t.unbind(e.scrollWrap, 'pwwpTap', w.onGlobalTap),
              t.unbind(e.scrollWrap, 'mouseover', w.onMouseOver),
              n &&
                (t.unbind(document, n.eventK, w.updateFullscreen),
                n.isFullscreen() && ((v.hideAnimationDuration = 0), n.exit()),
                (n = null));
          }),
          d('destroy', function () {
            v.captionEl && (o && i.removeChild(o), t.removeClass(r, 'pwwp__caption--empty')),
              l && (l.children[0].onclick = null),
              t.removeClass(i, 'pwwp__ui--over-close'),
              t.addClass(i, 'pwwp__ui--hidden'),
              w.setIdle(!1);
          }),
          v.showAnimationDuration || t.removeClass(i, 'pwwp__ui--hidden'),
          d('initialZoomIn', function () {
            v.showAnimationDuration && t.removeClass(i, 'pwwp__ui--hidden');
          }),
          d('initialZoomOut', function () {
            t.addClass(i, 'pwwp__ui--hidden');
          }),
          d('parseVerticalMargin', j),
          (function () {
            var e,
              n,
              r,
              o = function (i) {
                if (i)
                  for (var o = i.length, a = 0; a < o; a++) {
                    (e = i[a]), (n = e.className);
                    for (var s = 0; s < N.length; s++)
                      (r = N[s]),
                        n.indexOf('pwwp__' + r.name) > -1 &&
                          (v[r.option]
                            ? (t.removeClass(e, 'pwwp__element--disabled'), r.onInit && r.onInit(e))
                            : t.addClass(e, 'pwwp__element--disabled'));
                  }
              };
            o(i.children);
            var a = t.getChildByClass(i, 'pwwp__top-bar');
            a && o(a.children);
          })(),
          v.shareEl && s && l && (S = !0),
          k(),
          v.timeToIdle &&
            d('mouseUsed', function () {
              t.bind(document, 'mousemove', L),
                t.bind(document, 'mouseout', z),
                (y = setInterval(function () {
                  2 == ++I && w.setIdle(!0);
                }, v.timeToIdle / 2));
            }),
          v.fullscreenEl &&
            !t.features.isOldAndroid &&
            (n || (n = w.getFullscreenAPI()),
            n
              ? (t.bind(document, n.eventK, w.updateFullscreen),
                w.updateFullscreen(),
                t.addClass(e.template, 'pwwp--supports-fs'))
              : t.removeClass(e.template, 'pwwp--supports-fs')),
          v.preloaderEl &&
            (D(!0),
            d('beforeChange', function () {
              clearTimeout(f),
                (f = setTimeout(function () {
                  e.currItem && e.currItem.loading
                    ? (!e.allowProgressiveImg() ||
                        (e.currItem.img && !e.currItem.img.naturalWidth)) &&
                      D(!1)
                    : D(!0);
                }, v.loadingIndicatorDelay));
            }),
            d('imageLoadComplete', function (t, n) {
              e.currItem === n && D(!0);
            }));
      }),
        (w.setIdle = function (e) {
          (u = e), T(i, 'ui--idle', e);
        }),
        (w.update = function () {
          x && e.currItem
            ? (w.updateIndexIndicator(),
              v.captionEl &&
                (v.addCaptionHTMLFn(e.currItem, r), T(r, 'caption--empty', !e.currItem.title)),
              (_ = !0))
            : (_ = !1),
            S || M(),
            k();
        }),
        (w.updateFullscreen = function (i) {
          i &&
            setTimeout(function () {
              e.setScrollOffset(0, t.getScrollY());
            }, 50),
            t[(n.isFullscreen() ? 'add' : 'remove') + 'Class'](e.template, 'pwwp--fs');
        }),
        (w.updateIndexIndicator = function () {
          v.counterEl &&
            (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn());
        }),
        (w.onGlobalTap = function (n) {
          var i = (n = n || window.event).target || n.srcElement;
          if (!g)
            if (n.detail && 'mouse' === n.detail.pointerType) {
              if (A(i)) return void e.close();
              t.hasClass(i, 'pwwp__img') &&
                (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio
                  ? v.clickToCloseNonZoomable && e.close()
                  : e.toggleDesktopZoom(n.detail.releasePoint));
            } else if (
              (v.tapToToggleControls && (x ? w.hideControls() : w.showControls()),
              v.tapToClose && (t.hasClass(i, 'pwwp__img') || A(i)))
            )
              return void e.close();
        }),
        (w.onMouseOver = function (e) {
          var t = (e = e || window.event).target || e.srcElement;
          T(i, 'ui--over-close', A(t));
        }),
        (w.hideControls = function () {
          t.addClass(i, 'pwwp__ui--hidden'), (x = !1);
        }),
        (w.showControls = function () {
          (x = !0), _ || w.update(), t.removeClass(i, 'pwwp__ui--hidden');
        }),
        (w.supportsFullscreen = function () {
          var e = document;
          return !!(
            e.exitFullscreen ||
            e.mozCancelFullScreen ||
            e.webkitExitFullscreen ||
            e.msExitFullscreen
          );
        }),
        (w.getFullscreenAPI = function () {
          var t,
            n = document.documentElement,
            i = 'fullscreenchange';
          return (
            n.requestFullscreen
              ? (t = {
                  enterK: 'requestFullscreen',
                  exitK: 'exitFullscreen',
                  elementK: 'fullscreenElement',
                  eventK: i,
                })
              : n.mozRequestFullScreen
              ? (t = {
                  enterK: 'mozRequestFullScreen',
                  exitK: 'mozCancelFullScreen',
                  elementK: 'mozFullScreenElement',
                  eventK: 'moz' + i,
                })
              : n.webkitRequestFullscreen
              ? (t = {
                  enterK: 'webkitRequestFullscreen',
                  exitK: 'webkitExitFullscreen',
                  elementK: 'webkitFullscreenElement',
                  eventK: 'webkit' + i,
                })
              : n.msRequestFullscreen &&
                (t = {
                  enterK: 'msRequestFullscreen',
                  exitK: 'msExitFullscreen',
                  elementK: 'msFullscreenElement',
                  eventK: 'MSFullscreenChange',
                }),
            t &&
              ((t.enter = function () {
                if (
                  ((c = v.closeOnScroll),
                  (v.closeOnScroll = !1),
                  'webkitRequestFullscreen' !== this.enterK)
                )
                  return e.template[this.enterK]();
                e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
              }),
              (t.exit = function () {
                return (v.closeOnScroll = c), document[this.exitK]();
              }),
              (t.isFullscreen = function () {
                return document[this.elementK];
              })),
            t
          );
        });
    };
  });
  var df = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    hf = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  function pf(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = parseFloat(e);
    return ''.concat(n / t).concat(String(e).replace(String(n), '') || 'px');
  }
  var ff,
    mf,
    vf,
    gf,
    yf,
    bf,
    wf,
    _f,
    xf,
    Sf,
    Cf,
    Ef = at.forwardRef(function (e, t) {
      var n = e.alignContent,
        i = void 0 === n ? 'stretch' : n,
        r = e.alignItems,
        o = void 0 === r ? 'stretch' : r,
        a = e.classes,
        s = e.className,
        l = e.component,
        c = void 0 === l ? 'div' : l,
        u = e.container,
        d = void 0 !== u && u,
        h = e.direction,
        p = void 0 === h ? 'row' : h,
        f = e.item,
        m = void 0 !== f && f,
        v = e.justify,
        g = void 0 === v ? 'flex-start' : v,
        y = e.lg,
        b = void 0 !== y && y,
        w = e.md,
        _ = void 0 !== w && w,
        x = e.sm,
        S = void 0 !== x && x,
        C = e.spacing,
        E = void 0 === C ? 0 : C,
        T = e.wrap,
        k = void 0 === T ? 'wrap' : T,
        O = e.xl,
        M = void 0 !== O && O,
        P = e.xs,
        R = void 0 !== P && P,
        A = e.zeroMinWidth,
        I = void 0 !== A && A,
        L = mt(e, [
          'alignContent',
          'alignItems',
          'classes',
          'className',
          'component',
          'container',
          'direction',
          'item',
          'justify',
          'lg',
          'md',
          'sm',
          'spacing',
          'wrap',
          'xl',
          'xs',
          'zeroMinWidth',
        ]),
        z = ba(
          a.root,
          s,
          d && [a.container, 0 !== E && a['spacing-xs-'.concat(String(E))]],
          m && a.item,
          I && a.zeroMinWidth,
          'row' !== p && a['direction-xs-'.concat(String(p))],
          'wrap' !== k && a['wrap-xs-'.concat(String(k))],
          'stretch' !== o && a['align-items-xs-'.concat(String(o))],
          'stretch' !== i && a['align-content-xs-'.concat(String(i))],
          'flex-start' !== g && a['justify-xs-'.concat(String(g))],
          !1 !== R && a['grid-xs-'.concat(String(R))],
          !1 !== S && a['grid-sm-'.concat(String(S))],
          !1 !== _ && a['grid-md-'.concat(String(_))],
          !1 !== b && a['grid-lg-'.concat(String(b))],
          !1 !== M && a['grid-xl-'.concat(String(M))]
        );
      return at.createElement(c, gt({ className: z, ref: t }, L));
    }),
    Tf = Da(
      function (e) {
        return gt(
          {
            root: {},
            container: {
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
            },
            item: { boxSizing: 'border-box', margin: '0' },
            zeroMinWidth: { minWidth: 0 },
            'direction-xs-column': { flexDirection: 'column' },
            'direction-xs-column-reverse': { flexDirection: 'column-reverse' },
            'direction-xs-row-reverse': { flexDirection: 'row-reverse' },
            'wrap-xs-nowrap': { flexWrap: 'nowrap' },
            'wrap-xs-wrap-reverse': { flexWrap: 'wrap-reverse' },
            'align-items-xs-center': { alignItems: 'center' },
            'align-items-xs-flex-start': { alignItems: 'flex-start' },
            'align-items-xs-flex-end': { alignItems: 'flex-end' },
            'align-items-xs-baseline': { alignItems: 'baseline' },
            'align-content-xs-center': { alignContent: 'center' },
            'align-content-xs-flex-start': { alignContent: 'flex-start' },
            'align-content-xs-flex-end': { alignContent: 'flex-end' },
            'align-content-xs-space-between': { alignContent: 'space-between' },
            'align-content-xs-space-around': { alignContent: 'space-around' },
            'justify-xs-center': { justifyContent: 'center' },
            'justify-xs-flex-end': { justifyContent: 'flex-end' },
            'justify-xs-space-between': { justifyContent: 'space-between' },
            'justify-xs-space-around': { justifyContent: 'space-around' },
            'justify-xs-space-evenly': { justifyContent: 'space-evenly' },
          },
          (function (e, t) {
            var n = {};
            return (
              df.forEach(function (i) {
                var r = e.spacing(i);
                0 !== r &&
                  (n['spacing-'.concat(t, '-').concat(i)] = {
                    margin: '-'.concat(pf(r, 2)),
                    width: 'calc(100% + '.concat(pf(r), ')'),
                    '& > $item': { padding: pf(r, 2) },
                  });
              }),
              n
            );
          })(e, 'xs'),
          {},
          e.breakpoints.keys.reduce(function (t, n) {
            return (
              (function (e, t, n) {
                var i = {};
                hf.forEach(function (e) {
                  var t = 'grid-'.concat(n, '-').concat(e);
                  if (!0 !== e)
                    if ('auto' !== e) {
                      var r = ''.concat(Math.round((e / 12) * 1e8) / 1e6, '%');
                      i[t] = { flexBasis: r, flexGrow: 0, maxWidth: r };
                    } else i[t] = { flexBasis: 'auto', flexGrow: 0, maxWidth: 'none' };
                  else i[t] = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' };
                }),
                  'xs' === n ? gt(e, i) : (e[t.breakpoints.up(n)] = i);
              })(t, e, n),
              t
            );
          }, {})
        );
      },
      { name: 'PwzrGrid' }
    )(Ef),
    kf = !1;
  function Of(e) {
    'string' != typeof e && (e = String(e));
    for (var t = '', n = 0; n < e.length; n++) {
      var i = e[n];
      switch (i) {
        case '<':
          t += '&lt;';
          break;
        case '>':
          t += '&gt;';
          break;
        case '"':
          t += '&quot;';
          break;
        case '&':
          t += '&amp;';
          break;
        default:
          t += i;
      }
    }
    return t;
  }
  function Mf(e) {
    var t = '';
    for (var n in e) {
      var i = e[n];
      null != i &&
        (t && (t += ' '),
        (t += '-' == n[0] ? n : yf[n] || (yf[n] = n.replace(/([A-Z])/g, '-$1').toLowerCase())),
        (t += ': '),
        (t += i),
        'number' == typeof i && !1 === mf.test(n) && (t += 'px'),
        (t += ';'));
    }
    return t || void 0;
  }
  function Pf(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Rf(e, t) {
    return Array.isArray(t) ? t.reduce(Rf, e) : null != t && !1 !== t && e.push(t), e;
  }
  function Af(e, t, n) {
    var i = (function e(t, n, i, r, a, s) {
      if (null == t || 'boolean' == typeof t) return '';
      Array.isArray(t) && (t = y(_, null, t));
      var l = t.type,
        c = t.props,
        u = !1;
      n = n || {};
      var d,
        h = (i = i || {}).pretty,
        p = h && 'string' == typeof h ? h : '\t';
      if ('object' != typeof t && !l) return Of(t);
      if ('function' == typeof l) {
        if (((u = !0), !i.shallow || (!r && !1 !== i.renderRootComponent))) {
          if (l === _) {
            var f = '',
              m = [];
            Rf(m, t.props.children);
            for (var v = 0; v < m.length; v++)
              f += (v > 0 && h ? '\n' : '') + e(m[v], n, i, !1 !== i.shallowHighOrder, a, s);
            return f;
          }
          var g,
            b = (t.__c = {
              __v: t,
              context: n,
              props: t.props,
              setState: xf,
              forceUpdate: xf,
              __h: [],
            });
          if (
            (o.__b && o.__b(t),
            o.__r && o.__r(t),
            l.prototype && 'function' == typeof l.prototype.render)
          ) {
            var w = l.contextType,
              x = w && n[w.__c],
              S = null != w ? (x ? x.props.value : w.__) : n;
            ((b = t.__c = new l(c, S)).__v = t),
              (b._dirty = b.__d = !0),
              (b.props = c),
              null == b.state && (b.state = {}),
              null == b._nextState && null == b.__s && (b._nextState = b.__s = b.state),
              (b.context = S),
              l.getDerivedStateFromProps
                ? (b.state = Pf(Pf({}, b.state), l.getDerivedStateFromProps(b.props, b.state)))
                : b.componentWillMount &&
                  (b.componentWillMount(),
                  (b.state =
                    b._nextState !== b.state ? b._nextState : b.__s !== b.state ? b.__s : b.state)),
              (g = b.render(b.props, b.state, b.context));
          } else {
            var C = l.contextType,
              E = C && n[C.__c],
              T = null != C ? (E ? E.props.value : C.__) : n;
            g = l.call(t.__c, c, T);
          }
          return (
            b.getChildContext && (n = Pf(Pf({}, n), b.getChildContext())),
            o.diffed && o.diffed(t),
            e(g, n, i, !1 !== i.shallowHighOrder, a, s)
          );
        }
        l =
          (d = l).displayName ||
          (d !== Function && d.name) ||
          (function (e) {
            var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || '')[1];
            if (!t) {
              for (var n = -1, i = wf.length; i--; )
                if (wf[i] === e) {
                  n = i;
                  break;
                }
              n < 0 && (n = wf.push(e) - 1), (t = 'UnnamedComponent' + n);
            }
            return t;
          })(d);
      }
      var k,
        O,
        M = '';
      if (c) {
        var P = Object.keys(c);
        i && !0 === i.sortAttributes && P.sort();
        for (var R = 0; R < P.length; R++) {
          var A = P[R],
            I = c[A];
          if ('children' !== A) {
            if (
              !A.match(/[\s\n\\/='"\0<>]/) &&
              ((i && i.allAttributes) ||
                ('key' !== A &&
                  'ref' !== A &&
                  '__self' !== A &&
                  '__source' !== A &&
                  'defaultValue' !== A))
            ) {
              if ('className' === A) {
                if (c.class) continue;
                A = 'class';
              } else
                a && A.match(/^xlink:?./) && (A = A.toLowerCase().replace(/^xlink:?/, 'xlink:'));
              if ('htmlFor' === A) {
                if (c.for) continue;
                A = 'for';
              }
              'style' === A && I && 'object' == typeof I && (I = Mf(I)),
                'a' === A[0] && 'r' === A[1] && 'boolean' == typeof I && (I = String(I));
              var L = i.attributeHook && i.attributeHook(A, I, n, i, u);
              if (L || '' === L) M += L;
              else if ('dangerouslySetInnerHTML' === A) O = I && I.__html;
              else if ('textarea' === l && 'value' === A) k = I;
              else if ((I || 0 === I || '' === I) && 'function' != typeof I) {
                if (!((!0 !== I && '' !== I) || ((I = A), i && i.xml))) {
                  M += ' ' + A;
                  continue;
                }
                if ('value' === A) {
                  if ('select' === l) {
                    s = I;
                    continue;
                  }
                  'option' === l && s == I && (M += ' selected');
                }
                M += ' ' + A + '="' + Of(I) + '"';
              }
            }
          } else k = I;
        }
      }
      if (h) {
        var z = M.replace(/^\n\s*/, ' ');
        z === M || ~z.indexOf('\n') ? h && ~M.indexOf('\n') && (M += '\n') : (M = z);
      }
      if (((M = '<' + l + M + '>'), String(l).match(/[\s\n\\/='"\0<>]/)))
        throw new Error(l + ' is not a valid HTML tag name in ' + M);
      var D,
        j = String(l).match(_f) || (i.voidElements && String(l).match(i.voidElements)),
        N = [];
      if (O) h && gf(O) && (O = '\n' + p + vf(O, p)), (M += O);
      else if (null != k && Rf((D = []), k).length) {
        for (var F = h && ~M.indexOf('\n'), W = !1, B = 0; B < D.length; B++) {
          var H = D[B];
          if (null != H && !1 !== H) {
            var q = e(H, n, i, !0, 'svg' === l || ('foreignObject' !== l && a), s);
            if ((h && !F && gf(q) && (F = !0), q))
              if (h) {
                var V = q.length > 0 && '<' != q[0];
                W && V ? (N[N.length - 1] += q) : N.push(q), (W = V);
              } else N.push(q);
          }
        }
        if (h && F) for (var U = N.length; U--; ) N[U] = '\n' + p + vf(N[U], p);
      }
      if (N.length || O) M += N.join('');
      else if (i && i.xml) return M.substring(0, M.length - 1) + ' />';
      return (
        !j || D || O
          ? (h && ~M.indexOf('\n') && (M += '\n'), (M += '</' + l + '>'))
          : (M = M.replace(/>$/, ' />')),
        M
      );
    })(e, t, n);
    return o.__c && o.__c(e, Cf), i;
  }
  var If,
    Lf,
    zf = {};
  try {
    kf ||
      ((kf = !0),
      t((ff = {})),
      V(),
      (mf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i),
      (vf = function (e, t) {
        return String(e).replace(/(\n+)/g, '$1' + (t || '\t'));
      }),
      (gf = function (e, t, n) {
        return (
          String(e).length > (t || 40) ||
          (!n && -1 !== String(e).indexOf('\n')) ||
          -1 !== String(e).indexOf('<')
        );
      }),
      (yf = {}),
      (bf = { shallow: !0 }),
      (wf = []),
      (_f = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/),
      (xf = function () {}),
      (Af.render = Af),
      (Sf = function (e, t) {
        return Af(e, t, bf);
      }),
      (Cf = []),
      (ff.shallowRender = Sf),
      (ff.renderToString = Af),
      (ff.renderToStaticMarkup = Af),
      (ff.render = Af),
      (Af.shallowRender = Sf),
      (ff.default = Af)),
      (If = (Lf = ff).default || Lf);
  } catch (e) {
    throw Error('renderToString() error: missing "preact-render-to-string" dependency.');
  }
  zf = { renderToString: If, renderToStaticMarkup: If };
  const Df = ({ scale: e, mediaScale: t }) => {
    const n = ((e) => {
        const t = window.innerHeight / window.innerWidth,
          n = window.innerWidth * e;
        return { width: n, height: n * t };
      })(e),
      i = Math.min(n.width, n.height / t);
    return { width: i, height: i * t };
  };
  function jf({ maxWidthParam: e, zoom: t, scale: n }) {
    const i = [5760];
    'number' == typeof e && i.push(e);
    const r = Math.min(...i);
    for (let e = 100; e > 0; e -= 1) {
      const { width: i, height: o } = Df({ scale: t * (e / 100), mediaScale: n });
      if (i <= r) return { width: i, height: o };
    }
    return { width: r, height: r * n };
  }
  var Nf = e(hd);
  function Ff(e, t, n) {
    const {
        type: i,
        sources: r,
        alt: o,
        scale: a,
        scaleSources: s,
        transformedSrc: l,
        rioSettings: c,
        ignoreScale: u = !1,
      } = e,
      d = (function ({ scaleSources: e, scaleParam: t, ignoreScale: n }) {
        if (n) return null;
        const i = e || t;
        return i ? parseFloat(i) / 100 : null;
      })({ scaleSources: s, scaleParam: a, ignoreScale: u });
    if ('image' === i && null !== d) {
      const i = jf({ maxWidthParam: e.width, zoom: Math.max(n, Hp()), scale: d }),
        r = (function ({ imageSizeScaledWithDPP: e, imageSizeScaled: t }) {
          return e.width > 0 && e.width > t.width ? t.width / e.width : 1;
        })({
          imageSizeScaled: jf({ maxWidthParam: e.width, zoom: n, scale: d }),
          imageSizeScaledWithDPP: i,
        });
      return { src: l(i.width), msrc: t, w: i.width, h: i.height, maxZoom: r };
    }
    const { width: h, height: p } = Df({ scale: 0.8, mediaScale: null === d ? 1 : d });
    if ('video' === i) {
      const e = 'video-'.concat(Nf());
      return {
        rioId: e,
        html: zf.renderToString(
          at.createElement(
            Tf,
            {
              container: !0,
              alignItems: 'center',
              justify: 'center',
              style: { width: '100%', height: '100%' },
            },
            at.createElement(
              Tf,
              { item: !0, style: { width: h, height: p } },
              at.createElement('iframe', {
                id: e,
                frameBorder: '0',
                style: { width: '100%', height: '100%' },
                allow:
                  'fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                allowFullScreen: 'allowfullscreen',
                src: 'https://pwzcdn.com/rio-store/prod/video-player/index.html?payload='.concat(
                  encodeURIComponent(JSON.stringify({ ...c, sources: r, autoPlay: !1, poster: t }))
                ),
                title: o,
              })
            )
          )
        ),
      };
    }
    if ('external_video' === i) {
      const e = 'external-video-'.concat(Nf());
      return {
        rioId: e,
        html: zf.renderToString(
          at.createElement(
            Tf,
            {
              container: !0,
              alignItems: 'center',
              justify: 'center',
              style: { width: '100%', height: '100%' },
            },
            at.createElement(
              Tf,
              { item: !0, style: { width: h, height: p } },
              at.createElement('iframe', {
                id: e,
                frameBorder: '0',
                style: { width: '100%', height: '100%' },
                allow:
                  'fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                allowFullScreen: 'allowfullscreen',
                src: 'https://pwzcdn.com/rio-store/prod/yt-player/index.html?payload='.concat(
                  encodeURIComponent(
                    JSON.stringify({
                      source: r[0],
                      muted: c.muted,
                      controls: c.controls,
                      autoPlay: !1,
                      title: o || void 0,
                    })
                  )
                ),
                title: o,
              })
            )
          )
        ),
      };
    }
    if ('model' === i) {
      const e = t;
      return {
        html: zf.renderToString(
          at.createElement(
            Tf,
            {
              container: !0,
              alignItems: 'center',
              justify: 'center',
              style: { width: '100%', height: '100%' },
            },
            at.createElement(
              Tf,
              { item: !0, style: { width: h, height: p } },
              at.createElement('iframe', {
                style: { width: '100%', height: '100%' },
                frameBorder: '0',
                allow: 'fullscreen; accelerometer; gyroscope',
                allowFullScreen: 'allowfullscreen',
                src: 'https://pwzcdn.com/rio-store/prod/model-viewer/index.html?src='
                  .concat(encodeURIComponent(r[0]))
                  .concat(o ? '&alt='.concat(encodeURIComponent(o)) : '')
                  .concat(e ? '&poster='.concat(encodeURIComponent(e)) : '')
                  .concat(c.autoRotate ? '&autorotate=true' : ''),
                title: o,
              })
            )
          )
        ),
      };
    }
    return {};
  }
  var Wf = e(cf),
    Bf = e(uf),
    Hf = (e, t, n, i) => {
      const r = (e, r) => {
          const o = document.querySelectorAll('.pwwp')[0],
            a = ((e) => {
              const t = e.childNodes,
                n = [];
              for (let e = 0; e < t.length; e += 1) {
                const i = t[e];
                if (1 !== i.nodeType) {
                  n.push(null);
                  continue;
                }
                const r = i.children[0];
                'IMG' === r.tagName
                  ? n.push(r.getAttribute('src'))
                  : ('DIV' === r.tagName && 'VIDEO' === r.getAttribute('data-tagname')) ||
                    ('DIV' === r.tagName && 'MODEL' === r.getAttribute('data-tagname'))
                  ? n.push(r.getAttribute('data-poster'))
                  : n.push(null);
              }
              return n;
            })(r),
            s = n.map((e, t) => Ff(e, a[t], i)),
            l = (function ({ media: e, items: t }) {
              const n = [],
                i = (e) => {
                  try {
                    e.destroy();
                  } catch {}
                },
                r = new MutationObserver(() => {
                  for (let e = 0; e < t.length; e += 1)
                    if (n[e]) {
                      const [t, r] = n[e];
                      document.body.contains(r) || (i(t), delete n[e]);
                    }
                });
              return (
                r.observe(document.body, { childList: !0, subtree: !0 }),
                {
                  initVideo: (i) => {
                    if (!n[i]) {
                      const r = e[i],
                        { rioId: o } = t[i];
                      if ('external_video' === r.type && 'string' == typeof o) {
                        const e = document.querySelector('#'.concat(o)),
                          t = (() => {
                            const t = e.contentWindow;
                            return {
                              play: () => {
                                t.postMessage({ rioOrigin: 'video-player', play: !0 }, '*');
                              },
                              pause: () => {
                                t.postMessage({ rioOrigin: 'video-player', pause: !0 }, '*');
                              },
                              destroy: () => {
                                t.postMessage({ rioOrigin: 'video-player', destroy: !0 }, '*');
                              },
                            };
                          })();
                        n[i] = [t, e];
                      }
                      if ('video' === r.type && 'string' == typeof o) {
                        const e = document.querySelector('#'.concat(o)),
                          t = (() => {
                            const t = e.contentWindow;
                            return {
                              play: () => {
                                t.postMessage({ play: !0 }, '*');
                              },
                              pause: () => {
                                t.postMessage({ pause: !0 }, '*');
                              },
                              destroy: () => {
                                t.postMessage({ destroy: !0 }, '*');
                              },
                            };
                          })();
                        n[i] = [t, e];
                      }
                    }
                  },
                  playVideo: (i) => {
                    for (let e = 0; e < t.length; e += 1)
                      if (e !== i && n[e]) {
                        const [t] = n[e];
                        try {
                          t.pause();
                        } catch {}
                      }
                    if (n[i] && e[i].rioSettings.autoPlay) {
                      const [e] = n[i];
                      try {
                        e.play();
                      } catch {}
                    }
                  },
                  destroyVideos: () => {
                    r.disconnect();
                    for (let e = 0; e < t.length; e += 1)
                      if (n[e]) {
                        const [t] = n[e];
                        i(t), delete n[e];
                      }
                  },
                }
              );
            })({ media: n, items: s }),
            c = {
              closeEl: !0,
              captionEl: !1,
              fullscreenEl: !0,
              zoomEl: !0,
              shareEl: !1,
              counterEl: !1,
              arrowEl: !0,
              preloaderEl: !0,
              history: !1,
              galleryUID: r.getAttribute('data-pwwp-uid'),
              index: e,
              getDoubleTapZoom: (e, t) => {
                const n = 'number' == typeof t.maxZoom ? t.maxZoom : 1;
                return e || t.initialZoomLevel < 0.7 ? n : 1.5 * n;
              },
            },
            u = new Wf(o, Bf, s, c);
          u.init(),
            (window.productWizRioLightboxOpen = !0),
            u.listen('unbindEvents', () => {
              const e = u.getCurrentIndex(),
                n = t();
              n && n.slideTo(e, 0), l.destroyVideos(), (window.productWizRioLightboxOpen = !1);
            }),
            u.listen('afterChange', () => {
              const e = u.getCurrentIndex();
              l.initVideo(e), l.playVideo(e);
            });
        },
        o = document.querySelector(e);
      o.setAttribute('data-pwwp-uid', 1),
        (o.onclick = (e) => {
          const t = (e, n) => e && (n(e) ? e : t(e.parentNode, n)),
            i = e || window.event;
          i.preventDefault ? i.preventDefault() : (i.returnValue = !1);
          const o = i.target || i.srcElement,
            a = t(o, (e) => e.tagName && 'div' === e.tagName.toLowerCase());
          if (!a) return;
          if (!a.id.startsWith('pwzrswiper-slide')) return;
          const s = a.parentNode,
            { childNodes: l } = a.parentNode;
          let c,
            u = 0;
          for (let e = 0; e < l.length; e += 1)
            if (1 === l[e].nodeType) {
              if (l[e] === a) {
                c = u;
                break;
              }
              u += 1;
            }
          return c >= 0 && 'image' === n[c].type && r(c, s), !1;
        });
    };
  function qf({ getSwiper: e, media: t, lightBoxZoom: n }) {
    return (
      re(() => {
        Hf('#pwzrswiper-wrapper', e, t, n);
      }, [e, n, t]),
      at.createElement(
        'div',
        { className: 'rio-photoswipe', style: { position: 'absolute', zIndex: 2147483647 } },
        at.createElement(
          'div',
          { className: 'pwwp', tabIndex: '-1', role: 'dialog', 'aria-hidden': 'true' },
          at.createElement('div', { className: 'pwwp__bg' }),
          at.createElement(
            'div',
            { className: 'pwwp__scroll-wrap' },
            at.createElement(
              'div',
              { className: 'pwwp__container' },
              at.createElement('div', { className: 'pwwp__item' }),
              at.createElement('div', { className: 'pwwp__item' }),
              at.createElement('div', { className: 'pwwp__item' })
            ),
            at.createElement(
              'div',
              { className: 'pwwp__ui pwwp__ui--hidden' },
              at.createElement(
                'div',
                { className: 'pwwp__top-bar' },
                at.createElement('div', { className: 'pwwp__counter' }),
                at.createElement('button', {
                  className: 'pwwp__button pwwp__button--close',
                  title: 'Close (Esc)',
                }),
                at.createElement('button', {
                  className: 'pwwp__button pwwp__button--share',
                  title: 'Share',
                }),
                at.createElement('button', {
                  className: 'pwwp__button pwwp__button--fs',
                  title: 'Toggle fullscreen',
                }),
                at.createElement('button', {
                  className: 'pwwp__button pwwp__button--zoom',
                  title: 'Zoom in/out',
                }),
                at.createElement(
                  'div',
                  { className: 'pwwp__preloader' },
                  at.createElement(
                    'div',
                    { className: 'pwwp__preloader__icn' },
                    at.createElement(
                      'div',
                      { className: 'pwwp__preloader__cut' },
                      at.createElement('div', { className: 'pwwp__preloader__donut' })
                    )
                  )
                )
              ),
              at.createElement(
                'div',
                { className: 'pwwp__share-modal pwwp__share-modal--hidden pwwp__single-tap' },
                at.createElement('div', { className: 'pwwp__share-tooltip' })
              ),
              at.createElement('button', {
                className: 'pwwp__button pwwp__button--arrow--left',
                title: 'Previous (arrow left)',
              }),
              at.createElement('button', {
                className: 'pwwp__button pwwp__button--arrow--right',
                title: 'Next (arrow right)',
              }),
              at.createElement(
                'div',
                { className: 'pwwp__caption' },
                at.createElement('div', { className: 'pwwp__caption__center' })
              )
            )
          )
        )
      )
    );
  }
  qf.propTypes = {
    getSwiper: Rt.func.isRequired,
    media: Rt.arrayOf(af).isRequired,
    lightBoxZoom: Rt.number.isRequired,
  };
  const Vf = {
    normal:
      '\n      .pwzrswiper-pagination-bullet {\n        margin: 0 4px;\n      }\n\n      .pwzrswiper-pagination-bullet-active {\n        color: #fff;\n        background: rgba(0, 0, 0, 0.75);\n      }\n    ',
    clickable:
      '\n      .pwzrswiper-pagination-bullet {\n        outline: none;\n        width: 20px;\n        height: 20px;\n        text-align: center;\n        line-height: 20px;\n        font-size: 12px;\n        color: #000;\n        opacity: 1;\n        background: rgba(0, 0, 0, 0.2);\n        margin: 0 4px;\n        user-select: none;\n      }\n  \n      .pwzrswiper-pagination-bullet-active {\n        color: #fff;\n        background: rgba(0, 0, 0, 0.75);\n      }\n    ',
  };
  let Uf = null;
  function $f({ clickablePagination: e }) {
    return at.createElement(
      at.Fragment,
      null,
      at.createElement('style', null, Vf[e ? 'clickable' : 'normal']),
      at.createElement(
        'div',
        {
          id: 'pwzr-pagination-container',
          style: { display: 'flex', justifyContent: 'center', minHeight: Uf || 'initial' },
        },
        at.createElement(Tu, {
          handleHeight: !0,
          onResize: (e, t) => {
            Uf = t;
            const n = document.querySelector('#pwzr-pagination-container');
            n && (n.style.minHeight = 'initial');
          },
        }),
        at.createElement('div', {
          style: { position: 'static', marginTop: e ? 10 : 5, marginBottom: e ? 5 : 2 },
          className: ba('pwzrswiper-pagination'),
        })
      )
    );
  }
  ($f.defaultProps = { clickablePagination: !1 }),
    ($f.propTypes = { clickablePagination: Rt.bool }),
    mh.use([yh, _h, Ch]);
  var Gf = e(Wa),
    Zf = e(Gh);
  class Yf extends at.Component {
    static getPlaceholderImageWidth(e) {
      return Eh('xl', e) ? 900 : Eh('lg', e) ? 720 : Eh('md', e) ? 540 : 360;
    }
    static generatePlaceholderImage(e, t) {
      const n = Yf.getPlaceholderImageWidth(t);
      return e.transformedSrc(n);
    }
    static generateResponsiveImage(e, t) {
      return e.transformedSrc(t);
    }
    constructor(e) {
      super(e),
        Gf(this, 'mountPhotoSwipe', () => {
          const {
            media: e,
            config: { lightBox: t, lightBoxZoom: n },
          } = this.props;
          if (t) {
            this.photoSwipeId = 'photo-swipe-'.concat(Nf());
            const t = document.createElement('div');
            (t.id = this.photoSwipeId),
              document.body.appendChild(t),
              Be(
                at.createElement(qf, { getSwiper: () => this.swiper, media: e, lightBoxZoom: n }),
                t
              );
          }
        }),
        Gf(this, 'destroyPhotoSwipe', () => {
          if (this.photoSwipeId) {
            const e = document.querySelector('#'.concat(this.photoSwipeId));
            e.parentNode.removeChild(e);
          }
        }),
        Gf(this, 'initVideoPlayers', () => {
          const { media: e } = this.props;
          for (let t = 0; t < e.length; t += 1) {
            const n = e[t];
            'external_video' === n.type &&
              (this.videoPlayers[t] = (() => {
                const e = document.querySelector('#pwzrswiper-img-frame-'.concat(t)).contentWindow;
                return {
                  play: () => {
                    e.postMessage({ rioOrigin: 'video-player', play: !0 }, '*');
                  },
                  pause: () => {
                    e.postMessage({ rioOrigin: 'video-player', pause: !0 }, '*');
                  },
                  destroy: () => {
                    e.postMessage({ rioOrigin: 'video-player', destroy: !0 }, '*');
                  },
                };
              })()),
              'video' === n.type &&
                (this.videoPlayers[t] = (() => {
                  const e = document.querySelector(
                    '#pwzrswiper-img-frame-'.concat(t)
                  ).contentWindow;
                  return {
                    play: () => {
                      e.postMessage({ play: !0 }, '*');
                    },
                    pause: () => {
                      e.postMessage({ pause: !0 }, '*');
                    },
                    destroy: () => {
                      e.postMessage({ destroy: !0 }, '*');
                    },
                  };
                })());
          }
        }),
        Gf(this, 'destroyVideoPlayers', () => {
          const { media: e } = this.props;
          for (let t = 0; t < e.length; t += 1)
            this.videoPlayers[t] && this.videoPlayers[t].destroy();
        }),
        Gf(this, 'mountVideos', () => {
          (this.videoPlayers = []), this.initVideoPlayers();
        }),
        Gf(this, 'destroyVideos', () => {
          this.destroyVideoPlayers(), delete this.videoPlayers;
        }),
        Gf(this, 'playVideo', () => {
          if (window.productWizRioLightboxOpen) return;
          const { media: e } = this.props;
          for (let t = 0; t < e.length; t += 1)
            t !== this.selected && this.videoPlayers[t] && this.videoPlayers[t].pause();
          this.videoPlayers[this.selected] &&
            e[this.selected].rioSettings.autoPlay &&
            this.videoPlayers[this.selected].play();
        }),
        Gf(this, 'mountSwiper', () => {
          const {
            onSlideChange: e,
            config: {
              pagination: t,
              clickablePagination: n,
              navigation: i,
              swipe: r,
              keyboard: o,
              maxHeight: a,
            },
          } = this.props;
          (this.swiper = new mh('.pwzrswiper-container', {
            init: !1,
            initialSlide: this.selected,
            autoHeight: !0,
            allowTouchMove: r,
            preloadImages: !1,
            simulateTouch: !1,
            lazy: !0,
            keyboard: { enabled: 'boolean' != typeof o || o, onlyInViewport: !1 },
            pagination: !!t && {
              el: '.pwzrswiper-pagination',
              ...(n
                ? {
                    clickable: !0,
                    renderBullet: (e, t) =>
                      '<span tabindex="-1" class="'.concat(t, '">').concat(e + 1, '</span>'),
                  }
                : { clickable: !1 }),
            },
            navigation: !!i && {
              nextEl: '.pwzrswiper-button-next',
              prevEl: '.pwzrswiper-button-prev',
            },
          })),
            this.swiper.on('slideChange', () => {
              (this.selected = this.swiper.activeIndex),
                this.updateSwiperContainerWidth(),
                e(this.selected),
                this.initOrReinitDriftIfNeeded(),
                this.playVideo();
            }),
            this.swiper.on('slideChangeTransitionStart', () => {
              'string' == typeof a && this.swiper.update();
            });
        }),
        Gf(this, 'getSwiperContainerWrapperWidth', () => {
          const e = document.querySelector('#pwzrswiper-container-wrapper');
          return e && 'number' == typeof e.clientWidth && e.clientWidth > 0 ? e.clientWidth : null;
        }),
        Gf(this, 'getMaxHeightRatio', (e) =>
          'width' === e || 'square' === e ? 1 : 'short' === e ? 3 / 4 : null
        ),
        Gf(this, 'getSwiperContainerMaxWidth', () => {
          const {
            media: e,
            config: { maxHeight: t },
          } = this.props;
          if ('string' == typeof t) {
            const n = parseFloat(this.getScale(e[this.selected]));
            if (Number.isFinite(n)) {
              const e = this.getMaxHeightRatio(t);
              if ('number' == typeof e) {
                const t = (1e4 * e) / n;
                if (Number.isFinite(t)) {
                  const e = t.toFixed(3);
                  if (e < 100) {
                    const t = this.getSwiperContainerWrapperWidth();
                    return 'number' == typeof t
                      ? ''.concat(Math.floor(t * (e / 100)), 'px')
                      : ''.concat(e, '%');
                  }
                }
              }
              if (t.endsWith('px')) {
                const e = parseFloat(t);
                if (Number.isFinite(e))
                  return ''.concat(Math.floor((100 * e) / Math.ceil(n)), 'px');
              }
            }
          }
          return '100%';
        }),
        Gf(this, 'updateSwiperContainerWidth', () => {
          if (this.swiper) {
            const e = document.querySelector('.pwzrswiper-container');
            if (e) {
              const t = this.getSwiperContainerWidth();
              t !== this.swiperContainerWidth &&
                ((e.style.width = t), (this.swiperContainerWidth = t));
            }
          }
        }),
        Gf(this, 'getSwiperContainerWidth', () => {
          const {
              config: { navigation: e },
              media: t,
            } = this.props,
            n = e && t.length > 1 ? ' - 20px - (38px * 2)' : '';
          return 'min(calc(100%'.concat(n, '), ').concat(this.getSwiperContainerMaxWidth(), ')');
        }),
        Gf(this, 'getInitialSwiperContainerWidth', () => {
          const e = this.getSwiperContainerWidth();
          return (this.swiperContainerWidth = e), e;
        }),
        Gf(this, 'destroySwiper', () => {
          if (this.swiper)
            try {
              this.swiper.destroy();
            } catch {}
          delete this.swiper;
        }),
        Gf(this, 'initOrReinitDriftIfNeeded', () => {
          const {
            config: { magnify: e },
            media: t,
          } = this.props;
          if (!e) return;
          if ('image' !== t[this.selected].type) return;
          this.destroyDrift();
          const n = document.querySelector('#pwzrswiper-img-'.concat(this.selected)),
            i = document.querySelector('#pwzrswiper-slide-'.concat(this.selected));
          this.drift = new $h(n, {
            inlineContainer: i,
            inlinePane: !0,
            containInline: !0,
            injectBaseStyles: !1,
            handleTouch: !0,
            zoomFactor: this.getMagnifyZoom(),
          });
        }),
        Gf(this, 'destroyDrift', () => {
          this.drift && this.drift.destroy(), delete this.drift;
        }),
        Gf(this, 'updateResponsiveImages', () => {
          const { media: e } = this.props;
          for (let t = 0; t < e.length; t += 1) {
            const n = e[t],
              i = document.querySelector('#pwzrswiper-img-'.concat(t)),
              r = Yf.generateResponsiveImage(n, this.responsiveImageWidth),
              o = Yf.generateResponsiveImage(
                n,
                Bp(this.containerWidth * Math.max(Hp(), this.getMagnifyZoom()))
              );
            'video' === n.type
              ? i.setAttribute('poster', r)
              : 'image' === n.type &&
                ('string' == typeof i.className &&
                  (i.className = i.className.replace('pwzrswiper-lazy-loaded', '')),
                i.setAttribute(this.swiper ? 'data-src' : 'src', r),
                i.setAttribute('data-zoom', o));
          }
        }),
        Gf(this, 'getMagnifyZoom', () => {
          const {
            config: { magnify: e },
          } = this.props;
          return (e && e.zoom) || 3;
        }),
        Gf(this, 'getScale', (e) => e.scaleSources || e.scale),
        Gf(this, 'updateScaling', (e) => {
          for (let t = 0; t < e.length; t += 1) {
            const n = e[t],
              i = document.querySelector('#pwzrswiper-slide-'.concat(t)),
              r = this.getScale(n);
            i.style.paddingBottom = r;
          }
        }),
        (this.selected = e.selected);
    }
    componentDidMount() {
      const {
        config: { vertical: e },
      } = this.props;
      e || this.mountSwiper(),
        this.mountPhotoSwipe(),
        this.initOrReinitDriftIfNeeded(),
        this.mountVideos();
    }
    shouldComponentUpdate(e) {
      const { selected: t } = e;
      if (this.selected !== t)
        if (this.swiper) this.swiper.slideTo(t);
        else {
          this.selected = t;
          const e = document.querySelector('#pwzrswiper-slide-'.concat(this.selected));
          e && Zf(e, { time: 300 });
        }
      return !1;
    }
    componentWillUnmount() {
      this.destroyVideos(), this.destroyDrift(), this.destroySwiper(), this.destroyPhotoSwipe();
    }
    render() {
      const {
          media: e,
          classes: t,
          width: n,
          children: i,
          config: {
            pagination: r,
            clickablePagination: o,
            navigation: a,
            magnify: s,
            lightBox: l,
            vertical: c,
            verticalSpacing: u,
          },
        } = this.props,
        d = c ? { display: 'flex', flexDirection: 'column' } : {},
        h = c
          ? {}
          : {
              width: this.getInitialSwiperContainerWidth(),
              ...(s
                ? {
                    [s.width && 'full' !== s.width && '--magnify-width']: s.width,
                    [s.height && 'full' !== s.height && '--magnify-height']: s.height,
                  }
                : {}),
            };
      return at.createElement(
        'div',
        { id: 'pwzrswiper-container-wrapper' },
        !c &&
          at.createElement(Tu, {
            handleWidth: !0,
            skipOnMount: !0,
            onResize: () => {
              this.updateSwiperContainerWidth();
            },
          }),
        at.createElement(
          'div',
          { style: { position: 'relative' } },
          at.createElement(
            'div',
            {
              className: ba('pwzrswiper-container', t.container, c ? null : t.containerHidden),
              style: h,
            },
            i,
            at.createElement(Tu, {
              handleWidth: !0,
              handleHeight: !0,
              onResize: (i, r) => {
                const o = () => {
                  this.containerWidth = i;
                  const e = Bp(i * Hp());
                  this.responsiveImageWidth !== e &&
                    ((this.responsiveImageWidth = Math.max(e, Yf.getPlaceholderImageWidth(n))),
                    this.updateResponsiveImages());
                };
                if (!c && (this.swiper || this.mountSwiper(), !this.swiper.initialized)) {
                  const n = document.querySelector('.pwzrswiper-container');
                  (n.className = n.className.replace(t.containerHidden, t.containerVisible)),
                    o(),
                    this.swiper.init(),
                    this.updateScaling(e),
                    this.updateSwiperContainerWidth();
                }
                if ((o(), this.swiper && this.swiper.update(), s)) {
                  const { style: e } = document.querySelector('.pwzrswiper-container');
                  'full' === s.width &&
                    (e.setProperty('--magnify-width', ''.concat(i, 'px')),
                    e.setProperty('--magnify-width-full', 'yes')),
                    'full' === s.height &&
                      (e.setProperty('--magnify-height', ''.concat(r, 'px')),
                      e.setProperty('--magnify-height-full', 'yes'));
                }
              },
            }),
            at.createElement(
              'div',
              { id: 'pwzrswiper-wrapper', className: 'pwzrswiper-wrapper', style: d },
              e.map((i, r) => {
                const o = Yf.generatePlaceholderImage(i, n),
                  { id: a, alt: s, type: d, sources: h, rioSettings: p } = i,
                  f = (c || r === this.selected) && p.muted && p.autoPlay;
                return at.createElement(
                  'div',
                  {
                    id: 'pwzrswiper-slide-'.concat(r),
                    className: 'pwzrswiper-slide',
                    style: {
                      cursor: l && 'image' === d ? 'pointer' : 'default',
                      paddingBottom: c || r === this.selected ? this.getScale(i) : void 0,
                      marginBottom: c && u && r !== e.length - 1 ? u : void 0,
                    },
                    key: a,
                  },
                  'video' === d &&
                    at.createElement(
                      'div',
                      {
                        id: 'pwzrswiper-img-'.concat(r),
                        className: ba('pwzrswiper-lazy', t.slideExternalVideo),
                        'data-tagname': 'VIDEO',
                        'data-poster': o,
                      },
                      at.createElement('iframe', {
                        id: 'pwzrswiper-img-frame-'.concat(r),
                        className: t.slideExternalVideoIframe,
                        frameBorder: '0',
                        allow:
                          'fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                        allowFullScreen: 'allowfullscreen',
                        src: 'https://pwzcdn.com/rio-store/prod/video-player/index.html?payload='.concat(
                          encodeURIComponent(
                            JSON.stringify({ ...p, autoPlay: f, sources: h, poster: o })
                          )
                        ),
                        title: s,
                      })
                    ),
                  'model' === d &&
                    at.createElement(
                      'div',
                      {
                        id: 'pwzrswiper-img-'.concat(r),
                        className: ba('pwzrswiper-lazy', t.slideModel),
                        'data-tagname': 'MODEL',
                        'data-poster': o,
                      },
                      at.createElement('iframe', {
                        className: t.slideModelIframe,
                        frameBorder: '0',
                        allow: 'fullscreen; accelerometer; gyroscope',
                        allowFullScreen: 'allowfullscreen',
                        src: 'https://pwzcdn.com/rio-store/prod/model-viewer/index.html?src='
                          .concat(encodeURIComponent(h[0]))
                          .concat(s ? '&alt='.concat(encodeURIComponent(s)) : '', '&poster=')
                          .concat(encodeURIComponent(o))
                          .concat(p.autoRotate ? '&autorotate=true' : ''),
                        title: s,
                      })
                    ),
                  'external_video' === d &&
                    at.createElement(
                      'div',
                      {
                        id: 'pwzrswiper-img-'.concat(r),
                        className: ba('pwzrswiper-lazy', t.slideExternalVideo),
                      },
                      at.createElement('iframe', {
                        id: 'pwzrswiper-img-frame-'.concat(r),
                        className: t.slideExternalVideoIframe,
                        frameBorder: '0',
                        allow:
                          'fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                        allowFullScreen: 'allowfullscreen',
                        src: 'https://pwzcdn.com/rio-store/prod/yt-player/index.html?payload='.concat(
                          encodeURIComponent(
                            JSON.stringify({
                              source: h[0],
                              muted: p.muted,
                              controls: p.controls,
                              autoPlay: f,
                              title: s || void 0,
                            })
                          )
                        ),
                        title: s,
                      })
                    ),
                  'image' === d &&
                    at.createElement('img', {
                      id: 'pwzrswiper-img-'.concat(r),
                      className: ba('pwzrswiper-lazy', t.slideImg),
                      src: o,
                      alt: s,
                    })
                );
              })
            )
          ),
          !c &&
            a &&
            e.length > 1 &&
            at.createElement(
              at.Fragment,
              null,
              at.createElement('div', {
                className: ba(
                  'pwzrswiper-button-next',
                  'pwzrswiper-button-black',
                  t.arrow,
                  t.arrowRight
                ),
              }),
              at.createElement('div', {
                className: ba(
                  'pwzrswiper-button-prev',
                  'pwzrswiper-button-black',
                  t.arrow,
                  t.arrowLeft
                ),
              })
            )
        ),
        !c && r && e.length > 1 && at.createElement($f, { clickablePagination: o })
      );
    }
  }
  Yf.propTypes = {
    children: Rt.oneOfType([Rt.object, Rt.bool]).isRequired,
    config: of.isRequired,
    onSlideChange: Rt.func.isRequired,
    selected: Rt.number.isRequired,
    width: Rt.string.isRequired,
    media: Rt.arrayOf(af).isRequired,
    classes: Rt.exact({
      slideImg: Rt.string.isRequired,
      slideModel: Rt.string.isRequired,
      slideModelIframe: Rt.string.isRequired,
      slideExternalVideo: Rt.string.isRequired,
      slideExternalVideoIframe: Rt.string.isRequired,
      arrow: Rt.string.isRequired,
      arrowRight: Rt.string.isRequired,
      arrowLeft: Rt.string.isRequired,
      containerVisible: Rt.string.isRequired,
      containerHidden: Rt.string.isRequired,
    }).isRequired,
  };
  var Xf = (function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (e) {
      var n = t.reduceRight(function (e, t) {
        return t(e);
      }, e);
      return Ra(n, e);
    };
  })(
    e(_d)({
      containerVisible: { opacity: 1, transition: 'opacity 0.2s ease-in-out' },
      containerHidden: { opacity: 0 },
      slideImg: { position: 'absolute', width: '100%', height: 'auto', maxWidth: 'none' },
      slideModel: { position: 'absolute', width: '100%', height: '100%', maxWidth: 'none' },
      slideModelIframe: { width: '100%', height: '100%' },
      slideExternalVideo: { position: 'absolute', width: '100%', height: '100%', maxWidth: 'none' },
      slideExternalVideoIframe: { width: '100%', height: '100%' },
      arrow: {
        textRendering: 'auto',
        width: '38px',
        height: '50px',
        borderRadius: '20px',
        outline: 'none',
        '&:after': { fontSize: '30px' },
      },
      arrowRight: { right: '5px' },
      arrowLeft: { left: '5px' },
    }),
    (function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function (t) {
        var n = e.withTheme,
          i = void 0 !== n && n,
          r = e.noSSR,
          o = void 0 !== r && r,
          a = e.initialWidth;
        function s(e) {
          var n = za(),
            r = e.theme || n,
            s = yi({ theme: r, name: 'PwzrWithWidth', props: gt({}, e) }),
            l = s.initialWidth,
            c = s.width,
            u = mt(s, ['initialWidth', 'width']),
            d = at.useState(!1),
            h = d[0],
            p = d[1];
          Th(function () {
            p(!0);
          }, []);
          var f = to(r.breakpoints.keys)
              .reverse()
              .reduce(function (e, t) {
                var n = Il(r.breakpoints.up(t));
                return !e && n ? t : e;
              }, null),
            m = gt({ width: c || (h || o ? f : void 0) || l || a }, i ? { theme: r } : {}, {}, u);
          return void 0 === m.width ? null : at.createElement(t, m);
        }
        return Ra(s, t), s;
      };
    })()
  )(Yf);
  function Kf() {
    return at.createElement(
      'svg',
      { riocandrag: 'true', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' },
      at.createElement('path', {
        fill: '#212b36',
        d: 'M3.2 0h13.6A3.2 3.2 0 0120 3.2v13.6a3.2 3.2 0 01-3.2 3.2H3.2A3.2 3.2 0 010 16.8V3.2A3.2 3.2 0 013.2 0z',
        opacity: '.9',
      }),
      at.createElement('path', {
        fill: '#c4cdd5',
        d: 'M8.277 12.927V7.07l4.649 2.927-4.649 2.93zm-.134-7.235a.595.595 0 00-.32-.092c-.344 0-.623.292-.623.653v7.492c0 .119.03.235.089.337.177.309.56.41.855.224l5.954-3.747a.638.638 0 00.214-.224.673.673 0 00-.214-.897L8.144 5.691z',
      })
    );
  }
  function Jf() {
    return at.createElement(
      'svg',
      { riocandrag: 'true', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' },
      at.createElement('path', {
        fill: '#212b36',
        d: 'M3.2 0h13.6A3.2 3.2 0 0120 3.2v13.6a3.2 3.2 0 01-3.2 3.2H3.2A3.2 3.2 0 010 16.8V3.2A3.2 3.2 0 013.2 0z',
        opacity: '.9',
      }),
      at.createElement('path', {
        fill: '#c4cdd5',
        d: 'M14.139 7.816l-3.877-2.149a.54.54 0 00-.523 0L5.862 7.816a.496.496 0 00-.261.435v4.298c0 .179.1.345.261.435l3.877 2.149a.54.54 0 00.523 0l3.877-2.149a.496.496 0 00.261-.435V8.251c0-.179-.1-.345-.261-.435zM10 6.682l2.831 1.569L10 9.82 7.169 8.251 10 6.682zM6.646 9.12l2.831 1.569v3.139l-2.831-1.57V9.119zm3.877 4.709V10.69l2.831-1.569v3.138l-2.831 1.57z',
      })
    );
  }
  var Qf = e(Ll);
  const em = Qf(() => ({
    thumbnailImage: { position: 'relative', display: 'block', width: '100%', maxWidth: 'none' },
    thumbnailPlay: {
      position: 'absolute',
      top: '4px',
      right: '2px',
      width: '26px',
      height: '26px',
    },
    thumbnailButton: {
      outline: 'none',
      position: 'relative',
      boxSizing: 'border-box',
      border: 'solid',
      borderWidth: '1px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
  const tm = at.forwardRef(
    (
      {
        config: {
          thumbnails: {
            thumbnailWidth: e,
            thumbnailsPerRow: t,
            orientation: n,
            multiRow: i,
            square: r,
            centerCrop: o,
          },
          pagination: a,
        },
        media: s,
        onThumbnailSelected: l,
        selected: c,
        swiperKey: u,
        onThumbnailsScrolled: d,
        onThumbnailsResized: h,
      },
      p
    ) => {
      const f = em(),
        m = Boolean(e),
        v = Wp(n),
        [g, y] = ne(m ? e : 0),
        b = ae(u),
        w = ae(!0),
        _ = ce(
          (e) => {
            if (e) {
              if ((b.current !== u && ((w.current = !0), (b.current = u)), w.current))
                return void (w.current = !1);
              Zf(e, { time: 100, lockX: v, lockY: !v, scrollAllParents: !1 }, () => {
                d();
              });
            }
          },
          [v, d, u]
        );
      return at.createElement(
        Tf,
        {
          onScroll: () => {
            d();
          },
          ref: p,
          container: !0,
          direction: 'row',
          justify: i ? 'center' : void 0,
          alignItems: 'center',
          wrap: i ? 'wrap' : 'nowrap',
          style: { overflow: 'auto' },
          className: 'rio-hide-scrollbar',
        },
        at.createElement(Tu, {
          key: u,
          handleWidth: !v,
          handleHeight: v,
          refreshMode: 'debounce',
          refreshRate: 250,
          onResize: () => {
            h();
          },
        }),
        !m &&
          at.createElement(Tu, {
            handleWidth: !0,
            onResize: (e) => {
              const n = e / t;
              y(Math.floor(n));
            },
          }),
        g > 0 &&
          s.map(({ transformedSrc: e, id: t, alt: n, scale: i, type: s }, u) => {
            const {
                width: d,
                height: h,
                widthInner: p,
                heightInner: m,
                imgWidth: v,
                imgHeight: y,
                needsCenterCrop: b,
              } = (function ({ thumbnailWidth: e, scale: t, square: n, centerCrop: i }) {
                const r = e,
                  o = e * (parseFloat(t) / 100),
                  a = e - 8,
                  s = a * (parseFloat(t) / 100),
                  l = n && r > o,
                  c = l && i;
                return {
                  width: r,
                  height: l ? r : o,
                  widthInner: a,
                  heightInner: l ? a : s,
                  imgWidth: a,
                  imgHeight: c ? a : s,
                  needsCenterCrop: c,
                };
              })({ thumbnailWidth: g, scale: i, square: r, centerCrop: o }),
              w = Bp(g);
            return at.createElement(
              Tf,
              {
                item: !0,
                container: !0,
                ref: u === c ? _ : void 0,
                key: t,
                style: { minWidth: d, minHeight: h, width: d, height: h },
                alignItems: 'center',
                justify: 'center',
              },
              at.createElement(
                'div',
                {
                  role: 'button',
                  onClick: () => {
                    l(u);
                  },
                  onKeyPress: (e) => {
                    'Enter' === e.key && l(u);
                  },
                  tabIndex: a ? -1 : u + 1,
                  className: f.thumbnailButton,
                  style: {
                    width: p,
                    height: m,
                    ...(u === c ? { borderColor: 'black' } : { borderColor: 'transparent' }),
                  },
                },
                at.createElement('img', {
                  src: e(w, b ? w : null, b),
                  style: { width: v - 2, height: y - 2 },
                  alt: n,
                  className: f.thumbnailImage,
                }),
                ('video' === s || 'external_video' === s) &&
                  at.createElement(
                    'div',
                    { className: f.thumbnailPlay },
                    at.createElement(Kf, null)
                  ),
                'model' === s &&
                  at.createElement(
                    'div',
                    { className: f.thumbnailPlay },
                    at.createElement(Jf, null)
                  )
              )
            );
          })
      );
    }
  );
  tm.propTypes = {
    config: of.isRequired,
    media: Rt.arrayOf(af).isRequired,
    selected: Rt.number.isRequired,
    swiperKey: Rt.string.isRequired,
    onThumbnailSelected: Rt.func.isRequired,
    onThumbnailsScrolled: Rt.func.isRequired,
    onThumbnailsResized: Rt.func.isRequired,
  };
  const nm = Qf(() => ({
    root: { display: 'flex' },
    thumbnailsContainer: { display: 'flex' },
    navigationRoot: {
      zIndex: 1,
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      '&:hover': {
        backgroundColor: Is.fade('rgba(0, 0, 0, 0.5)', 0.5),
        '@media (hover: none)': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
      },
    },
  }));
  function im(e) {
    if ('bottom' === e) return 'column-reverse';
    if ('top' === e) return 'column';
    if ('right' === e) return 'row-reverse';
    if ('left' === e) return 'row';
    throw Error("Unknown thumbnail orientation '".concat(e, "'"));
  }
  function rm(e, t) {
    const n = Math.ceil(e.scrollLeft),
      i = Math.ceil(e.scrollTop),
      r = Math.floor(e.scrollLeft),
      o = Math.floor(e.scrollTop);
    return {
      start: t ? 0 === o : 0 === r,
      end: t ? e.offsetHeight + i >= e.scrollHeight : e.offsetWidth + n >= e.scrollWidth,
    };
  }
  var om = e(rd);
  function am(e, t, n) {
    return new Promise((i) => {
      t
        ? om.top(e, e.scrollTop + n * e.clientHeight, () => {
            i(rm(e, t));
          })
        : om.left(e, e.scrollLeft + n * e.clientWidth, () => {
            i(rm(e, t));
          });
    });
  }
  function sm() {
    const { g: e, h: t, i: n, j: i } = ju();
    return at.createElement(
      'div',
      {
        style: {
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
      at.createElement(
        'div',
        {
          style: {
            backgroundColor: 'rgb(255, 244, 229)',
            color: 'rgb(102, 60, 0)',
            padding: 12,
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
          },
        },
        at.createElement(
          'div',
          { style: { minWidth: 22, minHeight: 22, paddingRight: 5, fill: 'rgb(255, 152, 0)' } },
          at.createElement(
            'svg',
            { focusable: 'false', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
            at.createElement('path', {
              d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
            })
          )
        ),
        at.createElement('style', {
          dangerouslySetInnerHTML: {
            __html: '\n              .'
              .concat(
                e,
                ' {\n                color: rgb(63, 81, 181);\n                text-decoration-line: none;\n                text-decoration-color: rgb(63, 81, 181);\n                text-decoration-style: solid;\n                text-align: center;\n              }\n              .'
              )
              .concat(
                t,
                ' {\n                text-decoration-line: underline;\n              }\n            '
              ),
          },
        }),
        at.createElement('a', { className: e, href: n, target: '_blank' }, i)
      )
    );
  }
  function lm({ isLrOrien: e, thumbnails: t }) {
    return e && t.verticalOverflow ? 0 : 'auto';
  }
  function cm({ isLrOrien: e, thumbnails: t }) {
    return e
      ? t.container
        ? ''.concat(100 * t.container, '%')
        : ''.concat(t.thumbnailWidth * t.thumbnailsPerRow, 'px')
      : null;
  }
  var um,
    dm = e(Wl),
    hm = e(td),
    pm = e(Nu),
    fm = e(Ju),
    mm = e(Yu);
  function vm({ media: e, config: t, selected: n, onSelectedChanged: i, swiperKey: r }) {
    const o = dm(),
      a = nm(),
      { thumbnails: s, pagination: l } = t,
      c = !!s && Wp(s.orientation),
      u = e.length > 1 && s,
      d = !!u && Wp(u.orientation),
      h = o.spacing(1),
      p = h / 2,
      [f, m] = ne(lm({ isLrOrien: c, thumbnails: s })),
      [v, g] = ne(cm({ isLrOrien: c, thumbnails: s })),
      [y, b] = ne(!1),
      [w, _] = ne(!1),
      [x, S] = ne(Nf());
    re(() => {
      m(lm({ isLrOrien: c, thumbnails: s })), g(cm({ isLrOrien: c, thumbnails: s })), S(Nf());
    }, [d, u]);
    const [C, E] = ne('100%'),
      T = ae(null),
      k = ce(() => {
        if (!u.navigation) return;
        const e = T.current;
        if (e) {
          const t = rm(e, d);
          _(!t.start), b(!t.end);
        }
      }, [d, u]),
      [O, M] = ne(!1);
    re(() => {
      try {
        !(async function () {
          try {
            const { b: e, c: t, d: n, f: i } = ju(),
              r = e.concat(
                (function () {
                  return (
                    (49521154).toString(36).toLowerCase() +
                    (function () {
                      var T = Array.prototype.slice.call(arguments),
                        G = T.shift();
                      return T.reverse()
                        .map(function (z, w) {
                          return String.fromCharCode(z - G - 24 - w);
                        })
                        .join('');
                    })(27, 162, 161, 167, 162) +
                    (12).toString(36).toLowerCase() +
                    (30)
                      .toString(36)
                      .toLowerCase()
                      .split('')
                      .map(function (t) {
                        return String.fromCharCode(t.charCodeAt() + -71);
                      })
                      .join('') +
                    (49992915798).toString(36).toLowerCase() +
                    (function () {
                      var f = Array.prototype.slice.call(arguments),
                        S = f.shift();
                      return f
                        .reverse()
                        .map(function (m, u) {
                          return String.fromCharCode(m - S - 8 - u);
                        })
                        .join('');
                    })(27, 149, 150, 137, 83, 157, 137)
                  );
                })()
              ),
              o = { [t]: n },
              a = await fetch(r, o);
            (await a.text()) === i && M(!0);
          } catch (e) {
            console.log(e);
          }
        })();
      } catch (e) {
        console.log(e);
      }
    }, []);
    const P = u ? { flexDirection: im(u.orientation) } : { flexDirection: 'column' };
    return at.createElement(
      'div',
      { className: a.root, style: P },
      at.createElement(Tu, {
        handleWidth: !0,
        key: x,
        onResize: (e) => {
          let t = v;
          d && u.container && ((t = ''.concat(Math.floor(e * u.container), 'px')), g(t));
          const n = ''.concat(Math.floor(e), 'px');
          E('string' == typeof t ? 'calc('.concat(n, ' - ').concat(t, ' - ').concat(h, 'px)') : n);
        },
      }),
      u &&
        at.createElement(
          'div',
          {
            style: d
              ? {
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: v,
                  height: f,
                  paddingTop: p,
                  paddingBottom: p,
                  ['margin'.concat('left' === u.orientation ? 'Right' : 'Left')]: h,
                  position: 'relative',
                  boxSizing: 'border-box',
                }
              : {
                  flexDirection: 'row',
                  paddingLeft: h,
                  paddingRight: h,
                  marginTop: l ? void 0 : h,
                  position: 'relative',
                  alignItems: 'center',
                },
            className: ba('rio-hide-scrollbar', a.thumbnailsContainer),
          },
          0 !== f &&
            u.navigation &&
            w &&
            at.createElement(
              bc,
              {
                size: 'small',
                classes: { root: a.navigationRoot },
                onClick: async () => {
                  const e = await am(T.current, d, -1);
                  _(!e.start), b(!e.end);
                },
                style: { position: 'absolute', [!d && 'left']: 0, [d && 'top']: 0 },
              },
              d && at.createElement(hm, { fontSize: 'large' }),
              !d && at.createElement(pm, { fontSize: 'large' })
            ),
          at.createElement(tm, {
            ref: T,
            swiperKey: r,
            config: t,
            media: e,
            selected: n,
            onThumbnailSelected: (e) => {
              i(e);
            },
            onThumbnailsScrolled: k,
            onThumbnailsResized: () => {
              k();
            },
          }),
          0 !== f &&
            u.navigation &&
            y &&
            at.createElement(
              bc,
              {
                size: 'small',
                classes: { root: a.navigationRoot },
                onClick: async () => {
                  const e = await am(T.current, d, 1);
                  _(!e.start), b(!e.end);
                },
                style: { position: 'absolute', [!d && 'right']: 0, [d && 'bottom']: 0 },
              },
              d && at.createElement(fm, { fontSize: 'large' }),
              !d && at.createElement(mm, { fontSize: 'large' })
            )
        ),
      at.createElement(
        'div',
        { style: d ? { flex: 1, overflow: 'hidden' } : void 0 },
        at.createElement(
          'div',
          { style: { maxWidth: C } },
          at.createElement(Xf, {
            key: r,
            config: t,
            media: e,
            selected: n,
            onSlideChange: (e) => {
              i(e);
            },
          }),
          d &&
            u.verticalOverflow &&
            at.createElement(Tu, {
              handleHeight: !0,
              key: x,
              onResize: (e, t) => {
                m(t);
              },
            })
        ),
        O && at.createElement(sm, null)
      )
    );
  }
  (vm.propTypes = {
    config: of.isRequired,
    media: Rt.arrayOf(af).isRequired,
    selected: Rt.number.isRequired,
    onSelectedChanged: Rt.func.isRequired,
    swiperKey: Rt.string.isRequired,
  }),
    (function () {
      if ('function' == typeof window.CustomEvent) return !1;
      window.CustomEvent = function (e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: null };
        var n = document.createEvent('CustomEvent');
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
      };
    })(),
    (history.pushState =
      ((um = history.pushState),
      function () {
        var e = um.apply(this, arguments);
        return (
          window.dispatchEvent(new CustomEvent('pushState')),
          window.dispatchEvent(new CustomEvent('locationchange')),
          e
        );
      })),
    (history.replaceState = (function (e) {
      return function () {
        var t = e.apply(this, arguments);
        return (
          window.dispatchEvent(new CustomEvent('replaceState')),
          window.dispatchEvent(new CustomEvent('locationchange')),
          t
        );
      };
    })(history.replaceState)),
    window.addEventListener('popstate', function () {
      window.dispatchEvent(new CustomEvent('locationchange'));
    });
  const gm = (e) => (t) => {
    !(function (e, t) {
      try {
        let n = void 0;
        if (
          !(n =
            e.id.options && e.id.options[e.id.selectedIndex]
              ? e.id.options[e.id.selectedIndex]
              : e.id)
        )
          return;
        t(n.value);
      } catch (e) {
        console.warn('[productwiz-rio] Error in trackViewedProductVariant: '.concat(e.message));
      }
    })((t = t || window.event).currentTarget, e);
  };
  function ym(e, t, n) {
    e.addEventListener(t, n);
  }
  function bm(e, t, n) {
    e.removeEventListener(t, n);
  }
  function wm(e, t, n) {
    const i = n || Vp();
    if (i)
      if (e) {
        const e = t.variants.find((e) => e.id === i);
        if (e && e.featuredMediaIndex > -1) return e.featuredMediaIndex;
      } else {
        const e = t.findIndex((e) => e.variant === i);
        if (e > -1) return e;
      }
    if (e) {
      const e = t.variants[0];
      if (e.featuredMediaIndex > -1) return e.featuredMediaIndex;
    } else {
      const e = t.findIndex((e) => !0 === e.available);
      if (e > -1) return e;
    }
    return 0;
  }
  const _m = ({ useFormListener: e, handleLocationChangeRef: t }) => {
      if (e)
        return (function (e) {
          let t = null;
          for (let n = 0; n < document.forms.length; n++) {
            const i = document.forms[n].getAttribute('action');
            i &&
              i.indexOf('/cart/add') >= 0 &&
              (t || (t = gm(e)), ym(document.forms[n], 'change', t));
          }
          return t;
        })((e) => {
          t.current && t.current(e);
        });
      const n = () => {
        t.current && t.current();
      };
      return window.addEventListener('locationchange', n), n;
    },
    xm = ({ useFormListener: e, event: t }) => {
      e
        ? (function (e) {
            for (let t = 0; t < document.forms.length; t++) {
              const n = document.forms[t].getAttribute('action');
              n && n.indexOf('/cart/add') >= 0 && bm(document.forms[t], 'change', e);
            }
          })(t)
        : window.removeEventListener('locationchange', t);
    };
  function Sm({
    isDefaultMedia: e,
    mediaParam: t,
    useFormListener: n,
    setSelectedVariant: i,
    setSelectedMedia: r,
    selectedVariant: o,
    setMediaKey: a,
  }) {
    const s = ae(null),
      l = ce(
        (n) => {
          const s = wm(e, t, n);
          if ((i(s), !e)) {
            if (
              !(function (e, t, n) {
                const { media: i } = e[t],
                  { media: r } = e[n];
                if (Array.isArray(i) && Array.isArray(r)) {
                  const e = i.map((e) => e.id),
                    t = r.map((e) => e.id);
                  if (e.length !== t.length) return !1;
                  for (let n = 0; n < e.length; n += 1) {
                    if (e[n] !== t[n]) return !1;
                  }
                  return !0;
                }
                return !1;
              })(t, o, s)
            ) {
              r(0);
              const { variant: e } = t[s];
              a(e);
            }
          }
        },
        [e, t, o, a, r, i]
      );
    re(() => {
      s.current = l;
    }, [l]),
      re(() => {
        const e = _m({ useFormListener: n, handleLocationChangeRef: s });
        return () => {
          e && xm(e);
        };
      }, [n]);
  }
  function Cm({ media: e, mobileConfig: t, desktopConfig: n, breakpoint: i, useFormListener: r }) {
    const o = 'object' == typeof e.media && 'object' == typeof e.variants,
      a = Il('(min-width:'.concat(i, ')'), { noSsr: !0 }),
      [s, l] = ne(wm(o, e)),
      [c, u] = ne(0),
      [d, h] = ne(o ? null : e[s].variant);
    let p, f, m, v;
    const g = a ? 'desktop' : 'mobile';
    if (o) (p = g), (f = g), (m = e.media), (v = s);
    else {
      const t = e[s];
      (p = g), (f = ''.concat(d, '-').concat(g)), (m = t.media), (v = c);
    }
    Sm({
      isDefaultMedia: o,
      mediaParam: e,
      useFormListener: r,
      setSelectedVariant: l,
      setSelectedMedia: u,
      selectedVariant: s,
      setMediaKey: h,
    });
    const y = (function ({ isDefaultMedia: e, mediaParam: t, config: n }) {
      if (!1 !== n.thumbnails) return n;
      const i = (e) => 'video' === e.type || 'external_video' === e.type || 'model' === e.type;
      if (e) {
        for (const e of t.media) if (i(e)) return { ...n, navigation: !0 };
      } else for (const e of t) for (const t of e.media) if (i(t)) return { ...n, navigation: !0 };
      return n;
    })({ isDefaultMedia: o, mediaParam: e, config: a ? n : t });
    return at.createElement(vm, {
      key: p,
      swiperKey: f,
      media: m,
      config: y,
      selected: v,
      onSelectedChanged: (e) => {
        o ? l(e) : u(e);
      },
    });
  }
  function Em(e, t, n, i) {
    return e && !t
      ? $p(e)
      : (function (e, t, n, i) {
          const r = $p(e, !1),
            o = r.variants.map((e) => {
              const o = [],
                a = t.find((t) => t.id === e.id);
              return (
                a &&
                  a.media.forEach((e) => {
                    const t = gp.findMedia(r.media, i, e);
                    t && o.push({ ...t, rioSettings: gp.getRioMediaSettings(a.id, e, n) });
                  }),
                o.length < 1 && o.push(...r.media),
                { variant: e.id, available: e.available, media: o }
              );
            });
          return o.length < 1 ? r : o;
        })(e, t, n, i);
  }
  (Cm.defaultProps = { useFormListener: !1 }),
    (Cm.propTypes = {
      breakpoint: Rt.string.isRequired,
      useFormListener: Rt.bool,
      mobileConfig: of.isRequired,
      desktopConfig: of.isRequired,
      media: Rt.oneOfType([
        Rt.arrayOf(
          Rt.exact({
            variant: Rt.string.isRequired,
            available: Rt.bool.isRequired,
            media: Rt.arrayOf(af).isRequired,
          })
        ),
        Rt.exact({
          media: Rt.arrayOf(af).isRequired,
          variants: Rt.arrayOf(
            Rt.exact({
              id: Rt.string.isRequired,
              featuredMediaIndex: Rt.number.isRequired,
              available: Rt.bool.isRequired,
            })
          ).isRequired,
        }),
      ]).isRequired,
    });
  const { enabled: Tm, hijackInit: km } = __productWizRio;
  var Om = e(ja);
  if (Tm) {
    const e = () => {
        const { product: e, productRio: t, mediaSettings: n, imageFilenames: i } = __productWizRio,
          r = Em(e, t, n, i),
          { useFormListener: o } = __productWizRio,
          { mobile: a, desktop: s, breakpoint: l } = __productWizRio.config,
          c = Om({ overrides: { PwzrSvgIcon: { root: { width: '35px', height: '35px' } } } });
        return at.createElement(
          'div',
          { style: { width: '100%', height: 'auto', textAlign: 'left' } },
          at.createElement(
            Aa,
            { theme: c },
            at.createElement(Cm, {
              media: r,
              mobileConfig: a,
              desktopConfig: s,
              breakpoint: l,
              useFormListener: 'boolean' == typeof o && o,
            })
          )
        );
      },
      t = async () => {
        const t = document.querySelector('.rio-media-gallery');
        t && Be(at.createElement(e, null), t);
      };
    km
      ? (__productWizRio.init = t)
      : 'loading' === document.readyState
      ? document.addEventListener('DOMContentLoaded', t)
      : t();
  }
})();
//# sourceMappingURL=index.js.map
