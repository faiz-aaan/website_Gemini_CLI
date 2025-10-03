'use server';

import { validateIdea, type IdeaValidatorOutput } from '@/ai/flows/validate-idea-flow';
import { z } from 'zod';

const ideaValidatorSchema = z.object({
  idea: z.string().min(10, { message: 'Please describe your idea in at least 10 characters.' }).max(1000, { message: 'Idea must be 1000 characters or less.'}),
});

export type IdeaValidatorState = {
  result?: IdeaValidatorOutput;
  error?: string;
  submitted?: boolean;
};

export async function validateIdeaAction(
  prevState: IdeaValidatorState,
  formData: FormData
): Promise<IdeaValidatorState> {
  const validatedFields = ideaValidatorSchema.safeParse({
    idea: formData.get('idea'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.idea?.[0] || 'Invalid input.',
      submitted: false,
    };
  }

  try {
    const result = await validateIdea({ idea: validatedFields.data.idea });
    if (result) {
      return { result, submitted: true };
    }
    return { error: 'Failed to validate idea. The AI model might be busy or the response was invalid.', submitted: false };
  } catch (e: any) {
    console.error(e);
    // Check if the error is due to a safety policy violation
    if (e.message?.includes('finishReason: "SAFETY"')) {
      return {
        error: "Your idea could not be processed as it may violate our content policy. Please revise your prompt and try again.",
        submitted: false,
      };
    }
    return { error: 'An unexpected error occurred. Please try again later.', submitted: false };
  }
}
