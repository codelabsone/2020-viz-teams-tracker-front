import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Team } from '../model/team';
import { Member } from '../model/member';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public teams:Team[] = [
    new Team('Apples', ''),
    new Team('Grape', ''),
    new Team('Carrot', ''),
    new Team('Orange', ''),
    new Team('Banananana', ''),
  ]

  public pics:string[] = ['https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0',
                'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg',
                'https://images.theconversation.com/files/302816/original/file-20191121-474-4oufr9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                'https://cdn.theatlantic.com/thumbor/wE5l9kx5IXhWWjjxCOKbjCk0jog=/438x0:1563x1125/500x500/media/img/mt/2019/03/Dr._Puppers/original.jpg',
                'https://www.guidingeyes.org/wp-content/uploads/2020/01/1-1.jpg',
                'https://i5.walmartimages.com/asr/bb146f24-efe9-4bbf-825f-fe8508c26acb.74a6e274f53ad926e58b3ded102984db.jpeg',
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg',
                'https://images.theconversation.com/files/342682/original/file-20200618-41213-iu7wbs.jpg',
                'https://cdn.theatlantic.com/thumbor/GWu2X7ROvV5fI6MaT0rRJ4UMfHo=/418x89:1998x1668/500x500/media/img/mt/2019/07/GettyImages_138965532/original.jpg',
                'https://static01.nyt.com/images/2020/03/25/magazine/nytkids-dogfashion/nytkids-dogfashion-mobileMasterAt3x.jpg',
                'https://www.mudbay.com/wp-content/uploads/2019/09/Advice-DogWeight-Chubby.jpg',
                'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg'
              ]

  constructor() { }

  ngOnInit(): void {
  }

}
