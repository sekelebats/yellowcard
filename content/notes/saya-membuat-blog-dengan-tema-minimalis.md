---
noteDate: "2026-05-11 20:58 WIB"
tags: "#build"
---

Saya membuat blog minimalis dengan tema Timeline

> ini post lama tentang blog ini dan layout sudah berubah jauh, jadi jangan berpatokan dengan post ini ya

Berikut saya lampirkan tools dan sedikit penjelasan tentang blog pribadi yang akan saya pakai sebagai directory pikiran saya.

Untuk menyimpan code dan peretelannya (gambar, typeface dan icon) hanya pakai Github yang mana adalah gratis.

Untuk meng-hosting dan domain name saya pakai Netlify free tier sehingga nanti nama blog nya mengandung domain Netlify itu sendiri, lihat dibawah ini.

```
notes-fzh.netlify.app
```

Kamu bisa ganti domain name dengan domain name sendiri (kalau sudah punya) atau beli langsung di Netlify sistem.

Untuk Backbone blog nya pake Static Site Generator **(SSG)** yaitu Eleventy yang mana sudah pasti gratis.

Berhubung saya bukan real Developer jadi saya butuh assisten buat bantu-bantu nulis code raw HTML nya dan saya pakai **Gemini, Claude dan Leo** yang paling sering dipakai dan ya, itu semua versi free jadi yaa gratis.

Dan modal yang paling berasa adalah Hp **Samsung A01 core** yang saya beli seharga 300k, waktu serta tenaga untuk buat blognya dan internet punya saudara saya ahahaha.

> Tapi jauh sebelum pakai Samsung A01 core saya cuma pakai Realme C2 atau C5 yang RAM nya cuma 2GB itu, duuh.

Jadi biaya buat blog adalah like-ly gratis...

**The Timeline**, namanya (sebut saja).

Saya membuat blog dengan model timeline dimana yang post terbaru akan muncul di paling atas dan seterusnya.

Apa latar belakang layout ini? Karna saya **suka minimalis layout** dan gimana kalo buat blog yang post nya langsung muncul pada saat url blog di klik? Lalu jadi lah blog ini.

Design blog ini amat sangat minimalis karena semua post akan muncul sekaligus di **satu layar** jadi user bisa focus baca dengan cara scrolling aja terus. Design ini sengaja karna saya mau design yang limited klik jadi user ga butuh banyak **usaha** cuma buat baca blog post.

Kalo layout-nya post terbaru akan selalu ada diatas lalu untuk navbar hanya ada nama blog dikiri dan jam real-time dari user dikanan. Lalu untuk bagian post hanya ada jam serta tanggal dikiri dan tag dikanan kemudian isi dari blog post.

Kemudian fitur baru yang saya tambah cuma syntax highlights, quote style, tentu dengan skema warna yang minimalis juga karena warna design blog ini yang monochrome.

Kalo typeface (iya font iyaa) saya pake **IBM Plex Mono** karna saya suka komputer-ism kemudian saya juga menambah button dibawah setiap postingan yang mana itu bisa dipakai untuk Email, RSS, Work/Project atau sosial media.

*Part tambahan:*

Mungkin kalian liat kok ada font yang besar sendiri ditengah atau dibawah post, ya itu gambar sebenernya dan bisa diklik, dan saya buat pake phonto dengan typeface **instrument serif** yang kalian bisa download di Google font gratis tapi itu formatnya `.ttf` jadi ubah dulu ke `.woff2` yang lebih GG.

Tujuannya? Tentu untuk kebutuhan affiliate atau promosi, sengaja letaknya hanya di file `.md` bukan `base.njk` atau yang lainnya karena faktor fleksibilitas, jadi nanti kode ini juga bisa diletakan di blog yang lain dengan penyesuaian sesuai blog tersebut.

So far so good alias saya puas sama hasilnya, mungkin nanti saya ubah lagi layout-nya kalo ada inspo or somewhat idk man tapi untuk sekarang udah cukup.

Saya kasih liat dapurnya sekali aja nih.

```html
<!-- YouTube embed -->

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe 
    src="https://youtube.com/embed/BKvT1G3jt6Y?si=_quM3m73eFSP1rEF" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<!-- YouTube embed -->
```

```html
<!-- Mulai Blok Affiliate -->
<a href="https://s.shopee.co.id/W2t2w73Oz" 
  target="_blank" 
  rel="noopener noreferrer"
  style="text-decoration: none; color: inherit; -webkit-tap-highlight-color: transparent;">

  <img 
    src="https://i.netlify.app/folder/lenovo.png" 
    alt="Lenovo" 
    style="max-width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" 
  loading="lazy"
  title="Judul tooltip saat kursor diarahkan">
</a>
<!-- Akhir Blok Affiliate -->
```