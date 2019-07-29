(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/add-area/add-area.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/add-area/add-area.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"nav-wrapper\">\r\n        <a (click)=\"GoBack()\" class=\"button-collapse left inlineBlock\"><i class=\"material-icons white-text\">arrow_back</i></a>\r\n        <div class=\"input-field inlineBlock search\">\r\n            <input id=\"search\" type=\"search\" #search autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\">\r\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n            <i class=\"material-icons\">close</i>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"map\">\r\n    <agm-map class=\"gmap\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" (mapReady)=\"onMapReady($event)\">\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n    </agm-map>\r\n    <a class=\"btn-floating btn-meduim waves-effect waves-light apply\" *ngIf=\"hasPolygon === true\" (click)=\"SaveDraw()\"><i class=\"material-icons\">check</i></a>\r\n    <a class=\"btn-floating btn-meduim waves-effect waves-light draw\" *ngIf=\"!drawing\" (click)=\"StartDraw()\"><i class=\"material-icons\">edit</i></a>\r\n    <a class=\"btn-floating btn-meduim waves-effect waves-light draw\" *ngIf=\"drawing\" (click)=\"CancelDraw()\"><i class=\"material-icons\">close</i></a>\r\n    <!-- <a class=\"btn-floating btn-meduim waves-effect waves-light draw\" (click)=\"GimmieSum()\"><i class=\"material-icons\">ctry</i></a> -->\r\n\r\n</div>\r\n\r\n<!-- <div #gmap class=\"gmap\"></div>\r\n<div class=\"section google-map\" style=\"height: -webkit-fill-available;\"></div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/areas/areas.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/areas/areas.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn-floating btn-meduim waves-effect waves-light\" (click)=\"GoToAdd()\"><i class=\"material-icons\">add</i></a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"modal1\" class=\"modal\" #loginDialog>\r\n  <div class=\"modal-content\">\r\n    <h4>Modal Header</h4>\r\n    <p>A bunch of text</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a href=\"#!\" class=\"modal-close waves-effect waves-green btn-flat\">Agree</a>\r\n  </div>\r\n</div>\r\n<button id='btnLogin' data-target=\"modal1\" class=\"btn modal-trigger\" #loginButton>Modal</button> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n      <div class=\"card-content\">\r\n      <span class=\"card-title\">Login</span>\r\n          <div class=\".input-field\">\r\n            <input matInput type=\"email\" placeholder=\"Email Address\" />\r\n          </div>\r\n          <div class=\".input-field\">\r\n            <input matInput type=\"password\" placeholder=\"Password\" />\r\n          </div>\r\n          <div class=\"section\">\r\n            <a href=\"#\" style=\"color: #3F6844;\">Forgot Password</a>\r\n            <a class=\"waves-effect waves-green btn-small\" style=\"float: right;\">Login</a>\r\n          </div>\r\n            <a class=\"waves-effect waves-green btn-small\">Continue without</a>\r\n          <hr />\r\n          <div style=\"margin-left:auto; margin-right:auto;\">\r\n            <a class=\"waves-effect waves-green btn-small\" ><i class=\"material-icons left\">cloud</i>Facebook</a>\r\n            <a class=\"waves-effect waves-green btn-small\"><i class=\"material-icons left\">cloud</i>Microsoft</a>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <div id=\"modal1\" class=\"modal\" #loginDialog>\r\n  <div class=\"modal-content\">\r\n    <h4>Modal Header</h4>\r\n    <p>A bunch of text</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a href=\"#!\" class=\"modal-close waves-effect waves-green btn-flat\">Agree</a>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar id=\"nvbar\"></nav-bar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-solid-transition\" *ngIf=\"IsAuthenticated\" >\r\n  <div class=\"nav-wrapper\">\r\n    <a href=\"horizontal-half.html\" class=\"brand-logo\"><i class=\"icon-diamond\"></i></a>\r\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\r\n      <li><a (click)=\"GoToPage('Areas')\" >Areas</a></li>\r\n    </ul>\r\n    <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger button-collapse left\"><i class=\"material-icons white-text\">menu</i></a>\r\n  </div>\r\n</nav>\r\n<ul id=\"slide-out\" class=\"sidenav\" *ngIf=\"IsAuthenticated\">\r\n  <li><a class=\"waves-effect waves-green\" (click)=\"GoToPage('Areas')\">Areas</a></li>\r\n</ul>\r\n"

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Pages/add-area/add-area.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Pages/add-area/add-area.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gmap {\n  height: -webkit-fill-available;\n}\n\n.map {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n}\n\n.search {\n  width: 75vw;\n}\n\n.inlineBlock {\n  display: inline-block;\n}\n\n.button-collapse {\n  margin: 0 18px;\n}\n\ninput#search:focus {\n  color: black;\n}\n\ninput#search {\n  color: #FAF1CF;\n}\n\na.draw {\n  position: fixed;\n  right: 0;\n  top: 15%;\n}\n\na.apply {\n  position: fixed;\n  left: 0;\n  top: 15%;\n}\n\n.drawing {\n  width: 100%;\n  height: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYWRkLWFyZWEvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcUGFnZXNcXGFkZC1hcmVhXFxhZGQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvYWRkLWFyZWEvYWRkLWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9hZGQtYXJlYS9hZGQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbWFwe1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcbi5tYXB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogNzV2dztcclxufVxyXG4uaW5saW5lQmxvY2t7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmJ1dHRvbi1jb2xsYXBzZXtcclxuICAgIG1hcmdpbjowIDE4cHg7XHJcbn1cclxuaW5wdXQjc2VhcmNoOmZvY3Vze1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuaW5wdXQjc2VhcmNoe1xyXG4gICAgY29sb3I6I0ZBRjFDRjtcclxufVxyXG5hLmRyYXd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDowO1xyXG4gICAgdG9wOiAxNSU7XHJcbn1cclxuYS5hcHBseSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0b3A6IDE1JTtcclxufVxyXG4uZHJhd2luZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn0iLCIuZ21hcCB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc2VhcmNoIHtcbiAgd2lkdGg6IDc1dnc7XG59XG5cbi5pbmxpbmVCbG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbi1jb2xsYXBzZSB7XG4gIG1hcmdpbjogMCAxOHB4O1xufVxuXG5pbnB1dCNzZWFyY2g6Zm9jdXMge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlucHV0I3NlYXJjaCB7XG4gIGNvbG9yOiAjRkFGMUNGO1xufVxuXG5hLmRyYXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE1JTtcbn1cblxuYS5hcHBseSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAxNSU7XG59XG5cbi5kcmF3aW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/add-area/add-area.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/add-area/add-area.component.ts ***!
  \******************************************************/
/*! exports provided: AddAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAreaComponent", function() { return AddAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/navigation.service */ "./src/app/Services/navigation.service.ts");





