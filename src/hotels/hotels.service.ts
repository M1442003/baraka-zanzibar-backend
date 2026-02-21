import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelsService {
  constructor(private prisma: PrismaService) {}

  async create(createHotelDto: CreateHotelDto) {
    return this.prisma.hotel.create({
      data: createHotelDto,
    });
  }

  async findAll() {
    return this.prisma.hotel.findMany({
      where: { available: true },
      orderBy: { rating: 'desc' },
    });
  }

  async findByLocation(location: string) {
    return this.prisma.hotel.findMany({
      where: {
        location: {
          contains: location,
          mode: 'insensitive',
        },
        available: true,
      },
    });
  }

  async findOne(id: string) {
    const hotel = await this.prisma.hotel.findUnique({
      where: { id },
    });
    
    if (!hotel) {
      throw new NotFoundException(`Hotel #${id} not found`);
    }
    return hotel;
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    try {
      return await this.prisma.hotel.update({
        where: { id },
        data: updateHotelDto,
      });
    } catch (error) {
      throw new NotFoundException(`Hotel #${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.hotel.delete({
        where: { id },
      });
      return { message: 'Hotel deleted successfully' };
    } catch (error) {
      throw new NotFoundException(`Hotel #${id} not found`);
    }
  }
}
