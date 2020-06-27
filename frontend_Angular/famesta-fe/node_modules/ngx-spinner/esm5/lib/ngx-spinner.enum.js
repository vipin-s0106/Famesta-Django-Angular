export var LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
};
export var DEFAULTS = {
    BD_COLOR: 'rgba(51,51,51,0.8)',
    SPINNER_COLOR: '#fff',
    SPINNER_TYPE: 'ball-scale-multiple',
    Z_INDEX: 99999,
};
export var PRIMARY_SPINNER = 'primary';
var NgxSpinner = /** @class */ (function () {
    function NgxSpinner(init) {
        Object.assign(this, init);
    }
    return NgxSpinner;
}());
export { NgxSpinner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuZW51bS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHO0lBQ3JCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsQ0FBQztJQUNoQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLGtCQUFrQixFQUFFLENBQUM7SUFDckIsMkJBQTJCLEVBQUUsQ0FBQztJQUM5Qix3QkFBd0IsRUFBRSxDQUFDO0lBQzNCLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsV0FBVyxFQUFFLENBQUM7SUFDZCxjQUFjLEVBQUUsQ0FBQztJQUNqQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixZQUFZLEVBQUUsQ0FBQztJQUNmLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLEVBQUUsQ0FBQztJQUNoQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFlBQVksRUFBRSxDQUFDO0lBQ2YscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQixXQUFXLEVBQUUsQ0FBQztJQUNkLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixtQ0FBbUMsRUFBRSxDQUFDO0lBQ3RDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLDRCQUE0QixFQUFFLENBQUM7SUFDL0Isa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLHNCQUFzQixFQUFFLENBQUM7SUFDekIsS0FBSyxFQUFFLENBQUM7SUFDUixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUM7SUFDZixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLHNCQUFzQixFQUFFLENBQUM7SUFDekIsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQiwwQkFBMEIsRUFBRSxDQUFDO0lBQzdCLG1DQUFtQyxFQUFFLENBQUM7SUFDdEMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQix5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixlQUFlLEVBQUUsQ0FBQztJQUNsQixhQUFhLEVBQUUsQ0FBQztJQUNoQixPQUFPLEVBQUUsQ0FBQztJQUNWLG9CQUFvQixFQUFFLENBQUM7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRztJQUN0QixRQUFRLEVBQUUsb0JBQW9CO0lBQzlCLGFBQWEsRUFBRSxNQUFNO0lBQ3JCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsT0FBTyxFQUFFLEtBQUs7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQWN6QztJQWNFLG9CQUFZLElBQTBCO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9BREVSUyA9IHtcbiAgJ2JhbGwtOGJpdHMnOiAxNixcbiAgJ2JhbGwtYXRvbSc6IDQsXG4gICdiYWxsLWJlYXQnOiAzLFxuICAnYmFsbC1jaXJjdXMnOiA1LFxuICAnYmFsbC1jbGltYmluZy1kb3QnOiA0LFxuICAnYmFsbC1jbGlwLXJvdGF0ZSc6IDEsXG4gICdiYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlJzogMixcbiAgJ2JhbGwtY2xpcC1yb3RhdGUtcHVsc2UnOiAyLFxuICAnYmFsbC1lbGFzdGljLWRvdHMnOiA1LFxuICAnYmFsbC1mYWxsJzogMyxcbiAgJ2JhbGwtZnVzc2lvbic6IDQsXG4gICdiYWxsLWdyaWQtYmVhdCc6IDksXG4gICdiYWxsLWdyaWQtcHVsc2UnOiA5LFxuICAnYmFsbC1uZXd0b24tY3JhZGxlJzogNCxcbiAgJ2JhbGwtcHVsc2UnOiAzLFxuICAnYmFsbC1wdWxzZS1yaXNlJzogNSxcbiAgJ2JhbGwtcHVsc2Utc3luYyc6IDMsXG4gICdiYWxsLXJvdGF0ZSc6IDEsXG4gICdiYWxsLXJ1bm5pbmctZG90cyc6IDUsXG4gICdiYWxsLXNjYWxlJzogMSxcbiAgJ2JhbGwtc2NhbGUtbXVsdGlwbGUnOiAzLFxuICAnYmFsbC1zY2FsZS1wdWxzZSc6IDIsXG4gICdiYWxsLXNjYWxlLXJpcHBsZSc6IDEsXG4gICdiYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSc6IDMsXG4gICdiYWxsLXNwaW4nOiA4LFxuICAnYmFsbC1zcGluLWNsb2Nrd2lzZSc6IDgsXG4gICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUnOiA4LFxuICAnYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nJzogOCxcbiAgJ2JhbGwtc3Bpbi1mYWRlJzogOCxcbiAgJ2JhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nJzogOCxcbiAgJ2JhbGwtc3Bpbi1yb3RhdGUnOiAyLFxuICAnYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4nOiA4LFxuICAnYmFsbC1zcXVhcmUtc3Bpbic6IDgsXG4gICdiYWxsLXRyaWFuZ2xlLXBhdGgnOiAzLFxuICAnYmFsbC16aWctemFnJzogMixcbiAgJ2JhbGwtemlnLXphZy1kZWZsZWN0JzogMixcbiAgJ2NvZyc6IDEsXG4gICdjdWJlLXRyYW5zaXRpb24nOiAyLFxuICAnZmlyZSc6IDMsXG4gICdsaW5lLXNjYWxlJzogNSxcbiAgJ2xpbmUtc2NhbGUtcGFydHknOiA1LFxuICAnbGluZS1zY2FsZS1wdWxzZS1vdXQnOiA1LFxuICAnbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQnOiA1LFxuICAnbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlJzogOCxcbiAgJ2xpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyc6IDgsXG4gICdsaW5lLXNwaW4tZmFkZSc6IDgsXG4gICdsaW5lLXNwaW4tZmFkZS1yb3RhdGluZyc6IDgsXG4gICdwYWNtYW4nOiA2LFxuICAnc3F1YXJlLWplbGx5LWJveCc6IDIsXG4gICdzcXVhcmUtbG9hZGVyJzogMSxcbiAgJ3NxdWFyZS1zcGluJzogMSxcbiAgJ3RpbWVyJzogMSxcbiAgJ3RyaWFuZ2xlLXNrZXctc3Bpbic6IDFcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgQkRfQ09MT1I6ICdyZ2JhKDUxLDUxLDUxLDAuOCknLFxuICBTUElOTkVSX0NPTE9SOiAnI2ZmZicsXG4gIFNQSU5ORVJfVFlQRTogJ2JhbGwtc2NhbGUtbXVsdGlwbGUnLFxuICBaX0lOREVYOiA5OTk5OSxcbn07XG5cbmV4cG9ydCBjb25zdCBQUklNQVJZX1NQSU5ORVIgPSAncHJpbWFyeSc7XG5cbmV4cG9ydCB0eXBlIFNpemUgPSAnZGVmYXVsdCcgfCAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwaW5uZXIge1xuICBiZENvbG9yPzogc3RyaW5nO1xuICBzaXplPzogU2l6ZTtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGZ1bGxTY3JlZW4/OiBib29sZWFuO1xuICB6SW5kZXg/OiBudW1iZXI7XG4gIHRlbXBsYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lciB7XG4gIG5hbWU6IHN0cmluZztcbiAgYmRDb2xvcjogc3RyaW5nO1xuICBzaXplOiBTaXplO1xuICBjb2xvcjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIGRpdkNvdW50OiBudW1iZXI7XG4gIGRpdkFycmF5OiBBcnJheTxudW1iZXI+O1xuICBmdWxsU2NyZWVuOiBib29sZWFuO1xuICBzaG93OiBib29sZWFuO1xuICB6SW5kZXg6IG51bWJlcjtcbiAgdGVtcGxhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOZ3hTcGlubmVyPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XG4gIH1cbn1cbiJdfQ==