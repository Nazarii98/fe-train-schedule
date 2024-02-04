export interface NavbarTab {
  title: string;
  link: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface Station {
  id: number;
  name: string;
  city: string;
  oblast: string;
  image: string;
  numberOfPlatforms: number;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput extends SignInInput {
  firstName: string;
  lastName: string;
}

export interface Pagination {
  take: number;
  skip: number;
}
