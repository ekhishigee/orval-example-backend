import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskResponseDto } from './dto/task-response.dto';
import {
  ApiDetailOkResponse,
  ApiListOkResponse,
} from 'src/shared/decorators/api-responses.decorator';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiListOkResponse(TaskResponseDto)
  async getTasks(): Promise<TaskResponseDto[]> {
    return this.tasksService.tasks();
  }

  @Get(':id')
  @ApiDetailOkResponse(TaskResponseDto)
  async getPostById(@Param('id') id: string): Promise<TaskResponseDto> {
    return this.tasksService.task({ id: Number(id) });
  }

  @Post('')
  @ApiCreatedResponse({
    type: TaskResponseDto,
  })
  async createTask(@Body() taskData: CreateTaskDto): Promise<TaskResponseDto> {
    const { title } = taskData;
    return this.tasksService.createTask({
      title,
      status: 'todo',
    });
  }

  @Put(':id')
  @ApiDetailOkResponse(TaskResponseDto)
  async updateTask(
    @Param('id') id: string,
    @Body() taskData: UpdateTaskDto,
  ): Promise<TaskResponseDto> {
    return this.tasksService.updateTask({
      where: { id: Number(id) },
      data: taskData,
    });
  }

  @Delete(':id')
  @ApiDetailOkResponse(TaskResponseDto)
  async deleteTask(@Param('id') id: string): Promise<TaskResponseDto> {
    return this.tasksService.deleteTask({ id: Number(id) });
  }
}
