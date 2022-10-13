import { Injectable } from '@angular/core';
import { FORMATIONS } from '../_datas/list-formations';
import { Formation} from '../_interfaces/formation';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormationService {



  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }


  getFormation( id: number): Observable<Formation> {
    const formation = FORMATIONS.find(h => h.id === id)!;
    this.messageService.add('FormationService: fetched formation');
    return of(formation);
  }

  getFormations(): Observable<Formation[]> {
    const formations = of(FORMATIONS);
    this.messageService.add('FormationService: fetched formations');
    return formations;
  }
}
