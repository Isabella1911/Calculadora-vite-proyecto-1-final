import { beforeAll, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GlobalWindow } from "happy-dom";


// Configurar el DOM global con happy-dom
beforeAll(() => {
  const window = new GlobalWindow();
  
  // @ts-ignore
  global.window = window;
  // @ts-ignore
  global.document = window.document;
  // @ts-ignore
  global.navigator = window.navigator;
  // @ts-ignore
  global.HTMLElement = window.HTMLElement;
  // @ts-ignore
  global.HTMLAnchorElement = window.HTMLAnchorElement;
  // @ts-ignore
  global.HTMLButtonElement = window.HTMLButtonElement;
  // @ts-ignore
  global.MouseEvent = window.MouseEvent;
  // @ts-ignore
  global.Event = window.Event;
  // @ts-ignore
  global.HTMLInputElement = window.HTMLInputElement;
  // @ts-ignore
  global.HTMLFormElement = window.HTMLFormElement;
});

// Limpiar después de cada test
afterEach(() => {
  cleanup();
});