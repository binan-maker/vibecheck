import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function PlanScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Product Clarity</ThemedText>
      <ThemedText>
        This app is a digital bottle-spin game for in-person groups. The app gives the prompt,
        people answer and perform in real life.
      </ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">System vs Feature</ThemedText>
        <ThemedText>
          • System = player flow (mode → spin → selected player → truth/dare → next turn).
        </ThemedText>
        <ThemedText>
          • Features = mode buttons, spin action, prompt deck, timer, score, ad rewards.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Pain Solved</ThemedText>
        <ThemedText>• Bored circles with no structure.</ThemedText>
        <ThemedText>• Awkward silence in gatherings.</ThemedText>
        <ThemedText>• Friends on phones instead of interacting.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Market Reality</ThemedText>
        <ThemedText>
          Similar apps already exist (Truth or Dare classics), so your advantage must be cleaner UX,
          local culture packs, and better replay loops.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Prototype-first Roadmap</ThemedText>
        <ThemedText>1) MVP now: offline mode + spin + truth/dare prompt deck.</ThemedText>
        <ThemedText>2) Next: timer, streak points, and category packs.</ThemedText>
        <ThemedText>3) Later: share cards, leaderboards, ad rewards, optional AI prompts.</ThemedText>
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
