import { MigrationInterface, QueryRunner } from 'typeorm';

export class dev1674491839066 implements MigrationInterface {
  name = 'dev1674491839066';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "imageUrl" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "imageUrl"`);
  }
}
