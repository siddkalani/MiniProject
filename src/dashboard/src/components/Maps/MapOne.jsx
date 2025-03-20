import jsVectorMap from 'jsvectormap';
// import "jsvectormap/dist/css/jsvectormap.css"
import './jsvectormap.css'
import { useEffect } from 'react';
import '../../js/india_en';

const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: '#mapOne',
      map: 'india_en',
      zoomButtons: false,
      zoomOnScroll: false,
      zoomOnScrollSpeed: 2,
      // zoomMax: 12, // Allow the map to zoom out
      zoomMin: 1, // Set a minimum zoom to make it visible on smaller screens
      
      regionStyle: {
        initial: {
          fill: '#C8D0D8',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: 'Satoshi',
          fontWeight: 'semibold',
          fill: '#fff',
        },
        hover: {
          cursor: 'pointer',
        },
      },
    });
  }, []);

  return (
    <div className="col-span-12 rounded-sm border bg-white py-6 px-7.5 shadow-default xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black px-5">
        See your destinations
      </h4>
      <div 
        id="mapOne" 
        className="mapOne w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
      </div>
    </div>
  );
};

export default MapOne;

