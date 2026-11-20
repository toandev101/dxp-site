import { create } from "zustand";
import type { PillarKey } from "@/types/site";

interface UiState {
  isMobileMenuOpen: boolean;
  isDemoModalOpen: boolean;
  isSearchModalOpen: boolean;
  isChatOpen: boolean;
  demoModalSource: string;
  activePillar: PillarKey;
  billingCycle: "monthly" | "annual";
  setMobileMenuOpen: (open: boolean) => void;
  openDemoModal: (source?: string) => void;
  closeDemoModal: () => void;
  setSearchModalOpen: (open: boolean) => void;
  setChatOpen: (open: boolean) => void;
  setActivePillar: (pillar: PillarKey) => void;
  setBillingCycle: (cycle: "monthly" | "annual") => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  isDemoModalOpen: false,
  isSearchModalOpen: false,
  isChatOpen: false,
  demoModalSource: "general",
  activePillar: "build",
  billingCycle: "annual",
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  openDemoModal: (source = "general") => set({ isDemoModalOpen: true, demoModalSource: source }),
  closeDemoModal: () => set({ isDemoModalOpen: false }),
  setSearchModalOpen: (open) => set({ isSearchModalOpen: open }),
  setChatOpen: (open) => set({ isChatOpen: open }),
  setActivePillar: (pillar) => set({ activePillar: pillar }),
  setBillingCycle: (cycle) => set({ billingCycle: cycle }),
}));
