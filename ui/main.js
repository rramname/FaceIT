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
        return this.http.post("https://tagtheface.herokuapp.com/getFaceData", data);
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

module.exports = "#containerDiv{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    align-items: center;\r\n        grid-template-areas: \r\n    \"header\"\r\n  \r\n    \"chars\"\r\n    \"image\"\r\n}\r\n\r\n#imgDiv{\r\n    background-repeat: no-repeat;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: image;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 40vw;\r\n    \r\n}\r\n\r\n.faceClass{\r\n    position: absolute;\r\n    border:solid;\r\n    \r\n    \r\n}\r\n\r\n#charaDiv{\r\n    \r\n    top:30%;    \r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: chars;\r\n    font-size: xx-large;\r\n    background-color: #acd8ff;\r\n    height: auto;\r\n    width: auto;\r\n    left: 10%;\r\n    color: crimson;\r\n    padding: 1%\r\n}\r\n\r\n#error{\r\n    display: flex;\r\n    top:30%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: chars;\r\n    font-size: xx-large;\r\n}\r\n\r\n#titleDiv{\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: -webkit-xxx-large;\r\n    background-color: black;\r\n    color: sandybrown;\r\n    font-family: sans-serif;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: header;\r\n}\r\n\r\n.btn {\r\n    border: 2px solid gray;\r\n    color:white;\r\n    background-color:brown;\r\n    padding: 8px 20px;\r\n    border-radius: 8px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n  }\r\n\r\n#help{\r\n    display: flex;\r\n    ALIGN-SELF: center;\r\n    margin-left: 1%;\r\n  }\r\n\r\n.tagClass{\r\n    position: absolute;\r\n      border: solid 2px green;\r\n  }\r\n\r\n#fileCtrl{\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 1%;\r\n  }\r\n\r\n#fileContainer{\r\n      position: absolute;\r\n  }\r\n\r\n.footer{\r\n      position: fixed;\r\n      bottom: 0;\r\n      width: 100%;\r\n      border-top: solid\r\n  }\r\n\r\n.imageInfo{\r\n      display: -ms-grid;\r\n      display: grid;\r\n          grid-template-areas: \r\n      \"image divider tags\"\r\n      \r\n }\r\n\r\n#tagDiv{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    grid-area: tags;\r\n    padding: 1%;\r\n    width: 40vw;\r\n \r\n  }\r\n\r\n.taggedface{\r\n      height: 10vh;\r\n      width: 10vw;\r\n  }\r\n\r\n#imageContainer{\r\n      -ms-grid-row-align: center;\r\n          align-self: center;\r\n  }\r\n\r\n#divider{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: divider;\r\n    width: 0.5vw;\r\n    display: flex;\r\n    justify-self: center;\r\n    background-color: cornflowerblue\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"containerDiv\" class=\"js\">\r\n  <section class=\"hero is-info is-bold\">\r\n    <div class=\"hero-body\" style=\"text-align: center\">\r\n      <div class=\"container\">\r\n        <h1 class=\"title\">\r\n          Welcome to {{title}}\r\n        </h1>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- <div class=\"fileUploadWrapper\">\r\n        <input type=\"file\" class=\"fileUpload\" id=\"fileUpload\" #fileInput (change)=\"fileChange($event)\">\r\n        \r\n    </div> -->\r\n  <div class=\"field\">\r\n    <div id=\"fileCtrl\" class=\"file is-large is-primary\">\r\n      <label class=\"file-label\">\r\n        <input class=\"file-input\" type=\"file\" name=\"myfile\" (change)=\"fileChange($event)\">\r\n        <span class=\"file-cta\">\r\n          <span class=\"file-icon\">\r\n            <i class=\"fas fa-upload\"></i>\r\n          </span>\r\n          <span class=\"file-label\">\r\n            Upload Image\r\n          </span>\r\n        </span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <div class=\"imageInfo\">\r\n    <div id=\"imgDiv\">\r\n      <img id=\"imageContainer\" [src]=\"localUrl\" />\r\n      <div *ngFor=\"let face of allFaces\">\r\n        <div class=\"faceClass\" id=\"{{face.faceId}}\" [style.left.px]=\"face.faceLeft\" [style.top.px]=\"face.faceTop\" [style.width.px]=\"face.faceWidth\"\r\n          [style.height.px]=\"face.faceHeight\"></div>\r\n      </div>\r\n      <!-- <div *ngFor=\"let div of allTags\"> \r\n          <div class=\"tagClass\"  [style.left.px]=\"div.faceLeft\" [style.top.px]=\"div.faceTop\" [style.width.px]= \"div.faceWidth\" [style.height.px]=\"div.faceHeight\" ></div>\r\n        </div> -->\r\n    </div>\r\n    <div id=\"divider\"></div>\r\n    <div id=\"tagDiv\">\r\n        <div *ngIf=\"tagImaged.length>0\">\r\n        <ul *ngFor=\"let faceData of tagImaged\">\r\n          \r\n           <li style=\"display: flex;align-items: center;\"><img class=\"taggedface\" [src]=\"faceData.url\"  /><b> Age :</b> {{faceData.features.age}} / <b> Glasses: </b>{{faceData.features.glasses}}</li>\r\n       \r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"error\" id=\"error\">{{errorMsg}}</div>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var _faceData_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faceData.model */ "./src/app/faceData.model.ts");
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
    function AppComponent(appService, httpClient, renderer) {
        this.appService = appService;
        this.httpClient = httpClient;
        this.renderer = renderer;
        this.title = 'Face-it NOW';
        this.errorMsg = "";
        this.localUrl = "";
        this.totalFaces = 0;
        this.allFaces = [];
        this.allTags = [];
        this.allFeatures = [];
        this.faceUrl = "";
        this.tagImaged = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.error = false;
        this.allFaces = [];
        this.allFeatures = [];
        this.tagImaged = [];
        this.imageBlob = null;
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            if (this.validateFile(file)) {
                this.getFeatures(file);
                var reader = new FileReader();
                reader.onload = function (event) {
                    var filePath = event.target.result;
                    var image = new Image();
                    image.src = event.target.result;
                    image.onload = function (event2) {
                        _this.resizeImageAndDetect(image);
                    };
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
        else {
        }
    };
    AppComponent.prototype.pointFace = function (face) {
        var faceData = new _faceData_model__WEBPACK_IMPORTED_MODULE_3__["FaceDataModel"]();
        var oleft = document.getElementById("imageContainer").offsetLeft;
        var otop = document.getElementById("imageContainer").offsetTop;
        faceData.faceId = face.faceId;
        faceData.faceLeft = oleft + face.faceRectangle.left;
        faceData.faceTop = otop + face.faceRectangle.top;
        faceData.faceWidth = face.faceRectangle.width;
        faceData.faceHeight = face.faceRectangle.height;
        var tagDiv = new _faceData_model__WEBPACK_IMPORTED_MODULE_3__["FaceDataModel"]();
        tagDiv.faceId = face.faceId;
        tagDiv.faceLeft = oleft + face.faceRectangle.left;
        tagDiv.faceTop = otop + face.faceRectangle.top;
        tagDiv.faceWidth = face.faceRectangle.width;
        tagDiv.faceHeight = face.faceRectangle.height;
        tagDiv.faceTop = tagDiv.faceTop + 20;
        this.allFaces.push(faceData);
        this.allTags.push(tagDiv);
    };
    AppComponent.prototype.showFaces = function () {
        this.faceData.array.forEach(function (element) {
            document.getElementById(element.faceId).style.display = "block";
        });
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
    AppComponent.prototype.resizeImageAndDetect = function (image) {
        var _this = this;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        if (image.width > 500)
            canvas.width = 500;
        else
            canvas.width = image.width;
        if (image.height > 500)
            canvas.height = 500;
        else
            canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
        var img = new Image();
        img.src = canvas.toDataURL();
        this.localUrl = canvas.toDataURL();
        //canvas.toBlob((blb => { this.tagFace(blb) }))
        this.imageBlob = canvas;
        canvas.toBlob((function (blb) { _this.detectFace(blb); }));
    };
    AppComponent.prototype.detectFace = function (blob) {
        var _this = this;
        this.appService.detectFaces(blob).subscribe(function (faces) {
            _this.totalFaces = faces.length;
            if (_this.totalFaces == 0) {
                _this.error = true;
                _this.errorMsg = "We could not detect faces in this picture. Please choose another picture.";
            }
            else {
                for (var i = 0; i < faces.length; i++) {
                    var faceInfo = faces[i];
                    console.log('got points');
                    console.log(faceInfo);
                    _this.pointFace(faceInfo);
                    _this.tagFace(faceInfo);
                }
                document.getElementById("imgDiv").style.display = "block";
            }
        }, function (error) { _this.error = error; _this.errorMsg = "error occured"; });
    };
    AppComponent.prototype.getFeatures = function (file) {
        var _this = this;
        this.appService.detectFaces(file).subscribe(function (faces) {
            _this.totalFaces = faces.length;
            if (_this.totalFaces == 0) {
                _this.error = true;
                _this.errorMsg = "We could not detect faces in this picture. Please choose another picture.";
            }
            else {
                for (var i = 0; i < faces.length; i++) {
                    var faceInfo = faces[i];
                    var faceFeatureData = new _faceData_model__WEBPACK_IMPORTED_MODULE_3__["FaceDataModel"]();
                    faceFeatureData.faceAttributes = faceInfo.faceAttributes;
                    _this.allFeatures.push(faceFeatureData);
                }
                document.getElementById("imgDiv").style.display = "block";
            }
        }, function (error) { _this.error = error; _this.errorMsg = "error occured"; });
    };
    AppComponent.prototype.tagFace = function (imageInfo) {
        console.log(imageInfo);
        var image = this.imageBlob;
        var canvas2 = document.createElement("canvas");
        var context2 = canvas2.getContext("2d");
        canvas2.width = 130;
        canvas2.height = 130;
        // context2.drawImage(image,
        //   194,
        //   175,
        //   130,
        //   130,
        //   0,
        //   0,
        //   130,
        //   130
        // );
        context2.drawImage(image, imageInfo.faceRectangle.left, imageInfo.faceRectangle.top, imageInfo.faceRectangle.width, imageInfo.faceRectangle.height, 0, 0, 100, 100);
        this.faceUrl = canvas2.toDataURL();
        this.tagImaged.push({ url: canvas2.toDataURL(), features: imageInfo.faceAttributes });
        console.log(this.tagImaged);
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
        __metadata("design:paramtypes", [src_app_apicaller_service__WEBPACK_IMPORTED_MODULE_1__["ApicallerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
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

/***/ "./src/app/faceData.model.ts":
/*!***********************************!*\
  !*** ./src/app/faceData.model.ts ***!
  \***********************************/
/*! exports provided: FaceDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceDataModel", function() { return FaceDataModel; });
var FaceDataModel = /** @class */ (function () {
    function FaceDataModel() {
    }
    return FaceDataModel;
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