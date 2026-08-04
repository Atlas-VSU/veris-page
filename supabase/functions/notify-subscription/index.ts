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

  const { org_name, org_email, requester_name, student_id, tier } = record;

  if (!org_name || !org_email || !requester_name || !student_id || !tier) {
    console.error("Missing required fields:", record);
    return new Response(JSON.stringify({ error: "Missing required subscription fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const tierColors: Record<string, string> = {
    basic: "#6b7280",
    plus: "#2563eb",
    premium: "#7c3aed",
  };
  const tierColor = tierColors[tier] || "#6b7280";

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #111827; margin-top: 0;">New Subscription Request</h2>
      <p style="color: #6b7280; margin-bottom: 24px;">A client has submitted a new subscription form.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Organization</td>
          <td style="padding: 8px 0; font-weight: bold; color: #111827;">${org_name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Org Email</td>
          <td style="padding: 8px 0; color: #111827;">${org_email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Requester</td>
          <td style="padding: 8px 0; color: #111827;">${requester_name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Student ID</td>
          <td style="padding: 8px 0; color: #111827;">${student_id}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Tier</td>
          <td style="padding: 8px 0;">
            <span style="background: ${tierColor}; color: white; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: bold; text-transform: uppercase;">${tier}</span>
          </td>
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
      subject: `New Subscription Request: ${org_name} (${tier})`,
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