import {ApiProperty} from "@nestjs/swagger";

export class IngredientDto {
    @ApiProperty({example: '71ba6898-f2fc-4910-80a9-710c348b82c2'})
    readonly uuid?: string;

    @ApiProperty()
    readonly createdOn?: Date;

    @ApiProperty()
    readonly updatedOn?: Date;
    
    @ApiProperty({example: 'Béchamel'})
    label: string

    @ApiProperty()
    tags: string[]
}