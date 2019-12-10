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
/* harmony import */ var _momopayoption_momopayoption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./momopayoption/momopayoption.component */ "./src/app/momopayoption/momopayoption.component.ts");
/* harmony import */ var _confirmpayment_confirmpayment_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirmpayment/confirmpayment.components */ "./src/app/confirmpayment/confirmpayment.components.ts");
/* harmony import */ var _confirmattendance_confirmattendance_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirmattendance/confirmattendance.components */ "./src/app/confirmattendance/confirmattendance.components.ts");
/* harmony import */ var _service_authguard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/authguard */ "./src/app/service/authguard.ts");














var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"] },
    { path: 'layout',
        component: _lyt_lyt_component__WEBPACK_IMPORTED_MODULE_4__["LytComponent"],
        canActivateChild: [_service_authguard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        children: [
            { path: 'stdprofile', component: _stdprofile_stdprofile_component__WEBPACK_IMPORTED_MODULE_7__["StdprofileComponent"] },
            { path: 'findpt', component: _finportal_finportal_component__WEBPACK_IMPORTED_MODULE_8__["FinportalComponent"] },
            { path: 'plancm', component: _plcportal_plcportal_component__WEBPACK_IMPORTED_MODULE_9__["PlcportalComponent"] },
            { path: 'makepayment', component: _momopayoption_momopayoption_component__WEBPACK_IMPORTED_MODULE_10__["MomopayoptionComponent"] },
            { path: 'confirmpayment', component: _confirmpayment_confirmpayment_components__WEBPACK_IMPORTED_MODULE_11__["ConfirmpaymentComponent"] },
            { path: 'confirmattendance', component: _confirmattendance_confirmattendance_components__WEBPACK_IMPORTED_MODULE_12__["ConfirmattendanceComponent"] },
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
    _stdprofile_stdprofile_component__WEBPACK_IMPORTED_MODULE_7__["StdprofileComponent"], _finportal_finportal_component__WEBPACK_IMPORTED_MODULE_8__["FinportalComponent"], _plcportal_plcportal_component__WEBPACK_IMPORTED_MODULE_9__["PlcportalComponent"], _momopayoption_momopayoption_component__WEBPACK_IMPORTED_MODULE_10__["MomopayoptionComponent"],
    _confirmattendance_confirmattendance_components__WEBPACK_IMPORTED_MODULE_12__["ConfirmattendanceComponent"], _confirmpayment_confirmpayment_components__WEBPACK_IMPORTED_MODULE_11__["ConfirmpaymentComponent"]];


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
                this.router.navigate(['layout/stdprofile']);
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
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Attendance',
            text: "After this stage you cannot undo your action. Are you sure you want to proceed? ",
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
                    _this.btntext = 'Confirm Attendance';
                    if (rd === null) {
                        _this.ssv.dialog('::You cannot attend the graduation::', 'Error');
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

module.exports = ".logincard{\n    display: block; \n    margin-left:  auto;\n     margin-right: auto; \n     margin-top: 190px;\n     text-align: left;\n\n}\n.img{\n    height: 120px;\n    width: 300px;\n    display: block; \n    margin-left:  auto;\n     margin-right: auto;   \n}\n.btn{\n    background:  rgb(41, 40, 7);\n    width: 500px;\n    margin-left: 5%;\n}\n.btn:hover{\nbackground: #2f3308;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0dGVuZGFuY2UvY29uZmlybWF0dGVuZGFuY2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtLQUNqQixrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLGdCQUFnQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtLQUNqQixrQkFBa0I7QUFDdkI7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybWF0dGVuZGFuY2UvY29uZmlybWF0dGVuZGFuY2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luY2FyZHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgbWFyZ2luLWxlZnQ6ICBhdXRvO1xuICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuLmltZ3tcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgbWFyZ2luLWxlZnQ6ICBhdXRvO1xuICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87ICAgXG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogIHJnYig0MSwgNDAsIDcpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5idG46aG92ZXJ7XG5iYWNrZ3JvdW5kOiAjMmYzMzA4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/confirmattendance/confirmattendance.html":
/*!**********************************************************!*\
  !*** ./src/app/confirmattendance/confirmattendance.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"row\">\n      <div class=\"col-md-4 col-lg-5 logincard\">\n     <div class=\"card animated tada\" >\n       <h3 class=\"card-category text-gray\" align=\"center\">Confirm Attendance</h3>\n  <div class=\"card-avatar\">\n          <a href=\"#pablo\">\n          </a>\n        </div>\n        <div class=\"card-body\">\n            <form>        \n              <button type=\"submit\" [disabled]=\"disable\" class=\"btn\" (click)=\"confirm()\">{{btntext}}</button>                  \n          </form>\n    </div>\n\n</div>\n</div>\n\n</div>  \n</body>\n  \n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n"

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
                confirmButton: 'btn btn-success',
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

module.exports = ".logincard{\n    display: block; \n    margin-left:  auto;\n     margin-right: auto; \n     margin-top: 190px;\n     text-align: left;\n\n}\n.img{\n    height: 120px;\n    width: 300px;\n    display: block; \n    margin-left:  auto;\n     margin-right: auto;   \n}\n.btn{\n    background:  rgb(41, 40, 7);\n    width: 500px;\n    margin-left: 5%;\n}\n.btn:hover{\nbackground: #2f3308;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybXBheW1lbnQvY29uZmlybXBheW1lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtLQUNqQixrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLGdCQUFnQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtLQUNqQixrQkFBa0I7QUFDdkI7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybXBheW1lbnQvY29uZmlybXBheW1lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luY2FyZHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgbWFyZ2luLWxlZnQ6ICBhdXRvO1xuICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuLmltZ3tcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgbWFyZ2luLWxlZnQ6ICBhdXRvO1xuICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87ICAgXG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogIHJnYig0MSwgNDAsIDcpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5idG46aG92ZXJ7XG5iYWNrZ3JvdW5kOiAjMmYzMzA4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/confirmpayment/confirmpayment.html":
/*!****************************************************!*\
  !*** ./src/app/confirmpayment/confirmpayment.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"row\">\n      <div class=\"col-md-4 col-lg-5 logincard\">\n     <div class=\"card animated tada\" >\n       <h3 class=\"card-category text-gray\" align=\"center\">Confirm Payment</h3>\n  <div class=\"card-avatar\">\n          <a href=\"#pablo\">\n          </a>\n        </div>\n        <div class=\"card-body\">\n            <form>\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\">Reciept No</label>\n                <input type=\"number\" class=\"form-control\" id=\"rcptno\" name=\"rcptno\" [(ngModel)]=\"rcptno\" required>\n              </div>\n              <br><br>        \n              <button type=\"submit\" [disabled]=\"disable\" class=\"btn\" (click)=\"confirm()\">{{btntext}}</button>                  \n          </form>\n    </div>\n\n</div>\n</div>\n\n</div>  \n</body>\n  \n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/finportal/finportal.component.css":
/*!***************************************************!*\
  !*** ./src/app/finportal/finportal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".range-form {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.range {\n    padding-right: 50px;\n}\n\n.range input {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n}\n\n.range-btn {\n    display: -webkit-box;\n    display: flex;\n}\n\n.card-header{\n    background: rgb(41, 40, 7);\n}\n\n.card-title{\ncolor: #fff;\n}\n\n.text{\n    color:rgb(41, 40, 7);\n}\n\n.btn{\nbackground: rgb(41, 40, 7);\ncolor: #fff;\n}\n\n.gen2{\n  background: rgb(247, 74, 6);  \n  border-radius: 30px;\n  width: 100px;\n  height: 50px;\n  margin-top:5px;\n  cursor: pointer;\n}\n\n.getternsetter{\n    background: #fff;\n    box-shadow: 5px 20px 20px 15px rgb(255, 255, 255);\n    line-height: 100px;\n    margin-bottom: -23px;\n\n}\n\nh3.card-title{\n    font-weight: 20px;\n}\n\n.heading-report1{\n    box-shadow: 25px 20px 20px 25px rgb(207, 207, 207);\n    background: #fff;\n    line-height: 50px;\n    margin-bottom: -23px;\n\n}\n\np.color{\n    color: #52516a;\n    font-size: 50px;\n}\n\nh3.card-title{\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlucG9ydGFsL2ZpbnBvcnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQVk7WUFBWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFLQTtJQUNJLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOztBQUdBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9maW5wb3J0YWwvZmlucG9ydGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZ2UtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJhbmdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuLnJhbmdlIGlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4ucmFuZ2UtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6IHJnYig0MSwgNDAsIDcpO1xufVxuLmNhcmQtdGl0bGV7XG5jb2xvcjogI2ZmZjtcbn1cbi50ZXh0e1xuICAgIGNvbG9yOnJnYig0MSwgNDAsIDcpO1xufVxuLmJ0bntcbmJhY2tncm91bmQ6IHJnYig0MSwgNDAsIDcpO1xuY29sb3I6ICNmZmY7XG59XG4uZ2VuMntcbiAgYmFja2dyb3VuZDogcmdiKDI0NywgNzQsIDYpOyAgXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuXG4uZ2V0dGVybnNldHRlcntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDVweCAyMHB4IDIwcHggMTVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0yM3B4O1xuXG59XG5cbmgzLmNhcmQtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDIwcHg7XG59XG4uaGVhZGluZy1yZXBvcnQxe1xuICAgIGJveC1zaGFkb3c6IDI1cHggMjBweCAyMHB4IDI1cHggcmdiKDIwNywgMjA3LCAyMDcpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIzcHg7XG5cbn1cblxuXG5wLmNvbG9ye1xuICAgIGNvbG9yOiAjNTI1MTZhO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaDMuY2FyZC10aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/finportal/finportal.component.html":
/*!****************************************************!*\
  !*** ./src/app/finportal/finportal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"content\">\n   <div class=\"container-fluid\">\n      <div class=\"row\" style=\"padding-left: 150px; padding-right:10px;\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-danger card-header-icon\">\n                \n                <br><br>\n                <p class=\"card-category\"  Style=\"color:#fff; font-size:20px;\"  align=\"center\"> Total Volume</p>\n                <br>\n                <h3 class=\"card-title\" style=\"color:rgb(199, 196, 113);\" align=\"center\">GHS 55,250.00</h3>\n      \n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">autorenew</i>Updates every 24hrs\n                </div>\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-danger card-header-icon\">\n               \n                <br><br>\n                <p class=\"card-category\"  Style=\"color:#fff; font-size:20px;\"  align=\"center\">Bank Payment</p>\n               <br>\n                <h3 class=\"card-title\" style=\"color:rgb(199, 196, 113);\" align=\"center\">GHS 50,250.00</h3>\n                \n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">autorenew</i>Updates every 24hrs\n                </div>\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-danger card-header-icon\">\n                \n                <br><br>\n                <p class=\"card-category\"  Style=\"color:#fff; font-size:20px;\"  align=\"center\">Digital Channels</p>\n                <br>\n                <h3 class=\"card-title\" style=\"color:rgb(199, 196, 113);\" align=\"center\">GHS 5,000.00</h3>\n                \n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">autorenew</i>Updates every 24hrs\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      \n\n     <div class=\"row\">\n       <div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n         <div class=\"card\">\n           <div class=\"card-header\">\n             <h4 class=\"card-title \">Live Payment Update</h4>\n           </div>\n           <div class=\"card-body\">\n               <div class=\" form-inline active-cyan active-cyan-2 md-form mt-0 search\">\n                   <input class=\"form-control\" type=\"text\" placeholder=\"Search by Anything\"  aria-label=\"Search\">\n                 </div>\n             <div class=\"table-responsive\">\n               <table class=\"table\">\n                 <thead class=\" text\">\n                   <th>#</th>\n                   <th>Student ID</th>\n                   <th>Index No.</th>\n                   <th>Full Name</th>\n                   <th>Payment ID</th>\n                   <th>PaySlip No.</th>\n                   <th>Bank ID</th>\n                   <th>Branch ID</th>\n                   <th>MOMO number</th>\n                   <th>Transaction ID</th>\n                   <th>Amount</th>\n                   <th>Date-Time</th>\n                   <th>Action</th>\n                 </thead>\n                 <tbody>\n                     <tr>\n                         <td>1</td>\n                         <td>847498300</td>\n                         <td>848740800</td>\n                         <td>Bahubali, Andrew</td>\n                         <td>kd4093vnk0948n8098</td>\n                         <td></td>\n                         <td></td>\n                         <td></td>\n                         <td>02378408767</td>\n                         <td>jr-948749879872</td>\n                         <td>250</td>\n                         <td>23/01/2020-12:34:03</td>\n                         <td>\n                           <button type=\"button\" rel=\"tooltip\" title=\"View\" class=\"btn btn-sm\">\n                             <i class=\"material-icons\">edit</i>\n                              View\n                           </button>\n                         </td>\n                        </tr>\n\n                        <tr>\n                            <td>1</td>\n                            <td>847498300</td>\n                            <td>848740800</td>\n                            <td>Kwame, Bonwere</td>\n                            <td>i494m48-n985098n98</td>\n                            <td>09509840-387</td>\n                            <td>GH-0000023</td>\n                            <td>Zenith-004</td>\n                            <td></td>\n                            <td></td>\n                            <td>250</td>\n                            <td>23/01/2020-12:34:03</td>\n                            <td>\n                              <button type=\"button\" rel=\"tooltip\" title=\"View\" class=\"btn btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                                 View\n                              </button>\n                            </td>\n                           </tr>        \n                 </tbody>\n               </table>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n\n     <button type=\"submit\" class=\"btn btn-round btn-right\" (click)=\"reportgen()\">Generate Report!</button>\n\n    \n </div>\n</div>\n\n\n\n"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var FinportalComponent = /** @class */ (function () {
    function FinportalComponent() {
    }
    FinportalComponent.prototype.ngOnInit = function () {
    };
    FinportalComponent.prototype.reportgen = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Generated Successfully', '...Report Generated Successfully', 'success');
    };
    FinportalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finportal',
            template: __webpack_require__(/*! ./finportal.component.html */ "./src/app/finportal/finportal.component.html"),
            styles: [__webpack_require__(/*! ./finportal.component.css */ "./src/app/finportal/finportal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "/* .logincard{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n} */\n.img{\n    height: 120px;\n    width: 300px;\n    display: block; \n    margin-left:  auto;\n     margin-right: auto;   \n}\nbody {\n    font-family: \"Lato\", sans-serif;\n}\n/* .main-head{\n    height: 150px;\n    background: #FFF;  \n} */\n.sidenav {\n    background: rgb(41, 40, 7);\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack:center;\n            justify-content:center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.main {\n    margin-top: 30%;\n    margin-left: 5%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n}\n@media screen and (max-width: 450px) {\n    .login-form{\n        margin-top: 10%;\n    }\n\n    .register-form{\n        margin-top: 10%;\n    }\n}\n@media screen and (min-width: 768px){\n    .main{\n        margin-left: 40%; \n    }\n\n    .sidenav{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form{\n        margin-top: 80%;\n    }\n\n    .register-form{\n        margin-top: 20%;\n    }\n}\n.login-main-text{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n.login-main-text h2{\n    color: #fff;\n    font-weight: 300;\n}\n.btn{\n    background:  rgb(41, 40, 7);\n}\n.btn:hover{\n    background: #2f3308;\n}\n/* Style the video: 100% width and height to cover the entire window */\n#myVideo {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%; \n    min-height: 100%;\n  }\n/* Add some content at the bottom of the video/page */\n.content {\n    position: fixed;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    color: #f1f1f1;\n    width: 100%;\n    padding: 20px;\n  }\n/* Style the button used to pause/play the video */\n#myBtn {\n    width: 200px;\n    font-size: 18px;\n    padding: 10px;\n    border: none;\n    background: #000;\n    color: #fff;\n    cursor: pointer;\n  }\n#myBtn:hover {\n    background: #ddd;\n    color: black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtLQUNqQixrQkFBa0I7QUFDdkI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBOzs7R0FHRztBQUNIO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVLGlCQUFpQixDQUFDO0FBQ2hDO0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBTUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUlBLHNFQUFzRTtBQUN0RTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFFQSxxREFBcUQ7QUFDckQ7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUVBLGtEQUFrRDtBQUNsRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5sb2dpbmNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICovXG4uaW1ne1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBtYXJnaW4tbGVmdDogIGF1dG87XG4gICAgIG1hcmdpbi1yaWdodDogYXV0bzsgICBcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi8qIC5tYWluLWhlYWR7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGOyAgXG59ICovXG4uc2lkZW5hdiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDQxLCA0MCwgNyk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4ge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAubWFpbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTsgXG4gICAgfVxuXG4gICAgLnNpZGVuYXZ7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG59XG5cblxuLmxvZ2luLW1haW4tdGV4dHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLW1haW4tdGV4dCBoMntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5cblxuXG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogIHJnYig0MSwgNDAsIDcpO1xufVxuXG4uYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMyZjMzMDg7XG59XG5cblxuXG4vKiBTdHlsZSB0aGUgdmlkZW86IDEwMCUgd2lkdGggYW5kIGhlaWdodCB0byBjb3ZlciB0aGUgZW50aXJlIHdpbmRvdyAqL1xuI215VmlkZW8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBBZGQgc29tZSBjb250ZW50IGF0IHRoZSBib3R0b20gb2YgdGhlIHZpZGVvL3BhZ2UgKi9cbiAgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHRoZSBidXR0b24gdXNlZCB0byBwYXVzZS9wbGF5IHRoZSB2aWRlbyAqL1xuICAjbXlCdG4ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gICNteUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <video autoplay muted loop id=\"myVideo\">\n      <source src=\"assets/img/Workaholic.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"sidenav\">\n    <div class=\"login-main-text\">\n        <h2 class=\"card-title\">KsTU Graduation Platform</h2>\n        <img class=\"img\" style=\" border-radius: 1000px; width: 120px;  border: 5px solid rgb(250, 250, 250);\" src=\"assets/img/logo.jpeg\"/>\n    </div>\n </div>\n <div class=\"main\">\n    <button type=\"submit\" class=\"btn btn-round btn-block\" (click)=\"getStarted('student')\">Student</button>\n    <button type=\"submit\" class=\"btn btn-round btn-block\" (click)=\"getStarted('staff')\">Staff</button>\n </div>\n</body>\n\n\n\n\n\n"

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



var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
        console.log('jkkk');
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getStarted = function (role) {
        if (role === 'student') {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/staff']);
        }
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".logincard{\n    display: block; \n    margin-left:  auto;\n     margin-right: auto; \n     margin-top: 190px;\n     text-align: left;\n\n}\n.tada {\n    padding: 20px;\n}\n.img{\n    height: 120px;\n    width: 300px;\n    display: block; \n    margin-left:  auto;\n     margin-right: auto;   \n}\n/* \n.btn{\n    background:  rgb(41, 40, 7);\n    width: 200px;\n    margin-left:80px;\n} */\n.btn:hover{\nbackground: #2f3308;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7S0FDakIsa0JBQWtCO0tBQ2xCLGlCQUFpQjtLQUNqQixnQkFBZ0I7O0FBRXJCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7S0FDakIsa0JBQWtCO0FBQ3ZCO0FBR0E7Ozs7O0dBS0c7QUFFSDtBQUNBLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5jYXJke1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBtYXJnaW4tbGVmdDogIGF1dG87XG4gICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgIG1hcmdpbi10b3A6IDE5MHB4O1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG4udGFkYSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5pbWd7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgIFxufVxuXG5cbi8qIFxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDQxLCA0MCwgNyk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjgwcHg7XG59ICovXG5cbi5idG46aG92ZXJ7XG5iYWNrZ3JvdW5kOiAjMmYzMzA4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"col-md-4 logincard\">\n   <div class=\"card animated tada\" >\n     <h3 class=\"card-category text-gray\" align=\"center\">KsTU Graduation Platform </h3>\n<div class=\"card-avatar\">\n        <a href=\"#pablo\">\n          <img class=\"img\" Style=\" border-radius: 1000px; width: 120px;  border: 5px solid rgb(250, 250, 250);\" src=\"assets/img/logo.jpeg\" />\n        </a>\n      </div>\n      <div class=\"card-body\">\n        <!-- <h4 class=\"card-title\" align=\"center\">Graduand</h4> -->\n          <form>\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\"> Student Number</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usr.studentno\" name=\"studentno\"  required>\n              </div>\n              <!-- <div class=\"form-group\">\n                <label class=\"bmd-label-floating\"> Index Number</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usr.indexno\" name=\"indexno\"  required>\n              </div>\n              <br><br> -->\n            <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-sm\" style=\" background:  rgb(41, 40, 7); border-radius: 30px; margin-left: 80px; margin-right:80px; width:200px;\"  (click)=\"stdlogin()\">LogIn</button>\n          </form>\n      </div>\n   </div>\n  </div>\n</body>\n"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
        this.usr = {
            studentno: ''
        };
        this.rd = [];
        this.disable = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.stdlogin = function () {
        var _this = this;
        this.disable = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading();
        if (this.usr.studentno === '') {
            this.disable = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
            this.ssv.dialog('Enter your Student Number', 'Error');
        }
        else {
            this.ssv.login(this.usr)
                .subscribe(function (rd) {
                _this.disable = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
                if (rd === null) {
                    _this.ssv.dialog('We could not find a student with studentno:: ' + _this.usr.studentno, 'Error');
                }
                else if (rd['error']) {
                    _this.ssv.dialog(rd['error'], 'Error');
                }
                else {
                    // let rdd = rd[0].gender === 1 ? 'MALE' : 'FEMALE';
                    localStorage.setItem('ud', JSON.stringify(rd));
                    localStorage.setItem('isLoggedInStatus', JSON.stringify({ 'sts': true }));
                    _this.router.navigate(['layout/stdprofile']);
                }
            }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
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

module.exports = ".fixed-top{\n    box-shadow: 1px 0px 0px 1px rgba(12, 134, 255, 0.333);\n}\n.btn{\n    background: rgb(41, 40, 7);\n    color: #fff;\n}\na.dropdown-item:hover{\ncolor: #fff;\nbackground: rgb(41, 40, 7);\ncursor: pointer;\n}\nnav{\n    background: rgb(41, 40, 7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHl0L2x5dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBRUE7QUFDQSxXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvbHl0L2x5dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLXRvcHtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDBweCAxcHggcmdiYSgxMiwgMTM0LCAyNTUsIDAuMzMzKTtcbn1cbi5idG57XG4gICAgYmFja2dyb3VuZDogcmdiKDQxLCA0MCwgNyk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmEuZHJvcGRvd24taXRlbTpob3ZlcntcbmNvbG9yOiAjZmZmO1xuYmFja2dyb3VuZDogcmdiKDQxLCA0MCwgNyk7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5uYXZ7XG4gICAgYmFja2dyb3VuZDogcmdiKDQxLCA0MCwgNyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/lyt/lyt.component.html":
/*!****************************************!*\
  !*** ./src/app/lyt/lyt.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \" style=\"background: rgb(41, 40, 7);\">\n  <div class=\"container-fluid\">\n     <div class=\"navbar-wrapper\">\n     <img src=\"assets/img/logo.jpeg\" style=\"height: 70px; width: 70px;\" alt=\"\">\n     <a class=\"navbar-brand text\" style=\"font-weight:bolder; color:rgb(41, 40, 7); font-size: 30px; \">KsTU Graduation Platform</a> <!--href=\"#pablo\" -->\n     </div> \n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>   \n    <!-- <br><br> -->\n\n    <div class=\"collapse navbar-collapse justify-content-end\">\n      <!-- <form class=\"navbar-form\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </form> -->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" *ngFor=\"let menu of menus\">\n            <button type=\"button\" rel=\"tooltip\" title=\"View Notifications\" (click)=\"routefn(menu.route)\" class=\"btn btn-danger btn-sm\">\n              <i class=\"material-icons\">{{ menu.icon }}</i>\n              {{menu.name}}\n            </button>\n        </li> \n       \n        \n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownProfile\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\">person</i>\n            <p class=\"d-lg-none d-md-block\">\n              Account\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownProfile\">\n            <a class=\"dropdown-item\" (click)=\"profile()\" >Profile</a>\n          <!-- <a class=\"dropdown-item\" (click)=\"Settings()\">Settings</a> -->\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br><br>\n\n<router-outlet></router-outlet>\n\n<!-- End Navbar -->"

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
        this.router.navigate(['layout/stdprofile']);
    };
    LytComponent.prototype.logout = function () {
        var _this = this;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'logout ?',
            text: "You are logging out...",
            showCancelButton: true,
            confirmButtonText: 'Yes Confirm',
            cancelButtonText: 'No, cancel!',
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

module.exports = ".logincard{\n    display: block; \n    margin-left:  auto;\n     margin-right: auto; \n     margin-top: 190px;\n     text-align: left;\n\n}\n.img{\n    height: 120px;\n    width: 300px;\n    display: block; \n    margin-left:  auto;\n     margin-right: auto;   \n}\n.btn{\n    background:  rgb(41, 40, 7);\n    width: 500px;\n    margin-left: 5%;\n}\n.btn:hover{\nbackground: #2f3308;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9tb3BheW9wdGlvbi9tb21vcGF5b3B0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0tBQ2pCLGtCQUFrQjtLQUNsQixpQkFBaUI7S0FDakIsZ0JBQWdCOztBQUVyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0tBQ2pCLGtCQUFrQjtBQUN2QjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb21vcGF5b3B0aW9uL21vbW9wYXlvcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbmNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbi5pbWd7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgIFxufVxuXG4uYnRue1xuICAgIGJhY2tncm91bmQ6ICByZ2IoNDEsIDQwLCA3KTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uYnRuOmhvdmVye1xuYmFja2dyb3VuZDogIzJmMzMwODtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/momopayoption/momopayoption.component.html":
/*!************************************************************!*\
  !*** ./src/app/momopayoption/momopayoption.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"row\">\n      <div class=\"col-md-4 col-lg-5 logincard\">\n     <div class=\"card animated tada\" >\n       <h3 class=\"card-category text-gray\" align=\"center\">Mobile Money Payment</h3>\n  <div class=\"card-avatar\">\n          <a href=\"#pablo\">\n          </a>\n        </div>\n        <div class=\"card-body\">\n            <form>\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\">Amount</label>\n                <input type=\"number\" class=\"form-control\" id=\"amount\" name=\"amount\" [ngModel]=\"amount\" required disabled>\n              </div>\n              <br><br>        \n              <button type=\"submit\" [disabled]=\"disable\" class=\"btn\" (click)=\"makepayment()\">{{btntext}}</button>                  \n          </form>\n    </div>\n\n</div>\n</div>\n\n</div>  \n</body>\n  \n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n"

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
        this.amount = 200.00;
        this.disable = false;
        this.btntext = 'Make Momo Payment';
    }
    MomopayoptionComponent.prototype.ngOnInit = function () {
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
    };
    MomopayoptionComponent.prototype.makepayment = function () {
        var _this = this;
        this.disable = true;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
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
                    _this.btntext = 'Make Momo Payment';
                    console.log(rd);
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
        this.router.navigate(['layout/stdprofile']);
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

module.exports = ".range-form {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.range {\n    padding-right: 50px;\n}\n\n.range input {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n}\n\n.range-btn {\n    display: -webkit-box;\n    display: flex;\n}\n\n.card-header{\n    background: rgb(41, 40, 7);\n}\n\n.card-title{\ncolor: #fff;\n}\n\n.text{\n    color:rgb(41, 40, 7);\n}\n\n.btn{\nbackground: rgb(41, 40, 7);\ncolor: #fff;\n}\n\n.gen2{\n  background: rgb(247, 74, 6);  \n  border-radius: 30px;\n  width: 100px;\n  height: 50px;\n  margin-top:5px;\n  cursor: pointer;\n}\n\n.getternsetter{\n    background: #fff;\n    box-shadow: 5px 20px 20px 15px rgb(255, 255, 255);\n    line-height: 100px;\n    margin-bottom: -23px;\n\n}\n\nh3.card-title{\n    font-weight: 20px;\n}\n\n.heading-report1{\n    box-shadow: 25px 20px 20px 25px rgb(207, 207, 207);\n    background: #fff;\n    line-height: 50px;\n    margin-bottom: -23px;\n\n}\n\np.color{\n    color: #52516a;\n    font-size: 50px;\n}\n\nh3.card-title{\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxjcG9ydGFsL3BsY3BvcnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQVk7WUFBWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFLQTtJQUNJLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOztBQUdBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wbGNwb3J0YWwvcGxjcG9ydGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZ2UtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJhbmdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuLnJhbmdlIGlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4ucmFuZ2UtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6IHJnYig0MSwgNDAsIDcpO1xufVxuLmNhcmQtdGl0bGV7XG5jb2xvcjogI2ZmZjtcbn1cbi50ZXh0e1xuICAgIGNvbG9yOnJnYig0MSwgNDAsIDcpO1xufVxuLmJ0bntcbmJhY2tncm91bmQ6IHJnYig0MSwgNDAsIDcpO1xuY29sb3I6ICNmZmY7XG59XG4uZ2VuMntcbiAgYmFja2dyb3VuZDogcmdiKDI0NywgNzQsIDYpOyAgXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuXG4uZ2V0dGVybnNldHRlcntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDVweCAyMHB4IDIwcHggMTVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0yM3B4O1xuXG59XG5cbmgzLmNhcmQtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDIwcHg7XG59XG4uaGVhZGluZy1yZXBvcnQxe1xuICAgIGJveC1zaGFkb3c6IDI1cHggMjBweCAyMHB4IDI1cHggcmdiKDIwNywgMjA3LCAyMDcpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIzcHg7XG5cbn1cblxuXG5wLmNvbG9ye1xuICAgIGNvbG9yOiAjNTI1MTZhO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaDMuY2FyZC10aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/plcportal/plcportal.component.html":
/*!****************************************************!*\
  !*** ./src/app/plcportal/plcportal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"content\">\n   <div class=\"container-fluid\">\n\n      <div class=\"row\" style=\"padding-left: 350px; padding-right:350px;\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-danger card-header-icon\">\n                \n                <br><br>\n                <p class=\"card-category\"  Style=\"color:#fff; font-size:20px;\"  align=\"center\">Registed Over The Entire Period</p>\n                <br>\n                <h3 class=\"card-title\" style=\"color:rgb(199, 196, 113);\" align=\"center\">700</h3>\n      \n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">autorenew</i>Updates every 24hrs\n                </div>\n              </div>\n            </div>\n          </div>\n      \n      \n          <div class=\"col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-danger card-header-icon\">\n               \n                <br><br>\n                <p class=\"card-category\"  Style=\"color:#fff; font-size:20px;\"  align=\"center\">Registered Today</p>\n                <br>\n                <h3 class=\"card-title\" style=\"color:rgb(199, 196, 113);\" align=\"center\">2</h3>\n                \n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">autorenew</i>Updates every 24hrs\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n     <div class=\"row\">\n       <div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n         <div class=\"card\">\n           <div class=\"card-header\">\n             <h4 class=\"card-title \">Live Registration Update</h4>\n           </div>\n           <div class=\"card-body\">\n               <div class=\" form-inline active-cyan active-cyan-2 md-form mt-0 search\">\n                   <input class=\"form-control\" type=\"text\" placeholder=\"Search by Anything\"  aria-label=\"Search\">\n                 </div>\n             <div class=\"table-responsive\">\n               <table class=\"table\">\n                 <thead class=\" text\">\n                   <th>#</th>\n                   <th>Student ID</th>\n                   <th>Index No.</th>\n                   <th>Full Name</th>\n                   <th>Department</th>\n                   <th>Program</th>\n                   <th>Payment Status</th>\n                   <th>Registration Status</th>\n                   <th>Date-Time</th>\n                   <th>Action</th>\n                 </thead>\n                 <tbody>\n                     <tr >\n                         <td>1</td>\n                         <td>2004000053</td>\n                         <td>1190000889</td>\n                         <td>Percy, Grey</td>\n                         <td>Computer Science</td>\n                         <td>Web and mobile Application Development</td>\n                         <td>Paid</td>\n                         <td>Registered</td>\n                         <td>22/11/2019-12:45am</td>\n                         <td>\n                           <button type=\"button\" rel=\"tooltip\" title=\"View\"  class=\"btn btn-sm\">\n                             <i class=\"material-icons\">edit</i>\n                              View\n                           </button>\n                         </td>\n                        </tr>\n                       \n                        <tr >\n                            <td>2</td>\n                            <td>2004000026</td>\n                            <td>1190000878</td>\n                            <td>hannah, brews</td>\n                            <td>Business Administration</td>\n                            <td>Human Resource Management</td>\n                            <td>Paid</td>\n                            <td>Registered</td>\n                            <td>22/11/2019-12:45am</td>\n                            <td>\n                              <button type=\"button\" rel=\"tooltip\" title=\"View\" class=\"btn btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                                 View\n                              </button>\n                            </td>\n                           </tr>         \n                 </tbody>\n               </table>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n\n     <button type=\"submit\" class=\"btn btn-round btn-right\" (click)=\"reportgen()\">Generate Report!</button>\n\n    \n </div>\n</div>\n\n\n\n"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var PlcportalComponent = /** @class */ (function () {
    function PlcportalComponent() {
    }
    PlcportalComponent.prototype.ngOnInit = function () {
    };
    PlcportalComponent.prototype.reportgen = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(' Successful', '...Generated Successfully', 'success');
    };
    PlcportalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plcportal',
            template: __webpack_require__(/*! ./plcportal.component.html */ "./src/app/plcportal/plcportal.component.html"),
            styles: [__webpack_require__(/*! ./plcportal.component.css */ "./src/app/plcportal/plcportal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
        this.devurl = 'http://172.16.7.16/svs/';
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
            .set("f", "payment")
            .set("m", "send");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.confirmpayment = function (ud, rcptno) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", ud.studentno)
            .set("rcptno", rcptno)
            .set("f", "payment")
            .set("m", "confirm");
        return this.http.post(this.devurl, fm, this.options);
    };
    ServiceService.prototype.confirmattendance = function (ud) {
        var fm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("studentno", ud.studentno)
            .set("f", "payment")
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
    ServiceService.prototype.dialog = function (msg, title) {
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
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

module.exports = ".logincard{\n    display: block; \n    margin-left:  auto;\n    margin-right: auto; \n    margin-top: 190px;\n    text-align: left;\n\n}\n.tada {\n    padding: 20px;\n}\n.img{\n    height: 120px;\n    width: 300px;\n    display: block; \n    margin-left:  auto;\n     margin-right: auto;   \n}\n/* \n.btn{\n    background:  rgb(41, 40, 7);\n    width: 200px;\n    margin-left:80px;\n} */\n.btn:hover{\nbackground: #2f3308;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvc3RhZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7S0FDakIsa0JBQWtCO0FBQ3ZCO0FBR0E7Ozs7O0dBS0c7QUFFSDtBQUNBLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5jYXJke1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBtYXJnaW4tbGVmdDogIGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG4udGFkYSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5pbWd7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgIFxufVxuXG5cbi8qIFxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDQxLCA0MCwgNyk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjgwcHg7XG59ICovXG5cbi5idG46aG92ZXJ7XG5iYWNrZ3JvdW5kOiAjMmYzMzA4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"col-md-4 logincard\">\n   <div class=\"card animated tada\" >\n     <h3 class=\"card-category text-gray\">KsTU Graduation Platform </h3>\n    <div class=\"card-avatar\">\n        <a href=\"#pablo\">\n          <img class=\"img\" Style=\" border-radius: 1000px; width: 120px;  border: 5px solid rgb(250, 250, 250);\" src=\"assets/img/logo.jpeg\" />\n        </a>\n      </div>\n      <div class=\"card-body\">\n        <!-- <h4 class=\"card-title\" align=\"center\">Graduand</h4> -->\n          <form>\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\">Username </label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usr.unm\" name=\"unm\"  required>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\"> Password</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usr.pwd\" name=\"pwd\"  required>\n              </div>\n              <br><br>\n            <button type=\"submit\" [disabled]=\"disable\" class=\"btn btn-sm\" style=\" background:  rgb(41, 40, 7); border-radius: 30px; margin-left: 80px; margin-right:80px; width:200px;\"  (click)=\"stdlogin()\">LogIn</button>\n          </form>\n      </div>\n   </div>\n  </div>\n</body>\n"

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
                    localStorage.setItem('isLoggedInStatus', JSON.stringify({ 'sts': true }));
                    var role = rd[0].staffrole === 'plan' ? 'plancm' : 'findpt';
                    _this.router.navigate(['layout/' + role]);
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

module.exports = ".card-header{\n    background:  rgb(41, 40, 7);\n}\n.card-title{\n    color: rgb(41, 40, 7);\n    font-size: 13;\n}\n.btn{\n    background:  rgb(41, 40, 7);\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RkcHJvZmlsZS9zdGRwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc3RkcHJvZmlsZS9zdGRwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogIHJnYig0MSwgNDAsIDcpO1xufVxuLmNhcmQtdGl0bGV7XG4gICAgY29sb3I6IHJnYig0MSwgNDAsIDcpO1xuICAgIGZvbnQtc2l6ZTogMTM7XG59XG4uYnRue1xuICAgIGJhY2tncm91bmQ6ICByZ2IoNDEsIDQwLCA3KTtcbiAgICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stdprofile/stdprofile.component.html":
/*!******************************************************!*\
  !*** ./src/app/stdprofile/stdprofile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <br><br><br>\n <div class=\"content\">\n     <div class=\"container-fluid\"> \n \n     <div class=\"row\">\n       <div class=\"col-md-12 col-lg-8 col-xs-0 col-sm-8\" style=\"padding-left: 150px;\">\n         <div class=\"card\">\n           <div class=\"card-header\">\n             <h4 class=\"card-title\">My Study Profile</h4>\n           </div>\n           <div class=\"card-body\">\n             <form >\n               <div class=\"row\">\n                 <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">Student Number</label>\n                     <input type=\"text\"id=\"company\" name=\"studentno\" [ngModel]=\"userdata.studentno\" class=\"form-control\" disabled>\n                   </div>\n                 </div>\n             <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">Index Number</label>\n                     <input type=\"text\" class=\"form-control\" name=\"indexno\"  [ngModel]=\"userdata.indexno\" disabled>\n                   </div>\n                 </div>\n                 <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Surname</label>\n                    <input type=\"text\" class=\"form-control\" name=\"lastname\"  [ngModel]=\"userdata.lastname\" disabled>\n                  </div>\n                </div>\n\n                 <div class=\"col-md-4\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">First Name</label>\n                     <input type=\"email\" id=\"emailid\" name=\"firstname\" [ngModel]=\"userdata.firstname\" class=\"form-control\" disabled>\n                   </div>\n                 </div>\n                 <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Gender</label>\n                    <input type=\"text\" id=\"gender\" class=\"form-control\" name=\"gender\"  [ngModel]=\"gender\" disabled>\n                  </div>\n                </div>\n               </div>\n               <div class=\"row\">\n                 <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">Year of Admission</label>\n                     <input type=\"text\"  id=\"firstname\" name=\"entryyear\" [ngModel]=\"userdata.entryyear\" class=\"form-control\" disabled>\n                   </div>\n                 </div>\n                 <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">Year of Graduation</label>\n                     <input type=\"text\" id=\"lastname\" name=\"exityear\" [ngModel]=\"userdata.exityear\" class=\"form-control\" disabled>\n                   </div>\n                 </div>\n               </div>\n        \n               <div class=\"row\">\n                 <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">Faculty</label>\n                     <input type=\"text\" id=\"residence\" name=\"faculty\" [ngModel]=\"userdata.faculty\" class=\"form-control\" disabled>\n                   </div>\n                 </div>\n                 <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n                     <label class=\"bmd-label-floating\">Department</label>\n                     <input type=\"text\"  id=\"pass\" name=\"department\" [ngModel]=\"userdata.department\" class=\"form-control\" disabled>\n                   </div>\n                 </div>\n               </div>\n\n               <button type=\"submit\" class=\"btn btn-sm pull-right\" *ngIf=\"paymentstatus === 0\" (click)=\"paymentoption()\">Proceed to payment</button>\n               <button type=\"submit\" class=\"btn btn-sm pull-right\" *ngIf=\"paymentstatus == 1\" (click)=\"confirmpayment()\">Confirm Payment</button>\n               <button type=\"submit\" class=\"btn btn-sm pull-right\" *ngIf=\"paymentstatus == 2\" (click)=\"attendance()\">{{ confirmattendance }}</button>\n               <!-- <button type=\"submit\" class=\"btn btn-sm pull-right\" *ngIf=\"paymentstatus === 2\" (click)=\"print()\">Print</button> -->\n\n               <div class=\"clearfix\"></div>\n             </form>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-md-2 col-sm-4 col-lg-4\" style=\"padding-right: 150px;\">\n         <div class=\"card card-profile\">\n           <div class=\"card-avatar\">\n             <a href=\"#pablo\">\n               <img class=\"img\" src=\"../assets/img/faces/boss.png\"/>\n             </a>\n           </div>\n           <div class=\"card-body\">\n             <h6 class=\"card-category\" style=\"color:rgb(41, 40, 7);\">Programme</h6>\n             <h4 class=\"card-title\"> {{programme}}</h4>\n             <h6 class=\"card-category\" style=\"color:rgb(41, 40, 7);\">Paid Status</h6>\n             <h4 class=\"card-title\"> {{paidstatus}}</h4>\n             <h6 class=\"card-category\" style=\"color:rgb(41, 40, 7);\">Attending Status</h6>\n             <h4 class=\"card-title\"> {{attendancestatus}}</h4>\n             <p class=\"card-description\">\n               Graduand of Kumasi Technical University\n             </p>\n           </div>\n         </div>\n       </div>\n \n     </div>\n \n     </div>\n     </div>\n \n "

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
    function StdprofileComponent(router, ssv) {
        this.router = router;
        this.ssv = ssv;
    }
    StdprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userdata = JSON.parse(localStorage.getItem('ud'))[0];
        this.ssv.fetchdata(this.userdata.studentno)
            .subscribe(function (rd) {
            if (rd === null) {
                _this.ssv.dialog('We could not find such a student', 'Error');
            }
            else {
                console.log(rd[0]);
                _this.user = rd[0];
                _this.gender = _this.user.gender === 1 ? 'MALE' : 'FEMALE';
                _this.programme = rd[0].programme;
                _this.paidstatus = rd[0].paymentstatus === 2 ? 'PAID' : 'UNPAID';
                _this.paymentstatus = rd[0].paymentstatus;
                _this.attendancestatus = rd[0].attendancestatus === 1 ? 'ATTENDING' : 'NOT ATTENDING';
                _this.confirmattendance = rd[0].attendancestatus === 1 ? 'Reject Attendance' : 'Accept Attendance';
            }
        }, function (err) {
            _this.ssv.dialog(err, 'Error');
        });
    };
    StdprofileComponent.prototype.paymentoption = function () {
        this.router.navigate(['layout/makepayment']);
    };
    StdprofileComponent.prototype.attendance = function () {
        this.router.navigate(['layout/confirmattendance']);
    };
    StdprofileComponent.prototype.confirmpayment = function () {
        this.router.navigate(['layout/confirmpayment']);
    };
    StdprofileComponent.prototype.print = function () {
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