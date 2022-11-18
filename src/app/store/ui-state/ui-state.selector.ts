import { createFeatureSelector, createSelector } from "@ngrx/store"
import { UiState } from "../../entity/UiState"

export const selectUiState = createSelector(
    createFeatureSelector('uiState'),
    (state:UiState) => {
        return state
    }
);

export const selectCount = createSelector(
    createFeatureSelector('uiState'),
    (state:UiState) =>{
        return state.count
    }
)

export const selectIsSample = createSelector(
    createFeatureSelector('uiState'),
    (state:UiState) => {
        return state.isSample
    }
)
