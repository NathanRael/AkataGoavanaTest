--Requete

SELECT DISTINCT niveau FROM resultat_examen WHERE code_matiere = "ALG" AND note >= 0 HAVING count(*) >= 30;
