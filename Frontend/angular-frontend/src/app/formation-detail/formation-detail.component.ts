import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../_interfaces/formation';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormationService } from '../_services/formation.service';



@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  @Input() formation?: Formation;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFormation();
  }

  getFormation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormation(id)
      .subscribe(formation => this.formation = formation);
  }

  goBack(): void {
    this.location.back();
  }

}
