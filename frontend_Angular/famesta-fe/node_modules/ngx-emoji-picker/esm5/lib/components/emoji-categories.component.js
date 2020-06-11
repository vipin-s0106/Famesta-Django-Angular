import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
var EmojiCategoriesComponent = /** @class */ (function () {
    function EmojiCategoriesComponent() {
        this.categorySelection = new EventEmitter();
    }
    EmojiCategoriesComponent.prototype.handleCategorySelection = function (event) {
        this.categorySelection.emit(event);
    };
    __decorate([
        Input('emojisCategories'),
        __metadata("design:type", Object)
    ], EmojiCategoriesComponent.prototype, "emojisCategories", void 0);
    __decorate([
        Output('categorySelection'),
        __metadata("design:type", Object)
    ], EmojiCategoriesComponent.prototype, "categorySelection", void 0);
    EmojiCategoriesComponent = __decorate([
        Component({
            selector: 'emoji-categories',
            template: "\n  <ng-container *ngFor=\"let category of emojisCategories\">\n    <emoji-button \n      (selection)=\"handleCategorySelection($event)\"\n      [dataToEmit]=\"category\"\n      [emoji]=\"category.icon\"></emoji-button>\n  </ng-container>\n  ",
            styles: [":host{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 0 10px}"]
        }),
        __metadata("design:paramtypes", [])
    ], EmojiCategoriesComponent);
    return EmojiCategoriesComponent;
}());
export { EmojiCategoriesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktY2F0ZWdvcmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFldkU7SUFJRTtRQUY2QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRTFELENBQUM7SUFFaEIsMERBQXVCLEdBQXZCLFVBQXdCLEtBQUs7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBUDBCO1FBQTFCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7c0VBQWtCO0lBQ2Y7UUFBNUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDOzt1RUFBNkM7SUFGOUQsd0JBQXdCO1FBYnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFFNUIsUUFBUSxFQUFFLG9QQU9UOztTQUNGLENBQUM7O09BRVcsd0JBQXdCLENBU3BDO0lBQUQsK0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1jYXRlZ29yaWVzJyxcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1jYXRlZ29yaWVzLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZW1vamlzQ2F0ZWdvcmllc1wiPlxuICAgIDxlbW9qaS1idXR0b24gXG4gICAgICAoc2VsZWN0aW9uKT1cImhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uKCRldmVudClcIlxuICAgICAgW2RhdGFUb0VtaXRdPVwiY2F0ZWdvcnlcIlxuICAgICAgW2Vtb2ppXT1cImNhdGVnb3J5Lmljb25cIj48L2Vtb2ppLWJ1dHRvbj5cbiAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbW9qaUNhdGVnb3JpZXNDb21wb25lbnQge1xuICBASW5wdXQoJ2Vtb2ppc0NhdGVnb3JpZXMnKSBlbW9qaXNDYXRlZ29yaWVzO1xuICBAT3V0cHV0KCdjYXRlZ29yeVNlbGVjdGlvbicpIGNhdGVnb3J5U2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0aW9uLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=