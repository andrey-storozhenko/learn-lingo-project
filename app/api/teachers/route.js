import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";

export async function GET() {
  const snapshot = await get(ref(db, "teachers"));

  return Response.json(snapshot.val() || {});
}