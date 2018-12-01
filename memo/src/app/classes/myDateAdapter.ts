import { NativeDateAdapter } from '@angular/material';

export class MyDateAdapter extends NativeDateAdapter {

  // Override getDateNames()
  // If we don't override this... day format will be:
  // 9日 10日 11日 12日 13日 14日 15日
  // We want to show 12 instead of 12日 in month view.
  getDateNames(): string[] {
    const dateNames: string[] = [];

    for (let i = 0; i < 31; i++) {
      dateNames[i] = String(i + 1);
    }
    return dateNames;
  }
}
