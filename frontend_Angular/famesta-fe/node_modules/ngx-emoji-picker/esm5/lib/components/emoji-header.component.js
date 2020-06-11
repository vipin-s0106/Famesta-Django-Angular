import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
var EmojiHeaderComponent = /** @class */ (function () {
    function EmojiHeaderComponent() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
    __decorate([
        Input('emojisCategories'),
        __metadata("design:type", Object)
    ], EmojiHeaderComponent.prototype, "emojisCategories", void 0);
    __decorate([
        Output('categorySelection'),
        __metadata("design:type", Object)
    ], EmojiHeaderComponent.prototype, "categorySelection", void 0);
    __decorate([
        Output('search'),
        __metadata("design:type", Object)
    ], EmojiHeaderComponent.prototype, "searchEmitter", void 0);
    EmojiHeaderComponent = __decorate([
        Component({
            selector: 'emoji-header',
            template: "\n  <emoji-categories [emojisCategories]=\"emojisCategories\" (categorySelection)=\"categorySelection.emit($event)\"></emoji-categories>\n  <emoji-search (search)=\"searchEmitter.emit($event)\"></emoji-search>\n  ",
            styles: [":host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}"]
        }),
        __metadata("design:paramtypes", [])
    ], EmojiHeaderComponent);
    return EmojiHeaderComponent;
}());
export { EmojiHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbW9qaS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBVXRFO0lBTUU7UUFINkIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN0RCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUE7SUFHNUQsQ0FBQztJQU4wQjtRQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7O2tFQUFpQjtJQUVkO1FBQTVCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzs7bUVBQTRDO0lBQ3REO1FBQWpCLE1BQU0sQ0FBQyxRQUFRLENBQUM7OytEQUEyQztJQUpqRCxvQkFBb0I7UUFSaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFFeEIsUUFBUSxFQUFFLHVOQUdUOztTQUNGLENBQUM7O09BQ1csb0JBQW9CLENBUWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLWhlYWRlcicsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktaGVhZGVyLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGVtb2ppLWNhdGVnb3JpZXMgW2Vtb2ppc0NhdGVnb3JpZXNdPVwiZW1vamlzQ2F0ZWdvcmllc1wiIChjYXRlZ29yeVNlbGVjdGlvbik9XCJjYXRlZ29yeVNlbGVjdGlvbi5lbWl0KCRldmVudClcIj48L2Vtb2ppLWNhdGVnb3JpZXM+XG4gIDxlbW9qaS1zZWFyY2ggKHNlYXJjaCk9XCJzZWFyY2hFbWl0dGVyLmVtaXQoJGV2ZW50KVwiPjwvZW1vamktc2VhcmNoPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEVtb2ppSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCdlbW9qaXNDYXRlZ29yaWVzJykgZW1vamlzQ2F0ZWdvcmllc1xuXG4gIEBPdXRwdXQoJ2NhdGVnb3J5U2VsZWN0aW9uJykgY2F0ZWdvcnlTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KClcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIl19