(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Controls/graph-control/graph-control.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controls/graph-control/graph-control.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>graph-control works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/add-area/add-area.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/add-area/add-area.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"nav-wrapper\">\r\n        <a (click)=\"GoBack()\" class=\"button-collapse left inlineBlock\"><i\r\n                class=\"material-icons white-text\">arrow_back</i></a>\r\n        <div class=\"input-field inlineBlock search\">\r\n            <input id=\"search\" type=\"search\" #search autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\">\r\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n            <i class=\"material-icons\">close</i>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!-- <div style=\"height: 300px;\"\r\n     leaflet\r\n     *ngIf=\"options != null\"\r\n     [leafletOptions]=\"options\"\r\n     [leafletLayers]=\"layers\">\r\n</div> -->\r\n\r\n<div class=\"map\">\r\n    <!-- <agm-map class=\"gmap\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" (mapClick)=\"mapClicked($event)\"\r\n        [clickableIcons]=\"false\" [streetViewControl]=\"false\" [zoomControl]=\"false\">\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" >\r\n            <agm-info-window>\r\n                <strong>You are here</strong>\r\n              </agm-info-window>\r\n        </agm-marker>\r\n        <agm-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\" [markerDraggable]=\"true\"\r\n            (dragEnd)=\"markerDragEnd(i, $event)\" [iconUrl]=\"'../../assets/images/green-dot.png'\">\r\n        </agm-marker>\r\n        <agm-polyline [strokeColor]=\"'#5DAA68'\">\r\n            <agm-polyline-point *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\r\n\r\n            </agm-polyline-point>\r\n        </agm-polyline>\r\n\r\n        <agm-polygon [paths]=\"paths\" [strokeColor]=\"'#5DAA68'\">\r\n            \r\n        </agm-polygon>\r\n    </agm-map> -->\r\n    <div class=\"map\" *ngIf=\"options != null\"  leaflet [leafletOptions]=\"options\"\r\n        (leafletClick)=\"mapClicked($event)\">\r\n        <div *ngFor=\"let l of markerLayers\" [leafletLayer]=\"l\"></div>\r\n        <div [leafletLayer]=\"polygonLayer\"></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"button-wrapper\">\r\n        <a class=\"btn-floating btn-meduim waves-effect waves-light apply float\"\r\n            *ngIf=\"markers !== undefined && markers.length >= 3\" (click)=\"SaveDraw()\"><i\r\n                class=\"material-icons\">check</i></a>\r\n        <a class=\"btn-floating btn-meduim waves-effect waves-light draw float\" *ngIf=\"!drawing\" (click)=\"StartDraw()\"><i\r\n                class=\"material-icons\">edit</i></a>\r\n        <a class=\"btn-floating btn-meduim waves-effect waves-light draw float\" *ngIf=\"drawing\" (click)=\"CancelDraw()\"><i\r\n                class=\"material-icons\">close</i></a>\r\n    </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/area-map/area-map.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/area-map/area-map.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\r\n    <!-- <agm-map class=\"gmap\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\"\r\n        [clickableIcons]=\"false\" [streetViewControl]=\"false\" [zoomControl]=\"false\">\r\n        <agm-polygon [paths]=\"paths\" [strokeColor]=\"'#5DAA68'\"></agm-polygon>\r\n    </agm-map> -->\r\n\r\n    <div *ngIf=\"options != null\" style=\"height: 100%;\" leaflet [leafletOptions]=\"options\" [leafletLayers]=\"layers\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/area-measurements/area-measurements.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/area-measurements/area-measurements.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let mt of measurementTypes\">\r\n    <div  class=\"measurementItem\">\r\n        <span><b>{{mt.measurementName}}</b></span>\r\n        <a class=\"btn-flat AlignRight\" (click)=\"ShowHideMeasurements(mt)\" *ngIf=\"mt.isOpen\"><i class=\"material-icons\">arrow_drop_down</i></a>\r\n        <a class=\"btn-flat AlignRight\" (click)=\"ShowHideMeasurements(mt)\" *ngIf=\"!mt.isOpen\"><i class=\"material-icons\">arrow_drop_up</i></a>\r\n        <a class=\"btn-small waves-effect waves-light AlignRight\" (click)=\"ShowAdd(mt)\"><i class=\"material-icons\">add</i></a>\r\n    </div>\r\n\r\n    <div *ngIf=\"mt.isOpen\">\r\n        <div *ngFor=\"let entry of mt.entries\">\r\n            <span class=\"date\"><b>Date: </b>{{entry.dateAdded |  date:'short'}}</span>\r\n            <span class=\"measurement\"><b>Measurement: </b>{{entry.measurement}} {{mt.units}}</span>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/areas/areas.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/areas/areas.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn-floating btn-meduim waves-effect waves-light AddButton\" (click)=\"GoToAdd()\"><i class=\"material-icons\">add</i></a>\r\n<div *ngIf=\"areaService.Areas.length == 0\" class=\"noAreas\">\r\n    <h4>No Areas</h4>\r\n</div>\r\n<div *ngFor=\"let a of areaService.Areas; let i = index\" (click)=\"ShowSelect(a)\" class=\"areaItem\">\r\n    <span><b>{{a.areaname}}</b></span>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/graph/graph.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/graph/graph.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>graph works!</p>\r\n<div *ngIf=\"oneArea === false\">\r\n    <p>Showing multi area content</p>\r\n</div>\r\n<div *ngFor=\"let mt of measurementTypeService.MeasurementTypes\">\r\n    <p>{{mt.id}}</p>\r\n    <graph-control [MeasurementType]=\"mt.id\"></graph-control>\r\n</div>"

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

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n      <div class=\"card-content\">\r\n      <div class=\"card-title\">Login</div>\r\n          <div class=\".input-field\">\r\n            <input matInput type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email Address\" />\r\n          </div>\r\n          <div class=\".input-field\">\r\n            <input matInput type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" />\r\n          </div>\r\n          <div class=\"section\">\r\n            <a href=\"#\" style=\"color: #3F6844;\">Forgot Password</a>\r\n            <a class=\"waves-effect waves-green btn-small\" (click)=\"login()\" style=\"float: right;\">Login</a>\r\n          </div>\r\n            <a class=\"waves-effect waves-green btn-small\" (click)=\"checkAuth()\">Continue without</a>\r\n            <a class=\"waves-effect waves-green btn-small\">Register</a>\r\n\r\n          <hr />\r\n          <div style=\"margin-left:auto; margin-right:auto;\">\r\n            <a class=\"waves-effect waves-green btn-small\" ><i class=\"material-icons left\">cloud</i>Facebook</a>\r\n            <a class=\"waves-effect waves-green btn-small\"><i class=\"material-icons left\">cloud</i>Microsoft</a>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <div id=\"modal1\" class=\"modal\" #loginDialog>\r\n  <div class=\"modal-content\">\r\n    <h4>Modal Header</h4>\r\n    <p>A bunch of text</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a href=\"#!\" class=\"modal-close waves-effect waves-green btn-flat\">Agree</a>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/measurement-types/measurement-types.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/measurement-types/measurement-types.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn-floating btn-meduim waves-effect waves-light AddButton\" (click)=\"ShowAdd()\"><i class=\"material-icons\">add</i></a>\r\n<div *ngIf=\"measurementTypeService.MeasurementTypes.length == 0\" class=\"noMeasurementTypes\">\r\n    <h4>No Measurement Types</h4>\r\n</div>\r\n<div *ngFor=\"let tp of measurementTypeService.MeasurementTypes\" class=\"measurementItem\">\r\n    <span class=\"name\"><b>Name: </b>{{tp.measurementname}}</span>\r\n    <span class=\"units\"><b>Units: </b>{{tp.units}}</span>\r\n    <a class=\"btn-meduim waves-effect waves-light AlignRight\" (click)=\"ShowEdit(tp)\"><i class=\"material-icons\">edit</i></a>    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Type</h2>\r\n<div mat-dialog-content>\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"newMeasurementType.measurementname\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Units\" [(ngModel)]=\"newMeasurementType.units\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n</div>\r\n<div mat-dialog-actions>    \r\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"Cancel()\">Cancel</a>\r\n    <a class=\"waves-effect waves-green btn\" *ngIf=\"newMeasurementType.id !== ''\" (click)=\"Save()\">Update</a>\r\n    <a class=\"waves-effect waves-green btn\" *ngIf=\"newMeasurementType.id === ''\" (click)=\"Save()\">Ok</a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Popups/entry-dialog/entry-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Popups/entry-dialog/entry-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n    <h3 mat-dialog-title>{{Text}}</h3>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"entryValue\">\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>    \r\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"Cancel()\">Cancel</a>\r\n    <a class=\"waves-effect waves-green btn\" *ngIf=\"passedValue\" (click)=\"Save()\">Update</a>\r\n    <a class=\"waves-effect waves-green btn\" *ngIf=\"!passedValue\" (click)=\"Save()\">Ok</a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Popups/selection-dialog/selection-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Popups/selection-dialog/selection-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-header>{{header}}</h5>\r\n<div *ngFor=\"let s of selections\">\r\n    <a class=\"btn-meduim waves-effect waves-light btn-flat\" (click)=\"Select(s)\">{{s}}</a>\r\n</div>"

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

module.exports = "<nav class=\"navbar navbar-solid-transition\" *ngIf=\"IsAuthenticated\">\r\n  <div class=\"nav-wrapper\">\r\n    <a href=\"horizontal-half.html\" class=\"brand-logo\"><i class=\"icon-diamond\"></i></a>\r\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\r\n      <li><a (click)=\"GoToPage('Login')\">Login</a></li>\r\n      <li><a (click)=\"GoToPage('Home')\">Home</a></li>\r\n      <li><a (click)=\"GoToPage('Areas')\">Areas</a></li>\r\n      <li><a (click)=\"GoToPage('AddMeasurementTypes')\">Measurement Types</a></li>\r\n      <li><a class=\"waves-effect waves-green\" (click)=\"GoToPage('Graphs')\">Graphs</a></li>\r\n    </ul>\r\n    <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger button-collapse left\"><i\r\n        class=\"material-icons white-text\">menu</i></a>\r\n    <a class=\"brand-logoe center\">{{nav.CurrentPage}}</a>\r\n  </div>\r\n</nav>\r\n<ul id=\"slide-out\" class=\"sidenav\" *ngIf=\"IsAuthenticated\">\r\n  <li><a (click)=\"GoToPage('Login')\">Login</a></li>\r\n  <li><a class=\"waves-effect waves-green\" (click)=\"GoToPage('Home')\">Home</a></li>\r\n  <li><a class=\"waves-effect waves-green\" (click)=\"GoToPage('Areas')\">Areas</a></li>\r\n  <li><a class=\"waves-effect waves-green\" (click)=\"GoToPage('AddMeasurementTypes')\">Measurement Types</a></li>\r\n  <li><a class=\"waves-effect waves-green\" (click)=\"GoToPage('Graphs')\">Graphs</a></li>\r\n</ul>\r\n"

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

/***/ "./src/app/Controls/graph-control/graph-control.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Controls/graph-control/graph-control.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbnRyb2xzL2dyYXBoLWNvbnRyb2wvZ3JhcGgtY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Controls/graph-control/graph-control.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Controls/graph-control/graph-control.component.ts ***!
  \*******************************************************************/
/*! exports provided: GraphControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphControlComponent", function() { return GraphControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphControlComponent = /** @class */ (function () {
    function GraphControlComponent() {
    }
    Object.defineProperty(GraphControlComponent.prototype, "MeasurementType", {
        get: function () {
            return this.measurementType;
        },
        set: function (value) {
            this.measurementType = value;
        },
        enumerable: true,
        configurable: true
    });
    GraphControlComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], GraphControlComponent.prototype, "MeasurementType", null);
    GraphControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'graph-control',
            template: __webpack_require__(/*! raw-loader!./graph-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controls/graph-control/graph-control.component.html"),
            styles: [__webpack_require__(/*! ./graph-control.component.scss */ "./src/app/Controls/graph-control/graph-control.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphControlComponent);
    return GraphControlComponent;
}());



