import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1679490404162 implements MigrationInterface {
    name = 'SecondMigration1679490404162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD CONSTRAINT "UQ_c25022583c40f12b1ff82f7399e" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP CONSTRAINT "UQ_c25022583c40f12b1ff82f7399e"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "email" TIME NOT NULL`);
    }

}
