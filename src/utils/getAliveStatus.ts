export const getAliveStatus = (born: string, died: string) => {
  if (!born && !died) return "Unknown";
  if (!born) return "No";
  if (!died) return "Yes";
  const yearOfBirth = Number(born.match(/\d+/)?.[0]);
  const yearOfDeath = Number(died.match(/\d+/)?.[0]);
  return `No, died at ${yearOfDeath - yearOfBirth} years old`;
};
