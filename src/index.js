// Desafio Felipão — Classificador de Nível de Herói

const nome = "Felipão";
const experiencia = 8500;

function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

const nivel = classificarNivel(experiencia);

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
