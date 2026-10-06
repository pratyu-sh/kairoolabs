"use server";

export interface FormData {
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
}

export interface FormState {
  success: boolean;
  error?: string;
}

export async function submitProjectInquiry(
  formData: FormData
): Promise<FormState> {
  // Validate required fields
  if (!formData.email || !formData.name || !formData.projectType) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Sanitize inputs (basic)
  const sanitize = (s: string) =>
    s.replace(/<[^>]*>/g, "").trim().slice(0, 2000);

  const clean = {
    projectType: sanitize(formData.projectType),
    description: sanitize(formData.description),
    budget: sanitize(formData.budget),
    timeline: sanitize(formData.timeline),
    name: sanitize(formData.name),
    email: sanitize(formData.email),
    company: sanitize(formData.company),
  };

  // Log for development (replace with email/Notion/Supabase integration)
  console.log("New project inquiry:", clean);

  // TODO: Integrate with email service (Resend), CRM, or Supabase
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'hello@kairoo.in',
  //   to: 'team@kairoo.in',
  //   subject: `New Project Inquiry — ${clean.name}`,
  //   html: `...`,
  // });

  // Simulate network delay
  await new Promise((r) => setTimeout(r, 600));

  return { success: true };
}
