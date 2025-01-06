import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule],
  providers: [AppService, PrismaService],
})
export class AppModule {}
