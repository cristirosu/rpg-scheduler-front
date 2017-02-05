"use strict";
var category_model_1 = require("./category.model");
var Task = (function () {
    function Task() {
        this.id = 0;
        this.categoryId = 0;
        this.isFinished = false;
        this.category = new category_model_1.Category(undefined, undefined); //Category;// = new Category();
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map