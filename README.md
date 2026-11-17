# MANA | UV DTF Landing Page — Version 8

نسخه تک‌صفحه‌ای لندینگ مانا برای معرفی خدمات چاپ UV DTF.

## اجرای پروژه در ویندوز

1. پوشه `mana-landing-project-2026` را از ZIP استخراج کنید.
2. همان پوشه را در VS Code باز کنید.
3. در ترمینال VS Code اجرا کنید:

```powershell
npm.cmd install
npm.cmd run dev
```

4. آدرسی که Vite در ترمینال نمایش می‌دهد (معمولاً `http://localhost:5173`) را در مرورگر باز کنید.

اگر دستور `npm` در PowerShell به دلیل Execution Policy اجرا نشد، از `npm.cmd` استفاده کنید.

## ساخت نسخه نهایی

```powershell
npm.cmd run build
```

خروجی نهایی در پوشه `dist` ساخته می‌شود.

## محتویات و تغییرات نسخه 8

- ساختار React + Vite و فایل‌های پیکربندی پروژه حفظ شده‌اند.
- صفحه فقط یک لندینگ تک‌صفحه‌ای است.
- در بخش نمونه‌کارها فقط سه تصویر منتخب باقی مانده‌اند: ترنسفر JL، شمع Lumina و لیبل Skincare.
- چیدمان نمونه‌کارها سه‌ستونه است و عنوان و توضیح در ستون سمت راست قرار دارد.
- تصویر دستگاه در هیرو از فایل اصلی ارسالی استفاده می‌کند.
- شماره تماس در هدر و بخش تماس غیرقابل کلیک است.
- اطلاعات آدرس، ایمیل و اینستاگرام در فوتر قرار دارند.

## نکته
برای نصب وابستگی‌ها اتصال اینترنت لازم است. پوشه `node_modules` عمداً داخل ZIP قرار نگرفته و با `npm.cmd install` ساخته می‌شود.


## V9 visual refinements
- The contact panel is lifted slightly upward.
- The three selected portfolio photos are fully visible, centered and contained within their existing landscape frames; no key image content is cropped.
- Portfolio images are placed on the left and the section title/description on the right on desktop.
- Captions below portfolio images have been removed.


## V10 updates
- Portfolio sample images were replaced with the latest three user-approved files.
- Portfolio layout keeps the original 3-card left / text right presentation format from the approved reference.
- No captions are shown under the sample cards.


## V11 updates
- Portfolio sample frames now match the Version 5 style.
- The three latest approved sample photos are used.
- Portfolio keeps the left-gallery / right-text composition and no captions under images.

## V12 updates
- Portfolio images now fill three square frames.
- The approved Version 5 organic frame styling and layout are preserved.


## انتشار روی GitHub Pages

این نسخه برای انتشار با GitHub Actions آماده شده است.

1. محتویات پوشه `mana-landing-project-2026` را در ریشه یک Repository جدید GitHub قرار دهید.
2. نام شاخه اصلی را `main` بگذارید.
3. در Repository به مسیر `Settings → Pages` بروید.
4. در بخش `Build and deployment`، گزینه `Source` را روی `GitHub Actions` قرار دهید.
5. از تب `Actions` اجرای workflow با نام `Deploy Mana site to GitHub Pages` را بررسی کنید.
6. پس از موفقیت، آدرس سایت در `Settings → Pages` نمایش داده می‌شود.

برای انتشار خودکار نسخه‌های بعدی، کافی است تغییرات را روی شاخه `main` push کنید.

نکته: `vite.config.js` از base نسبی و تصاویر از `import.meta.env.BASE_URL` استفاده می‌کنند تا مسیر فایل‌ها در آدرس زیرشاخه GitHub Pages هم درست بماند.
