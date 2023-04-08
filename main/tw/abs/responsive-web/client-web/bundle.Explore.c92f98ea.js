"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["bundle.Explore"], {
    24101: (e,t,n)=>{
        n.d(t, {
            Z: ()=>d
        });
        var i = n(2784)
          , a = n(29496)
          , r = n(73186)
          , s = n(73228)
          , l = n.n(s)
          , c = n(51212);
        const o = "settingsAppBar"
          , p = l().bb081ea2
          , h = i.memo((({onPress: e, pullRight: t, to: n})=>i.createElement(a.ZP, {
            accessibilityLabel: p,
            hoverLabel: {
                label: p
            },
            icon: i.createElement(c.default, null),
            link: n,
            onPress: e,
            pullRight: t,
            style: m.button,
            testID: o,
            type: "primaryText"
        })))
          , m = r.Z.create((e=>({
            button: {
                marginVertical: `calc(-${e.spaces.space12})`
            }
        })))
          , d = h
    }
    ,
    53331: (e,t,n)=>{
        n.d(t, {
            Z: ()=>c
        });
        var i = n(2784)
          , a = n(72175)
          , r = n(96958)
          , s = n(1778);
        const l = ({children: e, description: t, includeOpenGraphMeta: n=!0, title: l})=>i.createElement(i.Fragment, null, l && i.createElement(r.Z, {
            title: l,
            withMeta: n
        }), n && i.createElement(s.Z, {
            description: t,
            title: l
        }), i.createElement(a.ql, null, i.createElement("meta", {
            description: t,
            name: "description"
        })), e)
          , c = i.memo(l)
    }
    ,
    51507: (e,t,n)=>{
        n.d(t, {
            $6: ()=>s,
            eY: ()=>l,
            zt: ()=>r
        });
        var i = n(2784);
        const a = i.createContext(!1);
        function r(e) {
            return i.createElement(a.Provider, e)
        }
        const s = a.Consumer;
        function l() {
            return i.useContext(a)
        }
    }
    ,
    58589: (e,t,n)=>{
        n.r(t),
        n.d(t, {
            ExploreScreen: ()=>I,
            default: ()=>M
        });
        n(6886);
        var i = n(2784)
          , a = n(8352)
          , r = n(73228)
          , s = n.n(r)
          , l = n(24101)
          , c = n(90876)
          , o = n(53331)
          , p = n(1778)
          , h = n(31261)
          , m = n(7765)
          , d = n(5621)
          , u = n(17847)
          , b = n(29022)
          , g = n(20579)
          , E = n(24949)
          , _ = n(16587)
          , w = n(24630)
          , f = n(92160);
        const x = (e,t)=>{
            var n, i;
            return (null == (n = t.match) || null == (i = n.params) ? void 0 : i.tabId) || void 0
        }
          , y = ()=>{
            const e = (0,
            _.Z)((e=>(0,
            g.fy)(e)))
              , t = (0,
            _.Z)(((e,t)=>(0,
            g.fy)(e, t)));
            return (0,
            E.P1)(w.qP, x, (t=>e((0,
            w.qP)(t)).selectPageConfiguration(t)), ((e,n,i)=>{
                var a;
                return t(e, i ? null == i || null == (a = i.tabs) ? void 0 : a.initialTabId : n)
            }
            ))
        }
          , C = (0,
        f.Z)().propsFromState((()=>({
            initialTabModule: y(),
            selectedTabId: x
        }))).withAnalytics({
            page: "guide",
            section: "main"
        });
        const k = {
            ...(0,
            n(44895).G)({
                withThirdPartyCards: !0,
                errorContext: "EXPLORE_SCREEN"
            })
        }
          , Z = s().fcf3e54c
          , v = s().ead349a8
          , T = s().a19ce060
          , B = ()=>i.createElement(d.Z, null)
          , P = ()=>i.createElement(a.Z, {
            message: T
        })
          , S = 600
          , R = 315
          , L = "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg";
        class I extends i.Component {
            constructor(...e) {
                super(...e),
                this._getTabLink = e=>({
                    pathname: `/explore/tabs/${e}`
                }),
                this._handleSettingsClick = e=>{
                    const {analytics: t} = this.props;
                    t.scribe({
                        element: "settings_button",
                        action: "click"
                    })
                }
                ,
                this._handleBackClick = ()=>{
                    const {history: e} = this.props;
                    e.goBack()
                }
                ,
                this._setSearchBoxRef = e=>{
                    this._searchBoxRef = e
                }
            }
            render() {
                const {analytics: e, history: t, initialTabModule: n, location: a, selectedTabId: r} = this.props
                  , s = i.createElement(m.Z, {
                    history: t
                })
                  , h = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends"
                  , d = i.createElement(l.Z, {
                    onPress: this._handleSettingsClick,
                    pullRight: !0,
                    to: h
                })
                  , E = a.state && a.state.searchFocused
                  , _ = i.createElement(c.Z, {
                    withSearchBox: !1,
                    withTrends: !1
                });
                return i.createElement(i.Fragment, null, i.createElement(o.Z, {
                    description: v,
                    includeOpenGraphMeta: !1,
                    title: Z
                }), i.createElement(p.Z, {
                    canonical: "https://twitter.com/explore",
                    description: v,
                    image: L,
                    imageH: R,
                    imageW: S,
                    title: Z,
                    type: "article"
                }), i.createElement(u.Z, {
                    entryConfiguration: k,
                    fab: s,
                    getTabLink: this._getTabLink,
                    history: t,
                    initialPageNamespace: e.contextualScribeNamespace,
                    module: n,
                    onBackClick: E ? this._handleBackClick : void 0,
                    prerollDisplayLocation: b.Nw.OTHER,
                    renderEmptyState: B,
                    renderUnavailable: P,
                    rightControl: d,
                    searchBoxRef: this._setSearchBoxRef,
                    selectedTabId: r,
                    sidebarContent: _,
                    timelinePrefix: g.uI,
                    title: Z,
                    withBottomLoginSignupBar: !0,
                    withDeferredView: !0,
                    withSearchBox: !0
                }), !1)
            }
        }
        I.contextType = h.rC;
        const M = C(I)
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Explore.c92f98ea.js.map
