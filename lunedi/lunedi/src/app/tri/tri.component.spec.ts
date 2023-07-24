import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriComponent } from './tri.component';

describe('TriComponent', () => {
  let component: TriComponent;
  let fixture: ComponentFixture<TriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriComponent]
    });
    fixture = TestBed.createComponent(TriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
