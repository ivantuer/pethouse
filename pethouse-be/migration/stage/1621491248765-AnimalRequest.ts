import {MigrationInterface, QueryRunner} from "typeorm";

export class AnimalRequest1621491248765 implements MigrationInterface {
    name = 'AnimalRequest1621491248765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."animal_request_status_enum" AS ENUM('Open', 'Resolved', 'Rejected')`);
        await queryRunner.query(`CREATE TABLE "public"."animal_request" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL, "status" "public"."animal_request_status_enum" NOT NULL DEFAULT 'Open', "currentOwner" uuid NOT NULL, "futureOwner" uuid, "animal" uuid, CONSTRAINT "PK_8e33ba5c612bf975d0d5a7d2e54" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."animal_request" ADD CONSTRAINT "FK_1bcc1b8e47f9575f7fc5a4ee3e6" FOREIGN KEY ("currentOwner") REFERENCES "public"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."animal_request" ADD CONSTRAINT "FK_4ab863fa35c20c98b3c5a2f888a" FOREIGN KEY ("futureOwner") REFERENCES "public"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."animal_request" ADD CONSTRAINT "FK_58fe32e8fa4726f26c0e9c14729" FOREIGN KEY ("animal") REFERENCES "public"."animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."animal_request" DROP CONSTRAINT "FK_58fe32e8fa4726f26c0e9c14729"`);
        await queryRunner.query(`ALTER TABLE "public"."animal_request" DROP CONSTRAINT "FK_4ab863fa35c20c98b3c5a2f888a"`);
        await queryRunner.query(`ALTER TABLE "public"."animal_request" DROP CONSTRAINT "FK_1bcc1b8e47f9575f7fc5a4ee3e6"`);
        await queryRunner.query(`DROP TABLE "public"."animal_request"`);
        await queryRunner.query(`DROP TYPE "public"."animal_request_status_enum"`);
    }

}
