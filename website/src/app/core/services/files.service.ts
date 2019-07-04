import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  url = 'http://localhost:5001/api/v1/files';

  constructor(private http: HttpClient) {}

  upload({ projectId, entityId, fileToUpload, fileName }) {
    const formData: FormData = new FormData();
    const file = this.dataURLtoFile(fileToUpload, fileName);

    formData.append('file', file, fileName);
    formData.append('entityId', entityId);

    return this.http.post(this.url, formData);
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
