const bugReportDatabase = [];

const addBugReport = async (bugReport) => {
  bugReportDatabase.push(bugReport);
};

export { addBugReport };