import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule {

}
