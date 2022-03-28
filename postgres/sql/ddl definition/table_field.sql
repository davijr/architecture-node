-- public.table_field definition

-- Drop table

-- DROP TABLE public.table_field;

CREATE TABLE public.table_field (
	id uuid NOT NULL,
	table_id uuid NOT NULL,
	field varchar NOT NULL,
	field_type varchar NOT NULL,
	active bool NOT NULL DEFAULT true
);