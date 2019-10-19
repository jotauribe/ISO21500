import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { startWith } from 'rxjs/operators';
import {
  UpdateProviders,
  LoadProviders,
  UploadProviderContract
} from '~/app/core/store/providers/providers.actions';

@Component({
  selector: 'gpt-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'providers',
        title: 'Lista de Proveedores',
        dataPath: 'providers',
        isList: true,
        schema: {
          title: 'name',
          prefix: 'nitOrCc',
          secondaryInfo: [
            { title: 'Tipo de Servicio', info: 'serviceType' },
            { title: 'Teléfono', info: 'phone' },
            { title: 'Email', info: 'email' },
            { title: 'Dirección', info: 'address' },
            {
              title: 'Contrato',
              info: 'contract',
              renderAsURL: true,
              url: function(provider) {
                return `http://localhost:5001/api/v1/files/${provider._id}`;
              }
            }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'nitOrCc', value: '', placeholder: 'NIT o CC' },
          {
            name: 'serviceType',
            value: '',
            placeholder: 'Tipo de Servicio'
          },
          {
            name: 'phone',
            value: '',
            placeholder: 'Teléfono'
          },
          {
            name: 'email',
            value: '',
            placeholder: 'Email'
          },
          {
            name: 'address',
            value: '',
            placeholder: 'Dirección'
          },
          {
            name: 'contract',
            value: '',
            placeholder: 'Contrato',
            type: 'file'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadProviders(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.providers.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.providers.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();
    data.providers.forEach(provider => {
      if (provider.contract && provider.contract.notLoaded) {
        this.store.dispatch(
          new UploadProviderContract({
            projectId,
            entityId: provider._id,
            fileToUpload: provider.contract.file,
            fileName: provider.contract.name
          })
        );
        provider.contract = provider.contract.name;
      }
    });
    this.store.dispatch(new UpdateProviders({ providers: data, projectId }));
  }
}
