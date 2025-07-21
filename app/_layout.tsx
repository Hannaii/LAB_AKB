import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // 🧷 5 Font Statis
    "Combo": require("../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "Estonia": require("../assets/fonts/interna-regular.ttf"),
    "IngridDarling": require("../assets/fonts/Interna-VariableFont_opsz,wght.ttf"),
    "JacquesFrancoisShadow": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "SyneTactile": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),


    // 🧷 5 Variable Fonts
    "Bitcount": require("../assets/fonts/Poppins-BlackItalic.ttf"),
    "Manrope": require("../assets/fonts/Poppins-Bold.ttf"),
    "Quicksand": require("../assets/fonts/Poppins-BoldItalic.ttf"),
    "SmoochSans": require("../assets/fonts/Poppins-LightItalic.ttf"),
    "JosefinSlab": require("../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
}