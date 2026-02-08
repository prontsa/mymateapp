
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function findLocationData(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Find the official IANA timezone and location details for the following query: "${query}". Respond with the city name, country, and valid IANA timezone string.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cityName: { type: Type.STRING },
            country: { type: Type.STRING },
            timezone: { type: Type.STRING, description: "IANA timezone string like 'America/New_York'" },
          },
          required: ["cityName", "country", "timezone"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini location search failed:", error);
    return null;
  }
}

export async function getGreeting(timeOfDay: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a very short (1-2 words), friendly greeting for someone in their ${timeOfDay}.`,
    });
    return response.text.trim() || (timeOfDay === 'morning' ? 'Good morning!' : 'Hello!');
  } catch {
    return 'Hello!';
  }
}
