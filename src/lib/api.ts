export async function submitEmail(email: string): Promise<{ success: boolean }> {
  // Placeholder — swap this for a real endpoint (Resend, Mailchimp, Supabase, etc.)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`[Arx] Email submitted: ${email}`);
  return { success: true };
}
