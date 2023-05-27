import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { PlaceDialogComponent } from '@booking/components/place-dialog/place-dialog.component';

@Component({
  selector: 'app-seats-button',
  templateUrl: './seats-button.component.html',
  styleUrls: ['./seats-button.component.scss'],
})
export class SeatsButtonComponent {
  @Input() seatFC!: FormControl<string | null>;
  selectedPlaceControl: FormControl = new FormControl();

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PlaceDialogComponent, {
      data: {
        selectedPlace: this.selectedPlaceControl.value,
      },
    });

    dialogRef.afterClosed().subscribe((result: string | null) => {
      if (result) {
        this.seatFC.setValue(result);
      }
    });
  }
}
