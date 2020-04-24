# crios
Crios (Web page), Portfolio Ivan Shavliuga Ivanov, junior Frontend developer
This esay landing page
# Getting started

After checking out the repo, run:

```
npm install
npm start
```

open http://localhost:3000 and you can see my resume.

# Write your resume with this template

Feel free to write your resume with this template, if you are odd enough to do so.

- `src/app.postcss` is for css
- `src/index.pug` is for template
- If you want to write your resume with sass, just add `sass-loader`

# Internationalization

Unfortunatelly, we only have really legacy option to this setting.

To create Japanese resume, `HtmlWebpackPlugin` in `webpack.config.js` like this:

```
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.ja.pug',
        filename: 'index.html',
        inject: false
      }
    )
  ]
```
