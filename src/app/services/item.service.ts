import { Injectable } from '@angular/core';
import { Item } from '../item';

const ITEMS = [{
    name : "Patate",
    quantity: "1 busta",
    checked: false
},
{
  name : "Pasta",
  quantity: "2kg",
  checked: false

},{
  name : "Pane",
  quantity: "1kg",
  checked: false
}]


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[]{
    return ITEMS;
  }
}
