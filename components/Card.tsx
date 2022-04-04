import { useTranslation } from 'next-i18next'

type TProps = {
  token: IToken
}

const Card = ({ token }: TProps) => {
  const [t] = useTranslation('token')

  return (
    <div className="flex flex-col md:flex-row mb-4 bg-slate-100 hover:bg-slate-200 duration-200 rounded-2xl">
      <div
        className="h-48 md:h-60 w-full md:w-1/3 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${token.image})` }}
      ></div>

      <div className="p-4">
        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">{t('no')}：</p>
          <p>
            {token.name}
          </p>
        </div>
        
        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">{t('lastMonth')}：</p>
          <p>
            {token.attributes.lastMonth} {t('point')}
          </p>
        </div>

        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">{t('claimed')}：</p>
          <p>
            {token.attributes.claimed} {t('point')}
          </p>
        </div>

        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">{t('unclaimed')}：</p>
          <p>
            {token.attributes.unclaim} {t('point')}
          </p>
        </div>

        <div className="mb-2 flex justify-center md:justify-start items-center">
          <button className="w-full my-2 sm:my-0 inline-flex justify-center items-center border shadow-sm py-2 text-base font-medium focus:outline-none sm:text-sm border-transparent bg-blue-500 text-white hover:bg-blue-700">
            領取招財金
          </button>
        </div>

        {token.description && (
          <div className="mb-2 flex justify-center md:justify-start items-center">
            <p className="font-bold">{t('description')}：</p>
            <p>{token.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
