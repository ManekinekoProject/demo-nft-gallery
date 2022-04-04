import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Card from '@/components/Card'
import Language from '@/components/Language'
import Creator from '@/components/Creator'
import useTokens from '@/hooks/useTokens'

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'token'])

  const { data: tokensData, isLoading: tokensLoading } = useTokens()

  return (
    <div className="px-8 py-4">
      <header className="flex justify-center">
        <h1 className="text-3xl text-blue-500 font-bold">{t('title')}</h1>
      </header>

      <div>
        <Language />
        <Creator />
      </div>

      <div className="mt-6">
        {tokensLoading ? (
          <div className="text-center text-xl font-bold">{t('loading')}...</div>
        ) : // @ts-ignore
        tokensData.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* @ts-ignore */}
            {tokensData.map((token, index) => {
              return <Card key={`token-${index}`} token={token} />
            })}
          </section>
        ) : (
          <div className="text-center text-xl font-bold">
            {t('notFound', { ns: 'token' })}
          </div>
        )}
      </div>
    </div>
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
