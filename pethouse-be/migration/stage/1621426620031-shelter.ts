import {MigrationInterface, QueryRunner} from "typeorm";

export class shelter1621426620031 implements MigrationInterface {
    name = 'shelter1621426620031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."shelter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL, "email" character varying NOT NULL DEFAULT '', "title" character varying NOT NULL DEFAULT '', "address" character varying NOT NULL DEFAULT '', "phone" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_a0dfc7fb4da22953240cfdc82e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."user" ("email" character varying NOT NULL, "first_name" character varying NOT NULL DEFAULT '', "last_name" character varying NOT NULL DEFAULT '', "phone" character varying NOT NULL DEFAULT '', "job_position" character varying NOT NULL DEFAULT '', "role" "public"."user_role_enum" NOT NULL DEFAULT 'User', "id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "PK_03b91d2b8321aa7ba32257dc321" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b7a5e4a3b174e954b2dabf2ef9" ON "public"."user" ("email") `);
        await queryRunner.query(`CREATE TABLE "public"."animal" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL, "name" character varying NOT NULL DEFAULT '', "age" double precision NOT NULL DEFAULT '0', "status" "public"."animal_status_enum" NOT NULL DEFAULT 'InShelter', "gender" "public"."animal_gender_enum" NOT NULL DEFAULT 'Male', "is_sterilized" boolean NOT NULL DEFAULT false, "weight" double precision NOT NULL DEFAULT '0', "height" double precision NOT NULL DEFAULT '0', "description" character varying NOT NULL DEFAULT '', "image_url" character varying NOT NULL DEFAULT '', "color" "public"."animal_color_enum", "type" "public"."animal_type_enum" NOT NULL DEFAULT 'Other', "creator" uuid NOT NULL, "shelter" uuid, CONSTRAINT "PK_78a1cc948be142d7caab2bc5aa6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."animal" ADD CONSTRAINT "FK_df82a5cfa6fbe2d98cd480493dc" FOREIGN KEY ("creator") REFERENCES "public"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."animal" ADD CONSTRAINT "FK_b016a0b115c58bfcb4eae772210" FOREIGN KEY ("shelter") REFERENCES "public"."shelter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."animal" DROP CONSTRAINT "FK_b016a0b115c58bfcb4eae772210"`);
        await queryRunner.query(`ALTER TABLE "public"."animal" DROP CONSTRAINT "FK_df82a5cfa6fbe2d98cd480493dc"`);
        await queryRunner.query(`DROP TABLE "public"."animal"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7a5e4a3b174e954b2dabf2ef9"`);
        await queryRunner.query(`DROP TABLE "public"."user"`);
        await queryRunner.query(`DROP TABLE "public"."shelter"`);
    }

}
