import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno1Component } from './Techno1Component';

describe('Techno1Component', () => {
  let component: Techno1Component;
  let fixture: ComponentFixture<Techno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
