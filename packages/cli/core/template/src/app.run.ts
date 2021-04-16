import { DI } from '@leanup/lib/helpers/injector';
export const importCatch = (error: unknown): void => {
  console.warn(error);
};

export const run = (name: string, version: string | null, bootstrap: Function): void => {
  DI.register('Framework', {
    name,
    version,
  });
  import(
    /* webpackMode: "eager" */
    /* webpackChunkName: "shares.register" */
    './shares/register'
  )
    .then(() => {
      import(
        /* webpackMode: "eager" */
        /* webpackChunkName: "shares.routing" */
        './shares/routing'
      )
        .then(() => {
          bootstrap();
        })
        .catch(importCatch);
    })
    .catch(importCatch);
};
