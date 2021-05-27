import { useState } from 'react'
import { Container, TitleProduct, DeleteButton } from './styles'

import api from '../../services/api'

function BoxProduct({ product }) {

  const [isDeleted, setIsDeleted] = useState(false)

  async function deleteProduct() {
    await api.delete(`products/${product.id}`)
    setIsDeleted(true)
  }

  return (
    <Container isDeleted={isDeleted}>
      <TitleProduct>{product.product}</TitleProduct>
      <DeleteButton
        onClick={deleteProduct}
      >
        Apagar
      </DeleteButton>
    </Container>
  )
}

export default BoxProduct;