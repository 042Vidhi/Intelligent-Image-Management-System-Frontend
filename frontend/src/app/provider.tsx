"use client"
import { store } from "@/lib/store";
import { Provider } from "react-redux";
// provider create a layer around our app of redux such that we are able to use redux
export default function Providers({children}:{children : React.ReactNode}){
    // const storeRef = useRef<AppStore>(undefined)
    return <Provider store={store()}>
        {children}
    </Provider>
}