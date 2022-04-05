import { useTranslation } from 'next-i18next'

const SearchBar = ({
  searchContent,
  setSearchContent,
}: {
  searchContent: any
  setSearchContent: any
}) => {
  const [t] = useTranslation('common')

  const onChange = (e: any) => {
    setSearchContent(e.target.value)
  }

  return (
    <input
      className="w-full my-2 sm:my-0 sm:w-auto inline-flex justify-center items-center rounded-xl border shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm"
      placeholder={t('search')}
      onChange={onChange}
      value={searchContent}
    />
  )
}

export default SearchBar
