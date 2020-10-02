---------- Création de la BD ----------

CREATE TABLE Faculte
(
  nom VARCHAR(512) NOT NULL,
  PRIMARY KEY (nom)
);

CREATE TABLE Departement
(
  nom_departement VARCHAR(512) NOT NULL,
  nom_faculte VARCHAR(512) NOT NULL,
  PRIMARY KEY (nom_departement, nom_faculte),
  FOREIGN KEY (nom_faculte) REFERENCES Faculte(nom)
);

CREATE TABLE Utilisateur
(
  nom VARCHAR(512) NOT NULL,
  prenom VARCHAR(512) NOT NULL,
  cip CHAR(8) NOT NULL,
  mail VARCHAR(512) NOT NULL,
  nom_departement VARCHAR(512) NOT NULL,
  nom_faculte VARCHAR(512) NOT NULL,
  PRIMARY KEY (cip),
  FOREIGN KEY (nom_departement, nom_faculte) REFERENCES Departement(nom_departement, nom_faculte)
);

CREATE TABLE Auteur
(
  nom VARCHAR(512) NOT NULL,
  prenom VARCHAR(512) NOT NULL,
  PRIMARY KEY (nom, prenom)
);

CREATE TABLE Annonce
(
  description VARCHAR(2048),
  prix FLOAT NOT NULL,
  id INT NOT NULL,
  date_affichage DATE NOT NULL,
  etat INT NOT NULL,
  cip CHAR(8) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (cip) REFERENCES Utilisateur(cip)
);

CREATE TABLE Favoris
(
  id_annonce INT NOT NULL,
  cip CHAR(8) NOT NULL,
  PRIMARY KEY (id_annonce, cip),
  FOREIGN KEY (id_annonce) REFERENCES Annonce(id),
  FOREIGN KEY (cip) REFERENCES Utilisateur(cip)
);

CREATE TABLE Livre
(
  maison_edition VARCHAR(512) NOT NULL,
  resume VARCHAR(2048),
  titre VARCHAR(512) NOT NULL,
  date_publication DATE NOT NULL,
  id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES Annonce(id)
);

CREATE TABLE Loyer
(
  titre VARCHAR(512) NOT NULL,
  nombre_chambre INT NOT NULL,
  date_debut_location DATE NOT NULL,
  date_fin_location DATE NOT NULL,
  id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES Annonce(id)
);

CREATE TABLE Evenement
(
  id_evenement INT NOT NULL,
  date TIMESTAMP NOT NULL,
  action VARCHAR(512) NOT NULL,
  id_annonce INT NOT NULL,
  vieille_annonce VARCHAR(512),
  PRIMARY KEY (id_evenement),
  FOREIGN KEY (id_annonce) REFERENCES Annonce(id)
);

CREATE TABLE Auteur_livre
(
  id INT NOT NULL,
  nom VARCHAR(512) NOT NULL,
  prenom VARCHAR(512) NOT NULL,
  PRIMARY KEY (id, nom, prenom),
  FOREIGN KEY (id) REFERENCES Livre(id),
  FOREIGN KEY (nom, prenom) REFERENCES Auteur(nom, prenom)
);


---------- Insertion des données dans la BD ----------

INSERT INTO faculte (nom)
VALUES
('Génie');

INSERT INTO departement (nom_departement, nom_faculte)
VALUES
('Électrique et informatique', 'Génie'),
('Mécanique', 'Génie'),
('Biotechnologie', 'Génie'),
('Civil et du bâtiment', 'Génie');

INSERT INTO utilisateur (nom, prenom, cip, mail, nom_departement, nom_faculte)
VALUES
('du Réau', 'Paul', 'durp0701', 'durp0701@usherbrooke.ca', 'Électrique et informatique', 'Génie'),
('Bourabaa', 'Iliass', 'boui2215', 'boui2215@usherbrooke.ca', 'Électrique et informatique', 'Génie'),
('Scoccimarro', 'Pedro', 'scop2401', 'scop2401@usherbrooke.ca', 'Électrique et informatique', 'Génie'),
('Cimon', 'Laurent', 'ciml3101', 'ciml3101@usherbrooke.ca', 'Électrique et informatique', 'Génie'),
('Tremblay', 'Marc-André', 'trem2842', 'trem2842@usherbrooke.ca', 'Électrique et informatique', 'Génie');

