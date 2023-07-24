import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvaComponent } from './dva.component';

describe('DvaComponent', () => {
  let component: DvaComponent;
  let fixture: ComponentFixture<DvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DvaComponent]
    });
    fixture = TestBed.createComponent(DvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
