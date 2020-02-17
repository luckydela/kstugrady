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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeComponent", function() { return routeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _lyt_lyt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lyt/lyt.component */ "./src/app/lyt/lyt.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _stdprofile_stdprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stdprofile/stdprofile.component */ "./src/app/stdprofile/stdprofile.component.ts");
/* harmony import */ var _finportal_finportal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finportal/finportal.component */ "./src/app/finportal/finportal.component.ts");
/* harmony import */ var _plcportal_plcportal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plcportal/plcportal.component */ "./src/app/plcportal/plcportal.component.ts");
/* harmony import */ var _estate_estate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estate/estate.component */ "./src/app/estate/estate.component.ts");
/* harmony import */ var _momopayoption_momopayoption_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./momopayoption/momopayoption.component */ "./src/app/momopayoption/momopayoption.component.ts");
/* harmony import */ var _confirmpayment_confirmpayment_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirmpayment/confirmpayment.components */ "./src/app/confirmpayment/confirmpayment.components.ts");
/* harmony import */ var _confirmattendance_confirmattendance_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirmattendance/confirmattendance.components */ "./src/app/confirmattendance/confirmattendance.components.ts");
/* harmony import */ var _service_authguard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/authguard */ "./src/app/service/authguard.ts");















var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"] },
    {
        path: '',
        component: _lyt_lyt_component__WEBPACK_IMPORTED_MODULE_4__["LytComponent"],
        canActivateChild: [_service_authguard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        children: [
            { path: 'stdprofile', component: _stdprofile_stdprofile_component__WEBPACK_IMPORTED_MODULE_7__["StdprofileComponent"] },
            { path: 'findpt', component: _finportal_finportal_component__WEBPACK_IMPORTED_MODULE_8__["FinportalComponent"] },
            { path: 'plancm', component: _plcportal_plcportal_component__WEBPACK_IMPORTED_MODULE_9__["PlcportalComponent"] },
            { path: 'est', component: _estate_estate_component__WEBPACK_IMPORTED_MODULE_10__["EstateComponent"] },
            { path: 'makepayment', component: _momopayoption_momopayoption_component__WEBPACK_IMPORTED_MODULE_11__["MomopayoptionComponent"] },
            { path: 'confirmpayment', component: _confirmpayment_confirmpayment_components__WEBPACK_IMPORTED_MODULE_12__["ConfirmpaymentComponent"] },
            { path: 'confirmattendance', component: _confirmattendance_confirmattendance_components__WEBPACK_IMPORTED_MODULE_13__["ConfirmattendanceComponent"] },
        ]
    },
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

var routeComponent = [_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _lyt_lyt_component__WEBPACK_IMPORTED_MODULE_4__["LytComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"],
    _stdprofile_stdprofile_component__WEBPACK_IMPORTED_MODULE_7__["StdprofileComponent"], _finportal_finportal_component__WEBPACK_IMPORTED_MODULE_8__["FinportalComponent"], _plcportal_plcportal_component__WEBPACK_IMPORTED_MODULE_9__["PlcportalComponent"], _momopayoption_momopayoption_component__WEBPACK_IMPORTED_MODULE_11__["MomopayoptionComponent"],
    _confirmattendance_confirmattendance_components__WEBPACK_IMPORTED_MODULE_13__["ConfirmattendanceComponent"], _confirmpayment_confirmpayment_components__WEBPACK_IMPORTED_MODULE_12__["ConfirmpaymentComponent"], _estate_estate_component__WEBPACK_IMPORTED_MODULE_10__["EstateComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/service.service */ "./src/app/service/service.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(ssv, router) {
        this.ssv = ssv;
        this.router = router;
        this.title = 'gradPort';
        console.log(JSON.parse(localStorage.getItem('isLoggedInStatus')));
    }
    AppComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('isLoggedInStatus')) === null) {
        }
        else {
            if (JSON.parse(localStorage.getItem('isLoggedInStatus'))['sts']) {
                this.router.navigate([JSON.parse(localStorage.getItem('isLoggedInStatus'))['ctx']]);
            }
        }
        this.start();
    };
    AppComponent.prototype.start = function () {
        var _this = this;
        this.ssv.start()
            .subscribe(function (rd) {
        }, function (err) {
            _this.ssv.dialog(err.message, err.name);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_authguard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/authguard */ "./src/app/service/authguard.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_service_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"], _service_authguard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirmattendance/confirmattendance.components.ts":
/*!*******************************************************************!*\
  !*** ./src/app/confirmattendance/confirmattendance.components.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmattendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmattendanceComponent", function() { return ConfirmattendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");





var ConfirmattendanceComponent = /** @class */ (function () {
    function ConfirmattendanceComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.disable = false;
        this.btntext = 'Confirm Attendance';
    }
    ConfirmattendanceComponent.prototype.ngOnInit = function () {
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
    };
    ConfirmattendanceComponent.prototype.confirm = function () {
        var _this = this;
        this.disable = true;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Graduation Attendance',
            text: "Are you sure you want to proceed? ",
            showCancelButton: true,
            confirmButtonText: 'Yes, Proceed',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.btntext = 'Processing ...';
                _this.ssv.confirmattendance(_this.userdata)
                    .subscribe(function (rd) {
                    _this.disable = false;
                    _this.btntext = 'Confirm Your Attendance';
                    if (rd === null) {
                        _this.ssv.dialog('::You cannot attend the graduation::', 'Error');
                    }
                    else if (rd['error']) {
                        _this.ssv.dialog(rd['error'], 'Error');
                    }
                    else {
                        _this.router.navigate(['stdprofile']);
                    }
                }, function (err) {
                    _this.disable = false;
                    _this.btntext = 'Confirm';
                    _this.ssv.dialog(err, 'Error');
                });
            }
            else {
                result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel;
                _this.disable = false;
            }
        });
    };
    ConfirmattendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmattendance',
            template: __webpack_require__(/*! ./confirmattendance.html */ "./src/app/confirmattendance/confirmattendance.html"),
            styles: [__webpack_require__(/*! ./confirmattendance.css */ "./src/app/confirmattendance/confirmattendance.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
    ], ConfirmattendanceComponent);
    return ConfirmattendanceComponent;
}());



/***/ }),

/***/ "./src/app/confirmattendance/confirmattendance.css":
/*!*********************************************************!*\
  !*** ./src/app/confirmattendance/confirmattendance.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdHRlbmRhbmNlL2NvbmZpcm1hdHRlbmRhbmNlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/confirmattendance/confirmattendance.html":
/*!**********************************************************!*\
  !*** ./src/app/confirmattendance/confirmattendance.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form>        \n      <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-primary\" (click)=\"confirm()\">{{btntext}}</button>                  \n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n  \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/confirmpayment/confirmpayment.components.ts":
/*!*************************************************************!*\
  !*** ./src/app/confirmpayment/confirmpayment.components.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmpaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpaymentComponent", function() { return ConfirmpaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");





var ConfirmpaymentComponent = /** @class */ (function () {
    function ConfirmpaymentComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.disable = false;
        this.btntext = 'Confirm';
    }
    ConfirmpaymentComponent.prototype.ngOnInit = function () {
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
    };
    ConfirmpaymentComponent.prototype.confirm = function () {
        var _this = this;
        // 92139229522
        this.disable = true;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Payment ?',
            text: "Are you sure you want to proceed ?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Proceed',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.btntext = 'Processing ...';
                _this.ssv.confirmpayment(_this.userdata, _this.rcptno)
                    .subscribe(function (rd) {
                    _this.disable = false;
                    _this.btntext = 'Confirm';
                    if (rd === null) {
                        _this.ssv.dialog('::You have no payments for transno:' + _this.rcptno + '. Your action has been logged::', 'Error');
                    }
                    else if (rd['error']) {
                        _this.ssv.dialog(rd['error'], 'Error');
                    }
                    else {
                        _this.router.navigate(['layout/stdprofile']);
                    }
                }, function (err) {
                    _this.disable = false;
                    _this.btntext = 'Confirm';
                    _this.ssv.dialog(err, 'Error');
                });
            }
            else {
                result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel;
                _this.disable = false;
            }
        });
    };
    ConfirmpaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmpayment',
            template: __webpack_require__(/*! ./confirmpayment.html */ "./src/app/confirmpayment/confirmpayment.html"),
            styles: [__webpack_require__(/*! ./confirmpayment.css */ "./src/app/confirmpayment/confirmpayment.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
    ], ConfirmpaymentComponent);
    return ConfirmpaymentComponent;
}());



