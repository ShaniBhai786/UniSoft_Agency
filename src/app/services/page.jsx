import React from 'react'
import Tech from '../components/Tech'
import { serviceSchema } from '../lib/schema'

const page = () => {
  return (
    <>
     <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceSchema),
            }}
          />
        <Tech />
    </>
  )
}

export default page