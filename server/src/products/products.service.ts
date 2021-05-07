import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepo:Repository<Product>,
    ){}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAllNews() {
    const data = await this.productRepo.createQueryBuilder('product')
    .where('product.news = :news', {news:true})
    .select(["id", "name", "image"])
    return data 
  }

  async findAllProducts(){
    const data = await this.productRepo.createQueryBuilder('product')
    .where('product.news = :news', {news:false})
    .where('product.services = :services', {services:false})
    .select(["id", "name", "image"])
    return data
  }

  async findAllServices(){
    const data = await this.productRepo.createQueryBuilder('product')
    .where('product.services = :services', {services:true})
    .select(["id", "name", "image"])
    return data
  }

  async findOne(id: number) {
    const data = await this.productRepo.findOne(id)
    return data
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
