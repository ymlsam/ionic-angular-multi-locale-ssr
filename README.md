# Multi-locale Ionic Angular App with SSR (Web Build) & Capacitor (iOS & Android Builds)

## Prerequisite
- Node.js 20.19.0+
- Xcode 15.2+
- [Android Studio Narwhal 3+](https://developer.android.com/studio)

## Installation
```bash
# create new project
ng new ionic-angular-multi-locale-ssr --style=scss --ssr --server-routing
cd ionic-angular-multi-locale-ssr

# add localize
ng add --skip-confirmation @angular/localize

# install capacitor
ng add @capacitor/angular
npm install @capacitor/ios @capacitor/android

# install capacitor plugin to support edge-to-edge design in new Android versions
npm install @capawesome/capacitor-android-edge-to-edge-support

# edit capacitor config
perl -i -p -e "s/'dist'/'dist\/browser'/g" ./capacitor.config.ts

# install CocoaPods (1.16.2, with Ruby 2.6.10)
sudo gem install securerandom -v 0.3.2
sudo gem install drb -v 2.0.6
sudo gem install zeitwerk -v 2.6.18
sudo gem install activesupport -v 6.1.7.10
sudo gem uninstall concurrent-ruby
sudo gem install concurrent-ruby -v 1.3.4
sudo gem install cocoapods
pod --version

# install Ionic CLI
npm install -g @ionic/cli

# add Ionic to existing project
ng add @ionic/angular

# build web app & prepare index.html
npm run build

# initialise iOS app (depends on CocoaPods)
ionic cap add ios

# initialise Android app
ionic cap add android

# make sure env vars JAVA_HOME & ANDROID_HOME are available
echo "export JAVA_HOME=\"/Applications/Android Studio.app/Contents/jbr/Contents/Home\"" >> ~/.zshenv
echo "export ANDROID_HOME=\"\$HOME/Library/Android/sdk\"" >> ~/.zshenv
```

## Web Development

### Serving Development Build

To start a local development server serving one locale, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm test
```

### Building for Production

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Serving Production Build

To start a local production server serving multiple locales, run:

```bash
npm run serve:ssr
```

## iOS & Android Development

### Capacitor Update

```bash
ionic cap sync
```

### Development Build

```bash
# without live reload (support multi-locale)
ionic cap run ios
ionic cap run android

# with live reload (support one locale only, refer to "development" config in "angular.json")
ionic cap run ios --livereload
ionic cap run android --livereload --external
```

### Production Build

```bash
ionic cap open ios
ionic cap open android
```
