import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.error('OpenAI API key is missing. Document analysis features will be disabled.');
}

const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key', // Prevent initialization error
  dangerouslyAllowBrowser: true
});

export const analyzeDocument = async (text: string): Promise<string> => {
  if (!apiKey) {
    return "Document analysis is currently unavailable. Please configure the OpenAI API key.";
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert document analyzer. Analyze the provided document text and provide a concise, professional analysis focusing on key information, main points, and any notable patterns or insights."
        },
        {
          role: "user",
          content: `Please analyze this document text and provide a clear, structured analysis:\n\n${text}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content || "No analysis available.";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to analyze document. Please try again.');
  }
};