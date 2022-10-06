(this.webpackJsonponelink = this.webpackJsonponelink || []).push([
  [0],
  {
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    169: function (e, t, a) {},
    171: function (e, t, a) {},
    173: function (e, t, a) {},
    174: function (e, t, a) {},
    175: function (e, t, a) {},
    176: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a(0),
        i = a(14),
        c = a.n(i),
        o = (a(145), a(146), a(54)),
        s = a(13),
        l = a(10),
        d = a.n(l),
        u = a(19),
        j = a(23),
        b = a.n(j),
        m = function () {
          return (function () {
            var e = Object(u.a)(
              d.a.mark(function e(t, a) {
                var n, r, i, c;
                return d.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: 'USER_DETAIL_REQUEST' }),
                            (n = a()),
                            (r = n.userLogin),
                            (i = {
                              headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer '.concat(
                                  r.userInfo.token
                                ),
                              },
                            }),
                            (e.next = 6),
                            b.a.get('/api/users/profile', i)
                          );
                        case 6:
                          (c = e.sent),
                            t({ type: 'USER_DETAIL_SUCCESS', payload: c.data }),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            t({
                              type: 'USER_DETAIL_FAIL',
                              payload:
                                e.t0.response && e.t0.response.data.message
                                  ? e.t0.response.data.message
                                  : e.t0.response,
                            });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })();
        },
        h = (function () {
          var e = Object(u.a)(
            d.a.mark(function e(t, a) {
              var n;
              return d.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), b.a.get('/api/cards/cardbyid/'.concat(t))
                      );
                    case 2:
                      return (n = e.sent), e.abrupt('return', n.data);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        p = function (e) {
          return (function () {
            var t = Object(u.a)(
              d.a.mark(function t(a, n) {
                var r, i, c, o;
                return d.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        a({ type: 'USER_CARDS_REQUEST' }),
                          (r = n()),
                          (i = r.userLogin),
                          (c = {
                            headers: {
                              'Content-Type': 'application/json',
                              Authorization: 'Bearer '.concat(i.userInfo.token),
                            },
                          }),
                          (o = []),
                          e.forEach(function (e) {
                            o.push(h(e.cardId, c));
                          }),
                          Promise.all(o)
                            .then(function (e) {
                              a({ type: 'USER_CARDS_SUCCESS', payload: e });
                            })
                            .catch(function (e) {
                              a({
                                type: 'USER_CARDS_FAIL',
                                payload:
                                  e.response && e.response.data.message
                                    ? e.response.data.message
                                    : e.response,
                              });
                            });
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        g = function (e) {
          return (function () {
            var t = Object(u.a)(
              d.a.mark(function t(a, n) {
                var r, i, c, o;
                return d.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: 'USER_ADDCARD_REQUEST' }),
                            (r = n()),
                            (i = r.userLogin),
                            (c = {
                              headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer '.concat(
                                  i.userInfo.token
                                ),
                              },
                            }),
                            (t.next = 6),
                            b.a.post('/api/cards/new', e, c)
                          );
                        case 6:
                          (o = t.sent),
                            a({
                              type: 'USER_ADDCARD_SUCCESS',
                              payload: o.data.addedCard,
                            }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            a({
                              type: 'USER_ADDCARD_FAIL',
                              payload:
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.response,
                            });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        x = function (e) {
          return (function () {
            var t = Object(u.a)(
              d.a.mark(function t(a, n) {
                var r, i, c;
                return d.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: 'USER_DELETECARD_REQUEST' }),
                            (r = n()),
                            (i = r.userLogin),
                            (c = {
                              headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer '.concat(
                                  i.userInfo.token
                                ),
                              },
                            }),
                            (t.next = 6),
                            b.a.delete('/api/cards/delete/'.concat(e), c)
                          );
                        case 6:
                          a({ type: 'USER_DELETECARD_SUCCESS', payload: e }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            a({
                              type: 'USER_DELETECARD_FAIL',
                              payload:
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.response,
                            });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })();
        },
        f = function (e, t) {
          return (function () {
            var a = Object(u.a)(
              d.a.mark(function a(n, r) {
                var i, c, o, s;
                return d.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            n({ type: 'USER_EDITCARD_REQUEST' }),
                            (i = r()),
                            (c = i.userLogin),
                            (o = {
                              headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer '.concat(
                                  c.userInfo.token
                                ),
                              },
                            }),
                            (a.next = 6),
                            b.a.put('/api/cards/edit/'.concat(t), e, o)
                          );
                        case 6:
                          (s = a.sent),
                            n({
                              type: 'USER_EDITCARD_SUCCESS',
                              payload: s.data,
                            }),
                            (a.next = 13);
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(0)),
                            n({
                              type: 'USER_EDITCARD_FAIL',
                              payload:
                                a.t0.response && a.t0.response.data.message
                                  ? a.t0.response.data.message
                                  : a.t0.response,
                            });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e, t) {
              return a.apply(this, arguments);
            };
          })();
        },
        O = a(206),
        y = a(208),
        v = a(210),
        S = a(211),
        w = a(15),
        C = a(18),
        I = a(227),
        E =
          (a(169),
          Object(O.a)(function (e) {
            var t;
            return {
              shadowRoot: {
                boxShadow:
                  'rgba(0, 0, 0, 0.0) 0px 3px 3px -2px, rgba(0, 0, 0, 0.07) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
              },
              root: Object(o.a)(
                {
                  flexGrow: 1,
                  paddingTop: '7px',
                  position: 'fixed',
                  top: '0%',
                  display: 'flex',
                  width: '100vw',
                  zIndex: '100',
                },
                e.breakpoints.down('xl'),
                {
                  background:
                    'linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)',
                }
              ),
              appBar:
                ((t = { background: 'transparent' }),
                Object(o.a)(t, e.breakpoints.down('xl'), {
                  background:
                    'linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)',
                }),
                Object(o.a)(t, 'boxShadow', 'none'),
                Object(o.a)(t, 'color', '#3d3d3d'),
                t),
              menuButton: { marginRight: e.spacing(2) },
              button: { textTransform: 'none' },
            };
          }));
      var L = function () {
          var e = E(),
            t = Object(C.g)(),
            a = Object(s.b)(),
            r = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            i = Object(C.f)();
          return '/:cardUrlId' !== t.pathname
            ? Object(n.jsx)('div', {
                className: ''
                  .concat(e.root, ' ')
                  .concat(
                    ('/dashboard' === t.pathname ||
                      '/cards/new' === t.pathname) &&
                      e.shadowRoot
                  ),
                children: Object(n.jsx)(y.a, {
                  position: 'static',
                  className: e.appBar,
                  children: Object(n.jsxs)(v.a, {
                    children: [
                      Object(n.jsx)(I.a, {
                        flexGrow: 1,
                        children: Object(n.jsx)(w.b, {
                          to: '/',
                          children: Object(n.jsx)('img', {
                            src: 'data:image/png;base64,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',
                            alt: 'Logo',
                            className: 'Header__logo',
                          }),
                        }),
                      }),
                      r &&
                        Object(n.jsxs)(n.Fragment, {
                          children: [
                            Object(n.jsx)(S.a, {
                              color: 'inherit',
                              className: e.button,
                              style: { marginRight: '1rem' },
                              component: w.b,
                              to: '/dashboard',
                              children: 'Dashboard',
                            }),
                            Object(n.jsx)(S.a, {
                              variant: 'contained',
                              color: 'primary',
                              className: e.button,
                              onClick: function () {
                                a(function (e) {
                                  localStorage.removeItem('userInfo'),
                                    e({ type: 'USER_LOGOUT' });
                                }),
                                  i.push('/signin');
                              },
                              children: 'Log Out',
                            }),
                          ],
                        }),
                      !r &&
                        Object(n.jsxs)(n.Fragment, {
                          children: [
                            Object(n.jsx)(S.a, {
                              color: 'inherit',
                              className: e.button,
                              style: { marginRight: '1rem' },
                              component: w.b,
                              to: '/signin',
                              children: 'Login',
                            }),
                            Object(n.jsx)(S.a, {
                              variant: 'contained',
                              color: 'primary',
                              className: e.button,
                              component: w.b,
                              to: '/signup',
                              children: 'Sign Up',
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              })
            : null;
        },
        R = a(7),
        A = a(212),
        k = a(215),
        T = a(74),
        U = a(228),
        W = a(220),
        D = a(233),
        N = a(59),
        B = a.n(N),
        F =
          (a(171),
          Object(O.a)(function (e) {
            return {
              button: { margin: '0 .5rem' },
              firstCard: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '.5rem',
                width: '100%',
                paddingTop: '.5rem',
              },
              large: {
                marginLeft: '.5rem',
                width: 100,
                height: 100,
                marginBottom: '.5rem',
              },
            };
          }));
      var P = function (e) {
          var t = e.name,
            a = e.title,
            r = e.views,
            i = e.picture,
            c = e.urlId,
            o = e.id,
            s = e.handleDeleteCard,
            l = F();
          return Object(n.jsx)(I.a, {
            boxShadow: 3,
            margin: 2,
            className: 'DashboardCard',
            children: Object(n.jsxs)(A.a, {
              container: !0,
              direction: 'column',
              children: [
                Object(n.jsx)(A.a, {
                  item: !0,
                  xs: 12,
                  style: { padding: '0 1rem .5rem 1rem' },
                  children: Object(n.jsxs)('div', {
                    className: l.firstCard,
                    children: [
                      Object(n.jsx)(D.a, {
                        src: i,
                        className: l.large,
                        style: {
                          boxShadow: '0 0 25px rgb(0 0 0 / 22%)',
                          color: '#3f51b5',
                          background:
                            'linear-gradient(90deg, rgba(31, 158, 255, 0.9) 9%, rgba(255, 112, 160, 0.6) 100%)',
                          marginRight: '1.5rem',
                          width: 100,
                          height: 100,
                          marginBottom: '.5rem',
                        },
                      }),
                      Object(n.jsxs)('div', {
                        children: [
                          Object(n.jsx)(T.a, {
                            variant: 'h5',
                            style: { fontWeight: '500', marginBottom: '.3rem' },
                            children: t,
                          }),
                          Object(n.jsx)(T.a, {
                            variant: 'h6',
                            style: {
                              marginBottom: '.5rem',
                              fontWeight: '300',
                              lineHeight: '1.1',
                            },
                            children: a,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(n.jsx)(A.a, {
                  style: { paddingBottom: '.5rem' },
                  container: !0,
                  item: !0,
                  xs: 12,
                  direction: 'row',
                  justify: 'center',
                  alignItems: 'center',
                  children: Object(n.jsx)(T.a, {
                    variant: 'h5',
                    style: { fontWeight: '500', marginBottom: '.8rem' },
                    children: 'Views: '.concat(r),
                  }),
                }),
                Object(n.jsxs)(A.a, {
                  style: { paddingBottom: '.5rem' },
                  container: !0,
                  item: !0,
                  xs: 12,
                  direction: 'row',
                  justify: 'center',
                  alignItems: 'center',
                  children: [
                    Object(n.jsx)(S.a, {
                      variant: 'contained',
                      color: 'primary',
                      component: w.b,
                      to: '/card/'.concat(c),
                      size: 'small',
                      className: l.button,
                      children: 'View Card',
                    }),
                    Object(n.jsx)(S.a, {
                      variant: 'contained',
                      color: 'secondary',
                      component: w.b,
                      to: '/cards/edit/'.concat(o),
                      size: 'small',
                      className: l.button,
                      children: 'Edit Card',
                    }),
                    Object(n.jsx)(S.a, {
                      variant: 'contained',
                      color: 'default',
                      onClick: function () {
                        s(o);
                      },
                      size: 'small',
                      className: l.button,
                      endIcon: Object(n.jsx)(B.a, {}),
                      children: 'Delete',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        z = a(232),
        G = a(231),
        Y = a(216),
        Z = a(217),
        Q = a(218),
        V = a(219),
        J = Object(O.a)(function (e) {
          return {
            root: {
              marginTop: '4rem',
              paddingTop: '1rem',
              paddingLeft: '2rem',
            },
            dashboardPage: {
              flexGrow: 1,
              background:
                'linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)',
              minHeight: '100vh',
            },
          };
        });
      var _ = function () {
          var e = Object(C.f)(),
            t = Object(s.b)(),
            a = J(),
            i = Object(r.useState)(!1),
            c = Object(R.a)(i, 2),
            o = c[0],
            l = c[1],
            j = Object(r.useState)(!1),
            b = Object(R.a)(j, 2),
            h = b[0],
            g = b[1],
            f = Object(r.useState)(''),
            O = Object(R.a)(f, 2),
            y = O[0],
            v = O[1],
            I = Object(r.useState)(!1),
            E = Object(R.a)(I, 2),
            L = E[0],
            D = E[1],
            N = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            B = Object(s.c)(function (e) {
              return e.userDetail;
            }),
            F = B.user,
            _ = B.loading,
            q = B.error,
            H = Object(s.c)(function (e) {
              return e.userCards;
            }),
            K = Object(s.c)(function (e) {
              return e.userCards.cards;
            }),
            M = H.loading,
            X = H.GETerror,
            $ = H.DELETEerror;
          Object(r.useEffect)(
            function () {
              N ? F || t(m()) : e.push('/signin');
            },
            [N, e, t, F]
          ),
            Object(r.useEffect)(
              function () {
                F && (K || t(p(F.cards)));
              },
              [t, F, K]
            );
          var ee = function () {
              l(!1);
            },
            te = function () {
              g(!1), D(!1);
            },
            ae = function (e) {
              v(e), l(!0);
            },
            ne = (function () {
              var e = Object(u.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(x(y));
                        case 2:
                          l(!1), $ ? D(!0) : g(!0);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(n.jsxs)(A.a, {
            container: !0,
            justify: 'center',
            alignItems: 'center',
            direction: 'column',
            className: a.dashboardPage,
            children: [
              Object(n.jsx)(z.a, {
                open: h,
                autoHideDuration: 6e3,
                onClose: te,
                children: Object(n.jsx)(U.a, {
                  onClose: te,
                  severity: 'success',
                  children: 'Card Deleted Successfuly',
                }),
              }),
              Object(n.jsx)(z.a, {
                open: L,
                autoHideDuration: 6e3,
                onClose: te,
                children: Object(n.jsx)(U.a, {
                  onClose: te,
                  severity: 'error',
                  children: $,
                }),
              }),
              Object(n.jsxs)(G.a, {
                PaperProps: {
                  style: { minWidth: '300px', minHeight: '200px' },
                },
                open: o,
                keepMounted: !0,
                onClose: ee,
                'aria-labelledby': 'alert-dialog-slide-title',
                'aria-describedby': 'alert-dialog-slide-description',
                children: [
                  M &&
                    Object(n.jsx)(k.a, {
                      style: { color: '#3f6eb5', margin: 'auto' },
                    }),
                  !M &&
                    Object(n.jsxs)(n.Fragment, {
                      children: [
                        Object(n.jsx)(Y.a, {
                          id: 'alert-dialog-slide-title',
                          children: 'Delete This Card?',
                        }),
                        Object(n.jsx)(Z.a, {
                          children: Object(n.jsx)(Q.a, {
                            id: 'alert-dialog-slide-description',
                            children:
                              'Are you sure you want to delete this card?',
                          }),
                        }),
                        Object(n.jsxs)(V.a, {
                          children: [
                            Object(n.jsx)(S.a, {
                              color: 'primary',
                              onClick: ne,
                              children: 'Yes',
                            }),
                            Object(n.jsx)(S.a, {
                              onClick: ee,
                              color: 'primary',
                              children: 'No',
                            }),
                          ],
                        }),
                      ],
                    }),
                  $ &&
                    Object(n.jsxs)(U.a, {
                      severity: 'error',
                      children: [
                        Object(n.jsx)(W.a, { children: 'Error' }),
                        'This is an error alert \u2014 ',
                        Object(n.jsx)('strong', { children: 'check it out!' }),
                      ],
                    }),
                ],
              }),
              Object(n.jsx)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'flex-start',
                alignItems: 'center',
                className: a.root,
                children: Object(n.jsx)(T.a, {
                  variant: 'h3',
                  style: {
                    fontWeight: '200',
                    color: '#115293',
                    borderBottom: '2px solid #f500578c',
                  },
                  children: 'Dashboard',
                }),
              }),
              Object(n.jsxs)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'center',
                alignItems: 'center',
                style: { padding: '1.2rem 0 2rem 0', minHeight: '50vh' },
                children: [
                  K &&
                    0 !== K.length &&
                    !_ &&
                    !M &&
                    (function (e) {
                      return e.map(function (e, t) {
                        var a = e.name,
                          r = e.title,
                          i = e.views,
                          c = e.picture,
                          o = e.urlId,
                          s = e._id;
                        return Object(n.jsx)(
                          P,
                          {
                            name: a,
                            title: r,
                            views: i,
                            picture: c,
                            urlId: o,
                            id: s,
                            handleDeleteCard: ae,
                          },
                          t
                        );
                      });
                    })(K),
                  (_ || M) && Object(n.jsx)(k.a, {}),
                  (q || X) &&
                    Object(n.jsxs)(U.a, {
                      severity: 'error',
                      variant: 'outlined',
                      style: { backgroundColor: '#ff000012' },
                      children: [
                        Object(n.jsx)(W.a, { children: 'Error' }),
                        q || X,
                      ],
                    }),
                  !_ &&
                    !M &&
                    (!K || 0 === K.length) &&
                    Object(n.jsxs)(U.a, {
                      severity: 'info',
                      children: [
                        "You don't have any cards yet.",
                        Object(n.jsx)('br', {}),
                        'Please add cards by pressing the button below!',
                      ],
                    }),
                ],
              }),
              Object(n.jsx)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'center',
                alignItems: 'center',
                style: { padding: '2rem' },
                children: Object(n.jsx)(S.a, {
                  variant: 'contained',
                  color: 'primary',
                  component: w.b,
                  to: '/cards/new',
                  size: 'large',
                  children: 'Add New Card',
                }),
              }),
            ],
          });
        },
        q = a(66),
        H = a(214),
        K = a(226),
        M = a(64),
        X = a.n(M),
        $ = a(86),
        ee = a.n($),
        te = a(62),
        ae = a.n(te),
        ne = a(63),
        re = a.n(ne),
        ie = a(61),
        ce = a.n(ie),
        oe = a(65),
        se = a.n(oe),
        le = Object(O.a)(function (e) {
          return {
            root: {
              marginTop: '6rem',
              paddingTop: '1rem',
              paddingLeft: '2rem',
              marginBottom: '2rem',
            },
            dashboardPage: {
              flexGrow: 1,
              background:
                'linear-gradient(90deg, rgba(31, 158, 255, 0.9) 9%, rgba(255, 112, 160, 0.6) 100%)',
              minHeight: '100vh',
            },
          };
        });
      var de = function (e) {
          var t = e.match,
            a = Object(C.f)(),
            i = le(),
            c = Object(s.c)(function (e) {
              return e.userCards.EDITerror;
            }),
            o = Object(s.c)(function (e) {
              return e.userLogin.userInfo;
            }),
            l = Object(s.c)(function (e) {
              return e.userDetail;
            }),
            j = Object(s.c)(function (e) {
              return e.userCards.cards;
            }),
            h = l.user,
            g = Object(r.useState)({}),
            x = Object(R.a)(g, 2),
            O = x[0],
            y = x[1],
            v = Object(r.useState)(''),
            E = Object(R.a)(v, 2),
            L = E[0],
            N = E[1],
            F = Object(r.useState)(''),
            P = Object(R.a)(F, 2),
            z = P[0],
            Y = P[1],
            Z = Object(r.useState)(''),
            Q = Object(R.a)(Z, 2),
            V = Q[0],
            J = Q[1],
            _ = Object(r.useState)(''),
            M = Object(R.a)(_, 2),
            $ = M[0],
            te = M[1],
            ne = Object(r.useState)(''),
            ie = Object(R.a)(ne, 2),
            oe = ie[0],
            de = ie[1],
            ue = Object(r.useState)(''),
            je = Object(R.a)(ue, 2),
            be = je[0],
            me = je[1],
            he = Object(r.useState)(''),
            pe = Object(R.a)(he, 2),
            ge = pe[0],
            xe = pe[1],
            fe = Object(r.useState)(''),
            Oe = Object(R.a)(fe, 2),
            ye = Oe[0],
            ve = Oe[1],
            Se = Object(r.useState)(''),
            we = Object(R.a)(Se, 2),
            Ce = we[0],
            Ie = we[1],
            Ee = Object(r.useState)(''),
            Le = Object(R.a)(Ee, 2),
            Re = Le[0],
            Ae = Le[1],
            ke = Object(r.useState)(''),
            Te = Object(R.a)(ke, 2),
            Ue = Te[0],
            We = Te[1],
            De = Object(r.useState)(''),
            Ne = Object(R.a)(De, 2),
            Be = Ne[0],
            Fe = Ne[1],
            Pe = Object(r.useState)(''),
            ze = Object(R.a)(Pe, 2),
            Ge = ze[0],
            Ye = ze[1],
            Ze = Object(r.useState)(''),
            Qe = Object(R.a)(Ze, 2),
            Ve = Qe[0],
            Je = Qe[1],
            _e = Object(r.useState)(''),
            qe = Object(R.a)(_e, 2),
            He = qe[0],
            Ke = qe[1],
            Me = Object(r.useState)(''),
            Xe = Object(R.a)(Me, 2),
            $e = Xe[0],
            et = Xe[1],
            tt = Object(r.useState)(''),
            at = Object(R.a)(tt, 2),
            nt = at[0],
            rt = at[1],
            it = Object(r.useState)([]),
            ct = Object(R.a)(it, 2),
            ot = ct[0],
            st = ct[1],
            lt = Object(r.useState)(!1),
            dt = Object(R.a)(lt, 2),
            ut = dt[0],
            jt = dt[1],
            bt = Object(r.useState)(!1),
            mt = Object(R.a)(bt, 2),
            ht = mt[0],
            pt = mt[1],
            gt = Object(r.useState)(!1),
            xt = Object(R.a)(gt, 2),
            ft = xt[0],
            Ot = xt[1],
            yt = Object(r.useState)(!1),
            vt = Object(R.a)(yt, 2),
            St = vt[0],
            wt = vt[1],
            Ct = Object(r.useState)(!1),
            It = Object(R.a)(Ct, 2),
            Et = It[0],
            Lt = It[1],
            Rt = Object(r.useState)(''),
            At = Object(R.a)(Rt, 2),
            kt = At[0],
            Tt = At[1],
            Ut = Object(r.useState)(!1),
            Wt = Object(R.a)(Ut, 2),
            Dt = Wt[0],
            Nt = Wt[1],
            Bt = Object(s.b)();
          Object(r.useEffect)(
            function () {
              if (j && j.length > 0) {
                var e = j.find(function (e) {
                  return e._id === t.params.cardid;
                });
                y(e);
              }
              return function () {
                y({});
              };
            },
            [j, t.params.cardid]
          ),
            Object(r.useEffect)(
              function () {
                O &&
                  O.name &&
                  (function () {
                    var e = O.urlId,
                      t = O.name,
                      a = O.title,
                      n = O.picture,
                      r = O.whatsApp,
                      i = O.telegramId,
                      c = O.contactNumber,
                      o = O.instagram,
                      s = O.twitter,
                      l = O.youtube,
                      d = O.linkedIn,
                      u = O.links,
                      j = O.description,
                      b = O.email,
                      m = O.locationAddress,
                      h = O.locationLink;
                    te(e),
                      N(t),
                      J(a),
                      Tt(n || ''),
                      xe(r || ''),
                      ve(i || ''),
                      me(c || ''),
                      We(o || ''),
                      Ae(s || ''),
                      Fe(l || ''),
                      Ye(d || ''),
                      st(u || []),
                      Y(j || ''),
                      Ie(b || ''),
                      Je(m || ''),
                      Ke(h || '');
                  })();
              },
              [O]
            ),
            Object(r.useEffect)(
              function () {
                o ? h || Bt(m()) : a.push('/signin');
              },
              [o, a, Bt, h]
            ),
            Object(r.useEffect)(
              function () {
                h && ((j && 0 !== j.length) || Bt(p(h.cards)));
              },
              [Bt, h, j]
            ),
            Object(r.useEffect)(
              function () {
                (function () {
                  var e = Object(u.a)(
                    d.a.mark(function e() {
                      var t;
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!$ || $ === O.urlId) {
                                e.next = 11;
                                break;
                              }
                              if (
                                !new RegExp(
                                  /^[A-Za-z_-][A-Za-z0-9_-]*$/gi
                                ).test($)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (
                                (e.next = 6),
                                b.a.get('/api/cards/idexists/'.concat($))
                              );
                            case 6:
                              (t = e.sent),
                                de(
                                  t.data.result
                                    ? 'This URL already exists please choose a different one'
                                    : ''
                                ),
                                (e.next = 11);
                              break;
                            case 10:
                              de(
                                'You can only use letters, numbers, - and _ for your Card URL'
                              );
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [$, O.urlId]
            );
          var Ft = function (e) {
              var t = ot.filter(function (t) {
                return t.url !== e;
              });
              st(t);
            },
            Pt = (function () {
              var e = Object(u.a)(
                d.a.mark(function e(t) {
                  var n;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), !L || !V || oe)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (n = {
                              owner: O.owner,
                              urlId: $,
                              picture: kt,
                              name: L,
                              title: V,
                              whatsApp: ge,
                              telegramId: ye,
                              contactNumber: be,
                              instagram: Ue,
                              twitter: Re,
                              youtube: Be,
                              linkedIn: Ge,
                              links: ot,
                              description: z,
                              email: Ce,
                              locationAddress: Ve,
                              locationLink: He,
                            }),
                            Lt(!0),
                            wt(!0),
                            (e.next = 7),
                            Bt(f(n, O._id))
                          );
                        case 7:
                          Lt(!1),
                            c ||
                              setTimeout(function () {
                                a.push('/dashboard');
                              }, 1800);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            zt = (function () {
              var e = Object(u.a)(
                d.a.mark(function e(t) {
                  var a, n, r, i, c;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append('image', a),
                              Nt(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  'Content-Type': 'multipart/form-data',
                                },
                              }),
                              (e.next = 8),
                              b.a.post('/api/upload', n, r)
                            );
                          case 8:
                            (i = e.sent),
                              (c = i.data),
                              Tt(c),
                              Nt(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              Nt(!1);
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(n.jsxs)(A.a, {
            container: !0,
            justify: 'flex-start',
            alignItems: 'center',
            direction: 'column',
            className: i.dashboardPage,
            children: [
              Object(n.jsxs)(G.a, {
                PaperProps: {
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '300px',
                    minHeight: '100px',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                },
                open: St,
                keepMounted: !0,
                onClose: function () {
                  wt(!1);
                },
                'aria-labelledby': 'alert-dialog-slide-title',
                'aria-describedby': 'alert-dialog-slide-description',
                children: [
                  Et && Object(n.jsx)(k.a, { style: { color: '#3f6eb5' } }),
                  !Et &&
                    !c &&
                    Object(n.jsxs)(U.a, {
                      severity: 'success',
                      children: [
                        Object(n.jsx)(W.a, { children: 'Success' }),
                        'Changes saved successfuly \u2014',
                        ' ',
                        Object(n.jsxs)('strong', {
                          children: [
                            'check it out in your',
                            ' ',
                            Object(n.jsx)(w.b, {
                              style: { color: 'inherit' },
                              to: '/dashboard',
                              children: 'dashboard!',
                            }),
                          ],
                        }),
                      ],
                    }),
                  c &&
                    Object(n.jsxs)(U.a, {
                      severity: 'error',
                      children: [Object(n.jsx)(W.a, { children: 'Error' }), c],
                    }),
                ],
              }),
              Object(n.jsx)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'flex-start',
                alignItems: 'center',
                className: i.root,
                children: Object(n.jsx)(T.a, {
                  variant: 'h3',
                  style: {
                    fontWeight: '200',
                    color: '#115293',
                    borderBottom: '2px solid #f500578c',
                  },
                  children: 'Create New Card',
                }),
              }),
              Object(n.jsxs)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'center',
                alignItems: 'center',
                children: [
                  Object(n.jsx)(D.a, {
                    src: kt,
                    style: {
                      boxShadow: '0 0 25px rgb(0 0 0 / 22%)',
                      color: '#3f51b5',
                      background:
                        'linear-gradient(90deg, rgba(31, 158, 255, 0.9) 9%, rgba(255, 112, 160, 0.6) 100%)',
                      marginRight: '1.5rem',
                      width: 100,
                      height: 100,
                      marginBottom: '.5rem',
                    },
                  }),
                  Object(n.jsx)('input', {
                    accept: 'image/*',
                    style: { display: 'none' },
                    id: 'raised-button-file',
                    onChange: zt,
                    multiple: !0,
                    type: 'file',
                  }),
                  Object(n.jsx)('label', {
                    htmlFor: 'raised-button-file',
                    children: Object(n.jsx)(S.a, {
                      startIcon: Object(n.jsx)(ee.a, {}),
                      variant: 'outlined',
                      color: 'primary',
                      component: 'span',
                      className: i.button,
                      children: 'Upload',
                    }),
                  }),
                  Dt && Object(n.jsx)(k.a, { style: { marginLeft: '1.5rem' } }),
                ],
              }),
              Object(n.jsx)('form', {
                onSubmit: Pt,
                style: {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  overflowY: 'hidden',
                },
                children: Object(n.jsxs)(A.a, {
                  spacing: 3,
                  container: !0,
                  direction: 'row',
                  justify: 'center',
                  alignItems: 'center',
                  style: { padding: '1.2rem 1rem 2rem 1rem', maxWidth: '90vw' },
                  children: [
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: L,
                        helperText: "Enter your name or your company's name",
                        onChange: function (e) {
                          N(e.target.value);
                        },
                        variant: 'outlined',
                        required: !0,
                        fullWidth: !0,
                        id: 'name',
                        label: 'Name',
                        name: 'name',
                        autoComplete: 'name',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: V,
                        helperText: 'For example, Web Developer or Lawyer',
                        onChange: function (e) {
                          J(e.target.value);
                        },
                        variant: 'outlined',
                        required: !0,
                        fullWidth: !0,
                        name: 'title',
                        label: 'Title',
                        type: 'title',
                        id: 'title',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: z,
                        helperText:
                          'A brief description about you or your business',
                        onChange: function (e) {
                          Y(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'description',
                        label: 'Description',
                        type: 'text',
                        id: 'description',
                        multiline: !0,
                        rows: 2,
                        rowsMax: 4,
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: $,
                        error: Boolean(oe),
                        helperText:
                          oe ||
                          'Your card would be available at: one.link/card/'.concat(
                            $ || 'CardURL'
                          ),
                        onChange: function (e) {
                          te(e.target.value.toLocaleLowerCase());
                        },
                        variant: 'outlined',
                        required: !0,
                        fullWidth: !0,
                        name: 'urlId',
                        label: 'Card URL',
                        type: 'urlId',
                        id: 'urlId',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Contact Info',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: be,
                        onChange: function (e) {
                          me(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'contactNumber',
                        label: 'Contact Number',
                        id: 'contactNumber',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: Ce,
                        onChange: function (e) {
                          Ie(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'email',
                        label: 'Email',
                        type: 'email',
                        id: 'email',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: ge,
                        helperText:
                          'Enter your whatsapp number with country extension for example for Canada: 16476751234',
                        onChange: function (e) {
                          xe(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'whatsapp',
                        label: 'WhatsApp Number',
                        type: 'whatsapp',
                        id: 'whatsapp',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        helperText: 'Enter only your telegram Id (without @)',
                        value: ye,
                        onChange: function (e) {
                          ve(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'telegramId',
                        label: 'Telegram ID',
                        type: 'telegramId',
                        id: 'telegramId',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Social Media',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Ue,
                        helperText: 'Enter your Instagram account username',
                        onChange: function (e) {
                          We(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'instagram',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Instagram' }),
                            Object(n.jsx)(ae.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'instagram',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Be,
                        helperText: 'Enter your youtube account URL',
                        onChange: function (e) {
                          Fe(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'youtube',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Youtube' }),
                            Object(n.jsx)(re.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'youtube',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Re,
                        helperText:
                          'Enter your twitter account username (without @)',
                        onChange: function (e) {
                          Ae(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'twitter',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Twitter' }),
                            Object(n.jsx)(X.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'twitter',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Ge,
                        helperText: 'Enter your Linkedin account URL',
                        onChange: function (e) {
                          Ye(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'linkedIn',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Linkedin' }),
                            Object(n.jsx)(se.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'linkedIn',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Related Links',
                      }),
                    }),
                    ot.length > 0 &&
                      Object(n.jsx)(A.a, {
                        container: !0,
                        item: !0,
                        xs: 12,
                        style: { paddingTop: '.2rem' },
                        direction: 'column',
                        children: ot.map(function (e, t) {
                          return Object(n.jsxs)(
                            'div',
                            {
                              children: [
                                Object(n.jsx)(S.a, {
                                  variant: 'text',
                                  color: 'default',
                                  href: e.url,
                                  style: { marginRight: '.7rem' },
                                  startIcon: Object(n.jsx)(ce.a, {}),
                                  children: e.name,
                                }),
                                Object(n.jsx)(H.a, {
                                  'aria-label': 'delete link',
                                  onClick: function () {
                                    Ft(e.url);
                                  },
                                  children: Object(n.jsx)(B.a, {}),
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 5,
                      children: Object(n.jsx)(K.a, {
                        error: ut,
                        helperText: ut ? 'Please enter a valid URL' : '',
                        value: $e,
                        onChange: function (e) {
                          jt(!1), et(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'linkUrl',
                        label: 'Link URL',
                        id: 'linkUrl',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 5,
                      children: Object(n.jsx)(K.a, {
                        error: ht,
                        helperText: ht
                          ? 'Please enter a description for the link'
                          : '',
                        value: nt,
                        onChange: function (e) {
                          pt(!1), rt(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'linkDescription',
                        label: 'Link Description',
                        type: 'linkDescription',
                        id: 'linkDescription',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      container: !0,
                      xs: 12,
                      sm: 2,
                      justify: 'center',
                      children: Object(n.jsx)(S.a, {
                        color: 'secondary',
                        variant: 'outlined',
                        onClick: function () {
                          var e = new RegExp(
                            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
                          );
                          if (e.test($e) && nt) {
                            var t = { url: $e, name: nt };
                            return (
                              st([].concat(Object(q.a)(ot), [t])),
                              et(''),
                              void rt('')
                            );
                          }
                          e.test($e) || jt(!0), nt || pt(!0);
                        },
                        children: 'Add Link',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Location',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Ve,
                        onChange: function (e) {
                          Je(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'locationAddress',
                        label: 'Location Address',
                        id: 'locationAddress',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        error: ft,
                        helperText: ft
                          ? 'Please enter a valid URL'
                          : 'Copy your Location URL from google maps and paste it here',
                        value: He,
                        onChange: function (e) {
                          Ot(!1), Ke(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'locationLink',
                        label: 'Location Link',
                        type: 'locationLink',
                        id: 'locationLink',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      container: !0,
                      justify: 'center',
                      xs: 12,
                      children: Object(n.jsx)(S.a, {
                        type: 'submit',
                        size: 'large',
                        variant: 'contained',
                        color: 'primary',
                        className: i.submit,
                        children: 'Save Changes',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ue = (a(173), a.p + 'static/media/mockup_blue.f41eae9d.png'),
        je = Object(O.a)(function (e) {
          return {
            root: {
              flexGrow: 1,
              background:
                'linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)',
            },
          };
        });
      var be = function () {
          var e = je();
          return Object(n.jsxs)(A.a, {
            container: !0,
            className: e.root,
            children: [
              Object(n.jsxs)(A.a, {
                className: 'LandingPage__mainText',
                container: !0,
                item: !0,
                xs: 12,
                md: 7,
                direction: 'column',
                justify: 'center',
                alignItems: 'flex-start',
                children: [
                  Object(n.jsx)(I.a, {
                    fontWeight: 300,
                    pl: 5,
                    textAlign: 'left',
                    py: 3,
                    mr: 2,
                    children: Object(n.jsx)(T.a, {
                      variant: 'h3',
                      style: { fontWeight: '200', color: '3f51b5' },
                      children:
                        'Create your digital business card with OneLink',
                    }),
                  }),
                  Object(n.jsx)(I.a, {
                    pl: 5,
                    pb: 4,
                    mr: 2,
                    textAlign: 'left',
                    children: Object(n.jsx)(T.a, {
                      variant: 'h6',
                      children:
                        'All the ways your clients can contact you, in one link',
                    }),
                  }),
                  Object(n.jsxs)(I.a, {
                    display: 'flex',
                    flexDirection: 'row',
                    pb: 3,
                    alignSelf: 'center',
                    children: [
                      Object(n.jsx)(S.a, {
                        variant: 'contained',
                        color: 'secondary',
                        size: 'large',
                        style: { margin: '0 .5rem' },
                        href: 'https://www.linkedin.com/feed/update/urn:li:activity:6761314380282920961/',
                        children: 'Watch Demo',
                      }),
                      Object(n.jsx)(S.a, {
                        variant: 'contained',
                        color: 'primary',
                        size: 'large',
                        style: { margin: '0 .5rem' },
                        component: w.b,
                        to: '/signup',
                        children: 'Start Now',
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(A.a, {
                className: 'LandingPage__imageContainer',
                container: !0,
                item: !0,
                xs: 12,
                md: 5,
                direction: 'column',
                justify: 'center',
                alignItems: 'center',
                children: Object(n.jsx)(I.a, {
                  display: 'flex',
                  style: { height: '100%' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  children: Object(n.jsx)('img', {
                    src: ue,
                    alt: 'mockup',
                    style: { height: '92%' },
                  }),
                }),
              }),
            ],
          });
        },
        me = Object(O.a)(function (e) {
          return {
            root: {
              marginTop: '6rem',
              paddingTop: '1rem',
              paddingLeft: '2rem',
              marginBottom: '2rem',
            },
            dashboardPage: {
              flexGrow: 1,
              background:
                'linear-gradient(90deg, rgba(31, 158, 255, 0.9) 9%, rgba(255, 112, 160, 0.6) 100%)',
              minHeight: '100vh',
            },
          };
        });
      var he = function () {
          var e = Object(C.f)(),
            t = me(),
            a = Object(r.useState)(''),
            i = Object(R.a)(a, 2),
            c = i[0],
            o = i[1],
            l = Object(r.useState)(''),
            j = Object(R.a)(l, 2),
            m = j[0],
            h = j[1],
            p = Object(r.useState)(''),
            x = Object(R.a)(p, 2),
            f = x[0],
            O = x[1],
            y = Object(r.useState)(''),
            v = Object(R.a)(y, 2),
            E = v[0],
            L = v[1],
            N = Object(r.useState)(''),
            F = Object(R.a)(N, 2),
            P = F[0],
            z = F[1],
            Y = Object(r.useState)(''),
            Z = Object(R.a)(Y, 2),
            Q = Z[0],
            V = Z[1],
            J = Object(r.useState)(''),
            _ = Object(R.a)(J, 2),
            M = _[0],
            $ = _[1],
            te = Object(r.useState)(''),
            ne = Object(R.a)(te, 2),
            ie = ne[0],
            oe = ne[1],
            le = Object(r.useState)(''),
            de = Object(R.a)(le, 2),
            ue = de[0],
            je = de[1],
            be = Object(r.useState)(''),
            he = Object(R.a)(be, 2),
            pe = he[0],
            ge = he[1],
            xe = Object(r.useState)(''),
            fe = Object(R.a)(xe, 2),
            Oe = fe[0],
            ye = fe[1],
            ve = Object(r.useState)(''),
            Se = Object(R.a)(ve, 2),
            we = Se[0],
            Ce = Se[1],
            Ie = Object(r.useState)(''),
            Ee = Object(R.a)(Ie, 2),
            Le = Ee[0],
            Re = Ee[1],
            Ae = Object(r.useState)(''),
            ke = Object(R.a)(Ae, 2),
            Te = ke[0],
            Ue = ke[1],
            We = Object(r.useState)(''),
            De = Object(R.a)(We, 2),
            Ne = De[0],
            Be = De[1],
            Fe = Object(r.useState)(''),
            Pe = Object(R.a)(Fe, 2),
            ze = Pe[0],
            Ge = Pe[1],
            Ye = Object(r.useState)(''),
            Ze = Object(R.a)(Ye, 2),
            Qe = Ze[0],
            Ve = Ze[1],
            Je = Object(r.useState)([]),
            _e = Object(R.a)(Je, 2),
            qe = _e[0],
            He = _e[1],
            Ke = Object(r.useState)(!1),
            Me = Object(R.a)(Ke, 2),
            Xe = Me[0],
            $e = Me[1],
            et = Object(r.useState)(!1),
            tt = Object(R.a)(et, 2),
            at = tt[0],
            nt = tt[1],
            rt = Object(r.useState)(!1),
            it = Object(R.a)(rt, 2),
            ct = it[0],
            ot = it[1],
            st = Object(r.useState)(!1),
            lt = Object(R.a)(st, 2),
            dt = lt[0],
            ut = lt[1],
            jt = Object(r.useState)(!1),
            bt = Object(R.a)(jt, 2),
            mt = bt[0],
            ht = bt[1],
            pt = Object(r.useState)(''),
            gt = Object(R.a)(pt, 2),
            xt = gt[0],
            ft = gt[1],
            Ot = Object(r.useState)(!1),
            yt = Object(R.a)(Ot, 2),
            vt = yt[0],
            St = yt[1],
            wt = Object(s.c)(function (e) {
              return e.userCards.POSTerror;
            }),
            Ct = Object(s.c)(function (e) {
              return e.userLogin.userInfo;
            }),
            It = Object(s.b)();
          Object(r.useEffect)(
            function () {
              Ct || e.push('/signin');
            },
            [Ct, e]
          ),
            Object(r.useEffect)(
              function () {
                (function () {
                  var e = Object(u.a)(
                    d.a.mark(function e() {
                      var t;
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!E) {
                                e.next = 11;
                                break;
                              }
                              if (
                                !new RegExp(
                                  /^[A-Za-z_-][A-Za-z0-9_-]*$/gi
                                ).test(E)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (
                                (e.next = 6),
                                b.a.get('/api/cards/idexists/'.concat(E))
                              );
                            case 6:
                              (t = e.sent),
                                z(
                                  t.data.result
                                    ? 'This URL already exists please choose a different one'
                                    : ''
                                ),
                                (e.next = 11);
                              break;
                            case 10:
                              z(
                                'You can only use letters, numbers, - and _ for your Card URL'
                              );
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [E]
            );
          var Et = function (e) {
              var t = qe.filter(function (t) {
                return t.url !== e;
              });
              He(t);
            },
            Lt = (function () {
              var t = Object(u.a)(
                d.a.mark(function t(a) {
                  var n;
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((a.preventDefault(), !c || !f || P)) {
                            t.next = 9;
                            break;
                          }
                          return (
                            (n = {
                              urlId: E,
                              name: c,
                              picture: xt,
                              title: f,
                              whatsApp: M,
                              telegramId: ie,
                              contactNumber: Q,
                              instagram: Oe,
                              twitter: pe,
                              youtube: we,
                              linkedIn: Le,
                              links: qe,
                              description: m,
                              email: ue,
                              locationAddress: Te,
                              locationLink: Ne,
                            }),
                            ht(!0),
                            ut(!0),
                            (t.next = 7),
                            It(g(n))
                          );
                        case 7:
                          ht(!1),
                            wt ||
                              setTimeout(function () {
                                e.push('/dashboard');
                              }, 2e3);
                        case 9:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            Rt = (function () {
              var e = Object(u.a)(
                d.a.mark(function e(t) {
                  var a, n, r, i, c;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.target.files[0]),
                              (n = new FormData()).append('image', a),
                              St(!0),
                              (e.prev = 4),
                              (r = {
                                headers: {
                                  'Content-Type': 'multipart/form-data',
                                },
                              }),
                              (e.next = 8),
                              b.a.post('/api/upload', n, r)
                            );
                          case 8:
                            (i = e.sent),
                              (c = i.data),
                              ft(c),
                              St(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0),
                              St(!1);
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(n.jsxs)(A.a, {
            container: !0,
            justify: 'flex-start',
            alignItems: 'center',
            direction: 'column',
            className: t.dashboardPage,
            children: [
              Object(n.jsxs)(G.a, {
                PaperProps: {
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '300px',
                    minHeight: '100px',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                },
                open: dt,
                keepMounted: !0,
                onClose: function () {
                  ut(!1);
                },
                'aria-labelledby': 'alert-dialog-slide-title',
                'aria-describedby': 'alert-dialog-slide-description',
                children: [
                  mt && Object(n.jsx)(k.a, { style: { color: '#3f6eb5' } }),
                  !mt &&
                    !wt &&
                    Object(n.jsxs)(U.a, {
                      severity: 'success',
                      children: [
                        Object(n.jsx)(W.a, { children: 'Success' }),
                        'Card save successfuly \u2014',
                        ' ',
                        Object(n.jsxs)('strong', {
                          children: [
                            'check it out in your',
                            ' ',
                            Object(n.jsx)(w.b, {
                              style: { color: 'inherit' },
                              to: '/dashboard',
                              children: 'dashboard!',
                            }),
                          ],
                        }),
                      ],
                    }),
                  wt &&
                    Object(n.jsxs)(U.a, {
                      severity: 'error',
                      children: [Object(n.jsx)(W.a, { children: 'Error' }), wt],
                    }),
                ],
              }),
              Object(n.jsx)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'flex-start',
                alignItems: 'center',
                className: t.root,
                children: Object(n.jsx)(T.a, {
                  variant: 'h3',
                  style: {
                    fontWeight: '200',
                    color: '#115293',
                    borderBottom: '2px solid #f500578c',
                  },
                  children: 'Create New Card',
                }),
              }),
              Object(n.jsxs)(A.a, {
                container: !0,
                direction: 'row',
                justify: 'center',
                alignItems: 'center',
                children: [
                  Object(n.jsx)(D.a, {
                    src: xt,
                    style: {
                      boxShadow: '0 0 25px rgb(0 0 0 / 22%)',
                      color: '#3f51b5',
                      background:
                        'linear-gradient(90deg, rgba(31, 158, 255, 0.9) 9%, rgba(255, 112, 160, 0.6) 100%)',
                      marginRight: '1.5rem',
                      width: 100,
                      height: 100,
                      marginBottom: '.5rem',
                    },
                  }),
                  Object(n.jsx)('input', {
                    accept: 'image/*',
                    style: { display: 'none' },
                    id: 'raised-button-file',
                    onChange: Rt,
                    multiple: !0,
                    type: 'file',
                  }),
                  Object(n.jsx)('label', {
                    htmlFor: 'raised-button-file',
                    children: Object(n.jsx)(S.a, {
                      startIcon: Object(n.jsx)(ee.a, {}),
                      variant: 'outlined',
                      color: 'primary',
                      component: 'span',
                      className: t.button,
                      children: 'Upload',
                    }),
                  }),
                  vt && Object(n.jsx)(k.a, { style: { marginLeft: '1.5rem' } }),
                ],
              }),
              Object(n.jsx)('form', {
                onSubmit: Lt,
                style: {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  overflowY: 'hidden',
                },
                children: Object(n.jsxs)(A.a, {
                  spacing: 3,
                  container: !0,
                  direction: 'row',
                  justify: 'center',
                  alignItems: 'center',
                  style: { padding: '1.2rem 1rem 2rem 1rem', maxWidth: '90vw' },
                  children: [
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: c,
                        helperText: "Enter your name or your company's name",
                        onChange: function (e) {
                          o(e.target.value);
                        },
                        variant: 'outlined',
                        required: !0,
                        fullWidth: !0,
                        id: 'name',
                        label: 'Name',
                        name: 'name',
                        autoComplete: 'name',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: f,
                        helperText: 'For example, Web Developer or Lawyer',
                        onChange: function (e) {
                          O(e.target.value);
                        },
                        variant: 'outlined',
                        required: !0,
                        fullWidth: !0,
                        name: 'title',
                        label: 'Title',
                        type: 'title',
                        id: 'title',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: m,
                        helperText:
                          'A brief description about you or your business',
                        onChange: function (e) {
                          h(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'description',
                        label: 'Description',
                        type: 'text',
                        id: 'description',
                        multiline: !0,
                        rows: 2,
                        rowsMax: 4,
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: E,
                        error: Boolean(P),
                        helperText:
                          P ||
                          'Your card would be available at: one.link/card/'.concat(
                            E || 'CardURL'
                          ),
                        onChange: function (e) {
                          L(e.target.value.toLocaleLowerCase());
                        },
                        variant: 'outlined',
                        required: !0,
                        fullWidth: !0,
                        name: 'urlId',
                        label: 'Card URL',
                        type: 'urlId',
                        id: 'urlId',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Contact Info',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: Q,
                        onChange: function (e) {
                          V(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'contactNumber',
                        label: 'Contact Number',
                        id: 'contactNumber',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      children: Object(n.jsx)(K.a, {
                        value: ue,
                        onChange: function (e) {
                          je(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'email',
                        label: 'Email',
                        type: 'email',
                        id: 'email',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: M,
                        helperText:
                          'Enter your whatsapp number with country extension for example for Canada: 16476751234',
                        onChange: function (e) {
                          $(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'whatsapp',
                        label: 'WhatsApp Number',
                        type: 'whatsapp',
                        id: 'whatsapp',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        helperText: 'Enter only your telegram Id (without @)',
                        value: ie,
                        onChange: function (e) {
                          oe(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'telegramId',
                        label: 'Telegram ID',
                        type: 'telegramId',
                        id: 'telegramId',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Social Media',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Oe,
                        helperText: 'Enter your Instagram account username',
                        onChange: function (e) {
                          ye(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'instagram',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Instagram' }),
                            Object(n.jsx)(ae.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'instagram',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: we,
                        helperText: 'Enter your youtube account URL',
                        onChange: function (e) {
                          Ce(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'youtube',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Youtube' }),
                            Object(n.jsx)(re.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'youtube',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: pe,
                        helperText:
                          'Enter your twitter account username (without @)',
                        onChange: function (e) {
                          ge(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'twitter',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Twitter' }),
                            Object(n.jsx)(X.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'twitter',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Le,
                        helperText: 'Enter your Linkedin account URL',
                        onChange: function (e) {
                          Re(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'linkedIn',
                        label: Object(n.jsxs)(I.a, {
                          direction: 'row',
                          display: 'flex',
                          children: [
                            Object(n.jsx)('div', { children: 'Linkedin' }),
                            Object(n.jsx)(se.a, {
                              style: {
                                fontSize: '1.1rem',
                                paddingLeft: '.5rem',
                                marginRight: '-.55rem',
                              },
                            }),
                          ],
                        }),
                        id: 'linkedIn',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Related Links',
                      }),
                    }),
                    qe.length > 0 &&
                      Object(n.jsx)(A.a, {
                        container: !0,
                        item: !0,
                        xs: 12,
                        style: { paddingTop: '.2rem' },
                        direction: 'column',
                        children: qe.map(function (e, t) {
                          return Object(n.jsxs)(
                            'div',
                            {
                              children: [
                                Object(n.jsx)(S.a, {
                                  variant: 'text',
                                  color: 'default',
                                  href: e.url,
                                  style: { marginRight: '.7rem' },
                                  startIcon: Object(n.jsx)(ce.a, {}),
                                  children: e.name,
                                }),
                                Object(n.jsx)(H.a, {
                                  'aria-label': 'delete link',
                                  onClick: function () {
                                    Et(e.url);
                                  },
                                  children: Object(n.jsx)(B.a, {}),
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 5,
                      children: Object(n.jsx)(K.a, {
                        error: Xe,
                        helperText: Xe ? 'Please enter a valid URL' : '',
                        value: ze,
                        onChange: function (e) {
                          $e(!1), Ge(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'linkUrl',
                        label: 'Link URL',
                        id: 'linkUrl',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      sm: 5,
                      children: Object(n.jsx)(K.a, {
                        error: at,
                        helperText: at
                          ? 'Please enter a description for the link'
                          : '',
                        value: Qe,
                        onChange: function (e) {
                          nt(!1), Ve(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'linkDescription',
                        label: 'Link Description',
                        type: 'linkDescription',
                        id: 'linkDescription',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      container: !0,
                      xs: 12,
                      sm: 2,
                      justify: 'center',
                      children: Object(n.jsx)(S.a, {
                        color: 'secondary',
                        variant: 'outlined',
                        onClick: function () {
                          var e = new RegExp(
                            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
                          );
                          if (e.test(ze) && Qe) {
                            var t = { url: ze, name: Qe };
                            return (
                              He([].concat(Object(q.a)(qe), [t])),
                              Ge(''),
                              void Ve('')
                            );
                          }
                          e.test(ze) || $e(!0), Qe || nt(!0);
                        },
                        children: 'Add Link',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(T.a, {
                        color: 'textSecondary',
                        variant: 'h4',
                        style: {
                          fontWeight: '400',
                          flexGrow: '1',
                          marginTop: '1.4rem',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                        },
                        children: 'Location',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        value: Te,
                        onChange: function (e) {
                          Ue(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'locationAddress',
                        label: 'Location Address',
                        id: 'locationAddress',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsx)(K.a, {
                        error: ct,
                        helperText: ct
                          ? 'Please enter a valid URL'
                          : 'Copy your Location URL from google maps and paste it here',
                        value: Ne,
                        onChange: function (e) {
                          ot(!1), Be(e.target.value);
                        },
                        variant: 'outlined',
                        fullWidth: !0,
                        name: 'locationLink',
                        label: 'Location Link',
                        type: 'locationLink',
                        id: 'locationLink',
                      }),
                    }),
                    Object(n.jsx)(A.a, {
                      item: !0,
                      container: !0,
                      justify: 'center',
                      xs: 12,
                      children: Object(n.jsx)(S.a, {
                        type: 'submit',
                        size: 'large',
                        variant: 'contained',
                        color: 'primary',
                        className: t.submit,
                        children: 'Create Card',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        pe = a(123),
        ge = a(222),
        xe = a(115),
        fe = a.n(xe),
        Oe = a(116),
        ye = a.n(Oe),
        ve = a(117),
        Se = a.n(ve),
        we = a(118),
        Ce = a.n(we),
        Ie = a(119),
        Ee = a.n(Ie),
        Le = a(221),
        Re = a(5);
      var Ae = function (e) {
          var t = e.color,
            a = e.href,
            r = e.children,
            i = Object(Re.a)(function (e) {
              return { root: { color: t } };
            })(H.a);
          return Object(n.jsx)(i, {
            'aria-label': 'Youtube',
            color: 'primary',
            component: Le.a,
            href: a,
            children: r,
          });
        },
        ke = Object(O.a)({
          root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 320,
            minWidth: 320,
            borderRadius: 10,
            marginBottom: '.5rem',
            backgroundColor: 'white',
          },
          large: {
            marginLeft: '.5rem',
            width: 100,
            height: 100,
            marginBottom: '.5rem',
          },
          firstCard: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-begin',
            alignItems: 'center',
            paddingBottom: '.5rem',
            width: '100%',
            paddingTop: '.5rem',
          },
          nameTitle: { paddingLeft: '1rem', alignSelf: 'flex-end' },
        }),
        Te = Object(pe.a)({
          palette: {
            primary: { main: '#0088cc' },
            secondary: { main: '#25D366', contrastText: '#fff' },
            contrastThreshold: 3,
            tonalOffset: 0.2,
          },
          typography: {
            button: { textTransform: 'none' },
            fontFamily: [
              '"Poppins"',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
        });
      var Ue = function (e) {
          var t = e.match,
            a = ke(),
            i = Object(s.c)(function (e) {
              return e.cardInfo.card;
            }),
            c = Object(s.c)(function (e) {
              return e.cardInfo.error;
            }),
            o = Object(s.b)();
          if (
            (Object(r.useEffect)(
              function () {
                var e;
                o(
                  ((e = t.params.cardUrlId),
                  (function () {
                    var t = Object(u.a)(
                      d.a.mark(function t(a) {
                        var n;
                        return d.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: 'CARD_REQUEST' }),
                                    (t.next = 4),
                                    b.a.get('/api/cards/'.concat(e))
                                  );
                                case 4:
                                  (n = t.sent),
                                    a({
                                      type: 'CARD_SUCCESS',
                                      payload: n.data,
                                    }),
                                    (t.next = 11);
                                  break;
                                case 8:
                                  (t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    a({
                                      type: 'CARD_FAIL',
                                      payload:
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.response,
                                    });
                                case 11:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                );
              },
              [o, t.params.cardUrlId]
            ),
            i.name)
          ) {
            var l = i.whatsApp || i.telegramId || i.contactNumber || i.email,
              j = i.instagram || i.twitter || i.youtibe || i.linkedIn,
              m = i.links.length > 0,
              h = i.locationAddress || i.locationLink;
            return Object(n.jsxs)(A.a, {
              container: !0,
              direction: 'column',
              justify: 'center',
              alignItems: 'center',
              style: {
                backgroundColor: '#f7f7f7',
                minHeight: '100vh',
                paddingTop: '1rem',
              },
              children: [
                Object(n.jsxs)(I.a, {
                  className: a.root,
                  boxShadow: 3,
                  padding: 1,
                  margin: 2,
                  children: [
                    Object(n.jsxs)('div', {
                      className: a.firstCard,
                      children: [
                        Object(n.jsx)(D.a, {
                          src: i.picture,
                          className: a.large,
                        }),
                        Object(n.jsxs)('div', {
                          className: a.nameTitle,
                          children: [
                            Object(n.jsx)(T.a, {
                              variant: 'h5',
                              style: {
                                fontWeight: '500',
                                marginBottom: '.3rem',
                              },
                              children: i.name,
                            }),
                            Object(n.jsx)(T.a, {
                              variant: 'h6',
                              style: {
                                marginBottom: '.5rem',
                                fontWeight: '300',
                              },
                              children: i.title,
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)(T.a, {
                      variant: 'body1',
                      style: { marginBottom: '.7rem', padding: '0 .5rem' },
                      children: i.description,
                    }),
                  ],
                }),
                l &&
                  Object(n.jsxs)(I.a, {
                    className: a.root,
                    boxShadow: 3,
                    padding: 1,
                    margin: 2,
                    children: [
                      Object(n.jsx)(T.a, {
                        variant: 'h6',
                        style: {
                          fontWeight: '700',
                          flexGrow: '1',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                          marginBottom: '.2rem',
                        },
                        children: 'Contact',
                      }),
                      Object(n.jsx)(A.a, {
                        item: !0,
                        container: !0,
                        direction: 'row',
                        justify: 'center',
                        alignItems: 'center',
                        xs: 12,
                        style: { marginBottom: '.9rem' },
                        children: Object(n.jsxs)(ge.a, {
                          theme: Te,
                          children: [
                            Object(n.jsx)(S.a, {
                              variant: 'contained',
                              color: 'secondary',
                              className: a.button,
                              startIcon: Object(n.jsx)(fe.a, {}),
                              style: {
                                margin: '.3rem',
                                textDecoration: 'none',
                                color: 'white',
                              },
                              component: Le.a,
                              href: 'https://wa.me/'.concat(i.whatsApp),
                              children: 'WhatsApp',
                            }),
                            Object(n.jsx)(S.a, {
                              variant: 'contained',
                              color: 'primary',
                              className: a.button,
                              startIcon: Object(n.jsx)(ye.a, {}),
                              style: {
                                margin: '.3rem',
                                textDecoration: 'none',
                                color: 'white',
                              },
                              component: Le.a,
                              href: 'https://t.me/'.concat(i.telegramId),
                              children: 'Telegram',
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)(A.a, {
                        item: !0,
                        container: !0,
                        direction: 'row',
                        justify: 'flex-start',
                        alignItems: 'center',
                        xs: 12,
                        style: { margin: '.2rem auto .9rem .5rem' },
                        children: Object(n.jsxs)(Le.a, {
                          href: 'tel:'.concat(i.contactNumber),
                          color: 'textPrimary',
                          style: { display: 'flex' },
                          children: [
                            Object(n.jsx)(Se.a, {
                              style: { marginRight: '.5rem' },
                            }),
                            Object(n.jsx)(T.a, {
                              variant: 'body1',
                              children: i.contactNumber,
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)(A.a, {
                        item: !0,
                        container: !0,
                        direction: 'row',
                        justify: 'flex-start',
                        alignItems: 'center',
                        xs: 12,
                        style: { margin: '0 auto .8rem .5rem' },
                        children: Object(n.jsxs)(Le.a, {
                          href: 'mailto:'.concat(i.email),
                          color: 'textPrimary',
                          style: { display: 'flex' },
                          children: [
                            Object(n.jsx)(Ce.a, {
                              style: { marginRight: '.5rem' },
                            }),
                            Object(n.jsx)(T.a, {
                              variant: 'body1',
                              children: i.email,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                j &&
                  Object(n.jsxs)(I.a, {
                    className: a.root,
                    boxShadow: 3,
                    padding: 1,
                    margin: 2,
                    children: [
                      Object(n.jsx)(T.a, {
                        variant: 'h6',
                        style: {
                          fontWeight: '700',
                          flexGrow: '1',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                          marginBottom: '.2rem',
                        },
                        children: 'Socia Media',
                      }),
                      Object(n.jsxs)(A.a, {
                        item: !0,
                        container: !0,
                        direction: 'row',
                        justify: 'center',
                        alignItems: 'center',
                        xs: 12,
                        style: { marginBottom: '.5rem' },
                        children: [
                          i.instagram &&
                            Object(n.jsx)(Ae, {
                              color: '#E1306C',
                              href: 'https://www.instagram.com/'.concat(
                                i.instagram
                              ),
                              children: Object(n.jsx)(ae.a, {
                                fontSize: 'large',
                              }),
                            }),
                          i.twitter &&
                            Object(n.jsx)(Ae, {
                              color: '#00acee',
                              href: 'https://twitter.com/'.concat(i.twitter),
                              children: Object(n.jsx)(X.a, {
                                fontSize: 'large',
                              }),
                            }),
                          i.youtube &&
                            Object(n.jsx)(Ae, {
                              color: '#FF0000',
                              href: i.youtube,
                              children: Object(n.jsx)(re.a, {
                                fontSize: 'large',
                              }),
                            }),
                          i.linkedIn &&
                            Object(n.jsx)(Ae, {
                              color: '#0e76a8',
                              href: i.linkedIn,
                              children: Object(n.jsx)(se.a, {
                                fontSize: 'large',
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                m &&
                  Object(n.jsxs)(I.a, {
                    className: a.root,
                    boxShadow: 3,
                    padding: 1,
                    margin: 2,
                    children: [
                      Object(n.jsx)(T.a, {
                        variant: 'h6',
                        style: {
                          fontWeight: '700',
                          flexGrow: '1',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                          marginBottom: '.5rem',
                        },
                        children: 'Links',
                      }),
                      i.links.map(function (e, t) {
                        return Object(n.jsx)(
                          A.a,
                          {
                            item: !0,
                            container: !0,
                            direction: 'row',
                            justify: 'flex-start',
                            alignItems: 'center',
                            xs: 12,
                            style: { margin: '0 auto .6rem .5rem' },
                            children: Object(n.jsx)(S.a, {
                              variant: 'text',
                              color: 'default',
                              href: e.url,
                              startIcon: Object(n.jsx)(ce.a, {}),
                              children: e.name,
                            }),
                          },
                          t
                        );
                      }),
                    ],
                  }),
                h &&
                  Object(n.jsxs)(I.a, {
                    className: a.root,
                    boxShadow: 3,
                    padding: 1,
                    margin: 2,
                    style: { marginBottom: '2rem' },
                    children: [
                      Object(n.jsx)(T.a, {
                        variant: 'h6',
                        style: {
                          fontWeight: '700',
                          flexGrow: '1',
                          marginRight: 'auto',
                          marginLeft: '.5rem',
                          marginBottom: '.5rem',
                        },
                        children: 'Location',
                      }),
                      i.locationAddress &&
                        Object(n.jsx)(T.a, {
                          variant: 'body1',
                          style: {
                            marginBottom: '.7rem',
                            padding: '0 .5rem',
                            marginRight: 'auto',
                          },
                          children: i.locationAddress,
                        }),
                      i.locationLink &&
                        Object(n.jsx)(A.a, {
                          item: !0,
                          container: !0,
                          direction: 'row',
                          justify: 'center',
                          alignItems: 'center',
                          xs: 12,
                          style: { marginBottom: '.9rem', marginTop: '.5rem' },
                          children: Object(n.jsx)(S.a, {
                            variant: 'contained',
                            color: 'default',
                            href: i.locationLink,
                            startIcon: Object(n.jsx)(Ee.a, {}),
                            children: 'Navigate To Address',
                          }),
                        }),
                    ],
                  }),
                Object(n.jsx)(I.a, {
                  my: 1,
                  children: Object(n.jsxs)(T.a, {
                    variant: 'body2',
                    color: 'textSecondary',
                    align: 'center',
                    children: [
                      'Created by ',
                      Object(n.jsx)(Le.a, {
                        color: 'primary',
                        href: 'https://one--link.herokuapp.com/',
                        children: 'OneLink',
                      }),
                      ' ',
                    ],
                  }),
                }),
              ],
            });
          }
          return c
            ? Object(n.jsx)(A.a, {
                container: !0,
                direction: 'column',
                justify: 'center',
                alignItems: 'center',
                style: { backgroundColor: '#f7f7f7', height: '100vh' },
                children: Object(n.jsxs)(U.a, {
                  severity: 'error',
                  children: [Object(n.jsx)(W.a, { children: 'Error' }), c],
                }),
              })
            : Object(n.jsx)(A.a, {
                container: !0,
                direction: 'column',
                justify: 'center',
                alignItems: 'center',
                style: { backgroundColor: '#f7f7f7', height: '100vh' },
                children: Object(n.jsx)(k.a, {}),
              });
        },
        We = a(224),
        De = a(225),
        Ne = a(230),
        Be = a(87),
        Fe = a.n(Be),
        Pe = a(223);
      a(174);
      function ze() {
        return Object(n.jsxs)(T.a, {
          variant: 'body2',
          color: 'textSecondary',
          align: 'center',
          children: [
            'Copyright \xa9 ',
            Object(n.jsx)(Le.a, {
              color: 'inherit',
              href: 'https://material-ui.com/',
              children: 'OneLink',
            }),
            ' ',
            new Date().getFullYear(),
            '.',
          ],
        });
      }
      var Ge = Object(O.a)(function (e) {
        return {
          paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          avatar: {
            margin: e.spacing(1),
            backgroundColor: e.palette.secondary.main,
          },
          sigInForm: { padding: e.spacing(1) },
          form: { width: '100%', marginTop: e.spacing(1) },
          submit: { margin: e.spacing(3, 0, 2) },
        };
      });
      function Ye() {
        var e = Object(C.f)(),
          t = Ge(),
          a = Object(r.useState)(''),
          i = Object(R.a)(a, 2),
          c = i[0],
          o = i[1],
          l = Object(r.useState)(''),
          j = Object(R.a)(l, 2),
          m = j[0],
          h = j[1],
          p = Object(s.b)(),
          g = Object(s.c)(function (e) {
            return e.userLogin;
          }),
          x = g.loading,
          f = g.loginError,
          O = g.userInfo;
        Object(r.useEffect)(
          function () {
            O && O.token && e.push('/dashboard');
          },
          [O, e]
        );
        return Object(n.jsx)('div', {
          className: 'SignIn__container',
          children: Object(n.jsxs)(Pe.a, {
            component: 'main',
            maxWidth: 'xs',
            className: 'signInForm',
            children: [
              Object(n.jsx)('div', { className: 'blur' }),
              Object(n.jsx)(We.a, {}),
              Object(n.jsxs)('div', {
                className: t.paper,
                children: [
                  Object(n.jsx)(D.a, {
                    className: t.avatar,
                    children: Object(n.jsx)(Fe.a, {}),
                  }),
                  Object(n.jsx)(T.a, {
                    component: 'h1',
                    variant: 'h5',
                    children: 'Sign in',
                  }),
                  Object(n.jsxs)('form', {
                    className: t.form,
                    onSubmit: function (e) {
                      e.preventDefault(),
                        p(
                          (function (e, t) {
                            return (function () {
                              var a = Object(u.a)(
                                d.a.mark(function a(n) {
                                  var r, i;
                                  return d.a.wrap(
                                    function (a) {
                                      for (;;)
                                        switch ((a.prev = a.next)) {
                                          case 0:
                                            return (
                                              (a.prev = 0),
                                              n({
                                                type: 'USER_LOGIN_REGISTER_REQUEST',
                                              }),
                                              (r = {
                                                headers: {
                                                  'Content-Type':
                                                    'application/json',
                                                },
                                              }),
                                              (a.next = 5),
                                              b.a.post(
                                                '/api/users/login',
                                                { email: e, password: t },
                                                r
                                              )
                                            );
                                          case 5:
                                            (i = a.sent),
                                              n({
                                                type: 'USER_LOGIN_REGISTER_SUCCESS',
                                                payload: i.data,
                                              }),
                                              localStorage.setItem(
                                                'userInfo',
                                                JSON.stringify(i.data)
                                              ),
                                              (a.next = 13);
                                            break;
                                          case 10:
                                            (a.prev = 10),
                                              (a.t0 = a.catch(0)),
                                              n({
                                                type: 'USER_LOGIN_FAIL',
                                                payload:
                                                  a.t0.response &&
                                                  a.t0.response.data.message
                                                    ? a.t0.response.data.message
                                                    : a.t0.response,
                                              });
                                          case 13:
                                          case 'end':
                                            return a.stop();
                                        }
                                    },
                                    a,
                                    null,
                                    [[0, 10]]
                                  );
                                })
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })();
                          })(c, m)
                        );
                    },
                    children: [
                      Object(n.jsx)(K.a, {
                        onChange: function (e) {
                          o(e.target.value);
                        },
                        variant: 'outlined',
                        margin: 'normal',
                        required: !0,
                        fullWidth: !0,
                        id: 'email',
                        label: 'Email Address',
                        name: 'email',
                        autoComplete: 'email',
                        autoFocus: !0,
                      }),
                      Object(n.jsx)(K.a, {
                        onChange: function (e) {
                          h(e.target.value);
                        },
                        variant: 'outlined',
                        margin: 'normal',
                        required: !0,
                        fullWidth: !0,
                        name: 'password',
                        label: 'Password',
                        type: 'password',
                        id: 'password',
                        autoComplete: 'current-password',
                      }),
                      Object(n.jsx)(De.a, {
                        control: Object(n.jsx)(Ne.a, {
                          value: 'remember',
                          color: 'primary',
                        }),
                        label: 'Remember me',
                      }),
                      Object(n.jsx)(S.a, {
                        type: 'submit',
                        fullWidth: !0,
                        variant: 'contained',
                        color: 'primary',
                        className: t.submit,
                        children: 'Sign In',
                      }),
                      f &&
                        Object(n.jsx)(A.a, {
                          container: !0,
                          direction: 'column',
                          justify: 'center',
                          alignItems: 'center',
                          style: { marginBottom: '.5rem' },
                          children: Object(n.jsxs)(U.a, {
                            severity: 'error',
                            variant: 'outlined',
                            style: { backgroundColor: '#ff000012' },
                            children: [
                              Object(n.jsx)(W.a, { children: 'Error' }),
                              f,
                            ],
                          }),
                        }),
                      x &&
                        Object(n.jsx)(A.a, {
                          container: !0,
                          direction: 'column',
                          justify: 'center',
                          alignItems: 'center',
                          children: Object(n.jsx)(k.a, {}),
                        }),
                      Object(n.jsx)(A.a, {
                        container: !0,
                        justify: 'center',
                        children: Object(n.jsx)(A.a, {
                          item: !0,
                          children: Object(n.jsx)(S.a, {
                            variant: 'text',
                            color: 'primary',
                            component: w.b,
                            to: '/signup',
                            children: "Don't have an account? Sign Up",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(I.a, { mt: 8, children: Object(n.jsx)(ze, {}) }),
            ],
          }),
        });
      }
      a(175);
      function Ze() {
        return Object(n.jsxs)(T.a, {
          variant: 'body2',
          color: 'textSecondary',
          align: 'center',
          children: [
            'Copyright \xa9 ',
            Object(n.jsx)(Le.a, {
              color: 'inherit',
              href: 'https://material-ui.com/',
              children: 'OneLink',
            }),
            ' ',
            new Date().getFullYear(),
            '.',
          ],
        });
      }
      var Qe = Object(O.a)(function (e) {
        return {
          paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          avatar: {
            margin: e.spacing(1),
            backgroundColor: e.palette.secondary.main,
          },
          form: { width: '100%', marginTop: e.spacing(3) },
          submit: { margin: e.spacing(3, 0, 2) },
        };
      });
      function Ve() {
        var e = Qe(),
          t = Object(C.f)(),
          a = Object(r.useState)(''),
          i = Object(R.a)(a, 2),
          c = i[0],
          o = i[1],
          l = Object(r.useState)(''),
          j = Object(R.a)(l, 2),
          m = j[0],
          h = j[1],
          p = Object(r.useState)(!1),
          g = Object(R.a)(p, 2),
          x = g[0],
          f = g[1],
          O = Object(r.useState)(!1),
          y = Object(R.a)(O, 2),
          v = y[0],
          E = y[1],
          L = Object(r.useState)(!1),
          N = Object(R.a)(L, 2),
          B = N[0],
          F = N[1],
          P = Object(r.useState)(''),
          z = Object(R.a)(P, 2),
          G = z[0],
          Y = z[1],
          Z = Object(s.b)(),
          Q = Object(s.c)(function (e) {
            return e.userLogin;
          }),
          V = Q.loading,
          J = Q.registerError,
          _ = Q.userInfo,
          q = Object(r.useRef)(),
          H = Object(r.useRef)();
        Object(r.useEffect)(
          function () {
            _ && _.token && t.push('/dashboard');
          },
          [_, t]
        );
        return Object(n.jsx)('div', {
          className: 'SignUp__container',
          children: Object(n.jsxs)(Pe.a, {
            component: 'main',
            maxWidth: 'xs',
            className: 'signInForm',
            children: [
              Object(n.jsx)(We.a, {}),
              Object(n.jsxs)('div', {
                className: e.paper,
                children: [
                  Object(n.jsx)(D.a, {
                    className: e.avatar,
                    children: Object(n.jsx)(Fe.a, {}),
                  }),
                  Object(n.jsx)(T.a, {
                    component: 'h1',
                    variant: 'h5',
                    children: 'Sign up',
                  }),
                  Object(n.jsxs)('form', {
                    className: e.form,
                    noValidate: !0,
                    onSubmit: function (e) {
                      e.preventDefault(),
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                          c
                        ) || f(!0),
                        m.length < 6 && E(!0),
                        x ||
                          v ||
                          B ||
                          Z(
                            (function (e, t) {
                              return (function () {
                                var a = Object(u.a)(
                                  d.a.mark(function a(n) {
                                    var r, i;
                                    return d.a.wrap(
                                      function (a) {
                                        for (;;)
                                          switch ((a.prev = a.next)) {
                                            case 0:
                                              return (
                                                (a.prev = 0),
                                                n({
                                                  type: 'USER_LOGIN_REGISTER_REQUEST',
                                                }),
                                                (r = {
                                                  headers: {
                                                    'Content-Type':
                                                      'application/json',
                                                  },
                                                }),
                                                (a.next = 5),
                                                b.a.post(
                                                  '/api/users/register',
                                                  { email: e, password: t },
                                                  r
                                                )
                                              );
                                            case 5:
                                              (i = a.sent),
                                                n({
                                                  type: 'USER_LOGIN_REGISTER_SUCCESS',
                                                  payload: i.data,
                                                }),
                                                localStorage.setItem(
                                                  'userInfo',
                                                  JSON.stringify(i.data)
                                                ),
                                                (a.next = 13);
                                              break;
                                            case 10:
                                              (a.prev = 10),
                                                (a.t0 = a.catch(0)),
                                                n({
                                                  type: 'USER_REGISTER_FAIL',
                                                  payload:
                                                    a.t0.response &&
                                                    a.t0.response.data.message
                                                      ? a.t0.response.data
                                                          .message
                                                      : a.t0.response,
                                                });
                                            case 13:
                                            case 'end':
                                              return a.stop();
                                          }
                                      },
                                      a,
                                      null,
                                      [[0, 10]]
                                    );
                                  })
                                );
                                return function (e) {
                                  return a.apply(this, arguments);
                                };
                              })();
                            })(c, m)
                          );
                    },
                    children: [
                      Object(n.jsxs)(A.a, {
                        container: !0,
                        spacing: 2,
                        children: [
                          Object(n.jsx)(A.a, {
                            item: !0,
                            xs: 12,
                            children: Object(n.jsx)(K.a, {
                              value: c,
                              error: x,
                              helperText: x ? 'Please enter a valid email' : '',
                              ref: q,
                              onChange: function (e) {
                                f(!1), o(e.target.value);
                              },
                              variant: 'outlined',
                              required: !0,
                              fullWidth: !0,
                              id: 'email',
                              label: 'Email Address',
                              name: 'email',
                              autoComplete: 'email',
                            }),
                          }),
                          Object(n.jsx)(A.a, {
                            item: !0,
                            xs: 12,
                            children: Object(n.jsx)(K.a, {
                              value: m,
                              error: v,
                              helperText: v
                                ? 'Password must be at least 6 characters'
                                : '',
                              ref: H,
                              onChange: function (e) {
                                E(!1), h(e.target.value);
                              },
                              variant: 'outlined',
                              required: !0,
                              fullWidth: !0,
                              name: 'password',
                              label: 'Password',
                              type: 'password',
                              id: 'password',
                              autoComplete: 'current-password',
                            }),
                          }),
                          Object(n.jsx)(A.a, {
                            item: !0,
                            xs: 12,
                            children: Object(n.jsx)(K.a, {
                              value: G,
                              error: B,
                              helperText: B ? 'Passwords do not match ' : '',
                              onChange: function (e) {
                                Y(e.target.value),
                                  m === e.target.value || '' === e.target.value
                                    ? F(!1)
                                    : F(!0);
                              },
                              variant: 'outlined',
                              required: !0,
                              fullWidth: !0,
                              name: 'confirmPassword',
                              label: 'Confirm Password',
                              type: 'password',
                              id: 'confirmPassword',
                              autoComplete: 'current-password',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsx)(S.a, {
                        type: 'submit',
                        fullWidth: !0,
                        variant: 'contained',
                        color: 'primary',
                        className: e.submit,
                        children: 'Sign Up',
                      }),
                      J &&
                        Object(n.jsx)(A.a, {
                          container: !0,
                          direction: 'column',
                          justify: 'center',
                          alignItems: 'center',
                          style: { marginBottom: '.5rem' },
                          children: Object(n.jsxs)(U.a, {
                            severity: 'error',
                            variant: 'outlined',
                            style: { backgroundColor: '#ff000012' },
                            children: [
                              Object(n.jsx)(W.a, { children: 'Error' }),
                              J,
                            ],
                          }),
                        }),
                      V &&
                        Object(n.jsx)(A.a, {
                          container: !0,
                          direction: 'column',
                          justify: 'center',
                          alignItems: 'center',
                          children: Object(n.jsx)(k.a, {}),
                        }),
                      Object(n.jsx)(A.a, {
                        container: !0,
                        justify: 'center',
                        children: Object(n.jsx)(A.a, {
                          item: !0,
                          children: Object(n.jsx)(S.a, {
                            variant: 'text',
                            color: 'primary',
                            component: w.b,
                            to: '/signin',
                            children: 'Already have an account? Sign In',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(I.a, { mt: 5, children: Object(n.jsx)(Ze, {}) }),
            ],
          }),
        });
      }
      var Je = a(234),
        _e = a(88),
        qe = a(120),
        He = Object(pe.a)({
          typography: {
            fontFamily: [
              '"Poppins"',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            button: { textTransform: 'none' },
          },
        });
      He = Object(Je.a)(He);
      var Ke = function () {
          var e = Object(qe.a)();
          return (
            e.listen(function (e) {
              _e.a.initialize('UA-187203967-1'),
                _e.a.set({ page: e.pathname }),
                _e.a.pageview(e.pathname);
            }),
            Object(n.jsx)(ge.a, {
              theme: He,
              children: Object(n.jsx)('div', {
                className: 'App',
                children: Object(n.jsx)(w.a, {
                  history: e,
                  children: Object(n.jsx)('div', {
                    children: Object(n.jsxs)(C.c, {
                      children: [
                        Object(n.jsx)(C.a, {
                          path: '/card/:cardUrlId',
                          exact: !0,
                          component: Ue,
                        }),
                        Object(n.jsxs)(r.Fragment, {
                          children: [
                            Object(n.jsx)(L, { className: 'App__Header' }),
                            Object(n.jsx)(C.a, {
                              path: '/',
                              exact: !0,
                              component: be,
                            }),
                            Object(n.jsx)(C.a, {
                              path: '/signin',
                              exact: !0,
                              component: Ye,
                            }),
                            Object(n.jsx)(C.a, {
                              path: '/signup',
                              exact: !0,
                              component: Ve,
                            }),
                            Object(n.jsx)(C.a, {
                              path: '/dashboard',
                              exact: !0,
                              component: _,
                            }),
                            Object(n.jsx)(C.a, {
                              path: '/cards/new',
                              exact: !0,
                              component: he,
                            }),
                            Object(n.jsx)(C.a, {
                              path: '/cards/edit/:cardid',
                              exact: !0,
                              component: de,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        Me = a(52),
        Xe = a(121),
        $e = a(122),
        et = a(25),
        tt = Object(Me.combineReducers)({
          cardInfo: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { card: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'CARD_REQUEST':
                return { loading: !0, card: {} };
              case 'CARD_SUCCESS':
                return { loading: !1, card: t.payload };
              case 'CARD_FAIL':
                return { loading: !1, error: t.payload, card: {} };
              default:
                return e;
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'USER_LOGIN_REGISTER_REQUEST':
                return { loading: !0 };
              case 'USER_LOGIN_REGISTER_SUCCESS':
                return { loading: !1, userInfo: t.payload };
              case 'USER_LOGIN_FAIL':
                return { loading: !1, loginError: t.payload, userInfo: {} };
              case 'USER_REGISTER_FAIL':
                return { loading: !1, registerError: t.payload, userInfo: {} };
              case 'USER_LOGOUT':
                return {};
              default:
                return e;
            }
          },
          userDetail: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'USER_DETAIL_REQUEST':
                return Object(et.a)({ loading: !0 }, e);
              case 'USER_DETAIL_SUCCESS':
                return { loading: !1, user: t.payload };
              case 'USER_DETAIL_FAIL':
                return { loading: !1, error: t.payload, user: null };
              case 'USER_LOGOUT':
                return {};
              default:
                return e;
            }
          },
          userCards: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cards: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'USER_CARDS_REQUEST':
                return Object(et.a)(Object(et.a)({}, e), {}, { loading: !0 });
              case 'USER_CARDS_SUCCESS':
                return { loading: !1, cards: t.payload, POSTerror: null };
              case 'USER_CARDS_FAIL':
                return { loading: !1, GETerror: t.payload, cards: [] };
              case 'USER_ADDCARD_REQUEST':
                return Object(et.a)(Object(et.a)({}, e), {}, { loading: !0 });
              case 'USER_ADDCARD_SUCCESS':
                return {
                  loading: !1,
                  cards: [].concat(Object(q.a)(e.cards), [t.payload]),
                };
              case 'USER_ADDCARD_FAIL':
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { loading: !1, POSTerror: t.payload }
                );
              case 'USER_DELETECARD_REQUEST':
                return Object(et.a)(Object(et.a)({}, e), {}, { loading: !0 });
              case 'USER_DELETECARD_SUCCESS':
                var a = e.cards.filter(function (e) {
                  return e._id !== t.payload;
                });
                return { loading: !1, cards: a };
              case 'USER_DELETECARD_FAIL':
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { loading: !1, DELETEerror: t.payload }
                );
              case 'USER_EDITCARD_REQUEST':
                return Object(et.a)(Object(et.a)({}, e), {}, { loading: !0 });
              case 'USER_EDITCARD_SUCCESS':
                var n = e.cards.filter(function (e) {
                  return e._id !== t.payload._id;
                });
                return n.push(t.payload), { loading: !1, cards: n };
              case 'USER_EDITCARD_FAIL':
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { loading: !1, EDITerror: t.payload }
                );
              case 'USER_LOGOUT':
                return {};
              default:
                return e;
            }
          },
        }),
        at = {
          userLogin: {
            userInfo: localStorage.getItem('userInfo')
              ? JSON.parse(localStorage.getItem('userInfo'))
              : null,
          },
        },
        nt = [Xe.a],
        rt = Object(Me.createStore)(
          tt,
          at,
          Object($e.composeWithDevTools)(Me.applyMiddleware.apply(void 0, nt))
        );
      c.a.render(
        Object(n.jsx)(s.a, { store: rt, children: Object(n.jsx)(Ke, {}) }),
        document.getElementById('root')
      );
    },
  },
  [[176, 1, 2]],
]);
//# sourceMappingURL=main.3a6e941d.chunk.js.map
