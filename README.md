
# Speakers Feature  (*CP*)
---
This repository will implement the first of two proposed solutions for building a scalable, enterprise-sized Angular application

 - [x] **Conservative Proposal (*CP*)**: Utilizing traditional Angular modules  
 - [ ] **Modern Proposal (*MP*)**: Leveraging standalone components and signals

> Architecture for ***CP*** will be based on a blend of best practices from **Angular for Enterprise Applications** - *Third Edition: Build scalable Angular apps using the minimalist Router-first architecture* and additional proven approaches from previous projects. These include methodologies such as the **View Layer with Smart & Dumb Components pattern**, which has been demonstrated to be both suitable and beneficial for large-scale Angular applications.

&nbsp;
## Libs and tools
---
Bellow will be listed and described most used libs and tools for implementing current project. Latest documentation were revisited and recommendation and instructions will be provided in relation with current code.

Library  | Documentation
------------- | ------------
Git Flow  | <https://skoch.github.io/Git-Workflow/>
Commitizen  | <https://commitizen-tools.github.io/commitizen/>
Angular CLI | <https://angular.dev/tools/cli>
PrimeNG | <https://primeng.org/installation>
PrimeIcons | <https://primeng.org/icons>
NgRx | <https://ngrx.io/docs>
&nbsp;
## Development Process
---
This section provides detailed explanations and instructions for implementing and using libraries to manage branches, commits, and to scaffold modules, components, and services, in the same manner as it was done in the current project.
&nbsp;
#### Installation and Usage
**Git Flow**
```sh
brew install git-flow
```
```sh
git flow init [-d]
Which branch should be used for bringing forth production releases?
   - develop
   - main
Branch name for production releases: [main]

Which branch should be used for integration of the "next release"?
   - develop
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
```
```sh
$ git flow feature start my-feature
Switched to a new branch 'feature/my-feature'

Summary of actions:
- A new branch 'feature/my-feature' was created, based on 'develop'
- You are now on branch 'feature/my-feature'

Now, start committing on your feature. When done, use:

     git flow feature finish my-feature
```
&nbsp;
**Angular CLI**
```sh
npm install -g @angular/cli
```
&nbsp;
**Create and initialize a new Angular app**

```sh
ng new speakers-app --style=scss --ssr=false --standalone=false
```

> Note: `--standalone=false` is added to provide module centric schematics.
> Loks like routing is **used by default** even if not described in docs `--routing` .

&nbsp;
**Install and use Commitizen**
```sh
npm install -g commitizen
```
![Alt Text](https://commitizen-tools.github.io/commitizen/images/demo.gif)
&nbsp;
**PrimeNG & PrimeIcons**
```sh
npm install primeng primeicons
```
Theme and Core styles are the necessary css files of the components. Styles can either be imported at angular.json or src/styles.css file.
`angular.json`
```json
"styles": [
    "src/styles.scss",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeicons/primeicons.css"
],
```
&nbsp;
**NgRx**
```sh
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/entity
```
Add to imports in `app.module.ts`
```typescript
imports: [
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
],
```
&nbsp;
#### Generate Modules, Components and Services
&nbsp;
**Core Module**
```sh
ng generate module core
```
&nbsp;
**Logger Service**
```sh
ng generate service core/services/logger
```
&nbsp;
**Shared Module**
```sh
ng generate module shared
```
&nbsp;
**Primeng Module**
```sh
ng generate module shared/prime-ng
```
&nbsp;
**Speakers Module with `Routing`**
```sh
ng generate module features/speakers --routing
```
&nbsp;
**Speaker Interface**
```sh
ng generate interface features/speakers/models/speaker
```
&nbsp;
**Infrastructure Module**
```sh
ng generate module infrastructure
```


