import {ApiProperty} from "@nestjs/swagger";

export class StepDto {
    @ApiProperty({ example: 1 })
    order: number;

    @ApiProperty({ example: 'Préchauffer le four' })
    label: string
}