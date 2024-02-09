-- Table: public.vehicle

-- DROP TABLE IF EXISTS public.vehicle;

CREATE TABLE IF NOT EXISTS public.vehicle
(
    id bigint NOT NULL DEFAULT nextval('vehicle_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    vehicle_manufacturer_id integer NOT NULL,
    year_of_production smallint,
    CONSTRAINT pk_vehicle PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.vehicle
    OWNER to postgres;