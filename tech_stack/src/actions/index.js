export const SELECTED_LIBRARY = 'SELECTED_LIBRARY'

export const selectedLibrary = (libraryId) => {
  return {
    type: SELECTED_LIBRARY,
    payload: libraryId
  }
}
