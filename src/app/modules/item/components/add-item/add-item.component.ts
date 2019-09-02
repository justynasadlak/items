import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;

  @Output()
  addItem: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onAddItem(): void {
    this.addItem.emit(this.addItemForm.value);
    this.addItemForm.reset();
  }

  private initForm(): void {
    this.addItemForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }
}
