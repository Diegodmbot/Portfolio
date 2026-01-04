import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import miscData from "../data/misc.json";
import urlData from "../data/urls.json";
import experienceData from "../data/experience.json";
import { removeURLProtocol } from "../services/urlFormatter";
import { useJobs } from "../hooks/useJobs";

const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: 30,
    fontFamily: "Helvetica",
    color: "#1f2937",
  },
  title: {
    fontSize: 28,
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
    marginVertical: 8,
  },
  section: {
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
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
});

export const Curriculum = () => {
  const { jobs } = useJobs(experienceData);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Diego Díaz Morón</Text>
          <Text style={styles.subtitle}>{miscData.role}</Text>
          <View style={styles.contact}>
            <Text>+34 634 578 063</Text>
            <Text>·</Text>
            <Text>diegodiazmoron@es.python.org</Text>
          </View>
          <View style={styles.contact}>
            <Link>{removeURLProtocol(urlData.web)}</Link>
            <Text>·</Text>
            <Link>{removeURLProtocol(urlData.linkedin)}</Link>
            <Text>·</Text>
            <Link>{removeURLProtocol(urlData.github.profile)}</Link>
          </View>
        </View>
        <View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Abstract</Text>
            <Text style={styles.text}>{miscData.abstract}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {jobs.map((job, index) => (
              <View key={index} style={{ marginBottom: 6 }}>
                <Text style={styles.itemTitle}>{job.position}</Text>
                <Text style={styles.itemSubtitle}>
                  {job.company} · {job.startDate} - {job.endDate}
                </Text>
                {job.bulletDescription.map((bullet, idx) => (
                  <Text key={idx} style={styles.bullet}>
                    • {bullet}
                  </Text>
                ))}
              </View>
            ))}
          </View>

          {/* PROJECTS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>

            <Text style={styles.itemTitle}>Procedural Content Generation</Text>
            <Text style={styles.itemSubtitle}>Final Degree Project · 2024</Text>
            <Text style={styles.bullet}>
              • Research on dungeon generation algorithms
            </Text>
            <Text style={styles.bullet}>
              • Roguelite prototype developed in Godot
            </Text>
            <Link style={styles.link}>
              https://github.com/Diegodmbot/TFG-Procedural_Content_Generation_Godot
            </Link>

            <Text style={[styles.itemTitle, { marginTop: 6 }]}>
              Pokédex with React
            </Text>
            <Text style={styles.itemSubtitle}>2023</Text>
            <Text style={styles.bullet}>• External APIs consumption</Text>
            <Text style={styles.bullet}>• Responsive design with CSS</Text>
            <Text style={styles.bullet}>• Infinite scroll and animations</Text>
            <Link style={styles.link}>
              https://github.com/Diegodmbot/PokemonInfo
            </Link>
          </View>
          {/* EDUCATION */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.itemTitle}>Computer Engineering Degree</Text>
            <Text style={styles.itemSubtitle}>
              Universidad de La Laguna · 2019–2024
            </Text>
            <Text style={styles.text}>
              Specialisation in Software Engineering
            </Text>
          </View>

          {/* SKILLS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.text}>Web: JavaScript, HTML, CSS, React</Text>
            <Text style={styles.text}>Backend: Python, Java</Text>
            <Text style={styles.text}>Version control: Git</Text>
            <Text style={styles.text}>Design: Figma</Text>
            <Text style={styles.text}>
              Game dev: Godot, GDScript, Unity, C#
            </Text>
          </View>

          {/* LANGUAGES */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <Text style={styles.text}>Spanish: Native</Text>
            <Text style={styles.text}>English: Medium</Text>
          </View>

          {/* VOLUNTEERING */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Volunteering</Text>
            <Text style={styles.itemTitle}>Python España Treasurer</Text>
            <Text style={styles.itemSubtitle}>April 2024 – Present</Text>
            <Text style={styles.bullet}>• Managing association finances</Text>
            <Text style={styles.bullet}>
              • Supporting tech event organisation
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
