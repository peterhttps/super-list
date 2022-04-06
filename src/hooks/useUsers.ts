import { UserStore } from "store/user";

const userUsers = () => UserStore.useState((s) => s);

export { userUsers };
