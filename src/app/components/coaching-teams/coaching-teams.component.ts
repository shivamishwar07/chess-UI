import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-coaching-teams',
  templateUrl: './coaching-teams.component.html',
  styleUrls: ['./coaching-teams.component.scss']
})
export class CoachingTeamsComponent {
  coachingTeams: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('coaching-team')
      .valueChanges()
      .subscribe(data => {
        this.coachingTeams = data;
        console.log('coachingTeams Data:', data);
      });
  }

  getDescriptionKeys(coach: any): string[] {
    return Object.keys(coach).filter(key => key.startsWith('des'));
  }

}
