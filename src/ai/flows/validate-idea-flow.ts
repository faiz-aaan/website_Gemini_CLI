'use server';
/**
 * @fileOverview This file defines a Genkit flow for validating a business idea.
 *
 * The flow takes a user's idea as input and returns a structured analysis, including a feasibility score,
 * the reasoning behind the score, and actionable suggestions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const IdeaValidatorInputSchema = z.object({
  idea: z.string().describe('The user\'s business idea.'),
});
export type IdeaValidatorInput = z.infer<typeof IdeaValidatorInputSchema>;

const IdeaValidatorOutputSchema = z.object({
  feasibilityScore: z.number().min(1).max(10).describe('A score from 1 to 10 on the technical and operational feasibility of the idea.'),
  marketDemandScore: z.number().min(1).max(10).describe('A score from 1 to 10 on the potential market demand and user need for this idea.'),
  reason: z.string().describe('A short, concise reason for the given scores, considering both feasibility and market demand.'),
  suggestions: z.array(z.string()).describe('A list of 3-5 actionable suggestions or next steps to improve the idea.'),
  howWeCanHelp: z.string().describe("A short paragraph explaining how Carpenter.ai's services can help the user build this idea, referencing services like 'AI Automation', 'Custom AI Projects', or 'AI-powered Apps'."),
});
export type IdeaValidatorOutput = z.infer<typeof IdeaValidatorOutputSchema>;

export async function validateIdea(input: IdeaValidatorInput): Promise<IdeaValidatorOutput> {
  return validateIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'validateIdeaPrompt',
  input: { schema: IdeaValidatorInputSchema },
  output: { schema: IdeaValidatorOutputSchema },
  prompt: `You are an expert business analyst and startup consultant working for "Carpenter.ai". A user has submitted a business idea. 
  
  Your task is to analyze the idea and provide the following in a structured JSON format:
  1.  **feasibilityScore**: An integer score from 1 (not feasible) to 10 (highly feasible) based on technical and operational challenges.
  2.  **marketDemandScore**: An integer score from 1 (low demand) to 10 (high demand) based on potential user need and market size.
  3.  **reason**: A single, concise sentence explaining the reasoning behind your scores, combining insights from both feasibility and market demand.
  4.  **suggestions**: An array of 3 to 5 short, actionable suggestions for the user to improve the idea or as next steps.
  5.  **howWeCanHelp**: A short, encouraging paragraph that promotes Carpenter.ai. Explain how our services (e.g., 'AI Automation', 'Custom AI Projects', 'AI-powered Web Apps') can specifically help bring the user's idea to life based on their submission.

  Analyze the following idea:
  "{{{idea}}}"
  `,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ],
  },
});

const validateIdeaFlow = ai.defineFlow(
  {
    name: 'validateIdeaFlow',
    inputSchema: IdeaValidatorInputSchema,
    outputSchema: IdeaValidatorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
