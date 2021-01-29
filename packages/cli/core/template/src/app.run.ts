import { DI } from '@leanup/lib/helpers/injector';

export const importCatch = (error: unknown): void => {
  console.warn(error);
};

export const run = (name: string, packageJson: { default: Object }, bootstrap: Function): void => {
  DI.register('Framework', {
    ...packageJson.default,
    name: name,
  });
  import('./shares/register')
    .then(() => {
      import('./shares/routing')
        .then(() => {
          bootstrap();
        })
        .catch(importCatch);
    })
    .catch(importCatch);
};
