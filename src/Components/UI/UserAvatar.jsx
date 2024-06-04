import useAuth from "../../Hooks/useAuth"

// eslint-disable-next-line react/prop-types
export default function UserAvatar({type, size}) {
    const {user} = useAuth();

    const first = user?.displayName[0];
    const sortName = first + user?.displayName[1];


    return (
        <>{type === 'withPic' ?
            <div className="avatar">
                <div className={`${size} rounded-full`}>
                    <img src={user?.photoURL} />
                </div>
            </div>
            :
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-16">
                    <span className="text-xl uppercase">{sortName}</span>
                </div>
            </div>
        }

        </>
    )
}
