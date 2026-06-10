/**
 * POST /api/upload/logo
 *
 * Accepts a multipart/form-data request with a `file` field (image).
 * Uploads the image to Supabase Storage (org-logos bucket),
 * then saves the public URL to profiles.logo_url.
 *
 * Allowed types: image/png, image/jpeg, image/webp, image/gif, image/svg+xml
 * Max size: 2 MB
 */

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const ALLOWED_TYPES = new Set([
  "image/png", "image/jpeg", "image/jpg",
  "image/webp", "image/gif", "image/svg+xml",
]);
const MAX_BYTES = 2 * 1024 * 1024; // 2 MB

export async function POST(req: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { /* read-only */ },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  // ── Parse multipart form ──────────────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // ── Validate ──────────────────────────────────────────────────────────────
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Unsupported file type. Please upload a PNG, JPEG, WebP, GIF, or SVG." },
      { status: 415 }
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "File too large. Maximum logo size is 2 MB." },
      { status: 413 }
    );
  }

  // ── Upload to Supabase Storage ─────────────────────────────────────────────
  const ext      = file.name.split(".").pop() ?? "png";
  const storagePath = `${user.id}/logo.${ext}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer      = Buffer.from(arrayBuffer);

  const { error: uploadError } = await supabase.storage
    .from("org-logos")
    .upload(storagePath, buffer, {
      contentType: file.type,
      upsert: true,         // replace any existing logo
    });

  if (uploadError) {
    console.error("[upload-logo] storage error:", uploadError);
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  // ── Get public URL ────────────────────────────────────────────────────────
  const { data: { publicUrl } } = supabase.storage
    .from("org-logos")
    .getPublicUrl(storagePath);

  // Append cache-busting timestamp so the browser always fetches the latest
  const logoUrl = `${publicUrl}?t=${Date.now()}`;

  // ── Save URL to profile ────────────────────────────────────────────────────
  const { error: profileError } = await supabase
    .from("profiles")
    .update({ logo_url: logoUrl })
    .eq("id", user.id);

  if (profileError) {
    console.error("[upload-logo] profile update error:", profileError);
    return NextResponse.json({ error: profileError.message }, { status: 500 });
  }

  return NextResponse.json({ logoUrl }, { status: 200 });
}

// ─── DELETE /api/upload/logo — remove logo ────────────────────────────────────

export async function DELETE(_req: NextRequest) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });

  // Try common extensions
  for (const ext of ["png", "jpeg", "jpg", "webp", "gif", "svg"]) {
    await supabase.storage.from("org-logos").remove([`${user.id}/logo.${ext}`]);
  }

  await supabase.from("profiles").update({ logo_url: null }).eq("id", user.id);

  return NextResponse.json({ success: true });
}
