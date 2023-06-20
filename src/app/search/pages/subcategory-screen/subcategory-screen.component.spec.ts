import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryScreenComponent } from './subcategory-screen.component';

describe('SubcategoryScreenComponent', () => {
  let component: SubcategoryScreenComponent;
  let fixture: ComponentFixture<SubcategoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
