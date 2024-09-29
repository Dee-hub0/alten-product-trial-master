import { Routes } from "@angular/router";
import { HomeComponent } from "./shared/features/home/home.component";
import { CartComponent } from "app/shopping-cart/features/cart.component";
import { ContactComponent } from "app/contact/features/contact.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.routes").then((m) => m.PRODUCTS_ROUTES)
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];