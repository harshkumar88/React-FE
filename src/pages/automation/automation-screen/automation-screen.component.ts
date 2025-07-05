import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SelectEventComponent } from '../select-event/select-event.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectWaitComponent } from '../select-wait/select-wait.component';

@Component({
  selector: 'app-automation-screen',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SelectEventComponent,
    NgSelectModule,
    SelectWaitComponent,
  ],
  templateUrl: './automation-screen.component.html',
  styleUrl: './automation-screen.component.scss',
})
export class AutomationScreenComponent {
  title = 'Automation Name';
  desc = 'Description of the Automation';
  showDropdown = false;
  private offcanvasService = inject(NgbOffcanvas);
  @ViewChild('event', { static: true }) eventTemplateRef!: TemplateRef<any>;
  @ViewChild('wait', { static: true }) waitTemplateRef!: TemplateRef<any>;

  dropdownOptions = ['Template', 'Event', 'Campaign'];
  additionalDropdownOptions = [
    'Wait Block',
    'Template',
    'Event',
    'Journey',
    'Form',
  ];

  selectedTriggers: any[] = [
    {
      type: 'select',
      options: [
        { key: 'Employee Added to Platform', value: 'employee_added' },
        { key: 'Employee Deleted', value: 'employee_deleted' },
        { key: 'Campaign Completed', value: 'campaign_completed' },
        { key: 'Custom Event Triggered', value: 'custom_triggered' },
      ],
    },
    {
      type: 'wait',
      time: [
        { key: '1', value: 1 },
        { key: '2', value: 2 },
        { key: '3', value: 3 },
        { key: '4', value: 4 },
        { key: '5', value: 5 },
        { key: '6', value: 6 },
      ],
      units: [
        { key: 'Minutes', value: 'mins' },
        { key: 'Seconds', value: 'sec' },
        { key: 'Hours', value: 'hrs' },
      ],
    },
  ];
  // selectedTriggers: any[] = [];

  constructor(private translateService: TranslateService) {}

  loadList() {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-wrapper')) {
      this.showDropdown = false;
    }
  }

  selectedTrigger: any = null;

  openOffCanvas(content: TemplateRef<any>) {
    const ref = this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'rightSidePanel',
    });
  }

  handleDropdownClick(option: string, event: MouseEvent) {
    if (option === 'Event') {
      this.openOffCanvas(this.eventTemplateRef);
    } else if (option === 'Wait Block') {
      this.openOffCanvas(this.waitTemplateRef);
    } else {
    }
  }
}
