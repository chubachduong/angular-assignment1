import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0,[Validators.required,Validators.min(0)]],
    img : ['']
  })
  constructor(
    private productService: ServicesService,
    private formBuilder: FormBuilder) { }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0, 
        img : this.productForm.value.img || ""
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log('Thành công', product)
      })
    }

  }
}
