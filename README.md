# MyApps

This is an Angular workspace greated by the official docs of Angular. For example:

```text
ng new my-workspace --createApplication="false"
ng generate application app1
ng generate application app2
ng generate library shared-lib
```

I do not use the Ionic-CLI because it's not fully supported for Angular multi-app monorepo.
Ionic requires to have a separated `package.json` and `config.xml` for each app in your workspace.
But I want to use a single package.json and config.xml. So I setup my own build system with Cordova.

I just included Ionic for the UI and native plugins. And build the app by using the Angular cli `ng`.
Each app is built to the `www` folder. And then I simply run Cordova to build my app or run on the device.

## How to use this project?

See the `package.json` of the workspace (root).
