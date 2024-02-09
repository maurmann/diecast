-- SEQUENCE: public.model_brand_id_seq

-- DROP SEQUENCE IF EXISTS public.model_brand_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.model_brand_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY model_brand.id;

ALTER SEQUENCE public.model_brand_id_seq
    OWNER TO postgres;