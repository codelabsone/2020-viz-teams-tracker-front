import { Member } from './member';

export class Team {
  name: string
  members: Member[]
  description: string

  constructor(name: string, description: string){
  this.name = name;
  this.description = description;
  this.members = [];
  }
}
