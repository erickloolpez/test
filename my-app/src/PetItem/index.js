function PetItem(props) {
    return (
        <li>
            {props.owner}
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.name}</li>
            </ul>

        </li>
    )
}

export { PetItem }