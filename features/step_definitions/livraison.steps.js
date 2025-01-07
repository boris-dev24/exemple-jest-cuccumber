
const { Given, When, Then } = require('@cucumber/cucumber');
const { calculerFraisLivraison } = require('../../calculer');

let result;

Given('un client non premium', function () {
  // Le client n'a pas de statut premium
  isPremium = false;
});

Given('un client premium', function () {
  // Le client est premium
  isPremium = true;
});

When('la distance de livraison est de {int} km', function (distance) {
  // On appelle la fonction de calcul avec la distance et le statut premium
  result = calculerFraisLivraison(distance, isPremium, 2);
});

Then('les frais de livraison doivent être de {int} $', function (expectedFrais) {
  // On compare les résultats obtenus avec la valeur attendue
  if (result !== expectedFrais) {
    throw new Error(`Expected ${expectedFrais} but got ${result}`);
  }
});
