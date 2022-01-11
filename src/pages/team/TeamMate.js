import { useMatch } from "react-location"

const TeamMate = () => {
    const { params: {name},} = useMatch()
    
    return (
        <div>
            <h1 className="capitalize text-4xl">Hi I'm {name}</h1>
        </div>
    )
}

export default TeamMate
