import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesCollections from "../../components/exercises/04_iteration";



const meta: Meta<typeof CourseModulesCollections> = {
  title: 'Exercises/04 - iteration',
  component: CourseModulesCollections,
};

export default meta;

type Story = StoryObj<typeof meta>;
const title = "MSc Enterprise Software Systems - Module Table";
const modules = [
  {
    name: "Cloud Architecture",
    noLectures: 2,
    noPracticals: 2,
  },
  {
    name: "Enterprise Web Dev",
    noLectures: 2,
    noPracticals: 3,
  },
  {
    name: "Mobile App Development",
    noLectures: 2,
    noPracticals: 2,
  },
  {
    name: "Agile Software Development",
    noLectures: 2,
    noPracticals: 3,
  },
];
export const Basic: Story = {
  args:{
    modules:modules,
    title: title,
  }
};
