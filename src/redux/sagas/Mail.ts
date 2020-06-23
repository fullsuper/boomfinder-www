import { all, call, put, takeEvery } from "redux-saga/effects";
import { database } from "../../firebaseConfig/index";
import { fetchMailsSuccess, showMailMessage } from "../actions/Mail";
import { FETCH_ALL_MAIL } from "@/constants/ActionTypes";

const getMails = async () =>
  await database
    .ref("prod/mail")
    .once("value")
    .then((snapshot: any) => {
      const mails: Array<any> = [];
      snapshot.forEach((rawData: any) => {
        const mail = rawData.val();

        // change object to array
        const labels: Array<string> = [];
        if (mail.labels) {
          mail.labels.forEach((label: string) => labels.push(label));
        }

        // change object to array
        const tos: Array<string> = [];
        mail.to.forEach((to: string) => tos.push(to));

        mail.to = tos;
        mail.labels = labels;
        mails.push(mail);
      });
      return mails;
    })
    .catch(error => error);

function* fetchMailRequest() {
  try {
    const fetchedMail = yield call(getMails);
    yield put(fetchMailsSuccess(fetchedMail));
  } catch (error) {
    yield put(showMailMessage(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_ALL_MAIL, fetchMailRequest)]);
}
