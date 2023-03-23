import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizationInBD1679503404351 implements MigrationInterface {
    name = 'AtualizationInBD1679503404351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "isActive"`);
    }

}
