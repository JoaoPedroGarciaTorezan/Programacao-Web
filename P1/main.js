const nome = document.querySelector('#nome')
const descricao = document.querySelector('#descr')
const b_add = document.querySelector('#add')
const ul = document.querySelector('ul')

b_add.addEventListener('click', () => {

    let input_nome = nome.value
    if(!input_nome){
        alert("Nome do Pokémon não pode ser vazio")
        return;
    }
    let input_descr = descricao.value
    if(!input_descr){
        alert("Descrição do Pokémon não pode ser vazio")
        return;
    }

    ul.innerHTML += AddItem(input_nome,input_descr)
    
})

const remove = (ele) => {

    const div = ele.parentNode

    const li = div.parentNode

    li.remove()
}



const AddItem = (nomeP, descricaoP) => {

    return `
    <li>
        <div class="item">
            <p id="poke_nome">${nomeP}</p>
                        
            <figure>
                <img src="imagem/blastoise.png" alt="figura">
            </figure>
            
            <p>${descricaoP}</p>
            
            <button id="botX" onclick="remove(this)">X</button>
            
        </div>
    </li>
    `

}