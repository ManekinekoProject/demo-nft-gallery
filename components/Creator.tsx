import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import Button from '@/components/Button'

const Creator = () => {
  const { i18n } = useTranslation()

  return (
    <Button type="primary" className="sm:mx-4">
      <Link href="https://www.google.com">
        <a>{i18n.language === 'en' ? 'Author' : '作者專區'}</a>
      </Link>
    </Button>
  )
}

export default Creator
