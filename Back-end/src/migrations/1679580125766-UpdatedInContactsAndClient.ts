import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedInContactsAndClient1679580125766 implements MigrationInterface {
    name = 'UpdatedInContactsAndClient1679580125766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "is_admin" TO "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "isAdmin" TO "is_admin"`);
    }

}
