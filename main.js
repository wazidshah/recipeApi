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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_addRecipe_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addRecipe/add-recipe/add-recipe.component */ "./src/app/components/addRecipe/add-recipe/add-recipe.component.ts");
/* harmony import */ var _components_recipecomponen_recipe_component_recipe_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/recipecomponen/recipe-component/recipe-component.component */ "./src/app/components/recipecomponen/recipe-component/recipe-component.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "list", component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "add", component: _components_addRecipe_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_8__["AddRecipeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _components_addRecipe_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_8__["AddRecipeComponent"],
                _components_recipecomponen_recipe_component_recipe_component_component__WEBPACK_IMPORTED_MODULE_9__["RecipeComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/addRecipe/add-recipe/add-recipe.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/addRecipe/add-recipe/add-recipe.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/components/addRecipe/add-recipe/add-recipe.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/addRecipe/add-recipe/add-recipe.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/list\" class=\"btn btn-secondary m-4\">Dashboard</a> \n<div class=\"container mt-3\">\n  <div class=\"alert alert-danger\" [class.d-none]=errorShow>{{errorMessage}}</div>\n  <div class=\"card p-5\">\n    <span><h1 class=\"text-center\">Add Recipe</h1></span>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea [(ngModel)]=\"description\" name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"ingridients\">Ingridients</label>\n        <textarea [(ngModel)]=\"ingridients\" name=\"ingridients\" id=\"ingridients\" cols=\"30\" rows=\"10\"></textarea>\n      </div>\n      <input type=\"file\" (change)=\"fileChanged($event)\">\n      <input type=\"button\" value=\"Submit\" class=\"btn btn-block btn-info mt-3\" (click)=\"submit()\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/addRecipe/add-recipe/add-recipe.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/addRecipe/add-recipe/add-recipe.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_listService_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/listService/list.service */ "./src/app/services/listService/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddRecipeComponent = /** @class */ (function () {
    function AddRecipeComponent(listService) {
        this.listService = listService;
        this.description = "";
        this.ingridients = "";
        this.errorShow = true;
    }
    AddRecipeComponent.prototype.ngOnInit = function () {
    };
    AddRecipeComponent.prototype.fileChanged = function (event) {
        this.file = event.target.files[0];
    };
    AddRecipeComponent.prototype.submit = function () {
        var _this = this;
        if (this.description.length < 5) {
            console.log(this.file);
            this.errorMessage = "Description Needs to be of atleast 5 characters";
            this.errorShow = false;
            setTimeout(function () { return _this.errorShow = true; }, 3000);
            return;
        }
        if (this.ingridients.length < 15) {
            this.errorMessage = "Ingridients Needs to be of atleast 15 characters";
            this.errorShow = false;
            setTimeout(function () { return _this.errorShow = true; }, 3000);
            return;
        }
        if (typeof this.file == "undefined") {
            this.errorMessage = "Please Select Image";
            this.errorShow = false;
            setTimeout(function () { return _this.errorShow = true; }, 3000);
            return;
        }
        var fd = new FormData();
        fd.append('image', this.file, this.file.name);
        this.listService.addImage(fd).subscribe(function (data) {
            var recipe = {
                ingridients: _this.ingridients,
                description: _this.description,
                X_API_KEY: localStorage.getItem('recipeToken'),
                fileName: data
            };
            _this.listService.addRecipe(recipe).subscribe(function (data) {
                console.log(data);
                _this.description = "";
                _this.ingridients = "";
                _this.file = null;
            });
        });
    };
    AddRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-recipe',
            template: __webpack_require__(/*! ./add-recipe.component.html */ "./src/app/components/addRecipe/add-recipe/add-recipe.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/components/addRecipe/add-recipe/add-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_services_listService_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height:200px;\r\n}\r\n\r\n.commentSection{\r\n    height: 50%;\r\n    border: 1px solid black;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/add\" class=\"btn btn-secondary m-4\">Add Recipe</a> \n<button class=\"btn btn-secondary m-4\" (click)=\"logout()\">Log Out</button>\n<div class=\"container\">\n  <div *ngFor=\"let item of list\">\n    <app-recipe-component [id]=\"item.r_id\" [item]=\"item\" [commentsArray]=\"comments\"></app-recipe-component>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_listService_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/listService/list.service */ "./src/app/services/listService/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(listService) {
        this.listService = listService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.getList().subscribe(function (data) {
            _this.list = data;
        });
        this.listService.getComments()
            .subscribe(function (data) {
            _this.comments = data;
            console.log(_this.comments);
        });
    };
    ListComponent.prototype.addComment = function (event) {
        var commentId = event.id.split('_')[1];
        this.comments.unshift({ r_id: commentId, comment: this.comment });
    };
    ListComponent.prototype.logout = function () {
        localStorage.removeItem('recipeToken');
        window.location.reload();
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_listService_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 p-5\">\n  <form>\n    <div class=\"text-center\">\n      <h1>Recipe Share</h1>\n    </div>\n    <div class=\"alert alert-danger\" [class.d-none]=showErr>{{ErrorMessage}}</div>\n    <div class=\"form-group\">\n      <label for=\"username\">User Name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\">\n    </div>\n\n    <input type=\"button\" (click) = \"signIn()\" value=\"Login\" class=\"btn btn-primary btn-block\">\n    <input type=\"button\" (click) = \"signUp()\" value=\"Sign Up\" class=\"btn btn-block\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.showErr = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.auth.userLogin(this.username, this.password).subscribe(function (data) {
            localStorage.setItem('recipeToken', data.toString());
            _this.router.navigate(['/list']);
        }, function (err) {
            _this.ErrorMessage = err.error;
            _this.showErr = false;
            setTimeout(function () { return _this.showErr = true; }, 3000);
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.auth.userSignUp(this.username, this.password).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            _this.ErrorMessage = err.error;
            _this.showErr = false;
            setTimeout(function () { return _this.showErr = true; }, 3000);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/recipecomponen/recipe-component/recipe-component.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/recipecomponen/recipe-component/recipe-component.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height:200px;\r\n}\r\n\r\n.commentSection{\r\n    height: 50%;\r\n    border: 1px solid black;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}"

/***/ }),

/***/ "./src/app/components/recipecomponen/recipe-component/recipe-component.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/recipecomponen/recipe-component/recipe-component.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n          <div class=\"col-lg-6\">\n              <div class=\"card\">\n                <img src=\"{{imgSrc}}\" alt=\"\" class=\"card-img-top\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">{{description}}</p>\n                  <p class=\"card-text\">{{ingridients}}</p>\n                </div>\n              </div>\n          </div>\n          <div class=\"col-lg-6\">\n              <h1>Comments</h1>\n              <div class=\"row commentSection\" id=\"\">\n                <div class=\"col-12\">\n                  <ul class=\"list-group\" id=\"\">\n                    <li class=\"list-group-item\" *ngFor=\"let com of comments\">\n                      {{com}}\n                    </li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"row\" class=\"pt-3\">\n                <div class=\"col-12\">\n                  <form>\n                    <input type=\"text\" [(ngModel)]=\"comment\" class=\"form-control\" name=\"comment\" id=\"\"/>\n                    <input  #f type=\"button\" value=\"Comment\" id=\"\" (click)=\"addComment(f)\">\n                  </form>\n                </div>\n                  \n              </div>\n          </div>\n      </div>  \n      \n    </li>\n  </ul>"

/***/ }),

