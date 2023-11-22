export type ISolutionModel = ISolutionData & {
  comments: {
    OwnerUid: string
    text: string
    rating: number
    createdAt: Date
  }[]
}

export type ISolutionData = {
  solutionId: string
  name: string
  type: string
  muscle: string
  items?: string[]
  level: string
  solutions: string[]
  pictures: string[]
  videoUrl?: string
}
