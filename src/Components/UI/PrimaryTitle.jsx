
// eslint-disable-next-line react/prop-types
export default function PrimaryTitle({lgText, smText}) {
  return (
    <div>
        <h1 className="text-center text-3xl uppercase font-bold">{lgText}</h1>
        <p className="text-lg text-center mt-3">{smText}</p>
    </div>
  )
}
