import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorDetailViewComponent } from './character-creator-detail-view.component';

describe('DetailViewComponent', () => {
  let component: CharacterCreatorDetailViewComponent;
  let fixture: ComponentFixture<CharacterCreatorDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCreatorDetailViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