/***/ "./src/app/components/recipecomponen/recipe-component/recipe-component.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/recipecomponen/recipe-component/recipe-component.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RecipeComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponentComponent", function() { return RecipeComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_listService_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/listService/list.service */ "./src/app/services/listService/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeComponentComponent = /** @class */ (function () {
    function RecipeComponentComponent(ngzone, listeService) {
        this.ngzone = ngzone;
        this.listeService = listeService;
        this.comments = [];
    }
    RecipeComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgSrc = 'http://127.0.0.1:3000/' + this.item.path;
        this.description = this.item.description;
        this.ingridients = this.item.ingridients;
        this.ngzone.run(function () {
            for (var key in _this.commentsArray) {
                if (_this.commentsArray[key].r_id == _this.id) {
                    _this.comments.push(_this.commentsArray[key].comment);
                }
            }
        });
    };
    RecipeComponentComponent.prototype.addComment = function (event) {
        var _this = this;
        this.comments.unshift(this.comment);
        var request = {
            X_API_KEY: localStorage.getItem('recipeToken'),
            recipe_id: this.id,
            comment: this.comment
        };
        this.listeService.addComment(request)
            .subscribe(function (data) {
            console.log(data);
            _this.comment = "";
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecipeComponentComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecipeComponentComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecipeComponentComponent.prototype, "commentsArray", void 0);
    RecipeComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-component',
            template: __webpack_require__(/*! ./recipe-component.component.html */ "./src/app/components/recipecomponen/recipe-component/recipe-component.component.html"),
            styles: [__webpack_require__(/*! ./recipe-component.component.css */ "./src/app/components/recipecomponen/recipe-component/recipe-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_listService_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], RecipeComponentComponent);
    return RecipeComponentComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isUserLoggedIn()) {
            console.log(false);
            this.router.navigate([""]);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.userLogin = function (username, password) {
        var request = {
            username: username,
            password: password
        };
        return this.http.post('http://127.0.0.1:3000/user/login', request);
    };
    AuthService.prototype.userSignUp = function (username, password) {
        var request = {
            username: username,
            password: password
        };
        return this.http.post('http://127.0.0.1:3000/user/signup', request);
    };
    AuthService.prototype.isUserLoggedIn = function () {
        if (localStorage.getItem('recipeToken') != null) {
            console.log(localStorage.getItem('recipeToken'));
            return true;
        }
        else {
            console.log(localStorage.getItem('recipeToken'));
            console.log('false');
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/listService/list.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/listService/list.service.ts ***!
  \******************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
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


var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
    }
    ListService.prototype.getList = function () {
        var request = {
            'X_API_KEY': localStorage.getItem('recipeToken')
        };
        return this.http.post('http://127.0.0.1:3000/recipe/getAll', request);
    };
    ListService.prototype.addImage = function (fd) {
        return this.http.post('http://127.0.0.1:3000/image/upload', fd);
    };
    ListService.prototype.addRecipe = function (data) {
        return this.http.post('http://127.0.0.1:3000/recipe/add', data);
    };
    ListService.prototype.getComments = function () {
        var request = {
            'X_API_KEY': localStorage.getItem('recipeToken')
        };
        return this.http.post('http://127.0.0.1:3000/recipe/getComments', request);
    };
    ListService.prototype.addComment = function (request) {
        return this.http.post('http://127.0.0.1:3000/recipe/comment', request);
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListService);
    return ListService;
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

module.exports = __webpack_require__(/*! E:\recipe\recipeShare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map