import {configure} from "mobx";
import App from "./App";

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: false,
    useProxies: 'ifavailable',
});

export default App