const plugin: Deno.lint.Plugin = {
  name: "no-negative-zero-rule",
  rules: {
    "no-negative-zero-rule": {
      create(context) {
        return {
          UnaryExpression(node) {
            if (node.operator === "-") {
              const argument = node.argument;
              if (
                argument.type === "Literal" && argument.raw.startsWith("0") &&
                argument.value === 0
              ) {
                context.report({
                  node,
                  message: "Negative zero is not allowed",
                  hint: "Use 0 instead of -0",
                  fix(fixer) {
                    return fixer.replaceText(node, "0");
                  },
                });
              }
            }
          },
        };
      },
    },
  },
};

/** This plugin is used to enforce the use of 0.0 instead of -0.0 */
export default plugin;
