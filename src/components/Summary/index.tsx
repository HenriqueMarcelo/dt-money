import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SummaryCard, SummaryContainer } from './style'

export function Summary() {
  const theme = useTheme()
  const { transactions } = useContext(TransactionsContext)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>R$ 17.405,50</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>R$ 17.405,50</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>R$ 17.405,50</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
