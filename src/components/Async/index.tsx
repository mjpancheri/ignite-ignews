import {useEffect, useState } from 'react'

//exemplo para test asincrono
export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 2000);
  }, [])

  return (
    <div>
      <div>Hello World</div>
      {isButtonVisible && <button>Button</button>}
    </div>
  )
}