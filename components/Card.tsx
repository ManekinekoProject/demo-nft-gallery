type TAttr = {
  trait_type: string
  value: string
}

type TProps = {
  token: IToken
}

const Card = ({ token }: TProps) => {
  return (
    <div className="flex flex-col sm:flex-row mb-4 bg-slate-100 rounded-2xl">
      <img
        className="w-full sm:w-1/3 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl"
        src={token.image}
      ></img>

      <div className="p-4">
        <div className="mb-2 flex items-center">
          <p className="font-bold">上個月：</p>
          <p>{token.attributes.lastMonth} 點</p>
        </div>

        <div className="mb-2 flex items-center">
          <p className="font-bold">已領取：</p>
          <p>{token.attributes.claimed} 點</p>
        </div>

        <div className="mb-2 flex items-center">
          <p className="font-bold">未領取：</p>
          <p>{token.attributes.unclaim} 點</p>
        </div>

        {token.description && (
          <div className="mb-2">
            <p className="font-bold">圖片故事：</p>
            <p>{token.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
