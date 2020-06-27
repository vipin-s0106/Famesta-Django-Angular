import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { CaretEvent } from '../misc/caret-event';
let EmojiPickerCaretDirective = class EmojiPickerCaretDirective {
    constructor(_el) {
        this._el = _el;
        this.caretEmitter = new EventEmitter();
        this._caretEvent$ = new Subject();
        this._destroyed$ = new Subject();
        this._lastCaretEvent = CaretEvent.generateNullEvent();
        this._caretEvent$
            .pipe(takeUntil(this._destroyed$), distinctUntilChanged((event1, event2) => {
            return CaretEvent.compare(event1, event2);
        }))
            .subscribe((event) => {
            this.caretEmitter.emit(event);
            this._lastCaretEvent = event.clone();
        });
    }
    get doc() {
        if (!this._doc) {
            this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
        }
        return this._doc;
    }
    get win() {
        if (!this._win) {
            this._win = this.doc.defaultView || this.doc.parentWindow || window;
        }
        return this._win;
    }
    ngOnInit() {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    }
    ngOnDestroy() {
        this._destroyed$.next(true);
    }
    updateCaretPosition() {
        const cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    }
    updateCaretDueMutation() {
        const cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        let textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout(() => {
            this._caretEvent$.next(cEvent);
        });
    }
};
EmojiPickerCaretDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Output('emojiPickerCaretEmitter'),
    __metadata("design:type", Object)
], EmojiPickerCaretDirective.prototype, "caretEmitter", void 0);
EmojiPickerCaretDirective = __decorate([
    Directive({
        selector: '[emojiPickerCaretEmitter]',
        host: {
            '(keyup)': 'updateCaretPosition()',
            '(mouseup)': 'updateCaretPosition()',
            '(selectstart)': 'updateCaretPosition()',
            '(focus)': 'updateCaretPosition()',
            '(DOMSubtreeModified)': 'updateCaretDueMutation($event)'
        }
    }),
    __metadata("design:paramtypes", [ElementRef])
], EmojiPickerCaretDirective);
export { EmojiPickerCaretDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWNhcmV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lbW9qaS1waWNrZXItY2FyZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWWpELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBMkJwQyxZQUNVLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBM0JVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUV6RSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFjLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBRXJDLG9CQUFlLEdBQWUsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUF3Qm5FLElBQUksQ0FBQyxZQUFZO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDekUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQzthQUNGLFNBQVMsQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FDSDtJQUNILENBQUM7SUE1QkQsSUFBSSxHQUFHO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO1NBQ2pHO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFBO1NBQ3BFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFnQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQ3ZILE1BQU0sSUFBSSxLQUFLLENBQUMsNEZBQTRGLENBQUMsQ0FBQztTQUMvRztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekYsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3ZGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1FBRXJFOzs7O1dBSUc7UUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQTs7WUEzQ2dCLFVBQVU7O0FBM0JVO0lBQWxDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQzs7K0RBQStDO0FBRHRFLHlCQUF5QjtJQVZyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLElBQUksRUFBRTtZQUNKLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxlQUFlLEVBQUUsdUJBQXVCO1lBQ3hDLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsc0JBQXNCLEVBQUUsZ0NBQWdDO1NBQ3pEO0tBQ0YsQ0FBQztxQ0E2QmUsVUFBVTtHQTVCZCx5QkFBeUIsQ0F1RXJDO1NBdkVZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuXG5cbmltcG9ydCB7IENhcmV0RXZlbnQgfSBmcm9tICcuLi9taXNjL2NhcmV0LWV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Vtb2ppUGlja2VyQ2FyZXRFbWl0dGVyXScsXG4gIGhvc3Q6IHtcbiAgICAnKGtleXVwKSc6ICd1cGRhdGVDYXJldFBvc2l0aW9uKCknLFxuICAgICcobW91c2V1cCknOiAndXBkYXRlQ2FyZXRQb3NpdGlvbigpJyxcbiAgICAnKHNlbGVjdHN0YXJ0KSc6ICd1cGRhdGVDYXJldFBvc2l0aW9uKCknLFxuICAgICcoZm9jdXMpJzogJ3VwZGF0ZUNhcmV0UG9zaXRpb24oKScsXG4gICAgJyhET01TdWJ0cmVlTW9kaWZpZWQpJzogJ3VwZGF0ZUNhcmV0RHVlTXV0YXRpb24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlckNhcmV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCdlbW9qaVBpY2tlckNhcmV0RW1pdHRlcicpIGNhcmV0RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FyZXRFdmVudD4oKTtcblxuICBwcml2YXRlIF9jYXJldEV2ZW50JCA9IG5ldyBTdWJqZWN0PENhcmV0RXZlbnQ+KCk7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgX2xhc3RDYXJldEV2ZW50OiBDYXJldEV2ZW50ID0gQ2FyZXRFdmVudC5nZW5lcmF0ZU51bGxFdmVudCgpO1xuXG4gIHByaXZhdGUgX3dpbjtcbiAgcHJpdmF0ZSBfZG9jO1xuXG4gIGdldCBkb2MoKSB7XG4gICAgaWYgKCF0aGlzLl9kb2MpIHtcbiAgICAgIHRoaXMuX2RvYyA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCB8fCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kb2M7XG4gIH1cblxuICBnZXQgd2luKCkge1xuICAgIGlmICghdGhpcy5fd2luKSB7XG4gICAgICB0aGlzLl93aW4gPSB0aGlzLmRvYy5kZWZhdWx0VmlldyB8fCB0aGlzLmRvYy5wYXJlbnRXaW5kb3cgfHwgd2luZG93XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3dpblxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fY2FyZXRFdmVudCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKGV2ZW50MSwgZXZlbnQyKSA9PiB7XG4gICAgICAgIHJldHVybiBDYXJldEV2ZW50LmNvbXBhcmUoZXZlbnQxLCBldmVudDIpO1xuICAgICAgfSkpXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogQ2FyZXRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmNhcmV0RW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5fbGFzdENhcmV0RXZlbnQgPSBldmVudC5jbG9uZSgpXG4gICAgICB9KVxuICAgIDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpICYmIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJyhlbW9qaVBpY2tlclBvc2l0aW9uRW1pdHRlcikgc2hvdWxkIG9ubHkgd29yayBvbiBjb250ZW50ZWRpdGFibGUgZW5hYmxlZCBvciBpbnB1dCBlbGVtZW50cycpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZUNhcmV0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgY0V2ZW50ID0gQ2FyZXRFdmVudC5nZW5lcmF0ZUNhcmV0RXZlbnQodGhpcy53aW4sIHRoaXMuZG9jLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9jYXJldEV2ZW50JC5uZXh0KGNFdmVudCk7XG4gIH1cblxuICB1cGRhdGVDYXJldER1ZU11dGF0aW9uKCkge1xuICAgIGNvbnN0IGNFdmVudCA9IENhcmV0RXZlbnQuZ2VuZXJhdGVDYXJldEV2ZW50KHRoaXMud2luLCB0aGlzLmRvYywgdGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgbGV0IHRleHRNb3ZlbWVudCA9IGNFdmVudC50ZXh0Q29udGVudC5sZW5ndGggLSB0aGlzLl9sYXN0Q2FyZXRFdmVudC50ZXh0Q29udGVudC5sZW5ndGg7XG4gICAgY0V2ZW50LmNhcmV0T2Zmc2V0ID0gdGhpcy5fbGFzdENhcmV0RXZlbnQuY2FyZXRPZmZzZXQgKyB0ZXh0TW92ZW1lbnQ7XG5cbiAgICAvKiogY2hhbmdlIGRldGVjdGlvbiBhZnRlciBET01TdWJ0cmVlTW9kaWZpZWQgZXZlbnQgaXMgd2VpcmRcbiAgICAgKiBDaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCksIENoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpLCBBcHBsaWNhdGlvblJlZi50aWNrKCksIE5nWm9uZS5ydW4oKVxuICAgICAqIGFsbCBvZiB0aG9zZSBtZXRob2RzIGRpZCBub3Qgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKiBBcyBhIHRlbXBvcmFyeSBoYWNrIEkgYW0gZW1pdHRpbmcgYW4gZXZlbnQgYWZ0ZXIgYSBzaG9ydCB0aW1lb3V0LCB3aGljaCBpcyBmaW5lIGR1ZSB0byB0aGUgX2NhcmV0RXZlbnQkIHNtYXJ0IHN0cmVhbVxuICAgICAqL1xuXG4gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgIHRoaXMuX2NhcmV0RXZlbnQkLm5leHQoY0V2ZW50KTtcbiAgICAgfSk7XG4gIH1cbn1cbiJdfQ==