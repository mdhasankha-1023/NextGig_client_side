
// eslint-disable-next-line react/prop-types
export default function Buttons({value, style}) {
    return (
        <button className={`btn bg-primaryBtn text-[#fff] ${style}`}>
            {value}
        </button>
    )
}
