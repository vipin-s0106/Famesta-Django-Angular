import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
import { EmojiListComponent } from './emoji-list.component';
let EmojiContentComponent = class EmojiContentComponent {
    constructor() {
        this.emojiSelectionEmitter = new EventEmitter();
        this._emojis = EMOJIS;
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map(category => Object.assign({}, category, { emojis: [] }));
    }
    searchHandler(value) {
        let filteredEmojis = this.emojisCategories.map(category => Object.assign({}, category, { emojis: [] }));
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach(i => {
            const category = this._emojis[i];
            category.emojis.forEach(emoji => {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            });
        });
        this.emojis = filteredEmojis;
    }
    categorySelectionHandler(event) {
        this.emojiListComponent.selectCategory(event);
    }
};
__decorate([
    ViewChild(forwardRef(() => EmojiListComponent), { static: true }),
    __metadata("design:type", EmojiListComponent)
], EmojiContentComponent.prototype, "emojiListComponent", void 0);
__decorate([
    Output('emoji-selection'),
    __metadata("design:type", Object)
], EmojiContentComponent.prototype, "emojiSelectionEmitter", void 0);
EmojiContentComponent = __decorate([
    Component({
        selector: 'emoji-content',
        template: `
  <emoji-header 
    [emojisCategories]="emojisCategories"
    (categorySelection)="categorySelectionHandler($event)"
    (search)="searchHandler($event)"></emoji-header>
  <emoji-list [emojis]="emojis" (emoji-selection)="emojiSelectionEmitter.emit($event)"></emoji-list>
  <emoji-footer></emoji-footer>
  `,
        styles: [":host{display:flex;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{flex-grow:1}"]
    }),
    __metadata("design:paramtypes", [])
], EmojiContentComponent);
export { EmojiContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWU1RCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQVFoQztRQU4yQiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRW5FLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9FLENBQUM7SUFFaEIsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekcsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ2xDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBSztRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFBO0FBOUJvRTtJQUFsRSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQXFCLGtCQUFrQjtpRUFBQztBQUMvRTtJQUExQixNQUFNLENBQUMsaUJBQWlCLENBQUM7O29FQUFpRDtBQUZoRSxxQkFBcUI7SUFiakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFFekIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7O0tBQ0YsQ0FBQzs7R0FFVyxxQkFBcUIsQ0ErQmpDO1NBL0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBmb3J3YXJkUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRU1PSklTIH0gZnJvbSAnLi4vbWlzYy9lbW9qaXMuZGF0YSc7XG5pbXBvcnQgeyBFbW9qaUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2Vtb2ppLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktY29udGVudCcsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktY29udGVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxlbW9qaS1oZWFkZXIgXG4gICAgW2Vtb2ppc0NhdGVnb3JpZXNdPVwiZW1vamlzQ2F0ZWdvcmllc1wiXG4gICAgKGNhdGVnb3J5U2VsZWN0aW9uKT1cImNhdGVnb3J5U2VsZWN0aW9uSGFuZGxlcigkZXZlbnQpXCJcbiAgICAoc2VhcmNoKT1cInNlYXJjaEhhbmRsZXIoJGV2ZW50KVwiPjwvZW1vamktaGVhZGVyPlxuICA8ZW1vamktbGlzdCBbZW1vamlzXT1cImVtb2ppc1wiIChlbW9qaS1zZWxlY3Rpb24pPVwiZW1vamlTZWxlY3Rpb25FbWl0dGVyLmVtaXQoJGV2ZW50KVwiPjwvZW1vamktbGlzdD5cbiAgPGVtb2ppLWZvb3Rlcj48L2Vtb2ppLWZvb3Rlcj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEVtb2ppQ29udGVudENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBFbW9qaUxpc3RDb21wb25lbnQpLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbW9qaUxpc3RDb21wb25lbnQ6IEVtb2ppTGlzdENvbXBvbmVudDtcbiAgQE91dHB1dCgnZW1vamktc2VsZWN0aW9uJykgZW1vamlTZWxlY3Rpb25FbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBfZW1vamlzID0gRU1PSklTO1xuICBlbW9qaXMgPSB0aGlzLl9lbW9qaXMuc2xpY2UoKTtcbiAgZW1vamlzQ2F0ZWdvcmllcyA9IHRoaXMuX2Vtb2ppcy5tYXAoY2F0ZWdvcnkgPT4gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcnksIHsgZW1vamlzIDogW10gfSkpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZWFyY2hIYW5kbGVyKHZhbHVlKSB7XG4gICAgbGV0IGZpbHRlcmVkRW1vamlzID0gdGhpcy5lbW9qaXNDYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yeSwgeyBlbW9qaXMgOiBbXSB9KSk7XG4gICAgXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8tL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5fZW1vamlzKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLl9lbW9qaXNbaV07XG5cbiAgICAgIGNhdGVnb3J5LmVtb2ppcy5mb3JFYWNoKGVtb2ppID0+IHtcbiAgICAgICAgaWYgKGVtb2ppWzFdLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgIGZpbHRlcmVkRW1vamlzW2ldLmVtb2ppcy5wdXNoKGVtb2ppKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVtb2ppcyA9IGZpbHRlcmVkRW1vamlzO1xuICB9XG5cbiAgY2F0ZWdvcnlTZWxlY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5lbW9qaUxpc3RDb21wb25lbnQuc2VsZWN0Q2F0ZWdvcnkoZXZlbnQpO1xuICB9XG59XG4iXX0=