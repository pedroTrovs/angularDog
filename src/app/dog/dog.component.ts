import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{

  constructor(private service: DogService) {}

  ngOnInit(): void {
    this.gerar();
  }

  gerar() {
    this.service.getRandomDog().subscribe(
      {
        next : newDog => this.dog = newDog
      }
    );
  }

  dog: Dog = {} as Dog;

  getName(): string[]{
    return this.dog.message.split("/")[4].split("-");
  }

}
