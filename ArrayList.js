class ArrayList {
  constructor() {
    this.data = new Array() // Inicialização do array para armazenar os dados da lista
  }

  append(value) {
    this.data[this.size()] = value // Adiciona um valor ao final da lista
  }

  insert(position, value) {
    if (position < 0  position > this.size()) { // Verifica se a posição é válida
      throw new Error('Invalid position')
    }

    if (position == this.data.length) { // Se a posição for o final da lista, adiciona o valor
      this.data.push(value)
    } else { // Insere o valor na posição especificada
      this.data.splice(position, 0, value)
    }
  }

  remove(value) {
    let index = this._getIndexOf(value) // Encontra o índice do valor a ser removido

    this.removeAt(index) // Remove o valor na posição encontrada
  }

  removeAt(position) {
    if (position < 0  position > this.size() - 1) { // Verifica se a posição é válida
      throw new Error('Invalid position')
    }

    return this.data.splice(index, 1) // Remove e retorna o valor na posição especificada
  }

  size() {
    return this.data.length // Retorna o tamanho da lista
  }

  toString(separator = '-') {
    return this.data.join(separator) // Converte a lista para uma string separada pelo caractere especificado
  }

  _getIndexOf(value) {
    if (this.data.length == 0) { // Verifica se a lista está vazia
      throw new Error('empty list')
    }

    let i = 0
    while (i < this.data.length) { // Procura pelo índice do valor na lista
      if (this.data[i] == value) {
        break
      }
      i++
    }

    if (i == this.data.length) { // Se o valor não foi encontrado na lista
      throw new Error('not found')
    }

    return i // Retorna o índice do valor encontrado
  }
}
