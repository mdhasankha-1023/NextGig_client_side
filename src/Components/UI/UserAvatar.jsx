
// eslint-disable-next-line react/prop-types
export default function UserAvatar({type, sortName}) {
    return (
        <>{type === 'withPic' ?
            <div className="avatar">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            :
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-16">
                    <span className="text-xl">{sortName}</span>
                </div>
            </div>
        }

        </>
    )
}
