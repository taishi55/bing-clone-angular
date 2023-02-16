import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptInputFieldComponent } from './prompt-input-field.component';

describe('PromptInputFieldComponent', () => {
  let component: PromptInputFieldComponent;
  let fixture: ComponentFixture<PromptInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptInputFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
