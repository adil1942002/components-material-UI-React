
import Button from '@mui/material/Button';
type propsType ={
    label: string|number,
    setcolor:any
}
export default function ColorButtons(props:propsType) {
    let {label,setcolor}=props
    return (
            <Button  color={setcolor}>{label}</Button>
          
    );
}