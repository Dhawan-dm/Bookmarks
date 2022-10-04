import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { createBookmarkSuccess, moveBookmarkSuccess, toggleFavoriteSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import {
  actionTypes,
  ToggleFavoriteBookmarksDataType,
} from "../../../reducer/bookmarks/type";

function* workerSaga(action: actionTypes): any {
  try {
    console.log(action.payload);
    
    let data = yield apiData(
      "toggle-favorite",
      "PUT",
      action.payload as ToggleFavoriteBookmarksDataType
    );
    console.log(data);
    
    yield put(toggleFavoriteSuccess(action.payload));
  } catch (error) {}
}

function* ToggleFavoriteBookmarkSaga() {
  yield takeEvery(Actions.TOGGLE_FAVOURITE_BOOKMARK_REQUEST, workerSaga);
}

export default ToggleFavoriteBookmarkSaga;
