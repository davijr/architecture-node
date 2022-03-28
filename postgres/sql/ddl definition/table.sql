-- public."table" definition

-- Drop table

-- DROP TABLE public."table";

CREATE TABLE public."table" (
	id uuid NOT NULL,
	title text NOT NULL,
	active varchar NOT NULL DEFAULT true,
	CONSTRAINT tables_pk PRIMARY KEY (id),
	CONSTRAINT tables_un UNIQUE (title)
);