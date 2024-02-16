import { Ip } from "@nestjs/common";
import { IsIP, IsNotEmpty, IsPositive, IsString, Length, isValidationOptions } from "class-validator";



export class CreateStationDto {
    @IsNotEmpty()
    @IsString()
    location: String;

    @IsString()
    @IsIP('4')
    ipAddress: String;

    @IsPositive()
    batteryCapacity: Number;

    @Length(0,100)
    @IsPositive()
    batteryCharge: Number;

   
}
