# Accuraty Templates

This is an attempt to create a set of standards and best practices for Accuraty projects in a way that is easy to deploy using modern web technologies and up-to-date frameworks.

## Getting Started

At the root of your new project folder, run the following commands:

```
git remote add accuraty https://github.com/chrismlusk/accuraty-templates.git
git fetch accuraty
git merge accuraty/master
```

Then, navigate to the project's skin folder (e.g., `Portals/_default/Skins/CLIENT_CODE`) and run the following command:

```
npm install
```

Once the project dependencies are installed, run the following command:

```
npm start
```

This will kick off the Gulp tasks to initialize the project and begin watching for changes to source files.

## Overview

Accuraty primarily works with the DNN content management system. The files included are designed to be a starter template for this platform.

To use this template, navigate to the `Portals/_default/Containers` and the `Portals/_default/Skins` folders in your DNN project and create a new folder in each place (use the client abbreviation Accuraty uses elsewhere as the name). Copy the contents of this template's `containers/` and `skin/` folders into these newly created directories.

## About Accuraty

**Accuraty Solutions** is a full-service website firm that provides a wide range of web services: design, development, applications, hosting, e-commerce, and more. We deliver creative, effective results and have extensive experience in building useful online presences for businesses, organizations, and communities.

---

Reference: [Accuraty Solutions](http://www.accuraty.com/)
