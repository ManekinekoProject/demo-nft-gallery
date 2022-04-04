import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Creator = () => {
  const router = useRouter()
  const { i18n } = useTranslation()

  return (
    <button
      className="w-full my-2 sm:my-0 sm:w-auto inline-flex justify-center items-center border shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm border-transparent bg-blue-500 text-white hover:bg-blue-700 sm:mx-4"
    >
      <Link href='https://www.google.com'>
        <a>{i18n.language === 'en' ? 'Author' : '作者專區'}</a>
      </Link>
    </button>
  )
}

export default Creator
