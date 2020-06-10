var quotes = [
  {
      "quote" : " Comme on le dis chez nous: la chenille ne porte pas de lunette quand elle voit de l'eau.",
  },

  {
      "quote" : "L’oiseau sur le baobab ne doit pas oublié qu’il a porté des lunettes ",
  },

  {
      "quote" : "Mobutu a eu le Léopard mais Bobo aura le crocodile",
  },

  {
      "quote" : "La rivière qui dort a oublié d’allumer son réveil ",
  },

  {
      "quote" : "Espèce de Kala-Kala",
  },

  {
      "quote" : "Celui qui mange ne mange pas que dans le mangeoir",
  },
]



const btn = document.getElementById("btn");
const quote = document.getElementById("quote");



btn.addEventListener('click', getQuote);

function getQuote(){
  let number = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>'
}