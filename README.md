# NextJS Starter

### General
A pretty opinionated TypeScript React/Redux Next.js starter application.


### Installation
0. Install [`Yarn`](https://yarnpkg.com/en/) and [`TypeScript`](https://www.typescriptlang.org)
1. Install the project dependencies:

    `yarn install`
    
2. Start the development server:
    
    `yarn dev`

### Project Organization

All Components are sorted into 2 directories:

- Components that represent "Pages" (i.e. base component for a route) are stored in the `/pages` directory. Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and `./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

- Components that can be used throughout the app as global components or components that serve as wrappers or Higher Order components are stored in the `/components` directory.


## Data Flow
Uses Redux/Sagas.

## Styling
Uses StyledComponents.

## Bootstrap Skeleton
This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.
