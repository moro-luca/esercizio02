import { Injectable } from '@angular/core';
import { Item } from '../item';

const ITEMS = [{
  name: "Patate",
  quantity: 1,
  checked: false
},
{
  name: "Pasta",
  quantity: 2,
  checked: false

}, {
  name: "Pane",
  quantity: 1,
  checked: false
}]


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }
}
