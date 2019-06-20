import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormDialogsService } from '~/app/shared/services/form-dialogs.service';

@Component({
  selector: 'gpt-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss']
})
export class PhasesComponent implements OnInit {
  @Input()
  phases = [];

  @Output()
  onEdit = new EventEmitter();

  constructor(private forms: FormDialogsService) {}

  ngOnInit() {}

  edit(phase, index) {
    this.forms
      .openPhasesForm()
      .afterClosed()
      .subscribe(result => {
        const editedPhase = { ...phase, ...result };
        this.onEdit.emit({ phase: editedPhase, index });
        this.phases.splice(index, 1, { ...editedPhase, ...result });
      });
  }
}
