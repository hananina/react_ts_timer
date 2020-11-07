// import React, { FC, useEffect, useMemo, useState } from 'react'
import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Icon, Statistic } from 'semantic-ui-react'
//import { getPrimes } from './utils/math-tool'
import './Timer.css'

type TimerProps = {
  limit: number
}

const Timer: FC<TimerProps> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit)

  //const primes = useMemo(() => getPrimes(limit), [limit])

  const reset = () => setTimeLeft(limit)
  const tick = () => setTimeLeft((t) => t - 1)
  
  // useEffect第2引数に[]から配列を渡すと、初回のレンダリング時にのみ第一関数が実行される。
  // setIntervalで一秒ずつチクタクする。
  // アンマウントするときに返り値に指定したclearInterval関数が実行される。
  
  useEffect(() => {
    // setInterval() は戻り値にユニークなインターバル ID を返す。放っとくとずっとタイマーが生き残り続けてしまう、
    // アンマウントされるときにそのIDを指定してclearInterval()を実行すること
    const timerId = setInterval(tick, 1000)
    
    return () => clearInterval(timerId)
    // 第1引数として渡す関数がreturnで他の関数を返すようにしておくと、そのコンポーネントがアンマウントされるときに実行してくれる。
  }, [])
  // useEffectの第2引数には変数の配列を渡せるようになってる。
  // 設定された変数がひとつでも前のレンダリング時と比較して差分があったときだけ、第1引数の関数が実行される｜依存配列(dependencies array)

  // これは[timeLeft, limit]に変更があったときだけ第1引数に渡された関数が実行される
  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit)
  }, [timeLeft, limit])
  
  return ( 
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>
        {/* <Statistic.Value className={primes.includes(timeLeft) ? 'prime-number' : undefined} > */}
          {timeLeft}
        </Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
            Reset
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Timer
