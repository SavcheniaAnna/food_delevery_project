import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {

  dishes = [
    {image: '../../../../../img/menu/Albanian_roll_with_cheese_arugula_and_egg.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/chicken_chops_with_vegetables.jpg'},
    
    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Chicken_Kiev_wit_cheese.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Couscous_stewed-in-sauce_with-mushroom_and_broccoli.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Homemade_chicken_%20skewers_on_a_skewer_wit_%20pepper.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Homemade_egg%20noodles_in_Bulgarian_sauce.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Potato_croquettes_with_cheese_dill_and_rosemary.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Sorrel_soup_with_chicken.jpg'},

    {image: 'file:///D:/%D0%90%D0%BD%D0%BD%D0%B0%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%A1%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D1%8F/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5/final%20progect/img/menu/Thin_milk_pancakes_with_caviar_and_butter.jpg'},
  ];
}
