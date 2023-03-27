let luckySentences = [
    "A sabedoria vem do aprendizado, e o aprendizado vem da sabedoria.",
    "O sucesso está na jornada, não apenas no destino.",
    "A simplicidade é a chave para a felicidade.",
    "O amor é a resposta para todas as perguntas.",
    "Acredite em si mesmo e siga em frente.",
    "Um sorriso é o melhor remédio para a tristeza.",
    "O respeito é a base de todas as relações saudáveis.",
    "Aprenda com os erros e siga em frente com sabedoria.",
    "A gratidão é a chave para a felicidade duradoura.",
    "A sorte favorece aqueles que trabalham duro.",
    "A paciência é a virtude dos sábios.",
    "O sucesso é o resultado da perseverança e da determinação.",
    "A felicidade está dentro de você, encontre-a.",
    "A verdadeira riqueza está no amor e nas relações humanas.",
    "A vida é uma aventura, aproveite-a.",
    "O medo é apenas uma ilusão que nos impede de viver plenamente.",
    "Seja a mudança que deseja ver no mundo.",
    "O presente é um presente, aproveite-o.",
    "O amor é a linguagem universal da alma.",
    "A humildade é a marca dos grandes homens.",
    "A felicidade não é um destino, é uma jornada.",
    "A sorte é a soma de preparação e oportunidade.",
    "O sucesso é alcançado pela ação, não pelo desejo.",
    "A vida é como um livro, cada capítulo é uma nova aventura.",
    "A liberdade começa na mente e se reflete em nossas ações.",
    "A compaixão é o antídoto para o ódio.",
    "O conhecimento é a chave para a sabedoria.",
    "A mudança é inevitável, mas o crescimento é opcional.",
    "O fracasso é apenas uma oportunidade para recomeçar com mais sabedoria.",
    "O sucesso é medido pelo impacto que temos na vida das outras pessoas."
  ];
  let randomNumber

  function sentencesGenerate() {
    randomNumber = Math.floor(Math.random() *30)
    return randomNumber
 }
let biscuit = document.querySelector('.box-biscuit')
let brokenBiscuit = document.querySelector('.box-broken-biscuit')
let openBiscuit = document.querySelector('.open-biscuit-button')
let openAnotherBiscuit = document.querySelector('.another-biscuit')
let inputSentences = document.querySelector('.lucky-text')

openBiscuit.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (biscuit.style.display !== 'none'){
        biscuit.style.display = 'none';
        brokenBiscuit.style.display = 'flex';
        sentencesGenerate()
        inputSentences.textContent = luckySentences[randomNumber]
        console.log(randomNumber)
    } else {
        alert('Erro inesperado, entre em contato com o suporte')
    }
})

openAnotherBiscuit.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (brokenBiscuit.style.display !== 'none'){
        brokenBiscuit.style.display = 'none';
        biscuit.style.display = 'flex';
    } else {
        alert('Erro inesperado, entre em contato com o suporte')
    }
})

