import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationScreenComponent } from './automation-screen.component';

describe('AutomationScreenComponent', () => {
  let component: AutomationScreenComponent;
  let fixture: ComponentFixture<AutomationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
