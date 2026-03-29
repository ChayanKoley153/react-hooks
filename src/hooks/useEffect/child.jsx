import React from 'react'

export default function Child({ item }) {
    
  return (
    <>
          <div key={item.id} >{item.title}</div>
    </>
  )
}
