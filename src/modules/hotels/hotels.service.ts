import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class HotelsService {
  constructor(private prisma: PrismaService) {}

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
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }
    return hotel;
  }
}
