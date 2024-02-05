import { ApiProperty } from "@nestjs/swagger";
export class CreateAttendeeDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    dni: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty({required:false})
    address?: string;

    @ApiProperty()
    money: number;

    @ApiProperty()
    age: number;

    @ApiProperty()
    fears: string[];

    @ApiProperty()
    isNervous: boolean;


}
