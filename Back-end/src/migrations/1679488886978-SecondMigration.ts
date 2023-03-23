import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1679488886978 implements MigrationInterface {
    name = 'SecondMigration1679488886978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" date NOT NULL, "email" TIME NOT NULL, "telephone" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "PK_af0a71ac1879b584f255c49c99a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "registrationDate"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "is_admin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD CONSTRAINT "FK_8a39cbe00bd59e0ad89144a7eea" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP CONSTRAINT "FK_8a39cbe00bd59e0ad89144a7eea"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "is_admin"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "registrationDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`DROP TABLE "contacts_user"`);
    }

}
