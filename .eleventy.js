module.exports = function(eleventyConfig) {
     eleventyConfig.addPlugin(eleventyNavigationPlugin);
     eleventyConfig.addPassthroughCopy('css')
     return {
          passthroughFileCopy: true
     }
}
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");