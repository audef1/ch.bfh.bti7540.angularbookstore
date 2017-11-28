import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book, BookBinding} from '../book/book.module';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  public book: Book;
  public bookBinding = BookBinding;

  @Output()
  public back = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}