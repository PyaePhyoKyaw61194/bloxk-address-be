import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Address,
  ADDRESS_MODEL,
  AddressModel,
} from 'src/schema/address.schema';
import { FailCreateAddressException } from 'lib/common/exception/general-exception';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(ADDRESS_MODEL) private readonly addressModel: AddressModel,
  ) {}
  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = await this.addressModel.create(createAddressDto);
    if (!address) {
      throw new FailCreateAddressException();
    }

    return address.toObject();
  }

  async findAll() {
    const addresses = await this.addressModel.find();
    return addresses.map((address) => address.toObject());
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  async findByName(name: string) {
    return await this.addressModel.findOne({ name });
  }

  /*   update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  } */
}
