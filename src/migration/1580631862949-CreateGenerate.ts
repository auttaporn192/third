import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGenerate1580631862949 implements MigrationInterface {
    name = 'CreateGenerate1580631862949'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "addressId" integer, CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "address" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lat" varchar NOT NULL, "lng" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "comment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "body" varchar NOT NULL, "articleId" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "desc" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "article" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(110) NOT NULL, "body" text NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "article_categories_category" ("articleId" integer NOT NULL, "categoryId" integer NOT NULL, PRIMARY KEY ("articleId", "categoryId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4ba35bcb36b2715f61faa696c7" ON "article_categories_category" ("articleId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_5d9199768aa2bd9f91d175dc6d" ON "article_categories_category" ("categoryId") `, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "addressId" integer, CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "createdAt", "updatedAt", "addressId") SELECT "id", "name", "email", "password", "createdAt", "updatedAt", "addressId" FROM "user"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_comment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "body" varchar NOT NULL, "articleId" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_c20404221e5c125a581a0d90c0e" FOREIGN KEY ("articleId") REFERENCES "article" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_comment"("id", "body", "articleId", "createdAt", "updatedAt") SELECT "id", "body", "articleId", "createdAt", "updatedAt" FROM "comment"`, undefined);
        await queryRunner.query(`DROP TABLE "comment"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_comment" RENAME TO "comment"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4ba35bcb36b2715f61faa696c7"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_5d9199768aa2bd9f91d175dc6d"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_article_categories_category" ("articleId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "FK_4ba35bcb36b2715f61faa696c7e" FOREIGN KEY ("articleId") REFERENCES "article" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5d9199768aa2bd9f91d175dc6d1" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("articleId", "categoryId"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_article_categories_category"("articleId", "categoryId") SELECT "articleId", "categoryId" FROM "article_categories_category"`, undefined);
        await queryRunner.query(`DROP TABLE "article_categories_category"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_article_categories_category" RENAME TO "article_categories_category"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4ba35bcb36b2715f61faa696c7" ON "article_categories_category" ("articleId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_5d9199768aa2bd9f91d175dc6d" ON "article_categories_category" ("categoryId") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_5d9199768aa2bd9f91d175dc6d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4ba35bcb36b2715f61faa696c7"`, undefined);
        await queryRunner.query(`ALTER TABLE "article_categories_category" RENAME TO "temporary_article_categories_category"`, undefined);
        await queryRunner.query(`CREATE TABLE "article_categories_category" ("articleId" integer NOT NULL, "categoryId" integer NOT NULL, PRIMARY KEY ("articleId", "categoryId"))`, undefined);
        await queryRunner.query(`INSERT INTO "article_categories_category"("articleId", "categoryId") SELECT "articleId", "categoryId" FROM "temporary_article_categories_category"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_article_categories_category"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_5d9199768aa2bd9f91d175dc6d" ON "article_categories_category" ("categoryId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4ba35bcb36b2715f61faa696c7" ON "article_categories_category" ("articleId") `, undefined);
        await queryRunner.query(`ALTER TABLE "comment" RENAME TO "temporary_comment"`, undefined);
        await queryRunner.query(`CREATE TABLE "comment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "body" varchar NOT NULL, "articleId" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`INSERT INTO "comment"("id", "body", "articleId", "createdAt", "updatedAt") SELECT "id", "body", "articleId", "createdAt", "updatedAt" FROM "temporary_comment"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_comment"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "addressId" integer, CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"))`, undefined);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "createdAt", "updatedAt", "addressId") SELECT "id", "name", "email", "password", "createdAt", "updatedAt", "addressId" FROM "temporary_user"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_user"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_5d9199768aa2bd9f91d175dc6d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4ba35bcb36b2715f61faa696c7"`, undefined);
        await queryRunner.query(`DROP TABLE "article_categories_category"`, undefined);
        await queryRunner.query(`DROP TABLE "article"`, undefined);
        await queryRunner.query(`DROP TABLE "category"`, undefined);
        await queryRunner.query(`DROP TABLE "comment"`, undefined);
        await queryRunner.query(`DROP TABLE "address"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
