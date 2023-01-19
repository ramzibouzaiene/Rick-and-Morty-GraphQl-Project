import ClipLoader from "react-spinners/ClipLoader";


export function Spinner({color, loading, override }) {
    return (
    <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
    )
}