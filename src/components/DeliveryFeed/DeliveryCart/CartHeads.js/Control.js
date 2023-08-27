import React from 'react'

const Control = () => {
  return (
    <div className="flex items-center justify-around px-2">
    <div
      className="border-2 border-grey px-2 cursor-pointer"
      onClick={() => handleDecrement(items)}
    >
      -
    </div>
    <div className="quantity p-2">{items.count}</div>
    <div
      className="border-2 border-grey px-2 cursor-pointer"
      onClick={() => handleIncrement(items)}
    >
      +
    </div>
  </div>
  )
}

export default Control
