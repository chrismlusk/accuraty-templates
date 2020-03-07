# Accuraty templates

This is a set of standards, common components, and best practices for projects in a way that is easy to deploy using modern web technologies and up-to-date frameworks.

## Project requirements

- DNN site already deployed
- [Node >= v12.16.1](https://nodejs.org/en)

## Getting started

- [Initial setup](https://github.com/chrismlusk/accuraty-templates#initial-setup) (you are starting from scratch)
- [Cloning locally](https://github.com/chrismlusk/accuraty-templates#cloning-locally) (first time adding this project to your machine)
- [Ongoing development](https://github.com/chrismlusk/accuraty-templates#ongoing-development) (project is already on remote and local)

### Initial setup

_This assumes the project skin has not been set up at all. If the project already exists on GitHub and you are trying to get set up on your own machine, skip to [Cloning locally](https://github.com/chrismlusk/accuraty-templates#cloning-locally)._

#### 1. Get the code

Create a new project folder on your local machine, `cd` into that directory, and run the following commands in your terminal:

```
git init
git remote add accuraty https://github.com/chrismlusk/accuraty-templates.git
git fetch accuraty
git merge accuraty/master
```

#### 2. Set your FTP config

If you are using Visual Studio Code, navigate to the `.vscode/` directory. Copy `sftp.json.example`, configure it with your credentials, and save it as `sftp.json`.

#### 3. Set the project name

Next, navigate to the Skin folder:

```
cd Portals/_default/Skins/CLIENT_CODE
```

Then, open `.env` and update your environment variables. At a minimum, change the `CLIENT_CODE` variable to whatever the project's name should be. This name will be used in multiple places (e.g., the Skin and Container directories, as a Sass variable, the EasyDNNnews template name), but **you only need to set it here**. The Gulp build process takes care of setting the name everywhere else.

#### 4. Install packages

Run `npm install` from inside the Skin folder.

#### 5. Build the assets

Then run `npm run build` in your terminal.

This will trigger the Gulp tasks to initialize the project, rename directories, and compile starting assets (stylesheets, scripts, etc.). This `build` command, however, will not keep Gulp in "watch" mode. Since we are getting started, it's best to just build the assets and keep going with the setup.

Next, add and commit everything to Git. Reminder: This is all local-only at this point, as we have not set up the remote repository yet.

#### 6. Create GitHub repo

Go to the [Accuraty GitHub account](https://github.com/Accuraty) and add a new repository.

Name the repository using the client code, add a description, make the repo private, and then **do not initialize with a README**. Skip that step since you will import the existing local repository you just made.

Back in your terminal, run `git remote add origin [PASTE_THE_GITHUB_URL_HERE]`.

Then, run `git push -u origin master`.

##### Repository not found?

If you get an error message saying the repository was not found, it is because you do not have permission to write to the private repo you just created. Make sure you are either (1) Jeremy Farrance and [your GitHub credentials are correct](https://help.github.com/en/articles/caching-your-github-password-in-git), or (2) your GitHub username is added as a collaborator on this project.

#### 7. GitHub branches

Go back to GitHub and to the page for your new repository, and then create a new branch called `dev`.

Then, go to "Settings > Branches" and change the default branch from `master` to `dev`. This will make it so all pushes and pull requests go into `dev`, which will keep `master` somewhat "protected" during ongoing development.

#### 8. Getting code to the server

While our default SFTP extension settings in VS Code automatically push most files, you will need to manually upload certain directories — especially when you first set up a project. 

Go ahead and right-click on the skin folder and upload the entire thing.

### Cloning locally

_This assumes the project has already been set up and added as a repository to the [Accuraty GitHub account](https://github.com/Accuraty), but you have not added it to your local machine._

#### 1. Get the code

Navigate to the directory where you want to store the project, copy the GitHub URL, and then run the following commands in your terminal:

```
git clone [PASTE_THE_GITHUB_URL_HERE]
```

#### 2. Set your FTP config

If you are using Visual Studio Code, navigate to the `.vscode/` directory. Copy `sftp.json.example`, configure it with your credentials, and save it as `sftp.json` to continue.

#### 3. Install packages

Next, `cd` into the skin (`Portals/_default/Skins/[ABBV]`) and run `npm install` to get the required packages.

#### 4. Build the assets

Then run `npm start` in your terminal.

This will kick off the Gulp tasks to initialize the project, compile starting assets, and begin watching for changes to source files.

To exit this "watch" mode, press `Control-C` in your terminal.

To start watching again, run `npm run dev` in your terminal.

#### 5. Push changes to GitHub

Because you cloned the repository using the GitHub URL, your local repo's `origin` is properly set. However, if you get an error message when you try to push your changes up to remote, it is because you do not have permission to write to the private repo. 

Make sure you are either (1) Jeremy Farrance and [your GitHub credentials are correct](https://help.github.com/en/articles/caching-your-github-password-in-git), or (2) your GitHub username is added as a collaborator on this project.

### Ongoing development

_This assumes the project has already been set up locally and is in its own remote repository._

#### 1. Compile assets

Run `npm run dev` to kick off the Gulp watch process.

## About Accuraty

**Accuraty Solutions** is a full-service website firm that provides a wide range of web services: design, development, applications, hosting, e-commerce, and more. We deliver creative, effective results and have extensive experience in building useful online presences for businesses, organizations, and communities.

---

Reference: [Accuraty Solutions](https://www.accuraty.com)