/***/ }),

/***/ "./src/app/confirmpayment/confirmpayment.css":
/*!***************************************************!*\
  !*** ./src/app/confirmpayment/confirmpayment.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1wYXltZW50L2NvbmZpcm1wYXltZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/confirmpayment/confirmpayment.html":
/*!****************************************************!*\
  !*** ./src/app/confirmpayment/confirmpayment.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"row\">\n      <div class=\"col-md-4 col-lg-5 logincard\">\n     <div class=\"card animated tada\" >\n       <h3 class=\"card-category text-gray\" align=\"center\">Confirm Payment</h3>\n  <div class=\"card-avatar\">\n          <a href=\"#pablo\">\n          </a>\n        </div>\n        <div class=\"card-body\">\n            <form>\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\">Reciept No</label>\n                <input type=\"number\" class=\"form-control\" id=\"rcptno\" name=\"rcptno\" [(ngModel)]=\"rcptno\" required>\n              </div>\n              <br><br>        \n              <button type=\"submit\" [disabled]=\"disable\" class=\"btn\" (click)=\"confirm()\">{{btntext}}</button>                  \n          </form>\n    </div>\n\n</div>\n</div>\n\n</div>  \n</body>\n  \n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/estate/estate.component.css":
/*!*********************************************!*\
  !*** ./src/app/estate/estate.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n    height: 100%;\n}\n.content {\n    margin-top: 5px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n.card {\n    background-color: #ffffff;\n    padding: 30px 20px;\n    border-radius: 3px;\n    -webkit-box-flex: 0.5;\n            flex: 0.5 200px;\n    margin: 0 20px 20px 0;\n}\n.card span{\n    font-weight: 800;\n    font-size: 2rem;\n    margin: 0 0 1rem 0;\n}\nh1 {\n    color: #19153a;\n    font-size: 1rem;\n    margin-bottom: 2rem;\n}\ninput {\n    width: 50%;\n}\n.search {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n#detail {\n    font-size: 16px;\n}\n.status {\n    color: #9b2c2c;\n}\n.form-group {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 20px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n}\nselect {\n    margin: 0;\n    -webkit-box-flex: 0.7;\n            flex: 0.7;\n    padding: 0.7rem;\n    border: transparent;\n    border-radius: 5px;\n    background: #eff3f6;\n    color: #939798;\n}\nselect:focus {\n    outline: none;\n    border: 1px solid #939798;\n    background: #ffffff;\n}\n@media all and (max-width: 600px){\n    .menu {\n        -webkit-box-pack: center;\n                justify-content: center;\n    }    \n}\n@media all and (min-width: 900px){\n    li {\n        display: block;\n        width: auto;\n        -webkit-box-ordinal-group: 2;\n                order: 1;\n        padding: 0 15px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0YXRlL2VzdGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQWlCO0lBQWpCLDZCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFlO1lBQWYsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix1QkFBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxTQUFTO0lBQ1QscUJBQVM7WUFBVCxTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLHdCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCw0QkFBUTtnQkFBUixRQUFRO1FBQ1IsZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2VzdGF0ZS9lc3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZmxleDogMC41IDIwMHB4O1xuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbn1cbi5jYXJkIHNwYW57XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xufVxuaDEge1xuICAgIGNvbG9yOiAjMTkxNTNhO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuaW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG59XG4uc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2RldGFpbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLnN0YXR1cyB7XG4gICAgY29sb3I6ICM5YjJjMmM7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuc2VsZWN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleDogMC43O1xuICAgIHBhZGRpbmc6IDAuN3JlbTtcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICAgIGNvbG9yOiAjOTM5Nzk4O1xufVxuc2VsZWN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Mzk3OTg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAubWVudSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH0gICAgXG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDkwMHB4KXtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB9XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/estate/estate.component.html":
/*!**********************************************!*\
  !*** ./src/app/estate/estate.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"actions\">\n    <button class=\"btn btn-primary\" (click)=\"list()\">View Attendees</button>\n    <button class=\"btn btn-danger\" (click)=\"searchshow()\">Search Graduand</button>\n  </div>\n  <div class=\"content\">\n      <div class=\"card\">\n        <h1>Total Graduands</h1>\n        <span>{{tot}}</span>Students\n      </div>\n    <div class=\"card\">\n      <h1>Graduands Attending</h1>\n      <span>{{atd}}</span>Students\n    </div>\n    <!-- <div class=\"card\">\n      <h1>Graduands Not Attending</h1>\n      <span>{{ntd}}</span>Students\n    </div> -->\n    <div class=\"card\">\n      <h1>Paid</h1>\n      <span>{{paid}}</span>Students\n    </div>\n    <div class=\"card\">\n      <h1>Allocated Gowns</h1>\n      <span>{{aloc}}</span>Students\n    </div>\n  </div>\n  <div class=\"search\">\n    <div class=\"card\" *ngIf=\"showsearch\">\n      <h1>Search Graduand</h1>\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"studentno\" [(ngModel)]=\"studentno\" placeholder=\"Studentno\" required>\n          <div>\n            <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-danger\"   (click)=\"search()\">{{searchtext}}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card\" *ngIf=\"result\">\n      <h1>{{firstname}}   {{lastname}}</h1>\n      <span id=\"detail\">{{indexno}}</span>\n      <span id=\"detail\">{{sno}}</span>\n      <span id=\"detail\">{{gender}}</span>\n      <span id=\"detail\">Entry Year:: {{entryyear}}</span>\n      <span id=\"detail\">Graduating Year:: {{exityear}}</span>\n      <span id=\"detail\">{{mobileno}}</span>\n      <span id=\"detail\">{{programme}}</span>\n      <span id=\"detail\">{{department}}</span>\n      <span id=\"detail\">{{faculty}}</span>\n      <span id=\"detail\" class=\"status\">{{paidstatus}}</span>\n      <span id=\"detail\" class=\"status\">{{attendancestatus}}</span>\n      <span id=\"detail\" class=\"status\">{{gownstate}}</span>\n      <div class=\"form-group\">\n        <label>Gown Allocation</label>\n        <select name=\"gown\" [(ngModel)]=\"gown\" (ngModelChange)=\"dataChanged($event)\">\n            <option   [value]=\"1\" >Allocated</option>\n            <option   [value]=\"0\" >Not Allocated</option>\n        </select>\n        <!-- <input type=\"text\" [(ngModel)]=\"gown\" name=\"gown\" placeholder=\"Your Active Mobile Number\" required> -->\n    </div>\n    <div>\n      <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-danger\"   (click)=\"close()\">Close</button>\n      <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-danger\"   (click)=\"save()\">{{savetext}}</button>\n    </div>\n    </div>\n  </div>\n  \n  <div class=\"list\" *ngIf=\"showlist\">\n    Attendees\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/estate/estate.component.ts":
/*!********************************************!*\
  !*** ./src/app/estate/estate.component.ts ***!
  \********************************************/
