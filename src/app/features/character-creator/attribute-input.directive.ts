import { Directive, Input, OnInit } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { AttributesConfig } from '@creator/models/attributes-config.model';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'p-inputNumber[attributeInput]',
})
export class AttributeInputDirective implements OnInit {
  constructor(private input: InputNumber) {}

  @Input() attributesConfig: AttributesConfig;

  ngOnInit() {
    this.input.showButtons = true;
    this.input.decrementButtonClass = 'p-button-outlined';
    this.input.incrementButtonClass = 'p-button-outlined';
    this.input.step = 1;
    this.input.min = this.attributesConfig.min_attribute;
    this.input.max = this.attributesConfig.max_attribute;
  }
}
