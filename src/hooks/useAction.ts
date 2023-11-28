import { useDispatch } from "react-redux"
import { allActionCreators } from "../store/reducers"
import { bindActionCreators } from "redux"

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators,dispatch)
}