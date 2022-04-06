import { ListStore } from "Store/list";

const useList = () => ListStore.useState((s) => s);

export { useList };
