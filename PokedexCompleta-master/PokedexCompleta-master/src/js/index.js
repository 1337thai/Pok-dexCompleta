const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelector('.pokemonCard')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() =>{

//pegando a class OPEN e removendo ela
    const cartaoPokemonAberto = document.querySelector('.open')
    cartaoPokemonAberto.classList.remove('open')


    //pegando o ID do pokemon


    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('open')

    //fazendo a cor do menu trocar
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    const pokemonSelecionado = document.getElementById(idPokemonSelecionado)
    pokemonSelecionado.classList.add('ativo')

    })
})