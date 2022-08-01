import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type TaskDocument = Task & Document;


@Schema()
export class Task {

    @Prop({required:true})
    name: string;

    @Prop({ default: 'No tiene'})
    description: string;

    @Prop({ default: Date.now})
    date_added: string;

    @Prop({ default: true})
    status: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task)