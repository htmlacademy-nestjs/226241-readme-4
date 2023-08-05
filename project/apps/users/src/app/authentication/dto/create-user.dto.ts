import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  public name: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;

  @ApiProperty({
    description: 'User created date',
    example: '1981-03-12',
  })
  public createAt: string;
}
