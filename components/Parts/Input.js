import {motion} from "framer-motion";

export default function Input(props){
        return (
        <motion.div 
                   {...props} 
                    className={`mb-2 ${props.containerCss}`}>
                        <label className={`block text-text-light font-normal text-sm ${props.lableCss}`} htmlFor={props.label?.toLowerCase()}>{props.label}: </label>
                        <input placeholder={props.placeholder} className={`outline-none border border-text-light w-[310px] sm-[420px] sm:w-[420px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md ${props.inputCss}`} value={props.value} onChange={(e) => {props.setValue(e.target.value)}} />
                    </motion.div>
        )
}