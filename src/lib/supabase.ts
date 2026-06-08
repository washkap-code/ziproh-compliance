import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Database Types ───────────────────────────────────────────────
export type Profile = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  org_name: string;
  service_type: string;
  regulator: string;
  plan: "starter" | "professional" | "enterprise";
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  subscription_status: "trialing" | "active" | "past_due" | "canceled";
  trial_ends_at: string;
  created_at: string;
};

export type ReadRecord = {
  id: string;
  user_id: string;
  document_id: string;
  read_at: string;
};

export type UploadedDocument = {
  id: string;
  org_id: string;
  name: string;
  file_url: string;
  category: string;
  uploaded_by: string;
  created_at: string;
};

// ─── Auth helpers ─────────────────────────────────────────────────
export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(
  email: string,
  password: string,
  metadata: Omit<Profile, "id" | "email" | "created_at" | "stripe_customer_id" | "stripe_subscription_id">
) {
  return supabase.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) return null;
  return data;
}

// ─── Reading records ──────────────────────────────────────────────
export async function markDocumentRead(userId: string, documentId: string) {
  return supabase.from("read_records").upsert({
    user_id: userId,
    document_id: documentId,
    read_at: new Date().toISOString(),
  });
}

export async function getReadDocuments(userId: string): Promise<string[]> {
  const { data } = await supabase
    .from("read_records")
    .select("document_id")
    .eq("user_id", userId);
  return (data ?? []).map((r) => r.document_id);
}
