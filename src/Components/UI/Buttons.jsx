
// eslint-disable-next-line react/prop-types
export default function Buttons({value, style, type, handler}) {
    return (
        <button onClick={handler} type={type} className={`btn bg-primaryBtn text-lg text-[#fff] ${style}`}>
            {value}
        </button>
    )
}
