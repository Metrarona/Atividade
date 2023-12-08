class DynamicList { // Declaração da classe DynamicList
  constructor() { // Construtor da classe
    this.head = null // Inicializa a cabeça da lista como nula
    this.length = 0 // Inicializa o comprimento da lista como 0
  }

  getLast() { // Método para obter o último nó da lista
    let i = this.head // Começa da cabeça da lista
    while (i.next != null) { // Enquanto o próximo nó não for nulo
      i = i.next // Vai para o próximo nó
    }
    return i // Retorna o último nó
  }

  append(value) { // Método para adicionar um valor ao final da lista
    if (!value) { // Se o valor não for fornecido
      throw new Error('Informe um valor válido') // Lança um erro
    }

    const node = new Node(value) // Cria um novo nó com o valor fornecido

    if (this.head == null) { // Se a lista estiver vazia
      this.head = node // O novo nó se torna a cabeça da lista
    } else { // Se a lista não estiver vazia
      this.getLast().next = node // O próximo do último nó se torna o novo nó
    }
    this.length++ // Incrementa o comprimento da lista
  }

  insert(position, value) { // Método para inserir um valor em uma posição específica na lista
    if (position < 0 || position > this.size()) { // Se a posição for inválida
      throw new Error('Invalid position') // Lança um erro
    }

    if (position == this.length) { // Se a posição for igual ao comprimento da lista
      this.append(value) // Adiciona o valor ao final da lista
      return
    }

    const newNode = new Node(value) // Cria um novo nó com o valor fornecido

    if (position == 0) { // Se a posição for 0
      newNode.next = this.head // O próximo do novo nó se torna a cabeça da lista
      this.head = newNode // O novo nó se torna a cabeça da lista
    } else { // Se a posição não for 0
      let previous = this.head // Começa da cabeça da lista
      let current = previous.next // O nó atual é o próximo do nó anterior
      let index = 1 // Inicializa o índice como 1
      while (index != position) { // Enquanto o índice não for igual à posição
        index++ // Incrementa o índice
        previous = current // O nó anterior se torna o nó atual
        current = current.next // O nó atual se torna o próximo do nó atual
      }
      previous.next = newNode // O próximo do nó anterior se torna o novo nó
      newNode.next = current // O próximo do novo nó se torna o nó atual
    }

    this.length++ // Incrementa o comprimento da lista
  }

  remove(value) { // Método para remover um valor da lista
    if (!value) { // Se o valor não for fornecido
      throw new Error('Digite um valor válido') // Lança um erro
    }
    let current = this.head // Começa da cabeça da lista
    let previous = null // Inicializa o nó anterior como nulo

    while (current != null) { // Enquanto o nó atual não for nulo
      if (current.content === value) { // Se o conteúdo do nó atual for igual ao valor
        break // Sai do loop
      }
      previous = current // O nó anterior se torna o nó atual
      current = current.next // O nó atual se torna o próximo do nó atual
    }
    if (current == null) { // Se o nó atual for nulo
      return null // Retorna nulo
    }

    if (current == this.head) { // Se o nó atual for a cabeça da lista
      this.head = current.next // A cabeça da lista se torna o próximo do nó atual
    } else { // Se o nó atual não for a cabeça da lista
      previous.next = current.next // O próximo do nó anterior se torna o próximo do nó atual
    }
    current.next = null // O próximo do nó atual se torna nulo
    this.length-- // Decrementa o comprimento da lista

    return current.content // Retorna o conteúdo do nó atual
  }

  removeAt(position) { // Método para remover um nó em uma posição específica na lista
    if (position < 0 || position > this.size() - 1) { // Se a posição for inválida
      throw new Error('Invalid position') // Lança um erro
    }

    let current = this.head // Começa da cabeça da lista
    let previous = null // Inicializa o nó anterior como nulo
    let index = 0 // Inicializa o índice como 0
    while (index != position) { // Enquanto o índice não for igual à posição
      index++ // Incrementa o índice
      previous = current // O nó anterior se torna o nó atual
      current = current.next // O nó atual se torna o próximo do nó atual
    }

    if (index == 0) { // Se o índice for 0
      this.head = this.head.next // A cabeça da lista se torna o próximo da cabeça da lista
    } else { // Se o índice não for 0
      previous.next = current.next // O próximo do nó anterior se torna o próximo do nó atual
    }
    current.next = null // O próximo do nó atual se torna nulo
    this.length-- // Decrementa o comprimento da lista
    return current.content // Retorna o conteúdo do nó atual
  }

  size() { // Método para obter o comprimento da lista
    return this.length
  }

  toString(separator = '-') { // Método para obter uma representação em string da lista
    let output = '' // Inicializa a saída como uma string vazia

    if (this.head == null) { // Se a lista estiver vazia
      return output // Retorna a string vazia
    }

    for (let i = this.head; i != null; i = i.next) { // Para cada nó na lista
      output = output + i.content + separator // Adiciona o conteúdo do nó e o separador à saída
    }

    const outputCut = output.length - separator.length // Calcula o comprimento da saída menos o comprimento do separador

    output = output.substring(0, outputCut) // Corta a saída para remover o último separador

    return output // Retorna a saída
  }
}
