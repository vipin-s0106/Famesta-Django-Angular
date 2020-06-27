import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
var EmojiCategoryComponent = /** @class */ (function () {
    function EmojiCategoryComponent(_element) {
        this._element = _element;
    }
    EmojiCategoryComponent.prototype.scrollIntoView = function () {
        this._element.nativeElement.scrollIntoView();
    };
    EmojiCategoryComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('category'),
        __metadata("design:type", Object)
    ], EmojiCategoryComponent.prototype, "category", void 0);
    EmojiCategoryComponent = __decorate([
        Component({
            selector: 'emoji-category',
            template: "\n  <p class=\"emoji-category\">{{category.name}}</p>\n  ",
            styles: [".emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:Arial,\"Arial Black\",Tahoma,\"Trebuchet MS\",Verdana}"]
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], EmojiCategoryComponent);
    return EmojiCategoryComponent;
}());
export { EmojiCategoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWVtb2ppLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWNhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTdEO0lBR0UsZ0NBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7SUFBSSxDQUFDO0lBRXRDLCtDQUFjLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0JBSjZCLFVBQVU7O0lBRnJCO1FBQWxCLEtBQUssQ0FBQyxVQUFVLENBQUM7OzREQUFVO0lBRGpCLHNCQUFzQjtRQVJsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBRTFCLFFBQVEsRUFBRSwyREFFVDs7U0FDRixDQUFDO3lDQUs4QixVQUFVO09BSDdCLHNCQUFzQixDQVFsQztJQUFELDZCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1jYXRlZ29yeScsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktY2F0ZWdvcnkuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8cCBjbGFzcz1cImVtb2ppLWNhdGVnb3J5XCI+e3tjYXRlZ29yeS5uYW1lfX08L3A+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbW9qaUNhdGVnb3J5Q29tcG9uZW50IHtcbiAgQElucHV0KCdjYXRlZ29yeScpIGNhdGVnb3J5O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHB1YmxpYyBzY3JvbGxJbnRvVmlldygpIHtcbiAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxufVxuIl19