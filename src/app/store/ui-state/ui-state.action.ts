import { createAction, props } from "@ngrx/store";
import { UiState } from "../../entity/UiState";

export const toggleSampleBtn = createAction('[top-bar Component] toggleSampleBtn');
export const setSampleBtn = createAction('[top-bar Component] setSampleBtn', props<UiState>());
export const setSampleTrue = createAction('[top-bar Componet] setSampleTrue');
export const setSampleFalse = createAction('[top-bar Component] setSampleFalse');
export const cntIncrement = createAction('[store component] cntIncrement');
export const cntDecrement = createAction('[store component] cntDecrement');
export const cntReset = createAction('[store componet] cntReset')