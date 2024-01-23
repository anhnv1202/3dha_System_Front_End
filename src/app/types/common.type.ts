import { CarouselProps as TailwindCarouselProps } from '@material-tailwind/react';

export interface CarouselItem {
  imageSrc: string;
  title: string;
  description: string;
  leftButtonLabel: string;
  rightButtonLabel: string;
}
export interface CarouselProps extends TailwindCarouselProps {
  items: CarouselItem[];
}

export interface DropDownItem {
  name: string;
  role: number;
  [key: string]: any;
}

export interface DropDownProps {
  items: DropDownItem[];
  defaultValue: number | string;
  fieldName: string;
  displayProp: string;
  [key: string]: any;
}

export type UserProfile = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: number;
  avatar: string;
  bio: string;
};

export interface Course {
  name: string;
  description: string[];
  price: number;
  major: string;
  [key: string]: any;
}
