import { stat } from 'fs'
import { Action } from 'history'
import { Actions } from '../../actionTypes'
import { actionTypes, FolderArray } from './type'

const initialState: FolderArray = {
  folders: [],
  bookmarks: [],
  favBookmarks: [],
  toggleFolderSpinner: false,
  toggleBookmarkSpinner: false,
  toggleSpinner: false,
  toggleRenameSpinner: false,
  folderName: '',
}

const folderReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case Actions.ADD_FOLDER_REQUEST: {
      return {
        ...state,
        toggleSpinner: true,
      }
    }
    case Actions.ADD_FOLDER_SUCCESS: {
      return {
        ...state,
        folders: [...state.folders, action.payload],
        toggleSpinner: false,
      }
    }

    case Actions.GET_FOLDER_REQUEST: {
      return { ...state, toggleFolderSpinner: true }
    }

    case Actions.GET_FOLDER_SUCCESS: {
      return { ...state, folders: action.payload, toggleFolderSpinner: false }
    }

    case Actions.DELETE_FOLDER_SUCCESS: {
      return {
        ...state,
        folders: state.folders.filter((folder) => {
          if (folder.name !== action.payload.name) {
            return folder
          }
        }),
      }
    }

    case Actions.RENAME_FOLDER_REQUEST: {
      return {
        ...state,
        toggleRenameSpinner: true,
      }
    }

    case Actions.RENAME_FOLDER_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        folders: state.folders.map((folder: any) => {
          if (folder.id === action.payload.id) {
            folder.name = action.payload.name
          }
          return folder
        }),
        toggleRenameSpinner: false,
      }
    }

    case Actions.CREATE_BOOKMARK_REQUEST: {
      return {
        ...state,
        toggleBookmarkSpinner: true,
      }
    }

    case Actions.CREATE_BOOKMARK_SUCCESS: {
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
        toggleBookmarkSpinner: false,
      }
    }

    case Actions.DELETE_BOOKMARK_REQUEST: {
      return {
        ...state,
        toggleBookmarkSpinner: true,
      }
    }

    case Actions.DELETE_BOOKMARK_SUCCESS: {
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload,
        ),
        toggleBookmarkSpinner: false,
      }
    }

    case Actions.GET_BOOKMARK_REQUEST: {
      return {
        ...state,
        toggleBookmarkSpinner: true,
        folderName: action.payload.folderName,
      }
    }

    case Actions.GET_BOOKMARK_SUCCESS: {
      console.log(action.payload)

      return {
        ...state,
        bookmarks: action.payload,
        toggleBookmarkSpinner: false,
      }
    }

    case Actions.MOVE_BOOKMARK_REQUEST: {
      return {
        ...state,
        toggleBookmarkSpinner: true,
      }
    }

    case Actions.MOVE_BOOKMARK_SUCCESS: {
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id != action.payload.bookmarkId,
        ),
        toggleBookmarkSpinner: false,
      }
    }

    case Actions.ADD_FAVOUITE_BOOKMARK: {
      console.log(action.payload)

      return {
        ...state,
        favBookmarks: [...state.favBookmarks, action.payload],
      }
    }
    case Actions.REMOVE_FAVOUITE_BOOKMARK: {
      return {
        ...state,
        favBookmarks: state.favBookmarks.filter((bookmark) => {
          if (bookmark.id !== action.payload.id) {
            return bookmark
          }
        }),
      }
    }
    case Actions.TOGGLE_FAVOURITE_BOOKMARK_REQUEST: {
      return {
        ...state,
        toggleBookmarkSpinner: true,
      }
    }
    case Actions.TOGGLE_FAVOURITE_BOOKMARK_SUCCESS: {
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) => {
          if (bookmark.id === action.payload.bookmarkId) {
            console.log(bookmark.isFavorite)

            bookmark.isFavorite = !bookmark.isFavorite
          }
          return bookmark
        }),
        toggleBookmarkSpinner: false,
      }
    }

    default:
      return state
  }
}
export default folderReducer
