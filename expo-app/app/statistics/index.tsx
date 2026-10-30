import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../../theme/colors";
export default function StatisticsScreen() {
  return <View style={styles.page}><Text style={styles.title}>الإحصائيات</Text><Text style={styles.note}>تحليل الإنجاز ومؤشرات التقدم.</Text></View>;
}
const styles = StyleSheet.create({ page:{flex:1,backgroundColor:colors.background,padding:spacing.screen,paddingTop:28},title:{fontSize:24,fontWeight:"800",color:colors.text,textAlign:"right"},note:{fontSize:14,color:colors.textMuted,textAlign:"right",marginTop:12} });