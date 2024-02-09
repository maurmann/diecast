-- Table: public.model_brand

-- DROP TABLE IF EXISTS public.model_brand;

CREATE TABLE IF NOT EXISTS public.model_brand
(
    id integer NOT NULL DEFAULT nextval('model_brand_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_brand PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.model_brand
    OWNER to postgres;