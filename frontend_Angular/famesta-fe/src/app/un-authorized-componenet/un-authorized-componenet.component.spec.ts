import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthorizedComponenetComponent } from './un-authorized-componenet.component';

describe('UnAuthorizedComponenetComponent', () => {
  let component: UnAuthorizedComponenetComponent;
  let fixture: ComponentFixture<UnAuthorizedComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnAuthorizedComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAuthorizedComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
