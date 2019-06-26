import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormDialogsService } from '~/app/shared/services/form-dialogs.service';
import { Store } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { SaveMilestone } from '~/app/core/store/constitution/constitution.actions';

@Component({
  selector: 'gpt-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent implements OnInit {
  @Input()
  milestones = [];

  @Output()
  onEdit = new EventEmitter();

  constructor(
    private forms: FormDialogsService,
    private store: Store<CoreState>
  ) {}

  ngOnInit() {}

  edit(milestone, index) {
    this.forms
      .openMilestonesForm()
      .afterClosed()
      .subscribe(result => {
        const editedMilestone = { ...milestone, ...result };
        this.onEdit.emit({ milestone: editedMilestone, index });
        this.milestones.splice(index, 1, { ...editedMilestone, ...result });
      });
  }
}
