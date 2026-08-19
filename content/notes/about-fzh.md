---
noteDate: "2026-07-07 21:08 WIB"
tags: "#notes.fzh"
---

Membuat minimalis blog statis dengan tema long notes dengan Eleventy.

Saya membuat blog Minimalis dengan static site Generator yaitu eleventy tentu dengan bantuan AI berhubung saya bukan real Developer so yeah apa mau dikata.

Oke jadi di blog ini hanya ada long notes saja post pertam lalu post kedua dan seterusnya, jadi user bisa fokus baca dan mungkin nanti saya but juga fitur arsip tapi atau kalau sekarang sudah cukup.

Oke langsung msuk ke tool saja, saya pakai Eleventy sebagai SSG dan Netlify sebagai CDN dan GitHub untuk host kodenya.

Dikode ini sudah dibuat agar gambar dimuat lebih cepat dengan salah satu Netlify fitur yaitu images optimizer dari Netlify CDN. Jadi gambar bisa dimuat lebih cepat dengan format yang fleksibel sesuai keadaan user yaitu format gambar .avif atau .webp dan ukuran yang tergantung layar misal hp atau laptop.

Hal ini membuat user lebih cepat dalam menerima ata sehingga bisa langsung fokus membaca blog. Dan sudah otomatis di cache di Netlify CDN jadi user yang akses akan menggunakan cache dari user sebelumya jadi gambar lebih cepat dimuat.

Kenapa gambar penting? Karena berhubungan denga experience user, bayangkan kamu buka website dan lama sekali muncul dilayar kamu karena terlalu berat, ga enak kan.

Disinilah peran dri Netlify CDN berjalan yaitu untuk memutus Lola tadi. Dan alasan lainnya karena ini adalah praktik modern dalam membuat website.

Dikode saya simple saja tidak ada arsip, about dan lainnya karena ini untuk keperluan personal tapi sudah ada meta tags karena memang itu standar umum dalam pembuatan website.

Sedikit kode meta tags,

```
  <title>notes.fzh – Personal notes</title>

  <!-- SEO Meta Tags -->
  <meta name="description" content="Personal notes dari FZH yang isinya tentang design, website dan lainnya.">
```

Termasuk ada OG images juga tapi saya ga msukin karena terlalu panjang.

Untuk blockcode, inlinecode dan blockqoute juga sudah ada tapi denga style yang minimalis saja.

```
    /* --- CODE (block & inline) --- */
    pre {
      /* Style sama dengan inline code */
      background-color: #fafafa;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      color: #333;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.9em;
      font-weight: 500;
      line-height: 1.6;
      padding: 12px 16px;         /* padding lebih nyaman untuk blok */
      margin: 24px 0;
      overflow-x: auto;
    }
```

Oia untuk typeface (bukan font) saya pakai font sistem saja, alasan? Mengurangi dependenci terhadap hal asing (wkwkw). Mungkin nanti saya jelasin ya.

Jadi nanti kalau internet lola dan gagal load ya ga masalah karena pakai font sistem sesuai device masing-masing dan ini blog pribadi jadi ga perlu terlalu mewah. Serta untuk mengurangi bandwidth jikalau sumber font dari luar dalam hal ini google font hal ini bisa diakali dengan menghost font di repo yang sama sebenarnya tapi saya ga pakai karena alasan pertama cukup.

Untuk judul dan body,

```
    body {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

Utuk code,

```
      font-family: 'Courier New', Courier, monospace;
```

Fitur infinte scrolling, jadi untuk awal akan download post sebanyak 12 lalu kalau sudah mendekati akan download lagi 8 buah dan begitu seterusnya, ini bertujuan agar user tidak bisa langsung baca tanpa harus menunggu lama serta mendapat experience yang baik.

```
      // --- INFINITE SCROLL (12 + 8 per batch) ---
      let hiddenNotes = Array.from(document.querySelectorAll('.note-hidden'));
      const sentinel = document.getElementById('sentinel');
      const batchSize = 8;
```

Back to top jadi kamu ga perlu cape scrolling hanya tekan icon panah keatas.

```
      // --- BACK TO TOP (ringan, tanpa library) ---
      const backToTop = document.getElementById('backToTop');
      if (backToTop) {
        let ticking = false;
        function updateBackToTop() {
          if (window.scrollY > 300) {
            backToTop.classList.add('show');
```

Dan tentu hidangan utama kita yaitu images optimizer by Netlify CDN. Ini penting karena umumnya kalau website berat pasti karena gambar yang ga optimal pada saat proses loading.

```
  // Shortcode gambar optimal: AVIF → WebP fallback
  eleventyConfig.addShortcode("image", function(src, alt, width, height, sizes) {
    const widths = [400, 800, 1200];
    const defaultWidth = 800;
    const sizesAttr = sizes || "(max-width: 680px) 100vw, 680px";

    // Deteksi environment production Netlify
    const isNetlify = process.env.NETLIFY === 'true' || process.env.CONTEXT === 'production';

    if (!isNetlify) {
      // Local development: gambar langsung tanpa CDN
      return `<img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">`;
    }

    // Fungsi pembuat URL CDN untuk format tertentu
    const cdnUrl = (w, format) =>
      `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fm=${format}`;

    // AVIF srcset
    const avifSrcset = widths.map(w => `${cdnUrl(w, 'avif')} ${w}w`).join(", ");
    // WebP srcset
    const webpSrcset = widths.map(w => `${cdnUrl(w, 'webp')} ${w}w`).join(", ");

    // Fallback img (WebP)
    const fallbackSrc = cdnUrl(defaultWidth, 'webp');

    return `
      <picture>
        <source srcset="${avifSrcset}" sizes="${sizesAttr}" type="image/avif">
        <source srcset="${webpSrcset}" sizes="${sizesAttr}" type="image/webp">
        <img
          src="${fallbackSrc}"
          alt="${alt}"
          width="${width}"
          height="${height}"
          loading="lazy"
          decoding="async"
        >
      </picture>
    `;
  });
```

Nanti kamu akan download gambar (pada saat buka blog saya) sesuai device kamu misal kamu buka dari hp maka gambar akan berbeda size-nya dengan gambar yang dibuka dengan laptop dan tentu Dnegan format gambar modern `.avif` dengan fallback `.webp`  atau format asli dalam hal ini umumnya saya pakai `.png`

Minify html dengan css dan script inline bukan beda folder.

```
  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
```

Untuk saat ini saya sudah puas, mungkin dilain waktsaya pakai buat section post list jadi user bisa browse artefak arsip atau buat RSS atau mungkin copy to clipboard atau share ya betul satu satunya yang bisa kamu lakukan untuk share blog adalah dengan cara kopi url di tab atas, sekian.

Cara panggil gambar di `file.md` sekarang begini (ga bisa ditampilkan shortcode nya karena cloudflare sensitif banget yang ad build gagal, edit: Rabu, 19-08-2026 21:13 WIB dikamar sperti biasa).