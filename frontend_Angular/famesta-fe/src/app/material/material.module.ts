import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog'


const MaterialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
]


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
