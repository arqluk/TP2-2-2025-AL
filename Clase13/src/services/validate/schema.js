import Joi from "joi"

export const validateProd = (prod) => {
    const prodSchema = Joi.object({
        name: Joi.string().min(1).max(50),
        price: Joi.number().min(1).max(2500000),
        color: Joi.string().min(1)
    })

    const { error } = prodSchema.validate(prod)
    const result = error ? true : false
    return result
}
