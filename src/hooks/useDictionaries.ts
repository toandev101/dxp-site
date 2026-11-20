"use client";

import { useContext, useMemo } from "react";
import { TranslationContext } from "@/providers/translation-provider";

const useDictionaries = () => {
  const ctx = useContext(TranslationContext);

  if (!ctx) {
    throw new Error("useDictionaries must be used inside <TranslationProvider>");
  }

  return useMemo(() => {
    return { lang: ctx.lang, t: ctx.messages };
  }, [ctx.lang, ctx.messages]);
};

export default useDictionaries;
