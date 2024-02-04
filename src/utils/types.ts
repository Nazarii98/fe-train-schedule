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

export type SignInInput = {
  email: string;
  password: string;
};
