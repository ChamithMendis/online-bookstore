import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBooks } from './featured-books';

describe('FeaturedBooks', () => {
  let component: FeaturedBooks;
  let fixture: ComponentFixture<FeaturedBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
