// This file is machine-generated - changes may be lost.

'use server';

/**
 * @fileOverview Generates a tailored introductory content for ApexForge Digital.
 *
 * - generateCompanyIntro - A function that generates the company intro.
 * - GenerateCompanyIntroInput - The input type for the generateCompanyIntro function.
 * - GenerateCompanyIntroOutput - The return type for the generateCompanyIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCompanyIntroInputSchema = z.object({
  currentTrends: z
    .string()
    .describe(
      'A description of the current trends in software development.'
    ),
});

export type GenerateCompanyIntroInput = z.infer<typeof GenerateCompanyIntroInputSchema>;

const GenerateCompanyIntroOutputSchema = z.object({
  introduction: z
    .string()
    .describe('The tailored introductory content for ApexForge Digital.'),
});

export type GenerateCompanyIntroOutput = z.infer<typeof GenerateCompanyIntroOutputSchema>;

export async function generateCompanyIntro(
  input: GenerateCompanyIntroInput
): Promise<GenerateCompanyIntroOutput> {
  return generateCompanyIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCompanyIntroPrompt',
  input: {schema: GenerateCompanyIntroInputSchema},
  output: {schema: GenerateCompanyIntroOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating introductory content for software development companies.

You will use this information about the current trends in software development to generate an introduction for ApexForge Digital, a software company.

Current Trends: {{{currentTrends}}}

Introduction:`,
});

const generateCompanyIntroFlow = ai.defineFlow(
  {
    name: 'generateCompanyIntroFlow',
    inputSchema: GenerateCompanyIntroInputSchema,
    outputSchema: GenerateCompanyIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
