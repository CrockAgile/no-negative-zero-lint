import { assertEquals } from "jsr:@std/assert";
import plugin from "./plugin.ts";

Deno.test("no-negative-zero-rule", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "dummy.ts",
    "add(-0.0, 3.0);",
  );
  assertEquals(diagnostics.length, 1);
  const diagnostic = diagnostics[0];
  assertEquals(diagnostic.message, "Negative zero is not allowed");
  assertEquals(diagnostic.hint, "Use 0.0 instead of -0.0");
  assertEquals(diagnostic.fix as unknown as Deno.lint.Fix[], [{
    range: [5, 8],
    text: "0.0",
  }]);
});
