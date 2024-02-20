export const NAVIGATION = [
  { name: "Downloads", to: "/downloads" },
  { name: "Info", to: "/info" },
  { name: "Support", to: "/support" },
];

export const DOWNLOADS = [
  {
    id: 1,
    href: "https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.2.zip",
    version: "Demo version 1.0.2",
    date: "2023-07-31",
    platform: "Windows",
  },
  {
    id: 2,
    href: "#",
    version: "Coming soon...",
    date: "N/A",
    platform: "Apple",
  },
  {
    id: 3,
    href: "#",
    version: "Coming soon...",
    date: "N/A",
    platform: "Linux",
  },
];

export const CHANGELOG = [
  {
    id: 1,
    date: "2023-07-16",
    version: "1.0.0",
    description: "Initial demo release",
  },
  {
    id: 2,
    date: "2023-07-29",
    version: "1.0.1",
    description: "Various bug fixes and changes to user interfaces",
  },
  {
    id: 3,
    date: "2023-07-31",
    version: "1.0.2",
    description:
      "Changes to stage transition trigger areas to fix issue where empty areas of a stage could be seen by the player when the transition is triggered",
  },
];

export const PREVIOUS_VERSIONS = [
  {
    id: 2,
    date: "2023-07-29",
    version: "1.0.1",
    href: "https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.1.zip",
  },
  {
    id: 1,
    date: "2023-07-16",
    version: "1.0.0",
    href: "https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo.zip",
  },
];
