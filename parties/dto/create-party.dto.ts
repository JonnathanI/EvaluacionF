import { ApiProperty } from "@nestjs/swagger";
export class CreatePartyDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;
    

}
