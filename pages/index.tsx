import { ExternalLinkIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import Card from '@/components/Card'
import Creator from '@/components/Creator'
import Language from '@/components/Language'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import SearchBar from '@/components/SearchBar'
import useTokens from '@/hooks/useTokens'

import Button from '@/components/Button'

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'token'])

  const { data: tokensData, isLoading: tokensLoading } = useTokens()

  const [searchContent, setSearchContent] = useState('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false)
  const [selectedToken, setSelectedToken] = useState<IToken | undefined>()

  // @ts-ignore
  const list = tokensData?.filter(
    // @ts-ignore
    (item) =>
      item?.name.includes(searchContent) ||
      item?.attributes?.lastMonth?.includes(searchContent)
  )

  const onImgClick = (tokenId: string) => {
    // @ts-ignore
    const token = tokensData.find((token) => token.tokenId === tokenId)
    if (token) {
      setSelectedToken(token)
      setIsModalOpen(true)
    }
  }

  return (
    <Layout title={t('title')}>
      <header className="flex justify-center">
        <h1 className="text-3xl text-blue-500 font-bold my-4">{t('title')}</h1>
      </header>

      <div className="container mx-auto">
        <div>
          <Language />
          <Creator />
          <Button
            type="primary"
            className="sm:mr-4"
            onClick={() => setIsContactModalOpen(true)}
          >
            {t('contact')}
          </Button>
          <SearchBar
            searchContent={searchContent}
            setSearchContent={setSearchContent}
          />
        </div>

        <div className="mt-6">
          {tokensLoading ? (
            <div className="text-center text-xl font-bold">
              {t('loading')}...
            </div>
          ) : // @ts-ignore
          tokensData.length > 0 ? (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* @ts-ignore */}
              {list.map((token: IToken, index: number) => {
                return (
                  <Card
                    key={`token-${index}`}
                    token={token}
                    onImgClick={onImgClick}
                  />
                )
              })}
            </section>
          ) : (
            <div className="text-center text-xl font-bold">
              {t('notFound', { ns: 'token' })}
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} hide={() => setIsModalOpen(false)}>
        <Modal.Body>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mb-2 flex justify-center md:justify-start items-center">
                <p className="font-bold">{t('author', { ns: 'token' })}：</p>
                <p>{selectedToken?.author}</p>
              </div>

              {/* <div className="mb-2 flex justify-center md:justify-start items-center">
                <p className="font-bold">{t('createdAt', { ns: 'token' })}：</p>
                <p>{selectedToken?.createdAt}</p>
              </div> */}

              <div className="mb-2 flex justify-center md:justify-start items-center">
                <p className="font-bold">{t('no', { ns: 'token' })}：</p>
                <p>{selectedToken?.name}</p>
              </div>

              {/* <div className="mb-2">
                <p className="font-bold">
                  {t('description', { ns: 'token' })}：
                </p>
                <p>{selectedToken?.description}</p>
              </div> */}

              <div className="mb-2 text-blue-500">
                <a
                  href={`https://opensea.io/assets/matic/0xa591f08ab6b0bfda8fbd3ecf8699f148d4a0169e/${selectedToken?.tokenId}`}
                  className="inline-flex items-center hover:underline cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon className="shrink-0 h-5 mr-1" />
                  {t('buyNow', { ns: 'token' })}
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button type="light" onClick={() => setIsModalOpen(false)}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={isContactModalOpen}
        hide={() => setIsContactModalOpen(false)}
      >
        <Modal.Body>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
              <p>您好，我們提供專屬 NFT 鑄造服務，歡迎與我們聯絡！</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button type="light" onClick={() => setIsContactModalOpen(false)}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

// @ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'token'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
