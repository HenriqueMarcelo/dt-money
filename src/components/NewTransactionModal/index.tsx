import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, OverLay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <OverLay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
