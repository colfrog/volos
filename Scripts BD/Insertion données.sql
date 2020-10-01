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
