import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-event-blocker]',
})
export class EventBlockerDirective {
  @HostListener('window:dragenter', ['$event'])
  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  @HostListener('dragleave', ['$event'])
  public handleEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
