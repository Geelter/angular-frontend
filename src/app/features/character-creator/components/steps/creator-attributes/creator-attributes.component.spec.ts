import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorAttributesComponent } from './creator-attributes.component';

describe('CreatorAttributesComponent', () => {
  let component: CreatorAttributesComponent;
  let fixture: ComponentFixture<CreatorAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorAttributesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
