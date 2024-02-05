import { ApiProperty } from "@nestjs/swagger";

export class CreateCostumeDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty({required:false})
    description?: string;

    @ApiProperty()
    weakness: string[];

    @ApiProperty()
    skills: string[];

    @ApiProperty()
    price: number;

    @ApiProperty()
    stock: boolean;
}
