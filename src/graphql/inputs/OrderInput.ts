import { InputType, Field } from 'type-graphql'
import { OrderProps } from '../../config/OrderConfigs/OrderProps'

@InputType()
export class orderInputType implements OrderProps {
  @Field()
  user_id: string
  @Field()
  product_id: string
  @Field()
  product_qt: number
  @Field()
  status: 'Em preparo' | 'Enviado' | 'Entregue'
  @Field()
  payment_status: 'Aguardando Pagamento' | 'Pago'
}
