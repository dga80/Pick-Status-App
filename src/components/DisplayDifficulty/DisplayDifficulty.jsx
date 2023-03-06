import s from "./style.module.css"
export function DisplayDifficulty(props){
    return <div className={s.container}>
        {
            props.difficulty ? "Dificulty is set to "+ props.difficulty : "No difficulty set"
        }
    </div>
}