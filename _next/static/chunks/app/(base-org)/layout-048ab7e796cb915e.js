(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7686],
  {
    793: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 99687)),
        Promise.resolve().then(s.bind(s, 76503));
    },
    56391: function (e, t, s) {
      "use strict";
      s.d(t, {
        _: function () {
          return n;
        },
      });
      var i = s(57437),
        r = s(2265),
        a = s(86685);
      function n(e) {
        let { children: t } = e;
        const [n, o] = (0, r.useState)(),
          { logError: l } = (0, a.p)();
        return (
          (0, r.useEffect)(() => {
            Promise.all([s.e(6455), s.e(9481)])
              .then(s.bind(s, 29481))
              .then((e) => {
                o(() => e.default);
              })
              .catch((e) => l(e, "Failed to load CryptoProviders"));
          }, [l]),
          n ? (0, i.jsx)(n, { children: t }) : null
        );
      }
    },
    61481: function (e, t, s) {
      "use strict";
      s.d(t, {
        pB: function () {
          return T;
        },
        tB: function () {
          return P;
        },
        J7: function () {
          return H;
        },
      });
      var i = s(57437),
        r = s(15893),
        a = s(59156),
        n = s(90713),
        o = s(67872),
        l = s(76956),
        c = s(48318),
        d = s(64707),
        u = s(77861),
        h = s(33507),
        m = s(64314),
        x = s(42901),
        p = s(74920),
        f = s(45773),
        g = s(21144);
      function v() {
        const { address: e } = (0, d.useAccount)(),
          { data: t, isLoading: s } = (0, u.useEnsName)({
            address: e,
            chainId: m.R.id,
            query: { retry: !1 },
          }),
          { data: r, isLoading: a } = (0, h.useEnsAvatar)({
            name: null !== t && void 0 !== t ? t : void 0,
            chainId: m.R.id,
            query: { retry: !1 },
          }),
          { data: n, isLoading: o } = (0, x.Z)({ address: e }),
          l = s || a || o;
        if (n)
          return (0, i.jsx)(f.Z, {
            basename: n,
            width: 32,
            height: 32,
            wrapperClassName:
              "rounded-full h-[2rem] max-h-[2rem] min-h-[2rem] w-[2rem] min-w-[2rem] max-w-[2rem]",
          });
        let c = r;
        return (
          c || (c = (0, g.ni)(e)),
          (0, i.jsx)(p.Z, {
            src: c,
            alt: "Avatar",
            wrapperClassName:
              "rounded-full h-[2rem] max-h-[2rem] min-h-[2rem] w-[2rem] min-w-[2rem] max-w-[2rem]",
            backgroundClassName: "bg-blue-500",
            imageClassName:
              "group-hover:rotate-[-1deg] group-hover:scale-105 object-cover h-full w-full",
            width: 32,
            height: 32,
            forceIsLoading: l,
          })
        );
      }
      var b = s(27560),
        k = s(11420),
        j = s(81753);
      var w = s(86855),
        y = s.n(w),
        M = s(2265),
        C = s(72694),
        N = s(46327),
        E = s(86685),
        W = s(43233),
        L = s(36509),
        B = s(37842),
        _ = s(8987);
      function Y(e) {
        let { chain: t, currentChain: s } = e;
        const { switchChainAsync: r } = (0, N.useSwitchChain)(),
          { logError: a } = (0, E.p)(),
          n = (0, M.useCallback)(() => {
            t !== s &&
              r({ chainId: t.id }).catch((e) => a(e, "Failed to switch chain"));
          }, [t, s, a, r]);
        return (0, i.jsx)(L.Z, { onClick: n, children: t.name });
      }
      function I() {
        const { chain: e, isConnected: t } = (0, d.useAccount)(),
          { chains: s } = (0, N.useSwitchChain)();
        return t && e
          ? (0, i.jsxs)(W.Z, {
              children: [
                (0, i.jsx)(_.Z, {
                  children: (0, i.jsx)("span", {
                    className:
                      "inline-block rounded bg-blue-5 px-3 py-1 text-blue-50",
                    children: e.name,
                  }),
                }),
                (0, i.jsx)(B.Z, {
                  children: s.map((t) =>
                    (0, i.jsx)(Y, { chain: t, currentChain: e }, t.id),
                  ),
                }),
              ],
            })
          : null;
      }
      var P,
        S = s(70304),
        R = s(56391);
      function H(e) {
        let { connectWalletButtonVariant: t = 0 } = e;
        return (0, i.jsx)(R._, {
          children: (0, i.jsx)(T, { connectWalletButtonVariant: t }),
        });
      }
      function T(e) {
        let { connectWalletButtonVariant: t = 0 } = e;
        const { openConnectModal: s } = (0, o.We)(),
          { switchChain: u } = (0, N.useSwitchChain)(),
          h = (0, M.useCallback)(() => u({ chainId: n.u.id }), [u]),
          m = (0, S.useSearchParams)(),
          x = null === m || void 0 === m ? void 0 : m.get("showChainSwitcher"),
          [p, f] = (0, M.useState)(!1);
        (0, M.useEffect)(() => {
          f(!0);
        }, []);
        const {
            address: g,
            connector: w,
            isConnected: E,
            isConnecting: W,
            isReconnecting: L,
            chain: B,
          } = (0, d.useAccount)(),
          _ = !!B && k.KC.includes(B.id),
          { basenameChain: Y } = (0, k.ZP)(),
          [, P] = (0, C.m9)(),
          R = (0, M.useCallback)(() => {
            P(null !== g && void 0 !== g ? g : "");
          }, [g, P]);
        (0, M.useEffect)(() => {
          var e;
          g &&
            ((0, j.ZP)(
              "wallet_connected",
              {
                action: j.Us.change,
                context: "navbar",
                address: g,
                wallet_type:
                  ((e = null === w || void 0 === w ? void 0 : w.name),
                  e ? e.toLowerCase().replace(/[ \-\/\.]/g, "_") : ""),
                wallet_connector_id: null === w || void 0 === w ? void 0 : w.id,
              },
              j.E3.low,
            ),
            (0, j.yV)({ userId: g }));
        }, [g, w]);
        const H = (0, M.useCallback)(() => {
            null === s || void 0 === s || s(),
              (0, j.ZP)(
                "connect_wallet",
                {
                  action: j.Us.click,
                  componentType: j.re.button,
                  context: "navbar",
                },
                j.E3.low,
              );
          }, [s]),
          T = y()("text-lg font-display", {
            "text-white": 0 === t,
            "text-black": 1 === t,
          }),
          z = (0, C.ac)("(min-width: 768px)");
        if (W || L || !p)
          return (0, i.jsx)(b.J, { name: "spinner", color: "currentColor" });
        if (!E) {
          return 0 === t
            ? (0, i.jsx)(c.default, {
                onClick: H,
                roundedFull: !0,
                children: "Connect",
              })
            : (0, i.jsx)(l.zx, {
                variant: l.cT.Black,
                size: l.Ph.Small,
                onClick: H,
                rounded: !0,
                children: "Connect",
              });
        }
        return _
          ? (0, i.jsxs)(a.w5, {
              children: [
                (0, i.jsx)(a.RZ, {
                  withWalletAggregator: !0,
                  className:
                    "flex items-center justify-center rounded-xl bg-transparent p-2 hover:bg-gray-40/20",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, i.jsx)(v, {}),
                      z && (0, i.jsx)(r.VG, { chain: Y, className: T }),
                      x && (0, i.jsx)(I, {}),
                    ],
                  }),
                }),
                (0, i.jsxs)(a.Zl, {
                  className: "z-50 rounded-xl bg-white font-sans shadow-md",
                  children: [
                    (0, i.jsxs)(r.iJ, {
                      className: "px-4 pb-2 pt-3 font-display",
                      children: [
                        (0, i.jsx)(v, {}),
                        (0, i.jsx)(r.VG, {
                          onClick: R,
                          chain: Y,
                          className:
                            "cursor-pointer font-display transition-all hover:opacity-65",
                        }),
                        (0, i.jsx)(r.je, { className: "font-display" }),
                      ],
                    }),
                    (0, i.jsx)(a.ou, {
                      className: "font-display hover:bg-gray-40/20",
                    }),
                    (0, i.jsx)(a.zN, {
                      icon: "wallet",
                      href: "https://wallet.coinbase.com",
                      target: "_blank",
                      className: "font-display hover:bg-gray-40/20",
                      children: "Go to Wallet Dashboard",
                    }),
                    (0, i.jsx)(a.Oq, {
                      className: "font-display hover:bg-gray-40/20",
                    }),
                  ],
                }),
              ],
            })
          : (0, i.jsx)(l.zx, {
              variant: l.cT.Black,
              size: l.Ph.Small,
              onClick: h,
              rounded: !0,
              children: "Connect to Base",
            });
      }
      !(function (e) {
        (e[(e.BaseOrg = 0)] = "BaseOrg"), (e[(e.Basename = 1)] = "Basename");
      })(P || (P = {}));
    },
    71031: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return u;
        },
      });
      var i = s(60221),
        r = s(88810),
        a = s(67085),
        n = s(57437),
        o = s(81753),
        l = s(27648),
        c = s(2265),
        d = s(87739);
      function u(e) {
        var { children: t, onClick: s } = e,
          u = (0, a._)(e, ["children", "onClick"]);
        const { logEventWithContext: h } = (0, d.useAnalytics)(),
          m = (0, c.useCallback)(
            (e) => {
              const t = e.currentTarget;
              try {
                const e = new URL(t.href),
                  {
                    href: s,
                    hostname: i,
                    origin: r,
                    pathname: a,
                    search: n,
                  } = e;
                h("link_clicked", o.Us.click, {
                  componentType: o.re.link,
                  href: s,
                  hostname: i,
                  origin: r,
                  pathname: a,
                  search: n,
                });
              } catch (i) {}
              s && s(e);
            },
            [s, h],
          );
        return (0, n.jsx)(
          l.default,
          (0, r._)((0, i._)({}, u), { onClick: m, children: t }),
        );
      }
    },
    48318: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var i = s(57437),
        r = s(86855),
        a = s.n(r),
        n = s(85562),
        o = s(27560);
      const l = {
          [n.c.Primary]:
            "bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E]",
          [n.c.Secondary]:
            "bg-white border border-white text-palette-foreground hover:bg-gray-15 active:bg-gray-30",
          [n.c.Outlined]:
            "bg-transparent text-white border border-white hover:bg-white hover:text-black active:bg-[#E3E7E9]",
        },
        c = {
          [n.P.Medium]: "text-md px-4 py-2 gap-3",
          [n.P.Large]: "text-lg px-6 py-4 gap-5",
        },
        d = { [n.P.Medium]: "0.75rem", [n.P.Large]: "1rem" };
      function u(e) {
        let {
          children: t,
          onClick: s,
          disabled: r,
          variant: u = n.c.Primary,
          size: h = n.P.Medium,
          iconName: m,
          roundedFull: x = !1,
          className: p,
          fullWidth: f = !1,
        } = e;
        const g = a()(
            "text-md px-4 py-2 whitespace-nowrap",
            "flex items-center justify-center",
            "disabled:opacity-40 disabled:pointer-events-none",
            "transition-all",
            l[u],
            c[h],
            x ? "rounded-full" : "rounded-lg",
            f ? "w-full" : "w-auto",
            p,
          ),
          v = d[h];
        return (0, i.jsxs)("button", {
          type: "button",
          onClick: s,
          disabled: r,
          className: g,
          children: [
            (0, i.jsx)("span", { children: t }),
            m &&
              (0, i.jsx)(o.J, {
                name: m,
                width: v,
                height: v,
                color: "currentColor",
              }),
          ],
        });
      }
    },
    85562: function (e, t, s) {
      "use strict";
      var i, r;
      s.d(t, {
        P: function () {
          return r;
        },
        c: function () {
          return i;
        },
      }),
        (function (e) {
          (e.Primary = "primary"),
            (e.Secondary = "secondary"),
            (e.Outlined = "outlined");
        })(i || (i = {})),
        (function (e) {
          (e.Medium = "medium"), (e.Large = "large");
        })(r || (r = {}));
    },
    99687: function (e, t, s) {
      "use strict";
      s.d(t, {
        K: function () {
          return c;
        },
        default: function () {
          return d;
        },
      });
      var i = s(60221),
        r = s(88810),
        a = s(57437),
        n = s(2265),
        o = s(72694);
      const l = (0, n.createContext)({
        registerCard: function () {},
        unregisterCard: function () {},
      });
      function c() {
        const e = (0, n.useContext)(l);
        if (void 0 === e)
          throw new Error("useCards must be used within a CardsProvider");
        return e;
      }
      function d(e) {
        let { children: t } = e;
        const [s, c] = (0, n.useState)({}),
          d = (0, o.ac)("(min-width: 768px)");
        (0, n.useEffect)(() => {
          if (!d) return;
          const e = (e) => {
            const t = "touches" in e ? e.touches[0].clientX : e.clientX,
              i = "touches" in e ? e.touches[0].clientY : e.clientY;
            Object.values(s).forEach((e) => {
              let { blobRef: s, fakeBlobRef: r } = e;
              if (s.current && r.current) {
                const e = r.current.getBoundingClientRect();
                s.current.animate(
                  [
                    {
                      transform: "translate("
                        .concat(t - e.left - e.width / 2, "px,")
                        .concat(i - e.top - e.height / 2, "px)"),
                    },
                  ],
                  { duration: 300, fill: "forwards" },
                ),
                  s.current.classList.remove("opacity-0");
              }
            });
          };
          return (
            window.addEventListener("mousemove", e),
            window.addEventListener("touchmove", e),
            () => {
              window.removeEventListener("mousemove", e),
                window.removeEventListener("touchmove", e);
            }
          );
        }, [s, d]);
        const u = (0, n.useCallback)((e, t) => {
            c((s) => (0, r._)((0, i._)({}, s), { [e]: t }));
          }, []),
          h = (0, n.useCallback)((e) => {
            c((t) => {
              const s = (0, i._)({}, t);
              return delete s[e], s;
            });
          }, []),
          m = (0, n.useMemo)(
            () => ({ registerCard: u, unregisterCard: h }),
            [u, h],
          );
        return (0, a.jsx)(l.Provider, { value: m, children: t });
      }
    },
    92399: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return n;
        },
      });
      var i = s(57437),
        r = s(99687),
        a = s(2265);
      function n(e) {
        let {
          children: t,
          wrapperClassName: s,
          innerClassName: n,
          radius: o = 16,
        } = e;
        const l = (0, a.useRef)(null),
          c = (0, a.useRef)(null),
          d = (0, a.useRef)(null),
          { registerCard: u, unregisterCard: h } = (0, r.K)(),
          m = (0, a.useId)();
        (0, a.useEffect)(
          () => (u(m, { blobRef: c, fakeBlobRef: d }), () => h(m)),
          [u, h, m],
        );
        const x =
            "card overflow-hidden p-[1px] m-0 bg-white/20 relative ".concat(
              s,
              " w-full",
            ),
          p = { borderRadius: "".concat(o, "px") },
          f = "inner relative bg-black z-20 h-full ".concat(n),
          g = { borderRadius: "".concat(o - 1, "px") };
        return (0, i.jsxs)("div", {
          className: x,
          ref: l,
          style: p,
          children: [
            (0, i.jsx)("div", { className: f, style: g, children: t }),
            (0, i.jsx)("div", {
              className:
                "blob blur-[40px] z-10 absolute opacity-0 w-[30rem] h-[30rem] rounded-full bg-[rgb(255,255,255,0.2)]",
              ref: c,
            }),
            (0, i.jsx)("div", {
              className:
                "fake-blob absolute w-[30rem] h-[30rem] rounded-full opacity-0",
              ref: d,
            }),
          ],
        });
      }
    },
    76503: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return Y;
        },
      });
      var i = s(57437),
        r = s(2265),
        a = s(33145),
        n = s(27648),
        o = s(70304),
        l = s(87739),
        c = {
          src: "https://3-d-airdrop-base.vercel.app/_next/static/media/logo.f6fdedfc.svg",
          height: 46,
          width: 46,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = s(92399),
        u = s(75880);
      var h = (e) => {
          let {
            icon: t = "",
            duration: s = 1200,
            easing: r = [0.76, 0, 0.24, 1],
            delay: a = 0,
            scaleEasing: n = [0.55, 0, 0.45, 1],
            startScale: o = 1.2,
            color: l = "#0052FF",
          } = e;
          const c = {
              hidden: { scale: o, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  scale: { duration: s / 1e3, delay: a / 1e3, ease: n },
                  opacity: {
                    duration: s / 2 / 1e3,
                    delay: a / 1e3,
                    ease: "easeOut",
                  },
                },
              },
            },
            d = {
              hidden: { pathLength: 0.1, opacity: 0 },
              visible: (e) => ({
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: { duration: (s + e) / 1e3, delay: 0, ease: r },
                  opacity: {
                    duration: (s + e) / 3 / 1e3,
                    delay: 0,
                    ease: "easeOut",
                  },
                },
              }),
            };
          return (() => {
            switch (t.toLocaleLowerCase()) {
              case "build":
                return (0, i.jsxs)(u.E.svg, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  width: "87",
                  height: "87",
                  viewBox: "0 0 87 87",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: -50,
                      d: "M0 44.1851H32.5663",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 50,
                      d: "M86.3714 44.1851H53.8052",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 40,
                      d: "M0 2.06152H32.5663",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: -80,
                      d: "M86.3714 2.06152H53.8052",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M0 85.6011H32.5663",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 20,
                      d: "M86.3714 85.6011H53.8052",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: -105,
                      d: "M59.4688 65.4243H26.9026",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: -80,
                      d: "M59.4688 23.6543H26.9026",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                  ],
                });
              case "explore":
                return (0, i.jsxs)(u.E.svg, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  width: "87",
                  height: "87",
                  viewBox: "0 0 87 87",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M43.1858 0V32.5663",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 50,
                      d: "M12.6479 12.6475L35.678 35.6775",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 100,
                      d: "M0 43.1855H32.5663",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 150,
                      d: "M12.6479 73.7234L35.678 50.6934",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 100,
                      d: "M43.1858 86.3709V53.8047",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 50,
                      d: "M73.7236 73.7234L50.6936 50.6934",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M86.3714 43.1855H53.8052",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M73.7236 12.6475L50.6936 35.6775",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                  ],
                });
              case "community":
                return (0, i.jsxs)(u.E.svg, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  width: "85",
                  height: "85",
                  viewBox: "0 0 85 85",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M60.1349 65.3755H24.5767",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M60.1349 19.7681H24.5767",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 70,
                      d: "M65.1597 24.793V60.3512",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M19.5522 24.793V60.3512",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M37.2347 83.9275L1 47.6929",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: -30,
                      d: "M83.7117 37.4505L47.4771 1.21582",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 40,
                      d: "M83.7117 47.6929L47.4771 83.9275",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 80,
                      d: "M37.2347 1.21582L1 37.4505",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                  ],
                });
              case "socials":
                return (0, i.jsxs)(u.E.svg, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  width: "86",
                  height: "86",
                  viewBox: "0 0 86 86",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M30.2454 1.83887H56.4051",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M5.01733 22.8017L23.5124 4.30273",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M2 55.4644V29.3047",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M22.9628 80.6923L4.46387 62.1934",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M55.6253 83.71H29.4656",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M80.8534 62.7471L62.3545 81.246",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M83.8711 30.0845V56.2442",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M62.908 4.85645L81.4069 23.3515",
                      stroke: l,
                      strokeWidth: "2.72903",
                      strokeMiterlimit: "10",
                    }),
                  ],
                });
              case "about":
                return (0, i.jsxs)(u.E.svg, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  width: "69",
                  height: "69",
                  viewBox: "0 0 69 69",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M3.64893 3.64868L26.6767 26.6765",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M3.6488 64.7227L26.6766 41.6948",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M64.7226 64.7224L41.6948 41.6946",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M64.7226 3.64869L41.6948 26.6765",
                      stroke: l,
                      strokeWidth: "2.47787",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M59.9777 67.2202H8.73413",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M59.9777 1.4917H8.73413",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M67.2202 8.73413V59.9777",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                    (0, i.jsx)(u.E.path, {
                      variants: d,
                      custom: 0,
                      d: "M1.4917 8.73413V59.9777",
                      stroke: l,
                      strokeWidth: "2.70552",
                      strokeMiterlimit: "10",
                    }),
                  ],
                });
              default:
                return null;
            }
          })();
        },
        m = s(71031);
      function x(e) {
        let { links: t } = e;
        var s, a, n;
        const [o, c] = (0, r.useState)(-1),
          [u, x] = (0, r.useState)(!1),
          [p, f] = (0, r.useState)({
            width: 0,
            height: 0,
            transform: "translateX(0px)",
          }),
          g = (0, r.useRef)(null),
          [v, b] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          u && g.current ? b(g.current.scrollHeight) : b(0);
        }, [u, o]);
        const k = (e) => {
            c(e), x(e > -1);
          },
          j = (0, r.useCallback)(() => {
            x(!1),
              setTimeout(() => {
                k(-1);
              }, 100);
          }, []),
          w = (0, r.useCallback)((e) => {
            const t = e.currentTarget;
            var s;
            const i = parseInt(
                null !== (s = t.getAttribute("data-index")) && void 0 !== s
                  ? s
                  : "0",
              ),
              r = t.getBoundingClientRect();
            f({
              width: r.width,
              height: r.height,
              transform: "translateX(".concat(t.offsetLeft - 4, "px)"),
            }),
              k(i);
          }, []);
        return (0, i.jsxs)("div", {
          className: "relative flex flex-col items-center gap-2 rounded-xl p-1",
          onMouseLeave: j,
          children: [
            (0, i.jsx)(d.default, {
              innerClassName: "py-1 bg-[#0C0C0C]",
              radius: 8,
              children: (0, i.jsxs)("div", {
                className: "group relative flex items-center gap-0 p-1",
                children: [
                  t.map((e, t) =>
                    (0, i.jsx)(
                      m.default,
                      {
                        "data-index": t,
                        href: e.href + "?utm_source=dotorg&utm_medium=nav",
                        target: e.href.startsWith("https://")
                          ? "_blank"
                          : void 0,
                        onMouseEnter: w,
                        className:
                          "rounded-lg bg-opacity-0 px-6 py-1 text-sm opacity-50 transition-all duration-300 hover:bg-opacity-10 hover:opacity-100 ".concat(
                            o === t ? "bg-opacity-10 opacity-100" : "",
                          ),
                        children: e.name,
                      },
                      "link-".concat(e.name).toLocaleLowerCase(),
                    ),
                  ),
                  (0, i.jsx)("div", {
                    className:
                      "pointer-events-none absolute h-full rounded-lg bg-white/20 transition-all duration-300 ease-in-out ".concat(
                        o > -1 ? "opacity-100" : "opacity-0",
                      ),
                    style: { width: p.width, transform: p.transform },
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              ref: g,
              className:
                "absolute top-full w-full p-1 duration-300 ease-in-out",
              style: {
                height: "".concat(v, "px"),
                opacity: u ? 1 : 0,
                transform: "translateY(".concat(u ? 0 : -20, "px)"),
              },
              children: (0, i.jsx)(d.default, {
                radius: 8,
                innerClassName: "bg-[#191919]",
                children: (0, i.jsxs)("div", {
                  className:
                    "flex w-full items-stretch gap-2 rounded-lg bg-[#191919] p-2",
                  children: [
                    (null === (s = t[o]) || void 0 === s
                      ? void 0
                      : s.subItems) &&
                      (0, i.jsx)(l.default, {
                        context: t[o].analyticContext,
                        children: (0, i.jsx)("div", {
                          className: "flex flex-1 flex-col",
                          children: t[o].subItems.map((e) =>
                            (0, i.jsxs)(
                              m.default,
                              {
                                href:
                                  e.href + "?utm_source=dotorg&utm_medium=nav",
                                target: e.href.startsWith("https://")
                                  ? "_blank"
                                  : void 0,
                                className:
                                  "group/sublink flex justify-between rounded-lg bg-white bg-opacity-0 px-3 py-2 text-sm transition-all duration-300 hover:bg-opacity-20",
                                children: [
                                  (0, i.jsx)("span", { children: e.name }),
                                  (0, i.jsx)("span", {
                                    className:
                                      "rotate-0 transform opacity-0 transition-all delay-75 duration-300 group-hover/sublink:rotate-45 group-hover/sublink:opacity-60",
                                    children: "\u2197",
                                  }),
                                ],
                              },
                              "link-"
                                .concat(t[o].name, "-subitem-")
                                .concat(e.name)
                                .toLocaleLowerCase(),
                            ),
                          ),
                        }),
                      }),
                    (null === (a = t[o]) || void 0 === a
                      ? void 0
                      : a.subItems) &&
                      (0, i.jsx)("div", {
                        className:
                          "min-h-[200px] flex-1 basis-0 overflow-hidden ",
                        children:
                          (null === (n = t[o]) || void 0 === n
                            ? void 0
                            : n.name) &&
                          (0, i.jsx)("div", {
                            className:
                              "flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-black",
                            children:
                              u &&
                              (0, i.jsx)(h, { icon: t[o].name }, t[o].name),
                          }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var p = s(55197),
        f = s(10430),
        g = s(27560),
        v = s(86855),
        b = s.n(v);
      function k(e) {
        let {
          link: t,
          activeLinkId: s,
          linkId: a,
          toggleLink: n,
          toggleMenu: o,
        } = e;
        var c;
        const d = (0, r.useCallback)(() => n(a), [a, n]),
          u = a === s,
          [h, x] = (0, r.useState)(0),
          v = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          const e = v.current;
          if (e) {
            const t = new ResizeObserver((e) => {
              for (let t of e) x(t.contentRect.height);
            });
            return (
              t.observe(e),
              () => {
                e && t.unobserve(e);
              }
            );
          }
        }, []);
        const k = b()(
          "inline-block transition-all opacity-50",
          u ? "rotate-0" : "-rotate-90",
        );
        return (0, i.jsxs)(l.default, {
          context: t.analyticContext,
          children: [
            (0, i.jsxs)("button", {
              type: "button",
              onClick: d,
              className:
                "flex w-full items-center justify-between gap-2 text-left",
              children: [
                (0, i.jsx)(p.Z, { level: f.Y.Display3, children: t.name }),
                (0, i.jsx)("span", {
                  className: k,
                  children: (0, i.jsx)(g.J, {
                    name: "caret",
                    color: "currentColor",
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "overflow-hidden transition-[max-height] duration-300 ease-in-out",
              style: { maxHeight: u ? "".concat(h, "px") : "0px" },
              children: (0, i.jsx)("ul", {
                ref: v,
                className: "flex flex-col gap-2",
                children:
                  null === (c = t.subItems) || void 0 === c
                    ? void 0
                    : c.map((e) =>
                        (0, i.jsx)(
                          "li",
                          {
                            className: "first:mt-4 last:mb-6",
                            children: (0, i.jsxs)(m.default, {
                              href:
                                e.href + "?utm_source=dotorg&utm_medium=nav",
                              target: e.href.startsWith("https://")
                                ? "_blank"
                                : void 0,
                              onClick: o,
                              className:
                                "group/sublink inline-block flex w-full items-center justify-between gap-2 rounded-2xl py-2 ",
                              children: [
                                (0, i.jsx)(p.Z, {
                                  level: f.Y.Title4,
                                  children: e.name,
                                }),
                                (0, i.jsx)("span", {
                                  className:
                                    "pr-1 opacity-50 group-hover/sublink:opacity-100",
                                  children: (0, i.jsx)(g.J, {
                                    name: "arrowRight",
                                    color: "currentColor",
                                    height: "0.75rem",
                                    width: "0.75rem",
                                  }),
                                }),
                              ],
                            }),
                          },
                          ""
                            .concat(a, "-subitem-")
                            .concat(e.name)
                            .toLowerCase(),
                        ),
                      ),
              }),
            }),
          ],
        });
      }
      function j(e) {
        let { links: t } = e;
        const [s, n] = (0, r.useState)(),
          [o, l] = (0, r.useState)(!1),
          d = (0, r.useCallback)((e) => {
            n((t) => (e === t ? void 0 : e));
          }, []),
          u = (0, r.useCallback)(() => {
            l(!o);
          }, [o]);
        return (0, i.jsxs)("div", {
          className: "mr-auto",
          children: [
            (0, i.jsx)("button", {
              type: "button",
              onClick: u,
              "aria-label": "Open Menu",
              className: "relative z-20 rounded-xl bg-black px-4 py-2",
              children: (0, i.jsx)(g.J, {
                name: "more-menu",
                color: "currentColor",
              }),
            }),
            o &&
              (0, i.jsxs)("div", {
                className:
                  "fixed inset-0 z-50 overflow-auto bg-black px-[1.75rem] pb-20 pt-5",
                children: [
                  (0, i.jsxs)("div", {
                    className: "mb-8 flex items-center justify-between gap-4",
                    children: [
                      (0, i.jsx)(m.default, {
                        href: "/",
                        className:
                          "-ml-3 flex min-h-[2.875rem] min-w-[2.875rem]",
                        children: (0, i.jsx)(a.default, {
                          src: c,
                          alt: "Base Logo",
                        }),
                      }),
                      (0, i.jsx)("button", {
                        type: "button",
                        onClick: u,
                        "aria-label": "Close Menu",
                        className:
                          "rounded.xl relative z-20 bg-black px-4 py-2 pr-1",
                        children: (0, i.jsx)(g.J, {
                          name: "close",
                          color: "currentColor",
                          height: "1rem",
                          width: "1rem",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("ul", {
                    className: "flex flex-col gap-6",
                    children: t.map((e) => {
                      const t = "link-".concat(e.name).toLowerCase();
                      return (0, i.jsx)(
                        "li",
                        {
                          children: (0, i.jsx)(k, {
                            link: e,
                            activeLinkId: s,
                            linkId: t,
                            toggleLink: d,
                            toggleMenu: u,
                          }),
                        },
                        t,
                      );
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var w = s(90713),
        y = s(64314),
        M = s(77494),
        C = s(56391);
      const N = (e) => {
        const t = Number(e) / 1e6;
        return Number(t.toFixed(2));
      };
      function E() {
        return (0, i.jsx)(C._, { children: (0, i.jsx)(W, {}) });
      }
      function W() {
        const { data: e } = (0, M.useGasPrice)({
            chainId: w.u.id,
            query: { refetchInterval: 1e4 },
          }),
          { data: t } = (0, M.useGasPrice)({
            chainId: y.R.id,
            query: { refetchInterval: 1e4 },
          });
        return (0, i.jsxs)("div", {
          className: "group relative hidden md:block",
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex flex-row cursor-pointer items-center gap-2 rounded-xl bg-black px-4 py-3 transition-all group-hover:bg-[#333]",
              children: [
                (0, i.jsx)("span", {
                  className: "animate-pulse text-palette-positive",
                  children: (0, i.jsx)(g.J, {
                    name: "blueCircle",
                    color: "currentColor",
                    height: "0.75rem",
                    width: "0.75rem",
                  }),
                }),
                (0, i.jsx)("strong", {
                  children: e
                    ? N(e)
                    : (0, i.jsx)(i.Fragment, { children: "\u2014" }),
                }),
                (0, i.jsx)("small", { children: "Mgwei" }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "absolute left-0 top-full hidden pt-2 group-hover:inline-block",
              children: (0, i.jsx)(d.default, {
                innerClassName: "p-4 bg-[#191919]",
                children: (0, i.jsxs)("ul", {
                  className: "flex flex-col gap-2 whitespace-nowrap",
                  children: [
                    (0, i.jsxs)("li", {
                      className: "flex gap-2",
                      children: [
                        (0, i.jsx)("strong", {
                          className: "font-normal",
                          children: w.u.name,
                        }),
                        (0, i.jsxs)("span", {
                          className: "opacity-50",
                          children: [
                            e
                              ? N(e)
                              : (0, i.jsx)(i.Fragment, { children: "\u2014" }),
                            " ",
                            (0, i.jsx)("span", { children: "Mgwei" }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("li", {
                      className: "flex gap-2",
                      children: [
                        (0, i.jsx)("strong", {
                          className: "font-normal",
                          children: y.R.name,
                        }),
                        (0, i.jsxs)("span", {
                          className: "opacity-50",
                          children: [
                            t
                              ? N(t)
                              : (0, i.jsx)(i.Fragment, { children: "\u2014" }),
                            " ",
                            (0, i.jsx)("span", { children: "Mgwei" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var L = s(61481);
      const B = [
          {
            name: "Build",
            analyticContext: "build",
            href: "/build",
            subItems: [
              { name: "Get Started", href: "/build" },
              { name: "Docs", href: "https://docs.base.org" },
              {
                name: "Learn",
                href: "https://docs.base.org/base-learn/docs/welcome",
              },
              { name: "Status Page", href: "https://status.base.org" },
              { name: "Block Explorer", href: "https://base.blockscout.com" },
              { name: "Bug Bounty", href: "https://hackerone.com/coinbase" },
              { name: "Github", href: "https://github.com/base-org" },
            ],
          },
          {
            name: "Explore",
            analyticContext: "explore",
            href: "/ecosystem",
            subItems: [
              { name: "Apps", href: "/ecosystem" },
              { name: "Bridge", href: "https://bridge.base.org" },
            ],
          },
          {
            name: "Community",
            analyticContext: "community",
            href: "/",
            subItems: [
              {
                name: "Grants",
                href: "https://paragraph.xyz/@grants.base.eth/calling-based-builders",
              },
              { name: "Events", href: "https://lu.ma/BaseMeetups" },
            ],
          },
          {
            name: "About",
            analyticContext: "about",
            href: "/about",
            subItems: [
              { name: "Vision", href: "/about" },
              { name: "Blog", href: "https://base.mirror.xyz/" },
              { name: "Jobs", href: "/jobs" },
              {
                name: "Media Kit",
                href: "https://github.com/base-org/brand-kit",
              },
            ],
          },
          {
            name: "Socials",
            analyticContext: "socials",
            href: "#socials",
            subItems: [
              { name: "X", href: "https://x.com/base" },
              { name: "Farcaster", href: "https://warpcast.com/base" },
              { name: "Github", href: "https://github.com/base-org" },
              {
                name: "Discord",
                href: "https://discord.com/invite/buildonbase",
              },
            ],
          },
        ],
        _ = ["/jobs", "/about", "/ecosystem", "/build"];
      function Y() {
        const e = (0, o.usePathname)(),
          t = !_.includes(null !== e && void 0 !== e ? e : "");
        return (0, i.jsx)(l.default, {
          context: "navbar",
          children: (0, i.jsx)("nav", {
            className:
              "fixed top-0 z-50 w-full shrink-0 px-[1rem] py-4 md:px-[1.5rem] lg:px-[2rem]",
            children: (0, i.jsxs)("div", {
              className: "flex w-full items-center justify-between gap-2",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "relative z-20 flex items-center gap-4 md:min-w-[16rem]",
                  children: [
                    (0, i.jsx)(n.default, {
                      href: "/",
                      className: "flex min-h-[3rem] min-w-[3rem]",
                      children: (0, i.jsx)(a.default, {
                        src: c,
                        alt: "Base Logo",
                      }),
                    }),
                    t && (0, i.jsx)(E, {}),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "hidden md:inline-block",
                  children: (0, i.jsx)(x, { links: B }),
                }),
                (0, i.jsx)("div", {
                  className: "mr-auto inline-block md:hidden",
                  children: (0, i.jsx)(j, { links: B }),
                }),
                (0, i.jsx)("div", {
                  className: "flex items-end justify-end md:min-w-[16rem]",
                  children:
                    t &&
                    (0, i.jsx)(r.Suspense, {
                      children: (0, i.jsx)(L.J7, {
                        connectWalletButtonVariant: L.tB.BaseOrg,
                      }),
                    }),
                }),
              ],
            }),
          }),
        });
      }
    },
    55197: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = s(57437),
        r = s(10430),
        a = s(86855),
        n = s.n(a);
      const o = {
          [r.Y.Display1]: "h1",
          [r.Y.Display2]: "h2",
          [r.Y.Display3]: "h3",
          [r.Y.Display4]: "h4",
          [r.Y.Title1]: "h1",
          [r.Y.Title2]: "h2",
          [r.Y.Title3]: "h3",
          [r.Y.Title4]: "h4",
          [r.Y.Headline]: "h5",
          [r.Y.Big]: "h1",
        },
        l = {
          [r.Y.Display1]:
            "font-display text-[3.8125rem] lg:text-[4.8125rem] leading-[1.2em] tracking-[-0.01em]",
          [r.Y.Display2]:
            "font-display text-[2.75rem] lg:text-[3.75rem] leading-[1.2em]",
          [r.Y.Display3]:
            "font-display text-[1.625rem] lg:text-[2.625rem] leading-[1.2em]",
          [r.Y.Display4]:
            "font-display text-[1.5rem] lg:text-[2rem] leading-[1.2em]",
          [r.Y.Title1]: "font-sans text-[1.75rem] leading-[1.2em] font-bold",
          [r.Y.Title2]:
            "font-sans text-[1.625rem] leading-[2.375rem] tracking-[-0.01em]",
          [r.Y.Title3]: "font-sans text-[1.25rem] leading-[1.75rem]",
          [r.Y.Title4]: "font-sans text-[1.125rem] leading-[1.625rem]",
          [r.Y.Headline]: "font-sans text-[1rem] leading-[1.4375rem] font-bold",
          [r.Y.Big]: "font-sans text-[2rem] leading-[1.2em] font-bold",
        };
      function c(e) {
        let { level: t = r.Y.Title1, children: s, as: a, className: c } = e;
        const d = null !== a && void 0 !== a ? a : o[t],
          u = n()("text-currentColor", l[t], c);
        return (0, i.jsx)(d, { className: u, children: s });
      }
    },
    10430: function (e, t, s) {
      "use strict";
      var i;
      s.d(t, {
        Y: function () {
          return i;
        },
      }),
        (function (e) {
          (e.Display1 = "display-1"),
            (e.Display2 = "display-2"),
            (e.Display3 = "display-3"),
            (e.Display4 = "display-4"),
            (e.Title1 = "title-1"),
            (e.Title2 = "title-2"),
            (e.Title3 = "title-3"),
            (e.Title4 = "title-5"),
            (e.Headline = "headline");
        })(i || (i = {}));
    },
  },
  function (e) {
    e.O(
      0,
      [
        9472, 2486, 589, 2972, 5878, 22, 1226, 1165, 2694, 6906, 7347, 7945,
        8628, 5893, 1611, 7010, 5652, 7560, 6842, 1627, 2971, 2117, 1744,
      ],
      function () {
        return (t = 793), e((e.s = t));
        var t;
      },
    );
    var t = e.O();
    _N_E = t;
  },
]);
