-- Table: public.model_series

-- DROP TABLE IF EXISTS public.model_series;

CREATE TABLE IF NOT EXISTS public.model_series
(
    id integer NOT NULL DEFAULT nextval('model_series_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    model_brand_id integer,
    CONSTRAINT pk_series PRIMARY KEY (id),
    CONSTRAINT model_series_model_brand_id_fkey FOREIGN KEY (model_brand_id)
        REFERENCES public.model_brand (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.model_series
    OWNER to postgres;