import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var EmojiEmptyCategoryPipe = /** @class */ (function () {
    function EmojiEmptyCategoryPipe() {
    }
    EmojiEmptyCategoryPipe.prototype.transform = function (categories) {
        return categories.filter(function (category) { return category.emojis.length !== 0; });
    };
    EmojiEmptyCategoryPipe = __decorate([
        Pipe({
            name: 'notEmptyEmojiCategory'
        })
    ], EmojiEmptyCategoryPipe);
    return EmojiEmptyCategoryPipe;
}());
export { EmojiEmptyCategoryPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktZW1wdHktY2F0ZWdvcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZW1vamktZW1wdHktY2F0ZWdvcnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQ7SUFBQTtJQUlBLENBQUM7SUFIQywwQ0FBUyxHQUFULFVBQVUsVUFBaUI7UUFDekIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUhVLHNCQUFzQjtRQUpsQyxJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsdUJBQXVCO1NBQzlCLENBQUM7T0FFVyxzQkFBc0IsQ0FJbEM7SUFBRCw2QkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbm90RW1wdHlFbW9qaUNhdGVnb3J5J1xufSlcblxuZXhwb3J0IGNsYXNzIEVtb2ppRW1wdHlDYXRlZ29yeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGNhdGVnb3JpZXM6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcihjYXRlZ29yeSA9PiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoICE9PSAwKTtcbiAgfVxufVxuIl19