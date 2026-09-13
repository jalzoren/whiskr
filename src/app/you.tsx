import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function YouScreen() {
  return <ThemedView style={styles.screen}><SafeAreaView edges={['top']} style={styles.safeArea}><ScrollView contentContainerStyle={styles.content}>
    <ThemedText style={styles.eyebrow} themeColor="textSecondary">A QUIET LITTLE ARCHIVE</ThemedText><ThemedText type="subtitle" style={styles.heading}>You</ThemedText>
    <View style={styles.profile}><View style={styles.avatar}><ThemedText style={styles.avatarText}>w</ThemedText></View><View><ThemedText style={styles.name}>Wandering whiskers</ThemedText><ThemedText type="small" themeColor="textSecondary">Oakwood neighborhood · since May</ThemedText></View></View>
    <View style={styles.stats}><View><ThemedText style={styles.statNumber}>18</ThemedText><ThemedText type="small" themeColor="textSecondary">sightings</ThemedText></View><View><ThemedText style={styles.statNumber}>7</ThemedText><ThemedText type="small" themeColor="textSecondary">day streak</ThemedText></View><View><ThemedText style={styles.statNumber}>3</ThemedText><ThemedText type="small" themeColor="textSecondary">regulars</ThemedText></View></View>
    <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>BADGES</ThemedText><View style={styles.badges}><Badge symbol="✦" title="First friend" detail="Your first sighting" /><Badge symbol="⌖" title="Alley cartographer" detail="10 pins nearby" /><Badge symbol="☾" title="Night wanderer" detail="3 after-dark visits" /></View>
    <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>PREFERENCES</ThemedText><Pressable style={styles.setting}><ThemedText type="smallBold">Evening theme</ThemedText><ThemedText type="small" themeColor="textSecondary">Soft sepia for night walks  ›</ThemedText></Pressable><Pressable style={styles.setting}><ThemedText type="smallBold">Privacy & location</ThemedText><ThemedText type="small" themeColor="textSecondary">Private by default  ›</ThemedText></Pressable>
  </ScrollView></SafeAreaView></ThemedView>;
}

function Badge({ symbol, title, detail }: { symbol: string; title: string; detail: string }) { return <View style={styles.badge}><View style={styles.badgeIcon}><ThemedText style={styles.badgeSymbol}>{symbol}</ThemedText></View><ThemedText type="smallBold">{title}</ThemedText><ThemedText type="small" themeColor="textSecondary">{detail}</ThemedText></View>; }
const styles = StyleSheet.create({ screen: { flex: 1 }, safeArea: { flex: 1 }, content: { padding: Spacing.four, paddingBottom: 130, gap: Spacing.three }, eyebrow: { fontSize: 11, letterSpacing: 1.4, fontWeight: '700' }, heading: { fontSize: 34 }, profile: { flexDirection: 'row', alignItems: 'center', gap: 14 }, avatar: { width: 62, height: 62, borderRadius: 31, backgroundColor: '#D4A23A', justifyContent: 'center', alignItems: 'center' }, avatarText: { fontSize: 34, color: '#FFF9E9', fontWeight: '700' }, name: { fontSize: 18, fontWeight: '700', marginBottom: 3 }, stats: { flexDirection: 'row', justifyContent: 'space-between', padding: Spacing.three, backgroundColor: '#E9EEE8', borderRadius: 18 }, statNumber: { fontSize: 24, fontWeight: '700' }, sectionLabel: { letterSpacing: 1, marginTop: 6 }, badges: { flexDirection: 'row', gap: 9 }, badge: { flex: 1, backgroundColor: '#F0F0E7', padding: 12, borderRadius: 16, gap: 4 }, badgeIcon: { width: 34, height: 34, borderRadius: 12, backgroundColor: '#E4C778', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }, badgeSymbol: { fontSize: 18, color: '#6D5724' }, setting: { padding: 16, borderRadius: 14, backgroundColor: '#E9EEE8', gap: 3 } });
