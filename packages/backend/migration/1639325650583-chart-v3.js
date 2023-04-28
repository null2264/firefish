export class chartV31639325650583 {
	name = "chartV31639325650583";

	async up(queryRunner) {
		await queryRunner.query(
			`DELETE FROM "__chart__per_user_drive" WHERE "group" IS NULL`,
		);

		await queryRunner.query(
			`DROP INDEX "public"."IDX_dd907becf76104e4b656659e6b"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_eddfed8fb40305a04c6f941050"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_f09d543e3acb16c5976bdb31fa"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_e60c358aaced5aab8900a4af31"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_337e9599f278bd7537fe30876f"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_66feba81e1795d176d06c0b1e6"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_0a905b992fecd2b5c3fb98759e"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_2082327b2699ce924fa654afc5"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_9a3ed15a30ab7e3a37702e6e08"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_60c5c6e7e538c09aa274ecd1cf"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_8111b817b9818c04d7eb8475b1"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_583a157ed0cf0ed1b5ec2a833f"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_3313d7288855ec105b5bbf6c21"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_ceab80a6729f8e2e6f5b8a1a3d"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_3b7697a96f522d0478972e6d6f"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_53a3604b939e2b479eb2cfaac8"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_dabbb38a51ab86ee3cab291326"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_a9a806d466b314f253a1a611c4"`,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__federation" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "___instance_total" bigint NOT NULL, "___instance_inc" bigint NOT NULL, "___instance_dec" bigint NOT NULL, CONSTRAINT "UQ_617a8fe225a6e701d89e02d2c74" UNIQUE ("date"), CONSTRAINT "PK_7ca721c769f31698e0e1331e8e6" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_617a8fe225a6e701d89e02d2c7" ON "__chart_day__federation" ("date") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__notes" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "___local_total" bigint NOT NULL, "___local_inc" bigint NOT NULL, "___local_dec" bigint NOT NULL, "___local_diffs_normal" bigint NOT NULL, "___local_diffs_reply" bigint NOT NULL, "___local_diffs_renote" bigint NOT NULL, "___remote_total" bigint NOT NULL, "___remote_inc" bigint NOT NULL, "___remote_dec" bigint NOT NULL, "___remote_diffs_normal" bigint NOT NULL, "___remote_diffs_reply" bigint NOT NULL, "___remote_diffs_renote" bigint NOT NULL, CONSTRAINT "UQ_1a527b423ad0858a1af5a056d43" UNIQUE ("date"), CONSTRAINT "PK_1fa4139e1f338272b758d05e090" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_1a527b423ad0858a1af5a056d4" ON "__chart_day__notes" ("date") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__users" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "___local_total" bigint NOT NULL, "___local_inc" bigint NOT NULL, "___local_dec" bigint NOT NULL, "___remote_total" bigint NOT NULL, "___remote_inc" bigint NOT NULL, "___remote_dec" bigint NOT NULL, CONSTRAINT "UQ_cad6e07c20037f31cdba8a350c3" UNIQUE ("date"), CONSTRAINT "PK_d7f7185abb9851f70c4726c54bd" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_cad6e07c20037f31cdba8a350c" ON "__chart_day__users" ("date") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__network" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "___incomingRequests" bigint NOT NULL, "___outgoingRequests" bigint NOT NULL, "___totalTime" bigint NOT NULL, "___incomingBytes" bigint NOT NULL, "___outgoingBytes" bigint NOT NULL, CONSTRAINT "UQ_8bfa548c2b31f9e07db113773ee" UNIQUE ("date"), CONSTRAINT "PK_cac499d6f471042dfed1e7e0132" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_8bfa548c2b31f9e07db113773e" ON "__chart_day__network" ("date") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__active_users" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "___local_users" character varying array NOT NULL, "___remote_users" character varying array NOT NULL, CONSTRAINT "UQ_d5954f3df5e5e3bdfc3c03f3906" UNIQUE ("date"), CONSTRAINT "PK_b1790489b14f005ae8f404f5795" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_d5954f3df5e5e3bdfc3c03f390" ON "__chart_day__active_users" ("date") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__instance" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "group" character varying(128) NOT NULL, "___requests_failed" bigint NOT NULL, "___requests_succeeded" bigint NOT NULL, "___requests_received" bigint NOT NULL, "___notes_total" bigint NOT NULL, "___notes_inc" bigint NOT NULL, "___notes_dec" bigint NOT NULL, "___notes_diffs_normal" bigint NOT NULL, "___notes_diffs_reply" bigint NOT NULL, "___notes_diffs_renote" bigint NOT NULL, "___users_total" bigint NOT NULL, "___users_inc" bigint NOT NULL, "___users_dec" bigint NOT NULL, "___following_total" bigint NOT NULL, "___following_inc" bigint NOT NULL, "___following_dec" bigint NOT NULL, "___followers_total" bigint NOT NULL, "___followers_inc" bigint NOT NULL, "___followers_dec" bigint NOT NULL, "___drive_totalFiles" bigint NOT NULL, "___drive_totalUsage" bigint NOT NULL, "___drive_incFiles" bigint NOT NULL, "___drive_incUsage" bigint NOT NULL, "___drive_decFiles" bigint NOT NULL, "___drive_decUsage" bigint NOT NULL, CONSTRAINT "UQ_fea7c0278325a1a2492f2d6acbf" UNIQUE ("date", "group"), CONSTRAINT "PK_479a8ff9d959274981087043023" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_fea7c0278325a1a2492f2d6acb" ON "__chart_day__instance" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__per_user_notes" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "group" character varying(128) NOT NULL, "___total" bigint NOT NULL, "___inc" bigint NOT NULL, "___dec" bigint NOT NULL, "___diffs_normal" bigint NOT NULL, "___diffs_reply" bigint NOT NULL, "___diffs_renote" bigint NOT NULL, CONSTRAINT "UQ_c5545d4b31cdc684034e33b81c3" UNIQUE ("date", "group"), CONSTRAINT "PK_58bab6b6d3ad9310cbc7460fd28" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_c5545d4b31cdc684034e33b81c" ON "__chart_day__per_user_notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__drive" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "___local_totalCount" bigint NOT NULL, "___local_totalSize" bigint NOT NULL, "___local_incCount" bigint NOT NULL, "___local_incSize" bigint NOT NULL, "___local_decCount" bigint NOT NULL, "___local_decSize" bigint NOT NULL, "___remote_totalCount" bigint NOT NULL, "___remote_totalSize" bigint NOT NULL, "___remote_incCount" bigint NOT NULL, "___remote_incSize" bigint NOT NULL, "___remote_decCount" bigint NOT NULL, "___remote_decSize" bigint NOT NULL, CONSTRAINT "UQ_0b60ebb3aa0065f10b0616c1171" UNIQUE ("date"), CONSTRAINT "PK_e7ec0de057c77c40fc8d8b62151" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_0b60ebb3aa0065f10b0616c117" ON "__chart_day__drive" ("date") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__per_user_reaction" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "group" character varying(128) NOT NULL, "___local_count" bigint NOT NULL, "___remote_count" bigint NOT NULL, CONSTRAINT "UQ_d54b653660d808b118e36c184c0" UNIQUE ("date", "group"), CONSTRAINT "PK_8af24e2d51ff781a354fe595eda" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_d54b653660d808b118e36c184c" ON "__chart_day__per_user_reaction" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__hashtag" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "group" character varying(128) NOT NULL, "___local_users" character varying array NOT NULL, "___remote_users" character varying array NOT NULL, CONSTRAINT "UQ_8f589cf056ff51f09d6096f6450" UNIQUE ("date", "group"), CONSTRAINT "PK_13d5a3b089344e5557f8e0980b4" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_8f589cf056ff51f09d6096f645" ON "__chart_day__hashtag" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__per_user_following" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "group" character varying(128) NOT NULL, "___local_followings_total" bigint NOT NULL, "___local_followings_inc" bigint NOT NULL, "___local_followings_dec" bigint NOT NULL, "___local_followers_total" bigint NOT NULL, "___local_followers_inc" bigint NOT NULL, "___local_followers_dec" bigint NOT NULL, "___remote_followings_total" bigint NOT NULL, "___remote_followings_inc" bigint NOT NULL, "___remote_followings_dec" bigint NOT NULL, "___remote_followers_total" bigint NOT NULL, "___remote_followers_inc" bigint NOT NULL, "___remote_followers_dec" bigint NOT NULL, CONSTRAINT "UQ_e4849a3231f38281280ea4c0eee" UNIQUE ("date", "group"), CONSTRAINT "PK_68ce6b67da57166da66fc8fb27e" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_e4849a3231f38281280ea4c0ee" ON "__chart_day__per_user_following" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE TABLE "__chart_day__per_user_drive" ("id" SERIAL NOT NULL, "date" integer NOT NULL, "group" character varying(128) NOT NULL, "___totalCount" bigint NOT NULL, "___totalSize" bigint NOT NULL, "___incCount" bigint NOT NULL, "___incSize" bigint NOT NULL, "___decCount" bigint NOT NULL, "___decSize" bigint NOT NULL, CONSTRAINT "UQ_62aa5047b5aec92524f24c701d7" UNIQUE ("date", "group"), CONSTRAINT "PK_1ae135254c137011645da7f4045" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_62aa5047b5aec92524f24c701d" ON "__chart_day__per_user_drive" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__federation" DROP COLUMN "group"`,
		);
		await queryRunner.query(`ALTER TABLE "__chart__notes" DROP COLUMN "group"`);
		await queryRunner.query(`ALTER TABLE "__chart__users" DROP COLUMN "group"`);
		await queryRunner.query(
			`ALTER TABLE "__chart__network" DROP COLUMN "group"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" DROP COLUMN "group"`,
		);
		await queryRunner.query(`ALTER TABLE "__chart__drive" DROP COLUMN "group"`);
		await queryRunner.query(
			`ALTER TABLE "__chart__federation" ADD CONSTRAINT "UQ_36cb699c49580d4e6c2e6159f97" UNIQUE ("date")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__notes" ADD CONSTRAINT "UQ_42eb716a37d381cdf566192b2be" UNIQUE ("date")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__users" ADD CONSTRAINT "UQ_845254b3eaf708ae8a6cac30265" UNIQUE ("date")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__network" ADD CONSTRAINT "UQ_a1efd3e0048a5f2793a47360dc6" UNIQUE ("date")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" ADD CONSTRAINT "UQ_0ad37b7ef50f4ddc84363d7ccca" UNIQUE ("date")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" ALTER COLUMN "___local_users" DROP DEFAULT`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" ALTER COLUMN "___remote_users" DROP DEFAULT`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_39ee857ab2f23493037c6b6631"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__instance" ALTER COLUMN "group" SET NOT NULL`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_5048e9daccbbbc6d567bb142d3"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_notes" ALTER COLUMN "group" SET NOT NULL`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__drive" ADD CONSTRAINT "UQ_13565815f618a1ff53886c5b28a" UNIQUE ("date")`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_229a41ad465f9205f1f5703291"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_reaction" ALTER COLUMN "group" SET NOT NULL`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_25a97c02003338124b2b75fdbc"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ALTER COLUMN "group" SET NOT NULL`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ALTER COLUMN "___local_users" DROP DEFAULT`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ALTER COLUMN "___remote_users" DROP DEFAULT`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_b77d4dd9562c3a899d9a286fcd"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_following" ALTER COLUMN "group" SET NOT NULL`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_30bf67687f483ace115c5ca642"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_drive" ALTER COLUMN "group" SET NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_36cb699c49580d4e6c2e6159f9" ON "__chart__federation" ("date") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_42eb716a37d381cdf566192b2b" ON "__chart__notes" ("date") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_845254b3eaf708ae8a6cac3026" ON "__chart__users" ("date") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_a1efd3e0048a5f2793a47360dc" ON "__chart__network" ("date") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_0ad37b7ef50f4ddc84363d7ccc" ON "__chart__active_users" ("date") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_39ee857ab2f23493037c6b6631" ON "__chart__instance" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_5048e9daccbbbc6d567bb142d3" ON "__chart__per_user_notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_13565815f618a1ff53886c5b28" ON "__chart__drive" ("date") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_229a41ad465f9205f1f5703291" ON "__chart__per_user_reaction" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_25a97c02003338124b2b75fdbc" ON "__chart__hashtag" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_b77d4dd9562c3a899d9a286fcd" ON "__chart__per_user_following" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_30bf67687f483ace115c5ca642" ON "__chart__per_user_drive" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__instance" ADD CONSTRAINT "UQ_39ee857ab2f23493037c6b66311" UNIQUE ("date", "group")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_notes" ADD CONSTRAINT "UQ_5048e9daccbbbc6d567bb142d34" UNIQUE ("date", "group")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_reaction" ADD CONSTRAINT "UQ_229a41ad465f9205f1f57032910" UNIQUE ("date", "group")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ADD CONSTRAINT "UQ_25a97c02003338124b2b75fdbc8" UNIQUE ("date", "group")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_following" ADD CONSTRAINT "UQ_b77d4dd9562c3a899d9a286fcd7" UNIQUE ("date", "group")`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_drive" ADD CONSTRAINT "UQ_30bf67687f483ace115c5ca6429" UNIQUE ("date", "group")`,
		);
	}

	async down(queryRunner) {
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_drive" DROP CONSTRAINT "UQ_30bf67687f483ace115c5ca6429"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_following" DROP CONSTRAINT "UQ_b77d4dd9562c3a899d9a286fcd7"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" DROP CONSTRAINT "UQ_25a97c02003338124b2b75fdbc8"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_reaction" DROP CONSTRAINT "UQ_229a41ad465f9205f1f57032910"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_notes" DROP CONSTRAINT "UQ_5048e9daccbbbc6d567bb142d34"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__instance" DROP CONSTRAINT "UQ_39ee857ab2f23493037c6b66311"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_30bf67687f483ace115c5ca642"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_b77d4dd9562c3a899d9a286fcd"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_25a97c02003338124b2b75fdbc"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_229a41ad465f9205f1f5703291"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_13565815f618a1ff53886c5b28"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_5048e9daccbbbc6d567bb142d3"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_39ee857ab2f23493037c6b6631"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_0ad37b7ef50f4ddc84363d7ccc"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_a1efd3e0048a5f2793a47360dc"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_845254b3eaf708ae8a6cac3026"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_42eb716a37d381cdf566192b2b"`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_36cb699c49580d4e6c2e6159f9"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_drive" ALTER COLUMN "group" DROP NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_30bf67687f483ace115c5ca642" ON "__chart__per_user_drive" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_following" ALTER COLUMN "group" DROP NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_b77d4dd9562c3a899d9a286fcd" ON "__chart__per_user_following" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ALTER COLUMN "___remote_users" SET DEFAULT '{}'`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ALTER COLUMN "___local_users" SET DEFAULT '{}'`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__hashtag" ALTER COLUMN "group" DROP NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_25a97c02003338124b2b75fdbc" ON "__chart__hashtag" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_reaction" ALTER COLUMN "group" DROP NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_229a41ad465f9205f1f5703291" ON "__chart__per_user_reaction" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__drive" DROP CONSTRAINT "UQ_13565815f618a1ff53886c5b28a"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__per_user_notes" ALTER COLUMN "group" DROP NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_5048e9daccbbbc6d567bb142d3" ON "__chart__per_user_notes" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__instance" ALTER COLUMN "group" DROP NOT NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_39ee857ab2f23493037c6b6631" ON "__chart__instance" ("date", "group") `,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" ALTER COLUMN "___remote_users" SET DEFAULT '{}'`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" ALTER COLUMN "___local_users" SET DEFAULT '{}'`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" DROP CONSTRAINT "UQ_0ad37b7ef50f4ddc84363d7ccca"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__network" DROP CONSTRAINT "UQ_a1efd3e0048a5f2793a47360dc6"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__users" DROP CONSTRAINT "UQ_845254b3eaf708ae8a6cac30265"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__notes" DROP CONSTRAINT "UQ_42eb716a37d381cdf566192b2be"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__federation" DROP CONSTRAINT "UQ_36cb699c49580d4e6c2e6159f97"`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__drive" ADD "group" character varying(128)`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__active_users" ADD "group" character varying(128)`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__network" ADD "group" character varying(128)`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__users" ADD "group" character varying(128)`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__notes" ADD "group" character varying(128)`,
		);
		await queryRunner.query(
			`ALTER TABLE "__chart__federation" ADD "group" character varying(128)`,
		);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_62aa5047b5aec92524f24c701d"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__per_user_drive"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_e4849a3231f38281280ea4c0ee"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__per_user_following"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_8f589cf056ff51f09d6096f645"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__hashtag"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_d54b653660d808b118e36c184c"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__per_user_reaction"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_0b60ebb3aa0065f10b0616c117"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__drive"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_c5545d4b31cdc684034e33b81c"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__per_user_notes"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_fea7c0278325a1a2492f2d6acb"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__instance"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_d5954f3df5e5e3bdfc3c03f390"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__active_users"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_8bfa548c2b31f9e07db113773e"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__network"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_cad6e07c20037f31cdba8a350c"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__users"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_1a527b423ad0858a1af5a056d4"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__notes"`);
		await queryRunner.query(
			`DROP INDEX "public"."IDX_617a8fe225a6e701d89e02d2c7"`,
		);
		await queryRunner.query(`DROP TABLE "__chart_day__federation"`);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_a9a806d466b314f253a1a611c4" ON "__chart__per_user_drive" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_dabbb38a51ab86ee3cab291326" ON "__chart__per_user_following" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_53a3604b939e2b479eb2cfaac8" ON "__chart__hashtag" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_3b7697a96f522d0478972e6d6f" ON "__chart__per_user_reaction" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_ceab80a6729f8e2e6f5b8a1a3d" ON "__chart__drive" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_3313d7288855ec105b5bbf6c21" ON "__chart__drive" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_583a157ed0cf0ed1b5ec2a833f" ON "__chart__per_user_notes" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_8111b817b9818c04d7eb8475b1" ON "__chart__instance" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_60c5c6e7e538c09aa274ecd1cf" ON "__chart__active_users" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_9a3ed15a30ab7e3a37702e6e08" ON "__chart__active_users" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_2082327b2699ce924fa654afc5" ON "__chart__network" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_0a905b992fecd2b5c3fb98759e" ON "__chart__network" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_66feba81e1795d176d06c0b1e6" ON "__chart__users" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_337e9599f278bd7537fe30876f" ON "__chart__users" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_e60c358aaced5aab8900a4af31" ON "__chart__notes" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_f09d543e3acb16c5976bdb31fa" ON "__chart__notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_eddfed8fb40305a04c6f941050" ON "__chart__federation" ("date") WHERE ("group" IS NULL)`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_dd907becf76104e4b656659e6b" ON "__chart__federation" ("date", "group") `,
		);
	}
}
