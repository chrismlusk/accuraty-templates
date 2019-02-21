# Accuraty templates

This is a set of standards, common components, and best practices for projects in a way that is easy to deploy using modern web technologies and up-to-date frameworks. Accuraty primarily works with the DNN content management system. The files included are a starting point for this platform.

## Project requirements

...

## Getting started

At the root of your new project folder, run the following commands in your terminal:

```
git remote add accuraty https://github.com/chrismlusk/accuraty-templates.git
git fetch accuraty
git merge accuraty/master
cd Portals/_default/Skins/CLIENT_CODE
```

Then, open `package.json` and change the `name` property from "CLIENT_CODE" to whatever the project's name should be. This name will be used in multiple places (e.g., the Skin and Container directories, as a Sass variable, the EasyDNNnews template name), but **you only need to set it here**. The Gulp build process takes care of setting the name everywhere else.

_Note: Although the placeholder name is in all caps, NPM rules require the name to be lowercase._

Next, run the following commands:

```
npm install
npm start
```

This will kick off the Gulp tasks to initialize the project, compile starting assets, and begin watching for changes to source files.

### Ongoing development

`npm run dev`

## About Accuraty

**Accuraty Solutions** is a full-service website firm that provides a wide range of web services: design, development, applications, hosting, e-commerce, and more. We deliver creative, effective results and have extensive experience in building useful online presences for businesses, organizations, and communities.

---

Reference: [Accuraty Solutions](http://www.accuraty.com)
