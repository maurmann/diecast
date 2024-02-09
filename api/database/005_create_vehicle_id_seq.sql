-- SEQUENCE: public.vehicle_id_seq

-- DROP SEQUENCE IF EXISTS public.vehicle_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.vehicle_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1
    OWNED BY vehicle.id;

ALTER SEQUENCE public.vehicle_id_seq
    OWNER TO postgres;