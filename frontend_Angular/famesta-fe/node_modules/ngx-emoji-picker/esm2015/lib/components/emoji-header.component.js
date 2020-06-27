import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
let EmojiHeaderComponent = class EmojiHeaderComponent {
    constructor() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
};
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
        template: `
  <emoji-categories [emojisCategories]="emojisCategories" (categorySelection)="categorySelection.emit($event)"></emoji-categories>
  <emoji-search (search)="searchEmitter.emit($event)"></emoji-search>
  `,
        styles: [":host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}"]
    }),
    __metadata("design:paramtypes", [])
], EmojiHeaderComponent);
export { EmojiHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbW9qaS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBVXRFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBTS9CO1FBSDZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFBO0lBRzVELENBQUM7Q0FDRixDQUFBO0FBUDRCO0lBQTFCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7OERBQWlCO0FBRWQ7SUFBNUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDOzsrREFBNEM7QUFDdEQ7SUFBakIsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7MkRBQTJDO0FBSmpELG9CQUFvQjtJQVJoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUV4QixRQUFRLEVBQUU7OztHQUdUOztLQUNGLENBQUM7O0dBQ1csb0JBQW9CLENBUWhDO1NBUlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1oZWFkZXInLFxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWhlYWRlci5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxlbW9qaS1jYXRlZ29yaWVzIFtlbW9qaXNDYXRlZ29yaWVzXT1cImVtb2ppc0NhdGVnb3JpZXNcIiAoY2F0ZWdvcnlTZWxlY3Rpb24pPVwiY2F0ZWdvcnlTZWxlY3Rpb24uZW1pdCgkZXZlbnQpXCI+PC9lbW9qaS1jYXRlZ29yaWVzPlxuICA8ZW1vamktc2VhcmNoIChzZWFyY2gpPVwic2VhcmNoRW1pdHRlci5lbWl0KCRldmVudClcIj48L2Vtb2ppLXNlYXJjaD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBFbW9qaUhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgnZW1vamlzQ2F0ZWdvcmllcycpIGVtb2ppc0NhdGVnb3JpZXNcblxuICBAT3V0cHV0KCdjYXRlZ29yeVNlbGVjdGlvbicpIGNhdGVnb3J5U2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgnc2VhcmNoJykgc2VhcmNoRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==