import Users from "./models/Users";

class RootStore {
    readonly users = new Users();
}

const store = new RootStore();
export type Store = typeof store;

export default store