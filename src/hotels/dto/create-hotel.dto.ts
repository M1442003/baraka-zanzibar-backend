export class CreateHotelDto {
  name: string;
  description: string;
  location: string;
  address: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  rating?: number;
  available?: boolean;
}
