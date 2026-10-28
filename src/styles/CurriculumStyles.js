import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter/static/Inter_18pt-Regular.ttf" },
    { src: "/fonts/Inter/static/Inter_18pt-Bold.ttf", fontWeight: "bold" },
  ],
});

export const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    paddingVertical: 24,
    paddingHorizontal: 30,
    fontFamily: "Inter",
    color: "#1f2937",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 2,
    textTransform: "uppercase",
    color: "#4b5563",
  },
  contact: {
    marginTop: 6,
    flexDirection: "row",
    gap: 3,
    fontSize: 9,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    marginBottom: 4,
  },
  section: {
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3,
    textTransform: "uppercase",
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 9,
    color: "#4b5563",
    marginBottom: 2,
  },
  bullet: {
    fontSize: 9,
    marginLeft: 8,
    marginBottom: 2,
  },
  text: {
    fontSize: 9,
    marginBottom: 2,
  },
  svgLogo: {
    width: 12,
    height: 12,
    marginRight: 4,
    marginBottom: 2,
  },
});
