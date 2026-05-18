export function getEnvTitle() {
  const env = process.env.NEXT_PUBLIC_ENV;

  return env === "live"
    ? "Tree Data"
    : env === "test"
    ? "TEST - Tree Data V2"
    : "LOCAL - Tree Data V2";
}
