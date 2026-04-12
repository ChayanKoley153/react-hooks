import React from 'react'

export default function Child({ item }) {
    
  return (
    <>
      <div key={item.id} style={{display: "flex", justifyContent: "center", alignContent: 'center'}} >
        {item.title}
      </div>
    </>
  )
}
