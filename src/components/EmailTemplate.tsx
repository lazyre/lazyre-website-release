import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Section,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import { FormData } from "../components/Contact/ContactForm";

type EmailTemplateProps = FormData & {
  inquiryNumber: string;
  files: { url: string; sharableLink: string }[];
};

export const EmailTemplate = (formData: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New Project Inquiry - {formData.inquiryNumber}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <img
            src="https://cdn.lazyre.com/logos/lazyre-logo-email.png"
            alt="Lazyre Logo"
            width="120"
            height="20"
          />
        </Section>
        <Section style={headerSection}>
          <Heading style={h1}>New Project Inquiry</Heading>
          <Text style={inquiryNumber}>#{formData.inquiryNumber}</Text>
        </Section>
        <Section style={contentSection}>
          <Row style={row}>
            <Column style={column}>
              <Text style={label}>Name</Text>
              <Text style={value}>{formData.name}</Text>
            </Column>
            <Column style={column}>
              <Text style={label}>Email</Text>
              <Text style={value}>{formData.email}</Text>
            </Column>
          </Row>
          {formData.mobileNumber?.number && (
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Mobile</Text>
                <Text style={value}>
                  {formData.mobileNumber.code} {formData.mobileNumber.number}
                </Text>
              </Column>
              {formData.mobileNumber.country && (
                <Column style={column}>
                  <Text style={label}>Country</Text>
                  <Text style={value}>{formData.mobileNumber.country}</Text>
                </Column>
              )}
            </Row>
          )}
          {formData.companyName && (
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Company</Text>
                <Text style={value}>{formData.companyName}</Text>
              </Column>
            </Row>
          )}
          <Row style={row}>
            <Column style={column}>
              <Text style={label}>Project Idea</Text>
              <Text style={value}>{formData.projectIdea}</Text>
            </Column>
          </Row>
          <Row style={row}>
            <Column style={column}>
              <Text style={label}>Services Needed</Text>
              <Text style={value}>{formData.services.join(", ")}</Text>
            </Column>
          </Row>
          <Row style={row}>
            <Column style={column}>
              <Text style={label}>Deadline</Text>
              <Text style={value}>{formData.deadline}</Text>
            </Column>
          </Row>
          {formData.referral && formData.referral.length > 0 && (
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Referral</Text>
                <Text style={value}>{formData.referral.join(", ")}</Text>
              </Column>
            </Row>
          )}
        </Section>
        {formData.files && formData.files.length > 0 && (
          <Section style={fileSection}>
            <Hr style={hr} />
            <Text style={fileHeader}>Attached Files</Text>
            <ul style={fileList}>
              {formData.files.map((file, index) => (
                <li key={index} style={fileItem}>
                  <Link href={file.sharableLink} style={fileLink}>
                    📎 File {index + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
        <Section style={footerSection}>
          <Text style={footerText}>© 2023 Lazyre. All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const logoSection = {
  padding: "20px 30px",
};

const headerSection = {
  backgroundColor: "#ffffff",
  borderRadius: "8px 8px 0 0",
  padding: "30px 40px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
};

const inquiryNumber = {
  color: "#6b7280",
  fontSize: "16px",
  fontWeight: "normal",
  margin: "8px 0 0",
};

const contentSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
};

const row = {
  marginBottom: "20px",
};

const column = {
  width: "50%",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  marginBottom: "4px",
};

const value = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "24px",
};

const fileSection = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 8px 8px",
  padding: "0 40px 30px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "0 0 20px",
};

const fileHeader = {
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const fileList = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const fileItem = {
  margin: "8px 0",
};

const fileLink = {
  color: "#2563eb",
  fontSize: "14px",
  textDecoration: "none",
};

const footerSection = {
  padding: "20px 30px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "16px",
};
