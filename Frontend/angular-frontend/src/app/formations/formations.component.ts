import { Component, OnInit } from '@angular/core';

import { Formation } from '../_interfaces/formation';
import { FormationService } from '../_services/formation.service';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations: Formation[] = [];
 
  constructor( private formationService: FormationService ) { }

  selectedFormation?: Formation;

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
     this.formationService.getFormations()
    .subscribe(formations => this.formations = formations);
  }
  getData(){}
}
