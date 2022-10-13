import { Component, OnInit } from '@angular/core';
import { Formation } from '../_interfaces/formation';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  formations: Formation[] = [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getFormations()
      .subscribe(formations => this.formations = formations.slice(1, 7));
  }
}