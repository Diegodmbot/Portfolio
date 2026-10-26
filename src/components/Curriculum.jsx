import { Document, Page, Text, View, Image, Link } from "@react-pdf/renderer";
import miscData from "../data/misc.json";
import urlData from "../data/urls.json";
import volunteeringData from "../data/volunteering.json";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";
import skillsData from "../data/skills.json";
import educationData from "../data/education.json";
import { removeURLProtocol } from "../services/urlFormatter";
import { formatExperienceData } from "../services/formatExperienceData";
import { orderSkillsByCategory } from "../services/orderSkillsByCategory";
import { sortCategories } from "../services/sortCategories";
import { styles } from "./CurriculumStyles";

export const Curriculum = () => {
  const { jobs } = formatExperienceData(experienceData);
  const { categorizedSkills } = orderSkillsByCategory(skillsData);
  // const sortedCategorizedSkills = sortCategories(categorizedSkills);

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
            <Link>{removeURLProtocol(urlData.github)}</Link>
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
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {sortCategories(Object.entries(categorizedSkills)).map(
              ([category, skills]) => (
                <Text key={category} style={[styles.text, { width: "50%" }]}>
                  <Text style={styles.itemTitle}>{category}: </Text>
                  {skills.join(", ")}
                </Text>
              ),
            )}
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
              {project.bulletDescription.map((bullet, idx) => (
                <Text key={idx} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.divider} />
        <View style={[styles.section, { flexDirection: "row" }]}>
          <View style={{ width: "50%" }}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educationData.map((education, idx) => (
              <View key={idx}>
                <Text style={styles.itemTitle}>{education.degree}</Text>
                <Text style={styles.itemSubtitle}>
                  {education.institution} · {education.year}
                </Text>
                {education.project && (
                  <View>
                    <Text style={styles.itemSubtitle}>
                      {education.project.type}:
                    </Text>
                    <Link
                      style={styles.text}
                      src={education.project.link}
                      key={education.project.link}
                    >
                      {education.project.title}
                    </Link>
                  </View>
                )}
              </View>
            ))}
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {miscData.languages.map((language, idx) => (
              <Text key={idx} style={styles.text}>
                {language.name}: {language.level}
              </Text>
            ))}
          </View>
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
