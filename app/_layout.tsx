import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import * as splashscreen from "expo-splash-screen";
import { useEffect } from "react";

splashscreen.preventAutoHideAsync(); // melarang untuk menutup touchscreennya secara otomatis

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "interna-regular": 
    require("../assets/fonts/interna-regular.ttf"), // Memuat font kustom
  });

  useEffect(() => {
    if (loaded && error == null) {
      SplashScreen.hideAsync(); // Mmenyembunyikan splash screen 
    } 
  }, [loaded,error]);

  if (!loaded && error) {
    return null; // Menampilkan null jika font belum dimuat
  }
  return <Stack />;

}