/*! exports provided: EstateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateComponent", function() { return EstateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");




var EstateComponent = /** @class */ (function () {
    function EstateComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.atd = 0;
        this.ntd = 0;
        this.tot = 0;
        this.paid = 0;
        this.aloc = 0;
        this.showsearch = true;
        this.showlist = false;
        this.searchtext = 'Search';
        this.savetext = 'Save';
        this.studentno = '';
        this.disable = false;
        this.paymentstatus = 0;
        this.mobile = '';
        this.result = false;
    }
    EstateComponent.prototype.ngOnInit = function () {
        this.fetchparams();
    };
    EstateComponent.prototype.fetchparams = function () {
        var _this = this;
        this.ssv.fetchdash('academic')
            .subscribe(function (rd) {
            _this.tot = rd[0]['tot'];
            _this.atd = rd[0]['atd'];
            _this.ntd = rd[0]['ntd'];
            _this.paid = rd[0]['paid'];
            _this.aloc = rd[0]['aloc'];
        }, function (err) {
            _this.ssv.dialog(err, 'Error');
        });
    };
    EstateComponent.prototype.searchshow = function () {
        this.showsearch = true;
        this.showlist = false;
    };
    EstateComponent.prototype.list = function () {
        this.showlist = true;
        this.showsearch = false;
    };
    EstateComponent.prototype.search = function () {
        var _this = this;
        if (this.studentno === '')
            return this.ssv.dialog('Studentno field is required', 'Caution');
        this.disable = true;
        this.searchtext = 'Processing ...';
        this.ssv.fetchdata(this.studentno)
            .subscribe(function (rd) {
            _this.disable = false;
            _this.searchtext = 'Search';
            if (rd === null) {
                _this.ssv.dialog('We could not find a student with studentno:: ' + _this.studentno, 'Message');
            }
            else if (rd['error']) {
                _this.ssv.dialog(rd['error'], 'Error');
            }
            else {
                _this.result = true;
                _this.showsearch = false;
                _this.user = rd[0];
                _this.gender = _this.user.gender === 1 ? 'MALE' : 'FEMALE';
                _this.firstname = _this.user.firstname;
                _this.lastname = _this.user.lastname;
                _this.sno = _this.user.studentno;
                _this.indexno = _this.user.indexno;
                _this.exityear = _this.user.exityear;
                _this.entryyear = _this.user.entryyear;
                _this.department = _this.user.department;
                _this.faculty = _this.user.faculty;
                _this.programme = rd[0].programme;
                _this.paidstatus = rd[0].paymentstatus === 2 ? 'GRADUATION PAYMENTS RECEIVED' : 'NO GRADUATION PAYMENTS RECEIVED';
                _this.paymentstatus = rd[0].paymentstatus;
                _this.attendancestatus = rd[0].attendancestatus === 1 ? 'ATTENDING' : 'NOT ATTENDING';
                _this.mobile = rd[0].mobileno;
                _this.tel = rd[0].mobileno;
                _this.gownstate = rd[0].gown === 0 ? 'GOWN NOT ALLOCATED' : 'GOWN ALLOCATED';
                _this.studentno = '';
            }
        }, function (err) {
            _this.disable = false;
            _this.ssv.dialog(err, 'Error');
            _this.searchtext = 'Search';
        });
    };
    EstateComponent.prototype.dataChanged = function ($event) {
        this.gown;
    };
    EstateComponent.prototype.close = function () {
        this.result = false;
        this.showsearch = true;
    };
    EstateComponent.prototype.save = function () {
        var _this = this;
        if (this.gown === undefined)
            return this.ssv.dialog('Select Gown Allocation', 'Message');
        this.disable = true;
        this.savetext = 'Processing ...';
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
        this.ssv.updategown(this.sno, this.gown, this.userdata)
            .subscribe(function (rd) {
            _this.disable = false;
            _this.savetext = 'Search';
            if (rd === null) {
                _this.ssv.dialog('We could not find a student with studentno:: ' + _this.studentno, 'Message');
            }
            else if (rd['error']) {
                _this.ssv.dialog(rd['error'], 'Error');
            }
            else {
                _this.result = true;
                _this.showsearch = false;
                _this.user = rd[0];
                _this.gownstate = rd[0].gown === 0 ? 'GOWN NOT ALLOCATED' : 'GOWN ALLOCATED';
                _this.fetchparams();
            }
        }, function (err) {
            _this.disable = false;
            _this.ssv.dialog(err, 'Error');
            _this.savetext = 'Search';
        });
    };
    EstateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estate',
            template: __webpack_require__(/*! ./estate.component.html */ "./src/app/estate/estate.component.html"),
            styles: [__webpack_require__(/*! ./estate.component.css */ "./src/app/estate/estate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], EstateComponent);
    return EstateComponent;
}());



/***/ }),

/***/ "./src/app/finportal/finportal.component.css":
/*!***************************************************!*\
  !*** ./src/app/finportal/finportal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n    height: 100%;\n}\n.content {\n    margin-top: 5px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n.card {\n    background-color: #ffffff;\n    padding: 30px 20px;\n    border-radius: 3px;\n    -webkit-box-flex: 0.5;\n            flex: 0.5 200px;\n    margin: 0 20px 20px 0;\n}\n.card span{\n    font-weight: 800;\n    font-size: 2rem;\n    margin: 0 0 1rem 0;\n}\nh1 {\n    color: #19153a;\n    font-size: 1rem;\n    margin-bottom: 2rem;\n}\ninput {\n    width: 50%;\n}\n@media all and (max-width: 600px){\n    .menu {\n        -webkit-box-pack: center;\n                justify-content: center;\n    }\n    \n    \n    \n}\n@media all and (min-width: 900px){\n    li {\n        display: block;\n        width: auto;\n        -webkit-box-ordinal-group: 2;\n                order: 1;\n        padding: 0 15px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlucG9ydGFsL2ZpbnBvcnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQWlCO0lBQWpCLDZCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFlO1lBQWYsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJO1FBQ0ksd0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7Ozs7QUFJSjtBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLDRCQUFRO2dCQUFSLFFBQVE7UUFDUixlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvZmlucG9ydGFsL2ZpbnBvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmbGV4OiAwLjUgMjAwcHg7XG4gICAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xufVxuLmNhcmQgc3BhbntcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG5oMSB7XG4gICAgY29sb3I6ICMxOTE1M2E7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5pbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAubWVudSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/finportal/finportal.component.html":
/*!****************************************************!*\
  !*** ./src/app/finportal/finportal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div class=\"actions\">\n    <button class=\"btn btn-primary\">+ New</button>\n  </div> -->\n  <div class=\"content\">\n    <div class=\"card\">\n      <h1>Mobile Money</h1>\n      <span>{{momo}}</span>Students\n    </div>\n    <div class=\"card\">\n      <h1>Cash Office</h1>\n      <span>{{cash}}</span>Students\n    </div>\n    <div class=\"card\">\n      <h1>Bank Payments</h1>\n      <span>{{bank}}</span>Students\n    </div>\n  </div>\n  <div class=\"card\">\n    <h1>Graduation Cash Payments</h1>\n    <form>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"studentno\" [(ngModel)]=\"studentno\" placeholder=\"Studentno\" required>\n        <input type=\"text\" name=\"sagecode\" [(ngModel)]=\"sagecode\" placeholder=\"Sage Receipt No\" required>\n        <div>\n          <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-danger\"   (click)=\"search()\">{{searchtext}}</button>\n          <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-primary\"   (click)=\"makepayment()\">{{btntext}}</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/finportal/finportal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/finportal/finportal.component.ts ***!
  \**************************************************/
