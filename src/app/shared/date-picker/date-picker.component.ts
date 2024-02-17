import { Component, EventEmitter, Output } from '@angular/core';
import {
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MatRangeDateSelectionModel,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  selectedDateRange: DateRange<Date> | undefined;
  @Output() calDate = new EventEmitter<Date[]>();
  constructor(
    private readonly selectionModel: MatRangeDateSelectionModel<Date>,
    private readonly selectionStrategy: DefaultMatCalendarRangeStrategy<Date>
  ) {}

  // Event handler for when the date range selection changes.
  rangeChanged(selectedDate: Date) {
    const selection = this.selectionModel.selection,
      newSelection = this.selectionStrategy.selectionFinished(
        selectedDate,
        selection
      );

    this.selectionModel.updateSelection(newSelection, this);
    this.selectedDateRange = new DateRange<Date>(
      newSelection.start,
      newSelection.end
    );

    var date: Date[] = new Array<Date>();
    if (this.selectionModel.selection.start != null) {
      date[0] = this.selectionModel.selection.start;
    }
    if (this.selectionModel.selection.end != null) {
      date[1] = this.selectionModel.selection.end;
    }
    this.calDate.emit(date);
  }
}
