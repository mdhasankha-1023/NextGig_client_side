import Buttons from "./Buttons";

// eslint-disable-next-line react/prop-types
export default function CompanyCard({companyInfo}) {
    // eslint-disable-next-line react/prop-types
    const {userName, userPic} = companyInfo;


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10 h-[50%]">
        <img src={userPic} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center gap-4 h-[50%]">
        <h2 className="card-title">{name}</h2>
        <p>{userName}</p>
        <div className="card-actions w-full">
            <Buttons style={'w-full'} value={'Profile'}/>
        </div>
    </div>
</div>
  )
}
