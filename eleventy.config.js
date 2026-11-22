export default function (eleventyConfig) {
  // Fichiers copiés tels quels dans _site/
  for (const chemin of ["src/css", "src/images", "src/favicon.svg", "src/CNAME"]) {
    eleventyConfig.addPassthroughCopy(chemin);
  }

  // Langue par défaut ; src/en/en.11tydata.json la remplace par "en"
  eleventyConfig.addGlobalData("lang", "fr");

  // URL de la même page dans une autre langue : le français est à la racine,
  // l'anglais sous /en/, avec les mêmes slugs.
  eleventyConfig.addFilter("versLangue", (url, lang) => {
    const racine = url.replace(/^\/en\//, "/");
    return lang === "en" ? "/en" + racine : racine;
  });

  // HTML déjà échappé (front matter, i18n.js) vers texte brut, pour llms.txt
  eleventyConfig.addFilter("texteBrut", (html) =>
    String(html)
      .replace(/<br\s*\/?>/g, ", ")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&#8209;/g, "-")
      .replace(/&amp;/g, "&"),
  );

  return {
    dir: { input: "src", output: "_site" },
    htmlTemplateEngine: "njk",
  };
}
