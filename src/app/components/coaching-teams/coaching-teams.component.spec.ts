import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingTeamsComponent } from './coaching-teams.component';

describe('CoachingTeamsComponent', () => {
  let component: CoachingTeamsComponent;
  let fixture: ComponentFixture<CoachingTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachingTeamsComponent]
    });
    fixture = TestBed.createComponent(CoachingTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
