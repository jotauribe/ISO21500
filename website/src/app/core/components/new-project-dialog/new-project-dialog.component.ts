import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.scss']
})
export class NewProjectDialogComponent implements OnInit {
  static panelClass = 'new-project-dialog-container';

  constructor(private dialog: MatDialog) {}

  static open(dialog: MatDialog) {
    return dialog.open(NewProjectDialogComponent, {
      panelClass: 'new-project-dialog-container'
    });
  }

  ngOnInit() {}
}
