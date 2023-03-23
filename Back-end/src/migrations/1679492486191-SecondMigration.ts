import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1679492486191 implements MigrationInterface {
    name = 'SecondMigration1679492486191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" integer NOT NULL`);
    }

}
