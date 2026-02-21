import { IsString, IsNumber, IsArray, IsBoolean, IsOptional, Min, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTourDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  duration: string;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price: number;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  maxGroup: number;

  @IsString()
  location: string;

  @IsArray()
  @IsUrl({}, { each: true })
  images: string[];

  @IsArray()
  @IsString({ each: true })
  inclusions: string[];

  @IsArray()
  @IsString({ each: true })
  exclusions: string[];

  @IsOptional()
  schedule?: any;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  available?: boolean;
}
