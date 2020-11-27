const sortBy: Function = (item: any, by: string | number, order: 'ASC' | 'DESC' = 'ASC'): Array<unknown> => {
  const collator: Intl.Collator = new Intl.Collator('tr');

  return order === 'DESC'
    ? item
      .sort((a: any, b: any) => {
        return collator.compare(a[by], b[by]);
      })
      .reverse()
    : item.sort((a: any, b: any) => {
      return collator.compare(a[by], b[by]);
    });
};

export default sortBy;
