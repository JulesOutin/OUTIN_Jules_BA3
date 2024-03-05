import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceServiceService } from '../../services/ecommerce.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

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
}

