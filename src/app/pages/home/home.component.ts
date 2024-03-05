import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceServiceService } from '../../services/ecommerce.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FormAddComponent } from '../../components/form-add/form-add.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormAddComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] = [];
  showDetailsClicked: any;

  constructor(private ecommerceService: EcommerceServiceService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.ecommerceService.getAllArticle().subscribe((data: any) => {
      this.items = data;
      console.log(this.items[0]);
    });
  }

  showDetails() {
    this.showDetailsClicked = true;
  }
  removeDetails() {
    this.showDetailsClicked = false;
  }

  showDetailsClick(item: any) {
    this.showDetailsClicked = item;
  }
}

