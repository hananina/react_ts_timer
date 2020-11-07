import React, { FC, useState } from 'react'
import { Button, Card, Icon, Statistic } from 'semantic-ui-react'
import './Counter.css'

type CounterProps = {
  initialCount: number
}

const Counter: FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <Card>
      <p className="header">You clicked {count} times</p>
      <Button color="blue" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </Card>
  )
}

export default Counter
