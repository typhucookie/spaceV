export type PageType = 'home' | 'login' | 'register' | 'about' | 'contact';

export interface Course {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  price: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