//import { } from '@types/googlemaps';
var AddAreaComponent = /** @class */ (function () {
    function AddAreaComponent(mapsAPILoader, ngZone, pubsub, nav) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.pubsub = pubsub;
        this.nav = nav;
        this.latitude = 51.678418;
        this.longitude = 7.809007;
        this.zoom = 15;
        this.drawing = false;
        this.hasPolygon = false;
    }
    AddAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pubsub.$pub("Add Area Page Active");
        // var mapProp = {
        //   center: new google.maps.LatLng(18.5793, 73.8143),
        //   zoom: 15,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.setCurrentLocation();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    AddAreaComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
            });
        }
    };
    AddAreaComponent.prototype.StartDraw = function () {
        this.drawing = true;
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: false,
            drawingControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER,
                drawingModes: [google.maps.drawing.OverlayType.POLYGON]
            },
            polygonOptions: {
                strokeColor: '#5DAA68',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                editable: true,
                clickable: true
            }
        });
        drawingManager.setMap(this.map);
        this.drawingManager = drawingManager;
        var googleMap = this.map;
        google.maps.event.addListener(drawingManager, "polygoncomplete", this.PolygonComplete);
        google.maps.event.addListener(drawingManager, 'overlaycomplete', this.OverlayComplete);
    };
    AddAreaComponent.prototype.PolygonComplete = function (poly) {
        console.log(poly);
        if (!this.hasPolygon) {
            this.hasPolygon = true;
        }
        this.drawnPolygon = poly;
    };
    AddAreaComponent.prototype.OverlayComplete = function (event) {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
            this.drawnOverlay = event.overlay;
        }
    };
    AddAreaComponent.prototype.CancelDraw = function () {
        this.drawing = false;
        this.hasPolygon = false;
        if (this.drawingManager.drawnOverlay !== undefined) {
            this.drawingManager.drawnOverlay.setMap(null);
            this.drawingManager.drawnOverlay = undefined;
            this.drawingManager.drawnPolygon = undefined;
        }
        this.drawingManager.setMap(null);
        if (this.drawingManager.drawnPolygon !== undefined) {
            this.drawingManager.drawnPolygon.setMap(null);
            this.drawingManager.drawnPolygon.setEditable(false);
            this.drawingManager.drawnPolygon = undefined;
        }
    };
    AddAreaComponent.prototype.SaveDraw = function () {
    };
    AddAreaComponent.prototype.GoBack = function () {
        this.pubsub.$pub("Add Area Page Deactivated");
        this.nav.Push("Areas");
    };
    AddAreaComponent.prototype.GimmieSum = function () {
        //console.log(this.)
    };
    AddAreaComponent.prototype.onMapReady = function (map) {
        this.initDrawingManager(map);
    };
    AddAreaComponent.prototype.initDrawingManager = function (map) {
        this.map = map;
    };
    AddAreaComponent.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__["PubSubService"] },
        { type: src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddAreaComponent.prototype, "searchElementRef", void 0);
    AddAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-area',
            template: __webpack_require__(/*! raw-loader!./add-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/add-area/add-area.component.html"),
            styles: [__webpack_require__(/*! ./add-area.component.scss */ "./src/app/Pages/add-area/add-area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__["PubSubService"],
            src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]])
    ], AddAreaComponent);
    return AddAreaComponent;
}());