/***/ }),

/***/ "./src/app/Pages/add-area/add-area.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Pages/add-area/add-area.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gmap {\n  height: -webkit-fill-available;\n}\n\n.map {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n}\n\n.button-wrapper {\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n}\n\n.map-wrapper {\n  width: 100%;\n  height: 500px;\n  position: relative;\n}\n\n.search {\n  width: 75vw;\n}\n\n.inlineBlock {\n  display: inline-block;\n}\n\n.button-collapse {\n  margin: 0 18px;\n}\n\ninput#search:focus {\n  color: black;\n}\n\ninput#search {\n  color: #FAF1CF;\n}\n\na.draw {\n  position: fixed;\n  right: 0;\n  top: 15%;\n}\n\na.apply {\n  position: fixed;\n  left: 0;\n  top: 15%;\n}\n\n.drawing {\n  width: 100%;\n  height: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYWRkLWFyZWEvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcUGFnZXNcXGFkZC1hcmVhXFxhZGQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvYWRkLWFyZWEvYWRkLWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9hZGQtYXJlYS9hZGQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbWFwe1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcbi5tYXB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLmJ1dHRvbi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFwLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogNzV2dztcclxufVxyXG4uaW5saW5lQmxvY2t7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmJ1dHRvbi1jb2xsYXBzZXtcclxuICAgIG1hcmdpbjowIDE4cHg7XHJcbn1cclxuaW5wdXQjc2VhcmNoOmZvY3Vze1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuaW5wdXQjc2VhcmNoe1xyXG4gICAgY29sb3I6I0ZBRjFDRjtcclxufVxyXG5hLmRyYXd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDowO1xyXG4gICAgdG9wOiAxNSU7XHJcbn1cclxuYS5hcHBseSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0b3A6IDE1JTtcclxufVxyXG4uZHJhd2luZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn0iLCIuZ21hcCB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogNzV2dztcbn1cblxuLmlubGluZUJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnV0dG9uLWNvbGxhcHNlIHtcbiAgbWFyZ2luOiAwIDE4cHg7XG59XG5cbmlucHV0I3NlYXJjaDpmb2N1cyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQjc2VhcmNoIHtcbiAgY29sb3I6ICNGQUYxQ0Y7XG59XG5cbmEuZHJhdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTUlO1xufVxuXG5hLmFwcGx5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDE1JTtcbn1cblxuLmRyYXdpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Popups/entry-dialog/entry-dialog.component */ "./src/app/Popups/entry-dialog/entry-dialog.component.ts");
/* harmony import */ var src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/area.service */ "./src/app/Services/area.service.ts");
/* harmony import */ var src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/measurement-type.service */ "./src/app/Services/measurement-type.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_9__);










