"use strict";
function initSlickClamp(a) {
    "" == a[0].style.fontSize ? a.css("font-size", "16px") : a.css("font-size", "")
}
if (function (a, b) {
    var c = [0, 767]
        , d = [768, 1024]
        , e = [1025, 1599999984]
        , f = "only screen"
        , g = (a[b].constants.contextPath,
            {
                loggingDebug: !1,
                xSmallMax: 320,
                smallMax: c[1],
                mediumMin: d[0],
                mediumMax: d[1],
                largeMin: e[0],
                maxWidth: 1440,
                landscape: f + " and (orientation: landscape)",
                portrait: f + " and (orientation: portrait)",
                smallUp: f,
                smallOnly: f + " and (max-width: " + Math.max.apply(null, c) + "px)",
                mediumUp: f + " and (min-width: " + Math.min.apply(null, d) + "px)",
                mediumOnly: f + " and (min-width:" + Math.min.apply(null, d) + "px) and (max-width: " + Math.max.apply(null, d) + "px)",
                largeUp: f + " and (min-width: " + Math.min.apply(null, e) + "px)",
                largeOnly: f + " and (min-width:" + Math.min.apply(null, e) + "px) and (max-width: " + Math.max.apply(null, e) + "px)",
                cachedPages: []
            });
    a[b] || (a[b] = {}),
        a[b].config = g
}(this, "JTV"),
    function (a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document)
                throw new Error("jQuery requires a window with a document");
            return b(a)
        }
            : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        function c(a) {
            var b = a.length
                , c = ea.type(a);
            return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        function d(a, b, c) {
            if (ea.isFunction(b))
                return ea.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c
                });
            if (b.nodeType)
                return ea.grep(a, function (a) {
                    return a === b !== c
                });
            if ("string" == typeof b) {
                if (ma.test(b))
                    return ea.filter(b, a, c);
                b = ea.filter(b, a)
            }
            return ea.grep(a, function (a) {
                return ea.inArray(a, b) >= 0 !== c
            })
        }
        function e(a, b) {
            do
                a = a[b];
            while (a && 1 !== a.nodeType); return a
        }
        function f(a) {
            var b = ua[a] = {};
            return ea.each(a.match(ta) || [], function (a, c) {
                b[c] = !0
            }),
                b
        }
        function g() {
            oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1),
                a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h),
                    a.detachEvent("onload", h))
        }
        function h() {
            (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(),
                ea.ready())
        }
        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(za, "-$1").toLowerCase();
                if (c = a.getAttribute(d),
                    "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c
                    } catch (e) { }
                    ea.data(a, b, c)
                } else
                    c = void 0
            }
            return c
        }
        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b)
                    return !1;
            return !0
        }
        function k(a, b, c, d) {
            if (ea.acceptData(a)) {
                var e, f, g = ea.expando, h = a.nodeType, i = h ? ea.cache : a, j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                    return j || (j = h ? a[g] = W.pop() || ea.guid++ : g),
                        i[j] || (i[j] = h ? {} : {
                            toJSON: ea.noop
                        }),
                        ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)),
                        f = i[j],
                        d || (f.data || (f.data = {}),
                            f = f.data),
                        void 0 !== c && (f[ea.camelCase(b)] = c),
                        "string" == typeof b ? (e = f[b],
                            null == e && (e = f[ea.camelCase(b)])) : e = f,
                        e
            }
        }
        function l(a, b, c) {
            if (ea.acceptData(a)) {
                var d, e, f = a.nodeType, g = f ? ea.cache : a, h = f ? a[ea.expando] : ea.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b),
                            b = b in d ? [b] : b.split(" ")),
                            e = b.length;
                        for (; e--;)
                            delete d[b[e]];
                        if (c ? !j(d) : !ea.isEmptyObject(d))
                            return
                    }
                    (c || (delete g[h].data,
                        j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }
        function m() {
            return !0
        }
        function n() {
            return !1
        }
        function o() {
            try {
                return oa.activeElement
            } catch (a) { }
        }
        function p(a) {
            var b = Ka.split("|")
                , c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;)
                    c.createElement(b.pop());
            return c
        }
        function q(a, b) {
            var c, d, e = 0, f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [],
                    c = a.childNodes || a; null != (d = c[e]); e++)
                    !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
            return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
        }
        function r(a) {
            Ea.test(a.type) && (a.defaultChecked = a.checked)
        }
        function s(a, b) {
            return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function t(a) {
            return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type,
                a
        }
        function u(a) {
            var b = Va.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"),
                a
        }
        function v(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++)
                ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
        }
        function w(a, b) {
            if (1 === b.nodeType && ea.hasData(a)) {
                var c, d, e, f = ea._data(a), g = ea._data(b, f), h = f.events;
                if (h) {
                    delete g.handle,
                        g.events = {};
                    for (c in h)
                        for (d = 0,
                            e = h[c].length; e > d; d++)
                            ea.event.add(b, c, h[c][d])
                }
                g.data && (g.data = ea.extend({}, g.data))
            }
        }
        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(),
                    !ca.noCloneEvent && b[ea.expando]) {
                    e = ea._data(b);
                    for (d in e.events)
                        ea.removeEvent(b, d, e.handle);
                    b.removeAttribute(ea.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text,
                    u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
                        ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
                            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }
        function y(b, c) {
            var d, e = ea(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
            return e.detach(),
                f
        }
        function z(a) {
            var b = oa
                , c = _a[a];
            return c || (c = y(a, b),
                "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
                    b = ($a[0].contentWindow || $a[0].contentDocument).document,
                    b.write(),
                    b.close(),
                    c = y(a, b),
                    $a.detach()),
                _a[a] = c),
                c
        }
        function A(a, b) {
            return {
                get: function () {
                    var c = a();
                    if (null != c)
                        return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        function B(a, b) {
            if (b in a)
                return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
                if (b = mb[e] + c,
                    b in a)
                    return b;
            return d
        }
        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                d = a[g],
                    d.style && (f[g] = ea._data(d, "olddisplay"),
                        c = d.style.display,
                        b ? (f[g] || "none" !== c || (d.style.display = ""),
                            "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d),
                                (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
            for (g = 0; h > g; g++)
                d = a[g],
                    d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }
        function D(a, b, c) {
            var d = ib.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }
        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)),
                    d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)),
                        "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e),
                            "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
            return g
        }
        function F(a, b, c) {
            var d = !0
                , e = "width" === b ? a.offsetWidth : a.offsetHeight
                , f = ab(a)
                , g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = bb(a, b, f),
                    (0 > e || null == e) && (e = a.style[b]),
                    db.test(e))
                    return e;
                d = g && (ca.boxSizingReliable() || e === a.style[b]),
                    e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        function G(a, b, c, d, e) {
            return new G.prototype.init(a, b, c, d, e)
        }
        function H() {
            return setTimeout(function () {
                nb = void 0
            }),
                nb = ea.now()
        }
        function I(a, b) {
            var c, d = {
                height: a
            }, e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b)
                c = Ba[e],
                    d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a),
                d
        }
        function J(a, b, c) {
            for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a))
                    return d
        }
        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ca(a), p = ea._data(a, "fxshow");
            c.queue || (h = ea._queueHooks(a, "fx"),
                null == h.unqueued && (h.unqueued = 0,
                    i = h.empty.fire,
                    h.empty.fire = function () {
                        h.unqueued || i()
                    }
                ),
                h.unqueued++ ,
                l.always(function () {
                    l.always(function () {
                        h.unqueued-- ,
                            ea.queue(a, "fx").length || h.empty.fire()
                    })
                })),
                1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
                    j = ea.css(a, "display"),
                    k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j,
                    "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
                c.overflow && (n.overflow = "hidden",
                    ca.shrinkWrapBlocks() || l.always(function () {
                        n.overflow = c.overflow[0],
                            n.overflowX = c.overflow[1],
                            n.overflowY = c.overflow[2]
                    }));
            for (d in b)
                if (e = b[d],
                    pb.exec(e)) {
                    if (delete b[d],
                        f = f || "toggle" === e,
                        e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d])
                            continue;
                        o = !0
                    }
                    m[d] = p && p[d] || ea.style(a, d)
                } else
                    j = void 0;
            if (ea.isEmptyObject(m))
                "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}),
                    f && (p.hidden = !o),
                    o ? ea(a).show() : l.done(function () {
                        ea(a).hide()
                    }),
                    l.done(function () {
                        var b;
                        ea._removeData(a, "fxshow");
                        for (b in m)
                            ea.style(a, b, m[b])
                    });
                for (d in m)
                    g = J(o ? p[d] : 0, d, l),
                        d in p || (p[d] = g.start,
                            o && (g.end = g.start,
                                g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = ea.camelCase(c),
                    e = b[d],
                    f = a[c],
                    ea.isArray(f) && (e = f[1],
                        f = a[c] = f[0]),
                    c !== d && (a[d] = f,
                        delete a[c]),
                    g = ea.cssHooks[d],
                    g && "expand" in g) {
                    f = g.expand(f),
                        delete a[d];
                    for (c in f)
                        c in a || (a[c] = f[c],
                            b[c] = e)
                } else
                    b[d] = e
        }
        function M(a, b, c) {
            var d, e, f = 0, g = sb.length, h = ea.Deferred().always(function () {
                delete i.elem
            }), i = function () {
                if (e)
                    return !1;
                for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]),
                    1 > f && i ? c : (h.resolveWith(a, [j]),
                        !1)
            }, j = h.promise({
                elem: a,
                props: ea.extend({}, b),
                opts: ea.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: nb || H(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d),
                        d
                },
                stop: function (b) {
                    var c = 0
                        , d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                        this
                }
            }), k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = sb[f].call(j, a, k, j.opts))
                    return d;
            return ea.map(k, J, j),
                ea.isFunction(j.opts.start) && j.opts.start.call(a, j),
                ea.fx.timer(ea.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })),
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        function N(a) {
            return function (b, c) {
                "string" != typeof b && (c = b,
                    b = "*");
                var d, e = 0, f = b.toLowerCase().match(ta) || [];
                if (ea.isFunction(c))
                    for (; d = f[e++];)
                        "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }
        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0,
                    ea.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                            e(j),
                            !1)
                    }),
                    i
            }
            var f = {}
                , g = a === Rb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }
        function P(a, b) {
            var c, d, e = ea.ajaxSettings.flatOptions || {};
            for (d in b)
                void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && ea.extend(!0, a, c),
                a
        }
        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)
                i.shift(),
                    void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
            if (i[0] in c)
                f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f),
                c[f]) : void 0
        }
        function R(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters)
                    j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                    !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                    i = f,
                    f = k.shift())
                    if ("*" === f)
                        f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f],
                            !g)
                            for (e in j)
                                if (h = e.split(" "),
                                    h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                        k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"])
                                b = g(b);
                            else
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                    }
            return {
                state: "success",
                data: b
            }
        }
        function S(a, b, c, d) {
            var e;
            if (ea.isArray(b))
                ea.each(b, function (b, e) {
                    c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                });
            else if (c || "object" !== ea.type(b))
                d(a, b);
            else
                for (e in b)
                    S(a + "[" + e + "]", b[e], c, d)
        }
        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) { }
        }
        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) { }
        }
        function V(a) {
            return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var W = []
            , X = W.slice
            , Y = W.concat
            , Z = W.push
            , $ = W.indexOf
            , _ = {}
            , aa = _.toString
            , ba = _.hasOwnProperty
            , ca = {}
            , da = "1.11.1"
            , ea = function (a, b) {
                return new ea.fn.init(a, b)
            }
            , fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
            , ga = /^-ms-/
            , ha = /-([\da-z])/gi
            , ia = function (a, b) {
                return b.toUpperCase()
            };
        ea.fn = ea.prototype = {
            jquery: da,
            constructor: ea,
            selector: "",
            length: 0,
            toArray: function () {
                return X.call(this)
            },
            get: function (a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            },
            pushStack: function (a) {
                var b = ea.merge(this.constructor(), a);
                return b.prevObject = this,
                    b.context = this.context,
                    b
            },
            each: function (a, b) {
                return ea.each(this, a, b)
            },
            map: function (a) {
                return this.pushStack(ea.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function () {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (a) {
                var b = this.length
                    , c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: W.sort,
            splice: W.splice
        },
            ea.extend = ea.fn.extend = function () {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g,
                    g = arguments[h] || {},
                    h++),
                    "object" == typeof g || ea.isFunction(g) || (g = {}),
                    h === i && (g = this,
                        h--); i > h; h++)
                    if (null != (e = arguments[h]))
                        for (d in e)
                            a = g[d],
                                c = e[d],
                                g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1,
                                    f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {},
                                    g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
                return g
            }
            ,
            ea.extend({
                expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (a) {
                    throw new Error(a)
                },
                noop: function () { },
                isFunction: function (a) {
                    return "function" === ea.type(a)
                },
                isArray: Array.isArray || function (a) {
                    return "array" === ea.type(a)
                }
                ,
                isWindow: function (a) {
                    return null != a && a == a.window
                },
                isNumeric: function (a) {
                    return !ea.isArray(a) && a - parseFloat(a) >= 0
                },
                isEmptyObject: function (a) {
                    var b;
                    for (b in a)
                        return !1;
                    return !0
                },
                isPlainObject: function (a) {
                    var b;
                    if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a))
                        return !1;
                    try {
                        if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (c) {
                        return !1
                    }
                    if (ca.ownLast)
                        for (b in a)
                            return ba.call(a, b);
                    for (b in a)
                        ;
                    return void 0 === b || ba.call(a, b)
                },
                type: function (a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
                },
                globalEval: function (b) {
                    b && ea.trim(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    }
                    )(b)
                },
                camelCase: function (a) {
                    return a.replace(ga, "ms-").replace(ha, ia)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function (a, b, d) {
                    var e, f = 0, g = a.length, h = c(a);
                    if (d) {
                        if (h)
                            for (; g > f && (e = b.apply(a[f], d),
                                e !== !1); f++)
                                ;
                        else
                            for (f in a)
                                if (e = b.apply(a[f], d),
                                    e === !1)
                                    break
                    } else if (h)
                        for (; g > f && (e = b.call(a[f], f, a[f]),
                            e !== !1); f++)
                            ;
                    else
                        for (f in a)
                            if (e = b.call(a[f], f, a[f]),
                                e === !1)
                                break;
                    return a
                },
                trim: function (a) {
                    return null == a ? "" : (a + "").replace(fa, "")
                },
                makeArray: function (a, b) {
                    var d = b || [];
                    return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
                        d
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if ($)
                            return $.call(b, a, c);
                        for (d = b.length,
                            c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                            if (c in b && b[c] === a)
                                return c
                    }
                    return -1
                },
                merge: function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d;)
                        a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];)
                            a[e++] = b[d++];
                    return a.length = e,
                        a
                },
                grep: function (a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                        d = !b(a[f], f),
                            d !== h && e.push(a[f]);
                    return e
                },
                map: function (a, b, d) {
                    var e, f = 0, g = a.length, h = c(a), i = [];
                    if (h)
                        for (; g > f; f++)
                            e = b(a[f], f, d),
                                null != e && i.push(e);
                    else
                        for (f in a)
                            e = b(a[f], f, d),
                                null != e && i.push(e);
                    return Y.apply([], i)
                },
                guid: 1,
                proxy: function (a, b) {
                    var c, d, e;
                    return "string" == typeof b && (e = a[b],
                        b = a,
                        a = e),
                        ea.isFunction(a) ? (c = X.call(arguments, 2),
                            d = function () {
                                return a.apply(b || this, c.concat(X.call(arguments)))
                            }
                            ,
                            d.guid = a.guid = a.guid || ea.guid++ ,
                            d) : void 0
                },
                now: function () {
                    return +new Date
                },
                support: ca
            }),
            ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
                _["[object " + b + "]"] = b.toLowerCase()
            });
        var ja = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b),
                    b = b || G,
                    c = c || [],
                    !a || "string" != typeof a)
                    return c;
                if (1 !== (h = b.nodeType) && 9 !== h)
                    return [];
                if (I && !d) {
                    if (e = sa.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g),
                                    !f || !f.parentNode)
                                    return c;
                                if (f.id === g)
                                    return c.push(f),
                                        c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                                return c.push(f),
                                    c
                        } else {
                            if (e[2])
                                return _.apply(c, b.getElementsByTagName(a)),
                                    c;
                            if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName)
                                return _.apply(c, b.getElementsByClassName(g)),
                                    c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N,
                            o = b,
                            p = 9 === h && a,
                            1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a),
                                (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n),
                                n = "[id='" + n + "'] ",
                                i = j.length; i--;)
                                j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b,
                                p = j.join(",")
                        }
                        if (p)
                            try {
                                return _.apply(c, o.querySelectorAll(p)),
                                    c
                            } catch (q) { } finally {
                                l || b.removeAttribute("id")
                            }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }
            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                        a[c + " "] = d
                }
                var b = [];
                return a
            }
            function d(a) {
                return a[N] = !0,
                    a
            }
            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b),
                        b = null
                }
            }
            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;)
                    w.attrHandle[c[d]] = b
            }
            function g(a, b) {
                var c = b && a
                    , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
                if (d)
                    return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b)
                            return -1;
                return a ? 1 : -1
            }
            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function j(a) {
                return d(function (b) {
                    return b = +b,
                        d(function (c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--;)
                                c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                })
            }
            function k(a) {
                return a && typeof a.getElementsByTagName !== V && a
            }
            function l() { }
            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)
                    d += a[b].value;
                return d
            }
            function n(a, b, c) {
                var d = b.dir
                    , e = c && "parentNode" === d
                    , f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e)
                            return a(b, c, f)
                }
                    : function (b, c, g) {
                        var h, i, j = [P, f];
                        if (g) {
                            for (; b = b[d];)
                                if ((1 === b.nodeType || e) && a(b, c, g))
                                    return !0
                        } else
                            for (; b = b[d];)
                                if (1 === b.nodeType || e) {
                                    if (i = b[N] || (b[N] = {}),
                                        (h = i[d]) && h[0] === P && h[1] === f)
                                        return j[2] = h[2];
                                    if (i[d] = j,
                                        j[2] = a(b, c, g))
                                        return !0
                                }
                    }
            }
            function o(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d))
                            return !1;
                    return !0
                }
                    : a[0]
            }
            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++)
                    b(a, c[e], d);
                return d
            }
            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                        j && b.push(h));
                return g
            }
            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)),
                    f && !f[N] && (f = r(f, g)),
                    d(function (d, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                        if (c && c(s, t, h, i),
                            e)
                            for (j = q(t, n),
                                e(j, [], h, i),
                                k = j.length; k--;)
                                (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                        if (d) {
                            if (f || a) {
                                if (f) {
                                    for (j = [],
                                        k = t.length; k--;)
                                        (l = t[k]) && j.push(s[k] = l);
                                    f(null, t = [], j, i)
                                }
                                for (k = t.length; k--;)
                                    (l = t[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                            }
                        } else
                            t = q(t === g ? t.splice(o, t.length) : t),
                                f ? f(null, g, t, i) : _.apply(g, t)
                    })
            }
            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return ba.call(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }
                ]; e > h; h++)
                    if (c = w.relative[a[h].type])
                        k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches),
                            c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                                ;
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }
            function t(a, c) {
                var e = c.length > 0
                    , f = a.length > 0
                    , g = function (d, g, h, i, j) {
                        var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n-- ,
                                d && p.push(k))
                        }
                        if (n += o,
                            e && o !== n) {
                            for (l = 0; m = c[l++];)
                                m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;)
                                        p[o] || r[o] || (r[o] = Z.call(i));
                                r = q(r)
                            }
                            _.apply(i, r),
                                j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u,
                            C = s),
                            p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0),
                    0
            }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, aa = Y.slice, ba = Y.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a)
                        return b;
                return -1
            }
                , ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", da = "[\\x20\\t\\r\\n\\f]", ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fa = ea.replace("w", "w#"), ga = "\\[" + da + "*(" + ea + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fa + "))|)" + da + "*\\]", ha = ":(" + ea + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)", ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"), ja = new RegExp("^" + da + "*," + da + "*"), ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"), la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"), ma = new RegExp(ha), na = new RegExp("^" + fa + "$"), oa = {
                    ID: new RegExp("^#(" + ea + ")"),
                    CLASS: new RegExp("^\\.(" + ea + ")"),
                    TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ga),
                    PSEUDO: new RegExp("^" + ha),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ca + ")$", "i"),
                    needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
                }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"), wa = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
            try {
                _.apply(Y = aa.call(O.childNodes), O.childNodes),
                    Y[O.childNodes.length].nodeType
            } catch (xa) {
                _ = {
                    apply: Y.length ? function (a, b) {
                        $.apply(a, aa.call(b))
                    }
                        : function (a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++];)
                                ;
                            a.length = c - 1
                        }
                }
            }
            v = b.support = {},
                y = b.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }
                ,
                F = b.setDocument = function (a) {
                    var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
                    return c !== G && 9 === c.nodeType && c.documentElement ? (G = c,
                        H = c.documentElement,
                        I = !y(c),
                        d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function () {
                            F()
                        }, !1) : d.attachEvent && d.attachEvent("onunload", function () {
                            F()
                        })),
                        v.attributes = e(function (a) {
                            return a.className = "i",
                                !a.getAttribute("className")
                        }),
                        v.getElementsByTagName = e(function (a) {
                            return a.appendChild(c.createComment("")),
                                !a.getElementsByTagName("*").length
                        }),
                        v.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function (a) {
                            return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                                a.firstChild.className = "i",
                                2 === a.getElementsByClassName("i").length
                        }),
                        v.getById = e(function (a) {
                            return H.appendChild(a).id = N,
                                !c.getElementsByName || !c.getElementsByName(N).length
                        }),
                        v.getById ? (w.find.ID = function (a, b) {
                            if (typeof b.getElementById !== V && I) {
                                var c = b.getElementById(a);
                                return c && c.parentNode ? [c] : []
                            }
                        }
                            ,
                            w.filter.ID = function (a) {
                                var b = a.replace(va, wa);
                                return function (a) {
                                    return a.getAttribute("id") === b
                                }
                            }
                        ) : (delete w.find.ID,
                            w.filter.ID = function (a) {
                                var b = a.replace(va, wa);
                                return function (a) {
                                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                                    return c && c.value === b
                                }
                            }
                            ),
                        w.find.TAG = v.getElementsByTagName ? function (a, b) {
                            return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
                        }
                            : function (a, b) {
                                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    for (; c = f[e++];)
                                        1 === c.nodeType && d.push(c);
                                    return d
                                }
                                return f
                            }
                        ,
                        w.find.CLASS = v.getElementsByClassName && function (a, b) {
                            return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
                        }
                        ,
                        K = [],
                        J = [],
                        (v.qsa = ra.test(c.querySelectorAll)) && (e(function (a) {
                            a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                                a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"),
                                a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"),
                                a.querySelectorAll(":checked").length || J.push(":checked")
                        }),
                            e(function (a) {
                                var b = c.createElement("input");
                                b.setAttribute("type", "hidden"),
                                    a.appendChild(b).setAttribute("name", "D"),
                                    a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="),
                                    a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                                    a.querySelectorAll("*,:x"),
                                    J.push(",.*:")
                            })),
                        (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                            v.disconnectedMatch = L.call(a, "div"),
                                L.call(a, "[s!='']:x"),
                                K.push("!=", ha)
                        }),
                        J = J.length && new RegExp(J.join("|")),
                        K = K.length && new RegExp(K.join("|")),
                        b = ra.test(H.compareDocumentPosition),
                        M = b || ra.test(H.contains) ? function (a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a
                                , d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                        }
                            : function (a, b) {
                                if (b)
                                    for (; b = b.parentNode;)
                                        if (b === a)
                                            return !0;
                                return !1
                            }
                        ,
                        U = b ? function (a, b) {
                            if (a === b)
                                return E = !0,
                                    0;
                            var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                                1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
                        }
                            : function (a, b) {
                                if (a === b)
                                    return E = !0,
                                        0;
                                var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                                if (!f || !h)
                                    return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                                if (f === h)
                                    return g(a, b);
                                for (d = a; d = d.parentNode;)
                                    i.unshift(d);
                                for (d = b; d = d.parentNode;)
                                    j.unshift(d);
                                for (; i[e] === j[e];)
                                    e++;
                                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                            }
                        ,
                        c) : G
                }
                ,
                b.matches = function (a, c) {
                    return b(a, null, null, c)
                }
                ,
                b.matchesSelector = function (a, c) {
                    if ((a.ownerDocument || a) !== G && F(a),
                        c = c.replace(la, "='$1']"),
                        v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
                        try {
                            var d = L.call(a, c);
                            if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                                return d
                        } catch (e) { }
                    return b(c, G, null, [a]).length > 0
                }
                ,
                b.contains = function (a, b) {
                    return (a.ownerDocument || a) !== G && F(a),
                        M(a, b)
                }
                ,
                b.attr = function (a, b) {
                    (a.ownerDocument || a) !== G && F(a);
                    var c = w.attrHandle[b.toLowerCase()]
                        , d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                    return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }
                ,
                b.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }
                ,
                b.uniqueSort = function (a) {
                    var b, c = [], d = 0, e = 0;
                    if (E = !v.detectDuplicates,
                        D = !v.sortStable && a.slice(0),
                        a.sort(U),
                        E) {
                        for (; b = a[e++];)
                            b === a[e] && (d = c.push(e));
                        for (; d--;)
                            a.splice(c[d], 1)
                    }
                    return D = null,
                        a
                }
                ,
                x = b.getText = function (a) {
                    var b, c = "", d = 0, e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent)
                                return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)
                                c += x(a)
                        } else if (3 === e || 4 === e)
                            return a.nodeValue
                    } else
                        for (; b = a[d++];)
                            c += x(b);
                    return c
                }
                ,
                w = b.selectors = {
                    cacheLength: 50,
                    createPseudo: d,
                    match: oa,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return a[1] = a[1].replace(va, wa),
                                a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
                                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                                a.slice(0, 4)
                        },
                        CHILD: function (a) {
                            return a[1] = a[1].toLowerCase(),
                                "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                                a
                        },
                        PSEUDO: function (a) {
                            var b, c = !a[6] && a[2];
                            return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                                a[2] = c.slice(0, b)),
                                a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(va, wa).toLowerCase();
                            return "*" === a ? function () {
                                return !0
                            }
                                : function (a) {
                                    return a.nodeName && a.nodeName.toLowerCase() === b
                                }
                        },
                        CLASS: function (a) {
                            var b = R[a + " "];
                            return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (a, c, d) {
                            return function (e) {
                                var f = b.attr(e, a);
                                return null == f ? "!=" === c : c ? (f += "",
                                    "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                            }
                        },
                        CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3)
                                , g = "last" !== a.slice(-4)
                                , h = "of-type" === b;
                            return 1 === d && 0 === e ? function (a) {
                                return !!a.parentNode
                            }
                                : function (b, c, i) {
                                    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                    if (q) {
                                        if (f) {
                                            for (; p;) {
                                                for (l = b; l = l[p];)
                                                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                        return !1;
                                                o = p = "only" === a && !o && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (o = [g ? q.firstChild : q.lastChild],
                                            g && s) {
                                            for (k = q[N] || (q[N] = {}),
                                                j = k[a] || [],
                                                n = j[0] === P && j[1],
                                                m = j[0] === P && j[2],
                                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                                if (1 === l.nodeType && ++m && l === b) {
                                                    k[a] = [P, n, m];
                                                    break
                                                }
                                        } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                            m = j[1];
                                        else
                                            for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                                l !== b));)
                                                ;
                                        return m -= e,
                                            m === d || m % d === 0 && m / d >= 0
                                    }
                                }
                        },
                        PSEUDO: function (a, c) {
                            var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                                w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                                    for (var d, e = f(a, c), g = e.length; g--;)
                                        d = ba.call(a, e[g]),
                                            a[d] = !(b[d] = e[g])
                                }) : function (a) {
                                    return f(a, 0, e)
                                }
                            ) : f
                        }
                    },
                    pseudos: {
                        not: d(function (a) {
                            var b = []
                                , c = []
                                , e = A(a.replace(ia, "$1"));
                            return e[N] ? d(function (a, b, c, d) {
                                for (var f, g = e(a, null, d, []), h = a.length; h--;)
                                    (f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function (a, d, f) {
                                return b[0] = a,
                                    e(b, null, f, c),
                                    !c.pop()
                            }
                        }),
                        has: d(function (a) {
                            return function (c) {
                                return b(a, c).length > 0
                            }
                        }),
                        contains: d(function (a) {
                            return function (b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                        }),
                        lang: d(function (a) {
                            return na.test(a || "") || b.error("unsupported lang: " + a),
                                a = a.replace(va, wa).toLowerCase(),
                                function (b) {
                                    var c;
                                    do
                                        if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                            return c = c.toLowerCase(),
                                                c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType); return !1
                                }
                        }),
                        target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function (a) {
                            return a === H
                        },
                        focus: function (a) {
                            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function (a) {
                            return a.disabled === !1
                        },
                        disabled: function (a) {
                            return a.disabled === !0
                        },
                        checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex,
                                a.selected === !0
                        },
                        empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function (a) {
                            return !w.pseudos.empty(a)
                        },
                        header: function (a) {
                            return qa.test(a.nodeName)
                        },
                        input: function (a) {
                            return pa.test(a.nodeName)
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        },
                        first: j(function () {
                            return [0]
                        }),
                        last: j(function (a, b) {
                            return [b - 1]
                        }),
                        eq: j(function (a, b, c) {
                            return [0 > c ? c + b : c];
                        }),
                        even: j(function (a, b) {
                            for (var c = 0; b > c; c += 2)
                                a.push(c);
                            return a
                        }),
                        odd: j(function (a, b) {
                            for (var c = 1; b > c; c += 2)
                                a.push(c);
                            return a
                        }),
                        lt: j(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0;)
                                a.push(d);
                            return a
                        }),
                        gt: j(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b;)
                                a.push(d);
                            return a
                        })
                    }
                },
                w.pseudos.nth = w.pseudos.eq;
            for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                w.pseudos[u] = h(u);
            for (u in {
                submit: !0,
                reset: !0
            })
                w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos,
                w.setFilters = new l,
                z = b.tokenize = function (a, c) {
                    var d, e, f, g, h, i, j, k = S[a + " "];
                    if (k)
                        return c ? 0 : k.slice(0);
                    for (h = a,
                        i = [],
                        j = w.preFilter; h;) {
                        (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                            i.push(f = [])),
                            d = !1,
                            (e = ka.exec(h)) && (d = e.shift(),
                                f.push({
                                    value: d,
                                    type: e[0].replace(ia, " ")
                                }),
                                h = h.slice(d.length));
                        for (g in w.filter)
                            !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                                f.push({
                                    value: d,
                                    type: g,
                                    matches: e
                                }),
                                h = h.slice(d.length));
                        if (!d)
                            break
                    }
                    return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
                }
                ,
                A = b.compile = function (a, b) {
                    var c, d = [], e = [], f = T[a + " "];
                    if (!f) {
                        for (b || (b = z(a)),
                            c = b.length; c--;)
                            f = s(b[c]),
                                f[N] ? d.push(f) : e.push(f);
                        f = T(a, t(e, d)),
                            f.selector = a
                    }
                    return f
                }
                ,
                B = b.select = function (a, b, c, d) {
                    var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                    if (c = c || [],
                        1 === l.length) {
                        if (f = l[0] = l[0].slice(0),
                            f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                            if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0],
                                !b)
                                return c;
                            j && (b = b.parentNode),
                                a = a.slice(f.shift().value.length)
                        }
                        for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                            !w.relative[h = g.type]);)
                            if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                                if (f.splice(e, 1),
                                    a = d.length && m(f),
                                    !a)
                                    return _.apply(c, d),
                                        c;
                                break
                            }
                    }
                    return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
                        c
                }
                ,
                v.sortStable = N.split("").sort(U).join("") === N,
                v.detectDuplicates = !!E,
                F(),
                v.sortDetached = e(function (a) {
                    return 1 & a.compareDocumentPosition(G.createElement("div"))
                }),
                e(function (a) {
                    return a.innerHTML = "<a href='#'></a>",
                        "#" === a.firstChild.getAttribute("href")
                }) || f("type|href|height|width", function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }),
                v.attributes && e(function (a) {
                    return a.innerHTML = "<input/>",
                        a.firstChild.setAttribute("value", ""),
                        "" === a.firstChild.getAttribute("value")
                }) || f("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }),
                e(function (a) {
                    return null == a.getAttribute("disabled")
                }) || f(ca, function (a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }),
                b
        }(a);
        ea.find = ja,
            ea.expr = ja.selectors,
            ea.expr[":"] = ea.expr.pseudos,
            ea.unique = ja.uniqueSort,
            ea.text = ja.getText,
            ea.isXMLDoc = ja.isXML,
            ea.contains = ja.contains;
        var ka = ea.expr.match.needsContext
            , la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
            , ma = /^.[^:#\[\.,]*$/;
        ea.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
                1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function (a) {
                    return 1 === a.nodeType
                }))
        }
            ,
            ea.fn.extend({
                find: function (a) {
                    var b, c = [], d = this, e = d.length;
                    if ("string" != typeof a)
                        return this.pushStack(ea(a).filter(function () {
                            for (b = 0; e > b; b++)
                                if (ea.contains(d[b], this))
                                    return !0
                        }));
                    for (b = 0; e > b; b++)
                        ea.find(a, d[b], c);
                    return c = this.pushStack(e > 1 ? ea.unique(c) : c),
                        c.selector = this.selector ? this.selector + " " + a : a,
                        c
                },
                filter: function (a) {
                    return this.pushStack(d(this, a || [], !1))
                },
                not: function (a) {
                    return this.pushStack(d(this, a || [], !0))
                },
                is: function (a) {
                    return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
                }
            });
        var na, oa = a.document, pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qa = ea.fn.init = function (a, b) {
            var c, d;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a),
                    !c || !c[1] && b)
                    return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof ea ? b[0] : b,
                        ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)),
                        la.test(c[1]) && ea.isPlainObject(b))
                        for (c in b)
                            ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = oa.getElementById(c[2]),
                    d && d.parentNode) {
                    if (d.id !== c[2])
                        return na.find(a);
                    this.length = 1,
                        this[0] = d
                }
                return this.context = oa,
                    this.selector = a,
                    this
            }
            return a.nodeType ? (this.context = this[0] = a,
                this.length = 1,
                this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector,
                    this.context = a.context),
                    ea.makeArray(a, this))
        }
            ;
        qa.prototype = ea.fn,
            na = ea(oa);
        var ra = /^(?:parents|prev(?:Until|All))/
            , sa = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ea.extend({
            dir: function (a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));)
                    1 === e.nodeType && d.push(e),
                        e = e[b];
                return d
            },
            sibling: function (a, b) {
                for (var c = []; a; a = a.nextSibling)
                    1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }),
            ea.fn.extend({
                has: function (a) {
                    var b, c = ea(a, this), d = c.length;
                    return this.filter(function () {
                        for (b = 0; d > b; b++)
                            if (ea.contains(this, c[b]))
                                return !0
                    })
                },
                closest: function (a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                    return this.pushStack(f.length > 1 ? ea.unique(f) : f)
                },
                index: function (a) {
                    return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (a, b) {
                    return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
                },
                addBack: function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            }),
            ea.each({
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                },
                parents: function (a) {
                    return ea.dir(a, "parentNode")
                },
                parentsUntil: function (a, b, c) {
                    return ea.dir(a, "parentNode", c)
                },
                next: function (a) {
                    return e(a, "nextSibling")
                },
                prev: function (a) {
                    return e(a, "previousSibling")
                },
                nextAll: function (a) {
                    return ea.dir(a, "nextSibling")
                },
                prevAll: function (a) {
                    return ea.dir(a, "previousSibling")
                },
                nextUntil: function (a, b, c) {
                    return ea.dir(a, "nextSibling", c)
                },
                prevUntil: function (a, b, c) {
                    return ea.dir(a, "previousSibling", c)
                },
                siblings: function (a) {
                    return ea.sibling((a.parentNode || {}).firstChild, a)
                },
                children: function (a) {
                    return ea.sibling(a.firstChild)
                },
                contents: function (a) {
                    return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
                }
            }, function (a, b) {
                ea.fn[a] = function (c, d) {
                    var e = ea.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c),
                        d && "string" == typeof d && (e = ea.filter(d, e)),
                        this.length > 1 && (sa[a] || (e = ea.unique(e)),
                            ra.test(a) && (e = e.reverse())),
                        this.pushStack(e)
                }
            });
        var ta = /\S+/g
            , ua = {};
        ea.Callbacks = function (a) {
            a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
            var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
                for (c = a.memory && f,
                    d = !0,
                    g = h || 0,
                    h = 0,
                    e = i.length,
                    b = !0; i && e > g; g++)
                    if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1,
                    i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            }, l = {
                add: function () {
                    if (i) {
                        var d = i.length;
                        !function f(b) {
                            ea.each(b, function (b, c) {
                                var d = ea.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments),
                            b ? e = i.length : c && (h = d,
                                k(c))
                    }
                    return this
                },
                remove: function () {
                    return i && ea.each(arguments, function (a, c) {
                        for (var d; (d = ea.inArray(c, i, d)) > -1;)
                            i.splice(d, 1),
                                b && (e >= d && e-- ,
                                    g >= d && g--)
                    }),
                        this
                },
                has: function (a) {
                    return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function () {
                    return i = [],
                        e = 0,
                        this
                },
                disable: function () {
                    return i = j = c = void 0,
                        this
                },
                disabled: function () {
                    return !i
                },
                lock: function () {
                    return j = void 0,
                        c || l.disable(),
                        this
                },
                locked: function () {
                    return !j
                },
                fireWith: function (a, c) {
                    return !i || d && !j || (c = c || [],
                        c = [a, c.slice ? c.slice() : c],
                        b ? j.push(c) : k(c)),
                        this
                },
                fire: function () {
                    return l.fireWith(this, arguments),
                        this
                },
                fired: function () {
                    return !!d
                }
            };
            return l
        }
            ,
            ea.extend({
                Deferred: function (a) {
                    var b = [["resolve", "done", ea.Callbacks("once memory"), "resolved"], ["reject", "fail", ea.Callbacks("once memory"), "rejected"], ["notify", "progress", ea.Callbacks("memory")]]
                        , c = "pending"
                        , d = {
                            state: function () {
                                return c
                            },
                            always: function () {
                                return e.done(arguments).fail(arguments),
                                    this
                            },
                            then: function () {
                                var a = arguments;
                                return ea.Deferred(function (c) {
                                    ea.each(b, function (b, f) {
                                        var g = ea.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                        })
                                    }),
                                        a = null
                                }).promise()
                            },
                            promise: function (a) {
                                return null != a ? ea.extend(a, d) : d
                            }
                        }
                        , e = {};
                    return d.pipe = d.then,
                        ea.each(b, function (a, f) {
                            var g = f[2]
                                , h = f[3];
                            d[f[1]] = g.add,
                                h && g.add(function () {
                                    c = h
                                }, b[1 ^ a][2].disable, b[2][2].lock),
                                e[f[0]] = function () {
                                    return e[f[0] + "With"](this === e ? d : this, arguments),
                                        this
                                }
                                ,
                                e[f[0] + "With"] = g.fireWith
                        }),
                        d.promise(e),
                        a && a.call(e, e),
                        e
                },
                when: function (a) {
                    var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ea.Deferred(), j = function (a, c, d) {
                        return function (e) {
                            c[a] = this,
                                d[a] = arguments.length > 1 ? X.call(arguments) : e,
                                d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                    if (g > 1)
                        for (b = new Array(g),
                            c = new Array(g),
                            d = new Array(g); g > e; e++)
                            f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                    return h || i.resolveWith(d, f),
                        i.promise()
                }
            });
        var va;
        ea.fn.ready = function (a) {
            return ea.ready.promise().done(a),
                this
        }
            ,
            ea.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? ea.readyWait++ : ea.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                        if (!oa.body)
                            return setTimeout(ea.ready);
                        ea.isReady = !0,
                            a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]),
                                ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"),
                                    ea(oa).off("ready")))
                    }
                }
            }),
            ea.ready.promise = function (b) {
                if (!va)
                    if (va = ea.Deferred(),
                        "complete" === oa.readyState)
                        setTimeout(ea.ready);
                    else if (oa.addEventListener)
                        oa.addEventListener("DOMContentLoaded", h, !1),
                            a.addEventListener("load", h, !1);
                    else {
                        oa.attachEvent("onreadystatechange", h),
                            a.attachEvent("onload", h);
                        var c = !1;
                        try {
                            c = null == a.frameElement && oa.documentElement
                        } catch (d) { }
                        c && c.doScroll && !function e() {
                            if (!ea.isReady) {
                                try {
                                    c.doScroll("left")
                                } catch (a) {
                                    return setTimeout(e, 50)
                                }
                                g(),
                                    ea.ready()
                            }
                        }()
                    }
                return va.promise(b)
            }
            ;
        var wa, xa = "undefined";
        for (wa in ea(ca))
            break;
        ca.ownLast = "0" !== wa,
            ca.inlineBlockNeedsLayout = !1,
            ea(function () {
                var a, b, c, d;
                c = oa.getElementsByTagName("body")[0],
                    c && c.style && (b = oa.createElement("div"),
                        d = oa.createElement("div"),
                        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        c.appendChild(d).appendChild(b),
                        typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
                            a && (c.style.zoom = 1)),
                        c.removeChild(d))
            }),
            function () {
                var a = oa.createElement("div");
                if (null == ca.deleteExpando) {
                    ca.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        ca.deleteExpando = !1
                    }
                }
                a = null
            }(),
            ea.acceptData = function (a) {
                var b = ea.noData[(a.nodeName + " ").toLowerCase()]
                    , c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            }
            ;
        var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
            , za = /([A-Z])/g;
        ea.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (a) {
                return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando],
                    !!a && !j(a)
            },
            data: function (a, b, c) {
                return k(a, b, c)
            },
            removeData: function (a, b) {
                return l(a, b)
            },
            _data: function (a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return l(a, b, !0)
            }
        }),
            ea.fn.extend({
                data: function (a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = ea.data(f),
                            1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                            for (c = g.length; c--;)
                                g[c] && (d = g[c].name,
                                    0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)),
                                        i(f, d, e[d])));
                            ea._data(f, "parsedAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function () {
                        ea.data(this, a)
                    }) : arguments.length > 1 ? this.each(function () {
                        ea.data(this, a, b)
                    }) : f ? i(f, a, ea.data(f, a)) : void 0
                },
                removeData: function (a) {
                    return this.each(function () {
                        ea.removeData(this, a)
                    })
                }
            }),
            ea.extend({
                queue: function (a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue",
                        d = ea._data(a, b),
                        c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)),
                        d || []) : void 0
                },
                dequeue: function (a, b) {
                    b = b || "fx";
                    var c = ea.queue(a, b)
                        , d = c.length
                        , e = c.shift()
                        , f = ea._queueHooks(a, b)
                        , g = function () {
                            ea.dequeue(a, b)
                        };
                    "inprogress" === e && (e = c.shift(),
                        d--),
                        e && ("fx" === b && c.unshift("inprogress"),
                            delete f.stop,
                            e.call(a, g, f)),
                        !d && f && f.empty.fire()
                },
                _queueHooks: function (a, b) {
                    var c = b + "queueHooks";
                    return ea._data(a, c) || ea._data(a, c, {
                        empty: ea.Callbacks("once memory").add(function () {
                            ea._removeData(a, b + "queue"),
                                ea._removeData(a, c)
                        })
                    })
                }
            }),
            ea.fn.extend({
                queue: function (a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a,
                        a = "fx",
                        c--),
                        arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                            var c = ea.queue(this, a, b);
                            ea._queueHooks(this, a),
                                "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
                        })
                },
                dequeue: function (a) {
                    return this.each(function () {
                        ea.dequeue(this, a)
                    })
                },
                clearQueue: function (a) {
                    return this.queue(a || "fx", [])
                },
                promise: function (a, b) {
                    var c, d = 1, e = ea.Deferred(), f = this, g = this.length, h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                    for ("string" != typeof a && (b = a,
                        a = void 0),
                        a = a || "fx"; g--;)
                        c = ea._data(f[g], a + "queueHooks"),
                            c && c.empty && (d++ ,
                                c.empty.add(h));
                    return h(),
                        e.promise(b)
                }
            });
        var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
            , Ba = ["Top", "Right", "Bottom", "Left"]
            , Ca = function (a, b) {
                return a = b || a,
                    "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
            }
            , Da = ea.access = function (a, b, c, d, e, f, g) {
                var h = 0
                    , i = a.length
                    , j = null == c;
                if ("object" === ea.type(c)) {
                    e = !0;
                    for (h in c)
                        ea.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0,
                    ea.isFunction(d) || (g = !0),
                    j && (g ? (b.call(a, d),
                        b = null) : (j = b,
                            b = function (a, b, c) {
                                return j.call(ea(a), c)
                            }
                        )),
                    b))
                    for (; i > h; h++)
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            }
            , Ea = /^(?:checkbox|radio)$/i;
        !function () {
            var a = oa.createElement("input")
                , b = oa.createElement("div")
                , c = oa.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                ca.leadingWhitespace = 3 === b.firstChild.nodeType,
                ca.tbody = !b.getElementsByTagName("tbody").length,
                ca.htmlSerialize = !!b.getElementsByTagName("link").length,
                ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML,
                a.type = "checkbox",
                a.checked = !0,
                c.appendChild(a),
                ca.appendChecked = a.checked,
                b.innerHTML = "<textarea>x</textarea>",
                ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
                c.appendChild(b),
                b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                ca.noCloneEvent = !0,
                b.attachEvent && (b.attachEvent("onclick", function () {
                    ca.noCloneEvent = !1
                }),
                    b.cloneNode(!0).click()),
                null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    ca.deleteExpando = !1
                }
            }
        }(),
            function () {
                var b, c, d = oa.createElement("div");
                for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    c = "on" + b,
                        (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
                            ca[b + "Bubbles"] = d.attributes[c].expando === !1);
                d = null
            }();
        var Fa = /^(?:input|select|textarea)$/i
            , Ga = /^key/
            , Ha = /^(?:mouse|pointer|contextmenu)|click/
            , Ia = /^(?:focusinfocus|focusoutblur)$/
            , Ja = /^([^.]*)(?:\.(.+)|)$/;
        ea.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
                if (q) {
                    for (c.handler && (i = c,
                        c = i.handler,
                        e = i.selector),
                        c.guid || (c.guid = ea.guid++),
                        (g = q.events) || (g = q.events = {}),
                        (k = q.handle) || (k = q.handle = function (a) {
                            return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                        }
                            ,
                            k.elem = a),
                        b = (b || "").match(ta) || [""],
                        h = b.length; h--;)
                        f = Ja.exec(b[h]) || [],
                            n = p = f[1],
                            o = (f[2] || "").split(".").sort(),
                            n && (j = ea.event.special[n] || {},
                                n = (e ? j.delegateType : j.bindType) || n,
                                j = ea.event.special[n] || {},
                                l = ea.extend({
                                    type: n,
                                    origType: p,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext: e && ea.expr.match.needsContext.test(e),
                                    namespace: o.join(".")
                                }, i),
                                (m = g[n]) || (m = g[n] = [],
                                    m.delegateCount = 0,
                                    j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                                j.add && (j.add.call(a, l),
                                    l.handler.guid || (l.handler.guid = c.guid)),
                                e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                                ea.event.global[n] = !0);
                    a = null
                }
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ta) || [""],
                        j = b.length; j--;)
                        if (h = Ja.exec(b[j]) || [],
                            n = p = h[1],
                            o = (h[2] || "").split(".").sort(),
                            n) {
                            for (l = ea.event.special[n] || {},
                                n = (d ? l.delegateType : l.bindType) || n,
                                m = k[n] || [],
                                h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                i = f = m.length; f--;)
                                g = m[f],
                                    !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                                        g.selector && m.delegateCount-- ,
                                        l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle),
                                delete k[n])
                        } else
                            for (n in k)
                                ea.event.remove(a, n + b[j], c, d, !0);
                    ea.isEmptyObject(k) && (delete q.handle,
                        ea._removeData(a, "events"))
                }
            },
            trigger: function (b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || oa], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || oa,
                    3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
                        n = o.shift(),
                        o.sort()),
                        g = n.indexOf(":") < 0 && "on" + n,
                        b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b),
                        b.isTrigger = e ? 2 : 3,
                        b.namespace = o.join("."),
                        b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        b.result = void 0,
                        b.target || (b.target = d),
                        c = null == c ? [b] : ea.makeArray(c, [b]),
                        j = ea.event.special[n] || {},
                        e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !ea.isWindow(d)) {
                        for (i = j.delegateType || n,
                            Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                            m.push(h),
                                k = h;
                        k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0; (h = m[l++]) && !b.isPropagationStopped();)
                        b.type = l > 1 ? i : j.bindType || n,
                            f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"),
                            f && f.apply(h, c),
                            f = g && h[g],
                            f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c),
                                b.result === !1 && b.preventDefault());
                    if (b.type = n,
                        !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                        k = d[g],
                            k && (d[g] = null),
                            ea.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) { }
                        ea.event.triggered = void 0,
                            k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function (a) {
                a = ea.event.fix(a);
                var b, c, d, e, f, g = [], h = X.call(arguments), i = (ea._data(this, "events") || {})[a.type] || [], j = ea.event.special[a.type] || {};
                if (h[0] = a,
                    a.delegateTarget = this,
                    !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = ea.event.handlers.call(this, a, i),
                        b = 0; (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem,
                            f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)
                            (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d,
                                a.data = d.data,
                                c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h),
                                void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                                    a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a),
                        a.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [],
                                f = 0; h > f; f++)
                                d = b[f],
                                    c = d.selector + " ",
                                    void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length),
                                    e[c] && e.push(d);
                            e.length && g.push({
                                elem: i,
                                handlers: e
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }),
                    g
            },
            fix: function (a) {
                if (a[ea.expando])
                    return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}),
                    d = g.props ? this.props.concat(g.props) : this.props,
                    a = new ea.Event(f),
                    b = d.length; b--;)
                    c = d[b],
                        a[c] = f[c];
                return a.target || (a.target = f.srcElement || oa),
                    3 === a.target.nodeType && (a.target = a.target.parentNode),
                    a.metaKey = !!a.metaKey,
                    g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                        a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, b) {
                    var c, d, e, f = b.button, g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa,
                        e = d.documentElement,
                        c = d.body,
                        a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                        a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                        !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                        a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== o() && this.focus)
                            try {
                                return this.focus(),
                                    !1
                            } catch (a) { }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === o() && this.blur ? (this.blur(),
                            !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                            !1) : void 0
                    },
                    _default: function (a) {
                        return ea.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function (a, b, c, d) {
                var e = ea.extend(new ea.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e),
                    e.isDefaultPrevented() && c.preventDefault()
            }
        },
            ea.removeEvent = oa.removeEventListener ? function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            }
                : function (a, b, c) {
                    var d = "on" + b;
                    a.detachEvent && (typeof a[d] === xa && (a[d] = null),
                        a.detachEvent(d, c))
                }
            ,
            ea.Event = function (a, b) {
                return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a,
                    this.type = a.type,
                    this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a,
                    b && ea.extend(this, b),
                    this.timeStamp = a && a.timeStamp || ea.now(),
                    void (this[ea.expando] = !0)) : new ea.Event(a, b)
            }
            ,
            ea.Event.prototype = {
                isDefaultPrevented: n,
                isPropagationStopped: n,
                isImmediatePropagationStopped: n,
                preventDefault: function () {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = m,
                        a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                },
                stopPropagation: function () {
                    var a = this.originalEvent;
                    this.isPropagationStopped = m,
                        a && (a.stopPropagation && a.stopPropagation(),
                            a.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = m,
                        a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                        this.stopPropagation()
                }
            },
            ea.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (a, b) {
                ea.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType,
                            c = f.handler.apply(this, arguments),
                            a.type = b),
                            c
                    }
                }
            }),
            ca.submitBubbles || (ea.event.special.submit = {
                setup: function () {
                    return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function (a) {
                        var b = a.target
                            , c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                        c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function (a) {
                            a._submit_bubble = !0
                        }),
                            ea._data(c, "submitBubbles", !0))
                    })
                },
                postDispatch: function (a) {
                    a._submit_bubble && (delete a._submit_bubble,
                        this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
                },
                teardown: function () {
                    return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit")
                }
            }),
            ca.changeBubbles || (ea.event.special.change = {
                setup: function () {
                    return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function (a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                        ea.event.add(this, "click._change", function (a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1),
                                ea.event.simulate("change", this, a, !0)
                        })),
                        !1) : void ea.event.add(this, "beforeactivate._change", function (a) {
                            var b = a.target;
                            Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function (a) {
                                !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                            }),
                                ea._data(b, "changeBubbles", !0))
                        })
                },
                handle: function (a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function () {
                    return ea.event.remove(this, "._change"),
                        !Fa.test(this.nodeName)
                }
            }),
            ca.focusinBubbles || ea.each({
                focus: "focusin",
                blur: "focusout"
            }, function (a, b) {
                var c = function (a) {
                    ea.event.simulate(b, a.target, ea.event.fix(a), !0)
                };
                ea.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this
                            , e = ea._data(d, b);
                        e || d.addEventListener(a, c, !0),
                            ea._data(d, b, (e || 0) + 1)
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this
                            , e = ea._data(d, b) - 1;
                        e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0),
                            ea._removeData(d, b))
                    }
                }
            }),
            ea.fn.extend({
                on: function (a, b, c, d, e) {
                    var f, g;
                    if ("object" == typeof a) {
                        "string" != typeof b && (c = c || b,
                            b = void 0);
                        for (f in a)
                            this.on(f, b, c, a[f], e);
                        return this
                    }
                    if (null == c && null == d ? (d = b,
                        c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
                            c = void 0) : (d = c,
                                c = b,
                                b = void 0)),
                        d === !1)
                        d = n;
                    else if (!d)
                        return this;
                    return 1 === e && (g = d,
                        d = function (a) {
                            return ea().off(a),
                                g.apply(this, arguments)
                        }
                        ,
                        d.guid = g.guid || (g.guid = ea.guid++)),
                        this.each(function () {
                            ea.event.add(this, a, d, c, b)
                        })
                },
                one: function (a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                },
                off: function (a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)
                        return d = a.handleObj,
                            ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                            this;
                    if ("object" == typeof a) {
                        for (e in a)
                            this.off(e, b, a[e]);
                        return this
                    }
                    return (b === !1 || "function" == typeof b) && (c = b,
                        b = void 0),
                        c === !1 && (c = n),
                        this.each(function () {
                            ea.event.remove(this, a, c, b)
                        })
                },
                trigger: function (a, b) {
                    return this.each(function () {
                        ea.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function (a, b) {
                    var c = this[0];
                    return c ? ea.event.trigger(a, b, c, !0) : void 0
                }
            });
        var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
            , La = / jQuery\d+="(?:null|\d+)"/g
            , Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i")
            , Na = /^\s+/
            , Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
            , Pa = /<([\w:]+)/
            , Qa = /<tbody/i
            , Ra = /<|&#?\w+;/
            , Sa = /<(?:script|style|link)/i
            , Ta = /checked\s*(?:[^=]|=\s*.checked.)/i
            , Ua = /^$|\/(?:java|ecma)script/i
            , Va = /^true\/(.*)/
            , Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            , Xa = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }
            , Ya = p(oa)
            , Za = Ya.appendChild(oa.createElement("div"));
        Xa.optgroup = Xa.option,
            Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead,
            Xa.th = Xa.td,
            ea.extend({
                clone: function (a, b, c) {
                    var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
                    if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML,
                        Za.removeChild(f = Za.firstChild)),
                        !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                        for (d = q(f),
                            h = q(a),
                            g = 0; null != (e = h[g]); ++g)
                            d[g] && x(e, d[g]);
                    if (b)
                        if (c)
                            for (h = h || q(a),
                                d = d || q(f),
                                g = 0; null != (e = h[g]); g++)
                                w(e, d[g]);
                        else
                            w(a, f);
                    return d = q(f, "script"),
                        d.length > 0 && v(d, !i && q(a, "script")),
                        d = h = e = null,
                        f
                },
                buildFragment: function (a, b, c, d) {
                    for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                        if (f = a[o],
                            f || 0 === f)
                            if ("object" === ea.type(f))
                                ea.merge(n, f.nodeType ? [f] : f);
                            else if (Ra.test(f)) {
                                for (h = h || m.appendChild(b.createElement("div")),
                                    i = (Pa.exec(f) || ["", ""])[1].toLowerCase(),
                                    k = Xa[i] || Xa._default,
                                    h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2],
                                    e = k[0]; e--;)
                                    h = h.lastChild;
                                if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])),
                                    !ca.tbody)
                                    for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild,
                                        e = f && f.childNodes.length; e--;)
                                        ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                                for (ea.merge(n, h.childNodes),
                                    h.textContent = ""; h.firstChild;)
                                    h.removeChild(h.firstChild);
                                h = m.lastChild
                            } else
                                n.push(b.createTextNode(f));
                    for (h && m.removeChild(h),
                        ca.appendChecked || ea.grep(q(n, "input"), r),
                        o = 0; f = n[o++];)
                        if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f),
                            h = q(m.appendChild(f), "script"),
                            g && v(h),
                            c))
                            for (e = 0; f = h[e++];)
                                Ua.test(f.type || "") && c.push(f);
                    return h = null,
                        m
                },
                cleanData: function (a, b) {
                    for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                        if ((b || ea.acceptData(c)) && (e = c[h],
                            f = e && i[e])) {
                            if (f.events)
                                for (d in f.events)
                                    k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                            i[e] && (delete i[e],
                                j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null,
                                W.push(e))
                        }
                }
            }),
            ea.fn.extend({
                text: function (a) {
                    return Da(this, function (a) {
                        return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
                    }, null, a, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = s(this, a);
                            b.appendChild(a)
                        }
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = s(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                },
                remove: function (a, b) {
                    for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                        b || 1 !== c.nodeType || ea.cleanData(q(c)),
                            c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")),
                                c.parentNode.removeChild(c));
                    return this
                },
                empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++) {
                        for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;)
                            a.removeChild(a.firstChild);
                        a.options && ea.nodeName(a, "select") && (a.options.length = 0)
                    }
                    return this
                },
                clone: function (a, b) {
                    return a = null == a ? !1 : a,
                        b = null == b ? a : b,
                        this.map(function () {
                            return ea.clone(this, a, b)
                        })
                },
                html: function (a) {
                    return Da(this, function (a) {
                        var b = this[0] || {}
                            , c = 0
                            , d = this.length;
                        if (void 0 === a)
                            return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                        if ("string" == typeof a && !Sa.test(a) && (ca.htmlSerialize || !Ma.test(a)) && (ca.leadingWhitespace || !Na.test(a)) && !Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(Oa, "<$1></$2>");
                            try {
                                for (; d > c; c++)
                                    b = this[c] || {},
                                        1 === b.nodeType && (ea.cleanData(q(b, !1)),
                                            b.innerHTML = a);
                                b = 0
                            } catch (e) { }
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                },
                replaceWith: function () {
                    var a = arguments[0];
                    return this.domManip(arguments, function (b) {
                        a = this.parentNode,
                            ea.cleanData(q(this)),
                            a && a.replaceChild(b, this)
                    }),
                        a && (a.length || a.nodeType) ? this : this.remove()
                },
                detach: function (a) {
                    return this.remove(a, !0)
                },
                domManip: function (a, b) {
                    a = Y.apply([], a);
                    var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = ea.isFunction(m);
                    if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m))
                        return this.each(function (c) {
                            var d = k.eq(c);
                            n && (a[0] = m.call(this, c, d.html())),
                                d.domManip(a, b)
                        });
                    if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this),
                        c = h.firstChild,
                        1 === h.childNodes.length && (h = c),
                        c)) {
                        for (f = ea.map(q(h, "script"), t),
                            e = f.length; j > i; i++)
                            d = h,
                                i !== l && (d = ea.clone(d, !0, !0),
                                    e && ea.merge(f, q(d, "script"))),
                                b.call(this[i], d, i);
                        if (e)
                            for (g = f[f.length - 1].ownerDocument,
                                ea.map(f, u),
                                i = 0; e > i; i++)
                                d = f[i],
                                    Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                        h = c = null
                    }
                    return this
                }
            }),
            ea.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                ea.fn[a] = function (a) {
                    for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++)
                        c = d === g ? this : this.clone(!0),
                            ea(f[d])[b](c),
                            Z.apply(e, c.get());
                    return this.pushStack(e)
                }
            });
        var $a, _a = {};
        !function () {
            var a;
            ca.shrinkWrapBlocks = function () {
                if (null != a)
                    return a;
                a = !1;
                var b, c, d;
                return c = oa.getElementsByTagName("body")[0],
                    c && c.style ? (b = oa.createElement("div"),
                        d = oa.createElement("div"),
                        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        c.appendChild(d).appendChild(b),
                        typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            b.appendChild(oa.createElement("div")).style.width = "5px",
                            a = 3 !== b.offsetWidth),
                        c.removeChild(d),
                        a) : void 0
            }
        }();
        var ab, bb, cb = /^margin/, db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"), eb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ab = function (a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        }
            ,
            bb = function (a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ab(a),
                    g = c ? c.getPropertyValue(b) || c[b] : void 0,
                    c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)),
                        db.test(g) && cb.test(b) && (d = h.width,
                            e = h.minWidth,
                            f = h.maxWidth,
                            h.minWidth = h.maxWidth = h.width = g,
                            g = c.width,
                            h.width = d,
                            h.minWidth = e,
                            h.maxWidth = f)),
                    void 0 === g ? g : g + ""
            }
        ) : oa.documentElement.currentStyle && (ab = function (a) {
            return a.currentStyle
        }
            ,
            bb = function (a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ab(a),
                    g = c ? c[b] : void 0,
                    null == g && h && h[b] && (g = h[b]),
                    db.test(g) && !eb.test(b) && (d = h.left,
                        e = a.runtimeStyle,
                        f = e && e.left,
                        f && (e.left = a.currentStyle.left),
                        h.left = "fontSize" === b ? "1em" : g,
                        g = h.pixelLeft + "px",
                        h.left = d,
                        f && (e.left = f)),
                    void 0 === g ? g : g + "" || "auto"
            }
        ),
            function () {
                function b() {
                    var b, c, d, e;
                    c = oa.getElementsByTagName("body")[0],
                        c && c.style && (b = oa.createElement("div"),
                            d = oa.createElement("div"),
                            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                            c.appendChild(d).appendChild(b),
                            b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                            f = g = !1,
                            i = !0,
                            a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top,
                                g = "4px" === (a.getComputedStyle(b, null) || {
                                    width: "4px"
                                }).width,
                                e = b.appendChild(oa.createElement("div")),
                                e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                                e.style.marginRight = e.style.width = "0",
                                b.style.width = "1px",
                                i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)),
                            b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                            e = b.getElementsByTagName("td"),
                            e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                            h = 0 === e[0].offsetHeight,
                            h && (e[0].style.display = "",
                                e[1].style.display = "none",
                                h = 0 === e[0].offsetHeight),
                            c.removeChild(d))
                }
                var c, d, e, f, g, h, i;
                c = oa.createElement("div"),
                    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    e = c.getElementsByTagName("a")[0],
                    d = e && e.style,
                    d && (d.cssText = "float:left;opacity:.5",
                        ca.opacity = "0.5" === d.opacity,
                        ca.cssFloat = !!d.cssFloat,
                        c.style.backgroundClip = "content-box",
                        c.cloneNode(!0).style.backgroundClip = "",
                        ca.clearCloneStyle = "content-box" === c.style.backgroundClip,
                        ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing,
                        ea.extend(ca, {
                            reliableHiddenOffsets: function () {
                                return null == h && b(),
                                    h
                            },
                            boxSizingReliable: function () {
                                return null == g && b(),
                                    g
                            },
                            pixelPosition: function () {
                                return null == f && b(),
                                    f
                            },
                            reliableMarginRight: function () {
                                return null == i && b(),
                                    i
                            }
                        }))
            }(),
            ea.swap = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b)
                    g[f] = a.style[f],
                        a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)
                    a.style[f] = g[f];
                return e
            }
            ;
        var fb = /alpha\([^)]*\)/i
            , gb = /opacity\s*=\s*([^)]*)/
            , hb = /^(none|table(?!-c[ea]).+)/
            , ib = new RegExp("^(" + Aa + ")(.*)$", "i")
            , jb = new RegExp("^([+-])=(" + Aa + ")", "i")
            , kb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
            , lb = {
                letterSpacing: "0",
                fontWeight: "400"
            }
            , mb = ["Webkit", "O", "Moz", "ms"];
        ea.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = bb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ca.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = ea.camelCase(b), i = a.style;
                    if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)),
                        g = ea.cssHooks[b] || ea.cssHooks[h],
                        void 0 === c)
                        return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c,
                        "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)),
                            f = "number"),
                        null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"),
                            ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                        try {
                            i[b] = c
                        } catch (j) { }
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = ea.camelCase(b);
                return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)),
                    g = ea.cssHooks[b] || ea.cssHooks[h],
                    g && "get" in g && (f = g.get(a, !0, c)),
                    void 0 === f && (f = bb(a, b, d)),
                    "normal" === f && b in lb && (f = lb[b]),
                    "" === c || c ? (e = parseFloat(f),
                        c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
            }
        }),
            ea.each(["height", "width"], function (a, b) {
                ea.cssHooks[b] = {
                    get: function (a, c, d) {
                        return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function () {
                            return F(a, b, d)
                        }) : F(a, b, d) : void 0
                    },
                    set: function (a, c, d) {
                        var e = d && ab(a);
                        return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
                    }
                }
            }),
            ca.opacity || (ea.cssHooks.opacity = {
                get: function (a, b) {
                    return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
                },
                set: function (a, b) {
                    var c = a.style
                        , d = a.currentStyle
                        , e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                        , f = d && d.filter || c.filter || "";
                    c.zoom = 1,
                        (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
                            "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
                }
            }),
            ea.cssHooks.marginRight = A(ca.reliableMarginRight, function (a, b) {
                return b ? ea.swap(a, {
                    display: "inline-block"
                }, bb, [a, "marginRight"]) : void 0
            }),
            ea.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (a, b) {
                ea.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                            e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                },
                    cb.test(a) || (ea.cssHooks[a + b].set = D)
            }),
            ea.fn.extend({
                css: function (a, b) {
                    return Da(this, function (a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (ea.isArray(b)) {
                            for (d = ab(a),
                                e = b.length; e > g; g++)
                                f[b[g]] = ea.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
                    }, a, b, arguments.length > 1)
                },
                show: function () {
                    return C(this, !0)
                },
                hide: function () {
                    return C(this)
                },
                toggle: function (a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        Ca(this) ? ea(this).show() : ea(this).hide()
                    })
                }
            }),
            ea.Tween = G,
            G.prototype = {
                constructor: G,
                init: function (a, b, c, d, e, f) {
                    this.elem = a,
                        this.prop = c,
                        this.easing = e || "swing",
                        this.options = b,
                        this.start = this.now = this.cur(),
                        this.end = d,
                        this.unit = f || (ea.cssNumber[c] ? "" : "px")
                },
                cur: function () {
                    var a = G.propHooks[this.prop];
                    return a && a.get ? a.get(this) : G.propHooks._default.get(this)
                },
                run: function (a) {
                    var b, c = G.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                        this.now = (this.end - this.start) * b + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        c && c.set ? c.set(this) : G.propHooks._default.set(this),
                        this
                }
            },
            G.prototype.init.prototype = G.prototype,
            G.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""),
                            b && "auto" !== b ? b : 0) : a.elem[a.prop]
                    },
                    set: function (a) {
                        ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                    }
                }
            },
            G.propHooks.scrollTop = G.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            },
            ea.easing = {
                linear: function (a) {
                    return a
                },
                swing: function (a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }
            },
            ea.fx = G.prototype.init,
            ea.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/, qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"), rb = /queueHooks$/, sb = [K], tb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b)
                    , d = c.cur()
                    , e = qb.exec(b)
                    , f = e && e[3] || (ea.cssNumber[a] ? "" : "px")
                    , g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a))
                    , h = 1
                    , i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3],
                        e = e || [],
                        g = +d || 1;
                    do
                        h = h || ".5",
                            g /= h,
                            ea.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0,
                    c.unit = f,
                    c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                    c
            }
            ]
        };
        ea.Animation = ea.extend(M, {
            tweener: function (a, b) {
                ea.isFunction(a) ? (b = a,
                    a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)
                    c = a[d],
                        tb[c] = tb[c] || [],
                        tb[c].unshift(b)
            },
            prefilter: function (a, b) {
                b ? sb.unshift(a) : sb.push(a)
            }
        }),
            ea.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? ea.extend({}, a) : {
                    complete: c || !c && b || ea.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !ea.isFunction(b) && b
                };
                return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default,
                    (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                    d.old = d.complete,
                    d.complete = function () {
                        ea.isFunction(d.old) && d.old.call(this),
                            d.queue && ea.dequeue(this, d.queue)
                    }
                    ,
                    d
            }
            ,
            ea.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(Ca).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function (a, b, c, d) {
                    var e = ea.isEmptyObject(a)
                        , f = ea.speed(b, c, d)
                        , g = function () {
                            var b = M(this, ea.extend({}, a), f);
                            (e || ea._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g,
                        e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop,
                            b(c)
                    };
                    return "string" != typeof a && (c = b,
                        b = a,
                        a = void 0),
                        b && a !== !1 && this.queue(a || "fx", []),
                        this.each(function () {
                            var b = !0
                                , e = null != a && a + "queueHooks"
                                , f = ea.timers
                                , g = ea._data(this);
                            if (e)
                                g[e] && g[e].stop && d(g[e]);
                            else
                                for (e in g)
                                    g[e] && g[e].stop && rb.test(e) && d(g[e]);
                            for (e = f.length; e--;)
                                f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                    b = !1,
                                    f.splice(e, 1));
                            (b || !c) && ea.dequeue(this, a)
                        })
                },
                finish: function (a) {
                    return a !== !1 && (a = a || "fx"),
                        this.each(function () {
                            var b, c = ea._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ea.timers, g = d ? d.length : 0;
                            for (c.finish = !0,
                                ea.queue(this, a, []),
                                e && e.stop && e.stop.call(this, !0),
                                b = f.length; b--;)
                                f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                    f.splice(b, 1));
                            for (b = 0; g > b; b++)
                                d[b] && d[b].finish && d[b].finish.call(this);
                            delete c.finish
                        })
                }
            }),
            ea.each(["toggle", "show", "hide"], function (a, b) {
                var c = ea.fn[b];
                ea.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
                }
            }),
            ea.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (a, b) {
                ea.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }),
            ea.timers = [],
            ea.fx.tick = function () {
                var a, b = ea.timers, c = 0;
                for (nb = ea.now(); c < b.length; c++)
                    a = b[c],
                        a() || b[c] !== a || b.splice(c--, 1);
                b.length || ea.fx.stop(),
                    nb = void 0
            }
            ,
            ea.fx.timer = function (a) {
                ea.timers.push(a),
                    a() ? ea.fx.start() : ea.timers.pop()
            }
            ,
            ea.fx.interval = 13,
            ea.fx.start = function () {
                ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
            }
            ,
            ea.fx.stop = function () {
                clearInterval(ob),
                    ob = null
            }
            ,
            ea.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ea.fn.delay = function (a, b) {
                return a = ea.fx ? ea.fx.speeds[a] || a : a,
                    b = b || "fx",
                    this.queue(b, function (b, c) {
                        var d = setTimeout(b, a);
                        c.stop = function () {
                            clearTimeout(d)
                        }
                    })
            }
            ,
            function () {
                var a, b, c, d, e;
                b = oa.createElement("div"),
                    b.setAttribute("className", "t"),
                    b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    d = b.getElementsByTagName("a")[0],
                    c = oa.createElement("select"),
                    e = c.appendChild(oa.createElement("option")),
                    a = b.getElementsByTagName("input")[0],
                    d.style.cssText = "top:1px",
                    ca.getSetAttribute = "t" !== b.className,
                    ca.style = /top/.test(d.getAttribute("style")),
                    ca.hrefNormalized = "/a" === d.getAttribute("href"),
                    ca.checkOn = !!a.value,
                    ca.optSelected = e.selected,
                    ca.enctype = !!oa.createElement("form").enctype,
                    c.disabled = !0,
                    ca.optDisabled = !e.disabled,
                    a = oa.createElement("input"),
                    a.setAttribute("value", ""),
                    ca.input = "" === a.getAttribute("value"),
                    a.value = "t",
                    a.setAttribute("type", "radio"),
                    ca.radioValue = "t" === a.value
            }();
        var ub = /\r/g;
        ea.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)
                        return d = ea.isFunction(a),
                            this.each(function (c) {
                                var e;
                                1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a,
                                    null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function (a) {
                                        return null == a ? "" : a + ""
                                    })),
                                    b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()],
                                    b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                            });
                    if (e)
                        return b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()],
                            b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                                "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
                }
            }
        }),
            ea.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b = ea.find.attr(a, "value");
                            return null != b ? b : ea.trim(ea.text(a))
                        }
                    },
                    select: {
                        get: function (a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                if (c = d[i],
                                    (c.selected || i === e) && (ca.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ea.nodeName(c.parentNode, "optgroup"))) {
                                    if (b = ea(c).val(),
                                        f)
                                        return b;
                                    g.push(b)
                                }
                            return g
                        },
                        set: function (a, b) {
                            for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                                if (d = e[g],
                                    ea.inArray(ea.valHooks.option.get(d), f) >= 0)
                                    try {
                                        d.selected = c = !0
                                    } catch (h) {
                                        d.scrollHeight
                                    }
                                else
                                    d.selected = !1;
                            return c || (a.selectedIndex = -1),
                                e
                        }
                    }
                }
            }),
            ea.each(["radio", "checkbox"], function () {
                ea.valHooks[this] = {
                    set: function (a, b) {
                        return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
                    }
                },
                    ca.checkOn || (ea.valHooks[this].get = function (a) {
                        return null === a.getAttribute("value") ? "on" : a.value
                    }
                    )
            });
        var vb, wb, xb = ea.expr.attrHandle, yb = /^(?:checked|selected)$/i, zb = ca.getSetAttribute, Ab = ca.input;
        ea.fn.extend({
            attr: function (a, b) {
                return Da(this, ea.attr, a, b, arguments.length > 1)
            },
            removeAttr: function (a) {
                return this.each(function () {
                    ea.removeAttr(this, a)
                })
            }
        }),
            ea.extend({
                attr: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (a && 3 !== f && 8 !== f && 2 !== f)
                        return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(),
                            d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)),
                            void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b),
                                null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                                    c) : void ea.removeAttr(a, b))
                },
                removeAttr: function (a, b) {
                    var c, d, e = 0, f = b && b.match(ta);
                    if (f && 1 === a.nodeType)
                        for (; c = f[e++];)
                            d = ea.propFix[c] || c,
                                ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""),
                                a.removeAttribute(zb ? c : d)
                },
                attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b),
                                    c && (a.value = c),
                                    b
                            }
                        }
                    }
                }
            }),
            wb = {
                set: function (a, b, c) {
                    return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0,
                        c
                }
            },
            ea.each(ea.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = xb[b] || ea.find.attr;
                xb[b] = Ab && zb || !yb.test(b) ? function (a, b, d) {
                    var e, f;
                    return d || (f = xb[b],
                        xb[b] = e,
                        e = null != c(a, b, d) ? b.toLowerCase() : null,
                        xb[b] = f),
                        e
                }
                    : function (a, b, c) {
                        return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
                    }
            }),
            Ab && zb || (ea.attrHooks.value = {
                set: function (a, b, c) {
                    return ea.nodeName(a, "input") ? void (a.defaultValue = b) : vb && vb.set(a, b, c)
                }
            }),
            zb || (vb = {
                set: function (a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                        d.value = b += "",
                        "value" === c || b === a.getAttribute(c) ? b : void 0
                }
            },
                xb.id = xb.name = xb.coords = function (a, b, c) {
                    var d;
                    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
                }
                ,
                ea.valHooks.button = {
                    get: function (a, b) {
                        var c = a.getAttributeNode(b);
                        return c && c.specified ? c.value : void 0
                    },
                    set: vb.set
                },
                ea.attrHooks.contenteditable = {
                    set: function (a, b, c) {
                        vb.set(a, "" === b ? !1 : b, c)
                    }
                },
                ea.each(["width", "height"], function (a, b) {
                    ea.attrHooks[b] = {
                        set: function (a, c) {
                            return "" === c ? (a.setAttribute(b, "auto"),
                                c) : void 0
                        }
                    }
                })),
            ca.style || (ea.attrHooks.style = {
                get: function (a) {
                    return a.style.cssText || void 0
                },
                set: function (a, b) {
                    return a.style.cssText = b + ""
                }
            });
        var Bb = /^(?:input|select|textarea|button|object)$/i
            , Cb = /^(?:a|area)$/i;
        ea.fn.extend({
            prop: function (a, b) {
                return Da(this, ea.prop, a, b, arguments.length > 1)
            },
            removeProp: function (a) {
                return a = ea.propFix[a] || a,
                    this.each(function () {
                        try {
                            this[a] = void 0,
                                delete this[a]
                        } catch (b) { }
                    })
            }
        }),
            ea.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function (a, b, c) {
                    var d, e, f, g = a.nodeType;
                    if (a && 3 !== g && 8 !== g && 2 !== g)
                        return f = 1 !== g || !ea.isXMLDoc(a),
                            f && (b = ea.propFix[b] || b,
                                e = ea.propHooks[b]),
                            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                },
                propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b = ea.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                }
            }),
            ca.hrefNormalized || ea.each(["href", "src"], function (a, b) {
                ea.propHooks[b] = {
                    get: function (a) {
                        return a.getAttribute(b, 4)
                    }
                }
            }),
            ca.optSelected || (ea.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && (b.selectedIndex,
                        b.parentNode && b.parentNode.selectedIndex),
                        null
                }
            }),
            ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ea.propFix[this.toLowerCase()] = this
            }),
            ca.enctype || (ea.propFix.enctype = "encoding");
        var Db = /[\t\r\n\f]/g;
        ea.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
                if (ea.isFunction(a))
                    return this.each(function (b) {
                        ea(this).addClass(a.call(this, b, this.className))
                    });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                            for (f = 0; e = b[f++];)
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = ea.trim(d),
                                c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function (a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
                if (ea.isFunction(a))
                    return this.each(function (b) {
                        ea(this).removeClass(a.call(this, b, this.className))
                    });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;)
                                    d = d.replace(" " + e + " ", " ");
                            g = a ? ea.trim(d) : "",
                                c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ea.isFunction(a) ? this.each(function (c) {
                    ea(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function () {
                    if ("string" === c)
                        for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];)
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else
                        (c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className),
                            this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
                })
            },
            hasClass: function (a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0)
                        return !0;
                return !1
            }
        }),
            ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
                ea.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }
            }),
            ea.fn.extend({
                hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                },
                bind: function (a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function (a, b) {
                    return this.off(a, null, b)
                },
                delegate: function (a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
        var Eb = ea.now()
            , Fb = /\?/
            , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ea.parseJSON = function (b) {
            if (a.JSON && a.JSON.parse)
                return a.JSON.parse(b + "");
            var c, d = null, e = ea.trim(b + "");
            return e && !ea.trim(e.replace(Gb, function (a, b, e, f) {
                return c && b && (d = 0),
                    0 === d ? a : (c = e || b,
                        d += !f - !e,
                        "")
            })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
        }
            ,
            ea.parseXML = function (b) {
                var c, d;
                if (!b || "string" != typeof b)
                    return null;
                try {
                    a.DOMParser ? (d = new DOMParser,
                        c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
                            c.async = "false",
                            c.loadXML(b))
                } catch (e) {
                    c = void 0
                }
                return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b),
                    c
            }
            ;
        var Hb, Ib, Jb = /#.*$/, Kb = /([?&])_=[^&]*/, Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nb = /^(?:GET|HEAD)$/, Ob = /^\/\//, Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qb = {}, Rb = {}, Sb = "*/".concat("*");
        try {
            Ib = location.href
        } catch (Tb) {
            Ib = oa.createElement("a"),
                Ib.href = "",
                Ib = Ib.href
        }
        Hb = Pb.exec(Ib.toLowerCase()) || [],
            ea.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ib,
                    type: "GET",
                    isLocal: Mb.test(Hb[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Sb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ea.parseJSON,
                        "text xml": ea.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (a, b) {
                    return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
                },
                ajaxPrefilter: N(Qb),
                ajaxTransport: N(Rb),
                ajax: function (a, b) {
                    function c(a, b, c, d) {
                        var e, k, r, s, u, w = b;
                        2 !== t && (t = 2,
                            h && clearTimeout(h),
                            j = void 0,
                            g = d || "",
                            v.readyState = a > 0 ? 4 : 0,
                            e = a >= 200 && 300 > a || 304 === a,
                            c && (s = Q(l, v, c)),
                            s = R(l, s, v, e),
                            e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                                u && (ea.lastModified[f] = u),
                                u = v.getResponseHeader("etag"),
                                u && (ea.etag[f] = u)),
                                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                                    k = s.data,
                                    r = s.error,
                                    e = !r)) : (r = w,
                                        (a || !w) && (w = "error",
                                            0 > a && (a = 0))),
                            v.status = a,
                            v.statusText = (b || w) + "",
                            e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                            v.statusCode(q),
                            q = void 0,
                            i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                            p.fireWith(m, [v, w]),
                            i && (n.trigger("ajaxComplete", [v, l]),
                                --ea.active || ea.event.trigger("ajaxStop")))
                    }
                    "object" == typeof a && (b = a,
                        a = void 0),
                        b = b || {};
                    var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event, o = ea.Deferred(), p = ea.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (2 === t) {
                                if (!k)
                                    for (k = {}; b = Lb.exec(g);)
                                        k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function () {
                            return 2 === t ? g : null
                        },
                        setRequestHeader: function (a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a,
                                r[a] = b),
                                this
                        },
                        overrideMimeType: function (a) {
                            return t || (l.mimeType = a),
                                this
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a)
                                        q[b] = [q[b], a[b]];
                                else
                                    v.always(a[v.status]);
                            return this
                        },
                        abort: function (a) {
                            var b = a || u;
                            return j && j.abort(b),
                                c(0, b),
                                this
                        }
                    };
                    if (o.promise(v).complete = p.add,
                        v.success = v.done,
                        v.error = v.fail,
                        l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"),
                        l.type = b.method || b.type || l.method || l.type,
                        l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""],
                        null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()),
                            l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))),
                        l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)),
                        O(Qb, l, b, v),
                        2 === t)
                        return v;
                    i = l.global,
                        i && 0 === ea.active++ && ea.event.trigger("ajaxStart"),
                        l.type = l.type.toUpperCase(),
                        l.hasContent = !Nb.test(l.type),
                        f = l.url,
                        l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
                            delete l.data),
                            l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
                        l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]),
                            ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])),
                        (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
                        v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                    for (e in l.headers)
                        v.setRequestHeader(e, l.headers[e]);
                    if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                        return v.abort();
                    u = "abort";
                    for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        v[e](l[e]);
                    if (j = O(Rb, l, b, v)) {
                        v.readyState = 1,
                            i && n.trigger("ajaxSend", [v, l]),
                            l.async && l.timeout > 0 && (h = setTimeout(function () {
                                v.abort("timeout")
                            }, l.timeout));
                        try {
                            t = 1,
                                j.send(r, c)
                        } catch (w) {
                            if (!(2 > t))
                                throw w;
                            c(-1, w)
                        }
                    } else
                        c(-1, "No Transport");
                    return v
                },
                getJSON: function (a, b, c) {
                    return ea.get(a, b, c, "json")
                },
                getScript: function (a, b) {
                    return ea.get(a, void 0, b, "script")
                }
            }),
            ea.each(["get", "post"], function (a, b) {
                ea[b] = function (a, c, d, e) {
                    return ea.isFunction(c) && (e = e || d,
                        d = c,
                        c = void 0),
                        ea.ajax({
                            url: a,
                            type: b,
                            dataType: e,
                            data: c,
                            success: d
                        })
                }
            }),
            ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                ea.fn[b] = function (a) {
                    return this.on(b, a)
                }
            }),
            ea._evalUrl = function (a) {
                return ea.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            ea.fn.extend({
                wrapAll: function (a) {
                    if (ea.isFunction(a))
                        return this.each(function (b) {
                            ea(this).wrapAll(a.call(this, b))
                        });
                    if (this[0]) {
                        var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]),
                            b.map(function () {
                                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)
                                    a = a.firstChild;
                                return a
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function (a) {
                    return ea.isFunction(a) ? this.each(function (b) {
                        ea(this).wrapInner(a.call(this, b))
                    }) : this.each(function () {
                        var b = ea(this)
                            , c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                },
                wrap: function (a) {
                    var b = ea.isFunction(a);
                    return this.each(function (c) {
                        ea(this).wrapAll(b ? a.call(this, c) : a)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            ea.expr.filters.hidden = function (a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
            }
            ,
            ea.expr.filters.visible = function (a) {
                return !ea.expr.filters.hidden(a)
            }
            ;
        var Ub = /%20/g
            , Vb = /\[\]$/
            , Wb = /\r?\n/g
            , Xb = /^(?:submit|button|image|reset|file)$/i
            , Yb = /^(?:input|select|textarea|keygen)/i;
        ea.param = function (a, b) {
            var c, d = [], e = function (a, b) {
                b = ea.isFunction(b) ? b() : null == b ? "" : b,
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional),
                ea.isArray(a) || a.jquery && !ea.isPlainObject(a))
                ea.each(a, function () {
                    e(this.name, this.value)
                });
            else
                for (c in a)
                    S(c, a[c], b, e);
            return d.join("&").replace(Ub, "+")
        }
            ,
            ea.fn.extend({
                serialize: function () {
                    return ea.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var a = ea.prop(this, "elements");
                        return a ? ea.makeArray(a) : this
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
                    }).map(function (a, b) {
                        var c = ea(this).val();
                        return null == c ? null : ea.isArray(c) ? ea.map(c, function (a) {
                            return {
                                name: b.name,
                                value: a.replace(Wb, "\r\n")
                            }
                        }) : {
                                name: b.name,
                                value: c.replace(Wb, "\r\n")
                            }
                    }).get()
                }
            }),
            ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
            }
                : T;
        var Zb = 0
            , $b = {}
            , _b = ea.ajaxSettings.xhr();
        a.ActiveXObject && ea(a).on("unload", function () {
            for (var a in $b)
                $b[a](void 0, !0)
        }),
            ca.cors = !!_b && "withCredentials" in _b,
            _b = ca.ajax = !!_b,
            _b && ea.ajaxTransport(function (a) {
                if (!a.crossDomain || ca.cors) {
                    var b;
                    return {
                        send: function (c, d) {
                            var e, f = a.xhr(), g = ++Zb;
                            if (f.open(a.type, a.url, a.async, a.username, a.password),
                                a.xhrFields)
                                for (e in a.xhrFields)
                                    f[e] = a.xhrFields[e];
                            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                            for (e in c)
                                void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                            f.send(a.hasContent && a.data || null),
                                b = function (c, e) {
                                    var h, i, j;
                                    if (b && (e || 4 === f.readyState))
                                        if (delete $b[g],
                                            b = void 0,
                                            f.onreadystatechange = ea.noop,
                                            e)
                                            4 !== f.readyState && f.abort();
                                        else {
                                            j = {},
                                                h = f.status,
                                                "string" == typeof f.responseText && (j.text = f.responseText);
                                            try {
                                                i = f.statusText
                                            } catch (k) {
                                                i = ""
                                            }
                                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                        }
                                    j && d(h, i, j, f.getAllResponseHeaders())
                                }
                                ,
                                a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                        },
                        abort: function () {
                            b && b(void 0, !0)
                        }
                    }
                }
            }),
            ea.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function (a) {
                        return ea.globalEval(a),
                            a
                    }
                }
            }),
            ea.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1),
                    a.crossDomain && (a.type = "GET",
                        a.global = !1)
            }),
            ea.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, c = oa.head || ea("head")[0] || oa.documentElement;
                    return {
                        send: function (d, e) {
                            b = oa.createElement("script"),
                                b.async = !0,
                                a.scriptCharset && (b.charset = a.scriptCharset),
                                b.src = a.url,
                                b.onload = b.onreadystatechange = function (a, c) {
                                    (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                                        b.parentNode && b.parentNode.removeChild(b),
                                        b = null,
                                        c || e(200, "success"))
                                }
                                ,
                                c.insertBefore(b, c.firstChild)
                        },
                        abort: function () {
                            b && b.onload(void 0, !0)
                        }
                    }
                }
            });
        var ac = []
            , bc = /(=)\?(?=&|$)|\?\?/;
        ea.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var a = ac.pop() || ea.expando + "_" + Eb++;
                return this[a] = !0,
                    a
            }
        }),
            ea.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                    h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    b.converters["script json"] = function () {
                        return g || ea.error(e + " was not called"),
                            g[0]
                    }
                    ,
                    b.dataTypes[0] = "json",
                    f = a[e],
                    a[e] = function () {
                        g = arguments
                    }
                    ,
                    d.always(function () {
                        a[e] = f,
                            b[e] && (b.jsonpCallback = c.jsonpCallback,
                                ac.push(e)),
                            g && ea.isFunction(f) && f(g[0]),
                            g = f = void 0
                    }),
                    "script") : void 0
            }),
            ea.parseHTML = function (a, b, c) {
                if (!a || "string" != typeof a)
                    return null;
                "boolean" == typeof b && (c = b,
                    b = !1),
                    b = b || oa;
                var d = la.exec(a)
                    , e = !c && [];
                return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e),
                    e && e.length && ea(e).remove(),
                    ea.merge([], d.childNodes))
            }
            ;
        var cc = ea.fn.load;
        ea.fn.load = function (a, b, c) {
            if ("string" != typeof a && cc)
                return cc.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = ea.trim(a.slice(h, a.length)),
                a = a.slice(0, h)),
                ea.isFunction(b) ? (c = b,
                    b = void 0) : b && "object" == typeof b && (f = "POST"),
                g.length > 0 && ea.ajax({
                    url: a,
                    type: f,
                    dataType: "html",
                    data: b
                }).done(function (a) {
                    e = arguments,
                        g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
                }).complete(c && function (a, b) {
                    g.each(c, e || [a.responseText, b, a])
                }
                ),
                this
        }
            ,
            ea.expr.filters.animated = function (a) {
                return ea.grep(ea.timers, function (b) {
                    return a === b.elem
                }).length
            }
            ;
        var dc = a.document.documentElement;
        ea.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = ea.css(a, "position"), l = ea(a), m = {};
                "static" === k && (a.style.position = "relative"),
                    h = l.offset(),
                    f = ea.css(a, "top"),
                    i = ea.css(a, "left"),
                    j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1,
                    j ? (d = l.position(),
                        g = d.top,
                        e = d.left) : (g = parseFloat(f) || 0,
                            e = parseFloat(i) || 0),
                    ea.isFunction(b) && (b = b.call(a, c, h)),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m)
            }
        },
            ea.fn.extend({
                offset: function (a) {
                    if (arguments.length)
                        return void 0 === a ? this : this.each(function (b) {
                            ea.offset.setOffset(this, a, b)
                        });
                    var b, c, d = {
                        top: 0,
                        left: 0
                    }, e = this[0], f = e && e.ownerDocument;
                    if (f)
                        return b = f.documentElement,
                            ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()),
                                c = V(f),
                                {
                                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                                }) : d
                },
                position: function () {
                    if (this[0]) {
                        var a, b, c = {
                            top: 0,
                            left: 0
                        }, d = this[0];
                        return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                            b = this.offset(),
                            ea.nodeName(a[0], "html") || (c = a.offset()),
                            c.top += ea.css(a[0], "borderTopWidth", !0),
                            c.left += ea.css(a[0], "borderLeftWidth", !0)),
                            {
                                top: b.top - c.top - ea.css(d, "marginTop", !0),
                                left: b.left - c.left - ea.css(d, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");)
                            a = a.offsetParent;
                        return a || dc
                    })
                }
            }),
            ea.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (a, b) {
                var c = /Y/.test(b);
                ea.fn[a] = function (d) {
                    return Da(this, function (a, d, e) {
                        var f = V(a);
                        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
                    }, a, d, arguments.length, null)
                }
            }),
            ea.each(["top", "left"], function (a, b) {
                ea.cssHooks[b] = A(ca.pixelPosition, function (a, c) {
                    return c ? (c = bb(a, b),
                        db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
                })
            }),
            ea.each({
                Height: "height",
                Width: "width"
            }, function (a, b) {
                ea.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, function (c, d) {
                    ea.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d)
                            , g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return Da(this, function (b, c, d) {
                            var e;
                            return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                                Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                        }, b, f ? d : void 0, f, null)
                    }
                })
            }),
            ea.fn.size = function () {
                return this.length
            }
            ,
            ea.fn.andSelf = ea.fn.addBack,
            "function" == typeof define && define.amd && define("jquery", [], function () {
                return ea
            });
        var ec = a.jQuery
            , fc = a.$;
        return ea.noConflict = function (b) {
            return a.$ === ea && (a.$ = fc),
                b && a.jQuery === ea && (a.jQuery = ec),
                ea
        }
            ,
            typeof b === xa && (a.jQuery = a.$ = ea),
            ea
    }),
    function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
    }(function (a) {
        function b(c, d) {
            var e = this;
            e.element = c,
                e.el = a(c),
                e.suggestions = [],
                e.badQueries = [],
                e.selectedIndex = -1,
                e.currentValue = e.element.value,
                e.timeoutId = null,
                e.cachedResponse = {},
                e.onChangeTimeout = null,
                e.onChange = null,
                e.isLocal = !1,
                e.suggestionsContainer = null,
                e.noSuggestionsContainer = null,
                e.options = a.extend({}, b.defaults, d),
                e.classes = {
                    selected: "autocomplete-selected",
                    suggestion: "autocomplete-suggestion"
                },
                e.hint = null,
                e.hintValue = "",
                e.selection = null,
                e.initialize(),
                e.setOptions(d)
        }
        function c(a, b, c) {
            return -1 !== a.value.toLowerCase().indexOf(c)
        }
        function d(b) {
            return "string" == typeof b ? a.parseJSON(b) : b
        }
        function e(a, b) {
            if (!b)
                return a.value;
            var c = "(" + g.escapeRegExChars(b) + ")";
            return a.value.replace(new RegExp(c, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
        }
        function f(a, b) {
            return '<div class="autocomplete-group">' + b + "</div>"
        }
        var g = function () {
            return {
                escapeRegExChars: function (a) {
                    return a.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                },
                createNode: function (a) {
                    var b = document.createElement("div");
                    return b.className = a,
                        b.style.position = "absolute",
                        b.style.display = "none",
                        b
                }
            }
        }()
            , h = {
                ESC: 27,
                TAB: 9,
                RETURN: 13,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            }
            , i = a.noop;
        b.utils = g,
            a.Autocomplete = b,
            b.defaults = {
                ajaxSettings: {},
                autoSelectFirst: !1,
                appendTo: "body",
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: e,
                formatGroup: f,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: !1,
                onSearchStart: i,
                onSearchComplete: i,
                onSearchError: i,
                preserveInput: !1,
                containerClass: "autocomplete-suggestions",
                tabDisabled: !1,
                dataType: "text",
                currentRequest: null,
                triggerSelectOnValidInput: !0,
                preventBadQueries: !0,
                lookupFilter: c,
                paramName: "query",
                transformResult: d,
                showNoSuggestionNotice: !1,
                noSuggestionNotice: "No results",
                orientation: "bottom",
                forceFixPosition: !1
            },
            b.prototype = {
                initialize: function () {
                    var c, d = this, e = "." + d.classes.suggestion, f = d.classes.selected, g = d.options;
                    d.element.setAttribute("autocomplete", "off"),
                        d.noSuggestionsContainer = a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),
                        d.suggestionsContainer = b.utils.createNode(g.containerClass),
                        c = a(d.suggestionsContainer),
                        c.appendTo(g.appendTo || "body"),
                        "auto" !== g.width && c.css("width", g.width),
                        c.on("mouseover.autocomplete", e, function () {
                            d.activate(a(this).data("index"))
                        }),
                        c.on("mouseout.autocomplete", function () {
                            d.selectedIndex = -1,
                                c.children("." + f).removeClass(f)
                        }),
                        c.on("click.autocomplete", e, function () {
                            d.select(a(this).data("index"))
                        }),
                        c.on("click.autocomplete", function () {
                            clearTimeout(d.blurTimeoutId)
                        }),
                        d.fixPositionCapture = function () {
                            d.visible && d.fixPosition()
                        }
                        ,
                        a(window).on("resize.autocomplete", d.fixPositionCapture),
                        d.el.on("keydown.autocomplete", function (a) {
                            d.onKeyPress(a)
                        }),
                        d.el.on("keyup.autocomplete", function (a) {
                            d.onKeyUp(a)
                        }),
                        d.el.on("blur.autocomplete", function () {
                            d.onBlur()
                        }),
                        d.el.on("focus.autocomplete", function () {
                            d.onFocus()
                        }),
                        d.el.on("change.autocomplete", function (a) {
                            d.onKeyUp(a)
                        }),
                        d.el.on("input.autocomplete", function (a) {
                            d.onKeyUp(a)
                        })
                },
                onFocus: function () {
                    var a = this;
                    a.fixPosition(),
                        a.el.val().length >= a.options.minChars && a.onValueChange()
                },
                onBlur: function () {
                    var a = this;
                    a.blurTimeoutId = setTimeout(function () {
                        a.hide()
                    }, 200)
                },
                abortAjax: function () {
                    var a = this;
                    a.currentRequest && (a.currentRequest.abort(),
                        a.currentRequest = null)
                },
                setOptions: function (b) {
                    var c = this
                        , d = a.extend({}, c.options, b);
                    c.isLocal = Array.isArray(d.lookup),
                        c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)),
                        d.orientation = c.validateOrientation(d.orientation, "bottom"),
                        a(c.suggestionsContainer).css({
                            "max-height": d.maxHeight + "px",
                            width: d.width + "px",
                            "z-index": d.zIndex
                        }),
                        this.options = d
                },
                clearCache: function () {
                    this.cachedResponse = {},
                        this.badQueries = []
                },
                clear: function () {
                    this.clearCache(),
                        this.currentValue = "",
                        this.suggestions = []
                },
                disable: function () {
                    var a = this;
                    a.disabled = !0,
                        clearTimeout(a.onChangeTimeout),
                        a.abortAjax()
                },
                enable: function () {
                    this.disabled = !1
                },
                fixPosition: function () {
                    var b = this
                        , c = a(b.suggestionsContainer)
                        , d = c.parent().get(0);
                    if (d === document.body || b.options.forceFixPosition) {
                        var e = b.options.orientation
                            , f = c.outerHeight()
                            , g = b.el.outerHeight()
                            , h = b.el.offset()
                            , i = {
                                top: h.top,
                                left: h.left
                            };
                        if ("auto" === e) {
                            var j = a(window).height()
                                , k = a(window).scrollTop()
                                , l = -k + h.top - f
                                , m = k + j - (h.top + g + f);
                            e = Math.max(l, m) === l ? "top" : "bottom"
                        }
                        if ("top" === e ? i.top += -f : i.top += g,
                            d !== document.body) {
                            var n, o = c.css("opacity");
                            b.visible || c.css("opacity", 0).show(),
                                n = c.offsetParent().offset(),
                                i.top -= n.top,
                                i.top += d.scrollTop,
                                i.left -= n.left,
                                b.visible || c.css("opacity", o).hide()
                        }
                        "auto" === b.options.width && (i.width = b.el.outerWidth() + "px"),
                            c.css(i)
                    }
                },
                isCursorAtEnd: function () {
                    var a, b = this, c = b.el.val().length, d = b.element.selectionStart;
                    return "number" == typeof d ? d === c : document.selection ? (a = document.selection.createRange(),
                        a.moveStart("character", -c),
                        c === a.text.length) : !0
                },
                onKeyPress: function (a) {
                    var b = this;
                    if (!b.disabled && !b.visible && a.which === h.DOWN && b.currentValue)
                        return void b.suggest();
                    if (!b.disabled && b.visible) {
                        switch (a.which) {
                            case h.ESC:
                                b.el.val(b.currentValue),
                                    b.hide();
                                break;
                            case h.RIGHT:
                                if (b.hint && b.options.onHint && b.isCursorAtEnd()) {
                                    b.selectHint();
                                    break
                                }
                                return;
                            case h.TAB:
                                if (b.hint && b.options.onHint)
                                    return void b.selectHint();
                                if (-1 === b.selectedIndex)
                                    return void b.hide();
                                if (b.select(b.selectedIndex),
                                    b.options.tabDisabled === !1)
                                    return;
                                break;
                            case h.RETURN:
                                if (-1 === b.selectedIndex)
                                    return void b.hide();
                                b.select(b.selectedIndex);
                                break;
                            case h.UP:
                                b.moveUp();
                                break;
                            case h.DOWN:
                                b.moveDown();
                                break;
                            default:
                                return
                        }
                        a.stopImmediatePropagation(),
                            a.preventDefault()
                    }
                },
                onKeyUp: function (a) {
                    var b = this;
                    if (!b.disabled) {
                        switch (a.which) {
                            case h.UP:
                            case h.DOWN:
                                return
                        }
                        clearTimeout(b.onChangeTimeout),
                            b.currentValue !== b.el.val() && (b.findBestHint(),
                                b.options.deferRequestBy > 0 ? b.onChangeTimeout = setTimeout(function () {
                                    b.onValueChange()
                                }, b.options.deferRequestBy) : b.onValueChange())
                    }
                },
                onValueChange: function () {
                    if (this.ignoreValueChange)
                        return void (this.ignoreValueChange = !1);
                    var b = this
                        , c = b.options
                        , d = b.el.val()
                        , e = b.getQuery(d);
                    return b.selection && b.currentValue !== e && (b.selection = null,
                        (c.onInvalidateSelection || a.noop).call(b.element)),
                        clearTimeout(b.onChangeTimeout),
                        b.currentValue = d,
                        b.selectedIndex = -1,
                        c.triggerSelectOnValidInput && b.isExactMatch(e) ? void b.select(0) : void (e.length < c.minChars ? b.hide() : b.getSuggestions(e))
                },
                isExactMatch: function (a) {
                    var b = this.suggestions;
                    return 1 === b.length && b[0].value.toLowerCase() === a.toLowerCase()
                },
                getQuery: function (b) {
                    var c, d = this.options.delimiter;
                    return d ? (c = b.split(d),
                        a.trim(c[c.length - 1])) : b
                },
                getSuggestionsLocal: function (b) {
                    var c, d = this, e = d.options, f = b.toLowerCase(), g = e.lookupFilter, h = parseInt(e.lookupLimit, 10);
                    return c = {
                        suggestions: a.grep(e.lookup, function (a) {
                            return g(a, b, f)
                        })
                    },
                        h && c.suggestions.length > h && (c.suggestions = c.suggestions.slice(0, h)),
                        c
                },
                getSuggestions: function (b) {
                    var c, d, e, f, g = this, h = g.options, i = h.serviceUrl;
                    if (h.params[h.paramName] = b,
                        h.onSearchStart.call(g.element, h.params) !== !1) {
                        if (d = h.ignoreParams ? null : h.params,
                            a.isFunction(h.lookup))
                            return void h.lookup(b, function (a) {
                                g.suggestions = a.suggestions,
                                    g.suggest(),
                                    h.onSearchComplete.call(g.element, b, a.suggestions)
                            });
                        g.isLocal ? c = g.getSuggestionsLocal(b) : (a.isFunction(i) && (i = i.call(g.element, b)),
                            e = i + "?" + a.param(d || {}),
                            c = g.cachedResponse[e]),
                            c && Array.isArray(c.suggestions) ? (g.suggestions = c.suggestions,
                                g.suggest(),
                                h.onSearchComplete.call(g.element, b, c.suggestions)) : g.isBadQuery(b) ? h.onSearchComplete.call(g.element, b, []) : (g.abortAjax(),
                                    f = {
                                        url: i,
                                        data: d,
                                        type: h.type,
                                        dataType: h.dataType
                                    },
                                    a.extend(f, h.ajaxSettings),
                                    g.currentRequest = a.ajax(f).done(function (a) {
                                        var c;
                                        g.currentRequest = null,
                                            c = h.transformResult(a, b),
                                            g.processResponse(c, b, e),
                                            h.onSearchComplete.call(g.element, b, c.suggestions)
                                    }).fail(function (a, c, d) {
                                        h.onSearchError.call(g.element, b, a, c, d)
                                    }))
                    }
                },
                isBadQuery: function (a) {
                    if (!this.options.preventBadQueries)
                        return !1;
                    for (var b = this.badQueries, c = b.length; c--;)
                        if (0 === a.indexOf(b[c]))
                            return !0;
                    return !1
                },
                hide: function () {
                    var b = this
                        , c = a(b.suggestionsContainer);
                    a.isFunction(b.options.onHide) && b.visible && b.options.onHide.call(b.element, c),
                        b.visible = !1,
                        b.selectedIndex = -1,
                        clearTimeout(b.onChangeTimeout),
                        a(b.suggestionsContainer).hide(),
                        b.signalHint(null)
                },
                suggest: function () {
                    if (!this.suggestions.length)
                        return void (this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
                    var b, c = this, d = c.options, e = d.groupBy, f = d.formatResult, g = c.getQuery(c.currentValue), h = c.classes.suggestion, i = c.classes.selected, j = a(c.suggestionsContainer), k = a(c.noSuggestionsContainer), l = d.beforeRender, m = "", n = function (a, c) {
                        var f = a.data[e];
                        return b === f ? "" : (b = f,
                            d.formatGroup(a, b))
                    };
                    return d.triggerSelectOnValidInput && c.isExactMatch(g) ? void c.select(0) : (a.each(c.suggestions, function (a, b) {
                        e && (m += n(b, g, a)),
                            m += '<div class="' + h + '" data-index="' + a + '">' + f(b, g, a) + "</div>"
                    }),
                        this.adjustContainerWidth(),
                        k.detach(),
                        j.html(m),
                        a.isFunction(l) && l.call(c.element, j, c.suggestions),
                        c.fixPosition(),
                        j.show(),
                        d.autoSelectFirst && (c.selectedIndex = 0,
                            j.scrollTop(0),
                            j.children("." + h).first().addClass(i)),
                        c.visible = !0,
                        void c.findBestHint())
                },
                noSuggestions: function () {
                    var b = this
                        , c = b.options.beforeRender
                        , d = a(b.suggestionsContainer)
                        , e = a(b.noSuggestionsContainer);
                    this.adjustContainerWidth(),
                        e.detach(),
                        d.empty(),
                        d.append(e),
                        a.isFunction(c) && c.call(b.element, d, b.suggestions),
                        b.fixPosition(),
                        d.show(),
                        b.visible = !0
                },
                adjustContainerWidth: function () {
                    var b, c = this, d = c.options, e = a(c.suggestionsContainer);
                    "auto" === d.width ? (b = c.el.outerWidth(),
                        e.css("width", b > 0 ? b : 300)) : "flex" === d.width && e.css("width", "")
                },
                findBestHint: function () {
                    var b = this
                        , c = b.el.val().toLowerCase()
                        , d = null;
                    c && (a.each(b.suggestions, function (a, b) {
                        var e = 0 === b.value.toLowerCase().indexOf(c);
                        return e && (d = b),
                            !e
                    }),
                        b.signalHint(d))
                },
                signalHint: function (b) {
                    var c = ""
                        , d = this;
                    b && (c = d.currentValue + b.value.substr(d.currentValue.length)),
                        d.hintValue !== c && (d.hintValue = c,
                            d.hint = b,
                            (this.options.onHint || a.noop)(c))
                },
                verifySuggestionsFormat: function (b) {
                    return b.length && "string" == typeof b[0] ? a.map(b, function (a) {
                        return {
                            value: a,
                            data: null
                        }
                    }) : b
                },
                validateOrientation: function (b, c) {
                    return b = a.trim(b || "").toLowerCase(),
                        -1 === a.inArray(b, ["auto", "bottom", "top"]) && (b = c),
                        b
                },
                processResponse: function (a, b, c) {
                    var d = this
                        , e = d.options;
                    a.suggestions = d.verifySuggestionsFormat(a.suggestions),
                        e.noCache || (d.cachedResponse[c] = a,
                            e.preventBadQueries && !a.suggestions.length && d.badQueries.push(b)),
                        b === d.getQuery(d.currentValue) && (d.suggestions = a.suggestions,
                            d.suggest())
                },
                activate: function (b) {
                    var c, d = this, e = d.classes.selected, f = a(d.suggestionsContainer), g = f.find("." + d.classes.suggestion);
                    return f.find("." + e).removeClass(e),
                        d.selectedIndex = b,
                        -1 !== d.selectedIndex && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex),
                            a(c).addClass(e),
                            c) : null
                },
                selectHint: function () {
                    var b = this
                        , c = a.inArray(b.hint, b.suggestions);
                    b.select(c)
                },
                select: function (a) {
                    var b = this;
                    b.hide(),
                        b.onSelect(a)
                },
                moveUp: function () {
                    var b = this;
                    if (-1 !== b.selectedIndex)
                        return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children("." + b.classes.suggestion).first().removeClass(b.classes.selected),
                            b.selectedIndex = -1,
                            b.ignoreValueChange = !1,
                            b.el.val(b.currentValue),
                            void b.findBestHint()) : void b.adjustScroll(b.selectedIndex - 1)
                },
                moveDown: function () {
                    var a = this;
                    a.selectedIndex !== a.suggestions.length - 1 && a.adjustScroll(a.selectedIndex + 1)
                },
                adjustScroll: function (b) {
                    var c = this
                        , d = c.activate(b);
                    if (d) {
                        var e, f, g, h = a(d).outerHeight();
                        e = d.offsetTop,
                            f = a(c.suggestionsContainer).scrollTop(),
                            g = f + c.options.maxHeight - h,
                            f > e ? a(c.suggestionsContainer).scrollTop(e) : e > g && a(c.suggestionsContainer).scrollTop(e - c.options.maxHeight + h),
                            c.options.preserveInput || (c.ignoreValueChange = !0,
                                c.el.val(c.getValue(c.suggestions[b].value))),
                            c.signalHint(null)
                    }
                },
                onSelect: function (b) {
                    var c = this
                        , d = c.options.onSelect
                        , e = c.suggestions[b];
                    c.currentValue = c.getValue(e.value),
                        c.currentValue === c.el.val() || c.options.preserveInput || c.el.val(c.currentValue),
                        c.signalHint(null),
                        c.suggestions = [],
                        c.selection = e,
                        a.isFunction(d) && d.call(c.element, e)
                },
                getValue: function (a) {
                    var b, c, d = this, e = d.options.delimiter;
                    return e ? (b = d.currentValue,
                        c = b.split(e),
                        1 === c.length ? a : b.substr(0, b.length - c[c.length - 1].length) + a) : a
                },
                dispose: function () {
                    var b = this;
                    b.el.off(".autocomplete").removeData("autocomplete"),
                        a(window).off("resize.autocomplete", b.fixPositionCapture),
                        a(b.suggestionsContainer).remove()
                }
            },
            a.fn.devbridgeAutocomplete = function (c, d) {
                var e = "autocomplete";
                return arguments.length ? this.each(function () {
                    var f = a(this)
                        , g = f.data(e);
                    "string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(),
                        g = new b(this, c),
                        f.data(e, g))
                }) : this.first().data(e)
            }
            ,
            a.fn.autocomplete || (a.fn.autocomplete = a.fn.devbridgeAutocomplete)
    }),
    function (a, b) {
        function c(a, b) {
            this.callback = a,
                this.receiver = b,
                this.topic = null
        }
        function d() {
            this.subscriptions = []
        }
        function e() {
            return this instanceof e ? void (this.topics = {}) : new e
        }
        c.prototype.call = function (a, b) {
            this.topic = b,
                this.callback.apply(this.receiver || this, a)
        }
            ,
            d.prototype.publish = function (a, b) {
                var c, d;
                for (c = 0,
                    d = this.subscriptions.length; d > c; c += 1)
                    this.subscriptions[c].call(a, b)
            }
            ,
            d.prototype.subscribe = function (a, b) {
                var d = new c(a, b);
                return this.subscriptions.push(d),
                    d
            }
            ,
            d.prototype.unsubscribe = function (a) {
                var b, c, d = [];
                for (b = 0,
                    c = this.subscriptions.length; c > b; b += 1)
                    this.subscriptions[b] === a && (d = this.subscriptions.splice(b, 1));
                return d[0]
            }
            ,
            e.prototype.getTopic = function (a) {
                return this.topics[a] = this.topics[a] || new d,
                    this.topics[a]
            }
            ,
            e.prototype.subscribe = function (a, b, c) {
                return this.getTopic(a).subscribe(b, c)
            }
            ,
            e.prototype.unsubscribe = function (a, b) {
                return this.getTopic(a).unsubscribe(b)
            }
            ,
            e.prototype.publish = function (a) {
                var b = this.getTopic(a);
                return function () {
                    b.publish(arguments, a)
                }
            }
            ,
            e.prototype.installTo = function (a) {
                var b = this;
                return a.publish = function () {
                    return b.publish.apply(b, arguments)
                }
                    ,
                    a.subscribe = function () {
                        return b.subscribe.apply(b, arguments)
                    }
                    ,
                    a
            }
            ,
            a[b] || (a[b] = {}),
            a[b].Mediator = e
    }(this, "JTV"),
    void 0 === window.console) {
    window.console = {};
    var logHistory = [];
    window.console.log = function () {
        logHistory.push(arguments)
    }
}
(void 0 === window.console || void 0 === console.debug) && (console.debug = console.log),
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    }
    ),
    function (a, b, c) {
        var d = a[c].constants
            , e = {
                form: {
                    validate: function (a) {
                        var b;
                        return a.validate("validateForm"),
                            b = a.data("validate").isValid
                    },
                    hideErrors: function (a) {
                        a.find(".alert-box").remove(),
                            a.validate("clearFormErrors")
                    },
                    showErrors: function (a, b, c, d) {
                        void 0 !== b.fieldErrorMessages && a.validate("showFormErrors", b.fieldErrorMessages),
                            b.errorMessages.length > 0 && this.showFormErrors(a, b, d),
                            void 0 !== c && c.modal("show")
                    },
                    showFormErrors: function (b, d, e) {
                        var f = e || a[c].templates.errorMessageTemplate
                            , g = Mustache.render(f, d);
                        this.hideErrors(b),
                            b.find(".form-messages").remove().end().prepend(g),
                            b.validate("scrollToError", ".form-messages")
                    },
                    showInlineErrors: function (a) {
                        var c = b("#" + a.formId);
                        c.length > 0 && c.validate("showFormErrors", a.fieldsWithErrors)
                    },
                    showSuccessMessage: function (a, c, d) {
                        var e = d || ".js-success-container"
                            , f = b(c.successContent)
                            , g = f.filter(e).length > 0 ? f : f.find(e);
                        g.length > 0 ? a.closest(e).html(g.html()) : a.closest(e).html(f)
                    },
                    submitFromToProxy: function (a) {
                        var c = {
                            form: a
                        }
                            , d = document.getElementById(a)
                            , e = form2js(d);
                        c = b.extend(c, e),
                            pm({
                                target: window.frames.proxy,
                                type: "postForm",
                                data: c
                            })
                    },
                    toggleFormDisable: function (a, b) {
                        a.find("input, select, textarea").prop("disabled", b)
                    },
                    toggleValidation: function (a, b) {
                        a.find("[data-validation]")[b ? "removeClass" : "addClass"]("disabled")
                    },
                    updateFormUrls: function (a, c) {
                        var d = 0
                            , e = a.length;
                        for (d; e > d; d++)
                            c ? b(a[d][0], c).val(a[d][1]) : b(a[d][0]).val(a[d][1])
                    },
                    loadProxyIframe: function (a, d, e, f) {
                        e && c.loader.showLoader();
                        var g = b(a.target)
                            , h = g.find(".form-messages");
                        h.empty(),
                            g.validate("validateForm"),
                            pm.unbind("formError"),
                            pm.bind("formError", function (a) {
                                c.utilities.form.showErrors(g, a.response, null, f),
                                    c.loader.hideLoader()
                            }),
                            pm.unbind("ajaxError"),
                            pm.bind("ajaxError", function (a) {
                                c.utilities.form.ajaxError(a.xhr)
                            }),
                            pm.unbind("proxyIsReady"),
                            pm.bind("proxyIsReady", function (a) {
                                c.modalProxy.loadingProxy.resolve()
                            }),
                            g.data("validate").isValid ? c.modalProxy.loadingProxy.done(function () {
                                c.proxy._handleProxySubmit(a, d)
                            }) : c.loader.hideLoader()
                    },
                    ajaxError: function (b, d, e, f) {
                        if ("404" == b.status)
                            window.location.href = a[c].constants.contextPath + "/error/error404.jsp";
                        else if ("500" == b.status)
                            window.location.href = a[c].constants.contextPath + "/error/error500.jsp";
                        else {
                            var g = [];
                            g.push(a[c].constants.ajaxError),
                                this.showFormErrors(f, {
                                    errorMessages: g
                                })
                        }
                    }
                },
                sessionTimeoutHandle: null,
                startSessionTimeout: function () {
                    var a = this
                        , c = window.location.pathname
                        , e = ["/checkout/shipping.jsp", "/checkout/sshipping.jsp", "/checkout/billing.jsp", "/checkout/review.jsp"];
                    a.sessionTimeoutHandle && clearTimeout(a.sessionTimeoutHandle);
                    for (var f = 0; f < e.length; f++) {
                        var g = new RegExp(e[f], "i");
                        g.test(c) && (a.sessionTimeoutHandle = setTimeout(function () {
                            a.redirectSessionTimeout(d.contextPath + "/checkout/cart.jsp")
                        }, d.sessionTimeoutMillis))
                    }
                    b.ajax({
                        url: d.contextPath + "/sitewide/json/protectedPages.jsp",
                        dataType: "json",
                        cache: !0,
                        success: function (b) {
                            for (var e = 0; e < b.length; e++) {
                                var f = new RegExp(b[e], "i");
                                f.test(c) && (a.sessionTimeoutHandle && clearTimeout(a.sessionTimeoutHandle),
                                    a.sessionTimeoutHandle = setTimeout(function () {
                                        a.redirectSessionTimeout("/")
                                    }, d.sessionTimeoutMillis))
                            }
                        },
                        error: function (a) {
                            console.log("error: ", a)
                        }
                    })
                },
                redirectSessionTimeout: function (a) {
                    "reload" === a ? window.location.reload() : window.location = a
                },
                imgError: function (a) {
                    console.log(["loading error for", a])
                },
                getSameProtocolSiteRoot: function () {
                    var a = d.siteRoot;
                    return "https:" == window.location.protocol && (a = d.secureSiteRoot),
                        a
                },
                removeClass: function (a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                },
                addClass: function (a, b) {
                    a.classList ? a.classList.add(b) : a.className += " " + b
                },
                createModal: function (a, c) {
                    var e = '<div class="modal" id="' + a + '"><div id="overlay" class="modal-backdrop fade" data-dismiss="modal" /><div class="modal-window fade resize"><div class="modal-content fade in"></div><div class="modal-close" data-dismiss="modal" tabindex="0"><span class="icon-close-x" aria-hidden="true"></span><span class="sr-only">' + d.messages.close + "</span></div></div></div>";
                    return "undefined" != typeof c && (e = '<div class="modal" id="' + a + '"><div id="overlay" class="modal-backdrop fade" data-dismiss="modal" /><div class="modal-window fade resize ' + c + '"><div class="modal-content fade in"></div><div class="modal-close" data-dismiss="modal" tabindex="0"><span class="icon-close-x" aria-hidden="true"></span><span class="sr-only">' + d.messages.close + "</span></div></div></div>"),
                        "facet-modal" == a && (e = '<div class="modal" id="' + a + '"><div id="overlay" class="modal-backdrop fade" data-dismiss="modal" /><div role="dialog" aria-labelledby="dlg-head" class="modal-window fade resize ' + c + '"><div class="modal-content fade in"></div><div class="modal-close" data-dismiss="modal" tabindex="0"><span class="icon-close-x" aria-hidden="true"></span><span class="sr-only">' + d.messages.close + "</span></div></div></div>"),
                        b(e).appendTo("body")
                },
                addURLParameter: function (a, b, c) {
                    var d = new RegExp("(\\?|\\&)" + b + "=.*?(?=(&|$))")
                        , e = /\?.+$/
                        , f = e.test(a) ? "&" : "?";
                    return d.test(a) ? a.replace(d, "$1" + b + "=" + c) : a + f + b + "=" + c
                },
                getURLParameter: function (a, b) {
                    if (!a)
                        return null;
                    var c, d, e, f = a.toString(), g = a.split("?");
                    g.length >= 2 && (f = g[1]),
                        d = f.split("#"),
                        d.length > 1 && (f = d[0]),
                        e = f.split("&");
                    for (var h = 0; h < e.length; h++)
                        0 === e[h].indexOf(b + "=") && (c = e[h].split("=")[1]);
                    return void 0 === c && (c = ""),
                        c
                },
                updateURLParameter: function (a, b, c) {
                    if (!a)
                        return null;
                    if (b && void 0 !== c) {
                        var d = a.indexOf(b + "=")
                            , e = a.indexOf("&", d)
                            , f = a.substr(0, d)
                            , g = a.substr(e)
                            , g = "&" == g[0] ? g : "";
                        a = f + b + "=" + c + g
                    }
                    return a
                },
                stripURLParameters: function (b, d) {
                    var e = b.split("?")[0]
                        , f = 0
                        , g = d.length;
                    for (f; g > f; f++) {
                        var h = a[c].utilities.getURLParameter(b, d[f]);
                        "" !== h && (e = a[c].utilities.addURLParameter(e, d[f], h))
                    }
                    return e
                },
                dedup: function (a) {
                    var b, c = [], d = {};
                    for (b = 0; b < a.length; b++)
                        d[a[b]] || (c.push(a[b]),
                            d[a[b]] = 1);
                    return c
                },
                decodeHTMLEntities: function (a) {
                    var b = document.createElement("div");
                    return a && "string" == typeof a && (a = a.replace(/&amp;/gim, "&"),
                        a = a.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, ""),
                        a = a.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, ""),
                        b.innerHTML = a,
                        a = b.textContent,
                        b.textContent = ""),
                        a
                }
            };
        a[c] || (a[c] = {}),
            a[c].utilities = e
    }(this, window.jQuery, "JTV"),
    function (a, b) {
        var c = a[b].constants
            , d = {
                errorMessageTemplate: '<div class="alert-box error" role="alert">{{#errorMessages}}<p>{{{.}}}</p>{{/errorMessages}}<span class="icon-close-x" aria-hidden="true"><span class="sr-only">' + c.messages.close + "</span></span></div>",
                successMessageTemplate: '<div class="alert-box success" role="alert">{{#alertMessages}}<p>{{{.}}}</p>{{/alertMessages}}<span class="icon-close-x" aria-hidden="true"><span class="sr-only">' + c.messages.close + "</span></span></div>",
                avsEnteredTemplate: '{{#enteredAddress}}<div class="radio"><input type="radio" id="entered" name="avs-choice" /><label for="entered">{{address1}},&nbsp;{{#address2}}{{.}},&nbsp;{{/address2}}{{city}},&nbsp;{{state}}&nbsp;{{postalCode}}</label></div>{{/enteredAddress}}',
                avsSuggestedTemplate: '{{#suggestedAddresses}}<div class="radio"><input type="radio" id="suggested" name="avs-choice" /><label for="suggested">{{address1}},&nbsp;{{#address2}}{{.}},&nbsp;{{/address2}}{{city}},&nbsp;{{state}}&nbsp;{{postalCode}}</label></div>{{/suggestedAddresses}}',
                typeaheadSuggestionTemplate: '<h4>Did You Mean?</h4><ul>{{#suggestions}}<li><a href="{{{url}}}" data-detail-url="{{{detailUrl}}}">{{{term}}}</a></li>{{/suggestions}}</ul>',
                typeaheadContentTemplate: '<h4>Article & Information</h4><ul>{{#content}}<li>{{{title}}} in <a href="{{{url}}}">{{{source}}}</a></li>{{/content}}</ul>',
                typeaheadProductTemplate: '<h4>Search Results for "{{query}}"</h4><ul>{{#products}}<li><a href="{{{url}}}"><div class="product-tile"><div class="product-image"><img src="{{{image}}}" alt="{{{name}}}"></div><div class="product-tile-details"><div class="product-name">{{{name}}}</div><div class="product-price"><div class="regular-price">{{price}}</div></div></div></div></a></li>{{/products}}</ul>',
                otaCurrentItemFull: '<a href="{{productUrl}}"><div class="product-image">{{{productImage}}}</div><div class="product-details"><div class="product-number">{{id}}</div><div class="product-message">{{productLabel}}</div>{{{ratings}}}<div class="product-name">{{{displayName}}}</div><div class="product-price">{{#isOnSale}}<div class="original-price"><span class="clipped">Price reduced from:</span>{{listPrice}}</div><div class="sale-price">{{salePrice}}</div>{{/isOnSale}}{{^isOnSale}}<div class="regular-price">{{listPrice}}</div>{{/isOnSale}}</div></div></a><button class="button secondary expand quick-view-button" data-pid="{{id}}">Quick View</button>',
                otaSlideItem: '<div class="product-tile"><a href="{{productUrl}}"><div class="product-image">{{{productImage}}}</div>{{{ratings}}}<div class="product-name">{{{displayName}}}</div><div class="product-price">{{#isOnSale}}<div class="original-price"><span class="clipped">Price reduced from:</span>{{listPrice}}</div><div class="sale-price">{{salePrice}}</div><div class="savings">You Save: <span class="saved-price">{{savingsAmount}}</span></div>{{/isOnSale}}{{^isOnSale}}<div class="regular-price">{{listPrice}}</div>{{/isOnSale}}</div></a></div>',
                showHosts: '<option value="">' + c.messages.allHosts + '</option>{{#hosts}}<option value="{{.}}">{{.}}</option>{{/hosts}}',
                orderTotals: '<div class="totals"><div class="total-row subtotal"><div class="total-label">Regular price:</div><div class="total-amount">{{orderRegularPrice}}</div></div><div class="total-row shipping"><div class="total-label"> &#42; Estimated Shipping:</div><div class="total-amount">{{orderShipping}}</div></div>{{#orderShippingDiscount}}<div class="total-row shipping-discount"><div class="total-label"> &#42; Shipping Promo:</div><div class="total-amount">-{{orderShippingDiscount}}</div></div>{{/orderShippingDiscount}}{{#orderSalesDiscount}}<div class="total-row sales-discount"><div class="total-label"> &#42; Sales Discounts:</div><div class="total-amount">-{{orderSalesDiscount}}</div></div>{{/orderSalesDiscount}}{{#orderCouponDiscount}}<div class="total-row coupon-discount"><div class="total-label"> &#42; Coupon Discounts:</div><div class="total-amount">-{{orderCouponDiscount}}</div></div>{{/orderCouponDiscount}}{{#orderAssociateDiscount}}<div class="total-row associate-discount"><div class="total-label"> &#42; Associate Discount:</div><div class="total-amount">-{{orderAssociateDiscount}}</div></div>{{/orderAssociateDiscount}}<div class="total-row tax"><div class="total-label">Sales Tax:<p class="note">Calculated at checkout</p></div><div class="total-amount">{{orderSalesTax}}</div></div><div class="total-row total"><div class="total-label">Estimated Total:</div><div class="total-amount">{{orderFinalTotal}}</div></div>{{#orderTotalDiscount}}<div class="total-row savings"><div class="total-label"> &#42; Total Discounts:</div><div class="total-amount">-{{orderTotalDiscount}}</div></div>{{/orderTotalDiscount}}</div>',
                appliedPromotions: '{{#appliedPromotions}}<div class="applied-promo"><a class="view-details" href="#">{{couponMessage}}</a><span class="icon icon-remove removeCouponFromCart" couponId="{{couponCode}}">remove</span></div>{{/appliedPromotions}}',
                cartItemUnitPrice: '<div class="price"><div class="regular-price">{{itemUnitPrice}}</div>{{#itemUnitOriginalPrice}}<div class="original-price"><span class="clipped">Price reduced from:</span>Was {{itemUnitOriginalPrice}}</div>{{/itemUnitOriginalPrice}}{{#itemUnitSavings}}<div class="savings">Saved {{itemUnitSavings}}</div>{{/itemUnitSavings}}</div>',
                cartItemSubtotal: '<div class="price"><span class="original-price"><span class="clipped">Price reduced from:</span>{{itemSubtotalPrice}}</span>{{#itemSubtotalSavings}}<div class="savings">Saved {{itemSubtotalSavings}}</div>{{/itemSubtotalSavings}}</div>',
                appliedGiftCards: '<table class="non-responsive"><thead><tr><th scope="col">' + c.messages.giftCard + '</th><th scope="col">' + c.messages.status + '</th><th scope="col">&nbsp;</th></tr></thead><tbody>{{#appliedGiftCards}}<tr><td scope="row" data-label="' + c.messages.giftCard + '">{{gcNumber}}</td><td scope="row" data-label="' + c.messages.status + '">' + c.messages.applied + '</td><td scope="row" data-label=""><a href="#" class="remove-gift-card" data-id="{{gcId}}"><span class="icon-remove-x"></span>' + c.messages.remove + "</a></td></tr>{{/appliedGiftCards}}</tbody></table>",
                zoom360: '<div class="zoom-three-sixty"><div class="three-sixty-wrapper"><iframe type="text/html" id="three-sixty-{{index}}" src="{{threeSixtyUrl}}" /></div></div>',
                zoomVideo: '<div class="zoom-video"><div id="product-video-{{index}}"></div><script type="text/javascript">var playerInstance = jwplayer("product-video-{{index}}");playerInstance.setup({androidhls:true,file:"{{{videoUrl}}}",autostart:false,title:"",width:"100%",aspectratio:"16:9",primary:"html5"});</script></div>',
                zoomImage: '<div class="zoom-main"><img src="{{largeUrl}}" class="zoom-main-image"></div>',
                zoomThumbnail: '<div class="viewer-thumb"><img src="{{thumbUrl}}" class="viewer-thumb-image"></div>',
                compareItems: '{{#products}}<li><a href="{{url}}"><img src="{{imageUrl}}" alt="{{name}}"/></a><span class="icon-x" data-product="{{id}}"></span></li>{{/products}}',
                blogHome: '<section class="hero-container"></section><div class="blog-row" id="box-container"></div><div id="bottomContent"><div class="g_section fanreelHome"><div id="curalate-fan-reel-wrapper"></div></div></div>',
                blogCategory: '<div class="blog-row" id="box-container" style="margin-top: 30px;"></div>',
                blogPost: '<div class="blog-row" id="box-container" align="left" itemscope="" itemtype="https://schema.org/BlogPosting"><div class="blogpost post"><h1 itemprop="headline">{{{title}}}</h1><p class="auth" style="text-align: center;"></p></span><hr style="border-top: 1px solid #CCC; margin-bottom: 20px;"/><div class="postSocial"><script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=268802809837721";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script><div class="fb-share-button" data-href="/blog?pid={{ID}}" data-type="button"></div><a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-url="/blog?pid={{ID}}">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script><a href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-href="/blog?pid={{ID}}"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" alt="JTV Pinterest" /></a><script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script><script type="IN/Share" data-url="https://www.linkedin.com/company/jewelry-television"></script><div class="g-plusone" data-size="medium" data-href="/blog?pid={{ID}}" data-annotation="none"></div></div></span><hr style="border-top: 1px solid #CCC; margin-bottom: 20px;"/><script type="text/javascript">(function() {var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/platform.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);})();</script><div class="postImg"><img src="{{featured_image}}" alt="{{title}}" itemprop="image"/><span itemprop="text">{{{content}}}</span></div></div><div class="col-md-3 rightBar"><div class="thumbnail" style="margin-bottom: 30px; margin-top: 30px;"><div class="authorTitle">Author<hr style="margin: 0px; border-color: #ddd;"><div class="caption"></div></div></div></div><div class="relatedPost">Related Posts</div></div>',
                blogAuthor: '<div class="blog-row" id="box-container" style="margin-top: 30px; margin-bottom: 15px;"></div>',
                blogArchive: '<div class="archiveDate"></div><div class="blog-row" id="box-containerSM" style="margin-top: 30px; margin-bottom: 15px;"></div><div class="postsBlock archivePost"></div><div class="dateBlock archiveRight" style="display:block"><h3 style="margin-top: 0px;">ARCHIVES<hr class="noMargin" style="width: 110px; margin-top: 5px; margin-bottom: 5px;"/></h3></div>',
                blogCarousel: '<div class="hero-slider"></div>'
            };
        d.zoomModal = '<div class="sr-only"><div id="modal-title"></div><div id="modal-description"></div></div><div class="product-zoom-viewer"><div class="product-zoom-main viewer-main-images">{{#images}}{{#is360}}' + d.zoom360 + "{{/is360}}{{#isVideo}}" + d.zoomVideo + "{{/isVideo}}{{#isImage}}" + d.zoomImage + '{{/isImage}}{{/images}}</div><div class="viewer-thumbnails-container"><div class="viewer-thumbnails">{{#images}}' + d.zoomThumbnail + "{{/images}}</div></div></div>",
            d.otaRecentItems = '{{#products}}<div class="block-grid-element">' + d.otaSlideItem + "</div>{{/products}}",
            a[b] || (a[b] = {}),
            a[b].templates = d
    }(this, "JTV"),
    function () {
        function a(a, b) {
            function c(a, b) {
                return k.getComputedStyle || (k.getComputedStyle = function (a, b) {
                    return this.el = a,
                        this.getPropertyValue = function (b) {
                            var c = /(\-([a-z]){1})/g;
                            return "float" == b && (b = "styleFloat"),
                                c.test(b) && (b = b.replace(c, function () {
                                    return arguments[2].toUpperCase()
                                })),
                                a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null
                        }
                        ,
                        this
                }
                ),
                    k.getComputedStyle(a, null).getPropertyValue(b)
            }
            function d(b) {
                var c = b || a.clientHeight
                    , d = f(a);
                return Math.max(Math.floor(c / d), 0)
            }
            function e(b) {
                var c = f(a);
                return c * b
            }
            function f(a) {
                var b = c(a, "line-height");
                return "normal" == b && (b = 1.2 * parseInt(c(a, "font-size"))),
                    parseInt(b)
            }
            function g(b) {
                return b.lastChild.children && b.lastChild.children.length > 0 ? g(Array.prototype.slice.call(b.children).pop()) : b.lastChild && b.lastChild.nodeValue && "" != b.lastChild.nodeValue && b.lastChild.nodeValue != l.truncationChar ? b.lastChild : (b.lastChild.parentNode.removeChild(b.lastChild),
                    g(a))
            }
            function h(b, c) {
                function d() {
                    t = l.splitOnChars.slice(0),
                        u = t[0],
                        r = null,
                        s = null
                }
                if (c) {
                    var e = b.nodeValue.replace(l.truncationChar, "");
                    if (r || (u = t.length > 0 ? t.shift() : "",
                        r = e.split(u)),
                        r.length > 1 ? (s = r.pop(),
                            i(b, r.join(u))) : r = null,
                        j && (b.nodeValue = b.nodeValue.replace(l.truncationChar, ""),
                            a.innerHTML = b.nodeValue + " " + j.innerHTML + l.truncationChar),
                        r) {
                        if (a.clientHeight <= c) {
                            if (!(t.length >= 0 && "" != u))
                                return a.innerHTML;
                            i(b, r.join(u) + u + s),
                                r = null
                        }
                    } else
                        "" == u && (i(b, ""),
                            b = g(a),
                            d());
                    return l.animate ? void setTimeout(function () {
                        h(b, c)
                    }, l.animate === !0 ? 10 : l.animate) : h(b, c)
                }
            }
            function i(a, b) {
                a.nodeValue = b + l.truncationChar
            }
            b = b || {};
            var j, k = window, l = {
                clamp: b.clamp || 2,
                useNativeClamp: "undefined" != typeof b.useNativeClamp ? b.useNativeClamp : !0,
                splitOnChars: b.splitOnChars || [".", "-", "–", "—", " "],
                animate: b.animate || !1,
                truncationChar: b.truncationChar || "…",
                truncationHTML: b.truncationHTML
            }, m = a.style, n = a.innerHTML, o = "undefined" != typeof a.style.webkitLineClamp, p = l.clamp, q = p.indexOf && (p.indexOf("px") > -1 || p.indexOf("em") > -1);
            l.truncationHTML && (j = document.createElement("span"),
                j.innerHTML = l.truncationHTML);
            var r, s, t = l.splitOnChars.slice(0), u = t[0];
            "auto" == p ? p = d() : q && (p = d(parseInt(p)));
            var v;
            if (o && l.useNativeClamp)
                m.overflow = "hidden",
                    m.textOverflow = "ellipsis",
                    m.webkitBoxOrient = "vertical",
                    m.display = "-webkit-box",
                    m.webkitLineClamp = p,
                    q && (m.height = l.clamp + "px");
            else {
                var w = e(p);
                w <= a.clientHeight && (v = h(g(a), w))
            }
            return {
                original: n,
                clamped: v
            }
        }
        window.$clamp = a
    }(),
    function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function (a) {
        function b(a) {
            return h.raw ? a : encodeURIComponent(a)
        }
        function c(a) {
            return h.raw ? a : decodeURIComponent(a)
        }
        function d(a) {
            return b(h.json ? JSON.stringify(a) : String(a))
        }
        function e(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return a = decodeURIComponent(a.replace(g, " ")),
                    h.json ? JSON.parse(a) : a
            } catch (b) { }
        }
        function f(b, c) {
            var d = h.raw ? b : e(b);
            return a.isFunction(c) ? c(d) : d
        }
        var g = /\+/g
            , h = a.cookie = function (e, g, i) {
                if (arguments.length > 1 && !a.isFunction(g)) {
                    if (i = a.extend({}, h.defaults, i),
                        "number" == typeof i.expires) {
                        var j = i.expires
                            , k = i.expires = new Date;
                        k.setTime(+k + 864e5 * j)
                    }
                    return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                    var p = m[n].split("=")
                        , q = c(p.shift())
                        , r = p.join("=");
                    if (e && e === q) {
                        l = f(r, g);
                        break
                    }
                    e || void 0 === (r = f(r)) || (l[q] = r)
                }
                return l
            }
            ;
        h.defaults = {},
            a.removeCookie = function (b, c) {
                return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
                    expires: -1
                })),
                    !a.cookie(b))
            }
    }),
    !function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function (a) {
        function b(b) {
            var c = b.data;
            b.isDefaultPrevented() || (b.preventDefault(),
                a(b.target).ajaxSubmit(c))
        }
        function c(b) {
            var c = b.target
                , d = a(c);
            if (!d.is("[type=submit],[type=image]")) {
                var e = d.closest("[type=submit]");
                if (0 === e.length)
                    return;
                c = e[0]
            }
            var f = this;
            if (f.clk = c,
                "image" == c.type)
                if (void 0 !== b.offsetX)
                    f.clk_x = b.offsetX,
                        f.clk_y = b.offsetY;
                else if ("function" == typeof a.fn.offset) {
                    var g = d.offset();
                    f.clk_x = b.pageX - g.left,
                        f.clk_y = b.pageY - g.top
                } else
                    f.clk_x = b.pageX - c.offsetLeft,
                        f.clk_y = b.pageY - c.offsetTop;
            setTimeout(function () {
                f.clk = f.clk_x = f.clk_y = null
            }, 100)
        }
        function d() {
            if (a.fn.ajaxSubmit.debug) {
                var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
            }
        }
        var e = {};
        e.fileapi = void 0 !== a("<input type='file'/>").get(0).files,
            e.formdata = void 0 !== window.FormData;
        var f = !!a.fn.prop;
        a.fn.attr2 = function () {
            if (!f)
                return this.attr.apply(this, arguments);
            var a = this.prop.apply(this, arguments);
            return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
        }
            ,
            a.fn.ajaxSubmit = function (b) {
                function c(c) {
                    var d, e, f = a.param(c, b.traditional).split("&"), g = f.length, h = [];
                    for (d = 0; g > d; d++)
                        f[d] = f[d].replace(/\+/g, " "),
                            e = f[d].split("="),
                            h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
                    return h
                }
                function g(d) {
                    for (var e = new FormData, f = 0; f < d.length; f++)
                        e.append(d[f].name, d[f].value);
                    if (b.extraData) {
                        var g = c(b.extraData);
                        for (f = 0; f < g.length; f++)
                            g[f] && e.append(g[f][0], g[f][1])
                    }
                    b.data = null;
                    var h = a.extend(!0, {}, a.ajaxSettings, b, {
                        contentType: !1,
                        processData: !1,
                        cache: !1,
                        type: i || "POST"
                    });
                    b.uploadProgress && (h.xhr = function () {
                        var c = a.ajaxSettings.xhr();
                        return c.upload && c.upload.addEventListener("progress", function (a) {
                            var c = 0
                                , d = a.loaded || a.position
                                , e = a.total;
                            a.lengthComputable && (c = Math.ceil(d / e * 100)),
                                b.uploadProgress(a, d, e, c)
                        }, !1),
                            c
                    }
                    ),
                        h.data = null;
                    var j = h.beforeSend;
                    return h.beforeSend = function (a, c) {
                        c.data = b.formData ? b.formData : e,
                            j && j.call(this, a, c)
                    }
                        ,
                        a.ajax(h)
                }
                function h(c) {
                    function e(a) {
                        var b = null;
                        try {
                            a.contentWindow && (b = a.contentWindow.document)
                        } catch (c) {
                            d("cannot get iframe.contentWindow document: " + c)
                        }
                        if (b)
                            return b;
                        try {
                            b = a.contentDocument ? a.contentDocument : a.document
                        } catch (c) {
                            d("cannot get iframe.contentDocument: " + c),
                                b = a.document
                        }
                        return b
                    }
                    function g() {
                        function b() {
                            try {
                                var a = e(r).readyState;
                                d("state = " + a),
                                    a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50)
                            } catch (c) {
                                d("Server abort: ", c, " (", c.name, ")"),
                                    h(A),
                                    w && clearTimeout(w),
                                    w = void 0
                            }
                        }
                        var c = l.attr2("target")
                            , f = l.attr2("action")
                            , g = "multipart/form-data"
                            , j = l.attr("enctype") || l.attr("encoding") || g;
                        x.setAttribute("target", o),
                            (!i || /post/i.test(i)) && x.setAttribute("method", "POST"),
                            f != m.url && x.setAttribute("action", m.url),
                            m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
                                encoding: "multipart/form-data",
                                enctype: "multipart/form-data"
                            }),
                            m.timeout && (w = setTimeout(function () {
                                v = !0,
                                    h(z)
                            }, m.timeout));
                        var k = [];
                        try {
                            if (m.extraData)
                                for (var n in m.extraData)
                                    m.extraData.hasOwnProperty(n) && k.push(a.isPlainObject(m.extraData[n]) && m.extraData[n].hasOwnProperty("name") && m.extraData[n].hasOwnProperty("value") ? a('<input type="hidden" name="' + m.extraData[n].name + '">').val(m.extraData[n].value).appendTo(x)[0] : a('<input type="hidden" name="' + n + '">').val(m.extraData[n]).appendTo(x)[0]);
                            m.iframeTarget || q.appendTo("body"),
                                r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1),
                                setTimeout(b, 15);
                            try {
                                x.submit()
                            } catch (p) {
                                var s = document.createElement("form").submit;
                                s.apply(x)
                            }
                        } finally {
                            x.setAttribute("action", f),
                                x.setAttribute("enctype", j),
                                c ? x.setAttribute("target", c) : l.removeAttr("target"),
                                a(k).remove()
                        }
                    }
                    function h(b) {
                        if (!s.aborted && !F) {
                            if (E = e(r),
                                E || (d("cannot access response document"),
                                    b = A),
                                b === z && s)
                                return s.abort("timeout"),
                                    void y.reject(s, "timeout");
                            if (b == A && s)
                                return s.abort("server abort"),
                                    void y.reject(s, "error", "server abort");
                            if (E && E.location.href != m.iframeSrc || v) {
                                r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                                var c, f = "success";
                                try {
                                    if (v)
                                        throw "timeout";
                                    var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
                                    if (d("isXml=" + g),
                                        !g && window.opera && (null === E.body || !E.body.innerHTML) && --G)
                                        return d("requeing onLoad callback, DOM not available"),
                                            void setTimeout(h, 250);
                                    var i = E.body ? E.body : E.documentElement;
                                    s.responseText = i ? i.innerHTML : null,
                                        s.responseXML = E.XMLDocument ? E.XMLDocument : E,
                                        g && (m.dataType = "xml"),
                                        s.getResponseHeader = function (a) {
                                            var b = {
                                                "content-type": m.dataType
                                            };
                                            return b[a.toLowerCase()]
                                        }
                                        ,
                                        i && (s.status = Number(i.getAttribute("status")) || s.status,
                                            s.statusText = i.getAttribute("statusText") || s.statusText);
                                    var j = (m.dataType || "").toLowerCase()
                                        , k = /(json|script|text)/.test(j);
                                    if (k || m.textarea) {
                                        var l = E.getElementsByTagName("textarea")[0];
                                        if (l)
                                            s.responseText = l.value,
                                                s.status = Number(l.getAttribute("status")) || s.status,
                                                s.statusText = l.getAttribute("statusText") || s.statusText;
                                        else if (k) {
                                            var o = E.getElementsByTagName("pre")[0]
                                                , p = E.getElementsByTagName("body")[0];
                                            o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText)
                                        }
                                    } else
                                        "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                                    try {
                                        D = J(s, j, m)
                                    } catch (t) {
                                        f = "parsererror",
                                            s.error = c = t || f
                                    }
                                } catch (t) {
                                    d("error caught: ", t),
                                        f = "error",
                                        s.error = c = t || f
                                }
                                s.aborted && (d("upload aborted"),
                                    f = null),
                                    s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error"),
                                    "success" === f ? (m.success && m.success.call(m.context, D, "success", s),
                                        y.resolve(s.responseText, "success", s),
                                        n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText),
                                            m.error && m.error.call(m.context, s, f, c),
                                            y.reject(s, "error", c),
                                            n && a.event.trigger("ajaxError", [s, m, c])),
                                    n && a.event.trigger("ajaxComplete", [s, m]),
                                    n && !--a.active && a.event.trigger("ajaxStop"),
                                    m.complete && m.complete.call(m.context, s, f),
                                    F = !0,
                                    m.timeout && clearTimeout(w),
                                    setTimeout(function () {
                                        m.iframeTarget ? q.attr("src", m.iframeSrc) : q.remove(),
                                            s.responseXML = null
                                    }, 100)
                            }
                        }
                    }
                    var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0], y = a.Deferred();
                    if (y.abort = function (a) {
                        s.abort(a)
                    }
                        ,
                        c)
                        for (k = 0; k < p.length; k++)
                            j = a(p[k]),
                                f ? j.prop("disabled", !1) : j.removeAttr("disabled");
                    if (m = a.extend(!0, {}, a.ajaxSettings, b),
                        m.context = m.context || m,
                        o = "jqFormIO" + (new Date).getTime(),
                        m.iframeTarget ? (q = a(m.iframeTarget),
                            u = q.attr2("name"),
                            u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'),
                                q.css({
                                    position: "absolute",
                                    top: "-1000px",
                                    left: "-1000px"
                                })),
                        r = q[0],
                        s = {
                            aborted: 0,
                            responseText: null,
                            responseXML: null,
                            status: 0,
                            statusText: "n/a",
                            getAllResponseHeaders: function () { },
                            getResponseHeader: function () { },
                            setRequestHeader: function () { },
                            abort: function (b) {
                                var c = "timeout" === b ? "timeout" : "aborted";
                                d("aborting upload... " + c),
                                    this.aborted = 1;
                                try {
                                    r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop")
                                } catch (e) { }
                                q.attr("src", m.iframeSrc),
                                    s.error = c,
                                    m.error && m.error.call(m.context, s, c, b),
                                    n && a.event.trigger("ajaxError", [s, m, c]),
                                    m.complete && m.complete.call(m.context, s, c)
                            }
                        },
                        n = m.global,
                        n && 0 === a.active++ && a.event.trigger("ajaxStart"),
                        n && a.event.trigger("ajaxSend", [s, m]),
                        m.beforeSend && m.beforeSend.call(m.context, s, m) === !1)
                        return m.global && a.active-- ,
                            y.reject(),
                            y;
                    if (s.aborted)
                        return y.reject(),
                            y;
                    t = x.clk,
                        t && (u = t.name,
                            u && !t.disabled && (m.extraData = m.extraData || {},
                                m.extraData[u] = t.value,
                                "image" == t.type && (m.extraData[u + ".x"] = x.clk_x,
                                    m.extraData[u + ".y"] = x.clk_y)));
                    var z = 1
                        , A = 2
                        , B = a("meta[name=csrf-token]").attr("content")
                        , C = a("meta[name=csrf-param]").attr("content");
                    C && B && (m.extraData = m.extraData || {},
                        m.extraData[C] = B),
                        m.forceSync ? g() : setTimeout(g, 10);
                    var D, E, F, G = 50, H = a.parseXML || function (a, b) {
                        return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"),
                            b.async = "false",
                            b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"),
                            b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                    }
                        , I = a.parseJSON || function (a) {
                            return window.eval("(" + a + ")")
                        }
                        , J = function (b, c, d) {
                            var e = b.getResponseHeader("content-type") || ""
                                , f = "xml" === c || !c && e.indexOf("xml") >= 0
                                , g = f ? b.responseXML : b.responseText;
                            return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"),
                                d && d.dataFilter && (g = d.dataFilter(g, c)),
                                "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)),
                                g
                        };
                    return y
                }
                if (!this.length)
                    return d("ajaxSubmit: skipping submit process - no element selected"),
                        this;
                var i, j, k, l = this;
                "function" == typeof b ? b = {
                    success: b
                } : void 0 === b && (b = {}),
                    i = b.type || this.attr2("method"),
                    j = b.url || this.attr2("action"),
                    k = "string" == typeof j ? a.trim(j) : "",
                    k = k || window.location.href || "",
                    k && (k = (k.match(/^([^#]+)/) || [])[1]),
                    b = a.extend(!0, {
                        url: k,
                        success: a.ajaxSettings.success,
                        type: i || a.ajaxSettings.type,
                        iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
                    }, b);
                var m = {};
                if (this.trigger("form-pre-serialize", [this, b, m]),
                    m.veto)
                    return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
                        this;
                if (b.beforeSerialize && b.beforeSerialize(this, b) === !1)
                    return d("ajaxSubmit: submit aborted via beforeSerialize callback"),
                        this;
                var n = b.traditional;
                void 0 === n && (n = a.ajaxSettings.traditional);
                var o, p = [], q = this.formToArray(b.semantic, p);
                if (b.data && (b.extraData = b.data,
                    o = a.param(b.data, n)),
                    b.beforeSubmit && b.beforeSubmit(q, this, b) === !1)
                    return d("ajaxSubmit: submit aborted via beforeSubmit callback"),
                        this;
                if (this.trigger("form-submit-validate", [q, this, b, m]),
                    m.veto)
                    return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
                        this;
                var r = a.param(q, n);
                o && (r = r ? r + "&" + o : o),
                    "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r,
                        b.data = null) : b.data = r;
                var s = [];
                if (b.resetForm && s.push(function () {
                    l.resetForm()
                }),
                    b.clearForm && s.push(function () {
                        l.clearForm(b.includeHidden)
                    }),
                    !b.dataType && b.target) {
                    var t = b.success || function () { }
                        ;
                    s.push(function (c) {
                        var d = b.replaceTarget ? "replaceWith" : "html";
                        a(b.target)[d](c).each(t, arguments)
                    })
                } else
                    b.success && s.push(b.success);
                if (b.success = function (a, c, d) {
                    for (var e = b.context || this, f = 0, g = s.length; g > f; f++)
                        s[f].apply(e, [a, c, d || l, l])
                }
                    ,
                    b.error) {
                    var u = b.error;
                    b.error = function (a, c, d) {
                        var e = b.context || this;
                        u.apply(e, [a, c, d, l])
                    }
                }
                if (b.complete) {
                    var v = b.complete;
                    b.complete = function (a, c) {
                        var d = b.context || this;
                        v.apply(d, [a, c, l])
                    }
                }
                var w = a("input[type=file]:enabled", this).filter(function () {
                    return "" !== a(this).val()
                })
                    , x = w.length > 0
                    , y = "multipart/form-data"
                    , z = l.attr("enctype") == y || l.attr("encoding") == y
                    , A = e.fileapi && e.formdata;
                d("fileAPI :" + A);
                var B, C = (x || z) && !A;
                b.iframe !== !1 && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function () {
                    B = h(q)
                }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b),
                    l.removeData("jqxhr").data("jqxhr", B);
                for (var D = 0; D < p.length; D++)
                    p[D] = null;
                return this.trigger("form-submit-notify", [this, b]),
                    this
            }
            ,
            a.fn.ajaxForm = function (e) {
                if (e = e || {},
                    e.delegation = e.delegation && a.isFunction(a.fn.on),
                    !e.delegation && 0 === this.length) {
                    var f = {
                        s: this.selector,
                        c: this.context
                    };
                    return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"),
                        a(function () {
                            a(f.s, f.c).ajaxForm(e)
                        }),
                        this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")),
                            this)
                }
                return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c),
                    this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c)
            }
            ,
            a.fn.ajaxFormUnbind = function () {
                return this.unbind("submit.form-plugin click.form-plugin")
            }
            ,
            a.fn.formToArray = function (b, c) {
                var d = [];
                if (0 === this.length)
                    return d;
                var f, g = this[0], h = this.attr("id"), i = b ? g.getElementsByTagName("*") : g.elements;
                if (i && !/MSIE [678]/.test(navigator.userAgent) && (i = a(i).get()),
                    h && (f = a(':input[form="' + h + '"]').get(),
                        f.length && (i = (i || []).concat(f))),
                    !i || !i.length)
                    return d;
                var j, k, l, m, n, o, p;
                for (j = 0,
                    o = i.length; o > j; j++)
                    if (n = i[j],
                        l = n.name,
                        l && !n.disabled)
                        if (b && g.clk && "image" == n.type)
                            g.clk == n && (d.push({
                                name: l,
                                value: a(n).val(),
                                type: n.type
                            }),
                                d.push({
                                    name: l + ".x",
                                    value: g.clk_x
                                }, {
                                    name: l + ".y",
                                    value: g.clk_y
                                }));
                        else if (m = a.fieldValue(n, !0),
                            m && m.constructor == Array)
                            for (c && c.push(n),
                                k = 0,
                                p = m.length; p > k; k++)
                                d.push({
                                    name: l,
                                    value: m[k]
                                });
                        else if (e.fileapi && "file" == n.type) {
                            c && c.push(n);
                            var q = n.files;
                            if (q.length)
                                for (k = 0; k < q.length; k++)
                                    d.push({
                                        name: l,
                                        value: q[k],
                                        type: n.type
                                    });
                            else
                                d.push({
                                    name: l,
                                    value: "",
                                    type: n.type
                                })
                        } else
                            null !== m && "undefined" != typeof m && (c && c.push(n),
                                d.push({
                                    name: l,
                                    value: m,
                                    type: n.type,
                                    required: n.required
                                }));
                if (!b && g.clk) {
                    var r = a(g.clk)
                        , s = r[0];
                    l = s.name,
                        l && !s.disabled && "image" == s.type && (d.push({
                            name: l,
                            value: r.val()
                        }),
                            d.push({
                                name: l + ".x",
                                value: g.clk_x
                            }, {
                                name: l + ".y",
                                value: g.clk_y
                            }))
                }
                return d
            }
            ,
            a.fn.formSerialize = function (b) {
                return a.param(this.formToArray(b))
            }
            ,
            a.fn.fieldSerialize = function (b) {
                var c = [];
                return this.each(function () {
                    var d = this.name;
                    if (d) {
                        var e = a.fieldValue(this, b);
                        if (e && e.constructor == Array)
                            for (var f = 0, g = e.length; g > f; f++)
                                c.push({
                                    name: d,
                                    value: e[f]
                                });
                        else
                            null !== e && "undefined" != typeof e && c.push({
                                name: this.name,
                                value: e
                            })
                    }
                }),
                    a.param(c)
            }
            ,
            a.fn.fieldValue = function (b) {
                for (var c = [], d = 0, e = this.length; e > d; d++) {
                    var f = this[d]
                        , g = a.fieldValue(f, b);
                    null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
                }
                return c
            }
            ,
            a.fieldValue = function (b, c) {
                var d = b.name
                    , e = b.type
                    , f = b.tagName.toLowerCase();
                if (void 0 === c && (c = !0),
                    c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex))
                    return null;
                if ("select" == f) {
                    var g = b.selectedIndex;
                    if (0 > g)
                        return null;
                    for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
                        var m = i[l];
                        if (m.selected) {
                            var n = m.value;
                            if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value),
                                j)
                                return n;
                            h.push(n)
                        }
                    }
                    return h
                }
                return a(b).val()
            }
            ,
            a.fn.clearForm = function (b) {
                return this.each(function () {
                    a("input,select,textarea", this).clearFields(b)
                })
            }
            ,
            a.fn.clearFields = a.fn.clearInputs = function (b) {
                var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                return this.each(function () {
                    var d = this.type
                        , e = this.tagName.toLowerCase();
                    c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
                })
            }
            ,
            a.fn.resetForm = function () {
                return this.each(function () {
                    ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
                })
            }
            ,
            a.fn.enable = function (a) {
                return void 0 === a && (a = !0),
                    this.each(function () {
                        this.disabled = !a
                    })
            }
            ,
            a.fn.selected = function (b) {
                return void 0 === b && (b = !0),
                    this.each(function () {
                        var c = this.type;
                        if ("checkbox" == c || "radio" == c)
                            this.checked = b;
                        else if ("option" == this.tagName.toLowerCase()) {
                            var d = a(this).parent("select");
                            b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1),
                                this.selected = b
                        }
                    })
            }
            ,
            a.fn.ajaxSubmit.debug = !1
    }),
    function (a, b, c) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(b || c)
    }(function (a) {
        var b = function (b, c, d) {
            var e = {
                invalid: [],
                getCaret: function () {
                    try {
                        var a, c = 0, d = b.get(0), f = document.selection, g = d.selectionStart;
                        return f && -1 === navigator.appVersion.indexOf("MSIE 10") ? (a = f.createRange(),
                            a.moveStart("character", -e.val().length),
                            c = a.text.length) : (g || "0" === g) && (c = g),
                            c
                    } catch (h) { }
                },
                setCaret: function (a) {
                    try {
                        if (b.is(":focus")) {
                            var c, d = b.get(0);
                            d.setSelectionRange ? d.setSelectionRange(a, a) : (c = d.createTextRange(),
                                c.collapse(!0),
                                c.moveEnd("character", a),
                                c.moveStart("character", a),
                                c.select())
                        }
                    } catch (e) { }
                },
                events: function () {
                    b.on("keydown.mask", function (a) {
                        b.data("mask-keycode", a.keyCode || a.which),
                            b.data("mask-previus-value", b.val()),
                            b.data("mask-previus-caret-pos", e.getCaret()),
                            e.maskDigitPosMapOld = e.maskDigitPosMap
                    }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", e.behaviour).on("paste.mask drop.mask", function () {
                        setTimeout(function () {
                            b.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function () {
                        b.data("changed", !0)
                    }).on("blur.mask", function () {
                        h === e.val() || b.data("changed") || b.trigger("change"),
                            b.data("changed", !1)
                    }).on("blur.mask", function () {
                        h = e.val()
                    }).on("focus.mask", function (b) {
                        d.selectOnFocus === !0 && a(b.target).select()
                    }).on("focusout.mask", function () {
                        d.clearIfNotMatch && !f.test(e.val()) && e.val("")
                    })
                },
                getRegexMask: function () {
                    for (var a, b, d, e, f, h, i = [], j = 0; j < c.length; j++)
                        a = g.translation[c.charAt(j)],
                            a ? (b = a.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                                d = a.optional,
                                e = a.recursive,
                                e ? (i.push(c.charAt(j)),
                                    f = {
                                        digit: c.charAt(j),
                                        pattern: b
                                    }) : i.push(d || e ? b + "?" : b)) : i.push(c.charAt(j).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return h = i.join(""),
                        f && (h = h.replace(new RegExp("(" + f.digit + "(.*" + f.digit + ")?)"), "($1)?").replace(new RegExp(f.digit, "g"), f.pattern)),
                        new RegExp(h)
                },
                destroyEvents: function () {
                    b.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                },
                val: function (a) {
                    var c, d = b.is("input"), e = d ? "val" : "text";
                    return arguments.length > 0 ? (b[e]() !== a && b[e](a),
                        c = b) : c = b[e](),
                        c
                },
                calculateCaretPosition: function () {
                    var a = b.data("mask-previus-value") || ""
                        , c = e.getMasked()
                        , d = e.getCaret();
                    if (a !== c) {
                        var f = b.data("mask-previus-caret-pos") || 0
                            , g = c.length
                            , h = a.length
                            , i = 0
                            , j = 0
                            , k = 0
                            , l = 0
                            , m = 0;
                        for (m = d; g > m && e.maskDigitPosMap[m]; m++)
                            j++;
                        for (m = d - 1; m >= 0 && e.maskDigitPosMap[m]; m--)
                            i++;
                        for (m = d - 1; m >= 0; m--)
                            e.maskDigitPosMap[m] && k++;
                        for (m = f - 1; m >= 0; m--)
                            e.maskDigitPosMapOld[m] && l++;
                        if (d > h)
                            d = g;
                        else if (f >= d && f !== h) {
                            if (!e.maskDigitPosMapOld[d]) {
                                var n = d;
                                d -= l - k,
                                    d -= i,
                                    e.maskDigitPosMap[d] && (d = n)
                            }
                        } else
                            d > f && (d += k - l,
                                d += j)
                    }
                    return d
                },
                behaviour: function (c) {
                    c = c || window.event,
                        e.invalid = [];
                    var d = b.data("mask-keycode");
                    if (-1 === a.inArray(d, g.byPassKeys)) {
                        var f = e.getMasked()
                            , h = e.getCaret();
                        return setTimeout(function () {
                            e.setCaret(e.calculateCaretPosition())
                        }, 10),
                            e.val(f),
                            e.setCaret(h),
                            e.callbacks(c)
                    }
                },
                getMasked: function (a, b) {
                    var f, h, i = [], j = void 0 === b ? e.val() : b + "", k = 0, l = c.length, m = 0, n = j.length, o = 1, p = "push", q = -1, r = 0, s = [];
                    d.reverse ? (p = "unshift",
                        o = -1,
                        f = 0,
                        k = l - 1,
                        m = n - 1,
                        h = function () {
                            return k > -1 && m > -1
                        }
                    ) : (f = l - 1,
                        h = function () {
                            return l > k && n > m
                        }
                        );
                    for (var t; h();) {
                        var u = c.charAt(k)
                            , v = j.charAt(m)
                            , w = g.translation[u];
                        w ? (v.match(w.pattern) ? (i[p](v),
                            w.recursive && (-1 === q ? q = k : k === f && (k = q - o),
                                f === q && (k -= o)),
                            k += o) : v === t ? (r-- ,
                                t = void 0) : w.optional ? (k += o,
                                    m -= o) : w.fallback ? (i[p](w.fallback),
                                        k += o,
                                        m -= o) : e.invalid.push({
                                            p: m,
                                            v: v,
                                            e: w.pattern
                                        }),
                            m += o) : (a || i[p](u),
                                v === u ? (s.push(m),
                                    m += o) : (t = u,
                                        s.push(m + r),
                                        r++),
                                k += o)
                    }
                    var x = c.charAt(f);
                    l !== n + 1 || g.translation[x] || i.push(x);
                    var y = i.join("");
                    return e.mapMaskdigitPositions(y, s, n),
                        y
                },
                mapMaskdigitPositions: function (a, b, c) {
                    var f = d.reverse ? a.length - c : 0;
                    e.maskDigitPosMap = {};
                    for (var g = 0; g < b.length; g++)
                        e.maskDigitPosMap[b[g] + f] = 1
                },
                callbacks: function (a) {
                    var f = e.val()
                        , g = f !== h
                        , i = [f, a, b, d]
                        , j = function (a, b, c) {
                            "function" == typeof d[a] && b && d[a].apply(this, c)
                        };
                    j("onChange", g === !0, i),
                        j("onKeyPress", g === !0, i),
                        j("onComplete", f.length === c.length, i),
                        j("onInvalid", e.invalid.length > 0, [f, a, b, e.invalid, d])
                }
            };
            b = a(b);
            var f, g = this, h = e.val();
            c = "function" == typeof c ? c(e.val(), void 0, b, d) : c,
                g.mask = c,
                g.options = d,
                g.remove = function () {
                    var a = e.getCaret();
                    return e.destroyEvents(),
                        e.val(g.getCleanVal()),
                        e.setCaret(a),
                        b
                }
                ,
                g.getCleanVal = function () {
                    return e.getMasked(!0)
                }
                ,
                g.getMaskedVal = function (a) {
                    return e.getMasked(!1, a)
                }
                ,
                g.init = function (h) {
                    if (h = h || !1,
                        d = d || {},
                        g.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch,
                        g.byPassKeys = a.jMaskGlobals.byPassKeys,
                        g.translation = a.extend({}, a.jMaskGlobals.translation, d.translation),
                        g = a.extend(!0, {}, g, d),
                        f = e.getRegexMask(),
                        h)
                        e.events(),
                            e.val(e.getMasked());
                    else {
                        d.placeholder && b.attr("placeholder", d.placeholder),
                            b.data("mask") && b.attr("autocomplete", "off");
                        for (var i = 0, j = !0; i < c.length; i++) {
                            var k = g.translation[c.charAt(i)];
                            if (k && k.recursive) {
                                j = !1;
                                break
                            }
                        }
                        j && b.attr("maxlength", c.length),
                            e.destroyEvents(),
                            e.events();
                        var l = e.getCaret();
                        e.val(e.getMasked()),
                            e.setCaret(l)
                    }
                }
                ,
                g.init(!b.is("input"))
        };
        a.maskWatchers = {};
        var c = function () {
            var c = a(this)
                , e = {}
                , f = "data-mask-"
                , g = c.attr("data-mask");
            return c.attr(f + "reverse") && (e.reverse = !0),
                c.attr(f + "clearifnotmatch") && (e.clearIfNotMatch = !0),
                "true" === c.attr(f + "selectonfocus") && (e.selectOnFocus = !0),
                d(c, g, e) ? c.data("mask", new b(this, g, e)) : void 0
        }
            , d = function (b, c, d) {
                d = d || {};
                var e = a(b).data("mask")
                    , f = JSON.stringify
                    , g = a(b).val() || a(b).text();
                try {
                    return "function" == typeof c && (c = c(g)),
                        "object" != typeof e || f(e.options) !== f(d) || e.mask !== c
                } catch (h) { }
            }
            , e = function (a) {
                var b, c = document.createElement("div");
                return a = "on" + a,
                    b = a in c,
                    b || (c.setAttribute(a, "return;"),
                        b = "function" == typeof c[a]),
                    c = null,
                    b
            };
        a.fn.mask = function (c, e) {
            e = e || {};
            var f = this.selector
                , g = a.jMaskGlobals
                , h = g.watchInterval
                , i = e.watchInputs || g.watchInputs
                , j = function () {
                    return d(this, c, e) ? a(this).data("mask", new b(this, c, e)) : void 0
                };
            return a(this).each(j),
                f && "" !== f && i && (clearInterval(a.maskWatchers[f]),
                    a.maskWatchers[f] = setInterval(function () {
                        a(document).find(f).each(j)
                    }, h)),
                this
        }
            ,
            a.fn.masked = function (a) {
                return this.data("mask").getMaskedVal(a)
            }
            ,
            a.fn.unmask = function () {
                return clearInterval(a.maskWatchers[this.selector]),
                    delete a.maskWatchers[this.selector],
                    this.each(function () {
                        var b = a(this).data("mask");
                        b && b.remove().removeData("mask")
                    })
            }
            ,
            a.fn.cleanVal = function () {
                return this.data("mask").getCleanVal()
            }
            ,
            a.applyDataMask = function (b) {
                b = b || a.jMaskGlobals.maskElements;
                var d = b instanceof a ? b : a(b);
                d.filter(a.jMaskGlobals.dataMaskAttr).each(c)
            }
            ;
        var f = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && e("input"),
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        };
        a.jMaskGlobals = a.jMaskGlobals || {},
            f = a.jMaskGlobals = a.extend(!0, {}, f, a.jMaskGlobals),
            f.dataMask && a.applyDataMask(),
            setInterval(function () {
                a.jMaskGlobals.watchDataMask && a.applyDataMask()
            }, f.watchInterval)
    }, window.jQuery, window.Zepto),
    function (a, b) {
        var c, d = a.jQuery || a.Cowboy || (a.Cowboy = {});
        d.throttle = c = function (a, c, e, f) {
            function g() {
                function d() {
                    i = +new Date,
                        e.apply(j, l)
                }
                function g() {
                    h = b
                }
                var j = this
                    , k = +new Date - i
                    , l = arguments;
                f && !h && d(),
                    h && clearTimeout(h),
                    f === b && k > a ? d() : c !== !0 && (h = setTimeout(f ? g : d, f === b ? a - k : a))
            }
            var h, i = 0;
            return "boolean" != typeof c && (f = e,
                e = c,
                c = b),
                d.guid && (g.guid = e.guid = e.guid || d.guid++),
                g
        }
            ,
            d.debounce = function (a, d, e) {
                return e === b ? c(a, d, !1) : c(a, e, d !== !1)
            }
    }(this),
    "JSON" in window && window.JSON || (JSON = {}),
    function () {
        function f(a) {
            return 10 > a ? "0" + a : a
        }
        function quote(a) {
            return escapable.lastIndex = 0,
                escapable.test(a) ? '"' + a.replace(escapable, function (a) {
                    var b = meta[a];
                    return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
        }
        function str(a, b) {
            var c, d, e, f, g, h = gap, i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)),
            "function" == typeof rep && (i = rep.call(b, a, i)),
            typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i)
                        return "null";
                    if (gap += indent,
                        g = [],
                        "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length,
                            c = 0; f > c; c += 1)
                            g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]",
                            gap = h,
                            e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length,
                            c = 0; f > c; c += 1)
                            d = rep[c],
                                "string" == typeof d && (e = str(d, i),
                                    e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i)
                            Object.hasOwnProperty.call(i, d) && (e = str(d, i),
                                e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}",
                        gap = h,
                        e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (a) {
            return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
        }
            ,
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
                return this.valueOf()
            }
        );
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
            var d;
            if (gap = "",
                indent = "",
                "number" == typeof c)
                for (d = 0; c > d; d += 1)
                    indent += " ";
            else
                "string" == typeof c && (indent = c);
            if (rep = b,
                b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        }
        ),
            "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                function walk(a, b) {
                    var c, d, e = a[b];
                    if (e && "object" == typeof e)
                        for (c in e)
                            Object.hasOwnProperty.call(e, c) && (d = walk(e, c),
                                void 0 !== d ? e[c] = d : delete e[c]);
                    return reviver.call(a, b, e)
                }
                var j;
                if (cx.lastIndex = 0,
                    cx.test(text) && (text = text.replace(cx, function (a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    })),
                    /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return j = eval("(" + text + ")"),
                        "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
            )
    }();
var form2js = function () {
    function a(a, d, e, f, g) {
        ("undefined" == typeof e || null == e) && (e = !0),
            ("undefined" == typeof d || null == d) && (d = "."),
            arguments.length < 5 && (g = !1),
            a = "string" == typeof a ? document.getElementById(a) : a;
        var h, i = [], j = 0;
        if (a.constructor == Array || "undefined" != typeof NodeList && a.constructor == NodeList)
            for (; h = a[j++];)
                i = i.concat(c(h, f, g));
        else
            i = c(a, f, g);
        return b(i, e, d)
    }
    function b(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = {};
        for (d = 0; d < a.length; d++)
            if (h = a[d].value,
                !b || "" !== h && null !== h) {
                for (o = a[d].name,
                    p = o.split(c),
                    i = [],
                    j = q,
                    k = "",
                    e = 0; e < p.length; e++)
                    if (n = p[e].split("]["),
                        n.length > 1)
                        for (f = 0; f < n.length; f++)
                            if (0 == f ? n[f] = n[f] + "]" : f == n.length - 1 ? n[f] = "[" + n[f] : n[f] = "[" + n[f] + "]",
                                m = n[f].match(/([a-z_]+)?\[([a-z_][a-z0-9_]+?)\]/i))
                                for (g = 1; g < m.length; g++)
                                    m[g] && i.push(m[g]);
                            else
                                i.push(n[f]);
                    else
                        i = i.concat(n);
                for (e = 0; e < i.length; e++)
                    n = i[e],
                        n.indexOf("[]") > -1 && e == i.length - 1 ? (l = n.substr(0, n.indexOf("[")),
                            k += l,
                            j[l] || (j[l] = []),
                            j[l].push(h)) : n.indexOf("[") > -1 ? (l = n.substr(0, n.indexOf("[")),
                                m = n.replace(/(^([a-z_]+)?\[)|(\]$)/gi, ""),
                                k += "_" + l + "_" + m,
                                r[k] || (r[k] = {}),
                                "" == l || j[l] || (j[l] = []),
                                e == i.length - 1 ? "" == l ? (j.push(h),
                                    r[k][m] = j[j.length - 1]) : (j[l].push(h),
                                        r[k][m] = j[l][j[l].length - 1]) : r[k][m] || (/^[a-z_]+\[?/i.test(i[e + 1]) ? j[l].push({}) : j[l].push([]),
                                            r[k][m] = j[l][j[l].length - 1]),
                                j = r[k][m]) : (k += n,
                                    e < i.length - 1 ? (j[n] || (j[n] = {}),
                                        j = j[n]) : j[n] = h)
            }
        return q
    }
    function c(a, b, c) {
        var f = e(a, b, c);
        return f.length > 0 ? f : d(a, b, c)
    }
    function d(a, b, c) {
        for (var d = [], f = a.firstChild; f;)
            d = d.concat(e(f, b, c)),
                f = f.nextSibling;
        return d
    }
    function e(a, b, c) {
        var e, h, i, j = f(a, c);
        return e = b && b(a),
            e && e.name ? i = [e] : "" != j && a.nodeName.match(/INPUT|TEXTAREA/i) ? (h = g(a),
                i = [{
                    name: j,
                    value: h
                }]) : "" != j && a.nodeName.match(/SELECT/i) ? (h = g(a),
                    i = [{
                        name: j.replace(/\[\]$/, ""),
                        value: h
                    }]) : i = d(a, b, c),
            i
    }
    function f(a, b) {
        return a.name && "" != a.name ? a.name : b && a.id && "" != a.id ? a.id : ""
    }
    function g(a) {
        if (a.disabled)
            return null;
        switch (a.nodeName) {
            case "INPUT":
            case "TEXTAREA":
                switch (a.type.toLowerCase()) {
                    case "radio":
                    case "checkbox":
                        if (a.checked && "true" === a.value)
                            return !0;
                        if (!a.checked && "true" === a.value)
                            return !1;
                        if (a.checked)
                            return a.value;
                        break;
                    case "button":
                    case "reset":
                    case "submit":
                    case "image":
                        return "";
                    default:
                        return a.value
                }
                break;
            case "SELECT":
                return h(a)
        }
        return null
    }
    function h(a) {
        var b, c, d, e = a.multiple, f = [];
        if (!e)
            return a.value;
        for (b = a.getElementsByTagName("option"),
            c = 0,
            d = b.length; d > c; c++)
            b[c].selected && f.push(b[c].value);
        return f
    }
    return a
}()
    , js2form = function () {
        function a(a, d, f, g, h) {
            arguments.length < 3 && (f = "."),
                arguments.length < 4 && (g = null),
                arguments.length < 5 && (h = !1);
            var j, k;
            j = e(d),
                k = c(a, h, f, {}, !1);
            for (var l = 0; l < j.length; l++) {
                var m = j[l].name
                    , n = j[l].value;
                "undefined" != typeof k[m] ? b(k[m], n) : "undefined" != typeof k[m.replace(i, "[]")] && b(k[m.replace(i, "[]")], n)
            }
        }
        function b(a, b) {
            var c, d, e;
            if (a instanceof Array)
                for (d = 0; d < a.length; d++)
                    (a[d].value == b || b === !0) && (a[d].checked = !0);
            else if (l.test(a.nodeName))
                a.value = b;
            else if (/SELECT/i.test(a.nodeName))
                for (c = a.getElementsByTagName("option"),
                    d = 0,
                    e = c.length; e > d; d++)
                    if (c[d].value == b) {
                        if (c[d].selected = !0,
                            a.multiple)
                            break
                    } else
                        a.multiple || (c[d].selected = !1)
        }
        function c(a, b, e, f, g) {
            arguments.length < 4 && (f = {});
            for (var h, j, k, l, m, n, o, p = {}, q = a.firstChild; q;) {
                if (h = "",
                    q.name && "" != q.name ? h = q.name : b && q.id && "" != q.id && (h = q.id),
                    "" == h) {
                    var r = c(q, b, e, f, g);
                    for (k in r)
                        if ("undefined" == typeof p[k])
                            p[k] = r[k];
                        else
                            for (l = 0; l < r[k].length; l++)
                                p[k].push(r[k][l])
                } else if (/SELECT/i.test(q.nodeName))
                    for (m = 0,
                        o = q.getElementsByTagName("option"),
                        n = o.length; n > m; m++)
                        g && (o[m].selected = !1),
                            j = d(h, e, f),
                            p[j] = q;
                else
                    /INPUT/i.test(q.nodeName) && /CHECKBOX|RADIO/i.test(q.type) ? (g && (q.checked = !1),
                        j = d(h, e, f),
                        j = j.replace(i, "[]"),
                        p[j] || (p[j] = []),
                        p[j].push(q)) : (g && (q.value = ""),
                            j = d(h, e, f),
                            p[j] = q);
                q = q.nextSibling
            }
            return p
        }
        function d(a, b, c) {
            var d, e, f, g, h, i, l = [], m = a.split(b);
            for (a = a.replace(k, "[$1].[$2]"),
                i = 0; i < m.length; i++)
                d = m[i],
                    l.push(d),
                    e = d.match(j),
                    null != e && (f = l.join(b),
                        g = f.replace(j, "$3"),
                        f = f.replace(j, "$1"),
                        "undefined" == typeof c[f] && (c[f] = {
                            lastIndex: -1,
                            indexes: {}
                        }),
                        ("" == g || "undefined" == typeof c[f].indexes[g]) && (c[f].lastIndex++ ,
                            c[f].indexes[g] = c[f].lastIndex),
                        h = c[f].indexes[g],
                        l[l.length - 1] = d.replace(j, "$1$2" + h + "$4"));
            return f = l.join(b),
                f = f.replace("].[", "][")
        }
        function e(a, b) {
            var c, d, e = [];
            if (1 == arguments.length && (b = 0),
                null == a)
                e = [{
                    name: "",
                    value: null
                }];
            else if ("string" == typeof a || "number" == typeof a || "date" == typeof a || "boolean" == typeof a)
                e = [{
                    name: "",
                    value: a
                }];
            else if (a instanceof Array)
                for (c = 0; c < a.length; c++)
                    d = "[" + c + "]",
                        e = e.concat(f(a[c], d, b + 1));
            else
                for (c in a)
                    d = c,
                        e = e.concat(f(a[c], d, b + 1));
            return e
        }
        function f(a, b, c) {
            var d, f, i, j = [], k = e(a, c + 1);
            for (f = 0; f < k.length; f++)
                d = b,
                    g.test(k[f].name) ? d += k[f].name : h.test(k[f].name) && (d += "." + k[f].name),
                    i = {
                        name: d,
                        value: k[f].value
                    },
                    j.push(i);
            return j
        }
        var g = /^\[\d+?\]/
            , h = /^[a-zA-Z_][a-zA-Z_0-9]+/
            , i = /\[[0-9]+?\]$/
            , j = /(.*)(\[)([0-9]*)(\])$/
            , k = /\[([0-9]+)\]\[([0-9]+)\]/g
            , l = /INPUT|TEXTAREA/i;
        return a
    }();
!function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (c) {
        return b(a, c)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = b(a, require("jquery")) : a.lity = b(a, a.jQuery || a.Zepto)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = B();
        return N && a.length ? (a.one(N, b.resolve),
            setTimeout(b.resolve, 500)) : b.resolve(),
            b.promise()
    }
    function d(a, c, d) {
        if (1 === arguments.length)
            return b.extend({}, a);
        if ("string" == typeof c) {
            if ("undefined" == typeof d)
                return "undefined" == typeof a[c] ? null : a[c];
            a[c] = d
        } else
            b.extend(a, c);
        return this
    }
    function e(a) {
        for (var b, c = decodeURI(a.split("#")[0]).split("&"), d = {}, e = 0, f = c.length; f > e; e++)
            c[e] && (b = c[e].split("="),
                d[b[0]] = b[1]);
        return d
    }
    function f(a, c) {
        return a + (a.indexOf("?") > -1 ? "&" : "?") + b.param(c)
    }
    function g(a, b) {
        var c = a.indexOf("#");
        return -1 === c ? b : (c > 0 && (a = a.substr(c)),
            b + a)
    }
    function h(a) {
        return b('<span class="lity-error"/>').append(a)
    }
    function i(a, c) {
        var d = c.opener() && c.opener().data("lity-desc") || "Image with no description"
            , e = b('<img src="' + a + '" alt="' + d + '"/>')
            , f = B()
            , g = function () {
                f.reject(h("Failed loading image"))
            };
        return e.on("load", function () {
            return 0 === this.naturalWidth ? g() : void f.resolve(e)
        }).on("error", g),
            f.promise()
    }
    function j(a, c) {
        var d, e, f;
        try {
            d = b(a)
        } catch (g) {
            return !1
        }
        return d.length ? (e = b('<i style="display:none !important"/>'),
            f = d.hasClass("lity-hide"),
            c.element().one("lity:remove", function () {
                e.before(d).remove(),
                    f && !d.closest(".lity-content").length && d.addClass("lity-hide")
            }),
            d.removeClass("lity-hide").after(e)) : !1
    }
    function k(a) {
        var c = J.exec(a);
        return c ? o(g(a, f("https://www.youtube" + (c[2] || "") + ".com/embed/" + c[4], b.extend({
            autoplay: 1
        }, e(c[5] || ""))))) : !1
    }
    function l(a) {
        var c = K.exec(a);
        return c ? o(g(a, f("https://player.vimeo.com/video/" + c[3], b.extend({
            autoplay: 1
        }, e(c[4] || ""))))) : !1
    }
    function m(a) {
        var c = M.exec(a);
        return c ? (0 !== a.indexOf("http") && (a = "https:" + a),
            o(g(a, f("https://www.facebook.com/plugins/video.php?href=" + a, b.extend({
                autoplay: 1
            }, e(c[4] || "")))))) : !1
    }
    function n(a) {
        var b = L.exec(a);
        return b ? o(g(a, f("https://www.google." + b[3] + "/maps?" + b[6], {
            output: b[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
        }))) : !1
    }
    function o(a) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' + a + '"/></div>'
    }
    function p() {
        return z.documentElement.clientHeight ? z.documentElement.clientHeight : Math.round(A.height())
    }
    function q(a) {
        var b = v();
        b && (27 === a.keyCode && b.options("esc") && b.close(),
            9 === a.keyCode && r(a, b))
    }
    function r(a, b) {
        var c = b.element().find(G)
            , d = c.index(z.activeElement);
        a.shiftKey && 0 >= d ? (c.get(c.length - 1).focus(),
            a.preventDefault()) : a.shiftKey || d !== c.length - 1 || (c.get(0).focus(),
                a.preventDefault())
    }
    function s() {
        b.each(D, function (a, b) {
            b.resize()
        })
    }
    function t(a) {
        1 === D.unshift(a) && (C.addClass("lity-active"),
            A.on({
                resize: s,
                keydown: q
            })),
            b("body > *").not(a.element()).addClass("lity-hidden").each(function () {
                var a = b(this);
                void 0 === a.data(F) && a.data(F, a.attr(E) || null)
            }).attr(E, "true")
    }
    function u(a) {
        var c;
        a.element().attr(E, "true"),
            1 === D.length && (C.removeClass("lity-active"),
                A.off({
                    resize: s,
                    keydown: q
                })),
            D = b.grep(D, function (b) {
                return a !== b
            }),
            c = D.length ? D[0].element() : b(".lity-hidden"),
            c.removeClass("lity-hidden").each(function () {
                var a = b(this)
                    , c = a.data(F);
                c ? a.attr(E, c) : a.removeAttr(E),
                    a.removeData(F)
            })
    }
    function v() {
        return 0 === D.length ? null : D[0]
    }
    function w(a, c, d, e) {
        var f, g = "inline", h = b.extend({}, d);
        return e && h[e] ? (f = h[e](a, c),
            g = e) : (b.each(["inline", "iframe"], function (a, b) {
                delete h[b],
                    h[b] = d[b]
            }),
                b.each(h, function (b, d) {
                    return d ? d.test && !d.test(a, c) ? !0 : (f = d(a, c),
                        !1 !== f ? (g = b,
                            !1) : void 0) : !0
                })),
            {
                handler: g,
                content: f || ""
            }
    }
    function x(a, e, f, g) {
        function h(a) {
            k = b(a).css("max-height", p() + "px"),
                j.find(".lity-loader").each(function () {
                    var a = b(this);
                    c(a).always(function () {
                        a.remove()
                    })
                }),
                j.removeClass("lity-loading").find(".lity-content").empty().append(k),
                m = !0,
                k.trigger("lity:ready", [l])
        }
        var i, j, k, l = this, m = !1, n = !1;
        e = b.extend({}, H, e),
            j = b(e.template),
            l.element = function () {
                return j
            }
            ,
            l.opener = function () {
                return f
            }
            ,
            l.options = b.proxy(d, l, e),
            l.handlers = b.proxy(d, l, e.handlers),
            l.resize = function () {
                m && !n && k.css("max-height", p() + "px").trigger("lity:resize", [l])
            }
            ,
            l.close = function () {
                if (m && !n) {
                    n = !0,
                        u(l);
                    var a = B();
                    if (g && (z.activeElement === j[0] || b.contains(j[0], z.activeElement)))
                        try {
                            g.focus()
                        } catch (d) { }
                    return k.trigger("lity:close", [l]),
                        j.removeClass("lity-opened").addClass("lity-closed"),
                        c(k.add(j)).always(function () {
                            k.trigger("lity:remove", [l]),
                                j.remove(),
                                j = void 0,
                                a.resolve()
                        }),
                        a.promise()
                }
            }
            ,
            i = w(a, l, e.handlers, e.handler),
            j.attr(E, "false").addClass("lity-loading lity-opened lity-" + i.handler).appendTo("body").focus().on("click", "[data-lity-close]", function (a) {
                b(a.target).is("[data-lity-close]") && l.close()
            }).trigger("lity:open", [l]),
            t(l),
            b.when(i.content).always(h)
    }
    function y(a, c, d) {
        a.preventDefault ? (a.preventDefault(),
            d = b(this),
            a = d.data("lity-target") || d.attr("href") || d.attr("src")) : d = b(d);
        var e = new x(a, b.extend({}, d.data("lity-options") || d.data("lity"), c), d, z.activeElement);
        return a.preventDefault ? void 0 : e
    }
    var z = a.document
        , A = b(a)
        , B = b.Deferred
        , C = b("html")
        , D = []
        , E = "aria-hidden"
        , F = "lity-" + E
        , G = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])'
        , H = {
            esc: !0,
            handler: null,
            handlers: {
                image: i,
                inline: j,
                youtube: k,
                vimeo: l,
                googlemaps: n,
                facebookvideo: m,
                iframe: o
            },
            template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
        }
        , I = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i
        , J = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i
        , K = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/
        , L = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i
        , M = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i
        , N = function () {
            var a = z.createElement("div")
                , b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c])
                    return b[c];
            return !1
        }();
    return i.test = function (a) {
        return I.test(a)
    }
        ,
        y.version = "2.4.0",
        y.options = b.proxy(d, y, H),
        y.handlers = b.proxy(d, y, H.handlers),
        y.current = v,
        b(z).on("click.lity", "[data-lity]", y),
        y
}),
    function (a, b) {
        "object" == typeof exports && exports ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b(a.Mustache = {})
    }(this, function (a) {
        function b(a) {
            return "function" == typeof a
        }
        function c(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        function d(a, b) {
            return o.call(a, b)
        }
        function e(a) {
            return !d(p, a)
        }
        function f(a) {
            return String(a).replace(/[&<>"'\/]/g, function (a) {
                return q[a]
            })
        }
        function g(b, d) {
            function f() {
                if (w && !x)
                    for (; q.length;)
                        delete p[q.pop()];
                else
                    q = [];
                w = !1,
                    x = !1
            }
            function g(a) {
                if ("string" == typeof a && (a = a.split(s, 2)),
                    !n(a) || 2 !== a.length)
                    throw new Error("Invalid tags: " + a);
                k = new RegExp(c(a[0]) + "\\s*"),
                    l = new RegExp("\\s*" + c(a[1])),
                    m = new RegExp("\\s*" + c("}" + a[1]))
            }
            if (!b)
                return [];
            var k, l, m, o = [], p = [], q = [], w = !1, x = !1;
            g(d || a.tags);
            for (var y, z, A, B, C, D, E = new j(b); !E.eos();) {
                if (y = E.pos,
                    A = E.scanUntil(k))
                    for (var F = 0, G = A.length; G > F; ++F)
                        B = A.charAt(F),
                            e(B) ? q.push(p.length) : x = !0,
                            p.push(["text", B, y, y + 1]),
                            y += 1,
                            "\n" === B && f();
                if (!E.scan(k))
                    break;
                if (w = !0,
                    z = E.scan(v) || "name",
                    E.scan(r),
                    "=" === z ? (A = E.scanUntil(t),
                        E.scan(t),
                        E.scanUntil(l)) : "{" === z ? (A = E.scanUntil(m),
                            E.scan(u),
                            E.scanUntil(l),
                            z = "&") : A = E.scanUntil(l),
                    !E.scan(l))
                    throw new Error("Unclosed tag at " + E.pos);
                if (C = [z, A, y, E.pos],
                    p.push(C),
                    "#" === z || "^" === z)
                    o.push(C);
                else if ("/" === z) {
                    if (D = o.pop(),
                        !D)
                        throw new Error('Unopened section "' + A + '" at ' + y);
                    if (D[1] !== A)
                        throw new Error('Unclosed section "' + D[1] + '" at ' + y)
                } else
                    "name" === z || "{" === z || "&" === z ? x = !0 : "=" === z && g(A)
            }
            if (D = o.pop())
                throw new Error('Unclosed section "' + D[1] + '" at ' + E.pos);
            return i(h(p))
        }
        function h(a) {
            for (var b, c, d = [], e = 0, f = a.length; f > e; ++e)
                b = a[e],
                    b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1],
                        c[3] = b[3]) : (d.push(b),
                            c = b));
            return d
        }
        function i(a) {
            for (var b, c, d = [], e = d, f = [], g = 0, h = a.length; h > g; ++g)
                switch (b = a[g],
                b[0]) {
                    case "#":
                    case "^":
                        e.push(b),
                            f.push(b),
                            e = b[4] = [];
                        break;
                    case "/":
                        c = f.pop(),
                            c[5] = b[2],
                            e = f.length > 0 ? f[f.length - 1][4] : d;
                        break;
                    default:
                        e.push(b)
                }
            return d
        }
        function j(a) {
            this.string = a,
                this.tail = a,
                this.pos = 0
        }
        function k(a, b) {
            this.view = null == a ? {} : a,
                this.cache = {
                    ".": this.view
                },
                this.parent = b
        }
        function l() {
            this.cache = {}
        }
        var m = Object.prototype.toString
            , n = Array.isArray || function (a) {
                return "[object Array]" === m.call(a)
            }
            , o = RegExp.prototype.test
            , p = /\S/
            , q = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            }
            , r = /\s*/
            , s = /\s+/
            , t = /\s*=/
            , u = /\s*\}/
            , v = /#|\^|\/|>|\{|&|=|!/;
        j.prototype.eos = function () {
            return "" === this.tail
        }
            ,
            j.prototype.scan = function (a) {
                var b = this.tail.match(a);
                if (!b || 0 !== b.index)
                    return "";
                var c = b[0];
                return this.tail = this.tail.substring(c.length),
                    this.pos += c.length,
                    c
            }
            ,
            j.prototype.scanUntil = function (a) {
                var b, c = this.tail.search(a);
                switch (c) {
                    case -1:
                        b = this.tail,
                            this.tail = "";
                        break;
                    case 0:
                        b = "";
                        break;
                    default:
                        b = this.tail.substring(0, c),
                            this.tail = this.tail.substring(c)
                }
                return this.pos += b.length,
                    b
            }
            ,
            k.prototype.push = function (a) {
                return new k(a, this)
            }
            ,
            k.prototype.lookup = function (a) {
                var c, d = this.cache;
                if (a in d)
                    c = d[a];
                else {
                    for (var e, f, g = this; g;) {
                        if (a.indexOf(".") > 0)
                            for (c = g.view,
                                e = a.split("."),
                                f = 0; null != c && f < e.length;)
                                c = c[e[f++]];
                        else
                            "object" == typeof g.view && (c = g.view[a]);
                        if (null != c)
                            break;
                        g = g.parent
                    }
                    d[a] = c
                }
                return b(c) && (c = c.call(this.view)),
                    c
            }
            ,
            l.prototype.clearCache = function () {
                this.cache = {}
            }
            ,
            l.prototype.parse = function (a, b) {
                var c = this.cache
                    , d = c[a];
                return null == d && (d = c[a] = g(a, b)),
                    d
            }
            ,
            l.prototype.render = function (a, b, c) {
                var d = this.parse(a)
                    , e = b instanceof k ? b : new k(b);
                return this.renderTokens(d, e, c, a)
            }
            ,
            l.prototype.renderTokens = function (c, d, e, f) {
                function g(a) {
                    return k.render(a, d, e)
                }
                for (var h, i, j = "", k = this, l = 0, m = c.length; m > l; ++l)
                    switch (h = c[l],
                    h[0]) {
                        case "#":
                            if (i = d.lookup(h[1]),
                                !i)
                                continue;
                            if (n(i))
                                for (var o = 0, p = i.length; p > o; ++o)
                                    j += this.renderTokens(h[4], d.push(i[o]), e, f);
                            else if ("object" == typeof i || "string" == typeof i)
                                j += this.renderTokens(h[4], d.push(i), e, f);
                            else if (b(i)) {
                                if ("string" != typeof f)
                                    throw new Error("Cannot use higher-order sections without the original template");
                                i = i.call(d.view, f.slice(h[3], h[5]), g),
                                    null != i && (j += i)
                            } else
                                j += this.renderTokens(h[4], d, e, f);
                            break;
                        case "^":
                            i = d.lookup(h[1]),
                                (!i || n(i) && 0 === i.length) && (j += this.renderTokens(h[4], d, e, f));
                            break;
                        case ">":
                            if (!e)
                                continue;
                            i = b(e) ? e(h[1]) : e[h[1]],
                                null != i && (j += this.renderTokens(this.parse(i), d, e, i));
                            break;
                        case "&":
                            i = d.lookup(h[1]),
                                null != i && (j += i);
                            break;
                        case "name":
                            i = d.lookup(h[1]),
                                null != i && (j += a.escape(i));
                            break;
                        case "text":
                            j += h[1]
                    }
                return j
            }
            ,
            a.name = "mustache.js",
            a.version = "1.0.0",
            a.tags = ["{{", "}}"];
        var w = new l;
        a.clearCache = function () {
            return w.clearCache()
        }
            ,
            a.parse = function (a, b) {
                return w.parse(a, b)
            }
            ,
            a.render = function (a, b, c) {
                return w.render(a, b, c)
            }
            ,
            a.to_html = function (c, d, e, f) {
                var g = a.render(c, d, e);
                return b(f) ? void f(g) : g
            }
            ,
            a.escape = f,
            a.Scanner = j,
            a.Context = k,
            a.Writer = l
    }),
    function (a) {
        var b = navigator.userAgent;
        a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
            var b, c = document.createElement("source"), d = function (a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(),
                    e.insertBefore(b, e.firstElementChild),
                    setTimeout(function () {
                        e.removeChild(b)
                    })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth,
                        d = a.sizes,
                        a.sizes += ",100vw",
                        setTimeout(function () {
                            a.sizes = d
                        }))
            }, e = function () {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++)
                    d(b[a])
            }, f = function () {
                clearTimeout(b),
                    b = setTimeout(e, 99)
            }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function () {
                f(),
                    g && g.addListener && g.addListener(f)
            };
            return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h),
                f
        }())
    }(window),
    function (a, b, c) {
        function d(a) {
            return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
        }
        function e(b, c) {
            var d = new a.Image;
            return d.onerror = function () {
                A[b] = !1,
                    ba()
            }
                ,
                d.onload = function () {
                    A[b] = 1 === d.width,
                        ba()
                }
                ,
                d.src = c,
                "pending"
        }
        function f() {
            M = !1,
                P = a.devicePixelRatio,
                N = {},
                O = {},
                s.DPR = P || 1,
                Q.width = Math.max(a.innerWidth || 0, z.clientWidth),
                Q.height = Math.max(a.innerHeight || 0, z.clientHeight),
                Q.vw = Q.width / 100,
                Q.vh = Q.height / 100,
                r = [Q.height, Q.width, P].join("-"),
                Q.em = s.getEmValue(),
                Q.rem = Q.em
        }
        function g(a, b, c, d) {
            var e, f, g, h;
            return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c,
                e = Math.pow(a - .6, 1.5),
                g = f * e,
                d && (g += .1 * e),
                h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a,
                h > c
        }
        function h(a) {
            var b, c = s.getSet(a), d = !1;
            "pending" !== c && (d = r,
                c && (b = s.setRes(c),
                    s.applySetCandidate(b, a))),
                a[s.ns].evaled = d
        }
        function i(a, b) {
            return a.res - b.res
        }
        function j(a, b, c) {
            var d;
            return !c && b && (c = a[s.ns].sets,
                c = c && c[c.length - 1]),
                d = k(b, c),
                d && (b = s.makeUrl(b),
                    a[s.ns].curSrc = b,
                    a[s.ns].curCan = d,
                    d.res || aa(d, d.set.sizes)),
                d
        }
        function k(a, b) {
            var c, d, e;
            if (a && b)
                for (e = s.parseSet(b),
                    a = s.makeUrl(a),
                    c = 0; c < e.length; c++)
                    if (a === s.makeUrl(e[c].url)) {
                        d = e[c];
                        break
                    }
            return d
        }
        function l(a, b) {
            var c, d, e, f, g = a.getElementsByTagName("source");
            for (c = 0,
                d = g.length; d > c; c++)
                e = g[c],
                    e[s.ns] = !0,
                    f = e.getAttribute("srcset"),
                    f && b.push({
                        srcset: f,
                        media: e.getAttribute("media"),
                        type: e.getAttribute("type"),
                        sizes: e.getAttribute("sizes")
                    })
        }
        function m(a, b) {
            function c(b) {
                var c, d = b.exec(a.substring(m));
                return d ? (c = d[0],
                    m += c.length,
                    c) : void 0
            }
            function e() {
                var a, c, d, e, f, i, j, k, l, m = !1, o = {};
                for (e = 0; e < h.length; e++)
                    f = h[e],
                        i = f[f.length - 1],
                        j = f.substring(0, f.length - 1),
                        k = parseInt(j, 10),
                        l = parseFloat(j),
                        X.test(j) && "w" === i ? ((a || c) && (m = !0),
                            0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0),
                                0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0),
                                    0 === k ? m = !0 : d = k) : m = !0;
                m || (o.url = g,
                    a && (o.w = a),
                    c && (o.d = c),
                    d && (o.h = d),
                    d || c || a || (o.d = 1),
                    1 === o.d && (b.has1x = !0),
                    o.set = b,
                    n.push(o))
            }
            function f() {
                for (c(T),
                    i = "",
                    j = "in descriptor"; ;) {
                    if (k = a.charAt(m),
                        "in descriptor" === j)
                        if (d(k))
                            i && (h.push(i),
                                i = "",
                                j = "after descriptor");
                        else {
                            if ("," === k)
                                return m += 1,
                                    i && h.push(i),
                                    void e();
                            if ("(" === k)
                                i += k,
                                    j = "in parens";
                            else {
                                if ("" === k)
                                    return i && h.push(i),
                                        void e();
                                i += k
                            }
                        }
                    else if ("in parens" === j)
                        if (")" === k)
                            i += k,
                                j = "in descriptor";
                        else {
                            if ("" === k)
                                return h.push(i),
                                    void e();
                            i += k
                        }
                    else if ("after descriptor" === j)
                        if (d(k))
                            ;
                        else {
                            if ("" === k)
                                return void e();
                            j = "in descriptor",
                                m -= 1
                        }
                    m += 1
                }
            }
            for (var g, h, i, j, k, l = a.length, m = 0, n = []; ;) {
                if (c(U),
                    m >= l)
                    return n;
                g = c(V),
                    h = [],
                    "," === g.slice(-1) ? (g = g.replace(W, ""),
                        e()) : f()
            }
        }
        function n(a) {
            function b(a) {
                function b() {
                    f && (g.push(f),
                        f = "")
                }
                function c() {
                    g[0] && (h.push(g),
                        g = [])
                }
                for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ;) {
                    if (e = a.charAt(j),
                        "" === e)
                        return b(),
                            c(),
                            h;
                    if (k) {
                        if ("*" === e && "/" === a[j + 1]) {
                            k = !1,
                                j += 2,
                                b();
                            continue
                        }
                        j += 1
                    } else {
                        if (d(e)) {
                            if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                                j += 1;
                                continue
                            }
                            if (0 === i) {
                                b(),
                                    j += 1;
                                continue
                            }
                            e = " "
                        } else if ("(" === e)
                            i += 1;
                        else if (")" === e)
                            i -= 1;
                        else {
                            if ("," === e) {
                                b(),
                                    c(),
                                    j += 1;
                                continue
                            }
                            if ("/" === e && "*" === a.charAt(j + 1)) {
                                k = !0,
                                    j += 2;
                                continue
                            }
                        }
                        f += e,
                            j += 1
                    }
                }
            }
            function c(a) {
                return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
            }
            var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
            for (f = b(a),
                g = f.length,
                e = 0; g > e; e++)
                if (h = f[e],
                    i = h[h.length - 1],
                    c(i)) {
                    if (j = i,
                        h.pop(),
                        0 === h.length)
                        return j;
                    if (h = h.join(" "),
                        s.matchesMedia(h))
                        return j
                }
            return "100vw"
        }
        b.createElement("picture");
        var o, p, q, r, s = {}, t = !1, u = function () { }, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement, A = {}, B = {
            algorithm: ""
        }, C = "data-pfsrc", D = C + "set", E = navigator.userAgent, F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc", H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG, K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = {
            px: 1,
            "in": 96
        }, R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/, W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        }, $ = function (a) {
            var b = {};
            return function (c) {
                return c in b || (b[c] = a(c)),
                    b[c]
            }
        }, _ = function () {
            var a = /^([\d\.]+)(em|vw|px)$/
                , b = function () {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;)
                        c = c.replace(a[b], a[++b]);
                    return c
                }
                , c = $(function (a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function (b, d) {
                var e;
                if (!(b in N))
                    if (N[b] = !1,
                        d && (e = b.match(a)))
                        N[b] = e[1] * Q[e[2]];
                    else
                        try {
                            N[b] = new Function("e", c(b))(Q)
                        } catch (f) { }
                return N[b]
            }
        }(), aa = function (a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"),
                a.res = a.w / a.cWidth) : a.res = a.d,
                a
        }, ba = function (a) {
            if (t) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements,
                    f.elements = null)),
                    c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort),
                    e = c.length) {
                    for (s.setupRun(f),
                        S = !0,
                        d = 0; e > d; d++)
                        s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            }
        };
        o = a.console && console.warn ? function (a) {
            console.warn(a)
        }
            : u,
            G in v || (G = "src"),
            A["image/jpeg"] = !0,
            A["image/gif"] = !0,
            A["image/png"] = !0,
            A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
            s.ns = ("pf" + (new Date).getTime()).substr(0, 9),
            s.supSrcset = "srcset" in v,
            s.supSizes = "sizes" in v,
            s.supPicture = !!a.HTMLPictureElement,
            s.supSrcset && s.supPicture && !s.supSizes && !function (a) {
                v.srcset = "data:,a",
                    a.src = "data:,a",
                    s.supSrcset = v.complete === a.complete,
                    s.supPicture = s.supSrcset && s.supPicture
            }(b.createElement("img")),
            s.supSrcset && !s.supSizes ? !function () {
                var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw=="
                    , c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    , d = b.createElement("img")
                    , e = function () {
                        var a = d.width;
                        2 === a && (s.supSizes = !0),
                            q = s.supSrcset && !s.supSizes,
                            t = !0,
                            setTimeout(ba)
                    };
                d.onload = e,
                    d.onerror = e,
                    d.setAttribute("sizes", "9px"),
                    d.srcset = c + " 1w," + a + " 9w",
                    d.src = c
            }() : t = !0,
            s.selShort = "picture>img,img[srcset]",
            s.sel = s.selShort,
            s.cfg = B,
            s.DPR = P || 1,
            s.u = Q,
            s.types = A,
            s.setSize = u,
            s.makeUrl = $(function (a) {
                return R.href = a,
                    R.href
            }),
            s.qsa = function (a, b) {
                return "querySelector" in a ? a.querySelectorAll(b) : []
            }
            ,
            s.matchesMedia = function () {
                return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) {
                    return !a || matchMedia(a).matches
                }
                    : s.matchesMedia = s.mMQ,
                    s.matchesMedia.apply(this, arguments)
            }
            ,
            s.mMQ = function (a) {
                return a ? _(a) : !0
            }
            ,
            s.calcLength = function (a) {
                var b = _(a, !0) || !1;
                return 0 > b && (b = !1),
                    b
            }
            ,
            s.supportsType = function (a) {
                return a ? A[a] : !0
            }
            ,
            s.parseSize = $(function (a) {
                var b = (a || "").match(I);
                return {
                    media: b && b[1],
                    length: b && b[2]
                }
            }),
            s.parseSet = function (a) {
                return a.cands || (a.cands = m(a.srcset, a)),
                    a.cands
            }
            ,
            s.getEmValue = function () {
                var a;
                if (!p && (a = b.body)) {
                    var c = b.createElement("div")
                        , d = z.style.cssText
                        , e = a.style.cssText;
                    c.style.cssText = K,
                        z.style.cssText = L,
                        a.style.cssText = L,
                        a.appendChild(c),
                        p = c.offsetWidth,
                        a.removeChild(c),
                        p = parseFloat(p, 10),
                        z.style.cssText = d,
                        a.style.cssText = e
                }
                return p || 16
            }
            ,
            s.calcListLength = function (a) {
                if (!(a in O) || B.uT) {
                    var b = s.calcLength(n(a));
                    O[a] = b ? b : Q.width
                }
                return O[a]
            }
            ,
            s.setRes = function (a) {
                var b;
                if (a) {
                    b = s.parseSet(a);
                    for (var c = 0, d = b.length; d > c; c++)
                        aa(b[c], a.sizes)
                }
                return b
            }
            ,
            s.setRes.res = aa,
            s.applySetCandidate = function (a, b) {
                if (a.length) {
                    var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR;
                    if (k = o.curSrc || b[G],
                        l = o.curCan || j(b, k, a[0].set),
                        l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p,
                            n || (l.cached = !0,
                                l.res >= p && (h = l))),
                        !h)
                        for (a.sort(i),
                            f = a.length,
                            h = a[f - 1],
                            d = 0; f > d; d++)
                            if (c = a[d],
                                c.res >= p) {
                                e = d - 1,
                                    h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                                break
                            }
                    h && (m = s.makeUrl(h.url),
                        o.curSrc = m,
                        o.curCan = h,
                        m !== k && s.setSrc(b, h),
                        s.setSize(b))
                }
            }
            ,
            s.setSrc = function (a, b) {
                var c;
                a.src = b.url,
                    "image/svg+xml" === b.set.type && (c = a.style.width,
                        a.style.width = a.offsetWidth + 1 + "px",
                        a.offsetWidth + 1 && (a.style.width = c))
            }
            ,
            s.getSet = function (a) {
                var b, c, d, e = !1, f = a[s.ns].sets;
                for (b = 0; b < f.length && !e; b++)
                    if (c = f[b],
                        c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                        "pending" === d && (c = d),
                            e = c;
                        break
                    }
                return e
            }
            ,
            s.parseSets = function (a, b, d) {
                var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns];
                (j.src === c || d.src) && (j.src = w.call(a, "src"),
                    j.src ? x.call(a, C, j.src) : y.call(a, C)),
                    (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"),
                        j.srcset = e,
                        h = !0),
                    j.sets = [],
                    i && (j.pic = !0,
                        l(b, j.sets)),
                    j.srcset ? (f = {
                        srcset: j.srcset,
                        sizes: w.call(a, "sizes")
                    },
                        j.sets.push(f),
                        g = (q || j.src) && H.test(j.srcset || ""),
                        g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src,
                            f.cands.push({
                                url: j.src,
                                d: 1,
                                set: f
                            }))) : j.src && j.sets.push({
                                srcset: j.src,
                                sizes: null
                            }),
                    j.curCan = null,
                    j.curSrc = c,
                    j.supported = !(i || f && !s.supSrcset || g && !s.supSizes),
                    h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e),
                        a.srcset = "") : y.call(a, D)),
                    j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src),
                    j.parsed = !0
            }
            ,
            s.fillImg = function (a, b) {
                var c, d = b.reselect || b.reevaluate;
                a[s.ns] || (a[s.ns] = {}),
                    c = a[s.ns],
                    (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b),
                        c.supported ? c.evaled = r : h(a))
            }
            ,
            s.setupRun = function () {
                (!S || M || P !== a.devicePixelRatio) && f()
            }
            ,
            s.supPicture ? (ba = u,
                s.fillImg = u): !function() {
                var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function () {
                    var a = b.readyState || "";
                    f = setTimeout(e, "loading" === a ? 200 : 999),
                        b.body && (s.fillImgs(),
                            c = c || d.test(a),
                            c && clearTimeout(f))
                }, f = setTimeout(e, b.body ? 9 : 99), g = function (a, b) {
                    var c, d, e = function () {
                        var f = new Date - d;
                        b > f ? c = setTimeout(e, b - f) : (c = null,
                            a())
                    };
                    return function () {
                        d = new Date,
                            c || (c = setTimeout(e, b))
                    }
                }, h = z.clientHeight, i = function () {
                    M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h,
                        h = z.clientHeight,
                        M && s.fillImgs()
                };
                Z(a, "resize", g(i, 99)),
                    Z(b, "readystatechange", e)
            }(),
                s.picturefill = ba,
                s.fillImgs = ba,
                s.teardownRun = u,
                ba._ = s,
                a.picturefillCFG = {
                    pf: s,
                    push: function (a) {
                        var b = a.shift();
                        "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0],
                            S && s.fillImgs({
                                reselect: !0
                            }))
                    }
                };
        for (; J && J.length;)
            a.picturefillCFG.push(J.shift());
        a.picturefill = ba,
            "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () {
                return ba
            }),
            s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
    }(window, document);
var NO_JQUERY = {};
!function (a, b, c) {
    if (!("console" in a)) {
        var d = a.console = {};
        d.log = d.warn = d.error = d.debug = function () { }
    }
    b === NO_JQUERY && (b = {
        fn: {},
        extend: function () {
            for (var a = arguments[0], b = 1, c = arguments.length; c > b; b++) {
                var d = arguments[b];
                for (var e in d)
                    a[e] = d[e]
            }
            return a
        }
    }),
        b.fn.pm = function () {
            return console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])"),
                this
        }
        ,
        b.pm = a.pm = function (a) {
            e.send(a)
        }
        ,
        b.pm.bind = a.pm.bind = function (a, b, c, d, f) {
            e.bind(a, b, c, d, f === !0)
        }
        ,
        b.pm.unbind = a.pm.unbind = function (a, b) {
            e.unbind(a, b)
        }
        ,
        b.pm.origin = a.pm.origin = null,
        b.pm.poll = a.pm.poll = 200;
    var e = {
        send: function (a) {
            var c = b.extend({}, e.defaults, a)
                , d = c.target;
            if (!c.target)
                return void console.warn("postmessage target window required");
            if (!c.type)
                return void console.warn("postmessage type required");
            var f = {
                data: c.data,
                type: c.type
            };
            c.success && (f.callback = e._callback(c.success)),
                c.error && (f.errback = e._callback(c.error)),
                "postMessage" in d && !c.hash ? (e._bind(),
                    d.postMessage(JSON.stringify(f), c.origin || "*")) : (e.hash._bind(),
                        e.hash.send(c, f))
        },
        bind: function (a, b, c, d, f) {
            e._replyBind(a, b, c, d, f)
        },
        _replyBind: function (c, d, f, g, h) {
            "postMessage" in a && !g ? e._bind() : e.hash._bind();
            var i = e.data("listeners.postmessage");
            i || (i = {},
                e.data("listeners.postmessage", i));
            var j = i[c];
            j || (j = [],
                i[c] = j),
                j.push({
                    fn: d,
                    callback: h,
                    origin: f || b.pm.origin
                })
        },
        unbind: function (a, b) {
            var c = e.data("listeners.postmessage");
            if (c)
                if (a)
                    if (b) {
                        var d = c[a];
                        if (d) {
                            for (var f = [], g = 0, h = d.length; h > g; g++) {
                                var i = d[g];
                                i.fn !== b && f.push(i)
                            }
                            c[a] = f
                        }
                    } else
                        delete c[a];
                else
                    for (var g in c)
                        delete c[g]
        },
        data: function (a, b) {
            return b === c ? e._data[a] : (e._data[a] = b,
                b)
        },
        _data: {},
        _CHARS: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        _random: function () {
            for (var a = [], b = 0; 32 > b; b++)
                a[b] = e._CHARS[0 | 32 * Math.random()];
            return a.join("")
        },
        _callback: function (a) {
            var b = e.data("callbacks.postmessage");
            b || (b = {},
                e.data("callbacks.postmessage", b));
            var c = e._random();
            return b[c] = a,
                c
        },
        _bind: function () {
            e.data("listening.postmessage") || (a.addEventListener ? a.addEventListener("message", e._dispatch, !1) : a.attachEvent && a.attachEvent("onmessage", e._dispatch),
                e.data("listening.postmessage", 1))
        },
        _dispatch: function (a) {
            function b(b) {
                c.callback && e.send({
                    target: a.source,
                    data: b,
                    type: c.callback
                })
            }
            try {
                var c = JSON.parse(a.data)
            } catch (d) {
                return void console.warn("postmessage data invalid json: ", d)
            }
            if (!c.type)
                return void console.warn("postmessage message type required");
            var f = e.data("callbacks.postmessage") || {}
                , g = f[c.type];
            if (g)
                g(c.data);
            else
                for (var h = e.data("listeners.postmessage") || {}, i = h[c.type] || [], j = 0, k = i.length; k > j; j++) {
                    var l = i[j];
                    if (l.origin && "*" !== l.origin && a.origin !== l.origin) {
                        if (console.warn("postmessage message origin mismatch", a.origin, l.origin),
                            c.errback) {
                            var m = {
                                message: "postmessage origin mismatch",
                                origin: [a.origin, l.origin]
                            };
                            e.send({
                                target: a.source,
                                data: m,
                                type: c.errback
                            })
                        }
                    } else
                        try {
                            l.callback ? l.fn(c.data, b, a) : b(l.fn(c.data, a))
                        } catch (d) {
                            if (!c.errback)
                                throw d;
                            e.send({
                                target: a.source,
                                data: d,
                                type: c.errback
                            })
                        }
                }
        }
    };
    e.hash = {
        send: function (b, c) {
            var d = b.target
                , f = b.url;
            if (!f)
                return void console.warn("postmessage target window url is required");
            f = e.hash._url(f);
            var g, h = e.hash._url(a.location.href);
            if (a == d.parent)
                g = "parent";
            else
                try {
                    for (var i = 0, j = parent.frames.length; j > i; i++) {
                        var k = parent.frames[i];
                        if (k == a) {
                            g = i;
                            break
                        }
                    }
                } catch (l) {
                    g = a.name
                }
            if (null == g)
                return void console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");
            var m = {
                "x-requested-with": "postmessage",
                source: {
                    name: g,
                    url: h
                },
                postmessage: c
            }
                , n = "#x-postmessage-id=" + e._random();
            d.location = f + n + encodeURIComponent(JSON.stringify(m))
        },
        _regex: /^\#x\-postmessage\-id\=(\w{32})/,
        _regex_len: "#x-postmessage-id=".length + 32,
        _bind: function () {
            e.data("polling.postmessage") || (setInterval(function () {
                var b = "" + a.location.hash
                    , c = e.hash._regex.exec(b);
                if (c) {
                    var d = c[1];
                    e.hash._last !== d && (e.hash._last = d,
                        e.hash._dispatch(b.substring(e.hash._regex_len)))
                }
            }, b.pm.poll || 200),
                e.data("polling.postmessage", 1))
        },
        _dispatch: function (b) {
            function c(a) {
                f.callback && e.send({
                    target: i,
                    data: a,
                    type: f.callback,
                    hash: !0,
                    url: b.source.url
                })
            }
            if (b) {
                try {
                    if (b = JSON.parse(decodeURIComponent(b)),
                        !("postmessage" === b["x-requested-with"] && b.source && null != b.source.name && b.source.url && b.postmessage))
                        return
                } catch (d) {
                    return
                }
                var f = b.postmessage
                    , g = e.data("callbacks.postmessage") || {}
                    , h = g[f.type];
                if (h)
                    h(f.data);
                else {
                    var i;
                    i = "parent" === b.source.name ? a.parent : a.frames[b.source.name];
                    for (var j = e.data("listeners.postmessage") || {}, k = j[f.type] || [], l = 0, m = k.length; m > l; l++) {
                        var n = k[l];
                        if (n.origin) {
                            var o = /https?\:\/\/[^\/]*/.exec(b.source.url)[0];
                            if ("*" !== n.origin && o !== n.origin) {
                                if (console.warn("postmessage message origin mismatch", o, n.origin),
                                    f.errback) {
                                    var p = {
                                        message: "postmessage origin mismatch",
                                        origin: [o, n.origin]
                                    };
                                    e.send({
                                        target: i,
                                        data: p,
                                        type: f.errback,
                                        hash: !0,
                                        url: b.source.url
                                    })
                                }
                                continue
                            }
                        }
                        try {
                            n.callback ? n.fn(f.data, c) : c(n.fn(f.data))
                        } catch (d) {
                            if (!f.errback)
                                throw d;
                            e.send({
                                target: i,
                                data: d,
                                type: f.errback,
                                hash: !0,
                                url: b.source.url
                            })
                        }
                    }
                }
            }
        },
        _url: function (a) {
            return ("" + a).replace(/#.*$/, "")
        }
    },
        b.extend(e, {
            defaults: {
                target: null,
                url: null,
                type: null,
                data: null,
                success: null,
                error: null,
                origin: "*",
                hash: !1
            }
        })
}(this, "undefined" == typeof jQuery ? NO_JQUERY : jQuery),
    function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function (a) {
        var b = window.Slick || {};
        b = function () {
            function b(b, d) {
                var e, f = this;
                f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (b, c) {
                        return a('<button type="button" />').text(c + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                },
                    f.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    },
                    a.extend(f, f.initials),
                    f.activeBreakpoint = null,
                    f.animType = null,
                    f.animProp = null,
                    f.breakpoints = [],
                    f.breakpointSettings = [],
                    f.cssTransitions = !1,
                    f.focussed = !1,
                    f.interrupted = !1,
                    f.hidden = "hidden",
                    f.paused = !0,
                    f.positionProp = null,
                    f.respondTo = null,
                    f.rowCount = 1,
                    f.shouldClick = !0,
                    f.$slider = a(b),
                    f.$slidesCache = null,
                    f.transformType = null,
                    f.transitionType = null,
                    f.visibilityChange = "visibilitychange",
                    f.windowWidth = 0,
                    f.windowTimer = null,
                    e = a(b).data("slick") || {},
                    f.options = a.extend({}, f.defaults, d, e),
                    f.currentSlide = f.options.initialSlide,
                    f.originalSettings = f.options,
                    "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden",
                        f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden",
                            f.visibilityChange = "webkitvisibilitychange"),
                    f.autoPlay = a.proxy(f.autoPlay, f),
                    f.autoPlayClear = a.proxy(f.autoPlayClear, f),
                    f.autoPlayIterator = a.proxy(f.autoPlayIterator, f),
                    f.changeSlide = a.proxy(f.changeSlide, f),
                    f.clickHandler = a.proxy(f.clickHandler, f),
                    f.selectHandler = a.proxy(f.selectHandler, f),
                    f.setPosition = a.proxy(f.setPosition, f),
                    f.swipeHandler = a.proxy(f.swipeHandler, f),
                    f.dragHandler = a.proxy(f.dragHandler, f),
                    f.keyHandler = a.proxy(f.keyHandler, f),
                    f.instanceUid = c++ ,
                    f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    f.registerBreakpoints(),
                    f.init(!0)
            }
            var c = 0;
            return b
        }(),
            b.prototype.activateADA = function () {
                var a = this;
                a.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }
            ,
            b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
                var e = this;
                if ("boolean" == typeof c)
                    d = c,
                        c = null;
                else if (0 > c || c >= e.slideCount)
                    return !1;
                e.unload(),
                    "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
                    e.$slides = e.$slideTrack.children(this.options.slide),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slideTrack.append(e.$slides),
                    e.$slides.each(function (b, c) {
                        a(c).attr("data-slick-index", b)
                    }),
                    e.$slidesCache = e.$slides,
                    e.reinit()
            }
            ,
            b.prototype.animateHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.animate({
                        height: b
                    }, a.options.speed)
                }
            }
            ,
            b.prototype.animateSlide = function (b, c) {
                var d = {}
                    , e = this;
                e.animateHeight(),
                    e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                    e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                        left: b
                    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                        top: b
                    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                        a({
                            animStart: e.currentLeft
                        }).animate({
                            animStart: b
                        }, {
                            duration: e.options.speed,
                            easing: e.options.easing,
                            step: function (a) {
                                a = Math.ceil(a),
                                    e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                                        e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                                            e.$slideTrack.css(d))
                            },
                            complete: function () {
                                c && c.call()
                            }
                        })) : (e.applyTransition(),
                            b = Math.ceil(b),
                            e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)",
                            e.$slideTrack.css(d),
                            c && setTimeout(function () {
                                e.disableTransition(),
                                    c.call()
                            }, e.options.speed))
            }
            ,
            b.prototype.getNavTarget = function () {
                var b = this
                    , c = b.options.asNavFor;
                return c && null !== c && (c = a(c).not(b.$slider)),
                    c
            }
            ,
            b.prototype.asNavFor = function (b) {
                var c = this
                    , d = c.getNavTarget();
                null !== d && "object" == typeof d && d.each(function () {
                    var c = a(this).slick("getSlick");
                    c.unslicked || c.slideHandler(b, !0)
                })
            }
            ,
            b.prototype.applyTransition = function (a) {
                var b = this
                    , c = {};
                b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase,
                    b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
            }
            ,
            b.prototype.autoPlay = function () {
                var a = this;
                a.autoPlayClear(),
                    a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
            }
            ,
            b.prototype.autoPlayClear = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer)
            }
            ,
            b.prototype.autoPlayIterator = function () {
                var a = this
                    , b = a.currentSlide + a.options.slidesToScroll;
                a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll,
                    a.currentSlide - 1 === 0 && (a.direction = 1))),
                    a.slideHandler(b))
            }
            ,
            b.prototype.buildArrows = function () {
                var b = this;
                b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
                    b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
                    b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
                        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
                        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        }))
            }
            ,
            b.prototype.buildDots = function () {
                var b, c, d = this;
                if (d.options.dots === !0) {
                    for (d.$slider.addClass("slick-dotted"),
                        c = a("<ul />").addClass(d.options.dotsClass),
                        b = 0; b <= d.getDotCount(); b += 1)
                        c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                    d.$dots = c.appendTo(d.options.appendDots),
                        d.$dots.find("li").first().addClass("slick-active")
                }
            }
            ,
            b.prototype.buildOut = function () {
                var b = this;
                b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                    b.slideCount = b.$slides.length,
                    b.$slides.each(function (b, c) {
                        a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
                    }),
                    b.$slider.addClass("slick-slider"),
                    b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
                    b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                    b.$slideTrack.css("opacity", 0),
                    (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
                    a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.buildDots(),
                    b.updateDots(),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.options.draggable === !0 && b.$list.addClass("draggable")
            }
            ,
            b.prototype.buildRows = function () {
                var a, b, c, d, e, f, g, h = this;
                if (d = document.createDocumentFragment(),
                    f = h.$slider.children(),
                    h.options.rows > 1) {
                    for (g = h.options.slidesPerRow * h.options.rows,
                        e = Math.ceil(f.length / g),
                        a = 0; e > a; a++) {
                        var i = document.createElement("div");
                        for (b = 0; b < h.options.rows; b++) {
                            var j = document.createElement("div");
                            for (c = 0; c < h.options.slidesPerRow; c++) {
                                var k = a * g + (b * h.options.slidesPerRow + c);
                                f.get(k) && j.appendChild(f.get(k))
                            }
                            i.appendChild(j)
                        }
                        d.appendChild(i)
                    }
                    h.$slider.empty().append(d),
                        h.$slider.children().children().children().css({
                            width: 100 / h.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                }
            }
            ,
            b.prototype.checkResponsive = function (b, c) {
                var d, e, f, g = this, h = !1, i = g.$slider.width(), j = window.innerWidth || a(window).width();
                if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)),
                    g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                    e = null;
                    for (d in g.breakpoints)
                        g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                    null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e,
                        "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]),
                            b === !0 && (g.currentSlide = g.options.initialSlide),
                            g.refresh(b)),
                        h = e) : (g.activeBreakpoint = e,
                            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]),
                                b === !0 && (g.currentSlide = g.options.initialSlide),
                                g.refresh(b)),
                            h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null,
                                g.options = g.originalSettings,
                                b === !0 && (g.currentSlide = g.options.initialSlide),
                                g.refresh(b),
                                h = e),
                        b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
                }
            }
            ,
            b.prototype.changeSlide = function (b, c) {
                var d, e, f, g = this, h = a(b.currentTarget);
                switch (h.is("a") && b.preventDefault(),
                h.is("li") || (h = h.closest("li")),
                f = g.slideCount % g.options.slidesToScroll !== 0,
                d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll,
                b.data.message) {
                    case "previous":
                        if (e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d,
                            g.slideCount > g.options.slidesToShow) {
                            var i = g.currentSlide - e;
                            g.options.infinite !== !0 && 0 > i && (i = 0),
                                g.slideHandler(i, !1, c)
                        }
                        break;
                    case "next":
                        e = 0 === d ? g.options.slidesToScroll : d,
                            g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                        break;
                    case "index":
                        var j = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                        g.slideHandler(g.checkNavigable(j), !1, c),
                            h.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }
            ,
            b.prototype.checkNavigable = function (a) {
                var b, c, d = this;
                if (b = d.getNavigableIndexes(),
                    c = 0,
                    a > b[b.length - 1])
                    a = b[b.length - 1];
                else
                    for (var e in b) {
                        if (a < b[e]) {
                            a = c;
                            break
                        }
                        c = b[e]
                    }
                return a
            }
            ,
            b.prototype.cleanUpEvents = function () {
                var b = this;
                b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
                    b.options.accessibility === !0 && b.$dots.off("keydown.slick", b.keyHandler)),
                    b.$slider.off("focus.slick blur.slick"),
                    b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
                        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide),
                        b.options.accessibility === !0 && (b.$prevArrow && b.$prevArrow.off("keydown.slick", b.keyHandler),
                            b.$nextArrow && b.$nextArrow.off("keydown.slick", b.keyHandler))),
                    b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                    b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                    b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                    b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                    b.$list.off("click.slick", b.clickHandler),
                    a(document).off(b.visibilityChange, b.visibility),
                    b.cleanUpSlideEvents(),
                    b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
                    a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
                    a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                    a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
                    a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition)
            }
            ,
            b.prototype.cleanUpSlideEvents = function () {
                var b = this;
                b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
                    b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
            }
            ,
            b.prototype.cleanUpRows = function () {
                var a, b = this;
                b.options.rows > 1 && (a = b.$slides.children().children(),
                    a.removeAttr("style"),
                    b.$slider.empty().append(a))
            }
            ,
            b.prototype.clickHandler = function (a) {
                var b = this;
                b.shouldClick === !1 && (a.stopImmediatePropagation(),
                    a.stopPropagation(),
                    a.preventDefault())
            }
            ,
            b.prototype.destroy = function (b) {
                var c = this;
                c.autoPlayClear(),
                    c.touchObject = {},
                    c.cleanUpEvents(),
                    a(".slick-cloned", c.$slider).detach(),
                    c.$dots && c.$dots.remove(),
                    c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                    c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
                    c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                        a(this).attr("style", a(this).data("originalStyling"))
                    }),
                        c.$slideTrack.children(this.options.slide).detach(),
                        c.$slideTrack.detach(),
                        c.$list.detach(),
                        c.$slider.append(c.$slides)),
                    c.cleanUpRows(),
                    c.$slider.removeClass("slick-slider"),
                    c.$slider.removeClass("slick-initialized"),
                    c.$slider.removeClass("slick-dotted"),
                    c.unslicked = !0,
                    b || c.$slider.trigger("destroy", [c])
            }
            ,
            b.prototype.disableTransition = function (a) {
                var b = this
                    , c = {};
                c[b.transitionType] = "",
                    b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
            }
            ,
            b.prototype.fadeSlide = function (a, b) {
                var c = this;
                c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                    zIndex: c.options.zIndex
                }),
                    c.$slides.eq(a).animate({
                        opacity: 1
                    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
                        c.$slides.eq(a).css({
                            opacity: 1,
                            zIndex: c.options.zIndex
                        }),
                        b && setTimeout(function () {
                            c.disableTransition(a),
                                b.call()
                        }, c.options.speed))
            }
            ,
            b.prototype.fadeSlideOut = function (a) {
                var b = this;
                b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                    opacity: 0,
                    zIndex: b.options.zIndex - 2
                }, b.options.speed, b.options.easing) : (b.applyTransition(a),
                    b.$slides.eq(a).css({
                        opacity: 0,
                        zIndex: b.options.zIndex - 2
                    }))
            }
            ,
            b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
                var b = this;
                null !== a && (b.$slidesCache = b.$slides,
                    b.unload(),
                    b.$slideTrack.children(this.options.slide).detach(),
                    b.$slidesCache.filter(a).appendTo(b.$slideTrack),
                    b.reinit())
            }
            ,
            b.prototype.focusHandler = function () {
                var b = this;
                b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (c) {
                    c.stopImmediatePropagation();
                    var d = a(this);
                    setTimeout(function () {
                        b.options.pauseOnFocus && (b.focussed = d.is(":focus"),
                            b.autoPlay())
                    }, 0)
                })
            }
            ,
            b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
                var a = this;
                return a.currentSlide
            }
            ,
            b.prototype.getDotCount = function () {
                var a = this
                    , b = 0
                    , c = 0
                    , d = 0;
                if (a.options.infinite === !0)
                    if (a.slideCount <= a.options.slidesToShow)
                        ++d;
                    else
                        for (; b < a.slideCount;)
                            ++d,
                                b = c + a.options.slidesToScroll,
                                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
                else if (a.options.centerMode === !0)
                    d = a.slideCount;
                else if (a.options.asNavFor)
                    for (; b < a.slideCount;)
                        ++d,
                            b = c + a.options.slidesToScroll,
                            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
                else
                    d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
                return d - 1
            }
            ,
            b.prototype.getLeft = function (a) {
                var b, c, d, e, f = this, g = 0;
                return f.slideOffset = 0,
                    c = f.$slides.first().outerHeight(!0),
                    f.options.infinite === !0 ? (f.slideCount > f.options.slidesToShow && (f.slideOffset = f.slideWidth * f.options.slidesToShow * -1,
                        e = -1,
                        f.options.vertical === !0 && f.options.centerMode === !0 && (2 === f.options.slidesToShow ? e = -1.5 : 1 === f.options.slidesToShow && (e = -2)),
                        g = c * f.options.slidesToShow * e),
                        f.slideCount % f.options.slidesToScroll !== 0 && a + f.options.slidesToScroll > f.slideCount && f.slideCount > f.options.slidesToShow && (a > f.slideCount ? (f.slideOffset = (f.options.slidesToShow - (a - f.slideCount)) * f.slideWidth * -1,
                            g = (f.options.slidesToShow - (a - f.slideCount)) * c * -1) : (f.slideOffset = f.slideCount % f.options.slidesToScroll * f.slideWidth * -1,
                                g = f.slideCount % f.options.slidesToScroll * c * -1))) : a + f.options.slidesToShow > f.slideCount && (f.slideOffset = (a + f.options.slidesToShow - f.slideCount) * f.slideWidth,
                                    g = (a + f.options.slidesToShow - f.slideCount) * c),
                    f.slideCount <= f.options.slidesToShow && (f.slideOffset = 0,
                        g = 0),
                    f.options.centerMode === !0 && f.slideCount <= f.options.slidesToShow ? f.slideOffset = f.slideWidth * Math.floor(f.options.slidesToShow) / 2 - f.slideWidth * f.slideCount / 2 : f.options.centerMode === !0 && f.options.infinite === !0 ? f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2) - f.slideWidth : f.options.centerMode === !0 && (f.slideOffset = 0,
                        f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2)),
                    b = f.options.vertical === !1 ? a * f.slideWidth * -1 + f.slideOffset : a * c * -1 + g,
                    f.options.variableWidth === !0 && (d = f.slideCount <= f.options.slidesToShow || f.options.infinite === !1 ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow),
                        b = f.options.rtl === !0 ? d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0,
                        f.options.centerMode === !0 && (d = f.slideCount <= f.options.slidesToShow || f.options.infinite === !1 ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow + 1),
                            b = f.options.rtl === !0 ? d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0,
                            b += (f.$list.width() - d.outerWidth()) / 2)),
                    b
            }
            ,
            b.prototype.getOption = b.prototype.slickGetOption = function (a) {
                var b = this;
                return b.options[a]
            }
            ,
            b.prototype.getNavigableIndexes = function () {
                var a, b = this, c = 0, d = 0, e = [];
                for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll,
                    d = -1 * b.options.slidesToScroll,
                    a = 2 * b.slideCount); a > c;)
                    e.push(c),
                        c = d + b.options.slidesToScroll,
                        d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
                return e
            }
            ,
            b.prototype.getSlick = function () {
                return this
            }
            ,
            b.prototype.getSlideCount = function () {
                var b, c, d, e = this;
                return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0,
                    e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
                        return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f,
                            !1) : void 0
                    }),
                        b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
            }
            ,
            b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
                var c = this;
                c.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(a)
                    }
                }, b)
            }
            ,
            b.prototype.init = function (b) {
                var c = this;
                a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
                    c.buildRows(),
                    c.buildOut(),
                    c.setProps(),
                    c.startLoad(),
                    c.loadSlider(),
                    c.initializeEvents(),
                    c.updateArrows(),
                    c.updateDots(),
                    c.checkResponsive(!0),
                    c.focusHandler()),
                    b && c.$slider.trigger("init", [c]),
                    c.options.accessibility === !0 && c.initADA(),
                    c.options.autoplay && (c.paused = !1,
                        c.autoPlay())
            }
            ,
            b.prototype.initADA = function () {
                var b = this
                    , c = Math.ceil(b.slideCount / b.options.slidesToShow)
                    , d = b.getNavigableIndexes().filter(function (a) {
                        return a >= 0 && a < b.slideCount
                    });
                b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }),
                    null !== b.$dots && (b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                        var e = d.indexOf(c);
                        a(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + b.instanceUid + c,
                            tabindex: -1
                        }),
                            -1 !== e && a(this).attr({
                                "aria-describedby": "slick-slide-control" + b.instanceUid + e
                            })
                    }),
                        b.$dots.attr("role", "tablist").find("li").each(function (e) {
                            var f = d[e];
                            a(this).attr({
                                role: "presentation"
                            }),
                                a(this).find("button").first().attr({
                                    role: "tab",
                                    id: "slick-slide-control" + b.instanceUid + e,
                                    "aria-controls": "slick-slide" + b.instanceUid + f,
                                    "aria-label": e + 1 + " of " + c,
                                    "aria-selected": null,
                                    tabindex: "-1"
                                })
                        }).eq(b.currentSlide).find("button").attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }).end());
                for (var e = b.currentSlide, f = e + b.options.slidesToShow; f > e; e++)
                    b.$slides.eq(e).find("a, input, button, select") || b.$slides.eq(e).attr("tabindex", 0);
                b.activateADA()
            }
            ,
            b.prototype.initArrowEvents = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, a.changeSlide),
                    a.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, a.changeSlide),
                    a.options.accessibility === !0 && (a.$prevArrow.on("keydown.slick", a.keyHandler),
                        a.$nextArrow.on("keydown.slick", a.keyHandler)))
            }
            ,
            b.prototype.initDotEvents = function () {
                var b = this;
                b.options.dots === !0 && (a("li", b.$dots).on("click.slick", {
                    message: "index"
                }, b.changeSlide),
                    b.options.accessibility === !0 && b.$dots.on("keydown.slick", b.keyHandler)),
                    b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
            }
            ,
            b.prototype.initSlideEvents = function () {
                var b = this;
                b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
                    b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
            }
            ,
            b.prototype.initializeEvents = function () {
                var b = this;
                b.initArrowEvents(),
                    b.initDotEvents(),
                    b.initSlideEvents(),
                    b.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, b.swipeHandler),
                    b.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, b.swipeHandler),
                    b.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, b.swipeHandler),
                    b.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, b.swipeHandler),
                    b.$list.on("click.slick", b.clickHandler),
                    a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                    b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                    a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
                    a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                    a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                    a(b.setPosition)
            }
            ,
            b.prototype.initUI = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
                    a.$nextArrow.show()),
                    a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
            }
            ,
            b.prototype.keyHandler = function (a) {
                var b = this;
                a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                    data: {
                        message: b.options.rtl === !0 ? "next" : "previous"
                    }
                }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                    data: {
                        message: b.options.rtl === !0 ? "previous" : "next"
                    }
                }))
            }
            ,
            b.prototype.lazyLoad = function () {
                function b(b) {
                    a("img[data-lazy]", b).each(function () {
                        var b = a(this)
                            , c = a(this).attr("data-lazy")
                            , d = a(this).attr("data-srcset")
                            , e = a(this).attr("data-sizes") || g.$slider.attr("data-sizes")
                            , f = document.createElement("img");
                        f.onload = function () {
                            b.animate({
                                opacity: 0
                            }, 100, function () {
                                d && (b.attr("srcset", d),
                                    e && b.attr("sizes", e)),
                                    b.attr("src", c).animate({
                                        opacity: 1
                                    }, 200, function () {
                                        b.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                    }),
                                    g.$slider.trigger("lazyLoaded", [g, b, c])
                            })
                        }
                            ,
                            f.onerror = function () {
                                b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                    g.$slider.trigger("lazyLoadError", [g, b, c])
                            }
                            ,
                            f.src = c
                    })
                }
                var c, d, e, f, g = this;
                if (g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1),
                    f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)),
                        f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide,
                            f = Math.ceil(e + g.options.slidesToShow),
                            g.options.fade === !0 && (e > 0 && e-- ,
                                f <= g.slideCount && f++)),
                    c = g.$slider.find(".slick-slide").slice(e, f),
                    "anticipated" === g.options.lazyLoad)
                    for (var h = e - 1, i = f, j = g.$slider.find(".slick-slide"), k = 0; k < g.options.slidesToScroll; k++)
                        0 > h && (h = g.slideCount - 1),
                            c = c.add(j.eq(h)),
                            c = c.add(j.eq(i)),
                            h-- ,
                            i++;
                b(c),
                    g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"),
                        b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow),
                            b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow),
                                b(d))
            }
            ,
            b.prototype.loadSlider = function () {
                var a = this;
                a.setPosition(),
                    a.$slideTrack.css({
                        opacity: 1
                    }),
                    a.$slider.removeClass("slick-loading"),
                    a.initUI(),
                    "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
            }
            ,
            b.prototype.next = b.prototype.slickNext = function () {
                var a = this;
                a.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }
            ,
            b.prototype.orientationChange = function () {
                var a = this;
                a.checkResponsive(),
                    a.setPosition()
            }
            ,
            b.prototype.pause = b.prototype.slickPause = function () {
                var a = this;
                a.autoPlayClear(),
                    a.paused = !0
            }
            ,
            b.prototype.play = b.prototype.slickPlay = function () {
                var a = this;
                a.autoPlay(),
                    a.options.autoplay = !0,
                    a.paused = !1,
                    a.focussed = !1,
                    a.interrupted = !1
            }
            ,
            b.prototype.postSlide = function (b) {
                var c = this;
                if (!c.unslicked && (c.$slider.trigger("afterChange", [c, b]),
                    c.animating = !1,
                    c.slideCount > c.options.slidesToShow && c.setPosition(),
                    c.swipeLeft = null,
                    c.options.autoplay && c.autoPlay(),
                    c.options.accessibility === !0 && (c.initADA(),
                        c.options.focusOnChange))) {
                    var d = a(c.$slides.get(c.currentSlide));
                    d.attr("tabindex", 0).focus()
                }
            }
            ,
            b.prototype.prev = b.prototype.slickPrev = function () {
                var a = this;
                a.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }
            ,
            b.prototype.preventDefault = function (a) {
                a.preventDefault()
            }
            ,
            b.prototype.progressiveLazyLoad = function (b) {
                b = b || 1;
                var c, d, e, f, g, h = this, i = a("img[data-lazy]", h.$slider);
                i.length ? (c = i.first(),
                    d = c.attr("data-lazy"),
                    e = c.attr("data-srcset"),
                    f = c.attr("data-sizes") || h.$slider.attr("data-sizes"),
                    g = document.createElement("img"),
                    g.onload = function () {
                        e && (c.attr("srcset", e),
                            f && c.attr("sizes", f)),
                            c.attr("src", d).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                            h.options.adaptiveHeight === !0 && h.setPosition(),
                            h.$slider.trigger("lazyLoaded", [h, c, d]),
                            h.progressiveLazyLoad()
                    }
                    ,
                    g.onerror = function () {
                        3 > b ? setTimeout(function () {
                            h.progressiveLazyLoad(b + 1)
                        }, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                            h.$slider.trigger("lazyLoadError", [h, c, d]),
                            h.progressiveLazyLoad())
                    }
                    ,
                    g.src = d) : h.$slider.trigger("allImagesLoaded", [h])
            }
            ,
            b.prototype.refresh = function (b) {
                var c, d, e = this;
                d = e.slideCount - e.options.slidesToShow,
                    !e.options.infinite && e.currentSlide > d && (e.currentSlide = d),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    c = e.currentSlide,
                    e.destroy(!0),
                    a.extend(e, e.initials, {
                        currentSlide: c
                    }),
                    e.init(),
                    b || e.changeSlide({
                        data: {
                            message: "index",
                            index: c
                        }
                    }, !1)
            }
            ,
            b.prototype.registerBreakpoints = function () {
                var b, c, d, e = this, f = e.options.responsive || null;
                if ("array" === a.type(f) && f.length) {
                    e.respondTo = e.options.respondTo || "window";
                    for (b in f)
                        if (d = e.breakpoints.length - 1,
                            f.hasOwnProperty(b)) {
                            for (c = f[b].breakpoint; d >= 0;)
                                e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1),
                                    d--;
                            e.breakpoints.push(c),
                                e.breakpointSettings[c] = f[b].settings
                        }
                    e.breakpoints.sort(function (a, b) {
                        return e.options.mobileFirst ? a - b : b - a
                    })
                }
            }
            ,
            b.prototype.reinit = function () {
                var b = this;
                b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
                    b.slideCount = b.$slides.length,
                    b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                    b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                    b.registerBreakpoints(),
                    b.setProps(),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.updateArrows(),
                    b.initArrowEvents(),
                    b.buildDots(),
                    b.updateDots(),
                    b.initDotEvents(),
                    b.cleanUpSlideEvents(),
                    b.initSlideEvents(),
                    b.checkResponsive(!1, !0),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.setPosition(),
                    b.focusHandler(),
                    b.paused = !b.options.autoplay,
                    b.autoPlay(),
                    b.$slider.trigger("reInit", [b])
            }
            ,
            b.prototype.resize = function () {
                var b = this;
                a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
                    b.windowDelay = window.setTimeout(function () {
                        b.windowWidth = a(window).width(),
                            b.checkResponsive(),
                            b.unslicked || b.setPosition()
                    }, 50))
            }
            ,
            b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
                var d = this;
                return "boolean" == typeof a ? (b = a,
                    a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
                    d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(),
                        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                        d.$slides = d.$slideTrack.children(this.options.slide),
                        d.$slideTrack.children(this.options.slide).detach(),
                        d.$slideTrack.append(d.$slides),
                        d.$slidesCache = d.$slides,
                        void d.reinit())
            }
            ,
            b.prototype.setCSS = function (a) {
                var b, c, d = this, e = {};
                d.options.rtl === !0 && (a = -a),
                    b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px",
                    c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px",
                    e[d.positionProp] = a,
                    d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {},
                        d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")",
                            d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)",
                                d.$slideTrack.css(e)))
            }
            ,
            b.prototype.setDimensions = function () {
                var a = this;
                a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                    padding: "0px " + a.options.centerPadding
                }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
                    a.options.centerMode === !0 && a.$list.css({
                        padding: a.options.centerPadding + " 0px"
                    })),
                    a.listWidth = a.$list.width(),
                    a.listHeight = a.$list.height(),
                    a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
                        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
                            a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
                var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
                a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
            }
            ,
            b.prototype.setFade = function () {
                var b, c = this;
                c.$slides.each(function (d, e) {
                    b = c.slideWidth * d * -1,
                        c.options.rtl === !0 ? a(e).css({
                            position: "relative",
                            right: b,
                            top: 0,
                            zIndex: c.options.zIndex - 2,
                            opacity: 0
                        }) : a(e).css({
                            position: "relative",
                            left: b,
                            top: 0,
                            zIndex: c.options.zIndex - 2,
                            opacity: 0
                        })
                }),
                    c.$slides.eq(c.currentSlide).css({
                        zIndex: c.options.zIndex - 1,
                        opacity: 1
                    })
            }
            ,
            b.prototype.setHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.css("height", b)
                }
            }
            ,
            b.prototype.setOption = b.prototype.slickSetOption = function () {
                var b, c, d, e, f, g = this, h = !1;
                if ("object" === a.type(arguments[0]) ? (d = arguments[0],
                    h = arguments[1],
                    f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0],
                        e = arguments[1],
                        h = arguments[2],
                        "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : "undefined" != typeof arguments[1] && (f = "single")),
                    "single" === f)
                    g.options[d] = e;
                else if ("multiple" === f)
                    a.each(d, function (a, b) {
                        g.options[a] = b
                    });
                else if ("responsive" === f)
                    for (c in e)
                        if ("array" !== a.type(g.options.responsive))
                            g.options.responsive = [e[c]];
                        else {
                            for (b = g.options.responsive.length - 1; b >= 0;)
                                g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1),
                                    b--;
                            g.options.responsive.push(e[c])
                        }
                h && (g.unload(),
                    g.reinit())
            }
            ,
            b.prototype.setPosition = function () {
                var a = this;
                a.setDimensions(),
                    a.setHeight(),
                    a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
                    a.$slider.trigger("setPosition", [a])
            }
            ,
            b.prototype.setProps = function () {
                var a = this
                    , b = document.body.style;
                a.positionProp = a.options.vertical === !0 ? "top" : "left",
                    "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
                    (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
                    a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
                    void 0 !== b.OTransform && (a.animType = "OTransform",
                        a.transformType = "-o-transform",
                        a.transitionType = "OTransition",
                        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.MozTransform && (a.animType = "MozTransform",
                        a.transformType = "-moz-transform",
                        a.transitionType = "MozTransition",
                        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
                    void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
                        a.transformType = "-webkit-transform",
                        a.transitionType = "webkitTransition",
                        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.msTransform && (a.animType = "msTransform",
                        a.transformType = "-ms-transform",
                        a.transitionType = "msTransition",
                        void 0 === b.msTransform && (a.animType = !1)),
                    void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
                        a.transformType = "transform",
                        a.transitionType = "transition"),
                    a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
            }
            ,
            b.prototype.setSlideClasses = function (a) {
                var b, c, d, e, f = this;
                if (c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                    f.$slides.eq(a).addClass("slick-current"),
                    f.options.centerMode === !0) {
                    var g = f.options.slidesToShow % 2 === 0 ? 1 : 0;
                    b = Math.floor(f.options.slidesToShow / 2),
                        f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b + g, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a,
                            c.slice(d - b + 1 + g, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")),
                            0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
                        f.$slides.eq(a).addClass("slick-center")
                } else
                    a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow,
                        d = f.options.infinite === !0 ? f.options.slidesToShow + a : a,
                        f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                ("ondemand" === f.options.lazyLoad || "anticipated" === f.options.lazyLoad) && f.lazyLoad()
            }
            ,
            b.prototype.setupInfinite = function () {
                var b, c, d, e = this;
                if (e.options.fade === !0 && (e.options.centerMode = !1),
                    e.options.infinite === !0 && e.options.fade === !1 && (c = null,
                        e.slideCount > e.options.slidesToShow)) {
                    for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow,
                        b = e.slideCount; b > e.slideCount - d; b -= 1)
                        c = b - 1,
                            a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                    for (b = 0; b < d + e.slideCount; b += 1)
                        c = b,
                            a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                    e.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                        a(this).attr("id", "")
                    })
                }
            }
            ,
            b.prototype.interrupt = function (a) {
                var b = this;
                a || b.autoPlay(),
                    b.interrupted = a
            }
            ,
            b.prototype.selectHandler = function (b) {
                var c = this
                    , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
                    , e = parseInt(d.attr("data-slick-index"));
                return e || (e = 0),
                    c.slideCount <= c.options.slidesToShow ? void c.slideHandler(e, !1, !0) : void c.slideHandler(e)
            }
            ,
            b.prototype.slideHandler = function (a, b, c) {
                var d, e, f, g, h, i = null, j = this;
                return b = b || !1,
                    j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a ? void 0 : (b === !1 && j.asNavFor(a),
                        d = a,
                        i = j.getLeft(d),
                        g = j.getLeft(j.currentSlide),
                        j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft,
                        j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void (j.options.fade === !1 && (d = j.currentSlide,
                            c !== !0 ? j.animateSlide(g, function () {
                                j.postSlide(d)
                            }) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void (j.options.fade === !1 && (d = j.currentSlide,
                                c !== !0 ? j.animateSlide(g, function () {
                                    j.postSlide(d)
                                }) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer),
                                    e = 0 > d ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : d - j.slideCount : d,
                                    j.animating = !0,
                                    j.$slider.trigger("beforeChange", [j, j.currentSlide, e]),
                                    f = j.currentSlide,
                                    j.currentSlide = e,
                                    j.setSlideClasses(j.currentSlide),
                                    j.options.asNavFor && (h = j.getNavTarget(),
                                        h = h.slick("getSlick"),
                                        h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)),
                                    j.updateDots(),
                                    j.updateArrows(),
                                    j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f),
                                        j.fadeSlide(e, function () {
                                            j.postSlide(e)
                                        })) : j.postSlide(e),
                                        void j.animateHeight()) : void (c !== !0 ? j.animateSlide(i, function () {
                                            j.postSlide(e)
                                        }) : j.postSlide(e))))
            }
            ,
            b.prototype.startLoad = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
                    a.$nextArrow.hide()),
                    a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
                    a.$slider.addClass("slick-loading")
            }
            ,
            b.prototype.swipeDirection = function () {
                var a, b, c, d, e = this;
                return a = e.touchObject.startX - e.touchObject.curX,
                    b = e.touchObject.startY - e.touchObject.curY,
                    c = Math.atan2(b, a),
                    d = Math.round(180 * c / Math.PI),
                    0 > d && (d = 360 - Math.abs(d)),
                    45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
            }
            ,
            b.prototype.swipeEnd = function (a) {
                var b, c, d = this;
                if (d.dragging = !1,
                    d.swiping = !1,
                    d.scrolling)
                    return d.scrolling = !1,
                        !1;
                if (d.interrupted = !1,
                    d.shouldClick = d.touchObject.swipeLength > 10 ? !1 : !0,
                    void 0 === d.touchObject.curX)
                    return !1;
                if (d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]),
                    d.touchObject.swipeLength >= d.touchObject.minSwipe) {
                    switch (c = d.swipeDirection()) {
                        case "left":
                        case "down":
                            b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(),
                                d.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(),
                                d.currentDirection = 1
                    }
                    "vertical" != c && (d.slideHandler(b),
                        d.touchObject = {},
                        d.$slider.trigger("swipe", [d, c]))
                } else
                    d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide),
                        d.touchObject = {})
            }
            ,
            b.prototype.swipeHandler = function (a) {
                var b = this;
                if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
                    switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
                    b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
                    b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                    a.data.action) {
                        case "start":
                            b.swipeStart(a);
                            break;
                        case "move":
                            b.swipeMove(a);
                            break;
                        case "end":
                            b.swipeEnd(a)
                    }
            }
            ,
            b.prototype.swipeMove = function (a) {
                var b, c, d, e, f, g, h = this;
                return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
                    !h.dragging || h.scrolling || f && 1 !== f.length ? !1 : (b = h.getLeft(h.currentSlide),
                        h.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX,
                        h.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY,
                        h.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(h.touchObject.curX - h.touchObject.startX, 2))),
                        g = Math.round(Math.sqrt(Math.pow(h.touchObject.curY - h.touchObject.startY, 2))),
                        !h.options.verticalSwiping && !h.swiping && g > 4 ? (h.scrolling = !0,
                            !1) : (h.options.verticalSwiping === !0 && (h.touchObject.swipeLength = g),
                                c = h.swipeDirection(),
                                void 0 !== a.originalEvent && h.touchObject.swipeLength > 4 && (h.swiping = !0,
                                    a.preventDefault()),
                                e = (h.options.rtl === !1 ? 1 : -1) * (h.touchObject.curX > h.touchObject.startX ? 1 : -1),
                                h.options.verticalSwiping === !0 && (e = h.touchObject.curY > h.touchObject.startY ? 1 : -1),
                                d = h.touchObject.swipeLength,
                                h.touchObject.edgeHit = !1,
                                h.options.infinite === !1 && (0 === h.currentSlide && "right" === c || h.currentSlide >= h.getDotCount() && "left" === c) && (d = h.touchObject.swipeLength * h.options.edgeFriction,
                                    h.touchObject.edgeHit = !0),
                                h.options.vertical === !1 ? h.swipeLeft = b + d * e : h.swipeLeft = b + d * (h.$list.height() / h.listWidth) * e,
                                h.options.verticalSwiping === !0 && (h.swipeLeft = b + d * e),
                                h.options.fade === !0 || h.options.touchMove === !1 ? !1 : h.animating === !0 ? (h.swipeLeft = null,
                                    !1) : void h.setCSS(h.swipeLeft)))
            }
            ,
            b.prototype.swipeStart = function (a) {
                var b, c = this;
                return c.interrupted = !0,
                    1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {},
                        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
                            c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX,
                            c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY,
                            void (c.dragging = !0))
            }
            ,
            b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
                var a = this;
                null !== a.$slidesCache && (a.unload(),
                    a.$slideTrack.children(this.options.slide).detach(),
                    a.$slidesCache.appendTo(a.$slideTrack),
                    a.reinit())
            }
            ,
            b.prototype.unload = function () {
                var b = this;
                a(".slick-cloned", b.$slider).remove(),
                    b.$dots && b.$dots.remove(),
                    b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
                    b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
                    b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }
            ,
            b.prototype.unslick = function (a) {
                var b = this;
                b.$slider.trigger("unslick", [b, a]),
                    b.destroy()
            }
            ,
            b.prototype.updateArrows = function () {
                var a, b = this;
                a = Math.floor(b.options.slidesToShow / 2),
                    b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                            b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                    b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }
            ,
            b.prototype.updateDots = function () {
                var a = this;
                null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").end(),
                    a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
            }
            ,
            b.prototype.visibility = function () {
                var a = this;
                a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
            }
            ,
            a.fn.slick = function () {
                var a, c, d = this, e = arguments[0], f = Array.prototype.slice.call(arguments, 1), g = d.length;
                for (a = 0; g > a; a++)
                    if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f),
                        "undefined" != typeof c)
                        return c;
                return d
            }
    }),
    function (a, b, c) {
        function d(a, c) {
            var d, e, f, g = {};
            return d = c instanceof jQuery ? c : b(c),
                d.hasClass(a.options.trigger_class_name) ? (e = d,
                    f = b("#" + d.attr("aria-controls"))) : d.hasClass(a.options.content_class_name) ? (f = d,
                        e = b("#" + d.attr("aria-labelledby"))) : d.hasClass(a.options.accordion_class_name) && (e = a.$triggers.filter(function (c) {
                            return b(this).closest("." + a.options.accordion_class_name).is(d)
                        }),
                            f = a.$panels.filter(function (c) {
                                return b(this).closest("." + a.options.accordion_class_name).is(d)
                            })),
                g.trigger = e,
                g.target = f,
                g
        }
        function e(a, b, c) {
            b.hasClass("active") ? g(a, b, c) : f(a, b, c)
        }
        function f(a, c, d) {
            c.hasClass("active") || (d.trigger("open.accordion"),
                c.addClass("active").attr("aria-expanded", !0),
                d.slideDown(150, function () {
                    b(this).trigger("opened.accordion")
                }).attr("aria-expanded", !0),
                a.options.allow_multi_expand || g(a, a.$triggers.not(c), a.$panels.not(d)))
        }
        function g(a, c, d) {
            c.hasClass("active") && (d.trigger("close.accordion"),
                c.removeClass("active").attr("aria-expanded", !1),
                d.slideUp(150, function () {
                    b(this).trigger("closed.accordion")
                }).attr("aria-expanded", !1))
        }
        var h = function (a, b) {
            this.init("accordion", a, b)
        }
            , i = (a[c].constants,
                a[c] && a[c].config && a[c].config.loggingDebug);
        a[c].utilities;
        h.prototype = {
            constructor: h,
            init: function (a, c, d) {
                var e, f = this;
                i && (console.debug("init accordion with options:"),
                    console.debug(Array.prototype.slice.call(arguments))),
                    this.options = b.extend({}, b.fn[a].defaults, d),
                    this.$element = b(c),
                    this.$accordions = this.$element.find("." + f.options.accordion_class_name).filter(function (a) {
                        return b(this).closest("." + f.options.accordion_group_class_name).is(f.$element)
                    }),
                    this.$triggers = this.$element.find("." + f.options.trigger_class_name).filter(function (a) {
                        return b(this).closest("." + f.options.accordion_group_class_name).is(f.$element)
                    }),
                    this.$panels = this.$element.find("." + f.options.content_class_name).filter(function (a) {
                        return b(this).closest("." + f.options.accordion_group_class_name).is(f.$element)
                    }),
                    e = this.$element.attr("aria-multiselectable"),
                    void 0 !== e && (this.options.allow_multi_expand = "true" == e),
                    this.$triggers.on("click", function (a) {
                        a.preventDefault(),
                            f.toggle(this)
                    })
            },
            toggle: function (a) {
                var b = d(this, a);
                void 0 !== b.trigger && void 0 !== b.target && e(this, b.trigger, b.target)
            },
            open: function (a) {
                var b = d(this, a);
                void 0 !== b.trigger && void 0 !== b.target && f(this, b.trigger, b.target)
            },
            close: function (a) {
                var b = d(this, a);
                void 0 !== b.trigger && void 0 !== b.target && g(this, b.trigger, b.target)
            },
            openAll: function () {
                this.$triggers.addClass("active").attr("aria-expanded", !0),
                    this.$panels.slideDown().attr("aria-expanded", !0)
            },
            closeAll: function () {
                this.$triggers.removeClass("active").attr("aria-expanded", !1),
                    this.$panels.slideUp().attr("aria-expanded", !1)
            }
        },
            b.fn.accordion = function (a) {
                var c = this
                    , d = b.extend({}, b.fn.accordion.defaults, "object" == typeof a && a)
                    , e = Array.prototype.slice.call(arguments, 1);
                return c.each(function () {
                    var c = b.data(this, "accordion");
                    c ? "object" == typeof a ? b.extend(c.options, a) : "string" == typeof a && c[a].apply(c, e) : b.data(this, "accordion", c = new h(this, d))
                })
            }
            ,
            b.fn.accordion.defaults = {
                allow_multi_expand: !0,
                trigger_class_name: "accordion-title",
                content_class_name: "accordion-body",
                accordion_class_name: "accordion-container",
                accordion_group_class_name: "accordion"
            },
            b.fn.accordion.Constructor = h,
            b(function () {
                b("[data-accordion]").accordion()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = function (a, b) {
            this.init("dropdown", a, b)
        }
            , e = (a[c].constants,
                a[c] && a[c].config && a[c].config.loggingDebug);
        a[c].config.maxWidth;
        d.prototype = {
            constructor: d,
            init: function (a, d, f) {
                e && (console.debug("init dropdown with options:"),
                    console.debug(Array.prototype.slice.call(arguments)));
                var g = this;
                this.options = b.extend({}, b.fn[a].defaults, f),
                    this.$element = b(d),
                    this.$toggle = this.$element.find(".dropdown-toggle"),
                    this.$menu = this.$element.find(".dropdown-menu"),
                    this.url = this.$element.attr("data-url"),
                    this.isLoaded = !1,
                    Modernizr.touch && (g.options.is_hover = !1),
                    g.options.is_hover ? (this.$toggle.off("dropdown").on("mouseenter." + c + ".dropdown", function () {
                        clearTimeout(g.timeout),
                            g.timeout = setTimeout(function () {
                                g.open.call(g)
                            }, 250)
                    }).on("mouseleave." + c + ".dropdown", function () {
                        clearTimeout(g.timeout),
                            g.timeout = setTimeout(function () {
                                g.close.call(g)
                            }
                                .bind(this), 150)
                    }),
                        this.$menu.on("mouseenter." + c + ".dropdown", function () {
                            clearTimeout(g.timeout)
                        })) : (this.$toggle.off("dropdown").on("click." + c + ".dropdown", function (a) {
                            g.toggle(),
                                a.preventDefault()
                        }),
                            b("body").off("dropdown").on("click." + c + ".dropdown, touchstart." + c + ".dropdown", function (a) {
                                b(a.target).closest(d).length > 0 || g.close.call(g)
                            }))
            },
            toggle: function () {
                this.$element.hasClass("active") ? this.close.call(this) : this.open.call(this)
            },
            close: function () {
                this.$menu.hide(),
                    this.$element.removeClass("active"),
                    this.$element.attr("aria-expanded", "false")
            },
            open: function () {
                function a(a) {
                    f.$menu.html(a),
                        f.isLoaded = !0
                }
                var c, d, f = this, g = window.innerWidth, h = this.$toggle.offset().left, i = this.$menu.outerWidth(), j = !1;
                this.$menu.css("left", "").css("right", ""),
                    (h + i > g || h + i > g) && (j = !0),
                    j ? (c = "auto",
                        d = "0px") : (c = "0px",
                            d = "auto"),
                    void 0 !== this.url && this.isLoaded === !1 && (e && console.log("making ajax request"),
                        b.ajax({
                            url: f.url,
                            dataType: "html",
                            success: a
                        })),
                    this.$menu.css({
                        left: c,
                        right: d
                    }).show(),
                    this.$element.addClass("active"),
                    this.$element.attr("aria-expanded", "true")
            }
        },
            b.fn.dropdown = function (a) {
                var c = this
                    , e = b.extend({}, b.fn.dropdown.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "dropdown");
                    c ? "object" == typeof a && b.extend(c.options, a) : (c = new d(this, e),
                        b.data(this, "dropdown", c))
                })
            }
            ,
            b.fn.dropdown.defaults = {
                is_hover: !1
            },
            b.fn.dropdown.Constructor = d,
            b(function () {
                b("[data-dropdown]").dropdown()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(a) {
            this.$element = b(a),
                this.init()
        }
        function e() {
            this.init()
        }
        var f = a[c].constants
            , g = a[c].utilities
            , h = (a[c] && a[c].config && a[c].config.loggingDebug,
                {
                    applied_filter_container: ".applied-facets-nav",
                    filter_container: ".filters",
                    show_more_threshold: 8
                })
            , i = function () {
                a[c].loader.showLoader()
            }
            , j = function () {
                a[c].loader.hideLoader()
            }
            , k = b("body")
            , l = "";
        d.prototype = {
            init: function () {
                this.$element.on("click", ".facet a", function (a) {
                    a.stopPropagation()
                }).on("click", ".facet", function (d) {
                    d.preventDefault();
                    var e = b(this)
                        , g = e.attr("data-nstate")
                        , h = a[c].utilities.getURLParameter(g, "showMoreIds")
                        , i = g.split("+")[0];
                    h.length > 0 && (i += "?showMoreIds=" + h),
                        window.location = f.contextPath + i + "#!" + g
                }).on("click", ".facet-show-more a", function (a) {
                    a.preventDefault();
                    var c = b(this);
                    l = c.parent().attr("id"),
                        window.location.hash = "#!" + c.attr("href")
                }).on("click", ".facet-show-more.modal-link", function (d) {
                    d.preventDefault();
                    var e = b(this)
                        , h = e.parents(".accordion-container").attr("id");
                    if (window.innerWidth < a[c].config.mediumMin) {
                        var i = b(this)
                            , j = i.closest(".facet-list");
                        j.hasClass("full-list") ? (j.removeClass("full-list"),
                            i.html('<span class="icon-plus-circle"></span>See more options')) : (j.addClass("full-list"),
                                i.html('<span class="icon-minus-circle"></span>See fewer options'))
                    } else {
                        var k = document.getElementById("facet-modal") ? b("#facet-modal") : g.createModal("facet-modal", "medium")
                            , l = f.contextPath + "/browse/ajax/facetModal.jsp?id=" + h
                            , m = {
                                url: l
                            };
                        k.modal(m)
                    }
                }),
                    k.on("click", ".dummy-facet", function (a) {
                        var c = b(this)
                            , d = "#" + c.find("input").prop("id").replace("-dummy", "")
                            , e = c.find("input").prop("id").replace("-dummy", "");
                        b(d);
                        document.getElementById(e).click(),
                            c.find("input").prop("checked", function (a, b) {
                                return b && c.removeClass("active"),
                                    !b
                            })
                    }).on("click", ".refine-price-submit", function (d) {
                        d.preventDefault();
                        var e = ""
                            , g = b("#min-price").val()
                            , h = b("#max-price").val();
                        if (void 0 == h || void 0 == g || "" == g || "" == h)
                            return !1;
                        h > .01 && (h -= .01);
                        var i = window.location.hash + "";
                        if ("" === i ? (i = window.location.search + "",
                            "" === i && (i = window.location.pathname + "")) : -1 != i.indexOf("#!") && (i = i.substring(2, i.length)),
                            -1 != i.indexOf("No=")) {
                            var j = i.split("&");
                            i = "",
                                -1 != j[0].indexOf("No=") && (j[0] = "?No=0"),
                                b.each(j, function (a, b) {
                                    0 !== a && (i += -1 != b.indexOf("No=") ? "&No=0" : "&" + b)
                                }),
                                i = j[0] + i
                        }
                        if (e = i,
                            -1 == i.indexOf("Nf="))
                            e = -1 == i.indexOf("?") ? e + "?Nf=sku.activePrice|BTWN+" + g + "+" + h : e + "&Nf=sku.activePrice|BTWN+" + g + "+" + h;
                        else {
                            var k = i.split("&");
                            i = "",
                                -1 != k[0].indexOf("Nf=") && (k[0] = k[0].replace(k[0].substring(k[0].indexOf("Nf="), k[0].length), "Nf=sku.activePrice|BTWN+" + g + "+" + h)),
                                b.each(k, function (a, b) {
                                    0 !== a && (i += -1 != b.indexOf("Nf=") ? "&Nf=sku.activePrice|BTWN+" + g + "+" + h : "&" + b)
                                }),
                                e = k[0] + i
                        }
                        var l = a[c].utilities.getURLParameter(e, "showMoreIds")
                            , m = "/category" + window.location.pathname
                            , n = "/category" + e;
                        if (l.length > 0) {
                            var o = "?showMoreIds=" + l;
                            m += o,
                                n += o
                        }
                        window.location = f.contextPath + m + "#!" + n
                    })
            },
            initializeShowMore: function (a) {
                a = a || this.$element.find(".facet-list"),
                    a.each(function (a, c) {
                        var d = b(c);
                        d.hasClass("show-more-initialized") ? d.find(".facet:gt(" + (h.show_more_threshold - 1) + ")").addClass("above-threshold") : d.find(".facet").length > h.show_more_threshold && (d.find(".facet:gt(" + (h.show_more_threshold - 1) + ")").addClass("above-threshold"),
                            d.find(".facet-show-more").attr("tabindex", 0).addClass("modal-link").html('<span class="icon-plus-circle"></span>See more options'),
                            d.addClass("show-more-initialized"))
                    })
            },
            mergeRefinements: function (a) {
                var c = this
                    , d = b(a);
                d.find(".facet-list").each(function () {
                    var a = b(this);
                    b(".facet-list").each(function () {
                        var d = b(this).data("dim");
                        if (void 0 !== a.attr("data-dim") && "category" !== b(this).attr("id")) {
                            var e = b(this)
                                , f = e.clone();
                            f.attr("data-dim") === a.attr("data-dim") && (b(a).find(".facet").each(function (a) {
                                var c = b(this)
                                    , d = !0;
                                b(f).find(".facet").each(function (a) {
                                    var e = b(this);
                                    e.attr("data-id") === c.attr("data-id") && (e.replaceWith(c),
                                        c.attr("data-visited", "y"),
                                        d = !1)
                                }),
                                    d && (f.find(".facet").last().after(c),
                                        c.attr("data-visited", "y"))
                            }),
                                b(a).find(".facet-show-more").each(function (a) {
                                    var c = b(this)
                                        , d = !0;
                                    b(f).find(".facet-show-more").each(function (a) {
                                        var e = b(this);
                                        e.attr("data-facet-name") === c.attr("data-facet-name") && (e.replaceWith(c),
                                            c.attr("data-visited", "y"),
                                            d = !1)
                                    }),
                                        d && (f.find(".facet").last().after(c),
                                            c.attr("data-visited", "y"))
                                }),
                                "" !== l && d == l.replace("show-more-", "") ? (c.initializeShowMore(f),
                                    e.replaceWith(f),
                                    b("#" + l).click(),
                                    l = "") : (f.hasClass("show-more-initialized") && c.initializeShowMore(f),
                                        e.replaceWith(f)))
                        }
                    })
                }),
                    b(".facet").each(function (a) {
                        var c, d = b(this);
                        "category" !== d.parent("div").attr("id") && (d.hasClass("active") ? (c = b(h.applied_filter_container).find('[data-id="' + d.attr("data-id") + '"]'),
                            c.length > 0 && (d.attr("data-nstate", c.attr("data-nstate")),
                                d.find(".ref-count").html("(" + c.attr("data-count") + ")"),
                                d.find(".swatch").length > 0 && d.find(".icon-check").css("display", "inline-block"))) : "y" != d.attr("data-visited") ? (d.addClass("unavailable"),
                                    d.find(".swatch").removeAttr("tabindex"),
                                    d.find('[type="checkbox"]') && d.find('[type="checkbox"]').prop("disabled", !0)) : d.removeAttr("data-visited"))
                    }),
                    b(".facet-show-more").each(function (a) {
                        var c = b(this);
                        "y" == c.attr("data-visited") || c.hasClass("modal-link") ? c.removeAttr("data-visited") : c.addClass("hide")
                    })
            },
            update: function (a) {
                this.mergeRefinements(a)
            }
        },
            e.prototype = {
                init: function () {
                    var a = this;
                    this.filterMenu = new d(h.filter_container),
                        b(window).on("hashchange", function (b) {
                            if (-1 != window.location.hash.indexOf("#!")) {
                                var c = window.location.hash.substring(2)
                                    , d = window.location.pathname;
                                c == d ? window.location = d : a.makeEndecaRequest(c)
                            } else
                                a.makeEndecaRequest(b.originalEvent.newURL);
                            void 0 !== typeof window.sessionStorage && (sessionStorage.setItem("previousUrl", sessionStorage.getItem("currentUrl")),
                                sessionStorage.setItem("currentUrl", window.location.href))
                        }),
                        b(window).on("load", function (a) {
                            "" !== window.location.hash && -1 != window.location.hash.indexOf("#!") && (window.location.hash = "!")
                        })
                },
                makeEndecaRequest: function (a) {
                    var c = this;
                    i(),
                        b.ajax(a, {
                            cache: !1,
                            success: function (a) {
                                j(),
                                    c.updatePageWithResults(a)
                            },
                            error: function () {
                                j()
                            }
                        })
                },
                updatePageWithResults: function (a) {
                    this.filterMenu.update(a)
                }
            },
            a[c] || (a[c] = {}),
            a[c].FilterLandingController = e
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(a) {
            this.$element = b(a),
                this.init()
        }
        function e(a) {
            this.$element = b(a),
                this.init()
        }
        function f(a) {
            this.$element = b(a),
                this.init()
        }
        function g(a) {
            this.$element = b(a),
                this.init()
        }
        function h(a) {
            this.$element = b(a),
                this.init()
        }
        function i(a) {
            this.$element = b(a),
                this.cat = "",
                this.init()
        }
        function j(a) {
            this.$element = b(a),
                this.init()
        }
        function k(a) {
            this.$element = b(a)
        }
        function l() {
            this.init()
        }
        var m = a[c].constants
            , n = a[c].utilities
            , o = a[c] && a[c].config && a[c].config.loggingDebug
            , p = {
                base_element: ".two-column-right",
                applied_filter_container: ".applied-facets-nav",
                product_grid_container: ".product-grid",
                pagination_container: ".pagination",
                pagination_top_class: "pagination-top",
                pagination_bottom_class: "pagination-bottom",
                page_width_promo_container: ".page-width-promo-container",
                category_dropdowns: ".category-dropdowns",
                filter_container: ".filters",
                show_more_threshold: 8,
                num_results: "#total-num-recs",
                gemopedia_spotlight_container: ".gemopedia-spotlight-container"
            }
            , q = function () {
                a[c].loader.showLoader()
            }
            , r = function () {
                a[c].loader.hideLoader()
            }
            , s = b("body")
            , t = "";
        d.prototype = {
            init: function () {
                n.getURLParameter(window.location.search, "showMoreIds") && this.initializeShowMore(),
                    this.$element.on("click", ".facet, .dummy-facet", function (a) {
                        if (!b(this).parents(".facet-list").hasClass("links")) {
                            if ("LABEL" == a.target.nodeName)
                                return void a.stopPropagation();
                            b("input:checkbox").change(function () {
                                f = c.find('[role="checkbox"]'),
                                    b(this).is(":checked") ? (b(this).parents(".facet, .dummy-facet").addClass("active"),
                                        f.attr("aria-checked", "true"),
                                        c.siblings(".clear-filter").addClass("enabled")) : (b(this).parents(".facet, .dummy-facet").removeClass("active"),
                                            f.attr("aria-checked", "false"),
                                            c.siblings().hasClass("active") || c.siblings(".clear-filter").removeClass("enabled"))
                            });
                            var c = b(this)
                                , d = c.attr("data-id")
                                , e = c.attr("data-nstate")
                                , f = c.find('[role="checkbox"]');
                            c.hasClass("active") ? (c.removeClass("active"),
                                f.attr("aria-checked", "false"),
                                b('.applied-facet[data-id="' + d + '"]').remove(),
                                c.siblings().hasClass("active") || c.siblings(".clear-filter").removeClass("enabled")) : (c.addClass("active"),
                                    f.attr("aria-checked", "true"),
                                    c.siblings(".clear-filter").addClass("enabled")),
                                window.location.hash = "#!" + e
                        }
                        m.isTealiumEnabled && utag.link({
                            tealium_event: "link_click",
                            link_action: "Click",
                            link_category: "Left Navigation",
                            link_name: b(this).data("id")
                        })
                    }).on("click", ".clear-filter", function (a) {
                        var c = []
                            , d = ""
                            , e = b(this)
                            , f = ""
                            , g = "";
                        e.siblings(".facet.active, .dummy-facet.active").each(function (a) {
                            var e, h = this.getAttribute("data-nstate");
                            if (-1 !== h.indexOf("Ntt") && -1 === h.indexOf("N-"))
                                return d = "/search" + h,
                                    !1;
                            "" === f && -1 != h.indexOf("?") && (f = h.substring(h.indexOf("?"), h.length)),
                                "" !== g || -1 == h.indexOf("N-") && !h.indexOf("?") || (g = -1 != h.indexOf("N-") ? h.substring(0, h.indexOf("N-")) : h.substring(0, h.indexOf("?")));
                            var i = h.indexOf("N-") + 2
                                , j = -1 != h.indexOf("?") ? h.indexOf("?") : h.length;
                            e = h.substring(i, j).split("+"),
                                c = 0 === c.length ? e : b.grep(c, function (a) {
                                    return -1 !== b.inArray(a, e)
                                })
                        }),
                            e.parent().find("div").removeClass("active"),
                            e.parent().find('[role="checkbox"]').attr("aria-checked", "false"),
                            e.parent().find("input[type=checkbox]").removeClass("active").removeAttr("checked"),
                            d = c.length > 0 ? g + "N-" + c.join("+") + f : "/search?" + window.location.hash.split("?")[1],
                            e.removeClass("enabled").slideUp(),
                            window.location.hash = "#!" + d
                    }).on("click", ".facet-show-more a", function (a) {
                        a.preventDefault();
                        var c = b(this);
                        t = c.parent().attr("id"),
                            window.location.hash = "#!" + c.attr("href")
                    }).on("click", ".facet-show-more.modal-link", function (d) {
                        d.preventDefault();
                        var e = b(this)
                            , f = e.parents(".accordion-container").attr("id");
                        if (window.innerWidth < a[c].config.mediumMin) {
                            var g = b(this)
                                , h = g.closest(".facet-list");
                            h.hasClass("full-list") ? (h.removeClass("full-list"),
                                g.html('<span class="icon-plus-circle"></span>See more options')) : (h.addClass("full-list"),
                                    g.html('<span class="icon-minus-circle"></span>See fewer options'))
                        } else {
                            var i = document.getElementById("facet-modal") ? b("#facet-modal") : n.createModal("facet-modal", "medium")
                                , j = m.contextPath + "/browse/ajax/facetModal.jsp?id=" + f
                                , k = {
                                    url: j
                                };
                            i.modal(k)
                        }
                    }),
                    s.on("click", "#clear-all-filters-link", function () {
                        var a = window.location.origin
                            , b = window.location.search
                            , c = n.getURLParameter(b, "Ntt") || ""
                            , d = n.getURLParameter(b, "type") || ""
                            , e = n.getURLParameter(b, "N") || ""
                            , f = n.getURLParameter(b, "Ntk") || "";
                        "" !== c && "" !== d && "" !== e && "" !== f ? window.location = a + "/search/?Ntt=" + c + "&type=" + d + "&N=" + e + "&Ntk=" + f : "" !== c ? window.location = a + "/search/?Ntt=" + c : window.location = a + window.location.pathname + b
                    }).on("click", ".dummy-facet", function (a) {
                        var c = b(this)
                            , d = "#" + c.find("input").prop("id").replace("-dummy", "")
                            , e = c.find("input").prop("id").replace("-dummy", "");
                        b(d);
                        document.getElementById(e).click(),
                            c.find("input").prop("checked", function (a, b) {
                                return b && c.removeClass("active"),
                                    !b
                            })
                    }).on("click", ".refine-price-submit", function (a) {
                        a.preventDefault();
                        var c = ""
                            , d = b("#min-price").val()
                            , e = b("#max-price").val();
                        if (void 0 == e || void 0 == d || "" == d || "" == e)
                            return !1;
                        e > .01 && (e -= .01);
                        var f = window.location.hash + "";
                        if ("" === f ? (f = window.location.search + "",
                            "" === f && (f = window.location.href + "")) : -1 != f.indexOf("#!") && (f = f.substring(2, f.length)),
                            -1 != f.indexOf("No=")) {
                            var g = f.split("&");
                            f = "",
                                -1 != g[0].indexOf("No=") && (g[0] = "?No=0"),
                                b.each(g, function (a, b) {
                                    0 !== a && (f += -1 != b.indexOf("No=") ? "&No=0" : "&" + b)
                                }),
                                f = g[0] + f
                        }
                        if (c = f,
                            -1 == f.indexOf("Nf="))
                            c = -1 == f.indexOf("?") ? c + "?Nf=sku.activePrice|BTWN+" + d + "+" + e : c + "&Nf=sku.activePrice|BTWN+" + d + "+" + e;
                        else {
                            var h = f.split("&");
                            f = "",
                                -1 != h[0].indexOf("Nf=") && (h[0] = h[0].replace(h[0].substring(h[0].indexOf("Nf="), h[0].length), "Nf=sku.activePrice|BTWN+" + d + "+" + e)),
                                b.each(h, function (a, b) {
                                    0 !== a && (f += -1 != b.indexOf("Nf=") ? "&Nf=sku.activePrice|BTWN+" + d + "+" + e : "&" + b)
                                }),
                                c = h[0] + f
                        }
                        window.location.hash = "#!" + c
                    })
            },
            initializeShowMore: function (a) {
                a = a || this.$element.find(".facet-list"),
                    a.each(function (a, c) {
                        function d() {
                            var a = e.find(".facet-show-more");
                            if (e.find(".facet:not(.hide):gt(" + (p.show_more_threshold - 1) + ")").addClass("above-threshold"),
                                e.find(".facet:not(.hide):lt(" + p.show_more_threshold + ")").removeClass("above-threshold"),
                                a.length > 0)
                                a.hasClass("modal-link") || a.attr("tabindex", 0).addClass("modal-link").html('<span class="icon-plus-circle"></span>See more options');
                            else {
                                var b = '<div class="facet-show-more modal-link" id="show-more-' + e.data("dim") + '" tabindex="0"><span class="icon-plus-circle"></span>See more options</div>';
                                e.find(".clear-filter").before(b)
                            }
                        }
                        var e = b(c);
                        e.hasClass("show-more-initialized") ? d() : e.find(".facet").length > p.show_more_threshold && (d(),
                            e.addClass("show-more-initialized"))
                    })
            },
            applyFacets: function (a) {
                b(a).find(".applied-facet").each(function () {
                    var a = b(this)
                        , c = a.attr("data-id")
                        , d = b('.facet[data-id="' + c + '"]')
                        , e = d.find('[role="checkbox"]');
                    d.hasClass("active") || (d.addClass("active"),
                        e.attr("aria-checked", "true"),
                        d.find('[type="checkbox"]').prop("checked", !0),
                        d.siblings(".clear-filter").hasClass("enabled") || d.siblings(".clear-filter").addClass("enabled"))
                })
            },
            mergeRefinements: function (a) {
                var c = this
                    , d = b(a);
                d.find(".facet-list").each(function () {
                    var a = b(this);
                    b(".facet-list").each(function () {
                        var d = b(this)
                            , e = d.data("dim");
                        if (void 0 !== a.attr("data-dim") && "category" !== b(this).attr("id")) {
                            var f = b(this)
                                , g = f.clone();
                            g.attr("data-dim") === a.attr("data-dim") && (b(a).find(".facet").each(function (a) {
                                var c = b(this)
                                    , d = !0;
                                b(g).find(".facet").each(function (a) {
                                    var e = b(this);
                                    e.attr("data-id") === c.attr("data-id") && (e.replaceWith(c),
                                        c.attr("data-visited", "y"),
                                        d = !1)
                                }),
                                    d && (g.find(".facet").last().after(c),
                                        c.attr("data-visited", "y"))
                            }),
                                b(a).find(".facet-show-more").each(function (a) {
                                    var c = b(this)
                                        , d = !0;
                                    b(g).find(".facet-show-more").each(function (a) {
                                        var e = b(this);
                                        e.attr("data-facet-name") === c.attr("data-facet-name") && (e.replaceWith(c),
                                            c.attr("data-visited", "y"),
                                            d = !1)
                                    }),
                                        d && (g.find(".facet").last().after(c),
                                            c.attr("data-visited", "y"))
                                }),
                                "" !== t && e == t.replace("show-more-", "") ? (c.initializeShowMore(g),
                                    f.replaceWith(g),
                                    b("#" + t).click(),
                                    t = "") : (g.hasClass("show-more-initialized") ? c.initializeShowMore(g) : (g.find(".facet:not(.hide):gt(" + (p.show_more_threshold - 1) + ")").addClass("above-threshold"),
                                        g.find(".facet:not(.hide):lt(" + p.show_more_threshold + ")").removeClass("above-threshold")),
                                        f.replaceWith(g))),
                                0 === d.find(".facet.active").length && d.find(".clear-filter").removeClass("enabled")
                        }
                    })
                }),
                    b(".facet").each(function (a) {
                        var c, d = b(this);
                        "category" !== d.parent("div").attr("id") && (d.hasClass("active") ? (c = b(p.applied_filter_container).find('[data-id="' + d.attr("data-id") + '"]'),
                            c.length > 0 && (d.attr("data-nstate", c.attr("data-nstate")),
                                d.find(".ref-count").html("(" + c.attr("data-count") + ")"),
                                d.find(".swatch").length > 0 && d.find(".icon-check").css("display", "inline-block"))) : "y" != d.attr("data-visited") ? (d.addClass("hide"),
                                    d.find(".swatch").removeAttr("tabindex"),
                                    d.find('[type="checkbox"]') && d.find('[type="checkbox"]').prop("disabled", !0)) : d.removeAttr("data-visited"))
                    }),
                    b(".facet-show-more").each(function (a) {
                        var c = b(this);
                        "y" == c.attr("data-visited") || c.hasClass("modal-link") ? c.removeAttr("data-visited") : c.addClass("hide")
                    }),
                    b(".facet-list").each(function (a) {
                        var c = b(this)
                            , d = c.data("dim");
                        0 === c.parents(".facet-modal").length && 0 === c.find(".facet:not(.hide)").length ? b("#" + d).addClass("hide") : (b("#" + d).removeClass("hide"),
                            c.find(".facet:not(.hide):gt(" + (p.show_more_threshold - 1) + ")").addClass("above-threshold"),
                            c.find(".facet:not(.hide):lt(" + p.show_more_threshold + ")").removeClass("above-threshold"))
                    })
            },
            update: function (a) {
                this.applyFacets(a),
                    this.mergeRefinements(a)
            }
        },
            e.prototype = {
                init: function () {
                    this.$element.on("click", ".sort-dropdown a, .items-per-page-dropdown a", function (a) {
                        if (a.preventDefault(),
                            !/active/.test(a.target.getAttribute("class"))) {
                            var c = b(a.target).attr("data-sortvalue")
                                , d = decodeURI(n.getURLParameter(c, "No"))
                                , e = decodeURI(n.getURLParameter(c, "Nrpp"));
                            "" !== d && "" !== e && (c = c.replace("No=" + d, "No=" + Math.floor(parseInt(d) / parseInt(e)) * parseInt(e))),
                                window.location.hash = "#!" + c
                        }
                    })
                },
                update: function (a) {
                    var c = window.location.hash
                        , d = (decodeURI(n.getURLParameter(c, "Ns")),
                            decodeURI(n.getURLParameter(c, "Nrpp")),
                            b(a))
                        , e = ".sort-dropdown-container"
                        , f = ".items-per-page-container";
                    b(e).html(d.find(e).html()),
                        b(f).html(d.find(f).html()),
                        b(".sort-dropdown, .items-per-page-dropdown").dropdown()
                }
            },
            f.prototype = {
                init: function () { },
                update: function (a) {
                    this.$element.html(b(a).find(p.gemopedia_spotlight_container).html())
                }
            },
            g.prototype = {
                init: function () { },
                update: function (c) {
                    this.$element.html(b(c).find(p.product_grid_container).html()),
                        a.picturefill(),
                        b(".love-list-dropdown").dropdown(),
                        JTV.browse.initCompareProdGrid()
                }
            },
            h.prototype = {
                init: function () { },
                update: function (a) {
                    this.$element.html(b(a).find(p.page_width_promo_container).html())
                }
            },
            i.prototype = {
                init: function () {
                    this.$element.on("click", ".applied-facet", function (a) {
                        var c = b(this);
                        window.location.hash = "#!" + c.data("nstate")
                    })
                },
                update: function (a) {
                    var c = b(a);
                    this.$element.html(c.find("#applied-facet-breadcrumbs").html());
                    var d = b("#clear-all-filters-link");
                    b(".applied-facets").html().trim().length > 0 ? d.show() : d.hide()
                }
            },
            j.prototype = {
                init: function () {
                    this.$element.on("click", "a", function (a) {
                        a.preventDefault(),
                            window.location.hash = "#!" + b(this).attr("href"),
                            b(this).parents(".pagination-bottom").length > 0 && window.scrollTo(0, 0)
                    })
                },
                update: function (a) {
                    this.$element.each(function () {
                        var c = b(this);
                        c.hasClass(p.pagination_top_class) ? c.html(b(a).find("." + p.pagination_top_class).html()) : c.hasClass(p.pagination_bottom_class) ? c.html(b(a).find("." + p.pagination_bottom_class).html()) : c.html(b(a).find(p.pagination_container).html())
                    }),
                        b(".pagination-dropdown").dropdown();
                    var c = b(".pagination-dropdown .dropdown-menu");
                    c.length > 0 && c.show().scrollTop(b(".pagination-dropdown .active").position().top).hide()
                }
            },
            k.prototype = {
                update: function (a) {
                    this.$element.html(b(a).find(p.num_results).html());
                }
            },
            l.prototype = {
                init: function () {
                    o && console.debug("init filter controller");
                    var a = this;
                    this.appliedFilters = new i(p.applied_filter_container),
                        this.productGrid = new g(p.product_grid_container),
                        this.pagination = new j(p.pagination_container),
                        this.categoryDropdowns = new e(p.category_dropdowns),
                        this.pageWidthPromo = new h(p.page_width_promo_container),
                        this.filterMenu = new d(p.filter_container),
                        this.numResults = new k(p.num_results),
                        this.gemopediaSpotlight = new f(p.gemopedia_spotlight_container),
                        b(window).on("hashchange", function (b) {
                            if (-1 != window.location.hash.indexOf("#!")) {
                                var c = window.location.hash.substring(2)
                                    , d = window.location.pathname;
                                c == d ? window.location = d : a.makeEndecaRequest(c)
                            } else
                                a.makeEndecaRequest(b.originalEvent.newURL);
                            void 0 !== typeof window.sessionStorage && (sessionStorage.setItem("previousUrl", sessionStorage.getItem("currentUrl")),
                                sessionStorage.setItem("currentUrl", window.location.href))
                        }),
                        b(window).on("load", function (a) {
                            "" !== window.location.hash && -1 != window.location.hash.indexOf("#!") && b(window).trigger("hashchange")
                        })
                },
                makeEndecaRequest: function (d) {
                    var e = this;
                    q(),
                        b.ajax(d, {
                            cache: !1,
                            success: function (d) {
                                if (r(),
                                    e.updatePageWithResults(d),
                                    window.innerWidth > a[c].config.smallMax) {
                                    var f = b(".header-masthead").height() + b(".primary-nav").height();
                                    b("html, body").animate({
                                        scrollTop: b(".two-column-page").offset().top - f
                                    })
                                }
                            },
                            error: function () {
                                r()
                            }
                        })
                },
                updatePageWithResults: function (b) {
                    this.productGrid.update(b),
                        this.pagination.update(b),
                        this.categoryDropdowns.update(b),
                        this.pageWidthPromo.update(b),
                        this.appliedFilters.update(b),
                        this.filterMenu.update(b),
                        this.numResults.update(b),
                        this.gemopediaSpotlight.update(b),
                        a[c].callback.hasOwnProperty("inlinePromo") && a[c].callback.inlinePromo.update(!0),
                        s.trigger("filters-complete")
                }
            },
            a[c] || (a[c] = {}),
            a[c].FilterController = l
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = function (a, b) {
            this.init("imageviewer", a, b)
        }
            , e = (a[c].constants,
                a[c] && a[c].config && a[c].config.loggingDebug);
        d.prototype = {
            constructor: d,
            init: function (d, f, g) {
                e && (console.debug("init imageviewer with options:"),
                    console.debug(Array.prototype.slice.call(arguments)));
                var h = this;
                this.options = b.extend({}, b.fn[d].defaults, g),
                    this.$element = b(f),
                    this.$navigation = this.$element.find(this.options.thumbnail_container_class),
                    this.$mainView = this.$element.find(this.options.large_container_class),
                    this.totalSlides = this.$navigation.find(this.options.thumbnail_class).length,
                    this.slidesToShow = h.options.slider_min,
                    this.$navigation.find(this.options.thumbnail_class).first().addClass("active"),
                    this.totalSlides < this.slidesToShow && this.$navigation.parent().addClass("no-slide"),
                    this.$mainView.on("afterChange", function (a, b, c) {
                        h.getActiveSlide() != c && (h.setActiveSlide(c),
                            h.isSlideVisible(c, h.$navigation.slick("slickCurrentSlide")) || h.$navigation.slick("slickGoTo", Math.floor(c / h.slidesToShow) * h.slidesToShow))
                    }),
                    this.$mainView.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        dots: !1,
                        fade: !0,
                        infinite: !1
                    }),
                    this.$mainView.on("click", function (a) {
                        if (!h.options.disable_zoom) {
                            var b = h.$mainView.slick("slickCurrentSlide");
                            h.setActiveSlide(b),
                                h.openZoomModal(b)
                        }
                    }),
                    this.$navigation.on("afterChange", function (a, b, c, d) {
                        var e = h.$mainView.slick("slickCurrentSlide");
                        h.isSlideVisible(e, h.$navigation.slick("slickCurrentSlide")) || (h.$mainView.slick("slickGoTo", h.getFirstVisibleSlide(h.$navigation.slick("slickCurrentSlide"))),
                            h.setActiveSlide(h.getFirstVisibleSlide(h.$navigation.slick("slickCurrentSlide"))))
                    }),
                    this.$navigation.slick({
                        slidesToShow: h.options.slider_min,
                        slidesToScroll: h.options.slider_min,
                        arrows: !0,
                        dots: !1,
                        infinite: !1
                    }),
                    this.$navigation.find(this.options.thumbnail_class).click(function () {
                        var d = b(this)
                            , e = parseInt(d.data("slick-index"));
                        d.hasClass("three-sixty-thumb") || d.hasClass("video-thumb") ? b("body").hasClass("product") ? (h.setActiveSlide(e),
                            h.openZoomModal(e)) : (a[c].loader.showLoader(),
                                window.location = b(".product-image-viewer > a").attr("href")) : (h.setActiveSlide(e),
                                    h.$mainView.slick("slickGoTo", e))
                    })
            },
            getFirstVisibleSlide: function (a) {
                var b = a;
                return a + this.slidesToShow >= this.totalSlides && (b = this.totalSlides - this.slidesToShow),
                    b
            },
            isSlideVisible: function (a, b) {
                var c = !1;
                return c = b + this.slidesToShow > this.totalSlides ? a >= this.totalSlides - this.slidesToShow && a <= this.totalSlides - 1 : a >= b && a <= b + this.slidesToShow - 1
            },
            getActiveSlide: function () {
                return this.$navigation.find(".active").index() || 0
            },
            setActiveSlide: function (a) {
                this.$navigation.find(this.options.thumbnail_class).removeClass("active").end().find("[data-slick-index='" + a + "']").addClass("active")
            },
            getActiveSlideZoom: function () {
                return b("#" + this.options.zoom_modal_id).find(".active").index() || 0
            },
            setActiveSlideZoom: function (a) {
                b("#" + this.options.zoom_modal_id).find(this.options.thumbnail_class).removeClass("active").end().find("[index='" + a + "']").addClass("active")
            },
            openZoomModal: function (d) {
                var e = this
                    , f = document.getElementById(this.options.zoom_modal_id)
                    , g = f ? b("#" + this.options.zoom_modal_id) : a[c].utilities.createModal(this.options.zoom_modal_id)
                    , h = this.getZoomImageData(d)
                    , i = Mustache.render(a[c].templates.zoomModal, h);
                if (f) {
                    var j = g.find(this.options.large_container_class);
                    g.modal()
                } else {
                    g.modal({
                        content: i
                    });
                    var j = g.find(this.options.large_container_class)
                        , k = g.find(this.options.thumbnail_container_class)
                        , l = (j.slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !1,
                            fade: !0,
                            infinite: !1,
                            onAfterChange: function () {
                                var a = j.slick("slickCurrentSlide");
                                e.getActiveSlideZoom != a && (e.setActiveSlideZoom(a),
                                    e.isSlideVisible(a, k.slick("slickCurrentSlide")) || k.slick("slickGoTo", Math.floor(a / e.slidesToShow) * e.slidesToShow))
                            }
                        }),
                            k.slick({
                                mobileFirst: !0,
                                slidesToShow: e.options.zoom_slider_min,
                                slidesToScroll: e.options.zoom_slider_min,
                                dots: !1,
                                infinite: !1,
                                responsive: [{
                                    breakpoint: a[c].config.smallMax,
                                    settings: {
                                        slidesToShow: e.options.zoom_slider_min_medium_up,
                                        slidesToScroll: e.options.zoom_slider_min_medium_up
                                    }
                                }]
                            }));
                    this.totalSlides < this.slidesToShow && l.parent().addClass("no-slide"),
                        g.find(this.options.thumbnail_class).click(function (a) {
                            var b = parseInt(this.getAttribute("data-slick-index"));
                            e.setActiveSlideZoom(b),
                                j.slick("slickGoTo", b)
                        })
                }
                g.off("shown.modal").on("shown.modal", function () {
                    var a = h.selectedViewIndex;
                    e.setActiveSlideZoom(a),
                        j.slick("slickGoTo", a),
                        b(".zoom-three-sixty iframe").each(function () {
                            var a = this.id;
                            window.addEventListener("message", function (b) {
                                if ("loadedup" === b.data) {
                                    var c = document.getElementById(a);
                                    c.contentWindow.postMessage(c.clientHeight, "*")
                                }
                            })
                        })
                })
            },
            closeZoomModal: function () { },
            changeZoomImage: function (a) { },
            getZoomImageData: function (a) {
                var c = {
                    images: [],
                    selectedViewIndex: 0
                };
                return this.$navigation.find(".viewer-thumb-image").each(function (a) {
                    var d = {}
                        , e = b(this)
                        , f = e.parent()
                        , g = e.attr("src");
                    d.index = a,
                        d.thumbUrl = g,
                        d.is360 = !1,
                        d.isVideo = !1,
                        d.isImage = !1,
                        f.hasClass("three-sixty-thumb") ? (d.is360 = !0,
                            d.threeSixtyUrl = e.data("three-sixty-url")) : f.hasClass("video-thumb") ? (d.isVideo = !0,
                                d.videoUrl = e.data("video-url")) : (d.isImage = !0,
                                    d.largeUrl = g.replace("-thumb.jpg", "-zoom.jpg")),
                        e.parents(".viewer-thumb").hasClass("active") && (c.selectedViewIndex = a),
                        c.images.push(d)
                }),
                    c
            }
        },
            b.fn.imageviewer = function (a) {
                var c = this
                    , e = b.extend({}, b.fn.imageviewer.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "imageviewer");
                    c ? "object" == typeof a && b.extend(c.options, a) : (c = new d(this, e),
                        b.data(this, "imageviewer", c))
                })
            }
            ,
            b.fn.imageviewer.defaults = {
                large_container_class: ".viewer-main-images",
                thumbnail_container_class: ".viewer-thumbnails",
                thumbnail_class: ".viewer-thumb",
                zoom_modal_id: "modal-image-zoom",
                slider_min: 4,
                disable_zoom: !1,
                zoom_slider_min: 4,
                zoom_slider_min_medium_up: 6
            },
            b.fn.imageviewer.Constructor = d,
            b(function () {
                b("[data-imageviewer]").imageviewer()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = a[c].constants
            , e = (a[c] && a[c].config && a[c].config.loggingDebug,
                {
                    init: function () {
                        var a = '<div class="loader"><div class="loader-backdrop fade"/><div class="loader-content"><img class="loader-animation" src="' + d.contextPath + '/resources/images/ajax-loader.gif" width="46" height="46" /><span class="loader-text">just a moment...</span></div></div>';
                        this.$element = b(a).appendTo("body")
                    },
                    showLoader: function () {
                        this.$element.show()
                    },
                    hideLoader: function () {
                        this.$element.hide()
                    }
                });
        a[c] || (a[c] = {}),
            a[c].loader = e,
            b(document).ready(function () {
                a[c].loader.init()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(a) {
            var c = "bind" === a ? "delegate" : "undelegate";
            this.$element[c]('[data-dismiss="modal"], .cancel', "click.dismiss.modal", b.proxy(this.hide, this))
        }
        function e(a) {
            var b = a.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
            return "string" == typeof b[1] && b[1].length > 0 && b[1].toLowerCase() !== location.protocol ? !0 : "string" == typeof b[2] && b[2].length > 0 && b[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            }[location.protocol] + ")?$"), "") !== location.host ? !0 : !1
        }
        function f(a) {
            var c = this
                , d = {
                    url: a,
                    dataType: "html",
                    method: c.options.hasOwnProperty("method") ? c.options.method : "GET",
                    cache: !1,
                    success: function (a) {
                        c.isShown && c.isContentShown ? c.$element.one("contentHidden", function () {
                            i.call(c, a)
                        }) : i.call(c, a),
                            c.options.hasOwnProperty("urlSuccessComplete") && "function" == typeof c.options.urlSuccessComplete && c.options.urlSuccessComplete()
                    },
                    error: function () {
                        i.call(c, v)
                    },
                    complete: function () { }
                };
            d.method.match(/post/i) && c.options.hasOwnProperty("data") && b.extend(d, {
                data: c.options.data
            }),
                e(a) ? window.postMessage ? g.call(this, a) : window.location = a : b.ajax(d),
                this.options.url = ""
        }
        function g(a) {
            var c, d = this;
            a += a.indexOf("?") > 0 ? "&proxy=true" : "?proxy=true",
                d.showLoader(),
                document.getElementById("proxy") ? c = b("#proxy") : (c = b('<iframe id="proxy" name="proxy" class="" style="visibility:hidden; float:left;" width="0" height="0" frameborder="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>').appendTo("body"),
                    pm.bind("setModalContent", function (a) {
                        d.isShown && d.isContentShown ? d.$element.one("contentHidden", function () {
                            i.call(d, a.content, {
                                proxy: !0
                            })
                        }) : i.call(d, a.content, {
                            proxy: !0
                        })
                    })),
                c.attr("src", a)
        }
        function h(a) {
            i.call(this, a),
                this.options.content = ""
        }
        function i(d, e) {
            var f = this
                , g = b(d).filter(".ajax-wrapper")
                , h = "modal"
                , i = g.attr("data-action") || ""
                , k = {
                    $modal: this.$element
                };
            e && (k = b.extend(k, e)),
                f.$content.empty().html(d),
                a[c].init(h, i, k),
                this.options.hasOwnProperty("show") && this.options.show && j.call(this)
        }
        function j() {
            var a, b = this;
            b.hideLoader(),
                a = o.call(b),
                b.isShown ? m.call(b, a, function () {
                    p.call(b)
                }) : m.call(b, a, function () {
                    k.call(b)
                })
        }
        function k() {
            var a, c = this, e = this.$modal;
            n.call(c),
                c.$modal.addClass("in"),
                x.addClass("no-scroll"),
                w ? a = setTimeout(function () {
                    r.call(c, "shown.modal", "isShown", !0),
                        d.call(c, "bind")
                }, 300) : (r.call(c, "shown.modal", "isShown", !0),
                    d.call(c, "bind")),
                y.attr("aria-hidden", !0),
                A = e.find("*").filter(z).not('[type="hidden"], #dlg-head');
            var f = A.length
                , g = 1;
            A.each(function () {
                var a = b(this);
                1 == g && a.focus(),
                    a.attr("tabindex", g),
                    g++
            }),
                e.keydown(function (a) {
                    if (13 == a.which)
                        "submit" !== b(a.target)[0].type && b(a.target).click();
                    else if (27 == a.which)
                        b(".modal").modal("hide");
                    else if (9 == a.which) {
                        var c = A.index(b(":focus"));
                        a.shiftKey ? 0 === c && (A.get(f - 1).focus(),
                            a.preventDefault()) : c == f - 1 && (A.get(0).focus(),
                                a.preventDefault())
                    }
                })
        }
        function l() {
            var a, c = this;
            c.$modal.removeClass("in"),
                x.removeClass("no-scroll"),
                w ? a = setTimeout(function () {
                    r.call(c, "hidden.modal", "isShown", !1),
                        d.call(c, "unbind")
                }, 300) : (r.call(c, "hidden.modal", "isShown", !1),
                    d.call(c, "unbind")),
                y.attr("aria-hidden", !1),
                A.length > 0 && A.each(function () {
                    b(this).attr("tabindex", "-1")
                })
        }
        function m(a, b) {
            var c, d, e = this, f = function () {
                e.$modal.css({
                    height: "auto"
                }),
                    b()
            };
            w && this.isShown ? a.currentWidth !== a.newWidth || a.currentHeight !== a.newHeight ? (c = e.$element[0].offsetWidth,
                e.$modal.css({
                    width: a.currentWidth,
                    height: a.currentHeight
                }),
                d = setTimeout(f, 300),
                e.$modal.addClass("resize").css({
                    height: a.newHeight
                })) : f() : (e.$modal.removeClass("resize").css({
                    height: a.newHeight
                }),
                    f())
        }
        function n() {
            var a, c, d, e = this;
            c = Math.max(b(window).height(), document.documentElement.clientHeight),
                d = e.$modal.height(),
                d > .7 * c && (d = .7 * c),
                a = (c - d) / 2 - 20,
                c > d ? e.$modal.css("top", a + "px") : e.$modal.css("top", b(document).scrollTop() + 20 + "px")
        }
        function o(a) {
            var b = this
                , c = {};
            return c.currentWidth = b.$modal.outerWidth(),
                c.currentHeight = b.$modal.outerHeight(),
                a ? (a.appendTo(b.$stage.show()),
                    c.newWidth = b.$stage.outerWidth(!0) + b.borderSize,
                    c.newHeight = b.$stage.outerHeight(!0) + b.borderSize,
                    b.$stage.empty().hide()) : (c.newWidth = b.$content.outerWidth(!0) + b.borderSize,
                        c.newHeight = b.$content.outerHeight(!0) + b.borderSize),
                c
        }
        function p() {
            var a, b = this;
            b.$element.trigger("contentShow.modal"),
                b.$content.addClass("in"),
                w ? a = setTimeout(function () {
                    r.call(b, "contentShown", "isContentShown", !0)
                }, 300) : r.call(b, "contentShown", "isContentShown", !0)
        }
        function q() {
            var a, b = this;
            b.$element.trigger("contentHide.modal"),
                b.$content.removeClass("in"),
                w ? a = setTimeout(function () {
                    r.call(b, "contentHidden.modal", "isContentShown", !1)
                }, 300) : r.call(b, "contentHidden.modal", "isContentShown", !1)
        }
        function r(a, b, c) {
            var d = this;
            d[b] = c,
                d.$element.trigger(a)
        }
        var s = function (a, b) {
            this.init("modal", a, b)
        }
            , t = a[c].constants
            , u = a[c] && a[c].config && a[c].config.loggingDebug
            , v = '<div class="error">' + t.ajaxError + "</div>"
            , w = Modernizr.csstransitions
            , x = b("body")
            , y = b(".off-canvas-wrap")
            , z = "a:not([disabled]), button:not([disabled]), .button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, *[tabindex], *[contenteditable]"
            , A = ""
            , B = x;
        s.prototype = {
            constructor: s,
            init: function (a, c, d) {
                u && (console.debug("init modal with options:"),
                    console.debug(Array.prototype.slice.call(arguments))),
                    this.options = b.extend({}, b.fn[a].defaults, d),
                    this.$element = b(c),
                    this.modalClass = this.options.modalClass,
                    this.$modal = b(".modal-window", this.$element),
                    this.$content = b(".modal-content", this.$element),
                    this.$backdrop = b(".modal-backdrop", this.$element),
                    this.$stage = b('<div style="position:absolute; left:-9999em; visibility:hidden; display:none" class="modal-content"></div>').appendTo("body"),
                    this.isLoaderShowing = !1,
                    this.isShown = !1,
                    this.isContentShown = !0,
                    this.contentLoadedOnHide = void 0,
                    this.borderSize = parseInt(this.$modal.css("borderLeftWidth"), 10) + parseInt(this.$modal.css("borderRightWidth"), 10)
            },
            toggle: function () {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function () {
                var a = b(".overlay-wrap:visible").last();
                B = b(document.activeElement),
                    this.$element.trigger("show.modal"),
                    a.size() > 0 && this.isShown === !1 && this.$element.insertAfter(a),
                    this.showLoader(),
                    this.options.url ? this.contentLoadedOnHide || f.call(this, this.options.url) : this.options.content ? h.call(this, this.options.content) : j.call(this),
                    this.contentLoadedOnHide = !1
            },
            hide: function (a) {
                this.$element.trigger("hide.modal"),
                    this.$element.hide(),
                    l.call(this),
                    this.$backdrop.removeClass("in"),
                    a && a.preventDefault(),
                    this.options.url && void 0 === this.contentLoadedOnHide && (f.call(this, this.options.url),
                        this.contentLoadedOnHide = !0),
                    B.focus()
            },
            reposition: function () {
                n.call(this)
            },
            showLoader: function () {
                this.isLoaderShowing || (this.isShown ? (q.call(this),
                    this.$modal.addClass("loading")) : (this.$element.show(),
                        this.$backdrop.addClass(this.options.url ? "loading in" : "in")),
                    this.isLoaderShowing = !0)
            },
            hideLoader: function () {
                this.isLoaderShowing && (this.isShown ? this.$modal.removeClass("loading") : this.$backdrop.removeClass("loading"),
                    this.isLoaderShowing = !1)
            }
        },
            b.fn.modal = function (a) {
                var c = this
                    , d = b.extend({}, b.fn.modal.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "modal");
                    c ? "object" == typeof a && b.extend(c.options, a) : b.data(this, "modal", c = new s(this, d)),
                        "string" == typeof a ? c[a]() : d.show ? c.show() : c.hide()
                })
            }
            ,
            b.fn.modal.defaults = {
                show: !0,
                id: "modal-default"
            },
            b.fn.modal.Constructor = s,
            b(function () {
                b("body").off("modal").on("click." + c + ".modal", ".modal-trigger", function (d) {
                    var e = b(this)
                        , f = e.attr("data-target") || b.fn.modal.defaults.id
                        , g = e.attr("data-size") || ""
                        , h = document.getElementById(f) ? b("#" + f) : a[c].utilities.createModal(f, g)
                        , i = e.attr("href")
                        , j = {
                            url: i,
                            size: g
                        };
                    d.preventDefault(),
                        h.modal(j)
                })
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d() {
            var a = 0;
            h.children().each(function () {
                a += b(this).outerHeight(!0)
            }),
                b(".off-canvas-wrap").css("height", a)
        }
        function e() {
            b(".off-canvas-wrap").css("height", "auto")
        }
        var f = function (a, b) {
            this.init("offcanvas", a, b)
        }
            , g = (a[c].constants,
                a[c] && a[c].config && a[c].config.loggingDebug)
            , h = (a[c].utilities,
                b(".off-canvas-menu"));
        f.prototype = {
            constructor: f,
            init: function (a, e, f) {
                var i = this
                    , j = "";
                g && (console.debug("init offcanvas with options:"),
                    console.debug(Array.prototype.slice.call(arguments))),
                    this.options = b.extend({}, b.fn[a].defaults, f),
                    this.$element = b(e),
                    "move" === this.options.open_method ? j = "move-right" : "overlap_single" === this.options.open_method ? j = "offcanvas-overlap-right" : "overlap" === this.options.open_method && (j = "offcanvas-overlap"),
                    b("body").off(".offcanvas").on("click." + c + ".offcanvas", ".off-canvas-toggle", function (a) {
                        i.toggle(j, this),
                            console.log("sw-before move-class"),
                            b(".off-canvas-wrap").hasClass("move-right") && b(b(".accordion-container .accordion-title")[0]).focus()
                    }).on("click." + c + ".offcanvas", ".off-canvas-menu a", function (a) {
                        var c = b(this).parent();
                        i.options.close_on_click && !c.hasClass("has-submenu") ? i.hide.call(i, j) : c.hasClass("has-submenu") && a.preventDefault()
                    }).on("click." + c + ".offcanvas", ".exit-off-canvas", function (a) {
                        i.hide(j)
                    }).on("blur." + c + ".offcanvas", ".off-canvas-menu li:last-child a:not(.active)", function (a) {
                        i.hide(j),
                            b(".masthead-mobile-link.logo div a").focus()
                    }),
                    h.click(function () {
                        setTimeout(function () {
                            d()
                        }, 500)
                    })
            },
            toggle: function (a, b) {
                this.$element.is("." + a) ? this.hide(a) : this.show(a)
            },
            show: function (a, b) {
                this.$element.trigger("open").trigger("open." + c + ".offcanvas"),
                    this.$element.addClass(a),
                    b ? b.setAttribute("aria-expanded", "true") : this.$element.find(".off-canvas-toggle").attr("aria-expanded", "true"),
                    d()
            },
            hide: function (a, b) {
                this.$element.trigger("close").trigger("close." + c + ".offcanvas"),
                    this.$element.removeClass(a),
                    b ? b.setAttribute("aria-expanded", "false") : this.$element.find(".off-canvas-toggle").attr("aria-expanded", "false"),
                    e()
            }
        },
            b.fn.offcanvas = function (a) {
                var c = this
                    , d = b.extend({}, b.fn.offcanvas.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "offcanvas");
                    c ? "object" == typeof a && b.extend(c.options, a) : b.data(this, "offcanvas", c = new f(this, d))
                })
            }
            ,
            b.fn.offcanvas.defaults = {
                open_method: "move",
                close_on_click: !0
            },
            b.fn.offcanvas.Constructor = f,
            b(function () {
                b("[data-offcanvas]").offcanvas()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c, d) {
        function e(a, b) {
            return a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className)
        }
        function f(a) {
            return e(a, "locked") || null === a.parentNode.querySelector(".primary-nav-menu") ? !1 : !0
        }
        var g = function (a, b) {
            this.init("primarynav", a, b)
        };
        g.prototype = {
            constructor: g,
            init: function (a, e, g) {
                var h = this;
                this.options = b.extend({}, b.fn[a].defaults, g),
                    this.$element = b(e),
                    this.$backdrop = b(".primary-nav-backdrop"),
                    c.touch && (h.options.is_primary_hover = !1),
                    h.options.is_primary_hover ? this.$element.off("primarynav").on("mouseenter." + d + ".primarynav", ".primary-nav-button", function (a) {
                        if (f(this)) {
                            var c;
                            clearTimeout(h.timeout),
                                c = b(this).closest(".primary-nav-item"),
                                h.timeout = setTimeout(function () {
                                    h.close.call(h),
                                        h.open.call(h, c)
                                }, 100)
                        }
                    }).on("mouseleave." + d + ".primarynav", function (a) {
                        clearTimeout(h.timeout),
                            h.timeout = setTimeout(function () {
                                h.close.call(h)
                            }
                                .bind(this), 100)
                    }).on("mouseenter." + d + ".primarynav", ".primary-nav-menu", function (a) {
                        f(this) && clearTimeout(h.timeout)
                    }) : (this.$element.off("primarynav").on("click." + d + ".primarynav", ".primary-nav-button", function (a) {
                        if (f(this)) {
                            var c = b(this).closest(".primary-nav-item");
                            return c.hasClass("active") && h.options.is_primary_button_clickable ? void 0 : (h.toggle(c),
                                a.preventDefault(),
                                a.stopPropagation(),
                                !1)
                        }
                    }),
                        b("body").off("primarynav").on("click." + d + ".primarynav, touchstart." + d + ".primarynav", function (a) {
                            b(a.target).closest(e).length > 0 || h.close.call(h, h.$element.find(".primary-nav-item"))
                        })),
                    this.$backdrop.on("click", function () {
                        clearTimeout(h.timeout),
                            h.timeout = setTimeout(function () {
                                h.close.call(h)
                            }
                                .bind(this), 100)
                    }).on("mouseenter." + d + ".backdrop", function (a) {
                        clearTimeout(h.timeout),
                            h.timeout = setTimeout(function () {
                                h.close.call(h)
                            }
                                .bind(this), 500)
                    }).on("mouseleave." + d + ".backdrop", function (a) {
                        clearTimeout(h.timeout)
                    })
            },
            toggle: function (a) {
                this.close.call(this, this.$element.find(".primary-nav-item").not(a)),
                    a.hasClass("active") ? this.close.call(this, a) : this.open.call(this, a)
            },
            close: function (a) {
                if (a) {
                    var b = a.find(".primary-nav-menu");
                    b.hide(),
                        a.removeClass("active").attr("aria-expanded", "false"),
                        this.options.open_first_flyout_by_default && b.removeAttr("style").find(".sub-nav-menu").removeAttr("style").parents("li.active").removeClass("active").attr("aria-expanded", "false")
                } else
                    this.$element.find(".primary-nav-item").removeClass("active").attr("aria-expanded", "false").find(".primary-nav-menu").hide(),
                        this.options.open_first_flyout_by_default && this.$element.find(".primary-nav-menu").removeAttr("style").find(".sub-nav-menu").removeAttr("style").parents("li.active").removeClass("active").attr("aria-expanded", "false");
                this.$backdrop.removeClass("in")
            },
            open: function (a) {
                var b, d, e, f = a.find(".primary-nav-menu"), g = this.$element.find("nav"), h = a.offset().left, i = g.offset().left, j = !1, k = 0;
                if (f.css("left", "").css("right", ""),
                    this.options.open_first_flyout_by_default) {
                    var l = a.find(".sub-nav-button:first");
                    c.touch ? l.trigger("click") : l.trigger("mouseenter")
                }
                this.options.is_primary_full_width ? (d = -(h - i) + "px",
                    e = "auto") : (g = this.$element.find("nav"),
                        b = g.width(),
                        k = f.outerWidth(),
                        k > i + b - h && (j = !0),
                        j ? (d = "auto",
                            e = "10px") : (d = "10px",
                                e = "auto")),
                    this.$backdrop.addClass("in"),
                    f.css({
                        left: d,
                        right: e
                    }).show(),
                    a.addClass("active").attr("aria-expanded", "true")
            }
        },
            b.fn.primarynav = function (a) {
                return this.each(function () {
                    var c = b(this)
                        , d = c.data("primarynav")
                        , e = "object" == typeof a && a;
                    d ? b.extend(d.options, e) : c.data("primarynav", d = new g(this, e)),
                        "string" == typeof a && d[a]()
                })
            }
            ,
            b.fn.primarynav.defaults = {
                is_primary_hover: !0,
                is_primary_button_clickable: !0,
                is_primary_full_width: !1,
                open_first_flyout_by_default: !0
            },
            b.fn.primarynav.Constructor = g,
            b(function () {
                b("[data-primarynav]").primarynav()
            })
    }(this, window.jQuery, window.Modernizr, "JTV"),
    function (a, b, c, d) {
        var e = function (a, b) {
            this.init("flyoutnav", a, b)
        };
        e.prototype = {
            constructor: e,
            init: function (a, e, f) {
                var g = this;
                this.options = b.extend({}, b.fn[a].defaults, f),
                    this.$element = b(e),
                    c.touch && (g.options.is_flyout_hover = !1),
                    g.options.is_flyout_hover ? this.$element.off("flyoutnav").on("mouseenter." + d + ".flyoutnav", ".sub-nav-button", function (a) {
                        var c = b(this).parent().find(".sub-nav-menu");
                        clearTimeout(g.timeout),
                            g.timeout = setTimeout(function () {
                                g.close.call(g),
                                    g.open.call(g, c)
                            }, 50)
                    }).on("mouseleave." + d + ".flyoutnav", function (a) {
                        clearTimeout(g.timeout),
                            g.timeout = setTimeout(function () {
                                if (g.close.call(g),
                                    g.options.open_first_by_default) {
                                    var a = b(".primary-nav-item.active").find(".sub-nav-menu:first");
                                    g.open.call(g, a)
                                }
                            }
                                .bind(this), 50)
                    }).on("mouseenter." + d + ".flyoutnav", ".sub-nav-menu", function (a) {
                        clearTimeout(g.timeout)
                    }) : (this.$element.off("flyoutnav").on("click." + d + ".flyoutnav", ".sub-nav-button", function (a) {
                        var c = b(this).parent().find(".sub-nav-menu");
                        return c.parent().hasClass("active") && g.options.is_flyout_button_clickable ? void 0 : (g.toggle(c),
                            a.preventDefault(),
                            a.stopPropagation(),
                            !1)
                    }),
                        b("body").off("flyoutnav").on("click." + d + ".flyoutnav, touchstart." + d + ".flyoutnav", function (a) {
                            b(a.target).closest(e).length > 0 || g.close.call(g)
                        }))
            },
            toggle: function (a) {
                this.close.call(this),
                    this.close.call(this, this.$element.find(".sub-nav-menu").not(a)),
                    a.parent().hasClass("active") ? this.close.call(this, a) : this.open.call(this, a)
            },
            open: function (a) {
                var b = this.$element.children("ul").outerWidth()
                    , c = Math.max(a.outerHeight(), this.$element.outerHeight());
                this.$element.css({
                    height: c
                }),
                    a.attr("style", "").css({
                        top: 0,
                        left: b,
                        height: c
                    }).parent().addClass("active").attr("aria-expanded", "true")
            },
            close: function (a) {
                a ? (this.$element.css({
                    width: "",
                    height: ""
                }),
                    a.attr("style", "").parent().removeClass("active").attr("aria-expanded", "false")) : this.$element.css({
                        width: "",
                        height: ""
                    }).find(".sub-nav-menu").attr("style", "").parent().removeClass("active").attr("aria-expanded", "false")
            }
        },
            b.fn.flyoutnav = function (a) {
                return this.each(function () {
                    var c = b(this)
                        , d = c.data("flyoutnav")
                        , f = "object" == typeof a && a;
                    d ? b.extend(d.options, f) : c.data("flyoutnav", d = new e(this, f)),
                        "string" == typeof a && d[a]()
                })
            }
            ,
            b.fn.flyoutnav.defaults = {
                is_flyout_hover: !0,
                is_flyout_button_clickable: !0,
                open_first_by_default: !0
            },
            b.fn.flyoutnav.Constructor = e,
            b(function () {
                b("[data-flyoutnav]").flyoutnav()
            })
    }(this, window.jQuery, window.Modernizr, "JTV"),
    function (a, b, c) {
        function d(a) {
            void 0 !== a && (e(),
                h(a),
                g(a),
                i(a),
                j(a),
                f(a))
        }
        function e() {
            if (!b.cookie("hide-checkRememberMe")) {
                var a = b('<img style="position:absolute; visibility:hidden" src="/checkRememberMe.jsp?prompt=none"/>');
                a.on("load", function () {
                    n.getProfileStatus()
                }),
                    b("body").append(a)
            }
            b.cookie("hide-checkRememberMe", "true", {
                path: "/"
            })
        }
        function f(a) {
            return sessionStorage && sessionStorage.setItem("lastLoginStatus", a.statusValue),
                location.pathname.indexOf("/checkout/cart.jsp") > -1 && a.statusValue != m ? void location.reload() : void 0
        }
        function g(a) {
            b(".cart-count").text(a.cartCount),
                a.cartCount > 0 && (l && console.log(c + ".profile cart count: ", a.cartCount),
                    b(".mini-cart-expanded").removeClass("empty")),
                m != a.statusValue && b.ajax({
                    url: k.contextPath + "/sitewide/includes/miniCartContent.jsp",
                    cache: !1,
                    dataType: "html",
                    success: function (a) {
                        q.html(a),
                            r.html(a)
                    },
                    error: function (a) {
                        console.log("could not get /sitewide/includes/miniCartContent.jsp: ", a)
                    }
                })
        }
        function h(a) {
            n.loginStatus = a.statusValue;
            var c;
            c = n.loginStatus > 2 ? "fully-authenticated" : "guest",
                b("html").removeClass("guest partially-authenticated fully-authenticated").addClass(c),
                m != a.statusValue && (o.length && b.ajax({
                    url: k.contextPath + "/sitewide/includes/accountMenuContent.jsp",
                    cache: !1,
                    dataType: "html",
                    success: function (a) {
                        o.html(a)
                    },
                    error: function (a) {
                        console.log("could not get /sitewide/includes/accountMenuContent.jsp: ", a)
                    }
                }),
                    p.length && b.ajax({
                        url: k.contextPath + "/sitewide/includes/accountMenuContentMobile.jsp",
                        cache: !1,
                        dataType: "html",
                        success: function (a) {
                            p.html(a)
                        },
                        error: function (a) {
                            console.log("could not get /sitewide/includes/accountMenuContentMobile.jsp: ", a)
                        }
                    }))
        }
        function i(a) {
            var c = a.firstname
                , d = b(".account-text-large .greeting");
            "" === c || void 0 === c ? d.html(k.messages.greetingGuest) : d.html(k.messages.greeting + ", " + c + "!")
        }
        function j(a) {
            var c = "/account/lovelist.jsp";
            c = a.statusValue > 2 ? "/account/lovelist.jsp" : "/account/lovelistGuest.jsp",
                b(".js-lovelist-href").attr("href", c)
        }
        var k = a[c].constants
            , l = a[c] && a[c].config && a[c].config.loggingDebug
            , m = (["^" + k.contextPath + "/$", "^" + k.contextPath + "/account/login.jsp", "^" + k.contextPath + "/account/account.jsp", "^" + k.contextPath + "/account/lovelist.jsp", "^" + k.contextPath + "/checkout/cart.jsp", "^" + k.contextPath + "/checkout/shipping.jsp", "^" + k.contextPath + "/checkout/billing.jsp", "^" + k.contextPath + "/checkout/review.jsp", "^" + k.contextPath + "/checkout/receipt.jsp"],
                0)
            , n = {}
            , o = b(".desktop-header .account-menu .utility-nav-dropdown-expanded")
            , p = b(".mobile-header #mobile-account-dropdown")
            , q = b(".desktop-header .mini-cart .utility-nav-dropdown-expanded")
            , r = b(".mobile-header #mobile-mini-cart");
        n.getProfileStatus = function (a) {
            var c = {
                statusValue: 0,
                cartCount: 0
            };
            m = sessionStorage && sessionStorage.getItem("lastLoginStatus") || 0,
                b.cookie("user-data") && (c = JSON.parse(b.cookie("user-data"))),
                k.isTealiumEnabled && c.login && (b.ajax({
                    url: k.contextPath + "/sitewide/tagging/tealiumUserLogin.jsp",
                    cache: !1,
                    dataType: "json",
                    success: function (a) {
                        utag.link(a)
                    },
                    error: function (a) {
                        console.log("could not get tealium user login info: ", a)
                    }
                }),
                    c.login = !1),
                d(c)
        }
            ,
            a[c] || (a[c] = {}),
            a[c].profileController = n
    }(this, window.jQuery, "JTV"),
    $(function () {
        !function (a, b, c) {
            var d = function (a, b) {
                this.init("promo-code", a, b)
            };
            d.prototype = {
                constructor: d,
                init: function (a, c, d) {
                    var e, f = this;
                    e = c instanceof jQuery ? c : b(c),
                        this.options = b.extend({}, b.fn.promocode.defaults, d),
                        this.$element = b(c),
                        this.$element.on("click", ".apply-promo-btn", function (a) {
                            f.applyPromo(),
                                a.preventDefault()
                        }),
                        this.$element.on("click", ".icon-remove-x", function () {
                            f.removeApplied(b(this))
                        })
                },
                applyPromo: function () {
                    var a, c, d, e, f;
                    c = b("#template").html(),
                        d = b(c),
                        a = b("#apply-promo-form").val(),
                        f = b('<span class="coupon-code">'),
                        d.prepend(f),
                        e = b(".coupon-code").html(),
                        f.text(a),
                        f.attr("data-pc", a);
                    var g = d.find(".view-details").attr("href").replace("promocode", a);
                    return d.find(".view-details").attr("href", g),
                        a === e ? (d.prependTo(".applied-promo-container").html(this.options.promo_already_applied_message),
                            setTimeout(function () {
                                b(".already-applied-msg").fadeOut().parent().remove()
                            }, 3e3),
                            void b("#apply-promo-form").val("")) : (d.prependTo(".applied-promo-container").slideDown(),
                                b("#apply-promo-form").val(""),
                                void (b(".applied-promo").length >= this.options.max_applied_promos && (b(".apply-promo-field-group").hide(),
                                    b("#apply-promo").append(b(".too-many-promos-msg")),
                                    b(".too-many-promos-msg").fadeIn("fast"))))
                },
                removeApplied: function (a) {
                    var c = a.parent();
                    c.fadeOut(function () {
                        b(this).remove()
                    }),
                        b(".applied-promo").length <= this.options.max_applied_promos && (b(".too-many-promos-msg").hide(),
                            b(".apply-promo-field-group").show())
                }
            },
                b.fn.promocode = function (a) {
                    var c = this
                        , e = b.extend({}, b.fn.promocode.defaults, "object" == typeof a && a)
                        , f = Array.prototype.slice.call(arguments, 1);
                    return c.each(function () {
                        var c = b.data(this, "promocode");
                        c ? "object" == typeof a ? b.extend(c.options, a) : "string" == typeof a && c[a].apply(c, f) : b.data(this, "promocode", c = new d(this, e))
                    })
                }
                ,
                b.fn.promocode.defaults = {
                    max_applied_promos: 3,
                    promo_already_applied_message: function () {
                        return '<div class="already-applied-msg">That code has already been applied.</div>'
                    }
                },
                b.fn.promocode.Constructor = d,
                b(function () {
                    b("[data-promocode]").promocode()
                })
        }(this, window.jQuery, "JTV")
    }),
    function (a, b, c) {
        function d(a, b) {
            a.$minus.removeClass("inactive").attr("tabindex", "0").attr("aria-disabled", !1),
                a.$plus.removeClass("inactive").attr("tabindex", "0").attr("aria-disabled", !1),
                b <= a.options.min_quantity && a.$minus.addClass("inactive").attr("tabindex", "-1").attr("aria-disabled", !0),
                b >= a.options.max_quantity && a.$plus.addClass("inactive").attr("tabindex", "-1").attr("aria-disabled", !0)
        }
        var e = function (a, b) {
            this.init("quantify", a, b)
        }
            , f = (a[c].constants,
                a[c] && a[c].config && a[c].config.loggingDebug);
        e.prototype = {
            constructor: e,
            init: function (a, c, e) {
                f && (console.debug("init quantify with options:"),
                    console.debug(Array.prototype.slice.call(arguments)));
                var g, h, i = this;
                this.options = b.extend({}, b.fn[a].defaults, e),
                    this.$element = b(c),
                    this.$plus = this.$element.find(".plus-icon"),
                    this.$minus = this.$element.find(".minus-icon"),
                    this.$counter = this.$element.find(".counter"),
                    h = this.$element.attr("data-max"),
                    "undefined" != typeof h && (this.options.max_quantity = parseInt(h)),
                    g = this.$element.attr("data-min"),
                    "undefined" != typeof g && (this.options.min_quantity = parseInt(g)),
                    isNaN(parseInt(i.$counter.val())) && i.$counter.val(i.options.min_quantity),
                    this.$element.on("click", ".plus-icon", function () {
                        i.increment()
                    }),
                    this.$element.on("click", ".minus-icon", function () {
                        return isNaN(parseInt(i.$counter.val())) ? void i.$counter.val(i.options.min_quantity) : void i.decrement()
                    }),
                    this.$counter.keypress(function (a) {
                        var c = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];
                        -1 == b.inArray(a.which, c) && a.preventDefault()
                    }),
                    this.$counter.keyup(function (a) {
                        var b = parseInt(i.$counter.val());
                        b > i.options.max_quantity && i.$counter.val(i.options.max_quantity).change(),
                            b < i.options.min_quantity && i.$counter.val(i.options.min_quantity).change(),
                            isNaN(b) && i.$counter.val(i.options.min_quantity).change(),
                            d(i, b)
                    }).keyup()
            },
            increment: function () {
                (isNaN(this.$counter.val()) || "" === this.$counter.val()) && this.$counter.val(0);
                var a = parseInt(this.$counter.val()) + 1;
                a > this.options.max_quantity || (this.$counter.val(a).change(),
                    d(this, a),
                    this.$element.trigger("increment"))
            },
            decrement: function () {
                (isNaN(this.$counter.val()) || "" === this.$counter.val()) && this.$counter.val(0);
                var a = parseInt(this.$counter.val()) - 1;
                a < this.options.min_quantity || (this.$counter.val(a).change(),
                    d(this, a),
                    this.$element.trigger("decrement"))
            }
        },
            b.fn.quantify = function (a) {
                var c = this
                    , d = b.extend({}, b.fn.quantify.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "quantify");
                    c ? "object" == typeof a && b.extend(c.options, a) : b.data(this, "quantify", c = new e(this, d))
                })
            }
            ,
            b.fn.quantify.defaults = {
                max_quantity: 999,
                min_quantity: 0
            },
            b.fn.quantify.Constructor = e,
            b(function () {
                b("[data-quantify]").quantify();
            })
    }(this, window.jQuery, "JTV"),
    $(function () {
        !function (a, b, c) {
            var d = function (a, b) {
                this.init("tabs", a, b)
            };
            d.prototype = {
                constructor: d,
                init: function (a, c, d) {
                    var e, f = this;
                    e = c instanceof jQuery ? c : b(c),
                        this.options = b.extend({}, b.fn[a].defaults, d),
                        this.$element = b(c),
                        this.$trigger = this.$element.find(".tab-title"),
                        this.$target = this.$element.find(".tab-body"),
                        this.$element.on("click", ".tab-title", function () {
                            f.changeTab(this)
                        })
                },
                changeTab: function (a) {
                    this.$trigger.removeClass("active"),
                        this.$target.removeClass("active");
                    var c = b(a).attr("aria-controls")
                        , d = b("#" + c + "panel");
                    b(a).addClass("active"),
                        b("#" + c + "panel").addClass("active"),
                        d.addClass("active"),
                        d.trigger("tabPanelChanged")
                }
            },
                b.fn.tabs = function (a) {
                    var c = this
                        , e = b.extend({}, b.fn.tabs.defaults, "object" == typeof a && a)
                        , f = Array.prototype.slice.call(arguments, 1);
                    return c.each(function () {
                        var c = b.data(this, "tabs");
                        c ? "object" == typeof a ? b.extend(c.options, a) : "string" == typeof a && c[a].apply(c, f) : b.data(this, "tabs", c = new d(this, e))
                    })
                }
                ,
                b.fn.tabs.Constructor = d,
                b(function () {
                    b("[data-tabs]").tabs()
                })
        }(this, window.jQuery, "JTV")
    }),
    function (a, b, c) {
        var d = a[c] && a[c].config && a[c].config.loggingDebug
            , e = function (a, b) {
                this.init("tooltip", a, b)
            }
            , f = b("body");
        e.prototype = {
            constructor: e,
            init: function (a, e, g) {
                function h(a, b, c) {
                    c ? j.showTip(b) : (clearTimeout(j.timeout_hide),
                        j.timeout_show = setTimeout(function () {
                            j.showTip(b)
                        }
                            .bind(a), j.options.hover_in_delay))
                }
                function i(a, b) {
                    b ? j.hide(a) : (clearTimeout(j.timeout_show),
                        j.timeout_hide = setTimeout(function () {
                            j.hide(a)
                        }, j.options.hover_out_delay))
                }
                d && (console.debug("init tooltip with options:"),
                    console.debug(Array.prototype.slice.call(arguments)));
                var j = this;
                this.options = b.extend({}, b.fn[a].defaults, g),
                    this.$element = b(e),
                    j.timeout_show = null,
                    j.timeout_hide = null,
                    j.create(this.$element),
                    j.options.trigger_on_hover && !Modernizr.touch ? (f.off(".tooltip").on("mouseenter." + c + ".tooltip", "[data-tooltip]", function (a) {
                        h(this, b(this))
                    }).on("mouseleave." + c + ".tooltip", "[data-tooltip].open, .tooltip", function (a) {
                        i(b(this))
                    }).on("keypress." + c + ".tooltip", function (a) {
                        b(this);
                        if (13 === a.which) {
                            var c = b(a.target);
                            void 0 === c.attr("data-tooltip") || c.hasClass("open") ? b("[data-tooltip].open").each(function () {
                                i(b(this), !0)
                            }) : (i(b("[data-tooltip].open"), !0),
                                h(a.target, c, !0))
                        }
                    }),
                        b(".tooltip").on("mouseenter", function (a) {
                            clearTimeout(j.timeout_hide)
                        })) : Modernizr.touch ? f.off(".tooltip").on("touchstart." + c + ".tooltip", function (a) {
                            var c = b(a.target);
                            void 0 === c.attr("data-tooltip") || c.hasClass("open") ? b("[data-tooltip].open").each(function () {
                                i(b(this), !0)
                            }) : (i(b("[data-tooltip].open"), !0),
                                h(a.target, c, !0))
                        }) : f.off(".tooltip").on("click." + c + ".tooltip", function (a) {
                            var c = b(a.target);
                            void 0 === c.attr("data-tooltip") || c.hasClass("open") || (i(b("[data-tooltip].open"), !0),
                                console.log("a"),
                                h(a.target, c, !0))
                        }).on("focusin." + c + ".tooltip", function (a) {
                            var c = b(a.target);
                            void 0 === c.attr("data-tooltip") || c.hasClass("open") || (i(b("[data-tooltip].open"), !0),
                                console.log("a"),
                                console.log("c"),
                                h(a.target, c, !0))
                        }).on("focusout." + c + ".tooltip", function (a) {
                            b(a.target);
                            b("[data-tooltip].open").each(function () {
                                i(b(this), !0),
                                    console.log("d")
                            })
                        })
            },
            showTip: function (a) {
                return this.show(a)
            },
            getTip: function (a) {
                var c = this.selector(a)
                    , d = null;
                return c && (d = b('span[data-selector="' + c + '"]' + this.options.tooltip_content_class)),
                    "object" == typeof d ? d : !1
            },
            selector: function (a) {
                var b = a.attr("data-selector");
                return "string" != typeof b && (b = "tooltip-" + Math.random().toString().substring(2, 8),
                    a.attr("data-selector", b).attr("aria-describedby", b)),
                    b
            },
            create: function (a) {
                var d = this
                    , e = this.options.tip_template;
                "string" == typeof this.options.tip_template && window.hasOwnProperty(this.options.tip_template) && (e = window[this.options.tip_template]);
                var f = b(e(this.selector(a), b("<div></div>").html(a.attr("title")).html()))
                    , g = this.inheritable_classes(a);
                f.addClass(g).appendTo(this.options.append_to),
                    Modernizr.touch && f.on("touchstart." + c + ".tooltip", function (b) {
                        d.hide(a)
                    }),
                    a.removeAttr("title").attr("title", "")
            },
            reposition: function (a, c, d) {
                var e, f, g, h, i;
                c.css("visibility", "hidden").show(),
                    e = a.data("width"),
                    f = c.children(".nub"),
                    g = f.outerHeight(),
                    h = f.outerHeight(),
                    b("html").hasClass("mobile") ? c.css({
                        width: "100%"
                    }) : c.css({
                        width: e ? e : ""
                    }),
                    i = function (a, b, c, d, e, f) {
                        return a.css({
                            top: b ? b : "auto",
                            bottom: d ? d : "auto",
                            left: e ? e : "auto",
                            right: c ? c : "auto"
                        }).end()
                    }
                    ;
                var j = a.offset().top
                    , k = a.offset().left
                    , l = a.outerWidth()
                    , m = c.outerHeight()
                    , n = c.outerWidth()
                    , o = j - m - g - 6
                    , p = "auto"
                    , q = "auto"
                    , r = k + l / 2 - n / 2
                    , s = b(window).outerWidth();
                d.indexOf("bottom") > -1 && (o = j + a.outerHeight() + g + 6),
                    15 > r ? (r = 15,
                        p = "auto",
                        f.css("left", k + l / 2 - h / 2 - 15).css("right", "auto")) : r + n > s - 15 && (r = "auto",
                            p = 15,
                            f.css("left", "auto").css("right", s - k - l / 2 - h / 2 - 15)),
                    i(c, o, p, q, r),
                    c.css("visibility", "visible").hide()
            },
            inheritable_classes: function (a) {
                var c = ["top", "right", "bottom", "left"]
                    , d = a.attr("class")
                    , e = d ? b.map(d.split(" "), function (a, d) {
                        return -1 !== b.inArray(a, c) ? a : void 0
                    }).join(" ") : "";
                return b.trim(e)
            },
            show: function (a) {
                var b = this.getTip(a);
                this.reposition(a, b, a.attr("class")),
                    a.addClass("open"),
                    b.fadeIn(150)
            },
            hide: function (a) {
                var b = this.getTip(a);
                b.fadeOut(150, function () {
                    a.removeClass("open")
                })
            },
            off: function () {
                var a = this;
                this.off("." + c + ".tooltip"),
                    b(this.options.tooltip_content_class).each(function (c) {
                        b("[" + a.attr_name() + "]").eq(c).attr("title", b(this).text())
                    }).remove()
            }
        },
            b.fn.tooltip = function (a) {
                var c = this
                    , d = b.extend({}, b.fn.tooltip.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "tooltip");
                    c ? "object" == typeof a && b.extend(c.options, a) : b.data(this, "tooltip", c = new e(this, d))
                })
            }
            ,
            b.fn.tooltip.defaults = {
                tooltip_content_class: ".tooltip-content",
                append_to: "body",
                trigger_on_hover: !1,
                trigger_on_focus: !1,
                hover_in_delay: 100,
                hover_out_delay: 350,
                tip_template: function (a, b) {
                    return '<span data-selector="' + a + '" id="' + a + '" class="tooltip-content" role="tooltip" tabindex="-1">' + b + '<span class="nub"></span></span>'
                }
            },
            b.fn.tooltip.Constructor = e,
            b(function () {
                b("[data-tooltip]").each(function () {
                    var a = b(this)
                        , c = a.attr("data-hover") || b.fn.tooltip.defaults.trigger_on_hover
                        , d = {
                            trigger_on_hover: c
                        };
                    b(this).tooltip(d)
                })
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = function (a, b) {
            this.init("typeahead", a, b)
        }
            , e = (a[c].constants,
                a[c] && a[c].config && a[c].config.loggingDebug);
        d.prototype = {
            constructor: d,
            init: function (a, c, d) {
                e && (console.debug("init typeahead with options:"),
                    console.debug(Array.prototype.slice.call(arguments)));
                var f = this
                    , g = ".typeahead-suggestions"
                    , h = ".typeahead-content"
                    , i = ".typeahead-products"
                    , j = b("body");
                this.options = b.extend({}, b.fn[a].defaults, d),
                    this.$element = b(c),
                    this.$results = b(this.$element.attr("data-target")),
                    this.$suggestions = this.$results.find(g),
                    this.$products = this.$results.find(i),
                    this.$content = this.$results.find(h),
                    this.$element.keyup(function (a) {
                        var c = String(b(this).val());
                        c.length >= f.options.trigger_num_chars ? (f.$products.html(""),
                            f.$content.html(""),
                            f.showSuggestions(c, f.$suggestions, f.$products, f.$content)) : f.hideResults()
                    }),
                    j.on("mouseenter", ".typeahead-suggestions li a", function (a) {
                        f.showDetails(b(this).data("detail-url"), f.$products)
                    }),
                    j.on("mouseleave", ".typeahead-suggestions li a", function (a) {
                        f.showDetails(b(this).data("detail-url"), f.$products)
                    }),
                    j.on("focus", ".typeahead-suggestions li a", function () {
                        f.showDetails(b(this).data("detail-url"), f.$products)
                    }),
                    j.on("keydown", ".typeahead-suggestions a", function (a) {
                        var c = a.keyCode ? a.keyCode : a.which;
                        9 != c || a.shiftKey || b(".typeahead-details a").length > 0 && (a.preventDefault(),
                            b(".typeahead-details li:first a").focus())
                    }),
                    j.on("keydown", ".typeahead-details a:last", function (a) {
                        var c = a.keyCode ? a.keyCode : a.which;
                        if (9 == c && !a.shiftKey) {
                            var d = b('.typeahead-suggestions a[data-detail-url="' + b(".typeahead-details").attr("data-detail-url") + '"]').parent().next();
                            d.length > 0 ? (a.preventDefault(),
                                d.find("a").focus()) : (a.preventDefault(),
                                    b(".keyword-search .keyword-search-button").focus(),
                                    f.hideResults())
                        }
                    }),
                    j.on("keydown", ".typeahead a", function (a) {
                        var b = a.keyCode ? a.keyCode : a.which;
                        (13 == b || 32 == b) && (window.location.href = this.href)
                    }),
                    j.on("click", ".typeahead .typeahead-content a", function (a) {
                        window.location.href = this.href,
                            console.debug("typeahead-content click")
                    }),
                    j.on("click", ".typeahead .typeahead-products a", function (a) {
                        window.location.href = this.href,
                            console.debug("typeahead-products click")
                    })
            },
            hideResults: function () {
                this.$element.attr("aria-expanded", !1),
                    this.$results.addClass("hide"),
                    this.$suggestions.empty(),
                    this.$products.empty()
            },
            showSuggestions: function (d, e, f, g) {
                var h = this
                    , i = this.$results
                    , j = this.$element;
                b.ajax({
                    url: a[c].constants.contextPath + "/public/v1/typeahead/suggest/" + d + ".js",
                    dataType: "json",
                    success: function (d) {
                        var k = d.query
                            , l = "<strong>" + k + "</strong>"
                            , m = d.suggestions
                            , n = ""
                            , o = 0;
                        window.innerWidth < a[c].config.mediumMin && (d.suggestions.length > 0 && (d.suggestions = d.suggestions.slice(0, 3)),
                            m = d.suggestions),
                            m.length > 0 && (b(m).each(function (a) {
                                d.suggestions[o].term = this.term.replace(new RegExp(k, "gi"), l),
                                    o++
                            }),
                                n = Mustache.render(a[c].templates.typeaheadSuggestionTemplate, d),
                                e.html(n),
                                b(".typeahead-products .product-name").each(function (a, b) {
                                    $clamp(b, {
                                        clamp: 2
                                    })
                                }),
                                m.length > 0 ? h.showDetails(m[0].detailUrl, f) : f.html(),
                                h.showContent(k, g),
                                b("body").on("click", function () {
                                    h.hideResults()
                                }),
                                i.removeClass("hide"),
                                j.attr("aria-expanded", !0))
                    },
                    error: function (a) {
                        console.log("error: ", a)
                    }
                })
            },
            showDetails: function (d, e) {
                b.ajax({
                    url: a[c].constants.contextPath + d,
                    dataType: "json",
                    success: function (b) {
                        window.innerWidth < a[c].config.mediumMin && b.products.length > 0 && (b.products = b.products.slice(0, 2));
                        var f = Mustache.render(a[c].templates.typeaheadProductTemplate, b);
                        e.attr("data-detail-url", d),
                            e.html(f)
                    },
                    error: function (a) {
                        console.log("error: ", a)
                    }
                })
            },
            showContent: function (d, e) {
                b.ajax({
                    url: a[c].constants.contextPath + "/public/v1/typeahead/content/" + d + ".js",
                    dataType: "json",
                    success: function (b) {
                        window.innerWidth < a[c].config.mediumMin ? b.content.length > 0 && (b.content = b.content.slice(0, 2)) : b.content.length > 0 && (b.content = b.content.slice(0, 5));
                        var d = Mustache.render(a[c].templates.typeaheadContentTemplate, b);
                        e.html(d)
                    },
                    error: function (a) {
                        console.log("error: ", a)
                    }
                })
            }
        },
            b.fn.typeahead = function (a) {
                var c = this
                    , e = b.extend({}, b.fn.typeahead.defaults, "object" == typeof a && a);
                return c.each(function () {
                    var c = b.data(this, "typeahead");
                    c ? "object" == typeof a && b.extend(c.options, a) : b.data(this, "typeahead", c = new d(this, e))
                })
            }
            ,
            b.fn.typeahead.defaults = {
                trigger_num_chars: 3
            },
            b.fn.typeahead.Constructor = d,
            b(function () {
                b("[data-typeahead]").typeahead()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(a, b) {
            var c = new RegExp(b, "");
            return c.test(a)
        }
        function e(a) {
            var b = /^\s+|\s+$/g;
            return a = a.replace(b, "")
        }
        var f = a[c].constants.messages
            , g = a[c] && a[c].config && a[c].config.loggingDebug
            , h = function (a, b) {
                this.init("validate", a, b)
            }
            , i = {
                address: {
                    check: function (a, b) {
                        return a ? (a = e(a),
                            b.val(a),
                            d(a, "^[0-9a-zA-Z.,/ ]+$")) : !0
                    },
                    msg: function (a) {
                        var b = a.attr("data-fieldname");
                        return void 0 !== b && "" !== b ? f.address.named + " " + b.toLowerCase() : f.address.unnamed
                    }
                },
                city: {
                    check: function (a, b) {
                        return a ? (a = e(a),
                            b.val(a),
                            d(a, "^[a-zA-Z. ]+$")) : !0
                    },
                    msg: function (a) {
                        return f.city
                    }
                },
                email: {
                    check: function (a, b) {
                        return a ? d(a, "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$") : !0
                    },
                    msg: function () {
                        return f.email
                    }
                },
                emailMatch: {
                    check: function (a, c) {
                        var d = c.attr("data-matchfield")
                            , e = "";
                        return d && (e = this.$element.find(d).val()),
                            b.trim(a).toLowerCase() == b.trim(e).toLowerCase() ? !0 : !1
                    },
                    msg: function () {
                        return f.emailMatch
                    }
                },
                name: {
                    check: function (a, b) {
                        return a ? (a = e(a.replace(/\u2019/g, "'")),
                            b.val(a),
                            d(a, "^[a-zA-Z.' -]+$")) : !0
                    },
                    msg: function (a) {
                        return f.name
                    }
                },
                firstname: {
                    check: function (a, b) {
                        return a ? (a = e(a.replace(/\u2019/g, "'")),
                            b.val(a),
                            d(a, "^[a-zA-Z.' -]+$")) : !0
                    },
                    msg: function (a) {
                        return f.firstname
                    }
                },
                lastname: {
                    check: function (a, b) {
                        return a ? (a = e(a.replace(/\u2019/g, "'")),
                            b.val(a),
                            d(a, "^[a-zA-Z.' -]+$")) : !0
                    },
                    msg: function (a) {
                        return f.lastname
                    }
                },
                password: {
                    check: function (a, b) {
                        return a ? d(a, "^.{6,}$") : !0
                    },
                    msg: function () {
                        return f.password
                    }
                },
                passwordMatch: {
                    check: function (a, c) {
                        var d = c.attr("data-matchfield")
                            , e = "";
                        return d && (e = this.$element.find(d).val()),
                            b.trim(a) == b.trim(e) ? !0 : !1
                    },
                    msg: function () {
                        return f.passwordMatch
                    }
                },
                phone: {
                    check: function (a, b) {
                        if (!a)
                            return !0;
                        var c = d(a, "^\\([1-9][0-9]{2}\\) [0-9]{3}-[0-9]{4}$")
                            , e = d(a, "^\\d{10}$")
                            , f = d(a, "^$");
                        return c || e || f ? !0 : !1
                    },
                    msg: function () {
                        return f.phone
                    }
                },
                postal: {
                    check: function (a, b) {
                        if (a) {
                            var c = d(a, "^[abceghjklmnprstvxyABCEGHJKLMNPRSTVXY][0-9][abceghjklmnprstvxyABCEGHJKLMNPRSTVWXYZ] [0-9][abceghjklmnprstvxyABCEGHJKLMNPRSTVWXYZ][0-9]$")
                                , e = d(a, "^\\d{5}(-\\d{4})?$");
                            return c || e ? !0 : !1
                        }
                        return !0
                    },
                    msg: function () {
                        return f.postal
                    }
                },
                required: {
                    check: function (a, c) {
                        return "checkbox" === c.attr("type") ? c[0].checked ? !0 : !1 : "" !== b.trim(a) ? !0 : !1
                    },
                    msg: function (a) {
                        var b = a.attr("data-fieldname");
                        return void 0 !== b && "" !== b ? f.required.named + " " + b.toLowerCase() : f.required.unnamed
                    }
                },
                requiredOption: {
                    check: function (a, b) {
                        if ("radio" === b.attr("type")) {
                            var c = b.attr("name")
                                , d = !1;
                            return this.$element.find("[name=" + c + "]").each(function () {
                                return this.checked ? (d = !0,
                                    !1) : void 0
                            }),
                                d
                        }
                    },
                    msg: function (a) {
                        var b = a.attr("data-fieldname");
                        return void 0 !== b && "" !== b ? f.required.namedOption + " " + b.toLowerCase() : f.required.unnamed
                    }
                }
            };
        h.prototype = {
            constructor: h,
            init: function (a, c, d) {
                g && (console.debug("init " + a + " with options:"),
                    console.debug(Array.prototype.slice.call(arguments)));
                var e = this;
                this.$element = b(c),
                    this.options = b.extend({}, b.fn[a].defaults, d, this.$element.data()),
                    this.isValid = !1,
                    this.fields = this.$element.find("[data-validation]"),
                    this.submit = this.$element.find('input[type="submit"]'),
                    this.submit && 0 !== this.submit.length || (this.submit = this.$element.find(".primary.button")),
                    this.options.live_validate ? this.$element.on("input.validate.data-api propertychange.validate.data-api change.validate.data-api focusout.validate.data-api", function (a) {
                        e.validateField(b(a.target))
                    }) : this.options.blur_validate && this.$element.on("propertychange.validate.data-api change.validate.data-api focusout.validate.data-api", function (a) {
                        var c = b(a.target);
                        "password" !== c[0].type ? e.validateField(c.val(c.val().trim())) : e.validateField(c)
                    }),
                    this.options.submit_validate && this.$element.on("submit.validate.data-api", function (a) {
                        return e.validateForm(),
                            e.isValid
                    })
            },
            validateForm: function (a, c) {
                this.$element.trigger("validate");
                var d, e, f = a || this.fields, g = 0, h = f.length, i = {}, j = {};
                for ("undefined" == typeof c && (c = !0),
                    this.isValid = !0,
                    h; h > g; g++)
                    d = b(f[g]),
                        j = this.checkField(d),
                        b.isEmptyObject(j) === !1 && (e = d.attr("name"),
                            i[e] = j);
                return c && this.showFormErrors(i),
                    this.isValid
            },
            validateField: function (a) {
                var c, d, e = this.checkField(a), f = {}, g = {};
                if (b.isEmptyObject(e) === !1) {
                    c = a.attr("name"),
                        f[c] = e,
                        g = this.cleanFieldErrors(f);
                    for (d in g)
                        g.hasOwnProperty(d) && this.showFieldError(g[d])
                } else
                    e && this.showFieldSuccess(a)
            },
            checkField: function (a) {
                var b, c, d, e = {}, f = [];
                if ("undefined" != typeof a.attr("data-validation") && !a.prop("disabled") && !a.hasClass("disabled") && a.is(":visible")) {
                    b = a.val(),
                        c = a.attr("data-validation").split(" ");
                    for (var g = 0, h = c.length; h > g; g++)
                        if (d = i[c[g]],
                            d && !d.check.call(this, b, a)) {
                            f.push(d.msg.call(this, a));
                            break
                        }
                    return f.length > 0 && (this.isValid = !1,
                        e.field = a,
                        e.errors = f),
                        e
                }
            },
            showFieldError: function (d) {
                var e, f = "", g = d.errors, h = d.fields, i = h[h.length - 1], j = (i[0],
                    i.attr("id"));
                e = this.getFieldTarget(h);
                for (var k = 0, l = g.length; l > k; k++)
                    f += g[k];
                for (var m = 0, n = h.length; n > m; m++)
                    this.clearFieldMessage(h[m]),
                        h[m].addClass("error"),
                        h[m].attr("aria-describedby", "error-msg-" + j),
                        h[m].attr("aria-invalid", "true");
                var o = a[c].utilities.decodeHTMLEntities(f);
                e.after(Mustache.render(this.options.template, {
                    fieldId: j,
                    errorMessage: o
                })),
                    b("label[for=" + j + "]").addClass("error")
            },
            getFieldTarget: function (a) {
                var b, c;
                return c = a instanceof jQuery ? a : a[a.length - 1],
                    b = c.attr("data-parent"),
                    void 0 !== b ? this.$element.find(b) : c.is(".inline-form *") ? c.nextAll(".button") : c
            },
            showFieldSuccess: function (a) {
                a[0];
                this.clearFieldMessage(a)
            },
            clearFieldMessage: function (a) {
                a.removeClass("error success").removeAttr("aria-describedby").removeAttr("aria-invalid"),
                    this.$element.find("label[for=" + a.attr("id") + "]").removeClass("error"),
                    this.$element.find(".validation-message-for-" + a.attr("id")).remove()
            },
            clearFormMessages: function () {
                var a, c = 0, d = this.fields.length;
                for (d; d > c; c++)
                    a = b(this.fields[c]),
                        this.clearFieldMessage(a)
            },
            clearFormErrors: function () {
                var d = this;
                this.$element.find("[data-validation].error").each(function () {
                    var a = b(this);
                    d.clearFieldMessage(a)
                }),
                    a[c].errors = []
            },
            showFormErrors: function (a) {
                var b, c = {}, d = !1;
                this.clearFormErrors(),
                    c = this.cleanFieldErrors(a);
                for (b in c)
                    c.hasOwnProperty(b) && (d = !0,
                        this.showFieldError(c[b]));
                d && this.scrollToError()
            },
            cleanFieldErrors: function (d) {
                var e, f, g, h, i = {};
                for (e in d)
                    d.hasOwnProperty(e) && (g = e,
                        b.isArray(d[e]) ? (f = this.$element.find("[name='" + e + "']"),
                            h = d[e]) : (f = d[e].field,
                                h = d[e].errors),
                        void 0 === i[g] && (i[g] = {},
                            i[g].fields = [],
                            i[g].errors = []),
                        i[g].fields.push(f),
                        i[g].errors = a[c].utilities.dedup(i[g].errors.concat(h)));
                return i
            },
            scrollToError: function (d) {
                var e, f = 0, g = 0, h = d || ".error", i = 0, j = b("body");
                j.hasClass("checkout") || (i = window.innerWidth > a[c].config.smallMax ? b(".desktop-header .header-masthead").height() + b(".primary-nav").height() : b(".masthead-mobile-content").height()),
                    "number" == typeof window.innerHeight ? f = window.innerHeight : document.documentElement && document.documentElement.clientHeight && (f = document.documentElement.clientHeight),
                    "number" == typeof window.pageYOffset ? g = window.pageYOffset : document.body && document.body.scrollTop && (g = document.body.scrollTop),
                    e = b(this.$element.find(h).get(0)).offset() || b(b(h).get(0)).offset() || j.offset(),
                    g += i,
                    f -= i,
                    e.top -= i + 20;
                var k = this.$element.find("input.error, select.error, textarea.error, .alert-box, .form-messages").eq(0)
                    , l = k.attr("data-parent");
                l || k.focus(),
                    e && e.top && (g > e.top || e.top > 2 * f / 3 + g) && window.scrollTo(0, e.top)
            }
        },
            b.fn.validate = function (a) {
                var c = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var d = b(this)
                        , e = d.data("validate")
                        , f = "object" == typeof a && a;
                    e || d.data("validate", e = new h(this, f)),
                        "string" == typeof a && e[a].apply(e, c)
                })
            }
            ,
            b.fn.validate.defaults = {
                template: '<div class="error field-error-text validation-message-for-{{fieldId}}" id="error-msg-{{fieldId}}" tabindex="-1"><span class="icon icon-error" aria-hidden="true"></span>{{errorMessage}}</div>',
                live_validate: !1,
                blur_validate: !0,
                submit_validate: !0
            },
            b.fn.validate.Constructor = h,
            b(function () {
                b("[data-validate]").validate()
            }),
            a[c] || (a[c] = {}),
            a[c].validationRules = i
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(a) {
            o.removeClass("in"),
                a.find(".utility-nav-dropdown-expanded").hide(),
                a.find(".utility-nav-header").removeClass("utility-nav-dropdown-hover").attr("aria-expanded", "false")
        }
        function e(d, e, f) {
            var g = d.find(e)
                , h = window.innerWidth;
            if (g.each(function (a) {
                b(this).removeAttr("style")
            }),
                h > a[c].config.smallMax) {
                for (var i = [], j = 0; j < g.length / f; j++)
                    i[j] = 0;
                g.each(function (a) {
                    var c = b(this).outerHeight()
                        , d = Math.floor(a / f);
                    c > i[d] && (i[d] = c)
                }),
                    g.each(function (a) {
                        b(this).outerHeight(i[Math.floor(a / f)])
                    })
            }
        }
        function f(d, e) {
            var f = d.find(e)
                , g = window.innerWidth
                , h = 0;
            f.removeAttr("style"),
                g > a[c].config.smallMax && (f.each(function (a) {
                    var c = b(this).outerHeight();
                    c > h && (h = c)
                }),
                    f.outerHeight(h))
        }
        function g(b, d, e, g) {
            if (b && b.length > 0) {
                var h = b.attr("data-rows");
                b.hasClass("slick-initialized") && b.slick("unslick"),
                    b.on("init", function () {
                        initSlickClamp(b),
                            h > 1 && f(b, ".slick-slide > div")
                    }).on("breakpoint", function () {
                        initSlickClamp(b),
                            h > 1 && setTimeout(function () {
                                f(b, ".slick-slide > div")
                            }, 1e3)
                    }).slick({
                        mobileFirst: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        slidesPerRow: 1,
                        dots: !0,
                        infinite: !1,
                        autoplay: !1,
                        autoplaySpeed: 5e3,
                        initialSlide: 0,
                        responsive: [{
                            breakpoint: a[c].config.xSmallMax,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: a[c].config.smallMax,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                rows: h
                            }
                        }, {
                            breakpoint: a[c].config.mediumMax,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                                rows: h
                            }
                        }]
                    })
            }
            if (d && d.length > 0) {
                var h = d.attr("data-rows");
                d.hasClass("slick-initialized") && d.slick("unslick"),
                    d.on("init", function () {
                        initSlickClamp(d),
                            h > 1 && f(d, ".slick-slide > div")
                    }).on("breakpoint", function () {
                        initSlickClamp(d),
                            h > 1 && setTimeout(function () {
                                f(d, ".slick-slide > div")
                            }, 1e3)
                    }).slick({
                        mobileFirst: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        slidesPerRow: 1,
                        dots: !0,
                        infinite: !1,
                        autoplay: !1,
                        autoplaySpeed: 5e3,
                        initialSlide: 0,
                        responsive: [{
                            breakpoint: a[c].config.xSmallMax,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: a[c].config.mediumMax,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                rows: h
                            }
                        }]
                    })
            }
            if (e && e.length > 0) {
                var h = e.attr("data-rows");
                e.hasClass("slick-initialized") && e.slick("unslick"),
                    e.on("init", function () {
                        initSlickClamp(e),
                            h > 1 && f(e, ".slick-slide > div")
                    }).on("breakpoint", function () {
                        initSlickClamp(e),
                            h > 1 && setTimeout(function () {
                                f(e, ".slick-slide > div")
                            }, 1e3)
                    }).slick({
                        mobileFirst: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        slidesPerRow: 1,
                        dots: !0,
                        infinite: !1,
                        autoplay: !1,
                        autoplaySpeed: 5e3,
                        initialSlide: 0,
                        responsive: [{
                            breakpoint: a[c].config.xSmallMax,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: a[c].config.smallMax,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                rows: h
                            }
                        }, {
                            breakpoint: a[c].config.mediumMax,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                rows: h
                            }
                        }]
                    })
            }
            if (g && g.length > 0) {
                var h = g.attr("data-rows");
                g.hasClass("slick-initialized") && g.slick("unslick"),
                    g.on("init", function () {
                        initSlickClamp(g),
                            h > 1 && f(g, ".slick-slide > div")
                    }).on("breakpoint", function () {
                        initSlickClamp(g),
                            h > 1 && setTimeout(function () {
                                f(g, ".slick-slide > div")
                            }, 1e3)
                    }).slick({
                        mobileFirst: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        slidesPerRow: 1,
                        dots: !0,
                        infinite: !1,
                        autoplay: !1,
                        autoplaySpeed: 5e3,
                        initialSlide: 0,
                        responsive: [{
                            breakpoint: a[c].config.xSmallMax,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: a[c].config.smallMax,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                rows: h
                            }
                        }]
                    })
            }
        }
        function h() {
            var d = b(".current-item .product-tile")
                , e = window.innerWidth;
            d.removeAttr("style"),
                e > a[c].config.smallMax && d.css("width", b(".oai-slider .slick-slide").width())
        }
        function i() {
            r.on("click", ".cta-sku-link", function (d) {
                if (b(this).hasClass("disabled")) {
                    var e = b("#product-size-group")
                        , f = b(".masthead-mobile-content").height();
                    e.find(".alert-box").remove(),
                        e.prepend(Mustache.render(l.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}'))),
                        window.innerWidth > a[c].config.smallMax && (f = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                        window.scrollTo(0, e.offset().top - f - 50)
                } else {
                    var g = b(this).attr("data-sku")
                        , h = {
                            dataType: "json",
                            beforeSubmit: function (b, d, e) {
                                a[c].loader.showLoader()
                            },
                            success: function (d, e, f, h) {
                                if ("success" == e)
                                    if ("true" == d.success) {
                                        if (b(".mobile").val("Item Added to Bag"),
                                            setTimeout(function () {
                                                b(".mobile").val("Add to Bag")
                                            }, 3e3),
                                            b.ajax({
                                                url: k.contextPath + "/sitewide/includes/repriceMiniCartContent.jsp",
                                                dataType: "html",
                                                cache: !1,
                                                success: function (d) {
                                                    b(".mini-cart .utility-nav-dropdown-expanded").html(d),
                                                        b("#mobile-mini-cart").html(d),
                                                        a[c].profileController.getProfileStatus(!0)
                                                }
                                            }),
                                            window.innerWidth > a[c].config.smallMax ? (b(".mini-cart").trigger("mouseover"),
                                                setTimeout(function () {
                                                    b(".mini-cart").trigger("mouseout")
                                                }, 4500)) : b("#mobile-bag-icon").click(),
                                            k.isTealiumEnabled) {
                                            var i = g
                                                , j = 1;
                                            b.ajax({
                                                url: k.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                                data: {
                                                    source: "product",
                                                    productId: i,
                                                    skuId: g,
                                                    quantity: j
                                                },
                                                cache: !1,
                                                dataType: "json",
                                                success: function (a) {
                                                    utag.link(a)
                                                },
                                                error: function (a) {
                                                    console.log("error: ", a)
                                                }
                                            })
                                        }
                                        a[c].loader.hideLoader(),
                                            location.reload()
                                    } else
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.showErrors(h, d);
                                else
                                    a[c].loader.hideLoader(),
                                        a[c].utilities.form.ajaxError(f, e, "add to cart error:  Missing statusText parameter", h)
                            },
                            error: function (b, d, e, f) {
                                a[c].loader.hideLoader(),
                                    a[c].utilities.form.ajaxError(b, d, "add to cart error: " + e, f)
                            }
                        };
                    b("#add-item-form-" + g).ajaxSubmit(h)
                }
            })
        }
        function j() {
            r.on("click.toggle-element", "[data-toggle-element]", function (d) {
                var e = b(this)
                    , f = window.innerWidth
                    , g = e.attr("data-toggle-element")
                    , h = e.attr("data-active-text")
                    , i = e.attr("data-default-text") ? e.attr("data-default-text") : e.text();
                f <= a[c].config.mediumMax && b(g).slideToggle(150),
                    e.toggleClass("tertiary primary"),
                    h && (e.attr("data-default-text", i).toggleClass("active"),
                        e.text() == h ? e.text(i) : e.text(h)),
                    f > a[c].config.mediumMax && b(g).css("display", "")
            }),
                q.resize(b.throttle(250, function () {
                    var d = window.innerWidth;
                    d > a[c].config.mediumMax && b("[data-toggle-element].show-on-tablet-mobile.active").click()
                }))
        }
        var k = a[c].constants
            , l = a[c].templates
            , m = a[c].utilities
            , n = a[c] && a[c].config && a[c].config.loggingDebug
            , o = b(".header-backdrop")
            , p = b(".mobile-header .header-backdrop")
            , q = b(window)
            , r = b("body")
            , s = {
                dataType: "json",
                beforeSubmit: function (b, d, e) {
                    a[c].loader.showLoader(),
                        m.form.hideErrors(d)
                },
                success: function (d, e, f, g) {
                    if ("success" == e)
                        if ("true" == d.success) {
                            b(".modal").remove(),
                                k.isTealiumEnabled && utag.link({
                                    customer_email: g.find(".signup-email-address").val(),
                                    tealium_event: "email_signup"
                                });
                            var h = document.getElementById("email-confirm-modal") ? b("#email-confirm-modal") : m.createModal("email-confirm-modal")
                                , i = k.contextPath + "/sitewide/ajax/emailConfirmModal.jsp"
                                , j = {
                                    url: i
                                };
                            h.modal(j),
                                a[c].loader.hideLoader(),
                                g[0].reset(),
                                g.eq(0).blur()
                        } else
                            a[c].loader.hideLoader(),
                                m.form.showErrors(g, d);
                    else
                        console.log("Malformed JSON : missing statusText parameter:"),
                            a[c].loader.hideLoader(),
                            m.form.ajaxError(f, e, d, g)
                },
                error: function (b, d, e, f) {
                    console.log("AJAX Error:"),
                        a[c].loader.hideLoader(),
                        m.form.ajaxError(b, d, e, f)
                }
            }
            , t = {
                init: function (a, b, c) {
                    var d = document.body
                        , e = void 0 === a ? d.getAttribute("data-controller") : a
                        , f = void 0 === b ? d.getAttribute("data-action") : b
                        , g = void 0 === c ? {} : c;
                    m.startSessionTimeout(),
                        "modal" !== e && "proxy" !== e && this.fire("common", "init", g),
                        this.fire(e, "init", g),
                        this.fire(e, f, g)
                },
                fire: function (a, b, c) {
                    var b = void 0 === b ? "init" : b;
                    "" !== a && this[a] && "function" == typeof this[a][b] && (n && console.log("calling:" + a + "." + b),
                        this[a][b](c))
                },
                common: {
                    init: function () {
                        function f(b) {
                            var d = b || 0;
                            C.on("init", function () {
                                initSlickClamp(C)
                            }).on("breakpoint", function () {
                                initSlickClamp(C)
                            }).slick({
                                mobileFirst: !0,
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                infinite: !1,
                                autoplay: !1,
                                autoplaySpeed: 5e3,
                                initialSlide: d,
                                responsive: [{
                                    breakpoint: a[c].config.smallMax,
                                    settings: {
                                        slidesToShow: D || 3,
                                        slidesToScroll: D || 3
                                    }
                                }, {
                                    breakpoint: a[c].config.mediumMax,
                                    settings: {
                                        slidesToShow: D || 4,
                                        slidesToScroll: D || 4
                                    }
                                }]
                            })
                        }
                        function n() {
                            b.ajax({
                                url: k.airingNowOutputDir + "/showAiringNow-1-est.json",
                                cache: !1,
                                dataType: "json",
                                success: function (a) {
                                    var b = Mustache.render(l.otaSlideItem, a.onAirProduct);
                                    B.find(".product-grid").html(b),
                                        B.find(".product-slider").html(Mustache.render(l.otaRecentItems, a)),
                                        f(),
                                        h()
                                },
                                error: function (a) {
                                    console.log("error: ", a)
                                }
                            })
                        }
                        function t() {
                            b.ajax({
                                url: k.airingNowOutputDir + "/showAiringNow-1-est.json",
                                cache: !1,
                                dataType: "json",
                                success: function (a) {
                                    var b = Mustache.render(l.otaSlideItem, a.onAirProduct);
                                    B.find(".product-grid").html(b);
                                    var c = C.slick("slickCurrentSlide");
                                    C.slick("slickGetOption", "slidesToScroll");
                                    C.slick("unslick"),
                                        B.find(".product-slider").html(Mustache.render(l.otaRecentItems, a)),
                                        f(c),
                                        h()
                                },
                                error: function (a) {
                                    console.log("error: ", a)
                                }
                            })
                        }
                        a[c].profileController.getProfileStatus(),
                            window.certonaRecommendations = window.certonaRecommendations || JTV.certona.recommendations,
                            JTV.certona.hide();
                        var u = b(".sc-width-50,.sc-width-66").find(".horizontal-record-spotlight .product-slider")
                            , v = b(".sc-width-25,.sc-width-33").find(".horizontal-record-spotlight .product-slider")
                            , w = b(".sc-width-75 .horizontal-record-spotlight .product-slider")
                            , x = b(".horizontal-record-spotlight .product-slider").not(w).not(u).not(v);
                        g(x, w, u, v),
                            a[c].common.encourageFreeShipping(),
                            j(),
                            r.on("click", ".sign-out", function (d) {
                                function e(d) {
                                    b("#logout-form").ajaxSubmit({
                                        dataType: "json",
                                        beforeSubmit: function (b, d, e) {
                                            a[c].loader.showLoader()
                                        },
                                        success: function (b, e, f, g) {
                                            "success" == e ? "true" == b.success ? (k.isTealiumEnabled && "undefined" != typeof d && utag.link(d),
                                                window.location = k.contextPath + "/index.jsp") : (a[c].loader.hideLoader(),
                                                    m.form.showErrors(g, b)) : (console.log("Malformed JSON : missing statusText parameter:"),
                                                        a[c].loader.hideLoader(),
                                                        m.form.ajaxError(f, e, b, g))
                                        },
                                        error: function (b, d, e, f) {
                                            console.log("AJAX Error:"),
                                                a[c].loader.hideLoader(),
                                                m.form.ajaxError(b, d, e, f)
                                        }
                                    })
                                }
                                d.preventDefault(),
                                    b.ajax({
                                        url: k.contextPath + "/sitewide/tagging/tealiumUserLogout.jsp",
                                        cache: !1,
                                        dataType: "json",
                                        success: function (a) {
                                            e(a)
                                        },
                                        error: function (a) {
                                            console.log("could not get tealium user logout info: ", a),
                                                e()
                                        }
                                    })
                            }),
                            r.on("click", "#skip-content", function () {
                                var a = 0;
                                a = b(".desktop-header").is(":visible") ? b(".header-masthead").height() + b(".primary-nav").height() : b(".masthead-mobile-content").height() + b(".header-promo-mobile").height(),
                                    b("html,body").animate({
                                        scrollTop: b("#skip-content").offset().top - a
                                    })
                            }),
                            i(),
                            r.on("click", ".print", function () {
                                window.print()
                            }),
                            b(".product-tile .product-name").each(function (a, b) {
                                $clamp(b, {
                                    clamp: 2
                                })
                            }),
                            b(".openAccordion").each(function () {
                                var a = b(this).val();
                                b("#" + a).trigger("click")
                            }),
                            r.on("blur", ".masthead-mobile .off-canvas-toggle", function () {
                                console.log("sw-test leaving hamburger")
                            }),
                            r.on("blur", ".off-canvas-menu ul li:last-child a", function () {
                                console.log("sw-test leaving off canvas menu")
                            });
                        var y = b(".keyword-search");
                        y.on("focusin", function () {
                            b(this).parents(".desktop-header").length > 0 && o.addClass("in"),
                                y.addClass("in")
                        }).on("focusout", function () {
                            b(this).parents(".desktop-header").length > 0 && o.removeClass("in"),
                                y.removeClass("in")
                        }),
                            b("#mobile-search-dropdown").on("opened.accordion", function () {
                                b("#keyword-mobile").trigger("focus")
                            }),
                            b("#mobile-search-dropdown, #mobile-account-dropdown, #mobile-mini-cart").on("opened.accordion", function () {
                                this.id
                            }).on("close.accordion", function () {
                                p.hide()
                            });
                        var z = r.data("controller") + " " + r.data("action");
                        ("browse category" === z || "browse product" === z) && (z = b("h1").text().trim()),
                            b("#search-desktop").on("submit", function (a) {
                                "" === b("#keyword").val() ? a.preventDefault() : (k.isTealiumEnabled && utag.link({
                                    site_section: z,
                                    tealium_event: "search_click"
                                }),
                                    (b("#keyword").val().includes("'") || b("#keyword").val().includes("-")) && (b("#keyword").removeAttr("name"),
                                        b("#keyword").append("<input type='hidden' id='ntt-search' name='Ntt' value/>"),
                                        b("#search-desktop").append("<input type='hidden' id='search-term' name='St' value/>"),
                                        b("#search-term").val(b("#keyword").val()),
                                        b("#ntt-search").val(b("#keyword").val().replace("'", "")),
                                        b("#ntt-search").val(b("#ntt-search").val().replace("-", " "))))
                            }),
                            b("#search-mobile").on("submit", function (a) {
                                "" === b("#keyword-mobile").val() ? a.preventDefault() : (k.isTealiumEnabled && utag.link({
                                    site_section: z,
                                    tealium_event: "search_click"
                                }),
                                    (b("#keyword").val().includes("'") || b("#keyword").val().includes("-")) && (b("#keyword").removeAttr("name"),
                                        b("#keyword").append("<input type='hidden' id='ntt-search' name='Ntt' value/>"),
                                        b("#search-desktop").append("<input type='hidden' id='search-term' name='St' value/>"),
                                        b("#search-term").val(b("#keyword").val()),
                                        b("#ntt-search").val(b("#keyword").val().replace("'", "")),
                                        b("#ntt-search").val(b("#ntt-search").val().replace("-", " "))))
                            }),
                            b("#empty-search").on("submit", function (a) {
                                "" === b("#keyword-empty").val() ? a.preventDefault() : k.isTealiumEnabled && utag.link({
                                    site_section: z,
                                    tealium_event: "search_click"
                                })
                            }),
                            b("#search-empty").on("submit", function (a) {
                                "" === b("#keyword-empty").val() ? a.preventDefault() : k.isTealiumEnabled && utag.link({
                                    site_section: z,
                                    tealium_event: "search_click"
                                })
                            });
                        var A;
                        b(".account-menu, .mini-cart").mouseover(function () {
                            var a = b(this);
                            A = setTimeout(function () {
                                o.addClass("in"),
                                    a.find(".utility-nav-dropdown-expanded").show(),
                                    a.find(".utility-nav-header").addClass("utility-nav-dropdown-hover").attr("aria-expanded", "true")
                            }, 100)
                        }).mouseout(function () {
                            var a = b(this);
                            clearTimeout(A),
                                setTimeout(function () {
                                    var b = a.find(".utility-nav-header:hover").length > 0 || a.find(".utility-nav-dropdown-expanded:hover").length > 0;
                                    b !== !0 && d(a)
                                }, 350)
                        });
                        var A;
                        b(".account-menu, .mini-cart").focusin(function () {
                            var a = b(this);
                            A = setTimeout(function () {
                                o.addClass("in"),
                                    a.find(".utility-nav-dropdown-expanded").show(),
                                    a.find(".utility-nav-header").addClass("utility-nav-dropdown-hover").attr("aria-expanded", "true")
                            }, 100)
                        }).focusout(function () {
                            var a = b(this);
                            clearTimeout(A),
                                setTimeout(function () {
                                    var b = a.find(".utility-nav-header div:focus, .utility-nav-header a:focus").length > 0 || a.find(".utility-nav-dropdown-expanded div:focus, .utility-nav-dropdown-expanded a:focus").length > 0;
                                    b !== !0 && d(a)
                                }, 350)
                        }),
                            r.on("click", ".desktop-header .mini-cart-close", function () {
                                d(b(".mini-cart"))
                            }),
                            r.on("click, touchstart", ".mobile-header .mini-cart-close", function () {
                                b("#mobile-bag-icon").click()
                            }),
                            b(".header-promo-mobile").on("init", function () {
                                var a = -1
                                    , c = b(".header-promo-mobile .global-text-bar-container, .header-promo-mobile .header-promo-content");
                                c.each(function () {
                                    var c = b(this);
                                    c.height() > a && (a = c.height())
                                }).each(function () {
                                    var c = b(this);
                                    c.height() < a && c.css("padding", Math.ceil((a - c.height()) / 2) + "px 0").css("margin", "0 0 -1px")
                                })
                            }).slick({
                                arrows: !1,
                                dots: !1,
                                infinite: !0,
                                autoplay: !0,
                                autoplaySpeed: 5e3
                            }),
                            b(".hero-slider").slick({
                                mobileFirst: !0,
                                dots: !0,
                                arrows: !1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                autoplay: !0,
                                autoplaySpeed: 5e3,
                                responsive: [{
                                    breakpoint: a[c].config.smallMax,
                                    settings: {
                                        dots: !1,
                                        arrows: !0
                                    }
                                }]
                            }),
                            b(".carousel-slider").slick({
                                mobileFirst: !0,
                                dots: !0,
                                arrows: !1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                autoplay: !0,
                                autoplaySpeed: 5e3,
                                responsive: [{
                                    breakpoint: a[c].config.smallMax,
                                    settings: {
                                        dots: !1,
                                        arrows: !0
                                    }
                                }]
                            });
                        var B = b(".on-air-items-container");
                        if (B.length > 0) {
                            var C = b(".oai-slider")
                                , D = b(".on-air-items-container").hasClass("oai-show-live-video") ? 2 : null;
                            n();
                            var E = k.onAirItemRefreshInterval;
                            r.hasClass("home") && (E = k.onAirItemRefreshIntervalHome),
                                setInterval(t, 1e3 * E)
                        }
                        if (b(".promo-grid").each(function () {
                            var a = b(this)
                                , c = a.attr("data-num-in-row");
                            e(b(this), ".promo-grid-text", c)
                        }),
                            void 0 !== typeof window.sessionStorage)
                            if (r.hasClass("cart")) {
                                var F = sessionStorage.getItem("currentUrl") || window.location.origin;
                                b("#continue-shopping").attr("href", F)
                            } else {
                                var G = window.location.href
                                    , H = sessionStorage.getItem("currentUrl")
                                    , I = window.location.origin
                                    , J = new RegExp("^" + k.contextPath + "/checkout/", "i");
                                J.test(window.location.pathname) && (G = I),
                                    null === sessionStorage.getItem("currentUrl") && (H = I),
                                    sessionStorage.setItem("previousUrl", H),
                                    sessionStorage.setItem("currentUrl", G)
                            }
                        q.resize(b.throttle(250, function () {
                            b(".promo-grid").each(function () {
                                var a = b(this)
                                    , c = a.attr("data-num-in-row");
                                e(b(this), ".promo-grid-text", c)
                            }),
                                h(),
                                r.hasClass("shipping") || r.hasClass("billing") || r.hasClass("receipt") || (window.innerHeight < 300 ? r.addClass("un-sticky") : r.removeClass("un-sticky"))
                        })).resize(),
                            r.on("click", ".alert-box .icon-close-x", function () {
                                b(this).parents(".alert-box").slideUp(100, function () {
                                    b(this).remove()
                                })
                            }),
                            r.on("click", ".quick-view-button", function (a) {
                                a.preventDefault();
                                var c = b(this).data("pid")
                                    , d = document.getElementById("quick-view-modal") ? b("#quick-view-modal") : m.createModal("quick-view-modal")
                                    , e = k.contextPath + "/browse/ajax/quickViewModal.jsp?id=" + c
                                    , f = {
                                        url: e
                                    };
                                d.modal(f)
                            }),
                            b("#footer-email-signup-form").ajaxForm(s),
                            b("#page-email-signup-form").ajaxForm(s),
                            k.isTealiumEnabled && (r.on("click", ".bv-write-review", function () {
                                utag.link({
                                    tealium_event: "link_click",
                                    link_action: "Click",
                                    link_category: "Reviews",
                                    link_name: "Write Review"
                                })
                            }),
                                r.on("click", "header a", function () {
                                    var a = b(this).text().trim();
                                    "" === a && (a = b(this).find("img").attr("alt"),
                                        "" === a && (a = b(this).find(".sr-only").text().trim())),
                                        utag.link({
                                            tealium_event: "link_click",
                                            link_action: "Click",
                                            link_category: "Header Navigation",
                                            link_name: a
                                        })
                                }),
                                r.on("click", "footer a", function () {
                                    var a = b(this).text().trim();
                                    "" === a && (a = b(this).find("img").attr("alt"),
                                        "" === a && (a = b(this).find(".sr-only").text().trim())),
                                        utag.link({
                                            tealium_event: "link_click",
                                            link_action: "Click",
                                            link_category: "Footer Navigation",
                                            link_name: a
                                        })
                                })),
                            r.on("keypress", ".disabled", function (a) {
                                a.preventDefault(),
                                    a.stopPropagation()
                            })
                    },
                    encourageFreeShipping: function () {
                        if (k.isMiniCartFreeShippingMsgEnabled && document.querySelectorAll(".total .total-amount").length > 0) {
                            var a = parseFloat(document.querySelector(".total .total-amount").innerText.trim().replace("$", ""));
                            if (a < k.minimumFreeShippingAmount && "" != k.miniCartFreeShippingMsg) {
                                var c = (k.minimumFreeShippingAmount - a).toFixed(2)
                                    , d = k.miniCartFreeShippingMsg.replace("[[price]]", "$" + c);
                                b(".mini-cart-promo").text(d).removeClass("hide")
                            }
                        }
                    }
                },
                home: {
                    init: function () { },
                    email: function () {
                        var d = b("#email-signup-form")
                            , e = b("#email-signup-submit");
                        e.on("click", function () {
                            if (d.validate("validateForm"),
                                d.data("validate").isValid) {
                                a[c].loader.showLoader();
                                var e = b("#email-success-url")
                                    , f = m.addURLParameter(e.val(), "emailSuccess", b("#email").val());
                                e.val(f)
                            }
                        });
                        var f = m.getURLParameter(window.location.href, "email");
                        if (f.length > 0 && e.click(),
                            k.isTealiumEnabled) {
                            var g = m.getURLParameter(window.location.href, "emailSuccess");
                            g.length > 0 && utag.link({
                                customer_email: g,
                                tealium_event: "email_signup"
                            })
                        }
                    },
                    home: function () { }
                },
                modal: {
                    init: function () {
                        function a() {
                            d++ ,
                                d === c.length && b(".modal").modal("reposition")
                        }
                        b("[data-validate]").validate(),
                            b(".tabs").tabs(),
                            b(".accordion").accordion();
                        var c = b(".modal img")
                            , d = 0;
                        c.each(function (b, c) {
                            c.addEventListener("load", a, !1),
                                c.addEventListener("error", a, !1)
                        })
                    },
                    avsModal: function () {
                        var d = JSON.parse(avsJSON)
                            , e = d.suggestedAddresses
                            , f = d.enteredAddress
                            , g = b("#address-1, #qb-address-1, #au-address-1")
                            , h = b("#address-2, #qb-address-2, #au-address-2")
                            , i = b("#city, #qb-city, #au-city")
                            , j = b("#state, #qb-state, #au-state")
                            , k = b("#zip, #qb-zip, #au-zip")
                            , l = b("#skip-avs")
                            , m = b(d.submitId)
                            , n = b("#avs-modal")
                            , o = Mustache.render(a[c].templates.avsEnteredTemplate, d)
                            , p = Mustache.render(a[c].templates.avsSuggestedTemplate, d);
                        "undefined" != typeof pageType && (l = b("#skip-avs-" + pageType),
                            m = b("#submit-" + pageType + "-form")),
                            0 == k.length && ("undefined" != typeof pageType ? (k = b("#zip-" + pageType),
                                "address" == pageType ? k = b("#zip-shipping, #qb-zip-shipping, #au-zip-shipping") : "payment" == pageType && (k = b("#zip-billing"))) : b("#zip-shipping, #qb-zip-shipping, #au-zip-shipping").length > 0 ? k = b("#zip-shipping, #qb-zip-shipping, #au-zip-shipping") : b("#zip-billing").length > 0 && (k = b("#zip-billing"))),
                            b("#entered-address").html(o),
                            b("#suggested-addresses").html(p),
                            r.on("hide.modal", function () {
                                var a = b("#phone") || "";
                                "" !== a && a.mask("(100) 000-0000", {
                                    translation: {
                                        1: {
                                            pattern: /[2-9]/
                                        },
                                        0: {
                                            pattern: /[0-9]/
                                        }
                                    }
                                })
                            }),
                            b("#use-avs-address").on("click", function (a) {
                                a.preventDefault();
                                var c = f;
                                b("#suggested").length > 0 && document.getElementById("suggested").checked && (c = e),
                                    g.val(c.address1),
                                    h.val(c.address2),
                                    i.val(c.city),
                                    j.val(c.state),
                                    k.val(c.postalCode),
                                    l.val(!0),
                                    n.modal("hide"),
                                    m.click()
                            }),
                            b("#suggested").length > 0 ? b("#suggested").click() : b("#entered").click()
                    },
                    facetModal: function () {
                        var a = b("#" + b("#facet-modal-id").val())
                            , c = a.find(".facet-list")
                            , d = a.find(".facet-title").text().trim()
                            , e = c.clone()
                            , f = b(".facet-modal");
                        e.find(".facet").each(function () {
                            var a = b(this).find("input")
                                , c = b(this).find("label")
                                , d = a.attr("id") + "-dummy";
                            a.attr("id", d),
                                c.attr("for", d)
                        }),
                            e.find(".above-threshold").removeClass("above-threshold"),
                            e.find(".facet").removeClass("facet").addClass("dummy-facet").removeAttr("data-cat").removeAttr("data-id").removeAttr("data-nstate"),
                            e.find(".clear-filter").remove(),
                            e.find(".facet-show-more").remove(),
                            e.removeClass("show-more-initialized"),
                            b(".modal-header h2").html(d),
                            b(".modal-body").html(e),
                            f.off("click", ".clear-options").on("click", ".clear-options", function () {
                                var a = b("#" + b(this).data("cat") + " .clear-filter");
                                a.hasClass("enabled") && a.trigger("click"),
                                    f.find('input[type="checkbox"]').each(function () {
                                        this.checked = !1
                                    }),
                                    f.find(".size-tile.active").each(function () {
                                        b(this).removeClass("active")
                                    }),
                                    f.find(".color .active").each(function () {
                                        b(this).removeClass("active")
                                    })
                            }).off("click", ".size-tile").on("click", ".size-tile", function () {
                                b(this).addClass("active")
                            }).off("click", ".color .facet").on("click", ".color .facet", function () {
                                b(this).addClass("active")
                            })
                    },
                    quickViewModal: function () {
                        b("[data-imageviewer]").imageviewer({
                            disable_zoom: !0
                        }),
                            b("[data-tooltip]").each(function () {
                                var a = b(this)
                                    , c = a.attr("data-hover") || b.fn.tooltip.defaults.trigger_on_hover
                                    , d = {
                                        trigger_on_hover: c
                                    };
                                b(this).tooltip(d)
                            }),
                            b("[data-quantify]").quantify(),
                            r.off("click", ".size-tile").off("keypress", ".size-tile").on("click", ".size-tile", function (a) {
                                a.preventDefault();
                                var c = b(this)
                                    , d = c.data("id")
                                    , e = b("#product-id").val()
                                    , f = c.data("is-custom-size") || !1;
                                c.hasClass("active") || (b("#product-size-group .size-tile").removeClass("active"),
                                    c.toggleClass("active"),
                                    b(".selected-size").html(c.data("size")),
                                    b(".custom-size-price").html(c.data("price")),
                                    b("#add-to-cart-submit, #quick-buy-submit").removeClass("disabled"),
                                    c.data("is-custom-size") ? b("#add-to-cart-sku").attr("data-custom-size-id", c.data("id")) : b("#add-to-cart-sku").attr("data-custom-size-id", ""),
                                    b.ajax({
                                        url: k.contextPath + "/sitewide/json/inventory.jsp",
                                        data: {
                                            skuId: d,
                                            productId: e,
                                            customSize: f
                                        },
                                        dataType: "json",
                                        success: function (a) {
                                            var c = a.inventory;
                                            b(".change-quantity").attr("data-max", c).quantify({
                                                max_quantity: c
                                            }),
                                                b("#quantity").trigger("keyup")
                                        },
                                        error: function (a) {
                                            console.log("could not get inventory: ", a)
                                        }
                                    })),
                                    b("#add-to-cart-sku").attr("data-id", d),
                                    b("#product-size-group .alert-box").remove()
                            }).on("keypress", ".size-tile", function (a) {
                                var c = b(this);
                                13 !== a.which || c.hasClass("unavailable") || c.trigger("click")
                            }),
                            r.off("click", "#custom-size-toggle").off("keypress", "#custom-size-toggle").on("click", "#custom-size-toggle", function (a) {
                                b(this).toggleClass("active"),
                                    b("#custom-size-group").slideToggle(150)
                            }).on("keypress", "#custom-size-toggle", function (a) {
                                var c = b(this);
                                13 === a.which && c.trigger("click")
                            }),
                            r.off("click", "#add-to-cart-submit").on("click", "#add-to-cart-submit", function (d) {
                                if (b(this).hasClass("disabled")) {
                                    var e = b("#product-size-group")
                                        , f = b(".masthead-mobile-content").height();
                                    e.find(".alert-box").remove(),
                                        e.prepend(Mustache.render(l.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}'))),
                                        window.innerWidth > a[c].config.smallMax && (f = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                                        window.scrollTo(0, e.offset().top - f - 50)
                                } else {
                                    var g, h, i, j = {
                                        dataType: "json",
                                        beforeSubmit: function (b, d, e) {
                                            a[c].loader.showLoader()
                                        },
                                        success: function (d, e, f, g) {
                                            if ("success" == e)
                                                if ("true" == d.success) {
                                                    if (b.ajax({
                                                        url: k.contextPath + "/sitewide/includes/repriceMiniCartContent.jsp",
                                                        dataType: "html",
                                                        cache: !1,
                                                        success: function (d) {
                                                            b(".mini-cart .utility-nav-dropdown-expanded").html(d),
                                                                b("#mobile-mini-cart").html(d),
                                                                a[c].profileController.getProfileStatus(!0)
                                                        }
                                                    }),
                                                        b("#quick-view-modal").modal("hide"),
                                                        b("html, body").animate({
                                                            scrollTop: 0
                                                        }, 200),
                                                        b(".mini-cart").trigger("mouseover"),
                                                        setTimeout(function () {
                                                            b(".mini-cart").trigger("mouseout")
                                                        }, 4500),
                                                        k.isTealiumEnabled) {
                                                        var h = g.find("#add-item-stretch-pay").val()
                                                            , i = g.find("#add-item-product-id").val()
                                                            , j = g.find("#add-item-sku-id").val()
                                                            , l = g.find("#add-item-quantity").val();
                                                        b.ajax({
                                                            url: k.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                                            data: {
                                                                source: "product_quick_view",
                                                                stretchPay: h,
                                                                productId: i,
                                                                skuId: j,
                                                                quantity: l
                                                            },
                                                            cache: !1,
                                                            dataType: "json",
                                                            success: function (a) {
                                                                utag.link(a)
                                                            },
                                                            error: function (a) {
                                                                console.log("error: ", a)
                                                            }
                                                        })
                                                    }
                                                    a[c].loader.hideLoader()
                                                } else
                                                    a[c].loader.hideLoader(),
                                                        m.form.showErrors(g, d);
                                            else
                                                a[c].loader.hideLoader(),
                                                    m.form.ajaxError(f, e, "add to cart error:  Missing statusText parameter", g)
                                        },
                                        error: function (b, d, e, f) {
                                            a[c].loader.hideLoader(),
                                                m.form.ajaxError(b, d, "add to cart error: " + e, f)
                                        }
                                    }, n = b("#quantity").val().trim(), o = b("#add-to-cart-sku"), p = o.attr("data-id").trim(), q = o.attr("data-custom-size-id").trim();
                                    document.getElementById("stretch-pay") && (g = document.getElementById("stretch-pay").checked),
                                        document.getElementById("jewel-safe") && (h = document.getElementById("jewel-safe").checked),
                                        document.getElementById("appraisal") && (i = document.getElementById("appraisal").checked),
                                        g && b("#add-item-stretch-pay").val(g),
                                        h && b("#add-item-jewel-safe").val(h),
                                        i && b("#add-item-appraisal").val(i),
                                        b("#add-item-sku-id").val(p),
                                        b("#add-item-quantity").val(n),
                                        b("#add-item-custom-size-id").val(q),
                                        b("#add-item-form").ajaxSubmit(j)
                                }
                            }),
                            r.off("click", "#quick-buy-submit").on("click", "#quick-buy-submit", function (d) {
                                if (d.preventDefault(),
                                    b(this).hasClass("disabled")) {
                                    var e = b("#product-size-group")
                                        , f = b(".masthead-mobile-content").height();
                                    e.find(".alert-box").remove(),
                                        e.prepend(Mustache.render(l.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}'))),
                                        window.innerWidth > a[c].config.smallMax && (f = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                                        window.scrollTo(0, e.offset().top - f - 50)
                                } else {
                                    var g, h, i, j = b("#quick-buy-form"), m = b("#add-to-cart-sku"), n = b("#quantity").val().trim(), o = m.attr("data-id").trim(), p = b("#quick-buy-product-id").val().trim(), q = m.attr("data-custom-size-id").trim();
                                    document.getElementById("stretch-pay") && (g = document.getElementById("stretch-pay").checked),
                                        document.getElementById("jewel-safe") && (h = document.getElementById("jewel-safe").checked),
                                        document.getElementById("appraisal") && (i = document.getElementById("appraisal").checked),
                                        g && b("#quick-buy-stretch-pay").val(g),
                                        h && b("#quick-buy-jewel-safe").val(h),
                                        i && b("#quick-buy-appraisal").val(i),
                                        b("#quick-buy-sku-id").val(o),
                                        b("#quick-buy-quantity").val(n),
                                        b("#quick-buy-custom-size-id").val(q),
                                        k.isTealiumEnabled ? b.ajax({
                                            url: k.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                            data: {
                                                source: "product",
                                                isQB: "true",
                                                stretchPay: g,
                                                productId: p,
                                                skuId: o,
                                                quantity: n
                                            },
                                            cache: !1,
                                            dataType: "json",
                                            success: function (a) {
                                                utag.link(a),
                                                    j.submit()
                                            },
                                            error: function (a) {
                                                console.log("error: ", a),
                                                    j.submit()
                                            }
                                        }) : j.submit()
                                }
                            }),
                            k.isTealiumEnabled && b.ajax({
                                url: k.contextPath + "/sitewide/tagging/tealiumQuickView.jsp?id=" + b("#product-id").val(),
                                cache: !1,
                                dataType: "json",
                                success: function (a) {
                                    for (var b = "", c = "", d = 0; d < a.product_sku.length; d++)
                                        d == a.product_sku.length - 1 ? (b = a.product_sku[d].replace("sku:", ""),
                                            c += b.replace(".", "")) : (b = a.product_sku[d].replace("sku:", ""),
                                                c += b.replace(".", "") + ",");
                                    a.product_sku = c,
                                        utag.view(a)
                                },
                                error: function (a) {
                                    console.log("could not get tealium product quick view info: ", a)
                                }
                            })
                    }
                },
                certona: {
                    callbackObj: {},
                    hide: function () {
                        b(".certona-recommendations").hide()
                    },
                    recommendations: function (d) {
                        function e(a) {
                            i.push(a)
                        }
                        function f(a) {
                            var b = "";
                            if (a.hasOwnProperty("items"))
                                for (var c = 0; c < a.items.length; c++)
                                    b += c < a.items.length - 1 ? a.items[c].sku + "," : a.items[c].sku;
                            return b
                        }
                        function g(a) {
                            var c = "." + (a.hasOwnProperty("cssClass") && "" != a.cssClass ? a.cssClass : "certona-wrapper")
                                , d = b(c).closest(".certona-recommendations")
                                , e = d.find(".certona-header")
                                , f = b(c + " .product-slider")
                                , g = a.zone.explanation || ""
                                , h = b.extend({
                                    enableSlideShow: !0,
                                    mobileFirst: !0,
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    infinite: !0,
                                    autoplay: !1,
                                    responsive: []
                                }, a.slickOptions);
                            if (console.log("Certona: Initialize " + c),
                                a.hasOwnProperty("slickOptions") && a.slickOptions.hasOwnProperty("responsive") && (a.slickOptions.responsive.length > 0 && (h.responsive[0].breakpoint = JTV.config.smallMax),
                                    a.slickOptions.responsive.length > 1 && (h.responsive[1].breakpoint = JTV.config.mediumMax)),
                                "" != g) {
                                var i = e.find("h1, h2, h3, h4, h5, h6");
                                i.length ? i.html(g) : e.html(g)
                            }
                            f.hasClass("slick-initialized") && f.slick("unslick"),
                                b.ajax({
                                    url: JTV.constants.contextPath + "/sitewide/ajax/hotSellersHome.jsp",
                                    cache: !1,
                                    data: {
                                        certonaProductsHome: a.skus
                                    },
                                    dataType: "html",
                                    success: function (b) {
                                        "" === b.trim() ? (d.remove(),
                                            console.log("Certona Data error - Hiding " + c),
                                            console.log("Certona Products requested: " + a.skus)) : (d.show(),
                                                e.show(),
                                                f.html(b),
                                                h.enableSlideShow && f.on("init", function () {
                                                    initSlickClamp(f)
                                                }).slick(h))
                                    },
                                    error: function (b) {
                                        console.log("error: ", b),
                                            d.remove(),
                                            console.log("Certona Data Request error - Removing " + c),
                                            console.log("Certona Products requested: " + a.skus)
                                    }
                                })
                        }
                        JTV.certonaStringArray = JTV.certonaStringArray || [],
                            JTV.initialCatLoad = !0;
                        var h = window.jtvCertonaOptions || []
                            , i = [];
                        console.log("Certona: Get Skus");
                        for (var j = 0; j < d.resonance.schemes.length; j++) {
                            var k = d.resonance.schemes[j].scheme;
                            if (h.length > 0) {
                                var l = b.grep(h, function (a) {
                                    return a.scheme === k && a.hasOwnProperty("cssClass") && "" != a.cssClass
                                })[0];
                                if (l) {
                                    l.zone = d.resonance.schemes[j],
                                        l.skus = f(l.zone),
                                        JTV.certonaStringArray.push(l.skus);
                                    var m = r.data("controller") + " " + r.data("action");
                                    "browse category" === m || "browse search" === m ? JTV.initialCatLoad === !0 && (e(l),
                                        r.on("filters-complete", function () {
                                            for (var a = 0; a < i.length; a++)
                                                g(i[a])
                                        }),
                                        g(l),
                                        JTV.initialCatLoad = !1) : g(l)
                                } else
                                    console.log("Certona Setup Error: scheme and cssClass are needed when multiple zones exist on a page."),
                                        a[c].certona.callbackObj[k] = {
                                            resonance: {
                                                schemes: [d.resonance.schemes[j]]
                                            }
                                        }
                            } else
                                console.log("Certona Setup: No certona options have been setup."),
                                    a[c].certona.callbackObj[k] = {
                                        resonance: {
                                            schemes: [d.resonance.schemes[j]]
                                        }
                                    }
                        }
                    }
                },
                popup: {
                    center: function (a, b, c, d) {
                        var e = void 0 != window.screenLeft ? window.screenLeft : window.screenX
                            , f = void 0 != window.screenTop ? window.screenTop : window.screenY
                            , g = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
                            , h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
                            , i = g / 2 - c / 2 + e
                            , j = h / 2 - d / 2 + f
                            , k = window.open(a, b, "scrollbars=yes, width=" + c + ", height=" + d + ", top=" + j + ", left=" + i);
                        window.focus && k.focus()
                    }
                },
                callback: {}
            };
        b.extend(a[c], t),
            b(document).ready(function () {
                a[c].init()
            })
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = a[c] && a[c].config && a[c].config.loggingDebug
            , e = {
                init: function () {
                    this.sendContent()
                },
                handleProxySubmit: function (a, c) {
                    d && (console.log("proxy.handleProxySubmit called with the following parameters"),
                        console.log([a, c]));
                    var e, c = c || a.target.id, f = {
                        form: c
                    };
                    e = form2js(a.target),
                        f = b.extend(f, e),
                        pm({
                            target: window.frames.proxy,
                            type: "postForm",
                            data: f
                        }),
                        a.preventDefault()
                },
                handlePostForm: function (a, c) {
                    d && (console.log("proxy.handlePostForm called with the following parameters"),
                        console.log([a, c]));
                    var e, f, g = document.getElementById(a.form);
                    g && (js2form(g, a),
                        c ? b(c).click() : (e = b(g),
                            f = e.find("input[type=submit]"),
                            f.length > 0 ? f.click() : e.submit()))
                },
                sendContent: function () {
                    d && console.log("proxy.sendContent");
                    var a = {
                        content: document.getElementById("proxyContent").innerHTML
                    };
                    pm({
                        target: window.parent,
                        type: "setModalContent",
                        data: a
                    })
                },
                sendReadyState: function () {
                    d && console.log("proxy.sendReadyState"),
                        pm({
                            target: window.parent,
                            type: "proxyIsReady",
                            data: {
                                state: "ready"
                            }
                        })
                }
            };
        a[c] = a[c] || {},
            a[c].proxy = e
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = (a[c] && a[c].config && a[c].config.loggingDebug,
            {
                init: function () {
                    b('a[href*="#"]:not(".docs-section a")').click(function (a) {
                        a.preventDefault();
                        var c = this.hash
                            , d = b(c);
                        b("html, body").stop().animate({
                            scrollTop: d.offset().top - 20
                        }, 900, "swing", function () {
                            window.location.hash = c
                        })
                    }),
                        b(window).scroll(function () {
                            var a = b(window).scrollTop()
                                , c = "";
                            b(".doc-wrapper	.docs-section").each(function (d) {
                                var e = b(this);
                                return c = "#" + e.attr("id"),
                                    b(this).position().top + e.height() > a ? !1 : void 0
                            }),
                                "" !== c && (b(".side-nav a").removeClass("sidenav-active"),
                                    b(".side-nav a[href$=" + c + "]").addClass("sidenav-active"))
                        }).scroll(),
                        b(".facet").click(function () {
                            b(this).toggleClass("active")
                        }),
                        b("body").on("click", ".page-num", function () {
                            b(".page-num").removeClass("active"),
                                b(this).addClass("active")
                        }),
                        b("body").on("click", ".swatch", function (a) {
                            b(this).hasClass("active") || (b(this).removeClass("active").siblings().removeClass("active"),
                                b(this).toggleClass("active"))
                        }),
                        b(".product-tile-slider").slick({
                            mobileFirst: !0,
                            dots: !1,
                            infinite: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            responsive: [{
                                breakpoint: a[c].config.smallMax,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: a[c].config.mediumMax,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 5
                                }
                            }]
                        }),
                        b(".launch-example-modal").click(function () {
                            var d = document.getElementById("modal-example") ? b("#modal-example") : a[c].utilities.createModal("modal-example");
                            d.modal({
                                url: "exampleModal.jsp"
                            })
                        }),
                        b(".launch-jscontent-modal").click(function () {
                            var d = document.getElementById("modal-example") ? b("#modal-example") : a[c].utilities.createModal("modal-example");
                            d.modal({
                                content: '<div class="modal-header"><div class="title-bar"><h2 class="title">I\'m a Javascript Modal!</h2></div></div><div class="modal-body"><p>This content is added via a Javascript object.</p></div><div class="modal-footer"><a href="" data-dismiss="modal" class="button secondary">Close</a></div>'
                            })
                        }),
                        b(".launch-toggle-modal").click(function () {
                            var d = document.getElementById("modal-example") ? b("#modal-example") : a[c].utilities.createModal("modal-example");
                            d.modal("toggle")
                        }),
                        b(".launch-example-loader").click(function () {
                            a[c].loader.showLoader(),
                                setTimeout(function () {
                                    a[c].loader.hideLoader()
                                }, 3e3)
                        });
                    var d = b("#js-accordion-example").accordion();
                    b(".js-accordion-example-open").click(function () {
                        d.accordion("open", b("#accordion-title-2"))
                    }),
                        b(".js-accordion-example-close").click(function () {
                            d.accordion("close", b("#accordion-title-2"))
                        }),
                        b(".js-accordion-example-open-all").click(function () {
                            d.accordion("openAll")
                        }),
                        b(".js-accordion-example-close-all").click(function () {
                            d.accordion("closeAll")
                        })
                }
            });
        a[c] = a[c] || {},
            a[c].documentation = d
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(d) {
            function e(d) {
                if (d.each(function (a) {
                    b(this).removeAttr("style")
                }),
                    h > a[c].config.smallMax) {
                    for (var e = [], f = 0; f < d.length / 2; f++)
                        e[f] = 0;
                    d.each(function (a) {
                        var c = b(this).outerHeight()
                            , d = Math.floor(a / 2);
                        c > e[d] && (e[d] = c)
                    }),
                        d.each(function (a) {
                            b(this).outerHeight(e[Math.floor(a / 2)])
                        })
                }
            }
            var f = ".account-section"
                , g = b(f)
                , h = window.innerWidth;
            "undefined" != typeof d ? d.length > 1 ? d.each(function (a, c) {
                g = b(c).find(f),
                    e(g)
            }) : (g = d.find(f),
                e(g)) : e(g)
        }
        function e() {
            var a = b("#new-address-form")
                , c = b("#first")
                , d = b("#last")
                , e = b("#address1")
                , f = b("#city")
                , g = b("#country")
                , h = b("#state")
                , i = b("#postal");
            b('[name="address-radios"]').on("click", function () {
                1 == document.getElementById("new-billing-address").checked ? (a.slideDown("150"),
                    c.attr("required", !0),
                    d.attr("required", !0),
                    e.attr("required", !0),
                    f.attr("required", !0),
                    g.attr("required", !0),
                    h.attr("required", !0),
                    i.attr("required", !0)) : (c.attr("required", !1),
                        d.attr("required", !1),
                        e.attr("required", !1),
                        f.attr("required", !1),
                        g.attr("required", !1),
                        h.attr("required", !1),
                        i.attr("required", !1),
                        a.slideUp("150"))
            })
        }
        function f() {
            var a = b("[id^=zip-],[id^=qb-zip-]")
                , c = b("#country")
                , d = "";
            b("#qb-country").length > 0 && (c = b("#qb-country")),
                c.length > 0 && (d = c.val()),
                a.length > 0 && ("US" == d || "United States" == d ? a.each(function () {
                    b(this).mask("00000-0000")
                }) : "CA" == d ? a.each(function () {
                    b(this).mask("S0S 0S0", {
                        translation: {
                            S: {
                                pattern: /[A-Za-z]/
                            }
                        }
                    }),
                        b(this).keyup(function () {
                            b(this).val(b(this).val().toUpperCase())
                        })
                }) : "MX" == d && a.each(function () {
                    b(this).mask("00000")
                }))
        }
        function g() {
            o.on("change", "[name=cc-type-radios]", function (a) {
                a.preventDefault();
                var c = b(this).val()
                    , d = b("#name")
                    , e = b("#card")
                    , f = b("#payment[type=checkbox]").parent().parent()
                    , g = b("#payment-pa[type=checkbox]").parent().parent()
                    , h = d.parent()
                    , i = b(".exp-date-group")
                    , j = b("#cvv");
                e.val(""),
                    "creditCards" == c ? (d.val(""),
                        i.show(),
                        h.show(),
                        f.show(),
                        g.hide(),
                        h.next().removeClass("no-padd"),
                        j.val("").prop("maxlength", 4)) : (i.hide(),
                            h.hide(),
                            f.hide(),
                            g.show(),
                            d.val("JTV"),
                            j.val("").prop("maxlength", 3),
                            h.next().addClass("no-padd"))
            })
        }
        function h(a) {
            a && a.length && "function" == typeof a.mask && a.mask("ZZZZ ZZZZ ZZZZ ZZZZ", {
                translation: {
                    Z: {
                        pattern: /[0-9\*]/
                    }
                }
            })
        }
        function i(d) {
            d.preventDefault();
            var e = b(this)
                , f = e.find('input[name="shareDestinationEmail"]');
            if (a[c].utilities.form.hideErrors(e),
                a[c].utilities.form.validate(e)) {
                var g = e.data("gl")
                    , h = a[c].constants.productionURL + "/account/lovelistListGuest.jsp?giftlistId=" + g
                    , i = encodeURIComponent(f.val())
                    , j = encodeURIComponent("My JTV Love List")
                    , k = encodeURIComponent("View my JTV Love List: " + h);
                window.location.href = "mailto:" + i + "?subject=" + j + "&body=" + k,
                    f.val("")
            }
        }
        function j(a) {
            a.parents(".love-list-dropdown").find(".love-list-toggle").click()
        }
        var k = (a[c] && a[c].config && a[c].config.loggingDebug,
            a[c].constants)
            , l = a[c].templates
            , m = a[c].utilities
            , n = b(window)
            , o = b("body")
            , p = {
                dataType: "json",
                beforeSubmit: function (b, d, e) {
                    a[c].loader.showLoader()
                },
                success: function (d, e, g, h) {
                    if (f(),
                        "success" == e)
                        if ("true" == d.success)
                            if ("true" == d.addressMatched)
                                window.location = d.url;
                            else {
                                b("#avs-json").remove(),
                                    o.append('<div id="avs-json"><script>var avsJSON = \'' + JSON.stringify(d) + '\'; var pageType = "address";</script></div>'),
                                    a[c].loader.hideLoader();
                                var i = document.getElementById("avs-modal") ? b("#avs-modal") : m.createModal("avs-modal", "medium")
                                    , j = k.contextPath + "/checkout/ajax/avsModal.jsp"
                                    , l = {
                                        url: j
                                    };
                                i.modal(l)
                            }
                        else
                            a[c].loader.hideLoader(),
                                m.form.showErrors(h, d);
                    else
                        console.log("Malformed JSON : missing statusText parameter:"),
                            a[c].loader.hideLoader(),
                            m.form.ajaxError(g, e, d, h)
                },
                error: function (b, d, e, g) {
                    f(),
                        console.log("AJAX Error:"),
                        a[c].loader.hideLoader(),
                        m.form.ajaxError(b, d, e, g)
                }
            }
            , q = {
                dataType: "json",
                beforeSerialize: function (a) {
                    a.find("#card").unmask()
                },
                beforeSubmit: function (b, d, e) {
                    a[c].loader.showLoader()
                },
                success: function (d, e, g, i) {
                    if (h(i.find("#card")),
                        f(),
                        "success" == e)
                        if ("true" == d.success)
                            if ("true" == d.addressMatched)
                                window.location = d.url;
                            else {
                                b("#avs-json").remove(),
                                    o.append('<div id="avs-json"><script>var avsJSON = \'' + JSON.stringify(d) + '\'; var pageType = "payment";</script></div>'),
                                    a[c].loader.hideLoader();
                                var j = document.getElementById("avs-modal") ? b("#avs-modal") : m.createModal("avs-modal", "medium")
                                    , l = k.contextPath + "/checkout/ajax/avsModal.jsp"
                                    , n = {
                                        url: l
                                    };
                                j.modal(n)
                            }
                        else
                            a[c].loader.hideLoader(),
                                m.form.showErrors(i, d);
                    else
                        console.log("Malformed JSON : missing statusText parameter:"),
                            a[c].loader.hideLoader(),
                            m.form.ajaxError(g, e, d, i)
                },
                error: function (b, d, e, g) {
                    h(g.find("#card")),
                        f(),
                        console.log("AJAX Error:"),
                        a[c].loader.hideLoader(),
                        m.form.ajaxError(b, d, e, g)
                }
            }
            , r = {
                init: function () {
                    b("#status-phone").mask("(000) 000-0000"),
                        b("#phone").mask("(100) 000-0000", {
                            translation: {
                                1: {
                                    pattern: /[2-9]/
                                },
                                0: {
                                    pattern: /[0-9]/
                                }
                            }
                        }),
                        b("#secondary").mask("(000) 000-0000"),
                        h(b("#card")),
                        f();
                    var a = b("#country");
                    b(".not-" + a.val()).hide().attr("disabled", !0),
                        a.on("change", function () {
                            var c = a.val();
                            b("#state optgroup").show().attr("disabled", !1),
                                b(".not-" + c).hide().attr("disabled", !0),
                                b("#state").val(b("#country-" + c + " option:first-of-type").val()),
                                f()
                        }),
                        b(".accordion-body").on("opened.accordion", function () {
                            b("#phone").mask("(100) 000-0000", {
                                translation: {
                                    1: {
                                        pattern: /[2-9]/
                                    },
                                    0: {
                                        pattern: /[0-9]/
                                    }
                                }
                            }),
                                b("#secondary").mask("(000) 000-0000"),
                                h(b("#card")),
                                f()
                        }),
                        b(".trigger-email-return").on("click", function () {
                            var a = document.getElementById("emailReturnModal") ? b("#emailReturnModal") : m.createModal("emailReturnModal", "medium")
                                , c = k.contextPath + "/account/ajax/emailReturnModal.jsp"
                                , d = {
                                    url: c
                                };
                            a.modal(d)
                        }),
                        b(".trigger-print-return").on("click", function () {
                            var a = document.getElementById("printReturnModal") ? b("#printReturnModal") : m.createModal("printReturnModal", "medium")
                                , c = k.contextPath + "/account/ajax/printReturnModal.jsp"
                                , d = {
                                    url: c
                                };
                            a.modal(d)
                        })
                },
                account: function () {
                    var a = b(".account-content");
                    if (d(a),
                        n.resize(b.throttle(250, function () {
                            d(a)
                        })),
                        k.isTealiumEnabled) {
                        "true" === b("#new-registration").val() && b.ajax({
                            url: k.contextPath + "/sitewide/tagging/tealiumUserRegister.jsp",
                            cache: !1,
                            dataType: "json",
                            success: function (a) {
                                utag.link(a)
                            },
                            error: function (a) {
                                console.log("could not get tealium user register info: ", a)
                            }
                        });
                        var c = m.getURLParameter(window.location.href, "success");
                        c.length > 0 && "true" === c && b.ajax({
                            url: k.contextPath + "/sitewide/tagging/tealiumUserUpdate.jsp",
                            cache: !1,
                            dataType: "json",
                            success: function (a) {
                                utag.link(a)
                            },
                            error: function (a) {
                                console.log("could not get tealium user update info: ", a)
                            }
                        })
                    }
                },
                address: function () {
                    var a = b(".default-addresses")
                        , c = b(".saved-addresses");
                    d(a),
                        d(c),
                        n.resize(b.throttle(250, function () {
                            d(a),
                                d(c)
                        })),
                        f(),
                        b("#address-form").ajaxForm(p),
                        o.on("click", ".set-default-ship-addr", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-addr-id").trim();
                            b("#addr-id").val(d),
                                b("#addr-function").val("SHIP"),
                                b("#account-default-addr-form").submit()
                        }),
                        o.on("click", ".set-default-bill-addr", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-addr-id").trim();
                            b("#addr-id").val(d),
                                b("#addr-function").val("BILL"),
                                b("#account-default-addr-form").submit()
                        })
                },
                auction: function () {
                    d(),
                        n.resize(b.throttle(250, function () {
                            d()
                        }))
                },
                auctionEdit: function () {
                    var e = b(".account.auction .saved-payments");
                    d(e),
                        n.resize(b.throttle(250, function () {
                            d(e)
                        }));
                    var h = b(".account-section .no-address").length > 0
                        , i = b(".account-section .no-card").length > 0
                        , j = b(".form-messages.page-error .alert-box.error > p").length > 0;
                    h && !j ? window.location.hash = "auction-default-address" : i && !j && (window.location.hash = "auction-default-payment"),
                        n.on("load hashchange", function (a) {
                            var c = "" != window.location.hash ? b(window.location.hash) : null;
                            c && c.length && b("html, body").animate({
                                scrollTop: c.offset().top - 150
                            }, 0)
                        }),
                        o.on("click", ".set-auction-ship-addr", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-addr-id").trim();
                            b("#auction-addr-id").val(d),
                                b("#account-auction-addr-form").submit()
                        }),
                        o.on("blur.cvv-input", "[data-validate] .cvv-input", function () {
                            d(e)
                        }),
                        o.on("click", ".set-auction-mop", function (f) {
                            f.preventDefault();
                            var g = b(this)
                                , h = g.parents("[data-validate]")
                                , i = h.find(".cvv-input").eq(0)
                                , j = h.find(".cvv-needed, .pa-cvv-needed")
                                , k = g.attr("data-payment-id").trim();
                            j.removeClass("hide"),
                                a[c].utilities.form.validate(h) ? (b("#auction-payment-id").val(k),
                                    b("#auction-cvv").val(i.val()),
                                    b("#account-auction-default-mop-form").submit()) : d(e)
                        }),
                        b('input[name="address-radios"]').on("change", function () {
                            document.getElementById("new-billing-address").checked ? b("#new-address-form").slideDown(150) : b("#new-address-form").slideUp(150)
                        });
                    var k = b("#country");
                    b(".not-" + k.val()).hide().attr("disabled", !0),
                        k.on("change", function () {
                            var a = k.val();
                            b("#state optgroup").show().attr("disabled", !1),
                                b(".not-" + a).hide().attr("disabled", !0),
                                b("#state").val(b("#country-" + a + " option:first-of-type").val()),
                                f()
                        }),
                        g(),
                        b("#auction-address-form").ajaxForm(p),
                        b("#auction-payment-form").ajaxForm(q)
                },
                login: function () {
                    var a = m.getURLParameter(window.location.href, "returnToReferer");
                    "true" == a && b("#login-success-url").val(sessionStorage.getItem("previousUrl")),
                        k.isTealiumEnabled && b("body").on("click", ".guest-checkout .button", function () {
                            utag.link({
                                tealium_event: "link_click",
                                link_action: "Click",
                                link_category: "Checkout",
                                link_name: "Continue as Guest"
                            })
                        })
                },
                orderStatus: function () { },
                payment: function () {
                    e();
                    var a = b(".saved-payments")
                        , c = b(".saved-addresses");
                    d(a),
                        d(c),
                        n.resize(b.throttle(250, function () {
                            d(a),
                                d(c)
                        })),
                        b(".accordion-body").on("opened.accordion", function () {
                            d(c)
                        }),
                        b("#payment-form").ajaxForm(q),
                        o.on("click", ".set-default-bill", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-payment-id").trim();
                            b("#payment-id").val(d),
                                b("#account-default-mop-form").submit()
                        }),
                        g()
                },
                referafriend: function () {
                    var d = b("#raf-copy-code").val()
                        , e = b(".tab-body.active [name=raf-share-url]").val();
                    d && e && b("#raf-copy-code").val(d.replace("[[share url]]", e)),
                        b("#fb-btn").on("click", function () {
                            e = encodeURIComponent(b(".tab-body.active [name=raf-share-url]").val()),
                                a[c].popup.center("https://www.facebook.com/sharer/sharer.php?u=" + e, "fbPop", 560, 620)
                        }),
                        b("#msgr-btn").on("click", function () {
                            e = encodeURIComponent(b(".tab-body.active [name=raf-share-url]").val()),
                                a[c].popup.center("https://www.facebook.com/dialog/send?app_id=751822581825452&link=" + e + "&redirect_uri=" + e, "msgrPop", 1e3, 790)
                        }),
                        b("#msgr-mobile-btn").on("click", function () {
                            e = encodeURIComponent(b(".tab-body.active [name=raf-share-url]").val()),
                                a[c].popup.center("fb-messenger://share?link=" + e, "msgrPop", 1e3, 790)
                        }),
                        b("#tw-btn").on("click", function () {
                            e = encodeURIComponent(b(".tab-body.active [name=raf-share-url]").val());
                            var d = encodeURIComponent(b(".tab-body.active .content .title").text() + "\n" + b(".tab-body.active .content .desc").text());
                            a[c].popup.center("https://twitter.com/share?text=" + d + "&url=" + e, "twPop", 320, 500)
                        }),
                        b("#pi-btn").on("click", function () {
                            e = encodeURIComponent(b(".tab-body.active [name=raf-share-url]").val());
                            var d = encodeURIComponent(b(".tab-body.active img").attr("src"))
                                , f = encodeURIComponent(b(".tab-body.active .content .title").text() + "\n" + b(".tab-body.active .content .desc").text());
                            a[c].popup.center("https://www.pinterest.com/pin/create/button/?url=" + e + "&media=" + d + "&description=" + f, "twPop", 735, 735)
                        }),
                        b("#raf-copy-code-submit").on("click", function () {
                            var a = b("#raf-sponsor-code").val()
                                , c = b("<input>");
                            b("body").append(c),
                                c.val(a).select(),
                                document.execCommand("copy"),
                                c.remove(),
                                b(this).val("Code Copied").removeClass("primary").addClass("whiteGray")
                        }),
                        b(document).bind("tabPanelChanged", function (a) {
                            var c = b(a.target)
                                , d = c.find(".title").text().trim()
                                , e = c.find(".desc").text().trim();
                            b("#raf-share-emails").html(d + "\n" + e)
                        }),
                        b("#email-share-submit").on("click", function () {
                            var a = b("#raf-share-subject").val()
                                , c = encodeURIComponent(b("#raf-share-emails").text()).replace(/\r?\n/g, "%0D%0A");
                            window.open("mailto:?subject=" + a + "&body=" + c, "emailWindow")
                        })
                },
                register: function () {
                    a[c].profileController.getProfileStatus(!0)
                },
                quickBuy: function () {
                    d(),
                        n.resize(b.throttle(250, function () {
                            d()
                        }))
                },
                quickBuyEdit: function () {
                    o.on("click", ".set-quickbuy-ship-addr", function (a) {
                        a.preventDefault();
                        var c = b(this)
                            , d = c.attr("data-addr-id").trim();
                        b("#quickbuy-addr-id").val(d),
                            b("#account-quickbuy-addr-form").submit()
                    }),
                        o.on("click", ".set-quickbuy-mop", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-payment-id").trim();
                            b("#quickbuy-payment-id").val(d),
                                b("#account-quickbuy-default-mop-form").submit()
                        }),
                        b('input[name="address-radios"]').on("change", function () {
                            document.getElementById("new-billing-address").checked ? b("#new-address-form").slideDown(150) : b("#new-address-form").slideUp(150)
                        });
                    var a = b("#country");
                    b(".not-" + a.val()).hide().attr("disabled", !0),
                        a.on("change", function () {
                            var c = a.val();
                            b("#state optgroup").show().attr("disabled", !1),
                                b(".not-" + c).hide().attr("disabled", !0),
                                b("#state").val(b("#country-" + c + " option:first-of-type").val()),
                                f()
                        }),
                        g(),
                        b("#quickbuy-address-form").ajaxForm(p),
                        b("#quickbuy-payment-form").ajaxForm(q)
                },
                lovelist: function () {
                    function d(d) {
                        a[c].loader.showLoader();
                        var e = d.parents(".love-list-dropdown")
                            , f = e.data("listid")
                            , g = e.data("listname")
                            , h = e.find("input.js-love-list-name").val()
                            , i = e.find(".privacy-button.active").data("ispublic");
                        "" === h && (h = g),
                            b(".js-update-list-id").val(f),
                            b(".js-update-is-published").val(i),
                            b(".js-update-list-name").val(h),
                            b(".js-update-list").submit()
                    }
                    function e(d) {
                        a[c].loader.showLoader();
                        var e = b(".js-delete-list")
                            , f = d.data("listid");
                        e.find(".js-delete-list-id").val(f),
                            e.submit()
                    }
                    o.on("click", ".love-list-close", function (a) {
                        j(b(this))
                    }).on("keypress", ".love-list-close", function (a) {
                        13 === a.which && j(b(this))
                    }),
                        o.on("click", ".dropdown-menu .privacy-button.private", function (a) {
                            d(b(this))
                        }).on("keypress", ".dropdown-menu .privacy-button.private", function (a) {
                            13 === a.which && d(b(this))
                        }).on("click", ".dropdown-menu .privacy-button.public", function (a) {
                            d(b(this))
                        }).on("keypress", ".dropdown-menu .privacy-button.public", function (a) {
                            13 === a.which && d(b(this))
                        }).on("blur", ".dropdown-menu .love-list-name", function (a) {
                            d(b(this))
                        }).on("keypress", ".dropdown-menu .love-list-name", function (a) {
                            13 === a.which && (a.preventDefault(),
                                d(b(this)))
                        }).on("submit", ".love-list-share-form", i),
                        o.on("click", ".delete-delete", function (a) {
                            e(b(this))
                        }).on("keypress", ".delete-delete", function (a) {
                            13 === a.which && e(b(this))
                        }),
                        b(".list-search-button").click(function () {
                            b(".list-search-button").addClass("active"),
                                b(".my-lists-button").removeClass("active"),
                                b("#my-lists").addClass("hide").removeClass("show"),
                                b("#list-search").addClass("show").removeClass("hide"),
                                b(".new-address").removeClass("hide").addClass("show"),
                                b(".list-search-results").addClass("hide").removeClass("show")
                        }),
                        b(".my-lists-button").click(function () {
                            b(".list-search-button").removeClass("active"),
                                b(".my-lists-button").addClass("active"),
                                b("#my-lists").addClass("show").removeClass("hide"),
                                b("#list-search").addClass("hide").removeClass("show")
                        }),
                        b(".privacy-button.private").click(function () {
                            b(".privacy-button.public").removeClass("active"),
                                b(".privacy-button.private").addClass("active")
                        }),
                        b(".privacy-button.public").click(function () {
                            b(".privacy-button.public").addClass("active"),
                                b(".privacy-button.private").removeClass("active")
                        }),
                        b(".create-a-list .privacy-button.private").click(function () {
                            b(".privacy-button.public").removeClass("active"),
                                b(".privacy-button.private").addClass("active"),
                                b(".js-create-list-is-public").val("false")
                        }),
                        b(".create-a-list .privacy-button.public").click(function () {
                            b(".privacy-button.public").addClass("active"),
                                b(".privacy-button.private").removeClass("active"),
                                b(".js-create-list-is-public").val("true")
                        }),
                        b(".love-list-dropdown button").click(function () {
                            b(".love-list-dropdown button").hide(),
                                b(".love-list-dropdown .delete-confirm").show()
                        }),
                        b(".delete-cancel").click(function () {
                            b(".love-list-dropdown button").show(),
                                b(".love-list-dropdown .delete-confirm").hide()
                        }),
                        b(".list-block.new-list").click(function () {
                            b(".list-block.new-list .details").addClass("hide").removeClass("show"),
                                b(".list-block.new-list .create-a-list").addClass("show").removeClass("hide")
                        }),
                        b(".create-a-list div button").click(function () {
                            b(".new-list > .details").addClass("hide").removeClass("show"),
                                b(".new-list > .create-a-list").addClass("show").removeClass("hide")
                        })
                },
                lovelistList: function () {
                    o.on("submit", ".love-list-share-form", i).on("click", ".love-list-close", function (a) {
                        j(b(this))
                    }).on("keypress", ".love-list-close", function (a) {
                        13 === a.which && j(b(this))
                    }).on("click", ".size-tile", function (a) {
                        a.preventDefault();
                        var c = b(this)
                            , d = c.parents(".product-pickers")
                            , e = d.data("product-id")
                            , f = c.data("id").trim();
                        c.hasClass("active") || (d.find(".size-tile").removeClass("active"),
                            c.toggleClass("active"),
                            d.find(".selected-size").html(c.data("size")),
                            d.find(".custom-size-price").html(c.data("price")),
                            d.find(".add-to-cart-submit, .quick-buy-submit").removeClass("disabled"),
                            b("#add-to-cart-sku-" + e).attr("data-sku-id", f),
                            c.data("is-custom-size") ? b("#add-to-cart-sku-" + e).attr("data-custom-size-id", f) : b("#add-to-cart-sku-" + e).attr("data-custom-size-id", ""),
                            d.find(".alert-box").remove())
                    }).on("keypress", ".size-tile", function (a) {
                        var c = b(this);
                        13 !== a.which || c.hasClass("unavailable") || c.trigger("click")
                    }).on("click", ".custom-size-toggle", function (a) {
                        var c = b(this)
                            , d = c.data("target");
                        c.toggleClass("active"),
                            b(d).slideToggle(150)
                    }).on("keypress", ".custom-size-toggle", function (a) {
                        var c = b(this);
                        13 === a.which && c.trigger("click")
                    }).off("click", ".add-to-cart-submit").on("click", ".add-to-cart-submit", function (d) {
                        var e = b(this)
                            , f = e.data("product-id").trim();
                        if (b(this).hasClass("disabled")) {
                            var g = e.parents(".product-pickers").find(".size-group")
                                , h = b(".masthead-mobile-content").height();
                            b(this).hasClass("disabled") || (g.find(".alert-box").remove(),
                                g.prepend(Mustache.render(l.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}')))),
                                window.innerWidth > a[c].config.smallMax && (h = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                                window.scrollTo(0, g.offset().top - h - 50)
                        } else {
                            var i, j, n, o = {
                                dataType: "json",
                                beforeSubmit: function (b, d, e) {
                                    a[c].loader.showLoader()
                                },
                                success: function (d, e, f, g) {
                                    if ("success" == e)
                                        if ("true" == d.success) {
                                            if (b.ajax({
                                                url: k.contextPath + "/sitewide/includes/repriceMiniCartContent.jsp",
                                                dataType: "html",
                                                cache: !1,
                                                success: function (d) {
                                                    b(".mini-cart .utility-nav-dropdown-expanded").html(d),
                                                        b("#mobile-mini-cart").html(d),
                                                        a[c].profileController.getProfileStatus(!0)
                                                }
                                            }),
                                                b(".lovelist-form-control").each(function () {
                                                    b(this)[0] && b(this)[0].reset()
                                                }),
                                                b("#quick-view-modal").modal("hide"),
                                                b("html, body").animate({
                                                    scrollTop: 0
                                                }, 200),
                                                window.innerWidth > a[c].config.smallMax ? (b(".mini-cart").trigger("mouseover"),
                                                    setTimeout(function () {
                                                        b(".mini-cart").trigger("mouseout")
                                                    }, 4500)) : b("#mobile-bag-icon").click(),
                                                k.isTealiumEnabled) {
                                                var h = g.find("#add-item-stretch-pay").val()
                                                    , i = g.find("#add-item-product-id").val()
                                                    , j = g.find("#add-item-sku-id").val()
                                                    , l = g.find("#add-item-quantity").val();
                                                b.ajax({
                                                    url: k.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                                    data: {
                                                        source: "wishlist",
                                                        stretchPay: h,
                                                        productId: i,
                                                        skuId: j,
                                                        quantity: l
                                                    },
                                                    cache: !1,
                                                    dataType: "json",
                                                    success: function (a) {
                                                        utag.link(a)
                                                    },
                                                    error: function (a) {
                                                        console.log("error: ", a)
                                                    }
                                                })
                                            }
                                            a[c].loader.hideLoader()
                                        } else
                                            a[c].loader.hideLoader(),
                                                m.form.showErrors(g, d);
                                    else
                                        a[c].loader.hideLoader(),
                                            m.form.ajaxError(f, e, "add to cart error:  Missing statusText parameter", g)
                                },
                                error: function (b, d, e, f) {
                                    a[c].loader.hideLoader(),
                                        m.form.ajaxError(b, d, "add to cart error: " + e, f)
                                }
                            }, p = b("#quantity-" + f).val().trim(), q = b("#add-to-cart-sku-" + f).attr("data-sku-id").trim(), r = b("#add-to-cart-sku-" + f).attr("data-custom-size-id").trim();
                            document.getElementById("stretch-pay-" + f) && (i = document.getElementById("stretch-pay-" + f).checked),
                                document.getElementById("jewel-safe-" + f) && (j = document.getElementById("jewel-safe-" + f).checked),
                                document.getElementById("appraisal-" + f) && (n = document.getElementById("appraisal-" + f).checked),
                                i && b("#add-item-stretch-pay").val(i),
                                j && b("#add-item-jewel-safe").val(j),
                                n && b("#add-item-appraisal").val(n),
                                b("#add-item-product-id").val(f),
                                b("#add-item-sku-id").val(q),
                                b("#add-item-quantity").val(p),
                                b("#add-item-custom-size-id").val(r),
                                b("#add-item-form").ajaxSubmit(o)
                        }
                    }).off("click", ".quick-buy-submit").on("click", ".quick-buy-submit", function (d) {
                        d.preventDefault();
                        var e = b(this);
                        if (e.hasClass("disabled")) {
                            var f = e.parents(".product-pickers").find(".size-group")
                                , g = b(".masthead-mobile-content").height();
                            b(this).hasClass("disabled") || (f.find(".alert-box").remove(),
                                f.prepend(Mustache.render(l.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}')))),
                                window.innerWidth > a[c].config.smallMax && (g = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                                window.scrollTo(0, f.offset().top - g - 50)
                        } else {
                            var h, i, j, m = b("#quick-buy-form"), n = b(this).data("product-id").trim(), o = b("#quantity-" + n).val().trim(), p = b("#add-to-cart-sku-" + n).attr("data-sku-id").trim(), q = b("#add-to-cart-sku-" + n).attr("data-custom-size-id").trim();
                            document.getElementById("stretch-pay-" + n) && (h = document.getElementById("stretch-pay-" + n).checked),
                                document.getElementById("jewel-safe-" + n) && (i = document.getElementById("jewel-safe-" + n).checked),
                                document.getElementById("appraisal-" + n) && (j = document.getElementById("appraisal-" + n).checked),
                                h && b("#quick-buy-stretch-pay").val(h),
                                i && b("#quick-buy-jewel-safe").val(i),
                                j && b("#quick-buy-appraisal").val(j),
                                b("#quick-buy-product-id").val(n),
                                b("#quick-buy-sku-id").val(p),
                                b("#quick-buy-quantity").val(o),
                                b("#quick-buy-custom-size-id").val(q),
                                k.isTealiumEnabled ? b.ajax({
                                    url: k.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                    data: {
                                        source: "product",
                                        isQB: "true",
                                        stretchPay: h,
                                        productId: n,
                                        skuId: p,
                                        quantity: o
                                    },
                                    cache: !1,
                                    dataType: "json",
                                    success: function (a) {
                                        utag.link(a),
                                            m.submit()
                                    },
                                    error: function (a) {
                                        console.log("error: ", a),
                                            m.submit()
                                    }
                                }) : m.submit()
                        }
                    });
                    var d = ""
                        , e = {
                            dataType: "json",
                            beforeSubmit: function (b, e, f) {
                                a[c].loader.showLoader(),
                                    d = e.find(".remove-item-from-list").attr("data-product-id").trim()
                            },
                            success: function (e, f, g, h) {
                                "success" === f ? "true" === e.success ? k.isTealiumEnabled ? b.ajax({
                                    url: k.contextPath + "/sitewide/tagging/tealiumWishlistRemove.jsp?id=" + d,
                                    cache: !1,
                                    dataType: "json",
                                    success: function (b) {
                                        utag.view(b),
                                            a[c].loader.hideLoader(),
                                            window.location.reload()
                                    },
                                    error: function (b) {
                                        console.log("could not get tealium wishlist remove info: ", b),
                                            a[c].loader.hideLoader(),
                                            window.location.reload()
                                    }
                                }) : (a[c].loader.hideLoader(),
                                    window.location.reload()) : (a[c].loader.hideLoader(),
                                        a[c].utilities.form.showErrors(h, e)) : (console.log("Malformed JSON : missing statusText parameter:"),
                                            a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(g, f, e, h))
                            },
                            error: function (b, d, e, f) {
                                console.log("AJAX Error:"),
                                    a[c].loader.hideLoader(),
                                    a[c].utilities.form.ajaxError(b, d, e, f)
                            }
                        };
                    b(".remove-from-list-form").ajaxForm(e)
                },
                stretchPay: function () {
                    var d = a[c].utilities.stripURLParameters(window.location.href, ["paymentId", "month", "year"])
                        , e = a[c].utilities.getURLParameter(d, "paymentId")
                        , f = a[c].utilities.getURLParameter(d, "month")
                        , g = a[c].utilities.getURLParameter(d, "year");
                    o.on("change.filter-payment", "#sp-filter-payment", function (f) {
                        var g = b(this).val();
                        d = "" == g ? a[c].utilities.stripURLParameters(window.location.href, ["month", "year"]) : "" == e ? a[c].utilities.addURLParameter(d, "paymentId", g) : a[c].utilities.updateURLParameter(d, "paymentId", g),
                            window.location = d
                    }),
                        o.on("change.filter-scheduled", "#sp-filter-scheduled", function (e) {
                            var h = b(this).val();
                            if ("" == h)
                                d = a[c].utilities.stripURLParameters(window.location.href, ["paymentId"]);
                            else {
                                var i = 0 == h ? 0 : h.substr(5, 2)
                                    , j = 0 == h ? 0 : h.substr(0, 4);
                                d = "" == f ? a[c].utilities.addURLParameter(d, "month", i) : a[c].utilities.updateURLParameter(d, "month", i),
                                    d = "" == g ? a[c].utilities.addURLParameter(d, "year", j) : a[c].utilities.updateURLParameter(d, "year", j)
                            }
                            window.location = d
                        })
                },
                stretchPayPayment: function () {
                    var a = b("#stretchPay-selection-type")
                        , c = b(".cvv-needed, .pa-cvv-needed")
                        , d = b("[name=sp-card-radios]:checked").attr("data-card-type")
                        , f = "creditCards";
                    e(),
                        b("#sp-mop-form").ajaxForm(q),
                        b("[name=cc-type-radios]:checked").val("null"),
                        a.val(d),
                        b(".cvv-input").blur(function () {
                            b("#saved-cvv").val(b(this).val())
                        }),
                        o.on("open.accordion", ".payment-form.accordion", function (a) {
                            b("[name=sp-card-radios]").removeAttr("checked data-validation aria-required"),
                                c.addClass("hide"),
                                b("[name=cc-type-radios]:checked").val(f)
                        }),
                        o.on("close.accordion", ".payment-form.accordion", function (a) {
                            b("[name=sp-card-radios]:checked").attr({
                                "data-validation": "required",
                                "aria-required": "true"
                            });
                            var c = b("[name=cc-type-radios]:checked");
                            f = c.val(),
                                c.val("null")
                        }),
                        o.on("click.sp-cards", "[name=sp-card-radios]", function () {
                            var d = b(this)
                                , e = d.parent()
                                , f = d.attr("data-card-type");
                            c.addClass("hide"),
                                e.find(".cvv-needed, .pa-cvv-needed").removeClass("hide"),
                                a.val(f),
                                b(".payment-form.accordion .accordion-title.active").click()
                        }),
                        g()
                },
                stretchpayReview: function () {
                    o.on("submit", "#stretchPay-form2", function (d) {
                        a[c].loader.showLoader(),
                            b(this).find("[type=submit]").addClass("disabled")
                    })
                },
                stretchPayInstallments: function () {
                    var d = b("#sp-installments-form input[type=submit]");
                    b(".payment-method .checkbox.due:not(:first)").addClass("disabled").find("input").attr("disabled", "true"),
                        d.addClass("disabled").attr("disabled", "true"),
                        o.on("submit", "#sp-installments-form", function (b) {
                            a[c].loader.showLoader(),
                                d.addClass("disabled")
                        }),
                        b(".payment-method").on("change", ".checkbox input[type=checkbox]", function () {
                            var a = b(this).parent().parent().nextAll().find(".checkbox");
                            this.checked ? a.eq(0).removeClass("disabled").find("input").removeAttr("disabled") : a.addClass("disabled").find("input").removeAttr("checked").attr("disabled", "true");
                            var c = b(".payment-method .checkbox.due input[type=checkbox]:checked");
                            c.length ? d.removeClass("disabled").removeAttr("disabled") : d.addClass("disabled").attr("disabled", "true")
                        })
                }
            };
        a[c] = a[c] || {},
            a[c].account = r
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d(d) {
            var e = window.innerWidth
                , f = a[c].callback.inlinePromo;
            f.lastSize = d ? "large" : f.lastSize || "large",
                e > a[c].config.mediumMax && "large" != f.lastSize ? (a[c].callback.inlinePromo.lastSize = "large",
                    b(".adjust-inline-promo").each(function () {
                        var a = b(this)
                            , c = a.next();
                        a.detach().insertAfter(c)
                    })) : e <= a[c].config.mediumMax && "medium" != f.lastSize && (a[c].callback.inlinePromo.lastSize = "medium",
                        b(".adjust-inline-promo").each(function () {
                            var a = b(this)
                                , c = a.prev();
                            c.addClass("row-break-md"),
                                a.detach().insertBefore(c)
                        }))
        }
        function e() {
            var a = {};
            window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (b, c, d) {
                a[c] = d
            });
            return a
        }
        var f = (a[c] && a[c].config && a[c].config.loggingDebug,
            a[c].constants)
            , g = a[c].templates
            , h = b(window)
            , i = b("body")
            , j = {
                init: function () {
                    function d(a, c) {
                        a.preventDefault(),
                            c.hide();
                        var d = c.data("target");
                        b("#love-list-create-name-" + d).show(),
                            b("#name-" + d).focus()
                    }
                    function e(a) {
                        a.parents(".love-list-dropdown").find(".love-list-toggle").click()
                    }
                    function g(a) {
                        var b = a.find(".love-list-toggle");
                        a.find(".love-list-checkbox:checked").length > 0 ? b.addClass("active") : b.removeClass("active")
                    }
                    function h(d) {
                        var e = b("#name-" + d)
                            , f = e.val()
                            , g = e.data("sku-id")
                            , h = {
                                dataType: "json",
                                beforeSubmit: function (b, d, e) {
                                    a[c].loader.showLoader()
                                },
                                success: function (b, d, e, f) {
                                    "success" == d ? "true" == b.success ? window.location.reload() : (a[c].loader.hideLoader(),
                                        a[c].utilities.form.showErrors(f, b)) : (a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(e, d, "add to wish list error:  Missing statusText parameter", f))
                                },
                                error: function (b, d, e, f) {
                                    a[c].loader.hideLoader(),
                                        a[c].utilities.form.ajaxError(b, d, "add to wish list error: " + e, f)
                                }
                            };
                        f.length > 0 ? (b("#love-list-create-product-id").val(d),
                            b("#love-list-create-sku-id").val(g),
                            b("#love-list-create-name").val(f),
                            b("#create-love-list-form").ajaxSubmit(h)) : e.focus()
                    }
                    i.on("keypress", ".love-list-dropdown .dropdown-toggle span", function (a) {
                        13 === a.which && b(this).parent().click()
                    }),
                        i.on("click", ".show-love-list-input", function (a) {
                            d(a, b(this))
                        }).on("keypress", ".show-love-list-input", function (a) {
                            13 === a.which && d(a, b(this))
                        }),
                        i.on("click", ".love-list-close", function (a) {
                            e(b(this))
                        }).on("keypress", ".love-list-close", function (a) {
                            13 === a.which && e(b(this))
                        }),
                        i.on("click", ".submit-create-love-list", function () {
                            h(b(this).parents(".new-love-list-name").data("pid"))
                        }).on("keypress", ".submit-create-love-list", function (a) {
                            13 === a.which && h(b(this).parents(".new-love-list-name").data("pid"))
                        }).on("keypress", ".new-love-list-name-input", function (a) {
                            13 === a.which && h(b(this).parents(".new-love-list-name").data("pid"))
                        }),
                        i.on("click", ".love-list-checkbox", function (d) {
                            var e = b(this)
                                , h = e.val()
                                , i = e.data("gl-item-id")
                                , j = e.data("product-id")
                                , k = e.data("sku-id");
                            if (this.checked) {
                                var l = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (d, h, i, k) {
                                        "success" == h ? "true" == d.success ? (g(e.parents(".love-list-dropdown")),
                                            a[c].loader.hideLoader(),
                                            f.isTealiumEnabled && b.ajax({
                                                url: f.contextPath + "/sitewide/tagging/tealiumWishlistAdd.jsp?id=" + j,
                                                cache: !1,
                                                dataType: "json",
                                                success: function (a) {
                                                    utag.view(a)
                                                },
                                                error: function (a) {
                                                    console.log("could not get tealium wishlist add info: ", a)
                                                }
                                            })) : (a[c].loader.hideLoader(),
                                                a[c].utilities.form.showErrors(k, d)) : (a[c].loader.hideLoader(),
                                                    a[c].utilities.form.ajaxError(i, h, "add to wish list error:  Missing statusText parameter", k))
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(b, d, "add to wish list error: " + e, f)
                                    }
                                };
                                b("#love-list-add-product-id").val(j),
                                    b("#love-list-add-sku-id").val(k),
                                    b("#love-list-add-list-id").val(h),
                                    b("#add-to-love-list-form").ajaxSubmit(l)
                            } else {
                                var m = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (d, h, i, k) {
                                        "success" == h ? "true" == d.success ? (g(e.parents(".love-list-dropdown")),
                                            a[c].loader.hideLoader(),
                                            f.isTealiumEnabled && b.ajax({
                                                url: f.contextPath + "/sitewide/tagging/tealiumWishlistRemove.jsp?id=" + j,
                                                cache: !1,
                                                dataType: "json",
                                                success: function (a) {
                                                    utag.view(a)
                                                },
                                                error: function (a) {
                                                    console.log("could not get tealium wishlist remove info: ", a)
                                                }
                                            })) : (a[c].loader.hideLoader(),
                                                a[c].utilities.form.showErrors(k, d)) : (a[c].loader.hideLoader(),
                                                    a[c].utilities.form.ajaxError(i, h, "add to wish list error:  Missing statusText parameter", k))
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(b, d, "add to wish list error: " + e, f)
                                    }
                                };
                                b("#love-list-remove-item-id").val(i),
                                    b("#love-list-remove-sku-id").val(k),
                                    b("#love-list-remove-list-id").val(h),
                                    b("#remove-from-love-list-form").ajaxSubmit(m)
                            }
                        }),
                        b("#chat-with-us").click(function () {
                            b(".LPMcontainer").trigger("click")
                        })
                },
                categoryLanding: function () {
                    function d() {
                        b(".promo-grid").each(function () {
                            var d = b(this)
                                , e = d.find(".promo-tile")
                                , f = d.attr("data-num-in-row")
                                , g = window.innerWidth;
                            if (e.each(function (a) {
                                b(this).removeAttr("style")
                            }),
                                g > a[c].config.smallMax) {
                                for (var h = [], i = 0; i < e.length / f; i++)
                                    h[i] = 0;
                                e.each(function (a) {
                                    var c = b(this).outerHeight()
                                        , d = Math.floor(a / f);
                                    c > h[d] && (h[d] = c)
                                }),
                                    e.each(function (a) {
                                        b(this).outerHeight(h[Math.floor(a / f)])
                                    })
                            }
                        })
                    }
                    var e = b(".two-column-right img")
                        , f = 0;
                    e.each(function () {
                        if (b(this).on("load error", function () {
                            f++ ,
                                f === e.length && d()
                        }),
                            this.complete)
                            f++ ,
                                f === e.length && d();
                        else if (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) {
                            var a = this.src;
                            this.src = a
                        }
                    });
                    new a[c].FilterLandingController
                },
                productFinder: function () {
                    b("a.quiz-link").on("click", function () {
                        b("#page-wrap").hide(),
                            b("#divProductFinderPreview").fadeIn(200)
                    })
                },
                productFinderResults: function () {
                    b(".certona-recommendations .certona-wrapper").addClass("product-finder-grid"),
                        b(".certona-recommendations .certona-wrapper").css("border-top", "none"),
                        b(".certona-recommendations .certona-wrapper").css("border-bottom", "none"),
                        b(".certona-recommendations .certona-wrapper").css("padding-top", "0"),
                        b(".section-row").css("padding", "0"),
                        b(".certona-header").remove(),
                        jtvCertonaOptions[0].cssClass = "product-finder-grid",
                        jtvCertonaOptions[0].slickOptions.enableSlideShow = !1
                },
                category: function () {
                    a[c].callback.inlinePromo = {
                        lastSize: "large",
                        update: d
                    };
                    new a[c].FilterController;
                    h.on("resize", b.throttle(250, function () {
                        d()
                    })).resize(),
                        h.resize(b.throttle(250, function () {
                            window.innerWidth > a[c].config.smallMax && b(".two-column-left h1").length > 0 ? b("h1").detach().prependTo(".two-column-right") : window.innerWidth < a[c].config.mediumMin && b(".two-column-right h1").length > 0 && b("h1").detach().prependTo(".two-column-left")
                        })).resize(),
                        i.on("click", ".product-list-view", function () {
                            b(this).addClass("active"),
                                b(this).attr("aria-pressed", !0),
                                b(".product-grid-view").removeClass("active"),
                                b(".product-grid-view").attr("aria-pressed", !1),
                                b(".product-grid").removeClass("grid").addClass("list")
                        }).on("click", ".product-grid-view", function () {
                            b(this).addClass("active"),
                                b(this).attr("aria-pressed", !0),
                                b(".product-list-view").removeClass("active"),
                                b(".product-list-view").attr("aria-pressed", !1),
                                b(".product-grid").removeClass("list").addClass("grid")
                        });
                    var e = b(".empty-search-recommendations .product-slider");
                    e.on("init", function () {
                        initSlickClamp(e)
                    }).slick({
                        mobileFirst: !0,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: !0,
                        autoplay: !1,
                        responsive: [{
                            breakpoint: a[c].config.smallMax,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        }, {
                            breakpoint: a[c].config.mediumMax,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }]
                    }),
                        k(),
                        b("#mobile-sort-header-trigger").click(function (a) {
                            a.preventDefault(),
                                b(".facet-nav-dropdown, .applied-facets-nav, .category-dropdowns").slideToggle(150),
                                b("#mobile-sort-header-trigger").hasClass("tertiary") ? b(this).removeClass("tertiary").addClass("primary").html("Done") : b("#mobile-sort-header-trigger").hasClass("primary") && b(this).removeClass("primary").addClass("tertiary").html("Filter &amp; Sort")
                        })
                },
                search: function () {
                    b("#chat-with-us").click(function () {
                        b(".LPMcontainer").trigger("click")
                    });
                    var d = e();
                    void 0 !== d.St && (b(".tab.search-tabs h1 span")[0].innerHTML = decodeURIComponent(d.St).replace(/\+/g, " "));
                    new a[c].FilterController;
                    h.resize(b.throttle(250, function () {
                        window.innerWidth > a[c].config.smallMax && b(".two-column-left h1").length > 0 ? b("h1").detach().prependTo(".two-column-right") : window.innerWidth < a[c].config.mediumMin && b(".two-column-right h1").length > 0 && b("h1").detach().prependTo(".two-column-left")
                    })).resize(),
                        i.on("click", ".product-list-view", function () {
                            b(this).addClass("active"),
                                b(this).attr("aria-pressed", !0),
                                b(".product-grid-view").removeClass("active"),
                                b(".product-grid-view").attr("aria-pressed", !1),
                                b(".product-grid").removeClass("grid").addClass("list")
                        }).on("click", ".product-grid-view", function () {
                            b(this).addClass("active"),
                                b(this).attr("aria-pressed", !0),
                                b(".product-list-view").removeClass("active"),
                                b(".product-list-view").attr("aria-pressed", !1),
                                b(".product-grid").removeClass("list").addClass("grid")
                        }),
                        k(),
                        b("#mobile-sort-header-trigger").click(function (a) {
                            a.preventDefault(),
                                b(".facet-nav-dropdown, .applied-facets-nav, .category-dropdowns").slideToggle(150),
                                b("#mobile-sort-header-trigger").hasClass("tertiary") ? b(this).removeClass("tertiary").addClass("primary").html("Done") : b("#mobile-sort-header-trigger").hasClass("primary") && b(this).removeClass("primary").addClass("tertiary").html("Filter &amp; Sort")
                        }),
                        b("#search-results").hasClass("product-flag") ? (b("#productTab").addClass("active"),
                            b("#contentTab").removeClass("active"),
                            b("#empty-keyword-search").is(":visible") && (b(".two-column-left").hide(),
                                b(".two-column-right").css("width", "100%"),
                                b(".desktop-facet-tiles").hide(),
                                b(".category-dropdowns").hide(),
                                b(".bottom-pagination").hide(),
                                b(".category-product-grid").css("margin-top", "0"))) : b("#search-results").hasClass("content-flag") && (b("#productTab").removeClass("active"),
                                    b("#contentTab").addClass("active"),
                                    b(".two-column-left").hide(),
                                    b(".two-column-right").css("width", "100%"))
                },
                compare: function () {
                    var a, c, d;
                    void 0 !== typeof window.sessionStorage && (c = sessionStorage.getItem("comparePlPage")),
                        document.referrer && document.referrer.indexOf(window.location.hostname) > 0 && (d = document.referrer),
                        c ? a = c : d && (a = d),
                        b("#compareBackToPl").attr("href", a);
                    var e = [];
                    if (b(".compareRemove").each(function () {
                        e.push(b(this).data("productId"))
                    }),
                        void 0 !== typeof window.localStorage) {
                        for (var f = JSON.parse(localStorage.getItem("compareArray")), g = [], h = 0; h < f.length; h++) {
                            var i = f[h];
                            b.inArray(i.id, e) >= 0 && g.push(i)
                        }
                        localStorage.setItem("compareArray", JSON.stringify(g))
                    }
                    b(".compareRemove").click(function () {
                        var c = b(this).data("productId")
                            , d = []
                            , e = [];
                        if (void 0 !== typeof window.localStorage) {
                            for (var f = JSON.parse(localStorage.getItem("compareArray")), g = 0; g < f.length; g++) {
                                var h = f[g];
                                h.id != c && (d.push(h),
                                    e.push(h.id))
                            }
                            localStorage.setItem("compareArray", JSON.stringify(d))
                        }
                        e.length < 2 ? window.location = a : window.location = "/browse/compare.jsp?ids=" + e.toString()
                    })
                },
                searchEmpty: function () {
                    b("#chat-with-us").click(function () {
                        b(".LPMcontainer").trigger("click")
                    }),
                        b("#search-empty").on("submit", function (a) {
                            "" === b("#keyword-empty").val().trim() && a.preventDefault()
                        })
                },
                product: function () {
                    function d() {
                        b(".viewer-main-image-container .viewer-main-images").click()
                    }
                    b(".js-option").click(function (a) {
                        b("#jewel-safe").prop("checked", !0).attr("checked", "checked"),
                            b("#jewel-safe-no-plan").prop("checked", !1).removeAttr("checked")
                    }),
                        b(".js-no-option").click(function (a) {
                            b("#jewel-safe-no-plan").prop("checked", !0).attr("checked", "checked"),
                                b("#jewel-safe").prop("checked", !1).removeAttr("checked")
                        });
                    var e = 12
                        , h = "<span class='icon-arrow-up'></span> Show fewer styles"
                        , j = "<span class='icon-arrow-down'></span> Show more styles"
                        , k = b(".swatch:not(.unavailable)").length;
                    e >= k && b(".swatcharchive").hide(),
                        b(".swatcharchive").html(j),
                        b(".swatch:not(.unavailable):lt(12)").show(),
                        b(".swatcharchive").click(function (a) {
                            a.preventDefault(),
                                "none" == b(".swatch:not(.unavailable):eq(12)").css("display") ? (b(".swatch:not(.unavailable):hidden").slideToggle(150),
                                    b(".swatcharchive").html(h),
                                    console.log("swatch 13 display none")) : (b(".swatch:not(.unavailable):not(:lt(12))").slideToggle(150),
                                        b(".swatcharchive").html(j),
                                        console.log("swatch 13 display block"))
                        }),
                        i.on("click", ".swatch.active, .swatch.unavailable", function () {
                            return !1
                        }).on("keypress", ".swatch.active, .swatch.unavailable", function (a) {
                            return 13 === a.which ? !1 : void 0
                        }),
                        i.on("click", ".size-tile", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.data("id")
                                , e = b("#product-id").val()
                                , g = c.data("is-custom-size") || !1;
                            c.hasClass("active") || (b("#product-size-group .size-tile").removeClass("active"),
                                c.toggleClass("active"),
                                b(".selected-size").html(c.data("size")),
                                b(".custom-size-price").html(c.data("price")),
                                b("#add-to-cart-submit, #quick-buy-submit").removeClass("disabled"),
                                c.data("is-custom-size") ? b("#add-to-cart-sku").attr("data-custom-size-id", d) : b("#add-to-cart-sku").attr("data-custom-size-id", ""),
                                b.ajax({
                                    url: f.contextPath + "/sitewide/json/inventory.jsp",
                                    data: {
                                        skuId: d,
                                        productId: e,
                                        customSize: g
                                    },
                                    dataType: "json",
                                    success: function (a) {
                                        var c = a.inventory;
                                        b(".change-quantity").attr("data-max", c).quantify({
                                            max_quantity: c
                                        }),
                                            b("#quantity").trigger("keyup")
                                    },
                                    error: function (a) {
                                        console.log("could not get inventory: ", a)
                                    }
                                })),
                                b("#add-to-cart-sku").attr("data-id", d),
                                b("#product-size-group .alert-box").remove()
                        }).on("keypress", ".size-tile", function (a) {
                            var c = b(this);
                            13 !== a.which || c.hasClass("unavailable") || c.trigger("click")
                        }),
                        i.on("click", "#custom-size-toggle", function (a) {
                            b(this).toggleClass("active"),
                                b("#custom-size-group").slideToggle(150)
                        }).on("keypress", "#custom-size-toggle", function (a) {
                            var c = b(this);
                            13 === a.which && c.trigger("click")
                        }),
                        i.on("click", ".icon-zoom", function () {
                            d()
                        }).on("keypress", ".icon-zoom", function (a) {
                            b(this);
                            13 === a.which && d()
                        }),
                        i.on("click", "#add-to-cart-submit", function (d) {
                            if (b(this).hasClass("disabled")) {
                                var e = b("#product-size-group")
                                    , h = b(".masthead-mobile-content").height();
                                e.find(".alert-box").remove(),
                                    e.prepend(Mustache.render(g.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}'))),
                                    window.innerWidth > a[c].config.smallMax && (h = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                                    window.scrollTo(0, e.offset().top - h - 50)
                            } else {
                                var i = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (d, e, g, h) {
                                        if ("success" == e)
                                            if ("true" == d.success) {
                                                if (b(".mobile").val("Item Added to Bag"),
                                                    setTimeout(function () {
                                                        b(".mobile").val("Add to Bag")
                                                    }, 3e3),
                                                    b.ajax({
                                                        url: f.contextPath + "/sitewide/includes/repriceMiniCartContent.jsp",
                                                        dataType: "html",
                                                        cache: !1,
                                                        success: function (d) {
                                                            b(".mini-cart .utility-nav-dropdown-expanded").html(d),
                                                                b("#mobile-mini-cart").html(d),
                                                                a[c].profileController.getProfileStatus(!0)
                                                        }
                                                    }),
                                                    window.innerWidth > a[c].config.smallMax ? (b(".mini-cart").trigger("mouseover"),
                                                        setTimeout(function () {
                                                            b(".mini-cart").trigger("mouseout")
                                                        }, 4500)) : b("#mobile-bag-icon").click(),
                                                    f.isTealiumEnabled) {
                                                    var i = h.find("#add-item-stretch-pay").val()
                                                        , j = h.find("#add-item-product-id").val()
                                                        , k = h.find("#add-item-sku-id").val()
                                                        , l = h.find("#add-item-quantity").val();
                                                    b.ajax({
                                                        url: f.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                                        data: {
                                                            source: "product",
                                                            stretchPay: i,
                                                            productId: j,
                                                            skuId: k,
                                                            quantity: l
                                                        },
                                                        cache: !1,
                                                        dataType: "json",
                                                        success: function (a) {
                                                            utag.link(a)
                                                        },
                                                        error: function (a) {
                                                            console.log("error: ", a)
                                                        }
                                                    })
                                                }
                                                a[c].loader.hideLoader()
                                            } else
                                                a[c].loader.hideLoader(),
                                                    a[c].utilities.form.showErrors(h, d);
                                        else
                                            a[c].loader.hideLoader(),
                                                a[c].utilities.form.ajaxError(g, e, "add to cart error:  Missing statusText parameter", h)
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(b, d, "add to cart error: " + e, f)
                                    }
                                }
                                    , j = b("#quantity").val().trim()
                                    , k = b("#add-to-cart-sku")
                                    , l = k.attr("data-id").trim()
                                    , m = k.attr("data-custom-size-id").trim()
                                    , n = !1
                                    , o = !1
                                    , p = !1;
                                document.getElementById("stretch-pay") && (n = document.getElementById("stretch-pay").checked),
                                    document.getElementById("jewel-safe") && (o = document.getElementById("jewel-safe").checked),
                                    document.getElementById("appraisal") && (p = document.getElementById("appraisal").checked),
                                    b("#add-item-stretch-pay").val(n),
                                    b("#add-item-jewel-safe").val(o),
                                    b("#add-item-appraisal").val(p),
                                    b("#add-item-sku-id").val(l),
                                    b("#add-item-quantity").val(j),
                                    b("#add-item-custom-size-id").val(m),
                                    b("#add-item-form").ajaxSubmit(i)
                            }
                        }),
                        i.on("click", "#quick-buy-submit", function (d) {
                            if (d.preventDefault(),
                                b(this).hasClass("disabled")) {
                                var e = b("#product-size-group")
                                    , h = b(".masthead-mobile-content").height();
                                e.find(".alert-box").remove(),
                                    e.prepend(Mustache.render(g.errorMessageTemplate, JSON.parse('{"errorMessages":["Please select size"]}'))),
                                    window.innerWidth > a[c].config.smallMax && (h = b(".desktop-header .header-masthead").height() + b(".primary-nav").height()),
                                    window.scrollTo(0, e.offset().top - h - 50)
                            } else {
                                var i = b("#quick-buy-form")
                                    , j = b("#add-to-cart-sku")
                                    , k = b("#quantity").val().trim()
                                    , l = j.attr("data-id").trim()
                                    , m = b("#quick-buy-product-id").val()
                                    , n = j.attr("data-custom-size-id").trim()
                                    , o = !1
                                    , p = !1
                                    , q = !1;
                                document.getElementById("stretch-pay") && (o = document.getElementById("stretch-pay").checked),
                                    document.getElementById("jewel-safe") && (p = document.getElementById("jewel-safe").checked),
                                    document.getElementById("appraisal") && (q = document.getElementById("appraisal").checked),
                                    b("#quick-buy-stretch-pay").val(o),
                                    b("#quick-buy-jewel-safe").val(p),
                                    b("#quick-buy-appraisal").val(q),
                                    b("#quick-buy-sku-id").val(l),
                                    b("#quick-buy-quantity").val(k),
                                    b("#quick-buy-custom-size-id").val(n),
                                    f.isTealiumEnabled ? b.ajax({
                                        url: f.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                        data: {
                                            source: "product",
                                            isQB: "true",
                                            stretchPay: o,
                                            productId: m,
                                            skuId: l,
                                            quantity: k
                                        },
                                        cache: !1,
                                        dataType: "json",
                                        success: function (a) {
                                            utag.link(a),
                                                i.submit()
                                        },
                                        error: function (a) {
                                            console.log("error: ", a),
                                                i.submit()
                                        }
                                    }) : i.submit()
                            }
                        }),
                        f.isTealiumEnabled && i.on("click", ".social-share", function () {
                            var a = b(this).data("network");
                            b.ajax({
                                url: f.contextPath + "/sitewide/tagging/tealiumSocialShare.jsp",
                                data: {
                                    network: a
                                },
                                cache: !1,
                                dataType: "json",
                                success: function (a) {
                                    utag.link(a)
                                },
                                error: function (a) {
                                    console.log("could not get tealium social share info: ", a)
                                }
                            })
                        })
                }
            }
            , k = function () {
                m(),
                    l(),
                    i.on("click", ".add-to-compare-input", function () {
                        if (this.checked) {
                            var a = {};
                            a.id = b(this).data("prod-id"),
                                a.name = b(this).data("prod-name"),
                                a.imageUrl = b(this).data("prod-image"),
                                a.url = b(this).data("prod-url"),
                                n("compareArray", a)
                        } else
                            o("compareArray", b(this).data("prod-id"));
                        m()
                    }),
                    b("#compare-item-list").on("click", ".icon-x", function () {
                        var a = b(this).data("product");
                        o("compareArray", a),
                            m(),
                            b("#compare-" + a).prop("checked", !1)
                    })
            }
            , l = function () {
                void 0 !== typeof window.sessionStorage && sessionStorage.setItem("comparePlPage", window.location);
                for (var a = p("compareArray"), c = 0; c < a.length; c++) {
                    var d = a[c];
                    b("#compare-" + d.id).prop("checked", !0)
                }
                a.length >= 4 ? b(".add-to-compare-input:not(:checked)").prop("disabled", !0) : b(".add-to-compare-input:not(:checked)").prop("disabled", !1);
            }
            , m = function () {
                var a = b(".compare-items-container")
                    , c = p("compareArray")
                    , d = {};
                d.products = c,
                    b("#compare-item-list").html(Mustache.render(g.compareItems, d)),
                    c.length > 0 ? a.removeClass("no-items") : a.addClass("no-items");
                for (var e = [], f = 0; f < c.length; f++) {
                    var h = c[f];
                    e.push(h.id)
                }
                b("#compare-page-href").attr("href", "/browse/compare.jsp?ids=" + e.toString()),
                    e.length > 1 ? b("#compare-page-href").removeClass("disabled") : b("#compare-page-href").addClass("disabled"),
                    e.length >= 4 ? b(".add-to-compare-input:not(:checked)").prop("disabled", !0) : b(".add-to-compare-input:not(:checked)").prop("disabled", !1)
            }
            , n = function (a, b) {
                if (void 0 !== typeof window.localStorage) {
                    var c = p(a);
                    return c.length >= 4 ? c.length : (c.push(b),
                        localStorage.setItem(a, JSON.stringify(c)),
                        c.length)
                }
            }
            , o = function (a, b) {
                if (void 0 !== typeof window.localStorage) {
                    for (var c = p(a), d = 0; d < c.length; d++) {
                        var e = c[d];
                        e.id == b && c.splice(d, 1)
                    }
                    localStorage.setItem(a, JSON.stringify(c))
                }
            }
            , p = function (a) {
                var c = [];
                return void 0 !== typeof window.localStorage && (localStorage.getItem(a) && (c = JSON.parse(localStorage.getItem(a))),
                    b.isArray(c) || (c = [])),
                    c
            };
        a[c] = a[c] || {},
            a[c].browse = j,
            a[c].browse.initCompareProdGrid = l
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        function d() {
            var a = b("#zip")
                , c = b("#country")
                , d = "";
            c.length > 0 && (d = c.val()),
                a.length > 0 && ("US" == d ? a.mask("00000-0000") : "CA" == d ? (a.mask("S0S 0S0", {
                    translation: {
                        S: {
                            pattern: /[A-Za-z]/
                        }
                    }
                }),
                    a.keyup(function () {
                        a.val(a.val().toUpperCase())
                    })) : "MX" == d && a.mask("00000"))
        }
        function e() {
            b('.checkbox input, a.button, input[type="submit"]').prop("disabled", !0)
        }
        function f() {
            b('.checkbox input, a.button, input[type="submit"]').prop("disabled", !1)
        }
        function g(a, b) {
            a.find("input[type=text],input[type=tel],textarea").not(b).val(""),
                a.find("select").not(b).each(function () {
                    this.selectedIndex = 0
                }),
                a.find("input[type=checkbox],input[type=checkbox]").not(b).prop("checked", !1)
        }
        function h() {
            if (m.isMiniCartFreeShippingMsgEnabled && document.querySelectorAll(".total .total-amount").length > 0) {
                var a = parseFloat(document.querySelector(".total .total-amount").innerText.trim().replace("$", ""));
                if (a < m.minimumFreeShippingAmount && "" != m.cartFreeShippingMsg) {
                    var b = document.createElement("style");
                    document.head.appendChild(b),
                        b.innerHTML = "span.add_for_free_shipping { display: block;padding: 20px 0;font-size: 1.1em;width: auto;clear: both;float: left;padding: 20px;font-weight: bold;border: solid 1px #e7e7e7;}.order-item > span.add_for_free_shipping {font-size: 1.3em;} #cartUpdateForm > span.add_for_free_shipping {text-align: center;margin-bottom: 20px;}";
                    var c = (m.minimumFreeShippingAmount - a).toFixed(2)
                        , d = m.cartFreeShippingMsg.replace("[[price]]", "$" + c);
                    if (document.body.clientWidth < 768)
                        document.getElementById("cartUpdateForm").insertAdjacentHTML("beforeEnd", '<span class="add_for_free_shipping">' + d + "</span>");
                    else {
                        var e = document.querySelectorAll("#cartUpdateForm > .order-item")
                            , f = e[e.length - 1];
                        f.insertAdjacentHTML("beforeEnd", '<span class="add_for_free_shipping">' + d + "</span>")
                    }
                }
            }
        }
        function i(a) {
            a && a.length && "function" == typeof a.mask && a.mask("ZZZZ ZZZZ ZZZZ ZZZZ", {
                translation: {
                    Z: {
                        pattern: /[0-9\*]/
                    }
                }
            })
        }
        function j(a, c) {
            var d = b(".non-standard")
                , e = b(".standard-shipping input")
                , f = b(".po-box-shipping-msg")
                , g = new RegExp("([P|p](OST|ost)*.*s*[O|o|0](ffice|FFICE)*.*s*[B|b][O|o|0][X|x]s*(d.)*)", "")
                , h = !1;
            a && g.test(a) && (h = !0),
                c && ("AA" === c || "AE" === c || "AP" === c) && (h = !0),
                h ? (f.removeClass("hide"),
                    d.hide(),
                    e.click()) : (f.addClass("hide"),
                        d.show())
        }
        function k() {
            var d = b(".saved-addresses .address")
                , e = window.innerWidth;
            if (d.each(function (a) {
                b(this).removeAttr("style")
            }),
                e > a[c].config.smallMax) {
                for (var f = [], g = 0; g < d.length / 3; g++)
                    f[g] = 0;
                d.each(function (a) {
                    var c = b(this).outerHeight()
                        , d = Math.floor(a / 3);
                    c > f[d] && (f[d] = c)
                }),
                    d.each(function (a) {
                        b(this).outerHeight(f[Math.floor(a / 3)])
                    })
            }
        }
        function l() {
            function d() {
                window.innerWidth < a[c].config.largeMin ? e.css("min-height", "") : f.height() > e.height() && e.css("min-height", f.height())
            }
            var e = b(".checkout-container > .checkout-content")
                , f = e.find("> .financial-summary, form#shipping-form > .financial-summary")
                , g = 20
                , h = b("#paypal-button")
                , i = b("#paypal-credit-button")
                , j = setInterval(function () {
                    g-- ,
                        (h.children().length > 0 && (0 == i.length || i.children().length > 0) || 0 > g) && (clearInterval(j),
                            d())
                }, 1e3);
            b(window).load(function () {
                d(),
                    o.resize(b.throttle(250, d)).resize()
            })
        }
        var m = (a[c] && a[c].config && a[c].config.loggingDebug,
            a[c].constants)
            , n = a[c].templates
            , o = ("www.jtv.com" == m.productionURL ? "https://etail.mysynchrony.com/etail/css/syfdymodal.css" : "https://uetail.mysynchrony.com/etail/css/syfdymodal.css",
                b(window))
            , p = b("body")
            , q = b("[name=payment-method-radios]:checked").val()
            , r = {
                dataType: "json",
                beforeSerialize: function (a) {
                    var b = a.find("#phone")
                        , c = a.find("#card");
                    b.length > 0 && b.unmask(),
                        c.length > 0 && c.unmask()
                },
                beforeSubmit: function (b, d, e) {
                    a[c].loader.showLoader()
                },
                success: function (e, f, g, h) {
                    var j = h.find("#phone")
                        , k = h.find("#card");
                    if (j.length > 0 && j.mask("(100) 000-0000", {
                        translation: {
                            1: {
                                pattern: /[2-9]/
                            },
                            0: {
                                pattern: /[0-9]/
                            }
                        }
                    }),
                        k.length > 0 && i(k),
                        d(),
                        "success" == f)
                        if ("true" == e.success)
                            if ("true" == e.addressMatched)
                                if ("true" == e.isRegisterPrefAccount) {
                                    e.preferredAccountInput;
                                    b("#email").val(b("#pa-email").val()),
                                        b("#submit-pa-form").click()
                                } else
                                    window.location = e.url;
                            else {
                                b("#avs-json").remove(),
                                    p.append("<script>var avsJSON = '" + JSON.stringify(e) + "';</script>"),
                                    a[c].loader.hideLoader();
                                var l = document.getElementById("avs-modal") ? b("#avs-modal") : a[c].utilities.createModal("avs-modal", "medium")
                                    , n = m.contextPath + "/checkout/ajax/avsModal.jsp"
                                    , o = {
                                        url: n
                                    };
                                l.modal(o)
                            }
                        else
                            a[c].loader.hideLoader(),
                                a[c].utilities.form.showErrors(h, e);
                    else
                        console.log("Malformed JSON : missing statusText parameter:"),
                            a[c].loader.hideLoader(),
                            a[c].utilities.form.ajaxError(g, f, e, h)
                },
                error: function (b, d, e, f) {
                    var g = f.find("#phone")
                        , h = f.find("#card");
                    g.length > 0 && g.mask("(100) 000-0000", {
                        translation: {
                            1: {
                                pattern: /[2-9]/
                            },
                            0: {
                                pattern: /[0-9]/
                            }
                        }
                    }),
                        h.length > 0 && i(h),
                        console.log("AJAX Error:"),
                        a[c].loader.hideLoader(),
                        a[c].utilities.form.ajaxError(b, d, e, f)
                }
            }
            , s = {
                init: function () {
                    b("#email-same-as-shipping").mask("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ", {
                        translation: {
                            Z: {
                                pattern: /[ \S]/,
                                optional: !0
                            }
                        }
                    }),
                        b("#phone").mask("(100) 000-0000", {
                            translation: {
                                1: {
                                    pattern: /[2-9]/
                                },
                                0: {
                                    pattern: /[0-9]/
                                }
                            }
                        }),
                        b(".cvv-field input").mask("0000"),
                        b(".pa-cvv-field input, #pa-panel .cvv-field input").mask("000"),
                        i(b("#card")),
                        i(b("#pa-card")),
                        d();
                    var e = b("#country");
                    if (b(".not-" + e.val()).hide().attr("disabled", !0),
                        e.on("change", function () {
                            var a = e.val();
                            b("#state optgroup").show().attr("disabled", !1),
                                b(".not-" + a).hide().attr("disabled", !0),
                                b("#state").val(b("#country-" + a + " option:first-of-type").val()),
                                d()
                        }),
                        b(".accordion-body").on("opened.accordion", function () {
                            b("#phone").mask("(100) 000-0000", {
                                translation: {
                                    1: {
                                        pattern: /[2-9]/
                                    },
                                    0: {
                                        pattern: /[0-9]/
                                    }
                                }
                            }),
                                i(b("#card")),
                                i(b("#pa-card")),
                                d()
                        }),
                        l(),
                        b(".trigger-checkout-continue").on("click", function (a) {
                            a.preventDefault();
                            var c = "#method-submit";
                            -1 !== b("#method-submit").attr("name").indexOf("expressCheckout") && q && "creditCard" !== q && (c = "#method-submit2"),
                                b(c).trigger("click")
                        }),
                        !p.hasClass("cart")) {
                        var f = b(".mobile-floating-footer");
                        o.resize(b.throttle(250, function () {
                            window.innerWidth < a[c].config.largeMin && (window.innerHeight < 300 ? f.addClass("hide") : f.removeClass("hide"))
                        })).resize()
                    }
                },
                cart: function () {
                    e(),
                        b(window).bind("load", function () {
                            f(),
                                setTimeout(function () {
                                    f()
                                }, 2e3)
                        });
                    var d = b("#cartUpdateForm");
                    b(".item-option").on("click", function () {
                        var a = b("#option-is-added")
                            , c = b(this).attr("data-ciid").trim()
                            , d = b(this).attr("data-option").trim();
                        b("#add-option-to-commerce-id").val(c),
                            b("#option-name").val(d),
                            this.checked === !0 ? a.val("true") : a.val("false"),
                            e(),
                            setTimeout(function () {
                                b("#add-option-form").submit()
                            }, 1250)
                    }),
                        b(".custom-size").change("click", function () {
                            b("#option-value").val(b(".custom-size").val());
                            var a = b(this).attr("data-ciid").trim()
                                , c = b(this).attr("data-option").trim();
                            b("#add-option-to-commerce-id").val(a),
                                b("#option-name").val(c),
                                e(),
                                b("#add-option-form").submit()
                        }),
                        h(),
                        p.on("click", ".remove-item-from-cart", function (d) {
                            d.preventDefault();
                            var e = b(this)
                                , f = e.attr("data-ciid").trim()
                                , g = e.attr("data-stretchpay").trim()
                                , h = e.attr("data-product-id").trim()
                                , i = e.attr("data-sku-id").trim()
                                , j = e.attr("data-quantity").trim()
                                , k = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (d, e, f, k) {
                                        "success" === e ? "true" === d.success ? m.isTealiumEnabled ? b.ajax({
                                            url: m.contextPath + "/sitewide/tagging/tealiumCartRemove.jsp",
                                            data: {
                                                source: "cart",
                                                stretchPay: g,
                                                productId: h,
                                                skuId: i,
                                                quantity: j
                                            },
                                            cache: !1,
                                            dataType: "json",
                                            success: function (b) {
                                                utag.link(b),
                                                    a[c].loader.hideLoader(),
                                                    window.location.reload()
                                            },
                                            error: function (b) {
                                                console.log("error: ", b),
                                                    a[c].loader.hideLoader(),
                                                    window.location.reload()
                                            }
                                        }) : (a[c].loader.hideLoader(),
                                            window.location.reload()) : (a[c].loader.hideLoader(),
                                                a[c].utilities.form.showErrors(k, d)) : (console.log("Malformed JSON : missing statusText parameter:"),
                                                    a[c].loader.hideLoader(),
                                                    a[c].utilities.form.ajaxError(f, e, d, k))
                                    },
                                    error: function (b, d, e, f) {
                                        console.log("AJAX Error:"),
                                            a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(b, d, e, f)
                                    }
                                };
                            b("#remove-commerce-id").val(f),
                                b("#cart-remove-form").ajaxSubmit(k)
                        }),
                        m.isTealiumEnabled && b("#remove-all-items").on("click", function () {
                            utag.view({
                                cart_action_location: "cart",
                                tealium_event: "cart_empty"
                            })
                        }),
                        b(".counter").on("blur", function (a) { }),
                        d.on("increment decrement", function () {
                            a[c].loader.showLoader(),
                                e(),
                                d.submit()
                        }),
                        p.on("click", ".save-for-later", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-ciid").trim()
                                , f = c.attr("data-qty").trim();
                            b("#save-item-id").val(d),
                                b("#save-quantity").val(f),
                                e(),
                                b("#cart-save-form").submit()
                        }),
                        p.on("click", ".move-to-cart", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-skuid").trim()
                                , f = c.attr("data-prodid").trim()
                                , g = c.attr("data-siid").trim()
                                , h = c.attr("data-qty").trim();
                            b("#move-saved-sku-id").val(d),
                                b("#move-saved-product-id").val(f),
                                b("#move-saved-list-item-id").val(g),
                                b("#move-quantity").val(h),
                                e(),
                                b("#cart-move-from-save-form").submit()
                        }),
                        p.on("click", ".remove-saved-item", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = c.attr("data-siid").trim();
                            b("#remove-save-item-id").val(d),
                                e(),
                                b("#remove-save-form").submit()
                        }),
                        b("#paypal-credit-button").length && b.ajax({
                            url: m.contextPath + "/sitewide/json/paypalToken.jsp",
                            dataType: "json",
                            cache: !1,
                            success: function (a) {
                                braintree.client.create({
                                    authorization: a.clientToken
                                }, function (c, d) {
                                    return c ? void console.error("Error creating client:", c) : void braintree.paypalCheckout.create({
                                        client: d
                                    }, function (c, d) {
                                        return c ? void console.error("Error creating PayPal Credit Checkout:", c) : void paypal.Button.render({
                                            env: a.braintreeEnvironment ? a.braintreeEnvironment : "sandbox",
                                            style: {
                                                size: "responsive",
                                                shape: "rect",
                                                label: "credit",
                                                tagline: !1
                                            },
                                            payment: function () {
                                                return d.createPayment({
                                                    flow: "checkout",
                                                    amount: a.amount,
                                                    currency: "USD",
                                                    enableShippingAddress: !0,
                                                    shippingAddressEditable: !0
                                                })
                                            },
                                            onAuthorize: function (a, c) {
                                                return d.tokenizePayment(a).then(function (a) {
                                                    if (console.log("[Braintree] PayPal Credit callback response:", a),
                                                        b("input[id=paypal-response-nonce]").val(a.nonce),
                                                        b("input[id=paypal-response-payment-type]").val(a.type),
                                                        a.details) {
                                                        if (console.log("[Braintree] Response details has details."),
                                                            b("input[id=paypal-response-payment-email]").val(a.details.email),
                                                            b("input[id=paypal-response-first-name]").val(a.details.firstName),
                                                            b("input[id=paypal-response-last-name]").val(a.details.lastName),
                                                            b("input[id=paypal-response-phone-number]").val(a.details.phone),
                                                            a.details.shippingAddress) {
                                                            if (console.log("[Braintree(credit)] Response details has shipping address."),
                                                                a.details.shippingAddress.recipientName) {
                                                                console.log("[Braintree(credit)] Response details has shipping address name.");
                                                                var c = a.details.shippingAddress.recipientName.split(" ");
                                                                b("input[id=paypal-response-first-name]").val(c[0]),
                                                                    b("input[id=paypal-response-last-name]").val(c[1])
                                                            }
                                                            b("input[id=paypal-response-country]").val(a.details.shippingAddress.countryCode),
                                                                b("input[id=paypal-response-region]").val(a.details.shippingAddress.state),
                                                                b("input[id=paypal-response-postal-code]").val(a.details.shippingAddress.postalCode),
                                                                b("input[id=paypal-response-city]").val(a.details.shippingAddress.city),
                                                                b("input[id=paypal-response-street-address]").val(a.details.shippingAddress.line1),
                                                                b("input[id=paypal-response-extended-address]").val(a.details.shippingAddress.line2)
                                                        }
                                                        a.details.billingAddress ? (console.log("[Braintree(credit)] Response details has billing address."),
                                                            b("input[id=paypal-response-billing-country]").val(a.details.billingAddress.countryCode),
                                                            b("input[id=paypal-response-billing-region]").val(a.details.billingAddress.state),
                                                            b("input[id=paypal-response-billing-postal-code]").val(a.details.billingAddress.postalCode),
                                                            b("input[id=paypal-response-billing-city]").val(a.details.billingAddress.city),
                                                            b("input[id=paypal-response-billing-street-address]").val(a.details.billingAddress.line1),
                                                            b("input[id=paypal-response-billing-extended-address]").val(a.details.billingAddress.line2)) : console.log("[Braintree(credit)] No Billing address in response.")
                                                    }
                                                    b("#paypal-submit").click()
                                                })
                                            },
                                            onCancel: function (a) {
                                                console.log("checkout.js payment cancelled", JSON.stringify(a, 0, 2))
                                            },
                                            onError: function (a) {
                                                console.error("checkout.js error", a)
                                            }
                                        }, "#paypal-credit-button").then(function () { })
                                    })
                                })
                            }
                        }),
                        b("#paypal-button").length && b.ajax({
                            url: m.contextPath + "/sitewide/json/paypalToken.jsp",
                            dataType: "json",
                            cache: !1,
                            success: function (a) {
                                braintree.client.create({
                                    authorization: a.clientToken
                                }, function (c, d) {
                                    return c ? void console.error("Error creating client:", c) : void braintree.paypalCheckout.create({
                                        client: d
                                    }, function (c, d) {
                                        return c ? void console.error("Error creating PayPal Checkout:", c) : void paypal.Button.render({
                                            env: a.braintreeEnvironment ? a.braintreeEnvironment : "sandbox",
                                            style: {
                                                size: "responsive",
                                                color: "blue",
                                                shape: "rect",
                                                label: "checkout",
                                                tagline: !1
                                            },
                                            payment: function () {
                                                return d.createPayment({
                                                    flow: "checkout",
                                                    amount: a.amount,
                                                    currency: "USD",
                                                    enableShippingAddress: !0,
                                                    shippingAddressEditable: !0
                                                })
                                            },
                                            onAuthorize: function (a, c) {
                                                return d.tokenizePayment(a).then(function (a) {
                                                    if (console.log("[Braintree] PayPal callback response:", a),
                                                        b("input[id=paypal-response-nonce]").val(a.nonce),
                                                        b("input[id=paypal-response-payment-type]").val(a.type),
                                                        a.details) {
                                                        if (console.log("[Braintree] Response details has details."),
                                                            b("input[id=paypal-response-payment-email]").val(a.details.email),
                                                            b("input[id=paypal-response-first-name]").val(a.details.firstName),
                                                            b("input[id=paypal-response-last-name]").val(a.details.lastName),
                                                            b("input[id=paypal-response-phone-number]").val(a.details.phone),
                                                            a.details.shippingAddress) {
                                                            if (console.log("[Braintree] Response details has shipping address."),
                                                                a.details.shippingAddress.recipientName) {
                                                                console.log("[Braintree] Response details has shipping address name.");
                                                                var c = a.details.shippingAddress.recipientName.split(" ");
                                                                b("input[id=paypal-response-first-name]").val(c[0]),
                                                                    b("input[id=paypal-response-last-name]").val(c[1])
                                                            }
                                                            b("input[id=paypal-response-country]").val(a.details.shippingAddress.countryCode),
                                                                b("input[id=paypal-response-region]").val(a.details.shippingAddress.state),
                                                                b("input[id=paypal-response-postal-code]").val(a.details.shippingAddress.postalCode),
                                                                b("input[id=paypal-response-city]").val(a.details.shippingAddress.city),
                                                                b("input[id=paypal-response-street-address]").val(a.details.shippingAddress.line1),
                                                                b("input[id=paypal-response-extended-address]").val(a.details.shippingAddress.line2)
                                                        }
                                                        a.details.billingAddress ? (console.log("[Braintree] Response details has billing address."),
                                                            b("input[id=paypal-response-billing-country]").val(a.details.billingAddress.countryCode),
                                                            b("input[id=paypal-response-billing-region]").val(a.details.billingAddress.state),
                                                            b("input[id=paypal-response-billing-postal-code]").val(a.details.billingAddress.postalCode),
                                                            b("input[id=paypal-response-billing-city]").val(a.details.billingAddress.city),
                                                            b("input[id=paypal-response-billing-street-address]").val(a.details.billingAddress.line1),
                                                            b("input[id=paypal-response-billing-extended-address]").val(a.details.billingAddress.line2)) : console.log("[Braintree] No Billing address in response.")
                                                    }
                                                    b("#paypal-submit").click()
                                                })
                                            },
                                            onCancel: function (a) {
                                                console.log("checkout.js payment cancelled", JSON.stringify(a, 0, 2))
                                            },
                                            onError: function (a) {
                                                console.error("checkout.js error", a)
                                            }
                                        }, "#paypal-button").then(function () { })
                                    })
                                })
                            }
                        }),
                        b(".order-item").each(function (a) {
                            b(this).find(".variant:contains(Not Applicable)").hide()
                        }),
                        m.isTealiumEnabled && (b(".checkout-now").on("click", function () {
                            utag.link({
                                tealium_event: "link_click",
                                link_action: "Click",
                                link_category: "Checkout",
                                link_name: "Checkout Now"
                            })
                        }),
                            b(".option-stretch-pay").on("click", function () {
                                var a = b(this).prop("checked");
                                utag.link({
                                    tealium_event: "link_click",
                                    link_action: "Click",
                                    link_category: "Cart",
                                    link_name: "Stretch Pay",
                                    is_stretch_pay: a ? "1" : "0"
                                })
                            })),
                        b(".alert-box.error").is(":visible") && b("html, body").animate({
                            scrollTop: b(".alert-box.error").offset().top - 200
                        }, "fast"),
                        b("#apply-promo-form").keyup(function () {
                            b(this).val(b(this).val().toUpperCase())
                        })
                },
                shipping: function () {
                    function a(a) {
                        var c = b(".us-shipping")
                            , d = b(".ca-shipping")
                            , e = b(".mx-shipping");
                        "CA" === a ? (c.addClass("hide"),
                            e.addClass("hide"),
                            d.removeClass("hide"),
                            d.find('[name="shipping-method-radios"]')[0].click()) : "MX" === a ? (c.addClass("hide"),
                                d.addClass("hide"),
                                e.removeClass("hide"),
                                e.find('[name="shipping-method-radios"]')[0].click()) : (d.addClass("hide"),
                                    e.addClass("hide"),
                                    c.removeClass("hide"),
                                    c.find('[name="shipping-method-radios"]')[0].click())
                    }
                    o.resize(b.throttle(250, function () {
                        k()
                    })).resize(),
                        b("#new-address-panel").on("opened.accordion", function () {
                            var c = b("#state").val();
                            document.getElementById("new-shipping-address-radio").checked = !0,
                                a(b("#country").val()),
                                j(b("#address-1").val(), c)
                        }).on("closed.accordion", function () {
                            if (document.getElementById("new-shipping-address-radio").checked = !1,
                                0 === b('input[name="shipping-address-radios"]:checked').length) {
                                var a = b('input[name="shipping-address-radios"]:checked')
                                    , c = a.data("address-1")
                                    , d = a.data("state");
                                j(c, d)
                            }
                        }),
                        b("#country").on("change", function (c) {
                            a(b(this).val())
                        });
                    var c = b("#address-1")
                        , d = b('input[name="shipping-address-radios"]:checked').data("address-1") || c.val()
                        , e = b("#state")
                        , f = b('input[name="shipping-address-radios"]:checked').data("state") || e.val();
                    j(d, f),
                        c.on("blur", function () {
                            j(c.val(), e.val())
                        }),
                        e.on("change", function () {
                            j(c.val(), e.val())
                        }),
                        b('input[name="shipping-address-radios"]').on("change", function (c) {
                            if (0 == document.getElementById("new-shipping-address-radio").checked) {
                                var d = b("#new-address-title")
                                    , e = b('input[name="shipping-address-radios"]:checked')
                                    , f = e.data("address-1")
                                    , g = e.data("country") || ""
                                    , h = e.data("state");
                                d.hasClass("active") && d.trigger("click"),
                                    a(g),
                                    j(f, h)
                            }
                        }),
                        b('input[name="shipping-method-radios"]').on("change", function (a) {
                            var c = Number(b(this).data("ship-amount"));
                            b(".js-shipping-label").html(b(this).data("ship-method")),
                                b(".js-update-total").each(function () {
                                    var a = Number(b(this).data("amount")) + c;
                                    b(this).html(a.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }))
                                })
                        }),
                        b(".address-checkboxes #save-field").on("change", function (a) {
                            var c = b(".address-checkboxes #default-field")
                                , d = b(".address-checkboxes #quickbuy-field")
                                , e = b(".address-checkboxes #save-field");
                            0 == e.prop("checked") ? (c.prop("checked", !1),
                                d.prop("checked", !1),
                                c.prop("disabled", !0),
                                d.prop("disabled", !0)) : (c.prop("disabled", !1),
                                    d.prop("disabled", !1))
                        }),
                        b("#shipping-form").ajaxForm(r)
                },
                billing: function () {
                    var d = b("#billing-form")
                        , h = b(".checkout-accordion")
                        , i = b("[name=payment-method-radios]:checked").val()
                        , j = b("#sync-preapproval-form")
                        , l = b("#edit-payment-form");
                    j.length && b(window).load(function () {
                        j.submit()
                    }),
                        o.resize(b.throttle(250, function () {
                            k()
                        })).resize(),
                        "payment-method-radio-paypal" == b("[name=payment-method-radios]:checked").attr("id") && 0 == b(".radio .payment-methods #paypal-email").length && b(".totals-container button, .mobile-floating-footer button").addClass("disabled"),
                        g(h, "[disabled]"),
                        p.on("closed.accordion", ".checkout-accordion.cc-form", function () {
                            g(b(this), "[disabled]")
                        }).on("click.edit-payment", ".edit-payment-btn", function (a) {
                            a.preventDefault();
                            var b = this.getAttribute("data-key")
                                , c = this.getAttribute("data-successurl");
                            l.find("[name=key]").val(b),
                                l.find("[name=successURL]").val(c),
                                l.submit()
                        }),
                        b("#payment-methods").change(function () {
                            b(".form-messages .icon-close-x").trigger("click"),
                                b("#payment-method-radio-jtvpa").length > 0 && document.getElementById("payment-method-radio-jtvpa").checked ? (b(".cc-form, .pp-form, .gc-form").hide(),
                                    b(".pa-form, .non-paypal-button").show(),
                                    0 == document.getElementById("new-preferred-account-radio").checked ? b(".billing-address, .billing-address .cc-form").hide() : b(".billing-address, .billing-address .cc-form").show(),
                                    b(".mobile-floating-footer").is(":visible") && b("html, body").animate({
                                        scrollTop: b("#payment-method-radio-jtvpa").offset().top - 25
                                    }, 0)) : b("#payment-method-radio-paypal").length > 0 && document.getElementById("payment-method-radio-paypal").checked ? (b(".cc-form, .billing-address, .pa-form, .gc-form").hide(),
                                        b(".pp-form").show(),
                                        b("#paypal-email").length || b(".non-paypal-button").hide(),
                                        b(".mobile-floating-footer").is(":visible") && b("html, body").animate({
                                            scrollTop: b("#payment-method-radio-paypal").offset().top - 25
                                        }, 0)) : b("#payment-method-radio-gc").length > 0 && document.getElementById("payment-method-radio-gc").checked ? (b(".cc-form, .billing-address, .pa-form, .pp-form").hide(),
                                            b(".gc-form, .non-paypal-button").show()) : (b(".pa-form, .pp-form, .gc-form").hide(),
                                                b(".cc-form, .non-paypal-button").show(),
                                                document.getElementById("new-credit-card-radio") && 0 == document.getElementById("new-credit-card-radio").checked ? b(".billing-address, .billing-address .cc-form").hide() : b(".billing-address, .billing-address .cc-form").show())
                        }),
                        b(".address-checkboxes #save-field").on("change", function (a) {
                            var c = b(".address-checkboxes #default-field")
                                , d = b(".address-checkboxes #quickbuy-field")
                                , e = b(".address-checkboxes #save-field");
                            0 == e.prop("checked") ? (c.prop("checked", !1),
                                d.prop("checked", !1),
                                c.prop("disabled", !0),
                                d.prop("disabled", !0)) : (c.prop("disabled", !1),
                                    d.prop("disabled", !1))
                        }),
                        0 === b(".saved-addresses").length && b("#payment-method-radio-cc").length > 0 && document.getElementById("payment-method-radio-cc").checked && (b(".billing-address").show(),
                            b(".mobile-floating-footer").is(":visible") && b("html, body").animate({
                                scrollTop: b("#payment-method-radio-cc").offset().top - 25
                            }, 0)),
                        -1 !== b("#method-submit").attr("name").indexOf("expressCheckout") && ("creditCard" === i ? (b("#method-submit").removeClass("hide"),
                            b("#method-submit2").addClass("hide")) : (b("#method-submit").addClass("hide"),
                                b("#method-submit2").removeClass("hide"))),
                        b('input[name="payment-method-radios"]').on("change", function (a) {
                            if (g(h, "[disabled]"),
                                "payment-method-radio-paypal" == b(this).attr("id") && 0 == b(".radio .payment-methods #paypal-email").length ? b(".totals-container button, .mobile-floating-footer button").addClass("disabled") : b(".totals-container button, .mobile-floating-footer button").removeClass("disabled"),
                                1 == document.getElementById("payment-method-radio-cc").checked && 0 == b(".cc-form .payment-method").length) {
                                var c = b("#cc-title");
                                c.hasClass("active") || c.trigger("click"),
                                    b(".mobile-floating-footer").is(":visible") && b("html, body").animate({
                                        scrollTop: b("#payment-method-radio-cc").offset().top - 25
                                    }, 0)
                            }
                            -1 !== b("#method-submit").attr("name").indexOf("expressCheckout") && (i = b("[name=payment-method-radios]:checked").val(),
                                "creditCard" === i ? (b("#method-submit").removeClass("hide"),
                                    b("#method-submit2").addClass("hide")) : (b("#method-submit").addClass("hide"),
                                        b("#method-submit2").removeClass("hide")))
                        }),
                        b("#cc-panel").focusin(function () {
                            b(".billing-address, .billing-address .cc-form").show(),
                                document.getElementById("new-credit-card-radio").checked = !0,
                                b(".cvv-needed").addClass("hide")
                        }),
                        b('input[name="credit-card-radios"]').on("change", function (a) {
                            if (0 == document.getElementById("new-credit-card-radio").checked) {
                                var c = b("#cc-title");
                                b(".billing-address").hide(),
                                    c.hasClass("active") && c.trigger("click"),
                                    b(".cvv-needed").addClass("hide"),
                                    b('input[name="credit-card-radios"]:checked').closest(".radio").find(".cvv-needed").removeClass("hide")
                            }
                        });
                    b('input[name="preferred-account-radios"]:checked');
                    b("#pa-panel").focusin(function () {
                        b(".billing-address, .billing-address .cc-form").show(),
                            document.getElementById("new-preferred-account-radio").checked = !0,
                            b(".pa-cvv-needed").addClass("hide")
                    }),
                        b('input[name="preferred-account-radios"]').on("change", function (a) {
                            if (0 == document.getElementById("new-preferred-account-radio").checked) {
                                b(".billing-address").hide();
                                var c = b("#pa-title");
                                c.hasClass("active") && c.trigger("click"),
                                    b(".pa-cvv-needed").addClass("hide"),
                                    b('input[name="preferred-account-radios"]:checked').closest(".radio").find(".pa-cvv-needed").removeClass("hide")
                            }
                            b("#pa-promo-fallbackTerms").prop("value", !1),
                                b('body input[name="pa-promo-radios"]:checked').prop("checked", !1)
                        }),
                        b("#pa-card").on("focus", function () {
                            b("#pa-promo-fallbackTerms").prop("value", !1),
                                b('body input[name="pa-promo-radios"]:checked').prop("checked", !1)
                        }),
                        b("#new-address-panel").on("opened.accordion", function () {
                            document.getElementById("new-billing-address-radio").checked = !0
                        }).on("closed.accordion", function () {
                            document.getElementById("new-billing-address-radio").checked = !1,
                                0 === b('input[name="billing-address-radios"]:checked').length && (document.getElementsByName("billing-address-radios")[0].checked = !0)
                        }),
                        b('input[name="billing-address-radios"]').on("change", function (a) {
                            if (0 == document.getElementById("new-billing-address-radio").checked) {
                                var c = b("#new-address-title");
                                c.hasClass("active") && c.trigger("click")
                            }
                        }),
                        b(".cvv-input").change(function () {
                            b("#saved-cvv").val(b(this).data("cardid") + "=" + b(this).val())
                        }),
                        d.ajaxForm(r),
                        b("#save-payment-field").on("change", function (a) {
                            var c = b("#default-payment-field")
                                , d = b("#qb-field");
                            0 == document.getElementById("save-payment-field").checked ? (c.prop("checked", !1),
                                d.prop("checked", !1),
                                c.prop("disabled", !0),
                                d.prop("disabled", !0)) : (c.prop("disabled", !1),
                                    d.prop("disabled", !1))
                        }),
                        b("#pa-save-payment-field").on("change", function (a) {
                            var c = b("#pa-default-payment-field")
                                , d = b("#pa-qb-field");
                            0 == document.getElementById("pa-save-payment-field").checked ? (c.prop("checked", !1),
                                d.prop("checked", !1),
                                c.prop("disabled", !0),
                                d.prop("disabled", !0)) : (c.prop("disabled", !1),
                                    d.prop("disabled", !1))
                        }),
                        document.getElementById("same-as-shipping").checked = !0,
                        b("#same-as-shipping").on("change", function (a) {
                            var c = b(".billing-address-container")
                                , d = b(".billing-email");
                            0 == document.getElementById("same-as-shipping").checked ? (d.slideUp(150),
                                c.slideDown(150),
                                k(),
                                b("#no-saved-addresses").length && !b("#new-address-title").hasClass("active") && b("#new-address-title").trigger("click")) : (c.slideUp(150),
                                    d.slideDown(150),
                                    b("#no-saved-addresses").length && b("#new-address-title").hasClass("active") && b("#new-address-title").trigger("click"))
                        }).trigger("change");
                    var q = b(".gift-cards")
                        , s = b(".gift-card-error")
                        , t = JSON.parse('{"errorMessages":["' + m.messages.giftCardError + '"]}')
                        , u = JSON.parse('{"errorMessages":["' + m.messages.giftCardPinError + '"]}')
                        , v = b("#gc-number")
                        , w = b("#gc-pin")
                        , x = {
                            dataType: "json",
                            beforeSubmit: function (d, e, f) {
                                b("#gift-card-add-form").find(".alert-box").remove(),
                                    b("#gift-card-remove-form").find(".alert-box").remove(),
                                    s.empty(),
                                    a[c].loader.showLoader()
                            },
                            success: function (d, e, f, g) {
                                if ("success" == e)
                                    if ("true" == d.success) {
                                        var h = b(".applied-gift-cards");
                                        "undefined" != typeof d.appliedGiftCards ? h.html(Mustache.render(n.appliedGiftCards, d)) : h.empty(),
                                            v.val(""),
                                            w.val(""),
                                            a[c].loader.hideLoader()
                                    } else
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.showErrors(g, d);
                                else
                                    a[c].loader.hideLoader(),
                                        a[c].utilities.form.ajaxError(f, e, "add gift card error:  Missing statusText parameter", g)
                            },
                            error: function (b, d, e, f) {
                                a[c].loader.hideLoader(),
                                    a[c].utilities.form.ajaxError(b, d, "add gift card error: " + e, f)
                            }
                        };
                    b("#use-gift-card").on("change", function (a) {
                        1 == document.getElementById("use-gift-card").checked ? q.slideDown(150) : q.slideUp(150)
                    }),
                        b("#apply-gift-card").on("click", function (a) {
                            a.preventDefault();
                            for (var c, d = v.val(), e = d.length, f = 1, g = 0, h = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]; e;)
                                c = parseInt(d.charAt(--e), 10),
                                    g += (f ^= 1) ? h[c] : c;
                            var i = g && g % 10 === 0;
                            "" == v.val().trim() || v.val().trim().length < 19 || parseInt(v.val().substr(0, 11)) < 98400004701 || parseInt(v.val().substr(0, 11)) > 98400004705 || !i ? s.html(Mustache.render(n.errorMessageTemplate, t)) : 4 !== w.val().trim().length ? s.html(Mustache.render(n.errorMessageTemplate, u)) : (b("#gc-number-hidden").val(v.val()),
                                b("#gc-pin-hidden").val(w.val()),
                                b("#gift-card-add-form").ajaxSubmit(x))
                        }),
                        p.on("click", ".remove-gift-card", function (a) {
                            a.preventDefault(),
                                b("#remove-gc-id").val(b(this).attr("data-id")),
                                b("#gift-card-remove-form").ajaxSubmit(x)
                        }),
                        p.on("click", ".use-bc-card", function (a) {
                            if (1 == document.getElementById("use-bc-card").checked) {
                                var c = b(this).attr("data-bcid");
                                b("#bc-id-hidden").val(c),
                                    b("#bc-card-add-form").ajaxSubmit()
                            } else {
                                var d = b(this).attr("data-pgid");
                                "" != d && (b("#remove-bc-id-hidden").val(d),
                                    b("#bc-card-remove-form").ajaxSubmit())
                            }
                        }),
                        p.on("click", ".use-mrc-card", function (a) {
                            if (1 == this.checked) {
                                var c = b(this).attr("data-mrcid");
                                b("#mrc-id-hidden").val(c),
                                    b("#mrc-card-add-form").ajaxSubmit()
                            } else
                                b("#mrc-card-remove-form").ajaxSubmit()
                        }),
                        b("#paypal-credit-button").length && b.ajax({
                            url: m.contextPath + "/sitewide/json/paypalToken.jsp",
                            dataType: "json",
                            cache: !1,
                            success: function (a) {
                                braintree.client.create({
                                    authorization: a.clientToken
                                }, function (c, d) {
                                    return c ? void console.error("Error creating client (credit):", c) : void braintree.paypalCheckout.create({
                                        client: d
                                    }, function (c, d) {
                                        return c ? void console.error("Error creating PayPal(credit) Checkout:", c) : void paypal.Button.render({
                                            env: a.braintreeEnvironment ? a.braintreeEnvironment : "sandbox",
                                            style: {
                                                size: "responsive",
                                                shape: "rect",
                                                label: "credit",
                                                tagline: !1
                                            },
                                            payment: function () {
                                                var b = {
                                                    flow: "checkout",
                                                    amount: a.amount,
                                                    currency: "USD",
                                                    enableShippingAddress: !0,
                                                    shippingAddressEditable: !1
                                                };
                                                return a.shippingAddress && (b.shippingAddressOverride = {
                                                    line1: a.shippingAddress.address1,
                                                    line2: a.shippingAddress.address2,
                                                    city: a.shippingAddress.city,
                                                    state: a.shippingAddress.state,
                                                    postalCode: a.shippingAddress.postalCode,
                                                    countryCode: a.shippingAddress.country,
                                                    recipientName: a.shippingAddress.firstName + " " + a.shippingAddress.lastName
                                                }),
                                                    d.createPayment(b)
                                            },
                                            onAuthorize: function (a, c) {
                                                return d.tokenizePayment(a).then(function (a) {
                                                    console.log("[Braintree(credit)] PayPal callback response:", a),
                                                        b("input[id=paypal-response-nonce]").val(a.nonce),
                                                        b("input[id=paypal-response-payment-type]").val(a.type),
                                                        a.details && (console.log("[Braintree(credit)] Response has details."),
                                                            console.log("[Braintree] Response details has details."),
                                                            b("input[id=paypal-response-payment-email]").val(a.details.email),
                                                            b("input[id=paypal-response-first-name]").val(a.details.firstName),
                                                            b("input[id=paypal-response-last-name]").val(a.details.lastName),
                                                            b("input[id=paypal-response-phone-number]").val(a.details.phone),
                                                            a.details.billingAddress ? (console.log("[Braintree(credit)] Response details has billing address."),
                                                                b("input[id=paypal-response-billing-country]").val(a.details.billingAddress.countryCode),
                                                                b("input[id=paypal-response-billing-region]").val(a.details.billingAddress.state),
                                                                b("input[id=paypal-response-billing-postal-code]").val(a.details.billingAddress.postalCode),
                                                                b("input[id=paypal-response-billing-city]").val(a.details.billingAddress.city),
                                                                b("input[id=paypal-response-billing-street-address]").val(a.details.billingAddress.line1),
                                                                b("input[id=paypal-response-billing-extended-address]").val(a.details.billingAddress.line2)) : console.log("[Braintree(credit)] No Billing address in response.")),
                                                        b("#paypal-submit").click()
                                                })
                                            },
                                            onCancel: function (a) {
                                                console.log("checkout.js payment(credit) cancelled", JSON.stringify(a, 0, 2))
                                            },
                                            onError: function (a) {
                                                console.error("checkout.js(credit) error", a)
                                            }
                                        }, "#paypal-credit-button").then(function () { })
                                    })
                                })
                            }
                        }),
                        b("#paypal-button").length && b.ajax({
                            url: m.contextPath + "/sitewide/json/paypalToken.jsp",
                            dataType: "json",
                            cache: !1,
                            success: function (a) {
                                braintree.client.create({
                                    authorization: a.clientToken
                                }, function (c, d) {
                                    return c ? void console.error("Error creating client:", c) : void braintree.paypalCheckout.create({
                                        client: d
                                    }, function (c, d) {
                                        return c ? void console.error("Error creating PayPal Checkout:", c) : void paypal.Button.render({
                                            env: a.braintreeEnvironment ? a.braintreeEnvironment : "sandbox",
                                            style: {
                                                size: "responsive",
                                                color: "blue",
                                                shape: "rect",
                                                label: "pay",
                                                tagline: !1
                                            },
                                            payment: function () {
                                                var b = {
                                                    flow: "checkout",
                                                    amount: a.amount,
                                                    currency: "USD",
                                                    enableShippingAddress: !0,
                                                    shippingAddressEditable: !1
                                                };
                                                return a.shippingAddress && (b.shippingAddressOverride = {
                                                    line1: a.shippingAddress.address1,
                                                    line2: a.shippingAddress.address2,
                                                    city: a.shippingAddress.city,
                                                    state: a.shippingAddress.state,
                                                    postalCode: a.shippingAddress.postalCode,
                                                    countryCode: a.shippingAddress.country,
                                                    recipientName: a.shippingAddress.firstName + " " + a.shippingAddress.lastName
                                                }),
                                                    d.createPayment(b)
                                            },
                                            onAuthorize: function (a, c) {
                                                return d.tokenizePayment(a).then(function (a) {
                                                    console.log("[Braintree] PayPal callback response:", a),
                                                        b("input[id=paypal-response-nonce]").val(a.nonce),
                                                        b("input[id=paypal-response-payment-type]").val(a.type),
                                                        a.details && (console.log("[Braintree] Response has details."),
                                                            console.log("[Braintree] Response details has details."),
                                                            b("input[id=paypal-response-payment-email]").val(a.details.email),
                                                            b("input[id=paypal-response-first-name]").val(a.details.firstName),
                                                            b("input[id=paypal-response-last-name]").val(a.details.lastName),
                                                            b("input[id=paypal-response-phone-number]").val(a.details.phone),
                                                            a.details.billingAddress ? (console.log("[Braintree] Response details has billing address."),
                                                                b("input[id=paypal-response-billing-country]").val(a.details.billingAddress.countryCode),
                                                                b("input[id=paypal-response-billing-region]").val(a.details.billingAddress.state),
                                                                b("input[id=paypal-response-billing-postal-code]").val(a.details.billingAddress.postalCode),
                                                                b("input[id=paypal-response-billing-city]").val(a.details.billingAddress.city),
                                                                b("input[id=paypal-response-billing-street-address]").val(a.details.billingAddress.line1),
                                                                b("input[id=paypal-response-billing-extended-address]").val(a.details.billingAddress.line2)) : console.log("[Braintree] No Billing address in response.")),
                                                        b("#paypal-submit").click()
                                                })
                                            },
                                            onCancel: function (a) {
                                                console.log("checkout.js payment cancelled", JSON.stringify(a, 0, 2))
                                            },
                                            onError: function (a) {
                                                console.error("checkout.js error", a)
                                            }
                                        }, "#paypal-button").then(function () { })
                                    })
                                })
                            }
                        }),
                        p.on("click", "#pa-apply-button-submit", function (d) {
                            d.preventDefault(),
                                a[c].loader.showLoader(),
                                e(),
                                b.ajax({
                                    url: m.contextPath + "/checkout/ajax/paAppProfileToken.jsp",
                                    cache: !1,
                                    dataType: "json",
                                    success: function (d) {
                                        if (a[c].loader.hideLoader(),
                                            d.success) {
                                            var e = b("[name=postBackRefId]")
                                                , g = e.val();
                                            e.val(g.substr(0, g.indexOf("|") + 1) + d.token),
                                                b("#submit-pa-form-sync").submit()
                                        } else
                                            console.log("error: Problem generating token"),
                                                f()
                                    },
                                    error: function (b) {
                                        console.log("error: ", b),
                                            a[c].loader.hideLoader(),
                                            f()
                                    }
                                })
                        }),
                        b("#payment-method-radio-jtvpa").length > 0 && document.getElementById("payment-method-radio-jtvpa").checked ? (b(".cc-form, .billing-address, .pp-form, .gc-form").hide(),
                            b(".pa-form, .non-paypal-button").show()) : b("#payment-method-radio-paypal").length > 0 && document.getElementById("payment-method-radio-paypal").checked ? (b(".cc-form, .billing-address, .pa-form, .gc-form").hide(),
                                b(".pp-form").show(),
                                b("#paypal-email").length || b(".non-paypal-button").hide()) : b("#payment-method-radio-gc").length > 0 && document.getElementById("payment-method-radio-gc").checked ? (b(".cc-form, .billing-address, .pa-form, .pp-form").hide(),
                                    b(".gc-form, .non-paypal-button").show()) : (b(".pa-form, .pp-form, .gc-form").hide(),
                                        b(".cc-form, .non-paypal-button").show()),
                        p.on("change.pa-promo-radio", '.pa-promos .radio input[type="radio"]', function () {
                            var d = b(this)
                                , e = d.parent().parent()
                                , f = "true" == d.attr("data-show-modal");
                            if (e.find("#pa-promos-header .error").remove(),
                                f && d.is(":checked")) {
                                b("#pa-promo-fallbackTerms").prop("value", !1);
                                var g = b(".pa-form [name=preferred-account-radios]:checked").val() || null
                                    , h = b("#pa-card").val() || null
                                    , i = b(this).attr("value")
                                    , j = document.getElementById("pa-promo-modal") ? b("#pa-promo-modal") : a[c].utilities.createModal("pa-promo-modal")
                                    , k = m.contextPath + "/checkout/ajax/paPromoModal.jsp"
                                    , l = g ? {
                                        promotionCode: i,
                                        paAccountRepoId: g
                                    } : {
                                            promotionCode: i,
                                            paAccount: h
                                        }
                                    , n = {
                                        url: k,
                                        method: "POST",
                                        data: l
                                    };
                                j.modal(n)
                            }
                        }),
                        p.on("click", "#pa-promo-modal #pa-promo-cancel, #pa-promo-modal .modal-close, #pa-promo-modal #overlay", function () {
                            b('body input[name="pa-promo-radios"]:checked').prop("checked", !1).blur(),
                                b("#pa-promo-fallbackTerms").prop("value", !1)
                        }),
                        p.on("click", "#pa-promo-agree", function () {
                            var a = b("[name=pa-promo-defaultTerms]").val();
                            b("#pa-promo-fallbackTerms").val(a)
                        }),
                        p.keydown(function (a) {
                            "Escape" === a.key && b('body input[name="pa-promo-radios"]:checked').prop("checked", !1)
                        }),
                        b(".alert-box.error").is(":visible") && b("html, body").animate({
                            scrollTop: b(".alert-box.error").offset().top - 200
                        }, "fast")
                },
                review: function () {
                    b("#method-submit, #method-submit2").click(function (d) {
                        b(this).addClass("disabled"),
                            a[c].loader.showLoader()
                    })
                }
            };
        a[c] = a[c] || {},
            a[c].checkout = s
    }(this, window.jQuery, "JTV"),
    function (a, b, c) {
        var d = (a[c] && a[c].config && a[c].config.loggingDebug,
            a[c].constants)
            , e = a[c].templates
            , f = b(window)
            , g = b("body")
            , h = {
                init: function () {
                    function e(a, c) {
                        a.preventDefault(),
                            c.hide();
                        var d = c.data("target");
                        b("#love-list-create-name-" + d).show(),
                            b("#name-" + d).focus()
                    }
                    function f(a) {
                        a.parents(".love-list-dropdown").find(".love-list-toggle").click()
                    }
                    function h(a) {
                        var b = a.find(".love-list-toggle");
                        a.find(".love-list-checkbox:checked").length > 0 ? b.addClass("active") : b.removeClass("active")
                    }
                    function i(d) {
                        var e = b("#name-" + d)
                            , f = e.val()
                            , g = e.data("sku-id")
                            , h = {
                                dataType: "json",
                                beforeSubmit: function (b, d, e) {
                                    a[c].loader.showLoader()
                                },
                                success: function (b, d, e, f) {
                                    "success" == d ? "true" == b.success ? window.location.reload() : (a[c].loader.hideLoader(),
                                        a[c].utilities.form.showErrors(f, b)) : (a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(e, d, "add to wish list error:  Missing statusText parameter", f))
                                },
                                error: function (b, d, e, f) {
                                    a[c].loader.hideLoader(),
                                        a[c].utilities.form.ajaxError(b, d, "add to wish list error: " + e, f)
                                }
                            };
                        f.length > 0 ? (b("#love-list-create-product-id").val(d),
                            b("#love-list-create-sku-id").val(g),
                            b("#love-list-create-name").val(f),
                            b("#create-love-list-form").ajaxSubmit(h)) : e.focus()
                    }
                    g.on("keypress", ".love-list-dropdown .dropdown-toggle span", function (a) {
                        13 === a.which && b(this).parent().click()
                    }),
                        g.on("click", ".show-love-list-input", function (a) {
                            e(a, b(this))
                        }).on("keypress", ".show-love-list-input", function (a) {
                            13 === a.which && e(a, b(this))
                        }),
                        g.on("click", ".love-list-close", function (a) {
                            f(b(this))
                        }).on("keypress", ".love-list-close", function (a) {
                            13 === a.which && f(b(this))
                        }),
                        g.on("click", ".submit-create-love-list", function () {
                            i(b(this).parents(".new-love-list-name").data("pid"))
                        }).on("keypress", ".submit-create-love-list", function (a) {
                            13 === a.which && i(b(this).parents(".new-love-list-name").data("pid"))
                        }).on("keypress", ".new-love-list-name-input", function (a) {
                            13 === a.which && i(b(this).parents(".new-love-list-name").data("pid"))
                        }),
                        g.on("click", ".love-list-checkbox", function (e) {
                            var f = b(this)
                                , g = f.val()
                                , i = f.data("gl-item-id")
                                , j = f.data("product-id")
                                , k = f.data("sku-id");
                            if (this.checked) {
                                var l = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (e, g, i, k) {
                                        "success" == g ? "true" == e.success ? (h(f.parents(".love-list-dropdown")),
                                            a[c].loader.hideLoader(),
                                            d.isTealiumEnabled && b.ajax({
                                                url: d.contextPath + "/sitewide/tagging/tealiumWishlistAdd.jsp?id=" + j,
                                                cache: !1,
                                                dataType: "json",
                                                success: function (a) {
                                                    utag.view(a)
                                                },
                                                error: function (a) {
                                                    console.log("could not get tealium wishlist add info: ", a)
                                                }
                                            })) : (a[c].loader.hideLoader(),
                                                a[c].utilities.form.showErrors(k, e)) : (a[c].loader.hideLoader(),
                                                    a[c].utilities.form.ajaxError(i, g, "add to wish list error:  Missing statusText parameter", k))
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(b, d, "add to wish list error: " + e, f)
                                    }
                                };
                                b("#love-list-add-product-id").val(j),
                                    b("#love-list-add-sku-id").val(k),
                                    b("#love-list-add-list-id").val(g),
                                    b("#add-to-love-list-form").ajaxSubmit(l)
                            } else {
                                var m = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (e, g, i, k) {
                                        "success" == g ? "true" == e.success ? (h(f.parents(".love-list-dropdown")),
                                            a[c].loader.hideLoader(),
                                            d.isTealiumEnabled && b.ajax({
                                                url: d.contextPath + "/sitewide/tagging/tealiumWishlistRemove.jsp?id=" + j,
                                                cache: !1,
                                                dataType: "json",
                                                success: function (a) {
                                                    utag.view(a)
                                                },
                                                error: function (a) {
                                                    console.log("could not get tealium wishlist remove info: ", a)
                                                }
                                            })) : (a[c].loader.hideLoader(),
                                                a[c].utilities.form.showErrors(k, e)) : (a[c].loader.hideLoader(),
                                                    a[c].utilities.form.ajaxError(i, g, "add to wish list error:  Missing statusText parameter", k))
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            a[c].utilities.form.ajaxError(b, d, "add to wish list error: " + e, f)
                                    }
                                };
                                b("#love-list-remove-item-id").val(i),
                                    b("#love-list-remove-sku-id").val(k),
                                    b("#love-list-remove-list-id").val(g),
                                    b("#remove-from-love-list-form").ajaxSubmit(m)
                            }
                        })
                },
                jewelSchoolVideo: function () {
                    var a = !1;
                    b(".slides"),
                        b(".slidesNav");
                    b(".site-wrapper").css("overflow", "hidden"),
                        b(".yt-playlist-slider").each(function (a, c) {
                            var d = "#" + c.id + " .slides"
                                , e = "#" + c.id + " .slidesNav";
                            b(d).slick({
                                slidesPerRow: 1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: !1,
                                centerMode: !1,
                                fade: !0,
                                asNavFor: e,
                                focusOnSelect: !0
                            }),
                                b(e).slick({
                                    asNavFor: d,
                                    dots: !1,
                                    infinite: !0,
                                    useTransform: !1,
                                    focusOnSelect: !0,
                                    centerMode: !1,
                                    vertical: !0,
                                    arrows: !0,
                                    responsive: [{
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2,
                                            infinite: !0,
                                            vertical: !1,
                                            arrows: !0,
                                            focusOnSelect: !0
                                        }
                                    }]
                                })
                        }),
                        window.onresize = function () {
                            0 == a && window.innerWidth <= 768 ? (b(".yt-playlist-slider").each(function (a, c) {
                                var d = "#" + c.id + " .slides"
                                    , e = "#" + c.id + " .slidesNav";
                                b(e).insertAfter(d)
                            }),
                                a = !0) : 1 == a && window.innerWidth > 768 && (b(".yt-playlist-slider").each(function (a, c) {
                                    var d = "#" + c.id + " .slides"
                                        , e = "#" + c.id + " .slidesNav";
                                    b(d).insertAfter(e)
                                }),
                                    a = !1)
                        }
                        ,
                        b(window).resize()
                },
                blog: function () {
                    function f() {
                        var d, f, g, h = t(), i = v(), j = b(".site-wrapper"), k = Mustache.render(e.blogHome);
                        j.append(k),
                            b.getScript("//d116tqlcqfmz3v.cloudfront.net/jewelrytv-707/carousel.js", function () {
                                Curalate.FanReels.Carousel.init({
                                    code: "jewelrytv"
                                })
                            });
                        for (var l = 0; l < h.responseJSON.posts.length; l++)
                            d = h.responseJSON.posts[l],
                                f = A(d.date),
                                b(".hero-container").append('<div class="hero-slide"><a href="/blog?pid=' + d.ID + '"><img src="' + d.featured_image + '" alt="' + d.title + '"></a> <div class="carousel-caption"><h3 class="carouselHeader"><a href="/blog?pid=' + d.ID + '">' + d.title + '</a></h3><p class="auth">by ' + d.author.name + '<span class="pipeSpacing">|</span>' + D(f) + '</p><p style="height: auto; margin-bottom: 0px; margin-top: -5px;"><a href="/blog?pid=' + d.ID + '">Continue Reading...</a></p></div></div>');
                        for (var m = 0; 6 > m; m++) {
                            d = i.responseJSON.posts[m],
                                f = A(d.date);
                            var n = d.title;
                            n.length > 56 && (n = n.substring(0, 56),
                                n += "&hellip;");
                            var o = Object.keys(d.categories);
                            g = d.categories[o[0]],
                                b(".blog-row").append('<div class="blog-tile"><div class="thumbnail" itemscope itemtype="https://schema.org/BlogPosting"><a href="/blog?pid=' + d.ID + '"><div class="imgThumb"><img src="' + d.featured_image + '" alt="' + d.title + '" itemprop="thumbnailUrl"></div></a><div class="caption"><h5><a href="/blog?catid=' + g.slug + '&offset=0">' + g.name + '</a></h5><a class="titleLink" href="/blog?pid=' + d.ID + '"><div class="titleContainer"><h3 class="title" itemprop="headline">' + n + '</h3></div></a><p class="auth">by <span itemprop="author">' + d.author.name + '</span><br><span itemprop="datePublished">' + D(f) + '</span></p><div class="excerpt" itemprop="description">' + d.excerpt + '</div></div><div class="blog-row-bottom btnShare"><a href="/blog?pid=' + d.ID + '"><div class="btn btn-default continueReading blogContinue">Continue Reading..</div></a></div></div></div>')
                        }
                        b(".blog-row").after('<div class="morePost"><a href="/blog?archive=true&afterDate=' + F().toISOString().substring(0, 10) + " &beforeDate=" + E().toISOString().substring(0, 10) + '">More Posts<i class="fa fa-caret-right fa-lg" aria-hidden="true"></i></a></div>'),
                            b(".hero-container").slick({
                                mobileFirst: !0,
                                dots: !0,
                                arrows: !1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                autoplay: !0,
                                autoplaySpeed: 5e3,
                                responsive: [{
                                    breakpoint: a[c].config.smallMax,
                                    settings: {
                                        dots: !1,
                                        arrows: !0
                                    }
                                }]
                            }),
                            j.append('<script type="text/javascript">var utag_data = utag_data || {}; utag_data.content_author = ""; utag_data.content_id = ""; utag_data.content_publish_date = ""; utag_data.content_title = ""; utag_data.country_code = "us"; utag_data.language_code="en"; utag_data.mcid = "XSB43700023455936722"; utag_data.page_name = "Blog Home"; utag_data.site_type="d"; utag_data.tealium_event="blog_view";</script>')
                    }
                    function g(a) {
                        var b, c = z();
                        parseInt(c.offset) > 0 && null != c.offset ? (b = u(a, c.offset),
                            n(b, a, c.offset)) : (b = u(a, 0),
                                n(b, a, 0))
                    }
                    function h(a) {
                        var c = o(a)
                            , d = Object.keys(c.responseJSON.categories)
                            , f = u(c.responseJSON.categories[d[0]].slug, 0);
                        JTV.ota.postJSON = c;
                        var g = Mustache.render(e.blogPost, c.responseJSON)
                            , h = b(".site-wrapper");
                        h.append(g);
                        for (var i = 0; i < Object.keys(JTV.ota.postJSON.responseJSON.categories).length; i++) {
                            var j = l(c, i)
                                , k = m(c, i);
                            b(".auth").append('<a class="catName" href="/blog?catid=' + j + '">' + k + " ")
                        }
                        b(".auth").append('<span itemprop="datePublished">' + D(new Date(c.responseJSON.date))),
                            b(".rightBar hr").after('<img class="authorPic" src="' + c.responseJSON.author.avatar_URL.replace("?s=96", "?s=150") + '" alt="' + c.responseJSON.author.name + '"/>'),
                            b(".rightBar .caption").prepend("<h3><span itemprop='author'>" + c.responseJSON.author.name + "</span></h3><a href='/blog?aid=" + c.responseJSON.author.ID + "&offset=0'>Read all of " + c.responseJSON.author.name.substr(0, c.responseJSON.author.name.indexOf(" ")) + "'s posts</a>");
                        for (var n = 0; 3 > n; n++) {
                            var p = f.responseJSON.posts[n]
                                , q = A(p.date)
                                , r = p.title;
                            r.length > 56 && (r = r.substring(0, 56),
                                r += "&hellip;");
                            var s = Object.keys(p.categories)
                                , t = p.categories[s[0]];
                            b(".rightBar").append('<div class="thumbnail" itemscope itemtype="https://schema.org/BlogPosting"><a href="/blog?pid=' + p.ID + '"><div class="imgThumb"><img src="' + p.featured_image + '" alt="' + p.title + '" itemprop="thumbnailUrl"></div></a><div class="caption"><h5><a href="/blog?catid=' + t.slug + '&offset=0">' + t.name + '</a></h5><a class="titleLink" href="/blog?pid=' + p.ID + '"><div class="titleContainer"><h3 class="title" itemprop="headline">' + r + '</h3></div></a><p class="auth">by <span itemprop="author">' + p.author.name + '</span><br><span itemprop="datePublished">' + D(q) + '</span></p><div class="excerpt" itemprop="description">' + p.excerpt + '</div></div><div class="blog-row-bottom btnShare"><a href="/blog?pid=' + p.ID + '"><div class="btn btn-default continueReading blogContinue">Continue Reading..</div></a></div></div>')
                        }
                        h.append('<script type="text/javascript">var utag_data = utag_data || {}; utag_data.content_author = "' + c.responseJSON.author.name + '"; utag_data.content_id = "' + a + '"; utag_data.content_publish_date = "' + D(new Date(c.responseJSON.date)) + '"; utag_data.content_title = "' + c.responseJSON.title + '"; utag_data.country_code = "us"; utag_data.language_code="en"; utag_data.mcid = "XSB43700023455936722"; utag_data.page_name = "Blog Post"; utag_data.site_type="d"; utag_data.tealium_event="blog_view";</script>')
                    }
                    function i(a, b) {
                        if (parseInt(b.offset) > 0 && null != b.offset) {
                            var c = w(a, b.offset);
                            JTV.ota.authorJSON = c,
                                p(c, a, b.offset)
                        } else {
                            var c = w(a, 0);
                            JTV.ota.authorJSON = c,
                                p(c, a, 0)
                        }
                    }
                    function j(a, b) {
                        var c = x(a, b);
                        q(c, a, b)
                    }
                    function k(a, c) {
                        var d = y(a, c);
                        JTV.ota.searchJSON = d;
                        var f = Mustache.render(e.blogCategory)
                            , g = b(".site-wrapper");
                        g.append(f);
                        var h, i, j;
                        if (d.responseJSON.posts.length > 0)
                            for (var k = 0; k < d.responseJSON.posts.length; k++) {
                                h = d.responseJSON.posts[k],
                                    i = A(h.date);
                                var l = h.title;
                                l.length > 56 && (l = l.substring(0, 56),
                                    l += "&hellip;");
                                var m = Object.keys(h.categories);
                                j = h.categories[m[0]],
                                    b(".blog-row").append('<div class="blog-tile"><div class="thumbnail" itemscope itemtype="https://schema.org/BlogPosting"><a href="/blog?pid=' + h.ID + '"><div class="imgThumb"><img src="' + h.featured_image + '" alt="' + h.title + '" itemprop="thumbnailUrl"></div></a><div class="caption"><h5><a href="/blog?catid=' + j.slug + '&offset=0">' + j.name + '</a></h5><a class="titleLink" href="/blog?pid=' + h.ID + '"><div class="titleContainer"><h3 class="title" itemprop="headline">' + l + '</h3></div></a><p class="auth">by <span itemprop="author">' + h.author.name + '</span><br><span itemprop="datePublished">' + D(i) + '</span></p><div class="excerpt" itemprop="description">' + h.excerpt + '</div></div><div class="blog-row-bottom btnShare"><a href="/blog?pid=' + h.ID + '"><div class="btn btn-default continueReading blogContinue">Continue Reading..</div></a></div></div></div>')
                            }
                        else
                            b(".blog-row").html('<h3 style="padding: 30px 0;">No search results for: ' + a.replace(/\+/g, " ") + "</h3>");
                        if (d.responseJSON.posts.length > 0) {
                            if (b(".blog-row").after('<div class="catPrevNext"></div>'),
                                c >= 12) {
                                var n = parseInt(c) - 12;
                                b(".catPrevNext").prepend('<a style="margin-right: 5px;" href="/blog?search=' + a + "&offset=" + n + '"><img src="/resources/images/left-arrow.png">Previous</a><span class="catPipe">|</span>')
                            }
                            if (c >= 0) {
                                var n = parseInt(c) + 12;
                                b(".catPrevNext").append('<a style="margin-left: 5px;" href="/blog?search=' + a + "&offset=" + n + '"><img src="/resources/images/right-arrow.png">Next</a>')
                            }
                        }
                    }
                    function l(a, b) {
                        var c = Object.keys(a.responseJSON.categories)[b]
                            , d = a.responseJSON.categories[c].slug;
                        return d
                    }
                    function m(a, b) {
                        var c = Object.keys(a.responseJSON.categories)[b]
                            , d = a.responseJSON.categories[c].name;
                        return d
                    }
                    function n(a, c, d) {
                        var f = Mustache.render(e.blogCategory)
                            , g = b(".site-wrapper");
                        g.append(f);
                        var h, i;
                        Object.keys(a.responseJSON.posts[0].categories);
                        for (i in a.responseJSON.posts[0].categories)
                            a.responseJSON.posts[0].categories[i].slug == c && (h = a.responseJSON.posts[0].categories[i].name);
                        var j, k, l;
                        g.prepend('<h1 style="text-align: center;">' + h + "</h1>");
                        for (var m = 0; m < a.responseJSON.posts.length; m++) {
                            j = a.responseJSON.posts[m],
                                k = A(j.date);
                            var n = j.title;
                            n.length > 56 && (n = n.substring(0, 56),
                                n += "&hellip;");
                            var o = Object.keys(j.categories);
                            l = j.categories[o[0]],
                                b(".blog-row").append('<div class="blog-tile"><div class="thumbnail" itemscope itemtype="https://schema.org/BlogPosting"><a href="/blog?pid=' + j.ID + '"><div class="imgThumb"><img src="' + j.featured_image + '" alt="' + j.title + '" itemprop="thumbnailUrl"></div></a><div class="caption"><h5><a href="/blog?catid=' + l.slug + '&offset=0">' + l.name + '</a></h5><a class="titleLink" href="/blog?pid=' + j.ID + '"><div class="titleContainer"><h3 class="title" itemprop="headline">' + n + '</h3></div></a><p class="auth">by <span itemprop="author">' + j.author.name + '</span><br><span itemprop="datePublished">' + D(k) + '</span></p><div class="excerpt" itemprop="description">' + j.excerpt + '</div></div><div class="blog-row-bottom btnShare"><a href="/blog?pid=' + j.ID + '"><div class="btn btn-default continueReading blogContinue">Continue Reading..</div></a></div></div></div>')
                        }
                        if (b(".blog-row").after('<div class="catPrevNext"></div>'),
                            d >= 12) {
                            var p = parseInt(d) - 12;
                            b(".catPrevNext").prepend('<a style="margin-right: 5px;" href="/blog?catid=' + c + "&offset=" + p + '"><img src="/resources/images/left-arrow.png">Previous</a><span class="catPipe">|</span>')
                        }
                        if (d >= 0) {
                            var p = parseInt(d) + 12;
                            b(".catPrevNext").append('<a style="margin-left: 5px;" href="/blog?catid=' + c + "&offset=" + p + '"><img src="/resources/images/right-arrow.png">Next</a>')
                        }
                        0 == d && b(".catPrevNext").hide(),
                            g.append('<script type="text/javascript">var utag_data = utag_data || {}; utag_data.content_author = ""; utag_data.content_id = ""; utag_data.content_publish_date = ""; utag_data.content_title = ""; utag_data.content_category = "' + h + '"; utag_data.country_code = "us"; utag_data.language_code="en"; utag_data.mcid = "XSB43700023455936722"; utag_data.page_name = "Blog Category Landing"; utag_data.site_type="d"; utag_data.tealium_event="blog_view";</script>')
                    }
                    function o(a) {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/" + a,
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function p(a, c, d) {
                        JTV.ota.authorJSON = a;
                        var f = Mustache.render(e.blogAuthor)
                            , g = b(".site-wrapper");
                        g.append(f),
                            JTV.ota.authorJSON = a,
                            b(".blog-row").append("<h1>Meet " + a.responseJSON.posts[0].author.name + "</h1>"),
                            b(".blog-row").append('<div class="post-box" style="display: block;"></div>');
                        for (var h = 0; h < a.responseJSON.posts.length; h++) {
                            var i = a.responseJSON.posts[h]
                                , j = A(i.date)
                                , k = i.title;
                            k.length > 56 && (k = k.substring(0, 56),
                                k += "&hellip;");
                            var l = Object.keys(i.categories)
                                , m = i.categories[l[0]];
                            b(".post-box").append('<div class="blog-tile archivePost"><div class="thumbnail" itemscope itemtype="https://schema.org/BlogPosting"><a href="/blog?pid=' + i.ID + '"><div class="imgThumb"><img src="' + i.featured_image + '" alt="' + i.title + '" itemprop="thumbnailUrl"></div></a><div class="caption"><h5><a href="/blog?catid=' + m.slug + '&offset=0">' + m.name + '</a></h5><a class="titleLink" href="/blog?pid=' + i.ID + '"><div class="titleContainer"><h3 class="title" itemprop="headline">' + k + '</h3></div></a><p class="auth">by <span itemprop="author">' + i.author.name + '</span><br><span itemprop="datePublished">' + D(j) + '</span></p><div class="excerpt" itemprop="description">' + i.excerpt + '</div></div><div class="blog-row-bottom btnShare"><a href="/blog?pid=' + i.ID + '"><div class="btn btn-default continueReading blogContinue">Continue Reading..</div></a></div></div></div>')
                        }
                        b(".blog-row").append('<div class="author-tile"><div class="thumbnail" style="margin-bottom: 30px;"><div class="authorTitle" style="font-size: 14px;">Author</div><hr class="author-hr" style="margin: 0px; border-color: #ddd;"><img class="authorPic" src="' + a.responseJSON.posts[0].author.avatar_URL.replace("?s=96", "?s=150") + '" alt="' + a.responseJSON.posts[0].author.name + '"/><div class="caption"><h3>' + a.responseJSON.posts[0].author.name + "</h3></div></div></div>"),
                            g.append('<script type="text/javascript">var utag_data = utag_data || {}; utag_data.content_author = "' + a.responseJSON.posts[0].author.name + '"; utag_data.content_id = ""; utag_data.content_publish_date = ""; utag_data.content_title = ""; utag_data.country_code = "us"; utag_data.language_code="en"; utag_data.mcid = "XSB43700023455936722"; utag_data.page_name = "Blog Author Page"; utag_data.site_type="d"; utag_data.tealium_event="blog_view";</script>')
                    }
                    function q(a, c, d) {
                        var f = Mustache.render(e.blogArchive)
                            , g = b(".site-wrapper");
                        g.css("overflow", "hidden"),
                            g.append(f);
                        var h = !0
                            , i = new Date;
                        if (null != a.responseJSON.posts)
                            for (var j = a.responseJSON.posts.length, k = j > 16 ? 16 : j, l = 0; k > l; l++) {
                                var m = a.responseJSON.posts[l]
                                    , n = m.title;
                                n.length > 56 && (n = n.substring(0, 56),
                                    n += "&hellip;");
                                var o = Object.keys(m.categories)
                                    , p = m.categories[o[0]]
                                    , q = A(m.date);
                                b(".postsBlock").append('<div class="archive-tile"><div class="thumbnailSM" itemscope itemtype="https://schema.org/BlogPosting"><a href="/blog?pid=' + m.ID + '"><div class="imgThumb"><img src="' + m.featured_image + '" alt="' + m.title + '" itemprop="thumbnailUrl"></div></a><div class="caption"><h5><a href="/blog?catid=' + p.slug + '&offset=0">' + p.name + '</a></h5><a class="titleLink" href="/blog?pid=' + m.ID + '"><div class="titleContainer"><h3 class="title" itemprop="headline">' + n + '</h3></div></a><p class="auth"><span itemprop="datePublished">' + D(q) + '</span></p></div><div class="blog-row-bottom btnShare"><a href="/blog?pid=' + m.ID + '"><div class="btn btn-default continueReading blogContinue">Continue Reading..</div></a></div></div></div>')
                            }
                        for (; i.getFullYear() >= "2008";)
                            1 == h ? (r(i.getMonth() + 1, i),
                                h = !1) : (i.setMonth(1),
                                    i.setDate(1),
                                    r(12, i)),
                                i.setFullYear(i.getFullYear() - 1);
                        g.append('<script type="text/javascript">var utag_data = utag_data || {}; utag_data.content_author = ""; utag_data.content_id = ""; utag_data.content_publish_date = ""; utag_data.content_title = ""; utag_data.country_code = "us"; utag_data.language_code="en"; utag_data.mcid = "XSB43700023455936722"; utag_data.page_name = "Blog Archives Page"; utag_data.site_type="d"; utag_data.tealium_event="blog_view";</script>')
                    }
                    function r(a, c) {
                        for (var d = b(b.parseHTML("<p>" + c.getFullYear() + "<br></p>")), e = a; e > 0; e--) {
                            var f = new Date(c.getFullYear(), e, 0);
                            b(d).append('<a href="/blog?archive=true&afterDate=' + f.getFullYear() + "-" + e + "-1&beforeDate=" + f.getFullYear() + "-" + e + "-" + f.getDate() + '">' + C(e - 1) + "</a> ")
                        }
                        b(".archiveRight").append(d)
                    }
                    function s() {
                        b(".imgThumb").each(function (a, c) {
                            b(this).height(.47 * b(this).width()),
                                b(this).height() > b(this).find("img").height() && (b(this).find("img").css("height", "100%"),
                                    b(this).find("img").css("width", "auto"))
                        }),
                            b(".carousel-inner>.item").width() < 768 ? b(".carousel-inner>.item").height(.47 * b(this).width() + 206) : b(".carousel-inner>.item").height(.47 * b(this).width())
                    }
                    function t() {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/?category=Featured",
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function u(a, c) {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/?category=" + a + "&offset=" + c + "&number=12",
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function v() {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/?number=6&order_by=date",
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function w(a, c) {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/?author=" + a + "&offset=" + c,
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function x(a, c) {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/?after=" + a + "&before=" + c,
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function y(a, c) {
                        return b.ajax({
                            url: d.wordpressAPIDomain + "posts/?search=" + a + "&offset=" + c,
                            async: !1,
                            dataType: "json",
                            error: function (a) { }
                        })
                    }
                    function z() {
                        var a = {};
                        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (b, c, d) {
                            a[c] = d
                        });
                        return a
                    }
                    function A(a) {
                        var b = new Date(a.slice(0, 4), a.slice(5, 7), a.slice(8, 10));
                        return B(b)
                    }
                    function B(a) {
                        var b = a;
                        return b.setMonth(a.getMonth() - 1),
                            b.setDate(a.getDate()),
                            b
                    }
                    function C(a) {
                        var b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        return b[a]
                    }
                    function D(a) {
                        var b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                            , c = a.getDate()
                            , d = a.getMonth()
                            , e = a.getFullYear();
                        return b[d] + " " + c + ", " + e
                    }
                    function E() {
                        return new Date
                    }
                    function F() {
                        var a = new Date
                            , b = new Date(a.getFullYear(), a.getMonth(), 1);
                        return b
                    }
                    function G(a) {
                        a.setDate(a.getDate());
                        var b = a.getDate()
                            , c = a.getMonth() + 1
                            , d = a.getFullYear();
                        return d + "-" + c + "-" + b
                    }
                    b(document).ready(function () {
                        var a = window.location.pathname.split("/")
                            , c = z();
                        if (b("#search_button").click(function () {
                            b("#searchBox").toggle()
                        }),
                            b("#search_button_sm").click(function () {
                                b("#searchBox").toggle()
                            }),
                            "" == window.location.search && "archive" != a[a.length - 1].toLowerCase() && "search" != a[a.length - 1].toLowerCase())
                            f();
                        else if (-1 != window.location.search.indexOf("catid")) {
                            var c = z();
                            g(c.catid)
                        } else if (-1 != window.location.search.indexOf("pid")) {
                            var c = z();
                            h(c.pid)
                        } else if (-1 != window.location.search.indexOf("aid")) {
                            var c = z();
                            i(c.aid, c)
                        } else if (void 0 != c.archive)
                            if (null == c.afterDate || null == c.beforeDate) {
                                var d = new Date;
                                j(G(new Date(d.getFullYear(), d.getMonth()), 1), G(d))
                            } else
                                j(c.afterDate, c.beforeDate);
                        else if (void 0 != c.search) {
                            var c = z()
                                , e = c.search;
                            k(e, null != c.offset ? c.offset : 0)
                        } else
                            f()
                    }),
                        b(document).delay(1e3).ready(function () {
                            s(),
                                b(window).resize(function () {
                                    s()
                                }),
                                b(".blogpost.post p").each(function () {
                                    var a = b(this);
                                    "&nbsp;" == b.trim(a.html()) && a.remove()
                                })
                        })
                },
                showPromoPage: function () {
                    b(document).ready(function () {
                        b(".slides").slick({
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            centerMode: !1,
                            fade: !0,
                            asNavFor: ".slidesNav"
                        }),
                            b(".slidesNav").slick({
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                asNavFor: ".slides",
                                dots: !1,
                                centerMode: !1,
                                focusOnSelect: !0,
                                slidesPerRow: 4
                            })
                    })
                },
                channelFinder: function () {
                    function e(a) {
                        b.ajax({
                            url: d.contextPath + a,
                            cache: !1,
                            dataType: "xml",
                            success: function (a) {
                                var c = "";
                                b(a).find("broadcast_affiliates").children().each(function () {
                                    var a = b(this).attr("provider");
                                    console.log(a);
                                    var d = b(this).attr("channel");
                                    console.log(d);
                                    var e = b(this).find("showtime").attr("days");
                                    console.log(e);
                                    var f = b(this).find("showtime").attr("start_time");
                                    console.log(f);
                                    var g = b(this).find("showtime").attr("end_time");
                                    console.log(g),
                                        c += "24 hrs" == f ? '<div class="channel-finder-results-row"><div class="cfrr-channel">' + a + " " + d + '</div><div class="cfrr-day">' + e + '</div><div class="cfrr-time">24 hours a day</div></div>' : '<div class="channel-finder-results-row"><div class="cfrr-channel">' + a + " " + d + '</div><div class="cfrr-day">' + e + '</div><div class="cfrr-time">' + f + "-" + g + "</div></div>"
                                }),
                                    c = "<h2>You'll Find Us On:</h2>" + c,
                                    b(".channel-finder-results-wrapper").html(c)
                            },
                            error: function (a) {
                                console.log("error: ", a)
                            }
                        })
                    }
                    b("#error-msg-zip").hide(),
                        g.on("click", "#find-channels", function (d) {
                            d.preventDefault();
                            var f = b("#postal");
                            "" !== f.val() && a[c].validationRules.postal.check.call(this, f.val(), f) ? (b("#error-msg-zip").hide(),
                                e("/ota/xml/channelFinderHelper.jsp?zip=" + f.val() + ".xml")) : b("#error-msg-zip").show()
                        });
                    var f = a[c].utilities.getURLParameter(window.location.href, "zip")
                        , h = /[0-9]{5}/;
                    f.match(h) && b("#find-channels").click()
                },
                liveViewer: function () {
                    function f(b) {
                        var d = b || 0;
                        j.on("init", function () {
                            initSlickClamp(j)
                        }).on("breakpoint", function () {
                            initSlickClamp(j)
                        }).slick({
                            mobileFirst: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !1,
                            autoplay: !1,
                            autoplaySpeed: 5e3,
                            initialSlide: d,
                            responsive: [{
                                breakpoint: a[c].config.smallMax,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: a[c].config.mediumMax,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }]
                        })
                    }
                    function h() {
                        var g = b(".live-video-title .title")
                            , h = b(".live-video-title .start-time")
                            , i = b(".live-video-title .end-time");
                        b.ajax({
                            url: l,
                            cache: !1,
                            dataType: "json",
                            success: function (k) {
                                if (g.html(k.name),
                                    h.html(k.startTimeForDisplay),
                                    i.html(k.endTimeForDisplay),
                                    window.innerWidth > a[c].config.smallMax) {
                                    var l = Mustache.render(e.otaCurrentItemFull, k.onAirProduct);
                                    b(".live-coa-item").html(l)
                                } else
                                    b.ajax({
                                        url: d.contextPath + "/ota/ajax/showAiringNowSmall.jsp",
                                        data: {
                                            id: k.onAirProduct.id
                                        },
                                        cache: !1,
                                        dataType: "html",
                                        success: function (a) {
                                            b(".live-coa-item").html(a),
                                                b("[data-tooltip]").each(function () {
                                                    var a = b(this)
                                                        , c = a.attr("data-hover") || b.fn.tooltip.defaults.trigger_on_hover
                                                        , d = {
                                                            trigger_on_hover: c
                                                        };
                                                    b(this).tooltip(d)
                                                }),
                                                b("[data-quantify]").quantify(),
                                                b("[data-dropdown]").dropdown()
                                        },
                                        error: function (a) {
                                            console.log("error: ", a)
                                        }
                                    });
                                if (j.html(Mustache.render(e.otaRecentItems, k)),
                                    f(),
                                    "undefined" != typeof k.onAirProduct) {
                                    k.onAirProduct.id
                                }
                            },
                            error: function (a) {
                                console.log("error: ", a)
                            }
                        })
                    }
                    function i() {
                        var g = b(".live-video-title .title")
                            , h = b(".live-video-title .start-time")
                            , i = b(".live-video-title .end-time");
                        b.ajax({
                            url: l,
                            cache: !1,
                            dataType: "json",
                            success: function (k) {
                                if (g.html(k.name),
                                    h.html(k.startTimeForDisplay),
                                    i.html(k.endTimeForDisplay),
                                    window.innerWidth > a[c].config.smallMax) {
                                    var l = Mustache.render(e.otaCurrentItemFull, k.onAirProduct);
                                    b(".live-coa-item").html(l)
                                } else
                                    b.ajax({
                                        url: d.contextPath + "/ota/ajax/showAiringNowSmall.jsp",
                                        data: {
                                            id: k.onAirProduct.id
                                        },
                                        cache: !1,
                                        dataType: "html",
                                        success: function (a) {
                                            b(".live-coa-item").html(a),
                                                b("[data-tooltip]").each(function () {
                                                    var a = b(this)
                                                        , c = a.attr("data-hover") || b.fn.tooltip.defaults.trigger_on_hover
                                                        , d = {
                                                            trigger_on_hover: c
                                                        };
                                                    b(this).tooltip(d)
                                                }),
                                                b("[data-quantify]").quantify(),
                                                b("[data-dropdown]").dropdown()
                                        },
                                        error: function (a) {
                                            console.log("error: ", a)
                                        }
                                    });
                                var m = j.slick("slickCurrentSlide");
                                j.slick("slickGetOption", "slidesToScroll");
                                if (j.slick("unslick"),
                                    j.html(Mustache.render(e.otaRecentItems, k)),
                                    f(m),
                                    "undefined" != typeof k.onAirProduct) {
                                    k.onAirProduct.id
                                }
                            },
                            error: function (a) {
                                console.log("error: ", a)
                            }
                        })
                    }
                    var j = b(".oai-recent-items-slider")
                        , k = b("#show-id").attr("data-show-id")
                        , l = d.airingNowOutputDir + "/showAiringNow-1-est.json";
                    "0" !== k && (l = d.contextPath + "/ota/json/showAiringNow.jsp?channel=1&isAtg=true&showId=" + k),
                        h(),
                        "0" === k && setInterval(i, 1e3 * d.onAirItemRefreshInterval),
                        g.off("click", ".size-tile").off("keypress", ".size-tile").on("click", ".size-tile", function (a) {
                            a.preventDefault();
                            var c = b(this);
                            c.hasClass("active") || (b("#product-size-group .size-tile").removeClass("active"),
                                c.toggleClass("active"),
                                b(".selected-size").html(c.data("size")),
                                b(".custom-size-price").html(c.data("price")),
                                b("#add-to-cart-submit, #quick-buy-submit").removeClass("disabled"),
                                c.data("is-custom-size") ? b("#add-to-cart-sku").attr("data-custom-size-id", c.data("id")) : b("#add-to-cart-sku").attr("data-custom-size-id", ""));
                            var d = b(this).attr("data-id").trim();
                            b("#add-to-cart-sku").attr("data-id", d)
                        }).on("keypress", ".size-tile", function (a) {
                            var c = b(this);
                            13 !== a.which || c.hasClass("unavailable") || c.trigger("click")
                        }),
                        g.off("click", "#custom-size-toggle").off("keypress", "#custom-size-toggle").on("click", "#custom-size-toggle", function (a) {
                            b(this).toggleClass("active"),
                                b("#custom-size-group").slideToggle(150)
                        }).on("keypress", "#custom-size-toggle", function (a) {
                            var c = b(this);
                            13 === a.which && c.trigger("click")
                        }),
                        g.off("click", "#add-to-cart-submit").on("click", "#add-to-cart-submit", function (e) {
                            if (!b(this).hasClass("disabled")) {
                                var f, g, h, i = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (e, f, g, h) {
                                        if ("success" == f)
                                            if ("true" == e.success) {
                                                if (b.ajax({
                                                    url: d.contextPath + "/sitewide/includes/repriceMiniCartContent.jsp",
                                                    dataType: "html",
                                                    cache: !1,
                                                    success: function (d) {
                                                        b(".mini-cart .utility-nav-dropdown-expanded").html(d),
                                                            b("#mobile-mini-cart").html(d),
                                                            a[c].profileController.getProfileStatus(!0)
                                                    }
                                                }),
                                                    b("#quick-view-modal").modal("hide"),
                                                    b("html, body").animate({
                                                        scrollTop: 0
                                                    }, 200),
                                                    window.innerWidth > a[c].config.smallMax ? (b(".mini-cart").trigger("mouseover"),
                                                        setTimeout(function () {
                                                            b(".mini-cart").trigger("mouseout")
                                                        }, 4500)) : b("#mobile-bag-icon").click(),
                                                    d.isTealiumEnabled) {
                                                    var i = h.find("#add-item-stretch-pay").val()
                                                        , j = h.find("#add-item-product-id").val()
                                                        , k = h.find("#add-item-sku-id").val()
                                                        , l = h.find("#add-item-quantity").val();
                                                    b.ajax({
                                                        url: d.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                                        data: {
                                                            source: "live_viewer",
                                                            stretchPay: i,
                                                            productId: j,
                                                            skuId: k,
                                                            quantity: l
                                                        },
                                                        cache: !1,
                                                        dataType: "json",
                                                        success: function (a) {
                                                            utag.link(a)
                                                        },
                                                        error: function (a) {
                                                            console.log("error: ", a)
                                                        }
                                                    })
                                                }
                                                a[c].loader.hideLoader()
                                            } else
                                                a[c].loader.hideLoader(),
                                                    UTILITIES.form.showErrors(h, e);
                                        else
                                            a[c].loader.hideLoader(),
                                                UTILITIES.form.ajaxError(g, f, "add to cart error:  Missing statusText parameter", h)
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            UTILITIES.form.ajaxError(b, d, "add to cart error: " + e, f)
                                    }
                                }, j = b("#quantity").val().trim(), k = b("#add-to-cart-sku"), l = k.attr("data-id").trim(), m = k.attr("data-custom-size-id").trim();
                                document.getElementById("stretch-pay") && (f = document.getElementById("stretch-pay").checked),
                                    document.getElementById("jewel-safe") && (g = document.getElementById("jewel-safe").checked),
                                    document.getElementById("appraisal") && (h = document.getElementById("appraisal").checked),
                                    f && b("#add-item-stretch-pay").val(f),
                                    g && b("#add-item-jewel-safe").val(g),
                                    h && b("#add-item-appraisal").val(h),
                                    b("#add-item-sku-id").val(l),
                                    b("#add-item-quantity").val(j),
                                    b("#add-item-custom-size-id").val(m),
                                    b("#add-item-form").ajaxSubmit(i)
                            }
                        }),
                        g.off("click", "#quick-buy-submit").on("click", "#quick-buy-submit", function (a) {
                            var c, e, f, g = b("#quick-buy-form"), h = b("#add-to-cart-sku"), i = b("#quantity").val().trim(), j = h.attr("data-id").trim(), k = b("#quick-buy-product-id").val().trim(), l = h.attr("data-custom-size-id").trim();
                            document.getElementById("stretch-pay") && (c = document.getElementById("stretch-pay").checked),
                                document.getElementById("jewel-safe") && (e = document.getElementById("jewel-safe").checked),
                                document.getElementById("appraisal") && (f = document.getElementById("appraisal").checked),
                                c && b("#quick-buy-stretch-pay").val(c),
                                e && b("#quick-buy-jewel-safe").val(e),
                                f && b("#quick-buy-appraisal").val(f),
                                b("#quick-buy-sku-id").val(j),
                                b("#quick-buy-quantity").val(i),
                                b("#quick-buy-custom-size-id").val(l),
                                d.isTealiumEnabled ? b.ajax({
                                    url: d.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                    data: {
                                        source: "product",
                                        isQB: "true",
                                        stretchPay: c,
                                        productId: k,
                                        skuId: j,
                                        quantity: i
                                    },
                                    cache: !1,
                                    dataType: "json",
                                    success: function (a) {
                                        utag.link(a),
                                            g.submit()
                                    },
                                    error: function (a) {
                                        console.log("error: ", a),
                                            g.submit()
                                    }
                                }) : g.submit()
                        })
                },
                jtv2Viewer: function () {
                    function a() {
                        b.ajax({
                            url: d.contextPath + "/ota/json/jtv2ShowData.jsp?hrsBehind=" + k,
                            cache: !1,
                            dataType: "json",
                            success: function (a) {
                                if (a.hasOwnProperty("dayShows") && a.dayShows.length > 0)
                                    if (a.dayShows[0].hasOwnProperty("error"))
                                        console.log(a.dayShows[0].error);
                                    else
                                        for (var b = 0; 2 > b; b++) {
                                            var d = a.dayShows[b]
                                                , k = d.startTimeForDisplay || ""
                                                , l = d.name || "";
                                            if (0 == b) {
                                                var m = d.endTimeForDisplay || ""
                                                    , n = d.showTurntableUrl || null
                                                    , o = d.showItemsUrl || null;
                                                c.text(l),
                                                    e.text(k),
                                                    f.text(m),
                                                    h.removeClass("hide"),
                                                    n && i.removeClass("hide").html('<a href="' + n + '" tabindex="-1"><span class="icon icon-turntable" aria-hidden="true"></span> View Turntable items</a>'),
                                                    o && g.removeClass("hide").html('<a href="' + o + '" tabindex="-1"><span class="icon icon-eye" aria-hidden="true"></span> View All Show Items</a>')
                                            } else
                                                j.removeClass("hide").html('<strong>Coming Up Next: </strong> <span class="next-vid-title"><span class="time">' + k + "</span> " + l + "</span>")
                                        }
                                else
                                    console.log("There was a problem retrieving data.")
                            },
                            error: function (a) {
                                console.log("error: ", a)
                            }
                        })
                    }
                    var c = b(".live-video-title .title")
                        , e = b(".live-video-title .start-time")
                        , f = b(".live-video-title .end-time")
                        , g = b(".live-video-title .show-items")
                        , h = b(".live-video-title > p")
                        , i = b(".live-video-title .show-turntable")
                        , j = b(".live-video-footer")
                        , k = b("#jtv2-video").attr("data-hours-behind");
                    a(),
                        setInterval(a, 6e3 * d.onAirItemRefreshInterval)
                },
                extraLiveViewer: function () {
                    function f(b) {
                        var d = b || 0;
                        j.on("init", function () {
                            initSlickClamp(j)
                        }).on("breakpoint", function () {
                            initSlickClamp(j)
                        }).slick({
                            mobileFirst: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !1,
                            autoplay: !1,
                            autoplaySpeed: 5e3,
                            initialSlide: d,
                            responsive: [{
                                breakpoint: a[c].config.smallMax,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: a[c].config.mediumMax,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }]
                        })
                    }
                    function h() {
                        var g = b(".live-video-title .title")
                            , h = b(".live-video-title .start-time")
                            , i = b(".live-video-title .end-time");
                        b("#list-handle").click(),
                            b.ajax({
                                url: d.airingNowOutputDir + "/showAiringNow-2-est.json",
                                cache: !1,
                                dataType: "json",
                                success: function (k) {
                                    var l = new Date(k.startTime + " UTC")
                                        , m = new Date(k.endTime + " UTC");
                                    if (g.html(k.name),
                                        "Invalid Date" == l ? (b(".live-video-title p").remove(),
                                            b(".live-video-title").append("<p></p>"),
                                            b(".live-video-title p").html('<span class="start-time"></span>'),
                                            b(".live-video-title h1").empty(),
                                            b(".live-video-title h1").append("<h1></h1>"),
                                            b(".live-video-title h1").html("Shows Daily"),
                                            b(".live-video-title p span").html("Check programming schedule"),
                                            b(".live-video-title p span").css("text-transform", "none"),
                                            g.html("Shows daily")) : (h.html(l.toLocaleString("en-US", {
                                                hour: "numeric",
                                                minute: "numeric",
                                                hour12: !0
                                            })),
                                                i.html(m.toLocaleString("en-US", {
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                    hour12: !0
                                                }))),
                                        window.innerWidth > a[c].config.smallMax) {
                                        var n = Mustache.render(e.otaCurrentItemFull, k.onAirProduct);
                                        b(".live-coa-item").html(n)
                                    } else
                                        b.ajax({
                                            url: d.contextPath + "/ota/ajax/showAiringNowSmall.jsp",
                                            data: {
                                                id: k.onAirProduct.id
                                            },
                                            cache: !1,
                                            dataType: "html",
                                            success: function (a) {
                                                b(".live-coa-item").html(a),
                                                    b("[data-tooltip]").each(function () {
                                                        var a = b(this)
                                                            , c = a.attr("data-hover") || b.fn.tooltip.defaults.trigger_on_hover
                                                            , d = {
                                                                trigger_on_hover: c
                                                            };
                                                        b(this).tooltip(d)
                                                    }),
                                                    b("[data-quantify]").quantify(),
                                                    b("[data-dropdown]").dropdown()
                                            },
                                            error: function (a) {
                                                console.log("error: ", a)
                                            }
                                        });
                                    if (j.html(Mustache.render(e.otaRecentItems, k)),
                                        f(),
                                        "undefined" != typeof k.onAirProduct) {
                                        k.onAirProduct.id
                                    }
                                },
                                error: function (a) {
                                    console.log("error: ", a)
                                }
                            })
                    }
                    function i() {
                        var g = b(".live-video-title .title")
                            , h = b(".live-video-title .start-time")
                            , i = b(".live-video-title .end-time");
                        b("#list-handle").click(),
                            b.ajax({
                                url: d.airingNowOutputDir + "/showAiringNow-2-est.json",
                                cache: !1,
                                dataType: "json",
                                success: function (k) {
                                    var l = new Date(k.startTime + " UTC")
                                        , m = new Date(k.endTime + " UTC");
                                    if ("Invalid Date" == l ? (b(".live-video-title p").remove(),
                                        b(".live-video-title").append("<p></p>"),
                                        b(".live-video-title p").html('<span class="start-time"></span>'),
                                        b(".live-video-title h1").empty(),
                                        b(".live-video-title h1").append("<h1></h1>"),
                                        b(".live-video-title h1").html("Shows Daily"),
                                        b(".live-video-title p span").html("Check programming schedule"),
                                        b(".live-video-title p span").css("text-transform", "none"),
                                        g.html("Shows daily")) : (g.html(k.name),
                                            h.html(l.toLocaleString("en-US", {
                                                hour: "numeric",
                                                minute: "numeric",
                                                hour12: !0
                                            })),
                                            i.html(m.toLocaleString("en-US", {
                                                hour: "numeric",
                                                minute: "numeric",
                                                hour12: !0
                                            }))),
                                        window.innerWidth > a[c].config.smallMax) {
                                        var n = Mustache.render(e.otaCurrentItemFull, k.onAirProduct);
                                        b(".live-coa-item").html(n)
                                    } else
                                        b.ajax({
                                            url: d.contextPath + "/ota/ajax/showAiringNowSmall.jsp",
                                            data: {
                                                id: k.onAirProduct.id
                                            },
                                            cache: !1,
                                            dataType: "html",
                                            success: function (a) {
                                                b(".live-coa-item").html(a),
                                                    b("[data-tooltip]").each(function () {
                                                        var a = b(this)
                                                            , c = a.attr("data-hover") || b.fn.tooltip.defaults.trigger_on_hover
                                                            , d = {
                                                                trigger_on_hover: c
                                                            };
                                                        b(this).tooltip(d)
                                                    }),
                                                    b("[data-quantify]").quantify(),
                                                    b("[data-dropdown]").dropdown()
                                            },
                                            error: function (a) {
                                                console.log("error: ", a)
                                            }
                                        });
                                    var o = j.slick("slickCurrentSlide");
                                    j.slick("slickGetOption", "slidesToScroll");
                                    if (j.slick("unslick"),
                                        j.html(Mustache.render(e.otaRecentItems, k)),
                                        f(o),
                                        "undefined" != typeof k.onAirProduct) {
                                        k.onAirProduct.id
                                    }
                                },
                                error: function (a) {
                                    console.log("error: ", a)
                                }
                            })
                    }
                    var j = b(".oai-recent-items-slider");
                    h(),
                        setInterval(i, 1e3 * d.onAirItemRefreshInterval),
                        g.off("click", ".size-tile").off("keypress", ".size-tile").on("click", ".size-tile", function (a) {
                            a.preventDefault();
                            var c = b(this);
                            c.hasClass("active") || (b("#product-size-group .size-tile").removeClass("active"),
                                c.toggleClass("active"),
                                b(".selected-size").html(c.data("size")),
                                b(".custom-size-price").html(c.data("price")),
                                b("#add-to-cart-submit, #quick-buy-submit").removeClass("disabled"),
                                c.data("is-custom-size") ? b("#add-to-cart-sku").attr("data-custom-size-id", c.data("id")) : b("#add-to-cart-sku").attr("data-custom-size-id", ""));
                            var d = b(this).attr("data-id").trim();
                            b("#add-to-cart-sku").attr("data-id", d)
                        }).on("keypress", ".size-tile", function (a) {
                            var c = b(this);
                            13 !== a.which || c.hasClass("unavailable") || c.trigger("click")
                        }),
                        g.off("click", "#custom-size-toggle").off("keypress", "#custom-size-toggle").on("click", "#custom-size-toggle", function (a) {
                            b(this).toggleClass("active"),
                                b("#custom-size-group").slideToggle(150)
                        }).on("keypress", "#custom-size-toggle", function (a) {
                            var c = b(this);
                            13 === a.which && c.trigger("click")
                        }),
                        g.off("click", "#add-to-cart-submit").on("click", "#add-to-cart-submit", function (e) {
                            if (!b(this).hasClass("disabled")) {
                                var f, g, h, i = {
                                    dataType: "json",
                                    beforeSubmit: function (b, d, e) {
                                        a[c].loader.showLoader()
                                    },
                                    success: function (e, f, g, h) {
                                        if ("success" == f)
                                            if ("true" == e.success) {
                                                if (b.ajax({
                                                    url: d.contextPath + "/sitewide/includes/repriceMiniCartContent.jsp",
                                                    dataType: "html",
                                                    cache: !1,
                                                    success: function (d) {
                                                        b(".mini-cart .utility-nav-dropdown-expanded").html(d),
                                                            b("#mobile-mini-cart").html(d),
                                                            a[c].profileController.getProfileStatus(!0)
                                                    }
                                                }),
                                                    b("#quick-view-modal").modal("hide"),
                                                    b("html, body").animate({
                                                        scrollTop: 0
                                                    }, 200),
                                                    window.innerWidth > a[c].config.smallMax ? (b(".mini-cart").trigger("mouseover"),
                                                        setTimeout(function () {
                                                            b(".mini-cart").trigger("mouseout")
                                                        }, 4500)) : b("#mobile-bag-icon").click(),
                                                    d.isTealiumEnabled) {
                                                    var i = h.find("#add-item-stretch-pay").val()
                                                        , j = h.find("#add-item-product-id").val()
                                                        , k = h.find("#add-item-sku-id").val()
                                                        , l = h.find("#add-item-quantity").val();
                                                    b.ajax({
                                                        url: d.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                                        data: {
                                                            source: "jtv_extra",
                                                            stretchPay: i,
                                                            productId: j,
                                                            skuId: k,
                                                            quantity: l
                                                        },
                                                        cache: !1,
                                                        dataType: "json",
                                                        success: function (a) {
                                                            utag.link(a)
                                                        },
                                                        error: function (a) {
                                                            console.log("error: ", a)
                                                        }
                                                    })
                                                }
                                                a[c].loader.hideLoader()
                                            } else
                                                a[c].loader.hideLoader(),
                                                    UTILITIES.form.showErrors(h, e);
                                        else
                                            a[c].loader.hideLoader(),
                                                UTILITIES.form.ajaxError(g, f, "add to cart error:  Missing statusText parameter", h)
                                    },
                                    error: function (b, d, e, f) {
                                        a[c].loader.hideLoader(),
                                            UTILITIES.form.ajaxError(b, d, "add to cart error: " + e, f)
                                    }
                                }, j = b("#quantity").val().trim(), k = b("#add-to-cart-sku"), l = k.attr("data-id").trim(), m = k.attr("data-custom-size-id").trim();
                                document.getElementById("stretch-pay") && (f = document.getElementById("stretch-pay").checked),
                                    document.getElementById("jewel-safe") && (g = document.getElementById("jewel-safe").checked),
                                    document.getElementById("appraisal") && (h = document.getElementById("appraisal").checked),
                                    f && b("#add-item-stretch-pay").val(f),
                                    g && b("#add-item-jewel-safe").val(g),
                                    h && b("#add-item-appraisal").val(h),
                                    b("#add-item-sku-id").val(l),
                                    b("#add-item-quantity").val(j),
                                    b("#add-item-custom-size-id").val(m),
                                    b("#add-item-form").ajaxSubmit(i)
                            }
                        }),
                        g.off("click", "#quick-buy-submit").on("click", "#quick-buy-submit", function (a) {
                            var c, e, f, g = b("#quick-buy-form"), h = b("#add-to-cart-sku"), i = b("#quantity").val().trim(), j = h.attr("data-id").trim(), k = b("#quick-buy-product-id").val().trim(), l = h.attr("data-custom-size-id").trim();
                            document.getElementById("stretch-pay") && (c = document.getElementById("stretch-pay").checked),
                                document.getElementById("jewel-safe") && (e = document.getElementById("jewel-safe").checked),
                                document.getElementById("appraisal") && (f = document.getElementById("appraisal").checked),
                                c && b("#quick-buy-stretch-pay").val(c),
                                e && b("#quick-buy-jewel-safe").val(e),
                                f && b("#quick-buy-appraisal").val(f),
                                b("#quick-buy-sku-id").val(j),
                                b("#quick-buy-quantity").val(i),
                                b("#quick-buy-custom-size-id").val(l),
                                d.isTealiumEnabled ? b.ajax({
                                    url: d.contextPath + "/sitewide/tagging/tealiumCartAdd.jsp",
                                    data: {
                                        source: "product",
                                        isQB: "true",
                                        stretchPay: c,
                                        productId: k,
                                        skuId: j,
                                        quantity: i
                                    },
                                    cache: !1,
                                    dataType: "json",
                                    success: function (a) {
                                        utag.link(a),
                                            g.submit()
                                    },
                                    error: function (a) {
                                        console.log("error: ", a),
                                            g.submit()
                                    }
                                }) : g.submit()
                        })
                },
                programGuide: function () {
                    function f() {
                        b("#pg-showHostList").val(s)
                    }
                    function h() {
                        b(".pg-show-container").removeClass("filteredCell")
                    }
                    function i(a, c, f) {
                        p = 0;
                        f = "",
                            b.ajax({
                                url: d.contextPath + "/ota/json/programGuide.jsp",
                                data: {
                                    channel: a,
                                    timeZone: c
                                },
                                cache: !1,
                                dataType: "json",
                                success: function (a) {
                                    n = a;
                                    for (var c = n.threeDaysShows, d = 0; d < c.length; d++)
                                        for (var g = c[d], h = 0; h < g.eachDayShows.length; h++) {
                                            var i = g.eachDayShows[h].host1Name
                                                , j = g.eachDayShows[h].host2Name;
                                            void 0 !== i && "" !== i && -1 === o.indexOf(i) && o.push(i),
                                                void 0 !== j && "" !== j && -1 === o.indexOf(j) && o.push(j)
                                        }
                                    b("#program-guide-show-host").html(Mustache.render(e.showHosts, {
                                        hosts: o.sort()
                                    })),
                                        f = s,
                                        l(n, f),
                                        m()
                                },
                                error: function (a) {
                                    console.log("error: ", a)
                                }
                            })
                    }
                    function j(a, b) {
                        var c = a.name
                            , d = a.description
                            , e = a.hostDescription
                            , f = a.host1Name
                            , g = a.host2Name
                            , h = !1;
                        return -1 !== c.indexOf(b) ? !0 : -1 !== d.indexOf(b) ? !0 : -1 !== e.indexOf(b) ? !0 : -1 !== f.indexOf(b) ? !0 : -1 !== g.indexOf(b) ? !0 : h
                    }
                    function k(a, c) {
                        b(".pg-show").empty(),
                            b("ul.show-listing").each(function (e) {
                                var f = a[e];
                                b(this).find("li.day-heading").html(f.day),
                                    b.each(b(this).find("li.pg-show"), function (a, e) {
                                        var g = b(this);
                                        b.each(f.eachDayShows, function (e, f) {
                                            var h = parseInt(f.rowPos);
                                            a == h && ("" !== c ? (g.html('<div class="pg-show-container showDur-' + f.showDuration + '"><div class="pg-show-title"><h3>' + f.showType + "</h3><p>" + f.name + '</p></div><div class="show-hosts">' + (f.host1Name ? '<img src="' + d.imageServerUrl + "/media/jtv-site/page-images/hosts/" + f.host1Name.replace(/\s+/g, "-").toLowerCase() + '.jpg" alt="' + f.host1Name + '" />' : "") + (f.host2Name ? '<img src="' + d.imageServerUrl + "/media/jtv-site/page-images/hosts/" + f.host2Name.replace(/\s+/g, "-").toLowerCase() + '.jpg" alt="' + f.host2Name + '" />' : "") + "</div></div>"),
                                                b(".show-hosts img").error(function () {
                                                    b(this).attr("src", d.imageServerUrl + "/media/jtv-site/page-images/hosts/missing.png"),
                                                        b(this).attr("alt", "Missing Image")
                                                }),
                                                j(f, c) || g.find(".pg-show-container").addClass("filteredCell")) : (g.html('<div class="pg-show-container showDur-' + f.showDuration + '"><div class="pg-show-title"><h3>' + f.showType + "</h3><p>" + f.name + '</p></div><div class="show-hosts">' + (f.host1Name ? '<img src="' + d.imageServerUrl + "/media/jtv-site/page-images/hosts/" + f.host1Name.replace(/\s+/g, "-").toLowerCase() + '.jpg" alt="' + f.host1Name + '" />' : "") + (f.host2Name ? '<img src="' + d.imageServerUrl + "/media/jtv-site/page-images/hosts/" + f.host2Name.replace(/\s+/g, "-").toLowerCase() + '.jpg" alt="' + f.host2Name + '" />' : "") + "</div></div>"),
                                                    b(".show-hosts img").error(function () {
                                                        b(this).hide()
                                                    })))
                                        })
                                    })
                            })
                    }
                    function l(a, b) {
                        var c = a.threeDaysShows.filter(function (a, b) {
                            var c = a.colPos;
                            return c >= p && p + 3 > c
                        });
                        k(c, b)
                    }
                    function m() {
                        b("#program-guide-show-host option").each(function () {
                            for (var a = b(this).text().toLowerCase().split(" "), c = 0; c < a.length; c++)
                                a[c] = a[c].charAt(0).toUpperCase() + a[c].slice(1);
                            var d = a.join(" ");
                            "Dawn Page-tesh" === d ? d = "Dawn Tesh" : "Casey Johnson" === d ? d = "Casey Taylor" : "Heidi Kouns" === d ? d = "Heidi Williams" : "Scott Hood" === d ? d = "Scott Parker" : "Kristie Rowan" === d ? d = "Kristie Carson" : "Mandy Steinbacher" === d ? d = "Mandy Bradshaw" : "Wendy Caldwell" === d ? d = "Wendy Williams" : "Nikki Coggins" === d && (d = "Nikki Rouleau"),
                                b(this).html(d)
                        })
                    }
                    var n = ""
                        , o = []
                        , p = 0
                        , q = "";
                    if (window.location.href.indexOf("?host=") > -1) {
                        var r = a[c].utilities.getURLParameter(window.location.search.substring(1), "host")
                            , s = window.unescape(r);
                        i("1", "EST", s),
                            setTimeout(f, 1e3)
                    } else
                        i("1", "EST", q),
                            setTimeout(h, 900);
                    g.on("change", "#pg-chList", function () {
                        function a() {
                            b(".pg-show-container").removeClass("filteredCell")
                        }
                        var c = b(this).val()
                            , d = g.find("#pg-tzList").val();
                        q = "",
                            i(c, d, q),
                            setTimeout(a, 300)
                    }),
                        g.on("change", "#pg-tzList", function () {
                            function a() {
                                b(".pg-show-container").removeClass("filteredCell")
                            }
                            var c = g.find("#pg-chList").val()
                                , d = b(this).val();
                            i(c, d, q),
                                setTimeout(a, 300)
                        }),
                        g.on("change", "#pg-showHostList", function () {
                            q = b(this).val(),
                                l(n, q)
                        }),
                        g.on("click", ".icon-angle-left", function () {
                            g.find("#pg-chList").val(),
                                g.find("#pg-tzList").val();
                            (p > 0 || -3 + p >= -2 - n.maxOffset) && (p-- ,
                                l(n, q)),
                                0 > p && -3 + p < -2 - n.maxOffset && b(this).hide(),
                                b(".icon-angle-right").show()
                        }),
                        g.on("click", ".icon-angle-right", function () {
                            p > 0 && p + 3 >= n.maxOffset && b(this).hide(),
                                (0 > p || p + 3 <= n.maxOffset) && (p++ ,
                                    l(n, q)),
                                b(".icon-angle-left").show()
                        })
                },
                gemopedia: function () {
                    b(".menu-list a").click(function (a) {
                        b(".gemopedia-section").addClass("hide"),
                            b("#gem" + b(this).attr("id")).removeClass("hide"),
                            b(".dropdown-menu").hide(),
                            b(".dropdown").removeClass("active")
                    }),
                        b("#autocomplete").autocomplete({
                            lookup: gemopedia,
                            onSelect: function (a) {
                                window.location.href = window.location.protocol + "//" + window.location.host + "/library/gemopedia/" + a.data
                            }
                        })
                },
                gemopediaFact: function () {
                    function d() {
                        var d = b(".gem-promo-callout .equalHeight")
                            , e = window.innerWidth;
                        if (d.each(function (a) {
                            b(this).removeAttr("style")
                        }),
                            e > a[c].config.smallMax) {
                            for (var f = [], g = 0; g < d.length / 3; g++)
                                f[g] = 0;
                            d.each(function (a) {
                                var c = b(this).outerHeight()
                                    , d = Math.floor(a / 3);
                                c > f[d] && (f[d] = c)
                            }),
                                d.each(function (a) {
                                    b(this).outerHeight(f[Math.floor(a / 3)])
                                })
                        }
                    }
                    var e = b("p.minimize");
                    e.each(function () {
                        var a = b(this).text();
                        a.length < 450 || b(this).html(a.slice(0, 450) + '<span> &hellip; </span><a href="#" class="minimizedMore">[More <span class="icon icon-plus" aria-hidden="true"></span>]</a><span style="display:none;">' + a.slice(450, a.length) + ' <a href="#" class="minimizedLess">[Less <span class="icon icon-minus" aria-hidden="true"></span>]</a></span>')
                    }),
                        b("a.minimizedMore", e).click(function (a) {
                            a.preventDefault(),
                                b(this).hide().prev().hide(),
                                b(this).next().show()
                        }),
                        b("a.minimizedLess", e).click(function (a) {
                            a.preventDefault(),
                                b(this).parent().hide().prev().show().prev().show()
                        }),
                        b(".gemopedia-heading.fact.right img:nth-child(2)").css("display", "none"),
                        b(".image-buttons button").click(function (a) {
                            b(".image-buttons button.active").removeClass("active").toggleClass("primary secondary"),
                                b(this).addClass("active").toggleClass("primary secondary"),
                                b(this).is(".roughButton.active") ? (b("img.polished").hide(),
                                    b("img.rough").show()) : (b("img.polished").show(),
                                        b("img.rough").hide())
                        }),
                        b(".gem-spectra-slider").slick({
                            mobileFirst: !0,
                            dots: !1,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }),
                        b(".gem-videos-slider").slick({
                            mobileFirst: !0,
                            dots: !1,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            responsive: [{
                                breakpoint: a[c].config.smallMax,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: a[c].config.mediumMax,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }]
                        }),
                        b(".gem-videos-slider .slick-arrow").click(function () {
                            b(".gem-videos-slider iframe").each(function (a) {
                                b(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                            })
                        }),
                        f.resize(b.throttle(250, function () {
                            d()
                        })).resize()
                },
                gemstoneGlossary: function () {
                    b(".menu-list li a").click(function (a) {
                        var c = b(this).attr("id");
                        b(".gemopedia-section").fadeOut(300),
                            b("#gem" + c).delay(300).fadeIn(300),
                            b(".dropdown-menu").hide(),
                            b(".dropdown").removeClass("active")
                    })
                },
                airingNow: function () {
                    function e() {
                        var a = b(".on-demand.watch-live").parent().parent().parent().next()
                            , c = a.children(":first").attr("data-showid")
                            , d = "https://cdn.jwplayer.com/v2/playlists/";
                        d += i(),
                            b.ajax({
                                url: d,
                                dataType: "json",
                                success: function (b) {
                                    for (var d = b.playlist, e = !1, f = 0; f < d.length; f++)
                                        d[f].showId === c && (e = !0);
                                    e || a.find(".airing-now-show").find(".on-demand a").hide()
                                },
                                error: function (a) {
                                    console.log("error: ", a)
                                }
                            })
                    }
                    function h(e, f, h, i, j) {
                        b.ajax({
                            url: d.contextPath + f,
                            data: {
                                timeZone: h,
                                day: i
                            },
                            cache: !1,
                            dataType: "html",
                            beforeSend: function () {
                                b("ul.show-listing").hide(),
                                    a[c].loader.showLoader()
                            },
                            success: function (d) {
                                var f = b(d);
                                a[c].loader.hideLoader(),
                                    b(".airing-now-header").html(f.find(".airing-now-header").html()),
                                    b(".airing-now-copy").html(f.find(".airing-now-copy").html());
                                var h = f.find(".coa-item").data("pid");
                                if ("undefined" != typeof window.certona ? window.certona.itemid = h : (window.certona = window.certona || {},
                                    window.certona.itemid = h),
                                    j)
                                    b(".may-we-recommended .product-slider").hasClass("slick-initialized") || k();
                                else {
                                    ("onLoad" === e || e.parents().is('[class*="time-zone-dropdown"]')) && b(".date-dropdown .dropdown-menu").html(f.find(".date-dropdown .dropdown-menu").html()),
                                        b(".airing-now-show-picker").html(f.find(".airing-now-show-picker").html());
                                    var i = b(".airing-now-show-picker");
                                    i.hasClass("slick-initialized") && i.slick("unslick"),
                                        window.location.href.indexOf("view=list") > -1 ? b(".airing-now-show-picker").addClass("list-view") : (b(".airing-now-show-picker").removeClass("list-view"),
                                            setTimeout(m, 2e3)),
                                        b("ul.show-listing").show(),
                                        "onLoad" === e && b('.date-dropdown a[data-sortvalue="0"]').trigger("click", ["onLoad"]),
                                        g.trigger("shows-loaded")
                                }
                            },
                            error: function (a) {
                                console.log("error: ", a)
                            }
                        })
                    }
                    function i() {
                        var a = {
                            Monday: "nr7sbEc3",
                            Tuesday: "qq7K57eV",
                            Wednesday: "V8O4N6ux",
                            Thursday: "VK7hoN1U",
                            Friday: "CeF6Mi4J",
                            Saturday: "W6fFDCTm",
                            Sunday: "k8QTofEx"
                        }
                            , c = new Array(7);
                        c[0] = "Sunday",
                            c[1] = "Monday",
                            c[2] = "Tuesday",
                            c[3] = "Wednesday",
                            c[4] = "Thursday",
                            c[5] = "Friday",
                            c[6] = "Saturday";
                        var d = b("#date-dropdown-title").children("span").html().substring(0, b("#date-dropdown-title").children("span").html().indexOf(","));
                        if ("" == d) {
                            var e = new Date;
                            d = c[e.getDay()]
                        }
                        return a[d]
                    }
                    function j() {
                        var a = {
                            Monday: "nr7sbEc3",
                            Tuesday: "qq7K57eV",
                            Wednesday: "V8O4N6ux",
                            Thursday: "VK7hoN1U",
                            Friday: "CeF6Mi4J",
                            Saturday: "W6fFDCTm",
                            Sunday: "k8QTofEx"
                        }
                            , c = new Array(7);
                        c[0] = "Sunday",
                            c[1] = "Monday",
                            c[2] = "Tuesday",
                            c[3] = "Wednesday",
                            c[4] = "Thursday",
                            c[5] = "Friday",
                            c[6] = "Saturday";
                        var d = b("#date-dropdown-title").children("span").html().substring(0, b("#date-dropdown-title").children("span").html().indexOf(","));
                        if ("" == d) {
                            var e = new Date;
                            d = c[e.getDay()]
                        }
                        var f = a[d];
                        b(".on-demand a").each(function () {
                            var a = this + "&playlistID=" + f;
                            b(this).attr("href", a)
                        })
                    }
                    function k() {
                        var b = a[c].certona.callbackObj;
                        b.hasOwnProperty("air_rr") && a[c].certona.recommendations(b.air_rr)
                    }
                    function l(d) {
                        var e = ".airing-now-show-wrapper"
                            , f = b(e)
                            , g = window.innerWidth;
                        if ("undefined" != typeof d && (f = d.find(e)),
                            f.each(function (a) {
                                b(this).removeAttr("style")
                            }),
                            g > a[c].config.smallMax) {
                            for (var h = [], i = 0; i < f.length / 2; i++)
                                h[i] = 0;
                            f.each(function (a) {
                                var c = b(this).outerHeight()
                                    , d = Math.floor(a / 2);
                                c > h[d] && (h[d] = c + 40)
                            }),
                                f.each(function (a) {
                                    b(this).outerHeight(h[Math.floor(a / 2)])
                                })
                        }
                    }
                    function m() {
                        window.location.href.indexOf("view=list") < 0 && n.on("init", function () {
                            initSlickClamp(n)
                        }).on("breakpoint", function () {
                            initSlickClamp(n)
                        }).slick({
                            mobileFirst: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !1,
                            autoplay: !1,
                            responsive: [{
                                breakpoint: a[c].config.smallMax,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: a[c].config.mediumMax,
                                settings: "unslick"
                            }]
                        })
                    }
                    l(),
                        h("onLoad", "/ota/airingNowHelper.jsp", "EST", "0"),
                        g.on("click", ".time-zone-dropdown a", function (a) {
                            a.preventDefault();
                            var c = b(this)
                                , d = b(".date-dropdown a.active").data("sortvalue") || "0"
                                , e = c.data("sortvalue");
                            b(".time-zone-dropdown .dropdown-toggle span").html(c.text().trim()),
                                b(".time-zone-dropdown a").removeClass("active"),
                                c.addClass("active"),
                                b(".time-zone-dropdown .dropdown-menu").hide(),
                                b(".time-zone-dropdown").removeClass("active"),
                                h(b(this), "/ota/airingNowHelper.jsp", e, d)
                        }),
                        g.on("click", ".date-dropdown a", function (a, c) {
                            a.preventDefault();
                            var d = b(this)
                                , e = d.data("sortvalue")
                                , f = b(".time-zone-dropdown a.active").data("sortvalue") || "EST";
                            b(".date-dropdown .dropdown-toggle span.select-day").html(d.text().trim()),
                                b(".date-dropdown a").removeClass("active"),
                                d.addClass("active"),
                                b(".date-dropdown .dropdown-menu").hide(),
                                b(".date-dropdown").removeClass("active"),
                                "onLoad" !== c && h(b(this), "/ota/airingNowHelper.jsp", f, e)
                        }),
                        g.on("click", ".airing-now-show", function () {
                            var a = (b(this),
                                b(".date-dropdown a.active").data("sortvalue") || "0")
                                , c = b(".time-zone-dropdown a.active").data("sortvalue") || "EST";
                            b(".airing-now-show").removeClass("live-now"),
                                b(this).addClass("live-now"),
                                h(b(this), "/ota/airingNowHelper.jsp?showId=" + b(this).data("showid"), c, a, !0)
                        });
                    var n = b(".airing-now-show-picker");
                    g.on("shows-loaded", function () {
                        n.hasClass("slick-initialized") && n.slick("unslick"),
                            m(),
                            b(".may-we-recommended .product-slider").hasClass("slick-initialized") || k(),
                            j(),
                            b(b(".airing-now-show-wrapper:not(.upcoming)")[0]).find(".airing-now-show").click(),
                            -1 != b("#date-dropdown-title")[0].innerText.indexOf("Today") && e()
                    }),
                        f.on("resize", b.throttle(250, function () {
                            var b = window.innerWidth;
                            n.hasClass("slick-initialized") && b > a[c].config.mediumMax ? n.slick("unslick") : !n.hasClass("slick-initialized") && b < a[c].config.largeMin && m()
                        })).resize();
                    var o = (b(".product-grid"),
                        b(".product-grid-view"))
                        , p = b(".product-list-view");
                    p.on("click", function () {
                        p.addClass("active"),
                            p.attr("aria-pressed", !0),
                            o.attr("aria-pressed", !1),
                            o.removeClass("active"),
                            b(".airing-now-copy").hide(),
                            b(".airing-now-menu").addClass("expanded"),
                            window.innerWidth < a[c].config.mediumMin && n.slick("destroy")
                    }),
                        o.on("click", function () {
                            p.removeClass("active"),
                                o.addClass("active"),
                                p.attr("aria-pressed", !1),
                                o.attr("aria-pressed", !0),
                                b(".airing-now-copy").show(),
                                b(".airing-now-menu").removeClass("expanded"),
                                window.innerWidth < a[c].config.mediumMin && n.slick("init")
                        }),
                        window.location.href.indexOf("view=list") > -1 && (p.addClass("active"),
                            o.removeClass("active"),
                            b(".airing-now-copy").hide(),
                            b(".airing-now-menu").addClass("expanded"),
                            window.innerWidth < a[c].config.mediumMin && n.slick("destroy")),
                        b(".airing-now-show").removeClass("live-now"),
                        b(".airing-now-show-wrapper:nth-child(2) .airing-now-show").addClass("live-now")
                },
                jewelSchoolVideos: function () {
                    function a() {
                        b(".embed-container").each(function () {
                            b(this).hide()
                        })
                    }
                    function c() {
                        b(".jsv-heading").each(function () {
                            b(this).hide()
                        })
                    }
                    b(".menu-list li a").click(function (d) {
                        a(),
                            c();
                        var e = b(this).parent().index();
                        b(".embed-container").eq(e).show(200, function () {
                            setTimeout(function () {
                                b(".ytp-playlist-menu-button").trigger("click")
                            }, 2e3)
                        }),
                            b(".jsv-heading").eq(e).show()
                    }),
                        a(),
                        c()
                }
            };
        a[c] = a[c] || {},
            a[c].ota = h
    }(this, window.jQuery, "JTV");
