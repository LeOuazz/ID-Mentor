// lib/memory.ts
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase"; // your firebase config

const db = getFirestore(app);

/** Example: retrieve short summary from Firestore */
export async function getUserDomainSummary(userId: string, domain: string): Promise<string> {
    const ref = doc(db, "users", userId, "summaries", domain);
    const snap = await getDoc(ref);
    if (!snap.exists()) return "";
    const data = snap.data();
    return data.shortSummary || "";
}
