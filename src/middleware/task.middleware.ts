import * as Joi from 'joi';

export const taskMiddleware = Joi.object({
  name: Joi.string().min(2).required(),
  description: Joi.string(),
}).options({
  abortEarly: false,
});