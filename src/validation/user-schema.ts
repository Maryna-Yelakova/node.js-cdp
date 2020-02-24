import  Joi  from 'joi';

export const userSchema = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().integer().min(4).max(130).required(),
    IsDeleted: Joi.boolean()
});
