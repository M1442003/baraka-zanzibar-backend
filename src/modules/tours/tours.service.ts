import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class ToursService {
  constructor(private prisma: PrismaService) {}

  async create(createTourDto: CreateTourDto) {
    return this.prisma.tour.create({
      data: createTourDto,
    });
  }

  async findAll() {
    return this.prisma.tour.findMany({
      where: { available: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const tour = await this.prisma.tour.findUnique({
      where: { id },
    });
    
    if (!tour) {
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }
    return tour;
  }

  async update(id: string, updateTourDto: UpdateTourDto) {
    try {
      return await this.prisma.tour.update({
        where: { id },
        data: updateTourDto,
      });
    } catch (error) {
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.tour.delete({
        where: { id },
      });
      return { message: 'Tour deleted successfully' };
    } catch (error) {
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }
  }
}
