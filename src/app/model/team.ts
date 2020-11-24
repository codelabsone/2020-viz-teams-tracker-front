import { Member } from './member';

export class Team {
  id: number
  name: string
  members: Member[]
  description: string

  constructor(id: number, name: string, description: string){
  this.id = id;
    this.name = name;
  this.description = description;
  }
}
