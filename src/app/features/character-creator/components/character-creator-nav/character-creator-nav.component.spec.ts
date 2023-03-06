import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorNavComponent } from './character-creator-nav.component';

describe('CharacterCreatorNavComponent', () => {
  let component: CharacterCreatorNavComponent;
  let fixture: ComponentFixture<CharacterCreatorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCreatorNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
