import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css'],
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId : string;
  constructor(
    private productService:ProductService,
    private router : Router,
    private activateRoute : ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5),this.onValidateNameHasProduct]),
    });
    this.productId='0';
  }

  ngOnInit(): void {
    this.productId=this.activateRoute.snapshot.params['id'];
    if(this.productId){
       this.productService.getProduct(this.productId).subscribe(data=>{
      this.productForm.patchValue({
        name:data.name
      })
    })
    }
   
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    //1 . lấy ra value cảu formControl name hiện tại 
    const {value} = control;
    //2. kiểm tra theo điều kiện chứa từ khóa 'product'
    if(!value.includes('product')){
      return{hasProductError:true}
    }
    //3. trả về kết quả nếu không lỗi . 
    return null;
  }
  onSubmit() {
    console.log(this.productForm.value);
    //1. lay dữ liệu từ form
    const submitData = this.productForm.value;
    if(this.productId!=='0'||this.productId!==undefined){
      this.productService.UpdateProduct(this.productId,submitData).subscribe(data=>{
        this.router.navigateByUrl('/admin/products')
      })
    }
    //2. call api (Cần định nghĩa service và router điều hướng) 
    this.productService.CreateProduct(submitData).subscribe((data)=>{
      //3. sau khi api call thành công sẽ điều hướng về danh sách 
      this.router.navigateByUrl('/admin/products')
    })
  }
}
