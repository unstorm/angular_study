import { state } from '@angular/animations'
import { createReducer, on } from '@ngrx/store'
import { UiState } from '../../entity/UiState'
import { toggleSampleBtn, 
         setSampleBtn,
        cntDecrement,
        cntIncrement,
        cntReset, 
        setSampleTrue,
        setSampleFalse} from './ui-state.action'

export const initState : UiState = {
    count : 0,
    isSample : false
}

export const uiStateReducer = createReducer(
    initState,
    on(toggleSampleBtn, state => ({ ...state, isSample: !state.isSample })),
    on(setSampleBtn, (state, param) => {
        return param
    }),
    on(setSampleTrue, state => ({...state, isSample: true})),
    on(setSampleFalse, state => ({...state, isSample: false})),
    on(cntIncrement, state => ({...state, count: state.count + 1 })),
    on(cntDecrement, state => ({...state, count: state.count - 1})),
    on(cntReset, state => ({...state, count: 0}))
)