import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Card from '@/components/Card'
import useTokens from '@/hooks/useTokens'

const Home: NextPage = () => {
  const { data: tokensData, isLoading: tokensLoading } = useTokens()

  return (
    <div className="px-8 py-4">
      <header className="flex justify-center">
        <h1 className="text-3xl text-blue-500 font-bold">Hello world!</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {tokensLoading ? (
          <div className="text-center text-xl font-bold">Loading...</div>
        ) : tokensData.length > 0 ? (
          tokensData.map((token, index) => {
            return <Card key={`token-${index}`} token={token} />
          })
        ) : (
          <div className="text-center text-xl font-bold">No NFT found.</div>
        )}
      </section>
    </div>
  )
}

export default Home
