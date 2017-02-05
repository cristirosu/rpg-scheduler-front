"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var category_service_1 = require("../shared/services/category.service");
var task_service_1 = require("../shared/services/task.service");
var task_model_1 = require("../models/task.model");
var category_model_1 = require("../models/category.model");
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        return _super.apply(this, arguments) || this;
    }
    return CustomModalContext;
}(bootstrap_1.BSModalContext));
exports.CustomModalContext = CustomModalContext;
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var CustomModal = (function () {
    function CustomModal(dialog, _categoryService, _taskService) {
        this.dialog = dialog;
        this._categoryService = _categoryService;
        this._taskService = _taskService;
        this.task = new task_model_1.Task();
        this.selectedCategory = false;
        this.context = dialog.context;
        if (dialog.context.task)
            this.task = dialog.context.task;
        dialog.setCloseGuard(this);
    }
    CustomModal.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CustomModal.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.list()
            .subscribe(function (categories) {
            _this.categories = [];
            for (var i = 0; i < categories.length; i++) {
                var category = categories[i];
                _this.categories.push({ id: category.id, text: category.name });
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ;
    CustomModal.prototype.selected = function (value) {
        this.selectedCategory = true;
        this.task.category = new category_model_1.Category(value.id, value.text);
        this.task.categoryId = value.id;
    };
    CustomModal.prototype.removed = function (value) {
        this.selectedCategory = false;
    };
    CustomModal.prototype.save = function () {
        var _this = this;
        this._taskService.save(this.task).subscribe(function () { return _this.closeModal(); });
    };
    CustomModal.prototype.closeModal = function () {
        this.dialog.close();
    };
    return CustomModal;
}());
CustomModal = __decorate([
    core_1.Component({
        selector: 'modal-content',
        styleUrls: ['app/tasks/task-edit.component.css'],
        templateUrl: 'app/tasks/task-edit.component.html'
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef,
        category_service_1.CategoryService,
        task_service_1.TaskService])
], CustomModal);
exports.CustomModal = CustomModal;
//# sourceMappingURL=task-edit.component.js.map