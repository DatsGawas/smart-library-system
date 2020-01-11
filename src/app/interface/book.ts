/**
 * Created by dattaram on 7/1/19.
 */

export class Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  description: string;
  pages: number;
  website: string;
  constructor() {
    this.id = null;
    this.title = "Understanding ECMAScript 6";
    this.subtitle = "The Definitive Guide for JavaScript Developers";
    this.author = "Nicholas C. Zakas";
    this.published = "2016-09-03T00:00:00.000Z";
    this.publisher = "No Starch Press";
    this.description =
      "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.";
    this.pages = 352;
    this.website = "https://leanpub.com/understandinges6/read";
  }
}