//import { } from '@types/googlemaps';
var AddAreaComponent = /** @class */ (function () {
    function AddAreaComponent(mapsAPILoader, ngZone, pubsub, nav, dialog, areaService, measurementTypeService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.pubsub = pubsub;
        this.nav = nav;
        this.dialog = dialog;
        this.areaService = areaService;
        this.measurementTypeService = measurementTypeService;
        this.latitude = 51.678418;
        this.longitude = 7.809007;
        this.zoom = 15;
        this.drawing = false;
        this.hasPolygon = false;
        this.areaName = "";
        this.options = null;
        this.layers = [];
        this.markerLayers = [];
        this.markers = [];
        this.polygonLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["polygon"])(this.markers);
        this.paths = [];
    }
    AddAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pubsub.$pub("Add Area Page Active");
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
                _this.options = {
                    layers: [
                        Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '...' })
                    ],
                    zoom: _this.zoom,
                    center: Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["latLng"])(_this.latitude, _this.longitude)
                };
            });
        }
    };
    AddAreaComponent.prototype.StartDraw = function () {
        var _this = this;
        this.drawing = true;
        if (this.paths.length > 0) {
            this.paths.forEach(function (p) {
                _this.markers.push({
                    lat: p.lat,
                    lng: p.lng,
                    draggable: true
                });
            });
            this.paths = [];
        }
    };
    AddAreaComponent.prototype.CancelDraw = function () {
        this.drawing = false;
        this.markers = [];
        this.markerLayers = [];
    };
    AddAreaComponent.prototype.SaveDraw = function () {
        var _this = this;
        this.paths = [];
        for (var i = 0; i < this.markers.length; i++) {
            var location = this.markers[i];
            this.paths.push({
                lat: location[0],
                lng: location[1]
            });
        }
        console.log(this.paths);
        this.markers = [];
        console.log(this.paths);
        this.drawing = false;
        console.log("Still hitting");
        this.dialogRef = this.dialog.open(src_app_Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EntryDialogComponent"], {
            data: { Text: "Enter an area name" }
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.areaName = result;
                _this.FinalizeArea();
            }
        });
    };
    AddAreaComponent.prototype.FinalizeArea = function () {
        console.log(this.paths);
        console.log(this.areaName);
        this.areaService.CreateNewArea(this.paths, this.areaName);
        if (this.measurementTypeService.MeasurementTypes.length > 0) {
            this.GoBack();
        }
        else {
            this.pubsub.$pub("Add Area Page Deactivated");
            this.nav.Push("AddMeasurementTypes");
        }
    };
    AddAreaComponent.prototype.GoBack = function () {
        this.pubsub.$pub("Add Area Page Deactivated");
        this.nav.Push("Areas");
    };
    AddAreaComponent.prototype.mapClicked = function ($event) {
        console.log($event);
        if (this.drawing) {
            this.markerLayers.push(Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"])([$event.latlng.lat, $event.latlng.lng]));
            this.markers.push([$event.latlng.lat, $event.latlng.lng]);
            console.log(this.markerLayers);
            console.log(this.markers);
            this.polygonLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["polygon"])(this.markers);
            // this.markers.push({
            //   lat: $event.coords.lat,
            //   lng: $event.coords.lng,
            //   draggable: true
            // });
        }
    };
    AddAreaComponent.prototype.markerDragEnd = function (i, $event) {
        console.log("Marker: " + i + " updated");
        this.markers[i] = {
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        };
    };
    AddAreaComponent.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__["PubSubService"] },
        { type: src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"] },
        { type: src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementTypeService"] }
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
            src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"],
            src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementTypeService"]])
    ], AddAreaComponent);
    return AddAreaComponent;
}());



/***/ }),

/***/ "./src/app/Pages/area-map/area-map.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Pages/area-map/area-map.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gmap {\n  height: -webkit-fill-available;\n}\n\n.map {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYXJlYS1tYXAvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcUGFnZXNcXGFyZWEtbWFwXFxhcmVhLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvYXJlYS1tYXAvYXJlYS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FyZWEtbWFwL2FyZWEtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdtYXB7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLm1hcHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufSIsIi5nbWFwIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4ubWFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogLTE7XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/area-map/area-map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/area-map/area-map.component.ts ***!
  \******************************************************/
/*! exports provided: AreaMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaMapComponent", function() { return AreaMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/area.service */ "./src/app/Services/area.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);






var AreaMapComponent = /** @class */ (function () {
    function AreaMapComponent(areaService, route, mapsAPILoader) {
        this.areaService = areaService;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.paths = [];
        this.latitude = 0;
        this.longitude = 0;
        this.zoom = 15;
        this.options = null;
        this.layers = [];
    }
    AreaMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params !== undefined) {
                var id = params["id"];
                var area = _this.areaService.Areas.find(function (a) { if (a.id === params["id"])
                    return true; });
                if (area !== undefined) {
                    var maxLat = area.points[0].loc.latitude;
                    var minLat = area.points[0].loc.latitude;
                    var maxLon = area.points[0].loc.longitude;
                    var minLon = area.points[0].loc.longitude;
                    var points = [];
                    area.points.forEach(function (p) {
                        if (maxLat < p.loc.latitude) {
                            maxLat = p.loc.latitude;
                        }
                        if (minLat > p.loc.latitude) {
                            minLat = p.loc.latitude;
                        }
                        if (maxLon < p.loc.longitude) {
                            maxLon = p.loc.longitude;
                        }
                        if (minLon > p.loc.longitude) {
                            minLon = p.loc.longitude;
                        }
                        points.push({
                            lat: p.loc.latitude,
                            lng: p.loc.longitude
                        });
                    });
                    console.log(points);
                    _this.latitude = maxLat - ((maxLat - minLat) / 2);
                    _this.longitude = maxLon - ((maxLon - minLon) / 2);
                    console.log("Latitude: " + _this.latitude + " Longitude: " + _this.longitude);
                    _this.paths = points;
                    _this.options = {
                        layers: [
                            Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
                        ],
                        zoom: _this.zoom,
                        // center: latLng(41.1955783/1859713, -81.45993527354125)
                        center: Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLng"])(_this.latitude, _this.longitude)
                    };
                    _this.layers = [Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["polygon"])(points)];
                }
            }
        });
    };
    AreaMapComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
            });
        }
    };
    AreaMapComponent.ctorParameters = function () { return [
        { type: src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"] }
    ]; };
    AreaMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'area-map',
            template: __webpack_require__(/*! raw-loader!./area-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/area-map/area-map.component.html"),
            styles: [__webpack_require__(/*! ./area-map.component.scss */ "./src/app/Pages/area-map/area-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"]])
    ], AreaMapComponent);
    return AreaMapComponent;
}());



/***/ }),

/***/ "./src/app/Pages/area-measurements/area-measurements.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/area-measurements/area-measurements.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.measurement {\n  margin-right: 10px;\n  margin-left: 5vw;\n}\n\nspan.date {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYXJlYS1tZWFzdXJlbWVudHMvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcUGFnZXNcXGFyZWEtbWVhc3VyZW1lbnRzXFxhcmVhLW1lYXN1cmVtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvYXJlYS1tZWFzdXJlbWVudHMvYXJlYS1tZWFzdXJlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvYXJlYS1tZWFzdXJlbWVudHMvYXJlYS1tZWFzdXJlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLm1lYXN1cmVtZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbn1cclxuc3Bhbi5kYXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Iiwic3Bhbi5tZWFzdXJlbWVudCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuc3Bhbi5kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/area-measurements/area-measurements.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Pages/area-measurements/area-measurements.component.ts ***!
  \************************************************************************/
/*! exports provided: AreaMeasurementsComponent, MeasurementTypeExtended */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaMeasurementsComponent", function() { return AreaMeasurementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementTypeExtended", function() { return MeasurementTypeExtended; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/measurement-type.service */ "./src/app/Services/measurement-type.service.ts");
/* harmony import */ var src_app_Services_measurement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/measurement.service */ "./src/app/Services/measurement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Popups/entry-dialog/entry-dialog.component */ "./src/app/Popups/entry-dialog/entry-dialog.component.ts");
/* harmony import */ var src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/mapster.client */ "./src/app/Services/mapster.client.ts");








