import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
  phone,
  subject,
}: EmailProps) => (
  <Html>
    <Body style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <Container>
        <Heading>New Inquiry: {subject || "General Contact"}</Heading>
        <Hr />
        <Text>
          <strong>From:</strong> {name} ({email})
        </Text>
        {phone && (
          <Text>
            <strong>Phone:</strong> {phone}
          </Text>
        )}
        <Text>
          <strong>Message:</strong>
        </Text>
        <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
      </Container>
    </Body>
  </Html>
);
