import {atom} from 'recoil'

export const todosAtom = atom({
    key: "todosAtom",
    default: [{title:"Play cricket"}]
})