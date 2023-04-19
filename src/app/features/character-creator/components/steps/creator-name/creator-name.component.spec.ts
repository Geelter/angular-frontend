import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorNameComponent } from './creator-name.component';

describe('CharacterCreatorNameComponent', () => {
  let component: CreatorNameComponent;
  let fixture: ComponentFixture<CreatorNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
