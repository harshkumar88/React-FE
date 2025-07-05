import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWaitComponent } from './select-wait.component';

describe('SelectWaitComponent', () => {
  let component: SelectWaitComponent;
  let fixture: ComponentFixture<SelectWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectWaitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
