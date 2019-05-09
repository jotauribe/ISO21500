import { MatDialog, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewProviderComponent } from '../new-provider/new-provider.component';

export interface Objective {
  id: number;
  name: string;
}

const PROVIDERS: Objective[] = [
  {
    id: 123890,
    name: 'CocaCola'
  },
  {
    id: 2189022,
    name: 'Postobon'
  },
  {
    id: 48920078,
    name: 'Pepsi'
  }
];

@Component({
  selector: 'gpt-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource(PROVIDERS);

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const ref = this.dialog.open(NewProviderComponent);
    ref.afterClosed().subscribe(result => {
      PROVIDERS.push(result);
      this.dataSource = new MatTableDataSource<Objective>(PROVIDERS);
    });
  }
}
