import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  customerReviews: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('customers-reviews')
      .valueChanges()
      .subscribe(data => {
        this.customerReviews = data;
        console.log('customerReviews Data:', data);
      });
  }
}
