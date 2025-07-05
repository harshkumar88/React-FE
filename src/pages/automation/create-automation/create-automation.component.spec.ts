import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutomationComponent } from './create-automation.component';

describe('CreateAutomationComponent', () => {
  let component: CreateAutomationComponent;
  let fixture: ComponentFixture<CreateAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
