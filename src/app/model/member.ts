export class Member {
  id: number
  first_name: string
  last_name: string
  image: string
  title: string
  team_Id: number
  constructor(
      id: number,
      first_name: string,
      last_name: string,
      image: string,
      title: string,
      team_Id: number
  ) {

      this.id = id
      this.first_name = first_name
      this.last_name = last_name
      this.image = 'https://www.mudbay.com/wp-content/uploads/2019/09/Advice-DogWeight-Chubby.jpg'
      this.title = title
      this.team_Id = team_Id
  }
}
