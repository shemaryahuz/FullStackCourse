import { Module } from "@nestjs/common";
import { TimeController } from "./time.controller";
import { TimeService } from "./time.service";

@Module({
    imports: [],
    controllers: [TimeController],
    providers: [TimeService]
})
export class TimeModule {}