import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "ionic.time.tracker",
  appName: "ionic-time-tracker",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
