/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/eslint-plugin-rxjs-angular
 */

import { ESLintUtils } from "@typescript-eslint/experimental-utils";

export const ruleCreator = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/cartant/eslint-plugin-rxjs-angular/tree/main/docs/rules/${name}.md`
);
