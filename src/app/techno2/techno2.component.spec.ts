import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno2Component } from './techno2.component';

describe('Techno2Component', () => {
  let component: Techno2Component;
  let fixture: ComponentFixture<Techno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
