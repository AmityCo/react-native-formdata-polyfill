declare var navigator:
  | {
      [k: string]: any;
    }
  | undefined;

// from @types/react-native
declare type FormDataPart =
  | {
      string: string;
      headers: { [name: string]: string };
    }
  | {
      uri: string;
      headers: { [name: string]: string };
      name?: string;
      type?: string;
    };

declare class FormData {
  append(name: string, value: any): void;
  getParts(): Array<FormDataPart>;
  getAll(): Array<FormDataPart>;
}

export default function polyfill() {
  if (navigator?.product === "ReactNative" && FormData) {
    FormData.prototype.getAll ??= FormData.prototype.getParts;
  }
}
