import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import miscData from "../data/misc.json";
import urlData from "../data/urls.json";
import volunteeringData from "../data/volunteering.json";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";
import skillsData from "../data/skills.json";
import { removeURLProtocol } from "../services/urlFormatter";
import { formatExperienceData } from "../services/formatExperienceData";
import { orderSkillsByCategory } from "../services/orderSkillsByCategory";

Font.register({
  family: "Inter",
  src: "/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: 30,
    fontFamily: "Inter",
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
  svgLogo: {
    width: 12,
    height: 12,
    marginRight: 4,
    marginBottom: 2,
  },
});

export const Curriculum = () => {
  const { jobs } = formatExperienceData(experienceData);
  const { categorizedSkills } = orderSkillsByCategory(skillsData);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Diego Díaz Morón</Text>
          <Text style={styles.subtitle}>{miscData.role}</Text>
          <View style={styles.contact}>
            <Text>{miscData.phoneNumber}</Text>
            <Text>·</Text>
            <Text>{urlData.email}</Text>
          </View>
          <View style={[styles.contact, { marginTop: 2 }]}>
            <Link>{removeURLProtocol(urlData.web)}</Link>
            <Text>·</Text>
            <Link>{removeURLProtocol(urlData.linkedin)}</Link>
            <Text>·</Text>
            <Link>{removeURLProtocol(urlData.github.profile)}</Link>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abstract</Text>
          <Text style={styles.text}>{miscData.abstract}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={{ flexDirection: "row" }}>
            {Object.entries(categorizedSkills).map(([category, skills]) => (
              <View key={category} style={{ marginRight: 20 }}>
                <Text key={category} style={styles.itemTitle}>
                  {category}
                </Text>
                {skills.map((skill) => (
                  <Text key={skill} style={styles.bullet}>
                    • {skill}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>Experience</Text>
        {jobs.map((job, idx) => (
          <View key={idx} style={{ marginBottom: 6 }}>
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
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projectsData.map((project, idx) => (
            <View key={idx}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.itemTitle}>{project.title}</Text>
                <View style={{ flexDirection: "row", marginHorizontal: 4 }}>
                  {project.links.map((link) => (
                    <Link key={link.url} style={styles.link} src={link.url}>
                      <Image
                        style={styles.svgLogo}
                        src={`${link.image_code}_light.png`}
                      />
                    </Link>
                  ))}
                </View>
              </View>
              {project.bullets.map((bullet, idx) => (
                <Text key={idx} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {miscData.languages.map((language, idx) => (
            <Text key={idx} style={styles.text}>
              {language.name}: {language.level}
            </Text>
          ))}
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Volunteering</Text>
          {volunteeringData.map((volunteer, idx) => (
            <View key={idx}>
              <Text style={styles.itemTitle}>{volunteer.role}</Text>
              <Text style={styles.itemSubtitle}>
                {volunteer.organization} · {volunteer.startDate} -{" "}
                {volunteer.endDate}
              </Text>
              {volunteer.bulletDescription.map((bullet, idx) => (
                <Text key={idx} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
