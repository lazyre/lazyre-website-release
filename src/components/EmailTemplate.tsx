import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
} from "@react-email/components";
import { FormData } from "../components/Contact/ContactForm";

export const EmailTemplate = (formData: FormData & { files?: string[] }) => (
  <Html>
    <Head />
    <Preview>New Project Inquiry</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Project Inquiry</Heading>
        <Text style={text}>
          <strong>Name:</strong> {formData.name}
        </Text>
        <Text style={text}>
          <strong>Email:</strong> {formData.email}
        </Text>
        <Text style={text}>
          <strong>Mobile:</strong>{" "}
          {`${formData.mobileNumber?.code} ${formData.mobileNumber?.number}` ||
            "N/A"}
        </Text>
        <Text style={text}>
          <strong>Company:</strong> {formData.companyName || "N/A"}
        </Text>
        <Text style={text}>
          <strong>Country:</strong> {formData.mobileNumber?.country || "N/A"}
        </Text>
        <Text style={text}>
          <strong>Project Idea:</strong> {formData.projectIdea}
        </Text>
        <Text style={text}>
          <strong>Referral:</strong> {formData.referral}
        </Text>
        <Text style={text}>
          <strong>Services:</strong> {formData.services.join(", ")}
        </Text>
        <Text style={text}>
          <strong>Deadline:</strong> {formData.deadline}
        </Text>
        {formData.files && formData.files.length > 0 && (
          <>
            <Text style={text}>
              <strong>Attached Files:</strong>
            </Text>
            <ul>
              {formData.files.map((file, index) => (
                <li key={index}>
                  <Link href={file}>File {index + 1}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};
