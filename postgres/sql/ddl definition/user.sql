-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	birthday timestamp NULL,
	cpf text NULL,
	genre varchar NULL,
	active bool NOT NULL DEFAULT true,
	email varchar NULL,
	salary numeric NULL,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_un UNIQUE (cpf)
);