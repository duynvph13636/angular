import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAvartaComponent } from './table-avarta.component';

describe('TableAvartaComponent', () => {
  let component: TableAvartaComponent;
  let fixture: ComponentFixture<TableAvartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAvartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAvartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
