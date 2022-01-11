import { useMatch } from "react-location"

export default function TherapyName() {
    const { params: {name},} = useMatch()
    return (
        <div>
            <h2>Hi I'm the {name} therapy information page</h2>
        </div>
    )
}
