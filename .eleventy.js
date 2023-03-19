module.exports = function(eleventyConfig) {
     eleventyConfig.addPassthroughCopy('images');
     eleventyConfig.addPlugin(eleventyNavigationPlugin);
     eleventyConfig.addPassthroughCopy('css')
     return {
          passthroughFileCopy: true
     }
}
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");