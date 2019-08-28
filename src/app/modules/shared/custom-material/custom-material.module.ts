import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatCardModule, MatInputModule, MatButtonModule]
})
export class CustomMaterialModule {}
