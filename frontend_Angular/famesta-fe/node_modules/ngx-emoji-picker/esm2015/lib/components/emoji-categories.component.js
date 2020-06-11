import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let EmojiCategoriesComponent = class EmojiCategoriesComponent {
    constructor() {
        this.categorySelection = new EventEmitter();
    }
    handleCategorySelection(event) {
        this.categorySelection.emit(event);
    }
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
        template: `
  <ng-container *ngFor="let category of emojisCategories">
    <emoji-button 
      (selection)="handleCategorySelection($event)"
      [dataToEmit]="category"
      [emoji]="category.icon"></emoji-button>
  </ng-container>
  `,
        styles: [":host{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 0 10px}"]
    }),
    __metadata("design:paramtypes", [])
], EmojiCategoriesComponent);
export { EmojiCategoriesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktY2F0ZWdvcmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFldkUsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFJbkM7UUFGNkIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUUxRCxDQUFDO0lBRWhCLHVCQUF1QixDQUFDLEtBQUs7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0YsQ0FBQTtBQVI0QjtJQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7O2tFQUFrQjtBQUNmO0lBQTVCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzs7bUVBQTZDO0FBRjlELHdCQUF3QjtJQWJwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBRTVCLFFBQVEsRUFBRTs7Ozs7OztHQU9UOztLQUNGLENBQUM7O0dBRVcsd0JBQXdCLENBU3BDO1NBVFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktY2F0ZWdvcmllcycsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktY2F0ZWdvcmllcy5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGVtb2ppc0NhdGVnb3JpZXNcIj5cbiAgICA8ZW1vamktYnV0dG9uIFxuICAgICAgKHNlbGVjdGlvbik9XCJoYW5kbGVDYXRlZ29yeVNlbGVjdGlvbigkZXZlbnQpXCJcbiAgICAgIFtkYXRhVG9FbWl0XT1cImNhdGVnb3J5XCJcbiAgICAgIFtlbW9qaV09XCJjYXRlZ29yeS5pY29uXCI+PC9lbW9qaS1idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRW1vamlDYXRlZ29yaWVzQ29tcG9uZW50IHtcbiAgQElucHV0KCdlbW9qaXNDYXRlZ29yaWVzJykgZW1vamlzQ2F0ZWdvcmllcztcbiAgQE91dHB1dCgnY2F0ZWdvcnlTZWxlY3Rpb24nKSBjYXRlZ29yeVNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19