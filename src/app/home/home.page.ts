import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private animationCtrl: AnimationController,) { }

  scrollYPosition = 0;
  private scrollObserver: IntersectionObserver;

  imgToShow: any;

  selectedStock: any;

  stockList: any[] = [
    {
      'id': '1',
      'imgUrl': '../../assets/main/max1.png',
      'largeImg': '../../assets/main/largeImgMax1.png',
      'name': 'Nike Air Max 97',
      'price': 'AED 546',
      'size1': '8',
      'size2': '9'
    },
    {
      'id': '2',
      'imgUrl': '../../assets/main/max2.png',
      'largeImg': '../../assets/main/largeImgMax2.png',
      'name': 'Nike Air Max 97 Shoe',
      'price': 'AED 546',
      'size1': '8',
      'size2': '9'
    },
    {
      'id': '3',
      'imgUrl': '../../assets/main/max3.png',
      'largeImg': '../../assets/main/largeImgMax3.png',
      'name': 'Nike Air Max 270 React',
      'price': 'AED 576',
      'size1': '8',
      'size2': '9'
    }
  ]


  ngOnInit(): void {

  }


  onShopNow() {
    var element = document.getElementById('shop');
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  onStockClick(stock) {
    this.selectedStock = stock.id;
    this.imgToShow = stock.largeImg;
    console.log(this.imgToShow)
  }

  logScrolling(event) {
    this.scrollYPosition = event.detail.scrollTop;
  }



  // mousemove animation
  skew(event: MouseEvent) {
    const middleItem = document.querySelector('.middleItem');

    let x = (middleItem.getBoundingClientRect().left) + (middleItem.clientWidth / 2)
    let y = (middleItem.getBoundingClientRect().top) + (middleItem.clientHeight / 2)

    let radian = Math.atan2(event.pageX - x, event.pageY - y)
    let rotation = ((radian * (45 / Math.PI)) * -1) + 0;
    middleItem.setAttribute("style", `transform:rotate(${rotation}deg); "transition:1s ease-in"`)
  }

}
