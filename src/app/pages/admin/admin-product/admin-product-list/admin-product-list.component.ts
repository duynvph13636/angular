import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
products:Product[];
  constructor(private productService:ProductService ) {
    this.products=[]
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=data;
    })
    
   
  } 
  onGetList(){
      this.productService.getProducts().subscribe((data)=>{
        this.products=data
        
      })
    }
  onDelete(id:number){
    const confirmDelete = confirm('Banj cos muon xoa khong?');
    if(confirmDelete&&id){
      console.log(id);
      this.productService.deleteProduct(id).subscribe((data)=>{
        console.log(data);
        this.onGetList();
        
      })
    }
  }

}
