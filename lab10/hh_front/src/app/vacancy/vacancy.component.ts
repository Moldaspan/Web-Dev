import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../vmodels";
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "../vacancy.service";
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] | undefined;
  company_id!: string;

  constructor(private route: ActivatedRoute,
              private vacancySer: VacancyService) {}

  ngOnInit(): void {
    this.company_id = this.route.snapshot.params['id'];
    this.vacancySer.getCompanyVacancies(this.company_id).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
