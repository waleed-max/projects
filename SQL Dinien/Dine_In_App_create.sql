-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2018-01-18 02:48:36.541

-- tables
-- Table: BILL
CREATE TABLE BILL (
    Bill_Id UUID  NOT NULL DEFAULT public.gen_random_uuid(),
    Location_Id UUID  NOT NULL,
    Table_Id varchar(20)  NOT NULL,
    Bill_Amount numeric  NULL,
    Bill_Timestamp bigint  NOT NULL DEFAULT (1000*extract(epoch from now()))::bigint,
    CONSTRAINT BILL_pk PRIMARY KEY (Bill_Id)
);

-- Table: BUSINESSES
CREATE TABLE BUSINESSES (
    Business_Id uuid  NOT NULL DEFAULT public.gen_random_uuid(),
    Business_Name varchar(100)  NOT NULL,
    Address varchar(200)  NOT NULL,
    City varchar(50)  NOT NULL,
    State varchar(10)  NOT NULL,
    Zip varchar(20)  NULL,
    Business_Type varchar(30)  NOT NULL,
    CONSTRAINT BUSINESSES_pk PRIMARY KEY (Business_Id)
);

-- Table: LOCATIONS
CREATE TABLE LOCATIONS (
    Location_Id UUID  NOT NULL DEFAULT public.gen_random_uuid(),
    Business_Id UUID  NOT NULL,
    Location_Name varchar(100)  NULL,
    Location_Address varchar(200)  NULL,
    Location_City varchar(50)  NULL,
    Location_State varchar(10)  NULL,
    Location_Zip varchar(20)  NULL,
    Location_Type varchar(30)  NOT NULL,
    CONSTRAINT LOCATIONS_pk PRIMARY KEY (Location_Id)
);

-- Table: MENU
CREATE TABLE MENU (
    Menu_Id SERIAL  NOT NULL,
    Business_Id UUID  NOT NULL,
    Location_Id UUID  NOT NULL,
    Menu_Type varchar(30)  NOT NULL,
    Menu_Tags json  NOT NULL,
    CONSTRAINT MENU_pk PRIMARY KEY (Menu_Id)
);

-- Table: MENU_ITEMS
CREATE TABLE MENU_ITEMS (
    Menu_Item_Id UUID  NOT NULL DEFAULT public.gen_random_uuid(),
    Menu_Id int  NOT NULL,
    Item_Price numeric  NULL,
    Item_Description varchar(50)  NULL,
    CONSTRAINT MENU_ITEMS_pk PRIMARY KEY (Menu_Item_Id)
);

-- Table: ORDER_ITEMS
CREATE TABLE ORDER_ITEMS (
    Order_Item_Id UUID  NOT NULL DEFAULT public.gen_random_uuid(),
    Bill_Id UUID  NOT NULL,
    Menu_Item_Id uuid  NOT NULL,
    CONSTRAINT ORDER_ITEMS_pk PRIMARY KEY (Order_Item_Id)
);

-- Table: TABLES
CREATE TABLE TABLES (
    Table_Id varchar(20)  NOT NULL,
    Location_Id UUID  NOT NULL,
    CONSTRAINT TABLES_ak_1 UNIQUE (Location_Id) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT TABLES_pk PRIMARY KEY (Table_Id)
);

-- foreign keys
-- Reference: BILL_TABLES (table: BILL)
ALTER TABLE BILL ADD CONSTRAINT BILL_TABLES
    FOREIGN KEY (Table_Id)
    REFERENCES TABLES (Table_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Location_BUSINESS (table: LOCATIONS)
ALTER TABLE LOCATIONS ADD CONSTRAINT Location_BUSINESS
    FOREIGN KEY (Business_Id)
    REFERENCES BUSINESSES (Business_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: MENU_BUSINESS (table: MENU)
ALTER TABLE MENU ADD CONSTRAINT MENU_BUSINESS
    FOREIGN KEY (Business_Id)
    REFERENCES BUSINESSES (Business_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: MENU_ITEMS_MENU (table: MENU_ITEMS)
ALTER TABLE MENU_ITEMS ADD CONSTRAINT MENU_ITEMS_MENU
    FOREIGN KEY (Menu_Id)
    REFERENCES MENU (Menu_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: MENU_LOCATIONS (table: MENU)
ALTER TABLE MENU ADD CONSTRAINT MENU_LOCATIONS
    FOREIGN KEY (Location_Id)
    REFERENCES LOCATIONS (Location_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: ORDER_ITEMS_BILL (table: ORDER_ITEMS)
ALTER TABLE ORDER_ITEMS ADD CONSTRAINT ORDER_ITEMS_BILL
    FOREIGN KEY (Bill_Id)
    REFERENCES BILL (Bill_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: ORDER_ITEMS_MENU_ITEMS (table: ORDER_ITEMS)
ALTER TABLE ORDER_ITEMS ADD CONSTRAINT ORDER_ITEMS_MENU_ITEMS
    FOREIGN KEY (Menu_Item_Id)
    REFERENCES MENU_ITEMS (Menu_Item_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Tables_Location (table: TABLES)
ALTER TABLE TABLES ADD CONSTRAINT Tables_Location
    FOREIGN KEY (Location_Id)
    REFERENCES LOCATIONS (Location_Id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

