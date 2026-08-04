const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

  eleventyConfig.setQuietMode(false);


  // Tambahkan collection "notes" dengan sort berdasarkan tanggal
  eleventyConfig.addCollection("notes", function(collection) {
    return collection
      .getFilteredByGlob("./content/notes/*.md")
      .sort((a, b) => {
        const dateA = new Date(a.data.noteDate);
        const dateB = new Date(b.data.noteDate);
        return dateB - dateA; // Paling baru di atas
      });
  });

// 🖼️ Optimasi gambar responsif + format modern
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["avif", "webp", "auto"],
    widths: [360, 640, 1024, 1500],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 750px",
    },
  });

  // Tambahkan filter untuk format tanggal
  eleventyConfig.addFilter("formatDate", function(dateString) {
    const date = new Date(dateString);
    const options = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('id-ID', options);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
