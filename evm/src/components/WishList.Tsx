import type { ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0"
const useStore = createStore({
    background: "#0099FF",
})

export function WishList(Component): ComponentType {
    return (props) => {
        return (
            <Component
                {...props}
                animate={{ rotate: 360 }}
                transition={{ ease: "inear", duration: 2 }}
            />
        )
    }
}