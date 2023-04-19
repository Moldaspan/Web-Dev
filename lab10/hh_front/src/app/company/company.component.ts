import {Component, OnInit} from '@angular/core';
import {Company} from "../cmodels";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies: Company[]=[];


  constructor(private companySer: CompanyService) {}

  ngOnInit(): void {
    this.companySer.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }
}
