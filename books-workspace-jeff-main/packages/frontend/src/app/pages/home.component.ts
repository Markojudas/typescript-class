import { Component } from '@angular/core';
import { BookEntryComponent } from './book-entry.component';
import { BookListComponent } from './book-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookEntryComponent, BookListComponent],
  template: `
    <app-book-entry />
    <app-book-list />
  `,
  styles: ``,
})
export class HomeComponent {}
