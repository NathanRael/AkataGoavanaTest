--Requete

SELECT DISTINCT niveau FROM resultat_examen WHERE code_matiere = "ALG" HAVING count(*) >= 30;