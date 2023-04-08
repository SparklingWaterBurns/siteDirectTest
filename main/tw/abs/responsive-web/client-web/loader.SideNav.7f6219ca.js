"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["loader.SideNav", "icons/IconCheckmarkCircleFill-js", "icons/IconChevronDown-js", "icons/IconChevronUp-js", "icons/IconCircleFill-js", "icons/IconClockCircleFill-js", "icons/IconFeedback-js", "icons/IconFollowArrowLeft-js", "icons/IconFollowArrows-js", "icons/IconLightning-js", "icons/IconPin-js", "icons/IconSparkle-js"], {
    6643: e=>{
        var t, l = {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AccountSwitcherDelegateQuery",
                selections: t = [{
                    alias: null,
                    args: [{
                        kind: "Literal",
                        name: "s",
                        value: "4721"
                    }],
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer_v2",
                    plural: !1,
                    selections: [{
                        alias: "pendingGroups",
                        args: [{
                            kind: "Literal",
                            name: "roles",
                            value: ["Admin", "Contributor"]
                        }, {
                            kind: "Literal",
                            name: "status",
                            value: "Pending"
                        }],
                        concreteType: "DelegationGroup",
                        kind: "LinkedField",
                        name: "list_delegation_groups",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null
                        }],
                        storageKey: 'list_delegation_groups(roles:["Admin","Contributor"],status:"Pending")'
                    }],
                    storageKey: 'viewer_v2(s:"4721")'
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "AccountSwitcherDelegateQuery",
                selections: t
            },
            params: {
                id: "1gowCMPzY09WyApNQM68kA",
                metadata: {},
                name: "AccountSwitcherDelegateQuery",
                operationKind: "query",
                text: null
            }
        };
        l.hash = "130cb0fc598ec7c1de6b1a4573e3fd61",
        e.exports = l
    }
    ,
    73792: e=>{
        var t, l, a, n, i, s, r, c, o, d, u, m, p, g, h, y, b, v, f = {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "DelegatedAccountListQuery",
                selections: [{
                    alias: null,
                    args: t = [{
                        kind: "Literal",
                        name: "s",
                        value: "84b0"
                    }],
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer_v2",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: l = [{
                            kind: "Literal",
                            name: "status",
                            value: "Accepted"
                        }],
                        concreteType: "DelegationGroup",
                        kind: "LinkedField",
                        name: "list_delegation_groups",
                        plural: !0,
                        selections: [{
                            alias: "handle",
                            args: null,
                            concreteType: "UserResults",
                            kind: "LinkedField",
                            name: "handle_results",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "result",
                                plural: !1,
                                selections: [a = {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [n = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "rest_id",
                                        storageKey: null
                                    }, {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: null,
                                            concreteType: "ApiUser",
                                            kind: "LinkedField",
                                            name: "legacy",
                                            plural: !1,
                                            selections: [{
                                                kind: "RequiredField",
                                                field: i = {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "profile_image_url_https",
                                                    storageKey: null
                                                },
                                                action: "THROW",
                                                path: "viewer_v2.list_delegation_groups.handle.result.legacy.profile_image_url_https"
                                            }, {
                                                kind: "RequiredField",
                                                field: s = {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "name",
                                                    storageKey: null
                                                },
                                                action: "THROW",
                                                path: "viewer_v2.list_delegation_groups.handle.result.legacy.name"
                                            }, {
                                                kind: "RequiredField",
                                                field: r = {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "screen_name",
                                                    storageKey: null
                                                },
                                                action: "THROW",
                                                path: "viewer_v2.list_delegation_groups.handle.result.legacy.screen_name"
                                            }, {
                                                kind: "RequiredField",
                                                field: c = {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "id_str",
                                                    storageKey: null
                                                },
                                                action: "THROW",
                                                path: "viewer_v2.list_delegation_groups.handle.result.legacy.id_str"
                                            }],
                                            storageKey: null
                                        },
                                        action: "THROW",
                                        path: "viewer_v2.list_delegation_groups.handle.result.legacy"
                                    }, o = {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "UserCell_user"
                                    }],
                                    type: "User",
                                    abstractKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "DelegationMembership",
                            kind: "LinkedField",
                            name: "members",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_results",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [a, {
                                        kind: "InlineFragment",
                                        selections: [n, o],
                                        type: "User",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, d = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "role",
                                storageKey: null
                            }, u = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "status",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: 'list_delegation_groups(status:"Accepted")'
                    }],
                    storageKey: 'viewer_v2(s:"84b0")'
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "DelegatedAccountListQuery",
                selections: [{
                    alias: null,
                    args: t,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer_v2",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: l,
                        concreteType: "DelegationGroup",
                        kind: "LinkedField",
                        name: "list_delegation_groups",
                        plural: !0,
                        selections: [{
                            alias: "handle",
                            args: null,
                            concreteType: "UserResults",
                            kind: "LinkedField",
                            name: "handle_results",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "result",
                                plural: !1,
                                selections: [a, {
                                    kind: "InlineFragment",
                                    selections: [n, {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiUser",
                                        kind: "LinkedField",
                                        name: "legacy",
                                        plural: !1,
                                        selections: [i, s, r, c, m = {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "protected",
                                            storageKey: null
                                        }, p = {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "verified_type",
                                            storageKey: null
                                        }, g = {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "verified",
                                            storageKey: null
                                        }, h = {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "followed_by",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, y = {
                                        alias: null,
                                        args: null,
                                        filters: null,
                                        handle: "defaultScalars",
                                        key: "",
                                        kind: "LinkedHandle",
                                        name: "legacy"
                                    }, b = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_blue_verified",
                                        storageKey: null
                                    }, v = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "id",
                                        storageKey: null
                                    }],
                                    type: "User",
                                    abstractKey: null
                                }],
                                storageKey: null
                            }, v],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "DelegationMembership",
                            kind: "LinkedField",
                            name: "members",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_results",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [a, {
                                        kind: "InlineFragment",
                                        selections: [n, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ApiUser",
                                            kind: "LinkedField",
                                            name: "legacy",
                                            plural: !1,
                                            selections: [c, i, s, r, m, p, g, h],
                                            storageKey: null
                                        }, y, v],
                                        type: "User",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }, v],
                                storageKey: null
                            }, d, u, v],
                            storageKey: null
                        }, v],
                        storageKey: 'list_delegation_groups(status:"Accepted")'
                    }],
                    storageKey: 'viewer_v2(s:"84b0")'
                }]
            },
            params: {
                id: "TyEY0nJqyMRs-pKlOeNBIA",
                metadata: {},
                name: "DelegatedAccountListQuery",
                operationKind: "query",
                text: null
            }
        };
        f.hash = "d59dc240ae8340a9714cacd77174ebc7",
        e.exports = f
    }
    ,
    79256: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>$e
        });
        var a = l(2784)
          , n = l(25686)
          , i = l(54044)
          , s = l(73186)
          , r = (l(36728),
        l(60917))
          , c = l.n(r)
          , o = (l(85488),
        l(73228))
          , d = l.n(o)
          , u = (l(6886),
        l(13980))
          , m = l(3188)
          , p = l(79866)
          , g = l(11839)
          , h = l(4642)
          , y = l(26741)
          , b = l(95995)
          , v = l(84793)
          , f = l(27036);
        const w = d().d86bbf0f
          , C = d().h6beb5fb
          , _ = d().b8e1d524
          , E = d().gef27c4c;
        class k extends a.Component {
            constructor(...e) {
                super(...e),
                this._renderUser = e=>{
                    const {isExpanded: t} = this.props
                      , {highlightedLabel: l, is_blue_verified: i, name: s, profile_image_url_https: r, protected: c, screen_name: o, verified: d, verified_type: u} = e;
                    return a.createElement(a.Fragment, null, a.createElement(n.Z, null, a.createElement(y.Z, {
                        accessibilityLabel: s,
                        screenName: o,
                        size: "xLarge",
                        uri: r
                    }), t ? null : this._renderBadge()), t ? a.createElement(a.Fragment, null, a.createElement(b.Z, {
                        affiliateBadgeInfo: l,
                        badgeContext: "account",
                        isBlueVerified: i,
                        isProtected: c,
                        isVerified: d,
                        name: s,
                        screenName: o,
                        style: x.userName,
                        verifiedType: u,
                        withStackedLayout: !0
                    }), a.createElement(n.Z, {
                        style: x.iconContainer
                    }, a.createElement(v.default, {
                        style: x.icon
                    }), t ? this._renderBadge() : null)) : null)
                }
                ,
                this._renderEmptyState = ()=>{
                    const {renderEmptyState: e} = this.props;
                    return e ? a.createElement(n.Z, {
                        style: x.emptyStateWrapper
                    }, e()) : null
                }
                ,
                this._renderBadge = ()=>{
                    const {hasMultiAccountBadges: e, isExpanded: t} = this.props;
                    return e ? a.createElement(m.Z, {
                        pip: !0,
                        style: t && x.pip,
                        truncatedCountFormatter: C,
                        unreadCountLabel: w
                    }) : null
                }
                ,
                this._handleAccountSwitcherClick = ()=>{
                    const {analytics: e} = this.props;
                    e.scribe({
                        action: "click"
                    })
                }
            }
            render() {
                const {accessibilityLabel: e, currentUser: t, hoverLabel: l, interactiveViewTestId: n, isExpanded: i, renderEmptyState: r, renderMenuSheet: c} = this.props;
                return t || r ? a.createElement(h.Z, {
                    contentStyle: x.menuContainer,
                    enableEnterKeyToggle: !0,
                    renderContent: c,
                    withArrow: !0,
                    withFixedPosition: !0
                }, a.createElement(g.Z, {
                    accessibilityLabel: e || E,
                    accessibilityRole: "button",
                    hoverLabel: i ? void 0 : {
                        label: l || _
                    },
                    interactiveStyles: p.Z.generate({
                        backgroundColor: "transparent",
                        color: s.Z.theme.colors.text
                    }),
                    onClick: this._handleAccountSwitcherClick,
                    style: x.anchorContainer,
                    testID: n
                }, t ? this._renderUser(t) : this._renderEmptyState())) : null
            }
        }
        k.contextTypes = {
            featureSwitches: u.object
        };
        const x = s.Z.create((e=>({
            anchorContainer: {
                alignItems: "center",
                borderRadius: e.borderRadii.infinite,
                display: "flex",
                flexDirection: "row",
                padding: e.spaces.space12
            },
            icon: {
                color: e.colors.text
            },
            iconContainer: {
                alignItems: "flex-end",
                flexGrow: 1
            },
            pip: {
                position: "absolute",
                end: `calc(-1 * ${e.spaces.space4})`,
                top: `calc(-1 * ${e.spaces.space4})`
            },
            userName: {
                flexGrow: 1,
                marginHorizontal: e.spaces.space12
            },
            menuContainer: {
                width: f.Z.cardWidth.normal
            },
            emptyStateWrapper: {
                height: e.spaces.space40,
                minWidth: e.spaces.space40,
                width: "100%"
            }
        })));
        var L = l(92051)
          , S = l(95514)
          , I = l(22613)
          , Z = l(60673)
          , F = l(31261)
          , T = l(23335)
          , U = l(92160)
          , A = l(26401)
          , B = l(99945)
          , R = l(67935)
          , D = l(57659)
          , M = l(23803);
        const H = (0,
        U.Z)().propsFromState((()=>({
            delegateAccountCount: R.BP,
            delegateUser: R.sy,
            fetchStatus: A.UD,
            loggedInUser: D.ZP.selectLoggedInUser,
            multiAccountUsers: A.pc,
            hasMultiAccountBadges: A.pA
        }))).propsFromActions((()=>({
            clearDelegateUser: R.YJ,
            createLocalApiErrorHandlerAccountSwitch: (0,
            T.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"),
            createLocalApiErrorHandlerMultiListFetch: (0,
            T.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"),
            fetchMultiAccountList: A.qc,
            setDelegateUser: R.vU,
            switchAccount: B.y
        }))).adjustStateProps((({delegateAccountCount: e, delegateUser: t, fetchStatus: l, hasMultiAccountBadges: a, loggedInUser: n, multiAccountUsers: i})=>({
            delegateAccountCount: e,
            delegateUser: t,
            fetchStatus: l === M.ZP.NONE ? M.ZP.LOADING : l,
            hasMultiAccountBadges: !!n && a,
            loggedInUser: n,
            multiAccountUsers: i
        }))).withAnalytics({
            page: "nav",
            section: "account_switcher"
        });
        var P, z = l(36934), K = l(85682), Q = l(68472), N = l(27519), V = l(19153), O = l(7066), j = l(31735), W = l(1206), q = l(63140), G = l(77953), $ = l(12696), Y = l.n($), J = l(37800), X = l(35131), ee = l(55916), te = l(51600), le = l(3767);
        const ae = void 0 !== P ? P : P = l(73792)
          , ne = d().daffabde
          , ie = d().eccbfa26
          , se = d().a1b7a904
          , re = {
            context: "DelegateGroups"
        }
          , ce = ({activeUserId: e, delegateUser: t, handleDelegateUserSwitch: l, renderUserDecoration: n})=>a.createElement(te.H, {
            errorConfig: re
        }, a.createElement(oe, {
            activeUserId: e,
            delegateUser: t,
            handleDelegateUserSwitch: l,
            renderUserDecoration: n
        }))
          , oe = ({activeUserId: e, delegateUser: t, handleDelegateUserSwitch: l, renderUserDecoration: i})=>{
            var s;
            const r = (0,
            G.I0)()
              , [c,o] = a.useState(!0)
              , d = Y()(ae, {})
              , u = a.useMemo((()=>{
                var t, l;
                const a = [];
                return null == (t = d.viewer_v2) || null == (l = t.list_delegation_groups) || l.forEach((t=>{
                    const {result: l} = t.handle || {};
                    "User" === (null == l ? void 0 : l.__typename) && (null == l ? void 0 : l.rest_id) === e || a.push(l)
                }
                )),
                a
            }
            ), [e, null == (s = d.viewer_v2) ? void 0 : s.list_delegation_groups])
              , m = a.useMemo((()=>(null == t ? void 0 : t.userId) && (null == u ? void 0 : u.some((e=>(null == e ? void 0 : e.rest_id) && (null == t ? void 0 : t.userId) === (null == e ? void 0 : e.rest_id))))), [t, u])
              , p = a.useCallback((()=>{
                o(!c)
            }
            ), [c]);
            return a.useEffect((()=>{
                r(R.po(u.length))
            }
            ), [u, r]),
            u.length < 1 ? null : a.createElement(a.Fragment, null, a.createElement(n.Z, {
                onClick: p,
                style: de.delegateAccountsLabel
            }, a.createElement(z.ZP, {
                color: "gray700",
                weight: "bold"
            }, m ? ne : ie), !m && (c ? a.createElement(ee.default, {
                style: de.IconChevronUp
            }) : a.createElement(X.default, {
                style: de.IconChevronDown
            }))), c || m ? u.map((e=>{
                if ("User" === (null == e ? void 0 : e.__typename)) {
                    const {id_str: n, name: s, profile_image_url_https: r, screen_name: c} = e.legacy
                      , o = i ? i({
                        withBadges: !1,
                        isActiveUser: n === (null == t ? void 0 : t.userId)
                    }) : void 0
                      , d = l({
                        userId: n,
                        userName: s,
                        userScreenName: c,
                        userAvatarImageUrl: r
                    });
                    return a.createElement(le.Z, {
                        accessibilityLabel: se,
                        badgeContext: "account",
                        decoration: o,
                        displayMode: "UserCompact",
                        key: e.rest_id,
                        onCellClick: d,
                        user: e,
                        withLink: !1
                    })
                }
            }
            )) : a.createElement(n.Z, {
                style: de.facePileContainer
            }, a.createElement(J.Z, {
                userAvatarSize: "large",
                userAvatarUrls: u.map((e=>{
                    var t;
                    return (null == e ? void 0 : e.legacy) && (null == e || null == (t = e.legacy) ? void 0 : t.profile_image_url_https) || ""
                }
                ))
            })))
        }
          , de = s.Z.create((e=>({
            IconChevronUp: {
                color: e.colors.primary,
                marginEnd: e.spaces.space12
            },
            IconChevronDown: {
                color: e.colors.gray700,
                marginEnd: e.spaces.space12
            },
            delegateAccountsLabel: {
                padding: e.spaces.space12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                cursor: "pointer"
            },
            facePileContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingStart: e.spaces.space16,
                paddingEnd: e.spaces.space16
            }
        })))
          , ue = a.memo(ce);
        var me = l(37796);
        const pe = d().c61eea74
          , ge = d().b7dc3885
          , he = d().d86bbf0f
          , ye = d().h6beb5fb
          , be = ({accountUsers: e, activeUser: t, handleMultiAccountSwitch: l, renderUserDecoration: i, withBadges: s})=>{
            const {featureSwitches: r} = a.useContext(F.rC)
              , c = (0,
            me.v)(R.BP)
              , o = r.isTrue("twitter_delegate_enabled")
              , d = r.isTrue("blue_business_consumption_api_enabled")
              , [u,p] = a.useState(!o)
              , g = a.useMemo((()=>e.filter((e=>e.user_id !== (null == t ? void 0 : t.id_str)))), [e, t])
              , h = a.useMemo((()=>g.reduce(((e,t)=>e + (t.badgeCount || 0)), 0)), [g])
              , y = a.useCallback((()=>{
                p(!u)
            }
            ), [u])
              , b = a.useMemo((()=>o && c && c > 0 ? a.createElement(n.Z, {
                onClick: y,
                style: ve.personalAccountsLabel
            }, a.createElement(z.ZP, {
                color: "gray700",
                weight: "bold"
            }, pe), u ? a.createElement(ee.default, {
                style: ve.IconChevronUp
            }) : a.createElement(X.default, {
                style: ve.IconChevronDown
            })) : a.createElement(n.Z, null)), [o, c, y, u])
              , v = a.useMemo((()=>g.map((e=>{
                const t = e.badgeCount;
                return a.createElement(V.ZP, {
                    accessibilityLabel: ge({
                        screenName: e.screen_name
                    }),
                    affiliateBadgeInfo: e.highlighted_label,
                    avatarUri: e.avatar_image_url,
                    badgeContext: "account",
                    decoration: i({
                        badgeCount: t,
                        withBadges: s,
                        isActiveUser: !1
                    }),
                    displayMode: "UserCompact",
                    isBlueVerified: e.is_blue_verified,
                    isProtected: e.is_protected,
                    isVerified: e.is_verified,
                    key: e.user_id,
                    name: e.name,
                    onCellClick: l({
                        hasBadge: !!t,
                        isProtected: e.is_protected,
                        userId: e.user_id
                    }),
                    screenName: e.screen_name,
                    userId: e.user_id,
                    verifiedType: d ? e.verified_type : void 0,
                    withLink: !1
                })
            }
            ))), [l, d, g, i, s])
              , f = a.useMemo((()=>a.createElement(n.Z, {
                style: ve.facePileContainer
            }, a.createElement(J.Z, {
                userAvatarSize: "large",
                userAvatarUrls: g.map((e=>e.avatar_image_url))
            }), h > 0 ? a.createElement(m.Z, {
                count: h,
                standalone: !0,
                truncatedCountFormatter: ye,
                unreadCountLabel: he
            }) : null)), [g, h]);
            return g.length > 0 ? a.createElement(n.Z, {
                style: ve.container
            }, b, !o || o && u || 0 === c ? v : f) : null
        }
          , ve = s.Z.create((e=>({
            container: {
                paddingBottom: e.spaces.space12
            },
            personalAccountsLabel: {
                padding: e.spaces.space12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                cursor: "pointer"
            },
            IconChevronUp: {
                color: e.colors.primary,
                marginEnd: e.spaces.space12
            },
            IconChevronDown: {
                color: e.colors.gray700,
                marginEnd: e.spaces.space12
            },
            facePileContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingStart: e.spaces.space16,
                paddingEnd: e.spaces.space16
            }
        })))
          , fe = a.memo(be)
          , we = d().d86bbf0f
          , Ce = d().h6beb5fb;
        class _e extends a.Component {
            constructor(...e) {
                super(...e),
                this._renderAdditionalMenuItems = ()=>(this.props.additionalMenuItems || []).map(((e,t)=>a.createElement(a.Fragment, {
                    key: t
                }, 0 === t ? a.createElement(K.Z, null) : null, a.createElement(N.Z, {
                    Icon: e.Icon,
                    actionText: e.actionText,
                    badge: e.badge,
                    isSelected: e.isSelected,
                    link: e.link,
                    onClick: this._handleMenuItemClick(e.scribeElement, e.onClick),
                    selectable: !0,
                    testID: e.testID
                })))),
                this._renderTitle = ()=>{
                    const {title: e} = this.props;
                    return e ? a.createElement(z.ZP, {
                        size: "headline1",
                        style: Ee.title,
                        weight: "bold"
                    }, e) : null
                }
                ,
                this._renderUserAccounts = ()=>{
                    const {accountUsers: e, activeUser: t, delegateAccountCount: l, delegateUser: n, withBadges: i=!1} = this.props
                      , s = !!n
                      , r = e.some((e=>e.user_id === t.id_str)) || l && l > 0 || s;
                    return a.createElement(a.Fragment, null, r ? a.createElement(V.ZP, {
                        affiliateBadgeInfo: t.highlightedLabel,
                        avatarUri: t.profile_image_url_https,
                        badgeContext: "account",
                        decoration: this._renderUserDecoration({
                            withBadges: i,
                            isActiveUser: !n
                        }),
                        displayMode: "UserCompact",
                        isBlueVerified: t.is_blue_verified,
                        isProtected: t.protected,
                        isVerified: t.verified,
                        name: t.name,
                        onCellClick: s ? this._handleClearDelegateAccount : void 0,
                        screenName: t.screen_name,
                        userId: t.id_str,
                        verifiedType: this._isBlueBusinessBadgeEnabled ? t.verified_type : "",
                        withLink: !1
                    }) : null, this._isDelegateEnabled ? a.createElement(ue, {
                        activeUserId: this.context.loggedInUserId,
                        delegateUser: n,
                        handleDelegateUserSwitch: this._handleDelegateAccountSwitch,
                        renderUserDecoration: this._renderUserDecoration
                    }) : null, a.createElement(fe, {
                        accountUsers: e,
                        activeUser: t,
                        handleMultiAccountSwitch: this._handleMultiAccountSwitch,
                        renderUserDecoration: this._renderUserDecoration,
                        withBadges: i
                    }))
                }
                ,
                this._renderUserDecoration = ({badgeCount: e, isActiveUser: t, withBadges: l})=>t ? this._isDelegateEnabled ? a.createElement(j.default, {
                    style: [Ee.IconCheckmarkCircleFill, Ee.userDecoration]
                }) : a.createElement(O.default, {
                    style: [Ee.iconCheckMark, Ee.userDecoration]
                }) : e && l ? a.createElement(m.Z, {
                    count: e,
                    standalone: !0,
                    style: Ee.userDecoration,
                    truncatedCountFormatter: Ce,
                    unreadCountLabel: we
                }) : void 0,
                this._handleDelegateAccountSwitch = e=>()=>{
                    const {setDelegateUser: t} = this.props;
                    t && t(e)
                }
                ,
                this._handleClearDelegateAccount = ()=>{
                    const {clearDelegateUser: e} = this.props;
                    e && e()
                }
                ,
                this._handleMultiAccountSwitch = ({hasBadge: e, isProtected: t, userId: l})=>()=>{
                    const {accountSwitch: a, onClose: n} = this.props;
                    a({
                        hasBadge: e,
                        isProtected: t,
                        userId: l
                    }),
                    n()
                }
                ,
                this._handleFetch = ()=>{
                    const {createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t} = this.props;
                    t().catch(e({
                        [q.ZP.AppInReadOnlyMode]: {
                            customAction: W.Z
                        }
                    }))
                }
                ,
                this._handleMenuItemClick = (e,t)=>()=>{
                    const {analytics: l, onClose: a} = this.props;
                    e && l.scribe({
                        element: e,
                        action: "click"
                    }),
                    null == t || t(),
                    a()
                }
            }
            render() {
                var e, t, l, i;
                const {fetchStatus: s, shouldDisplayFetchRenderer: r} = this.props;
                return this._isDelegateEnabled = null == (e = this.context) || null == (t = e.featureSwitches) ? void 0 : t.isTrue("twitter_delegate_enabled"),
                this._isBlueBusinessBadgeEnabled = null == (l = this.context) || null == (i = l.featureSwitches) ? void 0 : i.isTrue("blue_business_consumption_api_enabled"),
                a.createElement(n.Z, {
                    style: Ee.menuContainer
                }, this._renderTitle(), r ? a.createElement(Q.Z, {
                    fetchStatus: s,
                    onRequestRetry: this._handleFetch,
                    render: this._renderUserAccounts
                }) : this._renderUserAccounts(), this._renderAdditionalMenuItems())
            }
        }
        _e.contextType = F.rC;
        const Ee = s.Z.create((e=>({
            iconCheckMark: {
                color: e.colors.primary,
                flexShrink: 0
            },
            IconCheckmarkCircleFill: {
                color: e.colors.green500,
                flexShrink: 0,
                marginEnd: e.spaces.space8
            },
            menuContainer: {
                paddingVertical: e.spaces.space12
            },
            userDecoration: {
                marginStart: e.spaces.space12
            },
            title: {
                paddingBottom: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal
            }
        })))
          , ke = (0,
        Z.Z)(_e)
          , xe = "SideNav_AccountSwitcher_Button"
          , Le = "AccountSwitcher_AddAccount_Button"
          , Se = "AccountSwitcher_Logout_Button"
          , Ie = "AccountSwitcher_ManageAccounts_Button";
        var Ze;
        const Fe = d().j0a8da6e
          , Te = d().c6f2bf00
          , Ue = d().a58e0e51
          , Ae = d().j62f43a6
          , Be = d().d4c52015
          , Re = void 0 !== Ze ? Ze : Ze = l(6643)
          , De = (0,
        L.k)(Re, {
            errorConfig: {
                context: "ACCOUNT_SWITCHER_DELEGATE_CONTEXT"
            }
        })
          , Me = H((({clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: l, delegateAccountCount: n, delegateUser: i, fetchMultiAccountList: s, fetchStatus: r, hasMultiAccountBadges: o, isExpanded: d, loggedInUser: u, multiAccountUsers: m, setDelegateUser: p, switchAccount: g})=>{
            const {featureSwitches: h} = a.useContext(F.rC)
              , y = (0,
            Z.z)()
              , b = h.isTrue("twitter_delegate_enabled")
              , v = a.useCallback((e=>{
                const t = m.length > 1
                  , l = [];
                return m.length >= 5 || l.push({
                    actionText: Fe,
                    link: "/i/flow/login",
                    scribeElement: "add_existing_account",
                    testID: Le
                }),
                t && l.push({
                    actionText: Te,
                    link: "/account/switch",
                    scribeElement: "manage_accounts",
                    testID: Ie
                }),
                b && (n || e > 0) && l.push({
                    actionText: Ae,
                    link: "/i/delegate/delegations",
                    scribeElement: "manage_accounts",
                    testID: Ie,
                    badge: {
                        count: e,
                        label: Be
                    }
                }),
                u && l.push({
                    actionText: Ue({
                        screenName: u.screen_name
                    }),
                    link: "/logout",
                    scribeElement: "log_out",
                    testID: Se
                }),
                l
            }
            ), [n, b, u, m.length])
              , f = a.useCallback((({hasBadge: e, isProtected: l, userId: a})=>{
                y.scribe({
                    component: l ? "switch_to_protected_account" : "switch_account",
                    element: e ? "account_badged" : "account",
                    action: "click"
                }),
                g({
                    user_id: a
                }).catch(t(S.y))
            }
            ), [y, t, g])
              , w = a.useCallback((()=>{
                const {hasMultiAccountCookie: e} = (0,
                I.s)();
                return e
            }
            ), [])
              , C = a.useCallback(((t,c=0)=>u ? a.createElement(ke, {
                accountSwitch: f,
                accountUsers: m,
                activeUser: u,
                additionalMenuItems: v(c),
                clearDelegateUser: e,
                createLocalApiErrorHandlerAccountsFetch: l,
                delegateAccountCount: n,
                delegateUser: i,
                fetchAccounts: s,
                fetchStatus: r,
                onClose: t,
                setDelegateUser: p,
                shouldDisplayFetchRenderer: w(),
                withBadges: !0
            }) : null), [e, l, n, i, s, r, v, w, u, f, m, p])
              , _ = a.useCallback((e=>({data: t})=>{
                var l;
                const a = (null == t || null == (l = t.viewer_v2) ? void 0 : l.pendingGroups) || []
                  , n = (null == a ? void 0 : a.length) || 0;
                return C(e, n)
            }
            ), [C])
              , E = a.useCallback((e=>b ? a.createElement(De, {
                render: _(e),
                variables: c()
            }) : C(e)), [C, _, b]);
            return a.createElement(k, {
                analytics: y,
                currentUser: u,
                hasMultiAccountBadges: o,
                interactiveViewTestId: xe,
                isExpanded: d,
                renderMenuSheet: E
            })
        }
        ));
        var He = l(47636)
          , Pe = l(11731)
          , ze = l(29496);
        const Ke = s.Z.create((e=>({
            button: {
                boxShadow: "0px 8px 28px rgba(0, 0, 0, 0.08)"
            }
        })))
          , Qe = ({disabled: e, icon: t, isExpanded: l, label: n, link: i, onPress: s, testID: r})=>a.createElement(ze.ZP, {
            accessibilityLabel: n,
            disabled: e,
            hoverLabel: {
                label: n
            },
            icon: l ? void 0 : t,
            link: i,
            onPress: s,
            size: "xLarge",
            style: Ke.button,
            testID: r,
            type: "brandFilled"
        }, l ? a.createElement(Pe.Z, {
            animateMount: !0,
            duration: "long",
            show: !0,
            type: "fade"
        }, a.createElement(z.ZP, null, n)) : null)
          , Ne = d().g34f2c63({
            verb: ""
        });
        class Ve extends a.Component {
            constructor(...e) {
                super(...e),
                this._handlePress = e=>{
                    const {analytics: t} = this.props;
                    t.scribe({
                        component: "new_tweet_button",
                        action: "click"
                    })
                }
            }
            render() {
                const {composeOptions: e, isExpanded: t, testID: l} = this.props;
                return a.createElement(Qe, {
                    icon: Oe,
                    isExpanded: t,
                    label: Ne,
                    link: {
                        pathname: "/compose/tweet",
                        state: e
                    },
                    onPress: this._handlePress,
                    testID: l
                })
            }
        }
        const Oe = a.createElement(He.default, null)
          , je = (0,
        Z.Z)(Ve);
        var We = l(52008)
          , qe = l(76024);
        const Ge = "SideNav_NewTweet_Button";
        class $e extends a.Component {
            render() {
                const {SideNavButton: e, TabBar: t, TeamsSwitcher: l, history: s, isCollapsedSmall: r, isExpanded: c, isLoggedIn: o, isTwoColumn: d, location: u, logoButton: m, onTabRefresh: p, widthStyle: g, withTweetButton: h} = this.props
                  , y = [Ye.root, g, r ? Ye.rootPaddingSmall : Ye.rootPaddingNormal]
                  , b = m || a.createElement(qe.Z, {
                    onClick: p,
                    pullLeft: !1,
                    size: "large"
                });
                return a.createElement(i.Z, null, (({windowHeight: i})=>a.createElement(n.Z, {
                    style: y
                }, a.createElement(n.Z, {
                    style: [Ye.topSection, !c && Ye.alignItemsCenter]
                }, a.createElement(n.Z, {
                    style: Ye.topControl
                }, b), a.createElement(n.Z, {
                    style: [Ye.appTabBar, !c && Ye.alignItemsCenter]
                }, a.createElement(t, {
                    history: s,
                    layout: "vertical",
                    location: u,
                    onTabRefresh: p,
                    wideMode: d,
                    withExtendedItems: !0,
                    withLabel: c
                })), o && (e || h) ? this._renderButton(i) : null), o ? a.createElement(n.Z, {
                    style: [Ye.footerContainer, !c && Ye.alignItemsCenter]
                }, a.createElement(Me, {
                    isExpanded: c
                }), l ? a.createElement(l, {
                    isExpanded: c
                }) : null) : null)))
            }
            _renderButton(e) {
                const {SideNavButton: t, composeOptions: l, isExpanded: i} = this.props;
                return a.createElement(n.Z, {
                    style: [Ye.button, !i && Ye.alignItemsCenter, "tall" === We.Z.getHeightMode(e) && Ye.withTallHeight]
                }, t ? a.createElement(t, {
                    isExpanded: i
                }) : a.createElement(je, {
                    composeOptions: l,
                    isExpanded: i,
                    testID: Ge
                }))
            }
        }
        $e.defaultProps = {
            withTweetButton: !0
        };
        const Ye = s.Z.create((e=>({
            root: {
                height: "100%",
                overflowY: "auto",
                justifyContent: "space-between"
            },
            rootPaddingNormal: {
                paddingHorizontal: e.spaces.space8
            },
            rootPaddingSmall: {
                paddingHorizontal: e.spaces.space4
            },
            topSection: {
                alignItems: "flex-start"
            },
            topControl: {
                paddingVertical: e.spaces.space2,
                maxWidth: "100%"
            },
            appTabBar: {
                marginBottom: e.spaces.space4,
                marginTop: e.spaces.space2,
                width: "100%"
            },
            button: {
                marginVertical: e.spaces.space4,
                width: "90%"
            },
            withTallHeight: {
                marginVertical: e.spaces.space16
            },
            alignItemsCenter: {
                alignItems: "center"
            },
            settingsButton: {
                marginBottom: e.spaces.space20,
                marginHorizontal: e.spaces.space4
            },
            footerContainer: {
                marginVertical: e.spaces.space12
            }
        })))
    }
    ,
    85682: (e,t,l)=>{
        l.d(t, {
            Z: ()=>s
        });
        var a = l(2784)
          , n = l(25686)
          , i = l(73186);
        function s({spacing: e}) {
            return a.createElement(n.Z, {
                accessibilityRole: "separator",
                style: [r.divider, {
                    marginVertical: null != e ? i.Z.theme.spaces[e] : void 0
                }]
            })
        }
        const r = i.Z.create((e=>({
            divider: {
                backgroundColor: e.colors.borderColor,
                height: e.borderWidths.small
            }
        })))
    }
    ,
    68472: (e,t,l)=>{
        l.d(t, {
            Z: ()=>p
        });
        var a = l(2784)
          , n = l(76984)
          , i = l.n(n)
          , s = l(7333)
          , r = l(17779)
          , c = l(13364);
        const o = "failed"
          , d = "loaded"
          , u = "loading"
          , m = "none";
        class p extends a.Component {
            shouldComponentUpdate(e) {
                const t = e.fetchStatus === d
                  , l = this.props.fetchStatus !== e.fetchStatus;
                return !(!t && !l) || !i()(e, this.props)
            }
            render() {
                const {accessibilityLabel: e, failureMessage: t, fetchStatus: l, icon: n, loadingMessage: i, onRequestRetry: s, render: d, renderFailure: p, retryMessage: g, retryable: h} = this.props;
                switch (l) {
                case o:
                    return h ? a.createElement(r.Z, {
                        icon: n,
                        onRequestRetry: s,
                        retryMessage: g
                    }) : t ? a.createElement(c.m, {
                        failureMessage: t
                    }) : p();
                case u:
                    return a.createElement(c.J, {
                        accessibilityLabel: e,
                        loadingMessage: i
                    });
                case m:
                    return null;
                default:
                    return d()
                }
            }
        }
        p.defaultProps = {
            renderFailure: s.Z,
            retryable: !0
        },
        p.propTypes = {}
    }
    ,
    94963: (e,t,l)=>{
        l.d(t, {
            Z: ()=>P
        });
        var a = l(2784)
          , n = l(41487)
          , i = l(73228)
          , s = l.n(i)
          , r = l(17272)
          , c = l(27895)
          , o = l(45680)
          , d = l(6059)
          , u = l(25163)
          , m = l(7742)
          , p = l(56538)
          , g = l(90649)
          , h = l(14481)
          , y = l(40271)
          , b = l(11258)
          , v = l(40811)
          , f = l(55269)
          , w = l(7307)
          , C = l(81921)
          , _ = l(33131)
          , E = l(75629)
          , k = l(80166)
          , x = l(21783)
          , L = l(36934)
          , S = l(37800)
          , I = l(73186)
          , Z = l(49376);
        const F = s().jb767df8
          , T = s().bb3323fa
          , U = s().habf9678
          , A = s().db0798ed
          , B = s().dc716ec9
          , R = e=>a.createElement(L.ZP, {
            dir: n.Z.getConstants().isRTL ? "rtl" : "ltr",
            withHashflags: !0
        }, e)
          , D = (e,t)=>t ? F : (e=>{
            const t = R(e);
            return a.createElement(s().I18NFormatMessage, {
                $i18n: "h99e9c95"
            }, t)
        }
        )(e)
          , M = I.Z.create((e=>({
            small: {
                height: e.lineHeights.subtext3,
                width: e.lineHeights.subtext3
            },
            large: {
                height: e.lineHeights.subtext1,
                width: e.lineHeights.subtext1
            },
            xLarge: {
                height: e.lineHeights.headline1,
                width: e.lineHeights.headline1
            }
        })))
          , H = I.Z.create((e=>({
            circle: {
                color: e.colors.primary,
                width: "0.5em"
            },
            colorDeepGray: {
                color: e.colors.gray700
            },
            colorBlue: {
                color: e.colors.blue500
            },
            colorGreen: {
                color: e.colors.green500
            },
            colorOrange: {
                color: e.colors.orange500
            },
            colorPrimary: {
                color: e.colors.primary
            },
            colorRed: {
                color: e.colors.magenta500
            },
            grayscaleImage: {
                borderRadius: e.borderRadii.infinite,
                filter: "grayscale(100%)"
            },
            brandColor: {
                color: e.colors.brandColor
            }
        })))
          , P = ({contextType: e, iconColor: t, iconSize: l, link: n, retweetData: i, text: s, topicData: L, userAvatarUrls: F})=>{
            const {isSelfRetweet: P, name: z, screenName: K} = i || {}
              , Q = ((e,t,l,n=[])=>{
                const i = M[t]
                  , s = [l ? {
                    color: I.Z.theme.colors[l]
                } : H.colorDeepGray, i]
                  , L = a.createElement(f.default, {
                    style: s
                })
                  , F = a.createElement(C.default, {
                    style: s
                })
                  , T = a.createElement(g.default, {
                    style: s
                })
                  , U = a.createElement(v.default, {
                    style: s
                })
                  , A = a.createElement(h.default, {
                    style: s
                })
                  , B = a.createElement(r.default, {
                    style: H.circle
                })
                  , R = a.createElement(w.default, {
                    style: s
                })
                  , D = a.createElement(d.default, {
                    style: s
                })
                  , P = a.createElement(k.default, {
                    style: s
                })
                  , z = a.createElement(y.default, {
                    style: s
                })
                  , K = a.createElement(b.default, {
                    style: s
                })
                  , Q = a.createElement(o.default, {
                    style: s
                })
                  , N = a.createElement(_.default, {
                    style: s
                })
                  , V = a.createElement(E.default, {
                    style: s
                })
                  , O = a.createElement(c.default, {
                    style: s
                })
                  , j = a.createElement(p.default, {
                    style: s
                })
                  , W = a.createElement(m.default, {
                    style: s
                })
                  , q = a.createElement(u.default, {
                    style: s
                })
                  , G = a.createElement(S.Z, {
                    borderColor: "cellBackground",
                    userAvatarSize: t,
                    userAvatarUrls: n
                })
                  , $ = a.createElement(x.default, {
                    style: s
                });
                switch (e) {
                case Z.Q.Pin:
                case Z.Q.ReplyPin:
                    return L;
                case Z.Q.Retweet:
                    return F;
                case Z.Q.Like:
                    return T;
                case Z.Q.Follow:
                    return U;
                case Z.Q.Moment:
                    return A;
                case Z.Q.NewTweets:
                    return B;
                case Z.Q.Reply:
                case Z.Q.Conversation:
                    return R;
                case Z.Q.Feedback:
                    return D;
                case Z.Q.Topic:
                    return P;
                case Z.Q.List:
                    return z;
                case Z.Q.Location:
                    return K;
                case Z.Q.Community:
                    return Q;
                case Z.Q.Spaces:
                    return N;
                case Z.Q.Sparkle:
                    return V;
                case Z.Q.SmartBlockExpiration:
                    return O;
                case Z.Q.SocialProof:
                case Z.Q.FollowFollowed:
                    return q;
                case Z.Q.FollowMutual:
                    return W;
                case Z.Q.FollowFollowing:
                    return j;
                case Z.Q.Facepile:
                    return G;
                case Z.Q.Bird:
                    return $;
                case Z.Q.TextOnly:
                default:
                    return null
                }
            }
            )(e, l, t, F);
            switch (e) {
            case Z.Q.Retweet:
                return {
                    Icon: Q,
                    text: s || D(z, P),
                    link: K ? `https://twitter.com/${K}` : void 0
                };
            case Z.Q.Pin:
                return {
                    Icon: Q,
                    text: s || T
                };
            case Z.Q.ReplyPin:
                return {
                    Icon: Q,
                    text: U
                };
            case Z.Q.Topic:
                return {
                    Icon: Q,
                    accessibilityLabel: "Recommendation" === (null == L ? void 0 : L.functionalityType) || "RecWithEducation" === (null == L ? void 0 : L.functionalityType) ? B({
                        topicName: s
                    }) : A({
                        topicName: s
                    }),
                    text: s ? R(s) : null,
                    link: n
                };
            default:
                return {
                    Icon: Q,
                    text: s ? R(s) : null,
                    link: n
                }
            }
        }
    }
    ,
    9524: (e,t,l)=>{
        l.d(t, {
            Z: ()=>h
        });
        l(36728);
        var a = l(2784)
          , n = l(25686)
          , i = l(36934)
          , s = l(37541)
          , r = l(77089)
          , c = l(73186)
          , o = l(91062)
          , d = l(68011)
          , u = l(94963)
          , m = l(49376);
        class p extends a.PureComponent {
            render() {
                const {avatarSize: e, bottomControl: t, iconStyle: l, nativeID: c, onLayout: o, rightControl: d, style: m, testID: p, textColor: h, textSize: y, topControl: b, weight: v, withBottomBorder: f, withLeftPadding: w, withTextCentered: C, ..._} = this.props
                  , {Icon: E, accessibilityLabel: k, link: x, text: L} = (0,
                u.Z)(_)
                  , S = a.createElement(i.ZP, {
                    accessibilityLabel: k,
                    color: h,
                    nativeID: c,
                    numberOfLines: 2,
                    size: y,
                    testID: p,
                    weight: v
                }, L)
                  , {cellStyle: I, viewStyle: Z} = this._getStyles();
                return L ? a.createElement(r.ZP.UseProps, null, (i=>a.createElement(a.Fragment, null, b || null, a.createElement(n.Z, {
                    onLayout: o,
                    style: [m, Z, i.socialContextRefreshEnabled() && !w && g.socialContextRefresh]
                }, a.createElement(s.Z, {
                    avatarCell: E || (w ? null : void 0),
                    avatarCellStyle: [l, g.socialContextIconColumn, !w && g.unsetIconWidth, i.socialContextRefreshEnabled() && !w && g.socialContextRefreshIcon],
                    avatarSize: e,
                    cellStyle: I
                }, a.createElement(n.Z, {
                    style: g.cellWrapper
                }, a.createElement(n.Z, {
                    style: [g.socialContextTextColumn, i.socialContextRefreshEnabled() && !w && g.socialContextRefreshTextColumn]
                }, x ? this._renderLink(x, S) : S), d || null)), t || null)))) : null
            }
            _renderLink(e, t) {
                const {contextType: l, nativeID: n, onClick: s, retweetData: r, textColor: c, topicData: u} = this.props
                  , {screenName: p} = r || {}
                  , g = a.createElement(i.ZP, {
                    color: c,
                    link: e,
                    nativeID: n,
                    onClick: s
                }, t);
                return l === m.Q.Topic && u ? a.createElement(o.Z, {
                    topicId: u.topicId
                }, g) : l === m.Q.Retweet && p ? a.createElement(d.Z, {
                    screenName: p
                }, g) : g
            }
            _getStyles() {
                const {bottomControl: e, contextType: t, withBottomBorder: l, withTextCentered: a} = this.props
                  , n = t === m.Q.TextOnly
                  , i = l ? [g.bottomBorderMargin, !!e && g.bottomBorder] : []
                  , s = l && !e ? [g.bottomBorder] : [];
                return n && s.push(g.topicContext),
                a && s.push(g.socialContextTextCentered),
                {
                    viewStyle: i,
                    cellStyle: s
                }
            }
        }
        p.defaultProps = {
            iconSize: "small",
            textColor: "gray700",
            textSize: "subtext2",
            withBottomBorder: !1,
            withLeftPadding: !0,
            withTextCentered: !1
        };
        const g = c.Z.create((e=>({
            socialContextIconColumn: {
                alignItems: "flex-end",
                justifyContent: "center"
            },
            bottomBorderMargin: {
                marginBottom: e.componentDimensions.gutterVertical
            },
            cellWrapper: {
                flexDirection: "row"
            },
            bottomBorder: {
                paddingBottom: e.spaces.space4,
                borderBottomStyle: "solid",
                borderBottomWidth: e.borderWidths.small,
                borderBottomColor: e.colors.borderColor
            },
            topicContext: {
                paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})`
            },
            socialContextTextColumn: {
                alignItems: "flex-start",
                flexShrink: 1,
                justifyContent: "center"
            },
            unsetIconWidth: {
                flexBasis: "unset"
            },
            socialContextRefreshIcon: {
                marginEnd: e.spaces.space8
            },
            socialContextRefresh: {
                marginBottom: e.spaces.space8
            },
            socialContextRefreshTextColumn: {
                minHeight: e.spaces.space32
            },
            socialContextTextCentered: {
                justifyContent: "center"
            }
        })))
          , h = p
    }
    ,
    49376: (e,t,l)=>{
        l.d(t, {
            Q: ()=>a
        });
        l(2784);
        const a = Object.freeze({
            Bird: "Bird",
            Community: "Community",
            Conversation: "Conversation",
            Facepile: "Facepile",
            Feedback: "Feedback",
            Follow: "Follow",
            FollowFollowed: "FollowFollowed",
            FollowFollowing: "FollowFollowing",
            FollowMutual: "FollowMutual",
            Like: "Like",
            List: "List",
            Location: "Location",
            Megaphone: "Megaphone",
            Moment: "Moment",
            NewTweets: "NewTweets",
            NewUser: "NewUser",
            Pin: "Pin",
            Reply: "Reply",
            RelatedTweets: "RelatedTweets",
            ReplyPin: "ReplyPin",
            Retweet: "Retweet",
            SmartBlockExpiration: "SmartBlockExpiration",
            SocialProof: "SocialProof",
            Spaces: "Spaces",
            Sparkle: "Sparkle",
            TextOnly: "TextOnly",
            Topic: "Topic",
            Trending: "Trending"
        })
    }
    ,
    31735: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    35131: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    55916: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M12 6.59l8.457 8.45-1.414 1.42L12 9.41l-7.043 7.05-1.414-1.42L12 6.59z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    17272: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "10.3"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    27895: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6v6.72l5.19 1.73.63-1.9L13 11.28V6h-2z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    47636: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    6059: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    25163: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    7742: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    56538: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    14481: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M18.766 2H7.323l-4.8 12h5.324l-1.261 8.83L22.414 7h-6.648l3-5z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    11258: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    55269: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    75629: (e,t,l)=>{
        l.r(t),
        l.d(t, {
            default: ()=>r
        });
        var a = l(2784)
          , n = l(90601)
          , i = l(73569);
        const s = (e={})=>(0,
        n.Z)("svg", {
            ...e,
            accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || "img" : void 0,
            accessibilityHidden: void 0 === e.accessibilityLabel,
            style: [i.Z.root, e.style],
            viewBox: "0 0 24 24",
            children: a.createElement("g", null, a.createElement("path", {
                d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z"
            }))
        });
        s.metadata = {
            width: 24,
            height: 24
        };
        const r = s
    }
    ,
    95402: (e,t,l)=>{
        var a = l(2784)
          , n = a.useEffect
          , i = a.useRef;
        e.exports = function() {
            var e = i(!0);
            return n((function() {
                return e.current = !0,
                function() {
                    e.current = !1
                }
            }
            ), []),
            e
        }
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNav.7f6219ca.js.map
