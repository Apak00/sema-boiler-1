import { EMAIL_VALIDATION_REGEXP, PASSPORT_VALIDATION_REGEXP } from './expressions';

export const startsWith: (str: string | number, subStr: string | number) => boolean = (
  str: string | number,
  subStr: string | number,
): boolean => str?.toString().trim().startsWith(subStr.toString());

export const emailValidation: (val: string, expression?: RegExp) => boolean = (
  val: string,
  expression?: RegExp,
): boolean =>
  !!(
    val &&
    !!String(val)
      .toLowerCase()
      .match(expression || EMAIL_VALIDATION_REGEXP)
  );

export const isNumber: (val: number | string) => boolean = (val: number | string) =>
  // eslint-disable-next-line no-self-compare
  typeof (val === 'number' || val === 'string') && +val !== +val;

export const isTcIdentityNumber: (str: string | number) => boolean = (str: string | number): boolean => {
  let result: boolean = false;
  const value: string = str?.toString().trim();

  if (value && str) {
    const isEleven: boolean = /^[0-9]{11}$/.test(value);
    let totalX: number = 0;
    for (let i: number = 0; i < 10; i++) {
      totalX += Number(value.substr(i, 1));
    }
    const isRuleX: boolean = totalX % 10 === Number(value.substr(10, 1));
    let totalY1: number = 0;
    let totalY2: number = 0;
    for (let i: number = 0; i < 10; i += 2) {
      totalY1 += Number(value.substr(i, 1));
    }
    for (let i: number = 1; i < 10; i += 2) {
      totalY2 += Number(value.substr(i, 1));
    }
    const isRuleY: boolean = (totalY1 * 7 - totalY2) % 10 === Number(value.substr(9, 0));
    const firstLetterIsNotZero: boolean = str.toString().trim().substr(0, 1) !== '0';

    result = isEleven && isRuleX && isRuleY && firstLetterIsNotZero;
  }

  return result;
};

export const isForeignIdentityNumber: (str: string | number) => boolean = (str: string | number): boolean =>
  startsWith(str, '99') && isTcIdentityNumber(str);

export const isPassportNumber: (str: string | number, expression?: RegExp) => boolean = (
  str: string | number,
  expression?: RegExp,
): boolean =>
  !!(
    str &&
    !!String(str)
      .toLowerCase()
      .match(expression || PASSPORT_VALIDATION_REGEXP)
  );
