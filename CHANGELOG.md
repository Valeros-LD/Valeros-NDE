# Changelog

## [0.8.0](https://github.com/Valeros-LD/valeros-NDE/compare/valeros-nde-v0.7.0...valeros-nde-v0.8.0) (2026-08-04)


### Features

* add date widget for showing ISO8601 dates ([f2af698](https://github.com/Valeros-LD/valeros-NDE/commit/f2af698647a5d46752a2090a5f998875e8a3cbc6))
* allow changing page size from UI (or through URL) ([49f0cab](https://github.com/Valeros-LD/valeros-NDE/commit/49f0cab56160828ce0a0da5ab283179898466669))
* allow entering specific page through input field ([c461f07](https://github.com/Valeros-LD/valeros-NDE/commit/c461f07c7828ba5f15897abe52502ae752bc70de))
* hide config panel ([a7bb459](https://github.com/Valeros-LD/valeros-NDE/commit/a7bb45954fe90396c3d707d632a87f8f5fcaccbd))
* remove iiifManifest from associatedMedia array ([9057969](https://github.com/Valeros-LD/valeros-NDE/commit/905796908bdb59ab9f7ca94113e063a95eeeb606))
* support encodingFormat arrays for associatedMedia entries ([3560238](https://github.com/Valeros-LD/valeros-NDE/commit/35602380f3e1d7d73ec3a7e8447d370537643543))
* update default page size for list view ([6a8ae95](https://github.com/Valeros-LD/valeros-NDE/commit/6a8ae9553125d6bc82361da95af535d2340c5b63))


### Bug Fixes

* only update page title on actual search ([b727585](https://github.com/Valeros-LD/valeros-NDE/commit/b727585f98c26ecc41e12f4bbac8aedba153dec9))

## [0.7.0](https://github.com/Valeros-LD/valeros-NDE/compare/valeros-nde-v0.6.0...valeros-nde-v0.7.0) (2026-08-03)


### Features

* (temporarily) consider all links internal ([ef4421a](https://github.com/Valeros-LD/valeros-NDE/commit/ef4421a478e453c0118e11ae68f499ad6c147eda))
* (temporarily) store node iiifManifest in associatedMedia array for GraphQL ([387e2d6](https://github.com/Valeros-LD/valeros-NDE/commit/387e2d636a6ad5f9d8d3798682f92d43c52f2b76))
* add text widget ([dbd7a18](https://github.com/Valeros-LD/valeros-NDE/commit/dbd7a18409074ecbc0fad154b344eda74dcc3383))
* configure facets appearance ([62ad68c](https://github.com/Valeros-LD/valeros-NDE/commit/62ad68ce54726a9f595d24ec44985d642d603f89))
* get creative work by ID when using GraphQL ([38be733](https://github.com/Valeros-LD/valeros-NDE/commit/38be73391e2512498f8d24da3512bede10520268))
* get node details through GraphQL regardless of type ([85bb737](https://github.com/Valeros-LD/valeros-NDE/commit/85bb737a4db471146d0eb34dae199a0287cea4af))
* implement faceted filtering through GraphQL ([9136b18](https://github.com/Valeros-LD/valeros-NDE/commit/9136b18b2a4ebdc163e9dc9dcf752fb3cce30340))
* implement sorting through GraphQL ([65ab9e5](https://github.com/Valeros-LD/valeros-NDE/commit/65ab9e5c4b64849b1c0763df059f0fef53b8a9fa))
* prevent navigation when clicking inside interactive widgets ([0398b74](https://github.com/Valeros-LD/valeros-NDE/commit/0398b7440338811c94787880672e5918d72917b1))
* stop truncating facets ([85b613e](https://github.com/Valeros-LD/valeros-NDE/commit/85b613e25fe120368321a2fc93b8af837700729f))
* update GraphQL schema ([1a95f6d](https://github.com/Valeros-LD/valeros-NDE/commit/1a95f6dfa09dc257fa98ff2d78655504008ee8bd))


### Bug Fixes

* facet rendering issue ([f2f4528](https://github.com/Valeros-LD/valeros-NDE/commit/f2f45280c53e364919c5b8a5680cd70323342925))

## [0.6.0](https://github.com/Valeros-LD/valeros-NDE/compare/valeros-nde-v0.5.1...valeros-nde-v0.6.0) (2026-07-30)


### Features

* add GraphQL API service ([0e33280](https://github.com/Valeros-LD/valeros-NDE/commit/0e33280899e589a26156d9b6433d2bf561d15f69))
* add NDE partner logo to home page ([dcfa50d](https://github.com/Valeros-LD/valeros-NDE/commit/dcfa50da8f0a669b27240001448e9be7a8d0e0d9))
* retrieve labels for creative work facets ([9da6f6c](https://github.com/Valeros-LD/valeros-NDE/commit/9da6f6c3b652f51f44deb231348d4a0919b3cc71))
* show random placeholder in search bar ([1264fe5](https://github.com/Valeros-LD/valeros-NDE/commit/1264fe539154b268fa2a1b8a377a6f397ce710b9))

## [0.5.1](https://github.com/Valeros-LD/valeros-NDE/compare/valeros-nde-v0.5.0...valeros-nde-v0.5.1) (2026-06-22)


### Bug Fixes

* set page title for home page ([2b29617](https://github.com/Valeros-LD/valeros-NDE/commit/2b29617ce800d933a1e0dad8c5c81dae1a79260d))

## [0.5.0](https://github.com/Valeros-LD/valeros-NDE/compare/valeros-nde-v0.4.0...valeros-nde-v0.5.0) (2026-06-22)


### Features

* add home page ([eeb675e](https://github.com/Valeros-LD/valeros-NDE/commit/eeb675e7aa740d9f665d736f515f7b62809470be))

## [0.4.0](https://github.com/Valeros-LD/Valeros-NDE/compare/valeros-nde-v0.3.0...valeros-nde-v0.4.0) (2026-06-16)


### Features

* set max width for image cards ([40a6e62](https://github.com/Valeros-LD/Valeros-NDE/commit/40a6e62c2f3f423505bd5fb5b47aa9aa31367876))
* simplify widget configuration ([18bc460](https://github.com/Valeros-LD/Valeros-NDE/commit/18bc460df3be559e2fd6030724c4549901980955))
* update config UI warning text ([3b301c6](https://github.com/Valeros-LD/Valeros-NDE/commit/3b301c6686061e7394b4b6d40def5546bf216a3f))


### Documentation

* add video captions ([1fda1eb](https://github.com/Valeros-LD/Valeros-NDE/commit/1fda1eb8108b0e6f59b3c8a7ec35280a22f74883))
* update widgets video ([fec8e6c](https://github.com/Valeros-LD/Valeros-NDE/commit/fec8e6c8e67579619addb148dd2d9dc06cbefc7a))

## [0.3.0](https://github.com/Valeros-LD/Valeros-NDE/compare/valeros-nde-v0.2.0...valeros-nde-v0.3.0) (2026-06-10)


### Features

* add theme-switcher component ([be466bb](https://github.com/Valeros-LD/Valeros-NDE/commit/be466bb0df64b17d13567ca59ba82e7b6c8bb261))
* add theme-switcher component ([f388b08](https://github.com/Valeros-LD/Valeros-NDE/commit/f388b08e03652e129fd880d6d0fa4172ceff2dab))
* only show view switcher if there are multiple views ([3ab9706](https://github.com/Valeros-LD/Valeros-NDE/commit/3ab97068024435e23a0e8f9bdc0e8b3c6825c64b))
* show error in UI if view is not found ([1dfbafd](https://github.com/Valeros-LD/Valeros-NDE/commit/1dfbafd9a1733906f06b097e8b049bfea05fa811))


### Bug Fixes

* prevent double rendering when switching views ([15a0de5](https://github.com/Valeros-LD/Valeros-NDE/commit/15a0de529198cc002cf3cec1601c9259664ab1b9))


### Reverts

* prevent double rendering when switching views ([d88a70b](https://github.com/Valeros-LD/Valeros-NDE/commit/d88a70bcac779cbd5a65d316c13969139fdeb48c))


### Documentation

* add widget positioning image ([85b8f44](https://github.com/Valeros-LD/Valeros-NDE/commit/85b8f4496e8a6761d821f73bcba7073455e7eca0))
* add widget positioning image for mobile ([4dfa5d4](https://github.com/Valeros-LD/Valeros-NDE/commit/4dfa5d4d345355e7b472c9db94041c1038fbc019))
* rearrange sections ([793b460](https://github.com/Valeros-LD/Valeros-NDE/commit/793b460fda1362cc2a51ff7a84be10cdc979f18f))
* update styling doc ([f05454f](https://github.com/Valeros-LD/Valeros-NDE/commit/f05454fb404ef007e62988680f547e5f28775d47))

## [0.2.0](https://github.com/Valeros-LD/Valeros-NDE/compare/valeros-nde-v0.1.0...valeros-nde-v0.2.0) (2026-06-08)


### Features

* add animations to config panel ([679fbed](https://github.com/Valeros-LD/Valeros-NDE/commit/679fbed25b23aa37f790b6097ed3ffee62bef8e9))
* close config panel on escape key press ([1f65cac](https://github.com/Valeros-LD/Valeros-NDE/commit/1f65cacea9f8e3202bf8507ccf0478d4fb9dc877))
