const tryParseToNumber: (value: string) => number | string | boolean = (value: string) => {
  const val = `${value}`;

  // Boolean
  if (val === 'true' || val === 'false') {
    return val === 'true';
  }

  // IS NOT a number
  if (isNaN(Number(value))) {
    return value;
  }

  return parseFloat(value) % 1 > 0 ? parseFloat(value) : parseInt(value, 10);
};

export default tryParseToNumber;
