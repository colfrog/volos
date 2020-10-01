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
		WHEN old.id IS NOT NULL THEN ( 'Id: ' || old.id ||
									   ', Cip: ' || old.cip ||
									   ', Description: ' || old.description ||
									   ', Prix: ' || old.prix ||
									   ', Date affichage: ' || old.date_affichage ||
									   ', Etat: ' || old.etat)
	END));
RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS update_evenement ON annonce;

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