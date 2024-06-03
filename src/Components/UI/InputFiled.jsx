import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
export default function InputFiled({name, type, placeholder, icon}) {

    // icon type
    const user = (<UserIcon className="size-6 text-blue-500" />)
    const email = (<EnvelopeIcon className="size-6 text-blue-500" />)
    const password = (<KeyIcon className="size-6 text-blue-500" />)



    return (

        <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
                {icon === 'user' && user}
                {icon === 'email' && email}
                {icon === 'password' && password}
                <input
                name={`${name}`} 
                type={`${type}`} 
                placeholder={`${placeholder}`}
                className="grow"
                />
            </label>
        </div>
    )
}