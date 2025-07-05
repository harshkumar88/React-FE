import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Constant } from '../../../shared/constants/constant';

@Component({
  selector: 'app-select-wait',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgSelectModule],
  templateUrl: './select-wait.component.html',
  styleUrl: './select-wait.component.scss',
})
export class SelectWaitComponent {
  form!: FormGroup;
  Constant = Constant;

  @Output() onClose = new EventEmitter<any>();
  @Output() onSuccess = new EventEmitter<any>();

  timeList = [
    { key: 'Employee Related', value: 'employee' },
    { key: 'System Triggered', value: 'system' },
    { key: 'Campaign Events', value: 'campaign' },
    { key: 'Custom Events', value: 'custom' },
  ];

  units = [
    { key: 'Employee Added to Platform', value: 'employee_added' },
    { key: 'Employee Deleted', value: 'employee_deleted' },
    { key: 'Campaign Completed', value: 'campaign_completed' },
    { key: 'Custom Event Triggered', value: 'custom_triggered' },
  ];

  constructor(
    private translateService: TranslateService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      eventCategory: [null, Validators.required],
      eventName: [null, Validators.required],
    });
  }

  loadList() {}

  onSubmit() {
    if (this.form.valid) {
      const selectedEvent = this.form.value;
      this.onSuccess.emit(selectedEvent);
    }
  }
}
