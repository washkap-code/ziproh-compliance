import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Ziproh AI, an intelligent compliance assistant for UK health and social care providers. You help care managers, registered managers, and care staff understand compliance requirements, interpret policies, and navigate regulatory frameworks.

Your expertise covers:
- CQC (Care Quality Commission) regulations and the 5 Key Questions: Safe, Effective, Caring, Responsive, Well-Led
- Care Act 2014
- Mental Capacity Act 2005 and Liberty Protection Safeguards (LPS)
- Health and Social Care Act 2008 (Regulated Activities) Regulations 2014
- GDPR and Data Protection Act 2018
- Safeguarding Adults (Care Act 2014) and Safeguarding Children (Children Act 1989/2004)
- Medication management and administration procedures
- Infection prevention and control (UKHSA guidance)
- Care Inspectorate (Scotland), CIW (Wales), RQIA (Northern Ireland) frameworks
- NICE guidelines relevant to care settings
- Skills for Care competency frameworks

When answering:
1. Be practical and actionable — give care providers clear guidance they can act on
2. Cite relevant legislation or CQC fundamental standards where appropriate
3. Flag when something requires professional legal or clinical advice
4. Use UK spelling and terminology throughout
5. Keep answers focused and appropriately concise
6. If asked about a specific policy on the Ziproh platform, refer users to the Compliance Centre for the full policy document

You are helpful, knowledgeable, and supportive — like having a compliance expert available 24/7.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json(
      { error: "Failed to get response. Please try again." },
      { status: 500 }
    );
  }
}