/***/ }),

/***/ "./src/app/Pages/areas/areas.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Pages/areas/areas.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FyZWFzL2FyZWFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/areas/areas.component.ts":
/*!************************************************!*\
  !*** ./src/app/Pages/areas/areas.component.ts ***!
  \************************************************/
/*! exports provided: AreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasComponent", function() { return AreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/navigation.service */ "./src/app/Services/navigation.service.ts");



var AreasComponent = /** @class */ (function () {
    function AreasComponent(nav) {
        this.nav = nav;
    }
    AreasComponent.prototype.ngOnInit = function () {
    };
    AreasComponent.prototype.GoToAdd = function () {
        this.nav.Push("AddArea");
    };
    AreasComponent.ctorParameters = function () { return [
        { type: src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-areas',
            template: __webpack_require__(/*! raw-loader!./areas.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/areas/areas.component.html"),
            styles: [__webpack_require__(/*! ./areas.component.scss */ "./src/app/Pages/areas/areas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], AreasComponent);
    return AreasComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/Pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!this.authService.IsAuthenticated && !this.authService.LoginSkipped) {
            //this.router.navigateByUrl("/login");
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () { };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginDialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "dialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("loginButton", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "btn", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/Pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginDialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "dialog", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/Pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(pubsub, dialog) {
        this.pubsub = pubsub;
        this.dialog = dialog;
    }
    AuthenticationService.prototype.Login = function (email, password) {
        this.pubsub.$pub("LoggedIn");
    };
    AuthenticationService.prototype.Logout = function () {
        this.pubsub.$pub("LoggedOut");
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/Services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavigationService = /** @class */ (function () {
    function NavigationService(pubsub, router) {
        this.pubsub = pubsub;
        this.router = router;
        this.pages = [];
        //this.router.events.subscribe(this.RouterEvents);
    }
    NavigationService.prototype.Push = function (page) {
        console.log("page pushed: " + page);
        if (this.pages.length == 0) {
            this.pages = [page];
        }
        else {
            this.pages.push(page);
        }
        this.router.navigateByUrl("/" + page);
    };
    NavigationService.prototype.Pop = function () {
        if (this.pages.length > 0) {
            this.pages.pop();
            this.router.navigateByUrl("/" + this.pages[this.pages.length - 1]);
        }
    };
    NavigationService.ctorParameters = function () { return [
        { type: _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/Services/pub-sub.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/pub-sub.service.ts ***!
  \*********************************************/
/*! exports provided: PubSubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubSubService", function() { return PubSubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PubSubService = /** @class */ (function () {
    function PubSubService() {
        this.events = new Map();
    }
    PubSubService.prototype.ngOnDestroy = function () {
        this.events.clear();
    };
    PubSubService.prototype.$pub = function (eventName, object) {
        if (object === void 0) { object = undefined; }
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
        }
        this.events.get(eventName).next(object);
    };
    PubSubService.prototype.$sub = function (eventName, newOnly) {
        if (newOnly === void 0) { newOnly = true; }
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
        }
        return this.events.get(eventName);
    };
    PubSubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PubSubService);
    return PubSubService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/home/home.component */ "./src/app/Pages/home/home.component.ts");
/* harmony import */ var _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/login/login.component */ "./src/app/Pages/login/login.component.ts");
/* harmony import */ var _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/areas/areas.component */ "./src/app/Pages/areas/areas.component.ts");
/* harmony import */ var _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/add-area/add-area.component */ "./src/app/Pages/add-area/add-area.component.ts");







var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Areas', component: _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_5__["AreasComponent"] },
    { path: 'areas', component: _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_5__["AreasComponent"] },
    { path: "AddArea", component: _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_6__["AddAreaComponent"] },
    { path: "addarea", component: _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_6__["AddAreaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-add-area {\n  top: 0;\n  position: fixed;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hZGQtYXJlYSB7XHJcbiAgICB0b3A6MDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufSIsImFwcC1hZGQtYXJlYSB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _Services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/navigation.service */ "./src/app/Services/navigation.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(pubsub, nav) {
        this.pubsub = pubsub;
        this.nav = nav;
        this.title = 'Mapster';
        pubsub.$sub("Add Area Page Active").subscribe(function (data) {
            var navbr = document.getElementById("nvbar");
            navbr.style.display = 'none';
        });
        pubsub.$sub("Add Area Page Deactivated").subscribe(function (data) {
            var navbr = document.getElementById("nvbar");
            navbr.style.display = 'block';
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _Services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _Services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _http_intercept__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http-intercept */ "./src/app/http-intercept.ts");
/* harmony import */ var _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/login/login.component */ "./src/app/Pages/login/login.component.ts");
/* harmony import */ var _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/home/home.component */ "./src/app/Pages/home/home.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pages/areas/areas.component */ "./src/app/Pages/areas/areas.component.ts");
/* harmony import */ var _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Pages/add-area/add-area.component */ "./src/app/Pages/add-area/add-area.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_14__["AreasComponent"],
                _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_15__["AddAreaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCU2867Rocotglq5fwvzEQnOJI6GqXCmSU',
                    libraries: ['places', 'drawing', 'geometry']
                })
            ],
            providers: [
                _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_7__["PubSubService"],
                _http_intercept__WEBPACK_IMPORTED_MODULE_8__["HttpIntercept"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http-intercept.ts":
/*!***********************************!*\
  !*** ./src/app/http-intercept.ts ***!
  \***********************************/
/*! exports provided: HttpIntercept */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIntercept", function() { return HttpIntercept; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/loading-service.ts");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var HttpIntercept = /** @class */ (function () {
    function HttpIntercept(loadingService, router, localStorage) {
        this.loadingService = loadingService;
        this.router = router;
        this.localStorage = localStorage;
    }
    HttpIntercept.prototype.intercept = function (req, next) {
        var _this = this;
        var auth = this.getAuthorization();
        if (auth != undefined) {
            //console.log("auth token set");
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + auth
                }
            });
        }
        else {
            //console.log("auth Token Null");
        }
        this.loadingService.begin(req.url);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (evt) {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpResponse"]) {
                _this.loadingService.end(req.url);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error, caught) {
            console.log(error);
            _this.handleError(error, req);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
        }));
    };
    HttpIntercept.prototype.getAuthorization = function () {
        var token = null;
        var storedToken = this.localStorage.getItem("AuthToken");
        if (storedToken != null) {
            // if (!(storedToken.exp < Date.now() / 1000)) {
            // }
            token = storedToken;
        }
        if (token != null) {
            return token.authToken;
        }
        return null;
    };
    HttpIntercept.prototype.handleError = function (err, req) {
        //console.log('handled error ' + err.status);
        if (err.status === 401) {
            this.handleAuthError(err);
        }
        this.loadingService.end(req.url);
        throw err;
    };
    HttpIntercept.prototype.handleAuthError = function (err) {
        this.localStorage.removeItem("AuthToken");
        this.router.navigate(["/"]);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err.message);
    };
    HttpIntercept.ctorParameters = function () { return [
        { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"] }
    ]; };
    HttpIntercept = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]])
    ], HttpIntercept);
    return HttpIntercept;
}());



