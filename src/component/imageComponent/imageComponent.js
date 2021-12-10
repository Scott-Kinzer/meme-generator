import {useSelector} from "react-redux";
import photo from '../../img/loader.jpg';
export function ImageComponent() {

    const dataOfMeme = useSelector((state) => state.dataReducer).dataMeme;
    const fetch = useSelector((state) => state.dataReducer).fetch;

    const {url} = dataOfMeme;

    return (

        <div>
            {fetch ? <img className="photo" src={url} alt=""/> : <img className="photo" src={photo} alt=""/>}
        </div>

    );
}
