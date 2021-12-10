import {fetchUsersThunk} from "../../redux/reducers/memeReducer";
import {useDispatch} from "react-redux";
import { Button  as AntButton} from 'antd';

export function Button() {

    const dispatch = useDispatch()
    let btnClick = () => {
        dispatch(fetchUsersThunk());
    }

    return (
            <AntButton className="button" type="primary" onClick={btnClick}>CLICK</AntButton>
    );
}

