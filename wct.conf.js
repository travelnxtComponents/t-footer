module.exports = {
  plugins: {
    istanbul: {
      dir: "./test/coverage-report",
      reporters: ["text-summary", "lcov"],
      include: [
        "/t-footer/t-footer.html"
      ],
      exclude: [
        "/polymer/polymer.js",
        "/wecomponentsjs/webcomponents-lite.js"
      ]
    },
    local: {
      "browsers": ["chrome"]
    }
  }
}
