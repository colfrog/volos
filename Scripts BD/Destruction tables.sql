---------- Destruction des tables, des données, du TRIGGER et de la fonction ----------

DROP TRIGGER update_evenement ON annonce;
DROP FUNCTION insert_evenement();

DELETE FROM auteur_livre;
DELETE FROM auteur;
DELETE FROM livre;
DELETE FROM loyer;
DELETE FROM evenement;
DELETE FROM favoris;
DELETE FROM annonce;
DELETE FROM utilisateur;
DELETE FROM departement;
DELETE FROM faculte;

DROP TABLE auteur_livre;
DROP TABLE auteur;
DROP TABLE livre;
DROP TABLE loyer;
DROP TABLE evenement;
DROP TABLE favoris;
DROP TABLE annonce;
DROP TABLE utilisateur;
DROP TABLE departement;
DROP TABLE faculte;