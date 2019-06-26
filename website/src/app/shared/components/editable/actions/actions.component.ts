import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'gpt-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Output()
  onEdit = new EventEmitter();

  @Output()
  onSave = new EventEmitter();

  @Output()
  onCancel = new EventEmitter();

  @Input()
  showEditionActions: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleEdit() {
    this.onEdit.emit(true);
  }

  handleSave() {
    this.onSave.emit(true);
  }

  handleCancel() {
    this.onCancel.emit(true);
  }
}
