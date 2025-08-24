# 🛍️ E-commerce App

A modern **E-commerce App** built with **Angular** that provides users with a seamless shopping experience.

## 🚀 Features

🔹 User authentication (Login/Register)
🔹 Browse products with categories
🔹 Add to cart and checkout system
🔹 Responsive design for mobile & desktop
🔹 Search and filter functionality

## 🛠️ Technologies Used

- **Angular** - Frontend framework
- **TypeScript** - Programming language
- **Tailwind CSS** - UI styling
- **HTML** - Webpage structure

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zey3dem3d/E-commerce-App.git
   cd E-commerce-App

2. **Install dependencies:**
   ```bash
   npm install

3. **Run the development server:**
   ```bash
   ng s -o

## How to Use  
- Open the [Live Demo](https://e-commerce-app-khad.vercel.app) or clone the repository.

## Folder Structure
```
E-commerce-App/
├── .editorconfig
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
├── angular.json
├── package-lock.json
├── package.json
├── public/
│   ├── icon.ico
│   ├── images/
│   │   ├── banner-4.jpeg
│   │   ├── blog-img-1.jpeg
│   │   ├── blog-img-2.jpeg
│   │   ├── error.png
│   │   ├── error.svg
│   │   ├── footerImg.png
│   │   ├── footerImg2.png
│   │   ├── freshcart-logo.svg
│   │   ├── grocery-banner-2.jpeg
│   │   ├── grocery-banner.png
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   ├── img4.jpg
│   │   ├── light-patten.svg
│   │   ├── slider-2.jpeg
│   │   ├── slider-image-1.jpeg
│   │   ├── slider-image-2.jpeg
│   │   ├── slider-image-3.jpeg
│   │   ├── slider1.jpg
│   │   ├── slider2.jpg
│   │   ├── slider3.jpg
│   │   ├── slider4.jpg
│   │   ├── slider5.jpg
│   │   ├── slider6.jpg
│   │   ├── slider7.jpg
│   │   ├── slider8.jpg
│   │   └── Weather_files/
│   │       ├── bootstrap.bundle.min.js
│   │       ├── bootstrap.min.css
│   │       ├── logo.png
│   │       ├── main.js
│   │       └── style.css
│   └── test.jpeg
├── README.md
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.server.ts
│   │   ├── app.routes.ts
│   │   ├── core/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   │   ├── login/
│   │   │   │   │   │   ├── login.component.html
│   │   │   │   │   │   ├── login.component.scss
│   │   │   │   │   │   └── login.component.ts
│   │   │   │   │   ├── not-found/
│   │   │   │   │   │   ├── not-found.component.html
│   │   │   │   │   │   ├── not-found.component.scss
│   │   │   │   │   │   └── not-found.component.ts
│   │   │   │   │   ├── register/
│   │   │   │   │   │   ├── register.component.html
│   │   │   │   │   │   ├── register.component.scss
│   │   │   │   │   │   └── register.component.ts
│   │   │   │   │   └── reset-password/
│   │   │   │   │       ├── reset-password.component.html
│   │   │   │   │       ├── reset-password.component.scss
│   │   │   │   │       └── reset-password.component.ts
│   │   │   │   └── services/
│   │   │   │       ├── auth.service.ts
│   │   │   │       └── reset-password.service.ts
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── is-logged.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   ├── catch-error.interceptor.ts
│   │   │   │   └── loading.interceptor.ts
│   │   │   ├── layouts/
│   │   │   │   ├── auth-layout/
│   │   │   │   │   ├── auth-layout.component.html
│   │   │   │   │   ├── auth-layout.component.scss
│   │   │   │   │   └── auth-layout.component.ts
│   │   │   │   └── main-layout/
│   │   │   │       ├── main-layout.component.html
│   │   │   │       ├── main-layout.component.scss
│   │   │   │       └── main-layout.component.ts
│   │   │   └── models/
│   │   │       └── auth.ts
│   │   ├── features/
│   │   │   ├── brands/
│   │   │   │   ├── components/
│   │   │   │   │   └── brand-list/
│   │   │   │   │       ├── brand-list.component.html
│   │   │   │   │       ├── brand-list.component.scss
│   │   │   │   │       └── brand-list.component.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── brands.ts
│   │   │   │   └── services/
│   │   │   │       └── brands.service.ts
│   │   │   ├── cart/
│   │   │   │   ├── components/
│   │   │   │   │   ├── cart-item/
│   │   │   │   │   │   ├── cart-item.component.html
│   │   │   │   │   │   ├── cart-item.component.scss
│   │   │   │   │   │   └── cart-item.component.ts
│   │   │   │   │   └── cart-list/
│   │   │   │   │       ├── cart-list.component.html
│   │   │   │   │       ├── cart-list.component.scss
│   │   │   │   │       └── cart-list.component.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── cart.interface.ts
│   │   │   │   └── services/
│   │   │   │       └── cart.service.ts
│   │   │   ├── category/
│   │   │   │   ├── components/
│   │   │   │   │   └── category/
│   │   │   │   │       ├── category.component.html
│   │   │   │   │       ├── category.component.scss
│   │   │   │   │       └── category.component.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── categories.ts
│   │   │   │   └── services/
│   │   │   │       └── category.service.ts
│   │   │   ├── home/
│   │   │   │   └── components/
│   │   │   │       ├── category-slider/
│   │   │   │       │   ├── category-slider.component.html
│   │   │   │       │   ├── category-slider.component.scss
│   │   │   │       │   └── category-slider.component.ts
│   │   │   │       ├── home/
│   │   │   │       │   ├── home.component.html
│   │   │   │       │   ├── home.component.scss
│   │   │   │       │   └── home.component.ts
│   │   │   │       └── main-slider/
│   │   │   │           ├── main-slider.component.html
│   │   │   │           ├── main-slider.component.scss
│   │   │   │           └── main-slider.component.ts
│   │   │   ├── order/
│   │   │   │   ├── components/
│   │   │   │   │   ├── checkout/
│   │   │   │   │   │   ├── checkout.component.html
│   │   │   │   │   │   ├── checkout.component.scss
│   │   │   │   │   │   └── checkout.component.ts
│   │   │   │   │   └── orders/
│   │   │   │   │       ├── orders.component.html
│   │   │   │   │       ├── orders.component.scss
│   │   │   │   │       └── orders.component.ts
│   │   │   │   └── services/
│   │   │   │       └── order.service.ts
│   │   │   ├── product/
│   │   │   │   ├── components/
│   │   │   │   │   ├── product-card/
│   │   │   │   │   │   ├── product-card.component.html
│   │   │   │   │   │   ├── product-card.component.scss
│   │   │   │   │   │   └── product-card.component.ts
│   │   │   │   │   ├── product-details/
│   │   │   │   │   │   ├── product-details.component.html
│   │   │   │   │   │   ├── product-details.component.scss
│   │   │   │   │   │   └── product-details.component.ts
│   │   │   │   │   └── product-list/
│   │   │   │   │       ├── product-list.component.html
│   │   │   │   │       ├── product-list.component.scss
│   │   │   │   │       └── product-list.component.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── product.ts
│   │   │   │   └── services/
│   │   │   │       └── products.service.ts
│   │   │   └── wishlist/
│   │   │       ├── components/
│   │   │       │   └── wishlist/
│   │   │       │       ├── wishlist.component.html
│   │   │       │       ├── wishlist.component.scss
│   │   │       │       └── wishlist.component.ts
│   │   │       └── services/
│   │   │           └── wishlist.service.ts
│   │   └── shared/
│   │       ├── components/
│   │       │   ├── footer/
│   │       │   │   ├── footer.component.html
│   │       │   │   ├── footer.component.scss
│   │       │   │   └── footer.component.ts
│   │       │   ├── navbar/
│   │       │   │   ├── navbar.component.html
│   │       │   │   ├── navbar.component.scss
│   │       │   │   └── navbar.component.ts
│   │       │   └── validation-messages/
│   │       │       ├── validation-messages.component.html
│   │       │       ├── validation-messages.component.scss
│   │       │       └── validation-messages.component.ts
│   │       ├── helpers/
│   │       │   └── password-match.ts
│   │       ├── pipes/
│   │       │   ├── search.pipe.ts
│   │       │   └── stock-status.pipe.ts
│   │       └── services/
│   │           └── flowbite.service.ts
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── server.ts
│   ├── styles.scss
│   └── tailwindcss
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```
