import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-accomplishments-gallery',
  templateUrl: './accomplishments-gallery.component.html',
  styleUrls: ['./accomplishments-gallery.component.scss']
})
export class AccomplishmentsGalleryComponent {
  accomplishmentData: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('accomplishment')
      .valueChanges()
      .subscribe(data => {
        this.accomplishmentData = data;
      });
  }
}
