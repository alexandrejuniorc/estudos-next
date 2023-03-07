'use client'

import React from 'react'

const Conditionals = () => {
  const numberA = 1
  const numberB = 0

  return (
    <>
      <h2>Condicionais no JSX</h2>

      {/* sempre deixei explicito o que você quer que ocorra com os parênteses */}
      <div>{!!(numberA || numberB) && <p>Title</p>}</div>
    </>
  )
}

export default Conditionals
