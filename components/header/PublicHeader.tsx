import { getEnvTitle } from "@/lib/env";

const title = getEnvTitle();

export default function PublicHeader() {
  return (
      <h1 className="headerTitle">{title}</h1>
  );
}
