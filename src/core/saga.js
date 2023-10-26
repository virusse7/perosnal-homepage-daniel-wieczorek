import { all } from "redux-saga/effects";
import { perosnalHomepageSaga } from "../features/personalHomepageSaga";

export default function* saga() {
    yield all([
        perosnalHomepageSaga(),
    ]);
};