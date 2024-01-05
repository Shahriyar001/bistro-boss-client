import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est officiis accusamus nulla delectus quae natus necessitatibus ab obcaecati amet dolore quo, ea hic odit dolor facere illum consectetur non blanditiis excepturi at quidem. Facilis repellat nam, voluptas ipsa alias est.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white btn-neutral">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;