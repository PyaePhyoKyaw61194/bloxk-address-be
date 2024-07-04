import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { GENERAL_VALIDATOR_RESPONSE } from 'lib/common/exception/general-exception';
import { MAX_LENGTH_ADDRESS, MIN_LENGTH_ADDRESS } from 'src/constant';
import { IsAddressExists } from './is-address-exists.rule';

export class CreateAddressDto {
  @ApiProperty({ example: 'address', description: 'Please add address' })
  @IsAddressExists({
    message: GENERAL_VALIDATOR_RESPONSE.EXIST_ADDRESS.status,
  })
  @MaxLength(MAX_LENGTH_ADDRESS, {
    message: GENERAL_VALIDATOR_RESPONSE.MAX_LENGTH_ADDRESS.status,
  })
  @MinLength(MIN_LENGTH_ADDRESS, {
    message: GENERAL_VALIDATOR_RESPONSE.MIN_LENGTH_ADDRESS.status,
  })
  @IsString()
  @IsNotEmpty({ message: GENERAL_VALIDATOR_RESPONSE.EMPTY_ADDRESS.status })
  name: string;
}
