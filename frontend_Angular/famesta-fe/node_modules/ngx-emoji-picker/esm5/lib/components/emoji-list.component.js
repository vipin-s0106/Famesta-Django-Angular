import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChildren, QueryList, forwardRef, Output, EventEmitter } from '@angular/core';
import { EmojiCategoryComponent } from './emoji-category.component';
var EmojiListComponent = /** @class */ (function () {
    function EmojiListComponent() {
        this.emojiSelectionEmitter = new EventEmitter();
    }
    EmojiListComponent.prototype.selectCategory = function (event) {
        this.emojiCategoryComponents.forEach(function (categoryCmp) {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        });
    };
    __decorate([
        ViewChildren(forwardRef(function () { return EmojiCategoryComponent; })),
        __metadata("design:type", QueryList)
    ], EmojiListComponent.prototype, "emojiCategoryComponents", void 0);
    __decorate([
        Input('emojis'),
        __metadata("design:type", Object)
    ], EmojiListComponent.prototype, "emojis", void 0);
    __decorate([
        Output('emoji-selection'),
        __metadata("design:type", Object)
    ], EmojiListComponent.prototype, "emojiSelectionEmitter", void 0);
    EmojiListComponent = __decorate([
        Component({
            selector: 'emoji-list',
            template: "\n  <div class=\"emoji-list\">\n    <ng-container *ngFor=\"let emojiCategory of emojis | notEmptyEmojiCategory\">\n      <emoji-category [category]=\"emojiCategory\"></emoji-category>\n      <div class=\"emoji-buttons\">\n        <emoji-button \n        *ngFor=\"let emoji of emojiCategory.emojis\"\n        (selection)=\"emojiSelectionEmitter.emit($event)\"\n        [emoji]=\"emoji\"></emoji-button>\n      </div>\n    </ng-container>\n  </div>\n  ",
            styles: [":host{overflow-y:auto}.emoji-list{padding:0 10px 10px}.emoji-buttons{display:flex;justify-content:center;flex-wrap:wrap;margin:5px 0}"]
        }),
        __metadata("design:paramtypes", [])
    ], EmojiListComponent);
    return EmojiListComponent;
}());
export { EmojiListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvQnBFO0lBS0U7UUFGMkIsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUUzRCxDQUFDO0lBRVYsMkNBQWMsR0FBckIsVUFBc0IsS0FBSztRQUN6QixJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLFVBQUMsV0FBa0M7WUFDdEUsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQy9DLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVp1RDtRQUF2RCxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO2tDQUEwQixTQUFTO3VFQUF5QjtJQUNsRztRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOztzREFBUTtJQUNHO1FBQTFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7cUVBQWlEO0lBSGhFLGtCQUFrQjtRQWxCOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFFdEIsUUFBUSxFQUFFLG9jQVlUOztTQUNGLENBQUM7O09BRVcsa0JBQWtCLENBYzlCO0lBQUQseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtb2ppQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL2Vtb2ppLWNhdGVnb3J5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLWxpc3QnLFxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWxpc3Quc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbGlzdFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVtb2ppQ2F0ZWdvcnkgb2YgZW1vamlzIHwgbm90RW1wdHlFbW9qaUNhdGVnb3J5XCI+XG4gICAgICA8ZW1vamktY2F0ZWdvcnkgW2NhdGVnb3J5XT1cImVtb2ppQ2F0ZWdvcnlcIj48L2Vtb2ppLWNhdGVnb3J5PlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLWJ1dHRvbnNcIj5cbiAgICAgICAgPGVtb2ppLWJ1dHRvbiBcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtb2ppIG9mIGVtb2ppQ2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgKHNlbGVjdGlvbik9XCJlbW9qaVNlbGVjdGlvbkVtaXR0ZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgW2Vtb2ppXT1cImVtb2ppXCI+PC9lbW9qaS1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbW9qaUxpc3RDb21wb25lbnQge1xuICBAVmlld0NoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRW1vamlDYXRlZ29yeUNvbXBvbmVudCkpIGVtb2ppQ2F0ZWdvcnlDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW1vamlDYXRlZ29yeUNvbXBvbmVudD47XG4gIEBJbnB1dCgnZW1vamlzJykgZW1vamlzO1xuICBAT3V0cHV0KCdlbW9qaS1zZWxlY3Rpb24nKSBlbW9qaVNlbGVjdGlvbkVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBzZWxlY3RDYXRlZ29yeShldmVudCkge1xuICAgIHRoaXMuZW1vamlDYXRlZ29yeUNvbXBvbmVudHMuZm9yRWFjaCgoY2F0ZWdvcnlDbXA6RW1vamlDYXRlZ29yeUNvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5Q21wWydjYXRlZ29yeSddLm5hbWUgPT09IGV2ZW50Lm5hbWUpIHtcbiAgICAgICAgY2F0ZWdvcnlDbXAuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19