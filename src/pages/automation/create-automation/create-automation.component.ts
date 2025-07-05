import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Constant } from '../../../shared/constants/constant';

@Component({
  selector: 'app-create-automation',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-automation.component.html',
  styleUrl: './create-automation.component.scss',
})
export class CreateAutomationComponent implements OnInit {
  form!: FormGroup;
  Constant = Constant;

  @Output() onClose = new EventEmitter<any>();

  constructor(
    private translateService: TranslateService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.maxLength(Constant.validations.name.maxLength),
        ],
      ],
      description: [
        '',
        [Validators.maxLength(Constant.validations.description.maxLength)],
      ],
      journeyType: ['flow', Validators.required],
      Duration: [0, [Validators.pattern(/^\d*$/)]],
      tags: [[]],
      certificateId: [null],
    });
  }

  onSubmit() {}
}
