import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFinanceComponent } from './graph-finance.component';

describe('GraphFinanceComponent', () => {
  let component: GraphFinanceComponent;
  let fixture: ComponentFixture<GraphFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphFinanceComponent]
    });
    fixture = TestBed.createComponent(GraphFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
