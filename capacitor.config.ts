import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kafatiartstudio.kafati_art_studio',
  appName: 'kafati_art_studio',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '9d450253',
      channel: 'Production',
      autoUpdateMethod: 'background'
    }
  }
};

export default config;