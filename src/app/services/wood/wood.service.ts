import { Injectable } from '@angular/core';
import { Wood } from 'src/app/shared/models/wood';
import { Tag } from 'src/app/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class WoodService {

  constructor() { }

  getWoodById(id: number): Wood {
    return this.getAll().find(wood => wood.id == id)!;
  }

  getAllWoodsBySearchTerm(searchTerm:string) :Wood[] {
    return this.getAll().filter(wood => wood.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 10 },
      { name: 'Cherry', count: 2 },
      { name: 'Pecan', count: 2 },
      { name: 'Oak', count: 2 },
      { name: 'Hickory', count: 2 },
      { name: 'Apple', count: 2 },
    ];
  }

  getAllWoodsByTag(tag: string): Wood[] {
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(wood => wood.tags?.includes(tag));
  }

  getAll(): Wood[] {
    return [
      { 
        id: 1,
        name: 'Cherry Wood', 
        price: 20,
        imageUrl: '/assets/images/foods/image0.jpeg',
        tags: ['Cherry', 'Wood'],
      },
      {
        id: 2,
        name: 'Pecan Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image1.jpeg',
        tags: ['Pecan', 'Wood'],
      },
      {
        id: 4,
        name: 'Oak Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image6.jpeg',
        tags: ['Oak', 'Wood'],
      },
      {
        id: 5,
        name: 'Hickory Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image4.jpeg',
        tags: ['Hickory', 'Wood'],
      },
      {
        id: 6,
        name: 'Apple Wood',
        price: 20, 
        imageUrl: '/assets/images/foods/image5.jpeg',
        tags: ['Apple', 'Wood']
      },
       { 
        id: 1,
        name: 'Cherry Wood', 
        price: 20,
        imageUrl: '/assets/images/foods/image0.jpeg',
        tags: ['Cherry', 'Wood'],
      },
      {
        id: 2,
        name: 'Pecan Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image1.jpeg',
        tags: ['Pecan', 'Wood'],
      },
      {
        id: 4,
        name: 'Oak Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image6.jpeg',
        tags: ['Oak', 'Wood'],
      },
      {
        id: 5,
        name: 'Hickory Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image4.jpeg',
        tags: ['Hickory', 'Wood'],
      },
      {
        id: 6,
        name: 'Apple Wood',
        price: 20, 
        imageUrl: '/assets/images/foods/image5.jpeg',
        tags: ['Apple', 'Wood'],
      },
    ];
  }
}
