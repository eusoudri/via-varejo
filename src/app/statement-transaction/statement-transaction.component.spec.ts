import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementTransactionComponent } from './statement-transaction.component';

describe('StatementTransactionComponent', () => {
  let component: StatementTransactionComponent;
  let fixture: ComponentFixture<StatementTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
