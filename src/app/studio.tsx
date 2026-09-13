import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sightings } from '@/constants/sightings';
import { Spacing } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function StudioScreen() {
  const [selected, setSelected] = useState(0);
  return <ThemedView style={styles.screen}><SafeAreaView edges={['top']} style={styles.safeArea}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    <ThemedText style={styles.eyebrow} themeColor="textSecondary">MAKE SOMETHING SMALL AND LOVELY</ThemedText><View style={styles.headerRow}><ThemedText type="subtitle" style={styles.heading}>Purr studio</ThemedText><ThemedText style={styles.sparkle}>✦</ThemedText></View>
    <View style={styles.canvas}><Image source={{ uri: sightings[selected].photo }} style={styles.canvasImage} contentFit="cover" /><View style={styles.sticker}><ThemedText style={styles.stickerText}>purrfect</ThemedText></View><ThemedText style={styles.canvasHint}>Tap a photo below to change your canvas</ThemedText></View>
    <View style={styles.tools}><View style={styles.toolActive}><ThemedText style={styles.toolGlyph}>◌</ThemedText><ThemedText type="smallBold">Cutout</ThemedText></View><View style={styles.tool}><ThemedText style={styles.toolGlyph}>✧</ThemedText><ThemedText type="smallBold">Doodles</ThemedText></View><View style={styles.tool}><ThemedText style={styles.toolGlyph}>▱</ThemedText><ThemedText type="smallBold">Outline</ThemedText></View><View style={styles.tool}><ThemedText style={styles.toolGlyph}>↗</ThemedText><ThemedText type="smallBold">Export</ThemedText></View></View>
    <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>CHOOSE A MOMENT</ThemedText><ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.photos}>{sightings.map((sighting, index) => <Pressable key={sighting.id} onPress={() => setSelected(index)} style={[styles.photoWrap, selected === index && styles.photoSelected]}><Image source={{ uri: sighting.photo }} style={styles.photo} /></Pressable>)}</ScrollView>
    <Pressable style={styles.save}><ThemedText style={styles.saveText}>Save to Purr Pack</ThemedText></Pressable>
  </ScrollView></SafeAreaView></ThemedView>;
}

const styles = StyleSheet.create({ screen: { flex: 1 }, safeArea: { flex: 1 }, content: { padding: Spacing.four, paddingBottom: 130, gap: Spacing.three }, eyebrow: { fontSize: 11, letterSpacing: 1.4, fontWeight: '700' }, headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, heading: { fontSize: 34 }, sparkle: { color: '#D4A23A', fontSize: 28 }, canvas: { height: 390, borderRadius: 24, backgroundColor: '#E7E5D9', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }, canvasImage: { width: 250, height: 280, borderRadius: 120, transform: [{ rotate: '-4deg' }] }, sticker: { position: 'absolute', bottom: 54, right: 24, backgroundColor: '#F1C965', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16, transform: [{ rotate: '7deg' }] }, stickerText: { color: '#5C4820', fontWeight: '700' }, canvasHint: { position: 'absolute', bottom: 16, color: '#6C7971', fontSize: 12 }, tools: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }, tool: { alignItems: 'center', gap: 5, padding: 8 }, toolActive: { alignItems: 'center', gap: 5, padding: 8, borderBottomWidth: 2, borderColor: '#24332E' }, toolGlyph: { fontSize: 21, color: '#63736A' }, sectionLabel: { letterSpacing: 1, marginTop: 4 }, photos: { gap: 10 }, photoWrap: { borderRadius: 16, padding: 3 }, photoSelected: { borderWidth: 2, borderColor: '#D4A23A' }, photo: { width: 70, height: 70, borderRadius: 13 }, save: { alignItems: 'center', backgroundColor: '#24332E', borderRadius: 14, paddingVertical: 15, marginTop: 4 }, saveText: { color: '#F7F6F1', fontWeight: '700', fontSize: 16 } });
