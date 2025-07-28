import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  
    getHello(): string {
        return 'Hello World!';
    }

    getHelloWithName(first: string, last: string): string {
        return `Hello ${first + " " + last}!`;
    }

}