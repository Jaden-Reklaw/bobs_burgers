CREATE TABLE "family"(
	"id" SERIAL PRIMARY KEY,
	"fam_name" VARCHAR(120) NOT NULL
);

-- Need to add image path
CREATE TABLE "employees"(
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(120) NOT NULL,
	"last_name" VARCHAR(120) NOT NULL,
	"voice_actor" VARCHAR(120) NOT NULL,
	"bio" TEXT NOT NULL,
	"age" INTEGER NOT NULL,
	"occupation" VARCHAR(120) NOT NULL,
	"family_id" INTEGER REFERENCES "family"
);