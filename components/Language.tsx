import { useTranslation } from 'next-i18next'

const Language = () => {
  const { i18n } = useTranslation()
  const switchLang = () => {
    if (i18n.language === 'en') i18n.changeLanguage('zh-Hant')
    else i18n.changeLanguage('en')
  }

  return (
    <button
      className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl border shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm border-transparent bg-blue-500 text-white hover:bg-blue-700"
      onClick={switchLang}
    >
      {i18n.language === 'en' ? 'English' : '中文'}
    </button>
  )
}

export default Language
