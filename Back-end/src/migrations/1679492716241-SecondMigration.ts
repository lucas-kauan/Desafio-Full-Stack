import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1679492716241 implements MigrationInterface {
    name = 'SecondMigration1679492716241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "telephone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "telephone" integer NOT NULL`);
    }

}
