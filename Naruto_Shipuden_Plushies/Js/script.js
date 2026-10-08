
const PLUSH_COLLECTION = [
  {
    id: "sasuke",
    theme: "sasuke",
    name: "Sasuke Uchiha",
    costume: "Fantasia: Cobra Aoda",
    weight: 16,
    rare: false,
    image: "images/placeholder-sasuke.jpg",
    alt: "Pelúcia de Sasuke Uchiha vestindo a fantasia da cobra Aoda",
    texts: {
      historia:
        "Sasuke Uchiha é o último sobrevivente do clã Uchiha após a tragédia que dizimou sua família. " +
        "Movido pela vingança e depois pela busca de redenção, sua jornada é uma das mais complexas da obra, " +
        "passando de vingador solitário a aliado essencial da Vila da Folha.",
      papel:
        "Como melhor amigo e maior rival de Naruto, Sasuke representa o contraponto trágico do protagonista. " +
        "Sua rivalidade impulsiona grande parte do enredo de Naruto Shippuuden, e sua evolução é central " +
        "para o desfecho da Quarta Guerra Shinóbi.",
      fantasia:
        "A fantasia remete a Aoda, a serpente gigante invocada por Sasuke em combate. Aoda é uma de suas " +
        "invocações mais poderosas, usada em batalhas decisivas, e aqui ganha uma versão fofa e felpuda " +
        "para a pelúcia."
    }
  },
  {
    id: "naruto",
    theme: "naruto",
    name: "Naruto Uzumaki",
    costume: "Fantasia: Kurama",
    weight: 16,
    rare: false,
    image: "images/placeholder-naruto.jpg",
    alt: "Pelúcia de Naruto Uzumaki vestindo a fantasia da raposa Kurama",
    texts: {
      historia:
        "Naruto Uzumaki é o protagonista da série, um ninja que carrega dentro de si a Raposa de Nove Caudas, " +
        "Kurama. Criado como órfão e visto com desconfiança pela vila, seu sonho é se tornar Hokage e ser " +
        "reconhecido por todos.",
      papel:
        "Naruto é o motor emocional de Shippuuden: sua determinação inabalável guia o grupo em batalhas contra " +
        "a Akatsuki e, futuramente, contra ameaças que colocam o mundo shinóbi em risco.",
      fantasia:
        "A fantasia representa Kurama, a Raposa de Nove Caudas selada em Naruto. O vínculo entre os dois evolui " +
        "de prisão para verdadeira parceria, tornando-se uma das fontes de poder mais icônicas da saga."
    }
  },
  {
    id: "kakashi",
    theme: "kakashi",
    name: "Kakashi Hatake",
    costume: "Fantasia: Pakkun",
    weight: 16,
    rare: false,
    image: "images/placeholder-kakashi.jpg",
    alt: "Pelúcia de Kakashi Hatake vestindo a fantasia do cão-ninja Pakkun",
    texts: {
      historia:
        "Kakashi Hatake, o 'Ninja Copiador', é reconhecido por seu Sharingan e por sua trajetória marcada por " +
        "perdas na infância. Ele se torna mentor do Time 7, moldando o caminho de Naruto, Sasuke e Sakura.",
      papel:
        "Como sensei e, mais tarde, Sexto Hokage, Kakashi é a figura de equilíbrio entre disciplina e afeto, " +
        "guiando decisões estratégicas cruciais durante a Quarta Guerra Shinóbi.",
      fantasia:
        "A fantasia homenageia Pakkun, o cão-ninja falante e líder de sua matilha de invocação, usado " +
        "frequentemente para rastreamento e reconhecimento em missões."
    }
  },
  {
    id: "sakura",
    theme: "sakura",
    name: "Sakura Haruno",
    costume: "Fantasia: Katsuyu",
    weight: 16,
    rare: false,
    image: "images/placeholder-sakura.jpg",
    alt: "Pelúcia de Sakura Haruno vestindo a fantasia da lesma Katsuyu",
    texts: {
      historia:
        "Sakura Haruno inicia a série como uma jovem kunoichi insegura, mas se transforma em uma poderosa " +
        "ninja médica sob a tutela de Tsunade, dominando um controle de chakra excepcional.",
      papel:
        "Em Shippuuden, Sakura se torna peça-chave nos campos de batalha como médica e lutadora, " +
        "salvando incontáveis aliados durante a guerra contra a Akatsuki e além.",
      fantasia:
        "A fantasia remete a Katsuyu, a lesma gigante invocada por Tsunade e também por Sakura, símbolo do " +
        "ninjutsu médico e da capacidade de cura em massa no campo de batalha."
    }
  },
  {
    id: "hinata",
    theme: "hinata",
    name: "Hinata Hyuuga",
    costume: "Fantasia: Coelho Celeste (Byakugan)",
    weight: 16,
    rare: false,
    image: "images/placeholder-hinata.jpg",
    alt: "Pelúcia de Hinata Hyuuga vestindo uma fantasia de coelho azul-celeste inspirada em seu Byakugan",
    texts: {
      historia:
        "Hinata Hyuuga nasceu na prestigiada família Hyuuga e cresceu insegura à sombra das expectativas do " +
        "clã. Aos poucos, sua timidez dá lugar a uma coragem silenciosa, movida pela admiração que sempre " +
        "sentiu por Naruto.",
      papel:
        "Em Shippuuden, Hinata amadurece como lutadora e como pessoa, enfrentando missões decisivas ao lado " +
        "do Time 8 e declarando, por fim, seus sentimentos a Naruto em um dos momentos mais marcantes da " +
        "guerra contra a Akatsuki.",
      fantasia:
        "A fantasia traz um coelhinho azul-celeste que remete ao Byakugan, o dojutsu que concede a Hinata " +
        "visão quase total ao redor — aqui reinterpretado como orelhas atentas e um olhar doce e observador."
    }
  },
  {
    id: "gaara",
    theme: "gaara",
    name: "Gaara",
    costume: "Fantasia: Shukaku",
    weight: 15,
    rare: false,
    image: "images/placeholder-gaara.jpg",
    alt: "Pelúcia de Gaara vestindo a fantasia do guaxinim Shukaku",
    texts: {
      historia:
        "Gaara cresceu isolado por carregar o Shukaku, o que o tornou uma criança solitária e temida. Seu " +
        "encontro com Naruto muda profundamente sua visão sobre laços e propósito.",
      papel:
        "Tornando-se Kazekage da Vila da Areia, Gaara passa a liderar com sabedoria conquistada à duras penas, " +
        "sendo um aliado fundamental da Vila da Folha durante a guerra.",
      fantasia:
        "A fantasia representa Shukaku, o Tanuki de Uma Cauda que antes habitava Gaara, referência direta à " +
        "areia que ele controla como sua principal técnica de combate."
    }
  },
  {
    id: "itachi",
    theme: "itachi",
    name: "Itachi Uchiha",
    costume: "Fantasia: Susanoo / Karasu",
    weight: 5,
    rare: true,
    image: "images/placeholder-itachi.jpg",
    alt: "Pelúcia rara de Itachi Uchiha vestindo a fantasia de Susanoo e cercada por corvos",
    texts: {
      historia:
        "Itachi Uchiha sacrificou tudo — inclusive sua própria reputação — para proteger a Vila da Folha e seu " +
        "irmão mais novo, Sasuke, carregando sozinho o peso de decisões impossíveis.",
      papel:
        "Sua verdadeira lealdade só é revelada em Shippuuden, transformando por completo a percepção do " +
        "público sobre o clã Uchiha e reformulando toda a narrativa da série.",
      fantasia:
        "A fantasia combina o Susanoo, sua armadura espectral feita de chakra, com Karasu, os corvos que " +
        "acompanham suas técnicas — tornando esta a edição mais cobiçada da coleção."
    }
  }
];

