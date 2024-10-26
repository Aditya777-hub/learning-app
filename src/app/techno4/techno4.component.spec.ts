import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno4Component } from './techno4.component';

describe('Techno4Component', () => {
  let component: Techno4Component;
  let fixture: ComponentFixture<Techno4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
