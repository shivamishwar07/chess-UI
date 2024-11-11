import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentsGalleryComponent } from './accomplishments-gallery.component';

describe('AccomplishmentsGalleryComponent', () => {
  let component: AccomplishmentsGalleryComponent;
  let fixture: ComponentFixture<AccomplishmentsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomplishmentsGalleryComponent]
    });
    fixture = TestBed.createComponent(AccomplishmentsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
