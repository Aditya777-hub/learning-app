import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno6Component } from './techno6.component';

describe('Techno6Component', () => {
  let component: Techno6Component;
  let fixture: ComponentFixture<Techno6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
