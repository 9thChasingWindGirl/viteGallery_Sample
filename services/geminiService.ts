import { GoogleGenAI } from "@google/genai";
import { Artwork } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateArtCritique = async (artwork: Artwork): Promise<string> => {
  // AI features have been disabled. Returning a default message.
  return "The artwork speaks for itself, defying simple categorization.";
};