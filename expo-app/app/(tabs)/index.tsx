import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../../theme/colors";

function ProgressRingCard() {
  return (
    <View style={styles.progressCard}>
      <Text style={styles.cardLabel}>تقدم اليوم</Text>
      <View style={styles.progressCircle}>
        <Text style={styles.progressValue}>0%</Text>
      </View>
      <Text style={styles.muted}>بداية جديدة، خطوة بخطوة</Text>
    </View>
  );
}

function GoalsCard() {
  return (
    <View style={styles.goalsCard}>
      <View style={styles.goalIcon}><Text style={styles.goalIconText}>✦</Text></View>
      <Text style={styles.cardLabel}>أهدافك الحالية</Text>
      <Text style={styles.goalEmpty}>أضف هدفك الأول وابدأ بتحقيقه</Text>
      <Text style={styles.addGoal}>＋ إضافة هدف</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>مساحة إنجازك</Text>
          <Text style={styles.title}>مرحبًا بك في مداري</Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>م</Text></View>
      </View>

      <View style={styles.topGrid}>
        <ProgressRingCard />
        <GoalsCard />
      </View>

      <View style={styles.rhythmCard}>
        <View style={styles.rhythmHeader}>
          <Text style={styles.cardLabel}>إيقاع إنجازك</Text>
          <Text style={styles.muted}>هذا الأسبوع</Text>
        </View>
        <View style={styles.chartPlaceholder}>
          {["س", "أ", "ث", "ر", "خ", "ج", "س"].map((day, index) => (
            <View key={day + index} style={styles.chartColumn}>
              <View style={[styles.chartBar, { height: [28, 42, 20, 54, 34, 18, 12][index] }]} />
              <Text style={styles.chartDay}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.screen, paddingTop: 24, gap: spacing.lg },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  eyebrow: { color: colors.textMuted, fontSize: 13, marginBottom: 5, textAlign: "right" },
  title: { color: colors.text, fontSize: 23, fontWeight: "800", textAlign: "right" },
  avatar: { width: 46, height: 46, borderRadius: 16, backgroundColor: colors.primarySoft, alignItems: "center", justifyContent: "center" },
  avatarText: { color: colors.primaryStrong, fontSize: 20, fontWeight: "800" },
  topGrid: { flexDirection: "row", gap: 12 },
  progressCard: { flex: 1, minHeight: 190, backgroundColor: colors.surface, borderRadius: radius.lg, padding: 15, alignItems: "center", justifyContent: "space-between", borderWidth: 1, borderColor: colors.border },
  goalsCard: { flex: 1, minHeight: 190, backgroundColor: colors.surface, borderRadius: radius.lg, padding: 15, alignItems: "flex-end", justifyContent: "space-between", borderWidth: 1, borderColor: colors.border },
  cardLabel: { color: colors.text, fontSize: 15, fontWeight: "800" },
  progressCircle: { width: 86, height: 86, borderRadius: 43, borderWidth: 8, borderColor: colors.primary, alignItems: "center", justifyContent: "center", backgroundColor: colors.surface },
  progressValue: { color: colors.text, fontSize: 20, fontWeight: "800" },
  muted: { color: colors.textMuted, fontSize: 11 },
  goalIcon: { width: 36, height: 36, borderRadius: 12, backgroundColor: colors.primarySoft, alignItems: "center", justifyContent: "center" },
  goalIconText: { color: colors.primaryStrong, fontSize: 20 },
  goalEmpty: { color: colors.textMuted, fontSize: 12, lineHeight: 19, textAlign: "right" },
  addGoal: { color: colors.primaryStrong, fontSize: 12, fontWeight: "800" },
  rhythmCard: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: 18, borderWidth: 1, borderColor: colors.border, gap: 20 },
  rhythmHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  chartPlaceholder: { height: 95, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" },
  chartColumn: { alignItems: "center", gap: 8 },
  chartBar: { width: 18, borderRadius: 8, backgroundColor: colors.primary },
  chartDay: { color: colors.textMuted, fontSize: 11 }
});