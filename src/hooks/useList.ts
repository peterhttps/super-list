import { ListStore } from "store/list";

const useList = () => ListStore.useState((s) => s);

export { useList };
