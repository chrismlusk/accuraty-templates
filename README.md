# AccuTheme

The Accuraty Solutions starter kit for projects using the DNN content management system.

## Project requirements

- DNN site already deployed
- [Node >= v12.16.1](https://nodejs.org/en)

## Getting started

- [Initial setup](https://github.com/chrismlusk/accuraty-templates#initial-setup) (you are starting from scratch)
- [Cloning locally](https://github.com/chrismlusk/accuraty-templates#cloning-locally) (first time adding this project to your machine)

### Initial setup

_This assumes the project has not been set up at all. If it already exists on GitHub and you need to get set up on your own machine, skip to [Cloning locally](https://github.com/chrismlusk/accuraty-templates#cloning-locally)._

#### 1. Get the code

Create a new project folder on your local machine, `cd` into that directory, and run the following commands in your terminal:

```
git init
git remote add accu https://github.com/chrismlusk/accuraty-templates.git
git fetch --depth=1 accu master
git merge accu/master
git remote rm accu
```

<details>
<summary>What do these Git commands do?</summary>
<p></p>
<ul>
  <li>Initialize Git locally.</li>
  <li>Establish a connection between the local repo and this remote.</li>
  <li>Fetch the remote code, but without the Git history.</li>
  <li>Merge that code into your local `master` branch.</li>
  <li>Remove the connection to the remote.</li>
</ul>
</details>

#### 2. Set your FTP config

If you are using Visual Studio Code, go to the `.vscode/` directory. Duplicate `sftp.json.example`, save it as `sftp.json`, and update the first four lines with your credentials.

#### 3. Set the project name

Next, navigate to the Skin folder:

```
cd Portals/_default/Skins/CLIENT_CODE
```

Open the `.env` file and change the `CLIENT_CODE` variable to the client abbreviation or whatever the project's name should be.

This name will be used in multiple places (e.g., the Skin and Container directories, Sass variables), but **you only need to set it here**. The Gulp build process takes care of setting the name everywhere else.

#### 4. Install packages

From your terminal, run `npm install` from inside the Skin folder.

#### 5. Build the assets

Then run `npm run build`.

This will trigger Gulp to initialize the project, rename directories, and compile assets (stylesheets, scripts, etc.). The `build` command will not keep Gulp in "watch" mode, however. Since we are getting started, just build the assets and keep going with the setup.

Next, add and commit everything to Git. Reminder: This is all local-only at this point, as we have not set up the remote repository yet.

#### 6. Create GitHub repo

Go to the [Accuraty GitHub account](https://github.com/Accuraty) and add a new repository.

Name the repository using the client code and project year, make the repo private, and then **do not initialize with a README**. Skip that step since you will import the existing local repository you just created.

Back in your terminal, run `git remote add origin _PASTE_THE_GITHUB_URL_HERE_`.

Then, run `git push -u origin master`.

##### Repository not found?

If you get an error message saying the repository was not found, it is because you do not have permission to write to the private repo you just created. Make sure you are either (1) Jeremy Farrance and [your GitHub credentials are correct](https://help.github.com/en/articles/caching-your-github-password-in-git), or (2) your GitHub username is added as a collaborator on this project.

#### 7. Getting code to the server

While our default SFTP extension settings in VS Code automatically push most files, you will need to manually upload certain directories — especially when you first set up a project. 

Right-click on the skin folder (`Portals/_default/Skins/[PROJECT_NAME]`) and choose "Upload Folder" from the menu. Repeat the same for the client's container folder (`Portals/_default/Containers/[PROJECT_NAME]`).

The `sftp.json` configuration will prevent unnecessary files from being uploaded to the server.

### Cloning locally

_This assumes the project has already been set up and added as a repository to the [Accuraty GitHub account](https://github.com/Accuraty), but you have not added it to your local machine._

#### 1. Get the code

Navigate to the directory where you want to store the project, copy the GitHub URL, and then run the following commands in your terminal:

```
git clone _PASTE_THE_GITHUB_URL_HERE_
```

#### 2. Set your FTP config

If you are using Visual Studio Code, navigate to the `.vscode/` directory. Copy `sftp.json.example`, configure it with your credentials, and save it as `sftp.json` to continue.

#### 3. Install packages

Next, `cd` into the skin (`Portals/_default/Skins/[ABBV]`) and run `npm install` to get the required packages.

#### 4. Build the assets

Then run `npm start` in your terminal.

This will kick off the Gulp tasks to initialize the project, compile starting assets, and begin watching for changes to source files.

To exit this "watch" mode, press `Control-C` in your terminal.

To start watching again, run `npm start` in your terminal.

#### 5. Push changes to GitHub

Because you cloned the repository using the GitHub URL, your local repo's `origin` is properly set. However, if you get an error message when you try to push your changes up to remote, it is because you do not have permission to write to the private repo. 

Make sure you are either (1) Jeremy Farrance and [your GitHub credentials are correct](https://help.github.com/en/articles/caching-your-github-password-in-git), or (2) your GitHub username is added as a collaborator on this project.

## About Accuraty

**Accuraty Solutions** is a full-service website firm that provides a wide range of web services: design, development, applications, hosting, e-commerce, and more. We deliver creative, effective results and have extensive experience in building useful online presences for businesses, organizations, and communities.

---

Reference: [Accuraty Solutions](https://www.accuraty.com)
