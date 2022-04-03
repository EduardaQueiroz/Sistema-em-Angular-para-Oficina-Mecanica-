import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoDashboardComponent } from './servico-dashboard.component';

describe('ServicoDashboardComponent', () => {
  let component: ServicoDashboardComponent;
  let fixture: ComponentFixture<ServicoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
