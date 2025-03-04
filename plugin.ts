const plugin: Deno.lint.Plugin = {
  name: "no-negative-zero-rule",
  rules: {
    "no-negative-zero-rule": {
      create(context) {
        return {
          Literal(node) {
            // deno-lint-ignore no-compare-neg-zero
            if (node.value === -0.0) {
              context.report({
                node,
                message: "Negative zero is not allowed",
                hint: "Use 0.0 instead of -0.0",
                fix(fixer) {
                  return fixer.replaceText(node, "0.0");
                },
              });
            }
          },
        };
      },
    },
  },
};

export default plugin;
