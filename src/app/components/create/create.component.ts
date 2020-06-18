import { Component, OnInit } from '@angular/core';
import { AppState } from '@store/app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '@store/actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name = '';
  url = '';

  constructor(private store: Store<AppState>) { }

  addTutorial() {
    this.store.dispatch(new TutorialActions.AddTutorial({name: this.name, url: this.url}) )
    this.name = '';
    this.url = '';
  }

  ngOnInit() {
  }

}
