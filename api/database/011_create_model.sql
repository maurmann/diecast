-- Table: public.model

-- DROP TABLE IF EXISTS public.model;

CREATE TABLE IF NOT EXISTS public.model
(
    id integer NOT NULL DEFAULT nextval('model_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    brand_id integer NOT NULL,
    series_id integer,
    vehicle_id integer,
    CONSTRAINT pk_model PRIMARY KEY (id),
    CONSTRAINT model_brand_id_fkey FOREIGN KEY (brand_id)
        REFERENCES public.model_brand (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT model_series_id_fkey FOREIGN KEY (series_id)
        REFERENCES public.model_series (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.model
    OWNER to postgres;