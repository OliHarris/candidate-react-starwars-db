# Todo Project

This was originally a test set for Hitatchi, which I have since dropped into a fresh instance of Vite to continue building out.

:heavy_check_mark: Code in pure React / TypeScript

:heavy_check_mark: No jQuery

## Original specs

More can be built out here as per the original specs of the test listed below.

### Application Specification

The application has a simple login screen and when logged in provides access to various lists from the Star Wars database with a navigation bar that allows you to select which list you wish displayed.

#### Login Screen

Functional login screen, permitting access to the rest of the application.
- The credentials do not need to be validated against any endpoint, the requirement is only that a username and password are provided.
- The username used to login should be displayed in the header of the application on all screens.

#### Content Screen

Data for populating the "People" and "Starship" screens should be retrieved from the [REST API](http://swapi.dev/api/.git). This should replace the static test data provided.
- Correct handling of asynchronous requests and expected errors would be a bonus.
- Implement search and paging controls for at least one of the screens, People or Starships.

### Test Requirements

Add test(s) for any component. Test stubs are acceptable. They should include a short description of what would be tested and the expected outcome.

### Implementation Notes

- The provided components do not contain logic and you should not imply any preference to the final solution. You may reorganize, edit or remove any of the components to achieve the requirements.
- 3rd party libraries can be used as required.
- Material UI is used for basic layout and styling. The layout and style of the application is not a priority so long as the application is functional.
- No information needs to be stored between page reloads.
- People data can be fetched from http://swapi.dev/api/people
- Spaceships data can be fetched from http://swapi.dev/api/starships
- To perform a search using the API add ?search="user search input" to URL

#### Provided Components

The application provides a number of basic components to help build the final application. They are all provided in the "App.tsx" file but can be re- organized and modified as required. The included components are:
- Header - Provides links to the other screens of the application, displays the current user's username and could provide the ability to logout of the application.
- Login - Basic login form with input boxes for user name and password and a button to login
- Search - Minimal search form with input for item name and a button to apply the search criteria
- Starships - Provides an outline for the Starships screen, including title, search, table of starships and pagination controls
- People - Provides an outline for the Starships screen, including title, search, table of starships and pagination controls
- App - root application component

### Success Criteria

When reviewing the submission the following will be considered:
- Correctness - does the application install and run and does it meet the requirements
- Maintainability - has the additional functionality been added in a clear and concise way. Could another developer take over the application and add more features
- Error handling - have any potential errors been handled for navigation or requests
- Testing - have any tests been included (implemented or just test stubs)
- Architecture - Has consideration been given to the organisation. Are components, functionality and libraries used in a logical and consistent manner.
- Best Practice - Are best practices being applied? For example; not using 'any' for TypeScript types, components are reusable and consideration given to appropriate usage of state

## Available Scripts

In the root directory you can run:

### `npm install`

Will perform a usual installation of any dependencies.

### `npm run dev`

Will perform a usual launch of the dev environment.

### `npm run test`

Will perform a launch of the test suite; generating a fully 100% covered report.

## NOTE1:

As this is a Vite app, I installed Jest unit-tests using:

https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap

## NOTE2:

As this is a Vite app, I hosted it on GitHub pages using this guide:

https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3
