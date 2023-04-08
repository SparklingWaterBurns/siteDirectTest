"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["loader.TrendHandler"], {
    52327: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            default: ()=>Y
        });
        var n = r(16742)
          , a = r(76275)
          , o = r(19744)
          , s = r(7896)
          , i = r(2784)
          , c = r(25686)
          , d = r(65188)
          , l = r(36934)
          , m = r(65098)
          , p = r(74062)
          , u = r(3613)
          , E = r(41310)
          , g = r(42460)
          , T = r(73186)
          , h = r(54484)
          , y = r(56500);
        function b({attachment: e, description: t, domainContext: r, groupedTrends: n=[], link: a, metaDescription: o, name: s, onClick: T, promotedContent: b, promotedLabel: Z, rank: C, renderQuoteTweet: M, testID: k, trendFeedbackMenu: w, withDarkerInteractiveBackground: v}) {
            const D = i.useContext(m.ZP)
              , _ = (0,
            h.b)();
            return i.createElement(p.Z, {
                accessibilityLabelledBy: _,
                accessibilityRole: a ? void 0 : "article",
                link: a ? D.withAnchorless(a) : void 0,
                onPress: T,
                style: I.root,
                testID: k,
                withDarkerInteractiveBackground: v
            }, i.createElement(c.Z, {
                nativeID: _,
                style: I.content
            }, i.createElement(u.Z, null, C ? i.createElement(l.ZP, {
                accessibilityHidden: !0,
                color: "gray700",
                size: "subtext2"
            }, C) : null, r ? i.createElement(l.ZP, {
                color: "gray700",
                size: "subtext2"
            }, r) : null), i.createElement(l.ZP, {
                dir: y.Z.getTextDirection(s),
                style: I.name,
                weight: "bold",
                withHashflags: !0
            }, s), t ? i.createElement(l.ZP, {
                color: "gray700",
                style: I.description
            }, t) : null, M ? i.createElement(c.Z, {
                style: I.quoteTweet
            }, M({
                isCondensed: !0
            })) : null, e ? i.createElement(c.Z, {
                style: I.attachmentWrapper
            }, e) : null, n.length ? i.createElement(g.Z, {
                groupedTrends: n
            }) : null, o ? i.createElement(l.ZP, {
                color: "gray700",
                dir: (A = o,
                (0,
                d.Z)(A) && A.length ? y.Z.getTextDirection(A, {
                    fromEnd: !0
                }) : void 0),
                size: "subtext2",
                style: I.metaDescription
            }, o) : null, b ? i.createElement(l.ZP, {
                color: "gray700",
                size: "subtext2",
                style: I.promotedIndicatorWrapper
            }, i.createElement(E.Z, {
                label: Z,
                promotedContent: b
            })) : null, w ? i.createElement(c.Z, {
                style: I.trendFeedbackMenuWrapper
            }, w) : null));
            var A
        }
        const I = T.Z.create((e=>({
            root: {
                display: "flex",
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingVertical: e.componentDimensions.gutterVertical
            },
            content: {
                flexGrow: 1,
                position: "relative"
            },
            name: {
                marginTop: e.spaces.space2
            },
            description: {
                marginTop: e.spaces.space2
            },
            quoteTweet: {
                marginTop: e.spaces.space4
            },
            attachmentWrapper: {
                alignSelf: "stretch",
                marginBottom: e.spaces.space4,
                marginTop: e.spaces.space12
            },
            metaDescription: {
                marginTop: e.spaces.space4
            },
            promotedIndicatorWrapper: {
                marginTop: e.spaces.space4
            },
            trendFeedbackMenuWrapper: {
                position: "absolute",
                top: 1,
                end: 0
            }
        })));
        var Z = r(51507)
          , C = r(91584)
          , M = r(23301)
          , k = r(60673)
          , w = r(58804)
          , v = r(1451)
          , D = r(48086)
          , _ = r(58955)
          , A = r(19098);
        const {CardNames: f} = D.Z
          , x = Object.freeze({
            [f.LIVE_EVENT]: !0,
            [f.MOMENT]: !0,
            [f.SUMMARY]: !0,
            [f.SUMMARY_LARGE_IMAGE]: !0,
            [f.AUDIOSPACE]: !0
        })
          , P = (0,
        _.Z)([f.LIVE_EVENT, f.AUDIOSPACE]);
        const S = {
            locationKey: "trend",
            tweetUserId: "TREND_CARD_NO_TWEET_USER_ID"
        }
          , R = ({card: e, withThirdPartyCards: t})=>{
            const r = i.useMemo((()=>({
                ...e,
                name: e.name === f.SUMMARY_LARGE_IMAGE ? f.SUMMARY : e.name
            })), [e]);
            return function({card: e, withThirdPartyCards: t}) {
                return !(!x[e.name] || !P.has(e.name) && !t)
            }({
                card: e,
                withThirdPartyCards: t
            }) ? i.createElement(A.default, {
                card: r,
                cardContext: S,
                cardState: "secondary"
            }) : null
        }
          , H = i.memo(R);
        var L = r(23335)
          , U = r(6800)
          , W = r(92160)
          , z = r(42030)
          , F = r(15934);
        const N = (e,t)=>t.entry.content.associatedCardUrls || (0,
        U.o)()
          , V = (0,
        W.Z)().propsFromState((()=>({
            cards: z.Z.createManyHydratedSelector(N)
        }))).propsFromActions((({errorContext: e})=>({
            createLocalApiErrorHandler: (0,
            L.createLocalApiErrorHandlerWithContextFactory)(e),
            logTrend: F.dS
        })))
          , B = "trend"
          , G = ({cards: e, createLocalApiErrorHandler: t, entry: {content: r}, feedbackItems: n, logTrend: a, withThirdPartyCards: o})=>{
            const c = (0,
            k.z)()
              , d = Z.eY()
              , {associatedTweetIds: l, description: m, groupedTrends: p, name: u, promotedMetadata: E, rank: g, url: T} = r
              , {domainContext: h, metaDescription: y} = r.trendMetadata
              , I = i.useCallback((e=>{
                null != E && E.promotedTrendId && a({
                    promoted_trend_id: E.promotedTrendId,
                    impression_id: E.impressionString,
                    event: e
                }).catch(t())
            }
            ), [t, a, E]);
            i.useEffect((()=>{
                c.scribeAction("impression"),
                I(M.AJ.TREND_VIEW)
            }
            ), []);
            const D = i.useCallback((()=>{
                c.scribeAction("search"),
                I(M.AJ.TREND_CLICK)
            }
            ), [c, I])
              , _ = i.useMemo((()=>null != e && e.length ? i.createElement(H, {
                card: e[0],
                withThirdPartyCards: o
            }) : void 0), [e, o])
              , A = i.useMemo((()=>p ? p.map((e=>({
                name: e.name,
                link: (0,
                C.s9)(e.url)
            }))) : []), [p])
              , f = i.useMemo((()=>T ? (0,
            C.s9)(T) : void 0), [T])
              , x = i.useMemo((()=>null != E && E.promotedTrendId ? {
                disclosure_type: E.disclosureType,
                impression_id: E.promotedTrendId
            } : void 0), [E])
              , P = i.useMemo((()=>null != l && l.length ? e=>i.createElement(w.Z, (0,
            s.Z)({}, e, {
                tweetId: l[0]
            })) : void 0), [l])
              , S = i.useMemo((()=>null != n && n.length ? i.createElement(v.Z, {
                feedbackItems: n
            }) : void 0), [n]);
            return i.createElement(b, {
                attachment: _,
                description: m,
                domainContext: h,
                groupedTrends: A,
                link: f,
                metaDescription: x ? void 0 : y,
                name: u,
                onClick: D,
                promotedContent: x,
                promotedLabel: x ? y : void 0,
                rank: g,
                renderQuoteTweet: P,
                testID: B,
                trendFeedbackMenu: S,
                withDarkerInteractiveBackground: d
            })
        }
          , O = V(i.memo(G))
          , Y = e=>o.iH({
            isFocusable: (0,
            n.Z)(!0),
            component: O,
            getScribeDataItem: e=>{
                const {name: t, promotedMetadata: r} = e.content
                  , {clientEventInfo: n} = e.itemMetadata;
                return a.Z.getTrendItem(t, r, n)
            }
        }).getHandler((()=>({
            ...e
        })))
    }
    ,
    6800: (e,t,r)=>{
        r.d(t, {
            o: ()=>a
        });
        var n = r(16742);
        const a = (0,
        n.Z)([]);
        (0,
        n.Z)({})
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.02f5497a.js.map
