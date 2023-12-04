import * as jsYaml from "js-yaml";

declare module "js-yaml" {
  export function safeLoad(input: string, options?: jsYaml.LoadOptions): any;
  // ... any other custom typings or overrides
}
