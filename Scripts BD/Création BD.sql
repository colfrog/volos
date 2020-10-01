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