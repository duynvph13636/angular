import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampComponent } from './champ/champ.component';
import { FormComponent } from './form/form.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent,
      },
      {
        path: 'products',
        component: ProductClientComponent,
      },
      {
        path: 'about',
        component: AboutClientComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      // {
      //   path:'',
      //   redirectTo:'users',
      //   pathMatch:'full'
      // },
      // {
      //   path:'users',
      //   component:UserComponent
      // }
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent,
          },
          {
            path: 'create',
            component: AdminProductFormComponent,
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent,
          },
          {
            path: ':id',
            component: AdminProductDetailComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    component: AboutClientComponent,
  },
  {
    path:'auth',
    children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
