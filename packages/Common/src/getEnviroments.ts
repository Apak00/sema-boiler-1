const dotenv = require('dotenv');
const fs = require('fs');

type KeyValuePair = {
  [key: string]: string | number;
};

const getEnviroments: unknown = (env: KeyValuePair) => {
  const basePath = './.env';
  let envObj: KeyValuePair = {
    ...dotenv.config({ path: basePath }).parsed,
  };
  const additionalEnvPath = `${basePath}.${env.NODE_ENV}`;
  const isFileExists = fs.existsSync(additionalEnvPath);

  if (isFileExists) {
    envObj = {
      ...envObj,
      ...dotenv.config({ path: additionalEnvPath }).parsed,
    };
  }

  const envKeys: KeyValuePair = Object.keys(envObj).reduce((prev: KeyValuePair, key: string) => {
    const prevParam = {
      ...prev,
      [`process.env.${key}`]:
        typeof envObj[key] === 'object' && envObj[key] !== null ? JSON.stringify(envObj[key]) : envObj[key],
    };

    return prevParam;
  }, {});

  return envKeys;
};

export default getEnviroments;
