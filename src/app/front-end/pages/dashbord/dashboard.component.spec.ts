import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordComponent } from './dashboard.component';

describe('Dashbord', () => {
  let component: DashbordComponent;
  let fixture: ComponentFixture<DashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
