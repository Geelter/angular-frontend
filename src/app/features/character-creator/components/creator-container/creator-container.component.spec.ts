import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorContainerComponent } from './creator-container.component';

describe('CharacterCreatorContainerComponent', () => {
  let component: CreatorContainerComponent;
  let fixture: ComponentFixture<CreatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
