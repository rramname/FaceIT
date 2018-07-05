(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apicaller.service.ts":
/*!**************************************!*\
  !*** ./src/app/apicaller.service.ts ***!
  \**************************************/
/*! exports provided: ApicallerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallerService", function() { return ApicallerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApicallerService = /** @class */ (function () {
    function ApicallerService(http) {
        this.http = http;
    }
    ApicallerService.prototype.detectFaces = function (data) {
        return this.http.post("https://faceitnow.herokuapp.com/getFaceData", data);
    };
    ApicallerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApicallerService);
    return ApicallerService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#containerDiv{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    align-items: center;\r\n        grid-template-areas: \r\n    \"header\"\r\n    \"button\"\r\n    \"chars\"\r\n    \"image\"\r\n}\r\n\r\n#imgDiv{\r\n    \r\n    background-repeat: no-repeat;\r\n    border: 1px solid #bbb;\r\n    border: solid;\r\n    background-color: cadetblue;\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: image;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n    right: 0;\r\n    top:30%;\r\n}\r\n\r\n#face{\r\n    position: absolute;\r\n    border:solid;\r\n    \r\n}\r\n\r\n#charaDiv{\r\n    display: inline;\r\n    top:30%;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: chars;\r\n    font-size: xx-large;\r\n    background: blanchedalmond;\r\n}\r\n\r\n#error{\r\n    display: flex;\r\n    top:30%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: chars;\r\n    font-size: xx-large;\r\n}\r\n\r\n#titleDiv{\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: -webkit-xxx-large;\r\n    background-color: black;\r\n    color: sandybrown;\r\n    font-family: sans-serif;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: header;\r\n}\r\n\r\n.upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    padding: 2%;\r\n    width: 100vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: button\r\n  }\r\n\r\n.btn {\r\n    border: 2px solid gray;\r\n    color:white;\r\n    background-color:brown;\r\n    padding: 8px 20px;\r\n    border-radius: 8px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.upload-btn-wrapper input[type=file] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"containerDiv\" class=\"js\">\r\n  <div id=\"titleDiv\">\r\n    Welcome to {{ title }}\r\n  </div>\r\n  \r\n    <!-- <div class=\"fileUploadWrapper\">\r\n        <input type=\"file\" class=\"fileUpload\" id=\"fileUpload\" #fileInput (change)=\"fileChange($event)\">\r\n        \r\n    </div> -->\r\n\r\n    <div class=\"upload-btn-wrapper\">\r\n      <button class=\"btn\" >Upload a file</button>\r\n      <input type=\"file\" name=\"myfile\" (change)=\"fileChange($event)\"/>\r\n    </div>\r\n    <div id=\"charaDiv\" *ngIf=\"faceData\">\r\n        <ul>\r\n          <li>You look awesome at age {{faceData.faceAttributes.age}}</li>\r\n          <li><div *ngIf=\"faceData.faceAttributes.glasses=='NoGlasses'; else glasses\">Good that you dont have glasses yet!</div>\r\n              <ng-template #glasses>Those {{faceData.faceAttributes.glasses}} look great on you.</ng-template> </li> \r\n          \r\n          \r\n        </ul>\r\n    </div>\r\n  <div  *ngIf=\"this.faceData\" id=\"imgDiv\"><img id=\"imageContainer\" [src]=\"localUrl\" >  <div  *ngIf=\"this.faceData\" id=\"face\"></div></div>\r\n  <div *ngIf=\"error\" id=\"error\">{{errorMsg}}</div>\r\n\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_apicaller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/apicaller.service */ "./src/app/apicaller.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(appService, httpClient) {
        this.appService = appService;
        this.httpClient = httpClient;
        this.title = 'Face-it NOW';
        this.errorMsg = "";
        this.localUrl = "";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.error = false;
        this.faceData = null;
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            if (this.validateFile(file_1)) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.localUrl = event.target.result;
                    _this.appService.detectFaces(file_1).subscribe(function (face) {
                        _this.faceData = face[0];
                        console.log(_this.faceData);
                        setTimeout(function () { return _this.pointFace(face); }, 2000);
                    }, function (error) { _this.error = error; _this.errorMsg = "error occured"; });
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
        else {
        }
    };
    AppComponent.prototype.pointFace = function (face) {
        var oleft = document.getElementById("imageContainer").offsetLeft;
        var otop = document.getElementById("imageContainer").offsetTop;
        document.getElementById("face").style.left = oleft + face[0].faceRectangle.left + "px";
        document.getElementById("face").style.top = otop + face[0].faceRectangle.top + "px";
        document.getElementById("face").style.width = face[0].faceRectangle.width + "px";
        document.getElementById("face").style.height = face[0].faceRectangle.height + "px";
    };
    AppComponent.prototype.validateFile = function (file) {
        if (file.type !== "image/png") {
            this.error = true;
            this.errorMsg = "File format not supported.";
            return false;
        }
        else
            return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "inputEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('img'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "img", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_apicaller_service__WEBPACK_IMPORTED_MODULE_1__["ApicallerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _apicaller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicaller.service */ "./src/app/apicaller.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_intercepter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.intercepter */ "./src/app/header.intercepter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _apicaller_service__WEBPACK_IMPORTED_MODULE_3__["ApicallerService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _header_intercepter__WEBPACK_IMPORTED_MODULE_5__["HeaderIntercepter"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header.intercepter.ts":
/*!***************************************!*\
  !*** ./src/app/header.intercepter.ts ***!
  \***************************************/
/*! exports provided: HeaderIntercepter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIntercepter", function() { return HeaderIntercepter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderIntercepter = /** @class */ (function () {
    function HeaderIntercepter() {
    }
    HeaderIntercepter.prototype.intercept = function (req, next) {
        var request = req.clone({
            setHeaders: {
                'Content-Type': 'application/octet-stream',
            }
        });
        return next.handle(request);
    };
    HeaderIntercepter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HeaderIntercepter);
    return HeaderIntercepter;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Rohit\RnD\FaceITNow\faceIT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map