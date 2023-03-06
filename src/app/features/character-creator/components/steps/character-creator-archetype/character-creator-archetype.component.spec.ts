import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorArchetypeComponent } from './character-creator-archetype.component';

describe('CharacterCreatorArchetypeComponent', () => {
  let component: CharacterCreatorArchetypeComponent;
  let fixture: ComponentFixture<CharacterCreatorArchetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCreatorArchetypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorArchetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
