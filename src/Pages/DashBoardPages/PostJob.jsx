import Swal from "sweetalert2";
import Buttons from "../../Components/UI/Buttons";
import InputFiled from "../../Components/UI/InputFiled";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import useAuth from "../../Hooks/useAuth";

export default function PostJob() {
  const { user } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const address = form.address.value;
    const details = form.details.value;
    const companyLogo = form.companyLogo.value;
    const salary = form.salary.value;
    const post = form.post.value;
    const level = form.level.value;
    const action = form.action.value;
    const variant = form.variant.value;
    
    const info = { post, level, action, variant, companyLogo, userName, email, salary, address, details }
    console.log(info)

    Swal.fire({
      title: "Are you sure?",
      text: "You won add this service!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('http://localhost:5000/jobs', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(info)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            form.reset()
          })
          .catch(error => console.log(error.massage))
      }
    });

  }



  return (
    <div className="hero bg-base-200">
      <div className="w-full">
        <div className="card w-full shadow-2xl bg-base-100 py-8">
          {/* sign Up */}
          <form onSubmit={handleSubmit}
            // onSubmit={onInput}
            className="card-body gap-6">
            <PrimaryTitle text={'My Profile'} />
            {/* first row */}
            <div className="flex gap-10 justify-center items-center w-full">
              <div className="w-1/2">
                {/* username */}
                <InputFiled type={'text'} name={'userName'} placeholder={'Name'}
                  labelText={'Name'}
                />
              </div>
              <div className="w-1/2">
                {/* email */}
                <InputFiled type={'email'} name={'email'} placeholder={'Email'}
                  labelText={'Email'}
                  defaultText={user?.email}
                  isTrue={true}
                />
              </div>
            </div>


            {/* second row */}
            <div className="flex gap-10 justify-center items-center w-full">
              <div className="w-1/2">
                {/* username */}
                <InputFiled type={'text'} name={'jobTitle'} placeholder={'Job Title'}
                  labelText={'Job Title'}
                // defaultText={info?.phone}
                />
              </div>
              <div className="w-1/2">
                {/* username */}
                <InputFiled type={'text'} name={'userName'} placeholder={'Name'}
                  labelText={'Name'}
                />
              </div>
            </div>

            <div className="flex gap-10 justify-center items-center w-full mt-6">

              {/* job post */}
              <div className='w-1/5'>
                <select name="post" className="select select-bordered w-full">
                  <option disabled selected>Post</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Marketing</option>
                  <option>Sells Man</option>
                </select>
              </div>

              {/* level */}
              <div className='w-1/5'>
                <select name="level" className="select select-bordered w-full">
                  <option disabled selected>Job level</option>
                  <option>Full-time</option>
                  <option>Contact</option>
                  <option>Part-time</option>
                </select>
              </div>

              {/* variant */}
              <div className='w-1/5'>
                <select name="variant" className="select select-bordered w-full">
                  <option disabled selected>Duty Variant</option>
                  <option>Onsite</option>
                  <option>High-bride</option>
                  <option>Remote</option>
                </select>
              </div>

              {/* action */}
              <div className='w-1/5'>
                <select name="action" className="select select-bordered w-full">
                  <option disabled selected>Job Action</option>
                  <option>Urgent</option>
                  <option>Featured</option>
                </select>
              </div>

              {/* salary */}
              <div className='w-1/5'>
                <select name="salary" className="select select-bordered w-full">
                  <option disabled selected>Salary</option>
                  <option>$100-150</option>
                  <option>$150-200</option>
                  <option>$$200-300</option>
                  <option>$300-400</option>
                </select>
              </div>
            </div>

            {/* third row */}
            <div className="form-control mt-6">
              {/* username */}
              <InputFiled type={'text'} name={'address'} placeholder={'Company Full Address'}
                labelText={'Company Address'}
              // defaultText={info?.address}
              />
            </div>
            {/* forth row */}
            <div className="form-control mt-6">
              {/* username */}
              <InputFiled type={'text'} name={'companyLogo'} placeholder={'Company Logo URL'}
                labelText={'Company Logo'}
              />
            </div>
            <div className="mt-6 form-control ">
              <label className="label">
                <span className="label-text text-xl font-bold">Job Description</span>
              </label>
              {/* about */}
              <textarea placeholder="About this job..."
                name="details" className="textarea textarea-bordered textarea-lg"></textarea>
            </div>
            <div className="form-control mt-6">
              <Buttons type={'submit'} value={'POST'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
