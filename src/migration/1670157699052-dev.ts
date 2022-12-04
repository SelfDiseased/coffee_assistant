import {MigrationInterface, QueryRunner} from "typeorm";

export class dev1670157699052 implements MigrationInterface {
    name = 'dev1670157699052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "taste" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_19ee551a90d8693a283fcf41ea7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "recipe" character varying NOT NULL, "strength" integer NOT NULL, "kilocalories" integer NOT NULL, "volume" numeric(4,3) NOT NULL, CONSTRAINT "UQ_0d92154f2ba671dd0d50709bb7f" UNIQUE ("name"), CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coffees_ingredients" ("coffeeId" integer NOT NULL, "ingredientId" integer NOT NULL, CONSTRAINT "PK_7767c5564dd94779d10a53d88d1" PRIMARY KEY ("coffeeId", "ingredientId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_288fd1e45f7fd973c4a5f2f387" ON "coffees_ingredients" ("coffeeId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2c293f87fb1ad495cd044acb6e" ON "coffees_ingredients" ("ingredientId") `);
        await queryRunner.query(`CREATE TABLE "coffees_tastes" ("coffeeId" integer NOT NULL, "tasteId" integer NOT NULL, CONSTRAINT "PK_35375f28c95864afcdcaf842cdc" PRIMARY KEY ("coffeeId", "tasteId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_455e76367dbcdb780562bad11a" ON "coffees_tastes" ("coffeeId") `);
        await queryRunner.query(`CREATE INDEX "IDX_496cde748f51ca95cbfcefce1e" ON "coffees_tastes" ("tasteId") `);
        await queryRunner.query(`ALTER TABLE "coffees_ingredients" ADD CONSTRAINT "FK_288fd1e45f7fd973c4a5f2f387d" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "coffees_ingredients" ADD CONSTRAINT "FK_2c293f87fb1ad495cd044acb6e3" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "coffees_tastes" ADD CONSTRAINT "FK_455e76367dbcdb780562bad11ab" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "coffees_tastes" ADD CONSTRAINT "FK_496cde748f51ca95cbfcefce1e1" FOREIGN KEY ("tasteId") REFERENCES "taste"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffees_tastes" DROP CONSTRAINT "FK_496cde748f51ca95cbfcefce1e1"`);
        await queryRunner.query(`ALTER TABLE "coffees_tastes" DROP CONSTRAINT "FK_455e76367dbcdb780562bad11ab"`);
        await queryRunner.query(`ALTER TABLE "coffees_ingredients" DROP CONSTRAINT "FK_2c293f87fb1ad495cd044acb6e3"`);
        await queryRunner.query(`ALTER TABLE "coffees_ingredients" DROP CONSTRAINT "FK_288fd1e45f7fd973c4a5f2f387d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_496cde748f51ca95cbfcefce1e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_455e76367dbcdb780562bad11a"`);
        await queryRunner.query(`DROP TABLE "coffees_tastes"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c293f87fb1ad495cd044acb6e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_288fd1e45f7fd973c4a5f2f387"`);
        await queryRunner.query(`DROP TABLE "coffees_ingredients"`);
        await queryRunner.query(`DROP TABLE "coffee"`);
        await queryRunner.query(`DROP TABLE "taste"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
    }

}
