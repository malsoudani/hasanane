import { Stack } from "@mui/material";
import React from "react";

interface IEducation {
  title: string;
  desc: string;
}
interface ILangauage {
  name: string;
}

interface IMainSection {
  proSummary: string;
  edu: IEducation[];
  add: ILangauage[];
}

export const MainSection: React.FC<IMainSection> = ({
  proSummary,
  edu,
  add,
}) => {
  return (
    <Stack direction="column" p={4}>
      <Section title="Professional Summary">{proSummary}</Section>
      <Section title="Education">
        <ul>
          {edu.map((ed) => (
            <li>
              {
                <span>
                  <h4>{`${ed.title} :`}</h4>
                  <p>{ed.desc}</p>
                </span>
              }
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Additional">
        {
          <Stack>
            <h3>languages</h3>
            <p>{add.map((add) => add.name).join(", ")}</p>
          </Stack>
        }
      </Section>
    </Stack>
  );
};

interface ISection {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISection> = ({ title, children }) => {
  return (
    <Stack direction="column">
      <h1 style={{ color: "#ff6666" }}>{title}</h1>
      {children}
    </Stack>
  );
};
