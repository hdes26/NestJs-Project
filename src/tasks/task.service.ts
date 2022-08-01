import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';


@Injectable()
export class TaskService {

    constructor(
        @InjectModel(Task.name) private taskModel:Model<TaskDocument>
    ) { }

    getTasks(): any {
        return  this.taskModel.find({status:true});
    }
    getTask(id: string): any {
        return this.taskModel.findById(id)
    }
    createTask(task:Task): any {
        const newTask = new this.taskModel(task)
        return newTask.save()
    }
    updateTask(id: string, data: any): any {
        return this.taskModel.findByIdAndUpdate(id, data)
    }
    deleteTask(id: string): any {
        return this.taskModel.findByIdAndUpdate(id, {
            status:false
        })
    }
}