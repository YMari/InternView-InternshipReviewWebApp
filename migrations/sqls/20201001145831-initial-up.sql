/* Replace with your SQL commands */


CREATE TABLE "public"."University" (
"id" SERIAL,
"name" text   NOT NULL ,
"location" text   NOT NULL ,
"imageUrl" text,
PRIMARY KEY ("id")
);

CREATE TABLE "public"."StudyProgram" (
"id" SERIAL,
"name" text   NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "public"."Student" (
"id" SERIAL,
"name" text   NOT NULL ,
"email" text   NOT NULL ,
"passwordHash" text   NOT NULL ,
"studyProgramId" integer   NOT NULL ,
"univeristyId" integer   NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "public"."Report" (
"id" SERIAL,
"reasons" text   NOT NULL ,
"reviewId" integer   NOT NULL ,
"studentId" integer   NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "public"."Company" (
"id" SERIAL,
"name" text   NOT NULL ,
"imageUrl" text   NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "public"."Review" (
"id" SERIAL,
"recommendation" text   NOT NULL ,
"interviewQuestions" text   NOT NULL ,
"dateCreated" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"anonymous" boolean   NOT NULL DEFAULT false,
"experienceType" text   NOT NULL ,
"seekingDegree" text   NOT NULL ,
"helpfulScore" integer   NOT NULL ,
"location" text   NOT NULL ,
"salary" integer   NOT NULL ,
"duration" integer   NOT NULL ,
"interviewDifficultyRating" integer   NOT NULL ,
"acceptedStatus" boolean   NOT NULL DEFAULT false,
"experienceRating" integer   NOT NULL ,
"reviewTitle" text   NOT NULL ,
"studyProgramId" integer   NOT NULL ,
"universityId" integer   NOT NULL ,
"companyId" integer   NOT NULL ,
"authorId" integer   NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "public"."Rating" (
"id" SERIAL,
"helpfulRate" integer   NOT NULL ,
"reviewId" integer   NOT NULL ,
"studentId" integer   NOT NULL ,
PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "University.name_unique" ON "public"."University"("name");

CREATE UNIQUE INDEX "StudyProgram.name_unique" ON "public"."StudyProgram"("name");

CREATE UNIQUE INDEX "Student.email_unique" ON "public"."Student"("email");

CREATE UNIQUE INDEX "Company.name_unique" ON "public"."Company"("name");

ALTER TABLE "public"."Student" ADD FOREIGN KEY ("studyProgramId")REFERENCES "public"."StudyProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."Student" ADD FOREIGN KEY ("univeristyId")REFERENCES "public"."University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."Report" ADD FOREIGN KEY ("reviewId")REFERENCES "public"."Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public"."Report" ADD FOREIGN KEY ("studentId")REFERENCES "public"."Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public"."Review" ADD FOREIGN KEY ("studyProgramId")REFERENCES "public"."StudyProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."Review" ADD FOREIGN KEY ("universityId")REFERENCES "public"."University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."Review" ADD FOREIGN KEY ("companyId")REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."Review" ADD FOREIGN KEY ("authorId")REFERENCES "public"."Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public"."Rating" ADD FOREIGN KEY ("reviewId")REFERENCES "public"."Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public"."Rating" ADD FOREIGN KEY ("studentId")REFERENCES "public"."Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;