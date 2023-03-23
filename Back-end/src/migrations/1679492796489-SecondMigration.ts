import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1679492796489 implements MigrationInterface {
    name = 'SecondMigration1679492796489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "name" date NOT NULL`);
    }

}
