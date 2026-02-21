export class CreateTourDto {
  title: string;
  description: string;
  duration: string;
  price: number;
  maxGroup: number;
  location: string;
  images: string[];
  inclusions: string[];
  exclusions: string[];
  schedule?: any;
  available?: boolean;
}
