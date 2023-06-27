import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBrowserComponent } from './profile-browser.component';

describe('ProfileBrowserComponent', () => {
  let component: ProfileBrowserComponent;
  let fixture: ComponentFixture<ProfileBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileBrowserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
