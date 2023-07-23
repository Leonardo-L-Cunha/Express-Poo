import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

class DataValidator {
  schema;
  constructor(schema: ZodTypeAny) {
    this.schema = schema;
  }

  validate(req: Request, res: Response, next: NextFunction): void {
    const validated = this.schema.parse(req.body);

    req.body = validated;

    return next();
  }
}

export default DataValidator;
