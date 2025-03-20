import { NavLink } from "react-router-dom";
import CitiesHome from "./CitiesHome.jsx";

const Cities = () => {
  return (
    <div className="w-full h-full bg-white grid grid-cols-3 pb-[4rem]">
      <NavLink to="/app/delhi">
        <CitiesHome
          name="Delhi"
          img="https://www.shutterstock.com/image-photo/india-gate-war-memorial-located-600nw-2280213565.jpg"
        />
      </NavLink>
      <CitiesHome
        name="Mumbai"
        img="https://tourscanner.com/blog/wp-content/uploads/2022/07/fun-and-unusual-things-to-do-in-Mumbai.jpg"
      />
      <CitiesHome
        name="Banglore"
        img="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/bangalore-famous.jpg"
      />
      <CitiesHome
        name="Kottakal"
        img="https://static.toiimg.com/photo/msid-89747605,width-96,height-65.cms"
      />
      <CitiesHome
        name="Rishikesh"
        img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/316225310.jpg?k=a00006f335f5a1e4594b31dd453708c306f6cccf53d722f65f3ba4499ef15c71&o=&hp=1"
      />
      <CitiesHome
        name="Banglore"
        img="https://t3.ftcdn.net/jpg/02/54/58/20/360_F_254582082_kXuSkV48X1gLlecsoYegKW6ZDWJSvzcW.jpg"
      />
      {/* <CitiesMain/> */}
    </div>
  );
};

export default Cities;
