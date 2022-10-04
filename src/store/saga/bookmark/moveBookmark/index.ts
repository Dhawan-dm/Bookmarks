import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { createBookmarkSuccess, moveBookmarkSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import {
  actionTypes,
  MoveBookmarksDataType,
} from "../../../reducer/bookmarks/type";

function* workerSaga(action: actionTypes): any {
  try {
    console.log(action.payload);
    console.log("reached");
    
    let data = yield apiData(
      "move-bookmark",
      "PATCH",
      action.payload as MoveBookmarksDataType
    );
    yield put(moveBookmarkSuccess(action.payload));
  } catch (error) {}
}

function* MoveBookmarkSaga() {
  yield takeEvery(Actions.MOVE_BOOKMARK_REQUEST, workerSaga);
}

export default MoveBookmarkSaga;
