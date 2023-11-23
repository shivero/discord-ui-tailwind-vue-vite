export function groupBy<T>(array: T[], property: any) {
return array.reduce((acc: { [key: string]: T[]; }, item: any) => {
(acc[item[property]] = acc[item[property]] || []).push(item);
return acc;
}, {});
}
