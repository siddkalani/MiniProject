/* eslint-disable react/prop-types */
import AuthHeader from "./AuthHeader";
import photo from '../../layout/logowithoutbg.png'
export default function AuthLogo({header}) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src={photo}
        alt="Your Company"
      />
      <AuthHeader header={header} />
    </div>
  );
}
