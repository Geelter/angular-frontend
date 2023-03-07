import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorNameComponent } from './character-creator-name.component';

describe('CharacterCreatorNameComponent', () => {
  let component: CharacterCreatorNameComponent;
  let fixture: ComponentFixture<CharacterCreatorNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCreatorNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
