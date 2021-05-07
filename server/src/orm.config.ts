import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port:  Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || 'postgres',
    password:  process.env.DATABASE_PASSWORD || '1111',
    database: process.env.DATABASE_DB || 'leyka',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}