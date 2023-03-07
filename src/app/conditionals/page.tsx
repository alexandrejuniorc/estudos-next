import React from 'react'

const Conditionals = () => {
  const numberA = 1

  return (
    <>
      <h2>Condicionais no JSX</h2>
      {/* retorna 0 na tela, nunca use dessa forma  */}
      {numberA && <p>Title</p>}

      {/* melhor forma é transformando em booleano */}
      {!!numberA && <p>Title</p>}
    </>
  )
}

export default Conditionals
