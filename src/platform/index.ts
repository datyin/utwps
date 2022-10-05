import { isNil } from "../generic";
import { isEmptyString } from "../string";

export function isNodeJS(): boolean {
  return !isNil(process) && !isNil(process.versions);
}

export function isBrowser(): boolean {
  return !isNil(window);
}

export function isElectron(contextName: string = ""): boolean {
  if (isBrowser() && !isEmptyString(contextName) && !isNil(window[contextName])) {
    return true;
  }

  if (!isBrowser() && (window.process as any)?.type === "renderer") {
    return true;
  }

  if (isNodeJS() && !!process.versions.electron) {
    return true;
  }

  if (navigator?.userAgent?.toLowerCase().includes("electron")) {
    return true;
  }

  return false;
}

export function isTauri(): boolean {
  return !isNil(window) && !isNil((window as any).__TAURI__);
}
