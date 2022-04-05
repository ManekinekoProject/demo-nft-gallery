import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import Button from '@/components/Button'

const Language = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const switchLang = () => {
    if (i18n.language === 'en') router.push('/', '/', { locale: 'zh-Hant' })
    else router.push('/', '/', { locale: 'en' })
  }

  return (
    <Button type="primary" onClick={switchLang}>
      {i18n.language === 'en' ? '中文' : 'English'}
    </Button>
  )
}

export default Language
