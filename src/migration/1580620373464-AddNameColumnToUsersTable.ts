import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNameColumnToUsersTable1580620373464 implements MigrationInterface {
    name = 'AddNameColumnToUsersTable1580620373464'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`, undefined);
    }

}