/***/ }),

/***/ "./src/app/loading-service.ts":
/*!************************************!*\
  !*** ./src/app/loading-service.ts ***!
  \************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.optOuts = new Array();
        this.requestCounter = 0;
    }
    LoadingService.prototype.optOut = function (url) {
        this.optOuts.push(url);
    };
    LoadingService.prototype.removeOptOut = function (url) {
        var index = this.optOuts.indexOf(url, 0);
        if (index > -1) {
            this.optOuts.splice(index, 1);
        }
    };
    LoadingService.prototype.clearoptOuts = function () {
        this.optOuts.length = 0;
    };
    LoadingService.prototype.begin = function (url) {
        var _this = this;
        if (this.shouldOptOut(url)) {
            return;
        }
        this.requestCounter++;
        //console.log("Loading Service: Started " + this.requestCounter + "Requests Pending");
        setTimeout(function () {
            if (_this.requestCounter > 0 && !_this.showLoading) {
                //console.log("Loading Service: Started Setting ShowLoading True");
                _this.showLoading = true;
            }
        }, 500);
    };
    LoadingService.prototype.end = function (url) {
        if (this.shouldOptOut(url)) {
            return;
        }
        this.requestCounter--;
        //console.log("Loading Service: Ended " + this.requestCounter + " Requests Pending");
        if (this.requestCounter <= 0 && this.showLoading) {
            //console.log("Loading Service: Ending Setting ShowLoading False");
            this.showLoading = false;
        }
    };
    LoadingService.prototype.isClear = function () {
        return this.requestCounter == 0;
    };
    LoadingService.prototype.shouldOptOut = function (url) {
        var shouldOptOut = false;
        this.optOuts.forEach(function (val) {
            if (url.indexOf(val) >= 0) {
                shouldOptOut = true;
            }
        });
        return shouldOptOut;
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/navigation.service */ "./src/app/Services/navigation.service.ts");





