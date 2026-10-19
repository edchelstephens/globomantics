const TableHead = ({ headerTexts }) => {
    return (
        <thead>
            <tr>
                {headerTexts.map((text) => (
                    <th ke={text}>{text}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead;

