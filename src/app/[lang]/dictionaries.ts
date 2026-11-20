import { cache } from "react";
import { enMessages, type Dictionary } from "@/i18n/messages/en";
import { viMessages } from "@/i18n/messages/vi";

export const getDictionary = cache(async (lang: string): Promise<Dictionary> => {
  if (lang === "vi") {
    return viMessages;
  }
  return enMessages;
});
