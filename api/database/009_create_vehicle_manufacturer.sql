-- Table: public.vehicle_manufacturer

-- DROP TABLE IF EXISTS public.vehicle_manufacturer;

CREATE TABLE IF NOT EXISTS public.vehicle_manufacturer
(
    id integer NOT NULL DEFAULT nextval('vehicle_manufacturer_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    country character varying COLLATE pg_catalog."default",
    CONSTRAINT vehicle_manufacturer_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.vehicle_manufacturer
    OWNER to postgres;