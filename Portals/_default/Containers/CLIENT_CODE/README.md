# Client containers

This folder begins with the default name of "CLIENT_CODE", but it will be updated once you change the `name` property in `package.json` and then initialize the project with Gulp.

## Title 1-4

The number in the file name corresponds with the heading tag, from `<h1>` to `<h4>`.

<details>
  <summary>What's included</summary>
  <ul>
    <li><code>_content.scss</code> styles</li>
    <li>HTML heading tag</li>
    <li>TITLE theme object</li>
  </ul>
</details>

## NoTitle

Containers that inherit content styles from `_content.scss` but do not include any HTML heading tag.

<details>
  <summary>What's included</summary>
  <ul>
    <li><code>_content.scss</code> styles</li>
  </ul>
</details>

## None

"None" is a misnomer, because a module must have a container associated with it, but this container lets you add a module without including any CSS classes, extra HTML elements, etc.

## Aside

`Aside.ascx` is a simple container that wraps the module in an `.aside` CSS class. Our skin template includes an `Aside.scss` file that will compile into a CSS file in this directory, and it serves as either a helpful starter for an aside component or as a useful example for creating other container components (e.g., Staff List).
