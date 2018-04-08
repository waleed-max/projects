create database waleedmax;                             /*start point*/ 
use waleedmax;
CREATE TABLE WALEEDJOB (                               /*Database and tablename*/
ID INT(10) primary key auto_increment,                 /*primary key auto*/
job varchar(250),
duration int(8) 
);

ALTER TABLE WALEEDJOB ADD supervisor varchar(250);     /* make column*/

ALTER TABLE WALEEDJOB ADD STARTEND INT(10);            /* make column*/

ALTER TABLE WALEEDJOB DROP COLUMN STARTEND;           /*delete column*/

ALTER TABLE waleedjob ADD startend INT(10);

INSERT INTO WALEEDJOB (JOB, DURATION, SUPERVISOR, STARTEND)   /* write into the column*/
VALUES('C.ENGINEER', 6, 'MORA',2007);

ALTER TABLE waleedjob CHANGE startend start varchar(225);    /*change column name*/  

alter table waleedjob add end int(10);

UPDATE waleedjob
SET job = 'civil engineer', duration= '6', supervisor='MORA', start=2007, end= 2011
WHERE id = 1;      /* update your information*/

UPDATE waleedjob
SET job = 'civil engineer', duration= '2', supervisor='scop', start=20011, end= 2013
WHERE id = 2;

UPDATE waleedjob
SET job = 'project manager', duration= '2', supervisor='Quenci', start=2013, end= 2015
WHERE id = 3;

INSERT INTO WALEEDJOB (JOB, DURATION, SUPERVISOR, START, end)
VALUES('security', 1, 'quenci',2016,2017);

update waleedjob
set supervisor= 'mike'  /* change the name in column (supervisor)*/
where id=4;

select * from waleedjob 
where supervisor like 'q%';   /* select all supervisor started K */


create table home (
id int(10) primary key auto_increment,    /* make another table*/
country varchar(250),
city varchar(250),
duration int(10)
);

INSERT INTO home (country,city,duration)   /* write information inside your rows*/
VALUES('IRAQ', 'BAGHDAD', 10);

INSERT INTO home (country,city,duration)
VALUES('TURKEY', 'ISTANBUL', 8);

INSERT INTO home (country,city,duration)
VALUES('FRANC', 'PARIS', 2);

INSERT INTO home (country, city, duration)
VALUES
('QATAR', 'DOHA',1),
('UNITED ARAB EMA', 'DUBAI',1),
('UNITED STATE OF AMARICA','AUSTIN',1);

update HOME
set COUNTRY= 'france'
where id=3;

alter table waleedjob add country varchar(250);    /* add 2 columns to your first table*/
alter table waleedjob add city varchar(250);


INSERT INTO waleedjob (country,city)   /* insert 2 columns from the first table to the second one*/
SELECT country,city 
FROM home;


ALTER TABLE WALEEDJOB DROP COLUMN country;   /* delete column*/
ALTER TABLE WALEEDJOB DROP COLUMN city;

alter table waleedjob add country varchar(250);  /*this part just for join and insert*/

INSERT INTO waleedjob (country)    /* insert from the second table to the first one*/
SELECT country 
FROM home
where id=1;

SELECT home.country AS COUNTRY_ID,waleedjob.country  /* make left join 2 tables and name it to new name*/
FROM home
LEFT JOIN waleedjob ON home.country = waleedjob.country;

SELECT COUNT(*) FROM HOME                            /*Count how many rows you have*/
WHERE DURATION;

SELECT MAX(DURATION) FROM HOME;                       /*max duration*/
SELECT MIN(DURATION) FROM HOME;                       /*min duration*/
SELECT AVG(DURATION) FROM HOME;                       /*avg duration*/

SELECT SUM(DURATION)/100 FROM HOME;                    /*the persentage of years*/


SELECT SUM(DURATION)/min(duration) FROM HOME;          /*the persentage max/min*/












