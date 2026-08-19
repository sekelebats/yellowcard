---
noteDate: "2026-07-07 20:54 WIB"
tags: "#really"
---

Hemh enaknya mulai dari mana ya,  tapi yang jelas banyak banget yang mau saya tulis.

Jadi hal ini terjadi saat saya membuat blog minimalis saya dengan tema long notes.

Nah disini sudah pakai image optimizer dari Netlify CDN dengan tujuan agar lebih cepat dari sisi user dan fleksibilitas (gambar otomatis resize dan format modern)

User akan dapat:
1. Gambar yang sesuai dengan ukuran layar, misal kalau kamu buka di hp maka kamu dapet ukuran hp bukan laptop.

2. Gambar dengan format avif atau webp lalu kalau gagal ya file asli dalam hal ini umumnya saya pakai .png 

Nah masalahnya saya dan kamu ga boleh percaya gitu aja sama AI jadi saya minta bantu buat ubah
.eleventy.js agar pakai image optimizer dari Netlify CDN seperti yang saya jelasin diatas tapi setelah saya cek DeepSeek (AI yang saya pakai) dia ga kasih url path Netlify nya yaitu

```
/.netlify/images?url=/images/your-image.jpeg 
```

Dia pakai ini,

```
/Images/url images/format images 
```

Justru saya yang kasih tau harus pakai path Netlify setelah browsing manual, kamu bisa cek disini buat baca apa itu [Netlify images optimizer](https://developers.netlify.com/guides/how-to-serve-optimized-images-using-netlify-image-cdn/).

Tapi ya gitu saya juga ga mau bash DeepSeek terlalu dalam karena mereka juga bantu saya ya kan cuma ya itu memang harusnya kita ga percaya gitu aja sama AI walau emang keliatan meyakinkan.

Sedari awal kita harus setting let's say "tingkat kepercayaan" sama AI sekitar (buat saya) 90-95% aja gausa absolut 100% karena hal diatas.

Dan hal lainnya juga adalah proses minify, kita tau di Eleventy (SSG yang saya pakai) memang ada fitur minify html pas build dengan cara instal plugin @elevnty yg resmi nah dengan itu nanti bisa otomatis minify html dan css, script di inline atau beda folder (pakai path url misal assets/style/css.style).

Nah DeepSeek buat kode tapi bukan pakai Eleventy plugin jadi cuma manual aja di setting eleventy.js nya duhh, saya tau dari mana? Betul fact check pakai AI lagi dalam hal ini Leo AI dari brave.

Dan to be fair saya juga ga teliti ga liat di eleventy.js karena fokus ke hasil build aja, selama ga gagal ya berati ok (maklum cuma pakai hp bukan laptop jadi ga bisa terlalu complex).

My dude ga bilang kalau itu uma buat inline...

Dari sini saya dapat beberapa kesimpulan yaitu:

1. Kontrol terkahir harus ada ditangan manusia bukan AI, jadi kamu harus fact check lagi Dnegan cara cross check pakai AI juga mix dengan baca dokumentasi resmi dari hal yang kamu buat.

2. Setting tingkat keprrykepada AI 90-95% aja atau atur sesuka hati kamu tapi please jangan 100% percaya gitu aja sama AI

3. AI cuma kasih jawaban yang buat kamu senang, saya menduga ini bagian dari personafikasi dalam hal ini kamu pakai AI lalu hasil chat disimpan dan AI pakai itu sebagai training dan setting persona agar lebih "menyatu" dengan kamu (saya memang mau nulis post panjang ini tapi nanti).

4. Proses pembelajaran yang kurang at least buat saya, jadi AI harus dirangsang dulu baru kasih jawaban yang kita mau, nah masalahnya gimna kita mau rangsang kalau sedari awal kita gatau cara rangsangnya karena kita bukan real ahli (Dev)???

Mungkin ini karena saya pakai AI versi gratisan bukan premium makanya hasilnya ga terlalu baik (fix dan akurat?) mungkin ya.