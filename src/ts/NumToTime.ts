export class timeconvert {
  hours: String;
  minutes: String;
  NumToTime(num: number): string {
    this.hours = String(Math.floor(num / 60));
    this.minutes = String(num % 60);

    if (this.minutes.length < 2) {
      this.minutes = '0' + this.minutes;
    }
    return this.hours + ':' + this.minutes;
  }
}
