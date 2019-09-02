import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatCardModule, MatInputModule, MatButtonModule, MatListModule]
})
export class CustomMaterialModule {}
