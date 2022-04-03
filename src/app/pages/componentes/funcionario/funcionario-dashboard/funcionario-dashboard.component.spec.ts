import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDashboardComponent } from './funcionario-dashboard.component';

describe('FuncionarioDashboardComponent', () => {
  let component: FuncionarioDashboardComponent;
  let fixture: ComponentFixture<FuncionarioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
