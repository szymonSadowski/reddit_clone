import { MigrationInterface, QueryRunner } from "typeorm";

export class FakePosts1612217334208 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
            insert into post (title, text, "creatorId", "createdAt") values ('Hyundai', 'Santa Fe', 1, '2020-06-04T23:24:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mitsubishi', 'Pajero', 1, '2020-12-23T17:55:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Jeep', 'Liberty', 1, '2020-06-28T23:32:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Chevrolet', 'Express 1500', 1, '2020-09-05T01:30:30Z');
insert into post (title, text, "creatorId", "createdAt") values ('Toyota', 'RAV4', 1, '2020-07-09T13:23:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mazda', 'Tribute', 1, '2020-03-18T19:50:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Hyundai', 'Tucson', 1, '2020-08-10T22:34:15Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mercedes-Benz', 'E-Class', 1, '2020-04-10T13:41:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Lexus', 'LX', 1, '2020-06-19T17:07:36Z');
insert into post (title, text, "creatorId", "createdAt") values ('Volkswagen', 'GTI', 1, '2020-08-26T23:42:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mitsubishi', 'Eclipse', 1, '2021-01-03T19:03:56Z');
insert into post (title, text, "creatorId", "createdAt") values ('BMW', '3 Series', 1, '2021-01-18T06:53:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Infiniti', 'G', 1, '2021-01-06T00:38:15Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mazda', 'Tribute', 1, '2020-08-24T09:48:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Ford', 'Tempo', 1, '2020-04-03T04:25:15Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mitsubishi', 'Mighty Max', 1, '2020-09-28T03:52:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Volkswagen', 'Jetta', 1, '2020-08-25T21:33:47Z');
insert into post (title, text, "creatorId", "createdAt") values ('Volkswagen', 'Tiguan', 1, '2020-07-05T14:01:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Saab', '900', 1, '2020-09-17T20:56:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('GMC', 'Savana 3500', 1, '2020-11-30T16:45:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('Rolls-Royce', 'Ghost', 1, '2020-06-19T04:25:26Z');
insert into post (title, text, "creatorId", "createdAt") values ('Audi', 'A3', 1, '2020-08-28T19:20:02Z');
insert into post (title, text, "creatorId", "createdAt") values ('Ford', 'Escort', 1, '2020-09-07T22:42:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Subaru', 'Alcyone SVX', 1, '2021-01-12T14:23:02Z');
insert into post (title, text, "creatorId", "createdAt") values ('Buick', 'Century', 1, '2020-03-23T18:26:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('BMW', '7 Series', 1, '2020-12-23T00:32:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mercury', 'Topaz', 1, '2020-06-11T00:46:06Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cadillac', 'Eldorado', 1, '2020-05-01T15:37:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('GMC', 'Yukon', 1, '2021-01-26T18:31:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('Lincoln', 'Town Car', 1, '2020-07-29T00:56:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mitsubishi', 'Eclipse', 1, '2020-07-14T00:05:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Pontiac', 'Tempest', 1, '2020-03-04T05:41:04Z');
insert into post (title, text, "creatorId", "createdAt") values ('Volkswagen', 'Jetta', 1, '2020-11-24T13:39:02Z');
insert into post (title, text, "creatorId", "createdAt") values ('GMC', 'Yukon XL 1500', 1, '2020-02-28T23:38:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Lexus', 'CT', 1, '2020-04-24T08:23:46Z');
insert into post (title, text, "creatorId", "createdAt") values ('Dodge', 'Avenger', 1, '2020-11-20T12:53:23Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mazda', 'Tribute', 1, '2021-01-09T07:59:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Dodge', 'Ram Van 3500', 1, '2020-08-09T20:19:20Z');
insert into post (title, text, "creatorId", "createdAt") values ('MINI', 'Cooper Clubman', 1, '2020-03-06T20:05:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('Saturn', 'S-Series', 1, '2020-06-07T23:13:37Z');
insert into post (title, text, "creatorId", "createdAt") values ('Chrysler', 'PT Cruiser', 1, '2020-09-20T00:40:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Audi', 'Q7', 1, '2020-06-20T08:24:05Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mercedes-Benz', 'E-Class', 1, '2020-09-17T08:17:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mitsubishi', 'Starion', 1, '2020-11-16T05:22:50Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mercury', 'Capri', 1, '2020-12-05T04:38:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Volkswagen', 'Eurovan', 1, '2020-11-15T16:36:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Ford', 'Tempo', 1, '2020-12-10T00:10:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Toyota', 'Tundra', 1, '2020-10-08T12:34:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('Ford', 'Focus', 1, '2020-09-16T07:13:49Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cadillac', 'Catera', 1, '2020-08-10T10:55:14Z');

            `
    );
  }

  public async down(_: QueryRunner): Promise<void> {}
}
