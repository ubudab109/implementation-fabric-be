// src/middlewares/validation.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export function validationMiddleware<T>(type: new () => T, skipMissingProperties = false) {
  return (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(type, req.body);
    validate(dtoInstance as object, { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints || {})).join(', ');
          res.status(400).json({ message });
        } else {
          req.body = dtoInstance; // Optional: Replace req.body with the validated DTO instance
          next();
        }
      });
  };
}