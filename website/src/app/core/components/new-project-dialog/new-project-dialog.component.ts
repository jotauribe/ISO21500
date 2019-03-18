import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '@core/store';
import { NewProjectActions } from '@store/new-project';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.scss']
})
export class NewProjectDialogComponent implements OnInit {
  static panelClass = 'new-project-dialog-container';

  form: FormGroup;

  constructor(
    private dialog: MatDialog,
    private store: Store<CoreState>,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      title: [null]
    });
  }

  static open(dialog: MatDialog) {
    return dialog.open(NewProjectDialogComponent, {
      panelClass: 'new-project-dialog-container'
    });
  }

  ngOnInit() {}

  submit($event) {
    $event.preventDefault();

    this.store.dispatch(new NewProjectActions.CreateProject(this.form.value));
  }
}
