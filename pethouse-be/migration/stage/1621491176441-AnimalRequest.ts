import {MigrationInterface, QueryRunner} from "typeorm";

export class AnimalRequest1621491176441 implements MigrationInterface {
    name = 'AnimalRequest1621491176441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."animalRequest_status_enum" AS ENUM('Open', 'Resolved', 'Rejected')`);
        await queryRunner.query(`CREATE TABLE "public"."animalRequest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL, "status" "public"."animalRequest_status_enum" NOT NULL DEFAULT 'Open', "currentOwner" uuid NOT NULL, "futureOwner" uuid, "animal" uuid, CONSTRAINT "PK_e8731fb3dd9347f2dc77c076295" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."animalRequest" ADD CONSTRAINT "FK_3aba64b58651a613839ad790666" FOREIGN KEY ("currentOwner") REFERENCES "public"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."animalRequest" ADD CONSTRAINT "FK_8c23617e4434cf926b1ce6c7015" FOREIGN KEY ("futureOwner") REFERENCES "public"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."animalRequest" ADD CONSTRAINT "FK_68290fe134d79617ca58a37c3a1" FOREIGN KEY ("animal") REFERENCES "public"."animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."animalRequest" DROP CONSTRAINT "FK_68290fe134d79617ca58a37c3a1"`);
        await queryRunner.query(`ALTER TABLE "public"."animalRequest" DROP CONSTRAINT "FK_8c23617e4434cf926b1ce6c7015"`);
        await queryRunner.query(`ALTER TABLE "public"."animalRequest" DROP CONSTRAINT "FK_3aba64b58651a613839ad790666"`);
        await queryRunner.query(`DROP TABLE "public"."animalRequest"`);
        await queryRunner.query(`DROP TYPE "public"."animalRequest_status_enum"`);
    }

}
