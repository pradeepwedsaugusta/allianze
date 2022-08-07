import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';
import { ArticService } from './services/artic.service';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormBuilder().group({
      name: ['', Validators.required],
      items: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      consent: [false, Validators.requiredTrue]
    });
  }

}

/**  Copyright APOSIN 2021 */
