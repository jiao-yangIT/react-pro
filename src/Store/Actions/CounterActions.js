import { ADD, ADC, ADD_W } from './CounterActionTypes'
export const add =()=> ({   type: ADD })
export const add_w =(payload)=> ({   type: ADD_W, payload })
export const adc =()=> ({   type: ADC })