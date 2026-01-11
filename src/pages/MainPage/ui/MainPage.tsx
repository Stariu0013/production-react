import Counter from "../../../entities/Counter/ui/Counter";
import Input from "shared/ui/Input/Input";
import {useState} from "react";

const MainPage = () => {
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            <Input value={value} onChange={onChange} placeholder={"Placeholder"}/>
            <Counter />
        </div>
    );
};

export default MainPage;