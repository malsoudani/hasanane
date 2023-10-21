import { Avatar, Box, Stack } from "@mui/material";
import { getAllByDisplayValue } from "@testing-library/react";
import { SymbolDisplayPartKind } from "typescript";

interface ILeftbar {
  profilePicUrl: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  coreSkils: string[];
}

export const LeftBar: React.FC<ILeftbar> = ({
  profilePicUrl,
  name,
  title,
  phone,
  email,
  website,
  coreSkils,
}) => {
  return (
    <Stack
      p={4}
      sx={{
        backgroundColor: "#ff6666",
      }}
      direction={"column"}
      alignItems={"center"}
    >
      <Avatar sx={{ width: 150, height: 150 }} src={profilePicUrl} />
      <Section title={name}>
        <Box pt={2} width={"70%"} style={{ fontSize: "20px" }}>
          {title}
        </Box>
      </Section>
      <Section title={"Contact Details"} withDivider>
        <ul>
          <li style={{ fontSize: "20px" }}>{phone}</li>
          <li style={{ fontSize: "20px" }}>{email}</li>
          <li style={{ fontSize: "20px" }}>{website}</li>
        </ul>
      </Section>
      <Section title={"Core Skills"} withDivider>
        <ul>
          {coreSkils.map((skill) => (
            <li style={{ fontSize: "20px" }}>{skill}</li>
          ))}
        </ul>
      </Section>
    </Stack>
  );
};

interface ISection {
  title: string;
  children: React.ReactNode;
  withDivider?: boolean;
}
const Section: React.FC<ISection> = ({
  title,
  children,
  withDivider = false,
}) => (
  <Stack direction="column" alignItems={"center"}>
    <h2>{title}</h2>
    {withDivider && (
      <Box height={2} sx={{ backgroundColor: "grey" }} width={"80%"} />
    )}
    {children}
  </Stack>
);
