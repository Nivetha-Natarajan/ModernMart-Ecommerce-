import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            const existing=state.items.find((item)=>item.id===action.payload.id);
            if(existing){
                existing.qty+=1;
            }else{
                state.items.push({...action.payload,qty:1})
            }
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((item)=>item.id!==action.payload);
        },
        decrementItem:(state,action)=>{
            const existing = state.items.find((item) => item.id === action.payload);
            if(existing){
                if (existing.qty===1){
                    state.items=state.items.filter((item)=>item.id!==action.payload);
                }else{
                    existing.qty-=1;
                }
            }
            },
        clearCart:(state)=>{
         state.items=[];
            },
    },
    
})
export const {addItem,removeItem,decrementItem,clearCart}=cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal=(state)=>state.cart.items.reduce((total, item) => total + item.price * item.qty,0);
export const selectCartCount=(state)=>state.cart.items.reduce((count,item)=>count+item.qty,0);
export default cartSlice.reducer;