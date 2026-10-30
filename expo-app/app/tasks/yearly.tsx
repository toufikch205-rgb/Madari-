import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../../theme/colors";
export default function YearlyTasksScreen() {
  return <View style={styles.page}><Text style={styles.title}>مهام السنوات</Text><Text style={styles.note}>الأهداف والخطط السنوية.</Text></View>;
}
const styles = StyleSheet.create({ page:{flex:1,backgroundColor:colors.background,padding:spacing.screen,paddingTop:28},title:{fontSize:24,fontWeight:"800",color:colors.text,textAlign:"right"},note:{fontSize:14,color:colors.textMuted,textAlign:"right",marginTop:12} });