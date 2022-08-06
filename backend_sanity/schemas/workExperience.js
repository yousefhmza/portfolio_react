export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    { name: "period", title: "Period", type: "string" },
    { name: "name", title: "Name", type: "string" },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
  ],
  ordering: [
    {
      title: "Release Date, New",
      name: "releaseDateDesc",
      by: [{ field: "releaseDate", direction: "desc" }],
    },
  ],
};
