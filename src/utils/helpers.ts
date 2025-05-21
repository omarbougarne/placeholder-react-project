// filepath: /react-ts-project/react-ts-project/src/utils/helpers.ts
export const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

export const filterItems = <T>(items: T[], predicate: (item: T) => boolean): T[] => {
    return items.filter(predicate);
};