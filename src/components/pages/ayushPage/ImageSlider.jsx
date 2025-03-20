import React from 'react';
import image1 from "../../../assets/ayush/image1.jpg"
import image2 from "../../../assets/ayush/image2.png"
import image3 from "../../../assets/ayush/image3.jpg"
import image4 from "../../../assets/ayush/image4.png"

const ImageSlider = () => {
    return (
        <section id='category' className='bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]'>
            <div className='container-custom'>
                <div className='row-title flex justify-center w-full'>
                    <div className='styled-col items-center justify-center gap-6'>
                        <div className='text-center'>
                            <div className='col-row-title'>
                                <h1 className='font-cormo text-amber-950'>AYUSH Promotions</h1>
                            </div>
                        </div>
                        <div className='text-center max-w-[35em] mt-[-1em]'>
                            <p className='font-cormo italic text-[1.8rem] font-medium text-amber-950'>Indulge in what we offer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full relative'>
                <div className='md:flex md:flex-row flex flex-col w-full gap-[var(--container-padding)]'>
                    {/* Static image blocks */}
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <img
                            src={image1}
                            alt='Image 1'
                            className='carousel-image hexagon-shape h-[25rem] md:h-[18rem]'
                        />
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <img
                           src={image2}
                            alt='Image 1 Duplicate'
                            className='carousel-image hexagon-shape h-[25rem] md:h-[18rem]'
                        />
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <img
                             src={image3}
                            alt='Image 2'
                            className='carousel-image hexagon-shape h-[25rem] md:h-[18rem]'
                        />
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <img
                               src={image4}
                            alt='Image 3'
                            className='carousel-image hexagon-shape h-[25rem] md:h-[18rem]'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
