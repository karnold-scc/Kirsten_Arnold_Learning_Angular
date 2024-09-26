import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListitemComponent } from './book-listitem.component';

describe('BookListitemComponent', () => {
  let component: BookListitemComponent;
  let fixture: ComponentFixture<BookListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