--Etats disponibles: 0 = PUBLIÉ, 1 = FERMÉ, 2 = VENDU
INSERT INTO annonce (id, cip, description, prix, date_affichage, etat)
VALUES
(0, 'durp0701', 'Un livre presque neuf', 40, '2020-10-01', 1),
(1, 'boui2215', 'Un loyer pas cher', 300, '2020-10-01', 0),
(2, 'scop2401', 'Un livre de merde', 100, '2020-10-01', 2);

INSERT INTO favoris (id_annonce, cip)
VALUES
(1, 'durp0701');

INSERT INTO loyer (id, titre, nombre_chambre, date_debut_location, date_fin_location)
VALUES
(1, '3 1/2 rue Sherbrooke', 2, '2021-01-01', '2021-06-01');

INSERT INTO livre (id, titre, resume, maison_edition, date_publication)
VALUES
(0, 'UML 2', 'UML est le language de modélisation le plus utilisé dans lindustrie, principalement pour le développement logiciel.', 'PEARSON', '2020-10-01'),
(2, 'ONE PIECE', 'Une histoire de pirate au chapeau de paille!!', 'Shūeisha', '1997-12-24');

INSERT INTO auteur (nom, prenom)
VALUES
('Charroux', 'Benoît'),
('Osmani', 'Aomar'),
('Yann', 'Thierry-Mieg'),
('Oda', 'Eiichirō');

INSERT INTO auteur_livre (id, nom, prenom)
VALUES
(0, 'Charroux', 'Benoît'),
(0, 'Osmani', 'Aomar'),
(0, 'Yann', 'Thierry-Mieg'),
(2, 'Oda', 'Eiichirō');


---------- Création du TRIGGER pour la table evenement ----------

CREATE OR REPLACE FUNCTION insert_evenement()
RETURNS TRIGGER
SET SCHEMA 'public'
LANGUAGE 'plpgsql'
AS $$
BEGIN
INSERT INTO evenement (id_evenement, action, date, id_annonce, vieille_annonce)
VALUES (
	(CASE
	 	WHEN (SELECT MAX(id_evenement) FROM evenement) IS NULL THEN 1
		ELSE (SELECT MAX(id_evenement) FROM evenement) + 1
	END),
	(CASE
	 	WHEN old.id IS NULL THEN 'INSERT'
		ELSE 'UPDATE'
	END),
	(CURRENT_TIMESTAMP),
	(CASE
		WHEN new.id IS NULL THEN old.id
		ELSE new.id
	END),
	(CASE
		WHEN old.id IS NOT NULL THEN (  'Id: ' || old.id ||
						', Cip: ' || old.cip ||
						', Description: ' || old.description ||
						', Prix: ' || old.prix ||
						', Date affichage: ' || old.date_affichage ||
						', Etat: ' || old.etat)
	END));
RETURN new;
END;
$$;

--DROP TRIGGER IF EXISTS update_evenement ON annonce;

CREATE TRIGGER update_evenement
AFTER INSERT OR UPDATE ON annonce
FOR EACH ROW EXECUTE FUNCTION insert_evenement();

---------- Tests pour la table evenement ----------
--DELETE FROM evenement WHERE id_annonce = -1;
--DELETE FROM annonce WHERE id = -1;

INSERT INTO annonce (id, cip, description, prix, date_affichage, etat)
VALUES
(-1, 'durp0701', 'TEST TRIGGER 1.0', 0, '2000-01-01', 1);

UPDATE annonce
SET description = 'TEST TRIGGER 2.0'
WHERE id = -1;