Feature: Calcul des frais de livraison

  Scenario: Frais de livraison pour une distance inférieure à 10 km
    Given un client non premium
    When la distance de livraison est de 8 km
    Then les frais de livraison doivent être de 7 $

  Scenario: Frais de livraison pour une distance entre 10 km et 50 km
    Given un client non premium
    When la distance de livraison est de 20 km
    Then les frais de livraison doivent être de 12 $

  Scenario: Frais de livraison pour une distance supérieure à 50 km
    Given un client non premium
    When la distance de livraison est de 60 km
    Then les frais de livraison doivent être de 22 $

  Scenario: Livraison gratuite pour un client premium
    Given un client premium
    When la distance de livraison est de 100 km
    Then les frais de livraison doivent être de 0 $
