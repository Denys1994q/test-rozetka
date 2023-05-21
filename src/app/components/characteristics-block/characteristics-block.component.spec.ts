import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsBlockComponent } from './characteristics-block.component';

describe('CharacteristicsBlockComponent', () => {
  let component: CharacteristicsBlockComponent;
  let fixture: ComponentFixture<CharacteristicsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicsBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacteristicsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
