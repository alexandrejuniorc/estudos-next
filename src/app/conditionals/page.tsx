'use client'

import React from 'react'

const Conditionals = () => {
  const isLoading = false
  const isError = false
  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      address: '123 Main St',
    },
    {
      id: 2,
      name: 'João Doe',
      age: 20,
      address: '456 Main St',
    },
  ]

  return (
    <>
      <h2>Condicionais no JSX</h2>

      {/* melhor maneira de tratar estados de uma api */}
      {isLoading && <p>Loading...</p>}

      {isError && <p>Error...</p>}

      {!isLoading &&
        !isError &&
        data.length > 0 &&
        data.map((person) => {
          return (
            <div key={person.id}>
              <p>{person.name}</p>
              <p>{person.age}</p>
              <p>{person.address}</p>
            </div>
          )
        })}

      {/*   {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {isError ? (
            <>
              <p>Error...</p>
            </>
          ) : (
            <>
              {data.map((person) => {
                return (
                  <div key={person.id}>
                    <p>{person.name}</p>
                    <p>{person.age}</p>
                    <p>{person.address}</p>
                  </div>
                )
              })}
            </>
          )}
        </>
      )} */}
    </>
  )
}

export default Conditionals