const summonBtn      = document.getElementById("summon-btn");
const plushImage     = document.getElementById("plush-image");
const rareAura       = document.getElementById("rare-aura");
const rarityBadge    = document.getElementById("rarity-badge");
const plushName      = document.getElementById("plush-name");
const plushCostume   = document.getElementById("plush-costume");
const textHistoria   = document.getElementById("text-historia");
const textPapel      = document.getElementById("text-papel");
const textFantasia   = document.getElementById("text-fantasia");
const collectionList = document.getElementById("collection-list");
const htmlEl         = document.documentElement;


const sfxClick   = document.getElementById("sfx-click");
const sfxVictory = document.getElementById("sfx-victory");

function playSound(audioElement) {
  if (!audioElement) return;
  try {
    audioElement.currentTime = 0;
    audioElement.play().catch(() => {
    });
  } catch (err) {
    console.warn("Não foi possível reproduzir o áudio:", err);
  }
}

function drawWeightedPlush() {
  const totalWeight = PLUSH_COLLECTION.reduce((sum, p) => sum + p.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const plush of PLUSH_COLLECTION) {
    if (roll < plush.weight) return plush;
    roll -= plush.weight;
  }
  return PLUSH_COLLECTION[0];
}


function applyPlushToUI(plush) {
  htmlEl.setAttribute("data-theme", plush.theme);

  plushName.textContent    = plush.name;
  plushCostume.textContent = plush.costume;
  plushImage.src = plush.image;
  plushImage.alt = plush.alt;

  textHistoria.textContent = plush.texts.historia;
  textPapel.textContent    = plush.texts.papel;
  textFantasia.textContent = plush.texts.fantasia;

  rarityBadge.textContent = plush.rare ? "★ RARO ★" : "Comum";
  rarityBadge.classList.toggle("rare", plush.rare);

  rareAura.classList.toggle("active", plush.rare);

  document.querySelectorAll(".collection-item").forEach((el) => {
    el.classList.toggle("is-current", el.dataset.id === plush.id);
  });
}


function animateSummon(plush, onMidAnimation) {
  plushImage.classList.remove("is-summoning", "is-rare");
  void plushImage.offsetWidth;

  plushImage.classList.add(plush.rare ? "is-rare" : "is-summoning");

  window.setTimeout(() => {
    onMidAnimation();
  }, 260);
}
function renderCollectionGallery() {
  collectionList.innerHTML = "";
  PLUSH_COLLECTION.forEach((plush) => {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.dataset.id = plush.id;
    li.innerHTML = `
      ${plush.name}
      <span class="rarity-tag">${plush.rare ? "★ Raro · 5%" : plush.weight + "%"}</span>
    `;
    collectionList.appendChild(li);
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels  = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      document
        .querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`)
        .classList.add("active");
    });
  });
}

summonBtn.addEventListener("click", () => {
  playSound(sfxClick);

  const result = drawWeightedPlush();

  animateSummon(result, () => {
    applyPlushToUI(result);
    if (result.rare) {
      playSound(sfxVictory);
    }
  });
});

function init() {
  renderCollectionGallery();
  setupTabs();
  applyPlushToUI(PLUSH_COLLECTION.find((p) => p.id === "sasuke"));
}

document.addEventListener("DOMContentLoaded", init);