var AreaMeasurementsComponent = /** @class */ (function () {
    function AreaMeasurementsComponent(measurementTypeService, measurementService, route, dialog) {
        this.measurementTypeService = measurementTypeService;
        this.measurementService = measurementService;
        this.route = route;
        this.dialog = dialog;
        this.measurementTypes = [];
    }
    AreaMeasurementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params !== undefined) {
                _this.areaId = params["id"];
            }
        });
        this.measurementTypeService.MeasurementTypes.forEach(function (mt) {
            var newMType = new MeasurementTypeExtended({
                id: mt.id,
                measurementname: mt.measurementname,
                units: mt.units
            });
            newMType.isOpen = false;
            newMType.entries = [];
            _this.measurementTypes.push();
        });
    };
    AreaMeasurementsComponent.prototype.ShowAdd = function (mt) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EntryDialogComponent"], { data: { Text: "Enter " + mt.measurementname } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                var newEntry = _this.measurementService.Add(_this.areaId, mt.id, result);
                var measurementType = _this.measurementTypes.find(function (m) { return m.id === newEntry.measurementTypeId; });
                if (measurementType !== undefined && (measurementType.isOpen || measurementType.entries.length > 0)) {
                    measurementType.entries.unshift({
                        id: newEntry.id,
                        areaId: _this.areaId,
                        measurementTypeId: newEntry.measurementTypeId,
                        dateAdded: Date.now(),
                        measurement: newEntry.measurement
                    });
                }
                //var addedRef = this.measurementService.Add(this.areaId, mt.id, result);
                // addedRef.subscribe(result => {
                //   if (result != null){
                //     var measurementType = this.measurementTypes.find(m => m.id == result.measurementTypeId);
                //     if (measurementType !== undefined){
                //       measurementType.entries.push({
                //         id: result.id,
                //         areaId: this.areaId,
                //         measurementTypeId: result.measurementTypeId, 
                //         dateAdded: Date.now(),
                //         measurement: result.measurement
                //       });
                //     }
            }
            //})
            // }
        });
    };
    AreaMeasurementsComponent.prototype.ShowHideMeasurements = function (mt) {
        mt.isOpen = !mt.isOpen;
        if (mt.isOpen && mt.entries.length === 0) {
            mt.entries = this.measurementService.Get(this.areaId, mt.id);
        }
    };
    AreaMeasurementsComponent.ctorParameters = function () { return [
        { type: src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_2__["MeasurementTypeService"] },
        { type: src_app_Services_measurement_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    AreaMeasurementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'area-measurements',
            template: __webpack_require__(/*! raw-loader!./area-measurements.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/area-measurements/area-measurements.component.html"),
            styles: [__webpack_require__(/*! ./area-measurements.component.scss */ "./src/app/Pages/area-measurements/area-measurements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_2__["MeasurementTypeService"], src_app_Services_measurement_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AreaMeasurementsComponent);
    return AreaMeasurementsComponent;
}());

var MeasurementTypeExtended = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MeasurementTypeExtended, _super);
    function MeasurementTypeExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MeasurementTypeExtended;
}(src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_7__["MeasurementType"]));



/***/ }),

/***/ "./src/app/Pages/areas/areas.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Pages/areas/areas.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noAreas {\n  text-align: center;\n}\n\n.areaItem {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYXJlYXMvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcUGFnZXNcXGFyZWFzXFxhcmVhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvYXJlYXMvYXJlYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvYXJlYXMvYXJlYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9BcmVhc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXJlYUl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLm5vQXJlYXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmVhSXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/area.service */ "./src/app/Services/area.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Popups/entry-dialog/entry-dialog.component */ "./src/app/Popups/entry-dialog/entry-dialog.component.ts");
/* harmony import */ var src_app_Popups_selection_dialog_selection_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Popups/selection-dialog/selection-dialog.component */ "./src/app/Popups/selection-dialog/selection-dialog.component.ts");







var AreasComponent = /** @class */ (function () {
    function AreasComponent(nav, areaService, dialog) {
        this.nav = nav;
        this.areaService = areaService;
        this.dialog = dialog;
    }
    AreasComponent.prototype.ngOnInit = function () {
        this.areaService.getAreas();
    };
    AreasComponent.prototype.GoToAdd = function () {
        this.nav.Push("AddArea");
    };
    AreasComponent.prototype.ShowEdit = function (area) {
        var _this = this;
        var name = area.areaname;
        var dialogRef = this.dialog.open(src_app_Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EntryDialogComponent"], { data: { Text: "Update Area Name", Value: name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.areaService.UpdateAreaName(area, result);
            }
        });
    };
    AreasComponent.prototype.ShowSelect = function (area) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_Popups_selection_dialog_selection_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SelectionDialogComponent"], { data: {
                Header: area.areaname,
                Selections: ["View Map", "Add Measurement", "Edit Area Name"]
            } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                console.log("User selected: " + result);
                switch (result) {
                    case ("View Map"):
                        _this.nav.Push("AreaMap", area.id);
                        break;
                    case ("Add Measurement"):
                        _this.nav.Push("AreaMeasurements", area.id);
                        break;
                    case ("Edit Area Name"):
                        _this.ShowEdit(area);
                        break;
                }
            }
        });
    };
    AreasComponent.ctorParameters = function () { return [
        { type: src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
        { type: src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    AreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-areas',
            template: __webpack_require__(/*! raw-loader!./areas.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/areas/areas.component.html"),
            styles: [__webpack_require__(/*! ./areas.component.scss */ "./src/app/Pages/areas/areas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], src_app_Services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AreasComponent);
    return AreasComponent;
}());



/***/ }),

/***/ "./src/app/Pages/graph/graph.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Pages/graph/graph.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/graph/graph.component.ts":
/*!************************************************!*\
  !*** ./src/app/Pages/graph/graph.component.ts ***!
  \************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/measurement-type.service */ "./src/app/Services/measurement-type.service.ts");




var GraphComponent = /** @class */ (function () {
    function GraphComponent(route, measurementTypeService) {
        this.route = route;
        this.measurementTypeService = measurementTypeService;
        this.oneArea = false;
        this.MeasurementTypes = [];
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params !== undefined) {
                _this.oneArea = true;
            }
        });
    };
    GraphComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementTypeService"] }
    ]; };
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! raw-loader!./graph.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.scss */ "./src/app/Pages/graph/graph.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementTypeService"]])
    ], GraphComponent);
    return GraphComponent;
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
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/navigation.service */ "./src/app/Services/navigation.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, nav) {
        this.authService = authService;
        this.nav = nav;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('at least made it here');
        this.authService.login(this.email, this.password).subscribe(function (x) {
            console.log(x["token"]);
            _this.authService.saveToken(x["token"]);
            _this.nav.Push("Areas");
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.checkAuth = function () {
        this.authService.isAuthenticated();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/Pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], src_app_Services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Pages/measurement-types/measurement-types.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/measurement-types/measurement-types.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-size: medium;\n  padding: 10px;\n}\n\n.noMeasurementTypes {\n  text-align: center;\n}\n\nspan.name {\n  max-width: 50vw;\n}\n\nspan.units {\n  max-width: 50vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvbWVhc3VyZW1lbnQtdHlwZXMvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcUGFnZXNcXG1lYXN1cmVtZW50LXR5cGVzXFxtZWFzdXJlbWVudC10eXBlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvbWVhc3VyZW1lbnQtdHlwZXMvbWVhc3VyZW1lbnQtdHlwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9tZWFzdXJlbWVudC10eXBlcy9tZWFzdXJlbWVudC10eXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm5vTWVhc3VyZW1lbnRUeXBlc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5zcGFuLm5hbWV7XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbn1cclxuc3Bhbi51bml0cyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbn0iLCJzcGFuIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ub01lYXN1cmVtZW50VHlwZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNwYW4ubmFtZSB7XG4gIG1heC13aWR0aDogNTB2dztcbn1cblxuc3Bhbi51bml0cyB7XG4gIG1heC13aWR0aDogNTB2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/measurement-types/measurement-types.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Pages/measurement-types/measurement-types.component.ts ***!
  \************************************************************************/
/*! exports provided: MeasurementTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementTypesComponent", function() { return MeasurementTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/measurement-type.service */ "./src/app/Services/measurement-type.service.ts");
/* harmony import */ var src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var src_app_Popups_add_edit_measurement_type_dialog_add_edit_measurement_type_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component */ "./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.ts");






var MeasurementTypesComponent = /** @class */ (function () {
    function MeasurementTypesComponent(dialog, measurementTypeService, pubsub) {
        this.dialog = dialog;
        this.measurementTypeService = measurementTypeService;
        this.pubsub = pubsub;
    }
    MeasurementTypesComponent.prototype.ngOnInit = function () {
    };
    MeasurementTypesComponent.prototype.ShowAdd = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_Popups_add_edit_measurement_type_dialog_add_edit_measurement_type_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddEditMeasurementTypeDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.measurementTypeService.CreateMeasurementType(result);
            }
        });
    };
    MeasurementTypesComponent.prototype.ShowEdit = function (mt) {
        var _this = this;
        //Decouple the measurement type from the reference or it would cause the element to be modified
        var nmt = { id: mt.id, measurementname: mt.measurementname, units: mt.units, owner: mt.owner };
        var dialogRef = this.dialog.open(src_app_Popups_add_edit_measurement_type_dialog_add_edit_measurement_type_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddEditMeasurementTypeDialogComponent"], { data: nmt });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.measurementTypeService.UpdateMeasurementType(result);
            }
        });
    };
    MeasurementTypesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementTypeService"] },
        { type: src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_4__["PubSubService"] }
    ]; };
    MeasurementTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'measurement-types',
            template: __webpack_require__(/*! raw-loader!./measurement-types.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/measurement-types/measurement-types.component.html"),
            styles: [__webpack_require__(/*! ./measurement-types.component.scss */ "./src/app/Pages/measurement-types/measurement-types.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_Services_measurement_type_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementTypeService"], src_app_Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_4__["PubSubService"]])
    ], MeasurementTypesComponent);
    return MeasurementTypesComponent;
}());



