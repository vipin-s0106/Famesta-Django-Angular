import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
import { EmojiListComponent } from './emoji-list.component';
var EmojiContentComponent = /** @class */ (function () {
    function EmojiContentComponent() {
        this.emojiSelectionEmitter = new EventEmitter();
        this._emojis = EMOJIS;
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
    }
    EmojiContentComponent.prototype.searchHandler = function (value) {
        var _this = this;
        var filteredEmojis = this.emojisCategories.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach(function (i) {
            var category = _this._emojis[i];
            category.emojis.forEach(function (emoji) {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            });
        });
        this.emojis = filteredEmojis;
    };
    EmojiContentComponent.prototype.categorySelectionHandler = function (event) {
        this.emojiListComponent.selectCategory(event);
    };
    __decorate([
        ViewChild(forwardRef(function () { return EmojiListComponent; }), { static: true }),
        __metadata("design:type", EmojiListComponent)
    ], EmojiContentComponent.prototype, "emojiListComponent", void 0);
    __decorate([
        Output('emoji-selection'),
        __metadata("design:type", Object)
    ], EmojiContentComponent.prototype, "emojiSelectionEmitter", void 0);
    EmojiContentComponent = __decorate([
        Component({
            selector: 'emoji-content',
            template: "\n  <emoji-header \n    [emojisCategories]=\"emojisCategories\"\n    (categorySelection)=\"categorySelectionHandler($event)\"\n    (search)=\"searchHandler($event)\"></emoji-header>\n  <emoji-list [emojis]=\"emojis\" (emoji-selection)=\"emojiSelectionEmitter.emit($event)\"></emoji-list>\n  <emoji-footer></emoji-footer>\n  ",
            styles: [":host{display:flex;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{flex-grow:1}"]
        }),
        __metadata("design:paramtypes", [])
    ], EmojiContentComponent);
    return EmojiContentComponent;
}());
export { EmojiContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWU1RDtJQVFFO1FBTjJCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFbkUsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFFL0UsQ0FBQztJQUVoQiw2Q0FBYSxHQUFiLFVBQWMsS0FBSztRQUFuQixpQkFnQkM7UUFmQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztRQUV6RyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNqQyxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDM0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNsQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELHdEQUF3QixHQUF4QixVQUF5QixLQUFLO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTdCa0U7UUFBbEUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBcUIsa0JBQWtCO3FFQUFDO0lBQy9FO1FBQTFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7d0VBQWlEO0lBRmhFLHFCQUFxQjtRQWJqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUV6QixRQUFRLEVBQUUsc1VBT1Q7O1NBQ0YsQ0FBQzs7T0FFVyxxQkFBcUIsQ0ErQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVNT0pJUyB9IGZyb20gJy4uL21pc2MvZW1vamlzLmRhdGEnO1xuaW1wb3J0IHsgRW1vamlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9lbW9qaS1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLWNvbnRlbnQnLFxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWNvbnRlbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8ZW1vamktaGVhZGVyIFxuICAgIFtlbW9qaXNDYXRlZ29yaWVzXT1cImVtb2ppc0NhdGVnb3JpZXNcIlxuICAgIChjYXRlZ29yeVNlbGVjdGlvbik9XCJjYXRlZ29yeVNlbGVjdGlvbkhhbmRsZXIoJGV2ZW50KVwiXG4gICAgKHNlYXJjaCk9XCJzZWFyY2hIYW5kbGVyKCRldmVudClcIj48L2Vtb2ppLWhlYWRlcj5cbiAgPGVtb2ppLWxpc3QgW2Vtb2ppc109XCJlbW9qaXNcIiAoZW1vamktc2VsZWN0aW9uKT1cImVtb2ppU2VsZWN0aW9uRW1pdHRlci5lbWl0KCRldmVudClcIj48L2Vtb2ppLWxpc3Q+XG4gIDxlbW9qaS1mb290ZXI+PC9lbW9qaS1mb290ZXI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbW9qaUNvbnRlbnRDb21wb25lbnQge1xuICBAVmlld0NoaWxkKGZvcndhcmRSZWYoKCkgPT4gRW1vamlMaXN0Q29tcG9uZW50KSwgeyBzdGF0aWM6IHRydWUgfSkgZW1vamlMaXN0Q29tcG9uZW50OiBFbW9qaUxpc3RDb21wb25lbnQ7XG4gIEBPdXRwdXQoJ2Vtb2ppLXNlbGVjdGlvbicpIGVtb2ppU2VsZWN0aW9uRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgX2Vtb2ppcyA9IEVNT0pJUztcbiAgZW1vamlzID0gdGhpcy5fZW1vamlzLnNsaWNlKCk7XG4gIGVtb2ppc0NhdGVnb3JpZXMgPSB0aGlzLl9lbW9qaXMubWFwKGNhdGVnb3J5ID0+IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3J5LCB7IGVtb2ppcyA6IFtdIH0pKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2VhcmNoSGFuZGxlcih2YWx1ZSkge1xuICAgIGxldCBmaWx0ZXJlZEVtb2ppcyA9IHRoaXMuZW1vamlzQ2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcnksIHsgZW1vamlzIDogW10gfSkpO1xuICAgIFxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcykuZm9yRWFjaChpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5fZW1vamlzW2ldO1xuXG4gICAgICBjYXRlZ29yeS5lbW9qaXMuZm9yRWFjaChlbW9qaSA9PiB7XG4gICAgICAgIGlmIChlbW9qaVsxXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWx0ZXJlZEVtb2ppc1tpXS5lbW9qaXMucHVzaChlbW9qaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbW9qaXMgPSBmaWx0ZXJlZEVtb2ppcztcbiAgfVxuXG4gIGNhdGVnb3J5U2VsZWN0aW9uSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuZW1vamlMaXN0Q29tcG9uZW50LnNlbGVjdENhdGVnb3J5KGV2ZW50KTtcbiAgfVxufVxuIl19