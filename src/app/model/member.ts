export class Member {
  id: number
  first_name: string
  last_name: string
  team_name: string
  image: string
  title: string
  constructor({
      id = 0,
      first_name = '',
      last_name = '',
      team_name = '',
      image = '',
      title = '',
      ...rest
  }) {
      Object.assign(this, rest)
      this.id = id
      this.first_name = first_name
      this.last_name = last_name
      this.team_name = team_name
      this.image = image
      this.title = title
  }
}
