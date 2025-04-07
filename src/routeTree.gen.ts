/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ClientIndexImport } from './routes/client/index'
import { Route as ClientDashboardImport } from './routes/client/dashboard'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as ClientProfileIndexImport } from './routes/client/profile/index'
import { Route as ClientGuestsIndexImport } from './routes/client/guests/index'
import { Route as ClientGuestsAddImport } from './routes/client/guests/add'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ClientIndexRoute = ClientIndexImport.update({
  id: '/client/',
  path: '/client/',
  getParentRoute: () => rootRoute,
} as any)

const ClientDashboardRoute = ClientDashboardImport.update({
  id: '/client/dashboard',
  path: '/client/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/auth/register',
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const ClientProfileIndexRoute = ClientProfileIndexImport.update({
  id: '/client/profile/',
  path: '/client/profile/',
  getParentRoute: () => rootRoute,
} as any)

const ClientGuestsIndexRoute = ClientGuestsIndexImport.update({
  id: '/client/guests/',
  path: '/client/guests/',
  getParentRoute: () => rootRoute,
} as any)

const ClientGuestsAddRoute = ClientGuestsAddImport.update({
  id: '/client/guests/add',
  path: '/client/guests/add',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/client/dashboard': {
      id: '/client/dashboard'
      path: '/client/dashboard'
      fullPath: '/client/dashboard'
      preLoaderRoute: typeof ClientDashboardImport
      parentRoute: typeof rootRoute
    }
    '/client/': {
      id: '/client/'
      path: '/client'
      fullPath: '/client'
      preLoaderRoute: typeof ClientIndexImport
      parentRoute: typeof rootRoute
    }
    '/client/guests/add': {
      id: '/client/guests/add'
      path: '/client/guests/add'
      fullPath: '/client/guests/add'
      preLoaderRoute: typeof ClientGuestsAddImport
      parentRoute: typeof rootRoute
    }
    '/client/guests/': {
      id: '/client/guests/'
      path: '/client/guests'
      fullPath: '/client/guests'
      preLoaderRoute: typeof ClientGuestsIndexImport
      parentRoute: typeof rootRoute
    }
    '/client/profile/': {
      id: '/client/profile/'
      path: '/client/profile'
      fullPath: '/client/profile'
      preLoaderRoute: typeof ClientProfileIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/client/dashboard': typeof ClientDashboardRoute
  '/client': typeof ClientIndexRoute
  '/client/guests/add': typeof ClientGuestsAddRoute
  '/client/guests': typeof ClientGuestsIndexRoute
  '/client/profile': typeof ClientProfileIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/client/dashboard': typeof ClientDashboardRoute
  '/client': typeof ClientIndexRoute
  '/client/guests/add': typeof ClientGuestsAddRoute
  '/client/guests': typeof ClientGuestsIndexRoute
  '/client/profile': typeof ClientProfileIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/client/dashboard': typeof ClientDashboardRoute
  '/client/': typeof ClientIndexRoute
  '/client/guests/add': typeof ClientGuestsAddRoute
  '/client/guests/': typeof ClientGuestsIndexRoute
  '/client/profile/': typeof ClientProfileIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth/login'
    | '/auth/register'
    | '/client/dashboard'
    | '/client'
    | '/client/guests/add'
    | '/client/guests'
    | '/client/profile'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth/login'
    | '/auth/register'
    | '/client/dashboard'
    | '/client'
    | '/client/guests/add'
    | '/client/guests'
    | '/client/profile'
  id:
    | '__root__'
    | '/'
    | '/auth/login'
    | '/auth/register'
    | '/client/dashboard'
    | '/client/'
    | '/client/guests/add'
    | '/client/guests/'
    | '/client/profile/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
  ClientDashboardRoute: typeof ClientDashboardRoute
  ClientIndexRoute: typeof ClientIndexRoute
  ClientGuestsAddRoute: typeof ClientGuestsAddRoute
  ClientGuestsIndexRoute: typeof ClientGuestsIndexRoute
  ClientProfileIndexRoute: typeof ClientProfileIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
  ClientDashboardRoute: ClientDashboardRoute,
  ClientIndexRoute: ClientIndexRoute,
  ClientGuestsAddRoute: ClientGuestsAddRoute,
  ClientGuestsIndexRoute: ClientGuestsIndexRoute,
  ClientProfileIndexRoute: ClientProfileIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth/login",
        "/auth/register",
        "/client/dashboard",
        "/client/",
        "/client/guests/add",
        "/client/guests/",
        "/client/profile/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/register": {
      "filePath": "auth/register.tsx"
    },
    "/client/dashboard": {
      "filePath": "client/dashboard.tsx"
    },
    "/client/": {
      "filePath": "client/index.tsx"
    },
    "/client/guests/add": {
      "filePath": "client/guests/add.tsx"
    },
    "/client/guests/": {
      "filePath": "client/guests/index.tsx"
    },
    "/client/profile/": {
      "filePath": "client/profile/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
