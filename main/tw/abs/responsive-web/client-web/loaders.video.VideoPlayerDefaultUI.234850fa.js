"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["loaders.video.VideoPlayerDefaultUI"], {
    31177: (e,t,l)=>{
        l.d(t, {
            Z: ()=>p
        });
        l(6886);
        var a = l(2784)
          , r = l(25686)
          , n = l(73228)
          , i = l.n(n)
          , s = l(29496)
          , o = l(73186);
        const c = i().f2d4e6f2;
        class p extends a.PureComponent {
            constructor(...e) {
                super(...e),
                this._createWatchAgainHandler = e=>t=>{
                    const {onScribeEvent: l, playerApi: a} = this.props;
                    t.stopPropagation(),
                    l && l({
                        namespace: {
                            element: e,
                            action: "click"
                        }
                    }),
                    a && a.replay()
                }
                ,
                this._handleOnPress = this._createWatchAgainHandler("watch_again_button"),
                this._handleOnClick = this._createWatchAgainHandler("watch_again_overlay")
            }
            render() {
                const {playerState: e} = this.props;
                return e && e.tracksFinished ? a.createElement(r.Z, {
                    onClick: this._handleOnClick,
                    style: d.overlay
                }, a.createElement(s.ZP, {
                    accessibilityLabel: c,
                    onPress: this._handleOnPress,
                    type: "onMediaDominantColorFilled"
                }, c)) : null
            }
        }
        const d = o.Z.create((e=>({
            overlay: {
                ...o.Z.absoluteFillObject,
                backgroundColor: o.Z.theme.colors.translucentBlack30,
                alignItems: "center",
                justifyContent: "center"
            }
        })))
    }
    ,
    61267: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>w
        });
        l(6886);
        var a = l(2784)
          , r = l(25686)
          , n = l(6869)
          , i = l(34577)
          , s = l(38250)
          , o = l(95606)
          , c = l(3381)
          , p = l(66023)
          , d = l(19229)
          , u = l(73346)
          , y = l(28904)
          , h = l(6019)
          , m = l(17119)
          , E = l(2790)
          , v = l(63276)
          , S = l(34516)
          , b = l(22509)
          , g = l(43174)
          , A = l(78388)
          , Z = l(31177)
          , _ = l(23739);
        class k extends a.PureComponent {
            constructor(...e) {
                super(...e),
                this.state = {
                    wasPrerollSkipped: !1
                },
                this._renderVideoPlayer = e=>{
                    var t;
                    const {playerApi: l, playerState: r, poster: n, useKeyboardShortcuts: c} = this.props;
                    if (!l || !r)
                        return null;
                    const p = (0,
                    y.Ci)(r)
                      , d = (null == p ? void 0 : p.contentType) === h.wF.GIF
                      , m = (null == p ? void 0 : p.displayType) === h.ak.AD && (null == p ? void 0 : p.playbackCompleted)
                      , E = null == (t = r.errorInfo) ? void 0 : t.adFailed
                      , v = (null == p ? void 0 : p.displayType) === h.ak.AD && (null == p ? void 0 : p.useRedesignedPrerollUx);
                    return v && (this.state.wasPrerollSkipped || m || E) ? a.createElement(s.o, null, (({aspectRatio: e})=>{
                        const t = n || r.posterImage;
                        return a.createElement(i.ZP, {
                            aspectRatio: e,
                            imageSrc: t,
                            onTransitionComplete: this._handleTransitionAnimationComplete
                        })
                    }
                    )) : v ? this._renderVideo(e, !0) : a.createElement(u.Z, {
                        enabled: !d && !!c,
                        playerApi: l,
                        playerState: r
                    }, a.createElement(o.Z, {
                        playerState: r
                    }, this._renderVideo(e, !1)))
                }
                ,
                this._renderVideo = (e,t)=>{
                    var l, i;
                    const {accessibilityLabel: s, containerRef: o, customControlBarIcon: p, fullscreenAdsDisabledOnIOS: u, guestsState: k, includeDisputeLinkInCopyrightErrorMessage: w, onScribeEvent: C, playerApi: f, playerDisplayOptions: P, playerState: I, poster: D, shouldShowAltLabel: O, showWatchAgain: F} = this.props;
                    if (!f || !I)
                        return null;
                    const {Observer: L, observed: R} = e
                      , T = (0,
                    _.JN)(I, R, _.i2)
                      , V = !!I.error
                      , B = (0,
                    y.Ci)(I)
                      , x = (null == B ? void 0 : B.contentType) === h.wF.GIF
                      , G = "PLAY_REQUESTED" !== (null == (l = I.controls) ? void 0 : l.playState)
                      , H = F && I.tracksFinished
                      , U = T && I.isPreview
                      , K = !(!T || null == B || !B.isLive)
                      , M = O ? s : void 0
                      , W = !(null != P && P.hideLeftBadges) && (!!M || x || U || K)
                      , N = !(null != P && P.hideRightBadges) && T
                      , j = U || !T
                      , z = !(null != P && P.hidePosterImage)
                      , Y = null == (i = I.controls) ? void 0 : i.isPosterShown;
                    return a.createElement(L, {
                        click: !0,
                        interactionKey: _.IG.Root,
                        mousemove: !0,
                        mouseover: !0
                    }, V ? null : a.createElement(a.Fragment, null, a.createElement(b.Z, {
                        hideControls: T,
                        isTouchOnlyUI: _.i2,
                        playerApi: f,
                        playerDisplayOptions: P,
                        playerState: I
                    }), z && !H && a.createElement(g.Z, {
                        imageSrc: D,
                        playerApi: f,
                        playerState: I,
                        withPlayButton: G
                    }), a.createElement(E.Z, {
                        playerState: I
                    }), t ? a.createElement(A.Z, {
                        containerRef: o,
                        onSkip: this._handleSkip,
                        playerApi: f,
                        playerState: I
                    }) : a.createElement(a.Fragment, null, !x && F && a.createElement(Z.Z, {
                        onScribeEvent: C,
                        playerApi: f,
                        playerState: I
                    }), a.createElement(S.Z, {
                        guestsState: k,
                        playerState: I
                    }), !x && a.createElement(L, {
                        focus: !0,
                        interactionKey: _.IG.VideoCTA,
                        mouseover: !0
                    }, a.createElement(n.Z, {
                        show: !T
                    }, a.createElement(d.Z, {
                        playerApi: f,
                        playerState: I
                    }))), !x && !Y && a.createElement(a.Fragment, null, a.createElement(L, {
                        focus: !0,
                        interactionKey: _.IG.A11YHook
                    }, a.createElement(r.Z, {
                        focusable: !0
                    })), a.createElement(L, {
                        focus: !0,
                        interactionKey: _.IG.ControlBar,
                        mouseover: !0,
                        touch: !0
                    }, a.createElement(c.Z, {
                        containerRef: o,
                        customControlBarIcon: p,
                        fullscreenAdsDisabledOnIOS: u,
                        hideControls: T,
                        playerApi: f,
                        playerState: I,
                        publisherDisplayName: null == B ? void 0 : B.publisherDisplayName,
                        publisherProfileImageUrl: null == B ? void 0 : B.publisherProfileImageUrl,
                        showScrubber: "ad" !== (null == B ? void 0 : B.displayType) && !(null != B && B.isLive)
                    }))), a.createElement(n.Z, {
                        show: W
                    }, a.createElement(m.Z, {
                        mediaAccessibilityLabel: M,
                        playerApi: f,
                        playerDisplayOptions: P,
                        playerState: I,
                        position: "left"
                    })), a.createElement(n.Z, {
                        show: N
                    }, a.createElement(m.Z, {
                        playerApi: f,
                        playerDisplayOptions: P,
                        playerState: I,
                        position: "right"
                    })), a.createElement(n.Z, {
                        show: j
                    }, a.createElement(m.Z, {
                        playerApi: f,
                        playerDisplayOptions: P,
                        playerState: I,
                        position: "topRight"
                    })))), a.createElement(n.Z, {
                        show: V
                    }, V && a.createElement(v.Z, {
                        imageSrc: D,
                        includeDisputeLinkInCopyrightErrorMessage: w,
                        playerApi: f,
                        playerState: I
                    })))
                }
                ,
                this._handleSkip = ()=>{
                    const {playerApi: e} = this.props;
                    e && e.pause(),
                    this.setState({
                        wasPrerollSkipped: !0
                    })
                }
                ,
                this._handleTransitionAnimationComplete = ()=>{
                    const {playerApi: e} = this.props;
                    e && e.nextTrack()
                }
            }
            render() {
                const {playerApi: e, playerState: t} = this.props;
                return e && t ? a.createElement(p.Z, null, a.createElement(p.Z.Context.Consumer, null, this._renderVideoPlayer)) : null
            }
        }
        const w = k
    }
    ,
    78525: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>s
        });
        var a = l(2784)
          , r = l(90601)
          , n = l(73569);
        const i = (e={})=>(0,
        r.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [n.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M4 2h5v20H4V2zm11 20h5V2h-5v20z"
            }))
        });
        i.metadata = {
            width: 24,
            height: 24
        };
        const s = i
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.234850fa.js.map
