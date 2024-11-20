import { InputProps } from "./input.interface"
import { StyledInput } from "./input.style"

export const Input =({placeholder,value,onChange}:InputProps)=>{
    return(
        <StyledInput placeholder={placeholder} value={value} onChange={onChange}/>
    )
}