/*! exports provided: FinportalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinportalComponent", function() { return FinportalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");





var FinportalComponent = /** @class */ (function () {
    function FinportalComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.disable = false;
        this.btntext = 'Submit';
        this.searchtext = 'Search';
        this.studentno = '';
        this.sagecode = '';
    }
    FinportalComponent.prototype.ngOnInit = function () {
        this.fetchparams();
    };
    FinportalComponent.prototype.fetchparams = function () {
        var _this = this;
        this.ssv.fetchdash('dashboard')
            .subscribe(function (rd) {
            _this.cash = rd[0]['csh'];
            _this.bank = rd[0]['bnk'];
            _this.momo = rd[0]['mmo'];
        }, function (err) {
            _this.ssv.dialog(err, 'Error');
        });
    };
    FinportalComponent.prototype.makepayment = function () {
        var _this = this;
        if (this.studentno === '' || this.sagecode === '')
            return this.ssv.dialog('All fields are required', 'Caution');
        this.disable = true;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
        swalWithBootstrapButtons.fire({
            title: 'Payment ?',
            text: "Are you sure you want to proceed ?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Proceed',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.btntext = 'Processing ...';
                _this.ssv.cashpayment(_this.studentno, _this.sagecode, _this.userdata)
                    .subscribe(function (rd) {
                    _this.disable = false;
                    _this.btntext = 'Submit';
                    if (rd === null) {
                        _this.ssv.dialog('We could not find a student with studentno:: ' + _this.studentno, 'Error');
                    }
                    else if (rd['error']) {
                        _this.ssv.dialog(rd['error'], 'Error');
                    }
                    else {
                        _this.studentno = '';
                        _this.sagecode = '';
                        var msg = "Studentno:: " + rd[0]['studentno'] + "   \n            TransactionId:: " + rd[0]['transno'] + "    Amount:: GHC " + rd[0]['amount'];
                        _this.fetchparams();
                        _this.ssv.dialog(msg, 'Success');
                    }
                }, function (err) {
                    _this.disable = false;
                    _this.ssv.dialog(err, 'Error');
                    _this.btntext = 'Submit';
                });
            }
            else {
                result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel;
                _this.disable = false;
            }
        });
    };
    FinportalComponent.prototype.search = function () {
        var _this = this;
        if (this.studentno === '')
            return this.ssv.dialog('Studentno field is required', 'Caution');
        this.disable = true;
        this.searchtext = 'Processing ...';
        this.ssv.fetchdata(this.studentno)
            .subscribe(function (rd) {
            _this.disable = false;
            _this.searchtext = 'Search';
            if (rd === null) {
                _this.ssv.dialog('We could not find a student with studentno:: ' + _this.studentno, 'Message');
                _this.studentno = '';
            }
            else if (rd['error']) {
                _this.ssv.dialog(rd['error'], 'Error');
            }
            else {
                var msg = "We found the student " + rd[0]['studentno'];
                _this.ssv.dialog(msg, 'Success');
            }
        }, function (err) {
            _this.disable = false;
            _this.ssv.dialog(err, 'Error');
            _this.searchtext = 'Search';
        });
    };
    FinportalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finportal',
            template: __webpack_require__(/*! ./finportal.component.html */ "./src/app/finportal/finportal.component.html"),
            styles: [__webpack_require__(/*! ./finportal.component.css */ "./src/app/finportal/finportal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
    ], FinportalComponent);
    return FinportalComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.showcase {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n    background: url('kstubg.jpeg') no-repeat center center/cover;\n}\n.showcase::after{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index:1;\n    background: rgba(0, 0, 0, 0.8);\n}\n.showcase-top {\n    position: relative;\n    z-index: 2;\n    height: 90px;\n}\n.showcase-top img{\n    width: 100px;\n    position: absolute;\n    border-radius: 50%;\n    top: 80%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.showcase-top a {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.showcase-content {\n    position: relative;\n    z-index: 2;\n    margin: auto;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    margin-top: 5rem;\n    margin-bottom: 15rem;\n}\n.showcase-content h1 {\n    font-weight: 500;\n    font-size: 1.5rem;\n    line-height: 1.1;\n    margin: 0 0 1rem;\n}\n.showcase-content p {\n    text-transform: uppercase;\n    color: #fff;\n    font-weight: 400;\n    font-size: 1rem;\n    line-height: 1.25;\n    margin: 0 0 1rem;\n\n}\n.instruction {\n    position: relative;\n    z-index: 2;\n    margin: 20px;\n    text-align: center;\n}\n.instruction p {\n    color: #fff;\n    font-size: 0.6rem;\n}\n#staff{\n    margin-bottom: 100px;\n}\n@media (min-width: 540px) {\n  \n    .instruction p {\n        color: #fff;\n        font-size: 14px;\n    }\n    .showcase-content {\n        margin-top: 9rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNERBQTJFO0FBQy9FO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1Isd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2hvd2Nhc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2tzdHViZy5qcGVnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3Zlcjtcbn1cbi5zaG93Y2FzZTo6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OjE7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLnNob3djYXNlLXRvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiA5MHB4O1xufVxuLnNob3djYXNlLXRvcCBpbWd7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdG9wOiA4MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnNob3djYXNlLXRvcCBhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cmVtO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xufVxuLnNob3djYXNlLWNvbnRlbnQgcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xuXG59XG4uaW5zdHJ1Y3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdHJ1Y3Rpb24gcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG59XG4jc3RhZmZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NDBweCkge1xuICBcbiAgICAuaW5zdHJ1Y3Rpb24gcCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5zaG93Y2FzZS1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogOXJlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"showcase\">\n    <div class=\"showcase-top\">\n        <img src=\"assets/img/logo.jpeg\"  alt=\"KsTU\" >\n        <!-- <a href=\"#\" class=\"btn btn-rounded\">Login</a> -->\n    </div>\n    <div class=\"showcase-content\">\n        <h1>Kumasi Technical University</h1>\n        <p>Graduation Portal</p>\n        <button  (click)=\"getStarted('login')\" class=\"btn btn-primary btn-lg\">\n            Student <i class=\"fas fa-chevron-right btn-icon\"></i>\n        </button>\n        <button id=\"staff\"  (click)=\"getStarted('staff')\" class=\"btn btn-danger btn-lg\">\n            Staff     <i class=\"fas fa-chevron-right btn-icon\"></i>\n        </button>\n        Contact KsTU-ICT Directorate or Call 0241171126 for Support\n    </div>\n    <!-- <div class=\"instruction\">\n        <h5>INSTRUCTIONS FOR MOMO PAYMENTS</h5>\n        <p>1. Click on <strong>STUDENT</strong></p>\n        <p>2. Enter your <strong>STUDENT NUMBER</strong> and click on <strong>SUBMIT</strong></p>\n        <p>3. Click on <strong>PROCEED TO PAYMENT</strong></p>\n        <p>4. Now Click on <strong>MAKE MOMO PAYMENT</strong></p>\n        <p>5. Wait for the MOMO Platform to load and select <strong>PAY WITH MOBILE</strong></p>\n        <p>6. Choose your MOMO vendor, enter your MOMO phone number and click <strong>PAY</strong></p>\n        <p>7. Wait for the prompt on your phone and enter your 4 digit Authorization PIN Code (XXXX).</p>\n        <p>8. After the transaction completes you will see your receiptno on the screen</p>\n        <p>9. Click on <strong>PROCEED</strong></p>\n        <p>10. Click on <strong>Attend graduation</strong>, if you are attending January, 2020 graduation.</p>\n        <p>11. Click on <strong>Not attend graduation</strong>, if you are not attending January, 2020 graduation.</p>\n        <p>12. Click on <strong>PRINT</strong> for your receipt printout.</p>\n\n        <p>\n            <strong>\n                NB: All Receipt printout are not to be submitted to the University; it is meant for personal\n                records.\n            </strong>\n        </p>\n    </div> -->\n</header>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getStarted = function (route) {
        // if(route === 'login') return this.ssv.dialog('The system has been closed for graduation registration','Message')
        this.router.navigate([route]);
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n\n    height: 100vh;\n    background: #ffffff;\n}\n\n.login-top {\n    position: relative;\n    height: 90px;\n    margin-top: 90px;\n}\n\n.login-top img{\n    width: 100px;\n    position: absolute;\n    border-radius: 50%;\n    /* top: 10%; */\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\nbutton {\n    width:100%;\n}\n\nform {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\nh1 {\n    color: #19153a;\n    font-size: 1.5rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmxvZ2luLXRvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xufVxuLmxvZ2luLXRvcCBpbWd7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLyogdG9wOiAxMCU7ICovXG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYnV0dG9uIHtcbiAgICB3aWR0aDoxMDAlO1xufVxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oMSB7XG4gICAgY29sb3I6ICMxOTE1M2E7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"login\">\n  <h1>Kumasi Technical University</h1>\n  <p>Graduation Portal</p>\n  <p>Students' Login</p>\n  <div class=\"login-top\">\n    <img src=\"assets/img/logo.jpeg\"  alt=\"KsTU\" >\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label> Student Number</label>\n      <input type=\"text\" [(ngModel)]=\"usr.studentno\" name=\"studentno\" placeholder=\"e.g. 051XXXXXXXXXX\" required>\n      <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-primary\"   (click)=\"stdlogin()\">Submit</button>\n    </div>\n  </form>\n</div>\n     "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.usr = {
            studentno: ''
        };
        this.rd = [];
        this.disable = false;
        this.btntext = 'Submit';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.stdlogin = function () {
        var _this = this;
        this.disable = true;
        // swal.showLoading()
        if (this.usr.studentno === '') {
            this.disable = false;
            // swal.hideLoading()
            this.ssv.dialog('Enter your Student Number', 'Error');
        }
        else {
            this.btntext = 'Processing ...';
            this.ssv.login(this.usr)
                .subscribe(function (rd) {
                _this.disable = false;
                _this.btntext = 'Submit';
                // swal.hideLoading()
                if (rd === null) {
                    _this.ssv.dialog('We could not find a student with studentno:: ' + _this.usr.studentno, 'Error');
                }
                else if (rd['error']) {
                    _this.ssv.dialog(rd['error'], 'Error');
                }
                else {
                    // let rdd = rd[0].gender === 1 ? 'MALE' : 'FEMALE';
                    localStorage.setItem('ud', JSON.stringify(rd));
                    localStorage.setItem('isLoggedInStatus', JSON.stringify({ 'sts': true, 'ctx': 'stdprofile' }));
                    _this.router.navigate(['stdprofile']);
                }
            }, function (err) {
                // swal.hideLoading()
                _this.btntext = 'Submit';
                _this.disable = false;
                _this.ssv.dialog(err, 'Error');
                // this.router.navigate(['layout/stdprofile']);
            });
        }
    };
    LoginComponent.prototype.attendace = function () {
    };
    LoginComponent.prototype.print = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lyt/lyt.component.css":
/*!***************************************!*\
  !*** ./src/app/lyt/lyt.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n    background: #e2e8f0;\n    height: 100vh;\n}\n.content {\n    margin: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHl0L2x5dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9seXQvbHl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lyt/lyt.component.html":
/*!****************************************!*\
  !*** ./src/app/lyt/lyt.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n  <nav>\n    <div class=\"logo\">\n      <img src=\"assets/img/logo.jpeg\"  alt=\"KsTU\" >\n      Kumasi Technical University\n    </div>\n    <div class=\"logout\" (click)=\"logout()\">\n      Logout\n    </div>\n  </nav>\n\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lyt/lyt.component.ts":
/*!**************************************!*\
  !*** ./src/app/lyt/lyt.component.ts ***!
  \**************************************/
/*! exports provided: LytComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LytComponent", function() { return LytComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_roles_mockup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/roles.mockup */ "./src/app/service/roles.mockup.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var LytComponent = /** @class */ (function () {
    function LytComponent(router) {
        this.router = router;
        this.userdata = JSON.parse(localStorage.getItem('userdata'));
        this.menus = [];
        this.menus = _service_roles_mockup__WEBPACK_IMPORTED_MODULE_3__["PRIVILEDGES"].filter(function (menu) {
            // return menu.role === this.userdata.role;
        });
    }
    LytComponent.prototype.ngOnInit = function () {
    };
    LytComponent.prototype.routefn = function (route) {
        this.router.navigate([route]);
    };
    LytComponent.prototype.profile = function () {
        this.router.navigate(['stdprofile']);
    };
    LytComponent.prototype.logout = function () {
        var _this = this;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Logout ?',
            text: "Logging out?",
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                window.localStorage.clear();
                _this.router.navigate(['/']);
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else
                (
                /* Read more about handling dismissals below */
                result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel);
        });
    };
    LytComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lyt',
            template: __webpack_require__(/*! ./lyt.component.html */ "./src/app/lyt/lyt.component.html"),
            styles: [__webpack_require__(/*! ./lyt.component.css */ "./src/app/lyt/lyt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LytComponent);
    return LytComponent;
}());