var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(pubsub, authService, nav, renderer) {
        this.pubsub = pubsub;
        this.authService = authService;
        this.nav = nav;
        this.renderer = renderer;
        this.IsAuthenticated = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.pubsub.$sub("LoggedIn").subscribe(this.LoggedIn);
        this.pubsub.$sub("LoggedOut").subscribe(this.LoggedOut);
        this.pubsub.$sub("Navigated").subscribe(this.Navigated);
        this.IsAuthenticated = true;
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
    };
    NavBarComponent.prototype.LoggedIn = function (data) {
        this.IsAuthenticated = true;
    };
    NavBarComponent.prototype.LoggedOut = function (data) {
        this.IsAuthenticated = false;
    };
    NavBarComponent.prototype.Navigated = function (page) {
        console.log("navbar navigated page: " + page);
        switch (page) {
            case "AddArea":
                break;
            default:
                break;
        }
    };
    NavBarComponent.prototype.GoToPage = function (page) {
        var sideNavOverlay = document.getElementsByClassName('sidenav-overlay')[0];
        sideNavOverlay.click();
        this.nav.Push(page);
    };
    NavBarComponent.ctorParameters = function () { return [
        { type: _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("areaButton", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavBarComponent.prototype, "btnArea", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], NavBarComponent);
    return NavBarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\czaramo\Projects\Mapster\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map