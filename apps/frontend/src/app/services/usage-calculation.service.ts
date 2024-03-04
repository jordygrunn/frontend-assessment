import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsageCalculationService {
  private httpClient = inject(HttpClient);

  constructor() { }

  public calculateUsage(usage: any): Observable<any> {
    return this.httpClient.post('/assets/data.json', usage);
  }
}
