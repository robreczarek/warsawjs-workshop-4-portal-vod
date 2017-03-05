webpackJsonp([3,6],{

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
        this.dataLink = './assets/search.json';
    }
    VideoService.prototype.search = function () {
        return this.http.get(this.dataLink)
            .map(function (res) {
            var data = res.json();
            return data.items
                .filter(function (value) { return value.id.videoId; })
                .map(function (value) {
                var el = {
                    id: value.id.videoId,
                    description: value.snippet.description,
                    thumb: value.snippet.thumbnails.high.url,
                    title: value.snippet.title
                };
                return el;
            });
        });
    };
    VideoService.prototype.get = function (id) {
        return this.search()
            .map(function (videos) {
            return videos.filter(function (video) {
                return video.id === id;
            });
        })
            .map(function (videos) {
            return videos[0];
        });
    };
    VideoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], VideoService);
    return VideoService;
    var _a;
}());
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_video_service__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoDetailComponent = (function () {
    function VideoDetailComponent(videoService, activatedRoute) {
        this.videoService = videoService;
        this.activatedRoute = activatedRoute;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params.videoId; })
            .switchMap(function (id) { return _this.videoService.get(id); })
            .subscribe(function (video) {
            _this.video = video;
            console.log(video);
        });
    };
    VideoDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-video-detail',
            template: __webpack_require__(646),
            styles: [__webpack_require__(638)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_video_service__["a" /* VideoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_video_service__["a" /* VideoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_video_service__["a" /* VideoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], VideoDetailComponent);
    return VideoDetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=video-detail.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_video_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_player_video_player_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(378);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoListComponent = (function () {
    function VideoListComponent(videoService, modalService) {
        this.videoService = videoService;
        this.modalService = modalService;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.search().subscribe(function (videos) {
            _this.videos = videos;
        });
    };
    VideoListComponent.prototype.onVideoClick = function (video) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__video_player_video_player_component__["a" /* VideoPlayerComponent */]);
        modalRef.componentInstance.video = video;
    };
    VideoListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-video-list',
            template: __webpack_require__(647),
            styles: [__webpack_require__(639)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_video_service__["a" /* VideoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_video_service__["a" /* VideoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === 'function' && _b) || Object])
    ], VideoListComponent);
    return VideoListComponent;
    var _a, _b;
}());
//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_video_video__ = __webpack_require__(576);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoPlayerComponent = (function () {
    function VideoPlayerComponent() {
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_video_video__["a" /* Video */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_video_video__["a" /* Video */]) === 'function' && _a) || Object)
    ], VideoPlayerComponent.prototype, "video", void 0);
    VideoPlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-video-player',
            template: __webpack_require__(648),
            styles: [__webpack_require__(640)]
        }), 
        __metadata('design:paramtypes', [])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
    var _a;
}());
//# sourceMappingURL=video-player.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/editor/editor.module": [
		914,
		1
	],
	"./modules/user/user.module": [
		915,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 450;


/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(579);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_video_list_video_list_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_detail_video_detail_component__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_video_list_video_list_component__["a" /* VideoListComponent */] },
    { path: 'detail/:videoId', component: __WEBPACK_IMPORTED_MODULE_3__components_video_detail_video_detail_component__["a" /* VideoDetailComponent */] },
    { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
    { path: 'editor', loadChildren: './modules/editor/editor.module#EditorModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'WarsawJS VOD';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(642),
            styles: [__webpack_require__(634)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nav_bar_nav_bar_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_video_list_video_list_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_video_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_video_player_video_player_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_safe_pipe__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_search_pipe__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_video_detail_video_detail_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__ = __webpack_require__(378);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_video_player_video_player_component__["a" /* VideoPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_video_detail_video_detail_component__["a" /* VideoDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_video_service__["a" /* VideoService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__components_video_player_video_player_component__["a" /* VideoPlayerComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(643),
            styles: [__webpack_require__(635)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(644),
            styles: [__webpack_require__(636)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__(645),
            styles: [__webpack_require__(637)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = (function () {
    function Video() {
    }
    return Video;
}());
//# sourceMappingURL=video.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Pipe */])({ name: 'safe' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, searchFor) {
        if (!searchFor)
            return value;
        return value.filter(function (video) {
            return video.title.indexOf(searchFor) >= 0;
        });
    };
    SearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Pipe */])({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".card {\n  width: 20rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n  <template ngbModalContainer></template>\n</div>\n"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n\n  <footer>\n    <p>\n      &copy; WarsawJs 2017<br>\n      Workshop #4 - Portal VOD\n    </p>\n  </footer>\n</div>\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"display-3\">Warsaw JS</h1>\n        <p>We talk about JavaScript. Every month in Warsaw, Poland.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <a class=\"navbar-brand\" href=\"#\">VOD</a>\n\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" href=\"#\">WarsawJS <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"user\">Moje konto</a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"editor\">Editor</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "<app-video-player [video]=\"video\" *ngIf=\"video\"></app-video-player>\n"

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"album text-muted\">\n  <div class=\"container\">\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input [(ngModel)]=\"searchFor\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" name=\"searchFor\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n    Search for: {{searchFor}}\n\n    <div class=\"row\">\n      <div class=\"card\" *ngFor=\"let video of videos | search:searchFor\">\n        <a (click)=\"onVideoClick(video)\">\n          <img class=\"card-img-top\" [src]=\"video.thumb\" alt=\"Card image cap\">\n        </a>\n        <div class=\"card-block\">\n          <a [routerLink]=\"['/detail', video.id ]\"><h4 class=\"card-title\">{{video.title}}</h4></a>\n          <p class=\"card-text\">{{video.description}}</p>\n          <button [routerLink]=\"['/detail', video.id ]\" class=\"btn btn-primary\">Watch Video</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "<iframe width=\"420\" height=\"315\"\n  [src]=\"'https://www.youtube.com/embed/'+video.id | safe\">\n</iframe>\n"

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(451);


/***/ })

},[912]);
//# sourceMappingURL=main.bundle.js.map