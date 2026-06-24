const photoImports = import.meta.glob<string>("../assets/photos/*.png", {
  eager: true,
  import: "default",
});

export interface Project {
  id: number;
  name: string;
  image: string;
  filename: string;
  category: string;
  type: string;
  desc: string;
}

function filenameToName(filename: string): string {
  return filename.replace(/\.png$/i, "").trim();
}

function deriveCategory(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("erp")) return "ERP Project";
  if (n.includes(" app") || n.endsWith("app") || n.includes("app.")) return "App Project";
  return "Website Project";
}

function deriveType(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("web") && n.includes("app")) return "Web & Mobile App";
  if (n.includes("app") || n.includes("watch os")) return "Mobile App";
  return "Website";
}

const allProjects: Project[] = Object.entries(photoImports)
  .map(([path, image], index) => {
    const filename = path.split("/").pop()!;
    const name = filenameToName(filename);
    return {
      id: index + 1,
      name,
      image,
      filename,
      category: deriveCategory(name),
      type: deriveType(name),
      desc: `UI/UX design and development for ${name}.`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((project, index) => ({ ...project, id: index + 1 }));

const HOMEPAGE_FILENAMES = [
  "School management system Web & App.png",
  "E- Commerce Website . ( Duckback Company ).png",
  "HR Management System App.png",
  "Grocery Food Delivery App.png",
  "Sylvan Ply Company Website.png",
  "BJP Bengal offical Website.png",
];

export const homepageProjects = HOMEPAGE_FILENAMES.map(
  (filename) => allProjects.find((p) => p.filename === filename)!
).filter(Boolean);

export const allProjectsData = allProjects;
