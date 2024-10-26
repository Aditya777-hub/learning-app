import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno5Component } from './techno5.component';

describe('Techno5Component', () => {
  let component: Techno5Component;
  let fixture: ComponentFixture<Techno5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
