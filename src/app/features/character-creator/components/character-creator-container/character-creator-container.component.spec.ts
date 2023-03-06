import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorContainerComponent } from './character-creator-container.component';

describe('CharacterCreatorContainerComponent', () => {
  let component: CharacterCreatorContainerComponent;
  let fixture: ComponentFixture<CharacterCreatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreatorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
