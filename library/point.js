function PointJS(Ta, Ua, xb, Rc) {
    this._logo = "http://pointjs.ru/PjsMin.png";
    var k = window,
        z = this,
        J = !1,
        Ca = "fixed",
        Ub = 0,
        Vb = 0,
        yb = 100,
        Wb = function (a) {
            a = a.getBoundingClientRect();
            return {
                y: a.top + k.pageYOffset,
                x: a.left + k.pageXOffset
            }
        },
        Dc = function (a) {
            for (var b = 1; a;) b += a.style.zIndex, a = a.offsetParent;
            return b
        };
    if (1 === arguments.length) {
        J = arguments[0];
        var Xb = Wb(J);
        Ub = Xb.x;
        Vb = Xb.y;
        Ta = J.offsetWidth;
        Ua = J.offsetHeight;
        Ca = "absolute";
        yb = Dc(J)
    }
    var Da = !0,
        zb = !0,
        Yb = !0,
        ha = !1,
        Ea = !0,
        m = Ta,
        n = Ua,
        ka = Ta,
        la = Ua,
        G = m / 2,
        H = n / 2,
        ma = 1,
        na = 1,
        e = {
            x: 0,
            y: 0
        },
        t = {
            fillStyle: "black",
            strokeStyle: "black",
            globalAlpha: 1,
            font: "serif",
            textBaseline: "top"
        },
        ca = function (a) {
            console.log("[PointJS] : ", a)
        };
    "undefined" !== typeof POINTJS_USER_LOG && (ca = POINTJS_USER_LOG);
    var Va = function (a) {
        var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, ""));
        b = b.split(/\n/);
        b = ("" === b[2] ? b[0] : b[1]).split("/");
        b = b[b.length - 1].split(":");
        ca('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2])
    };
    this.game = {};
    this.levels = {};
    this.camera = {};
    this.keyControl = {};
    this.mouseControl = {};
    this.touchControl = {};
    this.system = {};
    this.vector = {};
    this.math = {};
    this.layers = {};
    this.colors = {};
    this.brush = {};
    this.audio = {};
    this.wAudio = {};
    this.resources = {};
    this.tiles = {};
    this.OOP = {};
    this.memory = {};
    this.modules = {};
    this.zList = {};
    this.filters = {};
    this.system.log = ca;
    this.system.consoleLog = function (a) {
        this.log = !0 === a ? console.log : ca
    };
    this.system.setTitle = function (a) {
        k.document.title = a
    };
    this.system.setSettings = function (a) {
        Da = v(a.isShowError) ? a.isShowError : !0;
        zb = v(a.isStopForError) ?
            a.isStopForError : !0;
        Yb = v(a.isAutoClear) ? a.isAutoClear : !1;
        v(a.isZBuffer)
    };
    this.system.setDefaultSettings = function (a) {
        for (var b in a) t[b] = a[b];
        g.save()
    };
    this.system.setSmoothing = function (a) {
        Ea = a;
        g.msImageSmoothingEnabled = Ea;
        g.imageSmoothingEnabled = Ea
    };
    this.system.restart = function (a) {
        k.location.reload(a)
    };
    var Ec = {
        name: "PointJS",
        desc: "HTML5 Game Engine for JavaScript",
        author: "Skaner (skaner0@yandex.ru)",
        version: "0.4.1"
    };
    this.system.getInfo = function () {
        return Ec
    };
    this.modules["import"] = function (a, b) {
        A.add();
        var c = new XMLHttpRequest;
        c.open("GET", a, !0);
        c.onload = function () {
            var a = {
                    constructor: function () {}
                },
                h = c.responseText.toString().replace(/PointJS.Module/i, "Module.constructor");
            (new Function("Module", h))(a);
            a = new a.constructor(z, k);
            A.load();
            b(a)
        };
        c.send()
    };
    this.modules.importSync = function (a) {
        try {
            var b = new XMLHttpRequest;
            b.open("GET", a, !1);
            b.send()
        } catch (c) {
            return
        }
        a = {
            constructor: function () {}
        };
        b = b.responseText.toString().replace(/PointJS.Module/i, "Module.constructor");
        (new Function("Module", b))(a);
        return new a.constructor(z,
            k)
    };
    var da = function (a, b) {
            b.prototype = Object.create(a.prototype);
            b.prototype.constructor = b
        },
        ea = function (a, b, c) {
            this.x = a || 0;
            this.y = b || 0;
            this.z = c || 0
        };
    ea.prototype = {
        abs: function () {
            return new ea(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
        },
        invert: function () {
            return new ea(-this.x, -this.y, -this.z)
        },
        plus: function (a) {
            return new ea(this.x + a.x, this.y + a.y, this.z + a.z)
        },
        minus: function (a) {
            return new ea(this.x - a.x, this.y - a.y, this.z - a.z)
        },
        inc: function (a) {
            return new ea(this.x * a.x, this.y * a.y, this.z * a.z)
        },
        div: function (a) {
            return new ea(this.x /
                a.x, this.y / a.y, this.z / a.z)
        },
        "int": function () {
            return new ea(this.x >> 0, this.y >> 0, this.z >> 0)
        }
    };
    var f = function (a, b, c) {
            return new ea(a, b, c)
        },
        E = function (a, b, c) {
            return {
                w: a,
                h: b,
                d: c
            }
        },
        Wa = function (a, b) {
            return {
                x: a.x + b.x,
                y: a.y + b.y,
                z: a.z + b.z
            }
        },
        I = function (a, b, c) {
            if (c) {
                var d = B(c);
                c = a.x - b.x;
                a = a.y - b.y;
                var h = Math.cos(d);
                d = Math.sin(d);
                return f(c * h - a * d + b.x, c * d + a * h + b.y)
            }
            return f(a.x, a.y)
        },
        Fa = function (a, b) {
            return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
        },
        oa = function (a, b) {
            var c, d = 0;
            var h = 0;
            var e = b.length;
            for (c = b.length -
                1; h < e; c = h++) b[h].y > a.y !== b[c].y > a.y && a.x < (b[c].x - b[h].x) * (a.y - b[h].y) / (b[c].y - b[h].y) + b[h].x && (d = !d);
            return d
        },
        Ga = function (a, b, c) {
            return !(a < b || a > c)
        };
    this.vector.isNumInRange = Ga;
    this.vector.point = f;
    this.vector.simplePoint = function (a, b, c) {
        return {
            x: !1 !== a ? a : !1,
            y: !1 !== b ? b : !1,
            z: !1 !== c ? c : !1
        }
    };
    this.vector.v2d = f;
    this.vector.size = E;
    this.vector.getPointAngle = I;
    this.vector.isPointIn = oa;
    this.vector.pointMinus = function (a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y,
            z: a.z - b.z
        }
    };
    this.vector.pointPlus = Wa;
    this.vector.pointInc = function (a,
        b) {
        return {
            x: a.x * b.x,
            y: a.y * b.y,
            z: a.z * b.z
        }
    };
    this.vector.pointDiv = function (a, b) {
        return {
            x: a.x / (0 !== b.x ? b.x : 1),
            y: a.y / (0 !== b.y ? b.y : 1),
            z: a.z / (0 !== b.z ? b.z : 1)
        }
    };
    this.vector.pointAbs = function (a) {
        return {
            x: Math.abs(a.x),
            y: Math.abs(a.y),
            z: Math.abs(a.z)
        }
    };
    this.vector.getMidPoint = function (a, b) {
        return v(b) ? f((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
    };
    this.vector.getDistance = function (a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
    };
    this.vector.isSame = function (a, b) {
        return v(b) ? a.x === b.x && a.y === b.y : !1
    };
    this.vector.getAngle2Points =
        Fa;
    this.vector.newStaticBox = function (a, b, c, d) {
        return {
            x: a,
            y: b,
            w: c,
            h: d
        }
    };
    this.vector.newDynamicBoxRect = function (a, b, c, d) {
        return [f(a, b), f(a + c, b), f(a + c, b + d), f(a, b + d)]
    };
    this.vector.moveCollision = function (a, b, c, d, h, e) {
        var f = !1,
            g = !1,
            w = c.abs(),
            k = a.getStaticBoxPosition(),
            m = b.length - 1,
            n;
        var p = 2 + w.x;
        for (n = 2 + w.y; 0 <= m; m--)
            if (w = b[m], w.visible && a !== w && !(h && !w.isInCameraStatic() || e && a.getDistanceC(w.getPositionC()) > e) && a.isStaticIntersect(w.getStaticBox())) {
                var l = w.getStaticBoxPosition();
                k.h >= l.y + n && k.y <= l.h - n &&
                    (0 <= c.x ? Ga(k.w, l.x, l.w) && (a.x = l.x - (a.w + a.box.w + a.box.x) + 1, c.x = 0, f = !0) : 0 > c.x && Ga(k.x, l.x, l.w) && (a.x = l.w - a.box.x - 1, c.x = 0, f = !0));
                k.w >= l.x + p && k.x <= l.w - p && (0 < c.y ? Ga(k.h, l.y, l.h) && (a.y = l.y - (a.h + a.box.h + a.box.y) + 1, c.y = 0, g = !0) : 0 > c.y && Ga(k.y, l.y, l.h) && (a.y = l.h - a.box.y - 1, c.y = 0, g = !0));
                d && d(a, w, f, g)
            }
        a.move(c)
    };
    this.vector.moveCollisionAngle = function (a, b, c, d, h, e, g) {
        var w = f();
        h = math.a2r(OOP.isDef(h) ? h : a.angle);
        w.x = c * Math.cos(h);
        w.y = c * Math.sin(h);
        c = 0;
        h = b.length;
        for (var k; c < h; c += 1)
            if (k = b[c], !e || k.isInCamera())
                if (!g ||
                    !a.getDistanceC(k.getPositionC())) {
                    var l = k.getStaticBox();
                    if (a.isIntersect(k)) {
                        var m = a.getStaticBox(),
                            Xa = Math.abs(w.x),
                            n = Math.abs(w.y);
                        m.x + m.w > l.x + 10 + Xa && m.x < l.x + l.w - 10 - Xa && (0 < w.y && m.y + m.h < l.y + l.h / 2 + n ? w.y = 0 : 0 > w.y && m.y > l.y + l.h - l.h / 2 - n && (w.y = 0));
                        m.y + m.h > l.y + 10 + n && m.y < l.y + l.h - 10 - n && (0 < w.x && m.x + m.w < l.x + l.w / 2 + Xa ? w.x = 0 : 0 > w.x && m.x > l.x + l.w - l.w / 2 - Xa && (w.x = 0));
                        d && d(a, k)
                    }
                }
        a.move(w);
        return w
    };
    var Zb = {},
        Ab = function () {
            var a = (new Date).getTime();
            Zb[a] && (a = Ab());
            Zb[a] = !0;
            return a
        },
        B = function (a) {
            return Math.PI / 180 *
                a
        },
        R = function (a, b, c) {
            var d = Math.floor(Math.random() * (b - a + 1) + a);
            return c && 0 == d ? R(a, b, c) : d
        },
        Bb = function (a) {
            return 0 > a ? -1 : 1
        };
    this.math.limit = function (a, b) {
        var c = Bb(a);
        a = Math.abs(a);
        b = Math.abs(b);
        return a < b ? a * c : b * c
    };
    this.math.sign = Bb;
    this.math.a2r = B;
    this.math.random = R;
    this.math.toInt = function (a) {
        return a >> 0
    };
    this.math.uid = Ab;
    this.math.toZiro = function (a, b) {
        if (0 == a) return 0;
        var c = Bb(a);
        b = Math.abs(b);
        a = Math.abs(a);
        return 0 < a && (a -= b, a < b) ? 0 : a * c
    };
    var $b = function (a, b) {
            return a ? a : b ? b : !1
        },
        Cb = [],
        Fc = function (a,
            b) {
            var c;
            this.canvas = c = k.document.createElement("canvas");
            var d = c.style,
                h = q.style;
            d.position = Ca;
            d.top = h.top;
            d.left = h.left;
            c.width = q.width;
            c.height = q.height;
            d.width = h.width;
            d.height = h.height;
            d.zIndex = h.zIndex + a;
            b && (d.opacity = $b(b.alpha, 1), d.backgroundColor = $b(b.backgroundColor, "transparent"));
            p.attach(c);
            (this.context = c.getContext("2d")).textBaseline = t.textBaseline;
            this.isAutoClear = !0;
            this.clear = function () {
                this.context.clearRect(0, 0, m, n)
            };
            this.on = function (a) {
                g = this.context;
                this.isAutoClear && this.clear();
                a(this);
                g = ac
            };
            this.setVisible = function (a) {
                this.canvas.style = a ? "block" : "none"
            };
            Cb.push(this)
        },
        pa = function () {
            u(Cb, function (a) {
                a.canvas.width = m;
                a.canvas.height = n;
                a.canvas.style.width = q.style.width;
                a.canvas.style.height = q.style.height;
                a.context.textBaseline = t.textBaseline
            })
        },
        Gc = function () {
            u(Cb, function (a) {
                a.canvas.style.left = q.style.left;
                a.canvas.style.top = q.style.top
            })
        };
    this.layers.newLayer = function (a, b) {
        return new Fc(a, b)
    };
    var bc = 0,
        p = {
            loaded: !1,
            events: {
                onload: [],
                preLoop: [],
                postLoop: [],
                entryLoop: [],
                exitLoop: [],
                gameBlur: [],
                gameFocus: [],
                gameResize: [],
                gameStop: [],
                gameStart: []
            },
            addEvent: function (a, b, c) {
                "onload" === a && p.loaded ? c() : p.events[a].push({
                    id: b,
                    func: c
                })
            },
            delEvent: function (a, b) {
                u(p.events[a], function (a, d, h) {
                    a.id === b && h.splice(d, 1)
                })
            },
            runEvent: function (a) {
                u(p.events[a], function (a) {
                    "function" === typeof a.func && a.func()
                })
            },
            attach: function (a) {
                var b = function () {
                    k.document.body.appendChild(a)
                };
                p.loaded ? b() : p.addEvent("onload", "attachElement_PointJS" + (bc += 1), b)
            },
            remove: function (a) {
                var b = function () {
                    k.document.body.removeChild(a)
                };
                p.loaded ? b() : p.addEvent("onload", "attachElement_PointJS" + (bc += 1), b)
            },
            getWH: function () {
                return {
                    w: parseInt(k.innerWidth || k.document.body.clientWidth),
                    h: parseInt(k.innerHeight || k.document.body.clientHeight)
                }
            }
        };
    this.system.delEvent = function (a, b) {
        p.delEvent(a, b)
    };
    this.system.addEvent = function (a, b, c) {
        p.addEvent(a, b, c)
    };
    this.system.removeDOM = function (a) {
        p.remove(a)
    };
    this.system.attachDOM = function (a) {
        p.attach(a)
    };
    this.system.newDOM = function (a, b) {
        var c = k.document.createElement(a);
        c.style.position = Ca;
        c.style.left =
            0;
        c.style.top = 0;
        c.style.zIndex = r.style.zIndex + 1;
        if (b) {
            var d = function (a) {
                a.stopPropagation()
            };
            c.addEventListener("touchstart", d, !1);
            c.addEventListener("touchend", d, !1);
            c.addEventListener("touchmove", d, !1);
            c.addEventListener("mousedown", d, !1);
            c.addEventListener("mousepress", d, !1);
            c.addEventListener("mouseup", d, !1);
            c.addEventListener("mousemove", d, !1);
            c.addEventListener("keypress", d, !1);
            c.addEventListener("keydown", d, !1);
            c.addEventListener("keyup", d, !1);
            c.addEventListener("click", d, !1);
            c.addEventListener("wheel",
                d, !1);
            c.addEventListener("mousewheel", d, !1);
            c.addEventListener("contextmenu", d, !1);
            c.addEventListener("selectstart", d, !1);
            c.addEventListener("dragstart", d, !1);
            c.addEventListener("DOMMouseScroll", d, !1)
        }
        p.attach(c);
        return c
    };
    var g = null,
        ac = null,
        Ha = f(Ub, Vb);
    var q = k.document.createElement("canvas");
    ac = g = q.getContext("2d");
    g.textBaseline = t.textBaseline;
    q.crossOrigin = "anonymous";
    q.width = parseInt(Ta);
    q.height = parseInt(Ua);
    q.style.position = Ca;
    J ? (q.style.left = Ha.x + "px", q.style.top = Ha.y + "px", p.addEvent("gameResize",
        "initedCanvasResize",
        function () {
            var a = Wb(J);
            z.system.setOffset(a.x, a.y);
            z.system.resize(J.offsetWidth, J.offsetHeight)
        })) : (q.style.left = 0, q.style.top = 0);
    q.style.zIndex = yb;
    q.id = "PointJS-canvas_0";
    if ("object" === typeof xb)
        for (var Db in xb) Db.match(/margin|padding|position/) || (q.style[Db] = xb[Db]);
    this.system.setOffset = function (a, b) {
        r.style.left = q.style.left = a + "px";
        r.style.top = q.style.top = b + "px";
        Ha = {
            x: a,
            y: b
        };
        Gc()
    };
    var r = k.document.createElement("div");
    (function () {
        var a = r.style;
        a.position = Ca;
        a.left = q.style.left;
        a.top = q.style.top;
        a.width = q.width + "px";
        a.height = q.height + "px";
        a.zIndex = yb + 100
    })();
    p.attach(r);
    p.attach(q);
    this.system.setStyle = function (a) {
        if ("object" === typeof a)
            for (var b in a) q.style[b] = a[b]
    };
    this.system.getCanvas = function () {
        return q
    };
    this.system.getContext = function () {
        return g
    };
    this.system.setContext = function (a) {
        a && (g = a)
    };
    this.system.resize = function (a, b) {
        m = a || ka;
        n = b || la;
        G = m / 2;
        H = n / 2;
        q.width = m;
        q.height = n;
        r.style.width = m + "px";
        r.style.height = n + "px";
        pa()
    };
    this.system.initFullPage = function () {
        J || (p.addEvent("gameResize",
            "PointJS_resizeGame",
            function () {
                m = p.getWH().w;
                n = p.getWH().h;
                G = m / 2;
                H = n / 2;
                q.width = m;
                q.height = n;
                g.textBaseline = t.textBaseline;
                r.style.width = m + "px";
                r.style.height = n + "px";
                pa()
            }), p.runEvent("gameResize", "PointJS_resizeGame"))
    };
    var X = !1,
        Hc = function () {
            X || (this.requestFullscreen ? (this.requestFullscreen(), X = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), X = !0) : this.webkitRequestFullscreen && (this.webkitRequestFullscreen(), X = !0), m = p.getWH().w, n = p.getWH().h, G = m / 2, H = n / 2, q.width = m, q.height = n, r.style.width =
                m + "px", r.style.height = n + "px", pa())
        },
        Eb = function (a) {
            X = cc(k.document.fullscreenElement || k.document.mozFullScreenElement || k.document.webkitFullscreenElement)
        };
    k.document.addEventListener("webkitfullscreenchange", Eb);
    k.document.addEventListener("mozfullscreenchange", Eb);
    k.document.addEventListener("fullscreenchange", Eb);
    this.system.initFullScreen = function () {
        J || X || (k.document.documentElement.onclick = Hc, Ia || (p.addEvent("gameResize", "PointJS_initFullScreen", function () {
            m = p.getWH().w;
            n = p.getWH().h;
            G = m / 2;
            H =
                n / 2;
            q.width = m;
            q.height = n;
            g.textBaseline = t.textBaseline;
            r.style.width = m + "px";
            r.style.height = n + "px";
            pa()
        }), p.runEvent("gameResize", "PointJS_initFullScreen")))
    };
    this.system.exitFullScreen = function () {
        X && (p.delEvent("gameResize", "PointJS_initFullScreen"), k.document.exitFullscreen ? (k.document.exitFullscreen(), X = !1) : k.document.mozCancelFullScreen ? (k.document.mozCancelFullScreen(), X = !1) : k.document.webkitExitFullscreen && (k.document.webkitExitFullscreen(), X = !1), m = ka, n = la, G = m / 2, H = n / 2, q.width = m, q.height = n, r.style.width =
            m + "px", r.style.height = n + "px", pa(), k.document.documentElement.onclick = function () {})
    };
    this.system.isFullScreen = function () {
        return X
    };
    this.system.exitFullPage = function () {
        p.delEvent("gameResize", "PointJS_resizeGame");
        m = ka;
        n = la;
        G = m / 2;
        H = n / 2;
        q.width = m;
        q.height = n;
        r.style.width = m + "px";
        r.style.height = n + "px";
        pa()
    };
    var Y = !1,
        Ia = !1,
        dc = ka,
        ec = la,
        fc = !1;
    this.system.initFullScale = function (a) {
        J || Ia || (a && (fc = !0), p.addEvent("gameResize", "PointJS_initFullScale", function () {
            var a = dc,
                c = ec,
                d = p.getWH();
            fc ? (a = d.w, c = d.h) : d.w < d.h ?
                (c = d.w / m, a = d.w, c *= n) : d.h < d.w && (a = d.h / n, c = d.h, a *= m);
            dc = a;
            ec = c;
            Y = {
                w: a / m,
                h: c / n
            };
            q.style.width = a + "px";
            q.style.height = c + "px";
            r.style.width = a + "px";
            r.style.height = c + "px";
            pa()
        }), p.runEvent("gameResize", "PointJS_initFullScale"), Ia = !0)
    };
    this.system.exitFullScale = function () {
        Ia && (Ia = !1, p.delEvent("gameResize", "PointJS_initFullScale"), q.style.width = ka + "px", q.style.height = la + "px", r.style.width = ka + "px", r.style.height = la + "px")
    };
    this.system.getWH = function () {
        return p.getWH()
    };
    var Fb = !1,
        Ya = {
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            SPACE: 32,
            CTRL: 17,
            SHIFT: 16,
            ALT: 18,
            ESC: 27,
            ENTER: 13,
            MINUS: 189,
            PLUS: 187,
            CAPS_LOCK: 20,
            BACKSPACE: 8,
            TAB: 9,
            DELETE: 46,
            Q: 81,
            W: 87,
            E: 69,
            R: 82,
            T: 84,
            Y: 89,
            U: 85,
            I: 73,
            O: 79,
            P: 80,
            A: 65,
            S: 83,
            D: 68,
            F: 70,
            G: 71,
            H: 72,
            J: 74,
            K: 75,
            L: 76,
            Z: 90,
            X: 88,
            V: 86,
            B: 66,
            N: 78,
            M: 77,
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            C: 67,
            9: 57,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123
        },
        xa = {
            37: "LEFT",
            39: "RIGHT",
            38: "UP",
            40: "DOWN",
            32: "SPACE",
            17: "CTRL",
            16: "SHIFT",
            18: "ALT",
            27: "ESC",
            13: "ENTER",
            189: "MINUS",
            187: "PLUS",
            20: "CAPS_LOCK",
            8: "BACKSPACE",
            9: "TAB",
            46: "DELETE",
            81: "Q",
            87: "W",
            69: "E",
            82: "R",
            84: "T",
            89: "Y",
            85: "U",
            73: "I",
            79: "O",
            80: "P",
            65: "A",
            83: "S",
            68: "D",
            70: "F",
            71: "G",
            72: "H",
            74: "J",
            75: "K",
            76: "L",
            90: "Z",
            88: "X",
            86: "V",
            66: "B",
            78: "N",
            77: "M",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            67: "C",
            57: "9",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12"
        },
        Ic = {
            8: !0,
            9: !0,
            13: !0,
            18: !0,
            16: !0,
            17: !0,
            27: !0,
            112: !0,
            113: !0,
            114: !0,
            115: !0,
            116: !0,
            117: !0,
            118: !0,
            119: !0,
            120: !0,
            121: !0,
            122: !0,
            123: !0
        };
    this.keyControl.getKeyList = function () {
        var a, b = [];
        for (a in Ya) b.push(a);
        return b
    };
    var Z = {},
        Ja = {},
        qa = {},
        Ka = !1,
        La = !1,
        Za = !1,
        $a = !1,
        Jc = function (a) {
            F(qa, function (a, c, d) {
                1 == a && (d[c] = 2)
            })
        };
    this.keyControl.getCountKeysDown = function () {
        var a = 0;
        F(Z, function (b, c) {
            b && a++
        });
        return a
    };
    this.keyControl.getAllKeysDown = function () {
        var a = [];
        F(Z, function (b, c) {
            b && a.push(xa[c])
        });
        return a
    };
    this.keyControl.getLastKeyPress = function () {
        return $a ? xa[$a] : !1
    };
    this.keyControl.isDown = function (a) {
        return 1 ==
            Z[Ya[a]]
    };
    this.keyControl.isUp = function (a) {
        return 1 == Ja[Ya[a]]
    };
    this.keyControl.isPress = function (a) {
        return 1 == qa[Ya[a]]
    };
    this.keyControl.getInputChar = function () {
        return Ka
    };
    this.keyControl.getInputKey = function () {
        return xa[La]
    };
    this.keyControl.setInputMode = function (a) {
        Za = a
    };
    this.keyControl.isInputMode = function () {
        return Za
    };
    this.keyControl.exitKeyControl = function () {
        k.onkeydown = function () {};
        k.onkeypress = function () {};
        k.onkeyup = function () {};
        C.clear("key:down");
        C.clear("key:press");
        C.clear("key:up");
        p.delEvent("postLoop",
            "PointJS_clearAllKeyUp");
        p.delEvent("preLoop", "PointJS_KeyDownEvent");
        Z = {};
        Ja = {};
        qa = {};
        Fb = Za = La = Ka = !1
    };
    this.keyControl.initControl = this.keyControl.initKeyControl = function () {
        if (Fb) return this;
        Fb = !0;
        k.onkeydown = function (a) {
            if (Za) return La = a.keyCode, Ic[a.keyCode] ? (a.preventDefault(), !1) : !0;
            a.preventDefault();
            2 != qa[a.keyCode] && (qa[a.keyCode] = 1, $a = a.keyCode, C.run("key:press", xa[a.keyCode]));
            Z[a.keyCode] = !0;
            return !1
        };
        k.onkeypress = function (a) {
            var b = !1;
            0 != a.which && 0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
            Ka = b
        };
        k.onkeyup = function (a) {
            a.preventDefault();
            1 == Z[a.keyCode] && (Ja[a.keyCode] = !0);
            Z[a.keyCode] = !1;
            C.run("key:up", xa[a.keyCode]);
            delete qa[a.keyCode];
            delete Z[a.keyCode];
            return !1
        };
        p.addEvent("postLoop", "PointJS_clearAllKeyUp", function () {
            Ja = {};
            Jc();
            $a = La = Ka = !1
        });
        p.addEvent("preLoop", "PointJS_KeyDownEvent", function () {
            C.isEvent("key:down") && F(Z, function (a, b) {
                a && C.run("key:down", xa[b])
            })
        });
        return this
    };
    var Ma = !1,
        x = f(0, 0),
        ab = f(0, 0);
    f(0, 0);
    var Na = !0,
        bb = "",
        cb = !1,
        ra = f(0, 0),
        db = !1,
        Gb = {
            LEFT: 1,
            RIGHT: 3,
            MIDDLE: 2
        },
        Hb = {
            1: "LEFT",
            3: "RIGHT",
            2: "MIDDLE"
        },
        eb = !1,
        fb = {},
        gb = {},
        Oa = {},
        ya = 0,
        gc = function () {
            fb = {};
            gb = {};
            Oa = {};
            ya = 0;
            db = !1
        },
        Kc = function () {
            F(Oa, function (a, b, c) {
                1 == a && (c[b] = 2)
            })
        },
        hb = function (a) {
            var b = 0,
                c = 0;
            a && (b = e.x, c = e.y);
            return f(b + x.x, c + x.y)
        };
    this.mouseControl.getPosition = function () {
        return hb(1)
    };
    this.mouseControl.getPositionS = function () {
        return hb()
    };
    this.mouseControl.setCursorImage = function (a) {
        a = "url('" + a + "'), auto";
        if (bb !== a) return bb = a, k.document.body.style.cursor = bb
    };
    this.mouseControl.setVisible = function (a) {
        !Na &&
            !a || Na && a || (Na = 1 == a, k.document.body.style.cursor = Na ? bb : "none")
    };
    this.mouseControl.isVisible = function () {
        return Na
    };
    this.mouseControl.isDown = function (a) {
        return fb[Gb[a]]
    };
    this.mouseControl.isUp = function (a) {
        return gb[Gb[a]]
    };
    this.mouseControl.isPress = function (a) {
        return 1 == Oa[Gb[a]]
    };
    this.mouseControl.isMove = function () {
        return db
    };
    this.mouseControl.isInStatic = function (a) {
        var b = hb(1);
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.mouseControl.isInDynamic = function (a) {
        return oa(hb(1), a)
    };
    this.mouseControl.isInObject =
        function (a) {
            return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
        };
    this.mouseControl.isWheel = function (a) {
        return "UP" === a && 0 < ya || "DOWN" === a && 0 > ya
    };
    var hc = function (a) {
            a.preventDefault();
            ya = a.wheelDelta ? a.wheelDelta : -a.detail;
            C.run("mouse:wheel", 0 > ya ? "DOWN" : "UP");
            return !1
        },
        ib = !1,
        ic = function () {
            ib && (cb = v(k.document.pointerLockElement) || v(k.document.mozPointerLockElement) ? !0 : !1)
        };
    this.mouseControl.initMouseLock = function () {
        p.addEvent("onload", "initPointerLock",
            function () {
                ib = r.requestPointerLock || r.mozRequestPointerLock || !1;
                k.document.exitPointerLock = k.document.exitPointerLock || k.document.mozExitPointerLock || !1;
                "onpointerlockchange" in k.document ? k.document.addEventListener("pointerlockchange", ic, !1) : "onmozpointerlockchange" in k.document && k.document.addEventListener("mozpointerlockchange", ic, !1);
                if (!ib) return ca("error in initMouseLock : not supported");
                cb || (r.onclick = ib)
            })
    };
    this.mouseControl.exitMouseLock = function () {
        k.document.exitPointerLock();
        r.onclick =
            function () {};
        ra = f(0, 0)
    };
    this.mouseControl.unlockMouse = function () {
        ra = f(0, 0);
        k.document.exitPointerLock()
    };
    this.mouseControl.isMouseLock = function () {
        return cb
    };
    this.mouseControl.getSpeed = function () {
        return f(ra.x, ra.y)
    };
    this.mouseControl.isPeekStatic = function (a, b) {
        return this.isPress(a) ? this.isInStatic(b) : !1
    };
    this.mouseControl.isPeekDynamic = function (a, b) {
        return this.isPress(a) ? this.isInDynamic(b) : !1
    };
    this.mouseControl.isPeekObject = function (a, b) {
        return this.isPress(a) && b.visible ? this.isInDynamic(b.getDynamicBox()) :
            !1
    };
    this.mouseControl.initControl = this.mouseControl.initMouseControl = function () {
        if (Ma) return this;
        Ma = !0;
        r.onmousemove = function (a) {
            a.preventDefault();
            a.stopPropagation();
            if (cb) {
                var b = a.movementY || a.mozMovementY || 0;
                x.x += a.movementX || a.mozMovementX || 0;
                x.y += b
            } else x.x = a.pageX - Ha.x, x.y = a.pageY - Ha.y, Y && (x.x /= Y.w, x.y /= Y.h);
            x.x /= ma;
            x.y /= na;
            ra.x = x.x - ab.x;
            ra.y = x.y - ab.y;
            ab.x = x.x;
            ab.y = x.y;
            C.run("mouse:move");
            db = !0;
            return !1
        };
        r.onmousedown = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button &&
                (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            C.run("mouse:press", Hb[a.which]);
            eb = Hb[a.which];
            fb[a.which] = !0;
            Oa[a.which] = 1
        };
        r.onmouseup = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            C.run("mouse:up", Hb[a.which]);
            eb = !1;
            fb[a.which] = !1;
            gb[a.which] = !0;
            delete Oa[a.which]
        };
        r.oncontextmenu = r.onselectstart = r.ondragstart = function () {
            return !1
        };
        r.onmousewheel = hc;
        r.addEventListener("DOMMouseScroll",
            hc, !1);
        p.addEvent("preLoop", "PointJS_MouseEventDown", function () {
            eb && C.run("mouse:down", eb)
        });
        p.addEvent("postLoop", "PointJS_clearAllMouseUp", function () {
            gb = {};
            Kc();
            ya = 0;
            db = !1;
            ra = f(0, 0)
        });
        return this
    };
    this.mouseControl.exitMouseControl = function () {
        C.clear("mouse:press");
        C.clear("mouse:down");
        C.clear("mouse:up");
        C.clear("mouse:move");
        C.clear("mouse:wheel");
        r.onmousemove = r.onmousedown = r.onmouseup = r.oncontextmenu = r.onselectstart = r.ondragstart = r.onmousewheel = function () {};
        p.delEvent("postLoop", "PointJS_clearAllMouseUp");
        p.delEvent("preLoop", "PointJS_MouseEventDown");
        gc();
        Ma = !1
    };
    var Ib = !1,
        Pa = !1,
        jb = 0,
        kb = 0,
        K = 0,
        L = 0,
        y = f(0, 0),
        lb = [],
        Qa = f(0, 0),
        mb = f(0, 0);
    this.touchControl.isTouchSupported = function () {
        return !!("ontouchstart" in window)
    };
    this.touchControl.isMobileDevice = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(k.navigator.userAgent)
    };
    var jc = function () {
        Pa = !1;
        kb = jb = 0;
        y = f(0, 0);
        lb = [];
        L = K = 0
    };
    this.touchControl.getFixPositionS = function () {
        return y.x || y.y ? f(y.x, y.y) : !1
    };
    this.touchControl.getFixPosition =
        function () {
            return y.x || y.y ? f(y.x + e.x, y.y + e.y) : !1
        };
    this.touchControl.getRun = function () {
        var a = 0,
            b = 0;
        y.x && y.x != K && (a = K - y.x);
        y.y && y.y != L && (b = L - y.y);
        return f(a, b)
    };
    this.touchControl.getVector = function () {
        var a = 0,
            b = 0;
        y.x && y.x != K && (a = K > y.x ? 1 : -1);
        y.y && y.y != L && (b = L > y.y ? 1 : -1);
        return f(a, b)
    };
    this.touchControl.getSpeed = function () {
        return f(Qa.x, Qa.y)
    };
    this.touchControl.isDown = function () {
        return Pa
    };
    this.touchControl.isPress = function () {
        return 1 == jb
    };
    this.touchControl.isUp = function () {
        return 1 == kb
    };
    this.touchControl.getPosition =
        function () {
            return f(K + e.x, L + e.y)
        };
    this.touchControl.getPositionS = function () {
        return f(K, L)
    };
    this.touchControl.isPeekStatic = function (a) {
        return this.isPress() ? this.isInStatic(a) : !1
    };
    this.touchControl.isPeekDynamic = function (a) {
        return this.isPress() ? this.isInDynamic(a) : !1
    };
    this.touchControl.isPeekObject = function (a) {
        return this.isPress() && a.visible ? this.isInDynamic(a.getDynamicBox()) : !1
    };
    this.touchControl.isInStatic = function (a) {
        var b = this.getPosition();
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y +
            a.h
    };
    this.touchControl.isInDynamic = function (a) {
        return oa(this.getPosition(), a)
    };
    this.touchControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.touchControl.getTouches = function () {
        return lb
    };
    this.touchControl.initControl = this.touchControl.initTouchControl = function () {
        if (Ib) return this;
        Ib = !0;
        k.addEventListener("touchstart", function (a) {
            a.preventDefault();
            K = a.targetTouches[0].pageX;
            L = a.targetTouches[0].pageY;
            lb = a.targetTouches;
            Y && (K /= Y.w, L /= Y.h);
            C.run("touch:press");
            y.x = K;
            y.y = L;
            Pa = !0;
            jb = 1;
            return !1
        }, {
            passive: !1
        });
        k.addEventListener("touchmove", function (a) {
            K = a.targetTouches[0].pageX;
            L = a.targetTouches[0].pageY;
            lb = a.targetTouches;
            Y && (K /= Y.w, L /= Y.h);
            Qa.x = K - mb.x;
            Qa.y = L - mb.y;
            C.run("touch:move");
            return !1
        }, !1);
        k.addEventListener("touchend", function (a) {
            y.x = 0;
            y.y = 0;
            Pa = !1;
            kb = 1;
            C.run("touch:up");
            return !1
        }, !1);
        z.touchControl.vibrate = function (a) {
            if (k.navigator.vibrate) return k.navigator.vibrate(a);
            if (k.navigator.oVibrate) return k.navigator.oVibrate(a);
            if (k.navigator.mozVibrate) return k.navigator.mozVibrate(a);
            if (k.navigator.webkitVibrate) return k.navigator.webkitVibrate(a)
        };
        p.addEvent("preLoop", "PointJS_TouchDownEvent", function () {
            Pa && C.run("touch:down")
        });
        p.addEvent("postLoop", "PointJS_touchStopPress", function () {
            kb = jb = 0;
            mb.x = K;
            mb.y = L;
            Qa = f(0, 0)
        });
        return this
    };
    this.touchControl.exitTouchControl = function () {
        k.ontouchstart = k.ontouchmove = k.ontouchend = function (a) {};
        p.delEvent("postLoop", "PointJS_touchStopPress");
        p.delEvent("preLoop", "PointJS_TouchDownEvent");
        jc();
        Ib = !1
    };
    var nb = function (a, b, c, d) {
            return d ? "rgba(" + a + ", " + b + ", " + c + ", " + d + ")" : "rgb(" + a + ", " + b + ", " + c + ")"
        },
        kc = function (a, b) {
            a = "#" === a[0] ? a.substr(1, 6) : a;
            var c = parseInt(a.substr(0, 2), 16),
                d = parseInt(a.substr(2, 2), 16),
                h = parseInt(a.substr(4, 2), 16);
            return nb(c, d, h, b)
        };
    this.colors.rgb = function (a, b, c) {
        return nb(a, b, c)
    };
    this.colors.rgba = function (a, b, c, d) {
        return nb(a, b, c, d)
    };
    this.colors.hex2rgb = function (a) {
        return kc(a)
    };
    this.colors.hex2rgba = function (a, b) {
        return kc(a, b)
    };
    this.colors.randomColor = function (a,
        b, c) {
        return nb(R(a, b), R(a, b), R(a, b), c || 1)
    };
    this.colors.fromImage = function (a, b, c, d, h) {
        var e = {
            img: k.document.createElement("img"),
            color: null
        };
        e.img.onload = function () {
            var a = k.document.createElement("canvas");
            a.width = d ? d : this.width;
            a.height = h ? h : this.height;
            a.getContext("2d").drawImage(this, 0, 0, a.width, a.height);
            e.color = g.createPattern(a, b);
            "function" === typeof c && (e.onload = c, e.onload(), delete e.onload)
        };
        e.img.src = a;
        return e
    };
    var v = function (a) {
            return "undefined" == typeof a || null == a ? !1 : !0
        },
        cc = function (a) {
            return v(a) &&
                "" !== a && 0 !== a ? !0 : !1
        },
        F = function (a, b, c) {
            var d, h;
            for (d in a)
                if ((!c || a.hasOwnProperty(d)) && "undefined" !== typeof a[d] && (h = b(a[d], d, a)) && "break" === h) break
        },
        u = function (a, b) {
            if (a.length)
                for (var c = a.length - 1, d; 0 <= c && ("undefined" === typeof a[c] || !(d = b(a[c], c, a) || !1) || "break" !== d); c--);
        };
    this.OOP.extractArrElement = function (a, b) {
        var c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.extractRandArrElement = function (a) {
        var b = R(0, a.length - 1),
            c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.drawEach = function (a, b) {
        F(a, function (a) {
            a &&
                a.draw && a.isInCamera() && (a.draw(), b && b(a))
        })
    };
    this.OOP.drawArr = function (a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1) a[d] && a[d].draw && a[d].isInCamera() && (a[d].draw(), b && b(a[d], d))
    };
    this.OOP.getArrInCamera = function (a) {
        var b = [];
        u(a, function (a) {
            a.isInCamera() && b.push(a)
        });
        return b
    };
    this.OOP.getArrOutCamera = function (a) {
        var b = [];
        u(a, function (a) {
            a.isInCamera() || b.push(a)
        });
        return b
    };
    var lc = function (a) {
            a.length = 0
        },
        Lc = function (a, b) {
            var c = !1,
                d = Ab(),
                h = !1,
                e = new XMLHttpRequest,
                f = function () {
                    e.open("GET", a, !0);
                    e.send()
                };
            e.onreadystatechange = function () {
                4 == e.readyState && (b(e.responseText), c && (h ? setTimeout(f, h) : f()))
            };
            this.start = function () {
                a = a.match(/\?/) ? a + ("&session_id=" + d) : a + ("?session_id=" + d);
                f();
                c = !0
            };
            this.setSID = function (a) {
                d = a
            };
            this.setTime = function (a) {
                h = a
            };
            this.stop = function () {
                c = !1
            };
            this.isActive = function () {
                return c
            }
        };
    this.OOP.readJSON = function (a, b, c) {
        var d = {},
            h = new XMLHttpRequest;
        h.open("GET", a, !0);
        A.add();
        h.onreadystatechange = function () {
            4 == h.readyState && (d = h.responseText, c || (d = JSON.parse(d)), A.load(), b(d))
        };
        h.send()
    };
    this.OOP.toString = function (a, b) {
        var c, d = 0,
            h = "[";
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var e = a[c];
                "number" == typeof e && b && (e = parseInt(e));
                h += (0 < d ? ", " : "") + c + " : " + e;
                d += 1
            }
        return h + "]"
    };
    this.OOP.sendGET = function (a, b, c) {
        var d = new XMLHttpRequest,
            h = "?";
        F(b, function (a, b) {
            h += b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("GET", a + h, !0);
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send()
    };
    this.OOP.sendPOST = function (a, b, c) {
        var d = new XMLHttpRequest,
            h = "";
        F(b, function (a, b) {
            h += b + "=" + encodeURIComponent(a) +
                "&"
        });
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send(h)
    };
    this.OOP.sendPOSTScreen = function (a, b, c) {
        var d = new XMLHttpRequest;
        b = b + "=" + q.toDataURL("image/png");
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send(b)
    };
    this.OOP.isDef = v;
    this.OOP.isSet = cc;
    this.OOP.forEach = F;
    this.OOP.forInt =
        function (a, b) {
            var c, d;
            for (c = 0; c < a && (!(d = b(c)) || "break" != d); c += 1);
        };
    this.OOP.forXY = function (a, b, c) {
        var d, h, e;
        for (h = 0; h < b; h += 1)
            for (d = 0; d < a && (!(e = c(d, h)) || "break" != e); d += 1);
    };
    this.OOP.forArr = u;
    this.OOP.clearArr = lc;
    this.OOP.fillArr = function (a, b, c) {
        a.length = 0;
        var d;
        for (d = 0; d < b; d += 1) a.push(c(d, 0 < d ? a[d - 1] : !1));
        return a
    };
    this.OOP.delObject = function (a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1)
            if (a[d] == b) return a.splice(d, 1), !0
    };
    this.OOP.randArrElement = function (a) {
        return a[R(0, a.length - 1)]
    };
    this.OOP.readJSONSync =
        function (a) {
            var b = new XMLHttpRequest;
            b.open("GET", a, !1);
            b.send();
            a = b.responseText;
            return a = JSON.parse(a)
        };
    this.OOP.sendGETSync = function (a, b) {
        var c = new XMLHttpRequest,
            d = "?";
        F(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("GET", a + d, !1);
        c.send();
        return c.responseText
    };
    this.OOP.sendPOSTSync = function (a, b) {
        var c = new XMLHttpRequest,
            d = "";
        F(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("POST", a, !1);
        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        c.send(d);
        return c.responseText
    };
    this.OOP.newAJAXListener = function (a, b) {
        return new Lc(a, b)
    };
    this.OOP.runCode = function (a) {
        (new Function("", a))()
    };
    var M = {};
    this.OOP.includeSync = function (a, b) {
        if (M[a]) M[a].loaded && !b && M[a].code();
        else {
            M[a] = {
                loaded: !1,
                code: function () {
                    console.log(a + " is loading")
                }
            };
            var c = new XMLHttpRequest;
            c.open("GET", a, !1);
            c.send();
            M[a].code = new Function("", c.responseText);
            M[a].loaded = !0;
            M[a].code()
        }
    };
    this.OOP.include = function (a, b, c) {
        if (M[a]) M[a].loaded && !c && M[a].code(), b && b();
        else {
            M[a] = {
                loaded: !1,
                code: function () {
                    console.log(a + " is loading")
                }
            };
            var d = new XMLHttpRequest;
            d.open("GET", a, !0);
            d.onreadystatechange = function () {
                4 === d.readyState && (M[a].code = new Function("", d.responseText), M[a].loaded = !0, M[a].code(), b && b())
            };
            d.send()
        }
    };
    this.OOP.clone = function (a, b) {
        var c = mc(a);
        F(a, function (a, b) {
            -1 === ["id", "type", "anim"].indexOf(b) && (c[b] = a)
        });
        b && (c.onClone = b, c.onClone(c), delete c.onClone);
        return c
    };
    var Mc = function () {
        var a = [];
        this.fillFromArr = function (b) {
            a.length = 0;
            u(b, function (b) {
                a.push(b)
            })
        };
        this.fill =
            function (b, c) {
                a.length = 0;
                z.OOP.fillArr(a, b, c)
            };
        this.draw = function (b) {
            for (var c = a.length - 1; 0 <= c; c--) a[c].isInCamera() && (a[c].draw(), b && b(a[c], c))
        };
        this.update = function (b, c) {
            for (var d = a.length - 1; 0 <= d; d--) c && !a[d].isInCamera() || b(a[d], d)
        };
        this.add = function (b) {
            a.push(b)
        };
        this.del = function (b) {
            z.OOP.delObject(a, b)
        }
    };
    this.OOP.newGroup = function () {
        return new Mc
    };
    var Ra = 60,
        N = Date.now(),
        ob = 0,
        pb = -1,
        nc = N,
        ia = {},
        qb = 0;
    this.game.setFPS = function (a) {
        Ra = 0 < a ? a : 60
    };
    this.game.getDT = function (a) {
        a || (a = 1E3);
        return ob / a
    };
    this.game.getTime =
        function () {
            return N
        };
    var oc = function () {
            return k.requestAnimationFrame || k.webkitRequestAnimationFrame || k.mozRequestAnimationFrame || k.oRequestAnimationFrame || k.msRequestAnimationFrame || function (a) {
                k.setTimeout(a, 1E3 / Ra)
            }
        },
        za = oc(),
        pc = function () {
            N = Date.now();
            Yb && g.clearRect(0, 0, m, n);
            p.runEvent("preLoop")
        },
        qc = function () {
            p.runEvent("postLoop"); - 1 !== pb && (ob = N - pb);
            pb = N
        },
        O = {
            func: function () {
                console.log('please, use a "setLoop" function.');
                za = function () {}
            },
            events: !1,
            start: !1,
            end: !1,
            audio: !1,
            fps: !1,
            name: "NotLoop"
        },
        rc = function () {
            O.audio && u(O.audio, function (a) {
                a.stop()
            })
        };
    this.game.newLoop = function (a, b, c, d, h) {
        "function" === typeof b ? ia[a] = {
            events: h || !1,
            func: b,
            start: c || !1,
            end: d || !1,
            audio: !1,
            fps: !1,
            name: a
        } : ja("error in newLoop : " + b + " is not a function")
    };
    this.game.newLoopFromClassObject = function (a, b) {
        if (!b.update) return ja('error in newLoopFromClassObject : function "update" not found');
        ia[a] = {
            events: b.events || !1,
            func: b.update,
            start: b.entry || !1,
            end: b.exit || !1,
            audio: !1,
            fps: !1,
            name: a
        }
    };
    this.game.newLoopFromConstructor =
        function (a, b) {
            z.game.newLoopFromClassObject(a, new b)
        };
    this.game.setLoopSound = function (a, b) {
        var c;
        ia[a].audio || (ia[a].audio = []);
        for (c = 0; c < b.length; c += 1) ia[a].audio.length = 0, b[c].setNextPlay(b[c + 1 === b.length ? 0 : c + 1]), ia[a].audio.push(b[c])
    };
    this.game.setLoop = function (a) {
        if (!ia[a]) return ja("setLoop : " + a + " is no a Loop");
        rc();
        gc();
        Z = {};
        Ja = {};
        qa = {};
        La = Ka = !1;
        jc();
        Jb(f(0, 0));
        O.end && O.end();
        p.runEvent("exitLoop");
        O = ia[a];
        C.loadFromEvents(O.events);
        O.start && O.start();
        p.runEvent("entryLoop");
        O.audio && O.audio[0].play()
    };
    var C = new function () {
        var a = {
                "mouse:click": []
            },
            b = this;
        this.add = function (b, d) {
            a[b] || (a[b] = []);
            a[b].push(d)
        };
        this.run = function (b, d) {
            a[b] && u(a[b], function (a) {
                return a(d)
            })
        };
        this.clear = function (b) {
            a[b] && (a[b].length = 0)
        };
        this.clearAll = function () {
            F(a, function (a) {
                a.length = 0
            })
        };
        this.loadFromEvents = function (a) {
            b.clearAll();
            a && F(a, function (a, c) {
                b.add(c, a)
            })
        };
        this.isEvent = function (b) {
            return !!a[b]
        }
    };
    this.game.tick = function (a, b) {
        qb === a && b()
    };
    var rb = {};
    this.game.skip = function (a, b, c) {
        v(rb[a]) || (rb[a] = 0);
        rb[a]++ >=
            b && (c(), rb[a] = 0)
    };
    var Kb = function () {
            60 > qb ? qb++ : qb = 0;
            if (60 > Ra) {
                var a = 1E3 / Ra;
                try {
                    N = Date.now(), N - nc > a && (pc(), O.func(ob), nc = N, qc())
                } catch (b) {
                    Da && Va(b), zb && (Da || Va(b), ja())
                }
                za(Kb);
                return !1
            }
            try {
                pc(), O.func(ob), qc()
            } catch (b) {
                Da && Va(b), zb && (Da || Va(b), ja())
            }
            za(Kb)
        },
        sc = function (a) {
            ha || (ha = !0, Ra = a || 60, za(Kb), p.runEvent("gameStart"))
        },
        ja = function (a) {
            ha && (ha = !1, rc(), za = function () {
                "undefined" !== typeof a && ca(a)
            }, p.runEvent("gameStop"))
        };
    this.game.isStopped = function () {
        return !ha
    };
    this.game.getWH = function () {
        return {
            w: m,
            h: n,
            w2: G,
            h2: H
        }
    };
    this.game.getWH2 = function () {
        return {
            w: G,
            h: H
        }
    };
    this.game.getResolution = function () {
        return Math.min(m / ka, n / la)
    };
    this.game.startLoop = function (a, b) {
        this.setLoop(a);
        this.start(b)
    };
    this.game.start = sc;
    this.game.stop = ja;
    this.game.resume = function () {
        if (!ha) return O.audio && O.audio[0].play(), za = oc(), pb = -1, sc(), !1
    };
    var Nc = 0,
        D = function (a) {
            this.type = "BaseObject";
            this.id = Nc += 1;
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.w = a.w || 0;
            this.h = a.h || 0;
            this.ondraw = a.ondraw ? a.ondraw : !1;
            "function" === typeof a.predraw && (this.predraw =
                a.predraw);
            this.parent = !1;
            this.children = [];
            this.fillColor = a.fillColor || !1;
            this.strokeColor = a.strokeColor || t.strokeStyle;
            this.strokeWidth = a.strokeWidth || 0;
            this.angle = a.angle || 0;
            this.alpha = v(a.alpha) ? a.alpha : 1;
            this.center = f(0, 0);
            this.box = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            this.visible = v(a.visible) ? a.visible : !0;
            this.flip = f(0, 0);
            this.__dataset__ = {};
            this.setShadow(a);
            "object" === typeof a.data && F(a.data, function (a, c) {
                this.dataSet(c, a)
            }, !0);
            a.userData && this.setUserData(a.userData);
            a.center && this.setCenter(a.center);
            a.box &&
                this.setBox(a.box);
            a.size && this.setSize(a.size);
            a.sizeC && this.setSizeC(a.sizeC);
            a.position && this.setPosition(a.position);
            a.positionC && this.setPositionC(a.positionC);
            "function" === typeof a.oncreate && (this.oncreate = a.oncreate, this.oncreate(this), delete this.oncreate)
        };
    D.prototype = {
        predraw: function () {},
        getID: function () {
            return this.id
        },
        getType: function () {
            return this.type
        },
        dataDel: function (a) {
            delete this.__dataset__[a]
        },
        dataSet: function (a, b) {
            this.__dataset__[a] = b
        },
        dataGet: function (a, b) {
            return "undefined" !==
                typeof this.__dataset__[a] ? this.__dataset__[a] : "undefined" !== typeof b ? b : !1
        },
        data: function () {
            return this.__dataset__
        },
        getParent: function () {
            return this.parent
        },
        addChild: function (a) {
            a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(I(a.getPositionC(), this.getPositionC(), this.angle)), a.turn(this.angle))
        },
        delChild: function (a) {
            a.parent = !1;
            var b;
            var c = 0;
            for (b = this.children.length; c < b; c += 1)
                if (this.children[c].id == a.id) {
                    this.children.splice(c, 1);
                    break
                }
        },
        delParent: function () {
            this.parent.delChild(this)
        },
        setBox: function (a) {
            a.offset && (this.box.x = a.offset.x || 0, this.box.y = a.offset.y || 0);
            a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
        },
        isArrIntersect: function (a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1)
                if (a[c].id !== this.id && this.isIntersect(a[c])) return a[c];
            return !1
        },
        isArrInside: function (a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1)
                if (this.isDynamicInside(a[c].getDynamicBox())) return a[c];
            return !1
        },
        getNearest: function (a) {
            var b = 0,
                c = !1,
                d;
            var h = 0;
            for (d = a.length; h < d; h += 1)
                if (this.id !== a[h].id) {
                    !1 === c && (c =
                        this.getDistanceC(a[h].getPositionC()), b = h);
                    var e = this.getDistanceC(a[h].getPositionC());
                    e < c && (c = e, b = h)
                }
            return a[b]
        },
        setFlip: function (a, b) {
            v(a) && this.flip.x !== a && (this.flip.x = a);
            v(b) && this.flip.y !== b && (this.flip.y = b)
        },
        setUserData: function (a) {
            for (var b in a) v(this[b]) || (this[b] = a[b])
        },
        setShadow: function (a) {
            this.shadowColor = a.shadowColor || !1;
            this.shadowBlur = v(a.shadowBlur) ? a.shadowBlur : 3;
            this.shadowX = a.shadowX || 0;
            this.shadowY = a.shadowY || 0
        },
        getDynamicBox: function () {
            var a = this.getPosition(1);
            return 0 ===
                this.angle ? [f(this.x + this.box.x, this.y + this.box.y), f(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), f(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), f(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [I(f(this.x + this.box.x, this.y + this.box.y), a, this.getAngle()), I(f(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), I(f(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), I(f(this.x + this.box.x, this.y +
                    this.box.y + this.h + this.box.h), a, this.getAngle())]
        },
        isDynamicIntersect: function (a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(),
                c;
            for (c = b.length - 1; 0 <= c; c--)
                if (oa(b[c], a)) return !0;
            for (c = b.length - 1; 0 <= c; c--)
                if (oa(a[c], b)) return !0;
            return !1
        },
        isIntersect: function (a) {
            return a.visible ? this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) : this.isStaticIntersect(a.getStaticBox()) : !1
        },
        isDynamicInside: function (a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(),
                c, d = 0;
            var h = 0;
            for (c = b.length; h < c; h +=
                1) oa(b[h], a) && (d += 1);
            return d === b.length ? !0 : !1
        },
        drawDynamicBox: function (a) {
            S(this, 1);
            g.shadowColor = "transparent";
            Aa(f(this.x + this.box.x, this.y + this.box.y), E(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            tc(f(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow");
            P()
        },
        drawStaticBox: function (a) {
            g.shadowColor = "transparent";
            Aa(f(this.x + this.box.x, this.y + this.box.y), E(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            tc(f(this.x + this.w / 2 + this.center.x, this.y + this.h /
                2 + this.center.y), 10, a || "yellow")
        },
        isStaticIntersect: function (a) {
            return this.y + this.box.y + this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x < a.x + a.w && this.y + this.box.y < a.y + a.h
        },
        getStaticBoxPosition: function () {
            return {
                x: this.x + this.box.x,
                y: this.y + this.box.y,
                w: this.x + this.box.x + this.w + this.box.w,
                h: this.y + this.box.y + this.h + this.box.h
            }
        },
        getStaticBox: function () {
            return {
                x: this.x + this.box.x,
                y: this.y + this.box.y,
                w: this.w + this.box.w,
                h: this.h + this.box.h
            }
        },
        setAlpha: function (a) {
            this.alpha !==
                a && (this.alpha = 0 <= a ? 1 >= a ? a : 1 : 0)
        },
        transparent: function (a) {
            this.setAlpha(this.alpha + a)
        },
        getAlpha: function () {
            return this.alpha
        },
        rotate: function (a) {
            this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
        },
        setCenter: function (a) {
            this.center = f(a.x, a.y)
        },
        nullCenter: function (a) {
            a || (a = f(0, 0));
            this.center = f(-this.w / 2 + a.x, -this.h / 2 + a.y)
        },
        getCenter: function () {
            return f(this.center.x, this.center.y)
        },
        getBox: function () {
            return this.box
        },
        move: function (a) {
            this.x += a.x;
            this.y += a.y
        },
        circling: function (a, b, c) {
            v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.x = a.x + b * Math.cos(B(this.circlingAnglePointJS));
            this.y = a.y + b * Math.sin(B(this.circlingAnglePointJS));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        },
        circlingC: function (a, b, c) {
            v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.setPositionC(f(a.x + b * Math.cos(B(this.circlingAnglePointJS)), a.y + b * Math.sin(B(this.circlingAnglePointJS))));
            this.circlingAnglePointJS = 360 <
                this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        },
        motion: function (a, b, c) {
            v(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.x = a.x + b.w * Math.cos(B(this.motionPercentPointJS));
            this.y = a.y + b.h * Math.sin(B(this.motionPercentPointJS));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        },
        motionC: function (a, b, c) {
            v(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.setPositionC(f(a.x + b.w * Math.cos(B(this.motionPercentPointJS)), a.y + b.h * Math.sin(B(this.motionPercentPointJS))));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        },
        scale: function (a) {
            this.w *= a;
            this.h *= a
        },
        scaleC: function (a) {
            var b = this.w,
                c = this.h;
            this.scale(a);
            this.move(f(-((this.w - b) / 2), -((this.h - c) / 2)))
        },
        getPosition: function (a) {
            return 1 === a ? f(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 === a ? (a = f(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = I(a, this.getPosition(1), this.angle)), f(a.x, a.y)) : f(this.x, this.y)
        },
        getPositionC: function () {
            return f(this.x + (this.w /
                2 + this.center.x), this.y + (this.h / 2 + this.center.y))
        },
        getPositionS: function () {
            return f(this.x + e.x, this.y + e.x)
        },
        getPositionCS: function () {
            return f(this.x + (this.w / 2 + this.center.x) + e.x, this.y + (this.h / 2 + this.center.y) + e.y)
        },
        setPosition: function (a) {
            !1 !== a.x && (this.x = a.x);
            !1 !== a.y && (this.y = a.y)
        },
        setPositionS: function (a) {
            !1 !== a.x && (this.x = a.x + e.x);
            !1 !== a.y && (this.y = a.y + e.y)
        },
        setPositionC: function (a) {
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
            !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y)
        },
        setPositionCS: function (a) {
            !1 !==
                a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + e.x);
            !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + e.y)
        },
        getSize: function () {
            return E(this.w, this.h)
        },
        setSize: function (a) {
            this.w = a.w;
            this.h = a.h
        },
        setSizeC: function (a) {
            this.w = a.w;
            this.h = a.h;
            this.move(f(-(a.w / 2), -(a.h / 2)))
        },
        turn: function (a) {
            this.angle += a
        },
        rotateForAngle: function (a, b) {
            0 > this.angle && (this.angle += 360);
            0 > a && (a += 360);
            var c = this.angle - a;
            180 < c ? c -= 360 : -180 > c && (c += 360);
            c >= -b - .5 && c <= b + .5 ? this.angle = a : c > b + .5 ? this.angle -= b : c < -b - .5 && (this.angle += b)
        },
        rotateForPoint: function (a,
            b) {
            var c = Fa(this.getPositionC(), a);
            this.rotateForAngle(c, b)
        },
        rotateForObject: function (a, b) {
            var c = Fa(this.getPositionC(), a.getPositionC());
            this.rotateForAngle(c, b)
        },
        moveTo: function (a, b) {
            var c = B(Fa(this.getPosition(), a));
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        },
        moveToC: function (a, b) {
            var c = B(Fa(this.getPositionC(), a));
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        },
        moveAngle: function (a, b) {
            b = B(v(b) ? b : this.angle);
            this.x += a * Math.cos(b);
            this.y += a * Math.sin(b)
        },
        moveTime: function (a, b) {
            b = b || 1;
            var c = this.getPosition();
            this.move(f((a.x - c.x) / b, (a.y - c.y) / b))
        },
        moveTimeC: function (a, b) {
            b = b || 1;
            var c = this.getPosition(1);
            this.move(f((a.x - c.x) / b, (a.y - c.y) / b))
        },
        getAngle: function () {
            return this.angle
        },
        setAngle: function (a) {
            this.angle !== a && (this.angle = a % 360)
        },
        getDistance: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(2).x, 2) + Math.pow(a.y - this.getPosition(2).y, 2))
        },
        getDistanceC: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
        },
        setVisible: function (a) {
            this.visible = !0 === a
        },
        isVisible: function () {
            return this.visible
        },
        isInCamera: function () {
            return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
        },
        isInCameraStatic: function () {
            return this.x + this.w < e.x || this.x > e.x + m || this.y + this.h < e.y || this.y > e.y + n ? !1 : !0
        },
        isInCameraDynamic: function () {
            var a = this.getDynamicBox(),
                b = [f(e.x, e.y), f(e.x + m, e.y), f(e.x + m, e.y + n), f(e.x, e.y + n)],
                c, d = 0;
            var h = 0;
            for (c = a.length; h < c; h += 1) oa(a[h], b) && (d += 1);
            return 0 < d
        },
        draw: function () {}
    };
    this.game.newBaseObject = function (a) {
        return new D(a)
    };
    var sb =
        function (a) {
            D.call(this, a);
            this.type = "TriangleObject"
        };
    da(D, sb);
    sb.prototype.getDynamicBox = function () {
        var a = this.getPositionC();
        return 0 === this.angle ? [f(this.x + this.w / 2, this.y), f(this.x + this.w, this.y + this.h), f(this.x, this.y + this.h)] : [I(f(this.x + this.w / 2, this.y), a, this.getAngle()), I(f(this.x + this.w, this.y + this.h), a, this.getAngle()), I(f(this.x, this.y + this.h), a, this.getAngle())]
    };
    sb.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this),
                a = !0;
            Sa(this.x, this.y, [f(this.w / 2, 0), f(this.w, this.h), f(0, this.h)], this.fillColor, this.strokeWidth ? this.strokeColor : !1, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    this.game.newTriangleObject = function (a) {
        return new sb(a)
    };
    var Lb = function (a) {
        D.call(this, a);
        this.type = "RectObject"
    };
    da(D, Lb);
    Lb.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this), a = !0;
            Aa(f(this.x, this.y), E(this.w, this.h), this.fillColor, this.strokeColor,
                this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    this.game.newRectObject = function (a) {
        return new Lb(a)
    };
    var Mb = function (a) {
        D.call(this, a);
        this.type = "RoundRectObject";
        this.radius = a.radius || 1
    };
    da(D, Mb);
    Mb.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this), a = !0;
            tb(f(this.x, this.y), E(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    this.game.newRoundRectObject =
        function (a) {
            return new Mb(a)
        };
    var sa = function (a) {
        D.call(this, a);
        this.radius = a.radius || 5;
        a.scale && (this.radius *= a.scale);
        this.w = 2 * this.radius;
        this.h = 2 * this.radius;
        this.type = "CircleObject";
        a.positionC && this.setPositionC(a.positionC)
    };
    da(D, sa);
    sa.prototype.draw = function () {
        this.predraw();
        if (this.visible) {
            if (!this.alpha) return this.ondraw ? this.ondraw() : null;
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this), a = !0;
            Ba(f(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    sa.prototype.scale = function (a) {
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a ? a / 2 : 0
    };
    sa.prototype.scaleC = function (a) {
        var b = this.w,
            c = this.h;
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a;
        this.move(f(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    sa.prototype.getRadius = function () {
        return this.radius
    };
    sa.prototype.setRadius = function (a) {
        a && this.radius !== a && (this.radius = a, this.w = 2 * a, this.h = 2 * a)
    };
    this.game.newCircleObject = function (a) {
        return new sa(a)
    };
    var Nb = function (a) {
        this.file = a.file;
        this.w =
            a.w;
        this.h = a.h;
        this.read = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        a.read && (this.read.w = a.read.w || 0, this.read.h = a.read.h || 0, this.read.x = a.read.x || 0, this.read.y = a.read.y || 0);
        this.countX = a.countX;
        this.countY = a.countY;
        this.fullW = this.countX * this.w;
        this.fullH = this.countY * this.h;
        this.cnv = k.document.createElement("canvas");
        this.cnv.width = this.w;
        this.cnv.height = this.h;
        this.ctx = this.cnv.getContext("2d");
        this.loaded = !1;
        this.x = a.x || 0;
        this.y = a.y || 0;
        a = k.document.createElement("img");
        var b = this;
        a.onload = function () {
            b.ctx.drawImage(this,
                b.read.x ? b.read.x : 0, b.read.y ? b.read.y : 0, b.read.w ? b.read.w : this.width, b.read.h ? b.read.h : this.height, 0, 0, b.w, b.h);
            b.loaded = !0;
            A.load()
        };
        a.src = this.file;
        A.add()
    };
    Nb.prototype.draw = function () {
        if (this.loaded) {
            var a = -e.x + this.x,
                b = -e.y + this.y,
                c, d;
            for (d = 0; d < this.countY; d += 1)
                if (!(this.y + d * this.h + this.h < e.y || this.y + d * this.h > e.y + n))
                    for (c = 0; c < this.countX; c += 1) this.x + c * this.w + this.w < e.x || this.x + c * this.w > e.x + m || g.drawImage(this.cnv, a + c * this.w, b + d * this.h, this.w, this.h)
        }
    };
    Nb.prototype.getSize = function () {
        return this.loaded ?
            E(this.fullW, this.fullH) : E()
    };
    this.game.newBackgroundObject = function (a) {
        return new Nb(a)
    };
    var Ob = function (a) {
        D.call(this, a);
        this.type = "EllipsObject"
    };
    da(D, Ob);
    Ob.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha) {
            S(this);
            Ba(f(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            P()
        }
    };
    this.game.newEllipsObject = function (a) {
        return new Ob(a)
    };
    var aa = function (a) {
        D.call(this, a);
        this.type = "TextObject";
        this.text = a.text || "TextObject";
        this.color =
            a.color || "";
        this.size = 0 < a.size ? a.size : 10;
        a.scale && (this.size *= a.scale);
        this.font = a.font || "serif";
        this.style = a.style || "";
        this.align = "left";
        this.valign = "top";
        this.radius = a.radius || 0;
        this.padding = a.padding || 0;
        this.w = Pb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || !1;
        this.strokeWidthText = a.strokeWidthText || !1;
        this.textDY = -this.size / 11;
        a.positionC && this.setPositionC(a.positionC)
    };
    da(D, aa);
    aa.prototype.reStyle = function (a) {
        this.text =
            a.text || this.text;
        this.color = a.color || this.color;
        this.size = a.size || this.size;
        this.font = a.font || this.font;
        this.style = a.style || this.style;
        this.padding = a.padding || this.padding;
        this.w = Pb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || this.strokeColorText;
        this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
        this.strokeColor = a.strokeColor || this.strokeColor;
        this.strokeWidth = a.strokeWidth || this.strokeWidth;
        this.fillColor =
            a.fillColor || this.fillColor;
        this.textDY = -this.size / 11
    };
    aa.prototype.setText = function (a) {
        this.text !== a && this.reStyle({
            text: a
        })
    };
    aa.prototype.getText = function () {
        return this.text
    };
    aa.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this), a = !0;
            if (this.fillColor || this.strokeColor) this.radius ? tb(f(this.x, this.y), E(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth) : Aa(f(this.x, this.y), E(this.w, this.h),
                this.fillColor, this.strokeColor, this.strokeWidth);
            ta(f(this.x + this.padding, this.textDY + this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    aa.prototype.scale = function (a) {
        this.reStyle({
            size: this.size * a
        })
    };
    aa.prototype.scaleC = function (a) {
        var b = this.w,
            c = this.h;
        this.reStyle({
            size: this.size * a
        });
        this.move(f(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    aa.prototype.setSize = function (a) {
        this.size !== a && this.reStyle({
            size: a
        })
    };
    aa.prototype.setSizeC = function (a) {
        this.size !== a && (this.reStyle({
            size: a
        }), this.move(f(-a / 2, -a / 2)))
    };
    var Pb = function (a, b, c, d) {
        var h = k.document.createElement("canvas").getContext("2d");
        h.font = (b ? b + " " : "") + c + "px " + d;
        return h.measureText(a).width
    };
    this.OOP.getTextWidth = function (a) {
        return Pb(a.text, a.style || "", a.size || 10, a.font || "serif")
    };
    this.game.newTextObject = function (a) {
        return new aa(a)
    };
    var T = function (a) {
        D.call(this, a);
        this.type = "PolygonObject";
        this.points = [];
        this.pointColor = a.pointColor || !1;
        this.w =
            this.h = 0;
        var b = this;
        "undefined" !== typeof a.points && u(a.points, function (a) {
            b.addPoint(a)
        })
    };
    da(D, T);
    T.prototype.addPoint = function (a) {
        this.points.push(a);
        a.x > this.w && (this.w = a.x);
        a.x > this.h && (this.h = a.x)
    };
    T.prototype.delPoint = function (a) {
        this.points.splice(a, 1)
    };
    T.prototype.clearPoints = function () {
        this.points.length = 0
    };
    T.prototype.getPoints = function () {
        return this.points
    };
    T.prototype.getCount = function () {
        return this.points.length
    };
    T.prototype.getPoint = function (a) {
        return this.points[a]
    };
    T.prototype.isIntersect =
        function (a) {
            return a.visible ? this.isDynamicIntersect(a.getDynamicBox()) : !1
        };
    T.prototype.drawDynamicBox = function (a) {
        Sa(this.x, this.y, this.points, !1, "yellow", 1, "red")
    };
    T.prototype.getDynamicBox = function () {
        for (var a = [], b = this.points.length - 1; 0 <= b; b--) a.push(I(this.points[b], f(this.w / 2 + this.center.x, this.h / 2 + this.center.y), this.angle).plus(f(this.x, this.y)));
        return a
    };
    T.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this),
                a = !0;
            Sa(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    this.game.newPolygonObject = function (a) {
        return new T(a)
    };
    var ua = function (a) {
        D.call(this, a);
        this.type = "ImageObject";
        this.loaded = !1;
        this.file = "";
        this.forOnLoad = a.onload || !1;
        uc(a.file, this, a.scale || 1)
    };
    da(D, ua);
    ua.prototype.draw = function () {
        this.predraw();
        if (this.visible && this.alpha && this.loaded) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor || this.flip.x ||
                this.flip.y) S(this), a = !0;
            vc(f(this.x, this.y), E(this.w, this.h), this.file);
            if (this.ondraw) this.ondraw();
            a && P()
        }
    };
    ua.prototype.simpleDraw = function (a) {
        this.predraw();
        if (this.loaded) {
            var b = !1;
            if (this.angle || 1 !== this.alpha || this.shadowColor) S(this), b = !0;
            vc(f(a.x, a.y), E(this.w, this.h), this.file);
            b && P()
        }
    };
    ua.prototype.setImage = function (a, b) {
        this.file !== a && (v(l[a]) ? (this.file = a, b && b()) : (this.loaded = !1, this.origHeight = this.origWidth = 0, this.forOnLoad = b || !1, uc(a, this)))
    };
    ua.prototype.getImage = function () {
        return this.file
    };
    ua.prototype.resize = function (a) {
        if (!1 !== a.w && !1 === a.h) {
            var b = a.w / this.w;
            this.w = a.w;
            this.h *= b
        } else !1 !== a.h && !1 === a.w ? (b = a.h / this.h, this.h = a.h, this.w *= b) : !1 !== a.w && !1 !== a.h && (this.w = a.w, this.h = a.h)
    };
    this.game.newImageObject = function (a) {
        return new ua(a)
    };
    var Q = function (a) {
        D.call(this, a);
        this.type = "AnimationObject";
        this.frame = 0;
        this.anim = a.animation;
        this.step = a.delay || 10;
        this.toFrameStep = this.difStep = 0;
        a.scale && (this.w *= a.scale, this.h *= a.scale)
    };
    da(D, Q);
    Q.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 !== this.alpha || this.flip.x || this.flip.y || this.shadowColor) S(this), a = !0;
            Qb(this.anim, f(this.x, this.y), E(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep += 1;
            a && P()
        }
    };
    Q.prototype.drawFrames = function (a, b, c) {
        if (this.visible && this.alpha) {
            if (this.frame < a || this.frame > b) this.frame = a;
            c = !1;
            if (this.angle || 1 !== this.alpha || this.flip.x || this.flip.y || this.shadowColor) S(this), c = !0;
            Qb(this.anim,
                f(this.x, this.y), E(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep += 1;
            c && P()
        }
    };
    Q.prototype.drawFrame = function (a) {
        if (this.visible && this.alpha) {
            var b = !1;
            if (this.angle || 1 !== this.alpha || this.flip.x || this.flip.y || this.shadowColor) S(this), b = !0;
            Qb(this.anim, f(this.x, this.y), E(this.w, this.h), a);
            if (this.ondraw) this.ondraw();
            b && P()
        }
    };
    Q.prototype.drawToFrame = function (a) {
        if (this.visible && this.alpha) {
            if (this.frame <
                a) this.toFrameStep = 1;
            else if (this.frame > a) this.toFrameStep = -1;
            else {
                this.drawFrame(a);
                return
            }
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
        }
    };
    Q.prototype.drawReverFrames = function (a, b) {
        if (this.visible && this.alpha) {
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame +=
                this.toFrameStep, this.difStep = 0) : this.difStep += 1
        }
    };
    Q.prototype.setAnimation = function (a) {
        a !== this.anim && (this.frame = 0, this.anim = a)
    };
    Q.prototype.getAnimation = function () {
        return this.anim
    };
    Q.prototype.setDelay = function (a) {
        this.step = 0 < a ? a : this.step
    };
    Q.prototype.getDelay = function () {
        return this.step
    };
    Q.prototype.getFrame = function () {
        return this.frame
    };
    Q.prototype.setFrame = function (a) {
        this.frame = a
    };
    Q.prototype.getLastFrame = function () {
        return this.anim.endFrame
    };
    this.game.newAnimationObject = function (a) {
        return new Q(a)
    };
    var mc = function (a) {
            var b = !1;
            "RectObject" === a.type ? b = z.game.newRectObject({}) : "CircleObject" === a.type ? b = z.game.newCircleObject({}) : "RoundRectObject" === a.type ? b = z.game.newRoundRectObject({}) : "TextObject" === a.type ? b = z.game.newTextObject({}) : "EllipsObject" === a.type ? b = z.game.newEllipsObject({}) : "ImageObject" === a.type ? b = z.game.newImageObject({
                    file: a.file
                }) : "TriangleObject" === a.type ? b = z.game.newTriangleObject({}) : "PolygonObject" === a.type ? b = z.game.newTriangleObject({
                    points: a.points
                }) : "AnimationObject" ===
                a.type && (b = z.game.newAnimationObject({
                    animation: a.anim
                }));
            return b
        },
        Rb = {},
        Oc = 0,
        va = function (a, b) {
            this.file = a;
            this.loaded = !1;
            this.h = this.w = 0;
            this.id = Oc++;
            this.toLoad = [];
            var c = k.document.createElement("img"),
                d = this;
            Rb[a] = d;
            c.onload = function () {
                d.loaded = !0;
                d.w = this.width;
                d.h = this.height;
                d.img = k.document.createElement("canvas");
                d.img.width = this.width;
                d.img.height = this.height;
                d.context = d.img.getContext("2d");
                d.context.drawImage(this, 0, 0);
                d.toLoad.length && u(d.toLoad, function (a) {
                    a.func(d.context, a.w, a.h, a.r)
                });
                b && (d.onLoad = b, d.onLoad());
                A.load()
            };
            c.src = a;
            A.add()
        };
    va.prototype.onContext = function (a) {
        this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({
            w: this.w,
            h: this.h,
            r: 1,
            func: a
        })
    };
    va.prototype.getCanvas = function () {
        return this.img
    };
    var Pc = 0;
    va.prototype.getAnimation = function (a, b, c, d, e) {
        var h = function (a, b, c, d, e, h) {
            this.id = Pc++;
            this.image = a;
            this.x = b;
            this.y = c;
            this.w = d;
            this.h = e;
            this.endFrame = this.r = h ? h - 1 : 0;
            this.frameCount = this.r + 1
        };
        h.prototype = {
            onContext: function (a) {
                this.image.loaded ? a(this.image.context,
                    this.w, this.h, this.r) : this.image.toLoad.push({
                    w: this.w,
                    h: this.h,
                    r: this.r,
                    func: a
                })
            },
            getImage: function () {
                return this.image
            },
            getCount: function () {
                return this.r
            }
        };
        return new h(this, a, b, c, d, e)
    };
    var Sb = function (a, b) {
        this.loaded = !0;
        this.w = a;
        this.h = b;
        this.img = k.document.createElement("canvas");
        this.img.width = a;
        this.img.height = b;
        this.context = this.img.getContext("2d")
    };
    Sb.prototype.onContext = va.prototype.onContext;
    Sb.prototype.getAnimation = va.prototype.getAnimation;
    this.tiles.newDrawImage = function (a, b) {
        return new Sb(a,
            b)
    };
    this.tiles.newImage = function (a, b) {
        return Rb[a] ? Rb[a] : new va(a, b)
    };
    this.tiles.newAnimation = function (a, b, c, d) {
        return (new va(a)).getAnimation(0, 0, b, c, d)
    };
    var Qb = function (a, b, c, d) {
            if (a && a.image.loaded) {
                var h = -e.x,
                    f = -e.y;
                a.image.img && g.drawImage(a.image.img, a.x + a.w * d, a.y, a.w, a.h, b.x + h, b.y + f, c.w, c.h)
            }
        },
        l = {},
        uc = function (a, b, c) {
            if (v(l[a])) {
                b.loaded = !0;
                b.file = a;
                if (b.w && !b.h) {
                    var d = b.w / l[a].w;
                    var e = b.w;
                    var f = l[a].h * d
                } else !b.w && b.h ? (d = b.h / l[a].h, f = b.h, e = l[a].w * d) : b.w && b.h ? (e = b.w, f = b.h) : (e = l[a].w, f = l[a].h);
                c && (e *= c, f *= c);
                b.w = e;
                b.h = f;
                b.forOnLoad && b.forOnLoad()
            } else e = k.document.createElement("img"), e.onload = function () {
                l[a] = {};
                l[a].loaded = !0;
                l[a].img = this;
                l[a].w = this.width;
                l[a].h = this.height;
                if (v(b)) {
                    b.loaded = !0;
                    if (b.w && !b.h) {
                        var d = b.w / l[a].w;
                        var e = b.w;
                        var h = l[a].h * d
                    } else !b.w && b.h ? (d = b.h / l[a].h, h = b.h, e = l[a].w * d) : b.w && b.h ? (e = b.w, h = b.h) : (e = l[a].w, h = l[a].h);
                    c && (e *= c, h *= c);
                    b.w = e;
                    b.h = h;
                    b.file = a;
                    b.forOnLoad && b.forOnLoad()
                }
                A.load()
            }, e.src = a, A.add()
        },
        vc = function (a, b, c) {
            if (c) {
                var d = -e.x,
                    h = -e.y;
                l[c] && g.drawImage(l[c].img,
                    0, 0, l[c].w, l[c].h, a.x + d, a.y + h, b.w, b.h)
            }
        },
        wc = function (a) {
            this.type = "Mesh";
            this.objs = [];
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.angle = a.angle || 0;
            this.count = 0;
            var b = this;
            a.add && u(a.add, function (a) {
                b.add(a)
            });
            this.angle && this.setAngle(this.angle)
        };
    wc.prototype = {
        getCount: function () {
            return this.count
        },
        getObjects: function () {
            return this.objs
        },
        add: function (a) {
            this.count += 1;
            this.objs.push(a);
            a.offsetMesh = a.getPosition(1);
            a.turn(this.angle);
            a.setPositionC(f(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
        },
        del: function (a) {
            var b =
                this;
            u(this.objs, function (c) {
                c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
            })
        },
        draw: function (a) {
            u(this.objs, function (a) {
                a.draw()
            })
        },
        move: function (a) {
            this.x += a.x || 0;
            this.y += a.y || 0;
            var b = this;
            u(this.objs, function (a) {
                a.setPositionC(f(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
            })
        },
        turn: function (a) {
            if (0 != a) {
                this.angle %= 360;
                this.angle += a;
                var b = f(this.x, this.y),
                    c = this;
                u(this.objs, function (d) {
                    d.turn(a);
                    d.setPositionC(I(f(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        },
        setAngle: function (a) {
            if (a != this.angle) {
                this.angle =
                    a %= 360;
                var b = f(this.x, this.y),
                    c = this;
                u(this.objs, function (d) {
                    d.setAngle(a);
                    d.setPositionC(I(f(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        },
        setPosition: function (a) {
            if (this.x != a.x || this.y != a.y) {
                this.x = a.x || this.x;
                this.y = a.y || this.y;
                var b = this;
                u(this.objs, function (a) {
                    b.angle ? a.setPositionC(I(f(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), f(b.x, b.y), b.angle)) : a.setPositionC(f(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
                })
            }
        },
        isDynamicIntersect: function (a) {
            if (3 > a.length) return !1;
            var b = !1;
            u(this.objs, function (c) {
                if (c.isDynamicIntersect(a)) return b =
                    c
            });
            return b
        },
        isStaticIntersect: function (a) {
            var b = !1;
            u(this.objs, function (c) {
                if (c.isStaticIntersect(a)) return b = c
            });
            return b
        },
        isIntersect: function (a) {
            var b = !1;
            u(this.objs, function (c) {
                if (c.isIntersect(a)) return b = c
            });
            return b
        }
    };
    this.game.newMesh = function (a) {
        return new wc(a)
    };
    this.camera.shake = function (a, b) {
        e.x = a.x + R(-1, 1, !0) * b.w;
        e.y = a.y + R(-1, 1, !0) * b.h
    };
    this.camera.shakeC = function (a, b) {
        e.x = -G + a.x + R(-1, 1, !0) * b.w;
        e.y = -H + a.y + R(-1, 1, !0) * b.h
    };
    this.camera.scale = function (a) {
        ma *= a.x;
        na *= a.y;
        m /= a.x;
        n /= a.y;
        G =
            m / 2;
        H = n / 2;
        g.scale(a.x, a.y);
        g.save();
        Ma && (x.x /= a.x, x.y /= a.y)
    };
    this.camera.scaleC = function (a) {
        var b = m,
            c = n;
        ma *= a.x;
        na *= a.y;
        m /= a.x;
        n /= a.y;
        G = m / 2;
        H = n / 2;
        g.scale(a.x, a.y);
        g.save();
        e.x += (b - m) / 2;
        e.y += (c - n) / 2;
        Ma && (x.x /= a.x, x.y /= a.y)
    };
    this.camera.circling = function (a, b, c) {
        v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        e.x = a.x + b * Math.cos(B(this.circlingAnglePointJS));
        e.y = a.y + b * Math.sin(B(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS +
            c
    };
    this.camera.circlingC = function (a, b, c) {
        v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        e.x = -G + a.x + b * Math.cos(B(this.circlingAnglePointJS));
        e.y = -H + a.y + b * Math.sin(B(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
    };
    this.camera.motion = function (a, b, c) {
        v(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        e.x = a.x + b.w * Math.cos(B(this.motionPercentPointJS));
        e.y = a.y + b.h * Math.sin(B(this.motionPercentPointJS));
        this.motionPercentPointJS =
            360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.motionC = function (a, b, c) {
        v(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        this.setPositionC(f(a.x + b.w * Math.cos(B(this.motionPercentPointJS)), a.y + b.h * Math.sin(B(this.motionPercentPointJS))));
        this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.follow = function (a, b) {
        this.moveTimeC(a.getPositionC(), b || 10)
    };
    this.camera.move = function (a) {
        e.x += a.x || 0;
        e.y += a.y || 0
    };
    this.camera.moveTime =
        function (a, b) {
            b = b || 1;
            var c = f(e.x, e.y);
            this.move(f(ma * (a.x - c.x) / b, na * (a.y - c.y) / b))
        };
    this.camera.moveTimeC = function (a, b) {
        b = b || 1;
        var c = f(e.x + G, e.y + H);
        this.move(f(ma * (a.x - c.x) / b, na * (a.y - c.y) / b))
    };
    this.camera.setPosition = function (a) {
        Jb(f(!1 !== a.x ? a.x : e.x, !1 !== a.y ? a.y : e.y))
    };
    this.camera.setPositionC = function (a) {
        Jb(f(!1 !== a.x ? a.x - G : e.x, !1 !== a.y ? a.y - H : e.y))
    };
    this.camera.getPosition = function (a) {
        return a ? f(e.x + G, e.y + H) : f(e.x, e.y)
    };
    this.camera.getPositionC = function () {
        return f(e.x + G, e.y + H)
    };
    this.camera.getStaticBox =
        function () {
            return {
                x: e.x,
                y: e.y,
                w: m,
                h: n
            }
        };
    this.camera.getDynamicBox = function () {
        return [f(e.x, e.y), f(e.x + m, e.y), f(e.x + m, e.y + n), f(e.x, e.y + n)]
    };
    var Jb = function (a) {
            e = f(a.x, a.y)
        },
        P = function (a) {
            g.restore();
            g.globalAlpha = t.globalAlpha;
            g.fillStyle = "black";
            g.strokeStyle = "black";
            g.msImageSmoothingEnabled = Ea;
            g.imageSmoothingEnabled = Ea
        },
        S = function (a, b) {
            g.save();
            var c = a.getPositionC();
            a.angle && (g.translate(-e.x + c.x, -e.y + c.y), g.rotate(B(a.angle)), g.translate(-c.x + e.x, -c.y + e.y));
            1 !== a.alpha && (g.globalAlpha = a.alpha);
            if (a.flip.x || a.flip.y) g.translate(-e.x + c.x, -e.y + c.y), g.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), g.translate(-c.x + e.x, -c.y + e.y);
            a.shadowColor && (g.shadowBlur = a.shadowBlur, g.shadowColor = a.shadowColor, g.shadowOffsetX = a.shadowX, g.shadowOffsetY = a.shadowY);
            if ("EllipsObject" === a.type && !b) {
                c = a.w / 2;
                var d = a.h / 2,
                    h = f(-e.x + a.x, -e.y + a.y);
                g.translate(h.x, h.y);
                g.scale(c / d, 1);
                g.translate(-h.x, -h.y)
            }
        };
    this.system.setContextSettings = function (a) {
        g.save();
        for (var b in a) g[b] = a[b]
    };
    this.system.defaultSettings = function () {
        P()
    };
    this.game.clear = function () {
        g.clearRect(0, 0, m, n)
    };
    this.game.fill = function (a) {
        g.fillStyle = a;
        g.fillRect(0, 0, m, n)
    };
    var Sa = function (a, b, c, d, h, k, l) {
            if (!(3 > c.length)) {
                if (d && !(3 > c.length)) {
                    g.fillStyle = d;
                    d = -e.x + a;
                    var m = -e.y + b;
                    var w;
                    g.beginPath();
                    g.moveTo(d + c[0].x, m + c[0].y);
                    for (w = 1; w < c.length; w += 1) g.lineTo(d + c[w].x, m + c[w].y);
                    g.closePath();
                    g.fill()
                }
                for (d = 0; d < c.length; d += 1) m = d + 1 < c.length ? d + 1 : 0, h && ba(Wa(c[d], f(a, b)), Wa(c[m], f(a, b)), h, k), l && ub(Wa(c[d], f(a, b)), l)
            }
        },
        U = function (a) {
            a.x || (a.x = 0);
            a.y || (a.y = 0);
            a.w || (a.w =
                0);
            a.h || (a.h = 0)
        };
    this.brush.drawPolygon = function (a) {
        var b = a.points || [],
            c = a.fillColor || !1,
            d = a.strokeColor || !1,
            h = a.strokeWidth || 1;
        a = a.pointColor || !1;
        if (!(3 > b.length)) {
            if (c && !(3 > b.length)) {
                g.fillStyle = c;
                c = -e.x;
                var f = -e.y;
                var k;
                g.beginPath();
                g.moveTo(c + b[0].x, f + b[0].y);
                for (k = 1; k < b.length; k += 1) g.lineTo(c + b[k].x, f + b[k].y);
                g.closePath();
                g.fill()
            }
            for (c = 0; c < b.length; c += 1) f = c + 1 < b.length ? c + 1 : 0, d && ba(b[c], b[f], d, h), a && ub(b[c], a)
        }
    };
    this.brush.drawTriangle = function (a) {
        U(a);
        if (a.x + a.w < e.x || a.x > e.x + m || a.y + a.h < e.y ||
            a.y > e.y + n) return !1;
        Sa(a.x, a.y, [f(a.w / 2, 0), f(a.w, a.h), f(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    this.brush.drawTriangleS = function (a) {
        U(a);
        if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > n) return !1;
        Sa(e.x + a.x, e.y + a.y, [f(a.w / 2, 0), f(a.w, a.h), f(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    var ta = function (a, b, c, d, h, f, k, l, m) {
        g.textAlign = k;
        g.lineWidth = m;
        g.font = (f ? f + " " : "") + d + "px " + h;
        d = -e.x;
        h = -e.y;
        c && (g.fillStyle = c, g.fillText(b, d + a.x, h + a.y));
        l && (g.strokeStyle = l, g.strokeText(b, d + a.x, h + a.y))
    };
    this.brush.drawMultiText =
        function (a) {
            var b, c = a.text.split("\n");
            for (b = 0; b < c.length; b += 1) ta(f(a.x, a.y + a.size * b), c[b], a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        };
    this.brush.drawMultiTextS = function (a) {
        var b, c = a.text.split("\n"),
            d = a.size || 10;
        for (b = 0; b < c.length; b += 1) ta(f(a.x + e.x, a.y + e.y + d * b), c[b], a.color || t.fillStyle, d || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawText = function (a) {
        ta(f(a.x || 0, a.y || 0), a.text,
            a.color || !1, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextS = function (a) {
        ta(f((a.x || 0) + e.x, (a.y || 0) + e.y), a.text, a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextLines = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) ta(f(a.x || 0, (a.y || 0) + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor ||
                !1, a.strokeWidth || 2)
        }
    };
    this.brush.drawTextLinesS = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) ta(f((a.x || 0) + e.x, (a.y || 0) + e.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    var tc = function (a, b, c) {
            ba(f(a.x - b, a.y), f(a.x + b, a.y), c, 2);
            ba(f(a.x, a.y - b), f(a.x, a.y + b), c, 2)
        },
        Aa = function (a, b, c, d, h) {
            g.fillStyle = c;
            g.strokeStyle = d;
            d = -e.x;
            var f = -e.y;
            c && g.fillRect(a.x + d, a.y + f, b.w, b.h);
            h && (g.lineWidth = h, c = h / 2, g.strokeRect(a.x +
                d + c, a.y + f + c, b.w - h, b.h - h))
        };
    this.brush.drawRect = function (a) {
        U(a);
        if (a.x + a.w < e.x || a.x > e.x + m || a.y + a.h < e.y || a.y > e.y + n) return !1;
        Aa(f(a.x, a.y), E(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRectS = function (a) {
        U(a);
        if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > n) return !1;
        Aa(f(a.x + e.x, a.y + e.y), E(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var ub = function (a, b) {
        (g.fillStyle = b) && g.fillRect(-e.x + a.x - 1, -e.y + a.y - 1, 2, 2)
    };
    this.brush.drawPoint = function (a) {
        U(a);
        if (a.x < e.x || a.x > e.x + m || a.y < e.y || a.y > e.y + n) return !1;
        ub(f(a.x, a.y), a.fillColor || !1)
    };
    this.brush.drawPointS = function (a) {
        U(a);
        if (0 > a.x || a.x > m || 0 > a.y || a.y > n) return !1;
        ub(f(a.x + e.x, a.y + e.y), a.fillColor || !1)
    };
    var tb = function (a, b, c, d, h, f) {
        g.fillStyle = d;
        g.strokeStyle = h;
        g.lineWidth = f;
        h = -e.x + a.x + f / 2;
        a = -e.y + a.y + f / 2;
        b.w -= +f;
        b.h -= +f;
        g.beginPath();
        g.moveTo(h + c, a);
        g.lineTo(h + b.w - c, a);
        g.quadraticCurveTo(h + b.w, a, h + b.w, a + c);
        g.lineTo(h + b.w, a + b.h - c);
        g.quadraticCurveTo(h + b.w, a + b.h, h + b.w - c, a + b.h);
        g.lineTo(h + c, a + b.h);
        g.quadraticCurveTo(h,
            a + b.h, h, a + b.h - c);
        g.lineTo(h, a + c);
        g.quadraticCurveTo(h, a, h + c, a);
        g.closePath();
        d && g.fill();
        f && g.stroke()
    };
    this.brush.drawRoundRect = function (a) {
        U(a);
        if (a.x + a.w < e.x || a.x > e.x + m || a.y + a.h < e.y || a.y > e.y + n) return !1;
        tb(f(a.x, a.y), E(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRoundRectS = function (a) {
        U(a);
        if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > n) return !1;
        tb(f(e.x + a.x, e.y + a.y), E(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth ||
            !1)
    };
    var Ba = function (a, b, c, d, f) {
        g.fillStyle = c;
        g.strokeStyle = d;
        g.lineWidth = f;
        d = -e.x + b + (f ? f / 2 : 0);
        var h = -e.y + b + (f ? f / 2 : 0);
        g.beginPath();
        g.arc(a.x + d, a.y + h, b, 0, 2 * Math.PI, !0);
        g.closePath();
        c && g.fill();
        f && g.stroke()
    };
    this.brush.drawCircle = function (a) {
        U(a);
        var b = 2 * a.radius;
        if (a.x + b < e.x || a.x > e.x + m || a.y + b < e.y || a.y > e.y + n) return !1;
        Ba(f(a.x, a.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawCircleS = function (a) {
        U(a);
        var b = 2 * a.radius;
        if (0 > a.x + b || a.x > m || 0 > a.y + b || a.y > n) return !1;
        Ba(f(a.x + e.x, a.y + e.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var ba = function (a, b, c, d) {
        g.strokeStyle = c;
        g.lineWidth = d;
        c = -e.x;
        d = -e.y;
        g.beginPath();
        g.moveTo(c + a.x, d + a.y);
        g.lineTo(c + b.x, d + b.y);
        g.closePath();
        g.stroke()
    };
    this.brush.drawLineAngle = function (a) {
        var b = I(f(a.x + a.length, a.y), f(a.x, a.y), a.angle);
        ba(f(a.x, a.y), f(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAngleS = function (a) {
        var b = I(f(e.x + a.x + a.length, e.y + a.y), f(e.x + a.x, e.y + a.y), a.angle);
        ba(f(e.x + a.x, e.y + a.y), f(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLine = function (a) {
        ba(f(a.x1, a.y1), f(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineS = function (a) {
        ba(f(e.x + a.x1, e.y + a.y1), f(e.x + a.x2, e.y + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineA = function (a) {
        ba(f(a.x1, a.y1), f(a.x2, a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAS = function (a) {
        ba(f(a.x1 + e.x, a.y1 + e.y), f(a.x2 +
            e.x, a.y2 + e.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawEllips = function (a) {
        U(a);
        if (a.x + a.w < e.x || a.x > e.x + m || a.y + a.h < e.y || a.y > e.y + n) return !1;
        var b = a.w / 2,
            c = a.h / 2,
            d = f(-e.x + a.x, -e.y + a.y);
        g.save();
        g.translate(d.x, d.y);
        g.scale(b / c, 1);
        g.translate(-d.x, -d.y);
        Ba(f(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        g.restore()
    };
    this.brush.drawEllipsS = function (a) {
        U(a);
        if (0 > a.x + a.w || a.x > m || 0 > a.y + a.h || a.y > n) return !1;
        var b = a.w / 2,
            c = a.h / 2,
            d = f(a.x, a.y);
        g.save();
        g.translate(d.x, d.y);
        g.scale(b /
            c, 1);
        g.translate(-d.x, -d.y);
        Ba(f(e.x + a.x, e.y + a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        g.restore()
    };
    this.brush.drawImageS = function (a) {
        if (a.file)
            if (v(l[a.file])) {
                if (l[a.file].loaded) {
                    var b = a.x || 0,
                        c = a.y || 0;
                    if (a.w && !a.h) {
                        var d = a.w / l[a.file].w;
                        var e = a.w;
                        var f = l[a.file].h * d
                    } else !a.w && a.h ? (d = a.h / l[a.file].h, f = a.h, e = l[a.file].w * d) : a.w && a.h ? (e = a.w, f = a.h) : (e = l[a.file].w, f = l[a.file].h);
                    a.scale && (e *= a.scale, f *= a.scale);
                    if (0 > b + e || b > m || 0 > c + f || c > n) return !1;
                    g.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h,
                        b, c, e, f)
                }
            } else l[a.file] = {
                loaded: !1
            }, b = k.document.createElement("img"), b.onload = function () {
                l[a.file].loaded = !0;
                l[a.file].img = this;
                l[a.file].w = this.width;
                l[a.file].h = this.height;
                A.load()
            }, b.src = a.file, A.add()
    };
    this.brush.drawImage = function (a) {
        if (a.file)
            if (v(l[a.file])) {
                if (l[a.file].loaded) {
                    var b = a.x || 0,
                        c = a.y || 0;
                    if (a.w && !a.h) {
                        var d = a.w / l[a.file].w;
                        var f = a.w;
                        var p = l[a.file].h * d
                    } else !a.w && a.h ? (d = a.h / l[a.file].h, p = a.h, f = l[a.file].w * d) : a.w && a.h ? (f = a.w, p = a.h) : (f = l[a.file].w, p = l[a.file].h);
                    a.scale && (f *= a.scale,
                        p *= a.scale);
                    if (b + f < e.x || b > e.x + m || c + p < e.y || c > e.y + n) return !1;
                    g.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, -e.x + b, -e.y + c, f, p)
                }
            } else l[a.file] = {}, l[a.file].loaded = !1, b = k.document.createElement("img"), b.onload = function () {
                l[a.file].loaded = !0;
                l[a.file].img = this;
                l[a.file].w = this.width;
                l[a.file].h = this.height;
                A.load()
            }, b.src = a.file, A.add()
    };
    this.brush.onContext = function (a) {
        a(g)
    };
    this.brush.getPixelColor = function (a, b) {
        var c = g.getImageData(a, b, 1, 1).data;
        return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
    };
    this.brush.setPixelColor =
        function (a, b, c) {
            var d = g.createImageData(1, 1);
            d.data[0] = c.r || d.data[0];
            d.data[1] = c.g || d.data[1];
            d.data[2] = c.b || d.data[2];
            d.data[3] = c.a || 255;
            g.putImageData(d, a, b)
        };
    this.brush.onPixel = function (a, b, c) {
        var d = g.getImageData(a, b, 1, 1),
            e = {
                r: d.data[0],
                g: d.data[1],
                b: d.data[2],
                a: d.data[3] ? d.data[3] : 255
            };
        c(e);
        d.data[0] = e.r;
        d.data[1] = e.g;
        d.data[2] = e.b;
        d.data[3] = e.a;
        g.putImageData(d, a, b)
    };
    this.brush.onPixels = function (a, b, c, d, e) {
        c = g.getImageData(a, b, c, d);
        var f;
        d = 0;
        for (f = c.data.length; d < f; d += 4) {
            var h = {
                r: c.data[d],
                g: c.data[d + 1],
                b: c.data[d + 2],
                a: c.data[d + 3] ? c.data[d + 3] : 255
            };
            e(h);
            c.data[d] = h.r;
            c.data[d + 1] = h.g;
            c.data[d + 2] = h.b;
            c.data[d + 3] = h.a
        }
        g.putImageData(c, a, b)
    };
    this.brush.onRawPixels = function (a, b, c, d, e) {
        c = g.getImageData(a, b, c, d);
        e(c.data, c.data.length);
        g.putImageData(c, a, b)
    };
    var V = k.AudioContext || k.webkitAudioContext || !1;
    (V = V ? new V : !1) && V.listener.setPosition(0, 0, 0);
    var W = function (a, b) {
        V || ca('module "wAudio" is not supported! use a "audio"');
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.loadPLay = this.nextPlay = this.loaded =
            this.playing = !1;
        this.pausedTime = this.duration = this.startTime = 0;
        var c = this,
            d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function (a) {
            V.decodeAudioData(this.response, function (a) {
                c.wABuffer = a;
                c.duration = c.wABuffer.duration;
                c.wAGain = V.createGain();
                c.wAGain.gain.value = c.vol;
                c.wAPanner = V.createPanner();
                c.wAPanner.setPosition(0, 0, 1);
                c.wAPanner.panningModel = "equalpower";
                A.load();
                c.loaded = !0;
                c.loadPlay && c.replay()
            }, function (a) {
                ca("error in wAudio.newAudio : error decoding file",
                    a)
            })
        };
        a ? d.send() : ca("error in wAudio.newAudio : Where is file?");
        A.add()
    };
    W.prototype.play = function (a) {
        if (!this.loaded) this.loadPlay = !0;
        else if (!this.playing) {
            this.playing = !0;
            this.wASource = V.createBufferSource();
            this.wASource.buffer = this.wABuffer;
            this.wAListener = V.destination;
            this.wASource.connect(this.wAGain);
            this.wAGain.connect(this.wAPanner);
            this.wAPanner.connect(this.wAListener);
            this.wASource.start(0, this.pausedTime, this.duration);
            this.startTime = V.currentTime;
            var b = this;
            this.wASource.onended =
                function () {
                    b.playing = !1;
                    b.startTime = 0;
                    b.pausedTime = 0;
                    b.nextPlay && b.nextPlay.replay()
                }
        }
    };
    W.prototype.replay = function (a) {
        this.loaded ? (this.stop(), this.play()) : this.loadPlay = !0
    };
    W.prototype.stop = function () {
        this.pause();
        this.pausedTime = this.startTime = 0
    };
    W.prototype.pause = function () {
        if (this.playing) {
            this.pausedTime = this.getProgress();
            this.playing = !1;
            this.wASource.stop(0);
            var a = this;
            this.wASource.onended = function () {
                a.playing = !1
            }
        }
    };
    W.prototype.getProgress = function () {
        return this.playing ? V.currentTime - this.startTime +
            this.pausedTime : this.pausedTime
    };
    W.prototype.playPause = function () {
        this.playing ? this.pause() : this.play()
    };
    W.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    W.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.wAGain.gain.value = this.vol
    };
    W.prototype.getVolume = function () {
        return this.vol
    };
    W.prototype.setSide = function (a) {
        this.side = a;
        this.wAPanner && this.wAPanner.setPosition(this.side, 0, 1 - Math.abs(this.side))
    };
    W.prototype.getSide = function () {
        return this.side
    };
    this.wAudio.newAudio = function (a,
        b) {
        return new W(a, b)
    };
    var fa = function (a, b) {
        var c, d = k.document.createElement("audio");
        if ("string" == typeof a) {
            var e = k.document.createElement("source");
            e.src = a;
            d.appendChild(e)
        } else {
            var f = 0;
            for (c = a.length; f < c; f += 1) e = k.document.createElement("source"), e.src = a[f], d.appendChild(e)
        }
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.playing = 0;
        this.audio = d;
        this.nextPlay = this.loaded = !1;
        d.volume = this.vol;
        var g = this;
        d.onloadeddata = function () {
            g.loaded = !0;
            A.load()
        };
        d.onended = function () {
            g.playing = !1;
            g.nextPlay && g.nextPlay.play()
        };
        d.load();
        A.add()
    };
    fa.prototype.play = function (a) {
        this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume = this.vol), this.playing = !0, this.audio.play())
    };
    fa.prototype.replay = function (a) {
        a && this.setVolume(a);
        this.playing = !0;
        this.audio.currentTime = 0;
        this.audio.play()
    };
    fa.prototype.stop = function () {
        this.playing && (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
    };
    fa.prototype.pause = function () {
        this.playing && (this.playing = !1, this.audio.pause())
    };
    fa.prototype.playPause = function () {
        this.playing ?
            this.pause() : this.play()
    };
    fa.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    fa.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.audio.volume = this.vol
    };
    fa.prototype.getVolume = function () {
        return this.vol
    };
    this.audio.newAudio = function (a, b) {
        return new fa(a, b)
    };
    var vb = [],
        wa = [];
    this.zList.useZValue = function () {
        this.update = function () {
            wa.length = 0;
            u(vb, function (a) {
                a.isInCamera() && wa.push(a)
            });
            wa.sort(function (a, b) {
                return a.z - b.z
            })
        }
    };
    this.zList.useYValue = function () {
        this.update = function () {
            wa.length =
                0;
            u(vb, function (a) {
                a.isInCamera() && wa.push(a)
            });
            wa.sort(function (a, b) {
                return a.y + a.h - (b.y + b.h)
            })
        }
    };
    this.zList.add = function (a) {
        vb.push(a)
    };
    this.zList.init = function (a) {
        u(a, function (a) {
            z.zList.add(a)
        })
    };
    this.zList.draw = function (a) {
        z.OOP.drawArr(wa, a)
    };
    this.zList.del = function (a) {
        z.OOP.delObject(vb, a)
    };
    this.zList.useYValue();
    var A = {
        count: 0,
        loaded: 0,
        errored: 0,
        add: function () {
            this.count += 1
        },
        load: function () {
            this.loaded += 1
        },
        error: function () {
            this.errored += 1
        }
    };
    this.resources.isLoaded = function () {
        return A.count ==
            A.loaded
    };
    this.resources.getProgress = function () {
        return Math.ceil(A.loaded / A.count * 100)
    };
    this.levels.forStringArray = function (a, b) {
        var c = a.offset || f(0, 0);
        u(a.source, function (d, e) {
            u(d, function (d, f) {
                " " !== d && b(d, c.x + a.w * f, c.y + a.h * e, a.w, a.h)
            })
        })
    };
    var Qc = function (a) {
            if ("AnimationObject" === a.type && "undefined" !== typeof __LVL_ANIMATIONS && a.__realAnim) {
                var b = __LVL_ANIMATIONS[a.__realAnim];
                a.anim = z.tiles.newImage(b.file).getAnimation(b.x, b.y, b.w, b.h, b.frames)
            }
            var c = mc(a);
            c.name = "";
            F(a, function (a, b) {
                "id" !== b &&
                    "anim" !== b && (c[b] = a)
            });
            return c
        },
        xc = function (a, b) {
            var c = {
                settings: {},
                objects: []
            };
            a = JSON.parse(a);
            c.settings = a.settings;
            u(a.objects, function (a) {
                var d = Qc(a);
                d.name = a.name;
                b && b(d);
                c.objects.push(d)
            });
            return c
        },
        yc = function (a, b, c) {
            var d = [],
                e = {};
            if (a && "json" === b) {
                b = xc(a, c);
                d = b.objects;
                e = b.settings;
                var f = a
            }
            this.backgroundColor = e.backgroundColor ? e.backgroundColor : !1;
            this.reload = function () {
                d = xc(f)
            };
            this.clear = function () {
                lc(d)
            };
            this.add = function (a) {
                d.push(a)
            };
            this.del = function (a) {
                u(d, function (b, c) {
                    if (a === b) return d.splice(c,
                        1), "break"
                })
            };
            this.delById = function (a) {
                d.splice(a, 1)
            };
            this.getObjects = function () {
                return d
            };
            this.getObjectByName = function (a) {
                var b;
                var c = 0;
                for (b = d.length; c < b; c += 1)
                    if (d[c].name == a) return d[c];
                return !1
            };
            this.getObjectById = function (a) {
                var b;
                var c = 0;
                for (b = d.length; c < b; c += 1)
                    if (d[c].id == a) return d[c];
                return !1
            };
            this.draw = function (a) {
                this.backgroundColor && z.game.fill(this.backgroundColor);
                u(d, function (b) {
                    a && a(b);
                    b.isInCamera() && b.draw()
                })
            };
            this.getObjectsInCamera = function () {
                var a = [];
                u(d, function (b) {
                    b.isInCamera() &&
                        a.push(b)
                });
                return a
            };
            this.getLevelAsJSON = function (a, b) {
                var c = '{"settings":' + JSON.stringify({
                    backgroundColor: this.backgroundColor
                }) + ',"objects":[';
                if (!d.length) return c + "]}";
                u(d, function (d, e) {
                    a && a(d);
                    c += "{";
                    F(d, function (a, b) {
                        "function" != typeof a && (c += '"' + b + '":' + JSON.stringify(a) + ",")
                    });
                    c = c.substr(0, c.length - 1) + "},";
                    b && b(d)
                });
                c = c.substr(0, c.length - 1);
                return c + "]}"
            }
        };
    this.levels.newLevelFromJSON = function (a, b) {
        return new yc(a, "json", b || !1)
    };
    this.levels.newEmptyLevel = function (a) {
        return new yc(!1)
    };
    var zc =
        0,
        Ac = 0,
        Tb = 0,
        Bc = !1;
    this.system.initFPSCheck = function () {
        Bc || (Bc = !0, p.addEvent("postLoop", "fpsCheckUpdate", function () {
            Tb += 1;
            1E3 <= N - Ac && (zc = Tb, Tb = 0, Ac = N)
        }))
    };
    this.system.getFPS = function () {
        return zc
    };
    var wb = this.filters;
    wb.setCSSFilter = function (a, b) {
        var c = (b ? b.canvas : q).style,
            d = "";
        F(a, function (a, b) {
            d += " " + b + "(" + a + ")"
        });
        c.OFilter = c.MozFilter = c.WebkitFilter = c.filter = d
    };
    wb.clearCSSFilter = function (a) {
        a = (a ? a.canvas : q).style;
        a.OFilter = a.MozFilter = a.WebkitFilter = a.filter = "none"
    };
    wb.setCSSTransform = function (a,
        b) {
        var c = (b ? b.canvas : q).style,
            d = "perspective(" + m + "px)";
        F(a, function (a, b) {
            d += " " + b + "(" + a + ")"
        });
        c.transform = c.MozTransform = c.WebkitTransform = d
    };
    wb.clearCSSTransform = function (a) {
        a = (a ? a.canvas : q).style;
        a.transform = a.MozTransform = a.WebkitTransform = "none"
    };
    this.OOP.newRever = function (a, b, c) {
        var d = function (a, b, c) {
            this.min = a;
            this.max = b;
            this.step = c;
            this.value = a;
            this.to = c
        };
        d.prototype = {
            update: function () {
                var a = this.value;
                this.value <= this.min ? this.to = this.step : this.value >= this.max && (this.to = -this.step);
                this.value +=
                    this.to;
                return a
            },
            getValue: function () {
                return this.value
            },
            setValue: function (a) {
                this.value = parseFloat(a)
            },
            setStep: function (a) {
                this.step = a
            },
            getStep: function () {
                return this.step
            }
        };
        return new d(a, b, c)
    };
    var Cc = {};
    this.OOP.once = function (a, b) {
        Cc[a] || (Cc[a] = !0, b())
    };
    this.OOP.newTimer = function (a, b) {
        if (0 >= a) return ja("error in system.newTimer : variable < 0, Timer is not created");
        var c = {
            time: 0 < a ? a : 1E3,
            func: b,
            startTime: !1,
            ending: !1,
            start: function () {
                this.ending || this.startTime || (this.startTime = N)
            },
            run: function () {
                !this.ending &&
                    this.startTime && N - this.startTime >= this.time && (this.func(), this.ending = !0)
            },
            end: function () {
                this.ending || (this.ending = !0, this.func())
            },
            restart: function (a) {
                this.startTime || this.start();
                if (this.ending) {
                    if (a && 0 >= a) return ja("error in Timer.restart : variable < 0");
                    a && (this.time = a);
                    this.ending = !1;
                    this.startTime = N
                }
            },
            stop: function () {
                this.ending || (this.ending = !0)
            }
        };
        p.addEvent("postLoop", "timer" + R(-100, 100) * R(-100, 100) + N, function () {
            c.run()
        });
        return c
    };
    this.memory.local = {
        storage: k.localStorage,
        clear: function () {
            this.storage.clear()
        },
        save: function (a, b) {
            this.storage.setItem(a, b)
        },
        saveAsObject: function (a, b) {
            var c = JSON.stringify(b);
            this.storage.setItem(a, c)
        },
        loadAsObject: function (a) {
            return JSON.parse(this.storage.getItem(a) || "false")
        },
        load: function (a) {
            return this.storage.getItem(a)
        },
        loadAsNumber: function (a) {
            return parseFloat(this.storage.getItem(a))
        }
    };
    this.memory.temp = {
        values: {},
        save: function (a, b) {
            this.values[a] = b
        },
        load: function (a) {
            return this.values[a]
        },
        loadAsNumber: function (a) {
            return parseFloat(this.values[a])
        }
    };
    k.addEventListener("load",
        function () {
            if (g) {
                for (var a in t) g[a] = t[a];
                g.save()
            }
            p.runEvent("onload");
            p.loaded = !0;
            J || (k.document.body.style.overflow = "hidden");
            "function" === typeof POINTJS_USER_ONLOAD && POINTJS_USER_ONLOAD();
            return !1
        });
    k.addEventListener("blur", function () {
        if (ha) return p.runEvent("gameBlur"), !1
    });
    k.addEventListener("focus", function () {
        if (!ha) return k.document.activeElement.blur(), k.focus(), p.runEvent("gameFocus"), !1
    });
    k.addEventListener("resize", function () {
        p.runEvent("gameResize");
        g && (g.textBaseline = t.textBaseline,
            m /= ma, n /= na, G = m / 2, H = n / 2, g.scale(ma, na));
        return !1
    });
    (J ? r : k).addEventListener("click", function () {
        k.document.activeElement && k.document.activeElement.blur();
        k.focus()
    });
    if ("undefined" !== typeof POINTJS_LOADED_DOM_IGNORE) k.onload();
    "undefined" !== typeof POINTJS_ENGINE_CREATED_EVENT && POINTJS_ENGINE_CREATED_EVENT(this);
    k._GLOGAL_POINT_JS = this
};
