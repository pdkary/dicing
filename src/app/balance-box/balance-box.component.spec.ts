import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceBoxComponent } from './balance-box.component';

describe('BalanceBoxComponent', () => {
  let component: BalanceBoxComponent;
  let fixture: ComponentFixture<BalanceBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
