

function calculerFraisLivraison(distance, isPremium, taxeNonPremium) {
    let fraisLivraison = distance;
  
    // frais de 5$ si livraison inférieur a 10km
    if (distance < 10) fraisLivraison = 5 + taxeNonPremium;
  
    // frais de 10$ si livraison entre 10km et 50km
    if (distance > 10 && distance < 50) fraisLivraison = 10 + taxeNonPremium;

    // frais de 20$ si livraison supérieure a 50km
    if (distance > 50) fraisLivraison = 20 + taxeNonPremium;

    //  si le client est premium, livraison gratuite
    if (isPremium) fraisLivraison = 0;

  
    return fraisLivraison;
  }
  
  module.exports = { calculerFraisLivraison };
  