/***/ }),

/***/ "./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUG9wdXBzL2FkZC1lZGl0LW1lYXN1cmVtZW50LXR5cGUtZGlhbG9nL0M6XFxVc2Vyc1xcY3phcmFtb1xcUHJvamVjdHNcXE1hcHN0ZXIvc3JjXFxhcHBcXFBvcHVwc1xcYWRkLWVkaXQtbWVhc3VyZW1lbnQtdHlwZS1kaWFsb2dcXGFkZC1lZGl0LW1lYXN1cmVtZW50LXR5cGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Qb3B1cHMvYWRkLWVkaXQtbWVhc3VyZW1lbnQtdHlwZS1kaWFsb2cvYWRkLWVkaXQtbWVhc3VyZW1lbnQtdHlwZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUG9wdXBzL2FkZC1lZGl0LW1lYXN1cmVtZW50LXR5cGUtZGlhbG9nL2FkZC1lZGl0LW1lYXN1cmVtZW50LXR5cGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddEditMeasurementTypeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditMeasurementTypeDialogComponent", function() { return AddEditMeasurementTypeDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/mapster.client */ "./src/app/Services/mapster.client.ts");




var AddEditMeasurementTypeDialogComponent = /** @class */ (function () {
    function AddEditMeasurementTypeDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newMeasurementType = new src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_3__["MeasurementType"]();
        this.passedMeasurementType = false;
        if (data !== undefined && data !== null) {
            console.log(data);
            this.newMeasurementType = data;
            this.passedMeasurementType = true;
        }
        else {
            this.newMeasurementType = new src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_3__["MeasurementType"]();
        }
    }
    AddEditMeasurementTypeDialogComponent.prototype.ngOnInit = function () {
    };
    AddEditMeasurementTypeDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    AddEditMeasurementTypeDialogComponent.prototype.Save = function () {
        this.dialogRef.close(this.newMeasurementType);
    };
    AddEditMeasurementTypeDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_3__["MeasurementType"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AddEditMeasurementTypeDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-edit-measurement-type',
            template: __webpack_require__(/*! raw-loader!./add-edit-measurement-type-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-measurement-type-dialog.component.scss */ "./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_Services_mapster_client__WEBPACK_IMPORTED_MODULE_3__["MeasurementType"]])
    ], AddEditMeasurementTypeDialogComponent);
    return AddEditMeasurementTypeDialogComponent;
}());



/***/ }),

/***/ "./src/app/Popups/entry-dialog/entry-dialog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Popups/entry-dialog/entry-dialog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUG9wdXBzL2VudHJ5LWRpYWxvZy9DOlxcVXNlcnNcXGN6YXJhbW9cXFByb2plY3RzXFxNYXBzdGVyL3NyY1xcYXBwXFxQb3B1cHNcXGVudHJ5LWRpYWxvZ1xcZW50cnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Qb3B1cHMvZW50cnktZGlhbG9nL2VudHJ5LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Qb3B1cHMvZW50cnktZGlhbG9nL2VudHJ5LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IiwiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/Popups/entry-dialog/entry-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Popups/entry-dialog/entry-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: EntryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryDialogComponent", function() { return EntryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var EntryDialogComponent = /** @class */ (function () {
    function EntryDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.Text = data.Text;
        if (data.Value !== null && data.Value !== undefined) {
            this.entryValue = data.Value;
            this.passedValue = true;
        }
        else {
            this.passedValue = false;
        }
    }
    EntryDialogComponent.prototype.ngOnInit = function () {
    };
    EntryDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    EntryDialogComponent.prototype.Save = function () {
        this.dialogRef.close(this.entryValue);
    };
    EntryDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EntryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry-dialog',
            template: __webpack_require__(/*! raw-loader!./entry-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/Popups/entry-dialog/entry-dialog.component.html"),
            styles: [__webpack_require__(/*! ./entry-dialog.component.scss */ "./src/app/Popups/entry-dialog/entry-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EntryDialogComponent);
    return EntryDialogComponent;
}());



/***/ }),

/***/ "./src/app/Popups/selection-dialog/selection-dialog.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Popups/selection-dialog/selection-dialog.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcHVwcy9zZWxlY3Rpb24tZGlhbG9nL3NlbGVjdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Popups/selection-dialog/selection-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Popups/selection-dialog/selection-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDialogComponent", function() { return SelectionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SelectionDialogComponent = /** @class */ (function () {
    function SelectionDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.header = data.Header;
        this.selections = data.Selections;
    }
    SelectionDialogComponent.prototype.ngOnInit = function () {
    };
    SelectionDialogComponent.prototype.Select = function (selection) {
        this.dialogRef.close(selection);
    };
    SelectionDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SelectionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selection-dialog',
            template: __webpack_require__(/*! raw-loader!./selection-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/Popups/selection-dialog/selection-dialog.component.html"),
            styles: [__webpack_require__(/*! ./selection-dialog.component.scss */ "./src/app/Popups/selection-dialog/selection-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SelectionDialogComponent);
    return SelectionDialogComponent;
}());



/***/ }),

/***/ "./src/app/Services/area.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/area.service.ts ***!
  \******************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _mapster_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapster.client */ "./src/app/Services/mapster.client.ts");




var AreaService = /** @class */ (function () {
    function AreaService(pubsub, getClient, updateClient, createClient) {
        this.pubsub = pubsub;
        this.getClient = getClient;
        this.updateClient = updateClient;
        this.createClient = createClient;
        this.Areas = [];
    }
    AreaService.prototype.getAreas = function () {
        var _this = this;
        this.getClient.areas().subscribe(function (x) {
            _this.Areas = x;
        });
    };
    AreaService.prototype.CreateNewArea = function (path, areaName) {
        var _this = this;
        var newAreaDB = new _mapster_client__WEBPACK_IMPORTED_MODULE_3__["Area"]({
            areaname: areaName,
            points: []
        });
        var pos = 0;
        while (pos < path.length) {
            newAreaDB.points.push(new _mapster_client__WEBPACK_IMPORTED_MODULE_3__["Point"]({
                position: pos,
                loc: new _mapster_client__WEBPACK_IMPORTED_MODULE_3__["Location"]({
                    latitude: path[pos].lat,
                    longitude: path[pos].lng
                })
            }));
            pos++;
        }
        this.Areas.push(newAreaDB);
        this.createClient.area(newAreaDB).subscribe(function (x) {
            _this.pubsub.$pub("Areas Updates", _this.Areas);
            console.log(x);
            console.log('creation complete!');
        });
    };
    AreaService.prototype.UpdateAreaName = function (area, newName) {
        area.areaname = newName;
        this.updateClient.area(area).subscribe(function (x) {
            console.log(x);
            console.log('update complete!');
        });
    };
    AreaService.ctorParameters = function () { return [
        { type: _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_3__["GetClient"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_3__["UpdateClient"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_3__["CreateClient"] }
    ]; };
    AreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _mapster_client__WEBPACK_IMPORTED_MODULE_3__["GetClient"], _mapster_client__WEBPACK_IMPORTED_MODULE_3__["UpdateClient"], _mapster_client__WEBPACK_IMPORTED_MODULE_3__["CreateClient"]])
    ], AreaService);
    return AreaService;
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
/* harmony import */ var _mapster_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapster.client */ "./src/app/Services/mapster.client.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(pubsub, dialog, backendClient) {
        this.pubsub = pubsub;
        this.dialog = dialog;
        this.backendClient = backendClient;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var user = new _mapster_client__WEBPACK_IMPORTED_MODULE_4__["User"]({
            email: email,
            password: password
        });
        return this.backendClient.login(user);
    };
    AuthenticationService.prototype.Logout = function () {
        this.pubsub.$pub("LoggedOut");
    };
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        if (token == null) {
            return false;
        }
        return this.tokenNotExpired(token);
    };
    AuthenticationService.prototype.tokenNotExpired = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(token);
        if (Date.now() >= decoded.exp * 1000) {
            return false;
        }
        return true;
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_4__["Client"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _mapster_client__WEBPACK_IMPORTED_MODULE_4__["Client"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/Services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cordova.service */ "./src/app/Services/cordova.service.ts");



var ConnectionService = /** @class */ (function () {
    function ConnectionService(cordova) {
        this.cordova = cordova;
    }
    ConnectionService.prototype.AddMeasurement = function (newMeasurement) {
        newMeasurement.id = "TETSDS";
        if (this.cordova.cordova !== undefined && this.cordova.cordova.device.platform === "Android"
            || this.cordova.cordova.device.platform === "iOS") {
            console.log(this.cordova.cordova.device.platform);
        }
        else {
            //GO DIRECTLY TO THE WEB SERVICE SKIP TRYING OT USE LOCAL DB
        }
        return newMeasurement;
    };
    ConnectionService.prototype.GetMeasurements = function (areaId, measurementTypeId) {
    };
    ConnectionService.ctorParameters = function () { return [
        { type: _cordova_service__WEBPACK_IMPORTED_MODULE_2__["CordovaService"] }
    ]; };
    ConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_2__["CordovaService"]])
    ], ConnectionService);
    return ConnectionService;
}());



