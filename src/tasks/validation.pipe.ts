import {
    PipeTransform,
    BadRequestException,
    ArgumentMetadata
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

export class ValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }
    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value);
        if (error) {
            throw new BadRequestException(error)
        }
        return value;
    }
}