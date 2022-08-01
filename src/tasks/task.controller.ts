import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { TaskService } from './task.service';
import { ValidationPipe } from './validation.pipe';
import { taskMiddleware } from '../middleware/task.middleware';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) { }
    @Get()
    getTasks() {
        return this.taskService.getTasks();
    }
    @Get(':id')
    getTask(@Param('id') id:string) {
        return this.taskService.getTask(id);
    }
    @Post()
    @UsePipes(new ValidationPipe(taskMiddleware))
    createTask(@Body() Task:any) {
        return this.taskService.createTask(Task);
    }
    @Put(':id')
    updateTask(@Param('id') uid:string, @Body() updateTask:any ) {
        return this.taskService.updateTask(uid, updateTask);
    }
    @Delete(':id')
    deleteTask(@Param('id') id:string) {
        return this.taskService.deleteTask(id);
    }
}