import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorArchetypeComponent } from './creator-archetype.component';

describe('CharacterCreatorArchetypeComponent', () => {
  let component: CreatorArchetypeComponent;
  let fixture: ComponentFixture<CreatorArchetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorArchetypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorArchetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
