import React, { useState } from 'react'
import { Container } from './styles'

import { gql } from 'apollo-boost'

import { useClient } from '../../hooks/ClientGraphql'

interface ProductsProps {
  id: string
  name: string
  description: string
  price: number
  img: string
}

const QueryProducts = gql`
  {
    products {
      id
      name
      description
      stock
      price
      img
    }
  }
`

const Store: React.FC = () => {
  const [products, setProducts] = useState([] as ProductsProps[])
  const { client } = useClient()

  client
    .query({ query: QueryProducts })
    .then((resp) => setProducts(resp.data.products))
    .catch((err) => console.log(err))

  return (
    <Container>
      {products.map((product) => (
        <section key={product.id}>
          <img src={'http://localhost:8080/' + product.img} alt="oops!" />
          <div>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <h3>{product.price}</h3>
          </div>
        </section>
      ))}
    </Container>
  )
}

export default Store
