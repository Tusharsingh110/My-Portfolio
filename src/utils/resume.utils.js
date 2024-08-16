export const getVersion = (versions) => {
    if (!versions || versions.length === 0) return 0.0;
    return versions.reduce((max, version) => Math.max(max, parseFloat(version)), 0);
  };
  