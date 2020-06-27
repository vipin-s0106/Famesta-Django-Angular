import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { CaretEvent } from '../misc/caret-event';
var EmojiPickerCaretDirective = /** @class */ (function () {
    function EmojiPickerCaretDirective(_el) {
        var _this = this;
        this._el = _el;
        this.caretEmitter = new EventEmitter();
        this._caretEvent$ = new Subject();
        this._destroyed$ = new Subject();
        this._lastCaretEvent = CaretEvent.generateNullEvent();
        this._caretEvent$
            .pipe(takeUntil(this._destroyed$), distinctUntilChanged(function (event1, event2) {
            return CaretEvent.compare(event1, event2);
        }))
            .subscribe(function (event) {
            _this.caretEmitter.emit(event);
            _this._lastCaretEvent = event.clone();
        });
    }
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "doc", {
        get: function () {
            if (!this._doc) {
                this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
            }
            return this._doc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "win", {
        get: function () {
            if (!this._win) {
                this._win = this.doc.defaultView || this.doc.parentWindow || window;
            }
            return this._win;
        },
        enumerable: true,
        configurable: true
    });
    EmojiPickerCaretDirective.prototype.ngOnInit = function () {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    };
    EmojiPickerCaretDirective.prototype.ngOnDestroy = function () {
        this._destroyed$.next(true);
    };
    EmojiPickerCaretDirective.prototype.updateCaretPosition = function () {
        var cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    };
    EmojiPickerCaretDirective.prototype.updateCaretDueMutation = function () {
        var _this = this;
        var cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        var textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout(function () {
            _this._caretEvent$.next(cEvent);
        });
    };
    EmojiPickerCaretDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return EmojiPickerCaretDirective;
}());
export { EmojiPickerCaretDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWNhcmV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lbW9qaS1waWNrZXItY2FyZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWWpEO0lBMkJFLG1DQUNVLEdBQWU7UUFEekIsaUJBWUM7UUFYUyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBM0JVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUV6RSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFjLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBRXJDLG9CQUFlLEdBQWUsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUF3Qm5FLElBQUksQ0FBQyxZQUFZO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsVUFBQyxNQUFNLEVBQUUsTUFBTTtZQUNyRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO2FBQ0YsU0FBUyxDQUFDLFVBQUMsS0FBaUI7WUFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQ0g7SUFDSCxDQUFDO0lBNUJELHNCQUFJLDBDQUFHO2FBQVA7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO2FBQ2pHO1lBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQUc7YUFBUDtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFBO2FBQ3BFO1lBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2xCLENBQUM7OztPQUFBO0lBZ0JELDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUN2SCxNQUFNLElBQUksS0FBSyxDQUFDLDRGQUE0RixDQUFDLENBQUM7U0FDL0c7SUFDSCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx1REFBbUIsR0FBbkI7UUFDRSxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDBEQUFzQixHQUF0QjtRQUFBLGlCQWNDO1FBYkMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pGLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN2RixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUVyRTs7OztXQUlHO1FBRUYsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOztnQkExQ2MsVUFBVTs7SUEzQlU7UUFBbEMsTUFBTSxDQUFDLHlCQUF5QixDQUFDOzttRUFBK0M7SUFEdEUseUJBQXlCO1FBVnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUI7Z0JBQ3hDLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLHNCQUFzQixFQUFFLGdDQUFnQzthQUN6RDtTQUNGLENBQUM7eUNBNkJlLFVBQVU7T0E1QmQseUJBQXlCLENBdUVyQztJQUFELGdDQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0F2RVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5cblxuaW1wb3J0IHsgQ2FyZXRFdmVudCB9IGZyb20gJy4uL21pc2MvY2FyZXQtZXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZW1vamlQaWNrZXJDYXJldEVtaXR0ZXJdJyxcbiAgaG9zdDoge1xuICAgICcoa2V5dXApJzogJ3VwZGF0ZUNhcmV0UG9zaXRpb24oKScsXG4gICAgJyhtb3VzZXVwKSc6ICd1cGRhdGVDYXJldFBvc2l0aW9uKCknLFxuICAgICcoc2VsZWN0c3RhcnQpJzogJ3VwZGF0ZUNhcmV0UG9zaXRpb24oKScsXG4gICAgJyhmb2N1cyknOiAndXBkYXRlQ2FyZXRQb3NpdGlvbigpJyxcbiAgICAnKERPTVN1YnRyZWVNb2RpZmllZCknOiAndXBkYXRlQ2FyZXREdWVNdXRhdGlvbigkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEVtb2ppUGlja2VyQ2FyZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoJ2Vtb2ppUGlja2VyQ2FyZXRFbWl0dGVyJykgY2FyZXRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYXJldEV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2NhcmV0RXZlbnQkID0gbmV3IFN1YmplY3Q8Q2FyZXRFdmVudD4oKTtcbiAgcHJpdmF0ZSBfZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBfbGFzdENhcmV0RXZlbnQ6IENhcmV0RXZlbnQgPSBDYXJldEV2ZW50LmdlbmVyYXRlTnVsbEV2ZW50KCk7XG5cbiAgcHJpdmF0ZSBfd2luO1xuICBwcml2YXRlIF9kb2M7XG5cbiAgZ2V0IGRvYygpIHtcbiAgICBpZiAoIXRoaXMuX2RvYykge1xuICAgICAgdGhpcy5fZG9jID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IHx8IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2RvYztcbiAgfVxuXG4gIGdldCB3aW4oKSB7XG4gICAgaWYgKCF0aGlzLl93aW4pIHtcbiAgICAgIHRoaXMuX3dpbiA9IHRoaXMuZG9jLmRlZmF1bHRWaWV3IHx8IHRoaXMuZG9jLnBhcmVudFdpbmRvdyB8fCB3aW5kb3dcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fd2luXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9jYXJldEV2ZW50JFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoZXZlbnQxLCBldmVudDIpID0+IHtcbiAgICAgICAgcmV0dXJuIENhcmV0RXZlbnQuY29tcGFyZShldmVudDEsIGV2ZW50Mik7XG4gICAgICB9KSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBDYXJldEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2FyZXRFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLl9sYXN0Q2FyZXRFdmVudCA9IGV2ZW50LmNsb25lKClcbiAgICAgIH0pXG4gICAgO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgJiYgdGhpcy5fZWwubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignKGVtb2ppUGlja2VyUG9zaXRpb25FbWl0dGVyKSBzaG91bGQgb25seSB3b3JrIG9uIGNvbnRlbnRlZGl0YWJsZSBlbmFibGVkIG9yIGlucHV0IGVsZW1lbnRzJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICB9XG5cbiAgdXBkYXRlQ2FyZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBjRXZlbnQgPSBDYXJldEV2ZW50LmdlbmVyYXRlQ2FyZXRFdmVudCh0aGlzLndpbiwgdGhpcy5kb2MsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX2NhcmV0RXZlbnQkLm5leHQoY0V2ZW50KTtcbiAgfVxuXG4gIHVwZGF0ZUNhcmV0RHVlTXV0YXRpb24oKSB7XG4gICAgY29uc3QgY0V2ZW50ID0gQ2FyZXRFdmVudC5nZW5lcmF0ZUNhcmV0RXZlbnQodGhpcy53aW4sIHRoaXMuZG9jLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgICBsZXQgdGV4dE1vdmVtZW50ID0gY0V2ZW50LnRleHRDb250ZW50Lmxlbmd0aCAtIHRoaXMuX2xhc3RDYXJldEV2ZW50LnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICBjRXZlbnQuY2FyZXRPZmZzZXQgPSB0aGlzLl9sYXN0Q2FyZXRFdmVudC5jYXJldE9mZnNldCArIHRleHRNb3ZlbWVudDtcblxuICAgIC8qKiBjaGFuZ2UgZGV0ZWN0aW9uIGFmdGVyIERPTVN1YnRyZWVNb2RpZmllZCBldmVudCBpcyB3ZWlyZFxuICAgICAqIENoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKSwgQ2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCksIEFwcGxpY2F0aW9uUmVmLnRpY2soKSwgTmdab25lLnJ1bigpXG4gICAgICogYWxsIG9mIHRob3NlIG1ldGhvZHMgZGlkIG5vdCB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqIEFzIGEgdGVtcG9yYXJ5IGhhY2sgSSBhbSBlbWl0dGluZyBhbiBldmVudCBhZnRlciBhIHNob3J0IHRpbWVvdXQsIHdoaWNoIGlzIGZpbmUgZHVlIHRvIHRoZSBfY2FyZXRFdmVudCQgc21hcnQgc3RyZWFtXG4gICAgICovXG5cbiAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgdGhpcy5fY2FyZXRFdmVudCQubmV4dChjRXZlbnQpO1xuICAgICB9KTtcbiAgfVxufVxuIl19