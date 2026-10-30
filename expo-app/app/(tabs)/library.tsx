import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../../theme/colors";

export default function LibraryScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>المكتبة</Text>
      <Text style={styles.subtitle}>مساحتك لحفظ الأفكار والملاحظات والموارد</Text>
      <View style={styles.emptyCard}>
        <Text style={styles.symbol}>✧</Text>
        <Text style={styles.emptyTitle}>مكتبتك تبدأ من هنا</Text>
        <Text style={styles.emptyText}>احتفظ بكل ما تريد الرجوع إليه في مكان واحد.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background, padding: spacing.screen, paddingTop: 28, gap: 12 },
  title: { color: colors.text, fontSize: 26, fontWeight: "800", textAlign: "right" },
  subtitle: { color: colors.textMuted, fontSize: 14, textAlign: "right" },
  emptyCard: { marginTop: 20, minHeight: 220, borderRadius: radius.lg, backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 12 },
  symbol: { color: colors.primaryStrong, fontSize: 42 },
  emptyTitle: { color: colors.text, fontSize: 17, fontWeight: "800" },
  emptyText: { color: colors.textMuted, fontSize: 13, textAlign: "center", lineHeight: 21 }
});