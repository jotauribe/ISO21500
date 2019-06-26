import * as _ from "lodash";

export const applyActionNamespace = function applyActionNamespace(
  actions: {},
  namespace?: string
) {
  const namespaceOrNothing = namespace ? `[${namespace}]` : "";

  return _.mapValues(actions, (value: string, _: any) =>
    [namespaceOrNothing, value].join(" - ")
  );
};
