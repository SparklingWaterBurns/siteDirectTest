"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["loader.ExploreSidebar"], {
    86421: (e,t,i)=>{
        i.r(t),
        i.d(t, {
            ExploreSidebar: ()=>T,
            UPDATE_INTERVAL: ()=>S,
            default: ()=>M
        });
        i(6886);
        var r = i(2784)
          , s = i(26499)
          , n = i(25686)
          , o = i(8352)
          , a = i(73228)
          , l = i.n(a)
          , c = i(16587)
          , d = i(85332)
          , h = i(31261)
          , p = i(20579)
          , u = i(40082)
          , _ = i(19744)
          , f = i(44895)
          , m = i(52612);
        const w = {
            ...(0,
            f.G)({
                withThirdPartyCards: !1,
                isInSidebar: !0,
                errorContext: "EXPLORE_SIDEBAR"
            }),
            [m.ZP.TimelineCursor]: _.OZ(_.KM()),
            [m.ZP.Label]: _.OZ(_.KM()),
            [m.ZP.Message]: _.OZ(_.KM()),
            [m.ZP.News]: _.OZ(_.KM())
        }
          , Z = l().b8e930fe
          , b = l().ae05f268
          , S = 3e5
          , g = ()=>r.createElement(o.Z, {
            message: b
        })
          , v = (0,
        c.Z)(((e,t)=>(0,
        p.O9)({
            featureSwitches: t,
            displayLocation: p.qk.WebSidebar,
            focalTweetId: e
        })))
          , E = (0,
        c.Z)(((e,t)=>(0,
        p.O9)({
            featureSwitches: t,
            displayLocation: p.qk.WebSidebar,
            profileUserId: e
        })));
        class T extends r.Component {
            constructor(...e) {
                super(...e),
                this._getModule = ()=>{
                    const {focalTweetId: e, profileUserId: t} = this.props;
                    return e ? v(e, this.context.featureSwitches) : t ? E(t, this.context.featureSwitches) : (0,
                    p.G0)(this.context.featureSwitches)
                }
                ,
                this._setTimelineRef = e=>{
                    this._timeline = e
                }
                ,
                this._onAppForegrounded = e=>{
                    "active" === e && this._fetchUpdates()
                }
                ,
                this._fetchUpdates = ()=>{
                    this._timeline && "active" === s.Z.currentState && this._timeline.fetchTop({})
                }
            }
            componentDidMount() {
                this._listener = s.Z.addEventListener("change", this._onAppForegrounded)
            }
            componentWillUnmount() {
                var e;
                null == (e = this._listener) || e.remove("change", this._onAppForegrounded)
            }
            render() {
                return r.createElement(n.Z, null, r.createElement(u.Z, {
                    entryConfiguration: w,
                    module: this._getModule(),
                    pollingIntervalMsOverride: S,
                    renderUnavailable: g,
                    scroller: d.Z,
                    showLoadingFooter: !1,
                    timelineRef: this._setTimelineRef,
                    title: Z,
                    withKeyboardShortcuts: !1
                }))
            }
        }
        T.contextType = h.rC;
        const M = T
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ExploreSidebar.f02591ea.js.map
