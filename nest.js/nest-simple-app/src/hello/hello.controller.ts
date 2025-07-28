import { Controller, Get, Query } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller()
export class HelloController {
    constructor(private readonly helloService: HelloService) {}

    @Get('hello')
    getHello(): string {
        return this.helloService.getHello();
    }

    @Get('hello/user')
    getHelloWithName(@Query('first') first: string, @Query('last') last: string): string {
        return this.helloService.getHelloWithName(first, last);
    }
}