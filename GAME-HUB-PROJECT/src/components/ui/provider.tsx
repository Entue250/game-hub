// src/components/ui/provider.tsx

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import React from "react";

// Optional: Custom Chakra theme (if required)
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Default theme mode
    useSystemColorMode: true, // Match system theme preference
  },
});

interface ProviderProps {
  children: React.ReactNode;
}

// Combine ChakraProvider and ThemeProvider
export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeProvider>
  );
};
