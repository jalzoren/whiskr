import { Image } from 'expo-image';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sightings, vibeColors, vibeLabels } from '@/constants/sightings';
import { Spacing } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AtlasScreen() {
  return <ThemedView style={styles.screen}><SafeAreaView edges={['top']} style={styles.safeArea}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    <ThemedText style={styles.eyebrow} themeColor="textSecondary">YOUR NEIGHBORHOOD</ThemedText>
    <View style={styles.headerRow}><ThemedText type="subtitle" style={styles.heading}>Neighborhood atlas</ThemedText><Pressable style={styles.trail}><ThemedText type="smallBold">Trail mode</ThemedText></Pressable></View>
    <View style={styles.map}><View style={styles.mapGrid} /><View style={[styles.pin, styles.pinOne]}><ThemedText style={styles.pinText}>✦</ThemedText></View><View style={[styles.pin, styles.pinTwo]}><ThemedText style={styles.pinText}>✦</ThemedText></View><View style={[styles.pin, styles.pinThree]}><ThemedText style={styles.pinText}>✦</ThemedText></View><View style={styles.mapLabel}><ThemedText type="smallBold">3 friends nearby</ThemedText><ThemedText type="small" themeColor="textSecondary">Tap a pin to peek</ThemedText></View></View>
    <View style={styles.filterRow}><View style={styles.activeFilter}><ThemedText type="smallBold" style={styles.activeText}>All sightings</ThemedText></View><View style={styles.filter}><ThemedText type="smallBold">This month</ThemedText></View><View style={styles.filter}><ThemedText type="smallBold">♡ Regulars</ThemedText></View></View>
    <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>RECENTLY PLACED</ThemedText>
    {sightings.map((sighting) => <View key={sighting.id} style={styles.placeRow}><Image source={{ uri: sighting.photo }} style={styles.thumb} /><View style={styles.placeCopy}><ThemedText type="smallBold">{sighting.name}</ThemedText><ThemedText type="small" themeColor="textSecondary">{sighting.place}</ThemedText></View><View style={[styles.dot, { backgroundColor: vibeColors[sighting.vibe] }]}><ThemedText style={styles.dotText}>{vibeLabels[sighting.vibe].slice(0, 1)}</ThemedText></View></View>)}
  </ScrollView></SafeAreaView></ThemedView>;
}

const styles = StyleSheet.create({ screen: { flex: 1 }, safeArea: { flex: 1 }, content: { padding: Spacing.four, paddingBottom: 130, gap: Spacing.three }, eyebrow: { fontSize: 11, letterSpacing: 1.5, fontWeight: '700' }, headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, heading: { fontSize: 32 }, trail: { backgroundColor: '#E8ECE5', paddingHorizontal: 13, paddingVertical: 9, borderRadius: 14 }, map: { height: 360, borderRadius: 24, overflow: 'hidden', backgroundColor: '#DCE8D7', position: 'relative' }, mapGrid: { flex: 1, opacity: 0.45, backgroundColor: '#C8DAC4', borderWidth: 18, borderColor: '#DCE8D7' }, pin: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#24332E', borderWidth: 4, borderColor: '#F7F6F1', justifyContent: 'center', alignItems: 'center', position: 'absolute' }, pinOne: { top: 78, left: 68 }, pinTwo: { top: 168, right: 74 }, pinThree: { bottom: 76, left: 140 }, pinText: { color: '#F3C867', fontSize: 18 }, mapLabel: { position: 'absolute', left: 16, bottom: 16, backgroundColor: '#F7F6F1', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 14, gap: 2 }, filterRow: { flexDirection: 'row', gap: 8 }, activeFilter: { backgroundColor: '#24332E', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 14 }, activeText: { color: '#F7F6F1' }, filter: { backgroundColor: '#E8ECE5', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 14 }, sectionLabel: { marginTop: 8, letterSpacing: 1 }, placeRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 5 }, thumb: { width: 48, height: 48, borderRadius: 14 }, placeCopy: { flex: 1, gap: 2 }, dot: { width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }, dotText: { color: '#FFFDF6', fontWeight: '700' } });
