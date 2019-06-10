import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { filter, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-demo-text',
  templateUrl: './demo-text.component.html',
  styleUrls: ['./demo-text.component.scss']
})
export class DemoTextComponent implements OnInit, OnDestroy {
  public formField: AbstractControl;
  public message = 'Empty message';
  public modeSwitcher = true;
  private componentActive = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createField();
    this.getValueFiled();
  }

  public setMessage(): void {
    this.message = this.formField.value;
  }

  public handlerSwitch() {
    this.modeSwitcher = !this.modeSwitcher;
  }

  private getValueFiled(): void {
    this.formField.valueChanges
      .pipe(
        filter(() => !this.modeSwitcher),
        takeWhile(() => this.componentActive)
      )
      .subscribe((res: string) => {
        this.message = res;
      });
  }

  private createField(): void {
    this.formField = this.fb.control(null);
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}
