/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

export function useUpdateInterval() {
  const [state, setState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => state + 1)
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log(`state`, state)

  return state
}
