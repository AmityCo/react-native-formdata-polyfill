declare var global: any;

if (navigator?.product === "ReactNative" && global?.FormData) {
  global.FormData.prototype.getAll ??= global.FormData.prototype.getParts;
}
