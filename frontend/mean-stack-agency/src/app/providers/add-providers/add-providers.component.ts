import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { providers } from 'src/app/models/providers.data';
import { ProviderClass } from 'src/app/models/providers.class';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: [
  ]
})
export class AddProvidersComponent {

  submitted = false;
  provider = new ProviderClass();

  public providersForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    position: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    company_name: new FormControl(),
    address: new FormControl(),
    address2: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    postal_code: new FormControl(),
    description: new FormControl(),
    tagline: new FormControl(),
  });

  handleSubmit() {
    console.log(this.providersForm.value);
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() ^ 10000) + 99999;
      if (providers.findIndex(el => el.id == newId) == -1) {
        break;
      }
    }
    let p = this.providersForm.value;
    this.provider.id = newId;
    this.provider.firstname = p.firstname;
    this.provider.lastname = p.lastname;
    this.provider.position = p.position;
    this.provider.company = {
      company_name: p.company_name,
      address: p.address,
      address2: p.address2,
      city: p.city,
      state: p.state,
      postal_code: p.postal_code,
      phone: p.phone,
      email: p.email,
      description: p.description,
      tagline: p.tagline
    }
    providers.push(this.provider);
    this.submitted = true;
  }
}
