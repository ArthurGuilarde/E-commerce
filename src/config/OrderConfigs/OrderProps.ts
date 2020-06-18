export interface OrderProps {
  user_id: string
  product_id: string
  product_qt: number
  status: 'Em preparo' | 'Enviado' | 'Entregue'
  payment_status: 'Aguardando Pagamento' | 'Pago'
}
