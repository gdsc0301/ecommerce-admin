'use client'

import {NextUIProvider} from '@nextui-org/react'
import { StrictMode } from 'react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </StrictMode>
  )
}