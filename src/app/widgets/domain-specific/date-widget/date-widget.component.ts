import { Component, computed, inject, LOCALE_ID } from '@angular/core';
import { BaseWidget } from '../../base-widget';

interface FormattedDate {
  raw: string;
  display: string;
}

interface ParsedIsoDate {
  year: number;
  month?: number;
  day?: number;
}

function parseIsoDate(value: string): ParsedIsoDate | undefined {
  const datePart = value.split('T')[0];
  const isNegativeYear = datePart.startsWith('-');
  const [yearPart, monthPart, dayPart] = (
    isNegativeYear ? datePart.slice(1) : datePart
  ).split('-');

  // Year must be at least 4 digits (zero-padded, ISO8601, see https://docs.nde.nl/schema-profile/#CreativeWork-dateCreated)
  if (!yearPart || yearPart.length < 4 || Number.isNaN(Number(yearPart))) {
    return undefined;
  }

  const month = monthPart !== undefined ? Number(monthPart) : undefined;
  const day = dayPart !== undefined ? Number(dayPart) : undefined;
  if (
    (month !== undefined && Number.isNaN(month)) ||
    (day !== undefined && Number.isNaN(day))
  ) {
    return undefined;
  }

  return { year: (isNegativeYear ? -1 : 1) * Number(yearPart), month, day };
}

@Component({
  selector: 'app-date-widget',
  imports: [],
  templateUrl: './date-widget.component.html',
})
export class DateWidget extends BaseWidget {
  private readonly locale = inject(LOCALE_ID);

  dates = computed<FormattedDate[]>(() => {
    return this.values().map((value) => ({
      raw: value,
      display: this.formatDate(value),
    }));
  });

  private formatDate(value: string): string {
    const parsed = parseIsoDate(value);
    if (!parsed) return value;

    const { year, month, day } = parsed;
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      timeZone: 'UTC',
    };
    if (month) options.month = 'long';
    if (day) options.day = 'numeric';
    if (year <= 0) options.era = 'short';

    const date = new Date(0);
    date.setUTCFullYear(year, (month ?? 1) - 1, day ?? 1);

    return new Intl.DateTimeFormat(this.locale, options).format(date);
  }
}
