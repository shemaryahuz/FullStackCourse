import { Controller, Get } from "@nestjs/common";
import { TimeService } from "./time.service";

@Controller()
export class TimeController {
    constructor(private readonly timeService: TimeService) {}

    @Get('time')
    getCurrentTime(): string {
        return this.timeService.getCurrentTime();
    }
}