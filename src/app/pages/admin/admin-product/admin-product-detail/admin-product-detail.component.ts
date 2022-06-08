import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductCart } from 'src/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
id:string;
product:Product;
cartValue:number;
  constructor(
    private activateRoute:ActivatedRoute,
    private productService: ProductService
  ) { 
    this.id='';
    this.product={
      _id:0,
      name:''
    };
    this.cartValue=1;
  }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id']
    console.log(this.id);
    this.productService.getProduct(this.id).subscribe((data)=>{
      this.product=data;
    })
  }
  onChangeCartValue(event:any){
    this.cartValue=event.target.value;
  }
  onAddToCart(){
    // định nghĩa 1 sp trong giỏ hàng có cấu trúc là gì 
    const addItem = {
      ...this.product,value:+this.cartValue
    };
    // console.log(cartItem);
    // nghiệp vụ thêm sp vào giỏ
    // 1 . lấy ra toàn bộ sp trong giỏ 
    const cartItems = JSON.parse(localStorage.getItem('cart')||'[]')
    // 2. kieemr tra trong giỏ đã có phần tử có id giống cartItem chưa 
    const exitsItem = cartItems.find((item:ProductCart)=>item._id===addItem._id);
    if(!exitsItem){
      cartItems.push(addItem);
    }else{
      exitsItem.value+=addItem.value;
    }
    localStorage.setItem('cart',JSON.stringify(cartItems));
    this.cartValue=1;
  };
  


}
