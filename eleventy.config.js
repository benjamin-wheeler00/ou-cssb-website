import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("");
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addTemplateFormats("**");
  eleventyConfig.setQuietMode(true);

  eleventyConfig.ignores.add("src/**/.*");
  eleventyConfig.ignores.add("src/**/_*");
  eleventyConfig.ignores.add("src/**/*.11tydata.*");

  eleventyConfig.addPlugin(HtmlBasePlugin);
}
