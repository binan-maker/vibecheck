import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type Mode = 'Friends' | 'Couples' | 'College' | 'Team';

type PromptType = 'Truth' | 'Dare';

const modePlayers: Record<Mode, string[]> = {
  Friends: ['Ayaan', 'Sara', 'Maya', 'Zaid', 'Nora'],
  Couples: ['Partner A', 'Partner B'],
  College: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'],
  Team: ['Lead', 'Designer', 'Dev', 'QA', 'Ops'],
};

const truthPrompts = [
  'What is one thing you hide when you feel insecure?',
  'Which person in this group do you trust the most, and why?',
  'What fear is currently stopping you from growing?',
  'What is one thing you wish people understood about you?',
  'When did you last feel truly proud of yourself?',
];

const darePrompts = [
  'Do a 15-second victory dance in the middle of the circle.',
  'Speak in a dramatic movie voice until the next turn.',
  'Give a one-minute motivational speech to the group.',
  'Do 10 squats and finish with a superhero pose.',
  'Compliment every player in under 30 seconds.',
];

export default function HomeScreen() {
  const [mode, setMode] = useState<Mode>('Friends');
  const [selectedPlayer, setSelectedPlayer] = useState('Tap spin to start');
  const [promptType, setPromptType] = useState<PromptType>('Truth');
  const [prompt, setPrompt] = useState('The bottle has not spun yet.');
  const players = useMemo(() => modePlayers[mode], [mode]);

  const spinBottle = () => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    const nextType: PromptType = Math.random() > 0.5 ? 'Truth' : 'Dare';
    const promptPool = nextType === 'Truth' ? truthPrompts : darePrompts;
    const randomPrompt = promptPool[Math.floor(Math.random() * promptPool.length)];

    setSelectedPlayer(randomPlayer);
    setPromptType(nextType);
    setPrompt(randomPrompt);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Truth & Dare Prototype</ThemedText>
      <ThemedText style={styles.subtitle}>
        Digital bottle-spin for real-life circles. Select mode, spin, and play face-to-face.
      </ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Choose Mode</ThemedText>
        <View style={styles.modeRow}>
          {(Object.keys(modePlayers) as Mode[]).map((option) => {
            const isActive = mode === option;
            return (
              <Pressable
                key={option}
                onPress={() => setMode(option)}
                style={[styles.modeButton, isActive && styles.modeButtonActive]}>
                <ThemedText style={isActive ? styles.modeTextActive : undefined}>{option}</ThemedText>
              </Pressable>
            );
          })}
        </View>
        <ThemedText>Players: {players.join(' • ')}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Bottle Result</ThemedText>
        <ThemedText style={styles.playerText}>{selectedPlayer}</ThemedText>
        <ThemedText style={styles.badge}>{promptType}</ThemedText>
        <ThemedText>{prompt}</ThemedText>
        <Pressable onPress={spinBottle} style={styles.spinButton}>
          <ThemedText style={styles.spinText}>Spin Bottle</ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Prototype Notes</ThemedText>
        <ThemedText>• Works offline with local prompt lists.</ThemedText>
        <ThemedText>• No login or backend needed for MVP.</ThemedText>
        <ThemedText>• Next step: add timer, score, and custom challenge packs.</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  subtitle: {
    marginTop: 6,
  },
  card: {
    borderRadius: 14,
    padding: 16,
    gap: 10,
  },
  modeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  modeButton: {
    borderWidth: 1,
    borderColor: '#667085',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  modeButtonActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  modeTextActive: {
    color: '#f8fafc',
  },
  playerText: {
    fontSize: 24,
    fontWeight: '700',
  },
  badge: {
    fontWeight: '700',
    color: '#0f766e',
  },
  spinButton: {
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#7c3aed',
    paddingVertical: 12,
    alignItems: 'center',
  },
  spinText: {
    color: '#fafafa',
    fontWeight: '700',
  },
});
