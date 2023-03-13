import { validate, Joi } from 'express-validation';

export default validate({
  params: Joi.object({
    name: Joi.string().required(),
    picture: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
  }),
});