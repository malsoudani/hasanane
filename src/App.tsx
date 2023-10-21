import React from "react";
import { Stack } from "@mui/material";
import { LeftBar } from "./LeftBar";
import { MainSection } from "./MainSection";
function App() {
  return (
    <Stack direction="row">
      <LeftBar
        profilePicUrl={
          "https://cdn.discordapp.com/attachments/701508565382463518/1165393197602717836/20231006_192538.jpg?ex=6546affe&is=65343afe&hm=9a012b3ba02332a6db28dbe7ff573a9cee5078f0fe1afb1c49d434237a330c87&"
        }
        name={"Hasanane Alsoudani"}
        title={"Graduate student in electrical field"}
        phone={"+989012952063"}
        email={"hasanenesu22@gmail.com"}
        website={"hasanane.com"}
        coreSkils={[
          "Example1",
          "Example2",
          "Example3",
          "Example4",
          "Example5",
          "Example6",
          "Example7",
          "Example8",
          "Example9",
          "Example10",
        ]}
      />
      <MainSection
        proSummary={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        edu={[
          {
            title: "Example1",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Example2",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Example3",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Example4",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Example5",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ]}
        add={[{ name: "English" }, { name: "Arabic" }, { name: "Farsi" }]}
      />
    </Stack>
  );
}

export default App;
