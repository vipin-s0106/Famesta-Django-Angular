import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChildren, QueryList, forwardRef, Output, EventEmitter } from '@angular/core';
import { EmojiCategoryComponent } from './emoji-category.component';
let EmojiListComponent = class EmojiListComponent {
    constructor() {
        this.emojiSelectionEmitter = new EventEmitter();
    }
    selectCategory(event) {
        this.emojiCategoryComponents.forEach((categoryCmp) => {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        });
    }
};
__decorate([
    ViewChildren(forwardRef(() => EmojiCategoryComponent)),
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
        template: `
  <div class="emoji-list">
    <ng-container *ngFor="let emojiCategory of emojis | notEmptyEmojiCategory">
      <emoji-category [category]="emojiCategory"></emoji-category>
      <div class="emoji-buttons">
        <emoji-button 
        *ngFor="let emoji of emojiCategory.emojis"
        (selection)="emojiSelectionEmitter.emit($event)"
        [emoji]="emoji"></emoji-button>
      </div>
    </ng-container>
  </div>
  `,
        styles: [":host{overflow-y:auto}.emoji-list{padding:0 10px 10px}.emoji-buttons{display:flex;justify-content:center;flex-wrap:wrap;margin:5px 0}"]
    }),
    __metadata("design:paramtypes", [])
], EmojiListComponent);
export { EmojiListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvQnBFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzdCO1FBRjJCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFM0QsQ0FBQztJQUVWLGNBQWMsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFrQyxFQUFFLEVBQUU7WUFDMUUsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQy9DLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFieUQ7SUFBdkQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzhCQUEwQixTQUFTO21FQUF5QjtBQUNsRztJQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOztrREFBUTtBQUNHO0lBQTFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7aUVBQWlEO0FBSGhFLGtCQUFrQjtJQWxCOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFFdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDs7S0FDRixDQUFDOztHQUVXLGtCQUFrQixDQWM5QjtTQWRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBmb3J3YXJkUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1vamlDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vZW1vamktY2F0ZWdvcnkuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktbGlzdCcsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktbGlzdC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1saXN0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZW1vamlDYXRlZ29yeSBvZiBlbW9qaXMgfCBub3RFbXB0eUVtb2ppQ2F0ZWdvcnlcIj5cbiAgICAgIDxlbW9qaS1jYXRlZ29yeSBbY2F0ZWdvcnldPVwiZW1vamlDYXRlZ29yeVwiPjwvZW1vamktY2F0ZWdvcnk+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnV0dG9uc1wiPlxuICAgICAgICA8ZW1vamktYnV0dG9uIFxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vamkgb2YgZW1vamlDYXRlZ29yeS5lbW9qaXNcIlxuICAgICAgICAoc2VsZWN0aW9uKT1cImVtb2ppU2VsZWN0aW9uRW1pdHRlci5lbWl0KCRldmVudClcIlxuICAgICAgICBbZW1vamldPVwiZW1vamlcIj48L2Vtb2ppLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEVtb2ppTGlzdENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBFbW9qaUNhdGVnb3J5Q29tcG9uZW50KSkgZW1vamlDYXRlZ29yeUNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbW9qaUNhdGVnb3J5Q29tcG9uZW50PjtcbiAgQElucHV0KCdlbW9qaXMnKSBlbW9qaXM7XG4gIEBPdXRwdXQoJ2Vtb2ppLXNlbGVjdGlvbicpIGVtb2ppU2VsZWN0aW9uRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHNlbGVjdENhdGVnb3J5KGV2ZW50KSB7XG4gICAgdGhpcy5lbW9qaUNhdGVnb3J5Q29tcG9uZW50cy5mb3JFYWNoKChjYXRlZ29yeUNtcDpFbW9qaUNhdGVnb3J5Q29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAoY2F0ZWdvcnlDbXBbJ2NhdGVnb3J5J10ubmFtZSA9PT0gZXZlbnQubmFtZSkge1xuICAgICAgICBjYXRlZ29yeUNtcC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=