/***/ }),

/***/ "./src/app/Services/cordova.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/cordova.service.ts ***!
  \*********************************************/
/*! exports provided: CordovaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaService", function() { return CordovaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



function _window() {
    // return the global native browser window object
    return window;
}
var CordovaService = /** @class */ (function () {
    function CordovaService(zone) {
        var _this = this;
        this.zone = zone;
        console.log("Cordova started");
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'resume').subscribe(function (event) {
            _this.zone.run(function () {
                _this.onResume();
            });
        });
    }
    Object.defineProperty(CordovaService.prototype, "cordova", {
        get: function () {
            console.log(_window().cordova);
            return _window().cordova;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "onCordova", {
        get: function () {
            return !!_window().cordova;
        },
        enumerable: true,
        configurable: true
    });
    CordovaService.prototype.onResume = function () {
        this.resume.next(true);
    };
    CordovaService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CordovaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CordovaService);
    return CordovaService;
}());



/***/ }),

/***/ "./src/app/Services/mapster.client.ts":
/*!********************************************!*\
  !*** ./src/app/Services/mapster.client.ts ***!
  \********************************************/
/*! exports provided: API_BASE_URL, GetClient, CreateClient, UpdateClient, Client, DeleteClient, Location, Point, Area, User, Measurement, MeasurementType, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetClient", function() { return GetClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClient", function() { return CreateClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClient", function() { return UpdateClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClient", function() { return DeleteClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Measurement", function() { return Measurement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementType", function() { return MeasurementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.15.0 (NJsonSchema v9.13.22.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming





var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('API_BASE_URL');
var GetClient = /** @class */ (function () {
    function GetClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    GetClient.prototype.areas = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Area";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processAreas(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processAreas(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GetClient.prototype.processAreas = function (response) {
        var _this = this;
        var e_1, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var e_2, _a;
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    try {
                        for (var resultData200_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](resultData200), resultData200_1_1 = resultData200_1.next(); !resultData200_1_1.done; resultData200_1_1 = resultData200_1.next()) {
                            var item = resultData200_1_1.value;
                            result200.push(Area.fromJS(item));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (resultData200_1_1 && !resultData200_1_1.done && (_a = resultData200_1.return)) _a.call(resultData200_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    GetClient.prototype.area = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Area/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processArea(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processArea(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GetClient.prototype.processArea = function (response) {
        var _this = this;
        var e_3, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Area.fromJS(resultData200) : new Area();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    GetClient.prototype.measurementTypes = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/MeasurementType";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processMeasurementTypes(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processMeasurementTypes(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GetClient.prototype.processMeasurementTypes = function (response) {
        var _this = this;
        var e_4, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var e_5, _a;
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    try {
                        for (var resultData200_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](resultData200), resultData200_2_1 = resultData200_2.next(); !resultData200_2_1.done; resultData200_2_1 = resultData200_2.next()) {
                            var item = resultData200_2_1.value;
                            result200.push(MeasurementType.fromJS(item));
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (resultData200_2_1 && !resultData200_2_1.done && (_a = resultData200_2.return)) _a.call(resultData200_2);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    GetClient.prototype.user = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/User/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUser(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUser(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GetClient.prototype.processUser = function (response) {
        var _this = this;
        var e_6, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? User.fromJS(resultData200) : new User();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GetClient.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [API_BASE_URL,] }] }
    ]; };
    GetClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], GetClient);
    return GetClient;
}());

var CreateClient = /** @class */ (function () {
    function CreateClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    CreateClient.prototype.area = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Area";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processArea(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processArea(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CreateClient.prototype.processArea = function (response) {
        var _this = this;
        var e_7, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Area.fromJS(resultData200) : new Area();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    CreateClient.prototype.measurement = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Measurement";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processMeasurement(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processMeasurement(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CreateClient.prototype.processMeasurement = function (response) {
        var _this = this;
        var e_8, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Measurement.fromJS(resultData200) : new Measurement();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    CreateClient.prototype.measurementType = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/MeasurementType";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processMeasurementType(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processMeasurementType(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CreateClient.prototype.processMeasurementType = function (response) {
        var _this = this;
        var e_9, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? MeasurementType.fromJS(resultData200) : new MeasurementType();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    CreateClient.prototype.user = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/User";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUser(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUser(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CreateClient.prototype.processUser = function (response) {
        var _this = this;
        var e_10, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? User.fromJS(resultData200) : new User();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    CreateClient.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [API_BASE_URL,] }] }
    ]; };
    CreateClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], CreateClient);
    return CreateClient;
}());

var UpdateClient = /** @class */ (function () {
    function UpdateClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    UpdateClient.prototype.area = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Area";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processArea(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processArea(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UpdateClient.prototype.processArea = function (response) {
        var _this = this;
        var e_11, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Area.fromJS(resultData200) : new Area();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UpdateClient.prototype.measurement = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Measurement";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processMeasurement(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processMeasurement(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UpdateClient.prototype.processMeasurement = function (response) {
        var _this = this;
        var e_12, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_12) throw e_12.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? MeasurementType.fromJS(resultData200) : new MeasurementType();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UpdateClient.prototype.measurementType = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/MeasurementType";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processMeasurementType(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processMeasurementType(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UpdateClient.prototype.processMeasurementType = function (response) {
        var _this = this;
        var e_13, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_13) throw e_13.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? MeasurementType.fromJS(resultData200) : new MeasurementType();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UpdateClient.prototype.user = function (id, body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/User/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUser(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUser(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UpdateClient.prototype.processUser = function (response) {
        var e_14, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_14) throw e_14.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    UpdateClient.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [API_BASE_URL,] }] }
    ]; };
    UpdateClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], UpdateClient);
    return UpdateClient;
}());

var Client = /** @class */ (function () {
    function Client(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    Client.prototype.login = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Login";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processLogin(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processLogin(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    Client.prototype.processLogin = function (response) {
        var _this = this;
        var e_15, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_15_1) { e_15 = { error: e_15_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_15) throw e_15.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    Client.prototype.values = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processValues(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processValues(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    Client.prototype.processValues = function (response) {
        var _this = this;
        var e_16, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_16) throw e_16.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var e_17, _a;
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    try {
                        for (var resultData200_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](resultData200), resultData200_3_1 = resultData200_3.next(); !resultData200_3_1.done; resultData200_3_1 = resultData200_3.next()) {
                            var item = resultData200_3_1.value;
                            result200.push(item);
                        }
                    }
                    catch (e_17_1) { e_17 = { error: e_17_1 }; }
                    finally {
                        try {
                            if (resultData200_3_1 && !resultData200_3_1.done && (_a = resultData200_3.return)) _a.call(resultData200_3);
                        }
                        finally { if (e_17) throw e_17.error; }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    Client.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [API_BASE_URL,] }] }
    ]; };
    Client = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], Client);
    return Client;
}());

