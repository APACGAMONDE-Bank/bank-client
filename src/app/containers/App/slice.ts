import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the App container
export const initialState: ContainerState = {};

const appSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeInputAction(state, action: PayloadAction<any>) {},
    nextStepAction(state, action: PayloadAction<any>) {},
    previousStepAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
