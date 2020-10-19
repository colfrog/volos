---------- Destruction des tables, des données, du TRIGGER et de la fonction ----------

DROP TRIGGER insert_evenement_trigger ON annonce;
DROP TRIGGER update_evenement_trigger ON annonce;
DROP TRIGGER delete_evenement_trigger ON annonce;
DROP FUNCTION insert_evenement_function();
DROP FUNCTION update_evenement_function();
DROP FUNCTION delete_evenement_function();

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
