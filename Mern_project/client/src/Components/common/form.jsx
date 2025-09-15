import { SelectContent } from "@radix-ui/react-select";
import { Input } from "../ui/input";
import { Label } from "../ui/label"
import { Select,  SelectTrigger , SelectValue } from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";
import { Button} from "../ui/button";


function CommonForm({formControls, formData , setFormData , onSumbit , buttonText}) {
    function renderInputsbyComponentType(getControlItem){


        let element =null;
        const value = formData[getControlItem.name] || '';



        switch (getControlItem.componenetType){
        case 'input':
            element=(<Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            type={getControlItem.type}
            value={value}
            onChange={event=> setFormData({
                ...formData,
                [getControlItem.name]: event .target.value,
            })}
            /> )
            break ;

            case 'select':
            element=(
                <Select onValueChange={(value)=> setFormData({
                    ...formData,
                    [getControlItem.name] : value
                })}  value={value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.placeholder}/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.options &&
                            getControlItem.options.length> 0 ?
                            getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id} > {optionItem.label}</SelectItem>) :null
                         }
                    </SelectContent>
                </Select>
            )
            break ;

            case 'textarea':
            element=(
                <Textarea 
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.id}
                value={value} 
                 onChange={event=> setFormData({
                ...formData,
                [getControlItem.name]: event .target.value,
            })}
         /> )
            break ;

            default:
            element=(<Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            type={getControlItem.type}
            value={value}
             onChange={event=> setFormData({
                ...formData,
                [getControlItem.name]: event .target.value,
            })}
            /> )

            break;
    
    
    
    }

    return element 


    }


    return ( 
        <form onSubmit={onSumbit}>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <Label className="mb-1">{controlItem.label}</Label>
                        {
                            renderInputsbyComponentType(controlItem)
                        }
                         </div>)
                }
            </div>
            <Button type="submit" className='mt-5 w-full'>{buttonText || 'Submit'}</Button>
        </form>
     );
}

export default CommonForm;