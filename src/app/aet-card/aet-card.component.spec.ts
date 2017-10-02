import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AetCardComponent } from './aet-card.component';

describe('AetCardComponent', () => {
  let component: AetCardComponent;
  let fixture: ComponentFixture<AetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
