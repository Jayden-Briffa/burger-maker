import imageCredits from "../../../assets/credits/imageCredits";
import ImageCredit from "../../../presentors/ImageCredit";

const CreditsPage = () => {
        
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {imageCredits.map((creditsData, index) => <ImageCredit {...creditsData} key={index} />)}
        </div>
    )
}

export default CreditsPage;