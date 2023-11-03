import { Textarea } from "./ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ConverterFunctionName, ConverterFunctions } from "@/services/fuctionNames"

function Tool() {
    const values = Object.keys(ConverterFunctions)

    function handleClick(selectedFunction: ConverterFunctionName) {
        const inputValue = "Hola mundo Jonnier ALejandro Hola";
        const result = ConverterFunctions[selectedFunction](inputValue);
        console.log(result);
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <Select onValueChange={(e) => handleClick(e as ConverterFunctionName)} >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a format" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                values.map((value) => {
                                    return (
                                        <SelectItem key={value} value={value}>{value}</SelectItem>
                                    );
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
            <Textarea></Textarea>
        </div>
    )
}

export default Tool