type TAttr = {
  trait_type: string
  value: string
}

type TProps = {
  token: IToken
}

const Card = ({ token }: TProps) => {
  return (
    <div className="flex flex-col md:flex-row mb-4 bg-slate-100 hover:bg-slate-200 duration-200 rounded-2xl">
      <div
        className="h-48 md:h-60 w-full md:w-1/3 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${token.image})` }}
      ></div>

      <div className="p-4">
        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">上個月：</p>
          <p>{token.attributes.lastMonth} 點</p>
        </div>

        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">已領取：</p>
          <p>{token.attributes.claimed} 點</p>
        </div>

        <div className="mb-2 flex justify-center md:justify-start items-center">
          <p className="font-bold">未領取：</p>
          <p>{token.attributes.unclaim} 點</p>
        </div>

        {token.description && (
          <div className="mb-2 flex justify-center md:justify-start items-center">
            <p className="font-bold">圖片故事：</p>
            <p>{token.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
