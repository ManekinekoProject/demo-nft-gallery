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
// import useTokens from '@/hooks/useTokens'

import Button from '@/components/Button'

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'token'])

  // const { data: tokensData, isLoading: tokensLoading } = useTokens()
  const tokensLoading = false
  const tokensData = [
    {
      name: 'NF000',
      tokenId: '1',
      attributes: { lastMonth: '100', unclaim: '12500', claimed: '0' },
      image: '@/public/images/1.png',
      author: '杰森',
      description: '比比小時候是流浪貓，陪伴了我15年，超級招財的啦！',
    },
    {
      name: 'NF001',
      tokenId: '3',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/3.png',
      author: '小白',
      description:
        '我的世界只有你，但你卻只要看到食物誰都可以；但我們還是最好的朋友~兜兜',
    },
    {
      name: 'NF002',
      tokenId: '9',
      attributes: { lastMonth: '100', unclaim: '4500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/9.png',
      author: '',
      description: '《想像》戰士，如實般的壯大沉穩。閉上眼，你，看見自己了嗎？',
    },
    {
      name: 'NF003',
      tokenId: '4',
      attributes: { lastMonth: '100', unclaim: '13500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/4.png',
      author: '',
      description: '',
    },
    {
      name: 'NF004',
      tokenId: '8',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/8.png',
      author: '',
      description:
        '百變的我，就像是繽紛綻放的花朵，就像是階梯盡頭還有一把未知的鎖，就像是用鋼琴鍵盤彈奏美人魚的泡沫，而裝傻的我，也是生命前進的一種方式。',
    },
    {
      name: 'NF005',
      tokenId: '2',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/2.png',
      author: '',
      description: '',
    },
    {
      name: 'NF006',
      tokenId: '5',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/5.png',
      author: '',
      description: '',
    },
    {
      name: 'NF012',
      tokenId: '0',
      attributes: { lastMonth: '100', unclaim: '3000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/0.png',
      author: 'SEAN',
      description: '這是我的100%女孩，希望你/妳也可以遇到你的100%女孩或男孩~💕',
    },
    {
      name: 'NF019',
      tokenId: '10',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/10.png',
      author: '星星',
      description: '我三歲，分很多天一層一層畫的，把拔很愛這張。',
    },
    {
      name: 'NF020',
      tokenId: '16',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/16.png',
      author: '',
      description: '從寂靜的森林中躍出，送你一顆紅蘋果，以表我的愛慕',
    },
    {
      name: 'NF025',
      tokenId: '11',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/11.png',
      author: '',
      description: '',
    },
    {
      name: 'NF026',
      tokenId: '13',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/13.png',
      author: '',
      description: '',
    },
    {
      name: 'NF027',
      tokenId: '12',
      attributes: { lastMonth: '100', unclaim: '2500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/12.png',
      author: '',
      description: '',
    },
    {
      name: 'NF029',
      tokenId: '6',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/6.png',
      author: 'may',
      description: '悠遊於大海中，感受豐富多彩的水中世界，獨特又純真',
    },
    {
      name: 'NF031',
      tokenId: '7',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/7.png',
      author: '',
      description: '',
    },
    {
      name: 'NF032',
      tokenId: '14',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/14.png',
      author: '',
      description: '',
    },
    {
      name: 'NF033',
      tokenId: '15',
      attributes: { lastMonth: '100', unclaim: '1000', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/15.png',
      author: '',
      description: '',
    },
    {
      name: 'NF035',
      tokenId: '18',
      attributes: { lastMonth: '100', unclaim: '900', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/18.png',
      author: '草莓',
      description: '你聽見了嗎？那是....心碎的聲音。',
    },
    {
      name: 'NF036',
      tokenId: '17',
      attributes: { lastMonth: '100', unclaim: '1900', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/17.png',
      author: 'Lu Lu Chang',
      description:
        '我的名字叫小黑，過新年時脖子就會戴上紅包袋，裡面裝的是我最愛的肉乾零食，也一起祝賀大家Happy Chinese New Year ！！',
    },
    {
      name: 'NF044',
      tokenId: '61',
      attributes: { lastMonth: '100', unclaim: '200', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/61.png',
      author: '',
      description: '',
    },
    {
      name: 'NF045',
      tokenId: '62',
      attributes: { lastMonth: '100', unclaim: '200', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/62.png',
      author: '',
      description: '',
    },
    {
      name: 'NF047',
      tokenId: '59',
      attributes: { lastMonth: '100', unclaim: '200', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/59.png',
      author: '',
      description: '',
    },
    {
      name: 'NF049',
      tokenId: '60',
      attributes: { lastMonth: '100', unclaim: '200', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/60.png',
      author: '',
      description: '',
    },
    {
      name: 'NF051',
      tokenId: '24',
      attributes: { lastMonth: '100', unclaim: '3600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/24.png',
      author: '',
      description: '這是一個孤獨的男人於深夜時分，獨自靜望著的寂寞。',
    },
    {
      name: 'NF101',
      tokenId: '19',
      attributes: { lastMonth: '100', unclaim: '2900', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/19.png',
      author: '',
      description: '',
    },
    {
      name: 'NF102',
      tokenId: '20',
      attributes: { lastMonth: '100', unclaim: '1900', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/20.png',
      author: '',
      description: '',
    },
    {
      name: 'NF103',
      tokenId: '21',
      attributes: { lastMonth: '100', unclaim: '900', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/21.png',
      author: '',
      description: '',
    },
    {
      name: 'NF104',
      tokenId: '22',
      attributes: { lastMonth: '100', unclaim: '1800', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/22.png',
      author: '',
      description: '',
    },
    {
      name: 'NF105',
      tokenId: '23',
      attributes: { lastMonth: '100', unclaim: '700', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/23.png',
      author: '',
      description:
        '我是紀綱，台灣最大線上天使投資俱樂部創辦人，也是世界天使投資論壇 (WBAF) 的台灣代表。',
    },
    {
      name: 'NF106',
      tokenId: '25',
      attributes: { lastMonth: '100', unclaim: '700', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/25.png',
      author: '',
      description: '',
    },
    {
      name: 'NF107',
      tokenId: '26',
      attributes: { lastMonth: '100', unclaim: '700', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/26.png',
      author: '',
      description: '',
    },
    {
      name: 'NF108',
      tokenId: '27',
      attributes: { lastMonth: '100', unclaim: '1600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/27.png',
      author: '',
      description: '',
    },
    {
      name: 'NF109',
      tokenId: '28',
      attributes: { lastMonth: '100', unclaim: '700', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/28.png',
      author: '',
      description: '',
    },
    {
      name: 'NF110',
      tokenId: '29',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/29.png',
      author: '',
      description: '',
    },
    {
      name: 'NF111',
      tokenId: '30',
      attributes: { lastMonth: '100', unclaim: '1600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/30.png',
      author: '',
      description: '',
    },
    {
      name: 'NF112',
      tokenId: '31',
      attributes: { lastMonth: '100', unclaim: '2600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/31.png',
      author: '',
      description: '',
    },
    {
      name: 'NF113',
      tokenId: '33',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/33.png',
      author: '',
      description: '',
    },
    {
      name: 'NF114',
      tokenId: '34',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/34.png',
      author: '',
      description: '',
    },
    {
      name: 'NF115',
      tokenId: '35',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/35.png',
      author: '',
      description: '',
    },
    {
      name: 'NF116',
      tokenId: '36',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/36.png',
      author: '',
      description: '',
    },
    {
      name: 'NF117',
      tokenId: '32',
      attributes: { lastMonth: '100', unclaim: '3600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/32.png',
      author: '',
      description: '',
    },
    {
      name: 'NF118',
      tokenId: '37',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/37.png',
      author: '',
      description: '',
    },
    {
      name: 'NF119',
      tokenId: '40',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/40.png',
      author: '',
      description: '',
    },
    {
      name: 'NF120',
      tokenId: '38',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/38.png',
      author: '',
      description: '',
    },
    {
      name: 'NF121',
      tokenId: '39',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/39.png',
      author: '',
      description: '',
    },
    {
      name: 'NF122',
      tokenId: '41',
      attributes: { lastMonth: '100', unclaim: '1600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/41.png',
      author: '',
      description: '',
    },
    {
      name: 'NF123',
      tokenId: '45',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/45.png',
      author: '',
      description: '',
    },
    {
      name: 'NF124',
      tokenId: '42',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/42.png',
      author: '',
      description: '',
    },
    {
      name: 'NF125',
      tokenId: '43',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/43.png',
      author: '',
      description: '',
    },
    {
      name: 'NF126',
      tokenId: '44',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/44.png',
      author: '',
      description: '',
    },
    {
      name: 'NF127',
      tokenId: '48',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/48.png',
      author: '',
      description: '',
    },
    {
      name: 'NF129',
      tokenId: '49',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/49.png',
      author: '',
      description: '',
    },
    {
      name: 'NF130',
      tokenId: '46',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/46.png',
      author: '',
      description: '',
    },
    {
      name: 'NF131',
      tokenId: '47',
      attributes: { lastMonth: '100', unclaim: '600', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/47.png',
      author: '',
      description: '',
    },
    {
      name: 'NF132',
      tokenId: '50',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/50.png',
      author: '',
      description: '',
    },
    {
      name: 'NF133',
      tokenId: '51',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/51.png',
      author: '',
      description: '',
    },
    {
      name: 'NF134',
      tokenId: '52',
      attributes: { lastMonth: '100', unclaim: '500', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/52.png',
      author: '',
      description: '',
    },
    {
      name: 'NF135',
      tokenId: '53',
      attributes: { lastMonth: '100', unclaim: '400', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/53.png',
      author: '',
      description: '',
    },
    {
      name: 'NF136',
      tokenId: '54',
      attributes: { lastMonth: '100', unclaim: '1400', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/54.png',
      author: '',
      description: '',
    },
    {
      name: 'NF137',
      tokenId: '55',
      attributes: { lastMonth: '100', unclaim: '400', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/55.png',
      author: '',
      description: '',
    },
    {
      name: 'NF138',
      tokenId: '56',
      attributes: { lastMonth: '100', unclaim: '400', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/56.png',
      author: '',
      description: '',
    },
    {
      name: 'NF141',
      tokenId: '57',
      attributes: { lastMonth: '100', unclaim: '300', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/57.png',
      author: '',
      description: '',
    },
    {
      name: 'NF143',
      tokenId: '58',
      attributes: { lastMonth: '100', unclaim: '300', claimed: '0' },
      image: 'https://manekin-neko.herokuapp.com/images/58.png',
      author: '',
      description: '',
    },
  ]

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
            onClick={() => window.open('https://forms.gle/acXR2KXdsETJrSJ19')}
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
