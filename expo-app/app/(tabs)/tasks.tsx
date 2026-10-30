import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors, radius, spacing } from "../../theme/colors";

const sections = [
  { icon: "☀", title: "مهام الأيام", subtitle: "نظّم مهامك اليومية" },
  { icon: "▦", title: "مهام الأشهر", subtitle: "خطّط لشهرك بوضوح" },
  { icon: "◎", title: "مهام السنوات", subtitle: "تابع أهدافك بعيدة المدى" }
];

export default function TasksScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>مهامك</Text>
      <Text style={styles.subtitle}>حوّل خططك إلى خطوات قابلة للإنجاز</Text>
      {sections.map((item) => (
        <Pressable key={item.title} style={styles.card}>
          <View style={styles.icon}><Text style={styles.iconText}>{item.icon}</Text></View>
          <View style={styles.copy}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
          <Text style={styles.arrow}>‹</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background, padding: spacing.screen, paddingTop: 28, gap: 12 },
  title: { color: colors.text, fontSize: 26, fontWeight: "800", textAlign: "right" },
  subtitle: { color: colors.textMuted, fontSize: 14, textAlign: "right", marginBottom: 12 },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, padding: 16, flexDirection: "row", alignItems: "center", gap: 13 },
  icon: { width: 48, height: 48, borderRadius: 15, backgroundColor: colors.primarySoft, alignItems: "center", justifyContent: "center" },
  iconText: { color: colors.primaryStrong, fontSize: 22, fontWeight: "700" },
  copy: { flex: 1, alignItems: "flex-end", gap: 5 },
  cardTitle: { color: colors.text, fontSize: 16, fontWeight: "800" },
  cardSubtitle: { color: colors.textMuted, fontSize: 12 },
  arrow: { color: colors.textMuted, fontSize: 25 }
});