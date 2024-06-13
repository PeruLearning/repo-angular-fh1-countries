import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;

  public ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
    })
  }

  public ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  @Input({
    required: true
  })
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  public onInput(term: string): void {
    this.debouncer.next(term);
  }
}
