import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
let EmojiCategoryComponent = class EmojiCategoryComponent {
    constructor(_element) {
        this._element = _element;
    }
    scrollIntoView() {
        this._element.nativeElement.scrollIntoView();
    }
};
EmojiCategoryComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('category'),
    __metadata("design:type", Object)
], EmojiCategoryComponent.prototype, "category", void 0);
EmojiCategoryComponent = __decorate([
    Component({
        selector: 'emoji-category',
        template: `
  <p class="emoji-category">{{category.name}}</p>
  `,
        styles: [".emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:Arial,\"Arial Black\",Tahoma,\"Trebuchet MS\",Verdana}"]
    }),
    __metadata("design:paramtypes", [ElementRef])
], EmojiCategoryComponent);
export { EmojiCategoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWVtb2ppLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWNhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTdELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBR2pDLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7SUFBSSxDQUFDO0lBRXRDLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQztDQUNGLENBQUE7O1lBTCtCLFVBQVU7O0FBRnJCO0lBQWxCLEtBQUssQ0FBQyxVQUFVLENBQUM7O3dEQUFVO0FBRGpCLHNCQUFzQjtJQVJsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBRTFCLFFBQVEsRUFBRTs7R0FFVDs7S0FDRixDQUFDO3FDQUs4QixVQUFVO0dBSDdCLHNCQUFzQixDQVFsQztTQVJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktY2F0ZWdvcnknLFxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWNhdGVnb3J5LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgPHAgY2xhc3M9XCJlbW9qaS1jYXRlZ29yeVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9wPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRW1vamlDYXRlZ29yeUNvbXBvbmVudCB7XG4gIEBJbnB1dCgnY2F0ZWdvcnknKSBjYXRlZ29yeTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cblxuICBwdWJsaWMgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG4gIH1cbn1cbiJdfQ==