/***/ }),

/***/ "./src/app/momopayoption/momopayoption.component.css":
/*!***********************************************************!*\
  !*** ./src/app/momopayoption/momopayoption.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    width:100%;\n}\nform {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\nh1 {\n    color: #19153a;\n    font-size: 1rem;\n    margin-bottom: 2rem;\n}\n.card {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.form-group {\n    -webkit-box-align: start;\n            align-items: flex-start;\n}\np {\n    font-size: 14px;\n}\nbutton {\n    margin-top: 15px;\n}\nspan {\n    font-size: 18px;\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9tb3BheW9wdGlvbi9tb21vcGF5b3B0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9tb3BheW9wdGlvbi9tb21vcGF5b3B0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIHdpZHRoOjEwMCU7XG59XG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmgxIHtcbiAgICBjb2xvcjogIzE5MTUzYTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5zcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/momopayoption/momopayoption.component.html":
/*!************************************************************!*\
  !*** ./src/app/momopayoption/momopayoption.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <h1>Mobile Money Payment Summary</h1>\n  <form>\n    <div class=\"form-group\">\n      <p>Graduation Fee:: <span>GHC 350.00</span></p>\n      <p>Transaction Fee:: <span>3%</span></p>\n      <p>Grand Total:: <span>GHC 360.50</span></p>\n      <!-- <input type=\"number\" name=\"amount\" [ngModel]=\"amount\" required disabled> -->\n      <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-primary\"   (click)=\"makepayment()\">{{btntext}}</button>\n    </div>\n  </form>\n</div>\n       \n\n\n\n\n\n\n  \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/momopayoption/momopayoption.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/momopayoption/momopayoption.component.ts ***!
  \**********************************************************/
/*! exports provided: MomopayoptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomopayoptionComponent", function() { return MomopayoptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");





var MomopayoptionComponent = /** @class */ (function () {
    function MomopayoptionComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.amount = 360.50;
        this.disable = false;
        this.btntext = 'Submit';
    }
    MomopayoptionComponent.prototype.ngOnInit = function () {
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
    };
    MomopayoptionComponent.prototype.makepayment = function () {
        var _this = this;
        this.disable = true;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Payment ?',
            text: "Are you sure you want to proceed ?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Proceed',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.btntext = 'Processing ...';
                _this.ssv.payment(_this.userdata)
                    .subscribe(function (rd) {
                    _this.disable = false;
                    _this.btntext = 'Submit';
                    // console.log(rd);
                    if (rd['code'] === 600) {
                        _this.ssv.dialog(rd['reason'], rd['status']);
                    }
                    else if (rd['code'] === 999) {
                        _this.ssv.dialog(rd['description'], rd['status']);
                    }
                    else if (rd['code'] === 900) {
                        _this.ssv.dialog(rd['reason'], 'status');
                    }
                    else if (rd['code'] === 200) {
                        window.open(rd['checkout_url']);
                    }
                    else if (rd['error']) {
                        _this.ssv.dialog(rd['error'], 'Error');
                    }
                }, function (err) {
                    _this.disable = false;
                    _this.ssv.dialog(err, 'Error');
                });
            }
            else {
                result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel;
                _this.disable = false;
            }
        });
    };
    MomopayoptionComponent.prototype.bankverifypayment = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Veriication Successful', '...Accept to register and print graduation letter', 'success');
        this.router.navigate(['stdprofile']);
    };
    MomopayoptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-momopayoption',
            template: __webpack_require__(/*! ./momopayoption.component.html */ "./src/app/momopayoption/momopayoption.component.html"),
            styles: [__webpack_require__(/*! ./momopayoption.component.css */ "./src/app/momopayoption/momopayoption.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
    ], MomopayoptionComponent);
    return MomopayoptionComponent;
}());



/***/ }),

/***/ "./src/app/plcportal/plcportal.component.css":
/*!***************************************************!*\
  !*** ./src/app/plcportal/plcportal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n    height: 100%;\n}\n.content {\n    margin-top: 5px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n.card {\n    background-color: #ffffff;\n    padding: 30px 20px;\n    border-radius: 3px;\n    -webkit-box-flex: 0.5;\n            flex: 0.5 200px;\n    margin: 0 20px 20px 0;\n}\n.card span{\n    font-weight: 800;\n    font-size: 2rem;\n    margin: 0 0 1rem 0;\n}\nh1 {\n    color: #19153a;\n    font-size: 1rem;\n    margin-bottom: 2rem;\n}\ninput {\n    width: 50%;\n}\n.search {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n#detail {\n    font-size: 16px;\n}\n.status {\n    color: #9b2c2c;\n}\n@media all and (max-width: 600px){\n    .menu {\n        -webkit-box-pack: center;\n                justify-content: center;\n    }\n    \n    \n    \n}\n@media all and (min-width: 900px){\n    li {\n        display: block;\n        width: auto;\n        -webkit-box-ordinal-group: 2;\n                order: 1;\n        padding: 0 15px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxjcG9ydGFsL3BsY3BvcnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQWlCO0lBQWpCLDZCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFlO1lBQWYsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksd0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7Ozs7QUFJSjtBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLDRCQUFRO2dCQUFSLFFBQVE7UUFDUixlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGxjcG9ydGFsL3BsY3BvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmbGV4OiAwLjUgMjAwcHg7XG4gICAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xufVxuLmNhcmQgc3BhbntcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG5oMSB7XG4gICAgY29sb3I6ICMxOTE1M2E7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5pbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uc3RhdHVzIHtcbiAgICBjb2xvcjogIzliMmMyYztcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAubWVudSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/plcportal/plcportal.component.html":
/*!****************************************************!*\
  !*** ./src/app/plcportal/plcportal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"actions\">\n    <button class=\"btn btn-primary\" (click)=\"list()\">View Attendees</button>\n    <button class=\"btn btn-danger\" (click)=\"searchshow()\">Search Graduand</button>\n  </div>\n  <div class=\"content\">\n      <div class=\"card\">\n        <h1>Total Graduands</h1>\n        <span>{{tot}}</span>Students\n      </div>\n    <div class=\"card\">\n      <h1>Graduands Attending</h1>\n      <span>{{atd}}</span>Students\n    </div>\n    <div class=\"card\">\n      <h1>Graduands Not Attending</h1>\n      <span>{{ntd}}</span>Students\n    </div>\n    <div class=\"card\">\n      <h1>Paid</h1>\n      <span>{{paid}}</span>Students\n    </div>\n  </div>\n  <div class=\"search\">\n    <div class=\"card\" *ngIf=\"showsearch\">\n      <h1>Search Graduand</h1>\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"studentno\" [(ngModel)]=\"studentno\" placeholder=\"Studentno\" required>\n          <div>\n            <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-danger\"   (click)=\"search()\">{{searchtext}}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card\" *ngIf=\"result\">\n      <h1>{{firstname}}   {{lastname}}</h1>\n      <span id=\"detail\">{{indexno}}</span>\n      <span id=\"detail\">{{sno}}</span>\n      <span id=\"detail\">{{gender}}</span>\n      <span id=\"detail\">Entry Year:: {{entryyear}}</span>\n      <span id=\"detail\">Graduating Year:: {{exityear}}</span>\n      <span id=\"detail\">{{mobileno}}</span>\n      <span id=\"detail\">{{programme}}</span>\n      <span id=\"detail\">{{department}}</span>\n      <span id=\"detail\">{{faculty}}</span>\n      <span id=\"detail\" class=\"status\">{{paidstatus}}</span>\n      <span id=\"detail\" class=\"status\">{{attendancestatus}}</span>\n\n      <div>\n          <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-danger\"   (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"list\" *ngIf=\"showlist\">\n    Attendees\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/plcportal/plcportal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/plcportal/plcportal.component.ts ***!
  \**************************************************/
