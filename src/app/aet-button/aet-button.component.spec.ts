import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AetButtonComponent } from './aet-button.component';

describe('AetButtonComponent', () => {
  let component: AetButtonComponent;
  let fixture: ComponentFixture<AetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AetButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
