import { Textarea } from "./ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ConverterFunctions } from "@/services/fuctionNames"


function Tool() {
    const values = Object.keys(ConverterFunctions)


    const handleClick = (e: string) => {
        console.log(e)
        switch (e) {
            case "camelCase":
                console.log(ConverterFunctions.camelCase("Hola mundo"))
                break;

            default:
                break;
        }

    }

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <Select onValueChange={(e) => handleClick(e)} >
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