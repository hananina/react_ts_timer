import React, { FC, useEffect, useState } from 'react'

type CounterProps = {
  initialCount: number
}

const Counter: FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter
