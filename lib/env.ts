export function getEnvTitle() {
  const env = process.env.NEXT_PUBLIC_ENV;

  let result;

  if (env === "live") {
    result = "Tree Data";
  } else if (env === "test") {
    result = "TEST - Tree Data V3";
  } else {
    result = "LOCAL - TDV3";
  }

  return result;

}
