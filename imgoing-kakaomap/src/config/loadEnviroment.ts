const loadEnvironment = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`환경변수 ${key}가 설정되지 않음`);
  }

  return value;
};

export default loadEnvironment;
