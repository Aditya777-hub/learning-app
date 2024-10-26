import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno3Component } from './techno3.component';

describe('Techno3Component', () => {
  let component: Techno3Component;
  let fixture: ComponentFixture<Techno3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
