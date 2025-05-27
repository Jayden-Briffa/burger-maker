import ImageAndContent from "../../../presentors/ImageAndContent";
import steps from './steps.js';

const GuidePage = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {steps.map((step, index) => 
                <ImageAndContent imgSrc={step.imgSrc} imgTitle={step.imgTitle} key={index} contentStyle={{width: 200}} imgStyle={{width: 150}} >
                    <p>{step.description}</p>
                </ImageAndContent>
            )}
        </div>
    )
}

export default GuidePage;