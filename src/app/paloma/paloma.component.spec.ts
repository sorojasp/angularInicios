import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalomaComponent } from './paloma.component';

describe('PalomaComponent', () => {
  let component: PalomaComponent;
  let fixture: ComponentFixture<PalomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
