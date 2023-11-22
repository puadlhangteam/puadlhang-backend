export type ISolutionModel = {
  name: string
  type: string
  muscle: string
  items?: string[]
  level: string
  solutions: string[]
  pictures: string[]
  videoUrl?: string
  comments: {
    OwnerUid: string
    text: string
    rating: number
    createdAt: Date
  }[]
}
