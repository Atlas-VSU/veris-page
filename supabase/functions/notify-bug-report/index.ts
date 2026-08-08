Deno.serve(async (req) => {
  let record;
  try {
    const body = await req.json();
    record = body.record;
  } catch (err) {
    console.error("Failed to parse request body:", err);
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!record) {
    return new Response(JSON.stringify({ error: "Missing record in request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { reporter_email, title, description, category } = record;

  if (!reporter_email || !title || !description) {
    console.error("Missing required fields:", record);
    return new Response(JSON.stringify({ error: "Missing required problem report fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const displayCategory = category || "Uncategorized";

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #111827; margin-top: 0;">New Bug Report</h2>
      <p style="color: #6b7280; margin-bottom: 24px;">A client has submitted a new bug report.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Title</td>
          <td style="padding: 8px 0; font-weight: bold; color: #111827;">${title}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Reporter Email</td>
          <td style="padding: 8px 0; color: #111827;">${reporter_email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Category</td>
          <td style="padding: 8px 0;">
            <span style="background: #6b7280; color: white; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: bold; text-transform: uppercase;">${displayCategory}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Description</td>
          <td style="padding: 8px 0; color: #111827;">${description}</td>
        </tr>
      </table>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "veris-dev@vsu.edu.ph",
      subject: `New Bug Report: ${title}`,
      html: emailHtml,
    }),
  });

  const data = await res.json();
  console.log("Resend response status:", res.status);
  console.log("Resend response body:", JSON.stringify(data));

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
});