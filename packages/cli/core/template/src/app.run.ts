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

const regexClassGroup = /([!\w+-][\w+:_/-]*?\w):\(([\w\s/-]*?)\)/gm;
function transformGroups(str: string) {
  return str.replace(regexClassGroup, (_, a: string, b: string) =>
    b
      .split(/\s/g)
      .map((i) => `${a}:${i}`)
      .join(' ')
  );
}

document.addEventListener('DOMNodeInserted', (event: MutationEvent) => {
  const nodes: NodeListOf<HTMLElement> = event.relatedNode.querySelectorAll('[class]');
  nodes.forEach((node: HTMLElement) => {
    const transformed = transformGroups(node.getAttribute('class') || '');
    if (node.getAttribute('class') != transformed) {
      node.setAttribute('class', transformed);
    }
  });
});
