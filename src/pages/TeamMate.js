import { useMatch } from "react-location"

const TeamMate = () => {
    const { params: {name},} = useMatch()
    console.log(name)
    return (
        <div>
            <h1>Hi I'm {name}</h1>
        </div>
    )
}

export default TeamMate
