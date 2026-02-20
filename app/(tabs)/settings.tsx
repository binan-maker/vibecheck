import Constants from 'expo-constants';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const appVersion = Constants.expoConfig?.version ?? '1.0.0';

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Settings</ThemedText>
      <ThemedText>Manage your app information and quick help for gameplay.</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">User Manual</ThemedText>
        <ThemedText>1) Sit in a circle and choose a mode.</ThemedText>
        <ThemedText>2) Tap Spin Bottle.</ThemedText>
        <ThemedText>3) Selected player does Truth or Dare.</ThemedText>
        <ThemedText>4) Continue to next turn and repeat.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Game Tips</ThemedText>
        <ThemedText>• Keep prompts respectful and fun for all players.</ThemedText>
        <ThemedText>• Skip any challenge that feels unsafe.</ThemedText>
        <ThemedText>• For couples mode, prefer emotional and communication prompts.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">App Version</ThemedText>
        <ThemedText>Current version: {appVersion}</ThemedText>
        <ThemedText>Platform support: Android, iOS, and Web.</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  card: {
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
});
