/** This function adds two numbers */
export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  /** This will trigger the lint rule */
  console.log("Add -0 + 3 =", add(-0, 3));
}
