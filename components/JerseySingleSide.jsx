import Image from 'next/image'


export default function JerseySingleSide(props){
    return(
        <Image src = {props.imgPath} class="rounded-10"/>
    )
}