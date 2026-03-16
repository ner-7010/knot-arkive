import { headers } from "next/headers";

export async function isAdmin(): Promise<boolean> {

  const h = await headers();

  const auth = h.get("authorization");

  if (!auth) return false;

  const base64 = auth.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString();
  const [user, pass] = decoded.split(":");

  if (
    user === process.env.BASIC_USER &&
    pass === process.env.BASIC_PASS
  ) {
    return true;
  }

  return false;
}