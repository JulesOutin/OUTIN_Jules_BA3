import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { EcommerceServiceService } from '../../services/ecommerce.service';

@Component({
  selector: 'app-form-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor(private ecommerceService: EcommerceServiceService) { }

  add = new FormGroup({
    number: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  addArticle() {
    console.log(this.add.value);
  }
  items: any[] = [];

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
