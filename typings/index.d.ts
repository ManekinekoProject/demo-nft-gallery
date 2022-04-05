interface IAttributes {
  lastMonth: string
  unclaim: string
  claimed: string
}

interface IToken {
  name: string
  tokenId: string
  attributes: IAttributes
  image: string
  description?: string
  author?: string
  createdAt?: string
}
