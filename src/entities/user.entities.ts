import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  readonly createdAt: number;

  constructor() {
    this.id = randomUUID();
    this.createdAt = Date.now();
  }
}
