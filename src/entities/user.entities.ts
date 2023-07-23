import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  readonly createdAt: Date;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
