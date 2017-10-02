import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AetInputComponent } from './aet-input.component';

describe('AetInputComponent', () => {
  let component: AetInputComponent;
  let fixture: ComponentFixture<AetInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AetInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
