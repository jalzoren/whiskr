import { Image } from 'expo-image';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sightings } from '@/constants/sightings';
import { Spacing } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function RegularsScreen() {
  return <ThemedView style={styles.screen}><SafeAreaView edges={['top']} style={styles.safeArea}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    <ThemedText style={styles.eyebrow} themeColor="textSecondary">THE ONES WHO KEEP COMING BACK</ThemedText><ThemedText type="subtitle" style={styles.heading}>Your regulars</ThemedText><ThemedText style={styles.intro} themeColor="textSecondary">Some faces become part of the neighborhood rhythm.</ThemedText>
    <View style={styles.shelf}>{sightings.slice(0, 2).map((sighting, index) => <Pressable key={sighting.id} style={styles.regularCard}><Image source={{ uri: sighting.photo }} style={styles.regularImage} contentFit="cover" /><View style={styles.regularOverlay}><ThemedText style={styles.regularName}>{sighting.name.replace('?', '')}</ThemedText><ThemedText type="small" style={styles.regularVisits}>{sighting.visits} visits · {index === 0 ? 'most seen' : 'getting curious'}</ThemedText></View></Pressable>)}</View>
    <View style={styles.nextBadge}><View style={styles.badgeCircle}><ThemedText style={styles.badgeGlyph}>✦</ThemedText></View><View style={styles.badgeCopy}><ThemedText type="smallBold">Friend of Ferals</ThemedText><ThemedText type="small" themeColor="textSecondary">Two more visits to unlock this keepsake.</ThemedText></View><ThemedText style={styles.progress}>3 / 5</ThemedText></View>
    <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>VISIT NOTES</ThemedText>{sightings.map((sighting) => <View key={sighting.id} style={styles.noteRow}><View style={styles.date}><ThemedText type="smallBold">{sighting.time.split(',')[0]}</ThemedText></View><View style={styles.noteLine}><ThemedText type="smallBold">{sighting.name}</ThemedText><ThemedText type="small" themeColor="textSecondary">{sighting.note}</ThemedText></View></View>)}
  </ScrollView></SafeAreaView></ThemedView>;
}

const styles = StyleSheet.create({ screen: { flex: 1 }, safeArea: { flex: 1 }, content: { padding: Spacing.four, paddingBottom: 130, gap: Spacing.three }, eyebrow: { fontSize: 11, letterSpacing: 1.4, fontWeight: '700' }, heading: { fontSize: 34 }, intro: { fontSize: 16, lineHeight: 24 }, shelf: { flexDirection: 'row', gap: 12 }, regularCard: { flex: 1, height: 220, borderRadius: 20, overflow: 'hidden', backgroundColor: '#DCE6D8' }, regularImage: { width: '100%', height: '100%' }, regularOverlay: { position: 'absolute', left: 14, bottom: 14, right: 10 }, regularName: { color: '#FFFDF6', fontSize: 23, fontWeight: '700' }, regularVisits: { color: '#F5F2E9' }, nextBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EAEDE4', borderRadius: 18, padding: 14 }, badgeCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E4C778', alignItems: 'center', justifyContent: 'center' }, badgeGlyph: { color: '#6D5724', fontSize: 20 }, badgeCopy: { flex: 1, marginLeft: 12, gap: 2 }, progress: { fontWeight: '700', color: '#687768' }, sectionLabel: { letterSpacing: 1, marginTop: 4 }, noteRow: { flexDirection: 'row', gap: 14, paddingVertical: 7 }, date: { width: 74 }, noteLine: { flex: 1, borderLeftWidth: 1, borderColor: '#D9E1D6', paddingLeft: 14, gap: 3 } });
