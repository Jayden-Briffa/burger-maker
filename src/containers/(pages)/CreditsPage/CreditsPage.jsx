import imageCredits from "../../../assets/credits/imageCredits";
import ImageAndContent from "../../../presentors/ImageAndContent";

const CreditsPage = () => {
        
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {imageCredits.map((creditsData, index) => 
                <ImageAndContent imgSrc={creditsData.imgSrc} imgTitle={creditsData.imgTitle} key={index} contentStyle={{width: 200}} >
                    <p>{creditsData.description}</p>
                    <a href={creditsData.href}>Created by: {creditsData.creator}</a>
                </ImageAndContent>
            )}
        </div>
    )
}

export default CreditsPage;