var DeleteClient = /** @class */ (function () {
    function DeleteClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    DeleteClient.prototype.user = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/User/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUser(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUser(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    DeleteClient.prototype.processUser = function (response) {
        var e_18, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_18) throw e_18.error; }
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    DeleteClient.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [API_BASE_URL,] }] }
    ]; };
    DeleteClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], DeleteClient);
    return DeleteClient;
}());

var Location = /** @class */ (function () {
    function Location(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Location.prototype.init = function (data) {
        if (data) {
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
        }
    };
    Location.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Location();
        result.init(data);
        return result;
    };
    Location.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        return data;
    };
    Location.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Location;
}());

var Point = /** @class */ (function () {
    function Point(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Point.prototype.init = function (data) {
        if (data) {
            this.position = data["position"];
            this.loc = data["loc"] ? Location.fromJS(data["loc"]) : undefined;
        }
    };
    Point.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Point();
        result.init(data);
        return result;
    };
    Point.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["position"] = this.position;
        data["loc"] = this.loc ? this.loc.toJSON() : undefined;
        return data;
    };
    Point.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Point;
}());

var Area = /** @class */ (function () {
    function Area(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Area.prototype.init = function (data) {
        var e_19, _a;
        if (data) {
            this.id = data["id"];
            this.owner = data["owner"];
            this.areaname = data["areaname"];
            if (data["points"] && data["points"].constructor === Array) {
                this.points = [];
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data["points"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.points.push(Point.fromJS(item));
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
            }
        }
    };
    Area.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Area();
        result.init(data);
        return result;
    };
    Area.prototype.toJSON = function (data) {
        var e_20, _a;
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["owner"] = this.owner;
        data["areaname"] = this.areaname;
        if (this.points && this.points.constructor === Array) {
            data["points"] = [];
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["points"].push(item.toJSON());
                }
            }
            catch (e_20_1) { e_20 = { error: e_20_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_20) throw e_20.error; }
            }
        }
        return data;
    };
    Area.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Area;
}());

var User = /** @class */ (function () {
    function User(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    User.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.username = data["username"];
            this.email = data["email"];
            this.password = data["password"];
            this.companyname = data["companyname"];
            this.premium = data["premium"];
        }
    };
    User.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new User();
        result.init(data);
        return result;
    };
    User.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["username"] = this.username;
        data["email"] = this.email;
        data["password"] = this.password;
        data["companyname"] = this.companyname;
        data["premium"] = this.premium;
        return data;
    };
    User.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return User;
}());

var Measurement = /** @class */ (function () {
    function Measurement(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Measurement.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.areaid = data["areaid"];
            this.measurementtypeid = data["measurementtypeid"];
            this.dateadded = data["dateadded"] ? new Date(data["dateadded"].toString()) : undefined;
            this.measurement = data["measurement"];
        }
    };
    Measurement.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Measurement();
        result.init(data);
        return result;
    };
    Measurement.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["areaid"] = this.areaid;
        data["measurementtypeid"] = this.measurementtypeid;
        data["dateadded"] = this.dateadded ? this.dateadded.toISOString() : undefined;
        data["measurement"] = this.measurement;
        return data;
    };
    Measurement.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Measurement;
}());

var MeasurementType = /** @class */ (function () {
    function MeasurementType(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    MeasurementType.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.owner = data["owner"];
            this.measurementname = data["measurementname"];
            this.units = data["units"];
        }
    };
    MeasurementType.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new MeasurementType();
        result.init(data);
        return result;
    };
    MeasurementType.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["owner"] = this.owner;
        data["measurementname"] = this.measurementname;
        data["units"] = this.units;
        return data;
    };
    MeasurementType.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return MeasurementType;
}());

var SwaggerException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    SwaggerException.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: String },
        { type: undefined },
        { type: undefined }
    ]; };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function (event) {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./src/app/Services/measurement-type.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/measurement-type.service.ts ***!
  \******************************************************/
/*! exports provided: MeasurementTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementTypeService", function() { return MeasurementTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _mapster_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapster.client */ "./src/app/Services/mapster.client.ts");




var MeasurementTypeService = /** @class */ (function () {
    function MeasurementTypeService(pubsub, createClient, updateClient, getClient) {
        this.pubsub = pubsub;
        this.createClient = createClient;
        this.updateClient = updateClient;
        this.getClient = getClient;
        this.MeasurementTypes = [];
        this.GetMeasurementTypes();
    }
    MeasurementTypeService.prototype.Testing = function () {
        //  var pos = 0;
        //  while (pos < 20){
        //   this.MeasurementTypes.push({
        //     id: (pos + 1).toString(),
        //     measurementName: "Name " + pos,
        //     units: "Units " + pos
        //   });
        //   pos ++;
        //  }
    };
    MeasurementTypeService.prototype.GetMeasurementTypes = function () {
        var _this = this;
        this.getClient.measurementTypes().subscribe(function (result) {
            _this.MeasurementTypes = result;
        });
    };
    MeasurementTypeService.prototype.CreateMeasurementType = function (newMeasurementType) {
        var _this = this;
        this.createClient.measurementType(newMeasurementType).subscribe(function (result) {
            console.log(result);
            _this.MeasurementTypes.push(newMeasurementType);
            _this.pubsub.$pub("MeasurementTypes Updated", _this.MeasurementTypes);
        });
    };
    MeasurementTypeService.prototype.UpdateMeasurementType = function (updatedMeasurementType) {
        var _this = this;
        this.updateClient.measurementType(updatedMeasurementType).subscribe(function (result) {
            var index = _this.MeasurementTypes.findIndex(function (m) { return m.id == updatedMeasurementType.id; });
            _this.MeasurementTypes[index] = updatedMeasurementType;
            _this.pubsub.$pub("MeasurementTypes Updated", _this.MeasurementTypes);
        });
    };
    MeasurementTypeService.ctorParameters = function () { return [
        { type: _pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_3__["CreateClient"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_3__["UpdateClient"] },
        { type: _mapster_client__WEBPACK_IMPORTED_MODULE_3__["GetClient"] }
    ]; };
    MeasurementTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pub_sub_service__WEBPACK_IMPORTED_MODULE_2__["PubSubService"], _mapster_client__WEBPACK_IMPORTED_MODULE_3__["CreateClient"], _mapster_client__WEBPACK_IMPORTED_MODULE_3__["UpdateClient"], _mapster_client__WEBPACK_IMPORTED_MODULE_3__["GetClient"]])
    ], MeasurementTypeService);
    return MeasurementTypeService;
}());



/***/ }),

/***/ "./src/app/Services/measurement.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/measurement.service.ts ***!
  \*************************************************/
/*! exports provided: MeasurementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementService", function() { return MeasurementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.service */ "./src/app/Services/connection.service.ts");



