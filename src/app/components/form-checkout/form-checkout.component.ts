import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-checkout.component.html',
  styleUrls: ['./form-checkout.component.css']
})
export class FormCheckoutComponent {
  constructor() { }

  fg = new FormGroup({
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zip: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]),
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]),
    monthCardExpiration: new FormControl('', Validators.required),
    yearCardExpiration: new FormControl('', Validators.required),
    cardExpiration: new FormControl('', [Validators.required, this.validateCardExpiration.bind(this)]),
  });

  ngOnInit() {
    const cardNumberControl = this.fg.get('cardNumber');
    if (cardNumberControl) {
      cardNumberControl.valueChanges.subscribe((value) => {
        if (value && value.length === 16) {
          this.fg.get('cardExpiration')?.markAsTouched();
        }
      });
    }
  }

  validateCardExpiration(control: FormControl): {[key: string]: any} | null {
    const currentDate = new Date();
    const month = Number(this.fg.get('monthCardExpiration')?.value);
    const year = Number(this.fg.get('yearCardExpiration')?.value);
    const cardExpirationDate = new Date(year, month - 1);
    if (cardExpirationDate < currentDate) {
      console.log('expired');
      alert('Your card is expired');
      return { expired: true };
    }
    console.log('not expired');
    return null;
  }

  getLastName() {
    return this.fg.get('name');
  }
  getFirstName() {
    return this.fg.get('firstname');
  }
  getAddress() {
    return this.fg.get('address');
  }
  getCity() {
    return this.fg.get('city');
  }
  getZip() {
    return this.fg.get('zip');
  }
  getCardNumber() {
    return this.fg.get('cardNumber');
  }
  onSubmit() {
    console.log(this.fg.value);
  }
}
