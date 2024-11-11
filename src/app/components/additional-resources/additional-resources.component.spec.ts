import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalResourcesComponent } from './additional-resources.component';

describe('AdditionalResourcesComponent', () => {
  let component: AdditionalResourcesComponent;
  let fixture: ComponentFixture<AdditionalResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalResourcesComponent]
    });
    fixture = TestBed.createComponent(AdditionalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