var MeasurementService = /** @class */ (function () {
    function MeasurementService(connectionService) {
        this.connectionService = connectionService;
    }
    MeasurementService.prototype.Get = function (areaId, measurementTypeId) {
        var lst = this.Testing(areaId, measurementTypeId);
        return lst;
    };
    MeasurementService.prototype.Testing = function (areaId, measurementTypeId) {
        var lst = [];
        var pos = 0;
        while (pos < 20) {
            lst.push({
                id: (pos + 1).toString(),
                areaId: areaId,
                measurementTypeId: measurementTypeId,
                dateAdded: Date.now(),
                measurement: pos.toString()
            });
            pos++;
        }
        return lst;
    };
    MeasurementService.prototype.Add = function (areaId, measurementTypeId, value) {
        // var connectionRef = this.connectionService.AddMeasurement({
        //   id: null,
        //   areaId: areaId,
        //   measurementTypeId: measurementTypeId, 
        //   dateAdded: Date.now(),
        //   measurement: value
        // });
        // connectionRef.subscribe(result => {
        //   return result;
        // })
        //return  of<MeasurementModel | null>(<any>null);
        return this.connectionService.AddMeasurement({
            id: null,
            areaId: areaId,
            measurementTypeId: measurementTypeId,
            dateAdded: Date.now(),
            measurement: value
        });
    };
    MeasurementService.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }
    ]; };
    MeasurementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"]])
    ], MeasurementService);
    return MeasurementService;
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
    NavigationService.prototype.Push = function (page, param) {
        if (param === void 0) { param = null; }
        console.log("page pushed: " + page);
        this.CurrentPage = page.replace(/([A-Z])/g, ' $1').trim();
        if (this.pages.length == 0) {
            this.pages = [page];
        }
        else {
            this.pages.push(page);
        }
        if (param !== null) {
            this.router.navigate(["/" + page, param]);
        }
        else {
            this.router.navigateByUrl("/" + page);
        }
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

/***/ "./src/app/Services/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.service */ "./src/app/Services/navigation.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (this.auth.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.auth.getToken()
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(auth, nav) {
        this.auth = auth;
        this.nav = nav;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    console.log('Unauthorized');
                    _this.nav.Push("Login");
                    // redirect to the login route
                    // or show a modal
                }
            }
        }));
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
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
/* harmony import */ var _Pages_measurement_types_measurement_types_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/measurement-types/measurement-types.component */ "./src/app/Pages/measurement-types/measurement-types.component.ts");
/* harmony import */ var _Pages_area_measurements_area_measurements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/area-measurements/area-measurements.component */ "./src/app/Pages/area-measurements/area-measurements.component.ts");
/* harmony import */ var _Pages_area_map_area_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/area-map/area-map.component */ "./src/app/Pages/area-map/area-map.component.ts");
/* harmony import */ var _Pages_graph_graph_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/graph/graph.component */ "./src/app/Pages/graph/graph.component.ts");











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Home', component: _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Login', component: _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Areas', component: _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_5__["AreasComponent"] },
    { path: 'areas', component: _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_5__["AreasComponent"] },
    { path: "AddArea", component: _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_6__["AddAreaComponent"] },
    { path: "addarea", component: _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_6__["AddAreaComponent"] },
    { path: "AddMeasurementTypes", component: _Pages_measurement_types_measurement_types_component__WEBPACK_IMPORTED_MODULE_7__["MeasurementTypesComponent"] },
    { path: "AreaMeasurements/:id", component: _Pages_area_measurements_area_measurements_component__WEBPACK_IMPORTED_MODULE_8__["AreaMeasurementsComponent"] },
    { path: "AreaMap/:id", component: _Pages_area_map_area_map_component__WEBPACK_IMPORTED_MODULE_9__["AreaMapComponent"] },
    { path: "Graphs/:id", component: _Pages_graph_graph_component__WEBPACK_IMPORTED_MODULE_10__["GraphComponent"] },
    { path: "Graphs", component: _Pages_graph_graph_component__WEBPACK_IMPORTED_MODULE_10__["GraphComponent"] }
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

module.exports = "app-add-area {\n  top: 0;\n  position: fixed;\n  width: 100vw;\n}\n\n#nvbar {\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjemFyYW1vXFxQcm9qZWN0c1xcTWFwc3Rlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFkZC1hcmVhIHtcclxuICAgIHRvcDowO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbiNudmJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufSIsImFwcC1hZGQtYXJlYSB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbiNudmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAxMDAwO1xufSJdfQ== */"

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
        this.title = 'Saperr';
        pubsub.$sub("Add Area Page Active").subscribe(function (data) {
            var navbr = document.getElementById("nvbar");
            navbr.style.display = 'none';
        });
        pubsub.$sub("Add Area Page Deactivated").subscribe(function (data) {
            var navbr = document.getElementById("nvbar");
            navbr.style.display = 'block';
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", function () {
        }, false);
    };
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
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/pub-sub.service */ "./src/app/Services/pub-sub.service.ts");
/* harmony import */ var _http_intercept__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-intercept */ "./src/app/http-intercept.ts");
/* harmony import */ var _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/login/login.component */ "./src/app/Pages/login/login.component.ts");
/* harmony import */ var _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pages/home/home.component */ "./src/app/Pages/home/home.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Pages/areas/areas.component */ "./src/app/Pages/areas/areas.component.ts");
/* harmony import */ var _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pages/add-area/add-area.component */ "./src/app/Pages/add-area/add-area.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Popups/entry-dialog/entry-dialog.component */ "./src/app/Popups/entry-dialog/entry-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Pages_measurement_types_measurement_types_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Pages/measurement-types/measurement-types.component */ "./src/app/Pages/measurement-types/measurement-types.component.ts");
/* harmony import */ var _Popups_add_edit_measurement_type_dialog_add_edit_measurement_type_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component */ "./src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component.ts");
/* harmony import */ var _Popups_selection_dialog_selection_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Popups/selection-dialog/selection-dialog.component */ "./src/app/Popups/selection-dialog/selection-dialog.component.ts");
/* harmony import */ var _Pages_area_measurements_area_measurements_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Pages/area-measurements/area-measurements.component */ "./src/app/Pages/area-measurements/area-measurements.component.ts");
/* harmony import */ var _Pages_area_map_area_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Pages/area-map/area-map.component */ "./src/app/Pages/area-map/area-map.component.ts");
/* harmony import */ var _Services_mapster_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/mapster.client */ "./src/app/Services/mapster.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Services_token_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Services/token.interceptor */ "./src/app/Services/token.interceptor.ts");
/* harmony import */ var _Pages_graph_graph_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Pages/graph/graph.component */ "./src/app/Pages/graph/graph.component.ts");
/* harmony import */ var _Controls_graph_control_graph_control_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Controls/graph-control/graph-control.component */ "./src/app/Controls/graph-control/graph-control.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _Pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_15__["AreasComponent"],
                _Pages_add_area_add_area_component__WEBPACK_IMPORTED_MODULE_16__["AddAreaComponent"],
                _Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EntryDialogComponent"],
                _Pages_measurement_types_measurement_types_component__WEBPACK_IMPORTED_MODULE_20__["MeasurementTypesComponent"],
                _Popups_add_edit_measurement_type_dialog_add_edit_measurement_type_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddEditMeasurementTypeDialogComponent"],
                _Popups_selection_dialog_selection_dialog_component__WEBPACK_IMPORTED_MODULE_22__["SelectionDialogComponent"],
                _Pages_area_measurements_area_measurements_component__WEBPACK_IMPORTED_MODULE_23__["AreaMeasurementsComponent"],
                _Pages_area_map_area_map_component__WEBPACK_IMPORTED_MODULE_24__["AreaMapComponent"],
                _Pages_graph_graph_component__WEBPACK_IMPORTED_MODULE_28__["GraphComponent"],
                _Controls_graph_control_graph_control_component__WEBPACK_IMPORTED_MODULE_29__["GraphControlComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__["LeafletModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCU2867Rocotglq5fwvzEQnOJI6GqXCmSU',
                    libraries: ['places', 'drawing', 'geometry']
                })
            ],
            providers: [
                _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
                _Services_pub_sub_service__WEBPACK_IMPORTED_MODULE_8__["PubSubService"],
                _Services_mapster_client__WEBPACK_IMPORTED_MODULE_25__["Client"],
                _Services_mapster_client__WEBPACK_IMPORTED_MODULE_25__["UpdateClient"],
                _Services_mapster_client__WEBPACK_IMPORTED_MODULE_25__["CreateClient"],
                _Services_mapster_client__WEBPACK_IMPORTED_MODULE_25__["GetClient"],
                // { provide: API_BASE_URL, useValue: "https://localhost:44325" },
                { provide: _Services_mapster_client__WEBPACK_IMPORTED_MODULE_25__["API_BASE_URL"], useValue: "http://saperr.azurewebsites.net" },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"], useClass: _Services_token_interceptor__WEBPACK_IMPORTED_MODULE_27__["TokenInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"], useClass: _Services_token_interceptor__WEBPACK_IMPORTED_MODULE_27__["JwtInterceptor"], multi: true },
                _http_intercept__WEBPACK_IMPORTED_MODULE_9__["HttpIntercept"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [
                _Pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _Popups_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EntryDialogComponent"],
                _Popups_add_edit_measurement_type_dialog_add_edit_measurement_type_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddEditMeasurementTypeDialogComponent"],
                _Popups_selection_dialog_selection_dialog_component__WEBPACK_IMPORTED_MODULE_22__["SelectionDialogComponent"]
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


// let onDeviceReady = () => {
//   platformBrowserDynamic().bootstrapModule(AppModule);
// };
// document.addEventListener('deviceready', onDeviceReady, false);
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
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