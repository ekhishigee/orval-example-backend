import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async tasks() {
    return this.prisma.task.findMany();
  }

  async task(where: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.findUnique({
      where,
    });
  }

  async createTask(data: Prisma.TaskCreateInput) {
    return this.prisma.task.create({ data });
  }

  async updateTask(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.task.update({
      where,
      data,
    });
  }

  async deleteTask(where: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.delete({ where });
  }
}
