import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { FeaturedBooks } from './featured-books/featured-books';
import { Categories } from './categories/categories';
import { Newsletter } from './newsletter/newsletter';

@Component({
  selector: 'app-front-page',
  imports: [Header, Footer, Hero, FeaturedBooks, Categories, Newsletter],
  templateUrl: './front-page.html',
  styleUrl: './front-page.scss',
})
export class FrontPage {}
