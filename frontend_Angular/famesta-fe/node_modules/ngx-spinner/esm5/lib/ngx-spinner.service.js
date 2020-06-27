import { __assign, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
var NgxSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    function NgxSpinnerService() {
        /**
         * Spinner observable
         *
         * @memberof NgxSpinnerService
         */
        this.spinnerObservable = new ReplaySubject(1);
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    NgxSpinnerService.prototype.getSpinner = function (name) {
        return this.spinnerObservable.asObservable().pipe(filter(function (x) { return x && x.name === name; }));
    };
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    NgxSpinnerService.prototype.show = function (name, spinner) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        var showPromise = new Promise(function (resolve, _reject) {
            if (spinner && Object.keys(spinner).length) {
                spinner['name'] = name;
                _this.spinnerObservable.next(new NgxSpinner(__assign(__assign({}, spinner), { show: true })));
                resolve(true);
            }
            else {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: true }));
                resolve(true);
            }
        });
        return showPromise;
    };
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    NgxSpinnerService.prototype.hide = function (name, debounce) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        if (debounce === void 0) { debounce = 0; }
        var hidePromise = new Promise(function (resolve, _reject) {
            setTimeout(function () {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: false }));
                resolve(true);
            }, debounce);
        });
        return hidePromise;
    };
    NgxSpinnerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
    NgxSpinnerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NgxSpinnerService);
    return NgxSpinnerService;
}());
export { NgxSpinnerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQVcsTUFBTSxvQkFBb0IsQ0FBQzs7QUFLMUU7SUFPRTs7O09BR0c7SUFDSDtRQVZBOzs7O1dBSUc7UUFDSyxzQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FBYSxDQUFDLENBQUMsQ0FBQztJQUs3QyxDQUFDO0lBQ2pCOzs7T0FHRztJQUNILHNDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFhLElBQUssT0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsZ0NBQUksR0FBSixVQUFLLElBQThCLEVBQUUsT0FBaUI7UUFBdEQsaUJBWUM7UUFaSSxxQkFBQSxFQUFBLHNCQUE4QjtRQUNqQyxJQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxPQUFPO1lBQy9DLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSx1QkFBTSxPQUFPLEtBQUUsSUFBSSxFQUFFLElBQUksSUFBRyxDQUFDLENBQUM7Z0JBQ3hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNEOzs7O01BSUU7SUFDRixnQ0FBSSxHQUFKLFVBQUssSUFBOEIsRUFBRSxRQUFvQjtRQUF6RCxpQkFRQztRQVJJLHFCQUFBLEVBQUEsc0JBQThCO1FBQUUseUJBQUEsRUFBQSxZQUFvQjtRQUN2RCxJQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxPQUFPO1lBQy9DLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7SUFsRFUsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csaUJBQWlCLENBbUQ3Qjs0QkEzREQ7Q0EyREMsQUFuREQsSUFtREM7U0FuRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmd4U3Bpbm5lciwgUFJJTUFSWV9TUElOTkVSLCBTcGlubmVyIH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lclNlcnZpY2Uge1xuICAvKipcbiAgICogU3Bpbm5lciBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzcGlubmVyT2JzZXJ2YWJsZSA9IG5ldyBSZXBsYXlTdWJqZWN0PE5neFNwaW5uZXI+KDEpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyU2VydmljZS5cbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICAvKipcbiAgKiBHZXQgc3Vic2NyaXB0aW9uIG9mIGRlc2lyZWQgc3Bpbm5lclxuICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAqKi9cbiAgZ2V0U3Bpbm5lcihuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5neFNwaW5uZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcigoeDogTmd4U3Bpbm5lcikgPT4geCAmJiB4Lm5hbWUgPT09IG5hbWUpKTtcbiAgfVxuICAvKipcbiAgICogVG8gc2hvdyBzcGlubmVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgc2hvdyhuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIsIHNwaW5uZXI/OiBTcGlubmVyKSB7XG4gICAgY29uc3Qgc2hvd1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIgJiYgT2JqZWN0LmtleXMoc3Bpbm5lcikubGVuZ3RoKSB7XG4gICAgICAgIHNwaW5uZXJbJ25hbWUnXSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IC4uLnNwaW5uZXIsIHNob3c6IHRydWUgfSkpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogdHJ1ZSB9KSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNob3dQcm9taXNlO1xuICB9XG4gIC8qKlxuICAqIFRvIGhpZGUgc3Bpbm5lclxuICAqXG4gICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICovXG4gIGhpZGUobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSLCBkZWJvdW5jZTogbnVtYmVyID0gMCkge1xuICAgIGNvbnN0IGhpZGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQobmV3IE5neFNwaW5uZXIoeyBuYW1lLCBzaG93OiBmYWxzZSB9KSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9LCBkZWJvdW5jZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpZGVQcm9taXNlO1xuICB9XG59XG4iXX0=