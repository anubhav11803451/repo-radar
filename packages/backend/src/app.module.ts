import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
            sortSchema: true,
        }),
        UserModule,
    ],
    providers: [PrismaService],
})
export class AppModule {}
