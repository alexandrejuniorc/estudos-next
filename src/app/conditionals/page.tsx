'use client'

import { useState } from 'react'

const Conditionals = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <>
      <h2>Condicionais no JSX</h2>

      {/* forma de renderização que não reaproveita a tag, muito útil pra alterar a tag que não vai ser reaproveitada */}

      <div>{isValid && <p>é válido</p>}</div>

      <>{!isValid && <p>não é válido</p>}</>

      <button onClick={() => setIsValid(!isValid)}>Toogle</button>
    </>
  )
}

export default Conditionals
