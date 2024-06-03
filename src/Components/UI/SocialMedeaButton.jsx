import fb from '../../assets/icons/facebook.png'
import ggl from '../../assets/icons/google.png'


// eslint-disable-next-line react/prop-types
export default function SocialMedeaButton({ text, icon, handler }) {

  // icons
  const facebook = fb;
  const google = ggl;

  return (
      <button onClick={handler} className="btn w-full">
        <img className='w-[40px] h-[40px]' src={icon === 'google' ? google : facebook} alt="facebook" />
        {text}
      </button>

  )
}
