import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import { getToken } from '@/api'
import Card from '@/components/Card'

const Home: NextPage = () => {
  const [NFTs, setNFTs] = useState<any[] | undefined>()

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('tokens', getToken, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })

  useEffect(() => {
    console.log('data', data)
  }, [data])

  return (
    <div className="px-8 py-4">
      <header className="flex justify-center">
        <h1 className="text-3xl text-blue-500 font-bold">Hello world!</h1>
      </header>

      <section className="flex flex-wrap justify-center mt-6">
        {NFTs ? (
          NFTs.map((NFT) => {
            return (
              <Card
                key={NFT.value.id + NFT.value.contractAddress}
                image={NFT.value.image}
                id={NFT.value.id}
                title={NFT.value.title}
                description={NFT.value.description}
                address={NFT.value.contractAddress}
                attributes={NFT.value.attributes}
              />
            )
          })
        ) : (
          <div>No NFTs found</div>
        )}
      </section>
    </div>
  )
}

export default Home
