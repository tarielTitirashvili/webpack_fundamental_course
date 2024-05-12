import React, {Suspense} from 'react'
import Loader from '@/components/loader'

type Props = {
  children: React.ReactNode
}

const WithSuspense = ({children}: Props) => {
  return (
    <Suspense fallback={<Loader/>}>
      {children}
    </Suspense>
  )
}

export default WithSuspense