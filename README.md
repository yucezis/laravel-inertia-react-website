# Ginevra - Fictional Artist Portfolio | Kurgusal Sanatçı Portfolyosu

[![laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white)](https://laravel.com)
[![react](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![inertia](https://img.shields.io/badge/Inertia.js-9553E9?style=flat&logo=inertia&logoColor=white)](https://inertiajs.com)

---

## Project Description | Proje Açıklaması

**TR:** Bu proje, **Laravel**, **React** ve **Inertia.js** kullanılarak oluşturulmuş kurgusal bir sanatçı için modern bir portfolio ve galeri web sitesidir. Sanatçının eserlerini sergilemesi, blog yazıları paylaşması ve çalışmalarını fiyatlarıyla listelemesi için bir platform sunar. Bu proje bir e-ticaret sitesi değildir; "Mağaza" bölümü, eserleri sepet veya ödeme altyapısı olmadan sergilemek ve filtrelemek için tasarlanmıştır.

> **Not:** Bu sitenin tasarımı, internette bulunan ücretli bir şablon referans alınarak ve üzerinde değişiklikler yapılarak oluşturulmuştur.

**EN:** This project is a modern portfolio and gallery website for a fictional artist, built using **Laravel**, **React**, and **Inertia.js**. It provides a platform for the artist to showcase their work, share blog posts, and list their pieces with prices. This is not an e-commerce project; the "Shop" section is designed for displaying and filtering artworks without a shopping cart or payment system.

> **Note:** The design of this site was created by referencing and modifying a paid template found online.

---

## Features | Özellikler

* **Portfolio Gallery (Portfolio Galerisi):** Categorized display of the artist's work (Drawings, Paintings, Sculptures, etc.).
* **Blog System (Blog Sistemi):** A section for articles about art and the artist's process.
* **Shop Showcase (Mağaza Vitrini):** A page to display artworks with their prices.
    * Filter by Price (Fiyata Göre Filtreleme): *Low to High / High to Low*.
    * Filter by Category (Kategoriye Göre Filtreleme).
    * Filter by Tags (Etiketlere Göre Filtreleme): *Art, Modern, Painting, etc.*
* **Static Pages (Statik Sayfalar):** Includes "About", "Contact", "FAQ", and "Privacy" pages.
* **Newsletter Subscription (Bülten Aboneliği):** A subscription form in the footer for email updates.

---

## Technologies Used | Kullanılan Teknolojiler

* **Backend:** Laravel
* **Frontend:** React
* **Framework (Glue):** Inertia.js
* **Database (Veritabanı):** SQLite

---

## Setup | Kurulum

**TR:**
1.  Projeyi klonlayın: `git clone https://github.com/senin-kullanici-adin/proje-adin.git`
2.  Dizine girin: `cd proje-adin`
3.  PHP bağımlılıklarını yükleyin: `composer install`
4.  NPM bağımlılıklarını yükleyin: `npm install`
5.  `.env.example` dosyasını kopyalayın: `cp .env.example .env`
6.  `.env` dosyasını açın ve veritabanı ayarlarınızı yapın.
7.  Uygulama anahtarını oluşturun: `php artisan key:generate`
8.  Veritabanını migrate edin: `php artisan migrate`
9.  Frontend varlıklarını derleyin: `npm run dev`
10. Sunucuyu başlatın: `php artisan serve`

**EN:**
1.  Clone the repository: `git clone https://github.com/senin-kullanici-adin/proje-adin.git`
2.  Enter the directory: `cd proje-adin`
3.  Install PHP dependencies: `composer install`
4.  Install NPM dependencies: `npm install`
5.  Copy the `.env.example` file: `cp .env.example .env`
6.  Open the `.env` file and configure your database settings.
7.  Generate the application key: `php artisan key:generate`
8.  Run database migrations: `php artisan migrate`
9.  Compile frontend assets: `npm run dev`
10. Start the server: `php artisan serve`

---

## Author / Geliştirici

**Name / İsim:** Zişan Yüce  
**Role / Rol:** Full Stack Developer & Computer Engineering Student 

---

⭐ If you like this project, don’t forget to give it a star!  
⭐ Bu projeyi beğendiysen, yıldız vermeyi unutma!

