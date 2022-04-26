const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 63,
    nome: "Abra",
    tipo: "Tipo: Psychic",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    descricao:
      "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
    altura: 0.9,
    peso: 19.5,
    categoria: "Psi",
    habilidade: "Inner focus, Synchronize",
  },
  {
    id: 64,
    nome: "Kadabra",
    tipo: "Tipo: Psychic",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    descricao:
      "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
    altura: 1.3,
    peso: 56.5,
    categoria: "Psi",
    habilidade: "Inner focus, Synchronize",
  },
  {
    id: 65,
    nome: "Alakazam",
    tipo: "Tipo: Psychic",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    descricao:
      "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
    altura: 1.5,
    peso: 48,
    categoria: "Psi",
    habilidade: "Inner focus, Synchronize",
  },
];

// Rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  
  pokedex.push(pokemon);

  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
