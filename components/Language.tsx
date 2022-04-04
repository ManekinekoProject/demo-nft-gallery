import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Language = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const switchLang = () => {
    if (i18n.language === 'en') router.push('/', '/', { locale: 'zh-Hant' })
    else router.push('/', '/', { locale: 'en' })
  }

  return (
    <button
      className="w-full my-2 sm:my-0 sm:w-auto inline-flex justify-center items-center border shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm border-transparent bg-blue-500 text-white hover:bg-blue-700"
      onClick={switchLang}
    >
      {i18n.language === 'en' ? 'English' : '中文'}
    </button>
  )
}

export default Language
