

// const { calculerReduction } = require('./reduction');

// test('Appliquer 10% de réduction si le panier dépasse 100$', () => {
//   expect(calculerReduction(150, false, "")).toBe(135);
// });

// test('Appliquer 5% supplémentaire pour un membre premium', () => {
//   expect(calculerReduction(150, true, "")).toBe(127.5);
// });

// test('Appliquer 20% de réduction pour un produit avec code promo PROMO20', () => {
//   expect(calculerReduction(50, false, "PROMO20")).toBe(40);
// });

const { calculerFraisLivraison } = require('./calculer');

test('Appliquer 5$ si la distance est inférieure à 10km', () => {
  expect(calculerFraisLivraison(5, false, 2)).toBe(7); // 5$ + taxeNonPremium de 2$
});

test('Appliquer 10$ si la distance est entre 10km et 50km', () => {
  expect(calculerFraisLivraison(20, false, 2)).toBe(12); // 10$ + taxeNonPremium de 2$
});

test('Appliquer 20$ si la distance est supérieure à 50km', () => {
  expect(calculerFraisLivraison(60, false, 2)).toBe(22); // 20$ + taxeNonPremium de 2$
});

test('Appliquer 0$ si le client est premium', () => {
  expect(calculerFraisLivraison(100, true, 2)).toBe(0); // Livraison gratuite pour les membres premium
});