/*! exports provided: PlcportalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlcportalComponent", function() { return PlcportalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");




var PlcportalComponent = /** @class */ (function () {
    function PlcportalComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.atd = 0;
        this.ntd = 0;
        this.tot = 0;
        this.paid = 0;
        this.showsearch = true;
        this.showlist = false;
        this.searchtext = 'Search';
        this.studentno = '';
        this.disable = false;
        this.paymentstatus = 0;
        this.mobile = '';
        this.result = false;
    }
    PlcportalComponent.prototype.ngOnInit = function () {
        this.fetchparams();
    };
    PlcportalComponent.prototype.fetchparams = function () {
        var _this = this;
        this.ssv.fetchdash('academic')
            .subscribe(function (rd) {
            _this.tot = rd[0]['tot'];
            _this.atd = rd[0]['atd'];
            _this.ntd = rd[0]['ntd'];
            _this.paid = rd[0]['paid'];
        }, function (err) {
            _this.ssv.dialog(err, 'Error');
        });
    };
    PlcportalComponent.prototype.searchshow = function () {
        this.showsearch = true;
        this.showlist = false;
    };
    PlcportalComponent.prototype.list = function () {
        this.showlist = true;
        this.showsearch = false;
    };
    PlcportalComponent.prototype.search = function () {
        var _this = this;
        if (this.studentno === '')
            return this.ssv.dialog('Studentno field is required', 'Caution');
        this.disable = true;
        this.searchtext = 'Processing ...';
        this.ssv.fetchdata(this.studentno)
            .subscribe(function (rd) {
            _this.disable = false;
            _this.searchtext = 'Search';
            if (rd === null) {
                _this.ssv.dialog('We could not find a student with studentno:: ' + _this.studentno, 'Message');
            }
            else if (rd['error']) {
                _this.ssv.dialog(rd['error'], 'Error');
            }
            else {
                _this.result = true;
                _this.showsearch = false;
                _this.user = rd[0];
                _this.gender = _this.user.gender === 1 ? 'MALE' : 'FEMALE';
                _this.firstname = _this.user.firstname;
                _this.lastname = _this.user.lastname;
                _this.sno = _this.user.studentno;
                _this.indexno = _this.user.indexno;
                _this.exityear = _this.user.exityear;
                _this.entryyear = _this.user.entryyear;
                _this.department = _this.user.department;
                _this.faculty = _this.user.faculty;
                _this.programme = rd[0].programme;
                _this.paidstatus = rd[0].paymentstatus === 2 ? 'GRADUATION PAYMENTS RECEIVED' : 'NO GRADUATION PAYMENTS RECEIVED';
                _this.paymentstatus = rd[0].paymentstatus;
                _this.attendancestatus = rd[0].attendancestatus === 1 ? 'ATTENDING' : 'NOT ATTENDING';
                _this.mobile = rd[0].mobileno;
                _this.tel = rd[0].mobileno;
                _this.studentno = '';
            }
        }, function (err) {
            _this.disable = false;
            _this.ssv.dialog(err, 'Error');
            _this.searchtext = 'Search';
        });
    };
    PlcportalComponent.prototype.close = function () {
        this.result = false;
        this.showsearch = true;
    };
    PlcportalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plcportal',
            template: __webpack_require__(/*! ./plcportal.component.html */ "./src/app/plcportal/plcportal.component.html"),
            styles: [__webpack_require__(/*! ./plcportal.component.css */ "./src/app/plcportal/plcportal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], PlcportalComponent);
    return PlcportalComponent;
}());



/***/ }),

/***/ "./src/app/service/authguard.ts":
/*!**************************************!*\
  !*** ./src/app/service/authguard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.service */ "./src/app/service/service.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/roles.mockup.ts":
/*!*****************************************!*\
  !*** ./src/app/service/roles.mockup.ts ***!
  \*****************************************/
/*! exports provided: PRIVILEDGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVILEDGES", function() { return PRIVILEDGES; });
var PRIVILEDGES = [
    //this part is for student privileges
    { role: 'gdstd', name: 'User Profile', route: '/profile', icon: 'person' },
    { role: 'gdstd', name: 'User Profile', route: '/profile', icon: 'Notifications_none' },
    { role: 'gdstd', name: 'User Profile', route: '/profile', icon: 'queue' },
    //this part is for planning committee privileges
    { role: 'plcadmin', name: 'User Profile', route: '/profile', icon: 'person' },
    //this part is for financial adminstrator
    { role: 'finadmin', name: 'User Profile', route: '/profile', icon: 'person' },
    //this part is for admin
    { role: 'admin', name: 'User Profile', route: '/profile', icon: 'person' },
];


/***/ }),

