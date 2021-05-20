import {MigrationInterface, QueryRunner} from "typeorm";

export class shelter1621439412291 implements MigrationInterface {
    name = 'shelter1621439412291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "shelter" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_5261d48b8b81a2ec2dcbf291eaf" FOREIGN KEY ("shelter") REFERENCES "public"."shelter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_5261d48b8b81a2ec2dcbf291eaf"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "shelter"`);
    }

}
