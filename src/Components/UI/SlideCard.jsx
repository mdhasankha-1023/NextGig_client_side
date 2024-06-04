
// eslint-disable-next-line react/prop-types
export default function SlideCard({review}) {
    // eslint-disable-next-line react/prop-types
    const {userName, userPic, profession, reviewText} = review;


  return (
    <div className="flex flex-col gap-6">
            <div className="flex justify-start items-center gap-4">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={userPic} />
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center">
                    <p className="text-xl font-bold">{userName}</p>
                    <p className="text-md">{profession}</p>
                </div>
            </div>
            <p className="text-justify text-[#707070]">{reviewText}</p>
        </div>
  )
}
