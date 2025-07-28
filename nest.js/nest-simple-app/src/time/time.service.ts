import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  
    getCurrentTime(): string {
        return `Current time: ${new Date().toLocaleString()}`;
    }

}