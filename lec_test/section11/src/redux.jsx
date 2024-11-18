import  {useSelector} from "react-redux"
/**
 * # NPM
    npm install redux
    npm install react-redux

 * @returns 
 */

export default function Redux(){

     const count = useSelector(state => state.count);
    return (
        <div>redux : {count}</div>

    )
}