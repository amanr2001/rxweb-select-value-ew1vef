import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RxSelectComponent } from '@rxweb/angular/select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('rxselect') rxSelect: RxSelectComponent;
  formGroup: FormGroup;

  keyProps: any = ['companyName', 'companyId'];

  swapped: boolean = false;

  bindable: boolean = true;

  companies: any[] = [
    { companyId: '1', companyName: 'ABC Corp' },
    { companyId: '2', companyName: 'XYZ Corp' }
  ];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      companyId: ["ab"]
    });
  }
}
