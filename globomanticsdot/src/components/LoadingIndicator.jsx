const LoadingIndicator = ({ text }) => {
    return (
        <div className="d-flex justify-content-center align-items-center gap-2 py-4">
            <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
            <span>{text}</span>
        </div>
    )
}

export default LoadingIndicator;


