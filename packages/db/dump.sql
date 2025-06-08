--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (Debian 17.5-1.pgdg120+1)
-- Dumped by pg_dump version 17.5 (Debian 17.5-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: OnRampStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."OnRampStatus" AS ENUM (
    'Success',
    'Processing',
    'Failure'
);


ALTER TYPE public."OnRampStatus" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Balance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Balance" (
    id integer NOT NULL,
    amount integer NOT NULL,
    "userId" integer NOT NULL,
    locked integer NOT NULL
);


ALTER TABLE public."Balance" OWNER TO postgres;

--
-- Name: Balance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Balance_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Balance_id_seq" OWNER TO postgres;

--
-- Name: Balance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Balance_id_seq" OWNED BY public."Balance".id;


--
-- Name: OnRampTransaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."OnRampTransaction" (
    id integer NOT NULL,
    status public."OnRampStatus" NOT NULL,
    token text NOT NULL,
    provider text NOT NULL,
    "startTime" timestamp(3) without time zone NOT NULL,
    amount integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."OnRampTransaction" OWNER TO postgres;

--
-- Name: OnRampTransaction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."OnRampTransaction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."OnRampTransaction_id_seq" OWNER TO postgres;

--
-- Name: OnRampTransaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."OnRampTransaction_id_seq" OWNED BY public."OnRampTransaction".id;


--
-- Name: P2PTransfer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."P2PTransfer" (
    id integer NOT NULL,
    "timeStamp" timestamp(3) without time zone NOT NULL,
    amount integer NOT NULL,
    "fromuserId" integer NOT NULL,
    "touserId" integer NOT NULL
);


ALTER TABLE public."P2PTransfer" OWNER TO postgres;

--
-- Name: P2PTransfer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."P2PTransfer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."P2PTransfer_id_seq" OWNER TO postgres;

--
-- Name: P2PTransfer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."P2PTransfer_id_seq" OWNED BY public."P2PTransfer".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text,
    password text NOT NULL,
    phone text NOT NULL,
    name text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Balance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Balance" ALTER COLUMN id SET DEFAULT nextval('public."Balance_id_seq"'::regclass);


--
-- Name: OnRampTransaction id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OnRampTransaction" ALTER COLUMN id SET DEFAULT nextval('public."OnRampTransaction_id_seq"'::regclass);


--
-- Name: P2PTransfer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."P2PTransfer" ALTER COLUMN id SET DEFAULT nextval('public."P2PTransfer_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Balance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Balance" (id, amount, "userId", locked) FROM stdin;
2	53100	6	0
1	3951500	5	0
3	5003000	9	0
\.


--
-- Data for Name: OnRampTransaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."OnRampTransaction" (id, status, token, provider, "startTime", amount, "userId") FROM stdin;
1	Success	122	HDFC	2025-06-03 08:07:00.266	200	5
2	Failure	123	AXIS	2025-06-03 08:07:00.389	100	6
6	Processing	0.4906495101640891	HDFC Bank	2025-06-03 11:12:22.073	500	5
7	Success	0.25043567334657624	Axis Bank	2025-06-03 11:14:21.614	2000	5
8	Success	0.49296227862717634	Axis Bank	2025-06-05 02:02:21.937	4000000	5
10	Success	0.9028837663132576	Axis Bank	2025-06-06 12:55:34.464	5000000	9
\.


--
-- Data for Name: P2PTransfer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."P2PTransfer" (id, "timeStamp", amount, "fromuserId", "touserId") FROM stdin;
1	2025-06-05 01:18:13.146	200	5	6
2	2025-06-05 01:18:24.113	300	5	6
3	2025-06-05 02:01:15.385	5000	6	5
4	2025-06-05 02:08:42.973	50000	5	6
5	2025-06-06 12:57:40.174	1000	9	6
6	2025-06-08 08:33:10.466	4000	5	9
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, password, phone, name) FROM stdin;
9	\N	$2b$10$a6I708oRezozGX5kTxyGLeld96M7Q9wHpmQO3XYKZ/Dq3f8NyAYmu	123	123Guy
5	\N	$2b$10$f5dBY41cajag9Vr0/c/cZOOonktJv7koCaXpGw.0UTFGMK4hrsbSq	9999999999	Alice
6	\N	$2b$10$f5dBY41cajag9Vr0/c/cZOOonktJv7koCaXpGw.0UTFGMK4hrsbSq	1111111111	Bob
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
48d5e47b-1fc7-4166-8f2d-5eb09d625cb8	e5310f6e23be43e1582ada1c591572d0e83dba5d8d2d476aa4f2aae59fa1ec5f	2025-05-25 07:25:58.522086+00	20250525072558_init	\N	\N	2025-05-25 07:25:58.508755+00	1
7c24337f-8f33-4f6b-bde6-221b74ecd499	2ced12789eeaa9463683b42aa7dc8d62d77c3549c58d6609a49dbe8faa00cb21	2025-05-25 16:14:55.81093+00	20250525161455_onramp_bal_upd	\N	\N	2025-05-25 16:14:55.791824+00	1
faa6e597-f385-410a-8035-c0c417e659d9	333b443e191a82f2b37a535d13114f509e61c528e12fb1fd10d453552331e64b	2025-06-03 11:06:21.197658+00	20250603110620_nouniq	\N	\N	2025-06-03 11:06:21.179157+00	1
d2f3dc5b-247e-488d-a4ba-c1b0d8eed10a	22794c564d52870f5a2fb20dd5ce810d02bb0ee63fadc7d969b76d93fb29904a	2025-06-05 00:54:31.877604+00	20250605005431_p2pschema	\N	\N	2025-06-05 00:54:31.857942+00	1
\.


--
-- Name: Balance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Balance_id_seq"', 3, true);


--
-- Name: OnRampTransaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."OnRampTransaction_id_seq"', 10, true);


--
-- Name: P2PTransfer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."P2PTransfer_id_seq"', 6, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 9, true);


--
-- Name: Balance Balance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Balance"
    ADD CONSTRAINT "Balance_pkey" PRIMARY KEY (id);


--
-- Name: OnRampTransaction OnRampTransaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OnRampTransaction"
    ADD CONSTRAINT "OnRampTransaction_pkey" PRIMARY KEY (id);


--
-- Name: P2PTransfer P2PTransfer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."P2PTransfer"
    ADD CONSTRAINT "P2PTransfer_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: OnRampTransaction_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "OnRampTransaction_token_key" ON public."OnRampTransaction" USING btree (token);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_phone_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_phone_key" ON public."User" USING btree (phone);


--
-- Name: Balance Balance_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Balance"
    ADD CONSTRAINT "Balance_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OnRampTransaction OnRampTransaction_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OnRampTransaction"
    ADD CONSTRAINT "OnRampTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: P2PTransfer P2PTransfer_fromuserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."P2PTransfer"
    ADD CONSTRAINT "P2PTransfer_fromuserId_fkey" FOREIGN KEY ("fromuserId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: P2PTransfer P2PTransfer_touserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."P2PTransfer"
    ADD CONSTRAINT "P2PTransfer_touserId_fkey" FOREIGN KEY ("touserId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

