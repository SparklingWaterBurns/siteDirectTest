"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["bundle.Search", "icons/IconFilter-js", "icons/IconPlusCircle-js"], {
    69581: (e,t,r)=>{
        var s = r(71600);
        r(32501),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if (!e)
                return !1;
            var t = (0,
            o.default)(e);
            return 1 === t.length && t[0] === e.slice(1)
        }
        ;
        var o = s(r(77217));
        e.exports = t.default
    }
    ,
    12969: (e,t,r)=>{
        r.d(t, {
            Z: ()=>o
        });
        r(2784);
        var s = r(25686);
        const o = (0,
        r(20941).Z)(s.Z)
    }
    ,
    24395: (e,t,r)=>{
        r.d(t, {
            J: ()=>T,
            Z: ()=>k
        });
        r(85940);
        var s = r(2784)
          , o = r(25686)
          , a = r(38830)
          , i = r(18626)
          , n = r(73186)
          , c = r(73228)
          , l = r.n(c)
          , h = r(71768)
          , d = r(72218)
          , u = r(31261)
          , p = r(17464)
          , m = r(60673);
        const y = "searchFiltersAdvancedSearch"
          , S = Object.freeze({
            People: "People",
            Location: "Location"
        })
          , _ = l().j622effe
          , g = l().g2fd3206
          , v = l().defb4aaa
          , f = l().af293dc2
          , b = l().jaaa8984
          , C = l().i5045e74
          , w = l().h2388754
          , q = "anyone"
          , E = "youFollow"
          , x = "anywhere"
          , Z = "nearYou"
          , F = [{
            label: g,
            name: S.People,
            options: [{
                label: v,
                value: q
            }, {
                label: f,
                value: E
            }]
        }, {
            label: b,
            name: S.Location,
            options: [{
                label: C,
                value: x
            }, {
                label: w,
                value: Z
            }]
        }];
        class T extends s.Component {
            constructor(e, t) {
                super(e, t),
                this._renderFilters = ()=>F.map(((e,t)=>s.createElement(o.Z, {
                    key: e.name,
                    style: t > 0 && L.paddingTop
                }, s.createElement(i.Z, {
                    label: e.label,
                    name: e.name,
                    onChange: this._handleFilterChange,
                    options: e.options,
                    value: this._getCurrentValue(e.name)
                })))),
                this._getCurrentValue = e=>{
                    switch (e) {
                    case S.People:
                        return this.state.peopleFilter;
                    case S.Location:
                        return this.state.locationFilter;
                    default:
                        return ""
                    }
                }
                ,
                this._handleFilterChange = (e,t)=>{
                    const {loggedInUserId: r} = this.context
                      , {location: {query: s}} = this.props;
                    switch (e) {
                    case S.People:
                        if (r) {
                            this.setState({
                                peopleFilter: t
                            });
                            const e = {
                                pf: t === E ? "on" : void 0,
                                lf: "on" === s.lf ? s.lf : void 0
                            };
                            this._executeSearch(e, "people")
                        } else
                            this.setState({
                                shouldShowLoginSheet: !0
                            });
                        break;
                    case S.Location:
                        {
                            this.setState({
                                locationFilter: t
                            });
                            const e = {
                                lf: t === Z ? "on" : void 0,
                                pf: "on" === s.pf ? s.pf : void 0
                            };
                            this._executeSearch(e, "location");
                            break
                        }
                    }
                }
                ,
                this._getAdvancedSearchLink = ()=>{
                    const {location: e} = this.props;
                    return {
                        pathname: "/search-advanced",
                        query: {
                            ...(0,
                            h.Z)(e.query, ["q", "src"])
                        }
                    }
                }
                ,
                this._handleFooterPress = ()=>{
                    this._scribeAction("advanced_search")
                }
                ,
                this._scribeAction = e=>{
                    const {analytics: t} = this.props;
                    t.scribe({
                        element: e,
                        action: "click"
                    })
                }
                ,
                this._executeSearch = (e,t)=>{
                    const {history: r, location: s} = this.props;
                    this._scribeAction(t);
                    const o = this._getPathname();
                    r.replace({
                        pathname: o,
                        query: (0,
                        d.Z)({
                            ...s.query,
                            ...e
                        })
                    })
                }
                ,
                this._getPathname = ()=>{
                    const {location: e} = this.props;
                    if (e.pathname.includes("/hashtag/"))
                        return e.pathname;
                    if (e.state && e.state.previousPath && e.state.previousPath.includes("/hashtag/") && "/search" !== e.pathname) {
                        const t = e.state.previousPath
                          , r = t.indexOf("?") > -1 ? t.indexOf("?") : t.length;
                        return t.substring(0, r)
                    }
                    return "/search"
                }
                ,
                this._handleHideLoginSheet = ()=>{
                    this.setState({
                        shouldShowLoginSheet: !1
                    })
                }
                ;
                const {loggedInUserId: r} = this.context
                  , {location: a} = e
                  , n = a.query
                  , c = r && n && n.pf ? E : q
                  , l = n && n.lf ? Z : x;
                this.state = {
                    peopleFilter: c,
                    locationFilter: l,
                    shouldShowLoginSheet: !1
                }
            }
            componentDidMount() {
                const {analytics: e} = this.props;
                e.scribe({
                    action: "impression"
                })
            }
            render() {
                const {withBottomBorder: e} = this.props
                  , {shouldShowLoginSheet: t} = this.state;
                return s.createElement(o.Z, null, s.createElement(o.Z, {
                    style: L.content
                }, this._renderFilters()), s.createElement(o.Z, {
                    style: e && L.bottomBorder,
                    testID: y
                }, s.createElement(a.Z, {
                    link: this._getAdvancedSearchLink(),
                    onPress: this._handleFooterPress,
                    text: _
                })), t ? s.createElement(p.ZP, {
                    onClose: this._handleHideLoginSheet
                }) : null)
            }
        }
        T.contextType = u.rC,
        T.defaultProps = {
            withBottomBorder: !1
        };
        const L = n.Z.create((e=>({
            content: {
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingBottom: e.spaces.space16
            },
            bottomBorder: {
                borderBottomColor: e.colors.gray50,
                borderBottomStyle: "solid",
                borderBottomWidth: e.borderWidths.small
            },
            paddingTop: {
                paddingTop: e.spaces.space4
            }
        })))
          , k = (0,
        m.Z)(T, {
            page: "search_filters"
        })
    }
    ,
    20941: (e,t,r)=>{
        r.d(t, {
            Z: ()=>c
        });
        var s = r(2784)
          , o = r(11916)
          , a = r.n(o)
          , i = r(73463)
          , n = r.n(i);
        function c(e) {
            class t extends s.Component {
                constructor(e, t) {
                    super(e, t),
                    this.state = {
                        shouldRender: !1
                    },
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1
                }
                componentDidMount() {
                    a()((()=>{
                        this._mounted && this.setState({
                            shouldRender: !0
                        })
                    }
                    ))
                }
                render() {
                    return this.state.shouldRender ? s.createElement(e, this.props) : null
                }
            }
            return n()(t, e)
        }
    }
    ,
    63201: (e,t,r)=>{
        r.d(t, {
            $m: ()=>i,
            LG: ()=>n,
            xO: ()=>a
        });
        var s = r(60397);
        const o = "tweetVibe"
          , a = e=>{
            const t = (0,
            s.Rg)({
                query: null == e ? void 0 : e.discoveryQueryText,
                querySrc: "vibe"
            });
            return {
                query: t.query,
                pathname: t.pathname,
                state: {
                    [o]: e
                }
            }
        }
          , i = e=>{
            var t;
            return null == (t = e.state) ? void 0 : t.tweetVibe
        }
          , n = e=>({
            vibe_details: {
                vibe_text: null == e ? void 0 : e.text,
                ...null == e ? void 0 : e.annotation
            }
        })
    }
    ,
    96450: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            SearchFiltersScreen: ()=>d,
            default: ()=>u
        });
        var s = r(7896)
          , o = r(2784)
          , a = r(73228)
          , i = r.n(a)
          , n = r(292)
          , c = r(24395)
          , l = r(60673);
        const h = i().aea62568;
        function d(e) {
            const {history: t, location: r} = e;
            return o.createElement(n.Z, {
                documentTitle: h,
                history: t,
                title: h
            }, o.createElement(c.J, (0,
            s.Z)({}, e, {
                key: r.key,
                withBottomBorder: !0
            })))
        }
        const u = (0,
        l.Z)(d, {
            page: "search_filters"
        })
    }
    ,
    31176: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            SearchScreen: ()=>ze,
            default: ()=>Ne
        });
        r(6886);
        var s = r(2784)
          , o = r(25686)
          , a = r(68591)
          , i = r(54044)
          , n = r(96797)
          , c = r(73228)
          , l = r.n(c)
          , h = r(16587)
          , d = r(16322)
          , u = r(90876)
          , p = r(4964);
        r(72175);
        l().a8399d5b,
        l().ge893905;
        var m = r(24395)
          , y = r(43467)
          , S = r(31261)
          , _ = r(63705)
          , g = r(42055)
          , v = r(99629);
        const f = l().f9d35b98
          , b = l().ha925ad4
          , C = l().h0a9931c
          , w = {
            customErrorHandler: ()=>(0,
            v.fz)({
                text: b
            }),
            showToast: !0
        }
          , q = {
            customErrorHandler: ()=>(0,
            v.fz)({
                text: f
            }),
            showToast: !0
        }
          , E = {
            customErrorHandler: ()=>(0,
            v.fz)({
                text: C
            }),
            showToast: !0
        };
        var x = r(96889)
          , Z = r(45855)
          , F = r(76275)
          , T = r(60397)
          , L = r(63201)
          , k = r(59824)
          , I = r(24949)
          , B = r(23335)
          , M = r(97871)
          , A = r(92160)
          , H = r(39581)
          , O = r(33500);
        const R = (e,t)=>{
            const {location: r} = t;
            return r.query && r.query.src && "string" == typeof r.query.src ? r.query.src : ""
        }
          , D = (e,t)=>{
            const {location: r, match: {params: s}} = t;
            return s && s.unsafeHashtagQuery && "string" == typeof s.unsafeHashtagQuery ? `#${s.unsafeHashtagQuery}` : r && r.query && r.query.q && (0,
            M.B)(r.query.q) || ""
        }
          , P = (e,t)=>{
            const {location: r} = t;
            return 0 === r.pathname.indexOf("/search") ? "search" : "hashtag"
        }
          , z = (e,t)=>!!(t.location.state || {}).searchFocused
          , N = (e,t)=>(0,
        L.$m)(t.location)
          , V = (0,
        I.P1)((0,
        M.c)("pf"), (0,
        M.c)("lf"), ((e,t)=>({
            peopleFilter: e,
            locationFilter: t
        })))
          , U = (0,
        A.Z)().propsFromState((()=>({
            searchFocused: z,
            query: D,
            queryFilter: (0,
            I.P1)(D, N, T.Jm, ((e,t,r)=>{
                let s;
                return !!t && r === T.N3.Top && e === t.discoveryQueryText && !e.includes("filter:safe") && (s = "filter:safe"),
                s
            }
            )),
            querySrc: R,
            isQueryAlreadySaved: (0,
            I.P1)(D, O.as, ((e,t)=>t.map((e=>e.query)).indexOf(e) > -1)),
            searchType: P,
            searchFilters: V,
            mode: T.Jm,
            savedSearches: O.as,
            tweetVibe: N,
            vertical: (0,
            M.c)("vertical")
        }))).propsFromActions((()=>({
            addToast: v.fz,
            createLocalApiErrorHandler: (0,
            B.createLocalApiErrorHandlerWithContextFactory)("SEARCH_SCREEN"),
            deleteSavedSearch: O.k9,
            fetchSavedSearchesIfNeeded: O.l9,
            saveSearch: O.GL,
            scribeAction: H.n9
        }))).withAnalytics({
            page: "search"
        });
        r(36728),
        r(1951);
        var Q = r(44487)
          , j = r(35235)
          , $ = r(12296)
          , W = r(54170)
          , J = r(51212)
          , G = r(46874)
          , Y = r(71768);
        const X = "searchFilters-overflow"
          , K = "advancedSearch-overflow"
          , ee = "searchSettings-overflow"
          , te = "saveSearch-overflow"
          , re = "deleteSavedSearch-overflow"
          , se = l().h1ef00dc
          , oe = l().aea62568
          , ae = l().j622effe
          , ie = l().h4912b5e
          , ne = l().b9bc69ca;
        class ce extends s.Component {
            constructor(...e) {
                super(...e),
                this._getActionItems = ()=>{
                    const {deleteSavedSearch: e, isLoggedIn: t, isQueryAlreadySaved: r, isTwoColumn: s, location: o, saveSearch: a} = this.props
                      , i = [];
                    return s || i.push({
                        Icon: j.default,
                        testID: X,
                        text: oe,
                        link: {
                            pathname: "/i/search_filters",
                            query: o.query
                        }
                    }),
                    i.push({
                        Icon: W.default,
                        testID: K,
                        text: ae,
                        link: {
                            pathname: "/search-advanced",
                            query: {
                                ...(0,
                                Y.Z)(o.query, ["q", "src"])
                            }
                        }
                    }),
                    t && (i.unshift({
                        Icon: J.default,
                        testID: ee,
                        text: se,
                        link: "/settings/search"
                    }),
                    r ? i.push({
                        Icon: G.default,
                        isEmphasized: !0,
                        testID: re,
                        text: ne,
                        onClick: t=>{
                            t(),
                            e()
                        }
                    }) : i.push({
                        Icon: $.default,
                        testID: te,
                        text: ie,
                        onClick: e=>{
                            e(),
                            a()
                        }
                    })),
                    i
                }
            }
            render() {
                return s.createElement(Q.Z, {
                    items: this._getActionItems(),
                    onCloseRequested: this.props.onClose
                })
            }
        }
        const le = ce;
        var he = r(76984)
          , de = r.n(he)
          , ue = r(69581)
          , pe = r.n(ue)
          , me = r(12969)
          , ye = r(9082)
          , Se = r(82084)
          , _e = r(7765)
          , ge = r(70754)
          , ve = r(33454)
          , fe = r(10730)
          , be = r(97758);
        const Ce = (e,t)=>"POP" === t.history.action
          , we = (e,t)=>{
            var r;
            const {location: s} = t;
            return null == s || null == (r = s.state) ? void 0 : r.urtEndpointOptions
        }
          , qe = (0,
        A.Z)().propsFromState((()=>({
            dataLookupId: T.XN,
            isBackNavigation: Ce,
            searchMode: T.Jm,
            urtEndpointOptions: we
        }))).propsFromActions((()=>({
            clearTimelineCache: ({fetchOptions: e, module: t})=>(0,
            be.Z)(t, e),
            createLocalApiErrorHandler: (0,
            B.createLocalApiErrorHandlerWithContextFactory)("SEARCH_RESULTS_SCREEN")
        })))
          , Ee = e=>e && pe()(e) ? {
            defaultText: ` ${e}`,
            positionCursorAtBeginning: !0
        } : void 0;
        class xe extends s.Component {
            constructor(...e) {
                super(...e),
                this._getAdjustedSearchMode = ()=>{
                    const {searchMode: e} = this.props
                      , {featureSwitches: t, loggedInUserId: r} = this.context;
                    return !(r || !t.isTrue("search_results_disable_latest_tab_when_logged_out")) ? T.R4[e] : e
                }
                ,
                this._getFabState = ()=>{
                    const {query: e} = this.props;
                    return this._getMemoizedComposeLocationState(e)
                }
                ,
                this._getMemoizedComposeLocationState = (0,
                h.Z)(Ee)
            }
            componentDidMount() {
                const {isBackNavigation: e} = this.props;
                e || this._clearTimelineCache()
            }
            componentDidUpdate(e) {
                const {isBackNavigation: t, query: r, querySrc: s, searchFilters: o, shouldClearTimelineCache: a} = this.props;
                t || !a && e.query === r && e.querySrc === s && de()(e.searchFilters, o) || this._clearTimelineCache()
            }
            render() {
                const {query: e, querySrc: t, searchFilters: r, searchFocused: o, urtEndpointOptions: a, vertical: i} = this.props
                  , {featureSwitches: n, loggedInUserId: c} = this.context
                  , l = !(!c || !n.isTrue("voice_rooms_search_results_page_audiospace_ring_enabled"))
                  , h = this._getAdjustedSearchMode();
                return s.createElement(ye.Z, {
                    component: me.Z,
                    fab: this._renderFloatingComposeButton(),
                    shouldRenderFab: !o
                }, s.createElement(Se.b.Provider, {
                    query: e
                }, s.createElement(ge.Z, {
                    fetchOptions: this._getFetchOptions(),
                    query: e,
                    querySrc: t,
                    searchFilters: r,
                    searchMode: h,
                    urtEndpointOptions: a,
                    vertical: i,
                    withUserPresence: l
                })))
            }
            _renderFloatingComposeButton() {
                const {history: e} = this.props;
                return s.createElement(_e.Z, {
                    getLocationState: this._getFabState,
                    history: e
                })
            }
            _getFetchOptions() {
                const {dataLookupId: e, querySrc: t} = this.props;
                return {
                    query_source: t,
                    data_lookup_id: e
                }
            }
            _clearTimelineCache() {
                const {clearTimelineCache: e, createLocalApiErrorHandler: t, query: r, querySrc: s, searchFilters: o, urtEndpointOptions: a} = this.props
                  , i = this._getAdjustedSearchMode()
                  , {featureSwitches: n} = this.context
                  , c = n.isTrue("search_timelines_graphql_enabled");
                e({
                    module: (0,
                    fe.Z)({
                        query: r,
                        querySource: s,
                        searchMode: i,
                        searchFilters: o,
                        urtEndpointOptions: a,
                        searchTimelinesGraphQLEnabled: c
                    }),
                    fetchOptions: this._getFetchOptions()
                }).catch(t(ve.d))
            }
        }
        xe.contextType = S.rC;
        const Ze = qe(xe)
          , Fe = "searchBoxOverflowButton"
          , Te = l().eb0ecd1e
          , Le = l().cceeb26b
          , ke = l().i66136aa
          , Ie = l().d601fc20
          , Be = l().g2fd3206
          , Me = l().ac4fb0f4
          , Ae = l().bb967f9e
          , He = l().aea62568
          , Oe = l().gfcfbf8c
          , Re = l().a4645d92
          , De = [{
            type: T.N3.Top,
            label: ke
        }, {
            type: T.N3.Live,
            label: Ie
        }, {
            type: T.N3.User,
            label: Be
        }, {
            type: T.N3.Image,
            label: Me
        }, {
            type: T.N3.Video,
            label: Ae
        }]
          , Pe = [{
            type: T.N3.Top,
            label: ke
        }, {
            type: T.N3.User,
            label: Be
        }, {
            type: T.N3.Image,
            label: Me
        }, {
            type: T.N3.Video,
            label: Ae
        }];
        class ze extends s.Component {
            constructor(...e) {
                super(...e),
                this._loggedInUserId = this.context.loggedInUserId,
                this.state = {
                    shouldShowDeleteSearchConfirmation: !1,
                    shouldClearTimelineCache: !1
                },
                this._getScribeData = (0,
                h.Z)(((e,t,r,s,o,a)=>{
                    let i = {
                        search_details: {
                            ...(0,
                            T.hB)({
                                query: e,
                                querySrc: t,
                                searchFilters: r,
                                modeValue: s,
                                vertical: o
                            })
                        }
                    };
                    return a && (i = {
                        ...i,
                        items: [(0,
                        L.LG)(a)]
                    }),
                    i
                }
                )),
                this._renderRightControl = ({isTwoColumn: e, searchFocused: t})=>e || !t ? s.createElement(d.Z, {
                    onClick: this._handleOverflowMenuClick,
                    renderMenu: this._renderMenu,
                    testID: Fe
                }) : void 0,
                this._getSearchQuery = e=>{
                    const {queryFilter: t} = this.props;
                    return t ? `${e} ${t}` : e
                }
                ,
                this._renderMenu = e=>{
                    const {history: t, isQueryAlreadySaved: r, location: o} = this.props
                      , a = !!this.context.loggedInUserId;
                    return s.createElement(i.Z, null, (({windowWidth: i})=>{
                        const n = x.Z.isTwoColumnLayout(i);
                        return s.createElement(le, {
                            deleteSavedSearch: this._onDeleteSavedSearchMenuClick,
                            history: t,
                            isLoggedIn: a,
                            isQueryAlreadySaved: r,
                            isTwoColumn: n,
                            location: o,
                            onClose: e,
                            saveSearch: this._onSaveSearch
                        })
                    }
                    ))
                }
                ,
                this._onSaveSearch = ()=>{
                    const {addToast: e, analytics: t, createLocalApiErrorHandler: r, query: s, saveSearch: o, savedSearches: a} = this.props
                      , i = a.length;
                    s && o(s).then((()=>e({
                        text: Oe
                    }))).catch(r(i < 25 ? w : q));
                    const n = F.Z.forSavedSearchResult(s, i);
                    t.scribe({
                        element: "saved_search",
                        action: "add",
                        data: {
                            items: [n]
                        }
                    })
                }
                ,
                this._handleOnDeleteSavedSearchConfirm = ()=>{
                    const {addToast: e, analytics: t, createLocalApiErrorHandler: r, deleteSavedSearch: s, query: o, savedSearches: a} = this.props
                      , i = a.findIndex((e=>e.query === o))
                      , n = a[i];
                    if (n) {
                        s(n.id_str).then((()=>e({
                            text: Re
                        }))).catch(r(E));
                        const o = F.Z.forSavedSearchResult(n.query, i);
                        t.scribe({
                            element: "saved_search",
                            action: "delete",
                            data: {
                                items: [o]
                            }
                        }),
                        this.setState({
                            shouldShowDeleteSearchConfirmation: !1
                        })
                    }
                }
                ,
                this._handleOnDeleteSavedSearchCancel = ()=>{
                    this.setState({
                        shouldShowDeleteSearchConfirmation: !1
                    })
                }
                ,
                this._onDeleteSavedSearchMenuClick = ()=>{
                    this.setState({
                        shouldShowDeleteSearchConfirmation: !0
                    })
                }
                ,
                this._handleOverflowMenuClick = ()=>{
                    const {analytics: e} = this.props;
                    e.scribe({
                        element: "overflow_menu",
                        action: "click"
                    })
                }
                ,
                this._renderPrimaryContent = e=>{
                    const {shouldShowDeleteSearchConfirmation: t} = this.state;
                    return s.createElement(o.Z, null, s.createElement(Ze, e), t ? s.createElement(g.Z, {
                        onCancel: this._handleOnDeleteSavedSearchCancel,
                        onConfirm: this._handleOnDeleteSavedSearchConfirm
                    }) : null)
                }
                ,
                this._renderSidebarContent = ()=>{
                    const {history: e, location: t, query: r} = this.props;
                    return s.createElement(u.Z, {
                        withSearchBox: !1,
                        withTrends: !!r
                    }, s.createElement(o.Z, null, s.createElement(a.ZP, {
                        text: He
                    }), s.createElement(m.Z, {
                        history: e,
                        key: t.key,
                        location: t
                    })))
                }
                ,
                this._renderModesBar = ()=>{
                    const {analytics: e, query: t, querySrc: r, searchFilters: o} = this.props
                      , a = this._getModeLinks().map((s=>{
                        const {isActive: a, label: i, link: n, modeType: c} = s;
                        return {
                            isActive: a,
                            key: c,
                            to: n,
                            label: i,
                            onClick: ()=>{
                                a() || e.scribe({
                                    element: `search_filter_${c}`,
                                    action: "navigate",
                                    data: this._getScribeData(t, r, o)
                                })
                            }
                        }
                    }
                    ));
                    return s.createElement(n.Z, {
                        links: a
                    })
                }
                ,
                this._getModeLinks = ()=>{
                    const {mode: e, query: t, querySrc: r, searchFilters: s, searchType: o, vertical: a} = this.props
                      , i = this.context.featureSwitches.isTrue("search_results_disable_latest_tab_when_logged_out");
                    return this._getMemoizedModeLinks(t, r, o, s, e, a, ((e,t)=>!this._loggedInUserId && i ? ()=>T.hA[t] === e : ()=>T._I[t] === e), this._loggedInUserId, i)
                }
                ,
                this._getMemoizedModeLinks = (0,
                h.Z)(((e,t,r,s,o,a,i,n,c)=>(!n && c ? Pe : De).map((n=>{
                    const c = T._I[n.type];
                    return {
                        link: (0,
                        T.Rg)({
                            query: e,
                            querySrc: t,
                            modeValue: c,
                            searchType: r,
                            searchFilters: s,
                            vertical: a
                        }),
                        isActive: i(c, o),
                        label: n.label,
                        modeType: n.type
                    }
                }
                )))),
                this._getMemoizedTimelineScribeNamespace = (0,
                h.Z)(((e,t)=>({
                    section: `search_filter_${e}${t === T.rg.Topics ? "_topics" : ""}`
                }))),
                this._setSearchBoxRef = e=>{
                    this._searchBoxRef = e
                }
                ,
                this._handleSearchBoxSubmit = (e,t,r=!1)=>{
                    const {analytics: s} = this.props;
                    s.scribe({
                        section: "trendsplus",
                        action: "search"
                    }),
                    r && this.setState({
                        shouldClearTimelineCache: !0
                    }, (()=>{
                        this.setState({
                            shouldClearTimelineCache: !1
                        })
                    }
                    ))
                }
            }
            componentDidMount() {
                const {createLocalApiErrorHandler: e, fetchSavedSearchesIfNeeded: t} = this.props;
                t().catch(e({}))
            }
            render() {
                const {history: e, location: t, mode: r, query: o, querySrc: a, searchFilters: n, searchFocused: c, searchType: l, tweetVibe: h, vertical: d} = this.props
                  , {shouldClearTimelineCache: u} = this.state
                  , p = !!o
                  , m = p ? Le({
                    query: o
                }) : Te
                  , S = {
                    history: e,
                    location: t,
                    query: this._getSearchQuery(o),
                    querySrc: a,
                    searchFilters: n,
                    searchFocused: c,
                    vertical: d,
                    shouldClearTimelineCache: u
                }
                  , g = this._renderPrimaryContent(S)
                  , v = {
                    initialValue: o,
                    mode: r,
                    onSubmit: this._handleSearchBoxSubmit,
                    searchFilters: n
                };
                return p ? s.createElement(Z.nO, {
                    data: this._getScribeData(o, a, n, r, d, h),
                    namespace: this._getMemoizedTimelineScribeNamespace(r, d)
                }, s.createElement(_.Z, null, null, s.createElement(i.Z, null, (({windowWidth: t})=>{
                    const r = x.Z.isTwoColumnLayout(t)
                      , a = this._renderRightControl({
                        isTwoColumn: r,
                        searchFocused: c
                    });
                    return s.createElement(y.Z, {
                        backLocation: "/explore",
                        composeOptions: Ee(o),
                        documentTitle: m,
                        history: e,
                        primaryContent: g,
                        rightControl: a,
                        searchBoxOptions: v,
                        searchBoxRef: this._setSearchBoxRef,
                        secondaryBar: this._renderModesBar(),
                        sidebarContent: this._renderSidebarContent(),
                        title: o,
                        withBottomLoginSignupBar: !0,
                        withSearchBox: !0
                    })
                }
                )))) : this._shouldShowLoggedOutSearchHome() ? s.createElement(k.Z, {
                    to: "/"
                }) : s.createElement(k.Z, {
                    to: "/explore"
                })
            }
            _shouldShowLoggedOutSearchHome() {
                if (!this._loggedInUserId) {
                    const e = this.context.featureSwitches.getStringValue("responsive_web_search_home_page_design_variation");
                    return p.Yt[e]
                }
            }
        }
        ze.contextType = S.rC;
        const Ne = U(ze)
    }
    ,
    38830: (e,t,r)=>{
        r.d(t, {
            Z: ()=>n
        });
        var s = r(2784)
          , o = r(36934)
          , a = r(74062);
        const i = r(73186).Z.create((e=>({
            root: {
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingVertical: e.spaces.space16
            },
            withBottomRadius: {
                borderBottomStartRadius: e.borderRadii.xLarge,
                borderBottomEndRadius: e.borderRadii.xLarge
            }
        })))
          , n = function({align: e, link: t, onPress: r, text: n, weight: c, withBottomRadius: l, withDarkerInteractiveBackground: h}) {
            return s.createElement(a.Z, {
                link: t,
                onPress: r,
                style: [i.root, l && i.withBottomRadius],
                withDarkerInteractiveBackground: h
            }, s.createElement(o.ZP, {
                align: e,
                color: "primary",
                weight: c
            }, n))
        }
    }
    ,
    35235: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            default: ()=>n
        });
        var s = r(2784)
          , o = r(90601)
          , a = r(73569);
        const i = (e={})=>(0,
        o.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [a.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: s.createElement("g", null, s.createElement("path", {
                d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z"
            }))
        });
        i.metadata = {
            width: 24,
            height: 24
        };
        const n = i
    }
    ,
    12296: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            default: ()=>n
        });
        var s = r(2784)
          , o = r(90601)
          , a = r(73569);
        const i = (e={})=>(0,
        o.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [a.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: s.createElement("g", null, s.createElement("path", {
                d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z"
            }))
        });
        i.metadata = {
            width: 24,
            height: 24
        };
        const n = i
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search.1b89815a.js.map
