import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorDetailViewComponent } from './creator-detail-view.component';

describe('DetailViewComponent', () => {
  let component: CreatorDetailViewComponent;
  let fixture: ComponentFixture<CreatorDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorDetailViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
