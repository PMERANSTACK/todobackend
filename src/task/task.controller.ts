import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { updateTaskDTO } from 'src/dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskservice: TaskService){}

    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO){
        const resp = await this.taskservice.createOne(createTaskRequest);
        return resp;
    }

    @Get()
    public async getAll(){
        const resp = await this.taskservice.getAll();
        return resp;
    }
    
    @Get("/:id")
    public async getOne(@Param("id") taskId: number){
        const resp = await this.taskservice.getOne(taskId);
        return resp;

    }

    @Put("/:id")
    public async updateOne(@Param("id") taskId: number, @Body() updateTaskRequest: updateTaskDTO){
    const resp =await this.taskservice.updateOne(taskId, updateTaskRequest);
    return resp;
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    public async deleteOne(@Param("id") taskId: number){
     await this.taskservice.deleteOne(taskId);
    }
}