/***/ "./src/app/service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        // devurl:any = 'http://kstugraduate.loc/svs/';
        this.devurl = 'https://grad.kstu.edu.gh/svs/';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Access-Control-Allow-Origin", "http://localhost:4200")
            .set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
            .set("Access-Control-Allow-Headers", "Origin, Content-Type, Cookies")
            .set("Content-Type", "application/x-www-form-urlencoded");
        this.options = {
            headers: this.httpHeaders
        };
    }
    Object.defineProperty(ServiceService.prototype, "isLoggedIn", {
        get: function () {
            this.isLoggedInStatus = localStorage.isLoggedInStatus;
            if (!this.isLoggedInStatus) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    ServiceService.prototype.start = function () {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("s", "start")
            .set("f", "app");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.login = function (ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", ud.studentno)
            .set("indexno", ud.indexno)
            .set("f", "login")
            .set("m", "auth");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.staff = function (ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('unm', ud.unm)
            .set('pwd', ud.pwd)
            .set('f', 'login')
            .set('m', 'staff');
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.payment = function (ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", ud.studentno)
            .set("f", "controller")
            .set("m", "send");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.cashpayment = function (studentno, sagecode, ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", studentno)
            .set("sagecode", sagecode)
            .set("uid", ud.recid)
            .set("f", "controller")
            .set("m", "cashoffice");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.confirmpayment = function (ud, rcptno) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", ud.studentno)
            .set("rcptno", rcptno)
            .set("f", "controller")
            .set("m", "confirm");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.confirmattendance = function (ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", ud.studentno)
            .set("mobileno", ud.mobileno)
            .set("f", "controller")
            .set("m", "attendance");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.fetchdata = function (studentno) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('studentno', studentno)
            .set('f', 'login')
            .set('m', 'search');
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.fetchdash = function (method) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("f", "controller")
            .set("m", method);
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.updategown = function (sno, gwn, ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("sno", sno)
            .set("gwn", gwn)
            .set("uid", ud.recid)
            .set("f", "controller")
            .set("m", "updategown");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.dialog = function (msg, title) {
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        return swalWithBootstrapButtons.fire({
            title: title,
            text: msg,
            // showCancelButton: true,
            // confirmButtonText: 'Confirm Paymnet',
            // cancelButtonText: 'OK',
            reverseButtons: true
        });
        // .then((result) => {
        //   if (result.value) {
        //     swalWithBootstrapButtons.fire(
        //       'Payment Successful!',
        //       'Your payment has been successful.. proceed to register and print graduation letter.',
        //       'success'
        //     )
        //   } else (
        //     /* Read more about handling dismissals below */
        //     result.dismiss === swal.DismissReason.cancel
        //   )
        // })
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n\n    height: 100vh;\n    background: #ffffff;\n}\n\n.login-top {\n    position: relative;\n    height: 90px;\n    margin-top: 90px;\n}\n\n.login-top img{\n    width: 100px;\n    position: absolute;\n    border-radius: 50%;\n    /* top: 10%; */\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\nbutton {\n    width:100%;\n}\n\nform {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\nh1 {\n    color: #19153a;\n    font-size: 1.5rem;\n}\n\n@media (min-width: 540px) {\n  \n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvc3RhZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7OztBQUdBIiwiZmlsZSI6InNyYy9hcHAvc3RhZmYvc3RhZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5sb2dpbi10b3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbn1cbi5sb2dpbi10b3AgaW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8qIHRvcDogMTAlOyAqL1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmJ1dHRvbiB7XG4gICAgd2lkdGg6MTAwJTtcbn1cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaDEge1xuICAgIGNvbG9yOiAjMTkxNTNhO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTQwcHgpIHtcbiAgXG4gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <h1>Kumasi Technical University</h1>\n  <p>Graduation Portal</p>\n  <p>Satff Login</p>\n  <div class=\"login-top\">\n    <img src=\"assets/img/logo.jpeg\"  alt=\"KsTU\" >\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <input type=\"text\"[(ngModel)]=\"usr.unm\" name=\"unm\"  placeholder=\"Username\" required>  \n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"usr.pwd\" name=\"pwd\" placeholder=\"Password\" required>\n        <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-primary\"   (click)=\"stdlogin()\">Submit</button>  \n    </div>\n  </form>\n</div>\n       "

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");




var StaffComponent = /** @class */ (function () {
    function StaffComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.usr = {
            unm: '',
            pwd: ''
        };
        this.rd = [];
        this.disable = false;
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent.prototype.stdlogin = function () {
        var _this = this;
        this.disable = true;
        if (this.usr.unm === '' || this.usr.pwd === '') {
            this.disable = false;
            this.ssv.dialog('Enter your username and password', 'Error');
        }
        else {
            this.ssv.staff(this.usr)
                .subscribe(function (rd) {
                _this.disable = false;
                if (rd === null) {
                    _this.ssv.dialog('We could not find the user :: ' + _this.usr.unm, 'Error');
                }
                else {
                    localStorage.setItem('ud', JSON.stringify(rd));
                    var role = rd[0].staffrole === 'plan' ? 'plancm' : rd[0].staffrole === 'fin' ? 'findpt' : 'est';
                    localStorage.setItem('isLoggedInStatus', JSON.stringify({ 'sts': true, 'ctx': role }));
                    _this.router.navigate([role]);
                }
            }, function (err) {
                _this.disable = false;
                // this.router.navigate(['layout/stdprofile']);
            });
        }
    };
    StaffComponent.prototype.attendace = function () {
    };
    StaffComponent.prototype.print = function () {
    };
    StaffComponent.prototype.test = function () {
        this.router.navigate(['plancm']);
    };
    StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/stdprofile/stdprofile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/stdprofile/stdprofile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: #19153a;\n    margin-bottom: 20px;\n    font-size: 16px;\n}\n.img {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    margin: 20px;\n}\n.card {\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.card-body {\n    -webkit-box-align: start;\n            align-items: flex-start;\n}\nspan {\n    margin: 5px 0;\n}\n.status {\n    color: #9b2c2c;\n}\n@media (min-width: 540px) {\n  .card {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-pack: start;\n              justify-content: start;\n  }\n  .img {\n      margin-right: 100px;\n  }\n  h1 {\n    font-size: 25px;\n  }\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RkcHJvZmlsZS9zdGRwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0VBQ0U7TUFDSSw4QkFBbUI7TUFBbkIsNkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix1QkFBc0I7Y0FBdEIsc0JBQXNCO0VBQzFCO0VBQ0E7TUFDSSxtQkFBbUI7RUFDdkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9zdGRwcm9maWxlL3N0ZHByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogIzE5MTUzYTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQtYm9keSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5zcGFuIHtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuLnN0YXR1cyB7XG4gICAgY29sb3I6ICM5YjJjMmM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTQwcHgpIHtcbiAgLmNhcmQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIH1cbiAgLmltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/stdprofile/stdprofile.component.html":
/*!******************************************************!*\
  !*** ./src/app/stdprofile/stdprofile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-container\">\n    <div class=\"card\">\n        <img class=\"img\" src=\"../assets/img/faces/boss.png\"/>\n        <div class=\"card-body\">\n            <h1>{{userdata.firstname}}   {{userdata.lastname}}</h1>\n            <span>{{userdata.indexno}}</span>\n            <span>{{userdata.studentno}}</span>\n            <span>{{gender}}</span>\n            <span>Entry Year:: {{userdata.entryyear}}</span>\n            <span>Graduating Year:: {{userdata.exityear}}</span>\n            <span>{{programme}}</span>\n            <span>{{userdata.department}}</span>\n            <span>{{userdata.faculty}}</span>\n            <span class=\"status\">{{paidstatus}}</span>\n            <span class=\"status\">{{attendancestatus}}</span>\n            <!-- <div class=\"form-group\" *ngIf=\"mobile === '' && paymentstatus === 2\" >\n                <input type=\"text\" [(ngModel)]=\"tel\" name=\"tel\" placeholder=\"Your Active Mobile Number\" required>\n            </div> -->\n            <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"paymentstatus === 0\" (click)=\"paymentoption()\">Proceed to payment</button>\n                <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"paymentstatus == 1\" (click)=\"confirmpayment()\">Confirm Payment</button>\n                <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"paymentstatus == 2\" >{{ confirmattendance }}</button>\n                <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"paymentstatus === 2\" (click)=\"print()\">Print</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/stdprofile/stdprofile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/stdprofile/stdprofile.component.ts ***!
  \****************************************************/
/*! exports provided: StdprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdprofileComponent", function() { return StdprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");




var StdprofileComponent = /** @class */ (function () {
    // users={fnm:'Allen',lnm:'Eben'}
    function StdprofileComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.paymentstatus = 0;
        this.confirmattendance = 'Attendance Registration is Closed!!!';
        this.mobile = '';
    }
    StdprofileComponent.prototype.ngOnInit = function () {
        this.init();
    };
    StdprofileComponent.prototype.init = function () {
        var _this = this;
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
        this.ssv.fetchdata(this.userdata.studentno)
            .subscribe(function (rd) {
            if (rd === null) {
                _this.ssv.dialog('We could not find such a student', 'Error');
            }
            else {
                _this.user = rd[0];
                _this.gender = _this.user.gender === 1 ? 'MALE' : 'FEMALE';
                _this.programme = rd[0].programme;
                _this.paidstatus = rd[0].paymentstatus === 2 ? 'GRADUATION PAYMENTS RECEIVED' : 'NO GRADUATION PAYMENTS RECEIVED';
                _this.paymentstatus = rd[0].paymentstatus;
                _this.attendancestatus = rd[0].attendancestatus === 1 ? 'I WILL ATTEND THE GRADUATION' : 'I WILL NOT ATTEND THE GRADUATION';
                _this.confirmattendance = 'Attendance Registration is Closed!!!'; //rd[0].attendancestatus === 1 ? 'Update Graduation Attendance Status' : 'Update Graduation Attendance Status';
                _this.mobile = rd[0].mobileno;
                _this.tel = rd[0].mobileno;
            }
        }, function (err) {
            _this.ssv.dialog(err, 'Error');
        });
    };
    StdprofileComponent.prototype.paymentoption = function () {
        this.router.navigate(['makepayment']);
    };
    StdprofileComponent.prototype.attendance = function () {
        if (this.tel === '') {
            this.ssv.dialog('Please provide your active mobile number before you can proceed', 'Caution');
        }
        else {
            this.userdata.mobileno = this.tel;
            localStorage.setItem('ud', JSON.stringify([this.userdata]));
            this.router.navigate(['confirmattendance']);
        }
    };
    StdprofileComponent.prototype.confirmpayment = function () {
        this.router.navigate(['confirmpayment']);
    };
    StdprofileComponent.prototype.print = function () {
        this.ssv.dialog('Print is currently not active', 'Notice');
    };
    StdprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stdprofile',
            template: __webpack_require__(/*! ./stdprofile.component.html */ "./src/app/stdprofile/stdprofile.component.html"),
            styles: [__webpack_require__(/*! ./stdprofile.component.css */ "./src/app/stdprofile/stdprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], StdprofileComponent);
    return StdprofileComponent;
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

module.exports = __webpack_require__(/*! /home/allen/projects/ng/kstugrady/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map