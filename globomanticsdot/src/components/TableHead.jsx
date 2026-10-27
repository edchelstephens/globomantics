const TableHead = ({ headerTexts }) => {
    return (
        <thead>
            <tr>
                {headerTexts.map((text) => (
                    <th key={text}>{text}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead;

